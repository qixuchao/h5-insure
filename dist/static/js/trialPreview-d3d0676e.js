import{d as i,b7 as e,r as a,a1 as l,L as t,b as o,c as r,i as n,E as s,k as d,f as u,e as m,a_ as c,G as p,aa as v,aU as f,A as y,o as k,R as g,w as V,h as b,g as I,U as h,V as L,bP as D,aO as O,aP as C,aQ as P,bL as R,a2 as _,bB as x,j as F,bM as A,aW as T,bN as w,bO as j,B as M,bF as q,al as N,am as U,ac as E,D as $,bd as S,a as B,u as H,a$ as K,bA as Y,bz as J,b8 as W,b1 as z,b2 as G,T as Q}from"./index-160c1272.js";import{A as X}from"./index-2b1c60ff.js";import{C as Z}from"./index-dc9fe3fd.js";import{S as ii}from"./index-057ec062.js";import{c as ei,d as ai,e as li,A as ti,f as oi,L as ri,g as ni,P as si,I as di}from"./trial-700249c5.js";import{i as ui,p as mi}from"./trial-c1533e0d.js";import{_ as ci}from"./index-d1ffde76.js";import{q as pi}from"./createProposal-af517d56.js";import{C as vi}from"./index-735266ce.js";import"./pdfh5-e588f83d.js";import"./infoCollection-d69547b2.js";import"./cloneDeep-6abacc69.js";import"./keysIn-131bbce9.js";import"./isObjectLike-a9798079.js";import"./_getTag-d5b47d26.js";import"./debounce-6981b306.js";import"./merge-e7788e50.js";import"./PayInfo-d76728ad.js";import"./phoneVerify-5f9f4003.js";import"./index-c842afeb.js";import"./useDicData-02532dc9.js";import"./bankCard-0646dd86.js";const fi={class:"risk-responsibility"},yi={class:"title"},ki={class:"content"};var gi=p(i({__name:"index",props:{modelValue:Boolean,title:{type:String,default:""},minHeight:{type:[Number,String],default:80},maxHeight:{type:[Number,String],default:200}},emits:["update:modelValue"],setup(i,{emit:p}){const f=i;e();const y=a();l((()=>{y.value=f.modelValue}));const k=t((()=>y.value?`${f.maxHeight}px`:`${f.minHeight}px`)),g=()=>{y.value=!y.value,p("update:modelValue",y.value)};return(e,a)=>{const l=v;return o(),r("div",fi,[n("div",yi,s(i.title),1),n("div",{class:"responsibility-content",style:c({height:u(k)})},[n("div",ki,[d(e.$slots,"default",{},void 0,!0)]),n("div",{class:"show-button",onClick:g},[n("span",null,s(u(y)?"收起":"展开"),1),m(l,{style:{width:"20px",height:"20px"},name:u(y)?"arrow-up":"arrow-down"},null,8,["name"])])],4)])}}}),[["__scopeId","data-v-27faf794"]]);const Vi={class:"com-risk-card-wrapper part-card"},bi={class:"custom-field"},Ii={class:"field-tip"},hi={class:"custom-field"},Li={class:"field-tip"},Di={class:"custom-field"},Oi={class:"field-tip"},Ci={class:"pro-radio-wrap"},Pi={class:"pro-radio-wrap"},Ri={class:"pro-radio-wrap"},_i={class:"pro-radio-wrap"},xi={class:"pro-radio-wrap"},Fi={key:0},Ai={key:1,class:"pro-radio-wrap"},Ti={key:9,class:"liab-desc"};var wi=p(i({__name:"index",props:{originData:{default:()=>({})},formInfo:{default:()=>({})},mainRiskData:{default:()=>({})},mainRiskInfo:{default:()=>({})},index:{default:0},removeRisk:{type:Function,default:()=>{}},removeRiskList:{default:()=>[]},enums:{default:()=>({})}},setup(i){const e=i,l=a({}),d=f("premium")||{};l.value=f("enumList")||{};const c=a({chargePeriod:{disabled:!1,prevent:!1},coveragePeriod:{disabled:!1,prevent:!1},paymentFrequency:{disabled:!1,prevent:!1}}),p=y({formInfo:e.formInfo}),R=i=>"boolean"!=typeof i&&!i||(!(!Array.isArray(i)||i.length)||"[object Object]"==={}.toString.call(i)&&Object.keys(i).length),_=(i,e,a={})=>{let l=e;return Array.isArray(e)||(l=[`${l}`]),(i||[]).filter((i=>l.includes(`${i.value}`)||l.includes(i.value)))},x=t((()=>{var i,a,l,t,o,r,n,s;return 1===(null==(i=e.originData)?void 0:i.riskType)?_(e.enums.RISK_INSURANCE_PERIOD,(null==(a=e.originData.riskInsureLimitVO)?void 0:a.insurancePeriodValueList)||[]):2===(null==(l=e.originData)?void 0:l.periodType)?_([{value:"year_1",name:"1年"}],["year_1"]):1===(null==(t=e.originData)?void 0:t.exemptFlag)?_(ei,[`${null==(r=null==(o=null==e?void 0:e.originData)?void 0:o.riskInsureLimitVO)?void 0:r.insurancePeriodRule}`]):_(null==(n=e.enums)?void 0:n.RISK_INSURANCE_PERIOD,(null==(s=e.mainRiskData.riskInsureLimitVO)?void 0:s.insurancePeriodValueList)||[])})),F=t((()=>{var i,a,l,t,o,r,n,s;return 1===(null==(i=e.originData)?void 0:i.riskType)?_(null==(a=null==e?void 0:e.enums)?void 0:a.RISK_PAYMENT_PERIOD,(null==(l=e.originData.riskInsureLimitVO)?void 0:l.paymentPeriodValueList)||[]):1===(null==(t=e.originData)?void 0:t.exemptFlag)?_(ai,[`${null==(r=null==(o=null==e?void 0:e.originData)?void 0:o.riskInsureLimitVO)?void 0:r.paymentPeriodRule}`]):2===(null==(n=e.originData)?void 0:n.periodType)?_([{value:"year_1",name:"1年交"}],["year_1"]):_(e.enums.RISK_PAYMENT_PERIOD,(null==(s=e.mainRiskData.riskInsureLimitVO)?void 0:s.paymentPeriodValueList)||[])})),A=t((()=>{var i,a,l,t,o;return 1===(null==(i=e.originData)?void 0:i.riskType)?_(li,(null==(a=e.originData.riskInsureLimitVO)?void 0:a.paymentFrequencyList)||[]):1===(null==(l=e.originData.riskInsureLimitVO)?void 0:l.paymentTypeRule)?_(li,(null==(t=e.mainRiskData.riskInsureLimitVO)?void 0:t.paymentFrequencyList)||[]):_(li,(null==(o=e.mainRiskData.riskInsureLimitVO)?void 0:o.paymentFrequencyList)||[])})),T=t((()=>{var i,a;let l=0,t=0;return((null==(a=null==(i=e.originData)?void 0:i.riskCalcMethodInfoVO)?void 0:a.paymentMethodLimitList)||[]).forEach(((i,e)=>{0===e&&(l=i.minAmount,t=i.maxAmount),l>i.minAmount&&(l=i.minAmount),t<i.maxAmount&&(t=i.maxAmount)})),p.formInfo.amount=p.formInfo.amount||l,{min:l,max:t||1/0}})),w=t((()=>{var i,a;let l=0,t=0;return((null==(a=null==(i=e.originData)?void 0:i.riskCalcMethodInfoVO)?void 0:a.paymentMethodLimitList)||[]).forEach(((i,e)=>{0===e&&(l=i.minPremium,t=i.maxPremium),l>i.minPremium&&(l=i.minPremium),t<i.maxPremium&&(t=i.maxPremium)})),p.formInfo.premium=p.formInfo.premium||l,{min:l,max:t||1/0}})),j=t((()=>{var i,a,l,t;const o=(null==(a=null==(i=e.originData)?void 0:i.riskCalcMethodInfoVO)?void 0:a.minCopy)||1,r=null==(t=null==(l=e.originData)?void 0:l.riskCalcMethodInfoVO)?void 0:t.maxCopy;return p.formInfo.copy=`${p.formInfo.copy||o||1}`,{min:o,max:r}})),M=(i,a,l)=>{var t,o;const r=(null==(o=null==(t=e.originData)?void 0:t.riskCalcMethodInfoVO)?void 0:o.increaseDecreaseNum)||1;if("sumInsured"===l){if(T.value.max&&+i>T.value.max)return`金额最大${T.value.max}元`;if(+i<T.value.min)return`金额最小${T.value.min}元`}else{if(w.value.max&&+i>w.value.max)return`金额最大${w.value.max}元`;if(+i<w.value.min)return`金额最小${w.value.min}元`}return+i%r==0?"":`金额必须是${r}的倍数`},q=i=>{var e;const a=((null==(e=p.formInfo)?void 0:e.liabilityVOList)||[]).find((e=>e.liabilityCode===i.liabilityCode));return a?a.liabilityAttributeValue?a.liabilityAttributeValue:1!==i.optionalFlag?"0":"-1":""};return k((()=>{var i,a,l,t;const o={riskType:e.originData.riskType,riskId:e.originData.id,riskName:e.originData.riskName,riskCode:e.originData.riskCode,amount:p.formInfo.amount,mainRiskCode:1!==e.originData.riskType?null==(i=e.mainRiskData)?void 0:i.riskCode:void 0,mainRiskId:1!==e.originData.riskType?null==(a=e.mainRiskData)?void 0:a.id:void 0,exemptFlag:e.originData.exemptFlag,exemptType:e.originData.exemptType,riskCategory:e.originData.riskCategory,liabilityVOList:(e.originData.riskLiabilityInfoVOList||[]).map((i=>({...i,liabilityAttributeCode:i.liabilityAttributeType,liabilityCode:i.liabilityCode,liabilityRateType:i.liabilityRateType,liabilityAttributeValue:q(i)})))};[1].includes((null==(l=e.originData.riskCalcMethodInfoVO)?void 0:l.saleMethod)||0)&&1!==(null==(t=e.originData)?void 0:t.exemptFlag)||!e.originData.riskCalcMethodInfoVO.fixedAmount||(o.amount=e.originData.riskCalcMethodInfoVO.fixedAmount),Object.assign(p.formInfo,o)})),g((()=>{var i;return null==(i=p.formInfo)?void 0:i.paymentFrequency}),((i=0)=>{var a,l,t;[3].includes((null==(a=e.originData.riskCalcMethodInfoVO)?void 0:a.saleMethod)||0)&&((null==(t=null==(l=e.originData)?void 0:l.riskCalcMethodInfoVO)?void 0:t.paymentMethodLimitList)||[]).forEach((e=>{+e.paymentFrequency==+i&&Object.assign(p.formInfo,{amount:e.perCopyAmount,premium:e.perCopyPremium})})),1==+i&&"single"!==p.formInfo.chargePeriod&&(p.formInfo.chargePeriod="single")})),g((()=>{var i;return null==(i=p.formInfo)?void 0:i.copy}),(i=>{var a,l;4===(null==(a=e.originData.riskCalcMethodInfoVO)?void 0:a.saleMethod)&&(p.formInfo.amount=null==(l=e.originData.riskCalcMethodInfoVO)?void 0:l.fixedAmount)})),g((()=>{var i;return null==(i=p.formInfo)?void 0:i.chargePeriod}),(i=>{"single"===i&&1!=+(p.formInfo.paymentFrequency||0)&&(p.formInfo.paymentFrequency=1)})),g((()=>null==e?void 0:e.mainRiskInfo),(i=>{var a,l,t,o,r,n;i&&2===e.originData.riskType&&(1===(null==(l=null==(a=e.originData)?void 0:a.riskInsureLimitVO)?void 0:l.insurancePeriodRule)&&(i.coveragePeriod?c.value.coveragePeriod.disabled=!0:c.value.coveragePeriod.prevent=!0,p.formInfo.coveragePeriod=i.coveragePeriod||""),1===(null==(o=null==(t=e.originData)?void 0:t.riskInsureLimitVO)?void 0:o.paymentPeriodRule)&&(i.chargePeriod?c.value.chargePeriod.disabled=!0:c.value.chargePeriod.prevent=!0,p.formInfo.chargePeriod=i.chargePeriod||""),1===(null==(n=null==(r=e.originData)?void 0:r.riskInsureLimitVO)?void 0:n.paymentTypeRule)&&(i.paymentFrequency?c.value.paymentFrequency.disabled=!0:c.value.paymentFrequency.prevent=!0,p.formInfo.paymentFrequency=i.paymentFrequency||0))}),{immediate:!0,deep:!0}),(i,e)=>{var a,l,t,f,y,k,g,q,N,U,E,$,S,B,H,K,Y,J,W,z,G,Q,X,Z,ei,ai,li,si,di,ui;const mi=v,ci=D,pi=ii,vi=O,fi=C,yi=P;return o(),r("div",Vi,[m(ci,{"risk-type":i.originData.riskType,title:i.originData.riskName},{default:V((()=>[i.removeRiskList.includes(i.originData.id)?(o(),r("div",{key:0,class:"delete-risk",onClick:e[0]||(e[0]=e=>i.removeRisk(i.originData.id))},[m(mi,{name:"img-lajitong",color:"var(--van-primary-color)"})])):b("",!0)])),_:1},8,["risk-type","title"]),1===(null==(a=i.originData.riskCalcMethodInfoVO)?void 0:a.saleMethod)&&2===i.originData.exemptFlag?(o(),I(vi,{key:0,modelValue:u(p).formInfo.amount,"onUpdate:modelValue":e[2]||(e[2]=i=>u(p).formInfo.amount=i),label:"保额",name:"amount",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...i)=>M(...i,"sumInsured")}]},{input:V((()=>{var a,l;return[n("div",bi,[m(pi,{modelValue:u(p).formInfo.amount,"onUpdate:modelValue":e[1]||(e[1]=i=>u(p).formInfo.amount=i),"input-width":"64px",min:u(T).min,step:(null==(a=i.originData.riskCalcMethodInfoVO)?void 0:a.increaseDecreaseNum)||1,max:u(T).max},null,8,["modelValue","min","step","max"]),n("span",Ii,s(`金额最低${u(T).min}元，为${(null==(l=i.originData.riskCalcMethodInfoVO)?void 0:l.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):b("",!0),2===(null==(t=null==(l=i.originData)?void 0:l.riskCalcMethodInfoVO)?void 0:t.saleMethod)?(o(),I(vi,{key:1,modelValue:u(p).formInfo.premium,"onUpdate:modelValue":e[4]||(e[4]=i=>u(p).formInfo.premium=i),label:"保费",name:"premium",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...i)=>M(...i,"premium")}]},{input:V((()=>{var a,l,t,o;return[n("div",hi,[m(pi,{modelValue:u(p).formInfo.premium,"onUpdate:modelValue":e[3]||(e[3]=i=>u(p).formInfo.premium=i),step:(null==(l=null==(a=i.originData)?void 0:a.riskCalcMethodInfoVO)?void 0:l.increaseDecreaseNum)||1,min:u(w).min,"input-width":"64px",max:u(w).max},null,8,["modelValue","step","min","max"]),n("span",Li,s(`金额最低${u(w).min}元，为${(null==(o=null==(t=i.originData)?void 0:t.riskCalcMethodInfoVO)?void 0:o.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):b("",!0),3===(null==(y=null==(f=i.originData)?void 0:f.riskCalcMethodInfoVO)?void 0:y.saleMethod)||4===(null==(g=null==(k=i.originData)?void 0:k.riskCalcMethodInfoVO)?void 0:g.saleMethod)&&((null==(N=null==(q=i.originData)?void 0:q.riskCalcMethodInfoVO)?void 0:N.minCopy)||(null==(E=null==(U=i.originData)?void 0:U.riskCalcMethodInfoVO)?void 0:E.maxCopy))?(o(),I(vi,{key:2,modelValue:u(p).formInfo.copy,"onUpdate:modelValue":e[6]||(e[6]=i=>u(p).formInfo.copy=i),label:"投保份数",name:"copy",rules:[{required:!0,message:"请填写"}]},{input:V((()=>[n("div",Di,[m(pi,{modelValue:u(p).formInfo.copy,"onUpdate:modelValue":e[5]||(e[5]=i=>u(p).formInfo.copy=i),step:1,min:u(j).min,max:u(j).max},null,8,["modelValue","min","max"]),n("span",Oi,s(`${u(j).min}份起购，最多购买${u(j).max}份`),1)])])),_:1},8,["modelValue"])):b("",!0),[1].includes((null==($=i.originData.riskCalcMethodInfoVO)?void 0:$.saleMethod)||0)&&1!==(null==(S=i.originData)?void 0:S.exemptFlag)||!i.originData.riskCalcMethodInfoVO.fixedAmount&&!(null==(H=u(d))?void 0:H[null==(B=i.originData)?void 0:B.riskCode])?b("",!0):(o(),I(vi,{key:3,label:"保额"},{input:V((()=>{var e,a,l,t;return[n("div",null,s((null==(e=i.originData.riskCalcMethodInfoVO)?void 0:e.fixedAmount)||(null==(t=null==(l=u(d))?void 0:l[null==(a=i.originData)?void 0:a.riskCode])?void 0:t.amount)),1)]})),_:1})),R(null==(Y=null==(K=i.originData)?void 0:K.riskInsureLimitVO)?void 0:Y.insurancePeriodValueList)&&R(null==(W=null==(J=i.originData)?void 0:J.riskInsureLimitVO)?void 0:W.insurancePeriodRule)?b("",!0):(o(),I(yi,{key:4,modelValue:u(p).formInfo.coveragePeriod,"onUpdate:modelValue":e[8]||(e[8]=i=>u(p).formInfo.coveragePeriod=i),label:"保障期间",name:"coveragePeriod",rules:[{required:!0,message:"请选择保障期间"}]},{input:V((()=>[n("div",Ci,[m(fi,{modelValue:u(p).formInfo.coveragePeriod,"onUpdate:modelValue":e[7]||(e[7]=i=>u(p).formInfo.coveragePeriod=i),disabled:u(c).coveragePeriod.disabled,prevent:u(c).coveragePeriod.prevent?"请先选择主险保障期间":"",options:u(x),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),R(null==(G=null==(z=i.originData)?void 0:z.riskInsureLimitVO)?void 0:G.paymentPeriodValueList)&&R(null==(X=null==(Q=i.originData)?void 0:Q.riskInsureLimitVO)?void 0:X.paymentPeriodRule)?b("",!0):(o(),I(yi,{key:5,modelValue:u(p).formInfo.chargePeriod,"onUpdate:modelValue":e[10]||(e[10]=i=>u(p).formInfo.chargePeriod=i),label:"交费期间",name:"chargePeriod",rules:[{required:!0,message:"请选择交费期间"}]},{input:V((()=>[n("div",Pi,[m(fi,{modelValue:u(p).formInfo.chargePeriod,"onUpdate:modelValue":e[9]||(e[9]=i=>u(p).formInfo.chargePeriod=i),disabled:u(c).chargePeriod.disabled,prevent:u(c).chargePeriod.prevent?"请先选择主险交费期间":"",options:u(F),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),R(null==(Z=i.originData.riskInsureLimitVO)?void 0:Z.paymentFrequencyList)&&R(null==(ei=i.originData.riskInsureLimitVO)?void 0:ei.paymentPeriodRule)?b("",!0):(o(),I(yi,{key:6,modelValue:u(p).formInfo.paymentFrequency,"onUpdate:modelValue":e[12]||(e[12]=i=>u(p).formInfo.paymentFrequency=i),label:"交费方式",name:"paymentFrequency",rules:[{required:!0,message:"请选择交费方式"}]},{input:V((()=>[n("div",Ri,[m(fi,{modelValue:u(p).formInfo.paymentFrequency,"onUpdate:modelValue":e[11]||(e[11]=i=>u(p).formInfo.paymentFrequency=i),disabled:u(c).paymentFrequency.disabled,prevent:u(c).paymentFrequency.prevent?"请先选择主险交费方式":"",options:u(A)},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),R(null==(li=null==(ai=i.originData)?void 0:ai.riskInsureLimitVO)?void 0:li.annuityDrawValueList)?b("",!0):(o(),I(yi,{key:7,modelValue:u(p).formInfo.annuityDrawDate,"onUpdate:modelValue":e[14]||(e[14]=i=>u(p).formInfo.annuityDrawDate=i),label:"领取时间",name:"annuityDrawDate"},{input:V((()=>{var a;return[n("div",_i,[m(fi,{modelValue:u(p).formInfo.annuityDrawDate,"onUpdate:modelValue":e[13]||(e[13]=i=>u(p).formInfo.annuityDrawDate=i),options:_(u(ti),(null==(a=i.originData.riskInsureLimitVO)?void 0:a.annuityDrawValueList)||[])},null,8,["modelValue","options"])])]})),_:1},8,["modelValue"])),R(null==(di=null==(si=i.originData)?void 0:si.riskInsureLimitVO)?void 0:di.annuityDrawFrequencyList)?b("",!0):(o(),I(yi,{key:8,modelValue:u(p).formInfo.annuityDrawFrequency,"onUpdate:modelValue":e[16]||(e[16]=i=>u(p).formInfo.annuityDrawFrequency=i),label:"领取方式",name:"annuityDrawFrequency"},{input:V((()=>{var a;return[n("div",xi,[m(fi,{modelValue:u(p).formInfo.annuityDrawFrequency,"onUpdate:modelValue":e[15]||(e[15]=i=>u(p).formInfo.annuityDrawFrequency=i),options:_(u(oi),(null==(a=i.originData.riskInsureLimitVO)?void 0:a.annuityDrawFrequencyList)||[])},null,8,["modelValue","options"])])]})),_:1},8,["modelValue"])),(o(!0),r(h,null,L(i.originData.riskLiabilityInfoVOList||[],((e,a)=>(o(),r(h,{key:a},[1!==e.optionalFlag||R(e.liabilityAttributeValueList)?b("",!0):(o(),I(vi,{key:0,modelValue:u(p).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":i=>u(p).formInfo.liabilityVOList[a].liabilityAttributeValue=i,label:e.liabilityName,name:"liabilityAttributeValue",rules:[{required:e.liabilityAttributeValue,message:`请选择${e.liabilityName}`}]},{input:V((()=>{var l,t;return[n("div",null,[R(e.liabilityAttributeValueList)?(o(),r("span",Fi,"50万")):(o(),r("div",Ai,[m(fi,{modelValue:u(p).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":i=>u(p).formInfo.liabilityVOList[a].liabilityAttributeValue=i,options:_(u(ri),null==(t=null==(l=i.originData.riskLiabilityInfoVOList)?void 0:l[a])?void 0:t.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"])]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])),1!==e.optionalFlag?(o(),I(vi,{key:1,modelValue:u(p).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":i=>u(p).formInfo.liabilityVOList[a].liabilityAttributeValue=i,label:e.liabilityName,name:"liabilityAttributeValue"},{input:V((()=>{var l,t;return[n("div",null,[R(e.liabilityAttributeValueList)?(o(),I(fi,{key:0,modelValue:u(p).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":i=>u(p).formInfo.liabilityVOList[a].liabilityAttributeValue=i,options:u(ni)},null,8,["modelValue","onUpdate:modelValue","options"])):(o(),I(fi,{key:1,modelValue:u(p).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":i=>u(p).formInfo.liabilityVOList[a].liabilityAttributeValue=i,options:_(u(ri),null==(t=null==(l=i.originData.riskLiabilityInfoVOList)?void 0:l[a])?void 0:t.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label"])):b("",!0)],64)))),128)),(null==(ui=i.originData)?void 0:ui.relationDesc)?(o(),r("div",Ti,[m(gi,{title:"责任投保说明"},{default:V((()=>[n("div",null,s(i.originData.relationDesc),1)])),_:1})])):b("",!0)])}}}),[["__scopeId","data-v-2b72d08b"]]);const ji={class:"com-risk-list-wrapper"},Mi=(i=>(N("data-v-10dda951"),i=i(),U(),i))((()=>n("div",{class:"popup-title"},"选择附加险",-1))),qi={class:"risk-list"},Ni={class:"cell-title"},Ui={class:"title"},Ei={class:"footer-button"};var $i=p(i({__name:"index",props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(i,{emit:e}){const l=i,t=a([]),d=a([]),c=a([...l.disabled]),p=y({show:l.show,currentChecked:[...l.modelValue]}),v=i=>{var e,a,o;if(c.value.includes(i))return;((i,e)=>{if(!l.collocationList.length)return e?void(p.currentChecked=[]):void p.currentChecked.push(i);let a=p.currentChecked,t=c.value;e?(l.collocationList.forEach((e=>{i===e.riskId&&(2===e.collocationType?a=a.filter((a=>a!==e.collocationRiskId||a!==i)):3===e.collocationType?(a=a.filter((e=>e!==i)),t=t.filter((i=>i!==e.collocationRiskId))):a=a.filter((e=>e!==i)))})),p.currentChecked=a,c.value=t):(l.collocationList.forEach((l=>{i===l.riskId&&(e||(2===l.collocationType?a.push(l.collocationRiskId):3===l.collocationType&&t.push(l.collocationRiskId),a.push(i)))})),p.currentChecked.push(...a),c.value=t)})(i,p.currentChecked.includes(i)),null==(o=null==(a=null==(e=null==t?void 0:t.value)?void 0:e[i])?void 0:a.toggle)||o.call(a)},f=()=>{e("close")},k=()=>{const i=l.riskList.filter((i=>p.currentChecked.includes(i.id)));e("update:modelValue",[...new Set(d.value)]),e("finished",i,c.value),e("close")};return R((()=>{t.value=[]})),g((()=>p.currentChecked),(i=>{d.value=i}),{deep:!0,immediate:!0}),g((()=>l.modelValue),(i=>{d.value=i||[],c.value.push(...i||[])}),{deep:!0,immediate:!0}),(i,e)=>{const a=A,l=T,y=w,g=j,b=M,D=q;return o(),r("div",ji,[m(D,{show:u(p).show,"onUpdate:show":e[1]||(e[1]=i=>u(p).show=i),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:f},{default:V((()=>[Mi,n("div",qi,[m(g,{modelValue:u(d),"onUpdate:modelValue":e[0]||(e[0]=i=>_(d)?d.value=i:null)},{default:V((()=>[m(y,{inset:""},{default:V((()=>[(o(!0),r(h,null,L(i.riskList,(i=>(o(),I(l,{key:i.id,title:i.riskName,disabled:u(c).includes(i.id),onClick:e=>v(i.id)},{"right-icon":V((()=>[m(a,{ref_for:!0,ref:e=>u(t)[i.id]=e,shape:"square",disabled:u(c).includes(i.id),name:i.id,onClick:x((e=>v(i.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:V((()=>[n("div",Ni,[n("div",Ui,s(i.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),n("div",Ei,[m(b,{type:"primary",disabled:!u(p).currentChecked.length,block:"",onClick:k},{default:V((()=>[F("确认")])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-10dda951"]]);const Si={class:"risk-list-wrapper"},Bi={key:0,class:"add-rider-risk"},Hi={class:"left-part"},Ki=(i=>(N("data-v-fb5e5424"),i=i(),U(),i))((()=>n("span",{class:"btn-plus"},"+",-1)));var Yi=p(i({__name:"index",props:{riskInfo:{default:()=>({})},originData:{default:()=>[]},pickFactor:{type:Function,default:()=>{}},enums:{default:()=>{}}},setup(i){const e=i,l=f("source")||{},[t,d]=E(!1);a(null),a(null);const c=y({mainRiskInfo:e.riskInfo,riskInfo:e.riskInfo,requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[],currentRiskList:[]}),p=(i,e)=>{c.currentRiskList=c.currentRiskList.concat(i),c.disabledList=e},v=i=>{$.confirm({message:"确定要删除附加险么？",confirmButtonText:"删除"}).then((()=>{var e;const a=[i];((null==(e=c.mainRiskData)?void 0:e.collocationVOList)||[]).forEach((e=>{i!==e.riskId||2!==e.collocationType&&3!==e.collocationType||a.push(e.collocationRiskId)})),c.checkedList=c.checkedList.filter((i=>!a.includes(i))),c.currentRiskList=c.currentRiskList.filter((i=>!a.includes(i.id)||(Object.assign(c.riskInfo,{[i.id]:void 0}),!1))),c.disabledList=c.disabledList.filter((i=>!a.includes(i)))})).catch((()=>{}))},k=(i,e)=>{var a,l;const t=((null==(l=null==(a=c.riskInfo)?void 0:a[e])?void 0:l.liabilityVOList)||[]).find((e=>e.liabilityCode===i.liabilityCode));return t?t.liabilityAttributeValue?t.liabilityAttributeValue:1!==i.optionalFlag?"0":"-1":""};return g((()=>c.currentRiskList),(i=>{const a=[c.mainRiskData,...i];let l=[],t=[];const o=[];a.forEach(((i,e)=>{var a,r,n;const s=(null==(a=null==i?void 0:i.riskCalcMethodInfoVO)?void 0:a.riskFactorRelationList)||[];l=l.concat(s.filter((i=>"insured"===i.factorObject)).map((i=>i.factorCode))),t=t.concat(s.filter((i=>"holder"===i.factorObject)).map((i=>i.factorCode))),o.push(null==(r=null==i?void 0:i.riskInsureLimitVO)?void 0:r.minHolderAge,null==(n=null==i?void 0:i.riskInsureLimitVO)?void 0:n.maxHolderAge)})),(i||[]).forEach((i=>{var a,l;const t={riskType:i.riskType,riskId:i.id,riskCode:i.riskCode,riskName:i.riskName,mainRiskCode:1!==i.riskType?null==(a=c.mainRiskData)?void 0:a.riskCode:void 0,mainRiskId:1!==i.riskType?null==(l=c.mainRiskData)?void 0:l.id:void 0,riskCategory:i.riskCategory,exemptFlag:e.originData.exemptFlag,exemptType:e.originData.exemptType,liabilityVOList:(i.riskLiabilityInfoVOList||[]).map((e=>({...e,liabilityAttributeCode:e.liabilityAttributeType,liabilityCode:e.liabilityCode,liabilityRateType:e.liabilityRateType,liabilityAttributeValue:k(e,i.id)})))};c.riskInfo[i.id]||Object.assign(c.riskInfo,{[i.id]:t})})),e.pickFactor({insuredFactorList:[...new Set(l)],holderFactorList:[...new Set(t)],ageRange:o})}),{deep:!0,immediate:!0}),g((()=>e.riskInfo),(i=>{c.mainRiskInfo=Object.values(i||{}).find((i=>1===(null==i?void 0:i.riskType)))||{}}),{deep:!0,immediate:!0}),g((()=>e.originData),(i=>{let e=[];const a=[];"proposal"===l.origin&&"add"!==l.type&&"repeatAdd"!==l.type?((i||[]).forEach((i=>{1===i.riskType&&(c.mainRiskData=i),e.push(i)})),e=e.filter((i=>l.showRiskList.includes(i.id)))):(i||[]).forEach((i=>{1===i.riskType?(c.mainRiskData=i,e.push(i)):2===i.collocationType?e.push(i):a.push(i)})),c.riderRiskList=a,c.currentRiskList=e}),{deep:!0,immediate:!0}),(i,e)=>{var a,f,y;const k=S;return o(),r("div",Si,[(o(!0),r(h,null,L(u(c).currentRiskList,((e,a)=>(o(),I(wi,{key:e.id,"form-info":u(c).riskInfo[e.id],index:a,enums:i.enums,"main-risk-data":u(c).mainRiskData,"main-risk-info":u(c).mainRiskInfo,"origin-data":e,"remove-risk":v,"remove-risk-list":u(c).checkedList},null,8,["form-info","index","enums","main-risk-data","main-risk-info","origin-data","remove-risk-list"])))),128)),(null==(a=u(c).riderRiskList)?void 0:a.length)-(null==(f=u(c).checkedList)?void 0:f.length)&&"proposal"!==u(l).origin?(o(),r("div",Bi,[n("span",Hi,s(`共有${u(c).riderRiskList.length-u(c).checkedList.length}款附加险可以添加`),1),m(k,{activated:"",class:"btn-rider-risk",onClick:e[0]||(e[0]=i=>u(d)(!0))},{default:V((()=>[Ki,F(" 附加险")])),_:1})])):b("",!0),u(t)?(o(),I($i,{key:1,modelValue:u(c).checkedList,"onUpdate:modelValue":e[1]||(e[1]=i=>u(c).checkedList=i),show:u(t),disabled:u(c).disabledList,"risk-list":u(c).riderRiskList,"collocation-list":(null==(y=u(c).mainRiskData)?void 0:y.collocationVOList)||[],onFinished:p,onClose:e[2]||(e[2]=i=>u(d)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):b("",!0)])}}}),[["__scopeId","data-v-fb5e5424"]]);const Ji={key:0,class:"part-card"},Wi={key:1,class:"part-card"},zi={class:"risk-content"},Gi={key:0,class:"risk"},Qi={key:1,class:"plan-risk"},Xi={class:"footer-bar van-safe-area-bottom"},Zi={class:"trial-result"},ie={class:"result-num"},ee={class:"trial-operate"};var ae=p(i({__name:"trialPreview",setup(i){B();const e=H(),{agentCode:t="test",agencyCode:d="",tenantId:c=9991000007,insurerCode:p="99",productCode:v="MMBBSF",templateId:f,proposalId:O,saleChannelId:C}=e.query,P=a(!0),R=a({personVO:{occupationCodeList:[]}}),x=a({insuredCode:"",personVO:{occupationCodeList:[]}}),A=a({}),T=a({}),w=a({}),j=a(null),q=a({}),N=a({}),U=y({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[],productInfo:{}});K("premium",q.value);const E=()=>{const i=JSON.parse(JSON.stringify(A.value[U.currentPlan])),e=Object.values(i).find((i=>1===i.riskType)),a=Object.values(i).map((i=>{const a=i;return((i,e)=>{var a,l,t,o;const r=i;if("3"===r.chargePeriod){const i=(e.chargePeriod||"").split("_");if(i[1]-=1,1===r.exemptFlag){if("to"===i[0]){let e=0;1===r.exemptType?(null==(a=R.value.personVO)?void 0:a.birthday)&&(e=parseInt(""+(+new Date-new Date(null==(l=R.value.personVO)?void 0:l.birthday))/31536e6,10)):2===r.exemptType&&(null==(t=x.value.personVO)?void 0:t.birthday)&&(e=parseInt(""+(+new Date-new Date(null==(o=x.value.personVO)?void 0:o.birthday))/31536e6,10)),i[1]=i[1]-e}i[0]="year",r.coveragePeriod=i.join("_")}r.chargePeriod=i.join("_")}})(a,e),a.liabilityVOList=(a.liabilityVOList||[]).filter((i=>1===i.optionalFlag||i.liabilityAttributeValue&&"-1"!==i.liabilityAttributeValue)).map((i=>{const e=i;return"0"===e.liabilityAttributeValue&&(e.liabilityAttributeValue=""),e})),a})),l={holder:R.value,productCode:U.riskBaseInfo.productCode,insuredVOList:[{...x.value,productPlanVOList:[{planCode:U.currentPlan||"",insurerCode:U.riskBaseInfo.insurerCode,riskVOList:a}]}]};mi({...l}).then((({code:i,data:e})=>{if("10000"===i){(null==e?void 0:e.errorInfo)&&Q(`${e.errorInfo}`),U.retrialTip=!1,U.trialResult=e,U.canTrial=!1;const i={},a=(e=[])=>{(e||[]).forEach((e=>{var l;i[e.riskCode]=e,(null==(l=e.riskPremiumDetailVOList)?void 0:l.length)&&a(e.riskPremiumDetailVOList)}))};a(e.riskPremiumDetailVOList),((i,e)=>{U.insuredRiskList=i.map((i=>{var a,l;return{initialAmount:null==(a=e[i.riskCode])?void 0:a.amount,amountUnit:1,annuityDrawFrequency:i.annuityDrawFrequency,paymentFrequency:i.paymentFrequency,paymentPeriod:i.chargePeriod.split("_")[1],paymentPeriodType:si[i.chargePeriod.split("_")[0]],insurancePeriodType:di["to_life"===i.coveragePeriod?"to_life":i.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+i.coveragePeriod.split("_")[1])?0:i.coveragePeriod.split("_")[1],riskCode:i.riskCode,riskType:i.riskType,riskName:i.riskName,extInfo:{riskId:i.riskId,copy:i.copy},initialPremium:null==(l=e[i.riskCode])?void 0:l.premium,liabilityDetails:i.liabilityVOList.map((i=>({liabilityCode:i.liabilityCode,liabilityName:i.liabilityName,refundMethod:i.liabilityAttributeValue}))),productId:U.riskBaseInfo.id}}))})(l.insuredVOList[0].productPlanVOList[0].riskVOList,i),Object.assign(q.value,i)}}))},$=()=>{var i,e,a,l,t;Promise.all([null==(e=null==(i=T.value)?void 0:i.validateForm)?void 0:e.call(i),null==(l=null==(a=w.value)?void 0:a.validateForm)?void 0:l.call(a),null==(t=j.value)?void 0:t.validate()]).then((()=>{E()}),(i=>{var e;(null==i?void 0:i.length)&&(null==(e=null==j?void 0:j.value)||e.scrollToField(i[0].name))}))},S=()=>{ui({productCode:v,source:O?2:1}).then((({code:i,data:e})=>{var a,l;"10000"===i&&(N.value=e,U.riskBaseInfo=e.productBasicInfoVO,(e.productRelationPlanVOList.length?e.productRelationPlanVOList:e.productRiskVoList[0].riskDetailVOList||[]).forEach(((i,e)=>{0===e&&(U.currentPlan=i.planCode||"0"),O||Object.assign(A.value,{[i.planCode||e]:{}})})),U.riskData=(null==(a=e.productRiskVoList[0])?void 0:a.riskDetailVOList)||[],U.riskPlanData=e.productRelationPlanVOList||[],O&&(l=e.productBasicInfoVO.id,pi({id:O,tenantId:c}).then((({code:i,data:e})=>{var a;if("10000"===i){const{proposalInsuredProductList:i=[],...t}=(null==(a=e.proposalInsuredList)?void 0:a[0])||{};Object.assign(R.value.personVO,e.proposalHolder);const o=i.find((i=>i.productId===l));Object.assign(x.value.personVO,t,{occupationCodeList:(null==o?void 0:o.occupationCodeList)||[]});const r={};((null==o?void 0:o.proposalProductRiskList)||[]).forEach((i=>{r[i.riskId]=i})),Object.assign(A.value,{0:r})}}))))})).finally((()=>{}))},ii=i=>{U.holderFactor=i.holderFactorList,U.insuredFactor=i.insuredFactorList,U.ageRange=i.ageRange};return g([()=>A.value,()=>R.value,()=>x.value],(i=>{i&&!U.canTrial&&(U.canTrial=!0)}),{deep:!0}),l((()=>{})),k((()=>{S(),J({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:i,data:e})=>{if("10000"===i){const i={};e.forEach((e=>{i[e.dictCode]=e.dictItemList})),U.enumList=i}}))})),(i,e)=>{const a=D,l=W,t=Y("ProTabButton"),d=z,c=G,p=Z,v=vi,f=M,y=X,k=Y("ProPageWrap");return o(),I(k,{class:"page-trial-wrapper"},{default:V((()=>{var i;return[F(" 试算因子渲染 参考short中表单渲染 -------- 投保人试算因子 "),u(U).holderFactor.length?(o(),r("div",Ji,[m(a,{title:"投保人"})])):b("",!0),F(" 投保人试算因子 "),u(U).insuredFactor.length?(o(),r("div",Wi,[m(a,{title:"被保人"})])):b("",!0),F(" 保障方案 "),n("div",zi,[m(v,{modelValue:u(U).collapseName,"onUpdate:modelValue":e[1]||(e[1]=i=>u(U).collapseName=i)},{default:V((()=>[m(p,{name:"1"},{title:V((()=>[m(a,{title:"投保方案"})])),default:V((()=>[u(U).riskData.length&&u(A)[0]?(o(),r("div",Gi,[m(l,{ref_key:"riskFormRef",ref:j,"input-align":"right","error-message-align":"right"},{default:V((()=>[m(Yi,{"risk-info":u(A)[0],enums:u(U).enumList,"origin-data":u(U).riskData,"pick-factor":ii},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):b("",!0),u(U).riskPlanData.length?(o(),r("div",Qi,[m(l,{ref_key:"riskFormRef",ref:j,"input-align":"right","error-message-align":"right"},{default:V((()=>[m(c,{active:u(U).currentPlan,"onUpdate:active":e[0]||(e[0]=i=>u(U).currentPlan=i)},{default:V((()=>[(o(!0),r(h,null,L(u(U).riskPlanData,(i=>(o(),I(d,{key:i.planCode,name:i.planCode,title:i.planName},{title:V((()=>[m(t,{title:i.planName,active:u(U).currentPlan===i.planCode},null,8,["title","active"])])),default:V((()=>{var e;return[i.planCode===u(U).currentPlan?(o(),I(Yi,{key:0,"risk-info":u(A)[i.planCode],enums:u(U).enumList,"origin-data":null==(e=i.productRiskVoList)?void 0:e[0].riskDetailVOList,"pick-factor":ii},null,8,["risk-info","enums","origin-data"])):b("",!0)]})),_:2},1032,["name","title"])))),128))])),_:1},8,["active"])])),_:1},512)])):b("",!0)])),_:1})])),_:1},8,["modelValue"])]),n("div",Xi,[n("span",Zi,[F("总保费"),n("span",ie,s((u(U).retrialTip?0:(null==(i=u(U).trialResult)?void 0:i.premium)||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})),1)]),n("div",ee,[u(U).canTrial?(o(),I(f,{key:0,type:"primary",onClick:$},{default:V((()=>[F("立即投保")])),_:1})):b("",!0)])]),m(y,{show:u(P),"onUpdate:show":e[2]||(e[2]=i=>_(P)?P.value=i:null),title:"标题",style:{height:"100%"}},{default:V((()=>[u(N).productCode?(o(),I(ci,{key:0,class:"content","origin-data":u(N)},null,8,["origin-data"])):b("",!0)])),_:1},8,["show"])]})),_:1})}}}),[["__scopeId","data-v-126a84e7"]]);export{ae as default};
