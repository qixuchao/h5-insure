import{d as a,j as e,o as t,c as s,a as l,p as o,u as n,q as u,f as i,e as d,F as m,s as p,g as c,n as f,br as r}from"./index-e6143c1d.js";const h={class:"attachment-wrap"},x={class:"attachment-content"},V=["onClick"],w=a({name:"attachmentList"}),v=a({...w,props:{preText:{default:""},suffixText:{default:""},hasBgColor:{type:Boolean,default:!0},attachmentList:{default:()=>[]},isShowRadio:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1},isView:{type:Boolean,default:!1}},emits:["preview-file","update:modelValue"],setup(a,{emit:w}){const v=a,y=w,B=e(!1),g=a=>{y("update:modelValue",a)};return(a,e)=>{const w=r;return t(),s("div",{class:f({"com-attachment-list":!0,"has-bg":a.hasBgColor})},[l("div",h,[a.isShowRadio?(t(),o(w,{key:0,modelValue:n(B),"onUpdate:modelValue":e[0]||(e[0]=a=>u(B)?B.value=a:null),shape:"square",onChange:g},null,8,["modelValue"])):i("",!0),l("div",x,[l("span",null,d(a.preText),1),(t(!0),s(m,null,p(a.attachmentList||[],((a,e)=>(t(),s("span",{key:e,class:"attachment-item",onClick:a=>(a=>{v.isView||y("preview-file",a)})(e)}," 《"+d(a.attachmentName)+"》 ",9,V)))),128)),c(a.$slots,"suffixText",{},(()=>[l("span",null,d(a.suffixText),1)]))])])],2)}}});export{v as default};
