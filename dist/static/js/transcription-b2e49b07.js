import{d as e,i as t,h as a,j as o,aE as n,o as s,c as i,b as r,u as d,m as u,bM as c,w as p,a as l,a8 as f,bN as m,f as I,aa as y,ag as b,aK as q,aL as v,a9 as T,bO as N}from"./index-867889f2.js";import{l as j}from"./product-54040ef5.js";import{Q as C}from"./questionnaire-62331097.js";import{g as O}from"./utils-bacbe5eb.js";import{n as R}from"./nextStep-59a81412.js";import{u as g}from"./useOrder-b606b4d1.js";import{a as x,B as h}from"./constants-fe95ef6f.js";import{g as k}from"./trial-ed548de8.js";import{N as L,Q as _}from"./notice-33e6eedd.js";import"./infoCollection-72cc3a1f.js";import"./trial-0d9e6608.js";import"./core-9641d1a1.js";const w={class:"long-health-notice-wrap"},P={class:"footer-btn"},S=e({__name:"transcription",setup(e){const S=t(),A=a(),E=g();console.log("route",S);const{productCode:Q,orderNo:V,templateId:$,tenantId:D,preview:K,questionnaireId:M}=S.query,U=o({}),B=o(),F=o(),G=o({orderNo:V,tenantId:D,noticeType:L.INSURED}),J=()=>{B.value?A.push({path:`${S.path}/${B.value}`,query:{...S.query,questionnaireId:B.value}}):K?q(x.TRANSCRIPTION,S.query):R(E.value,((e,t)=>{t===v.JUMP_PAGE&&T(e.nextPageCode,S.query)}))},X=async()=>{const{code:e,data:t}=await k({orderNo:V,tenantId:D});if("10000"===e){Object.assign(E.value,t,{extInfo:{...t.extInfo,templateId:$,pageCode:x.TRANSCRIPTION,buttonCode:h.TRANSCRIPTION}});const e=t.insuredList[0].productList.map((e=>e.productCode));G.value.objectId=t.insuredList[0].id,(async e=>{var t;let a=[];const{code:o,data:n}=await N({orderNo:V,tenantId:D});"10000"===o&&(a=n.productQuestionnaireVOList);const{code:s,data:i}=await j(e);if("10000"===s){const{productQuestionnaireVOList:e}=i||{},o=e.filter((e=>e.businessType===_.RISK_NOTIFICATION));let n=o[0]||{};if((null==o?void 0:o.length)>1)if(M){const e=o.findIndex((e=>`${e.id}`===M));o[e]&&(n=o[e]),o[e+1]&&(B.value=o[e+1].id)}else B.value=null==(t=o[1])?void 0:t.id;const{questionnaireDetailResponseVO:s,questionnaireId:r,questionnaireName:d}=n||{},{questions:u,basicInfo:c}=s||{},{objectType:p,questionnaireType:l}=c||{};if(F.value=p,l===C.TEXT){const{content:e,textType:t}=(null==u?void 0:u[0])||{};U.value={content:e,contentType:O(`${t}`,e),questionnaireId:r,questionnaireName:d}}else{const e=(a||[]).find((e=>e.questionnaireId===r));U.value={...s,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};return n((()=>{!K&&X()})),(e,t)=>{const a=y,o=b;return s(),i("div",w,[r(a),d(U)?(s(),u(m,{key:0,type:d(U).contentType,content:d(U),params:d(G),"success-callback":J},c({_:2},["question"===d(U).contentType&&d(U).questionnaireId?{name:"footer",fn:p((()=>[l("div",P,[r(o,{round:"",type:"primary",block:"","native-type":"submit"},{default:p((()=>[f(" 下一步 ")])),_:1})])])),key:"0"}:{name:"footer-btn",fn:p((()=>[l("div",{class:"footer-btn"},[r(o,{round:"",type:"primary",block:"",onClick:J},{default:p((()=>[f(" 下一步 ")])),_:1})])])),key:"1"}]),1032,["type","content","params"])):I("",!0)])}}});export{S as default};
