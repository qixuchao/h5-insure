import{d as e,h as a,i as n,j as o,aG as t,o as r,c as d,da as s,db as c,a as i,c5 as l,T as u}from"./index-b9c83637.js";import{c as p}from"./infoCollection-e1fbeede.js";import{T as I}from"./constant-8927d485.js";const m={class:"page-middle-wrapper"},f=[i("h4",null,null,-1)],C=e({__name:"index",setup(e){const i=a(),C=n(),g=o(""),{extraInfo:y,agencyCode:h,insurerCode:v,productCode:x,agentCode:b,saleChannelId:q}=C.query;console.log("middlePage route.query-------",C.query);let j={};try{j=JSON.parse(decodeURIComponent(y))}catch(w){}const{templateId:N,tenantId:R,orderNo:U}=j,$=e=>{s({param:e}).then((({code:e,data:a})=>{"10000"===e&&a?(()=>{var e;if(N===I.UPGRADE&&U){const a={insurerCode:v,productCode:x,tenantId:R||(null==(e=C.query)?void 0:e.tenantId),agencyCode:h,agentCode:b,orderNo:U,saleChannelId:q};return a.extraInfo=decodeURIComponent(JSON.stringify({...j,templateId:N})),void i.push(`/baseInsurance/upgrade?${l.stringify(a)}`)}if(!N||!p[N])return void u("链接上模板ID不正确不正确，请检查链接");const a=`/baseInsurance/${p[N]}`;i.replace(encodeURI(`${a}?${l.stringify(C.query)}`))})():g.value="验证失败"}))};return t((()=>{var e;$((e=window.location.search,c(["ext"],e).split("?")[1]))})),(e,a)=>(r(),d("div",m,f))}});export{C as default};
