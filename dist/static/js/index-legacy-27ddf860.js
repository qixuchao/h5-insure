!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.com-field-info[data-v-4e47c671]{height:1.41333rem;line-height:1.41333rem;display:flex;justify-content:space-between;font-size:.4rem;color:#393d46;margin:0 .4rem;border-bottom:1px solid #eeeff4}.com-field-info[data-v-4e47c671]:last-child{border-bottom:none}@charset "UTF-8";.page-order-detail[data-v-32d4fb96]{height:100%;background:#f2f5fc;padding:.4rem .4rem 2.4rem;overflow-y:auto}.page-order-detail .insure-info[data-v-32d4fb96]{border-radius:.26667rem;margin-top:.4rem}.page-order-detail .card[data-v-32d4fb96]{background:#fff;border-radius:.26667rem;margin-top:.4rem}.page-order-detail .card[data-v-32d4fb96]:first-child{margin-top:0}.page-order-detail .card .header[data-v-32d4fb96]{display:flex;flex:1;align-items:center}.page-order-detail .card .header .product-name[data-v-32d4fb96]{font-size:.4rem;font-weight:600;color:#333;flex:1;width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page-order-detail .card .header .company-name[data-v-32d4fb96]{flex:0 0 1.6rem;height:.53333rem;line-height:.53333rem;text-align:center;padding:0 .13333rem;background:rgba(13,110,254,.1);border-radius:.10667rem;font-size:.29333rem;color:#0d6efe;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.page-order-detail .card .status[data-v-32d4fb96]{margin-left:.4rem;font-size:.34667rem;color:#99a9c0}.page-order-detail .card .detail[data-v-32d4fb96]{font-size:.4rem;font-weight:600;color:#333;flex:1;display:flex;align-items:center}.page-order-detail .card .detail[data-v-32d4fb96]:before{content:" ";width:.10667rem;height:.37333rem;border-radius:.05333rem;background:#0d6efe;margin-right:.21333rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-6b892aaa.js","./index-legacy-e0d8ab90.js","./order-legacy-89b92b4e.js","./order-legacy-8b9c48f0.js","./InsuredPart-legacy-dd976268.js","./utils-legacy-20e4723c.js","./trial-legacy-3c02d85a.js"],(function(e){"use strict";var t,d,a,o,r,n,l,i,u,s,c,v,f,p,m,g,y,b,h,C,I,k,_,S,x,w,E,N,O,P,L;return{setters:[function(e){t=e.g,d=e.t,a=e.h,o=e.m,r=e.y,n=e.I,l=e.z,i=e.V,u=e.s,s=e.Q,c=e.aj,v=e.C,f=e.M,p=e.r,m=e.j,g=e.k,y=e.n,b=e.d,h=e.E,C=e.F,I=e.al,k=e.B,_=e.D,S=e.T},function(e){x=e._,w=e.P},function(e){E=e.a,N=e.d},function(e){O=e.O,P=e.a},function(e){L=e.I},function(){},function(){}],execute:function(){const j={class:"com-field-info"},T={class:"label"},U={class:"content"};var M=x(t({props:{label:{type:String,default:""},content:{type:String,default:""}},setup(e){const t=d();return(d,s)=>(a(),o("div",j,[r("div",T,n(e.label),1),l(t).label?i(d.$slots,"label",{key:0},void 0,!0):u("",!0),r("div",U,n(e.content),1),l(t).content?i(d.$slots,"content",{key:1},void 0,!0):u("",!0)]))}}),[["__scopeId","data-v-4e47c671"]]);const Y={class:"page-order-detail"},z={class:"card"},D={class:"header"},R={class:"product-name"},A={class:"company-name"},F={class:"status"},H={key:0,class:"footer-button"},q=k("删除"),G=k("去处理"),W={key:1,class:"footer-button"},$=k("删除"),B=k("去支付"),J={key:2,class:"footer-button"},Q=k("删除"),V=k("去支付"),K={key:3,class:"footer-button"},X={key:4,class:"footer-button"},Z={key:5,class:"footer-button"},ee=k("删除"),te={key:6,class:"footer-button"},de=k("删除"),ae=t({setup(e){const t=s(),d=c(),i=v(),k=()=>{_.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{i.value&&N(i.value.id,i.value.orderStatus).then((e=>{const{code:t,data:d}=e;"10000"===t&&S.success("删除成功")}))}))},x=()=>{if(i.value){var e,t;const{orderNo:a,id:o,saleUserId:r,tenantId:n,extInfo:{templateId:l,pageCode:u},agencyId:s,productCategory:c,venderCode:v}=i.value,f=null===(e=i.value.tenantOrderInsuredList[0])||void 0===e||null===(t=e.tenantOrderProductList[0])||void 0===t?void 0:t.productCode;d.push({path:w[u],query:{productCode:f,orderNo:a,orderId:o,agentCode:r,templateId:l,tenantId:n,productCategory:c,insurerCode:v,agencyCode:s}})}},j=()=>{if(i.value){var e,t;const{orderNo:a,id:o,saleUserId:r,tenantId:n,extInfo:{templateId:l},agencyId:u,productCategory:s,venderCode:c}=i.value,v=null===(e=i.value.tenantOrderInsuredList[0])||void 0===e||null===(t=e.tenantOrderProductList[0])||void 0===t?void 0:t.productCode;d.push({path:w.payInfo,query:{productCode:v,orderNo:a,orderId:o,saleUserId:r,templateId:l,tenantId:n,productCategory:s,insurerCode:c,agencyCode:u}})}};return f((()=>{const{query:{id:e}}=t;E(e).then((e=>{const{code:t,data:d}=e;"10000"===t&&(i.value=d)}))})),(e,t)=>{const d=p("van-button"),s=p("ProPageWrap");return a(),m(s,null,{default:g((()=>{var e,t,s,c,v,f,p,_,S,w,E,N,T,U,ae;return[r("div",Y,[r("div",z,[y(M,null,{label:g((()=>{var e,t,d,a;return[r("div",D,[r("div",R,n(null===(e=i.value)||void 0===e||null===(t=e.tenantOrderInsuredList[0])||void 0===t||null===(d=t.tenantOrderProductList[0])||void 0===d?void 0:d.productName),1),r("div",A,n(null===(a=i.value)||void 0===a?void 0:a.abbreviation),1)])]})),content:g((()=>{var e;return[r("div",F,n(i.value?l(O)[null===(e=i.value)||void 0===e?void 0:e.orderStatus]:""),1)]})),_:1}),y(M,{label:"订单号",content:null===(e=i.value)||void 0===e?void 0:e.orderNo},null,8,["content"]),y(M,{label:"创建时间",content:l(b)(null===(t=i.value)||void 0===t?void 0:t.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),y(M,{label:"投保人",content:null===(s=i.value)||void 0===s||null===(c=s.tenantOrderHolder)||void 0===c?void 0:c.name},null,8,["content"]),(a(!0),o(C,null,h((null===(v=i.value)||void 0===v?void 0:v.tenantOrderInsuredList)||[],((e,t)=>(a(),m(M,{key:t,label:"被保人",content:e.name},null,8,["content"])))),128))]),y(L,{"product-data":null===(f=i.value)||void 0===f||null===(p=f.tenantOrderInsuredList[0])||void 0===p||null===(_=p.tenantOrderProductList)||void 0===_?void 0:_[0],class:"insure-info"},null,8,["product-data"]),(null===(S=i.value)||void 0===S?void 0:S.orderStatus)===l(P).PENDING?(a(),o("div",H,[y(d,{type:"primary",onClick:I(k,["stop"])},{default:g((()=>[q])),_:1},8,["onClick"]),y(d,{type:"primary",onClick:I(x,["stop"])},{default:g((()=>[G])),_:1},8,["onClick"])])):u("",!0),(null===(w=i.value)||void 0===w?void 0:w.orderStatus)===l(P).PAYING?(a(),o("div",W,[y(d,{type:"primary",onClick:I(k,["stop"])},{default:g((()=>[$])),_:1},8,["onClick"]),y(d,{type:"primary",onClick:I(j,["stop"])},{default:g((()=>[B])),_:1},8,["onClick"])])):u("",!0),(null===(E=i.value)||void 0===E?void 0:E.orderStatus)===l(P).PAYMENT_FAILED?(a(),o("div",J,[y(d,{type:"primary",onClick:I(k,["stop"])},{default:g((()=>[Q])),_:1},8,["onClick"]),y(d,{type:"primary",onClick:I(j,["stop"])},{default:g((()=>[V])),_:1},8,["onClick"])])):u("",!0),(null===(N=i.value)||void 0===N?void 0:N.orderStatus)===l(P).PAYMENT_SUCCESS?(a(),o("div",K)):u("",!0),(null===(T=i.value)||void 0===T?void 0:T.orderStatus)===l(P).UNDERWRITE?(a(),o("div",X)):u("",!0),(null===(U=i.value)||void 0===U?void 0:U.orderStatus)===l(P).INSURER_REJECT?(a(),o("div",Z,[y(d,{type:"primary",onClick:I(k,["stop"])},{default:g((()=>[ee])),_:1},8,["onClick"])])):u("",!0),(null===(ae=i.value)||void 0===ae?void 0:ae.orderStatus)===l(P).TIMEOUT?(a(),o("div",te,[y(d,{type:"primary",onClick:I(k,["stop"])},{default:g((()=>[de])),_:1},8,["onClick"])])):u("",!0)])]})),_:1})}}});e("default",x(ae,[["__scopeId","data-v-32d4fb96"]]))}}}))}();
