importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/5236cc9a83802708d0a9.js",
    "revision": "5a0d734ad444e99ce76dcbfd8bcbed6a"
  },
  {
    "url": "/_nuxt/5f5b69d1f920abe93304.js",
    "revision": "23a102c5e5db0f856dd982fd7f8c4d46"
  },
  {
    "url": "/_nuxt/6c371deed7869e509dcf.js",
    "revision": "f4af02b775c7a914f10159ee8c986ded"
  },
  {
    "url": "/_nuxt/7f280aabaa9962bd8588.js",
    "revision": "90ee6952cc385bf3538e0c72e1b059ec"
  },
  {
    "url": "/_nuxt/a11b1fd12cf1a29a8725.js",
    "revision": "7a362ae225efc2432f6834d0ffa3d9c9"
  },
  {
    "url": "/_nuxt/a76c873cd536e2d10840.js",
    "revision": "1f6fa2e829f93c54a5bc03ec720f8de8"
  },
  {
    "url": "/_nuxt/bbe98880224afd258cb1.js",
    "revision": "9a2d54ec78b26c9c14bc5c9ca6d96574"
  },
  {
    "url": "/_nuxt/c6a66bd989b2e3940bf9.js",
    "revision": "f720f942ee771f2d407c29885f2b4867"
  },
  {
    "url": "/_nuxt/de58a95b0373e28b6b2b.js",
    "revision": "d5f407d18038451749852be76c829ab6"
  },
  {
    "url": "/_nuxt/eeed69d6d90592d60b79.js",
    "revision": "d89d721bdc184303c789110602aa3b34"
  },
  {
    "url": "/_nuxt/f08062ea4f6107db0c47.js",
    "revision": "55a29146eb5be45e147b505ca3f4974c"
  },
  {
    "url": "/_nuxt/f877cd4eb0beb41b87d1.js",
    "revision": "4220de18d4318fe85210d07c0dc8d533"
  }
], {
  "cacheId": "wakeupwithmakeup",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
