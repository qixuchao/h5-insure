import{g as u,a9 as i,O as l,E as p,o as d,j as _,n as f,z as h}from"./vendor-64f09b52.js";import{L as m}from"./index-934d035f.js";const g={class:"page-middle-wrapper"},y=h("h4",null,null,-1),v=[y],w=u({setup(B){const s=i(),t=l(),n=p(""),c=()=>{try{const{pageCode:e}=t.query||{};return e?`/chuangxin/baigebao/${e}`:""}catch{return""}};return d(()=>{m({param:window.location.search.replace("?","")}).then(({code:e,data:a})=>{if(e==="10000"&&a){let o="/productDetail";"proposalId"in t.query&&(o="/trial");const r=c();r&&(o=r),s.replace({path:o,query:t.query})}else n.value="\u9A8C\u8BC1\u5931\u8D25"})}),(e,a)=>(_(),f("div",g,v))}});export{w as default};
