import{a as t,b as e,c as a,R as r}from"./trial-42b630bc.js";import{_ as n,d as s,x as i,b as c,c as o,g as l,f as d,w as u,i as p,t as m,l as y,F as k,h as f,e as v}from"./index-ee82c706.js";const R={class:"com-insured-part-wrapper"},L={class:"content-wrapper"},P={class:"product-name"},b={class:"risk-item"};var D=n(s({props:{productData:{default:()=>({})}},setup(n){const s=n,D=i((()=>{var t,e;const a={riderRiskList:[],amount:0},n=null==(t=s.productData)?void 0:t.tenantOrderRiskList.find((t=>t.riskType===r.MAIN_RISK));return Object.assign(a,n),null==(e=s.productData)||e.tenantOrderRiskList.forEach((t=>{a.riderRiskList.push(t.riskName||"")})),a})),$=(t,e)=>-1!==e.indexOf("$")?e.replace("$",`${t}`):`${t||""}${e}`;return(r,s)=>{const i=c("ProCell"),_=c("ProCard");return o(),l("div",R,[d(_,{title:"保障信息"},{default:u((()=>[p("div",L,[p("div",P,m(n.productData.productName),1),p("div",b,[d(i,{title:"保障期间",content:$(y(D).insurancePeriodValue,y(t)[y(D).insurancePeriodType])},null,8,["content"]),d(i,{title:"交费期间",content:$(y(D).paymentPeriod,y(e)[y(D).paymentPeriodType])},null,8,["content"]),d(i,{title:"交费方式",content:y(a)[y(D).paymentFrequency]},null,8,["content"]),(o(!0),l(k,null,f(y(D).riderRiskList,((t,e)=>(o(),v(i,{key:e,title:t,content:"投保"},null,8,["title"])))),128)),d(i,{title:"首期保费",class:"price",content:n.productData.premium.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-306a6e1a"]]);export{D as I};
