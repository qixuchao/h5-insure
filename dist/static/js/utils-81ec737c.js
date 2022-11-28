import{d as u}from"./vendor-4d9de129.js";import{I as v,g as q,R as B}from"./infoCollection-7811d22e.js";import{b as $,a as w,R as b,i as P}from"./trial-42e9c7ea.js";import{a6 as _,K as c,C as f,J as p,a3 as S}from"./index-6cd418a3.js";const J=e=>{const{tenantId:r,riskList:t,riskPremium:i,productId:a}=e;return t.map(n=>{var s;return{tenantId:r,amountUnit:1,annuityDrawFrequency:n.annuityDrawDate,annuityDrawType:n.annuityDrawType,paymentFrequency:n.paymentFrequency,paymentPeriod:n.chargePeriod.split("_")[1],paymentPeriodType:$[n.chargePeriod.split("_")[0]],insurancePeriodType:w[n.coveragePeriod==="to_life"?"to_life":n.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+n.coveragePeriod.split("_")[1])?0:n.coveragePeriod.split("_")[1],riskCode:n.riskCode,riskType:n.riskType,riskName:n.riskName,extInfo:{riskId:n.riskId,copy:n.copy},initialPremium:(s=i[n.riskCode])==null?void 0:s.premium,liabilityDetails:n.liabilityVOList.map(d=>({liabilityCode:d.liabilityCode,liabilityName:d.liabilityName,refundMethod:d.liabilityAttributeValue})),productId:a,currentAmount:n.amount,initialAmount:n.amount}})},T=(e,r,t=[],i=q.YEAR,a=!1)=>{const n=e.filter(s=>{try{return s.extraInfo?JSON.parse(s.extraInfo).packageCode?!!t.includes(s.id):!0:!1}catch{return!1}});console.log("lastRiskList",n);const o=n.find(s=>s.riskType===b.MAIN_RISK);return n.map(s=>{const{riskInsureLimitVO:d,riskCategory:l,id:g,riskType:y,riskName:O,riskCode:M,extraInfo:V,riskLiabilityInfoVOList:E,riskCalcMethodInfoVO:Y}=s,{insurancePeriodType:K,insurancePeriodValueList:L,paymentFrequencyList:X,paymentPeriodValueList:h,paymentPeriodType:z,annuityDrawFrequencyList:C,annuityDrawValueList:D,insurancePeriodRule:F,paymentPeriodRule:A}=d,{fixedAmount:H,minCopy:U}=Y,I={amount:H,riskCode:M,riskId:g,riskName:O,paymentFrequency:i,extraInfo:V,chargePeriod:h==null?void 0:h[0],annuityDrawDate:D==null?void 0:D[0],riskType:y,annuityDrawFrequency:C==null?void 0:C[0],copy:U,coveragePeriod:L==null?void 0:L[0],insuredCode:r==null?void 0:r.insurerCode,liabilityVOList:a?E.filter(R=>R.optionalFlag===1&&R.liabilityCode!=="FXG086"):E,riskCategory:l};return y===b.MAIN_RISK?I:(F===P.ONE_YEAR&&(I.coveragePeriod="year_1"),A===P.ONE_YEAR&&(I.chargePeriod="year_1"),{...I,mainRiskId:o==null?void 0:o.id,mainRiskCode:o==null?void 0:o.riskCode})})},W=e=>{var t,i,a;return{orderAmount:e.premium,tenantId:e.tenantId,venderCode:(t=e.detail)==null?void 0:t.insurerCode,applicationNo:e.applicationNo,policyNo:e.policyNo,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:e.orderCategory,orderStatus:e.orderStatus,orderTopStatus:e.orderTopStatus,tenantOrderHolder:{tenantId:e.tenantId,name:e.holder.name,certNo:e.holder.certNo,certType:f.CERT,mobile:e.holder.mobile,birthday:c(e.holder.certNo),gender:p(e.holder.certNo),extInfo:{hasSocialInsurance:e.holder.socialFlag}},extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,paymentFrequency:e.paymentFrequency,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{tenantId:e.tenantId,relationToHolder:e.insured.relationToHolder,certNo:e.insured.certNo,certType:f.CERT,name:e.insured.name,mobile:e.insured.relationToHolder===B.SELF?e.holder.mobile:"",birthday:c(e.insured.certNo),gender:p(e.insured.certNo),extInfo:{hasSocialInsurance:e.insured.socialFlag},tenantOrderProductList:[{tenantId:e.tenantId,productCode:(i=e.detail)==null?void 0:i.productCode,productName:(a=e.detail)==null?void 0:a.productName,premium:e.premium,tenantOrderRiskList:e.tenantOrderRiskList}]}]}},N=(e,r)=>{if(!e)return"";const[t,i]=e.split("_"),a=parseInt(i,10);return t==="day"?u(r).add(a,"day").format("YYYY-MM-DD"):u(r).add(a,"year").format("YYYY-MM-DD")},m=(e,r=u().format("YYYY-MM-DD"))=>u(e).diff(r,"day"),x=(e,r,t)=>{const i=N(e,t),a=N(r,t);return m(i)<=1&&m(a)>=0},ee=e=>{const{riskCode:r,liabilityCode:t,birth:i,sex:a}=e,n=N("max_18",i);return!(r==="7Y7"&&t==="FXG086"&&!(a===S.FEMALE&&m(n)<=0))},te=e=>{const{riskCode:r,liabilityCode:t,birth:i,sex:a}=e,n=N("max_18",i);return console.log("lastDate",n),console.log("diffDate(lastDate)",m(n)),!(r==="7Y7"&&t==="FXG086"&&!(a===S.FEMALE&&m(n)<=0))},k=(e,r,t=i=>!0)=>{const i=c(r),a=p(r),n=[];return e.forEach(o=>{const{riskDetailVOList:s}=o,d=s.map(l=>{const{maxHolderAge:g,minHolderAge:y}=l.riskInsureLimitVO;return x(y,g,i)?(l.riskLiabilityInfoVOList=l.riskLiabilityInfoVOList.filter(O=>t({riskCode:l.riskCode,liabilityCode:O.liabilityCode,birth:i,sex:a})),l):null});n.push({riskDetailVOList:d.filter(l=>!!(l&&l.riskLiabilityInfoVOList.length>0))})}),n},re=(e,r=!1,t=i=>!0)=>{var n,o,s;let i=[];if(r)i=T((o=(n=k(_(e.insureDetail.productRiskVoList),e.insured.certNo,t))==null?void 0:n[0])==null?void 0:o.riskDetailVOList,e.productDetail,[],e.paymentFrequency,r);else{const d=k(_(e.insureDetail.productRiskVoList),e.insured.certNo,t);console.log("===result",[...d]),i=d.map(l=>T(l.riskDetailVOList,e.productDetail,e.packageRiskIdList,e.paymentFrequency,r))}return{calcData:{holder:{personVO:{birthday:c(e.holder.certNo),certType:f.CERT,certNo:e.holder.certNo,gender:Number(p(e.holder.certNo)),mobile:e.holder.mobile,name:e.holder.name,socialFlag:e.holder.socialFlag}},insuredVOList:[{insuredCode:(s=e.productDetail)==null?void 0:s.insurerCode,relationToHolder:e.insured.relationToHolder,personVO:{birthday:c(e.insured.certNo),certType:f.CERT,certNo:e.insured.certNo,gender:Number(p(e.insured.certNo)),name:e.insured.name,socialFlag:e.insured.socialFlag},productPlanVOList:[{riskVOList:i.flat()}]}],productCode:e.productDetail.productCode,tenantId:e.tenantId},riskVOList:i.flat()}},ne=(e,r=t=>!0)=>{var a,n,o,s,d,l;const{orderDetail:t}=e;return{agencyId:t.agencyId,venderCode:t.venderCode,applicationNo:t.applicationNo,orderDataSource:t.orderDataSource,policyNo:t.policyNo,commencementTime:t.commencementTime,orderNo:t.orderNo,tenantId:e.tenantId,orderAmount:e.premium,extInfo:{extraInfo:{...t.extInfo.extraInfo,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderHolder:{tenantId:t.tenantOrderHolder.tenantId,name:t.tenantOrderHolder.name,certType:t.tenantOrderHolder.certType,certNo:t.tenantOrderHolder.certNo,mobile:t.tenantOrderHolder.mobile,birthday:t.tenantOrderHolder.birthday,gender:t.tenantOrderHolder.gender},tenantOrderInsuredList:[{premium:e.premium,tenantId:t.tenantOrderInsuredList[0].tenantId,relationToHolder:t.tenantOrderInsuredList[0].relationToHolder,insuredBeneficiaryType:t.tenantOrderInsuredList[0].insuredBeneficiaryType,name:t.tenantOrderInsuredList[0].name,hasSocialInsurance:t.tenantOrderInsuredList[0].hasSocialInsurance,certType:t.tenantOrderInsuredList[0].certType,certNo:t.tenantOrderInsuredList[0].certNo,mobile:t.tenantOrderInsuredList[0].mobile,birthday:t.tenantOrderInsuredList[0].birthday,gender:t.tenantOrderInsuredList[0].gender,tenantOrderProductList:[{tenantId:t.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantId,productCode:e.productDetail.productCode,productName:e.productDetail.productName,tenantOrderRiskList:J({tenantId:e.tenantId,riskList:T((d=(s=k(e.insureDetail.productRiskVoList,(o=(n=(a=e.orderDetail)==null?void 0:a.tenantOrderInsuredList)==null?void 0:n[0])==null?void 0:o.certNo,r))==null?void 0:s[0])==null?void 0:d.riskDetailVOList,e.productDetail),riskPremium:{},productId:(l=e.productDetail)==null?void 0:l.id})}]}]}},ie=e=>e&&e.length?e.filter(t=>t.value===v.INSURE).map(t=>t.productRiskVoList.map(i=>i.id)).flat():[],ae=(e,r)=>!e.productRiskVoList.some(i=>{const a=i.riskInsureLimitVO.minHolderAge,n=i.riskInsureLimitVO.maxHolderAge,o=c(r);return!x(a,n,o)}),se=e=>{let r=(Math.round(parseFloat(e.toString())*100)/100).toString();const t=r.toString().split(".");return t.length===1?(r=`${r.toString()}.00`,r):t.length>1?(t[1].length<2&&(r=`${r.toString()}0`),r):e},oe=e=>{if(typeof e=="string"){const r=e==null?void 0:e.substring(1);return e==null?void 0:e.replace(r,"**")}return e},de=e=>e==null?void 0:e.replace(/(\d{3})\d*(\d{4})/,"$1****$2"),le=e=>e==null?void 0:e.replace(/^(.{6})(?:\d+)(.{2})$/,"$1**********$2"),ce=e=>/^\d{6}$/.test(e),ue=(e,r="year")=>u().diff(c(e),r,!0);export{W as a,ue as b,ae as c,ce as d,se as e,ne as f,re as g,ee as h,le as i,T as j,de as m,oe as n,ie as o,J as t,te as v};
