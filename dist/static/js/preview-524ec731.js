import{d as e,h as o,i as a,bc as r,o as s,c as t,a as n}from"./index-066cf51b.js";import{c}from"./infoCollection-3431159e.js";const l={class:"page-middle-wrapper"},p=[n("h4",null,null,-1)],u=e({__name:"preview",setup(e){const n=o(),u=a(),{extraInfo:i}=u.query;console.log("route.query-------",u.query);let d={};try{d=JSON.parse(decodeURIComponent(i))}catch(f){}console.log("extraInfo",d);const{templateId:m}=d;return r((()=>{(()=>{const e=`/baseInsurance/${c[m]}`;n.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,o)=>(s(),t("div",l,p))}});export{u as default};
