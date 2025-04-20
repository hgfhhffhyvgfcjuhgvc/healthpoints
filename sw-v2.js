const CACHE = 'dpt-cache-v1';
const CORE = [
  '/healthpoints/',
  '/healthpoints/index.html',
  '/healthpoints/manifest.webmanifest',
  '/healthpoints/icons/icon-192.png',
  '/healthpoints/icons/icon-512.png',
  '/healthpoints/tap-soft.mp3'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
