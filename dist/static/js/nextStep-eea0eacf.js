import{c2 as o,M as t,c1 as e,T as n,ai as a}from"./index-5239afda.js";import{s as r}from"./core-19e81f25.js";import{T as i}from"./constant-c3f28a3b.js";const{VITE_BASE:d}={VITE_BASE:"/",VITE_API_BASEURL:"/",VITE_APP_TITLE:"投保流程",VITE_THEME_COLOR:"#0d6efe",VITE_APP_DESCRIPTION:"一种互联网投保的快速落地实现方案",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},s=async(s,c)=>{var l,I;const E=s,{extInfo:f,orderNo:u,tenantOrderInsuredList:T,tenantId:m}=E||{},{iseeBizNo:_}=f||{};if(u){const{productCode:o}=(null==(I=null==(l=null==T?void 0:T[0])?void 0:l.tenantOrderProductList)?void 0:I[0])||{},t=`${window.location.origin}${d}baseInsurance/orderDetail?orderNo=${u}&tenantId=${m}&ISEE_BIZ=${_}&productCode=${o}`;E.extInfo.redirectUrl=t}const p=o();if(p.ext)try{E.ext=p.ext}catch($){}const{code:x,data:A}=await t(E);if("10000"===x){const{pageAction:o,message:t,data:l}=A.pageAction||{};null==c||c(l,o),o===e.ALERT&&n(t),o===e.JUMP_URL&&r(null==l?void 0:l.paymentUrl),o===e.JUMP_ALERT&&(f.templateId===i.NETSALE?a.alert({title:"提示",message:"该被保人已存在一笔待支付的订单",confirmButtonText:"取消"}).then((()=>{})):a.confirm({title:"提示",className:"xinao-custom-dialog",teleport:"#xinaoDialog",message:"该被保人已存在一笔待支付的订单",confirmButtonText:"去支付"}).then((()=>{l.orderNo&&(window.location.href=`${window.location.origin}${d}baseInsurance/orderDetail?orderNo=${l.orderNo}&tenantId=${s.tenantId}&ISEE_BIZ=${s.extInfo.iseeBizNo}&productCode=${s.productCode}`)})))}};export{s as n};
