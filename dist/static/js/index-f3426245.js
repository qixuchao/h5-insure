import{B as e,H as i,Q as o,R as a,d as r,j as s,S as t,C as n,E as d,U as l,l as c,V as f,G as u,b as g,M as h,W as p,X as v,L as m,O as x}from"./index-56de24c1.js";const[b,T,k]=e("list");const B=x(r({name:b,props:{error:Boolean,offset:i(300),loading:Boolean,finished:Boolean,errorText:String,direction:o("down"),loadingText:String,finishedText:String,immediateCheck:a},emits:["load","update:error","update:loading"],setup(e,{emit:i,slots:o}){const a=s(e.loading),r=s(),x=s(),b=t(),B=n(r),C=()=>{h((()=>{if(a.value||e.finished||e.error||!1===(null==b?void 0:b.value))return;const{offset:o,direction:s}=e,t=p(B);if(!t.height||v(r))return;let n=!1;const d=p(x);n="up"===s?t.top-d.top<=o:d.bottom-t.bottom<=o,n&&(a.value=!0,i("update:loading",!0),i("load"))}))},S=()=>{if(e.finished){const i=o.finished?o.finished():e.finishedText;if(i)return g("div",{class:T("finished-text")},[i])}},j=()=>{i("update:error",!1),C()},w=()=>{if(e.error){const i=o.error?o.error():e.errorText;if(i)return g("div",{role:"button",class:T("error-text"),tabindex:0,onClick:j},[i])}},L=()=>{if(a.value&&!e.finished)return g("div",{class:T("loading")},[o.loading?o.loading():g(m,{class:T("loading-icon")},{default:()=>[e.loadingText||k("loading")]})])};return d((()=>[e.loading,e.finished,e.error]),C),b&&d(b,(e=>{e&&C()})),l((()=>{a.value=e.loading})),c((()=>{e.immediateCheck&&C()})),f({check:C}),u("scroll",C,{target:B,passive:!0}),()=>{var i;const s=null==(i=o.default)?void 0:i.call(o),t=g("div",{ref:x,class:T("placeholder")},null);return g("div",{ref:r,role:"feed",class:T(),"aria-busy":a.value},["down"===e.direction?s:t,L(),S(),w(),"up"===e.direction?s:t])}}}));export{B as L};
