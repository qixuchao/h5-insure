import{d as a,r as e,b as t,c as s,i as l,g as o,f as n,V as i,h as u,$ as d,U as m,a4 as c,a0 as p,b_ as r}from"./index-be39512e.js";const h={class:"attachment-wrap"},f={class:"attachment-content"},V=["onClick"],v=a({name:"attachmentList"}),g=a({...v,props:{preText:{default:""},hasBgColor:{type:Boolean,default:!0},attachmentList:{default:()=>[]},isShowRadio:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1}},emits:["preview-file","update:modelValue"],setup(a,{emit:v}){const g=e(!1),w=a=>{v("update:modelValue",a)};return(a,e)=>{const y=r;return t(),s("div",{class:p({"com-attachment-list":!0,"has-bg":a.hasBgColor})},[l("div",h,[a.isShowRadio?(t(),o(y,{key:0,modelValue:n(g),"onUpdate:modelValue":e[0]||(e[0]=a=>i(g)?g.value=a:null),shape:"square",onChange:w},null,8,["modelValue"])):u("",!0),l("div",f,[l("span",null,d(a.preText),1),(t(!0),s(m,null,c(a.attachmentList||[],((a,e)=>(t(),s("span",{key:e,class:"attachment-item",onClick:a=>(a=>{v("preview-file",a)})(e)}," 《"+d(a.attachmentName)+"》 ",9,V)))),128))])])],2)}}});export{g as default};
