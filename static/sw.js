importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00646067932fa4af61e3.js",
    "revision": "77e2108f766528d7e962c889cf0b6b84"
  },
  {
    "url": "/_nuxt/30d4403838bc975acef6.js",
    "revision": "0284426ceb852437054ff0e6eefb6ec4"
  },
  {
    "url": "/_nuxt/37c44f4da55e98340108.js",
    "revision": "26473b17da1e9178fcbd441c09f0f955"
  },
  {
    "url": "/_nuxt/4e0bfb414c34fa8d631c.js",
    "revision": "7fdb23640227ac8bb6fd9256d2a119fe"
  },
  {
    "url": "/_nuxt/6b4da4af2faa1d00d2d8.js",
    "revision": "f0fa2d9eb5082d7b56158b3738adec26"
  },
  {
    "url": "/_nuxt/7ece67790d646d7ea8e1.js",
    "revision": "69de338970dc775f04f577858fb15de6"
  },
  {
    "url": "/_nuxt/7f280aabaa9962bd8588.js",
    "revision": "90ee6952cc385bf3538e0c72e1b059ec"
  },
  {
    "url": "/_nuxt/8548d2eed6ccc6422b4b.js",
    "revision": "90383d71346e98dcd8da0d4a1cb9f785"
  },
  {
    "url": "/_nuxt/95f06fa06bd9ca44f2cb.js",
    "revision": "f45202ce31beda5a053dfc803fdbd907"
  },
  {
    "url": "/_nuxt/bd4d735fbe81a6189dea.js",
    "revision": "48397b82c25a4c19b30f59a85c221285"
  },
  {
    "url": "/_nuxt/de82ffda4b76ee90a567.js",
    "revision": "d75f1c745492ec4a55b4f9516d2b79e3"
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
