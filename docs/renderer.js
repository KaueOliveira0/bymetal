const LOGO="data:image/jpeg;base64,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";
const $=s=>document.querySelector(s),KEY='bymetal-v1';
const R=n=>(n||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const N=n=>(n||0).toLocaleString('pt-BR',{maximumFractionDigits:2});
const e=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fd=d=>d?new Date(d).toLocaleDateString('pt-BR'):'—';
const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
/* Busca tolerante: ignora acento, maiúsculas, pontos, "·", traços, barras e espaços repetidos ("ct118" acha "CT-118 · Cantoneira") */
const tol=s=>norm(s).replace(/[·.,;:\-–—_/\\|()]+/g,' ').replace(/\s+/g,' ').trim();
const match=(m,q)=>{const h=tol(m.cod+' '+m.nome),t=tol(q);if(!t)return true;return t.split(' ').every(w=>h.includes(w))||h.replace(/ /g,'').includes(t.replace(/ /g,''))};
let S={metais:[],clientes:[],orc:[],servicos:[],retalhos:[],compras:[],usuarios:[],funcionarios:[],pagamentosFuncionarios:[],seq:1};
/* ===== Ponte com o Electron =====
   O preload.js expõe "window.api" (contextBridge). O navegador protege essa propriedade, por isso NÃO se pode
   declarar um nome "api" com const/let/var neste arquivo: dá "Identifier 'api' has already been declared",
   mesmo com uma declaração só.
   Então o arquivo usa window.api direto (todas as chamadas continuam "api.alguma.coisa") e só cria um substituto
   quando a página abre fora do Electron (teste no navegador). Não declare "api" de novo em nenhum lugar. */
if (!window.api) {
  window.api = {
    db: { carregar: async () => ({ vazio: true }), salvar: () => {} },
    config: { get: async () => ({ telefone: '', fornecedor: '', limiteMinimo: 30, minimoPadrao: 5, tema: 'auto', empValidade: 10 }), set: async () => null },
    whatsapp: { estado: async () => null, conectar: async () => 0, desconectar: async () => 0, enviarTexto: async () => ({ ok: false, erro: 'Disponível só no aplicativo.' }) },
    abrirLink: url => window.open(url, '_blank'),
    nuvem: { estado: async () => null, conectar: async () => ({ ok: false, erro: 'Disponível só no aplicativo.' }), desconectar: async () => null, onMudou() { return () => {}; }, onDados() { return () => {}; } },
    alerta: { teste: async () => ({ ok: false, erro: 'Disponível só no aplicativo.' }) },
    pdf: { salvar: async () => ({ ok: false, erro: 'Disponível só no aplicativo.' }), enviarWhatsApp: async () => ({ ok: false, erro: 'Disponível só no aplicativo.' }) },
    notificar() {},
    onWhatsApp() { return () => {}; },
    onNavegar() { return () => {}; }
  };
}
let _sy;
const snapshot=()=>({metais:S.metais,clientes:S.clientes,orc:S.orc,servicos:S.servicos,retalhos:S.retalhos,compras:S.compras,usuarios:S.usuarios,funcionarios:S.funcionarios,pagamentosFuncionarios:S.pagamentosFuncionarios,seq:S.seq});
const saveNow=()=>{clearTimeout(_sy);_sy=null;api.db.salvar(snapshot())};
const save=()=>{clearTimeout(_sy);_sy=setTimeout(saveNow,250)};
addEventListener('beforeunload',()=>{if(_sy)saveNow()});
const uid=()=>Math.random().toString(36).slice(2,9),by=(a,id)=>a.find(x=>x.id===id);
const toastBox=()=>{let b=document.getElementById('tst');if(!b){b=document.createElement('div');b.id='tst';document.body.appendChild(b)}return b};
/* toast(msg) simples; toastAcoes(msg,[[rótulo,função],...]) com atalhos clicáveis (fica 8 s) */
const toast=(m,nativa,acoes)=>{const t=document.createElement('div');t.className='toast';const sp=document.createElement('span');sp.textContent=m;t.appendChild(sp);
 if(acoes&&acoes.length){const d=document.createElement('div');d.className='ta';acoes.forEach(([r,f])=>{const b=document.createElement('button');b.type='button';b.textContent=r;b.onclick=()=>{t.remove();try{f()}catch(x){}};d.appendChild(b)});t.appendChild(d)}
 toastBox().appendChild(t);setTimeout(()=>t.remove(),acoes&&acoes.length?8000:2400);if(nativa)api.notificar('Bymetal',m)};
const toastAcoes=(m,acoes,nativa)=>toast(m,nativa,acoes);
/* estoque em barras: 100% = quantidade após a última entrada; ≤50% amarelo; ≤30% vermelho */
const pct=m=>m.ref>0?Math.max(0,Math.min(100,m.est/m.ref*100)):0;
const cor=p=>p<=30?'var(--rd)':p<=50?'var(--am)':'var(--ok)';
/* ===== Estoque mínimo fixo por metal (barras) =====
   Crítico = estoque <= mínimo (o alerta do Painel e do WhatsApp dispara aqui) · Atenção = até 1,5x o mínimo · OK = acima disso.
   Metal que nunca teve entrada ("sem entrada") não alerta. */
const minM=m=>Math.max(0,+m.estMinimo||0);
/* ===== Unidades de medida do metal: barra (comprimento fixo), metro ou quilo. Custo, venda, estoque e mínimo ficam sempre "por unidade". ===== */
const UNID={barra:{n:'Barra (6m)',p:'barras',por:'barra',met:6},barra3:{n:'Barra (3m)',p:'barras',por:'barra',met:3},m:{n:'Metro (m)',p:'m',por:'metro'},cm:{n:'Centímetro (cm)',p:'cm',por:'cm'},mm:{n:'Milímetro (mm)',p:'mm',por:'mm'},m2:{n:'Metro quadrado (m²)',p:'m²',por:'m²'},kg:{n:'Quilograma (Kg)',p:'kg',por:'kg'},un:{n:'Unidade (un)',p:'un',por:'unidade'},cx:{n:'Caixa/Pacote (cx)',p:'cx',por:'caixa'}};
const ehBarra=u=>u==='barra'||u==='barra3';                    /* barra de comprimento fixo (6 m ou 3 m): usa a "metragem da barra" */
const semPeso=u=>u==='un'||u==='cx';                            /* unidade e caixa não têm peso teórico */
const LENF={m:1,cm:.01,mm:.001};                                /* metros em 1 unidade de comprimento */
const unM=m=>m&&UNID[m.un]?m.un:'barra';                       /* metal antigo = barra */
const unI=i=>i&&UNID[i.un]?i.un:'barra';                       /* item de orçamento antigo = barra */
const uP=un=>(UNID[un]||UNID.barra).p;
const qTxt=(q,un)=>ehBarra(un)||!UNID[un]?`${N(q)} ${Math.abs(q-1)<1e-9?'barra':'barras'}`:`${N(q)} ${UNID[un].p}`;
const qItem=i=>i.rid?'1 retalho':qTxt(i.qtd,unI(i));
/* ===== 13. Peso teórico e preço por Kg =====
   Metal: pesoT = kg por metro (ou kg/m²) da tabela do fornecedor, precoKg = R$ por kg.
   Custo da unidade: barra = metragem × peso × R$/kg · metro = peso × R$/kg · quilo = R$/kg. A venda sai do custo + margem, como sempre. */
const nPos=v=>{const n=+v;return Number.isFinite(n)&&n>0?n:0};
const kgUn=m=>{const u=unM(m),p=nPos(m.pesoT);return u==='kg'?1:ehBarra(u)?nPos(m.met)*p:LENF[u]?p*LENF[u]:u==='m2'?p:0};          /* kg em 1 unidade do metal */
const mtUn=m=>{const u=unM(m),p=nPos(m.pesoT);return ehBarra(u)?nPos(m.met):LENF[u]?LENF[u]:u==='kg'&&p?1/p:0};     /* metros em 1 unidade do metal */
const temPeso=m=>!semPeso(unM(m))&&(unM(m)==='kg'?true:kgUn(m)>0);
const fmlCusto=u=>ehBarra(u)?'metragem × peso × R$/kg':u==='kg'?'R$/kg':u==='m2'?'peso (kg/m²) × R$/kg':'peso × R$/kg';
const custoAuto=m=>{const k=nPos(m.precoKg),u=unM(m);if(!k||semPeso(u))return 0;return r2(u==='kg'?k:kgUn(m)*k)};
const pesoItem=i=>i&&!i.rid&&+i.kgu>0?(+i.qtd||0)*i.kgu:0;
const pesoTot=d=>(d.itens||[]).reduce((a,i)=>a+pesoItem(i),0);
const kgTxt=q=>N(Math.round(q*100)/100)+' kg';
const unOpts=cur=>Object.entries(UNID).map(([k,v])=>`<option value="${k}" ${k===cur?'selected':''}>${v.n}</option>`).join('');
/* CPF / CNPJ: máscara enquanto digita e conferência dos dígitos verificadores */
const soNum=v=>String(v||'').replace(/\D/g,'');
function fmtDoc(v){const d=soNum(v).slice(0,14);
 if(d.length<=11)return d.replace(/^(\d{3})(\d)/,'$1.$2').replace(/^(\d{3})\.(\d{3})(\d)/,'$1.$2.$3').replace(/\.(\d{3})(\d)/,'.$1-$2');
 return d.replace(/^(\d{2})(\d)/,'$1.$2').replace(/^(\d{2})\.(\d{3})(\d)/,'$1.$2.$3').replace(/\.(\d{3})(\d)/,'.$1/$2').replace(/(\d{4})(\d)/,'$1-$2')}
function docOk(v){const d=soNum(v);if(!d)return true;if(/^(\d)\1+$/.test(d))return false;
 const dv=(b,pesos)=>{const t=b.split('').reduce((a,c,i)=>a+ +c*pesos[i],0)%11;return t<2?0:11-t};
 if(d.length===11)return dv(d.slice(0,9),[10,9,8,7,6,5,4,3,2])===+d[9]&&dv(d.slice(0,10),[11,10,9,8,7,6,5,4,3,2])===+d[10];
 if(d.length===14)return dv(d.slice(0,12),[5,4,3,2,9,8,7,6,5,4,3,2])===+d[12]&&dv(d.slice(0,13),[6,5,4,3,2,9,8,7,6,5,4,3,2])===+d[13];
 return false}
const nivelM=m=>{if(m.pausado)return 'pausado';if(!(m.ref>0))return 'sem';const q=+m.est||0,mn=minM(m);return q<=mn+1e-9?'critico':q<=mn*1.5+1e-9?'atencao':'ok'};
const corN=m=>({critico:'var(--rd)',atencao:'var(--am)',ok:'var(--ok)'})[nivelM(m)]||'var(--m)';
const rotN=m=>({critico:'Pedir mais',atencao:'Atenção',ok:'OK',sem:'Sem entrada',pausado:'Alertas pausados'})[nivelM(m)];
let MINPAD=5;                                                       /* mínimo padrão para metais novos (Alertas) */
const it=i=>{const c=i.qtd*i.custo,v=c*(1+i.lucro/100);return{c,v,l:v-c}};
const r2=n=>Math.round((+n||0)*100)/100;
/* Formas de pagamento: lista [{forma,valor}]. Orçamentos antigos só tinham "sinal": viram uma linha "Não informada". */
const FORMAS=['Dinheiro','Pix','Cartão de Débito','Cartão de Crédito','Transferência','Boleto'];
const pags=o=>Array.isArray(o.pagamentos)&&o.pagamentos.length?o.pagamentos:((+o.sinal||0)>0?[{forma:'Não informada',valor:+o.sinal}]:[]);
const fPag=p=>p.forma==='Não informada'?'Sinal':p.forma;
const FIADO='A Prazo / Fiado',CRED='Cartão de Crédito';
/* "A Prazo / Fiado" é uma promessa de pagamento ({forma:FIADO,valor,previsto}): NÃO conta como recebido, o valor continua no "Restante a pagar". */
const recebidos=o=>pags(o).filter(p=>p.forma!==FIADO),fiados=o=>pags(o).filter(p=>p.forma===FIADO&&(+p.valor||0)>0);
/* Parcelas do cartão: as primeiras parcelas são arredondadas para baixo e a última leva a diferença (ex.: 3x de R$ 23,86, última R$ 23,88) */
const parcDet=p=>{const n=Math.max(1,Math.min(12,+p.parcelas||1)),v=+p.valor||0,base=Math.floor(v/n*100+1e-9)/100,ult=r2(v-base*(n-1));return r2(base)===ult?`${n}x de ${R(base)}`:`${n}x de ${R(base)} (última ${R(ult)})`};
const fPagTxt=p=>p.forma===CRED&&(+p.parcelas||1)>1?`${p.forma} em ${parcDet(p)}`:p.forma;
const fdp=d=>d?fdd(d):'data não definida';
const calc=d=>{let c=0,v=0;d.itens.forEach(i=>{const x=it(i);c+=x.c;v+=x.v});
 const sv=(d.servicos||[]).reduce((s,x)=>s+(+x.preco||0)*(+x.qtd||0),0),            /* 2. serviços somam no total */
  mo=d.moOn?(d.hh||0)*(d.vh||0):0,base=v+mo+sv,ds=Math.min(base,d.dtipo==='val'?(+d.desc||0):base*(+d.desc||0)/100),
  total=base-ds,sinal=Math.max(0,r2(recebidos(d).reduce((a,p)=>a+(+p.valor||0),0)));                                       /* 3. sinal pago */
 return{c,sub:v,sv,mo,ds,total,lucro:total-c,sinal,restante:Math.max(0,r2(total-sinal))}};

/* ---- 1. Funil de status do orçamento ---- */
const STATUS=['Pendente','Aprovado','Em Produção','Concluído','Cancelado'];
const STCOR={'Pendente':'var(--am)','Aprovado':'#4a9be8','Em Produção':'var(--p)','Concluído':'var(--ok)','Cancelado':'var(--rd)'};
const FECHADOS=['Aprovado','Em Produção','Concluído'];                              /* contam como venda fechada */
const stTag=s=>`<span class="bdg" style="--bc:${STCOR[s]||'var(--m)'}"><i class="dot"></i>${e(s)}</span>`;

const TABS=[['pnl','📊 Painel'],['orc','📝 Orçamentos'],['est','📦 Estoque'],['met','🔩 Metais'],['srv','🛠️ Serviços'],['cli','👥 Clientes'],['rec','📥 A Receber'],['eqp','👷 Equipe'],['fat','💰 Faturamento'],['cfg','⚙️ Configurações']];let tab='pnl',fq='';
/* ---- Tema: sistema / claro / escuro (guardado no banco e num cache local para não piscar ao abrir) ---- */
const MODOS=['auto','light','dark'],ROT={auto:'🖥️ Tema: sistema',light:'☀️ Tema: claro',dark:'🌙 Tema: escuro'},mq=matchMedia('(prefers-color-scheme: dark)');
let modoTema='auto';
const resolveTema=()=>modoTema==='auto'?(mq.matches?'dark':'light'):modoTema;
function aplicaTema(){const h=document.documentElement;h.dataset.theme=resolveTema();h.dataset.modo=modoTema;const b=$('#tt');if(b)b.textContent=ROT[modoTema]}
function guardaTema(){try{localStorage.setItem('bymetal-tema',modoTema)}catch(x){}}
function alternaTema(){modoTema=MODOS[(MODOS.indexOf(modoTema)+1)%MODOS.length];guardaTema();api.config.set({tema:modoTema});aplicaTema()}
function iniciaTema(){try{modoTema=localStorage.getItem('bymetal-tema')||'auto'}catch(x){}if(!MODOS.includes(modoTema))modoTema='auto';aplicaTema();mq.addEventListener('change',()=>{if(modoTema==='auto')aplicaTema()})}
function go(t){if(!USR)return;tab=t;fq='';cfq='';$('#nav').innerHTML=`<img src="${LOGO}" alt="Bymetal"><aside class="usr"><span>👤 <b>${e(USR.nome)}</b></span>${USR.cargo?`<small>${e(USR.cargo)}</small>`:''}<button type="button" onclick="trocaUsuario()">⎋ Sair / Trocar de usuário</button></aside><div>${TABS.map(([k,n])=>`<button class="${k===t?'on':''}" onclick="go('${k}')">${n}</button>`).join('')}<button class="tema" id="tt" onclick="alternaTema()"></button></div>`;aplicaTema();const ap=$('#app');ap.classList.remove('fade');({pnl:vPnl,orc:vOrc,est:vEst,met:vMet,srv:vSrv,cli:vCli,rec:vRec,eqp:vEqp,fat:vFat,cfg:vCfg})[t]();void ap.offsetWidth;ap.classList.add('fade')}
const filt=()=>`<div class="row"><div style="max-width:420px"><input placeholder="🔍 Buscar por código ou nome" value="${e(fq)}" oninput="fq=this.value;${tab==='est'?'eTab':'mTab'}()"></div></div>`;

/* ===== Janelas de aviso/confirmação dentro da página =====
   O alert()/confirm() nativo do Windows prende o foco do Electron (campos que não deixam digitar até dar Alt+Tab).
   Estas janelas são da própria página: não travam nada. aviso(msg) mostra um recado; "await confirmar(msg)" devolve true/false. */
function dlg(msg,pergunta){return new Promise(res=>{
 const m=document.createElement('div');m.className='md dlg';m.style.zIndex=95;
 m.innerHTML=`<div class="mc" role="dialog" aria-modal="true" style="max-width:440px"><p style="margin:0 0 16px;line-height:1.5;white-space:pre-line">${e(msg)}</p><div class="row" style="justify-content:flex-end">${pergunta?'<button class="b s" data-v="0">Cancelar</button>':''}<button class="b" data-v="1">${pergunta?'Confirmar':'OK'}</button></div></div>`;
 const fim=v=>{document.removeEventListener('keydown',tecla,true);m.remove();try{window.focus()}catch(x){}res(v)};
 const tecla=ev=>{if(ev.key==='Escape'){ev.preventDefault();ev.stopPropagation();fim(false)}else if(ev.key==='Enter'){ev.preventDefault();ev.stopPropagation();fim(true)}};
 m.onclick=ev=>{const v=ev.target.dataset&&ev.target.dataset.v;if(v!==undefined)fim(v==='1');else if(ev.target===m&&!pergunta)fim(true)};
 document.addEventListener('keydown',tecla,true);document.body.appendChild(m);m.querySelector('[data-v="1"]').focus()})}
const aviso=msg=>dlg(msg,false),confirmar=msg=>dlg(msg,true);
/* Reativa o foco do campo clicado (evita o campo que "não aceita digitar") */
document.addEventListener('click',(ev)=>{
  if(['INPUT','TEXTAREA','SELECT'].includes(ev.target.tagName)){
    ev.target.focus();
  }
});

/* ===== Orçamento ===== */
const dflt=()=>({cliente:'',status:'Pendente',itens:[],servicos:[],desc:0,dtipo:'pct',hh:0,vh:0,moOn:false,sinal:0,pagamentos:[],obs:'',prazo:''});
/* ===== Numeração por cliente: Orçamento Nº 1, 2, 3... de cada cliente (o.nc). o.n continua sendo o código interno único. =====
   O contador do cliente (seqOrc) só sobe: o número de um orçamento excluído não é reaproveitado. */
const numO=o=>(o&&(o.nc||o.n))||'';
function proxNum(nome,aloca){const c=S.clientes.find(x=>x.nome===nome),mx=Math.max(0,...S.orc.filter(o=>o.cliente===nome).map(o=>+o.nc||0),c?+c.seqOrc||0:0),n=mx+1;if(aloca&&c)c.seqOrc=n;return n}
function nProx(){const el=$('#nprox');if(el)el.textContent=!D.id&&D.cliente?' · Nº '+proxNum(D.cliente)+' de '+D.cliente:''}
let D=dflt(),sel=null,sgi=0,sgl=[],SN=null;
function vOrc(){
 $('#app').innerHTML=`<h2>${D.id?'Editando orçamento Nº '+numO(D)+' de '+e(D.cliente):'Novo orçamento'}<span class="mut" id="nprox" style="font-size:14px;font-weight:600"></span></h2>
 <div class="card"><div class="row"><div style="max-width:460px"><label>Cliente</label>${S.clientes.length?`<select onchange="D.cliente=this.value;nProx()"><option value="">— Escolha o cliente —</option>${S.clientes.map(c=>`<option value="${e(c.nome)}" ${c.nome===D.cliente?'selected':''}>${e(c.nome)}</option>`).join('')}</select>`:'<span class="mut">Nenhum cliente cadastrado.</span> <button class="b s t" onclick="go(\'cli\')">Cadastrar cliente</button>'}</div><div style="max-width:240px"><label>Status</label><select class="st" style="--bc:${STCOR[D.status]}" onchange="D.status=this.value;this.style.setProperty('--bc',STCOR[D.status])">${STATUS.map(s=>`<option ${s===D.status?'selected':''}>${s}</option>`).join('')}</select></div></div>
 ${S.metais.length?`<h3 style="margin-top:16px">Adicionar metal</h3><div class="row"><div style="flex:4"><label>Metal (digite o código ou nome)</label><div class="sgw"><input id="ms" autocomplete="off" placeholder="Ex.: cantoneira, tubo 20..." oninput="sug()" onfocus="this.select();sug()" onblur="$('#sg').style.display='none'" onkeydown="sgk(event)"><button type="button" class="clr" title="Limpar busca" aria-label="Limpar busca" onmousedown="event.preventDefault()" onclick="msLimpa()">✕</button><div class="sg" id="sg"></div></div></div><div style="max-width:170px"><label id="aql">Quantidade</label><input id="aq" type="number" step="any" min="0" value="1" oninput="amPrev()" onkeydown="if(event.key==='Enter')addIt()"></div><div style="max-width:190px;display:none" id="amw"><label>Lançar por</label><select id="am" onchange="amPrev()"></select></div><button class="b" onclick="addIt()">＋ Adicionar</button><button class="b s" onclick="mRetalhos()">✂️ Usar retalho</button></div><div class="mut" id="mi"></div>`:'<p class="mut">Cadastre os metais na aba Metais para montar orçamentos.</p>'}</div>
 <div class="card" id="lin"></div>
 <div class="dock"><button class="dk" onclick="mDesc(1)"><b>％</b>Desconto</button><button class="dk" onclick="mMO(1)"><b>👷</b>Mão de obra</button><button class="dk" onclick="mSrv()"><b>🛠</b>Serviços</button><button class="dk" onclick="mPag()"><b>💳</b>Pagamento</button><button class="dk" onclick="mObs()"><b>📐</b>Medidas / O.S.</button><button class="dk" onclick="imprime(D)"><b>🖨️</b>Imprimir</button><button class="dk" onclick="osOficina(D)"><b>📄</b>O.S. Oficina</button><button class="dk g" onclick="saveO()"><b>💾</b>Salvar</button><button class="dk" onclick="D=dflt();vOrc()"><b>🧹</b>Limpar</button></div>
 <h2 style="margin-top:26px">Orçamentos salvos</h2><div class="card" id="lst"></div>`;lin();lst();nProx()}
function sug(){sel=null;$('#mi').textContent='';sgl=S.metais.filter(m=>match(m,$('#ms').value)).slice(0,40);sgi=0;sgr()}
/* ✕: limpa o campo, zera a escolha e reabre a lista com todos os metais */
function msLimpa(){const i=$('#ms');if(!i)return;i.value='';sel=null;$('#mi').textContent='';i.focus();sug()}
function sgr(){const el=$('#sg');el.style.display='block';el.innerHTML=sgl.length?sgl.map((m,i)=>`<div class="${i===sgi?'on':''}" onmousedown="pick('${m.id}')"><span><b>${e(m.cod)}</b> · ${e(m.nome)}</span><span class="mut">${N(m.est)} ${uP(unM(m))}</span></div>`).join(''):'<div class="mut">Nenhum metal encontrado</div>'}
function sgk(ev){if(ev.key==='ArrowDown'){sgi=Math.min(sgl.length-1,sgi+1);sgr();ev.preventDefault()}else if(ev.key==='ArrowUp'){sgi=Math.max(0,sgi-1);sgr();ev.preventDefault()}else if(ev.key==='Enter'&&sgl[sgi]){pick(sgl[sgi].id);ev.preventDefault()}else if(ev.key==='Escape')$('#sg').style.display='none'}
function pick(id){const m=by(S.metais,id);sel=id;$('#ms').value=m.cod+' · '+m.nome;$('#sg').style.display='none';const u=unM(m),q=UNID[u].por;$('#aql').textContent='Quantidade ('+uP(u)+')';amModos(m);amPrev();$('#aq').focus();$('#aq').select()}
/* Modos de lançamento: na unidade do metal, em Kg totais ou em metros totais (os dois últimos só quando há peso teórico) */
const LENM={barra:['m'],barra3:['m'],m:['cm'],cm:['m'],mm:['m','cm']};
const MODN={m:['Metros totais','Metros totais (m)'],cm:['Centímetros totais','Centímetros totais (cm)'],mm:['Milímetros totais','Milímetros totais (mm)'],kg:['Kg totais','Peso total (kg)']};
function amModos(m){const u=unM(m),sel=$('#am'),w=$('#amw'),ms=[['un','Em '+uP(u)]];
 if(u!=='kg'&&kgUn(m)>0)ms.push(['kg',MODN.kg[0]]);
 if(u==='kg'){if(nPos(m.pesoT)>0)ms.push(['m',MODN.m[0]])}else if(mtUn(m)>0)(LENM[u]||[]).forEach(k=>ms.push([k,MODN[k][0]]));
 sel.innerHTML=ms.map(([k,n])=>`<option value="${k}">${n}</option>`).join('');w.style.display=ms.length>1?'':'none'}
const amQtd=(m,modo,v)=>modo==='kg'?v/kgUn(m):LENF[modo]?v*LENF[modo]/mtUn(m):v;
function amPrev(){const m=by(S.metais,sel);if(!m)return;const modo=$('#am').value||'un',v=+$('#aq').value||0,u=unM(m),q=UNID[u].por;
 $('#aql').textContent=modo!=='un'&&MODN[modo]?MODN[modo][1]:'Quantidade ('+uP(u)+')';
 const qt=v>0?amQtd(m,modo,v):0,kg=kgUn(m)*qt,mt=mtUn(m)*qt;
 $('#mi').innerHTML=`Custo ${R(m.custo)}/${q} · Venda ${R(m.custo*(1+m.lucro/100))}/${q} · Estoque ${N(m.est)} ${uP(u)}${qt>0&&(modo!=='un'||kg>0)?`<br><b>= ${qTxt(qt,u)}${kg>0&&u!=='kg'?' · '+kgTxt(kg):''}${mt>0&&u!=='m'?' · '+N(Math.round(mt*100)/100)+' m':''} · ${R(qt*m.custo*(1+m.lucro/100))}</b>`:''}`}
function addIt(){const m=by(S.metais,sel),v=+$('#aq').value;if(!m){aviso('Digite e escolha um metal da lista.');$('#ms').focus();return}if(!(v>0)){aviso('Informe a quantidade.');return}
 const q=Math.round(amQtd(m,$('#am').value||'un',v)*1e6)/1e6,it_={mid:m.id,cod:m.cod,nome:m.nome,qtd:q,custo:m.custo,lucro:m.lucro,un:unM(m)};
 if(kgUn(m)>0){it_.kgu=Math.round(kgUn(m)*1e6)/1e6;if(mtUn(m)>0)it_.mu=Math.round(mtUn(m)*1e6)/1e6}                /* peso/metros de 1 unidade no dia do orçamento */
 D.itens.push(it_);sel=null;$('#ms').value='';$('#mi').textContent='';$('#aql').textContent='Quantidade';$('#aq').value=1;$('#amw').style.display='none';lin();$('#ms').focus()}
/* Margem de lucro = lucro / total. Verde a partir de 30%, amarelo de 15% a 29%, vermelho abaixo de 15% */
const margemDe=k=>k.total>0?k.lucro/k.total*100:0;
const margemInfo=m=>m>=30?['var(--ok)','Boa']:m>=15?['var(--am)','Atenção']:['var(--rd)','Baixa'];
const margemTag=k=>{const m=margemDe(k),[c,t]=margemInfo(m);return`<span class="mg" style="--bc:${c}" title="Margem = lucro ÷ total"><i class="dot" style="width:8px;height:8px;border-radius:50%;background:${c}"></i>${N(m)}% · ${t}</span>`};
function lin(){const k=calc(D);$('#lin').innerHTML=D.itens.length?`<div class="tw"><table><tr><th>Cód.</th><th>Metal</th><th>Qtd</th><th>Custo</th><th>Lucro %</th><th>Venda</th><th>Lucro</th><th></th></tr>${D.itens.map((i,n)=>{const x=it(i);return`<tr><td>${e(i.cod)}</td><td>${e(i.nome)}</td><td>${i.rid?`<span class="mut" title="Retalho: peça única">1 retalho · ${N(i.comp)} m</span>`:`<input class="sm" type="number" step="any" value="${i.qtd}" onchange="D.itens[${n}].qtd=+this.value;lin()"> <span class="mut">${uP(unI(i))}</span>${pesoItem(i)>0&&(unI(i)!=='kg'||i.mu>0)?`<div class="mut" style="font-size:12px">⚖️ ${[unI(i)!=='kg'?kgTxt(pesoItem(i)):'',i.mu>0&&unI(i)!=='m'?N(Math.round(i.qtd*i.mu*100)/100)+' m':''].filter(Boolean).join(' · ')}</div>`:''}`}</td><td>${R(x.c)}</td><td><input class="sm" type="number" step="any" value="${i.lucro}" onchange="D.itens[${n}].lucro=+this.value;lin()"></td><td>${R(x.v)}</td><td class="gn">${R(x.l)}</td><td><button class="b d t" onclick="D.itens.splice(${n},1);lin()">✕</button></td></tr>`}).join('')}</table></div>
 ${D.servicos.length?`<h3 style="margin-top:16px">Serviços</h3><div class="tw"><table><tr><th>Serviço</th><th>Qtd</th><th>Valor unit.</th><th>Total</th><th></th></tr>${D.servicos.map((s,n)=>`<tr><td>${e(s.nome)}</td><td><input class="sm" type="number" min="0" step="any" value="${s.qtd}" onchange="D.servicos[${n}].qtd=+this.value||0;lin()"></td><td>${R(s.preco)}</td><td class="gn">${R(s.preco*s.qtd)}</td><td><button class="b d t" onclick="D.servicos.splice(${n},1);lin()">✕</button></td></tr>`).join('')}</table></div>`:''}
 ${D.prazo?`<div class="hint" style="margin-top:12px"><b>📅 Prazo:</b> ${fd(D.prazo+'T12:00:00')}</div>`:''}
 ${String(D.obs||'').trim()?`<div class="hint" style="margin-top:12px;white-space:pre-wrap"><b>📐 Medidas / O.S.:</b> ${e(String(D.obs).trim().slice(0,300))}</div>`:''}
 <div class="sum">${pesoTot(D)>0?`<p><span>⚖️ Peso total (teórico)</span><span>${kgTxt(pesoTot(D))}</span></p>`:''}<p><span>Custo</span><span>${R(k.c)}</span></p><p><span>Lucro</span><span class="gn">${R(k.lucro)}</span></p><p><span>Margem de lucro</span>${margemTag(k)}</p><p><span>Subtotal</span><span>${R(k.sub)}</span></p>${k.sv?`<p><span>Serviços</span><span class="gn">+ ${R(k.sv)}</span></p>`:''}${k.mo?`<p><span>Mão de obra</span><span class="gn">+ ${R(k.mo)}</span></p>`:''}${k.ds?`<p><span>Desconto</span><span style="color:var(--rd)">− ${R(k.ds)}</span></p>`:''}<p class="tt"><span>TOTAL</span><span>${R(k.total)}</span></p>${pags(D).length?`${recebidos(D).map(p=>`<p><span>${e(p.forma==='Não informada'?'Sinal pago':'Pago em '+fPagTxt(p))}</span><span>− ${R(p.valor)}</span></p>`).join('')}${fiados(D).map(p=>`<p class="mut"><span>⏳ A prazo / fiado · previsto ${fdp(p.previsto)}</span><span>${R(p.valor)}</span></p>`).join('')}<p class="rs"><span>Restante a pagar</span><span>${R(k.restante)}</span></p>`:''}</div>`:'<p class="mut">Nenhum metal adicionado ainda.</p>'}
/* desconto e mão de obra */
const BT=(on,l,f)=>`<button class="${on?'on':''}" onclick="${f}">${l}</button>`;
const closeM=()=>{const m=$('.md:not(.dlg)');if(m)m.remove()};
function mdl(h){closeM();const m=document.createElement('div');m.className='md';m.onclick=ev=>{if(ev.target===m)m.remove()};m.innerHTML='<div class="mc">'+h+'</div>';document.body.appendChild(m)}
const snap=()=>{SN=JSON.stringify([D.desc,D.dtipo,D.hh,D.vh,D.moOn])},back=()=>{if(SN)[D.desc,D.dtipo,D.hh,D.vh,D.moOn]=JSON.parse(SN);closeM();lin()};
const need=()=>D.itens.length?true:(aviso('Adicione pelo menos um metal.'),false);
const bts=`<div class="row" style="margin-top:14px"><button class="b s" onclick="back()">Voltar</button><button class="b" onclick="closeM();lin()">Salvar</button></div>`;
function mDesc(f){if(f){if(!need())return;snap()}const p=D.dtipo!=='val';
 mdl(`<h3>Desconto</h3><div class="seg">${BT(!p,'Em dinheiro',"D.dtipo='val';mDesc()")}${BT(p,'Em porcentagem',"D.dtipo='pct';mDesc()")}</div><label>${p?'Porcentagem (%)':'Valor (R$)'}</label><input type="number" min="0" step="any" value="${D.desc||''}" placeholder="0" oninput="D.desc=+this.value||0;dsum()"><div class="sum" id="dsum"></div>${bts}`);dsum()}
function dsum(){const k=calc(D);$('#dsum').innerHTML=`<p><span>Subtotal</span><span>${R(k.sub)}</span></p>${k.sv?`<p><span>Serviços</span><span class="gn">+ ${R(k.sv)}</span></p>`:''}${k.mo?`<p><span>Mão de obra</span><span class="gn">+ ${R(k.mo)}</span></p>`:''}<p><span>Desconto</span><span style="color:var(--rd)">− ${R(k.ds)}</span></p><p class="tt"><span>TOTAL</span><span>${R(k.total)}</span></p>`}
function mMO(f){if(f){if(!need())return;snap()}
 mdl(`<h3>Mão de obra</h3><div class="row"><div><label>Horas de trabalho</label><input type="number" min="0" step="any" value="${D.hh||''}" placeholder="0" oninput="D.hh=+this.value||0;msum()"></div><div><label>Valor por hora (R$)</label><input type="number" min="0" step="any" value="${D.vh||''}" placeholder="0,00" oninput="D.vh=+this.value||0;msum()"></div></div><p id="msum"></p><div class="seg">${BT(!D.moOn,'Não cobrar',"D.moOn=false;mMO()")}${BT(D.moOn,'Cobrar',"D.moOn=true;mMO()")}</div>${bts}`);msum()}
const msum=()=>{$('#msum').innerHTML=`O custo de mão de obra calculado foi de <b class="gn">${R((D.hh||0)*(D.vh||0))}</b>. Deseja cobrar este valor no orçamento?`};

/* ===== Modais da barra inferior: Serviços, Pagamento e Medidas / O.S. ===== */
function mSrv(){
 mdl(`<h3>🛠 Serviços</h3>${S.servicos.length?`<label>Buscar serviço</label><input id="sb" autocomplete="off" placeholder="Digite o nome do serviço..." oninput="srvFiltra()" onkeydown="if(event.key==='Enter'){srvPrimeiro();event.preventDefault()}">
 <div class="row" style="margin-top:8px"><div style="max-width:140px"><label>Quantidade</label><input id="sq" type="number" min="0" step="any" value="1"></div></div>
 <div id="sl" style="margin-top:8px"></div><p class="hint">Clique em "＋" para adicionar. Os serviços adicionados aparecem na tela do orçamento (lá dá para mudar a quantidade ou remover) e somam no total.</p>`:'<p class="mut">Nenhum serviço cadastrado ainda. <button class="b s t" onclick="closeM();go(\'srv\')">Cadastrar serviços</button></p>'}
 <div class="row" style="margin-top:14px"><button class="b" onclick="closeM()">Concluir</button></div>`);
 if(S.servicos.length){srvFiltra();$('#sb').focus()}}
function srvFiltra(){const q=norm($('#sb').value),L=S.servicos.filter(x=>norm(x.nome).includes(q)||q.split(/\s+/).every(w=>norm(x.nome).includes(w))).slice(0,10);
 $('#sl').innerHTML=L.length?`<div class="tw"><table>${L.map(x=>`<tr><td>${e(x.nome)}</td><td>${R(x.preco)}</td><td style="width:60px"><button class="b t" onclick="srvAdiciona('${x.id}')">＋</button></td></tr>`).join('')}</table></div>`:'<p class="mut">Nenhum serviço encontrado.</p>'}
function srvPrimeiro(){const q=norm($('#sb').value),x=S.servicos.find(z=>q.split(/\s+/).every(w=>norm(z.nome).includes(w)));if(x)srvAdiciona(x.id)}
function srvAdiciona(id){const s=by(S.servicos,id),q=+$('#sq').value;
 if(!s){aviso('Escolha um serviço.');return}if(!(q>0)){aviso('Informe a quantidade do serviço.');return}
 const j=D.servicos.find(x=>x.sid===s.id);if(j)j.qtd+=q;else D.servicos.push({sid:s.id,nome:s.nome,preco:s.preco,qtd:q});   /* guarda o preço de hoje: mudar o catálogo depois não altera orçamentos salvos */
 $('#sq').value=1;lin();toast(s.nome+' adicionado')}

/* Campos de pagamento (usados no modal 💳 Pagamento e no "Dar baixa"): forma, parcelas (só cartão de crédito), valor e data prevista (só fiado) */
const somaDias=n=>{const d=new Date();d.setDate(d.getDate()+n);return d.getFullYear()+'-'+p2(d.getMonth()+1)+'-'+p2(d.getDate())};
const campoPag=(comFiado,restante,acao)=>`<div class="row"><div><label>Forma de pagamento</label><select id="pf1" onchange="pagForma()">${FORMAS.concat(comFiado?[FIADO]:[]).map(f=>`<option>${f}</option>`).join('')}</select></div>
 <div id="pnw" style="display:none;max-width:130px"><label>Parcelas</label><select id="pn1" onchange="pagPrev()">${[...Array(12)].map((_,i)=>`<option value="${i+1}">${i+1}x</option>`).join('')}</select></div>
 <div><label>Valor (R$)</label><input id="pv1" type="number" min="0" step="any" placeholder="0,00" value="${restante>0?restante:''}" oninput="pagPrev()" onkeydown="if(event.key==='Enter'){${acao};event.preventDefault()}"></div>
 <div id="pdw" style="display:none"><label>Data prevista</label><input id="pd1" type="date" value="${somaDias(15)}"></div></div><div class="hint" id="ppv" style="font-weight:700;min-height:16px"></div>`;
function pagForma(){const f=$('#pf1').value;$('#pnw').style.display=f===CRED?'':'none';$('#pdw').style.display=f===FIADO?'':'none';pagPrev()}
function pagPrev(){const el=$('#ppv');if(!el)return;const v=r2($('#pv1').value),f=$('#pf1').value;
 el.textContent=f===CRED&&v>0?'💳 '+parcDet({valor:v,parcelas:+$('#pn1').value||1}):f===FIADO?'⏳ Fica como saldo a receber até a data prevista (não conta como pago).':''}
/* Lê o formulário e devolve o lançamento (ou null se faltar algo) */
function pagNovo(){const v=r2($('#pv1').value),f=$('#pf1').value;
 if(!(v>0)){aviso('Informe o valor do pagamento.');return null}
 const p={forma:FORMAS.includes(f)||f===FIADO?f:FORMAS[0],valor:v,data:new Date().toISOString()};
 if(p.forma===CRED)p.parcelas=Math.max(1,Math.min(12,+$('#pn1').value||1));
 if(p.forma===FIADO){const d=$('#pd1').value;if(!/^\d{4}-\d{2}-\d{2}$/.test(d)){aviso('Informe a data prevista de pagamento.');return null}p.previsto=d}
 return p}
function mPag(){
 const k=calc(D);
 mdl(`<h3>💳 Pagamento</h3><div class="sum" style="margin-top:0" id="pgs"></div>
 <h3 style="margin-top:16px;font-size:15px">Adicionar pagamento</h3>${campoPag(true,k.restante>0&&k.total>0?k.restante:'','pagAdd()')}
 <div class="row"><button class="b" onclick="pagAdd()">＋ Adicionar</button></div>
 <p class="hint">Pode dividir em várias formas. Ex.: R$ 50,00 no Pix + R$ 71,60 no Cartão de Crédito em 3x. "A Prazo / Fiado" guarda o valor como saldo a receber, com data prevista, e aparece na tela A Receber. O restante é calculado sozinho (total − pago).</p>
 <div class="row" style="margin-top:14px"><button class="b" onclick="closeM()">Concluir</button></div>`);pagRender();pagForma();$('#pv1').focus()}
function pagRender(){const k=calc(D),el=$('#pgs');if(!el)return;
 const x=(i)=>`<button class="b d t" style="padding:0 8px;margin-left:6px" onclick="pagDel(${i})">✕</button>`;
 el.innerHTML=`<p><span>Total do orçamento</span><span>${R(k.total)}</span></p>${pags(D).map((p,i)=>p.forma===FIADO?`<p class="mut"><span>⏳ A prazo / fiado · previsto ${fdp(p.previsto)} ${x(i)}</span><span>${R(p.valor)}</span></p>`:`<p><span>${fPag(p)==='Sinal'?'Sinal pago':e(p.forma)}${p.forma===CRED&&(+p.parcelas||1)>1?` · ${e(parcDet(p))}`:''} ${x(i)}</span><span>− ${R(p.valor)}</span></p>`).join('')}<p class="rs"><span>Restante a pagar</span><span>${R(k.restante)}</span></p>${k.sinal>k.total&&k.total>0?'<div class="hint" style="color:var(--rd)">O valor pago é maior que o total do orçamento.</div>':''}`}
function pagAdd(){const p=pagNovo();if(!p)return;
 migraPag();D.pagamentos.push(p);D.sinal=calc(D).sinal;lin();pagRender();const k=calc(D);$('#pv1').value=k.restante>0?k.restante:'';pagPrev();$('#pv1').focus()}
function pagDel(i){migraPag();if(i<0||i>=D.pagamentos.length)return;D.pagamentos.splice(i,1);D.sinal=calc(D).sinal;lin();pagRender();const k=calc(D);$('#pv1').value=k.restante>0&&k.total>0?k.restante:'';pagPrev()}
function migraPagO(o){if(!Array.isArray(o.pagamentos)||!o.pagamentos.length)o.pagamentos=pags(o).map(p=>({...p}))}
function migraPag(){migraPagO(D)}   /* orçamento antigo: o sinal vira a primeira linha */

function mObs(){
 mdl(`<h3>📐 Medidas / O.S.</h3><label>Medidas e observações técnicas</label><textarea id="obs" rows="8" placeholder="Ex.: Portão 2x2m de correr, trilho embutido, pintura preta fosca..." oninput="D.obs=this.value;lin()">${e(D.obs)}</textarea><p class="hint">Sai impresso no PDF e na O.S. da oficina.</p>
 <div style="max-width:220px"><label>📅 Prazo de entrega</label><input id="prz" type="date" value="${e(D.prazo||'')}" oninput="D.prazo=this.value;lin()"></div>
 <div class="row" style="margin-top:14px"><button class="b" onclick="closeM()">Concluir</button></div>`);$('#obs').focus()}

/* ===== 1. Salvar e mudar o status (só "Concluído" abate o estoque) ===== */
const qtdPorMetal=o=>{const n={};o.itens.forEach(i=>{if(!i.rid)n[i.mid]=(n[i.mid]||0)+i.qtd});return n};   /* retalhos não abatem barras */
const retsDe=o=>o.itens.filter(i=>i.rid);
function baixarEstoque(o){
 const need=qtdPorMetal(o),f=Object.keys(need).filter(id=>{const m=by(S.metais,id);return !m||m.est<need[id]});
 const rf=retsDe(o).filter(i=>{const r=by(S.retalhos,i.rid);return !r||r.usado});
 if(f.length||rf.length){aviso('Estoque insuficiente para concluir: '+f.map(id=>{const m=by(S.metais,id);return m?`${m.cod} (tem ${N(m.est)}, precisa de ${N(need[id])})`:'metal excluído'}).concat(rf.map(i=>`retalho ${i.rnome||i.nome} ${N(i.comp)} m (já usado ou excluído)`)).join('; ')+'.');return false}
 retsDe(o).forEach(i=>{const r=by(S.retalhos,i.rid);r.usado=true;r.usadoEm=new Date().toISOString();r.baixa='orcamento';r.orc=o.id})
 Object.keys(need).forEach(id=>{const m=by(S.metais,id);m.est-=need[id];m.saiu=(m.saiu||0)+need[id]});o.baixado=true;return true}
function devolverEstoque(o){
 if(!o.baixado)return;
 Object.entries(qtdPorMetal(o)).forEach(([id,q])=>{const m=by(S.metais,id);if(m){m.est+=q;m.saiu=Math.max(0,(m.saiu||0)-q)}});
 retsDe(o).forEach(i=>{const r=by(S.retalhos,i.rid);if(r){r.usado=false;delete r.usadoEm;delete r.baixa;delete r.orc}
  else S.retalhos.push({id:i.rid,mid:i.mid,cod:i.cod,nome:i.rnome||i.nome,comp:i.comp,obs:'',data:new Date().toISOString(),usado:false})});   /* peça apagada: volta pelos dados do item */
 o.baixado=false}
/* Troca o status. Entrar em "Concluído" baixa o material; sair dele devolve. Retorna false se faltar estoque (nada muda). */
function aplicaStatus(o,novo){
 if(novo==='Concluído'&&!o.baixado){if(!baixarEstoque(o))return false;o.concluidoEm=new Date().toISOString()}
 else if(novo!=='Concluído'&&o.baixado)devolverEstoque(o);
 o.status=novo;o.alt=new Date().toISOString();return true}
function mudaStatus(id,novo){const o=by(S.orc,id);if(!o||o.status===novo)return;
 if(!aplicaStatus(o,novo)){lst();return}                                              /* sem estoque: o select volta ao status anterior */
 save();lst();toast(novo==='Concluído'?'Concluído: material baixado do estoque':novo==='Cancelado'?'Orçamento cancelado':'Status: '+novo,novo==='Concluído')}
function saveO(){
 if(!D.cliente){aviso('Escolha o cliente (cadastre na aba Clientes).');return}
 if(!D.itens.length){aviso('Adicione pelo menos um metal.');return}
 const old=D.id&&by(S.orc,D.id),tinhaBaixa=!!(old&&old.baixado),alvo=STATUS.includes(D.status)?D.status:'Pendente',k=calc(D),
  o={...JSON.parse(JSON.stringify(D)),id:D.id||uid(),data:D.data||new Date().toISOString(),status:'Pendente',baixado:false,custo:k.c,total:k.total,lucro:k.lucro,sinal:k.sinal,
  usuarioId:(old&&old.usuarioId)||USR.id,usuarioNome:(old&&old.usuarioNome)||USR.nome};   /* 15. quem atendeu fica gravado (ao editar mantém o atendente original) */
 if(tinhaBaixa)devolverEstoque(old);                                                  /* os itens podem ter mudado: desfaz a baixa antiga e refaz com os novos */
 if(!aplicaStatus(o,alvo)){if(tinhaBaixa)baixarEstoque(old);return}                  /* sem estoque: mantém tudo como estava */
 o.n=D.n||S.seq++;
 if(!(old&&old.nc&&old.cliente===o.cliente))o.nc=proxNum(o.cliente,true);          /* número do orçamento dentro do cliente (mantém o número ao editar; cliente novo = próximo número dele) */
 const x=S.orc.findIndex(z=>z.id===o.id);x>=0?S.orc[x]=o:S.orc.unshift(o);
 save();D=dflt();vOrc();toastAcoes(o.status==='Concluído'?'Orçamento concluído e material baixado do estoque':'Orçamento nº '+o.nc+' de '+o.cliente+' salvo',[['🖨️ Imprimir PDF',()=>imprime(by(S.orc,o.id))],['📲 Enviar no Zap',()=>imprime(by(S.orc,o.id),true)]],o.status==='Concluído')}
function lst(){$('#lst').innerHTML=S.orc.length?`<div class="tw"><table><tr><th>Nº</th><th>Cliente</th><th>Data</th><th>Total</th><th>Lucro</th><th>Status</th><th></th></tr>${S.orc.map(o=>{const k=calc(o);return`<tr><td>${numO(o)}${o.usuarioNome?`<div class="mut" style="font-size:11px">${e(o.usuarioNome)}</div>`:''}</td><td>${e(o.cliente)}</td><td>${fd(o.data)}</td><td>${R(o.total)}${k.sinal?`<div class="mut" style="font-size:12px">resta ${R(k.restante)}</div>`:''}</td><td class="gn">${R(o.lucro)}<div style="margin-top:3px">${margemTag(k)}</div></td><td><select class="st" style="--bc:${STCOR[o.status]}" onchange="mudaStatus('${o.id}',this.value)">${STATUS.map(s=>`<option ${s===o.status?'selected':''}>${s}</option>`).join('')}</select></td><td style="min-width:250px;line-height:2.3"><button class="b s t" onclick="imprime(by(S.orc,'${o.id}'))">🖨️ Imprimir</button> <button class="b s t" onclick="recibo('${o.id}')">🧾 Recibo</button> <button class="b s t" onclick="osOficina(by(S.orc,'${o.id}'))">📄 O.S. Oficina</button> <button class="b s t" onclick="editO('${o.id}')">Editar</button> <button class="b s t" onclick="duplicaO('${o.id}')">Duplicar</button> <button class="b d t" onclick="delO('${o.id}')">Excluir</button></td></tr>`}).join('')}</table></div>`:'<p class="mut">Nenhum orçamento salvo.</p>'}
function editO(id){D={...dflt(),...JSON.parse(JSON.stringify(by(S.orc,id)))};vOrc();scrollTo(0,0)}
/* Duplicar: abre "Novo orçamento" já preenchido com os itens, serviços, desconto, mão de obra e medidas do antigo.
   Vira um orçamento novo (sem número, Pendente, sem sinal e sem baixa de estoque). */
function duplicaO(id){const o=by(S.orc,id);if(!o)return;
 const c=JSON.parse(JSON.stringify(o));
 D={...dflt(),cliente:c.cliente,itens:(c.itens||[]).filter(i=>!i.rid),servicos:c.servicos||[],desc:c.desc||0,dtipo:c.dtipo||'pct',hh:c.hh||0,vh:c.vh||0,moOn:!!c.moOn,obs:c.obs||'',status:'Pendente',sinal:0,pagamentos:[]};
 vOrc();scrollTo(0,0);toast('Orçamento duplicado: confira os dados e salve')}
async function delO(id){const o=by(S.orc,id);if(!await confirmar(o.baixado?'Excluir este orçamento? O material já baixado volta para o estoque.':'Excluir este orçamento?'))return;
 devolverEstoque(o);S.orc=S.orc.filter(x=>x.id!==id);save();vOrc()}


/* ===== Impressão do orçamento (sem custo/lucro) ===== */
function docOrc(o){const c=S.clientes.find(x=>x.nome===o.cliente)||{},k=calc(o),sv=o.servicos||[],obs=String(o.obs||'').trim();
 return`<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><title>Orçamento ${numO(o)}</title><style>body{font:13px Arial,sans-serif;color:#111;margin:0;padding:28px 34px}.top{display:flex;align-items:center;justify-content:space-between;border-bottom:4px solid #ee8330;padding-bottom:12px}.top img{height:90px;border-radius:6px}h1{margin:0 0 4px;font-size:22px}table{width:100%;border-collapse:collapse;margin:16px 0;page-break-inside:avoid}th{background:#383838;color:#fff;text-align:left;padding:8px}td{padding:8px;border-bottom:1px solid #ccc}.r{text-align:right}.tt td{border:0;padding:4px 8px}.big td{font-size:18px;font-weight:700;border-top:2px solid #111}.rest td{font-size:17px;font-weight:700;background:#fff0e0;border-top:2px solid #ee8330}.obs{border:1px solid #888;border-radius:6px;padding:10px 12px;margin:16px 0;white-space:pre-wrap;page-break-inside:avoid}.obs b{display:block;margin-bottom:4px}.ft{margin-top:34px;text-align:center;color:#555;font-size:11px}@page{size:A4;margin:10mm}${PDFCSS}</style></head><body>
<div class="top"><div class="em"><img src="${LOGO}">${empTopo()}</div><div style="text-align:right"><h1>ORÇAMENTO Nº ${numO(o)||'—'}</h1>${fd(o.data||new Date().toISOString())}<br><span style="color:#555">Situação: ${e(o.status||'Pendente')}</span></div></div>
<p><b>Cliente:</b> ${e(o.cliente)||'—'}<br>${c.doc?'<b>CPF/CNPJ:</b> '+e(c.doc)+'<br>':''}${c.tel?'<b>Telefone:</b> '+e(c.tel)+'<br>':''}${c.end?'<b>Endereço:</b> '+e(c.end)+'<br>':''}${o.prazo?'<b>Prazo:</b> '+fd(o.prazo+'T12:00:00'):''}</p>
<table><tr><th>Cód.</th><th>Descrição</th><th class="r">Qtd</th><th class="r">Valor unit.</th><th class="r">Total</th></tr>${o.itens.map(i=>{const v=it(i).v;return`<tr><td>${e(i.cod)}</td><td>${e(i.nome)}</td><td class="r">${qItem(i)}${pesoItem(i)>0&&unI(i)!=='kg'?`<br><span style="color:#555;font-size:11px">${kgTxt(pesoItem(i))}</span>`:''}</td><td class="r">${R(i.qtd?v/i.qtd:0)}${['kg','m','cm','mm','m2','cx'].includes(unI(i))?`<span style="color:#555;font-size:11px">/${UNID[unI(i)].p}</span>`:''}</td><td class="r">${R(v)}</td></tr>`}).join('')}</table>
${sv.length?`<table><tr><th>Serviço</th><th class="r">Qtd</th><th class="r">Valor unit.</th><th class="r">Total</th></tr>${sv.map(s=>`<tr><td>${e(s.nome)}</td><td class="r">${N(s.qtd)}</td><td class="r">${R(s.preco)}</td><td class="r">${R(s.preco*s.qtd)}</td></tr>`).join('')}</table>`:''}
${obs?`<div class="obs"><b>Medidas e observações técnicas (Ordem de Serviço)</b>${e(obs)}</div>`:''}
<table class="tt" style="width:55%;margin-left:auto">${pesoTot(o)>0?`<tr><td>Peso total (teórico)</td><td class="r">${kgTxt(pesoTot(o))}</td></tr>`:''}<tr><td>Subtotal (materiais)</td><td class="r">${R(k.sub)}</td></tr>${k.sv?`<tr><td>Serviços</td><td class="r">${R(k.sv)}</td></tr>`:''}${k.mo?`<tr><td>Mão de obra</td><td class="r">${R(k.mo)}</td></tr>`:''}${k.ds?`<tr><td>Desconto</td><td class="r">− ${R(k.ds)}</td></tr>`:''}<tr class="big"><td>TOTAL</td><td class="r">${R(k.total)}</td></tr>${pags(o).length?`${recebidos(o).map(p=>`<tr><td>${p.forma==='Não informada'?'Sinal pago':'Pago em '+e(fPagTxt(p))}</td><td class="r">− ${R(p.valor)}</td></tr>`).join('')}${fiados(o).map(p=>`<tr><td style="color:#555">A prazo / fiado — previsto para ${fdp(p.previsto)}</td><td class="r" style="color:#555">${R(p.valor)}</td></tr>`).join('')}<tr class="rest"><td>Restante a pagar</td><td class="r">${R(k.restante)}</td></tr>`:''}</table>
${empRodape(o,true)}<div class="ft">Bymetal Serralheria · Obrigado pela preferência!</div></body></html>`}
/* ===== O.S. Oficina: sem valores nem margem. Só Nº, cliente, prazo, medidas e lista de materiais/serviços ===== */
function docOS(o){const n=numO(o)||proxNum(o.cliente),obs=String(o.obs||'').trim(),sv=o.servicos||[];
 return`<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><title>O.S. ${n}</title><style>body{font:14px Arial,sans-serif;color:#111;margin:0;padding:28px 34px}.top{display:flex;align-items:center;justify-content:space-between;border-bottom:4px solid #ee8330;padding-bottom:12px}.top img{height:80px;border-radius:6px}h1{margin:0 0 4px;font-size:24px}table{width:100%;border-collapse:collapse;margin:14px 0;page-break-inside:avoid}th{background:#383838;color:#fff;text-align:left;padding:8px}td{padding:9px 8px;border-bottom:1px solid #ccc}.r{text-align:right}.inf{display:flex;gap:28px;flex-wrap:wrap;margin:16px 0;font-size:15px}.obs{border:2px solid #555;border-radius:6px;padding:12px 14px;margin:16px 0;white-space:pre-wrap;min-height:90px;font-size:15px;page-break-inside:avoid}h3{margin:18px 0 0}.ft{margin-top:34px;text-align:center;color:#555;font-size:11px}@page{size:A4;margin:10mm}${PDFCSS}</style></head><body>
<div class="top"><div class="em"><img src="${LOGO}">${empTopo()}</div><div style="text-align:right"><h1>ORDEM DE SERVIÇO</h1><b style="font-size:18px">Orçamento Nº ${n}</b></div></div>
<div class="inf"><span><b>Cliente:</b> ${e(o.cliente)||'—'}</span><span><b>Prazo:</b> ${o.prazo?fd(o.prazo+'T12:00:00'):'não definido'}</span><span><b>Atendido por:</b> ${e(atende(o))}</span></div>
<h3>Medidas / Observações técnicas</h3><div class="obs">${obs?e(obs):''}</div>
<h3>Materiais</h3><table><tr><th>Cód.</th><th>Descrição</th><th class="r">Qtd</th></tr>${o.itens.map(i=>`<tr><td>${e(i.cod)}</td><td>${e(i.rid?(i.rnome||i.nome):i.nome)}</td><td class="r">${i.rid?`1 retalho de ${N(i.comp)} m`:qTxt(i.qtd,unI(i))+(pesoItem(i)>0&&unI(i)!=='kg'?` (${kgTxt(pesoItem(i))})`:'')}</td></tr>`).join('')}</table>
${sv.length?`<h3>Serviços</h3><table><tr><th>Serviço</th><th class="r">Qtd</th></tr>${sv.map(x=>`<tr><td>${e(x.nome)}</td><td class="r">${N(x.qtd)}</td></tr>`).join('')}</table>`:''}
<div class="ft">Bymetal Serralheria · uso interno da oficina</div></body></html>`}
function osOficina(o){if(!o||!o.itens.length){aviso('Adicione metais ao orçamento antes de gerar a O.S.');return}
 if(!o.cliente){aviso('Escolha o cliente antes de gerar a O.S.');return}
 previa({html:docOS(o),nome:('OS-'+(numO(o)||proxNum(o.cliente))+'-'+semAcento(o.cliente)).replace(/-$/,'')+'.pdf',legenda:'O.S. '+(numO(o)||proxNum(o.cliente))+' — '+o.cliente,tel:''})}
/* ===== Retalhos / sobras: uma peça por registro ===== */
const custoRet=(m,comp)=>m&&ehBarra(unM(m))&&m.met>0?r2(m.custo*comp/m.met):0;
const nomeRet=r=>`${r.nome} (${N(r.comp)} m)`;
function retLivres(){const em=D.itens.filter(i=>i.rid).map(i=>i.rid);return S.retalhos.filter(r=>!r.usado&&!em.includes(r.id))}
function mRetalhos(){if(!S.retalhos.some(r=>!r.usado)){aviso('Nenhum retalho disponível. Cadastre as sobras na aba Estoque.');return}
 mdl(`<h3>✂️ Usar retalho</h3><p class="hint" style="margin-top:0">O custo é proporcional ao comprimento da barra do metal. Ao concluir o orçamento, a peça sai dos retalhos (e o estoque de barras não é mexido).</p>
 <input id="rtq" autocomplete="off" placeholder="🔍 Filtrar retalhos" oninput="rtLista()"><div class="tw" id="rtl" style="max-height:48vh;overflow:auto;margin-top:8px"></div>
 <div class="row" style="margin-top:14px"><button class="b s" onclick="closeM()">Fechar</button></div>`);rtLista();$('#rtq').focus()}
function rtLista(){const L=retLivres().filter(r=>match(r,$('#rtq').value));
 $('#rtl').innerHTML=`<table><tr><th>Retalho</th><th>Custo</th><th></th></tr>${L.map(r=>{const m=by(S.metais,r.mid);return`<tr><td>${e(r.cod)} · ${e(nomeRet(r))}${r.obs?`<div class="mut" style="font-size:12px">${e(r.obs)}</div>`:''}</td><td>${m&&m.met>0?R(custoRet(m,r.comp)):'<span class="mut">sem metragem</span>'}</td><td><button class="b t" onclick="rtUsa('${r.id}')">Usar</button></td></tr>`}).join('')||'<tr><td colspan="3" class="mut">Nenhum retalho encontrado.</td></tr>'}</table>`}
async function rtUsa(id){const r=by(S.retalhos,id),m=r&&by(S.metais,r.mid);if(!r||!m){aviso('O metal deste retalho não existe mais.');return}
 if(!(m.met>0)&&!await confirmar('Este metal não tem a metragem da barra cadastrada, então o custo do retalho será R$ 0,00. Usar mesmo assim?'))return;
 D.itens.push({mid:m.id,cod:m.cod,nome:`${r.nome} (retalho ${N(r.comp)} m)`,rnome:r.nome,qtd:1,custo:custoRet(m,r.comp),lucro:m.lucro,rid:r.id,comp:r.comp});closeM();lin();toast('Retalho adicionado ao orçamento')}
/* Aba Estoque: cadastro, baixa manual e histórico */
let rtVerUsados=false;
function retTab(){const L=S.retalhos.filter(r=>!r.usado&&match(r,fq)),U=S.retalhos.filter(r=>r.usado&&match(r,fq));
 const el=$('#rt');if(!el)return;
 el.innerHTML=`<table><tr><th>Cód.</th><th>Retalho</th><th>Obs.</th><th></th></tr>${L.map(r=>`<tr><td>${e(r.cod)}</td><td><b>${e(nomeRet(r))}</b></td><td class="mut">${e(r.obs||'')}</td><td><button class="b s t" onclick="retBaixa('${r.id}')">Dar baixa</button> <button class="b d t" onclick="retDel('${r.id}')">Excluir</button></td></tr>`).join('')||'<tr><td colspan="4" class="mut">Nenhum retalho disponível.</td></tr>'}</table>
 ${U.length?`<p style="margin:12px 0 4px"><a href="#" onclick="rtVerUsados=!rtVerUsados;retTab();return false">${rtVerUsados?'▾':'▸'} Já usados (${U.length})</a></p>${rtVerUsados?`<table>${U.map(r=>`<tr class="mut"><td>${e(r.cod)}</td><td>${e(nomeRet(r))}</td><td>${r.baixa==='orcamento'?'usado em orçamento':'baixa manual'} · ${fd(r.usadoEm)}</td><td>${r.baixa==='orcamento'?'':`<button class="b s t" onclick="retVolta('${r.id}')">Desfazer</button>`}</td></tr>`).join('')}</table>`:''}`:''}`}
function retAdd(){const m=by(S.metais,$('#rtm').value),c=parseFloat(String($('#rtc').value).replace(',','.')),q=Math.min(50,Math.max(1,parseInt($('#rtn').value,10)||1));
 if(!m){aviso('Escolha o metal.');return}if(!(c>0)){aviso('Informe o comprimento da sobra em metros.');return}
 for(let i=0;i<q;i++)S.retalhos.push({id:uid(),mid:m.id,cod:m.cod,nome:m.nome,comp:r2(c),obs:$('#rto').value.trim().slice(0,200),data:new Date().toISOString(),usado:false});
 save();$('#rtc').value='';$('#rto').value='';$('#rtn').value=1;retTab();toast(q>1?q+' retalhos cadastrados':'Retalho cadastrado')}
function retBaixa(id){const r=by(S.retalhos,id);if(!r)return;r.usado=true;r.usadoEm=new Date().toISOString();r.baixa='manual';save();retTab()}
function retVolta(id){const r=by(S.retalhos,id);if(!r)return;r.usado=false;delete r.usadoEm;delete r.baixa;delete r.orc;save();retTab()}
async function retDel(id){if(!await confirmar('Excluir este retalho?'))return;S.retalhos=S.retalhos.filter(r=>r.id!==id);save();retTab()}
/* PV = documento aberto na pré-visualização (orçamento ou recibo): { html, nome, legenda, tel } */
let PV=null;
function previa(doc){closeM();PV=doc;const hv=PVH;PVH='';
 const v=document.createElement('div');v.className='pv';v.dataset.hist=hv;v.innerHTML=`<div class="row" style="padding:12px 16px;margin:0"><button class="b s" onclick="const pv=this.closest('.pv'),h=pv.dataset.hist;pv.remove();if(h)histCli(h)">‹ Voltar</button><button class="b" onclick="try{$('#pf').contentWindow.focus();$('#pf').contentWindow.print()}catch(x){aviso('Impressão bloqueada.')}">🖨️ Imprimir</button><button class="b s" onclick="pdfSalvar()">💾 Salvar PDF</button><button class="b ok" onclick="pdfZap()">📲 Enviar no WhatsApp</button></div><iframe id="pf"></iframe>`;document.body.appendChild(v);$('#pf').srcdoc=doc.html}
function imprime(o,zap){if(!o||!o.itens.length){aviso('Adicione metais ao orçamento antes de imprimir.');return}
 previa({html:docOrc(o),nome:pdfNome(o),legenda:'Orçamento '+(numO(o))+' — Bymetal Serralheria',tel:(S.clientes.find(x=>x.nome===o.cliente)||{}).tel||''});if(zap)pdfZap()}
const semAcento=t=>String(t||'').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^A-Za-z0-9]+/g,'_').replace(/_+$/,'');
const pdfNome=o=>('Orcamento-'+(numO(o)||'novo')+'-'+semAcento(o.cliente)).replace(/-$/,'')+'.pdf';
async function pdfSalvar(){const r=await api.pdf.salvar(PV.html,PV.nome);if(r.ok)toast('PDF salvo');else if(!r.cancelado)aviso('Não foi possível salvar: '+r.erro)}
function pdfZap(){mdl(`<h3>Enviar por WhatsApp</h3><label>Número do cliente (com DDD)</label><input id="zn" value="${e(PV.tel)}" placeholder="47 99999-0000"><p class="hint">${api.web?'O WhatsApp vai abrir com a mensagem pronta. Salve o PDF pelo botão de imprimir e anexe na conversa.':'O PDF será enviado pelo WhatsApp conectado na aba Alertas.'}</p><div class="row" style="margin-top:14px"><button class="b s" onclick="closeM()">Cancelar</button><button class="b ok" onclick="pdfZapEnvia()">Enviar</button></div>`);$('#zn').focus()}
async function pdfZapEnvia(){const num=$('#zn').value;closeM();toast('Enviando…');const r=await api.pdf.enviarWhatsApp({html:PV.html,nome:PV.nome,telefone:num,legenda:PV.legenda});if(r.ok)toast(r.web?'WhatsApp aberto — anexe o PDF':'PDF enviado pelo WhatsApp',1);else aviso('Não foi possível enviar: '+r.erro)}

