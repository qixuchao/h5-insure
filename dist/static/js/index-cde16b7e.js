import{d as e,g as a,h as n,i as o,av as t,o as r,c as s,cn as d,co as c,a as i,bG as l,T as u}from"./index-498c0d29.js";import{T as p}from"./infoCollection-52253c27.js";import{T as I}from"./constant-8927d485.js";const m={class:"page-middle-wrapper"},C=[i("h4",null,null,-1)],f=e({__name:"index",setup(e){const i=a(),f=n(),g=o(""),{extraInfo:y,agencyCode:h,insurerCode:v,productCode:x,agentCode:q,saleChannelId:N}=f.query;console.log("middlePage route.query-------",f.query);let R={};try{R=JSON.parse(decodeURIComponent(y))}catch(w){}const{templateId:U,tenantId:$,orderNo:b}=R,j=e=>{d({param:e}).then((({code:e,data:a})=>{"10000"===e&&a?(()=>{var e;if(U===I.UPGRADE&&b){const a={insurerCode:v,productCode:x,tenantId:$||(null==(e=f.query)?void 0:e.tenantId),agencyCode:h,agentCode:q,orderNo:b,saleChannelId:N};return a.extraInfo=decodeURIComponent(JSON.stringify({...R,templateId:U})),void i.push(`/baseInsurance/upgrade?${l.stringify(a)}`)}if(!U||!p[U])return void u("链接上模板ID不正确不正确，请检查链接");const a=`/baseInsurance/${p[U]}`;i.replace(encodeURI(`${a}?${l.stringify(f.query)}`))})():g.value="验证失败"}))};return t((()=>{var e;j((e=window.location.search,c(["ext"],e).split("?")[1]))})),(e,a)=>(r(),s("div",m,C))}});export{f as default};
