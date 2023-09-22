import{_ as t,d as e,cI as a,i as n,h as i,j as s,r as o,k as l,O as r,bb as d,d3 as c,o as u,m,w as p,a as f,a8 as v,e as h,u as I,b as y,c as L,q as g,F as j,an as b,f as O,p as k,bd as N,V as w,a9 as D,dI as V,T as A,ae as q,aC as C,aD as x,bR as T,bs as P}from"./index-aea98641.js";import{C as R}from"./index-3ddd6557.js";import{_}from"./index-5845ef91.js";import{c as Y}from"./order-20c6c6e7.js";import{m as Q}from"./trial-7909ca3c.js";import"./infoCollection-01d7caab.js";import"./core-aa66889b.js";import{I as H}from"./infoItem-7458d30b.js";import{I as M}from"./insuranceNotificationInformation-23112ed5.js";import{a as U,_ as E}from"./PolicyInfo-5c2c2725.js";import{l as S,b as F}from"./product-62597c34.js";import{Q as B}from"./questionnaire-62331097.js";import{P as G}from"./index-913172e5.js";import{Q as X}from"./notice-33e6eedd.js";import{g as $}from"./utils-92f60a57.js";import{O as z}from"./OperateBtn-3780e216.js";import{C as J}from"./index-867c43ea.js";import"./cloneDeep-4a523ed4.js";import"./lodash-045c4c8c.js";import"./util-83effcbd.js";import"./trial-066f046d.js";import"./constants-fe95ef6f.js";const K=t=>(C("data-v-4e0fb308"),t=t(),x(),t),W={class:"page-order-detail"},Z=K((()=>f("div",{class:"card-item-name"},"订单进度",-1))),tt={class:"card-item-icon"},et={class:"card card-list"},at={class:"card-list-title"},nt={class:"card card-list"},it={class:"card-list-head"},st=K((()=>f("div",{class:"card-list-title"},"险种信息",-1))),ot={class:"card-list-premium"},lt={class:"card"},rt={class:"card"},dt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"投保人资料",-1))),ct={class:"tenantOrderAttachmentList-img"},ut=["src"],mt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"被保人资料",-1))),pt={class:"tenantOrderAttachmentList-img"},ft=["src"],vt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"受益人资料",-1))),ht={class:"tenantOrderAttachmentList-img"},It=["src"],yt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"监护人资料",-1))),Lt={class:"tenantOrderAttachmentList-img"},gt=["src"],jt=K((()=>f("div",{class:"tenantOrderAttachmentList-title"},"银行卡信息",-1))),bt={class:"tenantOrderAttachmentList-img"},Ot=["src"],kt={class:"card"},Nt={class:"card"},wt={class:"footer-button"};var Dt=t(e({__name:"index",setup(t){const e=a(),C=n();i();const x=s();s([]);const K=s([]),Dt=[{title:"险种名称",dataIndex:"riskName",width:200},{title:"保险金额/份数",dataIndex:"regularPremium",width:180,render:(t,e)=>t.regularPremium/t.copy},{title:"保障期间",dataIndex:"coveragePeriodDesc",width:180},{title:"交费期间",dataIndex:"chargePeriodDesc",width:180},{title:"首期保费",dataIndex:"initialPremium",width:180,render:(t,e)=>t.initialPremium}],Vt=o({customerQuestions:[],payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}}}),{query:{orderNo:At,agentCode:qt,tenantId:Ct}}=C,xt=()=>{D("orderTrajectory",{orderNo:At,orderId:x.value.id,tenantId:Ct})},Tt=s(!1),Pt=s(),Rt=s([]),_t=l((()=>t=>{const{tenantOrderAttachmentList:e}=x.value;return(null==e?void 0:e.length)?e.filter((e=>e.objectType===t)):[]})),Yt=s(),Qt=(t=!0)=>{V({orderNo:At,agentCode:qt,tenantId:Ct}).then((({code:e,data:a})=>{if("10000"===e){if(x.value=a,!t)return;Yt.value=a,x.value.tenantOrderPayInfoList=a.tenantOrderPayInfoList||[];const e=Object.keys(x.value.productCodeList).map((t=>({productCode:t,mergeRiskReqList:x.value.productCodeList[t]})));F(n={productList:e}).then((({data:t,code:e})=>{var a,n;"10000"===e&&(Rt.value=null==(n=null==(a=t.riskMaterialList)?void 0:a[0])?void 0:n.productMaterialList)})),Q(n).then((({data:t,code:e})=>{if("10000"===e){const{productDetailResList:e,productFactor:a}=t;Pt.value=a;const{payInfo:n,other:i}=P(a);Vt.payInfo={...Vt.payInfo,...n},Vt.policyInfo={...Vt.policyInfo,...i}}})),(async t=>{let e=[];const{code:a,data:n}=await T({orderNo:At,tenantId:Ct});"10000"===a&&(e=n.productQuestionnaireVOList);const{code:i,data:s}=await S(t);if("10000"===i){const{productQuestionnaireVOList:t}=s||{},a=t.filter((t=>t.businessType!==X.VISIT));Vt.customerQuestions=a.map((t=>{const{questionnaireDetailResponseVO:a,questionnaireId:n,questionnaireName:i}=t||{},{questions:s,basicInfo:o}=a||{},{objectType:l,questionnaireType:r}=o||{};if(r===B.TEXT){const{content:t,textType:e}=(null==s?void 0:s[0])||{};return{content:t,contentType:$(`${e}`,t),questionnaireId:n,questionnaireName:i}}const d=(e||[]).find((t=>t.questionnaireId===n));return{...a,contentType:"question",...null==d?void 0:d.questionnaireDetailResponseVO,questionnaireId:n,questionnaireName:i}}))}})({productCodeList:Object.keys(x.value.productCodeList)})}var n}))},Ht=()=>{Y({orderNo:At,tenantId:Ct}).then((({code:t,data:e})=>{"10000"===t&&(A("撤单成功"),Qt(!1))}))};return r((()=>{Qt()})),(t,a)=>{const n=q,i=_,s=R,o=J,l=d,r=c("loading");return u(),m(l,{"theme-vars":I(e)},{default:p((()=>{var t,e,l,d,c,D,V,A,q,C,T,P,R,_;return[f("div",W,[f("div",{class:"card card-head",onClick:xt},[Z,f("div",tt,[v(h(null==(t=I(x))?void 0:t.orderStepDesc)+" ",1),y(n,{name:"arrow-right"})])]),f("div",et,[f("p",at,h(null==(e=I(x))?void 0:e.productName),1),y(H,{label:"订单号",content:null==(l=I(x))?void 0:l.orderNo,line:"","is-copy":"","min-width":"other"},null,8,["content"]),(u(!0),L(j,null,g((null==(c=null==(d=I(x))?void 0:d.applicationNoList)?void 0:c.length)?null==(D=I(x))?void 0:D.applicationNoList:[""],(t=>(u(),m(H,{key:t,label:"投保单号",content:t,line:"","is-copy":"","min-width":"other"},null,8,["content"])))),128)),y(H,{label:"创建时间",content:I(b)(null==(V=I(x))?void 0:V.gmtCreated).format("YYYY-MM-DD HH:mm:ss"),line:"","min-width":"other"},null,8,["content"]),y(H,{label:"投保时间",content:I(b)(null==(A=I(x))?void 0:A.orderDate).format("YYYY-MM-DD HH:mm:ss"),line:"","min-width":"other"},null,8,["content"]),y(H,{label:"投保保费",content:null==(q=I(x))?void 0:q.orderAmount,line:"","min-width":"other"},null,8,["content"]),y(H,{label:"承保保费",content:null==(C=I(x))?void 0:C.orderAmount,line:"","min-width":"other"},null,8,["content"])]),f("div",nt,[f("div",it,[st,f("div",ot,[v(" 首年保费："),f("span",null,h(null==(T=I(x))?void 0:T.orderAmount),1)])]),(null==(R=null==(P=I(x))?void 0:P.riskList)?void 0:R.length)>0?(u(),m(i,{key:0,columns:Dt,class:"table","data-source":null==(_=I(x))?void 0:_.riskList},null,8,["data-source"])):O("",!0)]),f("div",lt,[I(Vt).policyInfo.schema.length?(u(),m(I(U),{key:0,modelValue:I(x),"onUpdate:modelValue":a[0]||(a[0]=t=>k(x)?x.value=t:null),schema:I(Vt).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):O("",!0)]),f("div",rt,[y(o,{modelValue:I(K),"onUpdate:modelValue":a[1]||(a[1]=t=>k(K)?K.value=t:null)},{default:p((()=>[y(s,{title:"影像信息",name:"1"},{default:p((()=>[dt,f("div",ct,[(u(!0),L(j,null,g(I(_t)(I(N).HOLDER),((t,e)=>(u(),L("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,ut)])))),128))]),mt,f("div",pt,[(u(!0),L(j,null,g(I(_t)(I(N).INSURED),((t,e)=>(u(),L("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,ft)])))),128))]),vt,f("div",ht,[(u(!0),L(j,null,g(I(_t)(I(N).BENEFICIARY),((t,e)=>(u(),L("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,It)])))),128))]),yt,f("div",Lt,[(u(!0),L(j,null,g(I(_t)(I(N).GUARDIAN),((t,e)=>(u(),L("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,gt)])))),128))]),jt,f("div",bt,[(u(!0),L(j,null,g(I(_t)(I(N).INIT_SIGN),((t,e)=>(u(),L("div",{key:e,class:"attachment-item"},[f("img",{src:t.uri,alt:""},null,8,Ot)])))),128))])])),_:1})])),_:1},8,["modelValue"])]),f("div",kt,[y(M,{title:"投保告知信息",data:I(Vt).customerQuestions||[]},null,8,["data"])]),f("div",Nt,[I(Pt)?(u(),m(G,{key:0,ref:"personalInfoRef",modelValue:I(Yt),"onUpdate:modelValue":a[2]||(a[2]=t=>k(Yt)?Yt.value=t:null),"product-factor":I(Pt),"is-view":""},null,8,["modelValue","product-factor"])):O("",!0)]),I(Vt).payInfo.schema.length?(u(),m(I(E),{key:0,ref:"payInfoRef",modelValue:I(x).tenantOrderPayInfoList,"onUpdate:modelValue":a[3]||(a[3]=t=>I(x).tenantOrderPayInfoList=t),schema:I(Vt).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):O("",!0),w((u(),L("div",wt,[y(z,{detail:I(x),onHandleCancel:Ht},null,8,["detail"])])),[[r,I(Tt)]])])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-4e0fb308"]]);export{Dt as default};
