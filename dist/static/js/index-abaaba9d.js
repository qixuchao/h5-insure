import{d as a,i as e,o as t,c as s,a as l,l as o,u as n,m as u,q as d,e as i,F as m,n as c,p,ap as r}from"./index-49d4fa1c.js";const h={class:"attachment-wrap"},f={class:"attachment-content"},v=["onClick"],V=a({name:"attachmentList"}),w=a({...V,props:{preText:{default:""},hasBgColor:{type:Boolean,default:!0},attachmentList:{default:()=>[]},isShowRadio:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1}},emits:["preview-file","update:modelValue"],setup(a,{emit:V}){const w=e(!1),y=a=>{V("update:modelValue",a)};return(a,e)=>{const B=r;return t(),s("div",{class:p({"com-attachment-list":!0,"has-bg":a.hasBgColor})},[l("div",h,[a.isShowRadio?(t(),o(B,{key:0,modelValue:n(w),"onUpdate:modelValue":e[0]||(e[0]=a=>u(w)?w.value=a:null),shape:"square",onChange:y},null,8,["modelValue"])):d("",!0),l("div",f,[l("span",null,i(a.preText),1),(t(!0),s(m,null,c(a.attachmentList||[],((a,e)=>(t(),s("span",{key:e,class:"attachment-item",onClick:a=>(a=>{V("preview-file",a)})(e)}," 《"+i(a.attachmentName)+"》 ",9,v)))),128))])])],2)}}});export{w as default};
