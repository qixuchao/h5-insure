!function(){var e=document.createElement("style");e.innerHTML=".com-risk-list-wrapper .risk-list[data-v-7d3c3028]{height:13.84rem;padding-bottom:2rem}.com-risk-list-wrapper[data-v-7d3c3028] .van-cell-group--inset{border-bottom:0;border-radius:0;margin:0}.com-risk-list-wrapper[data-v-7d3c3028] .van-cell-group--inset .van-cell{padding:.42667rem .53333rem;align-items:center}.com-risk-list-wrapper[data-v-7d3c3028] .van-cell-group--inset .van-cell:after{width:9.6rem}.com-risk-list-wrapper[data-v-7d3c3028] .van-cell-group--inset .van-cell .van-checkbox__icon .van-icon{height:.42667rem;width:.42667rem;border-radius:.05333rem;line-height:.42667rem;font-size:.32rem}.com-risk-list-wrapper .cell-title[data-v-7d3c3028]{display:flex;flex-direction:column}.com-risk-list-wrapper .cell-title .title-desc[data-v-7d3c3028]{font-size:.32rem;font-weight:400;color:#99a9c0}.com-risk-list-wrapper .footer-bar[data-v-7d3c3028]{padding:0 .53333rem;position:absolute;width:100%;height:2rem;bottom:0;display:flex;align-items:center;justify-content:center}.com-personal-info-wrapper .placeholder[data-v-b6a7c104]{color:#99a9c0}.risk-responsibility .title[data-v-27faf794]{font-size:.34667rem;font-weight:500;color:#393d46;padding:.26667rem 0;padding-left:var(--van-cell-horizontal-padding);overflow:hidden}.risk-responsibility .responsibility-content[data-v-27faf794]{position:relative;padding-left:var(--zaui-page-border);font-size:.37333rem;color:#aab9d0;overflow:hidden}.risk-responsibility .responsibility-content li[data-v-27faf794]{display:flex;align-items:center;height:.77333rem;font-size:.34667rem}.risk-responsibility .responsibility-content li .responsibility-sign[data-v-27faf794]{width:.37333rem;height:.37333rem;line-height:.37333rem;text-align:center;border:1px solid #99a9c0;border-radius:50%;margin-right:.18667rem}.risk-responsibility .responsibility-content .show-button[data-v-27faf794]{position:absolute;left:50%;bottom:0;width:100%;height:1.17333rem;line-height:1.17333rem;background-color:#fff;text-align:center;transform:translate(-50%)}.com-risk-card-wrapper.part-card[data-v-3b9c2786]{background-color:#fff;border-bottom:.26667rem solid var(--zaui-global-bg, #f2f5fc)}.com-risk-card-wrapper .delete-risk[data-v-3b9c2786]{display:flex;align-items:center;justify-content:center;margin-top:.06667rem}.com-risk-card-wrapper .delete-risk .svg-icon[data-v-3b9c2786]{font-size:.42667rem}.com-risk-card-wrapper .custom-field[data-v-3b9c2786]{display:flex;flex-direction:column}.com-risk-card-wrapper .custom-field .field-tip[data-v-3b9c2786]{font-size:.32rem;font-weight:400;color:#99a9c0;line-height:1;margin:0 0 .10667rem}.risk-list-wrapper[data-v-4b309d85]{margin-bottom:3.13333rem}.risk-list-wrapper .add-rider-risk[data-v-4b309d85]{background-color:#fff;margin-top:-.26667rem;height:1.41333rem;display:flex;align-items:center;justify-content:space-between;padding:var(--van-cell-vertical-padding) var(--van-cell-horizontal-padding)}.risk-list-wrapper .add-rider-risk .left-part[data-v-4b309d85]{font-weight:400;color:#99a9c0;font-size:.4rem}.risk-list-wrapper .add-rider-risk .btn-rider-risk[data-v-4b309d85]{border:none;display:flex;align-items:center}.risk-list-wrapper .add-rider-risk .btn-rider-risk .btn-plus[data-v-4b309d85]{font-size:.58667rem;margin:0 .10667rem .13333rem}\n",document.head.appendChild(e),System.register(["./index-legacy-080a8765.js","./trial-legacy-33aafee0.js","./useDicData-legacy-9ede547e.js"],(function(e){"use strict";var i,a,t,o,r,l,n,s,d,u,m,c,p,f,y,k,g,b,V,v,I,h,L,D,C,O,w,R,x,A,P,T,_,F,M,U,N,q,E,Y,$,S,j,z;return{setters:[function(e){i=e._,a=e.d,t=e.r,o=e.z,r=e.o,l=e.a7,n=e.b,s=e.c,d=e.g,u=e.f,m=e.w,c=e.i,p=e.F,f=e.h,y=e.e,k=e.k,g=e.t,b=e.l,V=e.n,v=e.K,I=e.L,h=e.G,L=e.aB,D=e.x,C=e.$,O=e.j,w=e.at,R=e.aC,x=e.ay,A=e.aD,P=e.y,T=e.a8,_=e.J,F=e.an,M=e.a4},function(e){U=e.S,N=e.d,q=e.e,E=e.f,Y=e.A,$=e.g,S=e.L,j=e.h},function(e){z=e.u}],execute:function(){const B={class:"com-risk-list-wrapper"},G=(e=>(v("data-v-7d3c3028"),e=e(),I(),e))((()=>c("div",{class:"popup-title"},"选择附加险",-1))),H={class:"risk-list"},K={class:"cell-title"},J={class:"title"},Q={class:"footer-button"},W=V("确认"),X=a({props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:i}){const a=e,V=t([]),v=t([]),I=t([...a.disabled]),h=o({show:a.show,currentChecked:[...a.modelValue]}),L=e=>{if(I.value.includes(e))return;((e,i)=>{if(!a.collocationList.length)return i?void(h.currentChecked=[]):void h.currentChecked.push(e);let t=h.currentChecked,o=I.value;i?(a.collocationList.forEach((i=>{e===i.riskId&&(2===i.collocationType?t=t.filter((a=>a!==i.collocationRiskId||a!==e)):3===i.collocationType?(t=t.filter((i=>i!==e)),o=o.filter((e=>e!==i.collocationRiskId))):t=t.filter((i=>i!==e)))})),h.currentChecked=t,I.value=o):(a.collocationList.forEach((a=>{e===a.riskId&&(i||(2===a.collocationType?t.push(a.collocationRiskId):3===a.collocationType&&o.push(a.collocationRiskId),t.push(e)))})),h.currentChecked.push(...t),I.value=o)})(e,h.currentChecked.includes(e)),V?.value?.[e]?.toggle?.()},D=()=>{i("close")},C=()=>{const e=a.riskList.filter((e=>h.currentChecked.includes(e.id)));i("update:modelValue",[...new Set(v.value)]),i("finished",e,I.value),i("close")};return r((()=>{V.value=[]})),l((()=>h.currentChecked),(e=>{v.value=e}),{deep:!0,immediate:!0}),l((()=>a.modelValue),(e=>{v.value=e||[],I.value.push(...e||[])}),{deep:!0,immediate:!0}),(i,a)=>{const t=n("van-checkbox"),o=n("VanCell"),r=n("van-cell-group"),l=n("van-checkbox-group"),O=n("VanButton"),w=n("VanPopup");return s(),d("div",B,[u(w,{show:b(h).show,"onUpdate:show":a[1]||(a[1]=e=>b(h).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:D},{default:m((()=>[G,c("div",H,[u(l,{modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value=e)},{default:m((()=>[u(r,{inset:""},{default:m((()=>[(s(!0),d(p,null,f(e.riskList,(e=>(s(),y(o,{key:e.id,title:e.riskName,disabled:I.value.includes(e.id),onClick:i=>L(e.id)},{"right-icon":m((()=>[u(t,{ref_for:!0,ref:i=>V.value[e.id]=i,shape:"square",disabled:I.value.includes(e.id),name:e.id,onClick:k((i=>L(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:m((()=>[c("div",K,[c("div",J,g(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),c("div",Q,[u(O,{type:"primary",disabled:!b(h).currentChecked.length,block:"",onClick:C},{default:m((()=>[W])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}});var Z=e("R",i(X,[["__scopeId","data-v-7d3c3028"]]));const ee={class:"com-personal-info-wrapper"},ie={class:"pro-radio-wrap"},ae={class:"pro-radio-wrap"};e("P",i(a({props:{formInfo:{default:()=>({})},insuredCode:{default:""},factorList:{default:()=>[]},ageRange:{default:()=>[]}},setup(e,{expose:i}){const a=e,r=z(`${a.insuredCode?.toLocaleUpperCase?.()}_OCCUPATION`),[l,p]=h(),f=t(),k=L("source")||{},g=o({formInfo:a.formInfo,occupationalText:"",occupationCodeList:[]}),V=D((()=>{const e=(e=>{const i=e||[];for(let a=0,t=i.length;a<t;a++)for(let e=a+1;e<t;e++){const t=i[a].split("_"),o=i[e].split("_"),r=i[a];t[0]===o[0]?t>o&&(i[a]=i[e],i[e]=r):"age"===t[0]&&(i[a]=i[e],i[e]=r)}return i})(a?.ageRange),i=(e="")=>[+e.split("_")[1],e.split("_")[0]],t=i(e[0]),o=i(e[e.length-1]),r=C().subtract(t[0],"age"===t[1]?"year":"day").format("YYYY-MM-DD");let l=C().subtract(o[0],"age"===o[1]?"year":"day").format("YYYY-MM-DD");return C(l).subtract(1,"year").isBefore(r)&&(l=C(l).subtract(1,"year").add(1,"day").format("YYYY-MM-DD")),{minAge:new Date(l),maxAge:new Date(r)}}));return i({validateForm:()=>new Promise(((e,i)=>{f.value?.validate().then((()=>{e("")}),(e=>{f.value?.scrollToField(e?.[0].name),i()}))})),ageRangeObj:V.value}),(i,a)=>{const t=n("VanField"),o=n("ProRadioButton"),v=n("VanForm"),I=n("van-datetime-picker"),h=n("van-popup");return s(),d("div",ee,[u(v,{ref_key:"formRef",ref:f,"input-align":"right","error-message-align":"right"},{default:m((()=>["proposal"===b(k).type&&("add"===b(k).type||"repeatAdd"===b(k).type)||"proposal"!==b(k).type&&(e.factorList.includes("APPLICANT.AGE")||e.factorList.includes("AGE")||e.factorList.includes("DAY")||e.factorList.includes("APPLICANT.DAY"))?(s(),y(t,{key:0,modelValue:b(g).formInfo.birthday,"onUpdate:modelValue":a[0]||(a[0]=e=>b(g).formInfo.birthday=e),rules:[{required:!0,message:"请选择出生日期"}],name:"birth",label:"出生日期",class:"isLink",readonly:"","is-link":"",formatter:e=>e?b(C)(e).format("YYYY-MM-DD"):e,placeholder:"请选择",onClick:a[1]||(a[1]=e=>b(p)(!0))},null,8,["modelValue","formatter"])):O("",!0),"proposal"===b(k).type&&("add"===b(k).type||"repeatAdd"===b(k).type)||"proposal"!==b(k).type&&(e.factorList.includes("APPLICANT.GENDER")||e.factorList.includes("GENDER"))?(s(),y(t,{key:1,modelValue:b(g).formInfo.gender,"onUpdate:modelValue":a[3]||(a[3]=e=>b(g).formInfo.gender=e),name:"gender",label:"性别",rules:[{required:!0,message:"请选择性别"}]},{input:m((()=>[c("div",ie,[u(o,{modelValue:b(g).formInfo.gender,"onUpdate:modelValue":a[2]||(a[2]=e=>b(g).formInfo.gender=e),options:b(w)},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])):O("",!0),e.factorList.includes("SOCIAL_INS")||e.factorList.includes("APPLICANT.SOCIAL_INS")?(s(),y(t,{key:2,modelValue:b(g).formInfo.socialFlag,"onUpdate:modelValue":a[5]||(a[5]=e=>b(g).formInfo.socialFlag=e),name:"socialFlag",label:"社保",rules:[{required:!0,message:"请选择社保"}]},{input:m((()=>[c("div",ae,[u(o,{modelValue:b(g).formInfo.socialFlag,"onUpdate:modelValue":a[4]||(a[4]=e=>b(g).formInfo.socialFlag=e),options:b(U)},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])):O("",!0),e.factorList.includes("OCCUPATION_CATEGORY")||e.factorList.includes("APPLICANT.OCCUPATION_CATEGORY")?(s(),y(R,{key:3,modelValue:b(g).formInfo.occupationCodeList[0],"onUpdate:modelValue":a[6]||(a[6]=e=>b(g).formInfo.occupationCodeList[0]=e),field0:b(g).formInfo.occupationCodeList[0],"onUpdate:field0":a[7]||(a[7]=e=>b(g).formInfo.occupationCodeList[0]=e),field1:b(g).formInfo.occupationCodeList[1],"onUpdate:field1":a[8]||(a[8]=e=>b(g).formInfo.occupationCodeList[1]=e),field2:b(g).formInfo.occupationCodeList[2],"onUpdate:field2":a[9]||(a[9]=e=>b(g).formInfo.occupationCodeList[2]=e),required:"",name:"occupationCodeList",label:"职业类型","data-source":b(r),mapping:{label:"value",value:"code",children:"children"},"show-full-value":"","need-key":"name"},null,8,["modelValue","field0","field1","field2","data-source"])):O("",!0)])),_:1},512),u(h,{show:b(l),"onUpdate:show":a[12]||(a[12]=e=>x(l)?l.value=e:null),position:"bottom"},{default:m((()=>[u(I,{type:"date","min-date":b(V).minAge,"max-date":b(V).maxAge,onConfirm:a[10]||(a[10]=e=>{b(g).formInfo.birthday=b(C)(e).format("YYYY-MM-DD"),b(p)(!1)}),onCancel:a[11]||(a[11]=e=>b(p)(!1))},null,8,["min-date","max-date"])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-b6a7c104"]]));const te={class:"risk-responsibility"},oe={class:"title"},re={class:"content"},le=a({props:{modelValue:Boolean,title:{type:String,default:""},minHeight:{type:[Number,String],default:80},maxHeight:{type:[Number,String],default:200}},emits:["update:modelValue"],setup(e,{emit:i}){const a=e;A();const o=t();P((()=>{o.value=a.modelValue}));const r=D((()=>o.value?`${a.maxHeight}px`:`${a.minHeight}px`)),l=()=>{o.value=!o.value,i("update:modelValue",o.value)};return(i,a)=>{const t=n("ProSvg");return s(),d("div",te,[c("div",oe,g(e.title),1),c("div",{class:"responsibility-content",style:_({height:b(r)})},[c("div",re,[T(i.$slots,"default",{},void 0,!0)]),c("div",{class:"show-button",onClick:l},[c("span",null,g(o.value?"收起":"展开"),1),u(t,{style:{width:"20px",height:"20px"},name:o.value?"arrow-up":"arrow-down"},null,8,["name"])])],4)])}}});var ne=i(le,[["__scopeId","data-v-27faf794"]]);const se={class:"com-risk-card-wrapper part-card"},de={class:"custom-field"},ue={class:"field-tip"},me={class:"custom-field"},ce={class:"field-tip"},pe={class:"custom-field"},fe={class:"field-tip"},ye={class:"pro-radio-wrap"},ke={class:"pro-radio-wrap"},ge={class:"pro-radio-wrap"},be={class:"pro-radio-wrap"},Ve={class:"pro-radio-wrap"},ve={key:0},Ie={key:1,class:"pro-radio-wrap"},he={key:9,class:"liab-desc"};var Le=i(a({props:{originData:{default:()=>({})},formInfo:{default:()=>({})},mainRiskData:{default:()=>({})},mainRiskInfo:{default:()=>({})},index:{default:0},removeRisk:{type:Function,default:()=>{}},removeRiskList:{default:()=>[]},enums:{default:()=>({})}},setup(e){const i=e,a=t({}),r=L("premium")||{};a.value=L("enumList")||{};const k=t({chargePeriod:{disabled:!1,prevent:!1},coveragePeriod:{disabled:!1,prevent:!1},paymentFrequency:{disabled:!1,prevent:!1}}),V=o({formInfo:i.formInfo}),v=e=>"boolean"!=typeof e&&!e||(!(!Array.isArray(e)||e.length)||"[object Object]"==={}.toString.call(e)&&Object.keys(e).length),I=(e,i,a={})=>{let t=i;return Array.isArray(i)||(t=[`${t}`]),(e||[]).filter((e=>t.includes(`${e.value}`)||t.includes(e.value)))},h=D((()=>1===i.originData?.riskType?I(i.enums.RISK_INSURANCE_PERIOD,i.originData.riskInsureLimitVO?.insurancePeriodValueList||[]):2===i.originData?.periodType?I([{value:"year_1",name:"1年"}],["year_1"]):1===i.originData?.exemptFlag?I(N,[`${i?.originData?.riskInsureLimitVO?.insurancePeriodRule}`]):I(i.enums?.RISK_INSURANCE_PERIOD,i.mainRiskData.riskInsureLimitVO?.insurancePeriodValueList||[]))),C=D((()=>1===i.originData?.riskType?I(i?.enums?.RISK_PAYMENT_PERIOD,i.originData.riskInsureLimitVO?.paymentPeriodValueList||[]):1===i.originData?.exemptFlag?I(q,[`${i?.originData?.riskInsureLimitVO?.paymentPeriodRule}`]):2===i.originData?.periodType?I([{value:"year_1",name:"1年交"}],["year_1"]):I(i.enums.RISK_PAYMENT_PERIOD,i.mainRiskData.riskInsureLimitVO?.paymentPeriodValueList||[]))),w=D((()=>1===i.originData?.riskType?I(E,i.originData.riskInsureLimitVO?.paymentFrequencyList||[]):(i.originData.riskInsureLimitVO?.paymentTypeRule,I(E,i.mainRiskData.riskInsureLimitVO?.paymentFrequencyList||[])))),R=D((()=>{let e=0,a=0;return(i.originData?.riskCalcMethodInfoVO?.paymentMethodLimitList||[]).forEach(((i,t)=>{0===t&&(e=i.minAmount,a=i.maxAmount),e>i.minAmount&&(e=i.minAmount),a<i.maxAmount&&(a=i.maxAmount)})),V.formInfo.amount=V.formInfo.amount||e,{min:e,max:a||1/0}})),x=D((()=>{let e=0,a=0;return(i.originData?.riskCalcMethodInfoVO?.paymentMethodLimitList||[]).forEach(((i,t)=>{0===t&&(e=i.minPremium,a=i.maxPremium),e>i.minPremium&&(e=i.minPremium),a<i.maxPremium&&(a=i.maxPremium)})),V.formInfo.premium=V.formInfo.premium||e,{min:e,max:a||1/0}})),A=D((()=>{const e=i.originData?.riskCalcMethodInfoVO?.minCopy||1,a=i.originData?.riskCalcMethodInfoVO?.maxCopy;return V.formInfo.copy=`${V.formInfo.copy||e||1}`,{min:e,max:a}})),P=(e,a,t)=>{const o=i.originData?.riskCalcMethodInfoVO?.increaseDecreaseNum||1;if("sumInsured"===t){if(R.value.max&&+e>R.value.max)return`金额最大${R.value.max}元`;if(+e<R.value.min)return`金额最小${R.value.min}元`}else{if(x.value.max&&+e>x.value.max)return`金额最大${x.value.max}元`;if(+e<x.value.min)return`金额最小${x.value.min}元`}return+e%o==0?"":`金额必须是${o}的倍数`},T=e=>{const i=(V.formInfo?.liabilityVOList||[]).find((i=>i.liabilityCode===e.liabilityCode));return i?i.liabilityAttributeValue?i.liabilityAttributeValue:1!==e.optionalFlag?"0":"-1":""};return F((()=>{const e={riskType:i.originData.riskType,riskId:i.originData.id,riskName:i.originData.riskName,riskCode:i.originData.riskCode,amount:V.formInfo.amount,mainRiskCode:1!==i.originData.riskType?i.mainRiskData?.riskCode:void 0,mainRiskId:1!==i.originData.riskType?i.mainRiskData?.id:void 0,exemptFlag:i.originData.exemptFlag,exemptType:i.originData.exemptType,riskCategory:i.originData.riskCategory,liabilityVOList:(i.originData.riskLiabilityInfoVOList||[]).map((e=>({...e,liabilityAttributeCode:e.liabilityAttributeType,liabilityCode:e.liabilityCode,liabilityRateType:e.liabilityRateType,liabilityAttributeValue:T(e)})))};[1].includes(i.originData.riskCalcMethodInfoVO?.saleMethod||0)&&1!==i.originData?.exemptFlag||!i.originData.riskCalcMethodInfoVO.fixedAmount||(e.amount=i.originData.riskCalcMethodInfoVO.fixedAmount),Object.assign(V.formInfo,e)})),l((()=>V.formInfo?.paymentFrequency),((e=0)=>{[3].includes(i.originData.riskCalcMethodInfoVO?.saleMethod||0)&&(i.originData?.riskCalcMethodInfoVO?.paymentMethodLimitList||[]).forEach((i=>{+i.paymentFrequency==+e&&Object.assign(V.formInfo,{amount:i.perCopyAmount,premium:i.perCopyPremium})})),1==+e&&"single"!==V.formInfo.chargePeriod&&(V.formInfo.chargePeriod="single")})),l((()=>V.formInfo?.copy),(e=>{4===i.originData.riskCalcMethodInfoVO?.saleMethod&&(V.formInfo.amount=i.originData.riskCalcMethodInfoVO?.fixedAmount)})),l((()=>V.formInfo?.chargePeriod),(e=>{"single"===e&&1!=+(V.formInfo.paymentFrequency||0)&&(V.formInfo.paymentFrequency=1)})),l((()=>i?.mainRiskInfo),(e=>{e&&2===i.originData.riskType&&(1===i.originData?.riskInsureLimitVO?.insurancePeriodRule&&(e.coveragePeriod?k.value.coveragePeriod.disabled=!0:k.value.coveragePeriod.prevent=!0,V.formInfo.coveragePeriod=e.coveragePeriod||""),1===i.originData?.riskInsureLimitVO?.paymentPeriodRule&&(e.chargePeriod?k.value.chargePeriod.disabled=!0:k.value.chargePeriod.prevent=!0,V.formInfo.chargePeriod=e.chargePeriod||""),1===i.originData?.riskInsureLimitVO?.paymentTypeRule&&(e.paymentFrequency?k.value.paymentFrequency.disabled=!0:k.value.paymentFrequency.prevent=!0,V.formInfo.paymentFrequency=e.paymentFrequency||0))}),{immediate:!0,deep:!0}),(i,a)=>{const t=n("ProSvg"),o=n("ProTitle"),l=n("VanStepper"),L=n("VanField"),D=n("ProRadioButton"),T=n("ProField");return s(),d("div",se,[u(o,{"risk-type":e.originData.riskType,title:e.originData.riskName},{default:m((()=>[e.removeRiskList.includes(e.originData.id)?(s(),d("div",{key:0,class:"delete-risk",onClick:a[0]||(a[0]=i=>e.removeRisk(e.originData.id))},[u(t,{name:"img-lajitong",color:"#0d6efe"})])):O("",!0)])),_:1},8,["risk-type","title"]),1===e.originData.riskCalcMethodInfoVO?.saleMethod&&2===e.originData.exemptFlag?(s(),y(L,{key:0,modelValue:b(V).formInfo.amount,"onUpdate:modelValue":a[2]||(a[2]=e=>b(V).formInfo.amount=e),label:"保额",name:"amount",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...e)=>P(...e,"sumInsured")}]},{input:m((()=>[c("div",de,[u(l,{modelValue:b(V).formInfo.amount,"onUpdate:modelValue":a[1]||(a[1]=e=>b(V).formInfo.amount=e),"input-width":"64px",min:b(R).min,step:e.originData.riskCalcMethodInfoVO?.increaseDecreaseNum||1,max:b(R).max},null,8,["modelValue","min","step","max"]),c("span",ue,g(`金额最低${b(R).min}元，为${e.originData.riskCalcMethodInfoVO?.increaseDecreaseNum||1}的倍数`),1)])])),_:1},8,["modelValue","rules"])):O("",!0),2===e.originData?.riskCalcMethodInfoVO?.saleMethod?(s(),y(L,{key:1,modelValue:b(V).formInfo.premium,"onUpdate:modelValue":a[4]||(a[4]=e=>b(V).formInfo.premium=e),label:"保费",name:"premium",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...e)=>P(...e,"premium")}]},{input:m((()=>[c("div",me,[u(l,{modelValue:b(V).formInfo.premium,"onUpdate:modelValue":a[3]||(a[3]=e=>b(V).formInfo.premium=e),step:e.originData?.riskCalcMethodInfoVO?.increaseDecreaseNum||1,min:b(x).min,"input-width":"64px",max:b(x).max},null,8,["modelValue","step","min","max"]),c("span",ce,g(`金额最低${b(x).min}元，为${e.originData?.riskCalcMethodInfoVO?.increaseDecreaseNum||1}的倍数`),1)])])),_:1},8,["modelValue","rules"])):O("",!0),3===e.originData?.riskCalcMethodInfoVO?.saleMethod||4===e.originData?.riskCalcMethodInfoVO?.saleMethod&&(e.originData?.riskCalcMethodInfoVO?.minCopy||e.originData?.riskCalcMethodInfoVO?.maxCopy)?(s(),y(L,{key:2,modelValue:b(V).formInfo.copy,"onUpdate:modelValue":a[6]||(a[6]=e=>b(V).formInfo.copy=e),label:"投保份数",name:"copy",rules:[{required:!0,message:"请填写"}]},{input:m((()=>[c("div",pe,[u(l,{modelValue:b(V).formInfo.copy,"onUpdate:modelValue":a[5]||(a[5]=e=>b(V).formInfo.copy=e),step:1,min:b(A).min,max:b(A).max},null,8,["modelValue","min","max"]),c("span",fe,g(`${b(A).min}份起购，最多购买${b(A).max}份`),1)])])),_:1},8,["modelValue"])):O("",!0),[1].includes(e.originData.riskCalcMethodInfoVO?.saleMethod||0)&&1!==e.originData?.exemptFlag||!e.originData.riskCalcMethodInfoVO.fixedAmount&&!b(r)?.[e.originData?.riskCode]?O("",!0):(s(),y(L,{key:3,label:"保额"},{input:m((()=>[c("div",null,g(e.originData.riskCalcMethodInfoVO?.fixedAmount||b(r)?.[e.originData?.riskCode]?.amount),1)])),_:1})),v(e.originData?.riskInsureLimitVO?.insurancePeriodValueList)&&v(e.originData?.riskInsureLimitVO?.insurancePeriodRule)?O("",!0):(s(),y(T,{key:4,modelValue:b(V).formInfo.coveragePeriod,"onUpdate:modelValue":a[8]||(a[8]=e=>b(V).formInfo.coveragePeriod=e),label:"保障期间",name:"coveragePeriod",rules:[{required:!0,message:"请选择保障期间"}]},{input:m((()=>[c("div",ye,[u(D,{modelValue:b(V).formInfo.coveragePeriod,"onUpdate:modelValue":a[7]||(a[7]=e=>b(V).formInfo.coveragePeriod=e),disabled:k.value.coveragePeriod.disabled,prevent:k.value.coveragePeriod.prevent?"请先选择主险保障期间":"",options:b(h),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),v(e.originData?.riskInsureLimitVO?.paymentPeriodValueList)&&v(e.originData?.riskInsureLimitVO?.paymentPeriodRule)?O("",!0):(s(),y(T,{key:5,modelValue:b(V).formInfo.chargePeriod,"onUpdate:modelValue":a[10]||(a[10]=e=>b(V).formInfo.chargePeriod=e),label:"交费期间",name:"chargePeriod",rules:[{required:!0,message:"请选择交费期间"}]},{input:m((()=>[c("div",ke,[u(D,{modelValue:b(V).formInfo.chargePeriod,"onUpdate:modelValue":a[9]||(a[9]=e=>b(V).formInfo.chargePeriod=e),disabled:k.value.chargePeriod.disabled,prevent:k.value.chargePeriod.prevent?"请先选择主险交费期间":"",options:b(C),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),v(e.originData.riskInsureLimitVO?.paymentFrequencyList)&&v(e.originData.riskInsureLimitVO?.paymentPeriodRule)?O("",!0):(s(),y(T,{key:6,modelValue:b(V).formInfo.paymentFrequency,"onUpdate:modelValue":a[12]||(a[12]=e=>b(V).formInfo.paymentFrequency=e),label:"交费方式",name:"paymentFrequency",rules:[{required:!0,message:"请选择交费方式"}]},{input:m((()=>[c("div",ge,[u(D,{modelValue:b(V).formInfo.paymentFrequency,"onUpdate:modelValue":a[11]||(a[11]=e=>b(V).formInfo.paymentFrequency=e),disabled:k.value.paymentFrequency.disabled,prevent:k.value.paymentFrequency.prevent?"请先选择主险交费方式":"",options:b(w)},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),v(e.originData?.riskInsureLimitVO?.annuityDrawValueList)?O("",!0):(s(),y(T,{key:7,modelValue:b(V).formInfo.annuityDrawDate,"onUpdate:modelValue":a[14]||(a[14]=e=>b(V).formInfo.annuityDrawDate=e),label:"领取时间",name:"annuityDrawDate"},{input:m((()=>[c("div",be,[u(D,{modelValue:b(V).formInfo.annuityDrawDate,"onUpdate:modelValue":a[13]||(a[13]=e=>b(V).formInfo.annuityDrawDate=e),options:I(b(Y),e.originData.riskInsureLimitVO?.annuityDrawValueList||[])},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])),v(e.originData?.riskInsureLimitVO?.annuityDrawFrequencyList)?O("",!0):(s(),y(T,{key:8,modelValue:b(V).formInfo.annuityDrawType,"onUpdate:modelValue":a[16]||(a[16]=e=>b(V).formInfo.annuityDrawType=e),label:"领取方式",name:"annuityDrawType"},{input:m((()=>[c("div",Ve,[u(D,{modelValue:b(V).formInfo.annuityDrawType,"onUpdate:modelValue":a[15]||(a[15]=e=>b(V).formInfo.annuityDrawType=e),options:I(b($),e.originData.riskInsureLimitVO?.annuityDrawFrequencyList||[])},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])),(s(!0),d(p,null,f(e.originData.riskLiabilityInfoVOList||[],((i,a)=>(s(),d(p,{key:a},[1!==i.optionalFlag||v(i.liabilityAttributeValueList)?O("",!0):(s(),y(L,{key:0,modelValue:b(V).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>b(V).formInfo.liabilityVOList[a].liabilityAttributeValue=e,label:i.liabilityName,name:"liabilityAttributeValue",rules:[{required:i.liabilityAttributeValue,message:`请选择${i.liabilityName}`}]},{input:m((()=>[c("div",null,[v(i.liabilityAttributeValueList)?(s(),d("span",ve,"50万")):(s(),d("div",Ie,[u(D,{modelValue:b(V).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>b(V).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:I(b(S),e.originData.riskLiabilityInfoVOList?.[a]?.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"])]))])])),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])),1!==i.optionalFlag?(s(),y(L,{key:1,modelValue:b(V).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>b(V).formInfo.liabilityVOList[a].liabilityAttributeValue=e,label:i.liabilityName,name:"liabilityAttributeValue"},{input:m((()=>[c("div",null,[v(i.liabilityAttributeValueList)?(s(),y(D,{key:0,modelValue:b(V).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>b(V).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:b(j)},null,8,["modelValue","onUpdate:modelValue","options"])):(s(),y(D,{key:1,modelValue:b(V).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>b(V).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:I(b(S),e.originData.riskLiabilityInfoVOList?.[a]?.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])])),_:2},1032,["modelValue","onUpdate:modelValue","label"])):O("",!0)],64)))),128)),e.originData?.relationDesc?(s(),d("div",he,[u(ne,{title:"责任投保说明"},{default:m((()=>[c("div",null,g(e.originData.relationDesc),1)])),_:1})])):O("",!0)])}}}),[["__scopeId","data-v-3b9c2786"]]);const De={class:"risk-list-wrapper"},Ce={key:0,class:"add-rider-risk"},Oe={class:"left-part"},we=(e=>(v("data-v-4b309d85"),e=e(),I(),e))((()=>c("span",{class:"btn-plus"},"+",-1))),Re=V(" 附加险");e("a",i(a({props:{riskInfo:{default:()=>({})},originData:{default:()=>[]},pickFactor:{type:Function,default:()=>{}},enums:{default:()=>{}}},setup(e){const i=e,a=L("source")||{},[r,k]=h(!1);t(null),t(null);const V=o({mainRiskInfo:i.riskInfo,riskInfo:i.riskInfo,requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[],currentRiskList:[]}),v=(e,i)=>{V.currentRiskList=V.currentRiskList.concat(e),V.disabledList=i},I=e=>{M.confirm({message:"确定要删除附加险么？",confirmButtonText:"删除"}).then((()=>{const i=[e];(V.mainRiskData?.collocationVOList||[]).forEach((a=>{e!==a.riskId||2!==a.collocationType&&3!==a.collocationType||i.push(a.collocationRiskId)})),V.checkedList=V.checkedList.filter((e=>!i.includes(e))),V.currentRiskList=V.currentRiskList.filter((e=>!i.includes(e.id)||(Object.assign(V.riskInfo,{[e.id]:void 0}),!1))),V.disabledList=V.disabledList.filter((e=>!i.includes(e)))})).catch((()=>{}))},D=(e,i)=>{const a=(V.riskInfo?.[i]?.liabilityVOList||[]).find((i=>i.liabilityCode===e.liabilityCode));return a?a.liabilityAttributeValue?a.liabilityAttributeValue:1!==e.optionalFlag?"0":"-1":""};return l((()=>V.currentRiskList),(e=>{const a=[V.mainRiskData,...e];let t=[],o=[];const r=[];a.forEach(((e,i)=>{const a=e?.riskCalcMethodInfoVO?.riskFactorRelationList||[];t=t.concat(a.filter((e=>"insured"===e.factorObject)).map((e=>e.factorCode))),o=o.concat(a.filter((e=>"holder"===e.factorObject)).map((e=>e.factorCode))),r.push(e?.riskInsureLimitVO?.minHolderAge,e?.riskInsureLimitVO?.maxHolderAge)})),(e||[]).forEach((e=>{const a={riskType:e.riskType,riskId:e.id,riskCode:e.riskCode,riskName:e.riskName,mainRiskCode:1!==e.riskType?V.mainRiskData?.riskCode:void 0,mainRiskId:1!==e.riskType?V.mainRiskData?.id:void 0,riskCategory:e.riskCategory,exemptFlag:i.originData.exemptFlag,exemptType:i.originData.exemptType,liabilityVOList:(e.riskLiabilityInfoVOList||[]).map((i=>({...i,liabilityAttributeCode:i.liabilityAttributeType,liabilityCode:i.liabilityCode,liabilityRateType:i.liabilityRateType,liabilityAttributeValue:D(i,e.id)})))};V.riskInfo[e.id]||Object.assign(V.riskInfo,{[e.id]:a})})),i.pickFactor({insuredFactorList:[...new Set(t)],holderFactorList:[...new Set(o)],ageRange:r})}),{deep:!0,immediate:!0}),l((()=>i.riskInfo),(e=>{V.mainRiskInfo=Object.values(e||{}).find((e=>1===e?.riskType))||{}}),{deep:!0,immediate:!0}),l((()=>i.originData),(e=>{let i=[];const t=[];"proposal"===a.origin&&"add"!==a.type&&"repeatAdd"!==a.type?((e||[]).forEach((e=>{1===e.riskType&&(V.mainRiskData=e),i.push(e)})),i=i.filter((e=>a.showRiskList.includes(e.id)))):(e||[]).forEach((e=>{1===e.riskType?(V.mainRiskData=e,i.push(e)):2===e.collocationType?i.push(e):t.push(e)})),V.riderRiskList=t,V.currentRiskList=i}),{deep:!0,immediate:!0}),(i,t)=>{const o=n("ProCheckButton");return s(),d("div",De,[(s(!0),d(p,null,f(b(V).currentRiskList,((i,a)=>(s(),y(Le,{key:i.id,"form-info":b(V).riskInfo[i.id],index:a,enums:e.enums,"main-risk-data":b(V).mainRiskData,"main-risk-info":b(V).mainRiskInfo,"origin-data":i,"remove-risk":I,"remove-risk-list":b(V).checkedList},null,8,["form-info","index","enums","main-risk-data","main-risk-info","origin-data","remove-risk-list"])))),128)),b(V).riderRiskList?.length-b(V).checkedList?.length&&"proposal"!==b(a).origin?(s(),d("div",Ce,[c("span",Oe,g(`共有${b(V).riderRiskList.length-b(V).checkedList.length}款附加险可以添加`),1),u(o,{activated:"",class:"btn-rider-risk",onClick:t[0]||(t[0]=e=>b(k)(!0))},{default:m((()=>[we,Re])),_:1})])):O("",!0),b(r)?(s(),y(Z,{key:1,modelValue:b(V).checkedList,"onUpdate:modelValue":t[1]||(t[1]=e=>b(V).checkedList=e),show:b(r),disabled:b(V).disabledList,"risk-list":b(V).riderRiskList,"collocation-list":b(V).mainRiskData?.collocationVOList||[],onFinished:v,onClose:t[2]||(t[2]=e=>b(k)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):O("",!0)])}}}),[["__scopeId","data-v-4b309d85"]]))}}}))}();
