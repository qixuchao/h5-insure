import{d as e,g as a,h as o,av as r,o as s,c as t,a as n}from"./index-f43edcf2.js";import{T as l}from"./infoCollection-2a0b5fb4.js";const c={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],u=e({__name:"preview",setup(e){const n=a(),u=o(),{extraInfo:d}=u.query;console.log("route.query-------",u.query);let f={};try{f=JSON.parse(decodeURIComponent(d))}catch(m){}console.log("extraInfo",f);const{templateId:i}=f;return r((()=>{(()=>{const e=`/baseInsurance/${l[i]}`;n.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,a)=>(s(),t("div",c,p))}});export{u as default};
