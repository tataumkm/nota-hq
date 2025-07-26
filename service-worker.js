self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("nota-hq-cache").then(cache => {
      return cache.addAll([
        "/nota-hq/",
        "/nota-hq/?homescreen=1"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
