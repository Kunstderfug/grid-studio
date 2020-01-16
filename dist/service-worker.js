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
    "revision": "591b7d6b3998948d9b3bdd3c65633498"
  },
  {
    "url": "404/index.html",
    "revision": "591b7d6b3998948d9b3bdd3c65633498"
  },
  {
    "url": "assets/css/0.styles.20011064.css",
    "revision": "af0afdf0c3f533923f6ccbbb1975b18a"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "bedc9596fb55db2d069a3160e99a7227"
  },
  {
    "url": "assets/data/gallery/index.json",
    "revision": "bedc9596fb55db2d069a3160e99a7227"
  },
  {
    "url": "assets/data/giveaway/index.json",
    "revision": "169dce8cb0a95f332d6ddba462754c87"
  },
  {
    "url": "assets/data/index.json",
    "revision": "e433d92063727fdaa2c0487c544bfc67"
  },
  {
    "url": "assets/data/piano-studio/index.json",
    "revision": "84997df8608fdd2739285be9f0226d93"
  },
  {
    "url": "assets/data/recording/index.json",
    "revision": "8ef727c275ed6fa41e2cbcc4cb08778f"
  },
  {
    "url": "assets/data/samples/index.json",
    "revision": "bedc9596fb55db2d069a3160e99a7227"
  },
  {
    "url": "assets/data/tag/audition/index.json",
    "revision": "cba12f3c20348de22b875e3e6f7da42b"
  },
  {
    "url": "assets/data/tag/consultation/index.json",
    "revision": "16a770705036a6e91688912d63cb53f5"
  },
  {
    "url": "assets/data/tag/giveaway/index.json",
    "revision": "899782831979b2137d449e8493f67c82"
  },
  {
    "url": "assets/data/tag/lesson/index.json",
    "revision": "2bd1fefcecaa3583e94e3692af3e6f4b"
  },
  {
    "url": "assets/data/tag/recording/index.json",
    "revision": "fe8edee3a951fe6632901ffa97a56a69"
  },
  {
    "url": "assets/data/tag/studio/index.json",
    "revision": "c0b98184467a9cdfb308dc78422e725e"
  },
  {
    "url": "assets/data/tag/youtube/index.json",
    "revision": "cc7e8ae8de56c0d5507403ce18d9cd1b"
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
    "url": "assets/js/app.a5f33a9f.js",
    "revision": "307bd8e42567056bcc87a03439748819"
  },
  {
    "url": "assets/js/page--node-modules-gridsome-app-pages-404-vue.9ff0420a.js",
    "revision": "615b743d10eeb64662684e7aec935e97"
  },
  {
    "url": "assets/js/page--src-pages-gallery-vue.0bffefc6.js",
    "revision": "d5af1d6723456536cdbc86038da5e3d2"
  },
  {
    "url": "assets/js/page--src-pages-index-vue.02498873.js",
    "revision": "7e9bd63262b964c35c73762c1392ef9a"
  },
  {
    "url": "assets/js/page--src-pages-samples-vue.1a767e50.js",
    "revision": "006a601a62ac7b42324e747c18aaabe8"
  },
  {
    "url": "assets/js/page--src-templates-post-vue.b9f5eb18.js",
    "revision": "aacbc57c35199ffe148e847b0e3f573c"
  },
  {
    "url": "assets/js/page--src-templates-tag-vue.7984f32e.js",
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
    "revision": "a58ed69789d325f3e8022fd99e01ff28"
  },
  {
    "url": "giveaway/index.html",
    "revision": "c38489dd707170a9866b4bac24877ee1"
  },
  {
    "url": "index.html",
    "revision": "0d89d3d0219627362da3dc300dc96e3f"
  },
  {
    "url": "manifest.json",
    "revision": "53c3f1747480882b56d9eb2a03f72bbd"
  },
  {
    "url": "piano-studio/index.html",
    "revision": "72e2fee066fdce4f86e44ae53166b494"
  },
  {
    "url": "recording/index.html",
    "revision": "4073ba00a34dbdec575343e482d8116b"
  },
  {
    "url": "samples/index.html",
    "revision": "627e3265682d3aa37dc228b7d7485791"
  },
  {
    "url": "tag/audition/index.html",
    "revision": "6375049fe4ea70a926657b54afadbd79"
  },
  {
    "url": "tag/consultation/index.html",
    "revision": "12c5011c7aadb013101824188a67b659"
  },
  {
    "url": "tag/giveaway/index.html",
    "revision": "1da89f139138b5c6004acd900ebfabd3"
  },
  {
    "url": "tag/lesson/index.html",
    "revision": "2ef03808c6478367f6427ddc739507a9"
  },
  {
    "url": "tag/recording/index.html",
    "revision": "b816ca238a1d47e81850ceffbe27bb4a"
  },
  {
    "url": "tag/studio/index.html",
    "revision": "cef653f53ea0c154e1a68de5d502fbb2"
  },
  {
    "url": "tag/youtube/index.html",
    "revision": "a1f49dc64268a7a00cd354be1be8d3cc"
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