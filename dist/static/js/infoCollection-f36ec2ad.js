import{d as e,a4 as a,a5 as t,h as o,r as n,i as s,av as l,o as i,c as r,b as d,u,l as c,w as p,q as f,m,a as v,a8 as h,aC as I,T as C,aD as j,a9 as y,bk as O,aa as b,ab as L}from"./index-af98f288.js";import{_ as g}from"./PayInfo-245a19c2.js";import{s as x,g as _,m as w}from"./trial-93daffe6.js";import{_ as P}from"./TrialButton-46c528e8.js";import{n as N}from"./nextStep-d3614847.js";import{u as E}from"./useAttachment-e21356d0.js";import"./infoCollection-945e2ec6.js";import"./trial-94f26242.js";import{u as T}from"./useOrder-25aaed6d.js";import{P as k,B as D}from"./constants-6162d78d.js";import{t as F}from"./utils-bb4063cc.js";import{T as V}from"./index-0619339c.js";import{p as U}from"./utils-0af605ab.js";import"./bankCard-e39a8a5d.js";import"./index-727bcf0e.js";import"./core-61b9335a.js";import"./constant-8927d485.js";import"./utils-5bb05dee.js";import"./createProposal-754706f4.js";import"./cloneDeep-7ddd4f74.js";import"./InsureInfos-dd1ad217.js";import"./index-de590a0b.js";import"./get-49d40ce6.js";import"./index-5ccfd650.js";import"./index-c34842c3.js";import"./empth-c0adfdba.js";import"./lodash-4b7e451a.js";import"./index-4bfddb7a.js";import"./search-b364081f.js";import"./product-585b0e6f.js";import"./constants-b2e11736.js";const A={class:"long-info-collection"},q=e({__name:"infoCollection",setup(e){const q=a((()=>t((()=>import("./index-21957091.js")),["static/js/index-21957091.js","static/css/index-fa4edf2a.css","static/js/index-af98f288.js","static/css/index-2278f771.css","static/js/theme-94cf7d00.js","static/js/index-727bcf0e.js","static/css/index-bbfdd7ec.css","static/js/utils-5bb05dee.js","static/js/infoCollection-945e2ec6.js","static/js/trial-94f26242.js"]))),R=a((()=>t((()=>import("./index-18a66642.js")),["static/js/index-18a66642.js","static/css/index-cb73c937.css","static/js/index-af98f288.js","static/css/index-2278f771.css"]))),S=o(),M=T(),{productCode:B="",tenantId:H,agentCode:J="",agencyCode:G,saleChannelId:$,isShare:z,orderNo:K,extraInfo:Q,insurerCode:W,preview:X}=S.query;let Y={};try{Y=JSON.parse(decodeURIComponent(Q))}catch(ke){}const Z=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},defaultValue:null,isAutoChange:!1,defaultPlanCode:"",userData:{}}),ee=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,ae=s({imgUrl:"",desc:"",title:"",link:ee}),te=s();s();const oe=s(),ne=s({}),se=s({}),le=s([]),ie=s(),re=s({}),de=s(!1),ue=s(!1),ce=s(0),pe=s(!0),{fileList:fe,mustReadFileCount:me,popupFileList:ve}=E(re,ie),he=s(!1),Ie=s(!1),Ce=()=>{ue.value=!1,pe.value=!0,le.value.length<1||(de.value=!0)},je=()=>{de.value=!1,ue.value=!1,pe.value=!0};s({}),s(!1),s([{}]);const ye=s(""),Oe=s(0),be=s(!1);s(),s(),s();const Le=s(0);s({});const ge=s(),xe=()=>{ye.value="试算中...",Oe.value=0,be.value=!0},_e=(e,a)=>{ye.value="",Le.value=e.premium,Oe.value=e,ge.value=a,be.value=!1},we=async()=>{var e,a;if(X)return void I(k.INFO_COLLECTION,S.query);if(!Oe.value)return;const t=[];oe.value&&t.push(null==(e=oe.value)?void 0:e.validate(!1)),te.value&&t.push(null==(a=te.value)?void 0:a.validate(!1)),Promise.all(t).then((()=>{if(!he.value)return void C("请勾选投保人阅读并接受");Object.assign(M.value,{extInfo:{...M.value.extInfo,buttonCode:D.INFO_COLLECTION,pageCode:k.INFO_COLLECTION}});const e=oe.value.dealMixData(),a=F({...e,productCode:B,productName:se.value.productName},Oe.value,M.value);N(a,((e,a)=>{a===j.JUMP_PAGE&&y(e.nextPageCode,S.query)}))}))},Pe=e=>{console.log("val",e),Object.assign(Z.userData,e)},Ne=()=>{Object.assign(M.value,{extInfo:{...M.value.extInfo,buttonCode:D.INFO_COLLECTION,pageCode:k.INFO_COLLECTION}});const e=oe.value.dealMixData(),a=F(e,Oe.value,M.value);x(a)};n({tenantOrderPayInfoList:[]});const Ee=s({}),Te=s();return l((()=>{(async()=>{let e={};K&&await _({orderNo:K,tenantId:H}).then((({code:a,data:t})=>{var o;if("10000"===a){if(Oe.value=t.orderAmount,(null==(o=t.insuredList)?void 0:o.length)>0){const{planCode:e}=t.insuredList[0];Z.defaultPlanCode=e}Object.assign(M.value,t,{tenantOrderPayInfoList:t.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:B}),Z.defaultValue=M.value,e=U(t.insuredList[0].productList),Ie.value=!0}})),await w(e).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t}=e;Te.value=t;const o={};a.forEach((e=>{o[e.productCode]=e})),Ee.value=o;const{payInfo:n}=O(Te.value);Z.payInfo={...Z.payInfo,...n}}}))})()})),(e,a)=>{var t,o,n,s,l,I;const y=b,O=L;return i(),r("div",A,[d(y),u(Ie)||u(X)?(i(),c(V,{key:0,ref_key:"personalInfoRef",ref:oe,"product-info":{productCode:u(B),productName:u(se).productName,insurerCode:u(W),tenantId:u(H),planList:[]},"tenant-product-detail":u(ne),"hide-benefit":"","product-collection":u(Ee),"default-data":u(M),"product-factor":u(Te),onTrialStart:xe,onTrialEnd:_e,"onUpdate:userData":Pe},{middleInfo:p((()=>[u(Z).payInfo.schema.length?(i(),c(u(g),{key:0,ref_key:"payInfoRef",ref:te,modelValue:u(M).tenantOrderPayInfoList,"onUpdate:modelValue":a[0]||(a[0]=e=>u(M).tenantOrderPayInfoList=e),schema:u(Z).payInfo.schema,"is-view":u(Z).isView,"user-data":u(Z).userData},null,8,["modelValue","schema","is-view","user-data"])):f("",!0)])),_:1},8,["product-info","tenant-product-detail","product-collection","default-data","product-factor"])):f("",!0),d(O,null,{default:p((()=>{var e;return[(null==(e=u(fe))?void 0:e.length)?(i(),c(u(R),{key:0,modelValue:u(he),"onUpdate:modelValue":a[1]||(a[1]=e=>m(he)?he.value=e:null),"has-bg-color":!1,"attachment-list":u(fe),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[2]||(a[2]=e=>(e=>{ce.value=e,ue.value=!0})(e))},null,8,["modelValue","attachment-list"])):f("",!0)]})),_:1}),u(ue)?(i(),c(u(q),{key:1,show:u(ue),"onUpdate:show":a[3]||(a[3]=e=>m(ue)?ue.value=e:null),"content-list":u(pe)?u(fe):u(ve),"is-only-view":u(pe),"active-index":u(ce),text:u(pe)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":u(pe)?0:u(me),onSubmit:Ce,onOnCloseFilePreviewByMask:je},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):f("",!0),d(P,{"is-share":u(ae).isShare&&!u(z),premium:null==(t=u(Oe))?void 0:t.initialPremium,"share-info":u(ae),"loading-text":u(ye),"payment-frequency":(null==(I=null==(l=null==(s=null==(n=null==(o=u(ge))?void 0:o.insuredList)?void 0:n[0].productList)?void 0:s[0].riskList)?void 0:l[0])?void 0:I.paymentFrequency)+"","tenant-product-detail":u(ne),"handle-share":e=>(e=>{oe.value.validateHolder(["mobile"]).then((()=>{Object.assign(M.value,{extInfo:{...M.value.extInfo,buttonCode:D.INFO_COLLECTION,pageCode:k.INFO_COLLECTION}});const a=oe.value.getUserData(),t=F({...ge.value,holder:null==a?void 0:a.holder},Oe.value||{},M.value);N(t,((a,t)=>{t===j.JUMP_PAGE&&(null==e||e())}))})).catch((()=>{C("请录入投保人手机号后进行分享")}))})(e),disabled:!u(Oe),onHandleClick:we},{right:p((()=>[v("span",{onClick:Ne},"暂存")])),default:p((()=>[h("下一步 ")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","disabled"])])}}});export{q as default};
