import{d as a,r as e,bO as t,c as s,A as l,f as o,e as n,g as d,a3 as i,h as m,E as u,U as c,V as p,F as r}from"./index-b845e0df.js";import"./pdfh5-008ca364.js";const h={class:"attachment-wrap"},f={class:"attachment-content"},V=["onClick"],v=a({name:"attachmentList"}),g=a({...v,props:{preText:{default:""},hasBgColor:{type:Boolean,default:!0},attachmentList:{default:()=>[]},isShowRadio:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1}},emits:["preview-file","update:modelValue"],setup(a,{emit:v}){const g=e(!1),w=a=>{v("update:modelValue",a)};return(e,y)=>{const B=t;return s(),l("div",{class:r({"com-attachment-list":!0,"has-bg":a.hasBgColor})},[o("div",h,[a.isShowRadio?(s(),n(B,{key:0,modelValue:d(g),"onUpdate:modelValue":y[0]||(y[0]=a=>i(g)?g.value=a:null),shape:"round",onChange:w},null,8,["modelValue"])):m("",!0),o("div",f,[o("span",null,u(a.preText),1),(s(!0),l(c,null,p(a.attachmentList||[],((a,e)=>(s(),l("span",{key:e,class:"attachment-item",onClick:a=>(a=>{v("preview-file",a)})(e)}," 《"+u(a.attachmentName)+"》 ",9,V)))),128))])])],2)}}});export{g as default};
