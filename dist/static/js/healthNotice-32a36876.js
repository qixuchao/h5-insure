import{d as e,i as t,h as a,j as n,k as o,aG as s,l as i,o as r,c as u,b as d,u as c,p as l,bL as p,w as f,a as m,v,f as y,c5 as b,y as I,aN as q,aF as j,aE as T,ak as O,ar as N,aP as g,aQ as C,aj as h,c6 as k,T as w}from"./index-5e7cc819.js";import{l as E}from"./product-bc823a76.js";import{O as _,Q as x}from"./questionnaire-42dcb602.js";import{g as L}from"./utils-abb1e928.js";import{n as Q}from"./nextStep-c243373b.js";import{u as R}from"./useOrder-59973bd6.js";import{g as V}from"./trial-16e00b4f.js";import{Q as $}from"./notice-33e6eedd.js";import{N as D}from"./data-b55e8045.js";import"./infoCollection-5d0c9dcd.js";import"./trial-78365229.js";import"./core-6372d3f7.js";const P={class:"long-health-notice-wrap"},S={class:"footer-button"},U=e({__name:"healthNotice",setup(e){const U=t(),A=a(),B=R(),{orderNo:z,tenantId:G,preview:F,questionnaireId:H}=U.query,J=n({}),M=n(),W=n(),X=n(),K=n([]),Y=n({orderNo:z,tenantId:G,noticeType:W}),Z=()=>{M.value?A.push({path:`${I.questionNotice}/${M.value}`,query:{...U.query,questionnaireId:M.value}}):q.confirm({title:"告知提醒",message:D.join("\n"),confirmButtonText:"确定",messageAlign:"left",className:"notice-dialog"}).then((()=>{F?g(j.QUESTION_NOTICE,U.query):Q(B.value,((e,t)=>{t===C.JUMP_PAGE&&h(e.nextPageCode,U.query)}))}))},ee=n([]),te=o((()=>!(!ee.value.length||W.value!==_.HOLDER)&&!!ee.value.find((e=>`${e.id}`===H)))),ae=()=>{const e=K.value.find((e=>e.id===X.value));Object.assign(J.value,null==e?void 0:e.questionnaireDetailResponseVO)},ne=async()=>{const{code:e,data:t}=await V({orderNo:z,tenantId:G});if("10000"===e){Object.assign(B.value,t,{extInfo:{...t.extInfo,pageCode:j.QUESTION_NOTICE,buttonCode:T.QUESTION_NOTICE}});const e=t.insuredList[0].productList.map((e=>e.productCode));Y.value.objectId=t.insuredList[0].id,(async e=>{var t;const{code:a,data:n}=await k({orderNo:z,tenantId:G});"10000"===a&&(K.value=n.productQuestionnaireVOList);const{code:o,data:s}=await E(e);if("10000"===o){const{productQuestionnaireVOList:e}=s||{},a=e.filter((e=>e.businessType===$.NEW_CONTRACT&&-1!==e.noticeObject));(null==a?void 0:a.length)||w("未匹配到健康告知问卷"),ee.value=a;let n=a[0]||{};if((null==a?void 0:a.length)>1)if(H){const e=a.findIndex((e=>`${e.id}`===H));a[e]&&(n=a[e]),a[e+1]&&(M.value=a[e+1].id)}else M.value=null==(t=a[1])?void 0:t.id;const{questionnaireDetailResponseVO:o,questionnaireId:i,questionnaireName:r,noticeObject:u}=n||{},{questions:d,basicInfo:c}=o||{},{questionnaireType:l}=c||{};if(W.value=u,X.value=i,l===x.TEXT){const{content:e,textType:t}=(null==d?void 0:d[0])||{};J.value={content:e,contentType:L(`${t}`,e),questionnaireId:i,questionnaireName:r}}else{const e=(K.value||[]).find((e=>e.questionnaireId===X.value&&e.noticeObject===W.value));J.value={...o,questionnaireId:i,contentType:"question",...null==e?void 0:e.questionnaireDetailResponseVO}}}})({productCodeList:e})}};s((()=>{!F&&ne()}));const oe=n();return i((()=>{setTimeout((async()=>{oe.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const a=O,n=N;return r(),u("div",P,[d(a),c(J)?(r(),l(b,{key:0,type:c(J).contentType,content:c(J),params:c(Y),"success-callback":Z},p({_:2},["question"===c(J).contentType&&c(J).questionnaireId?{name:"footer",fn:f((()=>[m("div",S,[c(te)?(r(),l(n,{key:0,round:"",type:"primary",plain:"",onClick:ae},{default:f((()=>[v("同被保人")])),_:1})):y("",!0),d(n,{round:"",type:"primary",block:"","native-type":"submit"},{default:f((()=>[v(" 下一步 ")])),_:1})])])),key:"0"}:{name:"footer-btn",fn:f((()=>[m("div",{class:"footer-btn"},[d(n,{round:"",type:"primary",block:"",onClick:Z},{default:f((()=>[v(" 下一步 ")])),_:1})])])),key:"1"}]),1032,["type","content","params"])):y("",!0)])}}});export{U as default};
