import{d as e,i as t,h as a,j as o,aJ as n,o as s,c as i,b as r,u as d,m as u,bW as c,w as l,a as p,a8 as f,bX as m,f as b,aa as I,aI as y,aH as v,ab as q,aj as T,aP as j,aQ as N,a9 as C,bY as O,T as R}from"./index-1eabcd9c.js";import{l as g}from"./product-da9299d8.js";import{Q as x}from"./questionnaire-42dcb602.js";import{g as h}from"./utils-2bd8f304.js";import{n as k}from"./nextStep-0123ed47.js";import{u as P}from"./useOrder-1db0be1f.js";import{g as _}from"./trial-26c69a7d.js";import{N as w,Q as L}from"./notice-33e6eedd.js";import"./infoCollection-e7bbb5cd.js";import"./trial-ecbd0c97.js";import"./core-79387e1b.js";const S={class:"long-health-notice-wrap"},A={class:"footer-btn"},Q=e({__name:"transcription",setup(e){const Q=t(),V=a(),$=P();console.log("route",Q);const{productCode:D,orderNo:E,tenantId:J,preview:U,questionnaireId:X}=Q.query,F=o({}),G=o(),H=o(),K=o({orderNo:E,tenantId:J,noticeType:w.INSURED}),M=()=>{G.value?V.push({path:`${I.transcription}/${G.value}`,query:{...Q.query,questionnaireId:G.value}}):U?j(y.TRANSCRIPTION,Q.query):k($.value,((e,t)=>{t===N.JUMP_PAGE&&C(e.nextPageCode,Q.query)}))},W=async()=>{const{code:e,data:t}=await _({orderNo:E,tenantId:J});if("10000"===e){Object.assign($.value,t,{extInfo:{...t.extInfo,pageCode:y.TRANSCRIPTION,buttonCode:v.TRANSCRIPTION}});const e=t.insuredList[0].productList.map((e=>e.productCode));K.value.objectId=t.insuredList[0].id,(async e=>{var t;let a=[];const{code:o,data:n}=await O({orderNo:E,tenantId:J});"10000"===o&&(a=n.productQuestionnaireVOList);const{code:s,data:i}=await g(e);if("10000"===s){const{productQuestionnaireVOList:e}=i||{},o=e.filter((e=>e.businessType===L.RISK_NOTIFICATION&&1===e.noticeObject));(null==o?void 0:o.length)||R("未匹配到风险告知问卷");let n=o[0]||{};if((null==o?void 0:o.length)>1)if(X){const e=o.findIndex((e=>`${e.id}`===X));o[e]&&(n=o[e]),o[e+1]&&(G.value=o[e+1].id)}else G.value=null==(t=o[1])?void 0:t.id;const{questionnaireDetailResponseVO:s,questionnaireId:r,questionnaireName:d}=n||{},{questions:u,basicInfo:c}=s||{},{objectType:l,questionnaireType:p}=c||{};if(H.value=l,p===x.TEXT){const{content:e,textType:t}=(null==u?void 0:u[0])||{};F.value={content:e,contentType:h(`${t}`,e),questionnaireId:r,questionnaireName:d}}else{const e=(a||[]).find((e=>e.questionnaireId===r));F.value={...s,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};return n((()=>{!U&&W()})),(e,t)=>{const a=q,o=T;return s(),i("div",S,[r(a),d(F)?(s(),u(m,{key:0,type:d(F).contentType,content:d(F),params:d(K),"success-callback":M},c({_:2},["question"===d(F).contentType&&d(F).questionnaireId?{name:"footer",fn:l((()=>[p("div",A,[r(o,{round:"",type:"primary",block:"","native-type":"submit"},{default:l((()=>[f(" 下一步 ")])),_:1})])])),key:"0"}:{name:"footer-btn",fn:l((()=>[p("div",{class:"footer-btn"},[r(o,{round:"",type:"primary",block:"",onClick:M},{default:l((()=>[f(" 下一步 ")])),_:1})])])),key:"1"}]),1032,["type","content","params"])):b("",!0)])}}});export{Q as default};
