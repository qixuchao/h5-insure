!function(){var e=document.createElement("style");e.innerHTML=".com-personal-info-wrapper .placeholder[data-v-fe04f040]{color:#99a9c0}.com-risk-card-wrapper.part-card[data-v-5eec8cac]{background-color:#fff;margin-bottom:.26667rem}.com-risk-card-wrapper .delete-risk[data-v-5eec8cac]{display:flex;align-items:center;justify-content:center;margin-top:.06667rem}.com-risk-card-wrapper .delete-risk .svg-icon[data-v-5eec8cac]{font-size:.42667rem}.com-risk-card-wrapper .custom-field[data-v-5eec8cac]{display:flex;flex-direction:column}.com-risk-card-wrapper .custom-field .field-tip[data-v-5eec8cac]{font-size:.32rem;font-weight:400;color:#99a9c0}.com-risk-list-wrapper .popup-title[data-v-1f13cbe8]{height:1.38667rem;display:flex;align-items:center;justify-content:center;padding:0 .85333rem;font-size:.45333rem;font-weight:600;color:#393d46}.com-risk-list-wrapper .risk-list[data-v-1f13cbe8]{height:13.84rem;padding-bottom:2rem}.com-risk-list-wrapper[data-v-1f13cbe8] .van-cell-group--inset{border-bottom:1px solid #eeeff4}.com-risk-list-wrapper[data-v-1f13cbe8] .van-cell-group--inset .van-cell{padding:.30667rem 0}.com-risk-list-wrapper .cell-title[data-v-1f13cbe8]{display:flex;flex-direction:column}.com-risk-list-wrapper .cell-title .title-desc[data-v-1f13cbe8]{font-size:.32rem;font-weight:400;color:#99a9c0}.com-risk-list-wrapper .footer-bar[data-v-1f13cbe8]{padding:0 .53333rem;position:absolute;width:100%;height:2rem;bottom:0;display:flex;align-items:center;justify-content:center}.risk-list-wrapper[data-v-1afa9508]{margin-bottom:3.13333rem}.risk-list-wrapper .add-rider-risk[data-v-1afa9508]{background-color:#fff;margin-top:-.26667rem;height:1.41333rem;display:flex;align-items:center;justify-content:space-between;padding:var(--van-cell-vertical-padding) var(--van-cell-horizontal-padding)}.risk-list-wrapper .add-rider-risk .left-part[data-v-1afa9508]{font-weight:400;color:#99a9c0;font-size:.4rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-a96446a8.js","./trial-legacy-e9bfc152.js","./index-legacy-1beddeaa.js","./useDicData-legacy-91529f1d.js"],(function(e){"use strict";var i,a,o,l,t,n,r,d,s,u,m,c,p,f,v,k,y,g,V,I,b,h,L,D,C,O,R,P,A,w,x,_,T,F,M,U,q,N,E;return{setters:[function(e){i=e.g,a=e.Q,o=e.E,l=e.a7,t=e.M,n=e.y,r=e.d,d=e._,s=e.r,u=e.j,m=e.n,c=e.p,p=e.m,f=e.A,v=e.k,k=e.t,y=e.R,g=e.o,V=e.z,I=e.J,b=e.F,h=e.G,L=e.al,D=e.am,C=e.a4,O=e.a5,R=e.C,P=e.D},function(e){A=e.S,w=e.a,x=e.R,_=e.b,T=e.A,F=e.c,M=e.L,U=e.d},function(e){q=e._,N=e.c},function(e){E=e.u}],execute:function(){const Y={class:"com-personal-info-wrapper"};e("P",q(i({props:{formInfo:{default:()=>({})},insuredCode:{default:""},factorList:{default:()=>[]},ageRange:{default:()=>[]}},setup(e,{expose:i}){var g,V;const I=e,b=E(`${null===(g=I.insuredCode)||void 0===g||null===(V=g.toLocaleUpperCase)||void 0===V?void 0:V.call(g)}_OCCUPATION`),[h,L]=a(),D=o(),C=l("source")||{},O=t({formInfo:I.formInfo,occupationalText:"",occupationCodeList:[]}),R=n((()=>{const e=(e=>{const i=e||[];for(let a=0;a<i.length;a++)for(let e=a+1;e<i.length;e++){const o=i[a].split("_"),l=i[e].split("_"),t=i[a];o[0]===l[0]?o>l&&(i[a]=i[e],i[e]=t):"age"===o[0]&&(i[a]=i[e],i[e]=t)}return i})(null==I?void 0:I.ageRange),i=(e="")=>[+e.split("_")[1],e.split("_")[0]],a=i(e[0]),o=i(e[e.length-1]),l=r().subtract(a[0],"age"===a[1]?"year":"day").format("YYYY-MM-DD"),t=r().subtract(o[0],"age"===o[1]?"year":"day").format("YYYY-MM-DD");return{minAge:new Date(t),maxAge:new Date(l)}}));return d((()=>O.formInfo.occupationCodeList),(e=>{}),{deep:!0,immediate:!0}),i({validateForm:()=>new Promise(((e,i)=>{null==D||D.value.validate().then((()=>{e("")}),(()=>{i()}))})),ageRangeObj:R.value}),(i,a)=>{const o=s("VanField"),l=s("ProRadioButton"),t=s("VanForm"),n=s("van-datetime-picker"),d=s("van-popup");return u(),m("div",Y,[c(t,{ref_key:"formRef",ref:D,"input-align":"right","error-message-align":"right"},{default:p((()=>["proposal"===f(C).type&&("add"===f(C).type||"repeatAdd"===f(C).type)||"proposal"!==f(C).type&&(e.factorList.includes("APPLICANT.AGE")||e.factorList.includes("AGE")||e.factorList.includes("DAY")||e.factorList.includes("APPLICANT.DAY"))?(u(),v(o,{key:0,modelValue:f(O).formInfo.birthday,"onUpdate:modelValue":a[0]||(a[0]=e=>f(O).formInfo.birthday=e),rules:[{required:!0,message:"请选择出生日期"}],name:"birth",label:"出生日期",class:"isLink",readonly:"","is-link":"",formatter:e=>e?f(r)(e).format("YYYY-MM-DD"):e,placeholder:"请选择",onClick:a[1]||(a[1]=e=>f(L)(!0))},null,8,["modelValue","formatter"])):k("",!0),"proposal"===f(C).type&&("add"===f(C).type||"repeatAdd"===f(C).type)||"proposal"!==f(C).type&&(e.factorList.includes("APPLICANT.GENDER")||e.factorList.includes("GENDER"))?(u(),v(o,{key:1,modelValue:f(O).formInfo.gender,"onUpdate:modelValue":a[3]||(a[3]=e=>f(O).formInfo.gender=e),name:"gender",label:"性别",rules:[{required:!0,message:"请选择性别"}]},{input:p((()=>[c(l,{modelValue:f(O).formInfo.gender,"onUpdate:modelValue":a[2]||(a[2]=e=>f(O).formInfo.gender=e),options:f(A)},null,8,["modelValue","options"])])),_:1},8,["modelValue"])):k("",!0),e.factorList.includes("SOCIAL_INS")?(u(),v(o,{key:2,modelValue:f(O).formInfo.socialFlag,"onUpdate:modelValue":a[5]||(a[5]=e=>f(O).formInfo.socialFlag=e),name:"socialFlag",label:"社保",rules:[{required:!0,message:"请选择社保"}]},{input:p((()=>[c(l,{modelValue:f(O).formInfo.socialFlag,"onUpdate:modelValue":a[4]||(a[4]=e=>f(O).formInfo.socialFlag=e),options:f(w)},null,8,["modelValue","options"])])),_:1},8,["modelValue"])):k("",!0),e.factorList.includes("OCCUPATION_CATEGORY")?(u(),v(N,{key:3,modelValue:f(O).formInfo.occupationCodeList[0],"onUpdate:modelValue":a[6]||(a[6]=e=>f(O).formInfo.occupationCodeList[0]=e),field0:f(O).formInfo.occupationCodeList[0],"onUpdate:field0":a[7]||(a[7]=e=>f(O).formInfo.occupationCodeList[0]=e),field1:f(O).formInfo.occupationCodeList[1],"onUpdate:field1":a[8]||(a[8]=e=>f(O).formInfo.occupationCodeList[1]=e),field2:f(O).formInfo.occupationCodeList[2],"onUpdate:field2":a[9]||(a[9]=e=>f(O).formInfo.occupationCodeList[2]=e),required:"",name:"occupationCodeList",label:"职业类型","data-source":f(b),mapping:{label:"value",value:"code",children:"children"},"show-full-value":"","need-key":"name"},null,8,["modelValue","field0","field1","field2","data-source"])):k("",!0)])),_:1},512),c(d,{show:f(h),"onUpdate:show":a[12]||(a[12]=e=>y(h)?h.value=e:null),position:"bottom"},{default:p((()=>[c(n,{type:"date","min-date":f(R).minAge,"max-date":f(R).maxAge,onConfirm:a[10]||(a[10]=e=>{f(O).formInfo.birthday=f(r)(e).format("YYYY-MM-DD"),f(L)(!1)}),onCancel:a[11]||(a[11]=e=>f(L)(!1))},null,8,["min-date","max-date"])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-fe04f040"]]));const j={class:"com-risk-card-wrapper part-card"},$={class:"custom-field"},S={class:"field-tip"},z={class:"custom-field"},G={class:"field-tip"},B={class:"custom-field"},K={class:"field-tip"},H={key:0},J={key:9,class:"liab-desc"};var Q=q(i({props:{originData:{default:()=>({})},formInfo:{default:()=>({})},mainRiskData:{default:()=>({})},mainRiskInfo:{default:()=>({})},index:{default:0},removeRisk:{type:Function,default:()=>{}},removeRiskList:{default:()=>[]},enums:{default:()=>({})}},setup(e){const i=e,a=o({}),r=l("premium")||{};a.value=l("enumList")||{};const y=o({chargePeriod:{disabled:!1,prevent:!1},coveragePeriod:{disabled:!1,prevent:!1},paymentFrequency:{disabled:!1,prevent:!1}}),L=t({formInfo:i.formInfo}),D=e=>"boolean"!=typeof e&&!e||(!(!Array.isArray(e)||e.length)||"[object Object]"==={}.toString.call(e)&&Object.keys(e).length),C=(e,i,a={})=>{let o=i;return Array.isArray(i)||(o=[`${o}`]),(e||[]).filter((e=>o.includes(`${e.value}`)||o.includes(e.value)))},O=n((()=>{var e,a,o,l,t;return 1===(null===(e=i.originData)||void 0===e?void 0:e.riskType)?C(i.enums.RISK_INSURANCE_PERIOD,(null===(t=i.originData.riskInsureLimitVO)||void 0===t?void 0:t.insurancePeriodValueList)||[]):2===(null===(a=i.originData)||void 0===a?void 0:a.periodType)?C([{value:"year_1",name:"1年"}],["year_1"]):C(null===(o=i.enums)||void 0===o?void 0:o.RISK_INSURANCE_PERIOD,(null===(l=i.mainRiskData.riskInsureLimitVO)||void 0===l?void 0:l.insurancePeriodValueList)||[])})),R=n((()=>{var e,a,o,l,t,n,r,d;return 1===(null===(e=i.originData)||void 0===e?void 0:e.riskType)?C(null==i||null===(t=i.enums)||void 0===t?void 0:t.RISK_PAYMENT_PERIOD,(null===(n=i.originData.riskInsureLimitVO)||void 0===n?void 0:n.paymentPeriodValueList)||[]):1===(null===(a=i.originData)||void 0===a?void 0:a.exemptFlag)?C(x,[`${null==i||null===(r=i.originData)||void 0===r||null===(d=r.riskInsureLimitVO)||void 0===d?void 0:d.paymentPeriodRule}`]):2===(null===(o=i.originData)||void 0===o?void 0:o.periodType)?C([{value:"year_1",name:"1年交"}],["year_1"]):C(i.enums.RISK_PAYMENT_PERIOD,(null===(l=i.mainRiskData.riskInsureLimitVO)||void 0===l?void 0:l.paymentPeriodValueList)||[])})),P=n((()=>{var e,a,o,l,t;return 1===(null===(e=i.originData)||void 0===e?void 0:e.riskType)?C(_,(null===(l=i.originData.riskInsureLimitVO)||void 0===l?void 0:l.paymentFrequencyList)||[]):1===(null===(a=i.originData.riskInsureLimitVO)||void 0===a?void 0:a.paymentTypeRule)?C(_,(null===(t=i.mainRiskData.riskInsureLimitVO)||void 0===t?void 0:t.paymentFrequencyList)||[]):C(_,(null===(o=i.mainRiskData.riskInsureLimitVO)||void 0===o?void 0:o.paymentFrequencyList)||[])})),A=n((()=>{var e,a;let o=0,l=0;return((null===(e=i.originData)||void 0===e||null===(a=e.riskCalcMethodInfoVO)||void 0===a?void 0:a.paymentMethodLimitList)||[]).forEach(((e,i)=>{0===i&&(o=e.minAmount,l=e.maxAmount),o>e.minAmount&&(o=e.minAmount),l<e.maxAmount&&(l=e.maxAmount)})),L.formInfo.amount=L.formInfo.amount||o,{min:o,max:l}})),w=n((()=>{var e,a;let o=0,l=0;return((null===(e=i.originData)||void 0===e||null===(a=e.riskCalcMethodInfoVO)||void 0===a?void 0:a.paymentMethodLimitList)||[]).forEach(((e,i)=>{0===i&&(o=e.minPremium,l=e.maxPremium),o>e.minPremium&&(o=e.minPremium),l<e.maxPremium&&(l=e.maxPremium)})),L.formInfo.premium=L.formInfo.premium||o,{min:o,max:l}})),q=n((()=>{var e,a,o,l;const t=(null===(e=i.originData)||void 0===e||null===(a=e.riskCalcMethodInfoVO)||void 0===a?void 0:a.minCopy)||1,n=null===(o=i.originData)||void 0===o||null===(l=o.riskCalcMethodInfoVO)||void 0===l?void 0:l.maxCopy;return L.formInfo.copy=`${L.formInfo.copy||t||1}`,{min:t,max:n}})),N=(e,a,o)=>{var l,t;const n=(null===(l=i.originData)||void 0===l||null===(t=l.riskCalcMethodInfoVO)||void 0===t?void 0:t.increaseDecreaseNum)||1;if("sumInsured"===o){if(A.value.max&&+e>A.value.max)return`金额最大${A.value.max}元`;if(+e<A.value.min)return`金额最小${A.value.min}元`}else{if(w.value.max&&+e>w.value.max)return`金额最大${w.value.max}元`;if(+e<w.value.min)return`金额最小${w.value.min}元`}return+e%n==0?"":`金额必须是${n}的倍数`};return g((()=>{var e,a;const o={riskType:i.originData.riskType,riskId:i.originData.id,riskName:i.originData.riskName,riskCode:i.originData.riskCode,mainRiskCode:1!==i.originData.riskType?null===(e=i.mainRiskData)||void 0===e?void 0:e.riskCode:void 0,mainRiskId:1!==i.originData.riskType?null===(a=i.mainRiskData)||void 0===a?void 0:a.id:void 0,riskCategory:i.originData.riskCategory,liabilityVOList:(i.originData.riskLiabilityInfoVOList||[]).map((e=>({...e,liabilityAttributeCode:e.liabilityAttributeType,liabilityCode:e.liabilityCode,liabilityRateType:e.liabilityRateType})))};Object.assign(null==L?void 0:L.formInfo,o)})),d((()=>{var e;return null===(e=L.formInfo)||void 0===e?void 0:e.paymentFrequency}),((e=0)=>{var a,o,l;[3].includes((null===(a=i.originData.riskCalcMethodInfoVO)||void 0===a?void 0:a.saleMethod)||0)&&((null===(o=i.originData)||void 0===o||null===(l=o.riskCalcMethodInfoVO)||void 0===l?void 0:l.paymentMethodLimitList)||[]).forEach((i=>{+i.paymentFrequency==+e&&Object.assign(L.formInfo,{amount:i.perCopyAmount,premium:i.perCopyPremium})}));1==+e&&"single"!==L.formInfo.chargePeriod&&(L.formInfo.chargePeriod="single")})),d((()=>{var e;return null===(e=L.formInfo)||void 0===e?void 0:e.copy}),(e=>{var a,o;4===(null===(a=i.originData.riskCalcMethodInfoVO)||void 0===a?void 0:a.saleMethod)&&(L.formInfo.amount=null===(o=i.originData.riskCalcMethodInfoVO)||void 0===o?void 0:o.fixedAmount)})),d((()=>{var e;return null===(e=L.formInfo)||void 0===e?void 0:e.chargePeriod}),(e=>{"single"===e&&1!=+(L.formInfo.paymentFrequency||0)&&(L.formInfo.paymentFrequency=1)})),d((()=>null==i?void 0:i.mainRiskInfo),(e=>{var a,o,l,t,n,r;e&&2===i.originData.riskType&&(1===(null===(a=i.originData)||void 0===a||null===(o=a.riskInsureLimitVO)||void 0===o?void 0:o.insurancePeriodRule)&&(e.coveragePeriod?y.value.coveragePeriod.disabled=!0:y.value.coveragePeriod.prevent=!0,L.formInfo.coveragePeriod=e.coveragePeriod||""),1===(null===(l=i.originData)||void 0===l||null===(t=l.riskInsureLimitVO)||void 0===t?void 0:t.paymentPeriodRule)&&(e.chargePeriod?y.value.chargePeriod.disabled=!0:y.value.chargePeriod.prevent=!0,L.formInfo.chargePeriod=e.chargePeriod||""),1===(null===(n=i.originData)||void 0===n||null===(r=n.riskInsureLimitVO)||void 0===r?void 0:r.paymentTypeRule)&&(e.paymentFrequency?y.value.paymentFrequency.disabled=!0:y.value.paymentFrequency.prevent=!0,L.formInfo.paymentFrequency=e.paymentFrequency||0))}),{immediate:!0,deep:!0}),(i,a)=>{var o,l,t,n,d,g,x,_,E,Y,Q,W,X,Z,ee,ie,ae,oe,le,te,ne,re,de,se,ue,me,ce,pe,fe,ve;const ke=s("ProSvg"),ye=s("ProTitle"),ge=s("VanStepper"),Ve=s("VanField"),Ie=s("ProRadioButton"),be=s("ProExpand");return u(),m("div",j,[c(ye,{"risk-type":e.originData.riskType,title:e.originData.riskName},{default:p((()=>[e.removeRiskList.includes(e.originData.id)?(u(),m("div",{key:0,class:"delete-risk",onClick:a[0]||(a[0]=i=>e.removeRisk(e.originData.id))},[c(ke,{name:"delete",color:"#0d6efe"})])):k("",!0)])),_:1},8,["risk-type","title"]),1===(null===(o=e.originData.riskCalcMethodInfoVO)||void 0===o?void 0:o.saleMethod)&&2===e.originData.exemptFlag?(u(),v(Ve,{key:0,modelValue:f(L).formInfo.amount,"onUpdate:modelValue":a[2]||(a[2]=e=>f(L).formInfo.amount=e),label:"保额",name:"amount",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...e)=>N(...e,"sumInsured")}]},{input:p((()=>{var i,o;return[V("div",$,[c(ge,{modelValue:f(L).formInfo.amount,"onUpdate:modelValue":a[1]||(a[1]=e=>f(L).formInfo.amount=e),"input-width":"64px",min:f(A).min,step:(null===(i=e.originData.riskCalcMethodInfoVO)||void 0===i?void 0:i.increaseDecreaseNum)||1,max:f(A).max},null,8,["modelValue","min","step","max"]),V("span",S,I(`金额最低${f(A).min}元，为${(null===(o=e.originData.riskCalcMethodInfoVO)||void 0===o?void 0:o.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):k("",!0),2===(null===(l=e.originData)||void 0===l||null===(t=l.riskCalcMethodInfoVO)||void 0===t?void 0:t.saleMethod)?(u(),v(Ve,{key:1,modelValue:f(L).formInfo.premium,"onUpdate:modelValue":a[4]||(a[4]=e=>f(L).formInfo.premium=e),label:"保费",name:"premium",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...e)=>N(...e,"premium")}]},{input:p((()=>{var i,o,l,t;return[V("div",z,[c(ge,{modelValue:f(L).formInfo.premium,"onUpdate:modelValue":a[3]||(a[3]=e=>f(L).formInfo.premium=e),step:(null===(i=e.originData)||void 0===i||null===(o=i.riskCalcMethodInfoVO)||void 0===o?void 0:o.increaseDecreaseNum)||1,min:f(w).min,"input-width":"64px",max:f(w).max},null,8,["modelValue","step","min","max"]),V("span",G,I(`金额最低${f(w).min}元，为${(null===(l=e.originData)||void 0===l||null===(t=l.riskCalcMethodInfoVO)||void 0===t?void 0:t.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):k("",!0),3===(null===(n=e.originData)||void 0===n||null===(d=n.riskCalcMethodInfoVO)||void 0===d?void 0:d.saleMethod)||4===(null===(g=e.originData)||void 0===g||null===(x=g.riskCalcMethodInfoVO)||void 0===x?void 0:x.saleMethod)&&(null!==(_=e.originData)&&void 0!==_&&null!==(E=_.riskCalcMethodInfoVO)&&void 0!==E&&E.minCopy||null!==(Y=e.originData)&&void 0!==Y&&null!==(Q=Y.riskCalcMethodInfoVO)&&void 0!==Q&&Q.maxCopy)?(u(),v(Ve,{key:2,modelValue:f(L).formInfo.copy,"onUpdate:modelValue":a[6]||(a[6]=e=>f(L).formInfo.copy=e),label:"投保份数",name:"copy",rules:[{required:!0,message:"请填写"}]},{input:p((()=>[V("div",B,[c(ge,{modelValue:f(L).formInfo.copy,"onUpdate:modelValue":a[5]||(a[5]=e=>f(L).formInfo.copy=e),step:1,min:f(q).min,max:f(q).max},null,8,["modelValue","min","max"]),V("span",K,I(`${f(q).min}份起购，最多购买${f(q).max}份`),1)])])),_:1},8,["modelValue"])):k("",!0),[1].includes((null===(W=e.originData.riskCalcMethodInfoVO)||void 0===W?void 0:W.saleMethod)||0)&&1!==(null===(X=e.originData)||void 0===X?void 0:X.exemptFlag)||!(e.originData.riskCalcMethodInfoVO.fixedAmount||null!==(Z=f(r))&&void 0!==Z&&Z[null===(ee=e.originData)||void 0===ee?void 0:ee.riskCode])?k("",!0):(u(),v(Ve,{key:3,label:"保额"},{input:p((()=>{var i,a,o,l;return[V("div",null,I((null===(i=e.originData.riskCalcMethodInfoVO)||void 0===i?void 0:i.fixedAmount)||(null===(a=f(r))||void 0===a||null===(o=a[null===(l=e.originData)||void 0===l?void 0:l.riskCode])||void 0===o?void 0:o.amount)),1)]})),_:1})),D(null===(ie=e.originData)||void 0===ie||null===(ae=ie.riskInsureLimitVO)||void 0===ae?void 0:ae.insurancePeriodValueList)&&D(null===(oe=e.originData)||void 0===oe||null===(le=oe.riskInsureLimitVO)||void 0===le?void 0:le.insurancePeriodRule)?k("",!0):(u(),v(Ve,{key:4,modelValue:f(L).formInfo.coveragePeriod,"onUpdate:modelValue":a[8]||(a[8]=e=>f(L).formInfo.coveragePeriod=e),label:"保障期间",name:"coveragePeriod",rules:[{required:!0,message:"请选择保障期间"}]},{input:p((()=>[c(Ie,{modelValue:f(L).formInfo.coveragePeriod,"onUpdate:modelValue":a[7]||(a[7]=e=>f(L).formInfo.coveragePeriod=e),disabled:y.value.coveragePeriod.disabled,prevent:y.value.coveragePeriod.prevent?"请先选择主险保障期间":"",options:f(O),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])),_:1},8,["modelValue"])),D(null===(te=e.originData)||void 0===te||null===(ne=te.riskInsureLimitVO)||void 0===ne?void 0:ne.paymentPeriodValueList)&&D(null===(re=e.originData)||void 0===re||null===(de=re.riskInsureLimitVO)||void 0===de?void 0:de.paymentPeriodRule)?k("",!0):(u(),v(Ve,{key:5,modelValue:f(L).formInfo.chargePeriod,"onUpdate:modelValue":a[10]||(a[10]=e=>f(L).formInfo.chargePeriod=e),label:"交费期间",name:"chargePeriod",rules:[{required:!0,message:"请选择交费期间"}]},{input:p((()=>[c(Ie,{modelValue:f(L).formInfo.chargePeriod,"onUpdate:modelValue":a[9]||(a[9]=e=>f(L).formInfo.chargePeriod=e),disabled:y.value.chargePeriod.disabled,prevent:y.value.chargePeriod.prevent?"请先选择主险交费期间":"",options:f(R),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])),_:1},8,["modelValue"])),D(null===(se=e.originData.riskInsureLimitVO)||void 0===se?void 0:se.paymentFrequencyList)&&D(null===(ue=e.originData.riskInsureLimitVO)||void 0===ue?void 0:ue.paymentPeriodRule)?k("",!0):(u(),v(Ve,{key:6,modelValue:f(L).formInfo.paymentFrequency,"onUpdate:modelValue":a[12]||(a[12]=e=>f(L).formInfo.paymentFrequency=e),label:"交费方式",name:"paymentFrequency",rules:[{required:!0,message:"请选择交费方式"}]},{input:p((()=>[c(Ie,{modelValue:f(L).formInfo.paymentFrequency,"onUpdate:modelValue":a[11]||(a[11]=e=>f(L).formInfo.paymentFrequency=e),disabled:y.value.paymentFrequency.disabled,prevent:y.value.paymentFrequency.prevent?"请先选择主险交费方式":"",options:f(P)},null,8,["modelValue","disabled","prevent","options"])])),_:1},8,["modelValue"])),D(null===(me=e.originData)||void 0===me||null===(ce=me.riskInsureLimitVO)||void 0===ce?void 0:ce.annuityDrawValueList)?k("",!0):(u(),v(Ve,{key:7,modelValue:f(L).formInfo.annuityDrawDate,"onUpdate:modelValue":a[14]||(a[14]=e=>f(L).formInfo.annuityDrawDate=e),label:"领取时间",name:"annuityDrawDate",rules:[{required:!0,message:"请选择领取时间"}]},{input:p((()=>{var i;return[c(Ie,{modelValue:f(L).formInfo.annuityDrawDate,"onUpdate:modelValue":a[13]||(a[13]=e=>f(L).formInfo.annuityDrawDate=e),options:C(f(T),(null===(i=e.originData.riskInsureLimitVO)||void 0===i?void 0:i.annuityDrawValueList)||[])},null,8,["modelValue","options"])]})),_:1},8,["modelValue"])),D(null===(pe=e.originData)||void 0===pe||null===(fe=pe.riskInsureLimitVO)||void 0===fe?void 0:fe.annuityDrawFrequencyList)?k("",!0):(u(),v(Ve,{key:8,modelValue:f(L).formInfo.annuityDrawType,"onUpdate:modelValue":a[16]||(a[16]=e=>f(L).formInfo.annuityDrawType=e),label:"领取方式",name:"annuityDrawType",rules:[{required:!0,message:"请选择领取方式"}]},{input:p((()=>{var i;return[c(Ie,{modelValue:f(L).formInfo.annuityDrawType,"onUpdate:modelValue":a[15]||(a[15]=e=>f(L).formInfo.annuityDrawType=e),options:C(f(F),(null===(i=e.originData.riskInsureLimitVO)||void 0===i?void 0:i.annuityDrawFrequencyList)||[])},null,8,["modelValue","options"])]})),_:1},8,["modelValue"])),(u(!0),m(b,null,h(e.originData.riskLiabilityInfoVOList||[],((i,a)=>(u(),m("div",{key:a},[1!==i.optionalFlag||D(i.liabilityAttributeValueList)?k("",!0):(u(),v(Ve,{key:0,modelValue:f(L).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>f(L).formInfo.liabilityVOList[a].liabilityAttributeValue=e,label:i.liabilityName,name:"liabilityAttributeValue",rules:[{required:i.liabilityAttributeValue,message:`请选择${i.liabilityName}`}]},{input:p((()=>{var o,l;return[V("div",null,[D(i.liabilityAttributeValueList)?(u(),m("span",H,"50万")):(u(),v(Ie,{key:1,modelValue:f(L).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>f(L).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:C(f(M),null===(o=e.originData.riskLiabilityInfoVOList)||void 0===o||null===(l=o[a])||void 0===l?void 0:l.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])),1!==i.optionalFlag?(u(),v(Ve,{key:1,modelValue:f(L).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>f(L).formInfo.liabilityVOList[a].liabilityAttributeValue=e,label:i.liabilityName,name:"liabilityAttributeValue"},{input:p((()=>{var o,l;return[V("div",null,[D(i.liabilityAttributeValueList)?(u(),v(Ie,{key:0,modelValue:f(L).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>f(L).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:f(U)},null,8,["modelValue","onUpdate:modelValue","options"])):(u(),v(Ie,{key:1,modelValue:f(L).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>f(L).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:C(f(M),null===(o=e.originData.riskLiabilityInfoVOList)||void 0===o||null===(l=o[a])||void 0===l?void 0:l.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label"])):k("",!0)])))),128)),null!==(ve=e.originData)&&void 0!==ve&&ve.relationDesc?(u(),m("div",J,[c(be,{title:"责任投保说明"},{default:p((()=>[V("div",null,I(e.originData.relationDesc),1)])),_:1})])):k("",!0)])}}}),[["__scopeId","data-v-5eec8cac"]]);const W={class:"com-risk-list-wrapper"},X=(e=>(C("data-v-1f13cbe8"),e=e(),O(),e))((()=>V("div",{class:"popup-title"},"选择附加险",-1))),Z={class:"risk-list"},ee={class:"cell-title"},ie={class:"title"},ae={class:"footer-bar"},oe=R("确认"),le=i({props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:i}){const a=e,l=o([]),n=o([]),r=o([...a.disabled]),k=t({show:a.show,currentChecked:[...a.modelValue]}),y=e=>{var i,o,t;if(r.value.includes(e))return;((e,i)=>{if(!a.collocationList.length)return i?void(k.currentChecked=[]):void k.currentChecked.push(e);let o=k.currentChecked,l=r.value;i?(a.collocationList.forEach((i=>{e===i.riskId&&(2===i.collocationType?o=o.filter((a=>a!==i.collocationRiskId||a!==e)):3===i.collocationType?(o=o.filter((i=>i!==e)),l=l.filter((e=>e!==i.collocationRiskId))):o=o.filter((i=>i!==e)))})),k.currentChecked=o,r.value=l):(a.collocationList.forEach((a=>{e===a.riskId&&(i||(2===a.collocationType?o.push(a.collocationRiskId):3===a.collocationType&&l.push(a.collocationRiskId),o.push(e)))})),k.currentChecked.push(...o),r.value=l)})(e,k.currentChecked.includes(e)),null==l||null===(i=l.value)||void 0===i||null===(o=i[e])||void 0===o||null===(t=o.toggle)||void 0===t||t.call(o)},g=()=>{i("close")},C=()=>{const e=a.riskList.filter((e=>k.currentChecked.includes(e.id)));i("update:modelValue",[...new Set(n.value)]),i("finished",e,r.value),i("close")};return L((()=>{l.value=[]})),d((()=>k.currentChecked),(e=>{n.value=e}),{deep:!0,immediate:!0}),d((()=>a.modelValue),(e=>{n.value=e||[],r.value.push(...e||[])}),{deep:!0,immediate:!0}),(i,a)=>{const o=s("van-checkbox"),t=s("VanCell"),d=s("van-cell-group"),L=s("van-checkbox-group"),O=s("VanButton"),R=s("VanPopup");return u(),m("div",W,[c(R,{show:f(k).show,"onUpdate:show":a[1]||(a[1]=e=>f(k).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:g},{default:p((()=>[X,V("div",Z,[c(L,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=e=>n.value=e)},{default:p((()=>[c(d,{inset:""},{default:p((()=>[(u(!0),m(b,null,h(e.riskList,(e=>(u(),v(t,{key:e.id,title:e.riskName,disabled:r.value.includes(e.id),onClick:i=>y(e.id)},{"right-icon":p((()=>[c(o,{ref_for:!0,ref:i=>l.value[e.id]=i,shape:"square",disabled:r.value.includes(e.id),name:e.id,onClick:D((i=>y(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:p((()=>[V("div",ee,[V("div",ie,I(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),V("div",ae,[c(O,{type:"primary",disabled:!f(k).currentChecked.length,block:"",onClick:C},{default:p((()=>[oe])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}});var te=e("a",q(le,[["__scopeId","data-v-1f13cbe8"]]));const ne={class:"risk-list-wrapper"},re={key:0,class:"add-rider-risk"},de={class:"left-part"},se=R("+ 附加险");e("R",q(i({props:{riskInfo:{default:()=>({})},originData:{default:()=>[]},pickFactor:{type:Function,default:()=>{}},enums:{default:()=>{}}},setup(e){const i=e,n=l("source")||{},[r,y]=a(!1);o(null),o(null);const g=t({mainRiskInfo:i.riskInfo,riskInfo:i.riskInfo,requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[],currentRiskList:[]}),L=(e,i)=>{g.currentRiskList=g.currentRiskList.concat(e),g.disabledList=i},D=e=>{P.confirm({message:"确定要删除附加险么？"}).then((()=>{var i;const a=[e];((null===(i=g.mainRiskData)||void 0===i?void 0:i.collocationVOList)||[]).forEach((i=>{e!==i.riskId||2!==i.collocationType&&3!==i.collocationType||a.push(i.collocationRiskId)})),g.checkedList=g.checkedList.filter((e=>!a.includes(e))),g.currentRiskList=g.currentRiskList.filter((e=>!a.includes(e.id)||(Object.assign(g.riskInfo,{[e.id]:void 0}),!1))),g.disabledList=g.disabledList.filter((e=>!a.includes(e)))})).catch((()=>{}))};return d((()=>g.currentRiskList),(e=>{const a=[g.mainRiskData,...e];let o=[],l=[];const t=[];a.forEach(((e,i)=>{var a,n,r;const d=(null==e||null===(a=e.riskCalcMethodInfoVO)||void 0===a?void 0:a.riskFactorRelationList)||[];o=o.concat(d.filter((e=>"insured"===e.factorObject)).map((e=>e.factorCode))),l=l.concat(d.filter((e=>"holder"===e.factorObject)).map((e=>e.factorCode))),t.push(null==e||null===(n=e.riskInsureLimitVO)||void 0===n?void 0:n.minHolderAge,null==e||null===(r=e.riskInsureLimitVO)||void 0===r?void 0:r.maxHolderAge)})),(e||[]).forEach((e=>{var i,a;const o={riskType:e.riskType,riskId:e.id,riskCode:e.riskCode,riskName:e.riskName,mainRiskCode:1!==e.riskType?null===(i=g.mainRiskData)||void 0===i?void 0:i.riskCode:void 0,mainRiskId:1!==e.riskType?null===(a=g.mainRiskData)||void 0===a?void 0:a.id:void 0,riskCategory:e.riskCategory,liabilityVOList:(e.riskLiabilityInfoVOList||[]).map((e=>({...e,liabilityAttributeCode:e.liabilityAttributeType,liabilityCode:e.liabilityCode,liabilityRateType:e.liabilityRateType})))};g.riskInfo[e.id]||Object.assign(g.riskInfo,{[e.id]:o})})),i.pickFactor({insuredFactorList:[...new Set(o)],holderFactorList:[...new Set(l)],ageRange:t})}),{deep:!0,immediate:!0}),d((()=>i.riskInfo),(e=>{g.mainRiskInfo=Object.values(e||{}).find((e=>1===(null==e?void 0:e.riskType)))||{}}),{deep:!0,immediate:!0}),d((()=>i.originData),(e=>{let i=[];const a=[];"proposal"===n.origin&&"add"!==n.type&&"repeatAdd"!==n.type?((e||[]).forEach((e=>{1===e.riskType&&(g.mainRiskData=e),i.push(e)})),i=i.filter((e=>n.showRiskList.includes(e.id)))):(e||[]).forEach((e=>{1===e.riskType?(g.mainRiskData=e,i.push(e)):2===e.collocationType?i.push(e):a.push(e)})),g.riderRiskList=a,g.currentRiskList=i}),{deep:!0,immediate:!0}),(i,a)=>{var o,l,t;const d=s("ProCheckButton");return u(),m("div",ne,[(u(!0),m(b,null,h(f(g).currentRiskList,((i,a)=>(u(),v(Q,{key:i.id,"form-info":f(g).riskInfo[i.id],index:a,enums:e.enums,"main-risk-data":f(g).mainRiskData,"main-risk-info":f(g).mainRiskInfo,"origin-data":i,"remove-risk":D,"remove-risk-list":f(g).checkedList},null,8,["form-info","index","enums","main-risk-data","main-risk-info","origin-data","remove-risk-list"])))),128)),(null===(o=f(g).riderRiskList)||void 0===o?void 0:o.length)-(null===(l=f(g).checkedList)||void 0===l?void 0:l.length)&&"proposal"!==f(n).origin?(u(),m("div",re,[V("span",de,I(`共有${f(g).riderRiskList.length-f(g).checkedList.length}款附加险可以添加`),1),c(d,{activated:"",onClick:a[0]||(a[0]=e=>f(y)(!0))},{default:p((()=>[se])),_:1})])):k("",!0),f(r)?(u(),v(te,{key:1,modelValue:f(g).checkedList,"onUpdate:modelValue":a[1]||(a[1]=e=>f(g).checkedList=e),show:f(r),disabled:f(g).disabledList,"risk-list":f(g).riderRiskList,"collocation-list":(null===(t=f(g).mainRiskData)||void 0===t?void 0:t.collocationVOList)||[],onFinished:L,onClose:a[2]||(a[2]=e=>f(y)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):k("",!0)])}}}),[["__scopeId","data-v-1afa9508"]]))}}}))}();
