!function(){var e=document.createElement("style");e.innerHTML='.com-field-info[data-v-4e47c671]{height:1.41333rem;line-height:1.41333rem;display:flex;justify-content:space-between;font-size:.4rem;color:#393d46;margin:0 .4rem;border-bottom:1px solid #eeeff4}.com-field-info[data-v-4e47c671]:last-child{border-bottom:none}.page-order-detail[data-v-32d4fb96]{height:100%;background:#f2f5fc;padding:.4rem .4rem 2.4rem;overflow-y:auto}.page-order-detail .insure-info[data-v-32d4fb96]{border-radius:.26667rem;margin-top:.4rem}.page-order-detail .card[data-v-32d4fb96]{background:#fff;border-radius:.26667rem;margin-top:.4rem}.page-order-detail .card[data-v-32d4fb96]:first-child{margin-top:0}.page-order-detail .card .header[data-v-32d4fb96]{display:flex;flex:1;align-items:center}.page-order-detail .card .header .product-name[data-v-32d4fb96]{font-size:.4rem;font-weight:600;color:#333;flex:1;width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page-order-detail .card .header .company-name[data-v-32d4fb96]{flex:0 0 1.6rem;height:.53333rem;line-height:.53333rem;text-align:center;padding:0 .13333rem;background:rgba(13,110,254,.1);border-radius:.10667rem;font-size:.29333rem;color:#0d6efe;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.page-order-detail .card .status[data-v-32d4fb96]{margin-left:.4rem;font-size:.34667rem;color:#99a9c0}.page-order-detail .card .detail[data-v-32d4fb96]{font-size:.4rem;font-weight:600;color:#333;flex:1;display:flex;align-items:center}.page-order-detail .card .detail[data-v-32d4fb96]:before{content:" ";width:.10667rem;height:.37333rem;border-radius:.05333rem;background:#0d6efe;margin-right:.21333rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-0e389512.js","./index-legacy-912a332f.js","./order-legacy-ccdeefb8.js","./order-legacy-8b9c48f0.js","./InsuredPart-legacy-cf38fd08.js","./utils-legacy-20e4723c.js","./trial-legacy-45e95a57.js"],(function(e){"use strict";var t,d,o,r,a,n,l,i,u,c,s,v,f,p,m,g,y,b,C,h,I,k,_,S,x,w,E,N,O,P,L;return{setters:[function(e){t=e.g,d=e.v,o=e.j,r=e.n,a=e.z,n=e.J,l=e.A,i=e.Z,u=e.t,c=e.P,s=e.O,v=e.E,f=e.h,p=e.r,m=e.k,g=e.m,y=e.p,b=e.d,C=e.G,h=e.F,I=e.am,k=e.C,_=e.D,S=e.T},function(e){x=e._,w=e.P},function(e){E=e.a,N=e.d},function(e){O=e.O,P=e.a},function(e){L=e.I},function(){},function(){}],execute:function(){const j={class:"com-field-info"},T={class:"label"},U={class:"content"};var Y=x(t({props:{label:{type:String,default:""},content:{type:String,default:""}},setup(e){const t=d();return(d,c)=>(o(),r("div",j,[a("div",T,n(e.label),1),l(t).label?i(d.$slots,"label",{key:0},void 0,!0):u("",!0),a("div",U,n(e.content),1),l(t).content?i(d.$slots,"content",{key:1},void 0,!0):u("",!0)]))}}),[["__scopeId","data-v-4e47c671"]]);const z={class:"page-order-detail"},D={class:"card"},M={class:"header"},A={class:"product-name"},R={class:"company-name"},H={class:"status"},q={key:0,class:"footer-button"},G=k("删除"),F=k("去处理"),J={key:1,class:"footer-button"},W=k("删除"),$=k("去支付"),Z={key:2,class:"footer-button"},B=k("删除"),K=k("去支付"),Q={key:3,class:"footer-button"},V={key:4,class:"footer-button"},X={key:5,class:"footer-button"},ee=k("删除"),te={key:6,class:"footer-button"},de=k("删除"),oe=t({setup(e){const t=c(),d=s(),i=v(),k=()=>{_.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{i.value&&N(i.value.id,i.value.orderStatus).then((e=>{const{code:t,data:d}=e;"10000"===t&&S.success("删除成功")}))}))},x=()=>{if(i.value){var e,t;const{orderNo:o,id:r,saleUserId:a,tenantId:n,extInfo:{templateId:l,pageCode:u},agencyId:c,productCategory:s,venderCode:v}=i.value,f=null===(e=i.value.tenantOrderInsuredList[0])||void 0===e||null===(t=e.tenantOrderProductList[0])||void 0===t?void 0:t.productCode;d.push({path:w[u],query:{productCode:f,orderNo:o,orderId:r,agentCode:a,templateId:l,tenantId:n,productCategory:s,insurerCode:v,agencyCode:c}})}},j=()=>{if(i.value){var e,t;const{orderNo:o,id:r,saleUserId:a,tenantId:n,extInfo:{templateId:l},agencyId:u,productCategory:c,venderCode:s}=i.value,v=null===(e=i.value.tenantOrderInsuredList[0])||void 0===e||null===(t=e.tenantOrderProductList[0])||void 0===t?void 0:t.productCode;d.push({path:w.payInfo,query:{productCode:v,orderNo:o,orderId:r,saleUserId:a,templateId:l,tenantId:n,productCategory:c,insurerCode:s,agencyCode:u}})}};return f((()=>{const{query:{id:e}}=t;E(e).then((e=>{const{code:t,data:d}=e;"10000"===t&&(i.value=d)}))})),(e,t)=>{const d=p("van-button"),c=p("ProPageWrap");return o(),m(c,null,{default:g((()=>{var e,t,c,s,v,f,p,_,S,w,E,N,T,U,oe;return[a("div",z,[a("div",D,[y(Y,null,{label:g((()=>{var e,t,d,o;return[a("div",M,[a("div",A,n(null===(e=i.value)||void 0===e||null===(t=e.tenantOrderInsuredList[0])||void 0===t||null===(d=t.tenantOrderProductList[0])||void 0===d?void 0:d.productName),1),a("div",R,n(null===(o=i.value)||void 0===o?void 0:o.abbreviation),1)])]})),content:g((()=>{var e;return[a("div",H,n(i.value?l(O)[null===(e=i.value)||void 0===e?void 0:e.orderStatus]:""),1)]})),_:1}),y(Y,{label:"订单号",content:null===(e=i.value)||void 0===e?void 0:e.orderNo},null,8,["content"]),y(Y,{label:"创建时间",content:l(b)(null===(t=i.value)||void 0===t?void 0:t.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),y(Y,{label:"投保人",content:null===(c=i.value)||void 0===c||null===(s=c.tenantOrderHolder)||void 0===s?void 0:s.name},null,8,["content"]),(o(!0),r(h,null,C((null===(v=i.value)||void 0===v?void 0:v.tenantOrderInsuredList)||[],((e,t)=>(o(),m(Y,{key:t,label:"被保人",content:e.name},null,8,["content"])))),128))]),y(L,{"product-data":null===(f=i.value)||void 0===f||null===(p=f.tenantOrderInsuredList[0])||void 0===p||null===(_=p.tenantOrderProductList)||void 0===_?void 0:_[0],class:"insure-info"},null,8,["product-data"]),(null===(S=i.value)||void 0===S?void 0:S.orderStatus)===l(P).PENDING?(o(),r("div",q,[y(d,{type:"primary",onClick:I(k,["stop"])},{default:g((()=>[G])),_:1},8,["onClick"]),y(d,{type:"primary",onClick:I(x,["stop"])},{default:g((()=>[F])),_:1},8,["onClick"])])):u("",!0),(null===(w=i.value)||void 0===w?void 0:w.orderStatus)===l(P).PAYING?(o(),r("div",J,[y(d,{type:"primary",onClick:I(k,["stop"])},{default:g((()=>[W])),_:1},8,["onClick"]),y(d,{type:"primary",onClick:I(j,["stop"])},{default:g((()=>[$])),_:1},8,["onClick"])])):u("",!0),(null===(E=i.value)||void 0===E?void 0:E.orderStatus)===l(P).PAYMENT_FAILED?(o(),r("div",Z,[y(d,{type:"primary",onClick:I(k,["stop"])},{default:g((()=>[B])),_:1},8,["onClick"]),y(d,{type:"primary",onClick:I(j,["stop"])},{default:g((()=>[K])),_:1},8,["onClick"])])):u("",!0),(null===(N=i.value)||void 0===N?void 0:N.orderStatus)===l(P).PAYMENT_SUCCESS?(o(),r("div",Q)):u("",!0),(null===(T=i.value)||void 0===T?void 0:T.orderStatus)===l(P).UNDERWRITE?(o(),r("div",V)):u("",!0),(null===(U=i.value)||void 0===U?void 0:U.orderStatus)===l(P).INSURER_REJECT?(o(),r("div",X,[y(d,{type:"primary",onClick:I(k,["stop"])},{default:g((()=>[ee])),_:1},8,["onClick"])])):u("",!0),(null===(oe=i.value)||void 0===oe?void 0:oe.orderStatus)===l(P).TIMEOUT?(o(),r("div",te,[y(d,{type:"primary",onClick:I(k,["stop"])},{default:g((()=>[de])),_:1},8,["onClick"])])):u("",!0)])]})),_:1})}}});e("default",x(oe,[["__scopeId","data-v-32d4fb96"]]))}}}))}();
