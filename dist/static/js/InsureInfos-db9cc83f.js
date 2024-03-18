import{d as e,r as a,j as l,k as i,l as t,E as u,an as o,o as n,c as s,b as d,w as r,a as m,u as c,p as v,e as y,f as p,F as V,_ as b,bg as k,bh as f,s as g,ap as h,aT as L,bi as C,bj as D,b1 as I,b2 as A,aB as x,bk as O,m as S,aV as F,aW as K}from"./index-e61895f6.js";import{S as w,g as P,o as _}from"./index-4497ceab.js";import{a as U,b as R}from"./infoCollection-4060f24f.js";import"./index-b5389c6f.js";import{f as N}from"./trial-b5a25ec6.js";import{L as T}from"./product-7bbf9c44.js";const E={key:0},j={class:"custom-field"},$={key:1,class:"flex-field"},Y={class:"pro-radio-wrap"},J={key:2},M={class:"pro-radio-wrap"},q={class:"custom-field"},B={key:1},G={key:3},X={class:"custom-field"},z={key:1},H={class:"custom-field"},W={key:0},Q={key:1},Z={key:4},ee=e({name:"BaoeBaofei"});var ae=b(e({...ee,props:{originData:{default:()=>({})},modelValue:{default:()=>({})},defaultValue:{default:()=>({})},trialResult:{default:0}},emits:["update:modelValue","trialChange"],setup(e,{emit:b}){const g=e;a({hadSetDefault:!1});const h=l(),L=l(),C=l(0),D=()=>2===h.value.saleMethod?{label:"首年保费",key:"unitPremium"}:{label:"基本保险金额",key:"unitAmount"},I=()=>{switch(`${h.value.displayUnit}`){case U.YUAN:return"元";case U.MONTH_SALARY:return"倍月薪";case U.MILLION:return"万元";case U.COPY:return"份"}return""},A=i((()=>2===h.value.saleMethod?{label:"首年保费",key:"unitPremium"}:{label:"基本保险金额",key:"unitAmount"})),x=i((()=>{if(h.value.displayValues){const e=D().key;return 1!==h.value.displayValues.length||L.value.riskCode||(L.value[e]=h.value.displayValues[0].code),h.value.displayValues.map((e=>({label:e.value,value:e.code})))}return[]})),O=()=>{};return t((()=>{})),u((()=>h),(e=>{(()=>{const{displayType:e,requireCopies:a,displayValues:l,initialAmount:i,copiesAmount:t,minCopiesValue:u,maxCopiesValue:o}=h.value,n=D().key,s=!L.value.riskCode;`${e}`===R.STEP?C.value=1:`${e}`===R.FIXED&&2===a?(C.value=2,l.length>=1&&s&&!L.value[n]&&(L.value[n]=l[0].code||l[0].value)):`${e}`===R.FIXED&&1===a?(C.value=3,u===o&&s&&!L.value.copy&&(L.value.copy=u),l.length>=1&&s&&!L.value[n]&&(L.value[n]=l[0].code||l[0].value)):`${e}`===R.COPY&&(C.value=4,u===o&&s&&!L.value.copy&&(L.value.copy=u),s&&!i&&(L.value.unitAmount=t))})()}),{deep:!0}),u((()=>g.defaultValue),((e,a)=>{(null==e?void 0:e.riskCode)&&o(e,a)&&(L.value={...L.value,unitAmount:e.unitAmount,unitPremium:e.unitPremium,copy:e.copy})}),{deep:!0,immediate:!0}),u((()=>g.originData),(e=>{h.value=e}),{immediate:!0,deep:!0}),u((()=>g.modelValue),(e=>{L.value=e}),{deep:!0,immediate:!0}),u((()=>L.value),(e=>{(()=>{if(1===C.value){const e=L.value[A.value.key],a=g.originData.minStepValue,l=g.originData.maxStepValue,i=g.originData.stepValue;if(+e>+l)return!1;if(+e<+a)return!1;if((+e-+a)%+i!=0)return!1}return!0})()&&(b("update:modelValue",e),b("trialChange",e))}),{deep:!0,immediate:!0}),(e,a)=>{const l=w,i=k,t=f;return n(),s(V,null,[1===C.value?(n(),s("div",E,[d(i,{label:`${c(A).label}`,name:c(A).key,class:"risk-select-field"},{input:r((()=>[m("div",j,[d(l,{modelValue:L.value[c(A).key],"onUpdate:modelValue":a[0]||(a[0]=e=>L.value[c(A).key]=e),"input-width":"80px","default-value":e.originData.minStepValue,min:e.originData.minStepValue,step:e.originData.stepValue,max:e.originData.maxStepValue||1/0,theme:"round"},null,8,["modelValue","default-value","min","step","max"])])])),_:1},8,["label","name"])])):2===C.value?(n(),s("div",$,[d(i,{modelValue:L.value[c(A).key],"onUpdate:modelValue":a[2]||(a[2]=e=>L.value[c(A).key]=e),label:`${c(A).label}`,name:c(A).key,class:"risk-select-field"},{input:r((()=>[m("div",Y,[d(t,{modelValue:L.value[c(A).key],"onUpdate:modelValue":a[1]||(a[1]=e=>L.value[c(A).key]=e),options:c(x),onclick:O},null,8,["modelValue","options"])])])),_:1},8,["modelValue","label","name"])])):3===C.value?(n(),s("div",J,[d(i,{modelValue:L.value[c(A).key],"onUpdate:modelValue":a[4]||(a[4]=e=>L.value[c(A).key]=e),label:`${c(A).label}`,name:c(A).key,class:"risk-select-field"},{input:r((()=>[m("div",M,[d(t,{modelValue:L.value[c(A).key],"onUpdate:modelValue":a[3]||(a[3]=e=>L.value[c(A).key]=e),options:c(x),onclick:O},null,8,["modelValue","options"])])])),_:1},8,["modelValue","label","name"]),m("div",null,[d(i,{modelValue:L.value.copy,"onUpdate:modelValue":a[6]||(a[6]=e=>L.value.copy=e),label:"份数",name:"copy",class:"risk-select-field"},{input:r((()=>[m("div",q,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(n(),v(l,{key:0,modelValue:L.value.copy,"onUpdate:modelValue":a[5]||(a[5]=e=>L.value.copy=e),"input-width":"80px","default-value":e.originData.minCopiesValue,min:e.originData.minCopiesValue||1,step:1,max:e.originData.maxCopiesValue||1/0,theme:"round"},null,8,["modelValue","default-value","min","max"])):(n(),s("span",B,y(e.originData.minCopiesValue),1))])])),_:1},8,["modelValue"])])])):4===C.value?(n(),s("div",G,[d(i,{modelValue:L.value.copy,"onUpdate:modelValue":a[8]||(a[8]=e=>L.value.copy=e),label:"份数",name:"copy",class:"risk-select-field"},{input:r((()=>[m("div",X,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(n(),v(l,{key:0,modelValue:L.value.copy,"onUpdate:modelValue":a[7]||(a[7]=e=>L.value.copy=e),"input-width":"64px","default-value":e.originData.minCopiesValue,min:e.originData.minCopiesValue||1,step:1,max:e.originData.maxCopiesValue||1/0,theme:"round"},null,8,["modelValue","default-value","min","max"])):(n(),s("span",z,y(e.originData.minCopiesValue),1))])])),_:1},8,["modelValue"]),d(i,{label:c(A).label,name:"copyAmount",class:"risk-select-field"},{input:r((()=>[m("div",H,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(n(),s("span",W,y(+e.originData.copiesAmount*+L.value.copy+I()),1)):(n(),s("span",Q,y(+e.originData.minCopiesValue*+e.originData.copiesAmount+I()),1))])])),_:1},8,["label"])])):p("",!0),2===h.value.saleMethod&&e.trialResult>0?(n(),s("div",Z,[d(i,{label:"基本保险金额",class:"risk-select-field"},{input:r((()=>[m("span",null,y(e.trialResult+I()),1)])),_:1})])):p("",!0)],64)}}}),[["__scopeId","data-v-788f13b8"]]);const le=[{name:"年金领取期间",type:"checkbox",configKey:["annuityDrawValueList"],valueKey:"annuityDrawDate"},{name:"领取频率",type:"checkbox",configKey:["annuityDrawFrequencyList"],valueKey:"annuityDrawFrequency"},{name:"交费方式",type:"checkbox",configKey:["paymentFrequencyList"],valueKey:"paymentFrequency",ruleKey:"paymentTypeRule"},{name:"交费期间",type:"checkbox",configKey:["paymentPeriodValueList"],valueKey:"chargePeriod",ruleKey:"paymentPeriodRule",ruleValueKey:"chargePeriod"},{name:"保险期间",type:"checkbox",configKey:["insurancePeriodValueList"],valueKey:"coveragePeriod",ruleKey:"insurancePeriodRule",ruleValueKey:"chargePeriod"}];const ie={class:"pro-radio-wrap"},te=e({name:"ProductKeys"});var ue=b(e({...te,props:{originData:{default:()=>({})},modelValue:{default:()=>({})},riskInfo:{default:()=>({})},defaultValue:{default:()=>({})},useData:{default:()=>({})}},emits:["trialChange","inputChange"],setup(e,{emit:a}){const o=e,y=l(o.originData),b=l(o.modelValue);l(1);const h=i((()=>e=>{let a=P(o.originData,e);const l=P(o.defaultValue,e);return(null==l?void 0:l.length)&&(a=l),(a||[]).map((e=>{const a=l?l.find((a=>a.code===e.code)):null;return{label:e.value,value:e.code,disabled:!!(null==a?void 0:a.useFlag)&&1!==a.useFlag}}))})),L=()=>{le.forEach((e=>{const a=P(o.originData,e.configKey);"checkbox"===e.type&&a&&a.length>0&&!b.value.riskCode&&(b.value[e.valueKey]=a[0].code)}))};return t((()=>{L()})),u((()=>o.defaultValue),(e=>{(null==e?void 0:e.riskCode)&&(b.value=JSON.parse(JSON.stringify(e)))}),{deep:!0,immediate:!0}),u((()=>o.modelValue),(e=>{Object.assign(b.value,e)}),{deep:!0,immediate:!0}),u((()=>y.value),(e=>{L()}),{deep:!0,immediate:!0}),u((()=>JSON.stringify(b.value)),((e,l)=>{const i=e&&JSON.parse(e)||{};console.log("---v new = ",i);const t=l&&JSON.parse(l)||{};let u=null;le.forEach((e=>{i[e.valueKey]&&t[e.valueKey]&&i[e.valueKey]!==t[e.valueKey]&&(u||(u={key:e.valueKey,oldValue:t[e.valueKey],newValue:i[e.valueKey],riskCode:o.riskInfo.riskCode}))})),e&&a("trialChange",JSON.parse(e),u)}),{deep:!0,immediate:!0}),(e,a)=>{const l=f,i=k;return n(!0),s(V,null,g(c(le),(a=>(n(),s(V,null,[c(P)(e.originData,a.configKey)||c(P)(e.originData,a.ruleKey)?(n(),s("div",{key:e.riskInfo.riskCode+"_"+a.name},["checkbox"===a.type?(n(),v(i,{key:0,modelValue:b.value[a.valueKey],"onUpdate:modelValue":e=>b.value[a.valueKey]=e,label:a.name,name:a.valueKey,class:"risk-select-field"},{input:r((()=>[m("div",ie,[d(l,{modelValue:b.value[a.valueKey],"onUpdate:modelValue":[e=>b.value[a.valueKey]=e,e=>((e,a)=>{console.log("-------change",e,a)})(e,a.valueKey)],options:c(h)(a.configKey)},null,8,["modelValue","onUpdate:modelValue","options"])])])),_:2},1032,["modelValue","onUpdate:modelValue","label","name"])):p("",!0)])):p("",!0)],64)))),256)}}}),[["__scopeId","data-v-d3c1d622"]]);const oe={class:"com-risk-liabilityinfo"},ne={class:"item-wrap"},se={key:0},de=(e=>(I("data-v-7cfce85f"),e=e(),A(),e))((()=>m("div",{class:"cell-content"},null,-1))),re=e({name:"riskLiabilityInfo"});var me=b(e({...re,props:{dataSource:{default:()=>({})},modelValue:{default:()=>({})},dataSourceFolmulate:{default:()=>({})},params:{default:()=>({amountUnit:"",basicsAmount:"",basicsPremium:"",riskId:""})},defaultValue:{default:()=>({})}},emits:["trialChange"],setup(e,{emit:a}){const o=e,y=l({formInfo:o.dataSource,isCheckList:[],checkValueList:[],liabilityList:[],signLiabilityClick:[]}),b=(e,a)=>{y.value.signLiabilityClick.push({item:e,index:a})},I=(e,a)=>{const{riskLiabilityInfoVOList:l,riskLiabilityCollocationVOList:i}=o.dataSource,t=l[e].liabilityId,u=(i||[]).find((e=>e.relatedLiabilityId===t||e.collocationLiabilityId===t))||{};let n=null;u.collocationLiabilityId===t?(n=u.relatedLiabilityId,u.collocationType===T.YI_LAI&&(n=u.collocationLiabilityId)):n=u.collocationLiabilityId;const s=l.findIndex((e=>e.liabilityId===n));((e,a,l)=>{y.value.isCheckList[e]===`${x.YES}`?l===T.BANG_DING||l===T.YI_LAI?y.value.isCheckList[a]="1":y.value.isCheckList[a]="2":l===T.BANG_DING?y.value.isCheckList[a]="2":l===T.YI_LAI&&(y.value.isCheckList[a]=e!==a?"3":"2")})(e,s,u.collocationType),a(l[s],s,!0)},A=(e,a,l)=>{var i,t;const u=((null==(i=y.value)?void 0:i.liabilityList)||[]).map((e=>e.key)),o=0===(null==e?void 0:e.liabilityAttributeValueList.length)&&0===(null==e?void 0:e.formula.length),n=y.value.isCheckList[a];o&&-1===u.indexOf(a)&&n&&y.value.liabilityList.push({liabilityValue:e,key:a,isSwitchOn:y.value.isCheckList[a]}),"1"===n?b(e,a):y.value.signLiabilityClick.splice(a,1),-1!==u.indexOf(a)&&((null==(t=y.value)?void 0:t.liabilityList)||[]).forEach((e=>{e.key===a&&(e.isSwitchOn=y.value.isCheckList[a])})),l||I(a,A)},O=(e,a)=>{const l=e.liabilityAttributeValueList.filter((e=>e.displayValue===y.value.checkValueList[a])),i=JSON.parse(JSON.stringify(l))[0]||e.liabilityAttributeValueList[0],t={...e,liabilityValue:i};y.value.liabilityList.length>0&&Object.keys(y.value.checkValueList).indexOf(a)&&(y.value.liabilityList=y.value.liabilityList.filter((e=>e.key!==a))),y.value.checkValueList[a]=i.displayValue,y.value.liabilityList.push({liabilityValue:t,key:a,isSwitchOn:"1"})},S=i((()=>h(o.dataSourceFolmulate))),F=(e,a,l)=>{1===l?y.value.liabilityList.push({liabilityValue:{...e,liabilityValue:null==e?void 0:e.liabilityAttributeValueList[0]},key:a,isSwitchOn:"1"}):y.value.liabilityList.push({liabilityValue:{...e,liabilityValue:null==e?void 0:e.liabilityAttributeValueList[0]},key:a,isSwitchOn:"2"})};u((()=>S.value),((e,a)=>{var l,i,t;const u=null==(l=o.dataSourceFolmulate)?void 0:l.initialAmount,n=null==(i=o.dataSourceFolmulate)?void 0:i.initialPremium,s={amountUnit:o.params.amountUnit,basicsAmount:u,basicsPremium:n,riskId:o.params.riskId};((null==(t=null==o?void 0:o.dataSource)?void 0:t.riskLiabilityInfoVOList)||[]).map((async l=>{if(l.formula.length>0&&(u||n)&&((null==e?void 0:e.initialAmount)!==(null==a?void 0:a.initialAmount)||(null==e?void 0:e.initialPremium)!==(null==a?void 0:a.initialPremium))){const{code:e,data:a}=await N({...s,riskLiabilities:[l]});if("10000"===e){if(l.liabilityAttributeValueList=a[0].formulaResult,y.value.signLiabilityClick.length>0){const e=y.value.signLiabilityClick.find((e=>e.item.liabilityCode===l.liabilityCode));e&&O(e.item,e.index)}return{...l,liabilityAttributeValueList:a[0]}}return l}}))}),{deep:!0,immediate:!0}),u((()=>y.value.liabilityList),L((e=>{const l=y.value.liabilityList.filter((e=>"1"===e.isSwitchOn)).map((e=>({...e.liabilityValue})));a("trialChange",l)}),300),{deep:!0,immediate:!0}),t((()=>{var e;console.log("----mounted"),((null==(e=null==o?void 0:o.dataSource)?void 0:e.riskLiabilityInfoVOList)||[]).map(((e,a)=>{const l=e.liabilityAttributeValueList.length>0&&0===e.formula.length&&e.liabilityAttributeValueList[0].displayValue;return y.value.checkValueList[a]||(y.value.checkValueList[a]=l),1!=+e.showFlag&&y.value.liabilityList.push({liabilityValue:e,key:a,isSwitchOn:"1"}),1==+e.showFlag&&(1===e.attributeFlag&&2===e.insureFlag&&0===e.formula.length&&F(e,a,1),1===e.attributeFlag&&1===e.insureFlag&&0===e.formula.length&&F(e,a,2),2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&2===e.insureFlag&&F(e,a,1),2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&1===e.insureFlag&&F(e,a,2)),null}))}));const K=l([]);return u((()=>o.dataSource.riskLiabilityInfoVOList),L((e=>{K.value=(e||[]).map((e=>{const a=(o.dataSource.riskLiabilityCollocationVOList||[]).find((a=>a.collocationLiabilityId===e.liabilityId));return{...e,relation:null==a?void 0:a.collocationType}}))}),300),{deep:!0,immediate:!0}),u((()=>o.defaultValue),L((e=>{var a;(null==e?void 0:e.riskCode)&&e.liabilityList&&(y.value.signLiabilityClick=[],((null==(a=null==o?void 0:o.dataSource)?void 0:a.riskLiabilityInfoVOList)||[]).forEach(((a,l)=>{var i;const t=null==e?void 0:e.liabilityList.find((e=>e.liabilityCode===a.liabilityCode));t&&(y.value.isCheckList[l]="1",y.value.checkValueList[l]=null==(i=null==t?void 0:t.liabilityValue)?void 0:i.displayValue,1==+a.showFlag&&2==+a.optionalFlag?A(a,l):b(a,l))})))}),300),{deep:!0,immediate:!0}),(e,a)=>{const l=C,i=k,t=D;return n(),v(t,null,{default:r((()=>[m("div",oe,[m("div",ne,[(n(!0),s(V,null,g(c(K),((e,a)=>(n(),s("div",{key:a},[1!=+e.showFlag||2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&2===e.insureFlag?p("",!0):(n(),s("div",se,[(c(y).isCheckList[a]?"3"!==c(y).isCheckList[a]:e.relation!==c(T).YI_LAI)?(n(),v(i,{key:0,label:`${e.liabilityName}`,"label-width":"44%",name:"insuredRelation",class:"riskliab-select-field"},{input:r((()=>[1==+e.insureFlag?(n(),v(l,{key:0,modelValue:c(y).isCheckList[a],"onUpdate:modelValue":e=>c(y).isCheckList[a]=e,"active-value":"1","inactive-value":"2",size:"0.68rem",onClick:l=>A(e,a)},null,8,["modelValue","onUpdate:modelValue","onClick"])):p("",!0)])),_:2},1032,["label"])):p("",!0),1==+c(y).isCheckList[a]&&1===e.attributeFlag||1===e.attributeFlag&&2===e.insureFlag?(n(),v(i,{key:1,label:e.liabilityAttributeTypeDesc,"label-width":"44%",name:"insuredRelation",class:"riskliab-select-field-children"},{input:r((()=>[d(f,{modelValue:c(y).checkValueList[a],"onUpdate:modelValue":e=>c(y).checkValueList[a]=e,prop:{label:"displayValue",value:"displayValue"},options:(e.formula.length,e.liabilityAttributeValueList),"is-simply":!0,onClick:l=>O(e,a)},null,8,["modelValue","onUpdate:modelValue","options","onClick"])])),_:2},1032,["label"])):p("",!0)]))])))),128))])]),de])),_:1})}}}),[["__scopeId","data-v-7cfce85f"]]);const ce=e({name:"InsureInfos"}),ve=e({...ce,props:{originData:{default:()=>({})},defaultValue:{default:()=>({})},trialResult:{default:0}},emits:["trialChange"],setup(e,{expose:i,emit:s}){const m=e,y=l(null),p=l({}),V=l({}),b=a({personalInfo:{},basicsAmount:"",basicsPremium:"",defaultValues:m.defaultValue,changeData:null,sValues:p.value});O("premium"),V.value=O("enumList")||{},t((()=>{}));const k=e=>{m.originData.mainRiskFlag,p.value.riskCategory=m.originData.riskCategory,p.value.riskCode=m.originData.riskCode,p.value.riskId=m.originData.riskId,p.value.riskType=m.originData.riskType,p.value.riskName=m.originData.riskName,p.value.riskType=m.originData.riskType,p.value.mainRiskCode=m.originData.mainRiskCode,p.value.mainRiskId=m.originData.mainRiskId,p.value.exemptFlag=m.originData.exemptFlag,e?s("trialChange",p.value,e):s("trialChange",p.value)},f=(e,a)=>{a?p.value[a.key]=a.newValue:_(e).forEach((a=>{p.value[a]=e[a]})),k(a)},g=e=>{var a,l,i;1==+(null==(i=null==(l=null==(a=m.originData)?void 0:a.productRiskInsureLimitVO)?void 0:l.amountPremiumConfigVO)?void 0:i.saleMethod)?b.basicsAmount=null==e?void 0:e.initialAmount:b.basicsAmount=null==e?void 0:e.initialPremium,_(e).forEach((a=>{p.value[a]=e[a]})),k()},L=e=>{p.value.liabilityList=e,k()};return u((()=>m.defaultValue),((e,a)=>{o(e,a)||(b.defaultValues=h(e),p.value={...e})}),{deep:!0,immediate:!0}),u((()=>p.value),(e=>{b.sValues=e}),{deep:!0,immediate:!0}),i({validate:async()=>{var e;await(null==(e=y.value)?void 0:e.validate())}}),(e,a)=>{const l=S("dev");return F((n(),v(l,null,{default:r((()=>{var l,i,t,u,o;return[d(c(ae),{modelValue:c(b).sValues,"onUpdate:modelValue":a[0]||(a[0]=e=>c(b).sValues=e),"origin-data":null==(i=null==(l=e.originData)?void 0:l.productRiskInsureLimitVO)?void 0:i.amountPremiumConfigVO,"default-value":c(b).defaultValues,"trial-result":e.trialResult,onTrialChange:g},null,8,["modelValue","origin-data","default-value","trial-result"]),d(c(ue),{"v-model":c(b).sValues,"use-data":c(b).sValues,"origin-data":e.originData.productRiskInsureLimitVO,"risk-info":e.originData,"default-value":c(b).defaultValues,onTrialChange:f},null,8,["v-model","use-data","origin-data","risk-info","default-value"]),d(c(me),{"data-source-folmulate":c(p),"data-source":e.originData,params:{amountUnit:null==(u=null==(t=e.originData)?void 0:t.productRiskInsureLimitVO)?void 0:u.amountPremiumConfigVO.displayUnit,basicsAmount:c(b).basicsAmount,basicsPremium:c(b).basicsPremium,riskId:null==(o=e.originData)?void 0:o.riskId},"default-value":c(b).defaultValues,onTrialChange:L},null,8,["data-source-folmulate","data-source","params","default-value"])]})),_:1},512)),[[K,e.originData.exemptFlag===c(x).NO]])}}});export{ve as _};
