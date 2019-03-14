//Install and activate triggered by browser
/*const CACHE_STATIC_NAME = 'static-v4';
self.addEventListener('install', function(e){ //Once if it changes

    console.log("[Service Worker]Installation event happeneded");
    console.log(e);
    e.waitUntil(caches.open(CACHE_STATIC_NAME).then((cache)=>{ //Change cache version to static-v* on every change.
        console.log('[ServiceWorker] Precaching app shell');
        console.log(cache);
        cache.addAll(['/', '/src/js/feed.js'])
        //cache.add('/src/js/feed.js');
    }));   //Starting the cache event
})

self.addEventListener('activate', function(e){
    console.log("[Service Worker]Activating event happened");
    console.log(e);
    /*e.waitUntil(  //cache cleanup
        caches.keys('static').then((keyList)=>{
            return Promise.all(keyList.map(key=>{
                if(key !== CACHE_STATIC_NAME && key !== 'dynamic'){
                    console.log('[Service worker deleted the cache]', key);
                   return  caches.delete(key);
                }
            }))
        })
    )*/
/*    return self.clients.claim(); //make service worker load correctly
})

self.addEventListener('fetch', function(e){ //Request response goes through the service worker
    console.log("[Service Worker]Fetching happened");
    console.log(e);
    //e.respondWith(fetch(event.request));//Override the response fetch(event.request)

    console.log("Fetch request is");
    console.log(e.request);
    caches.match(e.request).then(function(response){
        if(response){
            console.log("response from cache");
            console.log(e.request);
         return response;
        }else{
            console.log("response from server");
            console.log(e.request);
        return fetch(e.request).then(res=>{
            return caches.open('dynamic').then(cacheItem=>{
                cache.put(e.request.url, res.clone());
                return res;
            })
        }).catch(()=>{
           return caches.open(CACHE_STATIC_NAME).then((cache)=>{
               return cache.match('/offline.html');
           })
        })
        }
    })
})*/