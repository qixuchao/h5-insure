import{s as e,t as r,C as t,v as i,x as n,S as a,y as o}from"./index-e38eab4b.js";import{P as d,R as s}from"./infoCollection-64f5b6d7.js";import{P as l,I as u,R as c,a as m}from"./trial-9995eb1b.js";const y=(e,r=!1)=>{const{tenantId:t,riskList:i,riskPremium:n,productId:a}=e;let o=[];return o=Object.keys(n).length?i.filter((e=>n[e.riskCode])):i,console.log("=============22222",o),o.map((e=>{var i,o,d,s;console.log(r,"risk.chargePeriod=====",e.chargePeriod);return{tenantId:t,amountUnit:1,annuityDrawFrequency:e.annuityDrawType,annuityDrawDate:e.annuityDrawDate,paymentFrequency:r?5:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:l[e.chargePeriod.split("_")[0]],insurancePeriodType:u["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:(null==(i=n[e.riskCode])?void 0:i.premium)||0,totalPremium:(null==(o=n[e.riskCode])?void 0:o.premium)||0,liabilityDetails:(null==(d=e.liabilityVOList)?void 0:d.map((e=>{const{liabilityCode:r,liabilityName:t,liabilityAttributeValue:i,insureFlag:n,liabilityRateType:a,liabilityAttributeType:o,liabilityValue:d}=e;return{liabilityCode:r,liabilityName:t,refundMethod:i,isInsurance:n,liabilityAttributeType:o,liabilityRateType:a,liabilityValue:d,premium:null==d?void 0:d.factorValue,sumInsuredValueStr:null==d?void 0:d.displayValue,sumInsured:null==d?void 0:d.factorValue}})))||[],productId:a,currentAmount:e.amount||0,initialAmount:(null==(s=n[e.riskCode])?void 0:s.amount)||e.amount}}))},p=e=>e.map((e=>{var r;const{riskCode:t,riskType:i,riskCategory:n,riskLiabilityInfoVOList:a,riskName:o,riskId:d,productRiskInsureLimitVO:s,mainRiskCode:l,mainRiskId:u}=e,{annuityDrawFrequencyList:c,annuityDrawValueList:m,insurancePeriodValueList:y,paymentFrequencyList:p,paymentPeriodValueList:I,amountPremiumConfigVO:k}=s||{},{displayValues:L}=k||{};return{initialAmount:null==(r=null==L?void 0:L[0])?void 0:r.code,annuityDrawDate:null==m?void 0:m[0],annuityDrawFrequency:null==c?void 0:c[0],chargePeriod:null==I?void 0:I[0],copy:1,coveragePeriod:null==y?void 0:y[0],liabilityList:a,mainRiskCode:l,mainRiskId:u,paymentFrequency:null==p?void 0:p[0],riskCategory:n,riskCode:t,riskName:o,riskId:d,riskType:i}})),I=(e,r,t=[],i=d.YEAR,n=!1)=>{const a=e.filter((e=>{try{if(e.extraInfo){return!JSON.parse(e.extraInfo).packageCode||!!t.includes(e.id)}return!1}catch(r){return!1}}));console.log("lastRiskList",a);const o=a.find((e=>e.riskType===c.MAIN_RISK));return a.map((e=>{const{riskInsureLimitVO:t,riskCategory:i,id:n,riskType:a,riskName:s,riskCode:l,extraInfo:u,riskLiabilityInfoVOList:y,riskCalcMethodInfoVO:p}=e,{insurancePeriodType:I,insurancePeriodValueList:k,paymentFrequencyList:L,paymentPeriodValueList:O,paymentPeriodType:N,annuityDrawFrequencyList:f,annuityDrawValueList:v,insurancePeriodRule:b,paymentPeriodRule:C}=t,{fixedAmount:g,minCopy:P}=p,T={amount:g,riskCode:l,riskId:n,riskName:s,paymentFrequency:(null==L?void 0:L[0])||d.YEAR,extraInfo:u,chargePeriod:null==O?void 0:O[0],annuityDrawDate:null==v?void 0:v[0],riskType:a,annuityDrawFrequency:null==f?void 0:f[0],copy:P,coveragePeriod:null==k?void 0:k[0],insuredCode:null==r?void 0:r.insurerCode,liabilityVOList:y,riskCategory:i};return a===c.MAIN_RISK?T:(b===m.ONE_YEAR&&(T.coveragePeriod="year_1"),C===m.ONE_YEAR&&(T.chargePeriod="year_1"),{...T,mainRiskId:null==o?void 0:o.id,mainRiskCode:null==o?void 0:o.riskCode})}))},k=e=>{var r,a,o;return{orderAmount:e.premium,tenantId:e.tenantId,expiryDate:e.expiryDate,venderCode:null==(r=e.detail)?void 0:r.insurerCode,applicationNo:e.applicationNo,policyNo:e.policyNo,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:e.orderCategory,orderStatus:e.orderStatus,orderTopStatus:e.orderTopStatus,tenantOrderHolder:{tenantId:e.tenantId,name:e.holder.name,certNo:e.holder.certNo,certType:t.CERT,mobile:e.holder.mobile,birthday:i(e.holder.certNo),gender:n(e.holder.certNo),extInfo:{hasSocialInsurance:e.holder.socialFlag}},extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,templateId:e.templateId,paymentFrequency:e.paymentFrequency,successJumpUrl:e.successJumpUrl,isUpgrade:"1"},iseeBizNo:e.iseeBizNo,templateId:e.templateId,isUpgrade:"1"},tenantOrderInsuredList:[{tenantId:e.tenantId,relationToHolder:e.insured.relationToHolder,certNo:e.insured.certNo,certType:t.CERT,name:e.insured.name,mobile:e.insured.relationToHolder===s.SELF?e.holder.mobile:"",birthday:i(e.insured.certNo),gender:n(e.insured.certNo),extInfo:{hasSocialInsurance:e.insured.socialFlag},tenantOrderProductList:[{tenantId:e.tenantId,productCode:null==(a=e.detail)?void 0:a.productCode,productName:null==(o=e.detail)?void 0:o.productName,premium:e.premium,tenantOrderRiskList:e.tenantOrderRiskList}]}]}},L=e=>{const{riskCode:r,liabilityCode:t,birth:i,sex:n}=e,d=((e,r)=>{if(!e)return"";const[t,i]=e.split("_"),n=parseInt(i,10);return"day"===t?o(r).add(n,"day").format("YYYY-MM-DD"):o(r).add(n,"year").format("YYYY-MM-DD")})("max_18",i);return"7Y7"!==r||"FXG086"!==t||n===a.FEMALE&&((e,r=o().format("YYYY-MM-DD"))=>o(e).diff(r,"day"))(d)<=0},O=(e,r=(e=>!0))=>{var t,i,n;const{orderDetail:a}=e;return{agencyId:a.agencyId,venderCode:a.venderCode,applicationNo:a.applicationNo,orderDataSource:a.orderDataSource,policyNo:a.policyNo,commencementTime:a.commencementTime,orderNo:a.orderNo,tenantId:e.tenantId,orderAmount:e.premium,extInfo:{extraInfo:{...a.extInfo.extraInfo,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderHolder:{tenantId:a.tenantOrderHolder.tenantId,name:a.tenantOrderHolder.name,certType:a.tenantOrderHolder.certType,certNo:a.tenantOrderHolder.certNo,mobile:a.tenantOrderHolder.mobile,birthday:a.tenantOrderHolder.birthday,gender:a.tenantOrderHolder.gender},tenantOrderInsuredList:[{premium:e.premium,tenantId:a.tenantOrderInsuredList[0].tenantId,relationToHolder:a.tenantOrderInsuredList[0].relationToHolder,insuredBeneficiaryType:a.tenantOrderInsuredList[0].insuredBeneficiaryType,name:a.tenantOrderInsuredList[0].name,hasSocialInsurance:a.tenantOrderInsuredList[0].hasSocialInsurance,certType:a.tenantOrderInsuredList[0].certType,certNo:a.tenantOrderInsuredList[0].certNo,mobile:a.tenantOrderInsuredList[0].mobile,birthday:a.tenantOrderInsuredList[0].birthday,gender:a.tenantOrderInsuredList[0].gender,tenantOrderProductList:[{tenantId:a.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantId,productCode:e.productDetail.productCode,productName:e.productDetail.productName,tenantOrderRiskList:y({tenantId:e.tenantId,riskList:I((null==(i=null==(t=e.insureDetail.productRiskVoList)?void 0:t[0])?void 0:i.riskDetailVOList)||[],e.productDetail),riskPremium:{},productId:null==(n=e.productDetail)?void 0:n.id},!0)}]}]}},N=e=>/^\d{6}$/.test(e),f=(e,r)=>-1!==r.indexOf("$")?r.replace("$",`${e}`):`${e||""}${r}`,v="PREVIEW_FILE_INFO",b=t=>{e.set("PREVIEW_FILE_INFO",JSON.stringify(t)),r.push("/template/filePreview")},C={2:"richText",3:"link"},g=(e,r)=>{if("1"==`${e}`&&r){const e=null==r?void 0:r.split("?");return"pdf"===e[0].substr(e[0].lastIndexOf(".")+1)?"pdf":"picture"}return C[e]},P=e=>{var r;const t=null==(r=e.filter((e=>1===e.riskType)))?void 0:r[0];return e.map((e=>(t&&1!==e.riskType&&(e.riskInsureLimitVO.paymentFrequencyList=1===e.riskInsureLimitVO.paymentTypeRule?t.riskInsureLimitVO.paymentFrequencyList:e.riskInsureLimitVO.paymentFrequencyList),e)))};export{v as P,k as a,O as b,I as c,L as d,f as e,g,b as o,p as r,P as s,y as t,N as v};
