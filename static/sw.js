importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/060f36d8aaf58d4c290a.js",
    "revision": "de57b87977756036d9bf79fff1efd3c3"
  },
  {
    "url": "/_nuxt/09558c6ba033a8d8c14b.js",
    "revision": "1e1af843052cbb6122696d168f9268f7"
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
    "url": "/_nuxt/232fd8e700bf5ab127da.js",
    "revision": "c344a89009fd7092f5e5a33a66f49268"
  },
  {
    "url": "/_nuxt/352f44429f7be6c50dbc.js",
    "revision": "2606aca7e71278273ce1dcdfb6be8de2"
  },
  {
    "url": "/_nuxt/5745b2c152142dca3277.js",
    "revision": "f70b9c2f484bf0ef534733b1756f2cd4"
  },
  {
    "url": "/_nuxt/599b368b6ee242e57681.js",
    "revision": "85c9c1fee01c8712db0fc9a7584df20c"
  },
  {
    "url": "/_nuxt/6d4f1728f943d4e20db2.js",
    "revision": "a21b8d68c23323a222bbd64a2c7b7dff"
  },
  {
    "url": "/_nuxt/7f280aabaa9962bd8588.js",
    "revision": "90ee6952cc385bf3538e0c72e1b059ec"
  },
  {
    "url": "/_nuxt/a6379bee34a952af9c78.js",
    "revision": "77334d0baf134b8c7e6ab3e556a218ef"
  },
  {
    "url": "/_nuxt/a74c16ae9f6b1741fec7.js",
    "revision": "3af7094ffe9389b86df211cdfecff99e"
  },
  {
    "url": "/_nuxt/a7c543426593302f63b5.js",
    "revision": "1f08088dd5118909ec645d74b1239f2f"
  },
  {
    "url": "/_nuxt/c07bf316953cb4931e1f.js",
    "revision": "4627a15538a2e469c9ce2286d692b17d"
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
