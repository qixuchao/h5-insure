import{d as e,af as a,ag as o,i as t,h as s,y as n,r as i,j as r,aG as l,l as c,o as d,c as u,b as f,u as p,p as m,q as y,f as I,a as h,w as v,F as w,s as j,am as g,a8 as b,d2 as k,an as q,g as V,v as x,aQ as C,aP as _,aF as L,bH as O,ak as P,bK as T,aS as N,ao as S,c6 as E}from"./index-2c0dec77.js";import{P as Q,a as R}from"./PolicyInfo-cd38c34c.js";import{g as D,m as U}from"./trial-18eda6f9.js";import{n as A}from"./nextStep-bdf7f7f2.js";import{b as F,l as M}from"./product-72573ec7.js";import{u as $}from"./useOrder-64019b9e.js";import{P as z}from"./index-48fbd326.js";import{P as B}from"./index-ecf7c580.js";import{_ as G}from"./InsureInfo-e165b320.js";import{p as J,d as H}from"./utils-eb2e7d7e.js";import{I as K}from"./insuranceNotificationInformation-2674eca3.js";import{Q as W}from"./notice-33e6eedd.js";import{g as X}from"./utils-35fc1808.js";import{Q as Y}from"./questionnaire-42dcb602.js";import"./core-77f56f78.js";import"./cloneDeep-35f5a9b8.js";import"./infoCollection-857c8d53.js";import"./util-eea2f3ad.js";import"./trial-f0fde32b.js";import"./index-9ece99a4.js";import"./index-2f4e910b.js";const Z={class:"long-info-preview"},ee={class:"insurance-notification-information card"},ae={class:"footer-btn"},oe=h("span",null,"分享",-1),te=e({__name:"infoPreview",setup(e){const te=a((()=>o((()=>import("./index-9f376873.js")),["static/js/index-9f376873.js","static/css/index-fa4edf2a.css","static/js/index-2c0dec77.js","static/css/index-839a5189.css","static/js/theme-94cf7d00.js","static/js/index-ecf7c580.js","static/css/index-bbfdd7ec.css","static/js/utils-35fc1808.js","static/js/infoCollection-857c8d53.js","static/js/trial-f0fde32b.js"]))),se=t(),ne=s(),ie=$(),re={holder:n.holderSign,insured:n.insuredSign,agent:n.agentSign},{productCode:le="",tenantId:ce,agentCode:de="",agencyCode:ue,saleChannelId:fe,isShare:pe,orderNo:me,extraInfo:ye,insurerCode:Ie,objectType:he="1",preview:ve}=se.query;let we={};try{we=JSON.parse(decodeURIComponent(ye))}catch(Re){}const je=i({isView:!1,personalInfo:{},policyInfo:{schema:[],config:[],formData:{}},payInfo:{schema:[],config:[],formData:[]},customerQuestions:[]}),ge=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,be=r({imgUrl:"",desc:"",title:"",link:ge}),ke=r(),qe=r(),Ve=r(!1),xe=r(0),Ce=r(!1),_e=()=>{Ve.value=!1},Le=r(),Oe=()=>{A(ie.value,((e,a)=>{a===C.JUMP_PAGE&&Le.value.handleShare()}))},Pe=async()=>{ve?_(L.INFO_PREVIEW,se.query):ne.push({path:re[he],query:se.query})},Te=r(),Ne=r(),Se=r([]),Ee=async()=>{let e={};const{code:a,data:o}=await D({orderNo:me,tenantId:ce});"10000"===a&&(Object.assign(ie.value,o),e=J(o.insuredList[0].productList),Te.value=o,Ce.value=!0),(async e=>{let a=[];const{code:o,data:t}=await E({orderNo:me,tenantId:ce});"10000"===o&&(a=t.productQuestionnaireVOList);const{code:s,data:n}=await M(e);if("10000"===s){const{productQuestionnaireVOList:e}=n||{},o=e.filter((e=>e.businessType!==W.VISIT));je.customerQuestions=o.map((e=>{const{questionnaireDetailResponseVO:o,questionnaireId:t,questionnaireName:s}=e||{},{questions:n,basicInfo:i}=o||{},{objectType:r,questionnaireType:l}=i||{};if(l===Y.TEXT){const{content:e,textType:a}=(null==n?void 0:n[0])||{};return{content:e,contentType:X(`${a}`,e),questionnaireId:t,questionnaireName:s}}const c=(a||[]).find((e=>e.questionnaireId===t));return{...o,contentType:"question",...null==c?void 0:c.questionnaireDetailResponseVO,questionnaireId:t,questionnaireName:s}}))}})({productCodeList:e.productList.map((e=>e.productCode))}),F(e).then((({code:e,data:a})=>{if("10000"===e){const{productMaterialList:e,riskMaterialList:o}=H(a);Se.value=e.concat(o)}})),U(e).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:o}=e;Ne.value=o;const{payInfo:t,other:s}=O(o);je.payInfo={...je.payInfo,...t},je.policyInfo={...je.policyInfo,...s}}}))};l((()=>{Ee()}));const Qe=r();return c((()=>{setTimeout((async()=>{Qe.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{var o,t,s;const n=P,i=T,r=N,l=S;return d(),u("div",Z,[f(n),f(G,{"product-data":null==(t=null==(o=p(ie).insuredList)?void 0:o[0])?void 0:t.productList},null,8,["product-data"]),(null==(s=Object.keys(p(Ne)||{}))?void 0:s.length)?(d(),m(z,{key:0,ref_key:"personalInfoRef",ref:qe,modelValue:p(Te),"onUpdate:modelValue":a[0]||(a[0]=e=>y(Te)?Te.value=e:null),"product-factor":p(Ne),"is-view":""},null,8,["modelValue","product-factor"])):I("",!0),p(je).payInfo.schema.length?(d(),m(p(Q),{key:1,ref_key:"payInfoRef",ref:ke,modelValue:p(ie).tenantOrderPayInfoList,"onUpdate:modelValue":a[1]||(a[1]=e=>p(ie).tenantOrderPayInfoList=e),schema:p(je).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):I("",!0),p(je).policyInfo.schema.length?(d(),m(p(R),{key:2,modelValue:p(ie).extInfo,"onUpdate:modelValue":a[2]||(a[2]=e=>p(ie).extInfo=e),schema:p(je).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):I("",!0),h("div",ee,[f(K,{title:"投保告知信息",data:p(je).customerQuestions||[]},null,8,["data"])]),f(r,{title:"产品资料","show-line":!1,"show-icon":!1},{default:v((()=>[(d(!0),u(w,null,j(p(Se),((e,a)=>(d(),m(i,{key:a,"is-link":"",title:e.attachmentName,onClick:e=>(e=>{xe.value=e,Ve.value=!0})(a)},null,8,["title","onClick"])))),128))])),_:1}),h("div",ae,[!p(pe)&&p(be).isShare&&p(g)()?(d(),m(q,b({key:0},p(be),{class:"share-btn",onClick:k(Oe,["stop"])}),{default:v((()=>[f(l,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),oe])),_:1},16,["onClick"])):I("",!0),f(B,{shadow:!1,onClick:Pe},{default:v((()=>[V(e.$slots,"default",{},(()=>[x("下一步")]))])),_:3})]),p(Ve)?(d(),m(p(te),{key:3,show:p(Ve),"onUpdate:show":a[3]||(a[3]=e=>y(Ve)?Ve.value=e:null),"content-list":[p(Se)[p(xe)]],"is-only-view":"","active-index":0,text:"关闭","force-read-cound":0,onOnCloseFilePreviewByMask:_e},null,8,["show","content-list"])):I("",!0)])}}});export{te as default};
