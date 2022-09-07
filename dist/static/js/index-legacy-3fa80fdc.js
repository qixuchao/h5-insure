!function(){var e=document.createElement("style");e.innerHTML=".com-field-info[data-v-35c1ec17]{display:flex;align-items:center;justify-content:space-between;height:1.41333rem;border-top:1px solid #eeeff4}.com-field-info .title[data-v-35c1ec17]{flex:0 0 3.33333rem;font-size:.4rem;font-weight:600;color:#393d46}.com-field-info .desc[data-v-35c1ec17]{flex:1;text-align:right;font-size:.4rem;color:#515865;line-height:.56rem}.page-activity-upgrade[data-v-3b5c5508]{background:linear-gradient(180deg,#fea64a 0%,#fc7429 88%,#fc6d24 100%);position:relative}.page-activity-upgrade .logo[data-v-3b5c5508]{width:50%;margin:.4rem}.page-activity-upgrade .container[data-v-3b5c5508]{position:absolute;left:0;width:100%;padding:.26667rem;bottom:.8rem}.page-activity-upgrade .container .main-form[data-v-3b5c5508]{background:url(/static/assets/bg.c7f48ab0.png) no-repeat;background-size:100% 100%;position:relative;padding:.26667rem}.page-activity-upgrade .container .main-form .com-field-info[data-v-3b5c5508]:first-child{border-top:none}.page-activity-upgrade .container .main-form .upgrade-btn[data-v-3b5c5508]{margin-bottom:.26667rem;background-color:#ff6d23;border-color:#ff6d23}.page-activity-upgrade[data-v-3b5c5508] .com-check-btn.activated-disabled,[data-v-3b5c5508] .com-check-btn.activated-disabled{background-color:#ff6d23}[data-v-3b5c5508] .van-cell{padding:.26667rem 0;border-top:1px solid #eeeff4}[data-v-3b5c5508] .van-field__label{font-size:.4rem;font-weight:600;color:#393d46}\n",document.head.appendChild(e),System.register(["./vendor-legacy-1e86c4b9.js","./index-legacy-64291917.js","./trial-legacy-752c7d88.js","./product-legacy-530fd22d.js","./trial-legacy-3e6c4b84.js","./infoCollection-legacy-f3c4910f.js","./logo-legacy-0f50bb05.js"],(function(e){"use strict";var t,r,n,a,d,i,o,l,c,s,u,p,y,m,v,f,g,I,b,O,L,k,h,C,N,P,T;return{setters:[function(e){t=e.g,r=e.j,n=e.n,a=e.z,d=e.J,i=e.O,o=e.E,l=e.h,c=e.r,s=e.A,u=e.p,p=e.m,y=e.C,m=e.T},function(e){v=e._},function(e){f=e.i,g=e.a,I=e.s,b=e.e,O=e.E},function(e){L=e.p},function(e){k=e.e,h=e.i,C=e.P,N=e.I},function(e){P=e.S},function(e){T=e.l}],execute:function(){const H={class:"com-field-info"},_={class:"title"},w={class:"desc"};var V=v(t({props:{title:{type:String,default:""},desc:{type:String,default:""}},setup:e=>(t,i)=>(r(),n("div",H,[a("div",_,d(e.title),1),a("div",w,d(e.desc),1)]))}),[["__scopeId","data-v-35c1ec17"]]);const D={class:"page-activity-upgrade"},S=["src"],x={class:"container"},R={class:"main-form"};e("default",v(t({setup(e){const t=i(),{productCode:v,orderId:H,tenantId:_}=t.query,w=o(),j=o(),q=o(),F=o(),A=o(),E=e=>{const t=e.find((e=>e.riskType===k.MAIN_RISK));return e.map((e=>{var r;const{riskInsureLimitVO:n,riskCategory:a,id:d,riskType:i,riskName:o,riskCode:l,riskLiabilityInfoVOList:c,riskCalcMethodInfoVO:s}=e,{insurancePeriodValueList:u,paymentFrequencyList:p,paymentPeriodValueList:y,annuityDrawFrequencyList:m,annuityDrawValueList:v,insurancePeriodRule:f,paymentPeriodRule:g}=n,{fixedAmount:I,minCopy:b}=s,O={amount:I,riskCode:l,riskId:d,riskName:o,chargePeriod:null==y?void 0:y[0],annuityDrawDate:null==v?void 0:v[0],riskType:i,annuityDrawFrequency:null==m?void 0:m[0],copy:b,coveragePeriod:null==u?void 0:u[0],insuredCode:null===(r=w.value)||void 0===r?void 0:r.insurerCode,liabilityVOList:c.filter((e=>1===e.optionalFlag)),paymentFrequency:null==p?void 0:p[0],riskCategory:a};return i===k.MAIN_RISK?O:(f===h.ONE_YEAR&&(O.coveragePeriod="year_1"),g===h.ONE_YEAR&&(O.chargePeriod="year_1"),{...O,mainRiskId:null==t?void 0:t.id,mainRiskCode:null==t?void 0:t.riskCode})}))},B=(e,t)=>e.map((e=>{var r,n;return{tenantId:_,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:C[e.chargePeriod.split("_")[0]],insurancePeriodType:N["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:null===(r=t[e.riskCode])||void 0===r?void 0:r.premium,liabilityDetails:e.liabilityVOList.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:null===(n=w.value)||void 0===n?void 0:n.id}})),z=async()=>{const e=(()=>{const e=E(j.value.productRiskVoList[0].riskDetailVOList),t=B(e,{}),r=q.value;return{tenantId:_,venderCode:r.venderCode,orderDataSource:r.orderDataSource,tenantOrderHolder:{tenantId:r.tenantOrderHolder.tenantId,name:r.tenantOrderHolder.name,certType:r.tenantOrderHolder.certType,certNo:r.tenantOrderHolder.certNo,mobile:r.tenantOrderHolder.mobile,birthday:r.tenantOrderHolder.birthday,gender:r.tenantOrderHolder.gender},extInfo:r.extInfo.extraInfo,tenantOrderInsuredList:[{tenantId:r.tenantOrderInsuredList[0].tenantId,relationToHolder:r.tenantOrderInsuredList[0].relationToHolder,insuredBeneficiaryType:r.tenantOrderInsuredList[0].insuredBeneficiaryType,name:r.tenantOrderInsuredList[0].name,hasSocialInsurance:r.tenantOrderInsuredList[0].hasSocialInsurance,certType:r.tenantOrderInsuredList[0].certType,certNo:r.tenantOrderInsuredList[0].certNo,mobile:r.tenantOrderInsuredList[0].mobile,birthday:r.tenantOrderInsuredList[0].birthday,gender:r.tenantOrderInsuredList[0].gender,tenantOrderProductList:[{tenantId:r.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantId,productCode:w.value.productCode,productName:w.value.productName,premium:F.value,tenantOrderRiskList:t}]}]}})(),t=await I(e),{code:r,data:n}=t;return"10000"===r?n.data:""},M=()=>{const e=q.value;return{agencyId:e.agencyId,venderCode:e.venderCode,applicationNo:e.applicationNo,orderDataSource:e.orderDataSource,orderNo:e.orderNo,orderStatus:e.orderStatus,policyNo:e.policyNo,tenantId:_,orderAmount:F.value,tenantOrderHolder:{tenantId:e.tenantOrderHolder.tenantId,name:e.tenantOrderHolder.name,certType:e.tenantOrderHolder.certType,certNo:e.tenantOrderHolder.certNo,mobile:e.tenantOrderHolder.mobile,birthday:e.tenantOrderHolder.birthday,gender:e.tenantOrderHolder.gender},tenantOrderInsuredList:[{premium:F.value,tenantId:e.tenantOrderInsuredList[0].tenantId,relationToHolder:e.tenantOrderInsuredList[0].relationToHolder,insuredBeneficiaryType:e.tenantOrderInsuredList[0].insuredBeneficiaryType,name:e.tenantOrderInsuredList[0].name,hasSocialInsurance:e.tenantOrderInsuredList[0].hasSocialInsurance,certType:e.tenantOrderInsuredList[0].certType,certNo:e.tenantOrderInsuredList[0].certNo,mobile:e.tenantOrderInsuredList[0].mobile,birthday:e.tenantOrderInsuredList[0].birthday,gender:e.tenantOrderInsuredList[0].gender,tenantOrderProductList:[{tenantId:e.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantId,productCode:w.value.productCode,productName:w.value.productName,tenantOrderRiskList:B(E(j.value.productRiskVoList[0].riskDetailVOList),{})}]}]}},K=async()=>{const e=M(),t=await b(e),{code:r,data:n}=t;"10000"===r&&(F.value=n.installmentPremium)},U=async e=>{await K();(async e=>{const t=M(),r=await O({id:e,...t}),{code:n,data:a}=r;"10000"===n&&m("保障升级成功")})(await z())};return l((()=>{(()=>{const e=L({productCode:v,withInsureInfo:!0}),t=f({productCode:v}),r=g({id:H,tenantId:_});Promise.all([e,t,r]).then((([e,t,r])=>{"10000"===e.code&&(w.value=e.data),"10000"===t.code&&(j.value=t.data),"10000"===r.code&&(q.value=r.data,A.value=r.data.tenantOrderInsuredList[0].extInfo.hasSocialInsurance),K()}))})()})),(e,t)=>{var i,o,l,m,v,f;const g=c("ProRadioButton"),I=c("ProField"),b=c("VanButton");return r(),n("div",D,[a("img",{class:"logo",src:s(T)},null,8,S),a("div",x,[a("div",R,[u(V,{title:"姓名",desc:null===(i=q.value)||void 0===i||null===(o=i.tenantOrderInsuredList)||void 0===o?void 0:o[0].name},null,8,["desc"]),u(V,{title:"证件号码",desc:null===(l=q.value)||void 0===l||null===(m=l.tenantOrderInsuredList)||void 0===m?void 0:m[0].certNo},null,8,["desc"]),u(V,{title:"手机号码",desc:null===(v=q.value)||void 0===v||null===(f=v.tenantOrderHolder)||void 0===f?void 0:f.mobile},null,8,["desc"]),u(I,{label:"有无社保",name:"name",required:"",placeholder:"请选择"},{input:p((()=>[u(g,{modelValue:A.value,"onUpdate:modelValue":t[0]||(t[0]=e=>A.value=e),disabled:!0,options:s(P)},null,8,["modelValue","options"])])),_:1}),u(b,{class:"upgrade-btn",type:"primary",block:!0,onClick:U},{default:p((()=>[y("升级保障("+d(F.value)+")",1)])),_:1})])])])}}}),[["__scopeId","data-v-3b5c5508"]]))}}}))}();
