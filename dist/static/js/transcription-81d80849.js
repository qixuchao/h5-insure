import{d as e,i as t,h as a,j as o,aQ as s,l as n,o as i,c as r,b as d,u as c,p as u,c7 as l,f as p,a as f,w as m,v as I,y,aP as v,aO as b,aC as q,aH as T,aX as j,aY as N,aB as C,c8 as O,T as w}from"./index-b2da35c9.js";import{l as g}from"./product-4447fdc2.js";import{Q as R}from"./questionnaire-42dcb602.js";import{g as P}from"./utils-5c123eb1.js";import{n as k}from"./nextStep-82f7b6a9.js";import{u as x}from"./useOrder-29b8d639.js";import{g as h}from"./trial-53cf3e8d.js";import{a as _,Q as L}from"./notice-382c6759.js";import"./infoCollection-d57379cc.js";import"./trial-4a1b5cb6.js";import"./core-a65d39f9.js";import"./utils-bdda7874.js";import"./createProposal-22adcd76.js";import"./PolicyInfo-d07da392.js";const Q={class:"long-health-notice-wrap"},S={key:1},A={class:"footer-button"},V={key:2,class:"footer-btn"},$={class:"footer-btn"},B=e({__name:"transcription",setup(e){const B=t(),D=a(),E=x({});console.log("route",B);const{productCode:z,orderNo:U,tenantId:X,preview:F,questionnaireId:G}=B.query,H=o({}),J=o(),K=o(),M=o({orderNo:U,tenantId:X,noticeType:_.INSURED}),Y=o(),W=()=>{var e;null==(e=Y.value)||e.submitQuestion()},Z=()=>{J.value?D.push({path:`${y.transcription}/${J.value}`,query:{...B.query,questionnaireId:J.value}}):F?j(v.TRANSCRIPTION,B.query):k(E.value,((e,t)=>{t===N.JUMP_PAGE&&C(e.nextPageCode,B.query)}))},ee=async()=>{const{code:e,data:t}=await h({orderNo:U,tenantId:X});if("10000"===e){Object.assign(E.value,t,{extInfo:{...t.extInfo,pageCode:v.TRANSCRIPTION,buttonCode:b.TRANSCRIPTION}});const e=t.insuredList[0].productList.map((e=>e.productCode));M.value.objectId=t.insuredList[0].id,(async e=>{var t;let a=[];const{code:o,data:s}=await O({orderNo:U,tenantId:X});"10000"===o&&(a=s.productQuestionnaireVOList);const{code:n,data:i}=await g(e);if("10000"===n){const{productQuestionnaireVOList:e}=i||{},o=e.filter((e=>e.businessType===L.RISK_NOTIFICATION&&1===e.noticeObject));(null==o?void 0:o.length)||w("未匹配到风险告知问卷");let s=o[0]||{};if((null==o?void 0:o.length)>1)if(G){const e=o.findIndex((e=>`${e.id}`===G));o[e]&&(s=o[e]),o[e+1]&&(J.value=o[e+1].id)}else J.value=null==(t=o[1])?void 0:t.id;const{questionnaireDetailResponseVO:n,questionnaireId:r,questionnaireName:d}=s||{},{questions:c,basicInfo:u}=n||{},{objectType:l,questionnaireType:p}=u||{};if(K.value=l,p===R.TEXT){const{content:e,textType:t}=(null==c?void 0:c[0])||{};H.value={content:e,contentType:P(`${t}`,e),questionnaireId:r,questionnaireName:d}}else{const e=(a||[]).find((e=>e.questionnaireId===r));H.value={...n,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};s((()=>{!F&&ee()}));const te=o();return n((()=>{setTimeout((async()=>{te.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const a=q,o=T;return i(),r("div",Q,[d(a),c(H)?(i(),u(l,{key:0,ref_key:"previewRef",ref:Y,type:c(H).contentType,content:c(H),params:c(M),"success-callback":Z},null,8,["type","content","params"])):p("",!0),"question"===c(H).contentType&&c(H).questionnaireId?(i(),r("div",S,[f("div",A,[d(o,{round:"",type:"primary",onClick:W},{default:m((()=>[I(" 下一步 ")])),_:1})])])):(i(),r("div",V,[f("div",$,[d(o,{round:"",type:"primary",block:"",onClick:Z},{default:m((()=>[I(" 下一步 ")])),_:1})])]))])}}});export{B as default};
