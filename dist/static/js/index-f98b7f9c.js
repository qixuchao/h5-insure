import{d as e,u as a,a as o,r as n,aD as r,c as t,g as s,aQ as d,aR as c,i,al as l,T as u}from"./index-3e642916.js";import{f as p}from"./infoCollection-8fba7a60.js";import{T as f}from"./constant-c3f28a3b.js";import"./pdfh5-008ca364.js";const I={class:"page-middle-wrapper"},m=[i("h4",null,null,-1)],C=e({setup(e){const i=a(),C=o(),g=n(""),{extraInfo:y,agencyCode:h,insurerCode:v,productCode:q,agentCode:x,saleChannelId:R}=C.query;console.log("middlePage route.query-------",C.query);let b={};try{b=JSON.parse(decodeURIComponent(y))}catch(w){}const{templateId:j,tenantId:N,orderNo:U}=b,$=e=>{d({param:e}).then((({code:e,data:a})=>{"10000"===e&&a?(()=>{var e;if(j===f.UPGRADE&&U){const a={insurerCode:v,productCode:q,tenantId:N||(null==(e=C.query)?void 0:e.tenantId),agencyCode:h,agentCode:x,orderNo:U,saleChannelId:R};return a.extraInfo=decodeURIComponent(JSON.stringify({...b,templateId:j})),void i.push(`/baseInsurance/upgrade?${l.stringify(a)}`)}if(!j||!p[j])return void u("链接上模板ID不正确不正确，请检查链接");const a=`/baseInsurance/${p[j]}`;i.replace(encodeURI(`${a}?${l.stringify(C.query)}`))})():g.value="验证失败"}))};return r((()=>{var e;$((e=window.location.search,c(["ext"],e).split("?")[1]))})),(e,a)=>(t(),s("div",I,m))}});export{C as default};
