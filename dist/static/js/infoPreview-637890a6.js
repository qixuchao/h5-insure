import{d as e,o as t,c as a,b as n,w as o,F as s,s as i,p as r,a as l,u as c,ah as d,f as u,d2 as p,aS as f,af as m,ag as y,i as h,h as I,y as v,r as g,j as k,aG as w,l as j,q as b,am as P,a8 as q,d3 as C,an as _,g as L,v as V,aQ as x,aP as N,aF as D,bH as S,ak as O,bK as T,ao as E,c6 as R}from"./index-1b84c3ba.js";import{P as Q,a as A}from"./PolicyInfo-090dacdd.js";import{g as F,m as U}from"./trial-dda9fd23.js";import{n as M}from"./nextStep-402d9d75.js";import{b as $,l as z}from"./product-923410d2.js";import{u as B}from"./useOrder-95f8038e.js";import{P as Y}from"./index-4f8d1091.js";import{P as G}from"./index-0ac85f0a.js";import{R as J,b as K}from"./trial-53c2f27c.js";import{p as H,d as W}from"./utils-52f63fea.js";import{I as X}from"./insuranceNotificationInformation-3510e48a.js";import{Q as Z}from"./notice-33e6eedd.js";import{g as ee}from"./utils-4fd91b4a.js";import{Q as te}from"./questionnaire-42dcb602.js";import"./core-68abe7ce.js";import"./cloneDeep-4edb0a8b.js";import"./infoCollection-1d900505.js";import"./util-afab887f.js";import"./index-c0635f20.js";import"./index-bce5f24c.js";const ae={class:"com-insured-part-wrapper"},ne={class:"content-wrapper"},oe={class:"risk-item"},se=e({__name:"InsureInfo",props:{productData:{default:()=>[]},totalPremium:{default:0}},setup:e=>(e,m)=>{const y=p,h=f;return t(),a("div",ae,[n(h,{title:"保障信息","show-icon":!1},{default:o((()=>[(t(!0),a(s,null,i(e.productData,(e=>(t(),a(s,{key:e.productCode},[(t(!0),a(s,null,i(e.riskList,(e=>(t(),r(h,{key:e.riskCode,title:e.riskName},{default:o((()=>{var o;return[l("div",ne,[l("div",oe,[e.riskType===c(J).MAIN_RISK?(t(),a(s,{key:0},[n(y,{title:"保障期间",content:e.coveragePeriodDesc},null,8,["content"]),n(y,{title:"交费期间",content:e.chargePeriodDesc},null,8,["content"])],64)):(t(),a(s,{key:1},[n(y,{title:e.riskName,content:"投保"},null,8,["title"]),e.exemptFlag===c(d).YES?(t(),r(y,{key:0,title:"交费期间",content:e.chargePeriodDesc},null,8,["content"])):(null==(o=e.liabilityList)?void 0:o.length)?(t(),a(s,{key:1},[n(y,{title:"保障期间",content:e.coveragePeriodDesc},null,8,["content"]),n(y,{title:"交费期间",content:e.chargePeriodDesc},null,8,["content"]),n(y,{title:"交费方式",content:c(K)[e.paymentFrequency]},null,8,["content"])],64)):u("",!0)],64)),n(y,{title:"保障金额",content:(e.initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),n(y,{title:"首期保费",class:"price",content:(e.initialPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])]})),_:2},1032,["title"])))),128))],64)))),128))])),_:1})])}});const ie={class:"long-info-preview"},re={class:"insurance-notification-information card"},le={class:"footer-btn"},ce=l("span",null,"分享",-1),de=e({__name:"infoPreview",setup(e){const d=m((()=>y((()=>import("./index-20b9e908.js")),["static/js/index-20b9e908.js","static/css/index-fa4edf2a.css","static/js/index-1b84c3ba.js","static/css/index-839a5189.css","static/js/theme-94cf7d00.js","static/js/index-0ac85f0a.js","static/css/index-bbfdd7ec.css","static/js/utils-4fd91b4a.js","static/js/infoCollection-1d900505.js","static/js/trial-53c2f27c.js"]))),p=h(),J=I(),K=B(),ae={holder:v.holderSign,insured:v.insuredSign,agent:v.agentSign},{productCode:ne="",tenantId:oe,agentCode:de="",agencyCode:ue,saleChannelId:pe,isShare:fe,orderNo:me,extraInfo:ye,insurerCode:he,objectType:Ie="1",preview:ve}=p.query;let ge={};try{ge=JSON.parse(decodeURIComponent(ye))}catch(Re){}const ke=g({isView:!1,personalInfo:{},policyInfo:{schema:[],config:[],formData:{}},payInfo:{schema:[],config:[],formData:[]},customerQuestions:[]}),we=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,je=k({imgUrl:"",desc:"",title:"",link:we}),be=k(),Pe=k(),qe=k(!1),Ce=k(0),_e=k(!1),Le=()=>{qe.value=!1},Ve=k(),xe=()=>{M(K.value,((e,t)=>{t===x.JUMP_PAGE&&Ve.value.handleShare()}))},Ne=async()=>{ve?N(D.INFO_PREVIEW,p.query):J.push({path:ae[Ie],query:p.query})},De=k(),Se=k(),Oe=k([]),Te=async()=>{let e={};const{code:t,data:a}=await F({orderNo:me,tenantId:oe});"10000"===t&&(Object.assign(K.value,a),e=H(a.insuredList[0].productList),De.value=a,_e.value=!0),(async e=>{let t=[];const{code:a,data:n}=await R({orderNo:me,tenantId:oe});"10000"===a&&(t=n.productQuestionnaireVOList);const{code:o,data:s}=await z(e);if("10000"===o){const{productQuestionnaireVOList:e}=s||{},a=e.filter((e=>e.businessType!==Z.VISIT));ke.customerQuestions=a.map((e=>{const{questionnaireDetailResponseVO:a,questionnaireId:n,questionnaireName:o}=e||{},{questions:s,basicInfo:i}=a||{},{objectType:r,questionnaireType:l}=i||{};if(l===te.TEXT){const{content:e,textType:t}=(null==s?void 0:s[0])||{};return{content:e,contentType:ee(`${t}`,e),questionnaireId:n,questionnaireName:o}}const c=(t||[]).find((e=>e.questionnaireId===n));return{...a,contentType:"question",...null==c?void 0:c.questionnaireDetailResponseVO,questionnaireId:n,questionnaireName:o}}))}})({productCodeList:e.productList.map((e=>e.productCode))}),$(e).then((({code:e,data:t})=>{if("10000"===e){const{productMaterialList:e,riskMaterialList:a}=W(t);Oe.value=e.concat(a)}})),U(e).then((({data:e,code:t})=>{if("10000"===t){const{productDetailResList:t,productFactor:a}=e;Se.value=a;const{payInfo:n,other:o}=S(a);ke.payInfo={...ke.payInfo,...n},ke.policyInfo={...ke.policyInfo,...o}}}))};w((()=>{Te()}));const Ee=k();return j((()=>{setTimeout((async()=>{Ee.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,p)=>{var m,y,h;const I=O,v=T,g=f,k=E;return t(),a("div",ie,[n(I),n(se,{"product-data":null==(y=null==(m=c(K).insuredList)?void 0:m[0])?void 0:y.productList},null,8,["product-data"]),(null==(h=Object.keys(c(Se)||{}))?void 0:h.length)?(t(),r(Y,{key:0,ref_key:"personalInfoRef",ref:Pe,modelValue:c(De),"onUpdate:modelValue":p[0]||(p[0]=e=>b(De)?De.value=e:null),"product-factor":c(Se),"is-view":""},null,8,["modelValue","product-factor"])):u("",!0),c(ke).payInfo.schema.length?(t(),r(c(Q),{key:1,ref_key:"payInfoRef",ref:be,modelValue:c(K).tenantOrderPayInfoList,"onUpdate:modelValue":p[1]||(p[1]=e=>c(K).tenantOrderPayInfoList=e),schema:c(ke).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):u("",!0),c(ke).policyInfo.schema.length?(t(),r(c(A),{key:2,modelValue:c(K).extInfo,"onUpdate:modelValue":p[2]||(p[2]=e=>c(K).extInfo=e),schema:c(ke).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):u("",!0),l("div",re,[n(X,{title:"投保告知信息",data:c(ke).customerQuestions||[]},null,8,["data"])]),n(g,{title:"产品资料","show-line":!1,"show-icon":!1},{default:o((()=>[(t(!0),a(s,null,i(c(Oe),((e,a)=>(t(),r(v,{key:a,"is-link":"",title:e.attachmentName,onClick:e=>(e=>{Ce.value=e,qe.value=!0})(a)},null,8,["title","onClick"])))),128))])),_:1}),l("div",le,[!c(fe)&&c(je).isShare&&c(P)()?(t(),r(_,q({key:0},c(je),{class:"share-btn",onClick:C(xe,["stop"])}),{default:o((()=>[n(k,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),ce])),_:1},16,["onClick"])):u("",!0),n(G,{shadow:!1,onClick:Ne},{default:o((()=>[L(e.$slots,"default",{},(()=>[V("下一步")]))])),_:3})]),c(qe)?(t(),r(c(d),{key:3,show:c(qe),"onUpdate:show":p[3]||(p[3]=e=>b(qe)?qe.value=e:null),"content-list":[c(Oe)[c(Ce)]],"is-only-view":"","active-index":0,text:"关闭","force-read-cound":0,onOnCloseFilePreviewByMask:Le},null,8,["show","content-list"])):u("",!0)])}}});export{de as default};
