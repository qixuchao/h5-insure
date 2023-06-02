import{d as e,b as t,c as a,e as n,w as o,i,M as r,N as s,f as l,Q as c,Y as d,g as u,h as p,O as m,b2 as f,R as y,U as v,u as I,ap as h,r as g,o as _,Z as b,aV as j,a5 as P,bA as O,aW as C,ao as k,j as w,P as V,n as x,p as L,$ as N,m as S,a7 as A}from"./index-779cecf9.js";import{t as E}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-81fea27c.js";/* empty css              */import"./useDicData-d205d0ee.js";import{_ as D}from"./PayInfo-d3c2a180.js";import{g as R,i as T}from"./trial-27028c91.js";import{n as F}from"./nextStep-b6b73041.js";import{u as U}from"./useAttachment-6693a04c.js";import{a as q,q as W}from"./product-c1d4d1df.js";import{g as B}from"./utils-66c7bcbe.js";import{u as M}from"./useOrder-1b363ec1.js";import{P as Y,B as $}from"./constants-7afb7c3d.js";import{a as J}from"./index-5646ea6c.js";import{P as G}from"./index-bb0f2aec.js";import{R as Q,b as z}from"./trial-0a278f3f.js";import"./pdfh5-008ca364.js";import"./phoneVerify-bd28443a.js";import"./merge-e7788e50.js";import"./keysIn-131bbce9.js";import"./isObjectLike-a9798079.js";import"./index-0bbf75b5.js";import"./_getTag-d5b47d26.js";import"./debounce-eed12388.js";import"./index-daed9497.js";import"./bankCard-c903cb13.js";import"./core-d3c88158.js";import"./constant-8927d485.js";import"./infoCollection-d7438166.js";import"./cloneDeep-6abacc69.js";const H={class:"com-insured-part-wrapper"},K={class:"content-wrapper"},X={class:"risk-name"},Z=e({__name:"InsureInfo",props:{productData:{default:()=>({})},totalPremium:{default:0}},setup:e=>(y,v)=>{const I=m,h=f;return t(),a("div",H,[n(h,{title:"保障信息"},{default:o((()=>{var o;return[i("div",K,[(t(!0),a(r,null,s((null==(o=e.productData)?void 0:o.riskList)||[],((e,o)=>{var s;return t(),a("div",{key:o,class:"risk-item"},[e.riskType===l(Q).MAIN_RISK?(t(),a(r,{key:0},[i("p",X,c(e.riskName),1),n(I,{title:"保障期间",content:e.coveragePeriodDesc},null,8,["content"]),n(I,{title:"交费期间",content:e.chargePeriodDesc},null,8,["content"])],64)):(t(),a(r,{key:1},[n(I,{title:e.riskName,content:"投保"},null,8,["title"]),e.exemptFlag===l(d).YES?(t(),u(I,{key:0,title:"交费期间",content:e.chargePeriodDesc},null,8,["content"])):(null==(s=e.liabilityList)?void 0:s.length)?(t(),a(r,{key:1},[n(I,{title:"保障期间",content:e.coveragePeriodDesc},null,8,["content"]),n(I,{title:"交费期间",content:e.chargePeriodDesc},null,8,["content"]),n(I,{title:"交费方式",content:l(z)[e.paymentFrequency]},null,8,["content"])],64)):p("",!0)],64)),n(I,{title:"保障金额",content:(e.initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),n(I,{title:"首期保费",class:"price",content:(e.initialPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])})),128)),n(I,{title:"首期总保费",class:"price",content:(e.totalPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])]})),_:1})])}});const ee={class:"long-info-preview"},te={class:"footer-btn"},ae=i("span",null,"分享",-1),ne=e({__name:"infoPreview",setup(e){y((()=>v((()=>import("./index-3d06a514.js")),["static/js/index-3d06a514.js","static/css/index-fa4edf2a.css","static/js/index-779cecf9.js","static/css/index-d0b191dc.css","static/js/pdfh5-008ca364.js","static/js/theme-94cf7d00.js","static/js/index-bb0f2aec.js","static/css/index-bbfdd7ec.css","static/js/utils-66c7bcbe.js","static/js/infoCollection-d7438166.js","static/js/trial-0a278f3f.js"]))),y((()=>v((()=>import("./index-a8c60616.js")),["static/js/index-a8c60616.js","static/css/index-cb73c937.css","static/js/index-779cecf9.js","static/css/index-d0b191dc.css","static/js/pdfh5-008ca364.js"])));const r=I(),s=M(),{productCode:c="",tenantId:d,agentCode:m="",agencyCode:f,saleChannelId:Q,isShare:z,orderNo:H,extraInfo:K,insurerCode:X,preview:ne}=r.query;let oe={};try{oe=JSON.parse(decodeURIComponent(K))}catch(be){}const ie=h({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]}}),re=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,se=g({imgUrl:"",desc:"",title:"",link:re}),le=g(),ce=g(),de=g({}),ue=g({}),pe=g([]),me=g(),fe=g({});g(!1),g(!1),g(0),g(!0),U(fe,me),g(!1);const ye=g(!1),ve=g(),Ie=()=>{F(s.value,((e,t)=>{t===V.JUMP_PAGE&&ve.value.handleShare()}))},he=async()=>{ne?x(Y.INFO_PREVIEW,r.query):(Object.assign(s.value,{extInfo:{...s.value.extInfo,buttonCode:$.INFO_PREVIEW,pageCode:Y.INFO_PREVIEW}}),F(s.value,((e,t)=>{t===V.JUMP_PAGE&&L(e.nextPageCode,r.query)})))};h({tenantOrderPayInfoList:[]});const ge=g(),_e=async()=>{q({productCode:c,tenantId:d}).then((({data:e,code:t})=>{if("10000"===t){de.value=e;const{wxShareConfig:t,showWXShare:a,title:n,desc:o,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};a?Object.assign(se.value,{...t,imgUrl:t.image,isShare:a}):Object.assign(se.value,{title:n,desc:o,imgUrl:i,isShare:a}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&N(e.BASIC_INFO.themeType)}})),H&&R({orderNo:H,tenantId:d}).then((({code:e,data:t})=>{"10000"===e&&(Object.assign(s.value,t,{tenantOrderPayInfoList:t.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0}}),ge.value=t,ye.value=!0)})),W({productCode:c}).then((({code:e,data:t})=>{var a,n,o,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:r}=t;me.value=e||[];const{basicInfo:{questionnaireType:s},questions:l,questionnaireName:c}=(null==(a=null==r?void 0:r[0])?void 0:a.questionnaireDetailResponseVO)||{basicInfo:{}};s&&(pe.value=2===s?[{attachmentName:c,attachmentUri:l,attachmentType:"question"}]:[{attachmentName:c,attachmentUri:null==(n=null==l?void 0:l[0])?void 0:n.content,attachmentType:B(String(null==(o=null==l?void 0:l[0])?void 0:o.textType),null==(i=null==l?void 0:l[0])?void 0:i.content)}])}})),await T({productCode:c,isTenant:!ne}).then((({data:e,code:t})=>{var a,n;if("10000"===t){ue.value=e,fe.value=(null==(a=e.productPlanInsureVOList)?void 0:a[0])||{};const{payInfo:t}=E(null==(n=fe.value)?void 0:n.productFactor);ie.payInfo={...ie.payInfo,...t}}}))};return _((()=>{_e()})),(e,r)=>{var c,d,m,f,y,v;const I=S,h=A;return t(),a("div",ee,[n(I),n(Z,{"product-data":null==(m=null==(d=null==(c=l(s).insuredList)?void 0:c[0])?void 0:d.productList)?void 0:m[0],"total-premium":l(s).orderAmount},null,8,["product-data","total-premium"]),(null==(f=l(fe))?void 0:f.productFactor)?(t(),u(l(J),{key:0,ref_key:"personalInfoRef",ref:ce,modelValue:l(ge),"onUpdate:modelValue":r[0]||(r[0]=e=>b(ge)?ge.value=e:null),"product-factor":null==(y=l(fe))?void 0:y.productFactor,"multi-insured-config":null==(v=l(fe))?void 0:v.multiInsuredConfigVO,"is-view":""},null,8,["modelValue","product-factor","multi-insured-config"])):p("",!0),l(ie).payInfo.schema.length?(t(),u(l(D),{key:1,ref_key:"payInfoRef",ref:le,modelValue:l(s).tenantOrderPayInfoList,"onUpdate:modelValue":r[1]||(r[1]=e=>l(s).tenantOrderPayInfoList=e),schema:l(ie).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):p("",!0),i("div",te,[!l(z)&&l(se).isShare&&l(j)()?(t(),u(C,P({key:0},l(se),{class:"share-btn",onClick:O(Ie,["stop"])}),{default:o((()=>[n(h,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),ae])),_:1},16,["onClick"])):p("",!0),n(G,{shadow:!1,onClick:he},{default:o((()=>[k(e.$slots,"default",{},(()=>[w("下一步")]))])),_:3})])])}}});export{ne as default};
