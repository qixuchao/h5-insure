import{_ as e,d as a,u as t,a as o,r as s,G as i,C as l,b as n,c as u,e as c,w as r,f as d,h as p,F as v,i as y,g as C,L as m,j as f,n as g,p as k,H as b,T as h,M as j,N as q,O as N,P as T,B as I}from"./index-444bee7b.js";import{l as D}from"./inform-9534b242.js";import{Q as _,a as x,H as P,b as O,I as $,c as A}from"./notice-a5228c22.js";import{g as B}from"./verify-b12362a1.js";import"./pdfh5-008ca364.js";const M={class:"footer-button"};var S=e(a({__name:"index",setup(e){const a=t(),S=o(),{productCode:F="MMBBSF",agentCode:H="65434444",tenantId:L=9991000007,agencyCode:w="3311222",insurerCode:z="zhongan",productCategory:G=1,templateId:Q=1,orderNo:U="2022080217103534947"}=S.query,W=s([]),E=s({});s(!1);const J=s([]),K=s([]),R=e=>W.value.filter((a=>a.objectType===e)),V=e=>{var t;b.set("questionData",e),a.push({path:"/healthNotice",query:{materialType:(null==e?void 0:e.materialSource)?"product":"question",questionnaireType:(null==e?void 0:e.materialSource)?1:e.questionnaireType,orderId:null==(t=E.value)?void 0:t.id,...S.query}})},X=()=>{[...J.value,...K.value,...W.value].every((e=>1===e.isDone))?(Object.assign(E.value,{pageCode:"questionNotice",tenantOrderNoticeList:W.value}),j({...E.value,extInfo:{...E.value.extInfo,pageCode:"questionNotice",buttonCode:q.questionNotice},venderCode:z}).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&a.push({path:N[t.pageAction.data.nextPageCode],query:S.query})}))):h("请完成所有告知进行下一步")};return i((()=>{(()=>{const e={insurerCode:z,orderNo:U,productCategory:G,tenantId:L};Promise.all([D({...e,noticeType:P,objectType:O}),D({...e,noticeType:$,objectType:A})]).then((([{code:e,data:a},{code:t,data:o}])=>{"10000"===e&&"10000"===t&&(W.value=[...a,...o])}))})(),(()=>{const e={orderNo:U,productCode:F,tenantId:L,objectType:O};B({...e}).then((({code:e,data:a})=>{"10000"===e&&(K.value=a||[])})),B({...e,objectType:A}).then((({code:e,data:a})=>{"10000"===e&&(J.value=a||[])}))})(),k({orderNo:U,saleUserId:H,tenantId:L}).then((({code:e,data:a})=>{"10000"===e&&Object.assign(E.value,a)}))})),(e,a)=>{const t=l,o=T,s=I,i=n("ProPageWrap");return u(),c(i,{class:"page-question-notice"},{default:r((()=>[d(o,{title:"投保人"},{default:r((()=>[(u(!0),p(v,null,y(R(C(_)),(e=>(u(),c(t,{key:e.id,class:m({"is-active":e.isDone===C(x)}),title:`《${e.title}》`,"is-link":"",value:""+(e.isDone===C(_)?"已完成":"去完成"),onClick:a=>V(e)},null,8,["class","title","value","onClick"])))),128)),(u(!0),p(v,null,y(C(K),(e=>(u(),c(t,{key:e.id,class:m({"is-active":e.isDone===C(x)}),title:`《${e.materialName}》`,"is-link":"",value:""+(e.isDone===C(_)?"已完成":"去完成"),onClick:a=>V(e)},null,8,["class","title","value","onClick"])))),128))])),_:1}),d(o,{title:"被保人"},{default:r((()=>[(u(!0),p(v,null,y(R(C(x)),(e=>(u(),c(t,{key:e.id,class:m({"is-active":e.isDone===C(x)}),title:`《${e.title}》`,"is-link":"",value:""+(e.isDone===C(_)?"已完成":"去完成"),onClick:a=>V(e)},null,8,["class","title","value","onClick"])))),128)),(u(!0),p(v,null,y(C(J),(e=>(u(),c(t,{key:e.id,class:m({"is-active":e.isDone===C(x)}),title:`《${e.materialName}》`,"is-link":"",value:""+(e.isDone===C(_)?"已完成":"去完成"),onClick:a=>V(e)},null,8,["class","title","value","onClick"])))),128))])),_:1}),f("div",M,[d(s,{type:"primary",onClick:X},{default:r((()=>[g("下一步")])),_:1})])])),_:1})}}}),[["__scopeId","data-v-698a4f87"]]);export{S as default};
