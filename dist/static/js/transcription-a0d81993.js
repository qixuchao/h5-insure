import{d as e,i as t,h as o,j as a,aR as s,l as n,o as i,c as r,b as u,u as c,p as d,bR as l,f as p,a as f,w as m,v as I,y,aQ as v,aP as q,aE as T,aI as b,aY as j,aZ as N,aD as C,bS as R,T as w}from"./index-293602cf.js";import{l as O}from"./product-a65e08f6.js";import{Q as g}from"./questionnaire-42dcb602.js";import{g as P}from"./utils-27637540.js";import{n as k}from"./nextStep-5576d441.js";import{u as x}from"./useOrder-4d47ea77.js";import{g as h}from"./trial-c3c4be9e.js";import{N as S,Q as _}from"./notice-e1795c97.js";import"./infoCollection-bd0a09c9.js";import"./trial-cf0e0910.js";import"./core-29806fcd.js";import"./utils-7df7eba7.js";import"./createProposal-57f15fed.js";import"./PolicyInfo-6a2174e8.js";const L={class:"long-health-notice-wrap"},Q={key:1},A={class:"footer-button"},D={key:2,class:"footer-btn"},E={class:"footer-btn"},V=e({__name:"transcription",setup(e){const V=t(),$=o(),z=x({});console.log("route",V);const{productCode:B,orderNo:U,tenantId:F,preview:G,questionnaireId:J}=V.query,K=a({}),M=a(),X=a(),Y=a({orderNo:U,tenantId:F,noticeType:S.INSURED}),Z=a(),H=()=>{var e;null==(e=Z.value)||e.submitQuestion()},W=()=>{M.value?$.push({path:`${y.transcription}/${M.value}`,query:{...V.query,questionnaireId:M.value}}):G?j(v.TRANSCRIPTION,V.query):k(z.value,((e,t)=>{t===N.JUMP_PAGE&&C(e.nextPageCode,V.query)}))},ee=async()=>{const{code:e,data:t}=await h({orderNo:U,tenantId:F});if("10000"===e){Object.assign(z.value,t,{extInfo:{...t.extInfo,pageCode:v.TRANSCRIPTION,buttonCode:q.TRANSCRIPTION}});const e=t.insuredList[0].productList.map((e=>e.productCode));Y.value.objectId=t.insuredList[0].id,(async e=>{var t;let o=[];const{code:a,data:s}=await R({orderNo:U,tenantId:F});"10000"===a&&(o=s.productQuestionnaireVOList);const{code:n,data:i}=await O(e);if("10000"===n){const{productQuestionnaireVOList:e}=i||{},a=e.filter((e=>e.businessType===_.RISK_NOTIFICATION&&1===e.noticeObject));(null==a?void 0:a.length)||w("未匹配到风险告知问卷");let s=a[0]||{};if((null==a?void 0:a.length)>1)if(J){const e=a.findIndex((e=>`${e.id}`===J));a[e]&&(s=a[e]),a[e+1]&&(M.value=a[e+1].id)}else M.value=null==(t=a[1])?void 0:t.id;const{questionnaireDetailResponseVO:n,questionnaireId:r,questionnaireName:u}=s||{},{questions:c,basicInfo:d}=n||{},{objectType:l,questionnaireType:p}=d||{};if(X.value=l,p===g.TEXT){const{content:e,textType:t}=(null==c?void 0:c[0])||{};K.value={content:e,contentType:P(`${t}`,e),questionnaireId:r,questionnaireName:u}}else{const e=(o||[]).find((e=>e.questionnaireId===r));K.value={...n,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};s((()=>{!G&&ee()}));const te=a();return n((()=>{setTimeout((async()=>{te.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const o=T,a=b;return i(),r("div",L,[u(o),c(K)?(i(),d(l,{key:0,ref_key:"previewRef",ref:Z,type:c(K).contentType,content:c(K),params:c(Y),"success-callback":W},null,8,["type","content","params"])):p("",!0),"question"===c(K).contentType&&c(K).questionnaireId?(i(),r("div",Q,[f("div",A,[u(a,{round:"",type:"primary",onClick:H},{default:m((()=>[I(" 下一步 ")])),_:1})])])):(i(),r("div",D,[f("div",E,[u(a,{round:"",type:"primary",block:"",onClick:W},{default:m((()=>[I(" 下一步 ")])),_:1})])]))])}}});export{V as default};
