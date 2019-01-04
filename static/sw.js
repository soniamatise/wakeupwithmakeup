importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1acb50767ed448251dd4.js",
    "revision": "ade0cea6fdb1afdce5f518980ef38f1b"
  },
  {
    "url": "/_nuxt/39cbd8443131aa717650.js",
    "revision": "d9d9523d788b1badae7369521d915301"
  },
  {
    "url": "/_nuxt/4437000e6aacf534d664.js",
    "revision": "d053b4d927cb9681982cfa846518714b"
  },
  {
    "url": "/_nuxt/655592f2674fc381623d.js",
    "revision": "bebe3dbbecd8af56260044e57189d40c"
  },
  {
    "url": "/_nuxt/6d5bd4475a16b0b84705.js",
    "revision": "2b1a42111c35a93ae2f2f212e5a80838"
  },
  {
    "url": "/_nuxt/82f149ec8d7b50406282.js",
    "revision": "27f6997c0018af4b9523a53e556db9c4"
  },
  {
    "url": "/_nuxt/8a722cffb4cc26fc8456.js",
    "revision": "619f6d435676f540a9e5fbd770c718c5"
  },
  {
    "url": "/_nuxt/8e171d7879c377da119f.js",
    "revision": "da7d33d3bcb2640ebc487e90d8b17490"
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
    "url": "/_nuxt/e8f3b2ef7ca08ea3c4c6.js",
    "revision": "df4f4c08df551e646fc992e7ae8decce"
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
