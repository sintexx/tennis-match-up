if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const a=s=>i(s,r),u={module:{uri:r},exports:t,require:a};e[r]=Promise.all(l.map((s=>u[s]||a(s)))).then((s=>(n(...s),t)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/focus-visible-9c13edeb.js",revision:null},{url:"assets/focus-visible-legacy-b3e947fe.js",revision:null},{url:"assets/index-2b0c247d.js",revision:null},{url:"assets/index-7acab36f.css",revision:null},{url:"assets/index-legacy-ad627f3f.js",revision:null},{url:"assets/index9-8df2b2a8.js",revision:null},{url:"assets/index9-legacy-2e9b5f57.js",revision:null},{url:"assets/input-shims-afb6f894.js",revision:null},{url:"assets/input-shims-legacy-8646ce22.js",revision:null},{url:"assets/ios.transition-2c9b7b65.js",revision:null},{url:"assets/ios.transition-legacy-c838e768.js",revision:null},{url:"assets/keyboard2-0262b06e.js",revision:null},{url:"assets/keyboard2-legacy-43d4f182.js",revision:null},{url:"assets/md.transition-aea60a17.js",revision:null},{url:"assets/md.transition-legacy-948947a2.js",revision:null},{url:"assets/polyfills-legacy-6c31ad48.js",revision:null},{url:"assets/status-tap-16aebb1e.js",revision:null},{url:"assets/status-tap-legacy-7a8ed0d9.js",revision:null},{url:"assets/swipe-back-ab8e8007.js",revision:null},{url:"assets/swipe-back-legacy-58b87f83.js",revision:null},{url:"index.html",revision:"bfe427027fc698dc5e7836eb2a4b1cb6"},{url:"registerSW.js",revision:"a1805e88db0b182d055f53888d7effc1"},{url:"manifest.webmanifest",revision:"d17ceceb6c2612b36a6a3fb789b9c036"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
