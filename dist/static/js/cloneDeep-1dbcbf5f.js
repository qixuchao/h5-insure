import{b3 as t,aZ as e,b4 as r,b5 as a,b6 as n,b7 as c,b8 as o,b9 as b,ba as s,bb as u,bc as i,bd as j,be as f,bf as y,bg as l,aY as A,b0 as v,bh as p,bi as d,bj as g,bk as w,aW as m,bl as x,bm as O}from"./index-4a5bebd7.js";var S=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)c(e,a(t)),t=o(t);return e}:n;function h(t){return b(t,r,S)}var I=Object.prototype.hasOwnProperty;var U=/\w*$/;var F=u?u.prototype:void 0,E=F?F.valueOf:void 0;function M(t,e,r){var a,n,c,o=t.constructor;switch(e){case"[object ArrayBuffer]":return s(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?s(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return i(t,r);case"[object Map]":case"[object Set]":return new o;case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return(c=new(n=t).constructor(n.source,U.exec(n))).lastIndex=n.lastIndex,c;case"[object Symbol]":return a=t,E?Object(E.call(a)):{}}}var B=y&&y.isMap,D=B?l(B):function(t){return j(t)&&"[object Map]"==f(t)};var k=y&&y.isSet,C=k?l(k):function(t){return j(t)&&"[object Set]"==f(t)},N={};function P(n,c,o,b,s,u){var i,j=1&c,y=2&c,l=4&c;if(o&&(i=s?o(n,b,s,u):o(n)),void 0!==i)return i;if(!A(n))return n;var U=v(n);if(U){if(i=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&I.call(t,"index")&&(r.index=t.index,r.input=t.input),r}(n),!j)return p(n,i)}else{var F=f(n),E="[object Function]"==F||"[object GeneratorFunction]"==F;if(d(n))return g(n,j);if("[object Object]"==F||"[object Arguments]"==F||E&&!s){if(i=y||E?{}:w(n),!j)return y?function(e,r){return t(e,S(e),r)}(n,function(e,a){return e&&t(a,r(a),e)}(i,n)):function(e,r){return t(e,a(e),r)}(n,function(r,a){return r&&t(a,e(a),r)}(i,n))}else{if(!N[F])return s?n:{};i=M(n,F,j)}}u||(u=new m);var B=u.get(n);if(B)return B;u.set(n,i),C(n)?n.forEach((function(t){i.add(P(t,c,o,t,n,u))})):D(n)&&n.forEach((function(t,e){i.set(e,P(t,c,o,e,n,u))}));var k=U?void 0:(l?y?h:x:y?r:e)(n);return function(t,e){for(var r=-1,a=null==t?0:t.length;++r<a&&!1!==e(t[r],r,t););}(k||n,(function(t,e){k&&(t=n[e=t]),O(i,e,P(t,c,o,e,n,u))})),i}N["[object Arguments]"]=N["[object Array]"]=N["[object ArrayBuffer]"]=N["[object DataView]"]=N["[object Boolean]"]=N["[object Date]"]=N["[object Float32Array]"]=N["[object Float64Array]"]=N["[object Int8Array]"]=N["[object Int16Array]"]=N["[object Int32Array]"]=N["[object Map]"]=N["[object Number]"]=N["[object Object]"]=N["[object RegExp]"]=N["[object Set]"]=N["[object String]"]=N["[object Symbol]"]=N["[object Uint8Array]"]=N["[object Uint8ClampedArray]"]=N["[object Uint16Array]"]=N["[object Uint32Array]"]=!0,N["[object Error]"]=N["[object Function]"]=N["[object WeakMap]"]=!1;function R(t){return P(t,5)}export{R as c};
