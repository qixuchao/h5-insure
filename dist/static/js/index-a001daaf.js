import{d as e,r as t,R as a,c as n,A as o,U as i,V as l,e as s,g as d,W as r,X as u,Y as c,a as p,u as v,L as m,Z as f,$ as b,a0 as j,a1 as I,w as h,f as C,h as _,i as y,j as g,a2 as x,a3 as O,a4 as k,a5 as S}from"./index-b23bbccc.js";import{g as N,i as w}from"./trial-7374de67.js";import{a as L,q as T}from"./product-0fb140a1.js";import{_ as A}from"./index-cfea30ec.js";import{V as P,G as R,_ as F}from"./index-d1266348.js";import{P as V}from"./index-a815546d.js";import{u as B}from"./useAttachment-5807ddbb.js";import{g as U}from"./utils-7a589fa9.js";import{_ as E}from"./index-4e542a8a.js";import{q as D}from"./createProposal-9a610e2f.js";import"./pdfh5-008ca364.js";import"./infoCollection-ada26740.js";import"./trial-8304adfc.js";import"./index-981a3a83.js";import"./cloneDeep-0762f693.js";import"./_initCloneObject-da8458a4.js";import"./isObjectLike-a9798079.js";import"./_getTag-ef97f191.js";import"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-25e12c64.js";import"./phoneVerify-b3769869.js";/* empty css              */import"./useDicData-f65367c3.js";import"./index-73a8854d.js";import"./debounce-eed12388.js";import"./index-248cb79d.js";import"./bankCard-a40a07fb.js";import"./TrialButton-ceefa3b2.js";import"./index-68877389.js";import"./useOrder-cf16adc9.js";import"./utils-b4e0b61c.js";import"./constants-7afb7c3d.js";import"./nextStep-bec9e8bd.js";import"./core-c8e33339.js";import"./constant-8927d485.js";import"./index-49887d3c.js";import"./index-a8636cfe.js";import"./index-a94abb77.js";import"./empty-c926d8ec.js";import"./box-title-e8673383.js";import"./index-4a3b1ce4.js";import"./echarts-ac920fed.js";import"./Table-b3519102.js";const q={class:"com-insure-limit"},G=e({name:"insureLimit"}),M=e({...G,props:{dataSource:{default:()=>[]}},setup(e){const u=e,c=t([]);return a((()=>u.dataSource),(()=>{var e,t;c.value=((null==(t=null==(e=u.dataSource)?void 0:e[0])?void 0:t.data)||[]).filter((e=>e.conditionValue))}),{deep:!0,immediate:!0}),(e,t)=>{const a=r;return n(),o("div",q,[(n(!0),o(i,null,l(d(c),((e,t)=>(n(),s(a,{key:t,title:e.conditionName,content:e.conditionValue},null,8,["title","content"])))),128))])}}});const W={key:0},z={class:"info"},X={key:1,class:"preview-placeholder"},Y=C("br",null,null,-1),$=C("div",{id:"insureButton"},null,-1),J=C("div",{id:"xinaoDialog"},null,-1),Q=e({name:"InsuranceLong"}),Z=e({...Q,setup(e){const l=u((()=>c((()=>import("./index-f6b80847.js")),["static/js/index-f6b80847.js","static/css/index-fa4edf2a.css","static/js/index-b23bbccc.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js","static/js/index-68877389.js","static/css/index-827a8544.css","static/js/utils-7a589fa9.js","static/js/infoCollection-ada26740.js","static/js/trial-8304adfc.js"]))),r=u((()=>c((()=>import("./index-698b1937.js")),["static/js/index-698b1937.js","static/css/index-eabeb59f.css","static/js/index-b23bbccc.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js"]))),q=u((()=>c((()=>import("./index-40d60130.js")),["static/js/index-40d60130.js","static/css/index-3329e46f.css","static/js/index-b23bbccc.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js"])));p();const G=v(),{productCode:Q="",tenantId:Z,agentCode:H="",agencyCode:K,saleChannelId:ee,proposalId:te,extraInfo:ae,orderNo:ne,insurerCode:oe,preview:ie,trialPreview:le}=G.query;let se={};try{console.log("extInfo",decodeURIComponent(ae)),se=JSON.parse(decodeURIComponent(ae))}catch(Ee){}t();const de=t(),re=t(),ue=t(!1),ce=t({}),pe=t({}),ve=t(!1),me=t(0),fe=t(!1);t({});const be=t(!0);t(!0);const je=t(!0),Ie=t(""),he=t({}),Ce=t({}),_e=t([]),ye=t({imgUrl:"",desc:"",title:"",link:`${window.location.href}&isShare=1`,isShare:!1}),ge=t({});m((()=>!!ie||!!le));const xe=m((()=>!!le)),Oe=t(),ke=()=>{Oe.value.open()},Se=t([]),Ne=t(),we=t(),Le=t(!1),Te=async()=>{!xe.value&&L({productCode:Q,tenantId:Z}).then((({data:e,code:t})=>{if("10000"===t){ce.value=e;const{wxShareConfig:t,showWXShare:a,title:n,desc:o,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};a?Object.assign(ye.value,{...t,imgUrl:t.image,isShare:a}):Object.assign(ye.value,{title:n,desc:o,imgUrl:i,isShare:a}),k(e.BASIC_INFO.themeType)}})),ne||te||(Le.value=!0),ne&&N({orderNo:ne,tenantId:Z}).then((({code:e,data:t})=>{"10000"===e&&(t.productCode=Q,we.value=t,Le.value=!0)})),te&&D({id:te,tenantId:Z}).then((({code:e,data:t})=>{if("10000"===e){const{holder:e,insuredList:a}=t;we.value={productCode:Q,productName:"",renewFlag:"",holder:e,tenantId:Z,insuredList:(a||[]).map((e=>({...e,productList:e.productList.filter((e=>e.productCode===Q))})))},Le.value=!0}})),await w({productCode:Q,isTenant:!1}).then((({data:e,code:t})=>{var a;"10000"===t&&(ue.value=!0,fe.value=!0,pe.value=e,he.value=null==(a=e.productPlanInsureVOList)?void 0:a[0],_e.value=(e.productPlanInsureVOList||[]).filter((e=>e.planCode)).map((e=>({planName:e.planName,planCode:e.planCode}))))})),je.value=!1,T({productCode:Q}).then((({code:e,data:t})=>{var a,n,o,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:l}=t;Ne.value=e||[];const{basicInfo:{questionnaireType:s},questions:d,questionnaireName:r}=(null==(a=null==l?void 0:l[0])?void 0:a.questionnaireDetailResponseVO)||{basicInfo:{}};2===s&&(Se.value=[{attachmentName:r,attachmentUri:d,attachmentType:"question"}]),Se.value=[{attachmentName:r,attachmentUri:null==(n=null==d?void 0:d[0])?void 0:n.content,attachmentType:U(String(null==(o=null==d?void 0:d[0])?void 0:o.textType),null==(i=null==d?void 0:d[0])?void 0:i.content)}]}}))};a((()=>ge.value.planCode),(e=>{he.value=(pe.value.productPlanInsureVOList||[]).find((t=>t.planCode===e))}));const Ae=()=>{de.value.handleClickTab()("insureButton")};t(""),t(0);const{fileList:Pe,mustReadFileCount:Re,popupFileList:Fe}=B(he,Ne),Ve=e=>{he.value=(pe.value.productPlanInsureVOList||[]).find((t=>t.planCode===e))},Be=()=>{ve.value=!1,be.value=!0},Ue=()=>{ve.value=!1,be.value=!0};return a((()=>he.value),(()=>{const{planCode:e,oilPackageProductVOList:t,insureProductRiskVOList:a}=he.value;ge.value.planCode=e,Ce.value=(a||[]).find((e=>e.mainRiskFlag===f.YES))}),{deep:!0,immediate:!0}),b((()=>{j(re,(([{isIntersecting:e}],t)=>{ue.value=!0}))})),I((()=>{je.value=!0,Te(),setTimeout((async()=>{Ie.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const a=S;return n(),o(i,null,[d(je)?(n(),o("div",W)):(n(),s(d(x),{key:1,class:"page-internet-product-detail","data-skeleton-root":"LONG"},{default:h((()=>{var e,l,u,c,p,v,m,f,b,j,I,x,O,k,S,N,w,L,T;return[d(xe)?(n(),o("div",X,[g("当前页面仅用于保费试算预览"),Y,g("不展示其他产品相关配置信息")])):(n(),o(i,{key:0},[C("div",z,[1==(null==(l=null==(e=d(ce))?void 0:e.BASIC_INFO)?void 0:l.bannerType)&&(null==(c=null==(u=d(ce))?void 0:u.BASIC_INFO)?void 0:c.banner.length)?(n(),s(A,{key:0,"data-skeleton-type":"img",images:null==(v=null==(p=d(ce))?void 0:p.BASIC_INFO)?void 0:v.banner},null,8,["images"])):_("",!0),2==(null==(f=null==(m=d(ce))?void 0:m.BASIC_INFO)?void 0:f.bannerType)&&(null==(j=null==(b=d(ce))?void 0:b.BASIC_INFO)?void 0:j.video.length)?(n(),s(P,{key:1,"data-skeleton-type":"img",src:null==(I=d(ce))?void 0:I.BASIC_INFO.video[0]},null,8,["src"])):_("",!0),(null==(k=null==(O=null==(x=d(ce))?void 0:x.BASIC_INFO)?void 0:O.bannerMove)?void 0:k.length)?(n(),s(A,{key:2,url:null==(w=null==(N=null==(S=d(ce))?void 0:S.BASIC_INFO)?void 0:N.bannerMove)?void 0:w[0],onClick:Ae},null,8,["url"])):_("",!0),C("div",{ref_key:"observeRef",ref:re},null,512)]),(null==(L=d(ce))?void 0:L.GUARANTEE)?(n(),s(R,{key:0,"show-service-config":"","data-source":d(ce),"plan-list":d(_e),onUpdateActivePlan:Ve},null,8,["data-source","plan-list"])):_("",!0),C("div",{class:"trial-text-btn",onClick:ke},"算一算保费"),y(M,{"data-source":null==(T=d(ce))?void 0:T.ISSUE_CONDITION},null,8,["data-source"]),y(F,{ref_key:"detailScrollRef",ref:de,"data-source":d(ce)},null,8,["data-source"]),y(a,null,{default:h((()=>{var e,t,a;return[(null==(e=d(ce).SIGNATURE)?void 0:e.inscribedContent)?(n(),s(d(r),{key:0,"inscribed-content":null==(a=null==(t=d(ce))?void 0:t.SIGNATURE)?void 0:a.inscribedContent},null,8,["inscribed-content"])):_("",!0)]})),_:1}),y(a,null,{default:h((()=>{var e;return[(null==(e=d(Pe))?void 0:e.length)?(n(),s(d(q),{key:0,"attachment-list":d(Pe),"pre-text":"请阅读",onPreviewFile:t[0]||(t[0]=e=>(e=>{me.value=e,ve.value=!0})(e))},null,8,["attachment-list"])):_("",!0)]})),_:1})],64)),d(ue)&&d(Le)?(n(),s(E,{key:2,ref_key:"trialRef",ref:Oe,"data-source":d(he),"share-info":d(ye),"is-share":d(ye).isShare,"product-info":{productCode:d(pe).productCode,productName:d(pe).productName,productId:"",tenantId:d(Z),insurerCode:d(oe)},"default-data":d(we)?[d(we)]:null,"tenant-product-detail":d(ce),"hide-benefit":1!==d(pe).openFlag},null,8,["data-source","share-info","is-share","product-info","default-data","tenant-product-detail","hide-benefit"])):_("",!0),$]})),_:1})),d(fe)&&!d(xe)?(n(),s(V,{key:2,"product-detail":d(ce)},null,8,["product-detail"])):_("",!0),J,d(ve)?(n(),s(d(l),{key:3,show:d(ve),"onUpdate:show":t[1]||(t[1]=e=>O(ve)?ve.value=e:null),"content-list":d(be)?d(Pe):d(Fe),"is-only-view":d(be),"active-index":d(me),text:d(be)?"关闭":"我已逐页阅读并确认告知内容","force-read-cound":d(be)?0:d(Re),onSubmit:Be,onOnCloseFilePreviewByMask:Ue},null,8,["show","content-list","is-only-view","active-index","text","force-read-cound"])):_("",!0)],64)}}});export{Z as default};
