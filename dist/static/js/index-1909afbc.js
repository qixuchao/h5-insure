import{d as e,u as a,a as o,aE as s,c as r,h as t,j as n}from"./index-8e95da1c.js";import{f as c}from"./infoCollection-2f3aa43a.js";import"./pdfh5-008ca364.js";const l={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],u=e({__name:"index",setup(e){const n=a(),u=o(),{extraInfo:d}=u.query;console.log("route.query-------",u.query);let i={};try{i=JSON.parse(decodeURIComponent(d))}catch(m){}console.log("extraInfo",i);const{templateId:f}=i;return s((()=>{(()=>{const e=`/baseInsurance/${c[f]}`;n.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,a)=>(r(),t("div",l,p))}});export{u as default};
