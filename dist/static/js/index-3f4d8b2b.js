import{B as e,R as a,d as l,Y as d,V as o,b as n,a0 as s,O as r}from"./index-4d5fa34d.js";const[t,c]=e("collapse"),i=Symbol(t);const u=r(l({name:t,props:{border:a,accordion:Boolean,modelValue:{type:[String,Number,Array],default:""}},emits:["change","update:modelValue"],setup(e,{emit:a,slots:l}){const{linkChildren:r,children:t}=d(i),u=e=>{a("change",e),a("update:modelValue",e)};return o({toggleAll:(a={})=>{if(e.accordion)return;"boolean"==typeof a&&(a={expanded:a});const{expanded:l,skipDisabled:d}=a,o=t.filter((e=>e.disabled&&d?e.expanded.value:null!=l?l:!e.expanded.value)).map((e=>e.itemName.value));u(o)}}),r({toggle:(a,l)=>{const{accordion:d,modelValue:o}=e;u(d?a===o?"":a:l?o.concat(a):o.filter((e=>e!==a)))},isExpanded:a=>{const{accordion:l,modelValue:d}=e;return l?d===a:d.includes(a)}}),()=>{var a;return n("div",{class:[c(),{[s]:e.border}]},[null==(a=l.default)?void 0:a.call(l)])}}}));export{u as C,i as a};
