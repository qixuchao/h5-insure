import{_ as e,d as a,i as t,h as o,g as r,j as l,cc as s,O as n,dc as u,o as d,c,a as i,e as v,b as m,u as p,w as N,a8 as S,an as I,at as E,au as f}from"./index-498c0d29.js";import{g as A}from"./trial-9e1d90c3.js";import{I as b}from"./infoItem-e5eb89f3.js";const h={class:"page-insure-result-wrap"},C={class:"header"},L={class:"content"},_=(e=>(E("data-v-22e76be0"),e=e(),f(),e))((()=>i("div",{class:"content-header"},[i("h4",{class:"product-name"}),i("span",null,"保障中")],-1))),y={class:"footer"},g=a({name:"OrderResult"});var P=e(a({...g,setup(e){const a="支付失败",E="恭喜你完成投保",f="重新支付",g="查看保单详情",P="修改支付信息",T="确定",D=t({orderNo:"",holderName:"",orderAmount:"",orderStatus:""}),O=o();r();const{orderNo:U="",preview:j,saleUserId:R="",tenantId:Y="",templateId:w=1}=O.query,M=t({}),k=l((e=>D.value&&[s.SUCCESS,s.PAYMENT_SUCCESS,s.ACCEPT_POLICY].some((e=>{var a;return e===(null==(a=D.value)?void 0:a.orderStatus)})))),x=l((e=>D.value&&[s.PAYMENT_FAILED,s.INSURER_REJECT,s.TIMEOUT,s.FAILED,s.CANCELED].some((e=>{var a;return e===(null==(a=D.value)?void 0:a.orderStatus)}))));return l((()=>D.value.orderStatus===s.PAYING)),l((()=>D.value?k.value?"success":x.value?"fail":"process":"process")),l((()=>k.value?E:x.value?a:"处理中")),l((()=>k.value?g:x.value?f:"")),l((()=>k.value?T:x.value?P:"")),n((()=>{j||A({orderNo:U,tenantId:Y}).then((e=>{var a,t,o;const{code:r,data:l}=e;if("10000"===r){const{holder:{name:e},policyNo:r,insuredList:s}=l;M.value=l,null==(a=l.tenantOrderPaymentInfoList)||a[0];const{productName:n,riskList:d}=(null==(o=null==(t=null==s?void 0:s[0])?void 0:t.productList)?void 0:o[0])||{};D.value={holderName:e,productName:n,policyNo:r,validateDate:"",coverage:null==d?void 0:d[0].coverage,orderStatusDesc:u[l.orderStatus],orderStatus:l.orderStatus,orderNo:l.orderNo,orderAmount:`￥${l.orderAmount}`}}}))})),(e,a)=>{const t=I;return d(),c("div",h,[i("div",C,v(E),1),i("div",L,[_,m(b,{label:"投保人",content:p(D).holderName,line:""},null,8,["content"]),m(b,{label:"保单号",content:p(D).policyNo,line:""},null,8,["content"]),m(b,{label:"生效日期",content:p(D).holderName,line:""},null,8,["content"]),m(b,{label:"保障期间",content:p(D).coverage,line:""},null,8,["content"]),m(b,{label:"保费",content:p(D).orderAmount,line:""},null,8,["content"])]),i("div",y,[m(t,{block:"",type:"primary"},{default:N((()=>[S("返回")])),_:1})])])}}}),[["__scopeId","data-v-22e76be0"]]);export{P as default};
