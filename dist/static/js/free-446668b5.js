import{d as e,r as t,z as a,R as s,c as n,A as o,f as i,i as l,E as r,e as d,g as c,h as u,k as p,F as f,aa as m,X as v,Y as h,cg as b,a as y,u as A,L as g,Z as w,a1 as I,ch as _,a0 as O,a6 as k,w as x,U as C,V,ap as D,a4 as L,af as P,T as F,P as R,C as j}from"./index-7e7f1188.js";import{d as S}from"./debounce-eed12388.js";import{c as N}from"./cloneDeep-1de8e9b0.js";import{a as T,q as B}from"./product-84f0626c.js";import{i as E,t as H}from"./trial-a02a86b9.js";import{a as M,s as J,c as z}from"./phoneVerify-88f900c7.js";import{P as U}from"./index-95f438cc.js";import"./infoCollection-d4a08a62.js";import{n as G}from"./nextStep-a533c67b.js";import{r as W,g as Y,v as Z,t as q}from"./utils-ba43766e.js";import{f as X}from"./utils-473e1b85.js";import{_ as Q}from"./index-1e45dc58.js";import{P as $}from"./index-8d002d82.js";import{_ as K}from"./index-2a13b24f.js";import{P as ee}from"./index-690df422.js";import{u as te}from"./useAttachment-b2a27af0.js";import{u as ae}from"./useOrder-f37a1d88.js";import"./pdfh5-008ca364.js";import"./isObjectLike-a9798079.js";import"./_initCloneObject-0663309f.js";import"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-782c841a.js";/* empty css              */import"./bankCard-64cb4322.js";import"./index-11e3ac94.js";import"./index-5f7322be.js";import"./core-b47b1fa5.js";import"./constant-8927d485.js";import"./trial-a1117710.js";import"./createProposal-30c00b37.js";import"./useDicData-ebfc2305.js";const se={class:"free-card"},ne={class:"title"},oe=e({name:"freeHolderForm"}),ie=e({...oe,props:{detail:{default:()=>({})},isFirst:{type:Boolean,default:!0},insureDetail:{default:()=>({})},previewMode:{type:Boolean,default:!1}},setup(e,{expose:v}){const h=e,b=t(),y=a({factorObj:{1:[{attributeValues:null,code:"mobile",datasource:null,defaultValue:null,displayType:null,factorId:null,factorScript:null,hasDefaultValue:1,id:8249,isDisplay:1,isHidden:1,isMustInput:1,isReadOnly:null,moduleType:1,placeholder:null,planCode:null,position:null,productCode:"lin23323",productId:null,title:"手机号"},{attributeValues:null,code:"verificationCode",datasource:null,defaultValue:null,displayType:null,factorId:null,factorScript:null,hasDefaultValue:1,id:8249,isDisplay:1,isHidden:1,isMustInput:1,isReadOnly:null,moduleType:1,placeholder:null,planCode:null,position:null,productCode:"lin23323",productId:null,title:"验证码"}],2:[],3:[]},isFirst:!0}),A=async({mobile:e,type:t},a)=>{var s;if(b.value){if(h.previewMode)return void(null==a||a());null==(s=b.value)||s.validateForm(`${t}_mobile`).then((async()=>{const t=h.isFirst?M:J,s=await t(e),{code:n,data:o}=s;"10000"===n&&(null==a||a())}))}};return s((()=>h.isFirst),(()=>{var e;h.isFirst||(y.factorObj=null==(e=h.insureDetail)?void 0:e.productFactor)})),v({validateForm:()=>new Promise(((e,t)=>{b.value.validateForm().then((t=>{console.log(t),e(!0)})).catch((()=>{console.log("失败"),t()}))}))}),(t,a)=>{const s=m;return n(),o("div",se,[i("div",{class:f({container:!0,"is-first":e.isFirst})},[i("div",ne,[l(s,{name:"free-arrow"}),i("span",null,r(e.isFirst?"凭手机号 免费领取":"最后一步 填写信息"),1),l(s,{name:"free-arrow"})]),e.isFirst?(n(),d(K,{ref_key:"formRef",ref:b,key:e.isFirst?1:2,"send-sms-code":A,"need-desensitize":"","form-info":e.detail,"factor-object":c(y).factorObj},null,8,["form-info","factor-object"])):u("",!0),p(t.$slots,"default")],2)])}}});const le={key:0},re=[i("div",{class:"__skeleton_free_content__"},[i("div",{class:"van-config-provider router-view sk",style:{"--van-primary-color":"#0d6efe","--van-primary-color-light8":"#0d6efe80","--van-primary-color-light1":"#0d6efe10","--van-primary-color-light2":"#0d6efe20","--van-danger-color":"#FF3C10","--van-primary-background-color":"#0d6efe20","--van-button-primary-background-color":"#0d6efe","--van-button-primary-border-color":"#0d6efe","--van-checkbox-checked-bg-color":"#0d6efe10","--van-switch-on-background-color":"#0d6efe","--van-toast-default-padding":"14px","--van-linear-bg":"linear-gradient(to right, #0d6efe, rgba(13,150,254,1))","--van-popup-close-icon-margin":"20px","--van-popup-round-border-radius":"20px","--van-card-title":"#0d6efe","--van-card-cell-color":"#0d6efe80","--van-radio-checked-icon-color":"#0d6efe","--van-pro-check-radius":"40px","--6a485862-state_colors_1_":"#ddd"}},[i("div",{class:"page-free-product-detail"},[i("div",{class:"van-image banner",style:{width:"375px",height:"185px"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},[i("img",{class:"van-image__img","data-src":"https://za-obs-prod.obs.cn-north-4.myhuaweicloud.com:443/common/20221213/b38ae9c8c023488bb4fb4bdc2c67a211/wecom-temp-b44cd90cb804d1826e7824adc3b386e9(1).png?AccessKeyId=LLSTLZA8R9JY8AJRF7ZF&Policy=eyJleHBpcmF0aW9uIjoiMjAyMi0xMi0yM1QwNDowNTo1OS41NzhaIiwiY29uZGl0aW9ucyI6W1sic3RhcnRzLXdpdGgiLCIka2V5IiwiIl0sWyJlcSIsIiRidWNrZXQiLCJ6YS1vYnMtcHJvZCJdXX0=&Signature=gAgGPVirtYpSJtdYcnN1W3zpIbQ%3D",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",lazy:"loaded",style:{background:"rgb(238, 238, 238)"}})]),i("div",{class:"free-card",style:{"--0c47bddc-props_colors_0_":"#ddd","--0c47bddc-props_colors_1_":"#ddd"}},[i("div",{class:"container"},[i("div",{class:"title"},[i("svg",{class:"svg-icon icon-free-arrow"},[i("use",{"xlink:href":"#icon-free-arrow"})]),i("span",null,[i("span",{class:"sk-text",style:{"--fp":"0.00%","--sp":"100.00%","--lh":"16.0001px"}},"最后一步 填写信息")]),i("svg",{class:"svg-icon icon-free-arrow"},[i("use",{"xlink:href":"#icon-free-arrow"})])]),i("div",{class:"page-info-wrapper"},[i("div",{class:"com-form-wrapper","show-error":"","show-error-message":"false"},[i("form",{class:"van-form"},[i("div",{class:"com-card"},[i("div",{class:"com-card-wrap"},[i("div",{class:"header"}),i("div",{class:"body",style:{height:"auto"}},[i("div",{class:"com-personal-wrapper"},[i("div",{class:"van-cell van-field van-field--label-left com-pro-field"},[i("div",{class:"van-cell__title van-field__label van-field__label--left"},[i("label",{id:"van-field-1-label",for:"van-field-1-input"},[i("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"手机号")])]),i("div",{class:"van-cell__value van-field__value"},[i("div",{class:"van-field__body"},[i("input",{type:"text",id:"van-field-1-input",name:"holder_mobile",class:"van-field__control van-field__control--left sk-input",placeholder:"请输入手机号",autocomplete:"off","aria-labelledby":"van-field-1-label"}),i("div",{class:"van-field__right-icon"})])])]),i("div",{class:"van-cell van-field van-field--label-left com-pro-field"},[i("div",{class:"van-cell__title van-field__label van-field__label--left"},[i("label",{id:"van-field-2-label",for:"van-field-2-input"},[i("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"验证码")])]),i("div",{class:"van-cell__value van-field__value"},[i("div",{class:"van-field__body"},[i("input",{type:"tel",inputmode:"numeric",id:"van-field-2-input",name:"holder_verificationCode",class:"van-field__control van-field__control--left",placeholder:"请输入验证码",autocomplete:"off","aria-labelledby":"van-field-2-label"}),i("div",{class:"van-field__right-icon"})])]),i("div",{class:"button-extra"},[i("button",{type:"button",class:"van-button van-button--primary van-button--small van-button--plain sms-code sk-button"},[i("div",{class:"van-button__content"},[i("span",{class:"van-button__text"},[i("span",{class:"sk-text",style:{"--fp":"8.33%","--sp":"91.67%","--lh":"19.2002px"}},"验证码")])])])])])])])])])])])]),i("div",{class:"pro-shadow-button submit-btn"},[i("button",{type:"button",class:"van-button van-button--primary van-button--normal van-button--block van-button--round shadow-button shadow sk-button"},[i("div",{class:"van-button__content"},[i("span",{class:"van-button__text"},[i("span",{class:"sk-text",style:{"--fp":"8.33%","--sp":"91.67%","--lh":"19.2002px"}},"激活保障")])])])]),i("div",{class:"com-attachment-list"},[i("span",null,[i("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}},"请阅读")]),i("span",{class:"attachment-item"},[i("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《免责条款说明》 ")]),i("span",{class:"attachment-item"},[i("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《被保险人同意声明》 ")]),i("span",{class:"attachment-item"},[i("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《投保须知》 ")]),i("span",{class:"attachment-item"},[i("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《重要提示》 ")]),i("span",{class:"attachment-item"},[i("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《条款费率》 ")]),i("span",{class:"attachment-item"},[i("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《特别约定》 ")]),i("span",{class:"attachment-item"},[i("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《保险经纪委托合同》 ")]),i("span",{class:"attachment-item"},[i("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《客户告知书》 ")])])])]),i("div",{class:"product-desc"},[i("div",{class:"van-image",style:{width:"100%"}},[i("img",{class:"van-image__img","data-src":"https://za-obs-prod.obs.cn-north-4.myhuaweicloud.com:443/common/20221211/dff441c3bcf94b2d8f08e6ec3f4267ec/产品介绍.png?AccessKeyId=LLSTLZA8R9JY8AJRF7ZF&Policy=eyJleHBpcmF0aW9uIjoiMjAyMi0xMi0yM1QwNDowNTo1OS41NzlaIiwiY29uZGl0aW9ucyI6W1sic3RhcnRzLXdpdGgiLCIka2V5IiwiIl0sWyJlcSIsIiRidWNrZXQiLCJ6YS1vYnMtcHJvZCJdXX0=&Signature=%2B%2FGYArnGmx9sMDCEvOBvjfpiZsU%3D",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",lazy:"loaded",style:{background:"rgb(238, 238, 238)"}})])])])])],-1)],de=["theme-vars"],ce={class:"product-desc"},ue={key:1,class:"page-free-footer"},pe=e({__name:"free",setup(e){const r=v((()=>h((()=>import("./index-f628a571.js")),["static/js/index-f628a571.js","static/css/index-eabeb59f.css","static/js/index-7e7f1188.js","static/css/index-f9ad39f9.css","static/js/pdfh5-008ca364.js"]))),p=v((()=>h((()=>import("./index-05574058.js")),["static/js/index-05574058.js","static/css/index-3329e46f.css","static/js/index-7e7f1188.js","static/css/index-f9ad39f9.css","static/js/pdfh5-008ca364.js"]))),M=v((()=>h((()=>import("./index-da436674.js")),["static/js/index-da436674.js","static/css/index-fa4edf2a.css","static/js/index-7e7f1188.js","static/css/index-f9ad39f9.css","static/js/pdfh5-008ca364.js","static/js/index-8d002d82.js","static/css/index-827a8544.css","static/js/utils-ba43766e.js","static/js/infoCollection-d4a08a62.js","static/js/trial-a1117710.js"]))),J=b(),K=y(),se=A(),{productCode:ne="",agencyCode:oe="",tenantId:pe="",insurerCode:fe="",extraInfo:me,preview:ve}=se.query;let he={};try{he=JSON.parse(decodeURIComponent(me))}catch(ze){console.log(ze)}const{openId:be,indirectCode:ye="",agentCode:Ae}=he;console.log("extInfo",he);const ge=t(),we=t(),Ie=t(),_e=a({tenantProductDetail:{},insureProductDetail:{},submitData:{},riskVOList:[{}],userData:{},ifPersonalInfoSuccess:!1,currentRiskInfo:[],mainRiskInfo:{},currentPackageConfigVOList:[],planList:[],colors:["#fff"],detail:{},order:{tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}},banner:"",productDesc:[],newAuth:!0,isValidateCode:!1,insureDetail:{},loading:!0,isSelfInsure:!0,showBtn:!1,activeIndex:0,showFilePreview:!1,isOnlyView:!0}),Oe=t({}),ke=ae({extInfo:{buttonCode:"EVENT_FREE_multiIssuePolicy",pageCode:"infoCollection",extraInfo:he,templateId:(null==he?void 0:he.templateId)||"1",iseeBizNo:""}}),xe=t(),Ce=t({}),Ve=t([]),De=t(),{fileList:Le,mustReadFileCount:Pe,popupFileList:Fe}=te(Ce,De),Re=t({imgUrl:"",desc:"",title:"",link:window.location.href}),je=g((()=>!!ve)),Se=S((async()=>{if(console.log(">>>>>调用试算<<<<<"),_e.ifPersonalInfoSuccess){_e.submitData.productCode=ne,_e.submitData.tenantId=pe,console.log([..._e.currentRiskInfo],"slslslwwp--1--190199"),_e.riskVOList=(()=>{const{chargePeriod:e,coveragePeriod:t,paymentFrequency:a,insuranceEndDate:s,insuranceStartDate:n}=Oe.value;return console.log("ssinit===++guaranteeObj.value",Oe.value),W([..._e.currentRiskInfo]).map((s=>({...s,paymentFrequency:a,chargePeriod:e,coveragePeriod:t})))})(),console.log(_e.riskVOList,"state.riskVOList----2222223333"),_e.submitData.insuredVOList&&_e.submitData.insuredVOList.forEach((e=>{e.productPlanVOList=[{insurerCode:fe,planCode:Ce.value.planCode,riskVOList:_e.riskVOList}]})),console.log(">>>数据构建<<<",_e.submitData);const e=N(_e.submitData);console.log(e,"submitDataCopy===")}}),300),Ne=async e=>{console.log(e,"slsllw--2020");const{holder:t,insuredVOList:a,isFirstInsuredChange:s}=e;t&&(_e.submitData.holder=t),a&&a.length>0&&a.forEach(((e,t)=>{var a;_e.submitData.insuredVOList&&_e.submitData.insuredVOList.length>t?_e.submitData.insuredVOList[t].personVO={...e.personVO,socialFlag:e.personVO.hasSocialInsurance}:((null==(a=_e.submitData)?void 0:a.insuredVOList)||(_e.submitData.insuredVOList=[]),_e.submitData.insuredVOList.push({personVO:{...e.personVO,socialFlag:e.personVO.hasSocialInsurance}}))})),_e.ifPersonalInfoSuccess=!0,Se()},Te=async()=>{_e.loading=!0;const e=T({productCode:ne,tenantId:pe}),t=E({productCode:ne,isTenant:!ve});await Promise.all([e,t]).then((([e,t])=>{var a,s,n;if("10000"===e.code){_e.tenantProductDetail=e.data,document.title=e.data.BASIC_INFO.title||"";const{title:t,desc:s,image:o}=(null==(a=e.data)?void 0:a.PRODUCT_LIST.wxShareConfig)||{};n={title:t,desc:s,image:o},Re.value={desc:n.desc||"你好，这里是描述",imgUrl:n.image,title:n.title,link:window.location.href},console.log("shareInfo",Re.value)}"10000"===t.code&&(_e.insureProductDetail=t.data,Ce.value=null==(s=t.data.productPlanInsureVOList)?void 0:s[0],_e.planList=(t.data.productPlanInsureVOList||[]).filter((e=>e.planCode)).map((e=>({planName:e.planName,planCode:e.planCode})))),B({productCode:ne}).then((({code:e,data:t})=>{var a,s,n,o;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:i}=t;De.value=e||[];const{basicInfo:{questionnaireType:l},questions:r,questionnaireName:d}=(null==(a=null==i?void 0:i[0])?void 0:a.questionnaireDetailResponseVO)||{basicInfo:{}};l&&(Ve.value=2===l?[{attachmentName:d,attachmentUri:r,attachmentType:"question"}]:[{attachmentName:d,attachmentUri:null==(s=null==r?void 0:r[0])?void 0:s.content,attachmentType:Y(String(null==(n=null==r?void 0:r[0])?void 0:n.textType),null==(o=null==r?void 0:r[0])?void 0:o.content)}])}})),_e.loading=!1}))};s((()=>Ce.value),(()=>{const{oilPackageProductVOList:e,planCode:t,insureProductRiskVOList:a}=Ce.value;Oe.value.planCode=t,_e.currentRiskInfo=a,_e.mainRiskInfo=(a||[]).find((e=>e.mainRiskFlag===w.YES)),console.log("mainRiskInfo.value",_e.mainRiskInfo)}),{deep:!0,immediate:!0});const Be=async()=>{if(je.value&&_e.newAuth)_e.newAuth=!1;else if(!je.value||_e.newAuth)try{if(_e.newAuth)if(je.value)_e.newAuth=!1;else{const e={loginType:"2",openId:be,thirdUserType:"XINAO_WECHAT",indirectCode:ye,loginName:_e.order.tenantOrderHolder.mobile,password:_e.order.tenantOrderHolder.verificationCode},{code:t,data:a}=await H(e);"10000"===t&&(_e.newAuth=!1)}else xe.value.validate().then((async e=>{var t;if(console.log(ke.value,"skskks===++++",_e.submitData),_e.ifPersonalInfoSuccess&&"10000"===e.code){const e=((e={},t={},a={})=>{var s;const n={...a};console.log("nextStepParams",n);const{tenantOrderHolder:o,tenantOrderInsuredList:i}=X({holder:null==(s=_e.submitData.holder)?void 0:s.personVO,insuredList:(_e.submitData.insuredVOList||[]).map((e=>e.personVO))});console.log("state.submitData",_e.submitData),console.log("tenantOrderHolder",o),console.log("tenantOrderInsuredList",i);const l=_e.submitData.insuredVOList.map((e=>{var t,a;return null==(a=null==(t=e.productPlanVOList)?void 0:t[0])?void 0:a.riskVOList})).flat();console.log("riskList",l);const r={tenantId:pe,riskList:l,riskPremium:t,productId:null==e?void 0:e.id};return n.extInfo.iseeBizNo=ge.value,n.productCode=null==e?void 0:e.productCode,n.commencementTime=n.insuranceStartDate,n.expiryDate=n.insuranceEndDate,n.premium=0,n.orderAmount=0,n.orderRealAmount=0,n.tenantOrderHolder=o,n.tenantOrderInsuredList=i.map((t=>{var a;return{...t,certType:t.certType||j.CERT,certNo:(t.certNo||"").toLocaleUpperCase(),planCode:Ce.value.planCode,tenantOrderProductList:[{premium:0,productCode:null==e?void 0:e.productCode,productName:null==e?void 0:e.productName,planCode:null==(a=Ce.value)?void 0:a.planCode,tenantOrderRiskList:q(r)}]}})),console.log("nextStepParams",n),n})({insurerCode:fe,productCode:ne,productId:"",productName:(null==(t=_e.insureProductDetail)?void 0:t.productName)||"",tenantId:pe},{},ke.value);G(e,((e,t)=>{t===R.JUMP_PAGE&&e.orderNo&&K.push(`/baseInsurance/orderDetail?from=free&tenantId=${pe}&orderNo=${e.orderNo}`)}))}})).catch((e=>{console.log(e,"表单验证失败");const t=document.querySelector(".com-card-wrap");t&&t.scrollIntoView()}))}catch(e){console.log("e")}else K.push(`/baseInsurance/orderDetail?from=free&tenantId=${pe}&orderNo=mockOrderNo&productCode=${ne}&preview=true&templateView=${null==he?void 0:he.templateId}`)},Ee=async()=>await(async()=>{var e,t;if(je.value)return!0;let a="",s="";if(_e.newAuth)await Ie.value.validateForm(),a=null==(e=_e.order.tenantOrderHolder)?void 0:e.verificationCode,s=_e.order.tenantOrderHolder.mobile;else{const{mobile:e,verificationCode:n=""}=(null==(t=_e.submitData.holder)?void 0:t.personVO)||{};a=n,s=e}if((_e.isValidateCode||_e.newAuth)&&(!a||!Z(a)))return F({message:"请输入正确的验证码"}),!1;if(_e.newAuth||!_e.isValidateCode)return!0;const{code:n,data:o}=await z(s,a);return!!o})()?(_e.newAuth?Be():Fe.value.length>0?(_e.isOnlyView=!1,_e.showFilePreview=!0):Be(),!1):null,He=()=>{_e.showFilePreview=!1,_e.isOnlyView=!0},Me=()=>{_e.showFilePreview=!1,_e.isOnlyView=!0,Be()};I((()=>{Te(),setTimeout((async()=>{ge.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)}));const Je=_(we);return O(we,(([{isIntersecting:e}],t)=>{(e=>{Je.bottom.value<0||Je.top.value<0?_e.showBtn=!e:_e.showBtn=!1})(e)})),(e,t)=>{var a,s,v,h,b,y;const A=L,g=k,w=m,I=P;return n(),o(C,null,[c(_e).loading?(n(),o("div",le,re)):(n(),o("div",{key:1,"data-skeleton-root":"FREE","theme-vars":c(J),class:"page-free-product-detail"},[1==(null==(s=null==(a=c(_e).tenantProductDetail)?void 0:a.BASIC_INFO)?void 0:s.bannerType)&&(null==(h=null==(v=c(_e).tenantProductDetail)?void 0:v.BASIC_INFO)?void 0:h.banner.length)?(n(),d(Q,{key:0,"data-skeleton-type":"img","indicator-color":"#ddd",images:null==(b=c(_e).tenantProductDetail)?void 0:b.BASIC_INFO.banner},null,8,["images"])):u("",!0),l(ie,{ref_key:"formRef",ref:Ie,"is-first":c(_e).newAuth,"insure-detail":c(_e).insureDetail,detail:c(_e).order,colors:c(_e).colors,"preview-mode":c(je)},{default:x((()=>{var e,a;return[c(_e).newAuth?u("",!0):(n(),d(c(U),{key:0,ref_key:"personalInfoRef",ref:xe,modelValue:c(_e).userData,"onUpdate:modelValue":t[0]||(t[0]=e=>c(_e).userData=e),"product-factor":null==(e=c(Ce))?void 0:e.productFactor,"multi-insured-config":null==(a=c(Ce))?void 0:a.multiInsuredConfigVO,onTrailChange:Ne},null,8,["modelValue","product-factor","multi-insured-config"])),l($,{ref_key:"root",ref:we,class:f({"submit-btn":!0,"is-first":!c(_e).newAuth}),"is-gradient":!1,text:c(_e).newAuth?"立即领取":"激活保障",onClick:Ee},null,8,["class","text"]),l(A,null,{default:x((()=>{var e;return[(null==(e=c(Le))?void 0:e.length)?(n(),d(c(p),{key:0,"attachment-list":c(Le),"has-bg-color":!1,"pre-text":"请阅读",onPreviewFile:t[1]||(t[1]=e=>(e=>{_e.isOnlyView=!0,_e.activeIndex=e,_e.showFilePreview=!0})(e))},null,8,["attachment-list"])):u("",!0)]})),_:1})]})),_:1},8,["is-first","insure-detail","detail","colors","preview-mode"]),i("div",ce,[(n(!0),o(C,null,V((null==(y=c(_e).tenantProductDetail.SPECIAL_FEATURE)?void 0:y.spec)||[],((e,t)=>(n(),d(D,{key:t},{fallback:x((()=>[l(w,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:x((()=>[(n(),d(g,{key:t,class:"detail-img",width:"100%",src:e},null,8,["src"]))])),_:2},1024)))),128))]),l(I),l(A,null,{default:x((()=>{var e,t,a;return[(null==(e=c(_e).tenantProductDetail.SIGNATURE)?void 0:e.inscribedContent)?(n(),d(c(r),{key:0,"inscribed-content":null==(a=null==(t=c(_e).tenantProductDetail)?void 0:t.SIGNATURE)?void 0:a.inscribedContent},null,8,["inscribed-content"])):u("",!0)]})),_:1}),c(_e).showBtn?(n(),o("footer",ue,[l($,{"is-gradient":!1,text:c(_e).newAuth?"立即领取":"激活保障",onClick:Ee},null,8,["text"])])):u("",!0)],8,de)),c(_e).showFilePreview?(n(),d(c(M),{key:2,show:c(_e).showFilePreview,"onUpdate:show":t[2]||(t[2]=e=>c(_e).showFilePreview=e),"content-list":c(_e).isOnlyView?c(Le):c(Fe),"is-only-view":c(_e).isOnlyView,"active-index":c(_e).activeIndex,text:c(_e).isOnlyView?"关闭":"我已逐页阅读上述内容并同意","force-read-count":c(_e).isOnlyView?0:c(Pe),onSubmit:Me,onOnCloseFilePreviewByMask:He},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):u("",!0),c(_e).loading?u("",!0):(n(),d(ee,{key:3,"product-detail":c(_e).tenantProductDetail},null,8,["product-detail"]))],64)}}});export{pe as default};
