import{d as e,h as t,g as a,i as o,av as s,o as n,c as i,b as r,u as d,l as u,w as c,a as p,a8 as l,bR as m,q as f,aa as I,an as v,aB as y,aC as b,a9 as q,bS as T}from"./index-22927d88.js";import{l as j}from"./product-21615a50.js";import{Q as N}from"./questionnaire-62331097.js";import{g as C}from"./utils-6b6fdc4b.js";import{n as O}from"./nextStep-7bb20332.js";import{u as R}from"./useOrder-233fc531.js";import{P as g,B as x}from"./constants-5480429b.js";import{g as h}from"./trial-f7d90144.js";import{N as P,Q as S}from"./notice-33e6eedd.js";import"./infoCollection-5a9349c7.js";import"./trial-7c800337.js";import"./core-8d245bcc.js";import"./constant-8927d485.js";const w={class:"long-health-notice-wrap"},L={class:"footer-btn"},_=e({__name:"transcription",setup(e){const _=t(),A=a(),Q=R();console.log("route",_);const{productCode:V,orderNo:$,templateId:k,tenantId:D,preview:E,questionnaireId:B}=_.query,U=o({}),F=o(),G=o(),J=o({orderNo:$,tenantId:D,noticeType:P.INSURED}),K=()=>{F.value?A.push({path:`${_.path}/${F.value}`,query:{..._.query,questionnaireId:F.value}}):E?y(g.TRANSCRIPTION,_.query):O(Q.value,((e,t)=>{t===b.JUMP_PAGE&&q(e.nextPageCode,_.query)}))},M=async()=>{const{code:e,data:t}=await h({orderNo:$,tenantId:D});if("10000"===e){Object.assign(Q.value,t,{extInfo:{...t.extInfo,templateId:k,pageCode:g.TRANSCRIPTION,buttonCode:x.TRANSCRIPTION}});const e=t.insuredList[0].productList.map((e=>e.productCode));J.value.objectId=t.insuredList[0].id,(async e=>{var t;let a=[];const{code:o,data:s}=await T({orderNo:$,tenantId:D});"10000"===o&&(a=s.productQuestionnaireVOList);const{code:n,data:i}=await j(e);if("10000"===n){const{productQuestionnaireVOList:e}=i||{},o=e.filter((e=>e.businessType===S.RISK_NOTIFICATION));let s=o[0]||{};if((null==o?void 0:o.length)>1)if(B){const e=o.findIndex((e=>`${e.id}`===B));o[e]&&(s=o[e]),o[e+1]&&(F.value=o[e+1].id)}else F.value=null==(t=o[1])?void 0:t.id;const{questionnaireDetailResponseVO:n,questionnaireId:r,questionnaireName:d}=s||{},{questions:u,basicInfo:c}=n||{},{objectType:p,questionnaireType:l}=c||{};if(G.value=p,l===N.TEXT){const{content:e,textType:t}=(null==u?void 0:u[0])||{};U.value={content:e,contentType:C(`${t}`,e),questionnaireId:r,questionnaireName:d}}else{const e=(a||[]).find((e=>e.questionnaireId===r));U.value={...n,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};return s((()=>{!E&&M()})),(e,t)=>{const a=I,o=v;return n(),i("div",w,[r(a),d(U)?(n(),u(m,{key:0,type:d(U).contentType,content:d(U),params:d(J),"success-callback":K},{footer:c((()=>[p("div",L,[r(o,{round:"",type:"primary",block:"","native-type":"submit"},{default:c((()=>[l(" 下一步 ")])),_:1})])])),_:1},8,["type","content","params"])):f("",!0)])}}});export{_ as default};
