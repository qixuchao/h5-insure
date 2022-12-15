import{as as e,a2 as r,ar as t,aM as i,aV as n,$ as o}from"./index-6a34609b.js";import{g as a,R as d,I as s}from"./infoCollection-a2cc3706.js";import{b as l,a as u,R as c,i as p}from"./trial-1f83dd78.js";const m=e=>{const{tenantId:r,riskList:t,riskPremium:i,productId:n}=e;return t.map((e=>{var t;return{tenantId:r,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:l[e.chargePeriod.split("_")[0]],insurancePeriodType:u["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:null==(t=i[e.riskCode])?void 0:t.premium,liabilityDetails:e.liabilityVOList.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:n,currentAmount:e.amount,initialAmount:e.amount}}))},y=(e,r,t=[],i=a.YEAR,n=!1)=>{const o=e.filter((e=>{try{if(e.extraInfo){return!JSON.parse(e.extraInfo).packageCode||!!t.includes(e.id)}return!1}catch(r){return!1}})),d=o.find((e=>e.riskType===c.MAIN_RISK));return o.map((e=>{const{riskInsureLimitVO:t,riskCategory:o,id:a,riskType:s,riskName:l,riskCode:u,extraInfo:m,riskLiabilityInfoVOList:y,riskCalcMethodInfoVO:I}=e,{insurancePeriodType:N,insurancePeriodValueList:f,paymentFrequencyList:L,paymentPeriodValueList:k,paymentPeriodType:O,annuityDrawFrequencyList:g,annuityDrawValueList:h,insurancePeriodRule:b,paymentPeriodRule:D}=t,{fixedAmount:C,minCopy:v}=I,T={amount:C,riskCode:u,riskId:a,riskName:l,paymentFrequency:i,extraInfo:m,chargePeriod:null==k?void 0:k[0],annuityDrawDate:null==h?void 0:h[0],riskType:s,annuityDrawFrequency:null==g?void 0:g[0],copy:v,coveragePeriod:null==f?void 0:f[0],insuredCode:null==r?void 0:r.insurerCode,liabilityVOList:n?y.filter((e=>1===e.optionalFlag&&"FXG086"!==e.liabilityCode)):y,riskCategory:o};return s===c.MAIN_RISK?T:(b===p.ONE_YEAR&&(T.coveragePeriod="year_1"),D===p.ONE_YEAR&&(T.chargePeriod="year_1"),{...T,mainRiskId:null==d?void 0:d.id,mainRiskCode:null==d?void 0:d.riskCode})}))},I=i=>{var n,o,a,s,l,u;return{id:(null==(n=i.originOrderIds)?void 0:n.id)||null,orderNo:i.orderNo||null,orderAmount:i.premium,tenantId:i.tenantId,venderCode:null==(o=i.detail)?void 0:o.insurerCode,applicationNo:i.applicationNo,policyNo:i.policyNo,orderDataSource:"1",saleUserId:i.saleUserId,saleChannelId:i.saleChannelId,orderCategory:i.orderCategory,orderStatus:i.orderStatus,orderTopStatus:i.orderTopStatus,tenantOrderHolder:{id:(null==(a=i.originOrderIds)?void 0:a.holderId)||null,tenantId:i.tenantId,name:i.holder.name,certNo:i.holder.certNo,certType:r.CERT,mobile:i.holder.mobile,birthday:e(i.holder.certNo),gender:t(i.holder.certNo),extInfo:{hasSocialInsurance:i.holder.socialFlag}},extInfo:{extraInfo:{renewalDK:i.renewalDK,paymentMethod:i.paymentMethod,paymentFrequency:i.paymentFrequency,successJumpUrl:i.successJumpUrl},iseeBizNo:i.iseeBizNo},tenantOrderInsuredList:[{id:(null==(s=i.originOrderIds)?void 0:s.insuredId)||null,tenantId:i.tenantId,relationToHolder:i.insured.relationToHolder,certNo:i.insured.certNo,certType:r.CERT,name:i.insured.name,mobile:i.insured.relationToHolder===d.SELF?i.holder.mobile:"",birthday:e(i.insured.certNo),gender:t(i.insured.certNo),extInfo:{hasSocialInsurance:i.insured.socialFlag},tenantOrderProductList:[{tenantId:i.tenantId,productCode:null==(l=i.detail)?void 0:l.productCode,productName:null==(u=i.detail)?void 0:u.productName,premium:i.premium,tenantOrderRiskList:i.tenantOrderRiskList}]}],operateOption:{withHolderInfo:!0,withInsuredInfo:!0,withProductInfo:!0}}},N=(e,r)=>{if(!e)return"";const[t,i]=e.split("_"),n=parseInt(i,10);return"day"===t?o(r).add(n,"day").format("YYYY-MM-DD"):o(r).add(n+1,"year").format("YYYY-MM-DD")},f=(e,r=o().format("YYYY-MM-DD"))=>o(e).diff(r,"day"),L=(r,t="year")=>o().diff(e(r),t,!0),k=(r,t,i="year")=>{let n="";return n="year"===i?o(e(r)).add(t,i).add(1,"day").format("YYYY-MM-DD"):o(e(r)).add(t,i).subtract(1,"day").format("YYYY-MM-DD"),n>o().format("YYYY-MM-DD")},O=(e,r,t)=>{const i=N(e,t),n=N(r,t);return f(i)<=1&&f(n)>=1},g=e=>{const{riskCode:r,liabilityCode:t,birth:n,sex:o}=e,a=N("age_18",n);return"7Y7"!==r||"FXG086"!==t||o===i.FEMALE&&f(a)<=1},h=e=>{const{riskCode:r,liabilityCode:t,birth:n,sex:o}=e,a=N("age_18",n);return"7Y7"!==r||"FXG086"!==t||o===i.FEMALE&&f(a)<=1},b=(r,i,n=(e=>!0))=>{const o=e(i),a=t(i),d=[];return r.forEach((e=>{const{riskDetailVOList:r}=e,t=r.map((e=>{const{maxHolderAge:r,minHolderAge:t}=e.riskInsureLimitVO;return O(t,r,o)?(e.riskLiabilityInfoVOList=e.riskLiabilityInfoVOList.filter((r=>n({riskCode:e.riskCode,liabilityCode:r.liabilityCode,birth:o,sex:a}))),e):null}));d.push({riskDetailVOList:t.filter((e=>!!(e&&e.riskLiabilityInfoVOList.length>0)))})})),d},D=(i,o=!1,a=(e=>!0))=>{var d,s,l;let u=[];if(o)u=y(null==(s=null==(d=b(n(i.insureDetail.productRiskVoList),i.insured.certNo,a))?void 0:d[0])?void 0:s.riskDetailVOList,i.productDetail,[],i.paymentFrequency,o);else{u=b(n(i.insureDetail.productRiskVoList),i.insured.certNo,a).map((e=>y(e.riskDetailVOList,i.productDetail,i.packageRiskIdList,i.paymentFrequency,o)))}return{calcData:{holder:{personVO:{birthday:e(i.holder.certNo),certType:r.CERT,certNo:i.holder.certNo,gender:Number(t(i.holder.certNo)),mobile:i.holder.mobile,name:i.holder.name,socialFlag:i.holder.socialFlag}},insuredVOList:[{insuredCode:null==(l=i.productDetail)?void 0:l.insurerCode,relationToHolder:i.insured.relationToHolder,personVO:{birthday:e(i.insured.certNo),certType:r.CERT,certNo:i.insured.certNo,gender:Number(t(i.insured.certNo)),name:i.insured.name,socialFlag:i.insured.socialFlag},productPlanVOList:[{riskVOList:u.flat()}]}],productCode:i.productDetail.productCode,tenantId:i.tenantId},riskVOList:u.flat()}},C=(e,r=(e=>!0))=>{var t,i,n,o,a,d;const{orderDetail:s}=e;return{agencyId:s.agencyId,venderCode:s.venderCode,applicationNo:s.applicationNo,orderDataSource:s.orderDataSource,policyNo:s.policyNo,commencementTime:s.commencementTime,orderNo:s.orderNo,tenantId:e.tenantId,orderAmount:e.premium,extInfo:{extraInfo:{...s.extInfo.extraInfo,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderHolder:{tenantId:s.tenantOrderHolder.tenantId,name:s.tenantOrderHolder.name,certType:s.tenantOrderHolder.certType,certNo:s.tenantOrderHolder.certNo,mobile:s.tenantOrderHolder.mobile,birthday:s.tenantOrderHolder.birthday,gender:s.tenantOrderHolder.gender},tenantOrderInsuredList:[{premium:e.premium,tenantId:s.tenantOrderInsuredList[0].tenantId,relationToHolder:s.tenantOrderInsuredList[0].relationToHolder,insuredBeneficiaryType:s.tenantOrderInsuredList[0].insuredBeneficiaryType,name:s.tenantOrderInsuredList[0].name,hasSocialInsurance:s.tenantOrderInsuredList[0].hasSocialInsurance,certType:s.tenantOrderInsuredList[0].certType,certNo:s.tenantOrderInsuredList[0].certNo,mobile:s.tenantOrderInsuredList[0].mobile,birthday:s.tenantOrderInsuredList[0].birthday,gender:s.tenantOrderInsuredList[0].gender,tenantOrderProductList:[{tenantId:s.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantId,productCode:e.productDetail.productCode,productName:e.productDetail.productName,tenantOrderRiskList:m({tenantId:e.tenantId,riskList:y(null==(a=null==(o=b(e.insureDetail.productRiskVoList,null==(n=null==(i=null==(t=e.orderDetail)?void 0:t.tenantOrderInsuredList)?void 0:i[0])?void 0:n.certNo,r))?void 0:o[0])?void 0:a.riskDetailVOList,e.productDetail),riskPremium:{},productId:null==(d=e.productDetail)?void 0:d.id})}]}]}},v=e=>{if(e&&e.length){return e.filter((e=>e.value===s.INSURE)).map((e=>e.productRiskVoList.map((e=>e.id)))).flat()}return[]},T=(r,t)=>!r.productRiskVoList.some((r=>{const i=r.riskInsureLimitVO.minHolderAge,n=r.riskInsureLimitVO.maxHolderAge,o=e(t);return!O(i,n,o)})),V=e=>{let r=(Math.round(100*parseFloat(e.toString()))/100).toString();const t=r.toString().split(".");return 1===t.length?(r=`${r.toString()}.00`,r):t.length>1?(t[1].length<2&&(r=`${r.toString()}0`),r):e},Y=e=>{if("string"==typeof e){const r=null==e?void 0:e.substring(1);return null==e?void 0:e.replace(r,"**")}return e},P=e=>null==e?void 0:e.replace(/(\d{3})\d*(\d{4})/,"$1****$2"),F=e=>null==e?void 0:e.replace(/^(.{6})(?:\d+)(.{2})$/,"$1**********$2"),R=e=>/^\d{6}$/.test(e),M=e=>{var r,t;const i=`.custom-class-${e[0].name}`,n=document.querySelector(i);n&&n.parentNode&&(null==(r=n.parentNode)?void 0:r.scrollIntoView)&&(null==(t=n.parentNode)||t.scrollIntoView({behavior:"smooth"}))};export{D as a,L as b,T as c,R as d,V as e,C as f,I as g,g as h,F as i,h as j,y as k,P as m,Y as n,v as o,M as s,m as t,k as v};
