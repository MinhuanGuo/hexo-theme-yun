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
    "revision": "66d5908616e68af5e87dbac930146905"
  },
  {
    "url": "about.html",
    "revision": "26a4a113cfb632d04b9c756b3aafc51f"
  },
  {
    "url": "assets/css/0.styles.3fc9eea4.css",
    "revision": "197c360dc4ae9484db60880f4728af14"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.50cfa49c.js",
    "revision": "9c3d7c3b8367c3ea62ae1c460d5abbb6"
  },
  {
    "url": "assets/js/11.f2050cd2.js",
    "revision": "84c0822af8504adf13ab437bfa130129"
  },
  {
    "url": "assets/js/12.17461310.js",
    "revision": "3a687f95d72652af2e1cb835da564005"
  },
  {
    "url": "assets/js/13.963f934f.js",
    "revision": "f4fbf09ec54f40a8f36c284679ef0e12"
  },
  {
    "url": "assets/js/14.8d799600.js",
    "revision": "0c300e9a6533c7dcacfdca87e743219e"
  },
  {
    "url": "assets/js/15.75d67d2c.js",
    "revision": "cda61df4a25e95130f9869f011181832"
  },
  {
    "url": "assets/js/16.5a04131a.js",
    "revision": "5fec857e6524e1e6e2b1dc9940432be5"
  },
  {
    "url": "assets/js/17.c7ca52bb.js",
    "revision": "ff86575cfe45c10cc891b3f955175909"
  },
  {
    "url": "assets/js/18.f1e5a1b7.js",
    "revision": "4116b7810bf48203ca3251dad4eb9724"
  },
  {
    "url": "assets/js/19.566edd71.js",
    "revision": "16465577e14fcf9974b12390be29bbe5"
  },
  {
    "url": "assets/js/2.cc3555a3.js",
    "revision": "3a067f6b93f60cbe3fd36ad7dff67f0d"
  },
  {
    "url": "assets/js/20.2fb50d36.js",
    "revision": "fb2266c71b07f4d638efee43334e591f"
  },
  {
    "url": "assets/js/21.b8b9f50c.js",
    "revision": "858ae4fdd4ceb084a2c015e5cab6e517"
  },
  {
    "url": "assets/js/22.9687e59b.js",
    "revision": "f0c8d0f24ce31e5c81a9368fadb45d99"
  },
  {
    "url": "assets/js/23.660cdb3c.js",
    "revision": "2feea855fb3587bbc1eb8c6b872f3c89"
  },
  {
    "url": "assets/js/24.338b79e4.js",
    "revision": "87994bbacd9a87a6e497de2d7093b635"
  },
  {
    "url": "assets/js/25.590c9d60.js",
    "revision": "8f4e9b4faffa4ba452cbb8d0e286ceac"
  },
  {
    "url": "assets/js/26.07091736.js",
    "revision": "5d18838d203faf16edebbeba1da1bfc0"
  },
  {
    "url": "assets/js/27.7dfc482c.js",
    "revision": "ad333006e4d81ce315f731de92f297fb"
  },
  {
    "url": "assets/js/3.f4f051f8.js",
    "revision": "9cf70c4cdffccd9b147b90a856d5fdf7"
  },
  {
    "url": "assets/js/4.8ed62a6f.js",
    "revision": "b0b2da157d0752ebe318de8b19bca15f"
  },
  {
    "url": "assets/js/5.24557e6b.js",
    "revision": "3a88cb670fc8ff91980a9ce0bd7f6ceb"
  },
  {
    "url": "assets/js/6.9088afc6.js",
    "revision": "220a258fee6358aa3e2e376e2622884a"
  },
  {
    "url": "assets/js/7.16c9f5f0.js",
    "revision": "ef5e23ef9cb414ead3d7cdb72b34af88"
  },
  {
    "url": "assets/js/8.6b8ffaa1.js",
    "revision": "c3bf63c96e475ffb4733af72f9578c8c"
  },
  {
    "url": "assets/js/9.043ee7d3.js",
    "revision": "856a90805d06ad062188cd4a138e97a4"
  },
  {
    "url": "assets/js/app.b8f1e787.js",
    "revision": "ab1124ff80a0fb39a888935141c7787d"
  },
  {
    "url": "demo.html",
    "revision": "7676312c14dafe8a96ee8e609c4661a4"
  },
  {
    "url": "en/about.html",
    "revision": "04e63954234e4f5d9bb2e181305ed039"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "3add50bd4046779f3ac6a262100171dc"
  },
  {
    "url": "en/guide/config.html",
    "revision": "7447bbd3d5c604b2794a487c0ef414bb"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "3c6a42dc3d3db07b9276c5674e1c5a0b"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "07906e81d12ea1d16f36c47552643cc7"
  },
  {
    "url": "en/guide/index.html",
    "revision": "ace786494285c57be6ed1f24e6afdf15"
  },
  {
    "url": "en/guide/page.html",
    "revision": "9b1b0d89c04c94dd42f03609d00ea666"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "e906507c754650bc44706a46ed6547e8"
  },
  {
    "url": "en/guide/Todo.html",
    "revision": "906aea126a697356335cd75e696be727"
  },
  {
    "url": "en/index.html",
    "revision": "db671a1ef5ec4c962b0df89fa3411206"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "ad2cad99ac2279548464194cde8bc3f6"
  },
  {
    "url": "guide/config.html",
    "revision": "c7e800a22214e9153fb99f830174487f"
  },
  {
    "url": "guide/faq.html",
    "revision": "0315a417e2f16ceef987f7364e609ed8"
  },
  {
    "url": "guide/icon.html",
    "revision": "e33357540cad92fb1c56b1b715b39622"
  },
  {
    "url": "guide/index.html",
    "revision": "956344b396e9104d124a3753437a85d5"
  },
  {
    "url": "guide/page.html",
    "revision": "d2ba62519ee52d78ddec23df59bfdfe5"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "e6dd28494343e025475ae921f57eb4fa"
  },
  {
    "url": "guide/Todo.html",
    "revision": "282cd8abd45cd06111570a448f63f03f"
  },
  {
    "url": "index.html",
    "revision": "69545dcd2e1852e808874bf0a81d45f8"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
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
