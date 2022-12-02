import"./vendor-87894311.js";import{l as e}from"./useStorage-2847e8df.js";import{R as i,g as r}from"./infoCollection-2a6bd55e.js";import{R as t,i as n,b as a,a as o}from"./trial-1ceefc83.js";import{a6 as d}from"./index-881f6d78.js";const s=e=>{const{tenantId:i,riskList:r,riskPremium:t,productId:n}=e;return r.map((e=>{var r,d;return{tenantId:i,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:a[e.chargePeriod.split("_")[0]],insurancePeriodType:o["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:null==(r=t[e.riskCode])?void 0:r.premium,liabilityDetails:(null==(d=e.liabilityVOList)?void 0:d.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))))||[],productId:n,currentAmount:e.amount,initialAmount:e.amount}}))},u=e=>d(e).map((e=>{e.riskDetailVOList.find((e=>e.riskType===t.MAIN_RISK));return(e.riskDetailVOList||[]).map((e=>{const{riskCategory:i,riskCode:r,riskType:t,id:n,riskInsureLimitVO:a,riskCalcMethodInfoVO:o}=e,{annuityDrawFrequencyList:d,annuityDrawValueList:s,insurancePeriodValueList:u,paymentFrequencyList:l,paymentPeriodValueList:y}=a,{minCopy:p,maxCopy:c,fixedAmount:m,singeAmount:I}=o;return{amount:m||I,annuityDrawDate:null==s?void 0:s[0],annuityDrawFrequency:null==d?void 0:d[0],chargePeriod:null==y?void 0:y[0],copy:p||c||0,coveragePeriod:null==u?void 0:u[0],liabilityVOList:e.riskLiabilityInfoVOList,paymentFrequency:null==l?void 0:l[0],riderRisk:!0,riderRiskVOList:[],riskCategory:i,riskCode:r,riskId:n,riskType:t}}))})).flat(),l=(e,i,a=[],o=r.YEAR,d=!1)=>{const s=e.filter((e=>{try{if(e.extraInfo){return!JSON.parse(e.extraInfo).packageCode||!!a.includes(e.id)}return!1}catch(i){return!1}})),u=s.find((e=>e.riskType===t.MAIN_RISK));return s.map((e=>{const{riskInsureLimitVO:a,riskCategory:o,id:d,riskType:s,riskName:l,riskCode:y,extraInfo:p,riskLiabilityInfoVOList:c,riskCalcMethodInfoVO:m}=e,{insurancePeriodType:I,insurancePeriodValueList:k,paymentFrequencyList:v,paymentPeriodValueList:P,paymentPeriodType:f,annuityDrawFrequencyList:C,annuityDrawValueList:L,insurancePeriodRule:O,paymentPeriodRule:D}=a,{fixedAmount:V,minCopy:g}=m,N={amount:V,riskCode:y,riskId:d,riskName:l,paymentFrequency:(null==v?void 0:v[0])||r.YEAR,extraInfo:p,chargePeriod:null==P?void 0:P[0],annuityDrawDate:null==L?void 0:L[0],riskType:s,annuityDrawFrequency:null==C?void 0:C[0],copy:g,coveragePeriod:null==k?void 0:k[0],insuredCode:null==i?void 0:i.insurerCode,liabilityVOList:c,riskCategory:o};return s===t.MAIN_RISK?N:(O===n.ONE_YEAR&&(N.coveragePeriod="year_1"),D===n.ONE_YEAR&&(N.chargePeriod="year_1"),{...N,mainRiskId:null==u?void 0:u.id,mainRiskCode:null==u?void 0:u.riskCode})}))},y=e=>{const{tenantId:i,riskList:r,riskPremium:t,productId:n}=e;return r.map((e=>{var r,d,s,u,l;var y;return{tenantId:i,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:0,paymentPeriodType:null==(r=a)?void 0:r[e.chargePeriod],insurancePeriodType:o["to_life"===e.coveragePeriod?"to_life":null==(s=null==(d=e.coveragePeriod)?void 0:d.split("_"))?void 0:s[0]],insurancePeriodValue:(y=e.coveragePeriod,!y||Number.isNaN(+y.split("_")[1])?0:null==y?void 0:y.split("_")[1]),riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:null==(u=t[e.riskCode])?void 0:u.premium,liabilityDetails:null==(l=e.liabilityVOList)?void 0:l.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:n,currentAmount:e.amount,initialAmount:e.amount}}))},p=e=>{var r,t,n,a;return{orderAmount:0,tenantId:e.tenantId,venderCode:e.insureDetail.productBasicInfoVO.insurerCode,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:"1",tenantOrderHolder:{tenantId:e.tenantId,certType:e.order.tenantOrderHolder.certEndType,...e.order.tenantOrderHolder},extInfo:{...e.extraInfo,buttonCode:e.buttonCode,pageCode:e.pageCode,iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{...e.order.tenantOrderInsuredList[0],tenantId:e.tenantId,certType:e.order.tenantOrderInsuredList[0].certEndType,mobile:e.order.tenantOrderInsuredList[0].relationToHolder===i.SELF?e.order.tenantOrderHolder.mobile:"",tenantOrderProductList:[{tenantId:e.tenantId,productCode:null==(r=e.insureDetail)?void 0:r.productBasicInfoVO.productCode,productName:null==(t=e.insureDetail)?void 0:t.productBasicInfoVO.productName,premium:0,tenantOrderRiskList:y({tenantId:e.tenantId,riskList:l(e.insureDetail.productRiskVoList[0].riskDetailVOList,e.detail),riskPremium:{},productId:null==(n=e.detail)?void 0:n.id})}]}],operateOption:null==(a=e.order)?void 0:a.operateOption}},c=(e,i)=>-1!==i.indexOf("$")?i.replace("$",`${e}`):`${e||""}${i}`,m="PREVIEW_FILE_INFO",I=i=>{const{origin:r}=window.location;e.set("PREVIEW_FILE_INFO",JSON.stringify(i));const t=`${r}/template/filePreview`;window.open(t)};export{m as P,c,p as f,I as o,u as r,s as t};
