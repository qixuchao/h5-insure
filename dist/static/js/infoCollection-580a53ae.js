import{d as e,W as a,X as t,u as n,x as o,r as i,K as r,Y as l,ar as s,T as u,o as d,Q as c,b as v,c as p,e as f,w as m,f as O,g as h,h as I,i as V,a1 as C,j as L,P as y,a3 as g,C as k}from"./index-14b87a0a.js";import{d as P}from"./debounce-eed12388.js";import{P as j,l as b}from"./index-5bb63aad.js";import{t as _}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-cfe6721b.js";/* empty css              */import"./bankCard-891767c7.js";import{_ as w}from"./PayInfo-8cacc429.js";import{u as R,p as x,q as F,c as T,i as E}from"./trial-98bfde99.js";import{I as N,P as D}from"./index-82f5842c.js";import{P as S,d as A}from"./utils-94323e32.js";import{_ as U,f as q}from"./utils-4fe5dc84.js";import{n as K}from"./nextStep-b71523da.js";import{u as B}from"./useAttachment-81a44cc1.js";import{a as H,q as J}from"./product-92bb273c.js";import{t as M,g as W}from"./utils-b0532950.js";import{u as $}from"./useOrder-fb4a0968.js";import{p as G}from"./pageJump-1c6f1428.js";import{B as Q,P as X}from"./constants-7afb7c3d.js";import"./infoCollection-8c829899.js";import"./pdfh5-008ca364.js";import"./isObjectLike-a9798079.js";import"./cloneDeep-1de8e9b0.js";import"./_initCloneObject-0663309f.js";import"./index-789c5099.js";import"./index-38a8fb4d.js";import"./phoneVerify-a8396891.js";import"./index-6daa4e10.js";import"./trial-f06d526c.js";import"./core-087123ab.js";import"./constant-c3f28a3b.js";const Y={class:"long-info-collection"},z=e({__name:"infoCollection",setup(e){const z=a((()=>t((()=>import("./index-516af4d3.js")),["static/js/index-516af4d3.js","static/css/index-fa4edf2a.css","static/js/index-14b87a0a.js","static/css/index-3be92ec8.css","static/js/pdfh5-008ca364.js","static/js/index-6daa4e10.js","static/css/index-827a8544.css","static/js/utils-b0532950.js","static/js/infoCollection-8c829899.js","static/js/trial-f06d526c.js"]))),Z=a((()=>t((()=>import("./index-23ae97d7.js")),["static/js/index-23ae97d7.js","static/css/index-3329e46f.css","static/js/index-14b87a0a.js","static/css/index-3be92ec8.css","static/js/pdfh5-008ca364.js"]))),ee=n(),ae=$(),{productCode:te="",tenantId:ne,agentCode:oe="",agencyCode:ie,saleChannelId:re,isShare:le,orderNo:se,extraInfo:ue,insurerCode:de,preview:ce}=ee.query;let ve={};try{ve=JSON.parse(decodeURIComponent(ue))}catch(na){}const pe=o({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},defaultValue:{},isAutoChange:!1}),fe=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,me=i({imgUrl:"",desc:"",title:"",link:fe}),Oe=i(),he=i(),Ie=i({}),Ve=i({}),Ce=i([]),Le=i(),ye=i({}),ge=i(!1),ke=i(!1),Pe=i(0),je=i(!0),{fileList:be,mustReadFileCount:_e,popupFileList:we}=B(ye,Le),Re=i(!1),xe=i(!1),Fe=()=>{ke.value=!1,je.value=!0,Ce.value.length<1||(ge.value=!0)},Te=()=>{ge.value=!1,ke.value=!1,je.value=!0},Ee=i({}),Ne=i(!1),De=i([{}]),Se=i(""),Ae=i(0),Ue=i(!1),qe=i(),Ke=i();i();const Be=r((()=>{var e,a;const{insureProductRiskVOList:t}=(null==(a=null==(e=Ve.value)?void 0:e.productPlanInsureVOList)?void 0:a[0])||{};return(t||[]).find((e=>e.mainRiskFlag===l.YES))})),He=i(0),Je=i({}),Me=P((()=>{var e;Ne.value&&(Ee.value.productCode=te,Ee.value.tenantId=ne,De.value=De.value.map((e=>(e=>{var a,t,n,o,i;const r=null==(t=null==(a=ye.value)?void 0:a.insureProductRiskVOList)?void 0:t.find((a=>e.riskId===a.riskId));if(r&&1!==r.mainRiskFlag){const a=null==(o=(null==(n=ye.value)?void 0:n.productRiskRelationVOList)||[])?void 0:o.find((e=>e.collocationRiskId===r.riskId));if(a){const t=null==(i=De.value)?void 0:i.find((e=>e.riskId===a.riskId));D.forEach((a=>{a.ruleKey&&r.productRiskInsureLimitVO&&t&&(1===r.productRiskInsureLimitVO[a.ruleKey]&&(e[a.valueKey]=t[a.valueKey]),3===r.productRiskInsureLimitVO[a.ruleKey]&&(e[a.valueKey]=A(r,t[a.valueKey],Ee.value)))}))}}return e})(e))),Ee.value.insuredVOList[0].productPlanVOList=[{insurerCode:de,planCode:null==(e=ye.value)?void 0:e.planCode,riskVOList:De.value}],console.log(">>>数据构建<<<",Ee.value),Se.value="试算中...",Ae.value=0,Ue.value=!0,R(Ee.value).then((({code:e})=>{e===s&&x(Ee.value).then((e=>{var a,t,n;if(e.data&&e.code===s){(null==(a=null==e?void 0:e.data)?void 0:a.errorInfo)&&u(`${null==(t=null==e?void 0:e.data)?void 0:t.errorInfo}`),He.value=null==(n=e.data)?void 0:n.premium,Se.value="",Ae.value=e.data.premium;const o={};e.data.riskPremiumDetailVOList&&e.data.riskPremiumDetailVOList.length&&e.data.riskPremiumDetailVOList.forEach((e=>{o[e.riskCode]={premium:e.premium,amount:e.amount}})),Je.value=o}})).finally((()=>{Ue.value=!1}))})))}),300),We=["annuityDrawDate","coveragePeriod","chargePeriod"],$e=e=>{var a,t,n,o,i,r;if(null==(t=null==(a=null==e?void 0:e.data)?void 0:a[0])?void 0:t.productRiskDyInsureFactorVOList){const a=[];if(null==(n=ye.value)||n.insureProductRiskVOList.forEach((t=>{var n,o;const i=null==(o=null==(n=null==e?void 0:e.data)?void 0:n[0])?void 0:o.productRiskDyInsureFactorVOList.find((e=>e.riskCode===t.riskCode));if(i){t.productRiskInsureLimitVO={...t.productRiskInsureLimitVO,...i};const e=De.value.find((e=>e.riskCode===t.riskCode));let n=!1;D.forEach((a=>{if(We.indexOf(a.valueKey)>=0){const o=t.productRiskInsureLimitVO[a.configKey];if(o&&e){const t=o.find((t=>t.code===e[a.valueKey]));if(t&&2===t.useFlag){const t=o.find((e=>1===e.defaultFlag));e[a.valueKey]=t.code,n=!0}}}})),n&&a.push({...e,...i,riskCode:t.riskCode})}})),a.length>0&&(null==(r=null==(i=null==(o=pe.defaultValue)?void 0:o.insuredVOList)?void 0:i[0])?void 0:r.productPlanVOList))return a.forEach((e=>{var a,t,n;pe.defaultValue.insuredVOList[0].productPlanVOList=null==(n=null==(t=null==(a=pe.defaultValue)?void 0:a.insuredVOList)?void 0:t[0])?void 0:n.productPlanVOList.map((a=>(a.riskCode===e.riskCode&&(a=e),a)))})),!1}return!0},Ge=async e=>{var a;const{holder:t,insuredVOList:n,isFirstInsuredChange:o}=e;if(t&&(Ee.value.holder={personVO:{...t,socialFlag:t.hasSocialInsurance}}),n&&n.length>0&&n.forEach(((e,a)=>{Ee.value.insuredVOList&&Ee.value.insuredVOList.length>a?Ee.value.insuredVOList[a].personVO={...e.personVO,socialFlag:e.personVO.hasSocialInsurance}:Ee.value.insuredVOList=[{personVO:{...e.personVO,socialFlag:e.personVO.hasSocialInsurance}}]})),Ne.value=!0,console.log("投被保人的信息回传 ",Ee.value,e),o){console.log("处理第一被保人修改的dy变化");const e=await F({calcProductFactorList:[{planCode:ye.value.planCode,productCode:ye.value.productCode,riskEditVOList:[{insureProductRiskVO:null==(a=ye.value.insureProductRiskVOList)?void 0:a[0]}]}],...n[0].personVO});if(!$e(e))return}Me()},Qe=async(e,a)=>{var t,n,o,i;if(a){const r=b.exports.cloneDeep(e);delete r.insurancePeriodValueList,delete r.liabilityVOList,delete r.paymentFrequencyList,delete r.paymentPeriodValueList;if(We.indexOf(a.key)>=0){const l={};switch(a.key){case"annuityDrawDate":l.changeType=3;break;case"coveragePeriod":l.changeType=2;break;case"chargePeriod":l.changeType=1}const s=null==(n=null==(t=Ee.value)?void 0:t.insuredVOList)?void 0:n[0].personVO,u=null==(i=null==(o=ye.value)?void 0:o.insureProductRiskVOList)?void 0:i.find((a=>a.riskCode===e.riskCode));if(!pe.isAutoChange){const a=await F({calcProductFactorList:[{planCode:ye.value.planCode,productCode:ye.value.productCode,riskEditVOList:[{insureProductRiskVO:u,insureRiskEditReqVO:{riskId:e.riskId,riskCode:e.riskCode,...r,...l}}]}],...s}),t=$e(a);return t||(pe.isAutoChange=!0),t}pe.isAutoChange=!1}}return!0},Xe=async(e,a)=>{qe.value=e;await Qe(e,a)&&(De.value.length>0&&(De.value[0]=e),De.value.length&&(De.value[0]=e),console.log("标准险种的信息回传",e),Me())},Ye=async(e,a)=>{if(De.value=[qe.value,...e],console.log("附加险列表数据回传",e),a){console.log("-change data = ",a);const t=e.find((e=>e.riskCode===a.riskCode));if(!(await Qe(t,a)))return}Me()},ze=(e={},a={},t={})=>{var n;const o={...t},{tenantOrderHolder:i,tenantOrderInsuredList:r}=q({holder:null==(n=pe.personalInfo.holder)?void 0:n.personVO,insuredList:(pe.personalInfo.insuredVOList||[]).map((e=>e.personVO))}),l={tenantId:ne,riskList:De.value||[],riskPremium:a,productId:e.id};return o.extInfo.iseeBizNo=Ke.value,o.productCode=e.productCode,o.commencementTime=o.insuranceStartDate,o.expiryDate=o.insuranceEndDate,o.premium=He.value,o.orderAmount=He.value,o.orderRealAmount=He.value,o.tenantOrderHolder=i,o.tenantOrderInsuredList=r.map((a=>({...a,certType:a.certType||k.CERT,certNo:(a.certNo||"").toLocaleUpperCase(),planCode:ye.value.planCode,tenantOrderProductList:[{premium:He.value,productCode:e.productCode,productName:e.productName,planCode:ye.value.planCode,tenantOrderRiskList:M(l)}]}))),o},Ze=async()=>{var e;Re.value?Promise.all([null==(e=he.value)?void 0:e.validate(!1),Oe.value]).then((()=>{Object.assign(ae.value,{extInfo:{...ae.value.extInfo,buttonCode:Q.INFO_COLLECTION,pageCode:X.INFO_COLLECTION}});const e=ze(Ve.value,Je.value,ae.value);K(e,((e,a)=>{a===y.JUMP_PAGE&&G(e.nextPageCode,ee.query)}))})):u("请勾选投保人阅读并接受")},ea=e=>{he.value.validateHolder("mobile").then((()=>{Object.assign(ae.value,{extInfo:{...ae.value.extInfo,buttonCode:Q.INFO_COLLECTION,pageCode:X.INFO_COLLECTION}});const a=ze(Ve.value,Je.value,ae.value);K(a,((a,t)=>{t===y.JUMP_PAGE&&(null==e||e())}))})).catch((()=>{u("请录入投保人手机号后进行分享")}))},aa=o({tenantOrderPayInfoList:[]}),ta=async()=>{H({productCode:te,tenantId:ne,isTenant:!ce}).then((({data:e,code:a})=>{if("10000"===a){Ie.value=e,document.title=e.BASIC_INFO.title||"";let a={};const{wxShareConfig:t,showWXShare:n}=e.PRODUCT_LIST||{};if(n){const{title:e,desc:o,image:i}=t||{},[r=""]=i||[];a={title:e,desc:o,image:r,isShare:n}}else{const{title:t,desc:o,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};a={title:t,desc:o,image:i,isShare:n}}Object.assign(me.value,a)}})),T({orderNo:se,tenantId:ne}).then((({code:e,data:a})=>{"10000"===e&&(aa.tenantOrderPayInfoList=a.tenantOrderPayInfoList,Ae.value=a.orderAmount,Object.assign(ae.value,a,{tenantOrderPayInfoList:a.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0}}),(()=>{const e={},{tenantOrderHolder:a,tenantOrderInsuredList:t}=ae.value;e.holder={personVO:{...a,...a.extInfo}},e.insuredVOList=(t||[]).map((e=>({personVO:{...e,...e.extInfo,beneficiaryList:e.tenantOrderBeneficiaryList.map((e=>({personVO:e})))}}))),Object.assign(pe.personalInfo,e)})(),xe.value=!0)})),J({productCode:te}).then((({code:e,data:a})=>{var t,n,o,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:r}=a;Le.value=e||[];const{basicInfo:{questionnaireType:l},questions:s,questionnaireName:u}=(null==(t=null==r?void 0:r[0])?void 0:t.questionnaireDetailResponseVO)||{basicInfo:{}};l&&(Ce.value=2===l?[{attachmentName:u,attachmentUri:s,attachmentType:"question"}]:[{attachmentName:u,attachmentUri:null==(n=null==s?void 0:s[0])?void 0:n.content,attachmentType:W(String(null==(o=null==s?void 0:s[0])?void 0:o.textType),null==(i=null==s?void 0:s[0])?void 0:i.content)}])}})),await E({productCode:te,isTenant:!ce}).then((({data:e,code:a})=>{var t,n;if("10000"===a){Ve.value=e,ye.value=(null==(t=e.productPlanInsureVOList)?void 0:t[0])||{};const{payInfo:a}=_(null==(n=ye.value)?void 0:n.productFactor);pe.payInfo={...pe.payInfo,...a}}}))};return d((()=>{ta()})),c((()=>pe.personalInfo),((...e)=>{}),{deep:!0,immediate:!0}),(e,a)=>{const t=g,n=v("ProPageWrap");return p(),f(n,null,{default:m((()=>{var e,n,o,i,r,l,s;return[O("div",Y,[(null==(e=h(ye))?void 0:e.productFactor)?(p(),f(h(j),{key:0,ref_key:"personalInfoRef",ref:he,modelValue:h(pe).personalInfo,"onUpdate:modelValue":a[0]||(a[0]=e=>h(pe).personalInfo=e),"product-factor":null==(n=h(ye))?void 0:n.productFactor,"multi-insured-num":null==(i=null==(o=h(ye))?void 0:o.multiInsuredConfigVO)?void 0:i.multiInsuredNum,"is-view":!1,onTrailChange:Ge},null,8,["modelValue","product-factor","multi-insured-num"])):I("",!0),V(N,{ref:"insureInfosRef","origin-data":h(Be),"product-factor":h(ye).productFactor,onTrialChange:Xe},null,8,["origin-data","product-factor"]),V(S,{"data-source":h(ye),"show-main-risk":!1,"default-value":h(pe).defaultValue?null==(s=null==(l=null==(r=h(pe).defaultValue)?void 0:r.insuredVOList)?void 0:l[0])?void 0:s.productPlanVOList:[],onTrialChange:Ye},null,8,["data-source","default-value"]),h(pe).payInfo.schema.length?(p(),f(h(w),{key:1,ref_key:"payInfoRef",ref:Oe,modelValue:h(aa).tenantOrderPayInfoList,"onUpdate:modelValue":a[1]||(a[1]=e=>h(aa).tenantOrderPayInfoList=e),schema:h(pe).payInfo.schema,"is-view":h(pe).isView},null,8,["modelValue","schema","is-view"])):I("",!0),V(t,null,{default:m((()=>{var e;return[(null==(e=h(be))?void 0:e.length)?(p(),f(h(Z),{key:0,modelValue:h(Re),"onUpdate:modelValue":a[2]||(a[2]=e=>C(Re)?Re.value=e:null),"attachment-list":h(be),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[3]||(a[3]=e=>(e=>{Pe.value=e,ke.value=!0})(e))},null,8,["modelValue","attachment-list"])):I("",!0)]})),_:1}),V(U,{"is-share":h(me).isShare&&!h(le),premium:h(Ae),"share-info":h(me),"loading-text":h(Se),"payment-frequency":1,"tenant-product-detail":h(Ie),"handle-share":ea,onHandleClick:Ze},{default:m((()=>[L("下一步")])),_:1},8,["is-share","premium","share-info","loading-text","tenant-product-detail"]),h(ke)?(p(),f(h(z),{key:2,show:h(ke),"onUpdate:show":a[4]||(a[4]=e=>C(ke)?ke.value=e:null),"content-list":h(je)?h(be):h(we),"is-only-view":h(je),"active-index":h(Pe),text:h(je)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":h(je)?0:h(_e),onSubmit:Fe,onOnCloseFilePreviewByMask:Te},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):I("",!0)])]})),_:1})}}});export{z as default};
