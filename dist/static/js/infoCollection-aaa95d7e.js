import{d as e,a4 as a,a5 as t,i as o,r as n,j as l,aE as i,o as s,c as r,b as u,u as d,m as c,w as f,f as p,p as m,a as v,a8 as h,aK as I,aL as y,a9 as C,T as j,bq as O,aa as L,ab as g}from"./index-52a59b74.js";import{_ as b,a as w}from"./PolicyInfo-caa5fb78.js";import{s as _,g as x,m as N}from"./trial-5d80ef8a.js";import{_ as P}from"./TrialButton-666942d0.js";import{n as V}from"./nextStep-a17cf597.js";import{u as E}from"./useAttachment-c16a040f.js";import"./infoCollection-59bc4047.js";import"./trial-503791d3.js";import{u as T}from"./useOrder-2e9cee80.js";import{a as D,B as F}from"./constants-fe95ef6f.js";import{t as k}from"./utils-f57ca21b.js";import{T as U}from"./index-3df77328.js";import{p as q}from"./utils-28de25d2.js";import"./index-c23f1a6b.js";import"./core-6d87f9d0.js";import"./utils-9951d172.js";import"./createProposal-c2938236.js";import"./cloneDeep-0fc12c2a.js";import"./InsureInfos-8dc5a59d.js";import"./index-de590a0b.js";import"./index-5065b1a5.js";import"./index-e65403f2.js";import"./lodash-c1175389.js";import"./questionnaire-62331097.js";import"./util-53df31e8.js";import"./product-7bbf9c44.js";import"./constants-28f2e2bb.js";import"./config-98e8d477.js";const A={class:"long-info-collection"},R=e({__name:"infoCollection",setup(e){const R=a((()=>t((()=>import("./index-88308e60.js")),["static/js/index-88308e60.js","static/css/index-fa4edf2a.css","static/js/index-52a59b74.js","static/css/index-f78a037c.css","static/js/theme-94cf7d00.js","static/js/index-c23f1a6b.js","static/css/index-bbfdd7ec.css","static/js/utils-9951d172.js","static/js/infoCollection-59bc4047.js","static/js/trial-503791d3.js"]))),S=a((()=>t((()=>import("./index-cd23179f.js")),["static/js/index-cd23179f.js","static/css/index-bf024e9b.css","static/js/index-52a59b74.js","static/css/index-f78a037c.css"]))),M=o(),B=T(),{productCode:H="",tenantId:J,agentCode:G="",agencyCode:$,saleChannelId:K,isShare:z,orderNo:Q,extraInfo:W,insurerCode:X,preview:Y}=M.query;let Z={};try{Z=JSON.parse(decodeURIComponent(W))}catch(De){}const ee=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}},defaultValue:null,isAutoChange:!1,defaultPlanCode:"",userData:{}}),ae=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,te=l({imgUrl:"",desc:"",title:"",link:ae}),oe=l();l();const ne=l(),le=l({}),ie=l({}),se=l([]),re=l(),ue=l({}),de=l(!1),ce=l(!1),fe=l(0),pe=l(!0),{fileList:me,mustReadFileCount:ve,popupFileList:he}=E(ue,re),Ie=l(!1),ye=l(!1),Ce=()=>{ce.value=!1,pe.value=!0,se.value.length<1||(de.value=!0)},je=()=>{de.value=!1,ce.value=!1,pe.value=!0};l({}),l(!1),l([{}]);const Oe=l(""),Le=l(0),ge=l(!1);l(),l(),l();const be=l(0);l({});const we=l(),_e=()=>{Oe.value="试算中...",Le.value=0,ge.value=!0},xe=(e,a)=>{Oe.value="",be.value=e.premium,Le.value=e,we.value=a,ge.value=!1},Ne=async()=>{var e,a;if(Y)return void I(D.INFO_COLLECTION,M.query);if(!Le.value)return;const t=[];ne.value&&t.push(null==(e=ne.value)?void 0:e.validate(!1)),oe.value&&t.push(null==(a=oe.value)?void 0:a.validate(!1)),Promise.all(t).then((()=>{Object.assign(B.value,{extInfo:{...B.value.extInfo,buttonCode:F.INFO_COLLECTION,pageCode:D.INFO_COLLECTION}});const e=ne.value.dealMixData(),a=k({...e,productCode:H,productName:ie.value.productName},Le.value,B.value);V(a,((e,a)=>{a===y.JUMP_PAGE&&C(e.nextPageCode,M.query)}),M)}))},Pe=e=>{Object.assign(ee.userData,e)},Ve=()=>{Object.assign(B.value,{extInfo:{...B.value.extInfo,buttonCode:F.INFO_COLLECTION,pageCode:D.INFO_COLLECTION}});const e=ne.value.dealMixData(),a=k(e,Le.value,B.value);_(a)},Ee=l({}),Te=l();return i((()=>{(async()=>{let e={};Q&&await x({orderNo:Q,tenantId:J}).then((({code:a,data:t})=>{var o;if("10000"===a){if(Le.value=t.orderAmount,(null==(o=t.insuredList)?void 0:o.length)>0){const{planCode:e}=t.insuredList[0];ee.defaultPlanCode=e}Object.assign(B.value,t,{tenantOrderPayInfoList:t.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:H}),ee.defaultValue=B.value,e=q(t.insuredList[0].productList),ye.value=!0}})),await N(e).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t}=e;Te.value=t;const o={};a.forEach((e=>{o[e.productCode]=e})),Ee.value=o;const{payInfo:n,other:l}=O(Te.value);ee.payInfo={...ee.payInfo,...n},ee.policyInfo={...ee.policyInfo,...l}}}))})()})),(e,a)=>{var t,o,n,l,i,I;const C=L,O=g;return s(),r("div",A,[u(C),d(ye)||d(Y)?(s(),c(U,{key:0,ref_key:"personalInfoRef",ref:ne,"product-info":{productCode:d(H),productName:d(ie).productName,insurerCode:d(X),tenantId:d(J),planList:[]},"tenant-product-detail":d(le),"hide-benefit":"","product-collection":d(Ee),"default-data":d(B),"product-factor":d(Te),onTrialStart:_e,onTrialEnd:xe,"onUpdate:userData":Pe},{middleInfo:f((()=>[d(ee).payInfo.schema.length?(s(),c(d(b),{key:0,ref_key:"payInfoRef",ref:oe,modelValue:d(B).tenantOrderPayInfoList,"onUpdate:modelValue":a[0]||(a[0]=e=>d(B).tenantOrderPayInfoList=e),schema:d(ee).payInfo.schema,"is-view":d(ee).isView,"user-data":d(ee).userData},null,8,["modelValue","schema","is-view","user-data"])):p("",!0),d(ee).policyInfo.schema.length?(s(),c(d(w),{key:1,modelValue:d(B),"onUpdate:modelValue":a[1]||(a[1]=e=>m(B)?B.value=e:null),schema:d(ee).policyInfo.schema,"is-view":d(ee).isView},null,8,["modelValue","schema","is-view"])):p("",!0)])),_:1},8,["product-info","tenant-product-detail","product-collection","default-data","product-factor"])):p("",!0),u(O,null,{default:f((()=>{var e;return[(null==(e=d(me))?void 0:e.length)?(s(),c(d(S),{key:0,modelValue:d(Ie),"onUpdate:modelValue":a[2]||(a[2]=e=>m(Ie)?Ie.value=e:null),"has-bg-color":!1,"attachment-list":d(me),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[3]||(a[3]=e=>(e=>{fe.value=e,ce.value=!0})(e))},null,8,["modelValue","attachment-list"])):p("",!0)]})),_:1}),d(ce)?(s(),c(d(R),{key:1,show:d(ce),"onUpdate:show":a[4]||(a[4]=e=>m(ce)?ce.value=e:null),"content-list":d(pe)?d(me):d(he),"is-only-view":d(pe),"active-index":d(fe),text:d(pe)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":d(pe)?0:d(ve),onSubmit:Ce,onOnCloseFilePreviewByMask:je},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):p("",!0),u(P,{"is-share":d(te).isShare&&!d(z),premium:null==(t=d(Le))?void 0:t.initialPremium,"share-info":d(te),"loading-text":d(Oe),"payment-frequency":(null==(I=null==(i=null==(l=null==(n=null==(o=d(we))?void 0:o.insuredList)?void 0:n[0].productList)?void 0:l[0].riskList)?void 0:i[0])?void 0:I.paymentFrequency)+"","tenant-product-detail":d(le),"handle-share":e=>(e=>{ne.value.validateHolder(["mobile"]).then((()=>{Object.assign(B.value,{extInfo:{...B.value.extInfo,buttonCode:F.INFO_COLLECTION,pageCode:D.INFO_COLLECTION}});const a=ne.value.getUserData(),t=k({...we.value,holder:null==a?void 0:a.holder},Le.value||{},B.value);V(t,((a,t)=>{t===y.JUMP_PAGE&&(null==e||e())}),M)})).catch((()=>{j("请录入投保人手机号后进行分享")}))})(e),disabled:!d(Le),onHandleClick:Ne},{right:f((()=>[v("span",{onClick:Ve},"暂存")])),default:f((()=>[h("下一步 ")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","disabled"])])}}});export{R as default};
