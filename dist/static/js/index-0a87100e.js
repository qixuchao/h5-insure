import{d as e,h as a,i as n,j as o,aR as t,o as r,c as s,c$ as d,d0 as c,a as i,bP as l,T as u}from"./index-b49e6838.js";import{c as p}from"./infoCollection-acbfc00f.js";import{T as I}from"./constant-8927d485.js";const f={class:"page-middle-wrapper"},m=[i("h4",null,null,-1)],C=e({__name:"index",setup(e){const i=a(),C=n(),g=o(""),{extraInfo:y,agencyCode:h,insurerCode:v,productCode:x,agentCode:b,saleChannelId:q}=C.query;console.log("middlePage route.query-------",C.query);let R={};try{R=JSON.parse(decodeURIComponent(y))}catch(w){}const{templateId:$,tenantId:j,orderNo:N}=R,U=e=>{d({param:e}).then((({code:e,data:a})=>{"10000"===e&&a?(()=>{var e;if($===I.UPGRADE&&N){const a={insurerCode:v,productCode:x,tenantId:j||(null==(e=C.query)?void 0:e.tenantId),agencyCode:h,agentCode:b,orderNo:N,saleChannelId:q};return a.extraInfo=decodeURIComponent(JSON.stringify({...R,templateId:$})),void i.push(`/baseInsurance/upgrade?${l.stringify(a)}`)}if(!$||!p[$])return void u("链接上模板ID不正确不正确，请检查链接");const a=`/baseInsurance/${p[$]}`;i.replace(encodeURI(`${a}?${l.stringify(C.query)}`))})():g.value="验证失败"}))};return t((()=>{var e;U((e=window.location.search,c(["ext"],e).split("?")[1]))})),(e,a)=>(r(),s("div",f,m))}});export{C as default};
