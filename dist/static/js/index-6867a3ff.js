var $=Object.defineProperty,j=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var U=(r,t,a)=>t in r?$(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,A=(r,t)=>{for(var a in t||(t={}))z.call(t,a)&&U(r,a,t[a]);if(M)for(var a of M(t))J.call(t,a)&&U(r,a,t[a]);return r},L=(r,t)=>j(r,G(t));import{g as S,E as F,M as P,_ as K,r as h,j as y,k as V,m as N,p as D,A as o,z as m,J as W,L as q,T as w,O as X,a9 as Y,h as Q,n as Z,G as ee,F as te,C as ae}from"./vendor-06835924.js";import{R as oe}from"./infoCollection-b0426750.js";import{s as ne,c as se}from"./phoneVerify-64dfb942.js";import{v as H,a as ue,b as re}from"./validator-ebd71d12.js";import{F as O,g as le}from"./utils-b9a1ad53.js";import{G as ie}from"./index-a9f4d3a8.js";import{g as ce,m as me,i as de}from"./trial-5482c514.js";import{p as fe}from"./product-61406ff3.js";import{t as pe}from"./theme-eeb93d73.js";import"./trial-dae21fba.js";const ve=S({props:{isCheck:{type:Boolean,default:!1},userInfo:{type:Object,default:()=>{}}},emits:["on-verify"],setup(r,{emit:t}){var k;const a=r,u=F({}),l=F(!1),E=30,c=F(0),C=F("\u83B7\u53D6\u9A8C\u8BC1\u7801"),n=P({mobile:(k=a.userInfo)==null?void 0:k.mobile,smsCode:""}),_=d=>H(d)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7",e=()=>{if(c.value>0)return;c.value=E;const d=()=>{C.value=`${c.value}s`,c.value-=1};d();const s=setInterval(()=>{c.value===0?(C.value="\u83B7\u53D6\u9A8C\u8BC1\u7801",c.value=0,clearInterval(s)):d()},1e3)},b=async()=>{c.value>0||u==null||u.value.validate("mobile").then(async()=>{const d=await ne(n.mobile),{code:s,data:i}=d;s==="10000"&&(l.value=!0,w({message:"\u77ED\u4FE1\u53D1\u9001\u6210\u529F\uFF0C\u8BF7\u67E5\u6536"}),e())})},B=async()=>{const d=await se(n.mobile,n.smsCode),{data:s}=d;s&&t("on-verify",n)},I=async()=>{u==null||u.value.validate().then(async()=>{B()})};return K(()=>n,()=>{H(n.mobile)&&ue(n.smsCode)&&l.value&&B()},{deep:!0,immediate:!0}),(d,s)=>{const i=h("van-field"),v=h("van-cell-group"),f=h("VanForm");return y(),V(f,{ref_key:"formRef",ref:u,"label-width":"80"},{default:N(()=>[D(v,null,{default:N(()=>[D(i,{modelValue:o(n).mobile,"onUpdate:modelValue":s[0]||(s[0]=p=>o(n).mobile=p),name:"mobile",label:"\u624B\u673A\u53F7",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",maxlength:o(O).MOBILE,rules:[{validator:_}]},null,8,["modelValue","maxlength","rules"]),D(i,{modelValue:o(n).smsCode,"onUpdate:modelValue":s[1]||(s[1]=p=>o(n).smsCode=p),type:"digit",name:"smsCode",label:"\u9A8C\u8BC1\u7801",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",maxlength:o(O).SMS_CODE},{button:N(()=>[m("div",{class:q(["sms-code",{"count-down":c.value>0}]),onClick:b},W(C.value),3)]),_:1},8,["modelValue","maxlength"])]),_:1}),m("div",{class:q([{"check-submit":a.isCheck},{submit:!a.isCheck}]),onClick:I},null,2)]),_:1},512)}}}),_e=S({props:{userInfo:{type:Object,default:()=>{}}},emits:["on-submit"],setup(r,{emit:t}){const a=r,u=F({}),l=P({name:a.userInfo.name,certNo:a.userInfo.certNo}),E=n=>ie(l.certNo)?!0:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u8BC1\u4EF6\u53F7",c=n=>re(n)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u59D3\u540D",C=()=>{u==null||u.value.validate().then(async n=>{t("on-submit",l)})};return(n,_)=>{const e=h("van-field"),b=h("van-cell-group"),B=h("VanForm");return y(),V(B,{ref_key:"formRef",ref:u,"label-width":"80"},{default:N(()=>[D(b,null,{default:N(()=>[D(e,{modelValue:o(l).name,"onUpdate:modelValue":_[0]||(_[0]=I=>o(l).name=I),name:"name",label:"\u59D3\u540D",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",maxlength:o(O).NAME,rules:[{validator:c}]},null,8,["modelValue","maxlength","rules"]),D(e,{modelValue:o(l).certNo,"onUpdate:modelValue":_[1]||(_[1]=I=>o(l).certNo=I),name:"certNo",label:"\u8EAB\u4EFD\u8BC1",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",maxlength:o(O).ID_CARD,rules:[{validator:E}]},null,8,["modelValue","maxlength","rules"])]),_:1}),m("div",{class:"submit",onClick:C})]),_:1},512)}}});var he="/static/assets/title-step1.97cb9efa.png",Ce="/static/assets/title-step2.258af5e9.png";const be={class:"page-activity-invite"},ge=["src"],Fe={class:"container"},Be={class:"main-form"},Ie={class:"title"},ye=["src"],De={class:"agree"},Ve={class:"check-wrap"},Ne=ae(" \u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F "),Ue=S({setup(r){const t=X(),a=Y(),{productCode:u="7X9",tenantId:l="",phoneNo:E,saleChannelId:c,agentCode:C="",paymentMethod:n}=t.query,_=F(!0),e=P({title:he,attachmentList:[{attachmentName:"",attachmentUri:""}],userInfo:{mobile:E,certNo:"",name:""},agree:!1}),b=F(),B=F(),I=async s=>{var p,g;e.userInfo.mobile=s.mobile;const i=await ce({holderPhone:e.userInfo.mobile,productCode:u,tenantId:l}),{code:v,data:f}=i;v==="10000"&&(e.userInfo.name=(p=f.tenantOrderHolder)==null?void 0:p.name,e.userInfo.certNo=(g=f.tenantOrderHolder)==null?void 0:g.certNo),e.title=Ce,_.value=!1},k=async s=>{if(!e.agree){w("\u8BF7\u52FE\u9009\u534F\u8BAE");return}try{w({message:"\u9886\u53D6\u4E2D...",forbidClick:!0,loadingType:"spinner"}),e.userInfo.certNo=s.certNo,e.userInfo.name=s.name;const i=le({tenantId:l,detail:b.value,insureDetail:B.value,saleChannelId:c,saleUserId:C,holder:e.userInfo,insured:L(A({},e.userInfo),{relationToHolder:oe.SELF}),paymentMethod:n,renewalDK:"",successJumpUrl:"",premium:0,orderStatus:"",orderTopStatus:"",tenantOrderRiskList:[]}),v=await me(i),{code:f}=v;f==="10000"&&a.push({path:"/chuangxin/baigebao/productDetail",query:L(A({},t.query),{tenantId:l,phoneNo:e.userInfo.mobile,certNo:e.userInfo.certNo,name:e.userInfo.name,productCode:"BWYL2021",agentCode:C})})}catch(i){console.log(i),w.clear()}},d=async()=>{const s=fe({productCode:u,withInsureInfo:!0,tenantId:l}),i=de({productCode:u});Promise.all([s,i]).then(([v,f])=>{var p,g;v.code==="10000"&&(b.value=v.data,e.attachmentList=((g=(p=b.value)==null?void 0:p.tenantProductInsureVO)==null?void 0:g.attachmentVOList)||[]),f.code==="10000"&&(B.value=f.data)})};return Q(()=>{d()}),(s,i)=>{const v=h("van-checkbox"),f=h("ProPDFviewer"),p=h("van-config-provider");return y(),V(p,{"theme-vars":o(pe)},{default:N(()=>{var g,T;return[m("div",be,[m("img",{src:(T=(g=b.value)==null?void 0:g.tenantProductInsureVO)==null?void 0:T.banner[0],class:"banner"},null,8,ge),m("div",Fe,[m("div",Be,[m("div",Ie,[m("img",{src:o(e).title},null,8,ye)]),_.value?(y(),V(ve,{key:0,"user-info":o(e).userInfo,onOnVerify:I},null,8,["user-info"])):(y(),V(_e,{key:1,"user-info":o(e).userInfo,onOnSubmit:k},null,8,["user-info"])),m("div",De,[m("div",Ve,[D(v,{modelValue:o(e).agree,"onUpdate:modelValue":i[0]||(i[0]=x=>o(e).agree=x),name:"agree",shape:"square"},null,8,["modelValue"])]),m("div",null,[Ne,(y(!0),Z(te,null,ee(o(e).attachmentList||[],(x,R)=>(y(),V(f,{key:R,class:"file-name",title:`\u300A${x.attachmentName}\u300B`,content:x.attachmentUri,type:"pdf"},null,8,["title","content"]))),128))])])])])])]}),_:1},8,["theme-vars"])}}});export{Ue as default};
