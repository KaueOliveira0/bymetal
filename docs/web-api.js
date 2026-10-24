/* Bymetal Web — versão para celular/navegador.
   Cria o "window.api" que, no programa do computador, vem do Electron. Aqui:
   - os dados ficam no próprio aparelho (IndexedDB) e são a cópia principal, como no computador;
   - a sincronização usa o MESMO nuvem.js do programa (Firebase), carregado por nuvem-web.js;
   - WhatsApp automático e alertas em segundo plano não existem no celular (ficam no computador). */
(function () {
  'use strict';
  const COLS = ['metais', 'clientes', 'orc', 'servicos', 'retalhos', 'compras', 'funcionarios', 'pagamentosFuncionarios', 'usuarios'];
  const FBV = '10.14.1';

  /* ---------- armazenamento (IndexedDB, com cópia em memória) ---------- */
  const mem = new Map();
  let idb = null;
  const abrir = () => new Promise(res => {
    try {
      const rq = indexedDB.open('bymetal-web', 1);
      rq.onupgradeneeded = () => rq.result.createObjectStore('kv');
      rq.onsuccess = () => res(rq.result);
      rq.onerror = () => res(null);
    } catch (e) { res(null); }
  });
  const kvLer = k => new Promise(res => {
    if (!idb) return res(undefined);
    try { const r = idb.transaction('kv').objectStore('kv').get(k); r.onsuccess = () => res(r.result); r.onerror = () => res(undefined); } catch (e) { res(undefined); }
  });
  const kvGravar = (k, v) => {
    mem.set(k, v);
    if (!idb) return;
    try { idb.transaction('kv', 'readwrite').objectStore('kv').put(v, k); } catch (e) { /* sem espaço: segue na memória */ }
  };

  const PADRAO_CFG = { telefone: '', fornecedor: '', limiteMinimo: 30, minimoPadrao: 5, waAtivo: false, tema: 'auto',
    empRazao: '', empFantasia: '', empCnpj: '', empEnd: '', empTel: '', empEmail: '', empPix: '', empValidade: 10, empCond: '' };
  let estado = { metais: [], clientes: [], orc: [], servicos: [], retalhos: [], compras: [], funcionarios: [], pagamentosFuncionarios: [], usuarios: [], seq: 1, iniciado: false };
  let config = { ...PADRAO_CFG };
  const arq = {};                                                        // "arquivos" do nuvem.js (configuração e controle da sincronização)

  const getState = () => JSON.parse(JSON.stringify({ ...estado, vazio: !estado.iniciado }));
  const setState = s => {
    const n = { ...estado };
    COLS.forEach(c => { n[c] = Array.isArray(s[c]) ? s[c].filter(x => x && typeof x === 'object') : (n[c] || []); });
    n.seq = +s.seq || n.seq || 1; n.iniciado = true;
    estado = JSON.parse(JSON.stringify(n));
    kvGravar('estado', estado);
  };

  /* ---------- ambiente para o nuvem.js (que foi escrito para o Node) ---------- */
  const hashRapido = s => {                                              // só é comparado com ele mesmo neste aparelho
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < s.length; i++) { const c = s.charCodeAt(i); h1 = Math.imul(h1 ^ c, 2654435761); h2 = Math.imul(h2 ^ c, 1597334677); }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (h2 >>> 0).toString(16).padStart(8, '0') + (h1 >>> 0).toString(16).padStart(8, '0') + s.length.toString(16);
  };
  let FB = null;
  const fbMod = nome => { if (!FB) throw new Error('Firebase não carregado'); return FB[nome]; };
  window.__bymRequire = nome => {
    if (nome === 'fs') return {
      readFileSync: f => { if (!(f in arq)) throw new Error('ENOENT'); return arq[f]; },
      writeFileSync: (f, t) => { arq[f] = String(t); kvGravar('arq:' + f, arq[f]); }
    };
    if (nome === 'crypto') return { createHash: () => { let t = ''; const o = { update: x => { t += x; return o; }, digest: () => hashRapido(t) }; return o; } };
    if (/^firebase\//.test(nome)) return fbMod(nome);
    throw new Error('módulo indisponível: ' + nome);
  };
  async function carregarFirebase() {
    if (FB) return FB;
    if (window.__FBMOCK) { FB = window.__FBMOCK; return FB; }           // testes
    const base = 'https://www.gstatic.com/firebasejs/' + FBV + '/';
    const [a, b, c] = await Promise.all([import(base + 'firebase-app.js'), import(base + 'firebase-auth.js'), import(base + 'firebase-firestore.js')]);
    const fire = { ...c, getFirestore: app => (c.initializeFirestore ? c.initializeFirestore(app, { experimentalAutoDetectLongPolling: true }) : c.getFirestore(app)) };
    FB = { ...a, ...b, ...fire };
    return FB;
  }
  /* o nuvem.js chama require('firebase/app') etc.: devolvemos o conjunto inteiro */
  const reqOrig = window.__bymRequire;
  window.__bymRequire = nome => (/^firebase\//.test(nome) ? FB : reqOrig(nome));

  /* ---------- eventos para a tela ---------- */
  const ouvintes = {};
  const enviar = (canal, dado) => (ouvintes[canal] || []).slice().forEach(cb => { try { cb(dado); } catch (e) { /* tela cuida */ } });
  const ouvir = canal => cb => { (ouvintes[canal] = ouvintes[canal] || []).push(cb); return () => { ouvintes[canal] = (ouvintes[canal] || []).filter(x => x !== cb); }; };

  let N = null;
  const pronto = (async () => {
    idb = await abrir();
    const e = await kvLer('estado'); if (e && typeof e === 'object') estado = { ...estado, ...e };
    const c = await kvLer('config'); if (c && typeof c === 'object') config = { ...PADRAO_CFG, ...c };
    for (const f of ['nuvem-cfg', 'nuvem-meta']) { const v = await kvLer('arq:' + f); if (typeof v === 'string') arq[f] = v; }
    for (let i = 0; i < 100 && !window.__nuvemMod; i++) await new Promise(r => setTimeout(r, 50));
    const mod = window.__nuvemMod;
    N = mod.criarNuvem({
      db: { getState, setState }, arquivoCfg: 'nuvem-cfg', arquivoMeta: 'nuvem-meta', enviar,
      cripto: { enc: t => t, dec: t => t }, fb: null
    });
    return true;
  })();


  /* ---------- primeiro acesso: conectar à nuvem para trazer os dados e os usuários do computador ---------- */
  const esc = t => String(t == null ? '' : t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  function primeiroAcesso() {
    return new Promise(resolve => {
      const el = document.createElement('div');
      el.id = 'pa';
      el.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#141517;color:#eee;overflow:auto;padding:calc(18px + env(safe-area-inset-top)) 16px 30px;font-family:system-ui,sans-serif';
      const campo = 'width:100%;box-sizing:border-box;padding:12px;margin:4px 0 12px;border-radius:10px;border:1px solid #444;background:#1e2023;color:#eee;font-size:16px';
      const botao = 'width:100%;padding:14px;border:0;border-radius:12px;font-size:16px;font-weight:700;margin-top:6px;';
      el.innerHTML = '<div style="max-width:460px;margin:0 auto"><h2 style="color:#ee8330;margin:6px 0">Bymetal no celular</h2>'
        + '<p style="line-height:1.5;color:#bbb">Conecte este aparelho à mesma nuvem (Firebase) do computador para trazer estoque, clientes, orçamentos e usuários.</p>'
        + '<label>Configuração do Firebase (cole o texto <b>firebaseConfig</b>)</label><textarea id="pa-c" rows="5" style="' + campo + '" placeholder="const firebaseConfig = { apiKey: ..., projectId: ... }"></textarea>'
        + '<label>E-mail do Firebase</label><input id="pa-e" type="email" autocapitalize="off" autocomplete="username" style="' + campo + '">'
        + '<label>Senha do Firebase</label><input id="pa-s" type="password" autocomplete="current-password" style="' + campo + '">'
        + '<label>Nome da oficina (o mesmo do computador)</label><input id="pa-o" value="bymetal" autocapitalize="off" style="' + campo + '">'
        + '<div id="pa-m" style="min-height:22px;margin:4px 0;color:#ff8a80"></div>'
        + '<button id="pa-ok" style="' + botao + 'background:#ee8330;color:#fff">Conectar e baixar meus dados</button>'
        + '<button id="pa-no" style="' + botao + 'background:#2a2d31;color:#ccc">Usar sem nuvem (só neste aparelho)</button></div>';
      document.body.appendChild(el);
      const $ = i => el.querySelector('#' + i), msg = (t, bom) => { $('pa-m').style.color = bom ? '#8be28b' : '#ff8a80'; $('pa-m').textContent = t; };
      $('pa-no').onclick = () => { el.remove(); resolve(); };
      $('pa-ok').onclick = async () => {
        const b = $('pa-ok'); b.disabled = true; msg('Conectando…', true);
        try {
          await carregarFirebase();
          const r = await N.conectar({ config: $('pa-c').value, email: $('pa-e').value, senha: $('pa-s').value, oficina: $('pa-o').value });
          if (!r || !r.ok) { msg((r && r.erro) || 'Não foi possível conectar.'); b.disabled = false; return; }
          msg('Baixando seus dados…', true);
          for (let i = 0; i < 120 && !(N.status().estado === 'online' && N._meta().ini); i++) await new Promise(x => setTimeout(x, 250));
          await new Promise(x => setTimeout(x, 400));                    // deixa as últimas coleções chegarem
          el.remove(); resolve();
        } catch (e) { msg(String((e && e.message) || e).slice(0, 160)); b.disabled = false; }
      };
    });
  }

  /* ---------- window.api ---------- */
  const FIM = { ok: false, erro: 'Disponível só no programa do computador.' };
  window.api = {
    web: true,
    db: {
      carregar: async () => {
        await pronto;
        if (!estado.iniciado && !N.status().ativo) await primeiroAcesso();
        return getState();
      },
      salvar: s => {
        if (!s || !Array.isArray(s.metais) || !Array.isArray(s.clientes) || !Array.isArray(s.orc)) return;
        setState(s); if (N) N.agendarEnvio();
      }
    },
    config: {
      get: async () => { await pronto; return { ...config }; },
      set: async n => { await pronto; if (n && typeof n === 'object') { config = { ...config, ...n }; kvGravar('config', config); } return { ...config }; }
    },
    whatsapp: { estado: async () => null, conectar: async () => 0, desconectar: async () => 0, enviarTexto: async () => FIM },
    nuvem: {
      estado: async () => { await pronto; return N.status(); },
      conectar: async d => { await pronto; await carregarFirebase().catch(e => { throw e; }); return N.conectar(d || {}); },
      desconectar: async () => { await pronto; return N.desconectar(); },
      onMudou: ouvir('nuvem:mudou'), onDados: ouvir('db:atualizado')
    },
    alerta: { teste: async () => FIM },
    pdf: {
      salvar: async (html) => {                                          // abre o documento e chama "Imprimir > Salvar como PDF"
        const w = window.open('', '_blank');
        if (!w) return { ok: false, erro: 'Libere os pop-ups deste site para salvar o PDF.' };
        w.document.open(); w.document.write(html); w.document.close();
        setTimeout(() => { try { w.focus(); w.print(); } catch (e) { /* o usuário imprime pela janela */ } }, 500);
        return { ok: false, cancelado: true };
      },
      enviarWhatsApp: async d => {                                       // sem envio automático: abre o WhatsApp com a mensagem pronta
        const n = String((d && d.telefone) || '').replace(/\D/g, '');
        const num = n.length >= 10 && n.length <= 11 ? '55' + n : n;
        window.open('https://wa.me/' + num + '?text=' + encodeURIComponent((d && d.legenda) || ''), '_blank', 'noopener');
        return { ok: true, web: true };
      }
    },
    atualizacao: {
      estado: async () => ({ versao: window.BYMETAL_VERSAO || '', empacotado: false, fase: 'inativo', web: true }),
      verificar: async () => { await window.__webAtualiza(); return null; },
      instalar: async () => false, onMudou: () => () => {}
    },
    abrirLink: url => { try { window.open(String(url), '_blank', 'noopener'); } catch (e) { /* ignora */ } return true; },
    notificar: () => {},
    onWhatsApp: () => () => {},
    onNavegar: () => () => {}
  };

  /* ---------- reconexão automática (celular dorme e perde a conexão) ---------- */
  const reconectar = async () => { try { await pronto; const s = N.status(); if (s.ativo && s.configurado && s.estado !== 'online' && s.estado !== 'conectando') { await carregarFirebase(); N.iniciar(); } } catch (e) { /* tenta depois */ } };
  window.addEventListener('online', reconectar);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) reconectar(); });
  pronto.then(() => setTimeout(async () => { try { if (N.status().ativo) { await carregarFirebase(); N.iniciar(); } } catch (e) { /* sem rede: o app funciona offline */ } }, 800));

  /* ---------- atualização do app web: apaga o cache e recarrega ---------- */
  window.__webAtualiza = async () => {
    try { const regs = await navigator.serviceWorker.getRegistrations(); await Promise.all(regs.map(r => r.unregister())); } catch (e) { /* ignora */ }
    try { const ks = await caches.keys(); await Promise.all(ks.map(k => caches.delete(k))); } catch (e) { /* ignora */ }
    location.reload();
  };
})();
