import{x as e,C as i,K as o,M as a,d as r,j as s,N as t,y as n,A as d,O as l,l as c,Q as f,B as u,b as g,G as h,R as p,S as v,L as x,J as m}from"./index-822b444e.js";const[b,T,k]=e("list");const B=m(r({name:b,props:{error:Boolean,offset:i(300),loading:Boolean,finished:Boolean,errorText:String,direction:o("down"),loadingText:String,finishedText:String,immediateCheck:a},emits:["load","update:error","update:loading"],setup(e,{emit:i,slots:o}){const a=s(e.loading),r=s(),m=s(),b=t(),B=n(r),C=()=>{h((()=>{if(a.value||e.finished||e.error||!1===(null==b?void 0:b.value))return;const{offset:o,direction:s}=e,t=p(B);if(!t.height||v(r))return;let n=!1;const d=p(m);n="up"===s?t.top-d.top<=o:d.bottom-t.bottom<=o,n&&(a.value=!0,i("update:loading",!0),i("load"))}))},S=()=>{if(e.finished){const i=o.finished?o.finished():e.finishedText;if(i)return g("div",{class:T("finished-text")},[i])}},j=()=>{i("update:error",!1),C()},w=()=>{if(e.error){const i=o.error?o.error():e.errorText;if(i)return g("div",{role:"button",class:T("error-text"),tabindex:0,onClick:j},[i])}},y=()=>{if(a.value&&!e.finished)return g("div",{class:T("loading")},[o.loading?o.loading():g(x,{class:T("loading-icon")},{default:()=>[e.loadingText||k("loading")]})])};return d((()=>[e.loading,e.finished,e.error]),C),b&&d(b,(e=>{e&&C()})),l((()=>{a.value=e.loading})),c((()=>{e.immediateCheck&&C()})),f({check:C}),u("scroll",C,{target:B,passive:!0}),()=>{var i;const s=null==(i=o.default)?void 0:i.call(o),t=g("div",{ref:m,class:T("placeholder")},null);return g("div",{ref:r,role:"feed",class:T(),"aria-busy":a.value},["down"===e.direction?s:t,y(),S(),w(),"up"===e.direction?s:t])}}}));export{B as L};
