import{d as e,X as a,Y as t,u as o,z as n,r as i,L as l,Z as s,o as r,b as d,c as u,e as c,w as p,f as m,g as f,k as v,as as h,at as I,i as j,j as y,h as O,a2 as C,n as _,T as b,P as g,p as x,a3 as P,a4 as L}from"./index-55b89ead.js";import{t as w}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-502f96c9.js";/* empty css              */import"./bankCard-3134bcc6.js";import{_ as V}from"./PayInfo-a20fafdf.js";import{g as T,i as N}from"./trial-87e62079.js";import{_ as k}from"./TrialButton-f297493d.js";import{n as F}from"./nextStep-ed76fdcd.js";import{u as S}from"./useAttachment-35875805.js";import{a as E,q}from"./product-9c3a80f2.js";import{g as R}from"./utils-cfee9413.js";import{u as U}from"./useOrder-6df4737d.js";import{P as A,B as D}from"./constants-7afb7c3d.js";import{t as B}from"./utils-d0f9fa5a.js";import{T as H}from"./index-9fd5d577.js";import"./pdfh5-008ca364.js";import"./phoneVerify-014b793d.js";import"./_initCloneObject-0663309f.js";import"./isObjectLike-a9798079.js";import"./debounce-eed12388.js";import"./index-5bf95f10.js";import"./index-dd087d45.js";import"./index-8ef997a4.js";import"./core-43424aeb.js";import"./constant-8927d485.js";import"./infoCollection-9f9967ad.js";import"./trial-f17098e9.js";import"./createProposal-c9e884f9.js";import"./index-b23ee3e0.js";import"./cloneDeep-1de8e9b0.js";import"./index-d9e4ee02.js";import"./index-878b5e2f.js";import"./empty-c926d8ec.js";import"./box-title-6e808626.js";import"./index-0eb05323.js";import"./echarts-ac920fed.js";import"./Table-112b1e7d.js";const M={class:"long-info-collection"},J=e({__name:"infoCollection",setup(e){const J=a((()=>t((()=>import("./index-32f54c29.js")),["static/js/index-32f54c29.js","static/css/index-fa4edf2a.css","static/js/index-55b89ead.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js","static/js/index-8ef997a4.js","static/css/index-827a8544.css","static/js/utils-cfee9413.js","static/js/infoCollection-9f9967ad.js","static/js/trial-f17098e9.js"]))),W=a((()=>t((()=>import("./index-2748f49a.js")),["static/js/index-2748f49a.js","static/css/index-3329e46f.css","static/js/index-55b89ead.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js"]))),$=o(),G=U(),{productCode:X="",tenantId:Y,agentCode:z="",agencyCode:Q,saleChannelId:Z,isShare:K,orderNo:ee,extraInfo:ae,insurerCode:te,preview:oe}=$.query;let ne={};try{ne=JSON.parse(decodeURIComponent(ae))}catch(Fe){}const ie=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},defaultValue:null,isAutoChange:!1}),le=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,se=i({imgUrl:"",desc:"",title:"",link:le}),re=i(),de=i(),ue=i({}),ce=i({}),pe=i([]),me=i(),fe=i({}),ve=i(!1),he=i(!1),Ie=i(0),je=i(!0),{fileList:ye,mustReadFileCount:Oe,popupFileList:Ce}=S(fe,me),_e=i(!1),be=i(!1),ge=()=>{he.value=!1,je.value=!0,pe.value.length<1||(ve.value=!0)},xe=()=>{ve.value=!1,he.value=!1,je.value=!0};i({}),i(!1),i([{}]);const Pe=i(""),Le=i(0),we=i(!1);i(),i(),i(),l((()=>{var e,a;const{insureProductRiskVOList:t}=(null==(a=null==(e=ce.value)?void 0:e.productPlanInsureVOList)?void 0:a[0])||{};return(t||[]).find((e=>e.mainRiskFlag===s.YES))}));const Ve=i(0);i({});const Te=()=>{Pe.value="试算中...",Le.value=0,we.value=!0},Ne=e=>{Pe.value="",Ve.value=e.premium,Le.value=e,we.value=!1};n({tenantOrderPayInfoList:[]});const ke=async()=>{E({productCode:X,tenantId:Y}).then((({data:e,code:a})=>{if("10000"===a){ue.value=e;const{wxShareConfig:a,showWXShare:t,title:o,desc:n,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};t?Object.assign(se.value,{...a,isShare:t}):Object.assign(se.value,{title:o,desc:n,image:i,isShare:t}),P(e.BASIC_INFO.themeType)}})),ee&&T({orderNo:ee,tenantId:Y}).then((({code:e,data:a})=>{"10000"===e&&(Le.value=a.orderAmount,Object.assign(G.value,a,{tenantOrderPayInfoList:a.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:X}),ie.defaultValue=G.value,be.value=!0)})),q({productCode:X}).then((({code:e,data:a})=>{var t,o,n,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:l}=a;me.value=e||[];const{basicInfo:{questionnaireType:s},questions:r,questionnaireName:d}=(null==(t=null==l?void 0:l[0])?void 0:t.questionnaireDetailResponseVO)||{basicInfo:{}};s&&(pe.value=2===s?[{attachmentName:d,attachmentUri:r,attachmentType:"question"}]:[{attachmentName:d,attachmentUri:null==(o=null==r?void 0:r[0])?void 0:o.content,attachmentType:R(String(null==(n=null==r?void 0:r[0])?void 0:n.textType),null==(i=null==r?void 0:r[0])?void 0:i.content)}])}})),await N({productCode:X,isTenant:!oe}).then((({data:e,code:a})=>{var t,o;if("10000"===a){ce.value=e,fe.value=(null==(t=e.productPlanInsureVOList)?void 0:t[0])||{};const{payInfo:a}=w(null==(o=fe.value)?void 0:o.productFactor);ie.payInfo={...ie.payInfo,...a}}}))};return r((()=>{ke()})),(e,a)=>{const t=L,o=d("ProPageWrap");return u(),c(o,null,{default:p((()=>[m("div",M,[f(ie).defaultValue?(u(),c(H,{key:0,"data-source":f(fe),"product-info":{productCode:f(X),productName:f(ce).productName,insurerCode:f(te),tenantId:f(Y)},"tenant-product-detail":f(ue),"hide-benefit":"","default-data":[f(ie).defaultValue],onTrialStart:Te,onTrialEnd:Ne},{trialBtn:p((a=>[v(e.$slots,"trialBtn",h(I(a)),(()=>{var e,t,o,n,i,l;return[j(k,{"is-share":f(se).isShare&&!f(K),premium:null==(e=a.riskPremium)?void 0:e.initialPremium,"share-info":f(se),"loading-text":f(Pe),"payment-frequency":(null==(l=null==(i=null==(n=null==(o=null==(t=a.trialData)?void 0:t.insuredList)?void 0:o[0].productList)?void 0:n[0].riskList)?void 0:i[0])?void 0:l.paymentFrequency)+"","tenant-product-detail":f(ue),"handle-share":e=>((e,a)=>{de.value.validateHolder("mobile").then((()=>{Object.assign(G.value,{extInfo:{...G.value.extInfo,buttonCode:D.INFO_COLLECTION,pageCode:A.INFO_COLLECTION}});const t=B(a,Le.value,G.value);F(t,((a,t)=>{t===g.JUMP_PAGE&&(null==e||e())}))})).catch((()=>{b("请录入投保人手机号后进行分享")}))})(e,a.trialData),onHandleClick:e=>(async e=>{var a,t,o;oe?_(A.INFO_COLLECTION,$.query):_e.value?Promise.all([null==(a=de.value)?void 0:a.validate(!1),null==(o=null==(t=re.value)?void 0:t.validate)?void 0:o.call(t)]).then((()=>{Object.assign(G.value,{extInfo:{...G.value.extInfo,buttonCode:D.INFO_COLLECTION,pageCode:A.INFO_COLLECTION}});const a=B(e,Le.value,G.value);F(a,((e,a)=>{a===g.JUMP_PAGE&&(console.log("12313"),x(e.nextPageCode,$.query))}))})):b("请勾选投保人阅读并接受")})(a.trialData)},{default:p((()=>[y("下一步")])),_:2},1032,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","onHandleClick"])]}))])),_:3},8,["data-source","product-info","tenant-product-detail","default-data"])):O("",!0),f(ie).payInfo.schema.length?(u(),c(f(V),{key:1,ref_key:"payInfoRef",ref:re,modelValue:f(G).tenantOrderPayInfoList,"onUpdate:modelValue":a[0]||(a[0]=e=>f(G).tenantOrderPayInfoList=e),schema:f(ie).payInfo.schema,"is-view":f(ie).isView},null,8,["modelValue","schema","is-view"])):O("",!0),j(t,null,{default:p((()=>{var e;return[(null==(e=f(ye))?void 0:e.length)?(u(),c(f(W),{key:0,modelValue:f(_e),"onUpdate:modelValue":a[1]||(a[1]=e=>C(_e)?_e.value=e:null),"attachment-list":f(ye),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[2]||(a[2]=e=>(e=>{Ie.value=e,he.value=!0})(e))},null,8,["modelValue","attachment-list"])):O("",!0)]})),_:1}),f(he)?(u(),c(f(J),{key:2,show:f(he),"onUpdate:show":a[3]||(a[3]=e=>C(he)?he.value=e:null),"content-list":f(je)?f(ye):f(Ce),"is-only-view":f(je),"active-index":f(Ie),text:f(je)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":f(je)?0:f(Oe),onSubmit:ge,onOnCloseFilePreviewByMask:xe},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):O("",!0)])])),_:3})}}});export{J as default};
