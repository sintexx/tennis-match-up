if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>i(s,r),a={module:{uri:r},exports:t,require:u};e[r]=Promise.all(l.map((s=>a[s]||u(s)))).then((s=>(n(...s),t)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/focus-visible-9c13edeb.js",revision:null},{url:"assets/focus-visible-legacy-b3e947fe.js",revision:null},{url:"assets/index-7acab36f.css",revision:null},{url:"assets/index-9909d58d.js",revision:null},{url:"assets/index-legacy-89495d3d.js",revision:null},{url:"assets/index3-3db515ac.js",revision:null},{url:"assets/index3-legacy-063c1c89.js",revision:null},{url:"assets/index9-782d2e8f.js",revision:null},{url:"assets/index9-legacy-4e3a7e43.js",revision:null},{url:"assets/input-shims-4a780133.js",revision:null},{url:"assets/input-shims-legacy-07bb8f12.js",revision:null},{url:"assets/ios.transition-57ec8c4b.js",revision:null},{url:"assets/ios.transition-legacy-cff67f9f.js",revision:null},{url:"assets/keyboard2-f836cabe.js",revision:null},{url:"assets/keyboard2-legacy-22f00d7a.js",revision:null},{url:"assets/md.transition-d0e0119a.js",revision:null},{url:"assets/md.transition-legacy-3a9ed597.js",revision:null},{url:"assets/polyfills-legacy-6c31ad48.js",revision:null},{url:"assets/status-tap-da227719.js",revision:null},{url:"assets/status-tap-legacy-270a0a8e.js",revision:null},{url:"assets/swipe-back-8bf75110.js",revision:null},{url:"assets/swipe-back-legacy-e6559ccb.js",revision:null},{url:"index.html",revision:"58415f426e0ad75e284c9ee43f7b619c"},{url:"registerSW.js",revision:"a1805e88db0b182d055f53888d7effc1"},{url:"manifest.webmanifest",revision:"d17ceceb6c2612b36a6a3fb789b9c036"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
