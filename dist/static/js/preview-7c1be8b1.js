import{d as e,a,u as o,o as r,c as s,y as t,f as n}from"./index-bfcfa076.js";import{T as c}from"./infoCollection-26a90f0b.js";import"./pdfh5-008ca364.js";const l={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],u=e({__name:"preview",setup(e){const n=a(),u=o(),{extraInfo:f}=u.query;console.log("route.query-------",u.query);let d={};try{d=JSON.parse(decodeURIComponent(f))}catch(m){}console.log("extraInfo",d);const{templateId:i}=d;return r((()=>{(()=>{const e=`/baseInsurance/${c[i]}`;n.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,a)=>(s(),t("div",l,p))}});export{u as default};
