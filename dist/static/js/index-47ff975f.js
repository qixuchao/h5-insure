import{_ as t,d as e,cR as a,i as n,h as i,j as s,r as o,k as l,O as r,ba as d,dc as c,o as u,m,w as p,a as f,u as v,c as h,a8 as I,e as y,b,f as L,q as j,F as g,p as O,bc as k,V as A,a9 as N,dQ as w,T as V,ae as q,aC as C,aD as D,bU as T,bu as x}from"./index-26f63535.js";import{C as R}from"./index-d7d03794.js";import{_}from"./index-48d5dd76.js";import{c as P}from"./order-23ec5443.js";import{m as Q}from"./trial-5d8293a4.js";import"./infoCollection-4876e6a1.js";import"./core-8de9700c.js";import{I as U}from"./infoItem-c8b3dcab.js";import{I as E}from"./insuranceNotificationInformation-11fc9bcf.js";import{a as S,_ as F}from"./PolicyInfo-21816b07.js";import{l as B,b as G}from"./product-f34d3292.js";import{Q as H}from"./questionnaire-62331097.js";import{P as M}from"./index-dcab563c.js";import{Q as X}from"./notice-33e6eedd.js";import{g as Y}from"./utils-ff01eafd.js";import{O as $}from"./OperateBtn-ef400fa2.js";import{t as z}from"./format-cf51a859.js";import{C as J}from"./index-7f6b1509.js";import"./cloneDeep-fe5db653.js";import"./lodash-51729c7f.js";import"./util-a8f2b66a.js";import"./trial-501c6119.js";import"./constants-4b08cf92.js";const K=t=>(C("data-v-0cb221c0"),t=t(),D(),t),W={class:"page-order-detail"},Z=K((()=>f("div",{class:"card-item-name"},"订单进度",-1))),tt={class:"card-item-icon"},et={class:"card card-list"},at={class:"card-list-title"},nt={class:"card card-list"},it={class:"card-list-head"},st=K((()=>f("div",{class:"card-list-title"},"险种信息",-1))),ot={class:"card-list-premium"},lt={class:"card"},rt={class:"card"},dt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"投保人资料",-1))),ct={class:"tenantOrderAttachmentList-img"},ut=["src"],mt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"被保人资料",-1))),pt={class:"tenantOrderAttachmentList-img"},ft=["src"],vt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"受益人资料",-1))),ht={class:"tenantOrderAttachmentList-img"},It=["src"],yt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"监护人资料",-1))),bt={class:"tenantOrderAttachmentList-img"},Lt=["src"],jt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"银行卡信息",-1))),gt={class:"tenantOrderAttachmentList-img"},Ot=["src"],kt={class:"card"},At={class:"card"},Nt={class:"footer-button"};var wt=t(e({__name:"index",setup(t){const e=a(),C=n();i();const D=s();s([]);const K=s([]),wt=[{title:"险种名称",dataIndex:"riskName",width:200},{title:"保险金额/份数",dataIndex:"initialAmount",width:180,render:(t,e)=>z(t.initialAmount/(t.copy||1))},{title:"保障期间",dataIndex:"coveragePeriodDesc",width:180},{title:"交费期间",dataIndex:"chargePeriodDesc",width:180},{title:"首期保费",dataIndex:"initialPremium",width:180,render:(t,e)=>z(t.initialPremium)}],Vt=o({customerQuestions:[],payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}}}),{query:{orderNo:qt,agentCode:Ct,tenantId:Dt}}=C,Tt=l((()=>{var t;return"cancel"!==(null==(t=D.value)?void 0:t.orderStatus)})),xt=()=>{N("orderTrajectory",{orderNo:qt,orderId:D.value.id,tenantId:Dt})},Rt=s(!1),_t=s(),Pt=s([]),Qt=l((()=>t=>{const{tenantOrderAttachmentList:e}=D.value;return(null==e?void 0:e.length)?e.filter((e=>e.objectType===t)):[]})),Ut=s(),Et=(t=!0)=>{w({orderNo:qt,agentCode:Ct,tenantId:Dt}).then((({code:e,data:a})=>{if("10000"===e){if(D.value=a,!t)return;Ut.value=a,D.value.tenantOrderPayInfoList=a.tenantOrderPayInfoList||[];const e=Object.keys(D.value.productCodeList).map((t=>({productCode:t,mergeRiskReqList:D.value.productCodeList[t]})));G(n={productList:e}).then((({data:t,code:e})=>{var a,n;"10000"===e&&(Pt.value=null==(n=null==(a=t.riskMaterialList)?void 0:a[0])?void 0:n.productMaterialList)})),Q(n).then((({data:t,code:e})=>{if("10000"===e){const{productDetailResList:e,productFactor:a}=t;_t.value=a;const{payInfo:n,other:i}=x(a);Vt.payInfo={...Vt.payInfo,...n},Vt.policyInfo={...Vt.policyInfo,...i}}})),(async t=>{let e=[];const{code:a,data:n}=await T({orderNo:qt,tenantId:Dt});"10000"===a&&(e=n.productQuestionnaireVOList);const{code:i,data:s}=await B(t);if("10000"===i){const{productQuestionnaireVOList:t}=s||{},a=t.filter((t=>t.businessType!==X.VISIT));Vt.customerQuestions=a.map((t=>{const{questionnaireDetailResponseVO:a,questionnaireId:n,questionnaireName:i}=t||{},{questions:s,basicInfo:o}=a||{},{objectType:l,questionnaireType:r}=o||{};if(r===H.TEXT){const{content:t,textType:e}=(null==s?void 0:s[0])||{};return{content:t,contentType:Y(`${e}`,t),questionnaireId:n,questionnaireName:i}}const d=(e||[]).find((t=>t.questionnaireId===n));return{...a,contentType:"question",...null==d?void 0:d.questionnaireDetailResponseVO,questionnaireId:n,questionnaireName:i}}))}})({productCodeList:Object.keys(D.value.productCodeList)})}var n}))},St=()=>{P({orderNo:qt,tenantId:Dt}).then((({code:t,data:e})=>{"10000"===t&&(V("撤单成功"),setTimeout((()=>Et(!1)),500))}))};return r((()=>{Et()})),(t,a)=>{const n=q,i=_,s=R,o=J,l=d,r=c("loading");return u(),m(l,{"theme-vars":v(e)},{default:p((()=>{var t,e,l,d,c,N,w,V,q,C,T,x,R,_;return[f("div",W,[v(Tt)?(u(),h("div",{key:0,class:"card card-head",onClick:xt},[Z,f("div",tt,[I(y(null==(t=v(D))?void 0:t.orderStepDesc)+" ",1),b(n,{name:"arrow-right"})])])):L("",!0),f("div",et,[f("p",at,y(null==(e=v(D))?void 0:e.productName),1),b(U,{label:"订单号",content:null==(l=v(D))?void 0:l.orderNo,line:"","is-copy":"","min-width":"other"},null,8,["content"]),(u(!0),h(g,null,j((null==(c=null==(d=v(D))?void 0:d.applicationNoList)?void 0:c.length)?null==(N=v(D))?void 0:N.applicationNoList:[""],(t=>(u(),m(U,{key:t,label:"投保单号",content:t,line:"","is-copy":"","min-width":"other"},null,8,["content"])))),128)),b(U,{label:"创建时间",content:null==(w=v(D))?void 0:w.orderDate,line:"","min-width":"other"},null,8,["content"]),b(U,{label:"投保时间",content:null==(V=v(D))?void 0:V.applicationCreateDate,line:"","min-width":"other"},null,8,["content"]),b(U,{label:"投保保费",content:v(z)(null==(q=v(D))?void 0:q.orderAmount),line:"","min-width":"other"},null,8,["content"]),b(U,{label:"承保保费",content:v(z)(null==(C=v(D))?void 0:C.orderAmount),line:"","min-width":"other"},null,8,["content"])]),f("div",nt,[f("div",it,[st,f("div",ot,[I(" 首年保费："),f("span",null,y(v(z)(null==(T=v(D))?void 0:T.orderAmount)),1)])]),(null==(R=null==(x=v(D))?void 0:x.riskList)?void 0:R.length)>0?(u(),m(i,{key:0,columns:wt,class:"table","data-source":null==(_=v(D))?void 0:_.riskList},null,8,["data-source"])):L("",!0)]),f("div",lt,[v(Vt).policyInfo.schema.length?(u(),m(v(S),{key:0,modelValue:v(D),"onUpdate:modelValue":a[0]||(a[0]=t=>O(D)?D.value=t:null),schema:v(Vt).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):L("",!0)]),f("div",rt,[b(o,{modelValue:v(K),"onUpdate:modelValue":a[1]||(a[1]=t=>O(K)?K.value=t:null)},{default:p((()=>[b(s,{title:"影像信息",name:"1"},{default:p((()=>[dt,f("div",ct,[(u(!0),h(g,null,j(v(Qt)(v(k).HOLDER),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,ut)])))),128))]),mt,f("div",pt,[(u(!0),h(g,null,j(v(Qt)(v(k).INSURED),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,ft)])))),128))]),vt,f("div",ht,[(u(!0),h(g,null,j(v(Qt)(v(k).BENEFICIARY),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,It)])))),128))]),yt,f("div",bt,[(u(!0),h(g,null,j(v(Qt)(v(k).GUARDIAN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,Lt)])))),128))]),jt,f("div",gt,[(u(!0),h(g,null,j(v(Qt)(v(k).INIT_SIGN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,Ot)])))),128))])])),_:1})])),_:1},8,["modelValue"])]),f("div",kt,[b(E,{title:"投保告知信息",data:v(Vt).customerQuestions||[]},null,8,["data"])]),f("div",At,[v(_t)?(u(),m(M,{key:0,ref:"personalInfoRef",modelValue:v(Ut),"onUpdate:modelValue":a[2]||(a[2]=t=>O(Ut)?Ut.value=t:null),"product-factor":v(_t),"is-view":""},null,8,["modelValue","product-factor"])):L("",!0)]),v(Vt).payInfo.schema.length?(u(),m(v(F),{key:1,ref:"payInfoRef",modelValue:v(D).tenantOrderPayInfoList,"onUpdate:modelValue":a[3]||(a[3]=t=>v(D).tenantOrderPayInfoList=t),schema:v(Vt).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):L("",!0),A((u(),h("div",Nt,[b($,{detail:v(D),onHandleCancel:St},null,8,["detail"])])),[[r,v(Rt)]])])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-0cb221c0"]]);export{wt as default};
