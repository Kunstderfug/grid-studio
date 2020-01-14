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
    "revision": "b55b8a48f0f060907375566f40f46645"
  },
  {
    "url": "404/index.html",
    "revision": "b55b8a48f0f060907375566f40f46645"
  },
  {
    "url": "assets/css/0.styles.5b330a4f.css",
    "revision": "f15539d7eec56f3cad407b84901bc1c3"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "1755f508a9066e7e4b6c221aca6157d5"
  },
  {
    "url": "assets/data/gallery/index.json",
    "revision": "1755f508a9066e7e4b6c221aca6157d5"
  },
  {
    "url": "assets/data/giveaway/index.json",
    "revision": "00f9aba5cd169a1a589e836d7fa28229"
  },
  {
    "url": "assets/data/index.json",
    "revision": "6c0345ddaa4b7abba9e93e19d4826fda"
  },
  {
    "url": "assets/data/piano-studio/index.json",
    "revision": "a4c89404c6fff13609c8901bd5079f7b"
  },
  {
    "url": "assets/data/recording/index.json",
    "revision": "e53871a6e4c927baa995352ef42ab85a"
  },
  {
    "url": "assets/data/samples/index.json",
    "revision": "1755f508a9066e7e4b6c221aca6157d5"
  },
  {
    "url": "assets/data/tag/audition/index.json",
    "revision": "abf9ce8ef3b6f3bad22684ca073316a1"
  },
  {
    "url": "assets/data/tag/consultation/index.json",
    "revision": "6fa05112d769937694fea4af9bc454e3"
  },
  {
    "url": "assets/data/tag/giveaway/index.json",
    "revision": "76611d58721e1dac364a90b4866e7610"
  },
  {
    "url": "assets/data/tag/lesson/index.json",
    "revision": "84f6711f86365ac60c4306eaebc79d33"
  },
  {
    "url": "assets/data/tag/recording/index.json",
    "revision": "a91ca69b44ce6625a9b0e86fb93a820c"
  },
  {
    "url": "assets/data/tag/studio/index.json",
    "revision": "9e21507ef80bf782a3022d117711adbd"
  },
  {
    "url": "assets/data/tag/youtube/index.json",
    "revision": "14b0ca1fba74767db16aa13f1bb52813"
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
    "url": "assets/img/studio-2.f9bc7576.jpg",
    "revision": "f9bc7576fdc00764b7aa01af84d23e91"
  },
  {
    "url": "assets/img/studio-3.7e22ac31.jpg",
    "revision": "7e22ac3174b4954fd6ba4b941fc189ec"
  },
  {
    "url": "assets/img/studio-4.98e60696.jpg",
    "revision": "98e6069631293346ddd8fd041a60cf2e"
  },
  {
    "url": "assets/img/studio-5.0de6371d.jpg",
    "revision": "0de6371deb81a5a0c94b167cb720f3c0"
  },
  {
    "url": "assets/img/studio-6.80381bee.jpg",
    "revision": "80381bee70ebf076959dcceb69f16482"
  },
  {
    "url": "assets/img/studio-7.4799654f.jpg",
    "revision": "4799654f2286bf4fbb74fe2e0d7b1cdd"
  },
  {
    "url": "assets/img/studio-steinway-1.dd3c3778.jpg",
    "revision": "dd3c37788c216c85c0a4be56a3fd6434"
  },
  {
    "url": "assets/js/app.4e99c57c.js",
    "revision": "9d5e8e879043d757403f1c818d32f195"
  },
  {
    "url": "assets/js/page--node-modules-gridsome-app-pages-404-vue.578f83f1.js",
    "revision": "ede16646465ccbabb366ae447c6ffa86"
  },
  {
    "url": "assets/js/page--src-pages-gallery-vue.71219a65.js",
    "revision": "abfc5ba1442ae08df5034b4da7378995"
  },
  {
    "url": "assets/js/page--src-pages-index-vue.87d175ab.js",
    "revision": "543086fe9d2b92293512aa5cb2c62d3f"
  },
  {
    "url": "assets/js/page--src-pages-samples-vue.f5249c63.js",
    "revision": "ca06ced4df8fa2417d5332e4c8187c78"
  },
  {
    "url": "assets/js/page--src-templates-post-vue.f722986f.js",
    "revision": "5aedd6dbbdbc5de74bdd6d1899904fa2"
  },
  {
    "url": "assets/js/page--src-templates-tag-vue.d9348a97.js",
    "revision": "e8dd2ce92ff9b404a0f62473b432d79e"
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
    "url": "assets/static/studio-steinway.2665e34.17ad1d07b7764499a88dc2db4fd4f46c.jpg",
    "revision": "4a10add6fa6c1617d18fabcbe4e025c6"
  },
  {
    "url": "assets/static/studio-steinway.42db587.17ad1d07b7764499a88dc2db4fd4f46c.jpg",
    "revision": "ab91d60977ed5f39db54b80d5e14104f"
  },
  {
    "url": "assets/static/studio-steinway.6b65613.17ad1d07b7764499a88dc2db4fd4f46c.jpg",
    "revision": "318783ff12111673aae6525ede135b52"
  },
  {
    "url": "assets/static/studio-steinway.81b85c1.17ad1d07b7764499a88dc2db4fd4f46c.jpg",
    "revision": "9e646542f24ef7ebe351f349f174ec2f"
  },
  {
    "url": "assets/static/studio-steinway.82a2fbd.17ad1d07b7764499a88dc2db4fd4f46c.jpg",
    "revision": "927fd4e7879a4ad8e4163ac1a2ab2f84"
  },
  {
    "url": "assets/static/studio-steinway.a67b0b2.17ad1d07b7764499a88dc2db4fd4f46c.jpg",
    "revision": "927fd4e7879a4ad8e4163ac1a2ab2f84"
  },
  {
    "url": "assets/static/studio-steinway.cbab2cf.17ad1d07b7764499a88dc2db4fd4f46c.jpg",
    "revision": "c456993cf1bef024efe09b2208d3f4d7"
  },
  {
    "url": "gallery/index.html",
    "revision": "400f93fd27da001220b5f16ecceaf8c6"
  },
  {
    "url": "giveaway/index.html",
    "revision": "5b76c14b3f50151dc995262cd25a5d44"
  },
  {
    "url": "index.html",
    "revision": "af1819dd84ba3441b8f2b97b7cb318c1"
  },
  {
    "url": "manifest.json",
    "revision": "53c3f1747480882b56d9eb2a03f72bbd"
  },
  {
    "url": "piano-studio/index.html",
    "revision": "408a640667a4b2ea362b7630b251e985"
  },
  {
    "url": "recording/index.html",
    "revision": "697addcc079ad1fea2e769b44e083d7a"
  },
  {
    "url": "samples/index.html",
    "revision": "92cabfb28f8a5cb405fdcb1ea17275c7"
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
    "revision": "d708bb714a57a9d6c38b15b2915dbb1e"
  },
  {
    "url": "tag/consultation/index.html",
    "revision": "f45f7c0b3249f9954215749cab9da7c6"
  },
  {
    "url": "tag/giveaway/index.html",
    "revision": "14e9a1ce3996a9f0493fae2e7a0d95cb"
  },
  {
    "url": "tag/lesson/index.html",
    "revision": "33d4209d73653c24636661dfd74fb01b"
  },
  {
    "url": "tag/recording/index.html",
    "revision": "f15e7117b1c7092ae94e6f553dee1bfd"
  },
  {
    "url": "tag/studio/index.html",
    "revision": "9f8eaa88134723687ecce70b6b3b09f4"
  },
  {
    "url": "tag/youtube/index.html",
    "revision": "58d181a55d18d4a7cd9860fc5f277c99"
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