import{_ as t,d as e,cA as a,h as n,g as i,i as s,r as o,j as l,O as r,dB as d,b6 as c,cX as u,o as m,l as p,w as f,a as v,a8 as h,e as I,u as y,b as L,c as g,n as b,F as j,an as O,q as k,m as w,b8 as A,V,a9 as D,bK as N,bk as q,ae as x,at as C,au as P}from"./index-9df177ad.js";import{C as T}from"./index-a6fe22f7.js";import{_ as R}from"./index-0a97f7b1.js";import{m as _}from"./trial-d6c6a013.js";import"./infoCollection-9ed0730a.js";import"./core-cc09b1df.js";import{I as Y}from"./infoItem-687e55e3.js";import{I as Q}from"./insuranceNotificationInformation-d5964da1.js";import{a as M,_ as U}from"./PolicyInfo-91cac552.js";import{l as E,b as H}from"./product-0f09cd57.js";import{Q as S}from"./questionnaire-62331097.js";import{P as B}from"./index-131bcadb.js";import{Q as F}from"./notice-33e6eedd.js";import{g as G}from"./utils-fb848e2a.js";import{O as X}from"./OperateBtn-27d5035c.js";import{C as K}from"./index-c4ec8ce6.js";import"./cloneDeep-49acbdef.js";import"./lodash-e4a2702f.js";import"./util-92a034a2.js";import"./trial-94d9af9e.js";import"./constants-fe95ef6f.js";import"./order-8027d4e2.js";const $=t=>(C("data-v-23bf39a9"),t=t(),P(),t),z={class:"page-order-detail"},J=$((()=>v("div",{class:"card-item-name"},"订单进度",-1))),W={class:"card-item-icon"},Z={class:"card card-list"},tt={class:"card-list-title"},et={class:"card card-list"},at={class:"card-list-head"},nt=$((()=>v("div",{class:"card-list-title"},"险种信息",-1))),it={class:"card-list-premium"},st={class:"card"},ot=$((()=>v("div",{class:"tenantOrderAttachmentList-title"},"投保人资料",-1))),lt={class:"tenantOrderAttachmentList-img"},rt=["src"],dt=$((()=>v("div",{class:"tenantOrderAttachmentList-title"},"被保人资料",-1))),ct={class:"tenantOrderAttachmentList-img"},ut=["src"],mt=$((()=>v("div",{class:"tenantOrderAttachmentList-title"},"受益人资料",-1))),pt={class:"tenantOrderAttachmentList-img"},ft=["src"],vt=$((()=>v("div",{class:"tenantOrderAttachmentList-title"},"监护人资料",-1))),ht={class:"tenantOrderAttachmentList-img"},It=["src"],yt=$((()=>v("div",{class:"tenantOrderAttachmentList-title"},"银行卡信息",-1))),Lt={class:"tenantOrderAttachmentList-img"},gt=["src"],bt={class:"insurance-notification-information card"},jt={class:"footer-button"};var Ot=t(e({__name:"index",setup(t){const e=a(),C=n();i();const P=s();s([]);const $=s([]),Ot=[{title:"险种名称",dataIndex:"riskName",width:200},{title:"保险金额/份数",dataIndex:"regularPremium",width:180,render:(t,e)=>t.regularPremium/t.copy},{title:"保障期间",dataIndex:"coveragePeriodDesc",width:180},{title:"交费期间",dataIndex:"chargePeriodDesc",width:180},{title:"首期保费",dataIndex:"initialPremium",width:180,render:(t,e)=>t.initialPremium}],kt=o({customerQuestions:[],payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}}}),{query:{orderNo:wt,agentCode:At,tenantId:Vt}}=C,Dt=()=>{D("orderTrajectory",{orderNo:wt,orderId:P.value.id,tenantId:Vt})},Nt=s(!1),qt=s(),xt=s([]),Ct=l((()=>t=>{const{tenantOrderAttachmentList:e}=P.value;return(null==e?void 0:e.length)?e.filter((e=>e.objectType===t)):[]})),Pt=s();return r((()=>{d({orderNo:wt,agentCode:At,tenantId:Vt}).then((({code:t,data:e})=>{if("10000"===t){P.value=e,Pt.value=e,P.value.tenantOrderPayInfoList=e.tenantOrderPayInfoList||[];const t=Object.keys(P.value.productCodeList).map((t=>({productCode:t,mergeRiskReqList:P.value.productCodeList[t]})));H(a={productList:t}).then((({data:t,code:e})=>{var a,n;"10000"===e&&(xt.value=null==(n=null==(a=t.riskMaterialList)?void 0:a[0])?void 0:n.productMaterialList)})),_(a).then((({data:t,code:e})=>{if("10000"===e){const{productDetailResList:e,productFactor:a}=t;qt.value=a;const{payInfo:n,other:i}=q(a);kt.payInfo={...kt.payInfo,...n},kt.policyInfo={...kt.policyInfo,...i}}})),(async t=>{let e=[];const{code:a,data:n}=await N({orderNo:wt,tenantId:Vt});"10000"===a&&(e=n.productQuestionnaireVOList);const{code:i,data:s}=await E(t);if("10000"===i){const{productQuestionnaireVOList:t}=s||{},a=t.filter((t=>t.businessType!==F.VISIT));kt.customerQuestions=a.map((t=>{const{questionnaireDetailResponseVO:a,questionnaireId:n,questionnaireName:i}=t||{},{questions:s,basicInfo:o}=a||{},{objectType:l,questionnaireType:r}=o||{};if(r===S.TEXT){const{content:t,textType:e}=(null==s?void 0:s[0])||{};return{content:t,contentType:G(`${e}`,t),questionnaireId:n,questionnaireName:i}}const d=(e||[]).find((t=>t.questionnaireId===n));return{...a,contentType:"question",...null==d?void 0:d.questionnaireDetailResponseVO,questionnaireId:n,questionnaireName:i}}))}})({productCodeList:Object.keys(P.value.productCodeList)})}var a}))})),(t,a)=>{const n=x,i=R,s=T,o=K,l=c,r=u("loading");return m(),p(l,{"theme-vars":y(e)},{default:f((()=>{var t,e,l,d,c,u,D,N,q,x,C,T;return[v("div",z,[v("div",{class:"card card-head",onClick:Dt},[J,v("div",W,[h(I(null==(t=y(P))?void 0:t.orderStepDesc)+" ",1),L(n,{name:"arrow-right"})])]),v("div",Z,[v("p",tt,I(null==(e=y(P))?void 0:e.productName),1),L(Y,{label:"订单号",content:null==(l=y(P))?void 0:l.orderNo,line:"","is-copy":"","min-width":"other"},null,8,["content"]),(m(!0),g(j,null,b(null==(d=y(P))?void 0:d.applicationNoList,(t=>(m(),p(Y,{key:t,label:"投保单号",content:t,line:"","is-copy":"","min-width":"other"},null,8,["content"])))),128)),L(Y,{label:"创建时间",content:y(O)(null==(c=y(P))?void 0:c.gmtCreated).format("YYYY-MM-DD HH:mm:ss"),line:"","min-width":"other"},null,8,["content"]),L(Y,{label:"投保时间",content:y(O)(null==(u=y(P))?void 0:u.orderDate).format("YYYY-MM-DD HH:mm:ss"),line:"","min-width":"other"},null,8,["content"]),L(Y,{label:"投保保费",content:null==(D=y(P))?void 0:D.orderAmount,line:"","min-width":"other"},null,8,["content"]),L(Y,{label:"承保保费",content:null==(N=y(P))?void 0:N.orderAmount,line:"","min-width":"other"},null,8,["content"])]),v("div",et,[v("div",at,[nt,v("div",it,[h(" 首年保费："),v("span",null,I(null==(q=y(P))?void 0:q.orderAmount),1)])]),(null==(C=null==(x=y(P))?void 0:x.riskList)?void 0:C.length)>0?(m(),p(i,{key:0,columns:Ot,class:"table","data-source":null==(T=y(P))?void 0:T.riskList},null,8,["data-source"])):k("",!0)]),y(kt).policyInfo.schema.length?(m(),p(y(M),{key:0,modelValue:y(P),"onUpdate:modelValue":a[0]||(a[0]=t=>w(P)?P.value=t:null),schema:y(kt).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):k("",!0),v("div",st,[L(o,{modelValue:y($),"onUpdate:modelValue":a[1]||(a[1]=t=>w($)?$.value=t:null)},{default:f((()=>[L(s,{title:"影像信息",name:"1"},{default:f((()=>[ot,v("div",lt,[(m(!0),g(j,null,b(y(Ct)(y(A).HOLDER),((t,e)=>(m(),g("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,rt)])))),128))]),dt,v("div",ct,[(m(!0),g(j,null,b(y(Ct)(y(A).INSURED),((t,e)=>(m(),g("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,ut)])))),128))]),mt,v("div",pt,[(m(!0),g(j,null,b(y(Ct)(y(A).BENEFICIARY),((t,e)=>(m(),g("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,ft)])))),128))]),vt,v("div",ht,[(m(!0),g(j,null,b(y(Ct)(y(A).GUARDIAN),((t,e)=>(m(),g("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,It)])))),128))]),yt,v("div",Lt,[(m(!0),g(j,null,b(y(Ct)(y(A).INIT_SIGN),((t,e)=>(m(),g("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,gt)])))),128))])])),_:1})])),_:1},8,["modelValue"])]),v("div",bt,[L(Q,{title:"投保告知信息",data:y(kt).customerQuestions||[]},null,8,["data"])]),y(qt)?(m(),p(B,{key:1,ref:"personalInfoRef",modelValue:y(Pt),"onUpdate:modelValue":a[2]||(a[2]=t=>w(Pt)?Pt.value=t:null),"product-factor":y(qt),"is-view":""},null,8,["modelValue","product-factor"])):k("",!0),y(kt).payInfo.schema.length?(m(),p(y(U),{key:2,ref:"payInfoRef",modelValue:y(P).tenantOrderPayInfoList,"onUpdate:modelValue":a[3]||(a[3]=t=>y(P).tenantOrderPayInfoList=t),schema:y(kt).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):k("",!0),V((m(),g("div",jt,[L(X,{detail:y(P)},null,8,["detail"])])),[[r,y(Nt)]])])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-23bf39a9"]]);export{Ot as default};
