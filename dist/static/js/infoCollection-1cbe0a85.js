import{d as e,W as a,X as t,u as o,x as n,r as i,K as r,Y as s,ar as l,T as u,o as d,Q as c,b as v,c as p,e as f,w as m,f as O,g as h,h as I,i as V,a1 as y,j as L,P as C,a3 as k,C as g}from"./index-000b7445.js";import{d as P}from"./debounce-eed12388.js";import{P as j,l as w}from"./index-c4c2aaab.js";import{t as R}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-6fc2b1cf.js";/* empty css              */import"./bankCard-e3843884.js";import{_}from"./PayInfo-247479bc.js";import{u as x,p as b,q as F,c as T,i as D}from"./trial-220a9a50.js";import{I as E,P as S}from"./index-db455601.js";import{P as N,d as A}from"./utils-7af493b7.js";import{_ as U,f as q}from"./utils-ba9d6336.js";import{n as K}from"./nextStep-fe1e1e34.js";import{u as B}from"./useAttachment-43dfb18c.js";import{a as H,q as J}from"./product-ce7756ec.js";import{t as M,g as W}from"./utils-fc751943.js";import{u as $}from"./useOrder-a2aa63a9.js";import{p as G}from"./pageJump-a98634cf.js";import{B as Q,P as X}from"./constants-7afb7c3d.js";import"./infoCollection-048f5375.js";import"./pdfh5-008ca364.js";import"./isObjectLike-a9798079.js";import"./index-5e8e502f.js";import"./index-1178332c.js";import"./keysIn-3ff85984.js";import"./cloneDeep-91e31c47.js";import"./phoneVerify-14f3a6d4.js";import"./index-032964ce.js";import"./trial-8fc2f293.js";import"./core-5bdfb048.js";import"./constant-c3f28a3b.js";const Y={class:"long-info-collection"},z=e({__name:"infoCollection",setup(e){const z=a((()=>t((()=>import("./index-4e4ee88c.js")),["static/js/index-4e4ee88c.js","static/css/index-fa4edf2a.css","static/js/index-000b7445.js","static/css/index-3be92ec8.css","static/js/pdfh5-008ca364.js","static/js/index-032964ce.js","static/css/index-827a8544.css","static/js/utils-fc751943.js","static/js/infoCollection-048f5375.js","static/js/trial-8fc2f293.js"]))),Z=a((()=>t((()=>import("./index-2d2e9031.js")),["static/js/index-2d2e9031.js","static/css/index-3329e46f.css","static/js/index-000b7445.js","static/css/index-3be92ec8.css","static/js/pdfh5-008ca364.js"]))),ee=o(),ae=$(),{productCode:te="",tenantId:oe,agentCode:ne="",agencyCode:ie,saleChannelId:re,isShare:se,orderNo:le,extraInfo:ue,insurerCode:de,preview:ce}=ee.query;let ve={};try{ve=JSON.parse(decodeURIComponent(ue))}catch(ta){}const pe=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},defaultValue:{},isAutoChange:!1}),fe=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,me=i({imgUrl:"",desc:"",title:"",link:fe}),Oe=i(),he=i(),Ie=i({}),Ve=i({}),ye=i([]),Le=i(),Ce=i({}),ke=i(!1),ge=i(!1),Pe=i(0),je=i(!0),{fileList:we,mustReadFileCount:Re,popupFileList:_e}=B(Ce,Le),xe=i(!1),be=i(!1),Fe=()=>{ge.value=!1,je.value=!0,ye.value.length<1||(ke.value=!0)},Te=()=>{ke.value=!1,ge.value=!1,je.value=!0},De=i({}),Ee=i(!1),Se=i([{}]),Ne=i(""),Ae=i(0),Ue=i(!1),qe=i(),Ke=i();i();const Be=r((()=>{var e,a;const{insureProductRiskVOList:t}=(null==(a=null==(e=Ve.value)?void 0:e.productPlanInsureVOList)?void 0:a[0])||{};return(t||[]).find((e=>e.mainRiskFlag===s.YES))})),He=i(0),Je=i({}),Me=P((()=>{var e;Ee.value&&(De.value.productCode=te,De.value.tenantId=oe,Se.value=Se.value.map((e=>(e=>{var a,t,o,n,i;const r=null==(t=null==(a=Ce.value)?void 0:a.insureProductRiskVOList)?void 0:t.find((a=>e.riskId===a.riskId));if(r&&1!==r.mainRiskFlag){const a=null==(n=(null==(o=Ce.value)?void 0:o.productRiskRelationVOList)||[])?void 0:n.find((e=>e.collocationRiskId===r.riskId));if(a){const t=null==(i=Se.value)?void 0:i.find((e=>e.riskId===a.riskId));S.forEach((a=>{a.ruleKey&&r.productRiskInsureLimitVO&&t&&(1===r.productRiskInsureLimitVO[a.ruleKey]&&(e[a.valueKey]=t[a.valueKey]),3===r.productRiskInsureLimitVO[a.ruleKey]&&(e[a.valueKey]=A(r,t[a.valueKey],De.value)))}))}}return e})(e))),De.value.insuredVOList[0].productPlanVOList=[{insurerCode:de,planCode:null==(e=Ce.value)?void 0:e.planCode,riskVOList:Se.value}],console.log(">>>数据构建<<<",De.value),Ne.value="试算中...",Ae.value=0,Ue.value=!0,x(De.value).then((({code:e})=>{e===l&&b(De.value).then((e=>{var a,t,o;if(e.data&&e.code===l){(null==(a=null==e?void 0:e.data)?void 0:a.errorInfo)&&u(`${null==(t=null==e?void 0:e.data)?void 0:t.errorInfo}`),He.value=null==(o=e.data)?void 0:o.premium,Ne.value="",Ae.value=e.data.premium;const n={};e.data.riskPremiumDetailVOList&&e.data.riskPremiumDetailVOList.length&&e.data.riskPremiumDetailVOList.forEach((e=>{n[e.riskCode]={premium:e.premium,amount:e.amount}})),Je.value=n}})).finally((()=>{Ue.value=!1}))})))}),300),We=["annuityDrawDate","coveragePeriod","chargePeriod"],$e=e=>{var a,t,o,n,i,r;if(null==(t=null==(a=null==e?void 0:e.data)?void 0:a[0])?void 0:t.productRiskDyInsureFactorVOList){const a=[];if(null==(o=Ce.value)||o.insureProductRiskVOList.forEach((t=>{var o,n;const i=null==(n=null==(o=null==e?void 0:e.data)?void 0:o[0])?void 0:n.productRiskDyInsureFactorVOList.find((e=>e.riskCode===t.riskCode));if(i){t.productRiskInsureLimitVO={...t.productRiskInsureLimitVO,...i};const e=Se.value.find((e=>e.riskCode===t.riskCode));let o=!1;S.forEach((a=>{if(We.indexOf(a.valueKey)>=0){const n=t.productRiskInsureLimitVO[a.configKey];if(n&&e){const t=n.find((t=>t.code===e[a.valueKey]));if(t&&2===t.useFlag){const t=n.find((e=>1===e.defaultFlag));e[a.valueKey]=t.code,o=!0}}}})),o&&a.push({...e,...i,riskCode:t.riskCode})}})),a.length>0&&(null==(r=null==(i=null==(n=pe.defaultValue)?void 0:n.insuredVOList)?void 0:i[0])?void 0:r.productPlanVOList))return a.forEach((e=>{var a,t,o;pe.defaultValue.insuredVOList[0].productPlanVOList=null==(o=null==(t=null==(a=pe.defaultValue)?void 0:a.insuredVOList)?void 0:t[0])?void 0:o.productPlanVOList.map((a=>(a.riskCode===e.riskCode&&(a=e),a)))})),!1}return!0},Ge=async e=>{var a;const{holder:t,insuredVOList:o,isFirstInsuredChange:n}=e;if(t&&(De.value.holder={personVO:{...t,socialFlag:t.hasSocialInsurance}}),o&&o.length>0&&o.forEach(((e,a)=>{De.value.insuredVOList&&De.value.insuredVOList.length>a?De.value.insuredVOList[a].personVO={...e.personVO,socialFlag:e.personVO.hasSocialInsurance}:De.value.insuredVOList=[{personVO:{...e.personVO,socialFlag:e.personVO.hasSocialInsurance}}]})),Ee.value=!0,console.log("投被保人的信息回传 ",De.value,e),n){console.log("处理第一被保人修改的dy变化");const e=await F({calcProductFactorList:[{planCode:Ce.value.planCode,productCode:Ce.value.productCode,riskEditVOList:[{insureProductRiskVO:null==(a=Ce.value.insureProductRiskVOList)?void 0:a[0]}]}],...o[0].personVO});if(!$e(e))return}Me()},Qe=async(e,a)=>{var t,o,n,i;if(a){const r=w.exports.cloneDeep(e);delete r.insurancePeriodValueList,delete r.liabilityVOList,delete r.paymentFrequencyList,delete r.paymentPeriodValueList;if(We.indexOf(a.key)>=0){const s={};switch(a.key){case"annuityDrawDate":s.changeType=3;break;case"coveragePeriod":s.changeType=2;break;case"chargePeriod":s.changeType=1}const l=null==(o=null==(t=De.value)?void 0:t.insuredVOList)?void 0:o[0].personVO,u=null==(i=null==(n=Ce.value)?void 0:n.insureProductRiskVOList)?void 0:i.find((a=>a.riskCode===e.riskCode));if(!pe.isAutoChange){const a=await F({calcProductFactorList:[{planCode:Ce.value.planCode,productCode:Ce.value.productCode,riskEditVOList:[{insureProductRiskVO:u,insureRiskEditReqVO:{riskId:e.riskId,riskCode:e.riskCode,...r,...s}}]}],...l}),t=$e(a);return t||(pe.isAutoChange=!0),t}pe.isAutoChange=!1}}return!0},Xe=async(e,a)=>{qe.value=e;await Qe(e,a)&&(Se.value.length>0&&(Se.value[0]=e),Se.value.length&&(Se.value[0]=e),console.log("标准险种的信息回传",e),Me())},Ye=async(e,a)=>{if(Se.value=[qe.value,...e],console.log("附加险列表数据回传",e),a){console.log("-change data = ",a);const t=e.find((e=>e.riskCode===a.riskCode));if(!(await Qe(t,a)))return}Me()},ze=()=>new Promise(((e,a)=>{var t,o;if(null==(o=null==(t=pe.personalInfo)?void 0:t.personVO)?void 0:o.mobile)return u("请录入投保人手机号后进行分享"),void a();K(ae.value,((t,o)=>{o===C.JUMP_PAGE?e(!0):a()}))})),Ze=async()=>{var e;xe.value?Promise.all([null==(e=he.value)?void 0:e.validate(!1),Oe.value]).then((()=>{Object.assign(ae.value,{extInfo:{...ae.value.extInfo,buttonCode:Q.INFO_COLLECTION,pageCode:X.INFO_COLLECTION}});const e=((e={},a={},t={})=>{var o;const n={...t},{tenantOrderHolder:i,tenantOrderInsuredList:r}=q({holder:null==(o=De.value.holder)?void 0:o.personVO.personVO,insuredList:(De.value.insuredVOList||[]).map((e=>e.personVO))}),s={tenantId:oe,riskList:Se.value||[],riskPremium:a,productId:e.id};return n.extInfo.iseeBizNo=Ke.value,n.productCode=e.productCode,n.commencementTime=n.insuranceStartDate,n.expiryDate=n.insuranceEndDate,n.premium=He.value,n.orderAmount=He.value,n.orderRealAmount=He.value,n.tenantOrderHolder=i,n.tenantOrderInsuredList=r.map((a=>({...a,certType:a.certType||g.CERT,certNo:(a.certNo||"").toLocaleUpperCase(),planCode:Ce.value.planCode,tenantOrderProductList:[{premium:He.value,productCode:e.productCode,productName:e.productName,planCode:Ce.value.planCode,tenantOrderRiskList:M(s)}]}))),n})(Ve.value,Je.value,ae.value);K(e,((e,a)=>{a===C.JUMP_PAGE&&G(e.nextPageCode,ee.query)}))})):u("请勾选投保人阅读并接受")},ea=n({tenantOrderPayInfoList:[]}),aa=async()=>{H({productCode:te,tenantId:oe,isTenant:!ce}).then((({data:e,code:a})=>{if("10000"===a){Ie.value=e,document.title=e.BASIC_INFO.title||"";let a={};const{wxShareConfig:t,showWXShare:o}=e.PRODUCT_LIST||{};if(o){const{title:e,desc:n,image:i}=t||{},[r=""]=i||[];a={title:e,desc:n,image:r,isShare:o}}else{const{title:t,desc:n,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};a={title:t,desc:n,image:i,isShare:o}}Object.assign(me.value,a)}})),T({orderNo:le,tenantId:oe}).then((({code:e,data:a})=>{"10000"===e&&(ea.tenantOrderPayInfoList=a.tenantOrderPayInfoList,Object.assign(ae.value,a,{tenantOrderPayInfoList:a.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0}}),(()=>{const e={},{tenantOrderHolder:a,tenantOrderInsuredList:t}=ae.value;e.holder={personVO:{...a,...a.extInfo}},e.insuredVOList=(t||[]).map((e=>({personVO:{...e,...e.extInfo,beneficiaryList:e.tenantOrderBeneficiaryList.map((e=>({personVO:e})))}}))),Object.assign(pe.personalInfo,e)})(),be.value=!0)})),J({productCode:te}).then((({code:e,data:a})=>{var t,o,n,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:r}=a;Le.value=e||[];const{basicInfo:{questionnaireType:s},questions:l,questionnaireName:u}=(null==(t=null==r?void 0:r[0])?void 0:t.questionnaireDetailResponseVO)||{basicInfo:{}};s&&(ye.value=2===s?[{attachmentName:u,attachmentUri:l,attachmentType:"question"}]:[{attachmentName:u,attachmentUri:null==(o=null==l?void 0:l[0])?void 0:o.content,attachmentType:W(String(null==(n=null==l?void 0:l[0])?void 0:n.textType),null==(i=null==l?void 0:l[0])?void 0:i.content)}])}})),await D({productCode:te,isTenant:!ce}).then((({data:e,code:a})=>{var t,o;if("10000"===a){Ve.value=e,Ce.value=(null==(t=e.productPlanInsureVOList)?void 0:t[0])||{};const{payInfo:a}=R({1:[],2:[],3:[],4:[],5:[],...null==(o=Ce.value)?void 0:o.productFactor});pe.payInfo={...pe.payInfo,...a}}}))};return d((()=>{aa()})),c((()=>pe.personalInfo),((...e)=>{}),{deep:!0,immediate:!0}),(e,a)=>{const t=k,o=v("ProPageWrap");return p(),f(o,null,{default:m((()=>{var e,o,n,i,r;return[O("div",Y,[(null==(e=h(Ce))?void 0:e.productFactor)?(p(),f(h(j),{key:0,ref_key:"personalInfoRef",ref:he,modelValue:h(pe).personalInfo,"onUpdate:modelValue":a[0]||(a[0]=e=>h(pe).personalInfo=e),"product-factor":null==(o=h(Ce))?void 0:o.productFactor,"is-view":!1,onTrailChange:Ge},null,8,["modelValue","product-factor"])):I("",!0),V(E,{ref:"insureInfosRef","origin-data":h(Be),"product-factor":h(Ce).productFactor,onTrialChange:Xe},null,8,["origin-data","product-factor"]),V(N,{"data-source":h(Ce),"show-main-risk":!1,"default-value":h(pe).defaultValue?null==(r=null==(i=null==(n=h(pe).defaultValue)?void 0:n.insuredVOList)?void 0:i[0])?void 0:r.productPlanVOList:[],onTrialChange:Ye},null,8,["data-source","default-value"]),h(pe).payInfo.schema.length?(p(),f(h(_),{key:1,ref_key:"payInfoRef",ref:Oe,modelValue:h(ea).tenantOrderPayInfoList,"onUpdate:modelValue":a[1]||(a[1]=e=>h(ea).tenantOrderPayInfoList=e),schema:h(pe).payInfo.schema,"is-view":h(pe).isView},null,8,["modelValue","schema","is-view"])):I("",!0),V(t,null,{default:m((()=>{var e;return[(null==(e=h(we))?void 0:e.length)?(p(),f(h(Z),{key:0,modelValue:h(xe),"onUpdate:modelValue":a[2]||(a[2]=e=>y(xe)?xe.value=e:null),"attachment-list":h(we),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[3]||(a[3]=e=>(e=>{Pe.value=e,ge.value=!0})(e))},null,8,["modelValue","attachment-list"])):I("",!0)]})),_:1}),V(U,{"is-share":!1,premium:h(Ae),"share-info":h(me),"loading-text":h(Ne),"payment-frequency":"1","tenant-product-detail":h(Ie),"handle-share":ze,onHandleClick:Ze},{default:m((()=>[L("下一步")])),_:1},8,["premium","share-info","loading-text","tenant-product-detail"]),h(ge)?(p(),f(h(z),{key:2,show:h(ge),"onUpdate:show":a[4]||(a[4]=e=>y(ge)?ge.value=e:null),"content-list":h(je)?h(we):h(_e),"is-only-view":h(je),"active-index":h(Pe),text:h(je)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":h(je)?0:h(Re),onSubmit:Fe,onOnCloseFilePreviewByMask:Te},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):I("",!0)])]})),_:1})}}});export{z as default};
