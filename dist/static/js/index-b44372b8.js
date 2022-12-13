import{_ as e,d as a,u as t,a as n,r,A as o,a3 as l,y as i,a8 as s,z as d,b as u,q as c,c as m,g as v,f as p,w as y,s as f,j as h,i as I,e as N,l as g,t as w,aM as b,n as T,F as C,a5 as D,ar as O,T as F,as as P,aT as k,aP as H}from"./index-b655107d.js";import{d as S}from"./debounce-e6a66970.js";import{a as V}from"./order-2e727e85.js";import{S as j,R as x,g as L}from"./infoCollection-751f49fe.js";import{i as $,s as q,p as A,g as U,u as E,a as M}from"./trial-79b88bf9.js";import{p as B}from"./product-0e880efa.js";import{t as _,g as R,a as K,s as Y,v as z,b as J}from"./utils-48480fba.js";import{f as W,a as G}from"./utils-b77f2acb.js";import{t as Q}from"./theme-ea709837.js";import{d as X,B as Z,D as ee,G as ae,S as te,H as ne,P as re,U as oe,_ as le,W as ie,p as se,a as de}from"./auth-e9b30f50.js";import{_ as ue}from"./index-6a0befe8.js";import"./pdfdist-666d4573.js";import"./trial-493ad29c.js";import"./index-799df0c1.js";import"./bankCard-faf093a9.js";import"./validator-5a13dc82.js";import"./phoneVerify-42759af1.js";const ce={key:0},me={class:"page-internet-product-detail"},ve={class:"info"},pe={class:"footer-button"},ye={class:"price"},fe=T(" 总保费"),he={key:0};var Ie=e(a({setup(e){const a=t(),Ie=n(),{productCode:Ne="BWYL2021",tenantId:ge,orderNo:we,phoneNo:be,agentCode:Te="",saleChannelId:Ce,paymentMethod:De,certNo:Oe,name:Fe,pageCode:Pe,upgradeCode:ke,from:He}=Ie.query,Se=r(),Ve=r(),je=r(),xe=r(),Le="payBack"===Pe,$e=r(!1),qe=r(!1),Ae=r(!1),Ue=r(0),Ee=r(!1),Me=r(!1),Be=r({show:!1,html:""}),_e=r(!1),Re=r();let Ke="";const Ye=o({holder:{certNo:Oe,certType:l.CERT,mobile:be,name:Fe,socialFlag:j.HAS},insured:{certNo:Oe,certType:l.CERT,name:Fe,socialFlag:j.HAS,relationToHolder:x.SELF},paymentMethod:De,renewalDK:"Y",paymentFrequency:L.MONTH}),ze=r(X),Je=r(X),We=o({showInsure:!Le,canInsure:!1,canUpgrade:!1}),Ge=i((()=>{var e,a;return(null==(a=null==(e=Ve.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"===e.attachmentName)))||[]})),Qe=i((()=>{var e,a,t,n,r,o,l,i;return[...(null==(a=null==(e=Ve.value)?void 0:e.tenantProductInsureVO)?void 0:a.titleAndDescVOS)||[],{desc:`出生${W(null==(n=null==(t=Ve.value)?void 0:t.tenantProductInsureVO)?void 0:n.holderAgeLimit)}`,title:"投保年龄",noDetail:!0},{desc:G(null==(o=null==(r=Ve.value)?void 0:r.tenantProductInsureVO)?void 0:o.insurancePeriodValues),title:"保障期限",noDetail:!0},{desc:`${null==(i=null==(l=Ve.value)?void 0:l.tenantProductInsureVO)?void 0:i.waitPeriod}天，上一张保单期满后指定期限内重新投保、因遭受意外伤害导致的医疗无等待期`,title:"等待期",noDetail:!0}]})),Xe=i((()=>{var e,a;return(null==(a=null==(e=Ve.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName)))||[]})),Ze=()=>{if(Ye.holder.certNo){const e=P(Ye.holder.certNo);if(z(Ye.holder.certNo,18,"year"))return F("投保人年龄必须大于18岁！"),!1;if(Ye.insured.certNo&&Ye.insured.relationToHolder===x.MATE){if(e===P(Ye.insured.certNo))return F("被保人为配偶时，性别不可相同！"),!1}}if(Ye.insured.certNo){if(Ye.insured.relationToHolder===x.CHILD&&z(Ye.insured.certNo,30,"day"))return F("被保人为子女时，年龄必须大于等于30天！"),!1;if(Ye.insured.relationToHolder===x.PARENT&&!z(Ye.insured.certNo,71,"year"))return F("被保人为父母时，年龄必须小于等于70岁！"),!1}if([x.CHILD,x.PARENT].includes(Ye.insured.relationToHolder)){const e=J(Ye.holder.certNo,"year"),a=J(Ye.insured.certNo,"year");if(Ye.insured.relationToHolder===x.CHILD&&e-a<18)return F("投保人和子女年龄必须相差18岁！"),!1;if(Ye.insured.relationToHolder===x.PARENT&&a-e<18)return F("投保人和父母年龄必须相差18岁！"),!1}return!0},ea=()=>{a.push({path:"/internet/guaranteeUpgrade",query:{...Ie.query,tenantId:ge,productCode:"BWYL2022",orderNo:we,agentCode:Te}})},aa=()=>{Me.value=!1,a.replace(`/pay?orderNo=${we}&saleUserId=${Te}&tenantId=${ge}`)},ta=()=>{Je.value=ze.value},na=()=>{Je.value={...Je.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},ra=e=>{var a,t;const n=JSON.parse(null==(t=null==(a=je.value)?void 0:a.productBasicInfoVO)?void 0:t.extInfo);let r="";1===n.endorsementFlag&&(r=`&upgradeCode=${n.endorsementCode}`);return`${H}/internet/productDetail?tenantId=${ge}&productCode=${Ne}&orderNo=${e}&agentCode=${Te}&pageCode=payBack${r}&from=${He||"normal"}`},oa=async e=>{const a=R({tenantId:ge,saleUserId:Te,saleChannelId:Ce,detail:Ve.value,insureDetail:je.value,paymentMethod:Ye.paymentMethod,renewalDK:Ye.renewalDK,iseeBizNo:Ke,successJumpUrl:"",premium:xe.value,holder:Ye.holder,insured:Ye.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:"",orderNo:we,originOrderIds:Re.value});try{const e=await q(a),{code:n,data:r}=e;"10000"===n&&(async e=>{F.loading({message:"核保中...",forbidClick:!0,duration:0});try{const a=await E(e),{code:t}=a;if("10000"===t){const a=await M({orderNo:e.orderNo,tenantId:ge}),{data:t}=a;"10000"===a.code&&(2===t.type?(Be.value={show:!0,html:t.paymentUrl},k((()=>{const e=document.getElementById("cashierSubmit");null==e||e.addEventListener("submit",(e=>{e.preventDefault()})),null==e||e.submit()}))):window.location.href=t.paymentUrl)}We.canInsure=!0}catch(a){We.canInsure=!0}finally{F.clear()}})({...a,orderNo:r.data,extInfo:{extraInfo:{renewalDK:Ye.renewalDK,paymentMethod:Ye.paymentMethod,paymentFrequency:Ye.paymentFrequency,successJumpUrl:ra(r.data),failUrl:(t=r.data,`${H}/internet/payFail?tenantId=${ge}&orderNo=${t}&agentCode=${Te}&pageCode=payBack&from=${He||"normal"}`)},iseeBizNo:Ke}})}catch(n){We.canInsure=!0}var t},la=async()=>{var e;if(Le)ea();else{We.canInsure=!1;try{const{condition:a,data:t}=await new Promise(((e,a)=>{var t,n;null==(n=null==(t=Se.value)?void 0:t.validateForm)||n.call(t).then((async()=>{if(!Ze())return void a(new Error);const{calcData:t,riskVOList:n}=K({holder:Ye.holder,insured:Ye.insured,tenantId:ge,paymentFrequency:Ye.paymentFrequency,productDetail:Ve.value,insureDetail:je.value},!0),r=await A(t),{code:o,data:l}=r;"10000"===o?(xe.value=l.premium,e({condition:n,data:l})):a(new Error)})).catch((e=>{We.canInsure=!0,Y(e)}))})),n={},r=(e=[])=>{(e||[]).forEach((e=>{var a;n[e.riskCode]=e,(null==(a=e.riskPremiumDetailVOList)?void 0:a.length)&&r(e.riskPremiumDetailVOList)}))};r(t.riskPremiumDetailVOList);const o=_({tenantId:ge,riskList:a,riskPremium:n,productId:null==(e=Ve.value)?void 0:e.id});oa(o)}catch(a){We.canInsure=!0}}},ia=e=>{"allFalse"===e?(qe.value=!1,la(),We.canInsure=!0):D.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()}))},sa=()=>{$e.value=!0,Ae.value=!1,qe.value=!0};s([()=>Ye.insured.certNo,()=>Ye.insured.socialFlag],S((()=>{Ye.insured.certNo&&Ye.insured.socialFlag&&"payBack"!==Pe&&(()=>{const{holder:{certNo:e,mobile:a,name:t,socialFlag:n},insured:{certNo:r,name:o,socialFlag:l,relationToHolder:i},paymentMethod:s}=Ye;return O(r)&&!!l})()&&(async()=>{if(We.canInsure=!0,!Ze())return{};const{calcData:e,riskVOList:a}=K({holder:Ye.holder,insured:Ye.insured,tenantId:ge,paymentFrequency:Ye.paymentFrequency,productDetail:Ve.value,insureDetail:je.value},!0);if(!Array.isArray(a)||a.length<1)return F("被保人年龄需在30天(含) - 70岁(含)之间！"),xe.value=null,{};_e.value=!0;const t=await A(e);_e.value=!1;const{code:n,data:r}=t;"10000"===n&&(Ye.insured.certNo?xe.value=r.premium:xe.value=null)})()}),500),{deep:!0,immediate:!0}),s((()=>Ye.insured.certNo),(()=>{Ye.insured.certNo||(xe.value=null)}));const da=async()=>{var e,a,t,n,r,o,l,i,s,d,u,c,m;const v=await U({orderNo:we,tenantId:ge}),{code:p,data:y}=v;if("10000"===p){const{id:v,tenantOrderHolder:p,tenantOrderInsuredList:f,extInfo:h}=y;if(!Le)return Re.value={id:v,holderId:null==p?void 0:p.id,insuredId:null==f?void 0:f[0].id},Object.assign(Ye,{holder:{certNo:p.certNo,certType:p.certType,mobile:p.mobile,name:p.name,socialFlag:j.HAS},insured:{certNo:null==f?void 0:f[0].certNo,certType:null==(e=f[0])?void 0:e.certType,name:null==(a=f[0])?void 0:a.name,socialFlag:null==(n=null==(t=f[0])?void 0:t.extInfo)?void 0:n.hasSocialInsurance,relationToHolder:null==(r=f[0])?void 0:r.relationToHolder},paymentMethod:h.extraInfo.paymentMethod,paymentFrequency:h.extraInfo.paymentFrequency,renewalDK:"Y"}),void(We.canInsure=!0);Object.assign(Ye,{holder:{certNo:p.certNo,certType:p.certType,mobile:p.mobile,name:p.name,socialFlag:j.HAS},insured:{certNo:null==f?void 0:f[0].certNo,certType:null==(o=f[0])?void 0:o.certType,name:null==(l=f[0])?void 0:l.name,socialFlag:null==(s=null==(i=f[0])?void 0:i.extInfo)?void 0:s.hasSocialInsurance,relationToHolder:null==(d=f[0])?void 0:d.relationToHolder},paymentMethod:h.extraInfo.paymentMethod,paymentFrequency:h.extraInfo.paymentFrequency,renewalDK:h.extraInfo.renewalDK||"N"}),xe.value=null==(m=null==(c=null==(u=f[0])?void 0:u.tenantOrderProductList)?void 0:c[0])?void 0:m.premium,y.orderStatus!==V.ACCEPT_POLICY&&y.orderStatus!==V.PAYMENT_SUCCESS||(We.canUpgrade=!0,Ee.value=!1,Me.value=!0),y.orderStatus===V.PAYING&&(Ee.value=!0,setTimeout((()=>{da()}),3e3))}};return d((()=>{Le?(Je.value=se,ze.value=se):we?(Je.value={...de,paymentFrequencyDisable:!0},ze.value=de,We.canInsure=!0):be||we||(Je.value={...de,paymentFrequencyDisable:!0},ze.value=de,We.canInsure=!0),(async()=>{var e;const a=await B({productCode:Ne,withInsureInfo:!0,tenantId:ge});"10000"===a.code&&(Ve.value=a.data,document.title=(null==(e=a.data)?void 0:e.productFullName)||"");const t=await $({productCode:Ne});"10000"===t.code&&(je.value=t.data),we&&da()})(),setTimeout((async()=>{Ke=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=u("van-loading"),n=u("van-button"),r=u("van-config-provider"),o=c("dompurify-html");return m(),v(C,null,[p(r,{"theme-vars":g(Q)},{default:y((()=>{var e,a,r,l,i,s,d;return[Be.value.show?f((m(),v("div",ce,null,512)),[[o,Be.value.html]]):h("",!0),I("div",me,[I("div",ve,[p(Z,{url:null==(a=null==(e=Ve.value)?void 0:e.tenantProductInsureVO)?void 0:a.banner[0]},null,8,["url"]),p(ee,{"product-name":null==(r=Ve.value)?void 0:r.productFullName,"product-desc":null==(i=null==(l=Ve.value)?void 0:l.showConfigVO)?void 0:i.desc},null,8,["product-name","product-desc"])]),(null==(d=null==(s=Ve.value)?void 0:s.tenantProductInsureVO)?void 0:d.titleAndDescVOS)?(m(),N(ae,{key:0,"guarantee-list":g(Qe)},null,8,["guarantee-list"])):h("",!0),p(te,{detail:Ve.value},{form:y((()=>[p(ne,{ref_key:"formRef",ref:Se,disable:!g(We).showInsure,"form-auth":Je.value,"form-info":g(Ye),premium:xe.value,"product-detail":Ve.value,payments:[1],"payment-method":[0],onOnReset:ta,onOnUpdate:na},null,8,["disable","form-auth","form-info","premium","product-detail"])])),_:1},8,["detail"]),I("div",pe,[I("div",ye,[fe,_e.value?(m(),N(t,{key:1,class:"premium-loading",type:"spinner"})):(m(),v("span",he,w(xe.value?"￥":"")+w(g(b)(xe.value))+w(xe.value?"元/月":""),1))]),p(n,{type:"primary",class:"right",disabled:!(g(We).canInsure||g(We).canUpgrade),onClick:la},{default:y((()=>[T(w(g(We).showInsure?"立即投保":"升级保障"),1)])),_:1},8,["disabled"])])]),g(we)?h("",!0):(m(),N(re,{key:1,"product-detail":Ve.value},null,8,["product-detail"])),p(oe,{"order-no":g(we),"tenant-id":g(ge),"upgrade-code":g(ke),"is-show":Me.value,onOnConfirm:ea,onOnClose:aa},null,8,["order-no","tenant-id","upgrade-code","is-show"])]})),_:1},8,["theme-vars"]),p(le,{show:qe.value,"onUpdate:show":a[0]||(a[0]=e=>qe.value=e),"content-list":g(Ge),"active-index":0,onOnConfirmHealth:ia},null,8,["show","content-list"]),Ae.value?(m(),N(ue,{key:0,show:Ae.value,"onUpdate:show":a[1]||(a[1]=e=>Ae.value=e),"content-list":g(Xe),"active-index":Ue.value,text:"我已逐页阅读并确认告知内容",onSubmit:sa},null,8,["show","content-list","active-index"])):h("",!0),p(ie,{"is-show":Ee.value},null,8,["is-show"])],64)}}}),[["__scopeId","data-v-3d23cb7a"]]);export{Ie as default};
