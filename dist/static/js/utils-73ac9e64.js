var V=Object.defineProperty,M=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var h=(e,r,t)=>r in e?V(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,C=(e,r)=>{for(var t in r||(r={}))v.call(r,t)&&h(e,t,r[t]);if(T)for(var t of T(r))F.call(r,t)&&h(e,t,r[t]);return e},P=(e,r)=>M(e,A(r));import{P as U,I as x,e as b,i as D}from"./trial-db752583.js";import{Q as c,a5 as l,a4 as u}from"./index-f087bc90.js";var G="/static/assets/logo.020372b9.png";const Q=e=>{try{return JSON.parse(e)||{}}catch(r){return console.log(r),{}}},X=e=>{var t,a,d;return{tenantId:e.tenantId,venderCode:(t=e.detail)==null?void 0:t.insurerCode,orderDataSource:"1",saleChannelId:e.saleChannelId,tenantOrderHolder:{tenantId:e.tenantId,name:e.holder.name,certNo:e.holder.certNo,certType:c.CERT,mobile:e.holder.mobile,birthday:l(e.holder.certNo),gender:u(e.holder.certNo)},extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,successJumpUrl:e.successJumpUrl}},tenantOrderInsuredList:[{tenantId:e.tenantId,relationToHolder:e.insured.relationToHolder,certNo:e.insured.certNo,certType:c.CERT,name:e.insured.name,birthday:l(e.insured.certNo),gender:u(e.insured.certNo),extInfo:{hasSocialInsurance:e.insured.socialFlag},tenantOrderProductList:[{tenantId:e.tenantId,productCode:(a=e.detail)==null?void 0:a.productCode,productName:(d=e.detail)==null?void 0:d.productName,premium:e.premium,tenantOrderRiskList:e.tenantOrderRiskList}]}]}},L=(e,r)=>{const t=e.find(a=>a.riskType===b.MAIN_RISK);return e.map(a=>{const{riskInsureLimitVO:d,riskCategory:n,id:O,riskType:i,riskName:o,riskCode:E,riskLiabilityInfoVOList:R,riskCalcMethodInfoVO:_}=a,{insurancePeriodType:w,insurancePeriodValueList:p,paymentFrequencyList:m,paymentPeriodValueList:y,paymentPeriodType:K,annuityDrawFrequencyList:I,annuityDrawValueList:N,insurancePeriodRule:f,paymentPeriodRule:k}=d,{fixedAmount:H,minCopy:S}=_,s={amount:H,riskCode:E,riskId:O,riskName:o,chargePeriod:y==null?void 0:y[0],annuityDrawDate:N==null?void 0:N[0],riskType:i,annuityDrawFrequency:I==null?void 0:I[0],copy:S,coveragePeriod:p==null?void 0:p[0],insuredCode:r==null?void 0:r.insurerCode,liabilityVOList:R.filter(g=>g.optionalFlag===1&&g.liabilityCode!=="FXG086"),paymentFrequency:m==null?void 0:m[0],riskCategory:n};return i===b.MAIN_RISK?s:(f===D.ONE_YEAR&&(s.coveragePeriod="year_1"),k===D.ONE_YEAR&&(s.chargePeriod="year_1"),P(C({},s),{mainRiskId:t==null?void 0:t.id,mainRiskCode:t==null?void 0:t.riskCode}))})},j=e=>{var a;const r=L(e.insureDetail.productRiskVoList[0].riskDetailVOList,e.productDetail);return console.log(r),{calcData:{holder:{personVO:{birthday:l(e.holder.certNo),certType:c.CERT,certNo:e.holder.certNo,gender:Number(u(e.holder.certNo)),mobile:e.holder.mobile,name:e.holder.name,socialFlag:e.holder.socialFlag}},insuredVOList:[{insuredCode:(a=e.productDetail)==null?void 0:a.insurerCode,relationToHolder:e.insured.relationToHolder,personVO:{birthday:l(e.insured.certNo),certType:c.CERT,certNo:e.insured.certNo,gender:Number(u(e.insured.certNo)),name:e.insured.name,socialFlag:e.insured.socialFlag},productPlanVOList:[{riskVOList:r}]}],productCode:e.productDetail.productCode,tenantId:e.tenantId},riskVOList:r}},Y=e=>{const{tenantId:r,riskList:t,riskPremium:a,productId:d}=e;return t.map(n=>{var i;return{tenantId:r,amountUnit:1,annuityDrawFrequency:n.annuityDrawDate,annuityDrawType:n.annuityDrawType,paymentFrequency:n.paymentFrequency,paymentPeriod:n.chargePeriod.split("_")[1],paymentPeriodType:U[n.chargePeriod.split("_")[0]],insurancePeriodType:x[n.coveragePeriod==="to_life"?"to_life":n.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+n.coveragePeriod.split("_")[1])?0:n.coveragePeriod.split("_")[1],riskCode:n.riskCode,riskType:n.riskType,extInfo:{riskId:n.riskId,copy:n.copy},initialPremium:(i=a[n.riskCode])==null?void 0:i.premium,liabilityDetails:n.liabilityVOList.map(o=>({liabilityCode:o.liabilityCode,liabilityName:o.liabilityName,refundMethod:o.liabilityAttributeValue})),productId:d,currantAmount:3e4,initAmount:3e4}})},z=e=>{var a;const{orderDetail:r}=e;return console.log(r),console.log(r.tenantOrderHolder),{agencyId:r.agencyId,venderCode:r.venderCode,applicationNo:r.applicationNo,orderDataSource:r.orderDataSource,orderNo:r.orderNo,orderStatus:r.orderStatus,policyNo:r.policyNo,tenantId:e.tenantId,orderAmount:e.premium,tenantOrderHolder:{tenantId:r.tenantOrderHolder.tenantId,name:r.tenantOrderHolder.name,certType:r.tenantOrderHolder.certType,certNo:r.tenantOrderHolder.certNo,mobile:r.tenantOrderHolder.mobile,birthday:r.tenantOrderHolder.birthday,gender:r.tenantOrderHolder.gender},tenantOrderInsuredList:[{premium:e.premium,tenantId:r.tenantOrderInsuredList[0].tenantId,relationToHolder:r.tenantOrderInsuredList[0].relationToHolder,insuredBeneficiaryType:r.tenantOrderInsuredList[0].insuredBeneficiaryType,name:r.tenantOrderInsuredList[0].name,hasSocialInsurance:r.tenantOrderInsuredList[0].hasSocialInsurance,certType:r.tenantOrderInsuredList[0].certType,certNo:r.tenantOrderInsuredList[0].certNo,mobile:r.tenantOrderInsuredList[0].mobile,birthday:r.tenantOrderInsuredList[0].birthday,gender:r.tenantOrderInsuredList[0].gender,tenantOrderProductList:[{tenantId:r.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantId,productCode:e.productDetail.productCode,productName:e.productDetail.productName,tenantOrderRiskList:Y({tenantId:e.tenantId,riskList:L(e.insureDetail.productRiskVoList[0].riskDetailVOList,e.productDetail),riskPremium:{},productId:(a=e.productDetail)==null?void 0:a.id})}]}]}};export{X as a,j as b,L as c,z as d,Q as g,G as l,Y as t};
