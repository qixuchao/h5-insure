import{m as e,t as a,y as t,G as o,O as l,H as n,B as s,a7 as r,a8 as i,ac as d,u,r as c,o as v,s as p,v as m,x as f,z as I,T as h}from"./vendor-ec128989.js";import{j as w}from"./infoCollection-1700e66c.js";import{_ as y,a4 as g}from"./index-851d6f85.js";import{c as C}from"./close-bad1ffb4.js";import{_ as b}from"./index-52c5be5b.js";import{a as N}from"./order-866a8201.js";import{d as O,i as U,g as $,s as x,e as S,E as j}from"./trial-3ce4ad40.js";import{t as k}from"./theme-3c294048.js";import{n as D,i as L,m as _,e as P,a as B,t as R,j as V,f as z,h as F}from"./utils-3c392176.js";import{p as H}from"./product-56ab2948.js";import"./trial-5fa0ea82.js";const J={class:"com-field-info"},T={class:"title"},q={class:"desc"};var E=y(e({props:{title:{type:String,default:""},desc:{type:String,default:""}},setup:e=>(n,s)=>(a(),t("div",J,[o("div",T,l(e.title),1),o("div",q,l(e.desc),1)]))}),[["__scopeId","data-v-26c796cf"]]);const G=e=>(r("data-v-fa9670a0"),e=e(),i(),e),K={key:0,class:"pro-modal"},M=G((()=>o("div",{class:"pro-overlay"},null,-1))),W={class:"pro-modal-wrapper"},Y=G((()=>o("div",{class:"pro-modal-content"},[o("p",null,"恭喜您"),o("p",null,"保障升级成功")],-1))),A=["src"];var Q=y(e({props:{bg:{type:String,default:""},btn:{type:String,default:""},isShow:{type:Boolean,default:()=>{}}},emits:["on-confirm","on-close"],setup(e,{emit:l}){const r=e,i=()=>{l("on-close")},d=()=>{l("on-confirm")};return(e,l)=>r.isShow?(a(),t("div",K,[M,o("div",W,[o("div",{class:"pro-modal-body"},[Y,o("div",{class:"pro-modal-btn",onClick:d},"我知道了")]),o("div",{class:"pro-modal-close",onClick:i},[o("img",{src:n(C)},null,8,A)])])])):s("",!0)}}),[["__scopeId","data-v-fa9670a0"]]);const X={class:"page-activity-upgrade"},Z=["src"],ee={class:"container"},ae={class:"main-form"};var te=y(e({setup(e){const t=d(),l=u(),{productCode:s="BWYL2022",tenantId:r,orderNo:i,agentCode:y="",from:C}=l.query,J=c(),T=c(),q=c(),G=c(),K=c(),M=c(),W=c(!1),Y="check"===C,A=c(!1),te=c(0),oe=c("");let le="";const ne=()=>{W.value=!1},se=e=>`${g}/pay?orderNo=${e}&saleUserId=${y}&tenantId=${r}`,re=()=>{t.replace(`/pay?orderNo=${oe.value}&saleUserId=${y}&tenantId=${r}`)},ie=async e=>{try{h.loading({forbidClick:!0,message:"升级中",duration:15e3});const e=await(async()=>{var e,a,t,o,l;const n=B({tenantId:r,applicationNo:q.value.applicationNo,policyNo:q.value.policyNo,saleUserId:y,saleChannelId:q.value.saleChannelId,orderStatus:N.UP_PROCESSING,orderTopStatus:"-1",orderCategory:2,detail:J.value,insureDetail:T.value,paymentMethod:null==(a=null==(e=q.value.extInfo)?void 0:e.extraInfo)?void 0:a.paymentMethod,renewalDK:null==(o=null==(t=q.value.extInfo)?void 0:t.extraInfo)?void 0:o.renewalDK,iseeBizNo:le,successJumpUrl:"",premium:G.value,holder:{...q.value.tenantOrderHolder,socialFlag:q.value.tenantOrderHolder.extInfo.hasSocialInsurance},insured:{...q.value.tenantOrderInsuredList[0],socialFlag:q.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance},tenantOrderRiskList:R({tenantId:r,riskList:V(T.value.productRiskVoList[0].riskDetailVOList,J.value),riskPremium:{},productId:null==(l=J.value)?void 0:l.id})}),s=await x(n),{code:i,data:d}=s;return"10000"===i?d.data:""})();await O({tenantId:r,applicationNo:q.value.applicationNo});if(oe.value=e,M.value){if(Y){const a=encodeURIComponent(encodeURIComponent(se(e))),t=`${M.value}&successUrl=${a}`;window.location.href=t}else{const e=encodeURIComponent(encodeURIComponent(window.location.href)),a=`${M.value}&failUrl=${e}`;window.location.href=a}h.clear()}else(async e=>{const a=z({tenantId:r,premium:G.value,orderDetail:q.value,productDetail:J.value,insureDetail:T.value,successJumpUrl:se(e),iseeBizNo:le}),o=await j({orderNo:e,...a}),{code:l,data:n}=o;"10000"===l&&(Y?t.replace(`/internet/orderDetail?orderNo=${e}&productCode=${s}&tenantId=${r}`):(h.clear(),re()))})(e)}catch(a){h.clear()}},de=async e=>{Y?A.value=!0:ie()},ue=()=>{h.loading({forbidClick:!0,duration:2e4,message:"试算中"});const e=H({productCode:s,withInsureInfo:!0,tenantId:r}),a=U({productCode:s}),t=$({orderNo:i,tenantId:r});Promise.all([e,a,t]).then((([e,a,t])=>{var o;"10000"===e.code&&(J.value=e.data,document.title=(null==(o=e.data)?void 0:o.productFullName)||""),"10000"===a.code&&(T.value=a.data),"10000"===t.code&&(q.value=t.data,K.value=t.data.tenantOrderInsuredList[0].extInfo.hasSocialInsurance),(async()=>{try{const e=z({tenantId:r,premium:G.value,orderDetail:q.value,productDetail:J.value,insureDetail:T.value,successJumpUrl:""},F),a=await S(e),{code:t,data:o}=a;"10000"===t&&(G.value=o.installmentPremium,M.value=o.signUrl),h.clear()}catch(e){}})()}))};return v((()=>{ue(),setTimeout((async()=>{le=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const l=p("ProRadioButton"),s=p("ProField"),r=p("van-config-provider");return a(),m(r,{"theme-vars":n(k)},{default:f((()=>{var e,a,r,i,d,u,c,v,p,m;return[o("div",X,[o("img",{src:null==(a=null==(e=J.value)?void 0:e.tenantProductInsureVO)?void 0:a.banner[0],class:"banner"},null,8,Z),o("div",ee,[o("div",ae,[I(E,{title:"姓名",desc:n(D)(null==(i=null==(r=q.value)?void 0:r.tenantOrderInsuredList)?void 0:i[0].name)},null,8,["desc"]),I(E,{title:"证件号码",desc:n(L)(null==(u=null==(d=q.value)?void 0:d.tenantOrderInsuredList)?void 0:u[0].certNo)},null,8,["desc"]),I(E,{title:"手机号码",desc:n(_)(null==(v=null==(c=q.value)?void 0:c.tenantOrderHolder)?void 0:v.mobile)},null,8,["desc"]),I(E,{title:"每月保费",desc:`${n(P)(G.value||0)}元 / 每月`},null,8,["desc"]),I(s,{label:"有无社保",name:"name",required:"",placeholder:"请选择"},{input:f((()=>[I(l,{modelValue:K.value,"onUpdate:modelValue":t[0]||(t[0]=e=>K.value=e),disabled:!0,options:n(w)},null,8,["modelValue","options"])])),_:1}),o("div",{class:"submit",onClick:de})])]),I(Q,{"is-show":W.value,onOnConfirm:re,onOnClose:ne},null,8,["is-show"])]),I(b,{show:A.value,"onUpdate:show":t[1]||(t[1]=e=>A.value=e),"content-list":null==(m=null==(p=J.value)?void 0:p.tenantProductInsureVO)?void 0:m.attachmentVOList,"active-index":te.value,text:"我已逐页阅读并确认告知内容",onSubmit:ie},null,8,["show","content-list","active-index"])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-7565f9b0"]]);export{te as default};
