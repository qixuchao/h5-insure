import{d as e,co as a,r as l,L as t,V as n,Y as s,aZ as i,by as o,ce as u,b as r,c,i as d,f as v,$ as p,a7 as m,F as f,E as g,h,g as y,j as C,e as k,a4 as b,bp as w,w as L,a0 as E,aA as S,G as U,cp as $,cq as A,W as N,bz as j,cr as B,a$ as x,aD as P,aE as V}from"./index-2aa81fa9.js";import{o as _}from"./utils-4538dc24.js";import"./infoCollection-0494b326.js";import"./trial-ec1f7710.js";const q={class:"guarantee-list"},z=(e=>(P("data-v-72bcb63c"),e=e(),V(),e))((()=>d("span",null,"保障计划",-1))),D={key:0,class:"plan-list"},F=["onClick"],T={key:2,class:"feerate-view"},G={key:0},I={class:"extinfo-info-list"},Y={class:"guarantee-detail"},M={class:"content"},O=e({name:"guarantee"});var R=U(e({...O,props:{dataSource:{default:()=>({})},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{default:5},planList:{default:()=>[]}},emits:["updateActivePlan"],setup(e,{emit:U}){var P,V;const O=e;a((e=>({"47c8f96c":v(R)})));const R=l(""),W=l((null==(V=null==(P=O.planList)?void 0:P[0])?void 0:V.planCode)||void 0),Z=l(),H=l([]),J=l([]),K=l(),Q=t((()=>!!O.planList.length));n([()=>O.dataSource,()=>W.value],(()=>{var e,a;H.value=((null==(a=((null==(e=O.dataSource)?void 0:e.GUARANTEE)||[]).find((e=>e.planCode===W.value)))?void 0:a.data)||[]).filter((e=>e.isShowOn===`${s.YES}`))}),{immediate:!0,deep:!0});const X=t((()=>{var e;return(null==(e=O.dataSource)?void 0:e.rateUri)||""})),ee=t((()=>!!(K.value&&K.value.paymentFrequencyValue&&K.value.premiumUnit&&X))),[ae,le]=i(!1),te=t((()=>{var e;return!(!H.value||!(null==(e=H.value)?void 0:e.length))&&(H.value.length>O.count&&(!!O.isShowClose||!ae.value))})),ne=()=>{le()},se=t((()=>{var e;return H.value&&(null==(e=H.value)?void 0:e.length)?H.value.length<=O.count||ae.value?H.value:H.value.slice(0,O.count):[]})),ie=l(!1),oe=e=>{const a=e||window.event;a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation?a.stopPropagation():a.cancelBubble=!0,"A"===a.target.tagName&&a.target.href&&($()?A("",a.target.href):window.open(a.target.href))},ue=()=>{ie.value=!0,N((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.addEventListener("click",oe,!1)}))};o((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.removeEventListener("click",oe,!1)}));const re=()=>{_({fileType:"pdf",fileUri:X.value})},ce=e=>{W.value=O.planList[e.name].planCode};return(a,l)=>{var t,n;const s=j,i=B,o=x,$=u("dompurify-html");return r(),c(p,null,[d("div",q,[d("div",{class:"header"},[z,d("span",{onClick:ue},"查看详情")]),v(Q)?(r(),c("div",D,[(r(!0),c(p,null,m(e.planList,((e,a)=>(r(),c("div",{key:`${e.planCode}_${a}`,class:f("plan-list-item "+(e.planCode===v(W)?"plan-list-item-active":"")),onClick:a=>{return l=e.planCode,W.value=l,Z.value=O.planList.findIndex((e=>e.planCode===l)),void U("updateActivePlan",l);var l}},[d("span",null,g(e.planName),1)],10,F)))),128))])):h("",!0),(r(!0),c(p,null,m(v(se),((e,a)=>(r(),y(s,{key:a,class:"guarantee-item",title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),v(te)?(r(),c("div",{key:1,class:"show-more",onClick:ne},[C(g(v(ae)?"收起":"查看更多")+" ",1),k(b,{name:"arrow-down-dobule",class:f(["icon",{showMore:v(ae)}])},null,8,["class"])])):h("",!0),v(ee)?(r(),c("div",T,[d("span",null,g(`${(null==(t=v(K))?void 0:t.paymentFrequencyValue)||""}${(null==(n=v(K))?void 0:n.premiumUnit)||""}`),1),v(X)?(r(),c("span",{key:0,onClick:re},"查看保费")):h("",!0)])):h("",!0)]),k(w),k(o,{show:v(ie),"onUpdate:show":l[1]||(l[1]=e=>E(ie)?ie.value=e:null),title:"保障详情",class:"guarantee-popup"},{default:L((()=>[v(J)&&v(J).length>0?(r(),c("div",G,[d("div",I,[(r(!0),c(p,null,m(v(J),((e,a)=>(r(),y(s,{key:a,title:e.name,content:e.description,border:!1,size:"small"},null,8,["title","content"])))),128))]),k(w)])):h("",!0),v(Q)?(r(),y(i,{key:1,active:v(Z),"onUpdate:active":l[0]||(l[0]=e=>E(Z)?Z.value=e:null),list:e.planList.map(((e,a)=>({title:e.planName}))),class:"custom-plan-tab",onClickTab:ce},null,8,["active","list"])):h("",!0),d("div",Y,[(r(!0),c(p,null,m(v(H),((e,a)=>(r(),c("div",{key:a,class:"guarantee-item"},[k(s,{title:e.title,content:e.desc,border:!1,size:"small"},null,8,["title","content"]),S(d("div",M,null,512),[[$,e.tips]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-72bcb63c"]]);export{R as default};
