import{c as r,d as s}from"./chunk-V56H5T46.js";r();var N=()=>n("main > .inner").offsetHeight,n=(t,e=document)=>t[0]==="#"?e.getElementById(t.substring(1)):e.querySelector(t);n.all=(t,e=document)=>e.querySelectorAll(t);n.each=(t,e,o)=>{n.all(t,o).forEach(e)};r();var d=function(t,e){let o=t.parentNode;o.lastChild===t?o.appendChild(e):o.insertBefore(e,t.nextSibling)},k=function(t,e,o,a){let i=document.createElement(e);switch(Object.assign(i,o),a){case"after":d(t,i);break;case"replace":t.innerHTML="",t.appendChild(i);break;default:t.appendChild(i)}return i},D=function(t,e){let o=document.createElement("div");Object.assign(o,e),t.parentNode.insertBefore(o,t),t.parentNode.removeChild(t),o.appendChild(t)},W=function(t){return t.getBoundingClientRect().height},P=function(t,e){t.style.width=typeof e=="number"?e+"rem":e};var _=function(t){return t.getBoundingClientRect().top};var A=function(t){return t.style.display},I=function(t,e){return t.style.display=e,t},R=function(t,e){return n(e,t)};function l(){Object.assign(HTMLElement.prototype,{child(t){return n(t,this)},find(t){return n.all(t,this)},_class(t,e,o){(e.indexOf(" ")?e.split(" "):[e]).forEach(i=>{t==="toggle"?this.classList.toggle(i,o):this.classList[t](i)})},addClass(t){return this._class("add",t),this},removeClass(t){return this._class("remove",t),this},toggleClass(t,e){return this._class("toggle",t,e),this},hasClass(t){return this.classList.contains(t)}})}r();var c=s;l();var F=c.statics.indexOf("//")>0?c.statics:c.root,J={x:0,y:0},u=0,m,p,U=document.getElementsByTagName("body")[0],z=document.documentElement,K=n("#container"),Q=n("#loading"),g=n("#nav"),V=n("#header"),X=g.child(".toggle"),Z=n("#quick"),tt=n("#sidebar"),et=n("#brand"),x=n("#tool"),f,h,T,H,L=n("#search"),E,b,v,M=window.innerHeight,C=window.innerWidth,y=0,O=window.location.href,B;function nt(t){E=t}function ot(t){b=t}function it(t){v=t}function rt(t){M=t}function st(t){C=t}function lt(t){u=t}function ct(t){p=t}function at(t){y=t}function dt(t){O=t}function ut(t){B=t}function mt(t){m=t}function pt(t){f=t}function gt(t){h=t}function xt(t){T=t}function ft(t){H=t}function ht(t){x=t}function Tt(t){L=t}export{N as a,n as b,d as c,k as d,D as e,W as f,P as g,_ as h,A as i,I as j,R as k,l,c as m,F as n,J as o,u as p,m as q,p as r,U as s,z as t,K as u,Q as v,g as w,V as x,X as y,Z as z,tt as A,et as B,x as C,h as D,T as E,H as F,L as G,E as H,b as I,v as J,C as K,y as L,O as M,B as N,nt as O,ot as P,it as Q,rt as R,st as S,lt as T,ct as U,at as V,dt as W,ut as X,mt as Y,pt as Z,gt as _,xt as $,ft as aa,ht as ba,Tt as ca};
/*! For license information please see chunk-3QUTE75Z.js.LEGAL.txt */
