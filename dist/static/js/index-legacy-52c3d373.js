!function(){var e=document.createElement("style");e.innerHTML='.com-field-info[data-v-4e47c671]{height:1.41333rem;line-height:1.41333rem;display:flex;justify-content:space-between;font-size:.4rem;color:#393d46;margin:0 .4rem;border-bottom:1px solid #eeeff4}.com-field-info[data-v-4e47c671]:last-child{border-bottom:none}.page-order-detail[data-v-b45c4c8c]{height:100%;background:#f2f5fc;padding:.4rem .4rem 2.4rem;overflow-y:auto}.page-order-detail .insure-info[data-v-b45c4c8c]{border-radius:.26667rem;margin-top:.4rem}.page-order-detail .card[data-v-b45c4c8c]{background:#fff;border-radius:.26667rem;margin-top:.4rem}.page-order-detail .card[data-v-b45c4c8c]:first-child{margin-top:0}.page-order-detail .card .header[data-v-b45c4c8c]{display:flex;flex:1;align-items:center}.page-order-detail .card .header .product-name[data-v-b45c4c8c]{font-size:.4rem;font-weight:600;color:#333;flex:1;width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page-order-detail .card .header .company-name[data-v-b45c4c8c]{flex:0 0 1.6rem;height:.53333rem;line-height:.53333rem;text-align:center;padding:0 .13333rem;background:rgba(13,110,254,.1);border-radius:.10667rem;font-size:.29333rem;color:#0d6efe;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.page-order-detail .card .status[data-v-b45c4c8c]{margin-left:.4rem;font-size:.34667rem;color:#99a9c0}.page-order-detail .card .detail[data-v-b45c4c8c]{font-size:.4rem;font-weight:600;color:#333;flex:1;display:flex;align-items:center}.page-order-detail .card .detail[data-v-b45c4c8c]:before{content:" ";width:.10667rem;height:.37333rem;border-radius:.05333rem;background:#0d6efe;margin-right:.21333rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-1e86c4b9.js","./order-legacy-1d0daf4b.js","./index-legacy-76bf2e6e.js","./order-legacy-58b53d63.js","./InsuredPart-legacy-e08d3725.js","./utils-legacy-20e4723c.js","./trial-legacy-367e4e73.js"],(function(e){"use strict";var t,o,r,d,a,n,l,i,c,u,s,v,p,f,m,g,b,y,C,h,I,k,_,S,x,O,w,L,P,E,N;return{setters:[function(e){t=e.g,o=e.v,r=e.j,d=e.n,a=e.z,n=e.J,l=e.A,i=e.Y,c=e.t,u=e.O,s=e.a9,v=e.E,p=e.h,f=e.r,m=e.k,g=e.m,b=e.p,y=e.d,C=e.G,h=e.F,I=e.ab,k=e.C,_=e.D,S=e.T},function(e){x=e.d},function(e){O=e._,w=e.r,L=e.H},function(e){P=e.O,E=e.a},function(e){N=e.I},function(){},function(){}],execute:function(){const j={class:"com-field-info"},Y={class:"label"},T={class:"content"};var z=O(t({props:{label:{type:String,default:""},content:{type:String,default:""}},setup(e){const t=o();return(o,u)=>(r(),d("div",j,[a("div",Y,n(e.label),1),l(t).label?i(o.$slots,"label",{key:0},void 0,!0):c("",!0),a("div",T,n(e.content),1),l(t).content?i(o.$slots,"content",{key:1},void 0,!0):c("",!0)]))}}),[["__scopeId","data-v-4e47c671"]]);const A={class:"page-order-detail"},M={class:"card"},D={class:"header"},H={class:"product-name"},U={class:"company-name"},F={class:"status"},G={key:0,class:"footer-button"},R=k("删除"),J=k("去处理"),$={key:1,class:"footer-button"},q=k("删除"),W=k("去支付"),B={key:2,class:"footer-button"},K=k("删除"),Q=k("去支付"),V={key:3,class:"footer-button"},X={key:4,class:"footer-button"},Z={key:5,class:"footer-button"},ee=k("删除"),te={key:6,class:"footer-button"},oe=k("删除"),re=t({setup(e){const t=u();s();const o=v(),{query:{orderNo:i,agentCode:k,tenantId:O,abbreviation:j,productCategory:Y}}=t,T=()=>{_.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{o.value&&x(o.value.id,o.value.orderStatus).then((e=>{const{code:t,data:o}=e;"10000"===t&&S.success("删除成功")}))}))},re=()=>{if(o.value){var e,t;const{id:r,extInfo:{templateId:d,pageCode:a},agencyId:n,venderCode:l}=o.value,c=null===(e=o.value.tenantOrderInsuredList[0])||void 0===e||null===(t=e.tenantOrderProductList[0])||void 0===t?void 0:t.productCode;L(a,{productCode:c,orderNo:i,orderId:r,agentCode:k,templateId:d,tenantId:O,productCategory:Y,insurerCode:l,agencyCode:n,isFromOrderList:"1"})}},de=()=>{if(o.value){var e,t;const{id:r,saleUserId:d,extInfo:{templateId:a},agencyId:n,venderCode:l}=o.value,c=null===(e=o.value.tenantOrderInsuredList[0])||void 0===e||null===(t=e.tenantOrderProductList[0])||void 0===t?void 0:t.productCode;L("payInfo",{productCode:c,orderNo:i,orderId:r,saleUserId:d,templateId:a,tenantId:O,productCategory:Y,insurerCode:l,agencyCode:n})}};return p((()=>{w({orderNo:i,agentCode:k,tenantId:O}).then((e=>{const{code:t,data:r}=e;"10000"===t&&(o.value=r)}))})),(e,t)=>{const i=f("van-button"),u=f("ProPageWrap");return r(),m(u,null,{default:g((()=>{var e,t,u,s,v,p,f,k,_,S,x,O,w,L,j;return[a("div",A,[a("div",M,[b(z,null,{label:g((()=>{var e,t,r,d;return[a("div",D,[a("div",H,n(null===(e=o.value)||void 0===e||null===(t=e.tenantOrderInsuredList[0])||void 0===t||null===(r=t.tenantOrderProductList[0])||void 0===r?void 0:r.productName),1),a("div",U,n(null===(d=o.value)||void 0===d?void 0:d.abbreviation),1)])]})),content:g((()=>{var e;return[a("div",F,n(o.value?l(P)[null===(e=o.value)||void 0===e?void 0:e.orderStatus]:""),1)]})),_:1}),b(z,{label:"订单号",content:null===(e=o.value)||void 0===e?void 0:e.orderNo},null,8,["content"]),b(z,{label:"创建时间",content:l(y)(null===(t=o.value)||void 0===t?void 0:t.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),b(z,{label:"投保人",content:null===(u=o.value)||void 0===u||null===(s=u.tenantOrderHolder)||void 0===s?void 0:s.name},null,8,["content"]),(r(!0),d(h,null,C((null===(v=o.value)||void 0===v?void 0:v.tenantOrderInsuredList)||[],((e,t)=>(r(),m(z,{key:t,label:"被保人",content:e.name},null,8,["content"])))),128))]),b(N,{"product-data":null===(p=o.value)||void 0===p||null===(f=p.tenantOrderInsuredList[0])||void 0===f||null===(k=f.tenantOrderProductList)||void 0===k?void 0:k[0],class:"insure-info"},null,8,["product-data"]),(null===(_=o.value)||void 0===_?void 0:_.orderStatus)===l(E).PENDING?(r(),d("div",G,[b(i,{type:"primary",onClick:I(T,["stop"])},{default:g((()=>[R])),_:1},8,["onClick"]),b(i,{type:"primary",onClick:I(re,["stop"])},{default:g((()=>[J])),_:1},8,["onClick"])])):c("",!0),(null===(S=o.value)||void 0===S?void 0:S.orderStatus)===l(E).PAYING?(r(),d("div",$,[b(i,{type:"primary",onClick:I(T,["stop"])},{default:g((()=>[q])),_:1},8,["onClick"]),b(i,{type:"primary",onClick:I(de,["stop"])},{default:g((()=>[W])),_:1},8,["onClick"])])):c("",!0),(null===(x=o.value)||void 0===x?void 0:x.orderStatus)===l(E).PAYMENT_FAILED?(r(),d("div",B,[b(i,{type:"primary",onClick:I(T,["stop"])},{default:g((()=>[K])),_:1},8,["onClick"]),b(i,{type:"primary",onClick:I(de,["stop"])},{default:g((()=>[Q])),_:1},8,["onClick"])])):c("",!0),(null===(O=o.value)||void 0===O?void 0:O.orderStatus)===l(E).PAYMENT_SUCCESS?(r(),d("div",V)):c("",!0),(null===(w=o.value)||void 0===w?void 0:w.orderStatus)===l(E).ACCEPT_POLICY?(r(),d("div",X)):c("",!0),(null===(L=o.value)||void 0===L?void 0:L.orderStatus)===l(E).INSURER_REJECT?(r(),d("div",Z,[b(i,{type:"primary",onClick:I(T,["stop"])},{default:g((()=>[ee])),_:1},8,["onClick"])])):c("",!0),(null===(j=o.value)||void 0===j?void 0:j.orderStatus)===l(E).TIMEOUT?(r(),d("div",te,[b(i,{type:"primary",onClick:I(T,["stop"])},{default:g((()=>[oe])),_:1},8,["onClick"])])):c("",!0)])]})),_:1})}}});e("default",O(re,[["__scopeId","data-v-b45c4c8c"]]))}}}))}();
