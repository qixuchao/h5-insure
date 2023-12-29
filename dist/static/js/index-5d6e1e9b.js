import{_ as t,d as e,de as a,i as n,h as i,j as o,r as s,k as l,l as r,br as d,dA as c,o as u,p as m,w as p,a as v,u as f,c as h,v as I,e as y,b as L,f as j,s as b,F as g,bu as O,q as k,aL as A,aj as N,ef as w,T as V,ao as q,aC as x,aD as C,c8 as D,bH as T}from"./index-ea829f03.js";import{C as P}from"./index-38aa0069.js";import{_ as R}from"./index-b11ae4c8.js";import{c as _}from"./order-f570f80f.js";import{m as Q}from"./trial-44315458.js";import"./infoCollection-eaa2d4d2.js";import"./core-91906a99.js";import{I as U}from"./infoItem-45fa163b.js";import{I as E}from"./insuranceNotificationInformation-37d3d143.js";import{a as S,P as F}from"./PolicyInfo-b5523982.js";import{l as H,b as B}from"./product-d6d79d56.js";import{Q as G}from"./questionnaire-42dcb602.js";import{P as M}from"./index-5c566f63.js";import{Q as X}from"./notice-33e6eedd.js";import{g as Y}from"./utils-448781c9.js";import{O as $}from"./OperateBtn-427a5955.js";import{t as z}from"./format-31cde443.js";import{C as J}from"./index-d1b8b220.js";import"./cloneDeep-ad1af6ea.js";import"./util-76c8351c.js";import"./trial-c1c84fde.js";const K=t=>(x("data-v-7b6727f5"),t=t(),C(),t),W={class:"page-order-detail"},Z=K((()=>v("div",{class:"card-item-name"},"订单进度",-1))),tt={class:"card-item-icon"},et={class:"card card-list"},at={class:"card-list-title"},nt={class:"card card-list"},it={class:"card-list-head"},ot=K((()=>v("div",{class:"card-list-title"},"险种信息",-1))),st={class:"card-list-premium"},lt={class:"card"},rt={class:"card"},dt=K((()=>v("div",{class:"tenantOrderAttachmentList-title"},"投保人资料",-1))),ct={class:"tenantOrderAttachmentList-img"},ut=["src"],mt=K((()=>v("div",{class:"tenantOrderAttachmentList-title"},"被保人资料",-1))),pt={class:"tenantOrderAttachmentList-img"},vt=["src"],ft=K((()=>v("div",{class:"tenantOrderAttachmentList-title"},"受益人资料",-1))),ht={class:"tenantOrderAttachmentList-img"},It=["src"],yt=K((()=>v("div",{class:"tenantOrderAttachmentList-title"},"监护人资料",-1))),Lt={class:"tenantOrderAttachmentList-img"},jt=["src"],bt=K((()=>v("div",{class:"tenantOrderAttachmentList-title"},"银行卡信息",-1))),gt={class:"tenantOrderAttachmentList-img"},Ot=["src"],kt={class:"card"},At={class:"card"},Nt={class:"footer-button"};var wt=t(e({__name:"index",setup(t){const e=a(),x=n();i();const C=o();o([]);const K=o([]),wt=[{title:"险种名称",dataIndex:"riskName",width:200},{title:"保险金额/份数",dataIndex:"initialAmount",width:180,render:(t,e)=>z(t.initialAmount/(t.copy||1))},{title:"保障期间",dataIndex:"coveragePeriodDesc",width:180},{title:"交费期间",dataIndex:"chargePeriodDesc",width:180},{title:"首期保费",dataIndex:"initialPremium",width:180,render:(t,e)=>z(t.initialPremium)}],Vt=s({customerQuestions:[],payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}}}),{query:{orderNo:qt,agentCode:xt,tenantId:Ct}}=x,Dt=l((()=>{var t;return"cancel"!==(null==(t=C.value)?void 0:t.orderStatus)})),Tt=()=>{N("orderTrajectory",{orderNo:qt,orderId:C.value.id,tenantId:Ct})},Pt=o(!1),Rt=o(),_t=o([]),Qt=l((()=>t=>{const{tenantOrderAttachmentList:e}=C.value;return(null==e?void 0:e.length)?e.filter((e=>e.objectType===t)):[]})),Ut=o(),Et=(t=!0)=>{w({orderNo:qt,agentCode:xt,tenantId:Ct}).then((({code:e,data:a})=>{if("10000"===e){if(C.value=a,!t)return;Ut.value=a,C.value.tenantOrderPayInfoList=a.tenantOrderPayInfoList||[];const e=Object.keys(C.value.productCodeList).map((t=>({productCode:t,mergeRiskReqList:C.value.productCodeList[t]})));B(n={productList:e}).then((({data:t,code:e})=>{var a,n;"10000"===e&&(_t.value=null==(n=null==(a=t.riskMaterialList)?void 0:a[0])?void 0:n.productMaterialList)})),Q(n).then((({data:t,code:e})=>{if("10000"===e){const{productDetailResList:e,productFactor:a}=t;Rt.value=a;const{payInfo:n,other:i}=T(a);Vt.payInfo={...Vt.payInfo,...n},Vt.policyInfo={...Vt.policyInfo,...i}}})),(async t=>{let e=[];const{code:a,data:n}=await D({orderNo:qt,tenantId:Ct});"10000"===a&&(e=n.productQuestionnaireVOList);const{code:i,data:o}=await H(t);if("10000"===i){const{productQuestionnaireVOList:t}=o||{},a=t.filter((t=>t.businessType!==X.VISIT));Vt.customerQuestions=a.map((t=>{const{questionnaireDetailResponseVO:a,questionnaireId:n,questionnaireName:i}=t||{},{questions:o,basicInfo:s}=a||{},{objectType:l,questionnaireType:r}=s||{};if(r===G.TEXT){const{content:t,textType:e}=(null==o?void 0:o[0])||{};return{content:t,contentType:Y(`${e}`,t),questionnaireId:n,questionnaireName:i}}const d=(e||[]).find((t=>t.questionnaireId===n));return{...a,contentType:"question",...null==d?void 0:d.questionnaireDetailResponseVO,questionnaireId:n,questionnaireName:i}}))}})({productCodeList:Object.keys(C.value.productCodeList)})}var n}))},St=()=>{_({orderNo:qt,tenantId:Ct}).then((({code:t,data:e})=>{"10000"===t&&(V("撤单成功"),setTimeout((()=>Et(!1)),500))}))};return r((()=>{Et()})),(t,a)=>{const n=q,i=R,o=P,s=J,l=d,r=c("loading");return u(),m(l,{"theme-vars":f(e)},{default:p((()=>{var t,e,l,d,c,N,w,V,q,x,D;return[v("div",W,[f(Dt)?(u(),h("div",{key:0,class:"card card-head",onClick:Tt},[Z,v("div",tt,[I(y(null==(t=f(C))?void 0:t.orderStepDesc)+" ",1),L(n,{name:"arrow-right"})])])):j("",!0),v("div",et,[v("p",at,y(null==(e=f(C))?void 0:e.productName),1),L(U,{label:"订单号",content:null==(l=f(C))?void 0:l.orderNo,line:"","is-copy":"","min-width":"other"},null,8,["content"]),L(U,{label:"投/保单号",line:"","min-width":"other"},{content:p((()=>{var t,e,a,n;return[(u(!0),h(g,null,b((null==(e=null==(t=f(C))?void 0:t.policyNoList)?void 0:e.length)?null==(a=f(C))?void 0:a.policyNoList:null==(n=f(C))?void 0:n.applicationNoList,(t=>(u(),m(U,{key:t,content:t,line:"","is-copy":"","min-width":"other"},null,8,["content"])))),128))]})),_:1}),L(U,{label:"创建时间",content:null==(d=f(C))?void 0:d.orderDate,line:"","min-width":"other"},null,8,["content"]),L(U,{label:"投保时间",content:null==(c=f(C))?void 0:c.applicationCreateDate,line:"","min-width":"other"},null,8,["content"]),L(U,{label:"投保保费",content:f(z)(null==(N=f(C))?void 0:N.orderAmount),line:"","min-width":"other"},null,8,["content"]),L(U,{label:"承保保费",content:f(z)(null==(w=f(C))?void 0:w.orderAmount),line:"","min-width":"other"},null,8,["content"])]),v("div",nt,[v("div",it,[ot,v("div",st,[I(" 首年保费："),v("span",null,y(f(z)(null==(V=f(C))?void 0:V.orderAmount)),1)])]),(null==(x=null==(q=f(C))?void 0:q.riskList)?void 0:x.length)>0?(u(),m(i,{key:0,columns:wt,class:"table","data-source":null==(D=f(C))?void 0:D.riskList},null,8,["data-source"])):j("",!0)]),v("div",lt,[f(Vt).policyInfo.schema.length?(u(),m(f(S),{key:0,modelValue:f(C).extInfo,"onUpdate:modelValue":a[0]||(a[0]=t=>f(C).extInfo=t),schema:f(Vt).policyInfo.schema,"is-view":""},null,8,["modelValue","schema"])):j("",!0)]),v("div",rt,[L(s,{modelValue:f(K),"onUpdate:modelValue":a[1]||(a[1]=t=>k(K)?K.value=t:null)},{default:p((()=>[L(o,{title:"影像信息",name:"1"},{default:p((()=>[dt,v("div",ct,[(u(!0),h(g,null,b(f(Qt)(f(O).HOLDER),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,ut)])))),128))]),mt,v("div",pt,[(u(!0),h(g,null,b(f(Qt)(f(O).INSURED),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,vt)])))),128))]),ft,v("div",ht,[(u(!0),h(g,null,b(f(Qt)(f(O).BENEFICIARY),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,It)])))),128))]),yt,v("div",Lt,[(u(!0),h(g,null,b(f(Qt)(f(O).GUARDIAN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,jt)])))),128))]),bt,v("div",gt,[(u(!0),h(g,null,b(f(Qt)(f(O).INIT_SIGN),((t,e)=>(u(),h("div",{key:e,class:"attachment-item"},[v("img",{src:t.uri,alt:""},null,8,Ot)])))),128))])])),_:1})])),_:1},8,["modelValue"])]),v("div",kt,[L(E,{title:"投保告知信息",data:f(Vt).customerQuestions||[]},null,8,["data"])]),v("div",At,[f(Rt)?(u(),m(M,{key:0,ref:"personalInfoRef",modelValue:f(Ut),"onUpdate:modelValue":a[2]||(a[2]=t=>k(Ut)?Ut.value=t:null),"product-factor":f(Rt),"is-view":""},null,8,["modelValue","product-factor"])):j("",!0)]),f(Vt).payInfo.schema.length?(u(),m(f(F),{key:1,ref:"payInfoRef",modelValue:f(C).tenantOrderPayInfoList,"onUpdate:modelValue":a[3]||(a[3]=t=>f(C).tenantOrderPayInfoList=t),schema:f(Vt).payInfo.schema,"is-view":""},null,8,["modelValue","schema"])):j("",!0),A((u(),h("div",Nt,[L($,{detail:f(C),onHandleCancel:St},null,8,["detail"])])),[[r,f(Pt)]])])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-7b6727f5"]]);export{wt as default};
