import{d as e,h as a,i as o,aE as r,o as s,c as t,a as n}from"./index-df1d7325.js";import{T as c}from"./infoCollection-7c1ecd77.js";const l={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],d=e({__name:"preview",setup(e){const n=a(),d=o(),{extraInfo:u}=d.query;console.log("route.query-------",d.query);let i={};try{i=JSON.parse(decodeURIComponent(u))}catch(f){}console.log("extraInfo",i);const{templateId:m}=i;return r((()=>{(()=>{const e=`/baseInsurance/${c[m]}`;n.replace({path:e,query:{...d.query,preview:"1"}})})()})),(e,a)=>(s(),t("div",l,p))}});export{d as default};
