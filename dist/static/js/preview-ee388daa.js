import{d as e,h as a,i as o,aR as r,o as s,c as t,a as n}from"./index-b49e6838.js";import{c}from"./infoCollection-acbfc00f.js";const l={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],u=e({__name:"preview",setup(e){const n=a(),u=o(),{extraInfo:i}=u.query;console.log("route.query-------",u.query);let d={};try{d=JSON.parse(decodeURIComponent(i))}catch(m){}console.log("extraInfo",d);const{templateId:f}=d;return r((()=>{(()=>{const e=`/baseInsurance/${c[f]}`;n.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,a)=>(s(),t("div",l,p))}});export{u as default};
