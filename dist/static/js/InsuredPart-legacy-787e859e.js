!function(){var t=document.createElement("style");t.innerHTML=".com-insured-part-wrapper[data-v-306a6e1a] .body{padding:0!important}.com-insured-part-wrapper .content-wrapper[data-v-306a6e1a]{padding:0 .4rem}.com-insured-part-wrapper .content-wrapper .product-name[data-v-306a6e1a]{min-height:1.41333rem;line-height:1.41333rem;border-bottom:1px solid #EEEFF4;font-size:.4rem;font-weight:500}.com-insured-part-wrapper .content-wrapper .price[data-v-306a6e1a] .right-part{color:unset}.com-insured-part-wrapper .content-wrapper .price[data-v-306a6e1a] .left-part{font-weight:400}\n",document.head.appendChild(t),System.register(["./index-legacy-946d52a2.js","./trial-legacy-6828238b.js"],(function(t){"use strict";var e,r,n,a,i,c,o,p,d,s,u,l,m,v,y,f,w,g,h;return{setters:[function(t){e=t._,r=t.d,n=t.E,a=t.c,i=t.h,c=t.f,o=t.w,p=t.j,d=t.t,s=t.g,u=t.F,l=t.i,m=t.e,v=t.a3,y=t.P},function(t){f=t.a,w=t.b,g=t.c,h=t.R}],execute:function(){const k={class:"com-insured-part-wrapper"},L={class:"content-wrapper"},R={class:"product-name"},_={class:"risk-item"};t("I",e(r({__name:"InsuredPart",props:{productData:{default:()=>({})}},setup(t){const e=t,r=n((()=>{var t,r;const n={riderRiskList:[],amount:0},a=null===(t=e.productData)||void 0===t?void 0:t.tenantOrderRiskList.find((t=>t.riskType===h.MAIN_RISK));return Object.assign(n,a),null===(r=e.productData)||void 0===r||r.tenantOrderRiskList.forEach((t=>{n.riderRiskList.push(t.riskName||"")})),n})),b=(t,e)=>-1!==e.indexOf("$")?e.replace("$",`${t}`):`${t||""}${e}`;return(e,n)=>{const h=v,E=y;return a(),i("div",k,[c(E,{title:"保障信息"},{default:o((()=>[p("div",L,[p("div",R,d(t.productData.productName),1),p("div",_,[c(h,{title:"保障期间",content:b(s(r).insurancePeriodValue,s(f)[s(r).insurancePeriodType])},null,8,["content"]),c(h,{title:"交费期间",content:b(s(r).paymentPeriod,s(w)[s(r).paymentPeriodType])},null,8,["content"]),c(h,{title:"交费方式",content:s(g)[s(r).paymentFrequency]},null,8,["content"]),(a(!0),i(u,null,l(s(r).riderRiskList,((t,e)=>(a(),m(h,{key:e,title:t,content:"投保"},null,8,["title"])))),128)),c(h,{title:"首期保费",class:"price",content:t.productData.premium.toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])])),_:1})])}}}),[["__scopeId","data-v-306a6e1a"]]))}}}))}();
