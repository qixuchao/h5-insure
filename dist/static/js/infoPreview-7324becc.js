import{d as e,o as t,c as a,b as n,w as o,a as i,F as s,n as r,u as l,e as c,a6 as d,l as u,q as m,bN as p,aE as f,a4 as I,a5 as v,h,r as y,i as g,av as j,m as b,ac as P,a0 as _,aw as O,ad as C,f as k,a8 as w,aC as x,aB as L,a9 as N,bO as S,aa as V,ae as E}from"./index-e18db70e.js";import{t as A}from"./index-e15b0217.js";import{_ as D}from"./PayInfo-d9c5f190.js";import{g as T,i as F}from"./trial-d080f2d6.js";import{n as R}from"./nextStep-ed87c6a0.js";import{u as U}from"./useAttachment-545258ec.js";import{a as q,b as B}from"./product-79fb9729.js";import{g as M}from"./utils-60cf0310.js";import{u as W}from"./useOrder-75af89ba.js";import{P as Y,B as $}from"./constants-26c2b3c0.js";import{P as J}from"./index-4465d39c.js";import{P as G}from"./index-31d0d565.js";import{R as z,c as H}from"./trial-defa9a58.js";import"./keysIn-131bbce9.js";import"./isObjectLike-a9798079.js";import"./_getTag-0507d0b1.js";import"./debounce-6981b306.js";import"./phoneVerify-5635bdd8.js";import"./merge-e7788e50.js";import"./index-8290e5bc.js";import"./useDicData-34e49d0a.js";import"./bankCard-04c7ba29.js";import"./core-4108f5fa.js";import"./constant-8927d485.js";import"./infoCollection-5ec4d8c9.js";import"./index-1a4da0a6.js";import"./empth-c0adfdba.js";import"./cloneDeep-5d541e55.js";import"./lodash-5c2f28b0.js";import"./index-7980b223.js";import"./search-051f89cc.js";const K={class:"com-insured-part-wrapper"},Q={class:"content-wrapper"},X={class:"risk-name"},Z=e({__name:"InsureInfo",props:{productData:{default:()=>({})},totalPremium:{default:0}},setup:e=>(e,I)=>{const v=p,h=f;return t(),a("div",K,[n(h,{title:"保障信息"},{default:o((()=>{var o;return[i("div",Q,[(t(!0),a(s,null,r((null==(o=e.productData)?void 0:o.riskList)||[],((e,o)=>{var r;return t(),a("div",{key:o,class:"risk-item"},[e.riskType===l(z).MAIN_RISK?(t(),a(s,{key:0},[i("p",X,c(e.riskName),1),n(v,{title:"保障期间",content:e.coveragePeriodDesc},null,8,["content"]),n(v,{title:"交费期间",content:e.chargePeriodDesc},null,8,["content"])],64)):(t(),a(s,{key:1},[n(v,{title:e.riskName,content:"投保"},null,8,["title"]),e.exemptFlag===l(d).YES?(t(),u(v,{key:0,title:"交费期间",content:e.chargePeriodDesc},null,8,["content"])):(null==(r=e.liabilityList)?void 0:r.length)?(t(),a(s,{key:1},[n(v,{title:"保障期间",content:e.coveragePeriodDesc},null,8,["content"]),n(v,{title:"交费期间",content:e.chargePeriodDesc},null,8,["content"]),n(v,{title:"交费方式",content:l(H)[e.paymentFrequency]},null,8,["content"])],64)):m("",!0)],64)),n(v,{title:"保障金额",content:(e.initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),n(v,{title:"首期保费",class:"price",content:(e.initialPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])})),128)),n(v,{title:"首期总保费",class:"price",content:(e.totalPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])]})),_:1})])}});const ee={class:"long-info-preview"},te={class:"footer-btn"},ae=i("span",null,"分享",-1),ne=e({__name:"infoPreview",setup(e){I((()=>v((()=>import("./index-4cb659a2.js")),["static/js/index-4cb659a2.js","static/css/index-fa4edf2a.css","static/js/index-e18db70e.js","static/css/index-c3745f58.css","static/js/theme-94cf7d00.js","static/js/index-31d0d565.js","static/css/index-bbfdd7ec.css","static/js/utils-60cf0310.js","static/js/infoCollection-5ec4d8c9.js","static/js/trial-defa9a58.js"]))),I((()=>v((()=>import("./index-9bc79976.js")),["static/js/index-9bc79976.js","static/css/index-cb73c937.css","static/js/index-e18db70e.js","static/css/index-c3745f58.css"])));const s=h(),r=W(),{productCode:c="",tenantId:d,agentCode:p="",agencyCode:f,saleChannelId:z,isShare:H,orderNo:K,extraInfo:Q,insurerCode:X,preview:ne}=s.query;let oe={};try{oe=JSON.parse(decodeURIComponent(Q))}catch(be){}const ie=y({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]}}),se=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,re=g({imgUrl:"",desc:"",title:"",link:se}),le=g(),ce=g(),de=g({}),ue=g({}),me=g([]),pe=g(),fe=g({});g(!1),g(!1),g(0),g(!0),U(fe,pe),g(!1);const Ie=g(!1),ve=g(),he=()=>{R(r.value,((e,t)=>{t===x.JUMP_PAGE&&ve.value.handleShare()}))},ye=async()=>{ne?L(Y.INFO_PREVIEW,s.query):(Object.assign(r.value,{extInfo:{...r.value.extInfo,buttonCode:$.INFO_PREVIEW,pageCode:Y.INFO_PREVIEW}}),R(r.value,((e,t)=>{t===x.JUMP_PAGE&&N(e.nextPageCode,s.query)})))};y({tenantOrderPayInfoList:[]});const ge=g(),je=async()=>{q({productCode:c,tenantId:d}).then((({data:e,code:t})=>{if("10000"===t){de.value=e;const{wxShareConfig:t,showWXShare:a,title:n,desc:o,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};a?Object.assign(re.value,{...t,imgUrl:t.image,isShare:a}):Object.assign(re.value,{title:n,desc:o,imgUrl:i,isShare:a}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&S(e.BASIC_INFO.themeType)}})),K&&T({orderNo:K,tenantId:d}).then((({code:e,data:t})=>{"10000"===e&&(Object.assign(r.value,t,{tenantOrderPayInfoList:t.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0}}),ge.value=t,Ie.value=!0)})),B({productCode:c}).then((({code:e,data:t})=>{var a,n,o,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:s}=t;pe.value=e||[];const{basicInfo:{questionnaireType:r},questions:l,questionnaireName:c}=(null==(a=null==s?void 0:s[0])?void 0:a.questionnaireDetailResponseVO)||{basicInfo:{}};r&&(me.value=2===r?[{attachmentName:c,attachmentUri:l,attachmentType:"question"}]:[{attachmentName:c,attachmentUri:null==(n=null==l?void 0:l[0])?void 0:n.content,attachmentType:M(String(null==(o=null==l?void 0:l[0])?void 0:o.textType),null==(i=null==l?void 0:l[0])?void 0:i.content)}])}})),await F({productCode:c,isTenant:!ne}).then((({data:e,code:t})=>{var a,n;if("10000"===t){ue.value=e,fe.value=(null==(a=e.productPlanInsureVOList)?void 0:a[0])||{};const{payInfo:t}=A(null==(n=fe.value)?void 0:n.productFactor);ie.payInfo={...ie.payInfo,...t}}}))};return j((()=>{je()})),(e,s)=>{var c,d,p;const f=V,I=E;return t(),a("div",ee,[n(f),(null==(c=l(fe))?void 0:c.productFactor)?(t(),u(J,{key:0,ref_key:"personalInfoRef",ref:ce,modelValue:l(ge),"onUpdate:modelValue":s[0]||(s[0]=e=>b(ge)?ge.value=e:null),"product-factor":null==(d=l(fe))?void 0:d.productFactor,"multi-insured-config":null==(p=l(fe))?void 0:p.multiInsuredConfigVO,"is-view":""},{riskInfo:o((({insuredIndex:e})=>{var t,a,o;return[n(Z,{"product-data":null==(o=null==(a=null==(t=l(r).insuredList)?void 0:t[`${e}`])?void 0:a.productList)?void 0:o[0],"total-premium":l(r).orderAmount},null,8,["product-data","total-premium"])]})),_:1},8,["modelValue","product-factor","multi-insured-config"])):m("",!0),l(ie).payInfo.schema.length?(t(),u(l(D),{key:1,ref_key:"payInfoRef",ref:le,modelValue:l(r).tenantOrderPayInfoList,"onUpdate:modelValue":s[1]||(s[1]=e=>l(r).tenantOrderPayInfoList=e),schema:l(ie).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):m("",!0),i("div",te,[!l(H)&&l(re).isShare&&l(P)()?(t(),u(C,_({key:0},l(re),{class:"share-btn",onClick:O(he,["stop"])}),{default:o((()=>[n(I,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),ae])),_:1},16,["onClick"])):m("",!0),n(G,{shadow:!1,onClick:ye},{default:o((()=>[k(e.$slots,"default",{},(()=>[w("下一步")]))])),_:3})])])}}});export{ne as default};
