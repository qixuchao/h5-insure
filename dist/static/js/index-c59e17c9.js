import{aw as e,aZ as a,d as l,bN as o,bw as d,f as n,bO as s,aC as r}from"./index-b22d3ebf.js";const[t,c]=e("collapse"),i=Symbol(t);const u=r(l({name:t,props:{border:a,accordion:Boolean,modelValue:{type:[String,Number,Array],default:""}},emits:["change","update:modelValue"],setup(e,{emit:a,slots:l}){const{linkChildren:r,children:t}=o(i),u=e=>{a("change",e),a("update:modelValue",e)};return d({toggleAll:(a={})=>{if(e.accordion)return;"boolean"==typeof a&&(a={expanded:a});const{expanded:l,skipDisabled:o}=a,d=t.filter((e=>e.disabled&&o?e.expanded.value:null!=l?l:!e.expanded.value)).map((e=>e.itemName.value));u(d)}}),r({toggle:(a,l)=>{const{accordion:o,modelValue:d}=e;u(o?a===d?"":a:l?d.concat(a):d.filter((e=>e!==a)))},isExpanded:a=>{const{accordion:l,modelValue:o}=e;return l?o===a:o.includes(a)}}),()=>{var a;return n("div",{class:[c(),{[s]:e.border}]},[null==(a=l.default)?void 0:a.call(l)])}}}));export{u as C,i as a};
