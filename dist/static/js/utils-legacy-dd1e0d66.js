System.register(["./index-legacy-026479b6.js","./infoCollection-legacy-1c762f57.js","./useStorage-legacy-de0a2a13.js","./trial-legacy-6b4b84a1.js"],(function(e){"use strict";var r,t,i,n,a,o,d,s,u,l,c,y,m,p,I,k;return{setters:[function(e){r=e.aS,t=e.a3,i=e.ao,n=e.an,a=e.aJ,o=e.a$,d=e.$},function(e){s=e.g,u=e.R,l=e.k,c=e.l},function(e){y=e.l},function(e){m=e.b,p=e.a,I=e.R,k=e.i}],execute:function(){const L=e("t",(e=>{const{tenantId:r,riskList:t,riskPremium:i,productId:n}=e;let a=[];return a=Object.keys(i).length?t.filter((e=>i[e.riskCode])):t,a.map((e=>({tenantId:r,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:m[e.chargePeriod.split("_")[0]],insurancePeriodType:p["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:i[e.riskCode]?.premium||0,totalPremium:i[e.riskCode]?.premium||0,liabilityDetails:e.liabilityVOList?.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue})))||[],productId:n,currentAmount:e.amount||0,initialAmount:i[e.riskCode]?.amount||e.amount})))})),O=(e("r",(e=>{const t=r(e).map((e=>(e.riskDetailVOList.find((e=>e.riskType===I.MAIN_RISK)),(e.riskDetailVOList||[]).map((e=>{const{riskCategory:r,riskCode:t,riskType:i,riskName:n,id:a,riskInsureLimitVO:o,riskCalcMethodInfoVO:d,amountPremiumConfigVO:s}=e,{annuityDrawFrequencyList:u,annuityDrawValueList:y,insurancePeriodValueList:m,paymentFrequencyList:p,paymentPeriodValueList:I,paymentPeriodRule:k}=o;let L=0;const{displayType:O,displayUnit:f,fixedValue:C,eachCopyPrice:N}=s||{},g=String(O),P=String(f);return g&&g===l.FIXED?P===c.YUAN?L=C||0:P===c.MILLION&&(L=C?Number(1e4*C):0):g&&g===l.COPY&&(L=N?1*N:0),{amount:L,annuityDrawDate:y?.[0],annuityDrawFrequency:u?.[0],chargePeriod:4===k?"year_1":I?.[0],copy:1,coveragePeriod:4===k?"year_1":m?.[0],liabilityVOList:e.riskLiabilityInfoVOList,paymentFrequency:p?.[0],riderRisk:!0,riderRiskVOList:[],riskCategory:r,riskCode:t,riskName:n,riskId:a,riskType:i}}))))).flat(),i={},n=[];return t.forEach((e=>{i[e.riskCode]||(n.push(e),i[e.riskCode]=!0)})),n})),e("c",((e,r,t=[],i=s.YEAR,n=!1)=>{const a=e.filter((e=>{try{return!!e.extraInfo&&(!JSON.parse(e.extraInfo).packageCode||!!t.includes(e.id))}catch(r){return!1}})),o=a.find((e=>e.riskType===I.MAIN_RISK));return a.map((e=>{const{riskInsureLimitVO:t,riskCategory:i,id:n,riskType:a,riskName:d,riskCode:u,extraInfo:l,riskLiabilityInfoVOList:c,riskCalcMethodInfoVO:y}=e,{insurancePeriodType:m,insurancePeriodValueList:p,paymentFrequencyList:L,paymentPeriodValueList:O,paymentPeriodType:f,annuityDrawFrequencyList:C,annuityDrawValueList:N,insurancePeriodRule:g,paymentPeriodRule:P}=t,{fixedAmount:D,minCopy:b}=y,T={amount:D,riskCode:u,riskId:n,riskName:d,paymentFrequency:L?.[0]||s.YEAR,extraInfo:l,chargePeriod:O?.[0],annuityDrawDate:N?.[0],riskType:a,annuityDrawFrequency:C?.[0],copy:b,coveragePeriod:p?.[0],insuredCode:r?.insurerCode,liabilityVOList:c,riskCategory:i};return a===I.MAIN_RISK?T:(g===k.ONE_YEAR&&(T.coveragePeriod="year_1"),P===k.ONE_YEAR&&(T.chargePeriod="year_1"),{...T,mainRiskId:o?.id,mainRiskCode:o?.riskCode})}))}))),f=(e("a",(e=>({orderAmount:e.premium,tenantId:e.tenantId,venderCode:e.detail?.insurerCode,applicationNo:e.applicationNo,policyNo:e.policyNo,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:e.orderCategory,orderStatus:e.orderStatus,orderTopStatus:e.orderTopStatus,tenantOrderHolder:{tenantId:e.tenantId,name:e.holder.name,certNo:e.holder.certNo,certType:t.CERT,mobile:e.holder.mobile,birthday:i(e.holder.certNo),gender:n(e.holder.certNo),extInfo:{hasSocialInsurance:e.holder.socialFlag}},extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,paymentFrequency:e.paymentFrequency,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{tenantId:e.tenantId,relationToHolder:e.insured.relationToHolder,certNo:e.insured.certNo,certType:t.CERT,name:e.insured.name,mobile:e.insured.relationToHolder===u.SELF?e.holder.mobile:"",birthday:i(e.insured.certNo),gender:n(e.insured.certNo),extInfo:{hasSocialInsurance:e.insured.socialFlag},tenantOrderProductList:[{tenantId:e.tenantId,productCode:e.detail?.productCode,productName:e.detail?.productName,premium:e.premium,tenantOrderRiskList:e.tenantOrderRiskList}]}]}))),(e,r)=>{if(!e)return"";const[t,i]=e.split("_"),n=parseInt(i,10);return"day"===t?d(r).add(n,"day").format("YYYY-MM-DD"):d(r).add(n,"year").format("YYYY-MM-DD")}),C=(e,r=d().format("YYYY-MM-DD"))=>d(e).diff(r,"day"),N=(e("d",(e=>{const{riskCode:r,liabilityCode:t,birth:i,sex:n}=e,o=f("max_18",i);return"7Y7"!==r||"FXG086"!==t||n===a.FEMALE&&C(o)<=0})),(e,r,t=(e=>!0))=>{const a=i(r),o=n(r),d=[];return e.forEach((e=>{const{riskDetailVOList:r}=e,i=r.map((e=>{const{maxHolderAge:r,minHolderAge:i}=e.riskInsureLimitVO;return((e,r,t)=>{const i=f(e,t),n=f(r,t);return C(i)<=1&&C(n)>=0})(i,r,a)?(e.riskLiabilityInfoVOList=e.riskLiabilityInfoVOList.filter((r=>t({riskCode:e.riskCode,liabilityCode:r.liabilityCode,birth:a,sex:o}))),e):null}));d.push({riskDetailVOList:i.filter((e=>!!(e&&e.riskLiabilityInfoVOList.length>0)))})})),d}),g=(e("b",((e,r=(e=>!0))=>{const{orderDetail:t}=e;return{agencyId:t.agencyId,venderCode:t.venderCode,applicationNo:t.applicationNo,orderDataSource:t.orderDataSource,policyNo:t.policyNo,commencementTime:t.commencementTime,orderNo:t.orderNo,tenantId:e.tenantId,orderAmount:e.premium,extInfo:{extraInfo:{...t.extInfo.extraInfo,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderHolder:{tenantId:t.tenantOrderHolder.tenantId,name:t.tenantOrderHolder.name,certType:t.tenantOrderHolder.certType,certNo:t.tenantOrderHolder.certNo,mobile:t.tenantOrderHolder.mobile,birthday:t.tenantOrderHolder.birthday,gender:t.tenantOrderHolder.gender},tenantOrderInsuredList:[{premium:e.premium,tenantId:t.tenantOrderInsuredList[0].tenantId,relationToHolder:t.tenantOrderInsuredList[0].relationToHolder,insuredBeneficiaryType:t.tenantOrderInsuredList[0].insuredBeneficiaryType,name:t.tenantOrderInsuredList[0].name,hasSocialInsurance:t.tenantOrderInsuredList[0].hasSocialInsurance,certType:t.tenantOrderInsuredList[0].certType,certNo:t.tenantOrderInsuredList[0].certNo,mobile:t.tenantOrderInsuredList[0].mobile,birthday:t.tenantOrderInsuredList[0].birthday,gender:t.tenantOrderInsuredList[0].gender,tenantOrderProductList:[{tenantId:t.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantId,productCode:e.productDetail.productCode,productName:e.productDetail.productName,tenantOrderRiskList:L({tenantId:e.tenantId,riskList:O(N(e.insureDetail.productRiskVoList,e.orderDetail?.tenantOrderInsuredList?.[0]?.certNo,r)?.[0]?.riskDetailVOList,e.productDetail),riskPremium:{},productId:e.productDetail?.id})}]}]}})),e("v",(e=>/^\d{6}$/.test(e))),(e,r,t=[],i=s.YEAR,n=!1)=>{const a=e.filter((e=>{try{return!!e.extraInfo&&(!JSON.parse(e.extraInfo).packageCode||!!t.includes(e.id))}catch(r){return!1}})),o=a.find((e=>e.riskType===I.MAIN_RISK));return a.map((e=>{const{riskInsureLimitVO:t,riskCategory:i,id:n,riskType:a,riskName:d,riskCode:u,extraInfo:y,riskLiabilityInfoVOList:m,riskCalcMethodInfoVO:p,amountPremiumConfigVO:L}=e,{insurancePeriodType:O,insurancePeriodValueList:f,paymentFrequencyList:C,paymentPeriodValueList:N,paymentPeriodType:g,annuityDrawFrequencyList:P,annuityDrawValueList:D,insurancePeriodRule:b,paymentPeriodRule:T}=t;let V=0;const{displayType:h,displayUnit:R,fixedValue:x,eachCopyPrice:F}=L||{},_=String(h),A=String(R);_&&_===l.FIXED?A===c.YUAN?V=x||0:A===c.MILLION&&(V=x?Number(1e4*x):0):_&&_===l.COPY&&(V=F?1*F:0);const S={amount:V||0,riskCode:u,riskId:n,riskName:d,paymentFrequency:C?.[0]||s.YEAR,extraInfo:y,chargePeriod:N?.[0],annuityDrawDate:D?.[0],riskType:a,annuityDrawFrequency:P?.[0],copy:1,coveragePeriod:f?.[0],insuredCode:r?.insurerCode,liabilityVOList:m,riskCategory:i};return a===I.MAIN_RISK?S:(b===k.ONE_YEAR&&(S.coveragePeriod="year_1"),T===k.ONE_YEAR&&(S.chargePeriod="year_1"),{...S,mainRiskId:o?.id,mainRiskCode:o?.riskCode})}))}),P=e=>{const{tenantId:r,riskList:t,riskPremium:i,productId:n}=e;return t.map((e=>{var t;return{tenantId:r,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:m?.[e.chargePeriod.split("_")[0]],insurancePeriodType:p["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod?.split("_")?.[0]],insurancePeriodValue:(t=e.coveragePeriod,!t||Number.isNaN(+t.split("_")[1])?0:t?.split("_")[1]),riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},regularPremium:0,totalPremium:0,initialPremium:0,liabilityDetails:e.liabilityVOList?.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:n,currentAmount:e.amount||0,initialAmount:e.amount||0}}))},D=(e("f",(e=>{const{indirectCode:r,officialAccountUserId:i,visitorId:n}=e.extraInfo;return{orderAmount:0,tenantId:e.tenantId,venderCode:e.insureDetail.productBasicInfoVO.insurerCode,orderDataSource:"1",agencyId:e.agencyCode,agentCode:e.agentCode,saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,commencementTime:e.commencementTime,expiryDate:e.expiryDate,orderCategory:"1",tenantOrderHolder:{tenantId:e.tenantId,certType:e.order.tenantOrderHolder?.certType||t.CERT,...e.order.tenantOrderHolder},extInfo:{...e.extraInfo,extraInfo:e.extraInfo,buttonCode:e.buttonCode,pageCode:e.pageCode,iseeBizNo:e.iseeBizNo,indirectCode:r,officialAccountUserId:i,visitorId:n},tenantOrderInsuredList:[{...e.order.tenantOrderInsuredList[0],tenantId:e.tenantId,certType:e.order.tenantOrderInsuredList?.[0]?.certType||t.CERT,mobile:e.order.tenantOrderInsuredList[0].relationToHolder===u.SELF?e.order.tenantOrderHolder.mobile:"",tenantOrderProductList:[{tenantId:e.tenantId,productCode:e.insureDetail?.productBasicInfoVO.productCode,productName:e.insureDetail?.productBasicInfoVO.productName,premium:0,tenantOrderRiskList:P({tenantId:e.tenantId,riskList:g(e.insureDetail?.productRiskVoList.map((e=>e.riskDetailVOList||[])).flat(),e.detail),riskPremium:{},productId:e.detail?.id})}]}],operateOption:e.order?.operateOption}})),e("e",((e,r)=>-1!==r.indexOf("$")?r.replace("$",`${e}`):`${e||""}${r}`)),e("P","PREVIEW_FILE_INFO")),b=(e("o",(e=>{y.set(D,JSON.stringify(e)),o.push("/template/filePreview")})),{2:"richText",3:"link"});e("g",((e,r)=>{if("1"===e&&r){const e=r?.split("?");return"pdf"===e[0].substr(e[0].lastIndexOf(".")+1)?"pdf":"picture"}return b[e]})),e("s",(e=>{const r=e.filter((e=>1===e.riskType))?.[0];return e.map((e=>(r&&1!==e.riskType&&(e.riskInsureLimitVO.paymentFrequencyList=1===e.riskInsureLimitVO.paymentTypeRule?r.riskInsureLimitVO.paymentFrequencyList:e.riskInsureLimitVO.paymentFrequencyList),e)))}))}}}));
