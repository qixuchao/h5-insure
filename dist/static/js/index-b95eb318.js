import{d as e,r as t,R as a,c as n,A as o,U as i,V as l,e as s,g as d,W as r,X as u,Y as c,a as p,u as v,L as m,Z as f,$ as j,a0 as I,a1 as h,f as C,h as b,i as _,w as y,j as x,a2 as O,a3 as g,a4 as k}from"./index-b419c4de.js";import{g as S,i as N}from"./trial-92a4c937.js";import{a as w,q as T}from"./product-6a371fd1.js";import{_ as A}from"./index-ab6823fc.js";import{V as L,G as P,_ as R}from"./index-cbb2e5aa.js";import{P as V}from"./index-b2d3aa89.js";import{u as F}from"./useAttachment-27257175.js";import{g as B}from"./utils-f99858fa.js";import{T as U}from"./index-94e28ffa.js";import{o as E}from"./utils-314965b3.js";import"./pdfh5-008ca364.js";import"./infoCollection-2ed3ceeb.js";import"./trial-d4f76514.js";import"./index-4a2f5da3.js";import"./cloneDeep-1de8e9b0.js";import"./_initCloneObject-0663309f.js";import"./isObjectLike-a9798079.js";import"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-25d81bce.js";import"./phoneVerify-1df44e15.js";/* empty css              */import"./bankCard-303af999.js";import"./index-3cdf0efd.js";import"./debounce-eed12388.js";import"./index-1a5ae392.js";import"./TrialButton-3370bf79.js";import"./index-4e2599d4.js";import"./index-27de7c4f.js";import"./useOrder-7e4863e8.js";import"./constants-7afb7c3d.js";import"./nextStep-1ae186ea.js";import"./core-2cd43e87.js";import"./constant-8927d485.js";import"./index-ba41fd7f.js";import"./index-fe8e50e7.js";import"./empty-c926d8ec.js";import"./box-title-562d4bff.js";import"./index-c479978a.js";import"./echarts-ac920fed.js";import"./Table-fd6956c3.js";import"./createProposal-c6a8f5f9.js";const D={class:"com-insure-limit"},q=e({name:"insureLimit"}),G=e({...q,props:{dataSource:{default:()=>[]}},setup(e){const u=e,c=t([]);return a((()=>u.dataSource),(()=>{var e,t;c.value=((null==(t=null==(e=u.dataSource)?void 0:e[0])?void 0:t.data)||[]).filter((e=>e.conditionValue))}),{deep:!0,immediate:!0}),(e,t)=>{const a=r;return n(),o("div",D,[(n(!0),o(i,null,l(d(c),((e,t)=>(n(),s(a,{key:t,title:e.conditionName,content:e.conditionValue},null,8,["title","content"])))),128))])}}});const M={key:0},W={key:1,class:"page-internet-product-detail","data-skeleton-root":"LONG"},z={class:"info"},X={key:1,class:"preview-placeholder"},Y=C("br",null,null,-1),$=C("div",{id:"insureButton"},null,-1),J=C("div",{id:"xinaoDialog"},null,-1),Q=e({name:"InsuranceLong"}),Z=e({...Q,setup(e){const l=u((()=>c((()=>import("./index-e397fab3.js")),["static/js/index-e397fab3.js","static/css/index-fa4edf2a.css","static/js/index-b419c4de.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js","static/js/index-4e2599d4.js","static/css/index-827a8544.css","static/js/utils-f99858fa.js","static/js/infoCollection-2ed3ceeb.js","static/js/trial-d4f76514.js"]))),r=u((()=>c((()=>import("./index-45077f95.js")),["static/js/index-45077f95.js","static/css/index-eabeb59f.css","static/js/index-b419c4de.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js"]))),D=u((()=>c((()=>import("./index-879cfdd0.js")),["static/js/index-879cfdd0.js","static/css/index-3329e46f.css","static/js/index-b419c4de.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js"])));p();const q=v(),{productCode:Q="",tenantId:Z,agentCode:H="",agencyCode:K,saleChannelId:ee,extraInfo:te,orderNo:ae,insurerCode:ne,preview:oe,trialPreview:ie}=q.query;let le={};try{console.log("extInfo",decodeURIComponent(te)),le=JSON.parse(decodeURIComponent(te))}catch(Ue){}t();const se=t(),de=t(),re=t(!1),ue=t({}),ce=t({}),pe=t(!1),ve=t(0),me=t(!1);t({});const fe=t(!0);t(!0);const je=t(!0),Ie=t(""),he=t({}),Ce=t({}),be=t([]),_e=t({imgUrl:"",desc:"",title:"",link:`${window.location.href}&isShare=1`,isShare:!1}),ye=t({});m((()=>!!oe||!!ie));const xe=m((()=>!!ie)),Oe=t(),ge=()=>{Oe.value.open()},ke=t([]),Se=t(),Ne=t(),we=t(),Te=async()=>{!xe.value&&w({productCode:Q,tenantId:Z}).then((({data:e,code:t})=>{if("10000"===t){ue.value=e;const{wxShareConfig:t,showWXShare:a,title:n,desc:o,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};a?Object.assign(_e.value,{...t,isShare:a}):Object.assign(_e.value,{title:n,desc:o,image:i,isShare:a}),g(e.BASIC_INFO.themeType)}})),ae&&S({orderNo:ae,tenantId:Z}).then((({code:e,data:t})=>{var a;"10000"===e&&(Ne.value=t,we.value=E(t,ce.value,null==(a=he.value)?void 0:a.planCode))})),await N({productCode:Q,isTenant:!1}).then((({data:e,code:t})=>{var a;"10000"===t&&(re.value=!0,me.value=!0,ce.value=e,he.value=null==(a=e.productPlanInsureVOList)?void 0:a[0],be.value=(e.productPlanInsureVOList||[]).filter((e=>e.planCode)).map((e=>({planName:e.planName,planCode:e.planCode}))))})),je.value=!1,T({productCode:Q}).then((({code:e,data:t})=>{var a,n,o,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:l}=t;Se.value=e||[];const{basicInfo:{questionnaireType:s},questions:d,questionnaireName:r}=(null==(a=null==l?void 0:l[0])?void 0:a.questionnaireDetailResponseVO)||{basicInfo:{}};2===s&&(ke.value=[{attachmentName:r,attachmentUri:d,attachmentType:"question"}]),ke.value=[{attachmentName:r,attachmentUri:null==(n=null==d?void 0:d[0])?void 0:n.content,attachmentType:B(String(null==(o=null==d?void 0:d[0])?void 0:o.textType),null==(i=null==d?void 0:d[0])?void 0:i.content)}]}}))};a((()=>ye.value.planCode),(e=>{he.value=(ce.value.productPlanInsureVOList||[]).find((t=>t.planCode===e))}));const Ae=()=>{se.value.handleClickTab()("insureButton")};t(""),t(0);const{fileList:Le,mustReadFileCount:Pe,popupFileList:Re}=F(he,Se),Ve=e=>{he.value=(ce.value.productPlanInsureVOList||[]).find((t=>t.planCode===e))},Fe=()=>{pe.value=!1,fe.value=!0},Be=()=>{pe.value=!1,fe.value=!0};return a((()=>he.value),(()=>{const{planCode:e,oilPackageProductVOList:t,insureProductRiskVOList:a}=he.value;ye.value.planCode=e,Ce.value=(a||[]).find((e=>e.mainRiskFlag===f.YES))}),{deep:!0,immediate:!0}),j((()=>{I(de,(([{isIntersecting:e}],t)=>{re.value=!0}))})),h((()=>{je.value=!0,Te(),setTimeout((async()=>{Ie.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{var a,u,c,p,v,m,f,j,I,h,g,S,N,w,T,F,B,E;const q=k;return n(),o(i,null,[d(je)?(n(),o("div",M)):(n(),o("div",W,[d(xe)?(n(),o("div",X,[x("当前页面仅用于保费试算预览"),Y,x("不展示其他产品相关配置信息")])):(n(),o(i,{key:0},[C("div",z,[1==(null==(u=null==(a=d(ue))?void 0:a.BASIC_INFO)?void 0:u.bannerType)&&(null==(p=null==(c=d(ue))?void 0:c.BASIC_INFO)?void 0:p.banner.length)?(n(),s(A,{key:0,"data-skeleton-type":"img",url:null==(v=d(ue))?void 0:v.BASIC_INFO.banner[0]},null,8,["url"])):b("",!0),2==(null==(f=null==(m=d(ue))?void 0:m.BASIC_INFO)?void 0:f.bannerType)&&(null==(I=null==(j=d(ue))?void 0:j.BASIC_INFO)?void 0:I.video.length)?(n(),s(L,{key:1,"data-skeleton-type":"img",src:null==(h=d(ue))?void 0:h.BASIC_INFO.video[0]},null,8,["src"])):b("",!0),(null==(N=null==(S=null==(g=d(ue))?void 0:g.BASIC_INFO)?void 0:S.bannerMove)?void 0:N.length)?(n(),s(A,{key:2,url:null==(F=null==(T=null==(w=d(ue))?void 0:w.BASIC_INFO)?void 0:T.bannerMove)?void 0:F[0],onClick:Ae},null,8,["url"])):b("",!0),C("div",{ref_key:"observeRef",ref:de},null,512)]),(null==(B=d(ue))?void 0:B.GUARANTEE)?(n(),s(P,{key:0,"show-service-config":"","data-source":d(ue),"plan-list":d(be),onUpdateActivePlan:Ve},null,8,["data-source","plan-list"])):b("",!0),C("div",{class:"trial-text-btn",onClick:ge},"算一算保费"),_(G,{"data-source":null==(E=d(ue))?void 0:E.ISSUE_CONDITION},null,8,["data-source"]),_(R,{ref_key:"detailScrollRef",ref:se,"data-source":d(ue)},null,8,["data-source"]),_(q,null,{default:y((()=>{var e,t,a;return[(null==(e=d(ue).SIGNATURE)?void 0:e.inscribedContent)?(n(),s(d(r),{key:0,"inscribed-content":null==(a=null==(t=d(ue))?void 0:t.SIGNATURE)?void 0:a.inscribedContent},null,8,["inscribed-content"])):b("",!0)]})),_:1}),_(q,null,{default:y((()=>{var e;return[(null==(e=d(Le))?void 0:e.length)?(n(),s(d(D),{key:0,"attachment-list":d(Le),"pre-text":"请阅读",onPreviewFile:t[0]||(t[0]=e=>(e=>{ve.value=e,pe.value=!0})(e))},null,8,["attachment-list"])):b("",!0)]})),_:1})],64)),d(re)?(n(),s(U,{key:2,ref_key:"trialRef",ref:Oe,"data-source":d(he),"share-info":d(_e),"is-share":d(_e).isShare,"product-info":{productCode:d(ce).productCode,productName:d(ce).productName,productId:"",tenantId:d(Z),insurerCode:d(ne)},"tenant-product-detail":d(ue),"hide-benefit":1!==d(ce).openFlag},null,8,["data-source","share-info","is-share","product-info","tenant-product-detail","hide-benefit"])):b("",!0),$])),d(me)&&!d(xe)?(n(),s(V,{key:2,"product-detail":d(ue)},null,8,["product-detail"])):b("",!0),J,d(pe)?(n(),s(d(l),{key:3,show:d(pe),"onUpdate:show":t[1]||(t[1]=e=>O(pe)?pe.value=e:null),"content-list":d(fe)?d(Le):d(Re),"is-only-view":d(fe),"active-index":d(ve),text:d(fe)?"关闭":"我已逐页阅读并确认告知内容","force-read-cound":d(fe)?0:d(Pe),onSubmit:Fe,onOnCloseFilePreviewByMask:Be},null,8,["show","content-list","is-only-view","active-index","text","force-read-cound"])):b("",!0)],64)}}});export{Z as default};
