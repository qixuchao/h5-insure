import{I as m,P as D,e as P}from"./trial-c8eb8ed0.js";import{_ as E}from"./index-87784872.js";import{g as F,r as _,j as r,n as u,p as e,m as C,z as p,J as f,F as y,G as N,A as c}from"./vendor-df2d8bed.js";const v={class:"com-insured-part-wrapper"},A={class:"content-wrapper"},I={class:"product-name"},g=F({props:{productData:{default:()=>({})}},setup(s){const i=(a,o)=>o.indexOf("$")!==-1?o.replace("$",`${a}`):`${a||""}${o}`;return(a,o)=>{const n=_("ProCell"),d=_("ProCard");return r(),u("div",v,[e(d,{title:"\u4FDD\u969C\u8BE6\u60C5"},{default:C(()=>{var l;return[p("div",A,[p("div",I,f(s.productData.productName),1),(r(!0),u(y,null,N(((l=s.productData)==null?void 0:l.tenantOrderRiskList)||[],t=>(r(),u("div",{key:t.id,class:"risk-item"},[e(n,{title:"\u4FDD\u969C\u671F\u95F4",content:i(t.insurancePeriodValue,c(m)[t.insurancePeriodType])},null,8,["content"]),e(n,{title:"\u4EA4\u8D39\u671F\u95F4",content:i(t.paymentPeriod,c(D)[t.paymentPeriodType])},null,8,["content"]),e(n,{title:"\u4EA4\u8D39\u65B9\u5F0F",content:c(P)[t.paymentFrequency]},null,8,["content"]),e(n,{title:"\u4FDD\u969C\u91D1\u989D",content:t.initialAmount.toLocaleString()},null,8,["content"]),e(n,{title:"\u9996\u671F\u4FDD\u8D39",content:t.initialPremium.toLocaleString()},null,8,["content"])]))),128))])]}),_:1})])}}});var h=E(g,[["__scopeId","data-v-f1959376"]]);export{h as I};
