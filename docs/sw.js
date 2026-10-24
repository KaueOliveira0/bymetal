/* Bymetal Web — service worker: abre sem internet e, com internet, sempre pega a versão mais nova. */
const VERSAO = '2.6.0';
const CACHE = 'bymetal-web-' + VERSAO;
const BASE = ['./', 'index.html', 'renderer.js', 'web-api.js', 'nuvem-web.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', ev => { ev.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', ev => {
  ev.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('bymetal-web-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', ev => {
  const rq = ev.request, u = new URL(rq.url);
  if (rq.method !== 'GET' || u.origin !== location.origin) return;       // Firebase e outros: direto na rede
  ev.respondWith(fetch(rq).then(rs => {
    if (rs && rs.ok) { const cp = rs.clone(); caches.open(CACHE).then(c => c.put(rq, cp)); }
    return rs;
  }).catch(() => caches.match(rq, { ignoreSearch: true }).then(m => m || caches.match('index.html'))));
});
