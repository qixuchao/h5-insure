!function(){var e=document.createElement("style");e.innerHTML=".com-insured-part-wrapper[data-v-306a6e1a] .body{padding:0!important}.com-insured-part-wrapper .content-wrapper[data-v-306a6e1a]{padding:0 .4rem}.com-insured-part-wrapper .content-wrapper .product-name[data-v-306a6e1a]{min-height:1.41333rem;line-height:1.41333rem;border-bottom:1px solid #EEEFF4;font-size:.4rem;font-weight:500}.com-insured-part-wrapper .content-wrapper .price[data-v-306a6e1a] .right-part{color:unset}.com-insured-part-wrapper .content-wrapper .price[data-v-306a6e1a] .left-part{font-weight:400}\n",document.head.appendChild(e),System.register(["./trial-legacy-6925fc6f.js","./index-legacy-c850c490.js","./vendor-legacy-da8f33fe.js"],(function(e){"use strict";var t,r,n,a,i,c,o,p,d,s,u,l,m,f,y,v,g,w;return{setters:[function(e){t=e.R,r=e.a,n=e.b,a=e.c},function(e){i=e._},function(e){c=e.g,o=e.y,p=e.r,d=e.j,s=e.n,u=e.p,l=e.m,m=e.z,f=e.J,y=e.A,v=e.F,g=e.G,w=e.k}],execute:function(){const h={class:"com-insured-part-wrapper"},k={class:"content-wrapper"},L={class:"product-name"},R={class:"risk-item"};e("I",i(c({props:{productData:{default:()=>({})}},setup(e){const i=e,c=o((()=>{var e,r;const n={riderRiskList:[],amount:0},a=null===(e=i.productData)||void 0===e?void 0:e.tenantOrderRiskList.find((e=>e.riskType===t.MAIN_RISK));return Object.assign(n,a),null===(r=i.productData)||void 0===r||r.tenantOrderRiskList.forEach((e=>{n.riderRiskList.push(e.riskName||"")})),n})),P=(e,t)=>-1!==t.indexOf("$")?t.replace("$",`${e}`):`${e||""}${t}`;return(t,i)=>{const o=p("ProCell"),b=p("ProCard");return d(),s("div",h,[u(b,{title:"保障信息"},{default:l((()=>[m("div",k,[m("div",L,f(e.productData.productName),1),m("div",R,[u(o,{title:"保障期间",content:P(y(c).insurancePeriodValue,y(r)[y(c).insurancePeriodType])},null,8,["content"]),u(o,{title:"交费期间",content:P(y(c).paymentPeriod,y(n)[y(c).paymentPeriodType])},null,8,["content"]),u(o,{title:"交费方式",content:y(a)[y(c).paymentFrequency]},null,8,["content"]),(d(!0),s(v,null,g(y(c).riderRiskList,((e,t)=>(d(),w(o,{key:t,title:e,content:"投保"},null,8,["title"])))),128)),u(o,{title:"首期保费",class:"price",content:e.productData.premium.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-306a6e1a"]]))}}}))}();
