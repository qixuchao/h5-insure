import{d as e,a,u as o,o as r,c as s,A as t,f as n}from"./index-71702650.js";import{T as l}from"./infoCollection-900012ea.js";import"./pdfh5-008ca364.js";const p={class:"page-middle-wrapper"},c=[n("h4",null,null,-1)],u=e({__name:"preview",setup(e){const n=a(),u=o(),{extraInfo:d}=u.query;console.log("route.query-------",u.query);let i={};try{i=JSON.parse(decodeURIComponent(d))}catch(f){}console.log("extraInfo",i);const{templateId:m}=i;return r((()=>{(()=>{const e=`/baseInsurance/${l[m]}`;n.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,a)=>(s(),t("div",p,c))}});export{u as default};
