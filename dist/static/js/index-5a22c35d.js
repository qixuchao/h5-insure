import{b7 as e,_ as i,d as a,r as o,J as l,o as t,an as r,c as n,h as s,f as d,w as u,j as m,g as c,a7 as p,F as f,i as v,e as k,l as y,t as g,n as V,v as I,C as b,q as h,x as L,B as D,b3 as O,X as C,Y as R,S as P,b8 as A,E as _,ad as x,k as T,aM as w,aF as F,y as M,m as U,aW as N,b9 as q,aE as E,V as j,aV as S,ap as Y,aj as $,aG as B,ba as G,aD as K,ae as H,P as J}from"./index-589cf96a.js";import{S as W,d as X,e as z,f as Q,A as Z,g as ee,L as ie,h as ae}from"./trial-72f130b7.js";import{u as oe}from"./useDicData-3a5a0420.js";import{S as le}from"./index-28197414.js";import{P as te}from"./index-80db132e.js";import{i as re,p as ne}from"./trial-b41690d7.js";const se=e({id:"createProposal",state:()=>({proposalInfo:{},trialData:[],excludeProduct:[],proposalId:0}),actions:{setProposalInfo(e){this.$state.proposalInfo=e},setTrialData(e){this.$state.trialData=e},setExcludeProduct(e){this.$state.excludeProduct=e}}});const de={class:"com-risk-list-wrapper"},ue=(e=>(C("data-v-7d3c3028"),e=e(),R(),e))((()=>m("div",{class:"popup-title"},"选择附加险",-1))),me={class:"risk-list"},ce={class:"cell-title"},pe={class:"title"},fe={class:"footer-button"};var ve=i(a({__name:"index",props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:i}){const a=e,C=o([]),R=o([]),P=o([...a.disabled]),A=l({show:a.show,currentChecked:[...a.modelValue]}),_=e=>{var i,o,l;if(P.value.includes(e))return;((e,i)=>{if(!a.collocationList.length)return i?void(A.currentChecked=[]):void A.currentChecked.push(e);let o=A.currentChecked,l=P.value;i?(a.collocationList.forEach((i=>{e===i.riskId&&(2===i.collocationType?o=o.filter((a=>a!==i.collocationRiskId||a!==e)):3===i.collocationType?(o=o.filter((i=>i!==e)),l=l.filter((e=>e!==i.collocationRiskId))):o=o.filter((i=>i!==e)))})),A.currentChecked=o,P.value=l):(a.collocationList.forEach((a=>{e===a.riskId&&(i||(2===a.collocationType?o.push(a.collocationRiskId):3===a.collocationType&&l.push(a.collocationRiskId),o.push(e)))})),A.currentChecked.push(...o),P.value=l)})(e,A.currentChecked.includes(e)),null==(l=null==(o=null==(i=null==C?void 0:C.value)?void 0:i[e])?void 0:o.toggle)||l.call(o)},x=()=>{i("close")},T=()=>{const e=a.riskList.filter((e=>A.currentChecked.includes(e.id)));i("update:modelValue",[...new Set(R.value)]),i("finished",e,P.value),i("close")};return t((()=>{C.value=[]})),r((()=>A.currentChecked),(e=>{R.value=e}),{deep:!0,immediate:!0}),r((()=>a.modelValue),(e=>{R.value=e||[],P.value.push(...e||[])}),{deep:!0,immediate:!0}),(i,a)=>{const o=I,l=b,t=h,r=L,w=D,F=O;return n(),s("div",de,[d(F,{show:c(A).show,"onUpdate:show":a[1]||(a[1]=e=>c(A).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:x},{default:u((()=>[ue,m("div",me,[d(r,{modelValue:c(R),"onUpdate:modelValue":a[0]||(a[0]=e=>p(R)?R.value=e:null)},{default:u((()=>[d(t,{inset:""},{default:u((()=>[(n(!0),s(f,null,v(e.riskList,(e=>(n(),k(l,{key:e.id,title:e.riskName,disabled:c(P).includes(e.id),onClick:i=>_(e.id)},{"right-icon":u((()=>[d(o,{ref_for:!0,ref:i=>c(C)[e.id]=i,shape:"square",disabled:c(P).includes(e.id),name:e.id,onClick:y((i=>_(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:u((()=>[m("div",ce,[m("div",pe,g(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),m("div",fe,[d(w,{type:"primary",disabled:!c(A).currentChecked.length,block:"",onClick:T},{default:u((()=>[V("确认")])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-7d3c3028"]]);const ke={class:"com-personal-info-wrapper"},ye={class:"pro-radio-wrap"},ge={class:"pro-radio-wrap"};var Ve=i(a({__name:"index",props:{formInfo:{default:()=>({})},insuredCode:{default:""},factorList:{default:()=>[]},ageRange:{default:()=>[]}},setup(e,{expose:i}){var a,t;const r=e,f=oe(`${null==(t=null==(a=r.insuredCode)?void 0:a.toLocaleUpperCase)?void 0:t.call(a)}_OCCUPATION`),[v,y]=P(),g=o(),V=A("source")||{},I=l({formInfo:r.formInfo,occupationalText:"",occupationCodeList:[]}),b=_((()=>{const e=(e=>{const i=e||[];for(let a=0,o=i.length;a<o;a++)for(let e=a+1;e<o;e++){const o=i[a].split("_"),l=i[e].split("_"),t=i[a];o[0]===l[0]?o>l&&(i[a]=i[e],i[e]=t):"age"===o[0]&&(i[a]=i[e],i[e]=t)}return i})(null==r?void 0:r.ageRange),i=(e="")=>[+e.split("_")[1],e.split("_")[0]],a=i(e[0]),o=i(e[e.length-1]),l=x().subtract(a[0],"age"===a[1]?"year":"day").format("YYYY-MM-DD");let t=x().subtract(o[0],"age"===o[1]?"year":"day").format("YYYY-MM-DD");return x(t).subtract(1,"year").isBefore(l)&&(t=x(t).subtract(1,"year").add(1,"day").format("YYYY-MM-DD")),{minAge:new Date(t),maxAge:new Date(l)}}));return i({validateForm:()=>new Promise(((e,i)=>{var a;null==(a=g.value)||a.validate().then((()=>{e("")}),(e=>{var a;null==(a=g.value)||a.scrollToField(null==e?void 0:e[0].name),i()}))})),ageRangeObj:b.value}),(i,a)=>{const o=M,l=U,t=N,r=q,h=O;return n(),s("div",ke,[d(t,{ref_key:"formRef",ref:g,"input-align":"right","error-message-align":"right"},{default:u((()=>["proposal"===c(V).type&&("add"===c(V).type||"repeatAdd"===c(V).type)||"proposal"!==c(V).type&&(e.factorList.includes("APPLICANT.AGE")||e.factorList.includes("AGE")||e.factorList.includes("DAY")||e.factorList.includes("APPLICANT.DAY"))?(n(),k(o,{key:0,modelValue:c(I).formInfo.birthday,"onUpdate:modelValue":a[0]||(a[0]=e=>c(I).formInfo.birthday=e),rules:[{required:!0,message:"请选择出生日期"}],name:"birth",label:"出生日期",class:"isLink",readonly:"","is-link":"",formatter:e=>e?c(x)(e).format("YYYY-MM-DD"):e,placeholder:"请选择",onClick:a[1]||(a[1]=e=>c(y)(!0))},null,8,["modelValue","formatter"])):T("",!0),"proposal"===c(V).type&&("add"===c(V).type||"repeatAdd"===c(V).type)||"proposal"!==c(V).type&&(e.factorList.includes("APPLICANT.GENDER")||e.factorList.includes("GENDER"))?(n(),k(o,{key:1,modelValue:c(I).formInfo.gender,"onUpdate:modelValue":a[3]||(a[3]=e=>c(I).formInfo.gender=e),name:"gender",label:"性别",rules:[{required:!0,message:"请选择性别"}]},{input:u((()=>[m("div",ye,[d(l,{modelValue:c(I).formInfo.gender,"onUpdate:modelValue":a[2]||(a[2]=e=>c(I).formInfo.gender=e),options:c(w)},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])):T("",!0),e.factorList.includes("SOCIAL_INS")||e.factorList.includes("APPLICANT.SOCIAL_INS")?(n(),k(o,{key:2,modelValue:c(I).formInfo.socialFlag,"onUpdate:modelValue":a[5]||(a[5]=e=>c(I).formInfo.socialFlag=e),name:"socialFlag",label:"社保",rules:[{required:!0,message:"请选择社保"}]},{input:u((()=>[m("div",ge,[d(l,{modelValue:c(I).formInfo.socialFlag,"onUpdate:modelValue":a[4]||(a[4]=e=>c(I).formInfo.socialFlag=e),options:c(W)},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])):T("",!0),e.factorList.includes("OCCUPATION_CATEGORY")||e.factorList.includes("APPLICANT.OCCUPATION_CATEGORY")?(n(),k(F,{key:3,modelValue:c(I).formInfo.occupationCodeList[0],"onUpdate:modelValue":a[6]||(a[6]=e=>c(I).formInfo.occupationCodeList[0]=e),field0:c(I).formInfo.occupationCodeList[0],"onUpdate:field0":a[7]||(a[7]=e=>c(I).formInfo.occupationCodeList[0]=e),field1:c(I).formInfo.occupationCodeList[1],"onUpdate:field1":a[8]||(a[8]=e=>c(I).formInfo.occupationCodeList[1]=e),field2:c(I).formInfo.occupationCodeList[2],"onUpdate:field2":a[9]||(a[9]=e=>c(I).formInfo.occupationCodeList[2]=e),required:"",name:"occupationCodeList",label:"职业类型","data-source":c(f),mapping:{label:"value",value:"code",children:"children"},"show-full-value":"","need-key":"name"},null,8,["modelValue","field0","field1","field2","data-source"])):T("",!0)])),_:1},512),d(h,{show:c(v),"onUpdate:show":a[12]||(a[12]=e=>p(v)?v.value=e:null),position:"bottom"},{default:u((()=>[d(r,{type:"date","min-date":c(b).minAge,"max-date":c(b).maxAge,onConfirm:a[10]||(a[10]=e=>{c(I).formInfo.birthday=c(x)(e).format("YYYY-MM-DD"),c(y)(!1)}),onCancel:a[11]||(a[11]=e=>c(y)(!1))},null,8,["min-date","max-date"])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-b6a7c104"]]);const Ie={class:"com-risk-card-wrapper part-card"},be={class:"custom-field"},he={class:"field-tip"},Le={class:"custom-field"},De={class:"field-tip"},Oe={class:"custom-field"},Ce={class:"field-tip"},Re={class:"pro-radio-wrap"},Pe={class:"pro-radio-wrap"},Ae={class:"pro-radio-wrap"},_e={class:"pro-radio-wrap"},xe={class:"pro-radio-wrap"},Te={key:0},we={key:1,class:"pro-radio-wrap"},Fe={key:9,class:"liab-desc"};var Me=i(a({__name:"index",props:{originData:{default:()=>({})},formInfo:{default:()=>({})},mainRiskData:{default:()=>({})},mainRiskInfo:{default:()=>({})},index:{default:0},removeRisk:{type:Function,default:()=>{}},removeRiskList:{default:()=>[]},enums:{default:()=>({})}},setup(e){const i=e,a=o({}),t=A("premium")||{};a.value=A("enumList")||{};const p=o({chargePeriod:{disabled:!1,prevent:!1},coveragePeriod:{disabled:!1,prevent:!1},paymentFrequency:{disabled:!1,prevent:!1}}),y=l({formInfo:i.formInfo}),V=e=>"boolean"!=typeof e&&!e||(!(!Array.isArray(e)||e.length)||"[object Object]"==={}.toString.call(e)&&Object.keys(e).length),I=(e,i,a={})=>{let o=i;return Array.isArray(i)||(o=[`${o}`]),(e||[]).filter((e=>o.includes(`${e.value}`)||o.includes(e.value)))},b=_((()=>{var e,a,o,l,t,r,n,s;return 1===(null==(e=i.originData)?void 0:e.riskType)?I(i.enums.RISK_INSURANCE_PERIOD,(null==(a=i.originData.riskInsureLimitVO)?void 0:a.insurancePeriodValueList)||[]):2===(null==(o=i.originData)?void 0:o.periodType)?I([{value:"year_1",name:"1年"}],["year_1"]):1===(null==(l=i.originData)?void 0:l.exemptFlag)?I(X,[`${null==(r=null==(t=null==i?void 0:i.originData)?void 0:t.riskInsureLimitVO)?void 0:r.insurancePeriodRule}`]):I(null==(n=i.enums)?void 0:n.RISK_INSURANCE_PERIOD,(null==(s=i.mainRiskData.riskInsureLimitVO)?void 0:s.insurancePeriodValueList)||[])})),h=_((()=>{var e,a,o,l,t,r,n,s;return 1===(null==(e=i.originData)?void 0:e.riskType)?I(null==(a=null==i?void 0:i.enums)?void 0:a.RISK_PAYMENT_PERIOD,(null==(o=i.originData.riskInsureLimitVO)?void 0:o.paymentPeriodValueList)||[]):1===(null==(l=i.originData)?void 0:l.exemptFlag)?I(z,[`${null==(r=null==(t=null==i?void 0:i.originData)?void 0:t.riskInsureLimitVO)?void 0:r.paymentPeriodRule}`]):2===(null==(n=i.originData)?void 0:n.periodType)?I([{value:"year_1",name:"1年交"}],["year_1"]):I(i.enums.RISK_PAYMENT_PERIOD,(null==(s=i.mainRiskData.riskInsureLimitVO)?void 0:s.paymentPeriodValueList)||[])})),L=_((()=>{var e,a,o,l,t;return 1===(null==(e=i.originData)?void 0:e.riskType)?I(Q,(null==(a=i.originData.riskInsureLimitVO)?void 0:a.paymentFrequencyList)||[]):1===(null==(o=i.originData.riskInsureLimitVO)?void 0:o.paymentTypeRule)?I(Q,(null==(l=i.mainRiskData.riskInsureLimitVO)?void 0:l.paymentFrequencyList)||[]):I(Q,(null==(t=i.mainRiskData.riskInsureLimitVO)?void 0:t.paymentFrequencyList)||[])})),D=_((()=>{var e,a;let o=0,l=0;return((null==(a=null==(e=i.originData)?void 0:e.riskCalcMethodInfoVO)?void 0:a.paymentMethodLimitList)||[]).forEach(((e,i)=>{0===i&&(o=e.minAmount,l=e.maxAmount),o>e.minAmount&&(o=e.minAmount),l<e.maxAmount&&(l=e.maxAmount)})),y.formInfo.amount=y.formInfo.amount||o,{min:o,max:l||1/0}})),O=_((()=>{var e,a;let o=0,l=0;return((null==(a=null==(e=i.originData)?void 0:e.riskCalcMethodInfoVO)?void 0:a.paymentMethodLimitList)||[]).forEach(((e,i)=>{0===i&&(o=e.minPremium,l=e.maxPremium),o>e.minPremium&&(o=e.minPremium),l<e.maxPremium&&(l=e.maxPremium)})),y.formInfo.premium=y.formInfo.premium||o,{min:o,max:l||1/0}})),C=_((()=>{var e,a,o,l;const t=(null==(a=null==(e=i.originData)?void 0:e.riskCalcMethodInfoVO)?void 0:a.minCopy)||1,r=null==(l=null==(o=i.originData)?void 0:o.riskCalcMethodInfoVO)?void 0:l.maxCopy;return y.formInfo.copy=`${y.formInfo.copy||t||1}`,{min:t,max:r}})),R=(e,a,o)=>{var l,t;const r=(null==(t=null==(l=i.originData)?void 0:l.riskCalcMethodInfoVO)?void 0:t.increaseDecreaseNum)||1;if("sumInsured"===o){if(D.value.max&&+e>D.value.max)return`金额最大${D.value.max}元`;if(+e<D.value.min)return`金额最小${D.value.min}元`}else{if(O.value.max&&+e>O.value.max)return`金额最大${O.value.max}元`;if(+e<O.value.min)return`金额最小${O.value.min}元`}return+e%r==0?"":`金额必须是${r}的倍数`},P=e=>{var i;const a=((null==(i=y.formInfo)?void 0:i.liabilityVOList)||[]).find((i=>i.liabilityCode===e.liabilityCode));return a?a.liabilityAttributeValue?a.liabilityAttributeValue:1!==e.optionalFlag?"0":"-1":""};return E((()=>{var e,a,o,l;const t={riskType:i.originData.riskType,riskId:i.originData.id,riskName:i.originData.riskName,riskCode:i.originData.riskCode,amount:y.formInfo.amount,mainRiskCode:1!==i.originData.riskType?null==(e=i.mainRiskData)?void 0:e.riskCode:void 0,mainRiskId:1!==i.originData.riskType?null==(a=i.mainRiskData)?void 0:a.id:void 0,exemptFlag:i.originData.exemptFlag,exemptType:i.originData.exemptType,riskCategory:i.originData.riskCategory,liabilityVOList:(i.originData.riskLiabilityInfoVOList||[]).map((e=>({...e,liabilityAttributeCode:e.liabilityAttributeType,liabilityCode:e.liabilityCode,liabilityRateType:e.liabilityRateType,liabilityAttributeValue:P(e)})))};[1].includes((null==(o=i.originData.riskCalcMethodInfoVO)?void 0:o.saleMethod)||0)&&1!==(null==(l=i.originData)?void 0:l.exemptFlag)||!i.originData.riskCalcMethodInfoVO.fixedAmount||(t.amount=i.originData.riskCalcMethodInfoVO.fixedAmount),Object.assign(y.formInfo,t)})),r((()=>{var e;return null==(e=y.formInfo)?void 0:e.paymentFrequency}),((e=0)=>{var a,o,l;[3].includes((null==(a=i.originData.riskCalcMethodInfoVO)?void 0:a.saleMethod)||0)&&((null==(l=null==(o=i.originData)?void 0:o.riskCalcMethodInfoVO)?void 0:l.paymentMethodLimitList)||[]).forEach((i=>{+i.paymentFrequency==+e&&Object.assign(y.formInfo,{amount:i.perCopyAmount,premium:i.perCopyPremium})})),1==+e&&"single"!==y.formInfo.chargePeriod&&(y.formInfo.chargePeriod="single")})),r((()=>{var e;return null==(e=y.formInfo)?void 0:e.copy}),(e=>{var a,o;4===(null==(a=i.originData.riskCalcMethodInfoVO)?void 0:a.saleMethod)&&(y.formInfo.amount=null==(o=i.originData.riskCalcMethodInfoVO)?void 0:o.fixedAmount)})),r((()=>{var e;return null==(e=y.formInfo)?void 0:e.chargePeriod}),(e=>{"single"===e&&1!=+(y.formInfo.paymentFrequency||0)&&(y.formInfo.paymentFrequency=1)})),r((()=>null==i?void 0:i.mainRiskInfo),(e=>{var a,o,l,t,r,n;e&&2===i.originData.riskType&&(1===(null==(o=null==(a=i.originData)?void 0:a.riskInsureLimitVO)?void 0:o.insurancePeriodRule)&&(e.coveragePeriod?p.value.coveragePeriod.disabled=!0:p.value.coveragePeriod.prevent=!0,y.formInfo.coveragePeriod=e.coveragePeriod||""),1===(null==(t=null==(l=i.originData)?void 0:l.riskInsureLimitVO)?void 0:t.paymentPeriodRule)&&(e.chargePeriod?p.value.chargePeriod.disabled=!0:p.value.chargePeriod.prevent=!0,y.formInfo.chargePeriod=e.chargePeriod||""),1===(null==(n=null==(r=i.originData)?void 0:r.riskInsureLimitVO)?void 0:n.paymentTypeRule)&&(e.paymentFrequency?p.value.paymentFrequency.disabled=!0:p.value.paymentFrequency.prevent=!0,y.formInfo.paymentFrequency=e.paymentFrequency||0))}),{immediate:!0,deep:!0}),(i,a)=>{var o,l,r,P,A,_,x,w,F,N,q,E,$,B,G,K,H,J,W,X,z,Q,oe,re,ne,se,de,ue,me,ce;const pe=j,fe=S,ve=le,ke=M,ye=U,ge=Y;return n(),s("div",Ie,[d(fe,{"risk-type":e.originData.riskType,title:e.originData.riskName},{default:u((()=>[e.removeRiskList.includes(e.originData.id)?(n(),s("div",{key:0,class:"delete-risk",onClick:a[0]||(a[0]=i=>e.removeRisk(e.originData.id))},[d(pe,{name:"img-lajitong",color:"#0d6efe"})])):T("",!0)])),_:1},8,["risk-type","title"]),1===(null==(o=e.originData.riskCalcMethodInfoVO)?void 0:o.saleMethod)&&2===e.originData.exemptFlag?(n(),k(ke,{key:0,modelValue:c(y).formInfo.amount,"onUpdate:modelValue":a[2]||(a[2]=e=>c(y).formInfo.amount=e),label:"保额",name:"amount",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...e)=>R(...e,"sumInsured")}]},{input:u((()=>{var i,o;return[m("div",be,[d(ve,{modelValue:c(y).formInfo.amount,"onUpdate:modelValue":a[1]||(a[1]=e=>c(y).formInfo.amount=e),"input-width":"64px",min:c(D).min,step:(null==(i=e.originData.riskCalcMethodInfoVO)?void 0:i.increaseDecreaseNum)||1,max:c(D).max},null,8,["modelValue","min","step","max"]),m("span",he,g(`金额最低${c(D).min}元，为${(null==(o=e.originData.riskCalcMethodInfoVO)?void 0:o.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):T("",!0),2===(null==(r=null==(l=e.originData)?void 0:l.riskCalcMethodInfoVO)?void 0:r.saleMethod)?(n(),k(ke,{key:1,modelValue:c(y).formInfo.premium,"onUpdate:modelValue":a[4]||(a[4]=e=>c(y).formInfo.premium=e),label:"保费",name:"premium",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...e)=>R(...e,"premium")}]},{input:u((()=>{var i,o,l,t;return[m("div",Le,[d(ve,{modelValue:c(y).formInfo.premium,"onUpdate:modelValue":a[3]||(a[3]=e=>c(y).formInfo.premium=e),step:(null==(o=null==(i=e.originData)?void 0:i.riskCalcMethodInfoVO)?void 0:o.increaseDecreaseNum)||1,min:c(O).min,"input-width":"64px",max:c(O).max},null,8,["modelValue","step","min","max"]),m("span",De,g(`金额最低${c(O).min}元，为${(null==(t=null==(l=e.originData)?void 0:l.riskCalcMethodInfoVO)?void 0:t.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):T("",!0),3===(null==(A=null==(P=e.originData)?void 0:P.riskCalcMethodInfoVO)?void 0:A.saleMethod)||4===(null==(x=null==(_=e.originData)?void 0:_.riskCalcMethodInfoVO)?void 0:x.saleMethod)&&((null==(F=null==(w=e.originData)?void 0:w.riskCalcMethodInfoVO)?void 0:F.minCopy)||(null==(q=null==(N=e.originData)?void 0:N.riskCalcMethodInfoVO)?void 0:q.maxCopy))?(n(),k(ke,{key:2,modelValue:c(y).formInfo.copy,"onUpdate:modelValue":a[6]||(a[6]=e=>c(y).formInfo.copy=e),label:"投保份数",name:"copy",rules:[{required:!0,message:"请填写"}]},{input:u((()=>[m("div",Oe,[d(ve,{modelValue:c(y).formInfo.copy,"onUpdate:modelValue":a[5]||(a[5]=e=>c(y).formInfo.copy=e),step:1,min:c(C).min,max:c(C).max},null,8,["modelValue","min","max"]),m("span",Ce,g(`${c(C).min}份起购，最多购买${c(C).max}份`),1)])])),_:1},8,["modelValue"])):T("",!0),[1].includes((null==(E=e.originData.riskCalcMethodInfoVO)?void 0:E.saleMethod)||0)&&1!==(null==($=e.originData)?void 0:$.exemptFlag)||!e.originData.riskCalcMethodInfoVO.fixedAmount&&!(null==(G=c(t))?void 0:G[null==(B=e.originData)?void 0:B.riskCode])?T("",!0):(n(),k(ke,{key:3,label:"保额"},{input:u((()=>{var i,a,o,l;return[m("div",null,g((null==(i=e.originData.riskCalcMethodInfoVO)?void 0:i.fixedAmount)||(null==(l=null==(o=c(t))?void 0:o[null==(a=e.originData)?void 0:a.riskCode])?void 0:l.amount)),1)]})),_:1})),V(null==(H=null==(K=e.originData)?void 0:K.riskInsureLimitVO)?void 0:H.insurancePeriodValueList)&&V(null==(W=null==(J=e.originData)?void 0:J.riskInsureLimitVO)?void 0:W.insurancePeriodRule)?T("",!0):(n(),k(ge,{key:4,modelValue:c(y).formInfo.coveragePeriod,"onUpdate:modelValue":a[8]||(a[8]=e=>c(y).formInfo.coveragePeriod=e),label:"保障期间",name:"coveragePeriod",rules:[{required:!0,message:"请选择保障期间"}]},{input:u((()=>[m("div",Re,[d(ye,{modelValue:c(y).formInfo.coveragePeriod,"onUpdate:modelValue":a[7]||(a[7]=e=>c(y).formInfo.coveragePeriod=e),disabled:c(p).coveragePeriod.disabled,prevent:c(p).coveragePeriod.prevent?"请先选择主险保障期间":"",options:c(b),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),V(null==(z=null==(X=e.originData)?void 0:X.riskInsureLimitVO)?void 0:z.paymentPeriodValueList)&&V(null==(oe=null==(Q=e.originData)?void 0:Q.riskInsureLimitVO)?void 0:oe.paymentPeriodRule)?T("",!0):(n(),k(ge,{key:5,modelValue:c(y).formInfo.chargePeriod,"onUpdate:modelValue":a[10]||(a[10]=e=>c(y).formInfo.chargePeriod=e),label:"交费期间",name:"chargePeriod",rules:[{required:!0,message:"请选择交费期间"}]},{input:u((()=>[m("div",Pe,[d(ye,{modelValue:c(y).formInfo.chargePeriod,"onUpdate:modelValue":a[9]||(a[9]=e=>c(y).formInfo.chargePeriod=e),disabled:c(p).chargePeriod.disabled,prevent:c(p).chargePeriod.prevent?"请先选择主险交费期间":"",options:c(h),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),V(null==(re=e.originData.riskInsureLimitVO)?void 0:re.paymentFrequencyList)&&V(null==(ne=e.originData.riskInsureLimitVO)?void 0:ne.paymentPeriodRule)?T("",!0):(n(),k(ge,{key:6,modelValue:c(y).formInfo.paymentFrequency,"onUpdate:modelValue":a[12]||(a[12]=e=>c(y).formInfo.paymentFrequency=e),label:"交费方式",name:"paymentFrequency",rules:[{required:!0,message:"请选择交费方式"}]},{input:u((()=>[m("div",Ae,[d(ye,{modelValue:c(y).formInfo.paymentFrequency,"onUpdate:modelValue":a[11]||(a[11]=e=>c(y).formInfo.paymentFrequency=e),disabled:c(p).paymentFrequency.disabled,prevent:c(p).paymentFrequency.prevent?"请先选择主险交费方式":"",options:c(L)},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),V(null==(de=null==(se=e.originData)?void 0:se.riskInsureLimitVO)?void 0:de.annuityDrawValueList)?T("",!0):(n(),k(ge,{key:7,modelValue:c(y).formInfo.annuityDrawDate,"onUpdate:modelValue":a[14]||(a[14]=e=>c(y).formInfo.annuityDrawDate=e),label:"领取时间",name:"annuityDrawDate"},{input:u((()=>{var i;return[m("div",_e,[d(ye,{modelValue:c(y).formInfo.annuityDrawDate,"onUpdate:modelValue":a[13]||(a[13]=e=>c(y).formInfo.annuityDrawDate=e),options:I(c(Z),(null==(i=e.originData.riskInsureLimitVO)?void 0:i.annuityDrawValueList)||[])},null,8,["modelValue","options"])])]})),_:1},8,["modelValue"])),V(null==(me=null==(ue=e.originData)?void 0:ue.riskInsureLimitVO)?void 0:me.annuityDrawFrequencyList)?T("",!0):(n(),k(ge,{key:8,modelValue:c(y).formInfo.annuityDrawType,"onUpdate:modelValue":a[16]||(a[16]=e=>c(y).formInfo.annuityDrawType=e),label:"领取方式",name:"annuityDrawType"},{input:u((()=>{var i;return[m("div",xe,[d(ye,{modelValue:c(y).formInfo.annuityDrawType,"onUpdate:modelValue":a[15]||(a[15]=e=>c(y).formInfo.annuityDrawType=e),options:I(c(ee),(null==(i=e.originData.riskInsureLimitVO)?void 0:i.annuityDrawFrequencyList)||[])},null,8,["modelValue","options"])])]})),_:1},8,["modelValue"])),(n(!0),s(f,null,v(e.originData.riskLiabilityInfoVOList||[],((i,a)=>(n(),s(f,{key:a},[1!==i.optionalFlag||V(i.liabilityAttributeValueList)?T("",!0):(n(),k(ke,{key:0,modelValue:c(y).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>c(y).formInfo.liabilityVOList[a].liabilityAttributeValue=e,label:i.liabilityName,name:"liabilityAttributeValue",rules:[{required:i.liabilityAttributeValue,message:`请选择${i.liabilityName}`}]},{input:u((()=>{var o,l;return[m("div",null,[V(i.liabilityAttributeValueList)?(n(),s("span",Te,"50万")):(n(),s("div",we,[d(ye,{modelValue:c(y).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>c(y).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:I(c(ie),null==(l=null==(o=e.originData.riskLiabilityInfoVOList)?void 0:o[a])?void 0:l.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"])]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])),1!==i.optionalFlag?(n(),k(ke,{key:1,modelValue:c(y).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>c(y).formInfo.liabilityVOList[a].liabilityAttributeValue=e,label:i.liabilityName,name:"liabilityAttributeValue"},{input:u((()=>{var o,l;return[m("div",null,[V(i.liabilityAttributeValueList)?(n(),k(ye,{key:0,modelValue:c(y).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>c(y).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:c(ae)},null,8,["modelValue","onUpdate:modelValue","options"])):(n(),k(ye,{key:1,modelValue:c(y).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>c(y).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:I(c(ie),null==(l=null==(o=e.originData.riskLiabilityInfoVOList)?void 0:o[a])?void 0:l.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label"])):T("",!0)],64)))),128)),(null==(ce=e.originData)?void 0:ce.relationDesc)?(n(),s("div",Fe,[d(te,{title:"责任投保说明"},{default:u((()=>[m("div",null,g(e.originData.relationDesc),1)])),_:1})])):T("",!0)])}}}),[["__scopeId","data-v-3b9c2786"]]);const Ue={class:"risk-list-wrapper"},Ne={key:0,class:"add-rider-risk"},qe={class:"left-part"},Ee=(e=>(C("data-v-4e393d2a"),e=e(),R(),e))((()=>m("span",{class:"btn-plus"},"+",-1)));var je=i(a({__name:"index",props:{riskInfo:{default:()=>({})},originData:{default:()=>[]},pickFactor:{type:Function,default:()=>{}},enums:{default:()=>{}}},setup(e){const i=e,a=A("source")||{},[t,p]=P(!1);o(null),o(null);const y=l({mainRiskInfo:i.riskInfo,riskInfo:i.riskInfo,requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[],currentRiskList:[]}),I=(e,i)=>{y.currentRiskList=y.currentRiskList.concat(e),y.disabledList=i},b=e=>{$.confirm({message:"确定要删除附加险么？",confirmButtonText:"删除"}).then((()=>{var i;const a=[e];((null==(i=y.mainRiskData)?void 0:i.collocationVOList)||[]).forEach((i=>{e!==i.riskId||2!==i.collocationType&&3!==i.collocationType||a.push(i.collocationRiskId)})),y.checkedList=y.checkedList.filter((e=>!a.includes(e))),y.currentRiskList=y.currentRiskList.filter((e=>!a.includes(e.id)||(Object.assign(y.riskInfo,{[e.id]:void 0}),!1))),y.disabledList=y.disabledList.filter((e=>!a.includes(e)))})).catch((()=>{}))},h=(e,i)=>{var a,o;const l=((null==(o=null==(a=y.riskInfo)?void 0:a[i])?void 0:o.liabilityVOList)||[]).find((i=>i.liabilityCode===e.liabilityCode));return l?l.liabilityAttributeValue?l.liabilityAttributeValue:1!==e.optionalFlag?"0":"-1":""};return r((()=>y.currentRiskList),(e=>{const a=[y.mainRiskData,...e];let o=[],l=[];const t=[];a.forEach(((e,i)=>{var a,r,n;const s=(null==(a=null==e?void 0:e.riskCalcMethodInfoVO)?void 0:a.riskFactorRelationList)||[];o=o.concat(s.filter((e=>"insured"===e.factorObject)).map((e=>e.factorCode))),l=l.concat(s.filter((e=>"holder"===e.factorObject)).map((e=>e.factorCode))),t.push(null==(r=null==e?void 0:e.riskInsureLimitVO)?void 0:r.minHolderAge,null==(n=null==e?void 0:e.riskInsureLimitVO)?void 0:n.maxHolderAge)})),(e||[]).forEach((e=>{var a,o;const l={riskType:e.riskType,riskId:e.id,riskCode:e.riskCode,riskName:e.riskName,mainRiskCode:1!==e.riskType?null==(a=y.mainRiskData)?void 0:a.riskCode:void 0,mainRiskId:1!==e.riskType?null==(o=y.mainRiskData)?void 0:o.id:void 0,riskCategory:e.riskCategory,exemptFlag:i.originData.exemptFlag,exemptType:i.originData.exemptType,liabilityVOList:(e.riskLiabilityInfoVOList||[]).map((i=>({...i,liabilityAttributeCode:i.liabilityAttributeType,liabilityCode:i.liabilityCode,liabilityRateType:i.liabilityRateType,liabilityAttributeValue:h(i,e.id)})))};y.riskInfo[e.id]||Object.assign(y.riskInfo,{[e.id]:l})})),i.pickFactor({insuredFactorList:[...new Set(o)],holderFactorList:[...new Set(l)],ageRange:t})}),{deep:!0,immediate:!0}),r((()=>i.riskInfo),(e=>{y.mainRiskInfo=Object.values(e||{}).find((e=>1===(null==e?void 0:e.riskType)))||{}}),{deep:!0,immediate:!0}),r((()=>i.originData),(e=>{let i=[];const o=[];"proposal"===a.origin&&"add"!==a.type&&"repeatAdd"!==a.type?((e||[]).forEach((e=>{1===e.riskType&&(y.mainRiskData=e),i.push(e)})),i=i.filter((e=>a.showRiskList.includes(e.id)))):(e||[]).forEach((e=>{1===e.riskType?(y.mainRiskData=e,i.push(e)):2===e.collocationType?i.push(e):o.push(e)})),y.riderRiskList=o,y.currentRiskList=i}),{deep:!0,immediate:!0}),(i,o)=>{var l,r,h;const L=B;return n(),s("div",Ue,[(n(!0),s(f,null,v(c(y).currentRiskList,((i,a)=>(n(),k(Me,{key:i.id,"form-info":c(y).riskInfo[i.id],index:a,enums:e.enums,"main-risk-data":c(y).mainRiskData,"main-risk-info":c(y).mainRiskInfo,"origin-data":i,"remove-risk":b,"remove-risk-list":c(y).checkedList},null,8,["form-info","index","enums","main-risk-data","main-risk-info","origin-data","remove-risk-list"])))),128)),(null==(l=c(y).riderRiskList)?void 0:l.length)-(null==(r=c(y).checkedList)?void 0:r.length)&&"proposal"!==c(a).origin?(n(),s("div",Ne,[m("span",qe,g(`共有${c(y).riderRiskList.length-c(y).checkedList.length}款附加险可以添加`),1),d(L,{activated:"",class:"btn-rider-risk",onClick:o[0]||(o[0]=e=>c(p)(!0))},{default:u((()=>[Ee,V(" 附加险")])),_:1})])):T("",!0),c(t)?(n(),k(ve,{key:1,modelValue:c(y).checkedList,"onUpdate:modelValue":o[1]||(o[1]=e=>c(y).checkedList=e),show:c(t),disabled:c(y).disabledList,"risk-list":c(y).riderRiskList,"collocation-list":(null==(h=c(y).mainRiskData)?void 0:h.collocationVOList)||[],onFinished:I,onClose:o[2]||(o[2]=e=>c(p)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):T("",!0)])}}}),[["__scopeId","data-v-4e393d2a"]]);const Se={class:"com-product-risk-wrapper"},Ye={class:"popup-container"},$e=(e=>(C("data-v-65cbf84c"),e=e(),R(),e))((()=>m("div",{class:"popup-title"},"请选择保障方案",-1))),Be={class:"risk-trial-wrapper"},Ge={class:"risk-content"},Ke={key:0,class:"risk"},He={class:"footer-bar"};var Je=i(a({__name:"index",props:{isShow:{type:Boolean,default:!1},type:{default:"add"},productId:{default:0},riskType:{default:1},formInfo:{default:{}},productData:{default:()=>({})},holder:{default:()=>({})},insured:{default:()=>({})},riderRisk:{default:()=>[]},currentRisk:{default:()=>[]}},emits:["close","finished"],setup(e,{emit:i}){var a,t;const p=e,f=o({personVO:{occupationCodeList:[],...p.holder}}),v=o({insuredCode:"",personVO:{occupationCodeList:(null==(t=((null==(a=p.insured)?void 0:a.proposalInsuredProductList)||[]).find((e=>e.productId===p.productData.productBasicInfoVO.id)))?void 0:t.occupationCodeList)||[],...p.insured}}),y=o({}),g=o({}),I=o({}),b=o({}),h=o({}),L=l({currentPlan:"0",isShow:p.isShow,riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],type:p.type});G("premium",h.value),G("source",{type:L.type,origin:"proposal",showRiskList:p.currentRisk});const C=_((()=>{var e;let i="";if(null==(e=L.riskData)?void 0:e[0]){const e=L.riskData[0],a=((null==e?void 0:e.requiredRiderRiskVOList)||[]).map((e=>e.riskName));a.length&&(i=`特殊提示: ${e.riskName}和${a.join("、")}必须同时投保`)}return i})),R=()=>{var e;const a=JSON.parse(JSON.stringify(y.value[L.currentPlan])),o=Object.values(a).find((e=>1===e.riskType)),l=Object.values(a).map((e=>{const i=e;return((e,i)=>{var a,o,l,t;const r=e;if("3"===r.chargePeriod){const e=(i.chargePeriod||"").split("_");if(e[1]-=1,1===r.exemptFlag){if("to"===e[0]){let i=0;1===r.exemptType?(null==(a=f.value.personVO)?void 0:a.birthday)&&(i=parseInt(""+(+new Date-new Date(null==(o=f.value.personVO)?void 0:o.birthday))/31536e6,10)):2===r.exemptType&&(null==(l=v.value.personVO)?void 0:l.birthday)&&(i=parseInt(""+(+new Date-new Date(null==(t=v.value.personVO)?void 0:t.birthday))/31536e6,10)),e[1]=e[1]-i}e[0]="year",r.coveragePeriod=e.join("_")}r.chargePeriod=e.join("_")}})(i,o),i.liabilityVOList=(i.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const i=e;return"0"===i.liabilityAttributeValue&&(i.liabilityAttributeValue=""),i})),i})),t={holder:f.value,productCode:L.riskBaseInfo.productCode,insuredVOList:[{...v.value,productPlanVOList:[{planCode:L.currentPlan||"",insurerCode:null==(e=L.riskBaseInfo)?void 0:e.insurerCode,riskVOList:l}]}]};ne({...t}).then((({code:e,data:a})=>{if("10000"===e){L.retrialTip=!1,L.trialResult=a,L.canTrial=!1;const e={},o=(i=[])=>{(i||[]).forEach((i=>{var a;e[i.riskCode]=i,(null==(a=i.riskPremiumDetailVOList)?void 0:a.length)&&o(i.riskPremiumDetailVOList)}))};o(a.riskPremiumDetailVOList),Object.assign(h.value,e),i("finished",((e,i)=>{var a,o,l,t,r,n,s,d,u;const m=(e.insuredVOList[0].productPlanVOList[0].riskVOList||[]).map((e=>({...e,premium:i[e.riskCode].premium,amount:i[e.riskCode].amount})));return{proposalHolder:{...null==(a=e.holder)?void 0:a.personVO},proposalInsuredList:[{...e.insuredVOList[0].personVO,dateRange:{min:null==(l=null==(o=I.value)?void 0:o.ageRangeObj)?void 0:l.minAge,max:null==(r=null==(t=I.value)?void 0:t.ageRangeObj)?void 0:r.maxAge},proposalInsuredProductList:[{productId:L.riskBaseInfo.id,productName:L.riskBaseInfo.productName,dateRange:{min:null==(s=null==(n=I.value)?void 0:n.ageRangeObj)?void 0:s.minAge,max:null==(u=null==(d=I.value)?void 0:d.ageRangeObj)?void 0:u.maxAge},occupationCodeList:e.insuredVOList[0].personVO.occupationCodeList,proposalProductRiskList:m}]}]}})(t,e))}else L.retrialTip=!0}))},P=()=>{var e,i,a,o,l;Promise.all([null==(i=null==(e=g.value)?void 0:e.validateForm)?void 0:i.call(e),null==(o=null==(a=I.value)?void 0:a.validateForm)?void 0:o.call(a),null==(l=b.value)?void 0:l.validate()]).then((()=>{R()}))},A=()=>{i("close")},x=e=>{L.holderFactor=e.holderFactorList,L.insuredFactor=e.insuredFactorList,L.ageRange=e.ageRange};return r([()=>y.value,()=>f.value,()=>v.value],(e=>{e&&!L.canTrial&&(L.canTrial=!0,L.retrialTip=!0)}),{deep:!0}),r((()=>p.isShow),(e=>{L.isShow=e}),{immediate:!0}),r((()=>p.productId),(e=>{e&&re({productId:p.productId,source:2}).then((({code:e,data:i})=>{"10000"===e&&(L.riskBaseInfo=i.productBasicInfoVO,(i.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,i)=>{0===i&&(L.currentPlan=e.planCode||"0"),Object.assign(y.value,{[e.planCode||i]:{}})})),L.riskData=i.productRiskVoList[0].riskDetailVOList||[],L.riskPlanData=i.productRelationPlanVOList||[])})).finally((()=>{}))}),{immediate:!0}),r((()=>p.formInfo),((e={})=>{if("add"!==p.type&&"repeatAdd"!==p.type){const i={};e.proposalProductRiskList.forEach((e=>{i[e.riskId]=e})),Object.assign(y.value,{0:i})}}),{deep:!0,immediate:!0}),r((()=>p.productData),(e=>{var i;"add"!==p.type&&"repeatAdd"!==p.type&&(L.riskBaseInfo=e.productBasicInfoVO,L.riskData=(null==(i=e.productRiskVoList)?void 0:i[0].riskDetailVOList)||[])}),{deep:!0,immediate:!0}),r((()=>p.type),(e=>{L.type=e})),E((()=>{K({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:i})=>{if("10000"===e){const e={};i.forEach((i=>{e[i.dictCode]=i.dictItemList})),L.enumList=e}}))})),(e,i)=>{const a=H,o=J,l=N,t=D,r=O;return n(),s("div",Se,[d(r,{show:c(L).isShow,"onUpdate:show":i[0]||(i[0]=e=>c(L).isShow=e),round:"",position:"bottom",closeable:"",style:{height:"80%"},onClose:A},{default:u((()=>[m("div",Ye,[$e,c(C)?(n(),k(a,{key:0,content:c(C)},null,8,["content"])):T("",!0),m("div",Be,[c(L).holderFactor.length?(n(),k(o,{key:0,title:"投保人",class:"part-card"},{default:u((()=>{var e;return[d(Ve,{ref_key:"holderRef",ref:g,"insured-code":null==(e=c(L).riskBaseInfo)?void 0:e.insurerCode,"form-info":c(f).personVO,"factor-list":c(L).holderFactor,"age-range":c(L).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])]})),_:1})):T("",!0),c(L).insuredFactor.length?(n(),k(o,{key:1,title:"被保人",class:"part-card"},{default:u((()=>{var e;return[d(Ve,{ref_key:"insuredRef",ref:I,"insured-code":null==(e=c(L).riskBaseInfo)?void 0:e.insurerCode,"form-info":c(v).personVO,"factor-list":c(L).insuredFactor,"age-range":c(L).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])]})),_:1})):T("",!0),m("div",Ge,[d(o,{title:"投保方案",class:"part-card"},{default:u((()=>[c(L).riskData.length?(n(),s("div",Ke,[d(l,{ref_key:"riskFormRef",ref:b,"input-align":"right","error-message-align":"right"},{default:u((()=>[d(je,{"risk-info":c(y)[0],enums:c(L).enumList,"origin-data":c(L).riskData,"pick-factor":x},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):T("",!0)])),_:1})])]),m("div",He,[d(t,{block:"",type:"primary",onClick:P},{default:u((()=>[V("确定")])),_:1})])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-65cbf84c"]]);export{Je as P,ve as R,se as u};
