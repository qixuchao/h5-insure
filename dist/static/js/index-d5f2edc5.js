import{_ as t,d as e,df as a,i as n,h as i,j as o,r as s,k as l,l as r,br as d,dB as c,o as u,p as m,w as p,a as v,u as f,c as h,v as I,e as y,b as L,f as b,s as j,F as g,bu as O,q as k,aL as N,dE as w,aj as A,ef as V,T as q,ao as x,aC as C,aD as D,c8 as T,bH as P}from"./index-4a5bebd7.js";import{C as R}from"./index-58646f3f.js";import{_}from"./index-c02e8b35.js";import{c as Q}from"./order-2f8f4d95.js";import{m as E}from"./trial-3bd733a9.js";import"./infoCollection-db27a552.js";import"./core-e3644fa3.js";import{I as U}from"./infoItem-aa67ad88.js";import{I as S}from"./insuranceNotificationInformation-f3ab537d.js";import{a as B,P as F}from"./PolicyInfo-83f06c93.js";import{l as H,b as G}from"./product-435adbc7.js";import{Q as M}from"./questionnaire-42dcb602.js";import{P as X}from"./index-f288d179.js";import{Q as Y}from"./notice-75ed6582.js";import{g as $}from"./utils-213cd1c5.js";import{O as z}from"./OperateBtn-a227bda0.js";import{t as J}from"./format-31cde443.js";import{C as K}from"./index-2d6b2489.js";import"./cloneDeep-1dbcbf5f.js";import"./util-68aa261c.js";import"./trial-4e6bc4c8.js";const W=t=>(C("data-v-67788503"),t=t(),D(),t),Z={class:"page-order-detail"},tt=W((()=>v("div",{class:"card-item-name"},"订单进度",-1))),et={class:"card-item-icon"},at={class:"card card-list"},nt={class:"card-list-title"},it={class:"card card-list"},ot={class:"card-list-head"},st=W((()=>v("div",{class:"card-list-title"},"险种信息",-1))),lt={class:"card-list-premium"},rt={class:"card"},dt={class:"card"},ct=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"投保人资料",-1))),ut={class:"tenantOrderAttachmentList-img"},mt=["src"],pt=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"被保人资料",-1))),vt={class:"tenantOrderAttachmentList-img"},ft=["src"],ht=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"受益人资料",-1))),It={class:"tenantOrderAttachmentList-img"},yt=["src"],Lt=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"监护人资料",-1))),bt={class:"tenantOrderAttachmentList-img"},jt=["src"],gt=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"银行卡信息",-1))),Ot={class:"tenantOrderAttachmentList-img"},kt=["src"],Nt={class:"card"},wt={class:"card"},At={class:"footer-button"};var Vt=t(e({__name:"index",setup(t){const e=a(),C=n();i();const D=o();o([]);const W=o([]),Vt=[{title:"险种名称",dataIndex:"riskName",width:200},{title:"保险金额/份数",dataIndex:"initialAmount",width:180,render:(t,e)=>J(t.initialAmount/(t.copy||1))},{title:"保障期间",dataIndex:"coveragePeriodDesc",width:180},{title:"交费期间",dataIndex:"chargePeriodDesc",width:180},{title:"首期保费",dataIndex:"initialPremium",width:180,render:(t,e)=>J(t.initialPremium)}],qt=s({customerQuestions:[],payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}}}),{query:{orderNo:xt,agentCode:Ct,tenantId:Dt}}=C,Tt=l((()=>{var t,e;return"cancel"!==(null==(t=D.value)?void 0:t.orderStatus)&&(null==(e=D.value)?void 0:e.periodType)===w.long})),Pt=()=>{A("orderTrajectory",{orderNo:xt,orderId:D.value.id,tenantId:Dt})},Rt=o(!1),_t=o(),Qt=o([]),Et=l((()=>t=>{const{tenantOrderAttachmentList:e}=D.value;return(null==e?void 0:e.length)?e.filter((e=>e.objectType===t)):[]})),Ut=o(),St=(t=!0)=>{V({orderNo:xt,agentCode:Ct,tenantId:Dt}).then((({code:e,data:a})=>{if("10000"===e){if(D.value=a,!t)return;Ut.value=a,D.value.tenantOrderPayInfoList=a.tenantOrderPayInfoList||[];const e=Object.keys(D.value.productCodeList).map((t=>({productCode:t,mergeRiskReqList:D.value.productCodeList[t]})));G(n={productList:e}).then((({data:t,code:e})=>{var a,n;"10000"===e&&(Qt.value=null==(n=null==(a=t.riskMaterialList)?void 0:a[0])?void 0:n.productMaterialList)})),E(n).then((({data:t,code:e})=>{if("10000"===e){const{productDetailResList:e,productFactor:a}=t;_t.value=a;const{payInfo:n,other:i}=P(a);qt.payInfo={...qt.payInfo,...n},qt.policyInfo={...qt.policyInfo,...i}}})),(async t=>{let e=[];const{code:a,data:n}=await T({orderNo:xt,tenantId:Dt});"10000"===a&&(e=n.productQuestionnaireVOList);const{code:i,data:o}=await H(t);if("10000"===i){const{productQuestionnaireVOList:t}=o||{},a=t.filter((t=>t.businessType!==Y.VISIT));qt.customerQuestions=a.map((t=>{const{questionnaireDetailResponseVO:a,questionnaireId:n,questionnaireName:i}=t||{},{questions:o,basicInfo:s}=a||{},{objectType:l,questionnaireType:r}=s||{};if(r===M.TEXT){const{content:t,textType:e}=(null==o?void 0:o[0])||{};return{content:t,contentType:$(`${e}`,t),questionnaireId:n,questionnaireName:i}}const d=(e||[]).find((t=>t.questionnaireId===n));return{...a,contentType:"question",...null==d?void 0:d.questionnaireDetailResponseVO,questionnaireId:n,questionnaireName:i}}))}})({productCodeList:Object.keys(D.value.productCodeList)})}var n}))},Bt=()=>{Q({orderNo:xt,tenantId:Dt}).then((({code:t,data:e})=>{"10000"===t&&(q("撤单成功"),setTimeout((()=>St(!1)),500))}))};return r((()=>{St()})),(t,a)=>{const n=x,i=_,o=R,s=K,l=d,r=c("loading");return u(),m(l,{"theme-vars":f(e)},{default:p((()=>{var t,e,l,d,c,w,A,V,q,x,C;return[v("div",Z,[f(Tt)?(u(),h("div",{key:0,class:"card card-head",onClick:Pt},[tt,v("div",et,[I(y(null==(t=f(D))?void 0:t.orderStepDesc)+" ",1),L(n,{name:"arrow-right"})])])):b("",!0),v("div",at,[v("p",nt,y(null==(e=f(D))?void 0:e.productName),1),L(U,{label:"订单号",content:null==(l=f(D))?void 0:l.orderNo,line:"","is-copy":"","min-width":"other"},null,8,["content"]),L(U,{label:"投/保单号",line:"","min-width":"other"},{content:p((()=>{var t,e,a,n;return[(u(!0),h(g,null,j((null==(e=null==(t=f(D))?void 0:t.policyNoList)?void 0:e.length)?null==(a=f(D))?void 0:a.policyNoList:null==(n=f(D))?void 0:n.applicationNoList,(t=>(u(),m(U,{key:t,content:t,line:"","is-copy":"","min-width":"other"},null,8,["content"])))),128))]})),_:1}),L(U,{label:"创建时间",content:null==(d=f(D))?void 0:d.orderDate,line:"","min-width":"other"},null,8,["content"]),L(U,{label:"投保时间",content:null==(c=f(D))?void 0:c.applicationCreateDate,line:"","min-width":"other"},null,8,["content"]),L(U,{label:"投保保费",content:f(J)(null==(w=f(D))?void 0:w.orderAmount),line:"","min-width":"other"},null,8,["content"]),L(U,{label:"承保保费",content:f(J)(null==(A=f(D))?void 0:A.orderAmount),line:"","min-width":"other"},null,8,["content"])]),v("div",it,[v("div",ot,[st,v("div",lt,[I(" 首年保费："),v("span",null,y(f(J)(null==(V=f(D))?void 0:V.orderAmount)),1)])]),(null==(x=null==(q=f(D))?void 0:q.riskList)?void 0:x.length)>0?(u(),m(i,{key:0,columns:Vt,class:"table","data-source":null==(C=f(D))?void 0:C.riskList},null,8,["data-source"])):b("",!0)]),v("div",rt,[f(qt).policyInfo.schema.length?(u(),m(f(B),{key:0,modelValue:f(D).extInfo,"onUpdate:modelValue":a[0]||(a[0]=t=>f(D).extInfo=t),schema:f(qt).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):b("",!0)]),v("div",dt,[L(s,{modelValue:f(W),"onUpdate:modelValue":a[1]||(a[1]=t=>k(W)?W.value=t:null)},{default:p((()=>[L(o,{title:"影像信息",name:"1"},{default:p((()=>[ct,v("div",ut,[(u(!0),h(g,null,j(f(Et)(f(O).HOLDER),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,mt)])))),128))]),pt,v("div",vt,[(u(!0),h(g,null,j(f(Et)(f(O).INSURED),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,ft)])))),128))]),ht,v("div",It,[(u(!0),h(g,null,j(f(Et)(f(O).BENEFICIARY),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,yt)])))),128))]),Lt,v("div",bt,[(u(!0),h(g,null,j(f(Et)(f(O).GUARDIAN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,jt)])))),128))]),gt,v("div",Ot,[(u(!0),h(g,null,j(f(Et)(f(O).INIT_SIGN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,kt)])))),128))])])),_:1})])),_:1},8,["modelValue"])]),v("div",Nt,[L(S,{title:"投保告知信息",data:f(qt).customerQuestions||[]},null,8,["data"])]),v("div",wt,[f(_t)?(u(),m(X,{key:0,ref:"personalInfoRef",modelValue:f(Ut),"onUpdate:modelValue":a[2]||(a[2]=t=>k(Ut)?Ut.value=t:null),"product-factor":f(_t),"is-view":""},null,8,["modelValue","product-factor"])):b("",!0)]),f(qt).payInfo.schema.length?(u(),m(f(F),{key:1,ref:"payInfoRef",modelValue:f(D).tenantOrderPayInfoList,"onUpdate:modelValue":a[3]||(a[3]=t=>f(D).tenantOrderPayInfoList=t),schema:f(qt).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):b("",!0),N((u(),h("div",At,[L(z,{detail:f(D),onHandleCancel:Bt},null,8,["detail"])])),[[r,f(Rt)]])])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-67788503"]]);export{Vt as default};
