!function(){var t=document.createElement("style");t.innerHTML=".com-insured-part-wrapper[data-v-306a6e1a] .body{padding:0!important}.com-insured-part-wrapper .content-wrapper[data-v-306a6e1a]{padding:0 .4rem}.com-insured-part-wrapper .content-wrapper .product-name[data-v-306a6e1a]{min-height:1.41333rem;line-height:1.41333rem;border-bottom:1px solid #EEEFF4;font-size:.4rem;font-weight:500}.com-insured-part-wrapper .content-wrapper .price[data-v-306a6e1a] .right-part{color:unset}.com-insured-part-wrapper .content-wrapper .price[data-v-306a6e1a] .left-part{font-weight:400}\n",document.head.appendChild(t),System.register(["./trial-legacy-c75dcbc6.js","./index-legacy-557f644f.js","./vendor-legacy-c308286a.js"],(function(t){"use strict";var e,r,n,a,i,c,o,p,s,d,u,l,m,f,y,g,v,w;return{setters:[function(t){e=t.a,r=t.b,n=t.c,a=t.R},function(t){i=t._},function(t){c=t.i,o=t.A,p=t.l,s=t.m,d=t.s,u=t.t,l=t.p,m=t.B,f=t.L,y=t.C,g=t.F,v=t.H,w=t.n}],execute:function(){const h={class:"com-insured-part-wrapper"},k={class:"content-wrapper"},L={class:"product-name"},R={class:"risk-item"};t("I",i(c({props:{productData:{default:()=>({})}},setup(t){const i=t,c=o((()=>{const t={riderRiskList:[],amount:0},e=i.productData?.tenantOrderRiskList.find((t=>t.riskType===a.MAIN_RISK));return Object.assign(t,e),i.productData?.tenantOrderRiskList.forEach((e=>{t.riderRiskList.push(e.riskName||"")})),t})),b=(t,e)=>-1!==e.indexOf("$")?e.replace("$",`${t}`):`${t||""}${e}`;return(a,i)=>{const o=p("ProCell"),P=p("ProCard");return s(),d("div",h,[u(P,{title:"保障信息"},{default:l((()=>[m("div",k,[m("div",L,f(t.productData.productName),1),m("div",R,[u(o,{title:"保障期间",content:b(y(c).insurancePeriodValue,y(e)[y(c).insurancePeriodType])},null,8,["content"]),u(o,{title:"交费期间",content:b(y(c).paymentPeriod,y(r)[y(c).paymentPeriodType])},null,8,["content"]),u(o,{title:"交费方式",content:y(n)[y(c).paymentFrequency]},null,8,["content"]),(s(!0),d(g,null,v(y(c).riderRiskList,((t,e)=>(s(),w(o,{key:e,title:t,content:"投保"},null,8,["title"])))),128)),u(o,{title:"首期保费",class:"price",content:t.productData.premium.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-306a6e1a"]]))}}}))}();
