System.register(["./vendor-legacy-7a787c2a.js","./useStorage-legacy-f8683d3e.js","./infoCollection-legacy-91417c4c.js","./trial-legacy-0d602a30.js","./index-legacy-92e675a1.js"],(function(e){"use strict";var r,i,t,n,a,o,d,s,l,u,c,y,p,m;return{setters:[function(e){r=e.d},function(e){i=e.l},function(e){t=e.I,n=e.R,a=e.g},function(e){o=e.b,d=e.a,s=e.R,l=e.i},function(e){u=e.a6,c=e.K,y=e.C,p=e.J,m=e.a3}],execute:function(){e("t",(e=>{const{tenantId:r,riskList:i,riskPremium:t,productId:n}=e;return i.map((e=>({tenantId:r,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:o[e.chargePeriod.split("_")[0]],insurancePeriodType:d["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:t[e.riskCode]?.premium,liabilityDetails:e.liabilityVOList?.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue})))||[],productId:n,currentAmount:e.amount,initialAmount:e.amount})))})),e("r",(e=>u(e).map((e=>(e.riskDetailVOList.find((e=>e.riskType===s.MAIN_RISK)),(e.riskDetailVOList||[]).map((e=>{const{riskCategory:r,riskCode:i,riskType:t,id:n,riskInsureLimitVO:a,riskCalcMethodInfoVO:o}=e,{annuityDrawFrequencyList:d,annuityDrawValueList:s,insurancePeriodValueList:l,paymentFrequencyList:u,paymentPeriodValueList:c}=a,{minCopy:y,maxCopy:p,fixedAmount:m,singeAmount:I}=o;return{amount:m||I,annuityDrawDate:s?.[0],annuityDrawFrequency:d?.[0],chargePeriod:c?.[0],copy:y||p||0,coveragePeriod:l?.[0],liabilityVOList:e.riskLiabilityInfoVOList,paymentFrequency:u?.[0],riderRisk:!0,riderRiskVOList:[],riskCategory:r,riskCode:i,riskId:n,riskType:t}}))))).flat()));const I=(e,r,i=[],t=a.YEAR,n=!1)=>{const o=e.filter((e=>{try{return!!e.extraInfo&&(!JSON.parse(e.extraInfo).packageCode||!!i.includes(e.id))}catch(r){return!1}})),d=o.find((e=>e.riskType===s.MAIN_RISK));return o.map((e=>{const{riskInsureLimitVO:i,riskCategory:t,id:n,riskType:o,riskName:u,riskCode:c,extraInfo:y,riskLiabilityInfoVOList:p,riskCalcMethodInfoVO:m}=e,{insurancePeriodType:I,insurancePeriodValueList:k,paymentFrequencyList:C,paymentPeriodValueList:f,paymentPeriodType:L,annuityDrawFrequencyList:N,annuityDrawValueList:O,insurancePeriodRule:g,paymentPeriodRule:D}=i,{fixedAmount:b,minCopy:V}=m,h={amount:b,riskCode:c,riskId:n,riskName:u,paymentFrequency:C?.[0]||a.YEAR,extraInfo:y,chargePeriod:f?.[0],annuityDrawDate:O?.[0],riskType:o,annuityDrawFrequency:N?.[0],copy:V,coveragePeriod:k?.[0],insuredCode:r?.insurerCode,liabilityVOList:p,riskCategory:t};return o===s.MAIN_RISK?h:(g===l.ONE_YEAR&&(h.coveragePeriod="year_1"),D===l.ONE_YEAR&&(h.chargePeriod="year_1"),{...h,mainRiskId:d?.id,mainRiskCode:d?.riskCode})}))},k=(e("b",(e=>({orderAmount:e.premium,tenantId:e.tenantId,venderCode:e.detail?.insurerCode,applicationNo:e.applicationNo,policyNo:e.policyNo,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:e.orderCategory,orderStatus:e.orderStatus,orderTopStatus:e.orderTopStatus,tenantOrderHolder:{tenantId:e.tenantId,name:e.holder.name,certNo:e.holder.certNo,certType:y.CERT,mobile:e.holder.mobile,birthday:c(e.holder.certNo),gender:p(e.holder.certNo),extInfo:{hasSocialInsurance:e.holder.socialFlag}},extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,paymentFrequency:e.paymentFrequency,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{tenantId:e.tenantId,relationToHolder:e.insured.relationToHolder,certNo:e.insured.certNo,certType:y.CERT,name:e.insured.name,mobile:e.insured.relationToHolder===n.SELF?e.holder.mobile:"",birthday:c(e.insured.certNo),gender:p(e.insured.certNo),extInfo:{hasSocialInsurance:e.insured.socialFlag},tenantOrderProductList:[{tenantId:e.tenantId,productCode:e.detail?.productCode,productName:e.detail?.productName,premium:e.premium,tenantOrderRiskList:e.tenantOrderRiskList}]}]}))),(e,i)=>{if(!e)return"";const[t,n]=e.split("_"),a=parseInt(n,10);return"day"===t?r(i).add(a,"day").format("YYYY-MM-DD"):r(i).add(a,"year").format("YYYY-MM-DD")}),C=(e,i=r().format("YYYY-MM-DD"))=>r(e).diff(i,"day"),f=(e("v",(e=>{const{riskCode:r,liabilityCode:i,birth:t,sex:n}=e,a=k("max_18",t);return"7Y7"!==r||"FXG086"!==i||n===m.FEMALE&&C(a)<=0})),(e,r,i=(e=>!0))=>{const t=c(r),n=p(r),a=[];return e.forEach((e=>{const{riskDetailVOList:r}=e,o=r.map((e=>{const{maxHolderAge:r,minHolderAge:a}=e.riskInsureLimitVO;return((e,r,i)=>{const t=k(e,i),n=k(r,i);return C(t)<=1&&C(n)>=0})(a,r,t)?(e.riskLiabilityInfoVOList=e.riskLiabilityInfoVOList.filter((r=>i({riskCode:e.riskCode,liabilityCode:r.liabilityCode,birth:t,sex:n}))),e):null}));a.push({riskDetailVOList:o.filter((e=>!!(e&&e.riskLiabilityInfoVOList.length>0)))})})),a}),L=(e("g",((e,r=!1,i=(e=>!0))=>{let t=[];return t=r?I(f(u(e.insureDetail.productRiskVoList),e.insured.certNo,i)?.[0]?.riskDetailVOList,e.productDetail,[],e.paymentFrequency,r):f(u(e.insureDetail.productRiskVoList),e.insured.certNo,i).map((i=>I(i.riskDetailVOList,e.productDetail,e.packageRiskIdList,e.paymentFrequency,r))),{calcData:{holder:{personVO:{birthday:c(e.holder.certNo),certType:y.CERT,certNo:e.holder.certNo,gender:Number(p(e.holder.certNo)),mobile:e.holder.mobile,name:e.holder.name,socialFlag:e.holder.socialFlag}},insuredVOList:[{insuredCode:e.productDetail?.insurerCode,relationToHolder:e.insured.relationToHolder,personVO:{birthday:c(e.insured.certNo),certType:y.CERT,certNo:e.insured.certNo,gender:Number(p(e.insured.certNo)),name:e.insured.name,socialFlag:e.insured.socialFlag},productPlanVOList:[{riskVOList:t.flat()}]}],productCode:e.productDetail.productCode,tenantId:e.tenantId},riskVOList:t.flat()}})),e("a",(e=>e&&e.length?e.filter((e=>e.value===t.INSURE)).map((e=>e.productRiskVoList.map((e=>e.id)))).flat():[])),e("c",((e,i="year")=>r().diff(c(e),i,!0))),e=>{const{tenantId:r,riskList:i,riskPremium:t,productId:n}=e;return i.map((e=>{var i;return{tenantId:r,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:0,paymentPeriodType:o?.[e.chargePeriod],insurancePeriodType:d["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod?.split("_")?.[0]],insurancePeriodValue:(i=e.coveragePeriod,!i||Number.isNaN(+i.split("_")[1])?0:i?.split("_")[1]),riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:t[e.riskCode]?.premium,liabilityDetails:e.liabilityVOList?.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:n,currentAmount:e.amount,initialAmount:e.amount}}))}),N=(e("f",(e=>({orderAmount:0,tenantId:e.tenantId,venderCode:e.insureDetail.productBasicInfoVO.insurerCode,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:"1",tenantOrderHolder:{tenantId:e.tenantId,certType:e.order.tenantOrderHolder.certEndType,...e.order.tenantOrderHolder},extInfo:{...e.extInfo,templateId:2,buttonCode:e.buttonCode,pageCode:e.pageCode,iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{...e.order.tenantOrderInsuredList[0],tenantId:e.tenantId,certType:e.order.tenantOrderInsuredList[0].certEndType,mobile:e.order.tenantOrderInsuredList[0].relationToHolder===n.SELF?e.order.tenantOrderHolder.mobile:"",tenantOrderProductList:[{tenantId:e.tenantId,productCode:e.insureDetail?.productBasicInfoVO.productCode,productName:e.insureDetail?.productBasicInfoVO.productName,premium:0,tenantOrderRiskList:L({tenantId:e.tenantId,riskList:I(e.insureDetail.productRiskVoList[0].riskDetailVOList,e.detail),riskPremium:{},productId:e.detail?.id})}]}],operateOption:e.order?.operateOption}))),e("d",((e,r)=>-1!==r.indexOf("$")?r.replace("$",`${e}`):`${e||""}${r}`)),e("P","PREVIEW_FILE_INFO"));e("o",(e=>{const{origin:r}=window.location;i.set(N,JSON.stringify(e));const t=`${r}/template/filePreview`;window.open(t)}))}}}));
