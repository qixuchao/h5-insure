import{aS as e,a3 as r,ao as i,an as t,aJ as n,a$ as a,$ as o}from"./index-ee3f880b.js";import{g as d,R as s,k as l,l as u}from"./infoCollection-46058048.js";import{l as c}from"./useStorage-2d580d31.js";import{b as y,a as m,R as p,i as I}from"./trial-eddf4c63.js";const k=e=>{const{tenantId:r,riskList:i,riskPremium:t,productId:n}=e;let a=[];return a=Object.keys(t).length?i.filter((e=>t[e.riskCode])):i,a.map((e=>{var i,a,o,d;return{tenantId:r,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:y[e.chargePeriod.split("_")[0]],insurancePeriodType:m["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:(null==(i=t[e.riskCode])?void 0:i.premium)||0,totalPremium:(null==(a=t[e.riskCode])?void 0:a.premium)||0,liabilityDetails:(null==(o=e.liabilityVOList)?void 0:o.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))))||[],productId:n,currentAmount:e.amount||0,initialAmount:(null==(d=t[e.riskCode])?void 0:d.amount)||e.amount}}))},L=r=>{const i=e(r).map((e=>{e.riskDetailVOList.find((e=>e.riskType===p.MAIN_RISK));return(e.riskDetailVOList||[]).map((e=>{const{riskCategory:r,riskCode:i,riskType:t,riskName:n,id:a,riskInsureLimitVO:o,riskCalcMethodInfoVO:d,amountPremiumConfigVO:s}=e,{annuityDrawFrequencyList:c,annuityDrawValueList:y,insurancePeriodValueList:m,paymentFrequencyList:p,paymentPeriodValueList:I,paymentPeriodRule:k}=o;let L=0;const{displayType:O,displayUnit:f,fixedValue:C,eachCopyPrice:v}=s||{},N=String(O),P=String(f);return N&&N===l.FIXED?P===u.YUAN?L=C||0:P===u.MILLION&&(L=C?Number(1e4*C):0):N&&N===l.COPY&&(L=v?1*v:0),{amount:L,annuityDrawDate:null==y?void 0:y[0],annuityDrawFrequency:null==c?void 0:c[0],chargePeriod:4===k?"year_1":null==I?void 0:I[0],copy:1,coveragePeriod:4===k?"year_1":null==m?void 0:m[0],liabilityVOList:e.riskLiabilityInfoVOList,paymentFrequency:null==p?void 0:p[0],riderRisk:!0,riderRiskVOList:[],riskCategory:r,riskCode:i,riskName:n,riskId:a,riskType:t}}))})).flat(),t={},n=[];return i.forEach((e=>{t[e.riskCode]||(n.push(e),t[e.riskCode]=!0)})),n},O=(e,r,i=[],t=d.YEAR,n=!1)=>{const a=e.filter((e=>{try{if(e.extraInfo){return!JSON.parse(e.extraInfo).packageCode||!!i.includes(e.id)}return!1}catch(r){return!1}})),o=a.find((e=>e.riskType===p.MAIN_RISK));return a.map((e=>{const{riskInsureLimitVO:i,riskCategory:t,id:n,riskType:a,riskName:s,riskCode:l,extraInfo:u,riskLiabilityInfoVOList:c,riskCalcMethodInfoVO:y}=e,{insurancePeriodType:m,insurancePeriodValueList:k,paymentFrequencyList:L,paymentPeriodValueList:O,paymentPeriodType:f,annuityDrawFrequencyList:C,annuityDrawValueList:v,insurancePeriodRule:N,paymentPeriodRule:P}=i,{fixedAmount:g,minCopy:D}=y,T={amount:g,riskCode:l,riskId:n,riskName:s,paymentFrequency:(null==L?void 0:L[0])||d.YEAR,extraInfo:u,chargePeriod:null==O?void 0:O[0],annuityDrawDate:null==v?void 0:v[0],riskType:a,annuityDrawFrequency:null==C?void 0:C[0],copy:D,coveragePeriod:null==k?void 0:k[0],insuredCode:null==r?void 0:r.insurerCode,liabilityVOList:c,riskCategory:t};return a===p.MAIN_RISK?T:(N===I.ONE_YEAR&&(T.coveragePeriod="year_1"),P===I.ONE_YEAR&&(T.chargePeriod="year_1"),{...T,mainRiskId:null==o?void 0:o.id,mainRiskCode:null==o?void 0:o.riskCode})}))},f=e=>{var n,a,o;return{orderAmount:e.premium,tenantId:e.tenantId,venderCode:null==(n=e.detail)?void 0:n.insurerCode,applicationNo:e.applicationNo,policyNo:e.policyNo,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:e.orderCategory,orderStatus:e.orderStatus,orderTopStatus:e.orderTopStatus,tenantOrderHolder:{tenantId:e.tenantId,name:e.holder.name,certNo:e.holder.certNo,certType:r.CERT,mobile:e.holder.mobile,birthday:i(e.holder.certNo),gender:t(e.holder.certNo),extInfo:{hasSocialInsurance:e.holder.socialFlag}},extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,paymentFrequency:e.paymentFrequency,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{tenantId:e.tenantId,relationToHolder:e.insured.relationToHolder,certNo:e.insured.certNo,certType:r.CERT,name:e.insured.name,mobile:e.insured.relationToHolder===s.SELF?e.holder.mobile:"",birthday:i(e.insured.certNo),gender:t(e.insured.certNo),extInfo:{hasSocialInsurance:e.insured.socialFlag},tenantOrderProductList:[{tenantId:e.tenantId,productCode:null==(a=e.detail)?void 0:a.productCode,productName:null==(o=e.detail)?void 0:o.productName,premium:e.premium,tenantOrderRiskList:e.tenantOrderRiskList}]}]}},C=(e,r)=>{if(!e)return"";const[i,t]=e.split("_"),n=parseInt(t,10);return"day"===i?o(r).add(n,"day").format("YYYY-MM-DD"):o(r).add(n,"year").format("YYYY-MM-DD")},v=(e,r=o().format("YYYY-MM-DD"))=>o(e).diff(r,"day"),N=e=>{const{riskCode:r,liabilityCode:i,birth:t,sex:a}=e,o=C("max_18",t);return"7Y7"!==r||"FXG086"!==i||a===n.FEMALE&&v(o)<=0},P=(e,r,n=(e=>!0))=>{const a=i(r),o=t(r),d=[];return e.forEach((e=>{const{riskDetailVOList:r}=e,i=r.map((e=>{const{maxHolderAge:r,minHolderAge:i}=e.riskInsureLimitVO;return((e,r,i)=>{const t=C(e,i),n=C(r,i);return v(t)<=1&&v(n)>=0})(i,r,a)?(e.riskLiabilityInfoVOList=e.riskLiabilityInfoVOList.filter((r=>n({riskCode:e.riskCode,liabilityCode:r.liabilityCode,birth:a,sex:o}))),e):null}));d.push({riskDetailVOList:i.filter((e=>!!(e&&e.riskLiabilityInfoVOList.length>0)))})})),d},g=(e,r=(e=>!0))=>{var i,t,n,a,o,d;const{orderDetail:s}=e;return{agencyId:s.agencyId,venderCode:s.venderCode,applicationNo:s.applicationNo,orderDataSource:s.orderDataSource,policyNo:s.policyNo,commencementTime:s.commencementTime,orderNo:s.orderNo,tenantId:e.tenantId,orderAmount:e.premium,extInfo:{extraInfo:{...s.extInfo.extraInfo,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderHolder:{tenantId:s.tenantOrderHolder.tenantId,name:s.tenantOrderHolder.name,certType:s.tenantOrderHolder.certType,certNo:s.tenantOrderHolder.certNo,mobile:s.tenantOrderHolder.mobile,birthday:s.tenantOrderHolder.birthday,gender:s.tenantOrderHolder.gender},tenantOrderInsuredList:[{premium:e.premium,tenantId:s.tenantOrderInsuredList[0].tenantId,relationToHolder:s.tenantOrderInsuredList[0].relationToHolder,insuredBeneficiaryType:s.tenantOrderInsuredList[0].insuredBeneficiaryType,name:s.tenantOrderInsuredList[0].name,hasSocialInsurance:s.tenantOrderInsuredList[0].hasSocialInsurance,certType:s.tenantOrderInsuredList[0].certType,certNo:s.tenantOrderInsuredList[0].certNo,mobile:s.tenantOrderInsuredList[0].mobile,birthday:s.tenantOrderInsuredList[0].birthday,gender:s.tenantOrderInsuredList[0].gender,tenantOrderProductList:[{tenantId:s.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantId,productCode:e.productDetail.productCode,productName:e.productDetail.productName,tenantOrderRiskList:k({tenantId:e.tenantId,riskList:O(null==(o=null==(a=P(e.insureDetail.productRiskVoList,null==(n=null==(t=null==(i=e.orderDetail)?void 0:i.tenantOrderInsuredList)?void 0:t[0])?void 0:n.certNo,r))?void 0:a[0])?void 0:o.riskDetailVOList,e.productDetail),riskPremium:{},productId:null==(d=e.productDetail)?void 0:d.id})}]}]}},D=e=>/^\d{6}$/.test(e),T=(e,r,i=[],t=d.YEAR,n=!1)=>{const a=e.filter((e=>{try{if(e.extraInfo){return!JSON.parse(e.extraInfo).packageCode||!!i.includes(e.id)}return!1}catch(r){return!1}})),o=a.find((e=>e.riskType===p.MAIN_RISK));return a.map((e=>{const{riskInsureLimitVO:i,riskCategory:t,id:n,riskType:a,riskName:s,riskCode:c,extraInfo:y,riskLiabilityInfoVOList:m,riskCalcMethodInfoVO:k,amountPremiumConfigVO:L}=e,{insurancePeriodType:O,insurancePeriodValueList:f,paymentFrequencyList:C,paymentPeriodValueList:v,paymentPeriodType:N,annuityDrawFrequencyList:P,annuityDrawValueList:g,insurancePeriodRule:D,paymentPeriodRule:T}=i;let b=0;const{displayType:V,displayUnit:h,fixedValue:R,eachCopyPrice:x}=L||{},F=String(V),_=String(h);F&&F===l.FIXED?_===u.YUAN?b=R||0:_===u.MILLION&&(b=R?Number(1e4*R):0):F&&F===l.COPY&&(b=x?1*x:0);const A={amount:b||0,riskCode:c,riskId:n,riskName:s,paymentFrequency:(null==C?void 0:C[0])||d.YEAR,extraInfo:y,chargePeriod:null==v?void 0:v[0],annuityDrawDate:null==g?void 0:g[0],riskType:a,annuityDrawFrequency:null==P?void 0:P[0],copy:1,coveragePeriod:null==f?void 0:f[0],insuredCode:null==r?void 0:r.insurerCode,liabilityVOList:m,riskCategory:t};return a===p.MAIN_RISK?A:(D===I.ONE_YEAR&&(A.coveragePeriod="year_1"),T===I.ONE_YEAR&&(A.chargePeriod="year_1"),{...A,mainRiskId:null==o?void 0:o.id,mainRiskCode:null==o?void 0:o.riskCode})}))},b=e=>{const{tenantId:r,riskList:i,riskPremium:t,productId:n}=e;return i.map((e=>{var i,t,a,o;var d;return{tenantId:r,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:null==(i=y)?void 0:i[e.chargePeriod.split("_")[0]],insurancePeriodType:m["to_life"===e.coveragePeriod?"to_life":null==(a=null==(t=e.coveragePeriod)?void 0:t.split("_"))?void 0:a[0]],insurancePeriodValue:(d=e.coveragePeriod,!d||Number.isNaN(+d.split("_")[1])?0:null==d?void 0:d.split("_")[1]),riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},regularPremium:0,totalPremium:0,initialPremium:0,liabilityDetails:null==(o=e.liabilityVOList)?void 0:o.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:n,currentAmount:e.amount||0,initialAmount:e.amount||0}}))},V=e=>{var i,t,n,a,o,d,l,u;const{indirectCode:c,officialAccountUserId:y,visitorId:m}=e.extraInfo;return{orderAmount:0,tenantId:e.tenantId,venderCode:e.insureDetail.productBasicInfoVO.insurerCode,orderDataSource:"1",agencyId:e.agencyCode,agentCode:e.agentCode,saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,commencementTime:e.commencementTime,expiryDate:e.expiryDate,orderCategory:"1",tenantOrderHolder:{tenantId:e.tenantId,certType:(null==(i=e.order.tenantOrderHolder)?void 0:i.certType)||r.CERT,...e.order.tenantOrderHolder},extInfo:{...e.extraInfo,extraInfo:e.extraInfo,buttonCode:e.buttonCode,pageCode:e.pageCode,iseeBizNo:e.iseeBizNo,indirectCode:c,officialAccountUserId:y,visitorId:m},tenantOrderInsuredList:[{...e.order.tenantOrderInsuredList[0],tenantId:e.tenantId,certType:(null==(n=null==(t=e.order.tenantOrderInsuredList)?void 0:t[0])?void 0:n.certType)||r.CERT,mobile:e.order.tenantOrderInsuredList[0].relationToHolder===s.SELF?e.order.tenantOrderHolder.mobile:"",tenantOrderProductList:[{tenantId:e.tenantId,productCode:null==(a=e.insureDetail)?void 0:a.productBasicInfoVO.productCode,productName:null==(o=e.insureDetail)?void 0:o.productBasicInfoVO.productName,premium:0,tenantOrderRiskList:b({tenantId:e.tenantId,riskList:T(null==(d=e.insureDetail)?void 0:d.productRiskVoList.map((e=>e.riskDetailVOList||[])).flat(),e.detail),riskPremium:{},productId:null==(l=e.detail)?void 0:l.id})}]}],operateOption:null==(u=e.order)?void 0:u.operateOption}},h=(e,r)=>-1!==r.indexOf("$")?r.replace("$",`${e}`):`${e||""}${r}`,R="PREVIEW_FILE_INFO",x=e=>{c.set("PREVIEW_FILE_INFO",JSON.stringify(e)),a.push("/template/filePreview")},F={2:"richText",3:"link"},_=(e,r)=>{if("1"===e&&r){const e=null==r?void 0:r.split("?");return"pdf"===e[0].substr(e[0].lastIndexOf(".")+1)?"pdf":"picture"}return F[e]},A=e=>{var r;const i=null==(r=e.filter((e=>1===e.riskType)))?void 0:r[0];return e.map((e=>(i&&1!==e.riskType&&(e.riskInsureLimitVO.paymentFrequencyList=1===e.riskInsureLimitVO.paymentTypeRule?i.riskInsureLimitVO.paymentFrequencyList:e.riskInsureLimitVO.paymentFrequencyList),e)))};export{R as P,f as a,g as b,O as c,N as d,h as e,V as f,_ as g,x as o,L as r,A as s,k as t,D as v};
