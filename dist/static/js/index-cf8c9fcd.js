import{d as e,u as a,a as o,aE as s,c as r,h as t,j as n}from"./index-9784e8a2.js";import{f as l}from"./infoCollection-80197af6.js";import"./pdfh5-008ca364.js";const c={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],u=e({__name:"index",setup(e){const n=a(),u=o(),{extraInfo:d}=u.query;console.log("route.query-------",u.query);let i={};try{i=JSON.parse(decodeURIComponent(d))}catch(m){}console.log("extraInfo",i);const{templateId:f}=i;return s((()=>{(()=>{const e=`/baseInsurance/${l[f]}`;n.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,a)=>(r(),t("div",c,p))}});export{u as default};
