import{d as e,a,u as o,o as r,c as s,A as t,f as n}from"./index-e508de53.js";import{T as l}from"./infoCollection-1a055ddd.js";import"./pdfh5-008ca364.js";const p={class:"page-middle-wrapper"},c=[n("h4",null,null,-1)],d=e({__name:"preview",setup(e){const n=a(),d=o(),{extraInfo:u}=d.query;console.log("route.query-------",d.query);let i={};try{i=JSON.parse(decodeURIComponent(u))}catch(f){}console.log("extraInfo",i);const{templateId:m}=i;return r((()=>{(()=>{const e=`/baseInsurance/${l[m]}`;n.replace({path:e,query:{...d.query,preview:"1"}})})()})),(e,a)=>(s(),t("div",p,c))}});export{d as default};
