import{d as a,r as e,bD as t,b as s,c as l,i as o,g as n,f as d,a0 as i,h as u,E as m,$ as c,a7 as p,F as r}from"./index-aba19b63.js";const h={class:"attachment-wrap"},f={class:"attachment-content"},v=["onClick"],V=a({name:"attachmentList"}),b=a({...V,props:{preText:{default:""},hasBgColor:{type:Boolean,default:!0},attachmentList:{default:()=>[]},isShowRadio:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1}},emits:["preview-file","update:modelValue"],setup(a,{emit:V}){const b=e(!1),g=a=>{V("update:modelValue",a)};return(e,w)=>{const y=t;return s(),l("div",{class:r({"com-attachment-list":!0,"has-bg":a.hasBgColor})},[o("div",h,[a.isShowRadio?(s(),n(y,{key:0,modelValue:d(b),"onUpdate:modelValue":w[0]||(w[0]=a=>i(b)?b.value=a:null),shape:"round",onChange:g},null,8,["modelValue"])):u("",!0),o("div",f,[o("span",null,m(a.preText),1),(s(!0),l(c,null,p(a.attachmentList||[],((a,e)=>(s(),l("span",{key:e,class:"attachment-item",onClick:a=>(a=>{V("preview-file",a)})(e)}," 《"+m(a.attachmentName)+"》 ",9,v)))),128))])])],2)}}});export{b as default};
