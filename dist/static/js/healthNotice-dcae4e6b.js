import{d as e,h as t,g as a,i as n,j as o,av as s,o as i,c as r,b as u,u as d,l as c,bQ as l,w as p,a as f,a8 as m,q as v,bR as y,aa as b,an as I,aB as q,aC as j,a9 as O,bS as T}from"./index-ac6291ec.js";import{l as N}from"./product-40c3b84b.js";import{O as C,Q as _}from"./questionnaire-62331097.js";import{g}from"./utils-985b39e2.js";import{n as h}from"./nextStep-4c47cc06.js";import{u as E}from"./useOrder-2089ba6f.js";import{a as k,B as x}from"./constants-fe95ef6f.js";import{g as Q}from"./trial-f269d123.js";import{Q as L}from"./notice-33e6eedd.js";import"./infoCollection-90d53166.js";import"./trial-969d364e.js";import"./core-ea2050ce.js";import"./constant-8927d485.js";const w={class:"long-health-notice-wrap"},R={class:"footer-button"},S=e({__name:"healthNotice",setup(e){const S=t(),V=a(),$=E(),{orderNo:D,templateId:U,tenantId:P,preview:A,questionnaireId:B}=S.query,G=n({}),H=n(),J=n(),M=n(),W=n([]),X=n({orderNo:D,tenantId:P,noticeType:J}),z=()=>{H.value?V.push({path:`${S.path}/${H.value}`,query:{...S.query,questionnaireId:H.value}}):A?q(k.QUESTION_NOTICE,S.query):h($.value,((e,t)=>{t===j.JUMP_PAGE&&O(e.nextPageCode,S.query)}))},F=n([]),K=o((()=>!(!F.value.length||J.value!==C.HOLDER)&&!!F.value.find((e=>`${e.id}`===B)))),Y=()=>{const e=W.value.find((e=>e.id===M.value));Object.assign(G.value,null==e?void 0:e.questionnaireDetailResponseVO)},Z=async()=>{const{code:e,data:t}=await Q({orderNo:D,tenantId:P});if("10000"===e){Object.assign($.value,t,{extInfo:{...t.extInfo,templateId:U,pageCode:k.QUESTION_NOTICE,buttonCode:x.QUESTION_NOTICE}});const e=t.insuredList[0].productList.map((e=>e.productCode));X.value.objectId=t.insuredList[0].id,(async e=>{var t;const{code:a,data:n}=await T({orderNo:D,tenantId:P});"10000"===a&&(W.value=n.productQuestionnaireVOList);const{code:o,data:s}=await N(e);if("10000"===o){const{productQuestionnaireVOList:e}=s||{},a=e.filter((e=>e.businessType===L.NEW_CONTRACT));F.value=a;let n=a[0]||{};if((null==a?void 0:a.length)>1)if(B){const e=a.findIndex((e=>`${e.id}`===B));a[e]&&(n=a[e]),a[e+1]&&(H.value=a[e+1].id)}else H.value=null==(t=a[1])?void 0:t.id;const{questionnaireDetailResponseVO:o,questionnaireId:i,questionnaireName:r,noticeObject:u}=n||{},{questions:d,basicInfo:c}=o||{},{questionnaireType:l}=c||{};if(J.value=u,M.value=i,l===_.TEXT){const{content:e,textType:t}=(null==d?void 0:d[0])||{};G.value={content:e,contentType:g(`${t}`,e),questionnaireId:i,questionnaireName:r}}else{const e=(W.value||[]).find((e=>e.questionnaireId===M&&e.noticeObject===J.value));G.value={...o,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};return s((()=>{!A&&Z()})),(e,t)=>{const a=b,n=I;return i(),r("div",w,[u(a),d(G)?(i(),c(y,{key:0,type:d(G).contentType,content:d(G),params:d(X),"success-callback":z},l({_:2},["question"===d(G).contentType?{name:"footer",fn:p((()=>[f("div",R,[d(K)?(i(),c(n,{key:0,round:"",type:"primary",plain:"",onClick:Y},{default:p((()=>[m("同被保人")])),_:1})):v("",!0),u(n,{round:"",type:"primary",block:"","native-type":"submit"},{default:p((()=>[m(" 下一步 ")])),_:1})])])),key:"0"}:{name:"footer-btn",fn:p((()=>[f("div",{class:"footer-btn"},[u(n,{round:"",type:"primary",block:"",onClick:z},{default:p((()=>[m(" 下一步 ")])),_:1})])])),key:"1"}]),1032,["type","content","params"])):v("",!0)])}}});export{S as default};
