import{_ as e,d as a,j as t,i as o,h as r,k as s,dU as l,O as n,o as d,c as u,b as i,w as c,a as p,e as m,u as v,F as f,q as y,a8 as N,m as h,p as I,aa as S,dV as C,aD as E,e0 as L,ab as _,aj as A,av as k,aw as b}from"./index-081cd25a.js";import{P as g}from"./index-4e768a76.js";import{g as j}from"./trial-291f24e5.js";import{I as q}from"./infoItem-31f4ee33.js";import{t as D}from"./format-31cde443.js";const P={class:"page-insure-result"},T={class:"page-insure-result-wrap"},U={class:"header"},R={class:"content"},w={class:"content-header"},O={class:"product-name"},x=(e=>(k("data-v-68302929"),e=e(),b(),e))((()=>p("span",null,"保障中",-1))),V={class:"content-list"},Y={class:"footer-button"},F=a({name:"OrderResult"});var M=e(a({...F,setup(e){const a=t({orderNo:"",holderName:"",orderAmount:"",orderStatus:""}),k=o(),b=r(),F=t(!1),{orderNo:M="",preview:B,saleUserId:G="",tenantId:J="",templateId:z=1}=k.query,H=t({});s((e=>a.value&&[l.SUCCESS,l.PAYMENT_SUCCESS,l.ACCEPT_POLICY].some((e=>{var t;return e===(null==(t=a.value)?void 0:t.orderStatus)}))));const K=s((e=>a.value&&[l.PAYMENT_FAILED,l.INSURER_REJECT,l.TIMEOUT,l.FAILED,l.CANCELED].some((e=>{var t;return e===(null==(t=a.value)?void 0:t.orderStatus)}))));s((()=>a.value.orderStatus===l.PAYING));const Q=()=>{b.push({path:S.orderList,query:k.query})},W=()=>{b.push({path:S.updateBankInfo,query:k.query})},X=()=>{j({orderNo:M,tenantId:J}).then((e=>{var t,o,r;const{code:s,data:l}=e;if("10000"===s){F.value=!1;const{holder:{name:e},policyNo:s,insuredList:n,applicationReqList:d}=l;H.value=l,null==(t=l.tenantOrderPaymentInfoList)||t[0];const{productName:u,riskList:i}=(null==(r=null==(o=null==n?void 0:n[0])?void 0:o.productList)?void 0:r[0])||{};let c=d.map((e=>e.applicationNo));(null==s?void 0:s.length)&&(c=s),a.value={holderName:e,productName:u,policyList:c,validateDate:"",coverage:null==i?void 0:i[0].coverage,orderStatusDesc:C[l.orderStatus],orderStatus:l.orderStatus,orderNo:l.orderNo,orderAmount:D(l.orderAmount)}}}))},Z=()=>{E.confirm({title:"投保提示",message:"选择转批扣后将对该笔订单进行转换批次扣款，提交后将无法操作变更卡号，再次划款",cancelButtonText:"返回重选"}).then((async()=>{const{code:e,data:a}=await L({orderNo:M,tenantId:J});"10000"===e&&X()}))};return n((()=>{B||X()})),(e,t)=>{const o=_,r=A,s=g;return d(),u("div",P,[i(o),i(s,{modelValue:v(F),"onUpdate:modelValue":t[0]||(t[0]=e=>I(F)?F.value=e:null),onRefresh:X},{default:c((()=>[p("div",T,[p("div",U,m(v(H).orderStatusDesc),1),p("div",R,[p("div",w,[p("h4",O,m(v(a).productName),1),x]),i(q,{label:"投保人:",content:v(a).holderName,line:""},null,8,["content"]),i(q,{label:"投/保单号:",line:""},{content:c((()=>[p("div",V,[(d(!0),u(f,null,y(v(a).policyList,(e=>(d(),u("p",{key:e},m(e),1)))),128))])])),_:1}),i(q,{label:"保费:",content:v(a).orderAmount,line:""},null,8,["content"])]),p("div",Y,[v(K)?(d(),u(f,{key:0},[i(r,{type:"primary",plain:"",onClick:W},{default:c((()=>[N("变更卡号")])),_:1}),i(r,{type:"primary",onClick:Z},{default:c((()=>[N("线下扣款")])),_:1})],64)):(d(),h(r,{key:1,block:"",type:"primary",onClick:Q},{default:c((()=>[N("确定")])),_:1}))])])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-68302929"]]);export{M as default};
