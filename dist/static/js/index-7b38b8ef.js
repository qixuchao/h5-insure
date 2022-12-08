import{h as e,a8 as a,N as n,r as t,L as r,x as o,Z as l,j as i,k as d,ae as s,l as u,y as c,Q as m,n as v,G as p,s as y,z as f,m as h,A as I,I as N,C as g,F as w,D as b,T as C,W as T}from"./vendor-d6fdc679.js";import{d as D}from"./debounce-bd855844.js";import{_ as O,C as F,a1 as k,I as H,J as P,a4 as S}from"./index-85102013.js";import{a as x}from"./order-fea04b72.js";import{S as L,R as V,g as j}from"./infoCollection-bd51090b.js";import{i as $,s as A,p as q,g as U,u as E,a as B}from"./trial-e053bf73.js";import{p as M}from"./product-1cfea37d.js";import{t as _,g as R,a as K,s as Y,v as z,b as J}from"./utils-60d1e646.js";import{f as W,a as G}from"./utils-b77f2acb.js";import{t as Q}from"./theme-ea709837.js";import{d as Z,B as X,D as ee,G as ae,S as ne,H as te,P as re,U as oe,_ as le,W as ie,p as de,a as se}from"./auth-9c700fac.js";import{_ as ue}from"./index-f3096ddc.js";import"./trial-036315b2.js";import"./index-0e53f68f.js";import"./bankCard-d6ff480b.js";import"./validator-5a13dc82.js";import"./phoneVerify-b1b99cf9.js";const ce={key:0},me={class:"page-internet-product-detail"},ve={class:"info"},pe={class:"footer-button"},ye={class:"price"},fe=g(" 总保费"),he={key:0};var Ie=O(e({setup(e){const O=a(),Ie=n(),{productCode:Ne="BWYL2021",tenantId:ge,orderNo:we,phoneNo:be,agentCode:Ce="",saleChannelId:Te,paymentMethod:De,certNo:Oe,name:Fe,pageCode:ke,upgradeCode:He,from:Pe}=Ie.query,Se=t(),xe=t(),Le=t(),Ve=t(),je="payBack"===ke,$e=t(!1),Ae=t(!1),qe=t(!1),Ue=t(0),Ee=t(!1),Be=t(!1),Me=t({show:!1,html:""}),_e=t(!1),Re=t();let Ke="";const Ye=r({holder:{certNo:Oe,certType:F.CERT,mobile:be,name:Fe,socialFlag:L.HAS},insured:{certNo:Oe,certType:F.CERT,name:Fe,socialFlag:L.HAS,relationToHolder:V.SELF},paymentMethod:De,renewalDK:"Y",paymentFrequency:j.MONTH}),ze=t(Z),Je=t(Z),We=r({showInsure:!je,canInsure:!1,canUpgrade:!1}),Ge=o((()=>{var e,a;return(null==(a=null==(e=xe.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"===e.attachmentName)))||[]})),Qe=o((()=>{var e,a,n,t,r,o,l,i;return[...(null==(a=null==(e=xe.value)?void 0:e.tenantProductInsureVO)?void 0:a.titleAndDescVOS)||[],{desc:`出生${W(null==(t=null==(n=xe.value)?void 0:n.tenantProductInsureVO)?void 0:t.holderAgeLimit)}`,title:"投保年龄",noDetail:!0},{desc:G(null==(o=null==(r=xe.value)?void 0:r.tenantProductInsureVO)?void 0:o.insurancePeriodValues),title:"保障期限",noDetail:!0},{desc:`${null==(i=null==(l=xe.value)?void 0:l.tenantProductInsureVO)?void 0:i.waitPeriod}天，上一张保单期满后指定期限内重新投保、因遭受意外伤害导致的医疗无等待期`,title:"等待期",noDetail:!0}]})),Ze=o((()=>{var e,a;return(null==(a=null==(e=xe.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName)))||[]})),Xe=()=>{if(Ye.holder.certNo){const e=P(Ye.holder.certNo);if(z(Ye.holder.certNo,18,"year"))return C("投保人年龄必须大于18岁！"),!1;if(Ye.insured.certNo&&Ye.insured.relationToHolder===V.MATE){if(e===P(Ye.insured.certNo))return C("被保人为配偶时，性别不可相同！"),!1}}if(Ye.insured.certNo){if(Ye.insured.relationToHolder===V.CHILD&&z(Ye.insured.certNo,30,"day"))return C("被保人为子女时，年龄必须大于等于30天！"),!1;if(Ye.insured.relationToHolder===V.PARENT&&!z(Ye.insured.certNo,71,"year"))return C("被保人为父母时，年龄必须小于等于70岁！"),!1}if([V.CHILD,V.PARENT].includes(Ye.insured.relationToHolder)){const e=J(Ye.holder.certNo,"year"),a=J(Ye.insured.certNo,"year");if(Ye.insured.relationToHolder===V.CHILD&&e-a<18)return C("投保人和子女年龄必须相差18岁！"),!1;if(Ye.insured.relationToHolder===V.PARENT&&a-e<18)return C("投保人和父母年龄必须相差18岁！"),!1}return!0},ea=()=>{O.push({path:"/internet/guaranteeUpgrade",query:{...Ie.query,tenantId:ge,productCode:"BWYL2022",orderNo:we,agentCode:Ce}})},aa=()=>{Be.value=!1,O.replace(`/pay?orderNo=${we}&saleUserId=${Ce}&tenantId=${ge}`)},na=()=>{Je.value=ze.value},ta=()=>{Je.value={...Je.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},ra=e=>{var a,n;const t=JSON.parse(null==(n=null==(a=Le.value)?void 0:a.productBasicInfoVO)?void 0:n.extInfo);let r="";1===t.endorsementFlag&&(r=`&upgradeCode=${t.endorsementCode}`);return`${S}/internet/productDetail?tenantId=${ge}&productCode=${Ne}&orderNo=${e}&agentCode=${Ce}&pageCode=payBack${r}&from=${Pe||"normal"}`},oa=async e=>{const a=R({tenantId:ge,saleUserId:Ce,saleChannelId:Te,detail:xe.value,insureDetail:Le.value,paymentMethod:Ye.paymentMethod,renewalDK:Ye.renewalDK,iseeBizNo:Ke,successJumpUrl:"",premium:Ve.value,holder:Ye.holder,insured:Ye.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:"",orderNo:we,originOrderIds:Re.value});try{const e=await A(a),{code:t,data:r}=e;"10000"===t&&(async e=>{C.loading({message:"核保中...",forbidClick:!0,duration:0});try{const a=await E(e),{code:n}=a;if("10000"===n){const a=await B({orderNo:e.orderNo,tenantId:ge}),{data:n}=a;"10000"===a.code&&(2===n.type?(Me.value={show:!0,html:n.paymentUrl},T((()=>{const e=document.getElementById("cashierSubmit");null==e||e.addEventListener("submit",(e=>{e.preventDefault()})),null==e||e.submit()}))):window.location.href=n.paymentUrl)}We.canInsure=!0}catch(a){We.canInsure=!0}finally{C.clear()}})({...a,orderNo:r.data,extInfo:{extraInfo:{renewalDK:Ye.renewalDK,paymentMethod:Ye.paymentMethod,paymentFrequency:Ye.paymentFrequency,successJumpUrl:ra(r.data),failUrl:(n=r.data,`${S}/internet/payFail?tenantId=${ge}&orderNo=${n}&agentCode=${Ce}&pageCode=payBack&from=${Pe||"normal"}`)},iseeBizNo:Ke}})}catch(t){We.canInsure=!0}var n},la=async()=>{var e;if(je)ea();else{We.canInsure=!1;try{const{condition:a,data:n}=await new Promise(((e,a)=>{var n,t;null==(t=null==(n=Se.value)?void 0:n.validateForm)||t.call(n).then((async()=>{if(!Xe())return void a(new Error);const{calcData:n,riskVOList:t}=K({holder:Ye.holder,insured:Ye.insured,tenantId:ge,paymentFrequency:Ye.paymentFrequency,productDetail:xe.value,insureDetail:Le.value},!0),r=await q(n),{code:o,data:l}=r;"10000"===o?(Ve.value=l.premium,e({condition:t,data:l})):a(new Error)})).catch((e=>{We.canInsure=!0,Y(e)}))})),t={},r=(e=[])=>{(e||[]).forEach((e=>{var a;t[e.riskCode]=e,(null==(a=e.riskPremiumDetailVOList)?void 0:a.length)&&r(e.riskPremiumDetailVOList)}))};r(n.riskPremiumDetailVOList);const o=_({tenantId:ge,riskList:a,riskPremium:t,productId:null==(e=xe.value)?void 0:e.id});oa(o)}catch(a){We.canInsure=!0}}},ia=e=>{"allFalse"===e?(Ae.value=!1,la(),We.canInsure=!0):b.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()}))},da=()=>{$e.value=!0,qe.value=!1,Ae.value=!0};l([()=>Ye.insured.certNo,()=>Ye.insured.socialFlag],D((()=>{Ye.insured.certNo&&Ye.insured.socialFlag&&"payBack"!==ke&&(()=>{const{holder:{certNo:e,mobile:a,name:n,socialFlag:t},insured:{certNo:r,name:o,socialFlag:l,relationToHolder:i},paymentMethod:d}=Ye;return H(r)&&!!l})()&&(async()=>{if(We.canInsure=!0,!Xe())return{};const{calcData:e,riskVOList:a}=K({holder:Ye.holder,insured:Ye.insured,tenantId:ge,paymentFrequency:Ye.paymentFrequency,productDetail:xe.value,insureDetail:Le.value},!0);if(!Array.isArray(a)||a.length<1)return C("被保人年龄需在30天(含) - 70岁(含)之间！"),Ve.value=null,{};_e.value=!0;const n=await q(e);_e.value=!1;const{code:t,data:r}=n;"10000"===t&&(Ye.insured.certNo?Ve.value=r.premium:Ve.value=null)})()}),500),{deep:!0,immediate:!0}),l((()=>Ye.insured.certNo),(()=>{Ye.insured.certNo||(Ve.value=null)}));const sa=async()=>{var e,a,n,t,r,o,l,i,d,s,u,c,m;const v=await U({orderNo:we,tenantId:ge}),{code:p,data:y}=v;if("10000"===p){const{id:v,tenantOrderHolder:p,tenantOrderInsuredList:f,extInfo:h}=y;if(!je)return Re.value={id:v,holderId:null==p?void 0:p.id,insuredId:null==f?void 0:f[0].id},Object.assign(Ye,{holder:{certNo:p.certNo,certType:p.certType,mobile:p.mobile,name:p.name,socialFlag:L.HAS},insured:{certNo:null==f?void 0:f[0].certNo,certType:null==(e=f[0])?void 0:e.certType,name:null==(a=f[0])?void 0:a.name,socialFlag:null==(t=null==(n=f[0])?void 0:n.extInfo)?void 0:t.hasSocialInsurance,relationToHolder:null==(r=f[0])?void 0:r.relationToHolder},paymentMethod:h.extraInfo.paymentMethod,paymentFrequency:h.extraInfo.paymentFrequency,renewalDK:"Y"}),void(We.canInsure=!0);Object.assign(Ye,{holder:{certNo:p.certNo,certType:p.certType,mobile:p.mobile,name:p.name,socialFlag:L.HAS},insured:{certNo:null==f?void 0:f[0].certNo,certType:null==(o=f[0])?void 0:o.certType,name:null==(l=f[0])?void 0:l.name,socialFlag:null==(d=null==(i=f[0])?void 0:i.extInfo)?void 0:d.hasSocialInsurance,relationToHolder:null==(s=f[0])?void 0:s.relationToHolder},paymentMethod:h.extraInfo.paymentMethod,paymentFrequency:h.extraInfo.paymentFrequency,renewalDK:h.extraInfo.renewalDK||"N"}),Ve.value=null==(m=null==(c=null==(u=f[0])?void 0:u.tenantOrderProductList)?void 0:c[0])?void 0:m.premium,y.orderStatus!==x.ACCEPT_POLICY&&y.orderStatus!==x.PAYMENT_SUCCESS||(We.canUpgrade=!0,Ee.value=!1,Be.value=!0),y.orderStatus===x.PAYING&&(Ee.value=!0,setTimeout((()=>{sa()}),3e3))}};return i((()=>{je?(Je.value=de,ze.value=de):we?(Je.value={...se,paymentFrequencyDisable:!0},ze.value=se,We.canInsure=!0):be||we||(Je.value={...se,paymentFrequencyDisable:!0},ze.value=se,We.canInsure=!0),(async()=>{var e;const a=await M({productCode:Ne,withInsureInfo:!0,tenantId:ge});"10000"===a.code&&(xe.value=a.data,document.title=(null==(e=a.data)?void 0:e.productFullName)||"");const n=await $({productCode:Ne});"10000"===n.code&&(Le.value=n.data),we&&sa()})(),setTimeout((async()=>{Ke=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const n=d("van-loading"),t=d("van-button"),r=d("van-config-provider"),o=s("dompurify-html");return u(),c(w,null,[m(r,{"theme-vars":I(Q)},{default:v((()=>{var e,a,r,l,i,d,s;return[Me.value.show?p((u(),c("div",ce,null,512)),[[o,Me.value.html]]):y("",!0),f("div",me,[f("div",ve,[m(X,{url:null==(a=null==(e=xe.value)?void 0:e.tenantProductInsureVO)?void 0:a.banner[0]},null,8,["url"]),m(ee,{"product-name":null==(r=xe.value)?void 0:r.productFullName,"product-desc":null==(i=null==(l=xe.value)?void 0:l.showConfigVO)?void 0:i.desc},null,8,["product-name","product-desc"])]),(null==(s=null==(d=xe.value)?void 0:d.tenantProductInsureVO)?void 0:s.titleAndDescVOS)?(u(),h(ae,{key:0,"guarantee-list":I(Qe)},null,8,["guarantee-list"])):y("",!0),m(ne,{detail:xe.value},{form:v((()=>[m(te,{ref_key:"formRef",ref:Se,disable:!I(We).showInsure,"form-auth":Je.value,"form-info":I(Ye),premium:Ve.value,"product-detail":xe.value,payments:[1],"payment-method":[0],onOnReset:na,onOnUpdate:ta},null,8,["disable","form-auth","form-info","premium","product-detail"])])),_:1},8,["detail"]),f("div",pe,[f("div",ye,[fe,_e.value?(u(),h(n,{key:1,class:"premium-loading",type:"spinner"})):(u(),c("span",he,N(Ve.value?"￥":"")+N(I(k)(Ve.value))+N(Ve.value?"元/月":""),1))]),m(t,{type:"primary",class:"right",disabled:!(I(We).canInsure||I(We).canUpgrade),onClick:la},{default:v((()=>[g(N(I(We).showInsure?"立即投保":"升级保障"),1)])),_:1},8,["disabled"])])]),I(we)?y("",!0):(u(),h(re,{key:1,"product-detail":xe.value},null,8,["product-detail"])),m(oe,{"order-no":I(we),"tenant-id":I(ge),"upgrade-code":I(He),"is-show":Be.value,onOnConfirm:ea,onOnClose:aa},null,8,["order-no","tenant-id","upgrade-code","is-show"])]})),_:1},8,["theme-vars"]),m(le,{show:Ae.value,"onUpdate:show":a[0]||(a[0]=e=>Ae.value=e),"content-list":I(Ge),"active-index":0,onOnConfirmHealth:ia},null,8,["show","content-list"]),qe.value?(u(),h(ue,{key:0,show:qe.value,"onUpdate:show":a[1]||(a[1]=e=>qe.value=e),"content-list":I(Ze),"active-index":Ue.value,text:"我已逐页阅读并确认告知内容",onSubmit:da},null,8,["show","content-list","active-index"])):y("",!0),m(ie,{"is-show":Ee.value},null,8,["is-show"])],64)}}}),[["__scopeId","data-v-3d23cb7a"]]);export{Ie as default};
