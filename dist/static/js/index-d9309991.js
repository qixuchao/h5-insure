import{d as e,u as a,a as o,aE as s,c as r,h as t,j as n}from"./index-183e9dd7.js";import{f as l}from"./infoCollection-ba25e5af.js";import"./pdfh5-008ca364.js";const c={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],d=e({__name:"index",setup(e){const n=a(),d=o(),{extraInfo:u}=d.query;console.log("route.query-------",d.query);let i={};try{i=JSON.parse(decodeURIComponent(u))}catch(m){}console.log("extraInfo",i);const{templateId:f}=i;return s((()=>{(()=>{const e=`/baseInsurance/${l[f]}`;n.replace({path:e,query:{...d.query,preview:"1"}})})()})),(e,a)=>(r(),t("div",c,p))}});export{d as default};
