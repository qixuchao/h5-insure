import{d as e,ac as a,L as t,c as l,A as s,i,w as o,U as n,V as r,g as d,e as c,j as u,E as p,aa as v,F as m,h as f,f as g,aN as h,aO as A,cj as I,X as y,Y as _,cg as b,a as k,u as x,r as C,z as w,R as E,$ as L,Z as O,ch as S,o as T,a1 as P,ad as D,a2 as R,D as V,a0 as j,a4 as B,P as N,au as F,T as U}from"./index-463462e8.js";import{d as q}from"./debounce-eed12388.js";import{c as M}from"./cloneDeep-1de8e9b0.js";import{i as H,g as $,u as G,p as z}from"./trial-314be51a.js";import{a as Q,q as W}from"./product-028517d2.js";import{n as Z}from"./nextStep-de48f8b4.js";import{I as Y,b as J,S as X}from"./infoCollection-126e8521.js";import{a as K}from"./index-68e8337f.js";import{g as ee,r as ae}from"./utils-e7f75f9b.js";import{_ as te}from"./index-64256f16.js";import{V as le,G as se,_ as ie}from"./index-1dcfd7c0.js";import{P as oe}from"./index-2dbe6a76.js";import{c as ne}from"./phoneVerify-9ed86077.js";import{u as re}from"./useOrder-1e1423f8.js";import{_ as de}from"./TrialButton-efc88f9a.js";import{u as ce}from"./useAttachment-aa4adfba.js";import{o as ue,p as pe,t as ve}from"./utils-96939919.js";import{c as me}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-03f130df.js";/* empty css              */import"./useDicData-11af69bf.js";import"./bankCard-50587d7d.js";import"./pdfh5-008ca364.js";import"./isObjectLike-a9798079.js";import"./_initCloneObject-0663309f.js";import"./core-ab3e2d8c.js";import"./constant-8927d485.js";import"./index-4a5c7ffa.js";import"./index-582f806f.js";import"./trial-6d3f28ad.js";import"./index-389a1a38.js";import"./createProposal-c2c89ce5.js";const fe={class:"refueling-package-com"},ge=g("div",{class:"title"},"加油包",-1),he=e({name:"package"}),Ae=e({...he,props:{packageProductList:{default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{default:3}},setup(e){const g=e,[y,_]=a(!1),b=t((()=>g.packageProductList.length>g.count&&(!!g.isShowClose||!y.value))),k=()=>{_()},x=t((()=>g.packageProductList.length<=g.count||y.value?g.packageProductList:g.packageProductList.slice(0,g.count)));return(e,a)=>{const t=h,g=A,_=I;return l(),s("div",fe,[ge,i(_,{ref:"formRef"},{default:o((()=>[(l(!0),s(n,null,r(d(x),((e,a)=>(l(),c(g,{key:`${e.value}_${a}`,modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,label:e.packageName,required:"",placeholder:"请选择"},{input:o((()=>[i(t,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,options:d(Y),disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","options","disabled"])])),_:2},1032,["modelValue","onUpdate:modelValue","label"])))),128)),d(b)?(l(),s("div",{key:0,class:"show-more",onClick:k},[u(p(d(y)?"收起":"查看更多")+" ",1),i(v,{name:"down",class:m(["icon",{showMore:d(y)}])},null,8,["class"])])):f("",!0)])),_:1},512)])}}});const Ie={key:0},ye=[g("div",{class:"__skeleton_short_content__"},[g("div",{class:"van-config-provider sk",style:{"--van-primary-color":"#0d6efe","--van-primary-color-light8":"#0d6efe80","--van-primary-color-light1":"#0d6efe10","--van-primary-color-light2":"#0d6efe20","--van-danger-color":"#FF3C10","--van-primary-background-color":"#0d6efe20","--van-button-primary-background-color":"#0d6efe","--van-button-primary-border-color":"#0d6efe","--van-checkbox-checked-bg-color":"#0d6efe10","--van-switch-on-background-color":"#0d6efe","--van-toast-default-padding":"14px","--van-linear-bg":"linear-gradient(to right, #0d6efe, rgba(13,150,254,1))","--van-popup-close-icon-margin":"20px","--van-popup-round-border-radius":"20px","--van-card-title":"#0d6efe","--van-card-cell-color":"#0d6efe80","--van-radio-checked-icon-color":"#0d6efe","--van-pro-check-radius":"40px"}},[g("div",{class:"page-internet-product-detail"},[g("div",{class:"info"},[g("div",{class:"van-image banner",style:{width:"100%",height:"223px"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},[g("img",{class:"van-image__img","data-src":"https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/common/20221222/e3719801cf6546449e18e06f3bbe8416/%E5%B0%8A%E4%BA%ABe%E7%94%9F.png?Expires=1676527379&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=tkscLe6oOZYjnRIA%2B7AiMS3bOs0%3D",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",lazy:"loaded",style:{background:"rgb(238, 238, 238)"}})]),g("div")]),g("div",{class:"guarantee-list"},[g("div",{class:"header"},[g("span",null,[g("span",{class:"sk-text",style:{"--fp":"14.86%","--sp":"85.14%","--lh":"18.4999px"}},"保障计划")]),g("span",null,[g("span",{class:"sk-text",style:{"--fp":"14.86%","--sp":"85.14%","--lh":"18.4999px"}},"查看详情")])]),g("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[g("div",{class:"cell-container"},[g("div",{class:"left-part large"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"一般医疗保险金")]),g("div",{class:"divider"}),g("div",{class:"right-part"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高300万")])])]),g("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[g("div",{class:"cell-container"},[g("div",{class:"left-part large"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"重大疾病医疗保险金")]),g("div",{class:"divider"}),g("div",{class:"right-part"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高600万")])])]),g("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[g("div",{class:"cell-container"},[g("div",{class:"left-part large"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"恶性肿瘤质子重离子医疗")]),g("div",{class:"divider"}),g("div",{class:"right-part"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高600万")])])]),g("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[g("div",{class:"cell-container"},[g("div",{class:"left-part large"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"恶性肿瘤院外特定药品费用医疗")]),g("div",{class:"divider"}),g("div",{class:"right-part"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高600万")])])]),g("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[g("div",{class:"cell-container"},[g("div",{class:"left-part large"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"恶性肿瘤特定器械耗材费用医疗责任 （适用于女性被保险人）")]),g("div",{class:"divider"}),g("div",{class:"right-part"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高100万")])])]),g("div",{class:"show-more"},[g("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"16.799999999999997px"}},"查看更多 "),g("svg",{class:"svg-icon icon-arrow-down-dobule icon icon"},[g("use",{"xlink:href":"#icon-arrow-down-dobule"})])]),g("div",{class:"feerate-view sk-border"},[g("span",null,[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"142.00元/年起")])])]),g("div",{class:"com-divider"}),g("div",{class:"tabs",sticky:"",scrollspy:""},[g("div",null,[g("div",{class:"van-sticky"},[g("div",{class:"van-tabs"},[g("div",{id:"tab-list",class:"tab-list"},[g("a",{class:"tab-title active",title:"产品亮点"},[g("span",{class:"sk-text",style:{"--fp":"31.82%","--sp":"68.18%","--lh":"43.9999px"}},"产品亮点")]),g("a",{class:"tab-title",title:"理赔说明"},[g("span",{class:"sk-text",style:{"--fp":"31.82%","--sp":"68.18%","--lh":"43.9999px"}},"理赔说明")]),g("a",{class:"tab-title",title:"我要投保"},[g("span",{class:"sk-text",style:{"--fp":"31.82%","--sp":"68.18%","--lh":"43.9999px"}},"我要投保")])])])])]),g("div",{class:"tab-content"},[g("div",{id:"tab1"},[g("div",{class:"spec"},[g("div",{class:"van-image detail-img",style:{width:"100%"}},[g("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",class:"van-image__img",style:{background:"rgb(238, 238, 238)"}})])])])])])])])],-1)],_e=["theme-vars"],be={class:"info"},ke={class:"custom-page-form"},xe=g("div",{id:"xinaoDialog"},null,-1),Ce=e({name:"InsuranceShort"}),we=e({...Ce,setup(e){const a=y((()=>_((()=>import("./index-dbacec6f.js")),["static/js/index-dbacec6f.js","static/css/index-fa4edf2a.css","static/js/index-463462e8.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js","static/js/index-389a1a38.js","static/css/index-827a8544.css","static/js/utils-e7f75f9b.js","static/js/infoCollection-126e8521.js","static/js/trial-6d3f28ad.js"]))),r=y((()=>_((()=>import("./index-a0d0050d.js")),["static/js/index-a0d0050d.js","static/css/index-c1e75aab.css","static/js/index-463462e8.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js"]))),p=y((()=>_((()=>import("./index-9c8c659e.js")),["static/js/index-9c8c659e.js","static/css/index-409348e9.css","static/js/index-463462e8.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js","static/js/infoCollection-126e8521.js","static/js/trial-6d3f28ad.js"]))),v=y((()=>_((()=>import("./index-442b4a33.js")),["static/js/index-442b4a33.js","static/css/index-eabeb59f.css","static/js/index-463462e8.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js"]))),m=y((()=>_((()=>import("./index-1f993953.js")),["static/js/index-1f993953.js","static/css/index-3329e46f.css","static/js/index-463462e8.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js"]))),{VITE_BASE:h}={VITE_BASE:"/",VITE_API_BASEURL:"/",VITE_APP_TITLE:"投保流程",VITE_THEME_COLOR:"#0d6efe",VITE_APP_DESCRIPTION:"一种互联网投保的快速落地实现方案",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},A=b();k();const I=x(),{productCode:Y="",orderNo:fe,proposalId:ge,tenantId:he,extraInfo:Ce,insurerCode:we,preview:Ee}=I.query;let Le={};console.log("route.query",I.query);try{console.log("extInfo",decodeURIComponent(Ce)),Le=JSON.parse(decodeURIComponent(Ce))}catch(Aa){}const Oe=C(),Se=C(),Te=C(),Pe=C(!1),De=C({}),Re=C({}),Ve=C(!1),je=C(!1),Be=C(0),Ne=C(!1);C({});const Fe=C(!0),Ue=C(!0),qe=C(""),Me=C([]),He=C({}),$e=C({}),Ge=C([]),ze=w({submitData:{},riskVOList:[{}],userData:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResult:{},isFirst:!0}),Qe=C({imgUrl:"",desc:"",title:"",link:window.location.href}),We=re({extInfo:{buttonCode:"EVENT_SHORT_saveOrder",pageCode:"productInfo",extraInfo:Le,templateId:(null==Le?void 0:Le.templateId)||"1",iseeBizNo:""}}),Ze=C({}),Ye=t((()=>!!Ee)),Je=C([]),Xe=C(),Ke=async()=>{Q({productCode:Y,tenantId:he}).then((({data:e,code:a})=>{if("10000"===a){De.value=e,document.title=e.BASIC_INFO.title||"",De.BASIC_INFO=e.BASIC_INFO;const{title:a,desc:l,image:s}=(null==e?void 0:e.PRODUCT_LIST.wxShareConfig)||{};t={title:a,desc:l,image:s},Qe.value={desc:t.desc||"你好，这里是描述",imgUrl:t.image,title:t.title,link:window.location.href},console.log("shareInfo",Qe.value)}var t})),await H({productCode:Y,isTenant:!Ee}).then((({data:e,code:a})=>{var t;"10000"===a&&(Ne.value=!0,Re.value=e,He.value=null==(t=e.productPlanInsureVOList)?void 0:t[0],Ge.value=(e.productPlanInsureVOList||[]).filter((e=>e.planCode)).map((e=>({planName:e.planName,planCode:e.planCode}))))})),fe&&$({orderNo:fe,tenantId:he}).then((({code:e,data:a})=>{var t,l,s,i,o;if("10000"===e){We.value=a;const e=(null==(l=null==(t=We.value.insuredList)?void 0:t[0])?void 0:l.planCode)||"";e&&(He.value=(null==(s=Re.value.productPlanInsureVOList)?void 0:s.find((a=>a.planCode===e)))||(null==(o=null==(i=He.value)?void 0:i.productPlanInsureVOList)?void 0:o[0])),ze.userData=ue(a,Re.value,e)}})),ge&&pe({proposalId:ge,productCode:Y,tenantId:he},(e=>{me("计划书查询参数"),ze.userData=e})),Ue.value=!1,W({productCode:Y}).then((({code:e,data:a})=>{var t,l,s,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:o}=a;Xe.value=e||[];const{basicInfo:{questionnaireType:n},questions:r,questionnaireName:d}=(null==(t=null==o?void 0:o[0])?void 0:t.questionnaireDetailResponseVO)||{basicInfo:{}};n&&(Je.value=2===n?[{attachmentName:d,attachmentUri:r,attachmentType:"question"}]:[{attachmentName:d,attachmentUri:null==(l=null==r?void 0:r[0])?void 0:l.content,attachmentType:ee(String(null==(s=null==r?void 0:r[0])?void 0:s.textType),null==(i=null==r?void 0:r[0])?void 0:i.content)}])}L((()=>{ze.isFirst=!1}))}))},ea=C([]);E((()=>Ze.value.planCode),(e=>{He.value=(Re.value.productPlanInsureVOList||[]).find((a=>a.planCode===e))}));const aa=()=>{Te.value.handleClickTab()("tab3")},ta=C(""),la=C(0),sa=async e=>{var a;if(Ye.value)window.location.href=`${window.location.origin}${h}baseInsurance/orderDetail?orderNo=mockOrderNo&tenantId=${he}&ISEE_BIZ=${qe}&productCode=${Y}&preview=true&templateView=${null==Le?void 0:Le.templateId}`;else try{null==(a=Re.value)||a.productName;const t=ve(e,ze.trialResult,We.value);Z(t,(async(e,a)=>{a===N.JUMP_PAGE&&(null==e?void 0:e.orderNo)&&await(async e=>{try{const{code:a,data:t}=await $({orderNo:e,tenantId:he});"10000"===a&&(t.extInfo={...t.extInfo,buttonCode:"EVENT_SHORT_underWrite"},await Z(t))}catch(Aa){}})(null==e?void 0:e.orderNo)}))}catch(Aa){console.log(Aa)}},{fileList:ia,mustReadFileCount:oa,popupFileList:na}=ce(He,Xe),ra=e=>{Be.value=e,je.value=!0},da=()=>{const e=[];return Me.value.filter((e=>e.value===J.INSURE)).forEach((a=>{e.push(...a.productRiskVoList)})),e},ca=e=>{"allFalse"===e?(Ve.value=!1,sa()):V.confirm({className:"xinao-custom-dialog",title:"提示",teleport:"#xinaoDialog",message:"被保人不符合健康要求，很抱歉暂时无法投保该产品",confirmButtonText:"选错了",cancelButtonText:"为其他人投保"}).then((()=>{})).catch((()=>{Ve.value=!1}))},ua=()=>{je.value=!1,Fe.value=!0,Je.value.length<1?sa():Ve.value=!0},pa=()=>{Ve.value=!1,je.value=!1,Fe.value=!0},va=q((async(e=!1)=>{var a;if(console.log(">>>>>调用试算<<<<<"),ze.ifPersonalInfoSuccess||Se.value.canTrail()){const{insuranceEndDate:t,insuranceStartDate:l}=Ze.value;Object.assign(ze.submitData,{productCode:Y,tenantId:he,productName:Re.value.productName,commencementTime:l,expiryDate:t}),ze.riskList=(()=>{const{chargePeriod:e,coveragePeriod:a,paymentFrequency:t,insuranceEndDate:l,insuranceStartDate:s}=Ze.value;return ae([...ea.value,...da()]).map((l=>({...l,paymentFrequency:t,chargePeriod:e,coveragePeriod:a})))})();const s=M(ze.submitData);(null==(a=s.insuredList)?void 0:a.length)&&(s.insuredList=s.insuredList.map((e=>({...e,productList:[{insurerCode:we,planCode:He.value.planCode,riskList:ze.riskList}]})))),console.log(">>>数据构建<<<",ze.submitData),await(async(e,a=!1)=>{ze.trialMsg="试算中...",ze.trialResult={};let t=!1;const{code:l}=await G(e);t="10000"===l,t&&z(e).then((t=>{var l,s;t.data&&t.code===F?((null==(l=null==t?void 0:t.data)?void 0:l.errorInfo)&&U(`${null==(s=null==t?void 0:t.data)?void 0:s.errorInfo}`),ze.trialMsg="",ze.trialResult=t.data,a&&(na.value.length>0?(Fe.value=!1,ra(0)):Je.value.length>0?Ve.value=!0:sa(e))):ze.trialMsg=""})).finally((()=>{ze.isFirst=!1}))})(s,e)}}),300),ma=async(e,a=!1)=>{(e=>{const{holder:a,insuredList:t}=e||{};a&&(ze.submitData.holder=a),t&&t.length>0&&t.forEach(((e,a)=>{var t;ze.submitData.insuredList&&ze.submitData.insuredList.length>a?ze.submitData.insuredList[a]=e:((null==(t=ze.submitData)?void 0:t.insuredList)||(ze.submitData.insuredList=[]),ze.submitData.insuredList.push(e))}))})(e),ze.ifPersonalInfoSuccess=!0,console.log("投被保人的信息回传 ",e),va()},fa=async()=>{Ve.value=!1,je.value=!1,ze.isFirst=!1,Ye.value?na.value.length>0?(Fe.value=!1,ra(0)):Je.value.length>0?Ve.value=!0:sa():Se.value.validate().then((async e=>{const{mobile:a,verificationCode:t=""}=ze.userData.holder||{},{code:l,data:s}=await ne(a,t);"10000"===l&&va(!0)})).catch((e=>{console.log(e,"表单验证失败");const a=document.querySelector(".custom-page-form");a&&a.scrollIntoView()}))},ga=q((()=>{console.log("----监听事件变化，重新触发试算------",Se.value.validateTrialFields()),Se.value.validateTrialFields()&&ma(ze.userData)}),400);E((()=>We.value.insuredList[0].relationToHolder),((e,a)=>{e!==a&&Me.value&&Me.value.forEach((e=>{e.value=J.UN_INSURE})),L((()=>{const{certType:e,extInfo:a}=We.value.insuredList[0];a&&!a.hasSocialInsurance&&(We.value.insuredList[0].extInfo.hasSocialInsurance=X.HAS)}))}),{deep:!0,immediate:!0}),E([()=>He.value,()=>Ze.value,()=>Me.value],(()=>{ze.isFirst||ga()}),{deep:!0,immediate:!0}),E((()=>He.value),(()=>{const{oilPackageProductVOList:e,planCode:a,insureProductRiskVOList:t}=He.value;Ze.value.planCode=a,ea.value=t,$e.value=(t||[]).find((e=>e.mainRiskFlag===O.YES)),Me.value=(e||[]).map((e=>({...e,value:J.UN_INSURE})))}),{deep:!0,immediate:!0});const ha=S(Oe);return L((()=>{j(Oe,(([{isIntersecting:e}])=>{(e=>{ha.bottom.value<0||ha.top.value<0?Pe.value=!e:Pe.value=!1})(e)}))})),T((()=>{})),P((()=>{Ue.value=!0,Ke(),setTimeout((async()=>{qe.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),D((()=>{})),(e,t)=>{var h,I,y,_,b,k,x,C,w,E,L,O,S,T,P,D,V,j,N,F;const U=B;return l(),s(n,null,[d(Ue)?(l(),s("div",Ie,ye)):(l(),s("div",{key:1,"data-skeleton-root":"SHORT","theme-vars":d(A),class:"page-internet-product-detail"},[g("div",be,[1==(null==(I=null==(h=d(De))?void 0:h.BASIC_INFO)?void 0:I.bannerType)&&(null==(_=null==(y=d(De))?void 0:y.BASIC_INFO)?void 0:_.banner.length)?(l(),c(te,{key:0,"data-skeleton-type":"img","indicator-color":"#ddd",images:null==(b=d(De))?void 0:b.BASIC_INFO.banner},null,8,["images"])):f("",!0),2==(null==(x=null==(k=d(De))?void 0:k.BASIC_INFO)?void 0:x.bannerType)&&(null==(w=null==(C=d(De))?void 0:C.BASIC_INFO)?void 0:w.video.length)?(l(),c(le,{key:1,"data-skeleton-type":"img",src:null==(E=d(De))?void 0:E.BASIC_INFO.video[0]},null,8,["src"])):f("",!0),(null==(S=null==(O=null==(L=d(De))?void 0:L.BASIC_INFO)?void 0:O.bannerMove)?void 0:S.length)?(l(),c(te,{key:2,url:null==(D=null==(P=null==(T=d(De))?void 0:T.BASIC_INFO)?void 0:P.bannerMove)?void 0:D[0],onClick:aa},null,8,["url"])):f("",!0),g("div",{ref_key:"root",ref:Oe},null,512)]),(null==(V=d(De))?void 0:V.GUARANTEE)?(l(),c(se,{key:0,"show-service-config":"","data-source":d(De),"plan-list":d(Ge)},null,8,["data-source","plan-list"])):f("",!0),i(ie,{ref_key:"detailScrollRef",ref:Te,"order-detail":d(We),"data-source":d(De)},{form:o((()=>{var e,a,s;return[g("div",ke,[(null==(e=d(He))?void 0:e.productFactor)?(l(),c(d(K),{key:0,ref_key:"personalInfoRef",ref:Se,modelValue:d(ze).userData,"onUpdate:modelValue":t[0]||(t[0]=e=>d(ze).userData=e),"product-factor":null==(a=d(He))?void 0:a.productFactor,"multi-insured-config":null==(s=d(He))?void 0:s.multiInsuredConfigVO,onTrailChange:ma},null,8,["modelValue","product-factor","multi-insured-config"])):f("",!0)]),i(d(p),{"form-info":d(Ze),"risk-info":d($e),"tenant-product-detail":d(De).PREMIUM,"plan-list":d(Ge),"premium-info":{premium:d(la),premiumLoadingText:d(ta)}},null,8,["form-info","risk-info","tenant-product-detail","plan-list","premium-info"]),d(Me).length>0?(l(),c(Ae,{key:0,"package-product-list":d(Me)},null,8,["package-product-list"])):f("",!0)]})),_:1},8,["order-detail","data-source"]),i(U,null,{default:o((()=>{var e,a,t;return[(null==(e=d(De).SIGNATURE)?void 0:e.inscribedContent)?(l(),c(d(v),{key:0,"inscribed-content":null==(t=null==(a=d(De))?void 0:a.SIGNATURE)?void 0:t.inscribedContent},null,8,["inscribed-content"])):f("",!0)]})),_:1}),i(U,null,{default:o((()=>{var e;return[(null==(e=d(ia))?void 0:e.length)?(l(),c(d(m),{key:0,"attachment-list":d(ia),"pre-text":"请阅读",onPreviewFile:t[1]||(t[1]=e=>ra(e))},null,8,["attachment-list"])):f("",!0)]})),_:1}),d(Pe)?(l(),c(de,{key:1,"is-share":null==(N=null==(j=d(De))?void 0:j.PRODUCT_LIST)?void 0:N.showWXShare,premium:null==(F=d(ze).trialResult)?void 0:F.initialPremium,"share-info":d(Qe),"loading-text":d(ze).trialMsg,"plan-code":d(Ze).planCode,"payment-frequency":d(Ze).paymentFrequency,"tenant-product-detail":d(De),onHandleClick:fa},{default:o((()=>[u("立即投保")])),_:1},8,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail"])):f("",!0)],8,_e)),d(Ne)?(l(),c(oe,{key:2,"product-detail":d(De)},null,8,["product-detail"])):f("",!0),xe,i(d(r),{show:d(Ve),"onUpdate:show":t[2]||(t[2]=e=>R(Ve)?Ve.value=e:null),"content-list":d(Je),"active-index":0,onOnConfirmHealth:ca,onOnCloseHealthByMask:pa},null,8,["show","content-list"]),d(je)?(l(),c(d(a),{key:3,show:d(je),"onUpdate:show":t[3]||(t[3]=e=>R(je)?je.value=e:null),"content-list":d(Fe)?d(ia):d(na),"is-only-view":d(Fe),"active-index":d(Be),text:d(Fe)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":d(Fe)?0:d(oa),onSubmit:ua,onOnCloseFilePreviewByMask:pa},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):f("",!0)],64)}}});export{we as default};
