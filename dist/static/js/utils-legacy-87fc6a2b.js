System.register(["./index-legacy-c4cbaf55.js","./infoCollection-legacy-59b59db2.js","./trial-legacy-0325b49e.js"],(function(e){"use strict";var r,t,i,n,o,d,a,l,s,u,c,p,m;return{setters:[function(e){r=e.aK,t=e.ag,i=e.aJ,n=e.bE,o=e.bT,d=e.ac},function(e){a=e.P,l=e.R,s=e.I},function(e){u=e.b,c=e.a,p=e.R,m=e.i}],execute:function(){const y=e("t",(e=>{const{tenantId:r,riskList:t,riskPremium:i,productId:n}=e;return t.map((e=>{var t;return{tenantId:r,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:u[e.chargePeriod.split("_")[0]],insurancePeriodType:c["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:null===(t=i[e.riskCode])||void 0===t?void 0:t.premium,liabilityDetails:e.liabilityVOList.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:n,currentAmount:e.amount,initialAmount:e.amount}}))})),I=e("l",(e=>{var r;const t=null===(r=e.filter((e=>1===e.riskType)))||void 0===r?void 0:r[0];return e.map((e=>(t&&1!==e.riskType&&(e.riskInsureLimitVO.paymentFrequencyList=1===e.riskInsureLimitVO.paymentTypeRule?t.riskInsureLimitVO.paymentFrequencyList:e.riskInsureLimitVO.paymentFrequencyList),e)))})),L=e("k",((e,r,t=[],i=a.YEAR,n=!1)=>{const o=e.filter((e=>{try{return!!e.extraInfo&&(!JSON.parse(e.extraInfo).packageCode||!!t.includes(e.id))}catch(r){return!1}})),d=o.find((e=>e.riskType===p.MAIN_RISK));return o.map((e=>{const{riskInsureLimitVO:t,riskCategory:i,id:o,riskType:l,riskName:s,riskCode:u,extraInfo:c,riskLiabilityInfoVOList:y,riskCalcMethodInfoVO:I}=e,{insurancePeriodType:L,insurancePeriodValueList:v,paymentFrequencyList:k,paymentPeriodValueList:N,paymentPeriodType:O,annuityDrawFrequencyList:g,annuityDrawValueList:f,insurancePeriodRule:h,paymentPeriodRule:b}=t,{fixedAmount:D,minCopy:C}=I,T={amount:D,riskCode:u,riskId:o,riskName:s,paymentFrequency:(null==k?void 0:k[0])||a.YEAR,extraInfo:c,chargePeriod:null==N?void 0:N[0],annuityDrawDate:null==f?void 0:f[0],riskType:l,annuityDrawFrequency:null==g?void 0:g[0],copy:C,coveragePeriod:null==v?void 0:v[0],insuredCode:null==r?void 0:r.insurerCode,liabilityVOList:n?y.filter((e=>1===e.optionalFlag&&"FXG086"!==e.liabilityCode)):y,riskCategory:i};return l===p.MAIN_RISK?T:(h===m.ONE_YEAR&&(T.coveragePeriod="year_1"),b===m.ONE_YEAR&&(T.chargePeriod="year_1"),{...T,mainRiskId:null==d?void 0:d.id,mainRiskCode:null==d?void 0:d.riskCode})}))})),v=(e("g",(e=>{var n,o,d,a,s,u;return{id:(null===(n=e.originOrderIds)||void 0===n?void 0:n.id)||null,orderNo:e.orderNo||null,orderAmount:e.premium,tenantId:e.tenantId,venderCode:null===(o=e.detail)||void 0===o?void 0:o.insurerCode,applicationNo:e.applicationNo,policyNo:e.policyNo,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:e.orderCategory,orderStatus:e.orderStatus,orderTopStatus:e.orderTopStatus,tenantOrderHolder:{id:(null===(d=e.originOrderIds)||void 0===d?void 0:d.holderId)||null,tenantId:e.tenantId,name:e.holder.name,certNo:e.holder.certNo,certType:t.CERT,mobile:e.holder.mobile,birthday:r(e.holder.certNo),gender:i(e.holder.certNo),extInfo:{hasSocialInsurance:e.holder.socialFlag}},extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,paymentFrequency:e.paymentFrequency,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{id:(null===(a=e.originOrderIds)||void 0===a?void 0:a.insuredId)||null,tenantId:e.tenantId,relationToHolder:e.insured.relationToHolder,certNo:e.insured.certNo,certType:t.CERT,name:e.insured.name,mobile:e.insured.relationToHolder===l.SELF?e.holder.mobile:"",birthday:r(e.insured.certNo),gender:i(e.insured.certNo),extInfo:{hasSocialInsurance:e.insured.socialFlag},tenantOrderProductList:[{tenantId:e.tenantId,productCode:null===(s=e.detail)||void 0===s?void 0:s.productCode,productName:null===(u=e.detail)||void 0===u?void 0:u.productName,premium:e.premium,tenantOrderRiskList:e.tenantOrderRiskList}]}],operateOption:{withHolderInfo:!0,withInsuredInfo:!0,withProductInfo:!0}}})),(e,r)=>{if(!e)return"";const[t,i]=e.split("_"),n=parseInt(i,10);return"day"===t?d(r).add(n,"day").format("YYYY-MM-DD"):d(r).add(n+1,"year").format("YYYY-MM-DD")}),k=(e,r=d().format("YYYY-MM-DD"))=>d(e).diff(r,"day"),N=(e("b",((e,t="year")=>d().diff(r(e),t,!0))),e("v",((e,t,i="year")=>{let n="";return n="year"===i?d(r(e)).add(t,i).add(1,"day").format("YYYY-MM-DD"):d(r(e)).add(t,i).subtract(1,"day").format("YYYY-MM-DD"),n>d().format("YYYY-MM-DD")})),(e,r,t)=>{const i=v(e,t),n=v(r,t);return k(i)<=1&&k(n)>=1}),O=(e("h",(e=>{const{riskCode:r,liabilityCode:t,birth:i,sex:o}=e,d=v("age_18",i);return"7Y7"!==r||"FXG086"!==t||o===n.FEMALE&&k(d)<=1})),e("j",(e=>{const{riskCode:r,liabilityCode:t,birth:i,sex:o}=e,d=v("age_18",i);return"7Y7"!==r||"FXG086"!==t||o===n.FEMALE&&k(d)<=1})),(e,t,n=(e=>!0))=>{const o=r(t),d=i(t),a=[];return e.forEach((e=>{const{riskDetailVOList:r}=e,t=r.map((e=>{const{maxHolderAge:r,minHolderAge:t}=e.riskInsureLimitVO;return N(t,r,o)?(e.riskLiabilityInfoVOList=e.riskLiabilityInfoVOList.filter((r=>n({riskCode:e.riskCode,liabilityCode:r.liabilityCode,birth:o,sex:d}))),e):null}));a.push({riskDetailVOList:t.filter((e=>!!(e&&e.riskLiabilityInfoVOList.length>0)))})})),a});e("a",((e,n=!1,d=(e=>!0))=>{var a;let l=[];var s,u;n?l=L(I(null===(s=O(o(e.insureDetail.productRiskVoList),e.insured.certNo,d))||void 0===s||null===(u=s[0])||void 0===u?void 0:u.riskDetailVOList),e.productDetail,[],e.paymentFrequency,n):l=O(o(e.insureDetail.productRiskVoList),e.insured.certNo,d).map((r=>L(r.riskDetailVOList,e.productDetail,e.packageRiskIdList,e.paymentFrequency,n)));return{calcData:{holder:{personVO:{birthday:r(e.holder.certNo),certType:t.CERT,certNo:e.holder.certNo,gender:Number(i(e.holder.certNo)),mobile:e.holder.mobile,name:e.holder.name,socialFlag:e.holder.socialFlag}},insuredVOList:[{insuredCode:null===(a=e.productDetail)||void 0===a?void 0:a.insurerCode,relationToHolder:e.insured.relationToHolder,personVO:{birthday:r(e.insured.certNo),certType:t.CERT,certNo:e.insured.certNo,gender:Number(i(e.insured.certNo)),name:e.insured.name,socialFlag:e.insured.socialFlag},productPlanVOList:[{riskVOList:l.flat()}]}],productCode:e.productDetail.productCode,tenantId:e.tenantId},riskVOList:l.flat()}})),e("f",((e,r=(e=>!0))=>{var t,i,n,o,d,a;const{orderDetail:l}=e;return{agencyId:l.agencyId,venderCode:l.venderCode,applicationNo:l.applicationNo,orderDataSource:l.orderDataSource,policyNo:l.policyNo,commencementTime:l.commencementTime,orderNo:l.orderNo,tenantId:e.tenantId,orderAmount:e.premium,extInfo:{extraInfo:{...l.extInfo.extraInfo,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderHolder:{tenantId:l.tenantOrderHolder.tenantId,name:l.tenantOrderHolder.name,certType:l.tenantOrderHolder.certType,certNo:l.tenantOrderHolder.certNo,mobile:l.tenantOrderHolder.mobile,birthday:l.tenantOrderHolder.birthday,gender:l.tenantOrderHolder.gender},tenantOrderInsuredList:[{premium:e.premium,tenantId:l.tenantOrderInsuredList[0].tenantId,relationToHolder:l.tenantOrderInsuredList[0].relationToHolder,insuredBeneficiaryType:l.tenantOrderInsuredList[0].insuredBeneficiaryType,name:l.tenantOrderInsuredList[0].name,hasSocialInsurance:l.tenantOrderInsuredList[0].hasSocialInsurance,certType:l.tenantOrderInsuredList[0].certType,certNo:l.tenantOrderInsuredList[0].certNo,mobile:l.tenantOrderInsuredList[0].mobile,birthday:l.tenantOrderInsuredList[0].birthday,gender:l.tenantOrderInsuredList[0].gender,tenantOrderProductList:[{tenantId:l.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantId,productCode:e.productDetail.productCode,productName:e.productDetail.productName,tenantOrderRiskList:y({tenantId:e.tenantId,riskList:L(null===(t=O(e.insureDetail.productRiskVoList,null===(n=e.orderDetail)||void 0===n||null===(o=n.tenantOrderInsuredList)||void 0===o||null===(d=o[0])||void 0===d?void 0:d.certNo,r))||void 0===t||null===(i=t[0])||void 0===i?void 0:i.riskDetailVOList,e.productDetail),riskPremium:{},productId:null===(a=e.productDetail)||void 0===a?void 0:a.id})}]}]}})),e("o",(e=>e&&e.length?e.filter((e=>e.value===s.INSURE)).map((e=>e.productRiskVoList.map((e=>e.id)))).flat():[])),e("c",((e,t)=>!e.productRiskVoList.some((e=>{const i=e.riskInsureLimitVO.minHolderAge,n=e.riskInsureLimitVO.maxHolderAge,o=r(t);return!N(i,n,o)})))),e("e",(e=>{let r=(Math.round(100*parseFloat(e.toString()))/100).toString();const t=r.toString().split(".");return 1===t.length?(r=`${r.toString()}.00`,r):t.length>1?(t[1].length<2&&(r=`${r.toString()}0`),r):e})),e("n",(e=>{if("string"==typeof e){const r=null==e?void 0:e.substring(1);return null==e?void 0:e.replace(r,"**")}return e})),e("m",(e=>null==e?void 0:e.replace(/(\d{3})\d*(\d{4})/,"$1****$2"))),e("i",(e=>null==e?void 0:e.replace(/^(.{6})(?:\d+)(.{2})$/,"$1**********$2"))),e("d",(e=>/^\d{6}$/.test(e))),e("s",(e=>{var r;const t=`.custom-class-${e[0].name}`,i=document.querySelector(t);var n;i&&i.parentNode&&null!==(r=i.parentNode)&&void 0!==r&&r.scrollIntoView&&(null===(n=i.parentNode)||void 0===n||n.scrollIntoView({behavior:"smooth"}))}))}}}));
