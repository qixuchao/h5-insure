import{d as e,g as a,h as o,av as r,o as s,c as t,a as n}from"./index-d5e08f40.js";import{T as l}from"./infoCollection-deaa7e49.js";const c={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],u=e({__name:"preview",setup(e){const n=a(),u=o(),{extraInfo:d}=u.query;console.log("route.query-------",u.query);let i={};try{i=JSON.parse(decodeURIComponent(d))}catch(f){}console.log("extraInfo",i);const{templateId:m}=i;return r((()=>{(()=>{const e=`/baseInsurance/${l[m]}`;n.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,a)=>(s(),t("div",c,p))}});export{u as default};
