import{g as M,L as S,X as x,r as R,h as y,m as B,n as h,k as F,y as O,z as t,a1 as Pe,a2 as Oe,a5 as H,C as U,x as $,d as G,j as C,s as P,I as w,a6 as Te,a4 as W,o as _e,F as X,E as z,ae as we,af as Ue,B as Be,D as qe}from"./vendor-4dbfa310.js";import{g as $e}from"./index-43962f28.js";import{S as j,_ as Y,b as xe}from"./index-e3074f98.js";const Ne=[{label:"\u7537",value:"1"},{label:"\u5973",value:"2"}],Me=[{label:"\u6709",value:"1"},{label:"\u65E0",value:"2"}],Se=[{value:1,label:"\u7B2C5\u4E2A\u4FDD\u5355\u5468\u5E74\u65E5"},{value:2,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8455\u5468\u5C81"},{value:3,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8460\u5468\u5C81"},{value:4,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8465\u5468\u5C81"},{value:5,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8470\u5468\u5C81"},{value:6,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8475\u5468\u5C81"}],Ye=[{value:1,label:"\u5E74\u9886"},{value:2,label:"\u6708\u9886"}],K=[{label:"\u8DB8\u4EA4",value:"1"},{label:"\u5E74\u4EA4",value:"2"},{label:"\u534A\u5E74\u4EA4",value:"3"},{label:"\u5B63\u4EA4",value:"4"},{label:"\u6708\u4EA4",value:"5"}],je=[{name:"\u540C\u4E3B\u9669\u671F\u95F4\u51CF1",value:"3"},{name:"\u65E0\u9650\u5236",value:"2"}],Ce=[{label:"\u8FD4\u4FDD\u989D",value:"1"},{label:"\u8FD4\u4FDD\u8D39",value:"2"}],Ge=[{label:"\u6295\u4FDD",value:"0"},{label:"\u4E0D\u6295\u4FDD",value:"-1"}],Ot={1:"\u5929",2:"\u6708",3:"\u5E74",4:"\u81F3$\u5C81",5:"\u81F3\u7EC8\u8EAB",day:1,month:2,year:3,to:4,to_life:5},_t={1:"\u8DB8\u4EA4",2:"$\u5E74\u4EA4",3:"\u81F3$\u5C81",single:1,year:2,to:3};new j({source:"sessionStorage"});const Ae=new j({source:"localStorage"}),Ke=new j({source:"cookie"}),Bt=()=>Ke||new j({source:"cookie"});const He=o=>(Pe("data-v-4b261f8d"),o=o(),Oe(),o),We={class:"com-occupational-wrapper"},Xe=He(()=>O("div",{class:"popup-title"},"\u9009\u62E9\u804C\u4E1A",-1)),ze={class:"popup-content"},Qe=M({props:{modelValue:{type:Array,required:!0,default:()=>[]},insuredCode:{type:String,required:!0,default:""},show:{type:Boolean,required:!0,default:!1}},emits:["finish","close","update:modelValue"],setup(o,{emit:n}){const A=o,E=S({show:A.show,options:[],currentValue:""}),v=()=>{n("close")},i=({value:D,selectedOptions:k})=>{const p=(k||[]).map(m=>m.value).join("/"),c=+k[k.length-1].name;n("update:modelValue",c),n("finish",p),v()},I=D=>{const k=D,p=c=>{c.forEach(m=>{const g=m;g.children.length?p(g.children):g.children=null})};return p(k),k},L=(D="")=>{var c;const k=`${(c=D==null?void 0:D.toLocaleUpperCase)==null?void 0:c.call(D)}_OCCUPATION`,p=Ae.get("occupational")||{};if(p[k]){E.options=p[k];return}$e({dictCodeList:[k]}).then(({code:m,data:g})=>{var s;if(m==="10000"){const e=I(((s=g==null?void 0:g[0])==null?void 0:s.dictItemList)||[]);E.options=e,p[k]=e,Ae.set("occupational",p)}})};return x(()=>A,()=>{L(A.insuredCode)},{deep:!0,immediate:!0}),x(()=>A.modelValue,D=>{},{deep:!0,immediate:!0}),(D,k)=>{const p=R("van-cascader"),c=R("VanPopup");return y(),B("div",We,[h(c,{show:t(E).show,"onUpdate:show":k[1]||(k[1]=m=>t(E).show=m),"show-footer":"",position:"bottom",closeable:"",onClose:v},{default:F(()=>[Xe,O("div",ze,[h(p,{modelValue:t(E).currentValue,"onUpdate:modelValue":k[0]||(k[0]=m=>t(E).currentValue=m),title:"\u8BF7\u9009\u62E9\u804C\u4E1A","show-header":!1,placeholder:"\u8BF7\u9009\u62E9",options:t(E).options,"active-color":"#0d6efe","field-names":{text:"value",value:"code",children:"children"},onFinish:i},null,8,["modelValue","options"])])]),_:1},8,["show"])])}}});var Je=Y(Qe,[["__scopeId","data-v-4b261f8d"]]);const Ze={class:"com-personal-info-wrapper"},et={key:0,class:"placeholder"},tt={key:1},it=M({props:{formInfo:{default:()=>({})},insuredCode:{default:""},factorList:{default:()=>[]},ageRange:{default:()=>[]}},setup(o,{expose:n}){const A=o,[E,v]=H(),[i,I]=H(),L=U(),D=S({formInfo:A.formInfo,occupationalText:""}),k=s=>{D.occupationalText=s},p=()=>{I(!1)},c=()=>new Promise((s,e)=>{L==null||L.value.validate().then(()=>{s("")},()=>{e()})}),m=s=>{const e=s||[];for(let a=0;a<e.length;a++)for(let l=a+1;l<e.length;l++){const r=e[a].split("_"),u=e[l].split("_"),f=e[a];r[0]===u[0]?r>u&&(e[a]=e[l],e[l]=f):r[0]==="age"&&(e[a]=e[l],e[l]=f)}return e},g=$(()=>{const s=m(A==null?void 0:A.ageRange),e=(f="")=>{const V=+f.split("_")[1],N=f.split("_")[0];return[V,N]},a=e(s[0]),l=e(s[s.length-1]),r=G().subtract(a[0],a[1]==="age"?"year":"day").format("YYYY-MM-DD"),u=G().subtract(l[0],l[1]==="age"?"year":"day").format("YYYY-MM-DD");return{minAge:new Date(u),maxAge:new Date(r)}});return n({validateForm:c}),(s,e)=>{const a=R("VanField"),l=R("ProRadioButton"),r=R("VanForm"),u=R("van-datetime-picker"),f=R("van-popup");return y(),B("div",Ze,[h(r,{ref_key:"formRef",ref:L,"input-align":"right","error-message-align":"right"},{default:F(()=>[o.factorList.includes("APPLICANT.AGE")||o.factorList.includes("AGE")||o.factorList.includes("DAY")||o.factorList.includes("APPLICANT.DAY")?(y(),C(a,{key:0,modelValue:t(D).formInfo.birthday,"onUpdate:modelValue":e[0]||(e[0]=V=>t(D).formInfo.birthday=V),rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u51FA\u751F\u65E5\u671F"}],name:"birth",label:"\u51FA\u751F\u65E5\u671F",class:"isLink",readonly:"","is-link":"",placeholder:"\u8BF7\u9009\u62E9",onClick:e[1]||(e[1]=V=>t(v)(!0))},null,8,["modelValue"])):P("",!0),o.factorList.includes("APPLICANT.GENDER")||o.factorList.includes("GENDER")?(y(),C(a,{key:1,modelValue:t(D).formInfo.gender,"onUpdate:modelValue":e[3]||(e[3]=V=>t(D).formInfo.gender=V),name:"gender",label:"\u6027\u522B",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6027\u522B"}]},{input:F(()=>[h(l,{modelValue:t(D).formInfo.gender,"onUpdate:modelValue":e[2]||(e[2]=V=>t(D).formInfo.gender=V),options:t(Ne)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):P("",!0),o.factorList.includes("SOCIAL_INS")?(y(),C(a,{key:2,modelValue:t(D).formInfo.socialSecurity,"onUpdate:modelValue":e[5]||(e[5]=V=>t(D).formInfo.socialSecurity=V),name:"socialSecurity",label:"\u793E\u4FDD",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u793E\u4FDD"}]},{input:F(()=>[h(l,{modelValue:t(D).formInfo.socialSecurity,"onUpdate:modelValue":e[4]||(e[4]=V=>t(D).formInfo.socialSecurity=V),options:t(Me)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):P("",!0),o.factorList.includes("OCCUPATION_CATEGORY")?(y(),C(a,{key:3,modelValue:t(D).formInfo.occupationalClass,"onUpdate:modelValue":e[6]||(e[6]=V=>t(D).formInfo.occupationalClass=V),rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u804C\u4E1A\u7C7B\u578B"}],name:"occupationalClass",label:"\u804C\u4E1A\u7C7B\u578B","is-link":"",readonly:"",placeholder:"\u8BF7\u9009\u62E9",onClick:e[7]||(e[7]=V=>t(I)(!0))},{input:F(()=>[t(D).occupationalText?(y(),B("div",tt,w(t(D).occupationalText),1)):(y(),B("span",et,"\u8BF7\u9009\u62E9"))]),_:1},8,["modelValue"])):P("",!0)]),_:1},512),h(f,{show:t(E),"onUpdate:show":e[10]||(e[10]=V=>Te(E)?E.value=V:null),position:"bottom"},{default:F(()=>[h(u,{type:"date","min-date":t(g).minAge,"max-date":t(g).maxAge,onConfirm:e[8]||(e[8]=V=>{t(D).formInfo.birthday=t(G)(V).format("YYYY-MM-DD"),t(v)(!1)}),onCancel:e[9]||(e[9]=V=>t(v)(!1))},null,8,["min-date","max-date"])]),_:1},8,["show"]),t(i)?(y(),C(Je,{key:0,modelValue:t(D).formInfo.occupationalClass,"onUpdate:modelValue":e[11]||(e[11]=V=>t(D).formInfo.occupationalClass=V),show:t(i),"insured-code":o.insuredCode,onFinish:k,onClose:p},null,8,["modelValue","show","insured-code"])):P("",!0)])}}});var xt=Y(it,[["__scopeId","data-v-14e8e8a8"]]);const at={class:"com-risk-card-wrapper part-card"},ot={class:"custom-field"},nt={class:"field-tip"},ut={class:"custom-field"},lt={class:"field-tip"},rt={class:"custom-field"},st={class:"field-tip"},dt={key:0},mt={key:9,class:"liab-desc"},ct=M({props:{originData:{default:()=>({})},formInfo:{default:()=>({})},mainRiskData:{default:()=>({})},mainRiskInfo:{default:()=>({})},index:{default:0},removeRisk:{type:Function,default:()=>{}},removeRiskList:{default:()=>[]},enums:{default:()=>({})}},setup(o){const n=o,A=U({}),E=W("premium")||{};A.value=W("enumList")||{};const v=U({chargePeriod:{disabled:!1,prevent:!1},coveragePeriod:{disabled:!1,prevent:!1},paymentFrequency:{disabled:!1,prevent:!1}}),i=S({formInfo:n.formInfo}),I=e=>typeof e!="boolean"&&!e||Array.isArray(e)&&!e.length?!0:{}.toString.call(e)==="object Object"?Object.keys(e).length:!1,L=(e,a,l={})=>{let r=a;return Array.isArray(a)||(r=[`${r}`]),(e||[]).filter(u=>r.includes(`${u.value}`)||r.includes(u.value))},D=$(()=>{var e,a,l,r,u;return((e=n.originData)==null?void 0:e.riskType)===1?L(n.enums.RISK_INSURANCE_PERIOD,((a=n.originData.riskInsureLimitVO)==null?void 0:a.insurancePeriodValueList)||[]):((l=n.originData)==null?void 0:l.periodType)===2?L([{value:"year_1",label:"1\u5E74"}],["year_1"]):L((r=n.enums)==null?void 0:r.RISK_INSURANCE_PERIOD,((u=n.mainRiskData.riskInsureLimitVO)==null?void 0:u.insurancePeriodValueList)||[])}),k=$(()=>{var e,a,l,r,u,f,V,N;return((e=n.originData)==null?void 0:e.riskType)===1?L((a=n==null?void 0:n.enums)==null?void 0:a.RISK_PAYMENT_PERIOD,((l=n.originData.riskInsureLimitVO)==null?void 0:l.paymentPeriodValueList)||[]):((r=n.originData)==null?void 0:r.exemptFlag)===1?L(je,[`${(f=(u=n==null?void 0:n.originData)==null?void 0:u.riskInsureLimitVO)==null?void 0:f.paymentPeriodRule}`]):((V=n.originData)==null?void 0:V.periodType)===2?L([{value:"year_1",name:"1\u5E74\u4EA4"}],["year_1"]):L(n.enums.RISK_PAYMENT_PERIOD,((N=n.mainRiskData.riskInsureLimitVO)==null?void 0:N.paymentPeriodValueList)||[])}),p=$(()=>{var e,a,l,r,u;return((e=n.originData)==null?void 0:e.riskType)===1?L(K,((a=n.originData.riskInsureLimitVO)==null?void 0:a.paymentFrequencyList)||[]):((l=n.originData.riskInsureLimitVO)==null?void 0:l.paymentTypeRule)===1?L(K,((r=n.mainRiskData.riskInsureLimitVO)==null?void 0:r.paymentFrequencyList)||[]):L(K,((u=n.mainRiskData.riskInsureLimitVO)==null?void 0:u.paymentFrequencyList)||[])}),c=$(()=>{var l,r;let e=0,a=0;return(((r=(l=n.originData)==null?void 0:l.riskCalcMethodInfoVO)==null?void 0:r.paymentMethodLimitList)||[]).forEach((u,f)=>{f===0&&(e=u.minAmount,a=u.maxAmount),e>u.minAmount&&(e=u.minAmount),a<u.maxAmount&&(a=u.maxAmount)}),i.formInfo.amount=e,{min:e,max:a}}),m=$(()=>{var l,r;let e=0,a=0;return(((r=(l=n.originData)==null?void 0:l.riskCalcMethodInfoVO)==null?void 0:r.paymentMethodLimitList)||[]).forEach((u,f)=>{f===0&&(e=u.minPremium,a=u.maxPremium),e>u.minPremium&&(e=u.minPremium),a<u.maxPremium&&(a=u.maxPremium)}),i.formInfo.premium=e,{min:e,max:a}}),g=$(()=>{var l,r,u,f;const e=((r=(l=n.originData)==null?void 0:l.riskCalcMethodInfoVO)==null?void 0:r.minCopy)||1,a=(f=(u=n.originData)==null?void 0:u.riskCalcMethodInfoVO)==null?void 0:f.maxCopy;return i.formInfo.copy=`${e||1}`,{min:e,max:a}}),s=(e,a)=>{var r,u;const l=((u=(r=n.originData)==null?void 0:r.riskCalcMethodInfoVO)==null?void 0:u.increaseDecreaseNum)||1;return+e%l===0?"":`\u91D1\u989D\u5FC5\u987B\u662F${l}\u7684\u500D\u6570`};return _e(()=>{var a,l;const e={riskType:n.originData.riskType,riskId:n.originData.id,riskName:n.originData.riskName,riskCode:n.originData.riskCode,mainRiskCode:(a=n==null?void 0:n.mainRiskData)==null?void 0:a.riskCode,mainRiskId:(l=n==null?void 0:n.mainRiskData)==null?void 0:l.id,riskCategory:n.originData.riskCategory,liabilityVOList:(n.originData.riskLiabilityInfoVOList||[]).map(r=>({liabilityAttributeCode:r.liabilityAttributeType,liabilityCode:r.liabilityCode,liabilityId:r.id,liabilityRateType:r.liabilityRateType}))};Object.assign(i==null?void 0:i.formInfo,e)}),x(()=>{var e;return(e=i.formInfo)==null?void 0:e.paymentFrequency},(e=0)=>{var a,l,r;[3,4].includes(((a=n.originData.riskCalcMethodInfoVO)==null?void 0:a.saleMethod)||0)&&(((r=(l=n.originData)==null?void 0:l.riskCalcMethodInfoVO)==null?void 0:r.paymentMethodLimitList)||[]).forEach(u=>{+u.paymentFrequency==+e&&Object.assign(i.formInfo,{amount:u.perCopyAmount,premium:u.perCopyPremium})}),+e==1&&i.formInfo.chargePeriod!=="single"&&(i.formInfo.chargePeriod="single")}),x(()=>{var e;return(e=i.formInfo)==null?void 0:e.chargePeriod},e=>{e==="single"&&+(i.formInfo.paymentFrequency||0)!=1&&(i.formInfo.paymentFrequency=1)}),x(()=>n==null?void 0:n.mainRiskInfo,e=>{var a,l,r,u,f,V;e&&n.originData.riskType===2&&(((l=(a=n.originData)==null?void 0:a.riskInsureLimitVO)==null?void 0:l.insurancePeriodRule)===1&&(e.coveragePeriod?v.value.coveragePeriod.disabled=!0:v.value.coveragePeriod.prevent=!0,i.formInfo.coveragePeriod=e.coveragePeriod||""),((u=(r=n.originData)==null?void 0:r.riskInsureLimitVO)==null?void 0:u.paymentPeriodRule)===1&&(e.chargePeriod?v.value.chargePeriod.disabled=!0:v.value.chargePeriod.prevent=!0,i.formInfo.chargePeriod=e.chargePeriod||""),((V=(f=n.originData)==null?void 0:f.riskInsureLimitVO)==null?void 0:V.paymentTypeRule)===1&&(e.paymentFrequency?v.value.paymentFrequency.disabled=!0:v.value.paymentFrequency.prevent=!0,i.formInfo.paymentFrequency=e.paymentFrequency||0))},{immediate:!0,deep:!0}),(e,a)=>{var Q,J,Z,ee,te,ie,ae,oe,ne,ue,le,re,se,de,me,ce,fe,pe,ye,De,ge,Ve,ke,Ie,ve,be,Fe,Le,he,Ee;const l=R("ProSvg"),r=R("ProTitle"),u=R("VanStepper"),f=R("VanField"),V=R("ProRadioButton"),N=R("ProExpand");return y(),B("div",at,[h(r,{"risk-type":o.originData.riskType,title:o.originData.riskName},{default:F(()=>[o.removeRiskList.includes(o.originData.id)?(y(),B("div",{key:0,class:"delete-risk",onClick:a[0]||(a[0]=d=>o.removeRisk(o.originData.id))},[h(l,{name:"delete",color:"#0d6efe"})])):P("",!0)]),_:1},8,["risk-type","title"]),((Q=o.originData.riskCalcMethodInfoVO)==null?void 0:Q.saleMethod)===1&&o.originData.exemptFlag===2?(y(),C(f,{key:0,modelValue:t(i).formInfo.amount,"onUpdate:modelValue":a[2]||(a[2]=d=>t(i).formInfo.amount=d),label:"\u4FDD\u989D",name:"amount",rules:[{required:!0,message:"\u8BF7\u586B\u5199"},{trigger:"onChange",validator:s}]},{input:F(()=>{var d,b;return[O("div",ot,[h(u,{modelValue:t(i).formInfo.amount,"onUpdate:modelValue":a[1]||(a[1]=_=>t(i).formInfo.amount=_),"input-width":"64px",min:t(c).min,step:((d=o.originData.riskCalcMethodInfoVO)==null?void 0:d.increaseDecreaseNum)||1,max:t(c).max},null,8,["modelValue","min","step","max"]),O("span",nt,w(`\u91D1\u989D\u6700\u4F4E${t(c).min}\u5143\uFF0C\u4E3A${((b=o.originData.riskCalcMethodInfoVO)==null?void 0:b.increaseDecreaseNum)||1}\u7684\u500D\u6570`),1)])]}),_:1},8,["modelValue","rules"])):P("",!0),((Z=(J=o.originData)==null?void 0:J.riskCalcMethodInfoVO)==null?void 0:Z.saleMethod)===2?(y(),C(f,{key:1,modelValue:t(i).formInfo.premium,"onUpdate:modelValue":a[4]||(a[4]=d=>t(i).formInfo.premium=d),label:"\u4FDD\u8D39",name:"premium",rules:[{required:!0,message:"\u8BF7\u586B\u5199"},{trigger:"onChange",validator:s}]},{input:F(()=>{var d,b,_,T;return[O("div",ut,[h(u,{modelValue:t(i).formInfo.premium,"onUpdate:modelValue":a[3]||(a[3]=q=>t(i).formInfo.premium=q),step:((b=(d=o.originData)==null?void 0:d.riskCalcMethodInfoVO)==null?void 0:b.increaseDecreaseNum)||1,min:t(m).min,"input-width":"64px",max:t(m).max},null,8,["modelValue","step","min","max"]),O("span",lt,w(`\u91D1\u989D\u6700\u4F4E${t(m).min}\u5143\uFF0C\u4E3A${((T=(_=o.originData)==null?void 0:_.riskCalcMethodInfoVO)==null?void 0:T.increaseDecreaseNum)||1}\u7684\u500D\u6570`),1)])]}),_:1},8,["modelValue","rules"])):P("",!0),((te=(ee=o.originData)==null?void 0:ee.riskCalcMethodInfoVO)==null?void 0:te.saleMethod)===3||((ae=(ie=o.originData)==null?void 0:ie.riskCalcMethodInfoVO)==null?void 0:ae.saleMethod)===4&&(((ne=(oe=o.originData)==null?void 0:oe.riskCalcMethodInfoVO)==null?void 0:ne.minCopy)||((le=(ue=o.originData)==null?void 0:ue.riskCalcMethodInfoVO)==null?void 0:le.maxCopy))?(y(),C(f,{key:2,modelValue:t(i).formInfo.copy,"onUpdate:modelValue":a[6]||(a[6]=d=>t(i).formInfo.copy=d),label:"\u6295\u4FDD\u4EFD\u6570",name:"copy",rules:[{required:!0,message:"\u8BF7\u586B\u5199"}]},{input:F(()=>[O("div",rt,[h(u,{modelValue:t(i).formInfo.copy,"onUpdate:modelValue":a[5]||(a[5]=d=>t(i).formInfo.copy=d),step:1,min:t(g).min,max:t(g).max},null,8,["modelValue","min","max"]),O("span",st,w(`${t(g).min}\u4EFD\u8D77\u8D2D\uFF0C\u6700\u591A\u8D2D\u4E70${t(g).max}\u4EFD`),1)])]),_:1},8,["modelValue"])):P("",!0),(![1,4].includes(((re=o.originData.riskCalcMethodInfoVO)==null?void 0:re.saleMethod)||0)||((se=o.originData)==null?void 0:se.exemptFlag)===1)&&((me=t(E))==null?void 0:me[(de=o.originData)==null?void 0:de.riskCode])?(y(),C(f,{key:3,label:"\u4FDD\u989D"},{input:F(()=>{var d,b,_;return[O("div",null,w((_=(b=t(E))==null?void 0:b[(d=o.originData)==null?void 0:d.riskCode])==null?void 0:_.amount),1)]}),_:1})):P("",!0),!I((fe=(ce=o.originData)==null?void 0:ce.riskInsureLimitVO)==null?void 0:fe.insurancePeriodValueList)||!I((ye=(pe=o.originData)==null?void 0:pe.riskInsureLimitVO)==null?void 0:ye.insurancePeriodRule)?(y(),C(f,{key:4,modelValue:t(i).formInfo.coveragePeriod,"onUpdate:modelValue":a[8]||(a[8]=d=>t(i).formInfo.coveragePeriod=d),label:"\u4FDD\u969C\u671F\u95F4",name:"coveragePeriod",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4FDD\u969C\u671F\u95F4"}]},{input:F(()=>[h(V,{modelValue:t(i).formInfo.coveragePeriod,"onUpdate:modelValue":a[7]||(a[7]=d=>t(i).formInfo.coveragePeriod=d),disabled:v.value.coveragePeriod.disabled,prevent:v.value.coveragePeriod.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4FDD\u969C\u671F\u95F4":"",options:t(D),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])]),_:1},8,["modelValue"])):P("",!0),!I((ge=(De=o.originData)==null?void 0:De.riskInsureLimitVO)==null?void 0:ge.paymentPeriodValueList)||!I((ke=(Ve=o.originData)==null?void 0:Ve.riskInsureLimitVO)==null?void 0:ke.paymentPeriodRule)?(y(),C(f,{key:5,modelValue:t(i).formInfo.chargePeriod,"onUpdate:modelValue":a[10]||(a[10]=d=>t(i).formInfo.chargePeriod=d),label:"\u4EA4\u8D39\u671F\u95F4",name:"chargePeriod",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4EA4\u8D39\u671F\u95F4"}]},{input:F(()=>[h(V,{modelValue:t(i).formInfo.chargePeriod,"onUpdate:modelValue":a[9]||(a[9]=d=>t(i).formInfo.chargePeriod=d),disabled:v.value.chargePeriod.disabled,prevent:v.value.chargePeriod.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4EA4\u8D39\u671F\u95F4":"",options:t(k),prop:{label:"name",value:"value"}},null,8,["modelValue","disabled","prevent","options"])]),_:1},8,["modelValue"])):P("",!0),!I((Ie=o.originData.riskInsureLimitVO)==null?void 0:Ie.paymentFrequencyList)||!I((ve=o.originData.riskInsureLimitVO)==null?void 0:ve.paymentPeriodRule)?(y(),C(f,{key:6,modelValue:t(i).formInfo.paymentFrequency,"onUpdate:modelValue":a[12]||(a[12]=d=>t(i).formInfo.paymentFrequency=d),label:"\u4EA4\u8D39\u65B9\u5F0F",name:"paymentFrequency",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4EA4\u8D39\u65B9\u5F0F"}]},{input:F(()=>[h(V,{modelValue:t(i).formInfo.paymentFrequency,"onUpdate:modelValue":a[11]||(a[11]=d=>t(i).formInfo.paymentFrequency=d),disabled:v.value.paymentFrequency.disabled,prevent:v.value.paymentFrequency.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4EA4\u8D39\u65B9\u5F0F":"",options:t(p)},null,8,["modelValue","disabled","prevent","options"])]),_:1},8,["modelValue"])):P("",!0),I((Fe=(be=o.originData)==null?void 0:be.riskInsureLimitVO)==null?void 0:Fe.annuityDrawTypeList)?P("",!0):(y(),C(f,{key:7,modelValue:t(i).formInfo.annuityDrawDate,"onUpdate:modelValue":a[14]||(a[14]=d=>t(i).formInfo.annuityDrawDate=d),label:"\u9886\u53D6\u65F6\u95F4",name:"annuityDrawDate",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u9886\u53D6\u65F6\u95F4"}]},{input:F(()=>{var d;return[h(V,{modelValue:t(i).formInfo.annuityDrawDate,"onUpdate:modelValue":a[13]||(a[13]=b=>t(i).formInfo.annuityDrawDate=b),options:L(t(Se),((d=o.originData.riskInsureLimitVO)==null?void 0:d.annuityDrawTypeList)||[])},null,8,["modelValue","options"])]}),_:1},8,["modelValue"])),I((he=(Le=o.originData)==null?void 0:Le.riskInsureLimitVO)==null?void 0:he.annuityDrawFrequencyList)?P("",!0):(y(),C(f,{key:8,modelValue:t(i).formInfo.annuityDrawType,"onUpdate:modelValue":a[16]||(a[16]=d=>t(i).formInfo.annuityDrawType=d),label:"\u9886\u53D6\u65B9\u5F0F",name:"annuityDrawType",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u9886\u53D6\u65B9\u5F0F"}]},{input:F(()=>{var d;return[h(V,{modelValue:t(i).formInfo.annuityDrawType,"onUpdate:modelValue":a[15]||(a[15]=b=>t(i).formInfo.annuityDrawType=b),options:L(t(Ye),((d=o.originData.riskInsureLimitVO)==null?void 0:d.annuityDrawFrequencyList)||[])},null,8,["modelValue","options"])]}),_:1},8,["modelValue"])),(y(!0),B(X,null,z(o.originData.riskLiabilityInfoVOList||[],(d,b)=>(y(),B("div",{key:b},[d.optionalFlag===1?(y(),C(f,{key:0,modelValue:t(i).formInfo.liabilityVOList[b].liabilityAttributeValue,"onUpdate:modelValue":_=>t(i).formInfo.liabilityVOList[b].liabilityAttributeValue=_,label:d.liabilityName,name:"liabilityAttributeValue",rules:[{required:d.liabilityAttributeValue,message:`\u8BF7\u9009\u62E9${d.liabilityName}`}]},{input:F(()=>{var _,T;return[O("div",null,[I(d.liabilityAttributeValueList)?(y(),B("span",dt,"50\u4E07")):(y(),C(V,{key:1,modelValue:t(i).formInfo.liabilityVOList[b].liabilityAttributeValue,"onUpdate:modelValue":q=>t(i).formInfo.liabilityVOList[b].liabilityAttributeValue=q,options:L(t(Ce),(T=(_=o.originData.riskLiabilityInfoVOList)==null?void 0:_[b])==null?void 0:T.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]}),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])):(y(),C(f,{key:1,modelValue:t(i).formInfo.liabilityVOList[b].liabilityAttributeValue,"onUpdate:modelValue":_=>t(i).formInfo.liabilityVOList[b].liabilityAttributeValue=_,label:d.liabilityName,name:"liabilityAttributeValue"},{input:F(()=>{var _,T;return[O("div",null,[I(d.liabilityAttributeValueList)?(y(),C(V,{key:0,modelValue:t(i).formInfo.liabilityVOList[b].liabilityAttributeValue,"onUpdate:modelValue":q=>t(i).formInfo.liabilityVOList[b].liabilityAttributeValue=q,options:t(Ge)},null,8,["modelValue","onUpdate:modelValue","options"])):(y(),C(V,{key:1,modelValue:t(i).formInfo.liabilityVOList[b].liabilityAttributeValue,"onUpdate:modelValue":q=>t(i).formInfo.liabilityVOList[b].liabilityAttributeValue=q,options:L(t(Ce),(T=(_=o.originData.riskLiabilityInfoVOList)==null?void 0:_[b])==null?void 0:T.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]}),_:2},1032,["modelValue","onUpdate:modelValue","label"]))]))),128)),((Ee=o.originData)==null?void 0:Ee.relationDesc)?(y(),B("div",mt,[h(N,{title:"\u8D23\u4EFB\u6295\u4FDD\u8BF4\u660E"},{default:F(()=>[O("div",null,w(o.originData.relationDesc),1)]),_:1})])):P("",!0)])}}});var Re=Y(ct,[["__scopeId","data-v-29adc12a"]]);const ft=o=>(Pe("data-v-1f13cbe8"),o=o(),Oe(),o),pt={class:"com-risk-list-wrapper"},yt=ft(()=>O("div",{class:"popup-title"},"\u9009\u62E9\u9644\u52A0\u9669",-1)),Dt={class:"risk-list"},gt={class:"cell-title"},Vt={class:"title"},kt={class:"footer-bar"},It=Be("\u786E\u8BA4"),vt=M({props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(o,{emit:n}){const A=o,E=U([]),v=U([]),i=U([...A.disabled]),I=S({show:A.show,currentChecked:[...A.modelValue]}),L=(c,m)=>{if(!A.collocationList.length){if(m){I.currentChecked=[];return}I.currentChecked.push(c);return}let g=I.currentChecked,s=i.value;m?(A.collocationList.forEach(e=>{c===e.riskId&&(e.collocationType===2?g=g.filter(a=>a!==e.collocationRiskId||a!==c):e.collocationType===3?(g=g.filter(a=>a!==c),s=s.filter(a=>a!==e.collocationRiskId)):g=g.filter(a=>a!==c))}),I.currentChecked=g,i.value=s):(A.collocationList.forEach(e=>{c===e.riskId&&(m||(e.collocationType===2?g.push(e.collocationRiskId):e.collocationType===3&&s.push(e.collocationRiskId),g.push(c)))}),I.currentChecked.push(...g),i.value=s)},D=c=>{var g,s,e;if(i.value.includes(c))return;const m=I.currentChecked.includes(c);L(c,m),(e=(s=(g=E==null?void 0:E.value)==null?void 0:g[c])==null?void 0:s.toggle)==null||e.call(s)},k=()=>{n("close")},p=()=>{const c=A.riskList.filter(m=>I.currentChecked.includes(m.id));n("update:modelValue",[...new Set(v.value)]),n("finished",c,i.value),n("close")};return we(()=>{E.value=[]}),x(()=>I.currentChecked,c=>{v.value=c},{deep:!0,immediate:!0}),x(()=>A.modelValue,c=>{v.value=c||[],i.value.push(...c||[])},{deep:!0,immediate:!0}),(c,m)=>{const g=R("van-checkbox"),s=R("VanCell"),e=R("van-cell-group"),a=R("van-checkbox-group"),l=R("VanButton"),r=R("VanPopup");return y(),B("div",pt,[h(r,{show:t(I).show,"onUpdate:show":m[1]||(m[1]=u=>t(I).show=u),title:"\u9009\u62E9\u9644\u52A0\u9669","show-footer":"",round:"",position:"bottom",closeable:"",onClose:k},{default:F(()=>[yt,O("div",Dt,[h(a,{modelValue:v.value,"onUpdate:modelValue":m[0]||(m[0]=u=>v.value=u)},{default:F(()=>[h(e,{inset:""},{default:F(()=>[(y(!0),B(X,null,z(o.riskList,u=>(y(),C(s,{key:u.id,title:u.riskName,disabled:i.value.includes(u.id),onClick:f=>D(u.id)},{"right-icon":F(()=>[h(g,{ref_for:!0,ref:f=>E.value[u.id]=f,shape:"square",disabled:i.value.includes(u.id),name:u.id,onClick:Ue(f=>D(u.id),["stop"])},null,8,["disabled","name","onClick"])]),title:F(()=>[O("div",gt,[O("div",Vt,w(u.riskName),1)])]),_:2},1032,["title","disabled","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])]),O("div",kt,[h(l,{type:"primary",disabled:!t(I).currentChecked.length,block:"",onClick:p},{default:F(()=>[It]),_:1},8,["disabled"])])]),_:1},8,["show"])])}}});var bt=Y(vt,[["__scopeId","data-v-1f13cbe8"]]);const Ft={class:"risk-list-wrapper"},Lt={key:1,class:"add-rider-risk"},ht={class:"left-part"},Et=Be("+ \u9644\u52A0\u9669"),Ct=M({props:{riskInfo:{default:()=>({})},originData:{default:()=>[]},pickFactor:{type:Function,default:()=>{}},enums:{default:()=>{}}},setup(o){var D;const n=o,A=W("source")||"",[E,v]=H(!1);U(null),U(null);const i=S({mainRiskInfo:n.riskInfo,riderRiskInfo:((D=n.riskInfo)==null?void 0:D.riderRiskVOList)||[],requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[]}),I=(k,p)=>{i.requiredRiderRiskData=i.requiredRiderRiskData.concat(k),i.disabledList=p},L=k=>{qe.confirm({message:"\u786E\u5B9A\u8981\u5220\u9664\u9644\u52A0\u9669\u4E48\uFF1F"}).then(()=>{var c;const p=[k];(((c=i.mainRiskData)==null?void 0:c.collocationVOList)||[]).forEach(m=>{k===m.riskId&&(m.collocationType===2||m.collocationType===3)&&p.push(m.collocationRiskId)});debugger;i.checkedList=i.checkedList.filter(m=>!p.includes(m)),i.requiredRiderRiskData=i.requiredRiderRiskData.filter(m=>!p.includes(m.id)),i.disabledList=i.disabledList.filter(m=>!p.includes(m)),Object.assign(i.riderRiskInfo,{[k]:void 0})}).catch(()=>{})};return _e(()=>{i.requiredRiderRiskData}),x(()=>i.requiredRiderRiskData,k=>{const p=[i.mainRiskData,...k];let c=[],m=[];const g=[];p.forEach((s,e)=>{var l,r,u;const a=((l=s==null?void 0:s.riskCalcMethodInfoVO)==null?void 0:l.riskFactorRelationList)||[];c=c.concat(a.filter(f=>f.factorObject==="insured").map(f=>f.factorCode)),m=m.concat(a.filter(f=>f.factorObject==="holder").map(f=>f.factorCode)),g.push((r=s==null?void 0:s.riskInsureLimitVO)==null?void 0:r.minHolderAge,(u=s==null?void 0:s.riskInsureLimitVO)==null?void 0:u.maxHolderAge)}),(k||[]).forEach(s=>{var a;const e={riskType:s.riskType,riskId:s.id,riskCode:s.riskCode,riskName:s.riskName,mainRiskCode:i.mainRiskData.riskCode,mainRiskId:(a=i.mainRiskData)==null?void 0:a.id,riskCategory:s.riskCategory,liabilityVOList:(s.riskLiabilityInfoVOList||[]).map(l=>({liabilityAttributeCode:l.liabilityAttributeType,liabilityCode:l.liabilityCode,liabilityId:l.id,liabilityRateType:l.liabilityRateType}))};Object.assign(i.riderRiskInfo,{[s.id]:e})}),n.pickFactor({insuredFactorList:[...new Set(c)],holderFactorList:[...new Set(m)],ageRange:g})},{deep:!0,immediate:!0}),x(()=>n.originData,k=>{(k||[]).forEach(p=>{p.riskType===1?(i.mainRiskData=p,i.requiredRiderRiskData=p.requiredRiderRiskVOList||[],i.riderRiskList=p.optionalRiderRiskVOList):i.riderRiskList.push(p)})},{deep:!0,immediate:!0}),(k,p)=>{var m,g,s;const c=R("ProCheckButton");return y(),B("div",Ft,[t(i).mainRiskData?(y(),C(Re,{key:0,enums:o.enums,"form-info":t(i).mainRiskInfo,"origin-data":t(i).mainRiskData},null,8,["enums","form-info","origin-data"])):P("",!0),(y(!0),B(X,null,z(t(i).requiredRiderRiskData,(e,a)=>(y(),C(Re,{key:e.id,"form-info":t(i).riderRiskInfo[e.id],index:a,enums:o.enums,"main-risk-data":t(i).mainRiskData,"main-risk-info":t(i).mainRiskInfo,"origin-data":e,"remove-risk":L,"remove-risk-list":t(i).checkedList},null,8,["form-info","index","enums","main-risk-data","main-risk-info","origin-data","remove-risk-list"]))),128)),t(A)!=="proposal"&&((m=t(i).riderRiskList)==null?void 0:m.length)-((g=t(i).checkedList)==null?void 0:g.length)?(y(),B("div",Lt,[O("span",ht,w(`\u5171\u6709${t(i).riderRiskList.length-t(i).checkedList.length}\u6B3E\u9644\u52A0\u9669\u53EF\u4EE5\u6DFB\u52A0`),1),h(c,{activated:"",onClick:p[0]||(p[0]=e=>t(v)(!0))},{default:F(()=>[Et]),_:1})])):P("",!0),t(E)?(y(),C(bt,{key:2,modelValue:t(i).checkedList,"onUpdate:modelValue":p[1]||(p[1]=e=>t(i).checkedList=e),show:t(E),disabled:t(i).disabledList,"risk-list":t(i).riderRiskList,"collocation-list":((s=t(i).mainRiskData)==null?void 0:s.collocationVOList)||[],onFinished:I,onClose:p[2]||(p[2]=e=>t(v)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):P("",!0)])}}});var Tt=Y(Ct,[["__scopeId","data-v-11798776"]]);const wt=(o={})=>xe.post("/api/app/insure/product/insureProductDetail",o),Ut=o=>xe.post("/api/app/insure/insurance/premiumCalc",o);export{Ot as I,xt as P,Tt as R,_t as a,bt as b,wt as i,Ut as p,Bt as u};
