import{d as a,r as i,ao as e,ay as l,R as u,N as s,b as t,c as n,e as o,f as r,U as d,h as m,a2 as v}from"./index-70bfd36e.js";import{c as f}from"./cloneDeep-96676b66.js";import{B as g,a as c,R as k}from"./index-91f833f7.js";function p(a){return Object.keys(a)}const V=a({name:"InsureInfos"}),D=a({...V,props:{originData:{default:()=>({})},modelValue:{default:()=>({})},defaultValue:{default:()=>({})},trialResult:{default:()=>({})}},emits:["trialChange"],setup(a,{expose:V,emit:D}){const C=a,y=i(null),b=i({}),h=i({}),I=e({personalInfo:{},basicsAmount:"",basicsPremium:"",defaultValues:C.defaultValue,changeData:null,sValues:b.value});l("premium"),h.value=l("enumList")||{},u((()=>{}));const R=a=>{C.originData.mainRiskFlag,b.value.riskCategory=C.originData.riskCategory,b.value.riskCode=C.originData.riskCode,b.value.riskId=C.originData.riskId,b.value.riskType=C.originData.riskType,b.value.riskName=C.originData.riskName,b.value.riskType=C.originData.riskType,b.value.mainRiskCode=C.originData.mainRiskCode,b.value.mainRiskId=C.originData.mainRiskId,a?D("trialChange",b.value,a):D("trialChange",b.value)},P=(a,i)=>{i?b.value[i.key]=i.newValue:p(a).forEach((i=>{b.value[i]=a[i]})),R(i)},O=a=>{var i,e;1==+(null==(e=null==(i=C.originData)?void 0:i.productRiskInsureLimitVO)?void 0:e.amountPremiumConfigVO.saleMethod)?I.basicsAmount=null==a?void 0:a.initialAmount:I.basicsAmount=null==a?void 0:a.initialPremium,p(a).forEach((i=>{b.value[i]=a[i]})),R()},T=a=>{b.value.liabilityList=a,R()};return s((()=>C.defaultValue),(a=>{a&&(console.log("--default change ",a),I.defaultValues=f(a),b.value={...a})}),{deep:!0,immediate:!0}),s((()=>b.value),(a=>{I.sValues=a}),{deep:!0,immediate:!0}),V({validate:async()=>{var a;await(null==(a=y.value)?void 0:a.validate())}}),(a,i)=>{var e,l,u,s,f,p;const V=v;return 1===(null==(e=a.originData)?void 0:e.factorDisPlayFlag)?(t(),n(d,{key:0},[o(V,{title:"保障计划",class:"insurePlan","show-divider":!1}),o(r(g),{"v-model":r(I).sValues,"origin-data":null==(u=null==(l=a.originData)?void 0:l.productRiskInsureLimitVO)?void 0:u.amountPremiumConfigVO,"defalut-value":r(I).defaultValues,"trial-result":a.trialResult,onTrialChange:O},null,8,["v-model","origin-data","defalut-value","trial-result"]),o(r(c),{"v-model":r(I).sValues,"use-data":r(I).sValues,"origin-data":a.originData.productRiskInsureLimitVO,"risk-info":a.originData,"default-value":r(I).defaultValues,onTrialChange:P},null,8,["v-model","use-data","origin-data","risk-info","default-value"]),o(r(k),{"data-source-folmulate":r(b),"data-source":a.originData,params:{amountUnit:null==(f=null==(s=a.originData)?void 0:s.productRiskInsureLimitVO)?void 0:f.amountPremiumConfigVO.displayUnit,basicsAmount:r(I).basicsAmount,basicsPremium:r(I).basicsPremium,riskId:null==(p=a.originData)?void 0:p.riskId},"default-value":r(I).defaultValues,onTrialChange:T},null,8,["data-source-folmulate","data-source","params","default-value"])],64)):m("",!0)}}});export{D as _};
