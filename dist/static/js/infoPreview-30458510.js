import{d as e,ax as a,ay as o,i as t,h as s,y as n,r as i,j as r,aQ as l,l as c,o as d,c as u,b as f,u as p,p as m,q as y,f as I,a as h,w as v,F as j,s as w,aE as b,a8 as g,d4 as q,aF as V,g as k,v as x,aY as C,aX as _,aP as L,bO as O,aC as P,bR as T,ar as E,aG as N,c8 as R}from"./index-ecfbfc6d.js";import{P as S,a as Q}from"./PolicyInfo-1191880d.js";import{g as D,m as U}from"./trial-9db274cf.js";import{n as A}from"./nextStep-c333f00e.js";import{b as F,l as M}from"./product-4a5f8dca.js";import{u as $}from"./useOrder-a5a4ff47.js";import{P as z}from"./index-da599448.js";import{P as B}from"./index-a3a6063f.js";import{_ as G}from"./InsureInfo-69d307a6.js";import{p as J,d as X}from"./utils-0e17c1e3.js";import{I as W}from"./insuranceNotificationInformation-0498c75f.js";import{Q as Y}from"./notice-d22565aa.js";import{g as H}from"./utils-6b1044bf.js";import{Q as K}from"./questionnaire-42dcb602.js";import"./core-67bb32b1.js";import"./utils-dcf9d43e.js";import"./createProposal-10adf689.js";import"./trial-91f90222.js";import"./cloneDeep-84f4b54e.js";import"./infoCollection-9eb10417.js";import"./util-a07c13de.js";import"./index-93fdf1f0.js";import"./index-251a0c35.js";const Z={class:"long-info-preview"},ee={class:"insurance-notification-information card"},ae={class:"footer-btn"},oe=h("span",null,"分享",-1),te=e({__name:"infoPreview",setup(e){const te=a((()=>o((()=>import("./index-9dec29f7.js")),["static/js/index-9dec29f7.js","static/css/index-fa4edf2a.css","static/js/index-ecfbfc6d.js","static/css/index-051cce43.css","static/js/theme-94cf7d00.js","static/js/index-a3a6063f.js","static/css/index-bbfdd7ec.css","static/js/utils-6b1044bf.js","static/js/infoCollection-9eb10417.js","static/js/trial-91f90222.js"]))),se=t(),ne=s(),ie=$(),re={holder:n.holderSign,insured:n.insuredSign,agent:n.agentSign},{productCode:le="",tenantId:ce,agentCode:de="",agencyCode:ue,saleChannelId:fe,isShare:pe,orderNo:me,extraInfo:ye,insurerCode:Ie,objectType:he="1",preview:ve}=se.query;let je={};try{je=JSON.parse(decodeURIComponent(ye))}catch(Qe){}const we=i({isView:!1,personalInfo:{},policyInfo:{schema:[],config:[],formData:{}},payInfo:{schema:[],config:[],formData:[]},customerQuestions:[]}),be=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,ge=r({imgUrl:"",desc:"",title:"",link:be}),qe=r(),Ve=r(),ke=r(!1),xe=r(0),Ce=r(!1),_e=()=>{ke.value=!1},Le=r(),Oe=()=>{A(ie.value,((e,a)=>{a===C.JUMP_PAGE&&Le.value.handleShare()}))},Pe=async()=>{ve?_(L.INFO_PREVIEW,se.query):ne.push({path:re[he],query:se.query})},Te=r(),Ee=r(),Ne=r([]),Re=async()=>{let e={};const{code:a,data:o}=await D({orderNo:me,tenantId:ce});"10000"===a&&(Object.assign(ie.value,o),e=J(o.insuredList[0].productList),Te.value=o,Ce.value=!0),(async e=>{let a=[];const{code:o,data:t}=await R({orderNo:me,tenantId:ce});"10000"===o&&(a=t.productQuestionnaireVOList);const{code:s,data:n}=await M(e);if("10000"===s){const{productQuestionnaireVOList:e}=n||{},o=e.filter((e=>e.businessType!==Y.VISIT));we.customerQuestions=o.map((e=>{const{questionnaireDetailResponseVO:o,questionnaireId:t,questionnaireName:s}=e||{},{questions:n,basicInfo:i}=o||{},{objectType:r,questionnaireType:l}=i||{};if(l===K.TEXT){const{content:e,textType:a}=(null==n?void 0:n[0])||{};return{content:e,contentType:H(`${a}`,e),questionnaireId:t,questionnaireName:s}}const c=(a||[]).find((e=>e.questionnaireId===t));return{...o,contentType:"question",...null==c?void 0:c.questionnaireDetailResponseVO,questionnaireId:t,questionnaireName:s}}))}})({productCodeList:e.productList.map((e=>e.productCode))}),F(e).then((({code:e,data:a})=>{if("10000"===e){const{productMaterialList:e,riskMaterialList:o}=X(a);Ne.value=e.concat(o)}})),U(e).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:o}=e;Ee.value=o;const{payInfo:t,other:s}=O(o);we.payInfo={...we.payInfo,...t},we.policyInfo={...we.policyInfo,...s}}}))};l((()=>{Re()}));const Se=r();return c((()=>{setTimeout((async()=>{Se.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{var o,t,s;const n=P,i=T,r=E,l=N;return d(),u("div",Z,[f(n),f(G,{"product-data":null==(t=null==(o=p(ie).insuredList)?void 0:o[0])?void 0:t.productList},null,8,["product-data"]),(null==(s=Object.keys(p(Ee)||{}))?void 0:s.length)?(d(),m(z,{key:0,ref_key:"personalInfoRef",ref:Ve,modelValue:p(Te),"onUpdate:modelValue":a[0]||(a[0]=e=>y(Te)?Te.value=e:null),"product-factor":p(Ee),"is-view":""},null,8,["modelValue","product-factor"])):I("",!0),p(we).payInfo.schema.length?(d(),m(p(S),{key:1,ref_key:"payInfoRef",ref:qe,modelValue:p(ie).tenantOrderPayInfoList,"onUpdate:modelValue":a[1]||(a[1]=e=>p(ie).tenantOrderPayInfoList=e),schema:p(we).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):I("",!0),p(we).policyInfo.schema.length?(d(),m(p(Q),{key:2,modelValue:p(ie).extInfo,"onUpdate:modelValue":a[2]||(a[2]=e=>p(ie).extInfo=e),schema:p(we).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):I("",!0),h("div",ee,[f(W,{title:"投保告知信息",data:p(we).customerQuestions||[]},null,8,["data"])]),f(r,{title:"产品资料","show-line":!1,"show-icon":!1},{default:v((()=>[(d(!0),u(j,null,w(p(Ne),((e,a)=>(d(),m(i,{key:a,"is-link":"",title:e.attachmentName,onClick:e=>(e=>{xe.value=e,ke.value=!0})(a)},null,8,["title","onClick"])))),128))])),_:1}),h("div",ae,[!p(pe)&&p(ge).isShare&&p(b)()?(d(),m(V,g({key:0},p(ge),{class:"share-btn",onClick:q(Oe,["stop"])}),{default:v((()=>[f(l,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),oe])),_:1},16)):I("",!0),f(B,{shadow:!1,onClick:Pe},{default:v((()=>[k(e.$slots,"default",{},(()=>[x("下一步")]))])),_:3})]),p(ke)?(d(),m(p(te),{key:3,show:p(ke),"onUpdate:show":a[3]||(a[3]=e=>y(ke)?ke.value=e:null),"content-list":[p(Ne)[p(xe)]],"is-only-view":"","active-index":0,text:"关闭","force-read-cound":0,onOnCloseFilePreviewByMask:_e},null,8,["show","content-list"])):I("",!0)])}}});export{te as default};
