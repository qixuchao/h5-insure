!function(){var e=document.createElement("style");e.innerHTML=".com-insured-part-wrapper[data-v-e5c37410] .body{padding:0!important}.com-insured-part-wrapper .content-wrapper[data-v-e5c37410]{padding:0 .4rem}.com-insured-part-wrapper .content-wrapper .product-name[data-v-e5c37410]{min-height:1.41333rem;line-height:1.41333rem;border-bottom:1px solid #EEEFF4;font-size:.4rem;font-weight:500}.com-insured-part-wrapper .content-wrapper .price[data-v-e5c37410] .right-part{color:unset}.com-insured-part-wrapper .content-wrapper .price[data-v-e5c37410] .left-part{font-weight:400}\n",document.head.appendChild(e),System.register(["./trial-legacy-c9e2a2a5.js","./index-legacy-ff3e7229.js","./vendor-legacy-da8f33fe.js"],(function(e){"use strict";var t,n,r,a,c,i,o,p,d,s,u,l,m,y,f,g,v,h;return{setters:[function(e){t=e.R,n=e.a,r=e.b,a=e.c},function(e){c=e._},function(e){i=e.g,o=e.y,p=e.r,d=e.j,s=e.n,u=e.p,l=e.m,m=e.z,y=e.J,f=e.A,g=e.F,v=e.G,h=e.k}],execute:function(){const w={class:"com-insured-part-wrapper"},k={class:"content-wrapper"},L={class:"product-name"},P={class:"risk-item"};e("I",c(i({props:{productData:{default:()=>({})}},setup(e){const c=e,i=o((()=>{var e;const n={riderRiskList:[],amount:0};return null===(e=c.productData)||void 0===e||e.tenantOrderRiskList.forEach((e=>{n.amount+=e.initialAmount,e.riskType===t.MAIN_RISK?Object.assign(n,e):n.riderRiskList.push(e.riskName||"")})),n})),R=(e,t)=>-1!==t.indexOf("$")?t.replace("$",`${e}`):`${e||""}${t}`;return(t,c)=>{const o=p("ProCell"),b=p("ProCard");return d(),s("div",w,[u(b,{title:"保障信息"},{default:l((()=>[m("div",k,[m("div",L,y(e.productData.productName),1),m("div",P,[u(o,{title:"保障期间",content:R(f(i).insurancePeriodValue,f(n)[f(i).insurancePeriodType])},null,8,["content"]),u(o,{title:"交费期间",content:R(f(i).paymentPeriod,f(r)[f(i).paymentPeriodType])},null,8,["content"]),u(o,{title:"交费方式",content:f(a)[f(i).paymentFrequency]},null,8,["content"]),(d(!0),s(g,null,v(f(i).riderRiskList,((e,t)=>(d(),h(o,{key:t,title:e,content:"投保"},null,8,["title"])))),128)),u(o,{title:"保障金额",content:f(i).amount.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),u(o,{title:"首期保费",class:"price",content:e.productData.premium.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-e5c37410"]]))}}}))}();
