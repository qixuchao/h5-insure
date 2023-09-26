import{_ as e,d as a,i as l,h as d,j as o,k as s,aj as n,O as r,o as t,c,a as m,b as i,e as u,u as p,m as h,w as v,f,a8 as y,T as b,cn as k,cf as V,cg as g,ch as C,ag as w,aC as x,aD as N}from"./index-df1d7325.js";import{g as _}from"./trial-d9bdf76c.js";import{c as j,e as q}from"./verify-514c07d9.js";const I={class:"page-pay-auth-wrap"},T={class:"header"},U={class:"content"},O={class:"bank-card"},R={class:"card-content"},W={class:"main"},A={class:"bank-name"},B={class:"bank-no"},D={class:"bank-card-type"},E=(e=>(x("data-v-7568e6d7"),e=e(),N(),e))((()=>m("p",{class:"desc"},"实时单笔限额5W 实时单日限额5W",-1))),L={class:"footer-button"},P=a({name:"payAuth"});var z=e(a({...P,setup(e){const a=l(),x=d(),{orderNo:N,tenantId:P}=a.query,z=o(),F=o(),G=o({}),H=s((()=>F.value.holder.certType===n.CERT?"身份证号":"证件号")),J=(e,a)=>{j(F.value).then((({code:e,data:l})=>{"10000"===e&&(null==a||a())}))},K=()=>{z.value.validate().then((e=>{q(F.value).then((({code:e,data:a})=>{"10000"===e&&(x.back(),b("成功"))}))})).catch((e=>{console.log("e",e)}))};return r((()=>{(async()=>{await _({orderNo:N,tenantId:P}).then((({code:e,data:a})=>{"10000"===e&&(F.value=a,G.value=a.tenantOrderPayInfoList.find((e=>1===e.payInfoType)))}))})()})),(e,a)=>{const l=k,d=V,o=g,s=C,n=w;return t(),c("div",I,[m("div",T,[i(l,{type:"warning",content:"根据央行发布《关于规范支付创新业务的通知》，明确代收服务机构应当要求收款人事先与付款人签订收款协议，取得持卡人授权，并在代收交易处理中验证协议关系，银行与持卡人的直接授权。"})]),m("div",U,[m("div",O,[m("div",R,[m("div",W,[m("span",A,u(p(G).payBank||"中国工商银行"),1),m("span",B,u(p(G).bankCardNo||"**** **** **** 3941"),1)]),m("p",D,u(p(G).bankCardType||"储蓄卡"),1),E])]),p(F)?(t(),h(s,{key:0,ref_key:"formRef",ref:z,model:p(F).holder},{default:v((()=>[i(d,{modelValue:p(F).holder.name,"onUpdate:modelValue":a[0]||(a[0]=e=>p(F).holder.name=e),label:"姓名",name:"name",maxlength:"11","is-view":"",required:""},null,8,["modelValue"]),i(d,{modelValue:p(F).holder.certNo,"onUpdate:modelValue":a[1]||(a[1]=e=>p(F).holder.certNo=e),label:p(H),name:"certNo",maxlength:"18","is-view":"",required:""},null,8,["modelValue","label"]),i(d,{modelValue:p(F).holder.mobile,"onUpdate:modelValue":a[2]||(a[2]=e=>p(F).holder.mobile=e),label:"银行预留手机",name:"mobile",maxlength:"11","is-view":"",required:""},null,8,["modelValue"]),i(o,{modelValue:p(F).holder.verifyCode,"onUpdate:modelValue":a[3]||(a[3]=e=>p(F).holder.verifyCode=e),label:"验证码",maxlength:"6",name:"verifyCode","related-name":"mobile","send-s-m-s-code":J,required:""},null,8,["modelValue"])])),_:1},8,["model"])):f("",!0)]),m("div",L,[i(n,{type:"primary",onClick:K},{default:v((()=>[y("提交")])),_:1})])])}}}),[["__scopeId","data-v-7568e6d7"]]);export{z as default};
