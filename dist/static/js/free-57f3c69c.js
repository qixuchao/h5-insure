import{d as e,i as t,r as a,z as s,o as n,c as o,a as l,b as i,e as r,l as d,u as c,q as u,f as p,p as f,cT as m,cb as v,ae as b,a4 as h,a5 as y,cA as A,g,h as I,j as w,aw as _,a6 as O,O as k,cU as x,a7 as C,w as V,F as D,n as L,cV as P,bW as F,ab as R,I as j,aD as S,T as N,cc as T,aC as B,ah as E}from"./index-70866bb3.js";import{c as H}from"./cloneDeep-8d06c58e.js";import{a as M,b as J}from"./product-7089ba0a.js";import{i as z,t as U}from"./trial-55b7b6bf.js";import{a as G}from"./index-a2dc40df.js";import{n as W}from"./nextStep-73676ab5.js";import{r as Y,g as Z,v as q,t as Q}from"./utils-b1deecc7.js";import{f as X}from"./utils-9b816e2c.js";import $ from"./index-38bd95d0.js";import{P as K}from"./index-9281b59b.js";import{_ as ee}from"./index-f4cd7dbc.js";import te from"./index-acc6cd8d.js";import{u as ae}from"./useAttachment-99870485.js";import{u as se}from"./useOrder-4c3b96c8.js";import"./get-baf7e818.js";import"./infoCollection-8c98739a.js";import"./index-cf082549.js";import"./empth-c0adfdba.js";import"./PolicyInfo-e2ffbe0f.js";import"./search-0141a3ba.js";import"./config-98e8d477.js";import"./product-585b0e6f.js";import"./core-00714f77.js";import"./constants-fe95ef6f.js";import"./trial-a469d771.js";import"./createProposal-bd5858d6.js";import"./PersonalInfo-e36d41cc.js";import"./validator-6eb2e74e.js";import"./useThread-637a02aa.js";const ne={class:"free-card"},oe={class:"title"},le=e({name:"freeHolderForm"}),ie=e({...le,props:{detail:{default:()=>({})},isFirst:{type:Boolean,default:!0},insureDetail:{default:()=>({})},previewMode:{type:Boolean,default:!1}},setup(e,{expose:h}){const y=e,A=t(),g=a({factorObj:{1:[{attributeValues:null,code:"mobile",datasource:null,defaultValue:null,displayType:null,factorId:null,factorScript:null,hasDefaultValue:1,id:8249,isDisplay:1,isHidden:1,isMustInput:1,isReadOnly:null,moduleType:1,placeholder:null,planCode:null,position:null,productCode:"lin23323",productId:null,title:"手机号"},{attributeValues:null,code:"verificationCode",datasource:null,defaultValue:null,displayType:null,factorId:null,factorScript:null,hasDefaultValue:1,id:8249,isDisplay:1,isHidden:1,isMustInput:1,isReadOnly:null,moduleType:1,placeholder:null,planCode:null,position:null,productCode:"lin23323",productId:null,title:"验证码"}],2:[],3:[]},isFirst:!0}),I=async({mobile:e,type:t},a)=>{var s;if(A.value){if(y.previewMode)return void(null==a||a());null==(s=A.value)||s.validateForm(`${t}_mobile`).then((async()=>{const t=y.isFirst?m:v,s=await t(e),{code:n,data:o}=s;"10000"===n&&(null==a||a())}))}};return s((()=>y.isFirst),(()=>{var e;y.isFirst||(g.factorObj=null==(e=y.insureDetail)?void 0:e.productFactor)})),h({validateForm:()=>new Promise(((e,t)=>{A.value.validateForm().then((t=>{console.log(t),e(!0)})).catch((()=>{console.log("失败"),t()}))}))}),(e,t)=>{const a=b;return n(),o("div",ne,[l("div",{class:f({container:!0,"is-first":e.isFirst})},[l("div",oe,[i(a,{name:"free-arrow"}),l("span",null,r(e.isFirst?"凭手机号 免费领取":"最后一步 填写信息"),1),i(a,{name:"free-arrow"})]),e.isFirst?(n(),d(ee,{ref_key:"formRef",ref:A,key:e.isFirst?1:2,"send-sms-code":I,"need-desensitize":"","form-info":e.detail,"factor-object":c(g).factorObj},null,8,["form-info","factor-object"])):u("",!0),p(e.$slots,"default")],2)])}}});const re={key:0},de=[l("div",{class:"__skeleton_free_content__"},[l("div",{class:"van-config-provider router-view sk",style:{"--van-primary-color":"#0d6efe","--van-primary-color-light8":"#0d6efe80","--van-primary-color-light1":"#0d6efe10","--van-primary-color-light2":"#0d6efe20","--van-danger-color":"#FF3C10","--van-primary-background-color":"#0d6efe20","--van-button-primary-background-color":"#0d6efe","--van-button-primary-border-color":"#0d6efe","--van-checkbox-checked-bg-color":"#0d6efe10","--van-switch-on-background-color":"#0d6efe","--van-toast-default-padding":"14px","--van-linear-bg":"linear-gradient(to right, #0d6efe, rgba(13,150,254,1))","--van-popup-close-icon-margin":"20px","--van-popup-round-border-radius":"20px","--van-card-title":"#0d6efe","--van-card-cell-color":"#0d6efe80","--van-radio-checked-icon-color":"#0d6efe","--van-pro-check-radius":"40px","--6a485862-state_colors_1_":"#ddd"}},[l("div",{class:"page-free-product-detail"},[l("div",{class:"van-image banner",style:{width:"375px",height:"185px"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},[l("img",{class:"van-image__img","data-src":"https://za-obs-prod.obs.cn-north-4.myhuaweicloud.com:443/common/20221213/b38ae9c8c023488bb4fb4bdc2c67a211/wecom-temp-b44cd90cb804d1826e7824adc3b386e9(1).png?AccessKeyId=LLSTLZA8R9JY8AJRF7ZF&Policy=eyJleHBpcmF0aW9uIjoiMjAyMi0xMi0yM1QwNDowNTo1OS41NzhaIiwiY29uZGl0aW9ucyI6W1sic3RhcnRzLXdpdGgiLCIka2V5IiwiIl0sWyJlcSIsIiRidWNrZXQiLCJ6YS1vYnMtcHJvZCJdXX0=&Signature=gAgGPVirtYpSJtdYcnN1W3zpIbQ%3D",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",lazy:"loaded",style:{background:"rgb(238, 238, 238)"}})]),l("div",{class:"free-card",style:{"--0c47bddc-props_colors_0_":"#ddd","--0c47bddc-props_colors_1_":"#ddd"}},[l("div",{class:"container"},[l("div",{class:"title"},[l("svg",{class:"svg-icon icon-free-arrow"},[l("use",{"xlink:href":"#icon-free-arrow"})]),l("span",null,[l("span",{class:"sk-text",style:{"--fp":"0.00%","--sp":"100.00%","--lh":"16.0001px"}},"最后一步 填写信息")]),l("svg",{class:"svg-icon icon-free-arrow"},[l("use",{"xlink:href":"#icon-free-arrow"})])]),l("div",{class:"page-info-wrapper"},[l("div",{class:"com-form-wrapper","show-error":"","show-error-message":"false"},[l("form",{class:"van-form"},[l("div",{class:"com-card"},[l("div",{class:"com-card-wrap"},[l("div",{class:"header"}),l("div",{class:"body",style:{height:"auto"}},[l("div",{class:"com-personal-wrapper"},[l("div",{class:"van-cell van-field van-field--label-left com-pro-field"},[l("div",{class:"van-cell__title van-field__label van-field__label--left"},[l("label",{id:"van-field-1-label",for:"van-field-1-input"},[l("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"手机号")])]),l("div",{class:"van-cell__value van-field__value"},[l("div",{class:"van-field__body"},[l("input",{type:"text",id:"van-field-1-input",name:"holder_mobile",class:"van-field__control van-field__control--left sk-input",placeholder:"请输入手机号",autocomplete:"off","aria-labelledby":"van-field-1-label"}),l("div",{class:"van-field__right-icon"})])])]),l("div",{class:"van-cell van-field van-field--label-left com-pro-field"},[l("div",{class:"van-cell__title van-field__label van-field__label--left"},[l("label",{id:"van-field-2-label",for:"van-field-2-input"},[l("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"验证码")])]),l("div",{class:"van-cell__value van-field__value"},[l("div",{class:"van-field__body"},[l("input",{type:"tel",inputmode:"numeric",id:"van-field-2-input",name:"holder_verificationCode",class:"van-field__control van-field__control--left",placeholder:"请输入验证码",autocomplete:"off","aria-labelledby":"van-field-2-label"}),l("div",{class:"van-field__right-icon"})])]),l("div",{class:"button-extra"},[l("button",{type:"button",class:"van-button van-button--primary van-button--small van-button--plain sms-code sk-button"},[l("div",{class:"van-button__content"},[l("span",{class:"van-button__text"},[l("span",{class:"sk-text",style:{"--fp":"8.33%","--sp":"91.67%","--lh":"19.2002px"}},"验证码")])])])])])])])])])])])]),l("div",{class:"pro-shadow-button submit-btn"},[l("button",{type:"button",class:"van-button van-button--primary van-button--normal van-button--block van-button--round shadow-button shadow sk-button"},[l("div",{class:"van-button__content"},[l("span",{class:"van-button__text"},[l("span",{class:"sk-text",style:{"--fp":"8.33%","--sp":"91.67%","--lh":"19.2002px"}},"激活保障")])])])]),l("div",{class:"com-attachment-list"},[l("span",null,[l("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}},"请阅读")]),l("span",{class:"attachment-item"},[l("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《免责条款说明》 ")]),l("span",{class:"attachment-item"},[l("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《被保险人同意声明》 ")]),l("span",{class:"attachment-item"},[l("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《投保须知》 ")]),l("span",{class:"attachment-item"},[l("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《重要提示》 ")]),l("span",{class:"attachment-item"},[l("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《条款费率》 ")]),l("span",{class:"attachment-item"},[l("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《特别约定》 ")]),l("span",{class:"attachment-item"},[l("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《保险经纪委托合同》 ")]),l("span",{class:"attachment-item"},[l("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《客户告知书》 ")])])])]),l("div",{class:"product-desc"},[l("div",{class:"van-image",style:{width:"100%"}},[l("img",{class:"van-image__img","data-src":"https://za-obs-prod.obs.cn-north-4.myhuaweicloud.com:443/common/20221211/dff441c3bcf94b2d8f08e6ec3f4267ec/产品介绍.png?AccessKeyId=LLSTLZA8R9JY8AJRF7ZF&Policy=eyJleHBpcmF0aW9uIjoiMjAyMi0xMi0yM1QwNDowNTo1OS41NzlaIiwiY29uZGl0aW9ucyI6W1sic3RhcnRzLXdpdGgiLCIka2V5IiwiIl0sWyJlcSIsIiRidWNrZXQiLCJ6YS1vYnMtcHJvZCJdXX0=&Signature=%2B%2FGYArnGmx9sMDCEvOBvjfpiZsU%3D",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",lazy:"loaded",style:{background:"rgb(238, 238, 238)"}})])])])])],-1)],ce=["theme-vars"],ue={class:"product-desc"},pe={key:1,class:"page-free-footer"},fe=e({__name:"free",setup(e){const r=h((()=>y((()=>import("./index-184f2891.js")),["static/js/index-184f2891.js","static/css/index-eabeb59f.css","static/js/index-70866bb3.js","static/css/index-858bf1e3.css"]))),p=h((()=>y((()=>import("./index-9dca7078.js")),["static/js/index-9dca7078.js","static/css/index-cb73c937.css","static/js/index-70866bb3.js","static/css/index-858bf1e3.css"]))),m=h((()=>y((()=>import("./index-ea1b30e8.js")),["static/js/index-ea1b30e8.js","static/css/index-fa4edf2a.css","static/js/index-70866bb3.js","static/css/index-858bf1e3.css","static/js/theme-94cf7d00.js","static/js/index-9281b59b.js","static/css/index-bbfdd7ec.css","static/js/utils-b1deecc7.js","static/js/infoCollection-8c98739a.js","static/js/trial-a469d771.js"]))),v=A(),ee=g(),ne=I(),{productCode:oe="",agencyCode:le="",tenantId:fe="",insurerCode:me="",extraInfo:ve,preview:be}=ne.query;let he={};try{he=JSON.parse(decodeURIComponent(ve))}catch(Ue){console.log(Ue)}const{openId:ye,indirectCode:Ae="",agentCode:ge}=he;console.log("extInfo",he);const Ie=t(),we=t(),_e=t(),Oe=a({tenantProductDetail:{},insureProductDetail:{},submitData:{},riskVOList:[{}],userData:{},ifPersonalInfoSuccess:!1,currentRiskInfo:[],mainRiskInfo:{},currentPackageConfigVOList:[],planList:[],colors:["#fff"],detail:{},order:{tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}},banner:"",productDesc:[],newAuth:!0,isValidateCode:!1,insureDetail:{},loading:!0,isSelfInsure:!0,showBtn:!1,activeIndex:0,showFilePreview:!1,isOnlyView:!0}),ke=t({}),xe=se({extInfo:{buttonCode:"EVENT_FREE_multiIssuePolicy",pageCode:"infoCollection",extraInfo:he,templateId:(null==he?void 0:he.templateId)||"1",iseeBizNo:""}}),Ce=t(),Ve=t({}),De=t([]),Le=t(),{fileList:Pe,mustReadFileCount:Fe,popupFileList:Re}=ae(Ve,Le),je=t({imgUrl:"",desc:"",title:"",link:window.location.href}),Se=w((()=>!!be)),Ne=_((async()=>{if(console.log(">>>>>调用试算<<<<<"),Oe.ifPersonalInfoSuccess){Oe.submitData.productCode=oe,Oe.submitData.tenantId=fe,console.log([...Oe.currentRiskInfo],"slslslwwp--1--190199"),Oe.riskVOList=(()=>{const{chargePeriod:e,coveragePeriod:t,paymentFrequency:a,insuranceEndDate:s,insuranceStartDate:n}=ke.value;return console.log("ssinit===++guaranteeObj.value",ke.value),Y([...Oe.currentRiskInfo]).map((s=>({...s,paymentFrequency:a,chargePeriod:e,coveragePeriod:t})))})(),console.log(Oe.riskVOList,"state.riskVOList----2222223333"),Oe.submitData.insuredVOList&&Oe.submitData.insuredVOList.forEach((e=>{e.productPlanVOList=[{insurerCode:me,planCode:Ve.value.planCode,riskVOList:Oe.riskVOList}]})),console.log(">>>数据构建<<<",Oe.submitData);const e=H(Oe.submitData);console.log(e,"submitDataCopy===")}}),300),Te=async e=>{console.log(e,"slsllw--2020");const{holder:t,insuredVOList:a,isFirstInsuredChange:s}=e;t&&(Oe.submitData.holder=t),a&&a.length>0&&a.forEach(((e,t)=>{var a;Oe.submitData.insuredVOList&&Oe.submitData.insuredVOList.length>t?Oe.submitData.insuredVOList[t].personVO={...e.personVO,socialFlag:e.personVO.hasSocialInsurance}:((null==(a=Oe.submitData)?void 0:a.insuredVOList)||(Oe.submitData.insuredVOList=[]),Oe.submitData.insuredVOList.push({personVO:{...e.personVO,socialFlag:e.personVO.hasSocialInsurance}}))})),Oe.ifPersonalInfoSuccess=!0,Ne()},Be=async()=>{Oe.loading=!0;const e=M({productCode:oe,tenantId:fe}),t=z({productCode:oe,isTenant:!be});await Promise.all([e,t]).then((([e,t])=>{var a,s,n;if("10000"===e.code){Oe.tenantProductDetail=e.data,document.title=e.data.BASIC_INFO.title||"";const{title:t,desc:s,image:o}=(null==(a=e.data)?void 0:a.PRODUCT_LIST.wxShareConfig)||{};n={title:t,desc:s,image:o},je.value={desc:n.desc||"你好，这里是描述",imgUrl:n.image,title:n.title,link:window.location.href},console.log("shareInfo",je.value),e.data.BASIC_INFO&&e.data.BASIC_INFO.themeType&&F(e.data.BASIC_INFO.themeType)}"10000"===t.code&&(Oe.insureProductDetail=t.data,Ve.value=null==(s=t.data.productPlanInsureVOList)?void 0:s[0],Oe.planList=(t.data.productPlanInsureVOList||[]).filter((e=>e.planCode)).map((e=>({planName:e.planName,planCode:e.planCode})))),J({productCode:oe}).then((({code:e,data:t})=>{var a,s,n,o;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:l}=t;Le.value=e||[];const{basicInfo:{questionnaireType:i},questions:r,questionnaireName:d}=(null==(a=null==l?void 0:l[0])?void 0:a.questionnaireDetailResponseVO)||{basicInfo:{}};i&&(De.value=2===i?[{attachmentName:d,attachmentUri:r,attachmentType:"question"}]:[{attachmentName:d,attachmentUri:null==(s=null==r?void 0:r[0])?void 0:s.content,attachmentType:Z(String(null==(n=null==r?void 0:r[0])?void 0:n.textType),null==(o=null==r?void 0:r[0])?void 0:o.content)}])}})),Oe.loading=!1}))};s((()=>Ve.value),(()=>{const{oilPackageProductVOList:e,planCode:t,insureProductRiskVOList:a}=Ve.value;ke.value.planCode=t,Oe.currentRiskInfo=a,Oe.mainRiskInfo=(a||[]).find((e=>e.mainRiskFlag===O.YES)),console.log("mainRiskInfo.value",Oe.mainRiskInfo)}),{deep:!0,immediate:!0});const Ee=async()=>{if(Se.value&&Oe.newAuth)Oe.newAuth=!1;else if(!Se.value||Oe.newAuth)try{if(Oe.newAuth)if(Se.value)Oe.newAuth=!1;else{const e={loginType:"2",openId:ye,thirdUserType:"XINAO_WECHAT",indirectCode:Ae,loginName:Oe.order.tenantOrderHolder.mobile,password:Oe.order.tenantOrderHolder.verificationCode},{code:t,data:a}=await U(e);"10000"===t&&(Oe.newAuth=!1)}else Ce.value.validate().then((async e=>{var t;if(console.log(xe.value,"skskks===++++",Oe.submitData),Oe.ifPersonalInfoSuccess&&"10000"===e.code){const e=((e={},t={},a={})=>{var s;const n={...a};console.log("nextStepParams",n);const{tenantOrderHolder:o,tenantOrderInsuredList:l}=X({holder:null==(s=Oe.submitData.holder)?void 0:s.personVO,insuredList:(Oe.submitData.insuredVOList||[]).map((e=>e.personVO))});console.log("state.submitData",Oe.submitData),console.log("tenantOrderHolder",o),console.log("tenantOrderInsuredList",l);const i=Oe.submitData.insuredVOList.map((e=>{var t,a;return null==(a=null==(t=e.productPlanVOList)?void 0:t[0])?void 0:a.riskVOList})).flat();console.log("riskList",i);const r={tenantId:fe,riskList:i,riskPremium:t,productId:null==e?void 0:e.id};return n.extInfo.iseeBizNo=Ie.value,n.productCode=null==e?void 0:e.productCode,n.commencementTime=n.insuranceStartDate,n.expiryDate=n.insuranceEndDate,n.premium=0,n.orderAmount=0,n.orderRealAmount=0,n.tenantOrderHolder=o,n.tenantOrderInsuredList=l.map((t=>{var a;return{...t,certType:t.certType||E.CERT,certNo:(t.certNo||"").toLocaleUpperCase(),planCode:Ve.value.planCode,tenantOrderProductList:[{premium:0,productCode:null==e?void 0:e.productCode,productName:null==e?void 0:e.productName,planCode:null==(a=Ve.value)?void 0:a.planCode,tenantOrderRiskList:Q(r)}]}})),console.log("nextStepParams",n),n})({insurerCode:me,productCode:oe,productId:"",productName:(null==(t=Oe.insureProductDetail)?void 0:t.productName)||"",tenantId:fe},{},xe.value);W(e,((e,t)=>{t===B.JUMP_PAGE&&e.orderNo&&ee.push(`/baseInsurance/orderDetail?from=free&tenantId=${fe}&orderNo=${e.orderNo}`)}))}})).catch((e=>{console.log(e,"表单验证失败");const t=document.querySelector(".com-card-wrap");t&&t.scrollIntoView()}))}catch(e){console.log("e")}else ee.push(`/baseInsurance/orderDetail?from=free&tenantId=${fe}&orderNo=mockOrderNo&productCode=${oe}&preview=true&templateView=${null==he?void 0:he.templateId}`)},He=async()=>await(async()=>{var e,t;if(Se.value)return!0;let a="",s="";if(Oe.newAuth)await _e.value.validateForm(),a=null==(e=Oe.order.tenantOrderHolder)?void 0:e.verificationCode,s=Oe.order.tenantOrderHolder.mobile;else{const{mobile:e,verificationCode:n=""}=(null==(t=Oe.submitData.holder)?void 0:t.personVO)||{};a=n,s=e}if((Oe.isValidateCode||Oe.newAuth)&&(!a||!q(a)))return N({message:"请输入正确的验证码"}),!1;if(Oe.newAuth||!Oe.isValidateCode)return!0;const{code:n,data:o}=await T(s,a);return!!o})()?(Oe.newAuth?Ee():Re.value.length>0?(Oe.isOnlyView=!1,Oe.showFilePreview=!0):Ee(),!1):null,Me=()=>{Oe.showFilePreview=!1,Oe.isOnlyView=!0},Je=()=>{Oe.showFilePreview=!1,Oe.isOnlyView=!0,Ee()};k((()=>{Be(),setTimeout((async()=>{Ie.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)}));const ze=x(we);return C(we,(([{isIntersecting:e}],t)=>{(e=>{ze.bottom.value<0||ze.top.value<0?Oe.showBtn=!e:Oe.showBtn=!1})(e)})),(e,t)=>{var a,s,h,y,A,g;const I=R,w=j,_=b,O=S;return n(),o(D,null,[c(Oe).loading?(n(),o("div",re,de)):(n(),o("div",{key:1,"data-skeleton-root":"FREE","theme-vars":c(v),class:"page-free-product-detail"},[1==(null==(s=null==(a=c(Oe).tenantProductDetail)?void 0:a.BASIC_INFO)?void 0:s.bannerType)&&(null==(y=null==(h=c(Oe).tenantProductDetail)?void 0:h.BASIC_INFO)?void 0:y.banner.length)?(n(),d($,{key:0,"data-skeleton-type":"img","indicator-color":"#ddd",images:null==(A=c(Oe).tenantProductDetail)?void 0:A.BASIC_INFO.banner},null,8,["images"])):u("",!0),i(ie,{ref_key:"formRef",ref:_e,"is-first":c(Oe).newAuth,"insure-detail":c(Oe).insureDetail,detail:c(Oe).order,colors:c(Oe).colors,"preview-mode":c(Se)},{default:V((()=>{var e,a;return[c(Oe).newAuth?u("",!0):(n(),d(c(G),{key:0,ref_key:"personalInfoRef",ref:Ce,modelValue:c(Oe).userData,"onUpdate:modelValue":t[0]||(t[0]=e=>c(Oe).userData=e),"product-factor":null==(e=c(Ve))?void 0:e.productFactor,"multi-insured-config":null==(a=c(Ve))?void 0:a.multiInsuredConfigVO,onTrailChange:Te},null,8,["modelValue","product-factor","multi-insured-config"])),i(K,{ref_key:"root",ref:we,class:f({"submit-btn":!0,"is-first":!c(Oe).newAuth}),"is-gradient":!1,text:c(Oe).newAuth?"立即领取":"激活保障",onClick:He},null,8,["class","text"]),i(I,null,{default:V((()=>{var e;return[(null==(e=c(Pe))?void 0:e.length)?(n(),d(c(p),{key:0,"attachment-list":c(Pe),"has-bg-color":!1,"pre-text":"请阅读",onPreviewFile:t[1]||(t[1]=e=>(e=>{Oe.isOnlyView=!0,Oe.activeIndex=e,Oe.showFilePreview=!0})(e))},null,8,["attachment-list"])):u("",!0)]})),_:1})]})),_:1},8,["is-first","insure-detail","detail","colors","preview-mode"]),l("div",ue,[(n(!0),o(D,null,L((null==(g=c(Oe).tenantProductDetail.SPECIAL_FEATURE)?void 0:g.spec)||[],((e,t)=>(n(),d(P,{key:t},{fallback:V((()=>[i(_,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:V((()=>[(n(),d(w,{key:t,class:"detail-img",width:"100%",src:e},null,8,["src"]))])),_:2},1024)))),128))]),i(O),i(I,null,{default:V((()=>{var e,t,a;return[(null==(e=c(Oe).tenantProductDetail.SIGNATURE)?void 0:e.inscribedContent)?(n(),d(c(r),{key:0,"inscribed-content":null==(a=null==(t=c(Oe).tenantProductDetail)?void 0:t.SIGNATURE)?void 0:a.inscribedContent},null,8,["inscribed-content"])):u("",!0)]})),_:1}),c(Oe).showBtn?(n(),o("footer",pe,[i(K,{"is-gradient":!1,text:c(Oe).newAuth?"立即领取":"激活保障",onClick:He},null,8,["text"])])):u("",!0)],8,ce)),c(Oe).showFilePreview?(n(),d(c(m),{key:2,show:c(Oe).showFilePreview,"onUpdate:show":t[2]||(t[2]=e=>c(Oe).showFilePreview=e),"content-list":c(Oe).isOnlyView?c(Pe):c(Re),"is-only-view":c(Oe).isOnlyView,"active-index":c(Oe).activeIndex,text:c(Oe).isOnlyView?"关闭":"我已逐页阅读上述内容并同意","force-read-count":c(Oe).isOnlyView?0:c(Fe),onSubmit:Je,onOnCloseFilePreviewByMask:Me},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):u("",!0),c(Oe).loading?u("",!0):(n(),d(te,{key:3,"product-detail":c(Oe).tenantProductDetail},null,8,["product-detail"]))],64)}}});export{fe as default};
