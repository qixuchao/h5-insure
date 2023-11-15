import{d as a,dQ as e,j as l,k as t,z as n,a6 as s,b_ as i,cq as o,dy as u,o as r,c as d,a as c,u as v,F as p,q as m,n as f,e as g,f as y,m as h,a8 as k,b as C,af as w,aH as b,w as S,p as L,V as E,_ as j,dR as U,E as N,cX as _,dS as A,au as B,av as P,aw as $}from"./index-672ca818.js";import{a as q}from"./jsbridgePromise-1a7f0ae2.js";import{o as x}from"./utils-3ae1d114.js";import"./infoCollection-0940603b.js";import"./trial-31fd33aa.js";const V={class:"guarantee-list"},z=(a=>(P("data-v-72bcb63c"),a=a(),$(),a))((()=>c("span",null,"保障计划",-1))),F={key:0,class:"plan-list"},T=["onClick"],D={key:2,class:"feerate-view"},I={key:0},R={class:"extinfo-info-list"},G={class:"guarantee-detail"},H={class:"content"},M=a({name:"guarantee"});var O=j(a({...M,props:{dataSource:{default:()=>({})},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{default:5},planList:{default:()=>[]}},emits:["updateActivePlan"],setup(a,{emit:j}){var P,$;const M=a;e((a=>({"47c8f96c":v(O)})));const O=l(""),Q=l((null==($=null==(P=M.planList)?void 0:P[0])?void 0:$.planCode)||void 0),X=l(),Y=l([]),J=l([]),K=l(),W=t((()=>!!M.planList.length));n([()=>M.dataSource,()=>Q.value],(()=>{var a,e;Y.value=((null==(e=((null==(a=M.dataSource)?void 0:a.GUARANTEE)||[]).find((a=>a.planCode===Q.value)))?void 0:e.data)||[]).filter((a=>a.isShowOn===`${s.YES}`))}),{immediate:!0,deep:!0});const Z=t((()=>{var a;return(null==(a=M.dataSource)?void 0:a.rateUri)||""})),aa=t((()=>!!(K.value&&K.value.paymentFrequencyValue&&K.value.premiumUnit&&Z))),[ea,la]=i(!1),ta=t((()=>{var a;return!(!Y.value||!(null==(a=Y.value)?void 0:a.length))&&(Y.value.length>M.count&&(!!M.isShowClose||!ea.value))})),na=()=>{la()},sa=t((()=>{var a;return Y.value&&(null==(a=Y.value)?void 0:a.length)?Y.value.length<=M.count||ea.value?Y.value:Y.value.slice(0,M.count):[]})),ia=l(!1),oa=a=>{const e=a||window.event;e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,"A"===e.target.tagName&&e.target.href&&(U()?q("",e.target.href):window.open(e.target.href))},ua=()=>{ia.value=!0,N((()=>{var a,e;null==(e=null==(a=document.getElementsByClassName("guarantee-detail"))?void 0:a[0])||e.addEventListener("click",oa,!1)}))};o((()=>{var a,e;null==(e=null==(a=document.getElementsByClassName("guarantee-detail"))?void 0:a[0])||e.removeEventListener("click",oa,!1)}));const ra=()=>{x({fileType:"pdf",fileUri:Z.value})},da=a=>{Q.value=M.planList[a.name].planCode};return(a,e)=>{var l,t;const n=_,s=A,i=B,o=u("dompurify-html");return r(),d(p,null,[c("div",V,[c("div",{class:"header"},[z,c("span",{onClick:ua},"查看详情")]),v(W)?(r(),d("div",F,[(r(!0),d(p,null,m(a.planList,((a,e)=>(r(),d("div",{key:`${a.planCode}_${e}`,class:f("plan-list-item "+(a.planCode===v(Q)?"plan-list-item-active":"")),onClick:e=>{return l=a.planCode,Q.value=l,X.value=M.planList.findIndex((a=>a.planCode===l)),void j("updateActivePlan",l);var l}},[c("span",null,g(a.planName),1)],10,T)))),128))])):y("",!0),(r(!0),d(p,null,m(v(sa),((a,e)=>(r(),h(n,{key:e,class:"guarantee-item",title:a.title,content:a.desc,border:!1},null,8,["title","content"])))),128)),v(ta)?(r(),d("div",{key:1,class:"show-more",onClick:na},[k(g(v(ea)?"收起":"查看更多")+" ",1),C(w,{name:"arrow-down-dobule",class:f(["icon",{showMore:v(ea)}])},null,8,["class"])])):y("",!0),v(aa)?(r(),d("div",D,[c("span",null,g(`${(null==(l=v(K))?void 0:l.paymentFrequencyValue)||""}${(null==(t=v(K))?void 0:t.premiumUnit)||""}`),1),v(Z)?(r(),d("span",{key:0,onClick:ra},"查看保费")):y("",!0)])):y("",!0)]),C(b),C(i,{show:v(ia),"onUpdate:show":e[1]||(e[1]=a=>L(ia)?ia.value=a:null),title:"保障详情",class:"guarantee-popup"},{default:S((()=>[v(J)&&v(J).length>0?(r(),d("div",I,[c("div",R,[(r(!0),d(p,null,m(v(J),((a,e)=>(r(),h(n,{key:e,title:a.name,content:a.description,border:!1,size:"small"},null,8,["title","content"])))),128))]),C(b)])):y("",!0),v(W)?(r(),h(s,{key:1,active:v(X),"onUpdate:active":e[0]||(e[0]=a=>L(X)?X.value=a:null),list:a.planList.map(((a,e)=>({title:a.planName}))),class:"custom-plan-tab",onClickTab:da},null,8,["active","list"])):y("",!0),c("div",G,[(r(!0),d(p,null,m(v(Y),((a,e)=>(r(),d("div",{key:e,class:"guarantee-item"},[C(n,{title:a.title,content:a.desc,border:!1,size:"small"},null,8,["title","content"]),E(c("div",H,null,512),[[o,a.tips]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-72bcb63c"]]);export{O as default};
