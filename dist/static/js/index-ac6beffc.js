import{_ as a,d as t,c as e,g as s,i,t as l,F as c,h as p,B as o}from"./index-6a3950c5.js";import"./pdfh5-e5c0db2a.js";const n=["onClick"];var m=a(t({props:{preText:{type:String,default:""},hasBgColor:{type:Boolean,default:!0},attachementList:{type:Object,default:()=>{}}},emits:["preview-file"],setup:(a,{emit:t})=>(m,r)=>(e(),s("div",{class:o({"com-attachment-list":!0,"has-bg":a.hasBgColor})},[i("span",null,l(a.preText),1),(e(!0),s(c,null,p(a.attachementList||[],((a,i)=>(e(),s("span",{key:i,class:"attachment-item",onClick:a=>(a=>{t("preview-file",a)})(i)}," 《"+l(a.attachmentName)+"》 ",9,n)))),128))],2))}),[["__scopeId","data-v-5cafe498"]]);export{m as default};
