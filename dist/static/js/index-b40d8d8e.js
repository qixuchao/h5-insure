import{_ as t,d as e,c as a,g as s,i,t as l,F as p,h as o,B as c}from"./index-9ee23151.js";import"./pdfdist-3849db64.js";const n=["onClick"];var m=t(e({props:{preText:{type:String,default:""},hasBgColor:{type:Boolean,default:!0},attachementList:{type:Object,default:()=>{}}},emits:["preview-file"],setup:(t,{emit:e})=>(m,r)=>(a(),s("div",{class:c({"com-attachment-list":!0,"has-bg":t.hasBgColor})},[i("span",null,l(t.preText),1),(a(!0),s(p,null,o(t.attachementList||[],((t,i)=>(a(),s("span",{key:i,class:"attachment-item",onClick:t=>(t=>{e("preview-file",t)})(i)}," 《"+l(t.attachmentName)+"》 ",9,n)))),128))],2))}),[["__scopeId","data-v-5cafe498"]]);export{m as default};
