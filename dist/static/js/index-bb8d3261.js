import{i as e,m as a,s as t,B as l,L as o,C as n,x as s,a5 as r,a6 as d,aa as i,P as u,r as c,k as v,l as p,n as m,p as f,t as I,T as h}from"./vendor-86ac9d42.js";import{j as w}from"./infoCollection-4b71a25b.js";import{_ as y,a4 as b}from"./index-0db00022.js";import{c as g}from"./close-bad1ffb4.js";import{_ as C}from"./index-9c6b81ee.js";import{a as N}from"./order-df7c0ead.js";import{d as O,i as U,g as $,s as k,e as x,E as S}from"./trial-cce58dca.js";import{t as j}from"./theme-ea709837.js";import{n as L,i as D,m as _,e as P,g as B,t as R,k as V,f as z,h as F}from"./utils-ab893c07.js";import{p as H}from"./product-0948d6f7.js";import"./trial-4bcd5b24.js";const J={class:"com-field-info"},T={class:"title"},q={class:"desc"};var E=y(e({props:{title:{type:String,default:""},desc:{type:String,default:""}},setup:e=>(n,s)=>(a(),t("div",J,[l("div",T,o(e.title),1),l("div",q,o(e.desc),1)]))}),[["__scopeId","data-v-2ff3e068"]]);const K=e=>(r("data-v-ed9081ee"),e=e(),d(),e),M={key:0,class:"pro-modal"},G=K((()=>l("div",{class:"pro-overlay"},null,-1))),W={class:"pro-modal-wrapper"},Y=K((()=>l("div",{class:"pro-modal-content"},[l("p",null,"恭喜您"),l("p",null,"保障升级成功")],-1))),A=["src"];var Q=y(e({props:{bg:{type:String,default:""},btn:{type:String,default:""},isShow:{type:Boolean,default:()=>{}}},emits:["on-confirm","on-close"],setup(e,{emit:o}){const r=e,d=()=>{o("on-close")},i=()=>{o("on-confirm")};return(e,o)=>r.isShow?(a(),t("div",M,[G,l("div",W,[l("div",{class:"pro-modal-body"},[Y,l("div",{class:"pro-modal-btn",onClick:i},"我知道了")]),l("div",{class:"pro-modal-close",onClick:d},[l("img",{src:n(g)},null,8,A)])])])):s("",!0)}}),[["__scopeId","data-v-ed9081ee"]]);const X={class:"page-activity-upgrade"},Z=["src"],ee={class:"container"},ae={class:"main-form"};var te=y(e({setup(e){const t=i(),o=u(),{productCode:s="BWYL2022",tenantId:r,orderNo:d,agentCode:y="",from:g}=o.query,J=c(),T=c(),q=c(),K=c(),M=c(),G=c(),W=c(!1),Y="check"===g,A=c(!1),te=c(0),le=c("");let oe="";const ne=()=>{W.value=!1},se=e=>`${b}/pay?orderNo=${e}&saleUserId=${y}&tenantId=${r}`,re=()=>{t.replace(`/pay?orderNo=${le.value}&saleUserId=${y}&tenantId=${r}`)},de=async e=>{try{h.loading({forbidClick:!0,message:"升级中",duration:15e3});const e=await(async()=>{var e,a,t,l,o;const n=B({tenantId:r,applicationNo:q.value.applicationNo,policyNo:q.value.policyNo,saleUserId:y,saleChannelId:q.value.saleChannelId,orderStatus:N.UP_PROCESSING,orderTopStatus:"-1",orderCategory:2,detail:J.value,insureDetail:T.value,paymentMethod:null==(a=null==(e=q.value.extInfo)?void 0:e.extraInfo)?void 0:a.paymentMethod,renewalDK:null==(l=null==(t=q.value.extInfo)?void 0:t.extraInfo)?void 0:l.renewalDK,iseeBizNo:oe,successJumpUrl:"",premium:K.value,holder:{...q.value.tenantOrderHolder,socialFlag:q.value.tenantOrderHolder.extInfo.hasSocialInsurance},insured:{...q.value.tenantOrderInsuredList[0],socialFlag:q.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance},tenantOrderRiskList:R({tenantId:r,riskList:V(T.value.productRiskVoList[0].riskDetailVOList,J.value),riskPremium:{},productId:null==(o=J.value)?void 0:o.id})}),s=await k(n),{code:d,data:i}=s;return"10000"===d?i.data:""})();await O({tenantId:r,applicationNo:q.value.applicationNo});if(le.value=e,G.value){if(Y){const a=encodeURIComponent(encodeURIComponent(se(e))),t=`${G.value}&successUrl=${a}`;window.location.href=t}else{const e=encodeURIComponent(encodeURIComponent(window.location.href)),a=`${G.value}&failUrl=${e}`;window.location.href=a}h.clear()}else(async e=>{const a=z({tenantId:r,premium:K.value,orderDetail:q.value,productDetail:J.value,insureDetail:T.value,successJumpUrl:se(e),iseeBizNo:oe}),l=await S({orderNo:e,...a}),{code:o,data:n}=l;"10000"===o&&(Y?t.replace(`/internet/orderDetail?orderNo=${e}&productCode=${s}&tenantId=${r}`):(h.clear(),re()))})(e)}catch(a){h.clear()}},ie=async e=>{Y?A.value=!0:de()},ue=()=>{h.loading({forbidClick:!0,duration:2e4,message:"试算中"});const e=H({productCode:s,withInsureInfo:!0,tenantId:r}),a=U({productCode:s}),t=$({orderNo:d,tenantId:r});Promise.all([e,a,t]).then((([e,a,t])=>{var l;"10000"===e.code&&(J.value=e.data,document.title=(null==(l=e.data)?void 0:l.productFullName)||""),"10000"===a.code&&(T.value=a.data),"10000"===t.code&&(q.value=t.data,M.value=t.data.tenantOrderInsuredList[0].extInfo.hasSocialInsurance),(async()=>{try{const e=z({tenantId:r,premium:K.value,orderDetail:q.value,productDetail:J.value,insureDetail:T.value,successJumpUrl:""},F),a=await x(e),{code:t,data:l}=a;"10000"===t&&(K.value=l.installmentPremium,G.value=l.signUrl)}catch(e){}finally{h.clear()}})()}))};return v((()=>{ue(),setTimeout((async()=>{oe=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const o=p("ProRadioButton"),s=p("ProField"),r=p("van-config-provider");return a(),m(r,{"theme-vars":n(j)},{default:f((()=>{var e,a,r,d,i,u,c,v,p,m;return[l("div",X,[l("img",{src:null==(a=null==(e=J.value)?void 0:e.tenantProductInsureVO)?void 0:a.banner[0],class:"banner"},null,8,Z),l("div",ee,[l("div",ae,[I(E,{title:"姓名",desc:n(L)(null==(d=null==(r=q.value)?void 0:r.tenantOrderInsuredList)?void 0:d[0].name)},null,8,["desc"]),I(E,{title:"证件号码",desc:n(D)(null==(u=null==(i=q.value)?void 0:i.tenantOrderInsuredList)?void 0:u[0].certNo)},null,8,["desc"]),I(E,{title:"手机号码",desc:n(_)(null==(v=null==(c=q.value)?void 0:c.tenantOrderHolder)?void 0:v.mobile)},null,8,["desc"]),I(E,{title:"每月保费",desc:`${n(P)(K.value||0)}元 / 每月`},null,8,["desc"]),I(s,{label:"有无社保",name:"name",required:"",placeholder:"请选择"},{input:f((()=>[I(o,{modelValue:M.value,"onUpdate:modelValue":t[0]||(t[0]=e=>M.value=e),disabled:!0,options:n(w)},null,8,["modelValue","options"])])),_:1}),l("div",{class:"submit",onClick:ie})])]),I(Q,{"is-show":W.value,onOnConfirm:re,onOnClose:ne},null,8,["is-show"])]),I(C,{show:A.value,"onUpdate:show":t[1]||(t[1]=e=>A.value=e),"content-list":null==(m=null==(p=J.value)?void 0:p.tenantProductInsureVO)?void 0:m.attachmentVOList,"active-index":te.value,text:"我已逐页阅读并确认告知内容",onSubmit:de},null,8,["show","content-list","active-index"])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-72c7b778"]]);export{te as default};
