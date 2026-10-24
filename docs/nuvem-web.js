(function(){'use strict';var require=window.__bymRequire,module={exports:{}},exports=module.exports;
'use strict';
/* Bymetal — sincronização entre computadores pelo Firebase (Firestore), registro por registro.
   Cada metal, cliente, orçamento etc. é um documento em  oficinas/<código>/<coleção>/<id>  com { d: JSON do registro, t: hora da alteração, del: apagado? }.
   Vale a alteração mais recente de cada registro. O arquivo local continua sendo a cópia principal: sem internet o app funciona
   normalmente e, quando a conexão volta, o que ficou pendente é enviado. Roda no processo principal (a senha não passa pela página). */
const fs = require('fs');
const crypto = require('crypto');

const COLS = ['metais', 'clientes', 'orc', 'servicos', 'retalhos', 'compras', 'funcionarios', 'pagamentosFuncionarios', 'usuarios'];
const hash = s => crypto.createHash('sha1').update(s).digest('hex');
const comTempo = (p, ms) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(Object.assign(new Error('tempo esgotado'), { code: 'timeout' })), ms))]);

function carregarFirebase() {
  return { ...require('firebase/app'), ...require('firebase/auth'), ...require('firebase/firestore') };
}

function mensagemErro(e) {
  const c = String((e && e.code) || '');
  if (/invalid-credential|wrong-password|user-not-found|invalid-email/.test(c)) return 'E-mail ou senha incorretos.';
  if (/too-many-requests/.test(c)) return 'Muitas tentativas. Aguarde alguns minutos.';
  if (/permission-denied/.test(c)) return 'Sem permissão no Firestore. Confira as regras e se este e-mail está liberado.';
  if (/network|unavailable|timeout/.test(c) || /network/i.test(String(e && e.message))) return 'Sem conexão com a internet.';
  if (/api-key|invalid-api-key/.test(c)) return 'A chave (apiKey) do Firebase é inválida.';
  return String((e && e.message) || e || 'Erro desconhecido').slice(0, 160);
}

/* Lê apiKey, projectId e appId de um texto colado do console do Firebase (objeto JS ou JSON) */
function lerConfigFirebase(txt) {
  const pega = k => { const m = String(txt || '').match(new RegExp('["\']?' + k + '["\']?\\s*:\\s*["\']([^"\']+)["\']')); return m ? m[1].trim() : ''; };
  return { apiKey: pega('apiKey'), projectId: pega('projectId'), appId: pega('appId') };
}

