import{ax as a,d as e,aA as o,ay as l,i,aF as t,bt as n,bu as s,aM as d}from"./index-fc66ba31.js";const[c,r]=a("switch");const u=d(e({name:c,props:{size:t,loading:Boolean,disabled:Boolean,modelValue:n,activeColor:String,inactiveColor:String,activeValue:{type:n,default:!0},inactiveValue:{type:n,default:!1}},emits:["change","update:modelValue"],setup(a,{emit:e,slots:t}){const n=()=>a.modelValue===a.activeValue,d=()=>{if(!a.disabled&&!a.loading){const o=n()?a.inactiveValue:a.activeValue;e("update:modelValue",o),e("change",o)}},c=()=>{if(a.loading){const e=n()?a.activeColor:a.inactiveColor;return i(s,{class:r("loading"),color:e},null)}if(t.node)return t.node()};return o((()=>a.modelValue)),()=>{var e;const{size:o,loading:s,disabled:u,activeColor:v,inactiveColor:g}=a,b=n(),m={fontSize:l(o),backgroundColor:b?v:g};return i("div",{role:"switch",class:r({on:b,loading:s,disabled:u}),style:m,tabindex:u?void 0:0,"aria-checked":b,onClick:d},[i("div",{class:r("node")},[c()]),null==(e=t.background)?void 0:e.call(t)])}}}));export{u as S};
