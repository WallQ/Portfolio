if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const o=e=>a(e,n),f={module:{uri:n},exports:c,require:o};s[n]=Promise.all(i.map((e=>f[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/gb.88169c65.svg",revision:null},{url:"assets/github.45262793.svg",revision:null},{url:"assets/index.46b7cf38.js",revision:null},{url:"assets/index.a30addcf.css",revision:null},{url:"assets/linkedin.71d3e25e.svg",revision:null},{url:"assets/profile_picture.0741e468.webp",revision:null},{url:"assets/pt.94f8cd28.svg",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"data/projects.json",revision:"781ff1751916d97782c6a3eb5e2f7799"},{url:"docs/cv.pdf",revision:"e5d0b71a41a2b246eb1dd394ce509690"},{url:"favicon.svg",revision:"4cb5345902e02e0b2a2cae112c73359a"},{url:"fonts/Inter-Black.woff",revision:"d0b121f3a9d3d88afdfd6902d31ee9a0"},{url:"fonts/Inter-Black.woff2",revision:"661569afe57a38e1529a775a465da20b"},{url:"fonts/Inter-Bold.woff",revision:"99a0d9a7e4c99c17bfdd94a22a5cf94e"},{url:"fonts/Inter-Bold.woff2",revision:"444a7284663a3bc886683eb81450b294"},{url:"fonts/Inter-ExtraBold.woff",revision:"ab70688a1c9d6525584b123575f6c0a5"},{url:"fonts/Inter-ExtraBold.woff2",revision:"37da9eecf61ebced804b266b14eef98e"},{url:"fonts/Inter-ExtraLight.woff",revision:"dd19efda9c6e88ad83a5b052915899f7"},{url:"fonts/Inter-ExtraLight.woff2",revision:"b3b2ed6a20c538e9c809f4df5c04ac2a"},{url:"fonts/Inter-Light.woff",revision:"5d3776eb78374b0ebbce639adadf73d1"},{url:"fonts/Inter-Light.woff2",revision:"780dd2adb71f18d7a357ab7f65e881d6"},{url:"fonts/Inter-Medium.woff",revision:"c0638bea87a05fdfa2bb3bba2efe54e4"},{url:"fonts/Inter-Medium.woff2",revision:"75db5319e7e87c587019a5df08d7272c"},{url:"fonts/Inter-Regular.woff",revision:"3ac83020fe53b617b79b5e2ad66764af"},{url:"fonts/Inter-Regular.woff2",revision:"dc131113894217b5031000575d9de002"},{url:"fonts/Inter-SemiBold.woff",revision:"66a68ffab2bf40553e847e8f025f75be"},{url:"fonts/Inter-SemiBold.woff2",revision:"007ad31a53f4ab3f58ee74f2308482ce"},{url:"fonts/Inter-Thin.woff",revision:"b068b7189120a6626e3cfe2a8b917d0f"},{url:"fonts/Inter-Thin.woff2",revision:"d52e5e38715502616522eb3e9963b69b"},{url:"icons/apple-icon-180.png",revision:"e349ba644c4f27b5103bdbe3d5a351af"},{url:"icons/apple-splash-1125-2436.jpg",revision:"fcc0f1645c6486157c6372448cc59b30"},{url:"icons/apple-splash-1136-640.jpg",revision:"65e13e92c6e0f66e00c5f9a80f1b05d5"},{url:"icons/apple-splash-1170-2532.jpg",revision:"a0b4e29b2be58dec32080bb467df3548"},{url:"icons/apple-splash-1179-2556.jpg",revision:"1fdaefc7376407fbd963f04dee889531"},{url:"icons/apple-splash-1242-2208.jpg",revision:"0ea39cbd0c65c3c9b8e885366225895f"},{url:"icons/apple-splash-1242-2688.jpg",revision:"d66fcea2960dd9b7df829c81bd8675ca"},{url:"icons/apple-splash-1284-2778.jpg",revision:"f9836d5c06dcc03c206cf390e6637685"},{url:"icons/apple-splash-1290-2796.jpg",revision:"737d55969c4f271b0aba3a5da8d913e8"},{url:"icons/apple-splash-1334-750.jpg",revision:"cec75ed09eeb9b6dedb740c4ca6d392c"},{url:"icons/apple-splash-1536-2048.jpg",revision:"116e417e6f212e2c31b4a8d8de6eb34b"},{url:"icons/apple-splash-1620-2160.jpg",revision:"93ea58f68260c291267fe44d4f555313"},{url:"icons/apple-splash-1668-2224.jpg",revision:"b59c5ad4bad219b5d4c196e3ac96c675"},{url:"icons/apple-splash-1668-2388.jpg",revision:"8d718427b15667109d79c92db3a51cef"},{url:"icons/apple-splash-1792-828.jpg",revision:"d57fb1a4a802f81a7f62c0aaa89d4d81"},{url:"icons/apple-splash-2048-1536.jpg",revision:"8dd60fbe00cfb9959fefba26b4dcdde2"},{url:"icons/apple-splash-2048-2732.jpg",revision:"d48bb3b5880e6a988fc15a7b4fea8021"},{url:"icons/apple-splash-2160-1620.jpg",revision:"7a0ce33dbfc30fb8d4bbecb2f0dadfdd"},{url:"icons/apple-splash-2208-1242.jpg",revision:"de20018faace7cc99b19b404a7c84cf5"},{url:"icons/apple-splash-2224-1668.jpg",revision:"de433fc6bc9c2a66ce7bff854a844dc8"},{url:"icons/apple-splash-2388-1668.jpg",revision:"bd7503c260483e01bdbe2de861eedfd4"},{url:"icons/apple-splash-2436-1125.jpg",revision:"d21d5e7582e41f41c03a56389320e688"},{url:"icons/apple-splash-2532-1170.jpg",revision:"23f97d2b2ad05feb7a262d67e6f0b7db"},{url:"icons/apple-splash-2556-1179.jpg",revision:"50929297b6755dd712059cdee52d3af9"},{url:"icons/apple-splash-2688-1242.jpg",revision:"63d6ab3b71b0212d0e00705b4e1c1989"},{url:"icons/apple-splash-2732-2048.jpg",revision:"eb44e997a1f58caa733080e1bfdf87cc"},{url:"icons/apple-splash-2778-1284.jpg",revision:"5edf6435d757a7ea35fbf8ba9d3db298"},{url:"icons/apple-splash-2796-1290.jpg",revision:"7a163c6ffd5f76bd27b8a02fe7ce60c7"},{url:"icons/apple-splash-640-1136.jpg",revision:"1180b92ec907b84cbb16a29eb44d7e5a"},{url:"icons/apple-splash-750-1334.jpg",revision:"da351f5e063467b398a975598f534c03"},{url:"icons/apple-splash-828-1792.jpg",revision:"fd5312f8e26aedc33dc6d022bfd82fc3"},{url:"icons/manifest-icon-192.maskable.png",revision:"3978e70a7d39432e3ec7c698119ff6b1"},{url:"icons/manifest-icon-512.maskable.png",revision:"e4993c8a8a5100eb905652698130f3a7"},{url:"icons/safari-pinned-tab.svg",revision:"4cb5345902e02e0b2a2cae112c73359a"},{url:"images/projects/Basicamente_preview.webp",revision:"04e65b6906dc59185cef7d585212c4cf"},{url:"images/projects/Birthday-Countdown_preview.webp",revision:"6f5658557aa5ecd64fc9b4fcc49bd566"},{url:"images/projects/League-Searcher_preview.webp",revision:"0eaa06d9e5edb37d621d7c273bf63b29"},{url:"images/projects/PWA-Booking_preview.webp",revision:"0bda8c588498e2a7018f5c323b5704da"},{url:"images/projects/Weather_preview.webp",revision:"fc9736dd64340a7210e8843b686fd48d"},{url:"index.html",revision:"607219585d1021e676ee67b068c46820"},{url:"manifest.webmanifest",revision:"901d6cd11af8c222ae165acb50c4b2ae"},{url:"robots.txt",revision:"aac240d1215a044b865e0faad888f048"},{url:"favicon.svg",revision:"4cb5345902e02e0b2a2cae112c73359a"},{url:"robots.txt",revision:"aac240d1215a044b865e0faad888f048"},{url:"icons/manifest-icon-192.maskable.png",revision:"3978e70a7d39432e3ec7c698119ff6b1"},{url:"icons/manifest-icon-512.maskable.png",revision:"e4993c8a8a5100eb905652698130f3a7"},{url:"manifest.webmanifest",revision:"901d6cd11af8c222ae165acb50c4b2ae"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
