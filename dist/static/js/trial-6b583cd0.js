import{d as e,i as s,k as a,l as t,O as o,o as i,n as r,w as l,a as d,e as u,b as c,u as n,c as p,p as m,F as f,f as v,_ as k,ak as C,al as R,am as j,an as b,ao as I,ap as L,aq as h,h as y,ar as _,as as g,s as P}from"./index-dc5ec44c.js";import{T as V}from"./index-91fc9e89.js";import{q as x,a as w,g as O,i as q,m as D}from"./trial-7511f230.js";import{_ as M}from"./index-661fbf7f.js";import{S}from"./index-92719e63.js";import{R as T}from"./trial-ce912ff9.js";import{_ as A}from"./TrialButton-81277d85.js";import{u as N}from"./useOrder-055f3aa3.js";import{B as K,P as E}from"./constants-fc14d916.js";import{n as B}from"./nextStep-66a8620e.js";import"./debounce-6981b306.js";import"./isObjectLike-a9798079.js";import"./cloneDeep-5d541e55.js";import"./keysIn-131bbce9.js";import"./_getTag-0507d0b1.js";import"./InsureInfos-9b569f61.js";import"./index-de590a0b.js";import"./get-ba96bfb7.js";import"./infoCollection-9802e33b.js";import"./index-dae080f5.js";import"./empth-c0adfdba.js";import"./merge-e7788e50.js";import"./index-7d2ccc5b.js";import"./phoneVerify-5b4fc776.js";import"./index-0eb0c95b.js";import"./useDicData-bd9cdb9d.js";import"./PayInfo-9d519310.js";import"./bankCard-52413981.js";import"./index-249a6b13.js";import"./search-66b52172.js";import"./product-7bbf9c44.js";import"./constants-f9677f84.js";import"./utils-c770f39f.js";import"./createProposal-7f54c8a8.js";import"./empty-ae586b6c.js";import"./index-af91b1ee.js";import"./core-7e803d21.js";import"./constant-8927d485.js";const U={class:"popup-container"},F={class:"popup-header"},$={class:"title"},z=(e=>(L("data-v-049a68c1"),e=e(),h(),e))((()=>d("p",{class:"tip"},"已为您挑选出以下险种",-1))),G={class:"search"},H={key:0,class:"risk-list"},J=e({name:"riskSelect"});var Q=k(e({...J,props:{type:{default:2},show:{type:Boolean,default:!1},title:{},insuredList:{default:()=>[]},mainRiskCode:{default:""}},emits:["cancel","confirm"],setup(e,{emit:k}){const L=e,h=s(),{insurerCode:y}=h.query,_=a(),g=a([]),P=t((()=>L.show)),V=()=>{k("cancel")},O=()=>{k("confirm",_.value)};return o((()=>{(async()=>{const e={insuredVO:L.insuredList,mainRiskCode:L.mainRiskCode,insurerCode:y,productCategory:""};if(L.type===T.MAIN_RISK){const{code:s,data:a}=await x(e);"10000"===s&&(g.value=a)}else{const{code:s,data:a}=await w(e);"10000"===s&&(g.value=a)}})()})),(e,s)=>{const a=S,t=C,o=R,k=j,L=b,h=M,y=I;return i(),r(y,{show:n(P),"onUpdate:show":s[1]||(s[1]=e=>m(P)?P.value=e:null),class:"popup-risk-select",closeable:!1},{default:l((()=>[d("div",U,[d("div",F,[d("span",{class:"clear-all",onClick:V}," 取消 "),d("span",$,u(e.title),1),d("span",{class:"close",onClick:O},"确认")]),z,d("div",G,[c(a,{shape:"round",placeholder:"请输入产品名称进行搜索"})]),n(g).length?(i(),p("div",H,[c(L,{modelValue:n(_),"onUpdate:modelValue":s[0]||(s[0]=e=>m(_)?_.value=e:null)},{default:l((()=>[c(k,{inset:""},{default:l((()=>[(i(!0),p(f,null,v(n(g),(e=>(i(),r(o,{key:e.riskCode||e.productCode,title:e.riskName||e.productName,clickable:"",onClick:s=>_.value=e.riskCode||e.productCode},{icon:l((()=>[c(t,{name:e.riskCode||e.productCode},null,8,["name"])])),_:2},1032,["title","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])])):(i(),r(h,{key:1,title:"暂无关联主险、请选择其他险种"}))])])),_:1},8,["show"])}}}),[["__scopeId","data-v-049a68c1"]]);const W={class:"page-trial-wrap"},X=e({name:"trial"}),Y=e({...X,setup(e){const o=s();y();const{productCode:d,orderNo:u,tenantId:m}=o.query,f=e=>({productList:e.map((e=>{var s,a;return{productCode:e.productCode,mergeRiskReqList:null==(a=null==(s=e.productPlanInsureVOList)?void 0:s[0])?void 0:a.insureProductRiskVOList.map((e=>({riskCode:e.riskCode,riskType:e.riskType,mainRiskCode:e.mainRiskCode})))}}))}),v=a({}),k=a({productList:[]}),C=a([]),R=a({}),j=a(),b=a(),I=N({extInfo:{templateId:201,buttonCode:K.TRIAL_PREMIUM,pageCode:E.TRIAL_PREMIUM}}),L=a(),h=a(1),x=t((()=>h.value===T.MAIN_RISK?"添加主险":"添加附加险")),w=a(!1),M=()=>{w.value=!1},S=e=>{if(h.value===T.MAIN_RISK)k.value.productList.push({productCode:e,mergeRiskReqList:[]}),j.value.getProductDefaultValue(e);else{k.value.productList.find((e=>e.productCode===b.value)).mergeRiskReqList.push({riskCode:e,riskType:T.RIDER_RISK,mainRiskCode:R.value.riskCode}),j.value.getRiderRiskDefaultValue(b.value,e,R.value.riskCode)}D(k.value).then((({code:e,data:s})=>{if("10000"===e){const{productDetailResList:e,productFactor:a}=s;L.value=a,k.value=f(e);const t={};e.forEach((e=>{t[e.productCode]=e})),v.value=t}})),w.value=!1},U=(e,s,a)=>{w.value=!0,h.value=T.RIDER_RISK,C.value=a,R.value=s,b.value=e},F=e=>{w.value=!0,h.value=T.MAIN_RISK,C.value=e},$=(e,s,a)=>{v.value[e],console.log("selectProductCode",e,s,a),a?(v.value[e].productPlanInsureVOList[0].insureProductRiskVOList=v.value[e].productPlanInsureVOList[0].insureProductRiskVOList.filter((e=>e.riskCode!==s)),k.value.productList=k.value.productList.map((e=>(e.productCode===b&&(e.mergeRiskReqList=e.mergeRiskReqList.filter((e=>e.riskCode!==s))),e)))):(delete v.value[e],k.value.productList=k.value.productList.filter((e=>e.productCode!==b)))},z=()=>{B(I.value)};return _((()=>{q({productCode:d,isTenant:!1}).then((({data:e,code:s})=>{var a,t;"10000"===s&&(v.value[`${d}`]=e,L.value=null==(t=null==(a=null==e?void 0:e.productPlanInsureVOList)?void 0:a[0])?void 0:t.productFactor,k.value=f([e]))})),u&&O({orderNo:u,tenantId:m}).then((({code:e,data:s})=>{"10000"===e&&(I.value=s)}))})),(e,s)=>(i(),p("div",W,[c(V,{ref_key:"trialRef",ref:j,"product-collection":n(v),"default-value":n(I),"product-factor":n(L),"is-trial":"","hide-benefit":"",onAddRisk:U,onAddMainRisk:F,onDeleteRisk:$},{trialBtn:l((({riskPremium:e})=>[c(A,{premium:e.initialPremium,onClick:g(z,["stop"])},null,8,["premium","onClick"])])),_:1},8,["product-collection","default-value","product-factor"]),n(w)?(i(),r(Q,{key:0,type:n(h),show:n(w),"insured-list":n(C),title:n(x),"main-risk-code":n(R).riskCode,onCancel:M,onConfirm:S},null,8,["type","show","insured-list","title","main-risk-code"])):P("",!0)]))}});export{Y as default};
