import{g as i,a9 as l,O as p,E as d,o as _,j as f,n as h,z as m}from"./vendor-17026bfd.js";import{M as g}from"./index-b388865d.js";import{P as a}from"./infoCollection-192ba138.js";import"./utils-b6782348.js";const E={class:"page-middle-wrapper"},y=m("h4",null,null,-1),C=[y],q=i({setup(v){const n=l(),t=p(),c=d(""),u=()=>{try{const{pageCode:e}=t.query||{};switch(e){case a.FREE:return`/chuangxin/baigebao/${e}`;case a.COMMON:return"/internet/productDetail";case a.PACKAGE:return"/internet/productDetail/package";default:return""}}catch{return""}};return _(()=>{g({param:window.location.search.replace("?","")}).then(({code:e,data:o})=>{if(e==="10000"&&o){let r="/productDetail";"proposalId"in t.query&&(r="/trial");const s=u();s&&(r=s),n.replace({path:r,query:t.query})}else c.value="\u9A8C\u8BC1\u5931\u8D25"})}),(e,o)=>(f(),h("div",E,C))}});export{q as default};
