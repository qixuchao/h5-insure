import{d as t,o as e,c as n,b as a,w as s,F as l,s as i,p as o,a as r,u as c,aB as u,f as d,g as p,cU as m,cV as f,as as k}from"./index-fbb8a705.js";import{R as y,b as g}from"./trial-6e63ef7a.js";import{t as v}from"./format-31cde443.js";const D={class:"com-insured-part-wrapper"},P={class:"content-wrapper"},_={class:"risk-item"},b=t({__name:"InsureInfo",props:{productData:{default:()=>[]},totalPremium:{default:0}},setup:t=>(t,b)=>{const h=f,w=k;return e(),n("div",D,[a(w,{title:"保障信息","show-icon":!1},{default:s((()=>[(e(!0),n(l,null,i(t.productData,(f=>(e(),n(l,{key:f.productCode},[(e(!0),n(l,null,i(f.riskList,(i=>(e(),o(w,{key:i.riskCode,title:i.riskName},{default:s((()=>{var s;return[r("div",P,[r("div",_,[i.riskType===c(y).MAIN_RISK?(e(),n(l,{key:0},[a(h,{title:"保险期间",content:i.coveragePeriodDesc},null,8,["content"]),a(h,{title:"交费期间",content:i.chargePeriodDesc},null,8,["content"])],64)):(e(),n(l,{key:1},[a(h,{title:i.riskName,content:"投保"},null,8,["title"]),i.exemptFlag===c(u).YES?(e(),o(h,{key:0,title:"交费期间",content:i.chargePeriodDesc},null,8,["content"])):(null==(s=i.liabilityList)?void 0:s.length)?(e(),n(l,{key:1},[a(h,{title:"保障期间",content:i.coveragePeriodDesc},null,8,["content"]),a(h,{title:"交费期间",content:i.chargePeriodDesc},null,8,["content"]),a(h,{title:"交费方式",content:c(g)[i.paymentFrequency]},null,8,["content"])],64)):d("",!0)],64)),p(t.$slots,"default"),a(h,{title:"基本保险金额",content:c(m)[i.riskCode]||c(v)(i.initialAmount||0)},null,8,["content"]),a(h,{title:"首年保费",class:"price",content:c(v)(i.initialPremium||0)},null,8,["content"])])])]})),_:2},1032,["title"])))),128))],64)))),128))])),_:3})])}});export{b as _};
