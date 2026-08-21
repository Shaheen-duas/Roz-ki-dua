const CACHE_NAME = "roz-ki-dua-v13";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./app.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // sirf apni site ki files ke liye cache use karo, bahar ki cheezein
  // (jaise audio API) hamesha seedha internet se hi jaani chahiye
  if (event.request.url.indexOf(self.location.origin) !== 0) {
    return;
  }
  // network-first: pehle latest file internet se laane ki koshish karo,
  // sirf tabhi purani (cached) file dikhao jab internet na ho
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
