import{_ as e,d as t,bY as a,bZ as r,c9 as n,b_ as o,u as s,a as i,r as l,J as c,E as u,G as d,g as p,c as v,h as f,e as b,w as h,j as y,f as _,a7 as m,k as j,b1 as g,t as A,n as w,T as x,ap as O,V as I,ag as k,bT as P,X as E,Y as D,bG as F}from"./index-a44d8740.js";import{b as U,r as S,i as B,S as z}from"./isObjectLike-f858f31d.js";import{i as C}from"./isObject-cd478a85.js";import{n as N,b as V}from"./_nodeUtil-ef4cea77.js";import{p as R}from"./product-cfa12ce4.js";import{d as L,i as T,g as M,s as $,e as G,E as H}from"./trial-cedcaeca.js";import{a as J,t as W,c as K,s as Q,b as Y,d as q}from"./utils-a8fcf179.js";import{a as Z}from"./order-d79ff83f.js";import{_ as X}from"./index-40b03d90.js";import{_ as ee}from"./index-04c53ba8.js";import{P as te}from"./index-0d70a41d.js";import"./pdfh5-008ca364.js";import"./infoCollection-3819e49d.js";import"./trial-b4d6d569.js";import"./relativeTime-fde2a46e.js";import"./validator-5a13dc82.js";import"./useDicData-fd51eecb.js";function ae(e,t){return e===t||e!=e&&t!=t}function re(e,t){for(var a=e.length;a--;)if(ae(e[a][0],t))return a;return-1}var ne=Array.prototype.splice;function oe(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}oe.prototype.clear=function(){this.__data__=[],this.size=0},oe.prototype.delete=function(e){var t=this.__data__,a=re(t,e);return!(a<0)&&(a==t.length-1?t.pop():ne.call(t,a,1),--this.size,!0)},oe.prototype.get=function(e){var t=this.__data__,a=re(t,e);return a<0?void 0:t[a][1]},oe.prototype.has=function(e){return re(this.__data__,e)>-1},oe.prototype.set=function(e,t){var a=this.__data__,r=re(a,e);return r<0?(++this.size,a.push([e,t])):a[r][1]=t,this};function se(e){if(!C(e))return!1;var t=U(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}var ie,le=S["__core-js_shared__"],ce=(ie=/[^.]+$/.exec(le&&le.keys&&le.keys.IE_PROTO||""))?"Symbol(src)_1."+ie:"";var ue=Function.prototype.toString;function de(e){if(null!=e){try{return ue.call(e)}catch(t){}try{return e+""}catch(t){}}return""}var pe=/^\[object .+?Constructor\]$/,ve=Function.prototype,fe=Object.prototype,be=ve.toString,he=fe.hasOwnProperty,ye=RegExp("^"+be.call(he).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function _e(e){return!(!C(e)||(t=e,ce&&ce in t))&&(se(e)?ye:pe).test(de(e));var t}function me(e,t){var a=function(e,t){return null==e?void 0:e[t]}(e,t);return _e(a)?a:void 0}var je=me(S,"Map"),ge=me(Object,"create");var Ae=Object.prototype.hasOwnProperty;var we=Object.prototype.hasOwnProperty;function xe(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}function Oe(e,t){var a,r,n=e.__data__;return("string"==(r=typeof(a=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==a:null===a)?n["string"==typeof t?"string":"hash"]:n.map}function Ie(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}xe.prototype.clear=function(){this.__data__=ge?ge(null):{},this.size=0},xe.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},xe.prototype.get=function(e){var t=this.__data__;if(ge){var a=t[e];return"__lodash_hash_undefined__"===a?void 0:a}return Ae.call(t,e)?t[e]:void 0},xe.prototype.has=function(e){var t=this.__data__;return ge?void 0!==t[e]:we.call(t,e)},xe.prototype.set=function(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=ge&&void 0===t?"__lodash_hash_undefined__":t,this},Ie.prototype.clear=function(){this.size=0,this.__data__={hash:new xe,map:new(je||oe),string:new xe}},Ie.prototype.delete=function(e){var t=Oe(this,e).delete(e);return this.size-=t?1:0,t},Ie.prototype.get=function(e){return Oe(this,e).get(e)},Ie.prototype.has=function(e){return Oe(this,e).has(e)},Ie.prototype.set=function(e,t){var a=Oe(this,e),r=a.size;return a.set(e,t),this.size+=a.size==r?0:1,this};function ke(e){var t=this.__data__=new oe(e);this.size=t.size}ke.prototype.clear=function(){this.__data__=new oe,this.size=0},ke.prototype.delete=function(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a},ke.prototype.get=function(e){return this.__data__.get(e)},ke.prototype.has=function(e){return this.__data__.has(e)},ke.prototype.set=function(e,t){var a=this.__data__;if(a instanceof oe){var r=a.__data__;if(!je||r.length<199)return r.push([e,t]),this.size=++a.size,this;a=this.__data__=new Ie(r)}return a.set(e,t),this.size=a.size,this};var Pe=function(){try{var e=me(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();function Ee(e,t,a){"__proto__"==t&&Pe?Pe(e,t,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[t]=a}var De=Object.prototype.hasOwnProperty;function Fe(e,t,a){var r=e[t];De.call(e,t)&&ae(r,a)&&(void 0!==a||t in e)||Ee(e,t,a)}function Ue(e,t,a,r){var n=!a;a||(a={});for(var o=-1,s=t.length;++o<s;){var i=t[o],l=r?r(a[i],e[i],i,a,e):void 0;void 0===l&&(l=e[i]),n?Ee(a,i,l):Fe(a,i,l)}return a}function Se(e){return B(e)&&"[object Arguments]"==U(e)}var Be=Object.prototype,ze=Be.hasOwnProperty,Ce=Be.propertyIsEnumerable,Ne=Se(function(){return arguments}())?Se:function(e){return B(e)&&ze.call(e,"callee")&&!Ce.call(e,"callee")},Ve=Array.isArray;var Re="object"==typeof exports&&exports&&!exports.nodeType&&exports,Le=Re&&"object"==typeof module&&module&&!module.nodeType&&module,Te=Le&&Le.exports===Re?S.Buffer:void 0,Me=(Te?Te.isBuffer:void 0)||function(){return!1},$e=/^(?:0|[1-9]\d*)$/;function Ge(e,t){var a=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==a||"symbol"!=a&&$e.test(e))&&e>-1&&e%1==0&&e<t}function He(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}var Je={};Je["[object Float32Array]"]=Je["[object Float64Array]"]=Je["[object Int8Array]"]=Je["[object Int16Array]"]=Je["[object Int32Array]"]=Je["[object Uint8Array]"]=Je["[object Uint8ClampedArray]"]=Je["[object Uint16Array]"]=Je["[object Uint32Array]"]=!0,Je["[object Arguments]"]=Je["[object Array]"]=Je["[object ArrayBuffer]"]=Je["[object Boolean]"]=Je["[object DataView]"]=Je["[object Date]"]=Je["[object Error]"]=Je["[object Function]"]=Je["[object Map]"]=Je["[object Number]"]=Je["[object Object]"]=Je["[object RegExp]"]=Je["[object Set]"]=Je["[object String]"]=Je["[object WeakMap]"]=!1;var We=N&&N.isTypedArray,Ke=We?V(We):function(e){return B(e)&&He(e.length)&&!!Je[U(e)]},Qe=Object.prototype.hasOwnProperty;function Ye(e,t){var a=Ve(e),r=!a&&Ne(e),n=!a&&!r&&Me(e),o=!a&&!r&&!n&&Ke(e),s=a||r||n||o,i=s?function(e,t){for(var a=-1,r=Array(e);++a<e;)r[a]=t(a);return r}(e.length,String):[],l=i.length;for(var c in e)!t&&!Qe.call(e,c)||s&&("length"==c||n&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Ge(c,l))||i.push(c);return i}var qe=Object.prototype;function Ze(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||qe)}function Xe(e,t){return function(a){return e(t(a))}}var et=Xe(Object.keys,Object),tt=Object.prototype.hasOwnProperty;function at(e){return null!=e&&He(e.length)&&!se(e)}function rt(e){return at(e)?Ye(e):function(e){if(!Ze(e))return et(e);var t=[];for(var a in Object(e))tt.call(e,a)&&"constructor"!=a&&t.push(a);return t}(e)}var nt=Object.prototype.hasOwnProperty;function ot(e){if(!C(e))return function(e){var t=[];if(null!=e)for(var a in Object(e))t.push(a);return t}(e);var t=Ze(e),a=[];for(var r in e)("constructor"!=r||!t&&nt.call(e,r))&&a.push(r);return a}function st(e){return at(e)?Ye(e,!0):ot(e)}var it="object"==typeof exports&&exports&&!exports.nodeType&&exports,lt=it&&"object"==typeof module&&module&&!module.nodeType&&module,ct=lt&&lt.exports===it?S.Buffer:void 0,ut=ct?ct.allocUnsafe:void 0;function dt(){return[]}var pt=Object.prototype.propertyIsEnumerable,vt=Object.getOwnPropertySymbols,ft=vt?function(e){return null==e?[]:(e=Object(e),function(e,t){for(var a=-1,r=null==e?0:e.length,n=0,o=[];++a<r;){var s=e[a];t(s,a,e)&&(o[n++]=s)}return o}(vt(e),(function(t){return pt.call(e,t)})))}:dt;function bt(e,t){for(var a=-1,r=t.length,n=e.length;++a<r;)e[n+a]=t[a];return e}var ht=Xe(Object.getPrototypeOf,Object),yt=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)bt(t,ft(e)),e=ht(e);return t}:dt;function _t(e,t,a){var r=t(e);return Ve(e)?r:bt(r,a(e))}function mt(e){return _t(e,rt,ft)}function jt(e){return _t(e,st,yt)}var gt=me(S,"DataView"),At=me(S,"Promise"),wt=me(S,"Set"),xt=me(S,"WeakMap"),Ot=de(gt),It=de(je),kt=de(At),Pt=de(wt),Et=de(xt),Dt=U;(gt&&"[object DataView]"!=Dt(new gt(new ArrayBuffer(1)))||je&&"[object Map]"!=Dt(new je)||At&&"[object Promise]"!=Dt(At.resolve())||wt&&"[object Set]"!=Dt(new wt)||xt&&"[object WeakMap]"!=Dt(new xt))&&(Dt=function(e){var t=U(e),a="[object Object]"==t?e.constructor:void 0,r=a?de(a):"";if(r)switch(r){case Ot:return"[object DataView]";case It:return"[object Map]";case kt:return"[object Promise]";case Pt:return"[object Set]";case Et:return"[object WeakMap]"}return t});var Ft=Dt,Ut=Object.prototype.hasOwnProperty;var St=S.Uint8Array;function Bt(e){var t=new e.constructor(e.byteLength);return new St(t).set(new St(e)),t}var zt=/\w*$/;var Ct=z?z.prototype:void 0,Nt=Ct?Ct.valueOf:void 0;function Vt(e,t,a){var r,n,o,s=e.constructor;switch(t){case"[object ArrayBuffer]":return Bt(e);case"[object Boolean]":case"[object Date]":return new s(+e);case"[object DataView]":return function(e,t){var a=t?Bt(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.byteLength)}(e,a);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(e,t){var a=t?Bt(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.length)}(e,a);case"[object Map]":case"[object Set]":return new s;case"[object Number]":case"[object String]":return new s(e);case"[object RegExp]":return(o=new(n=e).constructor(n.source,zt.exec(n))).lastIndex=n.lastIndex,o;case"[object Symbol]":return r=e,Nt?Object(Nt.call(r)):{}}}var Rt=Object.create,Lt=function(){function e(){}return function(t){if(!C(t))return{};if(Rt)return Rt(t);e.prototype=t;var a=new e;return e.prototype=void 0,a}}();var Tt=N&&N.isMap,Mt=Tt?V(Tt):function(e){return B(e)&&"[object Map]"==Ft(e)};var $t=N&&N.isSet,Gt=$t?V($t):function(e){return B(e)&&"[object Set]"==Ft(e)},Ht={};function Jt(e,t,a,r,n,o){var s,i=1&t,l=2&t,c=4&t;if(a&&(s=n?a(e,r,n,o):a(e)),void 0!==s)return s;if(!C(e))return e;var u=Ve(e);if(u){if(s=function(e){var t=e.length,a=new e.constructor(t);return t&&"string"==typeof e[0]&&Ut.call(e,"index")&&(a.index=e.index,a.input=e.input),a}(e),!i)return function(e,t){var a=-1,r=e.length;for(t||(t=Array(r));++a<r;)t[a]=e[a];return t}(e,s)}else{var d=Ft(e),p="[object Function]"==d||"[object GeneratorFunction]"==d;if(Me(e))return function(e,t){if(t)return e.slice();var a=e.length,r=ut?ut(a):new e.constructor(a);return e.copy(r),r}(e,i);if("[object Object]"==d||"[object Arguments]"==d||p&&!n){if(s=l||p?{}:function(e){return"function"!=typeof e.constructor||Ze(e)?{}:Lt(ht(e))}(e),!i)return l?function(e,t){return Ue(e,yt(e),t)}(e,function(e,t){return e&&Ue(t,st(t),e)}(s,e)):function(e,t){return Ue(e,ft(e),t)}(e,function(e,t){return e&&Ue(t,rt(t),e)}(s,e))}else{if(!Ht[d])return n?e:{};s=Vt(e,d,i)}}o||(o=new ke);var v=o.get(e);if(v)return v;o.set(e,s),Gt(e)?e.forEach((function(r){s.add(Jt(r,t,a,r,e,o))})):Mt(e)&&e.forEach((function(r,n){s.set(n,Jt(r,t,a,n,e,o))}));var f=u?void 0:(c?l?jt:mt:l?st:rt)(e);return function(e,t){for(var a=-1,r=null==e?0:e.length;++a<r&&!1!==t(e[a],a,e););}(f||e,(function(r,n){f&&(r=e[n=r]),Fe(s,n,Jt(r,t,a,n,e,o))})),s}Ht["[object Arguments]"]=Ht["[object Array]"]=Ht["[object ArrayBuffer]"]=Ht["[object DataView]"]=Ht["[object Boolean]"]=Ht["[object Date]"]=Ht["[object Float32Array]"]=Ht["[object Float64Array]"]=Ht["[object Int8Array]"]=Ht["[object Int16Array]"]=Ht["[object Int32Array]"]=Ht["[object Map]"]=Ht["[object Number]"]=Ht["[object Object]"]=Ht["[object RegExp]"]=Ht["[object Set]"]=Ht["[object String]"]=Ht["[object Symbol]"]=Ht["[object Uint8Array]"]=Ht["[object Uint8ClampedArray]"]=Ht["[object Uint16Array]"]=Ht["[object Uint32Array]"]=!0,Ht["[object Error]"]=Ht["[object Function]"]=Ht["[object WeakMap]"]=!1;const Wt=e=>(E("data-v-b7813920"),e=e(),D(),e),Kt={key:0},Qt=[Wt((()=>y("div",{class:"__skeleton_upgrade_content__"},[y("div",{class:"van-config-provider router-view sk",style:{"--van-primary-color":"#0d6efe","--van-primary-color-light8":"#0d6efe80","--van-primary-color-light1":"#0d6efe10","--van-primary-color-light2":"#0d6efe20","--van-danger-color":"#FF3C10","--van-primary-background-color":"#0d6efe20","--van-button-primary-background-color":"#0d6efe","--van-button-primary-border-color":"#0d6efe","--van-checkbox-checked-bg-color":"#0d6efe10","--van-switch-on-background-color":"#0d6efe","--van-toast-default-padding":"14px","--van-linear-bg":"linear-gradient(to right, #0d6efe, rgba(13,150,254,1))","--van-popup-close-icon-margin":"20px","--van-popup-round-border-radius":"20px","--van-card-title":"#0d6efe","--van-card-cell-color":"#0d6efe80","--van-radio-checked-icon-color":"#0d6efe","--van-pro-check-radius":"40px"}},[y("div",{class:"page-upgrade-product-detail"},[y("div",{class:"van-image banner",style:{width:"375px",height:"338px"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},[y("img",{class:"van-image__img","data-src":"https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/common/20230131/7f6e6d1d087a4ced909e9daa18754592/%E5%8D%87%E7%BA%A7%E4%BA%A7%E5%93%81.png?Expires=1676282742&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=B0kGphaHBL5OfHyaMj1ktm9FJvM%3D",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",lazy:"loaded",style:{background:"rgb(238, 238, 238)"}})]),y("div",{class:"page-info-wrapper"},[y("div",{class:"com-form-wrapper","show-error":"","show-error-message":"false"},[y("form",{class:"van-form"},[y("div",{class:"com-card"},[y("div",{class:"com-card-wrap"},[y("div",{class:"header"},[y("div",{class:"title-wrapper"},[y("div",{class:"title showIcon"},[y("span",{class:"sk-text",style:{"--fp":"33.33%","--sp":"66.67%","--lh":"45px"}},"投保信息")])])]),y("div",{class:"body",style:{height:"auto"}},[y("div",{class:"com-personal-wrapper"},[y("div",{class:"van-cell van-field van-field--label-left com-pro-field"},[y("div",{class:"van-cell__title van-field__label van-field__label--left"},[y("label",{id:"van-field-2-label",for:"van-field-2-input"},[y("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"姓名")])]),y("div",{class:"van-cell__value van-field__value"},[y("div",{class:"van-field__body"},[y("input",{type:"text",id:"van-field-2-input",name:"insure_name",class:"van-field__control van-field__control--right sk-input",readonly:"",placeholder:"请输入姓名",autocomplete:"off","aria-labelledby":"van-field-2-label"}),y("div",{class:"van-field__right-icon"})])])]),y("div",{class:"van-cell van-field van-field--label-left com-pro-field"},[y("div",{class:"van-cell__title van-field__label van-field__label--left"},[y("label",{id:"van-field-3-label",for:"van-field-3-input"},[y("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"身份证号")])]),y("div",{class:"van-cell__value van-field__value"},[y("div",{class:"van-field__body"},[y("input",{type:"text",id:"van-field-3-input",name:"insure_certNo",class:"van-field__control van-field__control--right sk-input",readonly:"",placeholder:"请输入身份证号",autocomplete:"off","aria-labelledby":"van-field-3-label"}),y("div",{class:"van-field__right-icon"})])])])]),y("div",{class:"van-cell van-field van-field--label-left com-pro-field"},[y("div",{class:"van-cell__title van-field__label van-field__label--left"},[y("label",{id:"van-field-4-label",for:"van-field-4-input"},[y("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"社保")])]),y("div",{class:"van-cell__value van-field__value"},[y("div",{class:"van-field__body"},[y("div",{class:"van-field__control van-field__control--right van-field__control--custom"},[y("div",{class:"com-radio-btn-wrap"},[y("div",{class:"radio-btn"},[y("div",{class:"btn-wrapper"},[y("div",{class:"com-check-btn activated-disabled"},[y("span",{class:"sk-text",style:{"--fp":"22.92%","--sp":"77.08%","--lh":"24px"}}," 有（含农村合作医疗）")])]),y("div",{class:"btn-wrapper"},[y("div",{class:"com-check-btn disabled sk-border"},[y("span",{class:"sk-text",style:{"--fp":"22.92%","--sp":"77.08%","--lh":"24px"}}," 无")])])])])]),y("div",{class:"van-field__right-icon"})])])])])])])])])]),y("div",{class:"van-cell van-field com-pro-field"},[y("div",{class:"van-cell__title van-field__label"},[y("label",{id:"van-field-5-label",for:"van-field-5-input"},[y("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"每月保费")])]),y("div",{class:"van-cell__value van-field__value"},[y("div",{class:"van-field__body"},[y("input",{type:"text",id:"van-field-5-input",name:"insuredBeneficiaryType",class:"van-field__control van-field__control--right sk-input",placeholder:"请输入每月保费",autocomplete:"off","aria-labelledby":"van-field-5-label"}),y("div",{class:"van-field__right-icon"})])])]),y("div",{class:"com-attachment-list attachment-bg"},[y("span",null,[y("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}},"请阅读")]),y("span",{class:"attachment-item"},[y("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《责任免除说明书》 ")]),y("span",{class:"attachment-item"},[y("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《投保须知》 ")]),y("span",{class:"attachment-item"},[y("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《重要提示》 ")]),y("span",{class:"attachment-item"},[y("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《特别约定》 ")]),y("span",{class:"attachment-item"},[y("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《条款》 ")])]),y("div",{class:"footer-area sk-border"},[y("div",{class:"upgrade-submit"},[y("div",{class:"price"},[y("span",{class:"num"},[y("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"18.200139999999998px"}},"49")]),y("span",{class:"unit"},[y("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"18.200139999999998px"}},"元/月")])]),y("div",{class:"pro-shadow-button right"},[y("button",{type:"button",class:"van-button van-button--primary van-button--normal van-button--block van-button--round shadow-button sk-button"},[y("div",{class:"van-button__content"},[y("span",{class:"van-button__text"},[y("span",{class:"sk-text",style:{"--fp":"8.33%","--sp":"91.67%","--lh":"19.2002px"}},"升级保障")])])])])])])])])],-1)))],Yt={class:"page-upgrade-product-detail"},qt={class:"footer-area"},Zt=Wt((()=>y("span",null,"分享",-1))),Xt={class:"upgrade-submit"},ea={class:"price"},ta={class:"num"},aa=Wt((()=>y("span",{class:"unit"},"元/月",-1)));var ra=e(t({__name:"upgrade",setup(e){const t=a((()=>r((()=>import("./index-48c07f2a.js")),["static/js/index-48c07f2a.js","static/css/index-b9ba3011.css","static/js/index-a44d8740.js","static/css/index-71e64f95.css","static/js/pdfh5-008ca364.js"]))),E=a((()=>r((()=>import("./index-5264f598.js")),["static/js/index-5264f598.js","static/css/index-ea588f10.css","static/js/index-a44d8740.js","static/css/index-71e64f95.css","static/js/pdfh5-008ca364.js","static/js/theme-65292714.js","static/js/index-0d70a41d.js","static/css/index-19d9cc6b.css","static/js/utils-a8fcf179.js","static/js/infoCollection-3819e49d.js","static/js/trial-b4d6d569.js"]))),D=n(),U=o(),S=s(),B=i(),{productCode:z="",orderNo:C="",agencyCode:N="",tenantId:V="",saleChannelId:ae="",extraInfo:re}=B.query;let ne={};try{ne=JSON.parse(decodeURIComponent(re))}catch(Ee){console.log(Ee)}const{openId:oe,indirectCode:se="",agentCode:ie}=ne,le=l(!0),ce=l(),ue=l();l();const de=l(),pe=l(),ve=l(),fe=l(),be=l(0),he=l();l(!1),l(!1),l(0);const ye=l(""),_e=l(!0),me=l(),je=c({isOnlyView:!0,activeIndex:0,showFilePreview:!1}),ge=l({imgUrl:"",desc:"",title:"",link:window.location.href}),Ae=()=>{je.showFilePreview=!1,je.isOnlyView=!0},we=u((()=>`${be.value}元/月`)),xe=e=>{var t;const a=null==(t=e.tenantOrderPaymentInfoList)?void 0:t.pop();return a?a.paymentMethod:3},Oe=async e=>{const t=Y({tenantId:V,premium:be.value,orderDetail:fe.value,productDetail:pe.value,insureDetail:ve.value,successJumpUrl:`${F}/baseInsurance/orderDetail?tenantId=${V}&orderNo=${ye.value}`,iseeBizNo:ce.value}),a=await H({orderNo:e,...t}),{code:r,data:n}=a;"10000"===r&&S.push(`/baseInsurance/orderDetail?tenantId=${V}&orderNo=${ye.value}`)},Ie=async e=>{try{x.loading({forbidClick:!0,message:"升级中",duration:0});const e=await(async()=>{var e,t,a;const r=J({tenantId:V,templateId:fe.value.tenantOrderInsuredList[0].templateId,applicationNo:fe.value.applicationNo,policyNo:fe.value.policyNo,saleUserId:ie,saleChannelId:fe.value.saleChannelId,orderStatus:Z.UP_PROCESSING,orderTopStatus:"-1",orderCategory:2,detail:pe.value,insureDetail:ve.value,paymentMethod:xe(fe.value),renewalDK:null==(t=null==(e=fe.value.extInfo)?void 0:e.extraInfo)?void 0:t.renewalDK,iseeBizNo:ce.value,expiryDate:fe.value.expiryDate,successJumpUrl:"",premium:be.value,holder:{...fe.value.tenantOrderHolder,extInfo:me.value,socialFlag:me.value.hasSocialInsurance},insured:{...fe.value.tenantOrderInsuredList[0],socialFlag:fe.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance},tenantOrderRiskList:W({tenantId:V,riskList:K(Q(ve.value.productRiskVoList[0].riskDetailVOList),pe.value),riskPremium:{},productId:null==(a=pe.value)?void 0:a.id},!0)}),n=await $(r),{code:o,data:s}=n;return"10000"===o?s.data:""})();await L({tenantId:V,applicationNo:fe.value.applicationNo});if(ye.value=e,console.log(ye.value,"orderNoUp.value===",e),he.value){const e=encodeURIComponent(encodeURIComponent(window.location.href)),t=`${he.value}&failUrl=${e}`;window.location.href=t,x.clear()}else Oe(e)}catch(t){console.log(t),x.clear()}},ke=async e=>{Ie()},Pe=()=>{const e=R({productCode:z,withInsureInfo:!0,tenantId:V}),t=T({productCode:z}),a=M({orderNo:C,tenantId:V});Promise.all([e,t,a]).then((([e,t,a])=>{var r,n,o;if("10000"===e.code){pe.value=e.data,document.title=(null==(r=e.data)?void 0:r.productFullName)||"";const{title:t,desc:a,image:s}=(null==(n=e.data)?void 0:n.showConfigVO)||{};o={title:t,desc:a,image:s},ge.value={desc:o.desc||"你好，这里是描述",imgUrl:o.image,title:o.title,link:window.location.href}}"10000"===t.code&&(ve.value=t.data,["1","2","3"].forEach((e=>{var t,a,r;ve.value.productFactor[e]=(null==(a=null==(t=ve.value.productFactor)?void 0:t[e])?void 0:a.some((e=>1===e.isDisplay)))?null==(r=ve.value.productFactor)?void 0:r[e]:[]}))),"10000"===a.code&&(fe.value=a.data,me.value=Jt(fe.value.tenantOrderHolder.extInfo,5),fe.value.tenantOrderHolder.extInfo=fe.value.tenantOrderInsuredList[0].extInfo),le.value=!1,(async()=>{x.loading({forbidClick:!0,duration:0,message:"试算中"});try{const e=Y({tenantId:V,premium:be.value,orderDetail:fe.value,productDetail:pe.value,insureDetail:ve.value,successJumpUrl:""},q),t=await G(e),{code:a,data:r,message:n}=t;"10000"===a?(be.value=r.installmentPremium,he.value=r.signUrl,_e.value=!1):"已升级成功"===n&&(_e.value=!0)}catch(e){console.log(e),_e.value=!0}finally{setTimeout((()=>{x.clear()}),_e.value?2e3:0)}})(),(()=>{var e;let t={};if(t=(null==(e=pe.value.tenantProductInsureVO.planInsureVO)?void 0:e.attachmentVOList)||[],!t)return void(ue.value=[]);const a={2:"richText",3:"link"};ue.value=Object.keys(t).map((e=>(t[e].forEach((e=>{if("1"===e.attachmentType){const t=e.attachmentUri.split("?"),a=t[0].substr(t[0].lastIndexOf(".")+1);e.attachmentType="pdf"===a?"pdf":"picture"}else e.attachmentType=a[e.attachmentType]})),{attachmentName:e,attachmentList:t[e]})))||[]})()}))};return d((()=>{Pe(),setTimeout((async()=>{ce.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const r=O,n=I,o=k,s=P;return p(le)?(v(),f("div",Kt,Qt)):(v(),b(s,{key:1,"data-skeleton-root":"UPGRADE","theme-vars":p(U)},{default:h((()=>{var e,s,i;return[y("div",Yt,[_(ee,{"data-skeleton-type":"img",url:null==(s=null==(e=p(pe))?void 0:e.tenantProductInsureVO)?void 0:s.banner[0]},null,8,["url"]),_(X,{ref_key:"formRef",ref:de,"title-collection":{HOLDER:"投保人信息",INSURER:"投保信息",BENEFICIARY:"投保人信息"},"need-desensitize":"","is-view":"","input-align":"right","form-info":p(fe),"factor-object":null==(i=p(ve))?void 0:i.productFactor},null,8,["form-info","factor-object"]),_(r,{modelValue:p(we),"onUpdate:modelValue":a[0]||(a[0]=e=>m(we)?we.value=e:null),"input-align":"right",label:"每月保费",name:"insuredBeneficiaryType"},null,8,["modelValue"]),p(ue)&&p(ue).length>0?(v(),b(p(t),{key:0,class:"attachment-bg","attachement-list":p(ue),"has-bg-color":!1,"pre-text":"请阅读",onPreviewFile:a[1]||(a[1]=e=>(e=>{je.isOnlyView=!0,je.activeIndex=e,je.showFilePreview=!0})(e))},null,8,["attachement-list"])):j("",!0),y("div",qt,[p(D)?(v(),b(o,g({key:0},p(ge),{class:"share-btn"}),{default:h((()=>[_(n,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),Zt])),_:1},16)):j("",!0),y("div",Xt,[y("div",ea,[y("span",ta,A(p(be)),1),aa]),_(te,{shadow:!1,disabled:p(_e),"theme-vars":p(U),class:"right",text:"升级保障",onClick:ke},{default:h((()=>[w(A("升级保障"))])),_:1},8,["disabled","theme-vars"])])])]),p(je).showFilePreview&&0!==p(ue).length?(v(),b(p(E),{key:0,show:p(je).showFilePreview,"onUpdate:show":a[2]||(a[2]=e=>p(je).showFilePreview=e),"content-list":p(ue),"is-only-view":p(je).isOnlyView,"active-index":p(je).activeIndex,text:p(je).isOnlyView?"关闭":"我已逐页阅读上述内容并同意","force-read-cound":0,"on-close-file-preview":"",onSubmit:Ie,onOnCloseFilePreview:Ae},null,8,["show","content-list","is-only-view","active-index","text"])):j("",!0)]})),_:1},8,["theme-vars"]))}}}),[["__scopeId","data-v-b7813920"]]);export{ra as default};
