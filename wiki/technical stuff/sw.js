const CACHE_NAME = 'forbidden-west-wiki-v2';
const RUNTIME_CACHE = 'runtime-cache-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/Variables.css',
  '/css/global.css',
  '/css/header.css',
  '/css/home.css',
  '/css/articles.css',
  '/css/light-theme.css',
  '/technical%20stuff/script.js',
  '/technical%20stuff/manifest.json',
  '/images/icon-192.png',
  '/images/icon-512.png',
];

const CACHE_STRATEGIES = {
  static: ['/css/', '/images/', '/technical%20stuff/script.js'],
  networkFirst: ['/api/', '.json'],
  cacheFirst: ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg']
};

self.addEventListener('install', event => {
  console.log('SW: Installing');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('SW: Caching assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  console.log('SW: Activating');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            console.log('SW: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  event.respondWith(handleRequest(request, url));
});

async function handleRequest(request, url) {
  // Static assets - cache first
  if (CACHE_STRATEGIES.static.some(path => url.pathname.includes(path))) {
    return cacheFirst(request);
  }

  // Images - cache first with runtime caching
  if (CACHE_STRATEGIES.cacheFirst.some(ext => url.pathname.endsWith(ext))) {
    return cacheFirstWithRuntime(request);
  }

  // API/JSON - network first
  if (CACHE_STRATEGIES.networkFirst.some(path => url.pathname.includes(path))) {
    return networkFirst(request);
  }

  // Default - stale while revalidate
  return staleWhileRevalidate(request);
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) console.log('SW: Cache hit:', request.url);
  return cached || fetch(request).catch(() => caches.match('/index.html'));
}

async function cacheFirstWithRuntime(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('', { status: 404 });
  }
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return caches.match(request) || caches.match('/index.html');
  }
}

async function staleWhileRevalidate(request) {
  const cached = await caches.match(request);
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) {
      const cache = caches.open(RUNTIME_CACHE);
      cache.then(c => c.put(request, response.clone()));
    }
    return response;
  }).catch(() => cached || caches.match('/index.html'));

  return cached || fetchPromise;
}