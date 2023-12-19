import{d as e,r as a,j as l,E as n,o as t,p as i,u as s,bv as o,ab as d,_ as c,af as r,ag as v,dd as u,h as p,i as f,ad as _,ap as m,dC as b,k as h,bH as g,ah as y,l as x,dD as w,ai as k,c as I,a as C,f as P,F as j,s as O,b as V,q as N,n as D,w as T,dE as F,ch as R,dF as L,bW as A,dG as E,aN as S,aQ as q,c8 as B,I as U,dH as z,ao as $,al as G,an as H,aC as M,aD as X,au as Y}from"./index-282e95dd.js";import{a as J,c as Q}from"./product-47b42f4e.js";import{i as W,s as Z,g as K}from"./trial-cb6dee49.js";import{P as ee}from"./index-261a727d.js";import{n as ae}from"./nextStep-b8f9d79b.js";import{g as le,t as ne,r as te}from"./utils-b388d5c2.js";import ie from"./index-ea65e177.js";import{P as se}from"./index-43b400fc.js";import oe from"./index-2aacf018.js";import{u as de}from"./useAttachment-1037e3bd.js";import{u as ce}from"./useOrder-018a9d30.js";import"./PolicyInfo-fa798934.js";import{P as re}from"./constants-b39aa53b.js";import"./cloneDeep-2f072f71.js";import"./infoCollection-ca1bf8b9.js";import"./questionnaire-42dcb602.js";import"./util-be83aaa2.js";import"./core-c9efec7d.js";import"./trial-448a4f37.js";import"./useThread-637a02aa.js";import"./jsbridgePromise-1a7f0ae2.js";const ve=e({name:"policyInfo"}),ue=e({...ve,props:{schema:{default:()=>[]},config:{default:()=>[]},modelValue:{default:()=>{}},isView:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{expose:d,emit:c}){const r=e,v=a({schema:{},modelValue:{},config:{}}),u=l();return n([()=>r.schema,()=>r.config],(()=>{v.schema=r.schema,v.config=r.config}),{deep:!0,immediate:!0}),n((()=>r.modelValue),((e,a)=>{e!==a&&Object.assign(v.modelValue,e)}),{deep:!0,immediate:!0}),n((()=>v.modelValue),(e=>{c("update:modelValue",e)}),{deep:!0,immediate:!0}),d({validate:()=>{var e;return null==(e=u.value)?void 0:e.validate()}}),(e,a)=>(t(),i(s(o),{ref_key:"agentInfoFormRef",ref:u,class:"agent",schema:s(v).schema,model:s(v).modelValue,config:s(v).config,title:"代理人信息","is-view":e.isView},null,8,["schema","model","config","is-view"]))}});const pe=e=>(M("data-v-1bc7219c"),e=e(),X(),e),fe={key:0},_e={class:"__skeleton_free5_content__"},me={"theme-vars":"[object Object]",class:"page-free-product-detail sk"},be={class:"content"},he=pe((()=>C("div",{class:"van-tabs van-tabs--line pro-tab custom-plan-tab"},[C("div",{class:"van-tabs__wrap"},[C("div",{role:"tablist",class:"van-tabs__nav van-tabs__nav--line van-tabs__nav--complete","aria-orientation":"horizontal"},[C("div",{id:"van-tabs-1-0",role:"tab",class:"van-tab van-tab--line van-tab--grow van-tab--active",tabindex:"0","aria-selected":"true","aria-controls":"van-tab-2"},[C("span",{class:"van-tab__text"},[C("span",{class:"sk-text",style:{"--fp":"10.00%","--sp":"90.00%","--lh":"20px"}},"计划一")])]),C("div",{id:"van-tabs-1-1",role:"tab",class:"van-tab van-tab--line van-tab--grow",tabindex:"-1","aria-selected":"false","aria-controls":"van-tab-3"},[C("span",{class:"van-tab__text"},[C("span",{class:"sk-text",style:{"--fp":"10.00%","--sp":"90.00%","--lh":"20px"}},"计划二")])]),C("div",{class:"van-tabs__line",style:{width:"28px",transform:"translateX(90.5px) translateX(-50%)",height:"4px","border-radius":"4px"}})])]),C("div",{class:"van-tabs__content"},[C("div",{id:"van-tab-2",role:"tabpanel",class:"van-tab__panel",tabindex:"0","aria-labelledby":"van-tabs-1-0",style:{}})])],-1))),ge={class:"part"},ye={class:"part-header holder-header"},xe={class:"svg-icon icon-free-arrow","font-size":"40px",style:{color:"var(--van-primary-color)"}},we=[pe((()=>C("use",{"xlink:href":"#icon-free-arrow"},null,-1)))],ke=pe((()=>C("div",{class:"header"},[C("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"22.400139999999997px"}},"免费领取")],-1))),Ie={class:"svg-icon icon-free-arrow","font-size":"40px",style:{color:"var(--van-primary-color)"}},Ce=[pe((()=>C("use",{"xlink:href":"#icon-free-arrow"},null,-1)))],Pe={class:"com-card com-pro-form-with-card com-card-body-no-padding personal-info-card holder"},je={class:"com-card-wrap"},Oe={class:"body",style:{height:"auto"}},Ve={class:"van-form com-van-form"},Ne={class:"van-cell van-field com-van-field",textalign:"right",customfieldname:"[object Object]",remark:"",componentname:"[object Object]",nanoid:"Bc0wjU19UwIhyiefbs4zE",columns:""},De=pe((()=>C("div",{class:"van-cell__title van-field__label van-field__label--required"},[C("label",{id:"van-field-4-label",for:"van-field-4-input"},[C("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"姓名")])],-1))),Te={class:"van-cell__value van-field__value"},Fe={class:"van-field__body"},Re=pe((()=>C("input",{type:"text",id:"van-field-4-input",name:"name",class:"van-field__control van-field__control--left sk-input",placeholder:"请输入姓名",autocomplete:"off","aria-labelledby":"van-field-4-label"},null,-1))),Le={class:"van-field__right-icon"},Ae={class:"choose-customer"},Ee={class:"svg-icon icon-customer",style:{color:"rgb(51, 51, 51)"}},Se=[pe((()=>C("use",{"xlink:href":"#icon-customer"},null,-1)))],qe=pe((()=>C("div",{class:"van-cell van-cell--clickable van-field com-van-field com-form-item",role:"button",tabindex:"0",textalign:"right"},[C("div",{class:"van-cell__title van-field__label van-field__label--required"},[C("label",{id:"van-field-5-label",for:"van-field-5-input"},[C("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"证件类型")])]),C("div",{class:"van-cell__value van-field__value"},[C("div",{class:"van-field__body"},[C("div",{class:"van-field__control van-field__control--left van-field__control--custom"},[C("div",{class:"custom-input-wrap"},[C("span",{class:"value-view-wrap",style:{}},[C("span",{class:"sk-text",style:{"--fp":"18.75%","--sp":"81.25%","--lh":"24px"}},"居民身份证")])])])])]),C("i",{class:"van-badge__wrapper van-icon van-icon-arrow van-cell__right-icon"})],-1))),Be=pe((()=>C("div",{class:"van-cell van-field com-van-field",textalign:"right",customfieldname:"[object Object]",remark:"",componentname:"[object Object]",nanoid:"cYX6njpk9PbIdM0Cc1uko",columns:""},[C("div",{class:"van-cell__title van-field__label van-field__label--required"},[C("label",{id:"van-field-6-label",for:"van-field-6-input"},[C("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"证件号码")])]),C("div",{class:"van-cell__value van-field__value"},[C("div",{class:"van-field__body"},[C("input",{type:"text",id:"van-field-6-input",name:"certNo",class:"van-field__control van-field__control--left sk-input",placeholder:"请输入证件号码",autocomplete:"off","aria-labelledby":"van-field-6-label"})])])],-1))),Ue=pe((()=>C("div",{class:"van-cell van-field com-van-field",textalign:"right",customfieldname:"[object Object]",remark:"",componentname:"[object Object]",nanoid:"f80BClgG7He6ZF8gYqnf0",columns:""},[C("div",{class:"van-cell__title van-field__label van-field__label--required"},[C("label",{id:"van-field-7-label",for:"van-field-7-input"},[C("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"手机号")])]),C("div",{class:"van-cell__value van-field__value"},[C("div",{class:"van-field__body"},[C("input",{type:"tel",inputmode:"numeric",id:"van-field-7-input",name:"mobile",class:"van-field__control van-field__control--left",placeholder:"请输入手机号",autocomplete:"off","aria-labelledby":"van-field-7-label"})])])],-1))),ze=pe((()=>C("div",{class:"van-cell van-field com-van-field com-pro-sms-code",textalign:"right",customfieldname:"[object Object]",remark:"",componentname:"[object Object]",nanoid:"f6uaPlar0trUqrkDscy4s",columns:""},[C("div",{class:"van-cell__title van-field__label van-field__label--required"},[C("label",{id:"van-field-8-label",for:"van-field-8-input"},[C("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"验证码")])]),C("div",{class:"van-cell__value van-field__value"},[C("div",{class:"van-field__body"},[C("input",{type:"tel",inputmode:"numeric",id:"van-field-8-input",name:"verificationCode",class:"van-field__control van-field__control--left",placeholder:"请输入验证码",autocomplete:"off","aria-labelledby":"van-field-8-label"})])]),C("button",{type:"button",class:"van-button van-button--primary van-button--small van-button--plain extra-button sk-button"},[C("div",{class:"van-button__content"},[C("span",{class:"van-button__text"},[C("span",{class:"sk-text",style:{"--fp":"8.33%","--sp":"91.67%","--lh":"16.8px"}},"验证码")])])])],-1))),$e=pe((()=>C("div",{class:"van-cell van-cell--clickable van-field com-van-field com-form-item com-van-field--hidden",role:"button",tabindex:"0",textalign:"right"},[C("div",{class:"van-cell__value van-cell__value--alone van-field__value"},[C("div",{class:"van-field__body"},[C("div",{class:"van-field__control van-field__control--left van-field__control--custom"},[C("div",{class:"custom-input-wrap"},[C("span",{class:"placeholder"})])])])]),C("i",{class:"van-badge__wrapper van-icon van-icon-arrow van-cell__right-icon"})],-1))),Ge=pe((()=>C("div",{class:"van-cell van-cell--clickable van-field com-van-field com-form-item",role:"button",tabindex:"0",textalign:"right"},[C("div",{class:"van-cell__title van-field__label van-field__label--required"},[C("label",{id:"van-field-10-label",for:"van-field-10-input"},[C("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"投保地区")])]),C("div",{class:"van-cell__value van-field__value"},[C("div",{class:"van-field__body"},[C("div",{class:"van-field__control van-field__control--left van-field__control--custom"},[C("div",{class:"custom-input-wrap"},[C("span",{class:"placeholder"},[C("span",{class:"sk-text",style:{"--fp":"18.75%","--sp":"81.25%","--lh":"24px"}},"请选择投保地区")])])])])]),C("i",{class:"van-badge__wrapper van-icon van-icon-arrow van-cell__right-icon"})],-1))),He=pe((()=>C("div",{class:"van-cell van-cell--clickable van-field com-van-field com-van-field--hidden com-form-item com-van-field--hidden undefined",role:"button",tabindex:"0",textalign:"right",visible:"false"},[C("div",{class:"van-cell__title van-field__label van-field__label--required"},[C("label",{id:"van-field-11-label",for:"van-field-11-input"},[C("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"出生日期")])]),C("div",{class:"van-cell__value van-field__value"},[C("div",{class:"van-field__body"},[C("div",{class:"van-field__control van-field__control--left van-field__control--custom"},[C("div",{class:"custom-input-wrap"},[C("span",{class:"placeholder"},[C("span",{class:"sk-text",style:{"--fp":"18.75%","--sp":"81.25%","--lh":"24px"}},"请选择出生日期")])])])])]),C("i",{class:"van-badge__wrapper van-icon van-icon-arrow van-cell__right-icon"})],-1))),Me=pe((()=>C("div",{class:"van-cell van-cell--clickable van-field com-van-field com-van-field--hidden com-form-item com-van-field--hidden",role:"button",tabindex:"0",textalign:"right",visible:"false"},[C("div",{class:"van-cell__title van-field__label van-field__label--required"},[C("label",{id:"van-field-12-label",for:"van-field-12-input"},[C("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"性别")])]),C("div",{class:"van-cell__value van-field__value"},[C("div",{class:"van-field__body"},[C("div",{class:"van-field__control van-field__control--left van-field__control--custom"},[C("div",{class:"custom-input-wrap"},[C("span",{class:"placeholder"},[C("span",{class:"sk-text",style:{"--fp":"18.75%","--sp":"81.25%","--lh":"24px"}},"请选择性别")])])])])]),C("i",{class:"van-badge__wrapper van-icon van-icon-arrow van-cell__right-icon"})],-1))),Xe=pe((()=>C("div",{class:"van-cell van-cell--clickable van-field com-van-field com-form-item undefined",role:"button",tabindex:"0",textalign:"right"},[C("div",{class:"van-cell__title van-field__label"},[C("label",{id:"van-field-13-label",for:"van-field-13-input"},[C("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"证件有效期")])]),C("div",{class:"van-cell__value van-field__value"},[C("div",{class:"van-field__body"},[C("div",{class:"van-field__control van-field__control--left van-field__control--custom"},[C("div",{class:"custom-input-wrap"},[C("span",{class:"placeholder"},[C("span",{class:"sk-text",style:{"--fp":"18.75%","--sp":"81.25%","--lh":"24px"}},"请选择证件有效期")])])])])]),C("i",{class:"van-badge__wrapper van-icon van-icon-arrow van-cell__right-icon"}),C("div",{class:"wrap"},[C("div",{role:"checkbox",class:"van-checkbox",tabindex:"0","aria-checked":"false"},[C("div",{class:"van-checkbox__icon van-checkbox__icon--round"},[C("i",{class:"van-badge__wrapper van-icon van-icon-success sk-border"})]),C("span",{class:"van-checkbox__label"},[C("span",{class:"sk-text",style:{"--fp":"12.50%","--sp":"87.50%","--lh":"20px"}},"长期")])])])],-1))),Ye=pe((()=>C("div",{class:"van-cell van-cell--clickable van-field com-van-field com-form-item undefined",role:"button",tabindex:"0",textalign:"right"},[C("div",{class:"van-cell__title van-field__label"},[C("label",{id:"van-field-14-label",for:"van-field-14-input"},[C("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"证件起期")])]),C("div",{class:"van-cell__value van-field__value"},[C("div",{class:"van-field__body"},[C("div",{class:"van-field__control van-field__control--left van-field__control--custom"},[C("div",{class:"custom-input-wrap"},[C("span",{class:"placeholder"},[C("span",{class:"sk-text",style:{"--fp":"18.75%","--sp":"81.25%","--lh":"24px"}},"请选择证件起期")])])])])]),C("i",{class:"van-badge__wrapper van-icon van-icon-arrow van-cell__right-icon"})],-1))),Je=F('<div class="com-card com-pro-form-with-card com-card-body-no-padding personal-info-card insured" data-v-1bc7219c><div class="com-card-wrap" data-v-1bc7219c><div class="header showLine" data-v-1bc7219c><div class="title-wrapper" data-v-1bc7219c><div class="title showIcon" data-v-1bc7219c><span class="sk-text" style="--fp:33.33%;--sp:66.67%;--lh:45px;" data-v-1bc7219c>被保人信息</span></div></div></div></div></div>',1),Qe=["theme-vars"],We={class:"content"},Ze={key:1,class:"part"},Ke=pe((()=>C("div",{class:"part-header agent-header"},[C("span",{class:"header"},"代理人信息")],-1))),ea={class:"part"},aa={class:"part-header holder-header"},la=pe((()=>C("div",{class:"header"},"免费领取",-1))),na=pe((()=>C("p",{class:"page-tip"},"同一被保险人仅限领取1份",-1)));var ta=c(e({__name:"index",setup(e){const o=r((()=>v((()=>import("./index-234ee5de.js")),["static/js/index-234ee5de.js","static/css/index-eabeb59f.css","static/js/index-282e95dd.js","static/css/index-839a5189.css"]))),c=r((()=>v((()=>import("./index-10ec7602.js")),["static/js/index-10ec7602.js","static/css/index-bf024e9b.css","static/js/index-282e95dd.js","static/css/index-839a5189.css"]))),F=r((()=>v((()=>import("./index-ae47e438.js")),["static/js/index-ae47e438.js","static/css/index-fa4edf2a.css","static/js/index-282e95dd.js","static/css/index-839a5189.css","static/js/theme-94cf7d00.js","static/js/index-43b400fc.js","static/css/index-bbfdd7ec.css","static/js/utils-b388d5c2.js","static/js/infoCollection-ca1bf8b9.js","static/js/trial-448a4f37.js"]))),M=u(),X=p(),ve=f(),{productCode:pe="",agentCode:ta="",tenantId:ia="",templateId:sa,insurerCode:oa="",orderNo:da,preview:ca,isShare:ra}=ve.query,{agentCode:va}=_.get(`${m}_userInfo`)||{},ua=l(),pa=l();l();const fa=l(),_a=l({}),ma=a({tenantProductDetail:{},insureProductDetail:{},submitData:{},riskVOList:[{}],userData:{},ifPersonalInfoSuccess:!1,currentRiskInfo:[],mainRiskInfo:{},currentPackageConfigVOList:[],planList:[],colors:["#fff"],detail:{},banner:"",productDesc:[],newAuth:!0,isValidateCode:!1,insureDetail:{},loading:!0,isSelfInsure:!0,showBtn:!1,activeIndex:0,showFilePreview:!1,isOnlyView:!0}),ba=l({}),ha=ce({extInfo:{buttonCode:"EVENT_FREE_multiIssuePolicy",pageCode:"productInfo",templateId:sa,iseeBizNo:""},period_type:b.free}),ga=l(),ya=l(),xa=l({}),wa=l([]),ka=l(),{fileList:Ia,mustReadFileCount:Ca,popupFileList:Pa}=de(xa,ka);l({imgUrl:"",desc:"",title:"",link:""});const ja=h((()=>!!ca)),Oa=async()=>{ma.loading=!0;const e=J({productCode:pe}),a=W({productCode:pe,isTenant:!ca});await Promise.all([e,a]).then((([e,a])=>{var l;"10000"===e.code&&(ma.tenantProductDetail=e.data,document.title=e.data.BASIC_INFO.title||"",e.data.BASIC_INFO&&e.data.BASIC_INFO.themeType&&R(e.data.BASIC_INFO.themeType)),"10000"===a.code&&(ma.insureProductDetail=a.data,xa.value=null==(l=a.data.productPlanInsureVOList)?void 0:l[0],ma.planList=(a.data.productPlanInsureVOList||[]).filter((e=>e.planCode)).map((e=>({planName:e.planName,planCode:e.planCode})))),Q({productCode:pe}).then((({code:e,data:a})=>{var l,n,t,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:s}=a;ka.value=e||[];const{basicInfo:{questionnaireType:o},questions:d,questionnaireName:c}=(null==(l=null==s?void 0:s[0])?void 0:l.questionnaireDetailResponseVO)||{basicInfo:{}};o&&(wa.value=2===o?[{attachmentName:c,attachmentUri:d,attachmentType:"question"}]:[{attachmentName:c,attachmentUri:null==(n=null==d?void 0:d[0])?void 0:n.content,attachmentType:le(String(null==(t=null==d?void 0:d[0])?void 0:t.textType),null==(i=null==d?void 0:d[0])?void 0:i.content)}])}})),ma.loading=!1}))},Va=l();l(!1);const Na=e=>{var a;xa.value=null==(a=ma.insureProductDetail.productPlanInsureVOList)?void 0:a[e.name]};n((()=>xa.value),(()=>{var e,a;const{planCode:l,insureProductRiskVOList:n,productFactor:t}=xa.value;ba.value.planCode=l,Va.value=null==(a=null==(e=g(t))?void 0:e.agent)?void 0:a.schema,ma.currentRiskInfo=n,ma.mainRiskInfo=(n||[]).find((e=>e.mainRiskFlag===y.YES)),console.log("mainRiskInfo.value",ma.mainRiskInfo)}),{deep:!0,immediate:!0});const Da=(e={},a={},l={})=>{const n={...l},{insuredList:t,holder:i}=l,s=te([...ma.currentRiskInfo]).map((e=>({...e}))),o={tenantId:ia,riskList:s,riskPremium:a,productId:null==e?void 0:e.id};return n.extInfo.iseeBizNo=ua.value,n.productCode=null==e?void 0:e.productCode,n.commencementTime=n.insuranceStartDate,n.expiryDate=n.insuranceEndDate,n.premium=0,n.orderAmount=0,n.orderRealAmount=0,n.insuredList=t.map((a=>{var l;return{...a,nationalityCode:"CHN",certType:a.certType||Y.CERT,certNo:(a.certNo||"").toLocaleUpperCase(),planCode:xa.value.planCode,productList:[{premium:0,productCode:null==e?void 0:e.productCode,productName:null==e?void 0:e.productName,planCode:null==(l=xa.value)?void 0:l.planCode,riskList:ne(o)}]}})),n.holder.nationalityCode="CHN",console.log("nextStepParams",n),n},Ta=l(),Fa=async()=>{var e,a;const l={insurerCode:oa,productCode:pe,productId:"",productName:(null==(e=ma.insureProductDetail)?void 0:e.productName)||"",tenantId:ia},n=Da(l,{},Object.assign(ha.value,ma.userData));if(ja.value)X.push(`/baseInsurance/orderDetail?from=free&tenantId=${ia}&orderNo=mockOrderNo&productCode=${pe}&preview=true&templateView=${sa}`);else try{if(ra)n.extInfo.buttonCode=E.free.underWriteAndIssue,Promise.all([null==(a=ga.value)?void 0:a.validate(),ya.value.validate()]).then((e=>{ta===Ta.value.agentCode?ae(n,((e,a,l)=>{a===q.JUMP_PAGE&&e.orderNo?X.push({path:re.paymentResult,query:{tenantId:ia,from:"free",orderNo:da}}):a===q.JUMP_ALERT&&"faceAuth"===e.alertType&&S.confirm({message:l,confirmButtonText:"去分享",cancelButtonText:"被保人确认"}).then((()=>{const e={...ve.query,isShare:1,orderNo:da,agentCode:va,objectType:"insured",origin:"share"};_a.value.link=`${window.location.origin}?${A.stringify(e)}`,fa.value.handleShare(_a.value),fa.value.handleShare()})).catch((()=>{X.push({path:re.faceVerify,query:{...ve.query,objectType:"insured",origin:"confirm"}})}))})):S.alert({message:"代理人工号有误，请核对后重新录入",confirmButtonText:"我知道了"})})).catch((e=>{B(".page-free-product-detail",".van-field--error")}));else{const{code:e,data:a}=await Z(n);if("10000"===e){const e={...ve.query,isShare:1,orderNo:a,agentCode:va};_a.value={title:"标题",desc:"描述",imageUrl:L,link:`${window.location.origin}?${A.stringify(e)}`,url:`${window.location.origin}?${A.stringify(e)}`},fa.value.handleShare(_a.value)}}}catch(t){console.log("e")}},Ra=()=>{ma.showFilePreview=!1,ma.isOnlyView=!0},La=()=>{ma.showFilePreview=!1,ma.isOnlyView=!0,Fa()},Aa=()=>{var e;(e={tenantId:ia,saleUserId:ta},d({url:"/api/app/policy/agent/query",method:"POST",data:e})).then((({code:e,data:a})=>{"10000"===e&&(Ta.value={...a,agentCode:""})}))};x((()=>{da&&K({orderNo:da,tenantId:ia}).then((({code:e,data:a})=>{console.log("code",e),"10000"===e&&(Object.assign(ha.value,a),ma.userData=a)})),ta&&Aa(),Oa(),setTimeout((async()=>{ua.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)}));const Ea=w(pa);return k(pa,(([{isIntersecting:e}],a)=>{(e=>{Ea.bottom.value<0||Ea.top.value<0?ma.showBtn=!e:ma.showBtn=!1})(e)})),(e,a)=>{var l,n,d,r,v,u,p,f,_,m;const b=U,h=z,g=$,y=G,x=H;return t(),I(j,null,[s(ma).loading?(t(),I("div",fe,[C("div",_e,[C("div",me,[C("div",be,[he,C("div",ge,[C("div",ye,[(t(),I("svg",xe,we)),ke,(t(),I("svg",Ie,Ce))]),C("div",Pe,[C("div",je,[C("div",Oe,[C("form",Ve,[C("div",Ne,[De,C("div",Te,[C("div",Fe,[Re,C("div",Le,[C("div",Ae,[(t(),I("svg",Ee,Se))])])])])]),qe,Be,Ue,ze,$e,Ge,He,Me,Xe,Ye])])])]),Je])])])])])):(t(),I("div",{key:1,"data-skeleton-root":"FREE5","theme-vars":s(M),class:"page-free-product-detail"},[1==(null==(n=null==(l=s(ma).tenantProductDetail)?void 0:l.BASIC_INFO)?void 0:n.bannerType)&&(null==(r=null==(d=s(ma).tenantProductDetail)?void 0:d.BASIC_INFO)?void 0:r.banner.length)?(t(),i(ie,{key:0,"data-skeleton-type":"img","indicator-color":"#ddd",images:null==(v=s(ma).tenantProductDetail)?void 0:v.BASIC_INFO.banner},null,8,["images"])):P("",!0),C("div",We,[(t(!0),I(j,null,O(null==(p=null==(u=s(ma).tenantProductDetail)?void 0:u.SPECIAL_FEATURE)?void 0:p.spec,((e,a)=>(t(),I("div",{key:a,class:"part image-part"},[V(b,{src:e},null,8,["src"])])))),128)),(null==(f=s(ma).planList)?void 0:f.length)>1?(t(),i(h,{key:0,active:e.currentActivePlanCodeIndex,"onUpdate:active":a[0]||(a[0]=a=>e.currentActivePlanCodeIndex=a),list:s(ma).planList.map(((e,a)=>({title:e.planName,slotName:e.planName}))),class:"custom-plan-tab",onClickTab:Na},null,8,["active","list"])):P("",!0),s(ra)?(t(),I("div",Ze,[Ke,V(ue,{ref_key:"agentRef",ref:ga,modelValue:s(Ta),"onUpdate:modelValue":a[1]||(a[1]=e=>N(Ta)?Ta.value=e:null),"is-view":"",config:{agentCode:{isView:!1}},schema:s(Va)},null,8,["modelValue","schema"])])):P("",!0),C("div",ea,[C("div",aa,[V(g,{color:"var(--van-primary-color)","font-size":"40px",name:"free-arrow"}),la,V(g,{color:"var(--van-primary-color)","font-size":"40px",name:"free-arrow"})]),(t(),i(ee,{key:s(xa).planCode,ref_key:"personalInfoRef",ref:ya,modelValue:s(ma).userData,"onUpdate:modelValue":a[2]||(a[2]=e=>s(ma).userData=e),"input-align":"left","error-message-align":"left","product-factor":null==(_=s(xa))?void 0:_.productFactor,"multi-insured-config":null==(m=s(xa))?void 0:m.multiInsuredConfigVO,onTrailChange:e.handlePersonalInfoChange},null,8,["modelValue","product-factor","multi-insured-config","onTrailChange"])),na,V(se,{ref_key:"root",ref:pa,class:D({"submit-btn":!0,"is-first":!s(ma).newAuth}),"is-gradient":!1,text:s(ra)?"领取保障并激活":"分享至客户",onClick:Fa},null,8,["class","text"]),s(ra)?(t(),i(y,{key:0},{default:T((()=>{var e;return[(null==(e=s(Ia))?void 0:e.length)?(t(),i(s(c),{key:0,"attachment-list":s(Ia),"has-bg-color":!1,"pre-text":"请阅读",onPreviewFile:a[3]||(a[3]=e=>(e=>{ma.isOnlyView=!0,ma.activeIndex=e,ma.showFilePreview=!0})(e))},null,8,["attachment-list"])):P("",!0)]})),_:1})):P("",!0),V(y,null,{default:T((()=>{var e,a,l;return[(null==(e=s(ma).tenantProductDetail.SIGNATURE)?void 0:e.inscribedContent)?(t(),i(s(o),{key:0,"inscribed-content":null==(l=null==(a=s(ma).tenantProductDetail)?void 0:a.SIGNATURE)?void 0:l.inscribedContent},null,8,["inscribed-content"])):P("",!0)]})),_:1})])])],8,Qe)),s(ma).showFilePreview?(t(),i(s(F),{key:2,show:s(ma).showFilePreview,"onUpdate:show":a[4]||(a[4]=e=>s(ma).showFilePreview=e),"content-list":s(ma).isOnlyView?s(Ia):s(Pa),"is-only-view":s(ma).isOnlyView,"active-index":s(ma).activeIndex,text:s(ma).isOnlyView?"关闭":"我已逐页阅读上述内容并同意","force-read-count":s(ma).isOnlyView?0:s(Ca),onSubmit:La,onOnCloseFilePreviewByMask:Ra},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):P("",!0),V(x,{ref_key:"shareRef",ref:fa},null,512),s(ma).loading?P("",!0):(t(),i(oe,{key:3,"product-detail":s(ma).tenantProductDetail},null,8,["product-detail"]))],64)}}}),[["__scopeId","data-v-1bc7219c"]]);export{ta as default};
