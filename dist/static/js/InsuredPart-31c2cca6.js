import{_ as t,d as e,E as a,c as n,h as s,f as r,w as i,j as c,t as o,g as l,F as d,i as u,e as p,a3 as m,P as y}from"./index-d9e24409.js";import{a as k,b as f,c as v,R}from"./trial-85396cad.js";const _={class:"com-insured-part-wrapper"},L={class:"content-wrapper"},P={class:"product-name"},D={class:"risk-item"};var I=t(e({__name:"InsuredPart",props:{productData:{default:()=>({})}},setup(t){const e=t,I=a((()=>{var t,a;const n={riderRiskList:[],amount:0},s=null==(t=e.productData)?void 0:t.tenantOrderRiskList.find((t=>t.riskType===R.MAIN_RISK));return Object.assign(n,s),null==(a=e.productData)||a.tenantOrderRiskList.forEach((t=>{n.riderRiskList.push(t.riskName||"")})),n})),$=(t,e)=>-1!==e.indexOf("$")?e.replace("$",`${t}`):`${t||""}${e}`;return(e,a)=>{const R=m,h=y;return n(),s("div",_,[r(h,{title:"保障信息"},{default:i((()=>[c("div",L,[c("div",P,o(t.productData.productName),1),c("div",D,[r(R,{title:"保障期间",content:$(l(I).insurancePeriodValue,l(k)[l(I).insurancePeriodType])},null,8,["content"]),r(R,{title:"交费期间",content:$(l(I).paymentPeriod,l(f)[l(I).paymentPeriodType])},null,8,["content"]),r(R,{title:"交费方式",content:l(v)[l(I).paymentFrequency]},null,8,["content"]),(n(!0),s(d,null,u(l(I).riderRiskList,((t,e)=>(n(),p(R,{key:e,title:t,content:"投保"},null,8,["title"])))),128)),r(R,{title:"首期保费",class:"price",content:t.productData.premium.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-306a6e1a"]]);export{I};
