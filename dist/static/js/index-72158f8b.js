import{_ as e,d as i,j as t,i as s,h as a,r,k as l,be as u,bf as o,T as d,E as n,bc as c,l as p,ap as v,o as f,c as k,g as m,a as L,b as h,u as y,p as R,f as g,F as I,s as C,bg as b,bh as P,w as D,e as O,v as V,bi as T,ao as j,bj as S,bk as M,aY as E,bl as _,ar as w,bm as F,bn as A,bo as N,bp as x,ag as $}from"./index-ce7a290e.js";import{_ as K}from"./InsureInfos-8e5168c3.js";import{P as B}from"./index-0a5ea46a.js";import{P as q,R as U,a as Q}from"./trial-9ea40275.js";import{_ as H}from"./PolicyInfo-2232742a.js";import{u as J,b as Y,p as G,a as z,c as W,q as X}from"./trial-a0c05bd8.js";import{P as Z,B as ee,a as ie}from"./constants-6ad2f07c.js";import{u as te}from"./useOrder-5f7ec629.js";import{t as se}from"./utils-740a92ac.js";import{n as ae}from"./nextStep-0a06bb8f.js";import{t as re}from"./format-31cde443.js";import{c as le}from"./cloneDeep-f47385c4.js";import"./index-c816dd65.js";import"./infoCollection-faf37129.js";import"./product-7bbf9c44.js";import"./questionnaire-42dcb602.js";import"./util-11a9a35f.js";import"./createProposal-8cd6cbd5.js";import"./core-2f106181.js";const ue=(e,i)=>{const t=[],s={};return null==e||e.forEach((e=>{s[e.riskId]=e})),null==i||i.forEach((e=>{var i,a,r,l;const{collocationType:u,collocationRiskId:o,riskId:d}=e;switch(u){case 2:{const e=null==(i=s[d])?void 0:i.riskName,r=null==(a=s[o])?void 0:a.riskName;t.push(`${e} 和 ${r} 必须同时投保`);break}case 3:{const e=null==(r=s[d])?void 0:r.riskName,i=null==(l=s[o])?void 0:l.riskName;t.push(`${e} 和 ${i} 不能同时投保`);break}}})),t};const oe=e=>(N("data-v-6bc0ad6d"),e=e(),x(),e),de={class:"com-body"},ne={class:"trial-body"},ce={class:"container"},pe={key:0,class:"container"},ve={key:0,class:"product-list"},fe={class:"operate-bar"},ke=["onClick"],me=["onClick"],Le={key:0,class:"premium-item"},he=oe((()=>L("span",{class:"label"},"首年保费",-1))),ye={class:"price"},Re={key:1,class:"add-main-risk"},ge=oe((()=>L("div",{class:"empty"},null,-1))),Ie=i({name:"TrialBodyLian"});var Ce=e(i({...Ie,props:{selfKey:{default:""},dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:"",planList:[]})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},isTrial:{type:Boolean,default:!1},defaultOrder:{default:()=>({})},productCollection:{default:()=>({})},productFactor:{default:()=>({})},productRiskCodeMap:{default:()=>({})},updateRiskCode:{default:""},pageLoading:{type:Boolean,default:!1},showPersonInfo:{type:Boolean,default:!1}},emits:["trialStart","trialEnd","update:userData","closeCustomerPopoup","addRisk","addMainRisk","deleteRisk","update-bank"],setup(e,{expose:i,emit:N}){const x=e,oe=t(null),Ie=s();a();const{tenantId:Ce,templateId:be,preview:Pe}=Ie.query,De=t(),Oe=r({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskList:{},mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1,isQuerying:!1,currentPlanCode:""}),Ve=te();t();const Te=t(),je=t(x.dataSource),Se=t([]),Me=t(),Ee=t(),_e=t({}),we=l((()=>{var e;let i=!1;return((null==(e=x.productRiskCodeMap)?void 0:e.productList)||[]).forEach((e=>{e.mergeRiskReqList.find((e=>1===e.exemptType))&&(i=!0)})),i})),Fe=t({}),Ae=u((async(e,i=!0)=>{Oe.trialMsg="试算中...",Oe.trialResultPremium=0,Oe.loading=!0,N("trialStart");let t=!1;if(i){const{code:i}=await J(e);t="10000"===i}!t&&i||(Oe.isQuerying=!0,x.hideBenefit||Y(e).then((e=>{e.data&&e.code===o&&(Fe.value=e.data)})).finally((()=>{Oe.loading=!1})),G(e).then((({code:i,data:t})=>{var s,a;t&&i===o?((null==t?void 0:t.errorInfo)&&d(`${null==t?void 0:t.errorInfo}`),Oe.trialMsg="",Oe.trialResultPremium=t.initialPremium,Oe.trialResult=t,null==(a=null==(s=t.insuredPremiumList)?void 0:s[0])||a.productPremiumList.forEach((e=>{_e.value[e.productCode]=e.riskPremiumDetailVOList})),N("trialEnd",t,e)):(Oe.trialResultPremium=null,Oe.trialResult={},_e.value={})})).finally((()=>{Oe.loading=!1,Oe.isQuerying=!1})))}),500),Ne=l((()=>{var e,i;return![q.SINGLE_PRODUCT,q.TWO_PRODUCT].includes(null==(i=null==(e=Object.values(x.productCollection))?void 0:e[0])?void 0:i.productClass)})),xe=()=>{N("addMainRisk",Oe.userData.insuredList)},$e=e=>{const{holder:i,insuredList:t}=e||{};i&&(Oe.submitData.holder=i),t&&t.length>0&&t.forEach(((e,i)=>{var t;Oe.submitData.insuredList&&Oe.submitData.insuredList.length>i?Oe.submitData.insuredList[i]=e:((null==(t=Oe.submitData)?void 0:t.insuredList)||(Oe.submitData.insuredList=[]),Oe.submitData.insuredList.push(e))}))},Ke=l((()=>x.productInfo.planList&&x.productInfo.planList.length>2)),Be=(e,i)=>{if(e){const t=["birthday","age","gender","id"];i.includes("occupationCodeList")&&t.push("occupationClass"),Object.keys(e).forEach((s=>{[...i,...t].includes(s)||(e[s]=null)}))}},qe=(e,i=(e=>!0))=>j(e)?e.filter(i).map((e=>e.code)):[],Ue=()=>{console.log("--current plan = ",je.value),console.log("---current submit = ",Oe.submitData);const e=le(Oe.submitData);if(!Ke.value)return e;const{1:i,2:t,3:s}=je.value.productFactor||{};if(e.holder&&Be(e.holder,qe(i)),e.insuredList){const i=["productList","beneficiaryList"],a=qe(t,(e=>"2"!==String(e.subModuleType))),r=qe(t,(e=>"2"===String(e.subModuleType))),l=j(r),u=qe(s),o=j(u);e.insuredList.forEach(((e,t)=>{var s,d,n;Be(e,[...t>=1&&l?r:a,...i,...o?["insuredBeneficiaryType"]:[]]),(null==(s=e.beneficiaryList)?void 0:s.length)>0&&(o?e.beneficiaryList.forEach((e=>Be(e,u))):e.beneficiaryList.length=0),e.planCode=je.value.planCode;const c=(null==(n=null==(d=e.productList)?void 0:d[0])?void 0:n.riskList)||[],p=je.value.insureProductRiskVOList||[];if(c.length&&p){const i=c.filter((e=>null!==p.find((i=>i.riskCode===e.riskCode))));e.productList[0].riskList=i}}))}return e},Qe=["annuityDrawDate","coveragePeriod","chargePeriod","paymentFrequency"],He=()=>{var e,i,t,s,a,r,l;if(!(null==(e=Object.keys(Ee.value))?void 0:e.length)||Oe.ifPersonalInfoSuccess||(null==(t=null==(i=De.value)?void 0:i.canTrail)?void 0:t.call(i))){Oe.submitData.tenantId=`${Ce}`,(null==(s=Oe.submitData.insuredList)?void 0:s.length)&&(Oe.submitData.insuredList=null==(a=Oe.submitData)?void 0:a.insuredList.map((e=>({...e,productList:((null==e?void 0:e.productList)||[]).map((e=>({...e,riskList:Oe.riskList[e.productCode]})))}))));const e=Ue();console.log(">>>数据构建<<<",e),(null==(l=null==(r=e.insuredList[0])?void 0:r.productList)?void 0:l.length)&&Ae(e)}},Je=async e=>{var i,t,s;console.log("人的信息更改了"),$e(e),Oe.ifPersonalInfoSuccess=!0,console.log("处理第一被保险人修改的dy变化"),(null==(s=null==(t=null==(i=Oe.userData.insuredList)?void 0:i[0])?void 0:t.productList)?void 0:s.length)&&He()};l((()=>{var e;return((null==(e=Oe.userData)?void 0:e.insuredList)||[]).map((e=>e.birthday)).join(",")})),n([()=>{var e;return((null==(e=Oe.userData)?void 0:e.insuredList)||[]).map((e=>e.birthday)).join(",")},()=>Me.value],(async([e])=>{if(e){const e=Oe.userData.insuredList.filter((e=>e.birthday))||[];if(!e.length)return;const i=Object.keys(Me.value).map((e=>({productCode:e,planCode:"",riskEditVOList:Me.value[e].productPlanInsureVOList[0].insureProductRiskVOList.map((e=>({insureProductRiskVO:e})))})));await z({calcProductFactorList:i,insuredVOList:e,holderVO:Oe.userData.holder})}}),{});const Ye=async(e,i,t)=>{if(i){const s=le(e);delete s.insurancePeriodValueList,delete s.paymentFrequencyList,delete s.paymentPeriodValueList;if(Qe.indexOf(i.key)>=0&&`${i.oldValue}`!=`${i.newValue}`){const a={};switch(i.key){case"annuityDrawDate":a.changeType=3;break;case"coveragePeriod":a.changeType=2;break;case"chargePeriod":a.changeType=1;break;case"paymentFrequency":a.changeType=4}const r=((e,i,t)=>{var s,a;let r=null,l=null,u=null,o=null;if(t===U.RIDER_RISK){const t=null==(s=Me.value[e].productPlanInsureVOList)?void 0:s[0].insureProductRiskVOList.find((e=>e.riskCode===i)),{mainRiskCode:a,productRiskInsureLimitVO:d}=t,{paymentPeriodRule:n,paymentTypeRule:c,insurancePeriodRule:p}=d||{};r=n,l=c,u=p,o=a}return null==(a=Me.value[e].productPlanInsureVOList)?void 0:a[0].insureProductRiskVOList.filter((e=>{if(t===U.MAIN_RISK){const{paymentPeriodRule:i,paymentTypeRule:t,insurancePeriodRule:s}=e.productRiskInsureLimitVO||{};r=i,l=t,u=s}return!(t!==U.MAIN_RISK||e.mainRiskCode!==i||![r,l,u].includes(Q.MAIN_RISK_SAME)&&![r,l,u].includes(Q.MAIN_RISK_1))||!(t===U.MAIN_RISK||e.riskCode!==i&&e.riskCode!==o||![r,l,u].includes(Q.MAIN_RISK_SAME)&&![r,l,u].includes(Q.MAIN_RISK_1))||e.riskCode===i}))})(t,e.riskCode,e.riskType).flat(),l=(r||[]).map((i=>i.riskCode!==e.riskCode?{insureProductRiskVO:i,insureRiskEditReqVO:null}:{insureProductRiskVO:i,insureRiskEditReqVO:{riskId:e.riskId,riskCode:e.riskCode,...s,...a}}));Oe.isQuerying=!0;const u=Oe.userData.insuredList.filter((e=>e.age||e.birthday))||[];if(!u.length)return!1;const o=await z({calcProductFactorList:[{planCode:je.value.planCode,productCode:t,riskEditVOList:l}],insuredVOList:u,holderVO:Oe.userData.holder});Oe.isQuerying=!1;const n=((e,i)=>{var t,s,a,r,l,u,o,n,c,p;const v=le(e);if(null==(s=null==(t=null==v?void 0:v.data)?void 0:t[0])?void 0:s.productRiskDyInsureFactorVOList){const e=[];if(null==(l=null==(r=null==(a=Me.value[i])?void 0:a.productPlanInsureVOList)?void 0:r[0])||l.insureProductRiskVOList.forEach((t=>{var s,a,r,l,u;const o=null==(a=null==(s=null==v?void 0:v.data)?void 0:s[0])?void 0:a.productRiskDyInsureFactorVOList.find((e=>e.riskCode===t.riskCode));if(t.exemptFlag===E.YES&&(null==o?void 0:o.mainRiskCode)&&(o.chargePeriod=null==(r=o.paymentPeriodValueList)?void 0:r[0].code,o.coveragePeriod=null==(l=o.insurancePeriodValueList)?void 0:l[0].code,o.paymentFrequency=null==(u=o.paymentFrequencyList)?void 0:u[0].code),o){t.productRiskInsureLimitVO={...t.productRiskInsureLimitVO,...o};const s=Oe.riskList[i].find((e=>e.riskCode===t.riskCode));ie.forEach((e=>{var i;if(Qe.indexOf(e.valueKey)>=0){const a=t.productRiskInsureLimitVO[null==(i=e.configKey)?void 0:i[0]];if(a&&s){const i=a.find((i=>i.code===s[e.valueKey]));if(i&&2===i.useFlag){const i=a.find((e=>1===e.defaultFlag));s[e.valueKey]=i.code}}}})),e.push({...s,...o,riskCode:t.riskCode})}})),e.length>0&&(null==(n=null==(o=null==(u=Oe.defaultValue)?void 0:u.insuredList)?void 0:o[0])?void 0:n.productList))return e.forEach((e=>{var i,t,s;null==(s=null==(t=null==(i=Oe.defaultValue)?void 0:i.insuredList)?void 0:t[0])||s.productList.map((i=>(i.riskList=null==i?void 0:i.riskList.map((i=>i.riskCode===e.riskCode?e:i)),i)))})),!1}return d(null==(p=null==(c=null==v?void 0:v.data)?void 0:c[0])?void 0:p.errorMessage),!0})(o,t);return n||(Oe.isAutoChange=!0),n}}return!0},Ge=e=>{Oe.userData=e,Oe.defaultValue=e},ze=async e=>{var i;!x.defaultData||x.defaultData&&x.showPersonInfo?(Se.value.push(je.value.planCode),await(async e=>{var i;const t=await X({calcProductFactorList:[{productCode:null==(i=Object.keys(x.productCollection))?void 0:i[0]}],...e});if(t.data){const{holder:i,insuredList:s}=t.data,a={holder:x.showPersonInfo?i:v(i),insuredList:x.showPersonInfo?[$(e.insuredVOList[0],s[0],{certType:null})]:s.map((e=>({...v(e),productList:e.productList})))};Ge(a),$e(a)}})({insuredVOList:(null==(i=x.defaultData)?void 0:i.insuredList)||[]})):(Ge(x.defaultData),$e(x.defaultData))};c((()=>{var e,i;Oe.riskIsInsure={},null==(i=null==(e=je.value)?void 0:e.insureProductRiskVOList)||i.forEach((e=>{var i;const t=null==(i=je.value.productRiskRelationVOList)?void 0:i.find((i=>i.collocationRiskId===e.riskId));t&&(Oe.riskIsInsure[e.riskCode]={selected:"2",data:null,relation:t})}))})),p((()=>{je.value=x.dataSource,Oe.loading=!0,Oe.show=!0,Oe.isAniShow=!0,Oe.isSkipFirstTrial=!0,Oe.hadSkipFirstTrial=!1}));return i({getTrialSuccessFlag:()=>Oe.trialResultPremium>0,getRiderRiskDefaultValue:async(e,i,t,s)=>{var a,r,l;const u=Oe.riskList[e].find((e=>e.riskCode===t)),{code:o,data:n}=await W({holder:Oe.userData.holder,insuredList:Oe.userData.insuredList,calcRiskDefaultFactorVO:{mainRiskInfo:u,riskCodeList:i}});if("10000"===o){let t=0;t=s.findIndex(((e,t)=>e.riskCode===i[0]));const u=[],o=n.reduce(((e,i)=>i.errorMessage?(u.push(`${i.riskName}${i.errorMessage}`),e):(e.push(i),e)),[]);u.length&&d(u.join("\n")),Oe.defaultValue.insuredList[0].productList=null==(l=null==(r=null==(a=Oe.defaultValue)?void 0:a.insuredList)?void 0:r[0])?void 0:l.productList.map((i=>(e===i.productCode&&(i.riskList=[...i.riskList.slice(0,t),...o,...i.riskList.slice(t,i.riskList.length)]),i)))}},getProductDefaultValue:async e=>{var i,t;const{code:s,data:a}=await X({calcProductFactorList:e.map((e=>({productCode:e}))),holderVO:Oe.userData.holder,insuredVOList:x.showPersonInfo?x.defaultData.insuredList:Oe.userData.insuredList});if("10000"===s){const{holder:e,insuredList:s}=a,r={...a,holder:x.showPersonInfo?e:v(e),insuredList:x.showPersonInfo?[{...null==(t=null==(i=x.defaultData)?void 0:i.insuredList)?void 0:t[0],...s[0]}]:s.map((e=>({...v(e),productList:e.productList})))};Oe.defaultValue.insuredList[0].productList=s[0].productList,Object.assign(Oe.userData,r)}},validate:()=>De.value.validate(!1),validateTrialFields:()=>De.value.validateTrialFields(),validateHolder:e=>{var i;return null==(i=De.value)?void 0:i.validateHolder(e)},getUserData:()=>({...Oe.userData}),onShare:e=>{var i;Oe.trialResultPremium&&(null==(i=oe.value)||i.validate().then((()=>{Object.assign(Ve.value,x.defaultOrder,{extInfo:{...Ve.value.extInfo,buttonCode:ee.TRIAL_PREMIUM,pageCode:Z.TRIAL_PREMIUM,templateId:be}});const i=se(x.productInfo,Oe.trialResult,Ve.value);ae(i,((i,t)=>{t===M.JUMP_PAGE&&(Te.value.link=`${window.location.href}&isShare=1&orderNo=${i.orderNo}`,e())})),console.log("---- validate success ----")})))},onNext:e=>{var i,t;const{productCode:s,productName:a}=x.productInfo;if(Pe)return void S(Z.TRIAL_PREMIUM,Ie.query);Object.assign(Ve.value,x.defaultOrder,{extInfo:{templateId:be,...null==(i=Ve.value)?void 0:i.extInfo,...(null==(t=x.defaultOrder)?void 0:t.extInfo)||{},buttonCode:ee.TRIAL_PREMIUM,pageCode:Z.TRIAL_PREMIUM}});const r=se({...Ue(),productCode:s,productName:a},Oe.trialResult,Ve.value);null==e||e(r)},dealMixData:Ue}),n((()=>Oe.userData),(e=>{if(e){const{holder:i,insuredList:t}=e||{},s={holder:i,insuredList:t};Object.assign(Oe.submitData,s),N("update:userData",s)}}),{immediate:!0,deep:!0}),n((()=>x.dataSource),(e=>{je.value=e}),{deep:!0,immediate:!0}),n((()=>x.productCollection),((e,i)=>{Object.keys(e||{}).length&&!Oe.defaultValue&&ze(),Me.value=e,Object.keys(e||[]).forEach((i=>{var t,s,a;Oe.riskList[i]=((null==(a=null==(s=null==(t=null==e?void 0:e[i])?void 0:t.productPlanInsureVOList)?void 0:s[0])?void 0:a.insureProductRiskVOList)||[]).map((e=>(Oe.riskList[i]||[]).find((i=>i.riskCode===e.riskCode))||e))}))}),{deep:!0,immediate:!0}),n((()=>x.productFactor),((e,i)=>{Ee.value=e,!Object.keys(e).length&&Oe.userData.holder&&x.isTrial&&(Object.assign(Oe.userData.holder,v(Oe.userData.holder)),Object.assign(Oe.userData.insuredList[0],v(Oe.userData.insuredList[0])))}),{deep:!0,immediate:!0}),n((()=>x.defaultData),((e,i)=>{JSON.stringify(le(e))===JSON.stringify(le(i))||x.showPersonInfo||(Oe.defaultValue=e,Oe.userData=e||{},e&&(Ve.value=e||{}))}),{deep:!0,immediate:!0}),(e,i)=>{var t,s,a;const r=_,l=w,u=F,o=A;return f(),k("div",de,[m(e.$slots,"trialHead",{},void 0,!0),L("div",ne,[h(H,{labels:y(ue)((null==(t=je.value)?void 0:t.insureProductRiskVOList)||[],je.value.productRiskRelationVOList)},null,8,["labels"]),L("div",ce,[(null==(s=Object.keys(Ee.value))?void 0:s.length)?(f(),R(B,{ref_key:"personalInfoRef",ref:De,key:je.value.planCode,modelValue:y(Oe).userData,"onUpdate:modelValue":i[0]||(i[0]=e=>y(Oe).userData=e),"is-holder-exempt":y(we),"is-trial":e.isTrial,"product-factor":Ee.value,"multi-insured-config":null==(a=je.value)?void 0:a.multiInsuredConfigVO,onTrailChange:Je,onUpdateBank:i[1]||(i[1]=i=>e.$emit("update-bank",i))},null,8,["modelValue","is-holder-exempt","is-trial","product-factor","multi-insured-config"])):g("",!0)]),m(e.$slots,"middleInfo",{},void 0,!0),h(r,{size:"large"}),e.pageLoading?g("",!0):(f(),k("div",pe,[h(l,{title:"保障计划",class:"insurePlan","show-divider":!1}),Object.keys(Me.value).length?(f(),k("div",ve,[(f(!0),k(I,null,C(Object.keys(Me.value),((i,t)=>(f(),k("div",{key:i,class:"product-item"},[(f(!0),k(I,null,C(Me.value[i].productPlanInsureVOList[0].insureProductRiskVOList||[],((s,a)=>{var r,l,o,d,n,c,p,v,m,R,I,C,V,j;return b((f(),k("div",{key:`${i}-${s.riskCode}`,class:"risk-item"},[h(u,{title:s.riskName,"risk-type":s.riskType},{default:D((()=>[L("div",fe,[s.riskType===y(U).MAIN_RISK?(f(),k("div",{key:0,class:"add-risk btn",onClick:e=>((e,i)=>{const t=Oe.riskList[e].find((e=>e.riskCode===i));N("addRisk",e,t,Oe.userData.insuredList)})(i,s.riskCode)}," +附加险 ",8,ke)):g("",!0),s.riskType===y(U).RIDER_RISK||s.riskType===y(U).MAIN_RISK&&e.isTrial?(f(),k("div",{key:1,class:"delete-risk btn",onClick:e=>((e,i,t)=>{T.confirm({message:"删除后将无法恢复，是否需要删除该产品？"}).then((()=>{var s,a;i?(Oe.defaultValue.insuredList[0].productList=Oe.defaultValue.insuredList[0].productList.map((i=>(i.productCode===e&&(i.riskList=i.riskList.filter((e=>e.riskCode!==t))),i))),Oe.userData.insuredList[0].productList=Oe.userData.insuredList[0].productList.map((i=>(i.productCode===e&&(i.riskList=i.riskList.filter((e=>e.riskCode!==t))),i)))):(Oe.defaultValue.insuredList[0].productList=Oe.defaultValue.insuredList[0].productList.filter((i=>i.productCode!==e)),Oe.userData.insuredList[0].productList=Oe.userData.insuredList[0].productList.filter((i=>i.productCode!==e))),(null==(a=null==(s=Oe.userData.insuredList[0])?void 0:s.productList)?void 0:a.length)?Ae(Oe.userData):Oe.trialResult={initialPremium:0,initialAmount:0},N("deleteRisk",e,t,i)}))})(i,s.mainRiskCode,s.riskCode)}," 删除 ",8,me)):g("",!0)])])),_:2},1032,["title","risk-type"]),h(K,{ref_for:!0,ref_key:"insureInfosRef",ref:oe,"origin-data":s,"product-factor":je.value.productFactor,"default-value":y(Oe).defaultValue?null==(c=null==(n=null==(d=null==(o=null==(l=null==(r=y(Oe).defaultValue)?void 0:r.insuredList)?void 0:l[0])?void 0:o.productList)?void 0:d[t])?void 0:n.riskList)?void 0:c[a]:null,"trial-result":null==(m=null==(v=null==(p=_e.value)?void 0:p[i])?void 0:v[a])?void 0:m.initialAmount,onTrialChange:(e,t)=>(async(e,i,t)=>{var s,a,r;if((null==(a=null==(s=Oe.riskList)?void 0:s[t])?void 0:a.find((i=>i.riskCode===e.riskCode)))?Oe.riskList[t]=Oe.riskList[t].map((i=>i.riskCode===e.riskCode?e:i)):(null==(r=Oe.riskList[t])?void 0:r.length)?Oe.riskList[t].push(e):Oe.riskList[t]=[e],e.exemptFlag!==E.YES&&!(await Ye(e,i,t)))return;console.log("标准险种的信息回传",e),He()})(e,t,i)},null,8,["origin-data","product-factor","default-value","trial-result","onTrialChange"]),1===(null==(I=null==(R=s.riskDetailResVO)?void 0:R.riskCalcMethodInfoVO)?void 0:I.saleMethod)?(f(),k("div",Le,[he,L("span",ye,O(y(re)(null==(j=null==(V=null==(C=_e.value)?void 0:C[i])?void 0:V[a])?void 0:j.initialPremium)),1)])):g("",!0)])),[[P,!e.updateRiskCode||s.riskCode===e.updateRiskCode]])})),128))])))),128))])):g("",!0),y(Ne)&&e.isTrial?(f(),k("div",Re,[h(o,{activated:"",onClick:xe},{default:D((()=>[V("+新增主险")])),_:1})])):g("",!0)])),ge]),m(e.$slots,"trialBtn",{trialData:y(Oe).submitData,riskPremium:y(Oe).trialResult,loading:y(Oe).isQuerying,personalInfoRef:De.value},void 0,!0)])}}}),[["__scopeId","data-v-6bc0ad6d"]]);export{Ce as default};
