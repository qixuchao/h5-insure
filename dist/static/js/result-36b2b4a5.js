import{_ as e,d as a,j as t,i as o,h as r,k as s,dS as l,l as n,o as d,c as u,b as i,u as c,w as p,a as m,e as v,F as f,s as y,v as N,p as I,q as S,y as h,dZ as C,bi as E,e3 as L,a$ as _,b3 as A}from"./index-1c874ef7.js";import{P as k}from"./index-0709f58d.js";import{g}from"./trial-2f558ade.js";import{I as w}from"./infoItem-a0816e11.js";import{t as b}from"./format-31cde443.js";const T={class:"page-insure-result"},q={class:"page-insure-result-wrap"},P={class:"header"},j={class:"content"},D={class:"content-header"},R={class:"product-name"},U={class:"content-list"},x={class:"footer-button"},B=a({name:"OrderResult"});var O=e(a({...B,setup(e){const a=t({orderNo:"",holderName:"",orderAmount:"",orderStatus:""}),B=o(),O=r(),Y=t(!1),{orderNo:F="",preview:M,saleUserId:V="",tenantId:z="",templateId:G=1}=B.query,J=t({});s((e=>a.value&&[l.SUCCESS,l.PAYMENT_SUCCESS,l.ACCEPT_POLICY].some((e=>{var t;return e===(null==(t=a.value)?void 0:t.orderStatus)}))));const Z=s((e=>a.value&&[l.PAYMENT_FAILED,l.INSURER_REJECT,l.TIMEOUT,l.FAILED,l.CANCELED].some((e=>{var t;return e===(null==(t=a.value)?void 0:t.orderStatus)}))));s((()=>a.value.orderStatus===l.PAYING));const $=()=>{O.push({path:h.orderList,query:B.query})},H=()=>{O.push({path:h.updateBankInfo,query:B.query})},K=()=>{g({orderNo:F,tenantId:z}).then((e=>{var t,o,r;const{code:s,data:l}=e;if("10000"===s){Y.value=!1;const{holder:{name:e},policyNo:s,insuredList:n,applicationReqList:d}=l;J.value=l,null==(t=l.tenantOrderPaymentInfoList)||t[0];const{productName:u,riskList:i}=(null==(r=null==(o=null==n?void 0:n[0])?void 0:o.productList)?void 0:r[0])||{};let c=d.map((e=>e.applicationNo));(null==s?void 0:s.length)&&(c=s),a.value={holderName:e,productName:u,policyList:c,validateDate:"",coverage:null==i?void 0:i[0].coverage,orderStatusDesc:C[l.orderStatus],orderStatus:l.orderStatus,orderNo:l.orderNo,orderAmount:b(l.orderAmount)}}}))},Q=()=>{E.confirm({title:"投保提示",message:"选择转批扣后将对该笔订单进行转换批次扣款，提交后将无法操作变更卡号，再次划款",cancelButtonText:"返回重选"}).then((async()=>{const{code:e,data:a}=await L({orderNo:F,tenantId:z});"10000"===e&&K()}))};n((()=>{M||K()}));const W=t();return n((()=>{setTimeout((async()=>{W.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const o=_,r=A,s=k;return d(),u("div",T,[i(o,{"order-status":c(J).orderStatus},null,8,["order-status"]),i(s,{modelValue:c(Y),"onUpdate:modelValue":t[0]||(t[0]=e=>S(Y)?Y.value=e:null),onRefresh:K},{default:p((()=>[m("div",q,[m("div",P,v(c(J).orderStatusDesc),1),m("div",j,[m("div",D,[m("h4",R,v(c(a).productName),1)]),i(w,{label:"投保人:",content:c(a).holderName,line:""},null,8,["content"]),i(w,{label:"投/保单号:",line:""},{content:p((()=>[m("div",U,[(d(!0),u(f,null,y(c(a).policyList,(e=>(d(),u("p",{key:e},v(e),1)))),128))])])),_:1}),i(w,{label:"保费:",content:c(a).orderAmount,line:""},null,8,["content"])]),m("div",x,[c(Z)?(d(),u(f,{key:0},[i(r,{type:"primary",plain:"",onClick:H},{default:p((()=>[N("变更卡号")])),_:1}),i(r,{type:"primary",onClick:Q},{default:p((()=>[N("线下扣款")])),_:1})],64)):(d(),I(r,{key:1,block:"",type:"primary",onClick:$},{default:p((()=>[N("确定")])),_:1}))])])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-9938799c"]]);export{O as default};
