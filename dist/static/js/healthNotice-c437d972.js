import{d as e,i as a,h as t,j as o,k as i,bc as n,l as s,ca as r,o as u,c as l,u as c,p as d,c7 as p,f as v,w as f,v as m,b as y,dK as b,aY as h,T as q,b3 as g,b1 as j,bk as I,bi as T,c8 as N,c9 as w,dH as C,c5 as k}from"./index-97c91859.js";import{l as x}from"./product-80ffd015.js";import{O,Q as $}from"./questionnaire-42dcb602.js";import{g as L}from"./utils-8d77b4c3.js";import{n as _}from"./nextStep-b93a1b55.js";import{u as P}from"./useOrder-e11c9801.js";import{g as R}from"./trial-aac5df38.js";import{N as E,Q as V,a as A}from"./notice-998729c6.js";import{P as D}from"./constants-6c7c253a.js";import{u as S}from"./useThread-637a02aa.js";import"./infoCollection-f01ff1c0.js";import"./trial-c0a963cf.js";import"./core-0d45ac8c.js";import"./utils-b2956012.js";import"./createProposal-fb65ed67.js";import"./PolicyInfo-965ab610.js";import"./cloneDeep-a0a80033.js";const U={class:"long-health-notice-wrap"},B={key:1,class:"footer-btn footer-button"},Q={key:2,class:"footer-btn"},J=e({__name:"healthNotice",setup(e){const J=a(),M=t(),z=P({}),{orderNo:H,tenantId:Y,preview:F,agentCode:G,questionnaireId:K}=J.query,W=o({}),X=o(),Z=o(),ee=o(),ae=o([]),te=o({orderNo:H,tenantId:Y,noticeType:Z}),oe=o(),ie=o(),ne=o(!1),se=o(),re=o(!1),ue=o(),le=()=>{X.value?M.push({path:`${D.healthNotice}/${X.value}`,query:{...J.query,questionnaireId:X.value}}):F?M.push({path:D.infoPreview,query:J.query}):(z.value.extInfo.buttonCode=b.short.saveNoticeNextPage,z.value.extInfo.pageCode="healthNotice",_(z.value,((e,a,t)=>{a===I.JUMP_PAGE?M.push({path:D.holderInfoPreview,query:J.query}):a===I.JUMP_ALERT&&"faceAuth"===e.alertType&&T.confirm({message:t,confirmButtonText:"去分享",cancelButtonText:"被保险人确认"}).then((()=>{const e={...J.query,isShare:1,orderNo:H,agentCode:G,objectType:"insured",origin:"share"};oe.value={title:"标题",desc:"描述",imageUrl:C,url:`${window.location.origin}${D.faceVerify}?${k.stringify(e)}`,link:`${window.location.origin}${D.faceVerify}?${k.stringify(e)}`},ie.value.handleShare(oe.value),ne.value=!0,se.value.run()})).catch((()=>{M.push({path:D.faceVerify,query:{...J.query,objectType:"insured",origin:"confirm"}})}))})))},ce=()=>{Z.value===E.INSURED?(z.value.extInfo.buttonCode=b.short.saveNotice,z.value.extInfo.pageCode="healthNotice",_(z.value,((e,a,t)=>{a===I.JUMP_ALERT?T.alert({message:t,confirmButtonText:"确定"}):a===I.CONTINUE&&le()}))):le()},de=o([]),pe=i((()=>!(!de.value.length||Z.value!==O.HOLDER)&&!!de.value.find((e=>`${e.id}`===K)))),ve=()=>{const e=ae.value.find((e=>e.id===ee.value));Object.assign(W.value,null==e?void 0:e.questionnaireDetailResponseVO)},fe=async(e=!0)=>{var a,t,o;const{code:i,data:n}=await R({orderNo:H,tenantId:Y},{loading:e});if("10000"===i){re.value=(null==(t=null==(a=n.insuredList)?void 0:a[0])?void 0:t.faceAuthFlag)===h.YES,re.value&&(se.value.isStart&&q("被保险人认证完成"),se.value.stop()),Object.assign(z.value,n,{extInfo:{...n.extInfo,pageCode:"healthNotice",buttonCode:b.short.saveNotice}});const e=null==(o=n.insuredList[0])?void 0:o.planCode,i=n.insuredList[0].productList.map((e=>e.productCode));te.value.objectId=n.insuredList[0].id,(async(e,a)=>{var t;const{code:o,data:i}=await N({orderNo:H,tenantId:Y});"10000"===o&&(ae.value=i.productQuestionnaireVOList);const{code:n,data:s}=await x(e);if("10000"===n){const{productQuestionnaireVOList:e}=s||{},o=e.filter((e=>("-1"===e.planCode||!a||e.planCode===a)&&e.businessType===V.NEW_CONTRACT&&-1!==e.noticeObject));(null==o?void 0:o.length)||q("未匹配到健康告知问卷"),de.value=o;let i=o[0]||{};if((null==o?void 0:o.length)>1)if(K){const e=o.findIndex((e=>`${e.id}`===K));o[e]&&(i=o[e]),o[e+1]&&(X.value=o[e+1].id)}else X.value=null==(t=o[1])?void 0:t.id;const{questionnaireDetailResponseVO:n,questionnaireId:r,questionnaireName:u,noticeObject:l}=i||{},{questions:c,basicInfo:d}=n||{},{questionnaireType:p}=d||{};if(Z.value=l,w(`${A[l]}健康告知`),ee.value=r,p===$.TEXT){const{content:e,textType:a}=(null==c?void 0:c[0])||{};W.value={content:e,contentType:L(`${a}`,e),questionnaireId:r,questionnaireName:u}}else{const e=(ae.value||[]).find((e=>e.questionnaireId===ee.value&&e.noticeObject===Z.value));W.value={...n,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:i},e)}};se.value=S({start:()=>{fe(!1),re.value=!1},stop:()=>{re.value=!0},time:1e4,number:0});const me=()=>{var e;null==(e=ue.value)||e.submitQuestion()};n((()=>{!F&&fe()}));const ye=o();return s((()=>{setTimeout((async()=>{ye.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),r((()=>{se.value.stop()})),(e,a)=>{const t=g,o=j;return u(),l("div",U,[c(W)?(u(),d(p,{key:0,ref_key:"previewRef",ref:ue,type:c(W).contentType,content:c(W),params:c(te),"is-view":c(ne),"mark-requested":!1,"success-callback":ce},null,8,["type","content","params","is-view"])):v("",!0),"question"===c(W).contentType&&c(W).questionnaireId?(u(),l("div",B,[c(pe)?(u(),d(t,{key:0,round:"",type:"primary",plain:"",onClick:ve},{default:f((()=>[m("同被保险人")])),_:1})):v("",!0),y(t,{round:"",type:"primary",block:"",disabled:c(ne)&&!c(re),onClick:me},{default:f((()=>[m(" 下一步 ")])),_:1},8,["disabled"])])):(u(),l("div",Q,[y(t,{round:"",type:"primary",block:"",disabled:c(ne)&&!c(re),onClick:ce},{default:f((()=>[m(" 下一步 ")])),_:1},8,["disabled"])])),y(o,{ref_key:"shareRef",ref:ie},null,512)])}}});export{J as default};
