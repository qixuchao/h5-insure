import{a as t,b as e,c as a,R as r}from"./trial-b78b45d7.js";import{_ as s}from"./index-246916e4.js";import{k as n,b as i,p as o,s as c,B as l,S as d,v as p,C as u,M as m,E as y,H as k,I as v,t as f}from"./vendor-9bab628e.js";const b={class:"com-insured-part-wrapper"},R={class:"content-wrapper"},L={class:"product-name"},P={class:"risk-item"};var D=s(n({props:{productData:{default:()=>({})}},setup(s){const n=s,D=i((()=>{var t,e;const a={riderRiskList:[],amount:0},s=null==(t=n.productData)?void 0:t.tenantOrderRiskList.find((t=>t.riskType===r.MAIN_RISK));return Object.assign(a,s),null==(e=n.productData)||e.tenantOrderRiskList.forEach((t=>{a.riderRiskList.push(t.riskName||"")})),a})),I=(t,e)=>-1!==e.indexOf("$")?e.replace("$",`${t}`):`${t||""}${e}`;return(r,n)=>{const i=o("ProCell"),$=o("ProCard");return c(),l("div",b,[d($,{title:"保障信息"},{default:p((()=>[u("div",R,[u("div",L,m(s.productData.productName),1),u("div",P,[d(i,{title:"保障期间",content:I(y(D).insurancePeriodValue,y(t)[y(D).insurancePeriodType])},null,8,["content"]),d(i,{title:"交费期间",content:I(y(D).paymentPeriod,y(e)[y(D).paymentPeriodType])},null,8,["content"]),d(i,{title:"交费方式",content:y(a)[y(D).paymentFrequency]},null,8,["content"]),(c(!0),l(k,null,v(y(D).riderRiskList,((t,e)=>(c(),f(i,{key:e,title:t,content:"投保"},null,8,["title"])))),128)),d(i,{title:"首期保费",class:"price",content:s.productData.premium.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-306a6e1a"]]);export{D as I};
