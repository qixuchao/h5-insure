import{d as e,a as o,u as a,o as r,c as s,A as t,f as n}from"./index-b419c4de.js";import{T as c}from"./infoCollection-2ed3ceeb.js";import"./pdfh5-008ca364.js";const l={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],u=e({__name:"preview",setup(e){const n=o(),u=a(),{extraInfo:d}=u.query;console.log("route.query-------",u.query);let i={};try{i=JSON.parse(decodeURIComponent(d))}catch(f){}console.log("extraInfo",i);const{templateId:m}=i;return r((()=>{(()=>{const e=`/baseInsurance/${c[m]}`;n.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,o)=>(s(),t("div",l,p))}});export{u as default};
