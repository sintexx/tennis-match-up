if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const t=s=>i(s,r),u={module:{uri:r},exports:a,require:t};e[r]=Promise.all(l.map((s=>u[s]||t(s)))).then((s=>(n(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/focus-visible-9c13edeb.js",revision:null},{url:"assets/focus-visible-legacy-b3e947fe.js",revision:null},{url:"assets/index-7acab36f.css",revision:null},{url:"assets/index-dc8a9e37.js",revision:null},{url:"assets/index-legacy-950c13aa.js",revision:null},{url:"assets/index9-f49e11b2.js",revision:null},{url:"assets/index9-legacy-c2565a02.js",revision:null},{url:"assets/input-shims-a8bd7dc8.js",revision:null},{url:"assets/input-shims-legacy-3fa4f2c1.js",revision:null},{url:"assets/ios.transition-a4a07b90.js",revision:null},{url:"assets/ios.transition-legacy-7792374a.js",revision:null},{url:"assets/keyboard2-2dbb5311.js",revision:null},{url:"assets/keyboard2-legacy-e2919224.js",revision:null},{url:"assets/md.transition-7220b57e.js",revision:null},{url:"assets/md.transition-legacy-87047226.js",revision:null},{url:"assets/polyfills-legacy-6c31ad48.js",revision:null},{url:"assets/status-tap-dd4d24b8.js",revision:null},{url:"assets/status-tap-legacy-24e50acd.js",revision:null},{url:"assets/swipe-back-5b824ca1.js",revision:null},{url:"assets/swipe-back-legacy-bcaeaf92.js",revision:null},{url:"index.html",revision:"7c37ad82d3cb56b305b1e362011abc2a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"3414ad25c3e4ae39a0461a40f7d999bf"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
