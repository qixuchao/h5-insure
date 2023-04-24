import{d as e,z as i,o as s,a1 as l,R as a,c as o,A as r,V as n,U as d,g as t,i as u,w as c,h as k,G as I,aT as p}from"./index-d6f83575.js";/* empty css              */import{I as m}from"./index-086fcc73.js";import{S as v}from"./index-41fc2776.js";import{l as y}from"./index-a99358e7.js";const V={key:0},f={key:0,class:"risk2-field"},g=e({name:"ProductRiskList"});var h=I(e({...g,props:{dataSource:{type:Array,default:()=>[]},productInfo:{type:Object,default:()=>({productCode:"",productName:""})},showMainRisk:{type:Boolean,default:()=>!0},defaultValue:{type:Object,default:()=>{}}},emits:["trialChange"],setup(e,{emit:I}){const y=e,g=i({loading:!1,show:!0,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},disabledRiskInfo:[],risksDefaultValue:{}}),h=e=>{const i=[];return e.riskLiabilityInfoVOList.map((e=>(1!=+e.showFlag&&i.push({...e}),[]))),i},R=(e,i,s)=>{var l;g.riskIsInsure[i].data=e;const a=[...g.disabledRiskInfo];null==(l=y.dataSource.insureProductRiskVOList)||l.forEach((e=>{if(1!==e.mainRiskFlag){const i=g.riskIsInsure[e.riskId];i.data&&Object.keys(i.data).length>0&&!i.isDisabled&&a.push(i.data)}})),I("trialChange",a,s)},C=(e,i)=>{var s;null==(s=y.dataSource.productRiskRelationVOList)||s.forEach((s=>{1!==s.collocationType&&(i.riskId===s.riskId?(g.riskIsInsure[i.riskId]&&g.riskIsInsure[i.riskId].selected,2===s.collocationType&&g.riskIsInsure[s.collocationRiskId]&&(g.riskIsInsure[s.collocationRiskId].selected=e),3===s.collocationType&&g.riskIsInsure[s.collocationRiskId]&&(g.riskIsInsure[s.collocationRiskId].selected="1"===e?"2":"1")):i.riskId===s.collocationRiskId&&(3===s.collocationType&&g.riskIsInsure[s.riskId]&&(g.riskIsInsure[s.riskId].selected="1"===e?"2":"1"),2===s.collocationType&&g.riskIsInsure[s.riskId]&&(g.riskIsInsure[s.riskId].selected=e)))})),"2"===e?R({},i.riskId):(e=>{var i,s,l,a,o,r;if(1!==(null==e?void 0:e.factorDisPlayFlag)){const n=null==(i=null==e?void 0:e.productRiskInsureLimitVO)?void 0:i.amountPremiumConfigVO,d={riskCategory:e.riskCategory,riskCode:e.riskCode,riskName:e.riskName,riskId:e.riskId,riskType:e.riskType,mainRiskId:e.mainRiskId,mainRiskCode:e.mainRiskCode,liabilityVOList:h(e)};d.chargePeriod=(null==(s=null==e?void 0:e.paymentPeriodValueList)?void 0:s.length)>0&&(null==e?void 0:e.paymentPeriodValueList[0].code)||null,d.coveragePeriod=(null==(l=null==e?void 0:e.insurancePeriodValueList)?void 0:l.length)>0&&(null==e?void 0:e.insurancePeriodValueList[0].code)||null,d.paymentFrequency=(null==(a=null==e?void 0:e.paymentFrequencyList)?void 0:a.length)>0&&(null==e?void 0:e.paymentFrequencyList[0].code)||null;let t=0;1===n.displayType?t=(null==n?void 0:n.minStepValue)>0?null==n?void 0:n.minStepValue:0:3===n.displayType&&2===n.requireCopies?t=(null==(o=null==n?void 0:n.displayValues)?void 0:o.length)>0?null==n?void 0:n.displayValues[0].value:0:3===n.displayType&&1===n.requireCopies?(t=(null==(r=null==n?void 0:n.displayValues)?void 0:r.length)>0?null==n?void 0:n.displayValues[0].value:0,d.copy=n.minCopiesValue):2===n.displayType?d.copy=n.minCopiesValue:t=0,1===n.saleMethod?d.amount=t:d.premium=t,R(d,e.riskId)}})(i)};return s((()=>{(()=>{var e,i;g.riskIsInsure={},g.disabledRiskInfo=[];let s=null;if(null==(e=y.dataSource.insureProductRiskVOList)||e.forEach((e=>{var i;const l=1!==e.mainRiskFlag?null==(i=y.dataSource.productRiskRelationVOList)?void 0:i.find((i=>i.collocationRiskId===e.riskId)):{};1===e.mainRiskFlag&&(s=e),g.riskIsInsure[e.riskId]={selected:"2",data:null,relation:l,isMust:!1}})),s){const e=null==(i=y.dataSource.productRiskRelationVOList)?void 0:i.filter((e=>e.riskId===s.riskId));if(!e)return;null==e||e.forEach((e=>{var i,s,l,a,o,r,n,d,t;if(2===e.collocationType){g.riskIsInsure[e.collocationRiskId].selected="1",g.riskIsInsure[e.collocationRiskId].isMust=!0;const u=null==(i=y.dataSource.insureProductRiskVOList)?void 0:i.find((i=>e.collocationRiskId===i.riskId));if(u&&1!==u.factorDisPlayFlag&&(null==(s=null==u?void 0:u.productRiskInsureLimitVO)?void 0:s.amountPremiumConfigVO)){const i=null==(l=u.riskLiabilityInfoVOList)?void 0:l.every((e=>1!==e.showFlag)),s=null==(a=null==u?void 0:u.productRiskInsureLimitVO)?void 0:a.amountPremiumConfigVO;if(i){g.riskIsInsure[e.collocationRiskId].isDisabled=!0;const i={riskCategory:u.riskCategory,riskCode:u.riskCode,riskName:u.riskName,riskId:u.riskId,riskType:u.riskType,mainRiskId:u.mainRiskId,mainRiskCode:u.mainRiskCode,liabilityVOList:h(u)};i.chargePeriod=(null==(o=null==u?void 0:u.paymentPeriodValueList)?void 0:o.length)>0&&(null==u?void 0:u.paymentPeriodValueList[0].code)||null,i.coveragePeriod=(null==(r=null==u?void 0:u.insurancePeriodValueList)?void 0:r.length)>0&&(null==u?void 0:u.insurancePeriodValueList[0].code)||null,i.paymentFrequency=(null==(n=null==u?void 0:u.paymentFrequencyList)?void 0:n.length)>0&&(null==u?void 0:u.paymentFrequencyList[0].code)||null;let l=0;1===s.displayType?l=(null==s?void 0:s.minStepValue)>0?null==s?void 0:s.minStepValue:0:3===s.displayType&&2===s.requireCopies?l=(null==(d=null==s?void 0:s.displayValues)?void 0:d.length)>0?null==s?void 0:s.displayValues[0].value:0:3===s.displayType&&1===s.requireCopies?(l=(null==(t=null==s?void 0:s.displayValues)?void 0:t.length)>0?null==s?void 0:s.displayValues[0].value:0,i.copy=s.minCopiesValue):2===s.displayType&&(i.copy=s.minCopiesValue),1===s.saleMethod?i.amount=l:i.premium=l,g.disabledRiskInfo.push(i),R(i,u.riskId)}}}3===e.collocationType&&(g.riskIsInsure[e.collocationRiskId].selected="2",g.riskIsInsure[e.collocationRiskId].isMust=!0)}))}})()})),l((()=>{g.loading=!0})),a((()=>g.riskIsInsure),(e=>{}),{deep:!0,immediate:!0}),a((()=>y.defaultValue),(e=>{(null==e?void 0:e.length)>0&&e.forEach((e=>{g.risksDefaultValue[e.riskCode]=e,g.riskIsInsure[e.riskId]&&(g.riskIsInsure[e.riskId].selected="1",R(e,e.riskId))}))}),{deep:!0,immediate:!0}),(i,s)=>{const l=v,a=p;return o(!0),r(d,null,n(e.dataSource.insureProductRiskVOList,(i=>{var s,n;return o(),r(d,{key:i.riskCode},[(!e.showMainRisk&&1!==i.mainRiskFlag||e.showMainRisk)&&(null==(n=null==(s=t(g).riskIsInsure)?void 0:s[i.riskId])?void 0:n.relation)?(o(),r("div",V,[u(a,{modelValue:t(g).riskIsInsure[i.riskId].selected,"onUpdate:modelValue":e=>t(g).riskIsInsure[i.riskId].selected=e,label:i.riskName,name:"selected","label-width":"50%",border:!1,class:"risk-select-field risk-name"},{input:c((()=>[u(l,{modelValue:t(g).riskIsInsure[i.riskId].selected,"onUpdate:modelValue":e=>t(g).riskIsInsure[i.riskId].selected=e,"active-value":"1","inactive-value":"2",size:"26px",disabled:t(g).riskIsInsure[i.riskId].isMust,style:{"margin-right":"8px"},onChange:e=>C(e,i)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])])),_:2},1032,["modelValue","onUpdate:modelValue","label"]),"1"===t(g).riskIsInsure[i.riskId].selected?(o(),r("div",f,[u(m,{modelValue:t(g).riskIsInsure[i.riskId].data,"onUpdate:modelValue":e=>t(g).riskIsInsure[i.riskId].data=e,"origin-data":i,"product-factor":e.dataSource.productFactor,"default-value":t(g).risksDefaultValue[i.riskCode],onTrialChange:(e,s)=>R(e,i.riskId,s)},null,8,["modelValue","onUpdate:modelValue","origin-data","product-factor","default-value","onTrialChange"])])):k("",!0)])):k("",!0)],64)})),128)}}}),[["__scopeId","data-v-212a02af"]]);const R=(e,i,s)=>{var l,a,o,r;const n=e,{holder:d}=s,t=s.insuredVOList[0],u=(i||"").split("_");if(u.length<2)return i;if(y.exports.isNaN(Number(u[1])))return i;if(u[1]-=1,1===n.exemptFlag){if("to"===u[0]){let e=0;1===n.exemptType?(null==(l=null==d?void 0:d.personVO)?void 0:l.birthday)&&(e=parseInt(""+((new Date).getTime()-new Date(null==(a=d.personVO)?void 0:a.birthday).getTime())/31536e6,10)):2===n.exemptType&&(null==(o=null==t?void 0:t.personVO)?void 0:o.birthday)&&(e=parseInt(""+(+(new Date).getTime()-new Date(null==(r=t.personVO)?void 0:r.birthday).getTime())/31536e6,10)),u[1]=+u[1]-e}u[0]="year"}return u.join("_")},C=(e,i)=>{const s=[],l={};return e.forEach((e=>{l[e.riskId]=e})),null==i||i.forEach((e=>{var i,a,o,r;const{collocationType:n,collocationRiskId:d,riskId:t}=e;switch(n){case 2:{const e=null==(i=l[t])?void 0:i.riskName,o=null==(a=l[d])?void 0:a.riskName;s.push(`${e} 和 ${o} 必须同时投保`);break}case 3:{const e=null==(o=l[t])?void 0:o.riskName,i=null==(r=l[d])?void 0:r.riskName;s.push(`${e} 和 ${i} 不能同时投保`);break}}})),s};export{h as P,R as d,C as g};