/* ===== Recibo comercial (comprovante do que o cliente já pagou) ===== */
function docRecibo(o){const c=S.clientes.find(x=>x.nome===o.cliente)||{},k=calc(o),P=recebidos(o),
  via=P.length===1?e(P[0].forma==='Não informada'?'pagamento direto':fPagTxt(P[0])):P.map(p=>`${e(fPagTxt(p))} (${R(p.valor)})`).join(' e '),
  tipo=k.restante>0?'adiantamento':'pagamento';
 return`<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><title>Recibo ${numO(o)}</title><style>body{font:14px Arial,sans-serif;color:#111;margin:0;padding:28px 34px}.top{display:flex;align-items:center;justify-content:space-between;border-bottom:4px solid #ee8330;padding-bottom:12px}.top img{height:90px;border-radius:6px}h1{margin:0 0 4px;font-size:24px}.v{font-size:22px;font-weight:700;border:2px solid #111;border-radius:8px;padding:8px 14px;display:inline-block;margin:18px 0}p.t{font-size:15px;line-height:1.7;margin:16px 0}table{width:100%;border-collapse:collapse;margin:16px 0}th{background:#383838;color:#fff;text-align:left;padding:8px}td{padding:8px;border-bottom:1px solid #ccc}.r{text-align:right}.rest td{font-weight:700;background:#fff0e0;border-top:2px solid #ee8330}.as{margin:70px auto 0;width:300px;border-top:1px solid #111;text-align:center;padding-top:6px}.ft{margin-top:40px;text-align:center;color:#555;font-size:11px}@page{size:A4;margin:10mm}${PDFCSS}</style></head><body>
<div class="top"><div class="em"><img src="${LOGO}">${empTopo()}</div><div style="text-align:right"><h1>RECIBO</h1>Orçamento nº ${numO(o)||'—'}<br>Emitido em ${fd(new Date().toISOString())}</div></div>
<div class="v">${R(k.sinal)}</div>
<p class="t">Recebemos de <b>${e(o.cliente)||'—'}</b>${c.doc?' (CPF/CNPJ '+e(c.doc)+')':''}${c.tel?' (tel. '+e(c.tel)+')':''} o valor de <b>${R(k.sinal)}</b> via <b>${via}</b>, referente ao ${tipo} do <b>Orçamento nº ${numO(o)||'—'}</b>.</p>
<table><tr><th>Forma de pagamento</th><th class="r">Valor</th></tr>${P.map(p=>`<tr><td>${e(p.forma==='Não informada'?'Sinal':fPagTxt(p))}</td><td class="r">${R(p.valor)}</td></tr>`).join('')}<tr><td><b>Total recebido</b></td><td class="r"><b>${R(k.sinal)}</b></td></tr>${fiados(o).map(p=>`<tr><td style="color:#555">Saldo a prazo / fiado (previsto para ${fdp(p.previsto)})</td><td class="r" style="color:#555">${R(p.valor)}</td></tr>`).join('')}<tr><td>Total do orçamento</td><td class="r">${R(k.total)}</td></tr><tr class="rest"><td>${k.restante>0?'Restante a pagar':'Situação'}</td><td class="r">${k.restante>0?R(k.restante):'Quitado'}</td></tr></table>
<div class="as">${e(nomeEmp())}</div>${empRodape(o,false)}<div class="ft">Este recibo comprova o recebimento acima. Obrigado pela preferência!</div></body></html>`}
function recibo(id){const o=by(S.orc,id);if(!o)return;
 if(!(calc(o).sinal>0)){aviso('Este orçamento ainda não tem pagamento registrado. Abra "Editar" e use o botão 💳 Pagamento.');return}
 previa({html:docRecibo(o),nome:('Recibo-'+(numO(o))+'-'+semAcento(o.cliente)).replace(/-$/,'')+'.pdf',legenda:'Recibo do orçamento '+(numO(o))+' — Bymetal Serralheria',tel:(S.clientes.find(x=>x.nome===o.cliente)||{}).tel||''})}

