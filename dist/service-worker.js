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
    "revision": "f45fd3304d7e16bdabe6cc8698bf0eeb"
  },
  {
    "url": "404/index.html",
    "revision": "f45fd3304d7e16bdabe6cc8698bf0eeb"
  },
  {
    "url": "assets/css/0.styles.d6440ba2.css",
    "revision": "13ef87805efbfc1e4af994f760e5821f"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "2c33efa2b84f87c6e94abb1d24b6597e"
  },
  {
    "url": "assets/data/giveaway-recordings/index.json",
    "revision": "df30cb95b41273020931f4efcdcf37d7"
  },
  {
    "url": "assets/data/index.json",
    "revision": "aa60310192d4cb4816cc659df7ae928c"
  },
  {
    "url": "assets/data/tag/audition/index.json",
    "revision": "006f4a6b0252bdac34f7a705748c8d3e"
  },
  {
    "url": "assets/data/tag/giveaway/index.json",
    "revision": "e3795a59ac91f2dfdfd6f61fa18ba517"
  },
  {
    "url": "assets/data/tag/recording/index.json",
    "revision": "c3b7fc74a787fe899efb74cf0b915ed8"
  },
  {
    "url": "assets/data/tag/studio/index.json",
    "revision": "0b04fbc5768f51da9afb042c5aba6002"
  },
  {
    "url": "assets/data/welcome/index.json",
    "revision": "b63555eb9acab35ff83a6314dab01ebc"
  },
  {
    "url": "assets/js/app.06c8e27a.js",
    "revision": "3a350293eb6f8dddc0ba9cd149f23100"
  },
  {
    "url": "assets/js/page--node-modules-gridsome-app-pages-404-vue.e4bee504.js",
    "revision": "7eb7f59aea7497cbf38f39f2938abce5"
  },
  {
    "url": "assets/js/page--src-pages-index-vue.631dcfd5.js",
    "revision": "2d4be58556eef3fb4fbe54eebc809a5d"
  },
  {
    "url": "assets/js/page--src-templates-post-vue.7f51b753.js",
    "revision": "f2a805bceb1c5ff0051afe97ef7c7a51"
  },
  {
    "url": "assets/js/page--src-templates-tag-vue.2eb0cd64.js",
    "revision": "cd3b2f60c71e6b16809a18e1b104fdba"
  },
  {
    "url": "assets/static/favicon.1539b60.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "528be7fc357e86e472eb90c5d06e45dc"
  },
  {
    "url": "assets/static/favicon.62d22cb.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "ad421981f2b44e3acd7d3a62216121c4"
  },
  {
    "url": "assets/static/favicon.7b22250.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "792bff5e8c82b79551825020d8e1ef23"
  },
  {
    "url": "assets/static/favicon.ac8d93a.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "334b56425dfcc146103ee3782ec52c08"
  },
  {
    "url": "assets/static/favicon.b9532cc.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "ca3a37aacaa9c61829dc1aa0968a5abf"
  },
  {
    "url": "assets/static/favicon.ce0531f.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "18c8ed18f36ee2d4e9c68e9cb7b5437c"
  },
  {
    "url": "assets/static/favicon.dc0cdc5.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "e3aac802cecf084e741fabb058f2ec1b"
  },
  {
    "url": "assets/static/favicon.f22e9f3.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "055aaf279e4d282a73be160a353c13c2"
  },
  {
    "url": "assets/static/logo-light.svg",
    "revision": "7d006fa0b95ed51f1ee100d393ce8ba0"
  },
  {
    "url": "assets/static/photo-author.e6b6009.ec35e9acb563ed9b0647882ef034f654.jpg",
    "revision": "e4d2a6a2f195e86da77dab90e7f1e343"
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
    "url": "assets/static/studio-steinway-1.07cc2b7.dd3c37788c216c85c0a4be56a3fd6434.jpg",
    "revision": "cd0f07c30e1c816c78166749f505c605"
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
    "url": "assets/static/studio-steinway-1.81b85c1.dd3c37788c216c85c0a4be56a3fd6434.jpg",
    "revision": "16cd151e43b8646b040f8aff2ecdf634"
  },
  {
    "url": "assets/static/studio-steinway-1.82a2fbd.dd3c37788c216c85c0a4be56a3fd6434.jpg",
    "revision": "48c92c23b1db8498d4b3236eae0a1615"
  },
  {
    "url": "assets/static/studio-steinway-1.a67b0b2.dd3c37788c216c85c0a4be56a3fd6434.jpg",
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
    "url": "giveaway-recordings/index.html",
    "revision": "674591792ffdcdabb18eda9bd36243aa"
  },
  {
    "url": "index.html",
    "revision": "c4e2aae5c42692001d7c051eaf2a0efb"
  },
  {
    "url": "logo-light.svg",
    "revision": "7d006fa0b95ed51f1ee100d393ce8ba0"
  },
  {
    "url": "manifest.json",
    "revision": "d1c8ca7d232893e4f595de1fa1d55bce"
  },
  {
    "url": "tag/audition/index.html",
    "revision": "ec69444e77551cd8849719b65792abc0"
  },
  {
    "url": "tag/giveaway/index.html",
    "revision": "16691c51df5d033f15f7658aa4e1b5b9"
  },
  {
    "url": "tag/recording/index.html",
    "revision": "aa72dee566a0b72892b3c353038d1dd7"
  },
  {
    "url": "tag/studio/index.html",
    "revision": "5feee32e461bab49a62da6b3df6ceb83"
  },
  {
    "url": "welcome/index.html",
    "revision": "138f9409b116093c7e83bfeff22b88b4"
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
    "url": "tag/studio",
    "revision": "20ae2896c394c0ba0e3702516c5dd50c"
  },
  {
    "url": "tag/audition",
    "revision": "9431c2f3b9cc9768e00e1a6b5b2ccd3c"
  },
  {
    "url": "giveaway-recordings",
    "revision": "237b6905e194810011c8b281094ca697"
  },
  {
    "url": "welcome",
    "revision": "36cfabe3ef8b2b17cc27257877c3fbb1"
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