import{d as e,a,u as n,r as o,o as r,b as t,c as s,bA as d,bB as c,i,Q as l,T as u}from"./index-1c6c7a49.js";import{T as p}from"./infoCollection-6b0fb9d0.js";import{T as I}from"./constant-8927d485.js";const m={class:"page-middle-wrapper"},f=[i("h4",null,null,-1)],C=e({__name:"index",setup(e){const i=a(),C=n(),g=o(""),{extraInfo:y,agencyCode:b,insurerCode:h,productCode:v,agentCode:x,saleChannelId:q}=C.query;console.log("middlePage route.query-------",C.query);let N={};try{N=JSON.parse(decodeURIComponent(y))}catch(w){}const{templateId:R,tenantId:U,orderNo:$}=N,j=e=>{d({param:e}).then((({code:e,data:a})=>{"10000"===e&&a?(()=>{var e;if(R===I.UPGRADE&&$){const a={insurerCode:h,productCode:v,tenantId:U||(null==(e=C.query)?void 0:e.tenantId),agencyCode:b,agentCode:x,orderNo:$,saleChannelId:q};return a.extraInfo=decodeURIComponent(JSON.stringify({...N,templateId:R})),void i.push(`/baseInsurance/upgrade?${l.stringify(a)}`)}if(!R||!p[R])return void u("链接上模板ID不正确不正确，请检查链接");const a=`/baseInsurance/${p[R]}`;i.replace(encodeURI(`${a}?${l.stringify(C.query)}`))})():g.value="验证失败"}))};return r((()=>{var e;j((e=window.location.search,c(["ext"],e).split("?")[1]))})),(e,a)=>(t(),s("div",m,f))}});export{C as default};
