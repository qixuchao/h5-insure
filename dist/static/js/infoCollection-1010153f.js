import{d as e,aE as a,aF as t,u as o,t as n,r,H as i,ae as l,aG as s,T as u,o as d,ag as c,a3 as p,b as m,X as v,w as f,f as I,i as O,Y as h,e as y,ac as V,g as L,P as g,aH as C,C as P}from"./index-eff7527d.js";import{d as j}from"./debounce-eed12388.js";import{t as k}from"./SchemaRenderField.vue_vue_type_style_index_0_scoped_true_lang-59fbf27a.js";/* empty css              */import"./bankCard-02614606.js";import{_}from"./PayInfo-ae37bba8.js";import{u as b,p as w,g as x,i as R}from"./trial-b8818c4a.js";import{P as T,I as F,a as N}from"./index-07f672f9.js";import{P as E,d as S}from"./utils-0a74392c.js";import{_ as D}from"./TrialButton-9b13f086.js";import{n as U}from"./nextStep-7b753fa7.js";import{u as q}from"./useAttachment-638b716c.js";import{a as A,q as B}from"./product-7d21937c.js";import{t as H,g as K}from"./utils-17cd6f9d.js";import{u as J}from"./useOrder-0c925184.js";import{p as M}from"./pageJump-77108a22.js";import{B as G,P as Y}from"./constants-7afb7c3d.js";import"./infoCollection-dec1d9ca.js";import{f as z}from"./utils-e634d770.js";import"./pdfh5-008ca364.js";import"./isObjectLike-a9798079.js";import"./phoneVerify-dd6b7e53.js";import"./keysIn-3ff85984.js";import"./index-f94265a5.js";import"./index-0dacb5d5.js";import"./cloneDeep-91e31c47.js";import"./index-9a7ecf2c.js";import"./core-0fc6316c.js";import"./constant-c3f28a3b.js";import"./trial-82ecfdbb.js";const Q={class:"long-info-collection"},W=e({__name:"infoCollection",setup(e){const W=a((()=>t((()=>import("./index-26cdf204.js")),["static/js/index-26cdf204.js","static/css/index-fa4edf2a.css","static/js/index-eff7527d.js","static/css/index-adf085ad.css","static/js/pdfh5-008ca364.js","static/js/index-9a7ecf2c.js","static/css/index-827a8544.css","static/js/utils-17cd6f9d.js","static/js/infoCollection-dec1d9ca.js","static/js/trial-82ecfdbb.js"]))),X=a((()=>t((()=>import("./index-3bcdcc01.js")),["static/js/index-3bcdcc01.js","static/css/index-3329e46f.css","static/js/index-eff7527d.js","static/css/index-adf085ad.css","static/js/pdfh5-008ca364.js"]))),$=o(),Z=J(),{productCode:ee="",tenantId:ae,agentCode:te="",agencyCode:oe,saleChannelId:ne,orderNo:re,extraInfo:ie,insurerCode:le,preview:se}=$.query;let ue={};try{ue=JSON.parse(decodeURIComponent(ie))}catch(ze){}const de=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]}}),ce=r({imgUrl:"",desc:"",title:"",link:window.location.href}),pe=r(),me=r(),ve=r({}),fe=r({}),Ie=r([]),Oe=r(),he=r({}),ye=r(!1),Ve=r(!1),Le=r(0),ge=r(!0),{fileList:Ce,mustReadFileCount:Pe,popupFileList:je}=q(he,Oe),ke=r(!1),_e=r(!1),be=()=>{Ve.value=!1,ge.value=!0,Ie.value.length<1||(ye.value=!0)},we=()=>{ye.value=!1,Ve.value=!1,ge.value=!0},xe=r({}),Re=r(!1),Te=r([{}]),Fe=r(""),Ne=r(0),Ee=r(!1),Se=r(),De=r();r();const Ue=i((()=>{var e,a;const{insureProductRiskVOList:t}=(null==(a=null==(e=fe.value)?void 0:e.productPlanInsureVOList)?void 0:a[0])||{};return(t||[]).find((e=>e.mainRiskFlag===l.YES))})),qe=r(0),Ae=r({}),Be=j((()=>{var e;Re.value&&(xe.value.productCode=ee,xe.value.tenantId=ae,Te.value=Te.value.map((e=>(e=>{var a,t,o,n,r;const i=null==(t=null==(a=he.value)?void 0:a.insureProductRiskVOList)?void 0:t.find((a=>e.riskId===a.riskId));if(i&&1!==i.mainRiskFlag){const a=null==(n=(null==(o=he.value)?void 0:o.productRiskRelationVOList)||[])?void 0:n.find((e=>e.collocationRiskId===i.riskId));if(a){const t=null==(r=Te.value)?void 0:r.find((e=>e.riskId===a.riskId));N.forEach((a=>{a.ruleKey&&i.productRiskInsureLimitVO&&t&&(1===i.productRiskInsureLimitVO[a.ruleKey]&&(e[a.valueKey]=t[a.valueKey]),3===i.productRiskInsureLimitVO[a.ruleKey]&&(e[a.valueKey]=S(i,t[a.valueKey],xe.value)))}))}}return e})(e))),xe.value.insuredVOList[0].productPlanVOList=[{insurerCode:le,planCode:null==(e=he.value)?void 0:e.planCode,riskVOList:Te.value}],console.log(">>>数据构建<<<",xe.value),Fe.value="试算中...",Ne.value=0,Ee.value=!0,b(xe.value).then((({code:e})=>{e===s&&w(xe.value).then((e=>{var a,t,o;if(e.data&&e.code===s){(null==(a=null==e?void 0:e.data)?void 0:a.errorInfo)&&u(`${null==(t=null==e?void 0:e.data)?void 0:t.errorInfo}`),qe.value=null==(o=e.data)?void 0:o.premium,Fe.value="",Ne.value=e.data.premium;const n={};e.data.riskPremiumDetailVOList&&e.data.riskPremiumDetailVOList.length&&e.data.riskPremiumDetailVOList.forEach((e=>{n[e.riskCode]={premium:e.premium,amount:e.amount}})),Ae.value=n}})).finally((()=>{Ee.value=!1}))})))}),300),He=e=>{const{holder:a,insuredVOList:t}=e;a&&(xe.value.holder={personVO:{...a,socialFlag:a.hasSocialInsurance}}),t&&t.length>0&&t.forEach(((e,a)=>{xe.value.insuredVOList&&xe.value.insuredVOList.length>a?xe.value.insuredVOList[a].personVO={...e.personVO,socialFlag:e.personVO.hasSocialInsurance}:xe.value.insuredVOList=[{personVO:{...e.personVO,socialFlag:e.personVO.hasSocialInsurance}}]})),Re.value=!0,console.log("投被保人的信息回传 ",xe.value,e),Be()},Ke=e=>{Se.value=e,Te.value.length&&(Te.value[0]=e),console.log("标准险种的信息回传",e),Be()},Je=e=>{Te.value=[Se.value,...e],console.log("附加险列表数据回传",e),Be()},Me=async()=>{var e;ke.value?Promise.all([null==(e=me.value)?void 0:e.validate(!1),pe.value]).then((()=>{Object.assign(Z.value,{extInfo:{...Z.value.extInfo,buttonCode:G.INFO_COLLECTION,pageCode:Y.INFO_COLLECTION}});const e=((e={},a={},t={})=>{var o;const n={...t},{tenantOrderHolder:r,tenantOrderInsuredList:i}=z({holder:null==(o=xe.value.holder)?void 0:o.personVO.personVO,insuredList:(xe.value.insuredVOList||[]).map((e=>e.personVO))});console.log("tenantOrderHolder",r),console.log("tenantOrderInsuredList",i);const l={tenantId:ae,riskList:Te.value||[],riskPremium:a,productId:e.id};return n.extInfo.iseeBizNo=De.value,n.productCode=e.productCode,n.commencementTime=n.insuranceStartDate,n.expiryDate=n.insuranceEndDate,n.premium=qe.value,n.orderAmount=qe.value,n.orderRealAmount=qe.value,n.tenantOrderHolder=r,n.tenantOrderInsuredList=i.map((a=>({...a,certType:a.certType||P.CERT,certNo:(a.certNo||"").toLocaleUpperCase(),planCode:he.value.planCode,tenantOrderProductList:[{premium:qe.value,productCode:e.productCode,productName:e.productName,planCode:he.value.planCode,tenantOrderRiskList:H(l)}]}))),n})(fe.value,Ae.value,Z.value);U(e,((e,a)=>{a===g.JUMP_PAGE&&M(e.nextPageCode,$.query)}))})):u("请勾选投保人阅读并接受")},Ge=n({tenantOrderPayInfoList:[]}),Ye=async()=>{A({productCode:ee,tenantId:ae,isTenant:!se}).then((({data:e,code:a})=>{if("10000"===a){ve.value=e,document.title=e.BASIC_INFO.title||"";const{title:a,desc:o,image:n}=(null==e?void 0:e.PRODUCT_LIST.wxShareConfig)||{},[r=""]=n||[];t={title:a,desc:o,image:r},ce.value={desc:t.desc||"你好，这里是描述",imgUrl:t.image,title:t.title,link:window.location.href},console.log("shareInfo",ce.value)}var t})),x({orderNo:re,tenantId:ae}).then((({code:e,data:a})=>{"10000"===e&&(Ge.tenantOrderPayInfoList=a.tenantOrderPayInfoList,Object.assign(Z.value,a,{tenantOrderPayInfoList:a.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0}}),(()=>{const e={},{tenantOrderHolder:a,tenantOrderInsuredList:t}=Z.value;e.holder={personVO:{...a,...a.extInfo}},e.insuredVOList=(t||[]).map((e=>({personVO:{...e,...e.extInfo,beneficiaryList:e.tenantOrderBeneficiaryList.map((e=>({personVO:e})))}}))),Object.assign(de.personalInfo,e)})(),_e.value=!0)})),B({productCode:ee}).then((({code:e,data:a})=>{var t,o,n,r;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:i}=a;Oe.value=e||[];const{basicInfo:{questionnaireType:l},questions:s,questionnaireName:u}=(null==(t=null==i?void 0:i[0])?void 0:t.questionnaireDetailResponseVO)||{basicInfo:{}};l&&(Ie.value=2===l?[{attachmentName:u,attachmentUri:s,attachmentType:"question"}]:[{attachmentName:u,attachmentUri:null==(o=null==s?void 0:s[0])?void 0:o.content,attachmentType:K(String(null==(n=null==s?void 0:s[0])?void 0:n.textType),null==(r=null==s?void 0:s[0])?void 0:r.content)}])}})),await R({productCode:ee,isTenant:!se}).then((({data:e,code:a})=>{var t,o;if("10000"===a){fe.value=e,he.value=(null==(t=e.productPlanInsureVOList)?void 0:t[0])||{};const{payInfo:a}=k((null==(o=he.value)?void 0:o.productFactor)||{});de.payInfo={...de.payInfo,...a}}}))};return d((()=>{Ye()})),c((()=>de.personalInfo),((...e)=>{}),{deep:!0,immediate:!0}),(e,a)=>{const t=C,o=p("ProPageWrap");return m(),v(o,null,{default:f((()=>{var e,o,n;return[I("div",Q,[(null==(e=O(he))?void 0:e.productFactor)?(m(),v(O(T),{key:0,ref_key:"personalInfoRef",ref:me,modelValue:O(de).personalInfo,"onUpdate:modelValue":a[0]||(a[0]=e=>O(de).personalInfo=e),"product-factor":null==(o=O(he))?void 0:o.productFactor,"is-view":!1,onTrailChange:He},null,8,["modelValue","product-factor"])):h("",!0),y(F,{ref:"insureInfosRef","origin-data":O(Ue),"product-factor":O(he).productFactor,onTrialChange:Ke},null,8,["origin-data","product-factor"]),y(E,{"data-source":O(he),"show-main-risk":!1,"default-value":O(de).defaultValue?null==(n=O(de).defaultValue)?void 0:n.insuredVOList[0].productPlanVOList:[],onTrialChange:Je},null,8,["data-source","default-value"]),O(de).payInfo.schema.length?(m(),v(O(_),{key:1,ref_key:"payInfoRef",ref:pe,modelValue:O(Ge).tenantOrderPayInfoList,"onUpdate:modelValue":a[1]||(a[1]=e=>O(Ge).tenantOrderPayInfoList=e),schema:O(de).payInfo.schema,"is-view":O(de).isView},null,8,["modelValue","schema","is-view"])):h("",!0),y(t,null,{default:f((()=>{var e;return[(null==(e=O(Ce))?void 0:e.length)?(m(),v(O(X),{key:0,modelValue:O(ke),"onUpdate:modelValue":a[2]||(a[2]=e=>V(ke)?ke.value=e:null),"attachment-list":O(Ce),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[3]||(a[3]=e=>(e=>{Le.value=e,Ve.value=!0})(e))},null,8,["modelValue","attachment-list"])):h("",!0)]})),_:1}),y(D,{"is-share":"",premium:O(Ne),"share-info":O(ce),"loading-text":O(Fe),"payment-frequency":"1","tenant-product-detail":O(ve),onClick:Me},{default:f((()=>[L("下一步")])),_:1},8,["premium","share-info","loading-text","tenant-product-detail"]),O(Ve)?(m(),v(O(W),{key:2,show:O(Ve),"onUpdate:show":a[4]||(a[4]=e=>V(Ve)?Ve.value=e:null),"content-list":O(ge)?O(Ce):O(je),"is-only-view":O(ge),"active-index":O(Le),text:O(ge)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":O(ge)?0:O(Pe),onSubmit:be,onOnCloseFilePreviewByMask:we},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):h("",!0)])]})),_:1})}}});export{W as default};