/* ===== 2. Catálogo de Serviços ===== */
function vSrv(){$('#app').innerHTML=`<h2>Serviços</h2><div class="card"><h3>Novo serviço</h3><div class="row"><div style="flex:3"><label>Nome do serviço</label><input id="svNome" placeholder="Ex.: Soldagem, Pintura, Instalação" onkeydown="if(event.key==='Enter')srvAdd()"></div><div style="max-width:220px"><label>Preço fixo (R$)</label><input id="svPreco" type="number" min="0" step="any" placeholder="0,00" onkeydown="if(event.key==='Enter')srvAdd()"></div><button class="b" onclick="srvAdd()">Cadastrar</button></div></div>
 <div class="card"><div class="tw" id="srt"></div><p class="mut" style="margin:8px 0 0">Mudar o preço aqui vale só para orçamentos novos; os já salvos mantêm o valor.</p></div>`;srvTab()}
function srvTab(){$('#srt').innerHTML=`<table><tr><th>Serviço</th><th>Preço fixo (R$)</th><th></th></tr>${S.servicos.map(s=>`<tr><td><input value="${e(s.nome)}" onchange="srvSet('${s.id}','nome',this.value)"></td><td><input class="sm" type="number" min="0" step="any" value="${s.preco}" onchange="srvSet('${s.id}','preco',this.value,1)"></td><td><button class="b d t" onclick="srvDel('${s.id}')">Excluir</button></td></tr>`).join('')||'<tr><td colspan="3" class="mut">Nenhum serviço cadastrado.</td></tr>'}</table>`}
function srvAdd(){const nome=$('#svNome').value.trim(),preco=+$('#svPreco').value;
 if(!nome){aviso('Informe o nome do serviço.');$('#svNome').focus();return}
 if(!(preco>=0)||$('#svPreco').value===''){aviso('Informe o preço fixo do serviço.');$('#svPreco').focus();return}
 if(S.servicos.some(s=>norm(s.nome)===norm(nome))){aviso('Já existe um serviço com este nome.');return}
 S.servicos.push({id:uid(),nome,preco});save();vSrv();toast('Serviço cadastrado')}
function srvSet(id,f,v,num){const s=by(S.servicos,id);if(!s)return;s[f]=num?Math.max(0,+v||0):v.trim()||s[f];save();srvTab()}
async function srvDel(id){if(!await confirmar('Excluir este serviço? Orçamentos já salvos continuam com ele.'))return;S.servicos=S.servicos.filter(s=>s.id!==id);save();srvTab()}

