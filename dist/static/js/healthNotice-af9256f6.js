import{d as e,i as a,h as t,j as o,k as n,aG as i,l as s,ca as r,o as u,c as l,u as c,p as d,c7 as p,f as v,w as f,v as m,b as y,dG as h,ah as b,T as q,ar as g,an as I,aQ as T,aN as N,c8 as j,c9 as w,dD as C,c5 as k}from"./index-54fc417c.js";import{l as x}from"./product-fda4947c.js";import{O,Q as $}from"./questionnaire-42dcb602.js";import{g as L}from"./utils-44665163.js";import{n as _}from"./nextStep-e3788565.js";import{u as R}from"./useOrder-c5a1977a.js";import{g as E}from"./trial-eeb616e0.js";import{a as P,Q as V,N as A}from"./notice-ac982a29.js";import{P as D}from"./constants-6c7c253a.js";import{u as Q}from"./useThread-637a02aa.js";import"./infoCollection-6f179e91.js";import"./trial-a1bb5fc8.js";import"./core-fc6da285.js";const S={class:"long-health-notice-wrap"},U={key:1,class:"footer-btn footer-button"},B={key:2,class:"footer-btn"},G=e({__name:"healthNotice",setup(e){const G=a(),J=t(),M=R({}),{orderNo:z,tenantId:F,preview:H,agentCode:W,questionnaireId:X}=G.query,Y=o({}),K=o(),Z=o(),ee=o(),ae=o([]),te=o({orderNo:z,tenantId:F,noticeType:Z}),oe=o(),ne=o(),ie=o(!1),se=o(),re=o(!1),ue=o(),le=()=>{K.value?J.push({path:`${D.healthNotice}/${K.value}`,query:{...G.query,questionnaireId:K.value}}):H?J.push({path:D.infoPreview,query:G.query}):(M.value.extInfo.buttonCode=h.short.saveNoticeNextPage,M.value.extInfo.pageCode="healthNotice",_(M.value,((e,a,t)=>{a===T.JUMP_PAGE?J.push({path:D.holderInfoPreview,query:G.query}):a===T.JUMP_ALERT&&"faceAuth"===e.alertType&&N.confirm({message:t,confirmButtonText:"去分享",cancelButtonText:"被保人确认"}).then((()=>{const e={...G.query,isShare:1,orderNo:z,agentCode:W,objectType:"insured",origin:"share"};oe.value={title:"标题",desc:"描述",imageUrl:C,url:`${window.location.origin}${D.faceVerify}?${k.stringify(e)}`,link:`${window.location.origin}${D.faceVerify}?${k.stringify(e)}`},ne.value.handleShare(oe.value),ie.value=!0,se.value.run()})).catch((()=>{J.push({path:D.faceVerify,query:{...G.query,objectType:"insured",origin:"confirm"}})}))})))},ce=()=>{Z.value===P.INSURED?(M.value.extInfo.buttonCode=h.short.saveNotice,M.value.extInfo.pageCode="healthNotice",_(M.value,((e,a,t)=>{a===T.JUMP_ALERT?N.alert({message:t,confirmButtonText:"确定"}):a===T.CONTINUE&&le()}))):le()},de=o([]),pe=n((()=>!(!de.value.length||Z.value!==O.HOLDER)&&!!de.value.find((e=>`${e.id}`===X)))),ve=()=>{const e=ae.value.find((e=>e.id===ee.value));Object.assign(Y.value,null==e?void 0:e.questionnaireDetailResponseVO)},fe=async(e=!0)=>{var a,t,o;const{code:n,data:i}=await E({orderNo:z,tenantId:F},{loading:e});if("10000"===n){re.value=(null==(t=null==(a=i.insuredList)?void 0:a[0])?void 0:t.faceAuthFlag)===b.YES,re.value&&(se.value.isStart&&q("被保人认证完成"),se.value.stop()),Object.assign(M.value,i,{extInfo:{...i.extInfo,pageCode:"healthNotice",buttonCode:h.short.saveNotice}});const e=null==(o=i.insuredList[0])?void 0:o.planCode,n=i.insuredList[0].productList.map((e=>e.productCode));te.value.objectId=i.insuredList[0].id,(async(e,a)=>{var t;const{code:o,data:n}=await j({orderNo:z,tenantId:F});"10000"===o&&(ae.value=n.productQuestionnaireVOList);const{code:i,data:s}=await x(e);if("10000"===i){const{productQuestionnaireVOList:e}=s||{},o=e.filter((e=>("-1"===e.planCode||!a||e.planCode===a)&&e.businessType===V.NEW_CONTRACT&&-1!==e.noticeObject));(null==o?void 0:o.length)||q("未匹配到健康告知问卷"),de.value=o;let n=o[0]||{};if((null==o?void 0:o.length)>1)if(X){const e=o.findIndex((e=>`${e.id}`===X));o[e]&&(n=o[e]),o[e+1]&&(K.value=o[e+1].id)}else K.value=null==(t=o[1])?void 0:t.id;const{questionnaireDetailResponseVO:i,questionnaireId:r,questionnaireName:u,noticeObject:l}=n||{},{questions:c,basicInfo:d}=i||{},{questionnaireType:p}=d||{};if(Z.value=l,w(`${A[l]}健康告知`),ee.value=r,p===$.TEXT){const{content:e,textType:a}=(null==c?void 0:c[0])||{};Y.value={content:e,contentType:L(`${a}`,e),questionnaireId:r,questionnaireName:u}}else{const e=(ae.value||[]).find((e=>e.questionnaireId===ee.value&&e.noticeObject===Z.value));Y.value={...i,questionnaireId:r,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:n},e)}};se.value=Q({start:()=>{fe(!1),re.value=!1},stop:()=>{re.value=!0},time:1e4,number:0});const me=()=>{var e;null==(e=ue.value)||e.submitQuestion()};i((()=>{!H&&fe()}));const ye=o();return s((()=>{setTimeout((async()=>{ye.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),r((()=>{se.value.stop()})),(e,a)=>{const t=g,o=I;return u(),l("div",S,[c(Y)?(u(),d(p,{key:0,ref_key:"previewRef",ref:ue,type:c(Y).contentType,content:c(Y),params:c(te),"is-view":c(ie),"mark-requested":!1,"success-callback":ce},null,8,["type","content","params","is-view"])):v("",!0),"question"===c(Y).contentType&&c(Y).questionnaireId?(u(),l("div",U,[c(pe)?(u(),d(t,{key:0,round:"",type:"primary",plain:"",onClick:ve},{default:f((()=>[m("同被保人")])),_:1})):v("",!0),y(t,{round:"",type:"primary",block:"",disabled:c(ie)&&!c(re),onClick:me},{default:f((()=>[m(" 下一步 ")])),_:1},8,["disabled"])])):(u(),l("div",B,[y(t,{round:"",type:"primary",block:"",disabled:c(ie)&&!c(re),onClick:ce},{default:f((()=>[m(" 下一步 ")])),_:1},8,["disabled"])])),y(o,{ref_key:"shareRef",ref:ne},null,512)])}}});export{G as default};
