import{d as e,R as a,U as t,u as o,A as n,r as i,L as l,Y as s,o as r,b as d,c as u,e as c,f as p,g as f,h as m,w as v,a0 as h,j as I,p as y,T as C,P as j,q as b,a1 as O,n as g,a2 as L}from"./index-66bb4bd9.js";import{_ as P,t as _}from"./PayInfo-01b192eb.js";import{g as x,i as w}from"./trial-1454dda3.js";import{_ as N}from"./TrialButton-34f3f91f.js";import{n as V}from"./nextStep-74c6e444.js";import{u as T}from"./useAttachment-b3dd4d39.js";import{a as S,q as k}from"./product-0e05074d.js";import{g as F}from"./utils-f01ca7b1.js";import{u as U}from"./useOrder-d9cfc4d7.js";import{P as D,B as q}from"./constants-7afb7c3d.js";import{t as E}from"./utils-dc76a146.js";import A from"./index-d52728c3.js";import"./merge-c5599fa4.js";import"./keysIn-a287568b.js";import"./isObjectLike-a9798079.js";import"./_getTag-7f09858e.js";import"./debounce-6981b306.js";import"./phoneVerify-abb5008a.js";import"./index-276c5644.js";import"./useDicData-b8b692cf.js";import"./bankCard-7ef20e3a.js";import"./index-e1810edf.js";import"./core-f865def3.js";import"./constant-8927d485.js";import"./infoCollection-befdfa89.js";import"./trial-4546795a.js";import"./createProposal-eda5f382.js";import"./cloneDeep-96676b66.js";import"./index-e86c44be.js";import"./config-98e8d477.js";import"./product-585b0e6f.js";import"./index-54f038b5.js";import"./index-694e2670.js";import"./empty-ae586b6c.js";import"./box-title-96579a61.js";import"./index-98941912.js";import"./isNaN-beb28144.js";const R={class:"long-info-collection"},B=e({__name:"infoCollection",setup(e){const B=a((()=>t((()=>import("./index-83136bec.js")),["static/js/index-83136bec.js","static/css/index-fa4edf2a.css","static/js/index-66bb4bd9.js","static/css/index-9494d932.css","static/js/theme-65292714.js","static/js/index-e1810edf.js","static/css/index-827a8544.css","static/js/utils-f01ca7b1.js","static/js/infoCollection-befdfa89.js","static/js/trial-4546795a.js"]))),M=a((()=>t((()=>import("./index-53090892.js")),["static/js/index-53090892.js","static/css/index-4640d9aa.css","static/js/index-66bb4bd9.js","static/css/index-9494d932.css"]))),H=o(),J=U(),{productCode:G="",tenantId:Y,agentCode:$="",agencyCode:Q,saleChannelId:W,isShare:X,orderNo:z,extraInfo:K,insurerCode:Z,preview:ee}=H.query;let ae={};try{ae=JSON.parse(decodeURIComponent(K))}catch(Se){}const te=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},defaultValue:null,isAutoChange:!1,defaultPlanCode:"",userData:{}}),oe=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,ne=i({imgUrl:"",desc:"",title:"",link:oe}),ie=i();i();const le=i(),se=i({}),re=i({}),de=i([]),ue=i(),ce=i({}),pe=i(!1),fe=i(!1),me=i(0),ve=i(!0),{fileList:he,mustReadFileCount:Ie,popupFileList:ye}=T(ce,ue),Ce=i(!1),je=i(!1),be=()=>{fe.value=!1,ve.value=!0,de.value.length<1||(pe.value=!0)},Oe=()=>{pe.value=!1,fe.value=!1,ve.value=!0};i({}),i(!1),i([{}]);const ge=i(""),Le=i(0),Pe=i(!1);i(),i(),i(),l((()=>{var e,a;const{insureProductRiskVOList:t}=(null==(a=null==(e=re.value)?void 0:e.productPlanInsureVOList)?void 0:a[0])||{};return(t||[]).find((e=>e.mainRiskFlag===s.YES))}));const _e=i(0);i({});const xe=i(),we=()=>{ge.value="试算中...",Le.value=0,Pe.value=!0},Ne=(e,a)=>{ge.value="",_e.value=e.premium,Le.value=e,xe.value=a,Pe.value=!1},Ve=async()=>{var e,a;if(ee)return void y(D.INFO_COLLECTION,H.query);if(!Le.value)return;const t=[];le.value&&t.push(null==(e=le.value)?void 0:e.validate(!1)),ie.value&&t.push(null==(a=ie.value)?void 0:a.validate(!1)),Promise.all(t).then((()=>{if(!Ce.value)return void C("请勾选投保人阅读并接受");Object.assign(J.value,{extInfo:{...J.value.extInfo,buttonCode:q.INFO_COLLECTION,pageCode:D.INFO_COLLECTION}});const e=le.value.dealMixData(),a=E({...e,productCode:G,productName:re.value.productName},Le.value,J.value);V(a,((e,a)=>{a===j.JUMP_PAGE&&b(e.nextPageCode,H.query)}))}))};n({tenantOrderPayInfoList:[]});const Te=async()=>{S({productCode:G,tenantId:Y}).then((({data:e,code:a})=>{if("10000"===a){se.value=e;const{wxShareConfig:a,showWXShare:t,title:o,desc:n,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};t?Object.assign(ne.value,{...a,imgUrl:a.image,isShare:t}):Object.assign(ne.value,{title:o,desc:n,imgUrl:i,isShare:t}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&O(e.BASIC_INFO.themeType)}})),z&&await x({orderNo:z,tenantId:Y}).then((({code:e,data:a})=>{var t;if("10000"===e){if(Le.value=a.orderAmount,(null==(t=a.insuredList)?void 0:t.length)>0){const{planCode:e}=a.insuredList[0];te.defaultPlanCode=e}Object.assign(J.value,a,{tenantOrderPayInfoList:a.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:G}),te.defaultValue=J.value,je.value=!0}})),k({productCode:G}).then((({code:e,data:a})=>{var t,o,n,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:l}=a;ue.value=e||[];const{basicInfo:{questionnaireType:s},questions:r,questionnaireName:d}=(null==(t=null==l?void 0:l[0])?void 0:t.questionnaireDetailResponseVO)||{basicInfo:{}};s&&(de.value=2===s?[{attachmentName:d,attachmentUri:r,attachmentType:"question"}]:[{attachmentName:d,attachmentUri:null==(o=null==r?void 0:r[0])?void 0:o.content,attachmentType:F(String(null==(n=null==r?void 0:r[0])?void 0:n.textType),null==(i=null==r?void 0:r[0])?void 0:i.content)}])}})),await w({productCode:G,isTenant:!ee}).then((({data:e,code:a})=>{var t;if("10000"===a){re.value=e,console.log("state.defaultPlanCode",te.defaultPlanCode),ce.value=e.productPlanInsureVOList.find((e=>e.planCode===te.defaultPlanCode))||{};const{payInfo:a}=_(null==(t=ce.value)?void 0:t.productFactor);te.payInfo={...te.payInfo,...a}}}))};return r((()=>{Te()})),(e,a)=>{var t,o,n,i,l,s;const r=g,y=L;return d(),u("div",R,[c(r),p(je)||p(ee)?(d(),f(A,{key:0,ref_key:"personalInfoRef",ref:le,"data-source":p(ce),"product-info":{productCode:p(G),productName:p(re).productName,insurerCode:p(Z),tenantId:p(Y),planList:p(re).productPlanInsureVOList},"tenant-product-detail":p(se),"hide-benefit":"","default-data":[p(te).defaultValue],onTrialStart:we,onTrialEnd:Ne,"onUpdate:userData":a[0]||(a[0]=e=>p(te).userData=e)},null,8,["data-source","product-info","tenant-product-detail","default-data"])):m("",!0),p(te).payInfo.schema.length?(d(),f(p(P),{key:1,ref_key:"payInfoRef",ref:ie,modelValue:p(J).tenantOrderPayInfoList,"onUpdate:modelValue":a[1]||(a[1]=e=>p(J).tenantOrderPayInfoList=e),schema:p(te).payInfo.schema,"is-view":p(te).isView,"user-data":p(te).userData},null,8,["modelValue","schema","is-view","user-data"])):m("",!0),c(y,null,{default:v((()=>{var e;return[(null==(e=p(he))?void 0:e.length)?(d(),f(p(M),{key:0,modelValue:p(Ce),"onUpdate:modelValue":a[2]||(a[2]=e=>h(Ce)?Ce.value=e:null),"attachment-list":p(he),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[3]||(a[3]=e=>(e=>{me.value=e,fe.value=!0})(e))},null,8,["modelValue","attachment-list"])):m("",!0)]})),_:1}),p(fe)?(d(),f(p(B),{key:2,show:p(fe),"onUpdate:show":a[4]||(a[4]=e=>h(fe)?fe.value=e:null),"content-list":p(ve)?p(he):p(ye),"is-only-view":p(ve),"active-index":p(me),text:p(ve)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":p(ve)?0:p(Ie),onSubmit:be,onOnCloseFilePreviewByMask:Oe},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):m("",!0),c(N,{"is-share":p(ne).isShare&&!p(X),premium:null==(t=p(Le))?void 0:t.initialPremium,"share-info":p(ne),"loading-text":p(ge),"payment-frequency":(null==(s=null==(l=null==(i=null==(n=null==(o=p(xe))?void 0:o.insuredList)?void 0:n[0].productList)?void 0:i[0].riskList)?void 0:l[0])?void 0:s.paymentFrequency)+"","tenant-product-detail":p(se),"handle-share":e=>(e=>{le.value.validateHolder(["mobile"]).then((()=>{Object.assign(J.value,{extInfo:{...J.value.extInfo,buttonCode:q.INFO_COLLECTION,pageCode:D.INFO_COLLECTION}});const a=le.value.getUserData(),t=E({...xe.value,holder:null==a?void 0:a.holder},Le.value||{},J.value);V(t,((a,t)=>{t===j.JUMP_PAGE&&(null==e||e())}))})).catch((()=>{C("请录入投保人手机号后进行分享")}))})(e),disabled:!p(Le),onHandleClick:Ve},{default:v((()=>[I("下一步")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","disabled"])])}}});export{B as default};
