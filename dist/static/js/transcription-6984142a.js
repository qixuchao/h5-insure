import{d as e,i as t,h as a,j as o,aE as n,o as s,c as i,b as r,u as d,m as u,bN as c,w as p,a as l,a8 as m,bO as f,f as I,aa as y,ag as b,aK as q,aL as v,a9 as T,bP as j}from"./index-3fe09367.js";import{l as N}from"./product-74590ba5.js";import{Q as O}from"./questionnaire-62331097.js";import{g as C}from"./utils-88e74034.js";import{n as R}from"./nextStep-2fe055cf.js";import{u as g}from"./useOrder-dbec88c2.js";import{P as x,a as P,B as k}from"./constants-7e2ba334.js";import{g as L}from"./trial-2e3aed05.js";import{N as _,Q as h}from"./notice-33e6eedd.js";import"./infoCollection-d02e7991.js";import"./trial-7d7397c3.js";import"./core-aa8b16e4.js";const w={class:"long-health-notice-wrap"},S={class:"footer-btn"},A=e({__name:"transcription",setup(e){const A=t(),E=a(),Q=g();console.log("route",A);const{productCode:V,orderNo:$,templateId:D,tenantId:K,preview:U,questionnaireId:B}=A.query,F=o({}),G=o(),J=o(),M=o({orderNo:$,tenantId:K,noticeType:_.INSURED}),X=()=>{G.value?E.push({path:`${x.transcription}/${G.value}`,query:{...A.query,questionnaireId:G.value}}):U?q(P.TRANSCRIPTION,A.query):R(Q.value,((e,t)=>{t===v.JUMP_PAGE&&T(e.nextPageCode,A.query)}))},z=async()=>{const{code:e,data:t}=await L({orderNo:$,tenantId:K});if("10000"===e){Object.assign(Q.value,t,{extInfo:{...t.extInfo,templateId:D,pageCode:P.TRANSCRIPTION,buttonCode:k.TRANSCRIPTION}});const e=t.insuredList[0].productList.map((e=>e.productCode));M.value.objectId=t.insuredList[0].id,(async e=>{var t;let a=[];const{code:o,data:n}=await j({orderNo:$,tenantId:K});"10000"===o&&(a=n.productQuestionnaireVOList);const{code:s,data:i}=await N(e);if("10000"===s){const{productQuestionnaireVOList:e}=i||{},o=e.filter((e=>e.businessType===h.RISK_NOTIFICATION&&1===e.noticeObject));let n=o[0]||{};if((null==o?void 0:o.length)>1)if(B){const e=o.findIndex((e=>`${e.id}`===B));o[e]&&(n=o[e]),o[e+1]&&(G.value=o[e+1].id)}else G.value=null==(t=o[1])?void 0:t.id;const{questionnaireDetailResponseVO:s,questionnaireId:r,questionnaireName:d}=n||{},{questions:u,basicInfo:c}=s||{},{objectType:p,questionnaireType:l}=c||{};if(J.value=p,l===O.TEXT){const{content:e,textType:t}=(null==u?void 0:u[0])||{};F.value={content:e,contentType:C(`${t}`,e),questionnaireId:r,questionnaireName:d}}else{const e=(a||[]).find((e=>e.questionnaireId===r));F.value={...s,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};return n((()=>{!U&&z()})),(e,t)=>{const a=y,o=b;return s(),i("div",w,[r(a),d(F)?(s(),u(f,{key:0,type:d(F).contentType,content:d(F),params:d(M),"success-callback":X},c({_:2},["question"===d(F).contentType&&d(F).questionnaireId?{name:"footer",fn:p((()=>[l("div",S,[r(o,{round:"",type:"primary",block:"","native-type":"submit"},{default:p((()=>[m(" 下一步 ")])),_:1})])])),key:"0"}:{name:"footer-btn",fn:p((()=>[l("div",{class:"footer-btn"},[r(o,{round:"",type:"primary",block:"",onClick:X},{default:p((()=>[m(" 下一步 ")])),_:1})])])),key:"1"}]),1032,["type","content","params"])):I("",!0)])}}});export{A as default};
