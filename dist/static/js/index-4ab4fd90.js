import{d as e,bY as t,bZ as a,u as n,a as l,r as o,E as i,an as s,a9 as d,b6 as u,G as r,c,h as v,g as p,F as m,j as f,e as C,k as I,f as _,w as h,n as y,a7 as b,ck as k,c0 as g,c7 as w}from"./index-f531a243.js";import{i as O}from"./trial-79a27ca4.js";import{b as x,c as N}from"./product-d5e8a929.js";import{_ as T}from"./index-762e4e42.js";import{u as P,G as R,_ as j}from"./useAttachment-b8e4b001.js";import{P as A}from"./index-7baa2213.js";import{g as L}from"./utils-6f27c1ea.js";import"./pdfh5-008ca364.js";import"./infoCollection-5bf6c7fd.js";import"./trial-1322ae6f.js";const S={key:0},E={key:1,class:"page-internet-product-detail","data-skeleton-root":"LONG"},F={class:"info"},V={key:1,class:"preview-placeholder"},B=f("br",null,null,-1),U=f("span",{id:"insureButton"},null,-1),D=f("div",{id:"xinaoDialog"},null,-1),q=e({__name:"index",setup(e){const q=t((()=>a((()=>import("./index-b7682838.js")),["static/js/index-b7682838.js","static/css/index-d98b92fb.css","static/js/index-f531a243.js","static/css/index-90b47c2e.css","static/js/pdfh5-008ca364.js","static/js/ProAddress.vue_vue_type_style_index_0_scoped_true_lang-dbe922a9.js","static/css/ProAddress.vue_vue_type_style_index_0_scoped_true_lang-d13f791f.css","static/js/index-051409f4.js","static/css/index-ea4f829a.css","static/js/index-9fee9f63.js","static/css/index-823df9a1.css","static/js/index-79005c4d.js","static/css/index-c3fdf902.css","static/js/cloneDeep-aaa98338.js","static/js/keysIn-b3061da8.js","static/js/isObjectLike-d00d103b.js","static/js/trial-79a27ca4.js","static/js/index-9f069e46.js","static/js/TrialButton-2fbc0361.js","static/css/TrialButton-12c183b3.css","static/js/index-f086edc8.js","static/css/index-85f26bb0.css","static/js/index-847f8a2c.js","static/css/index-973d8570.css","static/js/empty-ae586b6c.js","static/js/box-title-67ea4899.js","static/css/box-title-54f6fe95.css","static/js/index-bf58c72d.js","static/js/echarts-5af64754.js","static/js/Table-34d14851.js","static/css/Table-da427f8c.css"]))),G=t((()=>a((()=>import("./index-7a3289fe.js")),["static/js/index-7a3289fe.js","static/css/index-ea588f10.css","static/js/index-f531a243.js","static/css/index-90b47c2e.css","static/js/pdfh5-008ca364.js","static/js/theme-65292714.js","static/js/index-f086edc8.js","static/css/index-85f26bb0.css","static/js/utils-6f27c1ea.js","static/js/infoCollection-5bf6c7fd.js","static/js/trial-1322ae6f.js"]))),M=t((()=>a((()=>import("./index-901a60b6.js")),["static/js/index-901a60b6.js","static/css/index-dc37224c.css","static/js/index-f531a243.js","static/css/index-90b47c2e.css","static/js/pdfh5-008ca364.js"]))),z=t((()=>a((()=>import("./index-b78dc58b.js")),["static/js/index-b78dc58b.js","static/css/index-b9ba3011.css","static/js/index-f531a243.js","static/css/index-90b47c2e.css","static/js/pdfh5-008ca364.js"])));n();const Y=l(),{productCode:J="",tenantId:Q,agentCode:Z="",agencyCode:H,saleChannelId:K,extraInfo:W,insurerCode:X,preview:$,trialPreview:ee}=Y.query;let te={};try{console.log("extInfo",decodeURIComponent(W)),te=JSON.parse(decodeURIComponent(W))}catch(Re){}o();const ae=o(),ne=o(),le=o(!0),oe=o({}),ie=o({}),se=o(!1),de=o(0),ue=o(!1);o({});const re=o(!0);o(!0);const ce=o(!0),ve=o(""),pe=o({}),me=o({}),fe=o([]),Ce=o({imgUrl:"",desc:"",title:"",link:window.location.href}),Ie=o({});i((()=>!!$||!!ee));const _e=i((()=>!!ee)),he=o(),ye=()=>{he.value.open()},be=o([]),ke=o(),ge=async()=>{!_e.value&&x({productCode:J,tenantId:Q,isTenant:!$}).then((({data:e,code:t})=>{if("10000"===t){oe.value=e,document.title=e.BASIC_INFO.title||"";const{title:t,desc:n,image:l}=(null==e?void 0:e.PRODUCT_LIST.wxShareConfig)||{};a={title:t,desc:n,image:l},Ce.value={desc:a.desc||"你好，这里是描述",imgUrl:a.image,title:a.title,link:window.location.href},k(e.BASIC_INFO.themeType)}var a})),await O({productCode:J,isTenant:!$||!ee}).then((({data:e,code:t})=>{var a;"10000"===t&&(ue.value=!0,ie.value=e,pe.value=null==(a=e.productPlanInsureVOList)?void 0:a[0],fe.value=(e.productPlanInsureVOList||[]).filter((e=>e.planCode)).map((e=>({planName:e.planName,planCode:e.planCode}))))})),ce.value=!1,N({productCode:J}).then((({code:e,data:t})=>{var a,n,l,o;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:i}=t;ke.value=e||[];const{basicInfo:{questionnaireType:s},questions:d,questionnaireName:u}=(null==(a=null==i?void 0:i[0])?void 0:a.questionnaireDetailResponseVO)||{basicInfo:{}};2===s&&(be.value=[{attachmentName:u,attachmentUri:d,attachmentType:"question"}]),be.value=[{attachmentName:u,attachmentUri:null==(n=null==d?void 0:d[0])?void 0:n.content,attachmentType:L(String(null==(l=null==d?void 0:d[0])?void 0:l.textType),null==(o=null==d?void 0:d[0])?void 0:o.content)}]}}))};s((()=>Ie.value.planCode),(e=>{pe.value=(ie.value.productPlanInsureVOList||[]).find((t=>t.planCode===e))}));const we=()=>{ae.value.handleClickTab()("insureButton")};o(""),o(0);const{fileList:Oe,mustReadFileCount:xe,popupFileList:Ne}=P(pe,ke),Te=()=>{se.value=!1,re.value=!0},Pe=()=>{se.value=!1,re.value=!0};return s((()=>pe.value),(()=>{const{planCode:e,oilPackageProductVOList:t,insureProductRiskVOList:a}=pe.value;Ie.value.planCode=e,me.value=(a||[]).find((e=>e.mainRiskFlag===d.YES))}),{deep:!0,immediate:!0}),u((()=>{g(ne,(([{isIntersecting:e}],t)=>{le.value=!0}))})),r((()=>{ce.value=!0,ge(),setTimeout((async()=>{ve.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{var a,n,l,o,i,s,d,u,r,k;const g=w;return c(),v(m,null,[p(ce)?(c(),v("div",S)):(c(),v("div",E,[p(_e)?(c(),v("div",V,[y("当前页面仅用于保费试算预览"),B,y("不展示其他产品相关配置信息")])):(c(),v(m,{key:0},[f("div",F,[(null==(n=null==(a=p(oe))?void 0:a.BASIC_INFO)?void 0:n.banner.length)?(c(),C(T,{key:0,"data-skeleton-type":"img",url:null==(l=p(oe))?void 0:l.BASIC_INFO.banner[0]},null,8,["url"])):I("",!0),(null==(s=null==(i=null==(o=p(oe))?void 0:o.BASIC_INFO)?void 0:i.bannerMove)?void 0:s.length)?(c(),C(T,{key:1,url:null==(r=null==(u=null==(d=p(oe))?void 0:d.BASIC_INFO)?void 0:u.bannerMove)?void 0:r[0],onClick:we},null,8,["url"])):I("",!0),f("div",{ref_key:"observeRef",ref:ne},null,512)]),(null==(k=p(oe))?void 0:k.GUARANTEE)?(c(),C(R,{key:0,"show-service-config":"","data-source":p(oe),"plan-list":p(fe)},null,8,["data-source","plan-list"])):I("",!0),f("div",{class:"trial-text-btn",onClick:ye},"算一算保费"),_(j,{ref:"tenantProductDetailScrollRef","data-source":p(oe)},null,8,["data-source"]),_(g,null,{default:h((()=>{var e,t,a;return[(null==(e=p(oe).SIGNATURE)?void 0:e.inscribedContent)?(c(),C(p(M),{key:0,"inscribed-content":null==(a=null==(t=p(oe))?void 0:t.SIGNATURE)?void 0:a.inscribedContent},null,8,["inscribed-content"])):I("",!0)]})),_:1}),_(g,null,{default:h((()=>{var e;return[(null==(e=p(Oe))?void 0:e.length)?(c(),C(p(z),{key:0,"attachement-list":p(Oe),"pre-text":"请阅读",onPreviewFile:t[0]||(t[0]=e=>(e=>{de.value=e,se.value=!0})(e))},null,8,["attachement-list"])):I("",!0)]})),_:1})],64)),p(le)?(c(),v(m,{key:2},[U,_(p(q),{ref_key:"trialRef",ref:he,"data-source":p(pe),"product-info":{productCode:p(ie).productCode,productName:p(ie).productName,productId:"",tenantId:p(Q),insurerCode:p(X)},"tenant-product-detail":p(oe)},null,8,["data-source","product-info","tenant-product-detail"])],64)):I("",!0)])),p(ue)&&!p(_e)?(c(),C(A,{key:2,"product-detail":p(oe)},null,8,["product-detail"])):I("",!0),D,p(se)?(c(),C(p(G),{key:3,show:p(se),"onUpdate:show":t[1]||(t[1]=e=>b(se)?se.value=e:null),"content-list":p(re)?p(Oe):p(Ne),"is-only-view":p(re),"active-index":p(de),text:p(re)?"关闭":"我已逐页阅读并确认告知内容","force-read-cound":p(re)?0:p(xe),onSubmit:Te,onOnCloseFilePreviewByMask:Pe},null,8,["show","content-list","is-only-view","active-index","text","force-read-cound"])):I("",!0)],64)}}});export{q as default};
