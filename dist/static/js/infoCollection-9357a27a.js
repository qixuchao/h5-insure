import{d as e,R as a,U as t,u as o,A as n,r as i,L as l,Y as s,o as r,b as d,c as u,e as c,f as p,g as m,h as f,w as v,a0 as h,j as I,p as y,T as C,P as j,q as O,a1 as b,n as g,a2 as _}from"./index-9e81d346.js";import{t as L}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-f2c0d5bf.js";/* empty css              */import"./useDicData-7841c850.js";import{_ as P}from"./PayInfo-adaee9ee.js";import{g as x,i as w}from"./trial-7a766c2e.js";import{_ as N}from"./TrialButton-34b6203a.js";import{n as T}from"./nextStep-2988484c.js";import{u as V}from"./useAttachment-09df5000.js";import{a as F,q as S}from"./product-ebf78813.js";import{g as k}from"./utils-dbdf01d4.js";import{u as U}from"./useOrder-b56b6153.js";import{P as D,B as q}from"./constants-7afb7c3d.js";import{t as E}from"./utils-a89cc71d.js";import{T as A}from"./index-13e42a9d.js";import"./isObjectLike-a9798079.js";import"./phoneVerify-5e914711.js";import"./merge-84cb998c.js";import"./keysIn-b1e7a5ec.js";import"./index-f99ce6eb.js";import"./_getTag-5c78de73.js";import"./debounce-6981b306.js";import"./index-3e85d93a.js";import"./bankCard-27cc9e75.js";import"./index-0a0ef1d7.js";import"./core-689b4a05.js";import"./constant-8927d485.js";import"./infoCollection-dee98521.js";import"./trial-7ab29eac.js";import"./createProposal-0d2f5767.js";import"./cloneDeep-f5e28e96.js";import"./index-abb2089a.js";import"./index-2a596e25.js";import"./index-56e2c7d3.js";import"./empty-ae586b6c.js";import"./box-title-d767e088.js";import"./index-35310a4d.js";const R={class:"long-info-collection"},B=e({__name:"infoCollection",setup(e){const B=a((()=>t((()=>import("./index-8e75c2d6.js")),["static/js/index-8e75c2d6.js","static/css/index-fa4edf2a.css","static/js/index-9e81d346.js","static/css/index-9494d932.css","static/js/theme-65292714.js","static/js/index-0a0ef1d7.js","static/css/index-827a8544.css","static/js/utils-dbdf01d4.js","static/js/infoCollection-dee98521.js","static/js/trial-7ab29eac.js"]))),M=a((()=>t((()=>import("./index-0acfafd4.js")),["static/js/index-0acfafd4.js","static/css/index-4640d9aa.css","static/js/index-9e81d346.js","static/css/index-9494d932.css"]))),H=o(),J=U(),{productCode:G="",tenantId:W,agentCode:Y="",agencyCode:$,saleChannelId:Q,isShare:X,orderNo:z,extraInfo:K,insurerCode:Z,preview:ee}=H.query;let ae={};try{ae=JSON.parse(decodeURIComponent(K))}catch(Fe){}const te=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},defaultValue:null,isAutoChange:!1,defaultPlanCode:"",userData:{}}),oe=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,ne=i({imgUrl:"",desc:"",title:"",link:oe}),ie=i();i();const le=i(),se=i({}),re=i({}),de=i([]),ue=i(),ce=i({}),pe=i(!1),me=i(!1),fe=i(0),ve=i(!0),{fileList:he,mustReadFileCount:Ie,popupFileList:ye}=V(ce,ue),Ce=i(!1),je=i(!1),Oe=()=>{me.value=!1,ve.value=!0,de.value.length<1||(pe.value=!0)},be=()=>{pe.value=!1,me.value=!1,ve.value=!0};i({}),i(!1),i([{}]);const ge=i(""),_e=i(0),Le=i(!1);i(),i(),i(),l((()=>{var e,a;const{insureProductRiskVOList:t}=(null==(a=null==(e=re.value)?void 0:e.productPlanInsureVOList)?void 0:a[0])||{};return(t||[]).find((e=>e.mainRiskFlag===s.YES))}));const Pe=i(0);i({});const xe=i(),we=()=>{ge.value="试算中...",_e.value=0,Le.value=!0},Ne=(e,a)=>{ge.value="",Pe.value=e.premium,_e.value=e,xe.value=a,Le.value=!1},Te=async()=>{var e,a;if(ee)return void y(D.INFO_COLLECTION,H.query);if(!_e.value)return;const t=[];le.value&&t.push(null==(e=le.value)?void 0:e.validate(!1)),ie.value&&t.push(null==(a=ie.value)?void 0:a.validate(!1)),Promise.all(t).then((()=>{if(!Ce.value)return void C("请勾选投保人阅读并接受");Object.assign(J.value,{extInfo:{...J.value.extInfo,buttonCode:q.INFO_COLLECTION,pageCode:D.INFO_COLLECTION}});const e=le.value.dealMixData(),a=E({...e,productCode:G,productName:re.value.productName},_e.value,J.value);T(a,((e,a)=>{a===j.JUMP_PAGE&&O(e.nextPageCode,H.query)}))}))};n({tenantOrderPayInfoList:[]});const Ve=async()=>{F({productCode:G,tenantId:W}).then((({data:e,code:a})=>{if("10000"===a){se.value=e;const{wxShareConfig:a,showWXShare:t,title:o,desc:n,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};t?Object.assign(ne.value,{...a,imgUrl:a.image,isShare:t}):Object.assign(ne.value,{title:o,desc:n,imgUrl:i,isShare:t}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&b(e.BASIC_INFO.themeType)}})),z&&await x({orderNo:z,tenantId:W}).then((({code:e,data:a})=>{var t;if("10000"===e){if(_e.value=a.orderAmount,(null==(t=a.insuredList)?void 0:t.length)>0){const{planCode:e}=a.insuredList[0];te.defaultPlanCode=e}Object.assign(J.value,a,{tenantOrderPayInfoList:a.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:G}),te.defaultValue=J.value,je.value=!0}})),S({productCode:G}).then((({code:e,data:a})=>{var t,o,n,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:l}=a;ue.value=e||[];const{basicInfo:{questionnaireType:s},questions:r,questionnaireName:d}=(null==(t=null==l?void 0:l[0])?void 0:t.questionnaireDetailResponseVO)||{basicInfo:{}};s&&(de.value=2===s?[{attachmentName:d,attachmentUri:r,attachmentType:"question"}]:[{attachmentName:d,attachmentUri:null==(o=null==r?void 0:r[0])?void 0:o.content,attachmentType:k(String(null==(n=null==r?void 0:r[0])?void 0:n.textType),null==(i=null==r?void 0:r[0])?void 0:i.content)}])}})),await w({productCode:G,isTenant:!ee}).then((({data:e,code:a})=>{var t;if("10000"===a){re.value=e,console.log("state.defaultPlanCode",te.defaultPlanCode),ce.value=e.productPlanInsureVOList.find((e=>e.planCode===te.defaultPlanCode))||{};const{payInfo:a}=L(null==(t=ce.value)?void 0:t.productFactor);te.payInfo={...te.payInfo,...a}}}))};return r((()=>{Ve()})),(e,a)=>{var t,o,n,i,l,s;const r=g,y=_;return d(),u("div",R,[c(r),p(je)||p(ee)?(d(),m(A,{key:0,ref_key:"personalInfoRef",ref:le,"data-source":p(ce),"product-info":{productCode:p(G),productName:p(re).productName,insurerCode:p(Z),tenantId:p(W),planList:p(re).productPlanInsureVOList},"tenant-product-detail":p(se),"hide-benefit":"","default-data":[p(te).defaultValue],onTrialStart:we,onTrialEnd:Ne,"onUpdate:userData":a[0]||(a[0]=e=>p(te).userData=e)},null,8,["data-source","product-info","tenant-product-detail","default-data"])):f("",!0),p(te).payInfo.schema.length?(d(),m(p(P),{key:1,ref_key:"payInfoRef",ref:ie,modelValue:p(J).tenantOrderPayInfoList,"onUpdate:modelValue":a[1]||(a[1]=e=>p(J).tenantOrderPayInfoList=e),schema:p(te).payInfo.schema,"is-view":p(te).isView,"user-data":p(te).userData},null,8,["modelValue","schema","is-view","user-data"])):f("",!0),c(y,null,{default:v((()=>{var e;return[(null==(e=p(he))?void 0:e.length)?(d(),m(p(M),{key:0,modelValue:p(Ce),"onUpdate:modelValue":a[2]||(a[2]=e=>h(Ce)?Ce.value=e:null),"attachment-list":p(he),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[3]||(a[3]=e=>(e=>{fe.value=e,me.value=!0})(e))},null,8,["modelValue","attachment-list"])):f("",!0)]})),_:1}),p(me)?(d(),m(p(B),{key:2,show:p(me),"onUpdate:show":a[4]||(a[4]=e=>h(me)?me.value=e:null),"content-list":p(ve)?p(he):p(ye),"is-only-view":p(ve),"active-index":p(fe),text:p(ve)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":p(ve)?0:p(Ie),onSubmit:Oe,onOnCloseFilePreviewByMask:be},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):f("",!0),c(N,{"is-share":p(ne).isShare&&!p(X),premium:null==(t=p(_e))?void 0:t.initialPremium,"share-info":p(ne),"loading-text":p(ge),"payment-frequency":(null==(s=null==(l=null==(i=null==(n=null==(o=p(xe))?void 0:o.insuredList)?void 0:n[0].productList)?void 0:i[0].riskList)?void 0:l[0])?void 0:s.paymentFrequency)+"","tenant-product-detail":p(se),"handle-share":e=>(e=>{le.value.validateHolder(["mobile"]).then((()=>{Object.assign(J.value,{extInfo:{...J.value.extInfo,buttonCode:q.INFO_COLLECTION,pageCode:D.INFO_COLLECTION}});const a=le.value.getUserData(),t=E({...xe.value,holder:null==a?void 0:a.holder},_e.value||{},J.value);T(t,((a,t)=>{t===j.JUMP_PAGE&&(null==e||e())}))})).catch((()=>{C("请录入投保人手机号后进行分享")}))})(e),disabled:!p(_e),onHandleClick:Te},{default:v((()=>[I("下一步")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","disabled"])])}}});export{B as default};
