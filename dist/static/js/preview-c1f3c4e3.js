import{d as e,a as o,u as a,o as r,b as s,c as t,i as n}from"./index-379e295f.js";import{T as l}from"./infoCollection-0ed3e720.js";const c={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],u=e({__name:"preview",setup(e){const n=o(),u=a(),{extraInfo:d}=u.query;console.log("route.query-------",u.query);let i={};try{i=JSON.parse(decodeURIComponent(d))}catch(f){}console.log("extraInfo",i);const{templateId:m}=i;return r((()=>{(()=>{const e=`/baseInsurance/${l[m]}`;n.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,o)=>(s(),t("div",c,p))}});export{u as default};
