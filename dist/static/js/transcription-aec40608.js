import{d as e,h as t,g as a,i as o,aE as n,o as s,c as i,b as r,u as d,l as u,bN as c,w as p,a as l,a8 as f,bO as m,q as I,aa as y,ag as q,aK as v,aL as b,a9 as T,bP as N}from"./index-d0a5373e.js";import{l as j}from"./product-7065b9e5.js";import{Q as C}from"./questionnaire-62331097.js";import{g as O}from"./utils-92342654.js";import{n as g}from"./nextStep-05aedcda.js";import{u as R}from"./useOrder-6538ed77.js";import{a as x,B as h}from"./constants-fe95ef6f.js";import{g as k}from"./trial-a436dbf2.js";import{N as L,Q as P}from"./notice-33e6eedd.js";import"./infoCollection-f242d1c0.js";import"./trial-b6c2cf7f.js";import"./core-64f7e02f.js";const _={class:"long-health-notice-wrap"},w={class:"footer-btn"},S=e({__name:"transcription",setup(e){const S=t(),A=a(),E=R();console.log("route",S);const{productCode:Q,orderNo:V,templateId:$,tenantId:D,preview:K,questionnaireId:U}=S.query,B=o({}),F=o(),G=o(),J=o({orderNo:V,tenantId:D,noticeType:L.INSURED}),M=()=>{F.value?A.push({path:`${S.path}/${F.value}`,query:{...S.query,questionnaireId:F.value}}):K?v(x.TRANSCRIPTION,S.query):g(E.value,((e,t)=>{t===b.JUMP_PAGE&&T(e.nextPageCode,S.query)}))},X=async()=>{const{code:e,data:t}=await k({orderNo:V,tenantId:D});if("10000"===e){Object.assign(E.value,t,{extInfo:{...t.extInfo,templateId:$,pageCode:x.TRANSCRIPTION,buttonCode:h.TRANSCRIPTION}});const e=t.insuredList[0].productList.map((e=>e.productCode));J.value.objectId=t.insuredList[0].id,(async e=>{var t;let a=[];const{code:o,data:n}=await N({orderNo:V,tenantId:D});"10000"===o&&(a=n.productQuestionnaireVOList);const{code:s,data:i}=await j(e);if("10000"===s){const{productQuestionnaireVOList:e}=i||{},o=e.filter((e=>e.businessType===P.RISK_NOTIFICATION));let n=o[0]||{};if((null==o?void 0:o.length)>1)if(U){const e=o.findIndex((e=>`${e.id}`===U));o[e]&&(n=o[e]),o[e+1]&&(F.value=o[e+1].id)}else F.value=null==(t=o[1])?void 0:t.id;const{questionnaireDetailResponseVO:s,questionnaireId:r,questionnaireName:d}=n||{},{questions:u,basicInfo:c}=s||{},{objectType:p,questionnaireType:l}=c||{};if(G.value=p,l===C.TEXT){const{content:e,textType:t}=(null==u?void 0:u[0])||{};B.value={content:e,contentType:O(`${t}`,e),questionnaireId:r,questionnaireName:d}}else{const e=(a||[]).find((e=>e.questionnaireId===r));B.value={...s,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};return n((()=>{!K&&X()})),(e,t)=>{const a=y,o=q;return s(),i("div",_,[r(a),d(B)?(s(),u(m,{key:0,type:d(B).contentType,content:d(B),params:d(J),"success-callback":M},c({_:2},["question"===d(B).contentType&&d(B).questionnaireId?{name:"footer",fn:p((()=>[l("div",w,[r(o,{round:"",type:"primary",block:"","native-type":"submit"},{default:p((()=>[f(" 下一步 ")])),_:1})])])),key:"0"}:{name:"footer-btn",fn:p((()=>[l("div",{class:"footer-btn"},[r(o,{round:"",type:"primary",block:"",onClick:M},{default:p((()=>[f(" 下一步 ")])),_:1})])])),key:"1"}]),1032,["type","content","params"])):I("",!0)])}}});export{S as default};
