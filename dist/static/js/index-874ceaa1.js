import{_ as t,d as e,dd as a,i as n,h as i,j as o,r as s,k as l,l as r,bD as d,dA as c,o as u,p as m,w as p,a as v,u as f,c as h,v as I,e as y,b as L,f as b,s as g,F as j,ai as O,q as k,a_ as A,dD as N,aC as w,ed as V,T as q,aH as D,aS as T,aT as x,c9 as C,bP as P}from"./index-082adda0.js";import{C as _}from"./index-d050e0a8.js";import{_ as R}from"./index-e8fc9359.js";import{c as Q}from"./order-639f7d5c.js";import{m as S}from"./trial-2f17b80e.js";import"./infoCollection-5aa74162.js";import"./core-50869137.js";import{I as U}from"./infoItem-fd46450f.js";import{I as E}from"./insuranceNotificationInformation-afd27518.js";import{a as F,P as H}from"./PolicyInfo-f78f3b7f.js";import{l as B,b as G}from"./product-dbc99aba.js";import{Q as M}from"./questionnaire-42dcb602.js";import{P as X}from"./index-00980206.js";import{Q as Y}from"./notice-9fb54937.js";import{g as $}from"./utils-d3d8b0de.js";import{O as z}from"./OperateBtn-a851b368.js";import{t as J}from"./format-31cde443.js";import{C as K}from"./index-b5051235.js";import"./cloneDeep-175c02a7.js";import"./util-de13d281.js";import"./trial-64184ed4.js";const W=t=>(T("data-v-52343ebe"),t=t(),x(),t),Z={class:"page-order-detail"},tt=W((()=>v("div",{class:"card-item-name"},"订单进度",-1))),et={class:"card-item-icon"},at={class:"card card-list"},nt={class:"card-list-title"},it={class:"card card-list"},ot={class:"card-list-head"},st=W((()=>v("div",{class:"card-list-title"},"险种信息",-1))),lt={class:"card-list-premium"},rt={class:"card"},dt={class:"card"},ct=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"投保人资料",-1))),ut={class:"tenantOrderAttachmentList-img"},mt=["src"],pt=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"被保人资料",-1))),vt={class:"tenantOrderAttachmentList-img"},ft=["src"],ht=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"受益人资料",-1))),It={class:"tenantOrderAttachmentList-img"},yt=["src"],Lt=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"监护人资料",-1))),bt={class:"tenantOrderAttachmentList-img"},gt=["src"],jt=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"银行卡信息",-1))),Ot={class:"tenantOrderAttachmentList-img"},kt=["src"],At={class:"card"},Nt={class:"card"},wt={class:"footer-button"};var Vt=t(e({__name:"index",setup(t){const e=a(),T=n();i();const x=o();o([]);const W=o([]),Vt=[{title:"险种名称",dataIndex:"riskName",width:200},{title:"保险金额/份数",dataIndex:"initialAmount",width:180,render:(t,e)=>J(t.initialAmount/(t.copy||1))},{title:"保险期间",dataIndex:"coveragePeriodDesc",width:180},{title:"交费期间",dataIndex:"chargePeriodDesc",width:180},{title:"首年保费",dataIndex:"initialPremium",width:180,render:(t,e)=>J(t.initialPremium)}],qt=s({customerQuestions:[],payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}}}),{query:{orderNo:Dt,agentCode:Tt,tenantId:xt}}=T,Ct=l((()=>{var t,e;return"cancel"!==(null==(t=x.value)?void 0:t.orderStatus)&&(null==(e=x.value)?void 0:e.periodType)===N.long})),Pt=()=>{w("orderTrajectory",{orderNo:Dt,orderId:x.value.id,tenantId:xt})},_t=o(!1),Rt=o(),Qt=o([]),St=l((()=>t=>{const{tenantOrderAttachmentList:e}=x.value;return(null==e?void 0:e.length)?e.filter((e=>e.objectType===t)):[]})),Ut=o(),Et=(t=!0)=>{V({orderNo:Dt,agentCode:Tt,tenantId:xt}).then((({code:e,data:a})=>{if("10000"===e){if(x.value=a,!t)return;Ut.value=a,x.value.tenantOrderPayInfoList=a.tenantOrderPayInfoList||[];const e=Object.keys(x.value.productCodeList).map((t=>({productCode:t,mergeRiskReqList:x.value.productCodeList[t]})));G(n={productList:e}).then((({data:t,code:e})=>{var a,n;"10000"===e&&(Qt.value=null==(n=null==(a=t.riskMaterialList)?void 0:a[0])?void 0:n.productMaterialList)})),S(n).then((({data:t,code:e})=>{if("10000"===e){const{productDetailResList:e,productFactor:a}=t;Rt.value=a;const{payInfo:n,other:i}=P(a);qt.payInfo={...qt.payInfo,...n},qt.policyInfo={...qt.policyInfo,...i}}})),(async t=>{let e=[];const{code:a,data:n}=await C({orderNo:Dt,tenantId:xt});"10000"===a&&(e=n.productQuestionnaireVOList);const{code:i,data:o}=await B(t);if("10000"===i){const{productQuestionnaireVOList:t}=o||{},a=t.filter((t=>t.businessType!==Y.VISIT));qt.customerQuestions=a.map((t=>{const{questionnaireDetailResponseVO:a,questionnaireId:n,questionnaireName:i}=t||{},{questions:o,basicInfo:s}=a||{},{objectType:l,questionnaireType:r}=s||{};if(r===M.TEXT){const{content:t,textType:e}=(null==o?void 0:o[0])||{};return{content:t,contentType:$(`${e}`,t),questionnaireId:n,questionnaireName:i}}const d=(e||[]).find((t=>t.questionnaireId===n));return{...a,contentType:"question",...null==d?void 0:d.questionnaireDetailResponseVO,questionnaireId:n,questionnaireName:i}}))}})({productCodeList:Object.keys(x.value.productCodeList)})}var n}))},Ft=()=>{Q({orderNo:Dt,tenantId:xt}).then((({code:t,data:e})=>{"10000"===t&&(q("撤单成功"),setTimeout((()=>Et(!1)),500))}))};return r((()=>{Et()})),(t,a)=>{const n=D,i=R,o=_,s=K,l=d,r=c("loading");return u(),m(l,{"theme-vars":f(e)},{default:p((()=>{var t,e,l,d,c,N,w,V,q,D,T;return[v("div",Z,[f(Ct)?(u(),h("div",{key:0,class:"card card-head",onClick:Pt},[tt,v("div",et,[I(y(null==(t=f(x))?void 0:t.orderStepDesc)+" ",1),L(n,{name:"arrow-right"})])])):b("",!0),v("div",at,[v("p",nt,y(null==(e=f(x))?void 0:e.productName),1),L(U,{label:"订单号",content:null==(l=f(x))?void 0:l.orderNo,line:"","is-copy":"","min-width":"other"},null,8,["content"]),L(U,{label:"投/保单号",line:"","min-width":"other"},{content:p((()=>{var t,e,a,n;return[(u(!0),h(j,null,g((null==(e=null==(t=f(x))?void 0:t.policyNoList)?void 0:e.length)?null==(a=f(x))?void 0:a.policyNoList:null==(n=f(x))?void 0:n.applicationNoList,(t=>(u(),m(U,{key:t,content:t,line:"","is-copy":"","min-width":"other"},null,8,["content"])))),128))]})),_:1}),L(U,{label:"创建时间",content:null==(d=f(x))?void 0:d.orderDate,line:"","min-width":"other"},null,8,["content"]),L(U,{label:"投保时间",content:null==(c=f(x))?void 0:c.applicationCreateDate,line:"","min-width":"other"},null,8,["content"]),L(U,{label:"投保保费",content:f(J)(null==(N=f(x))?void 0:N.orderAmount),line:"","min-width":"other"},null,8,["content"]),L(U,{label:"承保保费",content:f(J)(null==(w=f(x))?void 0:w.orderAmount),line:"","min-width":"other"},null,8,["content"])]),v("div",it,[v("div",ot,[st,v("div",lt,[I(" 首年保费："),v("span",null,y(f(J)(null==(V=f(x))?void 0:V.orderAmount)),1)])]),(null==(D=null==(q=f(x))?void 0:q.riskList)?void 0:D.length)>0?(u(),m(i,{key:0,columns:Vt,class:"table","data-source":null==(T=f(x))?void 0:T.riskList},null,8,["data-source"])):b("",!0)]),v("div",rt,[f(qt).policyInfo.schema.length?(u(),m(f(F),{key:0,modelValue:f(x).extInfo,"onUpdate:modelValue":a[0]||(a[0]=t=>f(x).extInfo=t),schema:f(qt).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):b("",!0)]),v("div",dt,[L(s,{modelValue:f(W),"onUpdate:modelValue":a[1]||(a[1]=t=>k(W)?W.value=t:null)},{default:p((()=>[L(o,{title:"影像信息",name:"1"},{default:p((()=>[ct,v("div",ut,[(u(!0),h(j,null,g(f(St)(f(O).HOLDER),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,mt)])))),128))]),pt,v("div",vt,[(u(!0),h(j,null,g(f(St)(f(O).INSURED),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,ft)])))),128))]),ht,v("div",It,[(u(!0),h(j,null,g(f(St)(f(O).BENEFICIARY),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,yt)])))),128))]),Lt,v("div",bt,[(u(!0),h(j,null,g(f(St)(f(O).GUARDIAN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,gt)])))),128))]),jt,v("div",Ot,[(u(!0),h(j,null,g(f(St)(f(O).INIT_SIGN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,kt)])))),128))])])),_:1})])),_:1},8,["modelValue"])]),v("div",At,[L(E,{title:"投保告知信息",data:f(qt).customerQuestions||[]},null,8,["data"])]),v("div",Nt,[f(Rt)?(u(),m(X,{key:0,ref:"personalInfoRef",modelValue:f(Ut),"onUpdate:modelValue":a[2]||(a[2]=t=>k(Ut)?Ut.value=t:null),"product-factor":f(Rt),"is-view":""},null,8,["modelValue","product-factor"])):b("",!0)]),f(qt).payInfo.schema.length?(u(),m(f(H),{key:1,ref:"payInfoRef",modelValue:f(x).tenantOrderPayInfoList,"onUpdate:modelValue":a[3]||(a[3]=t=>f(x).tenantOrderPayInfoList=t),schema:f(qt).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):b("",!0),A((u(),h("div",wt,[L(z,{detail:f(x),onHandleCancel:Ft},null,8,["detail"])])),[[r,f(_t)]])])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-52343ebe"]]);export{Vt as default};
