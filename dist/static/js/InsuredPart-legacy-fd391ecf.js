!function(){var e=document.createElement("style");e.innerHTML=".com-insured-part-wrapper[data-v-306a6e1a] .body{padding:0!important}.com-insured-part-wrapper .content-wrapper[data-v-306a6e1a]{padding:0 .4rem}.com-insured-part-wrapper .content-wrapper .product-name[data-v-306a6e1a]{min-height:1.41333rem;line-height:1.41333rem;border-bottom:1px solid #EEEFF4;font-size:.4rem;font-weight:500}.com-insured-part-wrapper .content-wrapper .price[data-v-306a6e1a] .right-part{color:unset}.com-insured-part-wrapper .content-wrapper .price[data-v-306a6e1a] .left-part{font-weight:400}\n",document.head.appendChild(e),System.register(["./trial-legacy-1f5894fc.js","./index-legacy-e27142af.js","./vendor-legacy-7a787c2a.js"],(function(e){"use strict";var t,r,n,a,i,c,o,p,s,d,u,l,m,f,y,g,h,v;return{setters:[function(e){t=e.a,r=e.b,n=e.c,a=e.R},function(e){i=e._},function(e){c=e.h,o=e.A,p=e.k,s=e.m,d=e.s,u=e.t,l=e.p,m=e.B,f=e.L,y=e.C,g=e.F,h=e.H,v=e.n}],execute:function(){const w={class:"com-insured-part-wrapper"},k={class:"content-wrapper"},L={class:"product-name"},R={class:"risk-item"};e("I",i(c({props:{productData:{default:()=>({})}},setup(e){const i=e,c=o((()=>{const e={riderRiskList:[],amount:0},t=i.productData?.tenantOrderRiskList.find((e=>e.riskType===a.MAIN_RISK));return Object.assign(e,t),i.productData?.tenantOrderRiskList.forEach((t=>{e.riderRiskList.push(t.riskName||"")})),e})),P=(e,t)=>-1!==t.indexOf("$")?t.replace("$",`${e}`):`${e||""}${t}`;return(a,i)=>{const o=p("ProCell"),b=p("ProCard");return s(),d("div",w,[u(b,{title:"保障信息"},{default:l((()=>[m("div",k,[m("div",L,f(e.productData.productName),1),m("div",R,[u(o,{title:"保障期间",content:P(y(c).insurancePeriodValue,y(t)[y(c).insurancePeriodType])},null,8,["content"]),u(o,{title:"交费期间",content:P(y(c).paymentPeriod,y(r)[y(c).paymentPeriodType])},null,8,["content"]),u(o,{title:"交费方式",content:y(n)[y(c).paymentFrequency]},null,8,["content"]),(s(!0),d(g,null,h(y(c).riderRiskList,((e,t)=>(s(),v(o,{key:t,title:e,content:"投保"},null,8,["title"])))),128)),u(o,{title:"首期保费",class:"price",content:e.productData.premium.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-306a6e1a"]]))}}}))}();
