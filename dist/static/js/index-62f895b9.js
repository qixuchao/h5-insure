import{_ as t,d as e,cT as a,i as n,h as i,j as s,r as o,k as l,O as r,bc as d,de as c,o as u,m,w as p,a as f,u as v,c as h,a8 as I,e as y,b,f as L,q as j,F as g,p as O,be as k,V as w,a9 as N,dV as A,T as V,ae as q,aE as T,aF as C,bR as D,bw as x}from"./index-e55a5aab.js";import{C as _}from"./index-31971d02.js";import{_ as R}from"./index-2f05ceb3.js";import{c as P}from"./order-f63f518f.js";import{m as Q}from"./trial-7beeb937.js";import"./infoCollection-ede4c173.js";import"./core-d721bab5.js";import{I as E}from"./infoItem-2e5eaf8e.js";import{I as U}from"./insuranceNotificationInformation-d49bd379.js";import{_ as S}from"./PayInfo-b220ec8f.js";import{_ as F}from"./PolicyInfo-204c2b2d.js";import{l as B,b as G}from"./product-96d5c534.js";import{Q as H}from"./questionnaire-42dcb602.js";import{P as M}from"./index-c6234cf3.js";import{Q as X}from"./notice-33e6eedd.js";import{g as Y}from"./utils-9eb3d524.js";import{O as $}from"./OperateBtn-fd07267c.js";import{t as z}from"./format-31cde443.js";import{C as J}from"./index-f3282a47.js";import"./cloneDeep-74240b7b.js";import"./lodash-b87c32cc.js";import"./util-8ca97aec.js";import"./trial-5aa151d8.js";import"./constants-4b08cf92.js";const K=t=>(T("data-v-0f027116"),t=t(),C(),t),W={class:"page-order-detail"},Z=K((()=>f("div",{class:"card-item-name"},"订单进度",-1))),tt={class:"card-item-icon"},et={class:"card card-list"},at={class:"card-list-title"},nt={class:"card card-list"},it={class:"card-list-head"},st=K((()=>f("div",{class:"card-list-title"},"险种信息",-1))),ot={class:"card-list-premium"},lt={class:"card"},rt={class:"card"},dt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"投保人资料",-1))),ct={class:"tenantOrderAttachmentList-img"},ut=["src"],mt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"被保人资料",-1))),pt={class:"tenantOrderAttachmentList-img"},ft=["src"],vt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"受益人资料",-1))),ht={class:"tenantOrderAttachmentList-img"},It=["src"],yt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"监护人资料",-1))),bt={class:"tenantOrderAttachmentList-img"},Lt=["src"],jt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"银行卡信息",-1))),gt={class:"tenantOrderAttachmentList-img"},Ot=["src"],kt={class:"card"},wt={class:"card"},Nt={class:"footer-button"};var At=t(e({__name:"index",setup(t){const e=a(),T=n();i();const C=s();s([]);const K=s([]),At=[{title:"险种名称",dataIndex:"riskName",width:200},{title:"保险金额/份数",dataIndex:"initialAmount",width:180,render:(t,e)=>z(t.initialAmount/(t.copy||1))},{title:"保障期间",dataIndex:"coveragePeriodDesc",width:180},{title:"交费期间",dataIndex:"chargePeriodDesc",width:180},{title:"首期保费",dataIndex:"initialPremium",width:180,render:(t,e)=>z(t.initialPremium)}],Vt=o({customerQuestions:[],payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}}}),{query:{orderNo:qt,agentCode:Tt,tenantId:Ct}}=T,Dt=l((()=>{var t;return"cancel"!==(null==(t=C.value)?void 0:t.orderStatus)})),xt=()=>{N("orderTrajectory",{orderNo:qt,orderId:C.value.id,tenantId:Ct})},_t=s(!1),Rt=s(),Pt=s([]),Qt=l((()=>t=>{const{tenantOrderAttachmentList:e}=C.value;return(null==e?void 0:e.length)?e.filter((e=>e.objectType===t)):[]})),Et=s(),Ut=(t=!0)=>{A({orderNo:qt,agentCode:Tt,tenantId:Ct}).then((({code:e,data:a})=>{if("10000"===e){if(C.value=a,!t)return;Et.value=a,C.value.tenantOrderPayInfoList=a.tenantOrderPayInfoList||[];const e=Object.keys(C.value.productCodeList).map((t=>({productCode:t,mergeRiskReqList:C.value.productCodeList[t]})));G(n={productList:e}).then((({data:t,code:e})=>{var a,n;"10000"===e&&(Pt.value=null==(n=null==(a=t.riskMaterialList)?void 0:a[0])?void 0:n.productMaterialList)})),Q(n).then((({data:t,code:e})=>{if("10000"===e){const{productDetailResList:e,productFactor:a}=t;Rt.value=a;const{payInfo:n,other:i}=x(a);Vt.payInfo={...Vt.payInfo,...n},Vt.policyInfo={...Vt.policyInfo,...i}}})),(async t=>{let e=[];const{code:a,data:n}=await D({orderNo:qt,tenantId:Ct});"10000"===a&&(e=n.productQuestionnaireVOList);const{code:i,data:s}=await B(t);if("10000"===i){const{productQuestionnaireVOList:t}=s||{},a=t.filter((t=>t.businessType!==X.VISIT));Vt.customerQuestions=a.map((t=>{const{questionnaireDetailResponseVO:a,questionnaireId:n,questionnaireName:i}=t||{},{questions:s,basicInfo:o}=a||{},{objectType:l,questionnaireType:r}=o||{};if(r===H.TEXT){const{content:t,textType:e}=(null==s?void 0:s[0])||{};return{content:t,contentType:Y(`${e}`,t),questionnaireId:n,questionnaireName:i}}const d=(e||[]).find((t=>t.questionnaireId===n));return{...a,contentType:"question",...null==d?void 0:d.questionnaireDetailResponseVO,questionnaireId:n,questionnaireName:i}}))}})({productCodeList:Object.keys(C.value.productCodeList)})}var n}))},St=()=>{P({orderNo:qt,tenantId:Ct}).then((({code:t,data:e})=>{"10000"===t&&(V("撤单成功"),setTimeout((()=>Ut(!1)),500))}))};return r((()=>{Ut()})),(t,a)=>{const n=q,i=R,s=_,o=J,l=d,r=c("loading");return u(),m(l,{"theme-vars":v(e)},{default:p((()=>{var t,e,l,d,c,N,A,V,q,T,D;return[f("div",W,[v(Dt)?(u(),h("div",{key:0,class:"card card-head",onClick:xt},[Z,f("div",tt,[I(y(null==(t=v(C))?void 0:t.orderStepDesc)+" ",1),b(n,{name:"arrow-right"})])])):L("",!0),f("div",et,[f("p",at,y(null==(e=v(C))?void 0:e.productName),1),b(E,{label:"订单号",content:null==(l=v(C))?void 0:l.orderNo,line:"","is-copy":"","min-width":"other"},null,8,["content"]),b(E,{label:"投/保单号",line:"","min-width":"other"},{content:p((()=>{var t,e,a,n;return[(u(!0),h(g,null,j((null==(e=null==(t=v(C))?void 0:t.policyNoList)?void 0:e.length)?null==(a=v(C))?void 0:a.policyNoList:null==(n=v(C))?void 0:n.applicationNoList,(t=>(u(),m(E,{key:t,content:t,line:"","is-copy":"","min-width":"other"},null,8,["content"])))),128))]})),_:1}),b(E,{label:"创建时间",content:null==(d=v(C))?void 0:d.orderDate,line:"","min-width":"other"},null,8,["content"]),b(E,{label:"投保时间",content:null==(c=v(C))?void 0:c.applicationCreateDate,line:"","min-width":"other"},null,8,["content"]),b(E,{label:"投保保费",content:v(z)(null==(N=v(C))?void 0:N.orderAmount),line:"","min-width":"other"},null,8,["content"]),b(E,{label:"承保保费",content:v(z)(null==(A=v(C))?void 0:A.orderAmount),line:"","min-width":"other"},null,8,["content"])]),f("div",nt,[f("div",it,[st,f("div",ot,[I(" 首年保费："),f("span",null,y(v(z)(null==(V=v(C))?void 0:V.orderAmount)),1)])]),(null==(T=null==(q=v(C))?void 0:q.riskList)?void 0:T.length)>0?(u(),m(i,{key:0,columns:At,class:"table","data-source":null==(D=v(C))?void 0:D.riskList},null,8,["data-source"])):L("",!0)]),f("div",lt,[v(Vt).policyInfo.schema.length?(u(),m(v(F),{key:0,modelValue:v(C),"onUpdate:modelValue":a[0]||(a[0]=t=>O(C)?C.value=t:null),schema:v(Vt).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):L("",!0)]),f("div",rt,[b(o,{modelValue:v(K),"onUpdate:modelValue":a[1]||(a[1]=t=>O(K)?K.value=t:null)},{default:p((()=>[b(s,{title:"影像信息",name:"1"},{default:p((()=>[dt,f("div",ct,[(u(!0),h(g,null,j(v(Qt)(v(k).HOLDER),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,ut)])))),128))]),mt,f("div",pt,[(u(!0),h(g,null,j(v(Qt)(v(k).INSURED),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,ft)])))),128))]),vt,f("div",ht,[(u(!0),h(g,null,j(v(Qt)(v(k).BENEFICIARY),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,It)])))),128))]),yt,f("div",bt,[(u(!0),h(g,null,j(v(Qt)(v(k).GUARDIAN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,Lt)])))),128))]),jt,f("div",gt,[(u(!0),h(g,null,j(v(Qt)(v(k).INIT_SIGN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,Ot)])))),128))])])),_:1})])),_:1},8,["modelValue"])]),f("div",kt,[b(U,{title:"投保告知信息",data:v(Vt).customerQuestions||[]},null,8,["data"])]),f("div",wt,[v(Rt)?(u(),m(M,{key:0,ref:"personalInfoRef",modelValue:v(Et),"onUpdate:modelValue":a[2]||(a[2]=t=>O(Et)?Et.value=t:null),"product-factor":v(Rt),"is-view":""},null,8,["modelValue","product-factor"])):L("",!0)]),v(Vt).payInfo.schema.length?(u(),m(v(S),{key:1,ref:"payInfoRef",modelValue:v(C).tenantOrderPayInfoList,"onUpdate:modelValue":a[3]||(a[3]=t=>v(C).tenantOrderPayInfoList=t),schema:v(Vt).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):L("",!0),w((u(),h("div",Nt,[b($,{detail:v(C),onHandleCancel:St},null,8,["detail"])])),[[r,v(_t)]])])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-0f027116"]]);export{At as default};
