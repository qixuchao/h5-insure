import{d as t,o as e,c as n,b as a,w as l,F as c,s,p as i,a as r,u as o,aA as u,f as d,g as p,d3 as m,as as y}from"./index-6a1895a4.js";import{R as k,b as g}from"./trial-90c99342.js";const f={class:"com-insured-part-wrapper"},h={class:"content-wrapper"},v={class:"risk-item"},D=t({__name:"InsureInfo",props:{productData:{default:()=>[]},totalPremium:{default:0}},setup:t=>(t,D)=>{const P=m,_=y;return e(),n("div",f,[a(_,{title:"保障信息","show-icon":!1},{default:l((()=>[(e(!0),n(c,null,s(t.productData,(m=>(e(),n(c,{key:m.productCode},[(e(!0),n(c,null,s(m.riskList,(s=>(e(),i(_,{key:s.riskCode,title:s.riskName},{default:l((()=>{var l;return[r("div",h,[r("div",v,[s.riskType===o(k).MAIN_RISK?(e(),n(c,{key:0},[a(P,{title:"保险期间",content:s.coveragePeriodDesc},null,8,["content"]),a(P,{title:"交费期间",content:s.chargePeriodDesc},null,8,["content"])],64)):(e(),n(c,{key:1},[a(P,{title:s.riskName,content:"投保"},null,8,["title"]),s.exemptFlag===o(u).YES?(e(),i(P,{key:0,title:"交费期间",content:s.chargePeriodDesc},null,8,["content"])):(null==(l=s.liabilityList)?void 0:l.length)?(e(),n(c,{key:1},[a(P,{title:"保障期间",content:s.coveragePeriodDesc},null,8,["content"]),a(P,{title:"交费期间",content:s.chargePeriodDesc},null,8,["content"]),a(P,{title:"交费方式",content:o(g)[s.paymentFrequency]},null,8,["content"])],64)):d("",!0)],64)),p(t.$slots,"default"),a(P,{title:"保障金额",content:(s.initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),a(P,{title:"首年保费",class:"price",content:(s.initialPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])]})),_:2},1032,["title"])))),128))],64)))),128))])),_:3})])}});export{D as _};
