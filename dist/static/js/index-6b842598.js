import{k as e,s as a,B as t,C as l,M as o,E as n,y as s,a5 as r,a6 as d,aa as i,u,r as c,o as v,p,t as m,v as f,S as I,T as h}from"./vendor-fb30fd59.js";import{j as w}from"./infoCollection-91b642f9.js";import{_ as y,a4 as g}from"./index-d438dc19.js";import{c as C,_ as b}from"./index-f78aeb16.js";import{a as N}from"./order-a938c683.js";import{d as O,i as U,g as S,s as $,e as k,E as x}from"./trial-fad5a63a.js";import{t as j}from"./theme-ea709837.js";import{n as D,i as L,m as _,e as P,g as B,t as R,k as V,f as z,h as F}from"./utils-cd032a92.js";import{p as E}from"./product-1a7bf4a8.js";import"./trial-ac4039ac.js";const H={class:"com-field-info"},J={class:"title"},M={class:"desc"};var T=y(e({props:{title:{type:String,default:""},desc:{type:String,default:""}},setup:e=>(n,s)=>(a(),t("div",H,[l("div",J,o(e.title),1),l("div",M,o(e.desc),1)]))}),[["__scopeId","data-v-2ff3e068"]]);const q=e=>(r("data-v-ed9081ee"),e=e(),d(),e),K={key:0,class:"pro-modal"},G=q((()=>l("div",{class:"pro-overlay"},null,-1))),W={class:"pro-modal-wrapper"},Y=q((()=>l("div",{class:"pro-modal-content"},[l("p",null,"恭喜您"),l("p",null,"保障升级成功")],-1))),A=["src"];var Q=y(e({props:{bg:{type:String,default:""},btn:{type:String,default:""},isShow:{type:Boolean,default:()=>{}}},emits:["on-confirm","on-close"],setup(e,{emit:o}){const r=e,d=()=>{o("on-close")},i=()=>{o("on-confirm")};return(e,o)=>r.isShow?(a(),t("div",K,[G,l("div",W,[l("div",{class:"pro-modal-body"},[Y,l("div",{class:"pro-modal-btn",onClick:i},"我知道了")]),l("div",{class:"pro-modal-close",onClick:d},[l("img",{src:n(C)},null,8,A)])])])):s("",!0)}}),[["__scopeId","data-v-ed9081ee"]]);const X={class:"page-activity-upgrade"},Z=["src"],ee={class:"container"},ae={class:"main-form"};var te=y(e({setup(e){const t=i(),o=u(),{productCode:s="BWYL2022",tenantId:r,orderNo:d,agentCode:y="",from:C}=o.query,H=c(),J=c(),M=c(),q=c(),K=c(),G=c(),W=c(!1),Y="check"===C,A=c(!1),te=c(0),le=c("");let oe="";const ne=()=>{W.value=!1},se=e=>`${g}/pay?orderNo=${e}&saleUserId=${y}&tenantId=${r}`,re=()=>{t.replace(`/pay?orderNo=${le.value}&saleUserId=${y}&tenantId=${r}`)},de=async e=>{try{h.loading({forbidClick:!0,message:"升级中",duration:15e3});const e=await(async()=>{var e,a,t,l,o;const n=B({tenantId:r,applicationNo:M.value.applicationNo,policyNo:M.value.policyNo,saleUserId:y,saleChannelId:M.value.saleChannelId,orderStatus:N.UP_PROCESSING,orderTopStatus:"-1",orderCategory:2,detail:H.value,insureDetail:J.value,paymentMethod:null==(a=null==(e=M.value.extInfo)?void 0:e.extraInfo)?void 0:a.paymentMethod,renewalDK:null==(l=null==(t=M.value.extInfo)?void 0:t.extraInfo)?void 0:l.renewalDK,iseeBizNo:oe,successJumpUrl:"",premium:q.value,holder:{...M.value.tenantOrderHolder,socialFlag:M.value.tenantOrderHolder.extInfo.hasSocialInsurance},insured:{...M.value.tenantOrderInsuredList[0],socialFlag:M.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance},tenantOrderRiskList:R({tenantId:r,riskList:V(J.value.productRiskVoList[0].riskDetailVOList,H.value),riskPremium:{},productId:null==(o=H.value)?void 0:o.id})}),s=await $(n),{code:d,data:i}=s;return"10000"===d?i.data:""})();await O({tenantId:r,applicationNo:M.value.applicationNo});if(le.value=e,G.value){if(Y){const a=encodeURIComponent(encodeURIComponent(se(e))),t=`${G.value}&successUrl=${a}`;window.location.href=t}else{const e=encodeURIComponent(encodeURIComponent(window.location.href)),a=`${G.value}&failUrl=${e}`;window.location.href=a}h.clear()}else(async e=>{const a=z({tenantId:r,premium:q.value,orderDetail:M.value,productDetail:H.value,insureDetail:J.value,successJumpUrl:se(e),iseeBizNo:oe}),l=await x({orderNo:e,...a}),{code:o,data:n}=l;"10000"===o&&(Y?t.replace(`/internet/orderDetail?orderNo=${e}&productCode=${s}&tenantId=${r}`):(h.clear(),re()))})(e)}catch(a){h.clear()}},ie=async e=>{Y?A.value=!0:de()},ue=()=>{h.loading({forbidClick:!0,duration:2e4,message:"试算中"});const e=E({productCode:s,withInsureInfo:!0,tenantId:r}),a=U({productCode:s}),t=S({orderNo:d,tenantId:r});Promise.all([e,a,t]).then((([e,a,t])=>{var l;"10000"===e.code&&(H.value=e.data,document.title=(null==(l=e.data)?void 0:l.productFullName)||""),"10000"===a.code&&(J.value=a.data),"10000"===t.code&&(M.value=t.data,K.value=t.data.tenantOrderInsuredList[0].extInfo.hasSocialInsurance),(async()=>{try{const e=z({tenantId:r,premium:q.value,orderDetail:M.value,productDetail:H.value,insureDetail:J.value,successJumpUrl:""},F),a=await k(e),{code:t,data:l}=a;"10000"===t&&(q.value=l.installmentPremium,G.value=l.signUrl)}catch(e){}finally{h.clear()}})()}))};return v((()=>{ue(),setTimeout((async()=>{oe=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const o=p("ProRadioButton"),s=p("ProField"),r=p("van-config-provider");return a(),m(r,{"theme-vars":n(j)},{default:f((()=>{var e,a,r,d,i,u,c,v,p,m;return[l("div",X,[l("img",{src:null==(a=null==(e=H.value)?void 0:e.tenantProductInsureVO)?void 0:a.banner[0],class:"banner"},null,8,Z),l("div",ee,[l("div",ae,[I(T,{title:"姓名",desc:n(D)(null==(d=null==(r=M.value)?void 0:r.tenantOrderInsuredList)?void 0:d[0].name)},null,8,["desc"]),I(T,{title:"证件号码",desc:n(L)(null==(u=null==(i=M.value)?void 0:i.tenantOrderInsuredList)?void 0:u[0].certNo)},null,8,["desc"]),I(T,{title:"手机号码",desc:n(_)(null==(v=null==(c=M.value)?void 0:c.tenantOrderHolder)?void 0:v.mobile)},null,8,["desc"]),I(T,{title:"每月保费",desc:`${n(P)(q.value||0)}元 / 每月`},null,8,["desc"]),I(s,{label:"有无社保",name:"name",required:"",placeholder:"请选择"},{input:f((()=>[I(o,{modelValue:K.value,"onUpdate:modelValue":t[0]||(t[0]=e=>K.value=e),disabled:!0,options:n(w)},null,8,["modelValue","options"])])),_:1}),l("div",{class:"submit",onClick:ie})])]),I(Q,{"is-show":W.value,onOnConfirm:re,onOnClose:ne},null,8,["is-show"])]),I(b,{show:A.value,"onUpdate:show":t[1]||(t[1]=e=>A.value=e),"content-list":null==(m=null==(p=H.value)?void 0:p.tenantProductInsureVO)?void 0:m.attachmentVOList,"active-index":te.value,text:"我已逐页阅读并确认告知内容",onSubmit:de},null,8,["show","content-list","active-index"])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-72c7b778"]]);export{te as default};
