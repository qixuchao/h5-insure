<<<<<<<< HEAD:dist/static/js/index-20697ccf.js
import{aG as e,aL as i,bS as a,aM as o,d as r,r as s,b$ as t,bX as n,R as d,bt as l,a1 as c,c0 as f,bm as u,i as g,$ as h,bn as b,c1 as p,bk as v,aU as m}from"./index-4b1b5b56.js";const[x,T,k]=e("list");const S=m(r({name:x,props:{error:Boolean,offset:i(300),loading:Boolean,finished:Boolean,errorText:String,direction:a("down"),loadingText:String,finishedText:String,immediateCheck:o},emits:["load","update:error","update:loading"],setup(e,{emit:i,slots:a}){const o=s(e.loading),r=s(),m=s(),x=t(),S=n(r),B=()=>{h((()=>{if(o.value||e.finished||e.error||!1===(null==x?void 0:x.value))return;const{offset:a,direction:s}=e,t=b(S);if(!t.height||p(r))return;let n=!1;const d=b(m);n="up"===s?t.top-d.top<=a:d.bottom-t.bottom<=a,n&&(o.value=!0,i("update:loading",!0),i("load"))}))},C=()=>{if(e.finished){const i=a.finished?a.finished():e.finishedText;if(i)return g("div",{class:T("finished-text")},[i])}},w=()=>{i("update:error",!1),B()},L=()=>{if(e.error){const i=a.error?a.error():e.errorText;if(i)return g("div",{role:"button",class:T("error-text"),tabindex:0,onClick:w},[i])}},$=()=>{if(o.value&&!e.finished)return g("div",{class:T("loading")},[a.loading?a.loading():g(v,{class:T("loading-icon")},{default:()=>[e.loadingText||k("loading")]})])};return d((()=>[e.loading,e.finished,e.error]),B),x&&d(x,(e=>{e&&B()})),l((()=>{o.value=e.loading})),c((()=>{e.immediateCheck&&B()})),f({check:B}),u("scroll",B,{target:S,passive:!0}),()=>{var i;const s=null==(i=a.default)?void 0:i.call(a),t=g("div",{ref:m,class:T("placeholder")},null);return g("div",{ref:r,role:"feed",class:T(),"aria-busy":o.value},["down"===e.direction?s:t,$(),C(),L(),"up"===e.direction?s:t])}}}));export{S as L};
========
import{aG as e,aL as i,bS as a,aM as o,d as r,r as s,b$ as t,bX as n,R as d,bt as l,a1 as c,c0 as f,bm as u,i as g,$ as h,bn as p,c1 as v,bk as b,aU as m}from"./index-3c7e3218.js";const[x,T,k]=e("list");const S=m(r({name:x,props:{error:Boolean,offset:i(300),loading:Boolean,finished:Boolean,errorText:String,direction:a("down"),loadingText:String,finishedText:String,immediateCheck:o},emits:["load","update:error","update:loading"],setup(e,{emit:i,slots:a}){const o=s(e.loading),r=s(),m=s(),x=t(),S=n(r),B=()=>{h((()=>{if(o.value||e.finished||e.error||!1===(null==x?void 0:x.value))return;const{offset:a,direction:s}=e,t=p(S);if(!t.height||v(r))return;let n=!1;const d=p(m);n="up"===s?t.top-d.top<=a:d.bottom-t.bottom<=a,n&&(o.value=!0,i("update:loading",!0),i("load"))}))},C=()=>{if(e.finished){const i=a.finished?a.finished():e.finishedText;if(i)return g("div",{class:T("finished-text")},[i])}},w=()=>{i("update:error",!1),B()},L=()=>{if(e.error){const i=a.error?a.error():e.errorText;if(i)return g("div",{role:"button",class:T("error-text"),tabindex:0,onClick:w},[i])}},$=()=>{if(o.value&&!e.finished)return g("div",{class:T("loading")},[a.loading?a.loading():g(b,{class:T("loading-icon")},{default:()=>[e.loadingText||k("loading")]})])};return d((()=>[e.loading,e.finished,e.error]),B),x&&d(x,(e=>{e&&B()})),l((()=>{o.value=e.loading})),c((()=>{e.immediateCheck&&B()})),f({check:B}),u("scroll",B,{target:S,passive:!0}),()=>{var i;const s=null==(i=a.default)?void 0:i.call(a),t=g("div",{ref:m,class:T("placeholder")},null);return g("div",{ref:r,role:"feed",class:T(),"aria-busy":o.value},["down"===e.direction?s:t,$(),C(),L(),"up"===e.direction?s:t])}}}));export{S as L};
>>>>>>>> ad430bdd168e316860f2a753ff36433fea9fb637:dist/static/js/index-ab442204.js
