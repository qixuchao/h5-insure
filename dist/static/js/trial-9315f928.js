import{d as e,h as s,i as t,j as a,O as o,o as i,l as r,w as l,a as d,e as u,b as c,u as n,c as p,m,F as f,n as v,_ as k,T as C,ao as R,ap as j,aq as I,ar as b,as as h,at as L,au as y,g as _,av as g,aw as P,q as w,s as x}from"./index-e18db70e.js";import{T as q,p as N}from"./utils-ed704486.js";import{q as V,a as M,g as S,s as A,i as D,m as O}from"./trial-d080f2d6.js";import{_ as K}from"./index-04b3c352.js";import{S as T}from"./index-1a4da0a6.js";import{R as E}from"./trial-defa9a58.js";import{_ as B}from"./TrialButton-f7e52f9c.js";import{u as U}from"./useOrder-75af89ba.js";import{B as F,P as $}from"./constants-26c2b3c0.js";import"./debounce-6981b306.js";import"./isObjectLike-a9798079.js";import"./cloneDeep-5d541e55.js";import"./keysIn-131bbce9.js";import"./_getTag-0507d0b1.js";import"./InsureInfos-8e104242.js";import"./index-de590a0b.js";import"./get-441ededf.js";import"./infoCollection-5ec4d8c9.js";import"./index-4465d39c.js";import"./empth-c0adfdba.js";import"./merge-e7788e50.js";import"./index-e15b0217.js";import"./phoneVerify-5635bdd8.js";import"./index-8290e5bc.js";import"./useDicData-34e49d0a.js";import"./PayInfo-d9c5f190.js";import"./bankCard-04c7ba29.js";import"./lodash-5c2f28b0.js";import"./index-7980b223.js";import"./search-051f89cc.js";import"./product-7bbf9c44.js";import"./constants-c097609d.js";import"./utils-fae31368.js";import"./createProposal-6f048d97.js";import"./nextStep-ed87c6a0.js";import"./core-4108f5fa.js";import"./constant-8927d485.js";import"./empty-ae586b6c.js";import"./index-31d0d565.js";const z={class:"popup-container"},G={class:"popup-header"},H={class:"title"},J=(e=>(L("data-v-124bec92"),e=e(),y(),e))((()=>d("p",{class:"tip"},"已为您挑选出以下险种",-1))),Q={class:"search"},W={key:0,class:"risk-list"},X=e({name:"riskSelect"});var Y=k(e({...X,props:{type:{default:2},show:{type:Boolean,default:!1},title:{},insuredList:{default:()=>[]},mainRiskCode:{default:""},selectList:{default:()=>[]}},emits:["cancel","confirm"],setup(e,{emit:k}){const L=e,y=s(),{insurerCode:_}=y.query,g=t(),P=t([]),w=a((()=>L.show)),x=()=>{k("cancel")},q=()=>{g.value?k("confirm",g.value):C(`暂未添加任何${L.type===E.MAIN_RISK?"主":"附加"}险`)};return o((()=>{(async()=>{const e={insuredVO:L.insuredList,mainRiskCode:L.mainRiskCode,insurerCode:_,productCategory:"",selectProductCodes:[],selectRiskCodes:[]};if(e.selectProductCodes=L.selectList.map((s=>(e.selectRiskCodes.push(...s.mergeRiskReqList.map((e=>e.riskCode))),s.productCode))),L.type===E.MAIN_RISK){const{code:s,data:t}=await V(e);"10000"===s&&(P.value=t)}else{const{code:s,data:t}=await M(e);"10000"===s&&(P.value=t)}})()})),(e,s)=>{const t=T,a=R,o=j,k=I,C=b,L=K,y=h;return i(),r(y,{show:n(w),"onUpdate:show":s[1]||(s[1]=e=>m(w)?w.value=e:null),class:"popup-risk-select",closeable:!1},{default:l((()=>[d("div",z,[d("div",G,[d("span",{class:"clear-all",onClick:x}," 取消 "),d("span",H,u(e.title),1),d("span",{class:"close",onClick:q},"确认")]),J,d("div",Q,[c(t,{shape:"round",placeholder:"请输入产品名称进行搜索"})]),n(P).length?(i(),p("div",W,[c(C,{modelValue:n(g),"onUpdate:modelValue":s[0]||(s[0]=e=>m(g)?g.value=e:null)},{default:l((()=>[c(k,{inset:""},{default:l((()=>[(i(!0),p(f,null,v(n(P),(e=>(i(),r(o,{key:e.riskCode||e.productCode,title:e.riskName||e.productName,clickable:"",onClick:s=>g.value=e.riskCode||e.productCode},{icon:l((()=>[c(a,{name:e.riskCode||e.productCode},null,8,["name"])])),_:2},1032,["title","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])])):(i(),r(L,{key:1,title:`暂无关联${e.type===n(E).MAIN_RISK?"主":"附加"}险、请选择其他险种`},null,8,["title"]))])])),_:1},8,["show"])}}}),[["__scopeId","data-v-124bec92"]]);const Z={class:"page-trial-wrap"},ee=e({name:"trial"}),se=e({...ee,setup(e){const o=s(),d=_(),{productCode:u,orderNo:m,tenantId:f}=o.query,v=t({}),k=t({productList:[]}),C=t([]),R=t({}),j=t(),I=t(),b=U({extInfo:{templateId:201,buttonCode:F.TRIAL_PREMIUM,pageCode:$.TRIAL_PREMIUM}}),h=t(),L=t(1),y=a((()=>L.value===E.MAIN_RISK?"添加主险":"添加附加险")),V=t(!1),M=()=>{V.value=!1},K=e=>{if(L.value===E.MAIN_RISK)k.value.productList.push({productCode:e,mergeRiskReqList:[]}),j.value.getProductDefaultValue(e);else{k.value.productList.find((e=>e.productCode===I.value)).mergeRiskReqList.push({riskCode:e,riskType:E.RIDER_RISK,mainRiskCode:R.value.riskCode}),j.value.getRiderRiskDefaultValue(I.value,e,R.value.riskCode)}O(k.value).then((({code:e,data:s})=>{if("10000"===e){const{productDetailResList:e,productFactor:t}=s;h.value=t,k.value=N(e);const a={};e.forEach((e=>{a[e.productCode]=e})),v.value=a}})),V.value=!1},T=(e,s,t)=>{V.value=!0,L.value=E.RIDER_RISK,C.value=t,R.value=s,I.value=e},z=e=>{V.value=!0,L.value=E.MAIN_RISK,C.value=e},G=(e,s,t)=>{v.value[e],t?(v.value[e].productPlanInsureVOList[0].insureProductRiskVOList=v.value[e].productPlanInsureVOList[0].insureProductRiskVOList.filter((e=>e.riskCode!==s)),k.value.productList=k.value.productList.map((t=>(t.productCode===e&&(t.mergeRiskReqList=t.mergeRiskReqList.filter((e=>e.riskCode!==s))),t)))):(delete v.value[e],k.value.productList=k.value.productList.filter((s=>s.productCode!==e)))},H=()=>{j.value.onNext((async e=>{const{code:s,data:t}=await A(e);"10000"===s&&d.push({path:x.infoCollection,query:{...o.query,orderNo:t}})}))};return g((()=>{D({productCode:u,isTenant:!1}).then((({data:e,code:s})=>{var t,a;"10000"===s&&(v.value[`${u}`]=e,h.value=null==(a=null==(t=null==e?void 0:e.productPlanInsureVOList)?void 0:t[0])?void 0:a.productFactor,k.value=N([e]))})),m&&S({orderNo:m,tenantId:f}).then((({code:e,data:s})=>{"10000"===e&&(b.value=s)}))})),(e,s)=>(i(),p("div",Z,[c(q,{ref_key:"trialRef",ref:j,"product-collection":n(v),"default-value":n(b),"product-factor":n(h),"is-trial":"","hide-benefit":"",onAddRisk:T,onAddMainRisk:z,onDeleteRisk:G},{trialBtn:l((({riskPremium:e})=>[c(B,{premium:e.initialPremium,onClick:P(H,["stop"])},null,8,["premium","onClick"])])),_:1},8,["product-collection","default-value","product-factor"]),n(V)?(i(),r(Y,{key:0,type:n(L),show:n(V),"insured-list":n(C),title:n(y),"main-risk-code":n(R).riskCode,"select-list":n(k).productList,onCancel:M,onConfirm:K},null,8,["type","show","insured-list","title","main-risk-code","select-list"])):w("",!0)]))}});export{se as default};
