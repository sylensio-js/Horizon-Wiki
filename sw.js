const CACHE_NAME = 'forbidden-west-wiki-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/Variables.css',
  '/css/global.css',
  '/css/header.css',
  '/css/home.css',
  '/css/articles.css',
  '/css/light-theme.css',
  '/script.js',
  '/images/icon.ico'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => caches.match('/index.html'))
  );
});