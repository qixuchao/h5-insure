import{d as e,X as a,Y as t,u as o,z as n,r as i,L as l,Z as s,o as r,b as d,c as u,e as c,w as p,f as m,g as f,h as v,i as h,a3 as I,j as y,n as j,T as C,P as O,p as g,a4 as _,a5 as b}from"./index-4933e0a6.js";import{t as P}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-253b8d3f.js";/* empty css              */import"./useDicData-6b48cc3d.js";import{_ as L}from"./PayInfo-33d3c3bf.js";import{g as x,i as w}from"./trial-7555a3df.js";import{_ as N}from"./TrialButton-90e47656.js";import{n as T}from"./nextStep-a0a5733a.js";import{u as V}from"./useAttachment-6faa7b83.js";import{a as F,q as S}from"./product-97679413.js";import{g as k}from"./utils-b8598766.js";import{u as D}from"./useOrder-82582ed2.js";import{P as U,B as E}from"./constants-7afb7c3d.js";import{t as q}from"./utils-38eefcd6.js";import{T as A}from"./index-ec29ca50.js";import"./pdfh5-008ca364.js";import"./phoneVerify-04f32c41.js";import"./merge-e7788e50.js";import"./keysIn-131bbce9.js";import"./isObjectLike-a9798079.js";import"./index-8e474357.js";import"./_getTag-d5b47d26.js";import"./debounce-eed12388.js";import"./index-827cfdf6.js";import"./bankCard-e0e40c72.js";import"./index-38f33e61.js";import"./core-88ae611f.js";import"./constant-8927d485.js";import"./infoCollection-2369d923.js";import"./trial-6e76302d.js";import"./createProposal-bd955f22.js";import"./index-bf68c303.js";import"./cloneDeep-6abacc69.js";import"./index-7a57c607.js";import"./index-c912ec47.js";import"./empty-ae586b6c.js";import"./box-title-ce8a744a.js";import"./index-ac902b1c.js";import"./echarts-ac920fed.js";const R={class:"long-info-collection"},B={class:"wrap"},M=e({__name:"infoCollection",setup(e){const M=a((()=>t((()=>import("./index-ec438499.js")),["static/js/index-ec438499.js","static/css/index-fa4edf2a.css","static/js/index-4933e0a6.js","static/css/index-08f51adc.css","static/js/pdfh5-008ca364.js","static/js/index-38f33e61.js","static/css/index-827a8544.css","static/js/utils-b8598766.js","static/js/infoCollection-2369d923.js","static/js/trial-6e76302d.js"]))),H=a((()=>t((()=>import("./index-98886bd7.js")),["static/js/index-98886bd7.js","static/css/index-3329e46f.css","static/js/index-4933e0a6.js","static/css/index-08f51adc.css","static/js/pdfh5-008ca364.js"]))),J=o(),W=D(),{productCode:G="",tenantId:X,agentCode:Y="",agencyCode:$,saleChannelId:z,isShare:Q,orderNo:Z,extraInfo:K,insurerCode:ee,preview:ae}=J.query;let te={};try{te=JSON.parse(decodeURIComponent(K))}catch(Se){}const oe=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},defaultValue:null,isAutoChange:!1,defaultPlanCode:"",userData:{}}),ne=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,ie=i({imgUrl:"",desc:"",title:"",link:ne}),le=i();i();const se=i(),re=i({}),de=i({}),ue=i([]),ce=i(),pe=i({}),me=i(!1),fe=i(!1),ve=i(0),he=i(!0),{fileList:Ie,mustReadFileCount:ye,popupFileList:je}=V(pe,ce),Ce=i(!1),Oe=i(!1),ge=()=>{fe.value=!1,he.value=!0,ue.value.length<1||(me.value=!0)},_e=()=>{me.value=!1,fe.value=!1,he.value=!0};i({}),i(!1),i([{}]);const be=i(""),Pe=i(0),Le=i(!1);i(),i(),i(),l((()=>{var e,a;const{insureProductRiskVOList:t}=(null==(a=null==(e=de.value)?void 0:e.productPlanInsureVOList)?void 0:a[0])||{};return(t||[]).find((e=>e.mainRiskFlag===s.YES))}));const xe=i(0);i({});const we=i(),Ne=()=>{be.value="试算中...",Pe.value=0,Le.value=!0},Te=(e,a)=>{be.value="",xe.value=e.premium,Pe.value=e,we.value=a,Le.value=!1},Ve=async()=>{var e,a;if(ae)return void j(U.INFO_COLLECTION,J.query);if(!Pe.value)return;const t=[];se.value&&t.push(null==(e=se.value)?void 0:e.validate(!1)),le.value&&t.push(null==(a=le.value)?void 0:a.validate(!1)),Promise.all(t).then((()=>{if(!Ce.value)return void C("请勾选投保人阅读并接受");Object.assign(W.value,{extInfo:{...W.value.extInfo,buttonCode:E.INFO_COLLECTION,pageCode:U.INFO_COLLECTION}});const e=se.value.dealMixData(),a=q({...e,productCode:G,productName:de.value.productName},Pe.value,W.value);T(a,((e,a)=>{a===O.JUMP_PAGE&&g(e.nextPageCode,J.query)}))}))};n({tenantOrderPayInfoList:[]});const Fe=async()=>{F({productCode:G,tenantId:X}).then((({data:e,code:a})=>{if("10000"===a){re.value=e;const{wxShareConfig:a,showWXShare:t,title:o,desc:n,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};t?Object.assign(ie.value,{...a,imgUrl:a.image,isShare:t}):Object.assign(ie.value,{title:o,desc:n,imgUrl:i,isShare:t}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&_(e.BASIC_INFO.themeType)}})),Z&&await x({orderNo:Z,tenantId:X}).then((({code:e,data:a})=>{var t;if("10000"===e){if(Pe.value=a.orderAmount,(null==(t=a.insuredList)?void 0:t.length)>0){const{planCode:e}=a.insuredList[0];oe.defaultPlanCode=e}Object.assign(W.value,a,{tenantOrderPayInfoList:a.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:G}),oe.defaultValue=W.value,Oe.value=!0}})),S({productCode:G}).then((({code:e,data:a})=>{var t,o,n,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:l}=a;ce.value=e||[];const{basicInfo:{questionnaireType:s},questions:r,questionnaireName:d}=(null==(t=null==l?void 0:l[0])?void 0:t.questionnaireDetailResponseVO)||{basicInfo:{}};s&&(ue.value=2===s?[{attachmentName:d,attachmentUri:r,attachmentType:"question"}]:[{attachmentName:d,attachmentUri:null==(o=null==r?void 0:r[0])?void 0:o.content,attachmentType:k(String(null==(n=null==r?void 0:r[0])?void 0:n.textType),null==(i=null==r?void 0:r[0])?void 0:i.content)}])}})),await w({productCode:G,isTenant:!ae}).then((({data:e,code:a})=>{var t;if("10000"===a){de.value=e,console.log("state.defaultPlanCode",oe.defaultPlanCode),pe.value=e.productPlanInsureVOList.find((e=>e.planCode===oe.defaultPlanCode))||{};const{payInfo:a}=P(null==(t=pe.value)?void 0:t.productFactor);oe.payInfo={...oe.payInfo,...a}}}))};return r((()=>{Fe()})),(e,a)=>{const t=b,o=d("ProPageWrap");return u(),c(o,null,{default:p((()=>{var e,o,n,i,l,s;return[m("div",R,[f(Oe)||f(ae)?(u(),c(A,{key:0,ref_key:"personalInfoRef",ref:se,"data-source":f(pe),"product-info":{productCode:f(G),productName:f(de).productName,insurerCode:f(ee),tenantId:f(X),planList:f(de).productPlanInsureVOList},"tenant-product-detail":f(re),"hide-benefit":"","default-data":[f(oe).defaultValue],onTrialStart:Ne,onTrialEnd:Te,"onUpdate:userData":a[0]||(a[0]=e=>f(oe).userData=e)},null,8,["data-source","product-info","tenant-product-detail","default-data"])):v("",!0),f(oe).payInfo.schema.length?(u(),c(f(L),{key:1,ref_key:"payInfoRef",ref:le,modelValue:f(W).tenantOrderPayInfoList,"onUpdate:modelValue":a[1]||(a[1]=e=>f(W).tenantOrderPayInfoList=e),schema:f(oe).payInfo.schema,"is-view":f(oe).isView,"user-data":f(oe).userData},null,8,["modelValue","schema","is-view","user-data"])):v("",!0),h(t,null,{default:p((()=>{var e;return[(null==(e=f(Ie))?void 0:e.length)?(u(),c(f(H),{key:0,modelValue:f(Ce),"onUpdate:modelValue":a[2]||(a[2]=e=>I(Ce)?Ce.value=e:null),"attachment-list":f(Ie),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[3]||(a[3]=e=>(e=>{ve.value=e,fe.value=!0})(e))},null,8,["modelValue","attachment-list"])):v("",!0)]})),_:1}),f(fe)?(u(),c(f(M),{key:2,show:f(fe),"onUpdate:show":a[4]||(a[4]=e=>I(fe)?fe.value=e:null),"content-list":f(he)?f(Ie):f(je),"is-only-view":f(he),"active-index":f(ve),text:f(he)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":f(he)?0:f(ye),onSubmit:ge,onOnCloseFilePreviewByMask:_e},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):v("",!0)]),m("div",B,[h(N,{"is-share":f(ie).isShare&&!f(Q),premium:null==(e=f(Pe))?void 0:e.initialPremium,"share-info":f(ie),"loading-text":f(be),"payment-frequency":(null==(s=null==(l=null==(i=null==(n=null==(o=f(we))?void 0:o.insuredList)?void 0:n[0].productList)?void 0:i[0].riskList)?void 0:l[0])?void 0:s.paymentFrequency)+"","tenant-product-detail":f(re),"handle-share":e=>(e=>{se.value.validateHolder(["mobile"]).then((()=>{Object.assign(W.value,{extInfo:{...W.value.extInfo,buttonCode:E.INFO_COLLECTION,pageCode:U.INFO_COLLECTION}});const a=se.value.getUserData(),t=q({...we.value,holder:null==a?void 0:a.holder},Pe.value||{},W.value);T(t,((a,t)=>{t===O.JUMP_PAGE&&(null==e||e())}))})).catch((()=>{C("请录入投保人手机号后进行分享")}))})(e),disabled:!f(Pe),onHandleClick:Ve},{default:p((()=>[y("下一步")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","disabled"])])]})),_:1})}}});export{M as default};
