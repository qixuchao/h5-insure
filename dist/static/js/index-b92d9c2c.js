import{a_ as e,bE as i,bP as a,bq as o,d as r,r as s,cf as t,bk as n,N as d,cg as l,R as c,bo as f,bn as u,e as g,O as h,bu as b,bs as p,b2 as v,b3 as m}from"./index-f19e378a.js";const[x,T,k]=e("list");const B=m(r({name:x,props:{error:Boolean,offset:i(300),loading:Boolean,finished:Boolean,errorText:String,direction:a("down"),loadingText:String,finishedText:String,immediateCheck:o},emits:["load","update:error","update:loading"],setup(e,{emit:i,slots:a}){const o=s(e.loading),r=s(),m=s(),x=t(),B=n(r),C=()=>{h((()=>{if(o.value||e.finished||e.error||!1===(null==x?void 0:x.value))return;const{offset:a,direction:s}=e,t=b(B);if(!t.height||p(r))return;let n=!1;const d=b(m);n="up"===s?t.top-d.top<=a:d.bottom-t.bottom<=a,n&&(o.value=!0,i("update:loading",!0),i("load"))}))},S=()=>{if(e.finished){const i=a.finished?a.finished():e.finishedText;if(i)return g("div",{class:T("finished-text")},[i])}},w=()=>{i("update:error",!1),C()},j=()=>{if(e.error){const i=a.error?a.error():e.errorText;if(i)return g("div",{role:"button",class:T("error-text"),tabindex:0,onClick:w},[i])}},q=()=>{if(o.value&&!e.finished)return g("div",{class:T("loading")},[a.loading?a.loading():g(v,{class:T("loading-icon")},{default:()=>[e.loadingText||k("loading")]})])};return d((()=>[e.loading,e.finished,e.error]),C),x&&d(x,(e=>{e&&C()})),l((()=>{o.value=e.loading})),c((()=>{e.immediateCheck&&C()})),f({check:C}),u("scroll",C,{target:B,passive:!0}),()=>{var i;const s=null==(i=a.default)?void 0:i.call(a),t=g("div",{ref:m,class:T("placeholder")},null);return g("div",{ref:r,role:"feed",class:T(),"aria-busy":o.value},["down"===e.direction?s:t,q(),S(),j(),"up"===e.direction?s:t])}}}));export{B as L};
