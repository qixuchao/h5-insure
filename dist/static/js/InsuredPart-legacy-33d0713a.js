!function(){var e=document.createElement("style");e.innerHTML=".com-insured-part-wrapper[data-v-306a6e1a] .body{padding:0!important}.com-insured-part-wrapper .content-wrapper[data-v-306a6e1a]{padding:0 .4rem}.com-insured-part-wrapper .content-wrapper .product-name[data-v-306a6e1a]{min-height:1.41333rem;line-height:1.41333rem;border-bottom:1px solid #EEEFF4;font-size:.4rem;font-weight:500}.com-insured-part-wrapper .content-wrapper .price[data-v-306a6e1a] .right-part{color:unset}.com-insured-part-wrapper .content-wrapper .price[data-v-306a6e1a] .left-part{font-weight:400}\n",document.head.appendChild(e),System.register(["./index-legacy-d48fadb4.js","./trial-legacy-47c3e936.js"],(function(e){"use strict";var t,r,n,a,i,c,o,p,d,s,u,l,m,f,v,y,w,g,h;return{setters:[function(e){t=e._,r=e.d,n=e.E,a=e.c,i=e.h,c=e.f,o=e.w,p=e.j,d=e.t,s=e.g,u=e.F,l=e.i,m=e.e,f=e.a3,v=e.P},function(e){y=e.a,w=e.b,g=e.c,h=e.R}],execute:function(){const k={class:"com-insured-part-wrapper"},L={class:"content-wrapper"},R={class:"product-name"},_={class:"risk-item"};e("I",t(r({__name:"InsuredPart",props:{productData:{default:()=>({})}},setup(e){const t=e,r=n((()=>{var e,r;const n={riderRiskList:[],amount:0},a=null===(e=t.productData)||void 0===e?void 0:e.tenantOrderRiskList.find((e=>e.riskType===h.MAIN_RISK));return Object.assign(n,a),null===(r=t.productData)||void 0===r||r.tenantOrderRiskList.forEach((e=>{n.riderRiskList.push(e.riskName||"")})),n})),b=(e,t)=>-1!==t.indexOf("$")?t.replace("$",`${e}`):`${e||""}${t}`;return(t,n)=>{const h=f,E=v;return a(),i("div",k,[c(E,{title:"保障信息"},{default:o((()=>[p("div",L,[p("div",R,d(e.productData.productName),1),p("div",_,[c(h,{title:"保障期间",content:b(s(r).insurancePeriodValue,s(y)[s(r).insurancePeriodType])},null,8,["content"]),c(h,{title:"交费期间",content:b(s(r).paymentPeriod,s(w)[s(r).paymentPeriodType])},null,8,["content"]),c(h,{title:"交费方式",content:s(g)[s(r).paymentFrequency]},null,8,["content"]),(a(!0),i(u,null,l(s(r).riderRiskList,((e,t)=>(a(),m(h,{key:t,title:e,content:"投保"},null,8,["title"])))),128)),c(h,{title:"首期保费",class:"price",content:e.productData.premium.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-306a6e1a"]]))}}}))}();
