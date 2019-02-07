importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/060f36d8aaf58d4c290a.js",
    "revision": "de57b87977756036d9bf79fff1efd3c3"
  },
  {
    "url": "/_nuxt/09c92319ba72430575c5.js",
    "revision": "b80b62408e64f9a4e3cdeca690b6e40e"
  },
  {
    "url": "/_nuxt/1a7c266f52f11e0c7b41.js",
    "revision": "e285fc7e14d66e67f020a1fd11fd7ba7"
  },
  {
    "url": "/_nuxt/27111bfe13889d336be2.js",
    "revision": "867ff349e447104b8d6069e83854fce5"
  },
  {
    "url": "/_nuxt/5745b2c152142dca3277.js",
    "revision": "f70b9c2f484bf0ef534733b1756f2cd4"
  },
  {
    "url": "/_nuxt/6434c44cf3a89d710311.js",
    "revision": "8ff95b046f7868274fe72bfc5fe2c530"
  },
  {
    "url": "/_nuxt/7e0d599edbb8582ffc50.js",
    "revision": "119566d66decf0b709c1c6823e233343"
  },
  {
    "url": "/_nuxt/7f280aabaa9962bd8588.js",
    "revision": "90ee6952cc385bf3538e0c72e1b059ec"
  },
  {
    "url": "/_nuxt/8b5c2ac55ea89b4d6e48.js",
    "revision": "35b99c9bfccf7544d2b5977197b5977c"
  },
  {
    "url": "/_nuxt/93d018482c66862440ae.js",
    "revision": "30d313ae28f55de1d8995b7403893de0"
  },
  {
    "url": "/_nuxt/a6379bee34a952af9c78.js",
    "revision": "77334d0baf134b8c7e6ab3e556a218ef"
  },
  {
    "url": "/_nuxt/a7c543426593302f63b5.js",
    "revision": "1f08088dd5118909ec645d74b1239f2f"
  },
  {
    "url": "/_nuxt/b5209e69db47afa91eeb.js",
    "revision": "423905fa47934064e0ba36290a2adc9b"
  },
  {
    "url": "/_nuxt/d02b82b80ac0ca5621f7.js",
    "revision": "2598f648ab2c1c70745d2d8ee54ee0a7"
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
