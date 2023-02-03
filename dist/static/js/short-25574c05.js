import{_ as e,d as a,aV as t,r as n,a8 as l,x as r,G as i,aO as s,b as o,q as u,c as d,g as c,i as v,F as p,l as m,h as f,B as y,t as h,j as I,e as O,n as g,f as P,I as b,Q as x,w as C,s as A,K as L,L as k,aW as V,aZ as _,aG as S,b3 as w,aA as T,u as E,a as F,a3 as R,aX as D,aY as N,aj as j,y as q,aM as H,aH as B,b4 as U,b5 as z,b6 as M,aC as G,Y as Q,T as $,a5 as Y}from"./index-ee3f880b.js";import{d as W}from"./debounce-9a1865fb.js";import{i as X,b as J,p as K,g as Z}from"./trial-1cc5de29.js";import{p as ee}from"./product-aea44c82.js";import{n as ae}from"./nextStep-0e057649.js";import{C as te,S as ne,R as le,O as re,m as ie}from"./infoCollection-46058048.js";import{k as se,j as oe}from"./trial-eddf4c63.js";import{u as ue,P as de}from"./index-4169ce32.js";import{u as ce}from"./theme-65292714.js";import{o as ve,g as pe,v as me,r as fe,t as ye}from"./utils-1794cabf.js";import{v as he}from"./validator-5a13dc82.js";import{B as Ie}from"./index-bf609659.js";import{s as Oe,c as ge}from"./phoneVerify-9f306213.js";import{s as Pe}from"./useStorage-2d580d31.js";import"./pdfh5-e5c0db2a.js";import"./core-6da98ebd.js";import"./index-c6b2b786.js";const be={class:"guarantee-list"},xe=(e=>(L("data-v-3cd38ef7"),e=e(),k(),e))((()=>v("span",null,"保障计划",-1))),Ce={key:0,class:"picture-payment-content"},Ae=["onClick"],Le=["src"],ke=["src"],Ve={key:1,class:"plan-list"},_e=["onClick"],Se={key:2,class:"feerate-view"},we={key:0},Te={class:"extinfo-info-list"},Ee={class:"guarantee-detail"},Fe={class:"content"};var Re=e(a({props:{dataSource:{type:Object,default:()=>{}},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:5},activePlanCode:{type:String,default:""},isMultiplePlan:{type:Boolean,default:!1},paymentFrequency:{type:String,default:""},premiumInfo:{type:Object,default:()=>{}}},emits:["update-active-plan"],setup(e,{emit:a}){var L;const k=e;t((e=>({b3fa18e6:$.value})));const V=n(null==(L=k.dataSource)?void 0:L.planList),_=n(k.activePlanCode),S=n();l([()=>k.dataSource,()=>k.activePlanCode],(()=>{var e,a;k.isMultiplePlan&&(V.value=null==(e=k.dataSource)?void 0:e.planList,_.value=k.activePlanCode,S.value=null==(a=k.dataSource)?void 0:a.planList.findIndex((e=>e.planCode===_.value)))}),{immediate:!0});const w=n([]),T=n([]),E=n(),F=r((()=>k.isMultiplePlan?k.dataSource.planList.map((e=>e.planPicList?{...e.planPicList,planCode:e.planCode,planName:e.planName}:null)).filter((e=>!!e)):[]));l([()=>k.dataSource,()=>k.activePlanCode,()=>k.paymentFrequency,()=>_.value],(()=>{var e,a,t,n,l;if(k.isMultiplePlan){if(V.value&&V.value.length>0){let e=0;const a=V.value.findIndex((e=>e.planCode===_.value));a>-1&&(e=a),w.value=V.value[e].guaranteeItemVOS,T.value=V.value[e].extInfoVOList;const t=V.value[e].productPremiumVOList.find((e=>e.paymentFrequency===k.paymentFrequency));E.value=t||(null==(l=V.value[e])?void 0:l.productPremiumVOList[0])}}else{w.value=null==(e=k.dataSource)?void 0:e.planInsureVO.guaranteeItemVOS,T.value=null==(a=k.dataSource)?void 0:a.planInsureVO.extInfoVOList;const l=null==(t=k.dataSource)?void 0:t.planInsureVO.productPremiumVOList.find((e=>e.paymentFrequency===k.paymentFrequency));E.value=l||(null==(n=k.dataSource)?void 0:n.planInsureVO.productPremiumVOList[0])}}),{immediate:!0,deep:!0});const R=r((()=>{var e;return(null==(e=k.dataSource)?void 0:e.rateUri)||""})),D=r((()=>!!(E.value&&E.value.paymentFrequencyValue&&E.value.premiumUnit&&R))),[N,j]=i(!1),q=r((()=>{var e;return!(!w.value||!(null==(e=w.value)?void 0:e.length))&&(w.value.length>k.count&&(!!k.isShowClose||!N.value))})),H=()=>{j()},B=r((()=>{var e;return w.value&&(null==(e=w.value)?void 0:e.length)?w.value.length<=k.count||N.value?w.value:w.value.slice(0,k.count):[]})),U=e=>{var a;_.value=e,S.value=null==(a=k.dataSource)?void 0:a.planList.findIndex((e=>e.planCode===_.value))},z=n(!1),M=()=>{z.value=!0},G=()=>{ve({fileType:"pdf",fileUri:R.value})},Q=e=>{_.value=V.value[e.name].planCode},$=n("");return l([()=>_.value,()=>z.value],(()=>{s((()=>{(()=>{var e,a;const t=((null==(e=document.querySelector(".guarantee-popup .extinfo-info-list"))?void 0:e.clientHeight)||0)+1,n=t+((null==(a=document.querySelector(".guarantee-popup .custom-plan-tab"))?void 0:a.clientHeight)||0)+(t?5:0);$.value=`calc( 100% - ${n}px )`})()}))})),(a,t)=>{var n,l;const r=o("ProCell"),i=o("ProTab"),s=o("ProPopup"),L=u("dompurify-html");return d(),c(p,null,[v("div",be,[v("div",{class:"header"},[xe,v("span",{onClick:M},"查看详情")]),e.isMultiplePlan?(d(),c(p,{key:0},[m(F).length>0?(d(),c("div",Ce,[(d(!0),c(p,null,f(m(F),(e=>(d(),c("div",{key:e.planCode,class:y("picture-payment-item"),onClick:a=>U(e.planCode)},[_.value==e.planCode?(d(),c("img",{key:0,src:e.selectedPic},null,8,Le)):(d(),c("img",{key:1,src:e.unSelectedPic},null,8,ke))],8,Ae)))),128))])):(d(),c("div",Ve,[(d(!0),c(p,null,f(V.value,((e,a)=>(d(),c("div",{key:`${e.planCode}_${a}`,class:y("plan-list-item "+(e.planCode===_.value?"plan-list-item-active":"")),onClick:a=>U(e.planCode)},[v("span",null,h(e.planName),1)],10,_e)))),128))]))],64)):I("",!0),(d(!0),c(p,null,f(m(B),((e,a)=>(d(),O(r,{key:a,class:"guarantee-item",title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),m(q)?(d(),c("div",{key:1,class:"show-more",onClick:H},[g(h(m(N)?"收起":"查看更多")+" ",1),P(b,{name:"arrow-down-dobule",class:y(["icon",{showMore:m(N)}])},null,8,["class"])])):I("",!0),m(D)?(d(),c("div",Se,[v("span",null,h(`${(null==(n=E.value)?void 0:n.paymentFrequencyValue)||""}${(null==(l=E.value)?void 0:l.premiumUnit)||""}`),1),m(R)?(d(),c("span",{key:0,onClick:G},"查看保费")):I("",!0)])):I("",!0)]),P(x),P(s,{show:z.value,"onUpdate:show":t[1]||(t[1]=e=>z.value=e),title:"保障详情",class:"guarantee-popup"},{default:C((()=>[T.value&&T.value.length>0?(d(),c("div",we,[v("div",Te,[(d(!0),c(p,null,f(T.value,((e,a)=>(d(),O(r,{key:a,title:e.name,content:e.description,border:!1,size:"small"},null,8,["title","content"])))),128))]),P(x)])):I("",!0),e.isMultiplePlan?(d(),O(i,{key:1,active:S.value,"onUpdate:active":t[0]||(t[0]=e=>S.value=e),list:V.value.map(((e,a)=>({title:e.planName}))),class:"custom-plan-tab",onClickTab:Q},null,8,["active","list"])):I("",!0),v("div",Ee,[(d(!0),c(p,null,f(w.value,((e,a)=>(d(),c("div",{key:a,class:"guarantee-item"},[P(r,{title:e.title,content:e.desc,border:!1,size:"small"},null,8,["title","content"]),A(v("div",Fe,null,512),[[L,e.content]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-3cd38ef7"]]);const De={class:"spec"},Ne={key:1,class:"spec"};var je=e(a({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""},detail:{type:Object,default:()=>{}}},setup(e,{expose:a}){const t=e,l=V((()=>_((()=>import("./index-ee3f880b.js").then((function(e){return e.bp}))),["static/js/index-ee3f880b.js","static/css/index-3be7aaa8.css","static/js/pdfh5-e5c0db2a.js"]))),i=V((()=>_((()=>import("./index-99ebbad2.js")),["static/js/index-99ebbad2.js","static/css/index-f22f2764.css","static/js/index-ee3f880b.js","static/css/index-3be7aaa8.css","static/js/pdfh5-e5c0db2a.js"]))),s=V((()=>_((()=>import("./index-ee3f880b.js").then((function(e){return e.bn}))),["static/js/index-ee3f880b.js","static/css/index-3be7aaa8.css","static/js/pdfh5-e5c0db2a.js"]))),u=V((()=>_((()=>import("./index-91647783.js")),["static/js/index-91647783.js","static/css/index-7b3feb06.css","static/js/index-ee3f880b.js","static/css/index-3be7aaa8.css","static/js/pdfh5-e5c0db2a.js"]))),y=V((()=>_((()=>import("./index-7ef735c2.js")),["static/js/index-7ef735c2.js","static/css/index-bfbfdd15.css","static/js/index-ee3f880b.js","static/css/index-3be7aaa8.css","static/js/pdfh5-e5c0db2a.js"]))),h=n(),g=n([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),b=r((()=>{var e,a,n,l;return(null==(a=null==(e=t.detail)?void 0:e.tenantProductInsureVO)?void 0:a.spec)&&(null==(l=null==(n=t.detail)?void 0:n.tenantProductInsureVO)?void 0:l.spec.length)>0})),x=r((()=>{var e,a,n,l,r,i,s,o,u,d,c,v,p,m;const f=null==(a=null==(e=t.detail)?void 0:e.tenantProductInsureVO)?void 0:a.settlementProcessVO.settlementProcessType;return!!(f===te.WORD&&(null==(r=null==(l=null==(n=t.detail)?void 0:n.tenantProductInsureVO)?void 0:l.settlementProcessVO)?void 0:r.settlementProcessList)&&(null==(o=null==(s=null==(i=t.detail)?void 0:i.tenantProductInsureVO)?void 0:s.settlementProcessVO)?void 0:o.settlementProcessList.length)>0||f===te.IMAGE&&(null==(c=null==(d=null==(u=t.detail)?void 0:u.tenantProductInsureVO)?void 0:d.settlementProcessVO)?void 0:c.settlementProcessPicList)&&(null==(m=null==(p=null==(v=t.detail)?void 0:v.tenantProductInsureVO)?void 0:p.settlementProcessVO)?void 0:m.settlementProcessPicList.length)>0)})),A=r((()=>{var e,a,n,l;return(null==(a=null==(e=t.detail)?void 0:e.tenantProductInsureVO)?void 0:a.questionList)&&(null==(l=null==(n=t.detail)?void 0:n.tenantProductInsureVO)?void 0:l.questionList.length)>0})),L=r((()=>{let e=[...g.value];return b.value||(e=e.filter((e=>"tab1"!==e.slotName))),x.value||A.value||(e=e.filter((e=>"tab2"!==e.slotName))),e}));return a({handleClickTab:()=>{var e;return null==(e=h.value)?void 0:e.handleClickTab}}),(e,a)=>{const n=o("van-image"),r=o("ProSvg");return d(),O(m(l),{ref_key:"scrollRef",ref:h,class:"tabs",list:m(L),sticky:"",scrollspy:""},S({tab3:C((()=>[T(e.$slots,"form",{},void 0,!0)])),_:2},[m(b)?{name:"tab1",fn:C((()=>{var e,a;return[v("div",De,[(d(!0),c(p,null,f((null==(a=null==(e=t.detail)?void 0:e.tenantProductInsureVO)?void 0:a.spec)||[],((e,a)=>(d(),O(w,{key:a},{fallback:C((()=>[P(r,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:C((()=>[(d(),O(n,{key:a,class:"detail-img",width:"100%",src:e},null,8,["src"]))])),_:2},1024)))),128)),P(m(s))])]}))}:void 0,m(x)||m(A)?{name:"tab2",fn:C((()=>{var e,a;return[m(x)?(d(),c(p,{key:0},[(null==(a=null==(e=t.detail)?void 0:e.tenantProductInsureVO)?void 0:a.settlementProcessVO.settlementProcessType)===m(te).WORD?(d(),O(m(u),{key:0,title:"理赔说明"},{default:C((()=>{var e,a,n;return[P(m(i),{list:null==(n=null==(a=null==(e=t.detail)?void 0:e.tenantProductInsureVO)?void 0:a.settlementProcessVO)?void 0:n.settlementProcessList},null,8,["list"])]})),_:1})):(d(),c("div",Ne,[(d(),O(w,null,{fallback:C((()=>[P(r,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:C((()=>{var e,a,l;return[(d(!0),c(p,null,f((null==(l=null==(a=null==(e=t.detail)?void 0:e.tenantProductInsureVO)?void 0:a.settlementProcessVO)?void 0:l.settlementProcessPicList)||[],((e,a)=>(d(),O(n,{key:a,width:"100%",src:e,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),P(m(s))],64)):I("",!0),m(A)?(d(),c(p,{key:1},[P(m(u),{title:"常见问题"},{default:C((()=>{var e,a;return[P(m(y),{list:null==(a=null==(e=t.detail)?void 0:e.tenantProductInsureVO)?void 0:a.questionList},null,8,["list"])]})),_:1}),P(m(s))],64)):I("",!0)]}))}:void 0]),1032,["list"])}}}),[["__scopeId","data-v-6dc907f2"]]);const qe=e=>(L("data-v-5dbe2773"),e=e(),k(),e),He={key:0},Be=[qe((()=>v("div",{class:"__skeleton_short_content__"},[v("div",{class:"van-config-provider sk",style:{"--van-primary-color":"#0d6efe","--van-primary-color-light8":"#0d6efe80","--van-primary-color-light1":"#0d6efe10","--van-primary-color-light2":"#0d6efe20","--van-danger-color":"#FF3C10","--van-primary-background-color":"#0d6efe20","--van-button-primary-background-color":"#0d6efe","--van-button-primary-border-color":"#0d6efe","--van-checkbox-checked-bg-color":"#0d6efe10","--van-switch-on-background-color":"#0d6efe","--van-toast-default-padding":"14px","--van-linear-bg":"linear-gradient(to right, #0d6efe, rgba(13,150,254,1))","--van-popup-close-icon-margin":"20px","--van-popup-round-border-radius":"20px","--van-card-title":"#0d6efe","--van-card-cell-color":"#0d6efe80","--van-radio-checked-icon-color":"#0d6efe","--van-pro-check-radius":"40px"}},[v("div",{class:"page-internet-product-detail"},[v("div",{class:"info"},[v("div",{class:"van-image banner",style:{width:"375px",height:"223px"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},[v("img",{class:"van-image__img","data-src":"https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/common/20221222/e3719801cf6546449e18e06f3bbe8416/%E5%B0%8A%E4%BA%ABe%E7%94%9F.png?Expires=1672370686&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=9cXeLDrownXrYpVvPikShh7u2Fw%3D",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",lazy:"loaded",style:{background:"rgb(238, 238, 238)"}})]),v("div")]),v("div",{class:"base-insurance-guarantee guarantee-list"},[v("div",{class:"header"},[v("span",null,[v("span",{class:"sk-text",style:{"--fp":"14.86%","--sp":"85.14%","--lh":"18.4999px"}},"保障计划")]),v("span",null,[v("span",{class:"sk-text",style:{"--fp":"14.86%","--sp":"85.14%","--lh":"18.4999px"}},"查看详情")])]),v("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[v("div",{class:"cell-container"},[v("div",{class:"left-part large"},[v("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"一般医疗保险金")]),v("div",{class:"divider"}),v("div",{class:"right-part"},[v("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高300万")])])]),v("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[v("div",{class:"cell-container"},[v("div",{class:"left-part large"},[v("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"重大疾病医疗保险金")]),v("div",{class:"divider"}),v("div",{class:"right-part"},[v("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高600万")])])]),v("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[v("div",{class:"cell-container"},[v("div",{class:"left-part large"},[v("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"恶性肿瘤质子重离子医疗")]),v("div",{class:"divider"}),v("div",{class:"right-part"},[v("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高600万")])])]),v("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[v("div",{class:"cell-container"},[v("div",{class:"left-part large"},[v("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"恶性肿瘤院外特定药品费用医疗")]),v("div",{class:"divider"}),v("div",{class:"right-part"},[v("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高600万")])])]),v("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[v("div",{class:"cell-container"},[v("div",{class:"left-part large"},[v("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"恶性肿瘤特定器械耗材费用医疗责任 （适用于女性被保险人）")]),v("div",{class:"divider"}),v("div",{class:"right-part"},[v("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高100万")])])]),v("div",{class:"show-more"},[v("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"16.799999999999997px"}},"查看更多 "),v("svg",{class:"svg-icon icon-arrow-down-dobule icon icon"},[v("use",{"xlink:href":"#icon-arrow-down-dobule"})])]),v("div",{class:"feerate-view sk-border"},[v("span",null,[v("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"142.00元/年起")])])]),v("div",{class:"com-divider"}),v("div",{class:"tabs",sticky:"",scrollspy:""},[v("div",null,[v("div",{class:"van-sticky"},[v("div",{class:"van-tabs"},[v("div",{id:"tab-list",class:"tab-list"},[v("a",{class:"tab-title active",title:"产品亮点"},[v("span",{class:"sk-text",style:{"--fp":"31.82%","--sp":"68.18%","--lh":"43.9999px"}},"产品亮点")]),v("a",{class:"tab-title",title:"理赔说明"},[v("span",{class:"sk-text",style:{"--fp":"31.82%","--sp":"68.18%","--lh":"43.9999px"}},"理赔说明")]),v("a",{class:"tab-title",title:"我要投保"},[v("span",{class:"sk-text",style:{"--fp":"31.82%","--sp":"68.18%","--lh":"43.9999px"}},"我要投保")])])])])]),v("div",{class:"tab-content"},[v("div",{id:"tab1"},[v("div",{class:"spec"},[v("div",{class:"van-image detail-img",style:{width:"100%"}},[v("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",class:"van-image__img",style:{background:"rgb(238, 238, 238)"}})])])])])])])])],-1)))],Ue={class:"page-internet-product-detail"},ze={class:"info"},Me={class:"custom-page-form"},Ge=qe((()=>v("div",{class:"form-title"},"请填写投保信息",-1))),Qe={key:0,class:"footer-area"},$e={class:"price"},Ye={key:0},We=g("分享"),Xe=g(h("立即投保")),Je=qe((()=>v("div",{id:"xinaoDialog"},null,-1)));var Ke=e(a({setup(e){var a,t;const i=V((()=>_((()=>import("./index-2669fd84.js")),["static/js/index-2669fd84.js","static/css/index-ea588f10.css","static/js/index-ee3f880b.js","static/css/index-3be7aaa8.css","static/js/pdfh5-e5c0db2a.js","static/js/theme-65292714.js","static/js/index-03b51b64.js","static/css/index-2dbcd337.css","static/js/utils-1794cabf.js","static/js/infoCollection-46058048.js","static/js/useStorage-2d580d31.js","static/js/trial-eddf4c63.js"]))),u=V((()=>_((()=>import("./index-3c56bcdf.js")),["static/js/index-3c56bcdf.js","static/css/index-c743ae40.css","static/js/theme-65292714.js","static/js/index-ee3f880b.js","static/css/index-3be7aaa8.css","static/js/pdfh5-e5c0db2a.js"]))),f=V((()=>_((()=>import("./index-eaabe2f0.js")),["static/js/index-eaabe2f0.js","static/css/index-dff4ebf8.css","static/js/infoCollection-46058048.js","static/js/index-ee3f880b.js","static/css/index-3be7aaa8.css","static/js/pdfh5-e5c0db2a.js","static/js/useDicData-b6cb47ae.js","static/js/trial-eddf4c63.js","static/js/utils-1794cabf.js","static/js/useStorage-2d580d31.js"]))),y=V((()=>_((()=>import("./index-03b51b64.js")),["static/js/index-03b51b64.js","static/css/index-2dbcd337.css","static/js/index-ee3f880b.js","static/css/index-3be7aaa8.css","static/js/pdfh5-e5c0db2a.js"]))),g=V((()=>_((()=>import("./index-901cdef7.js")),["static/js/index-901cdef7.js","static/css/index-6733e696.css","static/js/index-ee3f880b.js","static/css/index-3be7aaa8.css","static/js/pdfh5-e5c0db2a.js","static/js/infoCollection-46058048.js","static/js/relativeTime-190c9ccf.js","static/js/validator-5a13dc82.js","static/js/useDicData-b6cb47ae.js"]))),b=V((()=>_((()=>import("./index-9d7a14ce.js")),["static/js/index-9d7a14ce.js","static/css/index-a14d73ae.css","static/js/index-ee3f880b.js","static/css/index-3be7aaa8.css","static/js/pdfh5-e5c0db2a.js"]))),x=V((()=>_((()=>import("./index-33bbfa30.js")),["static/js/index-33bbfa30.js","static/css/index-607986ff.css","static/js/index-ee3f880b.js","static/css/index-3be7aaa8.css","static/js/pdfh5-e5c0db2a.js"]))),A=V((()=>_((()=>import("./index-68271bc1.js")),["static/js/index-68271bc1.js","static/css/index-b9ba3011.css","static/js/index-ee3f880b.js","static/css/index-3be7aaa8.css","static/js/pdfh5-e5c0db2a.js"]))),L=ce();E();const k=F(),{productCode:w="",tenantId:T,agentCode:te="",agencyCode:ve,saleChannelId:be,extraInfo:xe,insurerCode:Ce,preview:Ae}=k.query;let Le={};try{Le=JSON.parse(decodeURIComponent(xe))}catch(qa){}const{openId:ke}=Le,Ve=n(),_e=n(),Se=n(),we=n(!1),Te=n(),Ee=n(),Fe=n(!1),De=n(!1),Ne=n(0),qe=n(!1),Ke=n({}),Ze=n({}),ea=n(!0),aa=n(!0),ta=n(!0),na=n(""),la=n(),ra=n(),ia=n(""),sa=n(""),oa=n("");ke&&ue({openId:ke},(e=>{Ze.value=e}));const ua="jumpToPage",da=n({imgUrl:"",desc:"",title:"",link:window.location.href}),ca=n({tenantId:T,agencyId:ve,agentCode:te,orderCategory:1,saleUserId:te,saleChannelId:be,venderCode:Ce,productCode:w,insuranceStartDate:null,insuranceEndDate:null,activePlanCode:"",paymentFrequency:"",premium:0,insurancePeriodValue:se.YEAR_1,commencementTime:"",tenantOrderHolder:{extInfo:{hasSocialInsurance:ne.HAS,occupationCodeList:[]}},tenantOrderInsuredList:[{dontFetchDefaultInfo:!1,relationToHolder:le.SELF,extInfo:{hasSocialInsurance:ne.HAS,occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}],tenantOrderProductList:[{tenantId:T,productCode:(null==(a=Te.value)?void 0:a.productCode)||"",planCode:"",productName:(null==(t=Te.value)?void 0:t.productName)||"",premium:la.value||0,tenantOrderRiskList:[]}]}],extInfo:{buttonCode:"EVENT_SHORT_saveOrder",pageCode:"productInfo",extraInfo:Le,templateId:(null==Le?void 0:Le.templateId)||"1",iseeBizNo:""},operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),va=r((()=>!!Ae)),pa=r((()=>{var e,a,t,n,l,r;return!!Te.value&&!!((null==(a=null==(e=Te.value)?void 0:e.tenantProductInsureVO)?void 0:a.planList)&&Array.isArray(null==(n=null==(t=Te.value)?void 0:t.tenantProductInsureVO)?void 0:n.planList)&&(null==(r=null==(l=Te.value)?void 0:l.tenantProductInsureVO)?void 0:r.planList.length)>0)})),ma=r((()=>{if(Ze.value){const e=[];return Object.keys(Ze.value).forEach((a=>{e.push(...Ze.value[a])})),e}return[]})),fa=r((()=>ma.value.length>0)),ya=r((()=>{var e,a,t;let n={};if((null==(e=Ee.value)?void 0:e.productFactor)?n=null==(a=Ee.value)?void 0:a.productFactor:ca.value.activePlanCode&&(n=(null==(t=Ee.value)?void 0:t.planFactor[ca.value.activePlanCode])||{}),fa.value&&n[1]){const e=n[1].findIndex((e=>"verificationCode"===e.code&&1===e.isDisplay));e>-1&&(n[1][e].isDisplay=2)}return n})),ha=r((()=>{const e={holder:!1,insured:!1};if(ya.value[1]){ya.value[1].findIndex((e=>"social"===e.code&&e.isDisplay===Q.YES))>-1&&(e.holder=!0)}if(ya.value[2]){ya.value[2].findIndex((e=>"social"===e.code&&e.isDisplay===Q.YES))>-1&&(e.insured=!0)}return e})),Ia=r((()=>{var e;const a=(null==(e=ya.value)?void 0:e[2])||[],t=a.findIndex((e=>"certType"===e.code));if(t>-1){const{attributeValues:e,isDisplay:n}=a[t]||{};if(1===n){const a=JSON.parse(e);if(a.length>1)return!1;if(1===a.length&&"1"!==a[0].code)return!1}return!0}return!1})),Oa=r((()=>{if(ya.value[1]){if(ya.value[1].findIndex((e=>"verificationCode"===e.code&&1===e.isDisplay))>-1)return!0}return!1}));l((()=>pa.value),(()=>{var e,a;pa.value&&(ca.value.activePlanCode=ca.value.activePlanCode?ca.value.activePlanCode:null==(a=null==(e=Te.value)?void 0:e.tenantProductInsureVO)?void 0:a.planList[0].planCode)}),{immediate:!0});const ga=r((()=>{var e,a,t;return pa.value?(null==(a=null==(e=Ee.value)?void 0:e.productRelationPlanVOList.find((e=>e.planCode===ca.value.activePlanCode)))?void 0:a.productRiskVoList)||[]:(null==(t=Ee.value)?void 0:t.productRiskVoList)||[]})),Pa=r((()=>{var e;if(!Te.value)return{};if(pa.value){const a=null==(e=Te.value)?void 0:e.tenantProductInsureVO.planList.find((e=>e.planCode===ca.value.activePlanCode));return a||{}}return Te.value.tenantProductInsureVO.planInsureVO})),ba=e=>{ca.value.activePlanCode=e},xa=r((()=>{var e,a,t;if((null==(e=Ee.value)?void 0:e.productQuestionnaireVOList)&&(null==(a=Ee.value)?void 0:a.productQuestionnaireVOList.length)>0){const e=null==(t=Ee.value)?void 0:t.productQuestionnaireVOList[0];if(e){const{basicInfo:{questionnaireType:a},questions:t}=e.questionnaireDetailResponseVO||{};return"2"===String(a)?[{attachmentName:null==e?void 0:e.questionnaireName,attachmentUri:t,attachmentType:"question"}]:[{attachmentName:null==e?void 0:e.questionnaireName,attachmentUri:t[0].content,attachmentType:pe(String(t[0].textType),t[0].content)}]}}return[]})),Ca=n();l([()=>pa.value,()=>ca.value.activePlanCode,()=>Te.value],(()=>{var e,a;let t=null;if(pa.value&&Te.value){const a=null==(e=Te.value)?void 0:e.tenantProductInsureVO.planList.find((e=>e.planCode===(ca.value.activePlanCode||"")));a&&(t=null==a?void 0:a.attachmentVOList)}else Te.value&&(t=null==(a=Te.value)?void 0:a.tenantProductInsureVO.planInsureVO.attachmentVOList);Ca.value=t?Object.keys(t).map((e=>(t[e].forEach((e=>{e.attachmentType=pe(String(e.attachmentType),e.attachmentUri)})),{attachmentName:e,attachmentList:t[e]}))):[]}),{immediate:!0});const Aa=async({mobile:e,type:a},t)=>{var n;if(Ve.value){if(va.value)return void(null==t||t());null==(n=Ve.value)||n.validateForm(`${a}_mobile`).then((async()=>{const a=await Oe(e),{code:n,data:l}=a;"10000"===n&&(null==t||t())}))}},La=()=>{_e.value.handleClickTab()("tab3")},ka=e=>{aa.value=!1,Object.assign(ca.value.tenantOrderHolder,e),s((()=>{aa.value=!0}))},Va=e=>{aa.value=!1,Object.assign(ca.value.tenantOrderInsuredList[0],e),s((()=>{aa.value=!0}))},_a=e=>{Ne.value=e,De.value=!0},Sa=async()=>{try{await ae(((e={},a={},t={})=>{var n;const l={...t},r={tenantId:T,riskList:(null==(n=l.tenantOrderInsuredList[0])?void 0:n.tenantOrderProductList[0].riskVOList)||[],riskPremium:a,productId:null==e?void 0:e.productBasicInfoVO.id};return l.extInfo.iseeBizNo=na.value,l.productCode=e.productBasicInfoVO.productCode,l.commencementTime=l.insuranceStartDate,l.expiryDate=l.insuranceEndDate,l.paymentFrequency=l.paymentFrequency||ie.SINGLE,l.tenantOrderHolder={...l.tenantOrderHolder,socialFlag:ha.value.holder?l.tenantOrderHolder.extInfo.hasSocialInsurance:null,certType:l.tenantOrderHolder.certType||R.CERT,extInfo:{...l.tenantOrderHolder.extInfo,hasSocialInsurance:ha.value.holder?l.tenantOrderHolder.extInfo.hasSocialInsurance:null}},l.tenantOrderInsuredList=l.tenantOrderInsuredList.map((e=>({...e,certType:e.certType||R.CERT,socialFlag:ha.value.insured?e.socialFlag:null,planCode:ca.value.activePlanCode?ca.value.activePlanCode:null,extInfo:{...e.extInfo,hasSocialInsurance:ha.value.insured?e.extInfo.hasSocialInsurance:null}}))),l.tenantOrderInsuredList[0].tenantOrderProductList[0]={premium:la.value,productCode:e.productBasicInfoVO.productCode,productName:e.productBasicInfoVO.productName,planCode:ca.value.activePlanCode?ca.value.activePlanCode:null,tenantOrderRiskList:ye(r)},l})(Ee.value,Ke.value,ca.value),(async(e,a)=>{a===ua&&(null==e?void 0:e.orderNo)&&await(async e=>{try{const{code:a,data:t}=await Z({orderNo:e,tenantId:T});"10000"===a&&(t.extInfo={...t.extInfo,buttonCode:"EVENT_SHORT_underWrite"},await ae(t))}catch(qa){}})(null==e?void 0:e.orderNo)}))}catch(qa){}},wa=async(e,a,t,n=!0)=>{var l,r;try{oa.value="保费试算中...";const i=fe(t).map((a=>({...a,paymentFrequency:e.paymentFrequency||ie.SINGLE,insurancePeriodValue:e.insurancePeriodValue,coveragePeriod:e.insurancePeriodValue}))),s={tenantId:T,productCode:null==(l=Te.value)?void 0:l.productCode,productId:null==(r=Te.value)?void 0:r.id,insuranceStartDate:e.insuranceStartDate,insuranceEndDate:e.insuranceEndDate,commencementTime:e.insuranceStartDate,expiryDate:e.insuranceEndDate,paymentFrequency:e.paymentFrequency||ie.SINGLE,holder:{personVO:{...e.tenantOrderHolder,socialFlag:ha.value.holder?e.tenantOrderHolder.extInfo.hasSocialInsurance:null,certType:e.tenantOrderHolder.certType||R.CERT,extInfo:{...e.tenantOrderHolder.extInfo,hasSocialInsurance:ha.value.holder?e.tenantOrderHolder.extInfo.hasSocialInsurance:null}}},insuredVOList:e.tenantOrderInsuredList.map((e=>({insuredCode:"",relationToHolder:e.relationToHolder,personVO:{...e,socialFlag:ha.value.insured?e.extInfo.hasSocialInsurance:null,certType:e.certType||R.CERT,extInfo:{...e.extInfo,hasSocialInsurance:ha.value.insured?e.extInfo.hasSocialInsurance:null}},productPlanVOList:[{insurerCode:a.productBasicInfoVO.insurerCode,planCode:ca.value.activePlanCode?ca.value.activePlanCode:null,riskVOList:i}]})))},{code:o,message:u}=await J(s);if("10000"===o){const{code:e,data:a}=await K(s);if("10000"===e){if(oa.value="",ca.value.tenantOrderInsuredList[0].tenantOrderProductList=s.insuredVOList[0].productPlanVOList,la.value=null==a?void 0:a.premium,ca.value.premium=a.premium,ca.value.orderAmount=a.premium,ca.value.orderRealAmount=a.premium,!n){const e={};a.riskPremiumDetailVOList&&a.riskPremiumDetailVOList.length&&a.riskPremiumDetailVOList.forEach((a=>{e[a.riskCode]={premium:a.premium,amount:a.amount}})),Ke.value=e,Ca.value.length>0?(ea.value=!1,_a(0)):xa.value.length>0?Fe.value=!0:await Sa()}}else oa.value=""}else oa.value="",$(u)}catch(qa){oa.value=""}},Ta=async()=>{var e;try{Fe.value=!1,De.value=!1,Ve.value&&(null==(e=Ve.value)||e.validateForm().then((async()=>{var e;if(fa.value||!Oa.value)await wa(ca.value,Ee.value,ga.value,!1);else{const a=null==(e=ca.value.tenantOrderHolder)?void 0:e.verificationCode;if(!a||!me(a))return void $({message:"请输入正确的验证码"});const{code:t,data:n}=await ge(ca.value.tenantOrderHolder.mobile,a);"10000"===t&&await wa(ca.value,Ee.value,ga.value,!1)}})).catch((()=>{const e=document.querySelector(".form-title");e&&e.scrollIntoView()})))}catch(a){}},Ea=e=>{"allFalse"===e?(Fe.value=!1,Sa()):Y.confirm({className:"xinao-custom-dialog",title:"提示",teleport:"#xinaoDialog",message:"被保人不符合健康要求，很抱歉暂时无法投保该产品",confirmButtonText:"选错了",cancelButtonText:"为其他人投保"}).then((()=>{})).catch((()=>{Fe.value=!1}))},Fa=()=>{De.value=!1,xa.value.length<1?Sa():Fe.value=!0},Ra=()=>{Fe.value=!1,De.value=!1};l((()=>ca.value.tenantOrderInsuredList[0].relationToHolder),(()=>{aa.value=!1,s((()=>{const{certType:e,extInfo:a}=ca.value.tenantOrderInsuredList[0];a&&!a.hasSocialInsurance&&(ca.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance=ne.HAS),Ia.value&&!e&&(ca.value.tenantOrderInsuredList[0].certType=R.CERT),aa.value=!0}))}),{deep:!0,immediate:!0});const Da=()=>{const{name:e,birthday:a,gender:t,certType:n,extInfo:{hasSocialInsurance:l}}=ca.value.tenantOrderInsuredList[0];return!!(a&&t&&ca.value.paymentFrequency&&e&&he(e)&&l)},Na=()=>{if(Da()&&(oa.value="保费试算中..."),Pa.value&&Pa.value.productPremiumVOList){const e=Pa.value.productPremiumVOList.find((e=>e.paymentFrequency===ca.value.paymentFrequency));e&&(la.value=null,ra.value=e.paymentFrequencyValue?Number(e.paymentFrequencyValue):null,ia.value=e.premiumUnit,sa.value=e.actualPremiumUnit)}};l([()=>Pa.value,()=>ca.value.activePlanCode,()=>ca.value.paymentFrequency],(()=>{Na()}),{deep:!0,immediate:!0}),l([()=>ca.value.tenantOrderInsuredList[0].birthday,()=>ca.value.tenantOrderInsuredList[0].name,()=>ca.value.tenantOrderInsuredList[0].gender,()=>ca.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance,()=>ca.value.activePlanCode,()=>ca.value.paymentFrequency,()=>ca.value.insurancePeriodValue],W((()=>{if(Da()){if(va.value)return;wa(ca.value,Ee.value,ga.value)}else Na()}),500)),l((()=>ca.value.tenantOrderInsuredList[0]),(e=>{if(D(Ze.value))return null;const a=Ze.value[e.relationToHolder]||[];if(1===a.length)if(oe.SELF!==e.relationToHolder){const{dontFetchDefaultInfo:e,certNo:t,name:n,certType:l,mobile:r}=ca.value.tenantOrderInsuredList[0];e||Object.assign(ca.value.tenantOrderInsuredList[0],{dontFetchDefaultInfo:!0,certNo:t||a[0].cert[0].certNo,name:n||a[0].cert[0].certName,certType:l||a[0].cert[0].certType||R.CERT,mobile:r||a[0].contact[0].contactNo})}else{const{dontFetchDefaultInfo:e,certNo:t,name:n,certType:l,mobile:r}=ca.value.tenantOrderHolder;e||Object.assign(ca.value.tenantOrderHolder,{dontFetchDefaultInfo:!0,certNo:t||a[0].cert[0].certNo,name:n||a[0].cert[0].certName,certType:l||a[0].cert[0].certType||R.CERT,mobile:r||a[0].contact[0].contactNo})}return!1}),{immediate:!0,deep:!0});const ja=async()=>{await ee({productCode:w,withInsureInfo:!0,tenantId:T}).then((e=>{var a,t,n,l;if("10000"===e.code){Te.value={...e.data},document.title=(null==(t=null==(a=e.data)?void 0:a.tenantProductInsureVO)?void 0:t.productName)||"";const{title:r,desc:i,image:s}=(null==(n=e.data)?void 0:n.showConfigVO)||{};l={title:r,desc:i,image:s},da.value={desc:l.desc||"你好，这里是描述",imgUrl:l.image,title:l.title,link:window.location.href}}})),await X({productCode:w}).then((e=>{"10000"===e.code&&(qe.value=!0,Ee.value=e.data)})),ta.value=!1};return s((()=>{N(Se,(([{isIntersecting:e}],a)=>{we.value=!e}))})),j((()=>{var e;const a=Pe.get(re);if(a){const{tenantOrderHolder:t,tenantOrderInsuredList:n}=a;if(t&&(ca.value.tenantOrderHolder={...t,certType:t.certType||R.CERT}),Array(n)&&n[0]){const a=n[0]||{};if(ca.value.activePlanCode=a.planCode,a.tenantOrderProductListtenantOrderProductList&&a.tenantOrderProductList[0]&&a.tenantOrderProductList[0].tenantOrderRiskList){const t=null==(e=a.tenantOrderProductList[0].tenantOrderRiskList)?void 0:e.find((e=>"1"===String(e.riskType)));t&&(ca.value.paymentFrequency=(null==t?void 0:t.paymentFrequency)?String(null==t?void 0:t.paymentFrequency):ie.SINGLE)}}}})),q((()=>{ta.value=!0,ja(),setTimeout((async()=>{na.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),H((()=>{Pe.remove(re)})),(e,a)=>{const t=o("ProLazyComponent"),n=o("ProShare"),l=o("van-config-provider");return d(),c(p,null,[ta.value?(d(),c("div",He,Be)):(d(),O(l,{key:1,"data-skeleton-root":"SHORT","theme-vars":m(L)},{default:C((()=>{var e,l,r,i,s,o,u;return[v("div",Ue,[v("div",ze,[P(Ie,{"data-skeleton-type":"img",url:null==(l=null==(e=Te.value)?void 0:e.tenantProductInsureVO)?void 0:l.banner[0]},null,8,["url"]),(null==(i=null==(r=Te.value)?void 0:r.tenantProductInsureVO)?void 0:i.bannerMove)?(d(),O(Ie,{key:0,url:null==(o=null==(s=Te.value)?void 0:s.tenantProductInsureVO)?void 0:o.bannerMove[0],onClick:La},null,8,["url"])):I("",!0),v("div",{ref_key:"observeRef",ref:Se},null,512)]),P(Re,{"show-service-config":"","data-source":null==(u=Te.value)?void 0:u.tenantProductInsureVO,"is-multiple-plan":m(pa),"active-plan-code":ca.value.activePlanCode,"payment-frequency":ca.value.paymentFrequency,"premium-info":{premium:la.value,unit:ia.value,premiumLoadingText:oa.value},onUpdateActivePlan:ba},null,8,["data-source","is-multiple-plan","active-plan-code","payment-frequency","premium-info"]),P(je,{ref_key:"detailScrollRef",ref:_e,detail:Te.value},{form:C((()=>[v("div",Me,[Ge,Ee.value?(d(),O(m(g),{key:0,ref_key:"formRef",ref:Ve,"title-collection":{HOLDER:"本人信息（投保人）",INSURER:"为谁投保（被保人）"},"form-info":ca.value,"need-desensitize":aa.value,"send-sms-code":Aa,"factor-object":m(ya)||{}},S({_:2},[m(ma).length>1?{name:"holderName",fn:C((()=>[P(m(b),{"user-info":ca.value.tenantOrderHolder,data:m(ma),onChange:ka},null,8,["user-info","data"])]))}:void 0,m(ma).length>1?{name:"insurerName",fn:C((()=>[P(m(b),{title:"选择被保人","user-info":ca.value.tenantOrderInsuredList[0],data:m(ma),onChange:Va},null,8,["user-info","data"])]))}:void 0]),1032,["form-info","need-desensitize","factor-object"])):I("",!0)]),P(m(f),{"form-info":ca.value,"insure-detail":Ee.value,"config-detail":Te.value,"is-multiple-plan":m(pa),"premium-info":{premium:la.value,unit:ia.value,minPremiun:ra.value,actualUnit:sa.value,premiumLoadingText:oa.value},onUpdateActivePlan:ba},null,8,["form-info","insure-detail","config-detail","is-multiple-plan","premium-info"])])),_:1},8,["detail"]),P(t,null,{default:C((()=>{var e,a;return[(null==(e=Te.value)?void 0:e.tenantProductInsureVO.inscribedContent)?(d(),O(m(x),{key:0,"inscribed-content":null==(a=Te.value)?void 0:a.tenantProductInsureVO.inscribedContent},null,8,["inscribed-content"])):I("",!0)]})),_:1}),P(t,null,{default:C((()=>[Ca.value&&Ca.value.length>0?(d(),O(m(A),{key:0,"attachement-list":Ca.value,"pre-text":"请阅读",onPreviewFile:a[0]||(a[0]=e=>_a(e))},null,8,["attachement-list"])):I("",!0)])),_:1}),we.value?(d(),c("div",Qe,[v("div",$e,[oa.value?(d(),c("span",Ye,h(oa.value),1)):la.value?(d(),c(p,{key:1},[v("span",null,h(m(B)(la.value)),1),v("span",null,h(sa.value||"元"),1)],64)):(d(),c(p,{key:2},[v("span",null,h(ra.value),1),v("span",null,h(ia.value),1)],64))]),m(U)&&m(z)?(d(),O(n,M(G({key:0},da.value)),{default:C((()=>[We])),_:1},16)):I("",!0),P(m(y),{disabled:m(va),shadow:!1,"theme-vars":m(L),class:"right",text:"立即投保",onClick:Ta},{default:C((()=>[Xe])),_:1},8,["disabled","theme-vars"])])):I("",!0)]),qe.value?(d(),O(de,{key:0,"product-detail":Te.value},null,8,["product-detail"])):I("",!0),Je]})),_:1},8,["theme-vars"])),P(m(u),{show:Fe.value,"onUpdate:show":a[1]||(a[1]=e=>Fe.value=e),"content-list":m(xa),"active-index":0,onOnConfirmHealth:Ea,onOnCloseHealthByMask:Ra},null,8,["show","content-list"]),De.value?(d(),O(m(i),{key:2,show:De.value,"onUpdate:show":a[2]||(a[2]=e=>De.value=e),"content-list":Ca.value,"is-only-view":ea.value,"active-index":Ne.value,text:ea.value?"关闭":"我已逐页阅读并确认告知内容","force-read-cound":0,"on-close-file-preview":"",onSubmit:Fa,onOnCloseFilePreviewByMask:Ra},null,8,["show","content-list","is-only-view","active-index","text"])):I("",!0)],64)}}}),[["__scopeId","data-v-5dbe2773"]]);export{Ke as default};
