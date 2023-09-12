import{d as e,i,h as a,g as t,r as s,aw as r,ax as l,T as u,j as o,z as d,av as n,O as c,o as p,c as f,f as v,a as k,b as m,u as L,l as y,q as h,F as g,n as C,w as I,e as R,ay as b,a8 as D,_ as P,az as O,aA as V,aB as T,aC as S,aD as w,aE as M,aF as _,aG as j,at as E,au as F}from"./index-22927d88.js";import{c as A}from"./cloneDeep-6d2453fb.js";import{_ as N}from"./InsureInfos-5eb81ea4.js";import{P as x}from"./index-c1e26e46.js";import{P as $,R as B,b as U}from"./trial-7c800337.js";import{_ as q,P as K,B as Q}from"./constants-b9761042.js";import{u as z,b as G,p as H,c as J,d as W,e as X}from"./trial-f7d90144.js";import{u as Y}from"./useOrder-233fc531.js";import{t as Z}from"./utils-1211923b.js";import{n as ee}from"./nextStep-7bb20332.js";const ie=(e,i)=>{const a=[],t={};return null==e||e.forEach((e=>{t[e.riskId]=e})),null==i||i.forEach((e=>{var i,s,r,l;const{collocationType:u,collocationRiskId:o,riskId:d}=e;switch(u){case 2:{const e=null==(i=t[d])?void 0:i.riskName,r=null==(s=t[o])?void 0:s.riskName;a.push(`${e} 和 ${r} 必须同时投保`);break}case 3:{const e=null==(r=t[d])?void 0:r.riskName,i=null==(l=t[o])?void 0:l.riskName;a.push(`${e} 和 ${i} 不能同时投保`);break}}})),a};const ae=e=>(E("data-v-2bda9cf4"),e=e(),F(),e),te={class:"com-body"},se={class:"trial-body"},re={class:"container"},le={class:"container"},ue={key:0,class:"product-list"},oe={key:0,class:"operate-bar"},de=["onClick"],ne=["onClick"],ce={class:"premium-item"},pe=ae((()=>k("span",{class:"label"},"首期保费",-1))),fe={class:"price"},ve={key:1,class:"add-main-risk"},ke=ae((()=>k("div",{class:"empty"},null,-1))),me=e({name:"TrialBody"});var Le=P(e({...me,props:{selfKey:{default:""},dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:"",planList:[]})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},isTrial:{type:Boolean,default:!1},defaultOrder:{default:()=>({})},productCollection:{default:()=>({})},productFactor:{default:()=>({})}},emits:["trialStart","trialEnd","update:userData","closeCustomerPopoup","addRisk","addMainRisk","deleteRisk"],setup(e,{expose:P,emit:E}){const F=e,ae=i(null),me=a();t();const{tenantId:Le,templateId:ye,preview:he}=me.query,ge=i(),Ce=s({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskList:{},mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1,isQuerying:!1,currentPlanCode:""}),Ie=Y();i();const Re=i(),be=i(F.dataSource),De=i([]),Pe=i(),Oe=i(),Ve=i({}),Te=i({}),Se=r((async(e,i=!0)=>{Ce.trialMsg="试算中...",Ce.trialResultPremium=0,Ce.loading=!0,E("trialStart");let a=!1;if(i){const{code:i}=await z(e);a="10000"===i}!a&&i||(Ce.isQuerying=!0,F.hideBenefit||G(e).then((e=>{e.data&&e.code===l&&(Te.value=e.data)})).finally((()=>{Ce.loading=!1})),H(e).then((({code:i,data:a})=>{var t,s;a&&i===l&&((null==a?void 0:a.errorInfo)&&u(`${null==a?void 0:a.errorInfo}`),Ce.trialMsg="",Ce.trialResultPremium=a.initialPremium,Ce.trialResult=a,null==(s=null==(t=a.insuredPremiumList)?void 0:t[0])||s.productPremiumList.forEach((e=>{Ve.value[e.productCode]=e.riskPremiumDetailVOList})),E("trialEnd",a,e))})).finally((()=>{Ce.loading=!1,Ce.isQuerying=!1})))}),500),we=o((()=>{var e,i;return![$.SINGLE_PRODUCT,$.TWO_PRODUCT].includes(null==(i=null==(e=Object.values(F.productCollection))?void 0:e[0])?void 0:i.productClass)})),Me=()=>{E("addMainRisk",Ce.userData.insuredList)},_e=e=>{const{holder:i,insuredList:a}=e||{};i&&(Ce.submitData.holder=i),a&&a.length>0&&a.forEach(((e,i)=>{var a;Ce.submitData.insuredList&&Ce.submitData.insuredList.length>i?Ce.submitData.insuredList[i]=e:((null==(a=Ce.submitData)?void 0:a.insuredList)||(Ce.submitData.insuredList=[]),Ce.submitData.insuredList.push(e))}))},je=o((()=>F.productInfo.planList&&F.productInfo.planList.length>2)),Ee=(e,i)=>{if(e){const a=["birthday","age","gender","id"];i.includes("occupationCodeList")&&a.push("occupationClass"),Object.keys(e).forEach((t=>{[...i,...a].includes(t)||(e[t]=null)}))}},Fe=(e,i=(e=>!0))=>V(e)?e.filter(i).map((e=>e.code)):[],Ae=()=>{console.log("--current plan = ",be.value),console.log("---current submit = ",Ce.submitData);const e=A(Ce.submitData);if(!je.value)return e;const{1:i,2:a,3:t}=be.value.productFactor||{};if(e.holder&&Ee(e.holder,Fe(i)),e.insuredList){const i=["productList","beneficiaryList"],s=Fe(a,(e=>"2"!==String(e.subModuleType))),r=Fe(a,(e=>"2"===String(e.subModuleType))),l=V(r),u=Fe(t),o=V(u);e.insuredList.forEach(((e,a)=>{var t,d,n;Ee(e,[...a>=1&&l?r:s,...i,...o?["insuredBeneficiaryType"]:[]]),(null==(t=e.beneficiaryList)?void 0:t.length)>0&&(o?e.beneficiaryList.forEach((e=>Ee(e,u))):e.beneficiaryList.length=0),e.planCode=be.value.planCode;const c=(null==(n=null==(d=e.productList)?void 0:d[0])?void 0:n.riskList)||[],p=be.value.insureProductRiskVOList||[];if(c.length&&p){const i=c.filter((e=>null!==p.find((i=>i.riskCode===e.riskCode))));e.productList[0].riskList=i}}))}return e},Ne=["annuityDrawDate","coveragePeriod","chargePeriod","paymentFrequency"],xe=async()=>{var e,i,a,t;if(Ce.ifPersonalInfoSuccess||(null==(i=null==(e=ge.value)?void 0:e.canTrail)?void 0:i.call(e))){Ce.submitData.tenantId=`${Le}`,(null==(a=Ce.submitData.insuredList)?void 0:a.length)&&(Ce.submitData.insuredList=null==(t=Ce.submitData)?void 0:t.insuredList.map((e=>({...e,productList:null==e?void 0:e.productList.map((e=>({...e,riskList:e.riskList||Ce.riskList[e.productCode]})))}))));const e=Ae();console.log(">>>数据构建<<<",e),await Se(e)}},$e=async e=>{console.log("人的信息更改了"),_e(e),Ce.ifPersonalInfoSuccess=!0,console.log("处理第一被保人修改的dy变化"),xe()};o((()=>{var e;return((null==(e=Ce.userData)?void 0:e.insuredList)||[]).map((e=>e.birthday)).join(",")})),d((()=>{var e;return((null==(e=Ce.userData)?void 0:e.insuredList)||[]).map((e=>e.birthday)).join(",")}),r((async e=>{if(e){const e=Ce.userData.insuredList.filter((e=>e.birthday))||[];if(!e.length)return;const i=Object.keys(Pe.value).map((e=>({productCode:e,planCode:"",riskEditVOList:Pe.value[e].productPlanInsureVOList[0].insureProductRiskVOList.map((e=>({insureProductRiskVO:e})))})));await J({calcProductFactorList:i,insuredVOList:e,holderVO:Ce.userData.holder})}})),{});const Be=async(e,i,a)=>{if(i){const t=A(e);delete t.insurancePeriodValueList,delete t.paymentFrequencyList,delete t.paymentPeriodValueList;if(Ne.indexOf(i.key)>=0&&`${i.oldValue}`!=`${i.newValue}`){const s={};switch(i.key){case"annuityDrawDate":s.changeType=3;break;case"coveragePeriod":s.changeType=2;break;case"chargePeriod":s.changeType=1;break;case"paymentFrequency":s.changeType=4}const r=((e,i,a)=>{var t;return null==(t=Pe.value[e].productPlanInsureVOList)?void 0:t[0].insureProductRiskVOList.filter((e=>{const{paymentPeriodRule:t,paymentTypeRule:s,insurancePeriodRule:r}=e.productRiskInsureLimitVO;return a===B.MAIN_RISK&&e.mainRiskCode===i&&([t,s,r].includes(U.MAIN_RISK_SAME)||[t,s,r].includes(U.MAIN_RISK_1))?e:e.riskCode===i}))})(a,e.riskCode,e.riskType),l=(r||[]).map((i=>i.riskCode!==e.riskCode?{insureProductRiskVO:i,insureRiskEditReqVO:null}:{insureProductRiskVO:i,insureRiskEditReqVO:{riskId:e.riskId,riskCode:e.riskCode,...t,...s}}));if(!Ce.isAutoChange){Ce.isQuerying=!0;const e=Ce.userData.insuredList.filter((e=>e.birthday))||[];if(!e.length)return!1;await J({calcProductFactorList:[{planCode:be.value.planCode,productCode:a,riskEditVOList:l}],insuredVOList:e,holderVO:Ce.userData.holder}),Ce.isQuerying=!1;return!0}Ce.isAutoChange=!1}}return!0},Ue=r((async(e,i,a)=>{var t,s,r;(null==(s=null==(t=Ce.riskList)?void 0:t[a])?void 0:s.find((i=>i.riskCode===e.riskCode)))?Ce.riskList[a]=Ce.riskList[a].map((i=>i.riskCode===e.riskCode?e:i)):(null==(r=Ce.riskList[a])?void 0:r.length)?Ce.riskList[a].push(e):Ce.riskList[a]=[e];await Be(e,i,a)&&(console.log("标准险种的信息回传",e),xe())}),500),qe=e=>{Ce.userData=e,Ce.defaultValue=e},Ke=async e=>{var i;if(F.defaultData){const e=F.defaultData.find((e=>e.productCode===F.productInfo.productCode))||F.defaultData[0];qe(e),_e(null==(i=F.defaultData)?void 0:i[0])}else De.value.push(be.value.planCode),await(async()=>{var e;const i=await X({calcProductFactor:{productCode:null==(e=Object.keys(F.productCollection))?void 0:e[0]}});i.data&&(qe(i.data),_e(i.data))})()};n((()=>{var e,i;Ce.riskIsInsure={},null==(i=null==(e=be.value)?void 0:e.insureProductRiskVOList)||i.forEach((e=>{var i;const a=null==(i=be.value.productRiskRelationVOList)?void 0:i.find((i=>i.collocationRiskId===e.riskId));a&&(Ce.riskIsInsure[e.riskCode]={selected:"2",data:null,relation:a})}))})),c((()=>{be.value=F.dataSource,Ce.loading=!0,Ce.show=!0,Ce.isAniShow=!0,Ce.isSkipFirstTrial=!0,Ce.hadSkipFirstTrial=!1}));return P({getTrialSuccessFlag:()=>Ce.trialResultPremium>0,getRiderRiskDefaultValue:async(e,i,a)=>{var t,s,r,l;const u=Ce.riskList[e].find((e=>e.riskCode===a)),{code:o,data:d}=await W({holder:Ce.userData.holder,insuredList:Ce.userData.insuredList,calcRiskDefaultFactorVO:{mainRiskInfo:u,riskCode:i}});if("10000"===o){let u=!1,o=0;o=1===(null==(t=Ce.riskList[e])?void 0:t.length)?1:Ce.riskList[e].findIndex(((t,s)=>{if(t.riskCode===a)u=!0;else if(u&&i.riskType===B.MAIN_RISK)return u;return s+1===Ce.riskList[e].length})),Ce.defaultValue.insuredList[0].productList=null==(l=null==(r=null==(s=Ce.defaultValue)?void 0:s.insuredList)?void 0:r[0])?void 0:l.productList.map((i=>(e===i.productCode&&(i.riskList=[...i.riskList.slice(0,o),d,...i.riskList.slice(o,i.riskList.length)]),i)))}},getProductDefaultValue:async e=>{const{code:i,data:a}=await X({calcProductFactor:{productCode:e},holderVO:Ce.userData.holder,insuredVOList:Ce.userData.insuredList});"10000"===i&&(Ce.defaultValue.insuredList[0].productList=a.insuredList[0].productList,Object.assign(Ce.userData,a))},validate:()=>ge.value.validate(!1),validateTrialFields:()=>ge.value.validateTrialFields(),validateHolder:e=>{var i;return null==(i=ge.value)?void 0:i.validateHolder(e)},getUserData:()=>({...Ce.userData}),onShare:e=>{var i;Ce.trialResultPremium&&(null==(i=ae.value)||i.validate().then((()=>{Object.assign(Ie.value,F.defaultOrder,{extInfo:{...Ie.value.extInfo,buttonCode:Q.TRIAL_PREMIUM,pageCode:K.TRIAL_PREMIUM,templateId:ye}});const i=Z(F.productInfo,Ce.trialResult,Ie.value);ee(i,((i,a)=>{a===S.JUMP_PAGE&&(Re.value.link=`${window.location.href}&isShare=1&orderNo=${i.orderNo}`,e())})),console.log("---- validate success ----")})))},onNext:e=>{const{productCode:i,productName:a}=F.productInfo;he?T(K.TRIAL_PREMIUM,me.query):Ce.trialResultPremium&&(Promise.all(ae.value.map((e=>e.validate()))).then((()=>{Object.assign(Ie.value,F.defaultOrder,{extInfo:{templateId:ye,...Ie.value.extInfo,...F.defaultOrder.extInfo||{},buttonCode:Q.TRIAL_PREMIUM,pageCode:K.TRIAL_PREMIUM}});const t=Z({...Ae(),productCode:i,productName:a},Ce.trialResult,Ie.value);null==e||e(t),console.log("---- validate success ----")})),Ce.loading=!1,Ce.show=!0,Ce.isAniShow=!0)},dealMixData:Ae}),d((()=>Ce.userData),(e=>{if(e){const{holder:i,insuredList:a}=e||{},t={holder:i,insuredList:a};Object.assign(Ce.submitData,t),E("update:userData",t)}}),{immediate:!0,deep:!0}),d((()=>F.dataSource),(e=>{be.value=e}),{deep:!0,immediate:!0}),d((()=>F.productCollection),((e,i)=>{Object.keys(e||{}).length&&!Ce.defaultValue&&Ke(),Pe.value=e}),{deep:!0,immediate:!0}),d((()=>F.productFactor),(e=>{Oe.value=e}),{deep:!0,immediate:!0}),d((()=>F.defaultData),((e,i)=>{JSON.stringify(A(e))!==JSON.stringify(A(i))&&(console.log("value",e,i),Ce.defaultValue=e,Ce.userData=e||{})}),{deep:!0,immediate:!0}),(e,i)=>{var a,t;const s=w,r=M,l=_,u=j;return p(),f("div",te,[v(e.$slots,"trialHead",{},void 0,!0),k("div",se,[m(q,{labels:L(ie)((null==(a=be.value)?void 0:a.insureProductRiskVOList)||[],be.value.productRiskRelationVOList)},null,8,["labels"]),k("div",re,[Oe.value?(p(),y(x,{ref_key:"personalInfoRef",ref:ge,key:be.value.planCode,modelValue:L(Ce).userData,"onUpdate:modelValue":i[0]||(i[0]=e=>L(Ce).userData=e),"is-trial":e.isTrial,"product-factor":Oe.value,"multi-insured-config":null==(t=be.value)?void 0:t.multiInsuredConfigVO,onTrailChange:$e},null,8,["modelValue","is-trial","product-factor","multi-insured-config"])):h("",!0)]),v(e.$slots,"middleInfo",{},void 0,!0),m(s,{size:"large"}),k("div",le,[m(r,{title:"保障计划",class:"insurePlan","show-divider":!1}),Object.keys(Pe.value).length?(p(),f("div",ue,[(p(!0),f(g,null,C(Object.keys(Pe.value),((i,a)=>(p(),f("div",{key:i,class:"product-item"},[(p(!0),f(g,null,C(Pe.value[i].productPlanInsureVOList[0].insureProductRiskVOList||[],((t,s)=>{var r,u,o,d,n,c,v,y,g;return p(),f("div",{key:`${i}-${t.riskCode}`,class:"risk-item"},[m(l,{title:t.riskName,"risk-type":t.riskType},{default:I((()=>[e.isTrial?(p(),f("div",oe,[t.riskType===L(B).MAIN_RISK?(p(),f("div",{key:0,class:"add-risk btn",onClick:e=>((e,i)=>{const a=Ce.riskList[e].find((e=>e.riskCode===i));E("addRisk",e,a,Ce.userData.insuredList)})(i,t.riskCode)}," +附加险 ",8,de)):h("",!0),k("div",{class:"delete-risk btn",onClick:e=>((e,i,a)=>{O.confirm({message:"删除后将无法恢复，是否需要删除该产品？"}).then((()=>{i?(Ce.defaultValue.insuredList[0].productList=Ce.defaultValue.insuredList[0].productList.map((i=>(i.productCode===e&&(i.riskList=i.riskList.filter((e=>e.riskCode!==a))),i))),Ce.userData.insuredList[0].productList=Ce.userData.insuredList[0].productList.map((i=>(i.productCode===e&&(i.riskList=i.riskList.filter((e=>e.riskCode!==a))),i)))):(Ce.defaultValue.insuredList[0].productList=Ce.defaultValue.insuredList[0].productList.filter((i=>i.productCode!==e)),Ce.userData.insuredList[0].productList=Ce.userData.insuredList[0].productList.filter((i=>i.productCode!==e))),Se(Ce.userData),E("deleteRisk",e,a,i)}))})(i,t.mainRiskCode,t.riskCode)}," 删除 ",8,ne)])):h("",!0)])),_:2},1032,["title","risk-type"]),m(N,{ref_for:!0,ref_key:"insureInfosRef",ref:ae,"origin-data":t,"product-factor":be.value.productFactor,"default-value":L(Ce).defaultValue?null==(c=null==(n=null==(d=null==(o=null==(u=null==(r=L(Ce).defaultValue)?void 0:r.insuredList)?void 0:u[0])?void 0:o.productList)?void 0:d[a])?void 0:n.riskList)?void 0:c[s]:null,"trial-result":L(Ce).trialResult,onTrialChange:(e,a)=>L(Ue)(e,a,i)},null,8,["origin-data","product-factor","default-value","trial-result","onTrialChange"]),k("div",ce,[pe,k("span",fe,"¥"+R(L(b)((null==(g=null==(y=null==(v=Ve.value)?void 0:v[i])?void 0:y[s])?void 0:g.initialPremium)||"0"))+"元",1)])])})),128))])))),128))])):h("",!0),L(we)&&e.isTrial?(p(),f("div",ve,[m(u,{activated:"",onClick:Me},{default:I((()=>[D("+新增主险")])),_:1})])):h("",!0)]),ke]),v(e.$slots,"trialBtn",{trialData:L(Ce).submitData,riskPremium:L(Ce).trialResult,loading:L(Ce).isQuerying,personalInfoRef:ge.value},void 0,!0)])}}}),[["__scopeId","data-v-2bda9cf4"]]);export{Le as T};
