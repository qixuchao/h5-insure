import{B as e,H as i,Q as a,R as o,d as r,j as s,S as t,C as n,E as d,U as l,l as f,V as c,G as u,b as g,M as h,W as p,X as v,L as m,O as x}from"./index-fbb8a705.js";const[b,T,k]=e("list");const B=x(r({name:b,props:{error:Boolean,offset:i(300),loading:Boolean,finished:Boolean,errorText:String,direction:a("down"),loadingText:String,finishedText:String,immediateCheck:o},emits:["load","update:error","update:loading"],setup(e,{emit:i,slots:a}){const o=s(e.loading),r=s(),x=s(),b=t(),B=n(r),C=()=>{h((()=>{if(o.value||e.finished||e.error||!1===(null==b?void 0:b.value))return;const{offset:a,direction:s}=e,t=p(B);if(!t.height||v(r))return;let n=!1;const d=p(x);n="up"===s?t.top-d.top<=a:d.bottom-t.bottom<=a,n&&(o.value=!0,i("update:loading",!0),i("load"))}))},S=()=>{if(e.finished){const i=a.finished?a.finished():e.finishedText;if(i)return g("div",{class:T("finished-text")},[i])}},j=()=>{i("update:error",!1),C()},w=()=>{if(e.error){const i=a.error?a.error():e.errorText;if(i)return g("div",{role:"button",class:T("error-text"),tabindex:0,onClick:j},[i])}},L=()=>{if(o.value&&!e.finished)return g("div",{class:T("loading")},[a.loading?a.loading():g(m,{class:T("loading-icon")},{default:()=>[e.loadingText||k("loading")]})])};return d((()=>[e.loading,e.finished,e.error]),C),b&&d(b,(e=>{e&&C()})),l((()=>{o.value=e.loading})),f((()=>{e.immediateCheck&&C()})),c({check:C}),u("scroll",C,{target:B,passive:!0}),()=>{var i;const s=null==(i=a.default)?void 0:i.call(a),t=g("div",{ref:x,class:T("placeholder")},null);return g("div",{ref:r,role:"feed",class:T(),"aria-busy":o.value},["down"===e.direction?s:t,L(),S(),w(),"up"===e.direction?s:t])}}}));export{B as L};
