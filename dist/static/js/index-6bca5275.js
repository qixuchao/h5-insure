import{d as e,a,u as n,r as o,o as r,b as t,c as s,bA as d,bB as i,i as c,K as l,T as u}from"./index-fe472263.js";import{T as p}from"./infoCollection-8e121d51.js";import{T as I}from"./constant-8927d485.js";const m={class:"page-middle-wrapper"},f=[c("h4",null,null,-1)],C=e({__name:"index",setup(e){const c=a(),C=n(),g=o(""),{extraInfo:y,agencyCode:h,insurerCode:v,productCode:x,agentCode:b,saleChannelId:q}=C.query;console.log("middlePage route.query-------",C.query);let N={};try{N=JSON.parse(decodeURIComponent(y))}catch(w){}const{templateId:R,tenantId:U,orderNo:$}=N,j=e=>{d({param:e}).then((({code:e,data:a})=>{"10000"===e&&a?(()=>{var e;if(R===I.UPGRADE&&$){const a={insurerCode:v,productCode:x,tenantId:U||(null==(e=C.query)?void 0:e.tenantId),agencyCode:h,agentCode:b,orderNo:$,saleChannelId:q};return a.extraInfo=decodeURIComponent(JSON.stringify({...N,templateId:R})),void c.push(`/baseInsurance/upgrade?${l.stringify(a)}`)}if(!R||!p[R])return void u("链接上模板ID不正确不正确，请检查链接");const a=`/baseInsurance/${p[R]}`;c.replace(encodeURI(`${a}?${l.stringify(C.query)}`))})():g.value="验证失败"}))};return r((()=>{var e;j((e=window.location.search,i(["ext"],e).split("?")[1]))})),(e,a)=>(t(),s("div",m,f))}});export{C as default};
