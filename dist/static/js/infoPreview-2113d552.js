import{d as e,o as t,c as a,b as n,w as o,F as s,q as i,m as r,a as l,u as c,a6 as d,f as u,cT as p,aP as f,a4 as m,a5 as y,i as h,h as I,r as v,j as b,aG as k,p as g,ac as j,a0 as w,cU as P,ad as _,g as q,a8 as C,aN as L,aM as V,bw as N,aa as x,bu as D,ae as O,bR as S}from"./index-8120d8cf.js";import{_ as T}from"./PayInfo-daa204d5.js";import{_ as R}from"./PolicyInfo-0f1bf9fa.js";import{g as E,m as U}from"./trial-7cb4d685.js";import{n as A}from"./nextStep-b87d8da7.js";import{b as Q,l as F}from"./product-86c3f34f.js";import{u as M}from"./useOrder-1196bf19.js";import{P as $,a as Y}from"./constants-4b08cf92.js";import{P as G}from"./index-5f86c60b.js";import{P as J}from"./index-4e7f9bd3.js";import{R as z,c as B}from"./trial-656dc3ab.js";import{p as K,d as W}from"./utils-e0b0ea7a.js";import{I as X}from"./insuranceNotificationInformation-20ec74cd.js";import{Q as H}from"./notice-33e6eedd.js";import{g as Z}from"./utils-b0183f21.js";import{Q as ee}from"./questionnaire-42dcb602.js";import"./core-a5abff49.js";import"./cloneDeep-091bb47a.js";import"./lodash-de1f22ef.js";import"./infoCollection-d8c37848.js";import"./util-1af60b82.js";import"./index-bc41399e.js";import"./index-cbc20c9b.js";const te={class:"com-insured-part-wrapper"},ae={class:"content-wrapper"},ne={class:"risk-item"},oe=e({__name:"InsureInfo",props:{productData:{default:()=>[]},totalPremium:{default:0}},setup:e=>(m,y)=>{const h=p,I=f;return t(),a("div",te,[n(I,{title:"保障信息","show-icon":!1},{default:o((()=>[(t(!0),a(s,null,i(e.productData,(e=>(t(),a(s,{key:e.productCode},[(t(!0),a(s,null,i(e.riskList,(e=>(t(),r(I,{key:e.riskCode,title:e.riskName},{default:o((()=>{var o;return[l("div",ae,[l("div",ne,[e.riskType===c(z).MAIN_RISK?(t(),a(s,{key:0},[n(h,{title:"保障期间",content:e.coveragePeriodDesc},null,8,["content"]),n(h,{title:"交费期间",content:e.chargePeriodDesc},null,8,["content"])],64)):(t(),a(s,{key:1},[n(h,{title:e.riskName,content:"投保"},null,8,["title"]),e.exemptFlag===c(d).YES?(t(),r(h,{key:0,title:"交费期间",content:e.chargePeriodDesc},null,8,["content"])):(null==(o=e.liabilityList)?void 0:o.length)?(t(),a(s,{key:1},[n(h,{title:"保障期间",content:e.coveragePeriodDesc},null,8,["content"]),n(h,{title:"交费期间",content:e.chargePeriodDesc},null,8,["content"]),n(h,{title:"交费方式",content:c(B)[e.paymentFrequency]},null,8,["content"])],64)):u("",!0)],64)),n(h,{title:"保障金额",content:(e.initialAmount||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"]),n(h,{title:"首期保费",class:"price",content:(e.initialPremium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})},null,8,["content"])])])]})),_:2},1032,["title"])))),128))],64)))),128))])),_:1})])}});const se={class:"long-info-preview"},ie={class:"insurance-notification-information card"},re={class:"footer-btn"},le=l("span",null,"分享",-1),ce=e({__name:"infoPreview",setup(e){const d=m((()=>y((()=>import("./index-668e7dfe.js")),["static/js/index-668e7dfe.js","static/css/index-fa4edf2a.css","static/js/index-8120d8cf.js","static/css/index-f1c5cfcb.css","static/js/theme-94cf7d00.js","static/js/index-4e7f9bd3.js","static/css/index-bbfdd7ec.css","static/js/utils-b0183f21.js","static/js/infoCollection-d8c37848.js","static/js/trial-656dc3ab.js"]))),p=h(),z=I(),B=M(),te={holder:$.holderSign,insured:$.insuredSign,agent:$.agentSign},{productCode:ae="",tenantId:ne,agentCode:ce="",agencyCode:de,saleChannelId:ue,isShare:pe,orderNo:fe,extraInfo:me,insurerCode:ye,objectType:he="1",preview:Ie}=p.query;let ve={};try{ve=JSON.parse(decodeURIComponent(me))}catch(Te){}const be=v({isView:!1,personalInfo:{},policyInfo:{schema:[],config:[],formData:{}},payInfo:{schema:[],config:[],formData:[]},customerQuestions:[]}),ke=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,ge=b({imgUrl:"",desc:"",title:"",link:ke}),je=b(),we=b(),Pe=b(!1),_e=b(0),qe=b(!1),Ce=()=>{Pe.value=!1},Le=b(),Ve=()=>{A(B.value,((e,t)=>{t===L.JUMP_PAGE&&Le.value.handleShare()}))},Ne=async()=>{Ie?V(Y.INFO_PREVIEW,p.query):z.push({path:te[he],query:p.query})},xe=b(),De=b(),Oe=b([]),Se=async()=>{let e={};const{code:t,data:a}=await E({orderNo:fe,tenantId:ne});"10000"===t&&(Object.assign(B.value,a),e=K(a.insuredList[0].productList),xe.value=a,qe.value=!0),(async e=>{let t=[];const{code:a,data:n}=await S({orderNo:fe,tenantId:ne});"10000"===a&&(t=n.productQuestionnaireVOList);const{code:o,data:s}=await F(e);if("10000"===o){const{productQuestionnaireVOList:e}=s||{},a=e.filter((e=>e.businessType!==H.VISIT));be.customerQuestions=a.map((e=>{const{questionnaireDetailResponseVO:a,questionnaireId:n,questionnaireName:o}=e||{},{questions:s,basicInfo:i}=a||{},{objectType:r,questionnaireType:l}=i||{};if(l===ee.TEXT){const{content:e,textType:t}=(null==s?void 0:s[0])||{};return{content:e,contentType:Z(`${t}`,e),questionnaireId:n,questionnaireName:o}}const c=(t||[]).find((e=>e.questionnaireId===n));return{...a,contentType:"question",...null==c?void 0:c.questionnaireDetailResponseVO,questionnaireId:n,questionnaireName:o}}))}})({productCodeList:e.productList.map((e=>e.productCode))}),Q(e).then((({code:e,data:t})=>{if("10000"===e){const{productMaterialList:e,riskMaterialList:a}=W(t);Oe.value=e.concat(a)}})),U(e).then((({data:e,code:t})=>{if("10000"===t){const{productDetailResList:t,productFactor:a}=e;De.value=a;const{payInfo:n,other:o}=N(a);be.payInfo={...be.payInfo,...n},be.policyInfo={...be.policyInfo,...o}}}))};return k((()=>{Se()})),(e,p)=>{var m,y,h;const I=x,v=D,b=f,k=O;return t(),a("div",se,[n(I),n(oe,{"product-data":null==(y=null==(m=c(B).insuredList)?void 0:m[0])?void 0:y.productList},null,8,["product-data"]),(null==(h=Object.keys(c(De)||{}))?void 0:h.length)?(t(),r(G,{key:0,ref_key:"personalInfoRef",ref:we,modelValue:c(xe),"onUpdate:modelValue":p[0]||(p[0]=e=>g(xe)?xe.value=e:null),"product-factor":c(De),"is-view":""},null,8,["modelValue","product-factor"])):u("",!0),c(be).payInfo.schema.length?(t(),r(c(T),{key:1,ref_key:"payInfoRef",ref:je,modelValue:c(B).tenantOrderPayInfoList,"onUpdate:modelValue":p[1]||(p[1]=e=>c(B).tenantOrderPayInfoList=e),schema:c(be).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):u("",!0),c(be).policyInfo.schema.length?(t(),r(c(R),{key:2,modelValue:c(B),"onUpdate:modelValue":p[2]||(p[2]=e=>g(B)?B.value=e:null),schema:c(be).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):u("",!0),l("div",ie,[n(X,{title:"投保告知信息",data:c(be).customerQuestions||[]},null,8,["data"])]),n(b,{title:"产品资料","show-line":!1,"show-icon":!1},{default:o((()=>[(t(!0),a(s,null,i(c(Oe),((e,a)=>(t(),r(v,{key:a,"is-link":"",title:e.attachmentName,onClick:e=>(e=>{_e.value=e,Pe.value=!0})(a)},null,8,["title","onClick"])))),128))])),_:1}),l("div",re,[!c(pe)&&c(ge).isShare&&c(j)()?(t(),r(_,w({key:0},c(ge),{class:"share-btn",onClick:P(Ve,["stop"])}),{default:o((()=>[n(k,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),le])),_:1},16,["onClick"])):u("",!0),n(J,{shadow:!1,onClick:Ne},{default:o((()=>[q(e.$slots,"default",{},(()=>[C("下一步")]))])),_:3})]),c(Pe)?(t(),r(c(d),{key:3,show:c(Pe),"onUpdate:show":p[3]||(p[3]=e=>g(Pe)?Pe.value=e:null),"content-list":[c(Oe)[c(_e)]],"is-only-view":"","active-index":0,text:"关闭","force-read-cound":0,onOnCloseFilePreviewByMask:Ce},null,8,["show","content-list"])):u("",!0)])}}});export{ce as default};
