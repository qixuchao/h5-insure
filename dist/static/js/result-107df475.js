import{_ as e,d as a,j as t,i as o,h as s,k as r,dR as l,l as n,o as d,c as u,b as i,w as c,a as p,e as m,u as v,F as y,s as f,v as N,p as I,q as h,y as S,dY as C,aN as E,e3 as L,ak as _,ar as k,aC as A,aD as b}from"./index-360b56eb.js";import{P as g}from"./index-c4f6870d.js";import{g as w}from"./trial-b136fa5d.js";import{I as T}from"./infoItem-72ce55b6.js";import{t as q}from"./format-31cde443.js";const D={class:"page-insure-result"},P={class:"page-insure-result-wrap"},R={class:"header"},j={class:"content"},U={class:"content-header"},Y={class:"product-name"},x=(e=>(A("data-v-66c6a8e7"),e=e(),b(),e))((()=>p("span",null,"保障中",-1))),B={class:"content-list"},O={class:"footer-button"},F=a({name:"OrderResult"});var M=e(a({...F,setup(e){const a=t({orderNo:"",holderName:"",orderAmount:"",orderStatus:""}),A=o(),b=s(),F=t(!1),{orderNo:M="",preview:V,saleUserId:z="",tenantId:G="",templateId:J=1}=A.query,H=t({});r((e=>a.value&&[l.SUCCESS,l.PAYMENT_SUCCESS,l.ACCEPT_POLICY].some((e=>{var t;return e===(null==(t=a.value)?void 0:t.orderStatus)}))));const K=r((e=>a.value&&[l.PAYMENT_FAILED,l.INSURER_REJECT,l.TIMEOUT,l.FAILED,l.CANCELED].some((e=>{var t;return e===(null==(t=a.value)?void 0:t.orderStatus)}))));r((()=>a.value.orderStatus===l.PAYING));const Q=()=>{b.push({path:S.orderList,query:A.query})},W=()=>{b.push({path:S.updateBankInfo,query:A.query})},X=()=>{w({orderNo:M,tenantId:G}).then((e=>{var t,o,s;const{code:r,data:l}=e;if("10000"===r){F.value=!1;const{holder:{name:e},policyNo:r,insuredList:n,applicationReqList:d}=l;H.value=l,null==(t=l.tenantOrderPaymentInfoList)||t[0];const{productName:u,riskList:i}=(null==(s=null==(o=null==n?void 0:n[0])?void 0:o.productList)?void 0:s[0])||{};let c=d.map((e=>e.applicationNo));(null==r?void 0:r.length)&&(c=r),a.value={holderName:e,productName:u,policyList:c,validateDate:"",coverage:null==i?void 0:i[0].coverage,orderStatusDesc:C[l.orderStatus],orderStatus:l.orderStatus,orderNo:l.orderNo,orderAmount:q(l.orderAmount)}}}))},Z=()=>{E.confirm({title:"投保提示",message:"选择转批扣后将对该笔订单进行转换批次扣款，提交后将无法操作变更卡号，再次划款",cancelButtonText:"返回重选"}).then((async()=>{const{code:e,data:a}=await L({orderNo:M,tenantId:G});"10000"===e&&X()}))};n((()=>{V||X()}));const $=t();return n((()=>{setTimeout((async()=>{$.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const o=_,s=k,r=g;return d(),u("div",D,[i(o),i(r,{modelValue:v(F),"onUpdate:modelValue":t[0]||(t[0]=e=>h(F)?F.value=e:null),onRefresh:X},{default:c((()=>[p("div",P,[p("div",R,m(v(H).orderStatusDesc),1),p("div",j,[p("div",U,[p("h4",Y,m(v(a).productName),1),x]),i(T,{label:"投保人:",content:v(a).holderName,line:""},null,8,["content"]),i(T,{label:"投/保单号:",line:""},{content:c((()=>[p("div",B,[(d(!0),u(y,null,f(v(a).policyList,(e=>(d(),u("p",{key:e},m(e),1)))),128))])])),_:1}),i(T,{label:"保费:",content:v(a).orderAmount,line:""},null,8,["content"])]),p("div",O,[v(K)?(d(),u(y,{key:0},[i(s,{type:"primary",plain:"",onClick:W},{default:c((()=>[N("变更卡号")])),_:1}),i(s,{type:"primary",onClick:Z},{default:c((()=>[N("线下扣款")])),_:1})],64)):(d(),I(s,{key:1,block:"",type:"primary",onClick:Q},{default:c((()=>[N("确定")])),_:1}))])])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-66c6a8e7"]]);export{M as default};
