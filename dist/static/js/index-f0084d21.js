import{aX as a,aY as e,aZ as o,d as l,aE as i,a_ as n,e as t,a$ as s,b0 as d}from"./index-4989475c.js";const[c,r]=a("switch");const u=d(l({name:c,props:{size:e,loading:Boolean,disabled:Boolean,modelValue:o,activeColor:String,inactiveColor:String,activeValue:{type:o,default:!0},inactiveValue:{type:o,default:!1}},emits:["change","update:modelValue"],setup(a,{emit:e,slots:o}){const l=()=>a.modelValue===a.activeValue,d=()=>{if(!a.disabled&&!a.loading){const o=l()?a.inactiveValue:a.activeValue;e("update:modelValue",o),e("change",o)}},c=()=>{if(a.loading){const e=l()?a.activeColor:a.inactiveColor;return t(s,{class:r("loading"),color:e},null)}if(o.node)return o.node()};return i((()=>a.modelValue)),()=>{var e;const{size:i,loading:s,disabled:u,activeColor:v,inactiveColor:g}=a,m=l(),V={fontSize:n(i),backgroundColor:m?v:g};return t("div",{role:"switch",class:r({on:m,loading:s,disabled:u}),style:V,tabindex:u?void 0:0,"aria-checked":m,onClick:d},[t("div",{class:r("node")},[c()]),null==(e=o.background)?void 0:e.call(o)])}}}));export{u as S};
