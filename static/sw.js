importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/016ec6137a36e3b3d841.js",
    "revision": "1b33567e9b5c8285811bff8de451d853"
  },
  {
    "url": "/_nuxt/116e86ae3404751c0ef9.js",
    "revision": "b89e85bda7d15887de79b6962048173d"
  },
  {
    "url": "/_nuxt/135e2682761703a6de9c.js",
    "revision": "80874e013d4384656130d6c10c9b88e9"
  },
  {
    "url": "/_nuxt/19eca7a2f040d7a25e19.js",
    "revision": "3e0441f8b9636ef1f7a6e801e42847f8"
  },
  {
    "url": "/_nuxt/2932466c2ffc0af24458.js",
    "revision": "fd6522c9f2ec761a05e152dba7bbe6b3"
  },
  {
    "url": "/_nuxt/74e79039d462968bf09c.js",
    "revision": "54226bfcc1de6086d510dff464b31a46"
  },
  {
    "url": "/_nuxt/7be6f8ef2c2a41139091.js",
    "revision": "e9edffeb49c3daa52d098a81c3ca6c87"
  },
  {
    "url": "/_nuxt/acc62dcca8e8f6336387.js",
    "revision": "a14ffd388ebe0c3f2c138d6bddd55555"
  },
  {
    "url": "/_nuxt/bb90d41db0257b36df9f.js",
    "revision": "59bb5a7a35fe1dc4f6f2555168095e94"
  },
  {
    "url": "/_nuxt/c12e05a30e6dbe4e8788.js",
    "revision": "adb4a1652cf7c0fb84ddd0036b5ea3e5"
  },
  {
    "url": "/_nuxt/d2e723791afb3048ae60.js",
    "revision": "19174367a7c9499372f876c91b6b1a56"
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
