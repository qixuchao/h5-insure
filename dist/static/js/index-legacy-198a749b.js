!function(){var e=document.createElement("style");e.innerHTML=".page-activity-order{background:url(/static/assets/order.b0cb89b8.png) no-repeat;background-size:contain;padding:.26667rem}.page-activity-order .card{margin-top:3.6rem;background-color:#fff;padding:0 .33333rem;border-radius:.21333rem}.page-activity-order .card .title{padding:.4rem 0;font-size:.4rem;font-weight:500;color:var(--zaui-text, #393d46);line-height:.4rem;border-bottom:1px solid #e1e1e1}.page-activity-order .card .content{margin:.4rem 0}.page-activity-order .card .desc{font-size:.4rem;font-weight:400;color:var(--zaui-text, #393d46);line-height:.53333rem;margin:.13333rem 0;display:flex;justify-content:space-between;align-items:center}.page-activity-order .card .desc:first-child{margin-top:.26667rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-7cfa1af5.js","./trial-legacy-82453cd9.js","./product-legacy-cb88147b.js","./utils-legacy-492adb64.js","./index-legacy-dab9cee2.js","./infoCollection-legacy-e435a60d.js","./utils-legacy-20e4723c.js","./trial-legacy-7da7a3c5.js"],(function(e){"use strict";var t,n,r,a,d,i,c,o,l,s,u,v;return{setters:[function(e){t=e.g,n=e.O,r=e.E,a=e.h,d=e.j,i=e.n,c=e.z,o=e.J,l=e.A},function(e){s=e.g},function(e){u=e.p},function(e){v=e.d},function(){},function(){},function(){},function(){}],execute:function(){const g={class:"page-activity-order"},m={class:"card"},f={class:"title"},p={class:"content"},y={class:"desc"},b=c("div",null,"被保险人：",-1),h={class:"desc"},j=c("div",null,"保单号：",-1),I={class:"desc"},x=c("div",null,"后续每月保费：",-1);e("default",t({setup(e){const t=n(),{productCode:z,tenantId:w="",orderNo:C=""}=t.query,L=r(),N=r();return a((()=>{(async()=>{const e=u({productCode:z,withInsureInfo:!0,tenantId:w}),t=s({orderNo:C,tenantId:w});Promise.all([e,t]).then((([e,t])=>{"10000"===e.code&&(L.value=e.data),"10000"===t.code&&(N.value=t.data)}))})()})),(e,t)=>{var n,r,a,s;return d(),i("div",g,[c("div",m,[c("div",f,o(null===(n=L.value)||void 0===n?void 0:n.productName),1),c("div",p,[c("div",y,[b,c("div",null,o(null===(r=N.value)||void 0===r?void 0:r.tenantOrderInsuredList[0].name),1)]),c("div",h,[j,c("div",null,o(null===(a=N.value)||void 0===a?void 0:a.orderNo),1)]),c("div",I,[x,c("div",null,o(l(v)((null===(s=N.value)||void 0===s?void 0:s.tenantOrderInsuredList[0].tenantOrderProductList[0].premium)||""))+" 元",1)])])])])}}}))}}}))}();
