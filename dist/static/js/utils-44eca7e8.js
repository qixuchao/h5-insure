import{as as e,at as r,au as t,av as i,aw as n,ax as a,ay as o}from"./index-04d078a6.js";import{P as d,R as s}from"./infoCollection-5e103c13.js";import{R as l,a as u}from"./trial-80658180.js";const c=(e,r=!1)=>{const{tenantId:t,riskList:i,riskPremium:n,productId:a}=e;let o=[];return o=Object.keys(n).length?i.filter((e=>n[e.riskCode])):i,console.log("=============22222",o),o.map((e=>{var t,i,o,d;console.log(r,"risk.chargePeriod=====",e.chargePeriod);return{amountUnit:1,initialPremium:(null==(t=n[e.riskCode])?void 0:t.premium)||0,totalPremium:(null==(i=n[e.riskCode])?void 0:i.premium)||0,liabilityDetails:(null==(o=e.liabilityVOList)?void 0:o.map((e=>{const{liabilityCode:r,liabilityName:t,liabilityAttributeValue:i,insureFlag:n,liabilityRateType:a,liabilityAttributeType:o,liabilityValue:d}=e;return{liabilityCode:r,liabilityName:t,refundMethod:i,isInsurance:n,liabilityAttributeType:o,liabilityRateType:a,liabilityValue:d,premium:null==d?void 0:d.factorValue,sumInsuredValueStr:null==d?void 0:d.displayValue,sumInsured:null==d?void 0:d.factorValue}})))||[],productId:a,currentAmount:e.initialAmount||0,initialAmount:(null==(d=n[e.riskCode])?void 0:d.amount)||e.initialAmount,...e}}))},m=e=>e.map((e=>{var r,t,i,n,a,o;const{riskCode:d,riskType:s,riskCategory:l,riskLiabilityInfoVOList:u,riskName:c,riskId:m,productRiskInsureLimitVO:p,mainRiskCode:y,mainRiskId:I}=e,{annuityDrawFrequencyList:k,annuityDrawValueList:L,insurancePeriodValueList:v,paymentFrequencyList:O,paymentPeriodValueList:N,amountPremiumConfigVO:f}=p||{},{displayValues:C}=f||{};return{unitAmount:null==(r=null==C?void 0:C[0])?void 0:r.code,annuityDrawDate:null==(t=null==L?void 0:L[0])?void 0:t.code,annuityDrawFrequency:null==(i=null==k?void 0:k[0])?void 0:i.code,chargePeriod:null==(n=null==N?void 0:N[0])?void 0:n.code,copy:1,coveragePeriod:null==(a=null==v?void 0:v[0])?void 0:a.code,liabilityList:u,mainRiskCode:y,mainRiskId:I,paymentFrequency:null==(o=null==O?void 0:O[0])?void 0:o.code,amountUnit:"1",riskCategory:l,riskCode:d,riskName:c,riskId:m,riskType:s}})),p=(e,r,t=[],i=d.YEAR,n=!1)=>{const a=e.filter((e=>{try{if(e.extraInfo){return!JSON.parse(e.extraInfo).packageCode||!!t.includes(e.id)}return!1}catch(r){return!1}}));console.log("lastRiskList",a);const o=a.find((e=>e.riskType===l.MAIN_RISK));return a.map((e=>{const{riskInsureLimitVO:t,riskCategory:i,id:n,riskType:a,riskName:s,riskCode:c,extraInfo:m,riskLiabilityInfoVOList:p,riskCalcMethodInfoVO:y}=e,{insurancePeriodType:I,insurancePeriodValueList:k,paymentFrequencyList:L,paymentPeriodValueList:v,paymentPeriodType:O,annuityDrawFrequencyList:N,annuityDrawValueList:f,insurancePeriodRule:C,paymentPeriodRule:b}=t,{fixedAmount:g,minCopy:T}=y,h={amount:g,riskCode:c,riskId:n,riskName:s,paymentFrequency:(null==L?void 0:L[0])||d.YEAR,extraInfo:m,chargePeriod:null==v?void 0:v[0],annuityDrawDate:null==f?void 0:f[0],riskType:a,annuityDrawFrequency:null==N?void 0:N[0],copy:T,coveragePeriod:null==k?void 0:k[0],insuredCode:null==r?void 0:r.insurerCode,liabilityVOList:p,riskCategory:i};return a===l.MAIN_RISK?h:(C===u.ONE_YEAR&&(h.coveragePeriod="year_1"),b===u.ONE_YEAR&&(h.chargePeriod="year_1"),{...h,mainRiskId:null==o?void 0:o.id,mainRiskCode:null==o?void 0:o.riskCode})}))},y=e=>{var r,a,o;return{orderAmount:e.premium,tenantId:e.tenantId,expiryDate:e.expiryDate,venderCode:null==(r=e.detail)?void 0:r.insurerCode,applicationNo:e.applicationNo,policyNo:e.policyNo,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:e.orderCategory,orderStatus:e.orderStatus,orderTopStatus:e.orderTopStatus,tenantOrderHolder:{tenantId:e.tenantId,name:e.holder.name,certNo:e.holder.certNo,certType:t.CERT,mobile:e.holder.mobile,birthday:i(e.holder.certNo),gender:n(e.holder.certNo),extInfo:{hasSocialInsurance:e.holder.socialFlag}},extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,templateId:e.templateId,paymentFrequency:e.paymentFrequency,successJumpUrl:e.successJumpUrl,isUpgrade:"1"},iseeBizNo:e.iseeBizNo,templateId:e.templateId,isUpgrade:"1"},tenantOrderInsuredList:[{tenantId:e.tenantId,relationToHolder:e.insured.relationToHolder,certNo:e.insured.certNo,certType:t.CERT,name:e.insured.name,mobile:e.insured.relationToHolder===s.SELF?e.holder.mobile:"",birthday:i(e.insured.certNo),gender:n(e.insured.certNo),extInfo:{hasSocialInsurance:e.insured.socialFlag},tenantOrderProductList:[{tenantId:e.tenantId,productCode:null==(a=e.detail)?void 0:a.productCode,productName:null==(o=e.detail)?void 0:o.productName,premium:e.premium,tenantOrderRiskList:e.tenantOrderRiskList}]}]}},I=e=>{const{riskCode:r,liabilityCode:t,birth:i,sex:n}=e,d=((e,r)=>{if(!e)return"";const[t,i]=e.split("_"),n=parseInt(i,10);return"day"===t?o(r).add(n,"day").format("YYYY-MM-DD"):o(r).add(n,"year").format("YYYY-MM-DD")})("max_18",i);return"7Y7"!==r||"FXG086"!==t||n===a.FEMALE&&((e,r=o().format("YYYY-MM-DD"))=>o(e).diff(r,"day"))(d)<=0},k=(e,r=(e=>!0))=>{var t,i,n;const{orderDetail:a}=e;return{agencyId:a.agencyId,venderCode:a.venderCode,applicationNo:a.applicationNo,orderDataSource:a.orderDataSource,policyNo:a.policyNo,commencementTime:a.commencementTime,orderNo:a.orderNo,tenantId:e.tenantId,orderAmount:e.premium,extInfo:{extraInfo:{...a.extInfo.extraInfo,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderHolder:{tenantId:a.tenantOrderHolder.tenantId,name:a.tenantOrderHolder.name,certType:a.tenantOrderHolder.certType,certNo:a.tenantOrderHolder.certNo,mobile:a.tenantOrderHolder.mobile,birthday:a.tenantOrderHolder.birthday,gender:a.tenantOrderHolder.gender},tenantOrderInsuredList:[{premium:e.premium,tenantId:a.tenantOrderInsuredList[0].tenantId,relationToHolder:a.tenantOrderInsuredList[0].relationToHolder,insuredBeneficiaryType:a.tenantOrderInsuredList[0].insuredBeneficiaryType,name:a.tenantOrderInsuredList[0].name,hasSocialInsurance:a.tenantOrderInsuredList[0].hasSocialInsurance,certType:a.tenantOrderInsuredList[0].certType,certNo:a.tenantOrderInsuredList[0].certNo,mobile:a.tenantOrderInsuredList[0].mobile,birthday:a.tenantOrderInsuredList[0].birthday,gender:a.tenantOrderInsuredList[0].gender,tenantOrderProductList:[{tenantId:a.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantId,productCode:e.productDetail.productCode,productName:e.productDetail.productName,tenantOrderRiskList:c({tenantId:e.tenantId,riskList:p((null==(i=null==(t=e.insureDetail.productRiskVoList)?void 0:t[0])?void 0:i.riskDetailVOList)||[],e.productDetail),riskPremium:{},productId:null==(n=e.productDetail)?void 0:n.id},!0)}]}]}},L=e=>/^\d{6}$/.test(e),v="PREVIEW_FILE_INFO",O=t=>{e.set("PREVIEW_FILE_INFO",JSON.stringify(t)),r.push("/template/filePreview")},N={2:"richText",3:"link"},f=(e,r)=>{if("1"==`${e}`&&r){const e=null==r?void 0:r.split("?");return"pdf"===e[0].substr(e[0].lastIndexOf(".")+1)?"pdf":"picture"}return N[e]},C=e=>{var r;const t=null==(r=e.filter((e=>1===e.riskType)))?void 0:r[0];return e.map((e=>(t&&1!==e.riskType&&(e.riskInsureLimitVO.paymentFrequencyList=1===e.riskInsureLimitVO.paymentTypeRule?t.riskInsureLimitVO.paymentFrequencyList:e.riskInsureLimitVO.paymentFrequencyList),e)))};export{v as P,y as a,k as b,p as c,I as d,f as g,O as o,m as r,C as s,c as t,L as v};
