import{d as e,i as a,h as t,j as n,k as o,az as s,o as i,c as r,b as u,u as d,m as c,bV as l,w as p,a as f,a8 as v,f as m,bW as y,aa as b,ay as q,ax as I,ab as O,aj as j,aF as T,aG as N,a9 as C,bX as _,T as g}from"./index-8ccea0ec.js";import{l as h}from"./product-97cae19e.js";import{O as k,Q as E}from"./questionnaire-42dcb602.js";import{g as x}from"./utils-f86c0766.js";import{n as L}from"./nextStep-3fbda94c.js";import{u as Q}from"./useOrder-99173ff9.js";import{g as w}from"./trial-eee9ad28.js";import{Q as V}from"./notice-33e6eedd.js";import"./infoCollection-86362f87.js";import"./trial-c0526383.js";import"./core-73a53a48.js";const R={class:"long-health-notice-wrap"},$={class:"footer-button"},D=e({__name:"healthNotice",setup(e){const D=a(),S=t(),U=Q(),{orderNo:P,tenantId:A,preview:G,questionnaireId:W}=D.query,X=n({}),z=n(),F=n(),H=n(),J=n([]),M=n({orderNo:P,tenantId:A,noticeType:F}),B=()=>{z.value?S.push({path:`${b.questionNotice}/${z.value}`,query:{...D.query,questionnaireId:z.value}}):G?T(q.QUESTION_NOTICE,D.query):L(U.value,((e,a)=>{a===N.JUMP_PAGE&&C(e.nextPageCode,D.query)}))},K=n([]),Y=o((()=>!(!K.value.length||F.value!==k.HOLDER)&&!!K.value.find((e=>`${e.id}`===W)))),Z=()=>{const e=J.value.find((e=>e.id===H.value));Object.assign(X.value,null==e?void 0:e.questionnaireDetailResponseVO)},ee=async()=>{const{code:e,data:a}=await w({orderNo:P,tenantId:A});if("10000"===e){Object.assign(U.value,a,{extInfo:{...a.extInfo,pageCode:q.QUESTION_NOTICE,buttonCode:I.QUESTION_NOTICE}});const e=a.insuredList[0].productList.map((e=>e.productCode));M.value.objectId=a.insuredList[0].id,(async e=>{var a;const{code:t,data:n}=await _({orderNo:P,tenantId:A});"10000"===t&&(J.value=n.productQuestionnaireVOList);const{code:o,data:s}=await h(e);if("10000"===o){const{productQuestionnaireVOList:e}=s||{},t=e.filter((e=>e.businessType===V.NEW_CONTRACT&&-1!==e.noticeObject));(null==t?void 0:t.length)||g("未匹配到健康告知问卷"),K.value=t;let n=t[0]||{};if((null==t?void 0:t.length)>1)if(W){const e=t.findIndex((e=>`${e.id}`===W));t[e]&&(n=t[e]),t[e+1]&&(z.value=t[e+1].id)}else z.value=null==(a=t[1])?void 0:a.id;const{questionnaireDetailResponseVO:o,questionnaireId:i,questionnaireName:r,noticeObject:u}=n||{},{questions:d,basicInfo:c}=o||{},{questionnaireType:l}=c||{};if(F.value=u,H.value=i,l===E.TEXT){const{content:e,textType:a}=(null==d?void 0:d[0])||{};X.value={content:e,contentType:x(`${a}`,e),questionnaireId:i,questionnaireName:r}}else{const e=(J.value||[]).find((e=>e.questionnaireId===H.value&&e.noticeObject===F.value));X.value={...o,questionnaireId:i,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};return s((()=>{!G&&ee()})),(e,a)=>{const t=O,n=j;return i(),r("div",R,[u(t),d(X)?(i(),c(y,{key:0,type:d(X).contentType,content:d(X),params:d(M),"success-callback":B},l({_:2},["question"===d(X).contentType&&d(X).questionnaireId?{name:"footer",fn:p((()=>[f("div",$,[d(Y)?(i(),c(n,{key:0,round:"",type:"primary",plain:"",onClick:Z},{default:p((()=>[v("同被保人")])),_:1})):m("",!0),u(n,{round:"",type:"primary",block:"","native-type":"submit"},{default:p((()=>[v(" 下一步 ")])),_:1})])])),key:"0"}:{name:"footer-btn",fn:p((()=>[f("div",{class:"footer-btn"},[u(n,{round:"",type:"primary",block:"",onClick:B},{default:p((()=>[v(" 下一步 ")])),_:1})])])),key:"1"}]),1032,["type","content","params"])):m("",!0)])}}});export{D as default};
