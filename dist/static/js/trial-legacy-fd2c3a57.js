!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.com-occupational-wrapper .popup-title[data-v-4b261f8d]{height:1.38667rem;display:flex;align-items:center;justify-content:center;padding:0 .85333rem}.com-occupational-wrapper .popup-content[data-v-4b261f8d]{height:13.84rem}.com-occupational-wrapper .footer-bar[data-v-4b261f8d]{padding:0 .53333rem;position:absolute;width:100%;height:2rem;bottom:0;display:flex;align-items:center;justify-content:center}.com-personal-info-wrapper .placeholder[data-v-14e8e8a8]{color:#99a9c0}.com-risk-card-wrapper.part-card[data-v-29adc12a]{background-color:#fff;margin-bottom:.26667rem}.com-risk-card-wrapper .delete-risk[data-v-29adc12a]{display:flex;align-items:center;justify-content:center;margin-top:.06667rem}.com-risk-card-wrapper .delete-risk .svg-icon[data-v-29adc12a]{font-size:.42667rem}.com-risk-card-wrapper .custom-field[data-v-29adc12a]{display:flex;flex-direction:column}.com-risk-card-wrapper .custom-field .field-tip[data-v-29adc12a]{font-size:.32rem;font-weight:400;color:#99a9c0}.com-risk-list-wrapper .popup-title[data-v-1f13cbe8]{height:1.38667rem;display:flex;align-items:center;justify-content:center;padding:0 .85333rem;font-size:.45333rem;font-weight:600;color:#393d46}.com-risk-list-wrapper .risk-list[data-v-1f13cbe8]{height:13.84rem;padding-bottom:2rem}.com-risk-list-wrapper[data-v-1f13cbe8] .van-cell-group--inset{border-bottom:1px solid #eeeff4}.com-risk-list-wrapper[data-v-1f13cbe8] .van-cell-group--inset .van-cell{padding:.30667rem 0}.com-risk-list-wrapper .cell-title[data-v-1f13cbe8]{display:flex;flex-direction:column}.com-risk-list-wrapper .cell-title .title-desc[data-v-1f13cbe8]{font-size:.32rem;font-weight:400;color:#99a9c0}.com-risk-list-wrapper .footer-bar[data-v-1f13cbe8]{padding:0 .53333rem;position:absolute;width:100%;height:2rem;bottom:0;display:flex;align-items:center;justify-content:center}@charset "UTF-8";.risk-list-wrapper[data-v-11798776]{margin-bottom:3.13333rem}.risk-list-wrapper .add-rider-risk[data-v-11798776]{background-color:#fff;margin-top:-.26667rem;height:1.41333rem;display:flex;align-items:center;justify-content:space-between;padding:var(--van-cell-vertical-padding) var(--van-cell-horizontal-padding)}.risk-list-wrapper .add-rider-risk .left-part[data-v-11798776]{font-weight:400;color:#99a9c0;font-size:.4rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-c0d7778e.js","./index-legacy-e9fcc05e.js","./index-legacy-deb8466a.js"],(function(e){"use strict";var i,a,o,l,t,n,r,d,s,u,m,c,p,v,f,y,k,g,V,b,h,I,D,L,C,R,O,w,P,x,_,A;return{setters:[function(e){i=e.g,a=e.L,o=e.X,l=e.r,t=e.h,n=e.m,r=e.n,d=e.k,s=e.y,u=e.z,m=e.a1,c=e.a2,p=e.a5,v=e.C,f=e.x,y=e.d,k=e.j,g=e.s,V=e.I,b=e.a6,h=e.a4,I=e.o,D=e.F,L=e.E,C=e.ae,R=e.af,O=e.B,w=e.D},function(e){P=e.g},function(e){x=e.S,_=e._,A=e.b}],execute:function(){const q=[{label:"男",value:"1"},{label:"女",value:"2"}],T=[{label:"有",value:"1"},{label:"无",value:"2"}],U=[{value:1,label:"第5个保单周年日"},{value:2,label:"起始领取年龄55周岁"},{value:3,label:"起始领取年龄60周岁"},{value:4,label:"起始领取年龄65周岁"},{value:5,label:"起始领取年龄70周岁"},{value:6,label:"起始领取年龄75周岁"}],F=[{value:1,label:"年领"},{value:2,label:"月领"}],M=[{label:"趸交",value:"1"},{label:"年交",value:"2"},{label:"半年交",value:"3"},{label:"季交",value:"4"},{label:"月交",value:"5"}],N=[{name:"同主险期间减1",value:"3"},{name:"无限制",value:"2"}],E=[{label:"返保额",value:"1"},{label:"返保费",value:"2"}],S=[{label:"投保",value:"0"},{label:"不投保",value:"-1"}];e("I",{1:"天",2:"月",3:"年",4:"至$岁",5:"至终身",day:1,month:2,year:3,to:4,to_life:5}),e("a",{1:"趸交",2:"$年交",3:"至$岁",single:1,year:2,to:3});new x({source:"sessionStorage"});const j=new x({source:"localStorage"}),Y=new x({source:"cookie"});e("u",(()=>Y||new x({source:"cookie"})));const $={class:"com-occupational-wrapper"},z=(e=>(m("data-v-4b261f8d"),e=e(),c(),e))((()=>s("div",{class:"popup-title"},"选择职业",-1))),B={class:"popup-content"},G=i({props:{modelValue:{type:Array,required:!0,default:()=>[]},insuredCode:{type:String,required:!0,default:""},show:{type:Boolean,required:!0,default:!1}},emits:["finish","close","update:modelValue"],setup(e,{emit:i}){const m=e,c=a({show:m.show,options:[],currentValue:""}),p=()=>{i("close")},v=({value:e,selectedOptions:a})=>{const o=(a||[]).map((e=>e.value)).join("/"),l=+a[a.length-1].name;i("update:modelValue",l),i("finish",o),p()};return o((()=>m),(()=>{((e="")=>{var i;const a=`${null==e||null===(i=e.toLocaleUpperCase)||void 0===i?void 0:i.call(e)}_OCCUPATION`,o=j.get("occupational")||{};o[a]?c.options=o[a]:P({dictCodeList:[a]}).then((({code:e,data:i})=>{if("10000"===e){var l;const e=(e=>{const i=e,a=e=>{e.forEach((e=>{const i=e;i.children.length?a(i.children):i.children=null}))};return a(i),i})((null==i||null===(l=i[0])||void 0===l?void 0:l.dictItemList)||[]);c.options=e,o[a]=e,j.set("occupational",o)}}))})(m.insuredCode)}),{deep:!0,immediate:!0}),o((()=>m.modelValue),(e=>{}),{deep:!0,immediate:!0}),(e,i)=>{const a=l("van-cascader"),o=l("VanPopup");return t(),n("div",$,[r(o,{show:u(c).show,"onUpdate:show":i[1]||(i[1]=e=>u(c).show=e),"show-footer":"",position:"bottom",closeable:"",onClose:p},{default:d((()=>[z,s("div",B,[r(a,{modelValue:u(c).currentValue,"onUpdate:modelValue":i[0]||(i[0]=e=>u(c).currentValue=e),title:"请选择职业","show-header":!1,placeholder:"请选择",options:u(c).options,"active-color":"#0d6efe","field-names":{text:"value",value:"code",children:"children"},onFinish:v},null,8,["modelValue","options"])])])),_:1},8,["show"])])}}});var K=_(G,[["__scopeId","data-v-4b261f8d"]]);const H={class:"com-personal-info-wrapper"},X={key:0,class:"placeholder"},J={key:1};e("P",_(i({props:{formInfo:{default:()=>({})},insuredCode:{default:""},factorList:{default:()=>[]},ageRange:{default:()=>[]}},setup(e,{expose:i}){const o=e,[s,m]=p(),[c,h]=p(),I=v(),D=a({formInfo:o.formInfo,occupationalText:""}),L=e=>{D.occupationalText=e},C=()=>{h(!1)},R=f((()=>{const e=(e=>{const i=e||[];for(let a=0;a<i.length;a++)for(let e=a+1;e<i.length;e++){const o=i[a].split("_"),l=i[e].split("_"),t=i[a];o[0]===l[0]?o>l&&(i[a]=i[e],i[e]=t):"age"===o[0]&&(i[a]=i[e],i[e]=t)}return i})(null==o?void 0:o.ageRange),i=(e="")=>[+e.split("_")[1],e.split("_")[0]],a=i(e[0]),l=i(e[e.length-1]),t=y().subtract(a[0],"age"===a[1]?"year":"day").format("YYYY-MM-DD"),n=y().subtract(l[0],"age"===l[1]?"year":"day").format("YYYY-MM-DD");return{minAge:new Date(n),maxAge:new Date(t)}}));return i({validateForm:()=>new Promise(((e,i)=>{null==I||I.value.validate().then((()=>{e("")}),(()=>{i()}))}))}),(i,a)=>{const o=l("VanField"),p=l("ProRadioButton"),v=l("VanForm"),f=l("van-datetime-picker"),O=l("van-popup");return t(),n("div",H,[r(v,{ref_key:"formRef",ref:I,"input-align":"right","error-message-align":"right"},{default:d((()=>[e.factorList.includes("APPLICANT.AGE")||e.factorList.includes("AGE")||e.factorList.includes("DAY")||e.factorList.includes("APPLICANT.DAY")?(t(),k(o,{key:0,modelValue:u(D).formInfo.birthday,"onUpdate:modelValue":a[0]||(a[0]=e=>u(D).formInfo.birthday=e),rules:[{required:!0,message:"请选择出生日期"}],name:"birth",label:"出生日期",class:"isLink",readonly:"","is-link":"",placeholder:"请选择",onClick:a[1]||(a[1]=e=>u(m)(!0))},null,8,["modelValue"])):g("",!0),e.factorList.includes("APPLICANT.GENDER")||e.factorList.includes("GENDER")?(t(),k(o,{key:1,modelValue:u(D).formInfo.gender,"onUpdate:modelValue":a[3]||(a[3]=e=>u(D).formInfo.gender=e),name:"gender",label:"性别",rules:[{required:!0,message:"请选择性别"}]},{input:d((()=>[r(p,{modelValue:u(D).formInfo.gender,"onUpdate:modelValue":a[2]||(a[2]=e=>u(D).formInfo.gender=e),options:u(q)},null,8,["modelValue","options"])])),_:1},8,["modelValue"])):g("",!0),e.factorList.includes("SOCIAL_INS")?(t(),k(o,{key:2,modelValue:u(D).formInfo.socialSecurity,"onUpdate:modelValue":a[5]||(a[5]=e=>u(D).formInfo.socialSecurity=e),name:"socialSecurity",label:"社保",rules:[{required:!0,message:"请选择社保"}]},{input:d((()=>[r(p,{modelValue:u(D).formInfo.socialSecurity,"onUpdate:modelValue":a[4]||(a[4]=e=>u(D).formInfo.socialSecurity=e),options:u(T)},null,8,["modelValue","options"])])),_:1},8,["modelValue"])):g("",!0),e.factorList.includes("OCCUPATION_CATEGORY")?(t(),k(o,{key:3,modelValue:u(D).formInfo.occupationalClass,"onUpdate:modelValue":a[6]||(a[6]=e=>u(D).formInfo.occupationalClass=e),rules:[{required:!0,message:"请选择职业类型"}],name:"occupationalClass",label:"职业类型","is-link":"",readonly:"",placeholder:"请选择",onClick:a[7]||(a[7]=e=>u(h)(!0))},{input:d((()=>[u(D).occupationalText?(t(),n("div",J,V(u(D).occupationalText),1)):(t(),n("span",X,"请选择"))])),_:1},8,["modelValue"])):g("",!0)])),_:1},512),r(O,{show:u(s),"onUpdate:show":a[10]||(a[10]=e=>b(s)?s.value=e:null),position:"bottom"},{default:d((()=>[r(f,{type:"date","min-date":u(R).minAge,"max-date":u(R).maxAge,onConfirm:a[8]||(a[8]=e=>{u(D).formInfo.birthday=u(y)(e).format("YYYY-MM-DD"),u(m)(!1)}),onCancel:a[9]||(a[9]=e=>u(m)(!1))},null,8,["min-date","max-date"])])),_:1},8,["show"]),u(c)?(t(),k(K,{key:0,modelValue:u(D).formInfo.occupationalClass,"onUpdate:modelValue":a[11]||(a[11]=e=>u(D).formInfo.occupationalClass=e),show:u(c),"insured-code":e.insuredCode,onFinish:L,onClose:C},null,8,["modelValue","show","insured-code"])):g("",!0)])}}}),[["__scopeId","data-v-14e8e8a8"]]));const Q={class:"com-risk-card-wrapper part-card"},W={class:"custom-field"},Z={class:"field-tip"},ee={class:"custom-field"},ie={class:"field-tip"},ae={class:"custom-field"},oe={class:"field-tip"},le={key:0},te={key:9,class:"liab-desc"};var ne=_(i({props:{originData:{default:()=>({})},formInfo:{default:()=>({})},mainRiskData:{default:()=>({})},mainRiskInfo:{default:()=>({})},index:{default:0},removeRisk:{type:Function,default:()=>{}},removeRiskList:{default:()=>[]},enums:{default:()=>({})}},setup(e){const i=e,m=v({}),c=h("premium")||{};m.value=h("enumList")||{};const p=v({chargePeriod:{disabled:!1,prevent:!1},coveragePeriod:{disabled:!1,prevent:!1},paymentFrequency:{disabled:!1,prevent:!1}}),y=a({formInfo:i.formInfo}),b=e=>"boolean"!=typeof e&&!e||(!(!Array.isArray(e)||e.length)||"object Object"==={}.toString.call(e)&&Object.keys(e).length),C=(e,i,a={})=>{let o=i;return Array.isArray(i)||(o=[`${o}`]),(e||[]).filter((e=>o.includes(`${e.value}`)||o.includes(e.value)))},R=f((()=>{var e,a,o,l,t;return 1===(null===(e=i.originData)||void 0===e?void 0:e.riskType)?C(i.enums.RISK_INSURANCE_PERIOD,(null===(t=i.originData.riskInsureLimitVO)||void 0===t?void 0:t.insurancePeriodValueList)||[]):2===(null===(a=i.originData)||void 0===a?void 0:a.periodType)?C([{value:"year_1",label:"1年"}],["year_1"]):C(null===(o=i.enums)||void 0===o?void 0:o.RISK_INSURANCE_PERIOD,(null===(l=i.mainRiskData.riskInsureLimitVO)||void 0===l?void 0:l.insurancePeriodValueList)||[])})),O=f((()=>{var e,a,o,l,t,n,r,d;return 1===(null===(e=i.originData)||void 0===e?void 0:e.riskType)?C(null==i||null===(t=i.enums)||void 0===t?void 0:t.RISK_PAYMENT_PERIOD,(null===(n=i.originData.riskInsureLimitVO)||void 0===n?void 0:n.paymentPeriodValueList)||[]):1===(null===(a=i.originData)||void 0===a?void 0:a.exemptFlag)?C(N,[`${null==i||null===(r=i.originData)||void 0===r||null===(d=r.riskInsureLimitVO)||void 0===d?void 0:d.paymentPeriodRule}`]):2===(null===(o=i.originData)||void 0===o?void 0:o.periodType)?C([{value:"year_1",name:"1年交"}],["year_1"]):C(i.enums.RISK_PAYMENT_PERIOD,(null===(l=i.mainRiskData.riskInsureLimitVO)||void 0===l?void 0:l.paymentPeriodValueList)||[])})),w=f((()=>{var e,a,o,l,t;return 1===(null===(e=i.originData)||void 0===e?void 0:e.riskType)?C(M,(null===(l=i.originData.riskInsureLimitVO)||void 0===l?void 0:l.paymentFrequencyList)||[]):1===(null===(a=i.originData.riskInsureLimitVO)||void 0===a?void 0:a.paymentTypeRule)?C(M,(null===(t=i.mainRiskData.riskInsureLimitVO)||void 0===t?void 0:t.paymentFrequencyList)||[]):C(M,(null===(o=i.mainRiskData.riskInsureLimitVO)||void 0===o?void 0:o.paymentFrequencyList)||[])})),P=f((()=>{var e,a;let o=0,l=0;return((null===(e=i.originData)||void 0===e||null===(a=e.riskCalcMethodInfoVO)||void 0===a?void 0:a.paymentMethodLimitList)||[]).forEach(((e,i)=>{0===i&&(o=e.minAmount,l=e.maxAmount),o>e.minAmount&&(o=e.minAmount),l<e.maxAmount&&(l=e.maxAmount)})),y.formInfo.amount=o,{min:o,max:l}})),x=f((()=>{var e,a;let o=0,l=0;return((null===(e=i.originData)||void 0===e||null===(a=e.riskCalcMethodInfoVO)||void 0===a?void 0:a.paymentMethodLimitList)||[]).forEach(((e,i)=>{0===i&&(o=e.minPremium,l=e.maxPremium),o>e.minPremium&&(o=e.minPremium),l<e.maxPremium&&(l=e.maxPremium)})),y.formInfo.premium=o,{min:o,max:l}})),_=f((()=>{var e,a,o,l;const t=(null===(e=i.originData)||void 0===e||null===(a=e.riskCalcMethodInfoVO)||void 0===a?void 0:a.minCopy)||1,n=null===(o=i.originData)||void 0===o||null===(l=o.riskCalcMethodInfoVO)||void 0===l?void 0:l.maxCopy;return y.formInfo.copy=`${t||1}`,{min:t,max:n}})),A=(e,a)=>{var o,l;const t=(null===(o=i.originData)||void 0===o||null===(l=o.riskCalcMethodInfoVO)||void 0===l?void 0:l.increaseDecreaseNum)||1;return+e%t==0?"":`金额必须是${t}的倍数`};return I((()=>{var e,a;const o={riskType:i.originData.riskType,riskId:i.originData.id,riskName:i.originData.riskName,riskCode:i.originData.riskCode,mainRiskCode:null==i||null===(e=i.mainRiskData)||void 0===e?void 0:e.riskCode,mainRiskId:null==i||null===(a=i.mainRiskData)||void 0===a?void 0:a.id,riskCategory:i.originData.riskCategory,liabilityVOList:(i.originData.riskLiabilityInfoVOList||[]).map((e=>({liabilityAttributeCode:e.liabilityAttributeType,liabilityCode:e.liabilityCode,liabilityId:e.id,liabilityRateType:e.liabilityRateType})))};Object.assign(null==y?void 0:y.formInfo,o)})),o((()=>{var e;return null===(e=y.formInfo)||void 0===e?void 0:e.paymentFrequency}),((e=0)=>{var a,o,l;[3,4].includes((null===(a=i.originData.riskCalcMethodInfoVO)||void 0===a?void 0:a.saleMethod)||0)&&((null===(o=i.originData)||void 0===o||null===(l=o.riskCalcMethodInfoVO)||void 0===l?void 0:l.paymentMethodLimitList)||[]).forEach((i=>{+i.paymentFrequency==+e&&Object.assign(y.formInfo,{amount:i.perCopyAmount,premium:i.perCopyPremium})}));1==+e&&"single"!==y.formInfo.chargePeriod&&(y.formInfo.chargePeriod="single")})),o((()=>{var e;return null===(e=y.formInfo)||void 0===e?void 0:e.chargePeriod}),(e=>{"single"===e&&1!=+(y.formInfo.paymentFrequency||0)&&(y.formInfo.paymentFrequency=1)})),o((()=>null==i?void 0:i.mainRiskInfo),(e=>{var a,o,l,t,n,r;e&&2===i.originData.riskType&&(1===(null===(a=i.originData)||void 0===a||null===(o=a.riskInsureLimitVO)||void 0===o?void 0:o.insurancePeriodRule)&&(e.coveragePeriod?p.value.coveragePeriod.disabled=!0:p.value.coveragePeriod.prevent=!0,y.formInfo.coveragePeriod=e.coveragePeriod||""),1===(null===(l=i.originData)||void 0===l||null===(t=l.riskInsureLimitVO)||void 0===t?void 0:t.paymentPeriodRule)&&(e.chargePeriod?p.value.chargePeriod.disabled=!0:p.value.chargePeriod.prevent=!0,y.formInfo.chargePeriod=e.chargePeriod||""),1===(null===(n=i.originData)||void 0===n||null===(r=n.riskInsureLimitVO)||void 0===r?void 0:r.paymentTypeRule)&&(e.paymentFrequency?p.value.paymentFrequency.disabled=!0:p.value.paymentFrequency.prevent=!0,y.formInfo.paymentFrequency=e.paymentFrequency||0))}),{immediate:!0,deep:!0}),(i,a)=>{var o,m,v,f,h,I,q,T,M,N,j,Y,$,z,B,G,K,H,X,J,ne,re,de,se,ue,me,ce,pe,ve,fe;const ye=l("ProSvg"),ke=l("ProTitle"),ge=l("VanStepper"),Ve=l("VanField"),be=l("ProRadioButton"),he=l("ProExpand");return t(),n("div",Q,[r(ke,{"risk-type":e.originData.riskType,title:e.originData.riskName},{default:d((()=>[e.removeRiskList.includes(e.originData.id)?(t(),n("div",{key:0,class:"delete-risk",onClick:a[0]||(a[0]=i=>e.removeRisk(e.originData.id))},[r(ye,{name:"delete",color:"#0d6efe"})])):g("",!0)])),_:1},8,["risk-type","title"]),1===(null===(o=e.originData.riskCalcMethodInfoVO)||void 0===o?void 0:o.saleMethod)&&2===e.originData.exemptFlag?(t(),k(Ve,{key:0,modelValue:u(y).formInfo.amount,"onUpdate:modelValue":a[2]||(a[2]=e=>u(y).formInfo.amount=e),label:"保额",name:"amount",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:A}]},{input:d((()=>{var i,o;return[s("div",W,[r(ge,{modelValue:u(y).formInfo.amount,"onUpdate:modelValue":a[1]||(a[1]=e=>u(y).formInfo.amount=e),"input-width":"64px",min:u(P).min,step:(null===(i=e.originData.riskCalcMethodInfoVO)||void 0===i?void 0:i.increaseDecreaseNum)||1,max:u(P).max},null,8,["modelValue","min","step","max"]),s("span",Z,V(`金额最低${u(P).min}元，为${(null===(o=e.originData.riskCalcMethodInfoVO)||void 0===o?void 0:o.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):g("",!0),2===(null===(m=e.originData)||void 0===m||null===(v=m.riskCalcMethodInfoVO)||void 0===v?void 0:v.saleMethod)?(t(),k(Ve,{key:1,modelValue:u(y).formInfo.premium,"onUpdate:modelValue":a[4]||(a[4]=e=>u(y).formInfo.premium=e),label:"保费",name:"premium",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:A}]},{input:d((()=>{var i,o,l,t;return[s("div",ee,[r(ge,{modelValue:u(y).formInfo.premium,"onUpdate:modelValue":a[3]||(a[3]=e=>u(y).formInfo.premium=e),step:(null===(i=e.originData)||void 0===i||null===(o=i.riskCalcMethodInfoVO)||void 0===o?void 0:o.increaseDecreaseNum)||1,min:u(x).min,"input-width":"64px",max:u(x).max},null,8,["modelValue","step","min","max"]),s("span",ie,V(`金额最低${u(x).min}元，为${(null===(l=e.originData)||void 0===l||null===(t=l.riskCalcMethodInfoVO)||void 0===t?void 0:t.increaseDecreaseNum)||1}的倍数`),1)])]})),_:1},8,["modelValue","rules"])):g("",!0),3===(null===(f=e.originData)||void 0===f||null===(h=f.riskCalcMethodInfoVO)||void 0===h?void 0:h.saleMethod)||4===(null===(I=e.originData)||void 0===I||null===(q=I.riskCalcMethodInfoVO)||void 0===q?void 0:q.saleMethod)&&(null!==(T=e.originData)&&void 0!==T&&null!==(M=T.riskCalcMethodInfoVO)&&void 0!==M&&M.minCopy||null!==(N=e.originData)&&void 0!==N&&null!==(j=N.riskCalcMethodInfoVO)&&void 0!==j&&j.maxCopy)?(t(),k(Ve,{key:2,modelValue:u(y).formInfo.copy,"onUpdate:modelValue":a[6]||(a[6]=e=>u(y).formInfo.copy=e),label:"投保份数",name:"copy",rules:[{required:!0,message:"请填写"}]},{input:d((()=>[s("div",ae,[r(ge,{modelValue:u(y).formInfo.copy,"onUpdate:modelValue":a[5]||(a[5]=e=>u(y).formInfo.copy=e),step:1,min:u(_).min,max:u(_).max},null,8,["modelValue","min","max"]),s("span",oe,V(`${u(_).min}份起购，最多购买${u(_).max}份`),1)])])),_:1},8,["modelValue"])):g("",!0),[1,4].includes((null===(Y=e.originData.riskCalcMethodInfoVO)||void 0===Y?void 0:Y.saleMethod)||0)&&1!==(null===($=e.originData)||void 0===$?void 0:$.exemptFlag)||null===(z=u(c))||void 0===z||!z[null===(B=e.originData)||void 0===B?void 0:B.riskCode]?g("",!0):(t(),k(Ve,{key:3,label:"保额"},{input:d((()=>{var i,a,o;return[s("div",null,V(null===(i=u(c))||void 0===i||null===(a=i[null===(o=e.originData)||void 0===o?void 0:o.riskCode])||void 0===a?void 0:a.amount),1)]})),_:1})),b(null===(G=e.originData)||void 0===G||null===(K=G.riskInsureLimitVO)||void 0===K?void 0:K.insurancePeriodValueList)&&b(null===(H=e.originData)||void 0===H||null===(X=H.riskInsureLimitVO)||void 0===X?void 0:X.insurancePeriodRule)?g("",!0):(t(),k(Ve,{key:4,modelValue:u(y).formInfo.coveragePeriod,"onUpdate:modelValue":a[8]||(a[8]=e=>u(y).formInfo.coveragePeriod=e),label:"保障期间",name:"coveragePeriod",rules:[{required:!0,message:"请选择保障期间"}]},{input:d((()=>[r(be,{modelValue:u(y).formInfo.coveragePeriod,"onUpdate:modelValue":a[7]||(a[7]=e=>u(y).formInfo.coveragePeriod=e),disabled:p.value.coveragePeriod.disabled,prevent:p.value.coveragePeriod.prevent?"请先选择主险保障期间":"",options:u(R),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])),_:1},8,["modelValue"])),b(null===(J=e.originData)||void 0===J||null===(ne=J.riskInsureLimitVO)||void 0===ne?void 0:ne.paymentPeriodValueList)&&b(null===(re=e.originData)||void 0===re||null===(de=re.riskInsureLimitVO)||void 0===de?void 0:de.paymentPeriodRule)?g("",!0):(t(),k(Ve,{key:5,modelValue:u(y).formInfo.chargePeriod,"onUpdate:modelValue":a[10]||(a[10]=e=>u(y).formInfo.chargePeriod=e),label:"交费期间",name:"chargePeriod",rules:[{required:!0,message:"请选择交费期间"}]},{input:d((()=>[r(be,{modelValue:u(y).formInfo.chargePeriod,"onUpdate:modelValue":a[9]||(a[9]=e=>u(y).formInfo.chargePeriod=e),disabled:p.value.chargePeriod.disabled,prevent:p.value.chargePeriod.prevent?"请先选择主险交费期间":"",options:u(O),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])])),_:1},8,["modelValue"])),b(null===(se=e.originData.riskInsureLimitVO)||void 0===se?void 0:se.paymentFrequencyList)&&b(null===(ue=e.originData.riskInsureLimitVO)||void 0===ue?void 0:ue.paymentPeriodRule)?g("",!0):(t(),k(Ve,{key:6,modelValue:u(y).formInfo.paymentFrequency,"onUpdate:modelValue":a[12]||(a[12]=e=>u(y).formInfo.paymentFrequency=e),label:"交费方式",name:"paymentFrequency",rules:[{required:!0,message:"请选择交费方式"}]},{input:d((()=>[r(be,{modelValue:u(y).formInfo.paymentFrequency,"onUpdate:modelValue":a[11]||(a[11]=e=>u(y).formInfo.paymentFrequency=e),disabled:p.value.paymentFrequency.disabled,prevent:p.value.paymentFrequency.prevent?"请先选择主险交费方式":"",options:u(w)},null,8,["modelValue","disabled","prevent","options"])])),_:1},8,["modelValue"])),b(null===(me=e.originData)||void 0===me||null===(ce=me.riskInsureLimitVO)||void 0===ce?void 0:ce.annuityDrawTypeList)?g("",!0):(t(),k(Ve,{key:7,modelValue:u(y).formInfo.annuityDrawDate,"onUpdate:modelValue":a[14]||(a[14]=e=>u(y).formInfo.annuityDrawDate=e),label:"领取时间",name:"annuityDrawDate",rules:[{required:!0,message:"请选择领取时间"}]},{input:d((()=>{var i;return[r(be,{modelValue:u(y).formInfo.annuityDrawDate,"onUpdate:modelValue":a[13]||(a[13]=e=>u(y).formInfo.annuityDrawDate=e),options:C(u(U),(null===(i=e.originData.riskInsureLimitVO)||void 0===i?void 0:i.annuityDrawTypeList)||[])},null,8,["modelValue","options"])]})),_:1},8,["modelValue"])),b(null===(pe=e.originData)||void 0===pe||null===(ve=pe.riskInsureLimitVO)||void 0===ve?void 0:ve.annuityDrawFrequencyList)?g("",!0):(t(),k(Ve,{key:8,modelValue:u(y).formInfo.annuityDrawType,"onUpdate:modelValue":a[16]||(a[16]=e=>u(y).formInfo.annuityDrawType=e),label:"领取方式",name:"annuityDrawType",rules:[{required:!0,message:"请选择领取方式"}]},{input:d((()=>{var i;return[r(be,{modelValue:u(y).formInfo.annuityDrawType,"onUpdate:modelValue":a[15]||(a[15]=e=>u(y).formInfo.annuityDrawType=e),options:C(u(F),(null===(i=e.originData.riskInsureLimitVO)||void 0===i?void 0:i.annuityDrawFrequencyList)||[])},null,8,["modelValue","options"])]})),_:1},8,["modelValue"])),(t(!0),n(D,null,L(e.originData.riskLiabilityInfoVOList||[],((i,a)=>(t(),n("div",{key:a},[1===i.optionalFlag?(t(),k(Ve,{key:0,modelValue:u(y).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>u(y).formInfo.liabilityVOList[a].liabilityAttributeValue=e,label:i.liabilityName,name:"liabilityAttributeValue",rules:[{required:i.liabilityAttributeValue,message:`请选择${i.liabilityName}`}]},{input:d((()=>{var o,l;return[s("div",null,[b(i.liabilityAttributeValueList)?(t(),n("span",le,"50万")):(t(),k(be,{key:1,modelValue:u(y).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>u(y).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:C(u(E),null===(o=e.originData.riskLiabilityInfoVOList)||void 0===o||null===(l=o[a])||void 0===l?void 0:l.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])):(t(),k(Ve,{key:1,modelValue:u(y).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>u(y).formInfo.liabilityVOList[a].liabilityAttributeValue=e,label:i.liabilityName,name:"liabilityAttributeValue"},{input:d((()=>{var o,l;return[s("div",null,[b(i.liabilityAttributeValueList)?(t(),k(be,{key:0,modelValue:u(y).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>u(y).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:u(S)},null,8,["modelValue","onUpdate:modelValue","options"])):(t(),k(be,{key:1,modelValue:u(y).formInfo.liabilityVOList[a].liabilityAttributeValue,"onUpdate:modelValue":e=>u(y).formInfo.liabilityVOList[a].liabilityAttributeValue=e,options:C(u(E),null===(o=e.originData.riskLiabilityInfoVOList)||void 0===o||null===(l=o[a])||void 0===l?void 0:l.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]})),_:2},1032,["modelValue","onUpdate:modelValue","label"]))])))),128)),null!==(fe=e.originData)&&void 0!==fe&&fe.relationDesc?(t(),n("div",te,[r(he,{title:"责任投保说明"},{default:d((()=>[s("div",null,V(e.originData.relationDesc),1)])),_:1})])):g("",!0)])}}}),[["__scopeId","data-v-29adc12a"]]);const re={class:"com-risk-list-wrapper"},de=(e=>(m("data-v-1f13cbe8"),e=e(),c(),e))((()=>s("div",{class:"popup-title"},"选择附加险",-1))),se={class:"risk-list"},ue={class:"cell-title"},me={class:"title"},ce={class:"footer-bar"},pe=O("确认"),ve=i({props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:i}){const m=e,c=v([]),p=v([]),f=v([...m.disabled]),y=a({show:m.show,currentChecked:[...m.modelValue]}),g=e=>{var i,a,o;if(f.value.includes(e))return;((e,i)=>{if(!m.collocationList.length)return i?void(y.currentChecked=[]):void y.currentChecked.push(e);let a=y.currentChecked,o=f.value;i?(m.collocationList.forEach((i=>{e===i.riskId&&(2===i.collocationType?a=a.filter((a=>a!==i.collocationRiskId||a!==e)):3===i.collocationType?(a=a.filter((i=>i!==e)),o=o.filter((e=>e!==i.collocationRiskId))):a=a.filter((i=>i!==e)))})),y.currentChecked=a,f.value=o):(m.collocationList.forEach((l=>{e===l.riskId&&(i||(2===l.collocationType?a.push(l.collocationRiskId):3===l.collocationType&&o.push(l.collocationRiskId),a.push(e)))})),y.currentChecked.push(...a),f.value=o)})(e,y.currentChecked.includes(e)),null==c||null===(i=c.value)||void 0===i||null===(a=i[e])||void 0===a||null===(o=a.toggle)||void 0===o||o.call(a)},b=()=>{i("close")},h=()=>{const e=m.riskList.filter((e=>y.currentChecked.includes(e.id)));i("update:modelValue",[...new Set(p.value)]),i("finished",e,f.value),i("close")};return C((()=>{c.value=[]})),o((()=>y.currentChecked),(e=>{p.value=e}),{deep:!0,immediate:!0}),o((()=>m.modelValue),(e=>{p.value=e||[],f.value.push(...e||[])}),{deep:!0,immediate:!0}),(i,a)=>{const o=l("van-checkbox"),m=l("VanCell"),v=l("van-cell-group"),I=l("van-checkbox-group"),C=l("VanButton"),O=l("VanPopup");return t(),n("div",re,[r(O,{show:u(y).show,"onUpdate:show":a[1]||(a[1]=e=>u(y).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:b},{default:d((()=>[de,s("div",se,[r(I,{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=e=>p.value=e)},{default:d((()=>[r(v,{inset:""},{default:d((()=>[(t(!0),n(D,null,L(e.riskList,(e=>(t(),k(m,{key:e.id,title:e.riskName,disabled:f.value.includes(e.id),onClick:i=>g(e.id)},{"right-icon":d((()=>[r(o,{ref_for:!0,ref:i=>c.value[e.id]=i,shape:"square",disabled:f.value.includes(e.id),name:e.id,onClick:R((i=>g(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:d((()=>[s("div",ue,[s("div",me,V(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),s("div",ce,[r(C,{type:"primary",disabled:!u(y).currentChecked.length,block:"",onClick:h},{default:d((()=>[pe])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}});var fe=e("b",_(ve,[["__scopeId","data-v-1f13cbe8"]]));const ye={class:"risk-list-wrapper"},ke={key:1,class:"add-rider-risk"},ge={class:"left-part"},Ve=O("+ 附加险");e("R",_(i({props:{riskInfo:{default:()=>({})},originData:{default:()=>[]},pickFactor:{type:Function,default:()=>{}},enums:{default:()=>{}}},setup(e){var i;const m=e,c=h("source")||"",[f,y]=p(!1);v(null),v(null);const b=a({mainRiskInfo:m.riskInfo,riderRiskInfo:(null===(i=m.riskInfo)||void 0===i?void 0:i.riderRiskVOList)||[],requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[]}),C=(e,i)=>{b.requiredRiderRiskData=b.requiredRiderRiskData.concat(e),b.disabledList=i},R=e=>{w.confirm({message:"确定要删除附加险么？"}).then((()=>{var i;const a=[e];((null===(i=b.mainRiskData)||void 0===i?void 0:i.collocationVOList)||[]).forEach((i=>{e!==i.riskId||2!==i.collocationType&&3!==i.collocationType||a.push(i.collocationRiskId)})),b.checkedList=b.checkedList.filter((e=>!a.includes(e))),b.requiredRiderRiskData=b.requiredRiderRiskData.filter((e=>!a.includes(e.id))),b.disabledList=b.disabledList.filter((e=>!a.includes(e))),Object.assign(b.riderRiskInfo,{[e]:void 0})})).catch((()=>{}))};return I((()=>{b.requiredRiderRiskData})),o((()=>b.requiredRiderRiskData),(e=>{const i=[b.mainRiskData,...e];let a=[],o=[];const l=[];i.forEach(((e,i)=>{var t,n,r;const d=(null==e||null===(t=e.riskCalcMethodInfoVO)||void 0===t?void 0:t.riskFactorRelationList)||[];a=a.concat(d.filter((e=>"insured"===e.factorObject)).map((e=>e.factorCode))),o=o.concat(d.filter((e=>"holder"===e.factorObject)).map((e=>e.factorCode))),l.push(null==e||null===(n=e.riskInsureLimitVO)||void 0===n?void 0:n.minHolderAge,null==e||null===(r=e.riskInsureLimitVO)||void 0===r?void 0:r.maxHolderAge)})),(e||[]).forEach((e=>{var i;const a={riskType:e.riskType,riskId:e.id,riskCode:e.riskCode,riskName:e.riskName,mainRiskCode:b.mainRiskData.riskCode,mainRiskId:null===(i=b.mainRiskData)||void 0===i?void 0:i.id,riskCategory:e.riskCategory,liabilityVOList:(e.riskLiabilityInfoVOList||[]).map((e=>({liabilityAttributeCode:e.liabilityAttributeType,liabilityCode:e.liabilityCode,liabilityId:e.id,liabilityRateType:e.liabilityRateType})))};Object.assign(b.riderRiskInfo,{[e.id]:a})})),m.pickFactor({insuredFactorList:[...new Set(a)],holderFactorList:[...new Set(o)],ageRange:l})}),{deep:!0,immediate:!0}),o((()=>m.originData),(e=>{(e||[]).forEach((e=>{1===e.riskType?(b.mainRiskData=e,b.requiredRiderRiskData=e.requiredRiderRiskVOList||[],b.riderRiskList=e.optionalRiderRiskVOList):b.riderRiskList.push(e)}))}),{deep:!0,immediate:!0}),(i,a)=>{var o,m,p;const v=l("ProCheckButton");return t(),n("div",ye,[u(b).mainRiskData?(t(),k(ne,{key:0,enums:e.enums,"form-info":u(b).mainRiskInfo,"origin-data":u(b).mainRiskData},null,8,["enums","form-info","origin-data"])):g("",!0),(t(!0),n(D,null,L(u(b).requiredRiderRiskData,((i,a)=>(t(),k(ne,{key:i.id,"form-info":u(b).riderRiskInfo[i.id],index:a,enums:e.enums,"main-risk-data":u(b).mainRiskData,"main-risk-info":u(b).mainRiskInfo,"origin-data":i,"remove-risk":R,"remove-risk-list":u(b).checkedList},null,8,["form-info","index","enums","main-risk-data","main-risk-info","origin-data","remove-risk-list"])))),128)),"proposal"!==u(c)&&(null===(o=u(b).riderRiskList)||void 0===o?void 0:o.length)-(null===(m=u(b).checkedList)||void 0===m?void 0:m.length)?(t(),n("div",ke,[s("span",ge,V(`共有${u(b).riderRiskList.length-u(b).checkedList.length}款附加险可以添加`),1),r(v,{activated:"",onClick:a[0]||(a[0]=e=>u(y)(!0))},{default:d((()=>[Ve])),_:1})])):g("",!0),u(f)?(t(),k(fe,{key:2,modelValue:u(b).checkedList,"onUpdate:modelValue":a[1]||(a[1]=e=>u(b).checkedList=e),show:u(f),disabled:u(b).disabledList,"risk-list":u(b).riderRiskList,"collocation-list":(null===(p=u(b).mainRiskData)||void 0===p?void 0:p.collocationVOList)||[],onFinished:C,onClose:a[2]||(a[2]=e=>u(y)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):g("",!0)])}}}),[["__scopeId","data-v-11798776"]]));e("i",((e={})=>A.post("/api/app/insure/product/insureProductDetail",e))),e("p",(e=>A.post("/api/app/insure/insurance/premiumCalc",e)))}}}))}();
