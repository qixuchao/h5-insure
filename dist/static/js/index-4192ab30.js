import{d as e,h as a,i as n,j as o,az as t,o as r,c as d,d3 as s,d4 as i,a as c,bK as l,T as u}from"./index-822b444e.js";import{T as p}from"./infoCollection-5bb237a4.js";import{T as I}from"./constant-8927d485.js";const m={class:"page-middle-wrapper"},C=[c("h4",null,null,-1)],f=e({__name:"index",setup(e){const c=a(),f=n(),g=o(""),{extraInfo:y,agencyCode:h,insurerCode:v,productCode:b,agentCode:x,saleChannelId:q}=f.query;console.log("middlePage route.query-------",f.query);let j={};try{j=JSON.parse(decodeURIComponent(y))}catch(w){}const{templateId:N,tenantId:R,orderNo:U}=j,$=e=>{s({param:e}).then((({code:e,data:a})=>{"10000"===e&&a?(()=>{var e;if(N===I.UPGRADE&&U){const a={insurerCode:v,productCode:b,tenantId:R||(null==(e=f.query)?void 0:e.tenantId),agencyCode:h,agentCode:x,orderNo:U,saleChannelId:q};return a.extraInfo=decodeURIComponent(JSON.stringify({...j,templateId:N})),void c.push(`/baseInsurance/upgrade?${l.stringify(a)}`)}if(!N||!p[N])return void u("链接上模板ID不正确不正确，请检查链接");const a=`/baseInsurance/${p[N]}`;c.replace(encodeURI(`${a}?${l.stringify(f.query)}`))})():g.value="验证失败"}))};return t((()=>{var e;$((e=window.location.search,i(["ext"],e).split("?")[1]))})),(e,a)=>(r(),d("div",m,C))}});export{f as default};
