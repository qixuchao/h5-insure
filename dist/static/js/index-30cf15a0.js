var xe=Object.defineProperty,_e=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var Ae=Object.getOwnPropertySymbols;var Ue=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var Re=(r,a,g)=>a in r?xe(r,a,{enumerable:!0,configurable:!0,writable:!0,value:g}):r[a]=g,H=(r,a)=>{for(var g in a||(a={}))Ue.call(a,g)&&Re(r,g,a[g]);if(Ae)for(var g of Ae(a))Me.call(a,g)&&Re(r,g,a[g]);return r},Q=(r,a)=>_e(r,Be(a));import{g as j,Q as Ee,E as M,a7 as Y,M as G,y as w,d as q,_ as U,r as O,j as I,n as x,p as h,m as F,A as i,k as A,t as R,z as C,R as Ne,o as we,J as $,F as S,G as z,aa as $e,ab as qe,a4 as Ye,a5 as Se,C as Pe,D as je}from"./vendor-af6fda0a.js";import{S as Ge,a as Ke,R as He,b as W,A as Qe,c as We,L as Oe,d as ze}from"./trial-da5ffe58.js";import{_ as K,c as Je}from"./index-0b385cf8.js";import{u as Xe}from"./useDicData-f68644b5.js";const Ze={class:"com-personal-info-wrapper"},ei={class:"pro-radio-wrap"},ii={class:"pro-radio-wrap"},ti=j({props:{formInfo:{default:()=>({})},insuredCode:{default:""},factorList:{default:()=>[]},ageRange:{default:()=>[]}},setup(r,{expose:a}){var k,m;const g=r,T=Xe(`${(m=(k=g.insuredCode)==null?void 0:k.toLocaleUpperCase)==null?void 0:m.call(k)}_OCCUPATION`),[b,t]=Ee(),V=M(),L=Y("source")||{},f=G({formInfo:g.formInfo,occupationalText:"",occupationCodeList:[]}),D=()=>new Promise((p,e)=>{V==null||V.value.validate().then(()=>{p("")},()=>{e()})}),E=p=>{const e=p||[];for(let o=0;o<e.length;o++)for(let l=o+1;l<e.length;l++){const d=e[o].split("_"),n=e[l].split("_"),y=e[o];d[0]===n[0]?d>n&&(e[o]=e[l],e[l]=y):d[0]==="age"&&(e[o]=e[l],e[l]=y)}return e},u=w(()=>{const p=E(g==null?void 0:g.ageRange),e=(y="")=>{const c=+y.split("_")[1],B=y.split("_")[0];return[c,B]},o=e(p[0]),l=e(p[p.length-1]),d=q().subtract(o[0],o[1]==="age"?"year":"day").format("YYYY-MM-DD");let n=q().subtract(l[0],l[1]==="age"?"year":"day").format("YYYY-MM-DD");return q(n).subtract(1,"year").isBefore(d)&&(n=q(n).subtract(1,"year").add(1,"day").format("YYYY-MM-DD")),{minAge:new Date(n),maxAge:new Date(d)}});return U(()=>f.formInfo.occupationCodeList,p=>{console.log("newVal",p)},{deep:!0,immediate:!0}),a({validateForm:D,ageRangeObj:u.value}),(p,e)=>{const o=O("VanField"),l=O("ProRadioButton"),d=O("VanForm"),n=O("van-datetime-picker"),y=O("van-popup");return I(),x("div",Ze,[h(d,{ref_key:"formRef",ref:V,"input-align":"right","error-message-align":"right"},{default:F(()=>[i(L).type==="proposal"&&(i(L).type==="add"||i(L).type==="repeatAdd")||i(L).type!=="proposal"&&(r.factorList.includes("APPLICANT.AGE")||r.factorList.includes("AGE")||r.factorList.includes("DAY")||r.factorList.includes("APPLICANT.DAY"))?(I(),A(o,{key:0,modelValue:i(f).formInfo.birthday,"onUpdate:modelValue":e[0]||(e[0]=c=>i(f).formInfo.birthday=c),rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u51FA\u751F\u65E5\u671F"}],name:"birth",label:"\u51FA\u751F\u65E5\u671F",class:"isLink",readonly:"","is-link":"",formatter:c=>c&&i(q)(c).format("YYYY-MM-DD"),placeholder:"\u8BF7\u9009\u62E9",onClick:e[1]||(e[1]=c=>i(t)(!0))},null,8,["modelValue","formatter"])):R("",!0),i(L).type==="proposal"&&(i(L).type==="add"||i(L).type==="repeatAdd")||i(L).type!=="proposal"&&(r.factorList.includes("APPLICANT.GENDER")||r.factorList.includes("GENDER"))?(I(),A(o,{key:1,modelValue:i(f).formInfo.gender,"onUpdate:modelValue":e[3]||(e[3]=c=>i(f).formInfo.gender=c),name:"gender",label:"\u6027\u522B",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6027\u522B"}]},{input:F(()=>[C("div",ei,[h(l,{modelValue:i(f).formInfo.gender,"onUpdate:modelValue":e[2]||(e[2]=c=>i(f).formInfo.gender=c),options:i(Ge)},null,8,["modelValue","options"])])]),_:1},8,["modelValue"])):R("",!0),r.factorList.includes("SOCIAL_INS")||r.factorList.includes("APPLICANT.SOCIAL_INS")?(I(),A(o,{key:2,modelValue:i(f).formInfo.socialFlag,"onUpdate:modelValue":e[5]||(e[5]=c=>i(f).formInfo.socialFlag=c),name:"socialFlag",label:"\u793E\u4FDD",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u793E\u4FDD"}]},{input:F(()=>[C("div",ii,[h(l,{modelValue:i(f).formInfo.socialFlag,"onUpdate:modelValue":e[4]||(e[4]=c=>i(f).formInfo.socialFlag=c),options:i(Ke)},null,8,["modelValue","options"])])]),_:1},8,["modelValue"])):R("",!0),r.factorList.includes("OCCUPATION_CATEGORY")||r.factorList.includes("APPLICANT.OCCUPATION_CATEGORY")?(I(),A(Je,{key:3,modelValue:i(f).formInfo.occupationCodeList[0],"onUpdate:modelValue":e[6]||(e[6]=c=>i(f).formInfo.occupationCodeList[0]=c),field0:i(f).formInfo.occupationCodeList[0],"onUpdate:field0":e[7]||(e[7]=c=>i(f).formInfo.occupationCodeList[0]=c),field1:i(f).formInfo.occupationCodeList[1],"onUpdate:field1":e[8]||(e[8]=c=>i(f).formInfo.occupationCodeList[1]=c),field2:i(f).formInfo.occupationCodeList[2],"onUpdate:field2":e[9]||(e[9]=c=>i(f).formInfo.occupationCodeList[2]=c),required:"",name:"occupationCodeList",label:"\u804C\u4E1A\u7C7B\u578B","data-source":i(T),mapping:{label:"value",value:"code",children:"children"},"show-full-value":"","need-key":"name"},null,8,["modelValue","field0","field1","field2","data-source"])):R("",!0)]),_:1},512),h(y,{show:i(b),"onUpdate:show":e[12]||(e[12]=c=>Ne(b)?b.value=c:null),position:"bottom"},{default:F(()=>[h(n,{type:"date","min-date":i(u).minAge,"max-date":i(u).maxAge,onConfirm:e[10]||(e[10]=c=>{i(f).formInfo.birthday=i(q)(c).format("YYYY-MM-DD"),i(t)(!1)}),onCancel:e[11]||(e[11]=c=>i(t)(!1))},null,8,["min-date","max-date"])]),_:1},8,["show"])])}}});var $i=K(ti,[["__scopeId","data-v-c1c034f6"]]);const oi={class:"com-risk-card-wrapper part-card"},ai={class:"custom-field"},ni={class:"field-tip"},ri={class:"custom-field"},ui={class:"field-tip"},li={class:"custom-field"},si={class:"field-tip"},di={class:"pro-radio-wrap"},mi={class:"pro-radio-wrap"},ci={class:"pro-radio-wrap"},fi={class:"pro-radio-wrap"},pi={class:"pro-radio-wrap"},yi={key:0},gi={key:1,class:"pro-radio-wrap"},Ii={key:9,class:"liab-desc"},Di=j({props:{originData:{default:()=>({})},formInfo:{default:()=>({})},mainRiskData:{default:()=>({})},mainRiskInfo:{default:()=>({})},index:{default:0},removeRisk:{type:Function,default:()=>{}},removeRiskList:{default:()=>[]},enums:{default:()=>({})}},setup(r){const a=r,g=M({}),T=Y("premium")||{};g.value=Y("enumList")||{};const b=M({chargePeriod:{disabled:!1,prevent:!1},coveragePeriod:{disabled:!1,prevent:!1},paymentFrequency:{disabled:!1,prevent:!1}}),t=G({formInfo:a.formInfo}),V=e=>typeof e!="boolean"&&!e||Array.isArray(e)&&!e.length?!0:{}.toString.call(e)==="[object Object]"?Object.keys(e).length:!1,L=(e,o,l={})=>{let d=o;return Array.isArray(o)||(d=[`${d}`]),(e||[]).filter(n=>d.includes(`${n.value}`)||d.includes(n.value))},f=w(()=>{var e,o,l,d,n;return((e=a.originData)==null?void 0:e.riskType)===1?L(a.enums.RISK_INSURANCE_PERIOD,((o=a.originData.riskInsureLimitVO)==null?void 0:o.insurancePeriodValueList)||[]):((l=a.originData)==null?void 0:l.periodType)===2?L([{value:"year_1",name:"1\u5E74"}],["year_1"]):L((d=a.enums)==null?void 0:d.RISK_INSURANCE_PERIOD,((n=a.mainRiskData.riskInsureLimitVO)==null?void 0:n.insurancePeriodValueList)||[])}),D=w(()=>{var e,o,l,d,n,y,c,B;return((e=a.originData)==null?void 0:e.riskType)===1?L((o=a==null?void 0:a.enums)==null?void 0:o.RISK_PAYMENT_PERIOD,((l=a.originData.riskInsureLimitVO)==null?void 0:l.paymentPeriodValueList)||[]):((d=a.originData)==null?void 0:d.exemptFlag)===1?L(He,[`${(y=(n=a==null?void 0:a.originData)==null?void 0:n.riskInsureLimitVO)==null?void 0:y.paymentPeriodRule}`]):((c=a.originData)==null?void 0:c.periodType)===2?L([{value:"year_1",name:"1\u5E74\u4EA4"}],["year_1"]):L(a.enums.RISK_PAYMENT_PERIOD,((B=a.mainRiskData.riskInsureLimitVO)==null?void 0:B.paymentPeriodValueList)||[])}),E=w(()=>{var e,o,l,d,n;return((e=a.originData)==null?void 0:e.riskType)===1?L(W,((o=a.originData.riskInsureLimitVO)==null?void 0:o.paymentFrequencyList)||[]):((l=a.originData.riskInsureLimitVO)==null?void 0:l.paymentTypeRule)===1?L(W,((d=a.mainRiskData.riskInsureLimitVO)==null?void 0:d.paymentFrequencyList)||[]):L(W,((n=a.mainRiskData.riskInsureLimitVO)==null?void 0:n.paymentFrequencyList)||[])}),u=w(()=>{var l,d;let e=0,o=0;return(((d=(l=a.originData)==null?void 0:l.riskCalcMethodInfoVO)==null?void 0:d.paymentMethodLimitList)||[]).forEach((n,y)=>{y===0&&(e=n.minAmount,o=n.maxAmount),e>n.minAmount&&(e=n.minAmount),o<n.maxAmount&&(o=n.maxAmount)}),t.formInfo.amount=t.formInfo.amount||e,{min:e,max:o}}),k=w(()=>{var l,d;let e=0,o=0;return(((d=(l=a.originData)==null?void 0:l.riskCalcMethodInfoVO)==null?void 0:d.paymentMethodLimitList)||[]).forEach((n,y)=>{y===0&&(e=n.minPremium,o=n.maxPremium),e>n.minPremium&&(e=n.minPremium),o<n.maxPremium&&(o=n.maxPremium)}),t.formInfo.premium=t.formInfo.premium||e,{min:e,max:o}}),m=w(()=>{var l,d,n,y;const e=((d=(l=a.originData)==null?void 0:l.riskCalcMethodInfoVO)==null?void 0:d.minCopy)||1,o=(y=(n=a.originData)==null?void 0:n.riskCalcMethodInfoVO)==null?void 0:y.maxCopy;return t.formInfo.copy=`${t.formInfo.copy||e||1}`,{min:e,max:o}}),p=(e,o,l)=>{var n,y;const d=((y=(n=a.originData)==null?void 0:n.riskCalcMethodInfoVO)==null?void 0:y.increaseDecreaseNum)||1;if(l==="sumInsured"){if(u.value.max&&+e>u.value.max)return`\u91D1\u989D\u6700\u5927${u.value.max}\u5143`;if(+e<u.value.min)return`\u91D1\u989D\u6700\u5C0F${u.value.min}\u5143`}else{if(k.value.max&&+e>k.value.max)return`\u91D1\u989D\u6700\u5927${k.value.max}\u5143`;if(+e<k.value.min)return`\u91D1\u989D\u6700\u5C0F${k.value.min}\u5143`}return+e%d===0?"":`\u91D1\u989D\u5FC5\u987B\u662F${d}\u7684\u500D\u6570`};return we(()=>{var o,l;const e={riskType:a.originData.riskType,riskId:a.originData.id,riskName:a.originData.riskName,riskCode:a.originData.riskCode,mainRiskCode:a.originData.riskType!==1?(o=a.mainRiskData)==null?void 0:o.riskCode:void 0,mainRiskId:a.originData.riskType!==1?(l=a.mainRiskData)==null?void 0:l.id:void 0,riskCategory:a.originData.riskCategory,liabilityVOList:(a.originData.riskLiabilityInfoVOList||[]).map(d=>Q(H({},d),{liabilityAttributeCode:d.liabilityAttributeType,liabilityCode:d.liabilityCode,liabilityRateType:d.liabilityRateType}))};Object.assign(t==null?void 0:t.formInfo,e)}),U(()=>{var e;return(e=t.formInfo)==null?void 0:e.paymentFrequency},(e=0)=>{var o,l,d;[3].includes(((o=a.originData.riskCalcMethodInfoVO)==null?void 0:o.saleMethod)||0)&&(((d=(l=a.originData)==null?void 0:l.riskCalcMethodInfoVO)==null?void 0:d.paymentMethodLimitList)||[]).forEach(n=>{+n.paymentFrequency==+e&&Object.assign(t.formInfo,{amount:n.perCopyAmount,premium:n.perCopyPremium})}),+e==1&&t.formInfo.chargePeriod!=="single"&&(t.formInfo.chargePeriod="single")}),U(()=>{var e;return(e=t.formInfo)==null?void 0:e.copy},e=>{var o,l;((o=a.originData.riskCalcMethodInfoVO)==null?void 0:o.saleMethod)===4&&(t.formInfo.amount=(l=a.originData.riskCalcMethodInfoVO)==null?void 0:l.fixedAmount)}),U(()=>{var e;return(e=t.formInfo)==null?void 0:e.chargePeriod},e=>{e==="single"&&+(t.formInfo.paymentFrequency||0)!=1&&(t.formInfo.paymentFrequency=1)}),U(()=>a==null?void 0:a.mainRiskInfo,e=>{var o,l,d,n,y,c;e&&a.originData.riskType===2&&(((l=(o=a.originData)==null?void 0:o.riskInsureLimitVO)==null?void 0:l.insurancePeriodRule)===1&&(e.coveragePeriod?b.value.coveragePeriod.disabled=!0:b.value.coveragePeriod.prevent=!0,t.formInfo.coveragePeriod=e.coveragePeriod||""),((n=(d=a.originData)==null?void 0:d.riskInsureLimitVO)==null?void 0:n.paymentPeriodRule)===1&&(e.chargePeriod?b.value.chargePeriod.disabled=!0:b.value.chargePeriod.prevent=!0,t.formInfo.chargePeriod=e.chargePeriod||""),((c=(y=a.originData)==null?void 0:y.riskInsureLimitVO)==null?void 0:c.paymentTypeRule)===1&&(e.paymentFrequency?b.value.paymentFrequency.disabled=!0:b.value.paymentFrequency.prevent=!0,t.formInfo.paymentFrequency=e.paymentFrequency||0))},{immediate:!0,deep:!0}),(e,o)=>{var J,X,Z,ee,ie,te,oe,ae,ne,re,ue,le,se,de,me,ce,fe,pe,ye,ge,Ie,De,ke,Ve,Le,ve,be,Fe,Ce,he;const l=O("ProSvg"),d=O("ProTitle"),n=O("VanStepper"),y=O("VanField"),c=O("ProRadioButton"),B=O("ProField"),Te=O("ProExpand");return I(),x("div",oi,[h(d,{"risk-type":r.originData.riskType,title:r.originData.riskName},{default:F(()=>[r.removeRiskList.includes(r.originData.id)?(I(),x("div",{key:0,class:"delete-risk",onClick:o[0]||(o[0]=s=>r.removeRisk(r.originData.id))},[h(l,{name:"delete",color:"#0d6efe"})])):R("",!0)]),_:1},8,["risk-type","title"]),((J=r.originData.riskCalcMethodInfoVO)==null?void 0:J.saleMethod)===1&&r.originData.exemptFlag===2?(I(),A(y,{key:0,modelValue:i(t).formInfo.amount,"onUpdate:modelValue":o[2]||(o[2]=s=>i(t).formInfo.amount=s),label:"\u4FDD\u989D",name:"amount",rules:[{required:!0,message:"\u8BF7\u586B\u5199"},{trigger:"onChange",validator:(...s)=>p(...s,"sumInsured")}]},{input:F(()=>{var s,v;return[C("div",ai,[h(n,{modelValue:i(t).formInfo.amount,"onUpdate:modelValue":o[1]||(o[1]=P=>i(t).formInfo.amount=P),"input-width":"64px",min:i(u).min,step:((s=r.originData.riskCalcMethodInfoVO)==null?void 0:s.increaseDecreaseNum)||1,max:i(u).max},null,8,["modelValue","min","step","max"]),C("span",ni,$(`\u91D1\u989D\u6700\u4F4E${i(u).min}\u5143\uFF0C\u4E3A${((v=r.originData.riskCalcMethodInfoVO)==null?void 0:v.increaseDecreaseNum)||1}\u7684\u500D\u6570`),1)])]}),_:1},8,["modelValue","rules"])):R("",!0),((Z=(X=r.originData)==null?void 0:X.riskCalcMethodInfoVO)==null?void 0:Z.saleMethod)===2?(I(),A(y,{key:1,modelValue:i(t).formInfo.premium,"onUpdate:modelValue":o[4]||(o[4]=s=>i(t).formInfo.premium=s),label:"\u4FDD\u8D39",name:"premium",rules:[{required:!0,message:"\u8BF7\u586B\u5199"},{trigger:"onChange",validator:(...s)=>p(...s,"premium")}]},{input:F(()=>{var s,v,P,_;return[C("div",ri,[h(n,{modelValue:i(t).formInfo.premium,"onUpdate:modelValue":o[3]||(o[3]=N=>i(t).formInfo.premium=N),step:((v=(s=r.originData)==null?void 0:s.riskCalcMethodInfoVO)==null?void 0:v.increaseDecreaseNum)||1,min:i(k).min,"input-width":"64px",max:i(k).max},null,8,["modelValue","step","min","max"]),C("span",ui,$(`\u91D1\u989D\u6700\u4F4E${i(k).min}\u5143\uFF0C\u4E3A${((_=(P=r.originData)==null?void 0:P.riskCalcMethodInfoVO)==null?void 0:_.increaseDecreaseNum)||1}\u7684\u500D\u6570`),1)])]}),_:1},8,["modelValue","rules"])):R("",!0),((ie=(ee=r.originData)==null?void 0:ee.riskCalcMethodInfoVO)==null?void 0:ie.saleMethod)===3||((oe=(te=r.originData)==null?void 0:te.riskCalcMethodInfoVO)==null?void 0:oe.saleMethod)===4&&(((ne=(ae=r.originData)==null?void 0:ae.riskCalcMethodInfoVO)==null?void 0:ne.minCopy)||((ue=(re=r.originData)==null?void 0:re.riskCalcMethodInfoVO)==null?void 0:ue.maxCopy))?(I(),A(y,{key:2,modelValue:i(t).formInfo.copy,"onUpdate:modelValue":o[6]||(o[6]=s=>i(t).formInfo.copy=s),label:"\u6295\u4FDD\u4EFD\u6570",name:"copy",rules:[{required:!0,message:"\u8BF7\u586B\u5199"}]},{input:F(()=>[C("div",li,[h(n,{modelValue:i(t).formInfo.copy,"onUpdate:modelValue":o[5]||(o[5]=s=>i(t).formInfo.copy=s),step:1,min:i(m).min,max:i(m).max},null,8,["modelValue","min","max"]),C("span",si,$(`${i(m).min}\u4EFD\u8D77\u8D2D\uFF0C\u6700\u591A\u8D2D\u4E70${i(m).max}\u4EFD`),1)])]),_:1},8,["modelValue"])):R("",!0),(![1].includes(((le=r.originData.riskCalcMethodInfoVO)==null?void 0:le.saleMethod)||0)||((se=r.originData)==null?void 0:se.exemptFlag)===1)&&(r.originData.riskCalcMethodInfoVO.fixedAmount||((me=i(T))==null?void 0:me[(de=r.originData)==null?void 0:de.riskCode]))?(I(),A(y,{key:3,label:"\u4FDD\u989D"},{input:F(()=>{var s,v,P,_;return[C("div",null,$(((s=r.originData.riskCalcMethodInfoVO)==null?void 0:s.fixedAmount)||((_=(P=i(T))==null?void 0:P[(v=r.originData)==null?void 0:v.riskCode])==null?void 0:_.amount)),1)]}),_:1})):R("",!0),!V((fe=(ce=r.originData)==null?void 0:ce.riskInsureLimitVO)==null?void 0:fe.insurancePeriodValueList)||!V((ye=(pe=r.originData)==null?void 0:pe.riskInsureLimitVO)==null?void 0:ye.insurancePeriodRule)?(I(),A(B,{key:4,modelValue:i(t).formInfo.coveragePeriod,"onUpdate:modelValue":o[8]||(o[8]=s=>i(t).formInfo.coveragePeriod=s),label:"\u4FDD\u969C\u671F\u95F4",name:"coveragePeriod",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4FDD\u969C\u671F\u95F4"}]},{input:F(()=>[C("div",di,[h(c,{modelValue:i(t).formInfo.coveragePeriod,"onUpdate:modelValue":o[7]||(o[7]=s=>i(t).formInfo.coveragePeriod=s),disabled:b.value.coveragePeriod.disabled,prevent:b.value.coveragePeriod.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4FDD\u969C\u671F\u95F4":"",options:i(f),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])]),_:1},8,["modelValue"])):R("",!0),!V((Ie=(ge=r.originData)==null?void 0:ge.riskInsureLimitVO)==null?void 0:Ie.paymentPeriodValueList)||!V((ke=(De=r.originData)==null?void 0:De.riskInsureLimitVO)==null?void 0:ke.paymentPeriodRule)?(I(),A(B,{key:5,modelValue:i(t).formInfo.chargePeriod,"onUpdate:modelValue":o[10]||(o[10]=s=>i(t).formInfo.chargePeriod=s),label:"\u4EA4\u8D39\u671F\u95F4",name:"chargePeriod",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4EA4\u8D39\u671F\u95F4"}]},{input:F(()=>[C("div",mi,[h(c,{modelValue:i(t).formInfo.chargePeriod,"onUpdate:modelValue":o[9]||(o[9]=s=>i(t).formInfo.chargePeriod=s),disabled:b.value.chargePeriod.disabled,prevent:b.value.chargePeriod.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4EA4\u8D39\u671F\u95F4":"",options:i(D),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])]),_:1},8,["modelValue"])):R("",!0),!V((Ve=r.originData.riskInsureLimitVO)==null?void 0:Ve.paymentFrequencyList)||!V((Le=r.originData.riskInsureLimitVO)==null?void 0:Le.paymentPeriodRule)?(I(),A(B,{key:6,modelValue:i(t).formInfo.paymentFrequency,"onUpdate:modelValue":o[12]||(o[12]=s=>i(t).formInfo.paymentFrequency=s),label:"\u4EA4\u8D39\u65B9\u5F0F",name:"paymentFrequency",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4EA4\u8D39\u65B9\u5F0F"}]},{input:F(()=>[C("div",ci,[h(c,{modelValue:i(t).formInfo.paymentFrequency,"onUpdate:modelValue":o[11]||(o[11]=s=>i(t).formInfo.paymentFrequency=s),disabled:b.value.paymentFrequency.disabled,prevent:b.value.paymentFrequency.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4EA4\u8D39\u65B9\u5F0F":"",options:i(E)},null,8,["modelValue","disabled","prevent","options"])])]),_:1},8,["modelValue"])):R("",!0),V((be=(ve=r.originData)==null?void 0:ve.riskInsureLimitVO)==null?void 0:be.annuityDrawValueList)?R("",!0):(I(),A(B,{key:7,modelValue:i(t).formInfo.annuityDrawDate,"onUpdate:modelValue":o[14]||(o[14]=s=>i(t).formInfo.annuityDrawDate=s),label:"\u9886\u53D6\u65F6\u95F4",name:"annuityDrawDate",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u9886\u53D6\u65F6\u95F4"}]},{input:F(()=>{var s;return[C("div",fi,[h(c,{modelValue:i(t).formInfo.annuityDrawDate,"onUpdate:modelValue":o[13]||(o[13]=v=>i(t).formInfo.annuityDrawDate=v),options:L(i(Qe),((s=r.originData.riskInsureLimitVO)==null?void 0:s.annuityDrawValueList)||[])},null,8,["modelValue","options"])])]}),_:1},8,["modelValue"])),V((Ce=(Fe=r.originData)==null?void 0:Fe.riskInsureLimitVO)==null?void 0:Ce.annuityDrawFrequencyList)?R("",!0):(I(),A(B,{key:8,modelValue:i(t).formInfo.annuityDrawType,"onUpdate:modelValue":o[16]||(o[16]=s=>i(t).formInfo.annuityDrawType=s),label:"\u9886\u53D6\u65B9\u5F0F",name:"annuityDrawType",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u9886\u53D6\u65B9\u5F0F"}]},{input:F(()=>{var s;return[C("div",pi,[h(c,{modelValue:i(t).formInfo.annuityDrawType,"onUpdate:modelValue":o[15]||(o[15]=v=>i(t).formInfo.annuityDrawType=v),options:L(i(We),((s=r.originData.riskInsureLimitVO)==null?void 0:s.annuityDrawFrequencyList)||[])},null,8,["modelValue","options"])])]}),_:1},8,["modelValue"])),(I(!0),x(S,null,z(r.originData.riskLiabilityInfoVOList||[],(s,v)=>(I(),x(S,{key:v},[s.optionalFlag===1&&!V(s.liabilityAttributeValueList)?(I(),A(y,{key:0,modelValue:i(t).formInfo.liabilityVOList[v].liabilityAttributeValue,"onUpdate:modelValue":P=>i(t).formInfo.liabilityVOList[v].liabilityAttributeValue=P,label:s.liabilityName,name:"liabilityAttributeValue",rules:[{required:s.liabilityAttributeValue,message:`\u8BF7\u9009\u62E9${s.liabilityName}`}]},{input:F(()=>{var P,_;return[C("div",null,[V(s.liabilityAttributeValueList)?(I(),x("span",yi,"50\u4E07")):(I(),x("div",gi,[h(c,{modelValue:i(t).formInfo.liabilityVOList[v].liabilityAttributeValue,"onUpdate:modelValue":N=>i(t).formInfo.liabilityVOList[v].liabilityAttributeValue=N,options:L(i(Oe),(_=(P=r.originData.riskLiabilityInfoVOList)==null?void 0:P[v])==null?void 0:_.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"])]))])]}),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])):R("",!0),s.optionalFlag!==1?(I(),A(y,{key:1,modelValue:i(t).formInfo.liabilityVOList[v].liabilityAttributeValue,"onUpdate:modelValue":P=>i(t).formInfo.liabilityVOList[v].liabilityAttributeValue=P,label:s.liabilityName,name:"liabilityAttributeValue"},{input:F(()=>{var P,_;return[C("div",null,[V(s.liabilityAttributeValueList)?(I(),A(c,{key:0,modelValue:i(t).formInfo.liabilityVOList[v].liabilityAttributeValue,"onUpdate:modelValue":N=>i(t).formInfo.liabilityVOList[v].liabilityAttributeValue=N,options:i(ze)},null,8,["modelValue","onUpdate:modelValue","options"])):(I(),A(c,{key:1,modelValue:i(t).formInfo.liabilityVOList[v].liabilityAttributeValue,"onUpdate:modelValue":N=>i(t).formInfo.liabilityVOList[v].liabilityAttributeValue=N,options:L(i(Oe),(_=(P=r.originData.riskLiabilityInfoVOList)==null?void 0:P[v])==null?void 0:_.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]}),_:2},1032,["modelValue","onUpdate:modelValue","label"])):R("",!0)],64))),128)),((he=r.originData)==null?void 0:he.relationDesc)?(I(),x("div",Ii,[h(Te,{title:"\u8D23\u4EFB\u6295\u4FDD\u8BF4\u660E"},{default:F(()=>[C("div",null,$(r.originData.relationDesc),1)]),_:1})])):R("",!0)])}}});var ki=K(Di,[["__scopeId","data-v-2be6a30e"]]);const Vi=r=>(Ye("data-v-1f13cbe8"),r=r(),Se(),r),Li={class:"com-risk-list-wrapper"},vi=Vi(()=>C("div",{class:"popup-title"},"\u9009\u62E9\u9644\u52A0\u9669",-1)),bi={class:"risk-list"},Fi={class:"cell-title"},Ci={class:"title"},hi={class:"footer-bar"},Ai=Pe("\u786E\u8BA4"),Ri=j({props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(r,{emit:a}){const g=r,T=M([]),b=M([]),t=M([...g.disabled]),V=G({show:g.show,currentChecked:[...g.modelValue]}),L=(u,k)=>{if(!g.collocationList.length){if(k){V.currentChecked=[];return}V.currentChecked.push(u);return}let m=V.currentChecked,p=t.value;k?(g.collocationList.forEach(e=>{u===e.riskId&&(e.collocationType===2?m=m.filter(o=>o!==e.collocationRiskId||o!==u):e.collocationType===3?(m=m.filter(o=>o!==u),p=p.filter(o=>o!==e.collocationRiskId)):m=m.filter(o=>o!==u))}),V.currentChecked=m,t.value=p):(g.collocationList.forEach(e=>{u===e.riskId&&(k||(e.collocationType===2?m.push(e.collocationRiskId):e.collocationType===3&&p.push(e.collocationRiskId),m.push(u)))}),V.currentChecked.push(...m),t.value=p)},f=u=>{var m,p,e;if(t.value.includes(u))return;const k=V.currentChecked.includes(u);L(u,k),(e=(p=(m=T==null?void 0:T.value)==null?void 0:m[u])==null?void 0:p.toggle)==null||e.call(p)},D=()=>{a("close")},E=()=>{const u=g.riskList.filter(k=>V.currentChecked.includes(k.id));a("update:modelValue",[...new Set(b.value)]),a("finished",u,t.value),a("close")};return $e(()=>{T.value=[]}),U(()=>V.currentChecked,u=>{b.value=u},{deep:!0,immediate:!0}),U(()=>g.modelValue,u=>{b.value=u||[],t.value.push(...u||[])},{deep:!0,immediate:!0}),(u,k)=>{const m=O("van-checkbox"),p=O("VanCell"),e=O("van-cell-group"),o=O("van-checkbox-group"),l=O("VanButton"),d=O("VanPopup");return I(),x("div",Li,[h(d,{show:i(V).show,"onUpdate:show":k[1]||(k[1]=n=>i(V).show=n),title:"\u9009\u62E9\u9644\u52A0\u9669","show-footer":"",round:"",position:"bottom",closeable:"",onClose:D},{default:F(()=>[vi,C("div",bi,[h(o,{modelValue:b.value,"onUpdate:modelValue":k[0]||(k[0]=n=>b.value=n)},{default:F(()=>[h(e,{inset:""},{default:F(()=>[(I(!0),x(S,null,z(r.riskList,n=>(I(),A(p,{key:n.id,title:n.riskName,disabled:t.value.includes(n.id),onClick:y=>f(n.id)},{"right-icon":F(()=>[h(m,{ref_for:!0,ref:y=>T.value[n.id]=y,shape:"square",disabled:t.value.includes(n.id),name:n.id,onClick:qe(y=>f(n.id),["stop"])},null,8,["disabled","name","onClick"])]),title:F(()=>[C("div",Fi,[C("div",Ci,$(n.riskName),1)])]),_:2},1032,["title","disabled","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])]),C("div",hi,[h(l,{type:"primary",disabled:!i(V).currentChecked.length,block:"",onClick:E},{default:F(()=>[Ai]),_:1},8,["disabled"])])]),_:1},8,["show"])])}}});var Oi=K(Ri,[["__scopeId","data-v-1f13cbe8"]]);const Ei={class:"risk-list-wrapper"},Pi={key:0,class:"add-rider-risk"},Ti={class:"left-part"},xi=Pe("+ \u9644\u52A0\u9669"),_i=j({props:{riskInfo:{default:()=>({})},originData:{default:()=>[]},pickFactor:{type:Function,default:()=>{}},enums:{default:()=>{}}},setup(r){const a=r,g=Y("source")||{},[T,b]=Ee(!1);M(null),M(null);const t=G({mainRiskInfo:a.riskInfo,riskInfo:a.riskInfo,requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[],currentRiskList:[]}),V=(f,D)=>{t.currentRiskList=t.currentRiskList.concat(f),t.disabledList=D},L=f=>{je.confirm({message:"\u786E\u5B9A\u8981\u5220\u9664\u9644\u52A0\u9669\u4E48\uFF1F"}).then(()=>{var E;const D=[f];(((E=t.mainRiskData)==null?void 0:E.collocationVOList)||[]).forEach(u=>{f===u.riskId&&(u.collocationType===2||u.collocationType===3)&&D.push(u.collocationRiskId)}),t.checkedList=t.checkedList.filter(u=>!D.includes(u)),t.currentRiskList=t.currentRiskList.filter(u=>D.includes(u.id)?(Object.assign(t.riskInfo,{[u.id]:void 0}),!1):!0),t.disabledList=t.disabledList.filter(u=>!D.includes(u))}).catch(()=>{})};return U(()=>t.currentRiskList,f=>{const D=[t.mainRiskData,...f];let E=[],u=[];const k=[];D.forEach((m,p)=>{var o,l,d;const e=((o=m==null?void 0:m.riskCalcMethodInfoVO)==null?void 0:o.riskFactorRelationList)||[];E=E.concat(e.filter(n=>n.factorObject==="insured").map(n=>n.factorCode)),u=u.concat(e.filter(n=>n.factorObject==="holder").map(n=>n.factorCode)),k.push((l=m==null?void 0:m.riskInsureLimitVO)==null?void 0:l.minHolderAge,(d=m==null?void 0:m.riskInsureLimitVO)==null?void 0:d.maxHolderAge)}),(f||[]).forEach(m=>{var e,o;const p={riskType:m.riskType,riskId:m.id,riskCode:m.riskCode,riskName:m.riskName,mainRiskCode:m.riskType!==1?(e=t.mainRiskData)==null?void 0:e.riskCode:void 0,mainRiskId:m.riskType!==1?(o=t.mainRiskData)==null?void 0:o.id:void 0,riskCategory:m.riskCategory,liabilityVOList:(m.riskLiabilityInfoVOList||[]).map(l=>Q(H({},l),{liabilityAttributeCode:l.liabilityAttributeType,liabilityCode:l.liabilityCode,liabilityRateType:l.liabilityRateType}))};t.riskInfo[m.id]||Object.assign(t.riskInfo,{[m.id]:p})}),a.pickFactor({insuredFactorList:[...new Set(E)],holderFactorList:[...new Set(u)],ageRange:k})},{deep:!0,immediate:!0}),U(()=>a.riskInfo,f=>{t.mainRiskInfo=Object.values(f||{}).find(D=>(D==null?void 0:D.riskType)===1)||{}},{deep:!0,immediate:!0}),U(()=>a.originData,f=>{let D=[];const E=[];g.origin==="proposal"&&!(g.type==="add"||g.type==="repeatAdd")?((f||[]).forEach(u=>{u.riskType===1&&(t.mainRiskData=u),D.push(u)}),D=D.filter(u=>g.showRiskList.includes(u.id))):(f||[]).forEach(u=>{u.riskType===1?(t.mainRiskData=u,D.push(u)):u.collocationType===2?D.push(u):E.push(u)}),t.riderRiskList=E,t.currentRiskList=D},{deep:!0,immediate:!0}),(f,D)=>{var u,k,m;const E=O("ProCheckButton");return I(),x("div",Ei,[(I(!0),x(S,null,z(i(t).currentRiskList,(p,e)=>(I(),A(ki,{key:p.id,"form-info":i(t).riskInfo[p.id],index:e,enums:r.enums,"main-risk-data":i(t).mainRiskData,"main-risk-info":i(t).mainRiskInfo,"origin-data":p,"remove-risk":L,"remove-risk-list":i(t).checkedList},null,8,["form-info","index","enums","main-risk-data","main-risk-info","origin-data","remove-risk-list"]))),128)),((u=i(t).riderRiskList)==null?void 0:u.length)-((k=i(t).checkedList)==null?void 0:k.length)&&i(g).origin!=="proposal"?(I(),x("div",Pi,[C("span",Ti,$(`\u5171\u6709${i(t).riderRiskList.length-i(t).checkedList.length}\u6B3E\u9644\u52A0\u9669\u53EF\u4EE5\u6DFB\u52A0`),1),h(E,{activated:"",onClick:D[0]||(D[0]=p=>i(b)(!0))},{default:F(()=>[xi]),_:1})])):R("",!0),i(T)?(I(),A(Oi,{key:1,modelValue:i(t).checkedList,"onUpdate:modelValue":D[1]||(D[1]=p=>i(t).checkedList=p),show:i(T),disabled:i(t).disabledList,"risk-list":i(t).riderRiskList,"collocation-list":((m=i(t).mainRiskData)==null?void 0:m.collocationVOList)||[],onFinished:V,onClose:D[2]||(D[2]=p=>i(b)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):R("",!0)])}}});var qi=K(_i,[["__scopeId","data-v-1afa9508"]]);export{$i as P,qi as R,Oi as a};
