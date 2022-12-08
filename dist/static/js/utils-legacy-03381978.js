System.register(["./vendor-legacy-9974b414.js","./infoCollection-legacy-4877653d.js","./trial-legacy-03993cba.js","./index-legacy-c28444df.js"],(function(e){"use strict";var r,t,i,n,o,d,a,l,s,u,c,p,m;return{setters:[function(e){r=e.d},function(e){t=e.g,i=e.I,n=e.R},function(e){o=e.b,d=e.a,a=e.R,l=e.i},function(e){s=e.a7,u=e.K,c=e.C,p=e.J,m=e.a2}],execute:function(){const y=e("t",(e=>{const{tenantId:r,riskList:t,riskPremium:i,productId:n}=e;return t.map((e=>{var t;return{tenantId:r,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:o[e.chargePeriod.split("_")[0]],insurancePeriodType:d["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:null===(t=i[e.riskCode])||void 0===t?void 0:t.premium,liabilityDetails:e.liabilityVOList.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:n,currentAmount:e.amount,initialAmount:e.amount}}))})),I=e("k",((e,r,i=[],n=t.YEAR,o=!1)=>{const d=e.filter((e=>{try{return!!e.extraInfo&&(!JSON.parse(e.extraInfo).packageCode||!!i.includes(e.id))}catch(r){return!1}})),s=d.find((e=>e.riskType===a.MAIN_RISK));return d.map((e=>{const{riskInsureLimitVO:i,riskCategory:n,id:d,riskType:u,riskName:c,riskCode:p,extraInfo:m,riskLiabilityInfoVOList:y,riskCalcMethodInfoVO:I}=e,{insurancePeriodType:v,insurancePeriodValueList:N,paymentFrequencyList:g,paymentPeriodValueList:f,paymentPeriodType:L,annuityDrawFrequencyList:k,annuityDrawValueList:O,insurancePeriodRule:h,paymentPeriodRule:b}=i,{fixedAmount:C,minCopy:D}=I,T={amount:C,riskCode:p,riskId:d,riskName:c,paymentFrequency:(null==g?void 0:g[0])||t.YEAR,extraInfo:m,chargePeriod:null==f?void 0:f[0],annuityDrawDate:null==O?void 0:O[0],riskType:u,annuityDrawFrequency:null==k?void 0:k[0],copy:D,coveragePeriod:null==N?void 0:N[0],insuredCode:null==r?void 0:r.insurerCode,liabilityVOList:o?y.filter((e=>1===e.optionalFlag&&"FXG086"!==e.liabilityCode)):y,riskCategory:n};return u===a.MAIN_RISK?T:(h===l.ONE_YEAR&&(T.coveragePeriod="year_1"),b===l.ONE_YEAR&&(T.chargePeriod="year_1"),{...T,mainRiskId:null==s?void 0:s.id,mainRiskCode:null==s?void 0:s.riskCode})}))})),v=(e("b",(e=>{var r,t,i,o,d,a;return{id:(null===(r=e.originOrderIds)||void 0===r?void 0:r.id)||null,orderNo:e.orderNo||null,orderAmount:e.premium,tenantId:e.tenantId,venderCode:null===(t=e.detail)||void 0===t?void 0:t.insurerCode,applicationNo:e.applicationNo,policyNo:e.policyNo,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:e.orderCategory,orderStatus:e.orderStatus,orderTopStatus:e.orderTopStatus,tenantOrderHolder:{id:(null===(i=e.originOrderIds)||void 0===i?void 0:i.holderId)||null,tenantId:e.tenantId,name:e.holder.name,certNo:e.holder.certNo,certType:c.CERT,mobile:e.holder.mobile,birthday:u(e.holder.certNo),gender:p(e.holder.certNo),extInfo:{hasSocialInsurance:e.holder.socialFlag}},extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,paymentFrequency:e.paymentFrequency,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{id:(null===(o=e.originOrderIds)||void 0===o?void 0:o.insuredId)||null,tenantId:e.tenantId,relationToHolder:e.insured.relationToHolder,certNo:e.insured.certNo,certType:c.CERT,name:e.insured.name,mobile:e.insured.relationToHolder===n.SELF?e.holder.mobile:"",birthday:u(e.insured.certNo),gender:p(e.insured.certNo),extInfo:{hasSocialInsurance:e.insured.socialFlag},tenantOrderProductList:[{tenantId:e.tenantId,productCode:null===(d=e.detail)||void 0===d?void 0:d.productCode,productName:null===(a=e.detail)||void 0===a?void 0:a.productName,premium:e.premium,tenantOrderRiskList:e.tenantOrderRiskList}]}],operateOption:{withHolderInfo:!0,withInsuredInfo:!0,withProductInfo:!0}}})),(e,t)=>{if(!e)return"";const[i,n]=e.split("_"),o=parseInt(n,10);return"day"===i?r(t).add(o,"day").format("YYYY-MM-DD"):r(t).add(o+1,"year").format("YYYY-MM-DD")}),N=(e,t=r().format("YYYY-MM-DD"))=>r(e).diff(t,"day"),g=(e("a",((e,t="year")=>r().diff(u(e),t,!0))),e("v",((e,t,i="year")=>{let n="";return n="year"===i?r(u(e)).add(t,i).add(1,"day").format("YYYY-MM-DD"):r(u(e)).add(t,i).subtract(1,"day").format("YYYY-MM-DD"),n>r().format("YYYY-MM-DD")})),(e,r,t)=>{const i=v(e,t),n=v(r,t);return N(i)<=1&&N(n)>=1}),f=(e("h",(e=>{const{riskCode:r,liabilityCode:t,birth:i,sex:n}=e,o=v("age_18",i);return"7Y7"!==r||"FXG086"!==t||n===m.FEMALE&&N(o)<=1})),e("j",(e=>{const{riskCode:r,liabilityCode:t,birth:i,sex:n}=e,o=v("age_18",i);return"7Y7"!==r||"FXG086"!==t||n===m.FEMALE&&N(o)<=1})),(e,r,t=(e=>!0))=>{const i=u(r),n=p(r),o=[];return e.forEach((e=>{const{riskDetailVOList:r}=e,d=r.map((e=>{const{maxHolderAge:r,minHolderAge:o}=e.riskInsureLimitVO;return g(o,r,i)?(e.riskLiabilityInfoVOList=e.riskLiabilityInfoVOList.filter((r=>t({riskCode:e.riskCode,liabilityCode:r.liabilityCode,birth:i,sex:n}))),e):null}));o.push({riskDetailVOList:d.filter((e=>!!(e&&e.riskLiabilityInfoVOList.length>0)))})})),o});e("g",((e,r=!1,t=(e=>!0))=>{var i;let n=[];var o,d;r?n=I(null===(o=f(s(e.insureDetail.productRiskVoList),e.insured.certNo,t))||void 0===o||null===(d=o[0])||void 0===d?void 0:d.riskDetailVOList,e.productDetail,[],e.paymentFrequency,r):n=f(s(e.insureDetail.productRiskVoList),e.insured.certNo,t).map((t=>I(t.riskDetailVOList,e.productDetail,e.packageRiskIdList,e.paymentFrequency,r)));return{calcData:{holder:{personVO:{birthday:u(e.holder.certNo),certType:c.CERT,certNo:e.holder.certNo,gender:Number(p(e.holder.certNo)),mobile:e.holder.mobile,name:e.holder.name,socialFlag:e.holder.socialFlag}},insuredVOList:[{insuredCode:null===(i=e.productDetail)||void 0===i?void 0:i.insurerCode,relationToHolder:e.insured.relationToHolder,personVO:{birthday:u(e.insured.certNo),certType:c.CERT,certNo:e.insured.certNo,gender:Number(p(e.insured.certNo)),name:e.insured.name,socialFlag:e.insured.socialFlag},productPlanVOList:[{riskVOList:n.flat()}]}],productCode:e.productDetail.productCode,tenantId:e.tenantId},riskVOList:n.flat()}})),e("f",((e,r=(e=>!0))=>{var t,i,n,o,d,a;const{orderDetail:l}=e;return{agencyId:l.agencyId,venderCode:l.venderCode,applicationNo:l.applicationNo,orderDataSource:l.orderDataSource,policyNo:l.policyNo,commencementTime:l.commencementTime,orderNo:l.orderNo,tenantId:e.tenantId,orderAmount:e.premium,extInfo:{extraInfo:{...l.extInfo.extraInfo,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderHolder:{tenantId:l.tenantOrderHolder.tenantId,name:l.tenantOrderHolder.name,certType:l.tenantOrderHolder.certType,certNo:l.tenantOrderHolder.certNo,mobile:l.tenantOrderHolder.mobile,birthday:l.tenantOrderHolder.birthday,gender:l.tenantOrderHolder.gender},tenantOrderInsuredList:[{premium:e.premium,tenantId:l.tenantOrderInsuredList[0].tenantId,relationToHolder:l.tenantOrderInsuredList[0].relationToHolder,insuredBeneficiaryType:l.tenantOrderInsuredList[0].insuredBeneficiaryType,name:l.tenantOrderInsuredList[0].name,hasSocialInsurance:l.tenantOrderInsuredList[0].hasSocialInsurance,certType:l.tenantOrderInsuredList[0].certType,certNo:l.tenantOrderInsuredList[0].certNo,mobile:l.tenantOrderInsuredList[0].mobile,birthday:l.tenantOrderInsuredList[0].birthday,gender:l.tenantOrderInsuredList[0].gender,tenantOrderProductList:[{tenantId:l.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantId,productCode:e.productDetail.productCode,productName:e.productDetail.productName,tenantOrderRiskList:y({tenantId:e.tenantId,riskList:I(null===(t=f(e.insureDetail.productRiskVoList,null===(n=e.orderDetail)||void 0===n||null===(o=n.tenantOrderInsuredList)||void 0===o||null===(d=o[0])||void 0===d?void 0:d.certNo,r))||void 0===t||null===(i=t[0])||void 0===i?void 0:i.riskDetailVOList,e.productDetail),riskPremium:{},productId:null===(a=e.productDetail)||void 0===a?void 0:a.id})}]}]}})),e("o",(e=>e&&e.length?e.filter((e=>e.value===i.INSURE)).map((e=>e.productRiskVoList.map((e=>e.id)))).flat():[])),e("c",((e,r)=>!e.productRiskVoList.some((e=>{const t=e.riskInsureLimitVO.minHolderAge,i=e.riskInsureLimitVO.maxHolderAge,n=u(r);return!g(t,i,n)})))),e("e",(e=>{let r=(Math.round(100*parseFloat(e.toString()))/100).toString();const t=r.toString().split(".");return 1===t.length?(r=`${r.toString()}.00`,r):t.length>1?(t[1].length<2&&(r=`${r.toString()}0`),r):e})),e("n",(e=>{if("string"==typeof e){const r=null==e?void 0:e.substring(1);return null==e?void 0:e.replace(r,"**")}return e})),e("m",(e=>null==e?void 0:e.replace(/(\d{3})\d*(\d{4})/,"$1****$2"))),e("i",(e=>null==e?void 0:e.replace(/^(.{6})(?:\d+)(.{2})$/,"$1**********$2"))),e("d",(e=>/^\d{6}$/.test(e))),e("s",(e=>{var r;const t=`.custom-class-${e[0].name}`,i=document.querySelector(t);var n;i&&i.parentNode&&null!==(r=i.parentNode)&&void 0!==r&&r.scrollIntoView&&(null===(n=i.parentNode)||void 0===n||n.scrollIntoView({behavior:"smooth"}))}))}}}));
