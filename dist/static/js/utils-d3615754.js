import{ad as i,af as e,ag as t,ah as r}from"./index-30a3e375.js";import{q as a}from"./createProposal-6a1cdca4.js";import"./trial-c4785010.js";import"./PolicyInfo-39b0c05c.js";const o=async({proposalId:i,productCode:e,tenantId:t,proposalInsuredId:r},o)=>{const n=(await a({id:i,tenantId:t})).data,l={holder:{},insuredVOList:[],productCode:e};l.holder={personVO:null==n?void 0:n.holder},l.insuredVOList=null==n?void 0:n.insuredList.filter((i=>i.id===+r)).map((i=>({personVO:{age:i.age,birthday:i.birthday,bmi:i.bmi,certNo:i.certNo,certType:i.certType,email:i.email,gender:i.gender,hasSocialInsurance:i.hasSocialInsurance,height:i.height,holderRelation:i.holderRelation,insureAreaCode:i.insureAreaCode,insureCityCode:i.insureCityCode,insureProvinceCode:i.insureProvinceCode,mobile:i.mobile,name:i.name,occupationClass:i.occupationClass,occupationCodeList:i.occupationCode,smokeFlag:i.smokeFlag,socialFlag:i.socialFlag,weight:i.weight},productPlanVOList:i.proposalInsuredProductList.map((i=>({insurerCode:null,planCode:"",relationToHolder:"1",riskVOList:i.proposalProductRiskList.map((i=>({amount:i.amount,annuityDrawDate:i.annuityDrawDate,annuityDrawType:i.annuityDrawType,chargePeriod:i.chargePeriod,copy:i.copy,coveragePeriod:i.coveragePeriod,liabilityVOList:i.liabilityVOList.map((i=>({liabilityAmount:null,liabilityAttributeType:i.liabilityAttributeType,liabilityAttributeValueList:i.liabilityAttributeValueList,liabilityCode:i.liabilityCode,liabilityId:i.liabilityId,liabilityRateType:null,liabilityValue:null}))),mainRiskCode:i.mainRiskCode,mainRiskId:i.mainRiskId,paymentFrequency:i.paymentFrequency,premium:i.premium,riskCategory:i.riskCategory,riskCode:i.riskCode,riskId:i.riskId,riskName:i.riskName,riskType:i.riskType})))})))}))),null==o||o(l)},n=(i,e,a)=>{var o;const{beneficiaryList:n,guardian:l}=(null==(o=i.insuredList)?void 0:o[0])||{},u=t(a,i),{insuredPremiumList:s=[],initialAmount:d,initialPremium:m=0}=e||{};return u.premium=m,u.orderAmount=m,u.orderRealAmount=m,u.insuredList=(u.insuredList||[]).map(((i,e)=>({...i,certType:i.certType||r.CERT,certNo:(i.certNo||"").toLocaleUpperCase(),beneficiaryList:n,guardian:l,productList:(i.productList||[]).map(((i,t)=>{var r,a,o;return{...i,premium:null==(o=null==(a=null==(r=null==s?void 0:s[e])?void 0:r.productPremiumList)?void 0:a[t])?void 0:o.totalPremium,riskList:(i.riskList||[]).map(((i,r)=>{var a,o,n,l;const{initialAmount:u,initialPremium:d,unitAmount:p,unitPremium:c}=(null==(l=null==(n=null==(o=null==(a=null==s?void 0:s[e])?void 0:a.productPremiumList)?void 0:o[t])?void 0:n.riskPremiumDetailVOList)?void 0:l[r])||{};return{...i,initialAmount:u||i.initialAmount,initialPremium:d||i.initialPremium,unitAmount:p||i.unitAmount,unitPremium:c||i.unitPremium,regularPremium:m,totalPremium:m}}))}}))}))),u},l=()=>i.get(`${e}_userInfo`);export{l as g,o as p,n as t};
