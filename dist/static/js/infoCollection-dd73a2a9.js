import{d as e,L as a,M as t,u as o,ar as n,r as i,G as s,Y as l,o as r,b as d,c as u,e as c,f as p,g as m,h as f,w as v,V as h,j as I,n as j,T as y,P as C,p as O,W as g,m as b,X as L}from"./index-ade84c05.js";import{_ as P,t as x}from"./PayInfo-9dd54491.js";import{g as _,i as w}from"./trial-0bdafdfb.js";import{_ as N}from"./TrialButton-d8118e1c.js";import{n as V}from"./nextStep-39f10929.js";import{u as T}from"./useAttachment-79e0c7c8.js";import{a as S,q as k}from"./product-3b818c93.js";import{g as F}from"./utils-4596f6c0.js";import{u as D}from"./useOrder-f640516c.js";import{P as U,B as E}from"./constants-7afb7c3d.js";import{t as q}from"./utils-6778a131.js";import A from"./index-a69c336f.js";import"./merge-c5599fa4.js";import"./keysIn-a287568b.js";import"./isObjectLike-a9798079.js";import"./_getTag-7f09858e.js";import"./debounce-6981b306.js";import"./phoneVerify-564775f0.js";import"./index-4fd2cd47.js";import"./useDicData-cc904247.js";import"./bankCard-293d6a50.js";import"./index-6da85669.js";import"./core-7dc31717.js";import"./constant-8927d485.js";import"./infoCollection-a7ee1230.js";import"./trial-b1ab60ab.js";import"./createProposal-7a6b1573.js";import"./cloneDeep-96676b66.js";import"./index-d58ed2ca.js";import"./index-d7949418.js";import"./config-98e8d477.js";import"./product-585b0e6f.js";import"./index-d8c88a13.js";import"./index-3e3f4462.js";import"./empty-ae586b6c.js";import"./box-title-781a86d4.js";import"./index-807f10d0.js";import"./isNaN-beb28144.js";const R={class:"long-info-collection"},B=e({__name:"infoCollection",setup(e){const B=a((()=>t((()=>import("./index-e6372fd6.js")),["static/js/index-e6372fd6.js","static/css/index-fa4edf2a.css","static/js/index-ade84c05.js","static/css/index-9a205895.css","static/js/theme-94cf7d00.js","static/js/index-6da85669.js","static/css/index-bbfdd7ec.css","static/js/utils-4596f6c0.js","static/js/infoCollection-a7ee1230.js","static/js/trial-b1ab60ab.js"]))),M=a((()=>t((()=>import("./index-b17a4552.js")),["static/js/index-b17a4552.js","static/css/index-cb73c937.css","static/js/index-ade84c05.js","static/css/index-9a205895.css"]))),G=o(),H=D(),{productCode:J="",tenantId:W,agentCode:X="",agencyCode:Y,saleChannelId:$,isShare:Q,orderNo:z,extraInfo:K,insurerCode:Z,preview:ee}=G.query;let ae={};try{ae=JSON.parse(decodeURIComponent(K))}catch(Se){}const te=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},defaultValue:null,isAutoChange:!1,defaultPlanCode:"",userData:{}}),oe=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,ne=i({imgUrl:"",desc:"",title:"",link:oe}),ie=i();i();const se=i(),le=i({}),re=i({}),de=i([]),ue=i(),ce=i({}),pe=i(!1),me=i(!1),fe=i(0),ve=i(!0),{fileList:he,mustReadFileCount:Ie,popupFileList:je}=T(ce,ue),ye=i(!1),Ce=i(!1),Oe=()=>{me.value=!1,ve.value=!0,de.value.length<1||(pe.value=!0)},ge=()=>{pe.value=!1,me.value=!1,ve.value=!0};i({}),i(!1),i([{}]);const be=i(""),Le=i(0),Pe=i(!1);i(),i(),i(),s((()=>{var e,a;const{insureProductRiskVOList:t}=(null==(a=null==(e=re.value)?void 0:e.productPlanInsureVOList)?void 0:a[0])||{};return(t||[]).find((e=>e.mainRiskFlag===l.YES))}));const xe=i(0);i({});const _e=i(),we=()=>{be.value="试算中...",Le.value=0,Pe.value=!0},Ne=(e,a)=>{be.value="",xe.value=e.premium,Le.value=e,_e.value=a,Pe.value=!1},Ve=async()=>{var e,a;if(ee)return void j(U.INFO_COLLECTION,G.query);if(!Le.value)return;const t=[];se.value&&t.push(null==(e=se.value)?void 0:e.validate(!1)),ie.value&&t.push(null==(a=ie.value)?void 0:a.validate(!1)),Promise.all(t).then((()=>{if(!ye.value)return void y("请勾选投保人阅读并接受");Object.assign(H.value,{extInfo:{...H.value.extInfo,buttonCode:E.INFO_COLLECTION,pageCode:U.INFO_COLLECTION}});const e=se.value.dealMixData(),a=q({...e,productCode:J,productName:re.value.productName},Le.value,H.value);V(a,((e,a)=>{a===C.JUMP_PAGE&&O(e.nextPageCode,G.query)}))}))};n({tenantOrderPayInfoList:[]});const Te=async()=>{S({productCode:J,tenantId:W}).then((({data:e,code:a})=>{if("10000"===a){le.value=e;const{wxShareConfig:a,showWXShare:t,title:o,desc:n,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};t?Object.assign(ne.value,{...a,imgUrl:a.image,isShare:t}):Object.assign(ne.value,{title:o,desc:n,imgUrl:i,isShare:t}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&g(e.BASIC_INFO.themeType)}})),z&&await _({orderNo:z,tenantId:W}).then((({code:e,data:a})=>{var t;if("10000"===e){if(Le.value=a.orderAmount,(null==(t=a.insuredList)?void 0:t.length)>0){const{planCode:e}=a.insuredList[0];te.defaultPlanCode=e}Object.assign(H.value,a,{tenantOrderPayInfoList:a.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:J}),te.defaultValue=H.value,Ce.value=!0}})),k({productCode:J}).then((({code:e,data:a})=>{var t,o,n,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:s}=a;ue.value=e||[];const{basicInfo:{questionnaireType:l},questions:r,questionnaireName:d}=(null==(t=null==s?void 0:s[0])?void 0:t.questionnaireDetailResponseVO)||{basicInfo:{}};l&&(de.value=2===l?[{attachmentName:d,attachmentUri:r,attachmentType:"question"}]:[{attachmentName:d,attachmentUri:null==(o=null==r?void 0:r[0])?void 0:o.content,attachmentType:F(String(null==(n=null==r?void 0:r[0])?void 0:n.textType),null==(i=null==r?void 0:r[0])?void 0:i.content)}])}})),await w({productCode:J,isTenant:!ee}).then((({data:e,code:a})=>{var t;if("10000"===a){re.value=e,ce.value=e.productPlanInsureVOList.find((e=>!te.defaultPlanCode||e.planCode===te.defaultPlanCode))||{};const{payInfo:a}=x(null==(t=ce.value)?void 0:t.productFactor);te.payInfo={...te.payInfo,...a}}}))};return r((()=>{Te()})),(e,a)=>{var t,o,n,i,s,l;const r=b,j=L;return d(),u("div",R,[c(r),p(Ce)||p(ee)?(d(),m(A,{key:0,ref_key:"personalInfoRef",ref:se,"data-source":p(ce),"product-info":{productCode:p(J),productName:p(re).productName,insurerCode:p(Z),tenantId:p(W),planList:p(re).productPlanInsureVOList},"tenant-product-detail":p(le),"hide-benefit":"","default-data":[p(te).defaultValue],onTrialStart:we,onTrialEnd:Ne,"onUpdate:userData":a[0]||(a[0]=e=>p(te).userData=e)},null,8,["data-source","product-info","tenant-product-detail","default-data"])):f("",!0),p(te).payInfo.schema.length?(d(),m(p(P),{key:1,ref_key:"payInfoRef",ref:ie,modelValue:p(H).tenantOrderPayInfoList,"onUpdate:modelValue":a[1]||(a[1]=e=>p(H).tenantOrderPayInfoList=e),schema:p(te).payInfo.schema,"is-view":p(te).isView,"user-data":p(te).userData},null,8,["modelValue","schema","is-view","user-data"])):f("",!0),c(j,null,{default:v((()=>{var e;return[(null==(e=p(he))?void 0:e.length)?(d(),m(p(M),{key:0,modelValue:p(ye),"onUpdate:modelValue":a[2]||(a[2]=e=>h(ye)?ye.value=e:null),"has-bg-color":!1,"attachment-list":p(he),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[3]||(a[3]=e=>(e=>{fe.value=e,me.value=!0})(e))},null,8,["modelValue","attachment-list"])):f("",!0)]})),_:1}),p(me)?(d(),m(p(B),{key:2,show:p(me),"onUpdate:show":a[4]||(a[4]=e=>h(me)?me.value=e:null),"content-list":p(ve)?p(he):p(je),"is-only-view":p(ve),"active-index":p(fe),text:p(ve)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":p(ve)?0:p(Ie),onSubmit:Oe,onOnCloseFilePreviewByMask:ge},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):f("",!0),c(N,{"is-share":p(ne).isShare&&!p(Q),premium:null==(t=p(Le))?void 0:t.initialPremium,"share-info":p(ne),"loading-text":p(be),"payment-frequency":(null==(l=null==(s=null==(i=null==(n=null==(o=p(_e))?void 0:o.insuredList)?void 0:n[0].productList)?void 0:i[0].riskList)?void 0:s[0])?void 0:l.paymentFrequency)+"","tenant-product-detail":p(le),"handle-share":e=>(e=>{se.value.validateHolder(["mobile"]).then((()=>{Object.assign(H.value,{extInfo:{...H.value.extInfo,buttonCode:E.INFO_COLLECTION,pageCode:U.INFO_COLLECTION}});const a=se.value.getUserData(),t=q({..._e.value,holder:null==a?void 0:a.holder},Le.value||{},H.value);V(t,((a,t)=>{t===C.JUMP_PAGE&&(null==e||e())}))})).catch((()=>{y("请录入投保人手机号后进行分享")}))})(e),disabled:!p(Le),onHandleClick:Ve},{default:v((()=>[I("下一步")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","disabled"])])}}});export{B as default};
