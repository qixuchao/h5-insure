import{d as e,i as a,h as t,j as o,k as i,aG as n,l as s,c9 as r,o as u,c as l,u as c,p as d,c7 as v,f as p,w as f,v as m,b as y,dH as h,ah as q,T as b,ar as g,an as I,aQ as T,aN as N,c8 as j,dE as w,c5 as C}from"./index-8d3a2422.js";import{l as k}from"./product-2c980d96.js";import{O as x,Q as O}from"./questionnaire-42dcb602.js";import{g as $}from"./utils-44a0fe65.js";import{n as _}from"./nextStep-95a5873d.js";import{u as E}from"./useOrder-fec75421.js";import{g as L}from"./trial-de26f19c.js";import{N as R,Q as P}from"./notice-33e6eedd.js";import{P as V}from"./constants-6c7c253a.js";import{u as A}from"./useThread-637a02aa.js";import"./infoCollection-e49ec9e2.js";import"./trial-c200444c.js";import"./core-1984b779.js";const Q={class:"long-health-notice-wrap"},S={key:1,class:"footer-btn"},U={key:2,class:"footer-btn"},B=e({__name:"healthNotice",setup(e){const B=a(),D=t(),J=E({}),{orderNo:M,tenantId:z,preview:G,agentCode:H,questionnaireId:F}=B.query,W=o({}),X=o(),Y=o(),K=o(),Z=o([]),ee=o({orderNo:M,tenantId:z,noticeType:Y}),ae=o(),te=o(),oe=o(!1),ie=o(),ne=o(!1),se=o(),re=()=>{X.value?D.push({path:`${V.questionNotice}/${X.value}`,query:{...B.query,questionnaireId:X.value}}):G?D.push({path:V.infoPreview,query:B.query}):(J.value.extInfo.buttonCode=h.short.saveNoticeNextPage,J.value.extInfo.pageCode="healthNotice",_(J.value,((e,a,t)=>{a===T.JUMP_PAGE?D.push({path:V.holderInfoPreview,query:B.query}):a===T.JUMP_ALERT&&"faceAuth"===e.alertType&&N.confirm({message:t,confirmButtonText:"去分享",cancelButtonText:"被保人确认"}).then((()=>{const e={...B.query,isShare:1,orderNo:M,agentCode:H,objectType:"insured",origin:"share"};ae.value={title:"标题",desc:"描述",imageUrl:w,url:`${window.location.origin}${V.faceVerify}?${C.stringify(e)}`,link:`${window.location.origin}${V.faceVerify}?${C.stringify(e)}`},te.value.handleShare(ae.value),oe.value=!0,ie.value.run()})).catch((()=>{D.push({path:V.faceVerify,query:{...B.query,objectType:"insured",origin:"confirm"}})}))})))},ue=()=>{Y.value===R.INSURED?(J.value.extInfo.buttonCode=h.short.saveNotice,J.value.extInfo.pageCode="healthNotice",_(J.value,((e,a,t)=>{a===T.JUMP_ALERT?N.alert({message:t,confirmButtonText:"确定"}):a===T.CONTINUE&&re()}))):re()},le=o([]),ce=i((()=>!(!le.value.length||Y.value!==x.HOLDER)&&!!le.value.find((e=>`${e.id}`===F)))),de=()=>{const e=Z.value.find((e=>e.id===K.value));Object.assign(W.value,null==e?void 0:e.questionnaireDetailResponseVO)},ve=async(e=!0)=>{var a,t;const{code:o,data:i}=await L({orderNo:M,tenantId:z},{loading:e});if("10000"===o){ne.value=(null==(t=null==(a=i.insuredList)?void 0:a[0])?void 0:t.faceAuthFlag)===q.YES,ne.value&&(ie.value.isStart&&b("被保人认证完成"),ie.value.stop()),Object.assign(J.value,i,{extInfo:{...i.extInfo,pageCode:"healthNotice",buttonCode:h.short.saveNotice}});const e=i.insuredList[0].productList.map((e=>e.productCode));ee.value.objectId=i.insuredList[0].id,(async e=>{var a;const{code:t,data:o}=await j({orderNo:M,tenantId:z});"10000"===t&&(Z.value=o.productQuestionnaireVOList);const{code:i,data:n}=await k(e);if("10000"===i){const{productQuestionnaireVOList:e}=n||{},t=e.filter((e=>e.businessType===P.NEW_CONTRACT&&-1!==e.noticeObject));(null==t?void 0:t.length)||b("未匹配到健康告知问卷"),le.value=t;let o=t[0]||{};if((null==t?void 0:t.length)>1)if(F){const e=t.findIndex((e=>`${e.id}`===F));t[e]&&(o=t[e]),t[e+1]&&(X.value=t[e+1].id)}else X.value=null==(a=t[1])?void 0:a.id;const{questionnaireDetailResponseVO:i,questionnaireId:s,questionnaireName:r,noticeObject:u}=o||{},{questions:l,basicInfo:c}=i||{},{questionnaireType:d}=c||{};if(Y.value=u,K.value=s,d===O.TEXT){const{content:e,textType:a}=(null==l?void 0:l[0])||{};W.value={content:e,contentType:$(`${a}`,e),questionnaireId:s,questionnaireName:r}}else{const e=(Z.value||[]).find((e=>e.questionnaireId===K.value&&e.noticeObject===Y.value));W.value={...i,questionnaireId:s,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};ie.value=A({start:()=>{ve(!1),ne.value=!1},stop:()=>{ne.value=!0},time:1e4,number:0});const pe=()=>{var e;null==(e=se.value)||e.submitQuestion()};n((()=>{!G&&ve()}));const fe=o();return s((()=>{setTimeout((async()=>{fe.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),r((()=>{ie.value.stop()})),(e,a)=>{const t=g,o=I;return u(),l("div",Q,[c(W)?(u(),d(v,{key:0,ref_key:"previewRef",ref:se,type:c(W).contentType,content:c(W),params:c(ee),"is-view":c(oe),"mark-requested":!1,"success-callback":ue},null,8,["type","content","params","is-view"])):p("",!0),"question"===c(W).contentType&&c(W).questionnaireId?(u(),l("div",S,[c(ce)?(u(),d(t,{key:0,round:"",type:"primary",plain:"",onClick:de},{default:f((()=>[m("同被保人")])),_:1})):p("",!0),y(t,{round:"",type:"primary",block:"",disabled:c(oe)&&!c(ne),onClick:pe},{default:f((()=>[m(" 下一步 ")])),_:1},8,["disabled"])])):(u(),l("div",U,[y(t,{round:"",type:"primary",block:"",disabled:c(oe)&&!c(ne),onClick:ue},{default:f((()=>[m(" 下一步 ")])),_:1},8,["disabled"])])),y(o,{ref_key:"shareRef",ref:te},null,512)])}}});export{B as default};
