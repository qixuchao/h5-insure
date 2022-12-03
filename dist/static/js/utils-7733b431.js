import"./vendor-225246ae.js";import{a6 as e,ab as i}from"./index-5b290e74.js";import{l as r}from"./useStorage-d1a53701.js";import{R as t,g as n}from"./infoCollection-fadc392e.js";import{R as a,b as o,a as d,i as s}from"./trial-70bec762.js";const u=e=>{const{tenantId:i,riskList:r,riskPremium:t,productId:n}=e;return r.map((e=>{var r,a;return{tenantId:i,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:o[e.chargePeriod.split("_")[0]],insurancePeriodType:d["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:null==(r=t[e.riskCode])?void 0:r.premium,liabilityDetails:(null==(a=e.liabilityVOList)?void 0:a.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))))||[],productId:n,currentAmount:e.amount,initialAmount:e.amount}}))},l=i=>e(i).map((e=>{e.riskDetailVOList.find((e=>e.riskType===a.MAIN_RISK));return(e.riskDetailVOList||[]).map((e=>{const{riskCategory:i,riskCode:r,riskType:t,id:n,riskInsureLimitVO:a,riskCalcMethodInfoVO:o}=e,{annuityDrawFrequencyList:d,annuityDrawValueList:s,insurancePeriodValueList:u,paymentFrequencyList:l,paymentPeriodValueList:y}=a,{minCopy:p,maxCopy:m,fixedAmount:c,singeAmount:I}=o;return{amount:c||I,annuityDrawDate:null==s?void 0:s[0],annuityDrawFrequency:null==d?void 0:d[0],chargePeriod:null==y?void 0:y[0],copy:p||m||0,coveragePeriod:null==u?void 0:u[0],liabilityVOList:e.riskLiabilityInfoVOList,paymentFrequency:null==l?void 0:l[0],riderRisk:!0,riderRiskVOList:[],riskCategory:i,riskCode:r,riskId:n,riskType:t}}))})).flat(),y=(e,i,r=[],t=n.YEAR,o=!1)=>{const d=e.filter((e=>{try{if(e.extraInfo){return!JSON.parse(e.extraInfo).packageCode||!!r.includes(e.id)}return!1}catch(i){return!1}})),u=d.find((e=>e.riskType===a.MAIN_RISK));return d.map((e=>{const{riskInsureLimitVO:r,riskCategory:t,id:o,riskType:d,riskName:l,riskCode:y,extraInfo:p,riskLiabilityInfoVOList:m,riskCalcMethodInfoVO:c}=e,{insurancePeriodType:I,insurancePeriodValueList:k,paymentFrequencyList:f,paymentPeriodValueList:P,paymentPeriodType:v,annuityDrawFrequencyList:C,annuityDrawValueList:L,insurancePeriodRule:O,paymentPeriodRule:b}=r,{fixedAmount:g,minCopy:D}=c,V={amount:g,riskCode:y,riskId:o,riskName:l,paymentFrequency:(null==f?void 0:f[0])||n.YEAR,extraInfo:p,chargePeriod:null==P?void 0:P[0],annuityDrawDate:null==L?void 0:L[0],riskType:d,annuityDrawFrequency:null==C?void 0:C[0],copy:D,coveragePeriod:null==k?void 0:k[0],insuredCode:null==i?void 0:i.insurerCode,liabilityVOList:m,riskCategory:t};return d===a.MAIN_RISK?V:(O===s.ONE_YEAR&&(V.coveragePeriod="year_1"),b===s.ONE_YEAR&&(V.chargePeriod="year_1"),{...V,mainRiskId:null==u?void 0:u.id,mainRiskCode:null==u?void 0:u.riskCode})}))},p=e=>/^\d{6}$/.test(e),m=e=>{const{tenantId:i,riskList:r,riskPremium:t,productId:n}=e;return r.map((e=>{var r,t,a,s;var u;return{tenantId:i,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:0,paymentPeriodType:null==(r=o)?void 0:r[e.chargePeriod],insurancePeriodType:d["to_life"===e.coveragePeriod?"to_life":null==(a=null==(t=e.coveragePeriod)?void 0:t.split("_"))?void 0:a[0]],insurancePeriodValue:(u=e.coveragePeriod,!u||Number.isNaN(+u.split("_")[1])?0:null==u?void 0:u.split("_")[1]),riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},regularPremium:0,totalPremium:0,initialPremium:0,liabilityDetails:null==(s=e.liabilityVOList)?void 0:s.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:n,currentAmount:e.amount,initialAmount:e.amount}}))},c=e=>{var i,r,n,a;return{orderAmount:0,tenantId:e.tenantId,venderCode:e.insureDetail.productBasicInfoVO.insurerCode,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:"1",tenantOrderHolder:{tenantId:e.tenantId,certType:e.order.tenantOrderHolder.certEndType,...e.order.tenantOrderHolder},extInfo:{...e.extraInfo,extraInfo:e.extraInfo,buttonCode:e.buttonCode,pageCode:e.pageCode,iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{...e.order.tenantOrderInsuredList[0],tenantId:e.tenantId,certType:e.order.tenantOrderInsuredList[0].certEndType,mobile:e.order.tenantOrderInsuredList[0].relationToHolder===t.SELF?e.order.tenantOrderHolder.mobile:"",tenantOrderProductList:[{tenantId:e.tenantId,productCode:null==(i=e.insureDetail)?void 0:i.productBasicInfoVO.productCode,productName:null==(r=e.insureDetail)?void 0:r.productBasicInfoVO.productName,premium:0,tenantOrderRiskList:m({tenantId:e.tenantId,riskList:y(e.insureDetail.productRiskVoList[0].riskDetailVOList,e.detail),riskPremium:{},productId:null==(n=e.detail)?void 0:n.id})}]}],operateOption:null==(a=e.order)?void 0:a.operateOption}},I=(e,i)=>-1!==i.indexOf("$")?i.replace("$",`${e}`):`${e||""}${i}`,k="PREVIEW_FILE_INFO",f=e=>{r.set("PREVIEW_FILE_INFO",JSON.stringify(e)),i.push("/template/filePreview")},P={2:"richText",3:"link"},v=(e,i)=>{if("1"===e&&i){const e=null==i?void 0:i.split("?");return"pdf"===e[0].substr(e[0].lastIndexOf(".")+1)?"pdf":"picture"}return P[e]};export{k as P,I as c,c as f,v as g,f as o,l as r,u as t,p as v};
