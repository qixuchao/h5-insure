import{aw as a,d as e,az as o,ax as l,i,aE as n,bo as t,bp as d,aL as s}from"./index-cc43bd1d.js";const[c,r]=a("switch");const u=s(e({name:c,props:{size:n,loading:Boolean,disabled:Boolean,modelValue:t,activeColor:String,inactiveColor:String,activeValue:{type:t,default:!0},inactiveValue:{type:t,default:!1}},emits:["change","update:modelValue"],setup(a,{emit:e,slots:n}){const t=()=>a.modelValue===a.activeValue,s=()=>{if(!a.disabled&&!a.loading){const o=t()?a.inactiveValue:a.activeValue;e("update:modelValue",o),e("change",o)}},c=()=>{if(a.loading){const e=t()?a.activeColor:a.inactiveColor;return i(d,{class:r("loading"),color:e},null)}if(n.node)return n.node()};return o((()=>a.modelValue)),()=>{var e;const{size:o,loading:d,disabled:u,activeColor:v,inactiveColor:g}=a,b=t(),m={fontSize:l(o),backgroundColor:b?v:g};return i("div",{role:"switch",class:r({on:b,loading:d,disabled:u}),style:m,tabindex:u?void 0:0,"aria-checked":b,onClick:s},[i("div",{class:r("node")},[c()]),null==(e=n.background)?void 0:e.call(n)])}}}));export{u as S};
