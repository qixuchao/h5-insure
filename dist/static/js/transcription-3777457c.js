import{d as e,i as t,h as o,j as s,aR as a,l as n,o as i,c as r,b as u,u as d,p as c,bR as l,f as p,a as f,w as b,v as m,y as I,aQ as y,aP as v,aE as q,aI as T,aY as j,aZ as N,aD as C,bS as R,T as w}from"./index-c77f497b.js";import{l as O}from"./product-bc426308.js";import{Q as g}from"./questionnaire-42dcb602.js";import{g as P}from"./utils-6fb400b2.js";import{n as k}from"./nextStep-34b1f9d6.js";import{u as x}from"./useOrder-abef6b73.js";import{g as h}from"./trial-8366872d.js";import{N as S,Q as _}from"./notice-8b73b56d.js";import"./infoCollection-2bb14c70.js";import"./trial-b466dbb7.js";import"./core-29010964.js";import"./utils-e1c9ceb5.js";import"./createProposal-dc06ef6b.js";import"./PolicyInfo-00dddf8e.js";const L={class:"long-health-notice-wrap"},Q={key:1},A={class:"footer-button"},D={key:2,class:"footer-btn"},E={class:"footer-btn"},V=e({__name:"transcription",setup(e){const V=t(),$=o(),z=x({});console.log("route",V);const{productCode:B,orderNo:U,tenantId:F,preview:G,questionnaireId:J}=V.query,K=s({}),M=s(),X=s(),Y=s({orderNo:U,tenantId:F,noticeType:S.INSURED}),Z=s(),H=()=>{var e;null==(e=Z.value)||e.submitQuestion()},W=()=>{M.value?$.push({path:`${I.transcription}/${M.value}`,query:{...V.query,questionnaireId:M.value}}):G?j(y.TRANSCRIPTION,V.query):k(z.value,((e,t)=>{t===N.JUMP_PAGE&&C(e.nextPageCode,V.query)}))},ee=async()=>{const{code:e,data:t}=await h({orderNo:U,tenantId:F});if("10000"===e){Object.assign(z.value,t,{extInfo:{...t.extInfo,pageCode:y.TRANSCRIPTION,buttonCode:v.TRANSCRIPTION}});const e=t.insuredList[0].productList.map((e=>e.productCode));Y.value.objectId=t.insuredList[0].id,(async e=>{var t;let o=[];const{code:s,data:a}=await R({orderNo:U,tenantId:F});"10000"===s&&(o=a.productQuestionnaireVOList);const{code:n,data:i}=await O(e);if("10000"===n){const{productQuestionnaireVOList:e}=i||{},s=e.filter((e=>e.businessType===_.RISK_NOTIFICATION&&1===e.noticeObject));(null==s?void 0:s.length)||w("未匹配到风险告知问卷");let a=s[0]||{};if((null==s?void 0:s.length)>1)if(J){const e=s.findIndex((e=>`${e.id}`===J));s[e]&&(a=s[e]),s[e+1]&&(M.value=s[e+1].id)}else M.value=null==(t=s[1])?void 0:t.id;const{questionnaireDetailResponseVO:n,questionnaireId:r,questionnaireName:u}=a||{},{questions:d,basicInfo:c}=n||{},{objectType:l,questionnaireType:p}=c||{};if(X.value=l,p===g.TEXT){const{content:e,textType:t}=(null==d?void 0:d[0])||{};K.value={content:e,contentType:P(`${t}`,e),questionnaireId:r,questionnaireName:u}}else{const e=(o||[]).find((e=>e.questionnaireId===r));K.value={...n,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};a((()=>{!G&&ee()}));const te=s();return n((()=>{setTimeout((async()=>{te.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const o=q,s=T;return i(),r("div",L,[u(o),d(K)?(i(),c(l,{key:0,ref_key:"previewRef",ref:Z,type:d(K).contentType,content:d(K),params:d(Y),"success-callback":W},null,8,["type","content","params"])):p("",!0),"question"===d(K).contentType&&d(K).questionnaireId?(i(),r("div",Q,[f("div",A,[u(s,{round:"",type:"primary",onClick:H},{default:b((()=>[m(" 下一步 ")])),_:1})])])):(i(),r("div",D,[f("div",E,[u(s,{round:"",type:"primary",block:"",onClick:W},{default:b((()=>[m(" 下一步 ")])),_:1})])]))])}}});export{V as default};
