import{d as e,h as a,i as n,j as o,aE as t,o as r,c as s,cN as d,cO as c,a as i,bF as l,T as u}from"./index-9a4aba42.js";import{T as p}from"./infoCollection-cc0542bc.js";import{T as I}from"./constant-8927d485.js";const m={class:"page-middle-wrapper"},C=[i("h4",null,null,-1)],f=e({__name:"index",setup(e){const i=a(),f=n(),g=o(""),{extraInfo:y,agencyCode:h,insurerCode:v,productCode:x,agentCode:b,saleChannelId:q}=f.query;console.log("middlePage route.query-------",f.query);let N={};try{N=JSON.parse(decodeURIComponent(y))}catch(w){}const{templateId:j,tenantId:R,orderNo:U}=N,$=e=>{d({param:e}).then((({code:e,data:a})=>{"10000"===e&&a?(()=>{var e;if(j===I.UPGRADE&&U){const a={insurerCode:v,productCode:x,tenantId:R||(null==(e=f.query)?void 0:e.tenantId),agencyCode:h,agentCode:b,orderNo:U,saleChannelId:q};return a.extraInfo=decodeURIComponent(JSON.stringify({...N,templateId:j})),void i.push(`/baseInsurance/upgrade?${l.stringify(a)}`)}if(!j||!p[j])return void u("链接上模板ID不正确不正确，请检查链接");const a=`/baseInsurance/${p[j]}`;i.replace(encodeURI(`${a}?${l.stringify(f.query)}`))})():g.value="验证失败"}))};return t((()=>{var e;$((e=window.location.search,c(["ext"],e).split("?")[1]))})),(e,a)=>(r(),s("div",m,C))}});export{f as default};
