!function(){var t=document.createElement("style");t.innerHTML=".com-insured-part-wrapper[data-v-e5c37410] .body{padding:0!important}.com-insured-part-wrapper .content-wrapper[data-v-e5c37410]{padding:0 .4rem}.com-insured-part-wrapper .content-wrapper .product-name[data-v-e5c37410]{min-height:1.41333rem;line-height:1.41333rem;border-bottom:1px solid #EEEFF4;font-size:.4rem;font-weight:500}.com-insured-part-wrapper .content-wrapper .price[data-v-e5c37410] .right-part{color:unset}.com-insured-part-wrapper .content-wrapper .price[data-v-e5c37410] .left-part{font-weight:400}\n",document.head.appendChild(t),System.register(["./trial-legacy-7a8951a9.js","./index-legacy-cbd85720.js","./vendor-legacy-2ed1ad67.js"],(function(t){"use strict";var e,n,r,a,c,i,o,p,d,s,u,l,m,y,g,v,f,h;return{setters:[function(t){e=t.R,n=t.a,r=t.b,a=t.c},function(t){c=t._},function(t){i=t.g,o=t.y,p=t.r,d=t.j,s=t.n,u=t.p,l=t.m,m=t.z,y=t.J,g=t.A,v=t.F,f=t.G,h=t.k}],execute:function(){const w={class:"com-insured-part-wrapper"},k={class:"content-wrapper"},L={class:"product-name"},b={class:"risk-item"};t("I",c(i({props:{productData:{default:()=>({})}},setup(t){const c=t,i=o((()=>{var t;const n={riderRiskList:[],amount:0};return null===(t=c.productData)||void 0===t||t.tenantOrderRiskList.forEach((t=>{n.amount+=t.initialAmount,t.riskType===e.MAIN_RISK?Object.assign(n,t):n.riderRiskList.push(t.riskName||"")})),n})),P=(t,e)=>-1!==e.indexOf("$")?e.replace("$",`${t}`):`${t||""}${e}`;return(e,c)=>{const o=p("ProCell"),R=p("ProCard");return d(),s("div",w,[u(R,{title:"保障信息"},{default:l((()=>[m("div",k,[m("div",L,y(t.productData.productName),1),m("div",b,[u(o,{title:"保障期间",content:P(g(i).insurancePeriodValue,g(n)[g(i).insurancePeriodType])},null,8,["content"]),u(o,{title:"交费期间",content:P(g(i).paymentPeriod,g(r)[g(i).paymentPeriodType])},null,8,["content"]),u(o,{title:"交费方式",content:g(a)[g(i).paymentFrequency]},null,8,["content"]),(d(!0),s(v,null,f(g(i).riderRiskList,((t,e)=>(d(),h(o,{key:e,title:t,content:"投保"},null,8,["title"])))),128)),u(o,{title:"保障金额",content:g(i).amount.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),u(o,{title:"首期保费",class:"price",content:t.productData.premium.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-e5c37410"]]))}}}))}();
