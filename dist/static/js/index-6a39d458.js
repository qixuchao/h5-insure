import{d as e,r as t,R as a,b as n,c as o,U as i,V as l,g as s,f as d,W as r,i as u,E as c,X as p,Y as v,a as m,u as f,L as I,Z as b,$ as h,a0 as j,a1 as C,e as _,h as y,w as g,j as O,a2 as S,a3 as x,n as k,a4 as N}from"./index-6e6fc42f.js";import{g as L,i as w}from"./trial-9a240c7c.js";import{a as T,q as A}from"./product-f5b34532.js";import{_ as F}from"./index-0fd82c98.js";import{V as P,G as B,_ as R}from"./index-051cddf4.js";import{P as V}from"./index-44724098.js";import{u as U}from"./useAttachment-1b5ed7db.js";import{g as E}from"./utils-8770a445.js";import{_ as D}from"./index-1f6f5946.js";import{q}from"./createProposal-d9b9cac8.js";import{u as G}from"./useOrder-a7370e40.js";import"./pdfh5-008ca364.js";import"./infoCollection-eba94909.js";import"./useThread-c502137a.js";import"./trial-5520f9a9.js";import"./index-a0c6bf28.js";import"./cloneDeep-6abacc69.js";import"./keysIn-131bbce9.js";import"./isObjectLike-a9798079.js";import"./_getTag-d5b47d26.js";import"./debounce-eed12388.js";import"./merge-e7788e50.js";import"./index-7337a6f7.js";import"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-9a7a1b37.js";import"./phoneVerify-8839a0af.js";/* empty css              */import"./index-c426dba7.js";import"./useDicData-9af521f2.js";import"./bankCard-c752e2be.js";import"./TrialButton-a7a93169.js";import"./index-5e7268da.js";import"./index-a4f92ab5.js";import"./index-57cca7a3.js";import"./index-4244ade0.js";import"./empty-ae586b6c.js";import"./box-title-80b27da6.js";import"./index-ba4e26b9.js";import"./echarts-ac920fed.js";import"./utils-ca035b8b.js";import"./constants-7afb7c3d.js";import"./nextStep-e00e3fb6.js";import"./core-0c484e10.js";import"./constant-8927d485.js";const M={class:"com-insure-limit"},W=e({name:"insureLimit"}),z=e({...W,props:{dataSource:{default:()=>[]}},setup(e){const u=e,c=t([]);return a((()=>u.dataSource),(()=>{var e,t;c.value=((null==(t=null==(e=u.dataSource)?void 0:e[0])?void 0:t.data)||[]).filter((e=>e.conditionValue))}),{deep:!0,immediate:!0}),(e,t)=>{const a=r;return n(),o("div",M,[(n(!0),o(i,null,l(d(c),((e,t)=>(n(),s(a,{key:t,title:e.conditionName,content:e.conditionValue},null,8,["title","content"])))),128))])}}});const X={class:"product-desc-wrap"},Y={class:"product-name"},$={class:"product-desc"},J=e({name:"productDesc"}),Q=e({...J,props:{dataSource:{default:()=>({})}},setup:e=>(t,a)=>(n(),o("div",X,[u("div",Y,c(e.dataSource.title),1),u("p",$,c(e.dataSource.productDesc),1)]))});const Z={key:0},H={key:1,class:"page-internet-product-detail","data-skeleton-root":"LONG"},K={class:"info"},ee={key:1,class:"preview-placeholder"},te=u("br",null,null,-1),ae=u("div",{id:"insureButton"},null,-1),ne=u("div",{id:"xinaoDialog"},null,-1),oe=e({name:"InsuranceLong"}),ie=e({...oe,setup(e){const l=p((()=>v((()=>import("./index-ad026f08.js")),["static/js/index-ad026f08.js","static/css/index-fa4edf2a.css","static/js/index-6e6fc42f.js","static/css/index-32bbfd6b.css","static/js/pdfh5-008ca364.js","static/js/theme-65292714.js","static/js/index-5e7268da.js","static/css/index-827a8544.css","static/js/utils-8770a445.js","static/js/infoCollection-eba94909.js","static/js/trial-5520f9a9.js"]))),r=p((()=>v((()=>import("./index-50401e84.js")),["static/js/index-50401e84.js","static/css/index-eabeb59f.css","static/js/index-6e6fc42f.js","static/css/index-32bbfd6b.css","static/js/pdfh5-008ca364.js"]))),c=p((()=>v((()=>import("./index-8b2d235a.js")),["static/js/index-8b2d235a.js","static/css/index-4640d9aa.css","static/js/index-6e6fc42f.js","static/css/index-32bbfd6b.css","static/js/pdfh5-008ca364.js"])));m();const M=f(),{productCode:W="",tenantId:X,agentCode:Y="",agencyCode:$,saleChannelId:J,proposalId:oe,extraInfo:ie,orderNo:le,insurerCode:se,preview:de,trialPreview:re}=M.query;let ue={};try{console.log("extInfo",decodeURIComponent(ie)),ue=JSON.parse(decodeURIComponent(ie))}catch(Me){}t();const ce=t(),pe=t(),ve=t(!1),me=t({}),fe=t({}),Ie=t(!1),be=t(0),he=t(!1);t({});const je=t(!0);t(!0);const Ce=t(!0),_e=t(""),ye=t({}),ge=t({}),Oe=t([]),Se=t({imgUrl:"",desc:"",title:"",link:`${window.location.href}&isShare=1`,isShare:!1}),xe=t({});I((()=>!!de||!!re));const ke=I((()=>!!re)),Ne=t(),Le=()=>{Ne.value.open()},we=t([]),Te=t(),Ae=t(),Fe=G(),Pe=t(!1),Be=async()=>{!ke.value&&T({productCode:W,tenantId:X}).then((({data:e,code:t})=>{if("10000"===t){me.value=e;const{wxShareConfig:t,showWXShare:a,title:n,desc:o,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};a?Object.assign(Se.value,{...t,imgUrl:t.image,isShare:a}):Object.assign(Se.value,{title:n,desc:o,imgUrl:i,isShare:a}),e.BASIC_INFO&&e.BASIC_INFO.themeType&&x(e.BASIC_INFO.themeType)}})),le||oe||(Pe.value=!0),le&&L({orderNo:le,tenantId:X}).then((({code:e,data:t})=>{"10000"===e&&(t.productCode=W,Ae.value=t,Pe.value=!0)})),oe&&q({id:oe,tenantId:X}).then((({code:e,data:t})=>{if("10000"===e){const{holder:e,insuredList:a}=t;Ae.value=Object.assign(Fe.value,{productCode:W,productName:"",renewFlag:"",holder:e,tenantId:X,insuredList:(a||[]).map((e=>({...e,productList:e.productList.filter((e=>e.productCode===W))})))}),Pe.value=!0}})),await w({productCode:W,isTenant:!1}).then((({data:e,code:t})=>{var a;"10000"===t&&(ve.value=!0,he.value=!0,fe.value=e,ye.value=null==(a=e.productPlanInsureVOList)?void 0:a[0],Oe.value=(e.productPlanInsureVOList||[]).filter((e=>e.planCode)).map((e=>({planName:e.planName,planCode:e.planCode}))))})),Ce.value=!1,A({productCode:W}).then((({code:e,data:t})=>{var a,n,o,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:l}=t;Te.value=e||[];const{basicInfo:{questionnaireType:s},questions:d,questionnaireName:r}=(null==(a=null==l?void 0:l[0])?void 0:a.questionnaireDetailResponseVO)||{basicInfo:{}};2===s&&(we.value=[{attachmentName:r,attachmentUri:d,attachmentType:"question"}]),we.value=[{attachmentName:r,attachmentUri:null==(n=null==d?void 0:d[0])?void 0:n.content,attachmentType:E(String(null==(o=null==d?void 0:d[0])?void 0:o.textType),null==(i=null==d?void 0:d[0])?void 0:i.content)}]}}))};a((()=>xe.value.planCode),(e=>{ye.value=(fe.value.productPlanInsureVOList||[]).find((t=>t.planCode===e))}));const Re=()=>{ce.value.handleClickTab()("insureButton")};t(""),t(0);const{fileList:Ve,mustReadFileCount:Ue,popupFileList:Ee}=U(ye,Te),De=e=>{ye.value=(fe.value.productPlanInsureVOList||[]).find((t=>t.planCode===e))},qe=()=>{Ie.value=!1,je.value=!0},Ge=()=>{Ie.value=!1,je.value=!0};return a((()=>ye.value),(()=>{const{planCode:e,oilPackageProductVOList:t,insureProductRiskVOList:a}=ye.value;xe.value.planCode=e,ge.value=(a||[]).find((e=>e.mainRiskFlag===b.YES))}),{deep:!0,immediate:!0}),h((()=>{j(pe,(([{isIntersecting:e}],t)=>{ve.value=!0}))})),C((()=>{Ce.value=!0,Be(),setTimeout((async()=>{_e.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{var a,p,v,m,f,I,b,h,j,C,x,L,w,T,A,U,E,q,G,M;const W=k,Y=N;return n(),o(i,null,[d(Ce)?(n(),o("div",Z)):(n(),o("div",H,[_(W),d(ke)?(n(),o("div",ee,[O("当前页面仅用于保费试算预览"),te,O("不展示其他产品相关配置信息")])):(n(),o(i,{key:0},[u("div",K,[1==(null==(p=null==(a=d(me))?void 0:a.BASIC_INFO)?void 0:p.bannerType)&&(null==(m=null==(v=d(me))?void 0:v.BASIC_INFO)?void 0:m.banner.length)?(n(),s(F,{key:0,"data-skeleton-type":"img",images:null==(I=null==(f=d(me))?void 0:f.BASIC_INFO)?void 0:I.banner},null,8,["images"])):y("",!0),2==(null==(h=null==(b=d(me))?void 0:b.BASIC_INFO)?void 0:h.bannerType)&&(null==(C=null==(j=d(me))?void 0:j.BASIC_INFO)?void 0:C.video.length)?(n(),s(P,{key:1,"data-skeleton-type":"img",src:null==(x=d(me))?void 0:x.BASIC_INFO.video[0]},null,8,["src"])):y("",!0),(null==(T=null==(w=null==(L=d(me))?void 0:L.BASIC_INFO)?void 0:w.bannerMove)?void 0:T.length)?(n(),s(F,{key:2,url:null==(E=null==(U=null==(A=d(me))?void 0:A.BASIC_INFO)?void 0:U.bannerMove)?void 0:E[0],onClick:Re},null,8,["url"])):y("",!0),u("div",{ref_key:"observeRef",ref:pe},null,512)]),_(Q,{"data-source":null==(q=d(me))?void 0:q.BASIC_INFO},null,8,["data-source"]),(null==(G=d(me))?void 0:G.GUARANTEE)?(n(),s(B,{key:0,"show-service-config":"","data-source":d(me),"plan-list":d(Oe),onUpdateActivePlan:De},null,8,["data-source","plan-list"])):y("",!0),u("div",{class:"trial-text-btn",onClick:Le},"算一算保费"),_(z,{"data-source":null==(M=d(me))?void 0:M.ISSUE_CONDITION},null,8,["data-source"]),_(R,{ref_key:"detailScrollRef",ref:ce,"data-source":d(me)},null,8,["data-source"]),_(Y,null,{default:g((()=>{var e,t,a;return[(null==(e=d(me).SIGNATURE)?void 0:e.inscribedContent)?(n(),s(d(r),{key:0,"inscribed-content":null==(a=null==(t=d(me))?void 0:t.SIGNATURE)?void 0:a.inscribedContent},null,8,["inscribed-content"])):y("",!0)]})),_:1}),_(Y,null,{default:g((()=>{var e;return[(null==(e=d(Ve))?void 0:e.length)?(n(),s(d(c),{key:0,"attachment-list":d(Ve),"pre-text":"请阅读",onPreviewFile:t[0]||(t[0]=e=>(e=>{be.value=e,Ie.value=!0})(e))},null,8,["attachment-list"])):y("",!0)]})),_:1})],64)),d(ve)&&d(Pe)?(n(),s(D,{key:2,ref_key:"trialRef",ref:Ne,"data-source":d(ye),"share-info":d(Se),"is-share":d(Se).isShare,"product-info":{productCode:d(fe).productCode,productName:d(fe).productName,productId:"",tenantId:d(X),insurerCode:d(se),planList:d(fe).productPlanInsureVOList},"default-data":d(Ae)?[d(Ae)]:null,"current-order-detail":d(Ae),"tenant-product-detail":d(me),"hide-benefit":1!==d(fe).openFlag},null,8,["data-source","share-info","is-share","product-info","default-data","current-order-detail","tenant-product-detail","hide-benefit"])):y("",!0),ae])),d(he)&&!d(ke)?(n(),s(V,{key:2,"product-detail":d(me)},null,8,["product-detail"])):y("",!0),ne,d(Ie)?(n(),s(d(l),{key:3,show:d(Ie),"onUpdate:show":t[1]||(t[1]=e=>S(Ie)?Ie.value=e:null),"content-list":d(je)?d(Ve):d(Ee),"is-only-view":d(je),"active-index":d(be),text:d(je)?"关闭":"我已逐页阅读并确认告知内容","force-read-cound":d(je)?0:d(Ue),onSubmit:qe,onOnCloseFilePreviewByMask:Ge},null,8,["show","content-list","is-only-view","active-index","text","force-read-cound"])):y("",!0)],64)}}});export{ie as default};
