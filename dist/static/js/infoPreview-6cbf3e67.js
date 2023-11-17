import{d as e,o as t,c as a,b as n,w as o,F as s,q as i,m as r,a as l,u as c,a6 as u,f as d,cY as p,aI as m,a4 as f,a5 as y,i as h,h as I,aa as v,r as k,j as g,az as j,p as w,ad as b,a0 as _,cZ as q,ae as C,g as L,a8 as P,aG as V,aF as x,ay as N,bA as D,ab as O,by as S,af as T,bY as E}from"./index-4c3d4456.js";import{_ as R,a as A}from"./PolicyInfo-7fb621d0.js";import{g as F,m as Q}from"./trial-8544042c.js";import{n as U}from"./nextStep-8834256f.js";import{b as M,l as Y}from"./product-6ecef766.js";import{u as $}from"./useOrder-7c6d7042.js";import{P as z}from"./index-10336801.js";import{P as G}from"./index-36730899.js";import{R as J,c as B}from"./trial-597c5eee.js";import{p as K,d as W}from"./utils-c163632c.js";import{I as X}from"./insuranceNotificationInformation-4e29e5a2.js";import{Q as Z}from"./notice-33e6eedd.js";import{g as H}from"./utils-8d88475e.js";import{Q as ee}from"./questionnaire-42dcb602.js";import"./core-4dd3cf93.js";import"./cloneDeep-2788d88e.js";import"./infoCollection-fe27ce86.js";import"./util-78299a9f.js";import"./index-1692f723.js";import"./index-2ba4d010.js";const te={class:"com-insured-part-wrapper"},ae={class:"content-wrapper"},ne={class:"risk-item"},oe=e({__name:"InsureInfo",props:{productData:{default:()=>[]},totalPremium:{default:0}},setup:e=>(e,f)=>{const y=p,h=m;return t(),a("div",te,[n(h,{title:"保障信息","show-icon":!1},{default:o((()=>[(t(!0),a(s,null,i(e.productData,(e=>(t(),a(s,{key:e.productCode},[(t(!0),a(s,null,i(e.riskList,(e=>(t(),r(h,{key:e.riskCode,title:e.riskName},{default:o((()=>{var o;return[l("div",ae,[l("div",ne,[e.riskType===c(J).MAIN_RISK?(t(),a(s,{key:0},[n(y,{title:"保障期间",content:e.coveragePeriodDesc},null,8,["content"]),n(y,{title:"交费期间",content:e.chargePeriodDesc},null,8,["content"])],64)):(t(),a(s,{key:1},[n(y,{title:e.riskName,content:"投保"},null,8,["title"]),e.exemptFlag===c(u).YES?(t(),r(y,{key:0,title:"交费期间",content:e.chargePeriodDesc},null,8,["content"])):(null==(o=e.liabilityList)?void 0:o.length)?(t(),a(s,{key:1},[n(y,{title:"保障期间",content:e.coveragePeriodDesc},null,8,["content"]),n(y,{title:"交费期间",content:e.chargePeriodDesc},null,8,["content"]),n(y,{title:"交费方式",content:c(B)[e.paymentFrequency]},null,8,["content"])],64)):d("",!0)],64)),n(y,{title:"保障金额",content:(e.initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),n(y,{title:"首期保费",class:"price",content:(e.initialPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])]})),_:2},1032,["title"])))),128))],64)))),128))])),_:1})])}});const se={class:"long-info-preview"},ie={class:"insurance-notification-information card"},re={class:"footer-btn"},le=l("span",null,"分享",-1),ce=e({__name:"infoPreview",setup(e){const u=f((()=>y((()=>import("./index-10402bca.js")),["static/js/index-10402bca.js","static/css/index-fa4edf2a.css","static/js/index-4c3d4456.js","static/css/index-571755cf.css","static/js/theme-94cf7d00.js","static/js/index-36730899.js","static/css/index-bbfdd7ec.css","static/js/utils-8d88475e.js","static/js/infoCollection-fe27ce86.js","static/js/trial-597c5eee.js"]))),p=h(),J=I(),B=$(),te={holder:v.holderSign,insured:v.insuredSign,agent:v.agentSign},{productCode:ae="",tenantId:ne,agentCode:ce="",agencyCode:ue,saleChannelId:de,isShare:pe,orderNo:me,extraInfo:fe,insurerCode:ye,objectType:he="1",preview:Ie}=p.query;let ve={};try{ve=JSON.parse(decodeURIComponent(fe))}catch(Te){}const ke=k({isView:!1,personalInfo:{},policyInfo:{schema:[],config:[],formData:{}},payInfo:{schema:[],config:[],formData:[]},customerQuestions:[]}),ge=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,je=g({imgUrl:"",desc:"",title:"",link:ge}),we=g(),be=g(),_e=g(!1),qe=g(0),Ce=g(!1),Le=()=>{_e.value=!1},Pe=g(),Ve=()=>{U(B.value,((e,t)=>{t===V.JUMP_PAGE&&Pe.value.handleShare()}))},xe=async()=>{Ie?x(N.INFO_PREVIEW,p.query):J.push({path:te[he],query:p.query})},Ne=g(),De=g(),Oe=g([]),Se=async()=>{let e={};const{code:t,data:a}=await F({orderNo:me,tenantId:ne});"10000"===t&&(Object.assign(B.value,a),e=K(a.insuredList[0].productList),Ne.value=a,Ce.value=!0),(async e=>{let t=[];const{code:a,data:n}=await E({orderNo:me,tenantId:ne});"10000"===a&&(t=n.productQuestionnaireVOList);const{code:o,data:s}=await Y(e);if("10000"===o){const{productQuestionnaireVOList:e}=s||{},a=e.filter((e=>e.businessType!==Z.VISIT));ke.customerQuestions=a.map((e=>{const{questionnaireDetailResponseVO:a,questionnaireId:n,questionnaireName:o}=e||{},{questions:s,basicInfo:i}=a||{},{objectType:r,questionnaireType:l}=i||{};if(l===ee.TEXT){const{content:e,textType:t}=(null==s?void 0:s[0])||{};return{content:e,contentType:H(`${t}`,e),questionnaireId:n,questionnaireName:o}}const c=(t||[]).find((e=>e.questionnaireId===n));return{...a,contentType:"question",...null==c?void 0:c.questionnaireDetailResponseVO,questionnaireId:n,questionnaireName:o}}))}})({productCodeList:e.productList.map((e=>e.productCode))}),M(e).then((({code:e,data:t})=>{if("10000"===e){const{productMaterialList:e,riskMaterialList:a}=W(t);Oe.value=e.concat(a)}})),Q(e).then((({data:e,code:t})=>{if("10000"===t){const{productDetailResList:t,productFactor:a}=e;De.value=a;const{payInfo:n,other:o}=D(a);ke.payInfo={...ke.payInfo,...n},ke.policyInfo={...ke.policyInfo,...o}}}))};return j((()=>{Se()})),(e,p)=>{var f,y,h;const I=O,v=S,k=m,g=T;return t(),a("div",se,[n(I),n(oe,{"product-data":null==(y=null==(f=c(B).insuredList)?void 0:f[0])?void 0:y.productList},null,8,["product-data"]),(null==(h=Object.keys(c(De)||{}))?void 0:h.length)?(t(),r(z,{key:0,ref_key:"personalInfoRef",ref:be,modelValue:c(Ne),"onUpdate:modelValue":p[0]||(p[0]=e=>w(Ne)?Ne.value=e:null),"product-factor":c(De),"is-view":""},null,8,["modelValue","product-factor"])):d("",!0),c(ke).payInfo.schema.length?(t(),r(c(R),{key:1,ref_key:"payInfoRef",ref:we,modelValue:c(B).tenantOrderPayInfoList,"onUpdate:modelValue":p[1]||(p[1]=e=>c(B).tenantOrderPayInfoList=e),schema:c(ke).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):d("",!0),c(ke).policyInfo.schema.length?(t(),r(c(A),{key:2,modelValue:c(B).extInfo,"onUpdate:modelValue":p[2]||(p[2]=e=>c(B).extInfo=e),schema:c(ke).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):d("",!0),l("div",ie,[n(X,{title:"投保告知信息",data:c(ke).customerQuestions||[]},null,8,["data"])]),n(k,{title:"产品资料","show-line":!1,"show-icon":!1},{default:o((()=>[(t(!0),a(s,null,i(c(Oe),((e,a)=>(t(),r(v,{key:a,"is-link":"",title:e.attachmentName,onClick:e=>(e=>{qe.value=e,_e.value=!0})(a)},null,8,["title","onClick"])))),128))])),_:1}),l("div",re,[!c(pe)&&c(je).isShare&&c(b)()?(t(),r(C,_({key:0},c(je),{class:"share-btn",onClick:q(Ve,["stop"])}),{default:o((()=>[n(g,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),le])),_:1},16,["onClick"])):d("",!0),n(G,{shadow:!1,onClick:xe},{default:o((()=>[L(e.$slots,"default",{},(()=>[P("下一步")]))])),_:3})]),c(_e)?(t(),r(c(u),{key:3,show:c(_e),"onUpdate:show":p[3]||(p[3]=e=>w(_e)?_e.value=e:null),"content-list":[c(Oe)[c(qe)]],"is-only-view":"","active-index":0,text:"关闭","force-read-cound":0,onOnCloseFilePreviewByMask:Le},null,8,["show","content-list"])):d("",!0)])}}});export{ce as default};
