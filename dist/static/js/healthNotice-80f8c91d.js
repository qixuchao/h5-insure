import{d as e,i as t,h as a,j as o,k as n,bc as s,l as i,o as r,c as l,b as u,u as c,p as d,c7 as p,f,a as v,w as m,v as b,y,bi as I,bb as j,ba as q,a$ as O,b3 as T,bj as N,bk as g,a_ as h,c8 as C,T as k,c9 as w}from"./index-d3f9fc28.js";import{l as _}from"./product-8a7a82f0.js";import{O as E,Q as x}from"./questionnaire-42dcb602.js";import{g as Q}from"./utils-d7484c67.js";import{n as L}from"./nextStep-4e91a9b4.js";import{u as R}from"./useOrder-d193ce0d.js";import{g as $}from"./trial-c58bb7da.js";import{N as D,Q as P,a as V}from"./notice-f5946ff5.js";import"./infoCollection-9abada6b.js";import"./trial-7691e47a.js";import"./core-898274a1.js";import"./utils-cc08f6dd.js";import"./createProposal-aafa0128.js";import"./PolicyInfo-bee3f88f.js";import"./cloneDeep-66e92211.js";const S=["投保人应在对所有被保险人健康和职业状况充分了解的基础上履行如实告知义务。 投保人承诺完全知晓所有被保险人健康/职业状况。","投保人故意或者因重大过失未履行前款规定的如实告知义务，足以影响保险人决定是否同意承保或者提高保险费率的，保险人有权解除合同。","投保人故意不履行如实告知义务的，保险人对于合同解除前发生的保险事故，不承担赔偿或者给付保险金的责任，并不退还保险费。","投保人因重大过失未履行如实告知义务，对保险事故的发生有严重影响的，保险人对于合同解除前发生的保险事故，不承担赔偿或者给付保险金的责任，但应当退还保险费。","在此次告知结束后、保险合同生效前，如以下告知事宜出现变化，请主动联系您的服务人员或拨打客服热线956009进行告知。如因为您的原因未及时告知的，属于未履行如实告知义务，公司将按上条情形执行。"];const U={class:"long-health-notice-wrap"},A={key:1},B={class:"footer-button"},z={key:2,class:"footer-btn"},H={class:"footer-btn"},G=e({__name:"healthNotice",setup(e){const G=t(),J=a(),M=R(),{orderNo:W,tenantId:X,preview:F,questionnaireId:K}=G.query,Y=o({}),Z=o(),ee=o(),te=o(),ae=o([]),oe=n((()=>{var e;const{holder:t,insuredList:a}=M.value;let o=null==(e=null==a?void 0:a[0])?void 0:e.id;return ee.value===D.HOlDER&&(o=t.id),{orderNo:W,tenantId:X,noticeType:ee.value,objectId:o}})),ne=o(),se=()=>{var e;null==(e=ne.value)||e.submitQuestion()},ie=()=>{Z.value?J.push({path:`${y.questionNotice}/${Z.value}`,query:{...G.query,questionnaireId:Z.value}}):I.confirm({title:"告知提醒",message:S.join("\n"),confirmButtonText:"确定",messageAlign:"left",className:"notice-dialog"}).then((()=>{F?N(j.QUESTION_NOTICE,G.query):L(M.value,((e,t)=>{t===g.JUMP_PAGE&&h(e.nextPageCode,G.query)}))}))},re=o([]),le=n((()=>!(!re.value.length||ee.value!==E.HOLDER)&&!!re.value.find((e=>`${e.id}`===K)))),ue=()=>{const e=ae.value.find((e=>e.id===te.value));Object.assign(Y.value,null==e?void 0:e.questionnaireDetailResponseVO)},ce=async()=>{const{code:e,data:t}=await $({orderNo:W,tenantId:X});if("10000"===e){Object.assign(M.value,t,{extInfo:{...t.extInfo,pageCode:j.QUESTION_NOTICE,buttonCode:q.QUESTION_NOTICE}});(async e=>{var t;const{code:a,data:o}=await C({orderNo:W,tenantId:X});"10000"===a&&(ae.value=o.productQuestionnaireVOList);const{code:n,data:s}=await _(e);if("10000"===n){const{productQuestionnaireVOList:e}=s||{},a=e.filter((e=>e.businessType===P.NEW_CONTRACT&&-1!==e.noticeObject));(null==a?void 0:a.length)||k("未匹配到健康告知问卷"),re.value=a;let o=a[0]||{};if((null==a?void 0:a.length)>1)if(K){const e=a.findIndex((e=>`${e.id}`===K));a[e]&&(o=a[e]),a[e+1]&&(Z.value=a[e+1].id)}else Z.value=null==(t=a[1])?void 0:t.id;const{questionnaireDetailResponseVO:n,questionnaireId:i,questionnaireName:r,noticeObject:l}=o||{},{questions:u,basicInfo:c}=n||{},{questionnaireType:d}=c||{};if(ee.value=l,w(`${V[l]}健康告知`),te.value=i,d===x.TEXT){const{content:e,textType:t}=(null==u?void 0:u[0])||{};Y.value={content:e,contentType:Q(`${t}`,e),questionnaireId:i,questionnaireName:r}}else{const e=(ae.value||[]).find((e=>e.questionnaireId===te.value&&e.noticeObject===ee.value));Y.value={...n,questionnaireId:i,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:t.insuredList[0].productList.map((e=>e.productCode))})}};s((()=>{!F&&ce()}));const de=o();return i((()=>{setTimeout((async()=>{de.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const a=O,o=T;return r(),l("div",U,[u(a),c(Y)?(r(),d(p,{key:0,ref_key:"previewRef",ref:ne,"question-type":"healthNotice",type:c(Y).contentType,content:c(Y),params:c(oe),"success-callback":ie},null,8,["type","content","params"])):f("",!0),"question"===c(Y).contentType&&c(Y).questionnaireId?(r(),l("div",A,[v("div",B,[c(le)?(r(),d(o,{key:0,round:"",type:"primary",plain:"",onClick:ue},{default:m((()=>[b("同被保险人")])),_:1})):f("",!0),u(o,{round:"",type:"primary",block:"",onClick:se},{default:m((()=>[b(" 下一步 ")])),_:1})])])):(r(),l("div",z,[v("div",H,[u(o,{round:"",type:"primary",block:"",onClick:ie},{default:m((()=>[b(" 下一步 ")])),_:1})])]))])}}});export{G as default};
