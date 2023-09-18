import{d as e,o as a,c as t,b as o,w as n,F as s,n as i,l,a as r,u as c,a6 as d,q as u,cm as p,aE as m,a4 as f,a5 as y,h,g as v,r as I,i as k,av as g,m as j,ac as w,a0 as b,cn as _,ad as P,f as C,a8 as x,aC as L,aB as V,bk as D,aa as S,aq as N,ae as E}from"./index-60e61453.js";import{_ as q,a as O}from"./PolicyInfo-62f7224b.js";import{g as R,m as A}from"./trial-644887d5.js";import{n as U}from"./nextStep-1713b43d.js";import{b as F}from"./product-ed1f09de.js";import{u as M}from"./useOrder-710b5c0d.js";import{P as T,a as Y}from"./constants-fe95ef6f.js";import{P as $}from"./index-b21fba70.js";import{P as B}from"./index-b66b9afb.js";import{R as J,c as Q}from"./trial-9ed5b07a.js";import{p as z,d as G}from"./utils-8657ad4f.js";import{I as K}from"./insuranceNotificationInformation-f61dec10.js";import"./core-5a50cf1a.js";import"./cloneDeep-7de29d4f.js";import"./lodash-a9cf61d1.js";import"./infoCollection-cb437a7a.js";import"./questionnaire-62331097.js";import"./util-f6876ed1.js";import"./utils-a16d6414.js";import"./index-6866b1b4.js";import"./index-e1ee03a7.js";const W={class:"com-insured-part-wrapper"},H={class:"content-wrapper"},X={class:"risk-item"},Z=e({__name:"InsureInfo",props:{productData:{default:()=>[]},totalPremium:{default:0}},setup:e=>(e,f)=>{const y=p,h=m;return a(),t("div",W,[o(h,{title:"保障信息","show-icon":!1},{default:n((()=>[(a(!0),t(s,null,i(e.productData,(e=>(a(),t(s,{key:e.productCode},[(a(!0),t(s,null,i(e.riskList,(e=>(a(),l(h,{key:e.riskCode,title:e.riskName},{default:n((()=>{var n;return[r("div",H,[r("div",X,[e.riskType===c(J).MAIN_RISK?(a(),t(s,{key:0},[o(y,{title:"保障期间",content:e.coveragePeriodDesc},null,8,["content"]),o(y,{title:"交费期间",content:e.chargePeriodDesc},null,8,["content"])],64)):(a(),t(s,{key:1},[o(y,{title:e.riskName,content:"投保"},null,8,["title"]),e.exemptFlag===c(d).YES?(a(),l(y,{key:0,title:"交费期间",content:e.chargePeriodDesc},null,8,["content"])):(null==(n=e.liabilityList)?void 0:n.length)?(a(),t(s,{key:1},[o(y,{title:"保障期间",content:e.coveragePeriodDesc},null,8,["content"]),o(y,{title:"交费期间",content:e.chargePeriodDesc},null,8,["content"]),o(y,{title:"交费方式",content:c(Q)[e.paymentFrequency]},null,8,["content"])],64)):u("",!0)],64)),o(y,{title:"保障金额",content:(e.initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),o(y,{title:"首期保费",class:"price",content:(e.initialPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])]})),_:2},1032,["title"])))),128))],64)))),128))])),_:1})])}});const ee={class:"long-info-preview"},ae={class:"insurance-notification-information card"},te={class:"footer-btn"},oe=r("span",null,"分享",-1),ne=e({__name:"infoPreview",setup(e){const d=f((()=>y((()=>import("./index-a9ae3c8b.js")),["static/js/index-a9ae3c8b.js","static/css/index-fa4edf2a.css","static/js/index-60e61453.js","static/css/index-3d26afdd.css","static/js/theme-94cf7d00.js","static/js/index-b66b9afb.js","static/css/index-bbfdd7ec.css","static/js/utils-a16d6414.js","static/js/infoCollection-cb437a7a.js","static/js/trial-9ed5b07a.js"]))),p=h(),J=v(),Q=M(),W={holder:T.holderSign,insured:T.insuredSign,agent:T.agentSign},{productCode:H="",tenantId:X,agentCode:ne="",agencyCode:se,saleChannelId:ie,isShare:le,orderNo:re,extraInfo:ce,insurerCode:de,objectType:ue="1",preview:pe}=p.query;let me={};try{me=JSON.parse(decodeURIComponent(ce))}catch(Ve){}const fe=I({isView:!1,personalInfo:{},policyInfo:{schema:[],config:[],formData:{}},payInfo:{schema:[],config:[],formData:[]},customerQuestions:[]}),ye=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,he=k({imgUrl:"",desc:"",title:"",link:ye}),ve=k(),Ie=k(),ke=k(!1),ge=k(0),je=k(!1),we=()=>{ke.value=!1},be=k(),_e=()=>{U(Q.value,((e,a)=>{a===L.JUMP_PAGE&&be.value.handleShare()}))},Pe=async()=>{pe?V(Y.INFO_PREVIEW,p.query):J.push({path:W[ue],query:p.query})},Ce=k(),xe=k(),Le=k([]);return g((()=>{(async()=>{let e={};const{code:a,data:t}=await R({orderNo:re,tenantId:X});"10000"===a&&(Object.assign(Q.value,t),e=z(t.insuredList[0].productList),Ce.value=t,je.value=!0),F(e).then((({code:e,data:a})=>{if("10000"===e){const{productMaterialList:e,riskMaterialList:t}=G(a);Le.value=e.concat(t)}})),A(e).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t}=e;xe.value=t;const{payInfo:o,other:n}=D(t);fe.payInfo={...fe.payInfo,...o},fe.policyInfo={...fe.policyInfo,...n}}}))})()})),(e,p)=>{var f,y;const h=S,v=N,I=m,k=E;return a(),t("div",ee,[o(h),o(Z,{"product-data":null==(y=null==(f=c(Q).insuredList)?void 0:f[0])?void 0:y.productList},null,8,["product-data"]),c(xe)?(a(),l($,{key:0,ref_key:"personalInfoRef",ref:Ie,modelValue:c(Ce),"onUpdate:modelValue":p[0]||(p[0]=e=>j(Ce)?Ce.value=e:null),"product-factor":c(xe),"is-view":""},null,8,["modelValue","product-factor"])):u("",!0),c(fe).payInfo.schema.length?(a(),l(c(q),{key:1,ref_key:"payInfoRef",ref:ve,modelValue:c(Q).tenantOrderPayInfoList,"onUpdate:modelValue":p[1]||(p[1]=e=>c(Q).tenantOrderPayInfoList=e),schema:c(fe).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):u("",!0),c(fe).policyInfo.schema.length?(a(),l(c(O),{key:2,modelValue:c(Q),"onUpdate:modelValue":p[2]||(p[2]=e=>j(Q)?Q.value=e:null),schema:c(fe).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):u("",!0),r("div",ae,[o(K,{title:"投保告知信息",data:c(fe).customerQuestions||[]},null,8,["data"])]),o(I,{title:"产品资料","show-line":!1,"show-icon":!1},{default:n((()=>[(a(!0),t(s,null,i(c(Le),((e,t)=>(a(),l(v,{key:t,"is-link":"",title:e.attachmentName,onClick:e=>{ke.value=!0}},null,8,["title","onClick"])))),128))])),_:1}),r("div",te,[!c(le)&&c(he).isShare&&c(w)()?(a(),l(P,b({key:0},c(he),{class:"share-btn",onClick:_(_e,["stop"])}),{default:n((()=>[o(k,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),oe])),_:1},16,["onClick"])):u("",!0),o(B,{shadow:!1,onClick:Pe},{default:n((()=>[C(e.$slots,"default",{},(()=>[x("下一步")]))])),_:3})]),c(ke)?(a(),l(c(d),{key:3,show:c(ke),"onUpdate:show":p[3]||(p[3]=e=>j(ke)?ke.value=e:null),"content-list":[c(Le)[c(ge)]],"is-only-view":"","active-index":c(ge),text:"关闭","force-read-cound":0,onOnCloseFilePreviewByMask:we},null,8,["show","content-list","active-index"])):u("",!0)])}}});export{ne as default};
