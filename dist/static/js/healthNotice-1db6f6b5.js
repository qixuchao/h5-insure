import{d as e,i as t,h as a,j as n,k as o,az as s,o as i,c as r,b as u,u as d,m as c,bW as l,w as p,a as f,a8 as v,f as m,bX as y,aa as q,ay as b,ax as I,ab as O,aj as j,aF as T,aG as N,a9 as C,bY as _,T as g}from"./index-4c3d4456.js";import{l as h}from"./product-6ecef766.js";import{O as k,Q as E}from"./questionnaire-42dcb602.js";import{g as x}from"./utils-8d88475e.js";import{n as L}from"./nextStep-8834256f.js";import{u as Q}from"./useOrder-7c6d7042.js";import{g as w}from"./trial-8544042c.js";import{Q as R}from"./notice-33e6eedd.js";import"./infoCollection-fe27ce86.js";import"./trial-597c5eee.js";import"./core-4dd3cf93.js";const V={class:"long-health-notice-wrap"},$={class:"footer-button"},D=e({__name:"healthNotice",setup(e){const D=t(),S=a(),U=Q(),{orderNo:P,tenantId:A,preview:G,questionnaireId:W}=D.query,X=n({}),z=n(),F=n(),H=n(),J=n([]),M=n({orderNo:P,tenantId:A,noticeType:F}),Y=()=>{z.value?S.push({path:`${q.questionNotice}/${z.value}`,query:{...D.query,questionnaireId:z.value}}):G?T(b.QUESTION_NOTICE,D.query):L(U.value,((e,t)=>{t===N.JUMP_PAGE&&C(e.nextPageCode,D.query)}))},B=n([]),K=o((()=>!(!B.value.length||F.value!==k.HOLDER)&&!!B.value.find((e=>`${e.id}`===W)))),Z=()=>{const e=J.value.find((e=>e.id===H.value));Object.assign(X.value,null==e?void 0:e.questionnaireDetailResponseVO)},ee=async()=>{const{code:e,data:t}=await w({orderNo:P,tenantId:A});if("10000"===e){Object.assign(U.value,t,{extInfo:{...t.extInfo,pageCode:b.QUESTION_NOTICE,buttonCode:I.QUESTION_NOTICE}});const e=t.insuredList[0].productList.map((e=>e.productCode));M.value.objectId=t.insuredList[0].id,(async e=>{var t;const{code:a,data:n}=await _({orderNo:P,tenantId:A});"10000"===a&&(J.value=n.productQuestionnaireVOList);const{code:o,data:s}=await h(e);if("10000"===o){const{productQuestionnaireVOList:e}=s||{},a=e.filter((e=>e.businessType===R.NEW_CONTRACT&&-1!==e.noticeObject));(null==a?void 0:a.length)||g("未匹配到健康告知问卷"),B.value=a;let n=a[0]||{};if((null==a?void 0:a.length)>1)if(W){const e=a.findIndex((e=>`${e.id}`===W));a[e]&&(n=a[e]),a[e+1]&&(z.value=a[e+1].id)}else z.value=null==(t=a[1])?void 0:t.id;const{questionnaireDetailResponseVO:o,questionnaireId:i,questionnaireName:r,noticeObject:u}=n||{},{questions:d,basicInfo:c}=o||{},{questionnaireType:l}=c||{};if(F.value=u,H.value=i,l===E.TEXT){const{content:e,textType:t}=(null==d?void 0:d[0])||{};X.value={content:e,contentType:x(`${t}`,e),questionnaireId:i,questionnaireName:r}}else{const e=(J.value||[]).find((e=>e.questionnaireId===H.value&&e.noticeObject===F.value));X.value={...o,questionnaireId:i,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};return s((()=>{!G&&ee()})),(e,t)=>{const a=O,n=j;return i(),r("div",V,[u(a),d(X)?(i(),c(y,{key:0,type:d(X).contentType,content:d(X),params:d(M),"success-callback":Y},l({_:2},["question"===d(X).contentType&&d(X).questionnaireId?{name:"footer",fn:p((()=>[f("div",$,[d(K)?(i(),c(n,{key:0,round:"",type:"primary",plain:"",onClick:Z},{default:p((()=>[v("同被保人")])),_:1})):m("",!0),u(n,{round:"",type:"primary",block:"","native-type":"submit"},{default:p((()=>[v(" 下一步 ")])),_:1})])])),key:"0"}:{name:"footer-btn",fn:p((()=>[f("div",{class:"footer-btn"},[u(n,{round:"",type:"primary",block:"",onClick:Y},{default:p((()=>[v(" 下一步 ")])),_:1})])])),key:"1"}]),1032,["type","content","params"])):m("",!0)])}}});export{D as default};
