import{_ as a,d as t,c as e,h as s,j as i,t as l,F as n,i as p,L as c}from"./index-3a7a8438.js";import"./pdfh5-008ca364.js";const o=["onClick"];var m=a(t({__name:"index",props:{preText:{type:String,default:""},hasBgColor:{type:Boolean,default:!0},attachementList:{type:Object,default:()=>{}}},emits:["preview-file"],setup:(a,{emit:t})=>(m,r)=>(e(),s("div",{class:c({"com-attachment-list":!0,"has-bg":a.hasBgColor})},[i("span",null,l(a.preText),1),(e(!0),s(n,null,p(a.attachementList||[],((a,i)=>(e(),s("span",{key:i,class:"attachment-item",onClick:a=>(a=>{t("preview-file",a)})(i)}," 《"+l(a.attachmentName)+"》 ",9,o)))),128))],2))}),[["__scopeId","data-v-5cafe498"]]);export{m as default};
