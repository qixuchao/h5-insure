import{d as a,r as i,as as e,aB as l,R as u,N as s,b as t,c as n,e as r,f as o,U as d,h as m,a2 as v}from"./index-5930028f.js";import{c as f}from"./cloneDeep-96676b66.js";import{B as g,a as c,R as k}from"./index-c65d52f5.js";function p(a){return Object.keys(a)}const V=a({name:"InsureInfos"}),D=a({...V,props:{originData:{default:()=>({})},modelValue:{default:()=>({})},defaultValue:{default:()=>({})},trialResult:{default:()=>({})}},emits:["trialChange"],setup(a,{expose:V,emit:D}){const C=a,h=i(null),y=i({}),I=i({}),R=e({personalInfo:{},basicsAmount:"",basicsPremium:"",defaultValues:C.defaultValue,changeData:null,sValues:y.value});l("premium"),I.value=l("enumList")||{},u((()=>{}));const b=a=>{C.originData.mainRiskFlag,y.value.riskCategory=C.originData.riskCategory,y.value.riskCode=C.originData.riskCode,y.value.riskId=C.originData.riskId,y.value.riskType=C.originData.riskType,y.value.riskName=C.originData.riskName,y.value.riskType=C.originData.riskType,y.value.mainRiskCode=C.originData.mainRiskCode,y.value.mainRiskId=C.originData.mainRiskId,a?D("trialChange",y.value,a):D("trialChange",y.value)},P=(a,i)=>{i?y.value[i.key]=i.newValue:p(a).forEach((i=>{y.value[i]=a[i]})),b(i)},O=a=>{var i,e;1==+(null==(e=null==(i=C.originData)?void 0:i.productRiskInsureLimitVO)?void 0:e.amountPremiumConfigVO.saleMethod)?R.basicsAmount=null==a?void 0:a.initialAmount:R.basicsAmount=null==a?void 0:a.initialPremium,p(a).forEach((i=>{y.value[i]=a[i]})),b()},T=a=>{y.value.liabilityList=a,b()};return s((()=>C.defaultValue),(a=>{a&&(console.log("--default change ",a),R.defaultValues=f(a),y.value={...a})}),{deep:!0,immediate:!0}),s((()=>y.value),(a=>{R.sValues=a}),{deep:!0,immediate:!0}),V({validate:async()=>{var a;await(null==(a=h.value)?void 0:a.validate())}}),(a,i)=>{var e,l,u,s,f,p;const V=v;return 1===(null==(e=a.originData)?void 0:e.factorDisPlayFlag)?(t(),n(d,{key:0},[r(V,{title:"保障计划",class:"insurePlan","show-divider":!1}),r(o(g),{"v-model":o(R).sValues,"origin-data":null==(u=null==(l=a.originData)?void 0:l.productRiskInsureLimitVO)?void 0:u.amountPremiumConfigVO,"defalut-value":o(R).defaultValues,"trial-result":a.trialResult,onTrialChange:O},null,8,["v-model","origin-data","defalut-value","trial-result"]),r(o(c),{"v-model":o(R).sValues,"use-data":o(R).sValues,"origin-data":a.originData.productRiskInsureLimitVO,"risk-info":a.originData,"default-value":o(R).defaultValues,onTrialChange:P},null,8,["v-model","use-data","origin-data","risk-info","default-value"]),r(o(k),{"data-source-folmulate":o(y),"data-source":a.originData,params:{amountUnit:null==(f=null==(s=a.originData)?void 0:s.productRiskInsureLimitVO)?void 0:f.amountPremiumConfigVO.displayUnit,basicsAmount:o(R).basicsAmount,basicsPremium:o(R).basicsPremium,riskId:null==(p=a.originData)?void 0:p.riskId},"default-value":o(R).defaultValues,onTrialChange:T},null,8,["data-source-folmulate","data-source","params","default-value"])],64)):m("",!0)}}});export{D as _};
