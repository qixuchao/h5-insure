import{_ as t,d as e,d7 as a,i as n,h as i,j as s,r as o,k as l,O as r,bh as d,dv as c,o as u,m,w as p,a as v,u as f,c as h,a8 as I,e as y,b as L,f as j,q as b,F as g,p as O,bj as k,V as N,a9 as w,e9 as A,T as V,af as q,aF as C,aG as D,bY as T,bz as x}from"./index-e22e3047.js";import{C as _}from"./index-f426b929.js";import{_ as R}from"./index-09cf90c8.js";import{c as P}from"./order-891236ac.js";import{m as Q}from"./trial-66aa41fc.js";import"./infoCollection-9b20c48b.js";import"./core-f3a62f14.js";import{I as U}from"./infoItem-6613d524.js";import{I as E}from"./insuranceNotificationInformation-c4c809c2.js";import{a as S,_ as F}from"./PolicyInfo-846c5d29.js";import{l as G,b as B}from"./product-cc7dfdc0.js";import{Q as H}from"./questionnaire-42dcb602.js";import{P as M}from"./index-e1c2c728.js";import{Q as Y}from"./notice-33e6eedd.js";import{g as z}from"./utils-c49b7881.js";import{O as X}from"./OperateBtn-e3be811c.js";import{t as $}from"./format-31cde443.js";import{C as J}from"./index-594d16c2.js";import"./cloneDeep-d491efc7.js";import"./lodash-7f2d3b7b.js";import"./util-80333037.js";import"./trial-f53a7f34.js";const K=t=>(C("data-v-0f027116"),t=t(),D(),t),W={class:"page-order-detail"},Z=K((()=>v("div",{class:"card-item-name"},"订单进度",-1))),tt={class:"card-item-icon"},et={class:"card card-list"},at={class:"card-list-title"},nt={class:"card card-list"},it={class:"card-list-head"},st=K((()=>v("div",{class:"card-list-title"},"险种信息",-1))),ot={class:"card-list-premium"},lt={class:"card"},rt={class:"card"},dt=K((()=>v("div",{class:"tenantOrderAttachmentList-title"},"投保人资料",-1))),ct={class:"tenantOrderAttachmentList-img"},ut=["src"],mt=K((()=>v("div",{class:"tenantOrderAttachmentList-title"},"被保人资料",-1))),pt={class:"tenantOrderAttachmentList-img"},vt=["src"],ft=K((()=>v("div",{class:"tenantOrderAttachmentList-title"},"受益人资料",-1))),ht={class:"tenantOrderAttachmentList-img"},It=["src"],yt=K((()=>v("div",{class:"tenantOrderAttachmentList-title"},"监护人资料",-1))),Lt={class:"tenantOrderAttachmentList-img"},jt=["src"],bt=K((()=>v("div",{class:"tenantOrderAttachmentList-title"},"银行卡信息",-1))),gt={class:"tenantOrderAttachmentList-img"},Ot=["src"],kt={class:"card"},Nt={class:"card"},wt={class:"footer-button"};var At=t(e({__name:"index",setup(t){const e=a(),C=n();i();const D=s();s([]);const K=s([]),At=[{title:"险种名称",dataIndex:"riskName",width:200},{title:"保险金额/份数",dataIndex:"initialAmount",width:180,render:(t,e)=>$(t.initialAmount/(t.copy||1))},{title:"保障期间",dataIndex:"coveragePeriodDesc",width:180},{title:"交费期间",dataIndex:"chargePeriodDesc",width:180},{title:"首期保费",dataIndex:"initialPremium",width:180,render:(t,e)=>$(t.initialPremium)}],Vt=o({customerQuestions:[],payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}}}),{query:{orderNo:qt,agentCode:Ct,tenantId:Dt}}=C,Tt=l((()=>{var t;return"cancel"!==(null==(t=D.value)?void 0:t.orderStatus)})),xt=()=>{w("orderTrajectory",{orderNo:qt,orderId:D.value.id,tenantId:Dt})},_t=s(!1),Rt=s(),Pt=s([]),Qt=l((()=>t=>{const{tenantOrderAttachmentList:e}=D.value;return(null==e?void 0:e.length)?e.filter((e=>e.objectType===t)):[]})),Ut=s(),Et=(t=!0)=>{A({orderNo:qt,agentCode:Ct,tenantId:Dt}).then((({code:e,data:a})=>{if("10000"===e){if(D.value=a,!t)return;Ut.value=a,D.value.tenantOrderPayInfoList=a.tenantOrderPayInfoList||[];const e=Object.keys(D.value.productCodeList).map((t=>({productCode:t,mergeRiskReqList:D.value.productCodeList[t]})));B(n={productList:e}).then((({data:t,code:e})=>{var a,n;"10000"===e&&(Pt.value=null==(n=null==(a=t.riskMaterialList)?void 0:a[0])?void 0:n.productMaterialList)})),Q(n).then((({data:t,code:e})=>{if("10000"===e){const{productDetailResList:e,productFactor:a}=t;Rt.value=a;const{payInfo:n,other:i}=x(a);Vt.payInfo={...Vt.payInfo,...n},Vt.policyInfo={...Vt.policyInfo,...i}}})),(async t=>{let e=[];const{code:a,data:n}=await T({orderNo:qt,tenantId:Dt});"10000"===a&&(e=n.productQuestionnaireVOList);const{code:i,data:s}=await G(t);if("10000"===i){const{productQuestionnaireVOList:t}=s||{},a=t.filter((t=>t.businessType!==Y.VISIT));Vt.customerQuestions=a.map((t=>{const{questionnaireDetailResponseVO:a,questionnaireId:n,questionnaireName:i}=t||{},{questions:s,basicInfo:o}=a||{},{objectType:l,questionnaireType:r}=o||{};if(r===H.TEXT){const{content:t,textType:e}=(null==s?void 0:s[0])||{};return{content:t,contentType:z(`${e}`,t),questionnaireId:n,questionnaireName:i}}const d=(e||[]).find((t=>t.questionnaireId===n));return{...a,contentType:"question",...null==d?void 0:d.questionnaireDetailResponseVO,questionnaireId:n,questionnaireName:i}}))}})({productCodeList:Object.keys(D.value.productCodeList)})}var n}))},St=()=>{P({orderNo:qt,tenantId:Dt}).then((({code:t,data:e})=>{"10000"===t&&(V("撤单成功"),setTimeout((()=>Et(!1)),500))}))};return r((()=>{Et()})),(t,a)=>{const n=q,i=R,s=_,o=J,l=d,r=c("loading");return u(),m(l,{"theme-vars":f(e)},{default:p((()=>{var t,e,l,d,c,w,A,V,q,C,T;return[v("div",W,[f(Tt)?(u(),h("div",{key:0,class:"card card-head",onClick:xt},[Z,v("div",tt,[I(y(null==(t=f(D))?void 0:t.orderStepDesc)+" ",1),L(n,{name:"arrow-right"})])])):j("",!0),v("div",et,[v("p",at,y(null==(e=f(D))?void 0:e.productName),1),L(U,{label:"订单号",content:null==(l=f(D))?void 0:l.orderNo,line:"","is-copy":"","min-width":"other"},null,8,["content"]),L(U,{label:"投/保单号",line:"","min-width":"other"},{content:p((()=>{var t,e,a,n;return[(u(!0),h(g,null,b((null==(e=null==(t=f(D))?void 0:t.policyNoList)?void 0:e.length)?null==(a=f(D))?void 0:a.policyNoList:null==(n=f(D))?void 0:n.applicationNoList,(t=>(u(),m(U,{key:t,content:t,line:"","is-copy":"","min-width":"other"},null,8,["content"])))),128))]})),_:1}),L(U,{label:"创建时间",content:null==(d=f(D))?void 0:d.orderDate,line:"","min-width":"other"},null,8,["content"]),L(U,{label:"投保时间",content:null==(c=f(D))?void 0:c.applicationCreateDate,line:"","min-width":"other"},null,8,["content"]),L(U,{label:"投保保费",content:f($)(null==(w=f(D))?void 0:w.orderAmount),line:"","min-width":"other"},null,8,["content"]),L(U,{label:"承保保费",content:f($)(null==(A=f(D))?void 0:A.orderAmount),line:"","min-width":"other"},null,8,["content"])]),v("div",nt,[v("div",it,[st,v("div",ot,[I(" 首年保费："),v("span",null,y(f($)(null==(V=f(D))?void 0:V.orderAmount)),1)])]),(null==(C=null==(q=f(D))?void 0:q.riskList)?void 0:C.length)>0?(u(),m(i,{key:0,columns:At,class:"table","data-source":null==(T=f(D))?void 0:T.riskList},null,8,["data-source"])):j("",!0)]),v("div",lt,[f(Vt).policyInfo.schema.length?(u(),m(f(S),{key:0,modelValue:f(D),"onUpdate:modelValue":a[0]||(a[0]=t=>O(D)?D.value=t:null),schema:f(Vt).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):j("",!0)]),v("div",rt,[L(o,{modelValue:f(K),"onUpdate:modelValue":a[1]||(a[1]=t=>O(K)?K.value=t:null)},{default:p((()=>[L(s,{title:"影像信息",name:"1"},{default:p((()=>[dt,v("div",ct,[(u(!0),h(g,null,b(f(Qt)(f(k).HOLDER),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,ut)])))),128))]),mt,v("div",pt,[(u(!0),h(g,null,b(f(Qt)(f(k).INSURED),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,vt)])))),128))]),ft,v("div",ht,[(u(!0),h(g,null,b(f(Qt)(f(k).BENEFICIARY),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,It)])))),128))]),yt,v("div",Lt,[(u(!0),h(g,null,b(f(Qt)(f(k).GUARDIAN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,jt)])))),128))]),bt,v("div",gt,[(u(!0),h(g,null,b(f(Qt)(f(k).INIT_SIGN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,Ot)])))),128))])])),_:1})])),_:1},8,["modelValue"])]),v("div",kt,[L(E,{title:"投保告知信息",data:f(Vt).customerQuestions||[]},null,8,["data"])]),v("div",Nt,[f(Rt)?(u(),m(M,{key:0,ref:"personalInfoRef",modelValue:f(Ut),"onUpdate:modelValue":a[2]||(a[2]=t=>O(Ut)?Ut.value=t:null),"product-factor":f(Rt),"is-view":""},null,8,["modelValue","product-factor"])):j("",!0)]),f(Vt).payInfo.schema.length?(u(),m(f(F),{key:1,ref:"payInfoRef",modelValue:f(D).tenantOrderPayInfoList,"onUpdate:modelValue":a[3]||(a[3]=t=>f(D).tenantOrderPayInfoList=t),schema:f(Vt).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):j("",!0),N((u(),h("div",wt,[L(X,{detail:f(D),onHandleCancel:St},null,8,["detail"])])),[[r,f(_t)]])])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-0f027116"]]);export{At as default};
