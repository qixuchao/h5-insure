import{d as e,X as a,Y as t,u as o,z as n,r as i,L as l,Z as s,o as r,b as d,c as u,e as c,w as p,f,g as m,h as v,i as h,a3 as I,j as C,n as j,T as y,P as O,p as b,a4 as _,a5 as g}from"./index-2e1ad6ca.js";import{t as P}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-96cdb34a.js";/* empty css              */import"./useDicData-ce373525.js";import{_ as L}from"./PayInfo-2179d13a.js";import{g as x,i as w}from"./trial-16c66a6b.js";import{_ as N}from"./TrialButton-2a7d18d3.js";import{n as T}from"./nextStep-9f7903ba.js";import{u as V}from"./useAttachment-710d4566.js";import{a as F,q as S}from"./product-fdd64a87.js";import{g as k}from"./utils-f466a9c6.js";import{u as E}from"./useOrder-31275180.js";import{P as U,B as q}from"./constants-7afb7c3d.js";import{t as A}from"./utils-fc3d5980.js";import{T as R}from"./index-4ed524e0.js";import"./pdfh5-008ca364.js";import"./phoneVerify-45266f5a.js";import"./_initCloneObject-da8458a4.js";import"./isObjectLike-a9798079.js";import"./index-86e3953c.js";import"./_getTag-ef97f191.js";import"./debounce-eed12388.js";import"./index-bef0a7bc.js";import"./bankCard-6b6ada92.js";import"./index-f3bb476b.js";import"./core-17b48f32.js";import"./constant-8927d485.js";import"./infoCollection-dd4b80fe.js";import"./trial-7aafe73c.js";import"./createProposal-2eea2c9b.js";import"./index-db96f68f.js";import"./cloneDeep-0762f693.js";import"./index-bd83c771.js";import"./index-891210d2.js";import"./empty-ae586b6c.js";import"./box-title-1a684be5.js";import"./index-e462f74f.js";import"./echarts-ac920fed.js";const D={class:"long-info-collection"},B={class:"wrap"},M=e({__name:"infoCollection",setup(e){const M=a((()=>t((()=>import("./index-31cf309b.js")),["static/js/index-31cf309b.js","static/css/index-fa4edf2a.css","static/js/index-2e1ad6ca.js","static/css/index-08f51adc.css","static/js/pdfh5-008ca364.js","static/js/index-f3bb476b.js","static/css/index-827a8544.css","static/js/utils-f466a9c6.js","static/js/infoCollection-dd4b80fe.js","static/js/trial-7aafe73c.js"]))),H=a((()=>t((()=>import("./index-9f592ce0.js")),["static/js/index-9f592ce0.js","static/css/index-3329e46f.css","static/js/index-2e1ad6ca.js","static/css/index-08f51adc.css","static/js/pdfh5-008ca364.js"]))),J=o(),W=E(),{productCode:G="",tenantId:X,agentCode:Y="",agencyCode:$,saleChannelId:z,isShare:Q,orderNo:Z,extraInfo:K,insurerCode:ee,preview:ae}=J.query;let te={};try{te=JSON.parse(decodeURIComponent(K))}catch(Se){}const oe=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},defaultValue:null,isAutoChange:!1,defaultPlanCode:""}),ne=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,ie=i({imgUrl:"",desc:"",title:"",link:ne}),le=i();i();const se=i(),re=i({}),de=i({}),ue=i([]),ce=i(),pe=i({}),fe=i(!1),me=i(!1),ve=i(0),he=i(!0),{fileList:Ie,mustReadFileCount:Ce,popupFileList:je}=V(pe,ce),ye=i(!1),Oe=i(!1),be=()=>{me.value=!1,he.value=!0,ue.value.length<1||(fe.value=!0)},_e=()=>{fe.value=!1,me.value=!1,he.value=!0};i({}),i(!1),i([{}]);const ge=i(""),Pe=i(0),Le=i(!1);i(),i(),i(),l((()=>{var e,a;const{insureProductRiskVOList:t}=(null==(a=null==(e=de.value)?void 0:e.productPlanInsureVOList)?void 0:a[0])||{};return(t||[]).find((e=>e.mainRiskFlag===s.YES))}));const xe=i(0);i({});const we=i(),Ne=()=>{ge.value="试算中...",Pe.value=0,Le.value=!0},Te=(e,a)=>{ge.value="",xe.value=e.premium,Pe.value=e,we.value=a,Le.value=!1},Ve=async()=>{var e,a;if(ae)return void j(U.INFO_COLLECTION,J.query);if(!Pe.value)return;const t=[];se.value&&t.push(null==(e=se.value)?void 0:e.validate(!1)),le.value&&t.push(null==(a=le.value)?void 0:a.validate(!1)),Promise.all(t).then((()=>{if(!ye.value)return void y("请勾选投保人阅读并接受");Object.assign(W.value,{extInfo:{...W.value.extInfo,buttonCode:q.INFO_COLLECTION,pageCode:U.INFO_COLLECTION}});const e=se.value.dealMixData(),a=A({...e,productCode:G,productName:de.value.productName},Pe.value,W.value);T(a,((e,a)=>{a===O.JUMP_PAGE&&b(e.nextPageCode,J.query)}))}))};n({tenantOrderPayInfoList:[]});const Fe=async()=>{F({productCode:G,tenantId:X}).then((({data:e,code:a})=>{if("10000"===a){re.value=e;const{wxShareConfig:a,showWXShare:t,title:o,desc:n,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};t?Object.assign(ie.value,{...a,imgUrl:a.image,isShare:t}):Object.assign(ie.value,{title:o,desc:n,imgUrl:i,isShare:t}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&_(e.BASIC_INFO.themeType)}})),Z&&await x({orderNo:Z,tenantId:X}).then((({code:e,data:a})=>{var t;if("10000"===e){if(Pe.value=a.orderAmount,(null==(t=a.insuredList)?void 0:t.length)>0){const{planCode:e}=a.insuredList[0];oe.defaultPlanCode=e}Object.assign(W.value,a,{tenantOrderPayInfoList:a.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:G}),oe.defaultValue=W.value,Oe.value=!0}})),S({productCode:G}).then((({code:e,data:a})=>{var t,o,n,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:l}=a;ce.value=e||[];const{basicInfo:{questionnaireType:s},questions:r,questionnaireName:d}=(null==(t=null==l?void 0:l[0])?void 0:t.questionnaireDetailResponseVO)||{basicInfo:{}};s&&(ue.value=2===s?[{attachmentName:d,attachmentUri:r,attachmentType:"question"}]:[{attachmentName:d,attachmentUri:null==(o=null==r?void 0:r[0])?void 0:o.content,attachmentType:k(String(null==(n=null==r?void 0:r[0])?void 0:n.textType),null==(i=null==r?void 0:r[0])?void 0:i.content)}])}})),await w({productCode:G,isTenant:!ae}).then((({data:e,code:a})=>{var t;if("10000"===a){de.value=e,console.log("state.defaultPlanCode",oe.defaultPlanCode),pe.value=e.productPlanInsureVOList.find((e=>e.planCode===oe.defaultPlanCode))||{};const{payInfo:a}=P(null==(t=pe.value)?void 0:t.productFactor);oe.payInfo={...oe.payInfo,...a}}}))};return r((()=>{Fe()})),(e,a)=>{const t=g,o=d("ProPageWrap");return u(),c(o,null,{default:p((()=>{var e,o,n,i,l,s;return[f("div",D,[m(Oe)||m(ae)?(u(),c(R,{key:0,ref_key:"personalInfoRef",ref:se,"data-source":m(pe),"product-info":{productCode:m(G),productName:m(de).productName,insurerCode:m(ee),tenantId:m(X),planList:m(de).productPlanInsureVOList},"tenant-product-detail":m(re),"hide-benefit":"","default-data":[m(oe).defaultValue],onTrialStart:Ne,onTrialEnd:Te},null,8,["data-source","product-info","tenant-product-detail","default-data"])):v("",!0),m(oe).payInfo.schema.length?(u(),c(m(L),{key:1,ref_key:"payInfoRef",ref:le,modelValue:m(W).tenantOrderPayInfoList,"onUpdate:modelValue":a[0]||(a[0]=e=>m(W).tenantOrderPayInfoList=e),schema:m(oe).payInfo.schema,"is-view":m(oe).isView},null,8,["modelValue","schema","is-view"])):v("",!0),h(t,null,{default:p((()=>{var e;return[(null==(e=m(Ie))?void 0:e.length)?(u(),c(m(H),{key:0,modelValue:m(ye),"onUpdate:modelValue":a[1]||(a[1]=e=>I(ye)?ye.value=e:null),"attachment-list":m(Ie),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[2]||(a[2]=e=>(e=>{ve.value=e,me.value=!0})(e))},null,8,["modelValue","attachment-list"])):v("",!0)]})),_:1}),m(me)?(u(),c(m(M),{key:2,show:m(me),"onUpdate:show":a[3]||(a[3]=e=>I(me)?me.value=e:null),"content-list":m(he)?m(Ie):m(je),"is-only-view":m(he),"active-index":m(ve),text:m(he)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":m(he)?0:m(Ce),onSubmit:be,onOnCloseFilePreviewByMask:_e},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):v("",!0)]),f("div",B,[h(N,{"is-share":m(ie).isShare&&!m(Q),premium:null==(e=m(Pe))?void 0:e.initialPremium,"share-info":m(ie),"loading-text":m(ge),"payment-frequency":(null==(s=null==(l=null==(i=null==(n=null==(o=m(we))?void 0:o.insuredList)?void 0:n[0].productList)?void 0:i[0].riskList)?void 0:l[0])?void 0:s.paymentFrequency)+"","tenant-product-detail":m(re),"handle-share":e=>(e=>{se.value.validateHolder(["mobile"]).then((()=>{Object.assign(W.value,{extInfo:{...W.value.extInfo,buttonCode:q.INFO_COLLECTION,pageCode:U.INFO_COLLECTION}});const a=se.value.getUserData(),t=A({...we.value,holder:null==a?void 0:a.holder},Pe.value||{},W.value);T(t,((a,t)=>{t===O.JUMP_PAGE&&(null==e||e())}))})).catch((()=>{y("请录入投保人手机号后进行分享")}))})(e),disabled:!m(Pe),onHandleClick:Ve},{default:p((()=>[C("下一步")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","disabled"])])]})),_:1})}}});export{M as default};
