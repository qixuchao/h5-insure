!function(){var e=document.createElement("style");e.innerHTML=".flex-form .flex-field[data-v-851c18d2]{display:flex;flex-direction:column}.gap[data-v-851c18d2]{display:inline-block;width:1.33333rem;height:.42667rem;text-align:center;line-height:.42667rem;background-color:#e9e7e7;border:1px solid rgb(205,205,205)}[data-v-851c18d2] .risk-select-field{align-items:baseline!important}.trail-personal-info[data-v-a2c06736] .com-card-wrap .header{margin-left:0}.trail-personal-info[data-v-a2c06736] .com-van-field:last-child:after{display:block}.flex-form .flex-field[data-v-4dd3201c]{display:flex;flex-direction:column}.gap[data-v-4dd3201c]{display:inline-block;width:1.33333rem;height:.42667rem;text-align:center;line-height:.42667rem;background-color:#e9e7e7;border:1px solid rgb(205,205,205)}[data-v-4dd3201c] .risk-select-field{align-items:baseline!important}.com-risk-card-wrapper.part-card[data-v-5e4c8598]{background-color:#fff;border-bottom:.26667rem solid var(--zaui-global-bg, #f2f5fc)}.com-risk-card-wrapper .delete-risk[data-v-5e4c8598]{display:flex;align-items:center;justify-content:center;margin-top:.06667rem}.com-risk-card-wrapper .delete-risk .svg-icon[data-v-5e4c8598]{font-size:.42667rem}.com-risk-card-wrapper .custom-field[data-v-5e4c8598]{display:flex;flex-direction:column}.com-risk-card-wrapper .custom-field .field-tip[data-v-5e4c8598]{font-size:.32rem;font-weight:400;color:#99a9c0;line-height:1;margin:0 0 .10667rem}[data-v-5e4c8598] .van-field{align-items:baseline}\n",document.head.appendChild(e),System.register(["./ProAddress.vue_vue_type_style_index_0_scoped_true_lang-legacy-9bc597e4.js","./index-legacy-16f6dda2.js","./index-legacy-e59024e8.js","./index-legacy-210e9303.js","./cloneDeep-legacy-06534257.js","./trial-legacy-a0f29fd9.js"],(function(e){"use strict";var a,l,i,t,u,o,n,s,r,d,c,m,p,v,y,g,V,k,f,b,h,x,L,D,C,O,w,_,S;return{setters:[function(e){a=e.l},function(e){l=e._,i=e.d,t=e.r,u=e.E,o=e.G,n=e.an,s=e.c,r=e.h,d=e.f,c=e.w,m=e.j,p=e.g,v=e.e,y=e.t,g=e.k,V=e.y,k=e.m,f=e.ap,b=e.i,h=e.F,x=e.a2,L=e.bT,D=e.J,C=e.b8},function(e){O=e.S},function(e){w=e.S},function(e){_=e.c},function(e){S=e.c}],execute:function(){function F(e){return Object.keys(e)}const I={key:0},K={class:"custom-field"},A={key:1,class:"flex-field"},U={class:"pro-radio-wrap"},P={key:2},R={class:"pro-radio-wrap"},T={class:"custom-field"},j={key:1},E={key:3},M={class:"custom-field"},N={key:1};var q=l(i({__name:"index",props:{originData:{default:()=>({})},modelValue:{default:()=>({})}},emits:["update:modelValue","trialChange"],setup(e,{emit:a}){const l=e,i=t(l.originData),b=t(l.modelValue),h=t(1),x=()=>2===i.value.saleMethod?{label:"保费",key:"premium"}:{label:"保额",key:"amount"},L=u((()=>2===i.value.saleMethod?{label:"保费",key:"premium"}:{label:"保额",key:"amount"})),D=(...e)=>{if(1===h.value){const e=b.value[L.value.key],a=l.originData.minStepValue,i=l.originData.maxStepValue,t=l.originData.stepValue;if(+e>=+i)b.value[L.value.key]=i;else if(+e<=+a)b.value[L.value.key]=a;else{const l=+e-+a,i=Math.floor(l/+t);l%+t!=0&&(b.value[L.value.key]=+a+i*+t)}}return!0},C=()=>{const{displayType:e,requireCopies:a}=i.value,l=x().key;1===e?h.value=1:3===e&&2===a?(h.value=2,i.value.displayValues.length>=1&&(b.value[l]=i.value.displayValues[0].code||i.value.displayValues[0].value)):3===e&&1===a?(h.value=3,i.value.minCopiesValue===i.value.maxCopiesValue&&(b.value.copy=i.value.minCopiesValue),i.value.displayValues.length>=1&&(b.value[l]=i.value.displayValues[0].code||i.value.displayValues[0].value)):2===e&&(h.value=4,i.value.minCopiesValue===i.value.maxCopiesValue&&(b.value.copy=i.value.minCopiesValue),b.value.amount=i.value.copiesAmount)},w=u((()=>{if(i.value.displayValues){const e=x().key;return 1===i.value.displayValues.length&&(b.value[e]=i.value.displayValues[0].code),i.value.displayValues.map((e=>({label:e.value,value:e.code})))}return[]})),_=()=>{};return o((()=>{C(),a("update:modelValue",b.value)})),n((()=>i),(e=>{C()}),{deep:!0}),n((()=>b.value),(e=>{(()=>{if(1===h.value){const e=b.value[L.value.key],a=l.originData.minStepValue,i=l.originData.maxStepValue,t=l.originData.stepValue;if(+e>+i)return!1;if(+e<+a)return!1;if((+e-+a)%+t!=0)return!1}return!0})()&&(a("update:modelValue",e),a("trialChange",e))}),{deep:!0,immediate:!0}),(a,l)=>{const i=O,t=V,u=k,o=f;return 1===h.value?(s(),r("div",I,[d(t,{label:`基本${p(L).label}`,name:p(L).key,class:"risk-select-field"},{input:c((()=>[m("div",K,[d(i,{modelValue:b.value[p(L).key],"onUpdate:modelValue":l[0]||(l[0]=e=>b.value[p(L).key]=e),"input-width":"80px","default-value":e.originData.minStepValue,min:e.originData.minStepValue,step:e.originData.stepValue,max:e.originData.maxStepValue,onBlur:D},null,8,["modelValue","default-value","min","step","max"])])])),_:1},8,["label","name"])])):2===h.value?(s(),r("div",A,[d(o,{modelValue:b.value[p(L).key],"onUpdate:modelValue":l[2]||(l[2]=e=>b.value[p(L).key]=e),label:`基本${p(L).label}`,name:p(L).key,class:"risk-select-field"},{input:c((()=>[m("div",U,[d(u,{modelValue:b.value[p(L).key],"onUpdate:modelValue":l[1]||(l[1]=e=>b.value[p(L).key]=e),options:p(w),onclick:_},null,8,["modelValue","options"])])])),_:1},8,["modelValue","label","name"])])):3===h.value?(s(),r("div",P,[d(o,{modelValue:b.value[p(L).key],"onUpdate:modelValue":l[4]||(l[4]=e=>b.value[p(L).key]=e),label:`基本${p(L).label}`,name:p(L).key,class:"risk-select-field"},{input:c((()=>[m("div",R,[d(u,{modelValue:b.value[p(L).key],"onUpdate:modelValue":l[3]||(l[3]=e=>b.value[p(L).key]=e),options:p(w),onclick:_},null,8,["modelValue","options"])])])),_:1},8,["modelValue","label","name"]),d(t,{modelValue:b.value.copy,"onUpdate:modelValue":l[6]||(l[6]=e=>b.value.copy=e),label:"份数",name:"copy",class:"risk-select-field"},{input:c((()=>[m("div",T,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(s(),v(i,{key:0,modelValue:b.value.copy,"onUpdate:modelValue":l[5]||(l[5]=e=>b.value.copy=e),"input-width":"80px","default-value":e.originData.minCopiesValue,min:e.originData.minCopiesValue||1,step:1,max:e.originData.maxCopiesValue},null,8,["modelValue","default-value","min","max"])):(s(),r("span",j,y(e.originData.minCopiesValue),1))])])),_:1},8,["modelValue"])])):4===h.value?(s(),r("div",E,[d(t,{modelValue:b.value.copy,"onUpdate:modelValue":l[8]||(l[8]=e=>b.value.copy=e),label:"份数",name:"copy",class:"risk-select-field"},{input:c((()=>[m("div",M,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(s(),v(i,{key:0,modelValue:b.value.copy,"onUpdate:modelValue":l[7]||(l[7]=e=>b.value.copy=e),"input-width":"64px","default-value":e.originData.minCopiesValue,min:e.originData.minCopiesValue||1,step:1,max:e.originData.maxCopiesValue},null,8,["modelValue","default-value","min","max"])):(s(),r("span",N,y(e.originData.minCopiesValue),1))])])),_:1},8,["modelValue"])])):g("",!0)}}}),[["__scopeId","data-v-851c18d2"]]);const z=e("P",[{name:"年金领取期间",type:"checkbox",configKey:["annuityDrawValueList"],valueKey:"annuityDrawDate"},{name:"领取频率",type:"checkbox",configKey:["annuityDrawFrequencyList"],valueKey:"annuityDrawType"},{name:"交费方式",type:"checkbox",configKey:["paymentFrequencyList"],valueKey:"paymentFrequency",ruleKey:"paymentTypeRule"},{name:"交费期间",type:"checkbox",configKey:["paymentPeriodValueList"],valueKey:"chargePeriod",ruleKey:"paymentPeriodRule"},{name:"保障期间",type:"checkbox",configKey:["insurancePeriodValueList"],valueKey:"coveragePeriod",ruleKey:"insurancePeriodRule"}]);const $={class:"pro-radio-wrap"};var J=l(i({__name:"index",props:{originData:{default:()=>({})},modelValue:{default:()=>({})},riskInfo:{default:()=>({})}},emits:["trialChange"],setup(e,{emit:l}){const i=e,u=t(i.originData),y=t(i.modelValue);t(1);const V=()=>{z.forEach((e=>{const l=a.exports.get(i.originData,e.configKey);"checkbox"===e.type&&l&&l.length>0&&(y.value[e.valueKey]=l[0].code)}))};return o((()=>{V()})),n((()=>u.value),(e=>{V()}),{deep:!0,immediate:!0}),n((()=>y.value),(e=>{l("trialChange",e)}),{deep:!0,immediate:!0}),(l,t)=>{const u=k,o=f;return s(!0),r(h,null,b(p(z),(l=>(s(),r(h,null,[p(a.exports.get)(e.originData,l.configKey)&&(1===e.riskInfo.mainRiskFlag||l.ruleKey&&2===p(a.exports.get)(e.originData,l.ruleKey)||!l.ruleKey)?(s(),r("div",{key:e.riskInfo.riskCode+"_"+l.name},["checkbox"===l.type?(s(),v(o,{key:0,modelValue:y.value[l.valueKey],"onUpdate:modelValue":e=>y.value[l.valueKey]=e,label:l.name,name:l.valueKey,class:"risk-select-field"},{input:c((()=>{return[m("div",$,[d(u,{modelValue:y.value[l.valueKey],"onUpdate:modelValue":e=>y.value[l.valueKey]=e,options:(e=l.configKey,a.exports.get(i.originData,e).map((e=>({label:e.value,value:e.code}))))},null,8,["modelValue","onUpdate:modelValue","options"])])];var e})),_:2},1032,["modelValue","onUpdate:modelValue","label","name"])):g("",!0)])):g("",!0)],64)))),256)}}}),[["__scopeId","data-v-4dd3201c"]]);const B={class:"com-risk-liabilityinfo"},G={class:"item-wrap"},H={key:0},Q=m("div",{class:"cell-content"},null,-1),W=i({__name:"index",props:{dataSource:{default:()=>({})},modelValue:{default:()=>({})},dataSourceFolmulate:{default:()=>({})},params:{default:()=>({amountUnit:"",basicsAmount:"",basicsPremium:"",riskId:""})}},emits:["trialChange"],setup(e,{emit:a}){const l=e,i=t({formInfo:l.dataSource,isCheckList:[],checkValueList:[],liabilityVOList:[]}),y=u((()=>_(l.dataSourceFolmulate))),V=(e,a,l)=>{1===l?i.value.liabilityVOList.push({liabilityValue:{...e,liabilityValue:null==e?void 0:e.liabilityAttributeValueList[0]},key:a,isSwitchOn:"1"}):i.value.liabilityVOList.push({liabilityValue:{...e,liabilityValue:null==e?void 0:e.liabilityAttributeValueList[0]},key:a,isSwitchOn:"2"})};return n((()=>y.value),((e,a)=>{var i,t;const u=null===(i=l.dataSourceFolmulate)||void 0===i?void 0:i.amount,o=null===(t=l.dataSourceFolmulate)||void 0===t?void 0:t.premium,n={amountUnit:l.params.amountUnit,basicsAmount:u,basicsPremium:o,riskId:l.params.riskId},s=l.dataSource.riskLiabilityInfoVOList.map((async l=>{if(l.formula.length>0&&(u||o)&&((null==e?void 0:e.amount)!==(null==a?void 0:a.amount)||(null==e?void 0:e.premium)!==(null==a?void 0:a.premium))){const{code:e,data:a}=await S({...n,riskLiabilities:[l]});return"10000"===e?(l.liabilityAttributeValueList=a[0].formulaResult,{...l,liabilityAttributeValueList:a[0]}):l}}));console.log("liabilityItem>>>>>>",s),console.log("riskLiabilityInfoVOList>>>>>>",l.dataSource.riskLiabilityInfoVOList)}),{deep:!0,immediate:!0}),n((()=>i.value.liabilityVOList),(e=>{const l=i.value.liabilityVOList.filter((e=>"1"===e.isSwitchOn)).map((e=>({...e.liabilityValue})));a("trialChange",l)}),{deep:!0,immediate:!0}),o((()=>{l.dataSource.riskLiabilityInfoVOList.map(((e,a)=>{const l=e.liabilityAttributeValueList.length>0&&0===e.formula.length&&e.liabilityAttributeValueList[0].actualValue;return i.value.checkValueList[a]=l,1!=+e.showFlag&&i.value.liabilityVOList.push({liabilityValue:e,key:a,isSwitchOn:"1"}),1==+e.showFlag&&(1===e.attributeFlag&&2===e.insureFlag&&0===e.formula.length&&V(e,a,1),1===e.attributeFlag&&1===e.insureFlag&&0===e.formula.length&&V(e,a,2),2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&2===e.insureFlag&&V(e,a,1),2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&1===e.insureFlag&&V(e,a,2)),null}))})),(a,l)=>{const t=w,u=f,o=x,n=L;return s(),v(n,null,{default:c((()=>[m("div",B,[m("div",G,[(s(!0),r(h,null,b(e.dataSource.riskLiabilityInfoVOList,((e,a)=>(s(),r("div",{key:a},[1!=+e.showFlag||2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&2===e.insureFlag?g("",!0):(s(),r("div",H,[d(u,{label:`${e.liabilityName}`,"label-width":"40%",name:"insuredRelation"},{input:c((()=>[1==+e.insureFlag?(s(),v(t,{key:0,modelValue:p(i).isCheckList[a],"onUpdate:modelValue":e=>p(i).isCheckList[a]=e,"active-value":"1","inactive-value":"2",size:"26px",onClick:l=>((e,a)=>{const l=i.value.liabilityVOList.map((e=>e.key)),t=0===e.liabilityAttributeValueList.length&&0===e.formula.length,u=i.value.isCheckList[a];console.log("key---------",l),console.log("(key_list).indexOf(index)",l.indexOf(a)),t&&-1===l.indexOf(a)&&u&&i.value.liabilityVOList.push({liabilityValue:e,key:a,isSwitchOn:i.value.isCheckList[a]}),-1!==l.indexOf(a)&&i.value.liabilityVOList.forEach((e=>{e.key===a&&(e.isSwitchOn=i.value.isCheckList[a])}))})(e,a)},null,8,["modelValue","onUpdate:modelValue","onClick"])):g("",!0)])),_:2},1032,["label"]),1==+p(i).isCheckList[a]&&1===e.attributeFlag||1===e.attributeFlag&&2===e.insureFlag?(s(),v(u,{key:0,label:e.liabilityAttributeTypeDesc,"label-width":"40%",name:"insuredRelation"},{input:c((()=>[d(k,{modelValue:p(i).checkValueList[a],"onUpdate:modelValue":e=>p(i).checkValueList[a]=e,prop:{label:"displayValue",value:"actualValue"},options:(e.formula.length,e.liabilityAttributeValueList),"is-simply":!0,onClick:l=>((e,a)=>{console.log("keykeykey>>>>>>",a);const l=e.liabilityAttributeValueList.filter((e=>e.actualValue===i.value.checkValueList[a])),t=JSON.parse(JSON.stringify(l))[0],u={...e,liabilityValue:t};i.value.liabilityVOList.length>0&&Object.keys(i.value.checkValueList).indexOf(a)&&(i.value.liabilityVOList=i.value.liabilityVOList.filter((e=>e.key!==a))),i.value.liabilityVOList.push({liabilityValue:u,key:a,isSwitchOn:"1"}),console.log("state.liabilityVOList>>>>>>",i.value.liabilityVOList)})(e,a)},null,8,["modelValue","onUpdate:modelValue","options","onClick"])])),_:2},1032,["label"])):g("",!0)]))])))),128))])]),Q,d(o)])),_:1})}}});e("I",l(i({__name:"index",props:{originData:{default:()=>({})},modelValue:{default:()=>({})}},emits:["trialChange"],setup(e,{expose:l,emit:i}){const u=e,n=D({personalInfo:{},basicsAmount:"",basicsPremium:""}),c=t(null),m=t({}),v=t({});C("premium"),v.value=C("enumList")||{},o((()=>{}));const y=a.exports.debounce((()=>{u.originData.mainRiskFlag,m.value.riskCategory=u.originData.riskCategory,m.value.riskCode=u.originData.riskCode,m.value.riskId=u.originData.riskId,m.value.riskType=u.originData.riskType,m.value.riskName=u.originData.riskName,m.value.riskType=u.originData.riskType,m.value.mainRiskCode=u.originData.mainRiskCode,m.value.mainRiskId=u.originData.mainRiskId,i("trialChange",m.value)}),300),V=e=>{F(e).forEach((a=>{m.value[a]=e[a]})),y()},k=e=>{var a,l;1==+(null===(a=u.originData)||void 0===a||null===(l=a.productRiskInsureLimitVO)||void 0===l?void 0:l.amountPremiumConfigVO.saleMethod)?n.basicsAmount=null==e?void 0:e.amount:n.basicsAmount=null==e?void 0:e.premium,F(e).forEach((a=>{m.value[a]=e[a]})),y()},f=e=>{m.value.liabilityVOList=e,y()};return l({validate:async()=>{var e;await(null===(e=c.value)||void 0===e?void 0:e.validate())}}),(a,l)=>{var i,t,u,o,c,v;return 1===(null===(i=e.originData)||void 0===i?void 0:i.factorDisPlayFlag)?(s(),r(h,{key:0},[d(p(q),{"v-model":p(m),"origin-data":null===(t=e.originData)||void 0===t||null===(u=t.productRiskInsureLimitVO)||void 0===u?void 0:u.amountPremiumConfigVO,onTrialChange:k},null,8,["v-model","origin-data"]),d(p(J),{"v-model":p(m),"origin-data":e.originData.productRiskInsureLimitVO,"risk-info":e.originData,onTrialChange:V},null,8,["v-model","origin-data","risk-info"]),d(p(W),{"data-source-folmulate":p(m),"data-source":e.originData,params:{amountUnit:null===(o=e.originData)||void 0===o||null===(c=o.productRiskInsureLimitVO)||void 0===c?void 0:c.amountPremiumConfigVO.displayUnit,basicsAmount:p(n).basicsAmount,basicsPremium:p(n).basicsPremium,riskId:null===(v=e.originData)||void 0===v?void 0:v.riskId},onTrialChange:f},null,8,["data-source-folmulate","data-source","params"])],64)):g("",!0)}}}),[["__scopeId","data-v-5e4c8598"]]))}}}))}();
