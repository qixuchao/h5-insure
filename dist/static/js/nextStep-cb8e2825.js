import{F as o,G as e,P as t,T as n,D as r}from"./index-27dbf893.js";import{s as a}from"./core-f8bea916.js";import{T as d}from"./constant-c3f28a3b.js";const{VITE_BASE:i}={VITE_BASE:"/",VITE_API_BASEURL:"/",VITE_APP_TITLE:"投保流程",VITE_THEME_COLOR:"#0d6efe",VITE_APP_DESCRIPTION:"一种互联网投保的快速落地实现方案",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},s=async(s,c)=>{var l,I;const E=s,{extInfo:u,orderNo:$,tenantOrderInsuredList:m,tenantId:f}=E||{},{iseeBizNo:p,templateId:T}=u||{};if($){const{productCode:o}=(null==(I=null==(l=null==m?void 0:m[0])?void 0:l.tenantOrderProductList)?void 0:I[0])||{};let e=`${window.location.origin}${i}baseInsurance/orderDetail?orderNo=${$}&tenantId=${f}&ISEE_BIZ=${p}&productCode=${o}`;T>200&&(e=`${window.location.origin}${i}baseInsurance/long/result?orderNo=${$}&templateId=${T}=tenantId=${f}&ISEE_BIZ=${p}&productCode=${o}`),E.extInfo.redirectUrl=e}const _=o();if(_.ext)try{E.ext=_.ext}catch(g){console.error("ext 参数格式错误",_.ext,g)}const{code:x,data:A}=await e(E);if("10000"===x){const{pageAction:o,message:e,data:l}=A.pageAction||{};null==c||c(l,o),o===t.ALERT&&n(e),o===t.JUMP_URL&&a(null==l?void 0:l.paymentUrl),o===t.JUMP_ALERT&&(u.templateId===d.NETSALE?r.alert({title:"提示",message:"该被保人已存在一笔待支付的订单",confirmButtonText:"取消"}).then((()=>{})):r.confirm({title:"提示",className:"xinao-custom-dialog",teleport:"#xinaoDialog",message:"该被保人已存在一笔待支付的订单",confirmButtonText:"去支付"}).then((()=>{l.orderNo&&(window.location.href=`${window.location.origin}${i}baseInsurance/orderDetail?orderNo=${l.orderNo}&tenantId=${s.tenantId}&ISEE_BIZ=${s.extInfo.iseeBizNo}&productCode=${s.productCode}`)})))}};export{s as n};
