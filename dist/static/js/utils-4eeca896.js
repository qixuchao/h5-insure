import{C as i}from"./index-325daa40.js";import{q as e}from"./createProposal-5b048e29.js";import"./trial-e4064343.js";const t=({holder:i,insuredList:e=[]})=>{const t=["birthday","certEndDate","certEndType","certNo","certStartDate","verificationCode","certType","email","gender","mobile","name","id","insuredBeneficiaryType","relationToHolder","relationToMainInsured","tenantOrderBeneficiaryList","extInfo"],r=i=>{const e={extInfo:{}};return"[object Object]"==={}.toString.call(i)&&Object.keys(i).forEach((r=>{t.includes(r)?e[r]=i[r]:e.extInfo[r]=i[r]})),e};return{tenantOrderHolder:r(i),tenantOrderInsuredList:(e||[]).map((i=>r(i)))}},r=async({proposalId:i,productCode:t,tenantId:r},a)=>{const o=(await e({id:i,tenantId:r})).data,n={holder:{},insuredVOList:[],productCode:t};n.holder={personVO:null==o?void 0:o.proposalHolder},n.insuredVOList=null==o?void 0:o.proposalInsuredList.map((i=>({personVO:{age:i.age,birthday:i.birthday,bmi:i.bmi,certNo:i.certNo,certType:i.certType,email:i.email,gender:i.gender,hasSocialInsurance:i.hasSocialInsurance,height:i.height,holderRelation:i.holderRelation,insureAreaCode:i.insureAreaCode,insureCityCode:i.insureCityCode,insureProvinceCode:i.insureProvinceCode,mobile:i.mobile,name:i.name,occupationClass:i.occupationClass,occupationCodeList:i.occupationCode,smokeFlag:i.smokeFlag,socialFlag:i.socialFlag,weight:i.weight},productPlanVOList:i.proposalInsuredProductList.map((i=>({insurerCode:null,planCode:"",relationToHolder:"1",riskVOList:i.proposalProductRiskList.map((i=>({amount:i.amount,annuityDrawDate:i.annuityDrawDate,annuityDrawType:i.annuityDrawType,chargePeriod:i.chargePeriod,copy:i.copy,coveragePeriod:i.coveragePeriod,liabilityVOList:i.liabilityVOList.map((i=>({liabilityAmount:null,liabilityAttributeType:i.liabilityAttributeType,liabilityAttributeValueList:i.liabilityAttributeValueList,liabilityCode:i.liabilityCode,liabilityId:i.liabilityId,liabilityRateType:null,liabilityValue:null}))),mainRiskCode:i.mainRiskCode,mainRiskId:i.mainRiskId,paymentFrequency:i.paymentFrequency,premium:i.premium,riskCategory:i.riskCategory,riskCode:i.riskCode,riskId:i.riskId,riskName:i.riskName,riskType:i.riskType})))})))}))),null==a||a(n)},a=(e,t,r)=>{const a={...r,...e};let o=[];const{riskInsuredDetailVOList:n=[],initialAmount:l,initialPremium:s=0}=t||{};return n.length&&(o=n.map((i=>{const e={totalPremium:i.totalPremium,riskMap:{}};return i.riskPremiumDetailVOList.forEach((i=>{e.riskMap[i.riskCode]={premium:i.initialPremium,amount:i.initialAmount}})),e}))),a.premium=s,a.orderAmount=s,a.insuredList=(a.insuredList||[]).map(((t,r)=>({...t,certType:t.certType||i.CERT,certNo:(t.certNo||"").toLocaleUpperCase(),productList:(t.productList||[]).map((i=>{var t;return{premium:null==(t=null==o?void 0:o[r])?void 0:t.totalPremium,productCode:e.productCode,productName:e.productName,riskList:(i.riskList||[]).map((i=>{var e,t;const{amount:a,premium:n}=(null==(t=null==(e=null==o?void 0:o[r])?void 0:e.riskMap)?void 0:t[i.riskCode])||{};return{...i,initialAmount:a,initialPremium:n,regularPremium:s,totalPremium:s}}))}}))}))),a};export{t as f,r as p,a as t};
