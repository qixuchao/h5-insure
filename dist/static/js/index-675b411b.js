import{_ as t,d as e,dh as a,i as n,h as i,j as o,r as s,k as l,l as r,bC as d,dD as c,o as u,p as m,w as p,a as v,u as f,c as h,v as I,e as y,b,f as L,s as g,F as j,ai as O,q as k,bg as N,dG as w,a_ as A,eg as T,T as V,b2 as q,bo as x,bp as C,c8 as D,bO as _}from"./index-ac3e839b.js";import{C as P}from"./index-33208b54.js";import{_ as R}from"./index-559dc445.js";import{c as Q}from"./order-7c63271c.js";import{m as U}from"./trial-d5e23067.js";import"./infoCollection-f55bf0f1.js";import"./core-8f481508.js";import{I as E}from"./infoItem-9bff9e2f.js";import{I as S}from"./insuranceNotificationInformation-2a964b01.js";import{a as F,P as G}from"./PolicyInfo-f09aea65.js";import{l as B,b as H}from"./product-54ab95fa.js";import{Q as M}from"./questionnaire-42dcb602.js";import{P as X}from"./index-e79ad6f9.js";import{Q as Y}from"./notice-e4a9aa26.js";import{g as $}from"./utils-9a56cd9b.js";import{O as z}from"./OperateBtn-9d2d6983.js";import{t as J}from"./format-31cde443.js";import{C as K}from"./index-b10250a0.js";import"./cloneDeep-b387639e.js";import"./util-294768b1.js";import"./trial-1a573e4a.js";const W=t=>(x("data-v-ac88a586"),t=t(),C(),t),Z={class:"page-order-detail"},tt=W((()=>v("div",{class:"card-item-name"},"订单进度",-1))),et={class:"card-item-icon"},at={class:"card card-list"},nt={class:"card-list-title"},it={class:"card card-list"},ot={class:"card-list-head"},st=W((()=>v("div",{class:"card-list-title"},"险种信息",-1))),lt={class:"card-list-premium"},rt={class:"card"},dt={class:"card"},ct=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"投保人资料",-1))),ut={class:"tenantOrderAttachmentList-img"},mt=["src"],pt=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"被保险人资料",-1))),vt={class:"tenantOrderAttachmentList-img"},ft=["src"],ht=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"受益人资料",-1))),It={class:"tenantOrderAttachmentList-img"},yt=["src"],bt=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"监护人资料",-1))),Lt={class:"tenantOrderAttachmentList-img"},gt=["src"],jt=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"银行卡信息",-1))),Ot={class:"tenantOrderAttachmentList-img"},kt=["src"],Nt={class:"card"},wt={class:"card"},At={class:"footer-button"};var Tt=t(e({__name:"index",setup(t){const e=a(),x=n();i();const C=o();o([]);const W=o([]),Tt=[{title:"险种名称",dataIndex:"riskName",width:200},{title:"保险金额/份数",dataIndex:"initialAmount",width:180,render:(t,e)=>J(t.initialAmount/(t.copy||1))},{title:"保险期间",dataIndex:"coveragePeriodDesc",width:180},{title:"交费期间",dataIndex:"chargePeriodDesc",width:180},{title:"首年保费",dataIndex:"initialPremium",width:180,render:(t,e)=>J(t.initialPremium)}],Vt=s({customerQuestions:[],payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}}}),{query:{orderNo:qt,agentCode:xt,tenantId:Ct}}=x,Dt=l((()=>{var t,e;return"cancel"!==(null==(t=C.value)?void 0:t.orderStatus)&&(null==(e=C.value)?void 0:e.periodType)===w.long})),_t=()=>{A("orderTrajectory",{orderNo:qt,orderId:C.value.id,tenantId:Ct})},Pt=o(!1),Rt=o(),Qt=o([]),Ut=l((()=>t=>{const{tenantOrderAttachmentList:e}=C.value;return(null==e?void 0:e.length)?e.filter((e=>e.objectType===t)):[]})),Et=o(),St=(t=!0)=>{T({orderNo:qt,agentCode:xt,tenantId:Ct}).then((({code:e,data:a})=>{if("10000"===e){if(C.value=a,!t)return;Et.value=a,C.value.tenantOrderPayInfoList=a.tenantOrderPayInfoList||[];const e=Object.keys(C.value.productCodeList).map((t=>({productCode:t,mergeRiskReqList:C.value.productCodeList[t]})));H(n={productList:e}).then((({data:t,code:e})=>{var a,n;"10000"===e&&(Qt.value=null==(n=null==(a=t.riskMaterialList)?void 0:a[0])?void 0:n.productMaterialList)})),U(n).then((({data:t,code:e})=>{if("10000"===e){const{productDetailResList:e,productFactor:a}=t;Rt.value=a;const{payInfo:n,other:i}=_(a);Vt.payInfo={...Vt.payInfo,...n},Vt.policyInfo={...Vt.policyInfo,...i}}})),(async t=>{let e=[];const{code:a,data:n}=await D({orderNo:qt,tenantId:Ct});"10000"===a&&(e=n.productQuestionnaireVOList);const{code:i,data:o}=await B(t);if("10000"===i){const{productQuestionnaireVOList:t}=o||{},a=t.filter((t=>t.businessType!==Y.VISIT));Vt.customerQuestions=a.map((t=>{const{questionnaireDetailResponseVO:a,questionnaireId:n,questionnaireName:i,objectType:o}=t||{},{questions:s,basicInfo:l}=a||{},{objectType:r,questionnaireType:d}=l||{};if(d===M.TEXT){const{content:t,textType:e}=(null==s?void 0:s[0])||{};return{content:t,contentType:$(`${e}`,t),questionnaireId:n,questionnaireName:i}}const c=(e||[]).find((t=>t.questionnaireId===n&&t.objectType===o));return{...a,contentType:"question",...null==c?void 0:c.questionnaireDetailResponseVO,questionnaireId:n,questionnaireName:i}}))}})({productCodeList:Object.keys(C.value.productCodeList)})}var n}))},Ft=()=>{Q({orderNo:qt,tenantId:Ct,cancelFlag:1}).then((({code:t,data:e})=>{"10000"===t&&(V("撤单成功"),setTimeout((()=>St(!1)),500))}))};return r((()=>{St()})),(t,a)=>{const n=q,i=R,o=P,s=K,l=d,r=c("loading");return u(),m(l,{"theme-vars":f(e)},{default:p((()=>{var t,e,l,d,c,w,A,T,V,q,x;return[v("div",Z,[f(Dt)?(u(),h("div",{key:0,class:"card card-head",onClick:_t},[tt,v("div",et,[I(y(null==(t=f(C))?void 0:t.orderStepDesc)+" ",1),b(n,{name:"arrow-right"})])])):L("",!0),v("div",at,[v("p",nt,y(null==(e=f(C))?void 0:e.productName),1),b(E,{label:"订单号",content:null==(l=f(C))?void 0:l.orderNo,line:"","is-copy":"","min-width":"other"},null,8,["content"]),b(E,{label:"投/保单号",line:"","min-width":"other"},{content:p((()=>{var t,e,a,n;return[(u(!0),h(j,null,g((null==(e=null==(t=f(C))?void 0:t.policyNoList)?void 0:e.length)?null==(a=f(C))?void 0:a.policyNoList:null==(n=f(C))?void 0:n.applicationNoList,(t=>(u(),m(E,{key:t,content:t,line:"","is-copy":"","min-width":"other"},null,8,["content"])))),128))]})),_:1}),b(E,{label:"创建时间",content:null==(d=f(C))?void 0:d.orderDate,line:"","min-width":"other"},null,8,["content"]),b(E,{label:"投保时间",content:null==(c=f(C))?void 0:c.applicationCreateDate,line:"","min-width":"other"},null,8,["content"]),b(E,{label:"投保保费",content:f(J)(null==(w=f(C))?void 0:w.orderAmount),line:"","min-width":"other"},null,8,["content"]),b(E,{label:"承保保费",content:f(J)(null==(A=f(C))?void 0:A.orderAmount),line:"","min-width":"other"},null,8,["content"])]),v("div",it,[v("div",ot,[st,v("div",lt,[I(" 首年保费："),v("span",null,y(f(J)(null==(T=f(C))?void 0:T.orderAmount)),1)])]),(null==(q=null==(V=f(C))?void 0:V.riskList)?void 0:q.length)>0?(u(),m(i,{key:0,columns:Tt,class:"table","data-source":null==(x=f(C))?void 0:x.riskList},null,8,["data-source"])):L("",!0)]),v("div",rt,[f(Vt).policyInfo.schema.length?(u(),m(f(F),{key:0,modelValue:f(C).extInfo,"onUpdate:modelValue":a[0]||(a[0]=t=>f(C).extInfo=t),schema:f(Vt).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):L("",!0)]),v("div",dt,[b(s,{modelValue:f(W),"onUpdate:modelValue":a[1]||(a[1]=t=>k(W)?W.value=t:null)},{default:p((()=>[b(o,{title:"影像信息",name:"1"},{default:p((()=>[ct,v("div",ut,[(u(!0),h(j,null,g(f(Ut)(f(O).HOLDER),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,mt)])))),128))]),pt,v("div",vt,[(u(!0),h(j,null,g(f(Ut)(f(O).INSURED),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,ft)])))),128))]),ht,v("div",It,[(u(!0),h(j,null,g(f(Ut)(f(O).BENEFICIARY),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,yt)])))),128))]),bt,v("div",Lt,[(u(!0),h(j,null,g(f(Ut)(f(O).GUARDIAN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,gt)])))),128))]),jt,v("div",Ot,[(u(!0),h(j,null,g(f(Ut)(f(O).INIT_SIGN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,kt)])))),128))])])),_:1})])),_:1},8,["modelValue"])]),v("div",Nt,[b(S,{title:"投保告知信息",data:f(Vt).customerQuestions||[]},null,8,["data"])]),v("div",wt,[f(Rt)?(u(),m(X,{key:0,ref:"personalInfoRef",modelValue:f(Et),"onUpdate:modelValue":a[2]||(a[2]=t=>k(Et)?Et.value=t:null),"product-factor":f(Rt),"is-view":""},null,8,["modelValue","product-factor"])):L("",!0)]),f(Vt).payInfo.schema.length?(u(),m(f(G),{key:1,ref:"payInfoRef",modelValue:f(C).tenantOrderPayInfoList,"onUpdate:modelValue":a[3]||(a[3]=t=>f(C).tenantOrderPayInfoList=t),schema:f(Vt).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):L("",!0),N((u(),h("div",At,[b(z,{detail:f(C),onHandleCancel:Ft},null,8,["detail"])])),[[r,f(Pt)]])])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-ac88a586"]]);export{Tt as default};
