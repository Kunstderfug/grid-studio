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
    "revision": "6da931ecd736712fb92a527a7bc91020"
  },
  {
    "url": "404/index.html",
    "revision": "6da931ecd736712fb92a527a7bc91020"
  },
  {
    "url": "assets/css/0.styles.68806779.css",
    "revision": "55844a09eb7813cecd97882b6e0ec3a8"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "81817a9ec94307da428628b45188ef79"
  },
  {
    "url": "assets/data/gallery/index.json",
    "revision": "81817a9ec94307da428628b45188ef79"
  },
  {
    "url": "assets/data/giveaway/index.json",
    "revision": "9a38fc8a0f8fb51270dabe30d65be8b0"
  },
  {
    "url": "assets/data/index.json",
    "revision": "62a3cae382616a20e3b8abcc4cc23d38"
  },
  {
    "url": "assets/data/piano-studio/index.json",
    "revision": "01b552802d14348c1105e294c9ff4139"
  },
  {
    "url": "assets/data/recording/index.json",
    "revision": "e7d5b666e05bfa8f95c4be97578d742f"
  },
  {
    "url": "assets/data/samples/index.json",
    "revision": "81817a9ec94307da428628b45188ef79"
  },
  {
    "url": "assets/data/tag/audition/index.json",
    "revision": "21b32a7456d7f805160d873be9928e46"
  },
  {
    "url": "assets/data/tag/consultation/index.json",
    "revision": "4470d0b5d60cd45ad4c8f96f25bc018f"
  },
  {
    "url": "assets/data/tag/giveaway/index.json",
    "revision": "7732e988aa921170d9e222ee518f3529"
  },
  {
    "url": "assets/data/tag/lesson/index.json",
    "revision": "4b0f8407b6382084fc57a6009bc8bcc4"
  },
  {
    "url": "assets/data/tag/recording/index.json",
    "revision": "2903c6d01e69f228827d0bc3c9e4c897"
  },
  {
    "url": "assets/data/tag/studio/index.json",
    "revision": "ef6a91c88f63492ef59f4b4973a99f7b"
  },
  {
    "url": "assets/data/tag/youtube/index.json",
    "revision": "b81ecde16783cb2aa5361e423f1abf95"
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
    "url": "assets/js/app.fe5b5aeb.js",
    "revision": "f21a753d76df54077de8977573035c1a"
  },
  {
    "url": "assets/js/page--node-modules-gridsome-app-pages-404-vue.4bf493cb.js",
    "revision": "ec40164dd0ffd02021ba26c49b13d5d9"
  },
  {
    "url": "assets/js/page--src-pages-gallery-vue.3fa7f681.js",
    "revision": "35b9a9d9f76e9d0ad5d331e62ad0cb6a"
  },
  {
    "url": "assets/js/page--src-pages-index-vue.2732b7da.js",
    "revision": "e3c3868e32653df8c27a2a10b7d2796e"
  },
  {
    "url": "assets/js/page--src-pages-samples-vue.5d0e3901.js",
    "revision": "49aa1d25b933021290ad83f2c55f18d9"
  },
  {
    "url": "assets/js/page--src-templates-post-vue.60db2545.js",
    "revision": "1584175df339b67cc8a2fd3b49a4b76b"
  },
  {
    "url": "assets/js/page--src-templates-tag-vue.0caa824b.js",
    "revision": "8f37aeb13d1deea452536b4f8c442a49"
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
    "revision": "0db563de24c8ab78ef5687f2edeb4147"
  },
  {
    "url": "giveaway/index.html",
    "revision": "c1d08b581d292c467e8214f482fc0e98"
  },
  {
    "url": "index.html",
    "revision": "d75702ee1061fd65a5fa1581aaae76aa"
  },
  {
    "url": "manifest.json",
    "revision": "53c3f1747480882b56d9eb2a03f72bbd"
  },
  {
    "url": "piano-studio/index.html",
    "revision": "0800436e9dc3cc794ca1ee8b44c84d8a"
  },
  {
    "url": "recording/index.html",
    "revision": "a225a05b0c64c03f04320d07de914b6e"
  },
  {
    "url": "samples/index.html",
    "revision": "e29c1bde438ce05b3592b8590535ff11"
  },
  {
    "url": "studio/score.jpg",
    "revision": "ebc13df3a88989c61ea57a414115f8f5"
  },
  {
    "url": "studio/studio-1.jpg",
    "revision": "3ebbacb029575446e477fb87b35c7f42"
  },
  {
    "url": "studio/studio-2.jpg",
    "revision": "f9bc7576fdc00764b7aa01af84d23e91"
  },
  {
    "url": "studio/studio-3.jpg",
    "revision": "7e22ac3174b4954fd6ba4b941fc189ec"
  },
  {
    "url": "studio/studio-4.jpg",
    "revision": "98e6069631293346ddd8fd041a60cf2e"
  },
  {
    "url": "studio/studio-5.jpg",
    "revision": "0de6371deb81a5a0c94b167cb720f3c0"
  },
  {
    "url": "studio/studio-6.jpg",
    "revision": "80381bee70ebf076959dcceb69f16482"
  },
  {
    "url": "studio/studio-7.jpg",
    "revision": "4799654f2286bf4fbb74fe2e0d7b1cdd"
  },
  {
    "url": "studio/studio-steinway-1.jpg",
    "revision": "dd3c37788c216c85c0a4be56a3fd6434"
  },
  {
    "url": "studio/studio-steinway.jpg",
    "revision": "17ad1d07b7764499a88dc2db4fd4f46c"
  },
  {
    "url": "tag/audition/index.html",
    "revision": "2c20578ac529cf59ee1d46c3c2cf97bc"
  },
  {
    "url": "tag/consultation/index.html",
    "revision": "90477f965d47a74895388f9faccb6dd7"
  },
  {
    "url": "tag/giveaway/index.html",
    "revision": "46bb6cb4b108a639b99b5efad12b8379"
  },
  {
    "url": "tag/lesson/index.html",
    "revision": "f720a07a31fa3f621c114315c9ff5c0c"
  },
  {
    "url": "tag/recording/index.html",
    "revision": "419f1a64f318ec3e8ff9fa568431a9f3"
  },
  {
    "url": "tag/studio/index.html",
    "revision": "39950787398fce9ae57c18d539da9b02"
  },
  {
    "url": "tag/youtube/index.html",
    "revision": "0983d31c3d362eaf56792c048a8424cb"
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
    "url": "tag/giveaway",
    "revision": "99c780b68c8f39be39e435b536704b38"
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
    "url": "giveaway",
    "revision": "fa4d655171b8fc1bb802e78b43aedbf9"
  },
  {
    "url": "piano-studio",
    "revision": "a1d61d3d5776019365f7baf2df296148"
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