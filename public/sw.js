const version = "0.0.1";
const cacheName = `mBurguers-${version}`;
self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll([
            '/stylesheets/style.css',
            '/images/launcher-icon-1x.png',
            '/images/launcher-icon-2x.png',
            '/images/launcher-icon-4x.png',
            '/images/launcher-icon-4x.png'
        ]);
      })
    );
});
self.addEventListener('fetch', function(event) {

    console.log(event.request.url);
    
    event.respondWith(
        caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
        })
    );
});