var Ue=Object.defineProperty,Me=Object.defineProperties;var Ne=Object.getOwnPropertyDescriptors;var Oe=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var Re=(n,a,g)=>a in n?Ue(n,a,{enumerable:!0,configurable:!0,writable:!0,value:g}):n[a]=g,Q=(n,a)=>{for(var g in a||(a={}))we.call(a,g)&&Re(n,g,a[g]);if(Oe)for(var g of Oe(a))$e.call(a,g)&&Re(n,g,a[g]);return n},W=(n,a)=>Me(n,Ne(a));import{g as G,E as N,M as K,aa as qe,_ as U,r as E,j as I,n as _,p as h,m as C,z as F,F as S,G as J,k as O,ab as Ye,J as q,A as e,a4 as Pe,a5 as Te,C as xe,Q as _e,a7 as j,y as $,d as Y,t as R,R as Se,o as je,D as Ge}from"./vendor-06835924.js";import{S as Ke,d as He,e as Qe,f as z,A as We,g as ze,L as Ee,h as Je}from"./trial-cb9ec057.js";import{_ as H,Q as Xe}from"./index-c8256ef6.js";import{u as Ze}from"./useDicData-2e8783db.js";const ei=n=>(Pe("data-v-7d3c3028"),n=n(),Te(),n),ii={class:"com-risk-list-wrapper"},ti=ei(()=>F("div",{class:"popup-title"},"\u9009\u62E9\u9644\u52A0\u9669",-1)),oi={class:"risk-list"},ai={class:"cell-title"},ni={class:"title"},ri={class:"footer-button"},ui=xe("\u786E\u8BA4"),li=G({props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(n,{emit:a}){const g=n,x=N([]),v=N([]),i=N([...g.disabled]),D=K({show:g.show,currentChecked:[...g.modelValue]}),k=(p,s)=>{if(!g.collocationList.length){if(s){D.currentChecked=[];return}D.currentChecked.push(p);return}let V=D.currentChecked,f=i.value;s?(g.collocationList.forEach(r=>{p===r.riskId&&(r.collocationType===2?V=V.filter(t=>t!==r.collocationRiskId||t!==p):r.collocationType===3?(V=V.filter(t=>t!==p),f=f.filter(t=>t!==r.collocationRiskId)):V=V.filter(t=>t!==p))}),D.currentChecked=V,i.value=f):(g.collocationList.forEach(r=>{p===r.riskId&&(s||(r.collocationType===2?V.push(r.collocationRiskId):r.collocationType===3&&f.push(r.collocationRiskId),V.push(p)))}),D.currentChecked.push(...V),i.value=f)},L=p=>{var V,f,r;if(i.value.includes(p))return;const s=D.currentChecked.includes(p);k(p,s),(r=(f=(V=x==null?void 0:x.value)==null?void 0:V[p])==null?void 0:f.toggle)==null||r.call(f)},A=()=>{a("close")},y=()=>{const p=g.riskList.filter(s=>D.currentChecked.includes(s.id));a("update:modelValue",[...new Set(v.value)]),a("finished",p,i.value),a("close")};return qe(()=>{x.value=[]}),U(()=>D.currentChecked,p=>{v.value=p},{deep:!0,immediate:!0}),U(()=>g.modelValue,p=>{v.value=p||[],i.value.push(...p||[])},{deep:!0,immediate:!0}),(p,s)=>{const V=E("van-checkbox"),f=E("VanCell"),r=E("van-cell-group"),t=E("van-checkbox-group"),o=E("VanButton"),d=E("VanPopup");return I(),_("div",ii,[h(d,{show:e(D).show,"onUpdate:show":s[1]||(s[1]=u=>e(D).show=u),title:"\u9009\u62E9\u9644\u52A0\u9669","show-footer":"",round:"",position:"bottom",closeable:"",onClose:A},{default:C(()=>[ti,F("div",oi,[h(t,{modelValue:v.value,"onUpdate:modelValue":s[0]||(s[0]=u=>v.value=u)},{default:C(()=>[h(r,{inset:""},{default:C(()=>[(I(!0),_(S,null,J(n.riskList,u=>(I(),O(f,{key:u.id,title:u.riskName,disabled:i.value.includes(u.id),onClick:l=>L(u.id)},{"right-icon":C(()=>[h(V,{ref_for:!0,ref:l=>x.value[u.id]=l,shape:"square",disabled:i.value.includes(u.id),name:u.id,onClick:Ye(l=>L(u.id),["stop"])},null,8,["disabled","name","onClick"])]),title:C(()=>[F("div",ai,[F("div",ni,q(u.riskName),1)])]),_:2},1032,["title","disabled","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])]),F("div",ri,[h(o,{type:"primary",disabled:!e(D).currentChecked.length,block:"",onClick:y},{default:C(()=>[ui]),_:1},8,["disabled"])])]),_:1},8,["show"])])}}});var si=H(li,[["__scopeId","data-v-7d3c3028"]]);const di={class:"com-personal-info-wrapper"},mi={class:"pro-radio-wrap"},ci={class:"pro-radio-wrap"},fi=G({props:{formInfo:{default:()=>({})},insuredCode:{default:""},factorList:{default:()=>[]},ageRange:{default:()=>[]}},setup(n,{expose:a}){var s,V;const g=n,x=Ze(`${(V=(s=g.insuredCode)==null?void 0:s.toLocaleUpperCase)==null?void 0:V.call(s)}_OCCUPATION`),[v,i]=_e(),D=N(),k=j("source")||{},L=K({formInfo:g.formInfo,occupationalText:"",occupationCodeList:[]}),A=()=>new Promise((f,r)=>{var t;(t=D.value)==null||t.validate().then(()=>{f("")},o=>{var d;(d=D.value)==null||d.scrollToField(o==null?void 0:o[0].name),r()})}),y=f=>{const r=f||[];for(let t=0;t<r.length;t++)for(let o=t+1;o<r.length;o++){const d=r[t].split("_"),u=r[o].split("_"),l=r[t];d[0]===u[0]?d>u&&(r[t]=r[o],r[o]=l):d[0]==="age"&&(r[t]=r[o],r[o]=l)}return r},p=$(()=>{const f=y(g==null?void 0:g.ageRange),r=(l="")=>{const c=+l.split("_")[1],T=l.split("_")[0];return[c,T]},t=r(f[0]),o=r(f[f.length-1]),d=Y().subtract(t[0],t[1]==="age"?"year":"day").format("YYYY-MM-DD");let u=Y().subtract(o[0],o[1]==="age"?"year":"day").format("YYYY-MM-DD");return Y(u).subtract(1,"year").isBefore(d)&&(u=Y(u).subtract(1,"year").add(1,"day").format("YYYY-MM-DD")),{minAge:new Date(u),maxAge:new Date(d)}});return a({validateForm:A,ageRangeObj:p.value}),(f,r)=>{const t=E("VanField"),o=E("ProRadioButton"),d=E("VanForm"),u=E("van-datetime-picker"),l=E("van-popup");return I(),_("div",di,[h(d,{ref_key:"formRef",ref:D,"input-align":"right","error-message-align":"right"},{default:C(()=>[e(k).type==="proposal"&&(e(k).type==="add"||e(k).type==="repeatAdd")||e(k).type!=="proposal"&&(n.factorList.includes("APPLICANT.AGE")||n.factorList.includes("AGE")||n.factorList.includes("DAY")||n.factorList.includes("APPLICANT.DAY"))?(I(),O(t,{key:0,modelValue:e(L).formInfo.birthday,"onUpdate:modelValue":r[0]||(r[0]=c=>e(L).formInfo.birthday=c),rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u51FA\u751F\u65E5\u671F"}],name:"birth",label:"\u51FA\u751F\u65E5\u671F",class:"isLink",readonly:"","is-link":"",formatter:c=>c&&e(Y)(c).format("YYYY-MM-DD"),placeholder:"\u8BF7\u9009\u62E9",onClick:r[1]||(r[1]=c=>e(i)(!0))},null,8,["modelValue","formatter"])):R("",!0),e(k).type==="proposal"&&(e(k).type==="add"||e(k).type==="repeatAdd")||e(k).type!=="proposal"&&(n.factorList.includes("APPLICANT.GENDER")||n.factorList.includes("GENDER"))?(I(),O(t,{key:1,modelValue:e(L).formInfo.gender,"onUpdate:modelValue":r[3]||(r[3]=c=>e(L).formInfo.gender=c),name:"gender",label:"\u6027\u522B",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6027\u522B"}]},{input:C(()=>[F("div",mi,[h(o,{modelValue:e(L).formInfo.gender,"onUpdate:modelValue":r[2]||(r[2]=c=>e(L).formInfo.gender=c),options:e(Ke)},null,8,["modelValue","options"])])]),_:1},8,["modelValue"])):R("",!0),n.factorList.includes("SOCIAL_INS")||n.factorList.includes("APPLICANT.SOCIAL_INS")?(I(),O(t,{key:2,modelValue:e(L).formInfo.socialFlag,"onUpdate:modelValue":r[5]||(r[5]=c=>e(L).formInfo.socialFlag=c),name:"socialFlag",label:"\u793E\u4FDD",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u793E\u4FDD"}]},{input:C(()=>[F("div",ci,[h(o,{modelValue:e(L).formInfo.socialFlag,"onUpdate:modelValue":r[4]||(r[4]=c=>e(L).formInfo.socialFlag=c),options:e(He)},null,8,["modelValue","options"])])]),_:1},8,["modelValue"])):R("",!0),n.factorList.includes("OCCUPATION_CATEGORY")||n.factorList.includes("APPLICANT.OCCUPATION_CATEGORY")?(I(),O(Xe,{key:3,modelValue:e(L).formInfo.occupationCodeList[0],"onUpdate:modelValue":r[6]||(r[6]=c=>e(L).formInfo.occupationCodeList[0]=c),field0:e(L).formInfo.occupationCodeList[0],"onUpdate:field0":r[7]||(r[7]=c=>e(L).formInfo.occupationCodeList[0]=c),field1:e(L).formInfo.occupationCodeList[1],"onUpdate:field1":r[8]||(r[8]=c=>e(L).formInfo.occupationCodeList[1]=c),field2:e(L).formInfo.occupationCodeList[2],"onUpdate:field2":r[9]||(r[9]=c=>e(L).formInfo.occupationCodeList[2]=c),required:"",name:"occupationCodeList",label:"\u804C\u4E1A\u7C7B\u578B","data-source":e(x),mapping:{label:"value",value:"code",children:"children"},"show-full-value":"","need-key":"name"},null,8,["modelValue","field0","field1","field2","data-source"])):R("",!0)]),_:1},512),h(l,{show:e(v),"onUpdate:show":r[12]||(r[12]=c=>Se(v)?v.value=c:null),position:"bottom"},{default:C(()=>[h(u,{type:"date","min-date":e(p).minAge,"max-date":e(p).maxAge,onConfirm:r[10]||(r[10]=c=>{e(L).formInfo.birthday=e(Y)(c).format("YYYY-MM-DD"),e(i)(!1)}),onCancel:r[11]||(r[11]=c=>e(i)(!1))},null,8,["min-date","max-date"])]),_:1},8,["show"])])}}});var Si=H(fi,[["__scopeId","data-v-103cfd8f"]]);const pi={class:"com-risk-card-wrapper part-card"},yi={class:"custom-field"},gi={class:"field-tip"},Ii={class:"custom-field"},Vi={class:"field-tip"},Di={class:"custom-field"},ki={class:"field-tip"},Li={class:"pro-radio-wrap"},bi={class:"pro-radio-wrap"},vi={class:"pro-radio-wrap"},Fi={class:"pro-radio-wrap"},Ci={class:"pro-radio-wrap"},hi={key:0},Ai={key:1,class:"pro-radio-wrap"},Oi={key:9,class:"liab-desc"},Ri=G({props:{originData:{default:()=>({})},formInfo:{default:()=>({})},mainRiskData:{default:()=>({})},mainRiskInfo:{default:()=>({})},index:{default:0},removeRisk:{type:Function,default:()=>{}},removeRiskList:{default:()=>[]},enums:{default:()=>({})}},setup(n){const a=n,g=N({}),x=j("premium")||{};g.value=j("enumList")||{};const v=N({chargePeriod:{disabled:!1,prevent:!1},coveragePeriod:{disabled:!1,prevent:!1},paymentFrequency:{disabled:!1,prevent:!1}}),i=K({formInfo:a.formInfo}),D=t=>typeof t!="boolean"&&!t||Array.isArray(t)&&!t.length?!0:{}.toString.call(t)==="[object Object]"?Object.keys(t).length:!1,k=(t,o,d={})=>{let u=o;return Array.isArray(o)||(u=[`${u}`]),(t||[]).filter(l=>u.includes(`${l.value}`)||u.includes(l.value))},L=$(()=>{var t,o,d,u,l;return((t=a.originData)==null?void 0:t.riskType)===1?k(a.enums.RISK_INSURANCE_PERIOD,((o=a.originData.riskInsureLimitVO)==null?void 0:o.insurancePeriodValueList)||[]):((d=a.originData)==null?void 0:d.periodType)===2?k([{value:"year_1",name:"1\u5E74"}],["year_1"]):k((u=a.enums)==null?void 0:u.RISK_INSURANCE_PERIOD,((l=a.mainRiskData.riskInsureLimitVO)==null?void 0:l.insurancePeriodValueList)||[])}),A=$(()=>{var t,o,d,u,l,c,T,M;return((t=a.originData)==null?void 0:t.riskType)===1?k((o=a==null?void 0:a.enums)==null?void 0:o.RISK_PAYMENT_PERIOD,((d=a.originData.riskInsureLimitVO)==null?void 0:d.paymentPeriodValueList)||[]):((u=a.originData)==null?void 0:u.exemptFlag)===1?k(Qe,[`${(c=(l=a==null?void 0:a.originData)==null?void 0:l.riskInsureLimitVO)==null?void 0:c.paymentPeriodRule}`]):((T=a.originData)==null?void 0:T.periodType)===2?k([{value:"year_1",name:"1\u5E74\u4EA4"}],["year_1"]):k(a.enums.RISK_PAYMENT_PERIOD,((M=a.mainRiskData.riskInsureLimitVO)==null?void 0:M.paymentPeriodValueList)||[])}),y=$(()=>{var t,o,d,u,l;return((t=a.originData)==null?void 0:t.riskType)===1?k(z,((o=a.originData.riskInsureLimitVO)==null?void 0:o.paymentFrequencyList)||[]):((d=a.originData.riskInsureLimitVO)==null?void 0:d.paymentTypeRule)===1?k(z,((u=a.mainRiskData.riskInsureLimitVO)==null?void 0:u.paymentFrequencyList)||[]):k(z,((l=a.mainRiskData.riskInsureLimitVO)==null?void 0:l.paymentFrequencyList)||[])}),p=$(()=>{var d,u;let t=0,o=0;return(((u=(d=a.originData)==null?void 0:d.riskCalcMethodInfoVO)==null?void 0:u.paymentMethodLimitList)||[]).forEach((l,c)=>{c===0&&(t=l.minAmount,o=l.maxAmount),t>l.minAmount&&(t=l.minAmount),o<l.maxAmount&&(o=l.maxAmount)}),i.formInfo.amount=i.formInfo.amount||t,{min:t,max:o||1/0}}),s=$(()=>{var d,u;let t=0,o=0;return(((u=(d=a.originData)==null?void 0:d.riskCalcMethodInfoVO)==null?void 0:u.paymentMethodLimitList)||[]).forEach((l,c)=>{c===0&&(t=l.minPremium,o=l.maxPremium),t>l.minPremium&&(t=l.minPremium),o<l.maxPremium&&(o=l.maxPremium)}),i.formInfo.premium=i.formInfo.premium||t,{min:t,max:o||1/0}}),V=$(()=>{var d,u,l,c;const t=((u=(d=a.originData)==null?void 0:d.riskCalcMethodInfoVO)==null?void 0:u.minCopy)||1,o=(c=(l=a.originData)==null?void 0:l.riskCalcMethodInfoVO)==null?void 0:c.maxCopy;return i.formInfo.copy=`${i.formInfo.copy||t||1}`,{min:t,max:o}}),f=(t,o,d)=>{var l,c;const u=((c=(l=a.originData)==null?void 0:l.riskCalcMethodInfoVO)==null?void 0:c.increaseDecreaseNum)||1;if(d==="sumInsured"){if(p.value.max&&+t>p.value.max)return`\u91D1\u989D\u6700\u5927${p.value.max}\u5143`;if(+t<p.value.min)return`\u91D1\u989D\u6700\u5C0F${p.value.min}\u5143`}else{if(s.value.max&&+t>s.value.max)return`\u91D1\u989D\u6700\u5927${s.value.max}\u5143`;if(+t<s.value.min)return`\u91D1\u989D\u6700\u5C0F${s.value.min}\u5143`}return+t%u===0?"":`\u91D1\u989D\u5FC5\u987B\u662F${u}\u7684\u500D\u6570`},r=t=>{var d;const o=(((d=i.formInfo)==null?void 0:d.liabilityVOList)||[]).find(u=>u.liabilityCode===t.liabilityCode);return o?o.liabilityAttributeValue?o.liabilityAttributeValue:t.optionalFlag!==1?"0":"":""};return je(()=>{var o,d;const t={riskType:a.originData.riskType,riskId:a.originData.id,riskName:a.originData.riskName,riskCode:a.originData.riskCode,mainRiskCode:a.originData.riskType!==1?(o=a.mainRiskData)==null?void 0:o.riskCode:void 0,mainRiskId:a.originData.riskType!==1?(d=a.mainRiskData)==null?void 0:d.id:void 0,riskCategory:a.originData.riskCategory,liabilityVOList:(a.originData.riskLiabilityInfoVOList||[]).map(u=>W(Q({},u),{liabilityAttributeCode:u.liabilityAttributeType,liabilityCode:u.liabilityCode,liabilityRateType:u.liabilityRateType,liabilityAttributeValue:r(u)}))};Object.assign(i==null?void 0:i.formInfo,t)}),U(()=>{var t;return(t=i.formInfo)==null?void 0:t.paymentFrequency},(t=0)=>{var o,d,u;[3].includes(((o=a.originData.riskCalcMethodInfoVO)==null?void 0:o.saleMethod)||0)&&(((u=(d=a.originData)==null?void 0:d.riskCalcMethodInfoVO)==null?void 0:u.paymentMethodLimitList)||[]).forEach(l=>{+l.paymentFrequency==+t&&Object.assign(i.formInfo,{amount:l.perCopyAmount,premium:l.perCopyPremium})}),+t==1&&i.formInfo.chargePeriod!=="single"&&(i.formInfo.chargePeriod="single")}),U(()=>{var t;return(t=i.formInfo)==null?void 0:t.copy},t=>{var o,d;((o=a.originData.riskCalcMethodInfoVO)==null?void 0:o.saleMethod)===4&&(i.formInfo.amount=(d=a.originData.riskCalcMethodInfoVO)==null?void 0:d.fixedAmount)}),U(()=>{var t;return(t=i.formInfo)==null?void 0:t.chargePeriod},t=>{t==="single"&&+(i.formInfo.paymentFrequency||0)!=1&&(i.formInfo.paymentFrequency=1)}),U(()=>a==null?void 0:a.mainRiskInfo,t=>{var o,d,u,l,c,T;t&&a.originData.riskType===2&&(((d=(o=a.originData)==null?void 0:o.riskInsureLimitVO)==null?void 0:d.insurancePeriodRule)===1&&(t.coveragePeriod?v.value.coveragePeriod.disabled=!0:v.value.coveragePeriod.prevent=!0,i.formInfo.coveragePeriod=t.coveragePeriod||""),((l=(u=a.originData)==null?void 0:u.riskInsureLimitVO)==null?void 0:l.paymentPeriodRule)===1&&(t.chargePeriod?v.value.chargePeriod.disabled=!0:v.value.chargePeriod.prevent=!0,i.formInfo.chargePeriod=t.chargePeriod||""),((T=(c=a.originData)==null?void 0:c.riskInsureLimitVO)==null?void 0:T.paymentTypeRule)===1&&(t.paymentFrequency?v.value.paymentFrequency.disabled=!0:v.value.paymentFrequency.prevent=!0,i.formInfo.paymentFrequency=t.paymentFrequency||0))},{immediate:!0,deep:!0}),(t,o)=>{var X,Z,ee,ie,te,oe,ae,ne,re,ue,le,se,de,me,ce,fe,pe,ye,ge,Ie,Ve,De,ke,Le,be,ve,Fe,Ce,he,Ae;const d=E("ProSvg"),u=E("ProTitle"),l=E("VanStepper"),c=E("VanField"),T=E("ProRadioButton"),M=E("ProField"),Be=E("ProExpand");return I(),_("div",pi,[h(u,{"risk-type":n.originData.riskType,title:n.originData.riskName},{default:C(()=>[n.removeRiskList.includes(n.originData.id)?(I(),_("div",{key:0,class:"delete-risk",onClick:o[0]||(o[0]=m=>n.removeRisk(n.originData.id))},[h(d,{name:"img-lajitong",color:"#0d6efe"})])):R("",!0)]),_:1},8,["risk-type","title"]),((X=n.originData.riskCalcMethodInfoVO)==null?void 0:X.saleMethod)===1&&n.originData.exemptFlag===2?(I(),O(c,{key:0,modelValue:e(i).formInfo.amount,"onUpdate:modelValue":o[2]||(o[2]=m=>e(i).formInfo.amount=m),label:"\u4FDD\u989D",name:"amount",rules:[{required:!0,message:"\u8BF7\u586B\u5199"},{trigger:"onChange",validator:(...m)=>f(...m,"sumInsured")}]},{input:C(()=>{var m,b;return[F("div",yi,[h(l,{modelValue:e(i).formInfo.amount,"onUpdate:modelValue":o[1]||(o[1]=P=>e(i).formInfo.amount=P),"input-width":"64px",min:e(p).min,step:((m=n.originData.riskCalcMethodInfoVO)==null?void 0:m.increaseDecreaseNum)||1,max:e(p).max},null,8,["modelValue","min","step","max"]),F("span",gi,q(`\u91D1\u989D\u6700\u4F4E${e(p).min}\u5143\uFF0C\u4E3A${((b=n.originData.riskCalcMethodInfoVO)==null?void 0:b.increaseDecreaseNum)||1}\u7684\u500D\u6570`),1)])]}),_:1},8,["modelValue","rules"])):R("",!0),((ee=(Z=n.originData)==null?void 0:Z.riskCalcMethodInfoVO)==null?void 0:ee.saleMethod)===2?(I(),O(c,{key:1,modelValue:e(i).formInfo.premium,"onUpdate:modelValue":o[4]||(o[4]=m=>e(i).formInfo.premium=m),label:"\u4FDD\u8D39",name:"premium",rules:[{required:!0,message:"\u8BF7\u586B\u5199"},{trigger:"onChange",validator:(...m)=>f(...m,"premium")}]},{input:C(()=>{var m,b,P,B;return[F("div",Ii,[h(l,{modelValue:e(i).formInfo.premium,"onUpdate:modelValue":o[3]||(o[3]=w=>e(i).formInfo.premium=w),step:((b=(m=n.originData)==null?void 0:m.riskCalcMethodInfoVO)==null?void 0:b.increaseDecreaseNum)||1,min:e(s).min,"input-width":"64px",max:e(s).max},null,8,["modelValue","step","min","max"]),F("span",Vi,q(`\u91D1\u989D\u6700\u4F4E${e(s).min}\u5143\uFF0C\u4E3A${((B=(P=n.originData)==null?void 0:P.riskCalcMethodInfoVO)==null?void 0:B.increaseDecreaseNum)||1}\u7684\u500D\u6570`),1)])]}),_:1},8,["modelValue","rules"])):R("",!0),((te=(ie=n.originData)==null?void 0:ie.riskCalcMethodInfoVO)==null?void 0:te.saleMethod)===3||((ae=(oe=n.originData)==null?void 0:oe.riskCalcMethodInfoVO)==null?void 0:ae.saleMethod)===4&&(((re=(ne=n.originData)==null?void 0:ne.riskCalcMethodInfoVO)==null?void 0:re.minCopy)||((le=(ue=n.originData)==null?void 0:ue.riskCalcMethodInfoVO)==null?void 0:le.maxCopy))?(I(),O(c,{key:2,modelValue:e(i).formInfo.copy,"onUpdate:modelValue":o[6]||(o[6]=m=>e(i).formInfo.copy=m),label:"\u6295\u4FDD\u4EFD\u6570",name:"copy",rules:[{required:!0,message:"\u8BF7\u586B\u5199"}]},{input:C(()=>[F("div",Di,[h(l,{modelValue:e(i).formInfo.copy,"onUpdate:modelValue":o[5]||(o[5]=m=>e(i).formInfo.copy=m),step:1,min:e(V).min,max:e(V).max},null,8,["modelValue","min","max"]),F("span",ki,q(`${e(V).min}\u4EFD\u8D77\u8D2D\uFF0C\u6700\u591A\u8D2D\u4E70${e(V).max}\u4EFD`),1)])]),_:1},8,["modelValue"])):R("",!0),(![1].includes(((se=n.originData.riskCalcMethodInfoVO)==null?void 0:se.saleMethod)||0)||((de=n.originData)==null?void 0:de.exemptFlag)===1)&&(n.originData.riskCalcMethodInfoVO.fixedAmount||((ce=e(x))==null?void 0:ce[(me=n.originData)==null?void 0:me.riskCode]))?(I(),O(c,{key:3,label:"\u4FDD\u989D"},{input:C(()=>{var m,b,P,B;return[F("div",null,q(((m=n.originData.riskCalcMethodInfoVO)==null?void 0:m.fixedAmount)||((B=(P=e(x))==null?void 0:P[(b=n.originData)==null?void 0:b.riskCode])==null?void 0:B.amount)),1)]}),_:1})):R("",!0),!D((pe=(fe=n.originData)==null?void 0:fe.riskInsureLimitVO)==null?void 0:pe.insurancePeriodValueList)||!D((ge=(ye=n.originData)==null?void 0:ye.riskInsureLimitVO)==null?void 0:ge.insurancePeriodRule)?(I(),O(M,{key:4,modelValue:e(i).formInfo.coveragePeriod,"onUpdate:modelValue":o[8]||(o[8]=m=>e(i).formInfo.coveragePeriod=m),label:"\u4FDD\u969C\u671F\u95F4",name:"coveragePeriod",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4FDD\u969C\u671F\u95F4"}]},{input:C(()=>[F("div",Li,[h(T,{modelValue:e(i).formInfo.coveragePeriod,"onUpdate:modelValue":o[7]||(o[7]=m=>e(i).formInfo.coveragePeriod=m),disabled:v.value.coveragePeriod.disabled,prevent:v.value.coveragePeriod.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4FDD\u969C\u671F\u95F4":"",options:e(L),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])]),_:1},8,["modelValue"])):R("",!0),!D((Ve=(Ie=n.originData)==null?void 0:Ie.riskInsureLimitVO)==null?void 0:Ve.paymentPeriodValueList)||!D((ke=(De=n.originData)==null?void 0:De.riskInsureLimitVO)==null?void 0:ke.paymentPeriodRule)?(I(),O(M,{key:5,modelValue:e(i).formInfo.chargePeriod,"onUpdate:modelValue":o[10]||(o[10]=m=>e(i).formInfo.chargePeriod=m),label:"\u4EA4\u8D39\u671F\u95F4",name:"chargePeriod",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4EA4\u8D39\u671F\u95F4"}]},{input:C(()=>[F("div",bi,[h(T,{modelValue:e(i).formInfo.chargePeriod,"onUpdate:modelValue":o[9]||(o[9]=m=>e(i).formInfo.chargePeriod=m),disabled:v.value.chargePeriod.disabled,prevent:v.value.chargePeriod.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4EA4\u8D39\u671F\u95F4":"",options:e(A),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])]),_:1},8,["modelValue"])):R("",!0),!D((Le=n.originData.riskInsureLimitVO)==null?void 0:Le.paymentFrequencyList)||!D((be=n.originData.riskInsureLimitVO)==null?void 0:be.paymentPeriodRule)?(I(),O(M,{key:6,modelValue:e(i).formInfo.paymentFrequency,"onUpdate:modelValue":o[12]||(o[12]=m=>e(i).formInfo.paymentFrequency=m),label:"\u4EA4\u8D39\u65B9\u5F0F",name:"paymentFrequency",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4EA4\u8D39\u65B9\u5F0F"}]},{input:C(()=>[F("div",vi,[h(T,{modelValue:e(i).formInfo.paymentFrequency,"onUpdate:modelValue":o[11]||(o[11]=m=>e(i).formInfo.paymentFrequency=m),disabled:v.value.paymentFrequency.disabled,prevent:v.value.paymentFrequency.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4EA4\u8D39\u65B9\u5F0F":"",options:e(y)},null,8,["modelValue","disabled","prevent","options"])])]),_:1},8,["modelValue"])):R("",!0),D((Fe=(ve=n.originData)==null?void 0:ve.riskInsureLimitVO)==null?void 0:Fe.annuityDrawValueList)?R("",!0):(I(),O(M,{key:7,modelValue:e(i).formInfo.annuityDrawDate,"onUpdate:modelValue":o[14]||(o[14]=m=>e(i).formInfo.annuityDrawDate=m),label:"\u9886\u53D6\u65F6\u95F4",name:"annuityDrawDate",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u9886\u53D6\u65F6\u95F4"}]},{input:C(()=>{var m;return[F("div",Fi,[h(T,{modelValue:e(i).formInfo.annuityDrawDate,"onUpdate:modelValue":o[13]||(o[13]=b=>e(i).formInfo.annuityDrawDate=b),options:k(e(We),((m=n.originData.riskInsureLimitVO)==null?void 0:m.annuityDrawValueList)||[])},null,8,["modelValue","options"])])]}),_:1},8,["modelValue"])),D((he=(Ce=n.originData)==null?void 0:Ce.riskInsureLimitVO)==null?void 0:he.annuityDrawFrequencyList)?R("",!0):(I(),O(M,{key:8,modelValue:e(i).formInfo.annuityDrawType,"onUpdate:modelValue":o[16]||(o[16]=m=>e(i).formInfo.annuityDrawType=m),label:"\u9886\u53D6\u65B9\u5F0F",name:"annuityDrawType",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u9886\u53D6\u65B9\u5F0F"}]},{input:C(()=>{var m;return[F("div",Ci,[h(T,{modelValue:e(i).formInfo.annuityDrawType,"onUpdate:modelValue":o[15]||(o[15]=b=>e(i).formInfo.annuityDrawType=b),options:k(e(ze),((m=n.originData.riskInsureLimitVO)==null?void 0:m.annuityDrawFrequencyList)||[])},null,8,["modelValue","options"])])]}),_:1},8,["modelValue"])),(I(!0),_(S,null,J(n.originData.riskLiabilityInfoVOList||[],(m,b)=>(I(),_(S,{key:b},[m.optionalFlag===1&&!D(m.liabilityAttributeValueList)?(I(),O(c,{key:0,modelValue:e(i).formInfo.liabilityVOList[b].liabilityAttributeValue,"onUpdate:modelValue":P=>e(i).formInfo.liabilityVOList[b].liabilityAttributeValue=P,label:m.liabilityName,name:"liabilityAttributeValue",rules:[{required:m.liabilityAttributeValue,message:`\u8BF7\u9009\u62E9${m.liabilityName}`}]},{input:C(()=>{var P,B;return[F("div",null,[D(m.liabilityAttributeValueList)?(I(),_("span",hi,"50\u4E07")):(I(),_("div",Ai,[h(T,{modelValue:e(i).formInfo.liabilityVOList[b].liabilityAttributeValue,"onUpdate:modelValue":w=>e(i).formInfo.liabilityVOList[b].liabilityAttributeValue=w,options:k(e(Ee),(B=(P=n.originData.riskLiabilityInfoVOList)==null?void 0:P[b])==null?void 0:B.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"])]))])]}),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])):R("",!0),m.optionalFlag!==1?(I(),O(c,{key:1,modelValue:e(i).formInfo.liabilityVOList[b].liabilityAttributeValue,"onUpdate:modelValue":P=>e(i).formInfo.liabilityVOList[b].liabilityAttributeValue=P,label:m.liabilityName,name:"liabilityAttributeValue"},{input:C(()=>{var P,B;return[F("div",null,[D(m.liabilityAttributeValueList)?(I(),O(T,{key:0,modelValue:e(i).formInfo.liabilityVOList[b].liabilityAttributeValue,"onUpdate:modelValue":w=>e(i).formInfo.liabilityVOList[b].liabilityAttributeValue=w,options:e(Je)},null,8,["modelValue","onUpdate:modelValue","options"])):(I(),O(T,{key:1,modelValue:e(i).formInfo.liabilityVOList[b].liabilityAttributeValue,"onUpdate:modelValue":w=>e(i).formInfo.liabilityVOList[b].liabilityAttributeValue=w,options:k(e(Ee),(B=(P=n.originData.riskLiabilityInfoVOList)==null?void 0:P[b])==null?void 0:B.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]}),_:2},1032,["modelValue","onUpdate:modelValue","label"])):R("",!0)],64))),128)),((Ae=n.originData)==null?void 0:Ae.relationDesc)?(I(),_("div",Oi,[h(Be,{title:"\u8D23\u4EFB\u6295\u4FDD\u8BF4\u660E"},{default:C(()=>[F("div",null,q(n.originData.relationDesc),1)]),_:1})])):R("",!0)])}}});var Ei=H(Ri,[["__scopeId","data-v-79b27ed6"]]);const Pi=n=>(Pe("data-v-45a0160e"),n=n(),Te(),n),Ti={class:"risk-list-wrapper"},xi={key:0,class:"add-rider-risk"},_i={class:"left-part"},Bi=Pi(()=>F("span",{class:"btn-plus"},"+",-1)),Ui=xe(" \u9644\u52A0\u9669"),Mi=G({props:{riskInfo:{default:()=>({})},originData:{default:()=>[]},pickFactor:{type:Function,default:()=>{}},enums:{default:()=>{}}},setup(n){const a=n,g=j("source")||{},[x,v]=_e(!1);N(null),N(null);const i=K({mainRiskInfo:a.riskInfo,riskInfo:a.riskInfo,requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[],currentRiskList:[]}),D=(A,y)=>{i.currentRiskList=i.currentRiskList.concat(A),i.disabledList=y},k=A=>{Ge.confirm({message:"\u786E\u5B9A\u8981\u5220\u9664\u9644\u52A0\u9669\u4E48\uFF1F",confirmButtonText:"\u5220\u9664"}).then(()=>{var p;const y=[A];(((p=i.mainRiskData)==null?void 0:p.collocationVOList)||[]).forEach(s=>{A===s.riskId&&(s.collocationType===2||s.collocationType===3)&&y.push(s.collocationRiskId)}),i.checkedList=i.checkedList.filter(s=>!y.includes(s)),i.currentRiskList=i.currentRiskList.filter(s=>y.includes(s.id)?(Object.assign(i.riskInfo,{[s.id]:void 0}),!1):!0),i.disabledList=i.disabledList.filter(s=>!y.includes(s))}).catch(()=>{})},L=(A,y)=>{var s,V;const p=(((V=(s=i.riskInfo)==null?void 0:s[y])==null?void 0:V.liabilityVOList)||[]).find(f=>f.liabilityCode===A.liabilityCode);return console.log("currentLiability",p),p?p.liabilityAttributeValue?p.liabilityAttributeValue:A.optionalFlag!==1?"0":"-1":""};return U(()=>i.currentRiskList,A=>{const y=[i.mainRiskData,...A];let p=[],s=[];const V=[];y.forEach((f,r)=>{var o,d,u;const t=((o=f==null?void 0:f.riskCalcMethodInfoVO)==null?void 0:o.riskFactorRelationList)||[];p=p.concat(t.filter(l=>l.factorObject==="insured").map(l=>l.factorCode)),s=s.concat(t.filter(l=>l.factorObject==="holder").map(l=>l.factorCode)),V.push((d=f==null?void 0:f.riskInsureLimitVO)==null?void 0:d.minHolderAge,(u=f==null?void 0:f.riskInsureLimitVO)==null?void 0:u.maxHolderAge)}),(A||[]).forEach(f=>{var t,o;const r={riskType:f.riskType,riskId:f.id,riskCode:f.riskCode,riskName:f.riskName,mainRiskCode:f.riskType!==1?(t=i.mainRiskData)==null?void 0:t.riskCode:void 0,mainRiskId:f.riskType!==1?(o=i.mainRiskData)==null?void 0:o.id:void 0,riskCategory:f.riskCategory,liabilityVOList:(f.riskLiabilityInfoVOList||[]).map(d=>W(Q({},d),{liabilityAttributeCode:d.liabilityAttributeType,liabilityCode:d.liabilityCode,liabilityRateType:d.liabilityRateType,liabilityAttributeValue:L(d,f.id)}))};i.riskInfo[f.id]||Object.assign(i.riskInfo,{[f.id]:r})}),a.pickFactor({insuredFactorList:[...new Set(p)],holderFactorList:[...new Set(s)],ageRange:V})},{deep:!0,immediate:!0}),U(()=>a.riskInfo,A=>{i.mainRiskInfo=Object.values(A||{}).find(y=>(y==null?void 0:y.riskType)===1)||{}},{deep:!0,immediate:!0}),U(()=>a.originData,A=>{let y=[];const p=[];g.origin==="proposal"&&!(g.type==="add"||g.type==="repeatAdd")?((A||[]).forEach(s=>{s.riskType===1&&(i.mainRiskData=s),y.push(s)}),y=y.filter(s=>g.showRiskList.includes(s.id))):(A||[]).forEach(s=>{s.riskType===1?(i.mainRiskData=s,y.push(s)):s.collocationType===2?y.push(s):p.push(s)}),i.riderRiskList=p,i.currentRiskList=y},{deep:!0,immediate:!0}),(A,y)=>{var s,V,f;const p=E("ProCheckButton");return I(),_("div",Ti,[(I(!0),_(S,null,J(e(i).currentRiskList,(r,t)=>(I(),O(Ei,{key:r.id,"form-info":e(i).riskInfo[r.id],index:t,enums:n.enums,"main-risk-data":e(i).mainRiskData,"main-risk-info":e(i).mainRiskInfo,"origin-data":r,"remove-risk":k,"remove-risk-list":e(i).checkedList},null,8,["form-info","index","enums","main-risk-data","main-risk-info","origin-data","remove-risk-list"]))),128)),((s=e(i).riderRiskList)==null?void 0:s.length)-((V=e(i).checkedList)==null?void 0:V.length)&&e(g).origin!=="proposal"?(I(),_("div",xi,[F("span",_i,q(`\u5171\u6709${e(i).riderRiskList.length-e(i).checkedList.length}\u6B3E\u9644\u52A0\u9669\u53EF\u4EE5\u6DFB\u52A0`),1),h(p,{activated:"",class:"btn-rider-risk",onClick:y[0]||(y[0]=r=>e(v)(!0))},{default:C(()=>[Bi,Ui]),_:1})])):R("",!0),e(x)?(I(),O(si,{key:1,modelValue:e(i).checkedList,"onUpdate:modelValue":y[1]||(y[1]=r=>e(i).checkedList=r),show:e(x),disabled:e(i).disabledList,"risk-list":e(i).riderRiskList,"collocation-list":((f=e(i).mainRiskData)==null?void 0:f.collocationVOList)||[],onFinished:D,onClose:y[2]||(y[2]=r=>e(v)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):R("",!0)])}}});var ji=H(Mi,[["__scopeId","data-v-45a0160e"]]);export{Si as P,si as R,ji as a};
