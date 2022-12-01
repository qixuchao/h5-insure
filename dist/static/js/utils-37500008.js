import{d as k}from"./vendor-902054a7.js";import{l as K}from"./useStorage-5afabf38.js";import{I as $,R as x,g as F}from"./infoCollection-9aa7455c.js";import{b as U,a as w,R as D,i as S}from"./trial-0a483bd3.js";import{a6 as h,K as p,C as L,J as T,a3 as J}from"./index-2b589d9a.js";const te=e=>{const{tenantId:t,riskList:i,riskPremium:n,productId:a}=e;return i.map(r=>{var s,l;return{tenantId:t,amountUnit:1,annuityDrawFrequency:r.annuityDrawDate,annuityDrawType:r.annuityDrawType,paymentFrequency:r.paymentFrequency,paymentPeriod:r.chargePeriod.split("_")[1],paymentPeriodType:U[r.chargePeriod.split("_")[0]],insurancePeriodType:w[r.coveragePeriod==="to_life"?"to_life":r.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+r.coveragePeriod.split("_")[1])?0:r.coveragePeriod.split("_")[1],riskCode:r.riskCode,riskType:r.riskType,riskName:r.riskName,extInfo:{riskId:r.riskId,copy:r.copy},initialPremium:(s=n[r.riskCode])==null?void 0:s.premium,liabilityDetails:((l=r.liabilityVOList)==null?void 0:l.map(o=>({liabilityCode:o.liabilityCode,liabilityName:o.liabilityName,refundMethod:o.liabilityAttributeValue})))||[],productId:a,currentAmount:r.amount,initialAmount:r.amount}})},ie=e=>h(e).map(t=>{const i=t.riskDetailVOList.find(r=>r.riskType===D.MAIN_RISK),n=t.riskDetailVOList.filter(r=>r.riskType===D.RIDER_RISK),a=r=>r.map(d=>{const{riskCategory:s,riskCode:l,riskType:o,id:m,riskInsureLimitVO:u,riskCalcMethodInfoVO:c}=d,{annuityDrawFrequencyList:y,annuityDrawValueList:I,insurancePeriodValueList:f,paymentFrequencyList:N,paymentPeriodValueList:R}=u,{minCopy:C,maxCopy:O,fixedAmount:g,singeAmount:M}=c;return{amount:g||M,annuityDrawDate:I==null?void 0:I[0],annuityDrawFrequency:y==null?void 0:y[0],chargePeriod:R==null?void 0:R[0],copy:C||O||0,coveragePeriod:f==null?void 0:f[0],liabilityVOList:d.riskLiabilityInfoVOList,mainRisk:d.riskCode===i.riskCode,mainRiskCode:d.riskCode===i.riskCode?i.riskCode:void 0,mainRiskId:d.riskCode===i.riskCode?i.riskId:void 0,paymentFrequency:N==null?void 0:N[0],riderRisk:!0,riderRiskVOList:o===1?a(n):[],riskCategory:s,riskCode:l,riskId:m,riskType:o}});return a([i])}).flat(),V=(e,t,i=[],n=F.YEAR,a=!1)=>{const r=e.filter(s=>{try{return s.extraInfo?JSON.parse(s.extraInfo).packageCode?!!i.includes(s.id):!0:!1}catch{return!1}});console.log("lastRiskList",r);const d=r.find(s=>s.riskType===D.MAIN_RISK);return r.map(s=>{const{riskInsureLimitVO:l,riskCategory:o,id:m,riskType:u,riskName:c,riskCode:y,extraInfo:I,riskLiabilityInfoVOList:f,riskCalcMethodInfoVO:N}=s,{insurancePeriodType:R,insurancePeriodValueList:C,paymentFrequencyList:O,paymentPeriodValueList:g,paymentPeriodType:M,annuityDrawFrequencyList:_,annuityDrawValueList:b,insurancePeriodRule:H,paymentPeriodRule:v}=l,{fixedAmount:q,minCopy:B}=N,E={amount:q,riskCode:y,riskId:m,riskName:c,paymentFrequency:(O==null?void 0:O[0])||F.YEAR,extraInfo:I,chargePeriod:g==null?void 0:g[0],annuityDrawDate:b==null?void 0:b[0],riskType:u,annuityDrawFrequency:_==null?void 0:_[0],copy:B,coveragePeriod:C==null?void 0:C[0],insuredCode:t==null?void 0:t.insurerCode,liabilityVOList:f,riskCategory:o};return u===D.MAIN_RISK?E:(H===S.ONE_YEAR&&(E.coveragePeriod="year_1"),v===S.ONE_YEAR&&(E.chargePeriod="year_1"),{...E,mainRiskId:d==null?void 0:d.id,mainRiskCode:d==null?void 0:d.riskCode})})},ne=e=>{var i,n,a;return{orderAmount:e.premium,tenantId:e.tenantId,venderCode:(i=e.detail)==null?void 0:i.insurerCode,applicationNo:e.applicationNo,policyNo:e.policyNo,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:e.orderCategory,orderStatus:e.orderStatus,orderTopStatus:e.orderTopStatus,tenantOrderHolder:{tenantId:e.tenantId,name:e.holder.name,certNo:e.holder.certNo,certType:L.CERT,mobile:e.holder.mobile,birthday:p(e.holder.certNo),gender:T(e.holder.certNo),extInfo:{hasSocialInsurance:e.holder.socialFlag}},extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,paymentFrequency:e.paymentFrequency,successJumpUrl:e.successJumpUrl},iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{tenantId:e.tenantId,relationToHolder:e.insured.relationToHolder,certNo:e.insured.certNo,certType:L.CERT,name:e.insured.name,mobile:e.insured.relationToHolder===x.SELF?e.holder.mobile:"",birthday:p(e.insured.certNo),gender:T(e.insured.certNo),extInfo:{hasSocialInsurance:e.insured.socialFlag},tenantOrderProductList:[{tenantId:e.tenantId,productCode:(n=e.detail)==null?void 0:n.productCode,productName:(a=e.detail)==null?void 0:a.productName,premium:e.premium,tenantOrderRiskList:e.tenantOrderRiskList}]}]}},A=(e,t)=>{if(!e)return"";const[i,n]=e.split("_"),a=parseInt(n,10);return i==="day"?k(t).add(a,"day").format("YYYY-MM-DD"):k(t).add(a,"year").format("YYYY-MM-DD")},P=(e,t=k().format("YYYY-MM-DD"))=>k(e).diff(t,"day"),z=(e,t,i)=>{const n=A(e,i),a=A(t,i);return P(n)<=1&&P(a)>=0},ae=e=>{const{riskCode:t,liabilityCode:i,birth:n,sex:a}=e,r=A("max_18",n);return console.log("lastDate",r),console.log("diffDate(lastDate)",P(r)),!(t==="7Y7"&&i==="FXG086"&&!(a===J.FEMALE&&P(r)<=0))},Y=(e,t,i=n=>!0)=>{const n=p(t),a=T(t),r=[];return e.forEach(d=>{const{riskDetailVOList:s}=d,l=s.map(o=>{const{maxHolderAge:m,minHolderAge:u}=o.riskInsureLimitVO;return z(u,m,n)?(o.riskLiabilityInfoVOList=o.riskLiabilityInfoVOList.filter(c=>i({riskCode:o.riskCode,liabilityCode:c.liabilityCode,birth:n,sex:a})),o):null});r.push({riskDetailVOList:l.filter(o=>!!(o&&o.riskLiabilityInfoVOList.length>0))})}),r},oe=(e,t=!1,i=n=>!0)=>{var r,d,s;let n=[];if(t)n=V((d=(r=Y(h(e.insureDetail.productRiskVoList),e.insured.certNo,i))==null?void 0:r[0])==null?void 0:d.riskDetailVOList,e.productDetail,[],e.paymentFrequency,t);else{const l=Y(h(e.insureDetail.productRiskVoList),e.insured.certNo,i);console.log("===result",[...l]),n=l.map(o=>V(o.riskDetailVOList,e.productDetail,e.packageRiskIdList,e.paymentFrequency,t))}return{calcData:{holder:{personVO:{birthday:p(e.holder.certNo),certType:L.CERT,certNo:e.holder.certNo,gender:Number(T(e.holder.certNo)),mobile:e.holder.mobile,name:e.holder.name,socialFlag:e.holder.socialFlag}},insuredVOList:[{insuredCode:(s=e.productDetail)==null?void 0:s.insurerCode,relationToHolder:e.insured.relationToHolder,personVO:{birthday:p(e.insured.certNo),certType:L.CERT,certNo:e.insured.certNo,gender:Number(T(e.insured.certNo)),name:e.insured.name,socialFlag:e.insured.socialFlag},productPlanVOList:[{riskVOList:n.flat()}]}],productCode:e.productDetail.productCode,tenantId:e.tenantId},riskVOList:n.flat()}},se=e=>e&&e.length?e.filter(i=>i.value===$.INSURE).map(i=>i.productRiskVoList.map(n=>n.id)).flat():[],de=(e,t="year")=>k().diff(p(e),t,!0),X=e=>!e||Number.isNaN(+e.split("_")[1])?0:e==null?void 0:e.split("_")[1],W=e=>{const{tenantId:t,riskList:i,riskPremium:n,productId:a}=e;return i.map(r=>{var s,l,o,m,u;return{tenantId:t,amountUnit:1,annuityDrawFrequency:r.annuityDrawDate,annuityDrawType:r.annuityDrawType,paymentFrequency:r.paymentFrequency,paymentPeriod:0,paymentPeriodType:(s=U)==null?void 0:s[r.chargePeriod],insurancePeriodType:w[r.coveragePeriod==="to_life"?"to_life":(o=(l=r.coveragePeriod)==null?void 0:l.split("_"))==null?void 0:o[0]],insurancePeriodValue:X(r.coveragePeriod),riskCode:r.riskCode,riskType:r.riskType,riskName:r.riskName,extInfo:{riskId:r.riskId,copy:r.copy},initialPremium:(m=n[r.riskCode])==null?void 0:m.premium,liabilityDetails:(u=r.liabilityVOList)==null?void 0:u.map(c=>({liabilityCode:c.liabilityCode,liabilityName:c.liabilityName,refundMethod:c.liabilityAttributeValue})),productId:a,currentAmount:r.amount,initialAmount:r.amount}})},le=e=>{var i,n,a,r;return console.log(e,"freeTransform"),{orderAmount:0,tenantId:e.tenantId,venderCode:e.insureDetail.productBasicInfoVO.insurerCode,orderDataSource:"1",saleUserId:e.saleUserId,saleChannelId:e.saleChannelId,orderCategory:"1",tenantOrderHolder:{tenantId:e.tenantId,certType:e.order.tenantOrderHolder.certEndType,...e.order.tenantOrderHolder},extInfo:{...e.extInfo,templateId:2,buttonCode:e.buttonCode,pageCode:e.pageCode,iseeBizNo:e.iseeBizNo},tenantOrderInsuredList:[{...e.order.tenantOrderInsuredList[0],tenantId:e.tenantId,certType:e.order.tenantOrderInsuredList[0].certEndType,mobile:e.order.tenantOrderInsuredList[0].relationToHolder===x.SELF?e.order.tenantOrderHolder.mobile:"",tenantOrderProductList:[{tenantId:e.tenantId,productCode:(i=e.insureDetail)==null?void 0:i.productBasicInfoVO.productCode,productName:(n=e.insureDetail)==null?void 0:n.productBasicInfoVO.productName,premium:0,tenantOrderRiskList:W({tenantId:e.tenantId,riskList:V(e.insureDetail.productRiskVoList[0].riskDetailVOList,e.detail),riskPremium:{},productId:(a=e.detail)==null?void 0:a.id})}]}],operateOption:(r=e.order)==null?void 0:r.operateOption}},ue=(e,t)=>t.indexOf("$")!==-1?t.replace("$",`${e}`):`${e||""}${t}`,j="PREVIEW_FILE_INFO",ce=e=>{const{origin:t}=window.location;K.set(j,JSON.stringify(e));const i=`${t}/template/filePreview`;console.log("url",i),window.open(i)};export{j as P,se as a,ne as b,de as c,ue as d,le as f,oe as g,ce as o,ie as r,te as t,ae as v};
