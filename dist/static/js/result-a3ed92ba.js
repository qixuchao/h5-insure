import{_ as e,d as a,i as t,h as r,g as o,j as s,db as n,O as l,dc as d,o as u,c,b as i,a as p,e as m,u as v,F as y,w as f,a8 as N,l as S,az as I,aa as h,ag as C,at as E,au as b}from"./index-404eec03.js";import{g as A}from"./trial-37239397.js";import{P as _}from"./constants-fe95ef6f.js";import{I as g}from"./infoItem-b906b254.js";import{g as L}from"./verify-3795ddc4.js";const k={class:""},P={class:"page-insure-result-wrap"},T={class:"header"},j={class:"content"},q={class:"content-header"},D={class:"product-name"},O=(e=>(E("data-v-2fc76ecb"),e=e(),b(),e))((()=>p("span",null,"保障中",-1))),U={class:"footer-button"},w=a({name:"OrderResult"});var F=e(a({...w,setup(e){const a={paymentFailed:"支付失败",paymentSuccess:"恭喜你完成投保",acceptingPolicy:"承保中"},E=t({orderNo:"",holderName:"",orderAmount:"",orderStatus:""}),b=r(),w=o(),{orderNo:F="",preview:R,saleUserId:Y="",tenantId:x="",templateId:M=1}=b.query,B=t({});s((e=>E.value&&[n.SUCCESS,n.PAYMENT_SUCCESS,n.ACCEPT_POLICY].some((e=>{var a;return e===(null==(a=E.value)?void 0:a.orderStatus)}))));const z=s((e=>E.value&&[n.PAYMENT_FAILED,n.INSURER_REJECT,n.TIMEOUT,n.FAILED,n.CANCELED].some((e=>{var a;return e===(null==(a=E.value)?void 0:a.orderStatus)}))));s((()=>E.value.orderStatus===n.PAYING));const G=()=>{w.push({path:_.orderList,query:b.query})},J=()=>{w.push({path:_.updateBankInfo,query:b.query})},$=()=>{I.confirm({title:"投保提示",message:"选择转批扣后将对该笔订单进行转换批次扣款，提交后将无法操作变更卡号，再次划款",cancelButtonText:"返回重选"}).then((async()=>{await L({orderNo:F,tenantId:x})}))};return l((()=>{R||A({orderNo:F,tenantId:x}).then((e=>{var a,t,r;const{code:o,data:s}=e;if("10000"===o){const{holder:{name:e},policyNo:o,insuredList:n}=s;B.value=s,null==(a=s.tenantOrderPaymentInfoList)||a[0];const{productName:l,riskList:u}=(null==(r=null==(t=null==n?void 0:n[0])?void 0:t.productList)?void 0:r[0])||{};E.value={holderName:e,productName:l,policyNo:o,validateDate:"",coverage:null==u?void 0:u[0].coverage,orderStatusDesc:d[s.orderStatus],orderStatus:s.orderStatus,orderNo:s.orderNo,orderAmount:`￥${s.orderAmount}`}}}))})),(e,t)=>{const r=h,o=C;return u(),c("div",k,[i(r),p("div",P,[p("div",T,m(a[v(B).orderStatus]),1),p("div",j,[p("div",q,[p("h4",D,m(v(E).productName),1),O]),i(g,{label:"投保人",content:v(E).holderName,line:""},null,8,["content"]),i(g,{label:"保单号",content:v(E).policyNo,line:""},null,8,["content"]),i(g,{label:"保费",content:v(E).orderAmount,line:""},null,8,["content"])]),p("div",U,[v(z)?(u(),S(o,{key:1,block:"",type:"primary",onClick:G},{default:f((()=>[N("返回")])),_:1})):(u(),c(y,{key:0},[i(o,{type:"primary",plain:"",onClick:J},{default:f((()=>[N("变更卡号")])),_:1}),i(o,{type:"primary",onClick:$},{default:f((()=>[N("线下扣款")])),_:1})],64))])])])}}}),[["__scopeId","data-v-2fc76ecb"]]);export{F as default};
