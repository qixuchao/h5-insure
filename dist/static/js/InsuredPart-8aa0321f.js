import{e as P,I as y,P as E,f as F}from"./trial-01aaaf06.js";import{_ as f}from"./index-125b94ab.js";import{g as N,y as C,r as l,j as c,n as d,p as a,m as I,z as u,J as k,A as e,F as R,G as h,k as v}from"./vendor-af6fda0a.js";const A={class:"com-insured-part-wrapper"},S={class:"content-wrapper"},T={class:"product-name"},Y={class:"risk-item"},g=N({props:{productData:{default:()=>({})}},setup(s){const p=s,r=C(()=>{var o;const n={riderRiskList:[],amount:0};return(o=p.productData)==null||o.tenantOrderRiskList.forEach(t=>{n.amount+=t.initialAmount,t.riskType===P.MAIN_RISK?Object.assign(n,t):n.riderRiskList.push(t.riskName||"")}),n}),i=(n,o)=>o.indexOf("$")!==-1?o.replace("$",`${n}`):`${n||""}${o}`;return(n,o)=>{const t=l("ProCell"),_=l("ProCard");return c(),d("div",A,[a(_,{title:"\u4FDD\u969C\u4FE1\u606F"},{default:I(()=>[u("div",S,[u("div",T,k(s.productData.productName),1),u("div",Y,[a(t,{title:"\u4FDD\u969C\u671F\u95F4",content:i(e(r).insurancePeriodValue,e(y)[e(r).insurancePeriodType])},null,8,["content"]),a(t,{title:"\u4EA4\u8D39\u671F\u95F4",content:i(e(r).paymentPeriod,e(E)[e(r).paymentPeriodType])},null,8,["content"]),a(t,{title:"\u4EA4\u8D39\u65B9\u5F0F",content:e(F)[e(r).paymentFrequency]},null,8,["content"]),(c(!0),d(R,null,h(e(r).riderRiskList,(m,D)=>(c(),v(t,{key:D,title:m,content:"\u6295\u4FDD"},null,8,["title"]))),128)),a(t,{title:"\u4FDD\u969C\u91D1\u989D",content:e(r).amount.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),a(t,{title:"\u9996\u671F\u4FDD\u8D39",class:"price",content:s.productData.premium.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])]),_:1})])}}});var B=f(g,[["__scopeId","data-v-701b0872"]]);export{B as I};
