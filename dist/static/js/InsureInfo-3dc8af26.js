import{d as t,o as e,c as n,b as a,w as l,F as s,s as i,p as o,a as r,u as c,aY as u,f as d,g as p,d9 as m,da as f,ar as k}from"./index-57c18dfc.js";import{R as y,b as g}from"./trial-e684a4fa.js";import{t as v}from"./format-31cde443.js";const D={class:"com-insured-part-wrapper"},P={class:"content-wrapper"},_={class:"risk-item"},h=t({__name:"InsureInfo",props:{productData:{default:()=>[]},totalPremium:{default:0}},setup:t=>(t,h)=>{const w=f,I=k;return e(),n("div",D,[a(I,{title:"保障信息","show-icon":!1},{default:l((()=>[(e(!0),n(s,null,i(t.productData,(f=>(e(),n(s,{key:f.productCode},[(e(!0),n(s,null,i(f.riskList,(i=>(e(),o(I,{key:i.riskCode,title:i.riskName},{default:l((()=>{var l;return[r("div",P,[r("div",_,[i.riskType===c(y).MAIN_RISK?(e(),n(s,{key:0},[a(w,{title:"保险期间",content:i.coveragePeriodDesc},null,8,["content"]),a(w,{title:"交费期间",content:i.chargePeriodDesc},null,8,["content"])],64)):(e(),n(s,{key:1},[a(w,{title:i.riskName,content:"投保"},null,8,["title"]),i.exemptFlag===c(u).YES?(e(),o(w,{key:0,title:"交费期间",content:i.chargePeriodDesc},null,8,["content"])):(null==(l=i.liabilityList)?void 0:l.length)?(e(),n(s,{key:1},[a(w,{title:"保障期间",content:i.coveragePeriodDesc},null,8,["content"]),a(w,{title:"交费期间",content:i.chargePeriodDesc},null,8,["content"]),a(w,{title:"交费方式",content:c(g)[i.paymentFrequency]},null,8,["content"])],64)):d("",!0)],64)),p(t.$slots,"default"),a(w,{title:"基本保险金额",content:c(m)[i.riskCode]||c(v)(i.initialAmount||0)},null,8,["content"]),a(w,{title:"首年保费",class:"price",content:c(v)(i.initialPremium||0)},null,8,["content"])])])]})),_:2},1032,["title"])))),128))],64)))),128))])),_:3})])}});export{h as _};
