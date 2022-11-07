var B=Object.defineProperty,$=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var b=(e,t,r)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,C=(e,t)=>{for(var r in t||(t={}))w.call(t,r)&&b(e,r,t[r]);if(D)for(var r of D(t))J.call(t,r)&&b(e,r,t[r]);return e},T=(e,t)=>$(e,q(t));import{d as E}from"./vendor-17026bfd.js";import{I as K,f as X}from"./infoCollection-192ba138.js";import{b as z,a as G,R as P,i as S}from"./trial-95d69a5a.js";import{J as u,C as f,I as y,a3 as V}from"./index-b388865d.js";const j=e=>{const{tenantId:t,riskList:r,riskPremium:i,productId:a}=e;return r.map(n=>{var d;return{tenantId:t,amountUnit:1,annuityDrawFrequency:n.annuityDrawDate,annuityDrawType:n.annuityDrawType,paymentFrequency:n.paymentFrequency,paymentPeriod:n.chargePeriod.split("_")[1],paymentPeriodType:z[n.chargePeriod.split("_")[0]],insurancePeriodType:G[n.coveragePeriod==="to_life"?"to_life":n.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+n.coveragePeriod.split("_")[1])?0:n.coveragePeriod.split("_")[1],riskCode:n.riskCode,riskType:n.riskType,extInfo:{riskId:n.riskId,copy:n.copy},initialPremium:(d=i[n.riskCode])==null?void 0:d.premium,liabilityDetails:n.liabilityVOList.map(l=>({liabilityCode:l.liabilityCode,liabilityName:l.liabilityName,refundMethod:l.liabilityAttributeValue})),productId:a,currentAmount:3e4,initialAmount:3e4}})},k=(e,t,r=[],i=X.YEAR)=>{const a=e.filter(s=>{try{return s.extraInfo?JSON.parse(s.extraInfo).packageCode?!!r.includes(s.id):!0:!1}catch{return!1}}),n=a.find(s=>s.riskType===P.MAIN_RISK);return a.map(s=>{const{riskInsureLimitVO:d,riskCategory:l,id:o,riskType:c,riskName:p,riskCode:m,extraInfo:A,riskLiabilityInfoVOList:M,riskCalcMethodInfoVO:F}=s,{insurancePeriodType:Q,insurancePeriodValueList:g,paymentFrequencyList:Z,paymentPeriodValueList:O,paymentPeriodType:W,annuityDrawFrequencyList:L,annuityDrawValueList:h,insurancePeriodRule:H,paymentPeriodRule:U}=d,{fixedAmount:Y,minCopy:v}=F,I={amount:Y,riskCode:m,riskId:o,riskName:p,paymentFrequency:i,extraInfo:A,chargePeriod:O==null?void 0:O[0],annuityDrawDate:h==null?void 0:h[0],riskType:c,annuityDrawFrequency:L==null?void 0:L[0],copy:v,coveragePeriod:g==null?void 0:g[0],insuredCode:t==null?void 0:t.insurerCode,liabilityVOList:M.filter(R=>R.optionalFlag===1&&R.liabilityCode!=="FXG086"),riskCategory:l};return c===P.MAIN_RISK?I:(H===S.ONE_YEAR&&(I.coveragePeriod="year_1"),U===S.ONE_YEAR&&(I.chargePeriod="year_1"),T(C({},I),{mainRiskId:n==null?void 0:n.id,mainRiskCode:n==null?void 0:n.riskCode}))})},ae=e=>{var r,i,a;return{orderAmount:e.premium,tenantId:e.tenantId,venderCode:(r=e.detail)==null?void 0:r.insurerCode,applicationNo:e.applicationNo,policyNo:e.policyNo,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:e.orderCategory,orderStatus:e.orderStatus,orderTopStatus:e.orderTopStatus,tenantOrderHolder:{tenantId:e.tenantId,name:e.holder.name,certNo:e.holder.certNo,certType:f.CERT,mobile:e.holder.mobile,birthday:u(e.holder.certNo),gender:y(e.holder.certNo),extInfo:{hasSocialInsurance:e.holder.socialFlag}},extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{tenantId:e.tenantId,relationToHolder:e.insured.relationToHolder,certNo:e.insured.certNo,certType:f.CERT,name:e.insured.name,birthday:u(e.insured.certNo),gender:y(e.insured.certNo),extInfo:{hasSocialInsurance:e.insured.socialFlag},tenantOrderProductList:[{tenantId:e.tenantId,productCode:(i=e.detail)==null?void 0:i.productCode,productName:(a=e.detail)==null?void 0:a.productName,premium:e.premium,tenantOrderRiskList:e.tenantOrderRiskList}]}]}},_=e=>{if(!e)return 0;const[t,r]=e.split("_");return t==="day"?parseInt(r,10):parseInt(r,10)*365},x=(e,t,r)=>{const i=_(e),a=_(t);return i<=r&&a>=r},se=e=>{const{riskCode:t,liabilityCode:r,age:i,sex:a}=e;return!(t==="7Y7"&&r==="FXG086"&&!(a===V.FEMALE&&i>=18*365))},oe=e=>{const{riskCode:t,liabilityCode:r,age:i,sex:a}=e;return t==="7Y7"&&r==="FXG086"?a===V.FEMALE:!0},N=(e,t,r=i=>!0)=>{const i=E().diff(u(t),"day"),a=y(t),n=[];return e.forEach(s=>{const{riskDetailVOList:d}=s,l=d.map(o=>{const{maxHolderAge:c,minHolderAge:p}=o.riskInsureLimitVO;return x(p,c,i)?(o.riskLiabilityInfoVOList=o.riskLiabilityInfoVOList.filter(m=>r({riskCode:o.riskCode,liabilityCode:m.liabilityCode,age:i,sex:a})),o):null});n.push({riskDetailVOList:l.filter(o=>!!(o&&o.riskLiabilityInfoVOList.length>0))})}),n},de=(e,t=!1,r=i=>!0)=>{var n,s,d;let i=[];if(t)i=k((s=(n=N(e.insureDetail.productRiskVoList,e.insured.certNo,r))==null?void 0:n[0])==null?void 0:s.riskDetailVOList,e.productDetail,[],e.paymentFrequency);else{const l=N(e.insureDetail.productRiskVoList,e.insured.certNo,r);console.log("result",l),i=l.map(o=>k(o.riskDetailVOList,e.productDetail,e.packageRiskIdList,e.paymentFrequency))}return{calcData:{holder:{personVO:{birthday:u(e.holder.certNo),certType:f.CERT,certNo:e.holder.certNo,gender:Number(y(e.holder.certNo)),mobile:e.holder.mobile,name:e.holder.name,socialFlag:e.holder.socialFlag}},insuredVOList:[{insuredCode:(d=e.productDetail)==null?void 0:d.insurerCode,relationToHolder:e.insured.relationToHolder,personVO:{birthday:u(e.insured.certNo),certType:f.CERT,certNo:e.insured.certNo,gender:Number(y(e.insured.certNo)),name:e.insured.name,socialFlag:e.insured.socialFlag},productPlanVOList:[{riskVOList:i.flat()}]}],productCode:e.productDetail.productCode,tenantId:e.tenantId},riskVOList:i.flat()}},le=(e,t=r=>!0)=>{var a,n,s,d,l,o,c,p,m;const{orderDetail:r}=e;return console.log(e,"slslsl"),console.log(N(e.insureDetail.productRiskVoList,(s=(n=(a=e.orderDetail)==null?void 0:a.tenantOrderInsuredList)==null?void 0:n[0])==null?void 0:s.certNo,t)),{agencyId:r.agencyId,venderCode:r.venderCode,applicationNo:r.applicationNo,orderDataSource:r.orderDataSource,policyNo:r.policyNo,commencementTime:r.commencementTime,orderNo:r.orderNo,tenantId:e.tenantId,orderAmount:e.premium,extInfo:{extraInfo:T(C({},r.extInfo.extraInfo),{successJumpUrl:e.successJumpUrl}),iseeBizNo:e.iseeBizNo},tenantOrderHolder:{tenantId:r.tenantOrderHolder.tenantId,name:r.tenantOrderHolder.name,certType:r.tenantOrderHolder.certType,certNo:r.tenantOrderHolder.certNo,mobile:r.tenantOrderHolder.mobile,birthday:r.tenantOrderHolder.birthday,gender:r.tenantOrderHolder.gender},tenantOrderInsuredList:[{premium:e.premium,tenantId:r.tenantOrderInsuredList[0].tenantId,relationToHolder:r.tenantOrderInsuredList[0].relationToHolder,insuredBeneficiaryType:r.tenantOrderInsuredList[0].insuredBeneficiaryType,name:r.tenantOrderInsuredList[0].name,hasSocialInsurance:r.tenantOrderInsuredList[0].hasSocialInsurance,certType:r.tenantOrderInsuredList[0].certType,certNo:r.tenantOrderInsuredList[0].certNo,mobile:r.tenantOrderInsuredList[0].mobile,birthday:r.tenantOrderInsuredList[0].birthday,gender:r.tenantOrderInsuredList[0].gender,tenantOrderProductList:[{tenantId:r.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantId,productCode:e.productDetail.productCode,productName:e.productDetail.productName,tenantOrderRiskList:j({tenantId:e.tenantId,riskList:k((p=(c=N(e.insureDetail.productRiskVoList,(o=(l=(d=e.orderDetail)==null?void 0:d.tenantOrderInsuredList)==null?void 0:l[0])==null?void 0:o.certNo,t))==null?void 0:c[0])==null?void 0:p.riskDetailVOList,e.productDetail),riskPremium:{},productId:(m=e.productDetail)==null?void 0:m.id})}]}]}},ce=e=>e&&e.length?e.filter(r=>r.value===K.INSURE).map(r=>r.productRiskVoList.map(i=>i.id)).flat():[],ue=(e,t)=>!e.productRiskVoList.some(i=>{const a=i.riskInsureLimitVO.minHolderAge,n=i.riskInsureLimitVO.maxHolderAge,s=E().diff(u(t),"day");return!x(a,n,s)}),pe=e=>{let t=(Math.round(parseFloat(e.toString())*100)/100).toString();const r=t.toString().split(".");return r.length===1?(t=`${t.toString()}.00`,t):r.length>1?(r[1].length<2&&(t=`${t.toString()}0`),t):e},me=e=>{if(typeof e=="string"){const t=e==null?void 0:e.substring(1);return e==null?void 0:e.replace(t,"**")}return e},ye=e=>e==null?void 0:e.replace(/(\d{3})\d*(\d{4})/,"$1****$2"),Ie=e=>e==null?void 0:e.replace(/^(.{6})(?:\d+)(.{2})$/,"$1**********$2"),fe=e=>/^\d{6}$/.test(e),Ne=(e,t="year")=>E().diff(u(e),t,!0);export{de as a,ae as b,ue as c,pe as d,le as e,se as f,Ne as g,oe as h,Ie as i,k as j,ye as m,me as n,ce as o,j as t,fe as v};
