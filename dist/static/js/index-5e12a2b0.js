import{d as e,r as t,Q as a,c as n,y as i,R as o,U as l,e as s,g as r,V as d,W as u,X as c,a as p,u as v,K as m,Y as f,Z as I,$ as j,a0 as C,b as h,f as _,h as b,i as y,w as k,j as x,a1 as O,a2 as g,a3 as S}from"./index-000b7445.js";import{i as N}from"./trial-220a9a50.js";import{a as w,q as T}from"./product-ce7756ec.js";import{_ as L}from"./index-692537c5.js";import{G as P,_ as R}from"./index-f2c971a5.js";import{P as A}from"./index-7e83ff96.js";import{u as V}from"./useAttachment-43dfb18c.js";import{g as F}from"./utils-fc751943.js";import{T as U}from"./index-5a64c594.js";import"./pdfh5-008ca364.js";import"./infoCollection-048f5375.js";import"./trial-8fc2f293.js";import"./index-c4c2aaab.js";import"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-6fc2b1cf.js";import"./bankCard-e3843884.js";import"./phoneVerify-14f3a6d4.js";import"./keysIn-3ff85984.js";import"./isObjectLike-a9798079.js";/* empty css              */import"./index-5e8e502f.js";import"./debounce-eed12388.js";import"./index-1178332c.js";import"./cloneDeep-91e31c47.js";import"./index-db455601.js";import"./utils-ba9d6336.js";import"./index-032964ce.js";import"./utils-7af493b7.js";import"./box-title-dffb9380.js";import"./index-26459061.js";import"./echarts-ac920fed.js";import"./Table-43bb5961.js";import"./empty-c926d8ec.js";import"./useOrder-a2aa63a9.js";import"./constants-7afb7c3d.js";import"./nextStep-fe1e1e34.js";import"./core-5bdfb048.js";import"./constant-c3f28a3b.js";import"./pageJump-a98634cf.js";const B={class:"com-insure-limit"},E=e({name:"insureLimit"}),D=e({...E,props:{dataSource:{default:()=>[]}},setup(e){const u=e,c=t([]);return a((()=>u.dataSource),(()=>{var e,t;c.value=((null==(t=null==(e=u.dataSource)?void 0:e[0])?void 0:t.data)||[]).filter((e=>e.conditionValue))}),{deep:!0,immediate:!0}),(e,t)=>{const a=d;return n(),i("div",B,[(n(!0),i(o,null,l(r(c),((e,t)=>(n(),s(a,{key:t,title:e.conditionName,content:e.conditionValue},null,8,["title","content"])))),128))])}}});const q={key:0},G={key:1,class:"page-internet-product-detail","data-skeleton-root":"LONG"},M={class:"info"},W={key:1,class:"preview-placeholder"},z=_("br",null,null,-1),J=_("div",{id:"insureButton"},null,-1),Q=_("div",{id:"xinaoDialog"},null,-1),X=e({name:"InsuranceLong"}),Y=e({...X,setup(e){const l=u((()=>c((()=>import("./index-4e4ee88c.js")),["static/js/index-4e4ee88c.js","static/css/index-fa4edf2a.css","static/js/index-000b7445.js","static/css/index-3be92ec8.css","static/js/pdfh5-008ca364.js","static/js/index-032964ce.js","static/css/index-827a8544.css","static/js/utils-fc751943.js","static/js/infoCollection-048f5375.js","static/js/trial-8fc2f293.js"]))),d=u((()=>c((()=>import("./index-239b7cae.js")),["static/js/index-239b7cae.js","static/css/index-eabeb59f.css","static/js/index-000b7445.js","static/css/index-3be92ec8.css","static/js/pdfh5-008ca364.js"]))),B=u((()=>c((()=>import("./index-2d2e9031.js")),["static/js/index-2d2e9031.js","static/css/index-3329e46f.css","static/js/index-000b7445.js","static/css/index-3be92ec8.css","static/js/pdfh5-008ca364.js"])));p();const E=v(),{productCode:X="",tenantId:Y,agentCode:K="",agencyCode:Z,saleChannelId:$,extraInfo:H,insurerCode:ee,preview:te,trialPreview:ae}=E.query;let ne={};try{console.log("extInfo",decodeURIComponent(H)),ne=JSON.parse(decodeURIComponent(H))}catch(Re){}t();const ie=t(),oe=t(),le=t(!1),se=t({}),re=t({}),de=t(!1),ue=t(0),ce=t(!1);t({});const pe=t(!0);t(!0);const ve=t(!0),me=t(""),fe=t({}),Ie=t({}),je=t([]),Ce=t({imgUrl:"",desc:"",title:"",link:window.location.href,isShare:!1}),he=t({});m((()=>!!te||!!ae));const _e=m((()=>!!ae)),be=t(),ye=()=>{be.value.open()},ke=t([]),xe=t(),Oe=async()=>{!_e.value&&w({productCode:X,tenantId:Y,isTenant:!te}).then((({data:e,code:t})=>{if("10000"===t){se.value=e,document.title=e.BASIC_INFO.title||"";const{title:t,desc:a,image:n}=(null==e?void 0:e.PRODUCT_LIST.wxShareConfig)||{},[i=""]=n||[];Object.assign(Ce.value,{title:t,desc:a,image:i,isShare:!!(null==e?void 0:e.PRODUCT_LIST.showWXShare)}),g(e.BASIC_INFO.themeType)}})),await N({productCode:X,isTenant:!1}).then((({data:e,code:t})=>{var a;"10000"===t&&(le.value=!0,ce.value=!0,re.value=e,fe.value=null==(a=e.productPlanInsureVOList)?void 0:a[0],je.value=(e.productPlanInsureVOList||[]).filter((e=>e.planCode)).map((e=>({planName:e.planName,planCode:e.planCode}))))})),ve.value=!1,T({productCode:X}).then((({code:e,data:t})=>{var a,n,i,o;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:l}=t;xe.value=e||[];const{basicInfo:{questionnaireType:s},questions:r,questionnaireName:d}=(null==(a=null==l?void 0:l[0])?void 0:a.questionnaireDetailResponseVO)||{basicInfo:{}};2===s&&(ke.value=[{attachmentName:d,attachmentUri:r,attachmentType:"question"}]),ke.value=[{attachmentName:d,attachmentUri:null==(n=null==r?void 0:r[0])?void 0:n.content,attachmentType:F(String(null==(i=null==r?void 0:r[0])?void 0:i.textType),null==(o=null==r?void 0:r[0])?void 0:o.content)}]}}))};a((()=>he.value.planCode),(e=>{fe.value=(re.value.productPlanInsureVOList||[]).find((t=>t.planCode===e))}));const ge=()=>{ie.value.handleClickTab()("insureButton")};t(""),t(0);const{fileList:Se,mustReadFileCount:Ne,popupFileList:we}=V(fe,xe),Te=e=>{fe.value=(re.value.productPlanInsureVOList||[]).find((t=>t.planCode===e))},Le=()=>{de.value=!1,pe.value=!0},Pe=()=>{de.value=!1,pe.value=!0};return a((()=>fe.value),(()=>{const{planCode:e,oilPackageProductVOList:t,insureProductRiskVOList:a}=fe.value;he.value.planCode=e,Ie.value=(a||[]).find((e=>e.mainRiskFlag===f.YES))}),{deep:!0,immediate:!0}),I((()=>{j(oe,(([{isIntersecting:e}],t)=>{le.value=!0}))})),C((()=>{ve.value=!0,Oe(),setTimeout((async()=>{me.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{var a,u,c,p,v,m,f,I,j,C,g,N,w,T;const V=h("Video"),F=S;return n(),i(o,null,[r(ve)?(n(),i("div",q)):(n(),i("div",G,[r(_e)?(n(),i("div",W,[x("当前页面仅用于保费试算预览"),z,x("不展示其他产品相关配置信息")])):(n(),i(o,{key:0},[_("div",M,[(null==(u=null==(a=r(se))?void 0:a.BASIC_INFO)?void 0:u.banner.length)?(n(),s(L,{key:0,"data-skeleton-type":"img",url:null==(c=r(se))?void 0:c.BASIC_INFO.banner[0]},null,8,["url"])):b("",!0),(null==(v=null==(p=r(se))?void 0:p.BASIC_INFO)?void 0:v.video.length)?(n(),s(V,{key:1,"data-skeleton-type":"img",src:null==(m=r(se))?void 0:m.BASIC_INFO.video[0]},null,8,["src"])):b("",!0),(null==(j=null==(I=null==(f=r(se))?void 0:f.BASIC_INFO)?void 0:I.bannerMove)?void 0:j.length)?(n(),s(L,{key:2,url:null==(N=null==(g=null==(C=r(se))?void 0:C.BASIC_INFO)?void 0:g.bannerMove)?void 0:N[0],onClick:ge},null,8,["url"])):b("",!0),_("div",{ref_key:"observeRef",ref:oe},null,512)]),(null==(w=r(se))?void 0:w.GUARANTEE)?(n(),s(P,{key:0,"show-service-config":"","data-source":r(se),"plan-list":r(je),onUpdateActivePlan:Te},null,8,["data-source","plan-list"])):b("",!0),_("div",{class:"trial-text-btn",onClick:ye},"算一算保费"),y(D,{"data-source":null==(T=r(se))?void 0:T.ISSUE_CONDITION},null,8,["data-source"]),y(R,{ref_key:"detailScrollRef",ref:ie,"data-source":r(se)},null,8,["data-source"]),y(F,null,{default:k((()=>{var e,t,a;return[(null==(e=r(se).SIGNATURE)?void 0:e.inscribedContent)?(n(),s(r(d),{key:0,"inscribed-content":null==(a=null==(t=r(se))?void 0:t.SIGNATURE)?void 0:a.inscribedContent},null,8,["inscribed-content"])):b("",!0)]})),_:1}),y(F,null,{default:k((()=>{var e;return[(null==(e=r(Se))?void 0:e.length)?(n(),s(r(B),{key:0,"attachment-list":r(Se),"pre-text":"请阅读",onPreviewFile:t[0]||(t[0]=e=>(e=>{ue.value=e,de.value=!0})(e))},null,8,["attachment-list"])):b("",!0)]})),_:1})],64)),r(le)?(n(),s(U,{key:2,ref_key:"trialRef",ref:be,"data-source":r(fe),"share-info":r(Ce),"is-share":r(Ce).isShare,"product-info":{productCode:r(re).productCode,productName:r(re).productName,productId:"",tenantId:r(Y),insurerCode:r(ee)},"tenant-product-detail":r(se)},null,8,["data-source","share-info","is-share","product-info","tenant-product-detail"])):b("",!0),J])),r(ce)&&!r(_e)?(n(),s(A,{key:2,"product-detail":r(se)},null,8,["product-detail"])):b("",!0),Q,r(de)?(n(),s(r(l),{key:3,show:r(de),"onUpdate:show":t[1]||(t[1]=e=>O(de)?de.value=e:null),"content-list":r(pe)?r(Se):r(we),"is-only-view":r(pe),"active-index":r(ue),text:r(pe)?"关闭":"我已逐页阅读并确认告知内容","force-read-cound":r(pe)?0:r(Ne),onSubmit:Le,onOnCloseFilePreviewByMask:Pe},null,8,["show","content-list","is-only-view","active-index","text","force-read-cound"])):b("",!0)],64)}}});export{Y as default};
