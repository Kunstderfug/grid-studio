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
    "revision": "1227eee2496adc87c78dd7a0a85085ee"
  },
  {
    "url": "404/index.html",
    "revision": "1227eee2496adc87c78dd7a0a85085ee"
  },
  {
    "url": "assets/css/0.styles.e2c5ed95.css",
    "revision": "cddd80580857ed2b1ecf9993fa595a2a"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "2b1cce09faaf0e59d99579f10e636631"
  },
  {
    "url": "assets/data/gallery/index.json",
    "revision": "2b1cce09faaf0e59d99579f10e636631"
  },
  {
    "url": "assets/data/giveaway/index.json",
    "revision": "8b9849b8668263a609772e95ade013ae"
  },
  {
    "url": "assets/data/index.json",
    "revision": "6ad7aa763c2ebf1f66d6b36c9f143666"
  },
  {
    "url": "assets/data/piano-studio/index.json",
    "revision": "d2706b65be6a72bbf60ee4fd1a4dd277"
  },
  {
    "url": "assets/data/recording/index.json",
    "revision": "2ef41d9485d80a6f494df43129a5edce"
  },
  {
    "url": "assets/data/samples/index.json",
    "revision": "2b1cce09faaf0e59d99579f10e636631"
  },
  {
    "url": "assets/data/tag/audition/index.json",
    "revision": "7423b293bcf38791fb8aade96cd54266"
  },
  {
    "url": "assets/data/tag/consultation/index.json",
    "revision": "7715c4f8cbdd2c15ec28001acbdfcaad"
  },
  {
    "url": "assets/data/tag/giveaway/index.json",
    "revision": "0149bbebb1677c245216fa028df08047"
  },
  {
    "url": "assets/data/tag/lesson/index.json",
    "revision": "fb9b671bf0e4b3a8d182b6337454ebdd"
  },
  {
    "url": "assets/data/tag/recording/index.json",
    "revision": "6cac2547fa53808e83f91190c5a8a242"
  },
  {
    "url": "assets/data/tag/studio/index.json",
    "revision": "b0aeb95b99d604fb2c7819520a487d1b"
  },
  {
    "url": "assets/data/tag/youtube/index.json",
    "revision": "0229b966c49b0049ddb06e54c3435a8d"
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
    "url": "assets/js/app.63b673b5.js",
    "revision": "84fd1847c1fb8514acdc0803e3976965"
  },
  {
    "url": "assets/js/page--node-modules-gridsome-app-pages-404-vue.3b8b20de.js",
    "revision": "615b743d10eeb64662684e7aec935e97"
  },
  {
    "url": "assets/js/page--src-pages-gallery-vue.a6cfe0b0.js",
    "revision": "56c5e7ae26290dcea7869e28f605e72f"
  },
  {
    "url": "assets/js/page--src-pages-index-vue.c2d3fd7c.js",
    "revision": "7e9bd63262b964c35c73762c1392ef9a"
  },
  {
    "url": "assets/js/page--src-pages-samples-vue.5f372125.js",
    "revision": "006a601a62ac7b42324e747c18aaabe8"
  },
  {
    "url": "assets/js/page--src-templates-post-vue.ffc25508.js",
    "revision": "aacbc57c35199ffe148e847b0e3f573c"
  },
  {
    "url": "assets/js/page--src-templates-tag-vue.94df3047.js",
    "revision": "cfbac8eba37c3b3be0d0e7b23a021b53"
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
    "revision": "63e7f937b89226f5f4028bed4b1f7ee8"
  },
  {
    "url": "giveaway/index.html",
    "revision": "0d542d6dd23fd3b5c51784bdf0c5131f"
  },
  {
    "url": "index.html",
    "revision": "effead8055a34fc4f78192b55c7cada4"
  },
  {
    "url": "manifest.json",
    "revision": "53c3f1747480882b56d9eb2a03f72bbd"
  },
  {
    "url": "piano-studio/index.html",
    "revision": "d04209894189e78970728094239a4ddb"
  },
  {
    "url": "recording/index.html",
    "revision": "5a458ac83fc93377781567133689780c"
  },
  {
    "url": "samples/index.html",
    "revision": "c32e780a76689868b2567bfef3446cf0"
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
    "url": "studio/minion.jpg",
    "revision": "7efbb15a0befc5a21be7435b811af226"
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
    "url": "studio/pilot.jpg",
    "revision": "dafa0ae4cd39f8176310a9ec417f84eb"
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
    "revision": "c350fb57148cb5ada610fb40004c844b"
  },
  {
    "url": "tag/consultation/index.html",
    "revision": "dfac6826725c98e56bc79bd985525b0b"
  },
  {
    "url": "tag/giveaway/index.html",
    "revision": "3dede6f9c2eb1635863183298cc7794e"
  },
  {
    "url": "tag/lesson/index.html",
    "revision": "7d84b26bdec8f8435accdfdb5f7c5f09"
  },
  {
    "url": "tag/recording/index.html",
    "revision": "983f7fbf0ecb2b8e400f6ce5c83c6c31"
  },
  {
    "url": "tag/studio/index.html",
    "revision": "449c9df7c57ffe13189255d12fa22d51"
  },
  {
    "url": "tag/youtube/index.html",
    "revision": "7d0988c2fe2a808f3941c12edd39f61b"
  },
  {
    "url": "404",
    "revision": "58562ccce683f1fa20f0b08d84a700bb"
  },
  {
    "url": "tag/giveaway",
    "revision": "99c780b68c8f39be39e435b536704b38"
  },
  {
    "url": "tag/recording",
    "revision": "8e0c87119843f4fa46e06137262da462"
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
    "url": "tag/studio",
    "revision": "20ae2896c394c0ba0e3702516c5dd50c"
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
    "url": "samples",
    "revision": "cb38127bc5e2cfc3c234e71d9edf2b50"
  },
  {
    "url": "gallery",
    "revision": "41ddb6053505daa7606d34000e592c99"
  },
  {
    "url": "giveaway",
    "revision": "fa4d655171b8fc1bb802e78b43aedbf9"
  },
  {
    "url": "piano-studio",
    "revision": "a1d61d3d5776019365f7baf2df296148"
  },
  {
    "url": "recording",
    "revision": "7f23c0e8fdfd37e08713c4cc74ccd3a3"
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