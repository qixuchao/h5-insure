import{d as e,h as t,g as a,i as o,au as n,o as s,c as i,b as r,u,l as d,bH as c,w as p,a as l,a8 as f,bI as m,q as I,aa as y,ag as q,aA as v,aB as b,a9 as T,bJ as N}from"./index-3179c687.js";import{l as j}from"./product-fa075cfa.js";import{Q as C}from"./questionnaire-62331097.js";import{g as O}from"./utils-ef727091.js";import{n as g}from"./nextStep-3f87be0e.js";import{u as R}from"./useOrder-a9f32552.js";import{a as x,B as h}from"./constants-fe95ef6f.js";import{g as k}from"./trial-37f9d893.js";import{N as _,Q as w}from"./notice-33e6eedd.js";import"./infoCollection-ac1e9604.js";import"./trial-b740f447.js";import"./core-a72ee908.js";const A={class:"long-health-notice-wrap"},L={class:"footer-btn"},P=e({__name:"transcription",setup(e){const P=t(),S=a(),Q=R();console.log("route",P);const{productCode:V,orderNo:$,templateId:D,tenantId:E,preview:B,questionnaireId:J}=P.query,U=o({}),F=o(),G=o(),H=o({orderNo:$,tenantId:E,noticeType:_.INSURED}),K=()=>{F.value?S.push({path:`${P.path}/${F.value}`,query:{...P.query,questionnaireId:F.value}}):B?v(x.TRANSCRIPTION,P.query):g(Q.value,((e,t)=>{t===b.JUMP_PAGE&&T(e.nextPageCode,P.query)}))},M=async()=>{const{code:e,data:t}=await k({orderNo:$,tenantId:E});if("10000"===e){Object.assign(Q.value,t,{extInfo:{...t.extInfo,templateId:D,pageCode:x.TRANSCRIPTION,buttonCode:h.TRANSCRIPTION}});const e=t.insuredList[0].productList.map((e=>e.productCode));H.value.objectId=t.insuredList[0].id,(async e=>{var t;let a=[];const{code:o,data:n}=await N({orderNo:$,tenantId:E});"10000"===o&&(a=n.productQuestionnaireVOList);const{code:s,data:i}=await j(e);if("10000"===s){const{productQuestionnaireVOList:e}=i||{},o=e.filter((e=>e.businessType===w.RISK_NOTIFICATION));let n=o[0]||{};if((null==o?void 0:o.length)>1)if(J){const e=o.findIndex((e=>`${e.id}`===J));o[e]&&(n=o[e]),o[e+1]&&(F.value=o[e+1].id)}else F.value=null==(t=o[1])?void 0:t.id;const{questionnaireDetailResponseVO:s,questionnaireId:r,questionnaireName:u}=n||{},{questions:d,basicInfo:c}=s||{},{objectType:p,questionnaireType:l}=c||{};if(G.value=p,l===C.TEXT){const{content:e,textType:t}=(null==d?void 0:d[0])||{};U.value={content:e,contentType:O(`${t}`,e),questionnaireId:r,questionnaireName:u}}else{const e=(a||[]).find((e=>e.questionnaireId===r));U.value={...s,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};return n((()=>{!B&&M()})),(e,t)=>{const a=y,o=q;return s(),i("div",A,[r(a),u(U)?(s(),d(m,{key:0,type:u(U).contentType,content:u(U),params:u(H),"success-callback":K},c({_:2},["question"===u(U).contentType&&u(U).questionnaireId?{name:"footer",fn:p((()=>[l("div",L,[r(o,{round:"",type:"primary",block:"","native-type":"submit"},{default:p((()=>[f(" 下一步 ")])),_:1})])])),key:"0"}:{name:"footer-btn",fn:p((()=>[l("div",{class:"footer-btn"},[r(o,{round:"",type:"primary",block:"",onClick:K},{default:p((()=>[f(" 下一步 ")])),_:1})])])),key:"1"}]),1032,["type","content","params"])):I("",!0)])}}});export{P as default};
