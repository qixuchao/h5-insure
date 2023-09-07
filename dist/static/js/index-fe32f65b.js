import{d as e,d8 as a,i as l,j as t,z as n,a6 as s,cs as i,c0 as o,cY as u,o as c,c as d,a as r,u as v,F as p,n as m,p as f,e as g,q as h,l as y,a8 as C,b as k,ae as w,aE as b,w as E,m as L,V as S,_ as U,d9 as N,da as j,E as A,cm as B,db as $,as as _,at as x,au as P}from"./index-498c0d29.js";import{o as V}from"./utils-88caec7c.js";import"./infoCollection-52253c27.js";import"./trial-362bea3d.js";const q={class:"guarantee-list"},z=(e=>(x("data-v-72bcb63c"),e=e(),P(),e))((()=>r("span",null,"保障计划",-1))),F={key:0,class:"plan-list"},T=["onClick"],D={key:2,class:"feerate-view"},I={key:0},Y={class:"extinfo-info-list"},G={class:"guarantee-detail"},M={class:"content"},O=e({name:"guarantee"});var R=U(e({...O,props:{dataSource:{default:()=>({})},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{default:5},planList:{default:()=>[]}},emits:["updateActivePlan"],setup(e,{emit:U}){var x,P;const O=e;a((e=>({"47c8f96c":v(R)})));const R=l(""),H=l((null==(P=null==(x=O.planList)?void 0:x[0])?void 0:P.planCode)||void 0),J=l(),K=l([]),Q=l([]),W=l(),X=t((()=>!!O.planList.length));n([()=>O.dataSource,()=>H.value],(()=>{var e,a;K.value=((null==(a=((null==(e=O.dataSource)?void 0:e.GUARANTEE)||[]).find((e=>e.planCode===H.value)))?void 0:a.data)||[]).filter((e=>e.isShowOn===`${s.YES}`))}),{immediate:!0,deep:!0});const Z=t((()=>{var e;return(null==(e=O.dataSource)?void 0:e.rateUri)||""})),ee=t((()=>!!(W.value&&W.value.paymentFrequencyValue&&W.value.premiumUnit&&Z))),[ae,le]=i(!1),te=t((()=>{var e;return!(!K.value||!(null==(e=K.value)?void 0:e.length))&&(K.value.length>O.count&&(!!O.isShowClose||!ae.value))})),ne=()=>{le()},se=t((()=>{var e;return K.value&&(null==(e=K.value)?void 0:e.length)?K.value.length<=O.count||ae.value?K.value:K.value.slice(0,O.count):[]})),ie=l(!1),oe=e=>{const a=e||window.event;a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation?a.stopPropagation():a.cancelBubble=!0,"A"===a.target.tagName&&a.target.href&&(N()?j("",a.target.href):window.open(a.target.href))},ue=()=>{ie.value=!0,A((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.addEventListener("click",oe,!1)}))};o((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.removeEventListener("click",oe,!1)}));const ce=()=>{V({fileType:"pdf",fileUri:Z.value})},de=e=>{H.value=O.planList[e.name].planCode};return(e,a)=>{var l,t;const n=B,s=$,i=_,o=u("dompurify-html");return c(),d(p,null,[r("div",q,[r("div",{class:"header"},[z,r("span",{onClick:ue},"查看详情")]),v(X)?(c(),d("div",F,[(c(!0),d(p,null,m(e.planList,((e,a)=>(c(),d("div",{key:`${e.planCode}_${a}`,class:f("plan-list-item "+(e.planCode===v(H)?"plan-list-item-active":"")),onClick:a=>{return l=e.planCode,H.value=l,J.value=O.planList.findIndex((e=>e.planCode===l)),void U("updateActivePlan",l);var l}},[r("span",null,g(e.planName),1)],10,T)))),128))])):h("",!0),(c(!0),d(p,null,m(v(se),((e,a)=>(c(),y(n,{key:a,class:"guarantee-item",title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),v(te)?(c(),d("div",{key:1,class:"show-more",onClick:ne},[C(g(v(ae)?"收起":"查看更多")+" ",1),k(w,{name:"arrow-down-dobule",class:f(["icon",{showMore:v(ae)}])},null,8,["class"])])):h("",!0),v(ee)?(c(),d("div",D,[r("span",null,g(`${(null==(l=v(W))?void 0:l.paymentFrequencyValue)||""}${(null==(t=v(W))?void 0:t.premiumUnit)||""}`),1),v(Z)?(c(),d("span",{key:0,onClick:ce},"查看保费")):h("",!0)])):h("",!0)]),k(b),k(i,{show:v(ie),"onUpdate:show":a[1]||(a[1]=e=>L(ie)?ie.value=e:null),title:"保障详情",class:"guarantee-popup"},{default:E((()=>[v(Q)&&v(Q).length>0?(c(),d("div",I,[r("div",Y,[(c(!0),d(p,null,m(v(Q),((e,a)=>(c(),y(n,{key:a,title:e.name,content:e.description,border:!1,size:"small"},null,8,["title","content"])))),128))]),k(b)])):h("",!0),v(X)?(c(),y(s,{key:1,active:v(J),"onUpdate:active":a[0]||(a[0]=e=>L(J)?J.value=e:null),list:e.planList.map(((e,a)=>({title:e.planName}))),class:"custom-plan-tab",onClickTab:de},null,8,["active","list"])):h("",!0),r("div",G,[(c(!0),d(p,null,m(v(K),((e,a)=>(c(),d("div",{key:a,class:"guarantee-item"},[k(n,{title:e.title,content:e.desc,border:!1,size:"small"},null,8,["title","content"]),S(r("div",M,null,512),[[o,e.tips]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-72bcb63c"]]);export{R as default};
