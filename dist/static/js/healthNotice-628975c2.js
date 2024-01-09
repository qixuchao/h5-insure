import{d as e,i as t,h as a,j as n,k as s,aG as o,l as i,o as r,c as u,b as l,u as c,p as d,c7 as p,f,a as v,w as m,v as y,y as I,aN as q,aF as b,aE as T,ak as j,ar as O,aP as N,aQ as g,aj as C,c8 as k,T as w,c9 as h}from"./index-a2b9e947.js";import{l as E}from"./product-0ede7ba6.js";import{O as _,Q as x}from"./questionnaire-42dcb602.js";import{g as Q}from"./utils-40ce7bf5.js";import{n as L}from"./nextStep-3a566c4d.js";import{u as R}from"./useOrder-97fb0087.js";import{g as $}from"./trial-6584450d.js";import{Q as V,N as D}from"./notice-66f7d47f.js";import"./infoCollection-c3e7fc47.js";import"./trial-0d01a5cf.js";import"./core-a9771769.js";const P=["投保人应在对所有被保险人健康和职业状况充分了解的基础上履行如实告知义务。 投保人承诺完全知晓所有被保险人健康/职业状况。","投保人故意或者因重大过失未履行前款规定的如实告知义务，足以影响保险人决定是否同意承保或者提高保险费率的，保险人有权解除合同。","投保人故意不履行如实告知义务的，保险人对于合同解除前发生的保险事故，不承担赔偿或者给付保险金的责任，并不退还保险费。","投保人因重大过失未履行如实告知义务，对保险事故的发生有严重影响的，保险人对于合同解除前发生的保险事故，不承担赔偿或者给付保险金的责任，但应当退还保险费。","在此次告知结束后、保险合同生效前，如以下告知事宜出现变化，请主动联系您的服务人员或拨打客服热线956009进行告知。如因为您的原因未及时告知的，属于未履行如实告知义务，公司将按上条情形执行。"];const S={class:"long-health-notice-wrap"},U={key:1},A={class:"footer-button"},B={key:2,class:"footer-btn"},z={class:"footer-btn"},G=e({__name:"healthNotice",setup(e){const G=t(),F=a(),H=R(),{orderNo:J,tenantId:M,preview:W,questionnaireId:X}=G.query,K=n({}),Y=n(),Z=n(),ee=n(),te=n([]),ae=n({orderNo:J,tenantId:M,noticeType:Z}),ne=n(),se=()=>{var e;null==(e=ne.value)||e.submitQuestion()},oe=()=>{Y.value?F.push({path:`${I.questionNotice}/${Y.value}`,query:{...G.query,questionnaireId:Y.value}}):q.confirm({title:"告知提醒",message:P.join("\n"),confirmButtonText:"确定",messageAlign:"left",className:"notice-dialog"}).then((()=>{W?N(b.QUESTION_NOTICE,G.query):L(H.value,((e,t)=>{t===g.JUMP_PAGE&&C(e.nextPageCode,G.query)}))}))},ie=n([]),re=s((()=>!(!ie.value.length||Z.value!==_.HOLDER)&&!!ie.value.find((e=>`${e.id}`===X)))),ue=()=>{const e=te.value.find((e=>e.id===ee.value));Object.assign(K.value,null==e?void 0:e.questionnaireDetailResponseVO)},le=async()=>{const{code:e,data:t}=await $({orderNo:J,tenantId:M});if("10000"===e){Object.assign(H.value,t,{extInfo:{...t.extInfo,pageCode:b.QUESTION_NOTICE,buttonCode:T.QUESTION_NOTICE}});const e=t.insuredList[0].productList.map((e=>e.productCode));ae.value.objectId=t.insuredList[0].id,(async e=>{var t;const{code:a,data:n}=await k({orderNo:J,tenantId:M});"10000"===a&&(te.value=n.productQuestionnaireVOList);const{code:s,data:o}=await E(e);if("10000"===s){const{productQuestionnaireVOList:e}=o||{},a=e.filter((e=>e.businessType===V.NEW_CONTRACT&&-1!==e.noticeObject));(null==a?void 0:a.length)||w("未匹配到健康告知问卷"),ie.value=a;let n=a[0]||{};if((null==a?void 0:a.length)>1)if(X){const e=a.findIndex((e=>`${e.id}`===X));a[e]&&(n=a[e]),a[e+1]&&(Y.value=a[e+1].id)}else Y.value=null==(t=a[1])?void 0:t.id;const{questionnaireDetailResponseVO:s,questionnaireId:i,questionnaireName:r,noticeObject:u}=n||{},{questions:l,basicInfo:c}=s||{},{questionnaireType:d}=c||{};if(Z.value=u,h(`${D[u]}健康告知`),ee.value=i,d===x.TEXT){const{content:e,textType:t}=(null==l?void 0:l[0])||{};K.value={content:e,contentType:Q(`${t}`,e),questionnaireId:i,questionnaireName:r}}else{const e=(te.value||[]).find((e=>e.questionnaireId===ee.value&&e.noticeObject===Z.value));K.value={...s,questionnaireId:i,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};o((()=>{!W&&le()}));const ce=n();return i((()=>{setTimeout((async()=>{ce.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const a=j,n=O;return r(),u("div",S,[l(a),c(K)?(r(),d(p,{key:0,ref_key:"previewRef",ref:ne,type:c(K).contentType,content:c(K),params:c(ae),"success-callback":oe},null,8,["type","content","params"])):f("",!0),"question"===c(K).contentType&&c(K).questionnaireId?(r(),u("div",U,[v("div",A,[c(re)?(r(),d(n,{key:0,round:"",type:"primary",plain:"",onClick:ue},{default:m((()=>[y("同被保人")])),_:1})):f("",!0),l(n,{round:"",type:"primary",block:"",onClick:se},{default:m((()=>[y(" 下一步 ")])),_:1})])])):(r(),u("div",B,[v("div",z,[l(n,{round:"",type:"primary",block:"",onClick:oe},{default:m((()=>[y(" 下一步 ")])),_:1})])]))])}}});export{G as default};
