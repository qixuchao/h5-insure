!function(){var e=document.createElement("style");e.innerHTML=".page-activity-order{background:url(/static/assets/order.b0cb89b8.png) no-repeat;background-size:contain;padding:.26667rem}.page-activity-order .card{margin-top:3.6rem;background-color:#fff;padding:0 .33333rem;border-radius:.21333rem}.page-activity-order .card .title{padding:.4rem 0;font-size:.4rem;font-weight:500;color:var(--zaui-text, #393d46);line-height:.4rem;border-bottom:1px solid #e1e1e1}.page-activity-order .card .content{margin:.4rem 0}.page-activity-order .card .desc{font-size:.4rem;font-weight:400;color:var(--zaui-text, #393d46);line-height:.53333rem;margin:.13333rem 0;display:flex;justify-content:space-between;align-items:center}.page-activity-order .card .desc:first-child{margin-top:.26667rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-4a30a9db.js","./trial-legacy-0de41778.js","./product-legacy-3f5a1459.js","./utils-legacy-c1492213.js","./index-legacy-a47aa417.js","./infoCollection-legacy-15bd553b.js","./trial-legacy-1bd94536.js"],(function(e){"use strict";var t,r,a,n,d,i,c,o,s,l,u,g;return{setters:[function(e){t=e.h,r=e.P,a=e.G,n=e.j,d=e.k,i=e.p,c=e.A,o=e.L,s=e.B},function(e){l=e.g},function(e){u=e.p},function(e){g=e.e},function(){},function(){},function(){}],execute:function(){const v={class:"page-activity-order"},m={class:"card"},p={class:"title"},f={class:"content"},y={class:"desc"},b=c("div",null,"被保险人：",-1),h={class:"desc"},j=c("div",null,"保单号：",-1),I={class:"desc"},x=c("div",null,"后续每月保费：",-1);e("default",t({setup(e){const t=r(),{productCode:z,tenantId:L="",orderNo:k=""}=t.query,w=a(),C=a();return n((()=>{(async()=>{const e=u({productCode:z,withInsureInfo:!0,tenantId:L}),t=l({orderNo:k,tenantId:L});Promise.all([e,t]).then((([e,t])=>{"10000"===e.code&&(w.value=e.data),"10000"===t.code&&(C.value=t.data)}))})()})),(e,t)=>(d(),i("div",v,[c("div",m,[c("div",p,o(w.value?.productName),1),c("div",f,[c("div",y,[b,c("div",null,o(C.value?.tenantOrderInsuredList[0].name),1)]),c("div",h,[j,c("div",null,o(C.value?.orderNo),1)]),c("div",I,[x,c("div",null,o(s(g)(C.value?.tenantOrderInsuredList[0].tenantOrderProductList[0].premium||""))+" 元",1)])])])]))}}))}}}))}();
