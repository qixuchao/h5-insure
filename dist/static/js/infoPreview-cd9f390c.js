import{d as e,o as t,c as a,b as n,w as o,F as s,q as i,m as r,a as l,u as c,a6 as u,f as d,cX as p,aS as f,a4 as m,a5 as y,i as h,h as I,aa as v,r as k,j as g,aJ as j,p as b,ad as w,a0 as _,cY as q,ae as C,g as P,a8 as L,aQ as V,aP as x,aI as N,bz as D,ab as S,bx as O,af as T,bX as E}from"./index-33bf4ed5.js";import{_ as R,a as Q}from"./PolicyInfo-5cc226c4.js";import{g as A,m as U}from"./trial-5b97a685.js";import{n as F}from"./nextStep-25bd1546.js";import{b as M,l as Y}from"./product-1319c99a.js";import{u as $}from"./useOrder-6fc04d11.js";import{P as J}from"./index-08d9cc9e.js";import{P as X}from"./index-73f14b84.js";import{R as z,c as B}from"./trial-f340c80c.js";import{p as G,d as K}from"./utils-e5d10ba4.js";import{I as W}from"./insuranceNotificationInformation-f805c3df.js";import{Q as H}from"./notice-33e6eedd.js";import{g as Z}from"./utils-4770f2c7.js";import{Q as ee}from"./questionnaire-42dcb602.js";import"./core-914affe5.js";import"./cloneDeep-efa0633b.js";import"./lodash-bd3054c3.js";import"./infoCollection-7223e1f0.js";import"./util-bcf52aa9.js";import"./index-90ba0651.js";import"./index-1ce0340e.js";const te={class:"com-insured-part-wrapper"},ae={class:"content-wrapper"},ne={class:"risk-item"},oe=e({__name:"InsureInfo",props:{productData:{default:()=>[]},totalPremium:{default:0}},setup:e=>(e,m)=>{const y=p,h=f;return t(),a("div",te,[n(h,{title:"保障信息","show-icon":!1},{default:o((()=>[(t(!0),a(s,null,i(e.productData,(e=>(t(),a(s,{key:e.productCode},[(t(!0),a(s,null,i(e.riskList,(e=>(t(),r(h,{key:e.riskCode,title:e.riskName},{default:o((()=>{var o;return[l("div",ae,[l("div",ne,[e.riskType===c(z).MAIN_RISK?(t(),a(s,{key:0},[n(y,{title:"保障期间",content:e.coveragePeriodDesc},null,8,["content"]),n(y,{title:"交费期间",content:e.chargePeriodDesc},null,8,["content"])],64)):(t(),a(s,{key:1},[n(y,{title:e.riskName,content:"投保"},null,8,["title"]),e.exemptFlag===c(u).YES?(t(),r(y,{key:0,title:"交费期间",content:e.chargePeriodDesc},null,8,["content"])):(null==(o=e.liabilityList)?void 0:o.length)?(t(),a(s,{key:1},[n(y,{title:"保障期间",content:e.coveragePeriodDesc},null,8,["content"]),n(y,{title:"交费期间",content:e.chargePeriodDesc},null,8,["content"]),n(y,{title:"交费方式",content:c(B)[e.paymentFrequency]},null,8,["content"])],64)):d("",!0)],64)),n(y,{title:"保障金额",content:(e.initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),n(y,{title:"首期保费",class:"price",content:(e.initialPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])]})),_:2},1032,["title"])))),128))],64)))),128))])),_:1})])}});const se={class:"long-info-preview"},ie={class:"insurance-notification-information card"},re={class:"footer-btn"},le=l("span",null,"分享",-1),ce=e({__name:"infoPreview",setup(e){const u=m((()=>y((()=>import("./index-843faf25.js")),["static/js/index-843faf25.js","static/css/index-fa4edf2a.css","static/js/index-33bf4ed5.js","static/css/index-f9448f5b.css","static/js/theme-94cf7d00.js","static/js/index-73f14b84.js","static/css/index-bbfdd7ec.css","static/js/utils-4770f2c7.js","static/js/infoCollection-7223e1f0.js","static/js/trial-f340c80c.js"]))),p=h(),z=I(),B=$(),te={holder:v.holderSign,insured:v.insuredSign,agent:v.agentSign},{productCode:ae="",tenantId:ne,agentCode:ce="",agencyCode:ue,saleChannelId:de,isShare:pe,orderNo:fe,extraInfo:me,insurerCode:ye,objectType:he="1",preview:Ie}=p.query;let ve={};try{ve=JSON.parse(decodeURIComponent(me))}catch(Te){}const ke=k({isView:!1,personalInfo:{},policyInfo:{schema:[],config:[],formData:{}},payInfo:{schema:[],config:[],formData:[]},customerQuestions:[]}),ge=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,je=g({imgUrl:"",desc:"",title:"",link:ge}),be=g(),we=g(),_e=g(!1),qe=g(0),Ce=g(!1),Pe=()=>{_e.value=!1},Le=g(),Ve=()=>{F(B.value,((e,t)=>{t===V.JUMP_PAGE&&Le.value.handleShare()}))},xe=async()=>{Ie?x(N.INFO_PREVIEW,p.query):z.push({path:te[he],query:p.query})},Ne=g(),De=g(),Se=g([]),Oe=async()=>{let e={};const{code:t,data:a}=await A({orderNo:fe,tenantId:ne});"10000"===t&&(Object.assign(B.value,a),e=G(a.insuredList[0].productList),Ne.value=a,Ce.value=!0),(async e=>{let t=[];const{code:a,data:n}=await E({orderNo:fe,tenantId:ne});"10000"===a&&(t=n.productQuestionnaireVOList);const{code:o,data:s}=await Y(e);if("10000"===o){const{productQuestionnaireVOList:e}=s||{},a=e.filter((e=>e.businessType!==H.VISIT));ke.customerQuestions=a.map((e=>{const{questionnaireDetailResponseVO:a,questionnaireId:n,questionnaireName:o}=e||{},{questions:s,basicInfo:i}=a||{},{objectType:r,questionnaireType:l}=i||{};if(l===ee.TEXT){const{content:e,textType:t}=(null==s?void 0:s[0])||{};return{content:e,contentType:Z(`${t}`,e),questionnaireId:n,questionnaireName:o}}const c=(t||[]).find((e=>e.questionnaireId===n));return{...a,contentType:"question",...null==c?void 0:c.questionnaireDetailResponseVO,questionnaireId:n,questionnaireName:o}}))}})({productCodeList:e.productList.map((e=>e.productCode))}),M(e).then((({code:e,data:t})=>{if("10000"===e){const{productMaterialList:e,riskMaterialList:a}=K(t);Se.value=e.concat(a)}})),U(e).then((({data:e,code:t})=>{if("10000"===t){const{productDetailResList:t,productFactor:a}=e;De.value=a;const{payInfo:n,other:o}=D(a);ke.payInfo={...ke.payInfo,...n},ke.policyInfo={...ke.policyInfo,...o}}}))};return j((()=>{Oe()})),(e,p)=>{var m,y,h;const I=S,v=O,k=f,g=T;return t(),a("div",se,[n(I),n(oe,{"product-data":null==(y=null==(m=c(B).insuredList)?void 0:m[0])?void 0:y.productList},null,8,["product-data"]),(null==(h=Object.keys(c(De)||{}))?void 0:h.length)?(t(),r(J,{key:0,ref_key:"personalInfoRef",ref:we,modelValue:c(Ne),"onUpdate:modelValue":p[0]||(p[0]=e=>b(Ne)?Ne.value=e:null),"product-factor":c(De),"is-view":""},null,8,["modelValue","product-factor"])):d("",!0),c(ke).payInfo.schema.length?(t(),r(c(R),{key:1,ref_key:"payInfoRef",ref:be,modelValue:c(B).tenantOrderPayInfoList,"onUpdate:modelValue":p[1]||(p[1]=e=>c(B).tenantOrderPayInfoList=e),schema:c(ke).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):d("",!0),c(ke).policyInfo.schema.length?(t(),r(c(Q),{key:2,modelValue:c(B),"onUpdate:modelValue":p[2]||(p[2]=e=>b(B)?B.value=e:null),schema:c(ke).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):d("",!0),l("div",ie,[n(W,{title:"投保告知信息",data:c(ke).customerQuestions||[]},null,8,["data"])]),n(k,{title:"产品资料","show-line":!1,"show-icon":!1},{default:o((()=>[(t(!0),a(s,null,i(c(Se),((e,a)=>(t(),r(v,{key:a,"is-link":"",title:e.attachmentName,onClick:e=>(e=>{qe.value=e,_e.value=!0})(a)},null,8,["title","onClick"])))),128))])),_:1}),l("div",re,[!c(pe)&&c(je).isShare&&c(w)()?(t(),r(C,_({key:0},c(je),{class:"share-btn",onClick:q(Ve,["stop"])}),{default:o((()=>[n(g,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),le])),_:1},16,["onClick"])):d("",!0),n(X,{shadow:!1,onClick:xe},{default:o((()=>[P(e.$slots,"default",{},(()=>[L("下一步")]))])),_:3})]),c(_e)?(t(),r(c(u),{key:3,show:c(_e),"onUpdate:show":p[3]||(p[3]=e=>b(_e)?_e.value=e:null),"content-list":[c(Se)[c(qe)]],"is-only-view":"","active-index":0,text:"关闭","force-read-cound":0,onOnCloseFilePreviewByMask:Pe},null,8,["show","content-list"])):d("",!0)])}}});export{ce as default};
