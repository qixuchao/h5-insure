var k=Object.defineProperty,x=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var D=(e,r,t)=>r in e?k(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,g=(e,r)=>{for(var t in r||(r={}))A.call(r,t)&&D(e,t,r[t]);if(C)for(var t of C(r))U.call(r,t)&&D(e,t,r[t]);return e},O=(e,r)=>x(e,F(r));import{b as V,a as v,R as P,i as L}from"./trial-e07d1c6a.js";import{C as c,I as l,H as u}from"./index-c23322a4.js";const J={NAME:"10",ID_CARD:"18",MOBILE:"11",SMS_CODE:"6"},Y=e=>{const{tenantId:r,riskList:t,riskPremium:a,productId:i}=e;return t.map(n=>{var d;return{tenantId:r,amountUnit:1,annuityDrawFrequency:n.annuityDrawDate,annuityDrawType:n.annuityDrawType,paymentFrequency:n.paymentFrequency,paymentPeriod:n.chargePeriod.split("_")[1],paymentPeriodType:V[n.chargePeriod.split("_")[0]],insurancePeriodType:v[n.coveragePeriod==="to_life"?"to_life":n.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+n.coveragePeriod.split("_")[1])?0:n.coveragePeriod.split("_")[1],riskCode:n.riskCode,riskType:n.riskType,extInfo:{riskId:n.riskId,copy:n.copy},initialPremium:(d=a[n.riskCode])==null?void 0:d.premium,liabilityDetails:n.liabilityVOList.map(o=>({liabilityCode:o.liabilityCode,liabilityName:o.liabilityName,refundMethod:o.liabilityAttributeValue})),productId:i,currantAmount:3e4,initAmount:3e4}})},f=(e,r)=>{const t=e.find(a=>a.riskType===P.MAIN_RISK);return e.map(a=>{const{riskInsureLimitVO:i,riskCategory:n,id:h,riskType:d,riskName:o,riskCode:E,riskLiabilityInfoVOList:b,riskCalcMethodInfoVO:_}=a,{insurancePeriodType:$,insurancePeriodValueList:p,paymentFrequencyList:I,paymentPeriodValueList:m,paymentPeriodType:w,annuityDrawFrequencyList:y,annuityDrawValueList:N,insurancePeriodRule:R,paymentPeriodRule:S}=i,{fixedAmount:M,minCopy:H}=_,s={amount:M,riskCode:E,riskId:h,riskName:o,chargePeriod:m==null?void 0:m[0],annuityDrawDate:N==null?void 0:N[0],riskType:d,annuityDrawFrequency:y==null?void 0:y[0],copy:H,coveragePeriod:p==null?void 0:p[0],insuredCode:r==null?void 0:r.insurerCode,liabilityVOList:b.filter(T=>T.optionalFlag===1&&T.liabilityCode!=="FXG086"),paymentFrequency:I==null?void 0:I[0],riskCategory:n};return d===P.MAIN_RISK?s:(R===L.ONE_YEAR&&(s.coveragePeriod="year_1"),S===L.ONE_YEAR&&(s.chargePeriod="year_1"),O(g({},s),{mainRiskId:t==null?void 0:t.id,mainRiskCode:t==null?void 0:t.riskCode}))})},z=e=>{var t,a,i;return{orderAmount:e.premium,tenantId:e.tenantId,venderCode:(t=e.detail)==null?void 0:t.insurerCode,applicationNo:e.applicationNo,policyNo:e.policyNo,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:e.orderCategory,orderStatus:e.orderStatus,orderTopStatus:e.orderTopStatus,tenantOrderHolder:{tenantId:e.tenantId,name:e.holder.name,certNo:e.holder.certNo,certType:c.CERT,mobile:e.holder.mobile,birthday:l(e.holder.certNo),gender:u(e.holder.certNo),extInfo:{hasSocialInsurance:e.holder.socialFlag}},extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,successJumpUrl:e.successJumpUrl,iseeBizNo:e.iseeBizNo}},tenantOrderInsuredList:[{tenantId:e.tenantId,relationToHolder:e.insured.relationToHolder,certNo:e.insured.certNo,certType:c.CERT,name:e.insured.name,birthday:l(e.insured.certNo),gender:u(e.insured.certNo),extInfo:{hasSocialInsurance:e.insured.socialFlag},tenantOrderProductList:[{tenantId:e.tenantId,productCode:(a=e.detail)==null?void 0:a.productCode,productName:(i=e.detail)==null?void 0:i.productName,premium:e.premium,tenantOrderRiskList:e.tenantOrderRiskList}]}]}},G=e=>{var a;const r=f(e.insureDetail.productRiskVoList[0].riskDetailVOList,e.productDetail);return{calcData:{holder:{personVO:{birthday:l(e.holder.certNo),certType:c.CERT,certNo:e.holder.certNo,gender:Number(u(e.holder.certNo)),mobile:e.holder.mobile,name:e.holder.name,socialFlag:e.holder.socialFlag}},insuredVOList:[{insuredCode:(a=e.productDetail)==null?void 0:a.insurerCode,relationToHolder:e.insured.relationToHolder,personVO:{birthday:l(e.insured.certNo),certType:c.CERT,certNo:e.insured.certNo,gender:Number(u(e.insured.certNo)),name:e.insured.name,socialFlag:e.insured.socialFlag},productPlanVOList:[{riskVOList:r}]}],productCode:e.productDetail.productCode,tenantId:e.tenantId},riskVOList:r}},X=e=>{var a;const{orderDetail:r}=e;return{agencyId:r.agencyId,venderCode:r.venderCode,applicationNo:r.applicationNo,orderDataSource:r.orderDataSource,policyNo:r.policyNo,tenantId:e.tenantId,orderAmount:e.premium,extInfo:{extraInfo:O(g({},r.extInfo.extraInfo),{successJumpUrl:e.successJumpUrl})},tenantOrderHolder:{tenantId:r.tenantOrderHolder.tenantId,name:r.tenantOrderHolder.name,certType:r.tenantOrderHolder.certType,certNo:r.tenantOrderHolder.certNo,mobile:r.tenantOrderHolder.mobile,birthday:r.tenantOrderHolder.birthday,gender:r.tenantOrderHolder.gender},tenantOrderInsuredList:[{premium:e.premium,tenantId:r.tenantOrderInsuredList[0].tenantId,relationToHolder:r.tenantOrderInsuredList[0].relationToHolder,insuredBeneficiaryType:r.tenantOrderInsuredList[0].insuredBeneficiaryType,name:r.tenantOrderInsuredList[0].name,hasSocialInsurance:r.tenantOrderInsuredList[0].hasSocialInsurance,certType:r.tenantOrderInsuredList[0].certType,certNo:r.tenantOrderInsuredList[0].certNo,mobile:r.tenantOrderInsuredList[0].mobile,birthday:r.tenantOrderInsuredList[0].birthday,gender:r.tenantOrderInsuredList[0].gender,tenantOrderProductList:[{tenantId:r.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantId,productCode:e.productDetail.productCode,productName:e.productDetail.productName,tenantOrderRiskList:Y({tenantId:e.tenantId,riskList:f(e.insureDetail.productRiskVoList[0].riskDetailVOList,e.productDetail),riskPremium:{},productId:(a=e.productDetail)==null?void 0:a.id})}]}]}},j=e=>{let r=(Math.round(parseFloat(e.toString())*100)/100).toString();const t=r.toString().split(".");return t.length===1?(r=`${r.toString()}.00`,r):t.length>1?(t[1].length<2&&(r=`${r.toString()}0`),r):e},Q=e=>{if(typeof e=="string"){const r=e==null?void 0:e.substring(1);return e==null?void 0:e.replace(r,"**")}return e},W=e=>e==null?void 0:e.replace(/(\d{3})\d*(\d{4})/,"$1****$2"),Z=e=>e==null?void 0:e.replace(/^(.{6})(?:\d+)(.{2})$/,"$1**********$2");export{J as F,j as a,X as b,G as c,f as d,z as g,Z as i,W as m,Q as n,Y as t};
