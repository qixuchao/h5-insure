import{bt as e,bu as t,aL as r,T as a,bv as n,aI as o,ai as s,ah as u,bw as i}from"./index-086cc6a1.js";import{s as I}from"./core-35f202d1.js";import{P as d}from"./constants-4b08cf92.js";const{VITE_BASE:c}={VITE_BASE:"/",VITE_API_BASEURL:"/",VITE_APP_TITLE:"投保流程",VITE_THEME_COLOR:"#C41E21",VITE_APP_DESCRIPTION:"一种互联网投保的快速落地实现方案",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},l=async(l,p,E)=>{var _,T;const A=l,{extInfo:y,orderNo:R,tenantOrderInsuredList:m,tenantId:L}=A||{},{iseeBizNo:f,templateId:h}=y||{};if(R){const{productCode:e}=(null==(T=null==(_=null==m?void 0:m[0])?void 0:_.tenantOrderProductList)?void 0:T[0])||{};let t=`${window.location.origin}${c}baseInsurance/orderDetail?orderNo=${R}&tenantId=${L}&ISEE_BIZ=${f}&productCode=${e}`;h>200&&(t=`${window.location.origin}${c}baseInsurance/long/result?orderNo=${R}&templateId=${h}&tenantId=${L}&ISEE_BIZ=${f}&productCode=${e}`),A.extInfo.redirectUrl=t}const $=e();if($.ext)try{A.ext=$.ext}catch(S){console.error("ext 参数格式错误",$.ext,S)}const{code:N,data:P}=await t(A);if("10000"===N){const{pageAction:e,message:t,data:c}=P.pageAction||{};null==p||p(c,e),e===r.ALERT&&a(t),e===r.JUMP_URL&&I(null==c?void 0:c.paymentUrl),e===r.JUMP_ALERT&&(c.alertType===n.PAY_AUTH?o.confirm({title:"投保提示",message:"根据央行发布《关于规范支付创新业务的通知》，明确代收服务机构应当要求收款人事先与付款人签订收款协议，取得持卡人授权，并在代收交易处理中验证协议关系，银行与持卡人的直接授权。",confirmButtonText:"去鉴权"}).then((()=>{s.push({path:d.payAuth,query:E.query})})):c.alertType===n.SIGN_FAIL?(u.set(`${i}_underwriteResult`,{[n.SIGN_FAIL]:t}),s.push({path:d.underWriteResult,query:{...E.query,underwriteStatus:n.SIGN_FAIL}})):c.alertType===n.PAY_FAIL?s.push({path:d.updateBankInfo,query:E.query}):c.alertType===n.QUESTIONNAIRE?o.confirm({confirmButtonText:"返回修改",message:"当前投被保人年龄、性别不符合健康告知规则，请修改健康告知"}).then((()=>{s.push({path:d.premiumTrial,query:E.query})})):c.alertType===n.UNDER_WRITE_FAIL&&(u.set(`${i}_underwriteResult`,{[n.UNDER_WRITE_FAIL]:t}),s.push({path:d.underWriteResult,query:{...E.query,underwriteStatus:n.UNDER_WRITE_FAIL}})))}};export{l as n};
