var at=Object.defineProperty;var ft=(n,e,t)=>e in n?at(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var A=(n,e,t)=>(ft(n,typeof e!="symbol"?e+"":e,t),t);const dt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}};dt();function I(){}const Qe=n=>n;function ht(n,e){for(const t in e)n[t]=e[t];return n}function Xe(n){return n()}function ze(){return Object.create(null)}function K(n){n.forEach(Xe)}function Ie(n){return typeof n=="function"}function J(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function pt(n){return Object.keys(n).length===0}function Ze(n,...e){if(n==null)return I;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function mt(n,e,t){n.$$.on_destroy.push(Ze(e,t))}function _t(n,e,t,r){if(n){const s=xe(n,e,t,r);return n[0](s)}}function xe(n,e,t,r){return n[1]&&r?ht(t.ctx.slice(),n[1](r(e))):t.ctx}function gt(n,e,t,r){if(n[2]&&r){const s=n[2](r(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],l=Math.max(e.dirty.length,s.length);for(let c=0;c<l;c+=1)i[c]=e.dirty[c]|s[c];return i}return e.dirty|s}return e.dirty}function vt(n,e,t,r,s,i){if(s){const l=xe(e,t,r,i);n.p(l,s)}}function bt(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}const et=typeof window!="undefined";let yt=et?()=>window.performance.now():()=>Date.now(),Se=et?n=>requestAnimationFrame(n):I;const ne=new Set;function tt(n){ne.forEach(e=>{e.c(n)||(ne.delete(e),e.f())}),ne.size!==0&&Se(tt)}function kt(n){let e;return ne.size===0&&Se(tt),{promise:new Promise(t=>{ne.add(e={c:n,f:t})}),abort(){ne.delete(e)}}}function v(n,e){n.appendChild(e)}function nt(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function wt(n){const e=b("style");return Tt(nt(n),e),e.sheet}function Tt(n,e){v(n.head||n,e)}function E(n,e,t){n.insertBefore(e,t||null)}function T(n){n.parentNode.removeChild(n)}function rt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function b(n){return document.createElement(n)}function j(n){return document.createTextNode(n)}function P(){return j(" ")}function Le(){return j("")}function U(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function g(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function ye(n){return n===""?null:+n}function Et(n){return Array.from(n.childNodes)}function ve(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function ee(n,e){n.value=e==null?"":e}function Pe(n,e){for(let t=0;t<n.options.length;t+=1){const r=n.options[t];if(r.__value===e){r.selected=!0;return}}n.selectedIndex=-1}function It(n){const e=n.querySelector(":checked")||n.options[0];return e&&e.__value}function re(n,e,t){n.classList[t?"add":"remove"](e)}function st(n,e,t=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(n,t,!1,e),r}const _e=new Map;let ge=0;function St(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function Lt(n,e){const t={stylesheet:wt(e),rules:{}};return _e.set(n,t),t}function Ct(n,e,t,r,s,i,l,c=0){const f=16.666/r;let o=`{
`;for(let _=0;_<=1;_+=f){const y=e+(t-e)*i(_);o+=_*100+`%{${l(y,1-y)}}
`}const h=o+`100% {${l(t,1-t)}}
}`,d=`__svelte_${St(h)}_${c}`,u=nt(n),{stylesheet:p,rules:a}=_e.get(u)||Lt(u,n);a[d]||(a[d]=!0,p.insertRule(`@keyframes ${d} ${h}`,p.cssRules.length));const m=n.style.animation||"";return n.style.animation=`${m?`${m}, `:""}${d} ${r}ms linear ${s}ms 1 both`,ge+=1,d}function $e(n,e){const t=(n.style.animation||"").split(", "),r=t.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),s=t.length-r.length;s&&(n.style.animation=r.join(", "),ge-=s,ge||Nt())}function Nt(){Se(()=>{ge||(_e.forEach(n=>{const{stylesheet:e}=n;let t=e.cssRules.length;for(;t--;)e.deleteRule(t);n.rules={}}),_e.clear())})}let ae;function ue(n){ae=n}function it(){if(!ae)throw new Error("Function called outside component initialization");return ae}function lt(n){it().$$.on_mount.push(n)}function ot(){const n=it();return(e,t)=>{const r=n.$$.callbacks[e];if(r){const s=st(e,t);r.slice().forEach(i=>{i.call(n,s)})}}}function fe(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(r=>r.call(this,e))}const ce=[],F=[],pe=[],Ae=[],Ot=Promise.resolve();let we=!1;function zt(){we||(we=!0,Ot.then(ct))}function q(n){pe.push(n)}const ke=new Set;let de=0;function ct(){const n=ae;do{for(;de<ce.length;){const e=ce[de];de++,ue(e),Pt(e.$$)}for(ue(null),ce.length=0,de=0;F.length;)F.pop()();for(let e=0;e<pe.length;e+=1){const t=pe[e];ke.has(t)||(ke.add(t),t())}pe.length=0}while(ce.length);for(;Ae.length;)Ae.pop()();we=!1,ke.clear(),ue(n)}function Pt(n){if(n.fragment!==null){n.update(),K(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(q)}}let le;function $t(){return le||(le=Promise.resolve(),le.then(()=>{le=null})),le}function Re(n,e,t){n.dispatchEvent(st(`${e?"intro":"outro"}${t}`))}const me=new Set;let X;function Z(){X={r:0,c:[],p:X}}function x(){X.r||K(X.c),X=X.p}function k(n,e){n&&n.i&&(me.delete(n),n.i(e))}function O(n,e,t,r){if(n&&n.o){if(me.has(n))return;me.add(n),X.c.push(()=>{me.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}}const At={duration:0};function W(n,e,t){let r=e(n,t),s=!1,i,l,c=0;function f(){i&&$e(n,i)}function o(){const{delay:d=0,duration:u=300,easing:p=Qe,tick:a=I,css:m}=r||At;m&&(i=Ct(n,0,1,u,d,p,m,c++)),a(0,1);const _=yt()+d,y=_+u;l&&l.abort(),s=!0,q(()=>Re(n,!0,"start")),l=kt(z=>{if(s){if(z>=y)return a(1,0),Re(n,!0,"end"),f(),s=!1;if(z>=_){const S=p((z-_)/u);a(S,1-S)}}return s})}let h=!1;return{start(){h||(h=!0,$e(n),Ie(r)?(r=r(),$t().then(o)):o())},invalidate(){h=!1},end(){s&&(f(),s=!1)}}}function B(n){n&&n.c()}function M(n,e,t,r){const{fragment:s,on_mount:i,on_destroy:l,after_update:c}=n.$$;s&&s.m(e,t),r||q(()=>{const f=i.map(Xe).filter(Ie);l?l.push(...f):K(f),n.$$.on_mount=[]}),c.forEach(q)}function Y(n,e){const t=n.$$;t.fragment!==null&&(K(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Rt(n,e){n.$$.dirty[0]===-1&&(ce.push(n),zt(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function V(n,e,t,r,s,i,l,c=[-1]){const f=ae;ue(n);const o=n.$$={fragment:null,ctx:null,props:i,update:I,not_equal:s,bound:ze(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:ze(),dirty:c,skip_bound:!1,root:e.target||f.$$.root};l&&l(o.root);let h=!1;if(o.ctx=t?t(n,e.props||{},(d,u,...p)=>{const a=p.length?p[0]:u;return o.ctx&&s(o.ctx[d],o.ctx[d]=a)&&(!o.skip_bound&&o.bound[d]&&o.bound[d](a),h&&Rt(n,d)),u}):[],o.update(),h=!0,K(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){const d=Et(e.target);o.fragment&&o.fragment.l(d),d.forEach(T)}else o.fragment&&o.fragment.c();e.intro&&k(n.$$.fragment),M(n,e.target,e.anchor,e.customElement),ct()}ue(f)}class G{$destroy(){Y(this,1),this.$destroy=I}$on(e,t){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Oe=class{constructor(e,t,r){A(this,"_clientName");A(this,"_serviceDescription");A(this,"_completionNote");A(this,"_priority");A(this,"_timeAdded");this._clientName=e,this._serviceDescription=t,this._priority=r,this._timeAdded=Date.now()}static fromJSON(e){const t=new Oe(e._clientName,e._serviceDescription,e._priority);return t._timeAdded=e._timeAdded,t._completionNote=e._completionNote,t}equals(e){return this._timeAdded===e._timeAdded}compareTo(e){const t=this._priority-e._priority;return t===0?this._timeAdded-e._timeAdded:t}get client(){return this._clientName}get description(){return this._serviceDescription}get completed(){return this._completionNote!==void 0}complete(e){if(this.completed)throw new Error("Task already completed");this._completionNote=e}get completionNote(){return this._completionNote}get priority(){return this._priority}};let H=Oe;A(H,"HIGH_PRIORITY",1),A(H,"MEDIUM_PRIORITY",2),A(H,"LOW_PRIORITY",3);function Dt(n){let e,t,r,s,i;const l=n[5].default,c=_t(l,n,n[4],null);return{c(){e=b("button"),c&&c.c(),g(e,"tabindex","0"),e.disabled=t=!n[0],g(e,"class","svelte-exf1u0"),re(e,"active",!n[0])},m(f,o){E(f,e,o),c&&c.m(e,null),n[7](e),r=!0,s||(i=[U(e,"click",n[6]),U(e,"click",n[8])],s=!0)},p(f,[o]){c&&c.p&&(!r||o&16)&&vt(c,l,f,f[4],r?gt(l,f[4],o,null):bt(f[4]),null),(!r||o&1&&t!==(t=!f[0]))&&(e.disabled=t),o&1&&re(e,"active",!f[0])},i(f){r||(k(c,f),r=!0)},o(f){O(c,f),r=!1},d(f){f&&T(e),c&&c.d(f),n[7](null),s=!1,K(i)}}}function Ht(n,e,t){let{$$slots:r={},$$scope:s}=e,{active:i=!0}=e,{error:l=""}=e,c=null;const f=u=>{const p=u.target,a=Number.parseFloat(getComputedStyle(p).transitionDuration.replace("s",""))*1e3;p.style.animationDuration=`${a*2}ms`,p.style.setProperty("--transition-delay",`${a*2}ms`)};function o(u){fe.call(this,n,u)}function h(u){F[u?"unshift":"push"](()=>{c=u,t(1,c)})}const d=u=>f(u);return n.$$set=u=>{"active"in u&&t(0,i=u.active),"error"in u&&t(3,l=u.error),"$$scope"in u&&t(4,s=u.$$scope)},n.$$.update=()=>{var u;n.$$.dirty&10&&((u=c==null?void 0:c.style)==null||u.setProperty("--error",`"${l}"`)),n.$$.dirty&8&&t(0,i=!l)},[i,c,f,l,s,r,o,h,d]}class Ce extends G{constructor(e){super();V(this,e,Ht,Dt,J,{active:0,error:3})}}function Ut(n){const e=n-1;return e*e*e+1}function oe(n){return-n*(n-2)}function be(n,{delay:e=0,duration:t=400,easing:r=Qe}={}){const s=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:i=>`opacity: ${i*s}`}}function qt(n,{delay:e=0,duration:t=400,easing:r=Ut,x:s=0,y:i=0,opacity:l=0}={}){const c=getComputedStyle(n),f=+c.opacity,o=c.transform==="none"?"":c.transform,h=f*(1-l);return{delay:e,duration:t,easing:r,css:(d,u)=>`
			transform: ${o} translate(${(1-d)*s}px, ${(1-d)*i}px);
			opacity: ${f-h*u}`}}function Mt(n){let e;return{c(){e=j("Submit")},m(t,r){E(t,e,r)},d(t){t&&T(e)}}}function De(n){let e,t,r,s,i,l,c,f,o,h,d,u,p,a,m,_,y,z,S;return m=new Ce({props:{active:Jt,error:n[0],$$slots:{default:[Mt]},$$scope:{ctx:n}}}),m.$on("click",n[9]),m.$on("click",n[5]),{c(){e=b("div"),t=b("h1"),r=j("For "),s=b("input"),i=P(),l=b("p"),c=b("textarea"),f=P(),o=b("select"),h=b("option"),h.textContent="select priority",d=b("option"),d.textContent="!",u=b("option"),u.textContent="!!",p=b("option"),p.textContent="!!!",a=P(),B(m.$$.fragment),g(s,"placeholder","client name"),g(s,"class","svelte-vam8h3"),g(t,"class","svelte-vam8h3"),g(c,"placeholder","task description"),h.disabled=!0,h.__value="-1",h.value=h.__value,h.selected=!0,d.__value="3",d.value=d.__value,u.__value="2",u.value=u.__value,p.__value="1",p.value=p.__value,g(o,"data-value","-1")},m(w,C){E(w,e,C),v(e,t),v(t,r),v(t,s),n[6](s),v(e,i),v(e,l),v(l,c),n[7](c),v(e,f),v(e,o),v(o,h),v(o,d),v(o,u),v(o,p),n[8](o),v(e,a),M(m,e,null),y=!0,z||(S=U(o,"change",jt),z=!0)},p(w,C){const L={};C&1&&(L.error=w[0]),C&4096&&(L.$$scope={dirty:C,ctx:w}),m.$set(L)},i(w){y||(k(m.$$.fragment,w),_||q(()=>{_=W(e,qt,{y:-50,duration:500}),_.start()}),y=!0)},o(w){O(m.$$.fragment,w),y=!1},d(w){w&&T(e),n[6](null),n[7](null),n[8](null),Y(m),z=!1,S()}}}function Yt(n){let e=n[4],t,r,s=De(n);return{c(){s.c(),t=Le()},m(i,l){s.m(i,l),E(i,t,l),r=!0},p(i,[l]){l&16&&J(e,e=i[4])?(Z(),O(s,1,1,I),x(),s=De(i),s.c(),k(s),s.m(t.parentNode,t)):s.p(i,l)},i(i){r||(k(s),r=!0)},o(i){O(s),r=!1},d(i){i&&T(t),s.d(i)}}}let Jt=!0;function jt(n){n.target,n.target.setAttribute("data-value",n.target.value)}function Bt(n,e,t){let r="",s,i,l,c=!0;const f=ot();function o(){t(0,r=""),s.removeEventListener("input",o),i.removeEventListener("input",o),l.removeEventListener("input",o)}function h(){s.value?i.value?l.value==="-1"?(l.focus(),t(0,r="Please select a priority"),l.addEventListener("input",o)):(f("submit",{task:new H(s.value,i.value,parseInt(l.value))}),s.removeEventListener("input",o),i.removeEventListener("input",o),l.removeEventListener("input",o),t(1,s.value="",s),t(2,i.value="",i),t(3,l.value="-1",l),t(4,c=!c)):(i.focus(),t(0,r="Please enter a description"),i.addEventListener("input",o)):(s.focus(),t(0,r="Please enter a client name"),s.addEventListener("input",o))}function d(m){F[m?"unshift":"push"](()=>{s=m,t(1,s)})}function u(m){F[m?"unshift":"push"](()=>{i=m,t(2,i)})}function p(m){F[m?"unshift":"push"](()=>{l=m,t(3,l)})}function a(m){fe.call(this,n,m)}return[r,s,i,l,c,h,d,u,p,a]}class Ft extends G{constructor(e){super();V(this,e,Bt,Yt,J,{})}}function Vt(n){let e,t,r,s;return t=new Ft({}),t.$on("submit",n[0]),{c(){e=b("div"),B(t.$$.fragment),g(e,"class","noborder svelte-1k1b3t4")},m(i,l){E(i,e,l),M(t,e,null),s=!0},p:I,i(i){s||(k(t.$$.fragment,i),r||q(()=>{r=W(e,be,{}),r.start()}),s=!0)},o(i){O(t.$$.fragment,i),s=!1},d(i){i&&T(e),Y(t)}}}function Gt(n){window.document.title="Tickets | Client";function e(t){fe.call(this,n,t)}return[e]}class Wt extends G{constructor(e){super();V(this,e,Gt,Vt,J,{})}}function He(n){let e,t="!".repeat(4-n[0].priority)+"",r;return{c(){e=b("span"),r=j(t),g(e,"class","priority svelte-1irja7f")},m(s,i){E(s,e,i),v(e,r)},p(s,i){i&1&&t!==(t="!".repeat(4-s[0].priority)+"")&&ve(r,t)},d(s){s&&T(e)}}}function Kt(n){let e;return{c(){e=b("span"),g(e,"class","input-height svelte-1irja7f")},m(t,r){E(t,e,r)},p:I,d(t){t&&T(e)}}}function Qt(n){let e,t,r;return{c(){e=b("input"),g(e,"placeholder","completion message")},m(s,i){E(s,e,i),t||(r=U(e,"input",n[8]),t=!0)},p:I,d(s){s&&T(e),t=!1,r()}}}function Xt(n){let e;return{c(){e=j("Complete")},m(t,r){E(t,e,r)},d(t){t&&T(e)}}}function Ue(n){let e,t;return{c(){e=b("div"),g(e,"class","alt svelte-1irja7f")},m(r,s){E(r,e,s)},i(r){t||q(()=>{t=W(e,be,{}),t.start()})},o:I,d(r){r&&T(e)}}}function Zt(n){let e,t,r,s,i,l=n[0].client+"",c,f,o,h,d=n[0].description+"",u,p,a,m,_,y,z,S=!n[0].completed&&He(n);function w(N,D){if(!N[0].completed)return Qt;if(!N[1])return Kt}let C=w(n),L=C&&C(n);a=new Ce({props:{active:xt,error:n[3]||n[0].completionNote,$$slots:{default:[Xt]},$$scope:{ctx:n}}}),a.$on("click",n[9]),a.$on("click",n[4]);let R=!n[1]&&!n[2]&&Ue();return{c(){e=b("div"),t=b("div"),r=b("div"),s=b("h1"),i=j("For "),c=j(l),f=P(),S&&S.c(),o=P(),h=b("p"),u=P(),L&&L.c(),p=P(),B(a.$$.fragment),y=P(),R&&R.c(),g(r,"class","noborder"),re(r,"tippytop",!n[1]),g(t,"class","top svelte-1irja7f"),g(e,"class","parent noborder svelte-1irja7f")},m(N,D){E(N,e,D),v(e,t),v(t,r),v(r,s),v(s,i),v(s,c),v(s,f),S&&S.m(s,null),v(r,o),v(r,h),h.innerHTML=d,v(r,u),L&&L.m(r,null),v(r,p),M(a,r,null),v(e,y),R&&R.m(e,null),z=!0},p(N,[D]){(!z||D&1)&&l!==(l=N[0].client+"")&&ve(c,l),N[0].completed?S&&(S.d(1),S=null):S?S.p(N,D):(S=He(N),S.c(),S.m(s,null)),(!z||D&1)&&d!==(d=N[0].description+"")&&(h.innerHTML=d),C===(C=w(N))&&L?L.p(N,D):(L&&L.d(1),L=C&&C(N),L&&(L.c(),L.m(r,p)));const ie={};D&9&&(ie.error=N[3]||N[0].completionNote),D&2048&&(ie.$$scope={dirty:D,ctx:N}),a.$set(ie),D&2&&re(r,"tippytop",!N[1]),!N[1]&&!N[2]?R?D&6&&k(R,1):(R=Ue(),R.c(),k(R,1),R.m(e,null)):R&&(R.d(1),R=null)},i(N){z||(k(a.$$.fragment,N),m||q(()=>{m=W(r,n[6],{}),m.start()}),_||q(()=>{_=W(t,n[5],{}),_.start()}),k(R),z=!0)},o(N){O(a.$$.fragment,N),z=!1},d(N){N&&T(e),S&&S.d(),L&&L.d(),Y(a),R&&R.d()}}}let xt=!0;function en(n,e,t){let{task:r}=e,{inCompletedList:s=!1}=e,{firstInCompletedList:i=!1}=e,{lastUncompletedTask:l=!1}=e;const c=ot();let f="";function o(a){const _=a.target.parentElement.querySelector("input");if(_.value){r.complete(_.value),_.value="",t(3,f=_.value);const y=r;window.setTimeout(()=>{c("taskcomplete",{task:y})},300),t(0,r)}else t(3,f="Please enter a completion message"),_.focus()}function h(a,{delay:m=0,duration:_=500}){if(s&&!i)return{delay:m,duration:_,easing:oe,css:y=>`transform: translateY(${(1-y)*-100}%)`};if(i){const y=document.querySelector(".tippytop");if(!y)return{delay:0,duration:_,easing:oe,css:L=>`transform: translateY(${(1-L)*-100}%)`};const z=a.parentElement,S=y.getBoundingClientRect(),w=z.getBoundingClientRect(),C=S.y-w.y;return console.log(S,w,C),{delay:0,duration:500,css:L=>`transform: translateY(${(1-L)*C}px)`,easing:oe}}return{delay:0,duration:500,css:y=>`
        transform: rotate(${(1-y)*5}deg);
        background-color: rgba(var(--accent), ${.1+y*.2});
        opacity: ${y};
      `,easing:oe}}function d(a,{delay:m=0,duration:_=500}){return s?{delay:0,duration:0}:{delay:0,duration:1e3,css:y=>`
        opacity: ${y};
      `,easing:oe}}const u=()=>{t(3,f="")};function p(a){fe.call(this,n,a)}return n.$$set=a=>{"task"in a&&t(0,r=a.task),"inCompletedList"in a&&t(1,s=a.inCompletedList),"firstInCompletedList"in a&&t(7,i=a.firstInCompletedList),"lastUncompletedTask"in a&&t(2,l=a.lastUncompletedTask)},[r,s,l,f,o,h,d,i,u,p]}class Ne extends G{constructor(e){super();V(this,e,en,Zt,J,{task:0,inCompletedList:1,firstInCompletedList:7,lastUncompletedTask:2})}}class tn{constructor(e){A(this,"_current");A(this,"_last");this._current=e.getItem(0),this._last=e.getItem(e.size)}next(){if(this._current.next===null)return{done:!0,value:null};const e=this._current.value;return this._current=this._current.next,e===null?{done:!0,value:null}:{done:!1,value:e}}}class he{constructor(e){A(this,"_value");A(this,"_prev");A(this,"_next");this._value=e,this._prev=null,this._next=null}get value(){return this._value}set value(e){this._value=e}get prev(){return this._prev}set prev(e){this._prev=e}set next(e){this._next=e}get next(){return this._next}equals(e){return this._value===e.value}}class se{constructor(e=[]){A(this,"_head");A(this,"_tail");A(this,"_size");this._head=new he(null),this._tail=new he(null),this._head.next=this._tail,this._tail.prev=this._head,this._size=0;for(const t of e)this.add(t)}[Symbol.iterator](){return new tn(this)}get size(){return this._size}add(e){const t=new he(e),r=this._tail.prev;if(r===null)throw new Error("Head is unexpectedly missing");t.prev=r,t.next=this._tail,r.next=t,this._tail.prev=t,this._size++}getItem(e){if(e<0||e>this._size)throw new Error("Index out of bounds");if(e<this._size/2){let r=this._head;for(let s=-1;s<e;s++){if(r.next===null)throw new Error("Index out of bounds");r=r.next}return r}let t=this._tail;for(let r=this._size;r>e;r--){if(t.prev===null)throw new Error("Index out of bounds");t=t.prev}return t}get(e){switch(typeof e){case"number":return this.getItem(e).value;case"object":let t=this._head.next;if(t===null)throw new Error("Item not in list");for(let r=0;r<this._size;r++){if(t===null||t.value===null)throw new Error("Unexpected missing value at index "+r);if(t.value.equals(e))return t.value;t=t.next}throw new Error("Item not in list");default:throw new Error("Invalid type")}}getAll(e){const t=new se;for(const r of this)r.equals(e)&&t.add(r);return t}indexOf(e,t=0){let r=this._head.next;if(r===null)return-1;for(let s=t;s<this._size;s++){if(r===null||r.value===null)return-1;if(r.value.equals(e))return s;r=r.next}return-1}remove(e){const t=this.getItem(e),r=t.prev,s=t.next;if(r===null)throw new Error("Head is unexpectedly missing");if(s===null)throw new Error("Tail is unexpectedly missing");r.next=s,s.prev=r,this._size--}removeValue(e){const t=this.indexOf(e);if(t===-1)throw new Error("Value not found");this.remove(t)}removeAll(e){let t=this.indexOf(e);for(;t!==-1;)this.remove(t),t=this.indexOf(e,t)}insert(e,t){const r=new he(t),s=this.getItem(e),i=s.prev;if(i===null)throw new Error("Head is unexpectedly missing");if(s===null)throw new Error("Tail is unexpectedly missing");r.prev=i,r.next=s,i.next=r,s.prev=r,this._size++}toString(){let e="",t=this._head.next;if(t===null)return e;for(let r=0;r<this._size;r++){if(e+=t.value.toString()+", ",t.next===null)throw new Error("Unexpected missing next at index "+r);t=t.next}return e.substring(0,e.length-2)}clone(){const e=new se;for(const t of this)e.add(t);return e}contains(e){return this.indexOf(e)!==-1}clear(){this._head.next=this._tail,this._tail.prev=this._head,this._size=0}}function qe(n,e,t){const r=n.slice();return r[6]=e[t],r}function nn(n){let e,t;return{c(){e=b("div"),e.innerHTML=`<h2>You&#39;re all caught up!</h2> 
      <p class="svelte-1bkg15o">Tickets will display here once added. You can add some more tickets by
        going to <a href="#/client">the client page</a>.</p>`},m(r,s){E(r,e,s)},p:I,i(r){t||q(()=>{t=W(e,ln,{}),t.start()})},o:I,d(r){r&&T(e)}}}function rn(n){let e=n[1],t,r,s=Me(n);return{c(){s.c(),t=Le()},m(i,l){s.m(i,l),E(i,t,l),r=!0},p(i,l){l&2&&J(e,e=i[1])?(Z(),O(s,1,1,I),x(),s=Me(i),s.c(),k(s),s.m(t.parentNode,t)):s.p(i,l)},i(i){r||(k(s),r=!0)},o(i){O(s),r=!1},d(i){i&&T(t),s.d(i)}}}function Me(n){let e,t;return e=new Ne({props:{task:n[1],lastUncompletedTask:n[2]}}),e.$on("taskcomplete",n[4]),e.$on("taskcomplete",n[5]),{c(){B(e.$$.fragment)},m(r,s){M(e,r,s),t=!0},p(r,s){const i={};s&2&&(i.task=r[1]),s&4&&(i.lastUncompletedTask=r[2]),e.$set(i)},i(r){t||(k(e.$$.fragment,r),t=!0)},o(r){O(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function Ye(n){let e,t,r,s,i,l,c,f,o,h,d=n[3],u=[];for(let a=0;a<d.length;a+=1)u[a]=je(qe(n,d,a));const p=a=>O(u[a],1,1,()=>{u[a]=null});return{c(){e=b("br"),t=P(),r=b("details"),s=b("br"),i=P(),l=b("summary"),l.textContent="Completed",c=P(),f=b("br"),o=P();for(let a=0;a<u.length;a+=1)u[a].c();g(l,"class","svelte-1bkg15o"),r.open=!0},m(a,m){E(a,e,m),E(a,t,m),E(a,r,m),v(r,s),v(r,i),v(r,l),v(r,c),v(r,f),v(r,o);for(let _=0;_<u.length;_+=1)u[_].m(r,null);h=!0},p(a,m){if(m&8){d=a[3];let _;for(_=0;_<d.length;_+=1){const y=qe(a,d,_);u[_]?(u[_].p(y,m),k(u[_],1)):(u[_]=je(y),u[_].c(),k(u[_],1),u[_].m(r,null))}for(Z(),_=d.length;_<u.length;_+=1)p(_);x()}},i(a){if(!h){for(let m=0;m<d.length;m+=1)k(u[m]);h=!0}},o(a){u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)O(u[m]);h=!1},d(a){a&&T(e),a&&T(t),a&&T(r),rt(u,a)}}}function Je(n){let e,t;return e=new Ne({props:{task:n[6],inCompletedList:!0,firstInCompletedList:n[3][0]===n[6]}}),{c(){B(e.$$.fragment)},m(r,s){M(e,r,s),t=!0},p(r,s){const i={};s&8&&(i.task=r[6]),s&8&&(i.firstInCompletedList=r[3][0]===r[6]),e.$set(i)},i(r){t||(k(e.$$.fragment,r),t=!0)},o(r){O(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function je(n){let e=n[6],t,r,s,i=Je(n);return{c(){i.c(),t=P(),r=b("br")},m(l,c){i.m(l,c),E(l,t,c),E(l,r,c),s=!0},p(l,c){c&8&&J(e,e=l[6])?(Z(),O(i,1,1,I),x(),i=Je(l),i.c(),k(i),i.m(t.parentNode,t)):i.p(l,c)},i(l){s||(k(i),s=!0)},o(l){O(i),s=!1},d(l){i.d(l),l&&T(t),l&&T(r)}}}function sn(n){let e,t,r,s,i,l;const c=[rn,nn],f=[];function o(d,u){return d[1]?0:1}t=o(n),r=f[t]=c[t](n);let h=n[3].length>0&&Ye(n);return{c(){e=b("div"),r.c(),s=P(),h&&h.c(),g(e,"class","noborder")},m(d,u){E(d,e,u),f[t].m(e,null),v(e,s),h&&h.m(e,null),l=!0},p(d,[u]){let p=t;t=o(d),t===p?f[t].p(d,u):(Z(),O(f[p],1,1,()=>{f[p]=null}),x(),r=f[t],r?r.p(d,u):(r=f[t]=c[t](d),r.c()),k(r,1),r.m(e,s)),d[3].length>0?h?(h.p(d,u),u&8&&k(h,1)):(h=Ye(d),h.c(),k(h,1),h.m(e,null)):h&&(Z(),O(h,1,1,()=>{h=null}),x())},i(d){l||(k(r),k(h),i||q(()=>{i=W(e,be,{}),i.start()}),l=!0)},o(d){O(r),O(h),l=!1},d(d){d&&T(e),f[t].d(),h&&h.d()}}}function ln(n,{delay:e=2e3,duration:t=1e3}){return{delay:1e4,duration:t,css:r=>`
        opacity: ${r},
      `}}function on(n,e,t){document.title="Tickets | Technician";let{completedTasks:r=new se}=e,{topTask:s=null}=e,{lastUncompletedTask:i=!1}=e,l=[];r=r;function c(o){fe.call(this,n,o)}const f=o=>{r.insert(0,o.detail.task),console.log(o.detail.task),t(0,r),t(1,s=null)};return n.$$set=o=>{"completedTasks"in o&&t(0,r=o.completedTasks),"topTask"in o&&t(1,s=o.topTask),"lastUncompletedTask"in o&&t(2,i=o.lastUncompletedTask)},n.$$.update=()=>{n.$$.dirty&1&&t(3,l=[...r])},[r,s,i,l,c,f]}class cn extends G{constructor(e){super();V(this,e,on,sn,J,{completedTasks:0,topTask:1,lastUncompletedTask:2})}}function Be(n){let e,t;return{c(){e=b("div"),e.innerHTML=`<h1>Heaps Lab</h1> 
    <h2>An in-browser heap-based ticketing system.</h2> 

    <table class="svelte-1i6w7ea"><tr class="svelte-1i6w7ea"><th class="svelte-1i6w7ea"><a href="#/client">client</a> view</th> 
        <th class="svelte-1i6w7ea"><a href="#/tech">technician</a> view</th></tr> 
      <tr class="svelte-1i6w7ea"><td class="svelte-1i6w7ea">For entering new tickets with the name of the client, the description
          of the task, and the priority (low, medium, high).</td> 
        <td class="svelte-1i6w7ea">For viewing the topmost ticket in the queue and marking it as
          completed. You can also view completed tickets including the client
          name, description, and completion note.</td></tr></table>`,g(e,"class","noborder")},m(r,s){E(r,e,s)},i(r){t||q(()=>{t=W(e,be,{}),t.start()})},o:I,d(r){r&&T(e)}}}function un(n){let e,t=n[0]&&Be();return{c(){t&&t.c(),e=Le()},m(r,s){t&&t.m(r,s),E(r,e,s)},p(r,[s]){r[0]?t?s&1&&k(t,1):(t=Be(),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i(r){k(t)},o:I,d(r){t&&t.d(r),r&&T(e)}}}function an(n,e,t){window.document.title="Tickets | Home";let r=!1;return lt(()=>{t(0,r=!0)}),[r]}class fn extends G{constructor(e){super();V(this,e,an,un,J,{})}}const te=[];function dn(n,e){return{subscribe:Te(n,e).subscribe}}function Te(n,e=I){let t;const r=new Set;function s(c){if(J(n,c)&&(n=c,t)){const f=!te.length;for(const o of r)o[1](),te.push(o,n);if(f){for(let o=0;o<te.length;o+=2)te[o][0](te[o+1]);te.length=0}}}function i(c){s(c(n))}function l(c,f=I){const o=[c,f];return r.add(o),r.size===1&&(t=e(s)||I),c(n),()=>{r.delete(o),r.size===0&&(t(),t=null)}}return{set:s,update:i,subscribe:l}}function hn(n,e,t){const r=!Array.isArray(n),s=r?[n]:n,i=e.length<2;return dn(t,l=>{let c=!1;const f=[];let o=0,h=I;const d=()=>{if(o)return;h();const p=e(r?f[0]:f,l);i?l(p):h=Ie(p)?p:I},u=s.map((p,a)=>Ze(p,m=>{f[a]=m,o&=~(1<<a),c&&d()},()=>{o|=1<<a}));return c=!0,d(),function(){K(u),h()}})}function pn(n){if(typeof window=="undefined"){const{subscribe:i}=Te(n);return{subscribe:i}}const e=Te(window.location.href),t=history.pushState,r=history.replaceState,s=()=>e.set(window.location.href);return history.pushState=function(){t.apply(this,arguments),s()},history.replaceState=function(){r.apply(this,arguments),s()},window.addEventListener("popstate",s),window.addEventListener("hashchange",s),{subscribe:hn(e,i=>new URL(i)).subscribe}}var mn=pn("/");function Fe(n,e,t){const r=n.slice();return r[6]=e[t],r[8]=t,r}function Ve(n){let e,t=n[6].title+"",r,s,i,l,c,f;return{c(){e=b("a"),r=j(t),s=P(),g(e,"href",i=Ge(n[6])),g(e,"data-index",l=n[8]),g(e,"class","clear-btn svelte-19obeqv"),re(e,"active",n[6].active)},m(o,h){E(o,e,h),v(e,r),v(e,s),c||(f=U(e,"click",n[2]),c=!0)},p(o,h){h&1&&t!==(t=o[6].title+"")&&ve(r,t),h&1&&i!==(i=Ge(o[6]))&&g(e,"href",i),h&1&&re(e,"active",o[6].active)},d(o){o&&T(e),c=!1,f()}}}function _n(n){let e,t=n[0],r=[];for(let s=0;s<t.length;s+=1)r[s]=Ve(Fe(n,t,s));return{c(){e=b("nav");for(let s=0;s<r.length;s+=1)r[s].c();g(e,"class","choose-dash svelte-19obeqv")},m(s,i){E(s,e,i);for(let l=0;l<r.length;l+=1)r[l].m(e,null);n[3](e)},p(s,[i]){if(i&5){t=s[0];let l;for(l=0;l<t.length;l+=1){const c=Fe(s,t,l);r[l]?r[l].p(c,i):(r[l]=Ve(c),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=t.length}},i:I,o:I,d(s){s&&T(e),rt(r,s),n[3](null)}}}function Ge(n){var e;return(e=n.href)!=null?e:"#/"+n.title.replace(/\s/g,"-").toLowerCase()}function gn(n,e,t){let r,s,i;function l(o){const h=o.target;i=s,s=h;const d=Number.parseInt(h.getAttribute("data-index")),u=Number.parseInt(i.getAttribute("data-index")),p=r.style,a=r.children;history.replaceState({},null,h.href),u<d?(p.setProperty("--underline-start",u/a.length+""),p.setProperty("--underline-width",(d-u+1)/a.length+"")):(p.setProperty("--underline-start",d/a.length+""),p.setProperty("--underline-width",(u-d+1)/a.length+""));const m=window.getComputedStyle(r,":after").getPropertyValue("transition-duration");console.log(m),setTimeout(()=>{p.setProperty("--underline-start",d/a.length+""),p.setProperty("--underline-width",1/a.length+"")},Number.parseFloat(m)*1e3)}let{tabs:c}=e;lt(()=>{for(let o=0;o<c.length;o++)if(c[o].active){s=r.children[o],i=r.children[0];const h=r.children,d=r.style,u=o;d.setProperty("--underline-start",u/h.length+""),d.setProperty("--underline-width",1/h.length+"");break}window.addEventListener("hashchange",()=>{for(let o=0;o<c.length;o++)if(c[o].active){if(!i){s=r.children[o],i=r.children[0];const h=r.children,d=r.style,u=o;d.setProperty("--underline-start",u/h.length+""),d.setProperty("--underline-width",1/h.length+"");break}l({target:r.children[o]});break}})});function f(o){F[o?"unshift":"push"](()=>{r=o,t(1,r)})}return n.$$set=o=>{"tabs"in o&&t(0,c=o.tabs)},[c,r,l,f]}class vn extends G{constructor(e){super();V(this,e,gn,_n,J,{tabs:0})}}class We{constructor(e){A(this,"heap",[]);A(this,"_size",0);!e||(this.heap=e,this._size=e.length)}add(e){this.heap.push(e),this._size++,this.swapUp(this._size-1)}swapUp(e){if(e===0)return;const t=Math.floor((e-1)/2);let r=this.heap[t],s=this.heap[e];r.compareTo(s)>0&&(this.heap[t]=s,this.heap[e]=r,this.swapUp(t))}swapDown(e){const t=e*2+1,r=e*2+2;if(t>=this._size)return;let s=this.heap[t];if(r>=this._size){if(s.compareTo(this.heap[e])<0){let l=this.heap[e];this.heap[e]=s,this.heap[t]=l,this.swapDown(t)}return}let i=this.heap[r];if(s.compareTo(i)<0){if(s.compareTo(this.heap[e])<0){let l=this.heap[e];this.heap[e]=s,this.heap[t]=l,this.swapDown(t)}}else if(i.compareTo(this.heap[e])<0){let l=this.heap[e];this.heap[e]=i,this.heap[r]=l,this.swapDown(r)}}remove(e){for(let t=0;t<this._size;t++)if(this.heap[t]===e){let r=this.heap[t];return this.heap[t]=this.heap[this._size-1],this.heap.pop(),this._size--,this.swapDown(t),r}}peek(){return this.heap[0]}isEmpty(){return this._size===0}size(){return this._size}clear(){this.heap=[],this._size=0}poll(){if(this._size===0)return;let e=this.heap[0];return this.heap[0]=this.heap[this._size-1],this.heap.pop(),this._size--,this.swapDown(0),e}toString(){let e=0,t="";for(let r=0;r<this._size;r++)r===e&&(t+=`
`,e=e*2+1),t+=this.heap[r]+" ";return t}toArray(){return this.heap}}const bn={accent:"116,170,136",h:142,l:56,s:24},yn={accent:"199,149,0",h:45,l:39,s:100},kn={accent:"87,91,203",h:238,l:57,s:53},wn="device";var Ee={light:bn,dark:yn,device:kn,selected:wn};function Tn(n){let e,t,r;return{c(){e=j("Reset "),t=j(n[7]),r=j(" mode accent color")},m(s,i){E(s,e,i),E(s,t,i),E(s,r,i)},p(s,i){i&128&&ve(t,s[7])},d(s){s&&T(e),s&&T(t),s&&T(r)}}}function En(n){let e,t,r,s,i,l,c,f,o,h,d,u,p,a,m,_,y,z,S;return r=new Ne({props:{task:n[9],inCompletedList:!0}}),_=new Ce({props:{error:n[8],$$slots:{default:[Tn]},$$scope:{ctx:n}}}),_.$on("click",n[11]),{c(){e=b("div"),t=b("div"),B(r.$$.fragment),s=P(),i=b("input"),l=P(),c=b("input"),f=P(),o=b("input"),h=P(),d=b("select"),u=b("option"),u.textContent="Device",p=b("option"),p.textContent="Light",a=b("option"),a.textContent="Dark",m=P(),B(_.$$.fragment),g(i,"class","rainbow color-picker svelte-du74uk"),g(i,"start","0"),g(i,"max","360"),g(i,"type","range"),g(i,"name","hue"),g(i,"id","0"),g(c,"class","saturation color-picker svelte-du74uk"),g(c,"start","0"),g(c,"max","100"),g(c,"type","range"),g(c,"name","sat"),g(c,"id","1"),g(o,"class","lightness color-picker svelte-du74uk"),g(o,"start","0"),g(o,"max","100"),g(o,"type","range"),g(o,"name","lig"),g(o,"id","2"),u.__value="device",u.value=u.__value,g(u,"default",""),g(u,"class","svelte-du74uk"),p.__value="light",p.value=p.__value,g(p,"class","svelte-du74uk"),a.__value="dark",a.value=a.__value,g(a,"class","svelte-du74uk"),g(d,"class","svelte-du74uk"),n[7]===void 0&&q(()=>n[20].call(d)),g(t,"class","svelte-du74uk"),g(e,"class","noborder svelte-du74uk")},m(w,C){E(w,e,C),v(e,t),M(r,t,null),v(t,s),v(t,i),ee(i,n[0]),n[15](i),v(t,l),v(t,c),ee(c,n[1]),n[17](c),v(t,f),v(t,o),ee(o,n[2]),n[19](o),v(t,h),v(t,d),v(d,u),v(d,p),v(d,a),Pe(d,n[7]),v(t,m),M(_,t,null),n[21](e),y=!0,z||(S=[U(i,"change",n[14]),U(i,"input",n[14]),U(c,"change",n[16]),U(c,"input",n[16]),U(o,"change",n[18]),U(o,"input",n[18]),U(d,"change",n[20]),U(d,"input",n[10])],z=!0)},p(w,[C]){C&1&&ee(i,w[0]),C&2&&ee(c,w[1]),C&4&&ee(o,w[2]),C&128&&Pe(d,w[7]);const L={};C&256&&(L.error=w[8]),C&16777344&&(L.$$scope={dirty:C,ctx:w}),_.$set(L)},i(w){y||(k(r.$$.fragment,w),k(_.$$.fragment,w),y=!0)},o(w){O(r.$$.fragment,w),O(_.$$.fragment,w),y=!1},d(w){w&&T(e),Y(r),n[15](null),n[17](null),n[19](null),Y(_),n[21](null),z=!1,K(S)}}}function Ke(n){const e=n[0]/360,t=n[1]/100,r=n[2]/100;let s,i,l;if(t===0)s=i=l=r;else{const c=(h,d,u)=>(u<0&&(u+=1),u>1&&(u-=1),u<.16666666666666666?h+(d-h)*6*u:u<.5?d:u<.6666666666666666?h+(d-h)*(.6666666666666666-u)*6:h),f=r<.5?r*(1+t):r+t-r*t,o=2*r-f;s=c(o,f,e+1/3),i=c(o,f,e),l=c(o,f,e-1/3)}return[Math.round(s*255),Math.round(i*255),Math.round(l*255)]}function ut(n,e){function t(i){return i!=null&&typeof i=="object"}const r=Object.keys(n),s=Object.keys(e);if(r.length!==s.length)return!1;for(const i of r){const l=n[i],c=e[i],f=t(l)&&t(c);if(f&&!ut(l,c)||!f&&l!==c)return!1}return!0}function In(n,e,t){let r=new H("Yourself","You can set a custom accent color using the sliders below. You can set a custom accent color for light mode, dark mode, and device mode. Device mode will use your device's dark mode toggle while light or dark will override your device's toggle.",3),s,i="",l=JSON.parse(localStorage.getItem("colors"));r.complete("boring completion message"),document.title="Tickets | Settings";let c,f,o,h;c=l[l.selected],f=c.h,o=c.s,h=c.l;function d($){const Q=$.target;t(0,f=l[Q.value].h),t(1,o=l[Q.value].s),t(2,h=l[Q.value].l),t(12,l.selected=Q.value,l),u(l)}function u($){const Q=ut($[$.selected],Ee[$.selected])?`The default accent color for ${$.selected} mode is set.`:"";i!==Q&&t(8,i=Q)}u(l);let p=null,a,m,_,y;function z(){t(12,l[l.selected]=JSON.parse(JSON.stringify(Ee))[l.selected],l),t(0,f=l[l.selected].h),t(1,o=l[l.selected].s),t(2,h=l[l.selected].l),u(l)}function S(){f=ye(this.value),t(0,f)}function w($){F[$?"unshift":"push"](()=>{a=$,t(3,a)})}function C(){o=ye(this.value),t(1,o)}function L($){F[$?"unshift":"push"](()=>{m=$,t(4,m)})}function R(){h=ye(this.value),t(2,h)}function N($){F[$?"unshift":"push"](()=>{_=$,t(5,_)})}function D(){s=It(this),t(7,s),t(12,l),t(0,f),t(1,o),t(2,h)}function ie($){F[$?"unshift":"push"](()=>{y=$,t(6,y)})}return n.$$.update=()=>{if(n.$$.dirty&4103&&t(12,l[l.selected]={accent:Ke([f,o,h]).join(","),h:f,s:o,l:h},l),n.$$.dirty&4096&&t(7,s=l.selected),n.$$.dirty&4096)switch(l.selected){case"light":document.documentElement.classList.add("light"),document.documentElement.classList.remove("dark");break;case"dark":document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light");break;case"device":document.documentElement.classList.remove("light"),document.documentElement.classList.remove("dark");break}n.$$.dirty&12288&&(p&&clearTimeout(p),t(13,p=setTimeout(()=>u(l),300)),localStorage.setItem("colors",JSON.stringify(l))),n.$$.dirty&4159&&(a&&(a.style.setProperty("--thumb-color",`hsla(${f}deg, ${o}%, ${h}%)`),m.style.setProperty("--thumb-color",`hsla(${f}deg, ${o}%, ${h}%)`),_.style.setProperty("--thumb-color",`hsla(${f}deg, ${o}%, ${h}%)`),document.documentElement.style.setProperty("--accent",l[l.selected].accent)),document.querySelector("meta[name=theme-color]").setAttribute("content",`rgb(${Ke([f,o,h]).join(",")})`)),n.$$.dirty&73&&a&&y.style.setProperty("--hue",`${f}deg`),n.$$.dirty&82&&m&&y.style.setProperty("--sat",`${o}%`),n.$$.dirty&100&&_&&y.style.setProperty("--lig",`${h}%`)},[f,o,h,a,m,_,y,s,i,r,d,z,l,p,S,w,C,L,R,N,D,ie]}class Sn extends G{constructor(e){super();V(this,e,In,En,J,{})}}function Ln(n){let e;return{c(){e=b("h1"),e.textContent="404 - try one of the links above"},m(t,r){E(t,e,r)},p:I,i:I,o:I,d(t){t&&T(e)}}}function Cn(n){let e,t;return e=new Sn({}),{c(){B(e.$$.fragment)},m(r,s){M(e,r,s),t=!0},p:I,i(r){t||(k(e.$$.fragment,r),t=!0)},o(r){O(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function Nn(n){let e,t;return e=new cn({props:{topTask:n[1].peek(),lastUncompletedTask:n[1].size()<2,completedTasks:n[2]}}),e.$on("taskcomplete",n[3]),{c(){B(e.$$.fragment)},m(r,s){M(e,r,s),t=!0},p(r,s){const i={};s&2&&(i.topTask=r[1].peek()),s&2&&(i.lastUncompletedTask=r[1].size()<2),s&4&&(i.completedTasks=r[2]),e.$set(i)},i(r){t||(k(e.$$.fragment,r),t=!0)},o(r){O(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function On(n){let e,t;return e=new Wt({}),e.$on("submit",n[5]),{c(){B(e.$$.fragment)},m(r,s){M(e,r,s),t=!0},p:I,i(r){t||(k(e.$$.fragment,r),t=!0)},o(r){O(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function zn(n){let e,t;return e=new fn({}),{c(){B(e.$$.fragment)},m(r,s){M(e,r,s),t=!0},p:I,i(r){t||(k(e.$$.fragment,r),t=!0)},o(r){O(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function Pn(n){let e,t,r,s,i,l,c,f,o;e=new vn({props:{tabs:[{href:"#/",active:n[0]==="#/",title:"home"},{href:"#/client",active:n[0]==="#/client",title:"client"},{href:"#/tech",active:n[0]==="#/tech",title:"technician"},{href:"#/settings",active:n[0]==="#/settings",title:"settings"}]}});const h=[zn,On,Nn,Cn,Ln],d=[];function u(p,a){return p[0]===""||p[0]==="#/"?0:p[0]==="#/client"?1:p[0]==="#/tech"?2:p[0]==="#/settings"?3:4}return i=u(n),l=d[i]=h[i](n),{c(){B(e.$$.fragment),t=P(),r=b("main"),s=b("span"),l.c(),c=P(),f=b("div"),f.textContent="\xA0",g(s,"class","glass svelte-1dyupx1"),g(f,"class","padding svelte-1dyupx1"),g(r,"class","svelte-1dyupx1")},m(p,a){M(e,p,a),E(p,t,a),E(p,r,a),v(r,s),d[i].m(s,null),v(r,c),v(r,f),o=!0},p(p,[a]){const m={};a&1&&(m.tabs=[{href:"#/",active:p[0]==="#/",title:"home"},{href:"#/client",active:p[0]==="#/client",title:"client"},{href:"#/tech",active:p[0]==="#/tech",title:"technician"},{href:"#/settings",active:p[0]==="#/settings",title:"settings"}]),e.$set(m);let _=i;i=u(p),i===_?d[i].p(p,a):(Z(),O(d[_],1,1,()=>{d[_]=null}),x(),l=d[i],l?l.p(p,a):(l=d[i]=h[i](p),l.c()),k(l,1),l.m(s,null))},i(p){o||(k(e.$$.fragment,p),k(l),o=!0)},o(p){O(e.$$.fragment,p),O(l),o=!1},d(p){Y(e,p),p&&T(t),p&&T(r),d[i].d()}}}function $n(n,e,t){let r;mt(n,mn,u=>t(4,r=u));let s,i,l;localStorage.getItem("colors")||localStorage.setItem("colors",JSON.stringify(Ee));const c=JSON.parse(localStorage.getItem("colors")),f=c[c.selected].accent;document.documentElement.style.setProperty("--accent",f),document.querySelector("meta[name=theme-color]").setAttribute("content",`rgb(${f})`);function h(){i.poll(),t(1,i),t(2,l)}const d=u=>{i.add(u.detail.task),t(1,i)};switch(n.$$.update=()=>{if(n.$$.dirty&17&&(t(0,s=new URL(r).hash),window.location.hash=s||"#/"),n.$$.dirty&2){let a=function(){if(localStorage.getItem("tickets")){const m=JSON.parse(localStorage.getItem("tickets")||"[]");t(1,i=new We(m.map(_=>H.fromJSON(_))))}else t(1,i=new We),i.add(new H("Computer Science","The Heaps lab (aka this website) including the client page, technician page, and home page",H.LOW_PRIORITY)),i.add(new H("Yourself","Try other <a href='#/settings'>colors</a>!",H.HIGH_PRIORITY)),i.add(new H("Yourself","Try resizing the window!",H.HIGH_PRIORITY))};var u=a;i===void 0&&a(),console.log(i),localStorage.setItem("tickets",JSON.stringify(i.toArray()))}if(n.$$.dirty&4){let a=function(){if(localStorage.getItem("completed")){const m=JSON.parse(localStorage.getItem("completed")||"[]");t(2,l=new se(m.map(_=>H.fromJSON(_))))}else t(2,l=new se)};var p=a;l===void 0&&a(),localStorage.setItem("completed",JSON.stringify([...l]))}},c.selected){case"light":document.documentElement.classList.add("light");break;case"dark":document.documentElement.classList.add("dark");break}return[s,i,l,h,r,d]}class An extends G{constructor(e){super();V(this,e,$n,Pn,J,{})}}new An({target:document.getElementById("app")});