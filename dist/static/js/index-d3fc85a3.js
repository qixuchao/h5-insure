import{d as e,g as a,h as n,i as o,av as t,o as r,c as d,cd as s,ce as c,a as i,bG as l,T as u}from"./index-f43edcf2.js";import{T as p}from"./infoCollection-2a0b5fb4.js";import{T as f}from"./constant-8927d485.js";const I={class:"page-middle-wrapper"},m=[i("h4",null,null,-1)],C=e({__name:"index",setup(e){const i=a(),C=n(),g=o(""),{extraInfo:y,agencyCode:h,insurerCode:v,productCode:x,agentCode:b,saleChannelId:q}=C.query;console.log("middlePage route.query-------",C.query);let N={};try{N=JSON.parse(decodeURIComponent(y))}catch(w){}const{templateId:R,tenantId:U,orderNo:$}=N,j=e=>{s({param:e}).then((({code:e,data:a})=>{"10000"===e&&a?(()=>{var e;if(R===f.UPGRADE&&$){const a={insurerCode:v,productCode:x,tenantId:U||(null==(e=C.query)?void 0:e.tenantId),agencyCode:h,agentCode:b,orderNo:$,saleChannelId:q};return a.extraInfo=decodeURIComponent(JSON.stringify({...N,templateId:R})),void i.push(`/baseInsurance/upgrade?${l.stringify(a)}`)}if(!R||!p[R])return void u("链接上模板ID不正确不正确，请检查链接");const a=`/baseInsurance/${p[R]}`;i.replace(encodeURI(`${a}?${l.stringify(C.query)}`))})():g.value="验证失败"}))};return t((()=>{var e;j((e=window.location.search,c(["ext"],e).split("?")[1]))})),(e,a)=>(r(),d("div",I,m))}});export{C as default};
