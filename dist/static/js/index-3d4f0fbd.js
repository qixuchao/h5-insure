import{aG as e,aL as a,bU as i,aM as o,d as r,r as s,c1 as t,bZ as n,R as d,bv as l,a1 as c,c2 as f,bo as u,i as g,$ as h,bp as p,c3 as v,bm as m,aU as b}from"./index-d44a19aa.js";const[x,T,k]=e("list");const B=b(r({name:x,props:{error:Boolean,offset:a(300),loading:Boolean,finished:Boolean,errorText:String,direction:i("down"),loadingText:String,finishedText:String,immediateCheck:o},emits:["load","update:error","update:loading"],setup(e,{emit:a,slots:i}){const o=s(e.loading),r=s(),b=s(),x=t(),B=n(r),C=()=>{h((()=>{if(o.value||e.finished||e.error||!1===(null==x?void 0:x.value))return;const{offset:i,direction:s}=e,t=p(B);if(!t.height||v(r))return;let n=!1;const d=p(b);n="up"===s?t.top-d.top<=i:d.bottom-t.bottom<=i,n&&(o.value=!0,a("update:loading",!0),a("load"))}))},S=()=>{if(e.finished){const a=i.finished?i.finished():e.finishedText;if(a)return g("div",{class:T("finished-text")},[a])}},w=()=>{a("update:error",!1),C()},L=()=>{if(e.error){const a=i.error?i.error():e.errorText;if(a)return g("div",{role:"button",class:T("error-text"),tabindex:0,onClick:w},[a])}},U=()=>{if(o.value&&!e.finished)return g("div",{class:T("loading")},[i.loading?i.loading():g(m,{class:T("loading-icon")},{default:()=>[e.loadingText||k("loading")]})])};return d((()=>[e.loading,e.finished,e.error]),C),x&&d(x,(e=>{e&&C()})),l((()=>{o.value=e.loading})),c((()=>{e.immediateCheck&&C()})),f({check:C}),u("scroll",C,{target:B,passive:!0}),()=>{var a;const s=null==(a=i.default)?void 0:a.call(i),t=g("div",{ref:b,class:T("placeholder")},null);return g("div",{ref:r,role:"feed",class:T(),"aria-busy":o.value},["down"===e.direction?s:t,U(),S(),L(),"up"===e.direction?s:t])}}}));export{B as L};
