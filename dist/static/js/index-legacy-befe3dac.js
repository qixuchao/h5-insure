!function(){var e=document.createElement("style");e.innerHTML='.com-field-info[data-v-67c490df]{height:1.41333rem;line-height:1.41333rem;display:flex;justify-content:space-between;font-size:.4rem;color:#393d46;margin:0 .4rem;border-bottom:1px solid #EEEFF4}.com-field-info[data-v-67c490df]:last-child{border-bottom:none}.page-order-detail[data-v-0ecf33c4]{height:100%;background:var(--zaui-global-bg, #f2f5fc);padding:.4rem .4rem 2.4rem;overflow-y:auto}.page-order-detail .insure-info[data-v-0ecf33c4]{border-radius:.26667rem;margin-top:.4rem}.page-order-detail .card[data-v-0ecf33c4]{background:#fff;border-radius:.26667rem;margin-top:.4rem}.page-order-detail .card[data-v-0ecf33c4]:first-child{margin-top:0}.page-order-detail .card .header[data-v-0ecf33c4]{display:flex;flex:1;align-items:center}.page-order-detail .card .header .product-name[data-v-0ecf33c4]{font-size:.4rem;font-weight:600;color:#333;flex:1;width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page-order-detail .card .header .company-name[data-v-0ecf33c4]{flex:0 0 1.6rem;height:.53333rem;line-height:.53333rem;text-align:center;padding:0 .13333rem;background:rgba(13,110,254,.1);border-radius:.10667rem;font-size:.29333rem;color:var(--zaui-brand, #0d6efe);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.page-order-detail .card .status[data-v-0ecf33c4]{margin-left:.4rem;font-size:.34667rem;color:#99a9c0}.page-order-detail .card .detail[data-v-0ecf33c4]{font-size:.4rem;font-weight:600;color:#333;flex:1;display:flex;align-items:center}.page-order-detail .card .detail[data-v-0ecf33c4]:before{content:" ";width:.10667rem;height:.37333rem;border-radius:.05333rem;background:var(--zaui-brand, #0d6efe);margin-right:.21333rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-7cfa1af5.js","./order-legacy-d33ba767.js","./index-legacy-65414b08.js","./order-legacy-470125e3.js","./InsuredPart-legacy-afb50468.js","./utils-legacy-20e4723c.js","./trial-legacy-4f893848.js"],(function(e){"use strict";var t,r,a,d,o,n,l,i,c,u,s,v,f,p,g,m,y,b,h,C,I,k,O,x,L,w,N,P,_,S,Y,j,z;return{setters:[function(e){t=e.g,r=e.v,a=e.j,d=e.n,o=e.z,n=e.J,l=e.A,i=e.Y,c=e.t,u=e.O,s=e.a9,v=e.E,f=e.h,p=e.r,g=e.k,m=e.m,y=e.p,b=e.d,h=e.F,C=e.G,I=e.ab,k=e.C,O=e.D,x=e.T},function(e){L=e.d},function(e){w=e._,N=e.g,P=e.q,_=e.ac},function(e){S=e.O,Y=e.b,j=e.a},function(e){z=e.I},function(){},function(){}],execute:function(){const E={class:"com-field-info"},D={class:"label"},T={class:"content"};var G=w(t({props:{label:{type:String,default:""},content:{type:String,default:""}},setup(e){const t=r();return(r,u)=>(a(),d("div",E,[o("div",D,n(e.label),1),l(t).label?i(r.$slots,"label",{key:0},void 0,!0):c("",!0),o("div",T,n(e.content),1),l(t).content?i(r.$slots,"content",{key:1},void 0,!0):c("",!0)]))}}),[["__scopeId","data-v-67c490df"]]);const F={key:0,class:"page-order-detail"},H={class:"card"},M={class:"header"},q={class:"product-name"},A={class:"company-name"},U={class:"status"},W={key:0,class:"footer-button"},B=k("删除"),X=k("去处理"),Z={key:1,class:"footer-button"},$=k("删除"),J=k("去支付"),K={key:2,class:"footer-button"},Q=k("删除"),R=t({setup(e){const t=u(),r=s(),i=v(),{query:{orderNo:k,agentCode:w,tenantId:E,abbreviation:D,productCategory:T}}=t,R=()=>{O.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{i.value&&L(i.value.id,i.value.orderStatus).then((e=>{const{code:t,data:r}=e;"10000"===t&&x.success("删除成功")}))}))},V=()=>{var e,t;if(!i.value)return!1;const{agencyId:a,saleChannelId:d,orderStatus:o}=i.value,n=null===(e=i.value.tenantOrderInsuredList[0])||void 0===e||null===(t=e.tenantOrderProductList[0])||void 0===t?void 0:t.productCode;if(!(j.PENDING!==o&&j.PAYING!==o||n!==_.ZXYS&&n!==_.BWYL)){const e={[_.ZXYS]:"/internet/productDetail/package",[_.BWYL]:"/internet/productDetail"};return r.push({path:e[n],query:{productCode:n,saleChannelId:d,agentCode:w,tenantId:E,agencyCode:a,orderNo:k}}),!0}return!1},ee=()=>{if(i.value){var e,t;if(V())return;const{id:r,extInfo:{templateId:a,pageCode:d},agencyId:o,venderCode:n}=i.value,l=null===(e=i.value.tenantOrderInsuredList[0])||void 0===e||null===(t=e.tenantOrderProductList[0])||void 0===t?void 0:t.productCode;P(d,{productCode:l,orderNo:k,orderId:r,agentCode:w,templateId:a,tenantId:E,productCategory:T,insurerCode:n,agencyCode:o,isFromOrderList:"1"})}},te=()=>{if(i.value){var e,t;if(V())return;const{id:r,saleUserId:a,extInfo:{templateId:d},agencyId:o,venderCode:n}=i.value,l=null===(e=i.value.tenantOrderInsuredList[0])||void 0===e||null===(t=e.tenantOrderProductList[0])||void 0===t?void 0:t.productCode;P("payInfo",{productCode:l,orderNo:k,orderId:r,saleUserId:a,templateId:d,tenantId:E,productCategory:T,insurerCode:n,agencyCode:o})}};return f((()=>{N({orderNo:k,agentCode:w,tenantId:E}).then((e=>{const{code:t,data:r}=e;"10000"===t&&(i.value=r)}))})),(e,t)=>{const r=p("van-button"),u=p("ProPageWrap");return a(),g(u,null,{default:m((()=>{var e,t,u,s,v,f,p,k,O,x,L;return[i.value?(a(),d("div",F,[o("div",H,[y(G,null,{label:m((()=>{var e,t,r,a;return[o("div",M,[o("div",q,n(null===(e=i.value)||void 0===e||null===(t=e.tenantOrderInsuredList[0])||void 0===t||null===(r=t.tenantOrderProductList[0])||void 0===r?void 0:r.productName),1),o("div",A,n(null===(a=i.value)||void 0===a?void 0:a.abbreviation),1)])]})),content:m((()=>{var e;return[o("div",U,n(i.value?l(S)[null===(e=i.value)||void 0===e?void 0:e.orderStatus]:""),1)]})),_:1}),y(G,{label:"投保单号",content:null===(e=i.value)||void 0===e?void 0:e.orderNo},null,8,["content"]),y(G,{label:"创建时间",content:l(b)(null===(t=i.value)||void 0===t?void 0:t.gmtCreated).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),y(G,{label:"投保人",content:null===(u=i.value)||void 0===u||null===(s=u.tenantOrderHolder)||void 0===s?void 0:s.name},null,8,["content"]),(a(!0),d(h,null,C((null===(v=i.value)||void 0===v?void 0:v.tenantOrderInsuredList)||[],((e,t)=>(a(),g(G,{key:t,label:"被保人",content:e.name},null,8,["content"])))),128))]),y(z,{"product-data":null===(f=i.value)||void 0===f||null===(p=f.tenantOrderInsuredList[0])||void 0===p||null===(k=p.tenantOrderProductList)||void 0===k?void 0:k[0],class:"insure-info"},null,8,["product-data"]),(null===(O=i.value)||void 0===O?void 0:O.orderTopStatus)===l(Y).PENDING?(a(),d("div",W,[y(r,{type:"primary",onClick:I(R,["stop"])},{default:m((()=>[B])),_:1},8,["onClick"]),y(r,{type:"primary",onClick:I(ee,["stop"])},{default:m((()=>[X])),_:1},8,["onClick"])])):c("",!0),(null===(x=i.value)||void 0===x?void 0:x.orderTopStatus)===l(Y).PAYING?(a(),d("div",Z,[y(r,{type:"primary",onClick:I(R,["stop"])},{default:m((()=>[$])),_:1},8,["onClick"]),y(r,{type:"primary",onClick:I(te,["stop"])},{default:m((()=>[J])),_:1},8,["onClick"])])):c("",!0),(null===(L=i.value)||void 0===L?void 0:L.orderTopStatus)===l(Y).TIMEOUT?(a(),d("div",K,[y(r,{type:"primary",onClick:I(R,["stop"])},{default:m((()=>[Q])),_:1},8,["onClick"])])):c("",!0)])):c("",!0)]})),_:1})}}});e("default",w(R,[["__scopeId","data-v-0ecf33c4"]]))}}}))}();
