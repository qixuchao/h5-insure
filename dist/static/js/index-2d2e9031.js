import{d as a,r as e,bC as t,c as s,y as l,f as o,e as n,g as d,a1 as i,h as m,z as u,R as c,U as p,A as r}from"./index-000b7445.js";import"./pdfh5-008ca364.js";const h={class:"attachment-wrap"},f={class:"attachment-content"},v=["onClick"],y=a({name:"attachmentList"}),C=a({...y,props:{preText:{default:""},hasBgColor:{type:Boolean,default:!0},attachmentList:{default:()=>[]},isShowRadio:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1}},emits:["preview-file","update:modelValue"],setup(a,{emit:y}){const C=e(!1),V=a=>{y("update:modelValue",a)};return(e,g)=>{const w=t;return s(),l("div",{class:r({"com-attachment-list":!0,"has-bg":a.hasBgColor})},[o("div",h,[a.isShowRadio?(s(),n(w,{key:0,modelValue:d(C),"onUpdate:modelValue":g[0]||(g[0]=a=>i(C)?C.value=a:null),shape:"round",onChange:V},null,8,["modelValue"])):m("",!0),o("div",f,[o("span",null,u(a.preText),1),(s(!0),l(c,null,p(a.attachmentList||[],((a,e)=>(s(),l("span",{key:e,class:"attachment-item",onClick:a=>(a=>{y("preview-file",a)})(e)}," 《"+u(a.attachmentName)+"》 ",9,v)))),128))])])],2)}}});export{C as default};
