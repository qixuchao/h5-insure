var Be=Object.defineProperty,Re=Object.defineProperties;var we=Object.getOwnPropertyDescriptors;var be=Object.getOwnPropertySymbols;var Pe=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var ve=(u,i,o)=>i in u?Be(u,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[i]=o,q=(u,i)=>{for(var o in i||(i={}))Pe.call(i,o)&&ve(u,o,i[o]);if(be)for(var o of be(i))xe.call(i,o)&&ve(u,o,i[o]);return u},S=(u,i)=>Re(u,we(i));import{g as $,L as N,o as Y,$ as x,r as L,k as f,m as h,n as D,j as k,y as A,z as e,a0 as z,a1 as Q,a2 as Z,C as R,h as v,s as F,I as M,d as Te,a3 as qe,x as U,F as j,E as G,a4 as Ue,a5 as $e,B as W}from"./vendor-1bbdd8d9.js";import{_ as K,P,a as Ne}from"./index-d5db77b7.js";import{b as X,S as H}from"./index-8625d5c1.js";const Se=[{label:"\u7537",value:"1"},{label:"\u5973",value:"2"}],Ye=[{label:"\u6709",value:"1"},{label:"\u65E0",value:"2"}],Me=[{value:1,label:"\u7B2C5\u4E2A\u4FDD\u5355\u5468\u5E74\u65E5"},{value:2,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8455\u5468\u5C81"},{value:3,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8460\u5468\u5C81"},{value:4,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8465\u5468\u5C81"},{value:5,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8470\u5468\u5C81"},{value:6,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8475\u5468\u5C81"}],je=[{value:1,label:"\u5E74\u9886"},{value:2,label:"\u6708\u9886"}],ge=[{label:"\u8DB8\u4EA4",value:"1"},{label:"\u5E74\u4EA4",value:"2"},{label:"\u534A\u5E74\u4EA4",value:"3"},{label:"\u5B63\u4EA4",value:"4"},{label:"\u6708\u4EA4",value:"5"}],_e=[{label:"\u8DB8\u4EA4",value:"single"},{label:"1\u5E74\u4EA4",value:"year_1"},{label:"5\u5E74\u4EA4",value:"year_5"},{label:"10\u5E74\u4EA4",value:"year_10"},{label:"15\u5E74\u4EA4",value:"year_15"},{label:"20\u5E74\u4EA4",value:"year_20"},{label:"25\u5E74\u4EA4",value:"year_25"},{label:"30\u5E74\u4EA4",value:"year_30"},{label:"35\u5E74\u4EA4",value:"year_35"}],Ee=[{label:"7\u5929",value:"day_7"},{label:"14\u5929",value:"day_14"},{label:"30\u5929",value:"day_30"},{label:"1\u5E74",value:"year_1"},{label:"3\u5E74",value:"year_3"},{label:"5\u5E74",value:"year_5"},{label:"10\u5E74",value:"year_10"},{label:"15\u5E74",value:"year_15"},{label:"20\u5E74",value:"year_20"},{label:"25\u5E74",value:"year_25"},{label:"30\u5E74",value:"year_30"},{label:"35\u5E74",value:"year_35"},{label:"\u7EC8\u8EAB",value:"to_life"}],Ge=[{label:"\u4E3B\u9669\u671F\u95F4\u51CF1",value:"3"},{label:"\u65E0\u9650\u5236",value:"2"}],Fe=[{label:"\u8FD4\u4FDD\u989D",value:1},{label:"\u8FD4\u4FDD\u8D39",value:2}],We=[{label:"\u6295\u4FDD",value:1},{label:"\u4E0D\u6295\u4FDD",value:2}],Ke=(u={})=>X.post("/api/gateway/system/dict/v2/queryDictInfo",u);new H({source:"sessionStorage"});const Le=new H({source:"localStorage"});new H({source:"cookie"});const Ze=u=>(z("data-v-1e1e74de"),u=u(),Q(),u),ze={class:"com-occupational-wrapper"},Qe=Ze(()=>A("div",{class:"popup-title"},"\u9009\u62E9\u804C\u4E1A",-1)),Xe={class:"popup-content"},He=$({props:{modelValue:{type:Array,required:!0,default:()=>[]},insuredCode:{type:String,required:!0,default:""},show:{type:Boolean,required:!0,default:!1}},emits:["finish","close","update:modelValue"],setup(u,{emit:i}){const o=u,y=N({show:o.show,options:[],currentValue:""}),r=()=>{i("close")},C=({value:s,selectedOptions:p})=>{console.log(s,p);const b=(p||[]).map(l=>l.value).join("/");i("update:modelValue",s),i("finish",b),r()},g=s=>{const p=s,b=l=>{l.forEach(t=>{const a=t;a.children.length?b(a.children):a.children=null})};return b(p),p},d=()=>{var b,l;const s=`${(l=(b=o.insurerCode)==null?void 0:b.toLocaleUpperCase)==null?void 0:l.call(b)}_OCCUPATION`,p=Le.get("occupational")||{};if(p[s]){y.options=p[s];return}Ke({dictCodeList:[s]}).then(({code:t,data:a})=>{var n;if(t==="10000"){const m=g(((n=a==null?void 0:a[0])==null?void 0:n.dictItemList)||[]);y.options=m,p[s]=m,Le.set("occupational",p)}})};return Y(()=>{d()}),x(()=>o.modelValue,s=>{},{deep:!0,immediate:!0}),(s,p)=>{const b=L("van-cascader"),l=L("VanPopup");return f(),h("div",ze,[D(l,{show:e(y).show,"onUpdate:show":p[1]||(p[1]=t=>e(y).show=t),"show-footer":"",position:"bottom",closeable:"",onClose:r},{default:k(()=>[Qe,A("div",Xe,[D(b,{modelValue:e(y).currentValue,"onUpdate:modelValue":p[0]||(p[0]=t=>e(y).currentValue=t),title:"\u8BF7\u9009\u62E9\u804C\u4E1A","show-header":!1,placeholder:"\u8BF7\u9009\u62E9",options:e(y).options,"active-color":"#0d6efe","field-names":{text:"value",value:"code",children:"children"},onFinish:C},null,8,["modelValue","options"])])]),_:1},8,["show"])])}}});var Je=K(He,[["__scopeId","data-v-1e1e74de"]]);const et={class:"com-personal-info-wrapper"},Ce=$({props:{formInfo:{type:Object,required:!0,default:()=>{}},insuredCode:{type:String,required:!0,default:""},factorList:{type:Array,required:!0,default:()=>[]}},setup(u,{expose:i}){const o=u,[y,r]=Z(),[C,g]=Z(),d=R(),s=N({formInfo:o==null?void 0:o.formInfo,occupationalText:""}),p=t=>{s.occupationalText=t},b=()=>{g(!1)};return i({validateForm:()=>new Promise((t,a)=>{d==null||d.value.validate().then(()=>{t("")},()=>{a()})})}),(t,a)=>{const n=L("VanField"),m=L("VanForm"),I=L("van-datetime-picker"),O=L("van-popup");return f(),h("div",et,[D(m,{ref_key:"formRef",ref:d,"input-align":"right","error-message-align":"right"},{default:k(()=>[u.factorList.includes("APPLICANT.AGE")||u.factorList.includes("AGE")?(f(),v(n,{key:0,modelValue:e(s).formInfo.birthday,"onUpdate:modelValue":a[0]||(a[0]=V=>e(s).formInfo.birthday=V),rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],name:"birth",label:"\u51FA\u751F\u65E5\u671F","is-link":"",placeholder:"\u8BF7\u9009\u62E9",onClick:a[1]||(a[1]=V=>e(r)(!0))},null,8,["modelValue"])):F("",!0),u.factorList.includes("APPLICANT.GENDER")||u.factorList.includes("GENDER")?(f(),v(n,{key:1,modelValue:e(s).formInfo.gender,"onUpdate:modelValue":a[3]||(a[3]=V=>e(s).formInfo.gender=V),name:"gender",label:"\u6027\u522B",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:k(()=>[D(P,{modelValue:e(s).formInfo.gender,"onUpdate:modelValue":a[2]||(a[2]=V=>e(s).formInfo.gender=V),options:e(Se)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):F("",!0),u.factorList.includes("SOCIAL_INS")?(f(),v(n,{key:2,modelValue:e(s).formInfo.socialSecurity,"onUpdate:modelValue":a[5]||(a[5]=V=>e(s).formInfo.socialSecurity=V),name:"socialSecurity",label:"\u793E\u4FDD",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:k(()=>[D(P,{modelValue:e(s).formInfo.socialSecurity,"onUpdate:modelValue":a[4]||(a[4]=V=>e(s).formInfo.socialSecurity=V),options:e(Ye)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):F("",!0),u.factorList.includes("OCCUPATION_CATEGORY")?(f(),v(n,{key:3,modelValue:e(s).formInfo.occupationalClass,"onUpdate:modelValue":a[6]||(a[6]=V=>e(s).formInfo.occupationalClass=V),rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],name:"occupationalClass",label:"\u804C\u4E1A\u7C7B\u578B","is-link":"",placeholder:"\u8BF7\u9009\u62E9",onClick:a[7]||(a[7]=V=>e(g)(!0))},{input:k(()=>[A("div",null,M(e(s).occupationalText),1)]),_:1},8,["modelValue"])):F("",!0)]),_:1},512),D(O,{show:e(y),"onUpdate:show":a[10]||(a[10]=V=>qe(y)?y.value=V:null),position:"bottom"},{default:k(()=>[D(I,{type:"date","min-date":new Date("1900-01-01"),"max-date":new Date,onConfirm:a[8]||(a[8]=V=>{e(s).formInfo.birthday=e(Te)(V).format("YYYY-MM-DD"),e(r)(!1)}),onCancel:a[9]||(a[9]=V=>e(r)(!1))},null,8,["min-date","max-date"])]),_:1},8,["show"]),e(C)?(f(),v(Je,{key:0,modelValue:e(s).formInfo.occupationalClass,"onUpdate:modelValue":a[11]||(a[11]=V=>e(s).formInfo.occupationalClass=V),show:e(C),"insured-code":"insuredCode",onFinish:p,onClose:b},null,8,["modelValue","show"])):F("",!0)])}}}),tt={class:"com-risk-card-wrapper"},at={key:0},ot={key:9,class:"liab-desc"},it=A("div",{class:"title"},"\u8D23\u4EFB\u6295\u4FDD\u8BF4\u660E",-1),he=$({props:{originData:{type:Object,required:!0,default:()=>{}},formInfo:{type:Object,required:!0,default:()=>{}},mainRiskData:{type:Object,default:()=>{}},mainRiskInfo:{type:Object,required:!1,default:()=>{}},index:{type:[Number,String],default:0,required:!0}},setup(u){const i=u,o=N({formInfo:i.formInfo}),y=l=>typeof l!="boolean"&&!l||Array.isArray(l)&&!l.length?!0:{}.toString.call(l)==="object Object"?Object.keys(l).length:!1,r=(l,t)=>{let a=t;return Array.isArray(t)||(a=[`${a}`]),(l||[]).filter(n=>a.includes(`${n.value}`))},C=U(()=>{var l,t,a,n,m,I;return((l=i.originData)==null?void 0:l.riskType)===1?r(Ee,(a=(t=i==null?void 0:i.originData)==null?void 0:t.riskInsureLimitVO)==null?void 0:a.insurancePeriodValueList):((n=i.originData)==null?void 0:n.periodType)===2?r([{value:"year_1",label:"1\u5E74"}],["year_1"]):r(Ee,(I=(m=i==null?void 0:i.mainRiskData)==null?void 0:m.riskInsureLimitVO)==null?void 0:I.insurancePeriodValueList)}),g=U(()=>{var l,t,a,n,m,I,O,V,_;return((l=i.originData)==null?void 0:l.riskType)===1?r(_e,(a=(t=i==null?void 0:i.originData)==null?void 0:t.riskInsureLimitVO)==null?void 0:a.paymentPeriodValueList):((n=i.originData)==null?void 0:n.exemptFlag)===1?r(Ge,(I=(m=i==null?void 0:i.originData)==null?void 0:m.riskInsureLimitVO)==null?void 0:I.paymentPeriodRule):((O=i.originData)==null?void 0:O.periodType)===2?r([{value:"year_1",label:"1\u5E74\u4EA4"}],["year_1"]):r(_e,(_=(V=i==null?void 0:i.mainRiskData)==null?void 0:V.riskInsureLimitVO)==null?void 0:_.paymentPeriodValueList)}),d=U(()=>{var l,t,a,n,m;return((l=i.originData)==null?void 0:l.riskType)===1?r(ge,(a=(t=i==null?void 0:i.originData)==null?void 0:t.riskInsureLimitVO)==null?void 0:a.paymentFrequencyList):r(ge,(m=(n=i==null?void 0:i.mainRiskData)==null?void 0:n.riskInsureLimitVO)==null?void 0:m.paymentFrequencyList)}),s=U(()=>{var a,n;let l=0,t=0;return(((n=(a=i.originData)==null?void 0:a.riskCalcMethodInfoVO)==null?void 0:n.paymentMethodLimitList)||[]).forEach((m,I)=>{I===0&&(l=m.minAmount,t=m.maxAmount),l>m.minAmount&&(l=m.minAmount),t<m.maxAmount&&(t=m.maxAmount)}),o.formInfo.sumInsured=l,{min:l,max:t}}),p=U(()=>{var a,n;let l=0,t=0;return(((n=(a=i.originData)==null?void 0:a.riskCalcMethodInfoVO)==null?void 0:n.paymentMethodLimitList)||[]).forEach((m,I)=>{I===0&&(l=m.minPremium,t=m.maxPremium),l>m.minPremium&&(l=m.minPremium),t<m.maxPremium&&(t=m.maxPremium)}),o.formInfo.premium=l,{min:l,max:t}}),b=U(()=>{var a,n,m,I;const l=(n=(a=i.originData)==null?void 0:a.riskCalcMethodInfoVO)==null?void 0:n.minCopy,t=(I=(m=i.originData)==null?void 0:m.riskCalcMethodInfoVO)==null?void 0:I.maxCopy;return o.formInfo.copy=l,{min:l,max:t}});return Y(()=>{const l={riskType:i.originData.riskType,riskId:i.originData.id,riskCode:i.originData.riskCode,mainRiskCode:i.originData.riskCode,mainRiskId:i.originData.id,riskCategory:i.originData.riskCategory,liabilityVOList:(i.originData.riskLiabilityInfoVOList||[]).map(t=>({liabilityAttributeCode:t.liabilityAttribute,liabilityAttributeValue:t.liabilityAttributeValue,liabilityCode:t.liabilityCode,liabilityId:t.id,liabilityRateType:t.liabilityRateType}))};Object.assign(o==null?void 0:o.formInfo,l)}),x(()=>i.mainRiskInfo,l=>{},{immediate:!0,deep:!0}),(l,t)=>{var m,I,O,V,_,T,w,J,ee,te,ae,oe,ie,ne,ue,le,re,se,de,me,ce,fe,pe,ye,Ve,ke,De,Ie;const a=L("VanStepper"),n=L("VanField");return f(),h("div",tt,[((I=(m=u.originData)==null?void 0:m.riskCalcMethodInfoVO)==null?void 0:I.saleMethod)===1?(f(),v(n,{key:0,modelValue:e(o).formInfo.sumInsured,"onUpdate:modelValue":t[1]||(t[1]=c=>e(o).formInfo.sumInsured=c),label:"\u4FDD\u989D",name:"sumInsured",rules:[{required:!0,message:"\u8BF7\u586B\u5199"}]},{input:k(()=>{var c,E;return[D(a,{modelValue:e(o).formInfo.sumInsured,"onUpdate:modelValue":t[0]||(t[0]=B=>e(o).formInfo.sumInsured=B),min:e(s).min,step:((E=(c=u.originData)==null?void 0:c.riskCalcMethodInfoVO)==null?void 0:E.increaseDecreaseNum)||1,max:e(s).max},null,8,["modelValue","min","step","max"])]}),_:1},8,["modelValue"])):F("",!0),((V=(O=u.originData)==null?void 0:O.riskCalcMethodInfoVO)==null?void 0:V.saleMethod)===2?(f(),v(n,{key:1,modelValue:e(o).formInfo.premium,"onUpdate:modelValue":t[3]||(t[3]=c=>e(o).formInfo.premium=c),label:"\u4FDD\u8D39",name:"premium",rules:[{required:!0,message:"\u8BF7\u586B\u5199"}]},{input:k(()=>{var c,E;return[D(a,{modelValue:e(o).formInfo.premium,"onUpdate:modelValue":t[2]||(t[2]=B=>e(o).formInfo.premium=B),step:((E=(c=u.originData)==null?void 0:c.riskCalcMethodInfoVO)==null?void 0:E.increaseDecreaseNum)||1,min:e(p).min,max:e(p).max},null,8,["modelValue","step","min","max"])]}),_:1},8,["modelValue"])):F("",!0),((T=(_=u.originData)==null?void 0:_.riskCalcMethodInfoVO)==null?void 0:T.saleMethod)===3?(f(),v(n,{key:2,modelValue:e(o).formInfo.copy,"onUpdate:modelValue":t[5]||(t[5]=c=>e(o).formInfo.copy=c),label:"\u4EFD\u6570",name:"copy",rules:[{required:!0,message:"\u8BF7\u586B\u5199"}]},{input:k(()=>[D(a,{modelValue:e(o).formInfo.copy,"onUpdate:modelValue":t[4]||(t[4]=c=>e(o).formInfo.copy=c),step:1,min:e(b).min,max:e(b).max},null,8,["modelValue","min","max"])]),_:1},8,["modelValue"])):F("",!0),((J=(w=u.originData)==null?void 0:w.riskCalcMethodInfoVO)==null?void 0:J.saleMethod)===2&&((ee=u.originData)==null?void 0:ee.riskType)===1?(f(),v(n,{key:3,label:"\u4FDD\u989D",name:"premium",rules:[{required:!0,message:"\u8BF7\u586B\u5199"}]},{input:k(()=>{var c,E;return[D(a,{modelValue:e(o).formInfo.premium,"onUpdate:modelValue":t[6]||(t[6]=B=>e(o).formInfo.premium=B),step:((E=(c=u.originData)==null?void 0:c.riskCalcMethodInfoVO)==null?void 0:E.increaseDecreaseNum)||1,min:e(p).min,max:e(p).max},null,8,["modelValue","step","min","max"])]}),_:1})):F("",!0),!y((ae=(te=u.originData)==null?void 0:te.riskInsureLimitVO)==null?void 0:ae.insurancePeriodValueList)||!y((ie=(oe=u.originData)==null?void 0:oe.riskInsureLimitVO)==null?void 0:ie.insurancePeriodRule)?(f(),v(n,{key:4,modelValue:e(o).formInfo.coverageYear,"onUpdate:modelValue":t[8]||(t[8]=c=>e(o).formInfo.coverageYear=c),label:"\u4FDD\u969C\u671F\u95F4",name:"coverageYear",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:k(()=>[D(P,{modelValue:e(o).formInfo.coverageYear,"onUpdate:modelValue":t[7]||(t[7]=c=>e(o).formInfo.coverageYear=c),options:e(C)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):F("",!0),!y((ue=(ne=u.originData)==null?void 0:ne.riskInsureLimitVO)==null?void 0:ue.paymentPeriodValueList)||!y((re=(le=u.originData)==null?void 0:le.riskInsureLimitVO)==null?void 0:re.paymentPeriodRule)?(f(),v(n,{key:5,modelValue:e(o).formInfo.paymentYear,"onUpdate:modelValue":t[10]||(t[10]=c=>e(o).formInfo.paymentYear=c),label:"\u4EA4\u8D39\u671F\u95F4",name:"paymentYear",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:k(()=>[D(P,{modelValue:e(o).formInfo.paymentYear,"onUpdate:modelValue":t[9]||(t[9]=c=>e(o).formInfo.paymentYear=c),options:e(g)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):F("",!0),!y((de=(se=u.originData)==null?void 0:se.riskInsureLimitVO)==null?void 0:de.paymentFrequencyList)||!y((ce=(me=u.originData)==null?void 0:me.riskInsureLimitVO)==null?void 0:ce.paymentTypeRule)?(f(),v(n,{key:6,modelValue:e(o).formInfo.paymentFrequency,"onUpdate:modelValue":t[12]||(t[12]=c=>e(o).formInfo.paymentFrequency=c),label:"\u4EA4\u8D39\u65B9\u5F0F",name:"paymentFrequency",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:k(()=>[D(P,{modelValue:e(o).formInfo.paymentFrequency,"onUpdate:modelValue":t[11]||(t[11]=c=>e(o).formInfo.paymentFrequency=c),options:e(d)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):F("",!0),y((pe=(fe=u.originData)==null?void 0:fe.riskInsureLimitVO)==null?void 0:pe.annuityDrawTypeList)?F("",!0):(f(),v(n,{key:7,modelValue:e(o).formInfo.annuityDrawDate,"onUpdate:modelValue":t[14]||(t[14]=c=>e(o).formInfo.annuityDrawDate=c),label:"\u9886\u53D6\u65F6\u95F4",name:"annuityDrawDate",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:k(()=>{var c,E;return[D(P,{modelValue:e(o).formInfo.annuityDrawDate,"onUpdate:modelValue":t[13]||(t[13]=B=>e(o).formInfo.annuityDrawDate=B),options:r(e(Me),(E=(c=u.originData)==null?void 0:c.riskInsureLimitVO)==null?void 0:E.annuityDrawTypeList)},null,8,["modelValue","options"])]}),_:1},8,["modelValue"])),y((Ve=(ye=u.originData)==null?void 0:ye.riskInsureLimitVO)==null?void 0:Ve.annuityDrawFrequencyList)?F("",!0):(f(),v(n,{key:8,modelValue:e(o).formInfo.annuityDrawType,"onUpdate:modelValue":t[16]||(t[16]=c=>e(o).formInfo.annuityDrawType=c),label:"\u9886\u53D6\u65B9\u5F0F",name:"annuityDrawType",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:k(()=>{var c,E;return[D(P,{modelValue:e(o).formInfo.annuityDrawType,"onUpdate:modelValue":t[15]||(t[15]=B=>e(o).formInfo.annuityDrawType=B),options:r(e(je),(E=(c=u.originData)==null?void 0:c.riskInsureLimitVO)==null?void 0:E.annuityDrawFrequencyList)},null,8,["modelValue","options"])]}),_:1},8,["modelValue"])),(f(!0),h(j,null,G(((ke=u.originData)==null?void 0:ke.riskLiabilityInfoVOList)||[],(c,E)=>(f(),h("div",{key:c.liabilityId},[c.optionalFlag===1?(f(),v(n,{key:0,label:c.liabilityName,name:"liabilityAttributeValue",rules:[{required:c.liabilityAttributeValue,message:"\u8BF7\u9009\u62E9"}]},{input:k(()=>[A("div",null,[c.liabilityAttributeValue?(f(),v(P,{key:1,modelValue:e(o).formInfo.liabilityVOList[E].liabilityAttributeValue,"onUpdate:modelValue":B=>e(o).formInfo.liabilityVOList[E].liabilityAttributeValue=B,options:e(Fe)},null,8,["modelValue","onUpdate:modelValue","options"])):(f(),h("span",at,"50\u4E07"))])]),_:2},1032,["label","rules"])):(f(),v(n,{key:1,label:c.liabilityName,name:"liabilityAttributeValue",rules:[{required:c.optionalFlag===1&&c.liabilityAttributeValue,message:"\u8BF7\u9009\u62E9"}]},{input:k(()=>[A("div",null,[c.liabilityAttributeValue?(f(),v(P,{key:1,modelValue:e(o).formInfo.liabilityVOList[E].liabilityAttributeValue,"onUpdate:modelValue":B=>e(o).formInfo.liabilityVOList[E].liabilityAttributeValue=B,options:e(Fe)},null,8,["modelValue","onUpdate:modelValue","options"])):(f(),v(P,{key:0,modelValue:e(o).formInfo.liabilityVOList[E].flag,"onUpdate:modelValue":B=>e(o).formInfo.liabilityVOList[E].flag=B,options:e(We)},null,8,["modelValue","onUpdate:modelValue","options"]))])]),_:2},1032,["label","rules"]))]))),128)),((De=u.originData)==null?void 0:De.relationDesc)?(f(),h("div",ot,[it,A("div",null,M((Ie=u.originData)==null?void 0:Ie.relationDesc),1)])):F("",!0)])}}});const nt=u=>(z("data-v-aeeb813a"),u=u(),Q(),u),ut={class:"com-risk-list-wrapper"},lt=nt(()=>A("div",{class:"popup-title"},"\u9009\u62E9\u9644\u52A0\u9669",-1)),rt={class:"risk-list"},st={class:"footer-bar"},dt=W("\u786E\u8BA4"),mt=$({props:{riskList:{type:Array,required:!0,default:()=>[]},show:{type:Boolean,required:!0,default:!1},collocationList:{type:Array,default:()=>[]},disabled:{type:Array,required:!0,default:()=>[]},modelValue:{type:Array,required:!0,default:()=>[]}},emits:["finished","close","update:modelValue"],setup(u,{emit:i}){const o=u,y=R([]),r=R([]),C=R(o.disabled),g=N({show:o.show,currentChecked:[]}),d=(l,t)=>{o.collocationList.forEach(a=>{l===a.riskId&&(t?a.collocationType===1?g.currentChecked=g.currentChecked.filter(n=>!(n===a.collocationRiskId||n===l)):a.collocationType===3&&C.value.filter(n=>n!==a.collocationRiskId):a.collocationType===1?g.currentChecked.push(a.collocationRiskId,l):a.collocationType===3&&C.value.push(a.collocationRiskId))})},s=l=>{var a,n,m;const t=g.currentChecked.includes(l);console.log("status",t),d(l,t),(m=(n=(a=y==null?void 0:y.value)==null?void 0:a[l])==null?void 0:n.toggle)==null||m.call(n)},p=()=>{i("close")},b=()=>{const l=o.riskList.filter(t=>g.currentChecked.includes(t.id));i("update:modelValue",r),i("finished",l),i("close")};return Ue(()=>{y.value=[]}),x(()=>o.modelValue,l=>{r.value=l,C.value=l},{deep:!0,immediate:!0}),(l,t)=>{const a=L("van-checkbox"),n=L("VanCell"),m=L("van-cell-group"),I=L("van-checkbox-group"),O=L("VanButton"),V=L("VanPopup");return f(),h("div",ut,[D(V,{show:e(g).show,"onUpdate:show":t[2]||(t[2]=_=>e(g).show=_),title:"\u9009\u62E9\u9644\u52A0\u9669","show-footer":"",position:"bottom",closeable:"",onClose:p},{default:k(()=>[lt,A("div",rt,[D(I,{modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=_=>r.value=_)},{default:k(()=>[D(m,{inset:""},{default:k(()=>[(f(!0),h(j,null,G(u.riskList,_=>(f(),v(n,{key:_.id,title:_.riskName,onClick:T=>s(_.id)},{"right-icon":k(()=>[D(a,{ref_for:!0,ref:T=>y.value[_.id]=T,disabled:C.value.includes(_.id),shape:"square",name:_.id,onClick:t[0]||(t[0]=$e(()=>{},["stop"]))},null,8,["disabled","name"])]),_:2},1032,["title","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])]),A("div",st,[D(O,{type:"primary",disabled:!e(g).currentChecked.length,block:"",onClick:b},{default:k(()=>[dt]),_:1},8,["disabled"])])]),_:1},8,["show"])])}}});var ct=K(mt,[["__scopeId","data-v-aeeb813a"]]);const ft={class:"risk-list-wrapper"},pt={key:0,class:"add-rider-risk"},yt={class:"left-part"},Vt=W("+ \u9644\u52A0\u9669"),kt=$({props:{riskInfo:{type:Object,required:!0,default:()=>{}},originData:{type:Object,required:!0,default:()=>{}},pickFactor:{type:Function,required:!0,default:()=>{}},riskKey:{type:[String,Number],required:!0,default:0}},setup(u){var g;const i=u,[o,y]=Z(!1);R(null),R(null);const r=N({mainRiskInfo:i.riskInfo,riderRiskInfo:(g=i.riskInfo)==null?void 0:g.riderRiskVOList,requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[]}),C=(d,s)=>{(d||[]).forEach(p=>{Object.assign(r.riderRiskInfo,{[p.id]:{}})}),r.disabledList=s,r.requiredRiderRiskData=r.requiredRiderRiskData.concat(d)};return Y(()=>{r.requiredRiderRiskData}),x(()=>r.mainRiskInfo,d=>{},{deep:!0,immediate:!0}),x(()=>r.riderRiskInfo,()=>{},{deep:!0,immediate:!0}),x(()=>r.requiredRiderRiskData,d=>{const s=[r.mainRiskData,...d];let p=[],b=[];s.forEach(l=>{var a;const t=((a=l==null?void 0:l.riskCalcMethodInfoVO)==null?void 0:a.riskFactorRelationList)||[];p=p.concat(t.filter(n=>n.factorObject==="insured").map(n=>n.factorCode)),b=b.concat(t.filter(n=>n.factorObject==="holder").map(n=>n.factorCode))}),(d||[]).forEach(l=>{Object.assign(r.riderRiskInfo,{[l.id]:{}})}),i.pickFactor({insuredFactorList:[...new Set(p)],holderFactorList:[...new Set(b)]})},{deep:!0,immediate:!0}),x(()=>i.originData,d=>{(d||[]).forEach(s=>{s.riskType===1?(r.mainRiskData=s,r.requiredRiderRiskData=(s==null?void 0:s.requiredRiderRiskVOList)||[],r.riderRiskList=s==null?void 0:s.optionalRiderRiskVOList):r.riderRiskList.push(s)})},{deep:!0,immediate:!0}),x(()=>i.riskInfo,()=>{},{immediate:!0,deep:!0}),(d,s)=>(f(),h("div",ft,[D(he,{"form-info":e(r).mainRiskInfo,index:u.riskKey,"origin-data":e(r).mainRiskData},null,8,["form-info","index","origin-data"]),(f(!0),h(j,null,G(e(r).requiredRiderRiskData,(p,b)=>(f(),v(he,{key:p.id,"form-info":e(r).riderRiskInfo[p.id],index:b,"main-risk-data":e(r).mainRiskData,"main-risk-info":e(r).mainRiskInfo,"origin-data":p},null,8,["form-info","index","main-risk-data","main-risk-info","origin-data"]))),128)),e(r).riderRiskList.length-e(r).checkedList.length?(f(),h("div",pt,[A("span",yt,M(`\u5171\u6709${e(r).riderRiskList.length-e(r).checkedList.length}\u6B3E\u9644\u52A0\u9669\u53EF\u4EE5\u6DFB\u52A0`),1),D(Ne,{activied:"",onClick:s[0]||(s[0]=p=>e(y)(!0))},{default:k(()=>[Vt]),_:1})])):F("",!0),e(o)?(f(),v(ct,{key:1,modelValue:e(r).checkedList,"onUpdate:modelValue":s[1]||(s[1]=p=>e(r).checkedList=p),show:e(o),disabled:e(r).disabledList,"risk-list":e(r).riderRiskList,"collocation-list":e(r).mainRiskData.collocationVOList||[],onFinished:C,onClose:s[2]||(s[2]=p=>e(y)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):F("",!0)]))}});var Oe=K(kt,[["__scopeId","data-v-db11c378"]]);const Dt=(u={})=>X.get(`/api/product/insureProductDetail/${u==null?void 0:u.productId}`,u),It=(u={})=>X.post("/api/insurance/premiumCalc",u);const Ae=u=>(z("data-v-70647bb6"),u=u(),Q(),u),bt={key:0,class:"part-card"},vt=Ae(()=>A("div",{class:"part-title"},"\u6295\u4FDD\u4EBA",-1)),gt={key:1,class:"part-card"},_t=Ae(()=>A("div",{class:"part-title"},"\u88AB\u4FDD\u4EBA",-1)),Et={class:"risk-content"},Ft={key:0,class:"risk"},Lt={key:1,class:"plan-risk"},Ct={class:"footer-bar"},ht={class:"trial-result"},Ot=W("\u53BB\u8BD5\u7B97"),At=W("\u53BB\u6295\u4FDD"),Bt=$({setup(u){const i=R({personVO:{}}),o=R({insuredCode:"",personVO:{}}),y=R({}),r=R({}),C=R({}),g=R({}),d=N({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0}),s=()=>{var n,m,I;const t=Object.values(y.value[d.currentPlan].riderRiskVOList).map(O=>{const V=O;if(V.paymentYear==="3"){const _=(y.value[d.currentPlan].paymentYear||"").split("_");_[1]&&(_[1]-=1),V.paymentYear=_.join("_")}return V}),a={holder:{personVO:S(q({},i.value.personVO),{birthday:i.value.personVO.birthday&&`${i.value.personVO.birthday} 00:00:00`})},productCode:(n=d==null?void 0:d.riskBaseInfo)==null?void 0:n.productCode,insuredVOList:[S(q({},o.value),{personVO:S(q({},o.value.personVO),{birthday:o.value.personVO.birthday&&`${o.value.personVO.birthday} 00:00:00`}),productPlanVOList:[{planCode:d.currentPlan||((I=(m=d.riskPlanData)==null?void 0:m[0])==null?void 0:I.planCode),riskVOList:[S(q({},y.value[d.currentPlan]),{riderRiskVOList:t})]}]})]};It(q({},a)).then(({code:O,data:V})=>{O==="10000"&&(d.trialResult=V,d.canTrial=!1)})},p=()=>{var t,a,n,m,I;Promise.all([(a=(t=r==null?void 0:r.value)==null?void 0:t.validateForm)==null?void 0:a.call(t),(m=(n=C==null?void 0:C.value)==null?void 0:n.validateForm)==null?void 0:m.call(n),(I=g==null?void 0:g.value)==null?void 0:I.validate()]).then(()=>{s()})},b=()=>{Dt({productId:115}).then(({code:t,data:a})=>{t==="10000"&&(d.riskBaseInfo=a==null?void 0:a.productBasicInfoVO,a==null||a.productRelationPlanVOList.forEach((n,m)=>{m===0&&(d.currentPlan=n.planCode),Object.assign(y.value,{[n.planCode]:{liabilityVOList:[],riderRiskVOList:{}}})}),d.riskData=(a==null?void 0:a.riskDetailVOList)||[],d.riskPlanData=(a==null?void 0:a.productRelationPlanVOList)||[])}).finally(()=>{})},l=t=>{d.holderFactor=t.insuredFactorList,d.insuredFactor=t.holderFactorList};return x([()=>y.value,()=>i.value,()=>o.value],t=>{t&&d.canTrial&&(d.canTrial=!0)},{deep:!0}),Y(()=>{b()}),(t,a)=>{const n=L("VanForm"),m=L("VanTab"),I=L("VanTabs"),O=L("VanButton"),V=L("ZaPageWrap");return f(),v(V,{class:"page-trial-wrapper"},{default:k(()=>{var _,T;return[e(d).holderFactor.length?(f(),h("div",bt,[vt,D(Ce,{ref_key:"holderRef",ref:r,"insured-code":(_=e(d).riskBaseInfo)==null?void 0:_.insuredCode,"form-info":i.value.personVO,"factor-list":e(d).holderFactor},null,8,["insured-code","form-info","factor-list"])])):F("",!0),e(d).insuredFactor.length?(f(),h("div",gt,[_t,D(Ce,{ref_key:"insuredRef",ref:C,"insured-code":(T=e(d).riskBaseInfo)==null?void 0:T.insuredCode,"form-info":o.value.personVO,"factor-list":e(d).insuredFactor},null,8,["insured-code","form-info","factor-list"])])):F("",!0),A("div",Et,[e(d).riskData.length?(f(),h("div",Ft,[D(n,{ref_key:"riskFormRef",ref:g,"input-align":"right","error-message-align":"right"},{default:k(()=>[D(Oe,{"risk-info":y.value,"risk-key":0,"origin-data":e(d).riskData,"pick-factor":l},null,8,["risk-info","origin-data"])]),_:1},512)])):F("",!0),e(d).riskPlanData.length?(f(),h("div",Lt,[D(n,{ref_key:"riskFormRef",ref:g,"input-align":"right","error-message-align":"right"},{default:k(()=>[D(I,{modelValue:e(d).currentPlan,"onUpdate:modelValue":a[0]||(a[0]=w=>e(d).currentPlan=w)},{default:k(()=>[(f(!0),h(j,null,G(e(d).riskPlanData,w=>(f(),v(m,{key:w.planCode,name:w.planCode,title:w.planName},{default:k(()=>[D(Oe,{"risk-info":y.value[w.planCode],"origin-data":w.riskDetailVOList,"pick-factor":l,"risk-key":w.planCode},null,8,["risk-info","origin-data","risk-key"])]),_:2},1032,["name","title"]))),128))]),_:1},8,["modelValue"])]),_:1},512)])):F("",!0)]),A("div",Ct,[A("span",ht,M(e(d).trialResult.premium||0),1),e(d).canTrial?(f(),v(O,{key:0,type:"primary",onClick:p},{default:k(()=>[Ot]),_:1})):(f(),v(O,{key:1,type:"primary",onClick:p},{default:k(()=>[At]),_:1}))])]}),_:1})}}});var Tt=K(Bt,[["__scopeId","data-v-70647bb6"]]);export{Tt as default};
