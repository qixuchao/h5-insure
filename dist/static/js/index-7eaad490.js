var Ze=Object.defineProperty,et=Object.defineProperties;var tt=Object.getOwnPropertyDescriptors;var Ne=Object.getOwnPropertySymbols;var it=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable;var Se=(n,a,D)=>a in n?Ze(n,a,{enumerable:!0,configurable:!0,writable:!0,value:D}):n[a]=D,J=(n,a)=>{for(var D in a||(a={}))it.call(a,D)&&Se(n,D,a[D]);if(Ne)for(var D of Ne(a))at.call(a,D)&&Se(n,D,a[D]);return n},ie=(n,a)=>et(n,tt(a));import{g as W,L as z,a1 as M,r as B,k as y,m as T,n as I,j as k,y as A,z as e,a2 as Je,a3 as ze,a4 as re,C as Y,x as G,d as ne,h as O,s as R,I as S,a5 as ot,a6 as Me,o as se,F as ae,E as oe,a7 as nt,a8 as ut,B as Q,D as lt,J as rt,Q as st,a9 as dt,T as ct}from"./vendor-c6b9a2b7.js";import{P as N,a as mt}from"./index-8ecf8be1.js";import{b as de,S as ce,_ as H,P as ue}from"./index-2fed3a3c.js";const ft=[{label:"\u7537",value:"1"},{label:"\u5973",value:"2"}],pt=[{label:"\u6709",value:"1"},{label:"\u65E0",value:"2"}],yt=[{value:1,label:"\u7B2C5\u4E2A\u4FDD\u5355\u5468\u5E74\u65E5"},{value:2,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8455\u5468\u5C81"},{value:3,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8460\u5468\u5C81"},{value:4,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8465\u5468\u5C81"},{value:5,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8470\u5468\u5C81"},{value:6,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8475\u5468\u5C81"}],Vt=[{value:1,label:"\u5E74\u9886"},{value:2,label:"\u6708\u9886"}],le=[{label:"\u8DB8\u4EA4",value:"1"},{label:"\u5E74\u4EA4",value:"2"},{label:"\u534A\u5E74\u4EA4",value:"3"},{label:"\u5B63\u4EA4",value:"4"},{label:"\u6708\u4EA4",value:"5"}],Dt=[{name:"\u540C\u4E3B\u9669\u671F\u95F4\u51CF1",value:"3"},{name:"\u65E0\u9650\u5236",value:"2"}],je=[{label:"\u8FD4\u4FDD\u989D",value:"1"},{label:"\u8FD4\u4FDD\u8D39",value:"2"}],gt=[{label:"\u6295\u4FDD",value:"0"},{label:"\u4E0D\u6295\u4FDD",value:"-1"}],Qe=(n={})=>de.post("/api/gateway/system/dict/v2/queryDictInfo",n);new ce({source:"sessionStorage"});const Ke=new ce({source:"localStorage"});new ce({source:"cookie"});const kt=n=>(Je("data-v-4b261f8d"),n=n(),ze(),n),vt={class:"com-occupational-wrapper"},It=kt(()=>A("div",{class:"popup-title"},"\u9009\u62E9\u804C\u4E1A",-1)),bt={class:"popup-content"},Ft=W({props:{modelValue:{type:Array,required:!0,default:()=>[]},insuredCode:{type:String,required:!0,default:""},show:{type:Boolean,required:!0,default:!1}},emits:["finish","close","update:modelValue"],setup(n,{emit:a}){const D=n,_=z({show:D.show,options:[],currentValue:""}),d=()=>{a("close")},l=({value:V,selectedOptions:o})=>{const h=(o||[]).map(v=>v.value).join("/"),m=+o[o.length-1].name;a("update:modelValue",m),a("finish",h),d()},b=V=>{const o=V,h=m=>{m.forEach(v=>{const f=v;f.children.length?h(f.children):f.children=null})};return h(o),o},F=(V="")=>{var m;const o=`${(m=V==null?void 0:V.toLocaleUpperCase)==null?void 0:m.call(V)}_OCCUPATION`,h=Ke.get("occupational")||{};if(h[o]){_.options=h[o];return}Qe({dictCodeList:[o]}).then(({code:v,data:f})=>{var g;if(v==="10000"){const t=b(((g=f==null?void 0:f[0])==null?void 0:g.dictItemList)||[]);_.options=t,h[o]=t,Ke.set("occupational",h)}})};return M(()=>D,()=>{F(D.insuredCode)},{deep:!0,immediate:!0}),M(()=>D.modelValue,V=>{},{deep:!0,immediate:!0}),(V,o)=>{const h=B("van-cascader"),m=B("VanPopup");return y(),T("div",vt,[I(m,{show:e(_).show,"onUpdate:show":o[1]||(o[1]=v=>e(_).show=v),"show-footer":"",position:"bottom",closeable:"",onClose:d},{default:k(()=>[It,A("div",bt,[I(h,{modelValue:e(_).currentValue,"onUpdate:modelValue":o[0]||(o[0]=v=>e(_).currentValue=v),title:"\u8BF7\u9009\u62E9\u804C\u4E1A","show-header":!1,placeholder:"\u8BF7\u9009\u62E9",options:e(_).options,"active-color":"#0d6efe","field-names":{text:"value",value:"code",children:"children"},onFinish:l},null,8,["modelValue","options"])])]),_:1},8,["show"])])}}});var Lt=H(Ft,[["__scopeId","data-v-4b261f8d"]]);const _t={class:"com-personal-info-wrapper"},ht={key:0,class:"placeholder"},Ct={key:1},Et=W({props:{formInfo:{type:Object,required:!0,default:()=>{}},insuredCode:{type:String,required:!0,default:""},factorList:{type:Array,required:!0,default:()=>[]},ageRange:{type:Array,required:!0,default:()=>[]}},setup(n,{expose:a}){const D=n,[_,d]=re(),[l,b]=re(),F=Y(),V=z({formInfo:D==null?void 0:D.formInfo,occupationalText:""}),o=g=>{V.occupationalText=g},h=()=>{b(!1)},m=()=>new Promise((g,t)=>{F==null||F.value.validate().then(()=>{g("")},()=>{t()})}),v=g=>{const t=g||[];for(let i=0;i<t.length;i++)for(let c=i+1;c<t.length;c++){const r=t[i].split("_"),u=t[c].split("_"),s=t[i];r[0]===u[0]?r>u&&(t[i]=t[c],t[c]=s):r[0]==="age"&&(t[i]=t[c],t[c]=s)}return t},f=G(()=>{const g=v(D==null?void 0:D.ageRange),t=(s="")=>{const L=+s.split("_")[1],C=s.split("_")[0];return[L,C]},i=t(g[0]),c=t(g[g.length-1]),r=ne().subtract(i[0],i[1]==="age"?"year":"day").format("YYYY-MM-DD"),u=ne().subtract(c[0],c[1]==="age"?"year":"day").format("YYYY-MM-DD");return{minAge:new Date(u),maxAge:new Date(r)}});return a({validateForm:m}),(g,t)=>{const i=B("VanField"),c=B("VanForm"),r=B("van-datetime-picker"),u=B("van-popup");return y(),T("div",_t,[I(c,{ref_key:"formRef",ref:F,"input-align":"right","error-message-align":"right"},{default:k(()=>[n.factorList.includes("APPLICANT.AGE")||n.factorList.includes("AGE")||n.factorList.includes("DAY")||n.factorList.includes("APPLICANT.DAY")?(y(),O(i,{key:0,modelValue:e(V).formInfo.birthday,"onUpdate:modelValue":t[0]||(t[0]=s=>e(V).formInfo.birthday=s),rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u51FA\u751F\u65E5\u671F"}],name:"birth",label:"\u51FA\u751F\u65E5\u671F",class:"isLink",readonly:"","is-link":"",placeholder:"\u8BF7\u9009\u62E9",onClick:t[1]||(t[1]=s=>e(d)(!0))},null,8,["modelValue"])):R("",!0),n.factorList.includes("APPLICANT.GENDER")||n.factorList.includes("GENDER")?(y(),O(i,{key:1,modelValue:e(V).formInfo.gender,"onUpdate:modelValue":t[3]||(t[3]=s=>e(V).formInfo.gender=s),name:"gender",label:"\u6027\u522B",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6027\u522B"}]},{input:k(()=>[I(N,{modelValue:e(V).formInfo.gender,"onUpdate:modelValue":t[2]||(t[2]=s=>e(V).formInfo.gender=s),options:e(ft)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):R("",!0),n.factorList.includes("SOCIAL_INS")?(y(),O(i,{key:2,modelValue:e(V).formInfo.socialSecurity,"onUpdate:modelValue":t[5]||(t[5]=s=>e(V).formInfo.socialSecurity=s),name:"socialSecurity",label:"\u793E\u4FDD",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u793E\u4FDD"}]},{input:k(()=>[I(N,{modelValue:e(V).formInfo.socialSecurity,"onUpdate:modelValue":t[4]||(t[4]=s=>e(V).formInfo.socialSecurity=s),options:e(pt)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):R("",!0),n.factorList.includes("OCCUPATION_CATEGORY")?(y(),O(i,{key:3,modelValue:e(V).formInfo.occupationalClass,"onUpdate:modelValue":t[6]||(t[6]=s=>e(V).formInfo.occupationalClass=s),rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u804C\u4E1A\u7C7B\u578B"}],name:"occupationalClass",label:"\u804C\u4E1A\u7C7B\u578B","is-link":"",readonly:"",placeholder:"\u8BF7\u9009\u62E9",onClick:t[7]||(t[7]=s=>e(b)(!0))},{input:k(()=>[e(V).occupationalText?(y(),T("div",Ct,S(e(V).occupationalText),1)):(y(),T("span",ht,"\u8BF7\u9009\u62E9"))]),_:1},8,["modelValue"])):R("",!0)]),_:1},512),I(u,{show:e(_),"onUpdate:show":t[10]||(t[10]=s=>ot(_)?_.value=s:null),position:"bottom"},{default:k(()=>[I(r,{type:"date","min-date":e(f).minAge,"max-date":e(f).maxAge,onConfirm:t[8]||(t[8]=s=>{e(V).formInfo.birthday=e(ne)(s).format("YYYY-MM-DD"),e(d)(!1)}),onCancel:t[9]||(t[9]=s=>e(d)(!1))},null,8,["min-date","max-date"])]),_:1},8,["show"]),e(l)?(y(),O(Lt,{key:0,modelValue:e(V).formInfo.occupationalClass,"onUpdate:modelValue":t[11]||(t[11]=s=>e(V).formInfo.occupationalClass=s),show:e(l),"insured-code":n.insuredCode,onFinish:o,onClose:h},null,8,["modelValue","show","insured-code"])):R("",!0)])}}});var Ge=H(Et,[["__scopeId","data-v-2998f5ae"]]);const Ot={class:"com-risk-card-wrapper part-card"},Rt={class:"custom-field"},At={class:"field-tip"},Bt={class:"custom-field"},Pt={class:"field-tip"},Tt={class:"custom-field"},xt={class:"field-tip"},qt={key:0},$t={key:9,class:"liab-desc"},Yt=W({props:{originData:{type:Object,required:!0,default:()=>{}},formInfo:{type:Object,required:!0,default:()=>{}},mainRiskData:{type:Object,default:()=>{}},mainRiskInfo:{type:Object,required:!1,default:()=>{}},index:{type:[Number,String],default:0,required:!0},removeRisk:{type:Function,default:()=>{}},removeRiskList:{type:Array,default:()=>[]},enums:{type:Object,default:()=>{}}},setup(n){const a=n,D=Y({}),_=Me("premium")||{};D.value=Me("enumList")||{};const d=Y({paymentYear:{disabled:!1,prevent:!1},coverageYear:{disabled:!1,prevent:!1},paymentFrequency:{disabled:!1,prevent:!1}}),l=z({formInfo:a.formInfo}),b=t=>typeof t!="boolean"&&!t||Array.isArray(t)&&!t.length?!0:{}.toString.call(t)==="object Object"?Object.keys(t).length:!1,F=(t,i,c={})=>{let r=i;return Array.isArray(i)||(r=[`${r}`]),(t||[]).filter(u=>r.includes(`${u.value}`)||r.includes(u.value))},V=G(()=>{var t,i,c,r,u,s,L,C;return((t=a.originData)==null?void 0:t.riskType)===1?(console.log("enumList.value?.RISK_INSURANCE_PERIOD",(i=D.value)==null?void 0:i.RISK_INSURANCE_PERIOD),F(a==null?void 0:a.enums.RISK_INSURANCE_PERIOD,(r=(c=a==null?void 0:a.originData)==null?void 0:c.riskInsureLimitVO)==null?void 0:r.insurancePeriodValueList)):((u=a.originData)==null?void 0:u.periodType)===2?F([{value:"year_1",label:"1\u5E74"}],["year_1"]):F((s=a==null?void 0:a.enums)==null?void 0:s.RISK_INSURANCE_PERIOD,(C=(L=a==null?void 0:a.mainRiskData)==null?void 0:L.riskInsureLimitVO)==null?void 0:C.insurancePeriodValueList)}),o=G(()=>{var t,i,c,r,u,s,L,C,x,q,j;return((t=a.originData)==null?void 0:t.riskType)===1?F((i=a==null?void 0:a.enums)==null?void 0:i.RISK_PAYMENT_PERIOD,(r=(c=a==null?void 0:a.originData)==null?void 0:c.riskInsureLimitVO)==null?void 0:r.paymentPeriodValueList):((u=a.originData)==null?void 0:u.exemptFlag)===1?F(Dt,[`${(L=(s=a==null?void 0:a.originData)==null?void 0:s.riskInsureLimitVO)==null?void 0:L.paymentPeriodRule}`]):((C=a.originData)==null?void 0:C.periodType)===2?F([{value:"year_1",name:"1\u5E74\u4EA4"}],["year_1"]):F((x=a==null?void 0:a.enums)==null?void 0:x.RISK_PAYMENT_PERIOD,(j=(q=a==null?void 0:a.mainRiskData)==null?void 0:q.riskInsureLimitVO)==null?void 0:j.paymentPeriodValueList)}),h=G(()=>{var t,i,c,r,u,s,L,C;return((t=a.originData)==null?void 0:t.riskType)===1?F(le,(c=(i=a==null?void 0:a.originData)==null?void 0:i.riskInsureLimitVO)==null?void 0:c.paymentFrequencyList):((r=a==null?void 0:a.originData)==null?void 0:r.paymentTypeRule)===1?F(le,(s=(u=a==null?void 0:a.mainRiskData)==null?void 0:u.riskInsureLimitVO)==null?void 0:s.paymentFrequencyList):F(le,(C=(L=a==null?void 0:a.mainRiskData)==null?void 0:L.riskInsureLimitVO)==null?void 0:C.paymentFrequencyList)}),m=G(()=>{var c,r;let t=0,i=0;return(((r=(c=a.originData)==null?void 0:c.riskCalcMethodInfoVO)==null?void 0:r.paymentMethodLimitList)||[]).forEach((u,s)=>{s===0&&(t=u.minAmount,i=u.maxAmount),t>u.minAmount&&(t=u.minAmount),i<u.maxAmount&&(i=u.maxAmount)}),l.formInfo.sumInsured=t,{min:t,max:i}}),v=G(()=>{var c,r;let t=0,i=0;return(((r=(c=a.originData)==null?void 0:c.riskCalcMethodInfoVO)==null?void 0:r.paymentMethodLimitList)||[]).forEach((u,s)=>{s===0&&(t=u.minPremium,i=u.maxPremium),t>u.minPremium&&(t=u.minPremium),i<u.maxPremium&&(i=u.maxPremium)}),l.formInfo.premium=t,{min:t,max:i}}),f=G(()=>{var c,r,u,s;const t=((r=(c=a.originData)==null?void 0:c.riskCalcMethodInfoVO)==null?void 0:r.minCopy)||1,i=(s=(u=a.originData)==null?void 0:u.riskCalcMethodInfoVO)==null?void 0:s.maxCopy;return l.formInfo.copy=t,{min:t,max:i}}),g=(t,i)=>{var r,u;const c=((u=(r=a.originData)==null?void 0:r.riskCalcMethodInfoVO)==null?void 0:u.increaseDecreaseNum)||1;return+t%c===0?"":`\u91D1\u989D\u5FC5\u987B\u662F${c}\u7684\u500D\u6570`};return se(()=>{var i,c;const t={riskType:a.originData.riskType,riskId:a.originData.id,riskCode:a.originData.riskCode,mainRiskCode:(i=a==null?void 0:a.mainRiskData)==null?void 0:i.riskCode,mainRiskId:(c=a==null?void 0:a.mainRiskData)==null?void 0:c.id,riskCategory:a.originData.riskCategory,liabilityVOList:(a.originData.riskLiabilityInfoVOList||[]).map(r=>({liabilityAttributeCode:r.liabilityAttributeType,liabilityCode:r.liabilityCode,liabilityId:r.id,liabilityRateType:r.liabilityRateType}))};Object.assign(l==null?void 0:l.formInfo,t)}),M(()=>{var t;return(t=l.formInfo)==null?void 0:t.paymentFrequency},t=>{var i,c,r,u;[3,4].includes((c=(i=a.originData)==null?void 0:i.riskCalcMethodInfoVO)==null?void 0:c.saleMethod)&&(((u=(r=a.originData)==null?void 0:r.riskCalcMethodInfoVO)==null?void 0:u.paymentMethodLimitList)||[]).forEach(s=>{+s.paymentFrequency==+t&&Object.assign(l.formInfo,{sumInsured:s.perCopyAmount,premium:s.perCopyPremium})}),t==="1"&&l.formInfo.paymentYear!=="single"&&(l.formInfo.paymentYear="single")}),M(()=>{var t;return(t=l.formInfo)==null?void 0:t.paymentYear},t=>{t==="single"&&l.formInfo.paymentFrequency!=="1"&&(l.formInfo.paymentFrequency="1")}),M(()=>a==null?void 0:a.mainRiskInfo,t=>{var i,c,r,u,s,L;t&&a.originData.riskType===2&&(((c=(i=a.originData)==null?void 0:i.riskInsureLimitVO)==null?void 0:c.insurancePeriodRule)===1&&(t.coverageYear?d.value.coverageYear.disabled=!0:d.value.coverageYear.prevent=!0,l.formInfo.coverageYear=t.coverageYear),((u=(r=a.originData)==null?void 0:r.riskInsureLimitVO)==null?void 0:u.paymentPeriodRule)===1&&(t.paymentYear?d.value.paymentYear.disabled=!0:d.value.paymentYear.prevent=!0,l.formInfo.paymentYear=t.paymentYear),((L=(s=a.originData)==null?void 0:s.riskInsureLimitVO)==null?void 0:L.paymentTypeRule)===1&&(t.paymentFrequency?d.value.paymentFrequency.disabled=!0:d.value.paymentFrequency.prevent=!0,l.formInfo.paymentFrequency=t.paymentFrequency))},{immediate:!0,deep:!0}),(t,i)=>{var C,x,q,j,U,X,Z,ee,$,me,fe,pe,ye,Ve,De,ge,ke,ve,Ie,be,Fe,Le,_e,he,Ce,Ee,Oe,Re,Ae,Be,Pe,Te,xe,qe,$e,Ye,we,Ue;const c=B("ProSvg"),r=B("ProTitle"),u=B("VanStepper"),s=B("VanField"),L=B("ProExpand");return y(),T("div",Ot,[I(r,{"risk-type":(C=n.originData)==null?void 0:C.riskType,title:(x=n.originData)==null?void 0:x.riskName},{default:k(()=>[n.removeRiskList.includes(n.originData.id)?(y(),T("div",{key:0,class:"delete-risk",onClick:i[0]||(i[0]=p=>n.removeRisk(n.originData.id))},[I(c,{name:"delete",color:"#0d6efe"})])):R("",!0)]),_:1},8,["risk-type","title"]),((j=(q=n.originData)==null?void 0:q.riskCalcMethodInfoVO)==null?void 0:j.saleMethod)===1&&((U=n.originData)==null?void 0:U.exemptFlag)===2?(y(),O(s,{key:0,modelValue:e(l).formInfo.sumInsured,"onUpdate:modelValue":i[2]||(i[2]=p=>e(l).formInfo.sumInsured=p),label:"\u4FDD\u989D",name:"sumInsured",rules:[{required:!0,message:"\u8BF7\u586B\u5199"},{trigger:"onChange",validator:g}]},{input:k(()=>{var p,E,P,w;return[A("div",Rt,[I(u,{modelValue:e(l).formInfo.sumInsured,"onUpdate:modelValue":i[1]||(i[1]=K=>e(l).formInfo.sumInsured=K),"input-width":"64px",min:e(m).min,step:((E=(p=n.originData)==null?void 0:p.riskCalcMethodInfoVO)==null?void 0:E.increaseDecreaseNum)||1,max:e(m).max},null,8,["modelValue","min","step","max"]),A("span",At,S(`\u91D1\u989D\u6700\u4F4E${e(m).min}\u5143\uFF0C\u4E3A${((w=(P=n.originData)==null?void 0:P.riskCalcMethodInfoVO)==null?void 0:w.increaseDecreaseNum)||1}\u7684\u500D\u6570`),1)])]}),_:1},8,["modelValue","rules"])):R("",!0),((Z=(X=n.originData)==null?void 0:X.riskCalcMethodInfoVO)==null?void 0:Z.saleMethod)===2?(y(),O(s,{key:1,modelValue:e(l).formInfo.premium,"onUpdate:modelValue":i[4]||(i[4]=p=>e(l).formInfo.premium=p),label:"\u4FDD\u8D39",name:"premium",rules:[{required:!0,message:"\u8BF7\u586B\u5199"},{trigger:"onChange",validator:g}]},{input:k(()=>{var p,E,P,w;return[A("div",Bt,[I(u,{modelValue:e(l).formInfo.premium,"onUpdate:modelValue":i[3]||(i[3]=K=>e(l).formInfo.premium=K),step:((E=(p=n.originData)==null?void 0:p.riskCalcMethodInfoVO)==null?void 0:E.increaseDecreaseNum)||1,min:e(v).min,"input-width":"64px",max:e(v).max},null,8,["modelValue","step","min","max"]),A("span",Pt,S(`\u91D1\u989D\u6700\u4F4E${e(v).min}\u5143\uFF0C\u4E3A${((w=(P=n.originData)==null?void 0:P.riskCalcMethodInfoVO)==null?void 0:w.increaseDecreaseNum)||1}\u7684\u500D\u6570`),1)])]}),_:1},8,["modelValue","rules"])):R("",!0),(($=(ee=n.originData)==null?void 0:ee.riskCalcMethodInfoVO)==null?void 0:$.saleMethod)===3||((fe=(me=n.originData)==null?void 0:me.riskCalcMethodInfoVO)==null?void 0:fe.saleMethod)===4&&(((ye=(pe=n.originData)==null?void 0:pe.riskCalcMethodInfoVO)==null?void 0:ye.minCopy)||((De=(Ve=n.originData)==null?void 0:Ve.riskCalcMethodInfoVO)==null?void 0:De.maxCopy))?(y(),O(s,{key:2,modelValue:e(l).formInfo.copy,"onUpdate:modelValue":i[6]||(i[6]=p=>e(l).formInfo.copy=p),label:"\u6295\u4FDD\u4EFD\u6570",name:"copy",rules:[{required:!0,message:"\u8BF7\u586B\u5199"}]},{input:k(()=>[A("div",Tt,[I(u,{modelValue:e(l).formInfo.copy,"onUpdate:modelValue":i[5]||(i[5]=p=>e(l).formInfo.copy=p),step:1,min:e(f).min,max:e(f).max},null,8,["modelValue","min","max"]),A("span",xt,S(`${e(f).min}\u4EFD\u8D77\u8D2D\uFF0C\u6700\u591A\u8D2D\u4E70${e(f).max}\u4EFD`),1)])]),_:1},8,["modelValue"])):R("",!0),(![1,4].includes((ke=(ge=n.originData)==null?void 0:ge.riskCalcMethodInfoVO)==null?void 0:ke.saleMethod)||((ve=n.originData)==null?void 0:ve.exemptFlag)===1)&&((be=e(_))==null?void 0:be[(Ie=n.originData)==null?void 0:Ie.riskCode])?(y(),O(s,{key:3,label:"\u4FDD\u989D"},{input:k(()=>{var p,E,P;return[A("div",null,S((P=(E=e(_))==null?void 0:E[(p=n.originData)==null?void 0:p.riskCode])==null?void 0:P.amount),1)]}),_:1})):R("",!0),!b((Le=(Fe=n.originData)==null?void 0:Fe.riskInsureLimitVO)==null?void 0:Le.insurancePeriodValueList)||!b((he=(_e=n.originData)==null?void 0:_e.riskInsureLimitVO)==null?void 0:he.insurancePeriodRule)?(y(),O(s,{key:4,modelValue:e(l).formInfo.coverageYear,"onUpdate:modelValue":i[8]||(i[8]=p=>e(l).formInfo.coverageYear=p),label:"\u4FDD\u969C\u671F\u95F4",name:"coverageYear",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4FDD\u969C\u671F\u95F4"}]},{input:k(()=>[I(N,{modelValue:e(l).formInfo.coverageYear,"onUpdate:modelValue":i[7]||(i[7]=p=>e(l).formInfo.coverageYear=p),disabled:d.value.coverageYear.disabled,prevent:d.value.coverageYear.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4FDD\u969C\u671F\u95F4":"",options:e(V),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])]),_:1},8,["modelValue"])):R("",!0),!b((Ee=(Ce=n.originData)==null?void 0:Ce.riskInsureLimitVO)==null?void 0:Ee.paymentPeriodValueList)||!b((Re=(Oe=n.originData)==null?void 0:Oe.riskInsureLimitVO)==null?void 0:Re.paymentPeriodRule)?(y(),O(s,{key:5,modelValue:e(l).formInfo.paymentYear,"onUpdate:modelValue":i[10]||(i[10]=p=>e(l).formInfo.paymentYear=p),label:"\u4EA4\u8D39\u671F\u95F4",name:"paymentYear",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4EA4\u8D39\u671F\u95F4"}]},{input:k(()=>[I(N,{modelValue:e(l).formInfo.paymentYear,"onUpdate:modelValue":i[9]||(i[9]=p=>e(l).formInfo.paymentYear=p),disabled:d.value.paymentYear.disabled,prevent:d.value.paymentYear.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4EA4\u8D39\u671F\u95F4":"",options:e(o),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])]),_:1},8,["modelValue"])):R("",!0),!b((Be=(Ae=n.originData)==null?void 0:Ae.riskInsureLimitVO)==null?void 0:Be.paymentFrequencyList)||!b((Te=(Pe=n.originData)==null?void 0:Pe.riskInsureLimitVO)==null?void 0:Te.paymentPeriodRule)?(y(),O(s,{key:6,modelValue:e(l).formInfo.paymentFrequency,"onUpdate:modelValue":i[12]||(i[12]=p=>e(l).formInfo.paymentFrequency=p),label:"\u4EA4\u8D39\u65B9\u5F0F",name:"paymentFrequency",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4EA4\u8D39\u65B9\u5F0F"}]},{input:k(()=>[I(N,{modelValue:e(l).formInfo.paymentFrequency,"onUpdate:modelValue":i[11]||(i[11]=p=>e(l).formInfo.paymentFrequency=p),disabled:d.value.paymentFrequency.disabled,prevent:d.value.paymentFrequency.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4EA4\u8D39\u65B9\u5F0F":"",options:e(h)},null,8,["modelValue","disabled","prevent","options"])]),_:1},8,["modelValue"])):R("",!0),b((qe=(xe=n.originData)==null?void 0:xe.riskInsureLimitVO)==null?void 0:qe.annuityDrawTypeList)?R("",!0):(y(),O(s,{key:7,modelValue:e(l).formInfo.annuityDrawDate,"onUpdate:modelValue":i[14]||(i[14]=p=>e(l).formInfo.annuityDrawDate=p),label:"\u9886\u53D6\u65F6\u95F4",name:"annuityDrawDate",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u9886\u53D6\u65F6\u95F4"}]},{input:k(()=>{var p,E;return[I(N,{modelValue:e(l).formInfo.annuityDrawDate,"onUpdate:modelValue":i[13]||(i[13]=P=>e(l).formInfo.annuityDrawDate=P),options:F(e(yt),(E=(p=n.originData)==null?void 0:p.riskInsureLimitVO)==null?void 0:E.annuityDrawTypeList)},null,8,["modelValue","options"])]}),_:1},8,["modelValue"])),b((Ye=($e=n.originData)==null?void 0:$e.riskInsureLimitVO)==null?void 0:Ye.annuityDrawFrequencyList)?R("",!0):(y(),O(s,{key:8,modelValue:e(l).formInfo.annuityDrawType,"onUpdate:modelValue":i[16]||(i[16]=p=>e(l).formInfo.annuityDrawType=p),label:"\u9886\u53D6\u65B9\u5F0F",name:"annuityDrawType",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u9886\u53D6\u65B9\u5F0F"}]},{input:k(()=>{var p,E;return[I(N,{modelValue:e(l).formInfo.annuityDrawType,"onUpdate:modelValue":i[15]||(i[15]=P=>e(l).formInfo.annuityDrawType=P),options:F(e(Vt),(E=(p=n.originData)==null?void 0:p.riskInsureLimitVO)==null?void 0:E.annuityDrawFrequencyList)},null,8,["modelValue","options"])]}),_:1},8,["modelValue"])),(y(!0),T(ae,null,oe(((we=n.originData)==null?void 0:we.riskLiabilityInfoVOList)||[],(p,E)=>(y(),T("div",{key:E},[p.optionalFlag===1?(y(),O(s,{key:0,modelValue:e(l).formInfo.liabilityVOList[E].liabilityAttributeValue,"onUpdate:modelValue":P=>e(l).formInfo.liabilityVOList[E].liabilityAttributeValue=P,label:p.liabilityName,name:"liabilityAttributeValue",rules:[{required:p.liabilityAttributeValue,message:`\u8BF7\u9009\u62E9${p.liabilityName}`}]},{input:k(()=>{var P,w,K;return[A("div",null,[b(p.liabilityAttributeValueList)?(y(),T("span",qt,"50\u4E07")):(y(),O(N,{key:1,modelValue:e(l).formInfo.liabilityVOList[E].liabilityAttributeValue,"onUpdate:modelValue":te=>e(l).formInfo.liabilityVOList[E].liabilityAttributeValue=te,options:F(e(je),(K=(w=(P=n.originData)==null?void 0:P.riskLiabilityInfoVOList)==null?void 0:w[E])==null?void 0:K.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]}),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])):(y(),O(s,{key:1,modelValue:e(l).formInfo.liabilityVOList[E].liabilityAttributeValue,"onUpdate:modelValue":P=>e(l).formInfo.liabilityVOList[E].liabilityAttributeValue=P,label:p.liabilityName,name:"liabilityAttributeValue"},{input:k(()=>{var P,w,K;return[A("div",null,[b(p.liabilityAttributeValueList)?(y(),O(N,{key:0,modelValue:e(l).formInfo.liabilityVOList[E].liabilityAttributeValue,"onUpdate:modelValue":te=>e(l).formInfo.liabilityVOList[E].liabilityAttributeValue=te,options:e(gt)},null,8,["modelValue","onUpdate:modelValue","options"])):(y(),O(N,{key:1,modelValue:e(l).formInfo.liabilityVOList[E].liabilityAttributeValue,"onUpdate:modelValue":te=>e(l).formInfo.liabilityVOList[E].liabilityAttributeValue=te,options:F(e(je),(K=(w=(P=n.originData)==null?void 0:P.riskLiabilityInfoVOList)==null?void 0:w[E])==null?void 0:K.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]}),_:2},1032,["modelValue","onUpdate:modelValue","label"]))]))),128)),((Ue=n.originData)==null?void 0:Ue.relationDesc)?(y(),T("div",$t,[I(L,{title:"\u8D23\u4EFB\u6295\u4FDD\u8BF4\u660E"},{default:k(()=>{var p;return[A("div",null,S((p=n.originData)==null?void 0:p.relationDesc),1)]}),_:1})])):R("",!0)])}}});var We=H(Yt,[["__scopeId","data-v-7dfc938c"]]);const Xe=n=>(Je("data-v-24bb32ea"),n=n(),ze(),n),wt={class:"com-risk-list-wrapper"},Ut=Xe(()=>A("div",{class:"popup-title"},"\u9009\u62E9\u9644\u52A0\u9669",-1)),Nt={class:"risk-list"},St={class:"cell-title"},Mt={class:"title"},jt=Xe(()=>A("div",{class:"title-desc"},"\u6B64\u5904\u4E3A\u9669\u79CD\u7B80\u8981\u8BF4\u660E",-1)),Kt={class:"footer-bar"},Gt=Q("\u786E\u8BA4"),Wt=W({props:{riskList:{type:Array,required:!0,default:()=>[]},show:{type:Boolean,required:!0,default:!1},collocationList:{type:Array,default:()=>[]},disabled:{type:Array,required:!0,default:()=>[]},modelValue:{type:Array,required:!0,default:()=>[]}},emits:["finished","close","update:modelValue"],setup(n,{emit:a}){const D=n,_=Y([]),d=Y([]),l=Y([...D.disabled]),b=z({show:D.show,currentChecked:[...D.modelValue]}),F=(m,v)=>{if(!D.collocationList.length){if(v){b.currentChecked=[];return}b.currentChecked.push(m);return}let f=b.currentChecked,g=l.value;v?(D.collocationList.forEach(t=>{m===t.riskId&&(t.collocationType===2?f=f.filter(i=>i!==t.collocationRiskId||i!==m):t.collocationType===3?(f=f.filter(i=>i!==m),g=g.filter(i=>i!==t.collocationRiskId)):f=f.filter(i=>i!==m))}),b.currentChecked=f,l.value=g):(D.collocationList.forEach(t=>{m===t.riskId&&(v||(t.collocationType===2?f.push(t.collocationRiskId):t.collocationType===3&&g.push(t.collocationRiskId),f.push(m)))}),b.currentChecked.push(...f),l.value=g)},V=m=>{var f,g,t;if(l.value.includes(m))return;const v=b.currentChecked.includes(m);F(m,v),(t=(g=(f=_==null?void 0:_.value)==null?void 0:f[m])==null?void 0:g.toggle)==null||t.call(g)},o=()=>{a("close")},h=()=>{const m=D.riskList.filter(v=>b.currentChecked.includes(v.id));a("update:modelValue",[...new Set(d.value)]),a("finished",m,l.value),a("close")};return nt(()=>{_.value=[]}),M(()=>b.currentChecked,m=>{d.value=m},{deep:!0,immediate:!0}),M(()=>D.modelValue,(m=[])=>{d.value=m,l.value.push(...m)},{deep:!0,immediate:!0}),(m,v)=>{const f=B("van-checkbox"),g=B("VanCell"),t=B("van-cell-group"),i=B("van-checkbox-group"),c=B("VanButton"),r=B("VanPopup");return y(),T("div",wt,[I(r,{show:e(b).show,"onUpdate:show":v[1]||(v[1]=u=>e(b).show=u),title:"\u9009\u62E9\u9644\u52A0\u9669","show-footer":"",round:"",position:"bottom",closeable:"",onClose:o},{default:k(()=>[Ut,A("div",Nt,[I(i,{modelValue:d.value,"onUpdate:modelValue":v[0]||(v[0]=u=>d.value=u)},{default:k(()=>[I(t,{inset:""},{default:k(()=>[(y(!0),T(ae,null,oe(n.riskList,u=>(y(),O(g,{key:u.id,title:u.riskName,disabled:l.value.includes(u.id),onClick:s=>V(u.id)},{"right-icon":k(()=>[I(f,{ref_for:!0,ref:s=>_.value[u.id]=s,shape:"square",disabled:l.value.includes(u.id),name:u.id,onClick:ut(s=>V(u.id),["stop"])},null,8,["disabled","name","onClick"])]),title:k(()=>[A("div",St,[A("div",Mt,S(u.riskName),1),jt])]),_:2},1032,["title","disabled","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])]),A("div",Kt,[I(c,{type:"primary",disabled:!e(b).currentChecked.length,block:"",onClick:h},{default:k(()=>[Gt]),_:1},8,["disabled"])])]),_:1},8,["show"])])}}});var Ht=H(Wt,[["__scopeId","data-v-24bb32ea"]]);const Jt={class:"risk-list-wrapper"},zt={key:1,class:"add-rider-risk"},Qt={class:"left-part"},Xt=Q("+ \u9644\u52A0\u9669"),Zt=W({props:{riskInfo:{type:Object,required:!0,default:()=>{}},originData:{type:Object,required:!0,default:()=>{}},pickFactor:{type:Function,required:!0,default:()=>{}},enums:{type:Object,default:()=>{}}},setup(n){var F;const a=n,[D,_]=re(!1);Y(null),Y(null);const d=z({mainRiskInfo:a.riskInfo,riderRiskInfo:(F=a.riskInfo)==null?void 0:F.riderRiskVOList,requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[]}),l=(V,o)=>{d.requiredRiderRiskData=d.requiredRiderRiskData.concat(V),d.disabledList=o},b=V=>{lt.confirm({message:"\u786E\u5B9A\u8981\u5220\u9664\u9644\u52A0\u9669\u4E48\uFF1F"}).then(()=>{var h;const o=[V];(((h=d.mainRiskData)==null?void 0:h.collocationVOList)||[]).forEach(m=>{V===m.riskId&&(m.collocationType===2||m.collocationType===3)&&o.push(m.collocationRiskId)});debugger;d.checkedList=d.checkedList.filter(m=>!o.includes(m)),d.requiredRiderRiskData=d.requiredRiderRiskData.filter(m=>!o.includes(m.id)),d.disabledList=d.disabledList.filter(m=>!o.includes(m)),Object.assign(d.riderRiskInfo,{[V]:void 0})}).catch(()=>{})};return se(()=>{d.requiredRiderRiskData}),M(()=>d.requiredRiderRiskData,V=>{const o=[d.mainRiskData,...V];let h=[],m=[];const v=[];o.forEach((f,g)=>{var i,c,r;const t=((i=f==null?void 0:f.riskCalcMethodInfoVO)==null?void 0:i.riskFactorRelationList)||[];h=h.concat(t.filter(u=>u.factorObject==="insured").map(u=>u.factorCode)),m=m.concat(t.filter(u=>u.factorObject==="holder").map(u=>u.factorCode)),v.push((c=f==null?void 0:f.riskInsureLimitVO)==null?void 0:c.minHolderAge,(r=f==null?void 0:f.riskInsureLimitVO)==null?void 0:r.maxHolderAge)}),(V||[]).forEach(f=>{var t;const g={riskType:f.riskType,riskId:f.id,riskCode:f.riskCode,mainRiskCode:d.mainRiskData.riskCode,mainRiskId:(t=d.mainRiskData)==null?void 0:t.id,riskCategory:f.riskCategory,liabilityVOList:(f.riskLiabilityInfoVOList||[]).map(i=>({liabilityAttributeCode:i.liabilityAttributeType,liabilityCode:i.liabilityCode,liabilityId:i.id,liabilityRateType:i.liabilityRateType}))};Object.assign(d.riderRiskInfo,{[f.id]:g})}),a.pickFactor({insuredFactorList:[...new Set(h)],holderFactorList:[...new Set(m)],ageRange:v})},{deep:!0,immediate:!0}),M(()=>a.originData,V=>{(V||[]).forEach(o=>{o.riskType===1?(d.mainRiskData=o,d.requiredRiderRiskData=(o==null?void 0:o.requiredRiderRiskVOList)||[],d.riderRiskList=o==null?void 0:o.optionalRiderRiskVOList):d.riderRiskList.push(o)})},{deep:!0,immediate:!0}),(V,o)=>{var h,m,v,f,g;return y(),T("div",Jt,[e(d).mainRiskData?(y(),O(We,{key:0,enums:n.enums,"form-info":e(d).mainRiskInfo,"origin-data":e(d).mainRiskData},null,8,["enums","form-info","origin-data"])):R("",!0),(y(!0),T(ae,null,oe(e(d).requiredRiderRiskData,(t,i)=>(y(),O(We,{key:t.id,"form-info":e(d).riderRiskInfo[t.id],index:i,enums:n.enums,"main-risk-data":e(d).mainRiskData,"main-risk-info":e(d).mainRiskInfo,"origin-data":t,"remove-risk":b,"remove-risk-list":e(d).checkedList},null,8,["form-info","index","enums","main-risk-data","main-risk-info","origin-data","remove-risk-list"]))),128)),((m=(h=e(d))==null?void 0:h.riderRiskList)==null?void 0:m.length)-((f=(v=e(d))==null?void 0:v.checkedList)==null?void 0:f.length)?(y(),T("div",zt,[A("span",Qt,S(`\u5171\u6709${e(d).riderRiskList.length-e(d).checkedList.length}\u6B3E\u9644\u52A0\u9669\u53EF\u4EE5\u6DFB\u52A0`),1),I(mt,{activied:"",onClick:o[0]||(o[0]=t=>e(_)(!0))},{default:k(()=>[Xt]),_:1})])):R("",!0),e(D)?(y(),O(Ht,{key:2,modelValue:e(d).checkedList,"onUpdate:modelValue":o[1]||(o[1]=t=>e(d).checkedList=t),show:e(D),disabled:e(d).disabledList,"risk-list":e(d).riderRiskList,"collocation-list":((g=e(d).mainRiskData)==null?void 0:g.collocationVOList)||[],onFinished:l,onClose:o[2]||(o[2]=t=>e(_)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):R("",!0)])}}});var He=H(Zt,[["__scopeId","data-v-ab441982"]]);const ei=(n={})=>de.get(`/api/product/insureProductDetail/${n==null?void 0:n.productId}`,n),ti=(n={})=>de.post("/api/insurance/premiumCalc",n);const ii=W({props:{title:{type:String,default:()=>""},active:{type:Boolean,default:!1}},setup(n){return(a,D)=>(y(),T("button",{class:rt(n.active?"active-button":"")},S(n.title),3))}});var ai=H(ii,[["__scopeId","data-v-43a1c07a"]]);const oi={key:0,class:"part-card"},ni={key:1,class:"part-card"},ui={class:"risk-content"},li={key:0,class:"risk"},ri={key:1,class:"plan-risk"},si={class:"footer-bar"},di={class:"trial-result"},ci={class:"result-num"},mi=Q(" \u5143\u8D77 "),fi={class:"trial-operate"},pi={key:0,class:"retrial-tip"},yi=Q(" \u6761\u4EF6\u66F4\u6539\u540E\uFF0C\u9700\u8981\u91CD\u65B0\u8BD5\u7B97 "),Vi=Q("\u53BB\u8BD5\u7B97"),Di=Q("\u7ACB\u5373\u6295\u4FDD"),gi=W({setup(n){const{id:a=118}=st().query,D=Y({personVO:{}}),_=Y({insuredCode:"",personVO:{}}),d=Y({}),l=Y({}),b=Y({}),F=Y({}),V=Y({}),o=z({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"]});dt("premium",V.value);const h=()=>{o.retrialTip=!1},m=()=>{var s;const c=JSON.parse(JSON.stringify(d.value[o.currentPlan])),r=Object.values(c.riderRiskVOList).map(L=>{const C=L;if(C.paymentYear==="3"){const x=(d.value[o.currentPlan].paymentYear||"").split("_");x[1]&&(x[1]-=1),C.paymentYear=x.join("_")}return C.liabilityVOList=(C.liabilityVOList||[]).filter(x=>!["-1"].includes(x.liabilityAttributeValue)).map(x=>{const q=x;return q.liabilityAttributeValue==="0"&&(q.liabilityAttributeValue=""),q}),C});c.liabilityVOList=c.liabilityVOList.filter(L=>!["-1"].includes(L.liabilityAttributeValue)).map(L=>{const C=L;return C.liabilityAttributeValue==="0"&&(C.liabilityAttributeValue=""),C});const u={holder:{personVO:ie(J({},D.value.personVO),{birthday:D.value.personVO.birthday&&`${D.value.personVO.birthday} 00:00:00`})},productCode:(s=o==null?void 0:o.riskBaseInfo)==null?void 0:s.productCode,insuredVOList:[ie(J({},_.value),{personVO:ie(J({},_.value.personVO),{birthday:_.value.personVO.birthday&&`${_.value.personVO.birthday} 00:00:00`}),productPlanVOList:[{planCode:o.currentPlan||"",riskVOList:[ie(J({},c),{riderRiskVOList:r})]}]})]};ti(J({},u)).then(({code:L,data:C})=>{if(L==="10000"){o.retrialTip=!1,o.trialResult=C,o.canTrial=!1;const x={},q=(j=[])=>{(j||[]).forEach(U=>{x[U.riskCode]=U,U.riskPremiumDetailVOList&&q(U.riskPremiumDetailVOList)})};q(C.riskPremiumDetailVOList),Object.assign(V.value,x)}else o.retrialTip=!0})},v=()=>{var c,r,u,s,L;Promise.all([(r=(c=l==null?void 0:l.value)==null?void 0:c.validateForm)==null?void 0:r.call(c),(s=(u=b==null?void 0:b.value)==null?void 0:u.validateForm)==null?void 0:s.call(u),(L=F==null?void 0:F.value)==null?void 0:L.validate()]).then(()=>{m()})},f=()=>{ct("\u51C6\u5907\u6295\u4FDD")},g=()=>{Qe({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then(({code:r,data:u})=>{if(r==="10000"){const s={};u.forEach(L=>{s[L.dictCode]=L.dictItemList}),o.enumList=s}})},t=()=>{ei({productId:a}).then(({code:c,data:r})=>{c==="10000"&&(o.riskBaseInfo=r==null?void 0:r.productBasicInfoVO,console.log("state.riskBaseInfo",o.riskBaseInfo),((r==null?void 0:r.productRelationPlanVOList)||(r==null?void 0:r.riskDetailVOList)||[]).forEach((u,s)=>{s===0&&(o.currentPlan=u.planCode||0),Object.assign(d.value,{[u.planCode||s]:{liabilityVOList:[],riderRiskVOList:{}}})}),o.riskData=(r==null?void 0:r.riskDetailVOList)||[],o.riskPlanData=(r==null?void 0:r.productRelationPlanVOList)||[])}).finally(()=>{})},i=c=>{o.holderFactor=c.holderFactorList,o.insuredFactor=c.insuredFactorList,o.ageRange=c.ageRange};return M([()=>d.value,()=>D.value,()=>_.value],c=>{c&&!o.canTrial&&(o.canTrial=!0,o.retrialTip=!0)},{deep:!0}),se(()=>{t(),g()}),(c,r)=>{const u=B("VanForm"),s=B("VanTab"),L=B("VanTabs"),C=B("van-collapse-item"),x=B("van-collapse"),q=B("VanButton"),j=B("ZaPageWrap");return y(),O(j,{class:"page-trial-wrapper"},{default:k(()=>{var U,X,Z,ee;return[e(o).holderFactor.length?(y(),T("div",oi,[I(ue,{title:"\u6295\u4FDD\u4EBA"}),I(Ge,{ref_key:"holderRef",ref:l,"insured-code":(U=e(o).riskBaseInfo)==null?void 0:U.insurerCode,"form-info":D.value.personVO,"factor-list":e(o).holderFactor,"age-range":e(o).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):R("",!0),e(o).insuredFactor.length?(y(),T("div",ni,[I(ue,{title:"\u88AB\u4FDD\u4EBA"}),I(Ge,{ref_key:"insuredRef",ref:b,"insured-code":(X=e(o).riskBaseInfo)==null?void 0:X.insurerCode,"form-info":_.value.personVO,"factor-list":e(o).insuredFactor,"age-range":e(o).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):R("",!0),A("div",ui,[I(x,{modelValue:e(o).collapseName,"onUpdate:modelValue":r[1]||(r[1]=$=>e(o).collapseName=$)},{default:k(()=>[I(C,{name:"1"},{title:k(()=>[I(ue,{title:"\u6295\u4FDD\u65B9\u6848"})]),default:k(()=>[e(o).riskData.length?(y(),T("div",li,[I(u,{ref_key:"riskFormRef",ref:F,"input-align":"right","error-message-align":"right"},{default:k(()=>[I(He,{"risk-info":d.value[0],enums:e(o).enumList,"origin-data":e(o).riskData,"pick-factor":i},null,8,["risk-info","enums","origin-data"])]),_:1},512)])):R("",!0),e(o).riskPlanData.length?(y(),T("div",ri,[I(u,{ref_key:"riskFormRef",ref:F,"input-align":"right","error-message-align":"right"},{default:k(()=>[I(L,{active:e(o).currentPlan,"onUpdate:active":r[0]||(r[0]=$=>e(o).currentPlan=$)},{default:k(()=>[(y(!0),T(ae,null,oe(e(o).riskPlanData,$=>(y(),O(s,{key:$.planCode,name:$.planCode,title:$.planName},{title:k(()=>[I(ai,{title:$.planName,active:e(o).currentPlan===$.planCode},null,8,["title","active"])]),default:k(()=>[$.planCode===e(o).currentPlan?(y(),O(He,{key:0,"risk-info":d.value[$.planCode],enums:e(o).enumList,"origin-data":$.riskDetailVOList,"pick-factor":i},null,8,["risk-info","enums","origin-data"])):R("",!0)]),_:2},1032,["name","title"]))),128))]),_:1},8,["active"])]),_:1},512)])):R("",!0)]),_:1})]),_:1},8,["modelValue"])]),A("div",si,[A("span",di,[A("span",ci,S((e(o).retrialTip?"0":((ee=(Z=e(o))==null?void 0:Z.trialResult)==null?void 0:ee.premium)||"0").toLocaleString()),1),mi]),A("div",fi,[e(o).retrialTip?(y(),T("div",pi,[yi,A("span",{class:"close-icon",onClick:h},"X")])):R("",!0),e(o).canTrial?(y(),O(q,{key:1,type:"primary",onClick:v},{default:k(()=>[Vi]),_:1})):(y(),O(q,{key:2,type:"primary",onClick:f},{default:k(()=>[Di]),_:1}))])])]}),_:1})}}});var Fi=H(gi,[["__scopeId","data-v-260d15e9"]]);export{Fi as default};
