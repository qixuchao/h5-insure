!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.com-field-info[data-v-4e47c671]{height:1.41333rem;line-height:1.41333rem;display:flex;justify-content:space-between;font-size:.4rem;color:#393d46;margin:0 .4rem;border-bottom:1px solid #eeeff4}.com-field-info[data-v-4e47c671]:last-child{border-bottom:none}@charset "UTF-8";.page-order-detail[data-v-4dabdf79]{height:100%;background:#f2f5fc;padding:.4rem .4rem 2.4rem;overflow-y:auto}.page-order-detail .card[data-v-4dabdf79]{background:#fff;border-radius:.26667rem;margin-top:.4rem}.page-order-detail .card[data-v-4dabdf79]:first-child{margin-top:0}.page-order-detail .card .header[data-v-4dabdf79]{display:flex;flex:1;align-items:center}.page-order-detail .card .header .product-name[data-v-4dabdf79]{font-size:.4rem;font-weight:600;color:#333;flex:1;width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page-order-detail .card .header .company-name[data-v-4dabdf79]{flex:0 0 1.46667rem;height:.53333rem;line-height:.53333rem;text-align:center;padding:0 .13333rem;background:rgba(13,110,254,.1);border-radius:.10667rem;font-size:.29333rem;color:#0d6efe;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.page-order-detail .card .status[data-v-4dabdf79]{margin-left:.4rem;font-size:.34667rem;color:#99a9c0}.page-order-detail .card .detail[data-v-4dabdf79]{font-size:.4rem;font-weight:600;color:#333;flex:1;display:flex;align-items:center}.page-order-detail .card .detail[data-v-4dabdf79]:before{content:" ";width:.10667rem;height:.37333rem;border-radius:.05333rem;background:#0d6efe;margin-right:.21333rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-5e9afa06.js","./index-legacy-741f2f82.js","./order-legacy-e7b51179.js","./utils-legacy-20e4723c.js"],(function(e){"use strict";var t,a,d,o,l,r,n,i,s,c,u,v,f,p,m,b,y,g,h,k,I,C,_,x,S,w,N,E,O,P,T,U;return{setters:[function(e){t=e.g,a=e.t,d=e.h,o=e.m,l=e.y,r=e.I,n=e.z,i=e.V,s=e.s,c=e.Q,u=e.af,v=e.C,f=e.M,p=e.r,m=e.j,b=e.k,y=e.n,g=e.d,h=e.E,k=e.F,I=e.ah,C=e.a1,_=e.a2,x=e.B,S=e.D,w=e.T},function(e){N=e._,E=e.P},function(e){O=e.b,P=e.O,T=e.a,U=e.d},function(){}],execute:function(){const L={class:"com-field-info"},D={class:"label"},M={class:"content"};var Y=N(t({props:{label:{type:String,default:""},content:{type:String,default:""}},setup(e){const t=a();return(a,c)=>(d(),o("div",L,[l("div",D,r(e.label),1),n(t).label?i(a.$slots,"label",{key:0},void 0,!0):s("",!0),l("div",M,r(e.content),1),n(t).content?i(a.$slots,"content",{key:1},void 0,!0):s("",!0)]))}}),[["__scopeId","data-v-4e47c671"]]);const j={class:"page-order-detail"},z={class:"card"},R={class:"header"},A={class:"product-name"},F={class:"company-name"},H={class:"status"},q={class:"card"},G=(e=>(C("data-v-4dabdf79"),e=e(),_(),e))((()=>l("div",{class:"detail"},"保障信息",-1))),W={key:0,class:"footer-button"},$=x("删除"),B=x("去处理"),J={key:1,class:"footer-button"},Q=x("删除"),V=x("去支付"),K={key:2,class:"footer-button"},X=x("删除"),Z=x("去支付"),ee={key:3,class:"footer-button"},te={key:4,class:"footer-button"},ae={key:5,class:"footer-button"},de=x("删除"),oe={key:6,class:"footer-button"},le=x("删除"),re=t({setup(e){const t=c(),a=u(),i=v(),C=()=>{S.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{U(i.value.id).then((e=>{const{code:t,data:a}=e;"10000"===t&&w.success("删除成功")}))}))},_=()=>{if(i.value){var e,t;const{orderNo:d,id:o,saleUserId:l,tenantId:r,extInfo:{templateId:n,pageCode:s}}=i.value,c=null===(e=i.value.tenantOrderInsuredList[0])||void 0===e||null===(t=e.tenantOrderProductList[0])||void 0===t?void 0:t.productCode;a.push({path:E[s],query:{productCode:c,orderNo:d,orderId:o,saleUserId:l,templateId:n,tenantId:r}})}},x=()=>{if(i.value){var e,t;const{orderNo:d,id:o,saleUserId:l,tenantId:r,extInfo:{templateId:n}}=i.value,s=null===(e=i.value.tenantOrderInsuredList[0])||void 0===e||null===(t=e.tenantOrderProductList[0])||void 0===t?void 0:t.productCode;a.push({path:E.payInfo,query:{productCode:s,orderNo:d,orderId:o,saleUserId:l,templateId:n,tenantId:r}})}};return f((()=>{const{query:{id:e}}=t;O(e).then((e=>{const{code:t,data:a}=e;"10000"===t&&(i.value=a)}))})),(e,t)=>{const a=p("van-button"),c=p("ProPageWrap");return d(),m(c,null,{default:b((()=>{var e,t,c,u,v,f,p,S,w,N,E,O;return[l("div",j,[l("div",z,[y(Y,null,{label:b((()=>{var e,t,a,d;return[l("div",R,[l("div",A,r(null===(e=i.value)||void 0===e||null===(t=e.tenantOrderInsuredList[0])||void 0===t||null===(a=t.tenantOrderProductList[0])||void 0===a?void 0:a.productName),1),l("div",F,r(null===(d=i.value)||void 0===d?void 0:d.venderName),1)])]})),content:b((()=>{var e;return[l("div",H,r(i.value?n(P)[null===(e=i.value)||void 0===e?void 0:e.orderStatus]:""),1)]})),_:1}),y(Y,{label:"订单号",content:null===(e=i.value)||void 0===e?void 0:e.orderNo},null,8,["content"]),y(Y,{label:"投保时间",content:n(g)(null===(t=i.value)||void 0===t?void 0:t.orderDate).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),y(Y,{label:"投保人",content:null===(c=i.value)||void 0===c||null===(u=c.tenantOrderHolder)||void 0===u?void 0:u.name},null,8,["content"]),(d(!0),o(k,null,h((null===(v=i.value)||void 0===v?void 0:v.tenantOrderInsuredList)||[],((e,t)=>(d(),m(Y,{key:t,label:"被保人",content:e.name},null,8,["content"])))),128))]),l("div",q,[y(Y,null,{label:b((()=>[G])),_:1}),y(Y,{label:"险种名称",content:"横琴一号终身重大疾病保险"}),y(Y,{label:"保障期间",content:"终身"}),y(Y,{label:"交费期间",content:"20年"}),y(Y,{label:"交费方式",content:"年交"}),y(Y,{label:"附加豁免保险费重大疾病保险",content:"投保"}),y(Y,{label:"保障金额",content:"¥100,000.00"}),y(Y,{label:"首期保费",content:"¥10,000.00"})]),(null===(f=i.value)||void 0===f?void 0:f.orderStatus)===n(T).PENDING?(d(),o("div",W,[y(a,{type:"primary",onClick:I(C,["stop"])},{default:b((()=>[$])),_:1},8,["onClick"]),y(a,{type:"primary",onClick:I(_,["stop"])},{default:b((()=>[B])),_:1},8,["onClick"])])):s("",!0),(null===(p=i.value)||void 0===p?void 0:p.orderStatus)===n(T).PAYING?(d(),o("div",J,[y(a,{type:"primary",onClick:I(C,["stop"])},{default:b((()=>[Q])),_:1},8,["onClick"]),y(a,{type:"primary",onClick:I(x,["stop"])},{default:b((()=>[V])),_:1},8,["onClick"])])):s("",!0),(null===(S=i.value)||void 0===S?void 0:S.orderStatus)===n(T).PAYMENT_FAILED?(d(),o("div",K,[y(a,{type:"primary",onClick:I(C,["stop"])},{default:b((()=>[X])),_:1},8,["onClick"]),y(a,{type:"primary",onClick:I(x,["stop"])},{default:b((()=>[Z])),_:1},8,["onClick"])])):s("",!0),(null===(w=i.value)||void 0===w?void 0:w.orderStatus)===n(T).PAYMENT_SUCCESS?(d(),o("div",ee)):s("",!0),(null===(N=i.value)||void 0===N?void 0:N.orderStatus)===n(T).UNDERWRITE?(d(),o("div",te)):s("",!0),(null===(E=i.value)||void 0===E?void 0:E.orderStatus)===n(T).INSURER_REJECT?(d(),o("div",ae,[y(a,{type:"primary",onClick:I(C,["stop"])},{default:b((()=>[de])),_:1},8,["onClick"])])):s("",!0),(null===(O=i.value)||void 0===O?void 0:O.orderStatus)===n(T).TIMEOUT?(d(),o("div",oe,[y(a,{type:"primary",onClick:I(C,["stop"])},{default:b((()=>[le])),_:1},8,["onClick"])])):s("",!0)])]})),_:1})}}});e("default",N(re,[["__scopeId","data-v-4dabdf79"]]))}}}))}();
