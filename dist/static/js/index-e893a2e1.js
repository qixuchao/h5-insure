import{_ as e,d as i,j as t,i as a,h as s,r,k as l,aH as u,aI as o,T as d,z as n,aG as c,O as p,aJ as f,o as v,c as m,g as k,a as L,b as y,u as h,m as R,f as g,F as C,q as I,w as b,e as P,a8 as D,aK as O,aL as V,aM as j,aN as T,a6 as S,aO as E,aP as M,aQ as _,aR as F,aE as w,aF as A}from"./index-92d58610.js";import{c as x}from"./cloneDeep-2bf850e6.js";import{_ as N}from"./InsureInfos-eae8044f.js";import{P as $}from"./index-c6ba43c1.js";import{P as K,R as q,b as B}from"./trial-af8b587f.js";import{_ as U,P as Q,B as H}from"./constants-93905107.js";import{u as J,c as G,p as z,d as Y,e as W,q as X}from"./trial-834d1281.js";import{P as Z}from"./config-98e8d477.js";import{u as ee}from"./useOrder-7e0808ba.js";import{t as ie}from"./utils-e7c1d3a1.js";import{n as te}from"./nextStep-cbf392d5.js";import"./PolicyInfo-7b759ecf.js";import{t as ae}from"./format-31cde443.js";import"./index-85b786dc.js";import"./index-72f92f89.js";import"./infoCollection-1c4d8b24.js";import"./product-7bbf9c44.js";import"./lodash-f8ff7be6.js";import"./questionnaire-42dcb602.js";import"./util-f1eef9c0.js";import"./createProposal-e5f12836.js";import"./core-6256aa3e.js";import"./constants-4b08cf92.js";const se=(e,i)=>{const t=[],a={};return null==e||e.forEach((e=>{a[e.riskId]=e})),null==i||i.forEach((e=>{var i,s,r,l;const{collocationType:u,collocationRiskId:o,riskId:d}=e;switch(u){case 2:{const e=null==(i=a[d])?void 0:i.riskName,r=null==(s=a[o])?void 0:s.riskName;t.push(`${e} 和 ${r} 必须同时投保`);break}case 3:{const e=null==(r=a[d])?void 0:r.riskName,i=null==(l=a[o])?void 0:l.riskName;t.push(`${e} 和 ${i} 不能同时投保`);break}}})),t};const re=e=>(w("data-v-3696b75b"),e=e(),A(),e),le={class:"com-body"},ue={class:"trial-body"},oe={class:"container"},de={class:"container"},ne={key:0,class:"product-list"},ce={key:0,class:"operate-bar"},pe=["onClick"],fe=["onClick"],ve={class:"premium-item"},me=re((()=>L("span",{class:"label"},"首期保费",-1))),ke={class:"price"},Le={key:1,class:"add-main-risk"},ye=re((()=>L("div",{class:"empty"},null,-1))),he=i({name:"TrialBodyLian"});var Re=e(i({...he,props:{selfKey:{default:""},dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:"",planList:[]})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},isTrial:{type:Boolean,default:!1},defaultOrder:{default:()=>({})},productCollection:{default:()=>({})},productFactor:{default:()=>({})},productRiskCodeMap:{default:()=>({})}},emits:["trialStart","trialEnd","update:userData","closeCustomerPopoup","addRisk","addMainRisk","deleteRisk","update-bank"],setup(e,{expose:i,emit:w}){const A=e,re=t(null),he=a();s();const{tenantId:Re,templateId:ge,preview:Ce}=he.query,Ie=t(),be=r({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskList:{},mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1,isQuerying:!1,currentPlanCode:""}),Pe=ee();t();const De=t(),Oe=t(A.dataSource),Ve=t([]),je=t(),Te=t(),Se=t({}),Ee=l((()=>{var e;let i=!1;return((null==(e=A.productRiskCodeMap)?void 0:e.productList)||[]).forEach((e=>{e.mergeRiskReqList.find((e=>1===e.exemptType))&&(i=!0)})),i})),Me=t({}),_e=u((async(e,i=!0)=>{be.trialMsg="试算中...",be.trialResultPremium=0,be.loading=!0,w("trialStart");let t=!1;if(i){const{code:i}=await J(e);t="10000"===i}!t&&i||(be.isQuerying=!0,A.hideBenefit||G(e).then((e=>{e.data&&e.code===o&&(Me.value=e.data)})).finally((()=>{be.loading=!1})),z(e).then((({code:i,data:t})=>{var a,s;t&&i===o&&((null==t?void 0:t.errorInfo)&&d(`${null==t?void 0:t.errorInfo}`),be.trialMsg="",be.trialResultPremium=t.initialPremium,be.trialResult=t,null==(s=null==(a=t.insuredPremiumList)?void 0:a[0])||s.productPremiumList.forEach((e=>{Se.value[e.productCode]=e.riskPremiumDetailVOList})),w("trialEnd",t,e))})).finally((()=>{be.loading=!1,be.isQuerying=!1})))}),500),Fe=l((()=>{var e,i;return![K.SINGLE_PRODUCT,K.TWO_PRODUCT].includes(null==(i=null==(e=Object.values(A.productCollection))?void 0:e[0])?void 0:i.productClass)})),we=()=>{w("addMainRisk",be.userData.insuredList)},Ae=e=>{const{holder:i,insuredList:t}=e||{};i&&(be.submitData.holder=i),t&&t.length>0&&t.forEach(((e,i)=>{var t;be.submitData.insuredList&&be.submitData.insuredList.length>i?be.submitData.insuredList[i]=e:((null==(t=be.submitData)?void 0:t.insuredList)||(be.submitData.insuredList=[]),be.submitData.insuredList.push(e))}))},xe=l((()=>A.productInfo.planList&&A.productInfo.planList.length>2)),Ne=(e,i)=>{if(e){const t=["birthday","age","gender","id"];i.includes("occupationCodeList")&&t.push("occupationClass"),Object.keys(e).forEach((a=>{[...i,...t].includes(a)||(e[a]=null)}))}},$e=(e,i=(e=>!0))=>V(e)?e.filter(i).map((e=>e.code)):[],Ke=()=>{console.log("--current plan = ",Oe.value),console.log("---current submit = ",be.submitData);const e=x(be.submitData);if(!xe.value)return e;const{1:i,2:t,3:a}=Oe.value.productFactor||{};if(e.holder&&Ne(e.holder,$e(i)),e.insuredList){const i=["productList","beneficiaryList"],s=$e(t,(e=>"2"!==String(e.subModuleType))),r=$e(t,(e=>"2"===String(e.subModuleType))),l=V(r),u=$e(a),o=V(u);e.insuredList.forEach(((e,t)=>{var a,d,n;Ne(e,[...t>=1&&l?r:s,...i,...o?["insuredBeneficiaryType"]:[]]),(null==(a=e.beneficiaryList)?void 0:a.length)>0&&(o?e.beneficiaryList.forEach((e=>Ne(e,u))):e.beneficiaryList.length=0),e.planCode=Oe.value.planCode;const c=(null==(n=null==(d=e.productList)?void 0:d[0])?void 0:n.riskList)||[],p=Oe.value.insureProductRiskVOList||[];if(c.length&&p){const i=c.filter((e=>null!==p.find((i=>i.riskCode===e.riskCode))));e.productList[0].riskList=i}}))}return e},qe=["annuityDrawDate","coveragePeriod","chargePeriod","paymentFrequency"],Be=()=>{var e,i,t,a,s;if(!(null==(e=Object.keys(Te.value))?void 0:e.length)||be.ifPersonalInfoSuccess||(null==(t=null==(i=Ie.value)?void 0:i.canTrail)?void 0:t.call(i))){be.submitData.tenantId=`${Re}`,(null==(a=be.submitData.insuredList)?void 0:a.length)&&(be.submitData.insuredList=null==(s=be.submitData)?void 0:s.insuredList.map((e=>({...e,productList:null==e?void 0:e.productList.map((e=>({...e,riskList:be.riskList[e.productCode]})))}))));const e=Ke();console.log(">>>数据构建<<<",e),_e(e)}},Ue=async e=>{var i,t,a;console.log("人的信息更改了"),Ae(e),be.ifPersonalInfoSuccess=!0,console.log("处理第一被保人修改的dy变化"),(null==(a=null==(t=null==(i=be.userData.insuredList)?void 0:i[0])?void 0:t.productList)?void 0:a.length)&&Be()};l((()=>{var e;return((null==(e=be.userData)?void 0:e.insuredList)||[]).map((e=>e.birthday)).join(",")})),n([()=>{var e;return((null==(e=be.userData)?void 0:e.insuredList)||[]).map((e=>e.birthday)).join(",")},()=>je.value],(async([e])=>{if(e){const e=be.userData.insuredList.filter((e=>e.birthday))||[];if(!e.length)return;const i=Object.keys(je.value).map((e=>({productCode:e,planCode:"",riskEditVOList:je.value[e].productPlanInsureVOList[0].insureProductRiskVOList.map((e=>({insureProductRiskVO:e})))})));await Y({calcProductFactorList:i,insuredVOList:e,holderVO:be.userData.holder})}}),{});const Qe=async(e,i,t)=>{if(i){const a=x(e);delete a.insurancePeriodValueList,delete a.paymentFrequencyList,delete a.paymentPeriodValueList;if(qe.indexOf(i.key)>=0&&`${i.oldValue}`!=`${i.newValue}`){const s={};switch(i.key){case"annuityDrawDate":s.changeType=3;break;case"coveragePeriod":s.changeType=2;break;case"chargePeriod":s.changeType=1;break;case"paymentFrequency":s.changeType=4}const r=((e,i,t)=>{var a,s;let r=null,l=null,u=null,o=null;if(t===q.RIDER_RISK){const t=null==(a=je.value[e].productPlanInsureVOList)?void 0:a[0].insureProductRiskVOList.find((e=>e.riskCode===i)),{mainRiskCode:s,productRiskInsureLimitVO:d}=t,{paymentPeriodRule:n,paymentTypeRule:c,insurancePeriodRule:p}=d||{};r=n,l=c,u=p,o=s}return null==(s=je.value[e].productPlanInsureVOList)?void 0:s[0].insureProductRiskVOList.filter((e=>{if(t===q.MAIN_RISK){const{paymentPeriodRule:i,paymentTypeRule:t,insurancePeriodRule:a}=e.productRiskInsureLimitVO||{};r=i,l=t,u=a}return!(t!==q.MAIN_RISK||e.mainRiskCode!==i||![r,l,u].includes(B.MAIN_RISK_SAME)&&![r,l,u].includes(B.MAIN_RISK_1))||!(t===q.MAIN_RISK||e.riskCode!==i&&e.riskCode!==o||![r,l,u].includes(B.MAIN_RISK_SAME)&&![r,l,u].includes(B.MAIN_RISK_1))||e.riskCode===i}))})(t,e.riskCode,e.riskType).flat(),l=(r||[]).map((i=>i.riskCode!==e.riskCode?{insureProductRiskVO:i,insureRiskEditReqVO:null}:{insureProductRiskVO:i,insureRiskEditReqVO:{riskId:e.riskId,riskCode:e.riskCode,...a,...s}}));be.isQuerying=!0;const u=be.userData.insuredList.filter((e=>e.birthday))||[];if(!u.length)return!1;const o=await Y({calcProductFactorList:[{planCode:Oe.value.planCode,productCode:t,riskEditVOList:l}],insuredVOList:u,holderVO:be.userData.holder});be.isQuerying=!1;const d=((e,i)=>{var t,a,s,r,l,u,o,d;const n=x(e);if(null==(a=null==(t=null==n?void 0:n.data)?void 0:t[0])?void 0:a.productRiskDyInsureFactorVOList){const e=[];if(null==(l=null==(r=null==(s=je.value[i])?void 0:s.productPlanInsureVOList)?void 0:r[0])||l.insureProductRiskVOList.forEach((t=>{var a,s,r,l,u;const o=null==(s=null==(a=null==n?void 0:n.data)?void 0:a[0])?void 0:s.productRiskDyInsureFactorVOList.find((e=>e.riskCode===t.riskCode));if(t.exemptFlag===S.YES&&(o.chargePeriod=null==(r=o.paymentPeriodValueList)?void 0:r[0].code,o.coveragePeriod=null==(l=o.insurancePeriodValueList)?void 0:l[0].code,o.paymentFrequency=null==(u=o.paymentFrequencyList)?void 0:u[0].code),o){t.productRiskInsureLimitVO={...t.productRiskInsureLimitVO,...o};const a=be.riskList[i].find((e=>e.riskCode===t.riskCode));Z.forEach((e=>{var i;if(qe.indexOf(e.valueKey)>=0){const s=t.productRiskInsureLimitVO[null==(i=e.configKey)?void 0:i[0]];if(s&&a){const i=s.find((i=>i.code===a[e.valueKey]));if(i&&2===i.useFlag){const i=s.find((e=>1===e.defaultFlag));a[e.valueKey]=i.code}}}})),e.push({...a,...o,riskCode:t.riskCode})}})),e.length>0&&(null==(d=null==(o=null==(u=be.defaultValue)?void 0:u.insuredList)?void 0:o[0])?void 0:d.productList))return e.forEach((e=>{var i,t,a;null==(a=null==(t=null==(i=be.defaultValue)?void 0:i.insuredList)?void 0:t[0])||a.productList.map((i=>(i.riskList=null==i?void 0:i.riskList.map((i=>i.riskCode===e.riskCode?e:i)),i)))})),!1}return!0})(o,t);return d||(be.isAutoChange=!0),d}}return!0},He=e=>{be.userData=e,be.defaultValue=e},Je=async e=>{A.defaultData?(He(A.defaultData),Ae(A.defaultData)):(Ve.value.push(Oe.value.planCode),await(async()=>{var e;const i=await X({calcProductFactorList:[{productCode:null==(e=Object.keys(A.productCollection))?void 0:e[0]}]});i.data&&(He(i.data),Ae(i.data))})())};c((()=>{var e,i;be.riskIsInsure={},null==(i=null==(e=Oe.value)?void 0:e.insureProductRiskVOList)||i.forEach((e=>{var i;const t=null==(i=Oe.value.productRiskRelationVOList)?void 0:i.find((i=>i.collocationRiskId===e.riskId));t&&(be.riskIsInsure[e.riskCode]={selected:"2",data:null,relation:t})}))})),p((()=>{Oe.value=A.dataSource,be.loading=!0,be.show=!0,be.isAniShow=!0,be.isSkipFirstTrial=!0,be.hadSkipFirstTrial=!1}));return i({getTrialSuccessFlag:()=>be.trialResultPremium>0,getRiderRiskDefaultValue:async(e,i,t)=>{var a,s,r;const l=be.riskList[e].find((e=>e.riskCode===t)),{code:u,data:o}=await W({holder:be.userData.holder,insuredList:be.userData.insuredList,calcRiskDefaultFactorVO:{mainRiskInfo:l,riskCodeList:i}});if("10000"===u){let t=0;t=be.riskList[e].findIndex(((e,t)=>e.riskCode===i[0])),be.defaultValue.insuredList[0].productList=null==(r=null==(s=null==(a=be.defaultValue)?void 0:a.insuredList)?void 0:s[0])?void 0:r.productList.map((i=>(e===i.productCode&&(i.riskList=[...i.riskList.slice(0,t),...o,...i.riskList.slice(t,i.riskList.length)]),i)))}},getProductDefaultValue:async e=>{const{code:i,data:t}=await X({calcProductFactorList:e.map((e=>({productCode:e}))),holderVO:be.userData.holder,insuredVOList:be.userData.insuredList});"10000"===i&&(be.defaultValue.insuredList[0].productList=t.insuredList[0].productList,Object.assign(be.userData,t))},validate:()=>Ie.value.validate(!1),validateTrialFields:()=>Ie.value.validateTrialFields(),validateHolder:e=>{var i;return null==(i=Ie.value)?void 0:i.validateHolder(e)},getUserData:()=>({...be.userData}),onShare:e=>{var i;be.trialResultPremium&&(null==(i=re.value)||i.validate().then((()=>{Object.assign(Pe.value,A.defaultOrder,{extInfo:{...Pe.value.extInfo,buttonCode:H.TRIAL_PREMIUM,pageCode:Q.TRIAL_PREMIUM,templateId:ge}});const i=ie(A.productInfo,be.trialResult,Pe.value);te(i,((i,t)=>{t===T.JUMP_PAGE&&(De.value.link=`${window.location.href}&isShare=1&orderNo=${i.orderNo}`,e())})),console.log("---- validate success ----")})))},onNext:e=>{const{productCode:i,productName:t}=A.productInfo;Ce?j(Q.TRIAL_PREMIUM,he.query):be.trialResultPremium&&(Promise.all(re.value.map((e=>e.validate()))).then((()=>{var a,s;Object.assign(Pe.value,A.defaultOrder,{extInfo:{templateId:ge,...null==(a=Pe.value)?void 0:a.extInfo,...(null==(s=A.defaultOrder)?void 0:s.extInfo)||{},buttonCode:H.TRIAL_PREMIUM,pageCode:Q.TRIAL_PREMIUM}});const r=ie({...Ke(),productCode:i,productName:t},be.trialResult,Pe.value);null==e||e(r),console.log("---- validate success ----")})),be.loading=!1,be.show=!0,be.isAniShow=!0)},dealMixData:Ke}),n((()=>be.userData),(e=>{if(e){const{holder:i,insuredList:t}=e||{},a={holder:i,insuredList:t};Object.assign(be.submitData,a),w("update:userData",a)}}),{immediate:!0,deep:!0}),n((()=>A.dataSource),(e=>{Oe.value=e}),{deep:!0,immediate:!0}),n((()=>A.productCollection),((e,i)=>{Object.keys(e||{}).length&&!be.defaultValue&&Je(),je.value=e,Object.keys(e||[]).forEach((i=>{be.riskList[i]=e[i].productPlanInsureVOList[0].insureProductRiskVOList.map((e=>(be.riskList[i]||[]).find((i=>i.riskCode===e.riskCode))||e))}))}),{deep:!0,immediate:!0}),n((()=>A.productFactor),((e,i)=>{Te.value=e,!Object.keys(e).length&&be.userData.holder&&(Object.assign(be.userData.holder,f(be.userData.holder)),Object.assign(be.userData.insuredList[0],f(be.userData.insuredList[0])))}),{deep:!0,immediate:!0}),n((()=>A.defaultData),((e,i)=>{JSON.stringify(x(e))!==JSON.stringify(x(i))&&(be.defaultValue=e,be.userData=e||{},e&&(Pe.value=e||{}))}),{deep:!0,immediate:!0}),(i,t)=>{var a,s,r;const l=E,u=M,o=_,d=F;return v(),m("div",le,[k(i.$slots,"trialHead",{},void 0,!0),L("div",ue,[y(U,{labels:h(se)((null==(a=Oe.value)?void 0:a.insureProductRiskVOList)||[],Oe.value.productRiskRelationVOList)},null,8,["labels"]),L("div",oe,[(null==(s=Object.keys(Te.value))?void 0:s.length)?(v(),R($,{ref_key:"personalInfoRef",ref:Ie,key:Oe.value.planCode,modelValue:h(be).userData,"onUpdate:modelValue":t[0]||(t[0]=e=>h(be).userData=e),"is-holder-exempt":h(Ee),"is-trial":e.isTrial,"product-factor":Te.value,"multi-insured-config":null==(r=Oe.value)?void 0:r.multiInsuredConfigVO,onTrailChange:Ue,onUpdateBank:t[1]||(t[1]=e=>i.$emit("update-bank",e))},null,8,["modelValue","is-holder-exempt","is-trial","product-factor","multi-insured-config"])):g("",!0)]),k(i.$slots,"middleInfo",{},void 0,!0),y(l,{size:"large"}),L("div",de,[y(u,{title:"保障计划",class:"insurePlan","show-divider":!1}),Object.keys(je.value).length?(v(),m("div",ne,[(v(!0),m(C,null,I(Object.keys(je.value),((i,t)=>(v(),m("div",{key:i,class:"product-item"},[(v(!0),m(C,null,I(je.value[i].productPlanInsureVOList[0].insureProductRiskVOList||[],((a,s)=>{var r,l,u,d,n,c,p,f,k,R,C,I;return v(),m("div",{key:`${i}-${a.riskCode}`,class:"risk-item"},[y(o,{title:a.riskName,"risk-type":a.riskType},{default:b((()=>[e.isTrial?(v(),m("div",ce,[a.riskType===h(q).MAIN_RISK?(v(),m("div",{key:0,class:"add-risk btn",onClick:e=>((e,i)=>{const t=be.riskList[e].find((e=>e.riskCode===i));w("addRisk",e,t,be.userData.insuredList)})(i,a.riskCode)}," +附加险 ",8,pe)):g("",!0),L("div",{class:"delete-risk btn",onClick:e=>((e,i,t)=>{O.confirm({message:"删除后将无法恢复，是否需要删除该产品？"}).then((()=>{var a,s;i?(be.defaultValue.insuredList[0].productList=be.defaultValue.insuredList[0].productList.map((i=>(i.productCode===e&&(i.riskList=i.riskList.filter((e=>e.riskCode!==t))),i))),be.userData.insuredList[0].productList=be.userData.insuredList[0].productList.map((i=>(i.productCode===e&&(i.riskList=i.riskList.filter((e=>e.riskCode!==t))),i)))):(be.defaultValue.insuredList[0].productList=be.defaultValue.insuredList[0].productList.filter((i=>i.productCode!==e)),be.userData.insuredList[0].productList=be.userData.insuredList[0].productList.filter((i=>i.productCode!==e))),(null==(s=null==(a=be.userData.insuredList[0])?void 0:a.productList)?void 0:s.length)?_e(be.userData):be.trialResult={initialPremium:0,initialAmount:0},w("deleteRisk",e,t,i)}))})(i,a.mainRiskCode,a.riskCode)}," 删除 ",8,fe)])):g("",!0)])),_:2},1032,["title","risk-type"]),y(N,{ref_for:!0,ref_key:"insureInfosRef",ref:re,"origin-data":a,"product-factor":Oe.value.productFactor,"default-value":h(be).defaultValue?null==(c=null==(n=null==(d=null==(u=null==(l=null==(r=h(be).defaultValue)?void 0:r.insuredList)?void 0:l[0])?void 0:u.productList)?void 0:d[t])?void 0:n.riskList)?void 0:c[s]:null,"trial-result":null==(k=null==(f=null==(p=Se.value)?void 0:p[i])?void 0:f[s])?void 0:k.initialAmount,onTrialChange:(e,t)=>(async(e,i,t)=>{var a,s,r;if((null==(s=null==(a=be.riskList)?void 0:a[t])?void 0:s.find((i=>i.riskCode===e.riskCode)))?be.riskList[t]=be.riskList[t].map((i=>i.riskCode===e.riskCode?e:i)):(null==(r=be.riskList[t])?void 0:r.length)?be.riskList[t].push(e):be.riskList[t]=[e],e.exemptFlag!==S.YES&&!(await Qe(e,i,t)))return;console.log("标准险种的信息回传",e),Be()})(e,t,i)},null,8,["origin-data","product-factor","default-value","trial-result","onTrialChange"]),L("div",ve,[me,L("span",ke,P(h(ae)(null==(I=null==(C=null==(R=Se.value)?void 0:R[i])?void 0:C[s])?void 0:I.initialPremium)),1)])])})),128))])))),128))])):g("",!0),h(Fe)&&e.isTrial?(v(),m("div",Le,[y(d,{activated:"",onClick:we},{default:b((()=>[D("+新增主险")])),_:1})])):g("",!0)]),ye]),k(i.$slots,"trialBtn",{trialData:h(be).submitData,riskPremium:h(be).trialResult,loading:h(be).isQuerying,personalInfoRef:Ie.value},void 0,!0)])}}}),[["__scopeId","data-v-3696b75b"]]);export{Re as default};
