System.register(["./index-legacy-1d6e1a56.js","./core-legacy-4ff4b02b.js","./constant-legacy-c9c30061.js"],(function(e){"use strict";var t,o,n,r,i,c,a;return{setters:[function(e){t=e.c2,o=e.M,n=e.c1,r=e.T,i=e.aj},function(e){c=e.s},function(e){a=e.T}],execute:function(){const{VITE_BASE:d}={VITE_BASE:"/",VITE_API_BASEURL:"/",VITE_APP_TITLE:"投保流程",VITE_THEME_COLOR:"#0d6efe",VITE_APP_DESCRIPTION:"一种互联网投保的快速落地实现方案",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0};e("n",(async(e,s)=>{const l=e,{extInfo:u,orderNo:I,tenantOrderInsuredList:E,tenantId:f}=l||{},{iseeBizNo:T}=u||{};if(I){var _,x;const{productCode:e}=(null==E||null===(_=E[0])||void 0===_||null===(x=_.tenantOrderProductList)||void 0===x?void 0:x[0])||{},t=`${window.location.origin}${d}baseInsurance/orderDetail?orderNo=${I}&tenantId=${f}&ISEE_BIZ=${T}&productCode=${e}`;l.extInfo.redirectUrl=t}const g=t();if(g.ext)try{l.ext=g.ext}catch(m){console.error("ext 参数格式错误",g.ext,m)}const{code:A,data:$}=await o(l);if("10000"===A){const{pageAction:t,message:o,data:l}=$.pageAction||{};null==s||s(l,t),t===n.ALERT&&r(o),t===n.JUMP_URL&&c(null==l?void 0:l.paymentUrl),t===n.JUMP_ALERT&&(u.templateId===a.NETSALE?i.alert({title:"提示",message:"该被保人已存在一笔待支付的订单",confirmButtonText:"取消"}).then((()=>{})):i.confirm({title:"提示",className:"xinao-custom-dialog",teleport:"#xinaoDialog",message:"该被保人已存在一笔待支付的订单",confirmButtonText:"去支付"}).then((()=>{l.orderNo&&(window.location.href=`${window.location.origin}${d}baseInsurance/orderDetail?orderNo=${l.orderNo}&tenantId=${e.tenantId}&ISEE_BIZ=${e.extInfo.iseeBizNo}&productCode=${e.productCode}`)})))}}))}}}));
