var $e=Object.defineProperty,qe=Object.defineProperties;var Ne=Object.getOwnPropertyDescriptors;var Ae=Object.getOwnPropertySymbols;var Me=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var Re=(u,o,V)=>o in u?$e(u,o,{enumerable:!0,configurable:!0,writable:!0,value:V}):u[o]=V,K=(u,o)=>{for(var V in o||(o={}))Me.call(o,V)&&Re(u,V,o[V]);if(Ae)for(var V of Ae(o))Se.call(o,V)&&Re(u,V,o[V]);return u},H=(u,o)=>qe(u,Ne(o));import{g as M,L as S,X as U,r as O,h as D,m as x,n as C,k as L,y as _,z as t,a1 as Be,a2 as xe,a5 as z,C as $,a4 as G,x as N,d as W,j as A,s as P,I as w,a6 as Ye,o as Te,F as Q,E as J,af as je,ag as Ge,B as Ue,D as Ke}from"./vendor-89e50ef2.js";import{g as He}from"./index-28499fdd.js";import{l as Oe}from"./useStorage-228c1c9a.js";import{_ as Y,b as we}from"./index-1de39856.js";const We=[{label:"\u7537",value:"1"},{label:"\u5973",value:"2"}],Xe=[{label:"\u6709",value:"1"},{label:"\u65E0",value:"2"}],ze=[{value:1,label:"\u7B2C5\u4E2A\u4FDD\u5355\u5468\u5E74\u65E5"},{value:2,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8455\u5468\u5C81"},{value:3,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8460\u5468\u5C81"},{value:4,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8465\u5468\u5C81"},{value:5,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8470\u5468\u5C81"},{value:6,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8475\u5468\u5C81"}],Qe=[{value:1,label:"\u5E74\u9886"},{value:2,label:"\u6708\u9886"}],X=[{label:"\u8DB8\u4EA4",value:"1"},{label:"\u5E74\u4EA4",value:"2"},{label:"\u534A\u5E74\u4EA4",value:"3"},{label:"\u5B63\u4EA4",value:"4"},{label:"\u6708\u4EA4",value:"5"}],Je=[{name:"\u540C\u4E3B\u9669\u671F\u95F4\u51CF1",value:"3"},{name:"\u65E0\u9650\u5236",value:"2"}],Pe=[{label:"\u8FD4\u4FDD\u989D",value:"1"},{label:"\u8FD4\u4FDD\u8D39",value:"2"}],Ze=[{label:"\u6295\u4FDD",value:"0"},{label:"\u4E0D\u6295\u4FDD",value:"-1"}],Nt={1:"\u5929",2:"\u6708",3:"\u5E74",4:"\u81F3$\u5C81",5:"\u81F3\u7EC8\u8EAB",day:1,month:2,year:3,to:4,to_life:5},Mt={1:"\u8DB8\u4EA4",2:"$\u5E74\u4EA4",3:"\u81F3$\u5C81",single:1,year:2,to:3};const et=u=>(Be("data-v-4b261f8d"),u=u(),xe(),u),tt={class:"com-occupational-wrapper"},it=et(()=>_("div",{class:"popup-title"},"\u9009\u62E9\u804C\u4E1A",-1)),at={class:"popup-content"},ot=M({props:{modelValue:{type:Array,required:!0,default:()=>[]},insuredCode:{type:String,required:!0,default:""},show:{type:Boolean,required:!0,default:!1}},emits:["finish","close","update:modelValue"],setup(u,{emit:o}){const V=u,E=S({show:V.show,options:[],currentValue:""}),I=()=>{o("close")},i=({value:v,selectedOptions:s})=>{const y=(s||[]).map(m=>m.value).join("/"),c=+s[s.length-1].name;o("update:modelValue",c),o("finish",y),I()},k=v=>{const s=v,y=c=>{c.forEach(m=>{const g=m;g.children.length?y(g.children):g.children=null})};return y(s),s},h=(v="")=>{var c;const s=`${(c=v==null?void 0:v.toLocaleUpperCase)==null?void 0:c.call(v)}_OCCUPATION`,y=Oe.get("occupational")||{};if(y[s]){E.options=y[s];return}He({dictCodeList:[s]}).then(({code:m,data:g})=>{var p;if(m==="10000"){const a=k(((p=g==null?void 0:g[0])==null?void 0:p.dictItemList)||[]);E.options=a,y[s]=a,Oe.set("occupational",y)}})};return U(()=>V,()=>{h(V.insuredCode)},{deep:!0,immediate:!0}),U(()=>V.modelValue,v=>{},{deep:!0,immediate:!0}),(v,s)=>{const y=O("van-cascader"),c=O("VanPopup");return D(),x("div",tt,[C(c,{show:t(E).show,"onUpdate:show":s[1]||(s[1]=m=>t(E).show=m),"show-footer":"",position:"bottom",closeable:"",onClose:I},{default:L(()=>[it,_("div",at,[C(y,{modelValue:t(E).currentValue,"onUpdate:modelValue":s[0]||(s[0]=m=>t(E).currentValue=m),title:"\u8BF7\u9009\u62E9\u804C\u4E1A","show-header":!1,placeholder:"\u8BF7\u9009\u62E9",options:t(E).options,"active-color":"#0d6efe","field-names":{text:"value",value:"code",children:"children"},onFinish:i},null,8,["modelValue","options"])])]),_:1},8,["show"])])}}});var ut=Y(ot,[["__scopeId","data-v-4b261f8d"]]);const nt={class:"com-personal-info-wrapper"},lt={key:0,class:"placeholder"},rt={key:1},st=M({props:{formInfo:{default:()=>({})},insuredCode:{default:""},factorList:{default:()=>[]},ageRange:{default:()=>[]}},setup(u,{expose:o}){const V=u,[E,I]=z(),[i,k]=z(),h=$(),v=G("source")||{},s=S({formInfo:V.formInfo,occupationalText:""}),y=a=>{s.occupationalText=a},c=()=>{k(!1)},m=()=>new Promise((a,e)=>{h==null||h.value.validate().then(()=>{a("")},()=>{e()})}),g=a=>{const e=a||[];for(let l=0;l<e.length;l++)for(let r=l+1;r<e.length;r++){const n=e[l].split("_"),f=e[r].split("_"),R=e[l];n[0]===f[0]?n>f&&(e[l]=e[r],e[r]=R):n[0]==="age"&&(e[l]=e[r],e[r]=R)}return e},p=N(()=>{const a=g(V==null?void 0:V.ageRange),e=(R="")=>{const b=+R.split("_")[1],j=R.split("_")[0];return[b,j]},l=e(a[0]),r=e(a[a.length-1]),n=W().subtract(l[0],l[1]==="age"?"year":"day").format("YYYY-MM-DD"),f=W().subtract(r[0],r[1]==="age"?"year":"day").format("YYYY-MM-DD");return console.log("ageRangeObj",new Date(f),new Date(n)),{minAge:new Date(f),maxAge:new Date(n)}});return o({validateForm:m,ageRangeObj:p.value}),(a,e)=>{const l=O("VanField"),r=O("ProRadioButton"),n=O("VanForm"),f=O("van-datetime-picker"),R=O("van-popup");return D(),x("div",nt,[C(n,{ref_key:"formRef",ref:h,"input-align":"right","error-message-align":"right"},{default:L(()=>[t(v).type==="proposal"&&(t(v).type==="add"||t(v).type==="repeatAdd")||t(v).type!=="proposal"&&(u.factorList.includes("APPLICANT.AGE")||u.factorList.includes("AGE")||u.factorList.includes("DAY")||u.factorList.includes("APPLICANT.DAY"))?(D(),A(l,{key:0,modelValue:t(s).formInfo.birthday,"onUpdate:modelValue":e[0]||(e[0]=b=>t(s).formInfo.birthday=b),rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u51FA\u751F\u65E5\u671F"}],name:"birth",label:"\u51FA\u751F\u65E5\u671F",class:"isLink",readonly:"","is-link":"",placeholder:"\u8BF7\u9009\u62E9",onClick:e[1]||(e[1]=b=>t(I)(!0))},null,8,["modelValue"])):P("",!0),t(v).type==="proposal"&&(t(v).type==="add"||t(v).type==="repeatAdd")||t(v).type!=="proposal"&&(u.factorList.includes("APPLICANT.GENDER")||u.factorList.includes("GENDER"))?(D(),A(l,{key:1,modelValue:t(s).formInfo.gender,"onUpdate:modelValue":e[3]||(e[3]=b=>t(s).formInfo.gender=b),name:"gender",label:"\u6027\u522B",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6027\u522B"}]},{input:L(()=>[C(r,{modelValue:t(s).formInfo.gender,"onUpdate:modelValue":e[2]||(e[2]=b=>t(s).formInfo.gender=b),options:t(We)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):P("",!0),u.factorList.includes("SOCIAL_INS")?(D(),A(l,{key:2,modelValue:t(s).formInfo.socialSecurity,"onUpdate:modelValue":e[5]||(e[5]=b=>t(s).formInfo.socialSecurity=b),name:"socialSecurity",label:"\u793E\u4FDD",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u793E\u4FDD"}]},{input:L(()=>[C(r,{modelValue:t(s).formInfo.socialSecurity,"onUpdate:modelValue":e[4]||(e[4]=b=>t(s).formInfo.socialSecurity=b),options:t(Xe)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):P("",!0),u.factorList.includes("OCCUPATION_CATEGORY")?(D(),A(l,{key:3,modelValue:t(s).formInfo.occupationalClass,"onUpdate:modelValue":e[6]||(e[6]=b=>t(s).formInfo.occupationalClass=b),rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u804C\u4E1A\u7C7B\u578B"}],name:"occupationalClass",label:"\u804C\u4E1A\u7C7B\u578B","is-link":"",readonly:"",placeholder:"\u8BF7\u9009\u62E9",onClick:e[7]||(e[7]=b=>t(k)(!0))},{input:L(()=>[t(s).occupationalText?(D(),x("div",rt,w(t(s).occupationalText),1)):(D(),x("span",lt,"\u8BF7\u9009\u62E9"))]),_:1},8,["modelValue"])):P("",!0)]),_:1},512),C(R,{show:t(E),"onUpdate:show":e[10]||(e[10]=b=>Ye(E)?E.value=b:null),position:"bottom"},{default:L(()=>[C(f,{type:"date","min-date":t(p).minAge,"max-date":t(p).maxAge,onConfirm:e[8]||(e[8]=b=>{t(s).formInfo.birthday=t(W)(b).format("YYYY-MM-DD"),t(I)(!1)}),onCancel:e[9]||(e[9]=b=>t(I)(!1))},null,8,["min-date","max-date"])]),_:1},8,["show"]),t(i)?(D(),A(ut,{key:0,modelValue:t(s).formInfo.occupationalClass,"onUpdate:modelValue":e[11]||(e[11]=b=>t(s).formInfo.occupationalClass=b),show:t(i),"insured-code":u.insuredCode,onFinish:y,onClose:c},null,8,["modelValue","show","insured-code"])):P("",!0)])}}});var St=Y(st,[["__scopeId","data-v-7b008a27"]]);const dt={class:"com-risk-card-wrapper part-card"},mt={class:"custom-field"},ct={class:"field-tip"},ft={class:"custom-field"},pt={class:"field-tip"},yt={class:"custom-field"},Dt={class:"field-tip"},gt={key:0},Vt={key:9,class:"liab-desc"},kt=M({props:{originData:{default:()=>({})},formInfo:{default:()=>({})},mainRiskData:{default:()=>({})},mainRiskInfo:{default:()=>({})},index:{default:0},removeRisk:{type:Function,default:()=>{}},removeRiskList:{default:()=>[]},enums:{default:()=>({})}},setup(u){const o=u,V=$({}),E=G("premium")||{};V.value=G("enumList")||{};const I=$({chargePeriod:{disabled:!1,prevent:!1},coveragePeriod:{disabled:!1,prevent:!1},paymentFrequency:{disabled:!1,prevent:!1}}),i=S({formInfo:o.formInfo}),k=a=>typeof a!="boolean"&&!a||Array.isArray(a)&&!a.length?!0:{}.toString.call(a)==="[object Object]"?Object.keys(a).length:!1,h=(a,e,l={})=>{let r=e;return Array.isArray(e)||(r=[`${r}`]),(a||[]).filter(n=>r.includes(`${n.value}`)||r.includes(n.value))},v=N(()=>{var a,e,l,r,n;return((a=o.originData)==null?void 0:a.riskType)===1?h(o.enums.RISK_INSURANCE_PERIOD,((e=o.originData.riskInsureLimitVO)==null?void 0:e.insurancePeriodValueList)||[]):((l=o.originData)==null?void 0:l.periodType)===2?h([{value:"year_1",name:"1\u5E74"}],["year_1"]):h((r=o.enums)==null?void 0:r.RISK_INSURANCE_PERIOD,((n=o.mainRiskData.riskInsureLimitVO)==null?void 0:n.insurancePeriodValueList)||[])}),s=N(()=>{var a,e,l,r,n,f,R,b;return((a=o.originData)==null?void 0:a.riskType)===1?h((e=o==null?void 0:o.enums)==null?void 0:e.RISK_PAYMENT_PERIOD,((l=o.originData.riskInsureLimitVO)==null?void 0:l.paymentPeriodValueList)||[]):((r=o.originData)==null?void 0:r.exemptFlag)===1?h(Je,[`${(f=(n=o==null?void 0:o.originData)==null?void 0:n.riskInsureLimitVO)==null?void 0:f.paymentPeriodRule}`]):((R=o.originData)==null?void 0:R.periodType)===2?h([{value:"year_1",name:"1\u5E74\u4EA4"}],["year_1"]):h(o.enums.RISK_PAYMENT_PERIOD,((b=o.mainRiskData.riskInsureLimitVO)==null?void 0:b.paymentPeriodValueList)||[])}),y=N(()=>{var a,e,l,r,n;return((a=o.originData)==null?void 0:a.riskType)===1?h(X,((e=o.originData.riskInsureLimitVO)==null?void 0:e.paymentFrequencyList)||[]):((l=o.originData.riskInsureLimitVO)==null?void 0:l.paymentTypeRule)===1?h(X,((r=o.mainRiskData.riskInsureLimitVO)==null?void 0:r.paymentFrequencyList)||[]):h(X,((n=o.mainRiskData.riskInsureLimitVO)==null?void 0:n.paymentFrequencyList)||[])}),c=N(()=>{var l,r;let a=0,e=0;return(((r=(l=o.originData)==null?void 0:l.riskCalcMethodInfoVO)==null?void 0:r.paymentMethodLimitList)||[]).forEach((n,f)=>{f===0&&(a=n.minAmount,e=n.maxAmount),a>n.minAmount&&(a=n.minAmount),e<n.maxAmount&&(e=n.maxAmount)}),i.formInfo.amount=a,{min:a,max:e}}),m=N(()=>{var l,r;let a=0,e=0;return(((r=(l=o.originData)==null?void 0:l.riskCalcMethodInfoVO)==null?void 0:r.paymentMethodLimitList)||[]).forEach((n,f)=>{f===0&&(a=n.minPremium,e=n.maxPremium),a>n.minPremium&&(a=n.minPremium),e<n.maxPremium&&(e=n.maxPremium)}),i.formInfo.premium=a,{min:a,max:e}}),g=N(()=>{var l,r,n,f;const a=((r=(l=o.originData)==null?void 0:l.riskCalcMethodInfoVO)==null?void 0:r.minCopy)||1,e=(f=(n=o.originData)==null?void 0:n.riskCalcMethodInfoVO)==null?void 0:f.maxCopy;return i.formInfo.copy=`${a||1}`,{min:a,max:e}}),p=(a,e,l)=>{var n,f;const r=((f=(n=o.originData)==null?void 0:n.riskCalcMethodInfoVO)==null?void 0:f.increaseDecreaseNum)||1;if(l==="sumInsured"){if(+a>c.value.max)return`\u91D1\u989D\u6700\u5927${c.value.max}\u5143`;if(+a<c.value.min)return`\u91D1\u989D\u6700\u5C0F${c.value.min}\u5143`}else{if(+a>m.value.max)return`\u91D1\u989D\u6700\u5927${m.value.max}\u5143`;if(+a<m.value.min)return`\u91D1\u989D\u6700\u5C0F${m.value.min}\u5143`}return+a%r===0?"":`\u91D1\u989D\u5FC5\u987B\u662F${r}\u7684\u500D\u6570`};return Te(()=>{var e,l;const a={riskType:o.originData.riskType,riskId:o.originData.id,riskName:o.originData.riskName,riskCode:o.originData.riskCode,mainRiskCode:(e=o==null?void 0:o.mainRiskData)==null?void 0:e.riskCode,mainRiskId:(l=o==null?void 0:o.mainRiskData)==null?void 0:l.id,riskCategory:o.originData.riskCategory,liabilityVOList:(o.originData.riskLiabilityInfoVOList||[]).map(r=>H(K({},r),{liabilityAttributeCode:r.liabilityAttributeType,liabilityCode:r.liabilityCode,liabilityRateType:r.liabilityRateType}))};Object.assign(i==null?void 0:i.formInfo,a)}),U(()=>{var a;return(a=i.formInfo)==null?void 0:a.paymentFrequency},(a=0)=>{var e,l,r;[3].includes(((e=o.originData.riskCalcMethodInfoVO)==null?void 0:e.saleMethod)||0)&&(((r=(l=o.originData)==null?void 0:l.riskCalcMethodInfoVO)==null?void 0:r.paymentMethodLimitList)||[]).forEach(n=>{+n.paymentFrequency==+a&&Object.assign(i.formInfo,{amount:n.perCopyAmount,premium:n.perCopyPremium})}),+a==1&&i.formInfo.chargePeriod!=="single"&&(i.formInfo.chargePeriod="single")}),U(()=>{var a;return(a=i.formInfo)==null?void 0:a.copy},a=>{var e,l;((e=o.originData.riskCalcMethodInfoVO)==null?void 0:e.saleMethod)===4&&(i.formInfo.amount=+(a||1)*(((l=o.originData.riskCalcMethodInfoVO)==null?void 0:l.fixedAmount)||0))}),U(()=>{var a;return(a=i.formInfo)==null?void 0:a.chargePeriod},a=>{a==="single"&&+(i.formInfo.paymentFrequency||0)!=1&&(i.formInfo.paymentFrequency=1)}),U(()=>o==null?void 0:o.mainRiskInfo,a=>{var e,l,r,n,f,R;a&&o.originData.riskType===2&&(((l=(e=o.originData)==null?void 0:e.riskInsureLimitVO)==null?void 0:l.insurancePeriodRule)===1&&(a.coveragePeriod?I.value.coveragePeriod.disabled=!0:I.value.coveragePeriod.prevent=!0,i.formInfo.coveragePeriod=a.coveragePeriod||""),((n=(r=o.originData)==null?void 0:r.riskInsureLimitVO)==null?void 0:n.paymentPeriodRule)===1&&(a.chargePeriod?I.value.chargePeriod.disabled=!0:I.value.chargePeriod.prevent=!0,i.formInfo.chargePeriod=a.chargePeriod||""),((R=(f=o.originData)==null?void 0:f.riskInsureLimitVO)==null?void 0:R.paymentTypeRule)===1&&(a.paymentFrequency?I.value.paymentFrequency.disabled=!0:I.value.paymentFrequency.prevent=!0,i.formInfo.paymentFrequency=a.paymentFrequency||0))},{immediate:!0,deep:!0}),(a,e)=>{var j,Z,ee,te,ie,ae,oe,ue,ne,le,re,se,de,me,ce,fe,pe,ye,De,ge,Ve,ke,Ie,ve,be,Fe,Le,he,Ce,Ee;const l=O("ProSvg"),r=O("ProTitle"),n=O("VanStepper"),f=O("VanField"),R=O("ProRadioButton"),b=O("ProExpand");return D(),x("div",dt,[C(r,{"risk-type":u.originData.riskType,title:u.originData.riskName},{default:L(()=>[u.removeRiskList.includes(u.originData.id)?(D(),x("div",{key:0,class:"delete-risk",onClick:e[0]||(e[0]=d=>u.removeRisk(u.originData.id))},[C(l,{name:"delete",color:"#0d6efe"})])):P("",!0)]),_:1},8,["risk-type","title"]),((j=u.originData.riskCalcMethodInfoVO)==null?void 0:j.saleMethod)===1&&u.originData.exemptFlag===2?(D(),A(f,{key:0,modelValue:t(i).formInfo.amount,"onUpdate:modelValue":e[2]||(e[2]=d=>t(i).formInfo.amount=d),label:"\u4FDD\u989D",name:"amount",rules:[{required:!0,message:"\u8BF7\u586B\u5199"},{trigger:"onChange",validator:(...d)=>p(...d,"sumInsured")}]},{input:L(()=>{var d,F;return[_("div",mt,[C(n,{modelValue:t(i).formInfo.amount,"onUpdate:modelValue":e[1]||(e[1]=B=>t(i).formInfo.amount=B),"input-width":"64px",min:t(c).min,step:((d=u.originData.riskCalcMethodInfoVO)==null?void 0:d.increaseDecreaseNum)||1,max:t(c).max},null,8,["modelValue","min","step","max"]),_("span",ct,w(`\u91D1\u989D\u6700\u4F4E${t(c).min}\u5143\uFF0C\u4E3A${((F=u.originData.riskCalcMethodInfoVO)==null?void 0:F.increaseDecreaseNum)||1}\u7684\u500D\u6570`),1)])]}),_:1},8,["modelValue","rules"])):P("",!0),((ee=(Z=u.originData)==null?void 0:Z.riskCalcMethodInfoVO)==null?void 0:ee.saleMethod)===2?(D(),A(f,{key:1,modelValue:t(i).formInfo.premium,"onUpdate:modelValue":e[4]||(e[4]=d=>t(i).formInfo.premium=d),label:"\u4FDD\u8D39",name:"premium",rules:[{required:!0,message:"\u8BF7\u586B\u5199"},{trigger:"onChange",validator:(...d)=>p(...d,"premium")}]},{input:L(()=>{var d,F,B,T;return[_("div",ft,[C(n,{modelValue:t(i).formInfo.premium,"onUpdate:modelValue":e[3]||(e[3]=q=>t(i).formInfo.premium=q),step:((F=(d=u.originData)==null?void 0:d.riskCalcMethodInfoVO)==null?void 0:F.increaseDecreaseNum)||1,min:t(m).min,"input-width":"64px",max:t(m).max},null,8,["modelValue","step","min","max"]),_("span",pt,w(`\u91D1\u989D\u6700\u4F4E${t(m).min}\u5143\uFF0C\u4E3A${((T=(B=u.originData)==null?void 0:B.riskCalcMethodInfoVO)==null?void 0:T.increaseDecreaseNum)||1}\u7684\u500D\u6570`),1)])]}),_:1},8,["modelValue","rules"])):P("",!0),((ie=(te=u.originData)==null?void 0:te.riskCalcMethodInfoVO)==null?void 0:ie.saleMethod)===3||((oe=(ae=u.originData)==null?void 0:ae.riskCalcMethodInfoVO)==null?void 0:oe.saleMethod)===4&&(((ne=(ue=u.originData)==null?void 0:ue.riskCalcMethodInfoVO)==null?void 0:ne.minCopy)||((re=(le=u.originData)==null?void 0:le.riskCalcMethodInfoVO)==null?void 0:re.maxCopy))?(D(),A(f,{key:2,modelValue:t(i).formInfo.copy,"onUpdate:modelValue":e[6]||(e[6]=d=>t(i).formInfo.copy=d),label:"\u6295\u4FDD\u4EFD\u6570",name:"copy",rules:[{required:!0,message:"\u8BF7\u586B\u5199"}]},{input:L(()=>[_("div",yt,[C(n,{modelValue:t(i).formInfo.copy,"onUpdate:modelValue":e[5]||(e[5]=d=>t(i).formInfo.copy=d),step:1,min:t(g).min,max:t(g).max},null,8,["modelValue","min","max"]),_("span",Dt,w(`${t(g).min}\u4EFD\u8D77\u8D2D\uFF0C\u6700\u591A\u8D2D\u4E70${t(g).max}\u4EFD`),1)])]),_:1},8,["modelValue"])):P("",!0),(![1].includes(((se=u.originData.riskCalcMethodInfoVO)==null?void 0:se.saleMethod)||0)||((de=u.originData)==null?void 0:de.exemptFlag)===1)&&((ce=t(E))==null?void 0:ce[(me=u.originData)==null?void 0:me.riskCode])?(D(),A(f,{key:3,label:"\u4FDD\u989D"},{input:L(()=>{var d,F,B,T;return[_("div",null,w(((d=u.originData.riskCalcMethodInfoVO)==null?void 0:d.fixedAmount)||((T=(B=t(E))==null?void 0:B[(F=u.originData)==null?void 0:F.riskCode])==null?void 0:T.amount)),1)]}),_:1})):P("",!0),!k((pe=(fe=u.originData)==null?void 0:fe.riskInsureLimitVO)==null?void 0:pe.insurancePeriodValueList)||!k((De=(ye=u.originData)==null?void 0:ye.riskInsureLimitVO)==null?void 0:De.insurancePeriodRule)?(D(),A(f,{key:4,modelValue:t(i).formInfo.coveragePeriod,"onUpdate:modelValue":e[8]||(e[8]=d=>t(i).formInfo.coveragePeriod=d),label:"\u4FDD\u969C\u671F\u95F4",name:"coveragePeriod",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4FDD\u969C\u671F\u95F4"}]},{input:L(()=>[C(R,{modelValue:t(i).formInfo.coveragePeriod,"onUpdate:modelValue":e[7]||(e[7]=d=>t(i).formInfo.coveragePeriod=d),disabled:I.value.coveragePeriod.disabled,prevent:I.value.coveragePeriod.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4FDD\u969C\u671F\u95F4":"",options:t(v),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])]),_:1},8,["modelValue"])):P("",!0),!k((Ve=(ge=u.originData)==null?void 0:ge.riskInsureLimitVO)==null?void 0:Ve.paymentPeriodValueList)||!k((Ie=(ke=u.originData)==null?void 0:ke.riskInsureLimitVO)==null?void 0:Ie.paymentPeriodRule)?(D(),A(f,{key:5,modelValue:t(i).formInfo.chargePeriod,"onUpdate:modelValue":e[10]||(e[10]=d=>t(i).formInfo.chargePeriod=d),label:"\u4EA4\u8D39\u671F\u95F4",name:"chargePeriod",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4EA4\u8D39\u671F\u95F4"}]},{input:L(()=>[C(R,{modelValue:t(i).formInfo.chargePeriod,"onUpdate:modelValue":e[9]||(e[9]=d=>t(i).formInfo.chargePeriod=d),disabled:I.value.chargePeriod.disabled,prevent:I.value.chargePeriod.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4EA4\u8D39\u671F\u95F4":"",options:t(s),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])]),_:1},8,["modelValue"])):P("",!0),!k((ve=u.originData.riskInsureLimitVO)==null?void 0:ve.paymentFrequencyList)||!k((be=u.originData.riskInsureLimitVO)==null?void 0:be.paymentPeriodRule)?(D(),A(f,{key:6,modelValue:t(i).formInfo.paymentFrequency,"onUpdate:modelValue":e[12]||(e[12]=d=>t(i).formInfo.paymentFrequency=d),label:"\u4EA4\u8D39\u65B9\u5F0F",name:"paymentFrequency",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4EA4\u8D39\u65B9\u5F0F"}]},{input:L(()=>[C(R,{modelValue:t(i).formInfo.paymentFrequency,"onUpdate:modelValue":e[11]||(e[11]=d=>t(i).formInfo.paymentFrequency=d),disabled:I.value.paymentFrequency.disabled,prevent:I.value.paymentFrequency.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4EA4\u8D39\u65B9\u5F0F":"",options:t(y)},null,8,["modelValue","disabled","prevent","options"])]),_:1},8,["modelValue"])):P("",!0),k((Le=(Fe=u.originData)==null?void 0:Fe.riskInsureLimitVO)==null?void 0:Le.annuityDrawTypeList)?P("",!0):(D(),A(f,{key:7,modelValue:t(i).formInfo.annuityDrawDate,"onUpdate:modelValue":e[14]||(e[14]=d=>t(i).formInfo.annuityDrawDate=d),label:"\u9886\u53D6\u65F6\u95F4",name:"annuityDrawDate",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u9886\u53D6\u65F6\u95F4"}]},{input:L(()=>{var d;return[C(R,{modelValue:t(i).formInfo.annuityDrawDate,"onUpdate:modelValue":e[13]||(e[13]=F=>t(i).formInfo.annuityDrawDate=F),options:h(t(ze),((d=u.originData.riskInsureLimitVO)==null?void 0:d.annuityDrawTypeList)||[])},null,8,["modelValue","options"])]}),_:1},8,["modelValue"])),k((Ce=(he=u.originData)==null?void 0:he.riskInsureLimitVO)==null?void 0:Ce.annuityDrawFrequencyList)?P("",!0):(D(),A(f,{key:8,modelValue:t(i).formInfo.annuityDrawType,"onUpdate:modelValue":e[16]||(e[16]=d=>t(i).formInfo.annuityDrawType=d),label:"\u9886\u53D6\u65B9\u5F0F",name:"annuityDrawType",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u9886\u53D6\u65B9\u5F0F"}]},{input:L(()=>{var d;return[C(R,{modelValue:t(i).formInfo.annuityDrawType,"onUpdate:modelValue":e[15]||(e[15]=F=>t(i).formInfo.annuityDrawType=F),options:h(t(Qe),((d=u.originData.riskInsureLimitVO)==null?void 0:d.annuityDrawFrequencyList)||[])},null,8,["modelValue","options"])]}),_:1},8,["modelValue"])),(D(!0),x(Q,null,J(u.originData.riskLiabilityInfoVOList||[],(d,F)=>(D(),x("div",{key:F},[d.optionalFlag===1?(D(),A(f,{key:0,modelValue:t(i).formInfo.liabilityVOList[F].liabilityAttributeValue,"onUpdate:modelValue":B=>t(i).formInfo.liabilityVOList[F].liabilityAttributeValue=B,label:d.liabilityName,name:"liabilityAttributeValue",rules:[{required:d.liabilityAttributeValue,message:`\u8BF7\u9009\u62E9${d.liabilityName}`}]},{input:L(()=>{var B,T;return[_("div",null,[k(d.liabilityAttributeValueList)?(D(),x("span",gt,"50\u4E07")):(D(),A(R,{key:1,modelValue:t(i).formInfo.liabilityVOList[F].liabilityAttributeValue,"onUpdate:modelValue":q=>t(i).formInfo.liabilityVOList[F].liabilityAttributeValue=q,options:h(t(Pe),(T=(B=u.originData.riskLiabilityInfoVOList)==null?void 0:B[F])==null?void 0:T.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]}),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])):(D(),A(f,{key:1,modelValue:t(i).formInfo.liabilityVOList[F].liabilityAttributeValue,"onUpdate:modelValue":B=>t(i).formInfo.liabilityVOList[F].liabilityAttributeValue=B,label:d.liabilityName,name:"liabilityAttributeValue"},{input:L(()=>{var B,T;return[_("div",null,[k(d.liabilityAttributeValueList)?(D(),A(R,{key:0,modelValue:t(i).formInfo.liabilityVOList[F].liabilityAttributeValue,"onUpdate:modelValue":q=>t(i).formInfo.liabilityVOList[F].liabilityAttributeValue=q,options:t(Ze)},null,8,["modelValue","onUpdate:modelValue","options"])):(D(),A(R,{key:1,modelValue:t(i).formInfo.liabilityVOList[F].liabilityAttributeValue,"onUpdate:modelValue":q=>t(i).formInfo.liabilityVOList[F].liabilityAttributeValue=q,options:h(t(Pe),(T=(B=u.originData.riskLiabilityInfoVOList)==null?void 0:B[F])==null?void 0:T.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]}),_:2},1032,["modelValue","onUpdate:modelValue","label"]))]))),128)),((Ee=u.originData)==null?void 0:Ee.relationDesc)?(D(),x("div",Vt,[C(b,{title:"\u8D23\u4EFB\u6295\u4FDD\u8BF4\u660E"},{default:L(()=>[_("div",null,w(u.originData.relationDesc),1)]),_:1})])):P("",!0)])}}});var _e=Y(kt,[["__scopeId","data-v-6269e5b6"]]);const It=u=>(Be("data-v-1f13cbe8"),u=u(),xe(),u),vt={class:"com-risk-list-wrapper"},bt=It(()=>_("div",{class:"popup-title"},"\u9009\u62E9\u9644\u52A0\u9669",-1)),Ft={class:"risk-list"},Lt={class:"cell-title"},ht={class:"title"},Ct={class:"footer-bar"},Et=Ue("\u786E\u8BA4"),At=M({props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(u,{emit:o}){const V=u,E=$([]),I=$([]),i=$([...V.disabled]),k=S({show:V.show,currentChecked:[...V.modelValue]}),h=(c,m)=>{if(!V.collocationList.length){if(m){k.currentChecked=[];return}k.currentChecked.push(c);return}let g=k.currentChecked,p=i.value;m?(V.collocationList.forEach(a=>{c===a.riskId&&(a.collocationType===2?g=g.filter(e=>e!==a.collocationRiskId||e!==c):a.collocationType===3?(g=g.filter(e=>e!==c),p=p.filter(e=>e!==a.collocationRiskId)):g=g.filter(e=>e!==c))}),k.currentChecked=g,i.value=p):(V.collocationList.forEach(a=>{c===a.riskId&&(m||(a.collocationType===2?g.push(a.collocationRiskId):a.collocationType===3&&p.push(a.collocationRiskId),g.push(c)))}),k.currentChecked.push(...g),i.value=p)},v=c=>{var g,p,a;if(i.value.includes(c))return;const m=k.currentChecked.includes(c);h(c,m),(a=(p=(g=E==null?void 0:E.value)==null?void 0:g[c])==null?void 0:p.toggle)==null||a.call(p)},s=()=>{o("close")},y=()=>{const c=V.riskList.filter(m=>k.currentChecked.includes(m.id));o("update:modelValue",[...new Set(I.value)]),o("finished",c,i.value),o("close")};return je(()=>{E.value=[]}),U(()=>k.currentChecked,c=>{I.value=c},{deep:!0,immediate:!0}),U(()=>V.modelValue,c=>{I.value=c||[],i.value.push(...c||[])},{deep:!0,immediate:!0}),(c,m)=>{const g=O("van-checkbox"),p=O("VanCell"),a=O("van-cell-group"),e=O("van-checkbox-group"),l=O("VanButton"),r=O("VanPopup");return D(),x("div",vt,[C(r,{show:t(k).show,"onUpdate:show":m[1]||(m[1]=n=>t(k).show=n),title:"\u9009\u62E9\u9644\u52A0\u9669","show-footer":"",round:"",position:"bottom",closeable:"",onClose:s},{default:L(()=>[bt,_("div",Ft,[C(e,{modelValue:I.value,"onUpdate:modelValue":m[0]||(m[0]=n=>I.value=n)},{default:L(()=>[C(a,{inset:""},{default:L(()=>[(D(!0),x(Q,null,J(u.riskList,n=>(D(),A(p,{key:n.id,title:n.riskName,disabled:i.value.includes(n.id),onClick:f=>v(n.id)},{"right-icon":L(()=>[C(g,{ref_for:!0,ref:f=>E.value[n.id]=f,shape:"square",disabled:i.value.includes(n.id),name:n.id,onClick:Ge(f=>v(n.id),["stop"])},null,8,["disabled","name","onClick"])]),title:L(()=>[_("div",Lt,[_("div",ht,w(n.riskName),1)])]),_:2},1032,["title","disabled","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])]),_("div",Ct,[C(l,{type:"primary",disabled:!t(k).currentChecked.length,block:"",onClick:y},{default:L(()=>[Et]),_:1},8,["disabled"])])]),_:1},8,["show"])])}}});var Rt=Y(At,[["__scopeId","data-v-1f13cbe8"]]);const Ot={class:"risk-list-wrapper"},Pt={key:1,class:"add-rider-risk"},_t={class:"left-part"},Bt=Ue("+ \u9644\u52A0\u9669"),xt=M({props:{riskInfo:{default:()=>({})},originData:{default:()=>[]},pickFactor:{type:Function,default:()=>{}},enums:{default:()=>{}},riderRiskList:{default:()=>[]}},setup(u){var v;const o=u,V=G("source")||{},[E,I]=z(!1);$(null),$(null);const i=S({mainRiskInfo:o.riskInfo,riderRiskInfo:((v=o.riskInfo)==null?void 0:v.riderRiskVOList)||[],requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[]}),k=(s,y)=>{i.requiredRiderRiskData=i.requiredRiderRiskData.concat(s),i.disabledList=y},h=s=>{Ke.confirm({message:"\u786E\u5B9A\u8981\u5220\u9664\u9644\u52A0\u9669\u4E48\uFF1F"}).then(()=>{var c;const y=[s];(((c=i.mainRiskData)==null?void 0:c.collocationVOList)||[]).forEach(m=>{s===m.riskId&&(m.collocationType===2||m.collocationType===3)&&y.push(m.collocationRiskId)}),i.checkedList=i.checkedList.filter(m=>!y.includes(m)),i.requiredRiderRiskData=i.requiredRiderRiskData.filter(m=>!y.includes(m.id)),i.disabledList=i.disabledList.filter(m=>!y.includes(m)),Object.assign(i.riderRiskInfo,{[s]:void 0})}).catch(()=>{})};return Te(()=>{}),U(()=>i.requiredRiderRiskData,s=>{const y=[i.mainRiskData,...s];let c=[],m=[];const g=[];y.forEach((p,a)=>{var l,r,n;const e=((l=p==null?void 0:p.riskCalcMethodInfoVO)==null?void 0:l.riskFactorRelationList)||[];c=c.concat(e.filter(f=>f.factorObject==="insured").map(f=>f.factorCode)),m=m.concat(e.filter(f=>f.factorObject==="holder").map(f=>f.factorCode)),g.push((r=p==null?void 0:p.riskInsureLimitVO)==null?void 0:r.minHolderAge,(n=p==null?void 0:p.riskInsureLimitVO)==null?void 0:n.maxHolderAge)}),(s||[]).forEach(p=>{var e;const a={riskType:p.riskType,riskId:p.id,riskCode:p.riskCode,riskName:p.riskName,mainRiskCode:i.mainRiskData.riskCode,mainRiskId:(e=i.mainRiskData)==null?void 0:e.id,riskCategory:p.riskCategory,liabilityVOList:(p.riskLiabilityInfoVOList||[]).map(l=>H(K({},l),{liabilityAttributeCode:l.liabilityAttributeType,liabilityCode:l.liabilityCode,liabilityRateType:l.liabilityRateType}))};Object.assign(i.riderRiskInfo,{[p.id]:a})}),o.pickFactor({insuredFactorList:[...new Set(c)],holderFactorList:[...new Set(m)],ageRange:g})},{deep:!0,immediate:!0}),U(()=>o.originData,s=>{(s||[]).forEach(y=>{y.riskType===1?(i.mainRiskData=y,i.requiredRiderRiskData=y.requiredRiderRiskVOList||[],i.riderRiskList=y.optionalRiderRiskVOList):i.riderRiskList.push(y)})},{deep:!0,immediate:!0}),(s,y)=>{var m,g,p;const c=O("ProCheckButton");return D(),x("div",Ot,[t(i).mainRiskData?(D(),A(_e,{key:0,enums:u.enums,"form-info":t(i).mainRiskInfo,"origin-data":t(i).mainRiskData},null,8,["enums","form-info","origin-data"])):P("",!0),(D(!0),x(Q,null,J(t(i).requiredRiderRiskData,(a,e)=>(D(),A(_e,{key:a.id,"form-info":t(i).riderRiskInfo[a.id],index:e,enums:u.enums,"main-risk-data":t(i).mainRiskData,"main-risk-info":t(i).mainRiskInfo,"origin-data":a,"remove-risk":h,"remove-risk-list":t(i).checkedList},null,8,["form-info","index","enums","main-risk-data","main-risk-info","origin-data","remove-risk-list"]))),128)),((m=t(i).riderRiskList)==null?void 0:m.length)-((g=t(i).checkedList)==null?void 0:g.length)&&(t(V).origin!=="proposal"||t(V).type==="addRiderRisk")?(D(),x("div",Pt,[_("span",_t,w(`\u5171\u6709${t(i).riderRiskList.length-t(i).checkedList.length}\u6B3E\u9644\u52A0\u9669\u53EF\u4EE5\u6DFB\u52A0`),1),C(c,{activated:"",onClick:y[0]||(y[0]=a=>t(I)(!0))},{default:L(()=>[Bt]),_:1})])):P("",!0),t(E)?(D(),A(Rt,{key:2,modelValue:t(i).checkedList,"onUpdate:modelValue":y[1]||(y[1]=a=>t(i).checkedList=a),show:t(E),disabled:t(i).disabledList,"risk-list":t(i).riderRiskList,"collocation-list":((p=t(i).mainRiskData)==null?void 0:p.collocationVOList)||[],onFinished:k,onClose:y[2]||(y[2]=a=>t(I)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):P("",!0)])}}});var Yt=Y(xt,[["__scopeId","data-v-07716367"]]);const jt=(u={})=>we.post("/api/app/insure/product/insureProductDetail",u),Gt=u=>we.post("/api/app/insure/insurance/premiumCalc",u);export{Nt as I,St as P,Yt as R,Mt as a,jt as i,Gt as p};
