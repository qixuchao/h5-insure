import{d as a,r as e,bF as t,c as s,y as l,f as o,e as n,g as d,a1 as i,h as m,z as u,R as c,U as p,A as r}from"./index-e033b36d.js";import"./pdfh5-008ca364.js";const h={class:"attachment-wrap"},f={class:"attachment-content"},v=["onClick"],y=a({name:"attachmentList"}),V=a({...y,props:{preText:{default:""},hasBgColor:{type:Boolean,default:!0},attachmentList:{default:()=>[]},isShowRadio:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1}},emits:["preview-file","update:modelValue"],setup(a,{emit:y}){const V=e(!1),g=a=>{y("update:modelValue",a)};return(e,w)=>{const B=t;return s(),l("div",{class:r({"com-attachment-list":!0,"has-bg":a.hasBgColor})},[o("div",h,[a.isShowRadio?(s(),n(B,{key:0,modelValue:d(V),"onUpdate:modelValue":w[0]||(w[0]=a=>i(V)?V.value=a:null),shape:"round",onChange:g},null,8,["modelValue"])):m("",!0),o("div",f,[o("span",null,u(a.preText),1),(s(!0),l(c,null,p(a.attachmentList||[],((a,e)=>(s(),l("span",{key:e,class:"attachment-item",onClick:a=>(a=>{y("preview-file",a)})(e)}," 《"+u(a.attachmentName)+"》 ",9,v)))),128))])])],2)}}});export{V as default};
