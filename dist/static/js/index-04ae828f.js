import{d as e,r as t,R as a,c as n,A as o,U as i,V as l,e as d,g as s,W as r,X as u,Y as c,a as p,u as v,L as m,Z as f,$ as I,a0 as h,a1 as j,f as b,h as C,i as _,w as y,j as g,a2 as x,a3 as O,a4 as k}from"./index-da11bea2.js";import{g as S,i as N}from"./trial-0eeb125a.js";import{a as w,q as L}from"./product-b83d81d0.js";import{_ as T}from"./index-e715f325.js";import{V as A,G as P,_ as R}from"./index-11e08d49.js";import{P as F}from"./index-b3ef4874.js";import{u as V}from"./useAttachment-5528c6b5.js";import{g as B}from"./utils-da031827.js";import{T as U}from"./index-d2f7c4da.js";import{q as E}from"./createProposal-c579ec96.js";import"./pdfh5-008ca364.js";import"./infoCollection-aac3a35c.js";import"./trial-7206f88d.js";import"./index-adc1363a.js";import"./cloneDeep-1de8e9b0.js";import"./_initCloneObject-0663309f.js";import"./isObjectLike-a9798079.js";import"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-219836d7.js";import"./phoneVerify-5b378bb3.js";/* empty css              */import"./useDicData-989bd9ab.js";import"./index-67f64d76.js";import"./debounce-eed12388.js";import"./index-b9463238.js";import"./bankCard-e1568a4e.js";import"./TrialButton-6cf76a11.js";import"./index-657d117a.js";import"./useOrder-c9ae1bc0.js";import"./utils-0907297d.js";import"./constants-7afb7c3d.js";import"./nextStep-6992376d.js";import"./core-f7ecb94f.js";import"./constant-8927d485.js";import"./index-82fc704f.js";import"./index-f83bb182.js";import"./index-cf7c48f1.js";import"./empty-c926d8ec.js";import"./box-title-593e3632.js";import"./index-1443806d.js";import"./echarts-ac920fed.js";import"./Table-76dcf2da.js";const D={class:"com-insure-limit"},q=e({name:"insureLimit"}),G=e({...q,props:{dataSource:{default:()=>[]}},setup(e){const u=e,c=t([]);return a((()=>u.dataSource),(()=>{var e,t;c.value=((null==(t=null==(e=u.dataSource)?void 0:e[0])?void 0:t.data)||[]).filter((e=>e.conditionValue))}),{deep:!0,immediate:!0}),(e,t)=>{const a=r;return n(),o("div",D,[(n(!0),o(i,null,l(s(c),((e,t)=>(n(),d(a,{key:t,title:e.conditionName,content:e.conditionValue},null,8,["title","content"])))),128))])}}});const M={key:0},W={key:1,class:"page-internet-product-detail","data-skeleton-root":"LONG"},z={class:"info"},X={key:1,class:"preview-placeholder"},Y=b("br",null,null,-1),$=b("div",{id:"insureButton"},null,-1),J=b("div",{id:"xinaoDialog"},null,-1),Q=e({name:"InsuranceLong"}),Z=e({...Q,setup(e){const l=u((()=>c((()=>import("./index-38d6eee9.js")),["static/js/index-38d6eee9.js","static/css/index-fa4edf2a.css","static/js/index-da11bea2.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js","static/js/index-657d117a.js","static/css/index-827a8544.css","static/js/utils-da031827.js","static/js/infoCollection-aac3a35c.js","static/js/trial-7206f88d.js"]))),r=u((()=>c((()=>import("./index-9097b3c5.js")),["static/js/index-9097b3c5.js","static/css/index-eabeb59f.css","static/js/index-da11bea2.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js"]))),D=u((()=>c((()=>import("./index-88a3ae81.js")),["static/js/index-88a3ae81.js","static/css/index-3329e46f.css","static/js/index-da11bea2.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js"])));p();const q=v(),{productCode:Q="",tenantId:Z,agentCode:H="",agencyCode:K,saleChannelId:ee,proposalId:te,extraInfo:ae,orderNo:ne,insurerCode:oe,preview:ie,trialPreview:le}=q.query;let de={};try{console.log("extInfo",decodeURIComponent(ae)),de=JSON.parse(decodeURIComponent(ae))}catch(Ee){}t();const se=t(),re=t(),ue=t(!1),ce=t({}),pe=t({}),ve=t(!1),me=t(0),fe=t(!1);t({});const Ie=t(!0);t(!0);const he=t(!0),je=t(""),be=t({}),Ce=t({}),_e=t([]),ye=t({imgUrl:"",desc:"",title:"",link:`${window.location.href}&isShare=1`,isShare:!1}),ge=t({});m((()=>!!ie||!!le));const xe=m((()=>!!le)),Oe=t(),ke=()=>{Oe.value.open()},Se=t([]),Ne=t(),we=t(),Le=t(!1),Te=async()=>{!xe.value&&w({productCode:Q,tenantId:Z}).then((({data:e,code:t})=>{if("10000"===t){ce.value=e;const{wxShareConfig:t,showWXShare:a,title:n,desc:o,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};a?Object.assign(ye.value,{...t,imgUrl:t.image,isShare:a}):Object.assign(ye.value,{title:n,desc:o,imgUrl:i,isShare:a}),O(e.BASIC_INFO.themeType)}})),ne||te||(Le.value=!0),ne&&S({orderNo:ne,tenantId:Z}).then((({code:e,data:t})=>{"10000"===e&&(t.productCode=Q,we.value=t,Le.value=!0)})),te&&E({id:te,tenantId:Z}).then((({code:e,data:t})=>{if("10000"===e){const{holder:e,insuredList:a}=t;we.value={productCode:Q,productName:"",renewFlag:"",holder:e,tenantId:Z,insuredList:(a||[]).map((e=>({...e,productList:e.productList.filter((e=>e.productCode===Q))})))},Le.value=!0}})),await N({productCode:Q,isTenant:!1}).then((({data:e,code:t})=>{var a;"10000"===t&&(ue.value=!0,fe.value=!0,pe.value=e,be.value=null==(a=e.productPlanInsureVOList)?void 0:a[0],_e.value=(e.productPlanInsureVOList||[]).filter((e=>e.planCode)).map((e=>({planName:e.planName,planCode:e.planCode}))))})),he.value=!1,L({productCode:Q}).then((({code:e,data:t})=>{var a,n,o,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:l}=t;Ne.value=e||[];const{basicInfo:{questionnaireType:d},questions:s,questionnaireName:r}=(null==(a=null==l?void 0:l[0])?void 0:a.questionnaireDetailResponseVO)||{basicInfo:{}};2===d&&(Se.value=[{attachmentName:r,attachmentUri:s,attachmentType:"question"}]),Se.value=[{attachmentName:r,attachmentUri:null==(n=null==s?void 0:s[0])?void 0:n.content,attachmentType:B(String(null==(o=null==s?void 0:s[0])?void 0:o.textType),null==(i=null==s?void 0:s[0])?void 0:i.content)}]}}))};a((()=>ge.value.planCode),(e=>{be.value=(pe.value.productPlanInsureVOList||[]).find((t=>t.planCode===e))}));const Ae=()=>{se.value.handleClickTab()("insureButton")};t(""),t(0);const{fileList:Pe,mustReadFileCount:Re,popupFileList:Fe}=V(be,Ne),Ve=e=>{be.value=(pe.value.productPlanInsureVOList||[]).find((t=>t.planCode===e))},Be=()=>{ve.value=!1,Ie.value=!0},Ue=()=>{ve.value=!1,Ie.value=!0};return a((()=>be.value),(()=>{const{planCode:e,oilPackageProductVOList:t,insureProductRiskVOList:a}=be.value;ge.value.planCode=e,Ce.value=(a||[]).find((e=>e.mainRiskFlag===f.YES))}),{deep:!0,immediate:!0}),I((()=>{h(re,(([{isIntersecting:e}],t)=>{ue.value=!0}))})),j((()=>{he.value=!0,Te(),setTimeout((async()=>{je.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{var a,u,c,p,v,m,f,I,h,j,O,S,N,w,L,V,B,E;const q=k;return n(),o(i,null,[s(he)?(n(),o("div",M)):(n(),o("div",W,[s(xe)?(n(),o("div",X,[g("当前页面仅用于保费试算预览"),Y,g("不展示其他产品相关配置信息")])):(n(),o(i,{key:0},[b("div",z,[1==(null==(u=null==(a=s(ce))?void 0:a.BASIC_INFO)?void 0:u.bannerType)&&(null==(p=null==(c=s(ce))?void 0:c.BASIC_INFO)?void 0:p.banner.length)?(n(),d(T,{key:0,"data-skeleton-type":"img",url:null==(v=s(ce))?void 0:v.BASIC_INFO.banner[0]},null,8,["url"])):C("",!0),2==(null==(f=null==(m=s(ce))?void 0:m.BASIC_INFO)?void 0:f.bannerType)&&(null==(h=null==(I=s(ce))?void 0:I.BASIC_INFO)?void 0:h.video.length)?(n(),d(A,{key:1,"data-skeleton-type":"img",src:null==(j=s(ce))?void 0:j.BASIC_INFO.video[0]},null,8,["src"])):C("",!0),(null==(N=null==(S=null==(O=s(ce))?void 0:O.BASIC_INFO)?void 0:S.bannerMove)?void 0:N.length)?(n(),d(T,{key:2,url:null==(V=null==(L=null==(w=s(ce))?void 0:w.BASIC_INFO)?void 0:L.bannerMove)?void 0:V[0],onClick:Ae},null,8,["url"])):C("",!0),b("div",{ref_key:"observeRef",ref:re},null,512)]),(null==(B=s(ce))?void 0:B.GUARANTEE)?(n(),d(P,{key:0,"show-service-config":"","data-source":s(ce),"plan-list":s(_e),onUpdateActivePlan:Ve},null,8,["data-source","plan-list"])):C("",!0),b("div",{class:"trial-text-btn",onClick:ke},"算一算保费"),_(G,{"data-source":null==(E=s(ce))?void 0:E.ISSUE_CONDITION},null,8,["data-source"]),_(R,{ref_key:"detailScrollRef",ref:se,"data-source":s(ce)},null,8,["data-source"]),_(q,null,{default:y((()=>{var e,t,a;return[(null==(e=s(ce).SIGNATURE)?void 0:e.inscribedContent)?(n(),d(s(r),{key:0,"inscribed-content":null==(a=null==(t=s(ce))?void 0:t.SIGNATURE)?void 0:a.inscribedContent},null,8,["inscribed-content"])):C("",!0)]})),_:1}),_(q,null,{default:y((()=>{var e;return[(null==(e=s(Pe))?void 0:e.length)?(n(),d(s(D),{key:0,"attachment-list":s(Pe),"pre-text":"请阅读",onPreviewFile:t[0]||(t[0]=e=>(e=>{me.value=e,ve.value=!0})(e))},null,8,["attachment-list"])):C("",!0)]})),_:1})],64)),s(ue)&&s(Le)?(n(),d(U,{key:2,ref_key:"trialRef",ref:Oe,"data-source":s(be),"share-info":s(ye),"is-share":s(ye).isShare,"product-info":{productCode:s(pe).productCode,productName:s(pe).productName,productId:"",tenantId:s(Z),insurerCode:s(oe)},"default-data":s(we)?[s(we)]:null,"tenant-product-detail":s(ce),"hide-benefit":1!==s(pe).openFlag},null,8,["data-source","share-info","is-share","product-info","default-data","tenant-product-detail","hide-benefit"])):C("",!0),$])),s(fe)&&!s(xe)?(n(),d(F,{key:2,"product-detail":s(ce)},null,8,["product-detail"])):C("",!0),J,s(ve)?(n(),d(s(l),{key:3,show:s(ve),"onUpdate:show":t[1]||(t[1]=e=>x(ve)?ve.value=e:null),"content-list":s(Ie)?s(Pe):s(Fe),"is-only-view":s(Ie),"active-index":s(me),text:s(Ie)?"关闭":"我已逐页阅读并确认告知内容","force-read-cound":s(Ie)?0:s(Re),onSubmit:Be,onOnCloseFilePreviewByMask:Ue},null,8,["show","content-list","is-only-view","active-index","text","force-read-cound"])):C("",!0)],64)}}});export{Z as default};
