!function(){var e=document.createElement("style");e.innerHTML=".com-insured-part-wrapper[data-v-306a6e1a] .body{padding:0!important}.com-insured-part-wrapper .content-wrapper[data-v-306a6e1a]{padding:0 .4rem}.com-insured-part-wrapper .content-wrapper .product-name[data-v-306a6e1a]{min-height:1.41333rem;line-height:1.41333rem;border-bottom:1px solid #EEEFF4;font-size:.4rem;font-weight:500}.com-insured-part-wrapper .content-wrapper .price[data-v-306a6e1a] .right-part{color:unset}.com-insured-part-wrapper .content-wrapper .price[data-v-306a6e1a] .left-part{font-weight:400}\n",document.head.appendChild(e),System.register(["./trial-legacy-76b1e638.js","./index-legacy-888dc198.js"],(function(e){"use strict";var t,r,n,a,i,c,o,p,d,s,u,l,m,y,f,w,g,h;return{setters:[function(e){t=e.a,r=e.b,n=e.c,a=e.R},function(e){i=e._,c=e.d,o=e.x,p=e.b,d=e.c,s=e.h,u=e.f,l=e.w,m=e.j,y=e.t,f=e.g,w=e.F,g=e.i,h=e.e}],execute:function(){const v={class:"com-insured-part-wrapper"},k={class:"content-wrapper"},b={class:"product-name"},L={class:"risk-item"};e("I",i(c({__name:"InsuredPart",props:{productData:{default:()=>({})}},setup(e){const i=e,c=o((()=>{const e={riderRiskList:[],amount:0},t=i.productData?.tenantOrderRiskList.find((e=>e.riskType===a.MAIN_RISK));return Object.assign(e,t),i.productData?.tenantOrderRiskList.forEach((t=>{e.riderRiskList.push(t.riskName||"")})),e})),P=(e,t)=>-1!==t.indexOf("$")?t.replace("$",`${e}`):`${e||""}${t}`;return(a,i)=>{const o=p("ProCell"),R=p("ProCard");return d(),s("div",v,[u(R,{title:"保障信息"},{default:l((()=>[m("div",k,[m("div",b,y(e.productData.productName),1),m("div",L,[u(o,{title:"保障期间",content:P(f(c).insurancePeriodValue,f(t)[f(c).insurancePeriodType])},null,8,["content"]),u(o,{title:"交费期间",content:P(f(c).paymentPeriod,f(r)[f(c).paymentPeriodType])},null,8,["content"]),u(o,{title:"交费方式",content:f(n)[f(c).paymentFrequency]},null,8,["content"]),(d(!0),s(w,null,g(f(c).riderRiskList,((e,t)=>(d(),h(o,{key:t,title:e,content:"投保"},null,8,["title"])))),128)),u(o,{title:"首期保费",class:"price",content:e.productData.premium.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-306a6e1a"]]))}}}))}();
