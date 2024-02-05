import{d as e,ax as a,ay as t,i as o,h as n,cc as s,r as i,j as r,aQ as l,l as u,o as c,c as d,b as f,w as p,u as m,p as y,q as I,f as v,F as h,s as b,a as w,g,v as j,e as C,aI as x,dI as q,az as P,bO as V,aC as T,d5 as k,bR as L,ar as _,dN as E,aY as O,aW as R,c4 as N,T as U,c8 as A}from"./index-fef381c5.js";import{P as D,a as F}from"./PolicyInfo-78ec1799.js";import{g as M,m as Q}from"./trial-ab31158d.js";import{n as S}from"./nextStep-f7b2c747.js";import{b as B,l as J}from"./product-632c47ce.js";import{u as $}from"./useOrder-14bb52e1.js";import{P as W}from"./constants-6c7c253a.js";import{P as z}from"./index-f497444b.js";import{P as G}from"./index-e3495e75.js";import{_ as Y}from"./InsureInfo-36f47c76.js";import{p as X,d as H}from"./utils-1066928e.js";import{Q as K}from"./notice-868712ab.js";import{P as Z,g as ee}from"./utils-b4041f26.js";import{Q as ae}from"./questionnaire-42dcb602.js";import{P as te}from"./constants-b39aa53b.js";import{T as oe}from"./infoCollection-66ecfab8.js";import{i as ne}from"./core-3e7ccc05.js";import"./utils-01ba5295.js";import"./createProposal-73814604.js";import"./trial-006160d3.js";import"./cloneDeep-c509bbc6.js";import"./util-2f6baaf9.js";const se={class:"long-info-preview"},ie={class:"footer-button"},re=e({__name:"infoPreview",setup(e){const re=a((()=>t((()=>import("./index-7714617b.js")),["static/js/index-7714617b.js","static/css/index-fa4edf2a.css","static/js/index-fef381c5.js","static/css/index-a7bf09dc.css","static/js/theme-94cf7d00.js","static/js/index-e3495e75.js","static/css/index-bbfdd7ec.css","static/js/utils-b4041f26.js","static/js/infoCollection-66ecfab8.js","static/js/trial-006160d3.js"]))),le=o(),ue=n(),ce=$({}),{productCode:de="",tenantId:fe,agentCode:pe="",agencyCode:me,saleChannelId:ye,isShare:Ie,orderNo:ve,extraInfo:he,insurerCode:be,objectType:we="1",templateId:ge,preview:je,origin:Ce,pageType:xe}=le.query;let qe={};try{qe=JSON.parse(decodeURIComponent(he))}catch(We){}const[Pe,Ve]=s(!1),Te=i({isView:!1,personalInfo:{},policyInfo:{schema:[],config:[],formData:{}},payInfo:{schema:[],config:[],formData:[]},customerQuestions:[]}),ke=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`;r({imgUrl:"",desc:"",title:"",link:ke});const Le=r(),_e=r(),Ee=r(!1),Oe=r(!1),Re=r(0),Ne=r(!1),Ue=()=>{Oe.value=!1},Ae=({file:e,type:a},t)=>{x.set(Z,{fileUri:e,fileType:a}),ue.push({path:"/template/filePreview",query:{fileId:e.id}}),t()},De=()=>{Ee.value=!0,ce.value.extInfo.buttonCode=q.short.underWrite,ce.value.extInfo.pageCode="infoPreview",S(ce.value,((e,a,t)=>{O.JUMP_ALERT===a&&R.confirm({title:"核保失败",message:t,cancelButtonText:"修改信息",confirmButtonText:"放弃投保"}).then((()=>{ne?N.closeWindow():window.close()})).catch((()=>{delete le.query.questionnaireId,ue.push({path:W.productInfo,query:le.query})}))}))},Fe=()=>{ge===oe.FREE?(ce.value.extInfo.buttonCode=q.free.faceVerify,ce.value.extInfo.pageCode="faceAuth",S(ce.value,((e,a)=>{a===O.JUMP_PAGE&&U("被保人已完成认证")}))):"true"===xe?(delete le.query.pageType,ue.push({path:W.holderInfoPreview,query:le.query})):(ce.value.extInfo.buttonCode=q.short.faceVerify,ce.value.extInfo.pageCode="faceAuth",S(ce.value,((e,a)=>{a===O.JUMP_PAGE&&U("被保人已完成认证")})))},Me=async()=>{if(ge===oe.FREE){ce.value.extInfo.buttonCode=q.free.faceVerify,ce.value.extInfo.pageCode="faceAuth",await S(ce.value);const{code:e,data:a}=await M({orderNo:ve,tenantId:fe});"10000"===e&&(Object.assign(ce.value,a),ce.value.extInfo.buttonCode=q.free.underWriteAndIssue,ce.value.extInfo.pageCode="productInfo",S(ce.value,((e,a)=>{a===O.JUMP_PAGE&&(delete le.query.pageType,ue.push({path:te[e.nextPageCode],query:le.query}))})))}else{if(Ee.value)return void De();Ve(!0)}},Qe=r(),Se=r(),Be=r([]),Je=async()=>{var e;let a={};const{code:t,data:o}=await M({orderNo:ve,tenantId:fe});"10000"===t&&(Object.assign(ce.value,o),a=X(o.insuredList[0].productList),Qe.value=o,Ne.value=!0);const{planCode:n}=(null==(e=o.insuredList)?void 0:e[0])||{};(async e=>{let a=[];const{code:t,data:o}=await A({orderNo:ve,tenantId:fe});"10000"===t&&(a=o.productQuestionnaireVOList);const{code:n,data:s}=await J(e);if("10000"===n){const{productQuestionnaireVOList:e}=s||{},t=e.filter((e=>e.businessType!==K.VISIT));Te.customerQuestions=t.map((e=>{const{questionnaireDetailResponseVO:t,questionnaireId:o,questionnaireName:n}=e||{},{questions:s,basicInfo:i}=t||{},{objectType:r,questionnaireType:l}=i||{};if(l===ae.TEXT){const{content:e,textType:a}=(null==s?void 0:s[0])||{};return{content:e,contentType:ee(`${a}`,e),questionnaireId:o,questionnaireName:n}}const u=(a||[]).find((e=>e.questionnaireId===o));return{...t,contentType:"question",...null==u?void 0:u.questionnaireDetailResponseVO,questionnaireId:o,questionnaireName:n}}))}})({productCodeList:a.productList.map((e=>e.productCode))}),B(a).then((({code:e,data:a})=>{if("10000"===e){const{productMaterialList:e,riskMaterialList:t}=H(a,n);Te.fileList=e.map((e=>({tabName:e.attachmentName,isExpand:!0,files:e.attachmentList.map((e=>({name:e.materialName,file:e.materialContent,type:e.materialSource,mustRead:e.mustReadFlag===P.YES})))}))),Be.value=e.concat(t)}})),Q(a).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t}=e;Se.value=t;const{payInfo:o,other:n}=V(t);Te.payInfo={...Te.payInfo,...o},Te.policyInfo={...Te.policyInfo,...n}}}))};l((()=>{Je()}));const $e=r();return u((()=>{setTimeout((async()=>{$e.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{var t,o,n;const s=T,i=k,r=L,l=_,u=E;return c(),d("div",se,[f(s),f(Y,{"product-data":null==(o=null==(t=m(ce).insuredList)?void 0:t[0])?void 0:o.productList},{default:p((()=>[f(i,{title:"生效时间",content:m(ce).commencementTime},null,8,["content"])])),_:1},8,["product-data"]),(null==(n=Object.keys(m(Se)||{}))?void 0:n.length)?(c(),y(z,{key:0,ref_key:"personalInfoRef",ref:_e,modelValue:m(Qe),"onUpdate:modelValue":a[0]||(a[0]=e=>I(Qe)?Qe.value=e:null),"product-factor":m(Se),"is-view":""},null,8,["modelValue","product-factor"])):v("",!0),m(Te).payInfo.schema.length?(c(),y(m(D),{key:1,ref_key:"payInfoRef",ref:Le,modelValue:m(ce).tenantOrderPayInfoList,"onUpdate:modelValue":a[1]||(a[1]=e=>m(ce).tenantOrderPayInfoList=e),schema:m(Te).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):v("",!0),m(Te).policyInfo.schema.length?(c(),y(m(F),{key:2,modelValue:m(ce).extInfo,"onUpdate:modelValue":a[2]||(a[2]=e=>m(ce).extInfo=e),schema:m(Te).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):v("",!0),f(l,{title:"产品资料","show-line":!1,"show-icon":!1},{default:p((()=>[(c(!0),d(h,null,b(m(Be),((e,a)=>(c(),y(r,{key:a,"is-link":"",title:e.attachmentName,onClick:e=>(e=>{Re.value=e,Oe.value=!0})(a)},null,8,["title","onClick"])))),128))])),_:1}),w("div",ie,["share"===m(Ce)||m(xe)?(c(),y(G,{key:0,shadow:!1,onClick:Fe},{default:p((()=>[g(e.$slots,"default",{},(()=>[j("确认")]))])),_:3})):(c(),y(G,{key:1,shadow:!1,onClick:Me},{default:p((()=>[g(e.$slots,"default",{},(()=>[j(C(m(ge)===m(oe).FREE?"领取保障并激活":"确认支付"),1)]))])),_:3}))]),m(Oe)?(c(),y(m(re),{key:3,show:m(Oe),"onUpdate:show":a[3]||(a[3]=e=>I(Oe)?Oe.value=e:null),"content-list":[m(Be)[m(Re)]],"is-only-view":"","active-index":0,text:"关闭","force-read-cound":0,onOnCloseFilePreviewByMask:Ue},null,8,["show","content-list"])):v("",!0),m(Pe)?(c(),y(u,{key:4,modelValue:m(Pe),"onUpdate:modelValue":a[4]||(a[4]=e=>I(Pe)?Pe.value=e:null),closeable:!1,"data-source":m(Te).fileList,onClickBtn:Ae,onSubmit:De},null,8,["modelValue","data-source"])):v("",!0)])}}});export{re as default};
