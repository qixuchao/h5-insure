import{d as e,W as a,X as t,u as n,x as o,r as i,K as l,Y as r,ar as s,T as u,o as d,Q as c,b as v,c as p,e as f,w as m,f as O,g as V,h as I,i as h,a1 as L,j as C,P as y,a3 as g,C as k}from"./index-477a8908.js";import{d as P}from"./debounce-eed12388.js";import{P as j,l as x}from"./index-cf407790.js";import{t as R}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-38712837.js";/* empty css              */import"./bankCard-1173502a.js";import{_ as w}from"./PayInfo-565ead35.js";import{u as _,p as b,q as F,c as T,i as D,a as E}from"./trial-17fda577.js";import{I as N,P as S}from"./index-7b257aca.js";import{P as q,d as A}from"./utils-050c793c.js";import{_ as U,f as K}from"./utils-a7a6e29b.js";import{n as B}from"./nextStep-0d6c48da.js";import{u as H}from"./useAttachment-6a34ff27.js";import{a as J,q as M}from"./product-489843d6.js";import{t as W,g as $}from"./utils-aacd7a73.js";import{u as G}from"./useOrder-ff66fe4c.js";import{p as Q}from"./pageJump-751fd399.js";import{B as X,P as Y}from"./constants-7afb7c3d.js";import"./infoCollection-89c7de4a.js";import"./pdfh5-008ca364.js";import"./isObjectLike-a9798079.js";import"./cloneDeep-1de8e9b0.js";import"./_initCloneObject-0663309f.js";import"./index-5e05af7d.js";import"./index-15b79cb6.js";import"./phoneVerify-63226650.js";import"./index-796ca06d.js";import"./trial-6ef8e5cb.js";import"./core-04851f31.js";import"./constant-c3f28a3b.js";const z={class:"long-info-collection"},Z=e({__name:"infoCollection",setup(e){const Z=a((()=>t((()=>import("./index-ebe5aa9f.js")),["static/js/index-ebe5aa9f.js","static/css/index-fa4edf2a.css","static/js/index-477a8908.js","static/css/index-3be92ec8.css","static/js/pdfh5-008ca364.js","static/js/index-796ca06d.js","static/css/index-827a8544.css","static/js/utils-aacd7a73.js","static/js/infoCollection-89c7de4a.js","static/js/trial-6ef8e5cb.js"]))),ee=a((()=>t((()=>import("./index-b950ead6.js")),["static/js/index-b950ead6.js","static/css/index-3329e46f.css","static/js/index-477a8908.js","static/css/index-3be92ec8.css","static/js/pdfh5-008ca364.js"]))),ae=n(),te=G(),{productCode:ne="",tenantId:oe,agentCode:ie="",agencyCode:le,saleChannelId:re,isShare:se,orderNo:ue,extraInfo:de,insurerCode:ce,preview:ve}=ae.query;let pe={};try{pe=JSON.parse(decodeURIComponent(de))}catch(ia){}const fe=o({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},defaultValue:{},isAutoChange:!1}),me=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,Oe=i({imgUrl:"",desc:"",title:"",link:me}),Ve=i(),Ie=i(),he=i({}),Le=i({}),Ce=i([]),ye=i(),ge=i({}),ke=i(!1),Pe=i(!1),je=i(0),xe=i(!0),{fileList:Re,mustReadFileCount:we,popupFileList:_e}=H(ge,ye),be=i(!1),Fe=i(!1),Te=()=>{Pe.value=!1,xe.value=!0,Ce.value.length<1||(ke.value=!0)},De=()=>{ke.value=!1,Pe.value=!1,xe.value=!0},Ee=i({}),Ne=i(!1),Se=i([{}]),qe=i(""),Ae=i(0),Ue=i(!1),Ke=i(),Be=i();i();const He=l((()=>{var e,a;const{insureProductRiskVOList:t}=(null==(a=null==(e=Le.value)?void 0:e.productPlanInsureVOList)?void 0:a[0])||{};return(t||[]).find((e=>e.mainRiskFlag===r.YES))})),Je=i(0),Me=i({}),We=async e=>{const a=await E({calcProductFactorList:[{planCode:ge.value.planCode,productCode:ne}]});var t,n;a.data&&(t=a.data.find((e=>e.productCode===ne)),fe.userData=t,fe.defaultValue=t,fe.planIndex=t.insuredVOList[0].productPlanVOList.findIndex((e=>e.planCode===ge.value.planCode)),console.log("-----data = ",null==(n=fe.defaultValue)?void 0:n.insuredVOList[0].productPlanVOList[0]))},$e=P((()=>{var e;Ne.value&&(Ee.value.productCode=ne,Ee.value.tenantId=oe,Se.value=Se.value.map((e=>(e=>{var a,t,n,o,i;const l=null==(t=null==(a=ge.value)?void 0:a.insureProductRiskVOList)?void 0:t.find((a=>e.riskId===a.riskId));if(l&&1!==l.mainRiskFlag){const a=null==(o=(null==(n=ge.value)?void 0:n.productRiskRelationVOList)||[])?void 0:o.find((e=>e.collocationRiskId===l.riskId));if(a){const t=null==(i=Se.value)?void 0:i.find((e=>e.riskId===a.riskId));S.forEach((a=>{a.ruleKey&&l.productRiskInsureLimitVO&&t&&(1===l.productRiskInsureLimitVO[a.ruleKey]&&(e[a.valueKey]=t[a.valueKey]),3===l.productRiskInsureLimitVO[a.ruleKey]&&(e[a.valueKey]=A(l,t[a.valueKey],Ee.value)))}))}}return e})(e))),Ee.value.insuredVOList[0].productPlanVOList=[{insurerCode:ce,planCode:null==(e=ge.value)?void 0:e.planCode,riskVOList:Se.value}],console.log(">>>数据构建<<<",Ee.value),qe.value="试算中...",Ae.value=0,Ue.value=!0,_(Ee.value).then((({code:e})=>{e===s&&b(Ee.value).then((e=>{var a,t,n;if(e.data&&e.code===s){(null==(a=null==e?void 0:e.data)?void 0:a.errorInfo)&&u(`${null==(t=null==e?void 0:e.data)?void 0:t.errorInfo}`),Je.value=null==(n=e.data)?void 0:n.premium,qe.value="",Ae.value=e.data.premium;const o={};e.data.riskPremiumDetailVOList&&e.data.riskPremiumDetailVOList.length&&e.data.riskPremiumDetailVOList.forEach((e=>{o[e.riskCode]={premium:e.premium,amount:e.amount}})),Me.value=o}})).finally((()=>{Ue.value=!1}))})))}),300),Ge=["annuityDrawDate","coveragePeriod","chargePeriod"],Qe=e=>{var a,t,n,o,i,l;if(console.log("handleDealDyResult",e),null==(t=null==(a=null==e?void 0:e.data)?void 0:a[0])?void 0:t.productRiskDyInsureFactorVOList){const a=[];if(null==(n=ge.value)||n.insureProductRiskVOList.forEach((t=>{var n,o;const i=null==(o=null==(n=null==e?void 0:e.data)?void 0:n[0])?void 0:o.productRiskDyInsureFactorVOList.find((e=>e.riskCode===t.riskCode));if(i){t.productRiskInsureLimitVO={...t.productRiskInsureLimitVO,...i};const e=Se.value.find((e=>e.riskCode===t.riskCode));let n=!0;S.forEach((a=>{if(Ge.indexOf(a.valueKey)>=0){const o=t.productRiskInsureLimitVO[a.configKey];if(o&&e){const t=o.find((t=>t.code===e[a.valueKey]));if(t&&2===t.useFlag){const t=o.find((e=>1===e.defaultFlag));e[a.valueKey]=t.code,n=!0}}}})),n&&a.push({...e,...i,riskCode:t.riskCode})}})),console.log("默认值",a.length,fe.defaultValue),a.length>0&&(null==(l=null==(i=null==(o=fe.defaultValue)?void 0:o.insuredVOList)?void 0:i[0])?void 0:l.productPlanVOList))return a.forEach((e=>{var a,t,n;fe.defaultValue.insuredVOList[0].productPlanVOList=null==(n=null==(t=null==(a=fe.defaultValue)?void 0:a.insuredVOList)?void 0:t[0])?void 0:n.productPlanVOList.map((a=>(a.riskCode===e.riskCode&&(a=e),a)))})),!1}return!0},Xe=async e=>{var a,t;console.log("data",e);const{holder:n,insuredVOList:o,isFirstInsuredChange:i}=e;if(n&&(Ee.value.holder={personVO:{...n.personVO,socialFlag:n.hasSocialInsurance}}),o&&o.length>0&&o.forEach(((e,a)=>{var t;Ee.value.insuredVOList&&Ee.value.insuredVOList.length>a?Ee.value.insuredVOList[a].personVO={...e.personVO,socialFlag:e.personVO.hasSocialInsurance}:((null==(t=Ee.value)?void 0:t.insuredVOList)||(Ee.value.insuredVOList=[]),Ee.value.insuredVOList.push({personVO:{...e.personVO,socialFlag:e.personVO.hasSocialInsurance}}))})),Ne.value=!0,console.log("投被保人的信息回传 ",Ee.value,e),i){console.log("处理第一被保人修改的dy变化");const e=await F({calcProductFactorList:[{planCode:ge.value.planCode,productCode:ge.value.productCode,riskEditVOList:[{insureProductRiskVO:null==(a=ge.value.insureProductRiskVOList)?void 0:a[0]}]}],...null==(t=null==o?void 0:o[0])?void 0:t.personVO});if(!Qe(e))return}$e()},Ye=async(e,a)=>{var t,n,o,i;if(a){const l=x.exports.cloneDeep(e);delete l.insurancePeriodValueList,delete l.liabilityVOList,delete l.paymentFrequencyList,delete l.paymentPeriodValueList;if(Ge.indexOf(a.key)>=0){const r={};switch(a.key){case"annuityDrawDate":r.changeType=3;break;case"coveragePeriod":r.changeType=2;break;case"chargePeriod":r.changeType=1}const s=null==(n=null==(t=Ee.value)?void 0:t.insuredVOList)?void 0:n[0].personVO,u=null==(i=null==(o=ge.value)?void 0:o.insureProductRiskVOList)?void 0:i.find((a=>a.riskCode===e.riskCode));if(!fe.isAutoChange){const a=await F({calcProductFactorList:[{planCode:ge.value.planCode,productCode:ge.value.productCode,riskEditVOList:[{insureProductRiskVO:u,insureRiskEditReqVO:{riskId:e.riskId,riskCode:e.riskCode,...l,...r}}]}],...s}),t=Qe(a);return t||(fe.isAutoChange=!0),t}fe.isAutoChange=!1}}return!0},ze=async(e,a)=>{Ke.value=e;await Ye(e,a)&&(Se.value.length>0&&(Se.value[0]=e),console.log("标准险种的信息回传",e),$e())},Ze=async(e,a)=>{if(Se.value=[Ke.value,...e],console.log("附加险列表数据回传",e),a){console.log("-change data = ",a);const t=e.find((e=>e.riskCode===a.riskCode));if(!(await Ye(t,a)))return}$e()},ea=(e={},a={},t={})=>{var n;const o={...t},{tenantOrderHolder:i,tenantOrderInsuredList:l}=K({holder:null==(n=fe.personalInfo.holder)?void 0:n.personVO,insuredList:(fe.personalInfo.insuredVOList||[]).map((e=>e.personVO))}),r={tenantId:oe,riskList:Se.value||[],riskPremium:a,productId:e.id};return o.extInfo.iseeBizNo=Be.value,o.productCode=e.productCode,o.commencementTime=o.insuranceStartDate,o.expiryDate=o.insuranceEndDate,o.premium=Je.value,o.orderAmount=Je.value,o.orderRealAmount=Je.value,o.tenantOrderHolder=i,o.tenantOrderInsuredList=l.map((a=>({...a,certType:a.certType||k.CERT,certNo:(a.certNo||"").toLocaleUpperCase(),planCode:ge.value.planCode,tenantOrderProductList:[{premium:Je.value,productCode:e.productCode,productName:e.productName,planCode:ge.value.planCode,tenantOrderRiskList:W(r)}]}))),o},aa=async()=>{var e;be.value?Promise.all([null==(e=Ie.value)?void 0:e.validate(!1),Ve.value]).then((()=>{Object.assign(te.value,{extInfo:{...te.value.extInfo,buttonCode:X.INFO_COLLECTION,pageCode:Y.INFO_COLLECTION}});const e=ea(Le.value,Me.value,te.value);B(e,((e,a)=>{a===y.JUMP_PAGE&&Q(e.nextPageCode,ae.query)}))})):u("请勾选投保人阅读并接受")},ta=e=>{Ie.value.validateHolder("mobile").then((()=>{Object.assign(te.value,{extInfo:{...te.value.extInfo,buttonCode:X.INFO_COLLECTION,pageCode:Y.INFO_COLLECTION}});const a=ea(Le.value,Me.value,te.value);B(a,((a,t)=>{t===y.JUMP_PAGE&&(null==e||e())}))})).catch((()=>{u("请录入投保人手机号后进行分享")}))},na=o({tenantOrderPayInfoList:[]}),oa=async()=>{J({productCode:ne,tenantId:oe,isTenant:!ve}).then((({data:e,code:a})=>{if("10000"===a){he.value=e,document.title=e.BASIC_INFO.title||"";let a={};const{wxShareConfig:t,showWXShare:n}=e.PRODUCT_LIST||{};if(n){const{title:e,desc:o,image:i}=t||{},[l=""]=i||[];a={title:e,desc:o,image:l,isShare:n}}else{const{title:t,desc:o,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};a={title:t,desc:o,image:i,isShare:n}}Object.assign(Oe.value,a)}})),T({orderNo:ue,tenantId:oe}).then((({code:e,data:a})=>{"10000"===e&&(na.tenantOrderPayInfoList=a.tenantOrderPayInfoList,Ae.value=a.orderAmount,Object.assign(te.value,a,{tenantOrderPayInfoList:a.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0}}),(()=>{const e={},{tenantOrderHolder:a,tenantOrderInsuredList:t}=te.value;e.holder={personVO:{...a,...a.extInfo}},e.insuredVOList=(t||[]).map((e=>({personVO:{...e,...e.extInfo,beneficiaryList:e.tenantOrderBeneficiaryList.map((e=>({personVO:e})))}}))),Object.assign(fe.personalInfo,e)})(),Fe.value=!0)})),M({productCode:ne}).then((({code:e,data:a})=>{var t,n,o,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:l}=a;ye.value=e||[];const{basicInfo:{questionnaireType:r},questions:s,questionnaireName:u}=(null==(t=null==l?void 0:l[0])?void 0:t.questionnaireDetailResponseVO)||{basicInfo:{}};r&&(Ce.value=2===r?[{attachmentName:u,attachmentUri:s,attachmentType:"question"}]:[{attachmentName:u,attachmentUri:null==(n=null==s?void 0:s[0])?void 0:n.content,attachmentType:$(String(null==(o=null==s?void 0:s[0])?void 0:o.textType),null==(i=null==s?void 0:s[0])?void 0:i.content)}])}})),await D({productCode:ne,isTenant:!ve}).then((({data:e,code:a})=>{var t,n;if("10000"===a){Le.value=e,ge.value=(null==(t=e.productPlanInsureVOList)?void 0:t[0])||{};const{payInfo:a}=R(null==(n=ge.value)?void 0:n.productFactor);fe.payInfo={...fe.payInfo,...a},We()}}))};return d((()=>{oa()})),c((()=>fe.personalInfo),((...e)=>{}),{deep:!0,immediate:!0}),(e,a)=>{const t=g,n=v("ProPageWrap");return p(),f(n,null,{default:m((()=>{var e,n,o,i,l,r,s,u,d,c,v,y,g,k,P,x,R;return[O("div",z,[(null==(e=V(ge))?void 0:e.productFactor)?(p(),f(V(j),{key:0,ref_key:"personalInfoRef",ref:Ie,modelValue:V(fe).personalInfo,"onUpdate:modelValue":a[0]||(a[0]=e=>V(fe).personalInfo=e),"product-factor":null==(n=V(ge))?void 0:n.productFactor,"multi-insured-num":null==(i=null==(o=V(ge))?void 0:o.multiInsuredConfigVO)?void 0:i.multiInsuredNum,"is-view":!1,onTrailChange:Xe},null,8,["modelValue","product-factor","multi-insured-num"])):I("",!0),h(N,{ref:"insureInfosRef","origin-data":V(He),"product-factor":V(ge).productFactor,"default-value":V(fe).defaultValue?null==(c=null==(d=null==(u=null==(s=null==(r=null==(l=V(fe).defaultValue)?void 0:l.insuredVOList)?void 0:r[0])?void 0:s.productPlanVOList)?void 0:u[V(fe).planIndex])?void 0:d.riskVOList)?void 0:c[0]:null,onTrialChange:ze},null,8,["origin-data","product-factor","default-value"]),V(ge).insureProductRiskVOList?(p(),f(q,{key:1,"data-source":V(ge),"show-main-risk":!1,"default-value":V(fe).defaultValue&&(null==(P=null==(k=null==(g=null==(y=null==(v=V(fe).defaultValue)?void 0:v.insuredVOList)?void 0:y[0])?void 0:g.productPlanVOList)?void 0:k[V(fe).planIndex])?void 0:P.riskVOList)||[],onTrialChange:Ze},null,8,["data-source","default-value"])):I("",!0),V(fe).payInfo.schema.length?(p(),f(V(w),{key:2,ref_key:"payInfoRef",ref:Ve,modelValue:V(na).tenantOrderPayInfoList,"onUpdate:modelValue":a[1]||(a[1]=e=>V(na).tenantOrderPayInfoList=e),schema:V(fe).payInfo.schema,"is-view":V(fe).isView},null,8,["modelValue","schema","is-view"])):I("",!0),h(t,null,{default:m((()=>{var e;return[(null==(e=V(Re))?void 0:e.length)?(p(),f(V(ee),{key:0,modelValue:V(be),"onUpdate:modelValue":a[2]||(a[2]=e=>L(be)?be.value=e:null),"attachment-list":V(Re),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[3]||(a[3]=e=>(e=>{je.value=e,Pe.value=!0})(e))},null,8,["modelValue","attachment-list"])):I("",!0)]})),_:1}),h(U,{"is-share":V(Oe).isShare&&!V(se),premium:V(Ae),"share-info":V(Oe),"loading-text":V(qe),"payment-frequency":null==(R=null==(x=V(Se))?void 0:x[0])?void 0:R.paymentFrequency,"tenant-product-detail":V(he),"handle-share":ta,onHandleClick:aa},{default:m((()=>[C("下一步")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail"]),V(Pe)?(p(),f(V(Z),{key:3,show:V(Pe),"onUpdate:show":a[4]||(a[4]=e=>L(Pe)?Pe.value=e:null),"content-list":V(xe)?V(Re):V(_e),"is-only-view":V(xe),"active-index":V(je),text:V(xe)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":V(xe)?0:V(we),onSubmit:Te,onOnCloseFilePreviewByMask:De},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):I("",!0)])]})),_:1})}}});export{Z as default};
