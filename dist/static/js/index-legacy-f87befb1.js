!function(){var e=document.createElement("style");e.innerHTML=".com-risk-list-wrapper .risk-list[data-v-7d3c3028]{height:13.84rem;padding-bottom:2rem}.com-risk-list-wrapper[data-v-7d3c3028] .van-cell-group--inset{border-bottom:0;border-radius:0;margin:0}.com-risk-list-wrapper[data-v-7d3c3028] .van-cell-group--inset .van-cell{padding:.42667rem .53333rem;align-items:center}.com-risk-list-wrapper[data-v-7d3c3028] .van-cell-group--inset .van-cell:after{width:9.6rem}.com-risk-list-wrapper[data-v-7d3c3028] .van-cell-group--inset .van-cell .van-checkbox__icon .van-icon{height:.42667rem;width:.42667rem;border-radius:.05333rem;line-height:.42667rem;font-size:.32rem}.com-risk-list-wrapper .cell-title[data-v-7d3c3028]{display:flex;flex-direction:column}.com-risk-list-wrapper .cell-title .title-desc[data-v-7d3c3028]{font-size:.32rem;font-weight:400;color:#99a9c0}.com-risk-list-wrapper .footer-bar[data-v-7d3c3028]{padding:0 .53333rem;position:absolute;width:100%;height:2rem;bottom:0;display:flex;align-items:center;justify-content:center}.com-personal-info-wrapper .placeholder[data-v-103cfd8f]{color:#99a9c0}.com-risk-card-wrapper.part-card[data-v-a5708be0]{background-color:#fff;border-bottom:.26667rem solid var(--zaui-global-bg, #f2f5fc)}.com-risk-card-wrapper .delete-risk[data-v-a5708be0]{display:flex;align-items:center;justify-content:center;margin-top:.06667rem}.com-risk-card-wrapper .delete-risk .svg-icon[data-v-a5708be0]{font-size:.42667rem}.com-risk-card-wrapper .custom-field[data-v-a5708be0]{display:flex;flex-direction:column}.com-risk-card-wrapper .custom-field .field-tip[data-v-a5708be0]{font-size:.32rem;font-weight:400;color:#99a9c0;line-height:1;margin:0 0 .10667rem}.risk-list-wrapper[data-v-45a0160e]{margin-bottom:3.13333rem}.risk-list-wrapper .add-rider-risk[data-v-45a0160e]{background-color:#fff;margin-top:-.26667rem;height:1.41333rem;display:flex;align-items:center;justify-content:space-between;padding:var(--van-cell-vertical-padding) var(--van-cell-horizontal-padding)}.risk-list-wrapper .add-rider-risk .left-part[data-v-45a0160e]{font-weight:400;color:#99a9c0;font-size:.4rem}.risk-list-wrapper .add-rider-risk .btn-rider-risk[data-v-45a0160e]{border:none;display:flex;align-items:center}.risk-list-wrapper .add-rider-risk .btn-rider-risk .btn-plus[data-v-45a0160e]{font-size:.58667rem;margin:0 .10667rem .13333rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-92a8f610.js","./trial-legacy-a20a1360.js","./index-legacy-8f1d7f91.js","./useDicData-legacy-d216e398.js"],(function(e){"use strict";var i,a,o,l,t,r,n,d,s,u,m,c,p,v,f,y,k,g,V,b,I,h,L,D,C,O,R,A,P,w,x,_,T,F,M,U,q,N,E;return{setters:[function(e){i=e.g,a=e.E,o=e.M,l=e.aa,t=e._,r=e.r,n=e.j,d=e.n,s=e.p,u=e.m,m=e.z,c=e.F,p=e.G,v=e.k,f=e.ab,y=e.J,k=e.A,g=e.a4,V=e.a5,b=e.C,I=e.Q,h=e.a7,L=e.y,D=e.d,C=e.t,O=e.R,R=e.o,A=e.D},function(e){P=e.S,w=e.d,x=e.e,_=e.f,T=e.A,F=e.g,M=e.L,U=e.h},function(e){q=e._,N=e.Q},function(e){E=e.u}],execute:function(){const Y={class:"com-risk-list-wrapper"},j=(e=>(g("data-v-7d3c3028"),e=e(),V(),e))((()=>m("div",{class:"popup-title"},"选择附加险",-1))),S={class:"risk-list"},$={class:"cell-title"},z={class:"title"},B={class:"footer-button"},G=b("确认"),K=i({props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:i}){const g=e,V=a([]),b=a([]),I=a([...g.disabled]),h=o({show:g.show,currentChecked:[...g.modelValue]}),L=e=>{var i,a,o;if(I.value.includes(e))return;((e,i)=>{if(!g.collocationList.length)return i?void(h.currentChecked=[]):void h.currentChecked.push(e);let a=h.currentChecked,o=I.value;i?(g.collocationList.forEach((i=>{e===i.riskId&&(2===i.collocationType?a=a.filter((a=>a!==i.collocationRiskId||a!==e)):3===i.collocationType?(a=a.filter((i=>i!==e)),o=o.filter((e=>e!==i.collocationRiskId))):a=a.filter((i=>i!==e)))})),h.currentChecked=a,I.value=o):(g.collocationList.forEach((l=>{e===l.riskId&&(i||(2===l.collocationType?a.push(l.collocationRiskId):3===l.collocationType&&o.push(l.collocationRiskId),a.push(e)))})),h.currentChecked.push(...a),I.value=o)})(e,h.currentChecked.includes(e)),null==V||null===(i=V.value)||void 0===i||null===(a=i[e])||void 0===a||null===(o=a.toggle)||void 0===o||o.call(a)},D=()=>{i("close")},C=()=>{const e=g.riskList.filter((e=>h.currentChecked.includes(e.id)));i("update:modelValue",[...new Set(b.value)]),i("finished",e,I.value),i("close")};return l((()=>{V.value=[]})),t((()=>h.currentChecked),(e=>{b.value=e}),{deep:!0,immediate:!0}),t((()=>g.modelValue),(e=>{b.value=e||[],I.value.push(...e||[])}),{deep:!0,immediate:!0}),(i,a)=>{const o=r("van-checkbox"),l=r("VanCell"),t=r("van-cell-group"),g=r("van-checkbox-group"),O=r("VanButton"),R=r("VanPopup");return n(),d("div",Y,[s(R,{show:k(h).show,"onUpdate:show":a[1]||(a[1]=e=>k(h).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:D},{default:u((()=>[j,m("div",S,[s(g,{modelValue:b.value,"onUpdate:modelValue":a[0]||(a[0]=e=>b.value=e)},{default:u((()=>[s(t,{inset:""},{default:u((()=>[(n(!0),d(c,null,p(e.riskList,(e=>(n(),v(l,{key:e.id,title:e.riskName,disabled:I.value.includes(e.id),onClick:i=>L(e.id)},{"right-icon":u((()=>[s(o,{ref_for:!0,ref:i=>V.value[e.id]=i,shape:"square",disabled:I.value.includes(e.id),name:e.id,onClick:f((i=>L(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:u((()=>[m("div",$,[m("div",z,y(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),m("div",B,[s(O,{type:"primary",disabled:!k(h).currentChecked.length,block:"",onClick:C},{default:u((()=>[G])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}});var H=e("R",q(K,[["__scopeId","data-v-7d3c3028"]]));const Q={class:"com-personal-info-wrapper"},J={class:"pro-radio-wrap"},W={class:"pro-radio-wrap"};e("P",q(i({props:{formInfo:{default:()=>({})},insuredCode:{default:""},factorList:{default:()=>[]},ageRange:{default:()=>[]}},setup(e,{expose:i}){var l,t;const c=e,p=E(`${null===(l=c.insuredCode)||void 0===l||null===(t=l.toLocaleUpperCase)||void 0===t?void 0:t.call(l)}_OCCUPATION`),[f,y]=I(),g=a(),V=h("source")||{},b=o({formInfo:c.formInfo,occupationalText:"",occupationCodeList:[]}),R=L((()=>{const e=(e=>{const i=e||[];for(let a=0;a<i.length;a++)for(let e=a+1;e<i.length;e++){const o=i[a].split("_"),l=i[e].split("_"),t=i[a];o[0]===l[0]?o>l&&(i[a]=i[e],i[e]=t):"age"===o[0]&&(i[a]=i[e],i[e]=t)}return i})(null==c?void 0:c.ageRange),i=(e="")=>[+e.split("_")[1],e.split("_")[0]],a=i(e[0]),o=i(e[e.length-1]),l=D().subtract(a[0],"age"===a[1]?"year":"day").format("YYYY-MM-DD");let t=D().subtract(o[0],"age"===o[1]?"year":"day").format("YYYY-MM-DD");return D(t).subtract(1,"year").isBefore(l)&&(t=D(t).subtract(1,"year").add(1,"day").format("YYYY-MM-DD")),{minAge:new Date(t),maxAge:new Date(l)}}));return i({validateForm:()=>new Promise(((e,i)=>{var a;null===(a=g.value)||void 0===a||a.validate().then((()=>{e("")}),(e=>{var a;null===(a=g.value)||void 0===a||a.scrollToField(null==e?void 0:e[0].name),i()}))})),ageRangeObj:R.value}),(i,a)=>{const o=r("VanField"),l=r("ProRadioButton"),t=r("VanForm"),c=r("van-datetime-picker"),I=r("van-popup");return n(),d("div",Q,[s(t,{ref_key:"formRef",ref:g,"input-align":"right","error-message-align":"right"},{default:u((()=>["proposal"===k(V).type&&("add"===k(V).type||"repeatAdd"===k(V).type)||"proposal"!==k(V).type&&(e.factorList.includes("APPLICANT.AGE")||e.factorList.includes("AGE")||e.factorList.includes("DAY")||e.factorList.includes("APPLICANT.DAY"))?(n(),v(o,{key:0,modelValue:k(b).formInfo.birthday,"onUpdate:modelValue":a[0]||(a[0]=e=>k(b).formInfo.birthday=e),rules:[{required:!0,message:"请选择出生日期"}],name:"birth",label:"出生日期",class:"isLink",readonly:"","is-link":"",formatter:e=>e?k(D)(e).format("YYYY-MM-DD"):e,placeholder:"请选择",onClick:a[1]||(a[1]=e=>k(y)(!0))},null,8,["modelValue","formatter"])):C("",!0),"proposal"===k(V).type&&("add"===k(V).type||"repeatAdd"===k(V).type)||"proposal"!==k(V).type&&(e.factorList.includes("APPLICANT.GENDER")||e.factorList.includes("GENDER"))?(n(),v(o,{key:1,modelValue:k(b).formInfo.gender,"onUpdate:modelValue":a[3]||(a[3]=e=>k(b).formInfo.gender=e),name:"gender",label:"性别",rules:[{required:!0,message:"请选择性别"}]},{input:u((()=>[m("div",J,[s(l,{modelValue:k(b).formInfo.gender,"onUpdate:modelValue":a[2]||(a[2]=e=>k(b).formInfo.gender=e),options:k(P)},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])):C("",!0),e.factorList.includes("SOCIAL_INS")||e.factorList.includes("APPLICANT.SOCIAL_INS")?(n(),v(o,{key:2,modelValue:k(b).formInfo.socialFlag,"onUpdate:modelValue":a[5]||(a[5]=e=>k(b).formInfo.socialFlag=e),name:"socialFlag",label:"社保",rules:[{required:!0,message:"请选择社保"}]},{input:u((()=>[m("div",W,[s(l,{modelValue:k(b).formInfo.socialFlag,"onUpdate:modelValue":a[4]||(a[4]=e=>k(b).formInfo.socialFlag=e),options:k(w)},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])):C("",!0),e.factorList.includes("OCCUPATION_CATEGORY")||e.factorList.includes("APPLICANT.OCCUPATION_CATEGORY")?(n(),v(N,{key:3,modelValue:k(b).formInfo.occupationCodeList[0],"onUpdate:modelValue":a[6]||(a[6]=e=>k(b).formInfo.occupationCodeList[0]=e),field0:k(b).formInfo.occupationCodeList[0],"onUpdate:field0":a[7]||(a[7]=e=>k(b).formInfo.occupationCodeList[0]=e),field1:k(b).formInfo.occupationCodeList[1],"onUpdate:field1":a[8]||(a[8]=e=>k(b).formInfo.occupationCodeList[1]=e),field2:k(b).formInfo.occupationCodeList[2],"onUpdate:field2":a[9]||(a[9]=e=>k(b).formInfo.occupationCodeList[2]=e),required:"",name:"occupationCodeList",label:"职业类型","data-source":k(p),mapping:{label:"value",value:"code",children:"children"},"show-full-value":"","need-key":"name"},null,8,["modelValue","field0","field1","field2","data-source"])):C("",!0)])),_:1},512),s(I,{show:k(f),"onUpdate:show":a[12]||(a[12]=e=>O(f)?f.value=e:null),position:"bottom"},{default:u((()=>[s(c,{type:"date","min-date":k(R).minAge,"max-date":k(R).maxAge,onConfirm:a[10]||(a[10]=e=>{k(b).formInfo.birthday=k(D)(e).format("YYYY-MM-DD"),k(y)(!1)}),onCancel:a[11]||(a[11]=e=>k(y)(!1))},null,8,["min-date","max-date"])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-103cfd8f"]]));const X={class:"com-risk-card-wrapper part-card"},Z={class:"custom-field"},ee={class:"field-tip"},ie={class:"custom-field"},ae={class:"field-tip"},oe={class:"custom-field"},le={class:"field-tip"},te={class:"pro-radio-wrap"},re={class:"pro-radio-wrap"},ne={class:"pro-radio-wrap"},de={class:"pro-radio-wrap"},se={class:"pro-radio-wrap"},ue={key:0},me={key:1,class:"pro-radio-wrap"},ce={key:9,class:"liab-desc"};var pe=q(i({props:{originData:{default:()=>({})},formInfo:{default:()=>({})},mainRiskData:{default:()=>({})},mainRiskInfo:{default:()=>({})},index:{default:0},removeRisk:{type:Function,default:()=>{}},removeRiskList:{default:()=>[]},enums:{default:()=>({})}},setup(e){const i=e,l=a({}),f=h("premium")||{};l.value=h("enumList")||{};const g=a({chargePeriod:{disabled:!1,prevent:!1},coveragePeriod:{disabled:!1,prevent:!1},paymentFrequency:{disabled:!1,prevent:!1}}),V=o({formInfo:i.formInfo}),b=e=>"boolean"!=typeof e&&!e||(!(!Array.isArray(e)||e.length)||"[object Object]"==={}.toString.call(e)&&Object.keys(e).length),I=(e,i,a={})=>{let o=i;return Array.isArray(i)||(o=[`${o}`]),(e||[]).filter((e=>o.includes(`${e.value}`)||o.includes(e.value)))},D=L((()=>{var e,a,o,l,t;return 1===(null===(e=i.originData)||void 0===e?void 0:e.riskType)?I(i.enums.RISK_INSURANCE_PERIOD,(null===(t=i.originData.riskInsureLimitVO)||void 0===t?void 0:t.insurancePeriodValueList)||[]):2===(null===(a=i.originData)||void 0===a?void 0:a.periodType)?I([{value:"year_1",name:"1年"}],["year_1"]):I(null===(o=i.enums)||void 0===o?void 0:o.RISK_INSURANCE_PERIOD,(null===(l=i.mainRiskData.riskInsureLimitVO)||void 0===l?void 0:l.insurancePeriodValueList)||[])})),O=L((()=>{var e,a,o,l,t,r,n,d;return 1===(null===(e=i.originData)||void 0===e?void 0:e.riskType)?I(null==i||null===(t=i.enums)||void 0===t?void 0:t.RISK_PAYMENT_PERIOD,(null===(r=i.originData.riskInsureLimitVO)||void 0===r?void 0:r.paymentPeriodValueList)||[]):1===(null===(a=i.originData)||void 0===a?void 0:a.exemptFlag)?I(x,[`${null==i||null===(n=i.originData)||void 0===n||null===(d=n.riskInsureLimitVO)||void 0===d?void 0:d.paymentPeriodRule}`]):2===(null===(o=i.originData)||void 0===o?void 0:o.periodType)?I([{value:"year_1",name:"1年交"}],["year_1"]):I(i.enums.RISK_PAYMENT_PERIOD,(null===(l=i.mainRiskData.riskInsureLimitVO)||void 0===l?void 0:l.paymentPeriodValueList)||[])})),A=L((()=>{var e,a,o,l,t;return 1===(null===(e=i.originData)||void 0===e?void 0:e.riskType)?I(_,(null===(l=i.originData.riskInsureLimitVO)||void 0===l?void 0:l.paymentFrequencyList)||[]):1===(null===(a=i.originData.riskInsureLimitVO)||void 0===a?void 0:a.paymentTypeRule)?I(_,(null===(t=i.mainRiskData.riskInsureLimitVO)||void 0===t?void 0:t.paymentFrequencyList)||[]):I(_,(null===(o=i.mainRiskData.riskInsureLimitVO)||void 0===o?void 0:o.paymentFrequencyList)||[])})),P=L((()=>{var e,a;let o=0,l=0;return((null===(e=i.originData)||void 0===e||null===(a=e.riskCalcMethodInfoVO)||void 0===a?void 0:a.paymentMethodLimitList)||[]).forEach(((e,i)=>{0===i&&(o=e.minAmount,l=e.maxAmount),o>e.minAmount&&(o=e.minAmount),l<e.maxAmount&&(l=e.maxAmount)})),V.formInfo.amount=V.formInfo.amount||o,{min:o,max:l||1/0}})),w=L((()=>{var e,a;let o=0,l=0;return((null===(e=i.originData)||void 0===e||null===(a=e.riskCalcMethodInfoVO)||void 0===a?void 0:a.paymentMethodLimitList)||[]).forEach(((e,i)=>{0===i&&(o=e.minPremium,l=e.maxPremium),o>e.minPremium&&(o=e.minPremium),l<e.maxPremium&&(l=e.maxPremium)})),V.formInfo.premium=V.formInfo.premium||o,{min:o,max:l||1/0}})),q=L((()=>{var e,a,o,l;const t=(null===(e=i.originData)||void 0===e||null===(a=e.riskCalcMethodInfoVO)||void 0===a?void 0:a.minCopy)||1,r=null===(o=i.originData)||void 0===o||null===(l=o.riskCalcMethodInfoVO)||void 0===l?void 0:l.maxCopy;return V.formInfo.copy=`${V.formInfo.copy||t||1}`,{min:t,max:r}})),N=(e,a,o)=>{var l,t;const r=(null===(l=i.originData)||void 0===l||null===(t=l.riskCalcMethodInfoVO)||void 0===t?void 0:t.increaseDecreaseNum)||1;if("sumInsured"===o){if(P.value.max&&+e>P.value.max)return`金额最大${P.value.max}元`;if(+e<P.value.min)return`金额最小${P.value.min}元`}else{if(w.value.max&&+e>w.value.max)return`金额最大${w.value.max}元`;if(+e<w.value.min)return`金额最小${w.value.min}元`}return+e%r==0?"":`金额必须是${r}的倍数`},E=e=>{var i;const a=((null===(i=V.formInfo)||void 0===i?void 0:i.liabilityVOList)||[]).find((i=>i.liabilityCode===e.liabilityCode));return a?a.liabilityAttributeValue?a.liabilityAttributeValue:1!==e.optionalFlag?"0":"":""};return R((()=>{var e,a;const o={riskType:i.originData.riskType,riskId:i.originData.id,riskName:i.originData.riskName,riskCode:i.originData.riskCode,mainRiskCode:1!==i.originData.riskType?null===(e=i.mainRiskData)||void 0===e?void 0:e.riskCode:void 0,mainRiskId:1!==i.originData.riskType?null===(a=i.mainRiskData)||void 0===a?void 0:a.id:void 0,riskCategory:i.originData.riskCategory,liabilityVOList:(i.originData.riskLiabilityInfoVOList||[]).map((e=>({...e,liabilityAttributeCode:e.liabilityAttributeType,liabilityCode:e.liabilityCode,liabilityRateType:e.liabilityRateType,liabilityAttributeValue:E(e)})))};Object.assign(null==V?void 0:V.formInfo,o)})),t((()=>{var e;return null===(e=V.formInfo)||void 0===e?void 0:e.paymentFrequency}),((e=0)=>{var a,o,l;[3].includes((null===(a=i.originData.riskCalcMethodInfoVO)||void 0===a?void 0:a.saleMethod)||0)&&((null===(o=i.originData)||void 0===o||null===(l=o.riskCalcMethodInfoVO)||void 0===l?void 0:l.paymentMethodLimitList)||[]).forEach((i=>{+i.paymentFrequency==+e&&Object.assign(V.formInfo,{amount:i.perCopyAmount,premium:i.perCopyPremium})}));1==+e&&"single"!==V.formInfo.chargePeriod&&(V.formInfo.chargePeriod="single")})),t((()=>{var e;return null===(e=V.formInfo)||void 0===e?void 0:e.copy}),(e=>{var a,o;4===(null===(a=i.originData.riskCalcMethodInfoVO)||void 0===a?void 0:a.saleMethod)&&(V.formInfo.amount=null===(o=i.originData.riskCalcMethodInfoVO)||void 0===o?void 0:o.fixedAmount)})),t((()=>{var e;return null===(e=V.formInfo)||void 0===e?void 0:e.chargePeriod}),(e=>{"single"===e&&1!=+(V.formInfo.paymentFrequency||0)&&(V.formInfo.paymentFrequency=1)})),t((()=>null==i?void 0:i.mainRiskInfo),(e=>{var a,o,l,t,r,n;e&&2===i.originData.riskType&&(1===(null===(a=i.originData)||void 0===a||null===(o=a.riskInsureLimitVO)||void 0===o?void 0:o.insurancePeriodRule)&&(e.coveragePeriod?g.value.coveragePeriod.disabled=!0:g.value.coveragePeriod.prevent=!0,V.formInfo.coveragePeriod=e.coveragePeriod||""),1===(null===(l=i.originData)||void 0===l||null===(t=l.riskInsureLimitVO)||void 0===t?void 0:t.paymentPeriodRule)&&(e.chargePeriod?g.value.chargePeriod.disabled=!0:g.value.chargePeriod.prevent=!0,V.formInfo.chargePeriod=e.chargePeriod||""),1===(null===(r=i.originData)||void 0===r||null===(n=r.riskInsureLimitVO)||void 0===n?void 0:n.paymentTypeRule)&&(e.paymentFrequency?g.value.paymentFrequency.disabled=!0:g.value.paymentFrequency.prevent=!0,V.formInfo.paymentFrequency=e.paymentFrequency||0))}),{immediate:!0,deep:!0}),(i,a)=>{var o,l,t,h,L,R,x,_,E,Y,j,S,$,z,B,G,K,H,Q,J,W,pe,ve,fe,ye,ke,ge,Ve,be,Ie;const he=r("ProSvg"),Le=r("ProTitle"),De=r("VanStepper"),Ce=r("VanField"),Oe=r("ProRadioButton"),Re=r("ProField"),Ae=r("ProExpand");return n(),d("div",X,[s(Le,{"risk-type":e.originData.riskType,title:e.originData.riskName},{default:u((()=>[e.removeRiskList.includes(e.originData.id)?(n(),d("div",{key:0,class:"delete-risk",onClick:a[0]||(a[0]=i=>e.removeRisk(e.originData.id))},[s(he,{name:"img-lajitong",color:"#0d6efe"})])):C("",!0)])),_:1},8,["risk-type","title"]),1===(null===(o=e.originData.riskCalcMethodInfoVO)||void 0===o?void 0:o.saleMethod)&&2===e.originData.exemptFlag?(n(),v(Ce,{key:0,modelValue:k(V).formInfo.amount,"onUpdate:modelValue":a[2]||(a[2]=e=>k(V).formInfo.amount=e),label:"保额",name:"amount",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...e)=>N(...e,"sumInsured")}]},{input:u((()=>{var i,o;return[m("div",Z,[s(De,{modelValue:k(V).formInfo.amount,"onUpdate:modelValue":a[1]||(a[1]=e=>k(V).formInfo.amount=e),"input-width":"64px",min:k(P).min,step:(null===(i=e.originData.riskCalcMethodInfoVO)||void 0===i?void 0:i.increaseDecreaseNum)||1,max:k(P).max},null,8,["modelValue","min","step","max"]),m("span",ee,y(`金额最低${k(P).min}元，为${(null===(o=e.originData.riskCalcMethodInfoVO)||void 0===o?void 0:o.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):C("",!0),2===(null===(l=e.originData)||void 0===l||null===(t=l.riskCalcMethodInfoVO)||void 0===t?void 0:t.saleMethod)?(n(),v(Ce,{key:1,modelValue:k(V).formInfo.premium,"onUpdate:modelValue":a[4]||(a[4]=e=>k(V).formInfo.premium=e),label:"保费",name:"premium",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...e)=>N(...e,"premium")}]},{input:u((()=>{var i,o,l,t;return[m("div",ie,[s(De,{modelValue:k(V).formInfo.premium,"onUpdate:modelValue":a[3]||(a[3]=e=>k(V).formInfo.premium=e),step:(null===(i=e.originData)||void 0===i||null===(o=i.riskCalcMethodInfoVO)||void 0===o?void 0:o.increaseDecreaseNum)||1,min:k(w).min,"input-width":"64px",max:k(w).max},null,8,["modelValue","step","min","max"]),m("span",ae,y(`金额最低${k(w).min}元，为${(null===(l=e.originData)||void 0===l||null===(t=l.riskCalcMethodInfoVO)||void 0===t?void 0:t.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):C("",!0),3===(null===(h=e.originData)||void 0===h||null===(L=h.riskCalcMethodInfoVO)||void 0===L?void 0:L.saleMethod)||4===(null===(R=e.originData)||void 0===R||null===(x=R.riskCalcMethodInfoVO)||void 0===x?void 0:x.saleMethod)&&(null!==(_=e.originData)&&void 0!==_&&null!==(E=_.riskCalcMethodInfoVO)&&void 0!==E&&E.minCopy||null!==(Y=e.originData)&&void 0!==Y&&null!==(j=Y.riskCalcMethodInfoVO)&&void 0!==j&&j.maxCopy)?(n(),v(Ce,{key:2,modelValue:k(V).formInfo.copy,"onUpdate:modelValue":a[6]||(a[6]=e=>k(V).formInfo.copy=e),label:"投保份数",name:"copy",rules:[{required:!0,message:"请填写"}]},{input:u((()=>[m("div",oe,[s(De,{modelValue:k(V).formInfo.copy,"onUpdate:modelValue":a[5]||(a[5]=e=>k(V).formInfo.copy=e),step:1,min:k(q).min,max:k(q).max},null,8,["modelValue","min","max"]),m("span",le,y(`${k(q).min}份起购，最多购买${k(q).max}份`),1)])])),_:1},8,["modelValue"])):C("",!0),[1].includes((null===(S=e.originData.riskCalcMethodInfoVO)||void 0===S?void 0:S.saleMethod)||0)&&1!==(null===($=e.originData)||void 0===$?void 0:$.exemptFlag)||!(e.originData.riskCalcMethodInfoVO.fixedAmount||null!==(z=k(f))&&void 0!==z&&z[null===(B=e.originData)||void 0===B?void 0:B.riskCode])?C("",!0):(n(),v(Ce,{key:3,label:"保额"},{input:u((()=>{var i,a,o,l;return[m("div",null,y((null===(i=e.originData.riskCalcMethodInfoVO)||void 0===i?void 0:i.fixedAmount)||(null===(a=k(f))||void 0===a||null===(o=a[null===(l=e.originData)||void 0===l?void 0:l.riskCode])||void 0===o?void 0:o.amount)),1)]})),_:1})),b(null===(G=e.originData)||void 0===G||null===(K=G.riskInsureLimitVO)||void 0===K?void 0:K.insurancePeriodValueList)&&b(null===(H=e.originData)||void 0===H||null===(Q=H.riskInsureLimitVO)||void 0===Q?void 0:Q.insurancePeriodRule)?C("",!0):(n(),v(Re,{key:4,modelValue:k(V).formInfo.coveragePeriod,"onUpdate:modelValue":a[8]||(a[8]=e=>k(V).formInfo.coveragePeriod=e),label:"保障期间",name:"coveragePeriod",rules:[{required:!0,message:"请选择保障期间"}]},{input:u((()=>[m("div",te,[s(Oe,{modelValue:k(V).formInfo.coveragePeriod,"onUpdate:modelValue":a[7]||(a[7]=e=>k(V).formInfo.coveragePeriod=e),disabled:g.value.coveragePeriod.disabled,prevent:g.value.coveragePeriod.prevent?"请先选择主险保障期间":"",options:k(D),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),b(null===(J=e.originData)||void 0===J||null===(W=J.riskInsureLimitVO)||void 0===W?void 0:W.paymentPeriodValueList)&&b(null===(pe=e.originData)||void 0===pe||null===(ve=pe.riskInsureLimitVO)||void 0===ve?void 0:ve.paymentPeriodRule)?C("",!0):(n(),v(Re,{key:5,modelValue:k(V).formInfo.chargePeriod,"onUpdate:modelValue":a[10]||(a[10]=e=>k(V).formInfo.chargePeriod=e),label:"交费期间",name:"chargePeriod",rules:[{required:!0,message:"请选择交费期间"}]},{input:u((()=>[m("div",re,[s(Oe,{modelValue:k(V).formInfo.chargePeriod,"onUpdate:modelValue":a[9]||(a[9]=e=>k(V).formInfo.chargePeriod=e),disabled:g.value.chargePeriod.disabled,prevent:g.value.chargePeriod.prevent?"请先选择主险交费期间":"",options:k(O),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),b(null===(fe=e.originData.riskInsureLimitVO)||void 0===fe?void 0:fe.paymentFrequencyList)&&b(null===(ye=e.originData.riskInsureLimitVO)||void 0===ye?void 0:ye.paymentPeriodRule)?C("",!0):(n(),v(Re,{key:6,modelValue:k(V).formInfo.paymentFrequency,"onUpdate:modelValue":a[12]||(a[12]=e=>k(V).formInfo.paymentFrequency=e),label:"交费方式",name:"paymentFrequency",rules:[{required:!0,message:"请选择交费方式"}]},{input:u((()=>[m("div",ne,[s(Oe,{modelValue:k(V).formInfo.paymentFrequency,"onUpdate:modelValue":a[11]||(a[11]=e=>k(V).formInfo.paymentFrequency=e),disabled:g.value.paymentFrequency.disabled,prevent:g.value.paymentFrequency.prevent?"请先选择主险交费方式":"",options:k(A)},null,8,["modelValue","disabled","prevent","options"])])])),_:1},8,["modelValue"])),b(null===(ke=e.originData)||void 0===ke||null===(ge=ke.riskInsureLimitVO)||void 0===ge?void 0:ge.annuityDrawValueList)?C("",!0):(n(),v(Re,{key:7,modelValue:k(V).formInfo.annuityDrawDate,"onUpdate:modelValue":a[14]||(a[14]=e=>k(V).formInfo.annuityDrawDate=e),label:"领取时间",name:"annuityDrawDate"},{input:u((()=>{var i;return[m("div",de,[s(Oe,{modelValue:k(V).formInfo.annuityDrawDate,"onUpdate:modelValue":a[13]||(a[13]=e=>k(V).formInfo.annuityDrawDate=e),options:I(k(T),(null===(i=e.originData.riskInsureLimitVO)||void 0===i?void 0:i.annuityDrawValueList)||[])},null,8,["modelValue","options"])])]})),_:1},8,["modelValue"])),b(null===(Ve=e.originData)||void 0===Ve||null===(be=Ve.riskInsureLimitVO)||void 0===be?void 0:be.annuityDrawFrequencyList)?C("",!0):(n(),v(Re,{key:8,modelValue:k(V).formInfo.annuityDrawType,"onUpdate:modelValue":a[16]||(a[16]=e=>k(V).formInfo.annuityDrawType=e),label:"领取方式",name:"annuityDrawType"},{input:u((()=>{var i;return[m("div",se,[s(Oe,{modelValue:k(V).formInfo.annuityDrawType,"onUpdate:modelValue":a[15]||(a[15]=e=>k(V).formInfo.annuityDrawType=e),options:I(k(F),(null===(i=e.originData.riskInsureLimitVO)||void 0===i?void 0:i.annuityDrawFrequencyList)||[])},null,8,["modelValue","options"])])]})),_:1},8,["modelValue"])),(n(!0),d(c,null,p(e.originData.riskLiabilityInfoVOList||[],((i,a)=>(n(),d(c,{key:a},[1!==i.optionalFlag||b(i.liabilityAttributeValueList)?C("",!0):(n(),v(Ce,{key:0,modelValue:k(V).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>k(V).formInfo.liabilityVOList[a].liabilityAttributeValue=e,label:i.liabilityName,name:"liabilityAttributeValue",rules:[{required:i.liabilityAttributeValue,message:`请选择${i.liabilityName}`}]},{input:u((()=>{var o,l;return[m("div",null,[b(i.liabilityAttributeValueList)?(n(),d("span",ue,"50万")):(n(),d("div",me,[s(Oe,{modelValue:k(V).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>k(V).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:I(k(M),null===(o=e.originData.riskLiabilityInfoVOList)||void 0===o||null===(l=o[a])||void 0===l?void 0:l.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"])]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])),1!==i.optionalFlag?(n(),v(Ce,{key:1,modelValue:k(V).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>k(V).formInfo.liabilityVOList[a].liabilityAttributeValue=e,label:i.liabilityName,name:"liabilityAttributeValue"},{input:u((()=>{var o,l;return[m("div",null,[b(i.liabilityAttributeValueList)?(n(),v(Oe,{key:0,modelValue:k(V).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>k(V).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:k(U)},null,8,["modelValue","onUpdate:modelValue","options"])):(n(),v(Oe,{key:1,modelValue:k(V).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>k(V).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:I(k(M),null===(o=e.originData.riskLiabilityInfoVOList)||void 0===o||null===(l=o[a])||void 0===l?void 0:l.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label"])):C("",!0)],64)))),128)),null!==(Ie=e.originData)&&void 0!==Ie&&Ie.relationDesc?(n(),d("div",ce,[s(Ae,{title:"责任投保说明"},{default:u((()=>[m("div",null,y(e.originData.relationDesc),1)])),_:1})])):C("",!0)])}}}),[["__scopeId","data-v-a5708be0"]]);const ve={class:"risk-list-wrapper"},fe={key:0,class:"add-rider-risk"},ye={class:"left-part"},ke=(e=>(g("data-v-45a0160e"),e=e(),V(),e))((()=>m("span",{class:"btn-plus"},"+",-1))),ge=b(" 附加险");e("a",q(i({props:{riskInfo:{default:()=>({})},originData:{default:()=>[]},pickFactor:{type:Function,default:()=>{}},enums:{default:()=>{}}},setup(e){const i=e,l=h("source")||{},[f,g]=I(!1);a(null),a(null);const V=o({mainRiskInfo:i.riskInfo,riskInfo:i.riskInfo,requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[],currentRiskList:[]}),b=(e,i)=>{V.currentRiskList=V.currentRiskList.concat(e),V.disabledList=i},L=e=>{A.confirm({message:"确定要删除附加险么？",confirmButtonText:"删除"}).then((()=>{var i;const a=[e];((null===(i=V.mainRiskData)||void 0===i?void 0:i.collocationVOList)||[]).forEach((i=>{e!==i.riskId||2!==i.collocationType&&3!==i.collocationType||a.push(i.collocationRiskId)})),V.checkedList=V.checkedList.filter((e=>!a.includes(e))),V.currentRiskList=V.currentRiskList.filter((e=>!a.includes(e.id)||(Object.assign(V.riskInfo,{[e.id]:void 0}),!1))),V.disabledList=V.disabledList.filter((e=>!a.includes(e)))})).catch((()=>{}))},D=(e,i)=>{var a,o;const l=((null===(a=V.riskInfo)||void 0===a||null===(o=a[i])||void 0===o?void 0:o.liabilityVOList)||[]).find((i=>i.liabilityCode===e.liabilityCode));return l?l.liabilityAttributeValue?l.liabilityAttributeValue:1!==e.optionalFlag?"0":"-1":""};return t((()=>V.currentRiskList),(e=>{const a=[V.mainRiskData,...e];let o=[],l=[];const t=[];a.forEach(((e,i)=>{var a,r,n;const d=(null==e||null===(a=e.riskCalcMethodInfoVO)||void 0===a?void 0:a.riskFactorRelationList)||[];o=o.concat(d.filter((e=>"insured"===e.factorObject)).map((e=>e.factorCode))),l=l.concat(d.filter((e=>"holder"===e.factorObject)).map((e=>e.factorCode))),t.push(null==e||null===(r=e.riskInsureLimitVO)||void 0===r?void 0:r.minHolderAge,null==e||null===(n=e.riskInsureLimitVO)||void 0===n?void 0:n.maxHolderAge)})),(e||[]).forEach((e=>{var i,a;const o={riskType:e.riskType,riskId:e.id,riskCode:e.riskCode,riskName:e.riskName,mainRiskCode:1!==e.riskType?null===(i=V.mainRiskData)||void 0===i?void 0:i.riskCode:void 0,mainRiskId:1!==e.riskType?null===(a=V.mainRiskData)||void 0===a?void 0:a.id:void 0,riskCategory:e.riskCategory,liabilityVOList:(e.riskLiabilityInfoVOList||[]).map((i=>({...i,liabilityAttributeCode:i.liabilityAttributeType,liabilityCode:i.liabilityCode,liabilityRateType:i.liabilityRateType,liabilityAttributeValue:D(i,e.id)})))};V.riskInfo[e.id]||Object.assign(V.riskInfo,{[e.id]:o})})),i.pickFactor({insuredFactorList:[...new Set(o)],holderFactorList:[...new Set(l)],ageRange:t})}),{deep:!0,immediate:!0}),t((()=>i.riskInfo),(e=>{V.mainRiskInfo=Object.values(e||{}).find((e=>1===(null==e?void 0:e.riskType)))||{}}),{deep:!0,immediate:!0}),t((()=>i.originData),(e=>{let i=[];const a=[];"proposal"===l.origin&&"add"!==l.type&&"repeatAdd"!==l.type?((e||[]).forEach((e=>{1===e.riskType&&(V.mainRiskData=e),i.push(e)})),i=i.filter((e=>l.showRiskList.includes(e.id)))):(e||[]).forEach((e=>{1===e.riskType?(V.mainRiskData=e,i.push(e)):2===e.collocationType?i.push(e):a.push(e)})),V.riderRiskList=a,V.currentRiskList=i}),{deep:!0,immediate:!0}),(i,a)=>{var o,t,I;const h=r("ProCheckButton");return n(),d("div",ve,[(n(!0),d(c,null,p(k(V).currentRiskList,((i,a)=>(n(),v(pe,{key:i.id,"form-info":k(V).riskInfo[i.id],index:a,enums:e.enums,"main-risk-data":k(V).mainRiskData,"main-risk-info":k(V).mainRiskInfo,"origin-data":i,"remove-risk":L,"remove-risk-list":k(V).checkedList},null,8,["form-info","index","enums","main-risk-data","main-risk-info","origin-data","remove-risk-list"])))),128)),(null===(o=k(V).riderRiskList)||void 0===o?void 0:o.length)-(null===(t=k(V).checkedList)||void 0===t?void 0:t.length)&&"proposal"!==k(l).origin?(n(),d("div",fe,[m("span",ye,y(`共有${k(V).riderRiskList.length-k(V).checkedList.length}款附加险可以添加`),1),s(h,{activated:"",class:"btn-rider-risk",onClick:a[0]||(a[0]=e=>k(g)(!0))},{default:u((()=>[ke,ge])),_:1})])):C("",!0),k(f)?(n(),v(H,{key:1,modelValue:k(V).checkedList,"onUpdate:modelValue":a[1]||(a[1]=e=>k(V).checkedList=e),show:k(f),disabled:k(V).disabledList,"risk-list":k(V).riderRiskList,"collocation-list":(null===(I=k(V).mainRiskData)||void 0===I?void 0:I.collocationVOList)||[],onFinished:b,onClose:a[2]||(a[2]=e=>k(g)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):C("",!0)])}}}),[["__scopeId","data-v-45a0160e"]]))}}}))}();
