const CACHE_NAME = 'medlex-v3.1';

// الملفات الأساسية — تُحمَّل فور التثبيت
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './db/index.json',
  './db/sentences.json',
];

// ملفات الكلمات — تُحمَّل في الخلفية بعد التثبيت
const WORD_FILES = [
  './db/db_ac.json',
  './db/db_dh.json',
  './db/db_ip.json',
  './db/db_qs.json',
  './db/db_tz.json',
  './db/images.json',
];

// ── Install ────────────────────────────────────────────────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      // استخدم Promise.allSettled بدل addAll لتجنب فشل كامل بسبب ملف واحد
      Promise.allSettled(
        CORE_ASSETS.map(url =>
          fetch(url).then(r => { if(r.ok) cache.put(url, r); }).catch(() => {})
        )
      )
    ).then(() => self.skipWaiting())
  );
});

// ── Activate ───────────────────────────────────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
      .then(() => {
        // cache ملفات الكلمات في الخلفية
        return caches.open(CACHE_NAME).then(cache =>
          Promise.allSettled(
            WORD_FILES.map(url =>
              fetch(url).then(r => { if(r.ok) cache.put(url, r); }).catch(() => {})
            )
          )
        );
      })
  );
});

// ── Fetch: Cache First + Background Refresh ────────────────────
self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if(!url.protocol.startsWith('http')) return;

  e.respondWith(
    caches.open(CACHE_NAME).then(async cache => {
      const cached = await cache.match(e.request);
      if(cached) {
        // أرجع الكاش فوراً وحدّث في الخلفية
        fetch(e.request).then(r => { if(r?.ok) cache.put(e.request, r.clone()); }).catch(() => {});
        return cached;
      }
      try {
        const r = await fetch(e.request);
        if(r?.ok) cache.put(e.request, r.clone());
        return r;
      } catch {
        return new Response('Offline — المحتوى غير متاح بدون اتصال', { status: 503 });
      }
    })
  );
});
