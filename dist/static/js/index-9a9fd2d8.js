import{d as e,a,u as o,o as s,c as r,y as t,f as n}from"./index-14b87a0a.js";import{T as c}from"./infoCollection-8c829899.js";import"./pdfh5-008ca364.js";const l={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],u=e({__name:"index",setup(e){const n=a(),u=o(),{extraInfo:d}=u.query;console.log("route.query-------",u.query);let i={};try{i=JSON.parse(decodeURIComponent(d))}catch(f){}console.log("extraInfo",i);const{templateId:m}=i;return s((()=>{(()=>{const e=`/baseInsurance/${c[m]}`;n.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,a)=>(r(),t("div",l,p))}});export{u as default};
