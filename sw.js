const CACHE_NAME = 'jadual-v1';
const ASSETS = ['index.html', 'manifest.json', 'icon.png'];

// Menyimpan fail asas semasa pemasangan
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Mengambil fail dari memori cache jika offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
