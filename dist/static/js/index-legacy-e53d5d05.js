!function(){var e=document.createElement("style");e.innerHTML=".page-activity-order{background:url(/static/assets/order.b0cb89b8.png) no-repeat;background-size:contain;padding:.26667rem}.page-activity-order .card{margin-top:3.6rem;background-color:#fff;padding:0 .33333rem;border-radius:.21333rem}.page-activity-order .card .title{padding:.4rem 0;font-size:.4rem;font-weight:500;color:var(--zaui-text, #393d46);line-height:.4rem;border-bottom:1px solid #e1e1e1}.page-activity-order .card .content{margin:.4rem 0}.page-activity-order .card .desc{font-size:.4rem;font-weight:400;color:var(--zaui-text, #393d46);line-height:.53333rem;margin:.13333rem 0}.page-activity-order .card .desc:first-child{margin-top:.26667rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-2ed1ad67.js","./trial-legacy-c5dc6876.js","./product-legacy-3f8d87ee.js","./utils-legacy-e24b42a0.js","./index-legacy-259e858f.js","./trial-legacy-5a7db5d1.js"],(function(e){"use strict";var t,r,a,d,n,i,o,c,s,l,u,v;return{setters:[function(e){t=e.g,r=e.O,a=e.E,d=e.h,n=e.j,i=e.n,o=e.z,c=e.J,s=e.A},function(e){l=e.a},function(e){u=e.p},function(e){v=e.a},function(){},function(){}],execute:function(){const g={class:"page-activity-order"},m={class:"card"},p={class:"title"},f={class:"content"},y={class:"desc"},h={class:"desc"},b={class:"desc"};e("default",t({setup(e){const t=r(),{productCode:j,tenantId:I="",orderNo:z=""}=t.query,x=a(),L=a();return d((()=>{(async()=>{const e=u({productCode:j,withInsureInfo:!0,tenantId:I}),t=l({orderNo:z,tenantId:I});Promise.all([e,t]).then((([e,t])=>{"10000"===e.code&&(x.value=e.data),"10000"===t.code&&(L.value=t.data)}))})()})),(e,t)=>{var r,a,d,l;return n(),i("div",g,[o("div",m,[o("div",p,c(null===(r=x.value)||void 0===r?void 0:r.productName),1),o("div",f,[o("div",y,"被保险人："+c(null===(a=L.value)||void 0===a?void 0:a.tenantOrderInsuredList[0].name),1),o("div",h,"保单号："+c(null===(d=L.value)||void 0===d?void 0:d.orderNo),1),o("div",b," 后续每月保费："+c(s(v)((null===(l=L.value)||void 0===l?void 0:l.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元 ",1)])])])}}}))}}}))}();
