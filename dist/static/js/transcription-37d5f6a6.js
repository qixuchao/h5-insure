import{d as e,i as t,h as a,j as o,aH as n,l as s,o as i,c as r,b as d,u,p as c,bN as l,w as p,a as f,v as m,c5 as I,f as y,aj as v,aG as b,aF as q,ak as T,ar as j,aP as N,aQ as C,ai as O,c6 as g,T as w}from"./index-7e52a063.js";import{l as R}from"./product-e2d1e5bd.js";import{Q as k}from"./questionnaire-42dcb602.js";import{g as x}from"./utils-9e22d4d8.js";import{n as h}from"./nextStep-e5b74115.js";import{u as P}from"./useOrder-11ecb96a.js";import{g as _}from"./trial-56baf077.js";import{N as L,Q as S}from"./notice-33e6eedd.js";import"./infoCollection-70d1ea01.js";import"./trial-c4929904.js";import"./core-68bca63c.js";const A={class:"long-health-notice-wrap"},Q={class:"footer-btn"},V=e({__name:"transcription",setup(e){const V=t(),$=a(),D=P();console.log("route",V);const{productCode:E,orderNo:z,tenantId:B,preview:F,questionnaireId:G}=V.query,U=o({}),H=o(),J=o(),K=o({orderNo:z,tenantId:B,noticeType:L.INSURED}),M=()=>{H.value?$.push({path:`${v.transcription}/${H.value}`,query:{...V.query,questionnaireId:H.value}}):F?N(b.TRANSCRIPTION,V.query):h(D.value,((e,t)=>{t===C.JUMP_PAGE&&O(e.nextPageCode,V.query)}))},X=async()=>{const{code:e,data:t}=await _({orderNo:z,tenantId:B});if("10000"===e){Object.assign(D.value,t,{extInfo:{...t.extInfo,pageCode:b.TRANSCRIPTION,buttonCode:q.TRANSCRIPTION}});const e=t.insuredList[0].productList.map((e=>e.productCode));K.value.objectId=t.insuredList[0].id,(async e=>{var t;let a=[];const{code:o,data:n}=await g({orderNo:z,tenantId:B});"10000"===o&&(a=n.productQuestionnaireVOList);const{code:s,data:i}=await R(e);if("10000"===s){const{productQuestionnaireVOList:e}=i||{},o=e.filter((e=>e.businessType===S.RISK_NOTIFICATION&&1===e.noticeObject));(null==o?void 0:o.length)||w("未匹配到风险告知问卷");let n=o[0]||{};if((null==o?void 0:o.length)>1)if(G){const e=o.findIndex((e=>`${e.id}`===G));o[e]&&(n=o[e]),o[e+1]&&(H.value=o[e+1].id)}else H.value=null==(t=o[1])?void 0:t.id;const{questionnaireDetailResponseVO:s,questionnaireId:r,questionnaireName:d}=n||{},{questions:u,basicInfo:c}=s||{},{objectType:l,questionnaireType:p}=c||{};if(J.value=l,p===k.TEXT){const{content:e,textType:t}=(null==u?void 0:u[0])||{};U.value={content:e,contentType:x(`${t}`,e),questionnaireId:r,questionnaireName:d}}else{const e=(a||[]).find((e=>e.questionnaireId===r));U.value={...s,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};n((()=>{!F&&X()}));const W=o();return s((()=>{setTimeout((async()=>{W.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const a=T,o=j;return i(),r("div",A,[d(a),u(U)?(i(),c(I,{key:0,type:u(U).contentType,content:u(U),params:u(K),"success-callback":M},l({_:2},["question"===u(U).contentType&&u(U).questionnaireId?{name:"footer",fn:p((()=>[f("div",Q,[d(o,{round:"",type:"primary",block:"","native-type":"submit"},{default:p((()=>[m(" 下一步 ")])),_:1})])])),key:"0"}:{name:"footer-btn",fn:p((()=>[f("div",{class:"footer-btn"},[d(o,{round:"",type:"primary",block:"",onClick:M},{default:p((()=>[m(" 下一步 ")])),_:1})])])),key:"1"}]),1032,["type","content","params"])):y("",!0)])}}});export{V as default};
