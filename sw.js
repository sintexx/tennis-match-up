if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>i(s,r),a={module:{uri:r},exports:t,require:u};e[r]=Promise.all(l.map((s=>a[s]||u(s)))).then((s=>(n(...s),t)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/focus-visible-9c13edeb.js",revision:null},{url:"assets/focus-visible-legacy-b3e947fe.js",revision:null},{url:"assets/index-032c8390.css",revision:null},{url:"assets/index-650ad47f.js",revision:null},{url:"assets/index-legacy-9a640f68.js",revision:null},{url:"assets/index9-f82f0db4.js",revision:null},{url:"assets/index9-legacy-01111c34.js",revision:null},{url:"assets/input-shims-913a6c6f.js",revision:null},{url:"assets/input-shims-legacy-99568c27.js",revision:null},{url:"assets/ios.transition-53c953f5.js",revision:null},{url:"assets/ios.transition-legacy-416aed83.js",revision:null},{url:"assets/keyboard2-205169a2.js",revision:null},{url:"assets/keyboard2-legacy-55d3908b.js",revision:null},{url:"assets/md.transition-36b182f8.js",revision:null},{url:"assets/md.transition-legacy-d4435714.js",revision:null},{url:"assets/polyfills-legacy-6c31ad48.js",revision:null},{url:"assets/status-tap-9c40790b.js",revision:null},{url:"assets/status-tap-legacy-0928f816.js",revision:null},{url:"assets/swipe-back-2d44113e.js",revision:null},{url:"assets/swipe-back-legacy-d131810c.js",revision:null},{url:"index.html",revision:"d3a0361448fd1ca35c35690429d0cb7c"},{url:"registerSW.js",revision:"a1805e88db0b182d055f53888d7effc1"},{url:"manifest.webmanifest",revision:"d17ceceb6c2612b36a6a3fb789b9c036"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
