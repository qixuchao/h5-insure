import{d as e,aV as a,aW as t,i as o,h as s,cd as n,r as i,j as r,bc as l,l as u,o as d,c,b as f,w as p,u as m,p as y,q as I,f as v,F as h,s as w,a as b,g,v as j,e as C,b4 as q,dM as x,aY as P,bN as V,a$ as T,da as k,bQ as L,ar as _,d8 as E,bk as N,bi as O,c3 as R,T as U,c7 as A}from"./index-169b3a9c.js";import{P as M,a as D}from"./PolicyInfo-85c122ae.js";import{g as F,m as Q}from"./trial-9e8fc728.js";import{n as S}from"./nextStep-78b7df07.js";import{b as B,l as $}from"./product-ef29c4d1.js";import{u as J}from"./useOrder-a1deeced.js";import{P as W}from"./constants-6c7c253a.js";import{P as G}from"./index-0f6841b4.js";import{P as z}from"./index-5e9ea49d.js";import{_ as Y}from"./InsureInfo-147113e9.js";import{p as X,d as H}from"./utils-6a2a3f5a.js";import{Q as K}from"./notice-544087e3.js";import{P as Z,g as ee}from"./utils-662b4495.js";import{Q as ae}from"./questionnaire-42dcb602.js";import{P as te}from"./constants-b39aa53b.js";import{T as oe}from"./infoCollection-151ddca3.js";import{i as se}from"./core-a9483ea2.js";import"./cloneDeep-35e7d1d1.js";import"./utils-2d4d3df3.js";import"./createProposal-e3e73c74.js";import"./trial-f98d9b73.js";import"./util-a8f4c4af.js";import"./format-31cde443.js";const ne={class:"long-info-preview"},ie={class:"footer-button"},re=e({__name:"infoPreview",setup(e){const re=a((()=>t((()=>import("./index-4b7df775.js")),["static/js/index-4b7df775.js","static/css/index-fa4edf2a.css","static/js/index-169b3a9c.js","static/css/index-faccc950.css","static/js/theme-94cf7d00.js","static/js/index-5e9ea49d.js","static/css/index-bbfdd7ec.css","static/js/utils-662b4495.js","static/js/infoCollection-151ddca3.js","static/js/trial-f98d9b73.js"]))),le=o(),ue=s(),de=J({}),{productCode:ce="",tenantId:fe,agentCode:pe="",agencyCode:me,saleChannelId:ye,isShare:Ie,orderNo:ve,extraInfo:he,insurerCode:we,objectType:be="1",templateId:ge,preview:je,origin:Ce,pageType:qe}=le.query;let xe={};try{xe=JSON.parse(decodeURIComponent(he))}catch(We){}const[Pe,Ve]=n(!1),Te=i({isView:!1,personalInfo:{},policyInfo:{schema:[],config:[],formData:{}},payInfo:{schema:[],config:[],formData:[]},customerQuestions:[]}),ke=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`;r({imgUrl:"",desc:"",title:"",link:ke});const Le=r(),_e=r(),Ee=r(!1),Ne=r(!1),Oe=r(0),Re=r(!1),Ue=()=>{Ne.value=!1},Ae=({file:e,type:a},t)=>{q.set(Z,{fileUri:e,fileType:a}),ue.push({path:"/template/filePreview",query:{fileId:e.id}}),t()},Me=()=>{Ee.value=!0,de.value.extInfo.buttonCode=x.short.underWrite,de.value.extInfo.pageCode="infoPreview",S(de.value,((e,a,t)=>{N.JUMP_ALERT===a&&O.confirm({title:"核保失败",message:t,cancelButtonText:"修改信息",confirmButtonText:"放弃投保"}).then((()=>{se?R.closeWindow():window.close()})).catch((()=>{delete le.query.questionnaireId,ue.push({path:W.productInfo,query:le.query})}))}))},De=()=>{ge===oe.FREE?(de.value.extInfo.buttonCode=x.free.faceVerify,de.value.extInfo.pageCode="faceAuth",S(de.value,((e,a)=>{a===N.JUMP_PAGE&&U("被保险人已完成认证")}))):"true"===qe?(delete le.query.pageType,ue.push({path:W.holderInfoPreview,query:le.query})):(de.value.extInfo.buttonCode=x.short.faceVerify,de.value.extInfo.pageCode="faceAuth",S(de.value,((e,a)=>{a===N.JUMP_PAGE&&U("被保险人已完成认证")})))},Fe=async()=>{if(ge===oe.FREE){de.value.extInfo.buttonCode=x.free.faceVerify,de.value.extInfo.pageCode="faceAuth",await S(de.value);const{code:e,data:a}=await F({orderNo:ve,tenantId:fe});"10000"===e&&(Object.assign(de.value,a),de.value.extInfo.buttonCode=x.free.underWriteAndIssue,de.value.extInfo.pageCode="productInfo",S(de.value,((e,a)=>{a===N.JUMP_PAGE&&(delete le.query.pageType,ue.push({path:te[e.nextPageCode],query:le.query}))})))}else{if(Ee.value)return void Me();Ve(!0)}},Qe=r(),Se=r(),Be=r([]),$e=async()=>{var e;let a={};const{code:t,data:o}=await F({orderNo:ve,tenantId:fe});"10000"===t&&(Object.assign(de.value,o),a=X(o.insuredList[0].productList),Qe.value=o,Re.value=!0);const{planCode:s}=(null==(e=o.insuredList)?void 0:e[0])||{};(async e=>{let a=[];const{code:t,data:o}=await A({orderNo:ve,tenantId:fe});"10000"===t&&(a=o.productQuestionnaireVOList);const{code:s,data:n}=await $(e);if("10000"===s){const{productQuestionnaireVOList:e}=n||{},t=e.filter((e=>e.businessType!==K.VISIT));Te.customerQuestions=t.map((e=>{const{questionnaireDetailResponseVO:t,questionnaireId:o,questionnaireName:s}=e||{},{questions:n,basicInfo:i}=t||{},{objectType:r,questionnaireType:l}=i||{};if(l===ae.TEXT){const{content:e,textType:a}=(null==n?void 0:n[0])||{};return{content:e,contentType:ee(`${a}`,e),questionnaireId:o,questionnaireName:s}}const u=(a||[]).find((e=>e.questionnaireId===o));return{...t,contentType:"question",...null==u?void 0:u.questionnaireDetailResponseVO,questionnaireId:o,questionnaireName:s}}))}})({productCodeList:a.productList.map((e=>e.productCode))}),B(a).then((({code:e,data:a})=>{if("10000"===e){const{productMaterialList:e,riskMaterialList:t}=H(a,s);Te.fileList=e.map((e=>({tabName:e.attachmentName,isExpand:!0,files:e.attachmentList.map((e=>({name:e.materialName,file:e.materialContent,type:e.materialSource,mustRead:e.mustReadFlag===P.YES})))}))),Be.value=e.concat(t)}})),Q(a).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t}=e;Se.value=t;const{payInfo:o,other:s}=V(t);Te.payInfo={...Te.payInfo,...o},Te.policyInfo={...Te.policyInfo,...s}}}))};l((()=>{$e()}));const Je=r();return u((()=>{setTimeout((async()=>{Je.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{var t,o,s;const n=T,i=k,r=L,l=_,u=E;return d(),c("div",ne,[f(n),f(Y,{"product-data":null==(o=null==(t=m(de).insuredList)?void 0:t[0])?void 0:o.productList},{default:p((()=>[f(i,{title:"生效时间",content:m(de).commencementTime},null,8,["content"])])),_:1},8,["product-data"]),(null==(s=Object.keys(m(Se)||{}))?void 0:s.length)?(d(),y(G,{key:0,ref_key:"personalInfoRef",ref:_e,modelValue:m(Qe),"onUpdate:modelValue":a[0]||(a[0]=e=>I(Qe)?Qe.value=e:null),"product-factor":m(Se),"is-view":""},null,8,["modelValue","product-factor"])):v("",!0),m(Te).payInfo.schema.length?(d(),y(m(M),{key:1,ref_key:"payInfoRef",ref:Le,modelValue:m(de).tenantOrderPayInfoList,"onUpdate:modelValue":a[1]||(a[1]=e=>m(de).tenantOrderPayInfoList=e),schema:m(Te).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):v("",!0),m(Te).policyInfo.schema.length?(d(),y(m(D),{key:2,modelValue:m(de).extInfo,"onUpdate:modelValue":a[2]||(a[2]=e=>m(de).extInfo=e),schema:m(Te).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):v("",!0),f(l,{title:"产品资料","show-line":!1,"show-icon":!1},{default:p((()=>[(d(!0),c(h,null,w(m(Be),((e,a)=>(d(),y(r,{key:a,"is-link":"",title:e.attachmentName,onClick:e=>(e=>{Oe.value=e,Ne.value=!0})(a)},null,8,["title","onClick"])))),128))])),_:1}),b("div",ie,["share"===m(Ce)||m(qe)?(d(),y(z,{key:0,shadow:!1,onClick:De},{default:p((()=>[g(e.$slots,"default",{},(()=>[j("确认")]))])),_:3})):(d(),y(z,{key:1,shadow:!1,onClick:Fe},{default:p((()=>[g(e.$slots,"default",{},(()=>[j(C(m(ge)===m(oe).FREE?"领取保障并激活":"确认支付"),1)]))])),_:3}))]),m(Ne)?(d(),y(m(re),{key:3,show:m(Ne),"onUpdate:show":a[3]||(a[3]=e=>I(Ne)?Ne.value=e:null),"content-list":[m(Be)[m(Oe)]],"is-only-view":"","active-index":0,text:"关闭","force-read-cound":0,onOnCloseFilePreviewByMask:Ue},null,8,["show","content-list"])):v("",!0),m(Pe)?(d(),y(u,{key:4,modelValue:m(Pe),"onUpdate:modelValue":a[4]||(a[4]=e=>I(Pe)?Pe.value=e:null),closeable:!1,"data-source":m(Te).fileList,onClickBtn:Ae,onSubmit:Me},null,8,["modelValue","data-source"])):v("",!0)])}}});export{re as default};
