import{d as a,co as e,r as l,L as t,V as n,Y as s,aZ as i,by as o,cf as u,b as r,c,i as d,f as v,$ as p,a7 as m,F as f,E as g,h,g as y,j as C,e as b,a4 as k,bp as w,w as L,a0 as E,aA as S,G as U,cp as $,cq as A,W as N,bz as j,cr as B,a$ as x,aD as P,aE as V}from"./index-a1136dfb.js";import{o as _}from"./utils-cc3660ca.js";import"./infoCollection-747aeaaa.js";import"./trial-61855b13.js";const q={class:"guarantee-list"},z=(a=>(P("data-v-72bcb63c"),a=a(),V(),a))((()=>d("span",null,"保障计划",-1))),D={key:0,class:"plan-list"},F=["onClick"],T={key:2,class:"feerate-view"},G={key:0},I={class:"extinfo-info-list"},Y={class:"guarantee-detail"},M={class:"content"},O=a({name:"guarantee"});var R=U(a({...O,props:{dataSource:{default:()=>({})},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{default:5},planList:{default:()=>[]}},emits:["updateActivePlan"],setup(a,{emit:U}){var P,V;const O=a;e((a=>({"47c8f96c":v(R)})));const R=l(""),W=l((null==(V=null==(P=O.planList)?void 0:P[0])?void 0:V.planCode)||void 0),Z=l(),H=l([]),J=l([]),K=l(),Q=t((()=>!!O.planList.length));n([()=>O.dataSource,()=>W.value],(()=>{var a,e;H.value=((null==(e=((null==(a=O.dataSource)?void 0:a.GUARANTEE)||[]).find((a=>a.planCode===W.value)))?void 0:e.data)||[]).filter((a=>a.isShowOn===`${s.YES}`))}),{immediate:!0,deep:!0});const X=t((()=>{var a;return(null==(a=O.dataSource)?void 0:a.rateUri)||""})),aa=t((()=>!!(K.value&&K.value.paymentFrequencyValue&&K.value.premiumUnit&&X))),[ea,la]=i(!1),ta=t((()=>{var a;return!(!H.value||!(null==(a=H.value)?void 0:a.length))&&(H.value.length>O.count&&(!!O.isShowClose||!ea.value))})),na=()=>{la()},sa=t((()=>{var a;return H.value&&(null==(a=H.value)?void 0:a.length)?H.value.length<=O.count||ea.value?H.value:H.value.slice(0,O.count):[]})),ia=l(!1),oa=a=>{const e=a||window.event;e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,"A"===e.target.tagName&&e.target.href&&($()?A("",e.target.href):window.open(e.target.href))},ua=()=>{ia.value=!0,N((()=>{var a,e;null==(e=null==(a=document.getElementsByClassName("guarantee-detail"))?void 0:a[0])||e.addEventListener("click",oa,!1)}))};o((()=>{var a,e;null==(e=null==(a=document.getElementsByClassName("guarantee-detail"))?void 0:a[0])||e.removeEventListener("click",oa,!1)}));const ra=()=>{_({fileType:"pdf",fileUri:X.value})},ca=a=>{W.value=O.planList[a.name].planCode};return(e,l)=>{var t,n;const s=j,i=B,o=x,$=u("dompurify-html");return r(),c(p,null,[d("div",q,[d("div",{class:"header"},[z,d("span",{onClick:ua},"查看详情")]),v(Q)?(r(),c("div",D,[(r(!0),c(p,null,m(a.planList,((a,e)=>(r(),c("div",{key:`${a.planCode}_${e}`,class:f("plan-list-item "+(a.planCode===v(W)?"plan-list-item-active":"")),onClick:e=>{return l=a.planCode,W.value=l,Z.value=O.planList.findIndex((a=>a.planCode===l)),void U("updateActivePlan",l);var l}},[d("span",null,g(a.planName),1)],10,F)))),128))])):h("",!0),(r(!0),c(p,null,m(v(sa),((a,e)=>(r(),y(s,{key:e,class:"guarantee-item",title:a.title,content:a.desc,border:!1},null,8,["title","content"])))),128)),v(ta)?(r(),c("div",{key:1,class:"show-more",onClick:na},[C(g(v(ea)?"收起":"查看更多")+" ",1),b(k,{name:"arrow-down-dobule",class:f(["icon",{showMore:v(ea)}])},null,8,["class"])])):h("",!0),v(aa)?(r(),c("div",T,[d("span",null,g(`${(null==(t=v(K))?void 0:t.paymentFrequencyValue)||""}${(null==(n=v(K))?void 0:n.premiumUnit)||""}`),1),v(X)?(r(),c("span",{key:0,onClick:ra},"查看保费")):h("",!0)])):h("",!0)]),b(w),b(o,{show:v(ia),"onUpdate:show":l[1]||(l[1]=a=>E(ia)?ia.value=a:null),title:"保障详情",class:"guarantee-popup"},{default:L((()=>[v(J)&&v(J).length>0?(r(),c("div",G,[d("div",I,[(r(!0),c(p,null,m(v(J),((a,e)=>(r(),y(s,{key:e,title:a.name,content:a.description,border:!1,size:"small"},null,8,["title","content"])))),128))]),b(w)])):h("",!0),v(Q)?(r(),y(i,{key:1,active:v(Z),"onUpdate:active":l[0]||(l[0]=a=>E(Z)?Z.value=a:null),list:a.planList.map(((a,e)=>({title:a.planName}))),class:"custom-plan-tab",onClickTab:ca},null,8,["active","list"])):h("",!0),d("div",Y,[(r(!0),c(p,null,m(v(H),((a,e)=>(r(),c("div",{key:e,class:"guarantee-item"},[b(s,{title:a.title,content:a.desc,border:!1,size:"small"},null,8,["title","content"]),S(d("div",M,null,512),[[$,a.tips]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-72bcb63c"]]);export{R as default};
