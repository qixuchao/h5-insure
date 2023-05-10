import{G as e,d as i,b0 as a,r as l,a1 as t,L as o,c as n,A as r,f as s,E as d,k as u,g as m,i as c,bz as p,aa as v,aS as f,z as y,o as k,R as g,w as V,h as b,e as I,U as h,V as L,bQ as D,aM as O,aN as C,aO as P,bL as R,a2 as _,bA as x,j as F,bM as A,aU as T,bN as w,bO as M,B as j,bE as N,al as q,am as U,ac as E,D as S,bc as $,a as B,u as H,b7 as K,b as Y,bZ as z,ba as J,aZ as W,a_ as Z,T as G}from"./index-7de11d64.js";import{A as Q}from"./index-743ff3fb.js";import{C as X}from"./index-7f5da39e.js";import{S as ee}from"./index-9ea92945.js";import{e as ie,f as ae,g as le,A as te,h as oe,L as ne,i as re,P as se,I as de}from"./trial-be618e88.js";import{i as ue,p as me}from"./trial-a6c16efb.js";import{I as ce}from"./index-9c398c52.js";import{q as pe}from"./createProposal-8ecc5a74.js";import{C as ve}from"./index-fb42f53f.js";import"./pdfh5-008ca364.js";import"./infoCollection-58a507e1.js";import"./cloneDeep-1de8e9b0.js";import"./_initCloneObject-0663309f.js";import"./isObjectLike-a9798079.js";import"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-3821d29d.js";import"./phoneVerify-62fce3ba.js";/* empty css              */import"./bankCard-0364c7ae.js";import"./index-43d2c566.js";import"./debounce-eed12388.js";import"./index-309b329b.js";const fe={class:"risk-responsibility"},ye={class:"title"},ke={class:"content"};var ge=e(i({__name:"index",props:{modelValue:Boolean,title:{type:String,default:""},minHeight:{type:[Number,String],default:80},maxHeight:{type:[Number,String],default:200}},emits:["update:modelValue"],setup(e,{emit:i}){const f=e;a();const y=l();t((()=>{y.value=f.modelValue}));const k=o((()=>y.value?`${f.maxHeight}px`:`${f.minHeight}px`)),g=()=>{y.value=!y.value,i("update:modelValue",y.value)};return(i,a)=>{const l=v;return n(),r("div",fe,[s("div",ye,d(e.title),1),s("div",{class:"responsibility-content",style:p({height:m(k)})},[s("div",ke,[u(i.$slots,"default",{},void 0,!0)]),s("div",{class:"show-button",onClick:g},[s("span",null,d(m(y)?"收起":"展开"),1),c(l,{style:{width:"20px",height:"20px"},name:m(y)?"arrow-up":"arrow-down"},null,8,["name"])])],4)])}}}),[["__scopeId","data-v-27faf794"]]);const Ve={class:"com-risk-card-wrapper part-card"},be={class:"custom-field"},Ie={class:"field-tip"},he={class:"custom-field"},Le={class:"field-tip"},De={class:"custom-field"},Oe={class:"field-tip"},Ce={class:"pro-radio-wrap"},Pe={class:"pro-radio-wrap"},Re={class:"pro-radio-wrap"},_e={class:"pro-radio-wrap"},xe={class:"pro-radio-wrap"},Fe={key:0},Ae={key:1,class:"pro-radio-wrap"},Te={key:9,class:"liab-desc"};var we=e(i({__name:"index",props:{originData:{default:()=>({})},formInfo:{default:()=>({})},mainRiskData:{default:()=>({})},mainRiskInfo:{default:()=>({})},index:{default:0},removeRisk:{type:Function,default:()=>{}},removeRiskList:{default:()=>[]},enums:{default:()=>({})}},setup(e){const i=e,a=l({}),t=f("premium")||{};a.value=f("enumList")||{};const u=l({chargePeriod:{disabled:!1,prevent:!1},coveragePeriod:{disabled:!1,prevent:!1},paymentFrequency:{disabled:!1,prevent:!1}}),p=y({formInfo:i.formInfo}),R=e=>"boolean"!=typeof e&&!e||(!(!Array.isArray(e)||e.length)||"[object Object]"==={}.toString.call(e)&&Object.keys(e).length),_=(e,i,a={})=>{let l=i;return Array.isArray(i)||(l=[`${l}`]),(e||[]).filter((e=>l.includes(`${e.value}`)||l.includes(e.value)))},x=o((()=>{var e,a,l,t,o,n,r,s;return 1===(null==(e=i.originData)?void 0:e.riskType)?_(i.enums.RISK_INSURANCE_PERIOD,(null==(a=i.originData.riskInsureLimitVO)?void 0:a.insurancePeriodValueList)||[]):2===(null==(l=i.originData)?void 0:l.periodType)?_([{value:"year_1",name:"1年"}],["year_1"]):1===(null==(t=i.originData)?void 0:t.exemptFlag)?_(ie,[`${null==(n=null==(o=null==i?void 0:i.originData)?void 0:o.riskInsureLimitVO)?void 0:n.insurancePeriodRule}`]):_(null==(r=i.enums)?void 0:r.RISK_INSURANCE_PERIOD,(null==(s=i.mainRiskData.riskInsureLimitVO)?void 0:s.insurancePeriodValueList)||[])})),F=o((()=>{var e,a,l,t,o,n,r,s;return 1===(null==(e=i.originData)?void 0:e.riskType)?_(null==(a=null==i?void 0:i.enums)?void 0:a.RISK_PAYMENT_PERIOD,(null==(l=i.originData.riskInsureLimitVO)?void 0:l.paymentPeriodValueList)||[]):1===(null==(t=i.originData)?void 0:t.exemptFlag)?_(ae,[`${null==(n=null==(o=null==i?void 0:i.originData)?void 0:o.riskInsureLimitVO)?void 0:n.paymentPeriodRule}`]):2===(null==(r=i.originData)?void 0:r.periodType)?_([{value:"year_1",name:"1年交"}],["year_1"]):_(i.enums.RISK_PAYMENT_PERIOD,(null==(s=i.mainRiskData.riskInsureLimitVO)?void 0:s.paymentPeriodValueList)||[])})),A=o((()=>{var e,a,l,t,o;return 1===(null==(e=i.originData)?void 0:e.riskType)?_(le,(null==(a=i.originData.riskInsureLimitVO)?void 0:a.paymentFrequencyList)||[]):1===(null==(l=i.originData.riskInsureLimitVO)?void 0:l.paymentTypeRule)?_(le,(null==(t=i.mainRiskData.riskInsureLimitVO)?void 0:t.paymentFrequencyList)||[]):_(le,(null==(o=i.mainRiskData.riskInsureLimitVO)?void 0:o.paymentFrequencyList)||[])})),T=o((()=>{var e,a;let l=0,t=0;return((null==(a=null==(e=i.originData)?void 0:e.riskCalcMethodInfoVO)?void 0:a.paymentMethodLimitList)||[]).forEach(((e,i)=>{0===i&&(l=e.minAmount,t=e.maxAmount),l>e.minAmount&&(l=e.minAmount),t<e.maxAmount&&(t=e.maxAmount)})),p.formInfo.amount=p.formInfo.amount||l,{min:l,max:t||1/0}})),w=o((()=>{var e,a;let l=0,t=0;return((null==(a=null==(e=i.originData)?void 0:e.riskCalcMethodInfoVO)?void 0:a.paymentMethodLimitList)||[]).forEach(((e,i)=>{0===i&&(l=e.minPremium,t=e.maxPremium),l>e.minPremium&&(l=e.minPremium),t<e.maxPremium&&(t=e.maxPremium)})),p.formInfo.premium=p.formInfo.premium||l,{min:l,max:t||1/0}})),M=o((()=>{var e,a,l,t;const o=(null==(a=null==(e=i.originData)?void 0:e.riskCalcMethodInfoVO)?void 0:a.minCopy)||1,n=null==(t=null==(l=i.originData)?void 0:l.riskCalcMethodInfoVO)?void 0:t.maxCopy;return p.formInfo.copy=`${p.formInfo.copy||o||1}`,{min:o,max:n}})),j=(e,a,l)=>{var t,o;const n=(null==(o=null==(t=i.originData)?void 0:t.riskCalcMethodInfoVO)?void 0:o.increaseDecreaseNum)||1;if("sumInsured"===l){if(T.value.max&&+e>T.value.max)return`金额最大${T.value.max}元`;if(+e<T.value.min)return`金额最小${T.value.min}元`}else{if(w.value.max&&+e>w.value.max)return`金额最大${w.value.max}元`;if(+e<w.value.min)return`金额最小${w.value.min}元`}return+e%n==0?"":`金额必须是${n}的倍数`},N=e=>{var i;const a=((null==(i=p.formInfo)?void 0:i.liabilityVOList)||[]).find((i=>i.liabilityCode===e.liabilityCode));return a?a.liabilityAttributeValue?a.liabilityAttributeValue:1!==e.optionalFlag?"0":"-1":""};return k((()=>{var e,a,l,t;const o={riskType:i.originData.riskType,riskId:i.originData.id,riskName:i.originData.riskName,riskCode:i.originData.riskCode,amount:p.formInfo.amount,mainRiskCode:1!==i.originData.riskType?null==(e=i.mainRiskData)?void 0:e.riskCode:void 0,mainRiskId:1!==i.originData.riskType?null==(a=i.mainRiskData)?void 0:a.id:void 0,exemptFlag:i.originData.exemptFlag,exemptType:i.originData.exemptType,riskCategory:i.originData.riskCategory,liabilityVOList:(i.originData.riskLiabilityInfoVOList||[]).map((e=>({...e,liabilityAttributeCode:e.liabilityAttributeType,liabilityCode:e.liabilityCode,liabilityRateType:e.liabilityRateType,liabilityAttributeValue:N(e)})))};[1].includes((null==(l=i.originData.riskCalcMethodInfoVO)?void 0:l.saleMethod)||0)&&1!==(null==(t=i.originData)?void 0:t.exemptFlag)||!i.originData.riskCalcMethodInfoVO.fixedAmount||(o.amount=i.originData.riskCalcMethodInfoVO.fixedAmount),Object.assign(p.formInfo,o)})),g((()=>{var e;return null==(e=p.formInfo)?void 0:e.paymentFrequency}),((e=0)=>{var a,l,t;[3].includes((null==(a=i.originData.riskCalcMethodInfoVO)?void 0:a.saleMethod)||0)&&((null==(t=null==(l=i.originData)?void 0:l.riskCalcMethodInfoVO)?void 0:t.paymentMethodLimitList)||[]).forEach((i=>{+i.paymentFrequency==+e&&Object.assign(p.formInfo,{amount:i.perCopyAmount,premium:i.perCopyPremium})})),1==+e&&"single"!==p.formInfo.chargePeriod&&(p.formInfo.chargePeriod="single")})),g((()=>{var e;return null==(e=p.formInfo)?void 0:e.copy}),(e=>{var a,l;4===(null==(a=i.originData.riskCalcMethodInfoVO)?void 0:a.saleMethod)&&(p.formInfo.amount=null==(l=i.originData.riskCalcMethodInfoVO)?void 0:l.fixedAmount)})),g((()=>{var e;return null==(e=p.formInfo)?void 0:e.chargePeriod}),(e=>{"single"===e&&1!=+(p.formInfo.paymentFrequency||0)&&(p.formInfo.paymentFrequency=1)})),g((()=>null==i?void 0:i.mainRiskInfo),(e=>{var a,l,t,o,n,r;e&&2===i.originData.riskType&&(1===(null==(l=null==(a=i.originData)?void 0:a.riskInsureLimitVO)?void 0:l.insurancePeriodRule)&&(e.coveragePeriod?u.value.coveragePeriod.disabled=!0:u.value.coveragePeriod.prevent=!0,p.formInfo.coveragePeriod=e.coveragePeriod||""),1===(null==(o=null==(t=i.originData)?void 0:t.riskInsureLimitVO)?void 0:o.paymentPeriodRule)&&(e.chargePeriod?u.value.chargePeriod.disabled=!0:u.value.chargePeriod.prevent=!0,p.formInfo.chargePeriod=e.chargePeriod||""),1===(null==(r=null==(n=i.originData)?void 0:n.riskInsureLimitVO)?void 0:r.paymentTypeRule)&&(e.paymentFrequency?u.value.paymentFrequency.disabled=!0:u.value.paymentFrequency.prevent=!0,p.formInfo.paymentFrequency=e.paymentFrequency||0))}),{immediate:!0,deep:!0}),(i,a)=>{var l,o,f,y,k,g,N,q,U,E,S,$,B,H,K,Y,z,J,W,Z,G,Q,X,ie,ae,le,se,de,ue,me;const ce=v,pe=D,ve=ee,fe=O,ye=C,ke=P;return n(),r("div",Ve,[c(pe,{"risk-type":e.originData.riskType,title:e.originData.riskName},{default:V((()=>[e.removeRiskList.includes(e.originData.id)?(n(),r("div",{key:0,class:"delete-risk",onClick:a[0]||(a[0]=i=>e.removeRisk(e.originData.id))},[c(ce,{name:"img-lajitong",color:"#0d6efe"})])):b("",!0)])),_:1},8,["risk-type","title"]),1===(null==(l=e.originData.riskCalcMethodInfoVO)?void 0:l.saleMethod)&&2===e.originData.exemptFlag?(n(),I(fe,{key:0,modelValue:m(p).formInfo.amount,"onUpdate:modelValue":a[2]||(a[2]=e=>m(p).formInfo.amount=e),label:"保额",name:"amount",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...e)=>j(...e,"sumInsured")}]},{input:V((()=>{var i,l;return[s("div",be,[c(ve,{modelValue:m(p).formInfo.amount,"onUpdate:modelValue":a[1]||(a[1]=e=>m(p).formInfo.amount=e),"input-width":"64px",min:m(T).min,step:(null==(i=e.originData.riskCalcMethodInfoVO)?void 0:i.increaseDecreaseNum)||1,max:m(T).max},null,8,["modelValue","min","step","max"]),s("span",Ie,d(`金额最低${m(T).min}元，为${(null==(l=e.originData.riskCalcMethodInfoVO)?void 0:l.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):b("",!0),2===(null==(f=null==(o=e.originData)?void 0:o.riskCalcMethodInfoVO)?void 0:f.saleMethod)?(n(),I(fe,{key:1,modelValue:m(p).formInfo.premium,"onUpdate:modelValue":a[4]||(a[4]=e=>m(p).formInfo.premium=e),label:"保费",name:"premium",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...e)=>j(...e,"premium")}]},{input:V((()=>{var i,l,t,o;return[s("div",he,[c(ve,{modelValue:m(p).formInfo.premium,"onUpdate:modelValue":a[3]||(a[3]=e=>m(p).formInfo.premium=e),step:(null==(l=null==(i=e.originData)?void 0:i.riskCalcMethodInfoVO)?void 0:l.increaseDecreaseNum)||1,min:m(w).min,"input-width":"64px",max:m(w).max},null,8,["modelValue","step","min","max"]),s("span",Le,d(`金额最低${m(w).min}元，为${(null==(o=null==(t=e.originData)?void 0:t.riskCalcMethodInfoVO)?void 0:o.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):b("",!0),3===(null==(k=null==(y=e.originData)?void 0:y.riskCalcMethodInfoVO)?void 0:k.saleMethod)||4===(null==(N=null==(g=e.originData)?void 0:g.riskCalcMethodInfoVO)?void 0:N.saleMethod)&&((null==(U=null==(q=e.originData)?void 0:q.riskCalcMethodInfoVO)?void 0:U.minCopy)||(null==(S=null==(E=e.originData)?void 0:E.riskCalcMethodInfoVO)?void 0:S.maxCopy))?(n(),I(fe,{key:2,modelValue:m(p).formInfo.copy,"onUpdate:modelValue":a[6]||(a[6]=e=>m(p).formInfo.copy=e),label:"投保份数",name:"copy",rules:[{required:!0,message:"请填写"}]},{input:V((()=>[s("div",De,[c(ve,{modelValue:m(p).formInfo.copy,"onUpdate:modelValue":a[5]||(a[5]=e=>m(p).formInfo.copy=e),step:1,min:m(M).min,max:m(M).max},null,8,["modelValue","min","max"]),s("span",Oe,d(`${m(M).min}份起购，最多购买${m(M).max}份`),1)])])),_:1},8,["modelValue"])):b("",!0),[1].includes((null==($=e.originData.riskCalcMethodInfoVO)?void 0:$.saleMethod)||0)&&1!==(null==(B=e.originData)?void 0:B.exemptFlag)||!e.originData.riskCalcMethodInfoVO.fixedAmount&&!(null==(K=m(t))?void 0:K[null==(H=e.originData)?void 0:H.riskCode])?b("",!0):(n(),I(fe,{key:3,label:"保额"},{input:V((()=>{var i,a,l,o;return[s("div",null,d((null==(i=e.originData.riskCalcMethodInfoVO)?void 0:i.fixedAmount)||(null==(o=null==(l=m(t))?void 0:l[null==(a=e.originData)?void 0:a.riskCode])?void 0:o.amount)),1)]})),_:1})),R(null==(z=null==(Y=e.originData)?void 0:Y.riskInsureLimitVO)?void 0:z.insurancePeriodValueList)&&R(null==(W=null==(J=e.originData)?void 0:J.riskInsureLimitVO)?void 0:W.insurancePeriodRule)?b("",!0):(n(),I(ke,{key:4,modelValue:m(p).formInfo.coveragePeriod,"onUpdate:modelValue":a[8]||(a[8]=e=>m(p).formInfo.coveragePeriod=e),label:"保障期间",name:"coveragePeriod",rules:[{required:!0,message:"请选择保障期间"}]},{input:V((()=>[s("div",Ce,[c(ye,{modelValue:m(p).formInfo.coveragePeriod,"onUpdate:modelValue":a[7]||(a[7]=e=>m(p).formInfo.coveragePeriod=e),disabled:m(u).coveragePeriod.disabled,prevent:m(u).coveragePeriod.prevent?"请先选择主险保障期间":"",options:m(x),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),R(null==(G=null==(Z=e.originData)?void 0:Z.riskInsureLimitVO)?void 0:G.paymentPeriodValueList)&&R(null==(X=null==(Q=e.originData)?void 0:Q.riskInsureLimitVO)?void 0:X.paymentPeriodRule)?b("",!0):(n(),I(ke,{key:5,modelValue:m(p).formInfo.chargePeriod,"onUpdate:modelValue":a[10]||(a[10]=e=>m(p).formInfo.chargePeriod=e),label:"交费期间",name:"chargePeriod",rules:[{required:!0,message:"请选择交费期间"}]},{input:V((()=>[s("div",Pe,[c(ye,{modelValue:m(p).formInfo.chargePeriod,"onUpdate:modelValue":a[9]||(a[9]=e=>m(p).formInfo.chargePeriod=e),disabled:m(u).chargePeriod.disabled,prevent:m(u).chargePeriod.prevent?"请先选择主险交费期间":"",options:m(F),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),R(null==(ie=e.originData.riskInsureLimitVO)?void 0:ie.paymentFrequencyList)&&R(null==(ae=e.originData.riskInsureLimitVO)?void 0:ae.paymentPeriodRule)?b("",!0):(n(),I(ke,{key:6,modelValue:m(p).formInfo.paymentFrequency,"onUpdate:modelValue":a[12]||(a[12]=e=>m(p).formInfo.paymentFrequency=e),label:"交费方式",name:"paymentFrequency",rules:[{required:!0,message:"请选择交费方式"}]},{input:V((()=>[s("div",Re,[c(ye,{modelValue:m(p).formInfo.paymentFrequency,"onUpdate:modelValue":a[11]||(a[11]=e=>m(p).formInfo.paymentFrequency=e),disabled:m(u).paymentFrequency.disabled,prevent:m(u).paymentFrequency.prevent?"请先选择主险交费方式":"",options:m(A)},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),R(null==(se=null==(le=e.originData)?void 0:le.riskInsureLimitVO)?void 0:se.annuityDrawValueList)?b("",!0):(n(),I(ke,{key:7,modelValue:m(p).formInfo.annuityDrawDate,"onUpdate:modelValue":a[14]||(a[14]=e=>m(p).formInfo.annuityDrawDate=e),label:"领取时间",name:"annuityDrawDate"},{input:V((()=>{var i;return[s("div",_e,[c(ye,{modelValue:m(p).formInfo.annuityDrawDate,"onUpdate:modelValue":a[13]||(a[13]=e=>m(p).formInfo.annuityDrawDate=e),options:_(m(te),(null==(i=e.originData.riskInsureLimitVO)?void 0:i.annuityDrawValueList)||[])},null,8,["modelValue","options"])])]})),_:1},8,["modelValue"])),R(null==(ue=null==(de=e.originData)?void 0:de.riskInsureLimitVO)?void 0:ue.annuityDrawFrequencyList)?b("",!0):(n(),I(ke,{key:8,modelValue:m(p).formInfo.annuityDrawFrequency,"onUpdate:modelValue":a[16]||(a[16]=e=>m(p).formInfo.annuityDrawFrequency=e),label:"领取方式",name:"annuityDrawFrequency"},{input:V((()=>{var i;return[s("div",xe,[c(ye,{modelValue:m(p).formInfo.annuityDrawFrequency,"onUpdate:modelValue":a[15]||(a[15]=e=>m(p).formInfo.annuityDrawFrequency=e),options:_(m(oe),(null==(i=e.originData.riskInsureLimitVO)?void 0:i.annuityDrawFrequencyList)||[])},null,8,["modelValue","options"])])]})),_:1},8,["modelValue"])),(n(!0),r(h,null,L(e.originData.riskLiabilityInfoVOList||[],((i,a)=>(n(),r(h,{key:a},[1!==i.optionalFlag||R(i.liabilityAttributeValueList)?b("",!0):(n(),I(fe,{key:0,modelValue:m(p).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>m(p).formInfo.liabilityVOList[a].liabilityAttributeValue=e,label:i.liabilityName,name:"liabilityAttributeValue",rules:[{required:i.liabilityAttributeValue,message:`请选择${i.liabilityName}`}]},{input:V((()=>{var l,t;return[s("div",null,[R(i.liabilityAttributeValueList)?(n(),r("span",Fe,"50万")):(n(),r("div",Ae,[c(ye,{modelValue:m(p).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>m(p).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:_(m(ne),null==(t=null==(l=e.originData.riskLiabilityInfoVOList)?void 0:l[a])?void 0:t.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"])]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])),1!==i.optionalFlag?(n(),I(fe,{key:1,modelValue:m(p).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>m(p).formInfo.liabilityVOList[a].liabilityAttributeValue=e,label:i.liabilityName,name:"liabilityAttributeValue"},{input:V((()=>{var l,t;return[s("div",null,[R(i.liabilityAttributeValueList)?(n(),I(ye,{key:0,modelValue:m(p).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>m(p).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:m(re)},null,8,["modelValue","onUpdate:modelValue","options"])):(n(),I(ye,{key:1,modelValue:m(p).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>m(p).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:_(m(ne),null==(t=null==(l=e.originData.riskLiabilityInfoVOList)?void 0:l[a])?void 0:t.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label"])):b("",!0)],64)))),128)),(null==(me=e.originData)?void 0:me.relationDesc)?(n(),r("div",Te,[c(ge,{title:"责任投保说明"},{default:V((()=>[s("div",null,d(e.originData.relationDesc),1)])),_:1})])):b("",!0)])}}}),[["__scopeId","data-v-cd80f4ac"]]);const Me={class:"com-risk-list-wrapper"},je=(e=>(q("data-v-10dda951"),e=e(),U(),e))((()=>s("div",{class:"popup-title"},"选择附加险",-1))),Ne={class:"risk-list"},qe={class:"cell-title"},Ue={class:"title"},Ee={class:"footer-button"};var Se=e(i({__name:"index",props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:i}){const a=e,t=l([]),o=l([]),u=l([...a.disabled]),p=y({show:a.show,currentChecked:[...a.modelValue]}),v=e=>{var i,l,o;if(u.value.includes(e))return;((e,i)=>{if(!a.collocationList.length)return i?void(p.currentChecked=[]):void p.currentChecked.push(e);let l=p.currentChecked,t=u.value;i?(a.collocationList.forEach((i=>{e===i.riskId&&(2===i.collocationType?l=l.filter((a=>a!==i.collocationRiskId||a!==e)):3===i.collocationType?(l=l.filter((i=>i!==e)),t=t.filter((e=>e!==i.collocationRiskId))):l=l.filter((i=>i!==e)))})),p.currentChecked=l,u.value=t):(a.collocationList.forEach((a=>{e===a.riskId&&(i||(2===a.collocationType?l.push(a.collocationRiskId):3===a.collocationType&&t.push(a.collocationRiskId),l.push(e)))})),p.currentChecked.push(...l),u.value=t)})(e,p.currentChecked.includes(e)),null==(o=null==(l=null==(i=null==t?void 0:t.value)?void 0:i[e])?void 0:l.toggle)||o.call(l)},f=()=>{i("close")},k=()=>{const e=a.riskList.filter((e=>p.currentChecked.includes(e.id)));i("update:modelValue",[...new Set(o.value)]),i("finished",e,u.value),i("close")};return R((()=>{t.value=[]})),g((()=>p.currentChecked),(e=>{o.value=e}),{deep:!0,immediate:!0}),g((()=>a.modelValue),(e=>{o.value=e||[],u.value.push(...e||[])}),{deep:!0,immediate:!0}),(i,a)=>{const l=A,y=T,g=w,b=M,D=j,O=N;return n(),r("div",Me,[c(O,{show:m(p).show,"onUpdate:show":a[1]||(a[1]=e=>m(p).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:f},{default:V((()=>[je,s("div",Ne,[c(b,{modelValue:m(o),"onUpdate:modelValue":a[0]||(a[0]=e=>_(o)?o.value=e:null)},{default:V((()=>[c(g,{inset:""},{default:V((()=>[(n(!0),r(h,null,L(e.riskList,(e=>(n(),I(y,{key:e.id,title:e.riskName,disabled:m(u).includes(e.id),onClick:i=>v(e.id)},{"right-icon":V((()=>[c(l,{ref_for:!0,ref:i=>m(t)[e.id]=i,shape:"square",disabled:m(u).includes(e.id),name:e.id,onClick:x((i=>v(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:V((()=>[s("div",qe,[s("div",Ue,d(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),s("div",Ee,[c(D,{type:"primary",disabled:!m(p).currentChecked.length,block:"",onClick:k},{default:V((()=>[F("确认")])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-10dda951"]]);const $e={class:"risk-list-wrapper"},Be={key:0,class:"add-rider-risk"},He={class:"left-part"},Ke=(e=>(q("data-v-fb5e5424"),e=e(),U(),e))((()=>s("span",{class:"btn-plus"},"+",-1)));var Ye=e(i({__name:"index",props:{riskInfo:{default:()=>({})},originData:{default:()=>[]},pickFactor:{type:Function,default:()=>{}},enums:{default:()=>{}}},setup(e){const i=e,a=f("source")||{},[t,o]=E(!1);l(null),l(null);const u=y({mainRiskInfo:i.riskInfo,riskInfo:i.riskInfo,requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[],currentRiskList:[]}),p=(e,i)=>{u.currentRiskList=u.currentRiskList.concat(e),u.disabledList=i},v=e=>{S.confirm({message:"确定要删除附加险么？",confirmButtonText:"删除"}).then((()=>{var i;const a=[e];((null==(i=u.mainRiskData)?void 0:i.collocationVOList)||[]).forEach((i=>{e!==i.riskId||2!==i.collocationType&&3!==i.collocationType||a.push(i.collocationRiskId)})),u.checkedList=u.checkedList.filter((e=>!a.includes(e))),u.currentRiskList=u.currentRiskList.filter((e=>!a.includes(e.id)||(Object.assign(u.riskInfo,{[e.id]:void 0}),!1))),u.disabledList=u.disabledList.filter((e=>!a.includes(e)))})).catch((()=>{}))},k=(e,i)=>{var a,l;const t=((null==(l=null==(a=u.riskInfo)?void 0:a[i])?void 0:l.liabilityVOList)||[]).find((i=>i.liabilityCode===e.liabilityCode));return t?t.liabilityAttributeValue?t.liabilityAttributeValue:1!==e.optionalFlag?"0":"-1":""};return g((()=>u.currentRiskList),(e=>{const a=[u.mainRiskData,...e];let l=[],t=[];const o=[];a.forEach(((e,i)=>{var a,n,r;const s=(null==(a=null==e?void 0:e.riskCalcMethodInfoVO)?void 0:a.riskFactorRelationList)||[];l=l.concat(s.filter((e=>"insured"===e.factorObject)).map((e=>e.factorCode))),t=t.concat(s.filter((e=>"holder"===e.factorObject)).map((e=>e.factorCode))),o.push(null==(n=null==e?void 0:e.riskInsureLimitVO)?void 0:n.minHolderAge,null==(r=null==e?void 0:e.riskInsureLimitVO)?void 0:r.maxHolderAge)})),(e||[]).forEach((e=>{var a,l;const t={riskType:e.riskType,riskId:e.id,riskCode:e.riskCode,riskName:e.riskName,mainRiskCode:1!==e.riskType?null==(a=u.mainRiskData)?void 0:a.riskCode:void 0,mainRiskId:1!==e.riskType?null==(l=u.mainRiskData)?void 0:l.id:void 0,riskCategory:e.riskCategory,exemptFlag:i.originData.exemptFlag,exemptType:i.originData.exemptType,liabilityVOList:(e.riskLiabilityInfoVOList||[]).map((i=>({...i,liabilityAttributeCode:i.liabilityAttributeType,liabilityCode:i.liabilityCode,liabilityRateType:i.liabilityRateType,liabilityAttributeValue:k(i,e.id)})))};u.riskInfo[e.id]||Object.assign(u.riskInfo,{[e.id]:t})})),i.pickFactor({insuredFactorList:[...new Set(l)],holderFactorList:[...new Set(t)],ageRange:o})}),{deep:!0,immediate:!0}),g((()=>i.riskInfo),(e=>{u.mainRiskInfo=Object.values(e||{}).find((e=>1===(null==e?void 0:e.riskType)))||{}}),{deep:!0,immediate:!0}),g((()=>i.originData),(e=>{let i=[];const l=[];"proposal"===a.origin&&"add"!==a.type&&"repeatAdd"!==a.type?((e||[]).forEach((e=>{1===e.riskType&&(u.mainRiskData=e),i.push(e)})),i=i.filter((e=>a.showRiskList.includes(e.id)))):(e||[]).forEach((e=>{1===e.riskType?(u.mainRiskData=e,i.push(e)):2===e.collocationType?i.push(e):l.push(e)})),u.riderRiskList=l,u.currentRiskList=i}),{deep:!0,immediate:!0}),(i,l)=>{var f,y,k;const g=$;return n(),r("div",$e,[(n(!0),r(h,null,L(m(u).currentRiskList,((i,a)=>(n(),I(we,{key:i.id,"form-info":m(u).riskInfo[i.id],index:a,enums:e.enums,"main-risk-data":m(u).mainRiskData,"main-risk-info":m(u).mainRiskInfo,"origin-data":i,"remove-risk":v,"remove-risk-list":m(u).checkedList},null,8,["form-info","index","enums","main-risk-data","main-risk-info","origin-data","remove-risk-list"])))),128)),(null==(f=m(u).riderRiskList)?void 0:f.length)-(null==(y=m(u).checkedList)?void 0:y.length)&&"proposal"!==m(a).origin?(n(),r("div",Be,[s("span",He,d(`共有${m(u).riderRiskList.length-m(u).checkedList.length}款附加险可以添加`),1),c(g,{activated:"",class:"btn-rider-risk",onClick:l[0]||(l[0]=e=>m(o)(!0))},{default:V((()=>[Ke,F(" 附加险")])),_:1})])):b("",!0),m(t)?(n(),I(Se,{key:1,modelValue:m(u).checkedList,"onUpdate:modelValue":l[1]||(l[1]=e=>m(u).checkedList=e),show:m(t),disabled:m(u).disabledList,"risk-list":m(u).riderRiskList,"collocation-list":(null==(k=m(u).mainRiskData)?void 0:k.collocationVOList)||[],onFinished:p,onClose:l[2]||(l[2]=e=>m(o)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):b("",!0)])}}}),[["__scopeId","data-v-fb5e5424"]]);const ze={key:0,class:"part-card"},Je={key:1,class:"part-card"},We={class:"risk-content"},Ze={key:0,class:"risk"},Ge={key:1,class:"plan-risk"},Qe={class:"footer-bar van-safe-area-bottom"},Xe={class:"trial-result"},ei={class:"result-num"},ii={class:"trial-operate"};var ai=e(i({__name:"trialPreview",setup(e){B();const i=H(),{agentCode:a="test",agencyCode:o="",tenantId:u=9991000007,insurerCode:p="99",productCode:v="MMBBSF",templateId:f,proposalId:O,saleChannelId:C}=i.query,P=l(!0),R=l({personVO:{occupationCodeList:[]}}),x=l({insuredCode:"",personVO:{occupationCodeList:[]}}),A=l({}),T=l({}),w=l({}),M=l(null),N=l({}),q=l({}),U=y({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[],productInfo:{}});K("premium",N.value);const E=()=>{const e=JSON.parse(JSON.stringify(A.value[U.currentPlan])),i=Object.values(e).find((e=>1===e.riskType)),a=Object.values(e).map((e=>{const a=e;return((e,i)=>{var a,l,t,o;const n=e;if("3"===n.chargePeriod){const e=(i.chargePeriod||"").split("_");if(e[1]-=1,1===n.exemptFlag){if("to"===e[0]){let i=0;1===n.exemptType?(null==(a=R.value.personVO)?void 0:a.birthday)&&(i=parseInt(""+(+new Date-new Date(null==(l=R.value.personVO)?void 0:l.birthday))/31536e6,10)):2===n.exemptType&&(null==(t=x.value.personVO)?void 0:t.birthday)&&(i=parseInt(""+(+new Date-new Date(null==(o=x.value.personVO)?void 0:o.birthday))/31536e6,10)),e[1]=e[1]-i}e[0]="year",n.coveragePeriod=e.join("_")}n.chargePeriod=e.join("_")}})(a,i),a.liabilityVOList=(a.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const i=e;return"0"===i.liabilityAttributeValue&&(i.liabilityAttributeValue=""),i})),a})),l={holder:R.value,productCode:U.riskBaseInfo.productCode,insuredVOList:[{...x.value,productPlanVOList:[{planCode:U.currentPlan||"",insurerCode:U.riskBaseInfo.insurerCode,riskVOList:a}]}]};me({...l}).then((({code:e,data:i})=>{if("10000"===e){(null==i?void 0:i.errorInfo)&&G(`${i.errorInfo}`),U.retrialTip=!1,U.trialResult=i,U.canTrial=!1;const e={},a=(i=[])=>{(i||[]).forEach((i=>{var l;e[i.riskCode]=i,(null==(l=i.riskPremiumDetailVOList)?void 0:l.length)&&a(i.riskPremiumDetailVOList)}))};a(i.riskPremiumDetailVOList),((e,i)=>{U.insuredRiskList=e.map((e=>{var a,l;return{initialAmount:null==(a=i[e.riskCode])?void 0:a.amount,amountUnit:1,annuityDrawFrequency:e.annuityDrawFrequency,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:se[e.chargePeriod.split("_")[0]],insurancePeriodType:de["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:null==(l=i[e.riskCode])?void 0:l.premium,liabilityDetails:e.liabilityVOList.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:U.riskBaseInfo.id}}))})(l.insuredVOList[0].productPlanVOList[0].riskVOList,e),Object.assign(N.value,e)}}))},S=()=>{var e,i,a,l,t;Promise.all([null==(i=null==(e=T.value)?void 0:e.validateForm)?void 0:i.call(e),null==(l=null==(a=w.value)?void 0:a.validateForm)?void 0:l.call(a),null==(t=M.value)?void 0:t.validate()]).then((()=>{E()}),(e=>{var i;(null==e?void 0:e.length)&&(null==(i=null==M?void 0:M.value)||i.scrollToField(e[0].name))}))},$=()=>{ue({productCode:v,source:O?2:1}).then((({code:e,data:i})=>{var a,l;"10000"===e&&(q.value=i,U.riskBaseInfo=i.productBasicInfoVO,(i.productRelationPlanVOList.length?i.productRelationPlanVOList:i.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,i)=>{0===i&&(U.currentPlan=e.planCode||"0"),O||Object.assign(A.value,{[e.planCode||i]:{}})})),U.riskData=(null==(a=i.productRiskVoList[0])?void 0:a.riskDetailVOList)||[],U.riskPlanData=i.productRelationPlanVOList||[],O&&(l=i.productBasicInfoVO.id,pe({id:O,tenantId:u}).then((({code:e,data:i})=>{var a;if("10000"===e){const{proposalInsuredProductList:e=[],...t}=(null==(a=i.proposalInsuredList)?void 0:a[0])||{};Object.assign(R.value.personVO,i.proposalHolder);const o=e.find((e=>e.productId===l));Object.assign(x.value.personVO,t,{occupationCodeList:(null==o?void 0:o.occupationCodeList)||[]});const n={};((null==o?void 0:o.proposalProductRiskList)||[]).forEach((e=>{n[e.riskId]=e})),Object.assign(A.value,{0:n})}}))))})).finally((()=>{}))},ee=e=>{U.holderFactor=e.holderFactorList,U.insuredFactor=e.insuredFactorList,U.ageRange=e.ageRange};return g([()=>A.value,()=>R.value,()=>x.value],(e=>{e&&!U.canTrial&&(U.canTrial=!0)}),{deep:!0}),t((()=>{})),k((()=>{$(),z({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:i})=>{if("10000"===e){const e={};i.forEach((i=>{e[i.dictCode]=i.dictItemList})),U.enumList=e}}))})),(e,i)=>{const a=D,l=J,t=Y("ProTabButton"),o=W,u=Z,p=X,v=ve,f=j,y=Q,k=Y("ProPageWrap");return n(),I(k,{class:"page-trial-wrapper"},{default:V((()=>{var e;return[F(" 试算因子渲染 参考short中表单渲染 -------- 投保人试算因子 "),m(U).holderFactor.length?(n(),r("div",ze,[c(a,{title:"投保人"})])):b("",!0),F(" 投保人试算因子 "),m(U).insuredFactor.length?(n(),r("div",Je,[c(a,{title:"被保人"})])):b("",!0),F(" 保障方案 "),s("div",We,[c(v,{modelValue:m(U).collapseName,"onUpdate:modelValue":i[1]||(i[1]=e=>m(U).collapseName=e)},{default:V((()=>[c(p,{name:"1"},{title:V((()=>[c(a,{title:"投保方案"})])),default:V((()=>[m(U).riskData.length&&m(A)[0]?(n(),r("div",Ze,[c(l,{ref_key:"riskFormRef",ref:M,"input-align":"right","error-message-align":"right"},{default:V((()=>[c(Ye,{"risk-info":m(A)[0],enums:m(U).enumList,"origin-data":m(U).riskData,"pick-factor":ee},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):b("",!0),m(U).riskPlanData.length?(n(),r("div",Ge,[c(l,{ref_key:"riskFormRef",ref:M,"input-align":"right","error-message-align":"right"},{default:V((()=>[c(u,{active:m(U).currentPlan,"onUpdate:active":i[0]||(i[0]=e=>m(U).currentPlan=e)},{default:V((()=>[(n(!0),r(h,null,L(m(U).riskPlanData,(e=>(n(),I(o,{key:e.planCode,name:e.planCode,title:e.planName},{title:V((()=>[c(t,{title:e.planName,active:m(U).currentPlan===e.planCode},null,8,["title","active"])])),default:V((()=>{var i;return[e.planCode===m(U).currentPlan?(n(),I(Ye,{key:0,"risk-info":m(A)[e.planCode],enums:m(U).enumList,"origin-data":null==(i=e.productRiskVoList)?void 0:i[0].riskDetailVOList,"pick-factor":ee},null,8,["risk-info","enums","origin-data"])):b("",!0)]})),_:2},1032,["name","title"])))),128))])),_:1},8,["active"])])),_:1},512)])):b("",!0)])),_:1})])),_:1},8,["modelValue"])]),s("div",Qe,[s("span",Xe,[F("总保费"),s("span",ei,d((m(U).retrialTip?0:(null==(e=m(U).trialResult)?void 0:e.premium)||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})),1)]),s("div",ii,[m(U).canTrial?(n(),I(f,{key:0,type:"primary",onClick:S},{default:V((()=>[F("立即投保")])),_:1})):b("",!0)])]),c(y,{show:m(P),"onUpdate:show":i[2]||(i[2]=e=>_(P)?P.value=e:null),title:"标题",style:{height:"100%"}},{default:V((()=>[m(q).productCode?(n(),I(ce,{key:0,class:"content","origin-data":m(q)},null,8,["origin-data"])):b("",!0)])),_:1},8,["show"])]})),_:1})}}}),[["__scopeId","data-v-126a84e7"]]);export{ai as default};
