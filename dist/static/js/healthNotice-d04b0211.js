import{d as e,u as t,a as o,r as a,o as s,b as n,c as i,e as r,f as c,g as u,_ as d,h as l,i as p,w as m,j as f,k as I,D as j,l as q,m as v,n as y,B as b,p as h,P as N,q as T}from"./index-160c1272.js";import{q as C}from"./product-1dbacbba.js";import{g as O}from"./utils-2340fce2.js";import{P as g}from"./index-df51fa91.js";import{n as x}from"./nextStep-9672064e.js";import{u as _}from"./useOrder-27772104.js";import{P as E,B as k}from"./constants-7afb7c3d.js";import"./pdfh5-e588f83d.js";import"./infoCollection-d69547b2.js";import"./trial-700249c5.js";import"./core-46333429.js";import"./constant-8927d485.js";import"./merge-e7788e50.js";import"./keysIn-131bbce9.js";import"./isObjectLike-a9798079.js";const w=1;const P={class:"long-health-notice-wrap"},$={class:"footer-btn"},Q=e({__name:"healthNotice",setup(e){const Q=t(),S=o(),U=_();console.log("route",Q);const{productCode:B,orderNo:D,templateId:L,tenantId:V,preview:A,questionnaireId:G}=Q.query,J=a({}),M=a(),R=a(),z=()=>{j.confirm({title:"",message:`${R.value||""}不符合当前产品投保条件，请选择其他产品`}).then((()=>{q()})).catch((()=>{}))},F=()=>{M.value?S.push({path:`${Q.path}/${M.value}`,query:{...Q.query,questionnaireId:M.value}}):A?h(E.QUESTION_NOTICE,Q.query):x(U.value,((e,t)=>{t===N.JUMP_PAGE&&T(e.nextPageCode,Q.query)}))};return s((()=>{!A&&(async()=>{const{code:e,data:t}=await v({orderNo:D,tenantId:V});"10000"===e&&Object.assign(U.value,t,{extInfo:{...t.extInfo,templateId:L,pageCode:E.QUESTION_NOTICE,buttonCode:k.QUESTION_NOTICE}})})(),(async()=>{var e;const{code:t,data:o}=await C({productCode:B});if("10000"===t){const{productQuestionnaireVOList:t}=o||{};let a=t[0]||{};if((null==t?void 0:t.length)>1)if(G){const e=t.findIndex((e=>`${e.id}`===G));t[e]&&(a=t[e]),t[e+1]&&(M.value=t[e+1].id)}else M.value=null==(e=t[1])?void 0:e.id;const{questionnaireDetailResponseVO:s,questionnaireId:n,questionnaireName:i}=a||{},{questions:r,basicInfo:c}=s||{},{objectType:u,questionnaireType:d}=c||{};if(R.value=u,d===w){const{content:e,textType:t}=(null==r?void 0:r[0])||{};J.value={content:e,contentType:O(`${t}`,e),questionnaireId:n,questionnaireName:i}}else J.value={content:r,contentType:"question",questionnaireId:n,questionnaireName:i}}})()})),(e,t)=>{const o=y,a=b;return n(),i("div",P,[r(o),c(J).content?(n(),u(d,{key:0,type:c(J).contentType,content:c(J).content},null,8,["type","content"])):l("",!0),p("div",$,[r(a,{onClick:z},{default:m((()=>[f("部分为是")])),_:1}),r(g,{shadow:!1,onClick:F},{default:m((()=>[I(e.$slots,"default",{},(()=>[f("以上皆否")]))])),_:3})])])}}});export{Q as default};
