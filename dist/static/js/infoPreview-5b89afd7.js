import{G as e,d as t,c as n,A as a,i as o,w as i,f as r,U as s,V as l,E as d,g as c,e as u,W as p,bi as f,X as m,Y as I,u as v,z as y,r as h,L as O,Z as P,o as _,b,h as j,ay as g,az as C,a9 as L,bv as V,k as w,j as x,P as k,n as E,p as S,a3 as N,ae as R}from"./index-f2bc6fad.js";import{t as T}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-53825663.js";/* empty css              */import"./bankCard-badcf26e.js";import{_ as A}from"./PayInfo-81785a9a.js";import{g as F,i as U}from"./trial-24bb7b4d.js";import{n as q}from"./nextStep-a23db296.js";import{u as D}from"./useAttachment-9b037155.js";import{a as $,q as W}from"./product-3eb01760.js";import{g as B}from"./utils-126f0b8b.js";import{u as Y}from"./useOrder-a5126bbe.js";import{P as z,B as G}from"./constants-7afb7c3d.js";import{P as J}from"./index-5167298f.js";import"./infoCollection-ec38f195.js";import{P as M}from"./index-1ab918df.js";import{I as H,P as X,d as Q}from"./trial-e446ca84.js";import"./pdfh5-008ca364.js";import"./phoneVerify-932d980d.js";import"./_initCloneObject-0663309f.js";import"./isObjectLike-a9798079.js";import"./index-3bf8d5ff.js";import"./debounce-eed12388.js";import"./index-a518c9c3.js";import"./core-78505ded.js";import"./constant-8927d485.js";import"./cloneDeep-1de8e9b0.js";const Z={class:"com-insured-part-wrapper"},K={class:"content-wrapper"};var ee=e(t({__name:"InsureInfo",props:{productData:{default:()=>({})}},setup(e){const t=(e,t)=>-1!==t.indexOf("$")?t.replace("$",`${e}`):`${e||""}${t}`;return(m,I)=>{const v=p,y=f;return n(),a("div",Z,[o(y,{title:"保障信息"},{default:i((()=>{var i;return[r("div",K,[(n(!0),a(s,null,l((null==(i=e.productData)?void 0:i.tenantOrderRiskList)||[],((e,i)=>(n(),a("div",{key:i,class:"risk-item"},[r("p",null,d(e.riskName),1),o(v,{title:"保障期间",content:t(e.insurancePeriodValue,c(H)[e.insurancePeriodType])},null,8,["content"]),o(v,{title:"交费期间",content:t(e.paymentPeriod,c(X)[e.paymentPeriodType])},null,8,["content"]),o(v,{title:"交费方式",content:c(Q)[e.paymentFrequency]},null,8,["content"]),(n(!0),a(s,null,l(e.liabilityDetails,((e,t)=>(n(),u(v,{key:t,title:e.liabilityName,content:"投保"},null,8,["title"])))),128)),o(v,{title:"保障金额",content:(e.initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),o(v,{title:"首期保费",class:"price",content:(e.initialPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])))),128))])]})),_:1})])}}}),[["__scopeId","data-v-4bdbacf9"]]);const te={class:"long-info-preview"},ne={class:"footer-btn"},ae=r("span",null,"分享",-1),oe=t({__name:"infoPreview",setup(e){m((()=>I((()=>import("./index-99bfeca0.js")),["static/js/index-99bfeca0.js","static/css/index-fa4edf2a.css","static/js/index-f2bc6fad.js","static/css/index-56d1ba7e.css","static/js/pdfh5-008ca364.js","static/js/index-1ab918df.js","static/css/index-827a8544.css","static/js/utils-126f0b8b.js","static/js/infoCollection-ec38f195.js","static/js/trial-e446ca84.js"]))),m((()=>I((()=>import("./index-1df0ca11.js")),["static/js/index-1df0ca11.js","static/css/index-3329e46f.css","static/js/index-f2bc6fad.js","static/css/index-56d1ba7e.css","static/js/pdfh5-008ca364.js"])));const t=v(),a=Y(),{productCode:s="",tenantId:l,agentCode:d="",agencyCode:p,saleChannelId:f,isShare:H,orderNo:X,extraInfo:Q,insurerCode:Z,preview:K}=t.query;let oe={};try{oe=JSON.parse(decodeURIComponent(Q))}catch(_e){}const ie=y({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]}}),re=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,se=h({imgUrl:"",desc:"",title:"",link:re}),le=h(),de=h(),ce=h({}),ue=h({}),pe=h([]),fe=h(),me=h({});h(!1),h(!1),h(0),h(!0),D(me,fe),h(!1);const Ie=h(!1);h(),O((()=>{var e,t;const{insureProductRiskVOList:n}=(null==(t=null==(e=ue.value)?void 0:e.productPlanInsureVOList)?void 0:t[0])||{};return(n||[]).find((e=>e.mainRiskFlag===P.YES))}));const ve=h(),ye=()=>{q(a.value,((e,t)=>{t===k.JUMP_PAGE&&ve.value.handleShare()}))},he=async()=>{K?E(z.INFO_PREVIEW,t.query):(Object.assign(a.value,{extInfo:{...a.value.extInfo,buttonCode:G.INFO_PREVIEW,pageCode:z.INFO_PREVIEW}}),q(a.value,((e,n)=>{n===k.JUMP_PAGE&&S(e.nextPageCode,t.query)})))},Oe=y({tenantOrderPayInfoList:[]}),Pe=async()=>{$({productCode:s,tenantId:l}).then((({data:e,code:t})=>{if("10000"===t){ce.value=e,document.title=e.BASIC_INFO.title||"";let t={};const{wxShareConfig:n,showWXShare:a}=(null==e?void 0:e.PRODUCT_LIST)||{};if(n){const{title:e,desc:o,image:i}=n||{},[r=""]=i||[];t={title:e,desc:o,image:r,isShare:a}}else{const{title:n,desc:a,image:o}=(null==e?void 0:e.PRODUCT_LIST)||{};t={title:n,desc:a,image:o,isShare:!1}}N(e.BASIC_INFO.themeType),Object.assign(se.value,t)}})),X&&F({orderNo:X,tenantId:l}).then((({code:e,data:t})=>{"10000"===e&&(Oe.tenantOrderPayInfoList=t.tenantOrderPayInfoList,Object.assign(a.value,t,{tenantOrderPayInfoList:t.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0}}),(()=>{const e={},{tenantOrderHolder:t,tenantOrderInsuredList:n}=a.value;e.holder={personVO:{...t,...t.extInfo}},e.insuredVOList=(n||[]).map((e=>({personVO:{...e,...e.extInfo,beneficiaryList:e.tenantOrderBeneficiaryList.map((e=>({personVO:e})))}}))),ie.personalInfo=e})(),Ie.value=!0)})),W({productCode:s}).then((({code:e,data:t})=>{var n,a,o,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:r}=t;fe.value=e||[];const{basicInfo:{questionnaireType:s},questions:l,questionnaireName:d}=(null==(n=null==r?void 0:r[0])?void 0:n.questionnaireDetailResponseVO)||{basicInfo:{}};s&&(pe.value=2===s?[{attachmentName:d,attachmentUri:l,attachmentType:"question"}]:[{attachmentName:d,attachmentUri:null==(a=null==l?void 0:l[0])?void 0:a.content,attachmentType:B(String(null==(o=null==l?void 0:l[0])?void 0:o.textType),null==(i=null==l?void 0:l[0])?void 0:i.content)}])}})),await U({productCode:s,isTenant:!K}).then((({data:e,code:t})=>{var n,a;if("10000"===t){ue.value=e,me.value=(null==(n=e.productPlanInsureVOList)?void 0:n[0])||{};const{payInfo:t}=T(null==(a=me.value)?void 0:a.productFactor);ie.payInfo={...ie.payInfo,...t}}}))};return _((()=>{Pe()})),(e,t)=>{const s=R,l=b("ProPageWrap");return n(),u(l,null,{default:i((()=>{var l,d,p,f,m,I;return[r("div",te,[o(ee,{"product-data":null==(p=null==(d=null==(l=c(a).tenantOrderInsuredList)?void 0:l[0])?void 0:d.tenantOrderProductList)?void 0:p[0]},null,8,["product-data"]),(null==(f=c(me))?void 0:f.productFactor)?(n(),u(c(J),{key:0,ref_key:"personalInfoRef",ref:de,modelValue:c(ie).personalInfo,"onUpdate:modelValue":t[0]||(t[0]=e=>c(ie).personalInfo=e),"product-factor":null==(m=c(me))?void 0:m.productFactor,"multi-insured-config":null==(I=c(me))?void 0:I.multiInsuredConfigVO,"is-view":""},null,8,["modelValue","product-factor","multi-insured-config"])):j("",!0),c(ie).payInfo.schema.length?(n(),u(c(A),{key:1,ref_key:"payInfoRef",ref:le,modelValue:c(Oe).tenantOrderPayInfoList,"onUpdate:modelValue":t[1]||(t[1]=e=>c(Oe).tenantOrderPayInfoList=e),schema:c(ie).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):j("",!0),r("div",ne,[!c(H)&&c(se).isShare&&c(g)()?(n(),u(C,L({key:0},c(se),{class:"share-btn",onClick:V(ye,["stop"])}),{default:i((()=>[o(s,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),ae])),_:1},16,["onClick"])):j("",!0),o(M,{shadow:!1,onClick:he},{default:i((()=>[w(e.$slots,"default",{},(()=>[x("下一步")]))])),_:3})])])]})),_:3})}}});export{oe as default};
