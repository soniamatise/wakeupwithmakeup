importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1acb50767ed448251dd4.js",
    "revision": "ade0cea6fdb1afdce5f518980ef38f1b"
  },
  {
    "url": "/_nuxt/1b26976b73b60dd6bcd3.js",
    "revision": "7977e5cb75518e72377c229b13283aca"
  },
  {
    "url": "/_nuxt/2e5850131d4f471276cb.js",
    "revision": "bdf871b381c957935f046f77127a8180"
  },
  {
    "url": "/_nuxt/4437000e6aacf534d664.js",
    "revision": "d053b4d927cb9681982cfa846518714b"
  },
  {
    "url": "/_nuxt/5affe1dccdfbacef395b.js",
    "revision": "9cfda59116e402efeea06f45d9896247"
  },
  {
    "url": "/_nuxt/6446ac8dc125c711a64a.js",
    "revision": "1a6e27f9e406392c634037b58cac615c"
  },
  {
    "url": "/_nuxt/655592f2674fc381623d.js",
    "revision": "bebe3dbbecd8af56260044e57189d40c"
  },
  {
    "url": "/_nuxt/7f280aabaa9962bd8588.js",
    "revision": "90ee6952cc385bf3538e0c72e1b059ec"
  },
  {
    "url": "/_nuxt/8a722cffb4cc26fc8456.js",
    "revision": "619f6d435676f540a9e5fbd770c718c5"
  },
  {
    "url": "/_nuxt/a58a209da952b4400f34.js",
    "revision": "0cd10fe185e460f58eef0e22f473e256"
  },
  {
    "url": "/_nuxt/c0a73f7414d35e8e79f4.js",
    "revision": "8ad1bf7e1dd622f20e99f78a780c24cd"
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
