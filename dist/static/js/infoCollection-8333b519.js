import{d as e,a4 as a,a5 as t,h as o,r as n,i,j as l,a6 as s,av as r,o as u,c as d,b as c,u as f,l as p,q as m,w as v,m as h,a8 as I,aB as C,T as y,aC as O,a9 as j,bN as g,bk as b,aa as L,ab as P}from"./index-f919c47f.js";import{_ as x}from"./PolicyInfo-a974ff18.js";import{g as _,i as w}from"./trial-b8186cae.js";import{_ as N}from"./TrialButton-2af7982b.js";import{n as V}from"./nextStep-e377dfe1.js";import{u as T}from"./useAttachment-febebc05.js";import{a as S,b as F}from"./product-6a7e7612.js";import{g as U}from"./utils-f772ac3e.js";import{u as k}from"./useOrder-220ede06.js";import{P as E,B as q}from"./constants-96ce8602.js";import{t as D}from"./utils-31302288.js";import A from"./index-3a3c659b.js";import"./index-6f2d4c5f.js";import"./core-3a48e1af.js";import"./constants-fe95ef6f.js";import"./infoCollection-a69ca12a.js";import"./trial-33474385.js";import"./createProposal-9c8c3996.js";import"./cloneDeep-38d03c69.js";import"./index-c44ffdf8.js";import"./get-85e18984.js";import"./index-7c787ccb.js";import"./search-7f178b38.js";import"./config-98e8d477.js";import"./product-585b0e6f.js";import"./index-de590a0b.js";import"./index-ea1d3a43.js";import"./empty-ae586b6c.js";import"./box-title-ada52f78.js";import"./index-63ba6863.js";import"./isNaN-dacf5e9e.js";const R={class:"long-info-collection"},B=e({__name:"infoCollection",setup(e){const B=a((()=>t((()=>import("./index-fd3d64e2.js")),["static/js/index-fd3d64e2.js","static/css/index-fa4edf2a.css","static/js/index-f919c47f.js","static/css/index-3d26afdd.css","static/js/theme-94cf7d00.js","static/js/index-6f2d4c5f.js","static/css/index-bbfdd7ec.css","static/js/utils-f772ac3e.js","static/js/infoCollection-a69ca12a.js","static/js/trial-33474385.js"]))),M=a((()=>t((()=>import("./index-ad77a56d.js")),["static/js/index-ad77a56d.js","static/css/index-cb73c937.css","static/js/index-f919c47f.js","static/css/index-3d26afdd.css"]))),H=o(),J=k(),{productCode:G="",tenantId:$,agentCode:Q="",agencyCode:W,saleChannelId:X,isShare:Y,orderNo:z,extraInfo:K,insurerCode:Z,preview:ee}=H.query;let ae={};try{ae=JSON.parse(decodeURIComponent(K))}catch(Se){}const te=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},defaultValue:null,isAutoChange:!1,defaultPlanCode:"",userData:{}}),oe=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,ne=i({imgUrl:"",desc:"",title:"",link:oe}),ie=i();i();const le=i(),se=i({}),re=i({}),ue=i([]),de=i(),ce=i({}),fe=i(!1),pe=i(!1),me=i(0),ve=i(!0),{fileList:he,mustReadFileCount:Ie,popupFileList:Ce}=T(ce,de),ye=i(!1),Oe=i(!1),je=()=>{pe.value=!1,ve.value=!0,ue.value.length<1||(fe.value=!0)},ge=()=>{fe.value=!1,pe.value=!1,ve.value=!0};i({}),i(!1),i([{}]);const be=i(""),Le=i(0),Pe=i(!1);i(),i(),i(),l((()=>{var e,a;const{insureProductRiskVOList:t}=(null==(a=null==(e=re.value)?void 0:e.productPlanInsureVOList)?void 0:a[0])||{};return(t||[]).find((e=>e.mainRiskFlag===s.YES))}));const xe=i(0);i({});const _e=i(),we=()=>{be.value="试算中...",Le.value=0,Pe.value=!0},Ne=(e,a)=>{be.value="",xe.value=e.premium,Le.value=e,_e.value=a,Pe.value=!1},Ve=async()=>{var e,a;if(ee)return void C(E.INFO_COLLECTION,H.query);if(!Le.value)return;const t=[];le.value&&t.push(null==(e=le.value)?void 0:e.validate(!1)),ie.value&&t.push(null==(a=ie.value)?void 0:a.validate(!1)),Promise.all(t).then((()=>{if(!ye.value)return void y("请勾选投保人阅读并接受");Object.assign(J.value,{extInfo:{...J.value.extInfo,buttonCode:q.INFO_COLLECTION,pageCode:E.INFO_COLLECTION}});const e=le.value.dealMixData(),a=D({...e,productCode:G,productName:re.value.productName},Le.value,J.value);V(a,((e,a)=>{a===O.JUMP_PAGE&&j(e.nextPageCode,H.query)}))}))};n({tenantOrderPayInfoList:[]});const Te=async()=>{S({productCode:G,tenantId:$}).then((({data:e,code:a})=>{if("10000"===a){se.value=e;const{wxShareConfig:a,showWXShare:t,title:o,desc:n,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};t?Object.assign(ne.value,{...a,imgUrl:a.image,isShare:t}):Object.assign(ne.value,{title:o,desc:n,imgUrl:i,isShare:t}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&g(e.BASIC_INFO.themeType)}})),z&&await _({orderNo:z,tenantId:$}).then((({code:e,data:a})=>{var t;if("10000"===e){if(Le.value=a.orderAmount,(null==(t=a.insuredList)?void 0:t.length)>0){const{planCode:e}=a.insuredList[0];te.defaultPlanCode=e}Object.assign(J.value,a,{tenantOrderPayInfoList:a.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:G}),te.defaultValue=J.value,Oe.value=!0}})),F({productCode:G}).then((({code:e,data:a})=>{var t,o,n,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:l}=a;de.value=e||[];const{basicInfo:{questionnaireType:s},questions:r,questionnaireName:u}=(null==(t=null==l?void 0:l[0])?void 0:t.questionnaireDetailResponseVO)||{basicInfo:{}};s&&(ue.value=2===s?[{attachmentName:u,attachmentUri:r,attachmentType:"question"}]:[{attachmentName:u,attachmentUri:null==(o=null==r?void 0:r[0])?void 0:o.content,attachmentType:U(String(null==(n=null==r?void 0:r[0])?void 0:n.textType),null==(i=null==r?void 0:r[0])?void 0:i.content)}])}})),await w({productCode:G,isTenant:!ee}).then((({data:e,code:a})=>{var t;if("10000"===a){re.value=e,ce.value=e.productPlanInsureVOList.find((e=>!te.defaultPlanCode||e.planCode===te.defaultPlanCode))||{};const{payInfo:a}=b(null==(t=ce.value)?void 0:t.productFactor);te.payInfo={...te.payInfo,...a}}}))};return r((()=>{Te()})),(e,a)=>{var t,o,n,i,l,s;const r=L,C=P;return u(),d("div",R,[c(r),f(Oe)||f(ee)?(u(),p(A,{key:0,ref_key:"personalInfoRef",ref:le,"data-source":f(ce),"product-info":{productCode:f(G),productName:f(re).productName,insurerCode:f(Z),tenantId:f($),planList:f(re).productPlanInsureVOList},"tenant-product-detail":f(se),"hide-benefit":"","default-data":[f(te).defaultValue],onTrialStart:we,onTrialEnd:Ne,"onUpdate:userData":a[0]||(a[0]=e=>f(te).userData=e)},null,8,["data-source","product-info","tenant-product-detail","default-data"])):m("",!0),f(te).payInfo.schema.length?(u(),p(f(x),{key:1,ref_key:"payInfoRef",ref:ie,modelValue:f(J).tenantOrderPayInfoList,"onUpdate:modelValue":a[1]||(a[1]=e=>f(J).tenantOrderPayInfoList=e),schema:f(te).payInfo.schema,"is-view":f(te).isView,"user-data":f(te).userData},null,8,["modelValue","schema","is-view","user-data"])):m("",!0),c(C,null,{default:v((()=>{var e;return[(null==(e=f(he))?void 0:e.length)?(u(),p(f(M),{key:0,modelValue:f(ye),"onUpdate:modelValue":a[2]||(a[2]=e=>h(ye)?ye.value=e:null),"has-bg-color":!1,"attachment-list":f(he),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[3]||(a[3]=e=>(e=>{me.value=e,pe.value=!0})(e))},null,8,["modelValue","attachment-list"])):m("",!0)]})),_:1}),f(pe)?(u(),p(f(B),{key:2,show:f(pe),"onUpdate:show":a[4]||(a[4]=e=>h(pe)?pe.value=e:null),"content-list":f(ve)?f(he):f(Ce),"is-only-view":f(ve),"active-index":f(me),text:f(ve)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":f(ve)?0:f(Ie),onSubmit:je,onOnCloseFilePreviewByMask:ge},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):m("",!0),c(N,{"is-share":f(ne).isShare&&!f(Y),premium:null==(t=f(Le))?void 0:t.initialPremium,"share-info":f(ne),"loading-text":f(be),"payment-frequency":(null==(s=null==(l=null==(i=null==(n=null==(o=f(_e))?void 0:o.insuredList)?void 0:n[0].productList)?void 0:i[0].riskList)?void 0:l[0])?void 0:s.paymentFrequency)+"","tenant-product-detail":f(se),"handle-share":e=>(e=>{le.value.validateHolder(["mobile"]).then((()=>{Object.assign(J.value,{extInfo:{...J.value.extInfo,buttonCode:q.INFO_COLLECTION,pageCode:E.INFO_COLLECTION}});const a=le.value.getUserData(),t=D({..._e.value,holder:null==a?void 0:a.holder},Le.value||{},J.value);V(t,((a,t)=>{t===O.JUMP_PAGE&&(null==e||e())}))})).catch((()=>{y("请录入投保人手机号后进行分享")}))})(e),disabled:!f(Le),onHandleClick:Ve},{default:v((()=>[I("下一步")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","disabled"])])}}});export{B as default};
