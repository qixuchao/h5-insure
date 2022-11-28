System.register(["./vendor-legacy-38c5a7a6.js","./infoCollection-legacy-cd0dd36a.js","./trial-legacy-0b2915b4.js","./index-legacy-6338e9df.js"],(function(e){"use strict";var r,t,i,n,a,o,d,s,l,u,c,y,p;return{setters:[function(e){r=e.d},function(e){t=e.I,i=e.g,n=e.R},function(e){a=e.b,o=e.a,d=e.R,s=e.i},function(e){l=e.a6,u=e.K,c=e.C,y=e.J,p=e.a3}],execute:function(){e("t",(e=>{const{tenantId:r,riskList:t,riskPremium:i,productId:n}=e;return t.map((e=>({tenantId:r,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:a[e.chargePeriod.split("_")[0]],insurancePeriodType:o["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:i[e.riskCode]?.premium,liabilityDetails:e.liabilityVOList.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:n,currentAmount:e.amount,initialAmount:e.amount})))}));const m=(e,r,t=[],n=i.YEAR,a=!1)=>{const o=e.filter((e=>{try{return!!e.extraInfo&&(!JSON.parse(e.extraInfo).packageCode||!!t.includes(e.id))}catch(r){return!1}})),l=o.find((e=>e.riskType===d.MAIN_RISK));return o.map((e=>{const{riskInsureLimitVO:t,riskCategory:i,id:o,riskType:u,riskName:c,riskCode:y,extraInfo:p,riskLiabilityInfoVOList:m,riskCalcMethodInfoVO:k}=e,{insurancePeriodType:I,insurancePeriodValueList:g,paymentFrequencyList:f,paymentPeriodValueList:N,paymentPeriodType:h,annuityDrawFrequencyList:C,annuityDrawValueList:L,insurancePeriodRule:b,paymentPeriodRule:D}=t,{fixedAmount:V,minCopy:O}=k,T={amount:V,riskCode:y,riskId:o,riskName:c,paymentFrequency:n,extraInfo:p,chargePeriod:N?.[0],annuityDrawDate:L?.[0],riskType:u,annuityDrawFrequency:C?.[0],copy:O,coveragePeriod:g?.[0],insuredCode:r?.insurerCode,liabilityVOList:a?m.filter((e=>1===e.optionalFlag&&"FXG086"!==e.liabilityCode)):m,riskCategory:i};return u===d.MAIN_RISK?T:(b===s.ONE_YEAR&&(T.coveragePeriod="year_1"),D===s.ONE_YEAR&&(T.chargePeriod="year_1"),{...T,mainRiskId:l?.id,mainRiskCode:l?.riskCode})}))},k=(e("b",(e=>({orderAmount:e.premium,tenantId:e.tenantId,venderCode:e.detail?.insurerCode,applicationNo:e.applicationNo,policyNo:e.policyNo,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:e.orderCategory,orderStatus:e.orderStatus,orderTopStatus:e.orderTopStatus,tenantOrderHolder:{tenantId:e.tenantId,name:e.holder.name,certNo:e.holder.certNo,certType:c.CERT,mobile:e.holder.mobile,birthday:u(e.holder.certNo),gender:y(e.holder.certNo),extInfo:{hasSocialInsurance:e.holder.socialFlag}},extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,paymentFrequency:e.paymentFrequency,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{tenantId:e.tenantId,relationToHolder:e.insured.relationToHolder,certNo:e.insured.certNo,certType:c.CERT,name:e.insured.name,mobile:e.insured.relationToHolder===n.SELF?e.holder.mobile:"",birthday:u(e.insured.certNo),gender:y(e.insured.certNo),extInfo:{hasSocialInsurance:e.insured.socialFlag},tenantOrderProductList:[{tenantId:e.tenantId,productCode:e.detail?.productCode,productName:e.detail?.productName,premium:e.premium,tenantOrderRiskList:e.tenantOrderRiskList}]}]}))),(e,t)=>{if(!e)return"";const[i,n]=e.split("_"),a=parseInt(n,10);return"day"===i?r(t).add(a,"day").format("YYYY-MM-DD"):r(t).add(a,"year").format("YYYY-MM-DD")}),I=(e,t=r().format("YYYY-MM-DD"))=>r(e).diff(t,"day"),g=(e,r,t)=>{const i=k(e,t),n=k(r,t);return I(i)<=1&&I(n)>=0},f=(e("a",(e=>{const{riskCode:r,liabilityCode:t,birth:i,sex:n}=e,a=k("max_18",i);return"7Y7"!==r||"FXG086"!==t||n===p.FEMALE&&I(a)<=0})),(e,r,t=(e=>!0))=>{const i=u(r),n=y(r),a=[];return e.forEach((e=>{const{riskDetailVOList:r}=e,o=r.map((e=>{const{maxHolderAge:r,minHolderAge:a}=e.riskInsureLimitVO;return g(a,r,i)?(e.riskLiabilityInfoVOList=e.riskLiabilityInfoVOList.filter((r=>t({riskCode:e.riskCode,liabilityCode:r.liabilityCode,birth:i,sex:n}))),e):null}));a.push({riskDetailVOList:o.filter((e=>!!(e&&e.riskLiabilityInfoVOList.length>0)))})})),a});e("g",((e,r=!1,t=(e=>!0))=>{let i=[];return i=r?m(f(l(e.insureDetail.productRiskVoList),e.insured.certNo,t)?.[0]?.riskDetailVOList,e.productDetail,[],e.paymentFrequency,r):f(l(e.insureDetail.productRiskVoList),e.insured.certNo,t).map((t=>m(t.riskDetailVOList,e.productDetail,e.packageRiskIdList,e.paymentFrequency,r))),{calcData:{holder:{personVO:{birthday:u(e.holder.certNo),certType:c.CERT,certNo:e.holder.certNo,gender:Number(y(e.holder.certNo)),mobile:e.holder.mobile,name:e.holder.name,socialFlag:e.holder.socialFlag}},insuredVOList:[{insuredCode:e.productDetail?.insurerCode,relationToHolder:e.insured.relationToHolder,personVO:{birthday:u(e.insured.certNo),certType:c.CERT,certNo:e.insured.certNo,gender:Number(y(e.insured.certNo)),name:e.insured.name,socialFlag:e.insured.socialFlag},productPlanVOList:[{riskVOList:i.flat()}]}],productCode:e.productDetail.productCode,tenantId:e.tenantId},riskVOList:i.flat()}})),e("o",(e=>e&&e.length?e.filter((e=>e.value===t.INSURE)).map((e=>e.productRiskVoList.map((e=>e.id)))).flat():[])),e("c",((e,r)=>!e.productRiskVoList.some((e=>{const t=e.riskInsureLimitVO.minHolderAge,i=e.riskInsureLimitVO.maxHolderAge,n=u(r);return!g(t,i,n)})))),e("e",(e=>{let r=(Math.round(100*parseFloat(e.toString()))/100).toString();const t=r.toString().split(".");return 1===t.length?(r=`${r.toString()}.00`,r):t.length>1?(t[1].length<2&&(r=`${r.toString()}0`),r):e})),e("n",(e=>{if("string"==typeof e){const r=e?.substring(1);return e?.replace(r,"**")}return e})),e("m",(e=>e?.replace(/(\d{3})\d*(\d{4})/,"$1****$2"))),e("i",(e=>e?.replace(/^(.{6})(?:\d+)(.{2})$/,"$1**********$2"))),e("v",(e=>/^\d{6}$/.test(e))),e("d",((e,t="year")=>r().diff(u(e),t,!0)))}}}));
