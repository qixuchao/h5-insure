import{_ as e,d as a,bX as l,g as t,r as n,E as s,an as i,S as u,z as o,c as r,h as d,j as c,F as v,i as p,L as m,t as f,k as C,e as _,n as y,f as h,V as L,a2 as k,w as A,a7 as E,A as b,a3 as g,a5 as I,a8 as S,X as x,Y as F,bY as T,bZ as M,bp as O,bt as P,c8 as w,bk as N,I as R,c9 as U,b1 as j,ag as D,a9 as W}from"./index-589cf96a.js";import{o as $,g as V}from"./utils-9bd97278.js";import{C as q}from"./infoCollection-f32ad151.js";import{P as z}from"./index-0295aec7.js";const G={class:"guarantee-list"},Y=(e=>(x("data-v-625e6ba0"),e=e(),F(),e))((()=>c("span",null,"保障计划",-1))),B={key:0,class:"plan-list"},Q=["onClick"],X={key:2,class:"feerate-view"},Z={key:0},H={class:"extinfo-info-list"},J={class:"guarantee-detail"},K={class:"content"};var ee=e(a({__name:"index",props:{dataSource:{type:Object,default:()=>{}},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:5},planList:{type:Array,require:!1,default:()=>[]}},emits:["updateActivePlan"],setup(e,{emit:a}){var x,F;const T=e;l((e=>({"7909fd7a":t(M)})));const M=n(""),O=n((null==(F=null==(x=T.planList)?void 0:x[0])?void 0:F.planCode)||void 0),P=n(),w=n([]),N=n([]),R=n(),U=s((()=>!!T.planList.length));i([()=>T.dataSource,()=>O.value],(()=>{var e,a;w.value=(null==(a=((null==(e=T.dataSource)?void 0:e.GUARANTEE)||[]).find((e=>e.planCode===O.value)))?void 0:a.data)||[]}),{immediate:!0,deep:!0});const j=s((()=>{var e;return(null==(e=T.dataSource)?void 0:e.rateUri)||""})),D=s((()=>!!(R.value&&R.value.paymentFrequencyValue&&R.value.premiumUnit&&j))),[W,V]=u(!1),q=s((()=>{var e;return!(!w.value||!(null==(e=w.value)?void 0:e.length))&&(w.value.length>T.count&&(!!T.isShowClose||!W.value))})),z=()=>{V()},ee=s((()=>{var e;return w.value&&(null==(e=w.value)?void 0:e.length)?w.value.length<=T.count||W.value?w.value:w.value.slice(0,T.count):[]})),ae=n(!1),le=()=>{ae.value=!0},te=()=>{$({fileType:"pdf",fileUri:j.value})},ne=e=>{O.value=T.planList[e.name].planCode};return(l,n)=>{var s,i;const u=g,x=I,F=S,M=o("dompurify-html");return r(),d(v,null,[c("div",G,[c("div",{class:"header"},[Y,c("span",{onClick:le},"查看详情")]),t(U)?(r(),d("div",B,[(r(!0),d(v,null,p(e.planList,((e,l)=>(r(),d("div",{key:`${e.planCode}_${l}`,class:m("plan-list-item "+(e.planCode===t(O)?"plan-list-item-active":"")),onClick:l=>{return t=e.planCode,O.value=t,P.value=T.planList.findIndex((e=>e.planCode===t)),void a("updateActivePlan",t);var t}},[c("span",null,f(e.planName),1)],10,Q)))),128))])):C("",!0),(r(!0),d(v,null,p(t(ee),((e,a)=>(r(),_(u,{key:a,class:"guarantee-item",title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),t(q)?(r(),d("div",{key:1,class:"show-more",onClick:z},[y(f(t(W)?"收起":"查看更多")+" ",1),h(L,{name:"arrow-down-dobule",class:m(["icon",{showMore:t(W)}])},null,8,["class"])])):C("",!0),t(D)?(r(),d("div",X,[c("span",null,f(`${(null==(s=t(R))?void 0:s.paymentFrequencyValue)||""}${(null==(i=t(R))?void 0:i.premiumUnit)||""}`),1),t(j)?(r(),d("span",{key:0,onClick:te},"查看保费")):C("",!0)])):C("",!0)]),h(k),h(F,{show:t(ae),"onUpdate:show":n[1]||(n[1]=e=>E(ae)?ae.value=e:null),title:"保障详情",class:"guarantee-popup"},{default:A((()=>[t(N)&&t(N).length>0?(r(),d("div",Z,[c("div",H,[(r(!0),d(v,null,p(t(N),((e,a)=>(r(),_(u,{key:a,title:e.name,content:e.description,border:!1,size:"small"},null,8,["title","content"])))),128))]),h(k)])):C("",!0),t(U)?(r(),_(x,{key:1,active:t(P),"onUpdate:active":n[0]||(n[0]=e=>E(P)?P.value=e:null),list:e.planList.map(((e,a)=>({title:e.planName}))),class:"custom-plan-tab",onClickTab:ne},null,8,["active","list"])):C("",!0),c("div",J,[(r(!0),d(v,null,p(t(w),((e,a)=>(r(),d("div",{key:a,class:"guarantee-item"},[h(u,{title:e.title,content:e.desc,border:!1,size:"small"},null,8,["title","content"]),b(c("div",K,null,512),[[M,e.tips]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-625e6ba0"]]);const ae={class:"spec"},le={class:"rich-text"},te={key:1,class:"spec"},ne={class:"rich-text"},se={key:1,class:"spec"},ie={class:"rich-text"},ue=a({__name:"index",props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(e,{expose:a}){const l=e,i=T((()=>M((()=>import("./index-589cf96a.js").then((function(e){return e.cI}))),["static/js/index-589cf96a.js","static/css/index-90b47c2e.css","static/js/pdfh5-008ca364.js"])));T((()=>M((()=>import("./index-95735569.js")),["static/js/index-95735569.js","static/css/index-f22f2764.css","static/js/index-589cf96a.js","static/css/index-90b47c2e.css","static/js/pdfh5-008ca364.js"])));const u=T((()=>M((()=>import("./index-589cf96a.js").then((function(e){return e.cG}))),["static/js/index-589cf96a.js","static/css/index-90b47c2e.css","static/js/pdfh5-008ca364.js"]))),m=T((()=>M((()=>import("./index-cd1a640f.js")),["static/js/index-cd1a640f.js","static/css/index-7b3feb06.css","static/js/index-589cf96a.js","static/css/index-90b47c2e.css","static/js/pdfh5-008ca364.js"]))),f=T((()=>M((()=>import("./index-1602c362.js")),["static/js/index-1602c362.js","static/css/index-194b9c66.css","static/js/index-589cf96a.js","static/css/index-90b47c2e.css","static/js/pdfh5-008ca364.js","static/js/index-24899314.js"]))),{dataSource:y}=O(l),k=n(),E=n([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),g=s((()=>{var e,a;return null==(a=null==(e=y.value.SPECIAL_FEATURE)?void 0:e.spec)?void 0:a.length})),I=s((()=>{var e,a,l,t;const n=null==(e=y.value.CLAIM_FLOW)?void 0:e.processCaseType;return!!(n===q.WORD&&(null==(a=y.value.CLAIM_FLOW)?void 0:a.processContent)||n===q.IMAGE&&(null==(t=null==(l=y.value.CLAIM_FLOW)?void 0:l.processCasePicList)?void 0:t.length))})),S=s((()=>{var e,a,l,t,n;const s=null==(a=null==(e=y.value)?void 0:e.CLAIM_CASE)?void 0:a.claimCaseType;return!!(s===q.WORD&&(null==(l=y.value.CLAIM_CASE)?void 0:l.claimContent)||s===q.IMAGE&&(null==(n=null==(t=y.value.CLAIM_CASE)?void 0:t.claimCasePicList)?void 0:n.length))})),x=s((()=>{var e,a;return null==(a=null==(e=y.value)?void 0:e.ISSUE_NOTICE)?void 0:a.noticeContent})),F=s((()=>{var e,a;return null==(a=null==(e=y.value)?void 0:e.FAQ)?void 0:a.length})),U=s((()=>{let e=[...E.value];return g.value||(e=e.filter((e=>"tab1"!==e.slotName))),I.value||S.value||(e=e.filter((e=>"tab2"!==e.slotName))),e}));return a({handleClickTab:()=>{var e;return null==(e=k.value)?void 0:e.handleClickTab}}),(e,a)=>{const l=R,n=L,s=o("dompurify-html");return r(),_(t(i),{ref_key:"scrollRef",ref:k,class:"tabs",list:t(U),sticky:"",scrollspy:""},P({tab3:A((()=>[N(e.$slots,"form")])),_:2},[t(g)?{name:"tab1",fn:A((()=>{var e;return[c("div",ae,[(r(!0),d(v,null,p((null==(e=t(y).SPECIAL_FEATURE)?void 0:e.spec)||[],((e,a)=>(r(),_(w,{key:a},{fallback:A((()=>[h(n,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:A((()=>[(r(),_(l,{key:a,class:"detail-img",width:"100%",src:e},null,8,["src"]))])),_:2},1024)))),128)),h(t(u))])]})),key:"0"}:void 0,t(I)||t(S)||t(x)||t(F)?{name:"tab2",fn:A((()=>{var e,a;return[t(I)?(r(),d(v,{key:0},[(null==(e=t(y).CLAIM_FLOW)?void 0:e.processCaseType)===t(q).WORD?(r(),_(t(m),{key:0,class:"tab-card",title:"理赔说明"},{default:A((()=>{var e;return[b(c("div",le,null,512),[[s,null==(e=t(y).CLAIM_FLOW)?void 0:e.processContent]])]})),_:1})):(r(),d("div",te,[(r(),_(w,null,{fallback:A((()=>[h(n,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:A((()=>{var e;return[(r(!0),d(v,null,p((null==(e=t(y).CLAIM_FLOW)?void 0:e.processCasePicList)||[],((e,a)=>(r(),_(l,{key:a,width:"100%",src:e,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),h(t(u))],64)):C("",!0),t(S)?(r(),d(v,{key:1},[(null==(a=t(y).CLAIM_CASE)?void 0:a.claimCaseType)===t(q).WORD?(r(),_(t(m),{key:0,class:"tab-card",title:"理赔案例"},{default:A((()=>{var e;return[b(c("div",ne,null,512),[[s,null==(e=t(y).CLAIM_CASE)?void 0:e.claimContent]])]})),_:1})):(r(),d("div",se,[(r(),_(w,null,{fallback:A((()=>[h(n,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:A((()=>{var e;return[(r(!0),d(v,null,p((null==(e=t(y).CLAIM_CASE)?void 0:e.claimCasePicList)||[],((e,a)=>(r(),_(l,{key:a,width:"100%",src:e,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),h(t(u))],64)):C("",!0),t(x)?(r(),d(v,{key:2},[h(t(m),{class:"tab-card",title:"投保须知"},{default:A((()=>{var e;return[b(c("div",ie,null,512),[[s,null==(e=t(y).ISSUE_NOTICE)?void 0:e.noticeContent]])]})),_:1}),h(t(u))],64)):C("",!0),t(F)?(r(),d(v,{key:3},[h(t(m),{title:"常见问题"},{default:A((()=>{var e,a;return[h(t(f),{list:null==(a=null==(e=t(y).FAQ)?void 0:e[0])?void 0:a.data},null,8,["list"])]})),_:1}),h(t(u))],64)):C("",!0)]})),key:"1"}:void 0]),1032,["list"])}}});const oe={class:"trial-button-wrap"},re={class:"footer-area"},de=c("span",null,"分享",-1),ce={class:"price"},ve={key:0},pe=a({__name:"TrialButton",props:{premium:{default:0},tenantProductDetail:{default:()=>({})},planCode:{default:void 0},loadingText:{default:""},paymentFrequency:{default:""},shareInfo:{default:()=>({})}},emits:["onClick"],setup(e,{emit:a}){const l=e,s=n(""),u=n(""),o=U();return i([()=>l.premium,()=>l.tenantProductDetail,()=>l.paymentFrequency,()=>l.planCode],(([e])=>{const{PREMIUM:a=[]}=l.tenantProductDetail||{};let t={};if(null==a?void 0:a.length){t=(a||[]).find((e=>e.planCode===l.planCode||!e.planCode))||{};const n=((null==t?void 0:t.data)||[]).find((e=>e.paymentFrequency===l.paymentFrequency)),{premium:i,minActualUnit:o}=n||{};e?(u.value=o,s.value=e&&`${e}`):(u.value=i,s.value="")}else e&&(u.value="",s.value=e&&`${e}`)}),{deep:!0,immediate:!0}),(l,n)=>{const i=L,p=D;return r(),d("div",oe,[c("div",re,[t(o)?(r(),_(p,j({key:0},e.shareInfo,{class:"share-btn"}),{default:A((()=>[h(i,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),de])),_:1},16)):C("",!0),c("div",ce,[e.loadingText?(r(),d("span",ve,f(e.loadingText),1)):(r(),d(v,{key:1},[c("span",null,f(t(s)),1),c("span",null,f(t(u)),1)],64))]),h(z,{shadow:!1,class:"right",onClick:n[0]||(n[0]=e=>a("onClick"))},{default:A((()=>[N(l.$slots,"default",{},(()=>[y("立即投保")]))])),_:3})])])}}});var me=(e,a)=>{const l=n([]),t=n(0),s=n([]);return i([()=>{var a;return null==(a=e.value)?void 0:a.planCode},()=>a.value],(([e,a])=>{let n=null;if(null==a?void 0:a.length){const l=(a||[]).find((a=>a.planCode===e||!a.planCode));l&&(n=null==l?void 0:l.productMaterialMap)}n?(l.value=Object.keys(n).map((e=>({attachmentName:e,attachmentList:n[e].map((e=>({...e,materialSource:V(`${null==e?void 0:e.materialSource}`,null==e?void 0:e.materialContent)})))}))),s.value=l.value.map((e=>({attachmentName:e.attachmentName,attachmentList:e.attachmentList.filter((e=>e.popUpFlag===W.YES))}))).filter((e=>e.attachmentList.length)),t.value=s.value.map((e=>({attachmentName:e.attachmentName,attachmentList:e.attachmentList.filter((e=>e.mustReadFlag===W.YES))}))).filter((e=>e.attachmentList.length)).length||0):l.value=[]}),{deep:!0,immediate:!0}),{fileList:l,popupFileList:s,mustReadFileCount:t}};export{ee as G,ue as _,pe as a,me as u};
