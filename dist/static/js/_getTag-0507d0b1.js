import{v as e,w as r,i as t,x as a,a as n,y as o,z as c,A as s}from"./keysIn-131bbce9.js";import{r as u,b}from"./isObjectLike-a9798079.js";var i=e(Object.keys,Object),j=Object.prototype.hasOwnProperty;function f(e){if(!r(e))return i(e);var t=[];for(var a in Object(e))j.call(e,a)&&"constructor"!=a&&t.push(a);return t}function p(e){return t(e)?a(e):f(e)}function l(){return[]}var v=Object.prototype.propertyIsEnumerable,w=Object.getOwnPropertySymbols,O=w?function(e){return null==e?[]:(e=Object(e),function(e,r){for(var t=-1,a=null==e?0:e.length,n=0,o=[];++t<a;){var c=e[t];r(c,t,e)&&(o[n++]=c)}return o}(w(e),(function(r){return v.call(e,r)})))}:l;function y(e,r){for(var t=-1,a=r.length,n=e.length;++t<a;)e[n+t]=r[t];return e}function m(e,r,t){var a=r(e);return n(e)?a:y(a,t(e))}function k(e){return m(e,p,O)}var h=o(u,"DataView"),g=o(u,"Promise"),M=o(u,"Set"),P=o(u,"WeakMap"),S=c(h),D=c(s),V=c(g),W=c(M),d=c(P),x=b;(h&&"[object DataView]"!=x(new h(new ArrayBuffer(1)))||s&&"[object Map]"!=x(new s)||g&&"[object Promise]"!=x(g.resolve())||M&&"[object Set]"!=x(new M)||P&&"[object WeakMap]"!=x(new P))&&(x=function(e){var r=b(e),t="[object Object]"==r?e.constructor:void 0,a=t?c(t):"";if(a)switch(a){case S:return"[object DataView]";case D:return"[object Map]";case V:return"[object Promise]";case W:return"[object Set]";case d:return"[object WeakMap]"}return r});var A=x;export{y as a,m as b,A as c,k as d,f as e,O as g,p as k,l as s};
