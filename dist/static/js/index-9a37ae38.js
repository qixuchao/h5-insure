import{_ as e,d as a,bj as t,r as s,G as l,E as i,c as n,h as o,j as u,t as d,bk as r,g as p,f as c,W as m,V as v}from"./index-a53cc31f.js";const h={class:"risk-responsibility"},g={class:"title"},f={class:"content"};var x=e(a({__name:"index",props:{modelValue:Boolean,title:{type:String,default:""},minHeight:{type:[Number,String],default:80},maxHeight:{type:[Number,String],default:200}},emits:["update:modelValue"],setup(e,{emit:a}){const x=e;t();const b=s();l((()=>{b.value=x.modelValue}));const y=i((()=>b.value?`${x.maxHeight}px`:`${x.minHeight}px`)),w=()=>{b.value=!b.value,a("update:modelValue",b.value)};return(a,t)=>{const s=v;return n(),o("div",h,[u("div",g,d(e.title),1),u("div",{class:"responsibility-content",style:m({height:p(y)})},[u("div",f,[r(a.$slots,"default",{},void 0,!0)]),u("div",{class:"show-button",onClick:w},[u("span",null,d(p(b)?"收起":"展开"),1),c(s,{style:{width:"20px",height:"20px"},name:p(b)?"arrow-up":"arrow-down"},null,8,["name"])])],4)])}}}),[["__scopeId","data-v-27faf794"]]);export{x as P};
