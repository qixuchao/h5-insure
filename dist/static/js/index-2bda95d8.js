import{d as e,u as a,a as o,aE as s,c as r,h as t,j as n}from"./index-b25e28f3.js";import{f as l}from"./infoCollection-25437f8b.js";import"./pdfh5-008ca364.js";const c={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],u=e({__name:"index",setup(e){const n=a(),u=o(),{extraInfo:d}=u.query;console.log("route.query-------",u.query);let f={};try{f=JSON.parse(decodeURIComponent(d))}catch(m){}console.log("extraInfo",f);const{templateId:i}=f;return s((()=>{(()=>{const e=`/baseInsurance/${l[i]}`;n.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,a)=>(r(),t("div",c,p))}});export{u as default};
