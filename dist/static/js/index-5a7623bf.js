import{_ as e,d as a,u as t,a as o,r as s,G as i,C as l,b as n,c as u,e as c,w as r,f as d,g as p,h as v,L as y,m as C,F as m,i as f,n as g,p as k,H as h,T as j,M as q,N,O as T,P as b,B as I}from"./index-5239afda.js";import{l as D}from"./inform-d4680305.js";import{Q as _,a as P,H as x,b as O,I as $,c as A}from"./notice-a4a1c218.js";import{g as B}from"./verify-a2744578.js";import"./pdfh5-008ca364.js";const M={class:"footer-button"},S=g("下一步");var F=e(a({setup(e){const a=t(),g=o(),{productCode:F="MMBBSF",agentCode:H="65434444",tenantId:L=9991000007,agencyCode:w="3311222",insurerCode:z="zhongan",productCategory:G=1,templateId:Q=1,orderNo:U="2022080217103534947"}=g.query,W=s([]),E=s({});s(!1);const J=s([]),K=s([]),R=e=>W.value.filter((a=>a.objectType===e)),V=e=>{var t;h.set("questionData",e),a.push({path:"/healthNotice",query:{materialType:(null==e?void 0:e.materialSource)?"product":"question",questionnaireType:(null==e?void 0:e.materialSource)?1:e.questionnaireType,orderId:null==(t=E.value)?void 0:t.id,...g.query}})},X=()=>{[...J.value,...K.value,...W.value].every((e=>1===e.isDone))?(Object.assign(E.value,{pageCode:"questionNotice",tenantOrderNoticeList:W.value}),q({...E.value,extInfo:{...E.value.extInfo,pageCode:"questionNotice",buttonCode:N.questionNotice},venderCode:z}).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&a.push({path:T[t.pageAction.data.nextPageCode],query:g.query})}))):j("请完成所有告知进行下一步")};return i((()=>{(()=>{const e={insurerCode:z,orderNo:U,productCategory:G,tenantId:L};Promise.all([D({...e,noticeType:x,objectType:O}),D({...e,noticeType:$,objectType:A})]).then((([{code:e,data:a},{code:t,data:o}])=>{"10000"===e&&"10000"===t&&(W.value=[...a,...o])}))})(),(()=>{const e={orderNo:U,productCode:F,tenantId:L,objectType:O};B({...e}).then((({code:e,data:a})=>{"10000"===e&&(K.value=a||[])})),B({...e,objectType:A}).then((({code:e,data:a})=>{"10000"===e&&(J.value=a||[])}))})(),k({orderNo:U,saleUserId:H,tenantId:L}).then((({code:e,data:a})=>{"10000"===e&&Object.assign(E.value,a)}))})),(e,a)=>{const t=l,o=b,s=I,i=n("ProPageWrap");return u(),c(i,{class:"page-question-notice"},{default:r((()=>[d(o,{title:"投保人"},{default:r((()=>[(u(!0),p(m,null,v(R(C(P)),(e=>(u(),c(t,{key:e.id,class:y({"is-active":e.isDone===C(_)}),title:`《${e.title}》`,"is-link":"",value:""+(e.isDone===C(P)?"已完成":"去完成"),onClick:a=>V(e)},null,8,["class","title","value","onClick"])))),128)),(u(!0),p(m,null,v(K.value,(e=>(u(),c(t,{key:e.id,class:y({"is-active":e.isDone===C(_)}),title:`《${e.materialName}》`,"is-link":"",value:""+(e.isDone===C(P)?"已完成":"去完成"),onClick:a=>V(e)},null,8,["class","title","value","onClick"])))),128))])),_:1}),d(o,{title:"被保人"},{default:r((()=>[(u(!0),p(m,null,v(R(C(_)),(e=>(u(),c(t,{key:e.id,class:y({"is-active":e.isDone===C(_)}),title:`《${e.title}》`,"is-link":"",value:""+(e.isDone===C(P)?"已完成":"去完成"),onClick:a=>V(e)},null,8,["class","title","value","onClick"])))),128)),(u(!0),p(m,null,v(J.value,(e=>(u(),c(t,{key:e.id,class:y({"is-active":e.isDone===C(_)}),title:`《${e.materialName}》`,"is-link":"",value:""+(e.isDone===C(P)?"已完成":"去完成"),onClick:a=>V(e)},null,8,["class","title","value","onClick"])))),128))])),_:1}),f("div",M,[d(s,{type:"primary",onClick:X},{default:r((()=>[S])),_:1})])])),_:1})}}}),[["__scopeId","data-v-698a4f87"]]);export{F as default};
