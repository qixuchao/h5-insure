import{d as e,a,u as n,r as o,o as r,c as t,A as s,bL as d,bM as i,f as c,Q as l,T as u}from"./index-9880ea8b.js";import{T as p}from"./infoCollection-7989f272.js";import{T as f}from"./constant-8927d485.js";import"./pdfh5-008ca364.js";const m={class:"page-middle-wrapper"},I=[c("h4",null,null,-1)],C=e({__name:"index",setup(e){const c=a(),C=n(),g=o(""),{extraInfo:y,agencyCode:h,insurerCode:v,productCode:x,agentCode:b,saleChannelId:q}=C.query;console.log("middlePage route.query-------",C.query);let j={};try{j=JSON.parse(decodeURIComponent(y))}catch(w){}const{templateId:N,tenantId:R,orderNo:U}=j,$=e=>{d({param:e}).then((({code:e,data:a})=>{"10000"===e&&a?(()=>{var e;if(N===f.UPGRADE&&U){const a={insurerCode:v,productCode:x,tenantId:R||(null==(e=C.query)?void 0:e.tenantId),agencyCode:h,agentCode:b,orderNo:U,saleChannelId:q};return a.extraInfo=decodeURIComponent(JSON.stringify({...j,templateId:N})),void c.push(`/baseInsurance/upgrade?${l.stringify(a)}`)}if(!N||!p[N])return void u("链接上模板ID不正确不正确，请检查链接");const a=`/baseInsurance/${p[N]}`;c.replace(encodeURI(`${a}?${l.stringify(C.query)}`))})():g.value="验证失败"}))};return r((()=>{var e;$((e=window.location.search,i(["ext"],e).split("?")[1]))})),(e,a)=>(t(),s("div",m,I))}});export{C as default};
