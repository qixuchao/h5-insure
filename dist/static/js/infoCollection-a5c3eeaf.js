import{d as e,R as a,U as t,u as o,A as n,r as i,L as s,Y as l,o as r,b as d,c as u,e as c,f as p,g as m,h as f,w as v,a0 as h,j as I,p as y,T as j,P as C,q as O,a1 as b,n as g,a2 as _}from"./index-27c99c5f.js";import{t as L}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-e58067bb.js";/* empty css              */import"./useDicData-4545c8ee.js";import{_ as P}from"./PayInfo-8188255b.js";import{g as x,i as w}from"./trial-fc81899a.js";import{_ as N}from"./TrialButton-c8cd96b1.js";import{n as T}from"./nextStep-1cd721ca.js";import{u as V}from"./useAttachment-080d6de8.js";import{a as F,q as S}from"./product-797ba18c.js";import{g as k}from"./utils-551bb151.js";import{u as U}from"./useOrder-c9e812bb.js";import{P as D,B as q}from"./constants-7afb7c3d.js";import{t as E}from"./utils-7b3212d8.js";import{T as A}from"./index-d9d9d155.js";import"./pdfh5-65d2a17a.js";import"./isObjectLike-a9798079.js";import"./phoneVerify-e59552a7.js";import"./merge-84cb998c.js";import"./keysIn-b1e7a5ec.js";import"./index-7eb54bd2.js";import"./_getTag-5c78de73.js";import"./debounce-6981b306.js";import"./index-1ecc1c77.js";import"./bankCard-9d01ec49.js";import"./index-627d7895.js";import"./core-cbe513f8.js";import"./constant-8927d485.js";import"./infoCollection-e4fda216.js";import"./trial-d92f97cb.js";import"./createProposal-6a07c9ad.js";import"./cloneDeep-f5e28e96.js";import"./index-63f302e1.js";import"./index-c61514ca.js";import"./index-4080aafc.js";import"./empty-ae586b6c.js";import"./box-title-49964a8e.js";import"./index-f81e40cd.js";import"./echarts-ac920fed.js";const R={class:"long-info-collection"},B=e({__name:"infoCollection",setup(e){const B=a((()=>t((()=>import("./index-082e131f.js")),["static/js/index-082e131f.js","static/css/index-fa4edf2a.css","static/js/index-27c99c5f.js","static/css/index-9494d932.css","static/js/pdfh5-65d2a17a.js","static/js/theme-65292714.js","static/js/index-627d7895.js","static/css/index-827a8544.css","static/js/utils-551bb151.js","static/js/infoCollection-e4fda216.js","static/js/trial-d92f97cb.js"]))),M=a((()=>t((()=>import("./index-205f7083.js")),["static/js/index-205f7083.js","static/css/index-4640d9aa.css","static/js/index-27c99c5f.js","static/css/index-9494d932.css","static/js/pdfh5-65d2a17a.js"]))),H=o(),J=U(),{productCode:G="",tenantId:W,agentCode:Y="",agencyCode:$,saleChannelId:Q,isShare:X,orderNo:z,extraInfo:K,insurerCode:Z,preview:ee}=H.query;let ae={};try{ae=JSON.parse(decodeURIComponent(K))}catch(Fe){}const te=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},defaultValue:null,isAutoChange:!1,defaultPlanCode:"",userData:{}}),oe=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,ne=i({imgUrl:"",desc:"",title:"",link:oe}),ie=i();i();const se=i(),le=i({}),re=i({}),de=i([]),ue=i(),ce=i({}),pe=i(!1),me=i(!1),fe=i(0),ve=i(!0),{fileList:he,mustReadFileCount:Ie,popupFileList:ye}=V(ce,ue),je=i(!1),Ce=i(!1),Oe=()=>{me.value=!1,ve.value=!0,de.value.length<1||(pe.value=!0)},be=()=>{pe.value=!1,me.value=!1,ve.value=!0};i({}),i(!1),i([{}]);const ge=i(""),_e=i(0),Le=i(!1);i(),i(),i(),s((()=>{var e,a;const{insureProductRiskVOList:t}=(null==(a=null==(e=re.value)?void 0:e.productPlanInsureVOList)?void 0:a[0])||{};return(t||[]).find((e=>e.mainRiskFlag===l.YES))}));const Pe=i(0);i({});const xe=i(),we=()=>{ge.value="试算中...",_e.value=0,Le.value=!0},Ne=(e,a)=>{ge.value="",Pe.value=e.premium,_e.value=e,xe.value=a,Le.value=!1},Te=async()=>{var e,a;if(ee)return void y(D.INFO_COLLECTION,H.query);if(!_e.value)return;const t=[];se.value&&t.push(null==(e=se.value)?void 0:e.validate(!1)),ie.value&&t.push(null==(a=ie.value)?void 0:a.validate(!1)),Promise.all(t).then((()=>{if(!je.value)return void j("请勾选投保人阅读并接受");Object.assign(J.value,{extInfo:{...J.value.extInfo,buttonCode:q.INFO_COLLECTION,pageCode:D.INFO_COLLECTION}});const e=se.value.dealMixData(),a=E({...e,productCode:G,productName:re.value.productName},_e.value,J.value);T(a,((e,a)=>{a===C.JUMP_PAGE&&O(e.nextPageCode,H.query)}))}))};n({tenantOrderPayInfoList:[]});const Ve=async()=>{F({productCode:G,tenantId:W}).then((({data:e,code:a})=>{if("10000"===a){le.value=e;const{wxShareConfig:a,showWXShare:t,title:o,desc:n,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};t?Object.assign(ne.value,{...a,imgUrl:a.image,isShare:t}):Object.assign(ne.value,{title:o,desc:n,imgUrl:i,isShare:t}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&b(e.BASIC_INFO.themeType)}})),z&&await x({orderNo:z,tenantId:W}).then((({code:e,data:a})=>{var t;if("10000"===e){if(_e.value=a.orderAmount,(null==(t=a.insuredList)?void 0:t.length)>0){const{planCode:e}=a.insuredList[0];te.defaultPlanCode=e}Object.assign(J.value,a,{tenantOrderPayInfoList:a.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:G}),te.defaultValue=J.value,Ce.value=!0}})),S({productCode:G}).then((({code:e,data:a})=>{var t,o,n,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:s}=a;ue.value=e||[];const{basicInfo:{questionnaireType:l},questions:r,questionnaireName:d}=(null==(t=null==s?void 0:s[0])?void 0:t.questionnaireDetailResponseVO)||{basicInfo:{}};l&&(de.value=2===l?[{attachmentName:d,attachmentUri:r,attachmentType:"question"}]:[{attachmentName:d,attachmentUri:null==(o=null==r?void 0:r[0])?void 0:o.content,attachmentType:k(String(null==(n=null==r?void 0:r[0])?void 0:n.textType),null==(i=null==r?void 0:r[0])?void 0:i.content)}])}})),await w({productCode:G,isTenant:!ee}).then((({data:e,code:a})=>{var t;if("10000"===a){re.value=e,console.log("state.defaultPlanCode",te.defaultPlanCode),ce.value=e.productPlanInsureVOList.find((e=>e.planCode===te.defaultPlanCode))||{};const{payInfo:a}=L(null==(t=ce.value)?void 0:t.productFactor);te.payInfo={...te.payInfo,...a}}}))};return r((()=>{Ve()})),(e,a)=>{var t,o,n,i,s,l;const r=g,y=_;return d(),u("div",R,[c(r),p(Ce)||p(ee)?(d(),m(A,{key:0,ref_key:"personalInfoRef",ref:se,"data-source":p(ce),"product-info":{productCode:p(G),productName:p(re).productName,insurerCode:p(Z),tenantId:p(W),planList:p(re).productPlanInsureVOList},"tenant-product-detail":p(le),"hide-benefit":"","default-data":[p(te).defaultValue],onTrialStart:we,onTrialEnd:Ne,"onUpdate:userData":a[0]||(a[0]=e=>p(te).userData=e)},null,8,["data-source","product-info","tenant-product-detail","default-data"])):f("",!0),p(te).payInfo.schema.length?(d(),m(p(P),{key:1,ref_key:"payInfoRef",ref:ie,modelValue:p(J).tenantOrderPayInfoList,"onUpdate:modelValue":a[1]||(a[1]=e=>p(J).tenantOrderPayInfoList=e),schema:p(te).payInfo.schema,"is-view":p(te).isView,"user-data":p(te).userData},null,8,["modelValue","schema","is-view","user-data"])):f("",!0),c(y,null,{default:v((()=>{var e;return[(null==(e=p(he))?void 0:e.length)?(d(),m(p(M),{key:0,modelValue:p(je),"onUpdate:modelValue":a[2]||(a[2]=e=>h(je)?je.value=e:null),"attachment-list":p(he),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[3]||(a[3]=e=>(e=>{fe.value=e,me.value=!0})(e))},null,8,["modelValue","attachment-list"])):f("",!0)]})),_:1}),p(me)?(d(),m(p(B),{key:2,show:p(me),"onUpdate:show":a[4]||(a[4]=e=>h(me)?me.value=e:null),"content-list":p(ve)?p(he):p(ye),"is-only-view":p(ve),"active-index":p(fe),text:p(ve)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":p(ve)?0:p(Ie),onSubmit:Oe,onOnCloseFilePreviewByMask:be},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):f("",!0),c(N,{"is-share":p(ne).isShare&&!p(X),premium:null==(t=p(_e))?void 0:t.initialPremium,"share-info":p(ne),"loading-text":p(ge),"payment-frequency":(null==(l=null==(s=null==(i=null==(n=null==(o=p(xe))?void 0:o.insuredList)?void 0:n[0].productList)?void 0:i[0].riskList)?void 0:s[0])?void 0:l.paymentFrequency)+"","tenant-product-detail":p(le),"handle-share":e=>(e=>{se.value.validateHolder(["mobile"]).then((()=>{Object.assign(J.value,{extInfo:{...J.value.extInfo,buttonCode:q.INFO_COLLECTION,pageCode:D.INFO_COLLECTION}});const a=se.value.getUserData(),t=E({...xe.value,holder:null==a?void 0:a.holder},_e.value||{},J.value);T(t,((a,t)=>{t===C.JUMP_PAGE&&(null==e||e())}))})).catch((()=>{j("请录入投保人手机号后进行分享")}))})(e),disabled:!p(_e),onHandleClick:Te},{default:v((()=>[I("下一步")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","disabled"])])}}});export{B as default};
