import{d as e,h as a,i as n,j as o,aG as t,o as r,c as d,c_ as s,c$ as c,a as i,bF as l,T as u}from"./index-ca0d2dc0.js";import{T as p}from"./infoCollection-dafbc9b2.js";import{T as I}from"./constant-8927d485.js";const m={class:"page-middle-wrapper"},f=[i("h4",null,null,-1)],C=e({__name:"index",setup(e){const i=a(),C=n(),g=o(""),{extraInfo:y,agencyCode:h,insurerCode:v,productCode:x,agentCode:b,saleChannelId:q}=C.query;console.log("middlePage route.query-------",C.query);let $={};try{$=JSON.parse(decodeURIComponent(y))}catch(w){}const{templateId:j,tenantId:N,orderNo:R}=$,U=e=>{s({param:e}).then((({code:e,data:a})=>{"10000"===e&&a?(()=>{var e;if(j===I.UPGRADE&&R){const a={insurerCode:v,productCode:x,tenantId:N||(null==(e=C.query)?void 0:e.tenantId),agencyCode:h,agentCode:b,orderNo:R,saleChannelId:q};return a.extraInfo=decodeURIComponent(JSON.stringify({...$,templateId:j})),void i.push(`/baseInsurance/upgrade?${l.stringify(a)}`)}if(!j||!p[j])return void u("链接上模板ID不正确不正确，请检查链接");const a=`/baseInsurance/${p[j]}`;i.replace(encodeURI(`${a}?${l.stringify(C.query)}`))})():g.value="验证失败"}))};return t((()=>{var e;U((e=window.location.search,c(["ext"],e).split("?")[1]))})),(e,a)=>(r(),d("div",m,f))}});export{C as default};
