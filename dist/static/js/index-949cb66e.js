import{d as e,u as a,a as o,r as n,aD as r,c as t,g as s,aQ as d,aR as c,i,al as l,T as u}from"./index-8dcf7554.js";import{f as p}from"./infoCollection-fc3860dd.js";import{T as f}from"./constant-c3f28a3b.js";import"./pdfh5-008ca364.js";const I={class:"page-middle-wrapper"},m=[i("h4",null,null,-1)],C=e({setup(e){const i=a(),C=o(),g=n(""),{extraInfo:y,agencyCode:h,insurerCode:v,productCode:q,agentCode:x,saleChannelId:R}=C.query;console.log("middlePage route.query-------",C.query);let j={};try{j=JSON.parse(decodeURIComponent(y))}catch(w){}const{templateId:N,tenantId:U,orderNo:$}=j,b=e=>{d({param:e}).then((({code:e,data:a})=>{"10000"===e&&a?(()=>{var e;if(N===f.UPGRADE&&$){const a={insurerCode:v,productCode:q,tenantId:U||(null==(e=C.query)?void 0:e.tenantId),agencyCode:h,agentCode:x,orderNo:$,saleChannelId:R};return a.extraInfo=decodeURIComponent(JSON.stringify({...j,templateId:N})),void i.push(`/baseInsurance/upgrade?${l.stringify(a)}`)}if(!N||!p[N])return void u("链接上模板ID不正确不正确，请检查链接");const a=`/baseInsurance/${p[N]}`;i.replace(encodeURI(`${a}?${l.stringify(C.query)}`))})():g.value="验证失败"}))};return r((()=>{var e;b((e=window.location.search,c(["ext"],e).split("?")[1]))})),(e,a)=>(t(),s("div",I,m))}});export{C as default};
