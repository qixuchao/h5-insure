import{d as e,o as t,c as a,b as o,w as n,F as s,q as i,m as l,a as r,u as c,a6 as u,f as d,cv as p,aN as f,a4 as m,a5 as y,i as h,h as v,r as I,j as k,aE as g,p as j,ac as w,a0 as b,cw as _,ad as P,g as C,a8 as L,aL as x,aK as V,bq as D,aa as N,bn as S,ae as E}from"./index-4071f9bf.js";import{_ as q,a as O}from"./PolicyInfo-8699d469.js";import{g as R,m as A}from"./trial-bc43c025.js";import{n as U}from"./nextStep-c85a2b77.js";import{b as F}from"./product-56ff0e15.js";import{u as M}from"./useOrder-851ca1e2.js";import{P as T,a as Y}from"./constants-fe95ef6f.js";import{P as $}from"./index-7c8fc277.js";import{P as J}from"./index-c35ce671.js";import{R as K,c as Q}from"./trial-bc7e0b8c.js";import{p as z,d as B}from"./utils-cb36a0fd.js";import{I as G}from"./insuranceNotificationInformation-9ae73ba3.js";import"./core-4de64fda.js";import"./cloneDeep-f287b401.js";import"./lodash-a3c39f03.js";import"./infoCollection-614b9784.js";import"./questionnaire-62331097.js";import"./util-1f562494.js";import"./utils-3e9f2cf6.js";import"./index-e606b271.js";import"./index-a8fdb36a.js";const W={class:"com-insured-part-wrapper"},H={class:"content-wrapper"},X={class:"risk-item"},Z=e({__name:"InsureInfo",props:{productData:{default:()=>[]},totalPremium:{default:0}},setup:e=>(e,m)=>{const y=p,h=f;return t(),a("div",W,[o(h,{title:"保障信息","show-icon":!1},{default:n((()=>[(t(!0),a(s,null,i(e.productData,(e=>(t(),a(s,{key:e.productCode},[(t(!0),a(s,null,i(e.riskList,(e=>(t(),l(h,{key:e.riskCode,title:e.riskName},{default:n((()=>{var n;return[r("div",H,[r("div",X,[e.riskType===c(K).MAIN_RISK?(t(),a(s,{key:0},[o(y,{title:"保障期间",content:e.coveragePeriodDesc},null,8,["content"]),o(y,{title:"交费期间",content:e.chargePeriodDesc},null,8,["content"])],64)):(t(),a(s,{key:1},[o(y,{title:e.riskName,content:"投保"},null,8,["title"]),e.exemptFlag===c(u).YES?(t(),l(y,{key:0,title:"交费期间",content:e.chargePeriodDesc},null,8,["content"])):(null==(n=e.liabilityList)?void 0:n.length)?(t(),a(s,{key:1},[o(y,{title:"保障期间",content:e.coveragePeriodDesc},null,8,["content"]),o(y,{title:"交费期间",content:e.chargePeriodDesc},null,8,["content"]),o(y,{title:"交费方式",content:c(Q)[e.paymentFrequency]},null,8,["content"])],64)):d("",!0)],64)),o(y,{title:"保障金额",content:(e.initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),o(y,{title:"首期保费",class:"price",content:(e.initialPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])]})),_:2},1032,["title"])))),128))],64)))),128))])),_:1})])}});const ee={class:"long-info-preview"},te={class:"insurance-notification-information card"},ae={class:"footer-btn"},oe=r("span",null,"分享",-1),ne=e({__name:"infoPreview",setup(e){const u=m((()=>y((()=>import("./index-34aa095b.js")),["static/js/index-34aa095b.js","static/css/index-fa4edf2a.css","static/js/index-4071f9bf.js","static/css/index-ca389564.css","static/js/theme-94cf7d00.js","static/js/index-c35ce671.js","static/css/index-bbfdd7ec.css","static/js/utils-3e9f2cf6.js","static/js/infoCollection-614b9784.js","static/js/trial-bc7e0b8c.js"]))),p=h(),K=v(),Q=M(),W={holder:T.holderSign,insured:T.insuredSign,agent:T.agentSign},{productCode:H="",tenantId:X,agentCode:ne="",agencyCode:se,saleChannelId:ie,isShare:le,orderNo:re,extraInfo:ce,insurerCode:ue,objectType:de="1",preview:pe}=p.query;let fe={};try{fe=JSON.parse(decodeURIComponent(ce))}catch(Ve){}const me=I({isView:!1,personalInfo:{},policyInfo:{schema:[],config:[],formData:{}},payInfo:{schema:[],config:[],formData:[]},customerQuestions:[]}),ye=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,he=k({imgUrl:"",desc:"",title:"",link:ye}),ve=k(),Ie=k(),ke=k(!1),ge=k(0),je=k(!1),we=()=>{ke.value=!1},be=k(),_e=()=>{U(Q.value,((e,t)=>{t===x.JUMP_PAGE&&be.value.handleShare()}))},Pe=async()=>{pe?V(Y.INFO_PREVIEW,p.query):K.push({path:W[de],query:p.query})},Ce=k(),Le=k(),xe=k([]);return g((()=>{(async()=>{let e={};const{code:t,data:a}=await R({orderNo:re,tenantId:X});"10000"===t&&(Object.assign(Q.value,a),e=z(a.insuredList[0].productList),Ce.value=a,je.value=!0),F(e).then((({code:e,data:t})=>{if("10000"===e){const{productMaterialList:e,riskMaterialList:a}=B(t);xe.value=e.concat(a)}})),A(e).then((({data:e,code:t})=>{if("10000"===t){const{productDetailResList:t,productFactor:a}=e;Le.value=a;const{payInfo:o,other:n}=D(a);me.payInfo={...me.payInfo,...o},me.policyInfo={...me.policyInfo,...n}}}))})()})),(e,p)=>{var m,y;const h=N,v=S,I=f,k=E;return t(),a("div",ee,[o(h),o(Z,{"product-data":null==(y=null==(m=c(Q).insuredList)?void 0:m[0])?void 0:y.productList},null,8,["product-data"]),c(Le)?(t(),l($,{key:0,ref_key:"personalInfoRef",ref:Ie,modelValue:c(Ce),"onUpdate:modelValue":p[0]||(p[0]=e=>j(Ce)?Ce.value=e:null),"product-factor":c(Le),"is-view":""},null,8,["modelValue","product-factor"])):d("",!0),c(me).payInfo.schema.length?(t(),l(c(q),{key:1,ref_key:"payInfoRef",ref:ve,modelValue:c(Q).tenantOrderPayInfoList,"onUpdate:modelValue":p[1]||(p[1]=e=>c(Q).tenantOrderPayInfoList=e),schema:c(me).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):d("",!0),c(me).policyInfo.schema.length?(t(),l(c(O),{key:2,modelValue:c(Q),"onUpdate:modelValue":p[2]||(p[2]=e=>j(Q)?Q.value=e:null),schema:c(me).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):d("",!0),r("div",te,[o(G,{title:"投保告知信息",data:c(me).customerQuestions||[]},null,8,["data"])]),o(I,{title:"产品资料","show-line":!1,"show-icon":!1},{default:n((()=>[(t(!0),a(s,null,i(c(xe),((e,a)=>(t(),l(v,{key:a,"is-link":"",title:e.attachmentName,onClick:e=>(e=>{ge.value=e,ke.value=!0})(a)},null,8,["title","onClick"])))),128))])),_:1}),r("div",ae,[!c(le)&&c(he).isShare&&c(w)()?(t(),l(P,b({key:0},c(he),{class:"share-btn",onClick:_(_e,["stop"])}),{default:n((()=>[o(k,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),oe])),_:1},16,["onClick"])):d("",!0),o(J,{shadow:!1,onClick:Pe},{default:n((()=>[C(e.$slots,"default",{},(()=>[L("下一步")]))])),_:3})]),c(ke)?(t(),l(c(u),{key:3,show:c(ke),"onUpdate:show":p[3]||(p[3]=e=>j(ke)?ke.value=e:null),"content-list":[c(xe)[c(ge)]],"is-only-view":"","active-index":0,text:"关闭","force-read-cound":0,onOnCloseFilePreviewByMask:we},null,8,["show","content-list"])):d("",!0)])}}});export{ne as default};
