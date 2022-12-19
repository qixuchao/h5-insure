import{_ as e,d as t,aY as a,r as n,a7 as l,x as r,G as u,aR as i,b as o,q as s,c as d,g as c,i as v,F as p,l as m,h as f,B as O,t as y,j as I,e as P,n as h,f as L,I as C,Q as V,w as g,s as _,K as b,L as x,aZ as S,b0 as T,aJ as k,b5 as H,a8 as E,u as w,a as N,a_ as F,a2 as R,a$ as j,an as D,y as q,aP as A,aK as B,T as U,a4 as M}from"./index-ede405b0.js";import{d as z}from"./debounce-25788c41.js";import{i as $,b as G,p as Q,g as W}from"./trial-549f7489.js";import{p as J}from"./product-f1c02f14.js";import{n as K}from"./nextStep-34f9fce1.js";import{C as Y,S as Z,R as X,O as ee,m as te}from"./infoCollection-97fe2557.js";import{k as ae,j as ne}from"./trial-cbc5c145.js";import{u as le}from"./core-d078ab35.js";import{u as re,B as ue,P as ie}from"./index-913013a6.js";import{u as oe}from"./theme-65292714.js";import{o as se,g as de,v as ce,r as ve,t as pe}from"./utils-2bab55e2.js";import{v as me}from"./validator-5a13dc82.js";import{s as fe,c as Oe}from"./phoneVerify-86d7e26a.js";import{s as ye}from"./useStorage-ffa94fcc.js";import"./pdfdist-66c75904.js";import"./index-c1807f2c.js";import"./index-4261ddf2.js";import"./logo-e4245f5a.js";const Ie={class:"guarantee-list"},Pe=(e=>(b("data-v-ac4580b0"),e=e(),x(),e))((()=>v("span",null,"保障计划",-1))),he={key:0,class:"picture-payment-content"},Le=["onClick"],Ce=["src"],Ve=["src"],ge={key:1,class:"plan-list"},_e=["onClick"],be={key:2,class:"feerate-view"},xe={key:0},Se={class:"extinfo-info-list"},Te={class:"guarantee-detail"},ke={class:"content"};var He=e(t({props:{dataSource:{type:Object,default:()=>{}},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:5},activePlanCode:{type:String,default:""},isMultiplePlan:{type:Boolean,default:!1},paymentFrequency:{type:String,default:""},premiumInfo:{type:Object,default:()=>{}}},emits:["update-active-plan"],setup(e,{emit:t}){var b;const x=e;a((e=>({"541c7141":Q.value})));const S=n(null==(b=x.dataSource)?void 0:b.planList),T=n(x.activePlanCode),k=n();l([()=>x.dataSource,()=>x.activePlanCode],(()=>{var e,t;x.isMultiplePlan&&(S.value=null==(e=x.dataSource)?void 0:e.planList,T.value=x.activePlanCode,k.value=null==(t=x.dataSource)?void 0:t.planList.findIndex((e=>e.planCode===T.value)))}),{immediate:!0});const H=n([]),E=n([]),w=n(),N=r((()=>x.isMultiplePlan?x.dataSource.planList.map((e=>e.planPicList?{...e.planPicList,planCode:e.planCode,planName:e.planName}:null)).filter((e=>!!e)):[]));l([()=>x.dataSource,()=>x.activePlanCode,()=>x.paymentFrequency,()=>T.value],(()=>{var e,t,a,n,l;if(x.isMultiplePlan){if(S.value&&S.value.length>0){let e=0;const t=S.value.findIndex((e=>e.planCode===T.value));t>-1&&(e=t),H.value=S.value[e].guaranteeItemVOS,E.value=S.value[e].extInfoVOList;const a=S.value[e].productPremiumVOList.find((e=>e.paymentFrequency===x.paymentFrequency));w.value=a||(null==(l=S.value[e])?void 0:l.productPremiumVOList[0])}}else{H.value=null==(e=x.dataSource)?void 0:e.planInsureVO.guaranteeItemVOS,E.value=null==(t=x.dataSource)?void 0:t.planInsureVO.extInfoVOList;const l=null==(a=x.dataSource)?void 0:a.planInsureVO.productPremiumVOList.find((e=>e.paymentFrequency===x.paymentFrequency));w.value=l||(null==(n=x.dataSource)?void 0:n.planInsureVO.productPremiumVOList[0])}}),{immediate:!0,deep:!0});const F=r((()=>{var e;return(null==(e=x.dataSource)?void 0:e.rateUri)||""})),R=r((()=>!!(w.value&&w.value.paymentFrequencyValue&&w.value.premiumUnit&&F))),[j,D]=u(!1),q=r((()=>{var e;return!(!H.value||!(null==(e=H.value)?void 0:e.length))&&(H.value.length>x.count&&(!!x.isShowClose||!j.value))})),A=()=>{D()},B=r((()=>{var e;return H.value&&(null==(e=H.value)?void 0:e.length)?H.value.length<=x.count||j.value?H.value:H.value.slice(0,x.count):[]})),U=e=>{var t;T.value=e,k.value=null==(t=x.dataSource)?void 0:t.planList.findIndex((e=>e.planCode===T.value))},M=n(!1),z=()=>{M.value=!0},$=()=>{se({fileType:"pdf",fileUri:F.value})},G=e=>{T.value=S.value[e.name].planCode},Q=n("");return l([()=>T.value,()=>M.value],(()=>{i((()=>{(()=>{var e,t;const a=((null==(e=document.querySelector(".guarantee-popup .extinfo-info-list"))?void 0:e.clientHeight)||0)+1,n=a+((null==(t=document.querySelector(".guarantee-popup .custom-plan-tab"))?void 0:t.clientHeight)||0)+(a?5:0);Q.value=`calc( 100% - ${n}px )`})()}))})),(t,a)=>{var n,l;const r=o("ProCell"),u=o("ProTab"),i=o("ProPopup"),b=s("dompurify-html");return d(),c(p,null,[v("div",Ie,[v("div",{class:"header"},[Pe,v("span",{onClick:z},"查看详情")]),e.isMultiplePlan?(d(),c(p,{key:0},[m(N).length>0?(d(),c("div",he,[(d(!0),c(p,null,f(m(N),(e=>(d(),c("div",{key:e.planCode,class:O("picture-payment-item"),onClick:t=>U(e.planCode)},[T.value==e.planCode?(d(),c("img",{key:0,src:e.selectedPic},null,8,Ce)):(d(),c("img",{key:1,src:e.unSelectedPic},null,8,Ve))],8,Le)))),128))])):(d(),c("div",ge,[(d(!0),c(p,null,f(S.value,((e,t)=>(d(),c("div",{key:`${e.planCode}_${t}`,class:O("plan-list-item "+(e.planCode===T.value?"plan-list-item-active":"")),onClick:t=>U(e.planCode)},[v("span",null,y(e.planName),1)],10,_e)))),128))]))],64)):I("",!0),(d(!0),c(p,null,f(m(B),((e,t)=>(d(),P(r,{key:t,class:"guarantee-item",title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),m(q)?(d(),c("div",{key:1,class:"show-more",onClick:A},[h(y(m(j)?"收起":"查看更多")+" ",1),L(C,{name:"arrow-down-dobule",class:O(["icon",{showMore:m(j)}])},null,8,["class"])])):I("",!0),m(R)?(d(),c("div",be,[v("span",null,y(`${(null==(n=w.value)?void 0:n.paymentFrequencyValue)||""}${(null==(l=w.value)?void 0:l.premiumUnit)||""}`),1),m(F)?(d(),c("span",{key:0,onClick:$},"查看保费")):I("",!0)])):I("",!0)]),L(V),L(i,{show:M.value,"onUpdate:show":a[1]||(a[1]=e=>M.value=e),title:"保障详情",class:"guarantee-popup"},{default:g((()=>[E.value&&E.value.length>0?(d(),c("div",xe,[v("div",Se,[(d(!0),c(p,null,f(E.value,((e,t)=>(d(),P(r,{key:t,title:e.name,content:e.description,border:!1,size:"small"},null,8,["title","content"])))),128))]),L(V)])):I("",!0),e.isMultiplePlan?(d(),P(u,{key:1,active:k.value,"onUpdate:active":a[0]||(a[0]=e=>k.value=e),list:S.value.map(((e,t)=>({title:e.planName}))),class:"custom-plan-tab",onClickTab:G},null,8,["active","list"])):I("",!0),v("div",Te,[(d(!0),c(p,null,f(H.value,((e,t)=>(d(),c("div",{key:t,class:"guarantee-item"},[L(r,{title:e.title,content:e.desc,border:!1,size:"small"},null,8,["title","content"]),_(v("div",ke,null,512),[[b,e.content]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-ac4580b0"]]);const Ee={class:"spec"},we={key:1,class:"spec"};var Ne=e(t({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""},detail:{type:Object,default:()=>{}}},setup(e,{expose:t}){const a=e,l=S((()=>T((()=>import("./index-ede405b0.js").then((function(e){return e.bo}))),["static/js/index-ede405b0.js","static/css/index-76f73643.css","static/js/pdfdist-66c75904.js"]))),u=S((()=>T((()=>import("./index-161a6c70.js")),["static/js/index-161a6c70.js","static/css/index-f22f2764.css","static/js/index-ede405b0.js","static/css/index-76f73643.css","static/js/pdfdist-66c75904.js"]))),i=S((()=>T((()=>import("./index-ede405b0.js").then((function(e){return e.bm}))),["static/js/index-ede405b0.js","static/css/index-76f73643.css","static/js/pdfdist-66c75904.js"]))),s=S((()=>T((()=>import("./index-d8308e31.js")),["static/js/index-d8308e31.js","static/css/index-7b3feb06.css","static/js/index-ede405b0.js","static/css/index-76f73643.css","static/js/pdfdist-66c75904.js"]))),O=S((()=>T((()=>import("./index-3b26f2b2.js")),["static/js/index-3b26f2b2.js","static/css/index-bfbfdd15.css","static/js/index-ede405b0.js","static/css/index-76f73643.css","static/js/pdfdist-66c75904.js"]))),y=n(),h=n([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),C=r((()=>{var e,t,n,l;return(null==(t=null==(e=a.detail)?void 0:e.tenantProductInsureVO)?void 0:t.spec)&&(null==(l=null==(n=a.detail)?void 0:n.tenantProductInsureVO)?void 0:l.spec.length)>0})),V=r((()=>{var e,t,n,l,r,u,i,o,s,d,c,v,p,m;const f=null==(t=null==(e=a.detail)?void 0:e.tenantProductInsureVO)?void 0:t.settlementProcessVO.settlementProcessType;return!!(f===Y.WORD&&(null==(r=null==(l=null==(n=a.detail)?void 0:n.tenantProductInsureVO)?void 0:l.settlementProcessVO)?void 0:r.settlementProcessList)&&(null==(o=null==(i=null==(u=a.detail)?void 0:u.tenantProductInsureVO)?void 0:i.settlementProcessVO)?void 0:o.settlementProcessList.length)>0||f===Y.IMAGE&&(null==(c=null==(d=null==(s=a.detail)?void 0:s.tenantProductInsureVO)?void 0:d.settlementProcessVO)?void 0:c.settlementProcessPicList)&&(null==(m=null==(p=null==(v=a.detail)?void 0:v.tenantProductInsureVO)?void 0:p.settlementProcessVO)?void 0:m.settlementProcessPicList.length)>0)})),_=r((()=>{var e,t,n,l;return(null==(t=null==(e=a.detail)?void 0:e.tenantProductInsureVO)?void 0:t.questionList)&&(null==(l=null==(n=a.detail)?void 0:n.tenantProductInsureVO)?void 0:l.questionList.length)>0})),b=r((()=>{let e=[...h.value];return C.value||(e=e.filter((e=>"tab1"!==e.slotName))),V.value||_.value||(e=e.filter((e=>"tab2"!==e.slotName))),e}));return t({handleClickTab:()=>{var e;return null==(e=y.value)?void 0:e.handleClickTab}}),(e,t)=>{const n=o("van-image"),r=o("ProSvg");return d(),P(m(l),{ref_key:"scrollRef",ref:y,class:"tabs",list:m(b),sticky:"",scrollspy:""},k({tab3:g((()=>[E(e.$slots,"form",{},void 0,!0)])),_:2},[m(C)?{name:"tab1",fn:g((()=>{var e,t;return[v("div",Ee,[(d(!0),c(p,null,f((null==(t=null==(e=a.detail)?void 0:e.tenantProductInsureVO)?void 0:t.spec)||[],((e,t)=>(d(),P(H,{key:t},{fallback:g((()=>[L(r,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:g((()=>[(d(),P(n,{key:t,class:"detail-img",width:"100%",src:e},null,8,["src"]))])),_:2},1024)))),128)),L(m(i))])]}))}:void 0,m(V)||m(_)?{name:"tab2",fn:g((()=>{var e,t;return[m(V)?(d(),c(p,{key:0},[(null==(t=null==(e=a.detail)?void 0:e.tenantProductInsureVO)?void 0:t.settlementProcessVO.settlementProcessType)===m(Y).WORD?(d(),P(m(s),{key:0,title:"理赔说明"},{default:g((()=>{var e,t,n;return[L(m(u),{list:null==(n=null==(t=null==(e=a.detail)?void 0:e.tenantProductInsureVO)?void 0:t.settlementProcessVO)?void 0:n.settlementProcessList},null,8,["list"])]})),_:1})):(d(),c("div",we,[(d(),P(H,null,{fallback:g((()=>[L(r,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:g((()=>{var e,t,l;return[(d(!0),c(p,null,f((null==(l=null==(t=null==(e=a.detail)?void 0:e.tenantProductInsureVO)?void 0:t.settlementProcessVO)?void 0:l.settlementProcessPicList)||[],((e,t)=>(d(),P(n,{key:t,width:"100%",src:e,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),L(m(i))],64)):I("",!0),m(_)?(d(),c(p,{key:1},[L(m(s),{title:"常见问题"},{default:g((()=>{var e,t;return[L(m(O),{list:null==(t=null==(e=a.detail)?void 0:e.tenantProductInsureVO)?void 0:t.questionList},null,8,["list"])]})),_:1}),L(m(i))],64)):I("",!0)]}))}:void 0]),1032,["list"])}}}),[["__scopeId","data-v-717e916d"]]);const Fe=e=>(b("data-v-cf5ece7c"),e=e(),x(),e),Re={class:"page-internet-product-detail"},je={class:"info"},De={class:"custom-page-form"},qe=Fe((()=>v("div",{class:"form-title"},"请填写投保信息",-1))),Ae={key:2,class:"footer-area"},Be={class:"price"},Ue={key:0},Me=h(y("立即投保")),ze=Fe((()=>v("div",{id:"xinaoDialog"},null,-1)));var $e=e(t({setup(e){var t,a;const u=S((()=>T((()=>import("./index-a9056373.js")),["static/js/index-a9056373.js","static/css/index-ea588f10.css","static/js/index-ede405b0.js","static/css/index-76f73643.css","static/js/pdfdist-66c75904.js","static/js/theme-65292714.js","static/js/index-4261ddf2.js","static/css/index-2dbcd337.css","static/js/utils-2bab55e2.js","static/js/infoCollection-97fe2557.js","static/js/useStorage-ffa94fcc.js","static/js/trial-cbc5c145.js"]))),s=S((()=>T((()=>import("./index-eb5aa696.js")),["static/js/index-eb5aa696.js","static/css/index-092fbb09.css","static/js/theme-65292714.js","static/js/index-ede405b0.js","static/css/index-76f73643.css","static/js/pdfdist-66c75904.js"]))),f=S((()=>T((()=>import("./index-5db47941.js")),["static/js/index-5db47941.js","static/css/index-82fdec80.css","static/js/infoCollection-97fe2557.js","static/js/index-ede405b0.js","static/css/index-76f73643.css","static/js/pdfdist-66c75904.js","static/js/useDicData-7ab2952f.js","static/js/trial-cbc5c145.js","static/js/utils-2bab55e2.js","static/js/useStorage-ffa94fcc.js"]))),O=S((()=>T((()=>import("./index-4261ddf2.js")),["static/js/index-4261ddf2.js","static/css/index-2dbcd337.css","static/js/index-ede405b0.js","static/css/index-76f73643.css","static/js/pdfdist-66c75904.js"]))),h=S((()=>T((()=>import("./index-f4a2fc0a.js")),["static/js/index-f4a2fc0a.js","static/css/index-6733e696.css","static/js/index-ede405b0.js","static/css/index-76f73643.css","static/js/pdfdist-66c75904.js","static/js/infoCollection-97fe2557.js","static/js/relativeTime-12fe38c5.js","static/js/validator-5a13dc82.js","static/js/useDicData-7ab2952f.js"]))),C=S((()=>T((()=>import("./index-afb42bbe.js")),["static/js/index-afb42bbe.js","static/css/index-a14d73ae.css","static/js/index-ede405b0.js","static/css/index-76f73643.css","static/js/pdfdist-66c75904.js"]))),V=S((()=>T((()=>import("./index-4c942bf4.js")),["static/js/index-4c942bf4.js","static/css/index-607986ff.css","static/js/index-ede405b0.js","static/css/index-76f73643.css","static/js/pdfdist-66c75904.js"]))),_=S((()=>T((()=>import("./index-f6efc7b2.js")),["static/js/index-f6efc7b2.js","static/css/index-b9ba3011.css","static/js/index-ede405b0.js","static/css/index-76f73643.css","static/js/pdfdist-66c75904.js"]))),b=oe();w();const x=N(),{productCode:H="",tenantId:E,agentCode:Y="",agencyCode:se,saleChannelId:Ie,extraInfo:Pe,insurerCode:he,preview:Le}=x.query;let Ce={};try{Ce=JSON.parse(decodeURIComponent(Pe))}catch(xt){}const{openId:Ve}=Ce,ge=n(),_e=n(),be=n(),xe=n(!1),Se=n(),Te=n(),ke=n(!1),Ee=n(!1),we=n(0),Fe=n(!1),$e=n({}),Ge=n({}),Qe=n(!0),We=n(!0),Je=n(""),Ke=n(),Ye=n(),Ze=n(""),Xe=n(""),et=n("");Ve&&re({openId:Ve},(e=>{Ge.value=e}));const tt="jumpToPage",at=n({tenantId:E,agencyId:se,agentCode:Y,orderCategory:1,saleChannelId:Ie,venderCode:he,productCode:H,insuranceStartDate:null,insuranceEndDate:null,activePlanCode:"",paymentFrequency:"",premium:0,insurancePeriodValue:ae.YEAR_1,commencementTime:"",tenantOrderHolder:{extInfo:{hasSocialInsurance:Z.HAS}},tenantOrderInsuredList:[{dontFetchDefaultInfo:!1,relationToHolder:X.SELF,extInfo:{hasSocialInsurance:Z.HAS},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{tenantId:E,productCode:(null==(t=Se.value)?void 0:t.productCode)||"",planCode:"",productName:(null==(a=Se.value)?void 0:a.productName)||"",premium:Ke.value||0,tenantOrderRiskList:[]}]}],extInfo:{buttonCode:"EVENT_SHORT_saveOrder",pageCode:"productInfo",extraInfo:Ce,templateId:(null==Ce?void 0:Ce.templateId)||"1",iseeBizNo:""},operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),nt=r((()=>!!Le)),lt=r((()=>{var e,t,a,n,l,r;return!!Se.value&&!!((null==(t=null==(e=Se.value)?void 0:e.tenantProductInsureVO)?void 0:t.planList)&&Array.isArray(null==(n=null==(a=Se.value)?void 0:a.tenantProductInsureVO)?void 0:n.planList)&&(null==(r=null==(l=Se.value)?void 0:l.tenantProductInsureVO)?void 0:r.planList.length)>0)})),rt=r((()=>{if(Ge.value){const e=[];return Object.keys(Ge.value).forEach((t=>{e.push(...Ge.value[t])})),e}return[]})),ut=r((()=>rt.value.length>0)),it=r((()=>{var e,t,a;let n={};if((null==(e=Te.value)?void 0:e.productFactor)?n=null==(t=Te.value)?void 0:t.productFactor:at.value.activePlanCode&&(n=(null==(a=Te.value)?void 0:a.planFactor[at.value.activePlanCode])||{}),ut.value&&n[1]){const e=n[1].findIndex((e=>"verificationCode"===e.code&&1===e.isDisplay));e>-1&&(n[1][e].isDisplay=2)}return n})),ot=r((()=>{if(it.value[1]){if(it.value[1].findIndex((e=>"verificationCode"===e.code&&1===e.isDisplay))>-1)return!0}return!1}));l((()=>lt.value),(()=>{var e,t;lt.value&&(at.value.activePlanCode=at.value.activePlanCode?at.value.activePlanCode:null==(t=null==(e=Se.value)?void 0:e.tenantProductInsureVO)?void 0:t.planList[0].planCode)}),{immediate:!0});const st=r((()=>{var e,t,a;return lt.value?(null==(t=null==(e=Te.value)?void 0:e.productRelationPlanVOList.find((e=>e.planCode===at.value.activePlanCode)))?void 0:t.productRiskVoList)||[]:(null==(a=Te.value)?void 0:a.productRiskVoList)||[]})),dt=r((()=>{var e;if(!Se.value)return{};if(lt.value){const t=null==(e=Se.value)?void 0:e.tenantProductInsureVO.planList.find((e=>e.planCode===at.value.activePlanCode));return t||{}}return Se.value.tenantProductInsureVO.planInsureVO})),ct=e=>{at.value.activePlanCode=e},vt=r((()=>{var e,t,a;if((null==(e=Te.value)?void 0:e.productQuestionnaireVOList)&&(null==(t=Te.value)?void 0:t.productQuestionnaireVOList.length)>0){const e=null==(a=Te.value)?void 0:a.productQuestionnaireVOList[0];if(e){const{basicInfo:{questionnaireType:t},questions:a}=e.questionnaireDetailResponseVO||{};return"2"===String(t)?[{attachmentName:null==e?void 0:e.questionnaireName,attachmentUri:a,attachmentType:"question"}]:[{attachmentName:null==e?void 0:e.questionnaireName,attachmentUri:a[0].content,attachmentType:de(String(a[0].textType),a[0].content)}]}}return[]})),pt=n();l([()=>lt.value,()=>at.value.activePlanCode,()=>Se.value],(()=>{var e,t;let a=null;if(lt.value&&Se.value){const t=null==(e=Se.value)?void 0:e.tenantProductInsureVO.planList.find((e=>e.planCode===(at.value.activePlanCode||"")));t&&(a=null==t?void 0:t.attachmentVOList)}else Se.value&&(a=null==(t=Se.value)?void 0:t.tenantProductInsureVO.planInsureVO.attachmentVOList);pt.value=a?Object.keys(a).map((e=>(a[e].forEach((e=>{e.attachmentType=de(String(e.attachmentType),e.attachmentUri)})),{attachmentName:e,attachmentList:a[e]}))):[]}),{immediate:!0});const mt=async({mobile:e,type:t},a)=>{var n;if(ge.value){if(nt.value)return void(null==a||a());null==(n=ge.value)||n.validateForm(`${t}_mobile`).then((async()=>{const t=await fe(e),{code:n,data:l}=t;"10000"===n&&(null==a||a())}))}},ft=()=>{_e.value.handleClickTab()("tab3")},Ot=e=>{We.value=!1,Object.assign(at.value.tenantOrderHolder,e),i((()=>{We.value=!0}))},yt=e=>{We.value=!1,Object.assign(at.value.tenantOrderInsuredList[0],e),i((()=>{We.value=!0}))},It=e=>{we.value=e,Ee.value=!0},Pt=async()=>{try{await K(((e={},t={},a={})=>{var n;const l={...a},r={tenantId:E,riskList:(null==(n=l.tenantOrderInsuredList[0])?void 0:n.tenantOrderProductList[0].riskVOList)||[],riskPremium:t,productId:null==e?void 0:e.productBasicInfoVO.id};return l.extInfo.iseeBizNo=Je.value,l.productCode=e.productBasicInfoVO.productCode,l.commencementTime=l.insuranceStartDate,l.expiryDate=l.insuranceEndDate,l.paymentFrequency=l.paymentFrequency||te.SINGLE,l.tenantOrderHolder={...l.tenantOrderHolder,socialFlag:l.tenantOrderHolder.extInfo.hasSocialInsurance||Z.HAS,certType:l.tenantOrderHolder.certType||R.CERT,extInfo:{...l.tenantOrderHolder.extInfo,hasSocialInsurance:l.tenantOrderHolder.extInfo.hasSocialInsurance||Z.HAS}},l.tenantOrderInsuredList=l.tenantOrderInsuredList.map((e=>({...e,certType:e.certType||R.CERT,socialFlag:e.socialFlag||Z.HAS,planCode:at.value.activePlanCode?at.value.activePlanCode:null}))),l.tenantOrderInsuredList[0].tenantOrderProductList[0]={premium:Ke.value,productCode:e.productBasicInfoVO.productCode,productName:e.productBasicInfoVO.productName,planCode:at.value.activePlanCode?at.value.activePlanCode:null,tenantOrderRiskList:pe(r)},l})(Te.value,$e.value,at.value),(async(e,t)=>{t===tt&&(null==e?void 0:e.orderNo)&&await(async e=>{try{const{code:t,data:a}=await W({orderNo:e,tenantId:E});"10000"===t&&(a.extInfo={...a.extInfo,buttonCode:"EVENT_SHORT_underWrite"},await K(a))}catch(xt){}})(null==e?void 0:e.orderNo)}))}catch(xt){}},ht=async(e,t,a,n=!0)=>{var l;try{et.value="保费试算中...";const r=ve(a).map((t=>({...t,paymentFrequency:e.paymentFrequency||te.SINGLE,insurancePeriodValue:e.insurancePeriodValue,coveragePeriod:e.insurancePeriodValue}))),u={tenantId:E,productCode:null==(l=Se.value)?void 0:l.productCode,insuranceStartDate:e.insuranceStartDate,insuranceEndDate:e.insuranceEndDate,commencementTime:e.insuranceStartDate,expiryDate:e.insuranceEndDate,paymentFrequency:e.paymentFrequency||te.SINGLE,holder:{personVO:{...e.tenantOrderHolder,socialFlag:e.tenantOrderHolder.extInfo.hasSocialInsurance||Z.HAS,certType:e.tenantOrderHolder.certType||R.CERT,extInfo:{...e.tenantOrderHolder.extInfo,hasSocialInsurance:e.tenantOrderHolder.extInfo.hasSocialInsurance||Z.HAS}}},insuredVOList:e.tenantOrderInsuredList.map((e=>({insuredCode:"",relationToHolder:e.relationToHolder,personVO:{...e,socialFlag:e.extInfo.hasSocialInsurance||Z.HAS,certType:e.certType||R.CERT,extInfo:{...e.extInfo,hasSocialInsurance:e.extInfo.hasSocialInsurance||Z.HAS}},productPlanVOList:[{insurerCode:t.productBasicInfoVO.insurerCode,planCode:at.value.activePlanCode?at.value.activePlanCode:null,riskVOList:r}]})))},{code:i,message:o}=await G(u);if("10000"===i){const{code:e,data:t}=await Q(u);if("10000"===e){if(et.value="",at.value.tenantOrderInsuredList[0].tenantOrderProductList=u.insuredVOList[0].productPlanVOList,Ke.value=null==t?void 0:t.premium,at.value.premium=t.premium,at.value.orderAmount=t.premium,at.value.orderRealAmount=t.premium,!n){const e={};t.riskPremiumDetailVOList&&t.riskPremiumDetailVOList.length&&t.riskPremiumDetailVOList.forEach((t=>{e[t.riskCode]={premium:t.premium,amount:t.amount}})),$e.value=e,pt.value.length>0?(Qe.value=!1,It(0)):vt.value.length>0?ke.value=!0:await Pt()}}else et.value=""}else et.value="",U(o)}catch(xt){et.value=""}},Lt=async()=>{var e;try{ke.value=!1,Ee.value=!1,ge.value&&(null==(e=ge.value)||e.validateForm().then((async()=>{var e;if(ut.value||!ot.value)await ht(at.value,Te.value,st.value,!1);else{const t=null==(e=at.value.tenantOrderHolder)?void 0:e.verificationCode;if(!t||!ce(t))return void U({message:"请输入正确的验证码"});const{code:a,data:n}=await Oe(at.value.tenantOrderHolder.mobile,t);"10000"===a&&await ht(at.value,Te.value,st.value,!1)}})))}catch(t){}},Ct=e=>{"allFalse"===e?(ke.value=!1,Pt()):M.confirm({className:"xinao-custom-dialog",title:"提示",teleport:"#xinaoDialog",message:"被保人不符合健康要求，很抱歉暂时无法投保该产品",confirmButtonText:"选错了",cancelButtonText:"为其他人投保"}).then((()=>{})).catch((()=>{ke.value=!1}))},Vt=()=>{Ee.value=!1,vt.value.length<1?Pt():ke.value=!0},gt=()=>{ke.value=!1,Ee.value=!1};l((()=>at.value.tenantOrderInsuredList[0].relationToHolder),(()=>{We.value=!1,i((()=>{at.value.tenantOrderInsuredList[0]&&at.value.tenantOrderInsuredList[0].extInfo&&!at.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance&&(at.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance=Z.HAS),We.value=!0}))}),{deep:!0,immediate:!0});const _t=()=>{const{name:e,birthday:t,gender:a,certType:n,extInfo:{hasSocialInsurance:l}}=at.value.tenantOrderInsuredList[0];return!!(t&&a&&at.value.paymentFrequency&&e&&me(e)&&l)},bt=()=>{if(_t()&&(et.value="保费试算中..."),dt.value&&dt.value.productPremiumVOList){const e=dt.value.productPremiumVOList.find((e=>e.paymentFrequency===at.value.paymentFrequency));e&&(Ke.value=null,Ye.value=e.paymentFrequencyValue?Number(e.paymentFrequencyValue):null,Ze.value=e.premiumUnit,Xe.value=e.actualPremiumUnit)}};l([()=>dt.value,()=>at.value.activePlanCode,()=>at.value.paymentFrequency],(()=>{bt()}),{deep:!0,immediate:!0}),l([()=>at.value.tenantOrderInsuredList[0].birthday,()=>at.value.tenantOrderInsuredList[0].name,()=>at.value.tenantOrderInsuredList[0].gender,()=>at.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance,()=>at.value.activePlanCode,()=>at.value.paymentFrequency,()=>at.value.insurancePeriodValue],z((()=>{if(_t()){if(nt.value)return;ht(at.value,Te.value,st.value)}else bt()}),500)),l((()=>at.value.tenantOrderInsuredList[0]),(e=>{if(F(Ge.value))return null;const t=Ge.value[e.relationToHolder]||[];return 1===t.length&&(ne.SELF!==e.relationToHolder?at.value.tenantOrderInsuredList[0].dontFetchDefaultInfo||(at.value.tenantOrderInsuredList[0].dontFetchDefaultInfo=!0,at.value.tenantOrderInsuredList[0].certNo=at.value.tenantOrderInsuredList[0].certNo?at.value.tenantOrderInsuredList[0].certNo:t[0].cert[0].certNo,at.value.tenantOrderInsuredList[0].name=at.value.tenantOrderInsuredList[0].name?at.value.tenantOrderInsuredList[0].name:t[0].cert[0].certName,at.value.tenantOrderInsuredList[0].certType=at.value.tenantOrderInsuredList[0].certType?at.value.tenantOrderInsuredList[0].certType:t[0].cert[0].certType||R.CERT,at.value.tenantOrderInsuredList[0].mobile=at.value.tenantOrderInsuredList[0].mobile?at.value.tenantOrderInsuredList[0].mobile:t[0].contact[0].contactNo):at.value.tenantOrderHolder.dontFetchDefaultInfo||(at.value.tenantOrderHolder.dontFetchDefaultInfo=!0,at.value.tenantOrderHolder.certNo=at.value.tenantOrderHolder.certNo?at.value.tenantOrderHolder.certNo:t[0].cert[0].certNo,at.value.tenantOrderHolder.name=at.value.tenantOrderHolder.name?at.value.tenantOrderHolder.name:t[0].cert[0].certName,at.value.tenantOrderHolder.mobile=at.value.tenantOrderHolder.mobile?at.value.tenantOrderHolder.mobile:t[0].contact[0].contactNo,at.value.tenantOrderHolder.certType=at.value.tenantOrderHolder.certType?at.value.tenantOrderHolder.certType:t[0].contact[0].certType||R.CERT)),!1}),{immediate:!0,deep:!0});return i((()=>{j(be,(([{isIntersecting:e}],t)=>{xe.value=!e}))})),le(),D((()=>{var e;const t=ye.get(ee);if(t){const{tenantOrderHolder:a,tenantOrderInsuredList:n}=t;if(a&&(at.value.tenantOrderHolder={...a,certType:a.certType||R.CERT}),Array(n)&&n[0]){const t=n[0]||{};if(at.value.activePlanCode=t.planCode,t.tenantOrderProductListtenantOrderProductList&&t.tenantOrderProductList[0]&&t.tenantOrderProductList[0].tenantOrderRiskList){const a=null==(e=t.tenantOrderProductList[0].tenantOrderRiskList)?void 0:e.find((e=>"1"===String(e.riskType)));a&&(at.value.paymentFrequency=(null==a?void 0:a.paymentFrequency)?String(null==a?void 0:a.paymentFrequency):te.SINGLE)}}}})),q((()=>{(async()=>{await J({productCode:H,withInsureInfo:!0,tenantId:E}).then((e=>{var t,a;"10000"===e.code&&(Se.value={...e.data},document.title=(null==(a=null==(t=e.data)?void 0:t.tenantProductInsureVO)?void 0:a.productName)||"")})),await $({productCode:H}).then((e=>{"10000"===e.code&&(Fe.value=!0,Te.value=e.data)}))})(),setTimeout((async()=>{Je.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),A((()=>{ye.remove(ee)})),(e,t)=>{const a=o("van-config-provider");return d(),c(p,null,[L(a,{"theme-vars":m(b)},{default:g((()=>{var e,a,n,l,r,u,i,o,s;return[v("div",Re,[v("div",je,[L(ue,{url:null==(a=null==(e=Se.value)?void 0:e.tenantProductInsureVO)?void 0:a.banner[0]},null,8,["url"]),(null==(l=null==(n=Se.value)?void 0:n.tenantProductInsureVO)?void 0:l.bannerMove)?(d(),P(ue,{key:0,url:null==(u=null==(r=Se.value)?void 0:r.tenantProductInsureVO)?void 0:u.bannerMove[0],onClick:ft},null,8,["url"])):I("",!0),v("div",{ref_key:"observeRef",ref:be},null,512)]),L(He,{"show-service-config":"","data-source":null==(i=Se.value)?void 0:i.tenantProductInsureVO,"is-multiple-plan":m(lt),"active-plan-code":at.value.activePlanCode,"payment-frequency":at.value.paymentFrequency,"premium-info":{premium:Ke.value,unit:Ze.value,premiumLoadingText:et.value},onUpdateActivePlan:ct},null,8,["data-source","is-multiple-plan","active-plan-code","payment-frequency","premium-info"]),L(Ne,{ref_key:"detailScrollRef",ref:_e,detail:Se.value},{form:g((()=>[v("div",De,[qe,L(m(h),{ref_key:"formRef",ref:ge,"title-collection":{HOLDER:"本人信息（投保人）",INSURER:"为谁投保（被保人）"},"form-info":at.value,"need-desensitize":We.value,"send-sms-code":mt,"factor-object":m(it)||{}},k({_:2},[m(rt).length>1?{name:"holderName",fn:g((()=>[L(m(C),{"user-info":at.value.tenantOrderHolder,data:m(rt),onChange:Ot},null,8,["user-info","data"])]))}:void 0,m(rt).length>1?{name:"insurerName",fn:g((()=>[L(m(C),{title:"选择被保人","user-info":at.value.tenantOrderInsuredList[0],data:m(rt),onChange:yt},null,8,["user-info","data"])]))}:void 0]),1032,["form-info","need-desensitize","factor-object"])]),L(m(f),{"form-info":at.value,"insure-detail":Te.value,"config-detail":Se.value,"is-multiple-plan":m(lt),"premium-info":{premium:Ke.value,unit:Ze.value,minPremiun:Ye.value,actualUnit:Xe.value,premiumLoadingText:et.value},onUpdateActivePlan:ct},null,8,["form-info","insure-detail","config-detail","is-multiple-plan","premium-info"])])),_:1},8,["detail"]),(null==(o=Se.value)?void 0:o.tenantProductInsureVO.inscribedContent)?(d(),P(m(V),{key:0,"inscribed-content":null==(s=Se.value)?void 0:s.tenantProductInsureVO.inscribedContent},null,8,["inscribed-content"])):I("",!0),pt.value&&pt.value.length>0?(d(),P(m(_),{key:1,"attachement-list":pt.value,"pre-text":"请阅读",onPreviewFile:t[0]||(t[0]=e=>It(e))},null,8,["attachement-list"])):I("",!0),xe.value?(d(),c("div",Ae,[v("div",Be,[et.value?(d(),c("span",Ue,y(et.value),1)):Ke.value?(d(),c(p,{key:1},[v("span",null,y(m(B)(Ke.value)),1),v("span",null,y(Xe.value||"元"),1)],64)):(d(),c(p,{key:2},[v("span",null,y(Ye.value),1),v("span",null,y(Ze.value),1)],64))]),L(m(O),{disabled:m(nt),shadow:!1,"theme-vars":m(b),class:"right",text:"立即投保",onClick:Lt},{default:g((()=>[Me])),_:1},8,["disabled","theme-vars"])])):I("",!0)]),Fe.value?(d(),P(ie,{key:0,"product-detail":Se.value},null,8,["product-detail"])):I("",!0),ze]})),_:1},8,["theme-vars"]),L(m(s),{show:ke.value,"onUpdate:show":t[1]||(t[1]=e=>ke.value=e),"content-list":m(vt),"active-index":0,onOnConfirmHealth:Ct,onOnCloseHealthByMask:gt},null,8,["show","content-list"]),Ee.value?(d(),P(m(u),{key:0,show:Ee.value,"onUpdate:show":t[2]||(t[2]=e=>Ee.value=e),"content-list":pt.value,"is-only-view":Qe.value,"active-index":we.value,text:Qe.value?"关闭":"我已逐页阅读并确认告知内容","force-read-cound":0,"on-close-file-preview":"",onSubmit:Vt,onOnCloseFilePreviewByMask:gt},null,8,["show","content-list","is-only-view","active-index","text"])):I("",!0)],64)}}}),[["__scopeId","data-v-cf5ece7c"]]);export{$e as default};
