import{_ as t,d as a,E as e,c as n,h as s,f as r,w as i,j as c,t as o,g as l,F as d,i as u,e as p,a3 as m,P as y}from"./index-c6f4364a.js";import{a as f,b as k,c as v,R}from"./trial-81a73a58.js";const _={class:"com-insured-part-wrapper"},L={class:"content-wrapper"},P={class:"product-name"},D={class:"risk-item"};var I=t(a({__name:"InsuredPart",props:{productData:{default:()=>({})}},setup(t){const a=t,I=e((()=>{var t,e;const n={riderRiskList:[],amount:0},s=null==(t=a.productData)?void 0:t.tenantOrderRiskList.find((t=>t.riskType===R.MAIN_RISK));return Object.assign(n,s),null==(e=a.productData)||e.tenantOrderRiskList.forEach((t=>{n.riderRiskList.push(t.riskName||"")})),n})),$=(t,a)=>-1!==a.indexOf("$")?a.replace("$",`${t}`):`${t||""}${a}`;return(a,e)=>{const R=m,h=y;return n(),s("div",_,[r(h,{title:"保障信息"},{default:i((()=>[c("div",L,[c("div",P,o(t.productData.productName),1),c("div",D,[r(R,{title:"保障期间",content:$(l(I).insurancePeriodValue,l(f)[l(I).insurancePeriodType])},null,8,["content"]),r(R,{title:"交费期间",content:$(l(I).paymentPeriod,l(k)[l(I).paymentPeriodType])},null,8,["content"]),r(R,{title:"交费方式",content:l(v)[l(I).paymentFrequency]},null,8,["content"]),(n(!0),s(d,null,u(l(I).riderRiskList,((t,a)=>(n(),p(R,{key:a,title:t,content:"投保"},null,8,["title"])))),128)),r(R,{title:"首期保费",class:"price",content:t.productData.premium.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-306a6e1a"]]);export{I};
