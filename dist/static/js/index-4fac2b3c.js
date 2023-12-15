import{_ as t,d as e,dd as a,i as n,h as i,j as o,r as s,k as l,l as r,br as d,dz as c,o as u,p as m,w as p,a as f,u as v,c as h,v as I,e as y,b as L,f as b,s as j,F as g,bu as O,q as k,aL as N,aj as w,eg as A,T as V,ao as q,aC as x,aD as C,c6 as D,bH as T}from"./index-1b84c3ba.js";import{C as P}from"./index-c0635f20.js";import{_ as R}from"./index-17d0d49f.js";import{c as _}from"./order-a4deab75.js";import{m as Q}from"./trial-dda9fd23.js";import"./infoCollection-1d900505.js";import"./core-68abe7ce.js";import{I as U}from"./infoItem-6ef1f824.js";import{I as E}from"./insuranceNotificationInformation-3510e48a.js";import{a as S,P as F}from"./PolicyInfo-090dacdd.js";import{l as H,b as B}from"./product-923410d2.js";import{Q as G}from"./questionnaire-42dcb602.js";import{P as M}from"./index-4f8d1091.js";import{Q as z}from"./notice-33e6eedd.js";import{g as X}from"./utils-4fd91b4a.js";import{O as Y}from"./OperateBtn-fb8dd5e5.js";import{t as $}from"./format-31cde443.js";import{C as J}from"./index-bce5f24c.js";import"./cloneDeep-4edb0a8b.js";import"./util-afab887f.js";import"./trial-53c2f27c.js";const K=t=>(x("data-v-7b6727f5"),t=t(),C(),t),W={class:"page-order-detail"},Z=K((()=>f("div",{class:"card-item-name"},"订单进度",-1))),tt={class:"card-item-icon"},et={class:"card card-list"},at={class:"card-list-title"},nt={class:"card card-list"},it={class:"card-list-head"},ot=K((()=>f("div",{class:"card-list-title"},"险种信息",-1))),st={class:"card-list-premium"},lt={class:"card"},rt={class:"card"},dt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"投保人资料",-1))),ct={class:"tenantOrderAttachmentList-img"},ut=["src"],mt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"被保人资料",-1))),pt={class:"tenantOrderAttachmentList-img"},ft=["src"],vt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"受益人资料",-1))),ht={class:"tenantOrderAttachmentList-img"},It=["src"],yt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"监护人资料",-1))),Lt={class:"tenantOrderAttachmentList-img"},bt=["src"],jt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"银行卡信息",-1))),gt={class:"tenantOrderAttachmentList-img"},Ot=["src"],kt={class:"card"},Nt={class:"card"},wt={class:"footer-button"};var At=t(e({__name:"index",setup(t){const e=a(),x=n();i();const C=o();o([]);const K=o([]),At=[{title:"险种名称",dataIndex:"riskName",width:200},{title:"保险金额/份数",dataIndex:"initialAmount",width:180,render:(t,e)=>$(t.initialAmount/(t.copy||1))},{title:"保障期间",dataIndex:"coveragePeriodDesc",width:180},{title:"交费期间",dataIndex:"chargePeriodDesc",width:180},{title:"首期保费",dataIndex:"initialPremium",width:180,render:(t,e)=>$(t.initialPremium)}],Vt=s({customerQuestions:[],payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}}}),{query:{orderNo:qt,agentCode:xt,tenantId:Ct}}=x,Dt=l((()=>{var t;return"cancel"!==(null==(t=C.value)?void 0:t.orderStatus)})),Tt=()=>{w("orderTrajectory",{orderNo:qt,orderId:C.value.id,tenantId:Ct})},Pt=o(!1),Rt=o(),_t=o([]),Qt=l((()=>t=>{const{tenantOrderAttachmentList:e}=C.value;return(null==e?void 0:e.length)?e.filter((e=>e.objectType===t)):[]})),Ut=o(),Et=(t=!0)=>{A({orderNo:qt,agentCode:xt,tenantId:Ct}).then((({code:e,data:a})=>{if("10000"===e){if(C.value=a,!t)return;Ut.value=a,C.value.tenantOrderPayInfoList=a.tenantOrderPayInfoList||[];const e=Object.keys(C.value.productCodeList).map((t=>({productCode:t,mergeRiskReqList:C.value.productCodeList[t]})));B(n={productList:e}).then((({data:t,code:e})=>{var a,n;"10000"===e&&(_t.value=null==(n=null==(a=t.riskMaterialList)?void 0:a[0])?void 0:n.productMaterialList)})),Q(n).then((({data:t,code:e})=>{if("10000"===e){const{productDetailResList:e,productFactor:a}=t;Rt.value=a;const{payInfo:n,other:i}=T(a);Vt.payInfo={...Vt.payInfo,...n},Vt.policyInfo={...Vt.policyInfo,...i}}})),(async t=>{let e=[];const{code:a,data:n}=await D({orderNo:qt,tenantId:Ct});"10000"===a&&(e=n.productQuestionnaireVOList);const{code:i,data:o}=await H(t);if("10000"===i){const{productQuestionnaireVOList:t}=o||{},a=t.filter((t=>t.businessType!==z.VISIT));Vt.customerQuestions=a.map((t=>{const{questionnaireDetailResponseVO:a,questionnaireId:n,questionnaireName:i}=t||{},{questions:o,basicInfo:s}=a||{},{objectType:l,questionnaireType:r}=s||{};if(r===G.TEXT){const{content:t,textType:e}=(null==o?void 0:o[0])||{};return{content:t,contentType:X(`${e}`,t),questionnaireId:n,questionnaireName:i}}const d=(e||[]).find((t=>t.questionnaireId===n));return{...a,contentType:"question",...null==d?void 0:d.questionnaireDetailResponseVO,questionnaireId:n,questionnaireName:i}}))}})({productCodeList:Object.keys(C.value.productCodeList)})}var n}))},St=()=>{_({orderNo:qt,tenantId:Ct}).then((({code:t,data:e})=>{"10000"===t&&(V("撤单成功"),setTimeout((()=>Et(!1)),500))}))};return r((()=>{Et()})),(t,a)=>{const n=q,i=R,o=P,s=J,l=d,r=c("loading");return u(),m(l,{"theme-vars":v(e)},{default:p((()=>{var t,e,l,d,c,w,A,V,q,x,D;return[f("div",W,[v(Dt)?(u(),h("div",{key:0,class:"card card-head",onClick:Tt},[Z,f("div",tt,[I(y(null==(t=v(C))?void 0:t.orderStepDesc)+" ",1),L(n,{name:"arrow-right"})])])):b("",!0),f("div",et,[f("p",at,y(null==(e=v(C))?void 0:e.productName),1),L(U,{label:"订单号",content:null==(l=v(C))?void 0:l.orderNo,line:"","is-copy":"","min-width":"other"},null,8,["content"]),L(U,{label:"投/保单号",line:"","min-width":"other"},{content:p((()=>{var t,e,a,n;return[(u(!0),h(g,null,j((null==(e=null==(t=v(C))?void 0:t.policyNoList)?void 0:e.length)?null==(a=v(C))?void 0:a.policyNoList:null==(n=v(C))?void 0:n.applicationNoList,(t=>(u(),m(U,{key:t,content:t,line:"","is-copy":"","min-width":"other"},null,8,["content"])))),128))]})),_:1}),L(U,{label:"创建时间",content:null==(d=v(C))?void 0:d.orderDate,line:"","min-width":"other"},null,8,["content"]),L(U,{label:"投保时间",content:null==(c=v(C))?void 0:c.applicationCreateDate,line:"","min-width":"other"},null,8,["content"]),L(U,{label:"投保保费",content:v($)(null==(w=v(C))?void 0:w.orderAmount),line:"","min-width":"other"},null,8,["content"]),L(U,{label:"承保保费",content:v($)(null==(A=v(C))?void 0:A.orderAmount),line:"","min-width":"other"},null,8,["content"])]),f("div",nt,[f("div",it,[ot,f("div",st,[I(" 首年保费："),f("span",null,y(v($)(null==(V=v(C))?void 0:V.orderAmount)),1)])]),(null==(x=null==(q=v(C))?void 0:q.riskList)?void 0:x.length)>0?(u(),m(i,{key:0,columns:At,class:"table","data-source":null==(D=v(C))?void 0:D.riskList},null,8,["data-source"])):b("",!0)]),f("div",lt,[v(Vt).policyInfo.schema.length?(u(),m(v(S),{key:0,modelValue:v(C).extInfo,"onUpdate:modelValue":a[0]||(a[0]=t=>v(C).extInfo=t),schema:v(Vt).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):b("",!0)]),f("div",rt,[L(s,{modelValue:v(K),"onUpdate:modelValue":a[1]||(a[1]=t=>k(K)?K.value=t:null)},{default:p((()=>[L(o,{title:"影像信息",name:"1"},{default:p((()=>[dt,f("div",ct,[(u(!0),h(g,null,j(v(Qt)(v(O).HOLDER),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,ut)])))),128))]),mt,f("div",pt,[(u(!0),h(g,null,j(v(Qt)(v(O).INSURED),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,ft)])))),128))]),vt,f("div",ht,[(u(!0),h(g,null,j(v(Qt)(v(O).BENEFICIARY),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,It)])))),128))]),yt,f("div",Lt,[(u(!0),h(g,null,j(v(Qt)(v(O).GUARDIAN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,bt)])))),128))]),jt,f("div",gt,[(u(!0),h(g,null,j(v(Qt)(v(O).INIT_SIGN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,Ot)])))),128))])])),_:1})])),_:1},8,["modelValue"])]),f("div",kt,[L(E,{title:"投保告知信息",data:v(Vt).customerQuestions||[]},null,8,["data"])]),f("div",Nt,[v(Rt)?(u(),m(M,{key:0,ref:"personalInfoRef",modelValue:v(Ut),"onUpdate:modelValue":a[2]||(a[2]=t=>k(Ut)?Ut.value=t:null),"product-factor":v(Rt),"is-view":""},null,8,["modelValue","product-factor"])):b("",!0)]),v(Vt).payInfo.schema.length?(u(),m(v(F),{key:1,ref:"payInfoRef",modelValue:v(C).tenantOrderPayInfoList,"onUpdate:modelValue":a[3]||(a[3]=t=>v(C).tenantOrderPayInfoList=t),schema:v(Vt).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):b("",!0),N((u(),h("div",wt,[L(Y,{detail:v(C),onHandleCancel:St},null,8,["detail"])])),[[r,v(Pt)]])])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-7b6727f5"]]);export{At as default};
