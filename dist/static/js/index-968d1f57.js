import{_ as t,d as e,dd as a,i as n,h as i,j as o,r as s,k as l,l as r,br as d,dz as c,o as u,p as m,w as p,a as f,u as v,c as h,v as I,e as y,b as L,f as b,s as g,F as j,bu as O,q as k,aL as N,ai as w,eg as A,T as V,ao as q,aD as x,aE as D,c6 as C,bJ as T}from"./index-460c0153.js";import{C as P}from"./index-fc1147bd.js";import{_ as R}from"./index-b91245a2.js";import{c as _}from"./order-f72be15f.js";import{m as Q}from"./trial-1402e9bc.js";import"./infoCollection-d9cad4fb.js";import"./core-54ea4cd0.js";import{I as E}from"./infoItem-8743bdf1.js";import{I as U}from"./insuranceNotificationInformation-66acab58.js";import{a as S,P as F}from"./PolicyInfo-3c9f34d0.js";import{l as B,b as G}from"./product-39ef6d73.js";import{Q as H}from"./questionnaire-42dcb602.js";import{P as M}from"./index-79c9363d.js";import{Q as z}from"./notice-33e6eedd.js";import{g as J}from"./utils-ca69a306.js";import{O as X}from"./OperateBtn-fd85157d.js";import{t as Y}from"./format-31cde443.js";import{C as $}from"./index-bfdaf451.js";import"./cloneDeep-eef9132f.js";import"./util-1f97618f.js";import"./trial-e12e2e8f.js";const K=t=>(x("data-v-7b6727f5"),t=t(),D(),t),W={class:"page-order-detail"},Z=K((()=>f("div",{class:"card-item-name"},"订单进度",-1))),tt={class:"card-item-icon"},et={class:"card card-list"},at={class:"card-list-title"},nt={class:"card card-list"},it={class:"card-list-head"},ot=K((()=>f("div",{class:"card-list-title"},"险种信息",-1))),st={class:"card-list-premium"},lt={class:"card"},rt={class:"card"},dt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"投保人资料",-1))),ct={class:"tenantOrderAttachmentList-img"},ut=["src"],mt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"被保人资料",-1))),pt={class:"tenantOrderAttachmentList-img"},ft=["src"],vt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"受益人资料",-1))),ht={class:"tenantOrderAttachmentList-img"},It=["src"],yt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"监护人资料",-1))),Lt={class:"tenantOrderAttachmentList-img"},bt=["src"],gt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"银行卡信息",-1))),jt={class:"tenantOrderAttachmentList-img"},Ot=["src"],kt={class:"card"},Nt={class:"card"},wt={class:"footer-button"};var At=t(e({__name:"index",setup(t){const e=a(),x=n();i();const D=o();o([]);const K=o([]),At=[{title:"险种名称",dataIndex:"riskName",width:200},{title:"保险金额/份数",dataIndex:"initialAmount",width:180,render:(t,e)=>Y(t.initialAmount/(t.copy||1))},{title:"保障期间",dataIndex:"coveragePeriodDesc",width:180},{title:"交费期间",dataIndex:"chargePeriodDesc",width:180},{title:"首期保费",dataIndex:"initialPremium",width:180,render:(t,e)=>Y(t.initialPremium)}],Vt=s({customerQuestions:[],payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}}}),{query:{orderNo:qt,agentCode:xt,tenantId:Dt}}=x,Ct=l((()=>{var t;return"cancel"!==(null==(t=D.value)?void 0:t.orderStatus)})),Tt=()=>{w("orderTrajectory",{orderNo:qt,orderId:D.value.id,tenantId:Dt})},Pt=o(!1),Rt=o(),_t=o([]),Qt=l((()=>t=>{const{tenantOrderAttachmentList:e}=D.value;return(null==e?void 0:e.length)?e.filter((e=>e.objectType===t)):[]})),Et=o(),Ut=(t=!0)=>{A({orderNo:qt,agentCode:xt,tenantId:Dt}).then((({code:e,data:a})=>{if("10000"===e){if(D.value=a,!t)return;Et.value=a,D.value.tenantOrderPayInfoList=a.tenantOrderPayInfoList||[];const e=Object.keys(D.value.productCodeList).map((t=>({productCode:t,mergeRiskReqList:D.value.productCodeList[t]})));G(n={productList:e}).then((({data:t,code:e})=>{var a,n;"10000"===e&&(_t.value=null==(n=null==(a=t.riskMaterialList)?void 0:a[0])?void 0:n.productMaterialList)})),Q(n).then((({data:t,code:e})=>{if("10000"===e){const{productDetailResList:e,productFactor:a}=t;Rt.value=a;const{payInfo:n,other:i}=T(a);Vt.payInfo={...Vt.payInfo,...n},Vt.policyInfo={...Vt.policyInfo,...i}}})),(async t=>{let e=[];const{code:a,data:n}=await C({orderNo:qt,tenantId:Dt});"10000"===a&&(e=n.productQuestionnaireVOList);const{code:i,data:o}=await B(t);if("10000"===i){const{productQuestionnaireVOList:t}=o||{},a=t.filter((t=>t.businessType!==z.VISIT));Vt.customerQuestions=a.map((t=>{const{questionnaireDetailResponseVO:a,questionnaireId:n,questionnaireName:i}=t||{},{questions:o,basicInfo:s}=a||{},{objectType:l,questionnaireType:r}=s||{};if(r===H.TEXT){const{content:t,textType:e}=(null==o?void 0:o[0])||{};return{content:t,contentType:J(`${e}`,t),questionnaireId:n,questionnaireName:i}}const d=(e||[]).find((t=>t.questionnaireId===n));return{...a,contentType:"question",...null==d?void 0:d.questionnaireDetailResponseVO,questionnaireId:n,questionnaireName:i}}))}})({productCodeList:Object.keys(D.value.productCodeList)})}var n}))},St=()=>{_({orderNo:qt,tenantId:Dt}).then((({code:t,data:e})=>{"10000"===t&&(V("撤单成功"),setTimeout((()=>Ut(!1)),500))}))};return r((()=>{Ut()})),(t,a)=>{const n=q,i=R,o=P,s=$,l=d,r=c("loading");return u(),m(l,{"theme-vars":v(e)},{default:p((()=>{var t,e,l,d,c,w,A,V,q,x,C;return[f("div",W,[v(Ct)?(u(),h("div",{key:0,class:"card card-head",onClick:Tt},[Z,f("div",tt,[I(y(null==(t=v(D))?void 0:t.orderStepDesc)+" ",1),L(n,{name:"arrow-right"})])])):b("",!0),f("div",et,[f("p",at,y(null==(e=v(D))?void 0:e.productName),1),L(E,{label:"订单号",content:null==(l=v(D))?void 0:l.orderNo,line:"","is-copy":"","min-width":"other"},null,8,["content"]),L(E,{label:"投/保单号",line:"","min-width":"other"},{content:p((()=>{var t,e,a,n;return[(u(!0),h(j,null,g((null==(e=null==(t=v(D))?void 0:t.policyNoList)?void 0:e.length)?null==(a=v(D))?void 0:a.policyNoList:null==(n=v(D))?void 0:n.applicationNoList,(t=>(u(),m(E,{key:t,content:t,line:"","is-copy":"","min-width":"other"},null,8,["content"])))),128))]})),_:1}),L(E,{label:"创建时间",content:null==(d=v(D))?void 0:d.orderDate,line:"","min-width":"other"},null,8,["content"]),L(E,{label:"投保时间",content:null==(c=v(D))?void 0:c.applicationCreateDate,line:"","min-width":"other"},null,8,["content"]),L(E,{label:"投保保费",content:v(Y)(null==(w=v(D))?void 0:w.orderAmount),line:"","min-width":"other"},null,8,["content"]),L(E,{label:"承保保费",content:v(Y)(null==(A=v(D))?void 0:A.orderAmount),line:"","min-width":"other"},null,8,["content"])]),f("div",nt,[f("div",it,[ot,f("div",st,[I(" 首年保费："),f("span",null,y(v(Y)(null==(V=v(D))?void 0:V.orderAmount)),1)])]),(null==(x=null==(q=v(D))?void 0:q.riskList)?void 0:x.length)>0?(u(),m(i,{key:0,columns:At,class:"table","data-source":null==(C=v(D))?void 0:C.riskList},null,8,["data-source"])):b("",!0)]),f("div",lt,[v(Vt).policyInfo.schema.length?(u(),m(v(S),{key:0,modelValue:v(D).extInfo,"onUpdate:modelValue":a[0]||(a[0]=t=>v(D).extInfo=t),schema:v(Vt).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):b("",!0)]),f("div",rt,[L(s,{modelValue:v(K),"onUpdate:modelValue":a[1]||(a[1]=t=>k(K)?K.value=t:null)},{default:p((()=>[L(o,{title:"影像信息",name:"1"},{default:p((()=>[dt,f("div",ct,[(u(!0),h(j,null,g(v(Qt)(v(O).HOLDER),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,ut)])))),128))]),mt,f("div",pt,[(u(!0),h(j,null,g(v(Qt)(v(O).INSURED),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,ft)])))),128))]),vt,f("div",ht,[(u(!0),h(j,null,g(v(Qt)(v(O).BENEFICIARY),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,It)])))),128))]),yt,f("div",Lt,[(u(!0),h(j,null,g(v(Qt)(v(O).GUARDIAN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,bt)])))),128))]),gt,f("div",jt,[(u(!0),h(j,null,g(v(Qt)(v(O).INIT_SIGN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,Ot)])))),128))])])),_:1})])),_:1},8,["modelValue"])]),f("div",kt,[L(U,{title:"投保告知信息",data:v(Vt).customerQuestions||[]},null,8,["data"])]),f("div",Nt,[v(Rt)?(u(),m(M,{key:0,ref:"personalInfoRef",modelValue:v(Et),"onUpdate:modelValue":a[2]||(a[2]=t=>k(Et)?Et.value=t:null),"product-factor":v(Rt),"is-view":""},null,8,["modelValue","product-factor"])):b("",!0)]),v(Vt).payInfo.schema.length?(u(),m(v(F),{key:1,ref:"payInfoRef",modelValue:v(D).tenantOrderPayInfoList,"onUpdate:modelValue":a[3]||(a[3]=t=>v(D).tenantOrderPayInfoList=t),schema:v(Vt).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):b("",!0),N((u(),h("div",wt,[L(X,{detail:v(D),onHandleCancel:St},null,8,["detail"])])),[[r,v(Pt)]])])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-7b6727f5"]]);export{At as default};
