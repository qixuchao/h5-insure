import{aV as t,aP as e,aW as r,aX as a,aY as n,aZ as c,a_ as o,a$ as b,b0 as s,b1 as u,b2 as i,b3 as j,b4 as f,b5 as y,b6 as l,aO as A,aS as v,b7 as p,b8 as d,b9 as w,ba as g,aM as m,bb as x,bc as O}from"./index-081cd25a.js";var S=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)c(e,a(t)),t=o(t);return e}:n;function I(t){return b(t,r,S)}var U=Object.prototype.hasOwnProperty;var h=/\w*$/;var F=u?u.prototype:void 0,M=F?F.valueOf:void 0;function E(t,e,r){var a,n,c,o=t.constructor;switch(e){case"[object ArrayBuffer]":return s(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?s(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return i(t,r);case"[object Map]":case"[object Set]":return new o;case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return(c=new(n=t).constructor(n.source,h.exec(n))).lastIndex=n.lastIndex,c;case"[object Symbol]":return a=t,M?Object(M.call(a)):{}}}var B=y&&y.isMap,D=B?l(B):function(t){return j(t)&&"[object Map]"==f(t)};var P=y&&y.isSet,V=P?l(P):function(t){return j(t)&&"[object Set]"==f(t)},C={};function N(n,c,o,b,s,u){var i,j=1&c,y=2&c,l=4&c;if(o&&(i=s?o(n,b,s,u):o(n)),void 0!==i)return i;if(!A(n))return n;var h=v(n);if(h){if(i=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&U.call(t,"index")&&(r.index=t.index,r.input=t.input),r}(n),!j)return p(n,i)}else{var F=f(n),M="[object Function]"==F||"[object GeneratorFunction]"==F;if(d(n))return w(n,j);if("[object Object]"==F||"[object Arguments]"==F||M&&!s){if(i=y||M?{}:g(n),!j)return y?function(e,r){return t(e,S(e),r)}(n,function(e,a){return e&&t(a,r(a),e)}(i,n)):function(e,r){return t(e,a(e),r)}(n,function(r,a){return r&&t(a,e(a),r)}(i,n))}else{if(!C[F])return s?n:{};i=E(n,F,j)}}u||(u=new m);var B=u.get(n);if(B)return B;u.set(n,i),V(n)?n.forEach((function(t){i.add(N(t,c,o,t,n,u))})):D(n)&&n.forEach((function(t,e){i.set(e,N(t,c,o,e,n,u))}));var P=h?void 0:(l?y?I:x:y?r:e)(n);return function(t,e){for(var r=-1,a=null==t?0:t.length;++r<a&&!1!==e(t[r],r,t););}(P||n,(function(t,e){P&&(t=n[e=t]),O(i,e,N(t,c,o,e,n,u))})),i}C["[object Arguments]"]=C["[object Array]"]=C["[object ArrayBuffer]"]=C["[object DataView]"]=C["[object Boolean]"]=C["[object Date]"]=C["[object Float32Array]"]=C["[object Float64Array]"]=C["[object Int8Array]"]=C["[object Int16Array]"]=C["[object Int32Array]"]=C["[object Map]"]=C["[object Number]"]=C["[object Object]"]=C["[object RegExp]"]=C["[object Set]"]=C["[object String]"]=C["[object Symbol]"]=C["[object Uint8Array]"]=C["[object Uint8ClampedArray]"]=C["[object Uint16Array]"]=C["[object Uint32Array]"]=!0,C["[object Error]"]=C["[object Function]"]=C["[object WeakMap]"]=!1;function R(t){return N(t,5)}export{R as c};
