import{d as e,h as a,i as n,k as o,ar as r,o as t,c as s,bO as d,bP as c,a as i,aV as l,T as u}from"./index-dc5ec44c.js";import{T as p}from"./infoCollection-9802e33b.js";import{T as I}from"./constant-8927d485.js";const m={class:"page-middle-wrapper"},C=[i("h4",null,null,-1)],f=e({__name:"index",setup(e){const i=a(),f=n(),g=o(""),{extraInfo:y,agencyCode:h,insurerCode:v,productCode:x,agentCode:b,saleChannelId:q}=f.query;console.log("middlePage route.query-------",f.query);let N={};try{N=JSON.parse(decodeURIComponent(y))}catch(w){}const{templateId:R,tenantId:U,orderNo:$}=N,j=e=>{d({param:e}).then((({code:e,data:a})=>{"10000"===e&&a?(()=>{var e;if(R===I.UPGRADE&&$){const a={insurerCode:v,productCode:x,tenantId:U||(null==(e=f.query)?void 0:e.tenantId),agencyCode:h,agentCode:b,orderNo:$,saleChannelId:q};return a.extraInfo=decodeURIComponent(JSON.stringify({...N,templateId:R})),void i.push(`/baseInsurance/upgrade?${l.stringify(a)}`)}if(!R||!p[R])return void u("链接上模板ID不正确不正确，请检查链接");const a=`/baseInsurance/${p[R]}`;i.replace(encodeURI(`${a}?${l.stringify(f.query)}`))})():g.value="验证失败"}))};return r((()=>{var e;j((e=window.location.search,c(["ext"],e).split("?")[1]))})),(e,a)=>(t(),s("div",m,C))}});export{f as default};
