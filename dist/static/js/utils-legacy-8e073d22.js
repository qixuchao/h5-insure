System.register(["./vendor-legacy-b4f39fe8.js","./infoCollection-legacy-1bdf9ef2.js","./trial-legacy-d01ec1de.js","./index-legacy-728988f3.js"],(function(e){"use strict";var r,t,i,n,o,a,d,s,l,u,c,y,p;return{setters:[function(e){r=e.d},function(e){t=e.I,i=e.R,n=e.g},function(e){o=e.b,a=e.a,d=e.R,s=e.i},function(e){l=e.a6,u=e.K,c=e.C,y=e.J,p=e.a3}],execute:function(){e("t",(e=>{const{tenantId:r,riskList:t,riskPremium:i,productId:n}=e;return t.map((e=>({tenantId:r,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:o[e.chargePeriod.split("_")[0]],insurancePeriodType:a["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:i[e.riskCode]?.premium,liabilityDetails:e.liabilityVOList.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:n,currentAmount:e.amount,initialAmount:e.amount})))})),e("r",(e=>{const r=e.find((e=>e.riskType===d.MAIN_RISK)),t=e.filter((e=>e.riskType===d.RIDER_RISK)),i=e=>e.map((e=>{const{riskCategory:n,riskCode:o,riskType:a,id:d,riskInsureLimitVO:s,riskCalcMethodInfoVO:l}=e,{annuityDrawFrequencyList:u,annuityDrawValueList:c,insurancePeriodValueList:y,paymentFrequencyList:p,paymentPeriodValueList:m}=s,{minCopy:I,maxCopy:k,fixedAmount:C,singeAmount:f}=l;return{amount:C||f,annuityDrawDate:c?.[0],annuityDrawFrequency:u?.[0],chargePeriod:m?.[0],copy:I||k||0,coveragePeriod:y?.[0],liabilityVOList:e.riskLiabilityInfoVOList,mainRisk:e.riskCode===r.riskCode,mainRiskCode:e.riskCode===r.riskCode?r.riskCode:void 0,mainRiskId:e.riskCode===r.riskCode?r.riskId:void 0,paymentFrequency:p?.[0],riderRisk:!0,riderRiskVOList:i(t),riskCategory:n,riskCode:o,riskId:d,riskType:a}}));return i([r])}));const m=(e,r,t=[],i=n.YEAR,o=!1)=>{const a=e.filter((e=>{try{return!!e.extraInfo&&(!JSON.parse(e.extraInfo).packageCode||!!t.includes(e.id))}catch(r){return!1}})),l=a.find((e=>e.riskType===d.MAIN_RISK));return a.map((e=>{const{riskInsureLimitVO:t,riskCategory:n,id:o,riskType:a,riskName:u,riskCode:c,extraInfo:y,riskLiabilityInfoVOList:p,riskCalcMethodInfoVO:m}=e,{insurancePeriodType:I,insurancePeriodValueList:k,paymentFrequencyList:C,paymentPeriodValueList:f,paymentPeriodType:N,annuityDrawFrequencyList:L,annuityDrawValueList:g,insurancePeriodRule:b,paymentPeriodRule:O}=t,{fixedAmount:h,minCopy:D}=m,T={amount:h,riskCode:c,riskId:o,riskName:u,paymentFrequency:i,extraInfo:y,chargePeriod:f?.[0],annuityDrawDate:g?.[0],riskType:a,annuityDrawFrequency:L?.[0],copy:D,coveragePeriod:k?.[0],insuredCode:r?.insurerCode,liabilityVOList:p,riskCategory:n};return a===d.MAIN_RISK?T:(b===s.ONE_YEAR&&(T.coveragePeriod="year_1"),O===s.ONE_YEAR&&(T.chargePeriod="year_1"),{...T,mainRiskId:l?.id,mainRiskCode:l?.riskCode})}))},I=(e("a",(e=>({orderAmount:e.premium,tenantId:e.tenantId,venderCode:e.detail?.insurerCode,applicationNo:e.applicationNo,policyNo:e.policyNo,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:e.orderCategory,orderStatus:e.orderStatus,orderTopStatus:e.orderTopStatus,tenantOrderHolder:{tenantId:e.tenantId,name:e.holder.name,certNo:e.holder.certNo,certType:c.CERT,mobile:e.holder.mobile,birthday:u(e.holder.certNo),gender:y(e.holder.certNo),extInfo:{hasSocialInsurance:e.holder.socialFlag}},extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,paymentFrequency:e.paymentFrequency,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{tenantId:e.tenantId,relationToHolder:e.insured.relationToHolder,certNo:e.insured.certNo,certType:c.CERT,name:e.insured.name,mobile:e.insured.relationToHolder===i.SELF?e.holder.mobile:"",birthday:u(e.insured.certNo),gender:y(e.insured.certNo),extInfo:{hasSocialInsurance:e.insured.socialFlag},tenantOrderProductList:[{tenantId:e.tenantId,productCode:e.detail?.productCode,productName:e.detail?.productName,premium:e.premium,tenantOrderRiskList:e.tenantOrderRiskList}]}]}))),(e,t)=>{if(!e)return"";const[i,n]=e.split("_"),o=parseInt(n,10);return"day"===i?r(t).add(o,"day").format("YYYY-MM-DD"):r(t).add(o,"year").format("YYYY-MM-DD")}),k=(e,t=r().format("YYYY-MM-DD"))=>r(e).diff(t,"day"),C=(e("v",(e=>{const{riskCode:r,liabilityCode:t,birth:i,sex:n}=e,o=I("max_18",i);return"7Y7"!==r||"FXG086"!==t||n===p.FEMALE&&k(o)<=0})),(e,r,t=(e=>!0))=>{const i=u(r),n=y(r),o=[];return e.forEach((e=>{const{riskDetailVOList:r}=e,a=r.map((e=>{const{maxHolderAge:r,minHolderAge:o}=e.riskInsureLimitVO;return((e,r,t)=>{const i=I(e,t),n=I(r,t);return k(i)<=1&&k(n)>=0})(o,r,i)?(e.riskLiabilityInfoVOList=e.riskLiabilityInfoVOList.filter((r=>t({riskCode:e.riskCode,liabilityCode:r.liabilityCode,birth:i,sex:n}))),e):null}));o.push({riskDetailVOList:a.filter((e=>!!(e&&e.riskLiabilityInfoVOList.length>0)))})})),o}),f=(e("g",((e,r=!1,t=(e=>!0))=>{let i=[];return i=r?m(C(l(e.insureDetail.productRiskVoList),e.insured.certNo,t)?.[0]?.riskDetailVOList,e.productDetail,[],e.paymentFrequency,r):C(l(e.insureDetail.productRiskVoList),e.insured.certNo,t).map((t=>m(t.riskDetailVOList,e.productDetail,e.packageRiskIdList,e.paymentFrequency,r))),{calcData:{holder:{personVO:{birthday:u(e.holder.certNo),certType:c.CERT,certNo:e.holder.certNo,gender:Number(y(e.holder.certNo)),mobile:e.holder.mobile,name:e.holder.name,socialFlag:e.holder.socialFlag}},insuredVOList:[{insuredCode:e.productDetail?.insurerCode,relationToHolder:e.insured.relationToHolder,personVO:{birthday:u(e.insured.certNo),certType:c.CERT,certNo:e.insured.certNo,gender:Number(y(e.insured.certNo)),name:e.insured.name,socialFlag:e.insured.socialFlag},productPlanVOList:[{riskVOList:i.flat()}]}],productCode:e.productDetail.productCode,tenantId:e.tenantId},riskVOList:i.flat()}})),e("o",(e=>e&&e.length?e.filter((e=>e.value===t.INSURE)).map((e=>e.productRiskVoList.map((e=>e.id)))).flat():[])),e("c",(e=>{let r=(Math.round(100*parseFloat(e.toString()))/100).toString();const t=r.toString().split(".");return 1===t.length?(r=`${r.toString()}.00`,r):t.length>1?(t[1].length<2&&(r=`${r.toString()}0`),r):e})),e("b",((e,t="year")=>r().diff(u(e),t,!0))),e=>{const{tenantId:r,riskList:t,riskPremium:i,productId:n}=e;return t.map((e=>{var t;return{tenantId:r,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:0,paymentPeriodType:o?.[e.chargePeriod],insurancePeriodType:a["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod?.split("_")?.[0]],insurancePeriodValue:(t=e.coveragePeriod,!t||Number.isNaN(+t.split("_")[1])?0:t?.split("_")[1]),riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:i[e.riskCode]?.premium,liabilityDetails:e.liabilityVOList?.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:n,currentAmount:e.amount,initialAmount:e.amount}}))});e("f",(e=>({buttonCode:e.buttonCode,templateId:1,orderAmount:0,tenantId:e.tenantId,venderCode:e.insureDetail.productBasicInfoVO.insurerCode,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:"1",tenantOrderHolder:{tenantId:e.tenantId,name:e.order.tenantOrderHolder.name,certNo:e.order.tenantOrderHolder.certNo,certType:e.order.tenantOrderHolder.certEndType,mobile:e.order.tenantOrderHolder.mobile,birthday:u(e.order.tenantOrderHolder.certNo),gender:y(e.order.tenantOrderHolder.certNo)},extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,paymentFrequency:e.paymentFrequency,successJumpUrl:e.successJumpUrl},buttonCode:e.buttonCode,iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{tenantId:e.tenantId,relationToHolder:e.order.tenantOrderInsuredList[0].relationToHolder,certNo:e.order.tenantOrderInsuredList[0].certNo,certType:e.order.tenantOrderInsuredList[0].certEndType,name:e.order.tenantOrderInsuredList[0].name,mobile:e.order.tenantOrderInsuredList[0].relationToHolder===i.SELF?e.order.tenantOrderHolder.mobile:"",birthday:u(e.order.tenantOrderInsuredList[0].certNo),gender:y(e.order.tenantOrderInsuredList[0].certNo),tenantOrderProductList:[{tenantId:e.tenantId,productCode:e.insureDetail?.productBasicInfoVO.productCode,productName:e.insureDetail?.productBasicInfoVO.productName,premium:0,tenantOrderRiskList:f({tenantId:e.tenantId,riskList:m(e.insureDetail.productRiskVoList[0].riskDetailVOList,e.detail),riskPremium:{},productId:e.detail?.id})}]}],operateOption:{withHolderInfo:!0,withInsuredInfo:!0,withProductInfo:!0}})))}}}));
