import{d as e,i as t,h as a,j as o,az as n,o as s,c as i,b as r,u as d,m as u,bT as c,w as l,a as p,a8 as f,bU as m,f as y,aa as I,ay as b,ax as v,ab as q,aj as T,aF as j,aG as N,a9 as C,bV as O,T as R}from"./index-0aeac8ce.js";import{l as g}from"./product-acd8449e.js";import{Q as x}from"./questionnaire-42dcb602.js";import{g as h}from"./utils-fd9b71b5.js";import{n as k}from"./nextStep-256cc5f5.js";import{u as _}from"./useOrder-ab7304e1.js";import{g as w}from"./trial-f6d4d526.js";import{N as L,Q as P}from"./notice-33e6eedd.js";import"./infoCollection-7e0fb9db.js";import"./trial-9470be30.js";import"./core-6a06f84f.js";const S={class:"long-health-notice-wrap"},A={class:"footer-btn"},V=e({__name:"transcription",setup(e){const V=t(),Q=a(),$=_();console.log("route",V);const{productCode:D,orderNo:E,tenantId:U,preview:F,questionnaireId:G}=V.query,z=o({}),J=o(),K=o(),M=o({orderNo:E,tenantId:U,noticeType:L.INSURED}),X=()=>{J.value?Q.push({path:`${I.transcription}/${J.value}`,query:{...V.query,questionnaireId:J.value}}):F?j(b.TRANSCRIPTION,V.query):k($.value,((e,t)=>{t===N.JUMP_PAGE&&C(e.nextPageCode,V.query)}))},B=async()=>{const{code:e,data:t}=await w({orderNo:E,tenantId:U});if("10000"===e){Object.assign($.value,t,{extInfo:{...t.extInfo,pageCode:b.TRANSCRIPTION,buttonCode:v.TRANSCRIPTION}});const e=t.insuredList[0].productList.map((e=>e.productCode));M.value.objectId=t.insuredList[0].id,(async e=>{var t;let a=[];const{code:o,data:n}=await O({orderNo:E,tenantId:U});"10000"===o&&(a=n.productQuestionnaireVOList);const{code:s,data:i}=await g(e);if("10000"===s){const{productQuestionnaireVOList:e}=i||{},o=e.filter((e=>e.businessType===P.RISK_NOTIFICATION&&1===e.noticeObject));(null==o?void 0:o.length)||R("未匹配到风险告知问卷");let n=o[0]||{};if((null==o?void 0:o.length)>1)if(G){const e=o.findIndex((e=>`${e.id}`===G));o[e]&&(n=o[e]),o[e+1]&&(J.value=o[e+1].id)}else J.value=null==(t=o[1])?void 0:t.id;const{questionnaireDetailResponseVO:s,questionnaireId:r,questionnaireName:d}=n||{},{questions:u,basicInfo:c}=s||{},{objectType:l,questionnaireType:p}=c||{};if(K.value=l,p===x.TEXT){const{content:e,textType:t}=(null==u?void 0:u[0])||{};z.value={content:e,contentType:h(`${t}`,e),questionnaireId:r,questionnaireName:d}}else{const e=(a||[]).find((e=>e.questionnaireId===r));z.value={...s,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};return n((()=>{!F&&B()})),(e,t)=>{const a=q,o=T;return s(),i("div",S,[r(a),d(z)?(s(),u(m,{key:0,type:d(z).contentType,content:d(z),params:d(M),"success-callback":X},c({_:2},["question"===d(z).contentType&&d(z).questionnaireId?{name:"footer",fn:l((()=>[p("div",A,[r(o,{round:"",type:"primary",block:"","native-type":"submit"},{default:l((()=>[f(" 下一步 ")])),_:1})])])),key:"0"}:{name:"footer-btn",fn:l((()=>[p("div",{class:"footer-btn"},[r(o,{round:"",type:"primary",block:"",onClick:X},{default:l((()=>[f(" 下一步 ")])),_:1})])])),key:"1"}]),1032,["type","content","params"])):y("",!0)])}}});export{V as default};
