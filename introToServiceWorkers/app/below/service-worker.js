//IIFE is used to avoid namespace pollution

(function() {
    'use strict';

    self.addEventListener('install', function(event) {
        console.log('Service worker installing...');
        // TODO 3.4: Skip waiting

        //Good place to cache static assets
      });
      
      self.addEventListener('activate', function(event) {
        console.log('Service worker activating...');
        //Here you update cache
      });

      self.addEventListener('fetch', function(event) {
        console.log('Fetching:', event.request.url);
      });

      self.skipWaiting();
  

  })();