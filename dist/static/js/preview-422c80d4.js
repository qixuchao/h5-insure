import{d as e,g as a,h as o,av as r,o as s,c as t,a as n}from"./index-9df177ad.js";import{T as l}from"./infoCollection-9ed0730a.js";const c={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],d=e({__name:"preview",setup(e){const n=a(),d=o(),{extraInfo:u}=d.query;console.log("route.query-------",d.query);let i={};try{i=JSON.parse(decodeURIComponent(u))}catch(f){}console.log("extraInfo",i);const{templateId:m}=i;return r((()=>{(()=>{const e=`/baseInsurance/${l[m]}`;n.replace({path:e,query:{...d.query,preview:"1"}})})()})),(e,a)=>(s(),t("div",c,p))}});export{d as default};
