import{_ as t,d as e,cI as a,i as n,h as i,j as s,r as o,k as l,O as r,bb as d,d3 as c,o as u,m,w as p,a as v,u as f,c as h,a8 as I,e as y,b,f as L,q as g,F as j,an as O,p as k,bd as N,V as w,a9 as D,dI as V,T as A,ae as q,aC as C,aD as x,bR as T,bs as P}from"./index-c36709f0.js";import{C as R}from"./index-25fffc72.js";import{_}from"./index-0bb079bd.js";import{c as Y}from"./order-04538ad5.js";import{m as Q}from"./trial-583c6f95.js";import"./infoCollection-ffb79216.js";import"./core-25d60c3d.js";import{I as H}from"./infoItem-7a994253.js";import{I as M}from"./insuranceNotificationInformation-9e97c4da.js";import{a as U,_ as E}from"./PolicyInfo-a5c14c1b.js";import{l as S,b as F}from"./product-50355499.js";import{Q as B}from"./questionnaire-62331097.js";import{P as G}from"./index-6327bb8c.js";import{Q as X}from"./notice-33e6eedd.js";import{g as $}from"./utils-0a0c64ed.js";import{O as z}from"./OperateBtn-351b366f.js";import{C as J}from"./index-fb72843d.js";import"./cloneDeep-623cebcc.js";import"./lodash-800e8c72.js";import"./util-daa5c3f2.js";import"./trial-55a5979d.js";import"./constants-b6eb977d.js";const K=t=>(C("data-v-456c72bc"),t=t(),x(),t),W={class:"page-order-detail"},Z=K((()=>v("div",{class:"card-item-name"},"订单进度",-1))),tt={class:"card-item-icon"},et={class:"card card-list"},at={class:"card-list-title"},nt={class:"card card-list"},it={class:"card-list-head"},st=K((()=>v("div",{class:"card-list-title"},"险种信息",-1))),ot={class:"card-list-premium"},lt={class:"card"},rt={class:"card"},dt=K((()=>v("div",{class:"tenantOrderAttachmentList-title"},"投保人资料",-1))),ct={class:"tenantOrderAttachmentList-img"},ut=["src"],mt=K((()=>v("div",{class:"tenantOrderAttachmentList-title"},"被保人资料",-1))),pt={class:"tenantOrderAttachmentList-img"},vt=["src"],ft=K((()=>v("div",{class:"tenantOrderAttachmentList-title"},"受益人资料",-1))),ht={class:"tenantOrderAttachmentList-img"},It=["src"],yt=K((()=>v("div",{class:"tenantOrderAttachmentList-title"},"监护人资料",-1))),bt={class:"tenantOrderAttachmentList-img"},Lt=["src"],gt=K((()=>v("div",{class:"tenantOrderAttachmentList-title"},"银行卡信息",-1))),jt={class:"tenantOrderAttachmentList-img"},Ot=["src"],kt={class:"card"},Nt={class:"card"},wt={class:"footer-button"};var Dt=t(e({__name:"index",setup(t){const e=a(),C=n();i();const x=s();s([]);const K=s([]),Dt=[{title:"险种名称",dataIndex:"riskName",width:200},{title:"保险金额/份数",dataIndex:"regularPremium",width:180,render:(t,e)=>t.regularPremium/t.copy},{title:"保障期间",dataIndex:"coveragePeriodDesc",width:180},{title:"交费期间",dataIndex:"chargePeriodDesc",width:180},{title:"首期保费",dataIndex:"initialPremium",width:180,render:(t,e)=>t.initialPremium}],Vt=o({customerQuestions:[],payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}}}),{query:{orderNo:At,agentCode:qt,tenantId:Ct}}=C,xt=l((()=>{var t;return"cancel"!==(null==(t=x.value)?void 0:t.orderStatus)})),Tt=()=>{D("orderTrajectory",{orderNo:At,orderId:x.value.id,tenantId:Ct})},Pt=s(!1),Rt=s(),_t=s([]),Yt=l((()=>t=>{const{tenantOrderAttachmentList:e}=x.value;return(null==e?void 0:e.length)?e.filter((e=>e.objectType===t)):[]})),Qt=s(),Ht=(t=!0)=>{V({orderNo:At,agentCode:qt,tenantId:Ct}).then((({code:e,data:a})=>{if("10000"===e){if(x.value=a,!t)return;Qt.value=a,x.value.tenantOrderPayInfoList=a.tenantOrderPayInfoList||[];const e=Object.keys(x.value.productCodeList).map((t=>({productCode:t,mergeRiskReqList:x.value.productCodeList[t]})));F(n={productList:e}).then((({data:t,code:e})=>{var a,n;"10000"===e&&(_t.value=null==(n=null==(a=t.riskMaterialList)?void 0:a[0])?void 0:n.productMaterialList)})),Q(n).then((({data:t,code:e})=>{if("10000"===e){const{productDetailResList:e,productFactor:a}=t;Rt.value=a;const{payInfo:n,other:i}=P(a);Vt.payInfo={...Vt.payInfo,...n},Vt.policyInfo={...Vt.policyInfo,...i}}})),(async t=>{let e=[];const{code:a,data:n}=await T({orderNo:At,tenantId:Ct});"10000"===a&&(e=n.productQuestionnaireVOList);const{code:i,data:s}=await S(t);if("10000"===i){const{productQuestionnaireVOList:t}=s||{},a=t.filter((t=>t.businessType!==X.VISIT));Vt.customerQuestions=a.map((t=>{const{questionnaireDetailResponseVO:a,questionnaireId:n,questionnaireName:i}=t||{},{questions:s,basicInfo:o}=a||{},{objectType:l,questionnaireType:r}=o||{};if(r===B.TEXT){const{content:t,textType:e}=(null==s?void 0:s[0])||{};return{content:t,contentType:$(`${e}`,t),questionnaireId:n,questionnaireName:i}}const d=(e||[]).find((t=>t.questionnaireId===n));return{...a,contentType:"question",...null==d?void 0:d.questionnaireDetailResponseVO,questionnaireId:n,questionnaireName:i}}))}})({productCodeList:Object.keys(x.value.productCodeList)})}var n}))},Mt=()=>{Y({orderNo:At,tenantId:Ct}).then((({code:t,data:e})=>{"10000"===t&&(A("撤单成功"),Ht(!1))}))};return r((()=>{Ht()})),(t,a)=>{const n=q,i=_,s=R,o=J,l=d,r=c("loading");return u(),m(l,{"theme-vars":f(e)},{default:p((()=>{var t,e,l,d,c,D,V,A,q,C,T,P,R,_;return[v("div",W,[f(xt)?(u(),h("div",{key:0,class:"card card-head",onClick:Tt},[Z,v("div",tt,[I(y(null==(t=f(x))?void 0:t.orderStepDesc)+" ",1),b(n,{name:"arrow-right"})])])):L("",!0),v("div",et,[v("p",at,y(null==(e=f(x))?void 0:e.productName),1),b(H,{label:"订单号",content:null==(l=f(x))?void 0:l.orderNo,line:"","is-copy":"","min-width":"other"},null,8,["content"]),(u(!0),h(j,null,g((null==(c=null==(d=f(x))?void 0:d.applicationNoList)?void 0:c.length)?null==(D=f(x))?void 0:D.applicationNoList:[""],(t=>(u(),m(H,{key:t,label:"投保单号",content:t,line:"","is-copy":"","min-width":"other"},null,8,["content"])))),128)),b(H,{label:"创建时间",content:f(O)(null==(V=f(x))?void 0:V.gmtCreated).format("YYYY-MM-DD HH:mm:ss"),line:"","min-width":"other"},null,8,["content"]),b(H,{label:"投保时间",content:f(O)(null==(A=f(x))?void 0:A.orderDate).format("YYYY-MM-DD HH:mm:ss"),line:"","min-width":"other"},null,8,["content"]),b(H,{label:"投保保费",content:null==(q=f(x))?void 0:q.orderAmount,line:"","min-width":"other"},null,8,["content"]),b(H,{label:"承保保费",content:null==(C=f(x))?void 0:C.orderAmount,line:"","min-width":"other"},null,8,["content"])]),v("div",nt,[v("div",it,[st,v("div",ot,[I(" 首年保费："),v("span",null,y(null==(T=f(x))?void 0:T.orderAmount),1)])]),(null==(R=null==(P=f(x))?void 0:P.riskList)?void 0:R.length)>0?(u(),m(i,{key:0,columns:Dt,class:"table","data-source":null==(_=f(x))?void 0:_.riskList},null,8,["data-source"])):L("",!0)]),v("div",lt,[f(Vt).policyInfo.schema.length?(u(),m(f(U),{key:0,modelValue:f(x),"onUpdate:modelValue":a[0]||(a[0]=t=>k(x)?x.value=t:null),schema:f(Vt).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):L("",!0)]),v("div",rt,[b(o,{modelValue:f(K),"onUpdate:modelValue":a[1]||(a[1]=t=>k(K)?K.value=t:null)},{default:p((()=>[b(s,{title:"影像信息",name:"1"},{default:p((()=>[dt,v("div",ct,[(u(!0),h(j,null,g(f(Yt)(f(N).HOLDER),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,ut)])))),128))]),mt,v("div",pt,[(u(!0),h(j,null,g(f(Yt)(f(N).INSURED),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,vt)])))),128))]),ft,v("div",ht,[(u(!0),h(j,null,g(f(Yt)(f(N).BENEFICIARY),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,It)])))),128))]),yt,v("div",bt,[(u(!0),h(j,null,g(f(Yt)(f(N).GUARDIAN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,Lt)])))),128))]),gt,v("div",jt,[(u(!0),h(j,null,g(f(Yt)(f(N).INIT_SIGN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,Ot)])))),128))])])),_:1})])),_:1},8,["modelValue"])]),v("div",kt,[b(M,{title:"投保告知信息",data:f(Vt).customerQuestions||[]},null,8,["data"])]),v("div",Nt,[f(Rt)?(u(),m(G,{key:0,ref:"personalInfoRef",modelValue:f(Qt),"onUpdate:modelValue":a[2]||(a[2]=t=>k(Qt)?Qt.value=t:null),"product-factor":f(Rt),"is-view":""},null,8,["modelValue","product-factor"])):L("",!0)]),f(Vt).payInfo.schema.length?(u(),m(f(E),{key:1,ref:"payInfoRef",modelValue:f(x).tenantOrderPayInfoList,"onUpdate:modelValue":a[3]||(a[3]=t=>f(x).tenantOrderPayInfoList=t),schema:f(Vt).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):L("",!0),w((u(),h("div",wt,[b(z,{detail:f(x),onHandleCancel:Mt},null,8,["detail"])])),[[r,f(Pt)]])])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-456c72bc"]]);export{Dt as default};
