import{G as i,d as e,b6 as a,r as l,a1 as t,L as o,b as r,c as n,i as s,E as d,k as u,f as m,e as c,a_ as p,aa as v,aS as f,A as y,o as k,R as g,w as V,h as b,g as I,U as h,V as L,bP as D,aM as O,aN as C,aO as P,bL as R,a2 as _,bA as x,j as F,bM as A,aU as T,bN as w,bO as j,B as M,bE as N,al as q,am as U,ac as E,D as $,bb as S,a as B,u as H,a$ as K,bz as Y,br as J,b9 as W,b1 as z,b2 as G,T as Q}from"./index-fdf9fbd9.js";import{A as X}from"./index-796013b7.js";import{C as Z}from"./index-95604c4a.js";import{S as ii}from"./index-f05baa4e.js";import{c as ei,d as ai,e as li,A as ti,f as oi,L as ri,g as ni,P as si,I as di}from"./trial-339d4f4a.js";import{i as ui,p as mi}from"./trial-86d96a2b.js";import{_ as ci}from"./index-07b79811.js";import{q as pi}from"./createProposal-31557edd.js";import{C as vi}from"./index-c0005c62.js";import"./pdfh5-008ca364.js";import"./infoCollection-3947dbc3.js";import"./cloneDeep-6abacc69.js";import"./keysIn-131bbce9.js";import"./isObjectLike-a9798079.js";import"./_getTag-d5b47d26.js";import"./debounce-eed12388.js";import"./merge-e7788e50.js";import"./index-e1df1afa.js";import"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-74a0e54e.js";import"./phoneVerify-1c5d373b.js";/* empty css              */import"./index-ec9b49a8.js";import"./useDicData-98d08394.js";import"./bankCard-7705ac24.js";const fi={class:"risk-responsibility"},yi={class:"title"},ki={class:"content"};var gi=i(e({__name:"index",props:{modelValue:Boolean,title:{type:String,default:""},minHeight:{type:[Number,String],default:80},maxHeight:{type:[Number,String],default:200}},emits:["update:modelValue"],setup(i,{emit:e}){const f=i;a();const y=l();t((()=>{y.value=f.modelValue}));const k=o((()=>y.value?`${f.maxHeight}px`:`${f.minHeight}px`)),g=()=>{y.value=!y.value,e("update:modelValue",y.value)};return(e,a)=>{const l=v;return r(),n("div",fi,[s("div",yi,d(i.title),1),s("div",{class:"responsibility-content",style:p({height:m(k)})},[s("div",ki,[u(e.$slots,"default",{},void 0,!0)]),s("div",{class:"show-button",onClick:g},[s("span",null,d(m(y)?"收起":"展开"),1),c(l,{style:{width:"20px",height:"20px"},name:m(y)?"arrow-up":"arrow-down"},null,8,["name"])])],4)])}}}),[["__scopeId","data-v-27faf794"]]);const Vi={class:"com-risk-card-wrapper part-card"},bi={class:"custom-field"},Ii={class:"field-tip"},hi={class:"custom-field"},Li={class:"field-tip"},Di={class:"custom-field"},Oi={class:"field-tip"},Ci={class:"pro-radio-wrap"},Pi={class:"pro-radio-wrap"},Ri={class:"pro-radio-wrap"},_i={class:"pro-radio-wrap"},xi={class:"pro-radio-wrap"},Fi={key:0},Ai={key:1,class:"pro-radio-wrap"},Ti={key:9,class:"liab-desc"};var wi=i(e({__name:"index",props:{originData:{default:()=>({})},formInfo:{default:()=>({})},mainRiskData:{default:()=>({})},mainRiskInfo:{default:()=>({})},index:{default:0},removeRisk:{type:Function,default:()=>{}},removeRiskList:{default:()=>[]},enums:{default:()=>({})}},setup(i){const e=i,a=l({}),t=f("premium")||{};a.value=f("enumList")||{};const u=l({chargePeriod:{disabled:!1,prevent:!1},coveragePeriod:{disabled:!1,prevent:!1},paymentFrequency:{disabled:!1,prevent:!1}}),p=y({formInfo:e.formInfo}),R=i=>"boolean"!=typeof i&&!i||(!(!Array.isArray(i)||i.length)||"[object Object]"==={}.toString.call(i)&&Object.keys(i).length),_=(i,e,a={})=>{let l=e;return Array.isArray(e)||(l=[`${l}`]),(i||[]).filter((i=>l.includes(`${i.value}`)||l.includes(i.value)))},x=o((()=>{var i,a,l,t,o,r,n,s;return 1===(null==(i=e.originData)?void 0:i.riskType)?_(e.enums.RISK_INSURANCE_PERIOD,(null==(a=e.originData.riskInsureLimitVO)?void 0:a.insurancePeriodValueList)||[]):2===(null==(l=e.originData)?void 0:l.periodType)?_([{value:"year_1",name:"1年"}],["year_1"]):1===(null==(t=e.originData)?void 0:t.exemptFlag)?_(ei,[`${null==(r=null==(o=null==e?void 0:e.originData)?void 0:o.riskInsureLimitVO)?void 0:r.insurancePeriodRule}`]):_(null==(n=e.enums)?void 0:n.RISK_INSURANCE_PERIOD,(null==(s=e.mainRiskData.riskInsureLimitVO)?void 0:s.insurancePeriodValueList)||[])})),F=o((()=>{var i,a,l,t,o,r,n,s;return 1===(null==(i=e.originData)?void 0:i.riskType)?_(null==(a=null==e?void 0:e.enums)?void 0:a.RISK_PAYMENT_PERIOD,(null==(l=e.originData.riskInsureLimitVO)?void 0:l.paymentPeriodValueList)||[]):1===(null==(t=e.originData)?void 0:t.exemptFlag)?_(ai,[`${null==(r=null==(o=null==e?void 0:e.originData)?void 0:o.riskInsureLimitVO)?void 0:r.paymentPeriodRule}`]):2===(null==(n=e.originData)?void 0:n.periodType)?_([{value:"year_1",name:"1年交"}],["year_1"]):_(e.enums.RISK_PAYMENT_PERIOD,(null==(s=e.mainRiskData.riskInsureLimitVO)?void 0:s.paymentPeriodValueList)||[])})),A=o((()=>{var i,a,l,t,o;return 1===(null==(i=e.originData)?void 0:i.riskType)?_(li,(null==(a=e.originData.riskInsureLimitVO)?void 0:a.paymentFrequencyList)||[]):1===(null==(l=e.originData.riskInsureLimitVO)?void 0:l.paymentTypeRule)?_(li,(null==(t=e.mainRiskData.riskInsureLimitVO)?void 0:t.paymentFrequencyList)||[]):_(li,(null==(o=e.mainRiskData.riskInsureLimitVO)?void 0:o.paymentFrequencyList)||[])})),T=o((()=>{var i,a;let l=0,t=0;return((null==(a=null==(i=e.originData)?void 0:i.riskCalcMethodInfoVO)?void 0:a.paymentMethodLimitList)||[]).forEach(((i,e)=>{0===e&&(l=i.minAmount,t=i.maxAmount),l>i.minAmount&&(l=i.minAmount),t<i.maxAmount&&(t=i.maxAmount)})),p.formInfo.amount=p.formInfo.amount||l,{min:l,max:t||1/0}})),w=o((()=>{var i,a;let l=0,t=0;return((null==(a=null==(i=e.originData)?void 0:i.riskCalcMethodInfoVO)?void 0:a.paymentMethodLimitList)||[]).forEach(((i,e)=>{0===e&&(l=i.minPremium,t=i.maxPremium),l>i.minPremium&&(l=i.minPremium),t<i.maxPremium&&(t=i.maxPremium)})),p.formInfo.premium=p.formInfo.premium||l,{min:l,max:t||1/0}})),j=o((()=>{var i,a,l,t;const o=(null==(a=null==(i=e.originData)?void 0:i.riskCalcMethodInfoVO)?void 0:a.minCopy)||1,r=null==(t=null==(l=e.originData)?void 0:l.riskCalcMethodInfoVO)?void 0:t.maxCopy;return p.formInfo.copy=`${p.formInfo.copy||o||1}`,{min:o,max:r}})),M=(i,a,l)=>{var t,o;const r=(null==(o=null==(t=e.originData)?void 0:t.riskCalcMethodInfoVO)?void 0:o.increaseDecreaseNum)||1;if("sumInsured"===l){if(T.value.max&&+i>T.value.max)return`金额最大${T.value.max}元`;if(+i<T.value.min)return`金额最小${T.value.min}元`}else{if(w.value.max&&+i>w.value.max)return`金额最大${w.value.max}元`;if(+i<w.value.min)return`金额最小${w.value.min}元`}return+i%r==0?"":`金额必须是${r}的倍数`},N=i=>{var e;const a=((null==(e=p.formInfo)?void 0:e.liabilityVOList)||[]).find((e=>e.liabilityCode===i.liabilityCode));return a?a.liabilityAttributeValue?a.liabilityAttributeValue:1!==i.optionalFlag?"0":"-1":""};return k((()=>{var i,a,l,t;const o={riskType:e.originData.riskType,riskId:e.originData.id,riskName:e.originData.riskName,riskCode:e.originData.riskCode,amount:p.formInfo.amount,mainRiskCode:1!==e.originData.riskType?null==(i=e.mainRiskData)?void 0:i.riskCode:void 0,mainRiskId:1!==e.originData.riskType?null==(a=e.mainRiskData)?void 0:a.id:void 0,exemptFlag:e.originData.exemptFlag,exemptType:e.originData.exemptType,riskCategory:e.originData.riskCategory,liabilityVOList:(e.originData.riskLiabilityInfoVOList||[]).map((i=>({...i,liabilityAttributeCode:i.liabilityAttributeType,liabilityCode:i.liabilityCode,liabilityRateType:i.liabilityRateType,liabilityAttributeValue:N(i)})))};[1].includes((null==(l=e.originData.riskCalcMethodInfoVO)?void 0:l.saleMethod)||0)&&1!==(null==(t=e.originData)?void 0:t.exemptFlag)||!e.originData.riskCalcMethodInfoVO.fixedAmount||(o.amount=e.originData.riskCalcMethodInfoVO.fixedAmount),Object.assign(p.formInfo,o)})),g((()=>{var i;return null==(i=p.formInfo)?void 0:i.paymentFrequency}),((i=0)=>{var a,l,t;[3].includes((null==(a=e.originData.riskCalcMethodInfoVO)?void 0:a.saleMethod)||0)&&((null==(t=null==(l=e.originData)?void 0:l.riskCalcMethodInfoVO)?void 0:t.paymentMethodLimitList)||[]).forEach((e=>{+e.paymentFrequency==+i&&Object.assign(p.formInfo,{amount:e.perCopyAmount,premium:e.perCopyPremium})})),1==+i&&"single"!==p.formInfo.chargePeriod&&(p.formInfo.chargePeriod="single")})),g((()=>{var i;return null==(i=p.formInfo)?void 0:i.copy}),(i=>{var a,l;4===(null==(a=e.originData.riskCalcMethodInfoVO)?void 0:a.saleMethod)&&(p.formInfo.amount=null==(l=e.originData.riskCalcMethodInfoVO)?void 0:l.fixedAmount)})),g((()=>{var i;return null==(i=p.formInfo)?void 0:i.chargePeriod}),(i=>{"single"===i&&1!=+(p.formInfo.paymentFrequency||0)&&(p.formInfo.paymentFrequency=1)})),g((()=>null==e?void 0:e.mainRiskInfo),(i=>{var a,l,t,o,r,n;i&&2===e.originData.riskType&&(1===(null==(l=null==(a=e.originData)?void 0:a.riskInsureLimitVO)?void 0:l.insurancePeriodRule)&&(i.coveragePeriod?u.value.coveragePeriod.disabled=!0:u.value.coveragePeriod.prevent=!0,p.formInfo.coveragePeriod=i.coveragePeriod||""),1===(null==(o=null==(t=e.originData)?void 0:t.riskInsureLimitVO)?void 0:o.paymentPeriodRule)&&(i.chargePeriod?u.value.chargePeriod.disabled=!0:u.value.chargePeriod.prevent=!0,p.formInfo.chargePeriod=i.chargePeriod||""),1===(null==(n=null==(r=e.originData)?void 0:r.riskInsureLimitVO)?void 0:n.paymentTypeRule)&&(i.paymentFrequency?u.value.paymentFrequency.disabled=!0:u.value.paymentFrequency.prevent=!0,p.formInfo.paymentFrequency=i.paymentFrequency||0))}),{immediate:!0,deep:!0}),(e,a)=>{var l,o,f,y,k,g,N,q,U,E,$,S,B,H,K,Y,J,W,z,G,Q,X,Z,ei,ai,li,si,di,ui,mi;const ci=v,pi=D,vi=ii,fi=O,yi=C,ki=P;return r(),n("div",Vi,[c(pi,{"risk-type":i.originData.riskType,title:i.originData.riskName},{default:V((()=>[i.removeRiskList.includes(i.originData.id)?(r(),n("div",{key:0,class:"delete-risk",onClick:a[0]||(a[0]=e=>i.removeRisk(i.originData.id))},[c(ci,{name:"img-lajitong",color:"#0d6efe"})])):b("",!0)])),_:1},8,["risk-type","title"]),1===(null==(l=i.originData.riskCalcMethodInfoVO)?void 0:l.saleMethod)&&2===i.originData.exemptFlag?(r(),I(fi,{key:0,modelValue:m(p).formInfo.amount,"onUpdate:modelValue":a[2]||(a[2]=i=>m(p).formInfo.amount=i),label:"保额",name:"amount",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...i)=>M(...i,"sumInsured")}]},{input:V((()=>{var e,l;return[s("div",bi,[c(vi,{modelValue:m(p).formInfo.amount,"onUpdate:modelValue":a[1]||(a[1]=i=>m(p).formInfo.amount=i),"input-width":"64px",min:m(T).min,step:(null==(e=i.originData.riskCalcMethodInfoVO)?void 0:e.increaseDecreaseNum)||1,max:m(T).max},null,8,["modelValue","min","step","max"]),s("span",Ii,d(`金额最低${m(T).min}元，为${(null==(l=i.originData.riskCalcMethodInfoVO)?void 0:l.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):b("",!0),2===(null==(f=null==(o=i.originData)?void 0:o.riskCalcMethodInfoVO)?void 0:f.saleMethod)?(r(),I(fi,{key:1,modelValue:m(p).formInfo.premium,"onUpdate:modelValue":a[4]||(a[4]=i=>m(p).formInfo.premium=i),label:"保费",name:"premium",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...i)=>M(...i,"premium")}]},{input:V((()=>{var e,l,t,o;return[s("div",hi,[c(vi,{modelValue:m(p).formInfo.premium,"onUpdate:modelValue":a[3]||(a[3]=i=>m(p).formInfo.premium=i),step:(null==(l=null==(e=i.originData)?void 0:e.riskCalcMethodInfoVO)?void 0:l.increaseDecreaseNum)||1,min:m(w).min,"input-width":"64px",max:m(w).max},null,8,["modelValue","step","min","max"]),s("span",Li,d(`金额最低${m(w).min}元，为${(null==(o=null==(t=i.originData)?void 0:t.riskCalcMethodInfoVO)?void 0:o.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):b("",!0),3===(null==(k=null==(y=i.originData)?void 0:y.riskCalcMethodInfoVO)?void 0:k.saleMethod)||4===(null==(N=null==(g=i.originData)?void 0:g.riskCalcMethodInfoVO)?void 0:N.saleMethod)&&((null==(U=null==(q=i.originData)?void 0:q.riskCalcMethodInfoVO)?void 0:U.minCopy)||(null==($=null==(E=i.originData)?void 0:E.riskCalcMethodInfoVO)?void 0:$.maxCopy))?(r(),I(fi,{key:2,modelValue:m(p).formInfo.copy,"onUpdate:modelValue":a[6]||(a[6]=i=>m(p).formInfo.copy=i),label:"投保份数",name:"copy",rules:[{required:!0,message:"请填写"}]},{input:V((()=>[s("div",Di,[c(vi,{modelValue:m(p).formInfo.copy,"onUpdate:modelValue":a[5]||(a[5]=i=>m(p).formInfo.copy=i),step:1,min:m(j).min,max:m(j).max},null,8,["modelValue","min","max"]),s("span",Oi,d(`${m(j).min}份起购，最多购买${m(j).max}份`),1)])])),_:1},8,["modelValue"])):b("",!0),[1].includes((null==(S=i.originData.riskCalcMethodInfoVO)?void 0:S.saleMethod)||0)&&1!==(null==(B=i.originData)?void 0:B.exemptFlag)||!i.originData.riskCalcMethodInfoVO.fixedAmount&&!(null==(K=m(t))?void 0:K[null==(H=i.originData)?void 0:H.riskCode])?b("",!0):(r(),I(fi,{key:3,label:"保额"},{input:V((()=>{var e,a,l,o;return[s("div",null,d((null==(e=i.originData.riskCalcMethodInfoVO)?void 0:e.fixedAmount)||(null==(o=null==(l=m(t))?void 0:l[null==(a=i.originData)?void 0:a.riskCode])?void 0:o.amount)),1)]})),_:1})),R(null==(J=null==(Y=i.originData)?void 0:Y.riskInsureLimitVO)?void 0:J.insurancePeriodValueList)&&R(null==(z=null==(W=i.originData)?void 0:W.riskInsureLimitVO)?void 0:z.insurancePeriodRule)?b("",!0):(r(),I(ki,{key:4,modelValue:m(p).formInfo.coveragePeriod,"onUpdate:modelValue":a[8]||(a[8]=i=>m(p).formInfo.coveragePeriod=i),label:"保障期间",name:"coveragePeriod",rules:[{required:!0,message:"请选择保障期间"}]},{input:V((()=>[s("div",Ci,[c(yi,{modelValue:m(p).formInfo.coveragePeriod,"onUpdate:modelValue":a[7]||(a[7]=i=>m(p).formInfo.coveragePeriod=i),disabled:m(u).coveragePeriod.disabled,prevent:m(u).coveragePeriod.prevent?"请先选择主险保障期间":"",options:m(x),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),R(null==(Q=null==(G=i.originData)?void 0:G.riskInsureLimitVO)?void 0:Q.paymentPeriodValueList)&&R(null==(Z=null==(X=i.originData)?void 0:X.riskInsureLimitVO)?void 0:Z.paymentPeriodRule)?b("",!0):(r(),I(ki,{key:5,modelValue:m(p).formInfo.chargePeriod,"onUpdate:modelValue":a[10]||(a[10]=i=>m(p).formInfo.chargePeriod=i),label:"交费期间",name:"chargePeriod",rules:[{required:!0,message:"请选择交费期间"}]},{input:V((()=>[s("div",Pi,[c(yi,{modelValue:m(p).formInfo.chargePeriod,"onUpdate:modelValue":a[9]||(a[9]=i=>m(p).formInfo.chargePeriod=i),disabled:m(u).chargePeriod.disabled,prevent:m(u).chargePeriod.prevent?"请先选择主险交费期间":"",options:m(F),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),R(null==(ei=i.originData.riskInsureLimitVO)?void 0:ei.paymentFrequencyList)&&R(null==(ai=i.originData.riskInsureLimitVO)?void 0:ai.paymentPeriodRule)?b("",!0):(r(),I(ki,{key:6,modelValue:m(p).formInfo.paymentFrequency,"onUpdate:modelValue":a[12]||(a[12]=i=>m(p).formInfo.paymentFrequency=i),label:"交费方式",name:"paymentFrequency",rules:[{required:!0,message:"请选择交费方式"}]},{input:V((()=>[s("div",Ri,[c(yi,{modelValue:m(p).formInfo.paymentFrequency,"onUpdate:modelValue":a[11]||(a[11]=i=>m(p).formInfo.paymentFrequency=i),disabled:m(u).paymentFrequency.disabled,prevent:m(u).paymentFrequency.prevent?"请先选择主险交费方式":"",options:m(A)},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),R(null==(si=null==(li=i.originData)?void 0:li.riskInsureLimitVO)?void 0:si.annuityDrawValueList)?b("",!0):(r(),I(ki,{key:7,modelValue:m(p).formInfo.annuityDrawDate,"onUpdate:modelValue":a[14]||(a[14]=i=>m(p).formInfo.annuityDrawDate=i),label:"领取时间",name:"annuityDrawDate"},{input:V((()=>{var e;return[s("div",_i,[c(yi,{modelValue:m(p).formInfo.annuityDrawDate,"onUpdate:modelValue":a[13]||(a[13]=i=>m(p).formInfo.annuityDrawDate=i),options:_(m(ti),(null==(e=i.originData.riskInsureLimitVO)?void 0:e.annuityDrawValueList)||[])},null,8,["modelValue","options"])])]})),_:1},8,["modelValue"])),R(null==(ui=null==(di=i.originData)?void 0:di.riskInsureLimitVO)?void 0:ui.annuityDrawFrequencyList)?b("",!0):(r(),I(ki,{key:8,modelValue:m(p).formInfo.annuityDrawFrequency,"onUpdate:modelValue":a[16]||(a[16]=i=>m(p).formInfo.annuityDrawFrequency=i),label:"领取方式",name:"annuityDrawFrequency"},{input:V((()=>{var e;return[s("div",xi,[c(yi,{modelValue:m(p).formInfo.annuityDrawFrequency,"onUpdate:modelValue":a[15]||(a[15]=i=>m(p).formInfo.annuityDrawFrequency=i),options:_(m(oi),(null==(e=i.originData.riskInsureLimitVO)?void 0:e.annuityDrawFrequencyList)||[])},null,8,["modelValue","options"])])]})),_:1},8,["modelValue"])),(r(!0),n(h,null,L(i.originData.riskLiabilityInfoVOList||[],((e,a)=>(r(),n(h,{key:a},[1!==e.optionalFlag||R(e.liabilityAttributeValueList)?b("",!0):(r(),I(fi,{key:0,modelValue:m(p).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":i=>m(p).formInfo.liabilityVOList[a].liabilityAttributeValue=i,label:e.liabilityName,name:"liabilityAttributeValue",rules:[{required:e.liabilityAttributeValue,message:`请选择${e.liabilityName}`}]},{input:V((()=>{var l,t;return[s("div",null,[R(e.liabilityAttributeValueList)?(r(),n("span",Fi,"50万")):(r(),n("div",Ai,[c(yi,{modelValue:m(p).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":i=>m(p).formInfo.liabilityVOList[a].liabilityAttributeValue=i,options:_(m(ri),null==(t=null==(l=i.originData.riskLiabilityInfoVOList)?void 0:l[a])?void 0:t.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"])]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])),1!==e.optionalFlag?(r(),I(fi,{key:1,modelValue:m(p).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":i=>m(p).formInfo.liabilityVOList[a].liabilityAttributeValue=i,label:e.liabilityName,name:"liabilityAttributeValue"},{input:V((()=>{var l,t;return[s("div",null,[R(e.liabilityAttributeValueList)?(r(),I(yi,{key:0,modelValue:m(p).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":i=>m(p).formInfo.liabilityVOList[a].liabilityAttributeValue=i,options:m(ni)},null,8,["modelValue","onUpdate:modelValue","options"])):(r(),I(yi,{key:1,modelValue:m(p).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":i=>m(p).formInfo.liabilityVOList[a].liabilityAttributeValue=i,options:_(m(ri),null==(t=null==(l=i.originData.riskLiabilityInfoVOList)?void 0:l[a])?void 0:t.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label"])):b("",!0)],64)))),128)),(null==(mi=i.originData)?void 0:mi.relationDesc)?(r(),n("div",Ti,[c(gi,{title:"责任投保说明"},{default:V((()=>[s("div",null,d(i.originData.relationDesc),1)])),_:1})])):b("",!0)])}}}),[["__scopeId","data-v-cd80f4ac"]]);const ji={class:"com-risk-list-wrapper"},Mi=(i=>(q("data-v-10dda951"),i=i(),U(),i))((()=>s("div",{class:"popup-title"},"选择附加险",-1))),Ni={class:"risk-list"},qi={class:"cell-title"},Ui={class:"title"},Ei={class:"footer-button"};var $i=i(e({__name:"index",props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(i,{emit:e}){const a=i,t=l([]),o=l([]),u=l([...a.disabled]),p=y({show:a.show,currentChecked:[...a.modelValue]}),v=i=>{var e,l,o;if(u.value.includes(i))return;((i,e)=>{if(!a.collocationList.length)return e?void(p.currentChecked=[]):void p.currentChecked.push(i);let l=p.currentChecked,t=u.value;e?(a.collocationList.forEach((e=>{i===e.riskId&&(2===e.collocationType?l=l.filter((a=>a!==e.collocationRiskId||a!==i)):3===e.collocationType?(l=l.filter((e=>e!==i)),t=t.filter((i=>i!==e.collocationRiskId))):l=l.filter((e=>e!==i)))})),p.currentChecked=l,u.value=t):(a.collocationList.forEach((a=>{i===a.riskId&&(e||(2===a.collocationType?l.push(a.collocationRiskId):3===a.collocationType&&t.push(a.collocationRiskId),l.push(i)))})),p.currentChecked.push(...l),u.value=t)})(i,p.currentChecked.includes(i)),null==(o=null==(l=null==(e=null==t?void 0:t.value)?void 0:e[i])?void 0:l.toggle)||o.call(l)},f=()=>{e("close")},k=()=>{const i=a.riskList.filter((i=>p.currentChecked.includes(i.id)));e("update:modelValue",[...new Set(o.value)]),e("finished",i,u.value),e("close")};return R((()=>{t.value=[]})),g((()=>p.currentChecked),(i=>{o.value=i}),{deep:!0,immediate:!0}),g((()=>a.modelValue),(i=>{o.value=i||[],u.value.push(...i||[])}),{deep:!0,immediate:!0}),(e,a)=>{const l=A,y=T,g=w,b=j,D=M,O=N;return r(),n("div",ji,[c(O,{show:m(p).show,"onUpdate:show":a[1]||(a[1]=i=>m(p).show=i),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:f},{default:V((()=>[Mi,s("div",Ni,[c(b,{modelValue:m(o),"onUpdate:modelValue":a[0]||(a[0]=i=>_(o)?o.value=i:null)},{default:V((()=>[c(g,{inset:""},{default:V((()=>[(r(!0),n(h,null,L(i.riskList,(i=>(r(),I(y,{key:i.id,title:i.riskName,disabled:m(u).includes(i.id),onClick:e=>v(i.id)},{"right-icon":V((()=>[c(l,{ref_for:!0,ref:e=>m(t)[i.id]=e,shape:"square",disabled:m(u).includes(i.id),name:i.id,onClick:x((e=>v(i.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:V((()=>[s("div",qi,[s("div",Ui,d(i.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),s("div",Ei,[c(D,{type:"primary",disabled:!m(p).currentChecked.length,block:"",onClick:k},{default:V((()=>[F("确认")])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-10dda951"]]);const Si={class:"risk-list-wrapper"},Bi={key:0,class:"add-rider-risk"},Hi={class:"left-part"},Ki=(i=>(q("data-v-fb5e5424"),i=i(),U(),i))((()=>s("span",{class:"btn-plus"},"+",-1)));var Yi=i(e({__name:"index",props:{riskInfo:{default:()=>({})},originData:{default:()=>[]},pickFactor:{type:Function,default:()=>{}},enums:{default:()=>{}}},setup(i){const e=i,a=f("source")||{},[t,o]=E(!1);l(null),l(null);const u=y({mainRiskInfo:e.riskInfo,riskInfo:e.riskInfo,requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[],currentRiskList:[]}),p=(i,e)=>{u.currentRiskList=u.currentRiskList.concat(i),u.disabledList=e},v=i=>{$.confirm({message:"确定要删除附加险么？",confirmButtonText:"删除"}).then((()=>{var e;const a=[i];((null==(e=u.mainRiskData)?void 0:e.collocationVOList)||[]).forEach((e=>{i!==e.riskId||2!==e.collocationType&&3!==e.collocationType||a.push(e.collocationRiskId)})),u.checkedList=u.checkedList.filter((i=>!a.includes(i))),u.currentRiskList=u.currentRiskList.filter((i=>!a.includes(i.id)||(Object.assign(u.riskInfo,{[i.id]:void 0}),!1))),u.disabledList=u.disabledList.filter((i=>!a.includes(i)))})).catch((()=>{}))},k=(i,e)=>{var a,l;const t=((null==(l=null==(a=u.riskInfo)?void 0:a[e])?void 0:l.liabilityVOList)||[]).find((e=>e.liabilityCode===i.liabilityCode));return t?t.liabilityAttributeValue?t.liabilityAttributeValue:1!==i.optionalFlag?"0":"-1":""};return g((()=>u.currentRiskList),(i=>{const a=[u.mainRiskData,...i];let l=[],t=[];const o=[];a.forEach(((i,e)=>{var a,r,n;const s=(null==(a=null==i?void 0:i.riskCalcMethodInfoVO)?void 0:a.riskFactorRelationList)||[];l=l.concat(s.filter((i=>"insured"===i.factorObject)).map((i=>i.factorCode))),t=t.concat(s.filter((i=>"holder"===i.factorObject)).map((i=>i.factorCode))),o.push(null==(r=null==i?void 0:i.riskInsureLimitVO)?void 0:r.minHolderAge,null==(n=null==i?void 0:i.riskInsureLimitVO)?void 0:n.maxHolderAge)})),(i||[]).forEach((i=>{var a,l;const t={riskType:i.riskType,riskId:i.id,riskCode:i.riskCode,riskName:i.riskName,mainRiskCode:1!==i.riskType?null==(a=u.mainRiskData)?void 0:a.riskCode:void 0,mainRiskId:1!==i.riskType?null==(l=u.mainRiskData)?void 0:l.id:void 0,riskCategory:i.riskCategory,exemptFlag:e.originData.exemptFlag,exemptType:e.originData.exemptType,liabilityVOList:(i.riskLiabilityInfoVOList||[]).map((e=>({...e,liabilityAttributeCode:e.liabilityAttributeType,liabilityCode:e.liabilityCode,liabilityRateType:e.liabilityRateType,liabilityAttributeValue:k(e,i.id)})))};u.riskInfo[i.id]||Object.assign(u.riskInfo,{[i.id]:t})})),e.pickFactor({insuredFactorList:[...new Set(l)],holderFactorList:[...new Set(t)],ageRange:o})}),{deep:!0,immediate:!0}),g((()=>e.riskInfo),(i=>{u.mainRiskInfo=Object.values(i||{}).find((i=>1===(null==i?void 0:i.riskType)))||{}}),{deep:!0,immediate:!0}),g((()=>e.originData),(i=>{let e=[];const l=[];"proposal"===a.origin&&"add"!==a.type&&"repeatAdd"!==a.type?((i||[]).forEach((i=>{1===i.riskType&&(u.mainRiskData=i),e.push(i)})),e=e.filter((i=>a.showRiskList.includes(i.id)))):(i||[]).forEach((i=>{1===i.riskType?(u.mainRiskData=i,e.push(i)):2===i.collocationType?e.push(i):l.push(i)})),u.riderRiskList=l,u.currentRiskList=e}),{deep:!0,immediate:!0}),(e,l)=>{var f,y,k;const g=S;return r(),n("div",Si,[(r(!0),n(h,null,L(m(u).currentRiskList,((e,a)=>(r(),I(wi,{key:e.id,"form-info":m(u).riskInfo[e.id],index:a,enums:i.enums,"main-risk-data":m(u).mainRiskData,"main-risk-info":m(u).mainRiskInfo,"origin-data":e,"remove-risk":v,"remove-risk-list":m(u).checkedList},null,8,["form-info","index","enums","main-risk-data","main-risk-info","origin-data","remove-risk-list"])))),128)),(null==(f=m(u).riderRiskList)?void 0:f.length)-(null==(y=m(u).checkedList)?void 0:y.length)&&"proposal"!==m(a).origin?(r(),n("div",Bi,[s("span",Hi,d(`共有${m(u).riderRiskList.length-m(u).checkedList.length}款附加险可以添加`),1),c(g,{activated:"",class:"btn-rider-risk",onClick:l[0]||(l[0]=i=>m(o)(!0))},{default:V((()=>[Ki,F(" 附加险")])),_:1})])):b("",!0),m(t)?(r(),I($i,{key:1,modelValue:m(u).checkedList,"onUpdate:modelValue":l[1]||(l[1]=i=>m(u).checkedList=i),show:m(t),disabled:m(u).disabledList,"risk-list":m(u).riderRiskList,"collocation-list":(null==(k=m(u).mainRiskData)?void 0:k.collocationVOList)||[],onFinished:p,onClose:l[2]||(l[2]=i=>m(o)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):b("",!0)])}}}),[["__scopeId","data-v-fb5e5424"]]);const Ji={key:0,class:"part-card"},Wi={key:1,class:"part-card"},zi={class:"risk-content"},Gi={key:0,class:"risk"},Qi={key:1,class:"plan-risk"},Xi={class:"footer-bar van-safe-area-bottom"},Zi={class:"trial-result"},ie={class:"result-num"},ee={class:"trial-operate"};var ae=i(e({__name:"trialPreview",setup(i){B();const e=H(),{agentCode:a="test",agencyCode:o="",tenantId:u=9991000007,insurerCode:p="99",productCode:v="MMBBSF",templateId:f,proposalId:O,saleChannelId:C}=e.query,P=l(!0),R=l({personVO:{occupationCodeList:[]}}),x=l({insuredCode:"",personVO:{occupationCodeList:[]}}),A=l({}),T=l({}),w=l({}),j=l(null),N=l({}),q=l({}),U=y({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[],productInfo:{}});K("premium",N.value);const E=()=>{const i=JSON.parse(JSON.stringify(A.value[U.currentPlan])),e=Object.values(i).find((i=>1===i.riskType)),a=Object.values(i).map((i=>{const a=i;return((i,e)=>{var a,l,t,o;const r=i;if("3"===r.chargePeriod){const i=(e.chargePeriod||"").split("_");if(i[1]-=1,1===r.exemptFlag){if("to"===i[0]){let e=0;1===r.exemptType?(null==(a=R.value.personVO)?void 0:a.birthday)&&(e=parseInt(""+(+new Date-new Date(null==(l=R.value.personVO)?void 0:l.birthday))/31536e6,10)):2===r.exemptType&&(null==(t=x.value.personVO)?void 0:t.birthday)&&(e=parseInt(""+(+new Date-new Date(null==(o=x.value.personVO)?void 0:o.birthday))/31536e6,10)),i[1]=i[1]-e}i[0]="year",r.coveragePeriod=i.join("_")}r.chargePeriod=i.join("_")}})(a,e),a.liabilityVOList=(a.liabilityVOList||[]).filter((i=>1===i.optionalFlag||i.liabilityAttributeValue&&"-1"!==i.liabilityAttributeValue)).map((i=>{const e=i;return"0"===e.liabilityAttributeValue&&(e.liabilityAttributeValue=""),e})),a})),l={holder:R.value,productCode:U.riskBaseInfo.productCode,insuredVOList:[{...x.value,productPlanVOList:[{planCode:U.currentPlan||"",insurerCode:U.riskBaseInfo.insurerCode,riskVOList:a}]}]};mi({...l}).then((({code:i,data:e})=>{if("10000"===i){(null==e?void 0:e.errorInfo)&&Q(`${e.errorInfo}`),U.retrialTip=!1,U.trialResult=e,U.canTrial=!1;const i={},a=(e=[])=>{(e||[]).forEach((e=>{var l;i[e.riskCode]=e,(null==(l=e.riskPremiumDetailVOList)?void 0:l.length)&&a(e.riskPremiumDetailVOList)}))};a(e.riskPremiumDetailVOList),((i,e)=>{U.insuredRiskList=i.map((i=>{var a,l;return{initialAmount:null==(a=e[i.riskCode])?void 0:a.amount,amountUnit:1,annuityDrawFrequency:i.annuityDrawFrequency,paymentFrequency:i.paymentFrequency,paymentPeriod:i.chargePeriod.split("_")[1],paymentPeriodType:si[i.chargePeriod.split("_")[0]],insurancePeriodType:di["to_life"===i.coveragePeriod?"to_life":i.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+i.coveragePeriod.split("_")[1])?0:i.coveragePeriod.split("_")[1],riskCode:i.riskCode,riskType:i.riskType,riskName:i.riskName,extInfo:{riskId:i.riskId,copy:i.copy},initialPremium:null==(l=e[i.riskCode])?void 0:l.premium,liabilityDetails:i.liabilityVOList.map((i=>({liabilityCode:i.liabilityCode,liabilityName:i.liabilityName,refundMethod:i.liabilityAttributeValue}))),productId:U.riskBaseInfo.id}}))})(l.insuredVOList[0].productPlanVOList[0].riskVOList,i),Object.assign(N.value,i)}}))},$=()=>{var i,e,a,l,t;Promise.all([null==(e=null==(i=T.value)?void 0:i.validateForm)?void 0:e.call(i),null==(l=null==(a=w.value)?void 0:a.validateForm)?void 0:l.call(a),null==(t=j.value)?void 0:t.validate()]).then((()=>{E()}),(i=>{var e;(null==i?void 0:i.length)&&(null==(e=null==j?void 0:j.value)||e.scrollToField(i[0].name))}))},S=()=>{ui({productCode:v,source:O?2:1}).then((({code:i,data:e})=>{var a,l;"10000"===i&&(q.value=e,U.riskBaseInfo=e.productBasicInfoVO,(e.productRelationPlanVOList.length?e.productRelationPlanVOList:e.productRiskVoList[0].riskDetailVOList||[]).forEach(((i,e)=>{0===e&&(U.currentPlan=i.planCode||"0"),O||Object.assign(A.value,{[i.planCode||e]:{}})})),U.riskData=(null==(a=e.productRiskVoList[0])?void 0:a.riskDetailVOList)||[],U.riskPlanData=e.productRelationPlanVOList||[],O&&(l=e.productBasicInfoVO.id,pi({id:O,tenantId:u}).then((({code:i,data:e})=>{var a;if("10000"===i){const{proposalInsuredProductList:i=[],...t}=(null==(a=e.proposalInsuredList)?void 0:a[0])||{};Object.assign(R.value.personVO,e.proposalHolder);const o=i.find((i=>i.productId===l));Object.assign(x.value.personVO,t,{occupationCodeList:(null==o?void 0:o.occupationCodeList)||[]});const r={};((null==o?void 0:o.proposalProductRiskList)||[]).forEach((i=>{r[i.riskId]=i})),Object.assign(A.value,{0:r})}}))))})).finally((()=>{}))},ii=i=>{U.holderFactor=i.holderFactorList,U.insuredFactor=i.insuredFactorList,U.ageRange=i.ageRange};return g([()=>A.value,()=>R.value,()=>x.value],(i=>{i&&!U.canTrial&&(U.canTrial=!0)}),{deep:!0}),t((()=>{})),k((()=>{S(),J({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:i,data:e})=>{if("10000"===i){const i={};e.forEach((e=>{i[e.dictCode]=e.dictItemList})),U.enumList=i}}))})),(i,e)=>{const a=D,l=W,t=Y("ProTabButton"),o=z,u=G,p=Z,v=vi,f=M,y=X,k=Y("ProPageWrap");return r(),I(k,{class:"page-trial-wrapper"},{default:V((()=>{var i;return[F(" 试算因子渲染 参考short中表单渲染 -------- 投保人试算因子 "),m(U).holderFactor.length?(r(),n("div",Ji,[c(a,{title:"投保人"})])):b("",!0),F(" 投保人试算因子 "),m(U).insuredFactor.length?(r(),n("div",Wi,[c(a,{title:"被保人"})])):b("",!0),F(" 保障方案 "),s("div",zi,[c(v,{modelValue:m(U).collapseName,"onUpdate:modelValue":e[1]||(e[1]=i=>m(U).collapseName=i)},{default:V((()=>[c(p,{name:"1"},{title:V((()=>[c(a,{title:"投保方案"})])),default:V((()=>[m(U).riskData.length&&m(A)[0]?(r(),n("div",Gi,[c(l,{ref_key:"riskFormRef",ref:j,"input-align":"right","error-message-align":"right"},{default:V((()=>[c(Yi,{"risk-info":m(A)[0],enums:m(U).enumList,"origin-data":m(U).riskData,"pick-factor":ii},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):b("",!0),m(U).riskPlanData.length?(r(),n("div",Qi,[c(l,{ref_key:"riskFormRef",ref:j,"input-align":"right","error-message-align":"right"},{default:V((()=>[c(u,{active:m(U).currentPlan,"onUpdate:active":e[0]||(e[0]=i=>m(U).currentPlan=i)},{default:V((()=>[(r(!0),n(h,null,L(m(U).riskPlanData,(i=>(r(),I(o,{key:i.planCode,name:i.planCode,title:i.planName},{title:V((()=>[c(t,{title:i.planName,active:m(U).currentPlan===i.planCode},null,8,["title","active"])])),default:V((()=>{var e;return[i.planCode===m(U).currentPlan?(r(),I(Yi,{key:0,"risk-info":m(A)[i.planCode],enums:m(U).enumList,"origin-data":null==(e=i.productRiskVoList)?void 0:e[0].riskDetailVOList,"pick-factor":ii},null,8,["risk-info","enums","origin-data"])):b("",!0)]})),_:2},1032,["name","title"])))),128))])),_:1},8,["active"])])),_:1},512)])):b("",!0)])),_:1})])),_:1},8,["modelValue"])]),s("div",Xi,[s("span",Zi,[F("总保费"),s("span",ie,d((m(U).retrialTip?0:(null==(i=m(U).trialResult)?void 0:i.premium)||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})),1)]),s("div",ee,[m(U).canTrial?(r(),I(f,{key:0,type:"primary",onClick:$},{default:V((()=>[F("立即投保")])),_:1})):b("",!0)])]),c(y,{show:m(P),"onUpdate:show":e[2]||(e[2]=i=>_(P)?P.value=i:null),title:"标题",style:{height:"100%"}},{default:V((()=>[m(q).productCode?(r(),I(ci,{key:0,class:"content","origin-data":m(q)},null,8,["origin-data"])):b("",!0)])),_:1},8,["show"])]})),_:1})}}}),[["__scopeId","data-v-126a84e7"]]);export{ae as default};
