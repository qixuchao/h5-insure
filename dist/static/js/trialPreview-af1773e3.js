import{_ as i,d as e,r as a,b8 as l,J as t,E as o,aE as r,an as n,c as s,h as d,f as u,w as m,k as c,e as p,j as v,g as f,t as y,F as k,i as g,V,aV as b,y as I,m as h,ap as L,o as D,a7 as O,l as C,n as P,v as R,C as _,q as x,x as F,B as T,b3 as A,X as w,Y as M,S as N,aj as q,aG as U,u as j,a as E,ba as S,G as $,b as B,aD as K,aW as Y,bE as H,bF as J}from"./index-24ce1811.js";import{A as G}from"./index-3a93e48f.js";import{C as W}from"./index-323d8ed4.js";import{S as X}from"./index-5441d9bd.js";import{d as z,e as Q,f as Z,A as ii,g as ei,L as ai,h as li,b as ti,a as oi}from"./trial-5866b571.js";import{P as ri}from"./index-6e151119.js";import{i as ni,p as si}from"./trial-d2429143.js";import{I as di}from"./index-935a0576.js";import{c as ui}from"./createProposal-60f76b6c.js";import{C as mi}from"./index-d1815d92.js";import"./pdfh5-008ca364.js";import"./ProAddress.vue_vue_type_style_index_0_scoped_true_lang-d5d6e075.js";import"./index-843be0fd.js";const ci={class:"com-risk-card-wrapper part-card"},pi={class:"custom-field"},vi={class:"field-tip"},fi={class:"custom-field"},yi={class:"field-tip"},ki={class:"custom-field"},gi={class:"field-tip"},Vi={class:"pro-radio-wrap"},bi={class:"pro-radio-wrap"},Ii={class:"pro-radio-wrap"},hi={class:"pro-radio-wrap"},Li={class:"pro-radio-wrap"},Di={key:0},Oi={key:1,class:"pro-radio-wrap"},Ci={key:9,class:"liab-desc"};var Pi=i(e({__name:"index",props:{originData:{default:()=>({})},formInfo:{default:()=>({})},mainRiskData:{default:()=>({})},mainRiskInfo:{default:()=>({})},index:{default:0},removeRisk:{type:Function,default:()=>{}},removeRiskList:{default:()=>[]},enums:{default:()=>({})}},setup(i){const e=i,D=a({}),O=l("premium")||{};D.value=l("enumList")||{};const C=a({chargePeriod:{disabled:!1,prevent:!1},coveragePeriod:{disabled:!1,prevent:!1},paymentFrequency:{disabled:!1,prevent:!1}}),P=t({formInfo:e.formInfo}),R=i=>"boolean"!=typeof i&&!i||(!(!Array.isArray(i)||i.length)||"[object Object]"==={}.toString.call(i)&&Object.keys(i).length),_=(i,e,a={})=>{let l=e;return Array.isArray(e)||(l=[`${l}`]),(i||[]).filter((i=>l.includes(`${i.value}`)||l.includes(i.value)))},x=o((()=>{var i,a,l,t,o,r,n,s;return 1===(null==(i=e.originData)?void 0:i.riskType)?_(e.enums.RISK_INSURANCE_PERIOD,(null==(a=e.originData.riskInsureLimitVO)?void 0:a.insurancePeriodValueList)||[]):2===(null==(l=e.originData)?void 0:l.periodType)?_([{value:"year_1",name:"1年"}],["year_1"]):1===(null==(t=e.originData)?void 0:t.exemptFlag)?_(z,[`${null==(r=null==(o=null==e?void 0:e.originData)?void 0:o.riskInsureLimitVO)?void 0:r.insurancePeriodRule}`]):_(null==(n=e.enums)?void 0:n.RISK_INSURANCE_PERIOD,(null==(s=e.mainRiskData.riskInsureLimitVO)?void 0:s.insurancePeriodValueList)||[])})),F=o((()=>{var i,a,l,t,o,r,n,s;return 1===(null==(i=e.originData)?void 0:i.riskType)?_(null==(a=null==e?void 0:e.enums)?void 0:a.RISK_PAYMENT_PERIOD,(null==(l=e.originData.riskInsureLimitVO)?void 0:l.paymentPeriodValueList)||[]):1===(null==(t=e.originData)?void 0:t.exemptFlag)?_(Q,[`${null==(r=null==(o=null==e?void 0:e.originData)?void 0:o.riskInsureLimitVO)?void 0:r.paymentPeriodRule}`]):2===(null==(n=e.originData)?void 0:n.periodType)?_([{value:"year_1",name:"1年交"}],["year_1"]):_(e.enums.RISK_PAYMENT_PERIOD,(null==(s=e.mainRiskData.riskInsureLimitVO)?void 0:s.paymentPeriodValueList)||[])})),T=o((()=>{var i,a,l,t,o;return 1===(null==(i=e.originData)?void 0:i.riskType)?_(Z,(null==(a=e.originData.riskInsureLimitVO)?void 0:a.paymentFrequencyList)||[]):1===(null==(l=e.originData.riskInsureLimitVO)?void 0:l.paymentTypeRule)?_(Z,(null==(t=e.mainRiskData.riskInsureLimitVO)?void 0:t.paymentFrequencyList)||[]):_(Z,(null==(o=e.mainRiskData.riskInsureLimitVO)?void 0:o.paymentFrequencyList)||[])})),A=o((()=>{var i,a;let l=0,t=0;return((null==(a=null==(i=e.originData)?void 0:i.riskCalcMethodInfoVO)?void 0:a.paymentMethodLimitList)||[]).forEach(((i,e)=>{0===e&&(l=i.minAmount,t=i.maxAmount),l>i.minAmount&&(l=i.minAmount),t<i.maxAmount&&(t=i.maxAmount)})),P.formInfo.amount=P.formInfo.amount||l,{min:l,max:t||1/0}})),w=o((()=>{var i,a;let l=0,t=0;return((null==(a=null==(i=e.originData)?void 0:i.riskCalcMethodInfoVO)?void 0:a.paymentMethodLimitList)||[]).forEach(((i,e)=>{0===e&&(l=i.minPremium,t=i.maxPremium),l>i.minPremium&&(l=i.minPremium),t<i.maxPremium&&(t=i.maxPremium)})),P.formInfo.premium=P.formInfo.premium||l,{min:l,max:t||1/0}})),M=o((()=>{var i,a,l,t;const o=(null==(a=null==(i=e.originData)?void 0:i.riskCalcMethodInfoVO)?void 0:a.minCopy)||1,r=null==(t=null==(l=e.originData)?void 0:l.riskCalcMethodInfoVO)?void 0:t.maxCopy;return P.formInfo.copy=`${P.formInfo.copy||o||1}`,{min:o,max:r}})),N=(i,a,l)=>{var t,o;const r=(null==(o=null==(t=e.originData)?void 0:t.riskCalcMethodInfoVO)?void 0:o.increaseDecreaseNum)||1;if("sumInsured"===l){if(A.value.max&&+i>A.value.max)return`金额最大${A.value.max}元`;if(+i<A.value.min)return`金额最小${A.value.min}元`}else{if(w.value.max&&+i>w.value.max)return`金额最大${w.value.max}元`;if(+i<w.value.min)return`金额最小${w.value.min}元`}return+i%r==0?"":`金额必须是${r}的倍数`},q=i=>{var e;const a=((null==(e=P.formInfo)?void 0:e.liabilityVOList)||[]).find((e=>e.liabilityCode===i.liabilityCode));return a?a.liabilityAttributeValue?a.liabilityAttributeValue:1!==i.optionalFlag?"0":"-1":""};return r((()=>{var i,a,l,t;const o={riskType:e.originData.riskType,riskId:e.originData.id,riskName:e.originData.riskName,riskCode:e.originData.riskCode,amount:P.formInfo.amount,mainRiskCode:1!==e.originData.riskType?null==(i=e.mainRiskData)?void 0:i.riskCode:void 0,mainRiskId:1!==e.originData.riskType?null==(a=e.mainRiskData)?void 0:a.id:void 0,exemptFlag:e.originData.exemptFlag,exemptType:e.originData.exemptType,riskCategory:e.originData.riskCategory,liabilityVOList:(e.originData.riskLiabilityInfoVOList||[]).map((i=>({...i,liabilityAttributeCode:i.liabilityAttributeType,liabilityCode:i.liabilityCode,liabilityRateType:i.liabilityRateType,liabilityAttributeValue:q(i)})))};[1].includes((null==(l=e.originData.riskCalcMethodInfoVO)?void 0:l.saleMethod)||0)&&1!==(null==(t=e.originData)?void 0:t.exemptFlag)||!e.originData.riskCalcMethodInfoVO.fixedAmount||(o.amount=e.originData.riskCalcMethodInfoVO.fixedAmount),Object.assign(P.formInfo,o)})),n((()=>{var i;return null==(i=P.formInfo)?void 0:i.paymentFrequency}),((i=0)=>{var a,l,t;[3].includes((null==(a=e.originData.riskCalcMethodInfoVO)?void 0:a.saleMethod)||0)&&((null==(t=null==(l=e.originData)?void 0:l.riskCalcMethodInfoVO)?void 0:t.paymentMethodLimitList)||[]).forEach((e=>{+e.paymentFrequency==+i&&Object.assign(P.formInfo,{amount:e.perCopyAmount,premium:e.perCopyPremium})})),1==+i&&"single"!==P.formInfo.chargePeriod&&(P.formInfo.chargePeriod="single")})),n((()=>{var i;return null==(i=P.formInfo)?void 0:i.copy}),(i=>{var a,l;4===(null==(a=e.originData.riskCalcMethodInfoVO)?void 0:a.saleMethod)&&(P.formInfo.amount=null==(l=e.originData.riskCalcMethodInfoVO)?void 0:l.fixedAmount)})),n((()=>{var i;return null==(i=P.formInfo)?void 0:i.chargePeriod}),(i=>{"single"===i&&1!=+(P.formInfo.paymentFrequency||0)&&(P.formInfo.paymentFrequency=1)})),n((()=>null==e?void 0:e.mainRiskInfo),(i=>{var a,l,t,o,r,n;i&&2===e.originData.riskType&&(1===(null==(l=null==(a=e.originData)?void 0:a.riskInsureLimitVO)?void 0:l.insurancePeriodRule)&&(i.coveragePeriod?C.value.coveragePeriod.disabled=!0:C.value.coveragePeriod.prevent=!0,P.formInfo.coveragePeriod=i.coveragePeriod||""),1===(null==(o=null==(t=e.originData)?void 0:t.riskInsureLimitVO)?void 0:o.paymentPeriodRule)&&(i.chargePeriod?C.value.chargePeriod.disabled=!0:C.value.chargePeriod.prevent=!0,P.formInfo.chargePeriod=i.chargePeriod||""),1===(null==(n=null==(r=e.originData)?void 0:r.riskInsureLimitVO)?void 0:n.paymentTypeRule)&&(i.paymentFrequency?C.value.paymentFrequency.disabled=!0:C.value.paymentFrequency.prevent=!0,P.formInfo.paymentFrequency=i.paymentFrequency||0))}),{immediate:!0,deep:!0}),(e,a)=>{var l,t,o,r,n,D,q,U,j,E,S,$,B,K,Y,H,J,G,W,z,Q,Z,ti,oi,ni,si,di,ui,mi,Pi;const Ri=V,_i=b,xi=X,Fi=I,Ti=h,Ai=L;return s(),d("div",ci,[u(_i,{"risk-type":i.originData.riskType,title:i.originData.riskName},{default:m((()=>[i.removeRiskList.includes(i.originData.id)?(s(),d("div",{key:0,class:"delete-risk",onClick:a[0]||(a[0]=e=>i.removeRisk(i.originData.id))},[u(Ri,{name:"img-lajitong",color:"#0d6efe"})])):c("",!0)])),_:1},8,["risk-type","title"]),1===(null==(l=i.originData.riskCalcMethodInfoVO)?void 0:l.saleMethod)&&2===i.originData.exemptFlag?(s(),p(Fi,{key:0,modelValue:f(P).formInfo.amount,"onUpdate:modelValue":a[2]||(a[2]=i=>f(P).formInfo.amount=i),label:"保额",name:"amount",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...i)=>N(...i,"sumInsured")}]},{input:m((()=>{var e,l;return[v("div",pi,[u(xi,{modelValue:f(P).formInfo.amount,"onUpdate:modelValue":a[1]||(a[1]=i=>f(P).formInfo.amount=i),"input-width":"64px",min:f(A).min,step:(null==(e=i.originData.riskCalcMethodInfoVO)?void 0:e.increaseDecreaseNum)||1,max:f(A).max},null,8,["modelValue","min","step","max"]),v("span",vi,y(`金额最低${f(A).min}元，为${(null==(l=i.originData.riskCalcMethodInfoVO)?void 0:l.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):c("",!0),2===(null==(o=null==(t=i.originData)?void 0:t.riskCalcMethodInfoVO)?void 0:o.saleMethod)?(s(),p(Fi,{key:1,modelValue:f(P).formInfo.premium,"onUpdate:modelValue":a[4]||(a[4]=i=>f(P).formInfo.premium=i),label:"保费",name:"premium",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...i)=>N(...i,"premium")}]},{input:m((()=>{var e,l,t,o;return[v("div",fi,[u(xi,{modelValue:f(P).formInfo.premium,"onUpdate:modelValue":a[3]||(a[3]=i=>f(P).formInfo.premium=i),step:(null==(l=null==(e=i.originData)?void 0:e.riskCalcMethodInfoVO)?void 0:l.increaseDecreaseNum)||1,min:f(w).min,"input-width":"64px",max:f(w).max},null,8,["modelValue","step","min","max"]),v("span",yi,y(`金额最低${f(w).min}元，为${(null==(o=null==(t=i.originData)?void 0:t.riskCalcMethodInfoVO)?void 0:o.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):c("",!0),3===(null==(n=null==(r=i.originData)?void 0:r.riskCalcMethodInfoVO)?void 0:n.saleMethod)||4===(null==(q=null==(D=i.originData)?void 0:D.riskCalcMethodInfoVO)?void 0:q.saleMethod)&&((null==(j=null==(U=i.originData)?void 0:U.riskCalcMethodInfoVO)?void 0:j.minCopy)||(null==(S=null==(E=i.originData)?void 0:E.riskCalcMethodInfoVO)?void 0:S.maxCopy))?(s(),p(Fi,{key:2,modelValue:f(P).formInfo.copy,"onUpdate:modelValue":a[6]||(a[6]=i=>f(P).formInfo.copy=i),label:"投保份数",name:"copy",rules:[{required:!0,message:"请填写"}]},{input:m((()=>[v("div",ki,[u(xi,{modelValue:f(P).formInfo.copy,"onUpdate:modelValue":a[5]||(a[5]=i=>f(P).formInfo.copy=i),step:1,min:f(M).min,max:f(M).max},null,8,["modelValue","min","max"]),v("span",gi,y(`${f(M).min}份起购，最多购买${f(M).max}份`),1)])])),_:1},8,["modelValue"])):c("",!0),[1].includes((null==($=i.originData.riskCalcMethodInfoVO)?void 0:$.saleMethod)||0)&&1!==(null==(B=i.originData)?void 0:B.exemptFlag)||!i.originData.riskCalcMethodInfoVO.fixedAmount&&!(null==(Y=f(O))?void 0:Y[null==(K=i.originData)?void 0:K.riskCode])?c("",!0):(s(),p(Fi,{key:3,label:"保额"},{input:m((()=>{var e,a,l,t;return[v("div",null,y((null==(e=i.originData.riskCalcMethodInfoVO)?void 0:e.fixedAmount)||(null==(t=null==(l=f(O))?void 0:l[null==(a=i.originData)?void 0:a.riskCode])?void 0:t.amount)),1)]})),_:1})),R(null==(J=null==(H=i.originData)?void 0:H.riskInsureLimitVO)?void 0:J.insurancePeriodValueList)&&R(null==(W=null==(G=i.originData)?void 0:G.riskInsureLimitVO)?void 0:W.insurancePeriodRule)?c("",!0):(s(),p(Ai,{key:4,modelValue:f(P).formInfo.coveragePeriod,"onUpdate:modelValue":a[8]||(a[8]=i=>f(P).formInfo.coveragePeriod=i),label:"保障期间",name:"coveragePeriod",rules:[{required:!0,message:"请选择保障期间"}]},{input:m((()=>[v("div",Vi,[u(Ti,{modelValue:f(P).formInfo.coveragePeriod,"onUpdate:modelValue":a[7]||(a[7]=i=>f(P).formInfo.coveragePeriod=i),disabled:f(C).coveragePeriod.disabled,prevent:f(C).coveragePeriod.prevent?"请先选择主险保障期间":"",options:f(x),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),R(null==(Q=null==(z=i.originData)?void 0:z.riskInsureLimitVO)?void 0:Q.paymentPeriodValueList)&&R(null==(ti=null==(Z=i.originData)?void 0:Z.riskInsureLimitVO)?void 0:ti.paymentPeriodRule)?c("",!0):(s(),p(Ai,{key:5,modelValue:f(P).formInfo.chargePeriod,"onUpdate:modelValue":a[10]||(a[10]=i=>f(P).formInfo.chargePeriod=i),label:"交费期间",name:"chargePeriod",rules:[{required:!0,message:"请选择交费期间"}]},{input:m((()=>[v("div",bi,[u(Ti,{modelValue:f(P).formInfo.chargePeriod,"onUpdate:modelValue":a[9]||(a[9]=i=>f(P).formInfo.chargePeriod=i),disabled:f(C).chargePeriod.disabled,prevent:f(C).chargePeriod.prevent?"请先选择主险交费期间":"",options:f(F),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),R(null==(oi=i.originData.riskInsureLimitVO)?void 0:oi.paymentFrequencyList)&&R(null==(ni=i.originData.riskInsureLimitVO)?void 0:ni.paymentPeriodRule)?c("",!0):(s(),p(Ai,{key:6,modelValue:f(P).formInfo.paymentFrequency,"onUpdate:modelValue":a[12]||(a[12]=i=>f(P).formInfo.paymentFrequency=i),label:"交费方式",name:"paymentFrequency",rules:[{required:!0,message:"请选择交费方式"}]},{input:m((()=>[v("div",Ii,[u(Ti,{modelValue:f(P).formInfo.paymentFrequency,"onUpdate:modelValue":a[11]||(a[11]=i=>f(P).formInfo.paymentFrequency=i),disabled:f(C).paymentFrequency.disabled,prevent:f(C).paymentFrequency.prevent?"请先选择主险交费方式":"",options:f(T)},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),R(null==(di=null==(si=i.originData)?void 0:si.riskInsureLimitVO)?void 0:di.annuityDrawValueList)?c("",!0):(s(),p(Ai,{key:7,modelValue:f(P).formInfo.annuityDrawDate,"onUpdate:modelValue":a[14]||(a[14]=i=>f(P).formInfo.annuityDrawDate=i),label:"领取时间",name:"annuityDrawDate"},{input:m((()=>{var e;return[v("div",hi,[u(Ti,{modelValue:f(P).formInfo.annuityDrawDate,"onUpdate:modelValue":a[13]||(a[13]=i=>f(P).formInfo.annuityDrawDate=i),options:_(f(ii),(null==(e=i.originData.riskInsureLimitVO)?void 0:e.annuityDrawValueList)||[])},null,8,["modelValue","options"])])]})),_:1},8,["modelValue"])),R(null==(mi=null==(ui=i.originData)?void 0:ui.riskInsureLimitVO)?void 0:mi.annuityDrawFrequencyList)?c("",!0):(s(),p(Ai,{key:8,modelValue:f(P).formInfo.annuityDrawType,"onUpdate:modelValue":a[16]||(a[16]=i=>f(P).formInfo.annuityDrawType=i),label:"领取方式",name:"annuityDrawType"},{input:m((()=>{var e;return[v("div",Li,[u(Ti,{modelValue:f(P).formInfo.annuityDrawType,"onUpdate:modelValue":a[15]||(a[15]=i=>f(P).formInfo.annuityDrawType=i),options:_(f(ei),(null==(e=i.originData.riskInsureLimitVO)?void 0:e.annuityDrawFrequencyList)||[])},null,8,["modelValue","options"])])]})),_:1},8,["modelValue"])),(s(!0),d(k,null,g(i.originData.riskLiabilityInfoVOList||[],((e,a)=>(s(),d(k,{key:a},[1!==e.optionalFlag||R(e.liabilityAttributeValueList)?c("",!0):(s(),p(Fi,{key:0,modelValue:f(P).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":i=>f(P).formInfo.liabilityVOList[a].liabilityAttributeValue=i,label:e.liabilityName,name:"liabilityAttributeValue",rules:[{required:e.liabilityAttributeValue,message:`请选择${e.liabilityName}`}]},{input:m((()=>{var l,t;return[v("div",null,[R(e.liabilityAttributeValueList)?(s(),d("span",Di,"50万")):(s(),d("div",Oi,[u(Ti,{modelValue:f(P).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":i=>f(P).formInfo.liabilityVOList[a].liabilityAttributeValue=i,options:_(f(ai),null==(t=null==(l=i.originData.riskLiabilityInfoVOList)?void 0:l[a])?void 0:t.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"])]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])),1!==e.optionalFlag?(s(),p(Fi,{key:1,modelValue:f(P).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":i=>f(P).formInfo.liabilityVOList[a].liabilityAttributeValue=i,label:e.liabilityName,name:"liabilityAttributeValue"},{input:m((()=>{var l,t;return[v("div",null,[R(e.liabilityAttributeValueList)?(s(),p(Ti,{key:0,modelValue:f(P).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":i=>f(P).formInfo.liabilityVOList[a].liabilityAttributeValue=i,options:f(li)},null,8,["modelValue","onUpdate:modelValue","options"])):(s(),p(Ti,{key:1,modelValue:f(P).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":i=>f(P).formInfo.liabilityVOList[a].liabilityAttributeValue=i,options:_(f(ai),null==(t=null==(l=i.originData.riskLiabilityInfoVOList)?void 0:l[a])?void 0:t.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label"])):c("",!0)],64)))),128)),(null==(Pi=i.originData)?void 0:Pi.relationDesc)?(s(),d("div",Ci,[u(ri,{title:"责任投保说明"},{default:m((()=>[v("div",null,y(i.originData.relationDesc),1)])),_:1})])):c("",!0)])}}}),[["__scopeId","data-v-63e01418"]]);const Ri={class:"com-risk-list-wrapper"},_i=(i=>(w("data-v-10dda951"),i=i(),M(),i))((()=>v("div",{class:"popup-title"},"选择附加险",-1))),xi={class:"risk-list"},Fi={class:"cell-title"},Ti={class:"title"},Ai={class:"footer-button"};var wi=i(e({__name:"index",props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(i,{emit:e}){const l=i,o=a([]),r=a([]),c=a([...l.disabled]),V=t({show:l.show,currentChecked:[...l.modelValue]}),b=i=>{var e,a,t;if(c.value.includes(i))return;((i,e)=>{if(!l.collocationList.length)return e?void(V.currentChecked=[]):void V.currentChecked.push(i);let a=V.currentChecked,t=c.value;e?(l.collocationList.forEach((e=>{i===e.riskId&&(2===e.collocationType?a=a.filter((a=>a!==e.collocationRiskId||a!==i)):3===e.collocationType?(a=a.filter((e=>e!==i)),t=t.filter((i=>i!==e.collocationRiskId))):a=a.filter((e=>e!==i)))})),V.currentChecked=a,c.value=t):(l.collocationList.forEach((l=>{i===l.riskId&&(e||(2===l.collocationType?a.push(l.collocationRiskId):3===l.collocationType&&t.push(l.collocationRiskId),a.push(i)))})),V.currentChecked.push(...a),c.value=t)})(i,V.currentChecked.includes(i)),null==(t=null==(a=null==(e=null==o?void 0:o.value)?void 0:e[i])?void 0:a.toggle)||t.call(a)},I=()=>{e("close")},h=()=>{const i=l.riskList.filter((i=>V.currentChecked.includes(i.id)));e("update:modelValue",[...new Set(r.value)]),e("finished",i,c.value),e("close")};return D((()=>{o.value=[]})),n((()=>V.currentChecked),(i=>{r.value=i}),{deep:!0,immediate:!0}),n((()=>l.modelValue),(i=>{r.value=i||[],c.value.push(...i||[])}),{deep:!0,immediate:!0}),(e,a)=>{const l=R,t=_,n=x,L=F,D=T,w=A;return s(),d("div",Ri,[u(w,{show:f(V).show,"onUpdate:show":a[1]||(a[1]=i=>f(V).show=i),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:I},{default:m((()=>[_i,v("div",xi,[u(L,{modelValue:f(r),"onUpdate:modelValue":a[0]||(a[0]=i=>O(r)?r.value=i:null)},{default:m((()=>[u(n,{inset:""},{default:m((()=>[(s(!0),d(k,null,g(i.riskList,(i=>(s(),p(t,{key:i.id,title:i.riskName,disabled:f(c).includes(i.id),onClick:e=>b(i.id)},{"right-icon":m((()=>[u(l,{ref_for:!0,ref:e=>f(o)[i.id]=e,shape:"square",disabled:f(c).includes(i.id),name:i.id,onClick:C((e=>b(i.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:m((()=>[v("div",Fi,[v("div",Ti,y(i.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),v("div",Ai,[u(D,{type:"primary",disabled:!f(V).currentChecked.length,block:"",onClick:h},{default:m((()=>[P("确认")])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-10dda951"]]);const Mi={class:"risk-list-wrapper"},Ni={key:0,class:"add-rider-risk"},qi={class:"left-part"},Ui=(i=>(w("data-v-fb5e5424"),i=i(),M(),i))((()=>v("span",{class:"btn-plus"},"+",-1)));var ji=i(e({__name:"index",props:{riskInfo:{default:()=>({})},originData:{default:()=>[]},pickFactor:{type:Function,default:()=>{}},enums:{default:()=>{}}},setup(i){const e=i,o=l("source")||{},[r,V]=N(!1);a(null),a(null);const b=t({mainRiskInfo:e.riskInfo,riskInfo:e.riskInfo,requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[],currentRiskList:[]}),I=(i,e)=>{b.currentRiskList=b.currentRiskList.concat(i),b.disabledList=e},h=i=>{q.confirm({message:"确定要删除附加险么？",confirmButtonText:"删除"}).then((()=>{var e;const a=[i];((null==(e=b.mainRiskData)?void 0:e.collocationVOList)||[]).forEach((e=>{i!==e.riskId||2!==e.collocationType&&3!==e.collocationType||a.push(e.collocationRiskId)})),b.checkedList=b.checkedList.filter((i=>!a.includes(i))),b.currentRiskList=b.currentRiskList.filter((i=>!a.includes(i.id)||(Object.assign(b.riskInfo,{[i.id]:void 0}),!1))),b.disabledList=b.disabledList.filter((i=>!a.includes(i)))})).catch((()=>{}))},L=(i,e)=>{var a,l;const t=((null==(l=null==(a=b.riskInfo)?void 0:a[e])?void 0:l.liabilityVOList)||[]).find((e=>e.liabilityCode===i.liabilityCode));return t?t.liabilityAttributeValue?t.liabilityAttributeValue:1!==i.optionalFlag?"0":"-1":""};return n((()=>b.currentRiskList),(i=>{const a=[b.mainRiskData,...i];let l=[],t=[];const o=[];a.forEach(((i,e)=>{var a,r,n;const s=(null==(a=null==i?void 0:i.riskCalcMethodInfoVO)?void 0:a.riskFactorRelationList)||[];l=l.concat(s.filter((i=>"insured"===i.factorObject)).map((i=>i.factorCode))),t=t.concat(s.filter((i=>"holder"===i.factorObject)).map((i=>i.factorCode))),o.push(null==(r=null==i?void 0:i.riskInsureLimitVO)?void 0:r.minHolderAge,null==(n=null==i?void 0:i.riskInsureLimitVO)?void 0:n.maxHolderAge)})),(i||[]).forEach((i=>{var a,l;const t={riskType:i.riskType,riskId:i.id,riskCode:i.riskCode,riskName:i.riskName,mainRiskCode:1!==i.riskType?null==(a=b.mainRiskData)?void 0:a.riskCode:void 0,mainRiskId:1!==i.riskType?null==(l=b.mainRiskData)?void 0:l.id:void 0,riskCategory:i.riskCategory,exemptFlag:e.originData.exemptFlag,exemptType:e.originData.exemptType,liabilityVOList:(i.riskLiabilityInfoVOList||[]).map((e=>({...e,liabilityAttributeCode:e.liabilityAttributeType,liabilityCode:e.liabilityCode,liabilityRateType:e.liabilityRateType,liabilityAttributeValue:L(e,i.id)})))};b.riskInfo[i.id]||Object.assign(b.riskInfo,{[i.id]:t})})),e.pickFactor({insuredFactorList:[...new Set(l)],holderFactorList:[...new Set(t)],ageRange:o})}),{deep:!0,immediate:!0}),n((()=>e.riskInfo),(i=>{b.mainRiskInfo=Object.values(i||{}).find((i=>1===(null==i?void 0:i.riskType)))||{}}),{deep:!0,immediate:!0}),n((()=>e.originData),(i=>{let e=[];const a=[];"proposal"===o.origin&&"add"!==o.type&&"repeatAdd"!==o.type?((i||[]).forEach((i=>{1===i.riskType&&(b.mainRiskData=i),e.push(i)})),e=e.filter((i=>o.showRiskList.includes(i.id)))):(i||[]).forEach((i=>{1===i.riskType?(b.mainRiskData=i,e.push(i)):2===i.collocationType?e.push(i):a.push(i)})),b.riderRiskList=a,b.currentRiskList=e}),{deep:!0,immediate:!0}),(e,a)=>{var l,t,n;const L=U;return s(),d("div",Mi,[(s(!0),d(k,null,g(f(b).currentRiskList,((e,a)=>(s(),p(Pi,{key:e.id,"form-info":f(b).riskInfo[e.id],index:a,enums:i.enums,"main-risk-data":f(b).mainRiskData,"main-risk-info":f(b).mainRiskInfo,"origin-data":e,"remove-risk":h,"remove-risk-list":f(b).checkedList},null,8,["form-info","index","enums","main-risk-data","main-risk-info","origin-data","remove-risk-list"])))),128)),(null==(l=f(b).riderRiskList)?void 0:l.length)-(null==(t=f(b).checkedList)?void 0:t.length)&&"proposal"!==f(o).origin?(s(),d("div",Ni,[v("span",qi,y(`共有${f(b).riderRiskList.length-f(b).checkedList.length}款附加险可以添加`),1),u(L,{activated:"",class:"btn-rider-risk",onClick:a[0]||(a[0]=i=>f(V)(!0))},{default:m((()=>[Ui,P(" 附加险")])),_:1})])):c("",!0),f(r)?(s(),p(wi,{key:1,modelValue:f(b).checkedList,"onUpdate:modelValue":a[1]||(a[1]=i=>f(b).checkedList=i),show:f(r),disabled:f(b).disabledList,"risk-list":f(b).riderRiskList,"collocation-list":(null==(n=f(b).mainRiskData)?void 0:n.collocationVOList)||[],onFinished:I,onClose:a[2]||(a[2]=i=>f(V)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):c("",!0)])}}}),[["__scopeId","data-v-fb5e5424"]]);const Ei={key:0,class:"part-card"},Si={key:1,class:"part-card"},$i={class:"risk-content"},Bi={key:0,class:"risk"},Ki={key:1,class:"plan-risk"},Yi={class:"footer-bar van-safe-area-bottom"},Hi={class:"trial-result"},Ji={class:"result-num"},Gi={class:"trial-operate"};var Wi=i(e({__name:"trialPreview",setup(i){j();const e=E(),{agentCode:l="test",agencyCode:o="",tenantId:V=9991000007,insurerCode:I="99",productCode:h="MMBBSF",templateId:L,proposalId:D,saleChannelId:C}=e.query,R=a(!0),_=a({personVO:{occupationCodeList:[]}}),x=a({insuredCode:"",personVO:{occupationCodeList:[]}}),F=a({}),A=a({}),w=a({}),M=a(null),N=a({}),q=a({}),U=t({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[],productInfo:{}});S("premium",N.value);const X=()=>{const i=JSON.parse(JSON.stringify(F.value[U.currentPlan])),e=Object.values(i).find((i=>1===i.riskType)),a=Object.values(i).map((i=>{const a=i;return((i,e)=>{var a,l,t,o;const r=i;if("3"===r.chargePeriod){const i=(e.chargePeriod||"").split("_");if(i[1]-=1,1===r.exemptFlag){if("to"===i[0]){let e=0;1===r.exemptType?(null==(a=_.value.personVO)?void 0:a.birthday)&&(e=parseInt(""+(+new Date-new Date(null==(l=_.value.personVO)?void 0:l.birthday))/31536e6,10)):2===r.exemptType&&(null==(t=x.value.personVO)?void 0:t.birthday)&&(e=parseInt(""+(+new Date-new Date(null==(o=x.value.personVO)?void 0:o.birthday))/31536e6,10)),i[1]=i[1]-e}i[0]="year",r.coveragePeriod=i.join("_")}r.chargePeriod=i.join("_")}})(a,e),a.liabilityVOList=(a.liabilityVOList||[]).filter((i=>1===i.optionalFlag||i.liabilityAttributeValue&&"-1"!==i.liabilityAttributeValue)).map((i=>{const e=i;return"0"===e.liabilityAttributeValue&&(e.liabilityAttributeValue=""),e})),a})),l={holder:_.value,productCode:U.riskBaseInfo.productCode,insuredVOList:[{...x.value,productPlanVOList:[{planCode:U.currentPlan||"",insurerCode:U.riskBaseInfo.insurerCode,riskVOList:a}]}]};si({...l}).then((({code:i,data:e})=>{if("10000"===i){U.retrialTip=!1,U.trialResult=e,U.canTrial=!1;const i={},a=(e=[])=>{(e||[]).forEach((e=>{var l;i[e.riskCode]=e,(null==(l=e.riskPremiumDetailVOList)?void 0:l.length)&&a(e.riskPremiumDetailVOList)}))};a(e.riskPremiumDetailVOList),((i,e)=>{U.insuredRiskList=i.map((i=>{var a,l;return{initialAmount:null==(a=e[i.riskCode])?void 0:a.amount,amountUnit:1,annuityDrawFrequency:i.annuityDrawDate,annuityDrawType:i.annuityDrawType,paymentFrequency:i.paymentFrequency,paymentPeriod:i.chargePeriod.split("_")[1],paymentPeriodType:ti[i.chargePeriod.split("_")[0]],insurancePeriodType:oi["to_life"===i.coveragePeriod?"to_life":i.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+i.coveragePeriod.split("_")[1])?0:i.coveragePeriod.split("_")[1],riskCode:i.riskCode,riskType:i.riskType,riskName:i.riskName,extInfo:{riskId:i.riskId,copy:i.copy},initialPremium:null==(l=e[i.riskCode])?void 0:l.premium,liabilityDetails:i.liabilityVOList.map((i=>({liabilityCode:i.liabilityCode,liabilityName:i.liabilityName,refundMethod:i.liabilityAttributeValue}))),productId:U.riskBaseInfo.id}}))})(l.insuredVOList[0].productPlanVOList[0].riskVOList,i),Object.assign(N.value,i)}}))},z=()=>{var i,e,a,l,t;Promise.all([null==(e=null==(i=A.value)?void 0:i.validateForm)?void 0:e.call(i),null==(l=null==(a=w.value)?void 0:a.validateForm)?void 0:l.call(a),null==(t=M.value)?void 0:t.validate()]).then((()=>{X()}),(i=>{var e;(null==i?void 0:i.length)&&(null==(e=null==M?void 0:M.value)||e.scrollToField(i[0].name))}))},Q=()=>{ni({productCode:h,source:D?2:1}).then((({code:i,data:e})=>{var a,l;"10000"===i&&(q.value=e,U.riskBaseInfo=e.productBasicInfoVO,(e.productRelationPlanVOList.length?e.productRelationPlanVOList:e.productRiskVoList[0].riskDetailVOList||[]).forEach(((i,e)=>{0===e&&(U.currentPlan=i.planCode||"0"),D||Object.assign(F.value,{[i.planCode||e]:{}})})),U.riskData=(null==(a=e.productRiskVoList[0])?void 0:a.riskDetailVOList)||[],U.riskPlanData=e.productRelationPlanVOList||[],D&&(l=e.productBasicInfoVO.id,ui({id:D,tenantId:V}).then((({code:i,data:e})=>{var a;if("10000"===i){const{proposalInsuredProductList:i=[],...t}=(null==(a=e.proposalInsuredList)?void 0:a[0])||{};Object.assign(_.value.personVO,e.proposalHolder);const o=i.find((i=>i.productId===l));Object.assign(x.value.personVO,t,{occupationCodeList:(null==o?void 0:o.occupationCodeList)||[]});const r={};((null==o?void 0:o.proposalProductRiskList)||[]).forEach((i=>{r[i.riskId]=i})),Object.assign(F.value,{0:r})}}))))})).finally((()=>{}))},Z=i=>{U.holderFactor=i.holderFactorList,U.insuredFactor=i.insuredFactorList,U.ageRange=i.ageRange};return n([()=>F.value,()=>_.value,()=>x.value],(i=>{i&&!U.canTrial&&(U.canTrial=!0)}),{deep:!0}),$((()=>{})),r((()=>{Q(),K({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:i,data:e})=>{if("10000"===i){const i={};e.forEach((e=>{i[e.dictCode]=e.dictItemList})),U.enumList=i}}))})),(i,e)=>{const a=b,l=Y,t=B("ProTabButton"),o=H,r=J,n=W,V=mi,I=T,h=G,L=B("ProPageWrap");return s(),p(L,{class:"page-trial-wrapper"},{default:m((()=>{var i;return[P(" 试算因子渲染 参考short中表单渲染 -------- 投保人试算因子 "),f(U).holderFactor.length?(s(),d("div",Ei,[u(a,{title:"投保人"})])):c("",!0),P(" 投保人试算因子 "),f(U).insuredFactor.length?(s(),d("div",Si,[u(a,{title:"被保人"})])):c("",!0),P(" 保障方案 "),v("div",$i,[u(V,{modelValue:f(U).collapseName,"onUpdate:modelValue":e[1]||(e[1]=i=>f(U).collapseName=i)},{default:m((()=>[u(n,{name:"1"},{title:m((()=>[u(a,{title:"投保方案"})])),default:m((()=>[f(U).riskData.length&&f(F)[0]?(s(),d("div",Bi,[u(l,{ref_key:"riskFormRef",ref:M,"input-align":"right","error-message-align":"right"},{default:m((()=>[u(ji,{"risk-info":f(F)[0],enums:f(U).enumList,"origin-data":f(U).riskData,"pick-factor":Z},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):c("",!0),f(U).riskPlanData.length?(s(),d("div",Ki,[u(l,{ref_key:"riskFormRef",ref:M,"input-align":"right","error-message-align":"right"},{default:m((()=>[u(r,{active:f(U).currentPlan,"onUpdate:active":e[0]||(e[0]=i=>f(U).currentPlan=i)},{default:m((()=>[(s(!0),d(k,null,g(f(U).riskPlanData,(i=>(s(),p(o,{key:i.planCode,name:i.planCode,title:i.planName},{title:m((()=>[u(t,{title:i.planName,active:f(U).currentPlan===i.planCode},null,8,["title","active"])])),default:m((()=>{var e;return[i.planCode===f(U).currentPlan?(s(),p(ji,{key:0,"risk-info":f(F)[i.planCode],enums:f(U).enumList,"origin-data":null==(e=i.productRiskVoList)?void 0:e[0].riskDetailVOList,"pick-factor":Z},null,8,["risk-info","enums","origin-data"])):c("",!0)]})),_:2},1032,["name","title"])))),128))])),_:1},8,["active"])])),_:1},512)])):c("",!0)])),_:1})])),_:1},8,["modelValue"])]),v("div",Yi,[v("span",Hi,[P("总保费"),v("span",Ji,y((f(U).retrialTip?0:(null==(i=f(U).trialResult)?void 0:i.premium)||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})),1)]),v("div",Gi,[f(U).canTrial?(s(),p(I,{key:0,type:"primary",onClick:z},{default:m((()=>[P("立即投保")])),_:1})):c("",!0)])]),u(h,{show:f(R),"onUpdate:show":e[2]||(e[2]=i=>O(R)?R.value=i:null),title:"标题",style:{height:"100%"}},{default:m((()=>[f(q).productCode?(s(),p(di,{key:0,class:"content","origin-data":f(q)},null,8,["origin-data"])):c("",!0)])),_:1},8,["show"])]})),_:1})}}}),[["__scopeId","data-v-566ab64e"]]);export{Wi as default};