/* ===== Estoque ===== */
function vEst(){const baixos=S.metais.filter(m=>nivelM(m)==='critico');
 $('#app').innerHTML=`<h2>Estoque</h2>${baixos.length?`<div class="alert">⚠ Pedir mais: ${baixos.map(m=>e(m.cod)).join(', ')}</div>`:''}
 <div class="row" style="margin-bottom:12px"><button class="b" onclick="mLista()">🛒 Gerar lista de compras</button><button class="b s" onclick="mMinimos()">⚙️ Ajustar Mínimos</button></div>
 <div class="card"><h3>Entrada de metal</h3>${S.metais.length?`<div class="row"><div style="flex:4"><label>Metal (digite o código ou nome)</label><div class="sgw"><input id="ems" autocomplete="off" placeholder="Ex.: ct118, tubo 20, cantoneira..." oninput="esug()" onfocus="this.select();esug()" onblur="$('#esg').style.display='none'" onkeydown="esgk(event)"><button type="button" class="clr" title="Limpar busca" aria-label="Limpar busca" onmousedown="event.preventDefault()" onclick="elimpa()">✕</button><div class="sg" id="esg"></div></div><input type="hidden" id="em"></div><div style="max-width:200px"><label id="eql">Quantidade que chegou</label><input id="eq" type="number" step="any" min="0" oninput="entraAuto()" onkeydown="if(event.key==='Enter'){event.preventDefault();$('#ev').focus()}"></div><div style="max-width:200px"><label>Valor total da compra (R$)</label><input id="ev" type="number" step="any" min="0" placeholder="0,00" oninput="this.dataset.m=1" onkeydown="if(event.key==='Enter'){event.preventDefault();entra()}"></div><div style="max-width:170px"><label>Data da compra</label><input id="ed" type="date" value="${hoje()}"></div><button class="b" onclick="entra()">＋ Dar entrada</button></div><div class="mut" id="emi" style="margin:-4px 0 8px;min-height:18px"></div><p class="mut" style="margin:0">O valor da compra entra como despesa no Faturamento, na data informada (a sugestão é quantidade × custo do metal). Ao dar entrada, o estoque volta a 100%. Vermelho: no estoque mínimo ou abaixo. Amarelo: até 1,5× o mínimo. Verde: acima disso.</p>`:'<p class="mut">Cadastre os metais na aba Metais.</p>'}</div>
 <div class="card">${filt()}<div class="tw" id="et"></div></div>
 <div class="card"><h3>✂️ Retalhos / sobras</h3>${S.metais.some(m=>ehBarra(unM(m)))?`<div class="row"><div style="flex:3"><label>Metal (só barras)</label><select id="rtm">${S.metais.filter(m=>ehBarra(unM(m))).map(m=>`<option value="${m.id}">${e(m.cod)} · ${e(m.nome)}</option>`).join('')}</select></div><div style="max-width:150px"><label>Comprimento (m)</label><input id="rtc" inputmode="decimal" placeholder="2,5"></div><div style="max-width:100px"><label>Peças</label><input id="rtn" type="number" min="1" max="50" value="1"></div><div style="flex:2"><label>Observação</label><input id="rto" placeholder="opcional"></div><button class="b" onclick="retAdd()">＋ Cadastrar</button></div><p class="mut" style="margin:6px 0 10px">Sobras de barras cortadas. Use-as ao montar orçamentos (botão ✂️ Usar retalho).</p>`:'<p class="mut">Retalhos valem para metais vendidos em barra. Cadastre um metal com unidade "Barra" na aba Metais.</p>'}<div class="tw" id="rt"></div></div>`;eTab();retTab();if($('#ems'))$('#ems').focus()}
function eTab(){const L=S.metais.filter(m=>match(m,fq));$('#et').innerHTML=`<table><tr><th>Cód.</th><th>Metal</th><th style="width:22%">Nível</th><th>Em estoque</th><th>Mínimo</th><th>Já saíram</th><th>Situação</th><th></th></tr>${L.map(m=>{const p=pct(m);return`<tr><td>${e(m.cod)}</td><td>${e(m.nome)}${unM(m)==='barra'?(m.met?` <span class="mut">· ${N(m.met)} m</span>`:''):` <span class="mut">· ${UNID[unM(m)].n}</span>`}</td><td><div class="bar"><i style="width:${p}%;background:${corN(m)}"></i></div></td><td><b>${N(m.est)} ${uP(unM(m))}</b> <span class="mut">(${N(p)}%)</span></td><td><input class="sm" type="number" min="0" step="any" value="${minM(m)}" title="Avisar quando o estoque chegar a este valor (na unidade do metal)" onchange="minSet('${m.id}',this.value)"></td><td>${N(m.saiu)}</td><td style="color:${corN(m)};font-weight:700">${m.pausado?'🔕 ':''}${rotN(m)}</td><td style="white-space:nowrap"><button class="b s t" onclick="mAjuste('${m.id}')">➖ Ajustar</button></td></tr>`}).join('')||'<tr><td colspan="8" class="mut">Nenhum metal encontrado.</td></tr>'}</table>`;if(tab==='est')retTab()}
/* ===== Ajustar estoque: diminuir (lançamento errado), corrigir para um valor ou zerar — e pausar os alertas de metal que não se vende mais ===== */
function mAjuste(id){const m=by(S.metais,id);if(!m)return;AJID=id;const u=uP(unM(m)),cp=[...S.compras].filter(c=>c.mid===m.id).sort((a,b)=>String(b.data).localeCompare(String(a.data)))[0];
 mdl(`<h3>➖ Ajustar estoque</h3><p style="margin:0 0 10px"><b>${e(m.cod)}</b> · ${e(m.nome)}<br><span class="mut">Em estoque agora: <b>${N(m.est)} ${u}</b>${m.pausado?' · 🔕 alertas pausados':''}</span></p>
 <label>O que fazer</label><select id="aj" onchange="ajModo()"><option value="dim">Diminuir uma quantidade (lancei a mais)</option><option value="set">Corrigir para uma quantidade exata</option><option value="zero">Zerar o estoque</option></select>
 <div id="ajqw" style="margin-top:10px"><label id="ajl">Quanto diminuir (${u})</label><input id="ajq" type="number" step="any" min="0" oninput="ajPrev()" onkeydown="if(event.key==='Enter'){event.preventDefault();ajSalva('${m.id}')}"></div>
 <div class="hint" id="ajp" style="margin:6px 0"></div>
 <label style="text-transform:none;display:flex;gap:8px;align-items:center;margin-top:10px"><input type="checkbox" id="ajn" style="width:auto" ${m.pausado?'checked':''}> 🔕 Parar de avisar estoque baixo deste metal (não vou vender por enquanto)</label>
 ${cp?`<label style="text-transform:none;display:flex;gap:8px;align-items:center;margin-top:8px"><input type="checkbox" id="ajc" style="width:auto"> Remover também a última compra lançada: ${N(cp.qtd)} ${uP(cp.un||unM(m))} por ${R(cp.valor)} em ${fd(cp.data)}</label>`:''}
 <p class="hint" style="margin:8px 0 0">Isto não conta como venda. Quando chegar metal novo (Dar entrada), os alertas voltam sozinhos.</p>
 <div class="row" style="margin-top:14px"><button class="b s" onclick="closeM()">Cancelar</button><button class="b" onclick="ajSalva('${m.id}')">Aplicar</button></div>`);ajModo()}
function ajModo(){const k=$('#aj').value;$('#ajqw').style.display=k==='zero'?'none':'';$('#ajl').textContent=k==='dim'?'Quanto diminuir':'Quantidade correta em estoque';
 if(k==='zero')$('#ajn').checked=true;ajPrev();if(k!=='zero')$('#ajq').focus()}
function ajNovo(m){const k=$('#aj').value,q=+$('#ajq').value;return k==='zero'?0:k==='set'?q:(+m.est||0)-q}
let AJID='';
function ajPrev(){const m=by(S.metais,AJID),k=$('#aj').value,q=$('#ajq').value;
 $('#ajp').innerHTML=k!=='zero'&&q===''?'':`Vai ficar com <b>${N(Math.max(0,r2(ajNovo(m))))} ${uP(unM(m))}</b>.`}
function ajSalva(id){const m=by(S.metais,id);if(!m)return;const k=$('#aj').value,q=$('#ajq').value;
 if(k!=='zero'&&(q===''||!(+q>=0))){aviso('Informe a quantidade.');return}
 if(k==='dim'&&+q>(+m.est||0)+1e-9){aviso('Você está tirando mais do que tem em estoque ('+N(m.est)+' '+uP(unM(m))+').');return}
 const novo=Math.max(0,r2(ajNovo(m)));m.est=novo;if(novo>0)m.ref=novo;                      /* base dos 100% = quantidade corrigida */
 if($('#ajn').checked)m.pausado=true;else delete m.pausado;
 if($('#ajc')&&$('#ajc').checked){const cp=[...S.compras].filter(c=>c.mid===m.id).sort((a,b)=>String(b.data).localeCompare(String(a.data)))[0];if(cp)S.compras=S.compras.filter(c=>c.id!==cp.id)}
 save();closeM();vEst();toast(novo===0?'Estoque zerado'+(m.pausado?' e alertas pausados':''):'Estoque ajustado para '+N(novo)+' '+uP(unM(m)))}
/* Mínimo de barras de um metal (tabela do Estoque) */
function minSet(id,v){const m=by(S.metais,id);if(!m)return;m.estMinimo=Math.max(0,+v||0);save();vEst()}
/* ⚙️ Ajustar Mínimos: edita o limite crítico de vários metais de uma vez */
function mMinimos(){if(!S.metais.length){aviso('Cadastre os metais na aba Metais primeiro.');return}
 mdl(`<h3>⚙️ Ajustar mínimos</h3><p class="hint" style="margin-top:0">Quando o estoque do metal chegar a este valor (na unidade dele: barras, m ou kg) ou menos, o Painel e o WhatsApp avisam.</p>
 <input id="mnq" autocomplete="off" placeholder="🔍 Filtrar metais" oninput="mMinLista()"><div class="tw" id="mnl" style="max-height:48vh;overflow:auto;margin-top:8px"></div>
 <div class="row" style="margin-top:14px;align-items:flex-end"><div style="max-width:200px"><label>Aplicar a todos os filtrados</label><input id="mna" type="number" min="0" step="any" placeholder="quantidade"></div><button class="b s" onclick="mMinTodos()">Aplicar</button><span style="flex:1"></span><button class="b" onclick="closeM();vEst()">Concluir</button></div>`);mMinLista();$('#mnq').focus()}
function mMinLista(){const L=S.metais.filter(m=>match(m,$('#mnq').value));
 $('#mnl').innerHTML=`<table><tr><th>Metal</th><th>Em estoque</th><th>Mínimo</th></tr>${L.map(m=>`<tr><td>${e(m.cod)} · ${e(m.nome)}</td><td>${N(m.est)} ${uP(unM(m))}</td><td><input class="sm" type="number" min="0" step="any" value="${minM(m)}" onchange="by(S.metais,'${m.id}').estMinimo=Math.max(0,+this.value||0);save()"></td></tr>`).join('')||'<tr><td colspan="3" class="mut">Nenhum metal encontrado.</td></tr>'}</table>`}
function mMinTodos(){const v=$('#mna').value;if(v===''||!(+v>=0)){aviso('Informe o valor mínimo.');return}
 S.metais.filter(m=>match(m,$('#mnq').value)).forEach(m=>m.estMinimo=+v);save();mMinLista();toast('Mínimo aplicado')}
/* ===== Lista de compras (metais em Crítico ou Atenção) ===== */
let SL=[],slFor='',slMsg='';
const nivel=m=>nivelM(m)==='critico'?'Crítico':'Atenção';
const slFalta=m=>Math.max(1,Math.ceil((m.ref||0)-(m.est||0)));
function slTexto(){const L=SL.filter(x=>x.on&&x.q>0).map(x=>{const m=by(S.metais,x.id);return `• ${m.cod} - ${m.nome}: ${qTxt(x.q,unM(m))}`});
 return L.length?`Olá! Pedido de compra - Bymetal Serralheria\n\n${L.join('\n')}\n\nPode me passar os valores e o prazo de entrega? Obrigado!`:''}
function mLista(){
 const baixos=S.metais.filter(m=>['critico','atencao'].includes(nivelM(m))).sort((a,b)=>(+a.est-minM(a))-(+b.est-minM(b)));
 if(!baixos.length){aviso('Nenhum metal em nível Crítico ou Atenção. O estoque está em dia.');return}
 SL=baixos.map(m=>({id:m.id,on:true,q:slFalta(m)}));slMsg=slTexto();
 api.config.get().then(c=>{slFor=(c&&c.fornecedor)||'';const el=$('#slf');if(el)el.value=slFor}).catch(()=>{});
 mdl(`<h3>Lista de compras</h3><p class="hint" style="margin-top:0">Metais em Crítico (no mínimo ou abaixo) e Atenção (até 1,5× o mínimo). A quantidade sugerida é o que falta para voltar a 100%. Ajuste se precisar.</p>
 <div class="tw"><table><tr><th></th><th>Metal</th><th>Nível</th><th>Qtd</th></tr>${SL.map((x,i)=>{const m=by(S.metais,x.id),p=pct(m);return`<tr><td><input type="checkbox" checked onchange="slSet(${i},'on',this.checked)"></td><td>${e(m.cod)} · ${e(m.nome)}<div class="mut" style="font-size:12px">tem ${N(m.est)} de ${N(m.ref)} ${uP(unM(m))} · mín. ${N(minM(m))}</div></td><td style="color:${corN(m)};font-weight:700">${nivel(m)}</td><td><input class="sm" type="number" min="0" step="any" value="${x.q}" oninput="slSet(${i},'q',+this.value||0)"></td></tr>`}).join('')}</table></div>
 <label style="margin-top:12px">Mensagem para o fornecedor</label><textarea id="slm" rows="8" oninput="slMsg=this.value">${e(slMsg)}</textarea>
 <label>WhatsApp do fornecedor (com DDD)</label><input id="slf" placeholder="47 99999-0000" value="${e(slFor)}" oninput="slFor=this.value">
 <div class="row" style="margin-top:14px"><button class="b s" onclick="closeM()">Fechar</button><button class="b s" onclick="slCopia()">Copiar texto</button><button class="b" onclick="slEnvia()">Enviar pelo WhatsApp</button></div>`)}
function slSet(i,k,v){SL[i][k]=v;slMsg=slTexto();const t=$('#slm');if(t)t.value=slMsg}
async function slCopia(){const t=$('#slm').value;try{await navigator.clipboard.writeText(t)}catch(x){const a=$('#slm');a.select();document.execCommand('copy')}toast('Lista copiada')}
/* Abre um link (só wa.me) no navegador padrão do computador */
function abrirLink(url){try{if(typeof api.abrirLink==='function')return api.abrirLink(url);window.open(url,'_blank')}catch(x){}}
const numWa=t=>{const n=String(t||'').replace(/\D/g,'');return n&&n.length<=11?'55'+n:n};
/* Envia um texto por WhatsApp: pelo WhatsApp conectado no Bymetal ou, se não der, abre o WhatsApp com a mensagem pronta (wa.me).
   Devolve 'enviado', 'link' ou false (cancelado/erro). */
async function enviaZap(tel,texto,quem){
 const n=numWa(tel);
 if(n.length<12){aviso('Informe o WhatsApp '+quem+' com DDD.');return false}
 const link='https://wa.me/'+n+'?text='+encodeURIComponent(texto);
 let erro='';
 if(WA&&WA.estado==='conectado'&&typeof api.whatsapp.enviarTexto==='function'){
  toast('Enviando…');
  try{const r=await api.whatsapp.enviarTexto(tel,texto);if(r&&r.ok)return 'enviado';erro=(r&&r.erro)||'erro desconhecido'}
  catch(x){erro=x.message||String(x)}
  if(!await confirmar('Não foi possível enviar pelo WhatsApp do Bymetal:\n'+erro+'\n\nAbrir o WhatsApp com a mensagem pronta para você enviar?'))return false;
 }else toast('WhatsApp do Bymetal desconectado: abrindo o WhatsApp com a mensagem pronta');
 abrirLink(link);aviso('Abri o WhatsApp com a mensagem pronta. É só apertar enviar.');return 'link'}
async function slEnvia(){
 try{
  const t=$('#slm').value.trim(),f=$('#slf').value.trim();
  if(!t){aviso('A lista está vazia. Marque ao menos um metal.');return}
  const r=await enviaZap(f,t,'do fornecedor');if(!r)return;
  await api.config.set({fornecedor:f});
  if(r==='enviado'){toast('Lista enviada ao fornecedor pelo WhatsApp',1);closeM()}
 }catch(x){aviso('Erro ao enviar a lista: '+(x.message||x))}}
/* Sugere o valor da compra (quantidade × custo) enquanto o usuário não digitar outro valor */
function entraAuto(troca){const m=by(S.metais,$('#em')&&$('#em').value);if(!m)return;const l=$('#eql');if(l)l.textContent='Quantidade que chegou ('+uP(unM(m))+')';
 const v=$('#ev');if(!v)return;if(troca)delete v.dataset.m;if(!v.dataset.m){const q=+$('#eq').value||0;v.value=q>0&&m.custo>0?r2(q*m.custo):''}}
/* Busca rápida do metal na entrada de estoque (mesma lógica da busca do orçamento: ignora acento, ponto, traço e espaço) */
let esl=[],esi=0;
function esug(){$('#em').value='';$('#emi').textContent='';esl=S.metais.filter(m=>match(m,$('#ems').value)).slice(0,40);esi=0;esgr()}
function esgr(){const el=$('#esg');el.style.display='block';el.innerHTML=esl.length?esl.map((m,i)=>`<div class="${i===esi?'on':''}" onmousedown="epick('${m.id}')"><span><b>${e(m.cod)}</b> · ${e(m.nome)}</span><span class="mut">${N(m.est)} ${uP(unM(m))}</span></div>`).join(''):'<div class="mut">Nenhum metal encontrado</div>'}
function esgk(ev){if(ev.key==='ArrowDown'){esi=Math.min(esl.length-1,esi+1);esgr();ev.preventDefault()}else if(ev.key==='ArrowUp'){esi=Math.max(0,esi-1);esgr();ev.preventDefault()}else if(ev.key==='Enter'){if(esl[esi])epick(esl[esi].id);ev.preventDefault()}else if(ev.key==='Escape')$('#esg').style.display='none'}
function epick(id){const m=by(S.metais,id);if(!m)return;$('#em').value=id;$('#ems').value=m.cod+' · '+m.nome;$('#esg').style.display='none';
 $('#emi').innerHTML=`Em estoque: <b>${N(m.est)} ${uP(unM(m))}</b> · custo ${R(m.custo)}/${UNID[unM(m)].por}`;entraAuto(1);$('#eq').focus()}
function elimpa(){const i=$('#ems');if(!i)return;i.value='';i.focus();esug()}
function entra(){const m=by(S.metais,$('#em').value),q=+$('#eq').value,v=Math.max(0,r2($('#ev').value)),d=$('#ed').value||hoje();
 if(!m){aviso('Busque e escolha o metal que chegou.');$('#ems').focus();return}
 if(!(q>0)){aviso('Informe a quantidade que chegou.');return}
 m.est+=q;m.ref=m.est;delete m.pausado;                                            /* chegou metal: volta a avisar */
 if(v>0)S.compras.push({id:uid(),mid:m.id,cod:m.cod,nome:m.nome,un:unM(m),qtd:q,valor:v,data:d+'T12:00:00.000'});   /* despesa de estoque (entra no Faturamento do mês da compra) */
 save();vEst();if($('#ems'))$('#ems').focus();toast(v>0?'Entrada registrada: estoque em 100% e compra de '+R(v)+' lançada':'Entrada registrada: estoque em 100%',1)}

/* ===== Metais ===== */
function vMet(){$('#app').innerHTML=`<h2>Metais</h2><div class="card"><h3>Novo metal</h3><div class="mform"><div><label>Código</label><input id="mc"></div><div class="s2"><label>Nome</label><input id="mn"></div><div><label>Unidade de medida</label><select id="mu" onchange="mUnForm()">${unOpts('barra')}</select></div><div id="mmw"><label>Metragem da barra (m)</label><input id="mm" type="number" step="any" value="6" oninput="mCalc()"></div><div id="mpw"><label>Peso teórico (kg/m ou kg/m²)</label><input id="mp" type="number" step="any" min="0" placeholder="Ex.: 23,60" oninput="mCalc()"></div>
 <div id="mpk"><label>Preço do quilo (R$/kg)</label><input id="mpkg" type="number" step="any" min="0" placeholder="Ex.: 7,50" oninput="mCalc()"></div><div><label id="mkl">Custo por barra (R$)</label><input id="mk" type="number" step="any" min="0" oninput="mCalc(1)"></div><div><label>Lucro (%)</label><input id="ml" type="number" step="any" value="30" oninput="mCalc(1)"></div><div><label id="mel">Estoque inicial (barras)</label><input id="me" type="number" step="any" min="0" value="0"></div><div><label id="mnl2">Estoque mínimo (barras)</label><input id="mmin" type="number" step="any" min="0" value="${MINPAD}" title="Avisar quando o estoque chegar a este valor"></div><button class="b" onclick="mAdd()">Cadastrar</button></div><div class="hint" id="mprev" style="margin-top:8px"></div></div>
 <div class="card"><div class="row" style="align-items:center"><h3 style="margin:0;flex:1">📥 Importar metais de uma planilha</h3><button class="b s" onclick="$('#mimp').click()">Escolher arquivo (.csv)</button><input id="mimp" type="file" accept=".csv,.txt,.md,text/csv" hidden onchange="mImportar(this)"></div><p class="hint" style="margin:8px 0 0">Colunas: <b>codigo; nome; unidade; metragem; custo; lucro; estoque; minimo</b> (a unidade é barra, barra3, m, cm, mm, m2, kg, un ou cx; também vale o nome do seletor, ex.: "Barra (6m)"). Metais novos são cadastrados. Para códigos que já existem, <b>os preços nunca mudam</b>: você escolhe se ignora, soma ou substitui só o estoque.</p></div>
 <div class="card">${filt()}<div class="tw" id="mt"></div><p class="mut" style="margin:8px 0 0">Mudar preços aqui vale só para orçamentos novos; os já salvos mantêm o valor. Com peso teórico e R$/kg preenchidos, o custo é calculado sozinho (você ainda pode ajustá-lo na mão).</p></div>`;mTab();mUnForm()}
function mTab(){const L=S.metais.filter(m=>match(m,fq)),pk=L.some(m=>['kg','m'].includes(unM(m))),tr='<span class="mut">—</span>';   /* colunas de peso/R$ kg só aparecem se algum metal da lista usa Kg ou Metro */
 $('#mt').innerHTML=`<table class="mtab"><tr><th>Código</th><th class="nm">Nome</th><th>Unidade</th>${pk?'<th class="v">Peso (kg/m)</th><th class="v">R$/kg</th>':''}<th class="v" title="Custo por unidade">Custo</th><th class="v" title="Venda por unidade">Venda</th><th class="v">Mín.</th><th></th></tr>${L.map(m=>{const u=unM(m),kg=kgUn(m),kgl=kg>0&&ehBarra(u);
  return`<tr><td class="v"><b>${e(m.cod)}</b></td><td class="nm">${e(m.nome)}</td><td class="v">${ehBarra(u)?'Barra'+(m.met>0?' · '+N(m.met)+' m':''):({kg:'Quilo (kg)',m:'Metro (m)',cm:'Cent. (cm)',mm:'Milím. (mm)',m2:'m²',cx:'Caixa (cx)'})[u]||'Unidade'}${kgl?`<div class="mut" style="font-size:11px">${kgTxt(kg)}/barra</div>`:''}</td>${pk?`<td class="v">${['kg','m'].includes(u)&&m.pesoT>0?N(m.pesoT):tr}</td><td class="v">${['kg','m'].includes(u)&&m.precoKg>0?R(m.precoKg):tr}</td>`:''}<td class="v"${m.custo>0?'':' style="color:var(--am)" title="Sem preço de custo: preencha em Editar"'}>${R(m.custo)}</td><td class="v">${R(m.custo*(1+m.lucro/100))}<div class="gn sub">lucro ${R(m.custo*m.lucro/100)} · ${N(m.lucro)}%</div></td><td class="v">${N(minM(m))} <span class="mut">${uP(u)}</span></td><td class="v ac"><button class="b s t" onclick="mEdit('${m.id}')">✏️ Editar</button> <button class="b d t" onclick="mDel('${m.id}')">🗑️ Excluir</button></td></tr>`}).join('')||`<tr><td colspan="${pk?9:7}" class="mut">Nenhum metal encontrado.</td></tr>`}</table>`}
/* ✏️ Editar: janela com todos os campos do metal */
function mEdit(id){const m=by(S.metais,id);if(!m)return;const u=unM(m),v=x=>e(x||x===0?x:'');
 mdl(`<h3>✏️ Editar metal</h3><div class="mg2">
 <div><label>Código</label><input id="x_c" value="${e(m.cod)}" autocomplete="off"></div><div><label>Nome</label><input id="x_n" value="${e(m.nome)}" autocomplete="off"></div>
 <div><label>Unidade de medida</label><select id="x_u" onchange="mEdForm()">${unOpts(u)}</select></div><div id="x_mw"><label>Metragem da barra (m)</label><input id="x_m" type="number" step="any" min="0" value="${v(m.met)}" oninput="mEdCalc()"></div>
 <div id="x_pw"><label>Peso teórico (kg/m ou kg/m²)</label><input id="x_p" type="number" step="any" min="0" value="${v(m.pesoT)}" oninput="mEdCalc()"></div><div id="x_kw"><label>Preço do quilo (R$/kg)</label><input id="x_k" type="number" step="any" min="0" value="${v(m.precoKg)}" oninput="mEdCalc()"></div>
 <div><label id="x_cl">Custo</label><input id="x_cu" type="number" step="any" min="0" value="${v(m.custo)}" oninput="mEdCalc(1)"></div><div><label>Lucro (%)</label><input id="x_l" type="number" step="any" min="0" value="${v(m.lucro)}" oninput="mEdCalc(1)"></div>
 <div><label id="x_nl">Estoque mínimo</label><input id="x_mn" type="number" step="any" min="0" value="${v(minM(m))}"></div></div>
 <div class="hint" id="x_pv" style="margin-top:6px"></div>
 <p class="hint" style="margin:6px 0 0">O estoque atual não muda aqui (use a aba Estoque). Orçamentos já salvos mantêm os valores antigos.</p>
 <div class="row" style="margin-top:14px"><button class="b s" onclick="closeM()">Cancelar</button><button class="b" onclick="mEdSalva('${m.id}')">Salvar</button></div>`);
 document.querySelector('.md .mc').style.maxWidth='680px';mEdForm(1)}
