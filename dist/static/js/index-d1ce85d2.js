var G=Object.defineProperty,J=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var $=(s,n,o)=>n in s?G(s,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[n]=o,r=(s,n)=>{for(var o in n||(n={}))Y.call(n,o)&&$(s,o,n[o]);if(S)for(var o of S(n))K.call(n,o)&&$(s,o,n[o]);return s},c=(s,n)=>J(s,W(n));import{g as X,a9 as Z,O as w,E as p,h as ee,r as y,j as i,k as _,m as D,p as P,n as E,G as g,A as l,F as k,z as te,C as ae,T as ne,L as N}from"./vendor-af6fda0a.js";import{l as b}from"./inform-d8397acd.js";import{_ as oe,r as ue,n as se,P as le}from"./index-b4caab31.js";import{Q as v,a as C,I as ie,H as re}from"./notice-1477e413.js";import{s as ce}from"./useStorage-12df92c8.js";import{g as U}from"./verify-988cc19a.js";const de={class:"footer-button"},pe=ae("\u4E0B\u4E00\u6B65"),_e=X({setup(s){const n=Z(),o=w(),{productCode:j="MMBBSF",agentCode:M="65434444",tenantId:T=9991000007,agencyCode:ve="3311222",insurerCode:x="zhongan",productCategory:R=1,templateId:Ce=1,orderNo:h="2022080217103534947"}=o.query,B=p([]),d=p({});p(!1);const A=p([]),F=p([]),q=t=>B.value.filter(a=>a.objectType===t),L=()=>{ue({orderNo:h,saleUserId:M,tenantId:T}).then(({code:t,data:a})=>{t==="10000"&&Object.assign(d.value,a)})},Q=()=>{const t={orderNo:h,productCode:j,tenantId:T,objectType:re};U(r({},t)).then(({code:a,data:u})=>{a==="10000"&&(F.value=u||[])}),U(c(r({},t),{objectType:ie})).then(({code:a,data:u})=>{a==="10000"&&(A.value=u||[])})},z=()=>{const t={insurerCode:x,orderNo:h,productCategory:R,tenantId:T};Promise.all([b(c(r({},t),{noticeType:4,objectType:1})),b(c(r({},t),{noticeType:5,objectType:2}))]).then(([{code:a,data:u},{code:f,data:I}])=>{a==="10000"&&f==="10000"&&(B.value=[...u,...I])})},m=t=>{var a;ce.set("questionData",t),n.push({path:"/healthNotice",query:r({materialType:(t==null?void 0:t.materialSource)?"product":"question",questionnaireType:(t==null?void 0:t.materialSource)?1:t.questionnaireType,orderId:(a=d.value)==null?void 0:a.id},o.query)})},H=()=>{if(![...A.value,...F.value,...B.value].every(a=>a.isDone===1)){ne("\u8BF7\u5B8C\u6210\u6240\u6709\u544A\u77E5\u8FDB\u884C\u4E0B\u4E00\u6B65");return}Object.assign(d.value,{pageCode:"questionNotice",tenantOrderNoticeList:B.value}),se(c(r({},d.value),{extInfo:c(r({},d.value.extInfo),{pageCode:"questionNotice"}),venderCode:x})).then(({code:a,data:u})=>{a==="10000"&&u.pageAction.pageAction==="jumpToPage"&&n.push({path:le[u.pageAction.data.nextPageCode],query:o.query})})};return ee(()=>{z(),Q(),L()}),(t,a)=>{const u=y("van-cell"),f=y("ProCard"),I=y("van-button"),V=y("ProPageWrap");return i(),_(V,{class:"page-question-notice"},{default:D(()=>[P(f,{title:"\u6295\u4FDD\u4EBA"},{default:D(()=>[(i(!0),E(k,null,g(q(l(v)),e=>(i(),_(u,{key:e.id,class:N({"is-active":e.isDone===l(C)}),title:`\u300A${e.title}\u300B`,"is-link":"",value:`${e.isDone===l(v)?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"}`,onClick:O=>m(e)},null,8,["class","title","value","onClick"]))),128)),(i(!0),E(k,null,g(F.value,e=>(i(),_(u,{key:e.id,class:N({"is-active":e.isDone===l(C)}),title:`\u300A${e.materialName}\u300B`,"is-link":"",value:`${e.isDone===l(v)?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"}`,onClick:O=>m(e)},null,8,["class","title","value","onClick"]))),128))]),_:1}),P(f,{title:"\u88AB\u4FDD\u4EBA"},{default:D(()=>[(i(!0),E(k,null,g(q(l(C)),e=>(i(),_(u,{key:e.id,class:N({"is-active":e.isDone===l(C)}),title:`\u300A${e.title}\u300B`,"is-link":"",value:`${e.isDone===l(v)?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"}`,onClick:O=>m(e)},null,8,["class","title","value","onClick"]))),128)),(i(!0),E(k,null,g(A.value,e=>(i(),_(u,{key:e.id,class:N({"is-active":e.isDone===l(C)}),title:`\u300A${e.materialName}\u300B`,"is-link":"",value:`${e.isDone===l(v)?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"}`,onClick:O=>m(e)},null,8,["class","title","value","onClick"]))),128))]),_:1}),te("div",de,[P(I,{type:"primary",onClick:H},{default:D(()=>[pe]),_:1})])]),_:1})}}});var ke=oe(_e,[["__scopeId","data-v-89a99994"]]);export{ke as default};
