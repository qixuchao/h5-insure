import{d as e,cE as a,r as l,G as t,N as n,Y as s,aI as i,bT as o,ct as u,b as c,c as r,i as d,f as v,U as p,a4 as m,a0 as f,$ as g,h,g as y,j as C,e as b,a1 as k,bi as w,w as L,V as S,b5 as U,ah as E,cF as N,cG as $,O as j,bU as A,cH as B,aK as V,aV as x,aW as P}from"./index-b03f65fc.js";import{o as T}from"./utils-4a8ae6c5.js";import"./infoCollection-54a08ec3.js";import"./trial-1e615ac4.js";const _={class:"guarantee-list"},F=(e=>(x("data-v-72bcb63c"),e=e(),P(),e))((()=>d("span",null,"保障计划",-1))),G={key:0,class:"plan-list"},I=["onClick"],q={key:2,class:"feerate-view"},z={key:0},D={class:"extinfo-info-list"},O={class:"guarantee-detail"},Y={class:"content"},H=e({name:"guarantee"});var K=E(e({...H,props:{dataSource:{default:()=>({})},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{default:5},planList:{default:()=>[]}},emits:["updateActivePlan"],setup(e,{emit:E}){var x,P;const H=e;a((e=>({"47c8f96c":v(K)})));const K=l(""),M=l((null==(P=null==(x=H.planList)?void 0:x[0])?void 0:P.planCode)||void 0),R=l(),W=l([]),J=l([]),Q=l(),X=t((()=>!!H.planList.length));n([()=>H.dataSource,()=>M.value],(()=>{var e,a;W.value=((null==(a=((null==(e=H.dataSource)?void 0:e.GUARANTEE)||[]).find((e=>e.planCode===M.value)))?void 0:a.data)||[]).filter((e=>e.isShowOn===`${s.YES}`))}),{immediate:!0,deep:!0});const Z=t((()=>{var e;return(null==(e=H.dataSource)?void 0:e.rateUri)||""})),ee=t((()=>!!(Q.value&&Q.value.paymentFrequencyValue&&Q.value.premiumUnit&&Z))),[ae,le]=i(!1),te=t((()=>{var e;return!(!W.value||!(null==(e=W.value)?void 0:e.length))&&(W.value.length>H.count&&(!!H.isShowClose||!ae.value))})),ne=()=>{le()},se=t((()=>{var e;return W.value&&(null==(e=W.value)?void 0:e.length)?W.value.length<=H.count||ae.value?W.value:W.value.slice(0,H.count):[]})),ie=l(!1),oe=e=>{const a=e||window.event;a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation?a.stopPropagation():a.cancelBubble=!0,"A"===a.target.tagName&&a.target.href&&(N()?$("",a.target.href):window.open(a.target.href))},ue=()=>{ie.value=!0,j((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.addEventListener("click",oe,!1)}))};o((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.removeEventListener("click",oe,!1)}));const ce=()=>{T({fileType:"pdf",fileUri:Z.value})},re=e=>{M.value=H.planList[e.name].planCode};return(e,a)=>{var l,t;const n=A,s=B,i=V,o=u("dompurify-html");return c(),r(p,null,[d("div",_,[d("div",{class:"header"},[F,d("span",{onClick:ue},"查看详情")]),v(X)?(c(),r("div",G,[(c(!0),r(p,null,m(e.planList,((e,a)=>(c(),r("div",{key:`${e.planCode}_${a}`,class:f("plan-list-item "+(e.planCode===v(M)?"plan-list-item-active":"")),onClick:a=>{return l=e.planCode,M.value=l,R.value=H.planList.findIndex((e=>e.planCode===l)),void E("updateActivePlan",l);var l}},[d("span",null,g(e.planName),1)],10,I)))),128))])):h("",!0),(c(!0),r(p,null,m(v(se),((e,a)=>(c(),y(n,{key:a,class:"guarantee-item",title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),v(te)?(c(),r("div",{key:1,class:"show-more",onClick:ne},[C(g(v(ae)?"收起":"查看更多")+" ",1),b(k,{name:"arrow-down-dobule",class:f(["icon",{showMore:v(ae)}])},null,8,["class"])])):h("",!0),v(ee)?(c(),r("div",q,[d("span",null,g(`${(null==(l=v(Q))?void 0:l.paymentFrequencyValue)||""}${(null==(t=v(Q))?void 0:t.premiumUnit)||""}`),1),v(Z)?(c(),r("span",{key:0,onClick:ce},"查看保费")):h("",!0)])):h("",!0)]),b(w),b(i,{show:v(ie),"onUpdate:show":a[1]||(a[1]=e=>S(ie)?ie.value=e:null),title:"保障详情",class:"guarantee-popup"},{default:L((()=>[v(J)&&v(J).length>0?(c(),r("div",z,[d("div",D,[(c(!0),r(p,null,m(v(J),((e,a)=>(c(),y(n,{key:a,title:e.name,content:e.description,border:!1,size:"small"},null,8,["title","content"])))),128))]),b(w)])):h("",!0),v(X)?(c(),y(s,{key:1,active:v(R),"onUpdate:active":a[0]||(a[0]=e=>S(R)?R.value=e:null),list:e.planList.map(((e,a)=>({title:e.planName}))),class:"custom-plan-tab",onClickTab:re},null,8,["active","list"])):h("",!0),d("div",O,[(c(!0),r(p,null,m(v(W),((e,a)=>(c(),r("div",{key:a,class:"guarantee-item"},[b(n,{title:e.title,content:e.desc,border:!1,size:"small"},null,8,["title","content"]),U(d("div",Y,null,512),[[o,e.tips]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-72bcb63c"]]);export{K as default};
