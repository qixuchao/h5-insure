<<<<<<< HEAD:dist/static/js/index-cfb52765.js
import{g as i,a9 as l,O as p,E as d,o as _,j as f,n as h,z as m}from"./vendor-17026bfd.js";import{M as g}from"./index-eaf5a301.js";import{P as a}from"./infoCollection-192ba138.js";import"./utils-b6782348.js";const E={class:"page-middle-wrapper"},y=m("h4",null,null,-1),C=[y],q=i({setup(v){const n=l(),t=p(),c=d(""),u=()=>{try{const{pageCode:e}=t.query||{};switch(e){case a.FREE:return`/chuangxin/baigebao/${e}`;case a.COMMON:return"/internet/productDetail";case a.PACKAGE:return"/internet/productDetail/package";default:return""}}catch{return""}};return _(()=>{g({param:window.location.search.replace("?","")}).then(({code:e,data:o})=>{if(e==="10000"&&o){let r="/productDetail";"proposalId"in t.query&&(r="/trial");const s=u();s&&(r=s),n.replace({path:r,query:t.query})}else c.value="\u9A8C\u8BC1\u5931\u8D25"})}),(e,o)=>(f(),h("div",E,C))}});export{q as default};
=======
import{g as i,a9 as l,O as p,E as d,o as _,j as f,n as h,z as m}from"./vendor-ec22d003.js";import{M as g}from"./index-160a821b.js";import{P as a}from"./infoCollection-192ba138.js";import"./utils-b6782348.js";const E={class:"page-middle-wrapper"},y=m("h4",null,null,-1),C=[y],q=i({setup(v){const n=l(),t=p(),c=d(""),u=()=>{try{const{pageCode:e}=t.query||{};switch(e){case a.FREE:return`/chuangxin/baigebao/${e}`;case a.COMMON:return"/internet/productDetail";case a.PACKAGE:return"/internet/productDetail/package";default:return""}}catch{return""}};return _(()=>{g({param:window.location.search.replace("?","")}).then(({code:e,data:o})=>{if(e==="10000"&&o){let r="/productDetail";"proposalId"in t.query&&(r="/trial");const s=u();s&&(r=s),n.replace({path:r,query:t.query})}else c.value="\u9A8C\u8BC1\u5931\u8D25"})}),(e,o)=>(f(),h("div",E,C))}});export{q as default};
>>>>>>> c7a2c7d86ba161c8af0e5ffde82a2f15731514d4:dist/static/js/index-69fbf4b7.js
