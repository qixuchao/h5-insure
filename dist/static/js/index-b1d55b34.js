import{_ as e,d as a,c as t,h as s,j as i,t as l,F as n,i as p,L as c}from"./index-444bee7b.js";import"./pdfh5-008ca364.js";const o=["onClick"];var m=e(a({__name:"index",props:{preText:{type:String,default:""},hasBgColor:{type:Boolean,default:!0},attachementList:{type:Object,default:()=>{}}},emits:["preview-file"],setup:(e,{emit:a})=>(m,r)=>(t(),s("div",{class:c({"com-attachment-list":!0,"has-bg":e.hasBgColor})},[i("span",null,l(e.preText),1),(t(!0),s(n,null,p(e.attachementList||[],((e,i)=>(t(),s("span",{key:i,class:"attachment-item",onClick:e=>(e=>{a("preview-file",e)})(i)}," 《"+l(e.attachmentName)+"》 ",9,o)))),128))],2))}),[["__scopeId","data-v-5cafe498"]]);export{m as default};
