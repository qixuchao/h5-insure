import{d as e,h as a,i as o,az as r,o as s,c as t,a as n}from"./index-86787787.js";import{T as l}from"./infoCollection-df55a2f9.js";const c={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],u=e({__name:"preview",setup(e){const n=a(),u=o(),{extraInfo:d}=u.query;console.log("route.query-------",u.query);let i={};try{i=JSON.parse(decodeURIComponent(d))}catch(m){}console.log("extraInfo",i);const{templateId:f}=i;return r((()=>{(()=>{const e=`/baseInsurance/${l[f]}`;n.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,a)=>(s(),t("div",c,p))}});export{u as default};
