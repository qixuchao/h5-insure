import{_ as e,d as a,i as l,h as s,j as d,k as o,ah as n,l as t,o as r,c,a as i,b as u,e as m,u as p,p as v,w as h,f as b,v as y,c$ as f,bi as k,y as w,d0 as V,T as g,cY as I,bL as q,cA as x,cB as B,b3 as C,bo as N,bp as T,d1 as _,d2 as U}from"./index-2ac8b6d6.js";import{g as j}from"./trial-4ea734ea.js";const A={class:"page-pay-auth-wrap"},z={class:"header"},L={class:"content"},R={class:"bank-card"},W={class:"card-content"},E={class:"main"},K={class:"bank-name"},O={class:"bank-no"},P={class:"bank-card-type"},Y=(e=>(N("data-v-350a1f76"),e=e(),T(),e))((()=>i("p",{class:"desc"},"实时单笔限额5W 实时单日限额5W",-1))),$={class:"footer-button"},D=a({name:"payAuth"});var F=e(a({...D,setup(e){const a=l(),N=s(),{orderNo:T,tenantId:D}=a.query,F=d(),G=d(),H=d({}),J=o((()=>G.value.holder.certType===n.CERT?"身份证号":"证件号")),M=(e,l)=>{f(G.value).then((({code:e,data:s})=>{"10000"===e?null==l||l():k.confirm({confirmButtonText:"银行卡修改",message:"当前暂不支持该银行，建议更换银行卡"}).then((()=>{N.push({path:w.updateBankInfo,query:a.query})}))}))},Q=()=>{F.value.validate().then((e=>{V(G.value).then((({code:e,data:a})=>{"10000"===e&&(N.back(),g("成功"))}))})).catch((e=>{console.log("e",e)}))},S=d(),X=async()=>{await j({orderNo:T,tenantId:D}).then((({code:e,data:a})=>{"10000"===e&&(G.value=a,H.value=a.tenantOrderPayInfoList.find((e=>1===e.payInfoType)),(async e=>{var a;const l=await _(U("BANK"))||[];S.value=null==(a=l.find((a=>a.code===e)))?void 0:a.name})(H.value.payBank))}))};t((()=>{X()}));const Z=d();return t((()=>{setTimeout((async()=>{Z.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const l=I,s=q,d=x,o=B,n=C;return r(),c("div",A,[i("div",z,[u(l,{type:"warning",content:"根据央行发布《关于规范支付创新业务的通知》，明确代收服务机构应当要求收款人事先与付款人签订收款协议，取得持卡人授权，并在代收交易处理中验证协议关系，银行与持卡人的直接授权。"})]),i("div",L,[i("div",R,[i("div",W,[i("div",E,[i("span",K,m(p(S)),1),i("span",O,m(p(H).bankCardNo),1)]),i("p",P,m(p(H).bankCardType||"储蓄卡"),1),Y])]),p(G)?(r(),v(o,{key:0,ref_key:"formRef",ref:F,model:p(G).holder},{default:h((()=>[u(s,{modelValue:p(G).holder.name,"onUpdate:modelValue":a[0]||(a[0]=e=>p(G).holder.name=e),label:"姓名",name:"name",maxlength:"11","is-view":"",required:""},null,8,["modelValue"]),u(s,{modelValue:p(G).holder.certNo,"onUpdate:modelValue":a[1]||(a[1]=e=>p(G).holder.certNo=e),label:p(J),name:"certNo",maxlength:"18","is-view":"",required:""},null,8,["modelValue","label"]),u(s,{modelValue:p(G).holder.mobile,"onUpdate:modelValue":a[2]||(a[2]=e=>p(G).holder.mobile=e),label:"银行预留手机",name:"mobile",maxlength:"11","is-view":"",required:""},null,8,["modelValue"]),u(d,{modelValue:p(G).holder.verifyCode,"onUpdate:modelValue":a[3]||(a[3]=e=>p(G).holder.verifyCode=e),label:"验证码",maxlength:"6",name:"verifyCode","related-name":"mobile","send-s-m-s-code":M,required:""},null,8,["modelValue"])])),_:1},8,["model"])):b("",!0)]),i("div",$,[u(n,{type:"primary",onClick:Q},{default:h((()=>[y("提交")])),_:1})])])}}}),[["__scopeId","data-v-350a1f76"]]);export{F as default};
