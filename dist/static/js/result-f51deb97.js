import{_ as e,d as a,j as t,i as o,h as r,k as s,dK as l,O as n,o as d,c as u,b as i,w as c,a as p,e as m,u as v,F as N,q as f,a8 as y,m as h,p as I,aa as S,dL as C,aN as E,dT as L,ab as _,aj as A,aF as b,aG as k}from"./index-33bf4ed5.js";import{P as T}from"./index-a52c829c.js";import{g}from"./trial-5b97a685.js";import{I as j}from"./infoItem-c08b171d.js";import{t as q}from"./format-31cde443.js";const P={class:"page-insure-result"},D={class:"page-insure-result-wrap"},R={class:"header"},U={class:"content"},O={class:"content-header"},w={class:"product-name"},x=(e=>(b("data-v-68302929"),e=e(),k(),e))((()=>p("span",null,"保障中",-1))),F={class:"content-list"},Y={class:"footer-button"},M=a({name:"OrderResult"});var V=e(a({...M,setup(e){const a=t({orderNo:"",holderName:"",orderAmount:"",orderStatus:""}),b=o(),k=r(),M=t(!1),{orderNo:V="",preview:B,saleUserId:G="",tenantId:J="",templateId:K=1}=b.query,z=t({});s((e=>a.value&&[l.SUCCESS,l.PAYMENT_SUCCESS,l.ACCEPT_POLICY].some((e=>{var t;return e===(null==(t=a.value)?void 0:t.orderStatus)}))));const H=s((e=>a.value&&[l.PAYMENT_FAILED,l.INSURER_REJECT,l.TIMEOUT,l.FAILED,l.CANCELED].some((e=>{var t;return e===(null==(t=a.value)?void 0:t.orderStatus)}))));s((()=>a.value.orderStatus===l.PAYING));const Q=()=>{k.push({path:S.orderList,query:b.query})},W=()=>{k.push({path:S.updateBankInfo,query:b.query})},X=()=>{g({orderNo:V,tenantId:J}).then((e=>{var t,o,r;const{code:s,data:l}=e;if("10000"===s){M.value=!1;const{holder:{name:e},policyNo:s,insuredList:n,applicationReqList:d}=l;z.value=l,null==(t=l.tenantOrderPaymentInfoList)||t[0];const{productName:u,riskList:i}=(null==(r=null==(o=null==n?void 0:n[0])?void 0:o.productList)?void 0:r[0])||{};let c=d.map((e=>e.applicationNo));(null==s?void 0:s.length)&&(c=s),a.value={holderName:e,productName:u,policyList:c,validateDate:"",coverage:null==i?void 0:i[0].coverage,orderStatusDesc:C[l.orderStatus],orderStatus:l.orderStatus,orderNo:l.orderNo,orderAmount:q(l.orderAmount)}}}))},Z=()=>{E.confirm({title:"投保提示",message:"选择转批扣后将对该笔订单进行转换批次扣款，提交后将无法操作变更卡号，再次划款",cancelButtonText:"返回重选"}).then((async()=>{const{code:e,data:a}=await L({orderNo:V,tenantId:J});"10000"===e&&X()}))};return n((()=>{B||X()})),(e,t)=>{const o=_,r=A,s=T;return d(),u("div",P,[i(o),i(s,{modelValue:v(M),"onUpdate:modelValue":t[0]||(t[0]=e=>I(M)?M.value=e:null),onRefresh:X},{default:c((()=>[p("div",D,[p("div",R,m(v(z).orderStatusDesc),1),p("div",U,[p("div",O,[p("h4",w,m(v(a).productName),1),x]),i(j,{label:"投保人:",content:v(a).holderName,line:""},null,8,["content"]),i(j,{label:"投/保单号:",line:""},{content:c((()=>[p("div",F,[(d(!0),u(N,null,f(v(a).policyList,(e=>(d(),u("p",{key:e},m(e),1)))),128))])])),_:1}),i(j,{label:"保费:",content:v(a).orderAmount,line:""},null,8,["content"])]),p("div",Y,[v(H)?(d(),u(N,{key:0},[i(r,{type:"primary",plain:"",onClick:W},{default:c((()=>[y("变更卡号")])),_:1}),i(r,{type:"primary",onClick:Z},{default:c((()=>[y("线下扣款")])),_:1})],64)):(d(),h(r,{key:1,block:"",type:"primary",onClick:Q},{default:c((()=>[y("确定")])),_:1}))])])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-68302929"]]);export{V as default};
