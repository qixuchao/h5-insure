import{_ as e,d as a,c as t,h as o,j as l,t as n,g as s,k as r,X as d,Y as i,u as c,a as u,r as p,G as v,e as m,w as f,f as I,a7 as h,T as w,m as y,ap as g,bT as C,bG as b}from"./index-ac0d8bf0.js";import{i as N}from"./infoCollection-c6200630.js";import{c as U,_}from"./close-f6381363.js";import{a as O}from"./order-5c11917b.js";import{d as x,i as $,g as k,s as S,e as j,E as D}from"./trial-83be9158.js";import{t as L}from"./theme-ea709837.js";import{n as V,i as P,m as R,e as B,g as q,t as z,k as T,l as F,f as G,h as H}from"./utils-9df6a009.js";import{p as J}from"./product-906afd23.js";import"./pdfh5-008ca364.js";import"./trial-c32c5405.js";const E={class:"com-field-info"},K={class:"title"},M={class:"desc"};var Y=e(a({__name:"index",props:{title:{type:String,default:""},desc:{type:String,default:""}},setup:e=>(a,s)=>(t(),o("div",E,[l("div",K,n(e.title),1),l("div",M,n(e.desc),1)]))}),[["__scopeId","data-v-2ff3e068"]]);const W=e=>(d("data-v-ed9081ee"),e=e(),i(),e),X={key:0,class:"pro-modal"},A=W((()=>l("div",{class:"pro-overlay"},null,-1))),Q={class:"pro-modal-wrapper"},Z=W((()=>l("div",{class:"pro-modal-content"},[l("p",null,"恭喜您"),l("p",null,"保障升级成功")],-1))),ee=["src"];var ae=e(a({__name:"index",props:{bg:{type:String,default:""},btn:{type:String,default:""},isShow:{type:Boolean,default:()=>{}}},emits:["on-confirm","on-close"],setup(e,{emit:a}){const n=e,d=()=>{a("on-close")},i=()=>{a("on-confirm")};return(e,a)=>n.isShow?(t(),o("div",X,[A,l("div",Q,[l("div",{class:"pro-modal-body"},[Z,l("div",{class:"pro-modal-btn",onClick:i},"我知道了")]),l("div",{class:"pro-modal-close",onClick:d},[l("img",{src:s(U)},null,8,ee)])])])):r("",!0)}}),[["__scopeId","data-v-ed9081ee"]]);const te={class:"page-activity-upgrade"},oe=["src"],le={class:"container"},ne={class:"main-form"};var se=e(a({__name:"index",setup(e){const a=c(),o=u(),{productCode:n="BWYL2022",tenantId:r,orderNo:d,agentCode:i="",from:U}=o.query;console.log("upload--route.query",o.query);const E=p(),K=p(),M=p(),W=p(),X=p(),A=p(),Q=p(!1),Z="check"===U,ee=p(!1),se=p(0),re=p("");let de="";const ie=()=>{Q.value=!1},ce=e=>`${b}/pay?orderNo=${e}&saleUserId=${i}&tenantId=${r}`,ue=()=>{a.replace(`/pay?orderNo=${re.value}&saleUserId=${i}&tenantId=${r}`)},pe=async e=>{try{w.loading({forbidClick:!0,message:"升级中",duration:15e3});const e=await(async()=>{var e,a,t,o,l;const n=q({tenantId:r,applicationNo:M.value.applicationNo,policyNo:M.value.policyNo,saleUserId:i,saleChannelId:M.value.saleChannelId,orderStatus:O.UP_PROCESSING,orderTopStatus:"-1",orderCategory:2,detail:E.value,insureDetail:K.value,paymentMethod:null==(a=null==(e=M.value.extInfo)?void 0:e.extraInfo)?void 0:a.paymentMethod,renewalDK:null==(o=null==(t=M.value.extInfo)?void 0:t.extraInfo)?void 0:o.renewalDK,iseeBizNo:de,successJumpUrl:"",premium:W.value,holder:{...M.value.tenantOrderHolder,socialFlag:M.value.tenantOrderHolder.extInfo.hasSocialInsurance},insured:{...M.value.tenantOrderInsuredList[0],socialFlag:M.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance},tenantOrderRiskList:z({tenantId:r,riskList:T(F(K.value.productRiskVoList[0].riskDetailVOList),E.value),riskPremium:{},productId:null==(l=E.value)?void 0:l.id})}),s=await S(n),{code:d,data:c}=s;return"10000"===d?c.data:""})();await x({tenantId:r,applicationNo:M.value.applicationNo});if(re.value=e,console.log(re.value,"orderNoUp.value===",e),A.value){if(Z){const a=encodeURIComponent(encodeURIComponent(ce(e))),t=`${A.value}&successUrl=${a}`;window.location.href=t}else{const e=encodeURIComponent(encodeURIComponent(window.location.href)),a=`${A.value}&failUrl=${e}`;window.location.href=a}w.clear()}else(async e=>{const t=G({tenantId:r,premium:W.value,orderDetail:M.value,productDetail:E.value,insureDetail:K.value,successJumpUrl:ce(e),iseeBizNo:de}),o=await D({orderNo:e,...t}),{code:l,data:s}=o;"10000"===l&&(Z?a.replace(`/internet/orderDetail?orderNo=${e}&productCode=${n}&tenantId=${r}`):(w.clear(),ue()))})(e)}catch(t){console.log(t),w.clear()}},ve=async e=>{Z?ee.value=!0:pe()},me=()=>{w.loading({forbidClick:!0,duration:2e4,message:"试算中"});const e=J({productCode:n,withInsureInfo:!0,tenantId:r}),a=$({productCode:n}),t=k({orderNo:d,tenantId:r});Promise.all([e,a,t]).then((([e,a,t])=>{var o;"10000"===e.code&&(E.value=e.data,document.title=(null==(o=e.data)?void 0:o.productFullName)||""),"10000"===a.code&&(K.value=a.data),"10000"===t.code&&(M.value=t.data,X.value=t.data.tenantOrderInsuredList[0].extInfo.hasSocialInsurance),(async()=>{try{const e=G({tenantId:r,premium:W.value,orderDetail:M.value,productDetail:E.value,insureDetail:K.value,successJumpUrl:""},H),a=await j(e),{code:t,data:o}=a;"10000"===t&&(W.value=o.installmentPremium,A.value=o.signUrl)}catch(e){console.log(e)}finally{w.clear()}})()}))};return v((()=>{me(),setTimeout((async()=>{de=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const o=y,n=g,r=C;return t(),m(r,{"theme-vars":s(L)},{default:f((()=>{var e,t,r,d,i,c,u,p,v,m;return[l("div",te,[l("img",{src:null==(t=null==(e=s(E))?void 0:e.tenantProductInsureVO)?void 0:t.banner[0],class:"banner"},null,8,oe),l("div",le,[l("div",ne,[I(Y,{title:"姓名",desc:s(V)(null==(d=null==(r=s(M))?void 0:r.tenantOrderInsuredList)?void 0:d[0].name)},null,8,["desc"]),I(Y,{title:"证件号码",desc:s(P)(null==(c=null==(i=s(M))?void 0:i.tenantOrderInsuredList)?void 0:c[0].certNo)},null,8,["desc"]),I(Y,{title:"手机号码",desc:s(R)(null==(p=null==(u=s(M))?void 0:u.tenantOrderHolder)?void 0:p.mobile)},null,8,["desc"]),I(Y,{title:"每月保费",desc:`${s(B)(s(W)||0)}元 / 每月`},null,8,["desc"]),I(n,{label:"有无社保",name:"name",required:"",placeholder:"请选择"},{input:f((()=>[I(o,{modelValue:s(X),"onUpdate:modelValue":a[0]||(a[0]=e=>h(X)?X.value=e:null),disabled:!0,options:s(N)},null,8,["modelValue","options"])])),_:1}),l("div",{class:"submit",onClick:ve})])]),I(ae,{"is-show":s(Q),onOnConfirm:ue,onOnClose:ie},null,8,["is-show"])]),I(_,{show:s(ee),"onUpdate:show":a[1]||(a[1]=e=>h(ee)?ee.value=e:null),"content-list":null==(m=null==(v=s(E))?void 0:v.tenantProductInsureVO)?void 0:m.attachmentVOList,"active-index":s(se),text:"我已逐页阅读并确认告知内容",onSubmit:pe},null,8,["show","content-list","active-index"])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-942be77c"]]);export{se as default};
