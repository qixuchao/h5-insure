import{a as e,v as r,w as t,i as a,x as n,y as o,z as c,A as s}from"./keysIn-b1e7a5ec.js";import{r as u,b as i}from"./isObjectLike-a9798079.js";function b(e,r){for(var t=-1,a=r.length,n=e.length;++t<a;)e[n+t]=r[t];return e}function j(r,t,a){var n=t(r);return e(r)?n:b(n,a(r))}function f(){return[]}var p=Object.prototype.propertyIsEnumerable,l=Object.getOwnPropertySymbols,v=l?function(e){return null==e?[]:(e=Object(e),function(e,r){for(var t=-1,a=null==e?0:e.length,n=0,o=[];++t<a;){var c=e[t];r(c,t,e)&&(o[n++]=c)}return o}(l(e),(function(r){return p.call(e,r)})))}:f,w=r(Object.keys,Object),O=Object.prototype.hasOwnProperty;function y(e){if(!t(e))return w(e);var r=[];for(var a in Object(e))O.call(e,a)&&"constructor"!=a&&r.push(a);return r}function m(e){return a(e)?n(e):y(e)}function k(e){return j(e,m,v)}var h=o(u,"DataView"),g=o(u,"Promise"),M=o(u,"Set"),P=o(u,"WeakMap"),S=c(h),D=c(s),V=c(g),W=c(M),d=c(P),x=i;(h&&"[object DataView]"!=x(new h(new ArrayBuffer(1)))||s&&"[object Map]"!=x(new s)||g&&"[object Promise]"!=x(g.resolve())||M&&"[object Set]"!=x(new M)||P&&"[object WeakMap]"!=x(new P))&&(x=function(e){var r=i(e),t="[object Object]"==r?e.constructor:void 0,a=t?c(t):"";if(a)switch(a){case S:return"[object DataView]";case D:return"[object Map]";case V:return"[object Promise]";case W:return"[object Set]";case d:return"[object WeakMap]"}return r});var A=x;export{A as a,v as b,b as c,j as d,y as e,k as g,m as k,f as s};
