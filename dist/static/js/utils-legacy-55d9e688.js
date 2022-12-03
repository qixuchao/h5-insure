System.register(["./vendor-legacy-f6075170.js","./index-legacy-70167a3a.js","./useStorage-legacy-bb84d075.js","./infoCollection-legacy-7c21ae47.js","./trial-legacy-1d297c41.js"],(function(e){"use strict";var i,r,t,n,a,o,d,s,u;return{setters:[function(){},function(e){i=e.a6,r=e.aa},function(e){t=e.l},function(e){n=e.R,a=e.g},function(e){o=e.R,d=e.b,s=e.a,u=e.i}],execute:function(){e("t",(e=>{const{tenantId:i,riskList:r,riskPremium:t,productId:n}=e;return r.map((e=>({tenantId:i,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:d[e.chargePeriod.split("_")[0]],insurancePeriodType:s["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:t[e.riskCode]?.premium||0,totalPremium:t[e.riskCode]?.premium||0,liabilityDetails:e.liabilityVOList?.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue})))||[],productId:n,currentAmount:e.amount,initialAmount:e.amount})))})),e("r",(e=>i(e).map((e=>(e.riskDetailVOList.find((e=>e.riskType===o.MAIN_RISK)),(e.riskDetailVOList||[]).map((e=>{const{riskCategory:i,riskCode:r,riskType:t,id:n,riskInsureLimitVO:a,riskCalcMethodInfoVO:o}=e,{annuityDrawFrequencyList:d,annuityDrawValueList:s,insurancePeriodValueList:u,paymentFrequencyList:y,paymentPeriodValueList:l}=a,{minCopy:c,maxCopy:p,fixedAmount:m,singeAmount:I}=o;return{amount:m||I,annuityDrawDate:s?.[0],annuityDrawFrequency:d?.[0],chargePeriod:l?.[0],copy:c||p||0,coveragePeriod:u?.[0],liabilityVOList:e.riskLiabilityInfoVOList,paymentFrequency:y?.[0],riderRisk:!0,riderRiskVOList:[],riskCategory:i,riskCode:r,riskId:n,riskType:t}}))))).flat()));const y=(e,i,r=[],t=a.YEAR,n=!1)=>{const d=e.filter((e=>{try{return!!e.extraInfo&&(!JSON.parse(e.extraInfo).packageCode||!!r.includes(e.id))}catch(i){return!1}})),s=d.find((e=>e.riskType===o.MAIN_RISK));return d.map((e=>{const{riskInsureLimitVO:r,riskCategory:t,id:n,riskType:d,riskName:y,riskCode:l,extraInfo:c,riskLiabilityInfoVOList:p,riskCalcMethodInfoVO:m}=e,{insurancePeriodType:I,insurancePeriodValueList:k,paymentFrequencyList:f,paymentPeriodValueList:P,paymentPeriodType:C,annuityDrawFrequencyList:g,annuityDrawValueList:L,insurancePeriodRule:O,paymentPeriodRule:b}=r,{fixedAmount:D,minCopy:V}=m,N={amount:D,riskCode:l,riskId:n,riskName:y,paymentFrequency:f?.[0]||a.YEAR,extraInfo:c,chargePeriod:P?.[0],annuityDrawDate:L?.[0],riskType:d,annuityDrawFrequency:g?.[0],copy:V,coveragePeriod:k?.[0],insuredCode:i?.insurerCode,liabilityVOList:p,riskCategory:t};return d===o.MAIN_RISK?N:(O===u.ONE_YEAR&&(N.coveragePeriod="year_1"),b===u.ONE_YEAR&&(N.chargePeriod="year_1"),{...N,mainRiskId:s?.id,mainRiskCode:s?.riskCode})}))},l=(e("v",(e=>/^\d{6}$/.test(e))),e=>{const{tenantId:i,riskList:r,riskPremium:t,productId:n}=e;return r.map((e=>{var r;return{tenantId:i,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:0,paymentPeriodType:d?.[e.chargePeriod],insurancePeriodType:s["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod?.split("_")?.[0]],insurancePeriodValue:(r=e.coveragePeriod,!r||Number.isNaN(+r.split("_")[1])?0:r?.split("_")[1]),riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},regularPremium:0,totalPremium:0,initialPremium:0,liabilityDetails:e.liabilityVOList?.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:n,currentAmount:e.amount,initialAmount:e.amount}}))}),c=(e("f",(e=>({orderAmount:0,tenantId:e.tenantId,venderCode:e.insureDetail.productBasicInfoVO.insurerCode,orderDataSource:"1",agencyId:e.agencyCode,agentCode:e.agentCode,saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:"1",tenantOrderHolder:{tenantId:e.tenantId,certType:e.order.tenantOrderHolder?.certEndType||"1",...e.order.tenantOrderHolder},extInfo:{...e.extraInfo,extraInfo:e.extraInfo,buttonCode:e.buttonCode,pageCode:e.pageCode,iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{...e.order.tenantOrderInsuredList[0],tenantId:e.tenantId,certType:e.order.tenantOrderInsuredList?.[0]?.certEndType||"1",mobile:e.order.tenantOrderInsuredList[0].relationToHolder===n.SELF?e.order.tenantOrderHolder.mobile:"",tenantOrderProductList:[{tenantId:e.tenantId,productCode:e.insureDetail?.productBasicInfoVO.productCode,productName:e.insureDetail?.productBasicInfoVO.productName,premium:0,tenantOrderRiskList:l({tenantId:e.tenantId,riskList:y(e.insureDetail.productRiskVoList[0].riskDetailVOList,e.detail),riskPremium:{},productId:e.detail?.id})}]}],operateOption:e.order?.operateOption}))),e("c",((e,i)=>-1!==i.indexOf("$")?i.replace("$",`${e}`):`${e||""}${i}`)),e("P","PREVIEW_FILE_INFO")),p=(e("o",(e=>{t.set(c,JSON.stringify(e)),r.push("/template/filePreview")})),{2:"richText",3:"link"});e("g",((e,i)=>{if("1"===e&&i){const e=i?.split("?");return"pdf"===e[0].substr(e[0].lastIndexOf(".")+1)?"pdf":"picture"}return p[e]}))}}}));
