import{d as e,h as a,i as n,j as o,az as t,o as r,c as d,d2 as s,d3 as i,a as c,bG as l,T as u}from"./index-29312576.js";import{T as p}from"./infoCollection-d9103528.js";import{T as I}from"./constant-8927d485.js";const m={class:"page-middle-wrapper"},C=[c("h4",null,null,-1)],f=e({__name:"index",setup(e){const c=a(),f=n(),g=o(""),{extraInfo:y,agencyCode:h,insurerCode:v,productCode:x,agentCode:q,saleChannelId:j}=f.query;console.log("middlePage route.query-------",f.query);let N={};try{N=JSON.parse(decodeURIComponent(y))}catch(w){}const{templateId:R,tenantId:U,orderNo:$}=N,b=e=>{s({param:e}).then((({code:e,data:a})=>{"10000"===e&&a?(()=>{var e;if(R===I.UPGRADE&&$){const a={insurerCode:v,productCode:x,tenantId:U||(null==(e=f.query)?void 0:e.tenantId),agencyCode:h,agentCode:q,orderNo:$,saleChannelId:j};return a.extraInfo=decodeURIComponent(JSON.stringify({...N,templateId:R})),void c.push(`/baseInsurance/upgrade?${l.stringify(a)}`)}if(!R||!p[R])return void u("链接上模板ID不正确不正确，请检查链接");const a=`/baseInsurance/${p[R]}`;c.replace(encodeURI(`${a}?${l.stringify(f.query)}`))})():g.value="验证失败"}))};return t((()=>{var e;b((e=window.location.search,i(["ext"],e).split("?")[1]))})),(e,a)=>(r(),d("div",m,C))}});export{f as default};
