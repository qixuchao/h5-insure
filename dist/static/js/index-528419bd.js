import{d as e,h as a,i as n,j as o,aR as t,o as r,c as d,c$ as s,d0 as c,a as i,bP as l,T as u}from"./index-dca1ad48.js";import{c as p}from"./infoCollection-e09b4c41.js";import{T as I}from"./constant-8927d485.js";const m={class:"page-middle-wrapper"},C=[i("h4",null,null,-1)],f=e({__name:"index",setup(e){const i=a(),f=n(),g=o(""),{extraInfo:y,agencyCode:h,insurerCode:v,productCode:x,agentCode:q,saleChannelId:R}=f.query;console.log("middlePage route.query-------",f.query);let $={};try{$=JSON.parse(decodeURIComponent(y))}catch(w){}const{templateId:b,tenantId:j,orderNo:N}=$,U=e=>{s({param:e}).then((({code:e,data:a})=>{"10000"===e&&a?(()=>{var e;if(b===I.UPGRADE&&N){const a={insurerCode:v,productCode:x,tenantId:j||(null==(e=f.query)?void 0:e.tenantId),agencyCode:h,agentCode:q,orderNo:N,saleChannelId:R};return a.extraInfo=decodeURIComponent(JSON.stringify({...$,templateId:b})),void i.push(`/baseInsurance/upgrade?${l.stringify(a)}`)}if(!b||!p[b])return void u("链接上模板ID不正确不正确，请检查链接");const a=`/baseInsurance/${p[b]}`;i.replace(encodeURI(`${a}?${l.stringify(f.query)}`))})():g.value="验证失败"}))};return t((()=>{var e;U((e=window.location.search,c(["ext"],e).split("?")[1]))})),(e,a)=>(r(),d("div",m,C))}});export{f as default};
