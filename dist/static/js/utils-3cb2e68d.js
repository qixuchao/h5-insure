var x=Object.defineProperty,F=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var D=(e,r,t)=>r in e?x(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,g=(e,r)=>{for(var t in r||(r={}))U.call(r,t)&&D(e,t,r[t]);if(C)for(var t of C(r))V.call(r,t)&&D(e,t,r[t]);return e},O=(e,r)=>F(e,A(r));import{b as v,a as B,R as P,h as f}from"./trial-cb6717a1.js";import{C as c,I as l,H as u}from"./index-c5d88440.js";const J={NAME:"10",ID_CARD:"18",MOBILE:"11",SMS_CODE:"6"},Y=e=>{const{tenantId:r,riskList:t,riskPremium:n,productId:i}=e;return t.map(a=>{var o;return{tenantId:r,amountUnit:1,annuityDrawFrequency:a.annuityDrawDate,annuityDrawType:a.annuityDrawType,paymentFrequency:a.paymentFrequency,paymentPeriod:a.chargePeriod.split("_")[1],paymentPeriodType:v[a.chargePeriod.split("_")[0]],insurancePeriodType:B[a.coveragePeriod==="to_life"?"to_life":a.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+a.coveragePeriod.split("_")[1])?0:a.coveragePeriod.split("_")[1],riskCode:a.riskCode,riskType:a.riskType,extInfo:{riskId:a.riskId,copy:a.copy},initialPremium:(o=n[a.riskCode])==null?void 0:o.premium,liabilityDetails:a.liabilityVOList.map(d=>({liabilityCode:d.liabilityCode,liabilityName:d.liabilityName,refundMethod:d.liabilityAttributeValue})),productId:i,currantAmount:3e4,initAmount:3e4}})},L=(e,r,t)=>{const n=e.find(i=>i.riskType===P.MAIN_RISK);return e.map(i=>{const{riskInsureLimitVO:a,riskCategory:h,id:o,riskType:d,riskName:E,riskCode:b,riskLiabilityInfoVOList:_,riskCalcMethodInfoVO:R}=i,{insurancePeriodType:$,insurancePeriodValueList:p,paymentFrequencyList:I,paymentPeriodValueList:m,paymentPeriodType:w,annuityDrawFrequencyList:y,annuityDrawValueList:N,insurancePeriodRule:S,paymentPeriodRule:M}=a,{fixedAmount:H,minCopy:k}=R,s={amount:H,riskCode:b,riskId:o,riskName:E,chargePeriod:m==null?void 0:m[0],annuityDrawDate:N==null?void 0:N[0],riskType:d,annuityDrawFrequency:y==null?void 0:y[0],copy:k,coveragePeriod:p==null?void 0:p[0],insuredCode:r==null?void 0:r.insurerCode,liabilityVOList:_.filter(T=>T.optionalFlag===1&&(t?!0:T.liabilityCode!=="FXG086")),paymentFrequency:I==null?void 0:I[0],riskCategory:h};return d===P.MAIN_RISK?s:(S===f.ONE_YEAR&&(s.coveragePeriod="year_1"),M===f.ONE_YEAR&&(s.chargePeriod="year_1"),O(g({},s),{mainRiskId:n==null?void 0:n.id,mainRiskCode:n==null?void 0:n.riskCode}))})},G=e=>{var t,n,i;return{orderAmount:e.premium,tenantId:e.tenantId,venderCode:(t=e.detail)==null?void 0:t.insurerCode,applicationNo:e.applicationNo,policyNo:e.policyNo,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:e.orderCategory,orderStatus:e.orderStatus,orderTopStatus:e.orderTopStatus,tenantOrderHolder:{tenantId:e.tenantId,name:e.holder.name,certNo:e.holder.certNo,certType:c.CERT,mobile:e.holder.mobile,birthday:l(e.holder.certNo),gender:u(e.holder.certNo),extInfo:{hasSocialInsurance:e.holder.socialFlag}},extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{tenantId:e.tenantId,relationToHolder:e.insured.relationToHolder,certNo:e.insured.certNo,certType:c.CERT,name:e.insured.name,birthday:l(e.insured.certNo),gender:u(e.insured.certNo),extInfo:{hasSocialInsurance:e.insured.socialFlag},tenantOrderProductList:[{tenantId:e.tenantId,productCode:(n=e.detail)==null?void 0:n.productCode,productName:(i=e.detail)==null?void 0:i.productName,premium:e.premium,tenantOrderRiskList:e.tenantOrderRiskList}]}]}},X=e=>{var n;const r=L(e.insureDetail.productRiskVoList[0].riskDetailVOList,e.productDetail,!1);return{calcData:{holder:{personVO:{birthday:l(e.holder.certNo),certType:c.CERT,certNo:e.holder.certNo,gender:Number(u(e.holder.certNo)),mobile:e.holder.mobile,name:e.holder.name,socialFlag:e.holder.socialFlag}},insuredVOList:[{insuredCode:(n=e.productDetail)==null?void 0:n.insurerCode,relationToHolder:e.insured.relationToHolder,personVO:{birthday:l(e.insured.certNo),certType:c.CERT,certNo:e.insured.certNo,gender:Number(u(e.insured.certNo)),name:e.insured.name,socialFlag:e.insured.socialFlag},productPlanVOList:[{riskVOList:r}]}],productCode:e.productDetail.productCode,tenantId:e.tenantId},riskVOList:r}},j=e=>{var n;const{orderDetail:r}=e;return{agencyId:r.agencyId,venderCode:r.venderCode,applicationNo:r.applicationNo,orderDataSource:r.orderDataSource,policyNo:r.policyNo,tenantId:e.tenantId,orderAmount:e.premium,extInfo:{extraInfo:O(g({},r.extInfo.extraInfo),{successJumpUrl:e.successJumpUrl}),iseeBizNo:e.iseeBizNo},tenantOrderHolder:{tenantId:r.tenantOrderHolder.tenantId,name:r.tenantOrderHolder.name,certType:r.tenantOrderHolder.certType,certNo:r.tenantOrderHolder.certNo,mobile:r.tenantOrderHolder.mobile,birthday:r.tenantOrderHolder.birthday,gender:r.tenantOrderHolder.gender},tenantOrderInsuredList:[{premium:e.premium,tenantId:r.tenantOrderInsuredList[0].tenantId,relationToHolder:r.tenantOrderInsuredList[0].relationToHolder,insuredBeneficiaryType:r.tenantOrderInsuredList[0].insuredBeneficiaryType,name:r.tenantOrderInsuredList[0].name,hasSocialInsurance:r.tenantOrderInsuredList[0].hasSocialInsurance,certType:r.tenantOrderInsuredList[0].certType,certNo:r.tenantOrderInsuredList[0].certNo,mobile:r.tenantOrderInsuredList[0].mobile,birthday:r.tenantOrderInsuredList[0].birthday,gender:r.tenantOrderInsuredList[0].gender,tenantOrderProductList:[{tenantId:r.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantId,productCode:e.productDetail.productCode,productName:e.productDetail.productName,tenantOrderRiskList:Y({tenantId:e.tenantId,riskList:L(e.insureDetail.productRiskVoList[0].riskDetailVOList,e.productDetail,!0),riskPremium:{},productId:(n=e.productDetail)==null?void 0:n.id})}]}]}},Q=e=>{let r=(Math.round(parseFloat(e.toString())*100)/100).toString();const t=r.toString().split(".");return t.length===1?(r=`${r.toString()}.00`,r):t.length>1?(t[1].length<2&&(r=`${r.toString()}0`),r):e},W=e=>{if(typeof e=="string"){const r=e==null?void 0:e.substring(1);return e==null?void 0:e.replace(r,"**")}return e},Z=e=>e==null?void 0:e.replace(/(\d{3})\d*(\d{4})/,"$1****$2"),ee=e=>e==null?void 0:e.replace(/^(.{6})(?:\d+)(.{2})$/,"$1**********$2");export{J as F,Q as a,X as b,L as c,j as d,G as g,ee as i,Z as m,W as n,Y as t};
