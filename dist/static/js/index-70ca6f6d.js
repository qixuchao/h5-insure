import{d as e,u as a,a as n,r as o,aE as r,c as t,h as s,aR as d,aS as c,j as i,am as l,T as u}from"./index-64058e19.js";import{f as p}from"./infoCollection-7bbfe74d.js";import{T as f}from"./constant-c3f28a3b.js";import"./pdfh5-008ca364.js";const m={class:"page-middle-wrapper"},I=[i("h4",null,null,-1)],C=e({__name:"index",setup(e){const i=a(),C=n(),g=o(""),{extraInfo:y,agencyCode:h,insurerCode:v,productCode:x,agentCode:b,saleChannelId:j}=C.query;console.log("middlePage route.query-------",C.query);let q={};try{q=JSON.parse(decodeURIComponent(y))}catch(w){}const{templateId:R,tenantId:N,orderNo:U}=q,$=e=>{d({param:e}).then((({code:e,data:a})=>{"10000"===e&&a?(()=>{var e;if(R===f.UPGRADE&&U){const a={insurerCode:v,productCode:x,tenantId:N||(null==(e=C.query)?void 0:e.tenantId),agencyCode:h,agentCode:b,orderNo:U,saleChannelId:j};return a.extraInfo=decodeURIComponent(JSON.stringify({...q,templateId:R})),void i.push(`/baseInsurance/upgrade?${l.stringify(a)}`)}if(!R||!p[R])return void u("链接上模板ID不正确不正确，请检查链接");const a=`/baseInsurance/${p[R]}`;i.replace(encodeURI(`${a}?${l.stringify(C.query)}`))})():g.value="验证失败"}))};return r((()=>{var e;$((e=window.location.search,c(["ext"],e).split("?")[1]))})),(e,a)=>(t(),s("div",m,I))}});export{C as default};
