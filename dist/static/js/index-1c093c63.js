import{v as e,B as i,J as a,K as o,d as r,j as s,M as t,x as n,z as d,N as l,O as f,Q as c,A as u,b as g,E as h,R as v,S as p,L as x,H as m}from"./index-2a73a8fe.js";const[b,T,k]=e("list");const B=m(r({name:b,props:{error:Boolean,offset:i(300),loading:Boolean,finished:Boolean,errorText:String,direction:a("down"),loadingText:String,finishedText:String,immediateCheck:o},emits:["load","update:error","update:loading"],setup(e,{emit:i,slots:a}){const o=s(e.loading),r=s(),m=s(),b=t(),B=n(r),S=()=>{h((()=>{if(o.value||e.finished||e.error||!1===(null==b?void 0:b.value))return;const{offset:a,direction:s}=e,t=v(B);if(!t.height||p(r))return;let n=!1;const d=v(m);n="up"===s?t.top-d.top<=a:d.bottom-t.bottom<=a,n&&(o.value=!0,i("update:loading",!0),i("load"))}))},C=()=>{if(e.finished){const i=a.finished?a.finished():e.finishedText;if(i)return g("div",{class:T("finished-text")},[i])}},j=()=>{i("update:error",!1),S()},w=()=>{if(e.error){const i=a.error?a.error():e.errorText;if(i)return g("div",{role:"button",class:T("error-text"),tabindex:0,onClick:j},[i])}},L=()=>{if(o.value&&!e.finished)return g("div",{class:T("loading")},[a.loading?a.loading():g(x,{class:T("loading-icon")},{default:()=>[e.loadingText||k("loading")]})])};return d((()=>[e.loading,e.finished,e.error]),S),b&&d(b,(e=>{e&&S()})),l((()=>{o.value=e.loading})),f((()=>{e.immediateCheck&&S()})),c({check:S}),u("scroll",S,{target:B,passive:!0}),()=>{var i;const s=null==(i=a.default)?void 0:i.call(a),t=g("div",{ref:m,class:T("placeholder")},null);return g("div",{ref:r,role:"feed",class:T(),"aria-busy":o.value},["down"===e.direction?s:t,L(),C(),w(),"up"===e.direction?s:t])}}}));export{B as L};
