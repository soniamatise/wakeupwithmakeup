importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1acb50767ed448251dd4.js",
    "revision": "ade0cea6fdb1afdce5f518980ef38f1b"
  },
  {
    "url": "/_nuxt/2c2f1dcffec758c5e372.js",
    "revision": "4a7ac2d8203e718acb50229e7556a0f0"
  },
  {
    "url": "/_nuxt/44548a212125690e2bc7.js",
    "revision": "d63b6e232603836325cb4200d64e75e8"
  },
  {
    "url": "/_nuxt/4d308c839b979e2bc92c.js",
    "revision": "b9ae2fd68f89ffa402b6bb962fb4277b"
  },
  {
    "url": "/_nuxt/65a8b9b9060dbf559142.js",
    "revision": "0a03271dbd7132388f59cc4cd79abead"
  },
  {
    "url": "/_nuxt/7f280aabaa9962bd8588.js",
    "revision": "90ee6952cc385bf3538e0c72e1b059ec"
  },
  {
    "url": "/_nuxt/8c6397095ccc6d3ce99b.js",
    "revision": "544d5da6c462104eb1f0fe9f87950a32"
  },
  {
    "url": "/_nuxt/d209aa08df0c249eda4c.js",
    "revision": "4d1a24824cbcd8fa38edcf24b51f9638"
  },
  {
    "url": "/_nuxt/e2abced3dceb846d9613.js",
    "revision": "85fa81d6ae5a74b8918d699f26b8a4db"
  },
  {
    "url": "/_nuxt/e4c21d1653a9d5d916b9.js",
    "revision": "9b0af6ba9acf9a08f1b1787ab87b71bf"
  },
  {
    "url": "/_nuxt/f877cd4eb0beb41b87d1.js",
    "revision": "4220de18d4318fe85210d07c0dc8d533"
  },
  {
    "url": "/_nuxt/ffbe1f24ad85a868ca05.js",
    "revision": "d77cc4b2ffcc910f7bb8e320f204ec43"
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
