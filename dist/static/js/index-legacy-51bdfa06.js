!function(){var e=document.createElement("style");e.innerHTML=".com-risk-list-wrapper .risk-list[data-v-7d3c3028]{height:13.84rem;padding-bottom:2rem}.com-risk-list-wrapper[data-v-7d3c3028] .van-cell-group--inset{border-bottom:0;border-radius:0;margin:0}.com-risk-list-wrapper[data-v-7d3c3028] .van-cell-group--inset .van-cell{padding:.42667rem .53333rem;align-items:center}.com-risk-list-wrapper[data-v-7d3c3028] .van-cell-group--inset .van-cell:after{width:9.6rem}.com-risk-list-wrapper[data-v-7d3c3028] .van-cell-group--inset .van-cell .van-checkbox__icon .van-icon{height:.42667rem;width:.42667rem;border-radius:.05333rem;line-height:.42667rem;font-size:.32rem}.com-risk-list-wrapper .cell-title[data-v-7d3c3028]{display:flex;flex-direction:column}.com-risk-list-wrapper .cell-title .title-desc[data-v-7d3c3028]{font-size:.32rem;font-weight:400;color:#99a9c0}.com-risk-list-wrapper .footer-bar[data-v-7d3c3028]{padding:0 .53333rem;position:absolute;width:100%;height:2rem;bottom:0;display:flex;align-items:center;justify-content:center}.com-personal-info-wrapper .placeholder[data-v-b6a7c104]{color:#99a9c0}.com-risk-card-wrapper.part-card[data-v-6d150150]{background-color:#fff;border-bottom:.26667rem solid var(--zaui-global-bg, #f2f5fc)}.com-risk-card-wrapper .delete-risk[data-v-6d150150]{display:flex;align-items:center;justify-content:center;margin-top:.06667rem}.com-risk-card-wrapper .delete-risk .svg-icon[data-v-6d150150]{font-size:.42667rem}.com-risk-card-wrapper .custom-field[data-v-6d150150]{display:flex;flex-direction:column}.com-risk-card-wrapper .custom-field .field-tip[data-v-6d150150]{font-size:.32rem;font-weight:400;color:#99a9c0;line-height:1;margin:0 0 .10667rem}.risk-list-wrapper[data-v-4b309d85]{margin-bottom:3.13333rem}.risk-list-wrapper .add-rider-risk[data-v-4b309d85]{background-color:#fff;margin-top:-.26667rem;height:1.41333rem;display:flex;align-items:center;justify-content:space-between;padding:var(--van-cell-vertical-padding) var(--van-cell-horizontal-padding)}.risk-list-wrapper .add-rider-risk .left-part[data-v-4b309d85]{font-weight:400;color:#99a9c0;font-size:.4rem}.risk-list-wrapper .add-rider-risk .btn-rider-risk[data-v-4b309d85]{border:none;display:flex;align-items:center}.risk-list-wrapper .add-rider-risk .btn-rider-risk .btn-plus[data-v-4b309d85]{font-size:.58667rem;margin:0 .10667rem .13333rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-138e8bc1.js","./trial-legacy-0e931235.js","./index-legacy-32aa29e8.js","./useDicData-legacy-cf584788.js"],(function(e){"use strict";var i,a,t,o,r,l,n,s,d,u,m,c,p,f,y,k,g,V,b,I,v,h,L,D,C,O,R,A,P,w,x,T,_,F,M,U,q,N,E,Y;return{setters:[function(e){i=e.m,a=e.r,t=e.Q,o=e.ad,r=e.a1,l=e.s,n=e.t,s=e.y,d=e.z,u=e.x,m=e.G,c=e.F,p=e.L,f=e.v,y=e.ae,k=e.O,g=e.H,V=e.J,b=e.a7,I=e.a8,v=e.V,h=e.aa,L=e.e,D=e.d,C=e.B,O=e.W,R=e.n,A=e.D},function(e){P=e.S,w=e.d,x=e.e,T=e.f,_=e.A,F=e.g,M=e.L,U=e.h},function(e){q=e._,N=e.L,E=e.T},function(e){Y=e.u}],execute:function(){const j={class:"com-risk-list-wrapper"},$=(e=>(b("data-v-7d3c3028"),e=e(),I(),e))((()=>m("div",{class:"popup-title"},"选择附加险",-1))),S={class:"risk-list"},z={class:"cell-title"},B={class:"title"},G={class:"footer-button"},H=V("确认"),K=i({props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:i}){const V=e,b=a([]),I=a([]),v=a([...V.disabled]),h=t({show:V.show,currentChecked:[...V.modelValue]}),L=e=>{if(v.value.includes(e))return;((e,i)=>{if(!V.collocationList.length)return i?void(h.currentChecked=[]):void h.currentChecked.push(e);let a=h.currentChecked,t=v.value;i?(V.collocationList.forEach((i=>{e===i.riskId&&(2===i.collocationType?a=a.filter((a=>a!==i.collocationRiskId||a!==e)):3===i.collocationType?(a=a.filter((i=>i!==e)),t=t.filter((e=>e!==i.collocationRiskId))):a=a.filter((i=>i!==e)))})),h.currentChecked=a,v.value=t):(V.collocationList.forEach((o=>{e===o.riskId&&(i||(2===o.collocationType?a.push(o.collocationRiskId):3===o.collocationType&&t.push(o.collocationRiskId),a.push(e)))})),h.currentChecked.push(...a),v.value=t)})(e,h.currentChecked.includes(e)),b?.value?.[e]?.toggle?.()},D=()=>{i("close")},C=()=>{const e=V.riskList.filter((e=>h.currentChecked.includes(e.id)));i("update:modelValue",[...new Set(I.value)]),i("finished",e,v.value),i("close")};return o((()=>{b.value=[]})),r((()=>h.currentChecked),(e=>{I.value=e}),{deep:!0,immediate:!0}),r((()=>V.modelValue),(e=>{I.value=e||[],v.value.push(...e||[])}),{deep:!0,immediate:!0}),(i,a)=>{const t=l("van-checkbox"),o=l("VanCell"),r=l("van-cell-group"),V=l("van-checkbox-group"),O=l("VanButton"),R=l("VanPopup");return n(),s("div",j,[d(R,{show:g(h).show,"onUpdate:show":a[1]||(a[1]=e=>g(h).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:D},{default:u((()=>[$,m("div",S,[d(V,{modelValue:I.value,"onUpdate:modelValue":a[0]||(a[0]=e=>I.value=e)},{default:u((()=>[d(r,{inset:""},{default:u((()=>[(n(!0),s(c,null,p(e.riskList,(e=>(n(),f(o,{key:e.id,title:e.riskName,disabled:v.value.includes(e.id),onClick:i=>L(e.id)},{"right-icon":u((()=>[d(t,{ref_for:!0,ref:i=>b.value[e.id]=i,shape:"square",disabled:v.value.includes(e.id),name:e.id,onClick:y((i=>L(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:u((()=>[m("div",z,[m("div",B,k(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),m("div",G,[d(O,{type:"primary",disabled:!g(h).currentChecked.length,block:"",onClick:C},{default:u((()=>[H])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}});var J=e("R",q(K,[["__scopeId","data-v-7d3c3028"]]));const Q={class:"com-personal-info-wrapper"},W={class:"pro-radio-wrap"},X={class:"pro-radio-wrap"};e("P",q(i({props:{formInfo:{default:()=>({})},insuredCode:{default:""},factorList:{default:()=>[]},ageRange:{default:()=>[]}},setup(e,{expose:i}){const o=e,r=Y(`${o.insuredCode?.toLocaleUpperCase?.()}_OCCUPATION`),[c,p]=v(),y=a(),k=h("source")||{},V=t({formInfo:o.formInfo,occupationalText:"",occupationCodeList:[]}),b=L((()=>{const e=(e=>{const i=e||[];for(let a=0,t=i.length;a<t;a++)for(let e=a+1;e<t;e++){const t=i[a].split("_"),o=i[e].split("_"),r=i[a];t[0]===o[0]?t>o&&(i[a]=i[e],i[e]=r):"age"===t[0]&&(i[a]=i[e],i[e]=r)}return i})(o?.ageRange),i=(e="")=>[+e.split("_")[1],e.split("_")[0]],a=i(e[0]),t=i(e[e.length-1]),r=D().subtract(a[0],"age"===a[1]?"year":"day").format("YYYY-MM-DD");let l=D().subtract(t[0],"age"===t[1]?"year":"day").format("YYYY-MM-DD");return D(l).subtract(1,"year").isBefore(r)&&(l=D(l).subtract(1,"year").add(1,"day").format("YYYY-MM-DD")),{minAge:new Date(l),maxAge:new Date(r)}}));return i({validateForm:()=>new Promise(((e,i)=>{y.value?.validate().then((()=>{e("")}),(e=>{y.value?.scrollToField(e?.[0].name),i()}))})),ageRangeObj:b.value}),(i,a)=>{const t=l("VanField"),o=l("ProRadioButton"),I=l("VanForm"),v=l("van-datetime-picker"),h=l("van-popup");return n(),s("div",Q,[d(I,{ref_key:"formRef",ref:y,"input-align":"right","error-message-align":"right"},{default:u((()=>["proposal"===g(k).type&&("add"===g(k).type||"repeatAdd"===g(k).type)||"proposal"!==g(k).type&&(e.factorList.includes("APPLICANT.AGE")||e.factorList.includes("AGE")||e.factorList.includes("DAY")||e.factorList.includes("APPLICANT.DAY"))?(n(),f(t,{key:0,modelValue:g(V).formInfo.birthday,"onUpdate:modelValue":a[0]||(a[0]=e=>g(V).formInfo.birthday=e),rules:[{required:!0,message:"请选择出生日期"}],name:"birth",label:"出生日期",class:"isLink",readonly:"","is-link":"",formatter:e=>e?g(D)(e).format("YYYY-MM-DD"):e,placeholder:"请选择",onClick:a[1]||(a[1]=e=>g(p)(!0))},null,8,["modelValue","formatter"])):C("",!0),"proposal"===g(k).type&&("add"===g(k).type||"repeatAdd"===g(k).type)||"proposal"!==g(k).type&&(e.factorList.includes("APPLICANT.GENDER")||e.factorList.includes("GENDER"))?(n(),f(t,{key:1,modelValue:g(V).formInfo.gender,"onUpdate:modelValue":a[3]||(a[3]=e=>g(V).formInfo.gender=e),name:"gender",label:"性别",rules:[{required:!0,message:"请选择性别"}]},{input:u((()=>[m("div",W,[d(o,{modelValue:g(V).formInfo.gender,"onUpdate:modelValue":a[2]||(a[2]=e=>g(V).formInfo.gender=e),options:g(N)},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])):C("",!0),e.factorList.includes("SOCIAL_INS")||e.factorList.includes("APPLICANT.SOCIAL_INS")?(n(),f(t,{key:2,modelValue:g(V).formInfo.socialFlag,"onUpdate:modelValue":a[5]||(a[5]=e=>g(V).formInfo.socialFlag=e),name:"socialFlag",label:"社保",rules:[{required:!0,message:"请选择社保"}]},{input:u((()=>[m("div",X,[d(o,{modelValue:g(V).formInfo.socialFlag,"onUpdate:modelValue":a[4]||(a[4]=e=>g(V).formInfo.socialFlag=e),options:g(P)},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])):C("",!0),e.factorList.includes("OCCUPATION_CATEGORY")||e.factorList.includes("APPLICANT.OCCUPATION_CATEGORY")?(n(),f(E,{key:3,modelValue:g(V).formInfo.occupationCodeList[0],"onUpdate:modelValue":a[6]||(a[6]=e=>g(V).formInfo.occupationCodeList[0]=e),field0:g(V).formInfo.occupationCodeList[0],"onUpdate:field0":a[7]||(a[7]=e=>g(V).formInfo.occupationCodeList[0]=e),field1:g(V).formInfo.occupationCodeList[1],"onUpdate:field1":a[8]||(a[8]=e=>g(V).formInfo.occupationCodeList[1]=e),field2:g(V).formInfo.occupationCodeList[2],"onUpdate:field2":a[9]||(a[9]=e=>g(V).formInfo.occupationCodeList[2]=e),required:"",name:"occupationCodeList",label:"职业类型","data-source":g(r),mapping:{label:"value",value:"code",children:"children"},"show-full-value":"","need-key":"name"},null,8,["modelValue","field0","field1","field2","data-source"])):C("",!0)])),_:1},512),d(h,{show:g(c),"onUpdate:show":a[12]||(a[12]=e=>O(c)?c.value=e:null),position:"bottom"},{default:u((()=>[d(v,{type:"date","min-date":g(b).minAge,"max-date":g(b).maxAge,onConfirm:a[10]||(a[10]=e=>{g(V).formInfo.birthday=g(D)(e).format("YYYY-MM-DD"),g(p)(!1)}),onCancel:a[11]||(a[11]=e=>g(p)(!1))},null,8,["min-date","max-date"])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-b6a7c104"]]));const Z={class:"com-risk-card-wrapper part-card"},ee={class:"custom-field"},ie={class:"field-tip"},ae={class:"custom-field"},te={class:"field-tip"},oe={class:"custom-field"},re={class:"field-tip"},le={class:"pro-radio-wrap"},ne={class:"pro-radio-wrap"},se={class:"pro-radio-wrap"},de={class:"pro-radio-wrap"},ue={class:"pro-radio-wrap"},me={key:0},ce={key:1,class:"pro-radio-wrap"},pe={key:9,class:"liab-desc"};var fe=q(i({props:{originData:{default:()=>({})},formInfo:{default:()=>({})},mainRiskData:{default:()=>({})},mainRiskInfo:{default:()=>({})},index:{default:0},removeRisk:{type:Function,default:()=>{}},removeRiskList:{default:()=>[]},enums:{default:()=>({})}},setup(e){const i=e,o=a({}),y=h("premium")||{};o.value=h("enumList")||{};const V=a({chargePeriod:{disabled:!1,prevent:!1},coveragePeriod:{disabled:!1,prevent:!1},paymentFrequency:{disabled:!1,prevent:!1}}),b=t({formInfo:i.formInfo}),I=e=>"boolean"!=typeof e&&!e||(!(!Array.isArray(e)||e.length)||"[object Object]"==={}.toString.call(e)&&Object.keys(e).length),v=(e,i,a={})=>{let t=i;return Array.isArray(i)||(t=[`${t}`]),(e||[]).filter((e=>t.includes(`${e.value}`)||t.includes(e.value)))},D=L((()=>1===i.originData?.riskType?v(i.enums.RISK_INSURANCE_PERIOD,i.originData.riskInsureLimitVO?.insurancePeriodValueList||[]):2===i.originData?.periodType?v([{value:"year_1",name:"1年"}],["year_1"]):1===i.originData?.exemptFlag?v(w,[`${i?.originData?.riskInsureLimitVO?.insurancePeriodRule}`]):v(i.enums?.RISK_INSURANCE_PERIOD,i.mainRiskData.riskInsureLimitVO?.insurancePeriodValueList||[]))),O=L((()=>1===i.originData?.riskType?v(i?.enums?.RISK_PAYMENT_PERIOD,i.originData.riskInsureLimitVO?.paymentPeriodValueList||[]):1===i.originData?.exemptFlag?v(x,[`${i?.originData?.riskInsureLimitVO?.paymentPeriodRule}`]):2===i.originData?.periodType?v([{value:"year_1",name:"1年交"}],["year_1"]):v(i.enums.RISK_PAYMENT_PERIOD,i.mainRiskData.riskInsureLimitVO?.paymentPeriodValueList||[]))),A=L((()=>1===i.originData?.riskType?v(T,i.originData.riskInsureLimitVO?.paymentFrequencyList||[]):(i.originData.riskInsureLimitVO?.paymentTypeRule,v(T,i.mainRiskData.riskInsureLimitVO?.paymentFrequencyList||[])))),P=L((()=>{let e=0,a=0;return(i.originData?.riskCalcMethodInfoVO?.paymentMethodLimitList||[]).forEach(((i,t)=>{0===t&&(e=i.minAmount,a=i.maxAmount),e>i.minAmount&&(e=i.minAmount),a<i.maxAmount&&(a=i.maxAmount)})),b.formInfo.amount=b.formInfo.amount||e,{min:e,max:a||1/0}})),q=L((()=>{let e=0,a=0;return(i.originData?.riskCalcMethodInfoVO?.paymentMethodLimitList||[]).forEach(((i,t)=>{0===t&&(e=i.minPremium,a=i.maxPremium),e>i.minPremium&&(e=i.minPremium),a<i.maxPremium&&(a=i.maxPremium)})),b.formInfo.premium=b.formInfo.premium||e,{min:e,max:a||1/0}})),N=L((()=>{const e=i.originData?.riskCalcMethodInfoVO?.minCopy||1,a=i.originData?.riskCalcMethodInfoVO?.maxCopy;return b.formInfo.copy=`${b.formInfo.copy||e||1}`,{min:e,max:a}})),E=(e,a,t)=>{const o=i.originData?.riskCalcMethodInfoVO?.increaseDecreaseNum||1;if("sumInsured"===t){if(P.value.max&&+e>P.value.max)return`金额最大${P.value.max}元`;if(+e<P.value.min)return`金额最小${P.value.min}元`}else{if(q.value.max&&+e>q.value.max)return`金额最大${q.value.max}元`;if(+e<q.value.min)return`金额最小${q.value.min}元`}return+e%o==0?"":`金额必须是${o}的倍数`},Y=e=>{const i=(b.formInfo?.liabilityVOList||[]).find((i=>i.liabilityCode===e.liabilityCode));return i?i.liabilityAttributeValue?i.liabilityAttributeValue:1!==e.optionalFlag?"0":"-1":""};return R((()=>{const e={riskType:i.originData.riskType,riskId:i.originData.id,riskName:i.originData.riskName,riskCode:i.originData.riskCode,amount:b.formInfo.amount,mainRiskCode:1!==i.originData.riskType?i.mainRiskData?.riskCode:void 0,mainRiskId:1!==i.originData.riskType?i.mainRiskData?.id:void 0,exemptFlag:i.originData.exemptFlag,exemptType:i.originData.exemptType,riskCategory:i.originData.riskCategory,liabilityVOList:(i.originData.riskLiabilityInfoVOList||[]).map((e=>({...e,liabilityAttributeCode:e.liabilityAttributeType,liabilityCode:e.liabilityCode,liabilityRateType:e.liabilityRateType,liabilityAttributeValue:Y(e)})))};[1].includes(i.originData.riskCalcMethodInfoVO?.saleMethod||0)&&1!==i.originData?.exemptFlag||!i.originData.riskCalcMethodInfoVO.fixedAmount||(e.amount=i.originData.riskCalcMethodInfoVO.fixedAmount),Object.assign(b.formInfo,e)})),r((()=>b.formInfo?.paymentFrequency),((e=0)=>{[3].includes(i.originData.riskCalcMethodInfoVO?.saleMethod||0)&&(i.originData?.riskCalcMethodInfoVO?.paymentMethodLimitList||[]).forEach((i=>{+i.paymentFrequency==+e&&Object.assign(b.formInfo,{amount:i.perCopyAmount,premium:i.perCopyPremium})})),1==+e&&"single"!==b.formInfo.chargePeriod&&(b.formInfo.chargePeriod="single")})),r((()=>b.formInfo?.copy),(e=>{4===i.originData.riskCalcMethodInfoVO?.saleMethod&&(b.formInfo.amount=i.originData.riskCalcMethodInfoVO?.fixedAmount)})),r((()=>b.formInfo?.chargePeriod),(e=>{"single"===e&&1!=+(b.formInfo.paymentFrequency||0)&&(b.formInfo.paymentFrequency=1)})),r((()=>i?.mainRiskInfo),(e=>{e&&2===i.originData.riskType&&(1===i.originData?.riskInsureLimitVO?.insurancePeriodRule&&(e.coveragePeriod?V.value.coveragePeriod.disabled=!0:V.value.coveragePeriod.prevent=!0,b.formInfo.coveragePeriod=e.coveragePeriod||""),1===i.originData?.riskInsureLimitVO?.paymentPeriodRule&&(e.chargePeriod?V.value.chargePeriod.disabled=!0:V.value.chargePeriod.prevent=!0,b.formInfo.chargePeriod=e.chargePeriod||""),1===i.originData?.riskInsureLimitVO?.paymentTypeRule&&(e.paymentFrequency?V.value.paymentFrequency.disabled=!0:V.value.paymentFrequency.prevent=!0,b.formInfo.paymentFrequency=e.paymentFrequency||0))}),{immediate:!0,deep:!0}),(i,a)=>{const t=l("ProSvg"),o=l("ProTitle"),r=l("VanStepper"),h=l("VanField"),L=l("ProRadioButton"),R=l("ProField"),w=l("ProExpand");return n(),s("div",Z,[d(o,{"risk-type":e.originData.riskType,title:e.originData.riskName},{default:u((()=>[e.removeRiskList.includes(e.originData.id)?(n(),s("div",{key:0,class:"delete-risk",onClick:a[0]||(a[0]=i=>e.removeRisk(e.originData.id))},[d(t,{name:"img-lajitong",color:"#0d6efe"})])):C("",!0)])),_:1},8,["risk-type","title"]),1===e.originData.riskCalcMethodInfoVO?.saleMethod&&2===e.originData.exemptFlag?(n(),f(h,{key:0,modelValue:g(b).formInfo.amount,"onUpdate:modelValue":a[2]||(a[2]=e=>g(b).formInfo.amount=e),label:"保额",name:"amount",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...e)=>E(...e,"sumInsured")}]},{input:u((()=>[m("div",ee,[d(r,{modelValue:g(b).formInfo.amount,"onUpdate:modelValue":a[1]||(a[1]=e=>g(b).formInfo.amount=e),"input-width":"64px",min:g(P).min,step:e.originData.riskCalcMethodInfoVO?.increaseDecreaseNum||1,max:g(P).max},null,8,["modelValue","min","step","max"]),m("span",ie,k(`金额最低${g(P).min}元，为${e.originData.riskCalcMethodInfoVO?.increaseDecreaseNum||1}的倍数`),1)])])),_:1},8,["modelValue","rules"])):C("",!0),2===e.originData?.riskCalcMethodInfoVO?.saleMethod?(n(),f(h,{key:1,modelValue:g(b).formInfo.premium,"onUpdate:modelValue":a[4]||(a[4]=e=>g(b).formInfo.premium=e),label:"保费",name:"premium",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...e)=>E(...e,"premium")}]},{input:u((()=>[m("div",ae,[d(r,{modelValue:g(b).formInfo.premium,"onUpdate:modelValue":a[3]||(a[3]=e=>g(b).formInfo.premium=e),step:e.originData?.riskCalcMethodInfoVO?.increaseDecreaseNum||1,min:g(q).min,"input-width":"64px",max:g(q).max},null,8,["modelValue","step","min","max"]),m("span",te,k(`金额最低${g(q).min}元，为${e.originData?.riskCalcMethodInfoVO?.increaseDecreaseNum||1}的倍数`),1)])])),_:1},8,["modelValue","rules"])):C("",!0),3===e.originData?.riskCalcMethodInfoVO?.saleMethod||4===e.originData?.riskCalcMethodInfoVO?.saleMethod&&(e.originData?.riskCalcMethodInfoVO?.minCopy||e.originData?.riskCalcMethodInfoVO?.maxCopy)?(n(),f(h,{key:2,modelValue:g(b).formInfo.copy,"onUpdate:modelValue":a[6]||(a[6]=e=>g(b).formInfo.copy=e),label:"投保份数",name:"copy",rules:[{required:!0,message:"请填写"}]},{input:u((()=>[m("div",oe,[d(r,{modelValue:g(b).formInfo.copy,"onUpdate:modelValue":a[5]||(a[5]=e=>g(b).formInfo.copy=e),step:1,min:g(N).min,max:g(N).max},null,8,["modelValue","min","max"]),m("span",re,k(`${g(N).min}份起购，最多购买${g(N).max}份`),1)])])),_:1},8,["modelValue"])):C("",!0),[1].includes(e.originData.riskCalcMethodInfoVO?.saleMethod||0)&&1!==e.originData?.exemptFlag||!e.originData.riskCalcMethodInfoVO.fixedAmount&&!g(y)?.[e.originData?.riskCode]?C("",!0):(n(),f(h,{key:3,label:"保额"},{input:u((()=>[m("div",null,k(e.originData.riskCalcMethodInfoVO?.fixedAmount||g(y)?.[e.originData?.riskCode]?.amount),1)])),_:1})),I(e.originData?.riskInsureLimitVO?.insurancePeriodValueList)&&I(e.originData?.riskInsureLimitVO?.insurancePeriodRule)?C("",!0):(n(),f(R,{key:4,modelValue:g(b).formInfo.coveragePeriod,"onUpdate:modelValue":a[8]||(a[8]=e=>g(b).formInfo.coveragePeriod=e),label:"保障期间",name:"coveragePeriod",rules:[{required:!0,message:"请选择保障期间"}]},{input:u((()=>[m("div",le,[d(L,{modelValue:g(b).formInfo.coveragePeriod,"onUpdate:modelValue":a[7]||(a[7]=e=>g(b).formInfo.coveragePeriod=e),disabled:V.value.coveragePeriod.disabled,prevent:V.value.coveragePeriod.prevent?"请先选择主险保障期间":"",options:g(D),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),I(e.originData?.riskInsureLimitVO?.paymentPeriodValueList)&&I(e.originData?.riskInsureLimitVO?.paymentPeriodRule)?C("",!0):(n(),f(R,{key:5,modelValue:g(b).formInfo.chargePeriod,"onUpdate:modelValue":a[10]||(a[10]=e=>g(b).formInfo.chargePeriod=e),label:"交费期间",name:"chargePeriod",rules:[{required:!0,message:"请选择交费期间"}]},{input:u((()=>[m("div",ne,[d(L,{modelValue:g(b).formInfo.chargePeriod,"onUpdate:modelValue":a[9]||(a[9]=e=>g(b).formInfo.chargePeriod=e),disabled:V.value.chargePeriod.disabled,prevent:V.value.chargePeriod.prevent?"请先选择主险交费期间":"",options:g(O),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),I(e.originData.riskInsureLimitVO?.paymentFrequencyList)&&I(e.originData.riskInsureLimitVO?.paymentPeriodRule)?C("",!0):(n(),f(R,{key:6,modelValue:g(b).formInfo.paymentFrequency,"onUpdate:modelValue":a[12]||(a[12]=e=>g(b).formInfo.paymentFrequency=e),label:"交费方式",name:"paymentFrequency",rules:[{required:!0,message:"请选择交费方式"}]},{input:u((()=>[m("div",se,[d(L,{modelValue:g(b).formInfo.paymentFrequency,"onUpdate:modelValue":a[11]||(a[11]=e=>g(b).formInfo.paymentFrequency=e),disabled:V.value.paymentFrequency.disabled,prevent:V.value.paymentFrequency.prevent?"请先选择主险交费方式":"",options:g(A)},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),I(e.originData?.riskInsureLimitVO?.annuityDrawValueList)?C("",!0):(n(),f(R,{key:7,modelValue:g(b).formInfo.annuityDrawDate,"onUpdate:modelValue":a[14]||(a[14]=e=>g(b).formInfo.annuityDrawDate=e),label:"领取时间",name:"annuityDrawDate"},{input:u((()=>[m("div",de,[d(L,{modelValue:g(b).formInfo.annuityDrawDate,"onUpdate:modelValue":a[13]||(a[13]=e=>g(b).formInfo.annuityDrawDate=e),options:v(g(_),e.originData.riskInsureLimitVO?.annuityDrawValueList||[])},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])),I(e.originData?.riskInsureLimitVO?.annuityDrawFrequencyList)?C("",!0):(n(),f(R,{key:8,modelValue:g(b).formInfo.annuityDrawType,"onUpdate:modelValue":a[16]||(a[16]=e=>g(b).formInfo.annuityDrawType=e),label:"领取方式",name:"annuityDrawType"},{input:u((()=>[m("div",ue,[d(L,{modelValue:g(b).formInfo.annuityDrawType,"onUpdate:modelValue":a[15]||(a[15]=e=>g(b).formInfo.annuityDrawType=e),options:v(g(F),e.originData.riskInsureLimitVO?.annuityDrawFrequencyList||[])},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])),(n(!0),s(c,null,p(e.originData.riskLiabilityInfoVOList||[],((i,a)=>(n(),s(c,{key:a},[1!==i.optionalFlag||I(i.liabilityAttributeValueList)?C("",!0):(n(),f(h,{key:0,modelValue:g(b).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>g(b).formInfo.liabilityVOList[a].liabilityAttributeValue=e,label:i.liabilityName,name:"liabilityAttributeValue",rules:[{required:i.liabilityAttributeValue,message:`请选择${i.liabilityName}`}]},{input:u((()=>[m("div",null,[I(i.liabilityAttributeValueList)?(n(),s("span",me,"50万")):(n(),s("div",ce,[d(L,{modelValue:g(b).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>g(b).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:v(g(M),e.originData.riskLiabilityInfoVOList?.[a]?.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"])]))])])),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])),1!==i.optionalFlag?(n(),f(h,{key:1,modelValue:g(b).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>g(b).formInfo.liabilityVOList[a].liabilityAttributeValue=e,label:i.liabilityName,name:"liabilityAttributeValue"},{input:u((()=>[m("div",null,[I(i.liabilityAttributeValueList)?(n(),f(L,{key:0,modelValue:g(b).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>g(b).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:g(U)},null,8,["modelValue","onUpdate:modelValue","options"])):(n(),f(L,{key:1,modelValue:g(b).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>g(b).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:v(g(M),e.originData.riskLiabilityInfoVOList?.[a]?.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])])),_:2},1032,["modelValue","onUpdate:modelValue","label"])):C("",!0)],64)))),128)),e.originData?.relationDesc?(n(),s("div",pe,[d(w,{title:"责任投保说明"},{default:u((()=>[m("div",null,k(e.originData.relationDesc),1)])),_:1})])):C("",!0)])}}}),[["__scopeId","data-v-6d150150"]]);const ye={class:"risk-list-wrapper"},ke={key:0,class:"add-rider-risk"},ge={class:"left-part"},Ve=(e=>(b("data-v-4b309d85"),e=e(),I(),e))((()=>m("span",{class:"btn-plus"},"+",-1))),be=V(" 附加险");e("a",q(i({props:{riskInfo:{default:()=>({})},originData:{default:()=>[]},pickFactor:{type:Function,default:()=>{}},enums:{default:()=>{}}},setup(e){const i=e,o=h("source")||{},[y,V]=v(!1);a(null),a(null);const b=t({mainRiskInfo:i.riskInfo,riskInfo:i.riskInfo,requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[],currentRiskList:[]}),I=(e,i)=>{b.currentRiskList=b.currentRiskList.concat(e),b.disabledList=i},L=e=>{A.confirm({message:"确定要删除附加险么？",confirmButtonText:"删除"}).then((()=>{const i=[e];(b.mainRiskData?.collocationVOList||[]).forEach((a=>{e!==a.riskId||2!==a.collocationType&&3!==a.collocationType||i.push(a.collocationRiskId)})),b.checkedList=b.checkedList.filter((e=>!i.includes(e))),b.currentRiskList=b.currentRiskList.filter((e=>!i.includes(e.id)||(Object.assign(b.riskInfo,{[e.id]:void 0}),!1))),b.disabledList=b.disabledList.filter((e=>!i.includes(e)))})).catch((()=>{}))},D=(e,i)=>{const a=(b.riskInfo?.[i]?.liabilityVOList||[]).find((i=>i.liabilityCode===e.liabilityCode));return a?a.liabilityAttributeValue?a.liabilityAttributeValue:1!==e.optionalFlag?"0":"-1":""};return r((()=>b.currentRiskList),(e=>{const a=[b.mainRiskData,...e];let t=[],o=[];const r=[];a.forEach(((e,i)=>{const a=e?.riskCalcMethodInfoVO?.riskFactorRelationList||[];t=t.concat(a.filter((e=>"insured"===e.factorObject)).map((e=>e.factorCode))),o=o.concat(a.filter((e=>"holder"===e.factorObject)).map((e=>e.factorCode))),r.push(e?.riskInsureLimitVO?.minHolderAge,e?.riskInsureLimitVO?.maxHolderAge)})),(e||[]).forEach((e=>{const a={riskType:e.riskType,riskId:e.id,riskCode:e.riskCode,riskName:e.riskName,mainRiskCode:1!==e.riskType?b.mainRiskData?.riskCode:void 0,mainRiskId:1!==e.riskType?b.mainRiskData?.id:void 0,riskCategory:e.riskCategory,exemptFlag:i.originData.exemptFlag,exemptType:i.originData.exemptType,liabilityVOList:(e.riskLiabilityInfoVOList||[]).map((i=>({...i,liabilityAttributeCode:i.liabilityAttributeType,liabilityCode:i.liabilityCode,liabilityRateType:i.liabilityRateType,liabilityAttributeValue:D(i,e.id)})))};b.riskInfo[e.id]||Object.assign(b.riskInfo,{[e.id]:a})})),i.pickFactor({insuredFactorList:[...new Set(t)],holderFactorList:[...new Set(o)],ageRange:r})}),{deep:!0,immediate:!0}),r((()=>i.riskInfo),(e=>{b.mainRiskInfo=Object.values(e||{}).find((e=>1===e?.riskType))||{}}),{deep:!0,immediate:!0}),r((()=>i.originData),(e=>{let i=[];const a=[];"proposal"===o.origin&&"add"!==o.type&&"repeatAdd"!==o.type?((e||[]).forEach((e=>{1===e.riskType&&(b.mainRiskData=e),i.push(e)})),i=i.filter((e=>o.showRiskList.includes(e.id)))):(e||[]).forEach((e=>{1===e.riskType?(b.mainRiskData=e,i.push(e)):2===e.collocationType?i.push(e):a.push(e)})),b.riderRiskList=a,b.currentRiskList=i}),{deep:!0,immediate:!0}),(i,a)=>{const t=l("ProCheckButton");return n(),s("div",ye,[(n(!0),s(c,null,p(g(b).currentRiskList,((i,a)=>(n(),f(fe,{key:i.id,"form-info":g(b).riskInfo[i.id],index:a,enums:e.enums,"main-risk-data":g(b).mainRiskData,"main-risk-info":g(b).mainRiskInfo,"origin-data":i,"remove-risk":L,"remove-risk-list":g(b).checkedList},null,8,["form-info","index","enums","main-risk-data","main-risk-info","origin-data","remove-risk-list"])))),128)),g(b).riderRiskList?.length-g(b).checkedList?.length&&"proposal"!==g(o).origin?(n(),s("div",ke,[m("span",ge,k(`共有${g(b).riderRiskList.length-g(b).checkedList.length}款附加险可以添加`),1),d(t,{activated:"",class:"btn-rider-risk",onClick:a[0]||(a[0]=e=>g(V)(!0))},{default:u((()=>[Ve,be])),_:1})])):C("",!0),g(y)?(n(),f(J,{key:1,modelValue:g(b).checkedList,"onUpdate:modelValue":a[1]||(a[1]=e=>g(b).checkedList=e),show:g(y),disabled:g(b).disabledList,"risk-list":g(b).riderRiskList,"collocation-list":g(b).mainRiskData?.collocationVOList||[],onFinished:I,onClose:a[2]||(a[2]=e=>g(V)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):C("",!0)])}}}),[["__scopeId","data-v-4b309d85"]]))}}}))}();
