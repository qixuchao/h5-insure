import{_ as e,d as a,j as t,i as r,h as o,k as s,dm as n,O as d,dn as l,o as u,c,b as i,a as m,e as p,u as v,F as y,w as N,a8 as f,m as I,aI as S,aa as h,ag as C,aC as E,aD as b}from"./index-1944b73e.js";import{g as A}from"./trial-3ebd1bf2.js";import{P as _}from"./constants-62d1c4af.js";import{I as k}from"./infoItem-9e0ab493.js";import{j as L}from"./verify-26e0eeba.js";const P={class:""},g={class:"page-insure-result-wrap"},j={class:"header"},T={class:"content"},D={class:"content-header"},q={class:"product-name"},O=(e=>(E("data-v-3daa3074"),e=e(),b(),e))((()=>m("span",null,"保障中",-1))),U={class:"footer-button"},w=a({name:"OrderResult"});var F=e(a({...w,setup(e){const a={paymentFailed:"支付失败",paymentSuccess:"恭喜你完成投保",acceptingPolicy:"承保中"},E=t({orderNo:"",holderName:"",orderAmount:"",orderStatus:""}),b=r(),w=o(),{orderNo:F="",preview:R,saleUserId:Y="",tenantId:x="",templateId:M=1}=b.query,B=t({});s((e=>E.value&&[n.SUCCESS,n.PAYMENT_SUCCESS,n.ACCEPT_POLICY].some((e=>{var a;return e===(null==(a=E.value)?void 0:a.orderStatus)}))));const G=s((e=>E.value&&[n.PAYMENT_FAILED,n.INSURER_REJECT,n.TIMEOUT,n.FAILED,n.CANCELED].some((e=>{var a;return e===(null==(a=E.value)?void 0:a.orderStatus)}))));s((()=>E.value.orderStatus===n.PAYING));const J=()=>{w.push({path:_.orderList,query:b.query})},$=()=>{w.push({path:_.updateBankInfo,query:b.query})},z=()=>{S.confirm({title:"投保提示",message:"选择转批扣后将对该笔订单进行转换批次扣款，提交后将无法操作变更卡号，再次划款",cancelButtonText:"返回重选"}).then((async()=>{await L({orderNo:F,tenantId:x})}))};return d((()=>{R||A({orderNo:F,tenantId:x}).then((e=>{var a,t,r;const{code:o,data:s}=e;if("10000"===o){const{holder:{name:e},policyNo:o,insuredList:n}=s;B.value=s,null==(a=s.tenantOrderPaymentInfoList)||a[0];const{productName:d,riskList:u}=(null==(r=null==(t=null==n?void 0:n[0])?void 0:t.productList)?void 0:r[0])||{};E.value={holderName:e,productName:d,policyNo:o,validateDate:"",coverage:null==u?void 0:u[0].coverage,orderStatusDesc:l[s.orderStatus],orderStatus:s.orderStatus,orderNo:s.orderNo,orderAmount:`￥${s.orderAmount}`}}}))})),(e,t)=>{const r=h,o=C;return u(),c("div",P,[i(r),m("div",g,[m("div",j,p(a[v(B).orderStatus]),1),m("div",T,[m("div",D,[m("h4",q,p(v(E).productName),1),O]),i(k,{label:"投保人",content:v(E).holderName,line:""},null,8,["content"]),i(k,{label:"保单号",content:v(E).policyNo,line:""},null,8,["content"]),i(k,{label:"保费",content:v(E).orderAmount,line:""},null,8,["content"])]),m("div",U,[v(G)?(u(),c(y,{key:0},[i(o,{type:"primary",plain:"",onClick:$},{default:N((()=>[f("变更卡号")])),_:1}),i(o,{type:"primary",onClick:z},{default:N((()=>[f("线下扣款")])),_:1})],64)):(u(),I(o,{key:1,block:"",type:"primary",onClick:J},{default:N((()=>[f("返回")])),_:1}))])])])}}}),[["__scopeId","data-v-3daa3074"]]);export{F as default};
