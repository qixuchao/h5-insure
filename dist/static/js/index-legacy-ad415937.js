!function(){var e=document.createElement("style");e.innerHTML=".flex-form .flex-field[data-v-35d5fea7]{display:flex;flex-direction:column}.gap[data-v-35d5fea7]{display:inline-block;width:1.33333rem;height:.42667rem;text-align:center;line-height:.42667rem;background-color:#e9e7e7;border:1px solid rgb(205,205,205)}[data-v-35d5fea7] .risk-select-field{align-items:baseline!important}.trail-personal-info[data-v-a2c06736] .com-card-wrap .header{margin-left:0}.trail-personal-info[data-v-a2c06736] .com-van-field:last-child:after{display:block}.flex-form .flex-field[data-v-4dd3201c]{display:flex;flex-direction:column}.gap[data-v-4dd3201c]{display:inline-block;width:1.33333rem;height:.42667rem;text-align:center;line-height:.42667rem;background-color:#e9e7e7;border:1px solid rgb(205,205,205)}[data-v-4dd3201c] .risk-select-field{align-items:baseline!important}.com-risk-liabilityinfo[data-v-29fef20a] .riskliab-select-field{display:inline-flex;padding:0;align-items:center;min-height:1.41333rem}.com-risk-liabilityinfo[data-v-29fef20a] .riskliab-select-field .van-cell__title{color:#333}.com-risk-liabilityinfo[data-v-29fef20a] .riskliab-select-field :deep(.van-field__label){color:#666}.com-risk-liabilityinfo[data-v-29fef20a] .riskliab-select-field:after{display:none}.com-risk-liabilityinfo[data-v-29fef20a] .riskliab-select-field-children{background:rgba(246,246,246,.2);border-radius:.10667rem;border:1px solid #eeeeee;padding:.24rem .4rem;padding-left:.4rem!important;padding-right:.4rem!important;margin-bottom:.26667rem}.com-risk-card-wrapper.part-card[data-v-2a9ae21e]{background-color:#fff;border-bottom:.26667rem solid var(--zaui-global-bg, #f2f5fc)}.com-risk-card-wrapper .delete-risk[data-v-2a9ae21e]{display:flex;align-items:center;justify-content:center;margin-top:.06667rem}.com-risk-card-wrapper .delete-risk .svg-icon[data-v-2a9ae21e]{font-size:.42667rem}.com-risk-card-wrapper .custom-field[data-v-2a9ae21e]{display:flex;flex-direction:column}.com-risk-card-wrapper .custom-field .field-tip[data-v-2a9ae21e]{font-size:.32rem;font-weight:400;color:#99a9c0;line-height:1;margin:0 0 .10667rem}[data-v-2a9ae21e] .van-field{align-items:baseline}\n",document.head.appendChild(e),System.register(["./ProAddress.vue_vue_type_style_index_0_scoped_true_lang-legacy-16295e86.js","./index-legacy-c0acd4e9.js","./index-legacy-39a03e27.js","./infoCollection-legacy-1571936d.js","./index-legacy-0cb64e99.js","./cloneDeep-legacy-06534257.js","./trial-legacy-36e3cd4a.js"],(function(e){"use strict";var a,i,l,t,u,o,n,s,r,d,c,m,p,v,y,g,f,k,b,V,h,x,L,D,C,O,_,w,I,S,A,F;return{setters:[function(e){a=e.l},function(e){i=e._,l=e.d,t=e.r,u=e.E,o=e.G,n=e.an,s=e.c,r=e.h,d=e.f,c=e.w,m=e.j,p=e.g,v=e.e,y=e.t,g=e.k,f=e.y,k=e.m,b=e.ap,V=e.i,h=e.F,x=e.a2,L=e.bT,D=e.X,C=e.Y,O=e.J,_=e.b8},function(e){w=e.S},function(e){I=e.k},function(e){S=e.S},function(e){A=e.c},function(e){F=e.f}],execute:function(){const K={key:0},U={class:"custom-field"},P={key:1,class:"flex-field"},R={class:"pro-radio-wrap"},T={key:2},j={class:"pro-radio-wrap"},N={class:"custom-field"},M={key:1},E={key:3},$={class:"custom-field"},q={key:1},z={class:"custom-field"},Y={key:0},J={key:1};var H=i(l({__name:"index",props:{originData:{default:()=>({})},modelValue:{default:()=>({})}},emits:["update:modelValue","trialChange"],setup(e,{emit:a}){const i=e,l=t(i.originData),V=t(i.modelValue),h=t(1),x=()=>2===l.value.saleMethod?{label:"保费",key:"premium"}:{label:"保额",key:"amount"},L=()=>{switch(`${l.value.displayUnit}`){case I.YUAN:return"元";case I.MONTH_SALARY:return"倍月薪";case I.MILLION:return"万元";case I.COPY:return"份"}return""},D=u((()=>2===l.value.saleMethod?{label:"保费",key:"premium"}:{label:"保额",key:"amount"})),C=(...e)=>{if(1===h.value){const e=V.value[D.value.key],a=i.originData.minStepValue,l=i.originData.maxStepValue,t=i.originData.stepValue;if(+e>=+l)V.value[D.value.key]=l;else if(+e<=+a)V.value[D.value.key]=a;else{const i=+e-+a,l=Math.floor(i/+t);i%+t!=0&&(V.value[D.value.key]=+a+l*+t)}}return!0},O=()=>{const{displayType:e,requireCopies:a}=l.value,i=x().key;1===e?h.value=1:3===e&&2===a?(h.value=2,l.value.displayValues.length>=1&&(V.value[i]=l.value.displayValues[0].code||l.value.displayValues[0].value)):3===e&&1===a?(h.value=3,l.value.minCopiesValue===l.value.maxCopiesValue&&(V.value.copy=l.value.minCopiesValue),l.value.displayValues.length>=1&&(V.value[i]=l.value.displayValues[0].code||l.value.displayValues[0].value)):2===e&&(h.value=4,l.value.minCopiesValue===l.value.maxCopiesValue&&(V.value.copy=l.value.minCopiesValue),V.value.amount=l.value.copiesAmount)},_=u((()=>{if(l.value.displayValues){const e=x().key;return 1===l.value.displayValues.length&&(V.value[e]=l.value.displayValues[0].code),l.value.displayValues.map((e=>({label:e.value+L(),value:e.code})))}return[]})),S=()=>{};return o((()=>{O(),a("update:modelValue",V.value)})),n((()=>l),(e=>{O()}),{deep:!0}),n((()=>V.value),(e=>{(()=>{if(1===h.value){const e=V.value[D.value.key],a=i.originData.minStepValue,l=i.originData.maxStepValue,t=i.originData.stepValue;if(+e>+l)return!1;if(+e<+a)return!1;if((+e-+a)%+t!=0)return!1}return!0})()&&(a("update:modelValue",e),a("trialChange",e))}),{deep:!0,immediate:!0}),(a,i)=>{const l=w,t=f,u=k,o=b;return 1===h.value?(s(),r("div",K,[d(t,{label:`基本${p(D).label}`,name:p(D).key,class:"risk-select-field"},{input:c((()=>[m("div",U,[d(l,{modelValue:V.value[p(D).key],"onUpdate:modelValue":i[0]||(i[0]=e=>V.value[p(D).key]=e),"input-width":"80px","default-value":e.originData.minStepValue,min:e.originData.minStepValue,step:e.originData.stepValue,max:e.originData.maxStepValue,onBlur:C},null,8,["modelValue","default-value","min","step","max"])])])),_:1},8,["label","name"])])):2===h.value?(s(),r("div",P,[d(o,{modelValue:V.value[p(D).key],"onUpdate:modelValue":i[2]||(i[2]=e=>V.value[p(D).key]=e),label:`基本${p(D).label}`,name:p(D).key,class:"risk-select-field"},{input:c((()=>[m("div",R,[d(u,{modelValue:V.value[p(D).key],"onUpdate:modelValue":i[1]||(i[1]=e=>V.value[p(D).key]=e),options:p(_),onclick:S},null,8,["modelValue","options"])])])),_:1},8,["modelValue","label","name"])])):3===h.value?(s(),r("div",T,[d(o,{modelValue:V.value[p(D).key],"onUpdate:modelValue":i[4]||(i[4]=e=>V.value[p(D).key]=e),label:`基本${p(D).label}`,name:p(D).key,class:"risk-select-field"},{input:c((()=>[m("div",j,[d(u,{modelValue:V.value[p(D).key],"onUpdate:modelValue":i[3]||(i[3]=e=>V.value[p(D).key]=e),options:p(_),onclick:S},null,8,["modelValue","options"])])])),_:1},8,["modelValue","label","name"]),d(t,{modelValue:V.value.copy,"onUpdate:modelValue":i[6]||(i[6]=e=>V.value.copy=e),label:"份数",name:"copy",class:"risk-select-field"},{input:c((()=>[m("div",N,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(s(),v(l,{key:0,modelValue:V.value.copy,"onUpdate:modelValue":i[5]||(i[5]=e=>V.value.copy=e),"input-width":"80px","default-value":e.originData.minCopiesValue,min:e.originData.minCopiesValue||1,step:1,max:e.originData.maxCopiesValue},null,8,["modelValue","default-value","min","max"])):(s(),r("span",M,y(e.originData.minCopiesValue),1))])])),_:1},8,["modelValue"])])):4===h.value?(s(),r("div",E,[d(t,{modelValue:V.value.copy,"onUpdate:modelValue":i[8]||(i[8]=e=>V.value.copy=e),label:"份数",name:"copy",class:"risk-select-field"},{input:c((()=>[m("div",$,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(s(),v(l,{key:0,modelValue:V.value.copy,"onUpdate:modelValue":i[7]||(i[7]=e=>V.value.copy=e),"input-width":"64px","default-value":e.originData.minCopiesValue,min:e.originData.minCopiesValue||1,step:1,max:e.originData.maxCopiesValue},null,8,["modelValue","default-value","min","max"])):(s(),r("span",q,y(e.originData.minCopiesValue),1))])])),_:1},8,["modelValue"]),d(t,{label:p(D).label,name:"copyAmount",class:"risk-select-field"},{input:c((()=>[m("div",z,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(s(),r("span",Y,y(+e.originData.copiesAmount*+V.value.copy+L()),1)):(s(),r("span",J,y(+e.originData.minCopiesValue*+e.originData.copiesAmount+L()),1))])])),_:1},8,["label"])])):g("",!0)}}}),[["__scopeId","data-v-35d5fea7"]]);const B=e("P",[{name:"年金领取期间",type:"checkbox",configKey:["annuityDrawValueList"],valueKey:"annuityDrawDate"},{name:"领取频率",type:"checkbox",configKey:["annuityDrawFrequencyList"],valueKey:"annuityDrawType"},{name:"交费方式",type:"checkbox",configKey:["paymentFrequencyList"],valueKey:"paymentFrequency",ruleKey:"paymentTypeRule"},{name:"交费期间",type:"checkbox",configKey:["paymentPeriodValueList"],valueKey:"chargePeriod",ruleKey:"paymentPeriodRule"},{name:"保障期间",type:"checkbox",configKey:["insurancePeriodValueList"],valueKey:"coveragePeriod",ruleKey:"insurancePeriodRule"}]);const G={class:"pro-radio-wrap"};var X=i(l({__name:"index",props:{originData:{default:()=>({})},modelValue:{default:()=>({})},riskInfo:{default:()=>({})}},emits:["trialChange"],setup(e,{emit:i}){const l=e,u=t(l.originData),y=t(l.modelValue);t(1);const f=()=>{B.forEach((e=>{const i=a.exports.get(l.originData,e.configKey);"checkbox"===e.type&&i&&i.length>0&&(y.value[e.valueKey]=i[0].code)}))};return o((()=>{f()})),n((()=>u.value),(e=>{f()}),{deep:!0,immediate:!0}),n((()=>y.value),(e=>{i("trialChange",e)}),{deep:!0,immediate:!0}),(i,t)=>{const u=k,o=b;return s(!0),r(h,null,V(p(B),(i=>(s(),r(h,null,[p(a.exports.get)(e.originData,i.configKey)&&(1===e.riskInfo.mainRiskFlag||i.ruleKey&&2===p(a.exports.get)(e.originData,i.ruleKey)||!i.ruleKey)?(s(),r("div",{key:e.riskInfo.riskCode+"_"+i.name},["checkbox"===i.type?(s(),v(o,{key:0,modelValue:y.value[i.valueKey],"onUpdate:modelValue":e=>y.value[i.valueKey]=e,label:i.name,name:i.valueKey,class:"risk-select-field"},{input:c((()=>{return[m("div",G,[d(u,{modelValue:y.value[i.valueKey],"onUpdate:modelValue":e=>y.value[i.valueKey]=e,options:(e=i.configKey,a.exports.get(l.originData,e).map((e=>({label:e.value,value:e.code}))))},null,8,["modelValue","onUpdate:modelValue","options"])])];var e})),_:2},1032,["modelValue","onUpdate:modelValue","label","name"])):g("",!0)])):g("",!0)],64)))),256)}}}),[["__scopeId","data-v-4dd3201c"]]);const Q={class:"com-risk-liabilityinfo"},W={class:"item-wrap"},Z={key:0},ee=(e=>(D("data-v-29fef20a"),e=e(),C(),e))((()=>m("div",{class:"cell-content"},null,-1)));var ae=i(l({__name:"index",props:{dataSource:{default:()=>({})},modelValue:{default:()=>({})},dataSourceFolmulate:{default:()=>({})},params:{default:()=>({amountUnit:"",basicsAmount:"",basicsPremium:"",riskId:""})}},emits:["trialChange"],setup(e,{emit:a}){const i=e,l=t({formInfo:i.dataSource,isCheckList:[],checkValueList:[],liabilityVOList:[]}),y=u((()=>A(i.dataSourceFolmulate))),f=(e,a,i)=>{1===i?l.value.liabilityVOList.push({liabilityValue:{...e,liabilityValue:null==e?void 0:e.liabilityAttributeValueList[0]},key:a,isSwitchOn:"1"}):l.value.liabilityVOList.push({liabilityValue:{...e,liabilityValue:null==e?void 0:e.liabilityAttributeValueList[0]},key:a,isSwitchOn:"2"})};return n((()=>y.value),((e,a)=>{var l,t;const u=null===(l=i.dataSourceFolmulate)||void 0===l?void 0:l.amount,o=null===(t=i.dataSourceFolmulate)||void 0===t?void 0:t.premium,n={amountUnit:i.params.amountUnit,basicsAmount:u,basicsPremium:o,riskId:i.params.riskId},s=i.dataSource.riskLiabilityInfoVOList.map((async i=>{if(i.formula.length>0&&(u||o)&&((null==e?void 0:e.amount)!==(null==a?void 0:a.amount)||(null==e?void 0:e.premium)!==(null==a?void 0:a.premium))){const{code:e,data:a}=await F({...n,riskLiabilities:[i]});return"10000"===e?(i.liabilityAttributeValueList=a[0].formulaResult,{...i,liabilityAttributeValueList:a[0]}):i}}));console.log("liabilityItem>>>>>>",s),console.log("riskLiabilityInfoVOList>>>>>>",i.dataSource.riskLiabilityInfoVOList)}),{deep:!0,immediate:!0}),n((()=>l.value.liabilityVOList),(e=>{const i=l.value.liabilityVOList.filter((e=>"1"===e.isSwitchOn)).map((e=>({...e.liabilityValue})));a("trialChange",i)}),{deep:!0,immediate:!0}),o((()=>{i.dataSource.riskLiabilityInfoVOList.map(((e,a)=>{const i=e.liabilityAttributeValueList.length>0&&0===e.formula.length&&e.liabilityAttributeValueList[0].actualValue;return l.value.checkValueList[a]=i,1!=+e.showFlag&&l.value.liabilityVOList.push({liabilityValue:e,key:a,isSwitchOn:"1"}),1==+e.showFlag&&(1===e.attributeFlag&&2===e.insureFlag&&0===e.formula.length&&f(e,a,1),1===e.attributeFlag&&1===e.insureFlag&&0===e.formula.length&&f(e,a,2),2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&2===e.insureFlag&&f(e,a,1),2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&1===e.insureFlag&&f(e,a,2)),null}))})),(a,i)=>{const t=S,u=b,o=x,n=L;return s(),v(n,null,{default:c((()=>[m("div",Q,[m("div",W,[(s(!0),r(h,null,V(e.dataSource.riskLiabilityInfoVOList,((e,a)=>(s(),r("div",{key:a},[1!=+e.showFlag||2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&2===e.insureFlag?g("",!0):(s(),r("div",Z,[d(u,{label:`${e.liabilityName}`,"label-width":"40%",name:"insuredRelation",class:"riskliab-select-field"},{input:c((()=>[1==+e.insureFlag?(s(),v(t,{key:0,modelValue:p(l).isCheckList[a],"onUpdate:modelValue":e=>p(l).isCheckList[a]=e,"active-value":"1","inactive-value":"2",size:"26px",onClick:i=>((e,a)=>{const i=l.value.liabilityVOList.map((e=>e.key)),t=0===e.liabilityAttributeValueList.length&&0===e.formula.length,u=l.value.isCheckList[a];console.log("key---------",i),console.log("(key_list).indexOf(index)",i.indexOf(a)),t&&-1===i.indexOf(a)&&u&&l.value.liabilityVOList.push({liabilityValue:e,key:a,isSwitchOn:l.value.isCheckList[a]}),-1!==i.indexOf(a)&&l.value.liabilityVOList.forEach((e=>{e.key===a&&(e.isSwitchOn=l.value.isCheckList[a])}))})(e,a)},null,8,["modelValue","onUpdate:modelValue","onClick"])):g("",!0)])),_:2},1032,["label"]),1==+p(l).isCheckList[a]&&1===e.attributeFlag||1===e.attributeFlag&&2===e.insureFlag?(s(),v(u,{key:0,label:e.liabilityAttributeTypeDesc,"label-width":"40%",name:"insuredRelation",class:"riskliab-select-field-children"},{input:c((()=>[d(k,{modelValue:p(l).checkValueList[a],"onUpdate:modelValue":e=>p(l).checkValueList[a]=e,prop:{label:"displayValue",value:"actualValue"},options:(e.formula.length,e.liabilityAttributeValueList),"is-simply":!0,onClick:i=>((e,a)=>{console.log("keykeykey>>>>>>",a);const i=e.liabilityAttributeValueList.filter((e=>e.actualValue===l.value.checkValueList[a])),t=JSON.parse(JSON.stringify(i))[0],u={...e,liabilityValue:t};l.value.liabilityVOList.length>0&&Object.keys(l.value.checkValueList).indexOf(a)&&(l.value.liabilityVOList=l.value.liabilityVOList.filter((e=>e.key!==a))),l.value.liabilityVOList.push({liabilityValue:u,key:a,isSwitchOn:"1"}),console.log("state.liabilityVOList>>>>>>",l.value.liabilityVOList)})(e,a)},null,8,["modelValue","onUpdate:modelValue","options","onClick"])])),_:2},1032,["label"])):g("",!0)]))])))),128))])]),ee,d(o)])),_:1})}}}),[["__scopeId","data-v-29fef20a"]]);function ie(e){return Object.keys(e)}e("I",i(l({__name:"index",props:{originData:{default:()=>({})},modelValue:{default:()=>({})}},emits:["trialChange"],setup(e,{expose:i,emit:l}){const u=e,n=O({personalInfo:{},basicsAmount:"",basicsPremium:""}),c=t(null),m=t({}),v=t({});_("premium"),v.value=_("enumList")||{},console.log("-------origin data",u.originData),o((()=>{}));const y=a.exports.debounce((()=>{u.originData.mainRiskFlag,m.value.riskCategory=u.originData.riskCategory,m.value.riskCode=u.originData.riskCode,m.value.riskId=u.originData.riskId,m.value.riskType=u.originData.riskType,m.value.riskName=u.originData.riskName,m.value.riskType=u.originData.riskType,m.value.mainRiskCode=u.originData.mainRiskCode,m.value.mainRiskId=u.originData.mainRiskId,l("trialChange",m.value)}),300),f=e=>{ie(e).forEach((a=>{m.value[a]=e[a]})),y()},k=e=>{var a,i;1==+(null===(a=u.originData)||void 0===a||null===(i=a.productRiskInsureLimitVO)||void 0===i?void 0:i.amountPremiumConfigVO.saleMethod)?n.basicsAmount=null==e?void 0:e.amount:n.basicsAmount=null==e?void 0:e.premium,ie(e).forEach((a=>{m.value[a]=e[a]})),y()},b=e=>{m.value.liabilityVOList=e,y()};return i({validate:async()=>{var e;await(null===(e=c.value)||void 0===e?void 0:e.validate())}}),(a,i)=>{var l,t,u,o,c,v;return 1===(null===(l=e.originData)||void 0===l?void 0:l.factorDisPlayFlag)?(s(),r(h,{key:0},[d(p(H),{"v-model":p(m),"origin-data":null===(t=e.originData)||void 0===t||null===(u=t.productRiskInsureLimitVO)||void 0===u?void 0:u.amountPremiumConfigVO,onTrialChange:k},null,8,["v-model","origin-data"]),d(p(X),{"v-model":p(m),"origin-data":e.originData.productRiskInsureLimitVO,"risk-info":e.originData,onTrialChange:f},null,8,["v-model","origin-data","risk-info"]),d(p(ae),{"data-source-folmulate":p(m),"data-source":e.originData,params:{amountUnit:null===(o=e.originData)||void 0===o||null===(c=o.productRiskInsureLimitVO)||void 0===c?void 0:c.amountPremiumConfigVO.displayUnit,basicsAmount:p(n).basicsAmount,basicsPremium:p(n).basicsPremium,riskId:null===(v=e.originData)||void 0===v?void 0:v.riskId},onTrialChange:b},null,8,["data-source-folmulate","data-source","params"])],64)):g("",!0)}}}),[["__scopeId","data-v-2a9ae21e"]]))}}}))}();
