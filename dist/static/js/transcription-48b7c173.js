import{d as e,i as t,h as o,j as a,bc as s,l as n,o as i,c as r,b as c,u as d,p as u,c7 as l,f as p,a as f,w as m,v as I,y,bb as v,ba as b,a$ as j,b3 as q,bj as T,bk as N,a_ as C,c8 as w,T as O}from"./index-12cd3482.js";import{l as g}from"./product-1ea1ab1c.js";import{Q as R}from"./questionnaire-42dcb602.js";import{g as k}from"./utils-d0314071.js";import{n as x}from"./nextStep-90de1dac.js";import{u as P}from"./useOrder-a269d385.js";import{g as _}from"./trial-a0522283.js";import{N as h,Q as L}from"./notice-a9fc2316.js";import"./infoCollection-ad3178e1.js";import"./trial-3870dabe.js";import"./core-1b8467fd.js";import"./utils-01c97fdd.js";import"./createProposal-ee2b7ef5.js";import"./PolicyInfo-869fc4ac.js";import"./cloneDeep-18be4447.js";const S={class:"long-health-notice-wrap"},A={key:1},Q={class:"footer-button"},$={key:2,class:"footer-btn"},D={class:"footer-btn"},V=e({__name:"transcription",setup(e){const V=t(),E=o(),z=P({});console.log("route",V);const{productCode:B,orderNo:U,tenantId:F,preview:G,questionnaireId:J}=V.query,K=a({}),M=a(),X=a(),H=a({orderNo:U,tenantId:F,noticeType:h.INSURED}),W=a(),Y=()=>{var e;null==(e=W.value)||e.submitQuestion()},Z=()=>{M.value?E.push({path:`${y.transcription}/${M.value}`,query:{...V.query,questionnaireId:M.value}}):G?T(v.TRANSCRIPTION,V.query):x(z.value,((e,t)=>{t===N.JUMP_PAGE&&C(e.nextPageCode,V.query)}))},ee=async()=>{const{code:e,data:t}=await _({orderNo:U,tenantId:F});if("10000"===e){Object.assign(z.value,t,{extInfo:{...t.extInfo,pageCode:v.TRANSCRIPTION,buttonCode:b.TRANSCRIPTION}});const e=t.insuredList[0].productList.map((e=>e.productCode));H.value.objectId=t.insuredList[0].id,(async e=>{var t;let o=[];const{code:a,data:s}=await w({orderNo:U,tenantId:F});"10000"===a&&(o=s.productQuestionnaireVOList);const{code:n,data:i}=await g(e);if("10000"===n){const{productQuestionnaireVOList:e}=i||{},a=e.filter((e=>e.businessType===L.RISK_NOTIFICATION&&1===e.noticeObject));(null==a?void 0:a.length)||O("未匹配到风险告知问卷");let s=a[0]||{};if((null==a?void 0:a.length)>1)if(J){const e=a.findIndex((e=>`${e.id}`===J));a[e]&&(s=a[e]),a[e+1]&&(M.value=a[e+1].id)}else M.value=null==(t=a[1])?void 0:t.id;const{questionnaireDetailResponseVO:n,questionnaireId:r,questionnaireName:c}=s||{},{questions:d,basicInfo:u}=n||{},{objectType:l,questionnaireType:p}=u||{};if(X.value=l,p===R.TEXT){const{content:e,textType:t}=(null==d?void 0:d[0])||{};K.value={content:e,contentType:k(`${t}`,e),questionnaireId:r,questionnaireName:c}}else{const e=(o||[]).find((e=>e.questionnaireId===r));K.value={...n,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};s((()=>{!G&&ee()}));const te=a();return n((()=>{setTimeout((async()=>{te.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const o=j,a=q;return i(),r("div",S,[c(o),d(K)?(i(),u(l,{key:0,ref_key:"previewRef",ref:W,type:d(K).contentType,content:d(K),params:d(H),"success-callback":Z},null,8,["type","content","params"])):p("",!0),"question"===d(K).contentType&&d(K).questionnaireId?(i(),r("div",A,[f("div",Q,[c(a,{round:"",type:"primary",onClick:Y},{default:m((()=>[I(" 下一步 ")])),_:1})])])):(i(),r("div",$,[f("div",D,[c(a,{round:"",type:"primary",block:"",onClick:Z},{default:m((()=>[I(" 下一步 ")])),_:1})])]))])}}});export{V as default};
