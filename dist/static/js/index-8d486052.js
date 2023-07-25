import{d as e,cE as a,r as l,G as t,N as n,Y as s,aI as i,bT as o,ct as u,b as r,c,i as d,f as v,U as p,a4 as m,a0 as f,$ as g,h,g as b,j as y,e as C,a1 as k,bi as w,w as L,V as S,b5 as U,ah as E,cF as N,cG as $,O as j,bU as A,cH as B,aK as V,aV as x,aW as P}from"./index-00e424aa.js";import{o as T}from"./utils-de3d5da8.js";import"./infoCollection-7121cfcf.js";import"./trial-3b9ebb5d.js";const _={class:"guarantee-list"},F=(e=>(x("data-v-72bcb63c"),e=e(),P(),e))((()=>d("span",null,"保障计划",-1))),G={key:0,class:"plan-list"},I=["onClick"],q={key:2,class:"feerate-view"},z={key:0},D={class:"extinfo-info-list"},O={class:"guarantee-detail"},Y={class:"content"},H=e({name:"guarantee"});var K=E(e({...H,props:{dataSource:{default:()=>({})},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{default:5},planList:{default:()=>[]}},emits:["updateActivePlan"],setup(e,{emit:E}){var x,P;const H=e;a((e=>({"47c8f96c":v(K)})));const K=l(""),M=l((null==(P=null==(x=H.planList)?void 0:x[0])?void 0:P.planCode)||void 0),R=l(),W=l([]),J=l([]),Q=l(),X=t((()=>!!H.planList.length));n([()=>H.dataSource,()=>M.value],(()=>{var e,a;W.value=((null==(a=((null==(e=H.dataSource)?void 0:e.GUARANTEE)||[]).find((e=>e.planCode===M.value)))?void 0:a.data)||[]).filter((e=>e.isShowOn===`${s.YES}`))}),{immediate:!0,deep:!0});const Z=t((()=>{var e;return(null==(e=H.dataSource)?void 0:e.rateUri)||""})),ee=t((()=>!!(Q.value&&Q.value.paymentFrequencyValue&&Q.value.premiumUnit&&Z))),[ae,le]=i(!1),te=t((()=>{var e;return!(!W.value||!(null==(e=W.value)?void 0:e.length))&&(W.value.length>H.count&&(!!H.isShowClose||!ae.value))})),ne=()=>{le()},se=t((()=>{var e;return W.value&&(null==(e=W.value)?void 0:e.length)?W.value.length<=H.count||ae.value?W.value:W.value.slice(0,H.count):[]})),ie=l(!1),oe=e=>{const a=e||window.event;a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation?a.stopPropagation():a.cancelBubble=!0,"A"===a.target.tagName&&a.target.href&&(N()?$("",a.target.href):window.open(a.target.href))},ue=()=>{ie.value=!0,j((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.addEventListener("click",oe,!1)}))};o((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.removeEventListener("click",oe,!1)}));const re=()=>{T({fileType:"pdf",fileUri:Z.value})},ce=e=>{M.value=H.planList[e.name].planCode};return(e,a)=>{var l,t;const n=A,s=B,i=V,o=u("dompurify-html");return r(),c(p,null,[d("div",_,[d("div",{class:"header"},[F,d("span",{onClick:ue},"查看详情")]),v(X)?(r(),c("div",G,[(r(!0),c(p,null,m(e.planList,((e,a)=>(r(),c("div",{key:`${e.planCode}_${a}`,class:f("plan-list-item "+(e.planCode===v(M)?"plan-list-item-active":"")),onClick:a=>{return l=e.planCode,M.value=l,R.value=H.planList.findIndex((e=>e.planCode===l)),void E("updateActivePlan",l);var l}},[d("span",null,g(e.planName),1)],10,I)))),128))])):h("",!0),(r(!0),c(p,null,m(v(se),((e,a)=>(r(),b(n,{key:a,class:"guarantee-item",title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),v(te)?(r(),c("div",{key:1,class:"show-more",onClick:ne},[y(g(v(ae)?"收起":"查看更多")+" ",1),C(k,{name:"arrow-down-dobule",class:f(["icon",{showMore:v(ae)}])},null,8,["class"])])):h("",!0),v(ee)?(r(),c("div",q,[d("span",null,g(`${(null==(l=v(Q))?void 0:l.paymentFrequencyValue)||""}${(null==(t=v(Q))?void 0:t.premiumUnit)||""}`),1),v(Z)?(r(),c("span",{key:0,onClick:re},"查看保费")):h("",!0)])):h("",!0)]),C(w),C(i,{show:v(ie),"onUpdate:show":a[1]||(a[1]=e=>S(ie)?ie.value=e:null),title:"保障详情",class:"guarantee-popup"},{default:L((()=>[v(J)&&v(J).length>0?(r(),c("div",z,[d("div",D,[(r(!0),c(p,null,m(v(J),((e,a)=>(r(),b(n,{key:a,title:e.name,content:e.description,border:!1,size:"small"},null,8,["title","content"])))),128))]),C(w)])):h("",!0),v(X)?(r(),b(s,{key:1,active:v(R),"onUpdate:active":a[0]||(a[0]=e=>S(R)?R.value=e:null),list:e.planList.map(((e,a)=>({title:e.planName}))),class:"custom-plan-tab",onClickTab:ce},null,8,["active","list"])):h("",!0),d("div",O,[(r(!0),c(p,null,m(v(W),((e,a)=>(r(),c("div",{key:a,class:"guarantee-item"},[C(n,{title:e.title,content:e.desc,border:!1,size:"small"},null,8,["title","content"]),U(d("div",Y,null,512),[[o,e.tips]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-72bcb63c"]]);export{K as default};
