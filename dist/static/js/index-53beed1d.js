var Ue=Object.defineProperty,Me=Object.defineProperties;var Ne=Object.getOwnPropertyDescriptors;var Re=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var Oe=(n,a,g)=>a in n?Ue(n,a,{enumerable:!0,configurable:!0,writable:!0,value:g}):n[a]=g,Q=(n,a)=>{for(var g in a||(a={}))we.call(a,g)&&Oe(n,g,a[g]);if(Re)for(var g of Re(a))$e.call(a,g)&&Oe(n,g,a[g]);return n},W=(n,a)=>Me(n,Ne(a));import{g as G,Q as Pe,E as N,a7 as S,M as K,y as $,d as Y,r as O,j as I,n as _,p as h,m as C,A as e,k as A,t as R,z as F,R as qe,o as Ye,_ as U,J as q,F as j,G as J,aa as Se,ab as je,a4 as Te,a5 as xe,C as _e,D as Ge}from"./vendor-af6fda0a.js";import{S as Ke,a as He,R as Qe,b as z,A as We,c as ze,L as Ee,d as Je}from"./trial-facf6637.js";import{_ as H,c as Xe}from"./index-90bc0951.js";import{u as Ze}from"./useDicData-c20fde8b.js";const ei={class:"com-personal-info-wrapper"},ii={class:"pro-radio-wrap"},ti={class:"pro-radio-wrap"},oi=G({props:{formInfo:{default:()=>({})},insuredCode:{default:""},factorList:{default:()=>[]},ageRange:{default:()=>[]}},setup(n,{expose:a}){var D,f;const g=n,x=Ze(`${(f=(D=g.insuredCode)==null?void 0:D.toLocaleUpperCase)==null?void 0:f.call(D)}_OCCUPATION`),[b,i]=Pe(),k=N(),L=S("source")||{},p=K({formInfo:g.formInfo,occupationalText:"",occupationCodeList:[]}),V=()=>new Promise((y,u)=>{var o;(o=k.value)==null||o.validate().then(()=>{y("")},t=>{var s;(s=k.value)==null||s.scrollToField(t==null?void 0:t[0].name),u()})}),E=y=>{const u=y||[];for(let o=0;o<u.length;o++)for(let t=o+1;t<u.length;t++){const s=u[o].split("_"),r=u[t].split("_"),d=u[o];s[0]===r[0]?s>r&&(u[o]=u[t],u[t]=d):s[0]==="age"&&(u[o]=u[t],u[t]=d)}return u},l=$(()=>{const y=E(g==null?void 0:g.ageRange),u=(d="")=>{const c=+d.split("_")[1],T=d.split("_")[0];return[c,T]},o=u(y[0]),t=u(y[y.length-1]),s=Y().subtract(o[0],o[1]==="age"?"year":"day").format("YYYY-MM-DD");let r=Y().subtract(t[0],t[1]==="age"?"year":"day").format("YYYY-MM-DD");return Y(r).subtract(1,"year").isBefore(s)&&(r=Y(r).subtract(1,"year").add(1,"day").format("YYYY-MM-DD")),{minAge:new Date(r),maxAge:new Date(s)}});return a({validateForm:V,ageRangeObj:l.value}),(y,u)=>{const o=O("VanField"),t=O("ProRadioButton"),s=O("VanForm"),r=O("van-datetime-picker"),d=O("van-popup");return I(),_("div",ei,[h(s,{ref_key:"formRef",ref:k,"input-align":"right","error-message-align":"right"},{default:C(()=>[e(L).type==="proposal"&&(e(L).type==="add"||e(L).type==="repeatAdd")||e(L).type!=="proposal"&&(n.factorList.includes("APPLICANT.AGE")||n.factorList.includes("AGE")||n.factorList.includes("DAY")||n.factorList.includes("APPLICANT.DAY"))?(I(),A(o,{key:0,modelValue:e(p).formInfo.birthday,"onUpdate:modelValue":u[0]||(u[0]=c=>e(p).formInfo.birthday=c),rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u51FA\u751F\u65E5\u671F"}],name:"birth",label:"\u51FA\u751F\u65E5\u671F",class:"isLink",readonly:"","is-link":"",formatter:c=>c&&e(Y)(c).format("YYYY-MM-DD"),placeholder:"\u8BF7\u9009\u62E9",onClick:u[1]||(u[1]=c=>e(i)(!0))},null,8,["modelValue","formatter"])):R("",!0),e(L).type==="proposal"&&(e(L).type==="add"||e(L).type==="repeatAdd")||e(L).type!=="proposal"&&(n.factorList.includes("APPLICANT.GENDER")||n.factorList.includes("GENDER"))?(I(),A(o,{key:1,modelValue:e(p).formInfo.gender,"onUpdate:modelValue":u[3]||(u[3]=c=>e(p).formInfo.gender=c),name:"gender",label:"\u6027\u522B",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6027\u522B"}]},{input:C(()=>[F("div",ii,[h(t,{modelValue:e(p).formInfo.gender,"onUpdate:modelValue":u[2]||(u[2]=c=>e(p).formInfo.gender=c),options:e(Ke)},null,8,["modelValue","options"])])]),_:1},8,["modelValue"])):R("",!0),n.factorList.includes("SOCIAL_INS")||n.factorList.includes("APPLICANT.SOCIAL_INS")?(I(),A(o,{key:2,modelValue:e(p).formInfo.socialFlag,"onUpdate:modelValue":u[5]||(u[5]=c=>e(p).formInfo.socialFlag=c),name:"socialFlag",label:"\u793E\u4FDD",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u793E\u4FDD"}]},{input:C(()=>[F("div",ti,[h(t,{modelValue:e(p).formInfo.socialFlag,"onUpdate:modelValue":u[4]||(u[4]=c=>e(p).formInfo.socialFlag=c),options:e(He)},null,8,["modelValue","options"])])]),_:1},8,["modelValue"])):R("",!0),n.factorList.includes("OCCUPATION_CATEGORY")||n.factorList.includes("APPLICANT.OCCUPATION_CATEGORY")?(I(),A(Xe,{key:3,modelValue:e(p).formInfo.occupationCodeList[0],"onUpdate:modelValue":u[6]||(u[6]=c=>e(p).formInfo.occupationCodeList[0]=c),field0:e(p).formInfo.occupationCodeList[0],"onUpdate:field0":u[7]||(u[7]=c=>e(p).formInfo.occupationCodeList[0]=c),field1:e(p).formInfo.occupationCodeList[1],"onUpdate:field1":u[8]||(u[8]=c=>e(p).formInfo.occupationCodeList[1]=c),field2:e(p).formInfo.occupationCodeList[2],"onUpdate:field2":u[9]||(u[9]=c=>e(p).formInfo.occupationCodeList[2]=c),required:"",name:"occupationCodeList",label:"\u804C\u4E1A\u7C7B\u578B","data-source":e(x),mapping:{label:"value",value:"code",children:"children"},"show-full-value":"","need-key":"name"},null,8,["modelValue","field0","field1","field2","data-source"])):R("",!0)]),_:1},512),h(d,{show:e(b),"onUpdate:show":u[12]||(u[12]=c=>qe(b)?b.value=c:null),position:"bottom"},{default:C(()=>[h(r,{type:"date","min-date":e(l).minAge,"max-date":e(l).maxAge,onConfirm:u[10]||(u[10]=c=>{e(p).formInfo.birthday=e(Y)(c).format("YYYY-MM-DD"),e(i)(!1)}),onCancel:u[11]||(u[11]=c=>e(i)(!1))},null,8,["min-date","max-date"])]),_:1},8,["show"])])}}});var Si=H(oi,[["__scopeId","data-v-103cfd8f"]]);const ai={class:"com-risk-card-wrapper part-card"},ni={class:"custom-field"},ri={class:"field-tip"},ui={class:"custom-field"},li={class:"field-tip"},si={class:"custom-field"},di={class:"field-tip"},mi={class:"pro-radio-wrap"},ci={class:"pro-radio-wrap"},fi={class:"pro-radio-wrap"},pi={class:"pro-radio-wrap"},yi={class:"pro-radio-wrap"},gi={key:0},Ii={key:1,class:"pro-radio-wrap"},Vi={key:9,class:"liab-desc"},Di=G({props:{originData:{default:()=>({})},formInfo:{default:()=>({})},mainRiskData:{default:()=>({})},mainRiskInfo:{default:()=>({})},index:{default:0},removeRisk:{type:Function,default:()=>{}},removeRiskList:{default:()=>[]},enums:{default:()=>({})}},setup(n){const a=n,g=N({}),x=S("premium")||{};g.value=S("enumList")||{};const b=N({chargePeriod:{disabled:!1,prevent:!1},coveragePeriod:{disabled:!1,prevent:!1},paymentFrequency:{disabled:!1,prevent:!1}}),i=K({formInfo:a.formInfo}),k=o=>typeof o!="boolean"&&!o||Array.isArray(o)&&!o.length?!0:{}.toString.call(o)==="[object Object]"?Object.keys(o).length:!1,L=(o,t,s={})=>{let r=t;return Array.isArray(t)||(r=[`${r}`]),(o||[]).filter(d=>r.includes(`${d.value}`)||r.includes(d.value))},p=$(()=>{var o,t,s,r,d;return((o=a.originData)==null?void 0:o.riskType)===1?L(a.enums.RISK_INSURANCE_PERIOD,((t=a.originData.riskInsureLimitVO)==null?void 0:t.insurancePeriodValueList)||[]):((s=a.originData)==null?void 0:s.periodType)===2?L([{value:"year_1",name:"1\u5E74"}],["year_1"]):L((r=a.enums)==null?void 0:r.RISK_INSURANCE_PERIOD,((d=a.mainRiskData.riskInsureLimitVO)==null?void 0:d.insurancePeriodValueList)||[])}),V=$(()=>{var o,t,s,r,d,c,T,M;return((o=a.originData)==null?void 0:o.riskType)===1?L((t=a==null?void 0:a.enums)==null?void 0:t.RISK_PAYMENT_PERIOD,((s=a.originData.riskInsureLimitVO)==null?void 0:s.paymentPeriodValueList)||[]):((r=a.originData)==null?void 0:r.exemptFlag)===1?L(Qe,[`${(c=(d=a==null?void 0:a.originData)==null?void 0:d.riskInsureLimitVO)==null?void 0:c.paymentPeriodRule}`]):((T=a.originData)==null?void 0:T.periodType)===2?L([{value:"year_1",name:"1\u5E74\u4EA4"}],["year_1"]):L(a.enums.RISK_PAYMENT_PERIOD,((M=a.mainRiskData.riskInsureLimitVO)==null?void 0:M.paymentPeriodValueList)||[])}),E=$(()=>{var o,t,s,r,d;return((o=a.originData)==null?void 0:o.riskType)===1?L(z,((t=a.originData.riskInsureLimitVO)==null?void 0:t.paymentFrequencyList)||[]):((s=a.originData.riskInsureLimitVO)==null?void 0:s.paymentTypeRule)===1?L(z,((r=a.mainRiskData.riskInsureLimitVO)==null?void 0:r.paymentFrequencyList)||[]):L(z,((d=a.mainRiskData.riskInsureLimitVO)==null?void 0:d.paymentFrequencyList)||[])}),l=$(()=>{var s,r;let o=0,t=0;return(((r=(s=a.originData)==null?void 0:s.riskCalcMethodInfoVO)==null?void 0:r.paymentMethodLimitList)||[]).forEach((d,c)=>{c===0&&(o=d.minAmount,t=d.maxAmount),o>d.minAmount&&(o=d.minAmount),t<d.maxAmount&&(t=d.maxAmount)}),i.formInfo.amount=i.formInfo.amount||o,{min:o,max:t}}),D=$(()=>{var s,r;let o=0,t=0;return(((r=(s=a.originData)==null?void 0:s.riskCalcMethodInfoVO)==null?void 0:r.paymentMethodLimitList)||[]).forEach((d,c)=>{c===0&&(o=d.minPremium,t=d.maxPremium),o>d.minPremium&&(o=d.minPremium),t<d.maxPremium&&(t=d.maxPremium)}),i.formInfo.premium=i.formInfo.premium||o,{min:o,max:t}}),f=$(()=>{var s,r,d,c;const o=((r=(s=a.originData)==null?void 0:s.riskCalcMethodInfoVO)==null?void 0:r.minCopy)||1,t=(c=(d=a.originData)==null?void 0:d.riskCalcMethodInfoVO)==null?void 0:c.maxCopy;return i.formInfo.copy=`${i.formInfo.copy||o||1}`,{min:o,max:t}}),y=(o,t,s)=>{var d,c;const r=((c=(d=a.originData)==null?void 0:d.riskCalcMethodInfoVO)==null?void 0:c.increaseDecreaseNum)||1;if(s==="sumInsured"){if(l.value.max&&+o>l.value.max)return`\u91D1\u989D\u6700\u5927${l.value.max}\u5143`;if(+o<l.value.min)return`\u91D1\u989D\u6700\u5C0F${l.value.min}\u5143`}else{if(D.value.max&&+o>D.value.max)return`\u91D1\u989D\u6700\u5927${D.value.max}\u5143`;if(+o<D.value.min)return`\u91D1\u989D\u6700\u5C0F${D.value.min}\u5143`}return+o%r===0?"":`\u91D1\u989D\u5FC5\u987B\u662F${r}\u7684\u500D\u6570`},u=o=>{var s;const t=(((s=i.formInfo)==null?void 0:s.liabilityVOList)||[]).find(r=>r.liabilityCode===o.liabilityCode);if(t){if(t.liabilityAttributeValue)return t.liabilityAttributeValue;if(o.optionalFlag!==1)return"0"}return"-1"};return Ye(()=>{var t,s;const o={riskType:a.originData.riskType,riskId:a.originData.id,riskName:a.originData.riskName,riskCode:a.originData.riskCode,mainRiskCode:a.originData.riskType!==1?(t=a.mainRiskData)==null?void 0:t.riskCode:void 0,mainRiskId:a.originData.riskType!==1?(s=a.mainRiskData)==null?void 0:s.id:void 0,riskCategory:a.originData.riskCategory,liabilityVOList:(a.originData.riskLiabilityInfoVOList||[]).map(r=>W(Q({},r),{liabilityAttributeCode:r.liabilityAttributeType,liabilityCode:r.liabilityCode,liabilityRateType:r.liabilityRateType,liabilityAttributeValue:u(r)}))};Object.assign(i==null?void 0:i.formInfo,o)}),U(()=>{var o;return(o=i.formInfo)==null?void 0:o.paymentFrequency},(o=0)=>{var t,s,r;[3].includes(((t=a.originData.riskCalcMethodInfoVO)==null?void 0:t.saleMethod)||0)&&(((r=(s=a.originData)==null?void 0:s.riskCalcMethodInfoVO)==null?void 0:r.paymentMethodLimitList)||[]).forEach(d=>{+d.paymentFrequency==+o&&Object.assign(i.formInfo,{amount:d.perCopyAmount,premium:d.perCopyPremium})}),+o==1&&i.formInfo.chargePeriod!=="single"&&(i.formInfo.chargePeriod="single")}),U(()=>{var o;return(o=i.formInfo)==null?void 0:o.copy},o=>{var t,s;((t=a.originData.riskCalcMethodInfoVO)==null?void 0:t.saleMethod)===4&&(i.formInfo.amount=(s=a.originData.riskCalcMethodInfoVO)==null?void 0:s.fixedAmount)}),U(()=>{var o;return(o=i.formInfo)==null?void 0:o.chargePeriod},o=>{o==="single"&&+(i.formInfo.paymentFrequency||0)!=1&&(i.formInfo.paymentFrequency=1)}),U(()=>a==null?void 0:a.mainRiskInfo,o=>{var t,s,r,d,c,T;o&&a.originData.riskType===2&&(((s=(t=a.originData)==null?void 0:t.riskInsureLimitVO)==null?void 0:s.insurancePeriodRule)===1&&(o.coveragePeriod?b.value.coveragePeriod.disabled=!0:b.value.coveragePeriod.prevent=!0,i.formInfo.coveragePeriod=o.coveragePeriod||""),((d=(r=a.originData)==null?void 0:r.riskInsureLimitVO)==null?void 0:d.paymentPeriodRule)===1&&(o.chargePeriod?b.value.chargePeriod.disabled=!0:b.value.chargePeriod.prevent=!0,i.formInfo.chargePeriod=o.chargePeriod||""),((T=(c=a.originData)==null?void 0:c.riskInsureLimitVO)==null?void 0:T.paymentTypeRule)===1&&(o.paymentFrequency?b.value.paymentFrequency.disabled=!0:b.value.paymentFrequency.prevent=!0,i.formInfo.paymentFrequency=o.paymentFrequency||0))},{immediate:!0,deep:!0}),(o,t)=>{var X,Z,ee,ie,te,oe,ae,ne,re,ue,le,se,de,me,ce,fe,pe,ye,ge,Ie,Ve,De,ke,Le,ve,be,Fe,Ce,he,Ae;const s=O("ProSvg"),r=O("ProTitle"),d=O("VanStepper"),c=O("VanField"),T=O("ProRadioButton"),M=O("ProField"),Be=O("ProExpand");return I(),_("div",ai,[h(r,{"risk-type":n.originData.riskType,title:n.originData.riskName},{default:C(()=>[n.removeRiskList.includes(n.originData.id)?(I(),_("div",{key:0,class:"delete-risk",onClick:t[0]||(t[0]=m=>n.removeRisk(n.originData.id))},[h(s,{name:"delete",color:"#0d6efe"})])):R("",!0)]),_:1},8,["risk-type","title"]),((X=n.originData.riskCalcMethodInfoVO)==null?void 0:X.saleMethod)===1&&n.originData.exemptFlag===2?(I(),A(c,{key:0,modelValue:e(i).formInfo.amount,"onUpdate:modelValue":t[2]||(t[2]=m=>e(i).formInfo.amount=m),label:"\u4FDD\u989D",name:"amount",rules:[{required:!0,message:"\u8BF7\u586B\u5199"},{trigger:"onChange",validator:(...m)=>y(...m,"sumInsured")}]},{input:C(()=>{var m,v;return[F("div",ni,[h(d,{modelValue:e(i).formInfo.amount,"onUpdate:modelValue":t[1]||(t[1]=P=>e(i).formInfo.amount=P),"input-width":"64px",min:e(l).min,step:((m=n.originData.riskCalcMethodInfoVO)==null?void 0:m.increaseDecreaseNum)||1,max:e(l).max},null,8,["modelValue","min","step","max"]),F("span",ri,q(`\u91D1\u989D\u6700\u4F4E${e(l).min}\u5143\uFF0C\u4E3A${((v=n.originData.riskCalcMethodInfoVO)==null?void 0:v.increaseDecreaseNum)||1}\u7684\u500D\u6570`),1)])]}),_:1},8,["modelValue","rules"])):R("",!0),((ee=(Z=n.originData)==null?void 0:Z.riskCalcMethodInfoVO)==null?void 0:ee.saleMethod)===2?(I(),A(c,{key:1,modelValue:e(i).formInfo.premium,"onUpdate:modelValue":t[4]||(t[4]=m=>e(i).formInfo.premium=m),label:"\u4FDD\u8D39",name:"premium",rules:[{required:!0,message:"\u8BF7\u586B\u5199"},{trigger:"onChange",validator:(...m)=>y(...m,"premium")}]},{input:C(()=>{var m,v,P,B;return[F("div",ui,[h(d,{modelValue:e(i).formInfo.premium,"onUpdate:modelValue":t[3]||(t[3]=w=>e(i).formInfo.premium=w),step:((v=(m=n.originData)==null?void 0:m.riskCalcMethodInfoVO)==null?void 0:v.increaseDecreaseNum)||1,min:e(D).min,"input-width":"64px",max:e(D).max},null,8,["modelValue","step","min","max"]),F("span",li,q(`\u91D1\u989D\u6700\u4F4E${e(D).min}\u5143\uFF0C\u4E3A${((B=(P=n.originData)==null?void 0:P.riskCalcMethodInfoVO)==null?void 0:B.increaseDecreaseNum)||1}\u7684\u500D\u6570`),1)])]}),_:1},8,["modelValue","rules"])):R("",!0),((te=(ie=n.originData)==null?void 0:ie.riskCalcMethodInfoVO)==null?void 0:te.saleMethod)===3||((ae=(oe=n.originData)==null?void 0:oe.riskCalcMethodInfoVO)==null?void 0:ae.saleMethod)===4&&(((re=(ne=n.originData)==null?void 0:ne.riskCalcMethodInfoVO)==null?void 0:re.minCopy)||((le=(ue=n.originData)==null?void 0:ue.riskCalcMethodInfoVO)==null?void 0:le.maxCopy))?(I(),A(c,{key:2,modelValue:e(i).formInfo.copy,"onUpdate:modelValue":t[6]||(t[6]=m=>e(i).formInfo.copy=m),label:"\u6295\u4FDD\u4EFD\u6570",name:"copy",rules:[{required:!0,message:"\u8BF7\u586B\u5199"}]},{input:C(()=>[F("div",si,[h(d,{modelValue:e(i).formInfo.copy,"onUpdate:modelValue":t[5]||(t[5]=m=>e(i).formInfo.copy=m),step:1,min:e(f).min,max:e(f).max},null,8,["modelValue","min","max"]),F("span",di,q(`${e(f).min}\u4EFD\u8D77\u8D2D\uFF0C\u6700\u591A\u8D2D\u4E70${e(f).max}\u4EFD`),1)])]),_:1},8,["modelValue"])):R("",!0),(![1].includes(((se=n.originData.riskCalcMethodInfoVO)==null?void 0:se.saleMethod)||0)||((de=n.originData)==null?void 0:de.exemptFlag)===1)&&(n.originData.riskCalcMethodInfoVO.fixedAmount||((ce=e(x))==null?void 0:ce[(me=n.originData)==null?void 0:me.riskCode]))?(I(),A(c,{key:3,label:"\u4FDD\u989D"},{input:C(()=>{var m,v,P,B;return[F("div",null,q(((m=n.originData.riskCalcMethodInfoVO)==null?void 0:m.fixedAmount)||((B=(P=e(x))==null?void 0:P[(v=n.originData)==null?void 0:v.riskCode])==null?void 0:B.amount)),1)]}),_:1})):R("",!0),!k((pe=(fe=n.originData)==null?void 0:fe.riskInsureLimitVO)==null?void 0:pe.insurancePeriodValueList)||!k((ge=(ye=n.originData)==null?void 0:ye.riskInsureLimitVO)==null?void 0:ge.insurancePeriodRule)?(I(),A(M,{key:4,modelValue:e(i).formInfo.coveragePeriod,"onUpdate:modelValue":t[8]||(t[8]=m=>e(i).formInfo.coveragePeriod=m),label:"\u4FDD\u969C\u671F\u95F4",name:"coveragePeriod",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4FDD\u969C\u671F\u95F4"}]},{input:C(()=>[F("div",mi,[h(T,{modelValue:e(i).formInfo.coveragePeriod,"onUpdate:modelValue":t[7]||(t[7]=m=>e(i).formInfo.coveragePeriod=m),disabled:b.value.coveragePeriod.disabled,prevent:b.value.coveragePeriod.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4FDD\u969C\u671F\u95F4":"",options:e(p),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])]),_:1},8,["modelValue"])):R("",!0),!k((Ve=(Ie=n.originData)==null?void 0:Ie.riskInsureLimitVO)==null?void 0:Ve.paymentPeriodValueList)||!k((ke=(De=n.originData)==null?void 0:De.riskInsureLimitVO)==null?void 0:ke.paymentPeriodRule)?(I(),A(M,{key:5,modelValue:e(i).formInfo.chargePeriod,"onUpdate:modelValue":t[10]||(t[10]=m=>e(i).formInfo.chargePeriod=m),label:"\u4EA4\u8D39\u671F\u95F4",name:"chargePeriod",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4EA4\u8D39\u671F\u95F4"}]},{input:C(()=>[F("div",ci,[h(T,{modelValue:e(i).formInfo.chargePeriod,"onUpdate:modelValue":t[9]||(t[9]=m=>e(i).formInfo.chargePeriod=m),disabled:b.value.chargePeriod.disabled,prevent:b.value.chargePeriod.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4EA4\u8D39\u671F\u95F4":"",options:e(V),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])]),_:1},8,["modelValue"])):R("",!0),!k((Le=n.originData.riskInsureLimitVO)==null?void 0:Le.paymentFrequencyList)||!k((ve=n.originData.riskInsureLimitVO)==null?void 0:ve.paymentPeriodRule)?(I(),A(M,{key:6,modelValue:e(i).formInfo.paymentFrequency,"onUpdate:modelValue":t[12]||(t[12]=m=>e(i).formInfo.paymentFrequency=m),label:"\u4EA4\u8D39\u65B9\u5F0F",name:"paymentFrequency",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4EA4\u8D39\u65B9\u5F0F"}]},{input:C(()=>[F("div",fi,[h(T,{modelValue:e(i).formInfo.paymentFrequency,"onUpdate:modelValue":t[11]||(t[11]=m=>e(i).formInfo.paymentFrequency=m),disabled:b.value.paymentFrequency.disabled,prevent:b.value.paymentFrequency.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4EA4\u8D39\u65B9\u5F0F":"",options:e(E)},null,8,["modelValue","disabled","prevent","options"])])]),_:1},8,["modelValue"])):R("",!0),k((Fe=(be=n.originData)==null?void 0:be.riskInsureLimitVO)==null?void 0:Fe.annuityDrawValueList)?R("",!0):(I(),A(M,{key:7,modelValue:e(i).formInfo.annuityDrawDate,"onUpdate:modelValue":t[14]||(t[14]=m=>e(i).formInfo.annuityDrawDate=m),label:"\u9886\u53D6\u65F6\u95F4",name:"annuityDrawDate",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u9886\u53D6\u65F6\u95F4"}]},{input:C(()=>{var m;return[F("div",pi,[h(T,{modelValue:e(i).formInfo.annuityDrawDate,"onUpdate:modelValue":t[13]||(t[13]=v=>e(i).formInfo.annuityDrawDate=v),options:L(e(We),((m=n.originData.riskInsureLimitVO)==null?void 0:m.annuityDrawValueList)||[])},null,8,["modelValue","options"])])]}),_:1},8,["modelValue"])),k((he=(Ce=n.originData)==null?void 0:Ce.riskInsureLimitVO)==null?void 0:he.annuityDrawFrequencyList)?R("",!0):(I(),A(M,{key:8,modelValue:e(i).formInfo.annuityDrawType,"onUpdate:modelValue":t[16]||(t[16]=m=>e(i).formInfo.annuityDrawType=m),label:"\u9886\u53D6\u65B9\u5F0F",name:"annuityDrawType",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u9886\u53D6\u65B9\u5F0F"}]},{input:C(()=>{var m;return[F("div",yi,[h(T,{modelValue:e(i).formInfo.annuityDrawType,"onUpdate:modelValue":t[15]||(t[15]=v=>e(i).formInfo.annuityDrawType=v),options:L(e(ze),((m=n.originData.riskInsureLimitVO)==null?void 0:m.annuityDrawFrequencyList)||[])},null,8,["modelValue","options"])])]}),_:1},8,["modelValue"])),(I(!0),_(j,null,J(n.originData.riskLiabilityInfoVOList||[],(m,v)=>(I(),_(j,{key:v},[m.optionalFlag===1&&!k(m.liabilityAttributeValueList)?(I(),A(c,{key:0,modelValue:e(i).formInfo.liabilityVOList[v].liabilityAttributeValue,"onUpdate:modelValue":P=>e(i).formInfo.liabilityVOList[v].liabilityAttributeValue=P,label:m.liabilityName,name:"liabilityAttributeValue",rules:[{required:m.liabilityAttributeValue,message:`\u8BF7\u9009\u62E9${m.liabilityName}`}]},{input:C(()=>{var P,B;return[F("div",null,[k(m.liabilityAttributeValueList)?(I(),_("span",gi,"50\u4E07")):(I(),_("div",Ii,[h(T,{modelValue:e(i).formInfo.liabilityVOList[v].liabilityAttributeValue,"onUpdate:modelValue":w=>e(i).formInfo.liabilityVOList[v].liabilityAttributeValue=w,options:L(e(Ee),(B=(P=n.originData.riskLiabilityInfoVOList)==null?void 0:P[v])==null?void 0:B.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"])]))])]}),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])):R("",!0),m.optionalFlag!==1?(I(),A(c,{key:1,modelValue:e(i).formInfo.liabilityVOList[v].liabilityAttributeValue,"onUpdate:modelValue":P=>e(i).formInfo.liabilityVOList[v].liabilityAttributeValue=P,label:m.liabilityName,name:"liabilityAttributeValue"},{input:C(()=>{var P,B;return[F("div",null,[k(m.liabilityAttributeValueList)?(I(),A(T,{key:0,modelValue:e(i).formInfo.liabilityVOList[v].liabilityAttributeValue,"onUpdate:modelValue":w=>e(i).formInfo.liabilityVOList[v].liabilityAttributeValue=w,options:e(Je)},null,8,["modelValue","onUpdate:modelValue","options"])):(I(),A(T,{key:1,modelValue:e(i).formInfo.liabilityVOList[v].liabilityAttributeValue,"onUpdate:modelValue":w=>e(i).formInfo.liabilityVOList[v].liabilityAttributeValue=w,options:L(e(Ee),(B=(P=n.originData.riskLiabilityInfoVOList)==null?void 0:P[v])==null?void 0:B.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]}),_:2},1032,["modelValue","onUpdate:modelValue","label"])):R("",!0)],64))),128)),((Ae=n.originData)==null?void 0:Ae.relationDesc)?(I(),_("div",Vi,[h(Be,{title:"\u8D23\u4EFB\u6295\u4FDD\u8BF4\u660E"},{default:C(()=>[F("div",null,q(n.originData.relationDesc),1)]),_:1})])):R("",!0)])}}});var ki=H(Di,[["__scopeId","data-v-50e6104c"]]);const Li=n=>(Te("data-v-7d3c3028"),n=n(),xe(),n),vi={class:"com-risk-list-wrapper"},bi=Li(()=>F("div",{class:"popup-title"},"\u9009\u62E9\u9644\u52A0\u9669",-1)),Fi={class:"risk-list"},Ci={class:"cell-title"},hi={class:"title"},Ai={class:"footer-button"},Ri=_e("\u786E\u8BA4"),Oi=G({props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(n,{emit:a}){const g=n,x=N([]),b=N([]),i=N([...g.disabled]),k=K({show:g.show,currentChecked:[...g.modelValue]}),L=(l,D)=>{if(!g.collocationList.length){if(D){k.currentChecked=[];return}k.currentChecked.push(l);return}let f=k.currentChecked,y=i.value;D?(g.collocationList.forEach(u=>{l===u.riskId&&(u.collocationType===2?f=f.filter(o=>o!==u.collocationRiskId||o!==l):u.collocationType===3?(f=f.filter(o=>o!==l),y=y.filter(o=>o!==u.collocationRiskId)):f=f.filter(o=>o!==l))}),k.currentChecked=f,i.value=y):(g.collocationList.forEach(u=>{l===u.riskId&&(D||(u.collocationType===2?f.push(u.collocationRiskId):u.collocationType===3&&y.push(u.collocationRiskId),f.push(l)))}),k.currentChecked.push(...f),i.value=y)},p=l=>{var f,y,u;if(i.value.includes(l))return;const D=k.currentChecked.includes(l);L(l,D),(u=(y=(f=x==null?void 0:x.value)==null?void 0:f[l])==null?void 0:y.toggle)==null||u.call(y)},V=()=>{a("close")},E=()=>{const l=g.riskList.filter(D=>k.currentChecked.includes(D.id));a("update:modelValue",[...new Set(b.value)]),a("finished",l,i.value),a("close")};return Se(()=>{x.value=[]}),U(()=>k.currentChecked,l=>{b.value=l},{deep:!0,immediate:!0}),U(()=>g.modelValue,l=>{b.value=l||[],i.value.push(...l||[])},{deep:!0,immediate:!0}),(l,D)=>{const f=O("van-checkbox"),y=O("VanCell"),u=O("van-cell-group"),o=O("van-checkbox-group"),t=O("VanButton"),s=O("VanPopup");return I(),_("div",vi,[h(s,{show:e(k).show,"onUpdate:show":D[1]||(D[1]=r=>e(k).show=r),title:"\u9009\u62E9\u9644\u52A0\u9669","show-footer":"",round:"",position:"bottom",closeable:"",onClose:V},{default:C(()=>[bi,F("div",Fi,[h(o,{modelValue:b.value,"onUpdate:modelValue":D[0]||(D[0]=r=>b.value=r)},{default:C(()=>[h(u,{inset:""},{default:C(()=>[(I(!0),_(j,null,J(n.riskList,r=>(I(),A(y,{key:r.id,title:r.riskName,disabled:i.value.includes(r.id),onClick:d=>p(r.id)},{"right-icon":C(()=>[h(f,{ref_for:!0,ref:d=>x.value[r.id]=d,shape:"square",disabled:i.value.includes(r.id),name:r.id,onClick:je(d=>p(r.id),["stop"])},null,8,["disabled","name","onClick"])]),title:C(()=>[F("div",Ci,[F("div",hi,q(r.riskName),1)])]),_:2},1032,["title","disabled","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])]),F("div",Ai,[h(t,{type:"primary",disabled:!e(k).currentChecked.length,block:"",onClick:E},{default:C(()=>[Ri]),_:1},8,["disabled"])])]),_:1},8,["show"])])}}});var Ei=H(Oi,[["__scopeId","data-v-7d3c3028"]]);const Pi=n=>(Te("data-v-5576fa96"),n=n(),xe(),n),Ti={class:"risk-list-wrapper"},xi={key:0,class:"add-rider-risk"},_i={class:"left-part"},Bi=Pi(()=>F("span",{class:"btn-plus"},"+",-1)),Ui=_e(" \u9644\u52A0\u9669"),Mi=G({props:{riskInfo:{default:()=>({})},originData:{default:()=>[]},pickFactor:{type:Function,default:()=>{}},enums:{default:()=>{}}},setup(n){const a=n,g=S("source")||{},[x,b]=Pe(!1);N(null),N(null);const i=K({mainRiskInfo:a.riskInfo,riskInfo:a.riskInfo,requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[],currentRiskList:[]}),k=(p,V)=>{i.currentRiskList=i.currentRiskList.concat(p),i.disabledList=V},L=p=>{Ge.confirm({message:"\u786E\u5B9A\u8981\u5220\u9664\u9644\u52A0\u9669\u4E48\uFF1F",confirmButtonText:"\u5220\u9664"}).then(()=>{var E;const V=[p];(((E=i.mainRiskData)==null?void 0:E.collocationVOList)||[]).forEach(l=>{p===l.riskId&&(l.collocationType===2||l.collocationType===3)&&V.push(l.collocationRiskId)}),i.checkedList=i.checkedList.filter(l=>!V.includes(l)),i.currentRiskList=i.currentRiskList.filter(l=>V.includes(l.id)?(Object.assign(i.riskInfo,{[l.id]:void 0}),!1):!0),i.disabledList=i.disabledList.filter(l=>!V.includes(l))}).catch(()=>{})};return U(()=>i.currentRiskList,p=>{const V=[i.mainRiskData,...p];let E=[],l=[];const D=[];V.forEach((f,y)=>{var o,t,s;const u=((o=f==null?void 0:f.riskCalcMethodInfoVO)==null?void 0:o.riskFactorRelationList)||[];E=E.concat(u.filter(r=>r.factorObject==="insured").map(r=>r.factorCode)),l=l.concat(u.filter(r=>r.factorObject==="holder").map(r=>r.factorCode)),D.push((t=f==null?void 0:f.riskInsureLimitVO)==null?void 0:t.minHolderAge,(s=f==null?void 0:f.riskInsureLimitVO)==null?void 0:s.maxHolderAge)}),(p||[]).forEach(f=>{var u,o;const y={riskType:f.riskType,riskId:f.id,riskCode:f.riskCode,riskName:f.riskName,mainRiskCode:f.riskType!==1?(u=i.mainRiskData)==null?void 0:u.riskCode:void 0,mainRiskId:f.riskType!==1?(o=i.mainRiskData)==null?void 0:o.id:void 0,riskCategory:f.riskCategory,liabilityVOList:(f.riskLiabilityInfoVOList||[]).map(t=>W(Q({},t),{liabilityAttributeCode:t.liabilityAttributeType,liabilityCode:t.liabilityCode,liabilityRateType:t.liabilityRateType}))};i.riskInfo[f.id]||Object.assign(i.riskInfo,{[f.id]:y})}),a.pickFactor({insuredFactorList:[...new Set(E)],holderFactorList:[...new Set(l)],ageRange:D})},{deep:!0,immediate:!0}),U(()=>a.riskInfo,p=>{i.mainRiskInfo=Object.values(p||{}).find(V=>(V==null?void 0:V.riskType)===1)||{}},{deep:!0,immediate:!0}),U(()=>a.originData,p=>{let V=[];const E=[];g.origin==="proposal"&&!(g.type==="add"||g.type==="repeatAdd")?((p||[]).forEach(l=>{l.riskType===1&&(i.mainRiskData=l),V.push(l)}),V=V.filter(l=>g.showRiskList.includes(l.id))):(p||[]).forEach(l=>{l.riskType===1?(i.mainRiskData=l,V.push(l)):l.collocationType===2?V.push(l):E.push(l)}),i.riderRiskList=E,i.currentRiskList=V},{deep:!0,immediate:!0}),(p,V)=>{var l,D,f;const E=O("ProCheckButton");return I(),_("div",Ti,[(I(!0),_(j,null,J(e(i).currentRiskList,(y,u)=>(I(),A(ki,{key:y.id,"form-info":e(i).riskInfo[y.id],index:u,enums:n.enums,"main-risk-data":e(i).mainRiskData,"main-risk-info":e(i).mainRiskInfo,"origin-data":y,"remove-risk":L,"remove-risk-list":e(i).checkedList},null,8,["form-info","index","enums","main-risk-data","main-risk-info","origin-data","remove-risk-list"]))),128)),((l=e(i).riderRiskList)==null?void 0:l.length)-((D=e(i).checkedList)==null?void 0:D.length)&&e(g).origin!=="proposal"?(I(),_("div",xi,[F("span",_i,q(`\u5171\u6709${e(i).riderRiskList.length-e(i).checkedList.length}\u6B3E\u9644\u52A0\u9669\u53EF\u4EE5\u6DFB\u52A0`),1),h(E,{activated:"",class:"btn-rider-risk",onClick:V[0]||(V[0]=y=>e(b)(!0))},{default:C(()=>[Bi,Ui]),_:1})])):R("",!0),e(x)?(I(),A(Ei,{key:1,modelValue:e(i).checkedList,"onUpdate:modelValue":V[1]||(V[1]=y=>e(i).checkedList=y),show:e(x),disabled:e(i).disabledList,"risk-list":e(i).riderRiskList,"collocation-list":((f=e(i).mainRiskData)==null?void 0:f.collocationVOList)||[],onFinished:k,onClose:V[2]||(V[2]=y=>e(b)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):R("",!0)])}}});var ji=H(Mi,[["__scopeId","data-v-5576fa96"]]);export{Si as P,ji as R,Ei as a};
