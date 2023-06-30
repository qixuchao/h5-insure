import{d as e,ct as a,r as l,G as t,N as n,Y as s,aF as i,by as o,ci as u,b as r,c,i as d,f as v,U as p,a4 as m,a0 as f,$ as g,h,g as y,j as C,e as k,a1 as w,bf as b,w as S,V as L,b2 as U,ar as E,cu as N,cv as $,O as j,bz as A,cw as B,aH as x,aS as P,aT as T}from"./index-fe472263.js";import{o as V}from"./utils-c997761e.js";import"./infoCollection-8e121d51.js";import"./trial-3d7f38c3.js";const _={class:"guarantee-list"},z=(e=>(P("data-v-72bcb63c"),e=e(),T(),e))((()=>d("span",null,"保障计划",-1))),F={key:0,class:"plan-list"},q=["onClick"],D={key:2,class:"feerate-view"},G={key:0},I={class:"extinfo-info-list"},O={class:"guarantee-detail"},Y={class:"content"},H=e({name:"guarantee"});var M=E(e({...H,props:{dataSource:{default:()=>({})},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{default:5},planList:{default:()=>[]}},emits:["updateActivePlan"],setup(e,{emit:E}){var P,T;const H=e;a((e=>({"47c8f96c":v(M)})));const M=l(""),R=l((null==(T=null==(P=H.planList)?void 0:P[0])?void 0:T.planCode)||void 0),J=l(),K=l([]),Q=l([]),W=l(),X=t((()=>!!H.planList.length));n([()=>H.dataSource,()=>R.value],(()=>{var e,a;K.value=((null==(a=((null==(e=H.dataSource)?void 0:e.GUARANTEE)||[]).find((e=>e.planCode===R.value)))?void 0:a.data)||[]).filter((e=>e.isShowOn===`${s.YES}`))}),{immediate:!0,deep:!0});const Z=t((()=>{var e;return(null==(e=H.dataSource)?void 0:e.rateUri)||""})),ee=t((()=>!!(W.value&&W.value.paymentFrequencyValue&&W.value.premiumUnit&&Z))),[ae,le]=i(!1),te=t((()=>{var e;return!(!K.value||!(null==(e=K.value)?void 0:e.length))&&(K.value.length>H.count&&(!!H.isShowClose||!ae.value))})),ne=()=>{le()},se=t((()=>{var e;return K.value&&(null==(e=K.value)?void 0:e.length)?K.value.length<=H.count||ae.value?K.value:K.value.slice(0,H.count):[]})),ie=l(!1),oe=e=>{const a=e||window.event;a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation?a.stopPropagation():a.cancelBubble=!0,"A"===a.target.tagName&&a.target.href&&(N()?$("",a.target.href):window.open(a.target.href))},ue=()=>{ie.value=!0,j((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.addEventListener("click",oe,!1)}))};o((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.removeEventListener("click",oe,!1)}));const re=()=>{V({fileType:"pdf",fileUri:Z.value})},ce=e=>{R.value=H.planList[e.name].planCode};return(e,a)=>{var l,t;const n=A,s=B,i=x,o=u("dompurify-html");return r(),c(p,null,[d("div",_,[d("div",{class:"header"},[z,d("span",{onClick:ue},"查看详情")]),v(X)?(r(),c("div",F,[(r(!0),c(p,null,m(e.planList,((e,a)=>(r(),c("div",{key:`${e.planCode}_${a}`,class:f("plan-list-item "+(e.planCode===v(R)?"plan-list-item-active":"")),onClick:a=>{return l=e.planCode,R.value=l,J.value=H.planList.findIndex((e=>e.planCode===l)),void E("updateActivePlan",l);var l}},[d("span",null,g(e.planName),1)],10,q)))),128))])):h("",!0),(r(!0),c(p,null,m(v(se),((e,a)=>(r(),y(n,{key:a,class:"guarantee-item",title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),v(te)?(r(),c("div",{key:1,class:"show-more",onClick:ne},[C(g(v(ae)?"收起":"查看更多")+" ",1),k(w,{name:"arrow-down-dobule",class:f(["icon",{showMore:v(ae)}])},null,8,["class"])])):h("",!0),v(ee)?(r(),c("div",D,[d("span",null,g(`${(null==(l=v(W))?void 0:l.paymentFrequencyValue)||""}${(null==(t=v(W))?void 0:t.premiumUnit)||""}`),1),v(Z)?(r(),c("span",{key:0,onClick:re},"查看保费")):h("",!0)])):h("",!0)]),k(b),k(i,{show:v(ie),"onUpdate:show":a[1]||(a[1]=e=>L(ie)?ie.value=e:null),title:"保障详情",class:"guarantee-popup"},{default:S((()=>[v(Q)&&v(Q).length>0?(r(),c("div",G,[d("div",I,[(r(!0),c(p,null,m(v(Q),((e,a)=>(r(),y(n,{key:a,title:e.name,content:e.description,border:!1,size:"small"},null,8,["title","content"])))),128))]),k(b)])):h("",!0),v(X)?(r(),y(s,{key:1,active:v(J),"onUpdate:active":a[0]||(a[0]=e=>L(J)?J.value=e:null),list:e.planList.map(((e,a)=>({title:e.planName}))),class:"custom-plan-tab",onClickTab:ce},null,8,["active","list"])):h("",!0),d("div",O,[(r(!0),c(p,null,m(v(K),((e,a)=>(r(),c("div",{key:a,class:"guarantee-item"},[k(n,{title:e.title,content:e.desc,border:!1,size:"small"},null,8,["title","content"]),U(d("div",Y,null,512),[[o,e.tips]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-72bcb63c"]]);export{M as default};
