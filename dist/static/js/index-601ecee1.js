import{_ as a,d as t,c as e,h as s,j as i,t as l,F as c,i as n,L as p}from"./index-589cf96a.js";import"./pdfh5-008ca364.js";const o=["onClick"];var m=a(t({__name:"index",props:{preText:{type:String,default:""},hasBgColor:{type:Boolean,default:!0},attachementList:{type:Object,default:()=>{}}},emits:["preview-file"],setup:(a,{emit:t})=>(m,r)=>(e(),s("div",{class:p({"com-attachment-list":!0,"has-bg":a.hasBgColor})},[i("span",null,l(a.preText),1),(e(!0),s(c,null,n(a.attachementList||[],((a,i)=>(e(),s("span",{key:i,class:"attachment-item",onClick:a=>(a=>{t("preview-file",a)})(i)}," 《"+l(a.attachmentName)+"》 ",9,o)))),128))],2))}),[["__scopeId","data-v-5cafe498"]]);export{m as default};
