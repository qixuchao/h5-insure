!function(){var e=document.createElement("style");e.innerHTML=".com-risk-list-wrapper .risk-list[data-v-7d3c3028]{height:13.84rem;padding-bottom:2rem}.com-risk-list-wrapper[data-v-7d3c3028] .van-cell-group--inset{border-bottom:0;border-radius:0;margin:0}.com-risk-list-wrapper[data-v-7d3c3028] .van-cell-group--inset .van-cell{padding:.42667rem .53333rem;align-items:center}.com-risk-list-wrapper[data-v-7d3c3028] .van-cell-group--inset .van-cell:after{width:9.6rem}.com-risk-list-wrapper[data-v-7d3c3028] .van-cell-group--inset .van-cell .van-checkbox__icon .van-icon{height:.42667rem;width:.42667rem;border-radius:.05333rem;line-height:.42667rem;font-size:.32rem}.com-risk-list-wrapper .cell-title[data-v-7d3c3028]{display:flex;flex-direction:column}.com-risk-list-wrapper .cell-title .title-desc[data-v-7d3c3028]{font-size:.32rem;font-weight:400;color:#99a9c0}.com-risk-list-wrapper .footer-bar[data-v-7d3c3028]{padding:0 .53333rem;position:absolute;width:100%;height:2rem;bottom:0;display:flex;align-items:center;justify-content:center}.com-personal-info-wrapper .placeholder[data-v-81fcd45e]{color:#99a9c0}.com-risk-card-wrapper.part-card[data-v-4a954db9]{background-color:#fff;border-bottom:.26667rem solid var(--zaui-global-bg, #f2f5fc)}.com-risk-card-wrapper .delete-risk[data-v-4a954db9]{display:flex;align-items:center;justify-content:center;margin-top:.06667rem}.com-risk-card-wrapper .delete-risk .svg-icon[data-v-4a954db9]{font-size:.42667rem}.com-risk-card-wrapper .custom-field[data-v-4a954db9]{display:flex;flex-direction:column}.com-risk-card-wrapper .custom-field .field-tip[data-v-4a954db9]{font-size:.32rem;font-weight:400;color:#99a9c0;line-height:1;margin:0 0 .10667rem}.risk-list-wrapper[data-v-4b309d85]{margin-bottom:3.13333rem}.risk-list-wrapper .add-rider-risk[data-v-4b309d85]{background-color:#fff;margin-top:-.26667rem;height:1.41333rem;display:flex;align-items:center;justify-content:space-between;padding:var(--van-cell-vertical-padding) var(--van-cell-horizontal-padding)}.risk-list-wrapper .add-rider-risk .left-part[data-v-4b309d85]{font-weight:400;color:#99a9c0;font-size:.4rem}.risk-list-wrapper .add-rider-risk .btn-rider-risk[data-v-4b309d85]{border:none;display:flex;align-items:center}.risk-list-wrapper .add-rider-risk .btn-rider-risk .btn-plus[data-v-4b309d85]{font-size:.58667rem;margin:0 .10667rem .13333rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-92a8f610.js","./trial-legacy-3355bc61.js","./index-legacy-a824365a.js","./useDicData-legacy-e678a839.js"],(function(e){"use strict";var i,a,o,l,t,r,n,d,s,u,m,c,p,v,f,y,k,g,b,V,I,h,L,D,C,O,R,A,P,w,x,T,_,F,M,U,q,N,E,Y;return{setters:[function(e){i=e.g,a=e.E,o=e.M,l=e.aa,t=e._,r=e.r,n=e.j,d=e.n,s=e.p,u=e.m,m=e.z,c=e.F,p=e.G,v=e.k,f=e.ab,y=e.J,k=e.A,g=e.a4,b=e.a5,V=e.C,I=e.Q,h=e.a7,L=e.y,D=e.d,C=e.t,O=e.R,R=e.o,A=e.D},function(e){P=e.S,w=e.d,x=e.e,T=e.f,_=e.A,F=e.g,M=e.L,U=e.h},function(e){q=e._,N=e.J,E=e.Q},function(e){Y=e.u}],execute:function(){const j={class:"com-risk-list-wrapper"},$=(e=>(g("data-v-7d3c3028"),e=e(),b(),e))((()=>m("div",{class:"popup-title"},"选择附加险",-1))),S={class:"risk-list"},z={class:"cell-title"},B={class:"title"},G={class:"footer-button"},K=V("确认"),H=i({props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:i}){const g=e,b=a([]),V=a([]),I=a([...g.disabled]),h=o({show:g.show,currentChecked:[...g.modelValue]}),L=e=>{var i,a,o;if(I.value.includes(e))return;((e,i)=>{if(!g.collocationList.length)return i?void(h.currentChecked=[]):void h.currentChecked.push(e);let a=h.currentChecked,o=I.value;i?(g.collocationList.forEach((i=>{e===i.riskId&&(2===i.collocationType?a=a.filter((a=>a!==i.collocationRiskId||a!==e)):3===i.collocationType?(a=a.filter((i=>i!==e)),o=o.filter((e=>e!==i.collocationRiskId))):a=a.filter((i=>i!==e)))})),h.currentChecked=a,I.value=o):(g.collocationList.forEach((l=>{e===l.riskId&&(i||(2===l.collocationType?a.push(l.collocationRiskId):3===l.collocationType&&o.push(l.collocationRiskId),a.push(e)))})),h.currentChecked.push(...a),I.value=o)})(e,h.currentChecked.includes(e)),null==b||null===(i=b.value)||void 0===i||null===(a=i[e])||void 0===a||null===(o=a.toggle)||void 0===o||o.call(a)},D=()=>{i("close")},C=()=>{const e=g.riskList.filter((e=>h.currentChecked.includes(e.id)));i("update:modelValue",[...new Set(V.value)]),i("finished",e,I.value),i("close")};return l((()=>{b.value=[]})),t((()=>h.currentChecked),(e=>{V.value=e}),{deep:!0,immediate:!0}),t((()=>g.modelValue),(e=>{V.value=e||[],I.value.push(...e||[])}),{deep:!0,immediate:!0}),(i,a)=>{const o=r("van-checkbox"),l=r("VanCell"),t=r("van-cell-group"),g=r("van-checkbox-group"),O=r("VanButton"),R=r("VanPopup");return n(),d("div",j,[s(R,{show:k(h).show,"onUpdate:show":a[1]||(a[1]=e=>k(h).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:D},{default:u((()=>[$,m("div",S,[s(g,{modelValue:V.value,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value=e)},{default:u((()=>[s(t,{inset:""},{default:u((()=>[(n(!0),d(c,null,p(e.riskList,(e=>(n(),v(l,{key:e.id,title:e.riskName,disabled:I.value.includes(e.id),onClick:i=>L(e.id)},{"right-icon":u((()=>[s(o,{ref_for:!0,ref:i=>b.value[e.id]=i,shape:"square",disabled:I.value.includes(e.id),name:e.id,onClick:f((i=>L(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:u((()=>[m("div",z,[m("div",B,y(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),m("div",G,[s(O,{type:"primary",disabled:!k(h).currentChecked.length,block:"",onClick:C},{default:u((()=>[K])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}});var J=e("R",q(H,[["__scopeId","data-v-7d3c3028"]]));const Q={class:"com-personal-info-wrapper"},W={class:"pro-radio-wrap"},X={class:"pro-radio-wrap"};e("P",q(i({props:{formInfo:{default:()=>({})},insuredCode:{default:""},factorList:{default:()=>[]},ageRange:{default:()=>[]}},setup(e,{expose:i}){var l,t;const c=e,p=Y(`${null===(l=c.insuredCode)||void 0===l||null===(t=l.toLocaleUpperCase)||void 0===t?void 0:t.call(l)}_OCCUPATION`),[f,y]=I(),g=a(),b=h("source")||{},V=o({formInfo:c.formInfo,occupationalText:"",occupationCodeList:[]}),R=L((()=>{const e=(e=>{const i=e||[];for(let a=0;a<i.length;a++)for(let e=a+1;e<i.length;e++){const o=i[a].split("_"),l=i[e].split("_"),t=i[a];o[0]===l[0]?o>l&&(i[a]=i[e],i[e]=t):"age"===o[0]&&(i[a]=i[e],i[e]=t)}return i})(null==c?void 0:c.ageRange),i=(e="")=>[+e.split("_")[1],e.split("_")[0]],a=i(e[0]),o=i(e[e.length-1]),l=D().subtract(a[0],"age"===a[1]?"year":"day").format("YYYY-MM-DD");let t=D().subtract(o[0],"age"===o[1]?"year":"day").format("YYYY-MM-DD");return D(t).subtract(1,"year").isBefore(l)&&(t=D(t).subtract(1,"year").add(1,"day").format("YYYY-MM-DD")),{minAge:new Date(t),maxAge:new Date(l)}}));return i({validateForm:()=>new Promise(((e,i)=>{var a;null===(a=g.value)||void 0===a||a.validate().then((()=>{e("")}),(e=>{var a;null===(a=g.value)||void 0===a||a.scrollToField(null==e?void 0:e[0].name),i()}))})),ageRangeObj:R.value}),(i,a)=>{const o=r("VanField"),l=r("ProRadioButton"),t=r("VanForm"),c=r("van-datetime-picker"),I=r("van-popup");return n(),d("div",Q,[s(t,{ref_key:"formRef",ref:g,"input-align":"right","error-message-align":"right"},{default:u((()=>["proposal"===k(b).type&&("add"===k(b).type||"repeatAdd"===k(b).type)||"proposal"!==k(b).type&&(e.factorList.includes("APPLICANT.AGE")||e.factorList.includes("AGE")||e.factorList.includes("DAY")||e.factorList.includes("APPLICANT.DAY"))?(n(),v(o,{key:0,modelValue:k(V).formInfo.birthday,"onUpdate:modelValue":a[0]||(a[0]=e=>k(V).formInfo.birthday=e),rules:[{required:!0,message:"请选择出生日期"}],name:"birth",label:"出生日期",class:"isLink",readonly:"","is-link":"",formatter:e=>e?k(D)(e).format("YYYY-MM-DD"):e,placeholder:"请选择",onClick:a[1]||(a[1]=e=>k(y)(!0))},null,8,["modelValue","formatter"])):C("",!0),"proposal"===k(b).type&&("add"===k(b).type||"repeatAdd"===k(b).type)||"proposal"!==k(b).type&&(e.factorList.includes("APPLICANT.GENDER")||e.factorList.includes("GENDER"))?(n(),v(o,{key:1,modelValue:k(V).formInfo.gender,"onUpdate:modelValue":a[3]||(a[3]=e=>k(V).formInfo.gender=e),name:"gender",label:"性别",rules:[{required:!0,message:"请选择性别"}]},{input:u((()=>[m("div",W,[s(l,{modelValue:k(V).formInfo.gender,"onUpdate:modelValue":a[2]||(a[2]=e=>k(V).formInfo.gender=e),options:k(N)},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])):C("",!0),e.factorList.includes("SOCIAL_INS")||e.factorList.includes("APPLICANT.SOCIAL_INS")?(n(),v(o,{key:2,modelValue:k(V).formInfo.socialFlag,"onUpdate:modelValue":a[5]||(a[5]=e=>k(V).formInfo.socialFlag=e),name:"socialFlag",label:"社保",rules:[{required:!0,message:"请选择社保"}]},{input:u((()=>[m("div",X,[s(l,{modelValue:k(V).formInfo.socialFlag,"onUpdate:modelValue":a[4]||(a[4]=e=>k(V).formInfo.socialFlag=e),options:k(P)},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])):C("",!0),e.factorList.includes("OCCUPATION_CATEGORY")||e.factorList.includes("APPLICANT.OCCUPATION_CATEGORY")?(n(),v(E,{key:3,modelValue:k(V).formInfo.occupationCodeList[0],"onUpdate:modelValue":a[6]||(a[6]=e=>k(V).formInfo.occupationCodeList[0]=e),field0:k(V).formInfo.occupationCodeList[0],"onUpdate:field0":a[7]||(a[7]=e=>k(V).formInfo.occupationCodeList[0]=e),field1:k(V).formInfo.occupationCodeList[1],"onUpdate:field1":a[8]||(a[8]=e=>k(V).formInfo.occupationCodeList[1]=e),field2:k(V).formInfo.occupationCodeList[2],"onUpdate:field2":a[9]||(a[9]=e=>k(V).formInfo.occupationCodeList[2]=e),required:"",name:"occupationCodeList",label:"职业类型","data-source":k(p),mapping:{label:"value",value:"code",children:"children"},"show-full-value":"","need-key":"name"},null,8,["modelValue","field0","field1","field2","data-source"])):C("",!0)])),_:1},512),s(I,{show:k(f),"onUpdate:show":a[12]||(a[12]=e=>O(f)?f.value=e:null),position:"bottom"},{default:u((()=>[s(c,{type:"date","min-date":k(R).minAge,"max-date":k(R).maxAge,onConfirm:a[10]||(a[10]=e=>{k(V).formInfo.birthday=k(D)(e).format("YYYY-MM-DD"),k(y)(!1)}),onCancel:a[11]||(a[11]=e=>k(y)(!1))},null,8,["min-date","max-date"])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-81fcd45e"]]));const Z={class:"com-risk-card-wrapper part-card"},ee={class:"custom-field"},ie={class:"field-tip"},ae={class:"custom-field"},oe={class:"field-tip"},le={class:"custom-field"},te={class:"field-tip"},re={class:"pro-radio-wrap"},ne={class:"pro-radio-wrap"},de={class:"pro-radio-wrap"},se={class:"pro-radio-wrap"},ue={class:"pro-radio-wrap"},me={key:0},ce={key:1,class:"pro-radio-wrap"},pe={key:9,class:"liab-desc"};var ve=q(i({props:{originData:{default:()=>({})},formInfo:{default:()=>({})},mainRiskData:{default:()=>({})},mainRiskInfo:{default:()=>({})},index:{default:0},removeRisk:{type:Function,default:()=>{}},removeRiskList:{default:()=>[]},enums:{default:()=>({})}},setup(e){const i=e,l=a({}),f=h("premium")||{};l.value=h("enumList")||{};const g=a({chargePeriod:{disabled:!1,prevent:!1},coveragePeriod:{disabled:!1,prevent:!1},paymentFrequency:{disabled:!1,prevent:!1}}),b=o({formInfo:i.formInfo}),V=e=>"boolean"!=typeof e&&!e||(!(!Array.isArray(e)||e.length)||"[object Object]"==={}.toString.call(e)&&Object.keys(e).length),I=(e,i,a={})=>{let o=i;return Array.isArray(i)||(o=[`${o}`]),(e||[]).filter((e=>o.includes(`${e.value}`)||o.includes(e.value)))},D=L((()=>{var e,a,o,l,t,r,n,d;return 1===(null===(e=i.originData)||void 0===e?void 0:e.riskType)?I(i.enums.RISK_INSURANCE_PERIOD,(null===(r=i.originData.riskInsureLimitVO)||void 0===r?void 0:r.insurancePeriodValueList)||[]):2===(null===(a=i.originData)||void 0===a?void 0:a.periodType)?I([{value:"year_1",name:"1年"}],["year_1"]):1===(null===(o=i.originData)||void 0===o?void 0:o.exemptFlag)?I(w,[`${null==i||null===(n=i.originData)||void 0===n||null===(d=n.riskInsureLimitVO)||void 0===d?void 0:d.insurancePeriodRule}`]):I(null===(l=i.enums)||void 0===l?void 0:l.RISK_INSURANCE_PERIOD,(null===(t=i.mainRiskData.riskInsureLimitVO)||void 0===t?void 0:t.insurancePeriodValueList)||[])})),O=L((()=>{var e,a,o,l,t,r,n,d;return 1===(null===(e=i.originData)||void 0===e?void 0:e.riskType)?I(null==i||null===(t=i.enums)||void 0===t?void 0:t.RISK_PAYMENT_PERIOD,(null===(r=i.originData.riskInsureLimitVO)||void 0===r?void 0:r.paymentPeriodValueList)||[]):1===(null===(a=i.originData)||void 0===a?void 0:a.exemptFlag)?I(x,[`${null==i||null===(n=i.originData)||void 0===n||null===(d=n.riskInsureLimitVO)||void 0===d?void 0:d.paymentPeriodRule}`]):2===(null===(o=i.originData)||void 0===o?void 0:o.periodType)?I([{value:"year_1",name:"1年交"}],["year_1"]):I(i.enums.RISK_PAYMENT_PERIOD,(null===(l=i.mainRiskData.riskInsureLimitVO)||void 0===l?void 0:l.paymentPeriodValueList)||[])})),A=L((()=>{var e,a,o,l,t;return 1===(null===(e=i.originData)||void 0===e?void 0:e.riskType)?I(T,(null===(l=i.originData.riskInsureLimitVO)||void 0===l?void 0:l.paymentFrequencyList)||[]):1===(null===(a=i.originData.riskInsureLimitVO)||void 0===a?void 0:a.paymentTypeRule)?I(T,(null===(t=i.mainRiskData.riskInsureLimitVO)||void 0===t?void 0:t.paymentFrequencyList)||[]):I(T,(null===(o=i.mainRiskData.riskInsureLimitVO)||void 0===o?void 0:o.paymentFrequencyList)||[])})),P=L((()=>{var e,a;let o=0,l=0;return((null===(e=i.originData)||void 0===e||null===(a=e.riskCalcMethodInfoVO)||void 0===a?void 0:a.paymentMethodLimitList)||[]).forEach(((e,i)=>{0===i&&(o=e.minAmount,l=e.maxAmount),o>e.minAmount&&(o=e.minAmount),l<e.maxAmount&&(l=e.maxAmount)})),b.formInfo.amount=b.formInfo.amount||o,{min:o,max:l||1/0}})),q=L((()=>{var e,a;let o=0,l=0;return((null===(e=i.originData)||void 0===e||null===(a=e.riskCalcMethodInfoVO)||void 0===a?void 0:a.paymentMethodLimitList)||[]).forEach(((e,i)=>{0===i&&(o=e.minPremium,l=e.maxPremium),o>e.minPremium&&(o=e.minPremium),l<e.maxPremium&&(l=e.maxPremium)})),b.formInfo.premium=b.formInfo.premium||o,{min:o,max:l||1/0}})),N=L((()=>{var e,a,o,l;const t=(null===(e=i.originData)||void 0===e||null===(a=e.riskCalcMethodInfoVO)||void 0===a?void 0:a.minCopy)||1,r=null===(o=i.originData)||void 0===o||null===(l=o.riskCalcMethodInfoVO)||void 0===l?void 0:l.maxCopy;return b.formInfo.copy=`${b.formInfo.copy||t||1}`,{min:t,max:r}})),E=(e,a,o)=>{var l,t;const r=(null===(l=i.originData)||void 0===l||null===(t=l.riskCalcMethodInfoVO)||void 0===t?void 0:t.increaseDecreaseNum)||1;if("sumInsured"===o){if(P.value.max&&+e>P.value.max)return`金额最大${P.value.max}元`;if(+e<P.value.min)return`金额最小${P.value.min}元`}else{if(q.value.max&&+e>q.value.max)return`金额最大${q.value.max}元`;if(+e<q.value.min)return`金额最小${q.value.min}元`}return+e%r==0?"":`金额必须是${r}的倍数`},Y=e=>{var i;const a=((null===(i=b.formInfo)||void 0===i?void 0:i.liabilityVOList)||[]).find((i=>i.liabilityCode===e.liabilityCode));return a?a.liabilityAttributeValue?a.liabilityAttributeValue:1!==e.optionalFlag?"0":"-1":""};return R((()=>{var e,a;const o={riskType:i.originData.riskType,riskId:i.originData.id,riskName:i.originData.riskName,riskCode:i.originData.riskCode,mainRiskCode:1!==i.originData.riskType?null===(e=i.mainRiskData)||void 0===e?void 0:e.riskCode:void 0,mainRiskId:1!==i.originData.riskType?null===(a=i.mainRiskData)||void 0===a?void 0:a.id:void 0,exemptFlag:i.originData.exemptFlag,exemptType:i.originData.exemptType,riskCategory:i.originData.riskCategory,liabilityVOList:(i.originData.riskLiabilityInfoVOList||[]).map((e=>({...e,liabilityAttributeCode:e.liabilityAttributeType,liabilityCode:e.liabilityCode,liabilityRateType:e.liabilityRateType,liabilityAttributeValue:Y(e)})))};Object.assign(b.formInfo,o)})),t((()=>{var e;return null===(e=b.formInfo)||void 0===e?void 0:e.paymentFrequency}),((e=0)=>{var a,o,l;[3].includes((null===(a=i.originData.riskCalcMethodInfoVO)||void 0===a?void 0:a.saleMethod)||0)&&((null===(o=i.originData)||void 0===o||null===(l=o.riskCalcMethodInfoVO)||void 0===l?void 0:l.paymentMethodLimitList)||[]).forEach((i=>{+i.paymentFrequency==+e&&Object.assign(b.formInfo,{amount:i.perCopyAmount,premium:i.perCopyPremium})}));1==+e&&"single"!==b.formInfo.chargePeriod&&(b.formInfo.chargePeriod="single")})),t((()=>{var e;return null===(e=b.formInfo)||void 0===e?void 0:e.copy}),(e=>{var a,o;4===(null===(a=i.originData.riskCalcMethodInfoVO)||void 0===a?void 0:a.saleMethod)&&(b.formInfo.amount=null===(o=i.originData.riskCalcMethodInfoVO)||void 0===o?void 0:o.fixedAmount)})),t((()=>{var e;return null===(e=b.formInfo)||void 0===e?void 0:e.chargePeriod}),(e=>{"single"===e&&1!=+(b.formInfo.paymentFrequency||0)&&(b.formInfo.paymentFrequency=1)})),t((()=>b.formInfo),(()=>{}),{deep:!0,immediate:!0}),t((()=>null==i?void 0:i.mainRiskInfo),(e=>{var a,o,l,t,r,n;e&&2===i.originData.riskType&&(1===(null===(a=i.originData)||void 0===a||null===(o=a.riskInsureLimitVO)||void 0===o?void 0:o.insurancePeriodRule)&&(e.coveragePeriod?g.value.coveragePeriod.disabled=!0:g.value.coveragePeriod.prevent=!0,b.formInfo.coveragePeriod=e.coveragePeriod||""),1===(null===(l=i.originData)||void 0===l||null===(t=l.riskInsureLimitVO)||void 0===t?void 0:t.paymentPeriodRule)&&(e.chargePeriod?g.value.chargePeriod.disabled=!0:g.value.chargePeriod.prevent=!0,b.formInfo.chargePeriod=e.chargePeriod||""),1===(null===(r=i.originData)||void 0===r||null===(n=r.riskInsureLimitVO)||void 0===n?void 0:n.paymentTypeRule)&&(e.paymentFrequency?g.value.paymentFrequency.disabled=!0:g.value.paymentFrequency.prevent=!0,b.formInfo.paymentFrequency=e.paymentFrequency||0))}),{immediate:!0,deep:!0}),(i,a)=>{var o,l,t,h,L,R,w,x,T,Y,j,$,S,z,B,G,K,H,J,Q,W,X,ve,fe,ye,ke,ge,be,Ve,Ie;const he=r("ProSvg"),Le=r("ProTitle"),De=r("VanStepper"),Ce=r("VanField"),Oe=r("ProRadioButton"),Re=r("ProField"),Ae=r("ProExpand");return n(),d("div",Z,[s(Le,{"risk-type":e.originData.riskType,title:e.originData.riskName},{default:u((()=>[e.removeRiskList.includes(e.originData.id)?(n(),d("div",{key:0,class:"delete-risk",onClick:a[0]||(a[0]=i=>e.removeRisk(e.originData.id))},[s(he,{name:"img-lajitong",color:"#0d6efe"})])):C("",!0)])),_:1},8,["risk-type","title"]),1===(null===(o=e.originData.riskCalcMethodInfoVO)||void 0===o?void 0:o.saleMethod)&&2===e.originData.exemptFlag?(n(),v(Ce,{key:0,modelValue:k(b).formInfo.amount,"onUpdate:modelValue":a[2]||(a[2]=e=>k(b).formInfo.amount=e),label:"保额",name:"amount",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...e)=>E(...e,"sumInsured")}]},{input:u((()=>{var i,o;return[m("div",ee,[s(De,{modelValue:k(b).formInfo.amount,"onUpdate:modelValue":a[1]||(a[1]=e=>k(b).formInfo.amount=e),"input-width":"64px",min:k(P).min,step:(null===(i=e.originData.riskCalcMethodInfoVO)||void 0===i?void 0:i.increaseDecreaseNum)||1,max:k(P).max},null,8,["modelValue","min","step","max"]),m("span",ie,y(`金额最低${k(P).min}元，为${(null===(o=e.originData.riskCalcMethodInfoVO)||void 0===o?void 0:o.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):C("",!0),2===(null===(l=e.originData)||void 0===l||null===(t=l.riskCalcMethodInfoVO)||void 0===t?void 0:t.saleMethod)?(n(),v(Ce,{key:1,modelValue:k(b).formInfo.premium,"onUpdate:modelValue":a[4]||(a[4]=e=>k(b).formInfo.premium=e),label:"保费",name:"premium",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...e)=>E(...e,"premium")}]},{input:u((()=>{var i,o,l,t;return[m("div",ae,[s(De,{modelValue:k(b).formInfo.premium,"onUpdate:modelValue":a[3]||(a[3]=e=>k(b).formInfo.premium=e),step:(null===(i=e.originData)||void 0===i||null===(o=i.riskCalcMethodInfoVO)||void 0===o?void 0:o.increaseDecreaseNum)||1,min:k(q).min,"input-width":"64px",max:k(q).max},null,8,["modelValue","step","min","max"]),m("span",oe,y(`金额最低${k(q).min}元，为${(null===(l=e.originData)||void 0===l||null===(t=l.riskCalcMethodInfoVO)||void 0===t?void 0:t.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):C("",!0),3===(null===(h=e.originData)||void 0===h||null===(L=h.riskCalcMethodInfoVO)||void 0===L?void 0:L.saleMethod)||4===(null===(R=e.originData)||void 0===R||null===(w=R.riskCalcMethodInfoVO)||void 0===w?void 0:w.saleMethod)&&(null!==(x=e.originData)&&void 0!==x&&null!==(T=x.riskCalcMethodInfoVO)&&void 0!==T&&T.minCopy||null!==(Y=e.originData)&&void 0!==Y&&null!==(j=Y.riskCalcMethodInfoVO)&&void 0!==j&&j.maxCopy)?(n(),v(Ce,{key:2,modelValue:k(b).formInfo.copy,"onUpdate:modelValue":a[6]||(a[6]=e=>k(b).formInfo.copy=e),label:"投保份数",name:"copy",rules:[{required:!0,message:"请填写"}]},{input:u((()=>[m("div",le,[s(De,{modelValue:k(b).formInfo.copy,"onUpdate:modelValue":a[5]||(a[5]=e=>k(b).formInfo.copy=e),step:1,min:k(N).min,max:k(N).max},null,8,["modelValue","min","max"]),m("span",te,y(`${k(N).min}份起购，最多购买${k(N).max}份`),1)])])),_:1},8,["modelValue"])):C("",!0),[1].includes((null===($=e.originData.riskCalcMethodInfoVO)||void 0===$?void 0:$.saleMethod)||0)&&1!==(null===(S=e.originData)||void 0===S?void 0:S.exemptFlag)||!(e.originData.riskCalcMethodInfoVO.fixedAmount||null!==(z=k(f))&&void 0!==z&&z[null===(B=e.originData)||void 0===B?void 0:B.riskCode])?C("",!0):(n(),v(Ce,{key:3,label:"保额"},{input:u((()=>{var i,a,o,l;return[m("div",null,y((null===(i=e.originData.riskCalcMethodInfoVO)||void 0===i?void 0:i.fixedAmount)||(null===(a=k(f))||void 0===a||null===(o=a[null===(l=e.originData)||void 0===l?void 0:l.riskCode])||void 0===o?void 0:o.amount)),1)]})),_:1})),V(null===(G=e.originData)||void 0===G||null===(K=G.riskInsureLimitVO)||void 0===K?void 0:K.insurancePeriodValueList)&&V(null===(H=e.originData)||void 0===H||null===(J=H.riskInsureLimitVO)||void 0===J?void 0:J.insurancePeriodRule)?C("",!0):(n(),v(Re,{key:4,modelValue:k(b).formInfo.coveragePeriod,"onUpdate:modelValue":a[8]||(a[8]=e=>k(b).formInfo.coveragePeriod=e),label:"保障期间",name:"coveragePeriod",rules:[{required:!0,message:"请选择保障期间"}]},{input:u((()=>[m("div",re,[s(Oe,{modelValue:k(b).formInfo.coveragePeriod,"onUpdate:modelValue":a[7]||(a[7]=e=>k(b).formInfo.coveragePeriod=e),disabled:g.value.coveragePeriod.disabled,prevent:g.value.coveragePeriod.prevent?"请先选择主险保障期间":"",options:k(D),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),V(null===(Q=e.originData)||void 0===Q||null===(W=Q.riskInsureLimitVO)||void 0===W?void 0:W.paymentPeriodValueList)&&V(null===(X=e.originData)||void 0===X||null===(ve=X.riskInsureLimitVO)||void 0===ve?void 0:ve.paymentPeriodRule)?C("",!0):(n(),v(Re,{key:5,modelValue:k(b).formInfo.chargePeriod,"onUpdate:modelValue":a[10]||(a[10]=e=>k(b).formInfo.chargePeriod=e),label:"交费期间",name:"chargePeriod",rules:[{required:!0,message:"请选择交费期间"}]},{input:u((()=>[m("div",ne,[s(Oe,{modelValue:k(b).formInfo.chargePeriod,"onUpdate:modelValue":a[9]||(a[9]=e=>k(b).formInfo.chargePeriod=e),disabled:g.value.chargePeriod.disabled,prevent:g.value.chargePeriod.prevent?"请先选择主险交费期间":"",options:k(O),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),V(null===(fe=e.originData.riskInsureLimitVO)||void 0===fe?void 0:fe.paymentFrequencyList)&&V(null===(ye=e.originData.riskInsureLimitVO)||void 0===ye?void 0:ye.paymentPeriodRule)?C("",!0):(n(),v(Re,{key:6,modelValue:k(b).formInfo.paymentFrequency,"onUpdate:modelValue":a[12]||(a[12]=e=>k(b).formInfo.paymentFrequency=e),label:"交费方式",name:"paymentFrequency",rules:[{required:!0,message:"请选择交费方式"}]},{input:u((()=>[m("div",de,[s(Oe,{modelValue:k(b).formInfo.paymentFrequency,"onUpdate:modelValue":a[11]||(a[11]=e=>k(b).formInfo.paymentFrequency=e),disabled:g.value.paymentFrequency.disabled,prevent:g.value.paymentFrequency.prevent?"请先选择主险交费方式":"",options:k(A)},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),V(null===(ke=e.originData)||void 0===ke||null===(ge=ke.riskInsureLimitVO)||void 0===ge?void 0:ge.annuityDrawValueList)?C("",!0):(n(),v(Re,{key:7,modelValue:k(b).formInfo.annuityDrawDate,"onUpdate:modelValue":a[14]||(a[14]=e=>k(b).formInfo.annuityDrawDate=e),label:"领取时间",name:"annuityDrawDate"},{input:u((()=>{var i;return[m("div",se,[s(Oe,{modelValue:k(b).formInfo.annuityDrawDate,"onUpdate:modelValue":a[13]||(a[13]=e=>k(b).formInfo.annuityDrawDate=e),options:I(k(_),(null===(i=e.originData.riskInsureLimitVO)||void 0===i?void 0:i.annuityDrawValueList)||[])},null,8,["modelValue","options"])])]})),_:1},8,["modelValue"])),V(null===(be=e.originData)||void 0===be||null===(Ve=be.riskInsureLimitVO)||void 0===Ve?void 0:Ve.annuityDrawFrequencyList)?C("",!0):(n(),v(Re,{key:8,modelValue:k(b).formInfo.annuityDrawType,"onUpdate:modelValue":a[16]||(a[16]=e=>k(b).formInfo.annuityDrawType=e),label:"领取方式",name:"annuityDrawType"},{input:u((()=>{var i;return[m("div",ue,[s(Oe,{modelValue:k(b).formInfo.annuityDrawType,"onUpdate:modelValue":a[15]||(a[15]=e=>k(b).formInfo.annuityDrawType=e),options:I(k(F),(null===(i=e.originData.riskInsureLimitVO)||void 0===i?void 0:i.annuityDrawFrequencyList)||[])},null,8,["modelValue","options"])])]})),_:1},8,["modelValue"])),(n(!0),d(c,null,p(e.originData.riskLiabilityInfoVOList||[],((i,a)=>(n(),d(c,{key:a},[1!==i.optionalFlag||V(i.liabilityAttributeValueList)?C("",!0):(n(),v(Ce,{key:0,modelValue:k(b).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>k(b).formInfo.liabilityVOList[a].liabilityAttributeValue=e,label:i.liabilityName,name:"liabilityAttributeValue",rules:[{required:i.liabilityAttributeValue,message:`请选择${i.liabilityName}`}]},{input:u((()=>{var o,l;return[m("div",null,[V(i.liabilityAttributeValueList)?(n(),d("span",me,"50万")):(n(),d("div",ce,[s(Oe,{modelValue:k(b).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>k(b).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:I(k(M),null===(o=e.originData.riskLiabilityInfoVOList)||void 0===o||null===(l=o[a])||void 0===l?void 0:l.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"])]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])),1!==i.optionalFlag?(n(),v(Ce,{key:1,modelValue:k(b).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>k(b).formInfo.liabilityVOList[a].liabilityAttributeValue=e,label:i.liabilityName,name:"liabilityAttributeValue"},{input:u((()=>{var o,l;return[m("div",null,[V(i.liabilityAttributeValueList)?(n(),v(Oe,{key:0,modelValue:k(b).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>k(b).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:k(U)},null,8,["modelValue","onUpdate:modelValue","options"])):(n(),v(Oe,{key:1,modelValue:k(b).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>k(b).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:I(k(M),null===(o=e.originData.riskLiabilityInfoVOList)||void 0===o||null===(l=o[a])||void 0===l?void 0:l.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label"])):C("",!0)],64)))),128)),null!==(Ie=e.originData)&&void 0!==Ie&&Ie.relationDesc?(n(),d("div",pe,[s(Ae,{title:"责任投保说明"},{default:u((()=>[m("div",null,y(e.originData.relationDesc),1)])),_:1})])):C("",!0)])}}}),[["__scopeId","data-v-4a954db9"]]);const fe={class:"risk-list-wrapper"},ye={key:0,class:"add-rider-risk"},ke={class:"left-part"},ge=(e=>(g("data-v-4b309d85"),e=e(),b(),e))((()=>m("span",{class:"btn-plus"},"+",-1))),be=V(" 附加险");e("a",q(i({props:{riskInfo:{default:()=>({})},originData:{default:()=>[]},pickFactor:{type:Function,default:()=>{}},enums:{default:()=>{}}},setup(e){const i=e,l=h("source")||{},[f,g]=I(!1);a(null),a(null);const b=o({mainRiskInfo:i.riskInfo,riskInfo:i.riskInfo,requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[],currentRiskList:[]}),V=(e,i)=>{b.currentRiskList=b.currentRiskList.concat(e),b.disabledList=i},L=e=>{A.confirm({message:"确定要删除附加险么？",confirmButtonText:"删除"}).then((()=>{var i;const a=[e];((null===(i=b.mainRiskData)||void 0===i?void 0:i.collocationVOList)||[]).forEach((i=>{e!==i.riskId||2!==i.collocationType&&3!==i.collocationType||a.push(i.collocationRiskId)})),b.checkedList=b.checkedList.filter((e=>!a.includes(e))),b.currentRiskList=b.currentRiskList.filter((e=>!a.includes(e.id)||(Object.assign(b.riskInfo,{[e.id]:void 0}),!1))),b.disabledList=b.disabledList.filter((e=>!a.includes(e)))})).catch((()=>{}))},D=(e,i)=>{var a,o;const l=((null===(a=b.riskInfo)||void 0===a||null===(o=a[i])||void 0===o?void 0:o.liabilityVOList)||[]).find((i=>i.liabilityCode===e.liabilityCode));return l?l.liabilityAttributeValue?l.liabilityAttributeValue:1!==e.optionalFlag?"0":"-1":""};return t((()=>b.currentRiskList),(e=>{const a=[b.mainRiskData,...e];let o=[],l=[];const t=[];a.forEach(((e,i)=>{var a,r,n;const d=(null==e||null===(a=e.riskCalcMethodInfoVO)||void 0===a?void 0:a.riskFactorRelationList)||[];o=o.concat(d.filter((e=>"insured"===e.factorObject)).map((e=>e.factorCode))),l=l.concat(d.filter((e=>"holder"===e.factorObject)).map((e=>e.factorCode))),t.push(null==e||null===(r=e.riskInsureLimitVO)||void 0===r?void 0:r.minHolderAge,null==e||null===(n=e.riskInsureLimitVO)||void 0===n?void 0:n.maxHolderAge)})),(e||[]).forEach((e=>{var a,o;const l={riskType:e.riskType,riskId:e.id,riskCode:e.riskCode,riskName:e.riskName,mainRiskCode:1!==e.riskType?null===(a=b.mainRiskData)||void 0===a?void 0:a.riskCode:void 0,mainRiskId:1!==e.riskType?null===(o=b.mainRiskData)||void 0===o?void 0:o.id:void 0,riskCategory:e.riskCategory,exemptFlag:i.originData.exemptFlag,exemptType:i.originData.exemptType,liabilityVOList:(e.riskLiabilityInfoVOList||[]).map((i=>({...i,liabilityAttributeCode:i.liabilityAttributeType,liabilityCode:i.liabilityCode,liabilityRateType:i.liabilityRateType,liabilityAttributeValue:D(i,e.id)})))};b.riskInfo[e.id]||Object.assign(b.riskInfo,{[e.id]:l})})),i.pickFactor({insuredFactorList:[...new Set(o)],holderFactorList:[...new Set(l)],ageRange:t})}),{deep:!0,immediate:!0}),t((()=>i.riskInfo),(e=>{b.mainRiskInfo=Object.values(e||{}).find((e=>1===(null==e?void 0:e.riskType)))||{}}),{deep:!0,immediate:!0}),t((()=>i.originData),(e=>{let i=[];const a=[];"proposal"===l.origin&&"add"!==l.type&&"repeatAdd"!==l.type?((e||[]).forEach((e=>{1===e.riskType&&(b.mainRiskData=e),i.push(e)})),i=i.filter((e=>l.showRiskList.includes(e.id)))):(e||[]).forEach((e=>{1===e.riskType?(b.mainRiskData=e,i.push(e)):2===e.collocationType?i.push(e):a.push(e)})),b.riderRiskList=a,b.currentRiskList=i}),{deep:!0,immediate:!0}),(i,a)=>{var o,t,I;const h=r("ProCheckButton");return n(),d("div",fe,[(n(!0),d(c,null,p(k(b).currentRiskList,((i,a)=>(n(),v(ve,{key:i.id,"form-info":k(b).riskInfo[i.id],index:a,enums:e.enums,"main-risk-data":k(b).mainRiskData,"main-risk-info":k(b).mainRiskInfo,"origin-data":i,"remove-risk":L,"remove-risk-list":k(b).checkedList},null,8,["form-info","index","enums","main-risk-data","main-risk-info","origin-data","remove-risk-list"])))),128)),(null===(o=k(b).riderRiskList)||void 0===o?void 0:o.length)-(null===(t=k(b).checkedList)||void 0===t?void 0:t.length)&&"proposal"!==k(l).origin?(n(),d("div",ye,[m("span",ke,y(`共有${k(b).riderRiskList.length-k(b).checkedList.length}款附加险可以添加`),1),s(h,{activated:"",class:"btn-rider-risk",onClick:a[0]||(a[0]=e=>k(g)(!0))},{default:u((()=>[ge,be])),_:1})])):C("",!0),k(f)?(n(),v(J,{key:1,modelValue:k(b).checkedList,"onUpdate:modelValue":a[1]||(a[1]=e=>k(b).checkedList=e),show:k(f),disabled:k(b).disabledList,"risk-list":k(b).riderRiskList,"collocation-list":(null===(I=k(b).mainRiskData)||void 0===I?void 0:I.collocationVOList)||[],onFinished:V,onClose:a[2]||(a[2]=e=>k(g)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):C("",!0)])}}}),[["__scopeId","data-v-4b309d85"]]))}}}))}();
