import{b9 as a,d as e,au as o,ba as l,e as i,bf as n,br as t,bs as s,bm as d}from"./index-702ef6ab.js";const[c,r]=a("switch");const u=d(e({name:c,props:{size:n,loading:Boolean,disabled:Boolean,modelValue:t,activeColor:String,inactiveColor:String,activeValue:{type:t,default:!0},inactiveValue:{type:t,default:!1}},emits:["change","update:modelValue"],setup(a,{emit:e,slots:n}){const t=()=>a.modelValue===a.activeValue,d=()=>{if(!a.disabled&&!a.loading){const o=t()?a.inactiveValue:a.activeValue;e("update:modelValue",o),e("change",o)}},c=()=>{if(a.loading){const e=t()?a.activeColor:a.inactiveColor;return i(s,{class:r("loading"),color:e},null)}if(n.node)return n.node()};return o((()=>a.modelValue)),()=>{var e;const{size:o,loading:s,disabled:u,activeColor:v,inactiveColor:b}=a,g=t(),m={fontSize:l(o),backgroundColor:g?v:b};return i("div",{role:"switch",class:r({on:g,loading:s,disabled:u}),style:m,tabindex:u?void 0:0,"aria-checked":g,onClick:d},[i("div",{class:r("node")},[c()]),null==(e=n.background)?void 0:e.call(n)])}}}));export{u as S};
