import{G as R,i as O,c as V}from"./index-dc8a9e37.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const Y=(t,n,c,s)=>{const o=F(t)?{capture:!!s.capture,passive:!!s.passive}:!!s.capture;let r,a;return t.__zone_symbol__addEventListener?(r="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(r="addEventListener",a="removeEventListener"),t[r](n,c,o),()=>{t[a](n,c,o)}},F=t=>{if(M===void 0)try{const n=Object.defineProperty({},"passive",{get:()=>{M=!0}});t.addEventListener("optsTest",()=>{},n)}catch(n){M=!1}return!!M};let M;const j=2e3,q=(t,n,c,s,o)=>{let r,a,p,l,f,i,v,g=0;const u=d=>{g=Date.now()+j,n(d)&&(!a&&c&&(a=Y(t,"touchmove",c,o)),p||(p=Y(d.target,"touchend",e,o)),l||(l=Y(d.target,"touchcancel",e,o)))},X=d=>{g>Date.now()||n(d)&&(!i&&c&&(i=Y(G(t),"mousemove",c,o)),v||(v=Y(G(t),"mouseup",y,o)))},e=d=>{h(),s&&s(d)},y=d=>{T(),s&&s(d)},h=()=>{a&&a(),p&&p(),l&&l(),a=p=l=void 0},T=()=>{i&&i(),v&&v(),i=v=void 0},S=()=>{h(),T()},_=(d=!0)=>{d?(r||(r=Y(t,"touchstart",u,o)),f||(f=Y(t,"mousedown",X,o))):(r&&r(),f&&f(),r=f=void 0,S())};return{enable:_,stop:S,destroy:()=>{_(!1),s=c=n=void 0}}},G=t=>t instanceof Document?t:t.ownerDocument,H=(t,n,c)=>{const s=c*(Math.PI/180),o=t==="x",r=Math.cos(s),a=n*n;let p=0,l=0,f=!1,i=0;return{start(v,g){p=v,l=g,i=0,f=!0},detect(v,g){if(!f)return!1;const u=v-p,X=g-l,e=u*u+X*X;if(e<a)return!1;const y=Math.sqrt(e),h=(o?u:X)/y;return h>r?i=1:h<-r?i=-1:i=0,f=!1,!0},isGesture(){return i!==0},getDirection(){return i}}},I=t=>{let n=!1,c=!1,s=!0,o=!1;const r=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),a=r.canStart,p=r.onWillStart,l=r.onStart,f=r.onEnd,i=r.notCaptured,v=r.onMove,g=r.threshold,u=r.passive,X=r.blurOnStart,e={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},y=H(r.direction,r.threshold,r.maxAngle),h=R.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),T=m=>{const w=A(m);return c||!s||(x(m,e),e.startX=e.currentX,e.startY=e.currentY,e.startTime=e.currentTime=w,e.velocityX=e.velocityY=e.deltaX=e.deltaY=0,e.event=m,a&&a(e)===!1)||(h.release(),!h.start())?!1:(c=!0,g===0?E():(y.start(e.startX,e.startY),!0))},S=m=>{if(n){!o&&s&&(o=!0,C(e,m),requestAnimationFrame(_));return}C(e,m),y.detect(e.currentX,e.currentY)&&(!y.isGesture()||!E())&&W()},_=()=>{n&&(o=!1,v&&v(e))},E=()=>h.capture()?(n=!0,s=!1,e.startX=e.currentX,e.startY=e.currentY,e.startTime=e.currentTime,p?p(e).then(b):b(),!0):!1,d=()=>{if(typeof document<"u"){const m=document.activeElement;m!=null&&m.blur&&m.blur()}},b=()=>{X&&d(),l&&l(e),s=!0},D=()=>{n=!1,c=!1,o=!1,s=!0,h.release()},L=m=>{const w=n,z=s;if(D(),!!z){if(C(e,m),w){f&&f(e);return}i&&i(e)}},P=q(r.el,T,S,L,{capture:!1,passive:u}),W=()=>{D(),P.stop(),i&&i(e)};return{enable(m=!0){m||(n&&L(void 0),D()),P.enable(m)},destroy(){h.destroy(),P.destroy()}}},C=(t,n)=>{if(!n)return;const c=t.currentX,s=t.currentY,o=t.currentTime;x(n,t);const r=t.currentX,a=t.currentY,l=(t.currentTime=A(n))-o;if(l>0&&l<100){const f=(r-c)/l,i=(a-s)/l;t.velocityX=f*.7+t.velocityX*.3,t.velocityY=i*.7+t.velocityY*.3}t.deltaX=r-t.startX,t.deltaY=a-t.startY,t.event=n},x=(t,n)=>{let c=0,s=0;if(t){const o=t.changedTouches;if(o&&o.length>0){const r=o[0];c=r.clientX,s=r.clientY}else t.pageX!==void 0&&(c=t.pageX,s=t.pageY)}n.currentX=c,n.currentY=s},A=t=>t.timeStamp||Date.now();/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const k=(t,n,c,s,o)=>{const r=t.ownerDocument.defaultView;let a=O(t);const p=u=>{const{startX:e}=u;return a?e>=r.innerWidth-50:e<=50},l=u=>a?-u.deltaX:u.deltaX,f=u=>a?-u.velocityX:u.velocityX;return I({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:u=>(a=O(t),p(u)&&n()),onStart:c,onMove:u=>{const e=l(u)/r.innerWidth;s(e)},onEnd:u=>{const X=l(u),e=r.innerWidth,y=X/e,h=f(u),T=e/2,S=h>=0&&(h>.2||X>T),E=(S?1-y:y)*e;let d=0;if(E>5){const b=E/Math.abs(h);d=Math.min(b,540)}o(S,y<=0?.01:V(0,y,.9999),d)}})};export{k as createSwipeBackGesture};
