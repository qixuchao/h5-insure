import{br as e,bs as t,aL as r,T as a,bt as o,aI as n,ai as s}from"./index-d0a5373e.js";import{s as u}from"./core-64f7e02f.js";import{P as i}from"./constants-fe95ef6f.js";const{VITE_BASE:d}={VITE_BASE:"/",VITE_API_BASEURL:"/",VITE_APP_TITLE:"投保流程",VITE_THEME_COLOR:"#C41E21",VITE_APP_DESCRIPTION:"一种互联网投保的快速落地实现方案",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},I=async(I,p,l)=>{var c,E;const T=I,{extInfo:_,orderNo:A,tenantOrderInsuredList:y,tenantId:f}=T||{},{iseeBizNo:m,templateId:L}=_||{};if(A){const{productCode:e}=(null==(E=null==(c=null==y?void 0:y[0])?void 0:c.tenantOrderProductList)?void 0:E[0])||{};let t=`${window.location.origin}${d}baseInsurance/orderDetail?orderNo=${A}&tenantId=${f}&ISEE_BIZ=${m}&productCode=${e}`;L>200&&(t=`${window.location.origin}${d}baseInsurance/long/result?orderNo=${A}&templateId=${L}&tenantId=${f}&ISEE_BIZ=${m}&productCode=${e}`),T.extInfo.redirectUrl=t}const R=e();if(R.ext)try{T.ext=R.ext}catch($){console.error("ext 参数格式错误",R.ext,$)}const{code:h,data:P}=await t(T);if("10000"===h){const{pageAction:e,message:t,data:d}=P.pageAction||{};null==p||p(d,e),e===r.ALERT&&a(t),e===r.JUMP_URL&&u(null==d?void 0:d.paymentUrl),e===r.JUMP_ALERT&&(d.alertType===o.PAY_AUTH?n.confirm({title:"投保提示",message:"根据央行发布《关于规范支付创新业务的通知》，明确代收服务机构应当要求收款人事先与付款人签订收款协议，取得持卡人授权，并在代收交易处理中验证协议关系，银行与持卡人的直接授权。",confirmButtonText:"去鉴权"}).then((()=>{s.push({path:i.payAuth,query:l.query})})):d.alertType===o.SIGN_FAIL?s.push({path:i.underWriteResult,query:{...l.query,underwriteStatus:o.SIGN_FAIL}}):d.alertType===o.PAY_FAIL?s.push({path:i.updateBankInfo,query:l.query}):d.alertType===o.QUESTIONNAIRE?n.confirm({confirmButtonText:"返回修改",message:"当前投被保人年龄、性别不符合健康告知规则，请修改健康告知"}).then((()=>{s.push({path:i.premiumTrial,query:l.query})})):d.alertType===o.UNDER_WRITE_FAIL&&s.push({path:i.underWriteResult,query:{...l.query,underwriteStatus:o.UNDER_WRITE_FAIL}}))}};export{I as n};
