!function(){var e=document.createElement("style");e.innerHTML=".page-activity-order{background:url(/static/assets/order.580a8cd3.png) no-repeat;background-size:contain;padding:.26667rem}.page-activity-order .card{margin-top:3.6rem;background-color:#fff;padding:0 .33333rem;border-radius:.21333rem}.page-activity-order .card .title{padding:.4rem 0;font-size:.4rem;font-weight:500;color:var(--zaui-text, #393d46);line-height:.4rem;border-bottom:1px solid #e1e1e1}.page-activity-order .card .content{margin:.4rem 0}.page-activity-order .card .desc{font-size:.4rem;font-weight:400;color:var(--zaui-text, #393d46);line-height:.53333rem;margin:.13333rem 0;display:flex;justify-content:space-between;align-items:center}.page-activity-order .card .desc:first-child{margin-top:.26667rem}\n",document.head.appendChild(e),System.register(["./index-legacy-888dc198.js","./trial-legacy-4877be58.js","./product-legacy-7cbac96b.js","./utils-legacy-5cedc7e2.js","./pdfh5-legacy-9f98dc45.js","./infoCollection-legacy-a0d15331.js","./trial-legacy-76b1e638.js"],(function(e){"use strict";var t,r,n,d,a,i,c,o,s,l,u,g;return{setters:[function(e){t=e.d,r=e.a,n=e.r,d=e.y,a=e.c,i=e.h,c=e.j,o=e.t,s=e.g},function(e){l=e.g},function(e){u=e.p},function(e){g=e.e},function(){},function(){},function(){}],execute:function(){const m={class:"page-activity-order"},p={class:"card"},v={class:"title"},f={class:"content"},y={class:"desc"},h=c("div",null,"被保险人：",-1),b={class:"desc"},j=c("div",null,"保单号：",-1),x={class:"desc"},I=c("div",null,"后续每月保费：",-1);e("default",t({__name:"index",setup(e){const t=r(),{productCode:z,tenantId:w="",orderNo:C=""}=t.query,L=n(),N=n();return d((()=>{(async()=>{const e=u({productCode:z,withInsureInfo:!0,tenantId:w}),t=l({orderNo:C,tenantId:w});Promise.all([e,t]).then((([e,t])=>{"10000"===e.code&&(L.value=e.data),"10000"===t.code&&(N.value=t.data)}))})()})),(e,t)=>(a(),i("div",m,[c("div",p,[c("div",v,o(s(L)?.productName),1),c("div",f,[c("div",y,[h,c("div",null,o(s(N)?.tenantOrderInsuredList[0].name),1)]),c("div",b,[j,c("div",null,o(s(N)?.orderNo),1)]),c("div",x,[I,c("div",null,o(s(g)(s(N)?.tenantOrderInsuredList[0].tenantOrderProductList[0].premium||""))+" 元",1)])])])]))}}))}}}))}();
