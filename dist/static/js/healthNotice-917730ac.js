import{d as e,u as t,a,r as n,o,b as s,c as i,e as r,f as c,g as u,_ as d,h as l,i as p,w as m,j as f,D as y,k as I,l as j,m as q,B as v,n as b,P as h,p as N}from"./index-0f8b4bae.js";import{q as T}from"./product-744d29d1.js";import{g as C}from"./utils-eb9c27b8.js";import{n as O}from"./nextStep-7c3ffffa.js";import{u as g}from"./useOrder-ac4fcd77.js";import{P as _,B as x}from"./constants-7afb7c3d.js";import"./pdfh5-008ca364.js";import"./infoCollection-eddc6bef.js";import"./trial-425cd01c.js";import"./core-bf935c66.js";import"./constant-8927d485.js";import"./merge-e7788e50.js";import"./keysIn-131bbce9.js";import"./isObjectLike-a9798079.js";const E=1;const k={class:"long-health-notice-wrap"},w={class:"footer-btn"},P=e({__name:"healthNotice",setup(e){const P=t(),$=a(),Q=g();console.log("route",P);const{productCode:S,orderNo:U,templateId:B,tenantId:D,preview:L,questionnaireId:V}=P.query,A=n({}),G=n(),J=n(),M=()=>{y.confirm({title:"",message:`${J.value||""}不符合当前产品投保条件，请选择其他产品`}).then((()=>{I()})).catch((()=>{}))},R=()=>{G.value?$.push({path:`${P.path}/${G.value}`,query:{...P.query,questionnaireId:G.value}}):L?b(_.QUESTION_NOTICE,P.query):O(Q.value,((e,t)=>{t===h.JUMP_PAGE&&N(e.nextPageCode,P.query)}))};return o((()=>{!L&&(async()=>{const{code:e,data:t}=await j({orderNo:U,tenantId:D});"10000"===e&&Object.assign(Q.value,t,{extInfo:{...t.extInfo,templateId:B,pageCode:_.QUESTION_NOTICE,buttonCode:x.QUESTION_NOTICE}})})(),(async()=>{var e;const{code:t,data:a}=await T({productCode:S});if("10000"===t){const{productQuestionnaireVOList:t}=a||{};let n=t[0]||{};if((null==t?void 0:t.length)>1)if(V){const e=t.findIndex((e=>`${e.id}`===V));t[e]&&(n=t[e]),t[e+1]&&(G.value=t[e+1].id)}else G.value=null==(e=t[1])?void 0:e.id;const{questionnaireDetailResponseVO:o,questionnaireId:s,questionnaireName:i}=n||{},{questions:r,basicInfo:c}=o||{},{objectType:u,questionnaireType:d}=c||{};if(J.value=u,d===E){const{content:e,textType:t}=(null==r?void 0:r[0])||{};A.value={content:e,contentType:C(`${t}`,e),questionnaireId:s,questionnaireName:i}}else A.value={content:r,contentType:"question",questionnaireId:s,questionnaireName:i}}})()})),(e,t)=>{const a=q,n=v;return s(),i("div",k,[r(a),c(A).content?(s(),u(d,{key:0,type:c(A).contentType,content:c(A).content},null,8,["type","content"])):l("",!0),p("div",w,[r(n,{plain:"",type:"primary",onClick:M},{default:m((()=>[f("部分为是")])),_:1}),r(n,{type:"primary",onClick:R},{default:m((()=>[f("以上皆否")])),_:1})])])}}});export{P as default};
