import{_ as t,d as e,dd as a,i as n,h as i,j as o,r as s,k as l,l as r,bC as d,dA as c,o as u,p as m,w as p,a as v,u as f,c as h,v as I,e as y,b,f as L,s as g,F as j,ah as O,q as k,aU as A,dD as N,aB as w,ed as V,T as q,aG as x,b0 as C,b1 as D,c8 as T,bO as P}from"./index-69aebc6c.js";import{C as R}from"./index-f88bd3db.js";import{_}from"./index-7b0f24e1.js";import{c as Q}from"./order-cf001106.js";import{m as U}from"./trial-a82aa561.js";import"./infoCollection-eb19957e.js";import"./core-9d9652b9.js";import{I as E}from"./infoItem-1a200f0e.js";import{I as S}from"./insuranceNotificationInformation-b821b8eb.js";import{a as B,P as F}from"./PolicyInfo-151cf92f.js";import{l as G,b as H}from"./product-cc3594e4.js";import{Q as M}from"./questionnaire-42dcb602.js";import{P as X}from"./index-52fde184.js";import{Q as Y}from"./notice-8a4594e3.js";import{g as $}from"./utils-a78b6ba6.js";import{O as z}from"./OperateBtn-9446215a.js";import{t as J}from"./format-31cde443.js";import{C as K}from"./index-d32c5529.js";import"./cloneDeep-9113cd57.js";import"./util-5eefc231.js";import"./trial-16eeb70c.js";const W=t=>(C("data-v-52343ebe"),t=t(),D(),t),Z={class:"page-order-detail"},tt=W((()=>v("div",{class:"card-item-name"},"订单进度",-1))),et={class:"card-item-icon"},at={class:"card card-list"},nt={class:"card-list-title"},it={class:"card card-list"},ot={class:"card-list-head"},st=W((()=>v("div",{class:"card-list-title"},"险种信息",-1))),lt={class:"card-list-premium"},rt={class:"card"},dt={class:"card"},ct=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"投保人资料",-1))),ut={class:"tenantOrderAttachmentList-img"},mt=["src"],pt=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"被保人资料",-1))),vt={class:"tenantOrderAttachmentList-img"},ft=["src"],ht=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"受益人资料",-1))),It={class:"tenantOrderAttachmentList-img"},yt=["src"],bt=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"监护人资料",-1))),Lt={class:"tenantOrderAttachmentList-img"},gt=["src"],jt=W((()=>v("div",{class:"tenantOrderAttachmentList-title"},"银行卡信息",-1))),Ot={class:"tenantOrderAttachmentList-img"},kt=["src"],At={class:"card"},Nt={class:"card"},wt={class:"footer-button"};var Vt=t(e({__name:"index",setup(t){const e=a(),C=n();i();const D=o();o([]);const W=o([]),Vt=[{title:"险种名称",dataIndex:"riskName",width:200},{title:"保险金额/份数",dataIndex:"initialAmount",width:180,render:(t,e)=>J(t.initialAmount/(t.copy||1))},{title:"保险期间",dataIndex:"coveragePeriodDesc",width:180},{title:"交费期间",dataIndex:"chargePeriodDesc",width:180},{title:"首年保费",dataIndex:"initialPremium",width:180,render:(t,e)=>J(t.initialPremium)}],qt=s({customerQuestions:[],payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}}}),{query:{orderNo:xt,agentCode:Ct,tenantId:Dt}}=C,Tt=l((()=>{var t,e;return"cancel"!==(null==(t=D.value)?void 0:t.orderStatus)&&(null==(e=D.value)?void 0:e.periodType)===N.long})),Pt=()=>{w("orderTrajectory",{orderNo:xt,orderId:D.value.id,tenantId:Dt})},Rt=o(!1),_t=o(),Qt=o([]),Ut=l((()=>t=>{const{tenantOrderAttachmentList:e}=D.value;return(null==e?void 0:e.length)?e.filter((e=>e.objectType===t)):[]})),Et=o(),St=(t=!0)=>{V({orderNo:xt,agentCode:Ct,tenantId:Dt}).then((({code:e,data:a})=>{if("10000"===e){if(D.value=a,!t)return;Et.value=a,D.value.tenantOrderPayInfoList=a.tenantOrderPayInfoList||[];const e=Object.keys(D.value.productCodeList).map((t=>({productCode:t,mergeRiskReqList:D.value.productCodeList[t]})));H(n={productList:e}).then((({data:t,code:e})=>{var a,n;"10000"===e&&(Qt.value=null==(n=null==(a=t.riskMaterialList)?void 0:a[0])?void 0:n.productMaterialList)})),U(n).then((({data:t,code:e})=>{if("10000"===e){const{productDetailResList:e,productFactor:a}=t;_t.value=a;const{payInfo:n,other:i}=P(a);qt.payInfo={...qt.payInfo,...n},qt.policyInfo={...qt.policyInfo,...i}}})),(async t=>{let e=[];const{code:a,data:n}=await T({orderNo:xt,tenantId:Dt});"10000"===a&&(e=n.productQuestionnaireVOList);const{code:i,data:o}=await G(t);if("10000"===i){const{productQuestionnaireVOList:t}=o||{},a=t.filter((t=>t.businessType!==Y.VISIT));qt.customerQuestions=a.map((t=>{const{questionnaireDetailResponseVO:a,questionnaireId:n,questionnaireName:i}=t||{},{questions:o,basicInfo:s}=a||{},{objectType:l,questionnaireType:r}=s||{};if(r===M.TEXT){const{content:t,textType:e}=(null==o?void 0:o[0])||{};return{content:t,contentType:$(`${e}`,t),questionnaireId:n,questionnaireName:i}}const d=(e||[]).find((t=>t.questionnaireId===n));return{...a,contentType:"question",...null==d?void 0:d.questionnaireDetailResponseVO,questionnaireId:n,questionnaireName:i}}))}})({productCodeList:Object.keys(D.value.productCodeList)})}var n}))},Bt=()=>{Q({orderNo:xt,tenantId:Dt}).then((({code:t,data:e})=>{"10000"===t&&(q("撤单成功"),setTimeout((()=>St(!1)),500))}))};return r((()=>{St()})),(t,a)=>{const n=x,i=_,o=R,s=K,l=d,r=c("loading");return u(),m(l,{"theme-vars":f(e)},{default:p((()=>{var t,e,l,d,c,N,w,V,q,x,C;return[v("div",Z,[f(Tt)?(u(),h("div",{key:0,class:"card card-head",onClick:Pt},[tt,v("div",et,[I(y(null==(t=f(D))?void 0:t.orderStepDesc)+" ",1),b(n,{name:"arrow-right"})])])):L("",!0),v("div",at,[v("p",nt,y(null==(e=f(D))?void 0:e.productName),1),b(E,{label:"订单号",content:null==(l=f(D))?void 0:l.orderNo,line:"","is-copy":"","min-width":"other"},null,8,["content"]),b(E,{label:"投/保单号",line:"","min-width":"other"},{content:p((()=>{var t,e,a,n;return[(u(!0),h(j,null,g((null==(e=null==(t=f(D))?void 0:t.policyNoList)?void 0:e.length)?null==(a=f(D))?void 0:a.policyNoList:null==(n=f(D))?void 0:n.applicationNoList,(t=>(u(),m(E,{key:t,content:t,line:"","is-copy":"","min-width":"other"},null,8,["content"])))),128))]})),_:1}),b(E,{label:"创建时间",content:null==(d=f(D))?void 0:d.orderDate,line:"","min-width":"other"},null,8,["content"]),b(E,{label:"投保时间",content:null==(c=f(D))?void 0:c.applicationCreateDate,line:"","min-width":"other"},null,8,["content"]),b(E,{label:"投保保费",content:f(J)(null==(N=f(D))?void 0:N.orderAmount),line:"","min-width":"other"},null,8,["content"]),b(E,{label:"承保保费",content:f(J)(null==(w=f(D))?void 0:w.orderAmount),line:"","min-width":"other"},null,8,["content"])]),v("div",it,[v("div",ot,[st,v("div",lt,[I(" 首年保费："),v("span",null,y(f(J)(null==(V=f(D))?void 0:V.orderAmount)),1)])]),(null==(x=null==(q=f(D))?void 0:q.riskList)?void 0:x.length)>0?(u(),m(i,{key:0,columns:Vt,class:"table","data-source":null==(C=f(D))?void 0:C.riskList},null,8,["data-source"])):L("",!0)]),v("div",rt,[f(qt).policyInfo.schema.length?(u(),m(f(B),{key:0,modelValue:f(D).extInfo,"onUpdate:modelValue":a[0]||(a[0]=t=>f(D).extInfo=t),schema:f(qt).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):L("",!0)]),v("div",dt,[b(s,{modelValue:f(W),"onUpdate:modelValue":a[1]||(a[1]=t=>k(W)?W.value=t:null)},{default:p((()=>[b(o,{title:"影像信息",name:"1"},{default:p((()=>[ct,v("div",ut,[(u(!0),h(j,null,g(f(Ut)(f(O).HOLDER),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,mt)])))),128))]),pt,v("div",vt,[(u(!0),h(j,null,g(f(Ut)(f(O).INSURED),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,ft)])))),128))]),ht,v("div",It,[(u(!0),h(j,null,g(f(Ut)(f(O).BENEFICIARY),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,yt)])))),128))]),bt,v("div",Lt,[(u(!0),h(j,null,g(f(Ut)(f(O).GUARDIAN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,gt)])))),128))]),jt,v("div",Ot,[(u(!0),h(j,null,g(f(Ut)(f(O).INIT_SIGN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,kt)])))),128))])])),_:1})])),_:1},8,["modelValue"])]),v("div",At,[b(S,{title:"投保告知信息",data:f(qt).customerQuestions||[]},null,8,["data"])]),v("div",Nt,[f(_t)?(u(),m(X,{key:0,ref:"personalInfoRef",modelValue:f(Et),"onUpdate:modelValue":a[2]||(a[2]=t=>k(Et)?Et.value=t:null),"product-factor":f(_t),"is-view":""},null,8,["modelValue","product-factor"])):L("",!0)]),f(qt).payInfo.schema.length?(u(),m(f(F),{key:1,ref:"payInfoRef",modelValue:f(D).tenantOrderPayInfoList,"onUpdate:modelValue":a[3]||(a[3]=t=>f(D).tenantOrderPayInfoList=t),schema:f(qt).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):L("",!0),A((u(),h("div",wt,[b(z,{detail:f(D),onHandleCancel:Bt},null,8,["detail"])])),[[r,f(Rt)]])])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-52343ebe"]]);export{Vt as default};
