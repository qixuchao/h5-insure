import{bR as e,bS as t,aQ as r,T as a,bT as n,aN as o,at as s,y as u,as as i,ap as d}from"./index-c51609f0.js";import{s as I}from"./core-7fad25dc.js";const{VITE_BASE:l}={VITE_BASE:"/",VITE_API_BASEURL:"/",VITE_APP_TITLE:"投保流程",VITE_THEME_COLOR:"#C41E21",VITE_APP_DESCRIPTION:"一种互联网投保的快速落地实现方案",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},p=async(p,E,c)=>{var _,T;const A=p,{extInfo:y,orderNo:R,tenantOrderInsuredList:m,tenantId:L}=A||{},{iseeBizNo:$,templateId:f}=y||{};if(R){const{productCode:e}=(null==(T=null==(_=null==m?void 0:m[0])?void 0:_.tenantOrderProductList)?void 0:T[0])||{};let t=`${window.location.origin}${l}baseInsurance/orderDetail?orderNo=${R}&tenantId=${L}&ISEE_BIZ=${$}&productCode=${e}`;f>200&&(t=`${window.location.origin}${l}baseInsurance/long/result?orderNo=${R}&templateId=${f}&tenantId=${L}&ISEE_BIZ=${$}&productCode=${e}`),A.extInfo.redirectUrl=t}const h=e();if(h.ext)try{A.ext=h.ext}catch(U){console.error("ext 参数格式错误",h.ext,U)}const{code:N,data:S}=await t(A);if("10000"===N){const{pageAction:e,message:t,data:l}=S.pageAction||{};null==E||E(l,e,t),e===r.ALERT&&a(t),e===r.JUMP_URL&&I(null==l?void 0:l.paymentUrl),e===r.JUMP_ALERT&&(l.alertType===n.PAY_AUTH?o.confirm({title:"投保提示",message:"根据央行发布《关于规范支付创新业务的通知》，明确代收服务机构应当要求收款人事先与付款人签订收款协议，取得持卡人授权，并在代收交易处理中验证协议关系，银行与持卡人的直接授权。",confirmButtonText:"去鉴权"}).then((()=>{s.push({path:u.payAuth,query:c.query})})):l.alertType===n.SIGN_FAIL?(i.set(`${d}_underwriteResult`,{[n.SIGN_FAIL]:t}),s.push({path:u.signUnderWriteResult,query:{...c.query,underwriteStatus:n.SIGN_FAIL}})):l.alertType===n.PAY_FAIL?s.push({path:u.updateBankInfo,query:c.query}):l.alertType===n.QUESTIONNAIRE?o.confirm({confirmButtonText:"返回修改",message:"当前投被保人年龄、性别不符合健康告知规则，请修改健康告知"}).then((()=>{s.push({path:u.premiumTrial,query:c.query})})):l.alertType===n.UNDER_WRITE_FAIL&&(i.set(`${d}_underwriteResult`,{[n.UNDER_WRITE_FAIL]:t}),s.push({path:u.underWriteResult,query:{...c.query,underwriteStatus:n.UNDER_WRITE_FAIL}})))}};export{p as n};
