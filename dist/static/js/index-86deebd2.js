import{_ as e,d as t,bj as a,r as s,G as l,E as i,c as n,h as o,j as u,t as d,bk as r,g as p,f as m,W as c,V as v}from"./index-174758e2.js";const h={class:"risk-responsibility"},g={class:"title"},x={class:"content"};var f=e(t({__name:"index",props:{modelValue:Boolean,title:{type:String,default:""},minHeight:{type:[Number,String],default:80},maxHeight:{type:[Number,String],default:200}},emits:["update:modelValue"],setup(e,{emit:t}){const f=e;a();const b=s();l((()=>{b.value=f.modelValue}));const y=i((()=>b.value?`${f.maxHeight}px`:`${f.minHeight}px`)),w=()=>{b.value=!b.value,t("update:modelValue",b.value)};return(t,a)=>{const s=v;return n(),o("div",h,[u("div",g,d(e.title),1),u("div",{class:"responsibility-content",style:c({height:p(y)})},[u("div",x,[r(t.$slots,"default",{},void 0,!0)]),u("div",{class:"show-button",onClick:w},[u("span",null,d(p(b)?"收起":"展开"),1),m(s,{style:{width:"20px",height:"20px"},name:p(b)?"arrow-up":"arrow-down"},null,8,["name"])])],4)])}}}),[["__scopeId","data-v-27faf794"]]);export{f as P};
