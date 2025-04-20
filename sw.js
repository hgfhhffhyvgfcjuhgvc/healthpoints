const CACHE = 'dpt-cache-v1';
const CORE = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/tap-soft.mp3',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
