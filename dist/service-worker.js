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
    "revision": "200db4aa2b923318c77455d85add0d59"
  },
  {
    "url": "404/index.html",
    "revision": "200db4aa2b923318c77455d85add0d59"
  },
  {
    "url": "assets/css/0.styles.68806779.css",
    "revision": "55844a09eb7813cecd97882b6e0ec3a8"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "6eaba5f64136bb2dd9220f23ae4bf2f3"
  },
  {
    "url": "assets/data/gallery/index.json",
    "revision": "6eaba5f64136bb2dd9220f23ae4bf2f3"
  },
  {
    "url": "assets/data/giveaway/index.json",
    "revision": "44818e7eb85b18a67a79d68a89b4d920"
  },
  {
    "url": "assets/data/index.json",
    "revision": "240de693fe47820b68ce15bf4a9bdaec"
  },
  {
    "url": "assets/data/piano-studio/index.json",
    "revision": "013832efcf3d0fce017e60e086410fe4"
  },
  {
    "url": "assets/data/recording/index.json",
    "revision": "dc025c161de3f7bd84299a0febb1c60c"
  },
  {
    "url": "assets/data/samples/index.json",
    "revision": "6eaba5f64136bb2dd9220f23ae4bf2f3"
  },
  {
    "url": "assets/data/tag/audition/index.json",
    "revision": "0584aad155383149ca01758532287202"
  },
  {
    "url": "assets/data/tag/consultation/index.json",
    "revision": "89f4bdb838e750fce0583e7f5a07e10d"
  },
  {
    "url": "assets/data/tag/giveaway/index.json",
    "revision": "14336cbf03878fd9b9a8252967778a8c"
  },
  {
    "url": "assets/data/tag/lesson/index.json",
    "revision": "25df852c517b1921014ed66c88903697"
  },
  {
    "url": "assets/data/tag/recording/index.json",
    "revision": "a564bbd4e10cd738bbd6e363f2d950c4"
  },
  {
    "url": "assets/data/tag/studio/index.json",
    "revision": "156a61f646707ad576879af7619246dc"
  },
  {
    "url": "assets/data/tag/youtube/index.json",
    "revision": "cee04058cb16d6d80f321b1bd3ab37d3"
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
    "url": "assets/js/app.ab2c2c48.js",
    "revision": "49adb92a69bbb6065496b8ae4d973565"
  },
  {
    "url": "assets/js/page--node-modules-gridsome-app-pages-404-vue.9ff0420a.js",
    "revision": "615b743d10eeb64662684e7aec935e97"
  },
  {
    "url": "assets/js/page--src-pages-gallery-vue.2626c4cb.js",
    "revision": "7dcacccb3785c60699f20c597d0d2cf0"
  },
  {
    "url": "assets/js/page--src-pages-index-vue.2af99132.js",
    "revision": "cf698a3748ad4d480a6a98e54a5b9ada"
  },
  {
    "url": "assets/js/page--src-pages-samples-vue.c72dcf84.js",
    "revision": "5b362f4f59ce94e69cbd946e60834035"
  },
  {
    "url": "assets/js/page--src-templates-post-vue.f03f9f4e.js",
    "revision": "e9c546692820aa62f6cf0dfe57d824cf"
  },
  {
    "url": "assets/js/page--src-templates-tag-vue.5ed857cc.js",
    "revision": "9171af5ac2661201865bcf62252d5dd8"
  },
  {
    "url": "assets/static/favicon.1539b60.d613fe2a07622ac4e16c1baa3c0e54cd.png",
    "revision": "87ebcf39f80258fb3b0f52c27d154c76"
  },
  {
    "url": "assets/static/favicon.62d22cb.d613fe2a07622ac4e16c1baa3c0e54cd.png",
    "revision": "6fa9f054b75364cabd631e7fed0874b7"
  },
  {
    "url": "assets/static/favicon.7b22250.d613fe2a07622ac4e16c1baa3c0e54cd.png",
    "revision": "6c8da68950ac98d24b562fad57124765"
  },
  {
    "url": "assets/static/favicon.ac8d93a.d613fe2a07622ac4e16c1baa3c0e54cd.png",
    "revision": "11306827fcaebcbbbb534ad419f9f070"
  },
  {
    "url": "assets/static/favicon.b9532cc.d613fe2a07622ac4e16c1baa3c0e54cd.png",
    "revision": "78c88e2c2490e1cdaae40bf1038e280c"
  },
  {
    "url": "assets/static/favicon.ce0531f.d613fe2a07622ac4e16c1baa3c0e54cd.png",
    "revision": "4eb39e5e1230895d750af436f3057298"
  },
  {
    "url": "assets/static/favicon.dc0cdc5.d613fe2a07622ac4e16c1baa3c0e54cd.png",
    "revision": "a0b2648714ed731bc54b4d2b9d82c29d"
  },
  {
    "url": "assets/static/favicon.f22e9f3.d613fe2a07622ac4e16c1baa3c0e54cd.png",
    "revision": "2ddaca27eeca461b264ad3b61e672ab5"
  },
  {
    "url": "assets/static/favicon.png",
    "revision": "d613fe2a07622ac4e16c1baa3c0e54cd"
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
    "revision": "6d3f000d98877022a07d842d35229d81"
  },
  {
    "url": "giveaway/index.html",
    "revision": "438d723d849aeddc82f89ce95e4e3d7e"
  },
  {
    "url": "index.html",
    "revision": "fc4c542ced2db466066f4dcb9d588273"
  },
  {
    "url": "manifest.json",
    "revision": "53c3f1747480882b56d9eb2a03f72bbd"
  },
  {
    "url": "piano-studio/index.html",
    "revision": "4d1183d95dbda7a5cefef47be7a038af"
  },
  {
    "url": "recording/index.html",
    "revision": "a86e6c8440e2c4c7760331ab2793d1ab"
  },
  {
    "url": "samples/index.html",
    "revision": "5bad9668a7924455fed5a2de2aa62d16"
  },
  {
    "url": "tag/audition/index.html",
    "revision": "761a33f88fa6d38aac9b691147af1fad"
  },
  {
    "url": "tag/consultation/index.html",
    "revision": "012d49d6d35f73761eeb66e2a405c5b3"
  },
  {
    "url": "tag/giveaway/index.html",
    "revision": "9e7d0f09bedf5c20bed579f95682c4e8"
  },
  {
    "url": "tag/lesson/index.html",
    "revision": "e9dc9cb01d56fd42151b0f13e7c57d2f"
  },
  {
    "url": "tag/recording/index.html",
    "revision": "712f764e2c742b0a5f6e8cf2e42a91a8"
  },
  {
    "url": "tag/studio/index.html",
    "revision": "ad1d767bbcbc3b05f8b90e59c73a7640"
  },
  {
    "url": "tag/youtube/index.html",
    "revision": "e4acc613974f0ba99783117fff9dc98a"
  },
  {
    "url": "404",
    "revision": "58562ccce683f1fa20f0b08d84a700bb"
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
    "url": "tag/recording",
    "revision": "8e0c87119843f4fa46e06137262da462"
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
    "url": "piano-studio",
    "revision": "a1d61d3d5776019365f7baf2df296148"
  },
  {
    "url": "giveaway",
    "revision": "fa4d655171b8fc1bb802e78b43aedbf9"
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