import{b9 as e,d as a,au as o,ba as l,e as i,bf as n,br as t,bs as s,bm as d}from"./index-9d5be767.js";const[c,r]=e("switch");const u=d(a({name:c,props:{size:n,loading:Boolean,disabled:Boolean,modelValue:t,activeColor:String,inactiveColor:String,activeValue:{type:t,default:!0},inactiveValue:{type:t,default:!1}},emits:["change","update:modelValue"],setup(e,{emit:a,slots:n}){const t=()=>e.modelValue===e.activeValue,d=()=>{if(!e.disabled&&!e.loading){const o=t()?e.inactiveValue:e.activeValue;a("update:modelValue",o),a("change",o)}},c=()=>{if(e.loading){const a=t()?e.activeColor:e.inactiveColor;return i(s,{class:r("loading"),color:a},null)}if(n.node)return n.node()};return o((()=>e.modelValue)),()=>{var a;const{size:o,loading:s,disabled:u,activeColor:v,inactiveColor:b}=e,g=t(),m={fontSize:l(o),backgroundColor:g?v:b};return i("div",{role:"switch",class:r({on:g,loading:s,disabled:u}),style:m,tabindex:u?void 0:0,"aria-checked":g,onClick:d},[i("div",{class:r("node")},[c()]),null==(a=n.background)?void 0:a.call(n)])}}}));export{u as S};
