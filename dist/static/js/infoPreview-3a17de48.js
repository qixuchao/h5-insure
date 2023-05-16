import{G as e,d as t,c as a,A as n,i as o,w as i,f as s,U as r,V as l,E as c,g as d,e as u,h as p,W as m,bp as f,X as y,Y as v,u as I,z as h,r as _,o as j,b,a3 as g,aX as P,aY as w,aa as C,bC as O,k as D,j as V,P as k,n as x,p as L,a4 as E,ab as N}from"./index-39a19067.js";import{t as S}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-cd60845e.js";/* empty css              */import"./useDicData-3da1ab35.js";import{_ as A}from"./PayInfo-0ae27a74.js";import{g as q,i as U}from"./trial-9a69a710.js";import{n as F}from"./nextStep-4b59ee82.js";import{u as R}from"./useAttachment-5ebf182f.js";import{a as T,q as W}from"./product-7c3e7be0.js";import{g as Y}from"./utils-570beebd.js";import{u as B}from"./useOrder-3060c9cd.js";import{P as G,B as J}from"./constants-7afb7c3d.js";import{a as M}from"./index-09b160ef.js";import{P as X}from"./index-d3a7a528.js";import{d as $}from"./trial-dc79d860.js";import{A as z}from"./infoCollection-a009ebbd.js";import"./pdfh5-008ca364.js";import"./phoneVerify-9d3a10e9.js";import"./_initCloneObject-0663309f.js";import"./isObjectLike-a9798079.js";import"./debounce-eed12388.js";import"./index-e0f04f13.js";import"./index-26b0e547.js";import"./bankCard-97429892.js";import"./core-e642940e.js";import"./constant-8927d485.js";import"./cloneDeep-1de8e9b0.js";const H={class:"com-insured-part-wrapper"},Q={class:"content-wrapper"};var K=e(t({__name:"InsureInfo",props:{productData:{default:()=>({})}},setup:e=>(t,y)=>{const v=m,I=f;return a(),n("div",H,[o(I,{title:"保障信息"},{default:i((()=>{var t;return[s("div",Q,[(a(!0),n(r,null,l((null==(t=e.productData)?void 0:t.riskList)||[],((e,t)=>(a(),n("div",{key:t,class:"risk-item"},[s("p",null,c(e.riskName),1),o(v,{title:"保障期间",content:e.coveragePeriodDesc},null,8,["content"]),o(v,{title:"交费期间",content:e.chargePeriodDesc},null,8,["content"]),o(v,{title:"交费方式",content:d($)[e.paymentFrequency]},null,8,["content"]),e.annuityDrawDateDesc?(a(),u(v,{key:0,title:"年金领取时间",content:e.annuityDrawDate},null,8,["content"])):p("",!0),e.annuityDrawFrequency?(a(),u(v,{key:1,title:"年金领取方式",content:d(z)[e.annuityDrawFrequency]},null,8,["content"])):p("",!0),(a(!0),n(r,null,l(e.liabilityDetails,((e,t)=>(a(),u(v,{key:t,title:e.liabilityName,content:"投保"},null,8,["title"])))),128)),o(v,{title:"保障金额",content:(e.initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),o(v,{title:"首期保费",class:"price",content:(e.initialPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])))),128))])]})),_:1})])}}),[["__scopeId","data-v-4c91a65e"]]);const Z={class:"long-info-preview"},ee={class:"footer-btn"},te=s("span",null,"分享",-1),ae=t({__name:"infoPreview",setup(e){y((()=>v((()=>import("./index-493c1f55.js")),["static/js/index-493c1f55.js","static/css/index-fa4edf2a.css","static/js/index-39a19067.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js","static/js/index-d3a7a528.js","static/css/index-827a8544.css","static/js/utils-570beebd.js","static/js/infoCollection-a009ebbd.js","static/js/trial-dc79d860.js"]))),y((()=>v((()=>import("./index-47fc3730.js")),["static/js/index-47fc3730.js","static/css/index-3329e46f.css","static/js/index-39a19067.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js"])));const t=I(),n=B(),{productCode:r="",tenantId:l,agentCode:c="",agencyCode:m,saleChannelId:f,isShare:$,orderNo:z,extraInfo:H,insurerCode:Q,preview:ae}=t.query;let ne={};try{ne=JSON.parse(decodeURIComponent(H))}catch(je){}const oe=h({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]}}),ie=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,se=_({imgUrl:"",desc:"",title:"",link:ie}),re=_(),le=_(),ce=_({}),de=_({}),ue=_([]),pe=_(),me=_({});_(!1),_(!1),_(0),_(!0),R(me,pe),_(!1);const fe=_(!1),ye=_(),ve=()=>{F(n.value,((e,t)=>{t===k.JUMP_PAGE&&ye.value.handleShare()}))},Ie=async()=>{ae?x(G.INFO_PREVIEW,t.query):(Object.assign(n.value,{extInfo:{...n.value.extInfo,buttonCode:J.INFO_PREVIEW,pageCode:G.INFO_PREVIEW}}),F(n.value,((e,a)=>{a===k.JUMP_PAGE&&L(e.nextPageCode,t.query)})))};h({tenantOrderPayInfoList:[]});const he=_(),_e=async()=>{T({productCode:r,tenantId:l}).then((({data:e,code:t})=>{if("10000"===t){ce.value=e;const{wxShareConfig:t,showWXShare:a,title:n,desc:o,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};a?Object.assign(se.value,{...t,imgUrl:t.image,isShare:a}):Object.assign(se.value,{title:n,desc:o,imgUrl:i,isShare:a}),E(e.BASIC_INFO.themeType)}})),z&&q({orderNo:z,tenantId:l}).then((({code:e,data:t})=>{"10000"===e&&(Object.assign(n.value,t,{tenantOrderPayInfoList:t.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0}}),he.value=t,fe.value=!0)})),W({productCode:r}).then((({code:e,data:t})=>{var a,n,o,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:s}=t;pe.value=e||[];const{basicInfo:{questionnaireType:r},questions:l,questionnaireName:c}=(null==(a=null==s?void 0:s[0])?void 0:a.questionnaireDetailResponseVO)||{basicInfo:{}};r&&(ue.value=2===r?[{attachmentName:c,attachmentUri:l,attachmentType:"question"}]:[{attachmentName:c,attachmentUri:null==(n=null==l?void 0:l[0])?void 0:n.content,attachmentType:Y(String(null==(o=null==l?void 0:l[0])?void 0:o.textType),null==(i=null==l?void 0:l[0])?void 0:i.content)}])}})),await U({productCode:r,isTenant:!ae}).then((({data:e,code:t})=>{var a,n;if("10000"===t){de.value=e,me.value=(null==(a=e.productPlanInsureVOList)?void 0:a[0])||{};const{payInfo:t}=S(null==(n=me.value)?void 0:n.productFactor);oe.payInfo={...oe.payInfo,...t}}}))};return j((()=>{_e()})),(e,t)=>{const r=N,l=b("ProPageWrap");return a(),u(l,null,{default:i((()=>{var l,c,m,f,y,v;return[s("div",Z,[o(K,{"product-data":null==(m=null==(c=null==(l=d(n).insuredList)?void 0:l[0])?void 0:c.productList)?void 0:m[0]},null,8,["product-data"]),(null==(f=d(me))?void 0:f.productFactor)?(a(),u(d(M),{key:0,ref_key:"personalInfoRef",ref:le,modelValue:d(he),"onUpdate:modelValue":t[0]||(t[0]=e=>g(he)?he.value=e:null),"product-factor":null==(y=d(me))?void 0:y.productFactor,"multi-insured-config":null==(v=d(me))?void 0:v.multiInsuredConfigVO,"is-view":""},null,8,["modelValue","product-factor","multi-insured-config"])):p("",!0),d(oe).payInfo.schema.length?(a(),u(d(A),{key:1,ref_key:"payInfoRef",ref:re,modelValue:d(n).tenantOrderPayInfoList,"onUpdate:modelValue":t[1]||(t[1]=e=>d(n).tenantOrderPayInfoList=e),schema:d(oe).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):p("",!0),s("div",ee,[!d($)&&d(se).isShare&&d(P)()?(a(),u(w,C({key:0},d(se),{class:"share-btn",onClick:O(ve,["stop"])}),{default:i((()=>[o(r,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),te])),_:1},16,["onClick"])):p("",!0),o(X,{shadow:!1,onClick:Ie},{default:i((()=>[D(e.$slots,"default",{},(()=>[V("下一步")]))])),_:3})])])]})),_:3})}}});export{ae as default};
