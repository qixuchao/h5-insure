import{d as e,h as a,i as n,j as o,aJ as t,o as r,c as d,d3 as s,d4 as c,a as i,bJ as l,T as u}from"./index-25cfb15d.js";import{T as p}from"./infoCollection-117fe39c.js";import{T as I}from"./constant-8927d485.js";const f={class:"page-middle-wrapper"},m=[i("h4",null,null,-1)],C=e({__name:"index",setup(e){const i=a(),C=n(),g=o(""),{extraInfo:y,agencyCode:h,insurerCode:v,productCode:x,agentCode:q,saleChannelId:b}=C.query;console.log("middlePage route.query-------",C.query);let j={};try{j=JSON.parse(decodeURIComponent(y))}catch($){}const{templateId:J,tenantId:N,orderNo:R}=j,U=e=>{s({param:e}).then((({code:e,data:a})=>{"10000"===e&&a?(()=>{var e;if(J===I.UPGRADE&&R){const a={insurerCode:v,productCode:x,tenantId:N||(null==(e=C.query)?void 0:e.tenantId),agencyCode:h,agentCode:q,orderNo:R,saleChannelId:b};return a.extraInfo=decodeURIComponent(JSON.stringify({...j,templateId:J})),void i.push(`/baseInsurance/upgrade?${l.stringify(a)}`)}if(!J||!p[J])return void u("链接上模板ID不正确不正确，请检查链接");const a=`/baseInsurance/${p[J]}`;i.replace(encodeURI(`${a}?${l.stringify(C.query)}`))})():g.value="验证失败"}))};return t((()=>{var e;U((e=window.location.search,c(["ext"],e).split("?")[1]))})),(e,a)=>(r(),d("div",f,m))}});export{C as default};
