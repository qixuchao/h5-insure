import{d as e,a as o,u as a,o as r,c as s,A as t,f as c}from"./index-cc4926f5.js";import{T as n}from"./infoCollection-511c71c6.js";import"./pdfh5-008ca364.js";const l={class:"page-middle-wrapper"},p=[c("h4",null,null,-1)],u=e({__name:"preview",setup(e){const c=o(),u=a(),{extraInfo:d}=u.query;console.log("route.query-------",u.query);let i={};try{i=JSON.parse(decodeURIComponent(d))}catch(m){}console.log("extraInfo",i);const{templateId:f}=i;return r((()=>{(()=>{const e=`/baseInsurance/${n[f]}`;c.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,o)=>(s(),t("div",l,p))}});export{u as default};
