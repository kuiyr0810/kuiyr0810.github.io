import{a as re,c as be,d as At,e as xt,f as Tt,g as _t,h as kt,i as Ht,j as Oe}from"./chunk-7XZZ5VOC.js";import{a as L,b as O}from"./chunk-OTLBI2QW.js";import{$ as yt,A as p,B as ot,C as I,D as ie,E as st,F as ne,G as Se,I as Ie,J as it,K as nt,N as rt,O as at,P as ct,Q as lt,R as dt,S as mt,T as ut,U as ht,V as ft,W as pt,X as gt,Y as vt,Z as wt,_ as bt,a as Ve,aa as Lt,b as m,ba as Ct,ca as Et,d as W,f as Y,g as Je,j as ee,k as _,l as Ke,m as v,n as ke,o as te,p as oe,q as Qe,r as et,s as se,t as ve,u as tt,v as q,w as k,x as we,y as j,z as He}from"./chunk-KDYXRURV.js";import"./chunk-TMRM6UKS.js";import{c as h}from"./chunk-WCJA4B4J.js";h();h();h();Ke();var X=(e,t)=>{p.hasClass("on")?(p.removeClass("on"),j.removeClass("close"),t?p.style="":L(p,"slideRightOut")):t?p.style="":L(p,"slideRightIn",()=>{p.addClass("on"),j.addClass("close")})},St=()=>{let e=_(p,".inner");p.child(".tab")&&e.removeChild(p.child(".tab"));let t=document.createElement("ul"),o="active";t.className="tab",["contents","related","overview"].forEach(s=>{let i=p.child(".panel."+s);if(i.innerHTML.trim().length<1){s==="contents"&&ee(ne,"none");return}s==="contents"&&ee(ne,"");let r=document.createElement("li"),c=document.createElement("span"),n=document.createTextNode(i.getAttribute("data-title"));c.appendChild(n),r.appendChild(c),r.addClass(s+" item"),o?(i.addClass(o),r.addClass(o)):i.removeClass("active"),r.addEventListener("click",a=>{let d=a.currentTarget;d.hasClass("active")||(p.find(".tab .item").forEach(l=>{l.removeClass("active")}),p.find(".panel").forEach(l=>{l.removeClass("active")}),p.child(".panel."+d.className.replace(" item","")).addClass("active"),d.addClass("active"))}),t.appendChild(r),o=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),p.child(".panels").style.paddingTop=""):p.child(".panels").style.paddingTop=".625rem"},It=()=>{let e=n=>{let a=t[n];if(!a||a.hasClass("current"))return;m.each(".toc .active",l=>{l&&l.removeClass("active current")}),o.forEach(l=>{l&&l.removeClass("active")}),a.addClass("active current"),o[n]&&o[n].addClass("active");let d=a.parentNode;for(;!d.matches(".contents");){if(d.matches("li")){d.addClass("active");let l=m(d.child("a.toc-link").getAttribute("href"));l&&l.addClass("active")}d=d.parentNode}getComputedStyle(p).display!=="none"&&i.hasClass("active")&&O(i,a.offsetTop-i.offsetHeight/4)},t=m.all(".contents li");if(t.length<1)return;let o=[...t],s=null;o=o.map((n,a)=>{let d=n.child("a.toc-link"),l=m(decodeURI(d.getAttribute("href")));if(!l)return null;let g=l.child("a.anchor"),u=w=>{w.preventDefault();let P=m(decodeURI(w.currentTarget.getAttribute("href")));s=a,O(P,null,()=>{e(a),s=null})};return d.addEventListener("click",u),g&&g.addEventListener("click",w=>{u(w),xt(v.hostname+"/"+LOCAL.path+w.currentTarget.getAttribute("href"))}),l});let i=p.child(".contents.panel"),r=n=>{let a=0,d=n[a];if(d.boundingClientRect.top>0)return a=o.indexOf(d.target),a===0?0:a-1;for(;a<n.length;a++)if(n[a].boundingClientRect.top<=0)d=n[a];else return o.indexOf(d.target);return o.indexOf(d.target)};(()=>{let n=new IntersectionObserver(a=>{let d=r(a)+(oe<0?1:0);s===null&&e(d)},{rootMargin:"0px 0px -100% 0px",threshold:0});o.forEach(a=>{a&&n.observe(a)})})()},Re=()=>{O(0)},Ot=()=>{O(parseInt(String(Y(tt))))},Rt=()=>{O(m("#comments"))},Pt=()=>{m.each(".menu .item:not(.title)",e=>{let t=e.child("a[href]"),o=e.parentNode.parentNode;if(!t)return;let s=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),i=!v.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),r=!t.onclick&&t.hostname===location.hostname&&(s||i);e.toggleClass("active",r),e.parentNode.child(".active")&&o.hasClass("dropdown")?o.removeClass("active").addClass("expand"):o.removeClass("expand")})};h();var A={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),q.setAttribute("style","display:block"),A.lock=!1},hide(e){v.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){A.lock||(v.loader.start&&L(q,0),document.body.addClass("loaded"),A.lock=!0)}};function Pe(){m.each(".overview .menu > .item",t=>{_(k,".menu").appendChild(t.cloneNode(!0))}),q.addEventListener("click",A.vanish),j.addEventListener("click",X),m(".dimmer").addEventListener("click",X),_(He,".down").addEventListener("click",Ot),_(He,".up").addEventListener("click",Re),I||Ct(W(we,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),wt(I.child(".player")),bt(I.child(".back-to-top")),yt(I.child(".chat")),Lt(I.child(".contents")),ie.addEventListener("click",Re),st.addEventListener("click",Rt),ne.addEventListener("click",X),(()=>{new IntersectionObserver(([t])=>{t.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([t])=>{t.isIntersecting?document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))})()}h();h();var Nt=()=>{if(!m(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(o=>{o.target.hasClass("show")?e.unobserve(o.target):(o.isIntersecting||o.intersectionRatio>0)&&(o.target.addClass("show"),e.unobserve(o.target))})},{root:null,threshold:[.3]});m.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),m(".index.wrap .item:first-child").addClass("show"),m.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(o=>{t.addEventListener(o,()=>{m(".cards .item.active")&&m(".cards .item.active").removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(o=>{t.addEventListener(o,()=>{t.removeClass("active")},{passive:!0})})})};h();h();var H=e=>{let t=m(".theme .ic");e==="dark"?(ve.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(ve.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},Mt=()=>{v.auto_dark.enable&&(new Date().getHours()>=v.auto_dark.start||new Date().getHours()<=v.auto_dark.end?H("dark"):H())},Ne=e=>{ve.getAttribute("data-theme")==="dark"&&(e="#222"),m('meta[name="theme-color"]').setAttribute("content",e)},Bt=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?H("dark"):H()});let e=re.get("theme");e?H(e):v.darkmode&&H("dark")};var ye=()=>{at(Y(k)),ct(Y(we)),lt(Ie+Y(m("#waves"))),nt!==window.innerWidth&&X(null,1),dt(window.innerHeight),mt(window.innerWidth)},Dt=()=>{let e=window.innerHeight,t=Ve(),o=t>e?t-e:document.body.scrollHeight-e,s=window.scrollY>Ie,i=window.scrollY>0;s?Ne("#FFF"):Ne("#222"),k.toggleClass("show",s),I.toggleClass("affix",i),ot.toggleClass("affix",i),p.toggleClass("affix",window.scrollY>it&&document.body.offsetWidth>991),typeof te.y>"u"&&(te.y=window.scrollY),ut(te.y-window.scrollY),oe<0?(k.removeClass("up"),k.toggleClass("down",s)):oe>0&&(k.removeClass("down"),k.toggleClass("up",s)),te.y=window.scrollY;let r=Math.round(Math.min(100*window.scrollY/o,100))+"%";ie.child("span").innerText!==r&&(ie.child("span").innerText=r),(m("#sidebar").hasClass("affix")||m("#sidebar").hasClass("on"))&&Je(m(".percent"),r)},Ut=()=>{let e=m('[rel="icon"]');document.addEventListener("visibilitychange",()=>{switch(document.visibilityState){case"hidden":e.setAttribute("href",ke+v.favicon.hidden),document.title=LOCAL.favicon.hide,v.loader.switch&&A.show(),clearTimeout(et);break;case"visible":e.setAttribute("href",ke+v.favicon.normal),document.title=LOCAL.favicon.show,v.loader.switch&&A.hide(1e3),ht(setTimeout(()=>{document.title=Qe},2e3));break}},{passive:!0})};h();h();h();h();var qt=typeof window>"u",Me=!qt&&"loading"in HTMLImageElement.prototype,Be=!qt&&(!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function jt(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function Gt(e,t){let o,s;return e>=1?(o=t,s=Math.round(t/e)):(o=Math.round(t*e),s=t),{width:o,height:s}}function zt(e){let t=e.replace(/-/g,"+").replace(/_/g,"/"),o=typeof Buffer<"u"?Buffer.from(t,"base64"):Uint8Array.from(atob(t),s=>s.charCodeAt(0));return new Uint8Array(o)}function $t(e,t){let o;return function(...s){o&&clearTimeout(o),o=setTimeout(()=>{o=void 0,e(...s)},t)}}function Le(e,t,o){let s=e*4+1,i=6+t*(5+s),r=[137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,e>>8,e&255,0,0,t>>8,t&255,8,6,0,0,0,0,0,0,0,i>>>24,i>>16&255,i>>8&255,i&255,73,68,65,84,120,1],c=[0,498536548,997073096,651767980,1994146192,1802195444,1303535960,1342533948,-306674912,-267414716,-690576408,-882789492,-1687895376,-2032938284,-1609899400,-1111625188],n=1,a=0;for(let l=0,g=0,u=s-1;l<t;l++,u+=s-1)for(r.push(l+1<t?0:1,s&255,s>>8,~s&255,s>>8^255,0),a=(a+n)%65521;g<u;g++){let w=o[g]&255;r.push(w),n=(n+w)%65521,a=(a+n)%65521}r.push(a>>8,a&255,n>>8,n&255,0,0,0,0,0,0,0,0,73,69,78,68,174,66,96,130);for(let[l,g]of[[12,29],[37,41+i]]){let u=-1;for(let w=l;w<g;w++)u^=r[w],u=u>>>4^c[u&15],u=u>>>4^c[u&15];u=~u,r[g++]=u>>>24,r[g++]=u>>16&255,r[g++]=u>>8&255,r[g++]=u&255}return`data:image/png;base64,${typeof Buffer<"u"?Buffer.from(new Uint8Array(r)).toString("base64"):btoa(String.fromCharCode(...r))}`}var Ee=32,Wt="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",lo="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~",Ce=(e,t,o)=>{let s=0;for(;t<o;)s*=83,s+=lo.indexOf(e[t++]);return s},Yt=Math.pow,ce=Math.PI,mo=ce*2,Xt=3294.6,Zt=269.025,uo=e=>e>10.31475?Yt(e/Zt+.052132,2.4):e/Xt,De=e=>~~(e>1227e-8?Zt*Yt(e,.416666)-13.025:e*Xt+1),ae=e=>(e<0?-1:1)*e*e,Ft=e=>{for(e+=ce/2;e>ce;)e-=mo;let t=1.27323954*e-.405284735*ae(e);return .225*(ae(t)-t)+t};function ho(e){let t=Ce(e,2,6);return[t>>16,t>>8&255,t&255]}function fo(e,t,o,s){let i=Ce(e,0,1),r=i%9+1,c=~~(i/9)+1,n=r*c,a=0,d=0,l=0,g=0,u=0,w=0,P=0,N=0,z=0,E=0,M=0,le=0,de=0,B=0,S=(Ce(e,1,2)+1)/13446*(s|1),x=new Float64Array(n*3),_e=ho(e);for(a=0;a<3;a++)x[a]=uo(_e[a]);for(a=1;a<n;a++)B=Ce(e,4+a*2,6+a*2),x[a*3]=ae(~~(B/(19*19))-9)*S,x[a*3+1]=ae(~~(B/19)%19-9)*S,x[a*3+2]=ae(B%19-9)*S;let me=t*4,D=new Uint8ClampedArray(me*o);for(g=0;g<o;g++)for(le=ce*g/o,l=0;l<t;l++){for(u=0,w=0,P=0,de=ce*l/t,d=0;d<c;d++)for(z=Ft(le*d),a=0;a<r;a++)N=Ft(de*a)*z,E=(a+d*r)*3,u+=x[E]*N,w+=x[E+1]*N,P+=x[E+2]*N;M=4*l+g*me,D[M]=De(u),D[M+1]=De(w),D[M+2]=De(P),D[M+3]=255}return D}function Vt(e,{ratio:t=1,size:o=Ee}={}){let{width:s,height:i}=Gt(t,o),r=fo(e,s,i);return Le(s,i,r)}h();function po(e){let{PI:t,min:o,max:s,cos:i,round:r}=Math,c=e[0]|e[1]<<8|e[2]<<16,n=e[3]|e[4]<<8,a=(c&63)/63,d=(c>>6&63)/31.5-1,l=(c>>12&63)/31.5-1,g=(c>>18&31)/31,u=c>>23,w=(n>>3&63)/63,P=(n>>9&63)/63,N=n>>15,z=s(3,N?u?5:7:n&7),E=s(3,N?n&7:u?5:7),M=u?(e[5]&15)/15:1,le=(e[5]>>4)/15,de=u?6:5,B=0,S=(J,T,K)=>{let $=[];for(let U=0;U<T;U++)for(let F=U?0:1;F*T<J*(T-U);F++)$.push(((e[de+(B>>1)]>>((B++&1)<<2)&15)/7.5-1)*K);return $},x=S(z,E,g),_e=S(3,3,w*1.25),me=S(3,3,P*1.25),D=u&&S(5,5,le),ue=go(e),he=r(ue>1?32:32*ue),fe=r(ue>1?32/ue:32),V=new Uint8Array(he*fe*4),pe=[],ge=[];for(let J=0,T=0;J<fe;J++)for(let K=0;K<he;K++,T+=4){let $=a,U=d,F=l,We=M;for(let f=0,y=s(z,u?5:3);f<y;f++)pe[f]=i(t/he*(K+.5)*f);for(let f=0,y=s(E,u?5:3);f<y;f++)ge[f]=i(t/fe*(J+.5)*f);for(let f=0,y=0;f<E;f++)for(let C=f?0:1,Q=ge[f]*2;C*E<z*(E-f);C++,y++)$+=x[y]*pe[C]*Q;for(let f=0,y=0;f<3;f++)for(let C=f?0:1,Q=ge[f]*2;C<3-f;C++,y++){let Ze=pe[C]*Q;U+=_e[y]*Ze,F+=me[y]*Ze}if(u)for(let f=0,y=0;f<5;f++)for(let C=f?0:1,Q=ge[f]*2;C<5-f;C++,y++)We+=D[y]*pe[C]*Q;let Ye=$-2/3*U,Xe=(3*$-Ye+F)/2,co=Xe-F;V[T]=s(0,255*o(1,Xe)),V[T+1]=s(0,255*o(1,co)),V[T+2]=s(0,255*o(1,Ye)),V[T+3]=s(0,255*o(1,We))}return{w:he,h:fe,rgba:V}}function go(e){let t=e[3],o=e[2]&128,s=e[4]&128,i=s?o?5:7:t&7,r=s?t&7:o?5:7;return i/r}function Jt(e){let{w:t,h:o,rgba:s}=po(zt(e));return Le(t,o,s)}function je(e='img[loading="lazy"]',{hash:t=!0,hashType:o="blurhash",placeholderSize:s=Ee,updateSizesOnResize:i=!1,onImageLoad:r}={}){let c=new Set;for(let n of jt(e)){let a=qe(n,{updateOnResize:i});if(i&&a&&c.add(a),t){let l=Kt({image:n,hash:typeof t=="string"?t:void 0,hashType:o,size:s});l&&(n.src=l)}if(!n.dataset.src&&!n.dataset.srcset)continue;if(Be||!Me){Qt(n),ze(n),Ge(n);continue}if(n.src||(n.src=Wt),n.complete&&n.naturalWidth>0){Ue(n,r);continue}let d=()=>Ue(n,r);n.addEventListener("load",d,{once:!0}),c.add(()=>n.removeEventListener("load",d))}return()=>{for(let n of c)n();c.clear()}}function Ue(e,t){let o=new Image,{srcset:s,src:i,sizes:r}=e.dataset;if(r==="auto"){let c=eo(e);c&&(o.sizes=`${c}px`)}else e.sizes&&(o.sizes=e.sizes);s&&(o.srcset=s),i&&(o.src=i),o.addEventListener("load",()=>{Qt(e),ze(e),Ge(e),t?.(e)})}function Kt({image:e,hash:t,hashType:o="blurhash",size:s=Ee,ratio:i}={}){if(!t&&e){let{blurhash:r,thumbhash:c}=e.dataset;t=c||r,o=c?"thumbhash":"blurhash"}if(t)try{if(o==="thumbhash")return Jt(t);if(!i&&e){let r=e.width||e.offsetWidth||s,c=e.height||e.offsetHeight||s;i=r/c}return Vt(t,{ratio:i,size:s})}catch{}}var Ae=new WeakMap;function qe(e,t){if(e.dataset.sizes!=="auto")return;let o=eo(e);if(o&&(e.sizes=`${o}px`),e.parentElement?.tagName.toLowerCase()==="picture"&&!t?.skipChildren&&[...e.parentElement.getElementsByTagName("source")].forEach(s=>qe(s,{skipChildren:!0})),t?.updateOnResize){if(!Ae.has(e)){let s=$t(()=>qe(e),500),i=new ResizeObserver(s);Ae.set(e,i),i.observe(e)}return()=>{let s=Ae.get(e);s&&(s.disconnect(),Ae.delete(e))}}}function Ge(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function ze(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function Qt(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach(ze),[...t.querySelectorAll("source[data-src]")].forEach(Ge))}function eo(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}var to=()=>{be(),p.hasClass("on")&&L(p,0,()=>{p.removeClass("on"),j.removeClass("close")});let e=m("#main");e.innerHTML="",e.appendChild(q.lastChild.cloneNode(!0)),O(0)},$e=e=>{ft(0),pt(window.location.href),Oe("katex"),Ht("copy_tex"),Oe("mermaid");let t=new IntersectionObserver(function(o,s){o.forEach(i=>{if(i.isIntersecting){let r=i.target;r.style.backgroundImage=`url("${r.getAttribute("data-background-image")}")`,r.removeAttribute("data-background-image"),s.unobserve(r)}})},{root:null,threshold:.2});if(document.querySelectorAll("[data-background-image]").forEach(o=>{t.observe(o)}),e!==1&&m.each("script[data-pjax]",kt),vt(document.title),ye(),Pt(),St(),It(),LOCAL.ispost){import("./post-HRTB6LBE.js").then(({postBeauty:s})=>{s()});let o=new IntersectionObserver(s=>{s.forEach(i=>{i.isIntersecting&&(import("./comments-EF55ANSR.js").then(({walinePageview:r,walineComment:c})=>{r(),c()}),o.disconnect())})},{root:null,threshold:.2});o.observe(m("#copyright"))}je(),import("./comments-EF55ANSR.js").then(async({walinePageview:o,walineRecentComments:s})=>{await s()}),Tt(),A.hide(500),setTimeout(()=>{At()},500),Nt()};h();function G(e,t,o){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,o):t.call(o,e,0,[e])}var no=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function Fe(e,t,o,s){no(t,i=>{G(e,r=>{r.addEventListener(i,o,s)})})}function Z(e,t,o={}){no(t,s=>{let i=new CustomEvent(s,{bubbles:!0,cancelable:!0,...o});G(e,r=>{r.dispatchEvent(i)})})}function oo(e){let t=e.text||e.textContent||e.innerHTML||"",o=e.src||"",s=e.parentNode||document.querySelector("head")||document.documentElement,i=document.createElement("script");return t.match("document.write")?!1:(i.type="text/javascript",i.id=e.id,o!==""&&(i.src=o,i.async=!1),t!==""&&i.appendChild(document.createTextNode(t)),s.appendChild(i),(s instanceof HTMLHeadElement||s instanceof HTMLBodyElement)&&s.contains(i)&&s.removeChild(i),!0)}function vo(e){e.tagName.toLowerCase()==="script"&&oo(e),G(e.querySelectorAll("script"),t=>{let o=t;(!o.type||o.type.toLowerCase()==="text/javascript")&&(o.parentNode&&o.parentNode.removeChild(o),oo(o))})}function wo(e,t,o,s=document){e.forEach(i=>{G(s.querySelectorAll(i),t,o)})}var xe=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function ro(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function bo(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function so(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let o=t.attributes;for(let s=0;s<o.length;s++)e.attributes.setNamedItem(o[s].cloneNode())}this.onSwitch()}function yo({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:o={},switchesOptions:s={},history:i=!0,scrollTo:r=0,scrollRestoration:c=!0,cacheBust:n=!0,timeout:a=0,currentUrlFullReload:d=!1}={}){let l={elements:e,selectors:t,switches:o,switchesOptions:s,history:i,scrollTo:r,scrollRestoration:c,cacheBust:n,timeout:a,currentUrlFullReload:d};return l.switches.head||(l.switches.head=so),l.switches.body||(l.switches.body=so),l}var Te="data-pjax-state";function io(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let o={...this.options},s=Lo(e,t);if(s){e.setAttribute(Te,s);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(Te,"reload"),this.reload();return}e.setAttribute(Te,"load"),o.triggerElement=e,this.loadUrl(e.href,o)}function Lo(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function Co(e){e.setAttribute(Te,""),Fe(e,"click",t=>io.call(this,e,t)),Fe(e,"keyup",t=>{let o=t;o.keyCode===13&&io.call(this,e,o)})}function Eo(e,t,o,s){if(s={...s||this.options},s.request=t,e===!1){Z(document,"pjax:complete pjax:error",s);return}let i=window.history.state||{};window.history.replaceState({url:i.url||window.location.href,title:i.title||document.title,uid:i.uid||xe(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let r=o;t.responseURL?o!==t.responseURL&&(o=t.responseURL):t.getResponseHeader("X-PJAX-URL")?o=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(o=t.getResponseHeader("X-XHR-Redirected-To"));let c=document.createElement("a");c.href=r;let n=c.hash;c.href=o,n&&!c.hash&&(c.hash=n,o=c.href),this.state.href=o,this.state.options=s;try{this.loadContent(e,s)}catch(a){return Z(document,"pjax:error",s),console.error("Pjax switch fail: ",a),this.latestChance(o)}}function Ao(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function xo(e,t,o){let s=new RegExp("([?&])"+t+"=.*?(&|$)","i"),i=e.indexOf("?")!==-1?"&":"?";return e.match(s)?e.replace(s,"$1"+t+"="+o+"$2"):e+i+t+"="+o}function To(e,t={},o){let s=t.requestOptions||{},i=(s.requestMethod||"GET").toUpperCase(),r=s.requestParams||null,c=null,n=new XMLHttpRequest,a=t.timeout;if(n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?o(n.responseText,n,e,t):n.status!==0&&o(null,n,e,t))},n.onerror=d=>{console.error(d),o(null,n,e,t)},n.ontimeout=()=>{o(null,n,e,t)},r&&r.length){let d=r.map(l=>l.name+"="+l.value).join("&");switch(i){case"GET":e=e.split("?")[0],e+="?"+d;break;case"POST":c=d;break}}return t.cacheBust&&(e=xo(e,"t",Date.now())),n.open(i,e,!0),n.timeout=a,n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.setRequestHeader("X-PJAX","true"),n.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),n.send(c),n}function _o(e,t,o,s,i,r){let c=[];o.forEach(n=>{let a=s.querySelectorAll(n),d=i.querySelectorAll(n);if(a.length!==d.length)throw new Error(`DOM doesn't look the same on new loaded page: '${n}' - new ${a.length}, old ${d.length}`);G(a,(l,g)=>{let u=d[g],w=e[n]?e[n].bind(this,u,l,r,t[n]):ro.bind(this,u,l,r);c.push(w)},this)},this),this.state.numPendingSwitches=c.length,c.forEach(n=>{n()})}function ko(e,t,o){for(let s of t){let i=e.querySelectorAll(s);for(let r=0;r<i.length;r++)if(i[r].contains(o))return!0}return!1}var R=class{constructor(t){this.state={numPendingSwitches:0,href:null,options:null},this.options=yo(t),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=xe(),this.parseDOM(document),Fe(window,"popstate",o=>{let s=o;if(s.state){let i={...this.options};i.url=s.state.url,i.title=s.state.title,i.history=!1,i.scrollPos=s.state.scrollPos,s.state.uid<this.lastUid?i.backward=!0:i.forward=!0,this.lastUid=s.state.uid,this.loadUrl(s.state.url,i)}})}getElements(t){return t.querySelectorAll(this.options.elements)}parseDOM(t){G(this.getElements(t),Ao,this)}refresh(t){this.parseDOM(t||document)}reload(){window.location.reload()}forEachSelectors(t,o,s){return wo.bind(this)(this.options.selectors,t,o,s)}switchSelectors(t,o,s,i){return _o.bind(this)(this.options.switches,this.options.switchesOptions,t,o,s,i)}latestChance(t){window.location=t}onSwitch(){Z(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(t,o){if(typeof t!="string"){Z(document,"pjax:complete pjax:error",o);return}let s=document.implementation.createHTMLDocument("pjax"),i=/<html[^>]+>/gi,r=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,c=t.match(i);if(c&&c.length&&(c=c[0].match(r),c.length&&(c.shift(),c.forEach(n=>{let a=n.trim().split("=");a.length===1?s.documentElement.setAttribute(a[0],"true"):s.documentElement.setAttribute(a[0],a[1].slice(1,-1))}))),s.documentElement.innerHTML=t,document.activeElement&&ko(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,s,document,o)}loadUrl(t,o){o=typeof o=="object"?{...this.options,...o}:{...this.options},this.abortRequest(this.request),Z(document,"pjax:send",o),this.request=this.doRequest(t,o,this.handleResponse.bind(this))}afterAllSwitches(){var t,o,s;this.options.selectors.forEach(r=>{G(document.querySelectorAll(r),c=>{vo(c)})});let i=this.state;if(!((t=i.options)===null||t===void 0)&&t.history&&(window.history.state||(this.lastUid=this.maxUid=xe(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=xe(),window.history.pushState({url:i.href,title:i.options.title,uid:this.maxUid,scrollPos:[0,0]},i.options.title,i.href)),this.forEachSelectors(r=>{this.parseDOM(r)},this),Z(document,"pjax:complete pjax:success",i.options),!((o=i.options)===null||o===void 0)&&o.history){let r=document.createElement("a");if(r.href=this.state.href,r.hash){let c=r.hash.slice(1);c=decodeURIComponent(c);let n=0,a=document.getElementById(c)||document.getElementsByName(c)[0];if(a&&a.offsetParent)do n+=a.offsetTop,a=a.offsetParent;while(a);window.scrollTo(0,n)}else i.options.scrollTo!==!1&&(Array.isArray(i.options.scrollTo)?window.scrollTo(i.options.scrollTo[0],i.options.scrollTo[1]):window.scrollTo(0,i.options.scrollTo))}else!((s=i.options)===null||s===void 0)&&s.scrollRestoration&&i.options.scrollPos&&window.scrollTo(i.options.scrollPos[0],i.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(t){t&&t.readyState<4&&(t.onreadystatechange=()=>{},t.abort())}};R.prototype.attachLink=Co;R.prototype.doRequest=To;R.prototype.handleResponse=Eo;R.switches={innerHTML:bo,outerHTML:ro};h();function ao(){function e(){let t,o=_(m(".theme"),".ic"),s=W(se,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),i=()=>{L(s,{delay:2500,opacity:0},()=>{se.removeChild(s)})};o.hasClass("i-sun")?t=()=>{s.addClass("dark"),H("dark"),re.set("theme","dark"),i()}:(s.addClass("dark"),t=()=>{s.removeClass("dark"),H(),re.set("theme","light"),i()}),L(s,1,()=>{setTimeout(t,210)},()=>{ee(s,"block")})}_(m("#rightNav"),".theme .ic").addEventListener("click",e)}var Ho=()=>{ao(),Pe(),gt(new R({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),v.quicklink.ignores=LOCAL.ignores,import("./quicklink-MGBXPPMU.js").then(({listen:e})=>{e(v.quicklink)}),Mt(),Ut(),Bt(),m("li.item.search > i").addEventListener("click",()=>{v.search!==null&&(Se||Et(W(se,"div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})),import("./search-XOQQ5SG7.js").then(({algoliaSearch:e})=>{e(rt)}),m.each(".search",e=>{e.addEventListener("click",()=>{document.body.style.overflow="hidden",L(Se,"shrinkIn",()=>{m(".search-input").focus()})})}))},{once:!0,capture:!0}),import("./index.esm-GLKX2K2H.js").then(e=>{e.default(v.fireworks)}),window.addEventListener("scroll",Dt,{passive:!0}),window.addEventListener("resize",ye,{passive:!0}),window.addEventListener("pjax:send",to,{passive:!0}),window.addEventListener("pjax:success",$e,{passive:!0}),window.addEventListener("beforeunload",()=>{be()}),$e(1)};_t();window.addEventListener("DOMContentLoaded",Ho,{passive:!0});console.log("%c Theme.ShokaX v"+v.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
/*! For license information please see siteInit.js.LEGAL.txt */
