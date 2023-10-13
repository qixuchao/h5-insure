import{d as e,j as i,i as t,h as a,r as s,k as r,aF as l,aG as u,T as d,z as o,aE as n,O as c,o as p,c as v,g as f,a as k,b as m,u as L,m as y,f as h,F as C,q as R,w as I,e as g,aH as D,a8 as P,_ as O,aI as b,aJ as V,aK as T,aL as S,a6 as M,aM as E,aN as _,aO as j,aP as F,aC as w,aD as A}from"./index-98996f16.js";import{c as N}from"./cloneDeep-3c194b69.js";import{_ as x}from"./InsureInfos-ddcd949e.js";import{P as $}from"./index-bb6408fd.js";import{P as K,R as B,b as U}from"./trial-77e9c583.js";import{_ as q,P as Q,B as H}from"./constants-33b12d6b.js";import{u as J,c as G,p as z,d as W,e as Y,q as X}from"./trial-3c79dbb5.js";import{P as Z}from"./config-98e8d477.js";import{u as ee}from"./useOrder-75c654e5.js";import{t as ie}from"./utils-d2eae8da.js";import{n as te}from"./nextStep-f4799624.js";const ae=(e,i)=>{const t=[],a={};return null==e||e.forEach((e=>{a[e.riskId]=e})),null==i||i.forEach((e=>{var i,s,r,l;const{collocationType:u,collocationRiskId:d,riskId:o}=e;switch(u){case 2:{const e=null==(i=a[o])?void 0:i.riskName,r=null==(s=a[d])?void 0:s.riskName;t.push(`${e} 和 ${r} 必须同时投保`);break}case 3:{const e=null==(r=a[o])?void 0:r.riskName,i=null==(l=a[d])?void 0:l.riskName;t.push(`${e} 和 ${i} 不能同时投保`);break}}})),t};const se=e=>(w("data-v-749dddde"),e=e(),A(),e),re={class:"com-body"},le={class:"trial-body"},ue={class:"container"},de={class:"container"},oe={key:0,class:"product-list"},ne={key:0,class:"operate-bar"},ce=["onClick"],pe=["onClick"],ve={class:"premium-item"},fe=se((()=>k("span",{class:"label"},"首期保费",-1))),ke={class:"price"},me={key:1,class:"add-main-risk"},Le=se((()=>k("div",{class:"empty"},null,-1))),ye=e({name:"TrialBodyLian"});var he=O(e({...ye,props:{selfKey:{default:""},dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:"",planList:[]})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},isTrial:{type:Boolean,default:!1},defaultOrder:{default:()=>({})},productCollection:{default:()=>({})},productFactor:{default:()=>({})},productRiskCodeMap:{default:()=>({})}},emits:["trialStart","trialEnd","update:userData","closeCustomerPopoup","addRisk","addMainRisk","deleteRisk","update-bank"],setup(e,{expose:O,emit:w}){const A=e,se=i(null),ye=t();a();const{tenantId:he,templateId:Ce,preview:Re}=ye.query,Ie=i(),ge=s({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskList:{},mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1,isQuerying:!1,currentPlanCode:""}),De=ee();i();const Pe=i(),Oe=i(A.dataSource),be=i([]),Ve=i(),Te=i(),Se=i({}),Me=r((()=>{var e;let i=!1;return((null==(e=A.productRiskCodeMap)?void 0:e.productList)||[]).forEach((e=>{e.mergeRiskReqList.find((e=>1===e.exemptType))&&(i=!0)})),i})),Ee=i({}),_e=l((async(e,i=!0)=>{ge.trialMsg="试算中...",ge.trialResultPremium=0,ge.loading=!0,w("trialStart");let t=!1;if(i){const{code:i}=await J(e);t="10000"===i}!t&&i||(ge.isQuerying=!0,A.hideBenefit||G(e).then((e=>{e.data&&e.code===u&&(Ee.value=e.data)})).finally((()=>{ge.loading=!1})),z(e).then((({code:i,data:t})=>{var a,s;t&&i===u&&((null==t?void 0:t.errorInfo)&&d(`${null==t?void 0:t.errorInfo}`),ge.trialMsg="",ge.trialResultPremium=t.initialPremium,ge.trialResult=t,null==(s=null==(a=t.insuredPremiumList)?void 0:a[0])||s.productPremiumList.forEach((e=>{Se.value[e.productCode]=e.riskPremiumDetailVOList})),w("trialEnd",t,e))})).finally((()=>{ge.loading=!1,ge.isQuerying=!1})))}),500),je=r((()=>{var e,i;return![K.SINGLE_PRODUCT,K.TWO_PRODUCT].includes(null==(i=null==(e=Object.values(A.productCollection))?void 0:e[0])?void 0:i.productClass)})),Fe=()=>{w("addMainRisk",ge.userData.insuredList)},we=e=>{const{holder:i,insuredList:t}=e||{};i&&(ge.submitData.holder=i),t&&t.length>0&&t.forEach(((e,i)=>{var t;ge.submitData.insuredList&&ge.submitData.insuredList.length>i?ge.submitData.insuredList[i]=e:((null==(t=ge.submitData)?void 0:t.insuredList)||(ge.submitData.insuredList=[]),ge.submitData.insuredList.push(e))}))},Ae=r((()=>A.productInfo.planList&&A.productInfo.planList.length>2)),Ne=(e,i)=>{if(e){const t=["birthday","age","gender","id"];i.includes("occupationCodeList")&&t.push("occupationClass"),Object.keys(e).forEach((a=>{[...i,...t].includes(a)||(e[a]=null)}))}},xe=(e,i=(e=>!0))=>V(e)?e.filter(i).map((e=>e.code)):[],$e=()=>{console.log("--current plan = ",Oe.value),console.log("---current submit = ",ge.submitData);const e=N(ge.submitData);if(!Ae.value)return e;const{1:i,2:t,3:a}=Oe.value.productFactor||{};if(e.holder&&Ne(e.holder,xe(i)),e.insuredList){const i=["productList","beneficiaryList"],s=xe(t,(e=>"2"!==String(e.subModuleType))),r=xe(t,(e=>"2"===String(e.subModuleType))),l=V(r),u=xe(a),d=V(u);e.insuredList.forEach(((e,t)=>{var a,o,n;Ne(e,[...t>=1&&l?r:s,...i,...d?["insuredBeneficiaryType"]:[]]),(null==(a=e.beneficiaryList)?void 0:a.length)>0&&(d?e.beneficiaryList.forEach((e=>Ne(e,u))):e.beneficiaryList.length=0),e.planCode=Oe.value.planCode;const c=(null==(n=null==(o=e.productList)?void 0:o[0])?void 0:n.riskList)||[],p=Oe.value.insureProductRiskVOList||[];if(c.length&&p){const i=c.filter((e=>null!==p.find((i=>i.riskCode===e.riskCode))));e.productList[0].riskList=i}}))}return e},Ke=["annuityDrawDate","coveragePeriod","chargePeriod","paymentFrequency"],Be=()=>{var e,i,t,a;if(ge.ifPersonalInfoSuccess||(null==(i=null==(e=Ie.value)?void 0:e.canTrail)?void 0:i.call(e))){ge.submitData.tenantId=`${he}`,(null==(t=ge.submitData.insuredList)?void 0:t.length)&&(ge.submitData.insuredList=null==(a=ge.submitData)?void 0:a.insuredList.map((e=>({...e,productList:null==e?void 0:e.productList.map((e=>({...e,riskList:ge.riskList[e.productCode]})))}))));const e=$e();console.log(">>>数据构建<<<",e),_e(e)}},Ue=l((async e=>{var i,t,a;console.log("人的信息更改了"),we(e),ge.ifPersonalInfoSuccess=!0,console.log("处理第一被保人修改的dy变化"),(null==(a=null==(t=null==(i=ge.userData.insuredList)?void 0:i[0])?void 0:t.productList)?void 0:a.length)&&Be()}),500);r((()=>{var e;return((null==(e=ge.userData)?void 0:e.insuredList)||[]).map((e=>e.birthday)).join(",")})),o((()=>{var e;return((null==(e=ge.userData)?void 0:e.insuredList)||[]).map((e=>e.birthday)).join(",")}),l((async e=>{if(e){const e=ge.userData.insuredList.filter((e=>e.birthday))||[];if(!e.length)return;const i=Object.keys(Ve.value).map((e=>({productCode:e,planCode:"",riskEditVOList:Ve.value[e].productPlanInsureVOList[0].insureProductRiskVOList.map((e=>({insureProductRiskVO:e})))})));await W({calcProductFactorList:i,insuredVOList:e,holderVO:ge.userData.holder})}})),{});const qe=async(e,i,t)=>{if(i){const a=N(e);delete a.insurancePeriodValueList,delete a.paymentFrequencyList,delete a.paymentPeriodValueList;if(Ke.indexOf(i.key)>=0&&`${i.oldValue}`!=`${i.newValue}`){const s={};switch(i.key){case"annuityDrawDate":s.changeType=3;break;case"coveragePeriod":s.changeType=2;break;case"chargePeriod":s.changeType=1;break;case"paymentFrequency":s.changeType=4}const r=((e,i,t)=>{var a,s;let r=null,l=null,u=null,d=null;if(t===B.RIDER_RISK){const t=null==(a=Ve.value[e].productPlanInsureVOList)?void 0:a[0].insureProductRiskVOList.find((e=>e.riskCode===i)),{mainRiskCode:s,productRiskInsureLimitVO:o}=t,{paymentPeriodRule:n,paymentTypeRule:c,insurancePeriodRule:p}=o||{};r=n,l=c,u=p,d=s}return console.log("mainRiskCode",d),null==(s=Ve.value[e].productPlanInsureVOList)?void 0:s[0].insureProductRiskVOList.filter((e=>{if(t===B.MAIN_RISK){const{paymentPeriodRule:i,paymentTypeRule:t,insurancePeriodRule:a}=e.productRiskInsureLimitVO||{};r=i,l=t,u=a}return!(t!==B.MAIN_RISK||e.mainRiskCode!==i||![r,l,u].includes(U.MAIN_RISK_SAME)&&![r,l,u].includes(U.MAIN_RISK_1))||!(t===B.MAIN_RISK||e.riskCode!==i&&e.riskCode!==d||![r,l,u].includes(U.MAIN_RISK_SAME)&&![r,l,u].includes(U.MAIN_RISK_1))||e.riskCode===i}))})(t,e.riskCode,e.riskType).flat(),l=(r||[]).map((i=>i.riskCode!==e.riskCode?{insureProductRiskVO:i,insureRiskEditReqVO:null}:{insureProductRiskVO:i,insureRiskEditReqVO:{riskId:e.riskId,riskCode:e.riskCode,...a,...s}}));ge.isQuerying=!0;const u=ge.userData.insuredList.filter((e=>e.birthday))||[];if(!u.length)return!1;const d=await W({calcProductFactorList:[{planCode:Oe.value.planCode,productCode:t,riskEditVOList:l}],insuredVOList:u,holderVO:ge.userData.holder});ge.isQuerying=!1;const o=((e,i)=>{var t,a,s,r,l,u,d,o;if(null==(a=null==(t=null==e?void 0:e.data)?void 0:t[0])?void 0:a.productRiskDyInsureFactorVOList){const t=[];if(null==(l=null==(r=null==(s=Ve.value[i])?void 0:s.productPlanInsureVOList)?void 0:r[0])||l.insureProductRiskVOList.forEach((a=>{var s,r;const l=null==(r=null==(s=null==e?void 0:e.data)?void 0:s[0])?void 0:r.productRiskDyInsureFactorVOList.find((e=>e.riskCode===a.riskCode));if(l){a.productRiskInsureLimitVO={...a.productRiskInsureLimitVO,...l};const e=ge.riskList[i].find((e=>e.riskCode===a.riskCode));Z.forEach((i=>{var t;if(Ke.indexOf(i.valueKey)>=0){const s=a.productRiskInsureLimitVO[null==(t=i.configKey)?void 0:t[0]];if(s&&e){const t=s.find((t=>t.code===e[i.valueKey]));if(t&&2===t.useFlag){const t=s.find((e=>1===e.defaultFlag));e[i.valueKey]=t.code}}}})),t.push({...e,...l,riskCode:a.riskCode})}})),t.length>0&&(null==(o=null==(d=null==(u=ge.defaultValue)?void 0:u.insuredList)?void 0:d[0])?void 0:o.productList))return t.forEach((e=>{var i,t,a;ge.defaultValue.insuredList[0].productList=null==(a=null==(t=null==(i=ge.defaultValue)?void 0:i.insuredList)?void 0:t[0])?void 0:a.productList.map((i=>(i.riskList=null==i?void 0:i.riskList.map((i=>(i.riskCode===e.riskCode&&(i=e),i))),i)))})),!1}return!0})(d,t);return o||(ge.isAutoChange=!0),o}}return!0},Qe=e=>{ge.userData=e,ge.defaultValue=e},He=async e=>{var i;if(A.defaultData){const e=A.defaultData.find((e=>e.productCode===A.productInfo.productCode))||A.defaultData[0];Qe(e),we(null==(i=A.defaultData)?void 0:i[0])}else be.value.push(Oe.value.planCode),await(async()=>{var e;const i=await X({calcProductFactorList:[{productCode:null==(e=Object.keys(A.productCollection))?void 0:e[0]}]});i.data&&(Qe(i.data),we(i.data))})()};n((()=>{var e,i;ge.riskIsInsure={},null==(i=null==(e=Oe.value)?void 0:e.insureProductRiskVOList)||i.forEach((e=>{var i;const t=null==(i=Oe.value.productRiskRelationVOList)?void 0:i.find((i=>i.collocationRiskId===e.riskId));t&&(ge.riskIsInsure[e.riskCode]={selected:"2",data:null,relation:t})}))})),c((()=>{Oe.value=A.dataSource,ge.loading=!0,ge.show=!0,ge.isAniShow=!0,ge.isSkipFirstTrial=!0,ge.hadSkipFirstTrial=!1}));return O({getTrialSuccessFlag:()=>ge.trialResultPremium>0,getRiderRiskDefaultValue:async(e,i,t)=>{var a,s,r;const l=ge.riskList[e].find((e=>e.riskCode===t)),{code:u,data:d}=await Y({holder:ge.userData.holder,insuredList:ge.userData.insuredList,calcRiskDefaultFactorVO:{mainRiskInfo:l,riskCodeList:i}});if("10000"===u){let t=0;t=ge.riskList[e].findIndex(((e,t)=>e.riskCode===i[0])),ge.defaultValue.insuredList[0].productList=null==(r=null==(s=null==(a=ge.defaultValue)?void 0:a.insuredList)?void 0:s[0])?void 0:r.productList.map((i=>(e===i.productCode&&(i.riskList=[...i.riskList.slice(0,t),...d,...i.riskList.slice(t,i.riskList.length)]),i)))}},getProductDefaultValue:async e=>{const{code:i,data:t}=await X({calcProductFactorList:e.map((e=>({productCode:e}))),holderVO:ge.userData.holder,insuredVOList:ge.userData.insuredList});"10000"===i&&(ge.defaultValue.insuredList[0].productList=t.insuredList[0].productList,Object.assign(ge.userData,t))},validate:()=>Ie.value.validate(!1),validateTrialFields:()=>Ie.value.validateTrialFields(),validateHolder:e=>{var i;return null==(i=Ie.value)?void 0:i.validateHolder(e)},getUserData:()=>({...ge.userData}),onShare:e=>{var i;ge.trialResultPremium&&(null==(i=se.value)||i.validate().then((()=>{Object.assign(De.value,A.defaultOrder,{extInfo:{...De.value.extInfo,buttonCode:H.TRIAL_PREMIUM,pageCode:Q.TRIAL_PREMIUM,templateId:Ce}});const i=ie(A.productInfo,ge.trialResult,De.value);te(i,((i,t)=>{t===S.JUMP_PAGE&&(Pe.value.link=`${window.location.href}&isShare=1&orderNo=${i.orderNo}`,e())})),console.log("---- validate success ----")})))},onNext:e=>{const{productCode:i,productName:t}=A.productInfo;Re?T(Q.TRIAL_PREMIUM,ye.query):ge.trialResultPremium&&(Promise.all(se.value.map((e=>e.validate()))).then((()=>{Object.assign(De.value,A.defaultOrder,{extInfo:{templateId:Ce,...De.value.extInfo,...A.defaultOrder.extInfo||{},buttonCode:H.TRIAL_PREMIUM,pageCode:Q.TRIAL_PREMIUM}});const a=ie({...$e(),productCode:i,productName:t},ge.trialResult,De.value);null==e||e(a),console.log("---- validate success ----")})),ge.loading=!1,ge.show=!0,ge.isAniShow=!0)},dealMixData:$e}),o((()=>ge.userData),(e=>{if(e){const{holder:i,insuredList:t}=e||{},a={holder:i,insuredList:t};Object.assign(ge.submitData,a),w("update:userData",a)}}),{immediate:!0,deep:!0}),o((()=>A.dataSource),(e=>{Oe.value=e}),{deep:!0,immediate:!0}),o((()=>A.productCollection),((e,i)=>{Object.keys(e||{}).length&&!ge.defaultValue&&He(),Ve.value=e,Object.keys(e||[]).forEach((i=>{ge.riskList[i]=e[i].productPlanInsureVOList[0].insureProductRiskVOList.map((e=>(ge.riskList[i]||[]).find((i=>i.riskCode===e.riskCode))||e))}))}),{deep:!0,immediate:!0}),o((()=>A.productFactor),(e=>{Te.value=e}),{deep:!0,immediate:!0}),o((()=>A.defaultData),((e,i)=>{JSON.stringify(N(e))!==JSON.stringify(N(i))&&(ge.defaultValue=e,ge.userData=e||{})}),{deep:!0,immediate:!0}),(e,i)=>{var t,a,s;const r=E,l=_,u=j,d=F;return p(),v("div",re,[f(e.$slots,"trialHead",{},void 0,!0),k("div",le,[m(q,{labels:L(ae)((null==(t=Oe.value)?void 0:t.insureProductRiskVOList)||[],Oe.value.productRiskRelationVOList)},null,8,["labels"]),k("div",ue,[(null==(a=Object.keys(Te.value))?void 0:a.length)?(p(),y($,{ref_key:"personalInfoRef",ref:Ie,key:Oe.value.planCode,modelValue:L(ge).userData,"onUpdate:modelValue":i[0]||(i[0]=e=>L(ge).userData=e),"is-holder-exempt":L(Me),"is-trial":e.isTrial,"product-factor":Te.value,"multi-insured-config":null==(s=Oe.value)?void 0:s.multiInsuredConfigVO,onTrailChange:L(Ue),onUpdateBank:i[1]||(i[1]=i=>e.$emit("update-bank",i))},null,8,["modelValue","is-holder-exempt","is-trial","product-factor","multi-insured-config","onTrailChange"])):h("",!0)]),f(e.$slots,"middleInfo",{},void 0,!0),m(r,{size:"large"}),k("div",de,[m(l,{title:"保障计划",class:"insurePlan","show-divider":!1}),Object.keys(Ve.value).length?(p(),v("div",oe,[(p(!0),v(C,null,R(Object.keys(Ve.value),((i,t)=>(p(),v("div",{key:i,class:"product-item"},[(p(!0),v(C,null,R(Ve.value[i].productPlanInsureVOList[0].insureProductRiskVOList||[],((a,s)=>{var r,l,d,o,n,c,f,y,C,R,P,O;return p(),v("div",{key:`${i}-${a.riskCode}`,class:"risk-item"},[m(u,{title:a.riskName,"risk-type":a.riskType},{default:I((()=>[e.isTrial?(p(),v("div",ne,[a.riskType===L(B).MAIN_RISK?(p(),v("div",{key:0,class:"add-risk btn",onClick:e=>((e,i)=>{const t=ge.riskList[e].find((e=>e.riskCode===i));w("addRisk",e,t,ge.userData.insuredList)})(i,a.riskCode)}," +附加险 ",8,ce)):h("",!0),k("div",{class:"delete-risk btn",onClick:e=>((e,i,t)=>{b.confirm({message:"删除后将无法恢复，是否需要删除该产品？"}).then((()=>{var a,s;i?(ge.defaultValue.insuredList[0].productList=ge.defaultValue.insuredList[0].productList.map((i=>(i.productCode===e&&(i.riskList=i.riskList.filter((e=>e.riskCode!==t))),i))),ge.userData.insuredList[0].productList=ge.userData.insuredList[0].productList.map((i=>(i.productCode===e&&(i.riskList=i.riskList.filter((e=>e.riskCode!==t))),i)))):(ge.defaultValue.insuredList[0].productList=ge.defaultValue.insuredList[0].productList.filter((i=>i.productCode!==e)),ge.userData.insuredList[0].productList=ge.userData.insuredList[0].productList.filter((i=>i.productCode!==e))),(null==(s=null==(a=ge.userData.insuredList[0])?void 0:a.productList)?void 0:s.length)?_e(ge.userData):ge.trialResult={initialPremium:0,initialAmount:0},w("deleteRisk",e,t,i)}))})(i,a.mainRiskCode,a.riskCode)}," 删除 ",8,pe)])):h("",!0)])),_:2},1032,["title","risk-type"]),m(x,{ref_for:!0,ref_key:"insureInfosRef",ref:se,"origin-data":a,"product-factor":Oe.value.productFactor,"default-value":L(ge).defaultValue?null==(c=null==(n=null==(o=null==(d=null==(l=null==(r=L(ge).defaultValue)?void 0:r.insuredList)?void 0:l[0])?void 0:d.productList)?void 0:o[t])?void 0:n.riskList)?void 0:c[s]:null,"trial-result":null==(C=null==(y=null==(f=Se.value)?void 0:f[i])?void 0:y[s])?void 0:C.initialAmount,onTrialChange:(e,t)=>(async(e,i,t)=>{var a,s,r;if((null==(s=null==(a=ge.riskList)?void 0:a[t])?void 0:s.find((i=>i.riskCode===e.riskCode)))?ge.riskList[t]=ge.riskList[t].map((i=>i.riskCode===e.riskCode?e:i)):(null==(r=ge.riskList[t])?void 0:r.length)?ge.riskList[t].push(e):ge.riskList[t]=[e],e.exemptFlag!==M.YES&&!(await qe(e,i,t)))return;console.log("标准险种的信息回传",e),Be()})(e,t,i)},null,8,["origin-data","product-factor","default-value","trial-result","onTrialChange"]),k("div",ve,[fe,k("span",ke,"¥"+g(L(D)((null==(O=null==(P=null==(R=Se.value)?void 0:R[i])?void 0:P[s])?void 0:O.initialPremium)||"0"))+"元",1)])])})),128))])))),128))])):h("",!0),L(je)&&e.isTrial?(p(),v("div",me,[m(d,{activated:"",onClick:Fe},{default:I((()=>[P("+新增主险")])),_:1})])):h("",!0)]),Le]),f(e.$slots,"trialBtn",{trialData:L(ge).submitData,riskPremium:L(ge).trialResult,loading:L(ge).isQuerying,personalInfoRef:Ie.value},void 0,!0)])}}}),[["__scopeId","data-v-749dddde"]]);export{he as T};
