import{_ as t,d as a,c as e,g as s,i,t as l,F as p,h as c,B as o}from"./index-27f97798.js";import"./pdfh5-e5c0db2a.js";const n=["onClick"];var m=t(a({props:{preText:{type:String,default:""},hasBgColor:{type:Boolean,default:!0},attachementList:{type:Object,default:()=>{}}},emits:["preview-file"],setup:(t,{emit:a})=>(m,r)=>(e(),s("div",{class:o({"com-attachment-list":!0,"has-bg":t.hasBgColor})},[i("span",null,l(t.preText),1),(e(!0),s(p,null,c(t.attachementList||[],((t,i)=>(e(),s("span",{key:i,class:"attachment-item",onClick:t=>(t=>{a("preview-file",t)})(i)}," 《"+l(t.attachmentName)+"》 ",9,n)))),128))],2))}),[["__scopeId","data-v-5cafe498"]]);export{m as default};
