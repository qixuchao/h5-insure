import{_ as a,d as e,i as l,h as d,j as o,k as s,aj as n,O as r,o as t,c,a as m,b as i,e as u,u as p,m as f,w as h,f as v,a8 as b,T as y,cw as k,bn as V,cn as g,co as w,ag as C,aC as x,aD as N}from"./index-39e2f33f.js";import{g as _}from"./trial-8f289901.js";import{g as j,h as q}from"./verify-4d8c9830.js";const I={class:"page-pay-auth-wrap"},T={class:"header"},U={class:"content"},O={class:"bank-card"},R={class:"card-content"},W={class:"main"},A={class:"bank-name"},B={class:"bank-no"},D={class:"bank-card-type"},E=(a=>(x("data-v-35bc7f3a"),a=a(),N(),a))((()=>m("p",{class:"desc"},"实时单笔限额5W 实时单日限额5W",-1))),L={class:"footer-button"},P=e({name:"payAuth"});var z=a(e({...P,setup(a){const e=l(),x=d(),{orderNo:N,tenantId:P}=e.query,z=o(),F=o(),G=o({}),H=s((()=>F.value.holder.certType===n.CERT?"身份证号":"证件号")),J=(a,e)=>{j(F.value).then((({code:a,data:l})=>{"10000"===a&&(null==e||e())}))},K=()=>{z.value.validate().then((a=>{q(F.value).then((({code:a,data:e})=>{"10000"===a&&(x.back(),y("成功"))}))})).catch((a=>{console.log("e",a)}))};return r((()=>{(async()=>{await _({orderNo:N,tenantId:P}).then((({code:a,data:e})=>{"10000"===a&&(F.value=e,G.value=e.tenantOrderPayInfoList.find((a=>1===a.payInfoType)))}))})()})),(a,e)=>{const l=k,d=V,o=g,s=w,n=C;return t(),c("div",I,[m("div",T,[i(l,{type:"warning",content:"根据央行发布《关于规范支付创新业务的通知》，明确代收服务机构应当要求收款人事先与付款人签订收款协议，取得持卡人授权，并在代收交易处理中验证协议关系，银行与持卡人的直接授权。"})]),m("div",U,[m("div",O,[m("div",R,[m("div",W,[m("span",A,u(p(G).payBank||"中国工商银行"),1),m("span",B,u(p(G).bankCardNo||"**** **** **** 3941"),1)]),m("p",D,u(p(G).bankCardType||"储蓄卡"),1),E])]),p(F)?(t(),f(s,{key:0,ref_key:"formRef",ref:z,model:p(F).holder},{default:h((()=>[i(d,{modelValue:p(F).holder.name,"onUpdate:modelValue":e[0]||(e[0]=a=>p(F).holder.name=a),label:"姓名",name:"name",maxlength:"11","is-view":"",required:""},null,8,["modelValue"]),i(d,{modelValue:p(F).holder.certNo,"onUpdate:modelValue":e[1]||(e[1]=a=>p(F).holder.certNo=a),label:p(H),name:"certNo",maxlength:"18","is-view":"",required:""},null,8,["modelValue","label"]),i(d,{modelValue:p(F).holder.mobile,"onUpdate:modelValue":e[2]||(e[2]=a=>p(F).holder.mobile=a),label:"银行预留手机",name:"mobile",maxlength:"11","is-view":"",required:""},null,8,["modelValue"]),i(o,{modelValue:p(F).holder.verifyCode,"onUpdate:modelValue":e[3]||(e[3]=a=>p(F).holder.verifyCode=a),label:"验证码",maxlength:"6",name:"verifyCode","related-name":"mobile","send-s-m-s-code":J,required:""},null,8,["modelValue"])])),_:1},8,["model"])):v("",!0)]),m("div",L,[i(n,{type:"primary",onClick:K},{default:h((()=>[b("提交")])),_:1})])])}}}),[["__scopeId","data-v-35bc7f3a"]]);export{z as default};
