var q=Object.defineProperty,w=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var P=(e,t,r)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t)=>{for(var r in t||(t={}))K.call(t,r)&&P(e,r,t[r]);if(b)for(var r of b(t))X.call(t,r)&&P(e,r,t[r]);return e},k=(e,t)=>w(e,J(t));import{d as f}from"./vendor-ec22d003.js";import{I as z,f as G}from"./infoCollection-192ba138.js";import{b as j,a as Q,R as S,i as _}from"./trial-f7d8734b.js";import{J as c,a3 as x,C as g,I as y,a4 as A}from"./index-f77f11bd.js";const Z=e=>{const{tenantId:t,riskList:r,riskPremium:i,productId:a}=e;return r.map(n=>{var s;return{tenantId:t,amountUnit:1,annuityDrawFrequency:n.annuityDrawDate,annuityDrawType:n.annuityDrawType,paymentFrequency:n.paymentFrequency,paymentPeriod:n.chargePeriod.split("_")[1],paymentPeriodType:j[n.chargePeriod.split("_")[0]],insurancePeriodType:Q[n.coveragePeriod==="to_life"?"to_life":n.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+n.coveragePeriod.split("_")[1])?0:n.coveragePeriod.split("_")[1],riskCode:n.riskCode,riskType:n.riskType,extInfo:{riskId:n.riskId,copy:n.copy},initialPremium:(s=i[n.riskCode])==null?void 0:s.premium,liabilityDetails:n.liabilityVOList.map(d=>({liabilityCode:d.liabilityCode,liabilityName:d.liabilityName,refundMethod:d.liabilityAttributeValue})),productId:a,currentAmount:n.amount,initialAmount:n.amount}})},E=(e,t,r=[],i=G.YEAR,a=!1)=>{const n=e.filter(s=>{try{return s.extraInfo?JSON.parse(s.extraInfo).packageCode?!!r.includes(s.id):!0:!1}catch{return!1}});console.log("lastRiskList",n);const o=n.find(s=>s.riskType===S.MAIN_RISK);return n.map(s=>{const{riskInsureLimitVO:d,riskCategory:l,id:p,riskType:u,riskName:m,riskCode:F,extraInfo:H,riskLiabilityInfoVOList:R,riskCalcMethodInfoVO:U}=s,{insurancePeriodType:W,insurancePeriodValueList:O,paymentFrequencyList:ee,paymentPeriodValueList:L,paymentPeriodType:re,annuityDrawFrequencyList:h,annuityDrawValueList:C,insurancePeriodRule:Y,paymentPeriodRule:v}=d,{fixedAmount:B,minCopy:$}=U,I={amount:B,riskCode:F,riskId:p,riskName:m,paymentFrequency:i,extraInfo:H,chargePeriod:L==null?void 0:L[0],annuityDrawDate:C==null?void 0:C[0],riskType:u,annuityDrawFrequency:h==null?void 0:h[0],copy:$,coveragePeriod:O==null?void 0:O[0],insuredCode:t==null?void 0:t.insurerCode,liabilityVOList:a?R.filter(D=>D.optionalFlag===1&&D.liabilityCode!=="FXG086"):R,riskCategory:l};return u===S.MAIN_RISK?I:(Y===_.ONE_YEAR&&(I.coveragePeriod="year_1"),v===_.ONE_YEAR&&(I.chargePeriod="year_1"),k(T({},I),{mainRiskId:o==null?void 0:o.id,mainRiskCode:o==null?void 0:o.riskCode}))})},oe=e=>{var r,i,a;return{orderAmount:e.premium,tenantId:e.tenantId,venderCode:(r=e.detail)==null?void 0:r.insurerCode,applicationNo:e.applicationNo,policyNo:e.policyNo,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:e.orderCategory,orderStatus:e.orderStatus,orderTopStatus:e.orderTopStatus,tenantOrderHolder:{tenantId:e.tenantId,name:e.holder.name,certNo:e.holder.certNo,certType:g.CERT,mobile:e.holder.mobile,birthday:c(e.holder.certNo),gender:y(e.holder.certNo),extInfo:{hasSocialInsurance:e.holder.socialFlag}},extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{tenantId:e.tenantId,relationToHolder:e.insured.relationToHolder,certNo:e.insured.certNo,certType:g.CERT,name:e.insured.name,birthday:c(e.insured.certNo),gender:y(e.insured.certNo),extInfo:{hasSocialInsurance:e.insured.socialFlag},tenantOrderProductList:[{tenantId:e.tenantId,productCode:(i=e.detail)==null?void 0:i.productCode,productName:(a=e.detail)==null?void 0:a.productName,premium:e.premium,tenantOrderRiskList:e.tenantOrderRiskList}]}]}},V=e=>{if(!e)return 0;const[t,r]=e.split("_");return t==="day"?parseInt(r,10):parseInt(r,10)*365},M=(e,t,r)=>{const i=V(e),a=V(t);return i<=r&&a>=r},de=e=>{const{riskCode:t,liabilityCode:r,age:i,sex:a}=e;return!(t==="7Y7"&&r==="FXG086"&&!(a===A.FEMALE&&i>=18*365))},le=e=>{const{riskCode:t,liabilityCode:r,age:i,sex:a}=e;return t==="7Y7"&&r==="FXG086"?a===A.FEMALE:!0},N=(e,t,r=i=>!0)=>{const i=f().diff(c(t),"day");console.log("age",f().diff(c(t),"year"));const a=y(t);console.log("sex",a);const n=[];return e.forEach(o=>{const{riskDetailVOList:s}=o,d=s.map(l=>{const{maxHolderAge:p,minHolderAge:u}=l.riskInsureLimitVO;return M(u,p,i)?(l.riskLiabilityInfoVOList=l.riskLiabilityInfoVOList.filter(m=>r({riskCode:l.riskCode,liabilityCode:m.liabilityCode,age:i,sex:a})),l):null});n.push({riskDetailVOList:d.filter(l=>!!(l&&l.riskLiabilityInfoVOList.length>0))})}),n},ce=(e,t=!1,r=i=>!0)=>{var n,o,s;let i=[];if(t)i=E((o=(n=N(x(e.insureDetail.productRiskVoList),e.insured.certNo,r))==null?void 0:n[0])==null?void 0:o.riskDetailVOList,e.productDetail,[],e.paymentFrequency,t);else{const d=N(x(e.insureDetail.productRiskVoList),e.insured.certNo,r);console.log("===result",[...d]),i=d.map(l=>E(l.riskDetailVOList,e.productDetail,e.packageRiskIdList,e.paymentFrequency,t))}return{calcData:{holder:{personVO:{birthday:c(e.holder.certNo),certType:g.CERT,certNo:e.holder.certNo,gender:Number(y(e.holder.certNo)),mobile:e.holder.mobile,name:e.holder.name,socialFlag:e.holder.socialFlag}},insuredVOList:[{insuredCode:(s=e.productDetail)==null?void 0:s.insurerCode,relationToHolder:e.insured.relationToHolder,personVO:{birthday:c(e.insured.certNo),certType:g.CERT,certNo:e.insured.certNo,gender:Number(y(e.insured.certNo)),name:e.insured.name,socialFlag:e.insured.socialFlag},productPlanVOList:[{riskVOList:i.flat()}]}],productCode:e.productDetail.productCode,tenantId:e.tenantId},riskVOList:i.flat()}},ue=(e,t=r=>!0)=>{var a,n,o,s,d,l,p,u,m;const{orderDetail:r}=e;return console.log(e,"slslsl"),console.log(N(e.insureDetail.productRiskVoList,(o=(n=(a=e.orderDetail)==null?void 0:a.tenantOrderInsuredList)==null?void 0:n[0])==null?void 0:o.certNo,t)),{agencyId:r.agencyId,venderCode:r.venderCode,applicationNo:r.applicationNo,orderDataSource:r.orderDataSource,policyNo:r.policyNo,commencementTime:r.commencementTime,orderNo:r.orderNo,tenantId:e.tenantId,orderAmount:e.premium,extInfo:{extraInfo:k(T({},r.extInfo.extraInfo),{successJumpUrl:e.successJumpUrl}),iseeBizNo:e.iseeBizNo},tenantOrderHolder:{tenantId:r.tenantOrderHolder.tenantId,name:r.tenantOrderHolder.name,certType:r.tenantOrderHolder.certType,certNo:r.tenantOrderHolder.certNo,mobile:r.tenantOrderHolder.mobile,birthday:r.tenantOrderHolder.birthday,gender:r.tenantOrderHolder.gender},tenantOrderInsuredList:[{premium:e.premium,tenantId:r.tenantOrderInsuredList[0].tenantId,relationToHolder:r.tenantOrderInsuredList[0].relationToHolder,insuredBeneficiaryType:r.tenantOrderInsuredList[0].insuredBeneficiaryType,name:r.tenantOrderInsuredList[0].name,hasSocialInsurance:r.tenantOrderInsuredList[0].hasSocialInsurance,certType:r.tenantOrderInsuredList[0].certType,certNo:r.tenantOrderInsuredList[0].certNo,mobile:r.tenantOrderInsuredList[0].mobile,birthday:r.tenantOrderInsuredList[0].birthday,gender:r.tenantOrderInsuredList[0].gender,tenantOrderProductList:[{tenantId:r.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantId,productCode:e.productDetail.productCode,productName:e.productDetail.productName,tenantOrderRiskList:Z({tenantId:e.tenantId,riskList:E((u=(p=N(e.insureDetail.productRiskVoList,(l=(d=(s=e.orderDetail)==null?void 0:s.tenantOrderInsuredList)==null?void 0:d[0])==null?void 0:l.certNo,t))==null?void 0:p[0])==null?void 0:u.riskDetailVOList,e.productDetail),riskPremium:{},productId:(m=e.productDetail)==null?void 0:m.id})}]}]}},pe=e=>e&&e.length?e.filter(r=>r.value===z.INSURE).map(r=>r.productRiskVoList.map(i=>i.id)).flat():[],me=(e,t)=>!e.productRiskVoList.some(i=>{const a=i.riskInsureLimitVO.minHolderAge,n=i.riskInsureLimitVO.maxHolderAge,o=f().diff(c(t),"day");return!M(a,n,o)}),ye=e=>{let t=(Math.round(parseFloat(e.toString())*100)/100).toString();const r=t.toString().split(".");return r.length===1?(t=`${t.toString()}.00`,t):r.length>1?(r[1].length<2&&(t=`${t.toString()}0`),t):e},Ie=e=>{if(typeof e=="string"){const t=e==null?void 0:e.substring(1);return e==null?void 0:e.replace(t,"**")}return e},fe=e=>e==null?void 0:e.replace(/(\d{3})\d*(\d{4})/,"$1****$2"),ge=e=>e==null?void 0:e.replace(/^(.{6})(?:\d+)(.{2})$/,"$1**********$2"),Ne=e=>/^\d{6}$/.test(e),Oe=(e,t="year")=>f().diff(c(e),t,!0);export{ce as a,oe as b,me as c,ye as d,ue as e,de as f,Oe as g,le as h,ge as i,E as j,fe as m,Ie as n,pe as o,Z as t,Ne as v};
