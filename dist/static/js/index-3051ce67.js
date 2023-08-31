import{d as e,cE as a,i as l,j as t,z as n,a6 as s,a_ as i,cp as o,ct as u,o as c,c as r,a as d,u as v,F as p,n as m,p as f,e as g,q as h,l as y,a8 as C,b,ae as k,aD as w,w as E,m as L,V as S,_ as U,cF as N,cG as _,E as j,bW as A,cH as B,as as $,at as x,au as F}from"./index-b7b909b3.js";import{o as P}from"./utils-00465905.js";import"./infoCollection-42bf6cdf.js";import"./trial-6d645cff.js";const V={class:"guarantee-list"},q=(e=>(x("data-v-72bcb63c"),e=e(),F(),e))((()=>d("span",null,"保障计划",-1))),z={key:0,class:"plan-list"},D=["onClick"],T={key:2,class:"feerate-view"},G={key:0},I={class:"extinfo-info-list"},H={class:"guarantee-detail"},M={class:"content"},O=e({name:"guarantee"});var R=U(e({...O,props:{dataSource:{default:()=>({})},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{default:5},planList:{default:()=>[]}},emits:["updateActivePlan"],setup(e,{emit:U}){var x,F;const O=e;a((e=>({"47c8f96c":v(R)})));const R=l(""),W=l((null==(F=null==(x=O.planList)?void 0:x[0])?void 0:F.planCode)||void 0),Y=l(),J=l([]),K=l([]),Q=l(),X=t((()=>!!O.planList.length));n([()=>O.dataSource,()=>W.value],(()=>{var e,a;J.value=((null==(a=((null==(e=O.dataSource)?void 0:e.GUARANTEE)||[]).find((e=>e.planCode===W.value)))?void 0:a.data)||[]).filter((e=>e.isShowOn===`${s.YES}`))}),{immediate:!0,deep:!0});const Z=t((()=>{var e;return(null==(e=O.dataSource)?void 0:e.rateUri)||""})),ee=t((()=>!!(Q.value&&Q.value.paymentFrequencyValue&&Q.value.premiumUnit&&Z))),[ae,le]=i(!1),te=t((()=>{var e;return!(!J.value||!(null==(e=J.value)?void 0:e.length))&&(J.value.length>O.count&&(!!O.isShowClose||!ae.value))})),ne=()=>{le()},se=t((()=>{var e;return J.value&&(null==(e=J.value)?void 0:e.length)?J.value.length<=O.count||ae.value?J.value:J.value.slice(0,O.count):[]})),ie=l(!1),oe=e=>{const a=e||window.event;a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation?a.stopPropagation():a.cancelBubble=!0,"A"===a.target.tagName&&a.target.href&&(N()?_("",a.target.href):window.open(a.target.href))},ue=()=>{ie.value=!0,j((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.addEventListener("click",oe,!1)}))};o((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.removeEventListener("click",oe,!1)}));const ce=()=>{P({fileType:"pdf",fileUri:Z.value})},re=e=>{W.value=O.planList[e.name].planCode};return(a,l)=>{var t,n;const s=A,i=B,o=$,N=u("dompurify-html");return c(),r(p,null,[d("div",V,[d("div",{class:"header"},[q,d("span",{onClick:ue},"查看详情")]),v(X)?(c(),r("div",z,[(c(!0),r(p,null,m(e.planList,((e,a)=>(c(),r("div",{key:`${e.planCode}_${a}`,class:f("plan-list-item "+(e.planCode===v(W)?"plan-list-item-active":"")),onClick:a=>{return l=e.planCode,W.value=l,Y.value=O.planList.findIndex((e=>e.planCode===l)),void U("updateActivePlan",l);var l}},[d("span",null,g(e.planName),1)],10,D)))),128))])):h("",!0),(c(!0),r(p,null,m(v(se),((e,a)=>(c(),y(s,{key:a,class:"guarantee-item",title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),v(te)?(c(),r("div",{key:1,class:"show-more",onClick:ne},[C(g(v(ae)?"收起":"查看更多")+" ",1),b(k,{name:"arrow-down-dobule",class:f(["icon",{showMore:v(ae)}])},null,8,["class"])])):h("",!0),v(ee)?(c(),r("div",T,[d("span",null,g(`${(null==(t=v(Q))?void 0:t.paymentFrequencyValue)||""}${(null==(n=v(Q))?void 0:n.premiumUnit)||""}`),1),v(Z)?(c(),r("span",{key:0,onClick:ce},"查看保费")):h("",!0)])):h("",!0)]),b(w),b(o,{show:v(ie),"onUpdate:show":l[1]||(l[1]=e=>L(ie)?ie.value=e:null),title:"保障详情",class:"guarantee-popup"},{default:E((()=>[v(K)&&v(K).length>0?(c(),r("div",G,[d("div",I,[(c(!0),r(p,null,m(v(K),((e,a)=>(c(),y(s,{key:a,title:e.name,content:e.description,border:!1,size:"small"},null,8,["title","content"])))),128))]),b(w)])):h("",!0),v(X)?(c(),y(i,{key:1,active:v(Y),"onUpdate:active":l[0]||(l[0]=e=>L(Y)?Y.value=e:null),list:e.planList.map(((e,a)=>({title:e.planName}))),class:"custom-plan-tab",onClickTab:re},null,8,["active","list"])):h("",!0),d("div",H,[(c(!0),r(p,null,m(v(J),((e,a)=>(c(),r("div",{key:a,class:"guarantee-item"},[b(s,{title:e.title,content:e.desc,border:!1,size:"small"},null,8,["title","content"]),S(d("div",M,null,512),[[N,e.tips]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-72bcb63c"]]);export{R as default};
