import{d as e,d7 as a,i as l,j as t,z as n,a6 as s,bU as i,c1 as o,cX as u,o as d,c,a as r,u as v,F as p,n as m,p as f,e as g,q as h,l as y,a8 as C,b as k,ae as w,aD as b,w as L,m as S,V as E,_ as U,d8 as N,d9 as j,E as A,cl as B,da as $,as as _,at as x,au as P}from"./index-fc7a5429.js";import{o as V}from"./utils-d51ac434.js";import"./infoCollection-ea7671fe.js";import"./trial-3d0e9acc.js";const q={class:"guarantee-list"},z=(e=>(x("data-v-72bcb63c"),e=e(),P(),e))((()=>r("span",null,"保障计划",-1))),D={key:0,class:"plan-list"},F=["onClick"],T={key:2,class:"feerate-view"},I={key:0},G={class:"extinfo-info-list"},M={class:"guarantee-detail"},O={class:"content"},R=e({name:"guarantee"});var X=U(e({...R,props:{dataSource:{default:()=>({})},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{default:5},planList:{default:()=>[]}},emits:["updateActivePlan"],setup(e,{emit:U}){var x,P;const R=e;a((e=>({"47c8f96c":v(X)})));const X=l(""),Y=l((null==(P=null==(x=R.planList)?void 0:x[0])?void 0:P.planCode)||void 0),H=l(),J=l([]),K=l([]),Q=l(),W=t((()=>!!R.planList.length));n([()=>R.dataSource,()=>Y.value],(()=>{var e,a;J.value=((null==(a=((null==(e=R.dataSource)?void 0:e.GUARANTEE)||[]).find((e=>e.planCode===Y.value)))?void 0:a.data)||[]).filter((e=>e.isShowOn===`${s.YES}`))}),{immediate:!0,deep:!0});const Z=t((()=>{var e;return(null==(e=R.dataSource)?void 0:e.rateUri)||""})),ee=t((()=>!!(Q.value&&Q.value.paymentFrequencyValue&&Q.value.premiumUnit&&Z))),[ae,le]=i(!1),te=t((()=>{var e;return!(!J.value||!(null==(e=J.value)?void 0:e.length))&&(J.value.length>R.count&&(!!R.isShowClose||!ae.value))})),ne=()=>{le()},se=t((()=>{var e;return J.value&&(null==(e=J.value)?void 0:e.length)?J.value.length<=R.count||ae.value?J.value:J.value.slice(0,R.count):[]})),ie=l(!1),oe=e=>{const a=e||window.event;a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation?a.stopPropagation():a.cancelBubble=!0,"A"===a.target.tagName&&a.target.href&&(N()?j("",a.target.href):window.open(a.target.href))},ue=()=>{ie.value=!0,A((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.addEventListener("click",oe,!1)}))};o((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.removeEventListener("click",oe,!1)}));const de=()=>{V({fileType:"pdf",fileUri:Z.value})},ce=e=>{Y.value=R.planList[e.name].planCode};return(e,a)=>{var l,t;const n=B,s=$,i=_,o=u("dompurify-html");return d(),c(p,null,[r("div",q,[r("div",{class:"header"},[z,r("span",{onClick:ue},"查看详情")]),v(W)?(d(),c("div",D,[(d(!0),c(p,null,m(e.planList,((e,a)=>(d(),c("div",{key:`${e.planCode}_${a}`,class:f("plan-list-item "+(e.planCode===v(Y)?"plan-list-item-active":"")),onClick:a=>{return l=e.planCode,Y.value=l,H.value=R.planList.findIndex((e=>e.planCode===l)),void U("updateActivePlan",l);var l}},[r("span",null,g(e.planName),1)],10,F)))),128))])):h("",!0),(d(!0),c(p,null,m(v(se),((e,a)=>(d(),y(n,{key:a,class:"guarantee-item",title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),v(te)?(d(),c("div",{key:1,class:"show-more",onClick:ne},[C(g(v(ae)?"收起":"查看更多")+" ",1),k(w,{name:"arrow-down-dobule",class:f(["icon",{showMore:v(ae)}])},null,8,["class"])])):h("",!0),v(ee)?(d(),c("div",T,[r("span",null,g(`${(null==(l=v(Q))?void 0:l.paymentFrequencyValue)||""}${(null==(t=v(Q))?void 0:t.premiumUnit)||""}`),1),v(Z)?(d(),c("span",{key:0,onClick:de},"查看保费")):h("",!0)])):h("",!0)]),k(b),k(i,{show:v(ie),"onUpdate:show":a[1]||(a[1]=e=>S(ie)?ie.value=e:null),title:"保障详情",class:"guarantee-popup"},{default:L((()=>[v(K)&&v(K).length>0?(d(),c("div",I,[r("div",G,[(d(!0),c(p,null,m(v(K),((e,a)=>(d(),y(n,{key:a,title:e.name,content:e.description,border:!1,size:"small"},null,8,["title","content"])))),128))]),k(b)])):h("",!0),v(W)?(d(),y(s,{key:1,active:v(H),"onUpdate:active":a[0]||(a[0]=e=>S(H)?H.value=e:null),list:e.planList.map(((e,a)=>({title:e.planName}))),class:"custom-plan-tab",onClickTab:ce},null,8,["active","list"])):h("",!0),r("div",M,[(d(!0),c(p,null,m(v(J),((e,a)=>(d(),c("div",{key:a,class:"guarantee-item"},[k(n,{title:e.title,content:e.desc,border:!1,size:"small"},null,8,["title","content"]),E(r("div",O,null,512),[[o,e.tips]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-72bcb63c"]]);export{X as default};
