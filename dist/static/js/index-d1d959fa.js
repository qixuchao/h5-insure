import{d as a,r as i,z as e,aT as l,a1 as u,R as s,c as t,A as n,i as r,g as o,U as d,h as m,b4 as v}from"./index-20016307.js";import{l as g,B as f,b as c,R as k}from"./index-acf73e1c.js";function p(a){return Object.keys(a)}const V=a({name:"InsureInfos"}),D=a({...V,props:{originData:{default:()=>({})},modelValue:{default:()=>({})},defaultValue:{default:()=>({})},trialResult:{default:()=>({})}},emits:["trialChange"],setup(a,{expose:V,emit:D}){const C=a,y=i(null),I=i({}),R=i({}),b=e({personalInfo:{},basicsAmount:"",basicsPremium:"",defaultValues:C.defaultValue,changeData:null,sValues:I.value});l("premium"),R.value=l("enumList")||{},u((()=>{}));const h=a=>{C.originData.mainRiskFlag,I.value.riskCategory=C.originData.riskCategory,I.value.riskCode=C.originData.riskCode,I.value.riskId=C.originData.riskId,I.value.riskType=C.originData.riskType,I.value.riskName=C.originData.riskName,I.value.riskType=C.originData.riskType,I.value.mainRiskCode=C.originData.mainRiskCode,I.value.mainRiskId=C.originData.mainRiskId,a?D("trialChange",I.value,a):D("trialChange",I.value)},P=(a,i)=>{i?I.value[i.key]=i.newValue:p(a).forEach((i=>{I.value[i]=a[i]})),h(i)},O=a=>{var i,e;1==+(null==(e=null==(i=C.originData)?void 0:i.productRiskInsureLimitVO)?void 0:e.amountPremiumConfigVO.saleMethod)?b.basicsAmount=null==a?void 0:a.initialAmount:b.basicsAmount=null==a?void 0:a.initialPremium,p(a).forEach((i=>{I.value[i]=a[i]})),h()},T=a=>{I.value.liabilityList=a,h()};return s((()=>C.defaultValue),(a=>{a&&(b.defaultValues=g.exports.cloneDeep(a),I.value={...a})}),{deep:!0,immediate:!0}),s((()=>I.value),(a=>{b.sValues=a}),{deep:!0,immediate:!0}),V({validate:async()=>{var a;await(null==(a=y.value)?void 0:a.validate())}}),(i,e)=>{var l,u,s,g,p,V;const D=v;return 1===(null==(l=a.originData)?void 0:l.factorDisPlayFlag)?(t(),n(d,{key:0},[r(D,{title:"保障计划",class:"insurePlan","show-divider":!1}),r(o(f),{"v-model":o(b).sValues,"origin-data":null==(s=null==(u=a.originData)?void 0:u.productRiskInsureLimitVO)?void 0:s.amountPremiumConfigVO,"defalut-value":o(b).defaultValues,"trial-result":a.trialResult,onTrialChange:O},null,8,["v-model","origin-data","defalut-value","trial-result"]),r(o(c),{"v-model":o(b).sValues,"use-data":o(b).sValues,"origin-data":a.originData.productRiskInsureLimitVO,"risk-info":a.originData,"default-value":o(b).defaultValues,onTrialChange:P},null,8,["v-model","use-data","origin-data","risk-info","default-value"]),r(o(k),{"data-source-folmulate":o(I),"data-source":a.originData,params:{amountUnit:null==(p=null==(g=a.originData)?void 0:g.productRiskInsureLimitVO)?void 0:p.amountPremiumConfigVO.displayUnit,basicsAmount:o(b).basicsAmount,basicsPremium:o(b).basicsPremium,riskId:null==(V=a.originData)?void 0:V.riskId},"default-value":o(b).defaultValues,onTrialChange:T},null,8,["data-source-folmulate","data-source","params","default-value"])],64)):m("",!0)}}});export{D as _};
