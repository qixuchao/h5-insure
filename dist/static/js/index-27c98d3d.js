import{m as e,ac as a,u as t,r as o,o as s,s as i,t as l,v as n,x as r,z as u,y as c,L as d,P as v,H as p,F as y,G as m,J as C,T as b}from"./vendor-ec128989.js";import{l as g}from"./inform-be69e34b.js";import{_ as f,g as k,n as j,N as q,b as h}from"./index-851d6f85.js";import{Q as N,a as T,H as I,b as D,I as P,c as _}from"./notice-a4a1c218.js";import{s as x}from"./useStorage-7b52bd9c.js";import{g as S}from"./verify-ae39ba69.js";const $={class:"footer-button"},A=C("下一步");var O=f(e({setup(e){const C=a(),f=t(),{productCode:O="MMBBSF",agentCode:z="65434444",tenantId:B=9991000007,agencyCode:F="3311222",insurerCode:H="zhongan",productCategory:L=1,templateId:M=1,orderNo:G="2022080217103534947"}=f.query,J=o([]),Q=o({});o(!1);const U=o([]),W=o([]),w=e=>J.value.filter((a=>a.objectType===e)),E=e=>{var a;x.set("questionData",e),C.push({path:"/healthNotice",query:{materialType:(null==e?void 0:e.materialSource)?"product":"question",questionnaireType:(null==e?void 0:e.materialSource)?1:e.questionnaireType,orderId:null==(a=Q.value)?void 0:a.id,...f.query}})},K=()=>{[...U.value,...W.value,...J.value].every((e=>1===e.isDone))?(Object.assign(Q.value,{pageCode:"questionNotice",tenantOrderNoticeList:J.value}),j({...Q.value,extInfo:{...Q.value.extInfo,pageCode:"questionNotice",buttonCode:q.questionNotice},venderCode:H}).then((({code:e,data:a})=>{"10000"===e&&"jumpToPage"===a.pageAction.pageAction&&C.push({path:h[a.pageAction.data.nextPageCode],query:f.query})}))):b("请完成所有告知进行下一步")};return s((()=>{(()=>{const e={insurerCode:H,orderNo:G,productCategory:L,tenantId:B};Promise.all([g({...e,noticeType:I,objectType:D}),g({...e,noticeType:P,objectType:_})]).then((([{code:e,data:a},{code:t,data:o}])=>{"10000"===e&&"10000"===t&&(J.value=[...a,...o])}))})(),(()=>{const e={orderNo:G,productCode:O,tenantId:B,objectType:D};S({...e}).then((({code:e,data:a})=>{"10000"===e&&(W.value=a||[])})),S({...e,objectType:_}).then((({code:e,data:a})=>{"10000"===e&&(U.value=a||[])}))})(),k({orderNo:G,saleUserId:z,tenantId:B}).then((({code:e,data:a})=>{"10000"===e&&Object.assign(Q.value,a)}))})),(e,a)=>{const t=i("van-cell"),o=i("ProCard"),s=i("van-button"),C=i("ProPageWrap");return l(),n(C,{class:"page-question-notice"},{default:r((()=>[u(o,{title:"投保人"},{default:r((()=>[(l(!0),c(y,null,d(w(p(T)),(e=>(l(),n(t,{key:e.id,class:v({"is-active":e.isDone===p(N)}),title:`《${e.title}》`,"is-link":"",value:""+(e.isDone===p(T)?"已完成":"去完成"),onClick:a=>E(e)},null,8,["class","title","value","onClick"])))),128)),(l(!0),c(y,null,d(W.value,(e=>(l(),n(t,{key:e.id,class:v({"is-active":e.isDone===p(N)}),title:`《${e.materialName}》`,"is-link":"",value:""+(e.isDone===p(T)?"已完成":"去完成"),onClick:a=>E(e)},null,8,["class","title","value","onClick"])))),128))])),_:1}),u(o,{title:"被保人"},{default:r((()=>[(l(!0),c(y,null,d(w(p(N)),(e=>(l(),n(t,{key:e.id,class:v({"is-active":e.isDone===p(N)}),title:`《${e.title}》`,"is-link":"",value:""+(e.isDone===p(T)?"已完成":"去完成"),onClick:a=>E(e)},null,8,["class","title","value","onClick"])))),128)),(l(!0),c(y,null,d(U.value,(e=>(l(),n(t,{key:e.id,class:v({"is-active":e.isDone===p(N)}),title:`《${e.materialName}》`,"is-link":"",value:""+(e.isDone===p(T)?"已完成":"去完成"),onClick:a=>E(e)},null,8,["class","title","value","onClick"])))),128))])),_:1}),m("div",$,[u(s,{type:"primary",onClick:K},{default:r((()=>[A])),_:1})])])),_:1})}}}),[["__scopeId","data-v-946bddbc"]]);export{O as default};
