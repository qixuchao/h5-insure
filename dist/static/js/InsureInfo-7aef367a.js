import{d as t,o as e,c as n,b as l,w as a,F as c,s,p as i,a as r,u as o,aA as u,f as d,g as p,d3 as m,as as y}from"./index-6a9cf46c.js";import{R as k,b as f}from"./trial-d6373768.js";const g={class:"com-insured-part-wrapper"},h={class:"content-wrapper"},v={class:"risk-item"},D=t({__name:"InsureInfo",props:{productData:{default:()=>[]},totalPremium:{default:0}},setup:t=>(t,D)=>{const P=m,_=y;return e(),n("div",g,[l(_,{title:"保障信息","show-icon":!1},{default:a((()=>[(e(!0),n(c,null,s(t.productData,(m=>(e(),n(c,{key:m.productCode},[(e(!0),n(c,null,s(m.riskList,(s=>(e(),i(_,{key:s.riskCode,title:s.riskName},{default:a((()=>{var a;return[r("div",h,[r("div",v,[s.riskType===o(k).MAIN_RISK?(e(),n(c,{key:0},[l(P,{title:"保险期间",content:s.coveragePeriodDesc},null,8,["content"]),l(P,{title:"交费期间",content:s.chargePeriodDesc},null,8,["content"])],64)):(e(),n(c,{key:1},[l(P,{title:s.riskName,content:"投保"},null,8,["title"]),s.exemptFlag===o(u).YES?(e(),i(P,{key:0,title:"交费期间",content:s.chargePeriodDesc},null,8,["content"])):(null==(a=s.liabilityList)?void 0:a.length)?(e(),n(c,{key:1},[l(P,{title:"保障期间",content:s.coveragePeriodDesc},null,8,["content"]),l(P,{title:"交费期间",content:s.chargePeriodDesc},null,8,["content"]),l(P,{title:"交费方式",content:o(f)[s.paymentFrequency]},null,8,["content"])],64)):d("",!0)],64)),p(t.$slots,"default"),l(P,{title:"保障金额",content:(s.initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),l(P,{title:"首年保费",class:"price",content:(s.initialPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])]})),_:2},1032,["title"])))),128))],64)))),128))])),_:3})])}});export{D as _};
