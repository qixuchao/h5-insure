import{_ as e,d as a,i as l,h as s,j as n,k as o,ah as d,l as t,o as r,c,a as u,b as i,e as m,u as v,p,w as h,f as y,v as b,cM as f,aX as k,y as w,cN as V,T as g,cB as I,bs as N,cl as q,cm as x,aI as B,b1 as C,b2 as T,cO as _,cP as U}from"./index-e61895f6.js";import{g as j}from"./trial-b5a25ec6.js";const z={class:"page-pay-auth-wrap"},A={class:"header"},O={class:"content"},P={class:"bank-card"},R={class:"card-content"},W={class:"main"},E={class:"bank-name"},K={class:"bank-no"},L={class:"bank-card-type"},M=(e=>(C("data-v-ac855410"),e=e(),T(),e))((()=>u("p",{class:"desc"},"实时单笔限额5W 实时单日限额5W",-1))),X={class:"footer-button"},D=a({name:"payAuth"});var F=e(a({...D,setup(e){const a=l(),C=s(),{orderNo:T,tenantId:D}=a.query,F=n(),G=n(),H=n({}),J=n(!1),Q=o((()=>G.value.holder.certType===d.CERT?"身份证号":"证件号")),S=(e,l)=>{f(G.value).then((({code:e,data:s})=>{"10000"===e?null==l||l():k.confirm({confirmButtonText:"银行卡修改",message:"当前暂不支持该银行，建议更换银行卡"}).then((()=>{C.push({path:w.updateBankInfo,query:a.query})}))}))},Y=async(e,a)=>{const{code:l}=await V(G.value);return"10000"===l&&(g("短信验证成功"),null==a||a(),!0)},Z=()=>{J.value=!0,F.value.validate().then((e=>{C.back(),J.value=!1})).catch((e=>{J.value=!1,console.log("e",e)}))},$=n(),ee=async()=>{await j({orderNo:T,tenantId:D}).then((({code:e,data:a})=>{"10000"===e&&(G.value=a,H.value=a.tenantOrderPayInfoList.find((e=>1===e.payInfoType)),(async e=>{var a;const l=await _(U("BANK"))||[];$.value=null==(a=l.find((a=>a.code===e)))?void 0:a.name})(H.value.payBank))}))};t((()=>{ee()}));const ae=n();return t((()=>{setTimeout((async()=>{ae.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const l=I,s=N,n=q,o=x,d=B;return r(),c("div",z,[u("div",A,[i(l,{type:"warning",content:"根据央行发布《关于规范支付创新业务的通知》，明确代收服务机构应当要求收款人事先与付款人签订收款协议，取得持卡人授权，并在代收交易处理中验证协议关系，银行与持卡人的直接授权。"})]),u("div",O,[u("div",P,[u("div",R,[u("div",W,[u("span",E,m(v($)),1),u("span",K,m(v(H).bankCardNo),1)]),u("p",L,m(v(H).bankCardType||"储蓄卡"),1),M])]),v(G)?(r(),p(o,{key:0,ref_key:"formRef",ref:F,model:v(G).holder},{default:h((()=>[i(s,{modelValue:v(G).holder.name,"onUpdate:modelValue":a[0]||(a[0]=e=>v(G).holder.name=e),label:"姓名",name:"name",maxlength:"11","is-view":"",required:""},null,8,["modelValue"]),i(s,{modelValue:v(G).holder.certNo,"onUpdate:modelValue":a[1]||(a[1]=e=>v(G).holder.certNo=e),label:v(Q),name:"certNo",maxlength:"18","is-view":"",required:""},null,8,["modelValue","label"]),i(s,{modelValue:v(G).holder.mobile,"onUpdate:modelValue":a[2]||(a[2]=e=>v(G).holder.mobile=e),label:"银行预留手机",name:"mobile",maxlength:"11","is-view":"",required:""},null,8,["modelValue"]),i(n,{modelValue:v(G).holder.verifyCode,"onUpdate:modelValue":a[3]||(a[3]=e=>v(G).holder.verifyCode=e),label:"验证码",maxlength:"6",name:"verifyCode","related-name":"mobile","send-s-m-s-code":S,"check-s-m-s-code":Y,required:""},null,8,["modelValue"])])),_:1},8,["model"])):y("",!0)]),u("div",X,[i(d,{type:"primary",disabled:v(J),onClick:Z},{default:h((()=>[b("提交")])),_:1},8,["disabled"])])])}}}),[["__scopeId","data-v-ac855410"]]);export{F as default};
