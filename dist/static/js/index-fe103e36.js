import{m as e,ab as a,u as t,r as o,o as s,s as i,t as l,v as n,x as r,U as u,C as c,J as d,O as v,F as p,I as y,E as m,H as C,T as g}from"./vendor-fd650291.js";import{l as f}from"./inform-ea03b56a.js";import{_ as b,g as k,n as j,N as q,b as h}from"./index-823b7915.js";import{Q as I,a as N,H as T,b as D,I as _,c as x}from"./notice-a4a1c218.js";import{s as P}from"./useStorage-c84e29a4.js";import{g as O}from"./verify-e12c385c.js";const S={class:"footer-button"},$=C("下一步");var A=b(e({setup(e){const C=a(),b=t(),{productCode:A="MMBBSF",agentCode:B="65434444",tenantId:F=9991000007,agencyCode:H="3311222",insurerCode:M="zhongan",productCategory:U=1,templateId:z=1,orderNo:E="2022080217103534947"}=b.query,J=o([]),L=o({});o(!1);const Q=o([]),W=o([]),w=e=>J.value.filter((a=>a.objectType===e)),G=e=>{var a;P.set("questionData",e),C.push({path:"/healthNotice",query:{materialType:(null==e?void 0:e.materialSource)?"product":"question",questionnaireType:(null==e?void 0:e.materialSource)?1:e.questionnaireType,orderId:null==(a=L.value)?void 0:a.id,...b.query}})},K=()=>{[...Q.value,...W.value,...J.value].every((e=>1===e.isDone))?(Object.assign(L.value,{pageCode:"questionNotice",tenantOrderNoticeList:J.value}),j({...L.value,extInfo:{...L.value.extInfo,pageCode:"questionNotice",buttonCode:q.questionNotice},venderCode:M}).then((({code:e,data:a})=>{"10000"===e&&"jumpToPage"===a.pageAction.pageAction&&C.push({path:h[a.pageAction.data.nextPageCode],query:b.query})}))):g("请完成所有告知进行下一步")};return s((()=>{(()=>{const e={insurerCode:M,orderNo:E,productCategory:U,tenantId:F};Promise.all([f({...e,noticeType:T,objectType:D}),f({...e,noticeType:_,objectType:x})]).then((([{code:e,data:a},{code:t,data:o}])=>{"10000"===e&&"10000"===t&&(J.value=[...a,...o])}))})(),(()=>{const e={orderNo:E,productCode:A,tenantId:F,objectType:D};O({...e}).then((({code:e,data:a})=>{"10000"===e&&(W.value=a||[])})),O({...e,objectType:x}).then((({code:e,data:a})=>{"10000"===e&&(Q.value=a||[])}))})(),k({orderNo:E,saleUserId:B,tenantId:F}).then((({code:e,data:a})=>{"10000"===e&&Object.assign(L.value,a)}))})),(e,a)=>{const t=i("van-cell"),o=i("ProCard"),s=i("van-button"),C=i("ProPageWrap");return l(),n(C,{class:"page-question-notice"},{default:r((()=>[u(o,{title:"投保人"},{default:r((()=>[(l(!0),c(y,null,d(w(p(N)),(e=>(l(),n(t,{key:e.id,class:v({"is-active":e.isDone===p(I)}),title:`《${e.title}》`,"is-link":"",value:""+(e.isDone===p(N)?"已完成":"去完成"),onClick:a=>G(e)},null,8,["class","title","value","onClick"])))),128)),(l(!0),c(y,null,d(W.value,(e=>(l(),n(t,{key:e.id,class:v({"is-active":e.isDone===p(I)}),title:`《${e.materialName}》`,"is-link":"",value:""+(e.isDone===p(N)?"已完成":"去完成"),onClick:a=>G(e)},null,8,["class","title","value","onClick"])))),128))])),_:1}),u(o,{title:"被保人"},{default:r((()=>[(l(!0),c(y,null,d(w(p(I)),(e=>(l(),n(t,{key:e.id,class:v({"is-active":e.isDone===p(I)}),title:`《${e.title}》`,"is-link":"",value:""+(e.isDone===p(N)?"已完成":"去完成"),onClick:a=>G(e)},null,8,["class","title","value","onClick"])))),128)),(l(!0),c(y,null,d(Q.value,(e=>(l(),n(t,{key:e.id,class:v({"is-active":e.isDone===p(I)}),title:`《${e.materialName}》`,"is-link":"",value:""+(e.isDone===p(N)?"已完成":"去完成"),onClick:a=>G(e)},null,8,["class","title","value","onClick"])))),128))])),_:1}),m("div",S,[u(s,{type:"primary",onClick:K},{default:r((()=>[$])),_:1})])])),_:1})}}}),[["__scopeId","data-v-946bddbc"]]);export{A as default};
