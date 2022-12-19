import{aV as e,a2 as i,b2 as r}from"./index-ede405b0.js";import{R as t,g as n,k as a,l as o}from"./infoCollection-97fe2557.js";import{l as d}from"./useStorage-ffa94fcc.js";import{R as s,b as l,a as u,i as c}from"./trial-cbc5c145.js";const y=e=>{const{tenantId:i,riskList:r,riskPremium:t,productId:n}=e;let a=[];return a=Object.keys(t).length?r.filter((e=>t[e.riskCode])):r,a.map((e=>{var r,a,o,d;return{tenantId:i,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:l[e.chargePeriod.split("_")[0]],insurancePeriodType:u["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:(null==(r=t[e.riskCode])?void 0:r.premium)||0,totalPremium:(null==(a=t[e.riskCode])?void 0:a.premium)||0,liabilityDetails:(null==(o=e.liabilityVOList)?void 0:o.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))))||[],productId:n,currentAmount:e.amount||0,initialAmount:(null==(d=t[e.riskCode])?void 0:d.amount)||e.amount}}))},p=i=>{const r=e(i).map((e=>{e.riskDetailVOList.find((e=>e.riskType===s.MAIN_RISK));return(e.riskDetailVOList||[]).map((e=>{const{riskCategory:i,riskCode:r,riskType:t,id:n,riskInsureLimitVO:d,riskCalcMethodInfoVO:s,amountPremiumConfigVO:l}=e,{annuityDrawFrequencyList:u,annuityDrawValueList:c,insurancePeriodValueList:y,paymentFrequencyList:p,paymentPeriodValueList:m}=d;let I=0;const{displayType:k,displayUnit:f,fixedValue:C,eachCopyPrice:P}=l||{},v=String(k),O=String(f);return v&&v===a.FIXED?O===o.YUAN?I=C||0:O===o.MILLION&&(I=C?Number(1e4*C):0):v&&v===a.COPY&&(I=P?1*P:0),{amount:I,annuityDrawDate:null==c?void 0:c[0],annuityDrawFrequency:null==u?void 0:u[0],chargePeriod:null==m?void 0:m[0],copy:1,coveragePeriod:null==y?void 0:y[0],liabilityVOList:e.riskLiabilityInfoVOList,paymentFrequency:null==p?void 0:p[0],riderRisk:!0,riderRiskVOList:[],riskCategory:i,riskCode:r,riskId:n,riskType:t}}))})).flat(),t={},n=[];return r.forEach((e=>{t[e.riskCode]||(n.push(e),t[e.riskCode]=!0)})),n},m=e=>/^\d{6}$/.test(e),I=(e,i,r=[],t=n.YEAR,d=!1)=>{const l=e.filter((e=>{try{if(e.extraInfo){return!JSON.parse(e.extraInfo).packageCode||!!r.includes(e.id)}return!1}catch(i){return!1}})),u=l.find((e=>e.riskType===s.MAIN_RISK));return l.map((e=>{const{riskInsureLimitVO:r,riskCategory:t,id:d,riskType:l,riskName:y,riskCode:p,extraInfo:m,riskLiabilityInfoVOList:I,riskCalcMethodInfoVO:k,amountPremiumConfigVO:f}=e,{insurancePeriodType:C,insurancePeriodValueList:P,paymentFrequencyList:v,paymentPeriodValueList:O,paymentPeriodType:g,annuityDrawFrequencyList:L,annuityDrawValueList:N,insurancePeriodRule:V,paymentPeriodRule:b}=r;let D=0;const{displayType:T,displayUnit:_,fixedValue:h,eachCopyPrice:F}=f||{},R=String(T),x=String(_);R&&R===a.FIXED?x===o.YUAN?D=h||0:x===o.MILLION&&(D=h?Number(1e4*h):0):R&&R===a.COPY&&(D=F?1*F:0);const A={amount:D||0,riskCode:p,riskId:d,riskName:y,paymentFrequency:(null==v?void 0:v[0])||n.YEAR,extraInfo:m,chargePeriod:null==O?void 0:O[0],annuityDrawDate:null==N?void 0:N[0],riskType:l,annuityDrawFrequency:null==L?void 0:L[0],copy:1,coveragePeriod:null==P?void 0:P[0],insuredCode:null==i?void 0:i.insurerCode,liabilityVOList:I,riskCategory:t};return l===s.MAIN_RISK?A:(V===c.ONE_YEAR&&(A.coveragePeriod="year_1"),b===c.ONE_YEAR&&(A.chargePeriod="year_1"),{...A,mainRiskId:null==u?void 0:u.id,mainRiskCode:null==u?void 0:u.riskCode})}))},k=e=>{const{tenantId:i,riskList:r,riskPremium:t,productId:n}=e;return r.map((e=>{var r,t,a,o;var d;return{tenantId:i,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:null==(r=l)?void 0:r[e.chargePeriod.split("_")[0]],insurancePeriodType:u["to_life"===e.coveragePeriod?"to_life":null==(a=null==(t=e.coveragePeriod)?void 0:t.split("_"))?void 0:a[0]],insurancePeriodValue:(d=e.coveragePeriod,!d||Number.isNaN(+d.split("_")[1])?0:null==d?void 0:d.split("_")[1]),riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},regularPremium:0,totalPremium:0,initialPremium:0,liabilityDetails:null==(o=e.liabilityVOList)?void 0:o.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:n,currentAmount:e.amount||0,initialAmount:e.amount||0}}))},f=e=>{var r,n,a,o,d,s,l,u;const{indirectCode:c,officialAccountUserId:y,visitorId:p}=e.extraInfo;return{orderAmount:0,tenantId:e.tenantId,venderCode:e.insureDetail.productBasicInfoVO.insurerCode,orderDataSource:"1",agencyId:e.agencyCode,agentCode:e.agentCode,saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,commencementTime:e.commencementTime,expiryDate:e.expiryDate,orderCategory:"1",tenantOrderHolder:{tenantId:e.tenantId,certType:(null==(r=e.order.tenantOrderHolder)?void 0:r.certType)||i.CERT,...e.order.tenantOrderHolder},extInfo:{...e.extraInfo,extraInfo:e.extraInfo,buttonCode:e.buttonCode,pageCode:e.pageCode,iseeBizNo:e.iseeBizNo,indirectCode:c,officialAccountUserId:y,visitorId:p},tenantOrderInsuredList:[{...e.order.tenantOrderInsuredList[0],tenantId:e.tenantId,certType:(null==(a=null==(n=e.order.tenantOrderInsuredList)?void 0:n[0])?void 0:a.certType)||i.CERT,mobile:e.order.tenantOrderInsuredList[0].relationToHolder===t.SELF?e.order.tenantOrderHolder.mobile:"",tenantOrderProductList:[{tenantId:e.tenantId,productCode:null==(o=e.insureDetail)?void 0:o.productBasicInfoVO.productCode,productName:null==(d=e.insureDetail)?void 0:d.productBasicInfoVO.productName,premium:0,tenantOrderRiskList:k({tenantId:e.tenantId,riskList:I(null==(s=e.insureDetail)?void 0:s.productRiskVoList.map((e=>e.riskDetailVOList||[])).flat(),e.detail),riskPremium:{},productId:null==(l=e.detail)?void 0:l.id})}]}],operateOption:null==(u=e.order)?void 0:u.operateOption}},C=(e,i)=>-1!==i.indexOf("$")?i.replace("$",`${e}`):`${e||""}${i}`,P="PREVIEW_FILE_INFO",v=e=>{d.set("PREVIEW_FILE_INFO",JSON.stringify(e)),r.push("/template/filePreview")},O={2:"richText",3:"link"},g=(e,i)=>{if("1"===e&&i){const e=null==i?void 0:i.split("?");return"pdf"===e[0].substr(e[0].lastIndexOf(".")+1)?"pdf":"picture"}return O[e]};export{P,C as c,f,g,v as o,p as r,y as t,m as v};
