import{au as i}from"./index-2278a2d6.js";import{q as e}from"./createProposal-830c75a6.js";import"./trial-0a69ca6d.js";const t=async({proposalId:i,productCode:t,tenantId:r,proposalInsuredId:a},o)=>{const l=(await e({id:i,tenantId:r})).data,n={holder:{},insuredVOList:[],productCode:t};n.holder={personVO:null==l?void 0:l.holder},n.insuredVOList=null==l?void 0:l.insuredList.filter((i=>i.id===+a)).map((i=>({personVO:{age:i.age,birthday:i.birthday,bmi:i.bmi,certNo:i.certNo,certType:i.certType,email:i.email,gender:i.gender,hasSocialInsurance:i.hasSocialInsurance,height:i.height,holderRelation:i.holderRelation,insureAreaCode:i.insureAreaCode,insureCityCode:i.insureCityCode,insureProvinceCode:i.insureProvinceCode,mobile:i.mobile,name:i.name,occupationClass:i.occupationClass,occupationCodeList:i.occupationCode,smokeFlag:i.smokeFlag,socialFlag:i.socialFlag,weight:i.weight},productPlanVOList:i.proposalInsuredProductList.map((i=>({insurerCode:null,planCode:"",relationToHolder:"1",riskVOList:i.proposalProductRiskList.map((i=>({amount:i.amount,annuityDrawDate:i.annuityDrawDate,annuityDrawType:i.annuityDrawType,chargePeriod:i.chargePeriod,copy:i.copy,coveragePeriod:i.coveragePeriod,liabilityVOList:i.liabilityVOList.map((i=>({liabilityAmount:null,liabilityAttributeType:i.liabilityAttributeType,liabilityAttributeValueList:i.liabilityAttributeValueList,liabilityCode:i.liabilityCode,liabilityId:i.liabilityId,liabilityRateType:null,liabilityValue:null}))),mainRiskCode:i.mainRiskCode,mainRiskId:i.mainRiskId,paymentFrequency:i.paymentFrequency,premium:i.premium,riskCategory:i.riskCategory,riskCode:i.riskCode,riskId:i.riskId,riskName:i.riskName,riskType:i.riskType})))})))}))),null==o||o(n)},r=(e,t,r)=>{const a={...r,...e},{insuredPremiumList:o=[],initialAmount:l,initialPremium:n=0}=t||{};return a.premium=n,a.orderAmount=n,a.orderRealAmount=n,a.insuredList=(a.insuredList||[]).map(((e,t)=>({...e,certType:e.certType||i.CERT,certNo:(e.certNo||"").toLocaleUpperCase(),productList:(e.productList||[]).map(((i,e)=>{var r,a,l;return{...i,premium:null==(l=null==(a=null==(r=null==o?void 0:o[t])?void 0:r.productPremiumList)?void 0:a[e])?void 0:l.totalPremium,riskList:(i.riskList||[]).map(((i,r)=>{var a,l,u,s;const{initialAmount:d,initialPremium:m,unitAmount:p,unitPremium:c}=(null==(s=null==(u=null==(l=null==(a=null==o?void 0:o[t])?void 0:a.productPremiumList)?void 0:l[e])?void 0:u.riskPremiumDetailVOList)?void 0:s[r])||{};return{...i,initialAmount:d,initialPremium:m,unitAmount:p,unitPremium:c,regularPremium:n,totalPremium:n}}))}}))}))),a};export{t as p,r as t};
