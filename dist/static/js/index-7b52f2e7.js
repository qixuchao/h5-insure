import{d as e,h as a,i as n,j as o,aE as t,o as r,c as s,cL as d,cM as c,a as i,bE as l,T as u}from"./index-b13c90e5.js";import{T as p}from"./infoCollection-60f02cbf.js";import{T as I}from"./constant-8927d485.js";const f={class:"page-middle-wrapper"},m=[i("h4",null,null,-1)],C=e({__name:"index",setup(e){const i=a(),C=n(),g=o(""),{extraInfo:y,agencyCode:h,insurerCode:v,productCode:x,agentCode:b,saleChannelId:q}=C.query;console.log("middlePage route.query-------",C.query);let j={};try{j=JSON.parse(decodeURIComponent(y))}catch(w){}const{templateId:N,tenantId:R,orderNo:U}=j,$=e=>{d({param:e}).then((({code:e,data:a})=>{"10000"===e&&a?(()=>{var e;if(N===I.UPGRADE&&U){const a={insurerCode:v,productCode:x,tenantId:R||(null==(e=C.query)?void 0:e.tenantId),agencyCode:h,agentCode:b,orderNo:U,saleChannelId:q};return a.extraInfo=decodeURIComponent(JSON.stringify({...j,templateId:N})),void i.push(`/baseInsurance/upgrade?${l.stringify(a)}`)}if(!N||!p[N])return void u("链接上模板ID不正确不正确，请检查链接");const a=`/baseInsurance/${p[N]}`;i.replace(encodeURI(`${a}?${l.stringify(C.query)}`))})():g.value="验证失败"}))};return t((()=>{var e;$((e=window.location.search,c(["ext"],e).split("?")[1]))})),(e,a)=>(r(),s("div",f,m))}});export{C as default};
