!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.com-field-info[data-v-4e47c671]{height:1.41333rem;line-height:1.41333rem;display:flex;justify-content:space-between;font-size:.4rem;color:#393d46;margin:0 .4rem;border-bottom:1px solid #eeeff4}.com-field-info[data-v-4e47c671]:last-child{border-bottom:none}@charset "UTF-8";.page-order-detail[data-v-4dabdf79]{height:100%;background:#f2f5fc;padding:.4rem .4rem 2.4rem;overflow-y:auto}.page-order-detail .card[data-v-4dabdf79]{background:#fff;border-radius:.26667rem;margin-top:.4rem}.page-order-detail .card[data-v-4dabdf79]:first-child{margin-top:0}.page-order-detail .card .header[data-v-4dabdf79]{display:flex;flex:1;align-items:center}.page-order-detail .card .header .product-name[data-v-4dabdf79]{font-size:.4rem;font-weight:600;color:#333;flex:1;width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page-order-detail .card .header .company-name[data-v-4dabdf79]{flex:0 0 1.46667rem;height:.53333rem;line-height:.53333rem;text-align:center;padding:0 .13333rem;background:rgba(13,110,254,.1);border-radius:.10667rem;font-size:.29333rem;color:#0d6efe;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.page-order-detail .card .status[data-v-4dabdf79]{margin-left:.4rem;font-size:.34667rem;color:#99a9c0}.page-order-detail .card .detail[data-v-4dabdf79]{font-size:.4rem;font-weight:600;color:#333;flex:1;display:flex;align-items:center}.page-order-detail .card .detail[data-v-4dabdf79]:before{content:" ";width:.10667rem;height:.37333rem;border-radius:.05333rem;background:#0d6efe;margin-right:.21333rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-388e7174.js","./index-legacy-a1d66b6e.js","./order-legacy-9d18bad5.js","./order-legacy-c647c956.js","./utils-legacy-20e4723c.js"],(function(e){"use strict";var t,a,d,o,r,l,n,i,c,s,u,v,f,p,m,b,g,y,h,k,I,C,_,x,S,w,N,E,O,P,T,U;return{setters:[function(e){t=e.g,a=e.a0,d=e.o,o=e.i,r=e.j,l=e.J,n=e.k,i=e.a1,c=e.O,s=e.v,u=e.K,v=e.r,f=e.p,p=e.A,m=e.E,b=e.B,g=e.t,y=e.d,h=e.F,k=e.G,I=e.W,C=e.P,_=e.Q,x=e.H,S=e.D,w=e.T},function(e){N=e._,E=e.P},function(e){O=e.a,P=e.d},function(e){T=e.O,U=e.a},function(){}],execute:function(){const L={class:"com-field-info"},j={class:"label"},D={class:"content"};var Y=N(t({props:{label:{type:String,default:""},content:{type:String,default:""}},setup(e){const t=a();return(a,s)=>(d(),o("div",L,[r("div",j,l(e.label),1),n(t).label?i(a.$slots,"label",{key:0},void 0,!0):c("",!0),r("div",D,l(e.content),1),n(t).content?i(a.$slots,"content",{key:1},void 0,!0):c("",!0)]))}}),[["__scopeId","data-v-4e47c671"]]);const M={class:"page-order-detail"},z={class:"card"},A={class:"header"},H={class:"product-name"},R={class:"company-name"},F={class:"status"},q={class:"card"},G=(e=>(C("data-v-4dabdf79"),e=e(),_(),e))((()=>r("div",{class:"detail"},"保障信息",-1))),W={key:0,class:"footer-button"},J=x("删除"),$=x("去处理"),B={key:1,class:"footer-button"},K=x("删除"),Q=x("去支付"),V={key:2,class:"footer-button"},X=x("删除"),Z=x("去支付"),ee={key:3,class:"footer-button"},te={key:4,class:"footer-button"},ae={key:5,class:"footer-button"},de=x("删除"),oe={key:6,class:"footer-button"},re=x("删除"),le=t({setup(e){const t=s(),a=u(),i=v(),C=()=>{S.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{P(i.value.id).then((e=>{const{code:t,data:a}=e;"10000"===t&&w.success("删除成功")}))}))},_=()=>{if(i.value){var e,t;const{orderNo:d,id:o,saleUserId:r,tenantId:l,extInfo:{templateId:n,pageCode:c}}=i.value,s=null===(e=i.value.tenantOrderInsuredList[0])||void 0===e||null===(t=e.tenantOrderProductList[0])||void 0===t?void 0:t.productCode;a.push({path:E[c],query:{productCode:s,orderNo:d,orderId:o,saleUserId:r,templateId:n,tenantId:l}})}},x=()=>{if(i.value){var e,t;const{orderNo:d,id:o,saleUserId:r,tenantId:l,extInfo:{templateId:n}}=i.value,c=null===(e=i.value.tenantOrderInsuredList[0])||void 0===e||null===(t=e.tenantOrderProductList[0])||void 0===t?void 0:t.productCode;a.push({path:E.payInfo,query:{productCode:c,orderNo:d,orderId:o,saleUserId:r,templateId:n,tenantId:l}})}};return f((()=>{const{query:{id:e}}=t;O(e).then((e=>{const{code:t,data:a}=e;"10000"===t&&(i.value=a)}))})),(e,t)=>{const a=p("van-button"),s=p("ProPageWrap");return d(),m(s,null,{default:b((()=>{var e,t,s,u,v,f,p,S,w,N,E,O;return[r("div",M,[r("div",z,[g(Y,null,{label:b((()=>{var e,t,a,d;return[r("div",A,[r("div",H,l(null===(e=i.value)||void 0===e||null===(t=e.tenantOrderInsuredList[0])||void 0===t||null===(a=t.tenantOrderProductList[0])||void 0===a?void 0:a.productName),1),r("div",R,l(null===(d=i.value)||void 0===d?void 0:d.venderName),1)])]})),content:b((()=>{var e;return[r("div",F,l(i.value?n(T)[null===(e=i.value)||void 0===e?void 0:e.orderStatus]:""),1)]})),_:1}),g(Y,{label:"订单号",content:null===(e=i.value)||void 0===e?void 0:e.orderNo},null,8,["content"]),g(Y,{label:"投保时间",content:n(y)(null===(t=i.value)||void 0===t?void 0:t.orderDate).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),g(Y,{label:"投保人",content:null===(s=i.value)||void 0===s||null===(u=s.tenantOrderHolder)||void 0===u?void 0:u.name},null,8,["content"]),(d(!0),o(k,null,h((null===(v=i.value)||void 0===v?void 0:v.tenantOrderInsuredList)||[],((e,t)=>(d(),m(Y,{key:t,label:"被保人",content:e.name},null,8,["content"])))),128))]),r("div",q,[g(Y,null,{label:b((()=>[G])),_:1}),g(Y,{label:"险种名称",content:"横琴一号终身重大疾病保险"}),g(Y,{label:"保障期间",content:"终身"}),g(Y,{label:"交费期间",content:"20年"}),g(Y,{label:"交费方式",content:"年交"}),g(Y,{label:"附加豁免保险费重大疾病保险",content:"投保"}),g(Y,{label:"保障金额",content:"¥100,000.00"}),g(Y,{label:"首期保费",content:"¥10,000.00"})]),(null===(f=i.value)||void 0===f?void 0:f.orderStatus)===n(U).PENDING?(d(),o("div",W,[g(a,{type:"primary",onClick:I(C,["stop"])},{default:b((()=>[J])),_:1},8,["onClick"]),g(a,{type:"primary",onClick:I(_,["stop"])},{default:b((()=>[$])),_:1},8,["onClick"])])):c("",!0),(null===(p=i.value)||void 0===p?void 0:p.orderStatus)===n(U).PAYING?(d(),o("div",B,[g(a,{type:"primary",onClick:I(C,["stop"])},{default:b((()=>[K])),_:1},8,["onClick"]),g(a,{type:"primary",onClick:I(x,["stop"])},{default:b((()=>[Q])),_:1},8,["onClick"])])):c("",!0),(null===(S=i.value)||void 0===S?void 0:S.orderStatus)===n(U).PAYMENT_FAILED?(d(),o("div",V,[g(a,{type:"primary",onClick:I(C,["stop"])},{default:b((()=>[X])),_:1},8,["onClick"]),g(a,{type:"primary",onClick:I(x,["stop"])},{default:b((()=>[Z])),_:1},8,["onClick"])])):c("",!0),(null===(w=i.value)||void 0===w?void 0:w.orderStatus)===n(U).PAYMENT_SUCCESS?(d(),o("div",ee)):c("",!0),(null===(N=i.value)||void 0===N?void 0:N.orderStatus)===n(U).UNDERWRITE?(d(),o("div",te)):c("",!0),(null===(E=i.value)||void 0===E?void 0:E.orderStatus)===n(U).INSURER_REJECT?(d(),o("div",ae,[g(a,{type:"primary",onClick:I(C,["stop"])},{default:b((()=>[de])),_:1},8,["onClick"])])):c("",!0),(null===(O=i.value)||void 0===O?void 0:O.orderStatus)===n(U).TIMEOUT?(d(),o("div",oe,[g(a,{type:"primary",onClick:I(C,["stop"])},{default:b((()=>[re])),_:1},8,["onClick"])])):c("",!0)])]})),_:1})}}});e("default",N(le,[["__scopeId","data-v-4dabdf79"]]))}}}))}();