function criarNuvem({ db, arquivoCfg, arquivoMeta, enviar, cripto, fb: fbInj }) {
  const lerJson = (f, pad) => { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch { return pad; } };
  const gravaJson = (f, o) => { try { fs.writeFileSync(f, JSON.stringify(o)); } catch { /* sem disco: tenta de novo na próxima */ } };

  let cfg = lerJson(arquivoCfg, {});
  let meta = lerJson(arquivoMeta, null);
  if (!meta || typeof meta !== 'object' || !meta.cols) meta = { ini: false, cols: {}, seq: { v: 0, t: 0, sync: true } };
  COLS.forEach(c => { meta.cols[c] = meta.cols[c] || {}; });
  const salvaMeta = () => gravaJson(arquivoMeta, meta);

  let fb = null, app = null, fs_ = null, auth = null, unsubs = [], primeiros = 0, pronto = false, ocupado = false;
  let timerEnvio = null, timerRetry = null, ultimoT = 0;
  const est = { estado: 'desligado', msg: '', ultimo: null };

  const novoT = () => (ultimoT = Math.max(Date.now(), ultimoT + 1));
  const pendentes = () => COLS.reduce((n, c) => n + Object.values(meta.cols[c]).filter(m => !m.sync).length, 0) + (meta.seq.sync ? 0 : 1);
  const status = () => ({ ...est, pendentes: pendentes(), configurado: !!(cfg.apiKey && cfg.projectId && cfg.email), ativo: !!cfg.ativo, email: cfg.email || '', projectId: cfg.projectId || '', oficina: cfg.oficina || 'bymetal', temSenha: !!cfg.senha });
  const muda = (estado, msg) => { est.estado = estado; est.msg = msg || ''; enviar('nuvem:mudou', status()); };

  /* ---------- local -> nuvem ---------- */
  /* Compara o estado atual com o que já foi enviado e carimba a hora das mudanças (sync:false = falta enviar) */
  function registrarLocal() {
    const st = db.getState();
    COLS.forEach(col => {
      const M = meta.cols[col], vistos = new Set();
      (st[col] || []).forEach(r => {
        if (!r || !r.id) return;
        vistos.add(r.id);
        const h = hash(JSON.stringify(r)), m = M[r.id];
        if (!m || m.del || m.h !== h) M[r.id] = { h, t: novoT(), del: false, sync: false };
      });
      Object.keys(M).forEach(id => { if (!vistos.has(id) && !M[id].del) M[id] = { h: '', t: novoT(), del: true, sync: false }; });
    });
    if ((+st.seq || 0) > (meta.seq.v || 0)) meta.seq = { v: +st.seq, t: novoT(), sync: false };
    salvaMeta();
    return st;
  }

  async function empurrar() {
    if (!pronto || !cfg.ativo || ocupado) return;
    ocupado = true;
    try {
      const st = registrarLocal(), ops = [];
      COLS.forEach(col => Object.entries(meta.cols[col]).forEach(([id, m]) => {
        if (m.sync) return;
        if (m.del) ops.push({ col, id, v: { d: '', t: m.t, del: true }, m });
        else { const r = (st[col] || []).find(x => x && x.id === id); if (r) ops.push({ col, id, v: { d: JSON.stringify(r), t: m.t, del: false }, m }); }
      }));
      if (!meta.seq.sync) ops.push({ col: 'meta', id: 'seq', v: { v: meta.seq.v, t: meta.seq.t }, m: meta.seq });
      for (let i = 0; i < ops.length; i += 400) {
        const lote = ops.slice(i, i + 400), b = fb.writeBatch(fs_);
        lote.forEach(o => b.set(fb.doc(fs_, 'oficinas', cfg.oficina, o.col, o.id), o.v));
        await comTempo(b.commit(), 20000);
        lote.forEach(o => { o.m.sync = true; });
        salvaMeta();
      }
      est.ultimo = new Date().toISOString();
      muda('online');
    } catch (e) {
      muda('offline', mensagemErro(e));
    } finally { ocupado = false; }
  }

  function agendarEnvio(ms = 1500) {
    if (!cfg.ativo || !fb) return;
    if (pronto || meta.ini) { try { registrarLocal(); } catch { /* o envio tenta de novo */ } }   // grava a hora da alteração já
    if (!pronto) return;
    clearTimeout(timerEnvio); timerEnvio = setTimeout(() => empurrar(), ms);
    enviar('nuvem:mudou', status());
  }

  /* ---------- nuvem -> local ---------- */
  function aplicar(col, mudancas) {
    if (col === 'meta') {
      mudancas.forEach(r => { if (r.id === 'seq' && +r.v > (meta.seq.v || 0)) { meta.seq = { v: +r.v, t: +r.t || 0, sync: true }; } });
      const st = db.getState();
      if ((meta.seq.v || 0) > (+st.seq || 0)) { db.setState({ ...st, seq: meta.seq.v }); salvaMeta(); enviar('db:atualizado', db.getState()); }
      return;
    }
    const st = db.getState(), M = meta.cols[col], lista = (st[col] || []).slice(), tocados = [];
    mudancas.forEach(r => {
      const m = M[r.id], t = +r.t || 0;
      if (m && m.t >= t) return;                                  // já temos essa versão (ou uma mais nova)
      const i = lista.findIndex(x => x && x.id === r.id);
      if (r.del) { if (i >= 0) lista.splice(i, 1); M[r.id] = { h: '', t, del: true, sync: true }; tocados.push(null); return; }
      let rec; try { rec = JSON.parse(r.d); } catch { return; }
      if (!rec || rec.id !== r.id) return;
      if (i >= 0) lista[i] = rec; else lista.push(rec);
      tocados.push(r.id); M[r.id] = { h: '', t, del: false, sync: true };
    });
    if (!tocados.length) return;
    db.setState({ ...st, [col]: lista });
    const depois = db.getState();                                 // já higienizado: é com ele que o hash precisa bater (senão reenviaria tudo)
    tocados.filter(Boolean).forEach(id => { const r = (depois[col] || []).find(x => x && x.id === id); if (r) M[id].h = hash(JSON.stringify(r)); });
    salvaMeta();
    enviar('db:atualizado', depois);
  }

  function ouvir() {
    primeiros = COLS.length + 1;
    const primeiro = () => { if (--primeiros === 0) concluirPrimeira(); };
    [...COLS, 'meta'].forEach(col => {
      let visto = false;
      const ref = fb.collection(fs_, 'oficinas', cfg.oficina, col);
      unsubs.push(fb.onSnapshot(ref, { includeMetadataChanges: true }, snap => {
        try {
          const ch = snap.docChanges().map(c => ({ id: c.doc.id, ...c.doc.data() }));
          if (ch.length) aplicar(col, ch);
          if (snap.metadata.fromCache && visto) muda('offline', 'Sem conexão. As alterações ficam guardadas e são enviadas quando voltar.');
          else if (!snap.metadata.fromCache && est.estado !== 'online') { muda('online'); if (pendentes()) agendarEnvio(300); }
        } catch (e) { muda('erro', mensagemErro(e)); }
        if (!visto && !snap.metadata.fromCache) { visto = true; primeiro(); }
      }, e => muda(/permission/.test(String(e && e.code)) ? 'erro' : 'offline', mensagemErro(e))));
    });
  }

  /* Só depois de receber o que já está na nuvem é que o que existe só aqui é enviado (a nuvem vale mais na primeira conexão) */
  function concluirPrimeira() {
    pronto = true;
    meta.ini = true; salvaMeta();
    agendarEnvio(100);
  }

  /* ---------- ligar / desligar ---------- */
  async function iniciar() {
    parar(false);
    if (!cfg.ativo || !cfg.apiKey || !cfg.projectId || !cfg.email || !cfg.senha) { muda('desligado'); return; }
    muda('conectando');
    try {
      fb = fbInj || carregarFirebase();
      app = fb.initializeApp({ apiKey: cfg.apiKey, projectId: cfg.projectId, authDomain: cfg.projectId + '.firebaseapp.com', appId: cfg.appId || undefined }, 'bymetal-' + Date.now());
      auth = fb.getAuth(app);
      await comTempo(fb.signInWithEmailAndPassword(auth, cfg.email, cripto.dec(cfg.senha)), 20000);
      fs_ = fb.getFirestore(app);
      ouvir();
      timerRetry = setInterval(() => { if (pendentes()) empurrar(); }, 30000);
    } catch (e) {
      muda(/credential|password|user|api-key|email/.test(String(e.code)) ? 'erro' : 'offline', mensagemErro(e));
      if (e.code !== 'auth/invalid-credential' && !/api-key|password|user|email/.test(String(e.code))) timerRetry = setTimeout(() => iniciar(), 30000);
    }
  }

  function parar(aviso = true) {
    clearTimeout(timerEnvio); clearInterval(timerRetry); clearTimeout(timerRetry);
    unsubs.forEach(u => { try { u(); } catch { /* ignora */ } }); unsubs = [];
    pronto = false;
    try { if (fb && app && fb.deleteApp) fb.deleteApp(app); } catch { /* ignora */ }
    app = fs_ = auth = null;
    if (aviso) muda('desligado');
  }

  async function conectar(dados) {
    const c = dados || {};
    let { apiKey, projectId, appId } = c.config ? lerConfigFirebase(c.config) : { apiKey: c.apiKey, projectId: c.projectId, appId: c.appId };
    apiKey = String(apiKey || cfg.apiKey || '').trim(); projectId = String(projectId || cfg.projectId || '').trim();
    const email = String(c.email || cfg.email || '').trim(), oficina = String(c.oficina || cfg.oficina || 'bymetal').trim().replace(/[^A-Za-z0-9_-]/g, '').slice(0, 40) || 'bymetal';
    if (!apiKey || !projectId) return { ok: false, erro: 'Cole a configuração do Firebase (apiKey e projectId).' };
    if (!email || !(c.senha || cfg.senha)) return { ok: false, erro: 'Informe o e-mail e a senha do usuário do Firebase.' };
    if (cfg.oficina && oficina !== cfg.oficina) { meta = { ini: false, cols: {}, seq: { v: 0, t: 0, sync: true } }; COLS.forEach(k => { meta.cols[k] = {}; }); salvaMeta(); }   // outra oficina: recomeça a comparação
    cfg = { ...cfg, apiKey, projectId, appId: String(appId || cfg.appId || ''), email, oficina, ativo: true };
    if (c.senha) cfg.senha = cripto.enc(String(c.senha));
    gravaJson(arquivoCfg, cfg);
    await iniciar();
    return { ok: est.estado !== 'erro', erro: est.estado === 'erro' ? est.msg : undefined, ...status() };
  }

  function desconectar() {
    cfg = { ...cfg, ativo: false }; gravaJson(arquivoCfg, cfg);
    parar(true);
    return status();
  }

  return { iniciar, conectar, desconectar, agendarEnvio, status, parar, _meta: () => meta };
}

module.exports = { criarNuvem, lerConfigFirebase, mensagemErro, COLS };

window.__nuvemMod=module.exports;})();
