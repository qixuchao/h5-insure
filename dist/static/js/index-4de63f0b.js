import{d as a,r as i,A as e,ay as l,Z as u,V as s,b as t,c as n,e as r,f as o,$ as d,h as m,a5 as v}from"./index-c1d07286.js";import{c as g}from"./cloneDeep-96676b66.js";import{B as f,a as c,R as k}from"./index-36d3e1c6.js";function p(a){return Object.keys(a)}const V=a({name:"InsureInfos"}),D=a({...V,props:{originData:{default:()=>({})},modelValue:{default:()=>({})},defaultValue:{default:()=>({})},trialResult:{default:()=>({})}},emits:["trialChange"],setup(a,{expose:V,emit:D}){const C=a,y=i(null),h=i({}),I=i({}),b=e({personalInfo:{},basicsAmount:"",basicsPremium:"",defaultValues:C.defaultValue,changeData:null,sValues:h.value});l("premium"),I.value=l("enumList")||{},u((()=>{}));const R=a=>{C.originData.mainRiskFlag,h.value.riskCategory=C.originData.riskCategory,h.value.riskCode=C.originData.riskCode,h.value.riskId=C.originData.riskId,h.value.riskType=C.originData.riskType,h.value.riskName=C.originData.riskName,h.value.riskType=C.originData.riskType,h.value.mainRiskCode=C.originData.mainRiskCode,h.value.mainRiskId=C.originData.mainRiskId,a?D("trialChange",h.value,a):D("trialChange",h.value)},P=(a,i)=>{i?h.value[i.key]=i.newValue:p(a).forEach((i=>{h.value[i]=a[i]})),R(i)},O=a=>{var i,e;1==+(null==(e=null==(i=C.originData)?void 0:i.productRiskInsureLimitVO)?void 0:e.amountPremiumConfigVO.saleMethod)?b.basicsAmount=null==a?void 0:a.initialAmount:b.basicsAmount=null==a?void 0:a.initialPremium,p(a).forEach((i=>{h.value[i]=a[i]})),R()},A=a=>{h.value.liabilityList=a,R()};return s((()=>C.defaultValue),(a=>{a&&(console.log("--default change ",a),b.defaultValues=g(a),h.value={...a})}),{deep:!0,immediate:!0}),s((()=>h.value),(a=>{b.sValues=a}),{deep:!0,immediate:!0}),V({validate:async()=>{var a;await(null==(a=y.value)?void 0:a.validate())}}),(a,i)=>{var e,l,u,s,g,p;const V=v;return 1===(null==(e=a.originData)?void 0:e.factorDisPlayFlag)?(t(),n(d,{key:0},[r(V,{title:"保障计划",class:"insurePlan","show-divider":!1}),r(o(f),{"v-model":o(b).sValues,"origin-data":null==(u=null==(l=a.originData)?void 0:l.productRiskInsureLimitVO)?void 0:u.amountPremiumConfigVO,"defalut-value":o(b).defaultValues,"trial-result":a.trialResult,onTrialChange:O},null,8,["v-model","origin-data","defalut-value","trial-result"]),r(o(c),{"v-model":o(b).sValues,"use-data":o(b).sValues,"origin-data":a.originData.productRiskInsureLimitVO,"risk-info":a.originData,"default-value":o(b).defaultValues,onTrialChange:P},null,8,["v-model","use-data","origin-data","risk-info","default-value"]),r(o(k),{"data-source-folmulate":o(h),"data-source":a.originData,params:{amountUnit:null==(g=null==(s=a.originData)?void 0:s.productRiskInsureLimitVO)?void 0:g.amountPremiumConfigVO.displayUnit,basicsAmount:o(b).basicsAmount,basicsPremium:o(b).basicsPremium,riskId:null==(p=a.originData)?void 0:p.riskId},"default-value":o(b).defaultValues,onTrialChange:A},null,8,["data-source-folmulate","data-source","params","default-value"])],64)):m("",!0)}}});export{D as _};
