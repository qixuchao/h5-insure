!function(){var t=document.createElement("style");t.innerHTML=".com-insured-part-wrapper[data-v-701b0872] .body{padding:0!important}.com-insured-part-wrapper .content-wrapper[data-v-701b0872]{padding:0 .4rem}.com-insured-part-wrapper .content-wrapper .product-name[data-v-701b0872]{min-height:1.41333rem;line-height:1.41333rem;border-bottom:1px solid #EEEFF4;font-size:.4rem;font-weight:500}.com-insured-part-wrapper .content-wrapper .price[data-v-701b0872] .right-part{color:unset}.com-insured-part-wrapper .content-wrapper .price[data-v-701b0872] .left-part{font-weight:400}\n",document.head.appendChild(t),System.register(["./trial-legacy-93c0a973.js","./index-legacy-4099a164.js","./vendor-legacy-b51aec28.js"],(function(t){"use strict";var e,n,r,a,c,i,o,p,s,d,u,l,m,y,f,g,v,h;return{setters:[function(t){e=t.e,n=t.I,r=t.P,a=t.f},function(t){c=t._},function(t){i=t.g,o=t.y,p=t.r,s=t.j,d=t.n,u=t.p,l=t.m,m=t.z,y=t.J,f=t.A,g=t.F,v=t.G,h=t.k}],execute:function(){const w={class:"com-insured-part-wrapper"},b={class:"content-wrapper"},k={class:"product-name"},L={class:"risk-item"};t("I",c(i({props:{productData:{default:()=>({})}},setup(t){const c=t,i=o((()=>{var t;const n={riderRiskList:[],amount:0};return null===(t=c.productData)||void 0===t||t.tenantOrderRiskList.forEach((t=>{n.amount+=t.initialAmount,t.riskType===e.MAIN_RISK?Object.assign(n,t):n.riderRiskList.push(t.riskName||"")})),n})),P=(t,e)=>-1!==e.indexOf("$")?e.replace("$",`${t}`):`${t||""}${e}`;return(e,c)=>{const o=p("ProCell"),j=p("ProCard");return s(),d("div",w,[u(j,{title:"保障信息"},{default:l((()=>[m("div",b,[m("div",k,y(t.productData.productName),1),m("div",L,[u(o,{title:"保障期间",content:P(f(i).insurancePeriodValue,f(n)[f(i).insurancePeriodType])},null,8,["content"]),u(o,{title:"交费期间",content:P(f(i).paymentPeriod,f(r)[f(i).paymentPeriodType])},null,8,["content"]),u(o,{title:"交费方式",content:f(a)[f(i).paymentFrequency]},null,8,["content"]),(s(!0),d(g,null,v(f(i).riderRiskList,((t,e)=>(s(),h(o,{key:e,title:t,content:"投保"},null,8,["title"])))),128)),u(o,{title:"保障金额",content:f(i).amount.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),u(o,{title:"首期保费",class:"price",content:t.productData.premium.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-701b0872"]]))}}}))}();
