import{_ as a,d as e,i as l,h as s,j as o,k as d,am as n,O as t,o as r,c,a as m,b as u,e as i,u as p,m as f,w as h,f as v,a8 as b,cU as y,aD as k,aa as V,cV as g,T as w,cJ as q,bu as x,ct as C,cu as I,aj as N,av as T,aw as _}from"./index-09fafbfe.js";import{g as U}from"./trial-2798f6b5.js";const j={class:"page-pay-auth-wrap"},B={class:"header"},O={class:"content"},R={class:"bank-card"},W={class:"card-content"},A={class:"main"},D={class:"bank-name"},E={class:"bank-no"},J={class:"bank-card-type"},L=(a=>(T("data-v-6c1f940c"),a=a(),_(),a))((()=>m("p",{class:"desc"},"实时单笔限额5W 实时单日限额5W",-1))),P={class:"footer-button"},z=e({name:"payAuth"});var F=a(e({...z,setup(a){const e=l(),T=s(),{orderNo:_,tenantId:z}=e.query,F=o(),G=o(),H=o({}),K=d((()=>G.value.holder.certType===n.CERT?"身份证号":"证件号")),M=(a,l)=>{y(G.value).then((({code:a,data:s})=>{"10000"===a?null==l||l():k.confirm({confirmButtonText:"银行卡修改",message:"当前暂不支持该银行，建议更换银行卡"}).then((()=>{T.push({path:V.updateBankInfo,query:e.query})}))}))},Q=()=>{F.value.validate().then((a=>{g(G.value).then((({code:a,data:e})=>{"10000"===a&&(T.back(),w("成功"))}))})).catch((a=>{console.log("e",a)}))};return t((()=>{(async()=>{await U({orderNo:_,tenantId:z}).then((({code:a,data:e})=>{"10000"===a&&(G.value=e,H.value=e.tenantOrderPayInfoList.find((a=>1===a.payInfoType)))}))})()})),(a,e)=>{const l=q,s=x,o=C,d=I,n=N;return r(),c("div",j,[m("div",B,[u(l,{type:"warning",content:"根据央行发布《关于规范支付创新业务的通知》，明确代收服务机构应当要求收款人事先与付款人签订收款协议，取得持卡人授权，并在代收交易处理中验证协议关系，银行与持卡人的直接授权。"})]),m("div",O,[m("div",R,[m("div",W,[m("div",A,[m("span",D,i(p(H).payBank||"中国工商银行"),1),m("span",E,i(p(H).bankCardNo||"**** **** **** 3941"),1)]),m("p",J,i(p(H).bankCardType||"储蓄卡"),1),L])]),p(G)?(r(),f(d,{key:0,ref_key:"formRef",ref:F,model:p(G).holder},{default:h((()=>[u(s,{modelValue:p(G).holder.name,"onUpdate:modelValue":e[0]||(e[0]=a=>p(G).holder.name=a),label:"姓名",name:"name",maxlength:"11","is-view":"",required:""},null,8,["modelValue"]),u(s,{modelValue:p(G).holder.certNo,"onUpdate:modelValue":e[1]||(e[1]=a=>p(G).holder.certNo=a),label:p(K),name:"certNo",maxlength:"18","is-view":"",required:""},null,8,["modelValue","label"]),u(s,{modelValue:p(G).holder.mobile,"onUpdate:modelValue":e[2]||(e[2]=a=>p(G).holder.mobile=a),label:"银行预留手机",name:"mobile",maxlength:"11","is-view":"",required:""},null,8,["modelValue"]),u(o,{modelValue:p(G).holder.verifyCode,"onUpdate:modelValue":e[3]||(e[3]=a=>p(G).holder.verifyCode=a),label:"验证码",maxlength:"6",name:"verifyCode","related-name":"mobile","send-s-m-s-code":M,required:""},null,8,["modelValue"])])),_:1},8,["model"])):v("",!0)]),m("div",P,[u(n,{type:"primary",onClick:Q},{default:h((()=>[b("提交")])),_:1})])])}}}),[["__scopeId","data-v-6c1f940c"]]);export{F as default};
