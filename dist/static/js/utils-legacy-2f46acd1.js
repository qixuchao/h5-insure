System.register(["./vendor-legacy-b4f39fe8.js","./infoCollection-legacy-581c8342.js","./trial-legacy-69f60bf6.js","./index-legacy-b93bc229.js"],(function(e){"use strict";var r,i,t,n,a,o,d,s,u,l,c,y,p;return{setters:[function(e){r=e.d},function(e){i=e.I,t=e.R,n=e.g},function(e){a=e.b,o=e.a,d=e.R,s=e.i},function(e){u=e.a6,l=e.K,c=e.C,y=e.J,p=e.a3}],execute:function(){e("t",(e=>{const{tenantId:r,riskList:i,riskPremium:t,productId:n}=e;return i.map((e=>({tenantId:r,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:a[e.chargePeriod.split("_")[0]],insurancePeriodType:o["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:t[e.riskCode]?.premium,liabilityDetails:e.liabilityVOList.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:n,currentAmount:e.amount,initialAmount:e.amount})))})),e("r",(e=>u(e).map((e=>{const r=e.riskDetailVOList.find((e=>e.riskType===d.MAIN_RISK)),i=e.riskDetailVOList.filter((e=>e.riskType===d.RIDER_RISK)),t=e=>e.map((e=>{const{riskCategory:n,riskCode:a,riskType:o,id:d,riskInsureLimitVO:s,riskCalcMethodInfoVO:u}=e,{annuityDrawFrequencyList:l,annuityDrawValueList:c,insurancePeriodValueList:y,paymentFrequencyList:p,paymentPeriodValueList:m}=s,{minCopy:k,maxCopy:I,fixedAmount:C,singeAmount:f}=u;return{amount:C||f,annuityDrawDate:c?.[0],annuityDrawFrequency:l?.[0],chargePeriod:m?.[0],copy:k||I||0,coveragePeriod:y?.[0],liabilityVOList:e.riskLiabilityInfoVOList,mainRisk:e.riskCode===r.riskCode,mainRiskCode:e.riskCode===r.riskCode?r.riskCode:void 0,mainRiskId:e.riskCode===r.riskCode?r.riskId:void 0,paymentFrequency:p?.[0],riderRisk:!0,riderRiskVOList:1===o?t(i):[],riskCategory:n,riskCode:a,riskId:d,riskType:o}}));return t([r])})).flat()));const m=(e,r,i=[],t=n.YEAR,a=!1)=>{const o=e.filter((e=>{try{return!!e.extraInfo&&(!JSON.parse(e.extraInfo).packageCode||!!i.includes(e.id))}catch(r){return!1}})),u=o.find((e=>e.riskType===d.MAIN_RISK));return o.map((e=>{const{riskInsureLimitVO:i,riskCategory:t,id:a,riskType:o,riskName:l,riskCode:c,extraInfo:y,riskLiabilityInfoVOList:p,riskCalcMethodInfoVO:m}=e,{insurancePeriodType:k,insurancePeriodValueList:I,paymentFrequencyList:C,paymentPeriodValueList:f,paymentPeriodType:L,annuityDrawFrequencyList:N,annuityDrawValueList:b,insurancePeriodRule:D,paymentPeriodRule:O}=i,{fixedAmount:g,minCopy:V}=m,h={amount:g,riskCode:c,riskId:a,riskName:l,paymentFrequency:C?.[0]||n.YEAR,extraInfo:y,chargePeriod:f?.[0],annuityDrawDate:b?.[0],riskType:o,annuityDrawFrequency:N?.[0],copy:V,coveragePeriod:I?.[0],insuredCode:r?.insurerCode,liabilityVOList:p,riskCategory:t};return o===d.MAIN_RISK?h:(D===s.ONE_YEAR&&(h.coveragePeriod="year_1"),O===s.ONE_YEAR&&(h.chargePeriod="year_1"),{...h,mainRiskId:u?.id,mainRiskCode:u?.riskCode})}))},k=(e("a",(e=>({orderAmount:e.premium,tenantId:e.tenantId,venderCode:e.detail?.insurerCode,applicationNo:e.applicationNo,policyNo:e.policyNo,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:e.orderCategory,orderStatus:e.orderStatus,orderTopStatus:e.orderTopStatus,tenantOrderHolder:{tenantId:e.tenantId,name:e.holder.name,certNo:e.holder.certNo,certType:c.CERT,mobile:e.holder.mobile,birthday:l(e.holder.certNo),gender:y(e.holder.certNo),extInfo:{hasSocialInsurance:e.holder.socialFlag}},extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,paymentFrequency:e.paymentFrequency,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{tenantId:e.tenantId,relationToHolder:e.insured.relationToHolder,certNo:e.insured.certNo,certType:c.CERT,name:e.insured.name,mobile:e.insured.relationToHolder===t.SELF?e.holder.mobile:"",birthday:l(e.insured.certNo),gender:y(e.insured.certNo),extInfo:{hasSocialInsurance:e.insured.socialFlag},tenantOrderProductList:[{tenantId:e.tenantId,productCode:e.detail?.productCode,productName:e.detail?.productName,premium:e.premium,tenantOrderRiskList:e.tenantOrderRiskList}]}]}))),(e,i)=>{if(!e)return"";const[t,n]=e.split("_"),a=parseInt(n,10);return"day"===t?r(i).add(a,"day").format("YYYY-MM-DD"):r(i).add(a,"year").format("YYYY-MM-DD")}),I=(e,i=r().format("YYYY-MM-DD"))=>r(e).diff(i,"day"),C=(e("v",(e=>{const{riskCode:r,liabilityCode:i,birth:t,sex:n}=e,a=k("max_18",t);return"7Y7"!==r||"FXG086"!==i||n===p.FEMALE&&I(a)<=0})),(e,r,i=(e=>!0))=>{const t=l(r),n=y(r),a=[];return e.forEach((e=>{const{riskDetailVOList:r}=e,o=r.map((e=>{const{maxHolderAge:r,minHolderAge:a}=e.riskInsureLimitVO;return((e,r,i)=>{const t=k(e,i),n=k(r,i);return I(t)<=1&&I(n)>=0})(a,r,t)?(e.riskLiabilityInfoVOList=e.riskLiabilityInfoVOList.filter((r=>i({riskCode:e.riskCode,liabilityCode:r.liabilityCode,birth:t,sex:n}))),e):null}));a.push({riskDetailVOList:o.filter((e=>!!(e&&e.riskLiabilityInfoVOList.length>0)))})})),a}),f=(e("g",((e,r=!1,i=(e=>!0))=>{let t=[];return t=r?m(C(u(e.insureDetail.productRiskVoList),e.insured.certNo,i)?.[0]?.riskDetailVOList,e.productDetail,[],e.paymentFrequency,r):C(u(e.insureDetail.productRiskVoList),e.insured.certNo,i).map((i=>m(i.riskDetailVOList,e.productDetail,e.packageRiskIdList,e.paymentFrequency,r))),{calcData:{holder:{personVO:{birthday:l(e.holder.certNo),certType:c.CERT,certNo:e.holder.certNo,gender:Number(y(e.holder.certNo)),mobile:e.holder.mobile,name:e.holder.name,socialFlag:e.holder.socialFlag}},insuredVOList:[{insuredCode:e.productDetail?.insurerCode,relationToHolder:e.insured.relationToHolder,personVO:{birthday:l(e.insured.certNo),certType:c.CERT,certNo:e.insured.certNo,gender:Number(y(e.insured.certNo)),name:e.insured.name,socialFlag:e.insured.socialFlag},productPlanVOList:[{riskVOList:t.flat()}]}],productCode:e.productDetail.productCode,tenantId:e.tenantId},riskVOList:t.flat()}})),e("o",(e=>e&&e.length?e.filter((e=>e.value===i.INSURE)).map((e=>e.productRiskVoList.map((e=>e.id)))).flat():[])),e("b",((e,i="year")=>r().diff(l(e),i,!0))),e=>{const{tenantId:r,riskList:i,riskPremium:t,productId:n}=e;return i.map((e=>{var i;return{tenantId:r,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:0,paymentPeriodType:a?.[e.chargePeriod],insurancePeriodType:o["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod?.split("_")?.[0]],insurancePeriodValue:(i=e.coveragePeriod,!i||Number.isNaN(+i.split("_")[1])?0:i?.split("_")[1]),riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:t[e.riskCode]?.premium,liabilityDetails:e.liabilityVOList?.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:n,currentAmount:e.amount,initialAmount:e.amount}}))});e("f",(e=>({orderAmount:0,tenantId:e.tenantId,venderCode:e.insureDetail.productBasicInfoVO.insurerCode,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:"1",tenantOrderHolder:{tenantId:e.tenantId,certType:e.order.tenantOrderHolder.certEndType,...e.order.tenantOrderHolder},extInfo:{...e.extInfo,templateId:2,buttonCode:e.buttonCode,pageCode:e.pageCode,iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{...e.order.tenantOrderInsuredList[0],tenantId:e.tenantId,certType:e.order.tenantOrderInsuredList[0].certEndType,mobile:e.order.tenantOrderInsuredList[0].relationToHolder===t.SELF?e.order.tenantOrderHolder.mobile:"",tenantOrderProductList:[{tenantId:e.tenantId,productCode:e.insureDetail?.productBasicInfoVO.productCode,productName:e.insureDetail?.productBasicInfoVO.productName,premium:0,tenantOrderRiskList:f({tenantId:e.tenantId,riskList:m(e.insureDetail.productRiskVoList[0].riskDetailVOList,e.detail),riskPremium:{},productId:e.detail?.id})}]}],operateOption:e.order?.operateOption})))}}}));
