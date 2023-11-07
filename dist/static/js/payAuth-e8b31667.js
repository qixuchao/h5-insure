import{_ as a,d as e,i as l,h as s,j as o,k as d,al as n,O as t,o as r,c,a as m,b as u,e as i,u as p,m as h,w as f,f as v,a8 as b,cQ as y,aK as k,cR as V,T as g,cF as q,bq as w,cp as x,cq as C,ai as I,aE as N,aF as T}from"./index-8120d8cf.js";import{g as _}from"./trial-7cb4d685.js";import{P as j}from"./constants-4b08cf92.js";const U={class:"page-pay-auth-wrap"},B={class:"header"},R={class:"content"},E={class:"bank-card"},F={class:"card-content"},O={class:"main"},P={class:"bank-name"},W={class:"bank-no"},A={class:"bank-card-type"},K=(a=>(N("data-v-6c1f940c"),a=a(),T(),a))((()=>m("p",{class:"desc"},"实时单笔限额5W 实时单日限额5W",-1))),L={class:"footer-button"},Q=e({name:"payAuth"});var z=a(e({...Q,setup(a){const e=l(),N=s(),{orderNo:T,tenantId:Q}=e.query,z=o(),D=o(),G=o({}),H=d((()=>D.value.holder.certType===n.CERT?"身份证号":"证件号")),J=(a,l)=>{y(D.value).then((({code:a,data:s})=>{"10000"===a?null==l||l():k.confirm({confirmButtonText:"银行卡修改",message:"当前暂不支持该银行，建议更换银行卡"}).then((()=>{N.push({path:j.updateBankInfo,query:e.query})}))}))},M=()=>{z.value.validate().then((a=>{V(D.value).then((({code:a,data:e})=>{"10000"===a&&(N.back(),g("成功"))}))})).catch((a=>{console.log("e",a)}))};return t((()=>{(async()=>{await _({orderNo:T,tenantId:Q}).then((({code:a,data:e})=>{"10000"===a&&(D.value=e,G.value=e.tenantOrderPayInfoList.find((a=>1===a.payInfoType)))}))})()})),(a,e)=>{const l=q,s=w,o=x,d=C,n=I;return r(),c("div",U,[m("div",B,[u(l,{type:"warning",content:"根据央行发布《关于规范支付创新业务的通知》，明确代收服务机构应当要求收款人事先与付款人签订收款协议，取得持卡人授权，并在代收交易处理中验证协议关系，银行与持卡人的直接授权。"})]),m("div",R,[m("div",E,[m("div",F,[m("div",O,[m("span",P,i(p(G).payBank||"中国工商银行"),1),m("span",W,i(p(G).bankCardNo||"**** **** **** 3941"),1)]),m("p",A,i(p(G).bankCardType||"储蓄卡"),1),K])]),p(D)?(r(),h(d,{key:0,ref_key:"formRef",ref:z,model:p(D).holder},{default:f((()=>[u(s,{modelValue:p(D).holder.name,"onUpdate:modelValue":e[0]||(e[0]=a=>p(D).holder.name=a),label:"姓名",name:"name",maxlength:"11","is-view":"",required:""},null,8,["modelValue"]),u(s,{modelValue:p(D).holder.certNo,"onUpdate:modelValue":e[1]||(e[1]=a=>p(D).holder.certNo=a),label:p(H),name:"certNo",maxlength:"18","is-view":"",required:""},null,8,["modelValue","label"]),u(s,{modelValue:p(D).holder.mobile,"onUpdate:modelValue":e[2]||(e[2]=a=>p(D).holder.mobile=a),label:"银行预留手机",name:"mobile",maxlength:"11","is-view":"",required:""},null,8,["modelValue"]),u(o,{modelValue:p(D).holder.verifyCode,"onUpdate:modelValue":e[3]||(e[3]=a=>p(D).holder.verifyCode=a),label:"验证码",maxlength:"6",name:"verifyCode","related-name":"mobile","send-s-m-s-code":J,required:""},null,8,["modelValue"])])),_:1},8,["model"])):v("",!0)]),m("div",L,[u(n,{type:"primary",onClick:M},{default:f((()=>[b("提交")])),_:1})])])}}}),[["__scopeId","data-v-6c1f940c"]]);export{z as default};
