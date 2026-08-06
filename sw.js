// Service worker toi thieu, chi de thoa dieu kien "installable" cua Chrome.
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());
self.addEventListener('fetch', (e) => e.respondWith(fetch(e.request)));
