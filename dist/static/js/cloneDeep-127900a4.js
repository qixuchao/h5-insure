import{c as t,k as e,g as r,t as a,l as o,r as c,s as n,a as s,h as b,d as u,j as i,o as j,S as f,u as y}from"./keysIn-b1e7a5ec.js";import{k as l,b as A,s as p,c as v,d,a as g,g as m}from"./_getTag-6b6e476d.js";import{S as w,i as S,a as O}from"./isObjectLike-a9798079.js";var x=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)v(e,A(t)),t=r(t);return e}:p;function I(t){return d(t,e,x)}var h=Object.prototype.hasOwnProperty;var U=/\w*$/;var F=w?w.prototype:void 0,k=F?F.valueOf:void 0;function E(t,e,r){var c,n,s,b=t.constructor;switch(e){case"[object ArrayBuffer]":return a(t);case"[object Boolean]":case"[object Date]":return new b(+t);case"[object DataView]":return function(t,e){var r=e?a(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return o(t,r);case"[object Map]":case"[object Set]":return new b;case"[object Number]":case"[object String]":return new b(t);case"[object RegExp]":return(s=new(n=t).constructor(n.source,U.exec(n))).lastIndex=n.lastIndex,s;case"[object Symbol]":return c=t,k?Object(k.call(c)):{}}}var M=c&&c.isMap,B=M?n(M):function(t){return S(t)&&"[object Map]"==g(t)};var D=c&&c.isSet,C=D?n(D):function(t){return S(t)&&"[object Set]"==g(t)},L={};function N(r,a,o,c,n,p){var v,d=1&a,w=2&a,S=4&a;if(o&&(v=n?o(r,c,n,p):o(r)),void 0!==v)return v;if(!O(r))return r;var U=s(r);if(U){if(v=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&h.call(t,"index")&&(r.index=t.index,r.input=t.input),r}(r),!d)return b(r,v)}else{var F=g(r),k="[object Function]"==F||"[object GeneratorFunction]"==F;if(u(r))return i(r,d);if("[object Object]"==F||"[object Arguments]"==F||k&&!n){if(v=w||k?{}:j(r),!d)return w?function(e,r){return t(e,x(e),r)}(r,function(r,a){return r&&t(a,e(a),r)}(v,r)):function(e,r){return t(e,A(e),r)}(r,function(e,r){return e&&t(r,l(r),e)}(v,r))}else{if(!L[F])return n?r:{};v=E(r,F,d)}}p||(p=new f);var M=p.get(r);if(M)return M;p.set(r,v),C(r)?r.forEach((function(t){v.add(N(t,a,o,t,r,p))})):B(r)&&r.forEach((function(t,e){v.set(e,N(t,a,o,e,r,p))}));var D=U?void 0:(S?w?I:m:w?e:l)(r);return function(t,e){for(var r=-1,a=null==t?0:t.length;++r<a&&!1!==e(t[r],r,t););}(D||r,(function(t,e){D&&(t=r[e=t]),y(v,e,N(t,a,o,e,r,p))})),v}L["[object Arguments]"]=L["[object Array]"]=L["[object ArrayBuffer]"]=L["[object DataView]"]=L["[object Boolean]"]=L["[object Date]"]=L["[object Float32Array]"]=L["[object Float64Array]"]=L["[object Int8Array]"]=L["[object Int16Array]"]=L["[object Int32Array]"]=L["[object Map]"]=L["[object Number]"]=L["[object Object]"]=L["[object RegExp]"]=L["[object Set]"]=L["[object String]"]=L["[object Symbol]"]=L["[object Uint8Array]"]=L["[object Uint8ClampedArray]"]=L["[object Uint16Array]"]=L["[object Uint32Array]"]=!0,L["[object Error]"]=L["[object Function]"]=L["[object WeakMap]"]=!1;function P(t){return N(t,5)}export{P as c};
