var G=Object.defineProperty,J=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var S=(u,o,n)=>o in u?G(u,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):u[o]=n,r=(u,o)=>{for(var n in o||(o={}))Y.call(o,n)&&S(u,n,o[n]);if(q)for(var n of q(o))K.call(o,n)&&S(u,n,o[n]);return u},c=(u,o)=>J(u,W(o));import{g as X,ak as Z,O as w,E as p,h as ee,r as D,j as i,k as _,m as E,p as I,n as g,G as y,A as l,F as k,z as te,C as ae,T as oe,L as N}from"./vendor-95deb895.js";import{l as b}from"./inform-3cc3c8c2.js";import{_ as ne,r as se,n as ue,P as le}from"./index-194a043d.js";import{Q as v,a as C,I as ie,H as re}from"./notice-9e0d47fe.js";import{s as ce}from"./useStorage-7cd61e89.js";import{g as U}from"./verify-bb68adf5.js";const de={class:"footer-button"},pe=ae("\u4E0B\u4E00\u6B65"),_e=X({setup(u){const o=Z(),n=w(),{productCode:j="MMBBSF",agentCode:M="65434444",tenantId:T=9991000007,agencyCode:ve="3311222",insurerCode:O="zhongan",productCategory:R=1,templateId:Ce=1,orderNo:h="2022080217103534947"}=n.query,B=p([]),d=p({});p(!1);const P=p([]),x=p([]),$=t=>B.value.filter(a=>a.objectType===t),L=()=>{se({orderNo:h,saleUserId:M,tenantId:T}).then(({code:t,data:a})=>{t==="10000"&&Object.assign(d.value,a)})},Q=()=>{const t={orderNo:h,productCode:j,tenantId:T,objectType:re};U(r({},t)).then(({code:a,data:s})=>{a==="10000"&&(x.value=s||[])}),U(c(r({},t),{objectType:ie})).then(({code:a,data:s})=>{a==="10000"&&(P.value=s||[])})},z=()=>{const t={insurerCode:O,orderNo:h,productCategory:R,tenantId:T};Promise.all([b(c(r({},t),{noticeType:4,objectType:1})),b(c(r({},t),{noticeType:5,objectType:2}))]).then(([{code:a,data:s},{code:f,data:A}])=>{a==="10000"&&f==="10000"&&(B.value=[...s,...A])})},m=t=>{var a;ce.set("questionData",t),o.push({path:"/healthNotice",query:r({questionnaireType:(t==null?void 0:t.materialSource)?1:t.questionnaireType,orderId:(a=d.value)==null?void 0:a.id},n.query)})},H=()=>{if(!B.value.every(a=>a.isDone===1)){oe("\u8BF7\u5B8C\u6210\u6240\u6709\u544A\u77E5\u8FDB\u884C\u4E0B\u4E00\u6B65");return}Object.assign(d.value,{pageCode:"questionNotice",tenantOrderNoticeList:B.value}),ue(c(r({},d.value),{extInfo:c(r({},d.value.extInfo),{pageCode:"questionNotice"}),venderCode:O})).then(({code:a,data:s})=>{a==="10000"&&s.pageAction.pageAction==="jumpToPage"&&o.push({path:le[s.pageAction.data.nextPageCode],query:n.query})})};return ee(()=>{z(),Q(),L()}),(t,a)=>{const s=D("van-cell"),f=D("ProCard"),A=D("van-button"),V=D("ProPageWrap");return i(),_(V,{class:"page-question-notice"},{default:E(()=>[I(f,{title:"\u6295\u4FDD\u4EBA"},{default:E(()=>[(i(!0),g(k,null,y($(l(v)),e=>(i(),_(s,{key:e.id,class:N({"is-active":e.isDone===l(C)}),title:`\u300A${e.title}\u300B`,"is-link":"",value:`${e.isDone===l(v)?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"}`,onClick:F=>m(e)},null,8,["class","title","value","onClick"]))),128)),(i(!0),g(k,null,y(x.value,e=>(i(),_(s,{key:e.id,class:N({"is-active":e.isDone===l(C)}),title:`\u300A${e.materialName}\u300B`,"is-link":"",value:`${e.isDone===l(v)?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"}`,onClick:F=>m(e)},null,8,["class","title","value","onClick"]))),128))]),_:1}),I(f,{title:"\u88AB\u4FDD\u4EBA"},{default:E(()=>[(i(!0),g(k,null,y($(l(C)),e=>(i(),_(s,{key:e.id,class:N({"is-active":e.isDone===l(C)}),title:`\u300A${e.title}\u300B`,"is-link":"",value:`${e.isDone===l(v)?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"}`,onClick:F=>m(e)},null,8,["class","title","value","onClick"]))),128)),(i(!0),g(k,null,y(P.value,e=>(i(),_(s,{key:e.id,class:N({"is-active":e.isDone===l(C)}),title:`\u300A${e.materialName}\u300B`,"is-link":"",value:`${e.isDone===l(v)?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"}`,onClick:F=>m(e)},null,8,["class","title","value","onClick"]))),128))]),_:1}),te("div",de,[I(A,{type:"primary",onClick:H},{default:E(()=>[pe]),_:1})])]),_:1})}}});var ke=ne(_e,[["__scopeId","data-v-913f2286"]]);export{ke as default};