function mEdForm(ini){const u=$('#x_u').value;$('#x_mw').style.display=ehBarra(u)?'':'none';$('#x_pw').style.display=$('#x_kw').style.display=semPeso(u)?'none':'';if(!ini&&ehBarra(u)){const c=+$('#x_m').value;if(!(c>0)||c===6||c===3)$('#x_m').value=UNID[u].met}
 $('#x_cl').textContent='Custo por '+UNID[u].por+' (R$)';$('#x_nl').textContent='Estoque mínimo ('+uP(u)+')';mEdCalc(ini?1:0)}
function mEdCalc(man){const u=$('#x_u').value,m={un:u,met:+$('#x_m').value||0,pesoT:$('#x_p').value,precoKg:$('#x_k').value},c=custoAuto(m);
 if(!man&&c>0)$('#x_cu').value=c;
 const custo=+$('#x_cu').value||0,lu=+$('#x_l').value||0,kg=kgUn(m);
 $('#x_pv').innerHTML=[kg>0&&u!=='kg'?`Peso de 1 ${UNID[u].por}: <b>${kgTxt(kg)}</b>`:'',`Venda: <b>${R(custo*(1+lu/100))}</b>/${UNID[u].por}`,c>0?'<span class="mut">(custo = '+fmlCusto(u)+')</span>':''].filter(Boolean).join(' · ')}
function mEdSalva(id){const m=by(S.metais,id);if(!m)return;const cod=$('#x_c').value.trim(),nome=$('#x_n').value.trim(),n=k=>Math.max(0,+$('#'+k).value||0),u=$('#x_u').value;
 if(!cod||!nome){aviso('Informe código e nome.');return}
 if(S.metais.some(x=>x.id!==id&&norm(x.cod)===norm(cod))){aviso('Já existe outro metal com este código.');return}
 const trocou=u!==unM(m);
 Object.assign(m,{cod,nome,un:u,met:ehBarra(u)?n('x_m'):0,pesoT:semPeso(u)?0:n('x_p'),precoKg:semPeso(u)?0:n('x_k'),custo:n('x_cu'),lucro:n('x_l'),estMinimo:n('x_mn')});
 save();closeM();mTab();toast(trocou?'Metal salvo. A unidade mudou: confira estoque e mínimo (não são convertidos).':'Metal salvo')}
/* Troca os rótulos do formulário conforme a unidade escolhida */
/* ===== Importar metais de uma planilha CSV (Excel: Salvar como → CSV) ===== */
function csvLinhas(t){t=String(t||'').replace(/^\uFEFF/,'');const prim=t.split(/\r?\n/,1)[0],sep=[';','\t',','].map(c=>[c,prim.split(c).length]).sort((a,b)=>b[1]-a[1])[0][0];
 const R=[];let l=[],c='',q=false;
 for(let i=0;i<t.length;i++){const x=t[i];
  if(q){if(x==='"'){if(t[i+1]==='"'){c+='"';i++}else if(i+1>=t.length||t[i+1]===sep||t[i+1]==='\n'||t[i+1]==='\r')q=false;else c+='"'}else c+=x}   /* aspas dentro do texto (ex.: TUBO 1" GAL) valem como caractere */
  else if(x==='"'&&c==='')q=true;else if(x===sep){l.push(c);c=''}else if(x==='\n'||x==='\r'){if(x==='\r'&&t[i+1]==='\n')i++;l.push(c);c='';if(l.some(v=>v.trim()))R.push(l);l=[]}else c+=x}
 l.push(c);if(l.some(v=>v.trim()))R.push(l);return R}
const numBR=v=>{let s=String(v==null?'':v).replace(/[R$\s]/g,'');if(!s)return 0;if(s.includes(','))s=s.replace(/\./g,'').replace(',','.');const n=parseFloat(s);return Number.isFinite(n)?n:NaN};
const UN_ALIAS={barra:'barra',barras:'barra',br:'barra',barra6:'barra',barra6m:'barra',barra3:'barra3',barra3m:'barra3',m:'m',metro:'m',metros:'m',cm:'cm',centimetro:'cm',centimetros:'cm',mm:'mm',milimetro:'mm',milimetros:'mm',m2:'m2',metroquadrado:'m2',metrosquadrados:'m2',kg:'kg',kilo:'kg',quilo:'kg',quilograma:'kg',un:'un',und:'un',unid:'un',unidade:'un',pc:'un',peca:'un',cx:'cx',caixa:'cx',pacote:'cx',pct:'cx',metrom:'m',centimetrocm:'cm',milimetromm:'mm',metroquadradom2:'m2',quilogramakg:'kg',unidadeun:'un',caixapacotecx:'cx'};
function mLerCsv(txt){const R=csvLinhas(txt);if(R.length<2)return{erro:'O arquivo está vazio ou sem linhas de dados.'};
 const H=R[0].map(h=>norm(h).replace(/[^a-z]/g,'')),ix=(...n)=>H.findIndex(h=>n.includes(h)),
  c={cod:ix('codigo','cod','code'),nome:ix('nome','descricao','metal','material'),un:ix('unidade','un','medida'),met:ix('metragem','metragemdabarra','barra','comprimento'),custo:ix('custo','preco','valor','custounitario'),lucro:ix('lucro','margem'),est:ix('estoque','quantidade','qtd'),min:ix('minimo','estoqueminimo','min'),peso:ix('pesoteorico','peso','pesokgm','kgm'),pkg:ix('precokg','rkg','precodoquilo','precoquilo','valorkg')};
 if(c.cod<0||c.nome<0||c.custo<0)return{erro:'Faltam colunas. O arquivo precisa ter pelo menos: codigo, nome e custo.'};
 const g=(r,i)=>i<0?'':String(r[i]==null?'':r[i]).trim(),itens=[],erros=[];
 R.slice(1).forEach((r,k)=>{const cod=g(r,c.cod),nome=g(r,c.nome),ln=k+2;if(!cod&&!nome)return;
  const un=c.un<0||!g(r,c.un)?'barra':UN_ALIAS[norm(g(r,c.un).replace('²','2')).replace(/[^a-z0-9]/g,'')],custo=numBR(g(r,c.custo)),met=numBR(g(r,c.met)),lucro=c.lucro<0||g(r,c.lucro)===''?30:numBR(g(r,c.lucro)),est=numBR(g(r,c.est)),mn=c.min<0||g(r,c.min)===''?MINPAD:numBR(g(r,c.min));
  if(!cod||!nome)return erros.push('Linha '+ln+': falta código ou nome');
  if(!un)return erros.push('Linha '+ln+' ('+cod+'): unidade "'+g(r,c.un)+'" não reconhecida');
  const peso=c.peso<0||g(r,c.peso)===''?0:numBR(g(r,c.peso)),pkg=c.pkg<0||g(r,c.pkg)===''?0:numBR(g(r,c.pkg));
  if([custo,met,lucro,est,mn,peso,pkg].some(Number.isNaN)||custo<0||lucro<0||est<0||mn<0||peso<0||pkg<0)return erros.push('Linha '+ln+' ('+cod+'): número inválido');
  const x={cod,nome,un,met:ehBarra(un)?(met>0?met:UNID[un].met):0,custo:r2(custo),lucro,est:r2(est),mn,pesoT:semPeso(un)?0:peso,precoKg:semPeso(un)?0:pkg},ca=custoAuto(x);if(ca>0)x.custo=ca;
  itens.push(x)});
 return{itens,erros}}
let MIMP=null;
function mImportar(inp){const f=inp.files&&inp.files[0];inp.value='';if(!f)return;
 const fr=new FileReader();fr.onerror=()=>aviso('Não foi possível ler o arquivo.');
 fr.onload=()=>{const r=mLerCsv(fr.result);if(r.erro){aviso(r.erro);return}
  const vistos=new Set(S.metais.map(m=>norm(m.cod))),novos=[],dup=[];
  r.itens.forEach(x=>{const k=norm(x.cod),m=S.metais.find(z=>norm(z.cod)===k);if(m)dup.push({x,m});else if(!vistos.has(k)){vistos.add(k);novos.push(x)}});
  MIMP=novos;MIMPD=dup;
  if(!novos.length&&!dup.length){aviso('Nada para importar.'+(r.erros.length?' '+r.erros.length+' linha(s) com erro.':''));return}
  const comEst=novos.filter(x=>x.est>0).length,semPreco=novos.filter(x=>!(x.custo>0)).length;
  mdl(`<h3>📥 Importar metais</h3><p><b>${novos.length}</b> metal(is) novo(s) serão cadastrados.${comEst?`<br><span class="mut">${comEst} com estoque inicial informado (entra como 100%, sem lançar compra).</span>`:''}${semPreco?`<br><span style="color:var(--am)">${semPreco} sem preço de custo (ficam com R$ 0,00 até você preencher em Metais).</span>`:''}${r.erros.length?`<br><span style="color:var(--am)">${r.erros.length} linha(s) com erro serão ignoradas.</span>`:''}</p>
  ${dup.length?`<div class="hint" style="margin:8px 0"><b>${dup.length} já existe(m)</b> (mesmo código). Os preços, lucro e mínimo deles <b>não mudam</b>. O que fazer com o estoque da planilha?
  <label style="text-transform:none;display:block;margin-top:6px"><input type="radio" name="mimpd" value="soma" checked style="width:auto"> Somar ao estoque que já está no programa</label>
  <label style="text-transform:none;display:block"><input type="radio" name="mimpd" value="subs" style="width:auto"> Substituir pelo número da planilha</label>
  <label style="text-transform:none;display:block"><input type="radio" name="mimpd" value="ign" style="width:auto"> Ignorar (não mexer no estoque deles)</label>
  <div class="mut" style="margin-top:6px;max-height:90px;overflow:auto">${dup.slice(0,30).map(d=>e(d.m.cod)+': hoje '+N(d.m.est)+' · planilha '+N(d.x.est)).join('<br>')}</div></div>`:''}
  ${r.erros.length?`<div class="hint" style="max-height:110px;overflow:auto">${r.erros.slice(0,30).map(e).join('<br>')}</div>`:''}
  ${novos.length?`<div class="tw" style="max-height:34vh;overflow:auto"><table><tr><th>Código</th><th>Nome</th><th>Un.</th><th>Custo</th><th>Estoque</th></tr>${novos.slice(0,200).map(x=>`<tr><td>${e(x.cod)}</td><td>${e(x.nome)}</td><td>${x.un}</td><td>${R(x.custo)}</td><td>${N(x.est)}</td></tr>`).join('')}</table></div>`:''}
  <div class="row" style="margin-top:14px"><button class="b s" onclick="closeM()">Cancelar</button><button class="b" onclick="mImportaOk()">Importar</button></div>`)};
 fr.readAsText(f,'utf-8')}
let MIMPD=[];
function mImportaOk(){const L=MIMP||[],D=MIMPD||[],md=(document.querySelector('input[name="mimpd"]:checked')||{}).value||'ign';MIMP=null;MIMPD=[];
 L.forEach(x=>S.metais.push({id:uid(),cod:x.cod,nome:x.nome,un:x.un,met:x.met,custo:x.custo,lucro:x.lucro,est:x.est,ref:x.est,saiu:0,estMinimo:x.mn,pesoT:x.pesoT||0,precoKg:x.precoKg||0}));
 let at=0;if(md!=='ign')D.forEach(({x,m})=>{const novo=md==='soma'?r2((+m.est||0)+x.est):x.est;if(novo!==m.est||md==='subs'){m.est=novo;if(novo>0)m.ref=novo;at++}});   /* só estoque: custo, lucro e mínimo ficam como estão */
 save();closeM();vMet();toast(L.length+' metais novos'+(D.length&&md!=='ign'?' e estoque de '+at+' existente(s) atualizado':'')+'.',1)}
function mUnForm(){const u=$('#mu').value,p=uP(u);$('#mmw').style.visibility=ehBarra(u)?'':'hidden';if(ehBarra(u))$('#mm').value=UNID[u].met;$('#mpw').style.visibility=$('#mpk').style.visibility=semPeso(u)?'hidden':'';$('#mpw').querySelector('label').textContent=u==='kg'?'Peso teórico (kg/m ou kg/m²) — p/ converter m ↔ kg':'Peso teórico (kg/m ou kg/m²)';mCalc();$('#mkl').textContent='Custo por '+UNID[u].por+' (R$)';$('#mel').textContent='Estoque inicial ('+p+')';$('#mnl2').textContent='Estoque mínimo ('+p+')'}
function mUn(id,v){const m=by(S.metais,id);if(!m||!UNID[v])return;m.un=v;if(!ehBarra(v)&&!(m.met>0))m.met=0;{const c=custoAuto(m);if(c>0)m.custo=c}save();mTab();toast('Unidade alterada. Confira custo, estoque e mínimo: os valores não são convertidos.')}
/* Formulário "Novo metal": recalcula o custo da unidade a partir do peso e do R$/kg (manual=1 quando o usuário mexeu no custo/lucro) */
function mCalc(man){const u=$('#mu').value,m={un:u,met:+$('#mm').value||0,pesoT:$('#mp').value,precoKg:$('#mpkg').value},c=custoAuto(m);
 if(!man&&c>0)$('#mk').value=c;
 const custo=+$('#mk').value||0,lu=+$('#ml').value||0,kg=kgUn(m),el=$('#mprev');if(!el)return;
 el.innerHTML=semPeso(u)?'':[kg>0&&u!=='kg'?`Peso de 1 ${UNID[u].por}: <b>${kgTxt(kg)}</b>`:'',custo>0?`Custo ${R(custo)}/${UNID[u].por} · Venda <b>${R(custo*(1+lu/100))}</b>/${UNID[u].por}`:'',c>0?'<span class="mut">(custo calculado: '+fmlCusto(u)+')</span>':''].filter(Boolean).join(' · ')}
function mAdd(){const cod=$('#mc').value.trim(),nome=$('#mn').value.trim();if(!cod||!nome){aviso('Informe código e nome.');return}
 if(S.metais.some(m=>norm(m.cod)===norm(cod))){aviso('Já existe um metal com este código.');return}
 const q=+$('#me').value||0;const un=$('#mu').value;S.metais.push({id:uid(),cod,nome,un,met:ehBarra(un)?+$('#mm').value||0:0,custo:+$('#mk').value||0,lucro:+$('#ml').value||0,est:q,ref:q,saiu:0,estMinimo:Math.max(0,+$('#mmin').value||0),pesoT:semPeso(un)?0:nPos($('#mp').value),precoKg:semPeso(un)?0:nPos($('#mpkg').value)});save();vMet();toast('Metal cadastrado')}
function mSet(id,f,v,num){const m=by(S.metais,id);m[f]=num?+v||0:v;if(['pesoT','precoKg','met'].includes(f)){const c=custoAuto(m);if(c>0)m.custo=c}save();mTab()}
async function mDel(id){if(!await confirmar('Excluir este metal? Orçamentos já salvos continuam com os dados dele.'))return;S.metais=S.metais.filter(m=>m.id!==id);save();mTab()}

/* ===== Clientes e histórico ===== */
let cfq='';                                                         /* texto da busca de clientes */
const cMatch=(c,q)=>{const t=tol(q);if(!t)return true;const h=tol(c.nome+' '+(c.tel||'')+' '+(c.end||'')),dig=String(q).replace(/\D/g,'');
 return t.split(' ').every(w=>h.includes(w))||(dig.length>=3&&(String(c.tel||'').replace(/\D/g,'').includes(dig)||soNum(c.doc).includes(dig)))};
function vCli(){
 $('#app').innerHTML=`<h2>Clientes</h2><div class="card"><h3>Novo cliente</h3><div class="row"><div><label>Nome</label><input id="cn"></div><div><label>Telefone</label><input id="ct"></div><div><label>CPF/CNPJ</label><input id="cd" inputmode="numeric" maxlength="18" placeholder="000.000.000-00" oninput="this.value=fmtDoc(this.value)"></div><div style="flex:2"><label>Endereço</label><input id="ce"></div><button class="b" onclick="cAdd()">Cadastrar</button></div></div>
 <div class="card"><div class="row"><div style="max-width:480px"><input id="cq" autocomplete="off" placeholder="🔍 Buscar cliente por nome, telefone ou endereço" value="${e(cfq)}" oninput="cfq=this.value;cTab()"></div></div><div class="tw" id="ctab"></div></div>`;cTab()}
/* Só a tabela é redesenhada ao digitar na busca (o campo mantém o foco) */
function cTab(){const L=S.clientes.filter(c=>cMatch(c,cfq));
 $('#ctab').innerHTML=`<table><tr><th>Nome</th><th>Telefone</th><th>CPF/CNPJ</th><th>Endereço</th><th>Orçamentos</th><th>Fechado</th><th></th></tr>${L.map(c=>{const q=S.orc.filter(o=>o.cliente===c.nome);return`<tr><td><b>${e(c.nome)}</b></td><td><input value="${e(c.tel)}" onchange="by(S.clientes,'${c.id}').tel=this.value;save()"></td><td><input value="${e(c.doc||'')}" inputmode="numeric" maxlength="18" placeholder="—" style="min-width:150px" oninput="this.value=fmtDoc(this.value)" onchange="cDoc('${c.id}',this.value)"></td><td><input value="${e(c.end)}" onchange="by(S.clientes,'${c.id}').end=this.value;save()"></td><td>${q.length}</td><td>${R(q.filter(o=>FECHADOS.includes(o.status)).reduce((s,o)=>s+o.total,0))}</td><td style="white-space:nowrap"><button class="b s t" onclick="histCli('${c.id}')">🕘 Histórico</button> <button class="b d t" onclick="cDel('${c.id}')">Excluir</button></td></tr>`}).join('')||`<tr><td colspan="7" class="mut">${S.clientes.length?'Nenhum cliente encontrado para "'+e(cfq)+'".':'Nenhum cliente cadastrado.'}</td></tr>`}</table>`}
