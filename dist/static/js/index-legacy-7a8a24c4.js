!function(){var e=document.createElement("style");e.innerHTML=".page-activity-order{background:url(/static/assets/order.b0cb89b8.png) no-repeat;background-size:contain;padding:.26667rem}.page-activity-order .card{margin-top:3.6rem;background-color:#fff;padding:0 .33333rem;border-radius:.21333rem}.page-activity-order .card .title{padding:.4rem 0;font-size:.4rem;font-weight:500;color:var(--zaui-text, #393d46);line-height:.4rem;border-bottom:1px solid #e1e1e1}.page-activity-order .card .content{margin:.4rem 0}.page-activity-order .card .desc{font-size:.4rem;font-weight:400;color:var(--zaui-text, #393d46);line-height:.53333rem;margin:.13333rem 0;display:flex;justify-content:space-between;align-items:center}.page-activity-order .card .desc:first-child{margin-top:.26667rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-92a8f610.js","./trial-legacy-054bc5b5.js","./product-legacy-25e55924.js","./utils-legacy-64d76c8e.js","./index-legacy-006fe31c.js","./trial-legacy-0ef43875.js"],(function(e){"use strict";var t,r,n,d,i,a,c,o,l,s,u,v;return{setters:[function(e){t=e.g,r=e.O,n=e.E,d=e.h,i=e.j,a=e.n,c=e.z,o=e.J,l=e.A},function(e){s=e.a},function(e){u=e.p},function(e){v=e.a},function(){},function(){}],execute:function(){const g={class:"page-activity-order"},m={class:"card"},p={class:"title"},f={class:"content"},y={class:"desc"},b=c("div",null,"被保险人：",-1),h={class:"desc"},j=c("div",null,"保单号：",-1),I={class:"desc"},x=c("div",null,"后续每月保费：",-1);e("default",t({setup(e){const t=r(),{productCode:z,tenantId:w="",orderNo:L=""}=t.query,N=n(),O=n();return d((()=>{(async()=>{const e=u({productCode:z,withInsureInfo:!0,tenantId:w}),t=s({orderNo:L,tenantId:w});Promise.all([e,t]).then((([e,t])=>{"10000"===e.code&&(N.value=e.data),"10000"===t.code&&(O.value=t.data)}))})()})),(e,t)=>{var r,n,d,s;return i(),a("div",g,[c("div",m,[c("div",p,o(null===(r=N.value)||void 0===r?void 0:r.productName),1),c("div",f,[c("div",y,[b,c("div",null,o(null===(n=O.value)||void 0===n?void 0:n.tenantOrderInsuredList[0].name),1)]),c("div",h,[j,c("div",null,o(null===(d=O.value)||void 0===d?void 0:d.orderNo),1)]),c("div",I,[x,c("div",null,o(l(v)((null===(s=O.value)||void 0===s?void 0:s.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}}))}}}))}();
