var M=Object.defineProperty,A=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var T=(e,r,t)=>r in e?M(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,h=(e,r)=>{for(var t in r||(r={}))F.call(r,t)&&T(e,t,r[t]);if(g)for(var t of g(r))v.call(r,t)&&T(e,t,r[t]);return e},P=(e,r)=>A(e,V(r));import{P as U,I as x,e as D,i as L}from"./trial-1c1760a8.js";import{Q as c,a5 as l,a4 as u}from"./index-7f86510e.js";const G={NAME:"10",ID_CARD:"20",MOBILE:"11",SMS_CODE:"6"},Q=e=>{try{return JSON.parse(e)||{}}catch(r){return console.log(r),{}}},X=e=>{var t,a,d;return{orderAmount:e.premium,tenantId:e.tenantId,venderCode:(t=e.detail)==null?void 0:t.insurerCode,applicationNo:e.applicationNo,policyNo:e.policyNo,orderDataSource:"1",saleChannelId:e.saleChannelId,orderCategory:e.orderCategory,orderStatus:e.orderStatus,orderTopStatus:e.orderTopStatus,tenantOrderHolder:{tenantId:e.tenantId,name:e.holder.name,certNo:e.holder.certNo,certType:c.CERT,mobile:e.holder.mobile,birthday:l(e.holder.certNo),gender:u(e.holder.certNo)},extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,successJumpUrl:e.successJumpUrl}},tenantOrderInsuredList:[{tenantId:e.tenantId,relationToHolder:e.insured.relationToHolder,certNo:e.insured.certNo,certType:c.CERT,name:e.insured.name,birthday:l(e.insured.certNo),gender:u(e.insured.certNo),extInfo:{hasSocialInsurance:e.insured.socialFlag},tenantOrderProductList:[{tenantId:e.tenantId,productCode:(a=e.detail)==null?void 0:a.productCode,productName:(d=e.detail)==null?void 0:d.productName,premium:e.premium,tenantOrderRiskList:e.tenantOrderRiskList}]}]}},b=(e,r)=>{const t=e.find(a=>a.riskType===D.MAIN_RISK);return e.map(a=>{const{riskInsureLimitVO:d,riskCategory:n,id:O,riskType:i,riskName:o,riskCode:E,riskLiabilityInfoVOList:_,riskCalcMethodInfoVO:f}=a,{insurancePeriodType:w,insurancePeriodValueList:p,paymentFrequencyList:m,paymentPeriodValueList:y,paymentPeriodType:K,annuityDrawFrequencyList:I,annuityDrawValueList:N,insurancePeriodRule:R,paymentPeriodRule:S}=d,{fixedAmount:k,minCopy:H}=f,s={amount:k,riskCode:E,riskId:O,riskName:o,chargePeriod:y==null?void 0:y[0],annuityDrawDate:N==null?void 0:N[0],riskType:i,annuityDrawFrequency:I==null?void 0:I[0],copy:H,coveragePeriod:p==null?void 0:p[0],insuredCode:r==null?void 0:r.insurerCode,liabilityVOList:_.filter(C=>C.optionalFlag===1&&C.liabilityCode!=="FXG086"),paymentFrequency:m==null?void 0:m[0],riskCategory:n};return i===D.MAIN_RISK?s:(R===L.ONE_YEAR&&(s.coveragePeriod="year_1"),S===L.ONE_YEAR&&(s.chargePeriod="year_1"),P(h({},s),{mainRiskId:t==null?void 0:t.id,mainRiskCode:t==null?void 0:t.riskCode}))})},j=e=>{var a;const r=b(e.insureDetail.productRiskVoList[0].riskDetailVOList,e.productDetail);return{calcData:{holder:{personVO:{birthday:l(e.holder.certNo),certType:c.CERT,certNo:e.holder.certNo,gender:Number(u(e.holder.certNo)),mobile:e.holder.mobile,name:e.holder.name,socialFlag:e.holder.socialFlag}},insuredVOList:[{insuredCode:(a=e.productDetail)==null?void 0:a.insurerCode,relationToHolder:e.insured.relationToHolder,personVO:{birthday:l(e.insured.certNo),certType:c.CERT,certNo:e.insured.certNo,gender:Number(u(e.insured.certNo)),name:e.insured.name,socialFlag:e.insured.socialFlag},productPlanVOList:[{riskVOList:r}]}],productCode:e.productDetail.productCode,tenantId:e.tenantId},riskVOList:r}},Y=e=>{const{tenantId:r,riskList:t,riskPremium:a,productId:d}=e;return t.map(n=>{var i;return{tenantId:r,amountUnit:1,annuityDrawFrequency:n.annuityDrawDate,annuityDrawType:n.annuityDrawType,paymentFrequency:n.paymentFrequency,paymentPeriod:n.chargePeriod.split("_")[1],paymentPeriodType:U[n.chargePeriod.split("_")[0]],insurancePeriodType:x[n.coveragePeriod==="to_life"?"to_life":n.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+n.coveragePeriod.split("_")[1])?0:n.coveragePeriod.split("_")[1],riskCode:n.riskCode,riskType:n.riskType,extInfo:{riskId:n.riskId,copy:n.copy},initialPremium:(i=a[n.riskCode])==null?void 0:i.premium,liabilityDetails:n.liabilityVOList.map(o=>({liabilityCode:o.liabilityCode,liabilityName:o.liabilityName,refundMethod:o.liabilityAttributeValue})),productId:d,currantAmount:3e4,initAmount:3e4}})},z=e=>{var a;const{orderDetail:r}=e;return{agencyId:r.agencyId,venderCode:r.venderCode,applicationNo:r.applicationNo,orderDataSource:r.orderDataSource,policyNo:r.policyNo,tenantId:e.tenantId,orderAmount:e.premium,tenantOrderHolder:{tenantId:r.tenantOrderHolder.tenantId,name:r.tenantOrderHolder.name,certType:r.tenantOrderHolder.certType,certNo:r.tenantOrderHolder.certNo,mobile:r.tenantOrderHolder.mobile,birthday:r.tenantOrderHolder.birthday,gender:r.tenantOrderHolder.gender},tenantOrderInsuredList:[{premium:e.premium,tenantId:r.tenantOrderInsuredList[0].tenantId,relationToHolder:r.tenantOrderInsuredList[0].relationToHolder,insuredBeneficiaryType:r.tenantOrderInsuredList[0].insuredBeneficiaryType,name:r.tenantOrderInsuredList[0].name,hasSocialInsurance:r.tenantOrderInsuredList[0].hasSocialInsurance,certType:r.tenantOrderInsuredList[0].certType,certNo:r.tenantOrderInsuredList[0].certNo,mobile:r.tenantOrderInsuredList[0].mobile,birthday:r.tenantOrderInsuredList[0].birthday,gender:r.tenantOrderInsuredList[0].gender,tenantOrderProductList:[{tenantId:r.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantId,productCode:e.productDetail.productCode,productName:e.productDetail.productName,tenantOrderRiskList:Y({tenantId:e.tenantId,riskList:b(e.insureDetail.productRiskVoList[0].riskDetailVOList,e.productDetail),riskPremium:{},productId:(a=e.productDetail)==null?void 0:a.id})}]}]}};var W={primaryColor:"#ff6d23",checkboxCheckedIconColor:"#ff6d23"},Z="/static/assets/logo.020372b9.png";export{G as F,X as a,j as b,Y as c,b as d,z as e,Q as g,Z as l,W as t};
