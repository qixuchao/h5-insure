import{d as e,a as o,u as a,o as r,c as s,A as t,f as n}from"./index-463462e8.js";import{T as l}from"./infoCollection-126e8521.js";import"./pdfh5-008ca364.js";const p={class:"page-middle-wrapper"},c=[n("h4",null,null,-1)],u=e({__name:"preview",setup(e){const n=o(),u=a(),{extraInfo:d}=u.query;console.log("route.query-------",u.query);let i={};try{i=JSON.parse(decodeURIComponent(d))}catch(f){}console.log("extraInfo",i);const{templateId:m}=i;return r((()=>{(()=>{const e=`/baseInsurance/${l[m]}`;n.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,o)=>(s(),t("div",p,c))}});export{u as default};
