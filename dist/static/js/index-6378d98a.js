import{b7 as e,_ as i,d as a,r as o,J as l,o as t,am as r,c as n,g as s,f as d,w as u,i as m,F as c,h as p,e as f,k as v,t as k,m as y,n as g,v as V,C as I,q as b,x as h,B as L,b3 as D,X as O,Y as C,S as R,b8 as P,E as A,ac as x,j as _,aL as T,aE as w,aV as F,y as M,l as U,aW as N,b9 as q,aD as E,V as j,aU as S,ao as Y,ai as $,aF as B,ba as G,aC as K,ad as H,P as J}from"./index-8dcf7554.js";import{S as W,d as X,e as z,f as Q,A as Z,g as ee,L as ie,h as ae}from"./trial-d7fb7924.js";import{u as oe}from"./useDicData-15ad648f.js";import{S as le}from"./index-f71f3383.js";import{P as te}from"./index-eebd0197.js";import{i as re,p as ne}from"./trial-bc41e7be.js";const se=e({id:"createProposal",state:()=>({proposalInfo:{},trialData:[],excludeProduct:[],proposalId:0}),actions:{setProposalInfo(e){this.$state.proposalInfo=e},setTrialData(e){this.$state.trialData=e},setExcludeProduct(e){this.$state.excludeProduct=e}}});const de={class:"com-risk-list-wrapper"},ue=(e=>(O("data-v-7d3c3028"),e=e(),C(),e))((()=>m("div",{class:"popup-title"},"选择附加险",-1))),me={class:"risk-list"},ce={class:"cell-title"},pe={class:"title"},fe={class:"footer-button"},ve=g("确认");var ke=i(a({props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:i}){const a=e,g=o([]),O=o([]),C=o([...a.disabled]),R=l({show:a.show,currentChecked:[...a.modelValue]}),P=e=>{var i,o,l;if(C.value.includes(e))return;((e,i)=>{if(!a.collocationList.length)return i?void(R.currentChecked=[]):void R.currentChecked.push(e);let o=R.currentChecked,l=C.value;i?(a.collocationList.forEach((i=>{e===i.riskId&&(2===i.collocationType?o=o.filter((a=>a!==i.collocationRiskId||a!==e)):3===i.collocationType?(o=o.filter((i=>i!==e)),l=l.filter((e=>e!==i.collocationRiskId))):o=o.filter((i=>i!==e)))})),R.currentChecked=o,C.value=l):(a.collocationList.forEach((a=>{e===a.riskId&&(i||(2===a.collocationType?o.push(a.collocationRiskId):3===a.collocationType&&l.push(a.collocationRiskId),o.push(e)))})),R.currentChecked.push(...o),C.value=l)})(e,R.currentChecked.includes(e)),null==(l=null==(o=null==(i=null==g?void 0:g.value)?void 0:i[e])?void 0:o.toggle)||l.call(o)},A=()=>{i("close")},x=()=>{const e=a.riskList.filter((e=>R.currentChecked.includes(e.id)));i("update:modelValue",[...new Set(O.value)]),i("finished",e,C.value),i("close")};return t((()=>{g.value=[]})),r((()=>R.currentChecked),(e=>{O.value=e}),{deep:!0,immediate:!0}),r((()=>a.modelValue),(e=>{O.value=e||[],C.value.push(...e||[])}),{deep:!0,immediate:!0}),(i,a)=>{const o=V,l=I,t=b,r=h,_=L,T=D;return n(),s("div",de,[d(T,{show:y(R).show,"onUpdate:show":a[1]||(a[1]=e=>y(R).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:A},{default:u((()=>[ue,m("div",me,[d(r,{modelValue:O.value,"onUpdate:modelValue":a[0]||(a[0]=e=>O.value=e)},{default:u((()=>[d(t,{inset:""},{default:u((()=>[(n(!0),s(c,null,p(e.riskList,(e=>(n(),f(l,{key:e.id,title:e.riskName,disabled:C.value.includes(e.id),onClick:i=>P(e.id)},{"right-icon":u((()=>[d(o,{ref_for:!0,ref:i=>g.value[e.id]=i,shape:"square",disabled:C.value.includes(e.id),name:e.id,onClick:v((i=>P(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:u((()=>[m("div",ce,[m("div",pe,k(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),m("div",fe,[d(_,{type:"primary",disabled:!y(R).currentChecked.length,block:"",onClick:x},{default:u((()=>[ve])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-7d3c3028"]]);const ye={class:"com-personal-info-wrapper"},ge={class:"pro-radio-wrap"},Ve={class:"pro-radio-wrap"};var Ie=i(a({props:{formInfo:{default:()=>({})},insuredCode:{default:""},factorList:{default:()=>[]},ageRange:{default:()=>[]}},setup(e,{expose:i}){var a,t;const r=e,c=oe(`${null==(t=null==(a=r.insuredCode)?void 0:a.toLocaleUpperCase)?void 0:t.call(a)}_OCCUPATION`),[p,v]=R(),k=o(),g=P("source")||{},V=l({formInfo:r.formInfo,occupationalText:"",occupationCodeList:[]}),I=A((()=>{const e=(e=>{const i=e||[];for(let a=0,o=i.length;a<o;a++)for(let e=a+1;e<o;e++){const o=i[a].split("_"),l=i[e].split("_"),t=i[a];o[0]===l[0]?o>l&&(i[a]=i[e],i[e]=t):"age"===o[0]&&(i[a]=i[e],i[e]=t)}return i})(null==r?void 0:r.ageRange),i=(e="")=>[+e.split("_")[1],e.split("_")[0]],a=i(e[0]),o=i(e[e.length-1]),l=x().subtract(a[0],"age"===a[1]?"year":"day").format("YYYY-MM-DD");let t=x().subtract(o[0],"age"===o[1]?"year":"day").format("YYYY-MM-DD");return x(t).subtract(1,"year").isBefore(l)&&(t=x(t).subtract(1,"year").add(1,"day").format("YYYY-MM-DD")),{minAge:new Date(t),maxAge:new Date(l)}}));return i({validateForm:()=>new Promise(((e,i)=>{var a;null==(a=k.value)||a.validate().then((()=>{e("")}),(e=>{var a;null==(a=k.value)||a.scrollToField(null==e?void 0:e[0].name),i()}))})),ageRangeObj:I.value}),(i,a)=>{const o=M,l=U,t=N,r=q,b=D;return n(),s("div",ye,[d(t,{ref_key:"formRef",ref:k,"input-align":"right","error-message-align":"right"},{default:u((()=>["proposal"===y(g).type&&("add"===y(g).type||"repeatAdd"===y(g).type)||"proposal"!==y(g).type&&(e.factorList.includes("APPLICANT.AGE")||e.factorList.includes("AGE")||e.factorList.includes("DAY")||e.factorList.includes("APPLICANT.DAY"))?(n(),f(o,{key:0,modelValue:y(V).formInfo.birthday,"onUpdate:modelValue":a[0]||(a[0]=e=>y(V).formInfo.birthday=e),rules:[{required:!0,message:"请选择出生日期"}],name:"birth",label:"出生日期",class:"isLink",readonly:"","is-link":"",formatter:e=>e?y(x)(e).format("YYYY-MM-DD"):e,placeholder:"请选择",onClick:a[1]||(a[1]=e=>y(v)(!0))},null,8,["modelValue","formatter"])):_("",!0),"proposal"===y(g).type&&("add"===y(g).type||"repeatAdd"===y(g).type)||"proposal"!==y(g).type&&(e.factorList.includes("APPLICANT.GENDER")||e.factorList.includes("GENDER"))?(n(),f(o,{key:1,modelValue:y(V).formInfo.gender,"onUpdate:modelValue":a[3]||(a[3]=e=>y(V).formInfo.gender=e),name:"gender",label:"性别",rules:[{required:!0,message:"请选择性别"}]},{input:u((()=>[m("div",ge,[d(l,{modelValue:y(V).formInfo.gender,"onUpdate:modelValue":a[2]||(a[2]=e=>y(V).formInfo.gender=e),options:y(T)},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])):_("",!0),e.factorList.includes("SOCIAL_INS")||e.factorList.includes("APPLICANT.SOCIAL_INS")?(n(),f(o,{key:2,modelValue:y(V).formInfo.socialFlag,"onUpdate:modelValue":a[5]||(a[5]=e=>y(V).formInfo.socialFlag=e),name:"socialFlag",label:"社保",rules:[{required:!0,message:"请选择社保"}]},{input:u((()=>[m("div",Ve,[d(l,{modelValue:y(V).formInfo.socialFlag,"onUpdate:modelValue":a[4]||(a[4]=e=>y(V).formInfo.socialFlag=e),options:y(W)},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])):_("",!0),e.factorList.includes("OCCUPATION_CATEGORY")||e.factorList.includes("APPLICANT.OCCUPATION_CATEGORY")?(n(),f(w,{key:3,modelValue:y(V).formInfo.occupationCodeList[0],"onUpdate:modelValue":a[6]||(a[6]=e=>y(V).formInfo.occupationCodeList[0]=e),field0:y(V).formInfo.occupationCodeList[0],"onUpdate:field0":a[7]||(a[7]=e=>y(V).formInfo.occupationCodeList[0]=e),field1:y(V).formInfo.occupationCodeList[1],"onUpdate:field1":a[8]||(a[8]=e=>y(V).formInfo.occupationCodeList[1]=e),field2:y(V).formInfo.occupationCodeList[2],"onUpdate:field2":a[9]||(a[9]=e=>y(V).formInfo.occupationCodeList[2]=e),required:"",name:"occupationCodeList",label:"职业类型","data-source":y(c),mapping:{label:"value",value:"code",children:"children"},"show-full-value":"","need-key":"name"},null,8,["modelValue","field0","field1","field2","data-source"])):_("",!0)])),_:1},512),d(b,{show:y(p),"onUpdate:show":a[12]||(a[12]=e=>F(p)?p.value=e:null),position:"bottom"},{default:u((()=>[d(r,{type:"date","min-date":y(I).minAge,"max-date":y(I).maxAge,onConfirm:a[10]||(a[10]=e=>{y(V).formInfo.birthday=y(x)(e).format("YYYY-MM-DD"),y(v)(!1)}),onCancel:a[11]||(a[11]=e=>y(v)(!1))},null,8,["min-date","max-date"])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-b6a7c104"]]);const be={class:"com-risk-card-wrapper part-card"},he={class:"custom-field"},Le={class:"field-tip"},De={class:"custom-field"},Oe={class:"field-tip"},Ce={class:"custom-field"},Re={class:"field-tip"},Pe={class:"pro-radio-wrap"},Ae={class:"pro-radio-wrap"},xe={class:"pro-radio-wrap"},_e={class:"pro-radio-wrap"},Te={class:"pro-radio-wrap"},we={key:0},Fe={key:1,class:"pro-radio-wrap"},Me={key:9,class:"liab-desc"};var Ue=i(a({props:{originData:{default:()=>({})},formInfo:{default:()=>({})},mainRiskData:{default:()=>({})},mainRiskInfo:{default:()=>({})},index:{default:0},removeRisk:{type:Function,default:()=>{}},removeRiskList:{default:()=>[]},enums:{default:()=>({})}},setup(e){const i=e,a=o({}),t=P("premium")||{};a.value=P("enumList")||{};const v=o({chargePeriod:{disabled:!1,prevent:!1},coveragePeriod:{disabled:!1,prevent:!1},paymentFrequency:{disabled:!1,prevent:!1}}),g=l({formInfo:i.formInfo}),V=e=>"boolean"!=typeof e&&!e||(!(!Array.isArray(e)||e.length)||"[object Object]"==={}.toString.call(e)&&Object.keys(e).length),I=(e,i,a={})=>{let o=i;return Array.isArray(i)||(o=[`${o}`]),(e||[]).filter((e=>o.includes(`${e.value}`)||o.includes(e.value)))},b=A((()=>{var e,a,o,l,t,r,n,s;return 1===(null==(e=i.originData)?void 0:e.riskType)?I(i.enums.RISK_INSURANCE_PERIOD,(null==(a=i.originData.riskInsureLimitVO)?void 0:a.insurancePeriodValueList)||[]):2===(null==(o=i.originData)?void 0:o.periodType)?I([{value:"year_1",name:"1年"}],["year_1"]):1===(null==(l=i.originData)?void 0:l.exemptFlag)?I(X,[`${null==(r=null==(t=null==i?void 0:i.originData)?void 0:t.riskInsureLimitVO)?void 0:r.insurancePeriodRule}`]):I(null==(n=i.enums)?void 0:n.RISK_INSURANCE_PERIOD,(null==(s=i.mainRiskData.riskInsureLimitVO)?void 0:s.insurancePeriodValueList)||[])})),h=A((()=>{var e,a,o,l,t,r,n,s;return 1===(null==(e=i.originData)?void 0:e.riskType)?I(null==(a=null==i?void 0:i.enums)?void 0:a.RISK_PAYMENT_PERIOD,(null==(o=i.originData.riskInsureLimitVO)?void 0:o.paymentPeriodValueList)||[]):1===(null==(l=i.originData)?void 0:l.exemptFlag)?I(z,[`${null==(r=null==(t=null==i?void 0:i.originData)?void 0:t.riskInsureLimitVO)?void 0:r.paymentPeriodRule}`]):2===(null==(n=i.originData)?void 0:n.periodType)?I([{value:"year_1",name:"1年交"}],["year_1"]):I(i.enums.RISK_PAYMENT_PERIOD,(null==(s=i.mainRiskData.riskInsureLimitVO)?void 0:s.paymentPeriodValueList)||[])})),L=A((()=>{var e,a,o,l,t;return 1===(null==(e=i.originData)?void 0:e.riskType)?I(Q,(null==(a=i.originData.riskInsureLimitVO)?void 0:a.paymentFrequencyList)||[]):1===(null==(o=i.originData.riskInsureLimitVO)?void 0:o.paymentTypeRule)?I(Q,(null==(l=i.mainRiskData.riskInsureLimitVO)?void 0:l.paymentFrequencyList)||[]):I(Q,(null==(t=i.mainRiskData.riskInsureLimitVO)?void 0:t.paymentFrequencyList)||[])})),D=A((()=>{var e,a;let o=0,l=0;return((null==(a=null==(e=i.originData)?void 0:e.riskCalcMethodInfoVO)?void 0:a.paymentMethodLimitList)||[]).forEach(((e,i)=>{0===i&&(o=e.minAmount,l=e.maxAmount),o>e.minAmount&&(o=e.minAmount),l<e.maxAmount&&(l=e.maxAmount)})),g.formInfo.amount=g.formInfo.amount||o,{min:o,max:l||1/0}})),O=A((()=>{var e,a;let o=0,l=0;return((null==(a=null==(e=i.originData)?void 0:e.riskCalcMethodInfoVO)?void 0:a.paymentMethodLimitList)||[]).forEach(((e,i)=>{0===i&&(o=e.minPremium,l=e.maxPremium),o>e.minPremium&&(o=e.minPremium),l<e.maxPremium&&(l=e.maxPremium)})),g.formInfo.premium=g.formInfo.premium||o,{min:o,max:l||1/0}})),C=A((()=>{var e,a,o,l;const t=(null==(a=null==(e=i.originData)?void 0:e.riskCalcMethodInfoVO)?void 0:a.minCopy)||1,r=null==(l=null==(o=i.originData)?void 0:o.riskCalcMethodInfoVO)?void 0:l.maxCopy;return g.formInfo.copy=`${g.formInfo.copy||t||1}`,{min:t,max:r}})),R=(e,a,o)=>{var l,t;const r=(null==(t=null==(l=i.originData)?void 0:l.riskCalcMethodInfoVO)?void 0:t.increaseDecreaseNum)||1;if("sumInsured"===o){if(D.value.max&&+e>D.value.max)return`金额最大${D.value.max}元`;if(+e<D.value.min)return`金额最小${D.value.min}元`}else{if(O.value.max&&+e>O.value.max)return`金额最大${O.value.max}元`;if(+e<O.value.min)return`金额最小${O.value.min}元`}return+e%r==0?"":`金额必须是${r}的倍数`},x=e=>{var i;const a=((null==(i=g.formInfo)?void 0:i.liabilityVOList)||[]).find((i=>i.liabilityCode===e.liabilityCode));return a?a.liabilityAttributeValue?a.liabilityAttributeValue:1!==e.optionalFlag?"0":"-1":""};return E((()=>{var e,a,o,l;const t={riskType:i.originData.riskType,riskId:i.originData.id,riskName:i.originData.riskName,riskCode:i.originData.riskCode,amount:g.formInfo.amount,mainRiskCode:1!==i.originData.riskType?null==(e=i.mainRiskData)?void 0:e.riskCode:void 0,mainRiskId:1!==i.originData.riskType?null==(a=i.mainRiskData)?void 0:a.id:void 0,exemptFlag:i.originData.exemptFlag,exemptType:i.originData.exemptType,riskCategory:i.originData.riskCategory,liabilityVOList:(i.originData.riskLiabilityInfoVOList||[]).map((e=>({...e,liabilityAttributeCode:e.liabilityAttributeType,liabilityCode:e.liabilityCode,liabilityRateType:e.liabilityRateType,liabilityAttributeValue:x(e)})))};[1].includes((null==(o=i.originData.riskCalcMethodInfoVO)?void 0:o.saleMethod)||0)&&1!==(null==(l=i.originData)?void 0:l.exemptFlag)||!i.originData.riskCalcMethodInfoVO.fixedAmount||(t.amount=i.originData.riskCalcMethodInfoVO.fixedAmount),Object.assign(g.formInfo,t)})),r((()=>{var e;return null==(e=g.formInfo)?void 0:e.paymentFrequency}),((e=0)=>{var a,o,l;[3].includes((null==(a=i.originData.riskCalcMethodInfoVO)?void 0:a.saleMethod)||0)&&((null==(l=null==(o=i.originData)?void 0:o.riskCalcMethodInfoVO)?void 0:l.paymentMethodLimitList)||[]).forEach((i=>{+i.paymentFrequency==+e&&Object.assign(g.formInfo,{amount:i.perCopyAmount,premium:i.perCopyPremium})})),1==+e&&"single"!==g.formInfo.chargePeriod&&(g.formInfo.chargePeriod="single")})),r((()=>{var e;return null==(e=g.formInfo)?void 0:e.copy}),(e=>{var a,o;4===(null==(a=i.originData.riskCalcMethodInfoVO)?void 0:a.saleMethod)&&(g.formInfo.amount=null==(o=i.originData.riskCalcMethodInfoVO)?void 0:o.fixedAmount)})),r((()=>{var e;return null==(e=g.formInfo)?void 0:e.chargePeriod}),(e=>{"single"===e&&1!=+(g.formInfo.paymentFrequency||0)&&(g.formInfo.paymentFrequency=1)})),r((()=>null==i?void 0:i.mainRiskInfo),(e=>{var a,o,l,t,r,n;e&&2===i.originData.riskType&&(1===(null==(o=null==(a=i.originData)?void 0:a.riskInsureLimitVO)?void 0:o.insurancePeriodRule)&&(e.coveragePeriod?v.value.coveragePeriod.disabled=!0:v.value.coveragePeriod.prevent=!0,g.formInfo.coveragePeriod=e.coveragePeriod||""),1===(null==(t=null==(l=i.originData)?void 0:l.riskInsureLimitVO)?void 0:t.paymentPeriodRule)&&(e.chargePeriod?v.value.chargePeriod.disabled=!0:v.value.chargePeriod.prevent=!0,g.formInfo.chargePeriod=e.chargePeriod||""),1===(null==(n=null==(r=i.originData)?void 0:r.riskInsureLimitVO)?void 0:n.paymentTypeRule)&&(e.paymentFrequency?v.value.paymentFrequency.disabled=!0:v.value.paymentFrequency.prevent=!0,g.formInfo.paymentFrequency=e.paymentFrequency||0))}),{immediate:!0,deep:!0}),(i,a)=>{var o,l,r,P,A,x,T,w,F,N,q,E,$,B,G,K,H,J,W,X,z,Q,oe,re,ne,se,de,ue,me,ce;const pe=j,fe=S,ve=le,ke=M,ye=U,ge=Y;return n(),s("div",be,[d(fe,{"risk-type":e.originData.riskType,title:e.originData.riskName},{default:u((()=>[e.removeRiskList.includes(e.originData.id)?(n(),s("div",{key:0,class:"delete-risk",onClick:a[0]||(a[0]=i=>e.removeRisk(e.originData.id))},[d(pe,{name:"img-lajitong",color:"#0d6efe"})])):_("",!0)])),_:1},8,["risk-type","title"]),1===(null==(o=e.originData.riskCalcMethodInfoVO)?void 0:o.saleMethod)&&2===e.originData.exemptFlag?(n(),f(ke,{key:0,modelValue:y(g).formInfo.amount,"onUpdate:modelValue":a[2]||(a[2]=e=>y(g).formInfo.amount=e),label:"保额",name:"amount",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...e)=>R(...e,"sumInsured")}]},{input:u((()=>{var i,o;return[m("div",he,[d(ve,{modelValue:y(g).formInfo.amount,"onUpdate:modelValue":a[1]||(a[1]=e=>y(g).formInfo.amount=e),"input-width":"64px",min:y(D).min,step:(null==(i=e.originData.riskCalcMethodInfoVO)?void 0:i.increaseDecreaseNum)||1,max:y(D).max},null,8,["modelValue","min","step","max"]),m("span",Le,k(`金额最低${y(D).min}元，为${(null==(o=e.originData.riskCalcMethodInfoVO)?void 0:o.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):_("",!0),2===(null==(r=null==(l=e.originData)?void 0:l.riskCalcMethodInfoVO)?void 0:r.saleMethod)?(n(),f(ke,{key:1,modelValue:y(g).formInfo.premium,"onUpdate:modelValue":a[4]||(a[4]=e=>y(g).formInfo.premium=e),label:"保费",name:"premium",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...e)=>R(...e,"premium")}]},{input:u((()=>{var i,o,l,t;return[m("div",De,[d(ve,{modelValue:y(g).formInfo.premium,"onUpdate:modelValue":a[3]||(a[3]=e=>y(g).formInfo.premium=e),step:(null==(o=null==(i=e.originData)?void 0:i.riskCalcMethodInfoVO)?void 0:o.increaseDecreaseNum)||1,min:y(O).min,"input-width":"64px",max:y(O).max},null,8,["modelValue","step","min","max"]),m("span",Oe,k(`金额最低${y(O).min}元，为${(null==(t=null==(l=e.originData)?void 0:l.riskCalcMethodInfoVO)?void 0:t.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):_("",!0),3===(null==(A=null==(P=e.originData)?void 0:P.riskCalcMethodInfoVO)?void 0:A.saleMethod)||4===(null==(T=null==(x=e.originData)?void 0:x.riskCalcMethodInfoVO)?void 0:T.saleMethod)&&((null==(F=null==(w=e.originData)?void 0:w.riskCalcMethodInfoVO)?void 0:F.minCopy)||(null==(q=null==(N=e.originData)?void 0:N.riskCalcMethodInfoVO)?void 0:q.maxCopy))?(n(),f(ke,{key:2,modelValue:y(g).formInfo.copy,"onUpdate:modelValue":a[6]||(a[6]=e=>y(g).formInfo.copy=e),label:"投保份数",name:"copy",rules:[{required:!0,message:"请填写"}]},{input:u((()=>[m("div",Ce,[d(ve,{modelValue:y(g).formInfo.copy,"onUpdate:modelValue":a[5]||(a[5]=e=>y(g).formInfo.copy=e),step:1,min:y(C).min,max:y(C).max},null,8,["modelValue","min","max"]),m("span",Re,k(`${y(C).min}份起购，最多购买${y(C).max}份`),1)])])),_:1},8,["modelValue"])):_("",!0),[1].includes((null==(E=e.originData.riskCalcMethodInfoVO)?void 0:E.saleMethod)||0)&&1!==(null==($=e.originData)?void 0:$.exemptFlag)||!e.originData.riskCalcMethodInfoVO.fixedAmount&&!(null==(G=y(t))?void 0:G[null==(B=e.originData)?void 0:B.riskCode])?_("",!0):(n(),f(ke,{key:3,label:"保额"},{input:u((()=>{var i,a,o,l;return[m("div",null,k((null==(i=e.originData.riskCalcMethodInfoVO)?void 0:i.fixedAmount)||(null==(l=null==(o=y(t))?void 0:o[null==(a=e.originData)?void 0:a.riskCode])?void 0:l.amount)),1)]})),_:1})),V(null==(H=null==(K=e.originData)?void 0:K.riskInsureLimitVO)?void 0:H.insurancePeriodValueList)&&V(null==(W=null==(J=e.originData)?void 0:J.riskInsureLimitVO)?void 0:W.insurancePeriodRule)?_("",!0):(n(),f(ge,{key:4,modelValue:y(g).formInfo.coveragePeriod,"onUpdate:modelValue":a[8]||(a[8]=e=>y(g).formInfo.coveragePeriod=e),label:"保障期间",name:"coveragePeriod",rules:[{required:!0,message:"请选择保障期间"}]},{input:u((()=>[m("div",Pe,[d(ye,{modelValue:y(g).formInfo.coveragePeriod,"onUpdate:modelValue":a[7]||(a[7]=e=>y(g).formInfo.coveragePeriod=e),disabled:v.value.coveragePeriod.disabled,prevent:v.value.coveragePeriod.prevent?"请先选择主险保障期间":"",options:y(b),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),V(null==(z=null==(X=e.originData)?void 0:X.riskInsureLimitVO)?void 0:z.paymentPeriodValueList)&&V(null==(oe=null==(Q=e.originData)?void 0:Q.riskInsureLimitVO)?void 0:oe.paymentPeriodRule)?_("",!0):(n(),f(ge,{key:5,modelValue:y(g).formInfo.chargePeriod,"onUpdate:modelValue":a[10]||(a[10]=e=>y(g).formInfo.chargePeriod=e),label:"交费期间",name:"chargePeriod",rules:[{required:!0,message:"请选择交费期间"}]},{input:u((()=>[m("div",Ae,[d(ye,{modelValue:y(g).formInfo.chargePeriod,"onUpdate:modelValue":a[9]||(a[9]=e=>y(g).formInfo.chargePeriod=e),disabled:v.value.chargePeriod.disabled,prevent:v.value.chargePeriod.prevent?"请先选择主险交费期间":"",options:y(h),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),V(null==(re=e.originData.riskInsureLimitVO)?void 0:re.paymentFrequencyList)&&V(null==(ne=e.originData.riskInsureLimitVO)?void 0:ne.paymentPeriodRule)?_("",!0):(n(),f(ge,{key:6,modelValue:y(g).formInfo.paymentFrequency,"onUpdate:modelValue":a[12]||(a[12]=e=>y(g).formInfo.paymentFrequency=e),label:"交费方式",name:"paymentFrequency",rules:[{required:!0,message:"请选择交费方式"}]},{input:u((()=>[m("div",xe,[d(ye,{modelValue:y(g).formInfo.paymentFrequency,"onUpdate:modelValue":a[11]||(a[11]=e=>y(g).formInfo.paymentFrequency=e),disabled:v.value.paymentFrequency.disabled,prevent:v.value.paymentFrequency.prevent?"请先选择主险交费方式":"",options:y(L)},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),V(null==(de=null==(se=e.originData)?void 0:se.riskInsureLimitVO)?void 0:de.annuityDrawValueList)?_("",!0):(n(),f(ge,{key:7,modelValue:y(g).formInfo.annuityDrawDate,"onUpdate:modelValue":a[14]||(a[14]=e=>y(g).formInfo.annuityDrawDate=e),label:"领取时间",name:"annuityDrawDate"},{input:u((()=>{var i;return[m("div",_e,[d(ye,{modelValue:y(g).formInfo.annuityDrawDate,"onUpdate:modelValue":a[13]||(a[13]=e=>y(g).formInfo.annuityDrawDate=e),options:I(y(Z),(null==(i=e.originData.riskInsureLimitVO)?void 0:i.annuityDrawValueList)||[])},null,8,["modelValue","options"])])]})),_:1},8,["modelValue"])),V(null==(me=null==(ue=e.originData)?void 0:ue.riskInsureLimitVO)?void 0:me.annuityDrawFrequencyList)?_("",!0):(n(),f(ge,{key:8,modelValue:y(g).formInfo.annuityDrawType,"onUpdate:modelValue":a[16]||(a[16]=e=>y(g).formInfo.annuityDrawType=e),label:"领取方式",name:"annuityDrawType"},{input:u((()=>{var i;return[m("div",Te,[d(ye,{modelValue:y(g).formInfo.annuityDrawType,"onUpdate:modelValue":a[15]||(a[15]=e=>y(g).formInfo.annuityDrawType=e),options:I(y(ee),(null==(i=e.originData.riskInsureLimitVO)?void 0:i.annuityDrawFrequencyList)||[])},null,8,["modelValue","options"])])]})),_:1},8,["modelValue"])),(n(!0),s(c,null,p(e.originData.riskLiabilityInfoVOList||[],((i,a)=>(n(),s(c,{key:a},[1!==i.optionalFlag||V(i.liabilityAttributeValueList)?_("",!0):(n(),f(ke,{key:0,modelValue:y(g).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>y(g).formInfo.liabilityVOList[a].liabilityAttributeValue=e,label:i.liabilityName,name:"liabilityAttributeValue",rules:[{required:i.liabilityAttributeValue,message:`请选择${i.liabilityName}`}]},{input:u((()=>{var o,l;return[m("div",null,[V(i.liabilityAttributeValueList)?(n(),s("span",we,"50万")):(n(),s("div",Fe,[d(ye,{modelValue:y(g).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>y(g).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:I(y(ie),null==(l=null==(o=e.originData.riskLiabilityInfoVOList)?void 0:o[a])?void 0:l.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"])]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])),1!==i.optionalFlag?(n(),f(ke,{key:1,modelValue:y(g).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>y(g).formInfo.liabilityVOList[a].liabilityAttributeValue=e,label:i.liabilityName,name:"liabilityAttributeValue"},{input:u((()=>{var o,l;return[m("div",null,[V(i.liabilityAttributeValueList)?(n(),f(ye,{key:0,modelValue:y(g).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>y(g).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:y(ae)},null,8,["modelValue","onUpdate:modelValue","options"])):(n(),f(ye,{key:1,modelValue:y(g).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>y(g).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:I(y(ie),null==(l=null==(o=e.originData.riskLiabilityInfoVOList)?void 0:o[a])?void 0:l.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label"])):_("",!0)],64)))),128)),(null==(ce=e.originData)?void 0:ce.relationDesc)?(n(),s("div",Me,[d(te,{title:"责任投保说明"},{default:u((()=>[m("div",null,k(e.originData.relationDesc),1)])),_:1})])):_("",!0)])}}}),[["__scopeId","data-v-3b9c2786"]]);const Ne={class:"risk-list-wrapper"},qe={key:0,class:"add-rider-risk"},Ee={class:"left-part"},je=(e=>(O("data-v-4e393d2a"),e=e(),C(),e))((()=>m("span",{class:"btn-plus"},"+",-1))),Se=g(" 附加险");var Ye=i(a({props:{riskInfo:{default:()=>({})},originData:{default:()=>[]},pickFactor:{type:Function,default:()=>{}},enums:{default:()=>{}}},setup(e){const i=e,a=P("source")||{},[t,v]=R(!1);o(null),o(null);const g=l({mainRiskInfo:i.riskInfo,riskInfo:i.riskInfo,requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[],currentRiskList:[]}),V=(e,i)=>{g.currentRiskList=g.currentRiskList.concat(e),g.disabledList=i},I=e=>{$.confirm({message:"确定要删除附加险么？",confirmButtonText:"删除"}).then((()=>{var i;const a=[e];((null==(i=g.mainRiskData)?void 0:i.collocationVOList)||[]).forEach((i=>{e!==i.riskId||2!==i.collocationType&&3!==i.collocationType||a.push(i.collocationRiskId)})),g.checkedList=g.checkedList.filter((e=>!a.includes(e))),g.currentRiskList=g.currentRiskList.filter((e=>!a.includes(e.id)||(Object.assign(g.riskInfo,{[e.id]:void 0}),!1))),g.disabledList=g.disabledList.filter((e=>!a.includes(e)))})).catch((()=>{}))},b=(e,i)=>{var a,o;const l=((null==(o=null==(a=g.riskInfo)?void 0:a[i])?void 0:o.liabilityVOList)||[]).find((i=>i.liabilityCode===e.liabilityCode));return l?l.liabilityAttributeValue?l.liabilityAttributeValue:1!==e.optionalFlag?"0":"-1":""};return r((()=>g.currentRiskList),(e=>{const a=[g.mainRiskData,...e];let o=[],l=[];const t=[];a.forEach(((e,i)=>{var a,r,n;const s=(null==(a=null==e?void 0:e.riskCalcMethodInfoVO)?void 0:a.riskFactorRelationList)||[];o=o.concat(s.filter((e=>"insured"===e.factorObject)).map((e=>e.factorCode))),l=l.concat(s.filter((e=>"holder"===e.factorObject)).map((e=>e.factorCode))),t.push(null==(r=null==e?void 0:e.riskInsureLimitVO)?void 0:r.minHolderAge,null==(n=null==e?void 0:e.riskInsureLimitVO)?void 0:n.maxHolderAge)})),(e||[]).forEach((e=>{var a,o;const l={riskType:e.riskType,riskId:e.id,riskCode:e.riskCode,riskName:e.riskName,mainRiskCode:1!==e.riskType?null==(a=g.mainRiskData)?void 0:a.riskCode:void 0,mainRiskId:1!==e.riskType?null==(o=g.mainRiskData)?void 0:o.id:void 0,riskCategory:e.riskCategory,exemptFlag:i.originData.exemptFlag,exemptType:i.originData.exemptType,liabilityVOList:(e.riskLiabilityInfoVOList||[]).map((i=>({...i,liabilityAttributeCode:i.liabilityAttributeType,liabilityCode:i.liabilityCode,liabilityRateType:i.liabilityRateType,liabilityAttributeValue:b(i,e.id)})))};g.riskInfo[e.id]||Object.assign(g.riskInfo,{[e.id]:l})})),i.pickFactor({insuredFactorList:[...new Set(o)],holderFactorList:[...new Set(l)],ageRange:t})}),{deep:!0,immediate:!0}),r((()=>i.riskInfo),(e=>{g.mainRiskInfo=Object.values(e||{}).find((e=>1===(null==e?void 0:e.riskType)))||{}}),{deep:!0,immediate:!0}),r((()=>i.originData),(e=>{let i=[];const o=[];"proposal"===a.origin&&"add"!==a.type&&"repeatAdd"!==a.type?((e||[]).forEach((e=>{1===e.riskType&&(g.mainRiskData=e),i.push(e)})),i=i.filter((e=>a.showRiskList.includes(e.id)))):(e||[]).forEach((e=>{1===e.riskType?(g.mainRiskData=e,i.push(e)):2===e.collocationType?i.push(e):o.push(e)})),g.riderRiskList=o,g.currentRiskList=i}),{deep:!0,immediate:!0}),(i,o)=>{var l,r,b;const h=B;return n(),s("div",Ne,[(n(!0),s(c,null,p(y(g).currentRiskList,((i,a)=>(n(),f(Ue,{key:i.id,"form-info":y(g).riskInfo[i.id],index:a,enums:e.enums,"main-risk-data":y(g).mainRiskData,"main-risk-info":y(g).mainRiskInfo,"origin-data":i,"remove-risk":I,"remove-risk-list":y(g).checkedList},null,8,["form-info","index","enums","main-risk-data","main-risk-info","origin-data","remove-risk-list"])))),128)),(null==(l=y(g).riderRiskList)?void 0:l.length)-(null==(r=y(g).checkedList)?void 0:r.length)&&"proposal"!==y(a).origin?(n(),s("div",qe,[m("span",Ee,k(`共有${y(g).riderRiskList.length-y(g).checkedList.length}款附加险可以添加`),1),d(h,{activated:"",class:"btn-rider-risk",onClick:o[0]||(o[0]=e=>y(v)(!0))},{default:u((()=>[je,Se])),_:1})])):_("",!0),y(t)?(n(),f(ke,{key:1,modelValue:y(g).checkedList,"onUpdate:modelValue":o[1]||(o[1]=e=>y(g).checkedList=e),show:y(t),disabled:y(g).disabledList,"risk-list":y(g).riderRiskList,"collocation-list":(null==(b=y(g).mainRiskData)?void 0:b.collocationVOList)||[],onFinished:V,onClose:o[2]||(o[2]=e=>y(v)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):_("",!0)])}}}),[["__scopeId","data-v-4e393d2a"]]);const $e={class:"com-product-risk-wrapper"},Be={class:"popup-container"},Ge=(e=>(O("data-v-65cbf84c"),e=e(),C(),e))((()=>m("div",{class:"popup-title"},"请选择保障方案",-1))),Ke={class:"risk-trial-wrapper"},He={class:"risk-content"},Je={key:0,class:"risk"},We={class:"footer-bar"},Xe=g("确定");var ze=i(a({props:{isShow:{type:Boolean,default:!1},type:{default:"add"},productId:{default:0},riskType:{default:1},formInfo:{default:{}},productData:{default:()=>({})},holder:{default:()=>({})},insured:{default:()=>({})},riderRisk:{default:()=>[]},currentRisk:{default:()=>[]}},emits:["close","finished"],setup(e,{emit:i}){var a,t;const c=e,p=o({personVO:{occupationCodeList:[],...c.holder}}),v=o({insuredCode:"",personVO:{occupationCodeList:(null==(t=((null==(a=c.insured)?void 0:a.proposalInsuredProductList)||[]).find((e=>e.productId===c.productData.productBasicInfoVO.id)))?void 0:t.occupationCodeList)||[],...c.insured}}),k=o({}),g=o({}),V=o({}),I=o({}),b=o({}),h=l({currentPlan:"0",isShow:c.isShow,riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],type:c.type});G("premium",b.value),G("source",{type:h.type,origin:"proposal",showRiskList:c.currentRisk});const O=A((()=>{var e;let i="";if(null==(e=h.riskData)?void 0:e[0]){const e=h.riskData[0],a=((null==e?void 0:e.requiredRiderRiskVOList)||[]).map((e=>e.riskName));a.length&&(i=`特殊提示: ${e.riskName}和${a.join("、")}必须同时投保`)}return i})),C=()=>{var e;const a=JSON.parse(JSON.stringify(k.value[h.currentPlan])),o=Object.values(a).find((e=>1===e.riskType)),l=Object.values(a).map((e=>{const i=e;return((e,i)=>{var a,o,l,t;const r=e;if("3"===r.chargePeriod){const e=(i.chargePeriod||"").split("_");if(e[1]-=1,1===r.exemptFlag){if("to"===e[0]){let i=0;1===r.exemptType?(null==(a=p.value.personVO)?void 0:a.birthday)&&(i=parseInt(""+(+new Date-new Date(null==(o=p.value.personVO)?void 0:o.birthday))/31536e6,10)):2===r.exemptType&&(null==(l=v.value.personVO)?void 0:l.birthday)&&(i=parseInt(""+(+new Date-new Date(null==(t=v.value.personVO)?void 0:t.birthday))/31536e6,10)),e[1]=e[1]-i}e[0]="year",r.coveragePeriod=e.join("_")}r.chargePeriod=e.join("_")}})(i,o),i.liabilityVOList=(i.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const i=e;return"0"===i.liabilityAttributeValue&&(i.liabilityAttributeValue=""),i})),i})),t={holder:p.value,productCode:h.riskBaseInfo.productCode,insuredVOList:[{...v.value,productPlanVOList:[{planCode:h.currentPlan||"",insurerCode:null==(e=h.riskBaseInfo)?void 0:e.insurerCode,riskVOList:l}]}]};ne({...t}).then((({code:e,data:a})=>{if("10000"===e){h.retrialTip=!1,h.trialResult=a,h.canTrial=!1;const e={},o=(i=[])=>{(i||[]).forEach((i=>{var a;e[i.riskCode]=i,(null==(a=i.riskPremiumDetailVOList)?void 0:a.length)&&o(i.riskPremiumDetailVOList)}))};o(a.riskPremiumDetailVOList),Object.assign(b.value,e),i("finished",((e,i)=>{var a,o,l,t,r,n,s,d,u;const m=(e.insuredVOList[0].productPlanVOList[0].riskVOList||[]).map((e=>({...e,premium:i[e.riskCode].premium,amount:i[e.riskCode].amount})));return{proposalHolder:{...null==(a=e.holder)?void 0:a.personVO},proposalInsuredList:[{...e.insuredVOList[0].personVO,dateRange:{min:null==(l=null==(o=V.value)?void 0:o.ageRangeObj)?void 0:l.minAge,max:null==(r=null==(t=V.value)?void 0:t.ageRangeObj)?void 0:r.maxAge},proposalInsuredProductList:[{productId:h.riskBaseInfo.id,productName:h.riskBaseInfo.productName,dateRange:{min:null==(s=null==(n=V.value)?void 0:n.ageRangeObj)?void 0:s.minAge,max:null==(u=null==(d=V.value)?void 0:d.ageRangeObj)?void 0:u.maxAge},occupationCodeList:e.insuredVOList[0].personVO.occupationCodeList,proposalProductRiskList:m}]}]}})(t,e))}else h.retrialTip=!0}))},R=()=>{var e,i,a,o,l;Promise.all([null==(i=null==(e=g.value)?void 0:e.validateForm)?void 0:i.call(e),null==(o=null==(a=V.value)?void 0:a.validateForm)?void 0:o.call(a),null==(l=I.value)?void 0:l.validate()]).then((()=>{C()}))},P=()=>{i("close")},x=e=>{h.holderFactor=e.holderFactorList,h.insuredFactor=e.insuredFactorList,h.ageRange=e.ageRange};return r([()=>k.value,()=>p.value,()=>v.value],(e=>{e&&!h.canTrial&&(h.canTrial=!0,h.retrialTip=!0)}),{deep:!0}),r((()=>c.isShow),(e=>{h.isShow=e}),{immediate:!0}),r((()=>c.productId),(e=>{e&&re({productId:c.productId,source:2}).then((({code:e,data:i})=>{"10000"===e&&(h.riskBaseInfo=i.productBasicInfoVO,(i.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,i)=>{0===i&&(h.currentPlan=e.planCode||"0"),Object.assign(k.value,{[e.planCode||i]:{}})})),h.riskData=i.productRiskVoList[0].riskDetailVOList||[],h.riskPlanData=i.productRelationPlanVOList||[])})).finally((()=>{}))}),{immediate:!0}),r((()=>c.formInfo),((e={})=>{if("add"!==c.type&&"repeatAdd"!==c.type){const i={};e.proposalProductRiskList.forEach((e=>{i[e.riskId]=e})),Object.assign(k.value,{0:i})}}),{deep:!0,immediate:!0}),r((()=>c.productData),(e=>{var i;"add"!==c.type&&"repeatAdd"!==c.type&&(h.riskBaseInfo=e.productBasicInfoVO,h.riskData=(null==(i=e.productRiskVoList)?void 0:i[0].riskDetailVOList)||[])}),{deep:!0,immediate:!0}),r((()=>c.type),(e=>{h.type=e})),E((()=>{K({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:i})=>{if("10000"===e){const e={};i.forEach((i=>{e[i.dictCode]=i.dictItemList})),h.enumList=e}}))})),(e,i)=>{const a=H,o=J,l=N,t=L,r=D;return n(),s("div",$e,[d(r,{show:y(h).isShow,"onUpdate:show":i[0]||(i[0]=e=>y(h).isShow=e),round:"",position:"bottom",closeable:"",style:{height:"80%"},onClose:P},{default:u((()=>[m("div",Be,[Ge,y(O)?(n(),f(a,{key:0,content:y(O)},null,8,["content"])):_("",!0),m("div",Ke,[y(h).holderFactor.length?(n(),f(o,{key:0,title:"投保人",class:"part-card"},{default:u((()=>{var e;return[d(Ie,{ref_key:"holderRef",ref:g,"insured-code":null==(e=y(h).riskBaseInfo)?void 0:e.insurerCode,"form-info":p.value.personVO,"factor-list":y(h).holderFactor,"age-range":y(h).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])]})),_:1})):_("",!0),y(h).insuredFactor.length?(n(),f(o,{key:1,title:"被保人",class:"part-card"},{default:u((()=>{var e;return[d(Ie,{ref_key:"insuredRef",ref:V,"insured-code":null==(e=y(h).riskBaseInfo)?void 0:e.insurerCode,"form-info":v.value.personVO,"factor-list":y(h).insuredFactor,"age-range":y(h).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])]})),_:1})):_("",!0),m("div",He,[d(o,{title:"投保方案",class:"part-card"},{default:u((()=>[y(h).riskData.length?(n(),s("div",Je,[d(l,{ref_key:"riskFormRef",ref:I,"input-align":"right","error-message-align":"right"},{default:u((()=>[d(Ye,{"risk-info":k.value[0],enums:y(h).enumList,"origin-data":y(h).riskData,"pick-factor":x},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):_("",!0)])),_:1})])]),m("div",We,[d(t,{block:"",type:"primary",onClick:R},{default:u((()=>[Xe])),_:1})])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-65cbf84c"]]);export{ze as P,ke as R,se as u};
