var S=Object.defineProperty,L=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var x=(s,e,t)=>e in s?S(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,l=(s,e)=>{for(var t in e||(e={}))Q.call(e,t)&&x(s,t,e[t]);if(D)for(var t of D(e))V.call(e,t)&&x(s,t,e[t]);return s},c=(s,e)=>L(s,M(e));import{g as z,ak as U,O as G,E as f,h as W,r as v,j as r,k as d,m,n as A,G as E,F as T,t as q,z as H,p as w,C as J,T as K,L as N}from"./vendor-96e68f0e.js";import{l as P}from"./inform-b29194b7.js";import{_ as X,r as Y,n as Z,P as ee}from"./index-87df9c0d.js";import{s as te}from"./useStorage-2d126acd.js";const oe={class:"footer-button"},ae=J("\u4E0B\u4E00\u6B65"),ne=z({setup(s){const e=U(),t=G(),{productCode:se="MMBBSF",agentCode:F="65434444",tenantId:g=9991000007,agencyCode:ue="3311222",insurerCode:y="zhongan",productCategory:b=1,templateId:re=1,orderNo:h="2022080217103534947"}=t.query,p=f([]),i=f({});f(!1);const _=a=>p.value.filter(o=>o.objectType===a),I=()=>{Y({orderNo:h,saleUserId:F,tenantId:g}).then(({code:a,data:o})=>{a==="10000"&&Object.assign(i.value,o)})},j=()=>{const a={insurerCode:y,orderNo:h,productCategory:b,tenantId:g};Promise.all([P(c(l({},a),{noticeType:4,objectType:1})),P(c(l({},a),{noticeType:5,objectType:2}))]).then(([{code:o,data:u},{code:C,data:B}])=>{o==="10000"&&C==="10000"&&(p.value=[...u,...B])})},k=a=>{var o;te.set("questionData",a),e.push({path:"/healthNotice",query:l({questionnaireType:a.questionnaireType,orderId:(o=i.value)==null?void 0:o.id},t.query)})},O=()=>{if(!p.value.every(o=>o.isDone===1)){K("\u8BF7\u5B8C\u6210\u6240\u6709\u544A\u77E5\u8FDB\u884C\u4E0B\u4E00\u6B65");return}Object.assign(i.value,{pageCode:"questionNotice",tenantOrderNoticeList:p.value}),Z(c(l({},i.value),{extInfo:c(l({},i.value.extInfo),{pageCode:"questionNotice"}),venderCode:y})).then(({code:o,data:u})=>{o==="10000"&&u.pageAction.pageAction==="jumpToPage"&&e.push({path:ee[u.pageAction.data.nextPageCode],query:t.query})})};return W(()=>{j(),I()}),(a,o)=>{const u=v("van-cell"),C=v("ProCard"),B=v("van-button"),$=v("ProPageWrap");return r(),d($,{class:"page-question-notice"},{default:m(()=>[_(1).length>0?(r(),d(C,{key:0,title:"\u6295\u4FDD\u4EBA"},{default:m(()=>[(r(!0),A(T,null,E(_(1),n=>(r(),d(u,{key:n.id,class:N({"is-active":n.isDone===2}),title:`\u300A${n.title}\u300B`,"is-link":"",value:`${n.isDone===1?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"}`,onClick:R=>k(n)},null,8,["class","title","value","onClick"]))),128))]),_:1})):q("",!0),_(2).length>0?(r(),d(C,{key:1,title:"\u88AB\u4FDD\u4EBA"},{default:m(()=>[(r(!0),A(T,null,E(_(2),n=>(r(),d(u,{key:n.id,class:N({"is-active":n.isDone===2}),title:`\u300A${n.title}\u300B`,"is-link":"",value:`${n.isDone===1?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"}`,onClick:R=>k(n)},null,8,["class","title","value","onClick"]))),128))]),_:1})):q("",!0),H("div",oe,[w(B,{type:"primary",onClick:O},{default:m(()=>[ae]),_:1})])]),_:1})}}});var _e=X(ne,[["__scopeId","data-v-25e63565"]]);export{_e as default};
