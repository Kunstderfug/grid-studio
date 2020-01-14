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
    "revision": "124e84ac34568a2f17e2627ccd05a413"
  },
  {
    "url": "404/index.html",
    "revision": "124e84ac34568a2f17e2627ccd05a413"
  },
  {
    "url": "assets/css/0.styles.0e17a2f0.css",
    "revision": "d00380e6ede6393a1b2fe58782b43f0e"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "31f3d3911a66ce727cb5b8d2550c6b17"
  },
  {
    "url": "assets/data/giveaway/index.json",
    "revision": "9ebbf4d6a19c19c1d01f9e382a38b9ba"
  },
  {
    "url": "assets/data/index.json",
    "revision": "3bc02087cd97975960749b149d39a31c"
  },
  {
    "url": "assets/data/piano-studio/index.json",
    "revision": "4c3faee8734d72f4f0728f0a26ca7e9e"
  },
  {
    "url": "assets/data/recording/index.json",
    "revision": "81511b34e8500d78f8d957929228818e"
  },
  {
    "url": "assets/data/tag/audition/index.json",
    "revision": "237f0df4b625218c3f0d5f2061df822d"
  },
  {
    "url": "assets/data/tag/consultation/index.json",
    "revision": "032149e03dd5bca20872ffc492d9c1c5"
  },
  {
    "url": "assets/data/tag/giveaway/index.json",
    "revision": "f3c8db4f411ad127e28f960083bb1ab8"
  },
  {
    "url": "assets/data/tag/lesson/index.json",
    "revision": "b3b5000a46a21a3518180ef025bd0e37"
  },
  {
    "url": "assets/data/tag/recording/index.json",
    "revision": "f685edb520528f36fd24ca730295f25f"
  },
  {
    "url": "assets/data/tag/studio/index.json",
    "revision": "835685c7a9ec272fded74e2f763ee955"
  },
  {
    "url": "assets/data/tag/youtube/index.json",
    "revision": "93dfcb8fe05c935c5dbbaaf686b9b285"
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
    "url": "assets/js/app.a511758d.js",
    "revision": "2699e74e9328bc687492af65c27feb00"
  },
  {
    "url": "assets/js/page--node-modules-gridsome-app-pages-404-vue.41bd1842.js",
    "revision": "4ed4020a0973ee3f3d1abade1e300b65"
  },
  {
    "url": "assets/js/page--src-pages-index-vue.b6d920cf.js",
    "revision": "3806657302ef1eb67bb51214e9457f9e"
  },
  {
    "url": "assets/js/page--src-templates-post-vue.b2821c4e.js",
    "revision": "6457a953c90c999ecc101a4df708a27b"
  },
  {
    "url": "assets/js/page--src-templates-tag-vue.a4b5d749.js",
    "revision": "53aef7492b82f93280359847607c8295"
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
    "url": "assets/static/studio-2.2665e34.f9bc7576fdc00764b7aa01af84d23e91.jpg",
    "revision": "7147b1528e6299c36048078d240ced5f"
  },
  {
    "url": "assets/static/studio-2.42db587.f9bc7576fdc00764b7aa01af84d23e91.jpg",
    "revision": "8819de22efc2024ca60ac1dc964c650a"
  },
  {
    "url": "assets/static/studio-2.82a2fbd.f9bc7576fdc00764b7aa01af84d23e91.jpg",
    "revision": "1e00fb89c84280c773074961bccde5a5"
  },
  {
    "url": "assets/static/studio-2.cbab2cf.f9bc7576fdc00764b7aa01af84d23e91.jpg",
    "revision": "d7665b63272f5419c23fe1e4e00af2a2"
  },
  {
    "url": "assets/static/studio-3.2665e34.7e22ac3174b4954fd6ba4b941fc189ec.jpg",
    "revision": "4de0b13caf3536d879ecc4448d09edca"
  },
  {
    "url": "assets/static/studio-3.42db587.7e22ac3174b4954fd6ba4b941fc189ec.jpg",
    "revision": "29d1eab734d3290fc769ee2b8c00ce70"
  },
  {
    "url": "assets/static/studio-3.82a2fbd.7e22ac3174b4954fd6ba4b941fc189ec.jpg",
    "revision": "cce6a0c4f8e2e6b4efa6b68fbf00d4fd"
  },
  {
    "url": "assets/static/studio-3.cbab2cf.7e22ac3174b4954fd6ba4b941fc189ec.jpg",
    "revision": "2fc7a6d63eed338e596f2eb2a2670f3b"
  },
  {
    "url": "assets/static/studio-4.7c32738.98e6069631293346ddd8fd041a60cf2e.jpg",
    "revision": "b05436a40759c2ee743db0b1f5bda8ec"
  },
  {
    "url": "assets/static/studio-4.82a2fbd.98e6069631293346ddd8fd041a60cf2e.jpg",
    "revision": "75953419a88ce0afe580dad21863a8d4"
  },
  {
    "url": "assets/static/studio-4.cbab2cf.98e6069631293346ddd8fd041a60cf2e.jpg",
    "revision": "009544074592e8a2194f0346eba77e21"
  },
  {
    "url": "assets/static/studio-5.21349d8.0de6371deb81a5a0c94b167cb720f3c0.jpg",
    "revision": "e598a8e50aa224627434f2ba2e3c930e"
  },
  {
    "url": "assets/static/studio-5.82a2fbd.0de6371deb81a5a0c94b167cb720f3c0.jpg",
    "revision": "5133bfb4d995e3529304456f75e7d676"
  },
  {
    "url": "assets/static/studio-5.cbab2cf.0de6371deb81a5a0c94b167cb720f3c0.jpg",
    "revision": "29e84a0cc249d249d533785e8ae4d486"
  },
  {
    "url": "assets/static/studio-6.2665e34.80381bee70ebf076959dcceb69f16482.jpg",
    "revision": "5eb67eed7cc1c667f82d2c2381f1b609"
  },
  {
    "url": "assets/static/studio-6.82a2fbd.80381bee70ebf076959dcceb69f16482.jpg",
    "revision": "fb4ce0ccb9bf4fda3406a0a2cbd583dd"
  },
  {
    "url": "assets/static/studio-6.9d83a2f.80381bee70ebf076959dcceb69f16482.jpg",
    "revision": "d6fa964012992936f511a374603a7740"
  },
  {
    "url": "assets/static/studio-6.cbab2cf.80381bee70ebf076959dcceb69f16482.jpg",
    "revision": "adaf089d3d2c565e3112fc7ce5d095f1"
  },
  {
    "url": "assets/static/studio-steinway-1.2665e34.dd3c37788c216c85c0a4be56a3fd6434.jpg",
    "revision": "f069397fdf18b8a12bf750cfc32e0368"
  },
  {
    "url": "assets/static/studio-steinway-1.42db587.dd3c37788c216c85c0a4be56a3fd6434.jpg",
    "revision": "b3e1a7c6ac2650d7d7abc01eda43c3d6"
  },
  {
    "url": "assets/static/studio-steinway-1.82a2fbd.dd3c37788c216c85c0a4be56a3fd6434.jpg",
    "revision": "48c92c23b1db8498d4b3236eae0a1615"
  },
  {
    "url": "assets/static/studio-steinway-1.cbab2cf.dd3c37788c216c85c0a4be56a3fd6434.jpg",
    "revision": "05710ffb633902919f41ab6ddd4bd77e"
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
    "url": "giveaway/index.html",
    "revision": "f49ccd1ff3ecada6875b89acef70444e"
  },
  {
    "url": "index.html",
    "revision": "d8e2405fbf63ee026c62d5148404e797"
  },
  {
    "url": "manifest.json",
    "revision": "53c3f1747480882b56d9eb2a03f72bbd"
  },
  {
    "url": "piano-studio/index.html",
    "revision": "bdbf841a66ea4abff927c746ca327360"
  },
  {
    "url": "recording/index.html",
    "revision": "98c044bc471b2f6e6ee7bdb8a6ed36e7"
  },
  {
    "url": "tag/audition/index.html",
    "revision": "c131aa8b35cb74f0bcc18fdabdecbb04"
  },
  {
    "url": "tag/consultation/index.html",
    "revision": "f8ee69ae1420f71c1c2c43b86711daad"
  },
  {
    "url": "tag/giveaway/index.html",
    "revision": "c2f97c558b9c1a90807398995094eb16"
  },
  {
    "url": "tag/lesson/index.html",
    "revision": "e1fe95a20c099a57494a41776752aca4"
  },
  {
    "url": "tag/recording/index.html",
    "revision": "210e9c3f0182c88846b0172de9b53317"
  },
  {
    "url": "tag/studio/index.html",
    "revision": "2630c02a1718c8b1417340d2d7582030"
  },
  {
    "url": "tag/youtube/index.html",
    "revision": "ce2de54b1e0a9c2d659594aeb6b07556"
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