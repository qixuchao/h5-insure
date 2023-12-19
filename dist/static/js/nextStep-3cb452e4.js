import{bR as e,bS as t,aQ as r,T as a,bT as n,aN as o,at as s,aj as u,as as i,ap as d}from"./index-bc8dad27.js";import{s as I}from"./core-d8afa2b2.js";const{VITE_BASE:l}={VITE_BASE:"/h5insure/",VITE_API_BASEURL:"/insure/",VITE_APP_TITLE:"投保流程",VITE_THEME_COLOR:"#C41E21",VITE_APP_DESCRIPTION:"一种互联网投保的快速落地实现方案",BASE_URL:"/h5insure/",MODE:"production",DEV:!1,PROD:!0},p=async(p,E,c)=>{var _,T;const A=p,{extInfo:R,orderNo:y,tenantOrderInsuredList:h,tenantId:m}=A||{},{iseeBizNo:L,templateId:$}=R||{};if(y){const{productCode:e}=(null==(T=null==(_=null==h?void 0:h[0])?void 0:_.tenantOrderProductList)?void 0:T[0])||{};let t=`${window.location.origin}${l}baseInsurance/orderDetail?orderNo=${y}&tenantId=${m}&ISEE_BIZ=${L}&productCode=${e}`;$>200&&(t=`${window.location.origin}${l}baseInsurance/long/result?orderNo=${y}&templateId=${$}&tenantId=${m}&ISEE_BIZ=${L}&productCode=${e}`),A.extInfo.redirectUrl=t}const N=e();if(N.ext)try{A.ext=N.ext}catch(U){console.error("ext 参数格式错误",N.ext,U)}const{code:S,data:f}=await t(A);if("10000"===S){const{pageAction:e,message:t,data:l}=f.pageAction||{};null==E||E(l,e),e===r.ALERT&&a(t),e===r.JUMP_URL&&I(null==l?void 0:l.paymentUrl),e===r.JUMP_ALERT&&(l.alertType===n.PAY_AUTH?o.confirm({title:"投保提示",message:"根据央行发布《关于规范支付创新业务的通知》，明确代收服务机构应当要求收款人事先与付款人签订收款协议，取得持卡人授权，并在代收交易处理中验证协议关系，银行与持卡人的直接授权。",confirmButtonText:"去鉴权"}).then((()=>{s.push({path:u.payAuth,query:c.query})})):l.alertType===n.SIGN_FAIL?(i.set(`${d}_underwriteResult`,{[n.SIGN_FAIL]:t}),s.push({path:u.signUnderWriteResult,query:{...c.query,underwriteStatus:n.SIGN_FAIL}})):l.alertType===n.PAY_FAIL?s.push({path:u.updateBankInfo,query:c.query}):l.alertType===n.QUESTIONNAIRE?o.confirm({confirmButtonText:"返回修改",message:"当前投被保人年龄、性别不符合健康告知规则，请修改健康告知"}).then((()=>{s.push({path:u.premiumTrial,query:c.query})})):l.alertType===n.UNDER_WRITE_FAIL&&(i.set(`${d}_underwriteResult`,{[n.UNDER_WRITE_FAIL]:t}),s.push({path:u.underWriteResult,query:{...c.query,underwriteStatus:n.UNDER_WRITE_FAIL}})))}};export{p as n};
