import{d as e,h as a,i as o,aH as r,o as s,c as t,a as n}from"./index-7832f651.js";import{T as c}from"./infoCollection-7e7ce9cd.js";const l={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],u=e({__name:"preview",setup(e){const n=a(),u=o(),{extraInfo:d}=u.query;console.log("route.query-------",u.query);let i={};try{i=JSON.parse(decodeURIComponent(d))}catch(f){}console.log("extraInfo",i);const{templateId:m}=i;return r((()=>{(()=>{const e=`/baseInsurance/${c[m]}`;n.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,a)=>(s(),t("div",l,p))}});export{u as default};
