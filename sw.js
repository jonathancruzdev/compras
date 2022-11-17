const CACHE_NAME = 'cache-1';
self.addEventListener('install', function(e){
    console.log(e);
    const cache = caches.open(CACHE_NAME).then( cache => {
        return cache.addAll([
            'app.js',
            'index.html',
            'compras.png',
            'style.css'
        ])
    })

    e.waitUntil( cache );
})

self.addEventListener( 'fetch', e => {
    const respuesCache = caches.match(e.request).then( res => {
        if( res) {
            res;
        }
        else {
            return fetch( e.request)
        }
    })

    e.respondWith(respuesCache)
})