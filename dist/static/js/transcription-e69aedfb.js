import{d as e,i as t,h as a,j as o,aG as n,l as s,o as i,c as r,b as c,u,p as d,bL as l,w as p,a as f,v as m,c7 as I,f as y,y as b,aF as v,aE as q,ak as T,ar as j,aP as N,aQ as C,aj as O,c8 as g,T as w}from"./index-f5bd405b.js";import{l as R}from"./product-1cebc369.js";import{Q as k}from"./questionnaire-42dcb602.js";import{g as x}from"./utils-52789e4b.js";import{n as h}from"./nextStep-01aa9502.js";import{u as L}from"./useOrder-468ae1bf.js";import{g as P}from"./trial-3d2e7149.js";import{N as _,Q as S}from"./notice-53ebbb20.js";import"./infoCollection-fc0fffc1.js";import"./trial-dce76c17.js";import"./core-82156bde.js";const A={class:"long-health-notice-wrap"},Q={class:"footer-btn"},E=e({__name:"transcription",setup(e){const E=t(),V=a(),$=L();console.log("route",E);const{productCode:D,orderNo:z,tenantId:B,preview:F,questionnaireId:G}=E.query,U=o({}),J=o(),K=o(),M=o({orderNo:z,tenantId:B,noticeType:_.INSURED}),X=()=>{J.value?V.push({path:`${b.transcription}/${J.value}`,query:{...E.query,questionnaireId:J.value}}):F?N(v.TRANSCRIPTION,E.query):h($.value,((e,t)=>{t===C.JUMP_PAGE&&O(e.nextPageCode,E.query)}))},H=async()=>{const{code:e,data:t}=await P({orderNo:z,tenantId:B});if("10000"===e){Object.assign($.value,t,{extInfo:{...t.extInfo,pageCode:v.TRANSCRIPTION,buttonCode:q.TRANSCRIPTION}});const e=t.insuredList[0].productList.map((e=>e.productCode));M.value.objectId=t.insuredList[0].id,(async e=>{var t;let a=[];const{code:o,data:n}=await g({orderNo:z,tenantId:B});"10000"===o&&(a=n.productQuestionnaireVOList);const{code:s,data:i}=await R(e);if("10000"===s){const{productQuestionnaireVOList:e}=i||{},o=e.filter((e=>e.businessType===S.RISK_NOTIFICATION&&1===e.noticeObject));(null==o?void 0:o.length)||w("未匹配到风险告知问卷");let n=o[0]||{};if((null==o?void 0:o.length)>1)if(G){const e=o.findIndex((e=>`${e.id}`===G));o[e]&&(n=o[e]),o[e+1]&&(J.value=o[e+1].id)}else J.value=null==(t=o[1])?void 0:t.id;const{questionnaireDetailResponseVO:s,questionnaireId:r,questionnaireName:c}=n||{},{questions:u,basicInfo:d}=s||{},{objectType:l,questionnaireType:p}=d||{};if(K.value=l,p===k.TEXT){const{content:e,textType:t}=(null==u?void 0:u[0])||{};U.value={content:e,contentType:x(`${t}`,e),questionnaireId:r,questionnaireName:c}}else{const e=(a||[]).find((e=>e.questionnaireId===r));U.value={...s,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};n((()=>{!F&&H()}));const W=o();return s((()=>{setTimeout((async()=>{W.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const a=T,o=j;return i(),r("div",A,[c(a),u(U)?(i(),d(I,{key:0,type:u(U).contentType,content:u(U),params:u(M),"success-callback":X},l({_:2},["question"===u(U).contentType&&u(U).questionnaireId?{name:"footer",fn:p((()=>[f("div",Q,[c(o,{round:"",type:"primary",block:"","native-type":"submit"},{default:p((()=>[m(" 下一步 ")])),_:1})])])),key:"0"}:{name:"footer-btn",fn:p((()=>[f("div",{class:"footer-btn"},[c(o,{round:"",type:"primary",block:"",onClick:X},{default:p((()=>[m(" 下一步 ")])),_:1})])])),key:"1"}]),1032,["type","content","params"])):y("",!0)])}}});export{E as default};
