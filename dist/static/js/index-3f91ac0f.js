import{b9 as e,bd as i,bO as a,be as o,d as r,r as s,bX as t,bS as n,V as d,bY as l,Z as u,bZ as c,bu as f,e as b,W as g,bv as h,b_ as v,bs as p,bm as m}from"./index-79b27ada.js";const[x,T,k]=e("list");const S=m(r({name:x,props:{error:Boolean,offset:i(300),loading:Boolean,finished:Boolean,errorText:String,direction:a("down"),loadingText:String,finishedText:String,immediateCheck:o},emits:["load","update:error","update:loading"],setup(e,{emit:i,slots:a}){const o=s(e.loading),r=s(),m=s(),x=t(),S=n(r),B=()=>{g((()=>{if(o.value||e.finished||e.error||!1===(null==x?void 0:x.value))return;const{offset:a,direction:s}=e,t=h(S);if(!t.height||v(r))return;let n=!1;const d=h(m);n="up"===s?t.top-d.top<=a:d.bottom-t.bottom<=a,n&&(o.value=!0,i("update:loading",!0),i("load"))}))},C=()=>{if(e.finished){const i=a.finished?a.finished():e.finishedText;if(i)return b("div",{class:T("finished-text")},[i])}},w=()=>{i("update:error",!1),B()},Z=()=>{if(e.error){const i=a.error?a.error():e.errorText;if(i)return b("div",{role:"button",class:T("error-text"),tabindex:0,onClick:w},[i])}},j=()=>{if(o.value&&!e.finished)return b("div",{class:T("loading")},[a.loading?a.loading():b(p,{class:T("loading-icon")},{default:()=>[e.loadingText||k("loading")]})])};return d((()=>[e.loading,e.finished,e.error]),B),x&&d(x,(e=>{e&&B()})),l((()=>{o.value=e.loading})),u((()=>{e.immediateCheck&&B()})),c({check:B}),f("scroll",B,{target:S,passive:!0}),()=>{var i;const s=null==(i=a.default)?void 0:i.call(a),t=b("div",{ref:m,class:T("placeholder")},null);return b("div",{ref:r,role:"feed",class:T(),"aria-busy":o.value},["down"===e.direction?s:t,j(),C(),Z(),"up"===e.direction?s:t])}}}));export{S as L};
