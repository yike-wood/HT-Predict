const CACHE_NAME = 'offline-cache-v1'; 
const URLS_TO_CACHE = [
    './assets/dPic/Chen_Ping_DWI.png',
    './assets/dPic/Chen_Ping_Tmax.png',
    './assets/dPic/Lv_Yi_DWI.png',
    './assets/dPic/Lv_Yi_Tmax.png',
    './assets/dPic/Guo_Wei_DWI.png',
    './assets/dPic/Guo_Wei_Tmax.png',    'https://cdnjs.cloudflare.com/ajax/libs/plotly.js/2.26.0/plotly.min.js', 
]; 
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))); self.skipWaiting(); }); 
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(key => { if (key !== CACHE_NAME) return caches.delete(key); })))); self.clients.claim(); }); self.addEventListener('fetch', event => { if (event.request.method !== 'GET') return; 
event.respondWith(caches.match(event.request).then(cached => { if (cached) return cached; return fetch(event.request).then(networkResp => { return caches.open(CACHE_NAME).then(cache => { cache.put(event.request, networkResp.clone()); return networkResp; }); }).catch(() => { return new Response('Offline and not cached', { status: 503, statusText: 'Service Unavailable' }); }); })); });