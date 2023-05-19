import{d as e,r as t,R as a,c as n,A as o,U as i,V as l,e as d,g as s,W as r,f as u,E as c,X as p,Y as v,a as m,u as f,L as I,Z as b,$ as h,a0 as j,a1 as C,w as _,h as y,i as g,j as S,a2 as O,a3 as x,a4 as k,a5 as N}from"./index-3457869f.js";import{g as w,i as L}from"./trial-db60b7e6.js";import{a as T,q as A}from"./product-60e07dc7.js";import{_ as P}from"./index-ee61c64e.js";import{V as F,G as R,_ as V}from"./index-abddc8b9.js";import{P as B}from"./index-63fd4ea4.js";import{u as U}from"./useAttachment-a1730864.js";import{g as E}from"./utils-db81387a.js";import{_ as D}from"./index-90a59c4f.js";import{q}from"./createProposal-8055d5c6.js";import"./pdfh5-008ca364.js";import"./infoCollection-574c0b57.js";import"./trial-252a50bd.js";import"./index-6551cc2b.js";import"./cloneDeep-0762f693.js";import"./_initCloneObject-da8458a4.js";import"./isObjectLike-a9798079.js";import"./_getTag-ef97f191.js";import"./debounce-eed12388.js";import"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-5b1b914c.js";import"./phoneVerify-dbb7892d.js";import"./index-702bb207.js";/* empty css              */import"./index-0d79d39d.js";import"./useDicData-7fc655ca.js";import"./bankCard-fbde6604.js";import"./TrialButton-1698d154.js";import"./index-41279402.js";import"./utils-3d717131.js";import"./constants-7afb7c3d.js";import"./nextStep-f9a39bad.js";import"./core-1f2e91c0.js";import"./constant-8927d485.js";import"./index-f8d13da3.js";import"./index-763f9f4b.js";import"./index-1e66b604.js";import"./empty-ae586b6c.js";import"./box-title-161f126c.js";import"./index-fb78772d.js";import"./echarts-ac920fed.js";import"./useOrder-5ef9f999.js";const G={class:"com-insure-limit"},M=e({name:"insureLimit"}),W=e({...M,props:{dataSource:{default:()=>[]}},setup(e){const u=e,c=t([]);return a((()=>u.dataSource),(()=>{var e,t;c.value=((null==(t=null==(e=u.dataSource)?void 0:e[0])?void 0:t.data)||[]).filter((e=>e.conditionValue))}),{deep:!0,immediate:!0}),(e,t)=>{const a=r;return n(),o("div",G,[(n(!0),o(i,null,l(s(c),((e,t)=>(n(),d(a,{key:t,title:e.conditionName,content:e.conditionValue},null,8,["title","content"])))),128))])}}});const z={class:"product-desc-wrap"},X={class:"product-name"},Y={class:"product-desc"},$=e({name:"productDesc"}),J=e({...$,props:{dataSource:{default:()=>({})}},setup:e=>(t,a)=>(n(),o("div",z,[u("div",X,c(e.dataSource.title),1),u("p",Y,c(e.dataSource.productDesc),1)]))});const Q={key:0},Z={class:"info"},H={key:1,class:"preview-placeholder"},K=u("br",null,null,-1),ee=u("div",{id:"insureButton"},null,-1),te=u("div",{id:"xinaoDialog"},null,-1),ae=e({name:"InsuranceLong"}),ne=e({...ae,setup(e){const l=p((()=>v((()=>import("./index-9cf88571.js")),["static/js/index-9cf88571.js","static/css/index-fa4edf2a.css","static/js/index-3457869f.js","static/css/index-08f51adc.css","static/js/pdfh5-008ca364.js","static/js/index-41279402.js","static/css/index-827a8544.css","static/js/utils-db81387a.js","static/js/infoCollection-574c0b57.js","static/js/trial-252a50bd.js"]))),r=p((()=>v((()=>import("./index-74e42fce.js")),["static/js/index-74e42fce.js","static/css/index-eabeb59f.css","static/js/index-3457869f.js","static/css/index-08f51adc.css","static/js/pdfh5-008ca364.js"]))),c=p((()=>v((()=>import("./index-5f5cc05c.js")),["static/js/index-5f5cc05c.js","static/css/index-3329e46f.css","static/js/index-3457869f.js","static/css/index-08f51adc.css","static/js/pdfh5-008ca364.js"])));m();const G=f(),{productCode:M="",tenantId:z,agentCode:X="",agencyCode:Y,saleChannelId:$,proposalId:ae,extraInfo:ne,orderNo:oe,insurerCode:ie,preview:le,trialPreview:de}=G.query;let se={};try{console.log("extInfo",decodeURIComponent(ne)),se=JSON.parse(decodeURIComponent(ne))}catch(De){}t();const re=t(),ue=t(),ce=t(!1),pe=t({}),ve=t({}),me=t(!1),fe=t(0),Ie=t(!1);t({});const be=t(!0);t(!0);const he=t(!0),je=t(""),Ce=t({}),_e=t({}),ye=t([]),ge=t({imgUrl:"",desc:"",title:"",link:`${window.location.href}&isShare=1`,isShare:!1}),Se=t({});I((()=>!!le||!!de));const Oe=I((()=>!!de)),xe=t(),ke=()=>{xe.value.open()},Ne=t([]),we=t(),Le=t(),Te=t(!1),Ae=async()=>{!Oe.value&&T({productCode:M,tenantId:z}).then((({data:e,code:t})=>{if("10000"===t){pe.value=e;const{wxShareConfig:t,showWXShare:a,title:n,desc:o,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};a?Object.assign(ge.value,{...t,imgUrl:t.image,isShare:a}):Object.assign(ge.value,{title:n,desc:o,imgUrl:i,isShare:a}),k(e.BASIC_INFO.themeType)}})),oe||ae||(Te.value=!0),oe&&w({orderNo:oe,tenantId:z}).then((({code:e,data:t})=>{"10000"===e&&(t.productCode=M,Le.value=t,Te.value=!0)})),ae&&q({id:ae,tenantId:z}).then((({code:e,data:t})=>{if("10000"===e){const{holder:e,insuredList:a}=t;Le.value={productCode:M,productName:"",renewFlag:"",holder:e,tenantId:z,insuredList:(a||[]).map((e=>({...e,productList:e.productList.filter((e=>e.productCode===M))})))},Te.value=!0}})),await L({productCode:M,isTenant:!1}).then((({data:e,code:t})=>{var a;"10000"===t&&(ce.value=!0,Ie.value=!0,ve.value=e,Ce.value=null==(a=e.productPlanInsureVOList)?void 0:a[0],ye.value=(e.productPlanInsureVOList||[]).filter((e=>e.planCode)).map((e=>({planName:e.planName,planCode:e.planCode}))))})),he.value=!1,A({productCode:M}).then((({code:e,data:t})=>{var a,n,o,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:l}=t;we.value=e||[];const{basicInfo:{questionnaireType:d},questions:s,questionnaireName:r}=(null==(a=null==l?void 0:l[0])?void 0:a.questionnaireDetailResponseVO)||{basicInfo:{}};2===d&&(Ne.value=[{attachmentName:r,attachmentUri:s,attachmentType:"question"}]),Ne.value=[{attachmentName:r,attachmentUri:null==(n=null==s?void 0:s[0])?void 0:n.content,attachmentType:E(String(null==(o=null==s?void 0:s[0])?void 0:o.textType),null==(i=null==s?void 0:s[0])?void 0:i.content)}]}}))};a((()=>Se.value.planCode),(e=>{Ce.value=(ve.value.productPlanInsureVOList||[]).find((t=>t.planCode===e))}));const Pe=()=>{re.value.handleClickTab()("insureButton")};t(""),t(0);const{fileList:Fe,mustReadFileCount:Re,popupFileList:Ve}=U(Ce,we),Be=e=>{Ce.value=(ve.value.productPlanInsureVOList||[]).find((t=>t.planCode===e))},Ue=()=>{me.value=!1,be.value=!0},Ee=()=>{me.value=!1,be.value=!0};return a((()=>Ce.value),(()=>{const{planCode:e,oilPackageProductVOList:t,insureProductRiskVOList:a}=Ce.value;Se.value.planCode=e,_e.value=(a||[]).find((e=>e.mainRiskFlag===b.YES))}),{deep:!0,immediate:!0}),h((()=>{j(ue,(([{isIntersecting:e}],t)=>{ce.value=!0}))})),C((()=>{he.value=!0,Ae(),setTimeout((async()=>{je.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const a=N;return n(),o(i,null,[s(he)?(n(),o("div",Q)):(n(),d(s(O),{key:1,class:"page-internet-product-detail","data-skeleton-root":"LONG"},{default:_((()=>{var e,l,p,v,m,f,I,b,h,j,C,O,x,k,N,w,L,T,A,B;return[s(Oe)?(n(),o("div",H,[S("当前页面仅用于保费试算预览"),K,S("不展示其他产品相关配置信息")])):(n(),o(i,{key:0},[u("div",Z,[1==(null==(l=null==(e=s(pe))?void 0:e.BASIC_INFO)?void 0:l.bannerType)&&(null==(v=null==(p=s(pe))?void 0:p.BASIC_INFO)?void 0:v.banner.length)?(n(),d(P,{key:0,"data-skeleton-type":"img",images:null==(f=null==(m=s(pe))?void 0:m.BASIC_INFO)?void 0:f.banner},null,8,["images"])):y("",!0),2==(null==(b=null==(I=s(pe))?void 0:I.BASIC_INFO)?void 0:b.bannerType)&&(null==(j=null==(h=s(pe))?void 0:h.BASIC_INFO)?void 0:j.video.length)?(n(),d(F,{key:1,"data-skeleton-type":"img",src:null==(C=s(pe))?void 0:C.BASIC_INFO.video[0]},null,8,["src"])):y("",!0),(null==(k=null==(x=null==(O=s(pe))?void 0:O.BASIC_INFO)?void 0:x.bannerMove)?void 0:k.length)?(n(),d(P,{key:2,url:null==(L=null==(w=null==(N=s(pe))?void 0:N.BASIC_INFO)?void 0:w.bannerMove)?void 0:L[0],onClick:Pe},null,8,["url"])):y("",!0),u("div",{ref_key:"observeRef",ref:ue},null,512)]),g(J,{"data-source":null==(T=s(pe))?void 0:T.BASIC_INFO},null,8,["data-source"]),(null==(A=s(pe))?void 0:A.GUARANTEE)?(n(),d(R,{key:0,"show-service-config":"","data-source":s(pe),"plan-list":s(ye),onUpdateActivePlan:Be},null,8,["data-source","plan-list"])):y("",!0),u("div",{class:"trial-text-btn",onClick:ke},"算一算保费"),g(W,{"data-source":null==(B=s(pe))?void 0:B.ISSUE_CONDITION},null,8,["data-source"]),g(V,{ref_key:"detailScrollRef",ref:re,"data-source":s(pe)},null,8,["data-source"]),g(a,null,{default:_((()=>{var e,t,a;return[(null==(e=s(pe).SIGNATURE)?void 0:e.inscribedContent)?(n(),d(s(r),{key:0,"inscribed-content":null==(a=null==(t=s(pe))?void 0:t.SIGNATURE)?void 0:a.inscribedContent},null,8,["inscribed-content"])):y("",!0)]})),_:1}),g(a,null,{default:_((()=>{var e;return[(null==(e=s(Fe))?void 0:e.length)?(n(),d(s(c),{key:0,"attachment-list":s(Fe),"pre-text":"请阅读",onPreviewFile:t[0]||(t[0]=e=>(e=>{fe.value=e,me.value=!0})(e))},null,8,["attachment-list"])):y("",!0)]})),_:1})],64)),s(ce)&&s(Te)?(n(),d(D,{key:2,ref_key:"trialRef",ref:xe,"data-source":s(Ce),"share-info":s(ge),"is-share":s(ge).isShare,"product-info":{productCode:s(ve).productCode,productName:s(ve).productName,productId:"",tenantId:s(z),insurerCode:s(ie)},"default-data":s(Le)?[s(Le)]:null,"current-order-detail":s(Le),"tenant-product-detail":s(pe),"hide-benefit":1!==s(ve).openFlag},null,8,["data-source","share-info","is-share","product-info","default-data","current-order-detail","tenant-product-detail","hide-benefit"])):y("",!0),ee]})),_:1})),s(Ie)&&!s(Oe)?(n(),d(B,{key:2,"product-detail":s(pe)},null,8,["product-detail"])):y("",!0),te,s(me)?(n(),d(s(l),{key:3,show:s(me),"onUpdate:show":t[1]||(t[1]=e=>x(me)?me.value=e:null),"content-list":s(be)?s(Fe):s(Ve),"is-only-view":s(be),"active-index":s(fe),text:s(be)?"关闭":"我已逐页阅读并确认告知内容","force-read-cound":s(be)?0:s(Re),onSubmit:Ue,onOnCloseFilePreviewByMask:Ee},null,8,["show","content-list","is-only-view","active-index","text","force-read-cound"])):y("",!0)],64)}}});export{ne as default};
