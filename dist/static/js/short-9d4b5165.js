import{E as e,d as a,r as t,Q as l,a0 as n,c as s,y as o,f as r,g as i,i as d,h as c,ad as u,aa as p,K as v,w as m,R as f,U as h,e as g,j as y,z as A,A as I,aB as k,aC as O,cn as b,W as x,X as C,ce as _,a as L,u as T,x as w,Z as P,Y as E,o as S,M as D,C as R,ab as j,a1 as N,T as F,D as B,$ as V,a3 as H,P as U}from"./index-f6fa5ecc.js";import{i as q,u as M,p as G,c as z}from"./trial-d6f8cdcc.js";import{a as Q,q as W}from"./product-b6fa5141.js";import{n as $}from"./nextStep-3094424c.js";import{I as Y,c as Z,O as J,d as K,S as X}from"./infoCollection-3913f4d9.js";import{u as ee}from"./useAddressList-0bc4a1a8.js";import{r as ae,v as te,g as le,t as ne}from"./utils-1c898dbb.js";import{_ as se}from"./index-e71d1fcb.js";import{G as oe,_ as re}from"./index-c1270145.js";import{P as ie}from"./index-8a867af1.js";import{c as de}from"./phoneVerify-687c21c7.js";import{u as ce}from"./useOrder-d313bd64.js";import{f as ue,_ as pe}from"./utils-a2961050.js";import{u as ve}from"./useAttachment-aa741896.js";import{t as me,i as fe}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-03393721.js";/* empty css              */import"./bankCard-3b323770.js";import{P as he}from"./index-cc11bf88.js";import"./pdfh5-008ca364.js";import"./core-c86456b5.js";import"./constant-8927d485.js";import"./trial-dfc2b426.js";import"./index-48c2c33d.js";import"./_initCloneObject-0663309f.js";import"./isObjectLike-a9798079.js";import"./debounce-eed12388.js";import"./index-f0d42bad.js";const ge={class:"com-video"},ye=["src"],Ae=["src"];var Ie=e(a({__name:"Video",props:{src:null},setup(e){const a=e,p=t(!1),v=t("");return l((()=>a),(e=>{v.value=`/api/app/common/file/generateLink?type=2&url=${e.src}`}),{deep:!0,immediate:!0}),n((()=>{})),(e,t)=>{const l=u;return s(),o("div",ge,[r("img",{src:i(v),class:"cover-image",onClick:t[0]||(t[0]=e=>p.value=!0)},null,8,ye),d(l,{name:"play",class:"cover-image-play",onClick:t[1]||(t[1]=e=>p.value=!0)}),i(p)?(s(),o("video",{key:0,src:a.src,autoplay:"",controls:"",class:"banner-video"},null,8,Ae)):c("",!0)])}}}),[["__scopeId","data-v-cd73ccd2"]]);const ke={class:"refueling-package-com"},Oe=r("div",{class:"title"},"加油包",-1),be=a({name:"package"}),xe=a({...be,props:{packageProductList:{default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{default:3}},setup(e){const a=e,[t,l]=p(!1),n=v((()=>a.packageProductList.length>a.count&&(!!a.isShowClose||!t.value))),r=()=>{l()},x=v((()=>a.packageProductList.length<=a.count||t.value?a.packageProductList:a.packageProductList.slice(0,a.count)));return(e,a)=>{const l=k,p=O,v=b;return s(),o("div",ke,[Oe,d(v,{ref:"formRef"},{default:m((()=>[(s(!0),o(f,null,h(i(x),((e,a)=>(s(),g(p,{key:`${e.value}_${a}`,modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,label:e.packageName,required:"",placeholder:"请选择"},{input:m((()=>[d(l,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,options:i(Y),disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","options","disabled"])])),_:2},1032,["modelValue","onUpdate:modelValue","label"])))),128)),i(n)?(s(),o("div",{key:0,class:"show-more",onClick:r},[y(A(i(t)?"收起":"查看更多")+" ",1),d(u,{name:"down",class:I(["icon",{showMore:i(t)}])},null,8,["class"])])):c("",!0)])),_:1},512)])}}});const Ce={key:0},_e=[r("div",{class:"__skeleton_short_content__"},[r("div",{class:"van-config-provider sk",style:{"--van-primary-color":"#0d6efe","--van-primary-color-light8":"#0d6efe80","--van-primary-color-light1":"#0d6efe10","--van-primary-color-light2":"#0d6efe20","--van-danger-color":"#FF3C10","--van-primary-background-color":"#0d6efe20","--van-button-primary-background-color":"#0d6efe","--van-button-primary-border-color":"#0d6efe","--van-checkbox-checked-bg-color":"#0d6efe10","--van-switch-on-background-color":"#0d6efe","--van-toast-default-padding":"14px","--van-linear-bg":"linear-gradient(to right, #0d6efe, rgba(13,150,254,1))","--van-popup-close-icon-margin":"20px","--van-popup-round-border-radius":"20px","--van-card-title":"#0d6efe","--van-card-cell-color":"#0d6efe80","--van-radio-checked-icon-color":"#0d6efe","--van-pro-check-radius":"40px"}},[r("div",{class:"page-internet-product-detail"},[r("div",{class:"info"},[r("div",{class:"van-image banner",style:{width:"100%",height:"223px"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},[r("img",{class:"van-image__img","data-src":"https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/common/20221222/e3719801cf6546449e18e06f3bbe8416/%E5%B0%8A%E4%BA%ABe%E7%94%9F.png?Expires=1676527379&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=tkscLe6oOZYjnRIA%2B7AiMS3bOs0%3D",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",lazy:"loaded",style:{background:"rgb(238, 238, 238)"}})]),r("div")]),r("div",{class:"guarantee-list"},[r("div",{class:"header"},[r("span",null,[r("span",{class:"sk-text",style:{"--fp":"14.86%","--sp":"85.14%","--lh":"18.4999px"}},"保障计划")]),r("span",null,[r("span",{class:"sk-text",style:{"--fp":"14.86%","--sp":"85.14%","--lh":"18.4999px"}},"查看详情")])]),r("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[r("div",{class:"cell-container"},[r("div",{class:"left-part large"},[r("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"一般医疗保险金")]),r("div",{class:"divider"}),r("div",{class:"right-part"},[r("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高300万")])])]),r("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[r("div",{class:"cell-container"},[r("div",{class:"left-part large"},[r("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"重大疾病医疗保险金")]),r("div",{class:"divider"}),r("div",{class:"right-part"},[r("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高600万")])])]),r("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[r("div",{class:"cell-container"},[r("div",{class:"left-part large"},[r("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"恶性肿瘤质子重离子医疗")]),r("div",{class:"divider"}),r("div",{class:"right-part"},[r("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高600万")])])]),r("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[r("div",{class:"cell-container"},[r("div",{class:"left-part large"},[r("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"恶性肿瘤院外特定药品费用医疗")]),r("div",{class:"divider"}),r("div",{class:"right-part"},[r("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高600万")])])]),r("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[r("div",{class:"cell-container"},[r("div",{class:"left-part large"},[r("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"恶性肿瘤特定器械耗材费用医疗责任 （适用于女性被保险人）")]),r("div",{class:"divider"}),r("div",{class:"right-part"},[r("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高100万")])])]),r("div",{class:"show-more"},[r("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"16.799999999999997px"}},"查看更多 "),r("svg",{class:"svg-icon icon-arrow-down-dobule icon icon"},[r("use",{"xlink:href":"#icon-arrow-down-dobule"})])]),r("div",{class:"feerate-view sk-border"},[r("span",null,[r("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"142.00元/年起")])])]),r("div",{class:"com-divider"}),r("div",{class:"tabs",sticky:"",scrollspy:""},[r("div",null,[r("div",{class:"van-sticky"},[r("div",{class:"van-tabs"},[r("div",{id:"tab-list",class:"tab-list"},[r("a",{class:"tab-title active",title:"产品亮点"},[r("span",{class:"sk-text",style:{"--fp":"31.82%","--sp":"68.18%","--lh":"43.9999px"}},"产品亮点")]),r("a",{class:"tab-title",title:"理赔说明"},[r("span",{class:"sk-text",style:{"--fp":"31.82%","--sp":"68.18%","--lh":"43.9999px"}},"理赔说明")]),r("a",{class:"tab-title",title:"我要投保"},[r("span",{class:"sk-text",style:{"--fp":"31.82%","--sp":"68.18%","--lh":"43.9999px"}},"我要投保")])])])])]),r("div",{class:"tab-content"},[r("div",{id:"tab1"},[r("div",{class:"spec"},[r("div",{class:"van-image detail-img",style:{width:"100%"}},[r("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",class:"van-image__img",style:{background:"rgb(238, 238, 238)"}})])])])])])])])],-1)],Le=["theme-vars"],Te={class:"info"},we={class:"custom-page-form"},Pe=r("div",{class:"form-title"},"请填写投保信息",-1),Ee=r("div",{id:"xinaoDialog"},null,-1),Se=a({name:"InsuranceShort"}),De=a({...Se,setup(e){const a=x((()=>C((()=>import("./index-93301a1a.js")),["static/js/index-93301a1a.js","static/css/index-fa4edf2a.css","static/js/index-f6fa5ecc.js","static/css/index-df1cf75e.css","static/js/pdfh5-008ca364.js","static/js/index-48c2c33d.js","static/css/index-827a8544.css","static/js/utils-1c898dbb.js","static/js/infoCollection-3913f4d9.js","static/js/trial-dfc2b426.js"]))),u=x((()=>C((()=>import("./index-97c7891b.js")),["static/js/index-97c7891b.js","static/css/index-c1e75aab.css","static/js/index-f6fa5ecc.js","static/css/index-df1cf75e.css","static/js/pdfh5-008ca364.js"]))),p=x((()=>C((()=>import("./index-1bfdfacc.js")),["static/js/index-1bfdfacc.js","static/css/index-26ed4d65.css","static/js/index-f6fa5ecc.js","static/css/index-df1cf75e.css","static/js/pdfh5-008ca364.js","static/js/infoCollection-3913f4d9.js","static/js/trial-dfc2b426.js"]))),A=x((()=>C((()=>import("./index-990249bb.js")),["static/js/index-990249bb.js","static/css/index-eabeb59f.css","static/js/index-f6fa5ecc.js","static/css/index-df1cf75e.css","static/js/pdfh5-008ca364.js"]))),I=x((()=>C((()=>import("./index-fc5c1508.js")),["static/js/index-fc5c1508.js","static/css/index-3329e46f.css","static/js/index-f6fa5ecc.js","static/css/index-df1cf75e.css","static/js/pdfh5-008ca364.js"]))),k=_();L();const O=T(),{productCode:b="",tenantId:Y,agentCode:ge="",agencyCode:ye,saleChannelId:Ae,extraInfo:ke,insurerCode:Oe,preview:be}=O.query;let Se={};try{console.log("extInfo",decodeURIComponent(ke)),Se=JSON.parse(decodeURIComponent(ke))}catch(wa){}const{openId:De}=Se;t();const Re=t(),je=t(),Ne=t(!1),Fe=t({}),Be=t({}),Ve=t(!1),He=t(!1),Ue=t(0),qe=t(!1),Me=t({}),Ge=t({}),ze=t(!0),Qe=t(!0),We=t(!0),$e=t(""),Ye=t([]);t({});const Ze=t({}),Je=t({}),Ke=t([]),Xe=t(),ea=t(),aa=w({holder:{formData:{},schema:[],trialFactorCodes:[],config:{}},insuredList:[{formData:{},schema:[],trialFactorCodes:[],config:{relationToHolder:{label:""},certNo:{}}}]});De&&ee({openId:De},(e=>{Ge.value=e}));const ta=t({imgUrl:"",desc:"",title:"",link:window.location.href}),la=ce({extInfo:{buttonCode:"EVENT_SHORT_saveOrder",pageCode:"productInfo",extraInfo:Se,templateId:(null==Se?void 0:Se.templateId)||"1",iseeBizNo:""}}),na=t({}),sa=v((()=>!!be)),oa=t([]),ra=t(),ia=async()=>{Q({productCode:b,tenantId:Y}).then((({data:e,code:a})=>{if("10000"===a){Fe.value=e,document.title=e.BASIC_INFO.title||"",Fe.BASIC_INFO=e.BASIC_INFO;const{title:a,desc:l,image:n}=(null==e?void 0:e.PRODUCT_LIST.wxShareConfig)||{},[s=""]=n||[];t={title:a,desc:l,image:s},ta.value={desc:t.desc||"你好，这里是描述",imgUrl:t.image,title:t.title,link:window.location.href},console.log("shareInfo",ta.value)}var t})),await q({productCode:b,isTenant:!be}).then((({data:e,code:a})=>{var t;"10000"===a&&(qe.value=!0,Be.value=e,Ze.value=null==(t=e.productPlanInsureVOList)?void 0:t[0],Ke.value=(e.productPlanInsureVOList||[]).filter((e=>e.planCode)).map((e=>({planName:e.planName,planCode:e.planCode}))))})),We.value=!1,W({productCode:b}).then((({code:e,data:a})=>{var t,l,n,s;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:o}=a;ra.value=e||[];const{basicInfo:{questionnaireType:r},questions:i,questionnaireName:d}=(null==(t=null==o?void 0:o[0])?void 0:t.questionnaireDetailResponseVO)||{basicInfo:{}};r&&(oa.value=2===r?[{attachmentName:d,attachmentUri:i,attachmentType:"question"}]:[{attachmentName:d,attachmentUri:null==(l=null==i?void 0:i[0])?void 0:l.content,attachmentType:le(String(null==(n=null==i?void 0:i[0])?void 0:n.textType),null==(s=null==i?void 0:i[0])?void 0:s.content)}])}}))},da=v((()=>{if(Ge.value){const e=[];return Object.keys(Ge.value).forEach((a=>{e.push(...Ge.value[a])})),e}return[]})),ca=v((()=>da.value.length>0)),ua=t([]),pa=e=>{console.log("currentPlanObj.value",e,Ze.value)};l((()=>na.value.planCode),(e=>{Ze.value=(Be.value.productPlanInsureVOList||[]).find((a=>a.planCode===e))}));const va=()=>{Re.value.handleClickTab()("tab3")},ma=t(""),fa=t(0),ha=async()=>{try{await $(((e={},a={},t={})=>{var l;const n={...t},s={tenantId:Y,riskList:(null==(l=n.tenantOrderInsuredList[0])?void 0:l.tenantOrderProductList[0].riskVOList)||[],riskPremium:a,productId:e.id};return n.extInfo.iseeBizNo=$e.value,n.productCode=e.productCode,n.commencementTime=n.insuranceStartDate,n.expiryDate=n.insuranceEndDate,n.tenantOrderHolder={...n.tenantOrderHolder,certType:n.tenantOrderHolder.certType||R.CERT,certNo:(n.tenantOrderHolder.certNo||"").toLocaleUpperCase(),extInfo:{...n.tenantOrderHolder.extInfo}},n.tenantOrderInsuredList=n.tenantOrderInsuredList.map((e=>({...e,certType:e.certType||R.CERT,certNo:(e.certNo||"").toLocaleUpperCase(),planCode:Ze.value.planCode,extInfo:{...e.extInfo}}))),n.tenantOrderInsuredList[0].tenantOrderProductList[0]={premium:fa.value,productCode:e.productCode,productName:e.productName,planCode:Ze.value.planCode,tenantOrderRiskList:ne(s)},n})(Be.value,Me.value,la.value),(async(e,a)=>{a===U.JUMP_PAGE&&(null==e?void 0:e.orderNo)&&await(async e=>{try{const{code:a,data:t}=await z({orderNo:e,tenantId:Y});"10000"===a&&(t.extInfo={...t.extInfo,buttonCode:"EVENT_SHORT_underWrite"},await $(t))}catch(wa){}})(null==e?void 0:e.orderNo)}))}catch(wa){}},{fileList:ga,mustReadFileCount:ya,popupFileList:Aa}=ve(Ze,ra),Ia=e=>{Ue.value=e,He.value=!0},ka=async(e,a,t=!0)=>{var l;const{chargePeriod:n,coveragePeriod:s,paymentFrequency:o,insuranceEndDate:r,insuranceStartDate:i}=na.value;ma.value="保费试算中...";const d=ae(a).map((e=>({...e,paymentFrequency:o,chargePeriod:n,coveragePeriod:s}))),{tenantOrderHolder:c,tenantOrderInsuredList:u}=la.value,p={tenantId:Y,productCode:e.productCode,insuranceStartDate:i,insuranceEndDate:r,holder:{personVO:{...c,socialFlag:null==(l=c.extInfo)?void 0:l.hasSocialInsurance,certType:c.certType||R.CERT}},insuredVOList:u.map((e=>({insuredCode:"",relationToHolder:e.relationToHolder,personVO:{...e,socialFlag:e.extInfo.hasSocialInsurance,certType:e.certType||R.CERT},productPlanVOList:[{insurerCode:Oe,planCode:Ze.value.planCode,riskVOList:d}]})))},{code:v,message:m}=await M(p);if("10000"===v){const{code:e,data:a}=await G(p);if("10000"===e){if(ma.value="",la.value.tenantOrderInsuredList[0].tenantOrderProductList=p.insuredVOList[0].productPlanVOList,fa.value=null==a?void 0:a.premium,la.value.premium=a.premium,la.value.orderAmount=a.premium,la.value.orderRealAmount=a.premium,la.value.insuranceStartDate=p.insuranceStartDate,la.value.insuranceEndDate=p.insuranceEndDate,!t){const e={};a.riskPremiumDetailVOList&&a.riskPremiumDetailVOList.length&&a.riskPremiumDetailVOList.forEach((a=>{e[a.riskCode]={premium:a.premium,amount:a.amount}})),Me.value=e,Aa.value.length>0?(ze.value=!1,Ia(0)):oa.value.length>0?Ve.value=!0:await ha()}}else ma.value=""}else ma.value="",F(m)},Oa=()=>{const e=[];return Ye.value.filter((e=>e.value===Z.INSURE)).forEach((a=>{e.push(...a.productRiskVoList)})),e},ba=async()=>{var e,a;try{Ve.value=!1,He.value=!1,Xe.value&&ea.value&&Promise.all([null==(e=Xe.value)?void 0:e.validate(),null==(a=ea.value)?void 0:a[0].validate()]).then((async()=>{var e;if(ca.value)await ka(Be.value,[...ua.value,...Oa()],!1);else{const a=null==(e=la.value.tenantOrderHolder)?void 0:e.verificationCode;if(!te(a))return void F({message:"请输入正确的验证码"});const{code:t,data:l}=await de(la.value.tenantOrderHolder.mobile,a);"10000"===t&&await ka(Be.value,[...ua.value,...Oa()],!1)}})).catch((e=>{const a=document.querySelector(".form-title");a&&a.scrollIntoView()}))}catch(t){}},xa=e=>{"allFalse"===e?(Ve.value=!1,ha()):B.confirm({className:"xinao-custom-dialog",title:"提示",teleport:"#xinaoDialog",message:"被保人不符合健康要求，很抱歉暂时无法投保该产品",confirmButtonText:"选错了",cancelButtonText:"为其他人投保"}).then((()=>{})).catch((()=>{Ve.value=!1}))},Ca=()=>{He.value=!1,ze.value=!0,oa.value.length<1?ha():Ve.value=!0},_a=()=>{Ve.value=!1,He.value=!1,ze.value=!0};l((()=>la.value.tenantOrderInsuredList[0].relationToHolder),((e,a)=>{e!==a&&Ye.value&&Ye.value.forEach((e=>{e.value=Z.UN_INSURE})),Qe.value=!1,P((()=>{const{certType:e,extInfo:a}=la.value.tenantOrderInsuredList[0];a&&!a.hasSocialInsurance&&(la.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance=X.HAS),Qe.value=!0}))}),{deep:!0,immediate:!0}),l([()=>aa.holder.formData,()=>aa.insuredList],(([e,a])=>{Object.assign(la.value,ue({holder:e,insuredList:a.map((e=>e.formData))}))}),{deep:!0});const La=(e,a)=>e.find((e=>!a[e])),Ta=async()=>{const{trialFactorCodes:e,formData:a}=aa.holder,{trialFactorCodes:t,formData:l}=aa.insuredList[0];return new Promise(((n,s)=>{!La(e,a)&&!La(t,l)&&Xe.value&&ea.value?Promise.all([Xe.value.validate(e),ea.value[0].validate(t)]).then((()=>{n(!0)})).catch((()=>{s()})):s()}))};return l((()=>[...aa.holder.trialFactorCodes.map((e=>aa.holder.formData[e])),...aa.insuredList.reduce(((e,a,t)=>(e.push(...a.trialFactorCodes.map((e=>aa.insuredList[t].formData[e]))),e)),[]),na.value.paymentFrequency,Ye.value]),((...e)=>{sa.value||Ta().then((()=>{ka(Be.value,[...ua.value,...Oa()])})).catch((()=>{Ta().then((()=>{ma.value="保费试算中..."}))}))}),{deep:!0}),l((()=>aa.holder.formData),((...e)=>{aa.insuredList.forEach(((e,a)=>{const{formData:t,schema:l}=e||{};"1"===t.relationToHolder&&Object.assign(e.formData,aa.holder.formData)}))}),{deep:!0,immediate:!0}),l((()=>Ze.value),(()=>{let{productFactor:e}=Ze.value;const{oilPackageProductVOList:a,planCode:t,insureProductRiskVOList:l}=Ze.value;ca.value&&e[1]&&(e=e[1].filter((e=>"verificationCode"!==e.code))),na.value.planCode=t,ua.value=l,Je.value=(l||[]).find((e=>e.mainRiskFlag===E.YES)),console.log("mainRiskInfo.value",Je.value),Ye.value=(a||[]).map((e=>({...e,value:Z.UN_INSURE})));const{holder:n,insured:s,beneficiary:o}=me(e);aa.holder={...aa.holder,...n},aa.insuredList[0]={...aa.insuredList[0],...null==s?void 0:s[0]}}),{deep:!0,immediate:!0}),l((()=>aa.insuredList.map(((e,a)=>aa.insuredList[a].formData.relationToHolder))),((e,a)=>{console.log("%c🔥 与投保人关系变动了","color:#1989fa;background:#5e4;padding:3px 5px;"),aa.insuredList.forEach(((e,a)=>{const{formData:t,schema:l,config:n}=e||{},s="1"===t.relationToHolder,o="3"===t.relationToHolder,r=fe(l.find((e=>"certType"===e.name))||{});r&&(n.certNo.label="身份证号"+(o?"\n(户口簿)":"")),e.schema.forEach((e=>{e.relationToHolder=t.relationToHolder,e.hidden=!e.isSelfInsuredNeed&&s})),s?Object.assign(e.formData,{...aa.insuredList[a].formData,...aa.holder.formData}):Object.assign(e.formData,{...Object.keys(e.formData).reduce(((a,t)=>(r&&"certType"===t||(a[t]={Object:{},Array:[]}[Object.prototype.toString.call(e.formData[t]).slice(8,-1)]||""),a)),{}),relationToHolder:t.relationToHolder})}))}),{immediate:!0,deep:!0}),P((()=>{V(je,(([{isIntersecting:e}],a)=>{Ne.value=!e}))})),S((()=>{var e;const a=D.get(J);if(a){const{tenantOrderHolder:t,tenantOrderInsuredList:l}=a;if(t&&(la.value.tenantOrderHolder={...t,certType:t.certType||R.CERT}),Array(l)&&l[0]){const a=l[0]||{};if(la.value.activePlanCode=a.planCode,a.tenantOrderProductListtenantOrderProductList&&a.tenantOrderProductList[0]&&a.tenantOrderProductList[0].tenantOrderRiskList){const t=null==(e=a.tenantOrderProductList[0].tenantOrderRiskList)?void 0:e.find((e=>"1"===String(e.riskType)));t&&(la.value.paymentFrequency=(null==t?void 0:t.paymentFrequency)?String(null==t?void 0:t.paymentFrequency):K.SINGLE)}}}})),n((()=>{We.value=!0,ia(),setTimeout((async()=>{$e.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),j((()=>{D.remove(J)})),(e,t)=>{var l,n,v,O,b,x,C,_,L,T,w,P,E,S,D,R,j,F,B;const V=H;return s(),o(f,null,[i(We)?(s(),o("div",Ce,_e)):(s(),o("div",{key:1,"data-skeleton-root":"SHORT","theme-vars":i(k),class:"page-internet-product-detail"},[r("div",Te,[1==(null==(n=null==(l=i(Fe))?void 0:l.BASIC_INFO)?void 0:n.bannerType)&&(null==(O=null==(v=i(Fe))?void 0:v.BASIC_INFO)?void 0:O.banner.length)?(s(),g(se,{key:0,"data-skeleton-type":"img","indicator-color":"#ddd",images:null==(b=i(Fe))?void 0:b.BASIC_INFO.banner},null,8,["images"])):c("",!0),2==(null==(C=null==(x=i(Fe))?void 0:x.BASIC_INFO)?void 0:C.bannerType)&&(null==(L=null==(_=i(Fe))?void 0:_.BASIC_INFO)?void 0:L.video.length)?(s(),g(Ie,{key:1,"data-skeleton-type":"img",src:null==(T=i(Fe))?void 0:T.BASIC_INFO.video[0]},null,8,["src"])):c("",!0),(null==(E=null==(P=null==(w=i(Fe))?void 0:w.BASIC_INFO)?void 0:P.bannerMove)?void 0:E.length)?(s(),g(se,{key:2,url:null==(R=null==(D=null==(S=i(Fe))?void 0:S.BASIC_INFO)?void 0:D.bannerMove)?void 0:R[0],onClick:va},null,8,["url"])):c("",!0),r("div",{ref_key:"observeRef",ref:je},null,512)]),(null==(j=i(Fe))?void 0:j.GUARANTEE)?(s(),g(oe,{key:0,"show-service-config":"","data-source":i(Fe),"plan-list":i(Ke)},null,8,["data-source","plan-list"])):c("",!0),d(re,{ref_key:"detailScrollRef",ref:Re,"order-detail":i(la),"data-source":i(Fe)},{form:m((()=>[r("div",we,[Pe,d(i(he),{ref_key:"holderFormRef",ref:Xe,title:"本人信息（投保人）",model:i(aa).holder.formData,schema:i(aa).holder.schema,config:i(aa).holder.config,autocomplete:""},null,8,["model","schema","config"]),(s(!0),o(f,null,h(i(aa).insuredList,((e,a)=>(s(),g(i(he),{ref_for:!0,ref_key:"insuredFormRef",ref:ea,key:a,title:"为谁投保（被保人）",model:i(aa).insuredList[a].formData,schema:e.schema,config:e.config,autocomplete:""},null,8,["model","schema","config"])))),128))]),d(i(p),{"form-info":i(na),"risk-info":i(Je),"tenant-product-detail":i(Fe).PREMIUM,"plan-list":i(Ke),"premium-info":{premium:i(fa),premiumLoadingText:i(ma)},onUpdateActivePlan:pa},null,8,["form-info","risk-info","tenant-product-detail","plan-list","premium-info"]),i(Ye).length>0?(s(),g(xe,{key:0,"package-product-list":i(Ye)},null,8,["package-product-list"])):c("",!0)])),_:1},8,["order-detail","data-source"]),d(V,null,{default:m((()=>{var e,a,t;return[(null==(e=i(Fe).SIGNATURE)?void 0:e.inscribedContent)?(s(),g(i(A),{key:0,"inscribed-content":null==(t=null==(a=i(Fe))?void 0:a.SIGNATURE)?void 0:t.inscribedContent},null,8,["inscribed-content"])):c("",!0)]})),_:1}),d(V,null,{default:m((()=>{var e;return[(null==(e=i(ga))?void 0:e.length)?(s(),g(i(I),{key:0,"attachment-list":i(ga),"pre-text":"请阅读",onPreviewFile:t[0]||(t[0]=e=>Ia(e))},null,8,["attachment-list"])):c("",!0)]})),_:1}),i(Ne)?(s(),g(pe,{key:1,"is-share":null==(B=null==(F=i(Fe))?void 0:F.PRODUCT_LIST)?void 0:B.showWXShare,premium:i(fa),"share-info":i(ta),"loading-text":i(ma),"plan-code":i(na).planCode,"payment-frequency":i(na).paymentFrequency,"tenant-product-detail":i(Fe),onHandleClick:ba},{default:m((()=>[y("立即投保")])),_:1},8,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail"])):c("",!0)],8,Le)),i(qe)?(s(),g(ie,{key:2,"product-detail":i(Fe)},null,8,["product-detail"])):c("",!0),Ee,d(i(u),{show:i(Ve),"onUpdate:show":t[1]||(t[1]=e=>N(Ve)?Ve.value=e:null),"content-list":i(oa),"active-index":0,onOnConfirmHealth:xa,onOnCloseHealthByMask:_a},null,8,["show","content-list"]),i(He)?(s(),g(i(a),{key:3,show:i(He),"onUpdate:show":t[2]||(t[2]=e=>N(He)?He.value=e:null),"content-list":i(ze)?i(ga):i(Aa),"is-only-view":i(ze),"active-index":i(Ue),text:i(ze)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":i(ze)?0:i(ya),onSubmit:Ca,onOnCloseFilePreviewByMask:_a},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):c("",!0)],64)}}});export{De as default};