/* Histórico do cliente em janela flutuante */
/* Abre o PDF a partir do histórico; ao voltar da pré-visualização o histórico do cliente reabre */
let PVH='';
function histAcao(cid,f){PVH=cid;f()}
function histCli(id){const c=by(S.clientes,id);if(!c)return;mdl(hist(c));const m=$('.md:not(.dlg) .mc');if(m)m.style.maxWidth='780px'}
function hist(c){const q=S.orc.filter(o=>o.cliente===c.nome),fech=q.filter(o=>FECHADOS.includes(o.status)),v=fech.reduce((s,o)=>s+o.total,0),aberto=fech.reduce((s,o)=>s+calc(o).restante,0);
 return`<div class="row" style="align-items:center;margin:0 0 6px"><h3 style="margin:0;flex:1">🕘 Histórico · ${e(c.nome)}</h3><button class="b s t" onclick="closeM()">✕ Fechar</button></div>
 <p class="hint" style="margin:0 0 12px">${c.doc?'CPF/CNPJ '+e(c.doc)+' · ':''}${c.tel?e(c.tel):'sem telefone'}${c.end?' · '+e(c.end):''}</p>
 <div class="kpis" style="margin-bottom:12px"><div class="kpi" style="--k:var(--p)"><span>Orçado</span><b style="font-size:20px">${R(q.filter(o=>o.status!=='Cancelado').reduce((s,o)=>s+o.total,0))}</b></div><div class="kpi" style="--k:var(--ok)"><span>Fechado</span><b style="font-size:20px">${R(v)}</b></div><div class="kpi" style="--k:var(--am)"><span>A receber</span><b style="font-size:20px">${R(aberto)}</b></div></div>
 <div style="max-height:52vh;overflow:auto">${q.map(o=>{const k=calc(o);return`<div class="hi"><div><b>Orçamento ${numO(o)}</b> ${stTag(o.status)} <span class="mut">${fd(o.concluidoEm||o.data)}</span><b style="float:right">${R(o.total)}</b></div><div class="mut">${o.itens.map(i=>`${e(i.cod)} ${e(i.nome)} — ${i.rid?'1 retalho':qTxt(i.qtd,unI(i))}`).join(' · ')}</div>${FECHADOS.includes(o.status)&&k.restante>0.004?`<div style="color:var(--am);font-size:13px;margin-top:2px">Falta pagar ${R(k.restante)}</div>`:''}<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px"><button class="b s t" onclick="histAcao('${c.id}',()=>imprime(by(S.orc,'${o.id}')))">🖨️ Imprimir</button><button class="b s t" onclick="histAcao('${c.id}',()=>recibo('${o.id}'))">🧾 Recibo</button><button class="b s t" onclick="histAcao('${c.id}',()=>imprime(by(S.orc,'${o.id}'),true))">📲 WhatsApp</button></div></div>`}).join('')||'<p class="mut">Este cliente ainda não tem orçamentos.</p>'}</div>`}
function cDoc(id,v){const c=by(S.clientes,id);if(!c)return;c.doc=fmtDoc(v);save();if(!docOk(c.doc))toast('Atenção: o CPF/CNPJ de '+c.nome+' parece inválido. Foi salvo mesmo assim.')}
async function cAdd(){const n=$('#cn').value.trim();if(!n){$('#cn').focus();return}if(S.clientes.some(c=>norm(c.nome)===norm(n))){aviso('Este cliente já está cadastrado.');return}
 const doc=fmtDoc($('#cd').value);if(doc&&!docOk(doc)&&!await confirmar('O CPF/CNPJ "'+doc+'" parece inválido (dígitos verificadores). Cadastrar mesmo assim?'))return;
 S.clientes.push({id:uid(),nome:n,tel:$('#ct').value,end:$('#ce').value,doc});save();vCli()}
async function cDel(id){if(!await confirmar('Excluir este cliente? Os orçamentos dele continuam salvos.'))return;S.clientes=S.clientes.filter(c=>c.id!==id);save();vCli()}

/* ===== Painel de indicadores de estoque ===== */
function vPnl(){
 const ord={critico:0,atencao:1,ok:2,sem:3,pausado:4},L=S.metais.map(m=>({m,p:pct(m),ok:m.ref>0&&!m.pausado,nv:nivelM(m)})).sort((a,b)=>(ord[a.nv]-ord[b.nv])||(a.p-b.p)),V=L.filter(x=>x.ok);
 const crit=V.filter(x=>x.nv==='critico'),aten=V.filter(x=>x.nv==='atencao'),bom=V.length-crit.length-aten.length;
 $('#app').innerHTML=`<h2>Painel</h2>
 <div class="kpis"><div class="kpi"><span>Metais cadastrados</span><b>${L.length}</b></div><div class="kpi" style="--k:var(--rd)"><span>Críticos (no mínimo)</span><b>${crit.length}</b></div><div class="kpi" style="--k:var(--am)"><span>Atenção (até 1,5× mín.)</span><b>${aten.length}</b></div><div class="kpi" style="--k:var(--ok)"><span>Estoque OK</span><b>${bom}</b></div><div class="kpi"><span>WhatsApp</span><b id="pwa" class="wab">${waBadge(true)}</b></div></div>
 ${crit.length?`<div class="alert">⚠ Pedir mais: ${crit.map(x=>e(x.m.cod)+' ('+N(x.m.est)+' / mín. '+N(minM(x.m))+')').join(', ')}</div>`:''}
 ${(()=>{const a=devedores().filter(atrasado);return a.length?`<div class="alert" style="cursor:pointer" onclick="go('rec')">⏰ ${a.length} conta(s) em atraso: ${R(a.reduce((t,x)=>t+x.k.restante,0))} a receber. Clique para ver.</div>`:''})()}
 <div class="card"><h3>Níveis de estoque</h3>${L.length?`<div class="grid">${L.map(({m,p,ok,nv})=>`<div class="mc2" onclick="go('est')"><div class="mh"><b>${e(m.cod)}</b><span class="mut">${e(m.nome)}</span></div><div class="bar"><i style="width:${ok?p:0}%;background:${corN(m)}"></i></div><div class="mf"><span>${N(m.est)} de ${N(m.ref)} ${uP(unM(m))} · mín. ${N(minM(m))}</span>${ok?`<b style="color:${corN(m)}">${nv==='critico'?'Crítico':nv==='atencao'?'Atenção':'OK'}</b>`:`<span class="mut">${m.pausado?'🔕 Alertas pausados':'Sem entrada'}</span>`}</div></div>`).join('')}</div>`:'<p class="mut">Cadastre os metais na aba Metais e dê entrada no estoque.</p>'}</div>`}

/* =====================================================================
   MÓDULO EQUIPE E FATURAMENTO
   Dados (db.js): S.funcionarios = [{id,nome,cargo,tipo,pix}]
                  S.pagamentosFuncionarios = [{id,fid,fnome,fcargo,tipo:'Pagamento'|'Vale',valor,data:'AAAA-MM-DD',forma,obs}]
   ===================================================================== */
const TIPOS_PAG=['Mensal','Diária','Empreitada'],TIPOS_LANC=['Pagamento','Vale'],FORMAS_F=['Pix','Dinheiro','Transferência'];
const p2=n=>String(n).padStart(2,'0');
const hoje=()=>{const d=new Date();return d.getFullYear()+'-'+p2(d.getMonth()+1)+'-'+p2(d.getDate())};
const mesDe=v=>{if(!v)return '';if(/^\d{4}-\d{2}-\d{2}/.test(String(v))&&String(v).length===10)return String(v).slice(0,7);const d=new Date(v);return isNaN(d)?'':d.getFullYear()+'-'+p2(d.getMonth()+1)};
const nomeMes=m=>{const [a,n]=String(m).split('-');return new Date(+a,+n-1,1).toLocaleDateString('pt-BR',{month:'long',year:'numeric'})};
const cap=t=>t.charAt(0).toUpperCase()+t.slice(1);
const somaP=a=>r2(a.reduce((s,p)=>s+(+p.valor||0),0));
const fdd=d=>d?String(d).slice(8,10)+'/'+String(d).slice(5,7)+'/'+String(d).slice(0,4):'—';
let MES=hoje().slice(0,7);                                        /* mês exibido nas abas Equipe e Faturamento */
const telaMes=()=>({eqp:vEqp,fat:vFat})[tab]();
function mesSet(v){if(/^\d{4}-\d{2}$/.test(v)){MES=v;telaMes()}}
function mesMuda(n){const [a,m]=MES.split('-').map(Number),d=new Date(a,m-1+n,1);mesSet(d.getFullYear()+'-'+p2(d.getMonth()+1))}
const mesBarra=()=>`<div class="row" style="align-items:flex-end;margin-bottom:12px"><button class="b s" onclick="mesMuda(-1)" title="Mês anterior">‹</button><div style="max-width:200px"><label>Mês</label><input type="month" value="${MES}" onchange="mesSet(this.value)"></div><button class="b s" onclick="mesMuda(1)" title="Próximo mês">›</button><span class="mut">${e(cap(nomeMes(MES)))}</span></div>`;

/* ---------- Equipe: colaboradores ---------- */
const lancMes=(fid,mes)=>S.pagamentosFuncionarios.filter(p=>p.fid===fid&&mesDe(p.data)===(mes||MES));
function vEqp(){
 const F=S.funcionarios,P=S.pagamentosFuncionarios.filter(p=>mesDe(p.data)===MES).sort((a,b)=>String(b.data).localeCompare(String(a.data)));
 $('#app').innerHTML=`<h2>Equipe</h2>${mesBarra()}
 <div class="kpis"><div class="kpi"><span>Colaboradores</span><b>${F.length}</b></div><div class="kpi" style="--k:var(--ok)"><span>Pagamentos no mês</span><b>${R(somaP(P.filter(p=>p.tipo==='Pagamento')))}</b></div><div class="kpi" style="--k:var(--am)"><span>Vales no mês</span><b>${R(somaP(P.filter(p=>p.tipo==='Vale')))}</b></div><div class="kpi" style="--k:var(--rd)"><span>Total gasto com pessoal</span><b>${R(somaP(P))}</b></div></div>
 <div class="card"><div class="row" style="align-items:center"><h3 style="margin:0;flex:1">Colaboradores</h3><button class="b" onclick="mFunc()">＋ Novo colaborador</button></div>
 ${F.length?`<div class="tw"><table><tr><th>Nome</th><th>Cargo</th><th>Pagamento</th><th>Chave PIX</th><th>Pago no mês</th><th></th></tr>${F.map(f=>{const L=lancMes(f.id);return`<tr><td><b>${e(f.nome)}</b></td><td>${e(f.cargo)||'—'}</td><td>${e(f.tipo)}</td><td>${e(f.pix)||'—'}</td><td>${R(somaP(L))}${L.some(x=>x.tipo==='Vale')?`<div class="mut" style="font-size:12px">vales ${R(somaP(L.filter(x=>x.tipo==='Vale')))}</div>`:''}</td><td style="white-space:nowrap"><button class="b t" onclick="mPagF('${f.id}')">💵 Pagar / Vale</button> <button class="b s t" onclick="mFunc('${f.id}')">Editar</button> <button class="b d t" onclick="fDel('${f.id}')">Excluir</button></td></tr>`}).join('')}</table></div>`:'<p class="mut">Nenhum colaborador cadastrado. Clique em "＋ Novo colaborador".</p>'}</div>
 <div class="card"><h3>Pagamentos e vales de ${e(nomeMes(MES))}</h3>${P.length?`<div class="tw"><table><tr><th>Data</th><th>Colaborador</th><th>Tipo</th><th>Forma</th><th>Valor</th><th>Observação</th><th></th></tr>${P.map(p=>`<tr><td>${fdd(p.data)}</td><td>${e(p.fnome)}</td><td style="color:${p.tipo==='Vale'?'var(--am)':'var(--ok)'};font-weight:700">${e(p.tipo)}</td><td>${e(p.forma)}</td><td><b>${R(p.valor)}</b></td><td>${e(p.obs)||'—'}</td><td style="white-space:nowrap"><button class="b s t" onclick="reciboFunc('${p.id}')">🧾 Recibo</button> <button class="b d t" onclick="pagFDel('${p.id}')">✕</button></td></tr>`).join('')}</table></div>`:'<p class="mut">Nenhum pagamento ou vale neste mês.</p>'}</div>`}
function mFunc(id){const f=id?by(S.funcionarios,id):null;
 mdl(`<h3>${f?'Editar colaborador':'Novo colaborador'}</h3><div class="row"><div style="flex:2"><label>Nome</label><input id="fqN" value="${e(f?f.nome:'')}" placeholder="Nome completo"></div><div><label>Cargo</label><input id="fqC" value="${e(f?f.cargo:'')}" placeholder="Ex.: Soldador, Ajudante"></div></div>
 <div class="row"><div><label>Tipo de pagamento</label><select id="fqT">${TIPOS_PAG.map(t=>`<option ${f&&f.tipo===t?'selected':''}>${t}</option>`).join('')}</select></div><div style="flex:2"><label>Chave PIX</label><input id="fqP" value="${e(f?f.pix:'')}" placeholder="CPF, telefone, e-mail ou chave aleatória"></div></div>
 <div class="row" style="margin-top:14px"><button class="b s" onclick="closeM()">Cancelar</button><button class="b" onclick="fSalva('${id||''}')">Salvar</button></div>`);$('#fqN').focus()}
function fSalva(id){const nome=$('#fqN').value.trim(),cargo=$('#fqC').value.trim().slice(0,60),tipo=$('#fqT').value,pix=$('#fqP').value.trim().slice(0,120);
 if(!nome){aviso('Informe o nome do colaborador.');return}
 if(!TIPOS_PAG.includes(tipo)){aviso('Escolha o tipo de pagamento.');return}
 const f=id&&by(S.funcionarios,id);
 if(f){Object.assign(f,{nome:nome.slice(0,80),cargo,tipo,pix});S.pagamentosFuncionarios.forEach(p=>{if(p.fid===f.id){p.fnome=f.nome;p.fcargo=f.cargo}})}
 else S.funcionarios.push({id:uid(),nome:nome.slice(0,80),cargo,tipo,pix});
 save();closeM();vEqp();toast(f?'Colaborador atualizado':'Colaborador cadastrado')}
async function fDel(id){const f=by(S.funcionarios,id);if(!f)return;
 if(!await confirmar(`Excluir ${f.nome}? Os pagamentos já registrados continuam salvos no histórico e no faturamento.`))return;
 S.funcionarios=S.funcionarios.filter(x=>x.id!==id);save();vEqp()}

/* ---------- Equipe: pagamentos e vales ---------- */
function mPagF(fid,aviso0){const f=by(S.funcionarios,fid);if(!f)return;
 const L=lancMes(fid);
 mdl(`<h3>💵 ${e(f.nome)}</h3><p class="hint" style="margin-top:0">${e(f.cargo)||'Sem cargo'} · ${e(f.tipo)}${f.pix?' · PIX: '+e(f.pix):''}<br>Neste mês (${e(nomeMes(MES))}): ${R(somaP(L))} pago${L.length?` em ${L.length} lançamento(s)`:''}.</p>
 <div class="seg"><button id="lgP" class="on" onclick="lancTipo('Pagamento')">Pagamento</button><button id="lgV" onclick="lancTipo('Vale')">Vale / adiantamento</button></div><input type="hidden" id="lgT" value="Pagamento">
 <div class="row"><div><label>Valor (R$)</label><input id="lgVal" type="number" min="0" step="any" placeholder="0,00" onkeydown="if(event.key==='Enter')pagFReg('${fid}',false)"></div><div><label>Data</label><input id="lgD" type="date" value="${hoje()}"></div><div><label>Forma</label><select id="lgF">${FORMAS_F.map(x=>`<option>${x}</option>`).join('')}</select></div></div>
 <label>Observação</label><input id="lgO" placeholder="${f.tipo==='Diária'?'Ex.: 3 diárias (seg a qua)':f.tipo==='Empreitada'?'Ex.: Portão do Sr. Marcos':'Ex.: salário de '+nomeMes(MES)}">
 <div class="row" style="margin-top:14px"><button class="b s" onclick="closeM()">Cancelar</button><button class="b" onclick="pagFReg('${fid}',false)">Registrar</button><button class="b ok" onclick="pagFReg('${fid}',true)">Registrar e gerar recibo</button></div>`);$('#lgVal').focus()}
function lancTipo(t){$('#lgT').value=t;$('#lgP').className=t==='Pagamento'?'on':'';$('#lgV').className=t==='Vale'?'on':''}
function pagFReg(fid,comRecibo){const f=by(S.funcionarios,fid),v=r2($('#lgVal').value),d=$('#lgD').value,t=$('#lgT').value,fm=$('#lgF').value;
 if(!f)return;
 if(!(v>0)){aviso('Informe o valor.');return}
 if(!/^\d{4}-\d{2}-\d{2}$/.test(d)){aviso('Informe a data.');return}
 const p={id:uid(),fid:f.id,fnome:f.nome,fcargo:f.cargo,tipo:TIPOS_LANC.includes(t)?t:'Pagamento',valor:v,data:d,forma:FORMAS_F.includes(fm)?fm:FORMAS_F[0],obs:$('#lgO').value.trim().slice(0,200)};
 S.pagamentosFuncionarios.push(p);save();closeM();
 if(mesDe(d)!==MES)MES=mesDe(d);                                   /* mostra o mês do lançamento */
 vEqp();toast(p.tipo+' registrado: '+R(v),1);if(comRecibo)reciboFunc(p.id)}
async function pagFDel(id){const p=by(S.pagamentosFuncionarios,id);if(!p)return;
 if(!await confirmar(`Excluir ${p.tipo.toLowerCase()} de ${R(p.valor)} para ${p.fnome}?`))return;
 S.pagamentosFuncionarios=S.pagamentosFuncionarios.filter(x=>x.id!==id);save();vEqp()}

/* ---------- Equipe: recibo em PDF ---------- */
function docReciboF(p){const f=by(S.funcionarios,p.fid)||{nome:p.fnome,cargo:p.fcargo,pix:'',tipo:''},mes=mesDe(p.data),total=somaP(lancMes(p.fid,mes)),
  ref=p.tipo==='Vale'?'vale / adiantamento':f.tipo==='Diária'?'pagamento de diária(s)':f.tipo==='Empreitada'?'pagamento de serviço por empreitada':'pagamento de salário';
 return`<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><title>Recibo de pagamento</title><style>body{font:14px Arial,sans-serif;color:#111;margin:0;padding:28px 34px}.top{display:flex;align-items:center;justify-content:space-between;border-bottom:4px solid #ee8330;padding-bottom:12px}.top img{height:90px;border-radius:6px}h1{margin:0 0 4px;font-size:24px}.v{font-size:22px;font-weight:700;border:2px solid #111;border-radius:8px;padding:8px 14px;display:inline-block;margin:18px 0}p.t{font-size:15px;line-height:1.7;margin:16px 0}table{width:100%;border-collapse:collapse;margin:16px 0}td{padding:8px;border-bottom:1px solid #ccc}td:first-child{color:#555;width:38%}.as{margin:70px auto 0;width:320px;border-top:1px solid #111;text-align:center;padding-top:6px}.ft{margin-top:40px;text-align:center;color:#555;font-size:11px}@page{size:A4;margin:10mm}${PDFCSS}</style></head><body>
<div class="top"><div class="em"><img src="${LOGO}">${empTopo()}</div><div style="text-align:right"><h1>RECIBO DE ${p.tipo==='Vale'?'VALE':'PAGAMENTO'}</h1>Data: ${fdd(p.data)}</div></div>
<div class="v">${R(p.valor)}</div>
<p class="t">Eu, <b>${e(f.nome)}</b>${f.cargo?', '+e(f.cargo)+',':''} declaro ter recebido de <b>Bymetal Serralheria</b> o valor de <b>${R(p.valor)}</b> referente a <b>${ref}</b>, em <b>${fdd(p.data)}</b>, via <b>${e(p.forma)}</b>.</p>
<table><tr><td>Colaborador</td><td>${e(f.nome)}</td></tr>${f.cargo?`<tr><td>Cargo</td><td>${e(f.cargo)}</td></tr>`:''}${f.tipo?`<tr><td>Tipo de pagamento</td><td>${e(f.tipo)}</td></tr>`:''}${f.pix?`<tr><td>Chave PIX</td><td>${e(f.pix)}</td></tr>`:''}<tr><td>Forma de pagamento</td><td>${e(p.forma)}</td></tr>${p.obs?`<tr><td>Observação</td><td>${e(p.obs)}</td></tr>`:''}<tr><td>Total recebido em ${e(nomeMes(mes))}</td><td>${R(total)} (pagamentos e vales)</td></tr></table>
<div class="as">${e(f.nome)}</div><div class="ft">Bymetal Serralheria · Comprovante de pagamento a colaborador</div></body></html>`}
function reciboFunc(id){const p=by(S.pagamentosFuncionarios,id);if(!p)return;
 previa({html:docReciboF(p),nome:('Recibo-'+(p.tipo==='Vale'?'Vale':'Pagamento')+'-'+semAcento(p.fnome)+'-'+p.data).replace(/-+$/,'')+'.pdf',legenda:'Recibo de '+p.tipo.toLowerCase()+' — Bymetal Serralheria',tel:''})}

/* ---------- Faturamento ---------- */
/* Faturamento bruto  = total dos orçamentos "Concluído" no mês (data em que foram concluídos).
   Compras de material = valor das entradas de estoque do mês (Estoque → Dar entrada). O "custo de materiais" dos orçamentos (mat) fica só como referência, para não abater duas vezes.
   Pessoal = pagamentos + vales pagos no mês.
   Sinal recebido     = entradas (sinais) registradas no mês em orçamentos não cancelados (informativo: já está dentro do faturamento
                        quando o orçamento é concluído, por isso NÃO soma no lucro).
   Lucro líquido real = faturamento bruto − compras de material − gastos com pessoal. */
function fatDados(mes){
 const concl=S.orc.filter(o=>o.status==='Concluído'&&mesDe(o.concluidoEm||o.venda||o.alt||o.data)===mes);
 let bruto=0,mat=0,receber=0;const comp=S.compras.filter(c=>mesDe(c.data)===mes),compras=r2(comp.reduce((t,c)=>t+(+c.valor||0),0));concl.forEach(o=>{const k=calc(o);bruto+=k.total;mat+=k.c;receber+=k.restante});
 let sinal=0;S.orc.filter(o=>o.status!=='Cancelado').forEach(o=>recebidos(o).forEach(p=>{if(mesDe(p.data||o.data)===mes)sinal+=+p.valor||0}));
 const pessoal=somaP(S.pagamentosFuncionarios.filter(p=>mesDe(p.data)===mes));
 return{concl,comp,compras,bruto:r2(bruto),mat:r2(mat),receber:r2(receber),sinal:r2(sinal),pessoal,vendasMenosCompras:r2(bruto-compras),liquido:r2(bruto-compras-pessoal)}}
async function compDel(id){if(!await confirmar('Excluir este lançamento de compra? Só o valor deixa de contar como despesa. O estoque não é alterado.'))return;S.compras=S.compras.filter(c=>c.id!==id);save();vFat()}
function vFat(){
 const d=fatDados(MES),pc=x=>d.bruto>0?Math.max(0,Math.min(100,x/d.bruto*100)):0,pos=d.liquido>=0,
  meses=[...Array(6)].map((_,i)=>{const [a,m]=MES.split('-').map(Number),x=new Date(a,m-1-(5-i),1),k=x.getFullYear()+'-'+p2(x.getMonth()+1);return{k,...fatDados(k)}}),mx=Math.max(1,...meses.map(m=>Math.abs(m.liquido)));
 $('#app').innerHTML=`<h2>Faturamento</h2>${mesBarra()}
 <div class="kpis"><div class="kpi" style="--k:var(--ok)"><span>Faturamento bruto</span><b>${R(d.bruto)}</b><span class="mut" style="text-transform:none">${d.concl.length} orçamento(s) concluído(s)</span></div><div class="kpi"><span>Sinal recebido</span><b>${R(d.sinal)}</b><span class="mut" style="text-transform:none">sinais e baixas do mês</span></div><div class="kpi" style="--k:var(--am)"><span>Compras de material</span><b>${R(d.compras)}</b><span class="mut" style="text-transform:none">${d.comp.length} entrada(s) de estoque</span></div><div class="kpi" style="--k:var(--rd)"><span>Gastos com pessoal</span><b>${R(d.pessoal)}</b><span class="mut" style="text-transform:none">pagamentos + vales</span></div></div>
 <div class="card" style="border-left:5px solid ${pos?'var(--ok)':'var(--rd)'}"><div class="mut" style="text-transform:uppercase;font-size:12px;letter-spacing:.5px">Lucro líquido real · ${e(nomeMes(MES))}</div><div style="font-size:38px;font-weight:800;color:${pos?'var(--ok)':'var(--rd)'}" id="fatLiq">${R(d.liquido)}</div>
 <div class="hint">${R(d.bruto)} − ${R(d.compras)} (compras de material) − ${R(d.pessoal)} (pessoal) · Vendas − compras: <b>${R(d.vendasMenosCompras)}</b>${d.receber>0?` · Ainda a receber dos concluídos: ${R(d.receber)}`:''}</div>
 ${d.bruto>0?`<div style="display:flex;height:16px;border-radius:8px;overflow:hidden;margin-top:12px;background:var(--l)" title="Para onde foi o faturamento"><i style="width:${pc(d.compras)}%;background:var(--am)"></i><i style="width:${pc(d.pessoal)}%;background:var(--rd)"></i><i style="width:${pos?pc(d.liquido):0}%;background:var(--ok)"></i></div><div class="hint">🟧 compras ${N(pc(d.compras))}% · 🟥 pessoal ${N(pc(d.pessoal))}% · 🟩 lucro ${N(pos?pc(d.liquido):0)}%</div>`:''}</div>
 <div class="card"><h3>Orçamentos concluídos no mês</h3>${d.concl.length?`<div class="tw"><table><tr><th>Nº</th><th>Cliente</th><th>Concluído em</th><th>Total</th><th>Custo do material</th><th>Lucro do orçamento</th></tr>${d.concl.map(o=>{const k=calc(o);return`<tr><td>${numO(o)}</td><td>${e(o.cliente)}</td><td>${fd(o.concluidoEm||o.venda||o.alt||o.data)}</td><td>${R(k.total)}</td><td>${R(k.c)}</td><td class="gn">${R(k.lucro)}</td></tr>`}).join('')}</table></div>`:'<p class="mut">Nenhum orçamento concluído neste mês. Só os orçamentos com status "Concluído" entram no faturamento.</p>'}</div>
 <div class="card"><h3>Compras de material no mês</h3>${d.comp.length?`<div class="tw"><table><tr><th>Data</th><th>Metal</th><th>Quantidade</th><th>Valor da compra</th><th></th></tr>${[...d.comp].sort((a,b)=>String(b.data).localeCompare(String(a.data))).map(c=>`<tr><td>${fd(c.data)}</td><td>${e(c.cod)} · ${e(c.nome)}</td><td>${qTxt(c.qtd,UNID[c.un]?c.un:'barra')}</td><td style="color:var(--am);font-weight:700">${R(c.valor)}</td><td><button class="b d t" onclick="compDel('${c.id}')">Excluir</button></td></tr>`).join('')}</table></div>`:'<p class="mut">Nenhuma compra lançada neste mês. Ao dar entrada de metal no Estoque, informe o valor da compra.</p>'}</div>
 <div class="card"><h3>Lucro líquido nos últimos 6 meses</h3>${meses.map(m=>`<div class="row" style="align-items:center;margin:6px 0;cursor:pointer" onclick="mesSet('${m.k}')"><span style="width:150px">${e(cap(nomeMes(m.k)))}</span><div style="flex:1"><div class="bar"><i style="width:${Math.abs(m.liquido)/mx*100}%;background:${m.liquido>=0?'var(--ok)':'var(--rd)'}"></i></div></div><b style="width:130px;text-align:right;color:${m.liquido>=0?'var(--ok)':'var(--rd)'}">${R(m.liquido)}</b></div>`).join('')}</div>
 <p class="hint">Como é calculado: faturamento = orçamentos "Concluído" no mês (já com desconto, serviços e mão de obra); compras de material = valor das entradas de estoque do mês (vale a data da compra, não a da venda); pessoal = pagamentos e vales lançados na aba Equipe. O sinal é só informativo (já está dentro do faturamento quando o orçamento é concluído). Aluguel, energia e outras despesas fixas não entram.</p>`}

/* =====================================================================
   CONTAS A RECEBER (fiado / a prazo)
   Um orçamento fechado (Aprovado, Em Produção ou Concluído) com "Restante a pagar" > 0 é uma conta a receber.
   A data prevista vem dos lançamentos "A Prazo / Fiado" do orçamento.
   ===================================================================== */
let RF='todos';
const previstoDe=o=>fiados(o).map(p=>p.previsto).filter(Boolean).sort()[0]||'';
function devedores(){return S.orc.filter(o=>o.status!=='Cancelado'&&(FECHADOS.includes(o.status)||fiados(o).length)).map(o=>({o,k:calc(o),prev:previstoDe(o)}))
 .filter(x=>x.k.total>0&&x.k.restante>0.004).sort((a,b)=>(a.prev||'9999').localeCompare(b.prev||'9999')||(a.o.n||0)-(b.o.n||0))}
const atrasado=x=>!!x.prev&&x.prev<hoje();
const diasAte=d=>Math.round((new Date(d)-new Date(hoje()))/864e5);
const prazoTag=x=>{if(!x.prev)return'<span class="mut">sem data</span>';const n=diasAte(x.prev);
 return `${fdd(x.prev)}<div style="font-size:12px;font-weight:700;color:${n<0?'var(--rd)':n===0?'var(--am)':'var(--m)'}">${n<0?'Atrasado '+(-n)+' dia(s)':n===0?'Vence hoje':'em '+n+' dia(s)'}</div>`};
function recFiltro(f){RF=f;vRec()}
function vRec(){
 const T=devedores(),A=T.filter(atrasado),L=RF==='atraso'?A:RF==='data'?T.filter(x=>x.prev):RF==='sem'?T.filter(x=>!x.prev):T,
  soma=a=>r2(a.reduce((t,x)=>t+x.k.restante,0)),clientes=new Set(T.map(x=>x.o.cliente)).size;
 $('#app').innerHTML=`<h2>Contas a receber</h2>
 <div class="kpis"><div class="kpi" style="--k:var(--am)"><span>Total a receber</span><b>${R(soma(T))}</b><span class="mut" style="text-transform:none">${T.length} orçamento(s)</span></div><div class="kpi" style="--k:var(--rd)"><span>Em atraso</span><b>${R(soma(A))}</b><span class="mut" style="text-transform:none">${A.length} orçamento(s)</span></div><div class="kpi"><span>Clientes devendo</span><b>${clientes}</b></div></div>
 <div class="card"><div class="seg" style="margin-top:0">${BT(RF==='todos','Todos',"recFiltro('todos')")}${BT(RF==='atraso','Em atraso',"recFiltro('atraso')")}${BT(RF==='data','Com data prevista',"recFiltro('data')")}${BT(RF==='sem','Sem data',"recFiltro('sem')")}</div>
 ${L.length?`<div class="tw"><table><tr><th>Nº</th><th>Cliente</th><th>Total</th><th>Já pago</th><th>Deve</th><th>Previsto</th><th></th></tr>${L.map(x=>`<tr><td>${numO(x.o)}</td><td><b>${e(x.o.cliente)}</b>${x.o.lembrete?`<div class="mut" style="font-size:12px">lembrete em ${fd(x.o.lembrete)}</div>`:''}</td><td>${R(x.k.total)}</td><td>${R(x.k.sinal)}</td><td style="color:var(--am);font-weight:800">${R(x.k.restante)}</td><td>${prazoTag(x)}</td><td style="white-space:nowrap"><button class="b ok t" onclick="mBaixa('${x.o.id}')">💵 Dar baixa / Lançar pagamento</button> <button class="b s t" onclick="mLembrete('${x.o.id}')">📲 Cobrar pelo WhatsApp</button></td></tr>`).join('')}</table></div>`:`<p class="mut">${T.length?'Nenhuma conta neste filtro.':'Nenhuma conta a receber. 🎉 Os orçamentos fechados estão todos quitados.'}</p>`}</div>
 <p class="hint">Entram aqui os orçamentos Aprovados, Em Produção ou Concluídos que ainda têm saldo a pagar. Para marcar uma venda a prazo, use 💳 Pagamento → "A Prazo / Fiado" no orçamento.</p>`}
function mBaixa(id){const o=by(S.orc,id);if(!o)return;const k=calc(o),F=fiados(o);
 mdl(`<h3>💵 Dar baixa · Orçamento nº ${numO(o)}</h3><p class="hint" style="margin-top:0">${e(o.cliente)}</p>
 <div class="sum" style="margin-top:0"><p><span>Total</span><span>${R(k.total)}</span></p><p><span>Já recebido</span><span>${R(k.sinal)}</span></p><p class="rs"><span>Deve</span><span>${R(k.restante)}</span></p></div>
 ${F.length?`<div class="hint">⏳ A prazo: ${F.map(p=>R(p.valor)+' até '+fdp(p.previsto)).join(' · ')}</div>`:''}
 <h3 style="margin-top:16px;font-size:15px">Lançar pagamento</h3>${campoPag(false,k.restante,`baixaLanca('${id}')`)}
 <div class="row"><button class="b ok" onclick="baixaLanca('${id}')">💵 Lançar pagamento</button></div>
 <h3 style="margin-top:16px;font-size:15px">Data prevista do saldo</h3><div class="row" style="align-items:flex-end"><div style="max-width:220px"><label>Previsto para</label><input id="pdv" type="date" value="${previstoDe(o)||somaDias(7)}"></div><button class="b s" onclick="baixaPrev('${id}')">Salvar data</button></div>
 <div class="row" style="margin-top:14px"><button class="b s" onclick="closeM()">Fechar</button></div>`);pagForma();$('#pv1').focus()}
function baixaLanca(id){const o=by(S.orc,id);if(!o)return;const p=pagNovo();if(!p)return;const k=calc(o);
 if(p.valor>k.restante+0.004){aviso(`O valor é maior que o devido (${R(k.restante)}).`);return}
 migraPagO(o);o.pagamentos.push(p);
 let sobra=p.valor;                                                              /* o que foi pago abate as promessas "a prazo" mais antigas */
 o.pagamentos.filter(x=>x.forma===FIADO).sort((a,b)=>String(a.previsto).localeCompare(String(b.previsto))).forEach(x=>{const d=Math.min(sobra,x.valor);x.valor=r2(x.valor-d);sobra=r2(sobra-d)});
 o.pagamentos=o.pagamentos.filter(x=>x.forma!==FIADO||x.valor>0.004);
 const q=calc(o);if(q.restante<=0.004)o.pagamentos=o.pagamentos.filter(x=>x.forma!==FIADO);   /* quitado: some qualquer promessa que sobrou */
 o.sinal=calc(o).sinal;save();closeM();vRec();toast(q.restante<=0.004?'Quitado! Orçamento nº '+numO(o)+' sem saldo a receber':'Pagamento lançado. Ainda deve '+R(q.restante),1)}
function baixaPrev(id){const o=by(S.orc,id),d=$('#pdv').value;if(!o)return;
 if(!/^\d{4}-\d{2}-\d{2}$/.test(d)){aviso('Informe a data prevista.');return}
 const k=calc(o);if(k.restante<=0.004){aviso('Este orçamento não tem saldo a receber.');return}
 migraPagO(o);const F=o.pagamentos.filter(x=>x.forma===FIADO&&x.valor>0);
 if(F.length)F.forEach(x=>x.previsto=d);else o.pagamentos.push({forma:FIADO,valor:k.restante,previsto:d,data:new Date().toISOString()});
 o.sinal=calc(o).sinal;save();closeM();vRec();toast('Data prevista: '+fdd(d))}
/* Lembrete amigável de saldo pendente por WhatsApp */
function mLembrete(id){const o=by(S.orc,id);if(!o)return;const k=calc(o),c=S.clientes.find(x=>x.nome===o.cliente)||{},prev=previstoDe(o),nome=String(o.cliente||'').trim().split(/\s+/)[0];
 const msg=`Olá${nome?', '+nome:''}! Tudo bem? 😊\n\nPassando só para lembrar, com todo o carinho, do saldo pendente do orçamento nº ${numO(o)} da Bymetal Serralheria: ${R(k.restante)}${prev?(prev<hoje()?`, que estava previsto para ${fdd(prev)}`:`, com previsão de pagamento para ${fdd(prev)}`):''}.\n\nSe você já fez o pagamento, é só me avisar que eu dou baixa por aqui. Qualquer dúvida, estou à disposição!\n\nObrigado pela confiança! 🙏\nBymetal Serralheria`;
 mdl(`<h3>📲 Cobrar pelo WhatsApp</h3><p class="hint" style="margin-top:0">${e(o.cliente)} · deve ${R(k.restante)}</p>
 <label>WhatsApp do cliente (com DDD)</label><input id="lmt" value="${e(c.tel||'')}" placeholder="47 99999-0000">
 <label>Mensagem (pode editar)</label><textarea id="lmm" rows="9">${e(msg)}</textarea>
 <div class="row" style="margin-top:14px"><button class="b s" onclick="closeM()">Cancelar</button><button class="b ok" onclick="lembraEnvia('${id}')">Enviar lembrete</button></div>`)}
async function lembraEnvia(id){const o=by(S.orc,id);if(!o)return;
 try{const t=$('#lmm').value.trim();if(!t){aviso('A mensagem está vazia.');return}
  const r=await enviaZap($('#lmt').value.trim(),t,'do cliente');if(!r)return;
  o.lembrete=new Date().toISOString();save();closeM();vRec();if(r==='enviado')toast('Lembrete enviado ao cliente',1)
 }catch(x){aviso('Erro ao enviar o lembrete: '+(x.message||x))}}

/* ===== Alertas e WhatsApp ===== */
let WA={estado:'desconectado',qr:null,numero:null,erro:null};
const WA_TXT={desconectado:['Desconectado','var(--rd)'],iniciando:['Iniciando…','var(--am)'],qr:['Aguardando leitura do QR Code','var(--am)'],autenticando:['Autenticando…','var(--am)'],conectado:['Conectado','var(--ok)'],erro:['Erro','var(--rd)']};
/* Telefone no padrão nacional: 554788130631 -> (47) 98813-0631 (celular antigo sem o 9 recebe o 9 só na exibição) */
function fmtTel(n){let d=String(n||'').replace(/\D/g,'');if(d.startsWith('55')&&d.length>=12)d=d.slice(2);
 if(d.length===10&&/^[6-9]/.test(d[2]))d=d.slice(0,2)+'9'+d.slice(2);
 if(d.length===11)return`(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;if(d.length===10)return`(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6)}`;return d?'+'+d:''}
/* Badge do WhatsApp (uma linha só, sem quebra). card=true: versão do Painel, com o número logo abaixo para caber no card */
function waBadge(card){const [t,c]=WA_TXT[WA.estado]||WA_TXT.desconectado,num=WA.estado==='conectado'&&WA.numero?fmtTel(WA.numero):'';
 const pill=`<span class="bdg wa" style="--bc:${c}"><i class="dot"></i>${e(t)}${num&&!card?' · '+e(num):''}</span>`;
 return card&&num?`${pill}<span class="wanum">${e(num)}</span>`:pill}
function waRender(){
 const st=$('#wast');if(st)st.innerHTML=waBadge();
 const q=$('#waqr');if(q)q.innerHTML=WA.estado==='qr'&&WA.qr?`<div class="qrbox"><img class="qr" src="${WA.qr}" alt="QR Code do WhatsApp"><div class="hint" style="margin:0;max-width:340px">No celular abra o WhatsApp: <b>Configurações → Aparelhos conectados → Conectar um aparelho</b> e aponte a câmera para este código.</div></div>`:WA.estado==='conectado'?'<p>✅ Conectado. Os alertas e os PDFs serão enviados por esta conta.</p>':WA.estado==='erro'?`<p style="color:var(--rd)">${e(WA.erro)}</p>`:WA.estado==='desconectado'?`<p class="mut">${e(WA.erro)||'Clique em Conectar para gerar o QR Code.'}</p>`:'<p class="mut">Iniciando o WhatsApp… isso pode levar alguns segundos.</p>';
 const bt=$('#wabtn');if(bt)bt.innerHTML=['desconectado','erro'].includes(WA.estado)?'<button class="b ok" onclick="waConectar()">🔗 Conectar WhatsApp</button>':'<button class="b d" onclick="waDesconectar()">Desconectar</button>';
 const pw=$('#pwa');if(pw)pw.innerHTML=waBadge(true)}
async function waConectar(){WA={...WA,estado:'iniciando',erro:null};waRender();await api.whatsapp.conectar()}
async function waDesconectar(){if(!await confirmar('Desconectar o WhatsApp? Será preciso ler o QR Code novamente.'))return;await api.whatsapp.desconectar()}
const ATALHOS=[['Ctrl+N','Novo orçamento'],['Ctrl+E','Estoque'],['Ctrl+D','Painel'],['Ctrl+Shift+A','Alertas'],['Ctrl+Alt+B','Mostrar ou esconder o Bymetal (funciona de qualquer programa)'],['Ctrl+Alt+N','Novo orçamento (global)'],['Ctrl+Alt+E','Estoque (global)'],['Ctrl+Alt+A','Alertas (global)']];
/* ===== 16. Dados da empresa (cabeçalho e rodapé dos PDFs) ===== */
const EMP0={razao:'',fantasia:'',cnpj:'',end:'',tel:'',email:'',pix:'',validade:10,condicoes:''};let EMP={...EMP0};
const empDe=c=>({razao:c.empRazao||'',fantasia:c.empFantasia||'',cnpj:c.empCnpj||'',end:c.empEnd||'',tel:c.empTel||'',email:c.empEmail||'',pix:c.empPix||'',validade:c.empValidade==null?10:Math.max(0,+c.empValidade||0),condicoes:c.empCond||''});
const nomeEmp=()=>EMP.fantasia||EMP.razao||'Bymetal Serralheria';
const atende=o=>(o&&o.usuarioNome)||(USR&&USR.nome)||'—';
const PDFCSS='.em{display:flex;align-items:center;gap:14px}.em img{height:80px;border-radius:6px}.ed{font-size:11px;line-height:1.5;color:#333;max-width:320px}.ed b{font-size:15px;color:#111}.rod{margin-top:26px;border-top:2px solid #ee8330;padding-top:10px;font-size:12px;line-height:1.7;page-break-inside:avoid}.rod .cond{margin-top:8px;white-space:pre-wrap;border:1px solid #bbb;border-radius:6px;padding:8px 10px}';
/* ao lado da logo: nome, CNPJ, endereço e contato (só o que estiver preenchido) */
function empTopo(){const rz=EMP.fantasia&&EMP.razao&&norm(EMP.razao)!==norm(EMP.fantasia)?EMP.razao:'',d=soNum(EMP.cnpj),
  ct=[EMP.tel&&'Tel/WhatsApp: '+EMP.tel,EMP.email].filter(Boolean).join(' · ');
 return`<div class="ed"><b>${e(nomeEmp())}</b>${rz?'<br>'+e(rz):''}${EMP.cnpj?`<br>${d.length===11?'CPF':'CNPJ'}: ${e(EMP.cnpj)}`:''}${EMP.end?'<br>'+e(EMP.end):''}${ct?'<br>'+e(ct):''}</div>`}
/* rodapé: Pix, validade (só no orçamento), atendente e condições de pagamento */
function empRodape(o,orc){const dias=+EMP.validade||0;let val='';
 if(orc&&dias>0){const d=new Date(o.data||Date.now());d.setDate(d.getDate()+dias);val=`<div><b>Validade:</b> ${dias} ${dias===1?'dia':'dias'} (até ${fd(d)})</div>`}
 return`<div class="rod">${EMP.pix?`<div><b>Chave Pix:</b> ${e(EMP.pix)}</div>`:''}${val}<div><b>Atendido por:</b> ${e(atende(o))}</div>${EMP.condicoes?`<div class="cond"><b>Observações / condições de pagamento</b><br>${e(EMP.condicoes)}</div>`:''}</div>`}
function empCard(){const ad=ehAdmin(),d=ad?'':'disabled',x=EMP;
 return`<h3>🏢 Dados da empresa (saem nos PDFs)</h3>
 <div class="row"><div style="flex:2"><label>Nome fantasia</label><input id="ef" ${d} value="${e(x.fantasia)}" maxlength="120" placeholder="Bymetal Serralheria"></div><div style="flex:2"><label>Razão social</label><input id="er" ${d} value="${e(x.razao)}" maxlength="120"></div><div><label>CNPJ</label><input id="ec" ${d} value="${e(x.cnpj)}" inputmode="numeric" maxlength="18" placeholder="00.000.000/0000-00" oninput="this.value=fmtDoc(this.value)"></div></div>
 <div class="row"><div style="flex:3"><label>Endereço completo</label><input id="ee" ${d} value="${e(x.end)}" maxlength="200" placeholder="Rua, nº, bairro, cidade - UF, CEP"></div></div>
 <div class="row"><div><label>Telefone / WhatsApp</label><input id="et" ${d} value="${e(x.tel)}" maxlength="40" placeholder="(47) 99999-0000"></div><div><label>E-mail</label><input id="em" ${d} type="email" value="${e(x.email)}" maxlength="120"></div><div><label>Chave Pix</label><input id="ep" ${d} value="${e(x.pix)}" maxlength="120" placeholder="CNPJ, e-mail, telefone ou chave aleatória"></div><div style="max-width:170px"><label>Validade da proposta (dias)</label><input id="ev" ${d} type="number" min="0" max="365" value="${x.validade}"></div></div>
 <label>Observações / condições de pagamento (rodapé do PDF)</label><textarea id="ed" ${d} rows="3" maxlength="600" placeholder="Ex.: 50% de entrada e saldo na entrega. Cartão em até 12x.">${e(x.condicoes)}</textarea>
 <p class="hint">${ad?'Aparece no cabeçalho (ao lado da logo) e no rodapé do orçamento e do recibo. Validade 0 = não mostrar.':'Só administradores alteram os dados da empresa.'}</p>
 ${ad?'<div class="row" style="margin-top:12px"><button class="b" onclick="empSalva()">Salvar dados da empresa</button></div>':''}`}
async function empSalva(){if(!ehAdmin())return;const v=i=>$(i).value.trim(),cnpj=v('#ec');
 if(cnpj&&!docOk(cnpj)){aviso('CNPJ inválido. Confira os números.');return}
 const email=v('#em');if(email&&!/^\S+@\S+\.\S+$/.test(email)){aviso('E-mail inválido.');return}
 const r=await api.config.set({empFantasia:v('#ef'),empRazao:v('#er'),empCnpj:cnpj,empEnd:v('#ee'),empTel:v('#et'),empEmail:email,empPix:v('#ep'),empValidade:Math.min(365,Math.max(0,parseInt($('#ev').value,10)||0)),empCond:$('#ed').value.trim()});
 if(r){EMP=empDe(r);toast('Dados da empresa salvos')}else aviso('Não foi possível salvar.')}

/* ===== 15. Login e usuários =====
   A senha/PIN nunca é guardada: só o hash PBKDF2 (com "sal"). É uma trava de uso do programa (quem atendeu, quem pode mexer em usuários),
   não uma proteção forte contra quem tem acesso ao arquivo de dados do computador. */
const SESS='bymetal-sessao',ULT='bymetal-ultimo-usuario';let USR=null,_lgRes=null,_lgU=null,_tent=0,_trava=0;
const hexa=b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
const novoSalt=()=>hexa(crypto.getRandomValues(new Uint8Array(16)));
async function hashSenha(p,salt){const te=new TextEncoder(),k=await crypto.subtle.importKey('raw',te.encode(String(p)),'PBKDF2',false,['deriveBits']);return hexa(await crypto.subtle.deriveBits({name:'PBKDF2',salt:te.encode(salt),iterations:120000,hash:'SHA-256'},k,256))}
const senhaOk=async(u,p)=>!!u&&u.hash===await hashSenha(p,u.salt);
async function defSenha(u,p){u.salt=novoSalt();u.hash=await hashSenha(p,u.salt)}
const normCod=c=>String(c||'').toUpperCase().replace(/[^A-Z0-9]/g,'');
async function geraRec(u){const A='ABCDEFGHJKLMNPQRSTUVWXYZ23456789',t=[...crypto.getRandomValues(new Uint8Array(10))].map(x=>A[x%A.length]).join(''),c=t.slice(0,5)+'-'+t.slice(5);
 u.recSalt=novoSalt();u.rec=await hashSenha(normCod(c),u.recSalt);return c}
const ehAdmin=()=>!!(USR&&USR.admin);
const lgBox=h=>{let b=$('#lg');if(!b){b=document.createElement('div');b.id='lg';document.body.appendChild(b)}b.innerHTML=`<div class="lgc"><img src="${LOGO}" alt="Bymetal">${h}</div>`;return b};
function loginGate(){return new Promise(res=>{let id=null;try{id=sessionStorage.getItem(SESS)}catch(x){}
 const u=id&&by(S.usuarios,id);if(u){USR=u;res();return}                                            /* sessão ativa (ex.: recarregou a tela) */
 _lgRes=res;lgTela(S.usuarios.length?'login':'setup')})}
function lgEntrou(u){USR=u;try{sessionStorage.setItem(SESS,u.id)}catch(x){}_tent=0;const b=$('#lg');if(b)b.remove();const r=_lgRes;_lgRes=null;if(r)r()}
const lgErro=m=>{const x=$('#lge');if(x)x.textContent=m};
const lgTrava=()=>{if(Date.now()<_trava){lgErro('Muitas tentativas. Aguarde '+Math.ceil((_trava-Date.now())/1000)+' s.');return true}return false};
const lgFalha=m=>{if(++_tent>=5){_tent=0;_trava=Date.now()+30000}lgErro(m)};
function lgTela(modo,x){
 const sen=(id,r)=>`<label>${r}</label><input id="${id}" type="password" autocomplete="off" onkeydown="if(event.key==='Enter')lgGo()">`;
 if(modo==='login'){let ult='';try{ult=localStorage.getItem(ULT)||''}catch(z){}if(S.usuarios.length===1)ult=S.usuarios[0].nome;
  lgBox(`<h2>Entrar no Bymetal</h2><label>Usuário</label><input id="lgn" list="lgl" autocomplete="off" value="${e(ult)}" placeholder="Selecione ou digite seu nome" onkeydown="if(event.key==='Enter')$('#lgs').focus()"><datalist id="lgl">${S.usuarios.map(u=>`<option value="${e(u.nome)}">${e(u.cargo)}</option>`).join('')}</datalist>${sen('lgs','Senha / PIN')}<p class="lger" id="lge"></p><button class="b" onclick="lgEntra()">Entrar</button><a href="#" onclick="lgTela('recup');return false">Esqueci a senha</a>`);
  $(ult?'#lgs':'#lgn').focus();_lgModo='login'}
 else if(modo==='setup'){lgBox(`<h2>Primeiro acesso</h2><p class="hint">Crie o usuário administrador. Ele cadastra os outros usuários e os dados da empresa.</p><label>Nome</label><input id="lgn" autocomplete="off" maxlength="60"><label>Cargo</label><input id="lgc" autocomplete="off" maxlength="40" value="Proprietário">${sen('lgs','Senha / PIN (mín. 4)')}${sen('lgs2','Repetir senha')}<p class="lger" id="lge"></p><button class="b" onclick="lgCria()">Criar e entrar</button>`);$('#lgn').focus();_lgModo='setup'}
 else if(modo==='recup'){const ad=S.usuarios.filter(u=>u.admin&&u.rec);
  lgBox(`<h2>Recuperar acesso</h2><p class="hint">Use o código de recuperação que apareceu quando o administrador foi criado (ou foi gerado em Configurações).</p><label>Administrador</label><input id="lgn" list="lgl" autocomplete="off" value="${ad.length===1?e(ad[0].nome):''}"><datalist id="lgl">${ad.map(u=>`<option value="${e(u.nome)}">`).join('')}</datalist><label>Código de recuperação</label><input id="lgcod" autocomplete="off" placeholder="XXXXX-XXXXX">${sen('lgs','Nova senha / PIN (mín. 4)')}${sen('lgs2','Repetir nova senha')}<p class="lger" id="lge"></p><button class="b" onclick="lgRecup()">Redefinir senha</button><a href="#" onclick="lgTela('login');return false">‹ Voltar</a>`);_lgModo='recup'}
 else if(modo==='codigo'){_lgModo='codigo';lgBox(`<h2>Código de recuperação</h2><p class="hint">Se esquecer a senha do administrador, só este código reabre o programa. <b>Anote e guarde em lugar seguro</b>: ele não aparece de novo.</p><div class="lgcod">${e(x.code)}</div><button class="b" onclick="lgFimCodigo()">Anotei, continuar</button>`)}}
let _lgModo='';
function lgGo(){({login:lgEntra,setup:lgCria,recup:lgRecup}[_lgModo]||(()=>{}))()}
async function lgEntra(){if(lgTrava())return;const q=norm($('#lgn').value.trim()),u=S.usuarios.find(z=>norm(z.nome)===q),p=$('#lgs').value;
 if(u&&p&&await senhaOk(u,p)){try{localStorage.setItem(ULT,u.nome)}catch(x){}lgEntrou(u);return}
 lgFalha('Usuário ou senha incorretos.');$('#lgs').value='';$('#lgs').focus()}
function checaSenha(a,b){if(String(a).length<4)return'A senha/PIN precisa ter pelo menos 4 caracteres.';if(a!==b)return'As senhas não conferem.';return''}
async function lgCria(){const nome=$('#lgn').value.trim(),m=!nome?'Informe o nome.':checaSenha($('#lgs').value,$('#lgs2').value);if(m){lgErro(m);return}
 const u={id:uid(),nome,cargo:$('#lgc').value.trim(),admin:true,criado:new Date().toISOString()};await defSenha(u,$('#lgs').value);const code=await geraRec(u);
 S.usuarios.push(u);saveNow();_lgU=u;lgTela('codigo',{code})}
function lgFimCodigo(){const u=_lgU;_lgU=null;if(u&&!USR&&_lgRes)lgEntrou(u);else lgTela('login')}
async function lgRecup(){if(lgTrava())return;const q=norm($('#lgn').value.trim()),u=S.usuarios.find(z=>z.admin&&z.rec&&norm(z.nome)===q),m=checaSenha($('#lgs').value,$('#lgs2').value);
 if(m){lgErro(m);return}
 if(!u||(await hashSenha(normCod($('#lgcod').value),u.recSalt))!==u.rec){lgFalha('Administrador ou código incorreto.');return}
 await defSenha(u,$('#lgs').value);const code=await geraRec(u);saveNow();_lgU=null;_tent=0;lgTela('codigo',{code});_lgU=u}
async function trocaUsuario(){if(D.itens.length&&!await confirmar('Há um orçamento em montagem. Sair agora descarta esse rascunho. Continuar?'))return;
 D=dflt();try{sessionStorage.removeItem(SESS)}catch(x){}USR=null;closeM();document.querySelectorAll('.pv').forEach(n=>n.remove());$('#nav').innerHTML='';$('#app').innerHTML='';
 await loginGate();go('pnl')}
/* ---- gestão de usuários (aba Configurações) ---- */
function usrCard(){const ad=ehAdmin();
 return`<h3>👥 Usuários do sistema</h3><p class="hint" style="margin-top:0">Quem entra no Bymetal. O nome do usuário que salva o orçamento sai no PDF como "Atendido por".</p>
 <div class="tw"><table><tr><th>Nome</th><th>Cargo</th><th>Perfil</th><th></th></tr>${S.usuarios.map(u=>`<tr><td><b>${e(u.nome)}</b>${u.id===USR.id?' <span class="mut">(você)</span>':''}</td><td>${e(u.cargo)||'<span class="mut">—</span>'}</td><td>${u.admin?'Administrador':'Usuário'}</td><td>${ad?`<button class="b s t" onclick="mUsr('${u.id}')">Editar</button> ${u.id===USR.id?'':`<button class="b d t" onclick="usrDel('${u.id}')">Excluir</button>`}`:u.id===USR.id?`<button class="b s t" onclick="mUsr('${u.id}')">Alterar minha senha</button>`:''}</td></tr>`).join('')}</table></div>
 ${ad?'<div class="row" style="margin-top:12px"><button class="b" onclick="mUsr()">+ Novo usuário</button><button class="b s" onclick="usrRec()">🔑 Gerar novo código de recuperação</button></div>':''}`}
const usrTab=()=>{const el=$('#usrc');if(el)el.innerHTML=usrCard()};
function mUsr(id){const u=id?by(S.usuarios,id):null,eu=!!u&&u.id===USR.id;if(id&&!u)return;
 mdl(`<h3>${u?'Editar usuário':'Novo usuário'}</h3><label>Nome</label><input id="un" maxlength="60" value="${e(u?u.nome:'')}" autocomplete="off"><label>Cargo</label><input id="uc" maxlength="40" value="${e(u?u.cargo:'')}" autocomplete="off" placeholder="Ex.: Vendedor, Soldador">
 ${ehAdmin()?`<label style="text-transform:none;display:flex;gap:8px;align-items:center;margin-top:12px"><input type="checkbox" id="ua" style="width:auto" ${u&&u.admin?'checked':''}> Administrador (gerencia usuários e dados da empresa)</label>`:''}
 ${eu?'<label>Senha atual (só para trocar a senha)</label><input id="us0" type="password" autocomplete="off">':''}
 <label>${u?'Nova senha / PIN (vazio = manter)':'Senha / PIN (mín. 4)'}</label><input id="us1" type="password" autocomplete="new-password"><label>Repetir senha</label><input id="us2" type="password" autocomplete="new-password">
 <div class="row" style="margin-top:14px"><button class="b s" onclick="closeM()">Cancelar</button><button class="b" onclick="usrSalva('${id||''}')">Salvar</button></div>`);$('#un').focus()}
async function usrSalva(id){const u=id?by(S.usuarios,id):null,nome=$('#un').value.trim(),nova=$('#us1').value,ad=ehAdmin();
 if(!nome){aviso('Informe o nome.');return}
 if(S.usuarios.some(x=>x.id!==id&&norm(x.nome)===norm(nome))){aviso('Já existe um usuário com esse nome.');return}
 if(!u||nova){const m=checaSenha(nova,$('#us2').value);if(m){aviso(m);return}}
 const eu=!!u&&u.id===USR.id;
 if(eu&&nova&&!await senhaOk(u,$('#us0').value)){aviso('A senha atual não confere.');return}
 const admin=ad&&$('#ua')?$('#ua').checked:(u?u.admin:false);
 if(u&&u.admin&&!admin&&S.usuarios.filter(x=>x.admin).length<2){aviso('Precisa existir pelo menos um administrador.');return}
 const alvo=u||{id:uid(),criado:new Date().toISOString()};alvo.nome=nome;alvo.cargo=$('#uc').value.trim();alvo.admin=admin;
 if(!u||nova)await defSenha(alvo,nova);
 if(!u)S.usuarios.push(alvo);
 if(eu)USR=alvo;save();closeM();usrTab();go(tab);toast(u?'Usuário atualizado':'Usuário criado')}
async function usrDel(id){const u=by(S.usuarios,id);if(!u||!ehAdmin()||u.id===USR.id)return;
 if(u.admin&&S.usuarios.filter(x=>x.admin).length<2){aviso('Precisa existir pelo menos um administrador.');return}
 if(!await confirmar('Excluir o usuário "'+u.nome+'"? Os orçamentos que ele atendeu continuam com o nome dele.'))return;
 S.usuarios=S.usuarios.filter(x=>x.id!==id);save();usrTab()}
async function usrRec(){if(!ehAdmin())return;const u=by(S.usuarios,USR.id),code=await geraRec(u);save();
 mdl(`<h3>🔑 Código de recuperação</h3><p class="hint">Vale para o administrador <b>${e(u.nome)}</b> e substitui o anterior. Anote e guarde: ele não aparece de novo.</p><div class="lgcod" style="background:var(--c2)">${e(code)}</div><div class="row" style="margin-top:14px"><button class="b" onclick="closeM()">Anotei</button></div>`)}

/* ===== Notas da versão (aba Configurações) ===== */
const VERSAO='2.6.0';
const CHANGELOG=[
 ['2.6.0','2026-10-24',['Versão para celular (Android e iPhone): instale pelo navegador e use o mesmo cadastro, estoque, orçamentos e clientes — sincronizados com os computadores.','Telas ajustadas para celular: menu rolável, tabelas que deslizam e botões maiores.']],
 ['2.5.0','2026-10-24',['Atualização automática: o programa confere novidades a cada 1 hora, baixa sozinho e avisa quando está pronto.','Configurações → Atualização: botões "Verificar agora" e "Reiniciar e atualizar", com a barra de progresso.']],
 ['2.4.2','2026-10-23',['Estoque: botão "➖ Ajustar" em cada metal — diminuir uma quantidade, corrigir para um valor exato ou zerar, sem precisar fazer venda. Opção de remover junto a compra lançada errada.','Zerar pode pausar os alertas do metal (🔕): sem aviso no Painel, no WhatsApp nem na lista de compras. Dar entrada reativa sozinho.','Importar planilha: para códigos que já existem os preços nunca mudam; escolha somar, substituir ou ignorar só o estoque. Aceita arquivo .md e nomes de unidade como "Barra (6m)". Corrigido: aspas de polegada (1") no nome não derrubam mais linhas.']],
 ['2.4.1','2026-10-20',['Estoque: a entrada de metal agora tem busca rápida (digite código ou nome, setas + Enter), em vez da lista suspensa gigante.','Depois de dar entrada, o cursor volta para a busca para lançar o próximo metal.']],
 ['2.4.0','2026-10-15',['Notas da versão em Configurações (este histórico).','Novas unidades de medida: Barra (3m), Centímetro, Milímetro, Metro quadrado e Caixa/Pacote.','Orçamento converte proporcionalmente: lance um metal em metros, centímetros ou Kg e o programa calcula a quantidade e o preço na unidade do metal.']],
 ['2.3.1','2026-10-15',['Aba Metais: tabela limpa (só texto) com botões Editar e Excluir; Editar abre uma janela com todos os campos.','Colunas Peso (kg/m) e R$/kg só aparecem quando há metal em Metro ou Quilo.','Formulário "Novo metal" em grade de 2 linhas.']],
 ['2.3.0','2026-10-15',['Peso teórico (kg/m ou kg/m²) e preço do quilo no cadastro do metal; o custo é calculado sozinho.','Orçamento: "Lançar por" barras, Kg totais ou Metros totais; peso por item e total na tela e no PDF.','Importação de CSV aceita peso teórico e preço do quilo.']],
 ['2.2.0','2026-10-14',['Login com usuários (nome, cargo, senha/PIN) e código de recuperação.','Orçamento guarda quem atendeu: "Atendido por" no PDF, recibo e O.S.','Dados da empresa (CNPJ, endereço, contatos, Pix, validade e condições) no cabeçalho e rodapé dos PDFs.']],
 ['2.1.0','2026-10-14',['Importar metais de uma planilha CSV (170 metais prontos).','Nova unidade "Unidade (un)".']],
 ['2.0.0','2026-10-13',['Clientes: CPF/CNPJ com máscara e conferência; ações Imprimir, Recibo e WhatsApp no histórico.','Metais em Barra, Metro ou Quilo.','Compras de material (entrada de estoque) viram despesa; Faturamento com lucro líquido real.']],
 ['1.9.0','2026-10-13',['Sincronização entre computadores pelo Firebase, com funcionamento offline.']],
 ['1.8.0','2026-10-12',['Estoque mínimo fixo por metal e "Ajustar Mínimos".','Numeração de orçamento por cliente.','O.S. Oficina (sem valores) e retalhos/sobras.']],
 ['1.7.1','2026-10-11',['Clientes: busca por nome, telefone ou endereço e histórico em janela.']],
 ['1.7.0','2026-10-11',['Busca de metais tolerante, margem de lucro colorida, toasts com atalhos e fade entre abas.']],
 ['1.6.0','2026-10-11',['Cartão de crédito em 1x a 12x.','Fiado com data prevista, aba A Receber e cobrança por WhatsApp.']],
 ['1.5.0','2026-10-11',['Aba Equipe (colaboradores, pagamentos, vales e recibos).','Aba Faturamento com lucro do mês.']],
 ['1.4.0','2026-10-10',['Pagamento em várias formas e botão Recibo.','Serviços, Pagamento e Medidas/O.S. em janelas pela barra inferior.']],
 ['1.3.0','2026-10-10',['Envio de PDF pelo WhatsApp corrigido; avisos dentro da página.','Duplicar orçamento e lista de compras por WhatsApp.']],
 ['1.2.0','2026-10-10',['Status do orçamento (só Concluído abate o estoque), catálogo de Serviços, sinal pago e medidas técnicas.']],
 ['1.1.0','2026-10-08',['Primeira versão para Electron: orçamentos por barra, estoque com alerta por cor, clientes, WhatsApp e PDF.']]];
function clCard(){const f=d=>new Date(d+'T12:00:00').toLocaleDateString('pt-BR');
 return`<div class="row" style="align-items:center"><h3 style="margin:0">📌 Notas da versão / Histórico de atualizações</h3><span class="bdg wa" style="--bc:var(--ok)"><i class="dot"></i>Versão atual v${VERSAO}</span></div>
 <div class="cl">${CHANGELOG.map(([v,d,t],n)=>`<details ${n===0?'open':''}><summary><b>v${v}</b><span class="mut">${f(d)}</span>${n===0?'<span class="bdg" style="--bc:var(--p)">atual</span>':''}</summary><ul>${t.map(x=>`<li>${e(x)}</li>`).join('')}</ul></details>`).join('')}</div>`}
async function vCfg(){
 const c=(await api.config.get())||{telefone:'',limiteMinimo:30};
 EMP=empDe(c);$('#app').innerHTML=`<h2>Configurações</h2>
 <div class="card" id="empc">${empCard()}</div>
 <div class="card" id="usrc">${usrCard()}</div>
 <div class="card"><div class="row" style="align-items:center"><h3 style="margin:0">WhatsApp</h3><span id="wast"></span></div><div id="waqr"></div><div class="row" id="wabtn" style="margin-top:12px"></div>
 <p class="hint">O Bymetal usa a sua conta do WhatsApp (como um aparelho conectado) para mandar os avisos em segundo plano. A sessão fica salva neste computador: o QR Code só precisa ser lido uma vez.</p></div>
 <div class="card"><h3>Alerta de estoque (WhatsApp)</h3><div class="row"><div><label>Seu WhatsApp (com DDD)</label><input id="ft" placeholder="47 99999-0000" value="${e(c.telefone)}"></div><div style="max-width:300px"><label>Estoque mínimo padrão (barras)</label><input id="fl" type="number" min="0" step="any" value="${c.minimoPadrao??5}"></div></div>
 <p class="hint">O aviso dispara quando o estoque do metal chega ao <b>estoque mínimo dele</b> (definido em Metais ou em Estoque → ⚙️ Ajustar Mínimos). O número acima é só o valor sugerido ao cadastrar um metal novo. Cada metal avisa uma vez só. Depois da entrada de estoque, quando voltar acima do mínimo, o alerta é rearmado. Se o WhatsApp estiver desconectado, o aviso espera na fila e sai quando conectar.</p>
 <div class="row" style="margin-top:14px"><button class="b" onclick="cfgSalva()">Salvar</button><button class="b s" onclick="cfgTeste()">Enviar mensagem de teste</button></div></div>
 <div class="card" id="nvcard"></div>
 <div class="card" id="updc"></div>
 <div class="card">${clCard()}</div>
 <div class="card"><h3>Atalhos de teclado</h3><table>${ATALHOS.map(([k,d])=>`<tr><td style="width:170px"><kbd>${k}</kbd></td><td>${d}</td></tr>`).join('')}</table></div>`;waRender();nvInicia();updInicia();webCfg()}
function webCfg(){if(!api.web)return;const w=$('#wast');if(w)w.closest('.card').remove();const tb=document.querySelector('[onclick="cfgTeste()"]');if(tb)tb.remove();const cs=document.querySelectorAll('#app>.card');const at=cs[cs.length-1];if(at&&/Atalhos de teclado/.test(at.textContent))at.remove()}
/* ===== Atualização automática ===== */
let UPD_OFF=null;
function updRender(s){const el=$('#updc');if(!el){return}
 s=s||{fase:'inativo',versao:VERSAO};
 if(s.web){el.innerHTML='<div class="row" style="align-items:center"><h3 style="margin:0">🔄 Atualização</h3><span class="bdg" style="--bc:var(--p)">Versão web v'+VERSAO+'</span></div><p style="margin:12px 0">A versão do celular se atualiza sozinha quando você abre o app com internet. Se algo parecer antigo, use o botão abaixo.</p><div class="row"><button class="b s" onclick="api.atualizacao.verificar()">Atualizar agora</button></div>';return}
 const f=s.fase,v=s.versao||VERSAO;let st,bt='';
 if(f==='verificando')st='🔎 Procurando atualização…';
 else if(f==='baixando')st='⬇️ Baixando a versão '+e(s.nova||'nova')+(s.pct!=null?' — '+s.pct+'%':'…')+(s.pct!=null?'<div style="height:8px;background:var(--b2,#ddd);border-radius:6px;margin-top:8px;overflow:hidden"><div style="height:100%;width:'+s.pct+'%;background:var(--ok)"></div></div>':'');
 else if(f==='pronta'){st='✅ A versão '+e(s.nova||'nova')+' está pronta para instalar.';bt='<button class="b" onclick="updInstala()">Reiniciar e atualizar</button>'}
 else if(f==='atual')st='✅ Você está com a versão mais recente.';
 else if(f==='erro')st='⚠️ Não foi possível verificar agora ('+e(s.erro||'sem conexão')+'). Tentaremos de novo em 1 hora.';
 else st=s.aviso?e(s.aviso):(s.empacotado===false?'A atualização automática só funciona no programa instalado (Setup.exe).':'Aguardando a próxima verificação.');
 el.innerHTML='<div class="row" style="align-items:center"><h3 style="margin:0">🔄 Atualização</h3><span class="bdg" style="--bc:var(--p)">Versão instalada v'+e(v)+'</span></div><p style="margin:12px 0">'+st+'</p><div class="row">'+bt+'<button class="b s" onclick="updVerifica()"'+(f==='verificando'||f==='baixando'?' disabled':'')+'>Verificar agora</button></div><p class="hint">O Bymetal procura versões novas ao abrir e a cada 1 hora. Mantenha todos os computadores na mesma versão para a sincronização funcionar bem.</p>'}
async function updInicia(){if(!api.atualizacao)return;if(UPD_OFF)UPD_OFF();updRender(await api.atualizacao.estado());UPD_OFF=api.atualizacao.onMudou(s=>updRender(s))}
async function updVerifica(){updRender(Object.assign(await api.atualizacao.estado()||{},{fase:'verificando'}));const s=await api.atualizacao.verificar();if(s)updRender(Object.assign({},s,{empacotado:s.fase==='inativo'?false:undefined}))}
async function updInstala(){const ok=await confirmar('Reiniciar o Bymetal agora para instalar a atualização?');if(ok)api.atualizacao.instalar()}
/* ===== Sincronização entre computadores (Firebase) ===== */
let NV=null;
const NV_TXT={desligado:['Desligada','var(--mut,#888)'],conectando:['Conectando…','var(--am)'],online:['Sincronizado','var(--ok)'],offline:['Sem conexão','var(--am)'],erro:['Erro','var(--rd)']};
const REGRAS=`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /oficinas/{oficina}/{documento=**} {
      allow read, write: if request.auth != null
        && request.auth.token.email in ['seu-email@exemplo.com'];
    }
  }
}`;
async function nvInicia(){if(!api.nuvem)return;try{NV=await api.nuvem.estado()}catch(x){NV=null}nvRender()}
function nvRender(){const el=$('#nvcard');if(!el)return;
 if(!NV){el.innerHTML='<h3>☁️ Sincronização entre computadores</h3><p class="mut">Disponível só no aplicativo instalado.</p>';return}
 const [t,c]=NV_TXT[NV.estado]||NV_TXT.desligado,pill=`<span class="bdg wa" style="--bc:${c}"><i class="dot"></i>${e(t)}</span>`;
 const ligado=NV.ativo&&NV.configurado,ult=NV.ultimo?new Date(NV.ultimo).toLocaleString('pt-BR'):'—';
 const foco=document.activeElement&&document.activeElement.id;
 el.innerHTML=`<div class="row" style="align-items:center"><h3 style="margin:0">☁️ Sincronização entre computadores</h3>${pill}</div>
 <p class="hint">Deixa metais, clientes, orçamentos, estoque, retalhos e equipe iguais em todos os computadores (Firebase). Sem internet o Bymetal continua funcionando e envia as alterações quando a conexão voltar.</p>
 ${NV.msg?`<p style="color:${c};margin:6px 0">${e(NV.msg)}</p>`:''}
 ${ligado?`<p style="margin:6px 0">Projeto <b>${e(NV.projectId)}</b> · oficina <b>${e(NV.oficina)}</b> · ${e(NV.email)}<br><span class="mut">Última sincronização: ${e(ult)}${NV.pendentes?` · ${NV.pendentes} alteração(ões) esperando envio`:''}</span></p>
 <div class="row" style="margin-top:10px"><button class="b d" onclick="nvDesliga()">Desligar sincronização</button></div>`
 :`<label>Configuração do Firebase (cole o bloco <code>firebaseConfig</code> do console)</label><textarea id="nvc" rows="5" placeholder='const firebaseConfig = { apiKey: "...", projectId: "...", appId: "..." };'></textarea>
 <div class="row"><div><label>E-mail do usuário</label><input id="nve" type="email" autocomplete="off" value="${e(NV.email||'')}"></div><div><label>Senha</label><input id="nvs" type="password" autocomplete="off"></div><div style="max-width:220px"><label>Código da oficina</label><input id="nvo" value="${e(NV.oficina||'bymetal')}" maxlength="40"></div></div>
 <div class="row" style="margin-top:12px"><button class="b ok" id="nvb" onclick="nvLiga()">☁️ Conectar</button></div>`}
 <details style="margin-top:14px"><summary style="cursor:pointer;font-weight:600">Como configurar (uma vez só)</summary>
 <ol class="hint" style="line-height:1.7;padding-left:20px">
 <li>Entre em <b>console.firebase.google.com</b>, crie um projeto (pode desativar o Google Analytics).</li>
 <li><b>Build → Authentication → Começar → E-mail/senha</b> (ativar). Na aba <b>Usuários</b>, adicione um usuário com e-mail e senha. Use o mesmo nos computadores da oficina.</li>
 <li><b>Build → Firestore Database → Criar banco de dados</b> (modo produção). Na aba <b>Regras</b>, cole o texto abaixo trocando o e-mail pelo do usuário e publique.</li>
 <li><b>Configurações do projeto → Seus aplicativos → Web (&lt;/&gt;)</b>: registre o app e copie o bloco <code>firebaseConfig</code> para o campo acima.</li>
 <li>No primeiro computador, o Bymetal envia seus dados para a nuvem. Nos outros, ele baixa o que já está lá. Use o <b>mesmo código da oficina</b> em todos.</li></ol>
 <pre style="white-space:pre-wrap;font-size:12px;padding:10px;border-radius:8px;background:var(--bg2,rgba(127,127,127,.12))">${e(REGRAS)}</pre></details>`;
 if(foco){const n=document.getElementById(foco);if(n)n.focus()}}
async function nvLiga(){const b=$('#nvb');if(b){b.disabled=true;b.textContent='Conectando…'}
 const r=await api.nuvem.conectar({config:$('#nvc').value,email:$('#nve').value,senha:$('#nvs').value,oficina:$('#nvo').value});
 NV=await api.nuvem.estado();nvRender();
 if(r&&r.ok)toast('Sincronização ligada');else aviso((r&&r.erro)||'Não foi possível conectar.')}
async function nvDesliga(){if(!await confirmar('Desligar a sincronização neste computador? Os dados continuam aqui e na nuvem.'))return;NV=await api.nuvem.desconectar();nvRender()}
/* Chegaram dados de outro computador: troca os dados em memória e atualiza a tela (sem mexer no que está aberto) */
function recarregaDados(d){if(!d||!Array.isArray(d.metais))return;
 clearTimeout(_sy);_sy=null;
 S={...S,metais:d.metais||[],clientes:d.clientes||[],orc:d.orc||[],servicos:d.servicos||[],retalhos:d.retalhos||[],compras:d.compras||[],usuarios:d.usuarios||[],funcionarios:d.funcionarios||[],pagamentosFuncionarios:d.pagamentosFuncionarios||[],seq:d.seq||S.seq};
 if(USR){const n=by(S.usuarios,USR.id);if(n)USR=n}
 if(!USR)return;                                                                             // ainda na tela de login: nada para atualizar na tela
 if(document.querySelector('.md')||document.querySelector('.pv')||tab==='cfg')return;     // há uma janela aberta ou campos sendo digitados: só atualiza na próxima troca de tela
 if(tab==='orc'){lst();nProx()}else go(tab);
 toast('Dados atualizados por outro computador')}
async function cfgSalva(){const r=await api.config.set({telefone:$('#ft').value.trim(),minimoPadrao:Math.max(0,+$('#fl').value||0)});if(r){MINPAD=r.minimoPadrao??MINPAD}if(r)toast('Configuração salva');else aviso('Não foi possível salvar.');return !!r}
async function cfgTeste(){if(!await cfgSalva())return;const r=await api.alerta.teste();if(r.ok)toast('Mensagem de teste enviada');else aviso('Falhou: '+r.erro)}

/* ===== Migração: dados da versão anterior ("Orçamento"/"Vendido") para o funil novo ===== */
function migrar(){let m=false;
 if(!Array.isArray(S.servicos)){S.servicos=[];m=true}
 S.metais.forEach(x=>{if(x.estMinimo==null||isNaN(+x.estMinimo)){x.estMinimo=Math.ceil((+x.ref||0)*0.3);m=true}});   /* antes o alerta era 30% da referência: o mínimo fixo começa equivalente */
 {const porCli={};[...S.orc].sort((a,b)=>(a.n||0)-(b.n||0)).forEach(o=>{if(o.nc)porCli[o.cliente]=Math.max(porCli[o.cliente]||0,o.nc)});    /* orçamentos antigos ganham o número dentro do cliente, na ordem em que foram feitos */
  [...S.orc].sort((a,b)=>(a.n||0)-(b.n||0)).forEach(o=>{if(!o.nc){o.nc=(porCli[o.cliente]||0)+1;porCli[o.cliente]=o.nc;m=true}});
  S.clientes.forEach(c=>{const v=porCli[c.nome]||0;if((+c.seqOrc||0)<v){c.seqOrc=v;m=true}})}
 S.orc.forEach(o=>{
  if(o.status==='Orçamento'){o.status='Pendente';o.baixado=false;m=true}
  else if(o.status==='Vendido'){o.status='Concluído';o.baixado=true;o.concluidoEm=o.venda||o.data;m=true}   /* a venda antiga já tinha baixado o estoque */
  if(!Array.isArray(o.servicos)){o.servicos=[];m=true}
  if(typeof o.baixado!=='boolean'){o.baixado=false;m=true}});
 if(m)saveNow()}

/* ===== Inicialização ===== */
async function boot(){
 const d=(await api.db.carregar())||{vazio:true};
 if(d.vazio){try{const old=JSON.parse(localStorage.getItem(KEY));if(old&&((old.metais||[]).length||(old.orc||[]).length||(old.clientes||[]).length)){S={...S,...old};saveNow()}}catch(x){}}   /* migra dados da versão antiga (localStorage) */
 else S={...S,metais:d.metais||[],clientes:d.clientes||[],orc:d.orc||[],servicos:d.servicos||[],retalhos:d.retalhos||[],compras:d.compras||[],usuarios:d.usuarios||[],funcionarios:d.funcionarios||[],pagamentosFuncionarios:d.pagamentosFuncionarios||[],seq:d.seq||1};
 migrar();
 const c=await api.config.get();if(c&&c.minimoPadrao!=null)MINPAD=+c.minimoPadrao;if(c)EMP=empDe(c);if(c&&MODOS.includes(c.tema)&&c.tema!==modoTema){modoTema=c.tema;guardaTema();aplicaTema()}
 if(api.nuvem){api.nuvem.onDados(recarregaDados);api.nuvem.onMudou(s=>{NV=s;const a=document.activeElement;if(a&&['nvc','nve','nvs','nvo'].includes(a.id))return;nvRender()})}
 api.onWhatsApp(s=>{WA={estado:'desconectado',qr:null,numero:null,erro:null,...s};waRender()});
 const w=await api.whatsapp.estado();if(w)WA={...WA,...w};
 api.onNavegar(async dest=>{if(dest==='orc-novo'){if(D.itens.length&&!await confirmar('Descartar o orçamento que está sendo montado?'))return;D=dflt();go('orc')}else go(dest)});
 await loginGate();                                                                       // 15. nada do painel aparece antes do login
 go('pnl')}
iniciaTema();boot();
