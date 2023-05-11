import{G as e,d as t,c as a,A as n,i as o,w as i,f as s,U as r,V as l,E as c,g as d,e as u,h as p,W as m,bn as f,X as y,Y as v,u as I,z as h,r as _,o as j,b as g,a2 as b,aW as P,aX as w,a9 as O,bA as C,k as V,j as k,P as x,n as D,p as L,a3 as E,aa as A}from"./index-92579fc8.js";import{t as N}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-7fc5f556.js";/* empty css              */import"./bankCard-8777d251.js";import{_ as S}from"./PayInfo-1a0edd55.js";import{g as q,i as U}from"./trial-363d2bb6.js";import{n as F}from"./nextStep-b19cb717.js";import{u as R}from"./useAttachment-c8f17694.js";import{a as T,q as W}from"./product-acd6d563.js";import{g as B}from"./utils-59a9c4ac.js";import{u as G}from"./useOrder-ebccff86.js";import{P as J,B as M}from"./constants-7afb7c3d.js";import{a as X}from"./index-784369a9.js";import{P as Y}from"./index-3fc7db2c.js";import{d as $}from"./trial-029e79c5.js";import{A as z}from"./infoCollection-0c62ca00.js";import"./pdfh5-008ca364.js";import"./phoneVerify-977dc10c.js";import"./_initCloneObject-0663309f.js";import"./isObjectLike-a9798079.js";import"./debounce-eed12388.js";import"./index-70f37a01.js";import"./index-e87301ac.js";import"./core-b8cb5700.js";import"./constant-8927d485.js";import"./cloneDeep-1de8e9b0.js";const H={class:"com-insured-part-wrapper"},Q={class:"content-wrapper"};var K=e(t({__name:"InsureInfo",props:{productData:{default:()=>({})}},setup:e=>(t,y)=>{const v=m,I=f;return a(),n("div",H,[o(I,{title:"保障信息"},{default:i((()=>{var t;return[s("div",Q,[(a(!0),n(r,null,l((null==(t=e.productData)?void 0:t.riskList)||[],((e,t)=>(a(),n("div",{key:t,class:"risk-item"},[s("p",null,c(e.riskName),1),o(v,{title:"保障期间",content:e.coveragePeriodDesc},null,8,["content"]),o(v,{title:"交费期间",content:e.chargePeriodDesc},null,8,["content"]),o(v,{title:"交费方式",content:d($)[e.paymentFrequency]},null,8,["content"]),e.annuityDrawDateDesc?(a(),u(v,{key:0,title:"年金领取时间",content:e.annuityDrawDate},null,8,["content"])):p("",!0),e.annuityDrawFrequency?(a(),u(v,{key:1,title:"年金领取方式",content:d(z)[e.annuityDrawFrequency]},null,8,["content"])):p("",!0),(a(!0),n(r,null,l(e.liabilityDetails,((e,t)=>(a(),u(v,{key:t,title:e.liabilityName,content:"投保"},null,8,["title"])))),128)),o(v,{title:"保障金额",content:(e.initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),o(v,{title:"首期保费",class:"price",content:(e.initialPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])))),128))])]})),_:1})])}}),[["__scopeId","data-v-4c91a65e"]]);const Z={class:"long-info-preview"},ee={class:"footer-btn"},te=s("span",null,"分享",-1),ae=t({__name:"infoPreview",setup(e){y((()=>v((()=>import("./index-854f8231.js")),["static/js/index-854f8231.js","static/css/index-fa4edf2a.css","static/js/index-92579fc8.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js","static/js/index-3fc7db2c.js","static/css/index-827a8544.css","static/js/utils-59a9c4ac.js","static/js/infoCollection-0c62ca00.js","static/js/trial-029e79c5.js"]))),y((()=>v((()=>import("./index-33d37810.js")),["static/js/index-33d37810.js","static/css/index-3329e46f.css","static/js/index-92579fc8.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js"])));const t=I(),n=G(),{productCode:r="",tenantId:l,agentCode:c="",agencyCode:m,saleChannelId:f,isShare:$,orderNo:z,extraInfo:H,insurerCode:Q,preview:ae}=t.query;let ne={};try{ne=JSON.parse(decodeURIComponent(H))}catch(ge){}const oe=h({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]}}),ie=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,se=_({imgUrl:"",desc:"",title:"",link:ie}),re=_(),le=_(),ce=_({}),de=_({}),ue=_([]),pe=_(),me=_({});_(!1),_(!1),_(0),_(!0),R(me,pe),_(!1);const fe=_(!1),ye=_(),ve=()=>{F(n.value,((e,t)=>{t===x.JUMP_PAGE&&ye.value.handleShare()}))},Ie=async()=>{ae?D(J.INFO_PREVIEW,t.query):(Object.assign(n.value,{extInfo:{...n.value.extInfo,buttonCode:M.INFO_PREVIEW,pageCode:J.INFO_PREVIEW}}),F(n.value,((e,a)=>{a===x.JUMP_PAGE&&L(e.nextPageCode,t.query)})))},he=h({tenantOrderPayInfoList:[]}),_e=_(),je=async()=>{T({productCode:r,tenantId:l}).then((({data:e,code:t})=>{if("10000"===t){ce.value=e;const{wxShareConfig:t,showWXShare:a,title:n,desc:o,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};a?Object.assign(se.value,{...t,imgUrl:t.image,isShare:a}):Object.assign(se.value,{title:n,desc:o,imgUrl:i,isShare:a}),E(e.BASIC_INFO.themeType)}})),z&&q({orderNo:z,tenantId:l}).then((({code:e,data:t})=>{"10000"===e&&(Object.assign(n.value,t,{tenantOrderPayInfoList:t.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0}}),_e.value=t,fe.value=!0)})),W({productCode:r}).then((({code:e,data:t})=>{var a,n,o,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:s}=t;pe.value=e||[];const{basicInfo:{questionnaireType:r},questions:l,questionnaireName:c}=(null==(a=null==s?void 0:s[0])?void 0:a.questionnaireDetailResponseVO)||{basicInfo:{}};r&&(ue.value=2===r?[{attachmentName:c,attachmentUri:l,attachmentType:"question"}]:[{attachmentName:c,attachmentUri:null==(n=null==l?void 0:l[0])?void 0:n.content,attachmentType:B(String(null==(o=null==l?void 0:l[0])?void 0:o.textType),null==(i=null==l?void 0:l[0])?void 0:i.content)}])}})),await U({productCode:r,isTenant:!ae}).then((({data:e,code:t})=>{var a,n;if("10000"===t){de.value=e,me.value=(null==(a=e.productPlanInsureVOList)?void 0:a[0])||{};const{payInfo:t}=N(null==(n=me.value)?void 0:n.productFactor);oe.payInfo={...oe.payInfo,...t}}}))};return j((()=>{je()})),(e,t)=>{const r=A,l=g("ProPageWrap");return a(),u(l,null,{default:i((()=>{var l,c,m,f,y,v;return[s("div",Z,[o(K,{"product-data":null==(m=null==(c=null==(l=d(n).insuredList)?void 0:l[0])?void 0:c.productList)?void 0:m[0]},null,8,["product-data"]),(null==(f=d(me))?void 0:f.productFactor)?(a(),u(d(X),{key:0,ref_key:"personalInfoRef",ref:le,modelValue:d(_e),"onUpdate:modelValue":t[0]||(t[0]=e=>b(_e)?_e.value=e:null),"product-factor":null==(y=d(me))?void 0:y.productFactor,"multi-insured-config":null==(v=d(me))?void 0:v.multiInsuredConfigVO,"is-view":""},null,8,["modelValue","product-factor","multi-insured-config"])):p("",!0),d(oe).payInfo.schema.length?(a(),u(d(S),{key:1,ref_key:"payInfoRef",ref:re,modelValue:d(he).tenantOrderPayInfoList,"onUpdate:modelValue":t[1]||(t[1]=e=>d(he).tenantOrderPayInfoList=e),schema:d(oe).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):p("",!0),s("div",ee,[!d($)&&d(se).isShare&&d(P)()?(a(),u(w,O({key:0},d(se),{class:"share-btn",onClick:C(ve,["stop"])}),{default:i((()=>[o(r,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),te])),_:1},16,["onClick"])):p("",!0),o(Y,{shadow:!1,onClick:Ie},{default:i((()=>[V(e.$slots,"default",{},(()=>[k("下一步")]))])),_:3})])])]})),_:3})}}});export{ae as default};
