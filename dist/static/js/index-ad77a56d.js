import{d as a,i as e,o as t,c as s,a as l,l as o,u as n,m as u,q as i,e as m,F as c,n as d,p,cy as r}from"./index-f919c47f.js";const h={class:"attachment-wrap"},f={class:"attachment-content"},v=["onClick"],y=a({name:"attachmentList"}),V=a({...y,props:{preText:{default:""},hasBgColor:{type:Boolean,default:!0},attachmentList:{default:()=>[]},isShowRadio:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1}},emits:["preview-file","update:modelValue"],setup(a,{emit:y}){const V=e(!1),w=a=>{y("update:modelValue",a)};return(a,e)=>{const B=r;return t(),s("div",{class:p({"com-attachment-list":!0,"has-bg":a.hasBgColor})},[l("div",h,[a.isShowRadio?(t(),o(B,{key:0,modelValue:n(V),"onUpdate:modelValue":e[0]||(e[0]=a=>u(V)?V.value=a:null),shape:"square",onChange:w},null,8,["modelValue"])):i("",!0),l("div",f,[l("span",null,m(a.preText),1),(t(!0),s(c,null,d(a.attachmentList||[],((a,e)=>(t(),s("span",{key:e,class:"attachment-item",onClick:a=>(a=>{y("preview-file",a)})(e)}," 《"+m(a.attachmentName)+"》 ",9,v)))),128))])])],2)}}});export{V as default};
