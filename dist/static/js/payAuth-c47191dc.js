import{_ as e,d as a,i as l,h as s,j as o,k as d,au as n,l as t,o as r,c,a as u,b as i,e as m,u as p,p as h,w as v,f as y,v as b,d0 as f,aN as k,y as w,d1 as V,T as g,cR as C,bE as I,cB as q,cC as x,ar as N,aC as T,aD as B}from"./index-f786204a.js";import{g as _}from"./trial-628b75c1.js";const U={class:"page-pay-auth-wrap"},j={class:"header"},R={class:"content"},z={class:"bank-card"},E={class:"card-content"},W={class:"main"},A={class:"bank-name"},D={class:"bank-no"},L={class:"bank-card-type"},O=(e=>(T("data-v-27cbce8c"),e=e(),B(),e))((()=>u("p",{class:"desc"},"实时单笔限额5W 实时单日限额5W",-1))),P={class:"footer-button"},F=a({name:"payAuth"});var G=e(a({...F,setup(e){const a=l(),T=s(),{orderNo:B,tenantId:F}=a.query,G=o(),H=o(),J=o({}),K=d((()=>H.value.holder.certType===n.CERT?"身份证号":"证件号")),M=(e,l)=>{f(H.value).then((({code:e,data:s})=>{"10000"===e?null==l||l():k.confirm({confirmButtonText:"银行卡修改",message:"当前暂不支持该银行，建议更换银行卡"}).then((()=>{T.push({path:w.updateBankInfo,query:a.query})}))}))},Q=()=>{G.value.validate().then((e=>{V(H.value).then((({code:e,data:a})=>{"10000"===e&&(T.back(),g("成功"))}))})).catch((e=>{console.log("e",e)}))};t((()=>{(async()=>{await _({orderNo:B,tenantId:F}).then((({code:e,data:a})=>{"10000"===e&&(H.value=a,J.value=a.tenantOrderPayInfoList.find((e=>1===e.payInfoType)))}))})()}));const S=o();return t((()=>{setTimeout((async()=>{S.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const l=C,s=I,o=q,d=x,n=N;return r(),c("div",U,[u("div",j,[i(l,{type:"warning",content:"根据央行发布《关于规范支付创新业务的通知》，明确代收服务机构应当要求收款人事先与付款人签订收款协议，取得持卡人授权，并在代收交易处理中验证协议关系，银行与持卡人的直接授权。"})]),u("div",R,[u("div",z,[u("div",E,[u("div",W,[u("span",A,m(p(J).payBank||"中国工商银行"),1),u("span",D,m(p(J).bankCardNo||"**** **** **** 3941"),1)]),u("p",L,m(p(J).bankCardType||"储蓄卡"),1),O])]),p(H)?(r(),h(d,{key:0,ref_key:"formRef",ref:G,model:p(H).holder},{default:v((()=>[i(s,{modelValue:p(H).holder.name,"onUpdate:modelValue":a[0]||(a[0]=e=>p(H).holder.name=e),label:"姓名",name:"name",maxlength:"11","is-view":"",required:""},null,8,["modelValue"]),i(s,{modelValue:p(H).holder.certNo,"onUpdate:modelValue":a[1]||(a[1]=e=>p(H).holder.certNo=e),label:p(K),name:"certNo",maxlength:"18","is-view":"",required:""},null,8,["modelValue","label"]),i(s,{modelValue:p(H).holder.mobile,"onUpdate:modelValue":a[2]||(a[2]=e=>p(H).holder.mobile=e),label:"银行预留手机",name:"mobile",maxlength:"11","is-view":"",required:""},null,8,["modelValue"]),i(o,{modelValue:p(H).holder.verifyCode,"onUpdate:modelValue":a[3]||(a[3]=e=>p(H).holder.verifyCode=e),label:"验证码",maxlength:"6",name:"verifyCode","related-name":"mobile","send-s-m-s-code":M,required:""},null,8,["modelValue"])])),_:1},8,["model"])):y("",!0)]),u("div",P,[i(n,{type:"primary",onClick:Q},{default:v((()=>[b("提交")])),_:1})])])}}}),[["__scopeId","data-v-27cbce8c"]]);export{G as default};
