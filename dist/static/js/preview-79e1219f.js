import{d as e,a,u as o,o as r,b as s,c as t,i as n}from"./index-726a2051.js";import{T as l}from"./infoCollection-9ff32e11.js";const c={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],u=e({__name:"preview",setup(e){const n=a(),u=o(),{extraInfo:i}=u.query;console.log("route.query-------",u.query);let d={};try{d=JSON.parse(decodeURIComponent(i))}catch(m){}console.log("extraInfo",d);const{templateId:f}=d;return r((()=>{(()=>{const e=`/baseInsurance/${l[f]}`;n.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,a)=>(s(),t("div",c,p))}});export{u as default};
