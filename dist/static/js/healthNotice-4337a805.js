import{d as e,i as t,h as a,j as o,k as i,bc as n,l as s,cb as r,o as u,c as l,u as c,p as d,c7 as p,f,w as v,v as m,b as y,dK as b,aY as h,T as q,b3 as g,b1 as j,bk as I,bi as T,c8 as N,c9 as w,dH as C,c5 as k}from"./index-1c874ef7.js";import{l as x}from"./product-ccf2c9c4.js";import{O,Q as $}from"./questionnaire-42dcb602.js";import{g as L}from"./utils-1d6ff6c5.js";import{n as _}from"./nextStep-6c66ff22.js";import{u as P}from"./useOrder-b13d5045.js";import{g as R}from"./trial-2f558ade.js";import{N as E,Q as V,a as A}from"./notice-e7833888.js";import{P as D}from"./constants-6c7c253a.js";import{u as S}from"./useThread-637a02aa.js";import"./infoCollection-192efa03.js";import"./trial-47e443eb.js";import"./core-70c33b68.js";import"./utils-b0b003ae.js";import"./createProposal-09a3bc2c.js";import"./PolicyInfo-ab74589f.js";import"./cloneDeep-f47c57ad.js";const U={class:"long-health-notice-wrap"},B={key:1,class:"footer-btn footer-button"},Q={key:2,class:"footer-btn"},J=e({__name:"healthNotice",setup(e){const J=t(),M=a(),z=P({}),{orderNo:H,tenantId:Y,preview:F,agentCode:G,questionnaireId:K}=J.query,W=o({}),X=o(),Z=o(),ee=o(),te=o([]),ae=o({orderNo:H,tenantId:Y,noticeType:Z}),oe=o(),ie=o(),ne=o(!1),se=o(),re=o(!1),ue=o(),le=()=>{X.value?M.push({path:`${D.healthNotice}/${X.value}`,query:{...J.query,questionnaireId:X.value}}):F?M.push({path:D.infoPreview,query:J.query}):(z.value.extInfo.buttonCode=b.short.saveNoticeNextPage,z.value.extInfo.pageCode="healthNotice",_(z.value,((e,t,a)=>{t===I.JUMP_PAGE?M.push({path:D.holderInfoPreview,query:J.query}):t===I.JUMP_ALERT&&"faceAuth"===e.alertType&&T.confirm({message:a,confirmButtonText:"去分享",cancelButtonText:"被保险人确认"}).then((()=>{const e={...J.query,isShare:1,orderNo:H,agentCode:G,objectType:"insured",origin:"share"};oe.value={title:"标题",desc:"描述",imageUrl:C,url:`${window.location.origin}${D.faceVerify}?${k.stringify(e)}`,link:`${window.location.origin}${D.faceVerify}?${k.stringify(e)}`},ie.value.handleShare(oe.value),ne.value=!0,se.value.run()})).catch((()=>{M.push({path:D.faceVerify,query:{...J.query,objectType:"insured",origin:"confirm"}})}))})))},ce=()=>{Z.value===E.INSURED?(z.value.extInfo.buttonCode=b.short.saveNotice,z.value.extInfo.pageCode="healthNotice",_(z.value,((e,t,a)=>{t===I.JUMP_ALERT?T.alert({message:a,confirmButtonText:"确定"}):t===I.CONTINUE&&le()}))):le()},de=o([]),pe=i((()=>!(!de.value.length||Z.value!==O.HOLDER)&&!!de.value.find((e=>`${e.id}`===K)))),fe=()=>{const e=te.value.find((e=>e.id===ee.value));Object.assign(W.value,null==e?void 0:e.questionnaireDetailResponseVO)},ve=async(e=!0)=>{var t,a,o;const{code:i,data:n}=await R({orderNo:H,tenantId:Y},{loading:e});if("10000"===i){re.value=(null==(a=null==(t=n.insuredList)?void 0:t[0])?void 0:a.faceAuthFlag)===h.YES,re.value&&(se.value.isStart&&q("被保险人认证完成"),se.value.stop()),Object.assign(z.value,n,{extInfo:{...n.extInfo,pageCode:"healthNotice",buttonCode:b.short.saveNotice}});const e=null==(o=n.insuredList[0])?void 0:o.planCode,i=n.insuredList[0].productList.map((e=>e.productCode));ae.value.objectId=n.insuredList[0].id,(async(e,t)=>{var a;const{code:o,data:i}=await N({orderNo:H,tenantId:Y});"10000"===o&&(te.value=i.productQuestionnaireVOList);const{code:n,data:s}=await x(e);if("10000"===n){const{productQuestionnaireVOList:e}=s||{},o=e.filter((e=>("-1"===e.planCode||!t||e.planCode===t)&&e.businessType===V.NEW_CONTRACT&&-1!==e.noticeObject));(null==o?void 0:o.length)||q("未匹配到健康告知问卷"),de.value=o;let i=o[0]||{};if((null==o?void 0:o.length)>1)if(K){const e=o.findIndex((e=>`${e.id}`===K));o[e]&&(i=o[e]),o[e+1]&&(X.value=o[e+1].id)}else X.value=null==(a=o[1])?void 0:a.id;const{questionnaireDetailResponseVO:n,questionnaireId:r,questionnaireName:u,noticeObject:l}=i||{},{questions:c,basicInfo:d}=n||{},{questionnaireType:p}=d||{};if(Z.value=l,w(`${A[l]}健康告知`),ee.value=r,p===$.TEXT){const{content:e,textType:t}=(null==c?void 0:c[0])||{};W.value={content:e,contentType:L(`${t}`,e),questionnaireId:r,questionnaireName:u}}else{const e=(te.value||[]).find((e=>e.questionnaireId===ee.value&&e.noticeObject===Z.value));W.value={...n,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:i},e)}};se.value=S({start:()=>{ve(!1),re.value=!1},stop:()=>{re.value=!0},time:1e4,number:0});const me=()=>{var e;null==(e=ue.value)||e.submitQuestion()};n((()=>{!F&&ve()}));const ye=o();return s((()=>{setTimeout((async()=>{ye.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),r((()=>{se.value.stop()})),(e,t)=>{const a=g,o=j;return u(),l("div",U,[c(W)?(u(),d(p,{key:0,ref_key:"previewRef",ref:ue,type:c(W).contentType,content:c(W),params:c(ae),"is-view":c(ne),"mark-requested":!1,"success-callback":ce},null,8,["type","content","params","is-view"])):f("",!0),"question"===c(W).contentType&&c(W).questionnaireId?(u(),l("div",B,[c(pe)?(u(),d(a,{key:0,round:"",type:"primary",plain:"",onClick:fe},{default:v((()=>[m("同被保险人")])),_:1})):f("",!0),y(a,{round:"",type:"primary",block:"",disabled:c(ne)&&!c(re),onClick:me},{default:v((()=>[m(" 下一步 ")])),_:1},8,["disabled"])])):(u(),l("div",Q,[y(a,{round:"",type:"primary",block:"",disabled:c(ne)&&!c(re),onClick:ce},{default:v((()=>[m(" 下一步 ")])),_:1},8,["disabled"])])),y(o,{ref_key:"shareRef",ref:ie},null,512)])}}});export{J as default};
