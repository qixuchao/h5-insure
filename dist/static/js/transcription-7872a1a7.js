import{d as e,i as t,h as a,j as o,aG as n,l as s,o as i,c as r,b as d,u,p as c,bM as l,w as p,a as f,v as m,c5 as I,f as y,y as v,aF as b,aE as q,ak as T,ar as j,aP as N,aQ as C,aj as O,c6 as g,T as w}from"./index-aaa8bb0a.js";import{l as R}from"./product-8c233683.js";import{Q as k}from"./questionnaire-42dcb602.js";import{g as x}from"./utils-d9f93827.js";import{n as h}from"./nextStep-db1051c0.js";import{u as P}from"./useOrder-3b64102a.js";import{g as _}from"./trial-f688ef19.js";import{N as L,Q as S}from"./notice-33e6eedd.js";import"./infoCollection-88d162d3.js";import"./trial-039b421f.js";import"./core-182586d6.js";const A={class:"long-health-notice-wrap"},Q={class:"footer-btn"},E=e({__name:"transcription",setup(e){const E=t(),V=a(),$=P();console.log("route",E);const{productCode:D,orderNo:z,tenantId:B,preview:F,questionnaireId:G}=E.query,M=o({}),U=o(),J=o(),K=o({orderNo:z,tenantId:B,noticeType:L.INSURED}),X=()=>{U.value?V.push({path:`${v.transcription}/${U.value}`,query:{...E.query,questionnaireId:U.value}}):F?N(b.TRANSCRIPTION,E.query):h($.value,((e,t)=>{t===C.JUMP_PAGE&&O(e.nextPageCode,E.query)}))},H=async()=>{const{code:e,data:t}=await _({orderNo:z,tenantId:B});if("10000"===e){Object.assign($.value,t,{extInfo:{...t.extInfo,pageCode:b.TRANSCRIPTION,buttonCode:q.TRANSCRIPTION}});const e=t.insuredList[0].productList.map((e=>e.productCode));K.value.objectId=t.insuredList[0].id,(async e=>{var t;let a=[];const{code:o,data:n}=await g({orderNo:z,tenantId:B});"10000"===o&&(a=n.productQuestionnaireVOList);const{code:s,data:i}=await R(e);if("10000"===s){const{productQuestionnaireVOList:e}=i||{},o=e.filter((e=>e.businessType===S.RISK_NOTIFICATION&&1===e.noticeObject));(null==o?void 0:o.length)||w("未匹配到风险告知问卷");let n=o[0]||{};if((null==o?void 0:o.length)>1)if(G){const e=o.findIndex((e=>`${e.id}`===G));o[e]&&(n=o[e]),o[e+1]&&(U.value=o[e+1].id)}else U.value=null==(t=o[1])?void 0:t.id;const{questionnaireDetailResponseVO:s,questionnaireId:r,questionnaireName:d}=n||{},{questions:u,basicInfo:c}=s||{},{objectType:l,questionnaireType:p}=c||{};if(J.value=l,p===k.TEXT){const{content:e,textType:t}=(null==u?void 0:u[0])||{};M.value={content:e,contentType:x(`${t}`,e),questionnaireId:r,questionnaireName:d}}else{const e=(a||[]).find((e=>e.questionnaireId===r));M.value={...s,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};n((()=>{!F&&H()}));const W=o();return s((()=>{setTimeout((async()=>{W.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const a=T,o=j;return i(),r("div",A,[d(a),u(M)?(i(),c(I,{key:0,type:u(M).contentType,content:u(M),params:u(K),"success-callback":X},l({_:2},["question"===u(M).contentType&&u(M).questionnaireId?{name:"footer",fn:p((()=>[f("div",Q,[d(o,{round:"",type:"primary",block:"","native-type":"submit"},{default:p((()=>[m(" 下一步 ")])),_:1})])])),key:"0"}:{name:"footer-btn",fn:p((()=>[f("div",{class:"footer-btn"},[d(o,{round:"",type:"primary",block:"",onClick:X},{default:p((()=>[m(" 下一步 ")])),_:1})])])),key:"1"}]),1032,["type","content","params"])):y("",!0)])}}});export{E as default};
