import{d as e,cq as a,r as l,L as t,V as n,Y as s,aF as i,by as o,cg as u,b as r,c,i as d,f as v,$ as p,a7 as m,F as f,E as g,h,g as y,j as C,e as b,a4 as k,br as w,w as L,a0 as S,b2 as E,G as U,cr as N,cs as $,W as j,bz as A,ct as B,aH as x,aS as F,aT as P}from"./index-653e0fa2.js";import{o as T}from"./utils-72dd23e0.js";import"./infoCollection-b13cf883.js";import"./trial-e0e6fd6d.js";const V={class:"guarantee-list"},_=(e=>(F("data-v-72bcb63c"),e=e(),P(),e))((()=>d("span",null,"保障计划",-1))),q={key:0,class:"plan-list"},z=["onClick"],D={key:2,class:"feerate-view"},G={key:0},I={class:"extinfo-info-list"},Y={class:"guarantee-detail"},H={class:"content"},M=e({name:"guarantee"});var O=U(e({...M,props:{dataSource:{default:()=>({})},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{default:5},planList:{default:()=>[]}},emits:["updateActivePlan"],setup(e,{emit:U}){var F,P;const M=e;a((e=>({"47c8f96c":v(O)})));const O=l(""),R=l((null==(P=null==(F=M.planList)?void 0:F[0])?void 0:P.planCode)||void 0),W=l(),J=l([]),K=l([]),Q=l(),X=t((()=>!!M.planList.length));n([()=>M.dataSource,()=>R.value],(()=>{var e,a;J.value=((null==(a=((null==(e=M.dataSource)?void 0:e.GUARANTEE)||[]).find((e=>e.planCode===R.value)))?void 0:a.data)||[]).filter((e=>e.isShowOn===`${s.YES}`))}),{immediate:!0,deep:!0});const Z=t((()=>{var e;return(null==(e=M.dataSource)?void 0:e.rateUri)||""})),ee=t((()=>!!(Q.value&&Q.value.paymentFrequencyValue&&Q.value.premiumUnit&&Z))),[ae,le]=i(!1),te=t((()=>{var e;return!(!J.value||!(null==(e=J.value)?void 0:e.length))&&(J.value.length>M.count&&(!!M.isShowClose||!ae.value))})),ne=()=>{le()},se=t((()=>{var e;return J.value&&(null==(e=J.value)?void 0:e.length)?J.value.length<=M.count||ae.value?J.value:J.value.slice(0,M.count):[]})),ie=l(!1),oe=e=>{const a=e||window.event;a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation?a.stopPropagation():a.cancelBubble=!0,"A"===a.target.tagName&&a.target.href&&(N()?$("",a.target.href):window.open(a.target.href))},ue=()=>{ie.value=!0,j((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.addEventListener("click",oe,!1)}))};o((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.removeEventListener("click",oe,!1)}));const re=()=>{T({fileType:"pdf",fileUri:Z.value})},ce=e=>{R.value=M.planList[e.name].planCode};return(e,a)=>{var l,t;const n=A,s=B,i=x,o=u("dompurify-html");return r(),c(p,null,[d("div",V,[d("div",{class:"header"},[_,d("span",{onClick:ue},"查看详情")]),v(X)?(r(),c("div",q,[(r(!0),c(p,null,m(e.planList,((e,a)=>(r(),c("div",{key:`${e.planCode}_${a}`,class:f("plan-list-item "+(e.planCode===v(R)?"plan-list-item-active":"")),onClick:a=>{return l=e.planCode,R.value=l,W.value=M.planList.findIndex((e=>e.planCode===l)),void U("updateActivePlan",l);var l}},[d("span",null,g(e.planName),1)],10,z)))),128))])):h("",!0),(r(!0),c(p,null,m(v(se),((e,a)=>(r(),y(n,{key:a,class:"guarantee-item",title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),v(te)?(r(),c("div",{key:1,class:"show-more",onClick:ne},[C(g(v(ae)?"收起":"查看更多")+" ",1),b(k,{name:"arrow-down-dobule",class:f(["icon",{showMore:v(ae)}])},null,8,["class"])])):h("",!0),v(ee)?(r(),c("div",D,[d("span",null,g(`${(null==(l=v(Q))?void 0:l.paymentFrequencyValue)||""}${(null==(t=v(Q))?void 0:t.premiumUnit)||""}`),1),v(Z)?(r(),c("span",{key:0,onClick:re},"查看保费")):h("",!0)])):h("",!0)]),b(w),b(i,{show:v(ie),"onUpdate:show":a[1]||(a[1]=e=>S(ie)?ie.value=e:null),title:"保障详情",class:"guarantee-popup"},{default:L((()=>[v(K)&&v(K).length>0?(r(),c("div",G,[d("div",I,[(r(!0),c(p,null,m(v(K),((e,a)=>(r(),y(n,{key:a,title:e.name,content:e.description,border:!1,size:"small"},null,8,["title","content"])))),128))]),b(w)])):h("",!0),v(X)?(r(),y(s,{key:1,active:v(W),"onUpdate:active":a[0]||(a[0]=e=>S(W)?W.value=e:null),list:e.planList.map(((e,a)=>({title:e.planName}))),class:"custom-plan-tab",onClickTab:ce},null,8,["active","list"])):h("",!0),d("div",Y,[(r(!0),c(p,null,m(v(J),((e,a)=>(r(),c("div",{key:a,class:"guarantee-item"},[b(n,{title:e.title,content:e.desc,border:!1,size:"small"},null,8,["title","content"]),E(d("div",H,null,512),[[o,e.tips]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-72bcb63c"]]);export{O as default};
