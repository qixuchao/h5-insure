import{d as e,i as t,h as o,j as a,aR as s,l as n,o as i,c as r,b as c,u as d,p as u,ak as l,w as p,a as f,v as m,c8 as I,f as y,y as v,aQ as q,aP as T,aD as b,aI as j,aY as N,aZ as C,aC as O,c9 as g,T as w}from"./index-6a9cf46c.js";import{l as R}from"./product-d0dc031e.js";import{Q as P}from"./questionnaire-42dcb602.js";import{g as k}from"./utils-64e52959.js";import{n as x}from"./nextStep-5fc4dcce.js";import{u as h}from"./useOrder-d313309a.js";import{g as _}from"./trial-41b6fd53.js";import{a as L,Q as S}from"./notice-15e726ee.js";import"./infoCollection-974452d5.js";import"./trial-d6373768.js";import"./core-90944064.js";import"./utils-e3b5b413.js";import"./createProposal-e1f6da83.js";import"./PolicyInfo-6c553e35.js";const A={class:"long-health-notice-wrap"},Q={class:"footer-btn"},D=e({__name:"transcription",setup(e){const D=t(),V=o(),$=h();console.log("route",D);const{productCode:E,orderNo:z,tenantId:B,preview:U,questionnaireId:F}=D.query,G=a({}),J=a(),K=a(),M=a({orderNo:z,tenantId:B,noticeType:L.INSURED}),X=()=>{J.value?V.push({path:`${v.transcription}/${J.value}`,query:{...D.query,questionnaireId:J.value}}):U?N(q.TRANSCRIPTION,D.query):x($.value,((e,t)=>{t===C.JUMP_PAGE&&O(e.nextPageCode,D.query)}))},Y=async()=>{const{code:e,data:t}=await _({orderNo:z,tenantId:B});if("10000"===e){Object.assign($.value,t,{extInfo:{...t.extInfo,pageCode:q.TRANSCRIPTION,buttonCode:T.TRANSCRIPTION}});const e=t.insuredList[0].productList.map((e=>e.productCode));M.value.objectId=t.insuredList[0].id,(async e=>{var t;let o=[];const{code:a,data:s}=await g({orderNo:z,tenantId:B});"10000"===a&&(o=s.productQuestionnaireVOList);const{code:n,data:i}=await R(e);if("10000"===n){const{productQuestionnaireVOList:e}=i||{},a=e.filter((e=>e.businessType===S.RISK_NOTIFICATION&&1===e.noticeObject));(null==a?void 0:a.length)||w("未匹配到风险告知问卷");let s=a[0]||{};if((null==a?void 0:a.length)>1)if(F){const e=a.findIndex((e=>`${e.id}`===F));a[e]&&(s=a[e]),a[e+1]&&(J.value=a[e+1].id)}else J.value=null==(t=a[1])?void 0:t.id;const{questionnaireDetailResponseVO:n,questionnaireId:r,questionnaireName:c}=s||{},{questions:d,basicInfo:u}=n||{},{objectType:l,questionnaireType:p}=u||{};if(K.value=l,p===P.TEXT){const{content:e,textType:t}=(null==d?void 0:d[0])||{};G.value={content:e,contentType:k(`${t}`,e),questionnaireId:r,questionnaireName:c}}else{const e=(o||[]).find((e=>e.questionnaireId===r));G.value={...n,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};s((()=>{!U&&Y()}));const Z=a();return n((()=>{setTimeout((async()=>{Z.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const o=b,a=j;return i(),r("div",A,[c(o),d(G)?(i(),u(I,{key:0,type:d(G).contentType,content:d(G),params:d(M),"success-callback":X},l({_:2},["question"===d(G).contentType&&d(G).questionnaireId?{name:"footer",fn:p((()=>[f("div",Q,[c(a,{round:"",type:"primary",block:"","native-type":"submit"},{default:p((()=>[m(" 下一步 ")])),_:1})])])),key:"0"}:{name:"footer-btn",fn:p((()=>[f("div",{class:"footer-btn"},[c(a,{round:"",type:"primary",block:"",onClick:X},{default:p((()=>[m(" 下一步 ")])),_:1})])])),key:"1"}]),1032,["type","content","params"])):y("",!0)])}}});export{D as default};
