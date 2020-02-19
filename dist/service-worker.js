/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4b6c8870b29cafcd7a1800e4a415adc5"
  },
  {
    "url": "404/index.html",
    "revision": "4b6c8870b29cafcd7a1800e4a415adc5"
  },
  {
    "url": "assets/css/0.styles.706e48ec.css",
    "revision": "83b4716d15dca509faf0e9100fbf75eb"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "a8ba97b52174a62d424bee7bf0b8ea7a"
  },
  {
    "url": "assets/data/gallery/index.json",
    "revision": "a8ba97b52174a62d424bee7bf0b8ea7a"
  },
  {
    "url": "assets/data/giveaway/index.json",
    "revision": "363fdd990a1d27bfa10bcf66ace53648"
  },
  {
    "url": "assets/data/index.json",
    "revision": "0f177cb19727c99b5e7fa4bbcfb2586c"
  },
  {
    "url": "assets/data/piano-studio/index.json",
    "revision": "5153cd824fb1d9cdd716d112e0eebc43"
  },
  {
    "url": "assets/data/recording/index.json",
    "revision": "49b388323d1cd1998b207aa572adc3e6"
  },
  {
    "url": "assets/data/samples/index.json",
    "revision": "a8ba97b52174a62d424bee7bf0b8ea7a"
  },
  {
    "url": "assets/data/tag/audition/index.json",
    "revision": "1945a9910db680d8f5945d97e87b7003"
  },
  {
    "url": "assets/data/tag/consultation/index.json",
    "revision": "cbb62508c3a5b2abbf2810e6c00211da"
  },
  {
    "url": "assets/data/tag/giveaway/index.json",
    "revision": "97fefdf50883df93a1de4ec97a86550d"
  },
  {
    "url": "assets/data/tag/lesson/index.json",
    "revision": "92d0ef519c8017afafd4936db2c7c3d9"
  },
  {
    "url": "assets/data/tag/recording/index.json",
    "revision": "b840009dff712d65141765b5c2ab1ded"
  },
  {
    "url": "assets/data/tag/studio/index.json",
    "revision": "2ef7d91b1c92a021ca97c06706f0b048"
  },
  {
    "url": "assets/data/tag/youtube/index.json",
    "revision": "b7228a4ec34a1ec96208139df0db0a3d"
  },
  {
    "url": "assets/img/coffee.00e58597.svg",
    "revision": "00e58597abdbb96302311e203c66a6cf"
  },
  {
    "url": "assets/img/milk.a8d127aa.svg",
    "revision": "a8d127aae36b4ca1f3a800cdad093ce8"
  },
  {
    "url": "assets/js/app.09f62a64.js",
    "revision": "205359f06de9a975fb7076b0ab95dbaa"
  },
  {
    "url": "assets/js/page--node-modules-gridsome-app-pages-404-vue.146d259b.js",
    "revision": "9947203c5aaf49759ea4ad0fa4e16ad6"
  },
  {
    "url": "assets/js/page--src-pages-gallery-vue.ddf5eb51.js",
    "revision": "4a2915297e415b098c3a9cc83113fda4"
  },
  {
    "url": "assets/js/page--src-pages-index-vue.2cc19e5f.js",
    "revision": "403a209cefedcd4bee5a6eb2ae8b4616"
  },
  {
    "url": "assets/js/page--src-pages-samples-vue.45db30c6.js",
    "revision": "33a1b0a47d312d1e28bdf58320628370"
  },
  {
    "url": "assets/js/page--src-templates-post-vue.20202275.js",
    "revision": "adfb6b541c84a6744c89442e8ac2e9ea"
  },
  {
    "url": "assets/js/page--src-templates-tag-vue.4d4b1dad.js",
    "revision": "43a253270907c32d15c5354700896e58"
  },
  {
    "url": "assets/static/favicon.1539b60.b56951d4421a04173dc0ed43973ffd77.png",
    "revision": "6aa8dfac20f7f80f8d1752d92c485b0b"
  },
  {
    "url": "assets/static/favicon.62d22cb.b56951d4421a04173dc0ed43973ffd77.png",
    "revision": "852d0d756480362022b92cf6b8c18491"
  },
  {
    "url": "assets/static/favicon.7b22250.b56951d4421a04173dc0ed43973ffd77.png",
    "revision": "a4a2ac33141e31699598b276d2ecf0ce"
  },
  {
    "url": "assets/static/favicon.ac8d93a.b56951d4421a04173dc0ed43973ffd77.png",
    "revision": "9f05cec99bcd6172baccbba06e84f330"
  },
  {
    "url": "assets/static/favicon.b9532cc.b56951d4421a04173dc0ed43973ffd77.png",
    "revision": "b109d8e1fac9968e58432955effdba42"
  },
  {
    "url": "assets/static/favicon.ce0531f.b56951d4421a04173dc0ed43973ffd77.png",
    "revision": "9724d941a6b744248aaee7892c75e572"
  },
  {
    "url": "assets/static/favicon.dc0cdc5.b56951d4421a04173dc0ed43973ffd77.png",
    "revision": "2b4f657e5f6be290e1e3ec79d919de35"
  },
  {
    "url": "assets/static/favicon.f22e9f3.b56951d4421a04173dc0ed43973ffd77.png",
    "revision": "ad2c4f0ceb8fad49fcbbb6323174884c"
  },
  {
    "url": "assets/static/favicon.png",
    "revision": "b56951d4421a04173dc0ed43973ffd77"
  },
  {
    "url": "assets/static/photo-author.e6b6009.7fd5f513d86358f878379e8bc6e4a759.jpg",
    "revision": "6a8f3fb40c9fa529da25458f8dada56e"
  },
  {
    "url": "assets/static/piano-studio.07cc2b7.ebc13df3a88989c61ea57a414115f8f5.jpg",
    "revision": "c343ebe5c99524422d461440e2dff86e"
  },
  {
    "url": "assets/static/piano-studio.81b85c1.ebc13df3a88989c61ea57a414115f8f5.jpg",
    "revision": "0e4f66410e3d3a4803f2d052517873a9"
  },
  {
    "url": "assets/static/piano-studio.a67b0b2.ebc13df3a88989c61ea57a414115f8f5.jpg",
    "revision": "578860a006b354f6e1cfdce8f757ac3b"
  },
  {
    "url": "assets/static/recording.07cc2b7.98e6069631293346ddd8fd041a60cf2e.jpg",
    "revision": "679e28a84aecfab51c40a3141377fa11"
  },
  {
    "url": "assets/static/recording.81b85c1.98e6069631293346ddd8fd041a60cf2e.jpg",
    "revision": "892f4df0df0fd7e5ea822608fc4bb825"
  },
  {
    "url": "assets/static/recording.a67b0b2.98e6069631293346ddd8fd041a60cf2e.jpg",
    "revision": "75953419a88ce0afe580dad21863a8d4"
  },
  {
    "url": "assets/static/studio-steinway.07cc2b7.17ad1d07b7764499a88dc2db4fd4f46c.jpg",
    "revision": "de2b70b94a3d31418f9734bc06bb7234"
  },
  {
    "url": "assets/static/studio-steinway.81b85c1.17ad1d07b7764499a88dc2db4fd4f46c.jpg",
    "revision": "9e646542f24ef7ebe351f349f174ec2f"
  },
  {
    "url": "assets/static/studio-steinway.a67b0b2.17ad1d07b7764499a88dc2db4fd4f46c.jpg",
    "revision": "927fd4e7879a4ad8e4163ac1a2ab2f84"
  },
  {
    "url": "gallery/index.html",
    "revision": "7e0271e1b792cc076b84199956897a68"
  },
  {
    "url": "giveaway/index.html",
    "revision": "ccfca20292f24583aaa15530a47b7a50"
  },
  {
    "url": "index.html",
    "revision": "b9bd4fd95819553b2e5f006ec3604001"
  },
  {
    "url": "manifest.json",
    "revision": "53c3f1747480882b56d9eb2a03f72bbd"
  },
  {
    "url": "piano-studio/index.html",
    "revision": "f320082f66195840883d4b8a3c80cce0"
  },
  {
    "url": "recording/index.html",
    "revision": "b6ddbbe6a5ced458043c87692fbb80a7"
  },
  {
    "url": "samples/index.html",
    "revision": "007a45eef0185adc54a2d14d5f01d2a4"
  },
  {
    "url": "studio/bmpcc4k.jpg",
    "revision": "53a82dacc0ba5082d673b5785165d96d"
  },
  {
    "url": "studio/cards.jpg",
    "revision": "4ec655113715bafa85f92b93cec6eeed"
  },
  {
    "url": "studio/mics-1.jpg",
    "revision": "61c7ee4fc13a705e6835bc99ab229586"
  },
  {
    "url": "studio/mics-2.jpg",
    "revision": "524ada9611d7e9aba1ed0476f7dc757e"
  },
  {
    "url": "studio/piano2.jpg",
    "revision": "c215a4d57f02cc24565b51c8830b6584"
  },
  {
    "url": "studio/piano3.jpg",
    "revision": "d192c48563deda9925b0530932d91a0a"
  },
  {
    "url": "studio/room.jpg",
    "revision": "3f3b4b55083be1ed458c02e51297cfd4"
  },
  {
    "url": "studio/stuff.jpg",
    "revision": "32692eaf6a3298f1a41574486fd012cb"
  },
  {
    "url": "tag/audition/index.html",
    "revision": "b57d3318ccb832ff81fa3bd89f2682cb"
  },
  {
    "url": "tag/consultation/index.html",
    "revision": "c71330e54271cb3aa2d63d8bb24c30bc"
  },
  {
    "url": "tag/giveaway/index.html",
    "revision": "4744d3f0f12d2ba33b2128e3efd91c69"
  },
  {
    "url": "tag/lesson/index.html",
    "revision": "bba7bcd95f331442eac95906294f096a"
  },
  {
    "url": "tag/recording/index.html",
    "revision": "b37212f77a4d0d83b507b4f22fa290cc"
  },
  {
    "url": "tag/studio/index.html",
    "revision": "d95950334fa16d41150a8bd1a8a52b52"
  },
  {
    "url": "tag/youtube/index.html",
    "revision": "a7edf843b60c0fecad0bdd10b505b7ba"
  },
  {
    "url": "404",
    "revision": "58562ccce683f1fa20f0b08d84a700bb"
  },
  {
    "url": "tag/studio",
    "revision": "20ae2896c394c0ba0e3702516c5dd50c"
  },
  {
    "url": "tag/recording",
    "revision": "8e0c87119843f4fa46e06137262da462"
  },
  {
    "url": "tag/audition",
    "revision": "9431c2f3b9cc9768e00e1a6b5b2ccd3c"
  },
  {
    "url": "tag/youtube",
    "revision": "d66fca591974d12873a72632e96d7512"
  },
  {
    "url": "tag/lesson",
    "revision": "826ed0b1cfc9df909da7769c85f2d03d"
  },
  {
    "url": "tag/consultation",
    "revision": "324044fc78f58a82f2ea90b4c0a368b9"
  },
  {
    "url": "tag/giveaway",
    "revision": "99c780b68c8f39be39e435b536704b38"
  },
  {
    "url": "samples",
    "revision": "cb38127bc5e2cfc3c234e71d9edf2b50"
  },
  {
    "url": "gallery",
    "revision": "41ddb6053505daa7606d34000e592c99"
  },
  {
    "url": "recording",
    "revision": "7f23c0e8fdfd37e08713c4cc74ccd3a3"
  },
  {
    "url": "piano-studio",
    "revision": "a1d61d3d5776019365f7baf2df296148"
  },
  {
    "url": "giveaway",
    "revision": "fa4d655171b8fc1bb802e78b43aedbf9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})