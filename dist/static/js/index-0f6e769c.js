import{h as i,aa as l,P as p,G as d,o as _,k as h,p as f,A as m}from"./vendor-a1c35ffc.js";import{Q as g}from"./index-ce2e55d1.js";import{P as t}from"./infoCollection-2b113275.js";const E={class:"page-middle-wrapper"},y=m("h4",null,null,-1),A=[y],B=i({setup(C){const s=l(),r=p(),c=d(""),u=()=>{try{const{pageCode:e}=r.query||{};switch(e){case t.FREE:return`/chuangxin/baigebao/${e}`;case t.COMMON:return"/internet/productDetail";case t.UPGRADE:return"/internet/guaranteeUpgrade";case t.PACKAGE:return"/internet/productDetail/package";default:return""}}catch{return""}};return _(()=>{g({param:window.location.search.replace("?","")}).then(({code:e,data:o})=>{if(e==="10000"&&o){let a="/productDetail";"proposalId"in r.query&&(a="/trial");const n=u();n&&(a=n),s.replace({path:a,query:r.query})}else c.value="\u9A8C\u8BC1\u5931\u8D25"})}),(e,o)=>(h(),f("div",E,A))}});export{B as default};
