import{aG as e,d as a,r as l,L as u,aH as i,aI as o,R as t,aJ as n,i as s,ag as d,as as r,a9 as m,aK as v,aL as p,aM as c,aN as y,aO as g,aP as V,$ as f,aQ as k,aR as b,aS as h,aT as D,aU as C,G as x,z as K,a1 as I,c as S,A as P,w,f as L,g as _,e as T,E as U,h as O,aV as R,aE as M,aF as A,V as F,U as N,aW as E}from"./index-10d25b42.js";import{l as B,R as $}from"./index-5b4f0e35.js";import{b as j}from"./infoCollection-71581e26.js";const[J,q]=e("stepper"),z=(e,a)=>String(e)===String(a);const W=C(a({name:J,props:{min:p(1),max:p(1/0),name:p(""),step:p(1),theme:String,integer:Boolean,disabled:Boolean,showPlus:c,showMinus:c,showInput:c,longPress:c,allowEmpty:Boolean,modelValue:y,inputWidth:y,buttonSize:y,placeholder:String,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,beforeChange:Function,defaultValue:p(1),decimalLength:y},emits:["plus","blur","minus","focus","change","overlimit","update:modelValue"],setup(e,{emit:a}){const p=a=>{const{min:l,max:u,allowEmpty:i,decimalLength:o}=e;return i&&""===a||(a=""===(a=g(String(a),!e.integer))?0:+a,a=Number.isNaN(a)?+l:a,a=Math.max(Math.min(+u,a),+l),V(o)&&(a=a.toFixed(+o))),a};let c;const y=l(),C=l((()=>{var l;const u=null!=(l=e.modelValue)?l:e.defaultValue,i=p(u);return z(i,e.modelValue)||a("update:modelValue",i),i})()),x=u((()=>e.disabled||e.disableMinus||C.value<=+e.min)),K=u((()=>e.disabled||e.disablePlus||C.value>=+e.max)),I=u((()=>({width:i(e.inputWidth),height:i(e.buttonSize)}))),S=u((()=>o(e.buttonSize))),P=a=>{e.beforeChange?h(e.beforeChange,{args:[a],done(){C.value=a}}):C.value=a},w=()=>{if("plus"===c&&K.value||"minus"===c&&x.value)return void a("overlimit",c);const l="minus"===c?-e.step:+e.step,u=p(D(+C.value,l));P(u),a(c)},L=a=>{const l=a.target,{value:u}=l,{decimalLength:i}=e;let o=g(String(u),!e.integer);if(V(i)&&o.includes(".")){const e=o.split(".");o=`${e[0]}.${e[1].slice(0,+i)}`}e.beforeChange?l.value=String(C.value):z(u,o)||(l.value=o);const t=o===String(+o);P(t?+o:o)},_=l=>{var u;e.disableInput?null==(u=y.value)||u.blur():a("focus",l)},T=e=>{const l=e.target,u=p(l.value);l.value=String(u),C.value=u,f((()=>{a("blur",e),k()}))};let U,O;const R=()=>{O=setTimeout((()=>{w(),R()}),200)},M=a=>{e.longPress&&(clearTimeout(O),U&&b(a))},A=a=>{e.disableInput&&b(a)},F=a=>({onClick:e=>{b(e),c=a,w()},onTouchstartPassive:()=>{c=a,e.longPress&&(U=!1,clearTimeout(O),O=setTimeout((()=>{U=!0,w(),R()}),600))},onTouchend:M,onTouchcancel:M});return t((()=>[e.max,e.min,e.integer,e.decimalLength]),(()=>{const e=p(C.value);z(e,C.value)||(C.value=e)})),t((()=>e.modelValue),(e=>{z(e,C.value)||(C.value=p(e))})),t(C,(l=>{a("update:modelValue",l),a("change",l,{name:e.name})})),n((()=>e.modelValue)),()=>s("div",{role:"group",class:q([e.theme])},[d(s("button",m({type:"button",style:S.value,class:[q("minus",{disabled:x.value}),{[v]:!x.value}],"aria-disabled":x.value||void 0},F("minus")),null),[[r,e.showMinus]]),d(s("input",{ref:y,type:e.integer?"tel":"text",role:"spinbutton",class:q("input"),value:C.value,style:I.value,disabled:e.disabled,readonly:e.disableInput,inputmode:e.integer?"numeric":"decimal",placeholder:e.placeholder,"aria-valuemax":e.max,"aria-valuemin":e.min,"aria-valuenow":C.value,onBlur:T,onInput:L,onFocus:_,onMousedown:A},null),[[r,e.showInput]]),d(s("button",m({type:"button",style:S.value,class:[q("plus",{disabled:K.value}),{[v]:!K.value}],"aria-disabled":K.value||void 0},F("plus")),null),[[r,e.showPlus]])])}})),Y={key:0},G={class:"custom-field"},H={key:1,class:"flex-field"},Q={class:"pro-radio-wrap"},X={key:2},Z={class:"pro-radio-wrap"},ee={class:"custom-field"},ae={key:1},le={key:3},ue={class:"custom-field"},ie={key:1},oe={class:"custom-field"},te={key:0},ne={key:1};var se=x(a({__name:"index",props:{originData:{default:()=>({})},modelValue:{default:()=>({})},defalutValue:{default:()=>({})}},emits:["update:modelValue","trialChange"],setup(e,{emit:a}){const i=e,o=K({hadSetDefault:!1}),n=l(i.originData),d=l({}),r=l(1),m=()=>2===n.value.saleMethod?{label:"保费",key:"premium"}:{label:"保额",key:"amount"},v=()=>{switch(`${n.value.displayUnit}`){case j.YUAN:return"元";case j.MONTH_SALARY:return"倍月薪";case j.MILLION:return"万元";case j.COPY:return"份"}return""},p=u((()=>2===n.value.saleMethod?{label:"保费",key:"premium"}:{label:"保额",key:"amount"})),c=(...e)=>{if(1===r.value){const e=d.value[p.value.key],a=i.originData.minStepValue,l=i.originData.maxStepValue,u=i.originData.stepValue;if(+e>=+l)d.value[p.value.key]=l;else if(+e<=+a)d.value[p.value.key]=a;else{const l=+e-+a,i=Math.floor(l/+u);l%+u!=0&&(d.value[p.value.key]=+a+i*+u)}}return!0},y=()=>{const{displayType:e,requireCopies:a}=n.value,l=m().key,u=!d.value.riskCode;1===e?r.value=1:3===e&&2===a?(r.value=2,n.value.displayValues.length>=1&&u&&!d.value[l]&&(d.value[l]=n.value.displayValues[0].code||n.value.displayValues[0].value)):3===e&&1===a?(r.value=3,n.value.minCopiesValue===n.value.maxCopiesValue&&u&&!d.value.copy&&(d.value.copy=n.value.minCopiesValue),n.value.displayValues.length>=1&&u&&!d.value[l]&&(d.value[l]=n.value.displayValues[0].code||n.value.displayValues[0].value)):2===e&&(r.value=4,n.value.minCopiesValue===n.value.maxCopiesValue&&u&&!d.value.copy&&(d.value.copy=n.value.minCopiesValue),u&&!d.value.amount&&(d.value.amount=n.value.copiesAmount))},g=u((()=>{if(n.value.displayValues){const e=m().key;return 1!==n.value.displayValues.length||d.value.riskCode||(d.value[e]=n.value.displayValues[0].code),n.value.displayValues.map((e=>({label:e.value,value:e.code})))}return[]})),V=()=>{};return I((()=>{y(),a("update:modelValue",d.value)})),t((()=>n),(e=>{y()}),{deep:!0}),t((()=>i.defalutValue),(e=>{(null==e?void 0:e.riskCode)&&!o.hadSetDefault&&(o.hadSetDefault=!0,Object.keys(d.value).forEach((a=>{d.value[a]=e[a]||d.value[a]})))}),{deep:!0,immediate:!0}),t((()=>d.value),(e=>{(()=>{if(1===r.value){const e=d.value[p.value.key],a=i.originData.minStepValue,l=i.originData.maxStepValue,u=i.originData.stepValue;if(+e>+l)return!1;if(+e<+a)return!1;if((+e-+a)%+u!=0)return!1}return!0})()&&(a("update:modelValue",e),a("trialChange",e))}),{deep:!0,immediate:!0}),t(i.modelValue,(e=>{console.log("---------modelValueChange = ",e)}),{deep:!0,immediate:!0}),(a,l)=>{const u=W,i=R,o=M,t=A;return 1===r.value?(S(),P("div",Y,[s(i,{label:`基本${_(p).label}`,name:_(p).key,class:"risk-select-field"},{input:w((()=>[L("div",G,[s(u,{modelValue:d.value[_(p).key],"onUpdate:modelValue":l[0]||(l[0]=e=>d.value[_(p).key]=e),"input-width":"80px","default-value":e.originData.minStepValue,min:e.originData.minStepValue,step:e.originData.stepValue,max:e.originData.maxStepValue,onBlur:c},null,8,["modelValue","default-value","min","step","max"])])])),_:1},8,["label","name"])])):2===r.value?(S(),P("div",H,[s(t,{modelValue:d.value[_(p).key],"onUpdate:modelValue":l[2]||(l[2]=e=>d.value[_(p).key]=e),label:`基本${_(p).label}`,name:_(p).key,class:"risk-select-field"},{input:w((()=>[L("div",Q,[s(o,{modelValue:d.value[_(p).key],"onUpdate:modelValue":l[1]||(l[1]=e=>d.value[_(p).key]=e),options:_(g),onclick:V},null,8,["modelValue","options"])])])),_:1},8,["modelValue","label","name"])])):3===r.value?(S(),P("div",X,[s(t,{modelValue:d.value[_(p).key],"onUpdate:modelValue":l[4]||(l[4]=e=>d.value[_(p).key]=e),label:`基本${_(p).label}`,name:_(p).key,class:"risk-select-field"},{input:w((()=>[L("div",Z,[s(o,{modelValue:d.value[_(p).key],"onUpdate:modelValue":l[3]||(l[3]=e=>d.value[_(p).key]=e),options:_(g),onclick:V},null,8,["modelValue","options"])])])),_:1},8,["modelValue","label","name"]),L("div",null,[s(i,{modelValue:d.value.copy,"onUpdate:modelValue":l[6]||(l[6]=e=>d.value.copy=e),label:"份数",name:"copy",class:"risk-select-field"},{input:w((()=>[L("div",ee,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(S(),T(u,{key:0,modelValue:d.value.copy,"onUpdate:modelValue":l[5]||(l[5]=e=>d.value.copy=e),"input-width":"80px","default-value":e.originData.minCopiesValue,min:e.originData.minCopiesValue||1,step:1,max:e.originData.maxCopiesValue},null,8,["modelValue","default-value","min","max"])):(S(),P("span",ae,U(e.originData.minCopiesValue),1))])])),_:1},8,["modelValue"])])])):4===r.value?(S(),P("div",le,[s(i,{modelValue:d.value.copy,"onUpdate:modelValue":l[8]||(l[8]=e=>d.value.copy=e),label:"份数",name:"copy",class:"risk-select-field"},{input:w((()=>[L("div",ue,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(S(),T(u,{key:0,modelValue:d.value.copy,"onUpdate:modelValue":l[7]||(l[7]=e=>d.value.copy=e),"input-width":"64px","default-value":e.originData.minCopiesValue,min:e.originData.minCopiesValue||1,step:1,max:e.originData.maxCopiesValue},null,8,["modelValue","default-value","min","max"])):(S(),P("span",ie,U(e.originData.minCopiesValue),1))])])),_:1},8,["modelValue"]),s(i,{label:_(p).label,name:"copyAmount",class:"risk-select-field"},{input:w((()=>[L("div",oe,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(S(),P("span",te,U(+e.originData.copiesAmount*+d.value.copy+v()),1)):(S(),P("span",ne,U(+e.originData.minCopiesValue*+e.originData.copiesAmount+v()),1))])])),_:1},8,["label"])])):O("",!0)}}}),[["__scopeId","data-v-134a04d6"]]);const de=[{name:"年金领取期间",type:"checkbox",configKey:["annuityDrawValueList"],valueKey:"annuityDrawDate"},{name:"领取频率",type:"checkbox",configKey:["annuityDrawFrequencyList"],valueKey:"annuityDrawType"},{name:"交费方式",type:"checkbox",configKey:["paymentFrequencyList"],valueKey:"paymentFrequency",ruleKey:"paymentTypeRule"},{name:"交费期间",type:"checkbox",configKey:["paymentPeriodValueList"],valueKey:"chargePeriod",ruleKey:"paymentPeriodRule",ruleValueKey:"chargePeriod"},{name:"保障期间",type:"checkbox",configKey:["insurancePeriodValueList"],valueKey:"coveragePeriod",ruleKey:"insurancePeriodRule",ruleValueKey:"chargePeriod"}],re={class:"pro-radio-wrap"};var me=x(a({__name:"index",props:{originData:{default:()=>({})},modelValue:{default:()=>({})},riskInfo:{default:()=>({})},defaultValue:{default:()=>({})}},emits:["trialChange","inputChange"],setup(e,{emit:a}){const u=e,i=l(u.originData),o=l(u.modelValue);l(1);const n=e=>{const a=B.exports.get(u.originData,e),l=B.exports.get(u.originData,e);return a.map((e=>{const a=l?l.find((a=>a.code===e.code)):null;return{label:e.value,value:e.code,disabled:!(!a||null===a.useFlag||void 0===a.useFlag)&&1!==a.useFlag}}))},d=()=>{de.forEach((e=>{const a=B.exports.get(u.originData,e.configKey);"checkbox"===e.type&&a&&a.length>0&&!o.value.riskCode&&(o.value[e.valueKey]=a[0].code)}))};return I((()=>{d()})),t((()=>u.defaultValue),(e=>{(null==e?void 0:e.riskCode)&&(o.value=e)}),{deep:!0,immediate:!0}),t((()=>i.value),(e=>{d()}),{deep:!0,immediate:!0}),t((()=>JSON.stringify(o.value)),((e,l)=>{const i=e&&JSON.parse(e)||{},o=l&&JSON.parse(l)||{};let t=null;de.forEach((e=>{i[e.valueKey]&&o[e.valueKey]&&i[e.valueKey]!==o[e.valueKey]&&(t||(t={key:e.valueKey,oldValue:o[e.valueKey],newValue:i[e.valueKey],riskCode:u.riskInfo.riskCode}))})),e&&a("trialChange",JSON.parse(e),t)}),{deep:!0,immediate:!0}),(a,l)=>{const u=M,i=A;return S(!0),P(N,null,F(_(de),(a=>(S(),P(N,null,[_(B.exports.get)(e.originData,a.configKey)&&(1===e.riskInfo.mainRiskFlag||a.ruleKey&&2===_(B.exports.get)(e.originData,a.ruleKey)||!a.ruleKey)?(S(),P("div",{key:e.riskInfo.riskCode+"_"+a.name},["checkbox"===a.type?(S(),T(i,{key:0,modelValue:o.value[a.valueKey],"onUpdate:modelValue":e=>o.value[a.valueKey]=e,label:a.name,name:a.valueKey,class:"risk-select-field"},{input:w((()=>[L("div",re,[s(u,{modelValue:o.value[a.valueKey],"onUpdate:modelValue":[e=>o.value[a.valueKey]=e,e=>((e,a)=>{console.log("-------change",e,a)})(e,a.valueKey)],options:n(a.configKey)},null,8,["modelValue","onUpdate:modelValue","options"])])])),_:2},1032,["modelValue","onUpdate:modelValue","label","name"])):O("",!0)])):O("",!0)],64)))),256)}}}),[["__scopeId","data-v-18462dcc"]]);function ve(e){return Object.keys(e)}var pe=x(a({__name:"index",props:{originData:{default:()=>({})},modelValue:{default:()=>({})},defaultValue:{default:()=>({})}},emits:["trialChange"],setup(e,{expose:a,emit:u}){const i=e,o=l(null),n=l({}),d=l({}),r=K({personalInfo:{},basicsAmount:"",basicsPremium:"",defaultValues:i.defaultValue,changeData:null,sValues:n.value});E("premium"),d.value=E("enumList")||{},I((()=>{}));const m=e=>{i.originData.mainRiskFlag,n.value.riskCategory=i.originData.riskCategory,n.value.riskCode=i.originData.riskCode,n.value.riskId=i.originData.riskId,n.value.riskType=i.originData.riskType,n.value.riskName=i.originData.riskName,n.value.riskType=i.originData.riskType,n.value.mainRiskCode=i.originData.mainRiskCode,n.value.mainRiskId=i.originData.mainRiskId,e?u("trialChange",n.value,e):u("trialChange",n.value)},v=(e,a)=>{ve(e).forEach((a=>{n.value[a]=e[a]})),m(a)},p=e=>{var a,l;1==+(null==(l=null==(a=i.originData)?void 0:a.productRiskInsureLimitVO)?void 0:l.amountPremiumConfigVO.saleMethod)?r.basicsAmount=null==e?void 0:e.amount:r.basicsAmount=null==e?void 0:e.premium,ve(e).forEach((a=>{n.value[a]=e[a]})),m()},c=e=>{n.value.liabilityVOList=e,console.log(">>>handleRiskLiabilityChange = ",n.value),m()};return t((()=>i.defaultValue),(e=>{e&&(r.defaultValues=e,n.value={...e})}),{deep:!0,immediate:!0}),t((()=>n.value),(e=>{r.sValues=e}),{deep:!0,immediate:!0}),a({validate:async()=>{var e;await(null==(e=o.value)?void 0:e.validate())}}),(a,l)=>{var u,i,o,t,d,m;return 1===(null==(u=e.originData)?void 0:u.factorDisPlayFlag)?(S(),P(N,{key:0},[s(_(se),{"v-model":_(r).sValues,"origin-data":null==(o=null==(i=e.originData)?void 0:i.productRiskInsureLimitVO)?void 0:o.amountPremiumConfigVO,"defalut-value":_(r).defaultValues,onTrialChange:p},null,8,["v-model","origin-data","defalut-value"]),s(_(me),{"v-model":_(n),"origin-data":e.originData.productRiskInsureLimitVO,"risk-info":e.originData,"default-value":_(r).defaultValues,onTrialChange:v},null,8,["v-model","origin-data","risk-info","default-value"]),s(_($),{"data-source-folmulate":_(n),"data-source":e.originData,params:{amountUnit:null==(d=null==(t=e.originData)?void 0:t.productRiskInsureLimitVO)?void 0:d.amountPremiumConfigVO.displayUnit,basicsAmount:_(r).basicsAmount,basicsPremium:_(r).basicsPremium,riskId:null==(m=e.originData)?void 0:m.riskId},"default-value":_(r).defaultValues,onTrialChange:c},null,8,["data-source-folmulate","data-source","params","default-value"])],64)):O("",!0)}}}),[["__scopeId","data-v-6bf3aa54"]]);export{pe as I,de as P,W as S};
