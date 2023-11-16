import{am as e}from"./index-081cd25a.js";import{q as i}from"./createProposal-63cbb06e.js";import"./trial-d7088865.js";const t=[{name:"年金领取期间",type:"checkbox",configKey:["annuityDrawValueList"],valueKey:"annuityDrawDate"},{name:"领取频率",type:"checkbox",configKey:["annuityDrawFrequencyList"],valueKey:"annuityDrawFrequency"},{name:"交费方式",type:"checkbox",configKey:["paymentFrequencyList"],valueKey:"paymentFrequency",ruleKey:"paymentTypeRule"},{name:"交费期间",type:"checkbox",configKey:["paymentPeriodValueList"],valueKey:"chargePeriod",ruleKey:"paymentPeriodRule",ruleValueKey:"chargePeriod"},{name:"保障期间",type:"checkbox",configKey:["insurancePeriodValueList"],valueKey:"coveragePeriod",ruleKey:"insurancePeriodRule",ruleValueKey:"chargePeriod"}],r=({holder:e,insuredList:i=[]})=>{const t=["birthday","certEndDate","certEndType","certNo","certStartDate","verificationCode","certType","email","gender","mobile","name","id","insuredBeneficiaryType","relationToHolder","relationToMainInsured","tenantOrderBeneficiaryList","extInfo"],r=e=>{const i={extInfo:{}};return"[object Object]"==={}.toString.call(e)&&Object.keys(e).forEach((r=>{t.includes(r)?i[r]=e[r]:i.extInfo[r]=e[r]})),i};return{tenantOrderHolder:r(e),tenantOrderInsuredList:(i||[]).map((e=>r(e)))}},a=async({proposalId:e,productCode:t,tenantId:r,proposalInsuredId:a},n)=>{const o=(await i({id:e,tenantId:r})).data,l={holder:{},insuredVOList:[],productCode:t};l.holder={personVO:null==o?void 0:o.holder},l.insuredVOList=null==o?void 0:o.insuredList.filter((e=>e.id===+a)).map((e=>({personVO:{age:e.age,birthday:e.birthday,bmi:e.bmi,certNo:e.certNo,certType:e.certType,email:e.email,gender:e.gender,hasSocialInsurance:e.hasSocialInsurance,height:e.height,holderRelation:e.holderRelation,insureAreaCode:e.insureAreaCode,insureCityCode:e.insureCityCode,insureProvinceCode:e.insureProvinceCode,mobile:e.mobile,name:e.name,occupationClass:e.occupationClass,occupationCodeList:e.occupationCode,smokeFlag:e.smokeFlag,socialFlag:e.socialFlag,weight:e.weight},productPlanVOList:e.proposalInsuredProductList.map((e=>({insurerCode:null,planCode:"",relationToHolder:"1",riskVOList:e.proposalProductRiskList.map((e=>({amount:e.amount,annuityDrawDate:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,chargePeriod:e.chargePeriod,copy:e.copy,coveragePeriod:e.coveragePeriod,liabilityVOList:e.liabilityVOList.map((e=>({liabilityAmount:null,liabilityAttributeType:e.liabilityAttributeType,liabilityAttributeValueList:e.liabilityAttributeValueList,liabilityCode:e.liabilityCode,liabilityId:e.liabilityId,liabilityRateType:null,liabilityValue:null}))),mainRiskCode:e.mainRiskCode,mainRiskId:e.mainRiskId,paymentFrequency:e.paymentFrequency,premium:e.premium,riskCategory:e.riskCategory,riskCode:e.riskCode,riskId:e.riskId,riskName:e.riskName,riskType:e.riskType})))})))}))),null==n||n(l)},n=(i,t,r)=>{const a={...r,...i},{insuredPremiumList:n=[],initialAmount:o,initialPremium:l=0}=t||{};return a.premium=l,a.orderAmount=l,a.orderRealAmount=l,a.insuredList=(a.insuredList||[]).map(((i,t)=>({...i,certType:i.certType||e.CERT,certNo:(i.certNo||"").toLocaleUpperCase(),productList:(i.productList||[]).map(((e,i)=>{var r,a,o;return{...e,premium:null==(o=null==(a=null==(r=null==n?void 0:n[t])?void 0:r.productPremiumList)?void 0:a[i])?void 0:o.totalPremium,riskList:(e.riskList||[]).map(((e,r)=>{var a,o,u,s;const{initialAmount:d,initialPremium:c,unitAmount:m,unitPremium:y}=(null==(s=null==(u=null==(o=null==(a=null==n?void 0:n[t])?void 0:a.productPremiumList)?void 0:o[i])?void 0:u.riskPremiumDetailVOList)?void 0:s[r])||{};return{...e,initialAmount:d,initialPremium:c,unitAmount:m,unitPremium:y,regularPremium:l,totalPremium:l}}))}}))}))),a};export{t as P,r as f,a as p,n as t};
