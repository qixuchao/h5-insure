import{d as e,i as t,h as a,j as o,az as n,o as s,c as i,b as r,u as d,m as u,bV as c,w as l,a as p,a8 as f,bW as m,f as y,aa as I,ay as b,ax as v,ab as q,aj as T,aF as j,aG as N,a9 as C,bX as O,T as R}from"./index-3ad2cd64.js";import{l as g}from"./product-a939d363.js";import{Q as x}from"./questionnaire-42dcb602.js";import{g as h}from"./utils-af420b41.js";import{n as k}from"./nextStep-622b2580.js";import{u as _}from"./useOrder-f156430e.js";import{g as w}from"./trial-207f583f.js";import{N as L,Q as P}from"./notice-33e6eedd.js";import"./infoCollection-67b7890a.js";import"./trial-0bae492f.js";import"./core-33ca24b8.js";const S={class:"long-health-notice-wrap"},A={class:"footer-btn"},V=e({__name:"transcription",setup(e){const V=t(),Q=a(),$=_();console.log("route",V);const{productCode:D,orderNo:E,tenantId:F,preview:G,questionnaireId:U}=V.query,X=o({}),z=o(),J=o(),K=o({orderNo:E,tenantId:F,noticeType:L.INSURED}),M=()=>{z.value?Q.push({path:`${I.transcription}/${z.value}`,query:{...V.query,questionnaireId:z.value}}):G?j(b.TRANSCRIPTION,V.query):k($.value,((e,t)=>{t===N.JUMP_PAGE&&C(e.nextPageCode,V.query)}))},W=async()=>{const{code:e,data:t}=await w({orderNo:E,tenantId:F});if("10000"===e){Object.assign($.value,t,{extInfo:{...t.extInfo,pageCode:b.TRANSCRIPTION,buttonCode:v.TRANSCRIPTION}});const e=t.insuredList[0].productList.map((e=>e.productCode));K.value.objectId=t.insuredList[0].id,(async e=>{var t;let a=[];const{code:o,data:n}=await O({orderNo:E,tenantId:F});"10000"===o&&(a=n.productQuestionnaireVOList);const{code:s,data:i}=await g(e);if("10000"===s){const{productQuestionnaireVOList:e}=i||{},o=e.filter((e=>e.businessType===P.RISK_NOTIFICATION&&1===e.noticeObject));(null==o?void 0:o.length)||R("未匹配到风险告知问卷");let n=o[0]||{};if((null==o?void 0:o.length)>1)if(U){const e=o.findIndex((e=>`${e.id}`===U));o[e]&&(n=o[e]),o[e+1]&&(z.value=o[e+1].id)}else z.value=null==(t=o[1])?void 0:t.id;const{questionnaireDetailResponseVO:s,questionnaireId:r,questionnaireName:d}=n||{},{questions:u,basicInfo:c}=s||{},{objectType:l,questionnaireType:p}=c||{};if(J.value=l,p===x.TEXT){const{content:e,textType:t}=(null==u?void 0:u[0])||{};X.value={content:e,contentType:h(`${t}`,e),questionnaireId:r,questionnaireName:d}}else{const e=(a||[]).find((e=>e.questionnaireId===r));X.value={...s,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};return n((()=>{!G&&W()})),(e,t)=>{const a=q,o=T;return s(),i("div",S,[r(a),d(X)?(s(),u(m,{key:0,type:d(X).contentType,content:d(X),params:d(K),"success-callback":M},c({_:2},["question"===d(X).contentType&&d(X).questionnaireId?{name:"footer",fn:l((()=>[p("div",A,[r(o,{round:"",type:"primary",block:"","native-type":"submit"},{default:l((()=>[f(" 下一步 ")])),_:1})])])),key:"0"}:{name:"footer-btn",fn:l((()=>[p("div",{class:"footer-btn"},[r(o,{round:"",type:"primary",block:"",onClick:M},{default:l((()=>[f(" 下一步 ")])),_:1})])])),key:"1"}]),1032,["type","content","params"])):y("",!0)])}}});export{V as default};
