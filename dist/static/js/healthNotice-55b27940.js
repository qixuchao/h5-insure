import{d as e,i as t,h as a,j as o,k as i,bc as n,l as s,ca as r,o as u,c as l,u as d,p as c,c7 as p,f as v,w as f,v as m,b as y,dJ as b,aY as h,T as q,b3 as g,b1 as j,bk as I,bi as T,c8 as N,c9 as w,dG as C,c5 as k}from"./index-4d5fa34d.js";import{l as x}from"./product-e6be0572.js";import{O,Q as $}from"./questionnaire-42dcb602.js";import{g as L}from"./utils-40b0d14f.js";import{n as _}from"./nextStep-a03c6ded.js";import{u as P}from"./useOrder-a6e85070.js";import{g as R}from"./trial-7f683ad0.js";import{N as E,Q as V,a as A}from"./notice-3ea0c903.js";import{P as D}from"./constants-6c7c253a.js";import{u as S}from"./useThread-637a02aa.js";import"./infoCollection-5f2115ca.js";import"./trial-ed50f9b6.js";import"./core-7b92637e.js";import"./utils-4f369f99.js";import"./createProposal-6ed222b2.js";import"./PolicyInfo-6b9907fb.js";import"./cloneDeep-9c9c9929.js";const U={class:"long-health-notice-wrap"},B={key:1,class:"footer-btn footer-button"},Q={key:2,class:"footer-btn"},J=e({__name:"healthNotice",setup(e){const J=t(),M=a(),z=P({}),{orderNo:G,tenantId:Y,preview:F,agentCode:H,questionnaireId:W}=J.query,X=o({}),K=o(),Z=o(),ee=o(),te=o([]),ae=o({orderNo:G,tenantId:Y,noticeType:Z}),oe=o(),ie=o(),ne=o(!1),se=o(),re=o(!1),ue=o(),le=()=>{K.value?M.push({path:`${D.healthNotice}/${K.value}`,query:{...J.query,questionnaireId:K.value}}):F?M.push({path:D.infoPreview,query:J.query}):(z.value.extInfo.buttonCode=b.short.saveNoticeNextPage,z.value.extInfo.pageCode="healthNotice",_(z.value,((e,t,a)=>{t===I.JUMP_PAGE?M.push({path:D.holderInfoPreview,query:J.query}):t===I.JUMP_ALERT&&"faceAuth"===e.alertType&&T.confirm({message:a,confirmButtonText:"去分享",cancelButtonText:"被保险人确认"}).then((()=>{const e={...J.query,isShare:1,orderNo:G,agentCode:H,objectType:"insured",origin:"share"};oe.value={title:"标题",desc:"描述",imageUrl:C,url:`${window.location.origin}${D.faceVerify}?${k.stringify(e)}`,link:`${window.location.origin}${D.faceVerify}?${k.stringify(e)}`},ie.value.handleShare(oe.value),ne.value=!0,se.value.run()})).catch((()=>{M.push({path:D.faceVerify,query:{...J.query,objectType:"insured",origin:"confirm"}})}))})))},de=()=>{Z.value===E.INSURED?(z.value.extInfo.buttonCode=b.short.saveNotice,z.value.extInfo.pageCode="healthNotice",_(z.value,((e,t,a)=>{t===I.JUMP_ALERT?T.alert({message:a,confirmButtonText:"确定"}):t===I.CONTINUE&&le()}))):le()},ce=o([]),pe=i((()=>!(!ce.value.length||Z.value!==O.HOLDER)&&!!ce.value.find((e=>`${e.id}`===W)))),ve=()=>{const e=te.value.find((e=>e.id===ee.value));Object.assign(X.value,null==e?void 0:e.questionnaireDetailResponseVO)},fe=async(e=!0)=>{var t,a,o;const{code:i,data:n}=await R({orderNo:G,tenantId:Y},{loading:e});if("10000"===i){re.value=(null==(a=null==(t=n.insuredList)?void 0:t[0])?void 0:a.faceAuthFlag)===h.YES,re.value&&(se.value.isStart&&q("被保险人认证完成"),se.value.stop()),Object.assign(z.value,n,{extInfo:{...n.extInfo,pageCode:"healthNotice",buttonCode:b.short.saveNotice}});const e=null==(o=n.insuredList[0])?void 0:o.planCode,i=n.insuredList[0].productList.map((e=>e.productCode));ae.value.objectId=n.insuredList[0].id,(async(e,t)=>{var a;const{code:o,data:i}=await N({orderNo:G,tenantId:Y});"10000"===o&&(te.value=i.productQuestionnaireVOList);const{code:n,data:s}=await x(e);if("10000"===n){const{productQuestionnaireVOList:e}=s||{},o=e.filter((e=>("-1"===e.planCode||!t||e.planCode===t)&&e.businessType===V.NEW_CONTRACT&&-1!==e.noticeObject));(null==o?void 0:o.length)||q("未匹配到健康告知问卷"),ce.value=o;let i=o[0]||{};if((null==o?void 0:o.length)>1)if(W){const e=o.findIndex((e=>`${e.id}`===W));o[e]&&(i=o[e]),o[e+1]&&(K.value=o[e+1].id)}else K.value=null==(a=o[1])?void 0:a.id;const{questionnaireDetailResponseVO:n,questionnaireId:r,questionnaireName:u,noticeObject:l}=i||{},{questions:d,basicInfo:c}=n||{},{questionnaireType:p}=c||{};if(Z.value=l,w(`${A[l]}健康告知`),ee.value=r,p===$.TEXT){const{content:e,textType:t}=(null==d?void 0:d[0])||{};X.value={content:e,contentType:L(`${t}`,e),questionnaireId:r,questionnaireName:u}}else{const e=(te.value||[]).find((e=>e.questionnaireId===ee.value&&e.noticeObject===Z.value));X.value={...n,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:i},e)}};se.value=S({start:()=>{fe(!1),re.value=!1},stop:()=>{re.value=!0},time:1e4,number:0});const me=()=>{var e;null==(e=ue.value)||e.submitQuestion()};n((()=>{!F&&fe()}));const ye=o();return s((()=>{setTimeout((async()=>{ye.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),r((()=>{se.value.stop()})),(e,t)=>{const a=g,o=j;return u(),l("div",U,[d(X)?(u(),c(p,{key:0,ref_key:"previewRef",ref:ue,type:d(X).contentType,content:d(X),params:d(ae),"is-view":d(ne),"mark-requested":!1,"success-callback":de},null,8,["type","content","params","is-view"])):v("",!0),"question"===d(X).contentType&&d(X).questionnaireId?(u(),l("div",B,[d(pe)?(u(),c(a,{key:0,round:"",type:"primary",plain:"",onClick:ve},{default:f((()=>[m("同被保险人")])),_:1})):v("",!0),y(a,{round:"",type:"primary",block:"",disabled:d(ne)&&!d(re),onClick:me},{default:f((()=>[m(" 下一步 ")])),_:1},8,["disabled"])])):(u(),l("div",Q,[y(a,{round:"",type:"primary",block:"",disabled:d(ne)&&!d(re),onClick:de},{default:f((()=>[m(" 下一步 ")])),_:1},8,["disabled"])])),y(o,{ref_key:"shareRef",ref:ie},null,512)])}}});export{J as default};
