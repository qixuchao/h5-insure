import{_ as a,d as e,c as t,h as s,j as i,t as l,F as n,i as p,L as c}from"./index-fe1081ea.js";import"./pdfh5-008ca364.js";const o=["onClick"];var m=a(e({__name:"index",props:{preText:{type:String,default:""},hasBgColor:{type:Boolean,default:!0},attachementList:{type:Object,default:()=>{}}},emits:["preview-file"],setup:(a,{emit:e})=>(m,r)=>(t(),s("div",{class:c({"com-attachment-list":!0,"has-bg":a.hasBgColor})},[i("span",null,l(a.preText),1),(t(!0),s(n,null,p(a.attachementList||[],((a,i)=>(t(),s("span",{key:i,class:"attachment-item",onClick:a=>(a=>{e("preview-file",a)})(i)}," 《"+l(a.attachmentName)+"》 ",9,o)))),128))],2))}),[["__scopeId","data-v-5cafe498"]]);export{m as default};
