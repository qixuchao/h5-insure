import{i as e,aa as a,P as t,r as n,N as r,A as o,$ as l,k as i,l as d,ag as s,m as u,s as c,t as m,p as v,I as p,x as y,B as f,n as h,C as I,L as N,G as g,F as w,D as b,T as C,Y as T}from"./vendor-86ac9d42.js";import{d as D}from"./debounce-28c09b81.js";import{_ as O,C as F,a1 as k,I as P,J as H,a4 as S}from"./index-0db00022.js";import{a as j}from"./order-df7c0ead.js";import{S as x,R as L,g as V}from"./infoCollection-4b71a25b.js";import{i as $,s as A,p as q,g as U,u as B,a as E}from"./trial-cce58dca.js";import{p as M}from"./product-0948d6f7.js";import{t as _,g as R,a as K,s as Y,v as z,b as J}from"./utils-ab893c07.js";import{f as G,a as W}from"./utils-b77f2acb.js";import{t as Q}from"./theme-ea709837.js";import{d as X,B as Z,D as ee,G as ae,S as te,H as ne,P as re,U as oe,_ as le,W as ie,p as de,a as se}from"./auth-4a726529.js";import{_ as ue}from"./index-9c6b81ee.js";import"./trial-4bcd5b24.js";import"./check-detail-c292a89b.js";import"./index-9c7d57d5.js";import"./bankCard-f85f1584.js";import"./header-logo-59ba1c63.js";import"./phoneVerify-f9ae5726.js";import"./loading-1c9c1d7b.js";import"./close-bad1ffb4.js";const ce={key:0},me={class:"page-internet-product-detail"},ve={class:"info"},pe={class:"footer-button"},ye={class:"price"},fe=g(" 总保费"),he={key:0};var Ie=O(e({setup(e){const O=a(),Ie=t(),{productCode:Ne="BWYL2021",tenantId:ge,orderNo:we,phoneNo:be,agentCode:Ce="",saleChannelId:Te,paymentMethod:De,certNo:Oe,name:Fe,pageCode:ke,upgradeCode:Pe,from:He}=Ie.query,Se=n(),je=n(),xe=n(),Le=n(),Ve="payBack"===ke,$e=n(!1),Ae=n(!1),qe=n(!1),Ue=n(0),Be=n(!1),Ee=n(!1),Me=n({show:!1,html:""}),_e=n(!1),Re=n();let Ke="";const Ye=r({holder:{certNo:Oe,certType:F.CERT,mobile:be,name:Fe,socialFlag:x.HAS},insured:{certNo:Oe,certType:F.CERT,name:Fe,socialFlag:x.HAS,relationToHolder:L.SELF},paymentMethod:De,renewalDK:"Y",paymentFrequency:V.MONTH}),ze=n(X),Je=n(X),Ge=r({showInsure:!Ve,canInsure:!1,canUpgrade:!1}),We=o((()=>{var e,a;return(null==(a=null==(e=je.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"===e.attachmentName)))||[]})),Qe=o((()=>{var e,a,t,n,r,o,l,i;return[...(null==(a=null==(e=je.value)?void 0:e.tenantProductInsureVO)?void 0:a.titleAndDescVOS)||[],{desc:`出生${G(null==(n=null==(t=je.value)?void 0:t.tenantProductInsureVO)?void 0:n.holderAgeLimit)}`,title:"投保年龄",noDetail:!0},{desc:W(null==(o=null==(r=je.value)?void 0:r.tenantProductInsureVO)?void 0:o.insurancePeriodValues),title:"保障期限",noDetail:!0},{desc:`${null==(i=null==(l=je.value)?void 0:l.tenantProductInsureVO)?void 0:i.waitPeriod}天，上一张保单期满后指定期限内重新投保、因遭受意外伤害导致的医疗无等待期`,title:"等待期",noDetail:!0}]})),Xe=o((()=>{var e,a;return(null==(a=null==(e=je.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName)))||[]})),Ze=()=>{if(Ye.holder.certNo){const e=H(Ye.holder.certNo);if(z(Ye.holder.certNo,18,"year"))return C("投保人年龄必须大于18岁！"),!1;if(Ye.insured.certNo&&Ye.insured.relationToHolder===L.MATE){if(e===H(Ye.insured.certNo))return C("被保人为配偶时，性别不可相同！"),!1}}if(Ye.insured.certNo){if(Ye.insured.relationToHolder===L.CHILD&&z(Ye.insured.certNo,30,"day"))return C("被保人为子女时，年龄必须大于等于30天！"),!1;if(Ye.insured.relationToHolder===L.PARENT&&!z(Ye.insured.certNo,71,"year"))return C("被保人为父母时，年龄必须小于等于70岁！"),!1}if([L.CHILD,L.PARENT].includes(Ye.insured.relationToHolder)){const e=J(Ye.holder.certNo,"year"),a=J(Ye.insured.certNo,"year");if(Ye.insured.relationToHolder===L.CHILD&&e-a<18)return C("投保人和子女年龄必须相差18岁！"),!1;if(Ye.insured.relationToHolder===L.PARENT&&a-e<18)return C("投保人和父母年龄必须相差18岁！"),!1}return!0},ea=()=>{O.push({path:"/internet/guaranteeUpgrade",query:{...Ie.query,tenantId:ge,productCode:"BWYL2022",orderNo:we,agentCode:Ce}})},aa=()=>{Ee.value=!1,O.replace(`/pay?orderNo=${we}&saleUserId=${Ce}&tenantId=${ge}`)},ta=()=>{Je.value=ze.value},na=()=>{Je.value={...Je.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},ra=e=>{var a,t;const n=JSON.parse(null==(t=null==(a=xe.value)?void 0:a.productBasicInfoVO)?void 0:t.extInfo);let r="";1===n.endorsementFlag&&(r=`&upgradeCode=${n.endorsementCode}`);return`${S}/internet/productDetail?tenantId=${ge}&productCode=${Ne}&orderNo=${e}&agentCode=${Ce}&pageCode=payBack${r}&from=${He||"normal"}`},oa=async e=>{const a=R({tenantId:ge,saleUserId:Ce,saleChannelId:Te,detail:je.value,insureDetail:xe.value,paymentMethod:Ye.paymentMethod,renewalDK:Ye.renewalDK,iseeBizNo:Ke,successJumpUrl:"",premium:Le.value,holder:Ye.holder,insured:Ye.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:"",orderNo:we,originOrderIds:Re.value});try{const e=await A(a),{code:n,data:r}=e;"10000"===n&&(async e=>{C.loading({message:"核保中...",forbidClick:!0,duration:0});try{const a=await B(e),{code:t}=a;if("10000"===t){const a=await E({orderNo:e.orderNo,tenantId:ge}),{data:t}=a;"10000"===a.code&&(2===t.type?(Me.value={show:!0,html:t.paymentUrl},T((()=>{const e=document.getElementById("cashierSubmit");null==e||e.addEventListener("submit",(e=>{e.preventDefault()})),null==e||e.submit()}))):window.location.href=t.paymentUrl)}Ge.canInsure=!0}catch(a){Ge.canInsure=!0}finally{C.clear()}})({...a,orderNo:r.data,extInfo:{extraInfo:{renewalDK:Ye.renewalDK,paymentMethod:Ye.paymentMethod,paymentFrequency:Ye.paymentFrequency,successJumpUrl:ra(r.data),failUrl:(t=r.data,`${S}/internet/payFail?tenantId=${ge}&orderNo=${t}&agentCode=${Ce}&pageCode=payBack&from=${He||"normal"}`)},iseeBizNo:Ke}})}catch(n){Ge.canInsure=!0}var t},la=async()=>{var e;if(Ve)ea();else{Ge.canInsure=!1;try{const{condition:a,data:t}=await new Promise(((e,a)=>{var t,n;null==(n=null==(t=Se.value)?void 0:t.validateForm)||n.call(t).then((async()=>{if(!Ze())return void a(new Error);const{calcData:t,riskVOList:n}=K({holder:Ye.holder,insured:Ye.insured,tenantId:ge,paymentFrequency:Ye.paymentFrequency,productDetail:je.value,insureDetail:xe.value},!0),r=await q(t),{code:o,data:l}=r;"10000"===o?(Le.value=l.premium,e({condition:n,data:l})):a(new Error)})).catch((e=>{Ge.canInsure=!0,Y(e)}))})),n={},r=(e=[])=>{(e||[]).forEach((e=>{var a;n[e.riskCode]=e,(null==(a=e.riskPremiumDetailVOList)?void 0:a.length)&&r(e.riskPremiumDetailVOList)}))};r(t.riskPremiumDetailVOList);const o=_({tenantId:ge,riskList:a,riskPremium:n,productId:null==(e=je.value)?void 0:e.id});oa(o)}catch(a){Ge.canInsure=!0}}},ia=e=>{"allFalse"===e?(Ae.value=!1,la(),Ge.canInsure=!0):b.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()}))},da=()=>{$e.value=!0,qe.value=!1,Ae.value=!0};l([()=>Ye.insured.certNo,()=>Ye.insured.socialFlag],D((()=>{Ye.insured.certNo&&Ye.insured.socialFlag&&"payBack"!==ke&&(()=>{const{holder:{certNo:e,mobile:a,name:t,socialFlag:n},insured:{certNo:r,name:o,socialFlag:l,relationToHolder:i},paymentMethod:d}=Ye;return P(r)&&!!l})()&&(async()=>{if(Ge.canInsure=!0,!Ze())return{};const{calcData:e,riskVOList:a}=K({holder:Ye.holder,insured:Ye.insured,tenantId:ge,paymentFrequency:Ye.paymentFrequency,productDetail:je.value,insureDetail:xe.value},!0);if(!Array.isArray(a)||a.length<1)return C("被保人年龄需在30天(含) - 70岁(含)之间！"),Le.value=null,{};_e.value=!0;const t=await q(e);_e.value=!1;const{code:n,data:r}=t;"10000"===n&&(Ye.insured.certNo?Le.value=r.premium:Le.value=null)})()}),500),{deep:!0,immediate:!0}),l((()=>Ye.insured.certNo),(()=>{Ye.insured.certNo||(Le.value=null)}));const sa=async()=>{var e,a,t,n,r,o,l,i,d,s,u,c,m;const v=await U({orderNo:we,tenantId:ge}),{code:p,data:y}=v;if("10000"===p){const{id:v,tenantOrderHolder:p,tenantOrderInsuredList:f,extInfo:h}=y;if(!Ve)return Re.value={id:v,holderId:null==p?void 0:p.id,insuredId:null==f?void 0:f[0].id},Object.assign(Ye,{holder:{certNo:p.certNo,certType:p.certType,mobile:p.mobile,name:p.name,socialFlag:x.HAS},insured:{certNo:null==f?void 0:f[0].certNo,certType:null==(e=f[0])?void 0:e.certType,name:null==(a=f[0])?void 0:a.name,socialFlag:null==(n=null==(t=f[0])?void 0:t.extInfo)?void 0:n.hasSocialInsurance,relationToHolder:null==(r=f[0])?void 0:r.relationToHolder},paymentMethod:h.extraInfo.paymentMethod,paymentFrequency:h.extraInfo.paymentFrequency,renewalDK:"Y"}),void(Ge.canInsure=!0);Object.assign(Ye,{holder:{certNo:p.certNo,certType:p.certType,mobile:p.mobile,name:p.name,socialFlag:x.HAS},insured:{certNo:null==f?void 0:f[0].certNo,certType:null==(o=f[0])?void 0:o.certType,name:null==(l=f[0])?void 0:l.name,socialFlag:null==(d=null==(i=f[0])?void 0:i.extInfo)?void 0:d.hasSocialInsurance,relationToHolder:null==(s=f[0])?void 0:s.relationToHolder},paymentMethod:h.extraInfo.paymentMethod,paymentFrequency:h.extraInfo.paymentFrequency,renewalDK:h.extraInfo.renewalDK||"N"}),Le.value=null==(m=null==(c=null==(u=f[0])?void 0:u.tenantOrderProductList)?void 0:c[0])?void 0:m.premium,y.orderStatus!==j.ACCEPT_POLICY&&y.orderStatus!==j.PAYMENT_SUCCESS||(Ge.canUpgrade=!0,Be.value=!1,Ee.value=!0),y.orderStatus===j.PAYING&&(Be.value=!0,setTimeout((()=>{sa()}),3e3))}};return i((()=>{Ve?(Je.value=de,ze.value=de):we?(Je.value={...se,paymentFrequencyDisable:!0},ze.value=se,Ge.canInsure=!0):be||we||(Je.value={...se,paymentFrequencyDisable:!0},ze.value=se,Ge.canInsure=!0),(async()=>{var e;const a=await M({productCode:Ne,withInsureInfo:!0,tenantId:ge});"10000"===a.code&&(je.value=a.data,document.title=(null==(e=a.data)?void 0:e.productFullName)||"");const t=await $({productCode:Ne});"10000"===t.code&&(xe.value=t.data),we&&sa()})(),setTimeout((async()=>{Ke=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=d("van-loading"),n=d("van-button"),r=d("van-config-provider"),o=s("dompurify-html");return u(),c(w,null,[m(r,{"theme-vars":I(Q)},{default:v((()=>{var e,a,r,l,i,d,s;return[Me.value.show?p((u(),c("div",ce,null,512)),[[o,Me.value.html]]):y("",!0),f("div",me,[f("div",ve,[m(Z,{url:null==(a=null==(e=je.value)?void 0:e.tenantProductInsureVO)?void 0:a.banner[0]},null,8,["url"]),m(ee,{"product-name":null==(r=je.value)?void 0:r.productFullName,"product-desc":null==(i=null==(l=je.value)?void 0:l.showConfigVO)?void 0:i.desc},null,8,["product-name","product-desc"])]),(null==(s=null==(d=je.value)?void 0:d.tenantProductInsureVO)?void 0:s.titleAndDescVOS)?(u(),h(ae,{key:0,"guarantee-list":I(Qe)},null,8,["guarantee-list"])):y("",!0),m(te,{detail:je.value},{form:v((()=>[m(ne,{ref_key:"formRef",ref:Se,disable:!I(Ge).showInsure,"form-auth":Je.value,"form-info":I(Ye),premium:Le.value,"product-detail":je.value,payments:[1],"payment-method":[0],onOnReset:ta,onOnUpdate:na},null,8,["disable","form-auth","form-info","premium","product-detail"])])),_:1},8,["detail"]),f("div",pe,[f("div",ye,[fe,_e.value?(u(),h(t,{key:1,class:"premium-loading",type:"spinner"})):(u(),c("span",he,N(Le.value?"￥":"")+N(I(k)(Le.value))+N(Le.value?"元/月":""),1))]),m(n,{type:"primary",class:"right",disabled:!(I(Ge).canInsure||I(Ge).canUpgrade),onClick:la},{default:v((()=>[g(N(I(Ge).showInsure?"立即投保":"升级保障"),1)])),_:1},8,["disabled"])])]),I(we)?y("",!0):(u(),h(re,{key:1,"product-detail":je.value},null,8,["product-detail"])),m(oe,{"order-no":I(we),"tenant-id":I(ge),"upgrade-code":I(Pe),"is-show":Ee.value,onOnConfirm:ea,onOnClose:aa},null,8,["order-no","tenant-id","upgrade-code","is-show"])]})),_:1},8,["theme-vars"]),m(le,{show:Ae.value,"onUpdate:show":a[0]||(a[0]=e=>Ae.value=e),"content-list":I(We),"active-index":0,onOnConfirmHealth:ia},null,8,["show","content-list"]),qe.value?(u(),h(ue,{key:0,show:qe.value,"onUpdate:show":a[1]||(a[1]=e=>qe.value=e),"content-list":I(Xe),"active-index":Ue.value,text:"我已逐页阅读并确认告知内容",onSubmit:da},null,8,["show","content-list","active-index"])):y("",!0),m(ie,{"is-show":Be.value},null,8,["is-show"])],64)}}}),[["__scopeId","data-v-3d23cb7a"]]);export{Ie as default};
