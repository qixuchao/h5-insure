import{_ as t,d as e,E as a,c as s,g as n,f as r,w as i,i as c,t as o,m as l,F as d,h as u,e as p,a3 as m,P as y}from"./index-5239afda.js";import{a as f,b as k,c as v,R}from"./trial-04861e1a.js";const L={class:"com-insured-part-wrapper"},D={class:"content-wrapper"},P={class:"product-name"},$={class:"risk-item"};var _=t(e({props:{productData:{default:()=>({})}},setup(t){const e=t,_=a((()=>{var t,a;const s={riderRiskList:[],amount:0},n=null==(t=e.productData)?void 0:t.tenantOrderRiskList.find((t=>t.riskType===R.MAIN_RISK));return Object.assign(s,n),null==(a=e.productData)||a.tenantOrderRiskList.forEach((t=>{s.riderRiskList.push(t.riskName||"")})),s})),h=(t,e)=>-1!==e.indexOf("$")?e.replace("$",`${t}`):`${t||""}${e}`;return(e,a)=>{const R=m,I=y;return s(),n("div",L,[r(I,{title:"保障信息"},{default:i((()=>[c("div",D,[c("div",P,o(t.productData.productName),1),c("div",$,[r(R,{title:"保障期间",content:h(l(_).insurancePeriodValue,l(f)[l(_).insurancePeriodType])},null,8,["content"]),r(R,{title:"交费期间",content:h(l(_).paymentPeriod,l(k)[l(_).paymentPeriodType])},null,8,["content"]),r(R,{title:"交费方式",content:l(v)[l(_).paymentFrequency]},null,8,["content"]),(s(!0),n(d,null,u(l(_).riderRiskList,((t,e)=>(s(),p(R,{key:e,title:t,content:"投保"},null,8,["title"])))),128)),r(R,{title:"首期保费",class:"price",content:t.productData.premium.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-306a6e1a"]]);export{_ as I};
