import{d as e,a as o,u as a,o as r,b as s,c as t,i as n}from"./index-dc14462f.js";import{T as c}from"./infoCollection-df47eecb.js";const l={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],u=e({__name:"preview",setup(e){const n=o(),u=a(),{extraInfo:d}=u.query;console.log("route.query-------",u.query);let i={};try{i=JSON.parse(decodeURIComponent(d))}catch(m){}console.log("extraInfo",i);const{templateId:f}=i;return r((()=>{(()=>{const e=`/baseInsurance/${c[f]}`;n.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,o)=>(s(),t("div",l,p))}});export{u as default};
