import{B as e,d as a,j as n,k as t,bC as l,bD as u,E as s,bE as i,b as o,aV as r,aW as c,a8 as d,bF as v,H as p,R as m,J as b,bG as h,bH as f,M as g,bI as y,K as w,a1 as S,bJ as x,O as V,bK as I,bd as C,bL as M,bM as B}from"./index-dca1ad48.js";const[P,T]=e("stepper"),E=(e,a)=>String(e)===String(a);const L=V(a({name:P,props:{min:p(1),max:p(1/0),name:p(""),step:p(1),theme:String,integer:Boolean,disabled:Boolean,showPlus:m,showMinus:m,showInput:m,longPress:m,allowEmpty:Boolean,modelValue:b,inputWidth:b,buttonSize:b,placeholder:String,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,beforeChange:Function,defaultValue:p(1),decimalLength:b},emits:["plus","blur","minus","focus","change","overlimit","update:modelValue"],setup(e,{emit:a}){const p=a=>{const{min:n,max:t,allowEmpty:l,decimalLength:u}=e;return l&&""===a||(a=""===(a=h(String(a),!e.integer))?0:+a,a=Number.isNaN(a)?+n:a,a=Math.max(Math.min(+t,a),+n),f(u)&&(a=a.toFixed(+u))),a};let m;const b=n(),V=n((()=>{var n;const t=null!=(n=e.modelValue)?n:e.defaultValue,l=p(t);return E(l,e.modelValue)||a("update:modelValue",l),l})()),I=t((()=>e.disabled||e.disableMinus||V.value<=+e.min)),C=t((()=>e.disabled||e.disablePlus||V.value>=+e.max)),M=t((()=>({width:l(e.inputWidth),height:l(e.buttonSize)}))),B=t((()=>u(e.buttonSize))),P=a=>{e.beforeChange?S(e.beforeChange,{args:[a],done(){V.value=a}}):V.value=a},L=()=>{if("plus"===m&&C.value||"minus"===m&&I.value)return void a("overlimit",m);const n="minus"===m?-e.step:+e.step,t=p(x(+V.value,n));P(t),a(m)},$=a=>{const n=a.target,{value:t}=n,{decimalLength:l}=e;let u=h(String(t),!e.integer);if(f(l)&&u.includes(".")){const e=u.split(".");u=`${e[0]}.${e[1].slice(0,+l)}`}e.beforeChange?n.value=String(V.value):E(t,u)||(n.value=u);const s=u===String(+u);P(s?+u:u)},j=n=>{var t;e.disableInput?null==(t=b.value)||t.blur():a("focus",n)},z=e=>{const n=e.target,t=p(n.value);n.value=String(t),V.value=t,g((()=>{a("blur",e),y()}))};let F,k;const N=()=>{k=setTimeout((()=>{L(),N()}),200)},O=a=>{e.longPress&&(clearTimeout(k),F&&w(a))},W=a=>{e.disableInput&&w(a)},A=a=>({onClick:e=>{w(e),m=a,L()},onTouchstartPassive:()=>{m=a,e.longPress&&(F=!1,clearTimeout(k),k=setTimeout((()=>{F=!0,L(),N()}),600))},onTouchend:O,onTouchcancel:O});return s((()=>[e.max,e.min,e.integer,e.decimalLength]),(()=>{const e=p(V.value);E(e,V.value)||(V.value=e)})),s((()=>e.modelValue),(e=>{E(e,V.value)||(V.value=p(e))})),s(V,(n=>{a("update:modelValue",n),a("change",n,{name:e.name})})),i((()=>e.modelValue)),()=>o("div",{role:"group",class:T([e.theme])},[r(o("button",d({type:"button",style:B.value,class:[T("minus",{disabled:I.value}),{[v]:!I.value}],"aria-disabled":I.value||void 0},A("minus")),null),[[c,e.showMinus]]),r(o("input",{ref:b,type:e.integer?"tel":"text",role:"spinbutton",class:T("input"),value:V.value,style:M.value,disabled:e.disabled,readonly:e.disableInput,inputmode:e.integer?"numeric":"decimal",placeholder:e.placeholder,"aria-valuemax":e.max,"aria-valuemin":e.min,"aria-valuenow":V.value,onBlur:z,onInput:$,onFocus:j,onMousedown:W},null),[[c,e.showInput]]),r(o("button",d({type:"button",style:B.value,class:[T("plus",{disabled:C.value}),{[v]:!C.value}],"aria-disabled":C.value||void 0},A("plus")),null),[[c,e.showPlus]])])}}));var $=I?I.prototype:void 0,j=$?$.toString:void 0;function z(e){if("string"==typeof e)return e;if(C(e))return function(e,a){for(var n=-1,t=null==e?0:e.length,l=Array(t);++n<t;)l[n]=a(e[n],n,e);return l}(e,z)+"";if(M(e))return j?j.call(e):"";var a=e+"";return"0"==a&&1/e==-Infinity?"-0":a}var F=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;function N(e,a){if(C(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!M(e))||(k.test(e)||!F.test(e)||null!=a&&e in Object(a))}function O(e,a){if("function"!=typeof e||null!=a&&"function"!=typeof a)throw new TypeError("Expected a function");var n=function(){var t=arguments,l=a?a.apply(this,t):t[0],u=n.cache;if(u.has(l))return u.get(l);var s=e.apply(this,t);return n.cache=u.set(l,s)||u,s};return n.cache=new(O.Cache||B),n}O.Cache=B;var W,A,H,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,K=/\\(\\)?/g,D=(W=function(e){var a=[];return 46===e.charCodeAt(0)&&a.push(""),e.replace(J,(function(e,n,t,l){a.push(t?l.replace(K,"$1"):n||e)})),a},A=O(W,(function(e){return 500===H.size&&H.clear(),e})),H=A.cache,A),G=D;function R(e,a){return C(e)?e:N(e,a)?[e]:G(function(e){return null==e?"":z(e)}(e))}function q(e){if("string"==typeof e||M(e))return e;var a=e+"";return"0"==a&&1/e==-Infinity?"-0":a}function Q(e,a){for(var n=0,t=(a=R(a,e)).length;null!=e&&n<t;)e=e[q(a[n++])];return n&&n==t?e:void 0}function U(e,a,n){var t=null==e?void 0:Q(e,a);return void 0===t?n:t}function X(e){return Object.keys(e)}export{L as S,Q as b,R as c,U as g,N as i,X as o,q as t};
