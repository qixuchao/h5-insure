import{b9 as e,bd as i,bN as o,be as r,d as a,r as s,bW as t,bR as n,V as d,bX as l,Z as u,bY as c,bu as f,e as b,W as g,bv as h,bZ as v,bs as p,bm as m}from"./index-086d754e.js";const[x,T,k]=e("list");const B=m(a({name:x,props:{error:Boolean,offset:i(300),loading:Boolean,finished:Boolean,errorText:String,direction:o("down"),loadingText:String,finishedText:String,immediateCheck:r},emits:["load","update:error","update:loading"],setup(e,{emit:i,slots:o}){const r=s(e.loading),a=s(),m=s(),x=t(),B=n(a),C=()=>{g((()=>{if(r.value||e.finished||e.error||!1===(null==x?void 0:x.value))return;const{offset:o,direction:s}=e,t=h(B);if(!t.height||v(a))return;let n=!1;const d=h(m);n="up"===s?t.top-d.top<=o:d.bottom-t.bottom<=o,n&&(r.value=!0,i("update:loading",!0),i("load"))}))},S=()=>{if(e.finished){const i=o.finished?o.finished():e.finishedText;if(i)return b("div",{class:T("finished-text")},[i])}},w=()=>{i("update:error",!1),C()},W=()=>{if(e.error){const i=o.error?o.error():e.errorText;if(i)return b("div",{role:"button",class:T("error-text"),tabindex:0,onClick:w},[i])}},Z=()=>{if(r.value&&!e.finished)return b("div",{class:T("loading")},[o.loading?o.loading():b(p,{class:T("loading-icon")},{default:()=>[e.loadingText||k("loading")]})])};return d((()=>[e.loading,e.finished,e.error]),C),x&&d(x,(e=>{e&&C()})),l((()=>{r.value=e.loading})),u((()=>{e.immediateCheck&&C()})),c({check:C}),f("scroll",C,{target:B,passive:!0}),()=>{var i;const s=null==(i=o.default)?void 0:i.call(o),t=b("div",{ref:m,class:T("placeholder")},null);return b("div",{ref:a,role:"feed",class:T(),"aria-busy":r.value},["down"===e.direction?s:t,Z(),S(),W(),"up"===e.direction?s:t])}}}));export{B as L};
