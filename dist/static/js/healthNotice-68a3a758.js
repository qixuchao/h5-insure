import{d as e,i as a,h as t,j as o,k as i,aQ as n,l as s,ca as r,o as u,c as l,u as d,p as c,c7 as p,f as v,w as f,v as m,b as y,dH as h,az as b,T as q,aH as g,aF as I,aY as j,aW as T,c8 as N,c9 as w,dE as C,c5 as k}from"./index-8952fea8.js";import{l as x}from"./product-8791c794.js";import{O,Q as $}from"./questionnaire-42dcb602.js";import{g as L}from"./utils-b7fbe65d.js";import{n as _}from"./nextStep-f90438ef.js";import{u as E}from"./useOrder-c8523700.js";import{g as P}from"./trial-1573164b.js";import{a as R,Q as V,N as A}from"./notice-edbdd40d.js";import{P as Q}from"./constants-6c7c253a.js";import{u as S}from"./useThread-637a02aa.js";import"./infoCollection-e4ac9fd1.js";import"./trial-5ea41d85.js";import"./core-8fa31c92.js";import"./utils-df9088a4.js";import"./createProposal-84e60cf3.js";import"./PolicyInfo-ca68867b.js";const U={class:"long-health-notice-wrap"},B={key:1,class:"footer-btn footer-button"},D={key:2,class:"footer-btn"},z=e({__name:"healthNotice",setup(e){const z=a(),H=t(),J=E({}),{orderNo:M,tenantId:F,preview:W,agentCode:Y,questionnaireId:G}=z.query,X=o({}),K=o(),Z=o(),ee=o(),ae=o([]),te=o({orderNo:M,tenantId:F,noticeType:Z}),oe=o(),ie=o(),ne=o(!1),se=o(),re=o(!1),ue=o(),le=()=>{K.value?H.push({path:`${Q.healthNotice}/${K.value}`,query:{...z.query,questionnaireId:K.value}}):W?H.push({path:Q.infoPreview,query:z.query}):(J.value.extInfo.buttonCode=h.short.saveNoticeNextPage,J.value.extInfo.pageCode="healthNotice",_(J.value,((e,a,t)=>{a===j.JUMP_PAGE?H.push({path:Q.holderInfoPreview,query:z.query}):a===j.JUMP_ALERT&&"faceAuth"===e.alertType&&T.confirm({message:t,confirmButtonText:"去分享",cancelButtonText:"被保人确认"}).then((()=>{const e={...z.query,isShare:1,orderNo:M,agentCode:Y,objectType:"insured",origin:"share"};oe.value={title:"标题",desc:"描述",imageUrl:C,url:`${window.location.origin}${Q.faceVerify}?${k.stringify(e)}`,link:`${window.location.origin}${Q.faceVerify}?${k.stringify(e)}`},ie.value.handleShare(oe.value),ne.value=!0,se.value.run()})).catch((()=>{H.push({path:Q.faceVerify,query:{...z.query,objectType:"insured",origin:"confirm"}})}))})))},de=()=>{Z.value===R.INSURED?(J.value.extInfo.buttonCode=h.short.saveNotice,J.value.extInfo.pageCode="healthNotice",_(J.value,((e,a,t)=>{a===j.JUMP_ALERT?T.alert({message:t,confirmButtonText:"确定"}):a===j.CONTINUE&&le()}))):le()},ce=o([]),pe=i((()=>!(!ce.value.length||Z.value!==O.HOLDER)&&!!ce.value.find((e=>`${e.id}`===G)))),ve=()=>{const e=ae.value.find((e=>e.id===ee.value));Object.assign(X.value,null==e?void 0:e.questionnaireDetailResponseVO)},fe=async(e=!0)=>{var a,t,o;const{code:i,data:n}=await P({orderNo:M,tenantId:F},{loading:e});if("10000"===i){re.value=(null==(t=null==(a=n.insuredList)?void 0:a[0])?void 0:t.faceAuthFlag)===b.YES,re.value&&(se.value.isStart&&q("被保人认证完成"),se.value.stop()),Object.assign(J.value,n,{extInfo:{...n.extInfo,pageCode:"healthNotice",buttonCode:h.short.saveNotice}});const e=null==(o=n.insuredList[0])?void 0:o.planCode,i=n.insuredList[0].productList.map((e=>e.productCode));te.value.objectId=n.insuredList[0].id,(async(e,a)=>{var t;const{code:o,data:i}=await N({orderNo:M,tenantId:F});"10000"===o&&(ae.value=i.productQuestionnaireVOList);const{code:n,data:s}=await x(e);if("10000"===n){const{productQuestionnaireVOList:e}=s||{},o=e.filter((e=>("-1"===e.planCode||!a||e.planCode===a)&&e.businessType===V.NEW_CONTRACT&&-1!==e.noticeObject));(null==o?void 0:o.length)||q("未匹配到健康告知问卷"),ce.value=o;let i=o[0]||{};if((null==o?void 0:o.length)>1)if(G){const e=o.findIndex((e=>`${e.id}`===G));o[e]&&(i=o[e]),o[e+1]&&(K.value=o[e+1].id)}else K.value=null==(t=o[1])?void 0:t.id;const{questionnaireDetailResponseVO:n,questionnaireId:r,questionnaireName:u,noticeObject:l}=i||{},{questions:d,basicInfo:c}=n||{},{questionnaireType:p}=c||{};if(Z.value=l,w(`${A[l]}健康告知`),ee.value=r,p===$.TEXT){const{content:e,textType:a}=(null==d?void 0:d[0])||{};X.value={content:e,contentType:L(`${a}`,e),questionnaireId:r,questionnaireName:u}}else{const e=(ae.value||[]).find((e=>e.questionnaireId===ee.value&&e.noticeObject===Z.value));X.value={...n,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:i},e)}};se.value=S({start:()=>{fe(!1),re.value=!1},stop:()=>{re.value=!0},time:1e4,number:0});const me=()=>{var e;null==(e=ue.value)||e.submitQuestion()};n((()=>{!W&&fe()}));const ye=o();return s((()=>{setTimeout((async()=>{ye.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),r((()=>{se.value.stop()})),(e,a)=>{const t=g,o=I;return u(),l("div",U,[d(X)?(u(),c(p,{key:0,ref_key:"previewRef",ref:ue,type:d(X).contentType,content:d(X),params:d(te),"is-view":d(ne),"mark-requested":!1,"success-callback":de},null,8,["type","content","params","is-view"])):v("",!0),"question"===d(X).contentType&&d(X).questionnaireId?(u(),l("div",B,[d(pe)?(u(),c(t,{key:0,round:"",type:"primary",plain:"",onClick:ve},{default:f((()=>[m("同被保人")])),_:1})):v("",!0),y(t,{round:"",type:"primary",block:"",disabled:d(ne)&&!d(re),onClick:me},{default:f((()=>[m(" 下一步 ")])),_:1},8,["disabled"])])):(u(),l("div",D,[y(t,{round:"",type:"primary",block:"",disabled:d(ne)&&!d(re),onClick:de},{default:f((()=>[m(" 下一步 ")])),_:1},8,["disabled"])])),y(o,{ref_key:"shareRef",ref:ie},null,512)])}}});export{z as default};
