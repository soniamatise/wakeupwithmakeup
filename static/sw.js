importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/005d6347194e8c2d9177.js",
    "revision": "63159c033369344e853544b988c88bc5"
  },
  {
    "url": "/_nuxt/01842ab5828a4beb95d7.js",
    "revision": "1083dc4047525f13ee9b60d3feb2cb90"
  },
  {
    "url": "/_nuxt/13ec329a52a0778e87e2.js",
    "revision": "0742e94319e1d04a8317909b36e8ae4a"
  },
  {
    "url": "/_nuxt/56cf43bb9c2e38b53dfe.js",
    "revision": "a65cd02f6783ac51e723a8f3a363d74e"
  },
  {
    "url": "/_nuxt/69a9ad8a1d4d7128b0b3.js",
    "revision": "c3d501a6445fbae6443e0eb125bacda0"
  },
  {
    "url": "/_nuxt/7f280aabaa9962bd8588.js",
    "revision": "90ee6952cc385bf3538e0c72e1b059ec"
  },
  {
    "url": "/_nuxt/86e55d708a60a84d2534.js",
    "revision": "ff497df9ebfc0adc6840100793e5a0ab"
  },
  {
    "url": "/_nuxt/a76c873cd536e2d10840.js",
    "revision": "1f6fa2e829f93c54a5bc03ec720f8de8"
  },
  {
    "url": "/_nuxt/b23bceaddeace1969ad1.js",
    "revision": "e8bb8a49fafb50db62e28b4717009714"
  },
  {
    "url": "/_nuxt/ee150eb52f1d058e6883.js",
    "revision": "4ca6b193d7b20fc6ee717563bea48a61"
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
