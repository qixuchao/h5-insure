!function(){var e=document.createElement("style");e.innerHTML='.com-field-info[data-v-4e47c671]{height:1.41333rem;line-height:1.41333rem;display:flex;justify-content:space-between;font-size:.4rem;color:#393d46;margin:0 .4rem;border-bottom:1px solid #eeeff4}.com-field-info[data-v-4e47c671]:last-child{border-bottom:none}.page-order-detail[data-v-0d7d0c28]{height:100%;background:#f2f5fc;padding:.4rem .4rem 2.4rem;overflow-y:auto}.page-order-detail .insure-info[data-v-0d7d0c28]{border-radius:.26667rem;margin-top:.4rem}.page-order-detail .card[data-v-0d7d0c28]{background:#fff;border-radius:.26667rem;margin-top:.4rem}.page-order-detail .card[data-v-0d7d0c28]:first-child{margin-top:0}.page-order-detail .card .header[data-v-0d7d0c28]{display:flex;flex:1;align-items:center}.page-order-detail .card .header .product-name[data-v-0d7d0c28]{font-size:.4rem;font-weight:600;color:#333;flex:1;width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page-order-detail .card .header .company-name[data-v-0d7d0c28]{flex:0 0 1.6rem;height:.53333rem;line-height:.53333rem;text-align:center;padding:0 .13333rem;background:rgba(13,110,254,.1);border-radius:.10667rem;font-size:.29333rem;color:#0d6efe;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.page-order-detail .card .status[data-v-0d7d0c28]{margin-left:.4rem;font-size:.34667rem;color:#99a9c0}.page-order-detail .card .detail[data-v-0d7d0c28]{font-size:.4rem;font-weight:600;color:#333;flex:1;display:flex;align-items:center}.page-order-detail .card .detail[data-v-0d7d0c28]:before{content:" ";width:.10667rem;height:.37333rem;border-radius:.05333rem;background:#0d6efe;margin-right:.21333rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-24277b09.js","./order-legacy-4a15bd98.js","./index-legacy-29ce6047.js","./order-legacy-e1e2c746.js","./InsuredPart-legacy-a1de65d4.js","./trial-legacy-a5973539.js"],(function(e){"use strict";var t,d,o,r,a,n,l,i,c,u,s,v,p,f,m,g,y,C,b,h,k,I,_,S,x,O,w,L,P,E,N;return{setters:[function(e){t=e.g,d=e.v,o=e.j,r=e.n,a=e.z,n=e.J,l=e.A,i=e.Y,c=e.t,u=e.O,s=e.ak,v=e.E,p=e.h,f=e.r,m=e.k,g=e.m,y=e.p,C=e.d,b=e.G,h=e.F,k=e.am,I=e.C,_=e.D,S=e.T},function(e){x=e.d},function(e){O=e._,w=e.r,L=e.G},function(e){P=e.O,E=e.a},function(e){N=e.I},function(){}],execute:function(){const Y={class:"com-field-info"},j={class:"label"},T={class:"content"};var z=O(t({props:{label:{type:String,default:""},content:{type:String,default:""}},setup(e){const t=d();return(d,u)=>(o(),r("div",Y,[a("div",j,n(e.label),1),l(t).label?i(d.$slots,"label",{key:0},void 0,!0):c("",!0),a("div",T,n(e.content),1),l(t).content?i(d.$slots,"content",{key:1},void 0,!0):c("",!0)]))}}),[["__scopeId","data-v-4e47c671"]]);const A={class:"page-order-detail"},M={class:"card"},D={class:"header"},U={class:"product-name"},G={class:"company-name"},H={class:"status"},F={key:0,class:"footer-button"},R=I("删除"),J=I("去处理"),$={key:1,class:"footer-button"},q=I("删除"),W=I("去支付"),B={key:2,class:"footer-button"},K=I("删除"),Q=I("去支付"),V={key:3,class:"footer-button"},X={key:4,class:"footer-button"},Z={key:5,class:"footer-button"},ee=I("删除"),te={key:6,class:"footer-button"},de=I("删除"),oe=t({setup(e){const t=u();s();const d=v(),{query:{orderNo:i,agentCode:I,tenantId:O,abbreviation:Y,productCategory:j}}=t,T=()=>{_.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{d.value&&x(d.value.id,d.value.orderStatus).then((e=>{const{code:t,data:d}=e;"10000"===t&&S.success("删除成功")}))}))},oe=()=>{if(d.value){var e,t;const{id:o,extInfo:{templateId:r,pageCode:a},agencyId:n,venderCode:l}=d.value,c=null===(e=d.value.tenantOrderInsuredList[0])||void 0===e||null===(t=e.tenantOrderProductList[0])||void 0===t?void 0:t.productCode;L(a,{productCode:c,orderNo:i,orderId:o,agentCode:I,templateId:r,tenantId:O,productCategory:j,insurerCode:l,agencyCode:n,isFromOrderList:"1"})}},re=()=>{if(d.value){var e,t;const{id:o,saleUserId:r,extInfo:{templateId:a},agencyId:n,venderCode:l}=d.value,c=null===(e=d.value.tenantOrderInsuredList[0])||void 0===e||null===(t=e.tenantOrderProductList[0])||void 0===t?void 0:t.productCode;L("payInfo",{productCode:c,orderNo:i,orderId:o,saleUserId:r,templateId:a,tenantId:O,productCategory:j,insurerCode:l,agencyCode:n})}};return p((()=>{w({orderNo:i,agentCode:I,tenantId:O}).then((e=>{const{code:t,data:o}=e;"10000"===t&&(d.value=o)}))})),(e,t)=>{const i=f("van-button"),u=f("ProPageWrap");return o(),m(u,null,{default:g((()=>{var e,t,u,s,v,p,f,I,_,S,x,O,w,L,j;return[a("div",A,[a("div",M,[y(z,null,{label:g((()=>{var e,t,o;return[a("div",D,[a("div",U,n(null===(e=d.value)||void 0===e||null===(t=e.tenantOrderInsuredList[0])||void 0===t||null===(o=t.tenantOrderProductList[0])||void 0===o?void 0:o.productName),1),a("div",G,n(l(Y)),1)])]})),content:g((()=>{var e;return[a("div",H,n(d.value?l(P)[null===(e=d.value)||void 0===e?void 0:e.orderStatus]:""),1)]})),_:1}),y(z,{label:"订单号",content:null===(e=d.value)||void 0===e?void 0:e.orderNo},null,8,["content"]),y(z,{label:"创建时间",content:l(C)(null===(t=d.value)||void 0===t?void 0:t.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),y(z,{label:"投保人",content:null===(u=d.value)||void 0===u||null===(s=u.tenantOrderHolder)||void 0===s?void 0:s.name},null,8,["content"]),(o(!0),r(h,null,b((null===(v=d.value)||void 0===v?void 0:v.tenantOrderInsuredList)||[],((e,t)=>(o(),m(z,{key:t,label:"被保人",content:e.name},null,8,["content"])))),128))]),y(N,{"product-data":null===(p=d.value)||void 0===p||null===(f=p.tenantOrderInsuredList[0])||void 0===f||null===(I=f.tenantOrderProductList)||void 0===I?void 0:I[0],class:"insure-info"},null,8,["product-data"]),(null===(_=d.value)||void 0===_?void 0:_.orderStatus)===l(E).PENDING?(o(),r("div",F,[y(i,{type:"primary",onClick:k(T,["stop"])},{default:g((()=>[R])),_:1},8,["onClick"]),y(i,{type:"primary",onClick:k(oe,["stop"])},{default:g((()=>[J])),_:1},8,["onClick"])])):c("",!0),(null===(S=d.value)||void 0===S?void 0:S.orderStatus)===l(E).PAYING?(o(),r("div",$,[y(i,{type:"primary",onClick:k(T,["stop"])},{default:g((()=>[q])),_:1},8,["onClick"]),y(i,{type:"primary",onClick:k(re,["stop"])},{default:g((()=>[W])),_:1},8,["onClick"])])):c("",!0),(null===(x=d.value)||void 0===x?void 0:x.orderStatus)===l(E).PAYMENT_FAILED?(o(),r("div",B,[y(i,{type:"primary",onClick:k(T,["stop"])},{default:g((()=>[K])),_:1},8,["onClick"]),y(i,{type:"primary",onClick:k(re,["stop"])},{default:g((()=>[Q])),_:1},8,["onClick"])])):c("",!0),(null===(O=d.value)||void 0===O?void 0:O.orderStatus)===l(E).PAYMENT_SUCCESS?(o(),r("div",V)):c("",!0),(null===(w=d.value)||void 0===w?void 0:w.orderStatus)===l(E).ACCEPT_POLICY?(o(),r("div",X)):c("",!0),(null===(L=d.value)||void 0===L?void 0:L.orderStatus)===l(E).INSURER_REJECT?(o(),r("div",Z,[y(i,{type:"primary",onClick:k(T,["stop"])},{default:g((()=>[ee])),_:1},8,["onClick"])])):c("",!0),(null===(j=d.value)||void 0===j?void 0:j.orderStatus)===l(E).TIMEOUT?(o(),r("div",te,[y(i,{type:"primary",onClick:k(T,["stop"])},{default:g((()=>[de])),_:1},8,["onClick"])])):c("",!0)])]})),_:1})}}});e("default",O(oe,[["__scopeId","data-v-0d7d0c28"]]))}}}))}();
