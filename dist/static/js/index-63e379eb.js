import{d as e,h as a,i as n,j as o,aG as t,o as r,c as d,da as s,db as c,a as i,c4 as l,T as u}from"./index-43e4e33e.js";import{c as p}from"./infoCollection-0e9ef64c.js";import{T as I}from"./constant-8927d485.js";const m={class:"page-middle-wrapper"},f=[i("h4",null,null,-1)],C=e({__name:"index",setup(e){const i=a(),C=n(),g=o(""),{extraInfo:y,agencyCode:h,insurerCode:v,productCode:x,agentCode:q,saleChannelId:j}=C.query;console.log("middlePage route.query-------",C.query);let N={};try{N=JSON.parse(decodeURIComponent(y))}catch(w){}const{templateId:R,tenantId:U,orderNo:$}=N,b=e=>{s({param:e}).then((({code:e,data:a})=>{"10000"===e&&a?(()=>{var e;if(R===I.UPGRADE&&$){const a={insurerCode:v,productCode:x,tenantId:U||(null==(e=C.query)?void 0:e.tenantId),agencyCode:h,agentCode:q,orderNo:$,saleChannelId:j};return a.extraInfo=decodeURIComponent(JSON.stringify({...N,templateId:R})),void i.push(`/baseInsurance/upgrade?${l.stringify(a)}`)}if(!R||!p[R])return void u("链接上模板ID不正确不正确，请检查链接");const a=`/baseInsurance/${p[R]}`;i.replace(encodeURI(`${a}?${l.stringify(C.query)}`))})():g.value="验证失败"}))};return t((()=>{var e;b((e=window.location.search,c(["ext"],e).split("?")[1]))})),(e,a)=>(r(),d("div",m,f))}});export{C as default};
