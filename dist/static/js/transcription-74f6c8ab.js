import{d as e,i as t,h as o,j as a,aQ as s,l as n,o as i,c as r,b as c,u,p as d,c7 as l,f as p,a as f,w as m,v as I,y,aP as v,aO as b,aC as q,aH as T,aX as j,aY as N,aB as C,c8 as O,T as w}from"./index-fef381c5.js";import{l as g}from"./product-632c47ce.js";import{Q as R}from"./questionnaire-42dcb602.js";import{g as P}from"./utils-b4041f26.js";import{n as k}from"./nextStep-f7b2c747.js";import{u as x}from"./useOrder-14bb52e1.js";import{g as h}from"./trial-ab31158d.js";import{a as _,Q as L}from"./notice-868712ab.js";import"./infoCollection-66ecfab8.js";import"./trial-006160d3.js";import"./core-3e7ccc05.js";import"./utils-01ba5295.js";import"./createProposal-73814604.js";import"./PolicyInfo-78ec1799.js";const Q={class:"long-health-notice-wrap"},S={key:1},A={class:"footer-button"},V={key:2,class:"footer-btn"},$={class:"footer-btn"},B=e({__name:"transcription",setup(e){const B=t(),D=o(),E=x({});console.log("route",B);const{productCode:z,orderNo:U,tenantId:X,preview:F,questionnaireId:G}=B.query,H=a({}),J=a(),K=a(),M=a({orderNo:U,tenantId:X,noticeType:_.INSURED}),Y=a(),W=()=>{var e;null==(e=Y.value)||e.submitQuestion()},Z=()=>{J.value?D.push({path:`${y.transcription}/${J.value}`,query:{...B.query,questionnaireId:J.value}}):F?j(v.TRANSCRIPTION,B.query):k(E.value,((e,t)=>{t===N.JUMP_PAGE&&C(e.nextPageCode,B.query)}))},ee=async()=>{const{code:e,data:t}=await h({orderNo:U,tenantId:X});if("10000"===e){Object.assign(E.value,t,{extInfo:{...t.extInfo,pageCode:v.TRANSCRIPTION,buttonCode:b.TRANSCRIPTION}});const e=t.insuredList[0].productList.map((e=>e.productCode));M.value.objectId=t.insuredList[0].id,(async e=>{var t;let o=[];const{code:a,data:s}=await O({orderNo:U,tenantId:X});"10000"===a&&(o=s.productQuestionnaireVOList);const{code:n,data:i}=await g(e);if("10000"===n){const{productQuestionnaireVOList:e}=i||{},a=e.filter((e=>e.businessType===L.RISK_NOTIFICATION&&1===e.noticeObject));(null==a?void 0:a.length)||w("未匹配到风险告知问卷");let s=a[0]||{};if((null==a?void 0:a.length)>1)if(G){const e=a.findIndex((e=>`${e.id}`===G));a[e]&&(s=a[e]),a[e+1]&&(J.value=a[e+1].id)}else J.value=null==(t=a[1])?void 0:t.id;const{questionnaireDetailResponseVO:n,questionnaireId:r,questionnaireName:c}=s||{},{questions:u,basicInfo:d}=n||{},{objectType:l,questionnaireType:p}=d||{};if(K.value=l,p===R.TEXT){const{content:e,textType:t}=(null==u?void 0:u[0])||{};H.value={content:e,contentType:P(`${t}`,e),questionnaireId:r,questionnaireName:c}}else{const e=(o||[]).find((e=>e.questionnaireId===r));H.value={...n,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};s((()=>{!F&&ee()}));const te=a();return n((()=>{setTimeout((async()=>{te.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const o=q,a=T;return i(),r("div",Q,[c(o),u(H)?(i(),d(l,{key:0,ref_key:"previewRef",ref:Y,type:u(H).contentType,content:u(H),params:u(M),"success-callback":Z},null,8,["type","content","params"])):p("",!0),"question"===u(H).contentType&&u(H).questionnaireId?(i(),r("div",S,[f("div",A,[c(a,{round:"",type:"primary",onClick:W},{default:m((()=>[I(" 下一步 ")])),_:1})])])):(i(),r("div",V,[f("div",$,[c(a,{round:"",type:"primary",block:"",onClick:Z},{default:m((()=>[I(" 下一步 ")])),_:1})])]))])}}});export{B as default};
