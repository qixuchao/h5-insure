import{d as e,a as o,u as a,o as r,b as s,c as t,i as n}from"./index-38322260.js";import{T as l}from"./infoCollection-22f38e03.js";const c={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],u=e({__name:"preview",setup(e){const n=o(),u=a(),{extraInfo:i}=u.query;console.log("route.query-------",u.query);let d={};try{d=JSON.parse(decodeURIComponent(i))}catch(f){}console.log("extraInfo",d);const{templateId:m}=d;return r((()=>{(()=>{const e=`/baseInsurance/${l[m]}`;n.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,o)=>(s(),t("div",c,p))}});export{u as default};
