import{d as e,u as a,a as o,aD as s,c as r,g as t,i as n}from"./index-9effc651.js";import{f as c}from"./infoCollection-d7c085e7.js";import"./pdfh5-008ca364.js";const l={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],u=e({setup(e){const n=a(),u=o(),{extraInfo:d}=u.query;console.log("route.query-------",u.query);let f={};try{f=JSON.parse(decodeURIComponent(d))}catch(m){}console.log("extraInfo",f);const{templateId:i}=f;return s((()=>{(()=>{const e=`/baseInsurance/${c[i]}`;n.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,a)=>(r(),t("div",l,p))}});export{u as default};
