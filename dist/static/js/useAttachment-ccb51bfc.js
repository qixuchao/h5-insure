import{_ as e,d as a,bX as l,g as t,r as n,E as s,an as i,S as u,bR as o,z as r,c as d,h as c,j as v,F as p,i as m,L as f,t as C,k as _,e as y,n as h,f as L,V as k,a2 as g,w as b,a7 as A,A as E,c8 as I,c9 as S,b6 as x,a3 as F,a5 as T,a8 as w,X as M,Y as O,bY as P,bZ as N,bp as R,bt as U,ca as D,bk as j,I as W,cb as V,b1 as $,ag as q,a9 as z}from"./index-c9ae1a47.js";import{o as B,g as G}from"./utils-f34f1933.js";import{C as Y}from"./infoCollection-5d803f27.js";import{P as Q}from"./index-b261c5bf.js";const X={class:"guarantee-list"},K=(e=>(M("data-v-4377dfbc"),e=e(),O(),e))((()=>v("span",null,"保障计划",-1))),Z={key:0,class:"plan-list"},H=["onClick"],J={key:2,class:"feerate-view"},ee={key:0},ae={class:"extinfo-info-list"},le={class:"guarantee-detail"},te={class:"content"};var ne=e(a({__name:"index",props:{dataSource:{type:Object,default:()=>{}},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:5},planList:{type:Array,require:!1,default:()=>[]}},emits:["updateActivePlan"],setup(e,{emit:a}){var M,O;const P=e;l((e=>({"46cb4a28":t(N)})));const N=n(""),R=n((null==(O=null==(M=P.planList)?void 0:M[0])?void 0:O.planCode)||void 0),U=n(),D=n([]),j=n([]),W=n(),V=s((()=>!!P.planList.length));i([()=>P.dataSource,()=>R.value],(()=>{var e,a;D.value=(null==(a=((null==(e=P.dataSource)?void 0:e.GUARANTEE)||[]).find((e=>e.planCode===R.value)))?void 0:a.data)||[]}),{immediate:!0,deep:!0});const $=s((()=>{var e;return(null==(e=P.dataSource)?void 0:e.rateUri)||""})),q=s((()=>!!(W.value&&W.value.paymentFrequencyValue&&W.value.premiumUnit&&$))),[z,G]=u(!1),Y=s((()=>{var e;return!(!D.value||!(null==(e=D.value)?void 0:e.length))&&(D.value.length>P.count&&(!!P.isShowClose||!z.value))})),Q=()=>{G()},ne=s((()=>{var e;return D.value&&(null==(e=D.value)?void 0:e.length)?D.value.length<=P.count||z.value?D.value:D.value.slice(0,P.count):[]})),se=n(!1),ie=e=>{const a=e||window.event;a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation?a.stopPropagation():a.cancelBubble=!0,"A"===a.target.tagName&&a.target.href&&(I()?S("",a.target.href):window.open(a.target.href))},ue=()=>{se.value=!0,x((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.addEventListener("click",ie,!1)}))};o((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.removeEventListener("click",ie,!1)}));const oe=()=>{B({fileType:"pdf",fileUri:$.value})},re=e=>{R.value=P.planList[e.name].planCode};return(l,n)=>{var s,i;const u=F,o=T,I=w,S=r("dompurify-html");return d(),c(p,null,[v("div",X,[v("div",{class:"header"},[K,v("span",{onClick:ue},"查看详情")]),t(V)?(d(),c("div",Z,[(d(!0),c(p,null,m(e.planList,((e,l)=>(d(),c("div",{key:`${e.planCode}_${l}`,class:f("plan-list-item "+(e.planCode===t(R)?"plan-list-item-active":"")),onClick:l=>{return t=e.planCode,R.value=t,U.value=P.planList.findIndex((e=>e.planCode===t)),void a("updateActivePlan",t);var t}},[v("span",null,C(e.planName),1)],10,H)))),128))])):_("",!0),(d(!0),c(p,null,m(t(ne),((e,a)=>(d(),y(u,{key:a,class:"guarantee-item",title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),t(Y)?(d(),c("div",{key:1,class:"show-more",onClick:Q},[h(C(t(z)?"收起":"查看更多")+" ",1),L(k,{name:"arrow-down-dobule",class:f(["icon",{showMore:t(z)}])},null,8,["class"])])):_("",!0),t(q)?(d(),c("div",J,[v("span",null,C(`${(null==(s=t(W))?void 0:s.paymentFrequencyValue)||""}${(null==(i=t(W))?void 0:i.premiumUnit)||""}`),1),t($)?(d(),c("span",{key:0,onClick:oe},"查看保费")):_("",!0)])):_("",!0)]),L(g),L(I,{show:t(se),"onUpdate:show":n[1]||(n[1]=e=>A(se)?se.value=e:null),title:"保障详情",class:"guarantee-popup"},{default:b((()=>[t(j)&&t(j).length>0?(d(),c("div",ee,[v("div",ae,[(d(!0),c(p,null,m(t(j),((e,a)=>(d(),y(u,{key:a,title:e.name,content:e.description,border:!1,size:"small"},null,8,["title","content"])))),128))]),L(g)])):_("",!0),t(V)?(d(),y(o,{key:1,active:t(U),"onUpdate:active":n[0]||(n[0]=e=>A(U)?U.value=e:null),list:e.planList.map(((e,a)=>({title:e.planName}))),class:"custom-plan-tab",onClickTab:re},null,8,["active","list"])):_("",!0),v("div",le,[(d(!0),c(p,null,m(t(D),((e,a)=>(d(),c("div",{key:a,class:"guarantee-item"},[L(u,{title:e.title,content:e.desc,border:!1,size:"small"},null,8,["title","content"]),E(v("div",te,null,512),[[S,e.tips]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-4377dfbc"]]);const se={class:"spec"},ie={class:"rich-text"},ue={key:1,class:"spec"},oe={class:"rich-text"},re={key:1,class:"spec"},de={class:"rich-text"},ce=a({__name:"index",props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(e,{expose:a}){const l=e,i=P((()=>N((()=>import("./index-c9ae1a47.js").then((function(e){return e.cK}))),["static/js/index-c9ae1a47.js","static/css/index-8cbfab48.css","static/js/pdfh5-008ca364.js"])));P((()=>N((()=>import("./index-a9a7af1a.js")),["static/js/index-a9a7af1a.js","static/css/index-f22f2764.css","static/js/index-c9ae1a47.js","static/css/index-8cbfab48.css","static/js/pdfh5-008ca364.js"])));const u=P((()=>N((()=>import("./index-c9ae1a47.js").then((function(e){return e.cI}))),["static/js/index-c9ae1a47.js","static/css/index-8cbfab48.css","static/js/pdfh5-008ca364.js"]))),o=P((()=>N((()=>import("./index-3449f879.js")),["static/js/index-3449f879.js","static/css/index-7b3feb06.css","static/js/index-c9ae1a47.js","static/css/index-8cbfab48.css","static/js/pdfh5-008ca364.js"]))),f=P((()=>N((()=>import("./index-ed5e888b.js")),["static/js/index-ed5e888b.js","static/css/index-194b9c66.css","static/js/index-c9ae1a47.js","static/css/index-8cbfab48.css","static/js/pdfh5-008ca364.js","static/js/index-16fa89bc.js"]))),{dataSource:C}=R(l),h=n(),g=n([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),A=s((()=>{var e,a;return null==(a=null==(e=C.value.SPECIAL_FEATURE)?void 0:e.spec)?void 0:a.length})),I=s((()=>{var e,a,l,t;const n=null==(e=C.value.CLAIM_FLOW)?void 0:e.processCaseType;return!!(n===Y.WORD&&(null==(a=C.value.CLAIM_FLOW)?void 0:a.processContent)||n===Y.IMAGE&&(null==(t=null==(l=C.value.CLAIM_FLOW)?void 0:l.processCasePicList)?void 0:t.length))})),S=s((()=>{var e,a,l,t,n;const s=null==(a=null==(e=C.value)?void 0:e.CLAIM_CASE)?void 0:a.claimCaseType;return!!(s===Y.WORD&&(null==(l=C.value.CLAIM_CASE)?void 0:l.claimContent)||s===Y.IMAGE&&(null==(n=null==(t=C.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:n.length))})),x=s((()=>{var e,a;return null==(a=null==(e=C.value)?void 0:e.ISSUE_NOTICE)?void 0:a.noticeContent})),F=s((()=>{var e,a;return null==(a=null==(e=C.value)?void 0:e.FAQ)?void 0:a.length})),T=s((()=>{let e=[...g.value];return A.value||(e=e.filter((e=>"tab1"!==e.slotName))),I.value||S.value||(e=e.filter((e=>"tab2"!==e.slotName))),e}));return a({handleClickTab:()=>{var e;return null==(e=h.value)?void 0:e.handleClickTab}}),(e,a)=>{const l=W,n=k,s=r("dompurify-html");return d(),y(t(i),{ref_key:"scrollRef",ref:h,class:"tabs",list:t(T),sticky:"",scrollspy:""},U({tab3:b((()=>[j(e.$slots,"form")])),_:2},[t(A)?{name:"tab1",fn:b((()=>{var e;return[v("div",se,[(d(!0),c(p,null,m((null==(e=t(C).SPECIAL_FEATURE)?void 0:e.spec)||[],((e,a)=>(d(),y(D,{key:a},{fallback:b((()=>[L(n,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:b((()=>[(d(),y(l,{key:a,class:"detail-img",width:"100%",src:e},null,8,["src"]))])),_:2},1024)))),128)),L(t(u))])]})),key:"0"}:void 0,t(I)||t(S)||t(x)||t(F)?{name:"tab2",fn:b((()=>{var e,a;return[t(I)?(d(),c(p,{key:0},[(null==(e=t(C).CLAIM_FLOW)?void 0:e.processCaseType)===t(Y).WORD?(d(),y(t(o),{key:0,class:"tab-card",title:"理赔说明"},{default:b((()=>{var e;return[E(v("div",ie,null,512),[[s,null==(e=t(C).CLAIM_FLOW)?void 0:e.processContent]])]})),_:1})):(d(),c("div",ue,[(d(),y(D,null,{fallback:b((()=>[L(n,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:b((()=>{var e;return[(d(!0),c(p,null,m((null==(e=t(C).CLAIM_FLOW)?void 0:e.processCasePicList)||[],((e,a)=>(d(),y(l,{key:a,width:"100%",src:e,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),L(t(u))],64)):_("",!0),t(S)?(d(),c(p,{key:1},[(null==(a=t(C).CLAIM_CASE)?void 0:a.claimCaseType)===t(Y).WORD?(d(),y(t(o),{key:0,class:"tab-card",title:"理赔案例"},{default:b((()=>{var e;return[E(v("div",oe,null,512),[[s,null==(e=t(C).CLAIM_CASE)?void 0:e.claimContent]])]})),_:1})):(d(),c("div",re,[(d(),y(D,null,{fallback:b((()=>[L(n,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:b((()=>{var e;return[(d(!0),c(p,null,m((null==(e=t(C).CLAIM_CASE)?void 0:e.claimCasePicList)||[],((e,a)=>(d(),y(l,{key:a,width:"100%",src:e,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),L(t(u))],64)):_("",!0),t(x)?(d(),c(p,{key:2},[L(t(o),{class:"tab-card",title:"投保须知"},{default:b((()=>{var e;return[E(v("div",de,null,512),[[s,null==(e=t(C).ISSUE_NOTICE)?void 0:e.noticeContent]])]})),_:1}),L(t(u))],64)):_("",!0),t(F)?(d(),c(p,{key:3},[L(t(o),{title:"常见问题"},{default:b((()=>{var e,a;return[L(t(f),{list:null==(a=null==(e=t(C).FAQ)?void 0:e[0])?void 0:a.data},null,8,["list"])]})),_:1}),L(t(u))],64)):_("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});const ve={class:"trial-button-wrap"},pe={class:"footer-area"},me=v("span",null,"分享",-1),fe={class:"price"},Ce={key:0},_e=a({__name:"TrialButton",props:{premium:{default:0},tenantProductDetail:{default:()=>({})},planCode:{default:void 0},loadingText:{default:""},paymentFrequency:{default:""},shareInfo:{default:()=>({})},isShare:{type:Boolean,default:!1}},emits:["onClick"],setup(e,{emit:a}){const l=e,s=n(""),u=n(""),o=V();return i([()=>l.premium,()=>l.tenantProductDetail,()=>l.paymentFrequency,()=>l.planCode],(([e])=>{const{PREMIUM:a=[]}=l.tenantProductDetail||{};let t={};if(null==a?void 0:a.length){t=(a||[]).find((e=>e.planCode===l.planCode||!e.planCode))||{};const n=((null==t?void 0:t.data)||[]).find((e=>e.paymentFrequency===l.paymentFrequency)),{premium:i,minActualUnit:o}=n||{};e?(u.value=o,s.value=e&&`${e}`):(u.value=i,s.value="")}else e&&(u.value="",s.value=e&&`${e}`)}),{deep:!0,immediate:!0}),(l,n)=>{const i=k,r=q;return d(),c("div",ve,[v("div",pe,[e.isShare&&t(o)?(d(),y(r,$({key:0},e.shareInfo,{class:"share-btn"}),{default:b((()=>[L(i,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),me])),_:1},16)):_("",!0),v("div",fe,[e.loadingText?(d(),c("span",Ce,C(e.loadingText),1)):(d(),c(p,{key:1},[v("span",null,C(t(s)),1),v("span",null,C(t(u)),1)],64))]),L(Q,{shadow:!1,class:"right",onClick:n[0]||(n[0]=e=>a("onClick"))},{default:b((()=>[j(l.$slots,"default",{},(()=>[h("立即投保")]))])),_:3})])])}}});var ye=(e,a)=>{const l=n([]),t=n(0),s=n([]);return i([()=>{var a;return null==(a=e.value)?void 0:a.planCode},()=>a.value],(([e,a])=>{let n=null;if(null==a?void 0:a.length){const l=(a||[]).find((a=>a.planCode===e||!a.planCode));l&&(n=null==l?void 0:l.productMaterialMap)}n?(l.value=Object.keys(n).map((e=>({attachmentName:e,attachmentList:n[e].map((e=>({...e,materialSource:G(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)})))}))),s.value=l.value.map((e=>({attachmentName:e.attachmentName,attachmentList:e.attachmentList.filter((e=>e.popUpFlag===z.YES))}))).filter((e=>e.attachmentList.length)),t.value=s.value.map((e=>({attachmentName:e.attachmentName,attachmentList:e.attachmentList.filter((e=>e.mustReadFlag===z.YES))}))).filter((e=>e.attachmentList.length)).length||0):l.value=[]}),{deep:!0,immediate:!0}),{fileList:l,popupFileList:s,mustReadFileCount:t}};export{ne as G,ce as _,_e as a,ye as u};
