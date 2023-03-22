import{l as e}from"./ProAddress.vue_vue_type_style_index_0_scoped_true_lang-dbe922a9.js";import{_ as a,d as l,r as i,E as t,G as u,an as o,c as n,h as s,f as r,w as d,j as m,g as c,e as p,t as v,k as y,y as V,m as g,ap as k,i as b,F as f,a2 as h,bT as L,J as D,b8 as C}from"./index-f531a243.js";import{S as x}from"./index-051409f4.js";import{S as O}from"./index-79005c4d.js";import{c as _}from"./cloneDeep-aaa98338.js";import{c as F}from"./trial-79a27ca4.js";function I(e){return Object.keys(e)}const S={key:0},w={class:"custom-field"},K={key:1,class:"flex-field"},A={class:"pro-radio-wrap"},U={key:2},P={class:"pro-radio-wrap"},R={class:"custom-field"},T={key:1},j={key:3},E={class:"custom-field"},N={key:1};var q=a(l({__name:"index",props:{originData:{default:()=>({})},modelValue:{default:()=>({})}},emits:["update:modelValue","trialChange"],setup(e,{emit:a}){const l=e,b=i(l.originData),f=i(l.modelValue),h=i(1),L=()=>2===b.value.saleMethod?{label:"保费",key:"premium"}:{label:"保额",key:"amount"},D=t((()=>2===b.value.saleMethod?{label:"保费",key:"premium"}:{label:"保额",key:"amount"})),C=(...e)=>{if(1===h.value){const e=f.value[D.value.key],a=l.originData.minStepValue,i=l.originData.maxStepValue,t=l.originData.stepValue;if(+e>=+i)f.value[D.value.key]=i;else if(+e<=+a)f.value[D.value.key]=a;else{const l=+e-+a,i=Math.floor(l/+t);l%+t!=0&&(f.value[D.value.key]=+a+i*+t)}}return!0},O=()=>{const{displayType:e,requireCopies:a}=b.value,l=L().key;1===e?h.value=1:3===e&&2===a?(h.value=2,b.value.displayValues.length>=1&&(f.value[l]=b.value.displayValues[0].code||b.value.displayValues[0].value)):3===e&&1===a?(h.value=3,b.value.minCopiesValue===b.value.maxCopiesValue&&(f.value.copy=b.value.minCopiesValue),b.value.displayValues.length>=1&&(f.value[l]=b.value.displayValues[0].code||b.value.displayValues[0].value)):2===e&&(h.value=4,b.value.minCopiesValue===b.value.maxCopiesValue&&(f.value.copy=b.value.minCopiesValue),f.value.amount=b.value.copiesAmount)},_=t((()=>{if(b.value.displayValues){const e=L().key;return 1===b.value.displayValues.length&&(f.value[e]=b.value.displayValues[0].code),b.value.displayValues.map((e=>({label:e.value,value:e.code})))}return[]})),F=()=>{};return u((()=>{O(),a("update:modelValue",f.value)})),o((()=>b),(e=>{O()}),{deep:!0}),o((()=>f.value),(e=>{(()=>{if(1===h.value){const e=f.value[D.value.key],a=l.originData.minStepValue,i=l.originData.maxStepValue,t=l.originData.stepValue;if(+e>+i)return!1;if(+e<+a)return!1;if((+e-+a)%+t!=0)return!1}return!0})()&&(a("update:modelValue",e),a("trialChange",e))}),{deep:!0,immediate:!0}),(a,l)=>{const i=x,t=V,u=g,o=k;return 1===h.value?(n(),s("div",S,[r(t,{label:`基本${c(D).label}`,name:c(D).key,class:"risk-select-field"},{input:d((()=>[m("div",w,[r(i,{modelValue:f.value[c(D).key],"onUpdate:modelValue":l[0]||(l[0]=e=>f.value[c(D).key]=e),"input-width":"80px","default-value":e.originData.minStepValue,min:e.originData.minStepValue,step:e.originData.stepValue,max:e.originData.maxStepValue,onBlur:C},null,8,["modelValue","default-value","min","step","max"])])])),_:1},8,["label","name"])])):2===h.value?(n(),s("div",K,[r(o,{modelValue:f.value[c(D).key],"onUpdate:modelValue":l[2]||(l[2]=e=>f.value[c(D).key]=e),label:`基本${c(D).label}`,name:c(D).key,class:"risk-select-field"},{input:d((()=>[m("div",A,[r(u,{modelValue:f.value[c(D).key],"onUpdate:modelValue":l[1]||(l[1]=e=>f.value[c(D).key]=e),options:c(_),onclick:F},null,8,["modelValue","options"])])])),_:1},8,["modelValue","label","name"])])):3===h.value?(n(),s("div",U,[r(o,{modelValue:f.value[c(D).key],"onUpdate:modelValue":l[4]||(l[4]=e=>f.value[c(D).key]=e),label:`基本${c(D).label}`,name:c(D).key,class:"risk-select-field"},{input:d((()=>[m("div",P,[r(u,{modelValue:f.value[c(D).key],"onUpdate:modelValue":l[3]||(l[3]=e=>f.value[c(D).key]=e),options:c(_),onclick:F},null,8,["modelValue","options"])])])),_:1},8,["modelValue","label","name"]),r(t,{modelValue:f.value.copy,"onUpdate:modelValue":l[6]||(l[6]=e=>f.value.copy=e),label:"份数",name:"copy",class:"risk-select-field"},{input:d((()=>[m("div",R,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(n(),p(i,{key:0,modelValue:f.value.copy,"onUpdate:modelValue":l[5]||(l[5]=e=>f.value.copy=e),"input-width":"80px","default-value":e.originData.minCopiesValue,min:e.originData.minCopiesValue||1,step:1,max:e.originData.maxCopiesValue},null,8,["modelValue","default-value","min","max"])):(n(),s("span",T,v(e.originData.minCopiesValue),1))])])),_:1},8,["modelValue"])])):4===h.value?(n(),s("div",j,[r(t,{modelValue:f.value.copy,"onUpdate:modelValue":l[8]||(l[8]=e=>f.value.copy=e),label:"份数",name:"copy",class:"risk-select-field"},{input:d((()=>[m("div",E,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(n(),p(i,{key:0,modelValue:f.value.copy,"onUpdate:modelValue":l[7]||(l[7]=e=>f.value.copy=e),"input-width":"64px","default-value":e.originData.minCopiesValue,min:e.originData.minCopiesValue||1,step:1,max:e.originData.maxCopiesValue},null,8,["modelValue","default-value","min","max"])):(n(),s("span",N,v(e.originData.minCopiesValue),1))])])),_:1},8,["modelValue"])])):y("",!0)}}}),[["__scopeId","data-v-851c18d2"]]);const M=[{name:"年金领取期间",type:"checkbox",configKey:["annuityDrawValueList"],valueKey:"annuityDrawDate"},{name:"领取频率",type:"checkbox",configKey:["annuityDrawFrequencyList"],valueKey:"annuityDrawType"},{name:"交费方式",type:"checkbox",configKey:["paymentFrequencyList"],valueKey:"paymentFrequency",ruleKey:"paymentTypeRule"},{name:"交费期间",type:"checkbox",configKey:["paymentPeriodValueList"],valueKey:"chargePeriod",ruleKey:"paymentPeriodRule"},{name:"保障期间",type:"checkbox",configKey:["insurancePeriodValueList"],valueKey:"coveragePeriod",ruleKey:"insurancePeriodRule"}];const $={class:"pro-radio-wrap"};var J=a(l({__name:"index",props:{originData:{default:()=>({})},modelValue:{default:()=>({})},riskInfo:{default:()=>({})}},emits:["trialChange"],setup(a,{emit:l}){const t=a,v=i(t.originData),V=i(t.modelValue);i(1);const h=()=>{M.forEach((a=>{const l=e.exports.get(t.originData,a.configKey);"checkbox"===a.type&&l&&l.length>0&&(V.value[a.valueKey]=l[0].code)}))};return u((()=>{h()})),o((()=>v.value),(e=>{h()}),{deep:!0,immediate:!0}),o((()=>V.value),(e=>{l("trialChange",e)}),{deep:!0,immediate:!0}),(l,i)=>{const u=g,o=k;return n(!0),s(f,null,b(c(M),(l=>(n(),s(f,null,[c(e.exports.get)(a.originData,l.configKey)&&(1===a.riskInfo.mainRiskFlag||l.ruleKey&&2===c(e.exports.get)(a.originData,l.ruleKey)||!l.ruleKey)?(n(),s("div",{key:a.riskInfo.riskCode+"_"+l.name},["checkbox"===l.type?(n(),p(o,{key:0,modelValue:V.value[l.valueKey],"onUpdate:modelValue":e=>V.value[l.valueKey]=e,label:l.name,name:l.valueKey,class:"risk-select-field"},{input:d((()=>{return[m("div",$,[r(u,{modelValue:V.value[l.valueKey],"onUpdate:modelValue":e=>V.value[l.valueKey]=e,options:(a=l.configKey,e.exports.get(t.originData,a).map((e=>({label:e.value,value:e.code}))))},null,8,["modelValue","onUpdate:modelValue","options"])])];var a})),_:2},1032,["modelValue","onUpdate:modelValue","label","name"])):y("",!0)])):y("",!0)],64)))),256)}}}),[["__scopeId","data-v-4dd3201c"]]);const z={class:"com-risk-liabilityinfo"},B={class:"item-wrap"},G={key:0},H=m("div",{class:"cell-content"},null,-1),Q=l({__name:"index",props:{dataSource:{default:()=>({})},modelValue:{default:()=>({})},dataSourceFolmulate:{default:()=>({})},params:{default:()=>({amountUnit:"",basicsAmount:"",basicsPremium:"",riskId:""})}},emits:["trialChange"],setup(e,{emit:a}){const l=e,v=i({formInfo:l.dataSource,isCheckList:[],checkValueList:[],liabilityVOList:[]}),V=t((()=>_(l.dataSourceFolmulate))),D=(e,a,l)=>{1===l?v.value.liabilityVOList.push({liabilityValue:{...e,liabilityValue:null==e?void 0:e.liabilityAttributeValueList[0]},key:a,isSwitchOn:"1"}):v.value.liabilityVOList.push({liabilityValue:{...e,liabilityValue:null==e?void 0:e.liabilityAttributeValueList[0]},key:a,isSwitchOn:"2"})};return o((()=>V.value),((e,a)=>{var i,t;const u=null==(i=l.dataSourceFolmulate)?void 0:i.amount,o=null==(t=l.dataSourceFolmulate)?void 0:t.premium,n={amountUnit:l.params.amountUnit,basicsAmount:u,basicsPremium:o,riskId:l.params.riskId},s=l.dataSource.riskLiabilityInfoVOList.map((async l=>{if(l.formula.length>0&&(u||o)&&((null==e?void 0:e.amount)!==(null==a?void 0:a.amount)||(null==e?void 0:e.premium)!==(null==a?void 0:a.premium))){const{code:e,data:a}=await F({...n,riskLiabilities:[l]});return"10000"===e?(l.liabilityAttributeValueList=a[0].formulaResult,{...l,liabilityAttributeValueList:a[0]}):l}}));console.log("liabilityItem>>>>>>",s),console.log("riskLiabilityInfoVOList>>>>>>",l.dataSource.riskLiabilityInfoVOList)}),{deep:!0,immediate:!0}),o((()=>v.value.liabilityVOList),(e=>{const l=v.value.liabilityVOList.filter((e=>"1"===e.isSwitchOn)).map((e=>({...e.liabilityValue})));a("trialChange",l)}),{deep:!0,immediate:!0}),u((()=>{l.dataSource.riskLiabilityInfoVOList.map(((e,a)=>{const l=e.liabilityAttributeValueList.length>0&&0===e.formula.length&&e.liabilityAttributeValueList[0].actualValue;return v.value.checkValueList[a]=l,1!=+e.showFlag&&v.value.liabilityVOList.push({liabilityValue:e,key:a,isSwitchOn:"1"}),1==+e.showFlag&&(1===e.attributeFlag&&2===e.insureFlag&&0===e.formula.length&&D(e,a,1),1===e.attributeFlag&&1===e.insureFlag&&0===e.formula.length&&D(e,a,2),2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&2===e.insureFlag&&D(e,a,1),2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&1===e.insureFlag&&D(e,a,2)),null}))})),(a,l)=>{const i=O,t=k,u=h,o=L;return n(),p(o,null,{default:d((()=>[m("div",z,[m("div",B,[(n(!0),s(f,null,b(e.dataSource.riskLiabilityInfoVOList,((e,a)=>(n(),s("div",{key:a},[1!=+e.showFlag||2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&2===e.insureFlag?y("",!0):(n(),s("div",G,[r(t,{label:`${e.liabilityName}`,"label-width":"40%",name:"insuredRelation"},{input:d((()=>[1==+e.insureFlag?(n(),p(i,{key:0,modelValue:c(v).isCheckList[a],"onUpdate:modelValue":e=>c(v).isCheckList[a]=e,"active-value":"1","inactive-value":"2",size:"26px",onClick:l=>((e,a)=>{const l=v.value.liabilityVOList.map((e=>e.key)),i=0===e.liabilityAttributeValueList.length&&0===e.formula.length,t=v.value.isCheckList[a];console.log("key---------",l),console.log("(key_list).indexOf(index)",l.indexOf(a)),i&&-1===l.indexOf(a)&&t&&v.value.liabilityVOList.push({liabilityValue:e,key:a,isSwitchOn:v.value.isCheckList[a]}),-1!==l.indexOf(a)&&v.value.liabilityVOList.forEach((e=>{e.key===a&&(e.isSwitchOn=v.value.isCheckList[a])}))})(e,a)},null,8,["modelValue","onUpdate:modelValue","onClick"])):y("",!0)])),_:2},1032,["label"]),1==+c(v).isCheckList[a]&&1===e.attributeFlag||1===e.attributeFlag&&2===e.insureFlag?(n(),p(t,{key:0,label:e.liabilityAttributeTypeDesc,"label-width":"40%",name:"insuredRelation"},{input:d((()=>[r(g,{modelValue:c(v).checkValueList[a],"onUpdate:modelValue":e=>c(v).checkValueList[a]=e,prop:{label:"displayValue",value:"actualValue"},options:(e.formula.length,e.liabilityAttributeValueList),"is-simply":!0,onClick:l=>((e,a)=>{console.log("keykeykey>>>>>>",a);const l=e.liabilityAttributeValueList.filter((e=>e.actualValue===v.value.checkValueList[a])),i=JSON.parse(JSON.stringify(l))[0],t={...e,liabilityValue:i};v.value.liabilityVOList.length>0&&Object.keys(v.value.checkValueList).indexOf(a)&&(v.value.liabilityVOList=v.value.liabilityVOList.filter((e=>e.key!==a))),v.value.liabilityVOList.push({liabilityValue:t,key:a,isSwitchOn:"1"}),console.log("state.liabilityVOList>>>>>>",v.value.liabilityVOList)})(e,a)},null,8,["modelValue","onUpdate:modelValue","options","onClick"])])),_:2},1032,["label"])):y("",!0)]))])))),128))])]),H,r(u)])),_:1})}}});var W=a(l({__name:"index",props:{originData:{default:()=>({})},modelValue:{default:()=>({})}},emits:["trialChange"],setup(a,{expose:l,emit:t}){const o=a,d=D({personalInfo:{},basicsAmount:"",basicsPremium:""}),m=i(null),p=i({}),v=i({});C("premium"),v.value=C("enumList")||{},u((()=>{}));const V=e.exports.debounce((()=>{o.originData.mainRiskFlag,p.value.riskCategory=o.originData.riskCategory,p.value.riskCode=o.originData.riskCode,p.value.riskId=o.originData.riskId,p.value.riskType=o.originData.riskType,p.value.riskName=o.originData.riskName,p.value.riskType=o.originData.riskType,p.value.mainRiskCode=o.originData.mainRiskCode,p.value.mainRiskId=o.originData.mainRiskId,t("trialChange",p.value)}),300),g=e=>{I(e).forEach((a=>{p.value[a]=e[a]})),V()},k=e=>{var a,l;1==+(null==(l=null==(a=o.originData)?void 0:a.productRiskInsureLimitVO)?void 0:l.amountPremiumConfigVO.saleMethod)?d.basicsAmount=null==e?void 0:e.amount:d.basicsAmount=null==e?void 0:e.premium,I(e).forEach((a=>{p.value[a]=e[a]})),V()},b=e=>{p.value.liabilityVOList=e,V()};return l({validate:async()=>{var e;await(null==(e=m.value)?void 0:e.validate())}}),(e,l)=>{var i,t,u,o,m,v;return 1===(null==(i=a.originData)?void 0:i.factorDisPlayFlag)?(n(),s(f,{key:0},[r(c(q),{"v-model":c(p),"origin-data":null==(u=null==(t=a.originData)?void 0:t.productRiskInsureLimitVO)?void 0:u.amountPremiumConfigVO,onTrialChange:k},null,8,["v-model","origin-data"]),r(c(J),{"v-model":c(p),"origin-data":a.originData.productRiskInsureLimitVO,"risk-info":a.originData,onTrialChange:g},null,8,["v-model","origin-data","risk-info"]),r(c(Q),{"data-source-folmulate":c(p),"data-source":a.originData,params:{amountUnit:null==(m=null==(o=a.originData)?void 0:o.productRiskInsureLimitVO)?void 0:m.amountPremiumConfigVO.displayUnit,basicsAmount:c(d).basicsAmount,basicsPremium:c(d).basicsPremium,riskId:null==(v=a.originData)?void 0:v.riskId},onTrialChange:b},null,8,["data-source-folmulate","data-source","params"])],64)):y("",!0)}}}),[["__scopeId","data-v-5e4c8598"]]);export{W as I,M as P};
