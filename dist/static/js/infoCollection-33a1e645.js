import{d as e,a4 as a,a5 as t,i as o,r as n,j as i,k as l,a6 as s,aE as r,o as d,c as u,b as c,u as p,m as f,f as m,w as v,p as h,a8 as I,aJ as y,T as C,aK as O,a9 as j,c0 as b,bu as g,aa as L,ab as P}from"./index-ec8e6f24.js";import{_ as x}from"./PolicyInfo-d71b1c1c.js";import{g as _,i as w}from"./trial-73f261ea.js";import{_ as N}from"./TrialButton-b16c5866.js";import{n as V}from"./nextStep-63f57fae.js";import{u as T}from"./useAttachment-759ee6ba.js";import{a as S,c as F}from"./product-abd0fd80.js";import{g as E}from"./utils-a7d701ef.js";import{u as U}from"./useOrder-e506ad81.js";import{P as k,B as D}from"./constants-156ed859.js";import{t as q}from"./utils-b9cc5c6a.js";import A from"./index-edf25992.js";import"./index-117e8b7d.js";import"./core-a05accc5.js";import"./constants-4b08cf92.js";import"./infoCollection-408250ef.js";import"./trial-69460d11.js";import"./createProposal-7d304fb7.js";import"./cloneDeep-ee5be884.js";import"./index-336a12b4.js";import"./index-18e573cc.js";import"./index-e30a3de1.js";import"./search-45fc2a24.js";import"./config-98e8d477.js";import"./product-7bbf9c44.js";import"./index-de590a0b.js";import"./index-9a5c2cf0.js";import"./empty-ae586b6c.js";import"./box-title-e2e582b7.js";import"./index-b1d2ec22.js";import"./isNaN-de07c6d0.js";const R={class:"long-info-collection"},B=e({__name:"infoCollection",setup(e){const B=a((()=>t((()=>import("./index-cede3bf5.js")),["static/js/index-cede3bf5.js","static/css/index-fa4edf2a.css","static/js/index-ec8e6f24.js","static/css/index-10f6931b.css","static/js/theme-94cf7d00.js","static/js/index-117e8b7d.js","static/css/index-bbfdd7ec.css","static/js/utils-a7d701ef.js","static/js/infoCollection-408250ef.js","static/js/trial-69460d11.js"]))),M=a((()=>t((()=>import("./index-bf243c88.js")),["static/js/index-bf243c88.js","static/css/index-bf024e9b.css","static/js/index-ec8e6f24.js","static/css/index-10f6931b.css"]))),J=o(),H=U(),{productCode:G="",tenantId:$,agentCode:K="",agencyCode:Q,saleChannelId:W,isShare:X,orderNo:Y,extraInfo:z,insurerCode:Z,preview:ee}=J.query;let ae={};try{ae=JSON.parse(decodeURIComponent(z))}catch(Se){}const te=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},defaultValue:null,isAutoChange:!1,defaultPlanCode:"",userData:{}}),oe=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,ne=i({imgUrl:"",desc:"",title:"",link:oe}),ie=i();i();const le=i(),se=i({}),re=i({}),de=i([]),ue=i(),ce=i({}),pe=i(!1),fe=i(!1),me=i(0),ve=i(!0),{fileList:he,mustReadFileCount:Ie,popupFileList:ye}=T(ce,ue),Ce=i(!1),Oe=i(!1),je=()=>{fe.value=!1,ve.value=!0,de.value.length<1||(pe.value=!0)},be=()=>{pe.value=!1,fe.value=!1,ve.value=!0};i({}),i(!1),i([{}]);const ge=i(""),Le=i(0),Pe=i(!1);i(),i(),i(),l((()=>{var e,a;const{insureProductRiskVOList:t}=(null==(a=null==(e=re.value)?void 0:e.productPlanInsureVOList)?void 0:a[0])||{};return(t||[]).find((e=>e.mainRiskFlag===s.YES))}));const xe=i(0);i({});const _e=i(),we=()=>{ge.value="试算中...",Le.value=0,Pe.value=!0},Ne=(e,a)=>{ge.value="",xe.value=e.premium,Le.value=e,_e.value=a,Pe.value=!1},Ve=async()=>{var e,a;if(ee)return void y(k.INFO_COLLECTION,J.query);if(!Le.value)return;const t=[];le.value&&t.push(null==(e=le.value)?void 0:e.validate(!1)),ie.value&&t.push(null==(a=ie.value)?void 0:a.validate(!1)),Promise.all(t).then((()=>{if(!Ce.value)return void C("请勾选投保人阅读并接受");Object.assign(H.value,{extInfo:{...H.value.extInfo,buttonCode:D.INFO_COLLECTION,pageCode:k.INFO_COLLECTION}});const e=le.value.dealMixData(),a=q({...e,productCode:G,productName:re.value.productName},Le.value,H.value);V(a,((e,a)=>{a===O.JUMP_PAGE&&j(e.nextPageCode,J.query)}))}))};n({tenantOrderPayInfoList:[]});const Te=async()=>{S({productCode:G,tenantId:$}).then((({data:e,code:a})=>{if("10000"===a){se.value=e;const{wxShareConfig:a,showWXShare:t,title:o,desc:n,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};t?Object.assign(ne.value,{...a,imgUrl:a.image,isShare:t}):Object.assign(ne.value,{title:o,desc:n,imgUrl:i,isShare:t}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&b(e.BASIC_INFO.themeType)}})),Y&&await _({orderNo:Y,tenantId:$}).then((({code:e,data:a})=>{var t;if("10000"===e){if(Le.value=a.orderAmount,(null==(t=a.insuredList)?void 0:t.length)>0){const{planCode:e}=a.insuredList[0];te.defaultPlanCode=e}Object.assign(H.value,a,{tenantOrderPayInfoList:a.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:G}),te.defaultValue=H.value,Oe.value=!0}})),F({productCode:G}).then((({code:e,data:a})=>{var t,o,n,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:l}=a;ue.value=e||[];const{basicInfo:{questionnaireType:s},questions:r,questionnaireName:d}=(null==(t=null==l?void 0:l[0])?void 0:t.questionnaireDetailResponseVO)||{basicInfo:{}};s&&(de.value=2===s?[{attachmentName:d,attachmentUri:r,attachmentType:"question"}]:[{attachmentName:d,attachmentUri:null==(o=null==r?void 0:r[0])?void 0:o.content,attachmentType:E(String(null==(n=null==r?void 0:r[0])?void 0:n.textType),null==(i=null==r?void 0:r[0])?void 0:i.content)}])}})),await w({productCode:G,isTenant:!ee}).then((({data:e,code:a})=>{var t;if("10000"===a){re.value=e,ce.value=e.productPlanInsureVOList.find((e=>!te.defaultPlanCode||e.planCode===te.defaultPlanCode))||{};const{payInfo:a}=g(null==(t=ce.value)?void 0:t.productFactor);te.payInfo={...te.payInfo,...a}}}))};return r((()=>{Te()})),(e,a)=>{var t,o,n,i,l,s;const r=L,y=P;return d(),u("div",R,[c(r),p(Oe)||p(ee)?(d(),f(A,{key:0,ref_key:"personalInfoRef",ref:le,"data-source":p(ce),"product-info":{productCode:p(G),productName:p(re).productName,insurerCode:p(Z),tenantId:p($),planList:p(re).productPlanInsureVOList},"tenant-product-detail":p(se),"hide-benefit":"","default-data":[p(te).defaultValue],onTrialStart:we,onTrialEnd:Ne,"onUpdate:userData":a[0]||(a[0]=e=>p(te).userData=e)},null,8,["data-source","product-info","tenant-product-detail","default-data"])):m("",!0),p(te).payInfo.schema.length?(d(),f(p(x),{key:1,ref_key:"payInfoRef",ref:ie,modelValue:p(H).tenantOrderPayInfoList,"onUpdate:modelValue":a[1]||(a[1]=e=>p(H).tenantOrderPayInfoList=e),schema:p(te).payInfo.schema,"is-view":p(te).isView,"user-data":p(te).userData},null,8,["modelValue","schema","is-view","user-data"])):m("",!0),c(y,null,{default:v((()=>{var e;return[(null==(e=p(he))?void 0:e.length)?(d(),f(p(M),{key:0,modelValue:p(Ce),"onUpdate:modelValue":a[2]||(a[2]=e=>h(Ce)?Ce.value=e:null),"has-bg-color":!1,"attachment-list":p(he),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[3]||(a[3]=e=>(e=>{me.value=e,fe.value=!0})(e))},null,8,["modelValue","attachment-list"])):m("",!0)]})),_:1}),p(fe)?(d(),f(p(B),{key:2,show:p(fe),"onUpdate:show":a[4]||(a[4]=e=>h(fe)?fe.value=e:null),"content-list":p(ve)?p(he):p(ye),"is-only-view":p(ve),"active-index":p(me),text:p(ve)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":p(ve)?0:p(Ie),onSubmit:je,onOnCloseFilePreviewByMask:be},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):m("",!0),c(N,{"is-share":p(ne).isShare&&!p(X),premium:null==(t=p(Le))?void 0:t.initialPremium,"share-info":p(ne),"loading-text":p(ge),"payment-frequency":(null==(s=null==(l=null==(i=null==(n=null==(o=p(_e))?void 0:o.insuredList)?void 0:n[0].productList)?void 0:i[0].riskList)?void 0:l[0])?void 0:s.paymentFrequency)+"","tenant-product-detail":p(se),"handle-share":e=>(e=>{le.value.validateHolder(["mobile"]).then((()=>{Object.assign(H.value,{extInfo:{...H.value.extInfo,buttonCode:D.INFO_COLLECTION,pageCode:k.INFO_COLLECTION}});const a=le.value.getUserData(),t=q({..._e.value,holder:null==a?void 0:a.holder},Le.value||{},H.value);V(t,((a,t)=>{t===O.JUMP_PAGE&&(null==e||e())}))})).catch((()=>{C("请录入投保人手机号后进行分享")}))})(e),disabled:!p(Le),onHandleClick:Ve},{default:v((()=>[I("下一步")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","disabled"])])}}});export{B as default};
