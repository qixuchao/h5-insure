System.register(["./index-legacy-dee7ea74.js","./core-legacy-2711290b.js"],(function(e){"use strict";var t,o,n,r,a,i;return{setters:[function(e){t=e.aZ,o=e.C,n=e.aY,r=e.T,a=e.a6},function(e){i=e.s}],execute:function(){const{VITE_BASE:c}={VITE_BASE:"/",VITE_API_BASEURL:"/",VITE_APP_TITLE:"投保流程",VITE_THEME_COLOR:"#0d6efe",VITE_APP_DESCRIPTION:"一种互联网投保的快速落地实现方案",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0};e("n",(async(e,d)=>{const s=e,{extInfo:I,orderNo:E,tenantOrderInsuredList:u,tenantId:l}=s||{},{iseeBizNo:f}=I||{};if(E){const{productCode:e}=u?.[0]?.tenantOrderProductList?.[0]||{},t=`${window.location.origin}${c}baseInsurance/orderDetail?orderNo=${E}&tenantId=${l}&ISEE_BIZ=${f}&productCode=${e}`;s.extInfo.redirectUrl=t}const T=t();if(T.ext)try{s.ext=T.ext}catch(x){}const{code:_,data:g}=await o(s);if("10000"===_){const{pageAction:t,message:o,data:s}=g.pageAction||{};d?.(s,t),t===n.ALERT&&r(o),t===n.JUMP_URL&&i(s?.paymentUrl),t===n.JUMP_ALERT&&("3"===I.templateId?a.alert({title:"提示",message:"该被保人已存在一笔待支付的订单",confirmButtonText:"取消"}).then((()=>{})):a.confirm({title:"提示",className:"xinao-custom-dialog",teleport:"#xinaoDialog",message:"该被保人已存在一笔待支付的订单",confirmButtonText:"去支付"}).then((()=>{s.orderNo&&(window.location.href=`${window.location.origin}${c}baseInsurance/orderDetail?orderNo=${s.orderNo}&tenantId=${e.tenantId}&ISEE_BIZ=${e.extInfo.iseeBizNo}&productCode=${e.productCode}`)})))}}))}}}));
