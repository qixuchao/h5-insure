import{aJ as e,aN as a,bz as i,aO as o,d as r,r as s,bV as t,bQ as n,ag as d,bP as l,Z as f,bW as c,bI as u,e as g,as as h,bJ as p,bX as v,bj as b,aW as m}from"./index-eff7527d.js";const[x,T,k]=e("list");const B=m(r({name:x,props:{error:Boolean,offset:a(300),loading:Boolean,finished:Boolean,errorText:String,direction:i("down"),loadingText:String,finishedText:String,immediateCheck:o},emits:["load","update:error","update:loading"],setup(e,{emit:a,slots:i}){const o=s(e.loading),r=s(),m=s(),x=t(),B=n(r),C=()=>{h((()=>{if(o.value||e.finished||e.error||!1===(null==x?void 0:x.value))return;const{offset:i,direction:s}=e,t=p(B);if(!t.height||v(r))return;let n=!1;const d=p(m);n="up"===s?t.top-d.top<=i:d.bottom-t.bottom<=i,n&&(o.value=!0,a("update:loading",!0),a("load"))}))},S=()=>{if(e.finished){const a=i.finished?i.finished():e.finishedText;if(a)return g("div",{class:T("finished-text")},[a])}},j=()=>{a("update:error",!1),C()},w=()=>{if(e.error){const a=i.error?i.error():e.errorText;if(a)return g("div",{role:"button",class:T("error-text"),tabindex:0,onClick:j},[a])}},J=()=>{if(o.value&&!e.finished)return g("div",{class:T("loading")},[i.loading?i.loading():g(b,{class:T("loading-icon")},{default:()=>[e.loadingText||k("loading")]})])};return d((()=>[e.loading,e.finished,e.error]),C),x&&d(x,(e=>{e&&C()})),l((()=>{o.value=e.loading})),f((()=>{e.immediateCheck&&C()})),c({check:C}),u("scroll",C,{target:B,passive:!0}),()=>{var a;const s=null==(a=i.default)?void 0:a.call(i),t=g("div",{ref:m,class:T("placeholder")},null);return g("div",{ref:r,role:"feed",class:T(),"aria-busy":o.value},["down"===e.direction?s:t,J(),S(),w(),"up"===e.direction?s:t])}}}));export{B as L};
