!function(){var e=document.createElement("style");e.innerHTML='.com-field-info[data-v-67c490df]{height:1.41333rem;line-height:1.41333rem;display:flex;justify-content:space-between;font-size:.4rem;color:#393d46;margin:0 .4rem;border-bottom:1px solid #EEEFF4}.com-field-info[data-v-67c490df]:last-child{border-bottom:none}.page-order-detail[data-v-95da7406]{height:100%;background:var(--zaui-global-bg, #f2f5fc);padding:.4rem .4rem 2.4rem;overflow-y:auto}.page-order-detail .insure-info[data-v-95da7406]{border-radius:.26667rem;margin-top:.4rem}.page-order-detail .card[data-v-95da7406]{background:#fff;border-radius:.26667rem;margin-top:.4rem}.page-order-detail .card[data-v-95da7406]:first-child{margin-top:0}.page-order-detail .card .header[data-v-95da7406]{display:flex;flex:1;align-items:center}.page-order-detail .card .header .product-name[data-v-95da7406]{font-size:.4rem;font-weight:600;color:#333;flex:1;width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page-order-detail .card .header .company-name[data-v-95da7406]{flex:0 0 1.6rem;height:.53333rem;line-height:.53333rem;text-align:center;padding:0 .13333rem;background:rgba(13,110,254,.1);border-radius:.10667rem;font-size:.29333rem;color:var(--zaui-brand, #0d6efe);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.page-order-detail .card .status[data-v-95da7406]{margin-left:.4rem;font-size:.34667rem;color:#99a9c0}.page-order-detail .card .detail[data-v-95da7406]{font-size:.4rem;font-weight:600;color:#333;flex:1;display:flex;align-items:center}.page-order-detail .card .detail[data-v-95da7406]:before{content:" ";width:.10667rem;height:.37333rem;border-radius:.05333rem;background:var(--zaui-brand, #0d6efe);margin-right:.21333rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-f617ad76.js","./order-legacy-250dae49.js","./index-legacy-a503c237.js","./order-legacy-c2bcb521.js","./InsuredPart-legacy-abd57156.js","./trial-legacy-d771ee07.js"],(function(e){"use strict";var t,a,d,o,r,n,l,i,u,c,s,v,p,f,m,g,y,b,C,h,I,k,_,x,S,E,w,L,O,P,N;return{setters:[function(e){t=e.h,a=e.x,d=e.k,o=e.p,r=e.A,n=e.L,l=e.B,i=e.Z,u=e.v,c=e.P,s=e.aa,v=e.G,p=e.j,f=e.r,m=e.m,g=e.n,y=e.s,b=e.d,C=e.H,h=e.F,I=e.ac,k=e.E,_=e.D,x=e.T},function(e){S=e.d},function(e){E=e._,w=e.g,L=e.p},function(e){O=e.O,P=e.a},function(e){N=e.I},function(){}],execute:function(){const j={class:"com-field-info"},z={class:"label"},T={class:"content"};var Y=E(t({props:{label:{type:String,default:""},content:{type:String,default:""}},setup(e){const t=a();return(a,c)=>(d(),o("div",j,[r("div",z,n(e.label),1),l(t).label?i(a.$slots,"label",{key:0},void 0,!0):u("",!0),r("div",T,n(e.content),1),l(t).content?i(a.$slots,"content",{key:1},void 0,!0):u("",!0)]))}}),[["__scopeId","data-v-67c490df"]]);const A={class:"page-order-detail"},M={class:"card"},D={class:"header"},F={class:"product-name"},H={class:"company-name"},U={class:"status"},G={key:0,class:"footer-button"},R=k("删除"),$=k("去处理"),q={key:1,class:"footer-button"},B=k("删除"),J=k("去支付"),W={key:2,class:"footer-button"},Z=k("删除"),K=k("去支付"),Q={key:3,class:"footer-button"},V={key:4,class:"footer-button"},X={key:5,class:"footer-button"},ee=k("删除"),te={key:6,class:"footer-button"},ae=k("删除"),de=t({setup(e){const t=c();s();const a=v(),{query:{orderNo:i,agentCode:k,tenantId:E,abbreviation:j,productCategory:z}}=t,T=()=>{_.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{a.value&&S(a.value.id,a.value.orderStatus).then((e=>{const{code:t,data:a}=e;"10000"===t&&x.success("删除成功")}))}))},de=()=>{if(a.value){var e,t;const{id:d,extInfo:{templateId:o,pageCode:r},agencyId:n,venderCode:l}=a.value,u=null===(e=a.value.tenantOrderInsuredList[0])||void 0===e||null===(t=e.tenantOrderProductList[0])||void 0===t?void 0:t.productCode;L(r,{productCode:u,orderNo:i,orderId:d,agentCode:k,templateId:o,tenantId:E,productCategory:z,insurerCode:l,agencyCode:n,isFromOrderList:"1"})}},oe=()=>{if(a.value){var e,t;const{id:d,saleUserId:o,extInfo:{templateId:r},agencyId:n,venderCode:l}=a.value,u=null===(e=a.value.tenantOrderInsuredList[0])||void 0===e||null===(t=e.tenantOrderProductList[0])||void 0===t?void 0:t.productCode;L("payInfo",{productCode:u,orderNo:i,orderId:d,saleUserId:o,templateId:r,tenantId:E,productCategory:z,insurerCode:l,agencyCode:n})}};return p((()=>{w({orderNo:i,agentCode:k,tenantId:E}).then((e=>{const{code:t,data:d}=e;"10000"===t&&(a.value=d)}))})),(e,t)=>{const i=f("van-button"),c=f("ProPageWrap");return d(),m(c,null,{default:g((()=>{var e,t,c,s,v,p,f,k,_,x,S,E,w,L,j;return[r("div",A,[r("div",M,[y(Y,null,{label:g((()=>{var e,t,d,o;return[r("div",D,[r("div",F,n(null===(e=a.value)||void 0===e||null===(t=e.tenantOrderInsuredList[0])||void 0===t||null===(d=t.tenantOrderProductList[0])||void 0===d?void 0:d.productName),1),r("div",H,n(null===(o=a.value)||void 0===o?void 0:o.abbreviation),1)])]})),content:g((()=>{var e;return[r("div",U,n(a.value?l(O)[null===(e=a.value)||void 0===e?void 0:e.orderStatus]:""),1)]})),_:1}),y(Y,{label:"订单号",content:null===(e=a.value)||void 0===e?void 0:e.orderNo},null,8,["content"]),y(Y,{label:"创建时间",content:l(b)(null===(t=a.value)||void 0===t?void 0:t.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),y(Y,{label:"投保人",content:null===(c=a.value)||void 0===c||null===(s=c.tenantOrderHolder)||void 0===s?void 0:s.name},null,8,["content"]),(d(!0),o(h,null,C((null===(v=a.value)||void 0===v?void 0:v.tenantOrderInsuredList)||[],((e,t)=>(d(),m(Y,{key:t,label:"被保人",content:e.name},null,8,["content"])))),128))]),y(N,{"product-data":null===(p=a.value)||void 0===p||null===(f=p.tenantOrderInsuredList[0])||void 0===f||null===(k=f.tenantOrderProductList)||void 0===k?void 0:k[0],class:"insure-info"},null,8,["product-data"]),(null===(_=a.value)||void 0===_?void 0:_.orderStatus)===l(P).PENDING?(d(),o("div",G,[y(i,{type:"primary",onClick:I(T,["stop"])},{default:g((()=>[R])),_:1},8,["onClick"]),y(i,{type:"primary",onClick:I(de,["stop"])},{default:g((()=>[$])),_:1},8,["onClick"])])):u("",!0),(null===(x=a.value)||void 0===x?void 0:x.orderStatus)===l(P).PAYING?(d(),o("div",q,[y(i,{type:"primary",onClick:I(T,["stop"])},{default:g((()=>[B])),_:1},8,["onClick"]),y(i,{type:"primary",onClick:I(oe,["stop"])},{default:g((()=>[J])),_:1},8,["onClick"])])):u("",!0),(null===(S=a.value)||void 0===S?void 0:S.orderStatus)===l(P).PAYMENT_FAILED?(d(),o("div",W,[y(i,{type:"primary",onClick:I(T,["stop"])},{default:g((()=>[Z])),_:1},8,["onClick"]),y(i,{type:"primary",onClick:I(oe,["stop"])},{default:g((()=>[K])),_:1},8,["onClick"])])):u("",!0),(null===(E=a.value)||void 0===E?void 0:E.orderStatus)===l(P).PAYMENT_SUCCESS?(d(),o("div",Q)):u("",!0),(null===(w=a.value)||void 0===w?void 0:w.orderStatus)===l(P).ACCEPT_POLICY?(d(),o("div",V)):u("",!0),(null===(L=a.value)||void 0===L?void 0:L.orderStatus)===l(P).INSURER_REJECT?(d(),o("div",X,[y(i,{type:"primary",onClick:I(T,["stop"])},{default:g((()=>[ee])),_:1},8,["onClick"])])):u("",!0),(null===(j=a.value)||void 0===j?void 0:j.orderStatus)===l(P).TIMEOUT?(d(),o("div",te,[y(i,{type:"primary",onClick:I(T,["stop"])},{default:g((()=>[ae])),_:1},8,["onClick"])])):u("",!0)])]})),_:1})}}});e("default",E(de,[["__scopeId","data-v-95da7406"]]))}}}))}();
