import{d as e,h as a,i as o,bc as r,o as s,c as t,a as c}from"./index-c2c5ba37.js";import{c as n}from"./infoCollection-e99fa5ec.js";const l={class:"page-middle-wrapper"},p=[c("h4",null,null,-1)],u=e({__name:"preview",setup(e){const c=a(),u=o(),{extraInfo:i}=u.query;console.log("route.query-------",u.query);let d={};try{d=JSON.parse(decodeURIComponent(i))}catch(f){}console.log("extraInfo",d);const{templateId:m}=d;return r((()=>{(()=>{const e=`/baseInsurance/${n[m]}`;c.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,a)=>(s(),t("div",l,p))}});export{u as default};
