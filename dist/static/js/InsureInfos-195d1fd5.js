import{o as e}from"./index-85b786dc.js";import{c as a}from"./cloneDeep-5d541e55.js";import{d as l,r as i,i as t,j as u,O as o,z as n,o as s,c as d,b as r,w as m,a as c,u as v,l as y,e as p,q as V,F as k,_ as b,aH as f,aI as g,n as h,aJ as L,at as C,au as D,a6 as I,aK as A}from"./index-a3c15377.js";import{S,g as x}from"./get-4ac0f9ad.js";import{a as O,b as F}from"./infoCollection-de566c01.js";import"./index-965bea78.js";/* empty css              */import{f as K}from"./trial-0f8ffd87.js";import{L as w}from"./product-585b0e6f.js";import{d as P}from"./debounce-6981b306.js";import{S as _}from"./index-e90e719d.js";const U={key:0},R={class:"custom-field"},N={key:1,class:"flex-field"},T={class:"pro-radio-wrap"},j={key:2},E={class:"pro-radio-wrap"},$={class:"custom-field"},J={key:1},Y={key:3},M={class:"custom-field"},q={key:1},B={class:"custom-field"},G={key:0},z={key:1},H={key:4},X=l({name:"BaoeBaofei"});var Q=b(l({...X,props:{originData:{default:()=>({})},modelValue:{default:()=>({})},defaultValue:{default:()=>({})},trialResult:{default:()=>({})}},emits:["update:modelValue","trialChange"],setup(e,{emit:a}){const l=e,b=i({hadSetDefault:!1}),h=t(),L=t(),C=t(0),D=()=>2===h.value.saleMethod?{label:"保费",key:"unitPremium"}:{label:"保额",key:"unitAmount"},I=()=>{switch(`${h.value.displayUnit}`){case O.YUAN:return"元";case O.MONTH_SALARY:return"倍月薪";case O.MILLION:return"万元";case O.COPY:return"份"}return""},A=u((()=>2===h.value.saleMethod?{label:"保费",key:"unitPremium"}:{label:"保额",key:"unitAmount"})),x=(...e)=>{if(1===C.value){const e=L.value[A.value.key],a=l.originData.minStepValue,i=l.originData.maxStepValue,t=l.originData.stepValue;if(+e>=+i)L.value[A.value.key]=i;else if(+e<=+a)L.value[A.value.key]=a;else{const l=+e-+a,i=Math.floor(l/+t);l%+t!=0&&(L.value[A.value.key]=+a+i*+t)}}return!0},K=u((()=>{if(h.value.displayValues){const e=D().key;return 1!==h.value.displayValues.length||L.value.riskCode||(L.value[e]=h.value.displayValues[0].code),h.value.displayValues.map((e=>({label:e.value,value:e.code})))}return[]})),w=()=>{};return o((()=>{})),n((()=>h),(e=>{(()=>{const{displayType:e,requireCopies:a,displayValues:l,initialAmount:i,copiesAmount:t,minCopiesValue:u,maxCopiesValue:o}=h.value,n=D().key,s=!L.value.riskCode;`${e}`===F.STEP?C.value=1:`${e}`===F.FIXED&&2===a?(C.value=2,l.length>=1&&s&&!L.value[n]&&(L.value[n]=l[0].code||l[0].value)):`${e}`===F.FIXED&&1===a?(C.value=3,u===o&&s&&!L.value.copy&&(L.value.copy=u),l.length>=1&&s&&!L.value[n]&&(L.value[n]=l[0].code||l[0].value)):`${e}`===F.COPY&&(C.value=4,u===o&&s&&!L.value.copy&&(L.value.copy=u),s&&!i&&(L.value.unitAmount=t))})()}),{deep:!0}),n((()=>l.defaultValue),(e=>{(null==e?void 0:e.riskCode)&&!b.hadSetDefault&&(b.hadSetDefault=!0,L.value={...L.value,unitAmount:e.unitAmount,unitPremium:e.unitPremium,copy:e.copy})}),{deep:!0,immediate:!0}),n((()=>l.originData),(e=>{h.value=e}),{immediate:!0,deep:!0}),n((()=>l.modelValue),(e=>{L.value=e}),{deep:!0,immediate:!0}),n((()=>L.value),(e=>{(()=>{if(1===C.value){const e=L.value[A.value.key],a=l.originData.minStepValue,i=l.originData.maxStepValue,t=l.originData.stepValue;if(+e>+i)return!1;if(+e<+a)return!1;if((+e-+a)%+t!=0)return!1}return!0})()&&(a("update:modelValue",e),a("trialChange",e))}),{deep:!0,immediate:!0}),(a,l)=>{const i=S,t=f,u=g;return s(),d(k,null,[1===C.value?(s(),d("div",U,[r(t,{label:`基本${v(A).label}`,name:v(A).key,class:"risk-select-field"},{input:m((()=>[c("div",R,[r(i,{modelValue:L.value[v(A).key],"onUpdate:modelValue":l[0]||(l[0]=e=>L.value[v(A).key]=e),"input-width":"80px","default-value":e.originData.minStepValue,min:e.originData.minStepValue,step:e.originData.stepValue,max:e.originData.maxStepValue,theme:"round",onBlur:x},null,8,["modelValue","default-value","min","step","max"])])])),_:1},8,["label","name"])])):2===C.value?(s(),d("div",N,[r(t,{modelValue:L.value[v(A).key],"onUpdate:modelValue":l[2]||(l[2]=e=>L.value[v(A).key]=e),label:`基本${v(A).label}`,name:v(A).key,class:"risk-select-field"},{input:m((()=>[c("div",T,[r(u,{modelValue:L.value[v(A).key],"onUpdate:modelValue":l[1]||(l[1]=e=>L.value[v(A).key]=e),options:v(K),onclick:w},null,8,["modelValue","options"])])])),_:1},8,["modelValue","label","name"])])):3===C.value?(s(),d("div",j,[r(t,{modelValue:L.value[v(A).key],"onUpdate:modelValue":l[4]||(l[4]=e=>L.value[v(A).key]=e),label:`基本${v(A).label}`,name:v(A).key,class:"risk-select-field"},{input:m((()=>[c("div",E,[r(u,{modelValue:L.value[v(A).key],"onUpdate:modelValue":l[3]||(l[3]=e=>L.value[v(A).key]=e),options:v(K),onclick:w},null,8,["modelValue","options"])])])),_:1},8,["modelValue","label","name"]),c("div",null,[r(t,{modelValue:L.value.copy,"onUpdate:modelValue":l[6]||(l[6]=e=>L.value.copy=e),label:"份数",name:"copy",class:"risk-select-field"},{input:m((()=>[c("div",$,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(s(),y(i,{key:0,modelValue:L.value.copy,"onUpdate:modelValue":l[5]||(l[5]=e=>L.value.copy=e),"input-width":"80px","default-value":e.originData.minCopiesValue,min:e.originData.minCopiesValue||1,step:1,max:e.originData.maxCopiesValue,theme:"round"},null,8,["modelValue","default-value","min","max"])):(s(),d("span",J,p(e.originData.minCopiesValue),1))])])),_:1},8,["modelValue"])])])):4===C.value?(s(),d("div",Y,[r(t,{modelValue:L.value.copy,"onUpdate:modelValue":l[8]||(l[8]=e=>L.value.copy=e),label:"份数",name:"copy",class:"risk-select-field"},{input:m((()=>[c("div",M,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(s(),y(i,{key:0,modelValue:L.value.copy,"onUpdate:modelValue":l[7]||(l[7]=e=>L.value.copy=e),"input-width":"64px","default-value":e.originData.minCopiesValue,min:e.originData.minCopiesValue||1,step:1,max:e.originData.maxCopiesValue,theme:"round"},null,8,["modelValue","default-value","min","max"])):(s(),d("span",q,p(e.originData.minCopiesValue),1))])])),_:1},8,["modelValue"]),r(t,{label:v(A).label,name:"copyAmount",class:"risk-select-field"},{input:m((()=>[c("div",B,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(s(),d("span",G,p(+e.originData.copiesAmount*+L.value.copy+I()),1)):(s(),d("span",z,p(+e.originData.minCopiesValue*+e.originData.copiesAmount+I()),1))])])),_:1},8,["label"])])):V("",!0),2===h.value.saleMethod&&e.trialResult&&e.trialResult.initialAmount>0?(s(),d("div",H,[r(t,{label:"保额",class:"risk-select-field"},{input:m((()=>[c("span",null,p(e.trialResult.initialAmount),1)])),_:1})])):V("",!0)],64)}}}),[["__scopeId","data-v-882a35a6"]]);const W=[{name:"年金领取期间",type:"checkbox",configKey:["annuityDrawValueList"],valueKey:"annuityDrawDate"},{name:"领取频率",type:"checkbox",configKey:["annuityDrawFrequencyList"],valueKey:"annuityDrawFrequency"},{name:"交费方式",type:"checkbox",configKey:["paymentFrequencyList"],valueKey:"paymentFrequency",ruleKey:"paymentTypeRule"},{name:"交费期间",type:"checkbox",configKey:["paymentPeriodValueList"],valueKey:"chargePeriod",ruleKey:"paymentPeriodRule",ruleValueKey:"chargePeriod"},{name:"保障期间",type:"checkbox",configKey:["insurancePeriodValueList"],valueKey:"coveragePeriod",ruleKey:"insurancePeriodRule",ruleValueKey:"chargePeriod"}];const Z={class:"pro-radio-wrap"},ee=l({name:"ProductKeys"});var ae=b(l({...ee,props:{originData:{default:()=>({})},modelValue:{default:()=>({})},riskInfo:{default:()=>({})},defaultValue:{default:()=>({})},useData:{default:()=>({})}},emits:["trialChange","inputChange"],setup(e,{emit:a}){const l=e,i=t(l.originData),u=t(l.modelValue);t(1);const p=e=>{const a=x(l.originData,e),i=x(l.originData,e);return(a||[]).map((e=>{const a=i?i.find((a=>a.code===e.code)):null;return{label:e.value,value:e.code,disabled:!(!a||null===a.useFlag||void 0===a.useFlag)&&1!==a.useFlag}}))},b=()=>{W.forEach((e=>{const a=x(l.originData,e.configKey);"checkbox"===e.type&&a&&a.length>0&&!u.value.riskCode&&(u.value[e.valueKey]=a[0].code)}))};return o((()=>{b()})),n((()=>l.defaultValue),(e=>{(null==e?void 0:e.riskCode)&&(u.value=JSON.parse(JSON.stringify(e)))}),{deep:!0,immediate:!0}),n((()=>i.value),(e=>{b()}),{deep:!0,immediate:!0}),n((()=>JSON.stringify(u.value)),((e,i)=>{const t=e&&JSON.parse(e)||{};console.log("---v new = ",t);const u=i&&JSON.parse(i)||{};let o=null;W.forEach((e=>{t[e.valueKey]&&u[e.valueKey]&&t[e.valueKey]!==u[e.valueKey]&&(o||(o={key:e.valueKey,oldValue:u[e.valueKey],newValue:t[e.valueKey],riskCode:l.riskInfo.riskCode}))})),e&&a("trialChange",JSON.parse(e),o)}),{deep:!0,immediate:!0}),(a,l)=>{const i=g,t=f;return s(!0),d(k,null,h(v(W),(a=>(s(),d(k,null,[v(x)(e.originData,a.configKey)?(s(),d("div",{key:e.riskInfo.riskCode+"_"+a.name},["checkbox"===a.type?(s(),y(t,{key:0,modelValue:u.value[a.valueKey],"onUpdate:modelValue":e=>u.value[a.valueKey]=e,label:a.name,name:a.valueKey,class:"risk-select-field"},{input:m((()=>[c("div",Z,[r(i,{modelValue:u.value[a.valueKey],"onUpdate:modelValue":[e=>u.value[a.valueKey]=e,e=>((e,a)=>{console.log("-------change",e,a)})(e,a.valueKey)],options:p(a.configKey)},null,8,["modelValue","onUpdate:modelValue","options"])])])),_:2},1032,["modelValue","onUpdate:modelValue","label","name"])):V("",!0)])):V("",!0)],64)))),256)}}}),[["__scopeId","data-v-6c35c46b"]]);const le={class:"com-risk-liabilityinfo"},ie={class:"item-wrap"},te={key:0},ue=(e=>(C("data-v-77a16450"),e=e(),D(),e))((()=>c("div",{class:"cell-content"},null,-1))),oe=l({name:"riskLiabilityInfo"});var ne=b(l({...oe,props:{dataSource:{default:()=>({})},modelValue:{default:()=>({})},dataSourceFolmulate:{default:()=>({})},params:{default:()=>({amountUnit:"",basicsAmount:"",basicsPremium:"",riskId:""})},defaultValue:{default:()=>({})}},emits:["trialChange"],setup(e,{emit:l}){const i=e,p=t({formInfo:i.dataSource,isCheckList:[],checkValueList:[],liabilityList:[],signLiabilityClick:[]}),b=(e,a)=>{console.log("---click ",e,a),p.value.signLiabilityClick.push({item:e,index:a})},C=(e,a)=>{const{riskLiabilityInfoVOList:l,riskLiabilityCollocationVOList:t}=i.dataSource,u=l[e].liabilityId,o=(t||[]).find((e=>e.relatedLiabilityId===u||e.collocationLiabilityId===u))||{};let n=null;o.collocationLiabilityId===u?(n=o.relatedLiabilityId,o.collocationType===w.YI_LAI&&(n=o.collocationLiabilityId)):n=o.collocationLiabilityId;const s=l.findIndex((e=>e.liabilityId===n));((e,a,l)=>{p.value.isCheckList[e]===`${I.YES}`?l===w.BANG_DING||l===w.YI_LAI?p.value.isCheckList[a]="1":p.value.isCheckList[a]="2":l===w.BANG_DING?p.value.isCheckList[a]="2":l===w.YI_LAI&&(p.value.isCheckList[a]=e!==a?"3":"2")})(e,s,o.collocationType),a(l[s],s,!0)},D=(e,a,l)=>{var i,t;const u=((null==(i=p.value)?void 0:i.liabilityList)||[]).map((e=>e.key)),o=0===(null==e?void 0:e.liabilityAttributeValueList.length)&&0===(null==e?void 0:e.formula.length),n=p.value.isCheckList[a];o&&-1===u.indexOf(a)&&n&&p.value.liabilityList.push({liabilityValue:e,key:a,isSwitchOn:p.value.isCheckList[a]}),"1"===n?b(e,a):p.value.signLiabilityClick.splice(a,1),-1!==u.indexOf(a)&&((null==(t=p.value)?void 0:t.liabilityList)||[]).forEach((e=>{e.key===a&&(e.isSwitchOn=p.value.isCheckList[a])})),l||C(a,D)},A=(e,a)=>{const l=e.liabilityAttributeValueList.filter((e=>e.displayValue===p.value.checkValueList[a])),i=JSON.parse(JSON.stringify(l))[0]||e.liabilityAttributeValueList[0],t={...e,liabilityValue:i};p.value.liabilityList.length>0&&Object.keys(p.value.checkValueList).indexOf(a)&&(p.value.liabilityList=p.value.liabilityList.filter((e=>e.key!==a))),p.value.checkValueList[a]=i.displayValue,p.value.liabilityList.push({liabilityValue:t,key:a,isSwitchOn:"1"})},S=u((()=>a(i.dataSourceFolmulate))),x=(e,a,l)=>{1===l?p.value.liabilityList.push({liabilityValue:{...e,liabilityValue:null==e?void 0:e.liabilityAttributeValueList[0]},key:a,isSwitchOn:"1"}):p.value.liabilityList.push({liabilityValue:{...e,liabilityValue:null==e?void 0:e.liabilityAttributeValueList[0]},key:a,isSwitchOn:"2"})};n((()=>S.value),((e,a)=>{var l,t,u;const o=null==(l=i.dataSourceFolmulate)?void 0:l.initialAmount,n=null==(t=i.dataSourceFolmulate)?void 0:t.initialPremium,s={amountUnit:i.params.amountUnit,basicsAmount:o,basicsPremium:n,riskId:i.params.riskId};((null==(u=null==i?void 0:i.dataSource)?void 0:u.riskLiabilityInfoVOList)||[]).map((async l=>{if(l.formula.length>0&&(o||n)&&((null==e?void 0:e.initialAmount)!==(null==a?void 0:a.initialAmount)||(null==e?void 0:e.initialPremium)!==(null==a?void 0:a.initialPremium))){const{code:e,data:a}=await K({...s,riskLiabilities:[l]});if("10000"===e){if(l.liabilityAttributeValueList=a[0].formulaResult,p.value.signLiabilityClick.length>0){const e=p.value.signLiabilityClick.find((e=>e.item.liabilityCode===l.liabilityCode));e&&A(e.item,e.index)}return{...l,liabilityAttributeValueList:a[0]}}return l}}))}),{deep:!0,immediate:!0}),n((()=>p.value.liabilityList),P((e=>{const a=p.value.liabilityList.filter((e=>"1"===e.isSwitchOn)).map((e=>({...e.liabilityValue})));l("trialChange",a)}),300),{deep:!0,immediate:!0}),o((()=>{var e;console.log("----mounted"),((null==(e=null==i?void 0:i.dataSource)?void 0:e.riskLiabilityInfoVOList)||[]).map(((e,a)=>{const l=e.liabilityAttributeValueList.length>0&&0===e.formula.length&&e.liabilityAttributeValueList[0].displayValue;return p.value.checkValueList[a]||(p.value.checkValueList[a]=l),1!=+e.showFlag&&p.value.liabilityList.push({liabilityValue:e,key:a,isSwitchOn:"1"}),1==+e.showFlag&&(1===e.attributeFlag&&2===e.insureFlag&&0===e.formula.length&&x(e,a,1),1===e.attributeFlag&&1===e.insureFlag&&0===e.formula.length&&x(e,a,2),2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&2===e.insureFlag&&x(e,a,1),2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&1===e.insureFlag&&x(e,a,2)),null}))}));const O=t([]);return n((()=>i.dataSource.riskLiabilityInfoVOList),P((e=>{O.value=(e||[]).map((e=>{const a=(i.dataSource.riskLiabilityCollocationVOList||[]).find((a=>a.collocationLiabilityId===e.liabilityId));return{...e,relation:null==a?void 0:a.collocationType}}))}),300),{deep:!0,immediate:!0}),n((()=>i.defaultValue),P((e=>{var a;(null==e?void 0:e.riskCode)&&e.liabilityList&&(p.value.signLiabilityClick=[],((null==(a=null==i?void 0:i.dataSource)?void 0:a.riskLiabilityInfoVOList)||[]).forEach(((a,l)=>{var i;const t=null==e?void 0:e.liabilityList.find((e=>e.liabilityCode===a.liabilityCode));console.log("--target lia = ",t),t&&(p.value.isCheckList[l]="1",p.value.checkValueList[l]=null==(i=null==t?void 0:t.liabilityValue)?void 0:i.displayValue,1==+a.showFlag&&2==+a.optionalFlag?D(a,l):b(a,l))})))}),300),{deep:!0,immediate:!0}),(e,a)=>{const l=_,i=f,t=L;return s(),y(t,null,{default:m((()=>[c("div",le,[c("div",ie,[(s(!0),d(k,null,h(v(O),((e,a)=>(s(),d("div",{key:a},[1!=+e.showFlag||2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&2===e.insureFlag?V("",!0):(s(),d("div",te,[(v(p).isCheckList[a]?"3"!==v(p).isCheckList[a]:e.relation!==v(w).YI_LAI)?(s(),y(i,{key:0,label:`${e.liabilityName}`,"label-width":"44%",name:"insuredRelation",class:"riskliab-select-field"},{input:m((()=>[1==+e.insureFlag?(s(),y(l,{key:0,modelValue:v(p).isCheckList[a],"onUpdate:modelValue":e=>v(p).isCheckList[a]=e,"active-value":"1","inactive-value":"2",size:"0.68rem",onClick:l=>D(e,a)},null,8,["modelValue","onUpdate:modelValue","onClick"])):V("",!0)])),_:2},1032,["label"])):V("",!0),1==+v(p).isCheckList[a]&&1===e.attributeFlag||1===e.attributeFlag&&2===e.insureFlag?(s(),y(i,{key:1,label:e.liabilityAttributeTypeDesc,"label-width":"44%",name:"insuredRelation",class:"riskliab-select-field-children"},{input:m((()=>[r(g,{modelValue:v(p).checkValueList[a],"onUpdate:modelValue":e=>v(p).checkValueList[a]=e,prop:{label:"displayValue",value:"displayValue"},options:(e.formula.length,e.liabilityAttributeValueList),"is-simply":!0,onClick:l=>A(e,a)},null,8,["modelValue","onUpdate:modelValue","options","onClick"])])),_:2},1032,["label"])):V("",!0)]))])))),128))])]),ue])),_:1})}}}),[["__scopeId","data-v-77a16450"]]);const se=l({name:"InsureInfos"}),de=l({...se,props:{originData:{default:()=>({})},modelValue:{default:()=>({})},defaultValue:{default:()=>({})},trialResult:{default:()=>({})}},emits:["trialChange"],setup(l,{expose:u,emit:m}){const c=l,y=t(null),p=t({}),V=t({}),b=i({personalInfo:{},basicsAmount:"",basicsPremium:"",defaultValues:c.defaultValue,changeData:null,sValues:p.value});A("premium"),V.value=A("enumList")||{},o((()=>{}));const f=e=>{c.originData.mainRiskFlag,p.value.riskCategory=c.originData.riskCategory,p.value.riskCode=c.originData.riskCode,p.value.riskId=c.originData.riskId,p.value.riskType=c.originData.riskType,p.value.riskName=c.originData.riskName,p.value.riskType=c.originData.riskType,p.value.mainRiskCode=c.originData.mainRiskCode,p.value.mainRiskId=c.originData.mainRiskId,e?m("trialChange",p.value,e):m("trialChange",p.value)},g=(a,l)=>{l?p.value[l.key]=l.newValue:e(a).forEach((e=>{p.value[e]=a[e]})),f(l)},h=a=>{var l,i,t;1==+(null==(t=null==(i=null==(l=c.originData)?void 0:l.productRiskInsureLimitVO)?void 0:i.amountPremiumConfigVO)?void 0:t.saleMethod)?b.basicsAmount=null==a?void 0:a.initialAmount:b.basicsAmount=null==a?void 0:a.initialPremium,e(a).forEach((e=>{p.value[e]=a[e]})),f()},L=e=>{p.value.liabilityList=e,f()};return n((()=>c.defaultValue),(e=>{e&&(console.log("--default change ",e),b.defaultValues=a(e),p.value={...e})}),{deep:!0,immediate:!0}),n((()=>p.value),(e=>{b.sValues=e}),{deep:!0,immediate:!0}),u({validate:async()=>{var e;await(null==(e=y.value)?void 0:e.validate())}}),(e,a)=>{var i,t,u,o,n;return s(),d(k,null,[r(v(Q),{"v-model":v(b).sValues,"origin-data":null==(t=null==(i=l.originData)?void 0:i.productRiskInsureLimitVO)?void 0:t.amountPremiumConfigVO,"default-value":v(b).defaultValues,"trial-result":l.trialResult,onTrialChange:h},null,8,["v-model","origin-data","default-value","trial-result"]),r(v(ae),{"v-model":v(b).sValues,"use-data":v(b).sValues,"origin-data":l.originData.productRiskInsureLimitVO,"risk-info":l.originData,"default-value":v(b).defaultValues,onTrialChange:g},null,8,["v-model","use-data","origin-data","risk-info","default-value"]),r(v(ne),{"data-source-folmulate":v(p),"data-source":l.originData,params:{amountUnit:null==(o=null==(u=l.originData)?void 0:u.productRiskInsureLimitVO)?void 0:o.amountPremiumConfigVO.displayUnit,basicsAmount:v(b).basicsAmount,basicsPremium:v(b).basicsPremium,riskId:null==(n=l.originData)?void 0:n.riskId},"default-value":v(b).defaultValues,onTrialChange:L},null,8,["data-source-folmulate","data-source","params","default-value"])],64)}}});export{de as _};
