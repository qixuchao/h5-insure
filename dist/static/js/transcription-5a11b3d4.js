import{d as e,i as t,h as a,j as o,aW as s,l as n,o as i,c as r,b as d,u,p as c,ak as l,w as p,a as f,v as m,c8 as I,f as y,y as b,aV as v,aU as q,aD as T,aI as j,b1 as N,b2 as C,aC as O,c9 as g,T as w}from"./index-082adda0.js";import{l as R}from"./product-dbc99aba.js";import{Q as k}from"./questionnaire-42dcb602.js";import{g as x}from"./utils-d3d8b0de.js";import{n as P}from"./nextStep-0930fc31.js";import{u as h}from"./useOrder-560a0014.js";import{g as _}from"./trial-2f17b80e.js";import{a as L,Q as S}from"./notice-9fb54937.js";import"./infoCollection-5aa74162.js";import"./trial-64184ed4.js";import"./core-50869137.js";import"./utils-dceff9a0.js";import"./createProposal-4a7760b7.js";import"./PolicyInfo-f78f3b7f.js";const A={class:"long-health-notice-wrap"},V={class:"footer-btn"},D=e({__name:"transcription",setup(e){const D=t(),Q=a(),$=h();console.log("route",D);const{productCode:E,orderNo:U,tenantId:z,preview:B,questionnaireId:F}=D.query,G=o({}),J=o(),K=o(),M=o({orderNo:U,tenantId:z,noticeType:L.INSURED}),W=()=>{J.value?Q.push({path:`${b.transcription}/${J.value}`,query:{...D.query,questionnaireId:J.value}}):B?N(v.TRANSCRIPTION,D.query):P($.value,((e,t)=>{t===C.JUMP_PAGE&&O(e.nextPageCode,D.query)}))},X=async()=>{const{code:e,data:t}=await _({orderNo:U,tenantId:z});if("10000"===e){Object.assign($.value,t,{extInfo:{...t.extInfo,pageCode:v.TRANSCRIPTION,buttonCode:q.TRANSCRIPTION}});const e=t.insuredList[0].productList.map((e=>e.productCode));M.value.objectId=t.insuredList[0].id,(async e=>{var t;let a=[];const{code:o,data:s}=await g({orderNo:U,tenantId:z});"10000"===o&&(a=s.productQuestionnaireVOList);const{code:n,data:i}=await R(e);if("10000"===n){const{productQuestionnaireVOList:e}=i||{},o=e.filter((e=>e.businessType===S.RISK_NOTIFICATION&&1===e.noticeObject));(null==o?void 0:o.length)||w("未匹配到风险告知问卷");let s=o[0]||{};if((null==o?void 0:o.length)>1)if(F){const e=o.findIndex((e=>`${e.id}`===F));o[e]&&(s=o[e]),o[e+1]&&(J.value=o[e+1].id)}else J.value=null==(t=o[1])?void 0:t.id;const{questionnaireDetailResponseVO:n,questionnaireId:r,questionnaireName:d}=s||{},{questions:u,basicInfo:c}=n||{},{objectType:l,questionnaireType:p}=c||{};if(K.value=l,p===k.TEXT){const{content:e,textType:t}=(null==u?void 0:u[0])||{};G.value={content:e,contentType:x(`${t}`,e),questionnaireId:r,questionnaireName:d}}else{const e=(a||[]).find((e=>e.questionnaireId===r));G.value={...n,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};s((()=>{!B&&X()}));const H=o();return n((()=>{setTimeout((async()=>{H.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const a=T,o=j;return i(),r("div",A,[d(a),u(G)?(i(),c(I,{key:0,type:u(G).contentType,content:u(G),params:u(M),"success-callback":W},l({_:2},["question"===u(G).contentType&&u(G).questionnaireId?{name:"footer",fn:p((()=>[f("div",V,[d(o,{round:"",type:"primary",block:"","native-type":"submit"},{default:p((()=>[m(" 下一步 ")])),_:1})])])),key:"0"}:{name:"footer-btn",fn:p((()=>[f("div",{class:"footer-btn"},[d(o,{round:"",type:"primary",block:"",onClick:W},{default:p((()=>[m(" 下一步 ")])),_:1})])])),key:"1"}]),1032,["type","content","params"])):y("",!0)])}}});export{D as default};
