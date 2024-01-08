import{_ as t,d as e,de as a,i as n,h as i,j as o,r as s,k as l,l as r,br as d,dA as c,o as u,p as m,w as p,a as f,u as v,c as h,v as I,e as y,b,f as L,s as j,F as g,bu as O,q as k,aL as A,dD as N,aj as w,ef as V,T as q,ao as D,aC as x,aD as C,c7 as T,bH as P}from"./index-343d81ae.js";import{C as R}from"./index-5a6f706b.js";import{_}from"./index-b6639928.js";import{c as Q}from"./order-17308944.js";import{m as U}from"./trial-a64d15c8.js";import"./infoCollection-2108cc56.js";import"./core-afde9726.js";import{I as E}from"./infoItem-e5b18d45.js";import{I as S}from"./insuranceNotificationInformation-0efab40b.js";import{a as F,P as H}from"./PolicyInfo-cec802fd.js";import{l as B,b as G}from"./product-bf285eae.js";import{Q as M}from"./questionnaire-42dcb602.js";import{P as X}from"./index-16cfb7f4.js";import{Q as Y}from"./notice-6a2a0f51.js";import{g as $}from"./utils-96f819da.js";import{O as z}from"./OperateBtn-bf78daae.js";import{t as J}from"./format-31cde443.js";import{C as K}from"./index-b1bbddf8.js";import"./cloneDeep-1afe0f63.js";import"./util-5b5cd857.js";import"./trial-625bb7e4.js";const W=t=>(x("data-v-67788503"),t=t(),C(),t),Z={class:"page-order-detail"},tt=W((()=>f("div",{class:"card-item-name"},"订单进度",-1))),et={class:"card-item-icon"},at={class:"card card-list"},nt={class:"card-list-title"},it={class:"card card-list"},ot={class:"card-list-head"},st=W((()=>f("div",{class:"card-list-title"},"险种信息",-1))),lt={class:"card-list-premium"},rt={class:"card"},dt={class:"card"},ct=W((()=>f("div",{class:"tenantOrderAttachmentList-title"},"投保人资料",-1))),ut={class:"tenantOrderAttachmentList-img"},mt=["src"],pt=W((()=>f("div",{class:"tenantOrderAttachmentList-title"},"被保人资料",-1))),ft={class:"tenantOrderAttachmentList-img"},vt=["src"],ht=W((()=>f("div",{class:"tenantOrderAttachmentList-title"},"受益人资料",-1))),It={class:"tenantOrderAttachmentList-img"},yt=["src"],bt=W((()=>f("div",{class:"tenantOrderAttachmentList-title"},"监护人资料",-1))),Lt={class:"tenantOrderAttachmentList-img"},jt=["src"],gt=W((()=>f("div",{class:"tenantOrderAttachmentList-title"},"银行卡信息",-1))),Ot={class:"tenantOrderAttachmentList-img"},kt=["src"],At={class:"card"},Nt={class:"card"},wt={class:"footer-button"};var Vt=t(e({__name:"index",setup(t){const e=a(),x=n();i();const C=o();o([]);const W=o([]),Vt=[{title:"险种名称",dataIndex:"riskName",width:200},{title:"保险金额/份数",dataIndex:"initialAmount",width:180,render:(t,e)=>J(t.initialAmount/(t.copy||1))},{title:"保障期间",dataIndex:"coveragePeriodDesc",width:180},{title:"交费期间",dataIndex:"chargePeriodDesc",width:180},{title:"首期保费",dataIndex:"initialPremium",width:180,render:(t,e)=>J(t.initialPremium)}],qt=s({customerQuestions:[],payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}}}),{query:{orderNo:Dt,agentCode:xt,tenantId:Ct}}=x,Tt=l((()=>{var t,e;return"cancel"!==(null==(t=C.value)?void 0:t.orderStatus)&&(null==(e=C.value)?void 0:e.periodType)===N.long})),Pt=()=>{w("orderTrajectory",{orderNo:Dt,orderId:C.value.id,tenantId:Ct})},Rt=o(!1),_t=o(),Qt=o([]),Ut=l((()=>t=>{const{tenantOrderAttachmentList:e}=C.value;return(null==e?void 0:e.length)?e.filter((e=>e.objectType===t)):[]})),Et=o(),St=(t=!0)=>{V({orderNo:Dt,agentCode:xt,tenantId:Ct}).then((({code:e,data:a})=>{if("10000"===e){if(C.value=a,!t)return;Et.value=a,C.value.tenantOrderPayInfoList=a.tenantOrderPayInfoList||[];const e=Object.keys(C.value.productCodeList).map((t=>({productCode:t,mergeRiskReqList:C.value.productCodeList[t]})));G(n={productList:e}).then((({data:t,code:e})=>{var a,n;"10000"===e&&(Qt.value=null==(n=null==(a=t.riskMaterialList)?void 0:a[0])?void 0:n.productMaterialList)})),U(n).then((({data:t,code:e})=>{if("10000"===e){const{productDetailResList:e,productFactor:a}=t;_t.value=a;const{payInfo:n,other:i}=P(a);qt.payInfo={...qt.payInfo,...n},qt.policyInfo={...qt.policyInfo,...i}}})),(async t=>{let e=[];const{code:a,data:n}=await T({orderNo:Dt,tenantId:Ct});"10000"===a&&(e=n.productQuestionnaireVOList);const{code:i,data:o}=await B(t);if("10000"===i){const{productQuestionnaireVOList:t}=o||{},a=t.filter((t=>t.businessType!==Y.VISIT));qt.customerQuestions=a.map((t=>{const{questionnaireDetailResponseVO:a,questionnaireId:n,questionnaireName:i}=t||{},{questions:o,basicInfo:s}=a||{},{objectType:l,questionnaireType:r}=s||{};if(r===M.TEXT){const{content:t,textType:e}=(null==o?void 0:o[0])||{};return{content:t,contentType:$(`${e}`,t),questionnaireId:n,questionnaireName:i}}const d=(e||[]).find((t=>t.questionnaireId===n));return{...a,contentType:"question",...null==d?void 0:d.questionnaireDetailResponseVO,questionnaireId:n,questionnaireName:i}}))}})({productCodeList:Object.keys(C.value.productCodeList)})}var n}))},Ft=()=>{Q({orderNo:Dt,tenantId:Ct}).then((({code:t,data:e})=>{"10000"===t&&(q("撤单成功"),setTimeout((()=>St(!1)),500))}))};return r((()=>{St()})),(t,a)=>{const n=D,i=_,o=R,s=K,l=d,r=c("loading");return u(),m(l,{"theme-vars":v(e)},{default:p((()=>{var t,e,l,d,c,N,w,V,q,D,x;return[f("div",Z,[v(Tt)?(u(),h("div",{key:0,class:"card card-head",onClick:Pt},[tt,f("div",et,[I(y(null==(t=v(C))?void 0:t.orderStepDesc)+" ",1),b(n,{name:"arrow-right"})])])):L("",!0),f("div",at,[f("p",nt,y(null==(e=v(C))?void 0:e.productName),1),b(E,{label:"订单号",content:null==(l=v(C))?void 0:l.orderNo,line:"","is-copy":"","min-width":"other"},null,8,["content"]),b(E,{label:"投/保单号",line:"","min-width":"other"},{content:p((()=>{var t,e,a,n;return[(u(!0),h(g,null,j((null==(e=null==(t=v(C))?void 0:t.policyNoList)?void 0:e.length)?null==(a=v(C))?void 0:a.policyNoList:null==(n=v(C))?void 0:n.applicationNoList,(t=>(u(),m(E,{key:t,content:t,line:"","is-copy":"","min-width":"other"},null,8,["content"])))),128))]})),_:1}),b(E,{label:"创建时间",content:null==(d=v(C))?void 0:d.orderDate,line:"","min-width":"other"},null,8,["content"]),b(E,{label:"投保时间",content:null==(c=v(C))?void 0:c.applicationCreateDate,line:"","min-width":"other"},null,8,["content"]),b(E,{label:"投保保费",content:v(J)(null==(N=v(C))?void 0:N.orderAmount),line:"","min-width":"other"},null,8,["content"]),b(E,{label:"承保保费",content:v(J)(null==(w=v(C))?void 0:w.orderAmount),line:"","min-width":"other"},null,8,["content"])]),f("div",it,[f("div",ot,[st,f("div",lt,[I(" 首年保费："),f("span",null,y(v(J)(null==(V=v(C))?void 0:V.orderAmount)),1)])]),(null==(D=null==(q=v(C))?void 0:q.riskList)?void 0:D.length)>0?(u(),m(i,{key:0,columns:Vt,class:"table","data-source":null==(x=v(C))?void 0:x.riskList},null,8,["data-source"])):L("",!0)]),f("div",rt,[v(qt).policyInfo.schema.length?(u(),m(v(F),{key:0,modelValue:v(C).extInfo,"onUpdate:modelValue":a[0]||(a[0]=t=>v(C).extInfo=t),schema:v(qt).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):L("",!0)]),f("div",dt,[b(s,{modelValue:v(W),"onUpdate:modelValue":a[1]||(a[1]=t=>k(W)?W.value=t:null)},{default:p((()=>[b(o,{title:"影像信息",name:"1"},{default:p((()=>[ct,f("div",ut,[(u(!0),h(g,null,j(v(Ut)(v(O).HOLDER),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,mt)])))),128))]),pt,f("div",ft,[(u(!0),h(g,null,j(v(Ut)(v(O).INSURED),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,vt)])))),128))]),ht,f("div",It,[(u(!0),h(g,null,j(v(Ut)(v(O).BENEFICIARY),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,yt)])))),128))]),bt,f("div",Lt,[(u(!0),h(g,null,j(v(Ut)(v(O).GUARDIAN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,jt)])))),128))]),gt,f("div",Ot,[(u(!0),h(g,null,j(v(Ut)(v(O).INIT_SIGN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,kt)])))),128))])])),_:1})])),_:1},8,["modelValue"])]),f("div",At,[b(S,{title:"投保告知信息",data:v(qt).customerQuestions||[]},null,8,["data"])]),f("div",Nt,[v(_t)?(u(),m(X,{key:0,ref:"personalInfoRef",modelValue:v(Et),"onUpdate:modelValue":a[2]||(a[2]=t=>k(Et)?Et.value=t:null),"product-factor":v(_t),"is-view":""},null,8,["modelValue","product-factor"])):L("",!0)]),v(qt).payInfo.schema.length?(u(),m(v(H),{key:1,ref:"payInfoRef",modelValue:v(C).tenantOrderPayInfoList,"onUpdate:modelValue":a[3]||(a[3]=t=>v(C).tenantOrderPayInfoList=t),schema:v(qt).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):L("",!0),A((u(),h("div",wt,[b(z,{detail:v(C),onHandleCancel:Ft},null,8,["detail"])])),[[r,v(Rt)]])])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-67788503"]]);export{Vt as default};
