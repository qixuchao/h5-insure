import{a as t,b as e,c as a,R as r}from"./trial-be14e9af.js";import{_ as n}from"./index-45d73af5.js";import{h as s,x as i,k as o,l as c,y as l,Q as d,n as u,z as p,I as m,A as y,F as f,E as k,m as v}from"./vendor-372f2d73.js";const R={class:"com-insured-part-wrapper"},L={class:"content-wrapper"},P={class:"product-name"},D={class:"risk-item"};var I=n(s({props:{productData:{default:()=>({})}},setup(n){const s=n,I=i((()=>{var t,e;const a={riderRiskList:[],amount:0},n=null==(t=s.productData)?void 0:t.tenantOrderRiskList.find((t=>t.riskType===r.MAIN_RISK));return Object.assign(a,n),null==(e=s.productData)||e.tenantOrderRiskList.forEach((t=>{a.riderRiskList.push(t.riskName||"")})),a})),$=(t,e)=>-1!==e.indexOf("$")?e.replace("$",`${t}`):`${t||""}${e}`;return(r,s)=>{const i=o("ProCell"),_=o("ProCard");return c(),l("div",R,[d(_,{title:"保障信息"},{default:u((()=>[p("div",L,[p("div",P,m(n.productData.productName),1),p("div",D,[d(i,{title:"保障期间",content:$(y(I).insurancePeriodValue,y(t)[y(I).insurancePeriodType])},null,8,["content"]),d(i,{title:"交费期间",content:$(y(I).paymentPeriod,y(e)[y(I).paymentPeriodType])},null,8,["content"]),d(i,{title:"交费方式",content:y(a)[y(I).paymentFrequency]},null,8,["content"]),(c(!0),l(f,null,k(y(I).riderRiskList,((t,e)=>(c(),v(i,{key:e,title:t,content:"投保"},null,8,["title"])))),128)),d(i,{title:"首期保费",class:"price",content:n.productData.premium.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-306a6e1a"]]);export{I};
