var Xe=Object.defineProperty,Ze=Object.defineProperties;var Ke=Object.getOwnPropertyDescriptors;var Ue=Object.getOwnPropertySymbols;var et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var we=(r,u,v)=>u in r?Xe(r,u,{enumerable:!0,configurable:!0,writable:!0,value:v}):r[u]=v,J=(r,u)=>{for(var v in u||(u={}))et.call(u,v)&&we(r,v,u[v]);if(Ue)for(var v of Ue(u))tt.call(u,v)&&we(r,v,u[v]);return r},te=(r,u)=>Ze(r,Ke(u));import{g as G,L as z,o as ae,a0 as M,r as A,k as V,m as B,n as b,j as D,y as h,z as e,a1 as Je,a2 as ze,a3 as re,C as q,x as j,d as ue,h as E,s as C,I as N,a4 as at,a5 as it,F as ie,E as oe,a6 as ot,a7 as ut,B as Q,D as nt,J as lt,Q as rt,a8 as st,T as dt}from"./vendor-6cf508dc.js";import{P as w,a as ct}from"./index-59433a47.js";import{b as se,S as de,_ as W,P as ne}from"./index-bee77c7f.js";const mt=[{label:"\u7537",value:"1"},{label:"\u5973",value:"2"}],ft=[{label:"\u6709",value:"1"},{label:"\u65E0",value:"2"}],pt=[{value:1,label:"\u7B2C5\u4E2A\u4FDD\u5355\u5468\u5E74\u65E5"},{value:2,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8455\u5468\u5C81"},{value:3,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8460\u5468\u5C81"},{value:4,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8465\u5468\u5C81"},{value:5,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8470\u5468\u5C81"},{value:6,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8475\u5468\u5C81"}],yt=[{value:1,label:"\u5E74\u9886"},{value:2,label:"\u6708\u9886"}],le=[{label:"\u8DB8\u4EA4",value:"1"},{label:"\u5E74\u4EA4",value:"2"},{label:"\u534A\u5E74\u4EA4",value:"3"},{label:"\u5B63\u4EA4",value:"4"},{label:"\u6708\u4EA4",value:"5"}],Ne=[{label:"\u8DB8\u4EA4",value:"single"},{label:"1\u5E74\u4EA4",value:"year_1"},{label:"5\u5E74\u4EA4",value:"year_5"},{label:"10\u5E74\u4EA4",value:"year_10"},{label:"15\u5E74\u4EA4",value:"year_15"},{label:"20\u5E74\u4EA4",value:"year_20"},{label:"25\u5E74\u4EA4",value:"year_25"},{label:"30\u5E74\u4EA4",value:"year_30"},{label:"35\u5E74\u4EA4",value:"year_35"}],Me=[{label:"7\u5929",value:"day_7"},{label:"14\u5929",value:"day_14"},{label:"30\u5929",value:"day_30"},{label:"1\u5E74",value:"year_1"},{label:"3\u5E74",value:"year_3"},{label:"5\u5E74",value:"year_5"},{label:"10\u5E74",value:"year_10"},{label:"15\u5E74",value:"year_15"},{label:"20\u5E74",value:"year_20"},{label:"25\u5E74",value:"year_25"},{label:"30\u5E74",value:"year_30"},{label:"35\u5E74",value:"year_35"},{label:"\u7EC8\u8EAB",value:"to_life"}],Vt=[{label:"\u540C\u4E3B\u9669\u671F\u95F4\u51CF1",value:"3"},{label:"\u65E0\u9650\u5236",value:"2"}],Se=[{label:"\u8FD4\u4FDD\u989D",value:"1"},{label:"\u8FD4\u4FDD\u8D39",value:"2"}],vt=[{label:"\u6295\u4FDD",value:"0"},{label:"\u4E0D\u6295\u4FDD",value:"-1"}],kt=(r={})=>se.post("/api/gateway/system/dict/v2/queryDictInfo",r);new de({source:"sessionStorage"});const je=new de({source:"localStorage"});new de({source:"cookie"});const Dt=r=>(Je("data-v-5a8b43dd"),r=r(),ze(),r),gt={class:"com-occupational-wrapper"},bt=Dt(()=>h("div",{class:"popup-title"},"\u9009\u62E9\u804C\u4E1A",-1)),It={class:"popup-content"},Ft=G({props:{modelValue:{type:Array,required:!0,default:()=>[]},insuredCode:{type:String,required:!0,default:""},show:{type:Boolean,required:!0,default:!1}},emits:["finish","close","update:modelValue"],setup(r,{emit:u}){const v=r,k=z({show:v.show,options:[],currentValue:""}),t=()=>{u("close")},_=({value:f,selectedOptions:l})=>{const F=(l||[]).map(c=>c.value).join("/");u("update:modelValue",f),u("finish",F),t()},g=f=>{const l=f,F=c=>{c.forEach(I=>{const o=I;o.children.length?F(o.children):o.children=null})};return F(l),l},P=()=>{var F,c;const f=`${(c=(F=v.insurerCode)==null?void 0:F.toLocaleUpperCase)==null?void 0:c.call(F)}_OCCUPATION`,l=je.get("occupational")||{};if(l[f]){k.options=l[f];return}kt({dictCodeList:[f]}).then(({code:I,data:o})=>{var i;if(I==="10000"){const a=g(((i=o==null?void 0:o[0])==null?void 0:i.dictItemList)||[]);k.options=a,l[f]=a,je.set("occupational",l)}})};return ae(()=>{P()}),M(()=>v.modelValue,f=>{},{deep:!0,immediate:!0}),(f,l)=>{const F=A("van-cascader"),c=A("VanPopup");return V(),B("div",gt,[b(c,{show:e(k).show,"onUpdate:show":l[1]||(l[1]=I=>e(k).show=I),"show-footer":"",position:"bottom",closeable:"",onClose:t},{default:D(()=>[bt,h("div",It,[b(F,{modelValue:e(k).currentValue,"onUpdate:modelValue":l[0]||(l[0]=I=>e(k).currentValue=I),title:"\u8BF7\u9009\u62E9\u804C\u4E1A","show-header":!1,placeholder:"\u8BF7\u9009\u62E9",options:e(k).options,"active-color":"#0d6efe","field-names":{text:"value",value:"code",children:"children"},onFinish:_},null,8,["modelValue","options"])])]),_:1},8,["show"])])}}});var _t=W(Ft,[["__scopeId","data-v-5a8b43dd"]]);const Lt={class:"com-personal-info-wrapper"},Et={key:0,class:"placeholder"},Ct={key:1},ht=G({props:{formInfo:{type:Object,required:!0,default:()=>{}},insuredCode:{type:String,required:!0,default:""},factorList:{type:Array,required:!0,default:()=>[]},ageRange:{type:Array,required:!0,default:()=>[]}},setup(r,{expose:u}){const v=r,[k,t]=re(),[_,g]=re(),P=q(),f=z({formInfo:v==null?void 0:v.formInfo,occupationalText:""}),l=i=>{f.occupationalText=i},F=()=>{g(!1)},c=()=>new Promise((i,a)=>{P==null||P.value.validate().then(()=>{i("")},()=>{a()})}),I=i=>{const a=i||[];for(let n=0;n<a.length;n++)for(let s=n+1;s<a.length;s++){const d=a[n].split("_"),p=a[s].split("_"),m=a[n];d[0]===p[0]?d>p&&(a[n]=a[s],a[s]=m):d[0]==="age"&&(a[n]=a[s],a[s]=m)}return a},o=j(()=>{const i=I(v==null?void 0:v.ageRange),a=(m="")=>{const O=+m.split("_")[1],T=m.split("_")[0];return[O,T]},n=a(i[0]),s=a(i[i.length-1]),d=ue().subtract(n[0],n[1]==="age"?"year":"day").format("YYYY-MM-DD"),p=ue().subtract(s[0],s[1]==="age"?"year":"day").format("YYYY-MM-DD");return{minAge:new Date(p),maxAge:new Date(d)}});return u({validateForm:c}),(i,a)=>{const n=A("VanField"),s=A("VanForm"),d=A("van-datetime-picker"),p=A("van-popup");return V(),B("div",Lt,[b(s,{ref_key:"formRef",ref:P,"input-align":"right","error-message-align":"right"},{default:D(()=>[r.factorList.includes("APPLICANT.AGE")||r.factorList.includes("AGE")||r.factorList.includes("DAY")||r.factorList.includes("APPLICANT.DAY")?(V(),E(n,{key:0,modelValue:e(f).formInfo.birthday,"onUpdate:modelValue":a[0]||(a[0]=m=>e(f).formInfo.birthday=m),rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u51FA\u751F\u65E5\u671F"}],name:"birth",label:"\u51FA\u751F\u65E5\u671F",class:"isLink","is-link":"",placeholder:"\u8BF7\u9009\u62E9",onClick:a[1]||(a[1]=m=>e(t)(!0))},null,8,["modelValue"])):C("",!0),r.factorList.includes("APPLICANT.GENDER")||r.factorList.includes("GENDER")?(V(),E(n,{key:1,modelValue:e(f).formInfo.gender,"onUpdate:modelValue":a[3]||(a[3]=m=>e(f).formInfo.gender=m),name:"gender",label:"\u6027\u522B",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6027\u522B"}]},{input:D(()=>[b(w,{modelValue:e(f).formInfo.gender,"onUpdate:modelValue":a[2]||(a[2]=m=>e(f).formInfo.gender=m),options:e(mt)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):C("",!0),r.factorList.includes("SOCIAL_INS")?(V(),E(n,{key:2,modelValue:e(f).formInfo.socialSecurity,"onUpdate:modelValue":a[5]||(a[5]=m=>e(f).formInfo.socialSecurity=m),name:"socialSecurity",label:"\u793E\u4FDD",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u793E\u4FDD"}]},{input:D(()=>[b(w,{modelValue:e(f).formInfo.socialSecurity,"onUpdate:modelValue":a[4]||(a[4]=m=>e(f).formInfo.socialSecurity=m),options:e(ft)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):C("",!0),r.factorList.includes("OCCUPATION_CATEGORY")?(V(),E(n,{key:3,modelValue:e(f).formInfo.occupationalClass,"onUpdate:modelValue":a[6]||(a[6]=m=>e(f).formInfo.occupationalClass=m),rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u804C\u4E1A\u7C7B\u578B"}],name:"occupationalClass",label:"\u804C\u4E1A\u7C7B\u578B","is-link":"",placeholder:"\u8BF7\u9009\u62E9",onClick:a[7]||(a[7]=m=>e(g)(!0))},{input:D(()=>[e(f).occupationalText?(V(),B("div",Ct,N(e(f).occupationalText),1)):(V(),B("span",Et,"\u8BF7\u9009\u62E9"))]),_:1},8,["modelValue"])):C("",!0)]),_:1},512),b(p,{show:e(k),"onUpdate:show":a[10]||(a[10]=m=>at(k)?k.value=m:null),position:"bottom"},{default:D(()=>[b(d,{type:"date","min-date":e(o).minAge,"max-date":e(o).maxAge,onConfirm:a[8]||(a[8]=m=>{e(f).formInfo.birthday=e(ue)(m).format("YYYY-MM-DD"),e(t)(!1)}),onCancel:a[9]||(a[9]=m=>e(t)(!1))},null,8,["min-date","max-date"])]),_:1},8,["show"]),e(_)?(V(),E(_t,{key:0,modelValue:e(f).formInfo.occupationalClass,"onUpdate:modelValue":a[11]||(a[11]=m=>e(f).formInfo.occupationalClass=m),show:e(_),"insured-code":"insuredCode",onFinish:l,onClose:F},null,8,["modelValue","show"])):C("",!0)])}}});var Ge=W(ht,[["__scopeId","data-v-e536a7be"]]);const At={class:"com-risk-card-wrapper part-card"},Ot={class:"custom-field"},Rt={class:"field-tip"},Bt={class:"custom-field"},Pt={class:"field-tip"},Tt={class:"custom-field"},xt={class:"field-tip"},qt={key:0},$t={key:9,class:"liab-desc"},Yt=G({props:{originData:{type:Object,required:!0,default:()=>{}},formInfo:{type:Object,required:!0,default:()=>{}},mainRiskData:{type:Object,default:()=>{}},mainRiskInfo:{type:Object,required:!1,default:()=>{}},index:{type:[Number,String],default:0,required:!0},removeRisk:{type:Function,default:()=>{}},removeRiskList:{type:Array,default:()=>[]}},setup(r){const u=r,v=it("premium")||{},k=q({paymentYear:{disabled:!1,prevent:!1},coverageYear:{disabled:!1,prevent:!1},paymentFrequency:{disabled:!1,prevent:!1}}),t=z({formInfo:u.formInfo}),_=o=>typeof o!="boolean"&&!o||Array.isArray(o)&&!o.length?!0:{}.toString.call(o)==="object Object"?Object.keys(o).length:!1,g=(o,i)=>{let a=i;return Array.isArray(i)||(a=[`${a}`]),(o||[]).filter(n=>a.includes(`${n.value}`)||a.includes(n.value))},P=j(()=>{var o,i,a,n,s,d;return((o=u.originData)==null?void 0:o.riskType)===1?g(Me,(a=(i=u==null?void 0:u.originData)==null?void 0:i.riskInsureLimitVO)==null?void 0:a.insurancePeriodValueList):((n=u.originData)==null?void 0:n.periodType)===2?g([{value:"year_1",label:"1\u5E74"}],["year_1"]):g(Me,(d=(s=u==null?void 0:u.mainRiskData)==null?void 0:s.riskInsureLimitVO)==null?void 0:d.insurancePeriodValueList)}),f=j(()=>{var o,i,a,n,s,d,p,m,O;return((o=u.originData)==null?void 0:o.riskType)===1?g(Ne,(a=(i=u==null?void 0:u.originData)==null?void 0:i.riskInsureLimitVO)==null?void 0:a.paymentPeriodValueList):((n=u.originData)==null?void 0:n.exemptFlag)===1?g(Vt,[(d=(s=u==null?void 0:u.originData)==null?void 0:s.riskInsureLimitVO)==null?void 0:d.paymentPeriodRule]):((p=u.originData)==null?void 0:p.periodType)===2?g([{value:"year_1",label:"1\u5E74\u4EA4"}],["year_1"]):g(Ne,(O=(m=u==null?void 0:u.mainRiskData)==null?void 0:m.riskInsureLimitVO)==null?void 0:O.paymentPeriodValueList)}),l=j(()=>{var o,i,a,n,s,d,p,m;return((o=u.originData)==null?void 0:o.riskType)===1?g(le,(a=(i=u==null?void 0:u.originData)==null?void 0:i.riskInsureLimitVO)==null?void 0:a.paymentFrequencyList):((n=u==null?void 0:u.originData)==null?void 0:n.paymentTypeRule)===1?g(le,(d=(s=u==null?void 0:u.mainRiskData)==null?void 0:s.riskInsureLimitVO)==null?void 0:d.paymentFrequencyList):g(le,(m=(p=u==null?void 0:u.mainRiskData)==null?void 0:p.riskInsureLimitVO)==null?void 0:m.paymentFrequencyList)}),F=j(()=>{var a,n;let o=0,i=0;return(((n=(a=u.originData)==null?void 0:a.riskCalcMethodInfoVO)==null?void 0:n.paymentMethodLimitList)||[]).forEach((s,d)=>{d===0&&(o=s.minAmount,i=s.maxAmount),o>s.minAmount&&(o=s.minAmount),i<s.maxAmount&&(i=s.maxAmount)}),t.formInfo.sumInsured=o,{min:o,max:i}}),c=j(()=>{var a,n;let o=0,i=0;return(((n=(a=u.originData)==null?void 0:a.riskCalcMethodInfoVO)==null?void 0:n.paymentMethodLimitList)||[]).forEach((s,d)=>{d===0&&(o=s.minPremium,i=s.maxPremium),o>s.minPremium&&(o=s.minPremium),i<s.maxPremium&&(i=s.maxPremium)}),t.formInfo.premium=o,{min:o,max:i}}),I=j(()=>{var a,n,s,d;const o=((n=(a=u.originData)==null?void 0:a.riskCalcMethodInfoVO)==null?void 0:n.minCopy)||1,i=(d=(s=u.originData)==null?void 0:s.riskCalcMethodInfoVO)==null?void 0:d.maxCopy;return t.formInfo.copy=o,{min:o,max:i}});return ae(()=>{var i,a;const o={riskType:u.originData.riskType,riskId:u.originData.id,riskCode:u.originData.riskCode,mainRiskCode:(i=u==null?void 0:u.mainRiskData)==null?void 0:i.riskCode,mainRiskId:(a=u==null?void 0:u.mainRiskData)==null?void 0:a.id,riskCategory:u.originData.riskCategory,liabilityVOList:(u.originData.riskLiabilityInfoVOList||[]).map(n=>({liabilityAttributeCode:n.liabilityAttributeType,liabilityCode:n.liabilityCode,liabilityId:n.id,liabilityRateType:n.liabilityRateType}))};Object.assign(t==null?void 0:t.formInfo,o)}),M(()=>u,()=>{},{deep:!0,immediate:!0}),M(()=>{var o;return(o=t.formInfo)==null?void 0:o.paymentFrequency},o=>{var i,a,n,s;[3,4].includes((a=(i=u.originData)==null?void 0:i.riskCalcMethodInfoVO)==null?void 0:a.saleMethod)&&(((s=(n=u.originData)==null?void 0:n.riskCalcMethodInfoVO)==null?void 0:s.paymentMethodLimitList)||[]).forEach(d=>{+d.paymentFrequency==+o&&Object.assign(t.formInfo,{sumInsured:d.perCopyAmount,premium:d.perCopyPremium})}),o==="1"&&t.formInfo.paymentYear!=="single"&&(t.formInfo.paymentYear="single")}),M(()=>{var o;return(o=t.formInfo)==null?void 0:o.paymentYear},o=>{o==="single"&&t.formInfo.paymentFrequency!=="1"&&(t.formInfo.paymentFrequency="1")}),M(()=>u==null?void 0:u.mainRiskInfo,o=>{var i,a,n,s,d,p;o&&u.originData.riskType===2&&(((a=(i=u.originData)==null?void 0:i.riskInsureLimitVO)==null?void 0:a.insurancePeriodRule)===1&&(o.coverageYear?k.value.coverageYear.disabled=!0:k.value.coverageYear.prevent=!0,t.formInfo.coverageYear=o.coverageYear),((s=(n=u.originData)==null?void 0:n.riskInsureLimitVO)==null?void 0:s.paymentPeriodRule)===1&&(o.paymentYear?k.value.paymentYear.disabled=!0:k.value.paymentYear.prevent=!0,t.formInfo.paymentYear=o.paymentYear),((p=(d=u.originData)==null?void 0:d.riskInsureLimitVO)==null?void 0:p.paymentTypeRule)===1&&(o.paymentFrequency?k.value.paymentFrequency.disabled=!0:k.value.paymentFrequency.prevent=!0,t.formInfo.paymentFrequency=o.paymentFrequency))},{immediate:!0,deep:!0}),(o,i)=>{var m,O,T,$,H,U,X,Z,K,x,ce,me,fe,pe,ye,Ve,ve,ke,De,ge,be,Ie,Fe,_e,Le,Ee,Ce,he,Ae,Oe,Re,Be,Pe,Te,xe,qe,$e,Ye;const a=A("ProSvg"),n=A("ProTitle"),s=A("VanStepper"),d=A("VanField"),p=A("ProExpand");return V(),B("div",At,[b(n,{"risk-type":(m=r.originData)==null?void 0:m.riskType,title:(O=r.originData)==null?void 0:O.riskName},{default:D(()=>[r.removeRiskList.includes(r.originData.id)?(V(),B("div",{key:0,class:"delete-risk",onClick:i[0]||(i[0]=y=>r.removeRisk(r.originData.id))},[b(a,{name:"delete",color:"#0d6efe"})])):C("",!0)]),_:1},8,["risk-type","title"]),(($=(T=r.originData)==null?void 0:T.riskCalcMethodInfoVO)==null?void 0:$.saleMethod)===1&&((H=r.originData)==null?void 0:H.exemptFlag)===2?(V(),E(d,{key:0,modelValue:e(t).formInfo.sumInsured,"onUpdate:modelValue":i[2]||(i[2]=y=>e(t).formInfo.sumInsured=y),label:"\u4FDD\u989D",name:"sumInsured",rules:[{required:!0,message:"\u8BF7\u586B\u5199"},{}]},{input:D(()=>{var y,L,R,Y;return[h("div",Ot,[b(s,{modelValue:e(t).formInfo.sumInsured,"onUpdate:modelValue":i[1]||(i[1]=S=>e(t).formInfo.sumInsured=S),min:e(F).min,step:((L=(y=r.originData)==null?void 0:y.riskCalcMethodInfoVO)==null?void 0:L.increaseDecreaseNum)||1,max:e(F).max},null,8,["modelValue","min","step","max"]),h("span",Rt,N(`\u91D1\u989D\u6700\u4F4E${e(F).min}\u5143\uFF0C\u4E3A${((Y=(R=r.originData)==null?void 0:R.riskCalcMethodInfoVO)==null?void 0:Y.increaseDecreaseNum)||1}\u7684\u500D\u6570`),1)])]}),_:1},8,["modelValue"])):C("",!0),((X=(U=r.originData)==null?void 0:U.riskCalcMethodInfoVO)==null?void 0:X.saleMethod)===2?(V(),E(d,{key:1,modelValue:e(t).formInfo.premium,"onUpdate:modelValue":i[4]||(i[4]=y=>e(t).formInfo.premium=y),label:"\u4FDD\u8D39",name:"premium",rules:[{required:!0,message:"\u8BF7\u586B\u5199"}]},{input:D(()=>{var y,L,R,Y;return[h("div",Bt,[b(s,{modelValue:e(t).formInfo.premium,"onUpdate:modelValue":i[3]||(i[3]=S=>e(t).formInfo.premium=S),step:((L=(y=r.originData)==null?void 0:y.riskCalcMethodInfoVO)==null?void 0:L.increaseDecreaseNum)||1,min:e(c).min,max:e(c).max},null,8,["modelValue","step","min","max"]),h("span",Pt,N(`\u91D1\u989D\u6700\u4F4E${e(c).min}\u5143\uFF0C\u4E3A${((Y=(R=r.originData)==null?void 0:R.riskCalcMethodInfoVO)==null?void 0:Y.increaseDecreaseNum)||1}\u7684\u500D\u6570`),1)])]}),_:1},8,["modelValue"])):C("",!0),((K=(Z=r.originData)==null?void 0:Z.riskCalcMethodInfoVO)==null?void 0:K.saleMethod)===3||((ce=(x=r.originData)==null?void 0:x.riskCalcMethodInfoVO)==null?void 0:ce.saleMethod)===4&&(((fe=(me=r.originData)==null?void 0:me.riskCalcMethodInfoVO)==null?void 0:fe.minCopy)||((ye=(pe=r.originData)==null?void 0:pe.riskCalcMethodInfoVO)==null?void 0:ye.maxCopy))?(V(),E(d,{key:2,modelValue:e(t).formInfo.copy,"onUpdate:modelValue":i[6]||(i[6]=y=>e(t).formInfo.copy=y),label:"\u6295\u4FDD\u4EFD\u6570",name:"copy",rules:[{required:!0,message:"\u8BF7\u586B\u5199"}]},{input:D(()=>[h("div",Tt,[b(s,{modelValue:e(t).formInfo.copy,"onUpdate:modelValue":i[5]||(i[5]=y=>e(t).formInfo.copy=y),step:1,min:e(I).min,max:e(I).max},null,8,["modelValue","min","max"]),h("span",xt,N(`${e(I).min}\u4EFD\u8D77\u8D2D\uFF0C\u6700\u591A\u8D2D\u4E70${e(I).max}\u4EFD`),1)])]),_:1},8,["modelValue"])):C("",!0),(![1,4].includes((ve=(Ve=r.originData)==null?void 0:Ve.riskCalcMethodInfoVO)==null?void 0:ve.saleMethod)||((ke=r.originData)==null?void 0:ke.exemptFlag)===1)&&((ge=e(v))==null?void 0:ge[(De=r.originData)==null?void 0:De.riskCode])?(V(),E(d,{key:3,label:"\u4FDD\u989D"},{input:D(()=>{var y,L,R;return[h("div",null,N((R=(L=e(v))==null?void 0:L[(y=r.originData)==null?void 0:y.riskCode])==null?void 0:R.amount),1)]}),_:1})):C("",!0),!_((Ie=(be=r.originData)==null?void 0:be.riskInsureLimitVO)==null?void 0:Ie.insurancePeriodValueList)||!_((_e=(Fe=r.originData)==null?void 0:Fe.riskInsureLimitVO)==null?void 0:_e.insurancePeriodRule)?(V(),E(d,{key:4,modelValue:e(t).formInfo.coverageYear,"onUpdate:modelValue":i[8]||(i[8]=y=>e(t).formInfo.coverageYear=y),label:"\u4FDD\u969C\u671F\u95F4",name:"coverageYear",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4FDD\u969C\u671F\u95F4"}]},{input:D(()=>[b(w,{modelValue:e(t).formInfo.coverageYear,"onUpdate:modelValue":i[7]||(i[7]=y=>e(t).formInfo.coverageYear=y),disabled:k.value.coverageYear.disabled,prevent:k.value.coverageYear.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4FDD\u969C\u671F\u95F4":"",options:e(P)},null,8,["modelValue","disabled","prevent","options"])]),_:1},8,["modelValue"])):C("",!0),!_((Ee=(Le=r.originData)==null?void 0:Le.riskInsureLimitVO)==null?void 0:Ee.paymentPeriodValueList)||!_((he=(Ce=r.originData)==null?void 0:Ce.riskInsureLimitVO)==null?void 0:he.paymentPeriodRule)?(V(),E(d,{key:5,modelValue:e(t).formInfo.paymentYear,"onUpdate:modelValue":i[10]||(i[10]=y=>e(t).formInfo.paymentYear=y),label:"\u4EA4\u8D39\u671F\u95F4",name:"paymentYear",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4EA4\u8D39\u671F\u95F4"}]},{input:D(()=>[b(w,{modelValue:e(t).formInfo.paymentYear,"onUpdate:modelValue":i[9]||(i[9]=y=>e(t).formInfo.paymentYear=y),disabled:k.value.paymentYear.disabled,prevent:k.value.paymentYear.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4EA4\u8D39\u671F\u95F4":"",options:e(f)},null,8,["modelValue","disabled","prevent","options"])]),_:1},8,["modelValue"])):C("",!0),!_((Oe=(Ae=r.originData)==null?void 0:Ae.riskInsureLimitVO)==null?void 0:Oe.paymentFrequencyList)||!_((Be=(Re=r.originData)==null?void 0:Re.riskInsureLimitVO)==null?void 0:Be.paymentPeriodRule)?(V(),E(d,{key:6,modelValue:e(t).formInfo.paymentFrequency,"onUpdate:modelValue":i[12]||(i[12]=y=>e(t).formInfo.paymentFrequency=y),label:"\u4EA4\u8D39\u65B9\u5F0F",name:"paymentFrequency",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4EA4\u8D39\u65B9\u5F0F"}]},{input:D(()=>[b(w,{modelValue:e(t).formInfo.paymentFrequency,"onUpdate:modelValue":i[11]||(i[11]=y=>e(t).formInfo.paymentFrequency=y),disabled:k.value.paymentFrequency.disabled,prevent:k.value.paymentFrequency.prevent?"\u8BF7\u5148\u9009\u62E9\u4E3B\u9669\u4EA4\u8D39\u65B9\u5F0F":"",options:e(l)},null,8,["modelValue","disabled","prevent","options"])]),_:1},8,["modelValue"])):C("",!0),_((Te=(Pe=r.originData)==null?void 0:Pe.riskInsureLimitVO)==null?void 0:Te.annuityDrawTypeList)?C("",!0):(V(),E(d,{key:7,modelValue:e(t).formInfo.annuityDrawDate,"onUpdate:modelValue":i[14]||(i[14]=y=>e(t).formInfo.annuityDrawDate=y),label:"\u9886\u53D6\u65F6\u95F4",name:"annuityDrawDate",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u9886\u53D6\u65F6\u95F4"}]},{input:D(()=>{var y,L;return[b(w,{modelValue:e(t).formInfo.annuityDrawDate,"onUpdate:modelValue":i[13]||(i[13]=R=>e(t).formInfo.annuityDrawDate=R),options:g(e(pt),(L=(y=r.originData)==null?void 0:y.riskInsureLimitVO)==null?void 0:L.annuityDrawTypeList)},null,8,["modelValue","options"])]}),_:1},8,["modelValue"])),_((qe=(xe=r.originData)==null?void 0:xe.riskInsureLimitVO)==null?void 0:qe.annuityDrawFrequencyList)?C("",!0):(V(),E(d,{key:8,modelValue:e(t).formInfo.annuityDrawType,"onUpdate:modelValue":i[16]||(i[16]=y=>e(t).formInfo.annuityDrawType=y),label:"\u9886\u53D6\u65B9\u5F0F",name:"annuityDrawType",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u9886\u53D6\u65B9\u5F0F"}]},{input:D(()=>{var y,L;return[b(w,{modelValue:e(t).formInfo.annuityDrawType,"onUpdate:modelValue":i[15]||(i[15]=R=>e(t).formInfo.annuityDrawType=R),options:g(e(yt),(L=(y=r.originData)==null?void 0:y.riskInsureLimitVO)==null?void 0:L.annuityDrawFrequencyList)},null,8,["modelValue","options"])]}),_:1},8,["modelValue"])),(V(!0),B(ie,null,oe((($e=r.originData)==null?void 0:$e.riskLiabilityInfoVOList)||[],(y,L)=>(V(),B("div",{key:L},[y.optionalFlag===1?(V(),E(d,{key:0,modelValue:e(t).formInfo.liabilityVOList[L].liabilityAttributeValue,"onUpdate:modelValue":R=>e(t).formInfo.liabilityVOList[L].liabilityAttributeValue=R,label:y.liabilityName,name:"liabilityAttributeValue",rules:[{required:y.liabilityAttributeValue,message:`\u8BF7\u9009\u62E9${y.liabilityName}`}]},{input:D(()=>{var R,Y,S;return[h("div",null,[_(y.liabilityAttributeValueList)?(V(),B("span",qt,"50\u4E07")):(V(),E(w,{key:1,modelValue:e(t).formInfo.liabilityVOList[L].liabilityAttributeValue,"onUpdate:modelValue":ee=>e(t).formInfo.liabilityVOList[L].liabilityAttributeValue=ee,options:g(e(Se),(S=(Y=(R=r.originData)==null?void 0:R.riskLiabilityInfoVOList)==null?void 0:Y[L])==null?void 0:S.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]}),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])):(V(),E(d,{key:1,modelValue:e(t).formInfo.liabilityVOList[L].liabilityAttributeValue,"onUpdate:modelValue":R=>e(t).formInfo.liabilityVOList[L].liabilityAttributeValue=R,label:y.liabilityName,name:"liabilityAttributeValue"},{input:D(()=>{var R,Y,S;return[h("div",null,[_(y.liabilityAttributeValueList)?(V(),E(w,{key:0,modelValue:e(t).formInfo.liabilityVOList[L].liabilityAttributeValue,"onUpdate:modelValue":ee=>e(t).formInfo.liabilityVOList[L].liabilityAttributeValue=ee,options:e(vt)},null,8,["modelValue","onUpdate:modelValue","options"])):(V(),E(w,{key:1,modelValue:e(t).formInfo.liabilityVOList[L].liabilityAttributeValue,"onUpdate:modelValue":ee=>e(t).formInfo.liabilityVOList[L].liabilityAttributeValue=ee,options:g(e(Se),(S=(Y=(R=r.originData)==null?void 0:R.riskLiabilityInfoVOList)==null?void 0:Y[L])==null?void 0:S.liabilityAttributeValueList)},null,8,["modelValue","onUpdate:modelValue","options"]))])]}),_:2},1032,["modelValue","onUpdate:modelValue","label"]))]))),128)),((Ye=r.originData)==null?void 0:Ye.relationDesc)?(V(),B("div",$t,[b(p,{title:"\u8D23\u4EFB\u6295\u4FDD\u8BF4\u660E"},{default:D(()=>{var y;return[h("div",null,N((y=r.originData)==null?void 0:y.relationDesc),1)]}),_:1})])):C("",!0)])}}});var We=W(Yt,[["__scopeId","data-v-03817c63"]]);const Qe=r=>(Je("data-v-5817f2de"),r=r(),ze(),r),Ut={class:"com-risk-list-wrapper"},wt=Qe(()=>h("div",{class:"popup-title"},"\u9009\u62E9\u9644\u52A0\u9669",-1)),Nt={class:"risk-list"},Mt={class:"cell-title"},St={class:"title"},jt=Qe(()=>h("div",{class:"title-desc"},"\u6B64\u5904\u4E3A\u9669\u79CD\u7B80\u8981\u8BF4\u660E",-1)),Gt={class:"footer-bar"},Wt=Q("\u786E\u8BA4"),Ht=G({props:{riskList:{type:Array,required:!0,default:()=>[]},show:{type:Boolean,required:!0,default:!1},collocationList:{type:Array,default:()=>[]},disabled:{type:Array,required:!0,default:()=>[]},modelValue:{type:Array,required:!0,default:()=>[]}},emits:["finished","close","update:modelValue"],setup(r,{emit:u}){const v=r,k=q([]),t=q([]),_=q(v.disabled),g=z({show:v.show,currentChecked:[]}),P=(c,I)=>{if(!v.collocationList.length){if(I){g.currentChecked=[];return}g.currentChecked.push(c);return}let o=[],i=[];I?(v.collocationList.forEach(a=>{c===a.riskId&&(a.collocationType===2?o=o.filter(n=>n!==a.collocationRiskId||n!==c):a.collocationType===3&&(o=o.filter(n=>n!==c),i=i.filter(n=>n!==a.collocationRiskId)),i=i.filter(n=>n!==c))}),g.currentChecked=o,_.value=i):(v.collocationList.forEach(a=>{c===a.riskId&&(I||(a.collocationType===2?o.push(a.collocationRiskId):a.collocationType===3&&i.push(a.collocationRiskId),o.push(c)))}),g.currentChecked.push(...o),_.value=i)},f=c=>{var o,i,a;if(_.value.includes(c))return;const I=t.value.includes(c);P(c,I),(a=(i=(o=k==null?void 0:k.value)==null?void 0:o[c])==null?void 0:i.toggle)==null||a.call(i)},l=()=>{u("close")},F=()=>{const c=v.riskList.filter(I=>g.currentChecked.includes(I.id));u("update:modelValue",t),u("finished",c),u("close")};return ot(()=>{k.value=[]}),M(()=>g.currentChecked,c=>{t.value=c},{deep:!0,immediate:!0}),M(()=>v.modelValue,c=>{t.value=c,_.value=c},{deep:!0,immediate:!0}),(c,I)=>{const o=A("van-checkbox"),i=A("VanCell"),a=A("van-cell-group"),n=A("van-checkbox-group"),s=A("VanButton"),d=A("VanPopup");return V(),B("div",Ut,[b(d,{show:e(g).show,"onUpdate:show":I[1]||(I[1]=p=>e(g).show=p),title:"\u9009\u62E9\u9644\u52A0\u9669","show-footer":"",round:"",position:"bottom",closeable:"",onClose:l},{default:D(()=>[wt,h("div",Nt,[b(n,{modelValue:t.value,"onUpdate:modelValue":I[0]||(I[0]=p=>t.value=p)},{default:D(()=>[b(a,{inset:""},{default:D(()=>[(V(!0),B(ie,null,oe(r.riskList,p=>(V(),E(i,{key:p.id,title:p.riskName,disabled:_.value.includes(p.id),onClick:m=>f(p.id)},{"right-icon":D(()=>[b(o,{ref_for:!0,ref:m=>k.value[p.id]=m,shape:"square",disabled:_.value.includes(p.id),name:p.id,onClick:ut(m=>f(p.id),["stop"])},null,8,["disabled","name","onClick"])]),title:D(()=>[h("div",Mt,[h("div",St,N(p.riskName),1),jt])]),_:2},1032,["title","disabled","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])]),h("div",Gt,[b(s,{type:"primary",disabled:!e(g).currentChecked.length,block:"",onClick:F},{default:D(()=>[Wt]),_:1},8,["disabled"])])]),_:1},8,["show"])])}}});var Jt=W(Ht,[["__scopeId","data-v-5817f2de"]]);const zt={class:"risk-list-wrapper"},Qt={key:1,class:"add-rider-risk"},Xt={class:"left-part"},Zt=Q("+ \u9644\u52A0\u9669"),Kt=G({props:{riskInfo:{type:Object,required:!0,default:()=>{}},originData:{type:Object,required:!0,default:()=>{}},pickFactor:{type:Function,required:!0,default:()=>{}}},setup(r){var P;const u=r,[v,k]=re(!1);q(null),q(null);const t=z({mainRiskInfo:u.riskInfo,riderRiskInfo:(P=u.riskInfo)==null?void 0:P.riderRiskVOList,requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[]}),_=(f,l)=>{t.requiredRiderRiskData=t.requiredRiderRiskData.concat(f)},g=f=>{nt.confirm({message:"\u786E\u5B9A\u8981\u5220\u9664\u9644\u52A0\u9669\u4E48\uFF1F"}).then(()=>{var F;const l=[f];(((F=t.mainRiskData)==null?void 0:F.collocationVOList)||[]).forEach(c=>{f===c.riskId&&c.collocationType===2&&l.push(c.collocationRiskId)}),t.checkedList=t.checkedList.filter(c=>!l.includes(c)),t.requiredRiderRiskData=t.requiredRiderRiskData.filter(c=>!l.includes(c.id)),Object.assign(t.riderRiskInfo,{[f]:void 0})}).catch(()=>{})};return ae(()=>{t.requiredRiderRiskData}),M(()=>t.requiredRiderRiskData,f=>{const l=[t.mainRiskData,...f];let F=[],c=[];const I=[];l.forEach((o,i)=>{var n,s,d;const a=((n=o==null?void 0:o.riskCalcMethodInfoVO)==null?void 0:n.riskFactorRelationList)||[];F=F.concat(a.filter(p=>p.factorObject==="insured").map(p=>p.factorCode)),c=c.concat(a.filter(p=>p.factorObject==="holder").map(p=>p.factorCode)),I.push((s=o==null?void 0:o.riskInsureLimitVO)==null?void 0:s.minHolderAge,(d=o==null?void 0:o.riskInsureLimitVO)==null?void 0:d.maxHolderAge)}),(f||[]).forEach(o=>{var a;const i={riskType:o.riskType,riskId:o.id,riskCode:o.riskCode,mainRiskCode:t.mainRiskData.riskCode,mainRiskId:(a=t.mainRiskData)==null?void 0:a.id,riskCategory:o.riskCategory,liabilityVOList:(o.riskLiabilityInfoVOList||[]).map(n=>({liabilityAttributeCode:n.liabilityAttributeType,liabilityCode:n.liabilityCode,liabilityId:n.id,liabilityRateType:n.liabilityRateType}))};Object.assign(t.riderRiskInfo,{[o.id]:i})}),u.pickFactor({insuredFactorList:[...new Set(F)],holderFactorList:[...new Set(c)],ageRange:I})},{deep:!0,immediate:!0}),M(()=>u.originData,f=>{(f||[]).forEach(l=>{l.riskType===1?(t.mainRiskData=l,t.requiredRiderRiskData=(l==null?void 0:l.requiredRiderRiskVOList)||[],t.riderRiskList=l==null?void 0:l.optionalRiderRiskVOList):t.riderRiskList.push(l)})},{deep:!0,immediate:!0}),(f,l)=>{var F,c,I,o,i;return V(),B("div",zt,[e(t).mainRiskData?(V(),E(We,{key:0,"form-info":e(t).mainRiskInfo,"origin-data":e(t).mainRiskData},null,8,["form-info","origin-data"])):C("",!0),(V(!0),B(ie,null,oe(e(t).requiredRiderRiskData,(a,n)=>(V(),E(We,{key:a.id,"form-info":e(t).riderRiskInfo[a.id],index:n,"main-risk-data":e(t).mainRiskData,"main-risk-info":e(t).mainRiskInfo,"origin-data":a,"remove-risk":g,"remove-risk-list":e(t).checkedList},null,8,["form-info","index","main-risk-data","main-risk-info","origin-data","remove-risk-list"]))),128)),((c=(F=e(t))==null?void 0:F.riderRiskList)==null?void 0:c.length)-((o=(I=e(t))==null?void 0:I.checkedList)==null?void 0:o.length)?(V(),B("div",Qt,[h("span",Xt,N(`\u5171\u6709${e(t).riderRiskList.length-e(t).checkedList.length}\u6B3E\u9644\u52A0\u9669\u53EF\u4EE5\u6DFB\u52A0`),1),b(ct,{activied:"",onClick:l[0]||(l[0]=a=>e(k)(!0))},{default:D(()=>[Zt]),_:1})])):C("",!0),e(v)?(V(),E(Jt,{key:2,modelValue:e(t).checkedList,"onUpdate:modelValue":l[1]||(l[1]=a=>e(t).checkedList=a),show:e(v),disabled:e(t).disabledList,"risk-list":e(t).riderRiskList,"collocation-list":((i=e(t).mainRiskData)==null?void 0:i.collocationVOList)||[],onFinished:_,onClose:l[2]||(l[2]=a=>e(k)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):C("",!0)])}}});var He=W(Kt,[["__scopeId","data-v-3a20d838"]]);const ea=(r={})=>se.get(`/api/product/insureProductDetail/${r==null?void 0:r.productId}`,r),ta=(r={})=>se.post("/api/insurance/premiumCalc",r);const aa=G({props:{title:{type:String,default:()=>""},active:{type:Boolean,default:!1}},setup(r){return(u,v)=>(V(),B("button",{class:lt(r.active?"active-button":"")},N(r.title),3))}});var ia=W(aa,[["__scopeId","data-v-43a1c07a"]]);const oa={key:0,class:"part-card"},ua={key:1,class:"part-card"},na={class:"risk-content"},la={key:0,class:"risk"},ra={key:1,class:"plan-risk"},sa={class:"footer-bar"},da={class:"trial-result"},ca={class:"result-num"},ma=Q(" \u5143\u8D77 "),fa={class:"trial-operate"},pa={key:0,class:"retrial-tip"},ya=Q(" \u6761\u4EF6\u66F4\u6539\u540E\uFF0C\u9700\u8981\u91CD\u65B0\u8BD5\u7B97 "),Va=Q("\u53BB\u8BD5\u7B97"),va=Q("\u7ACB\u5373\u6295\u4FDD"),ka=G({setup(r){const{id:u=118}=rt().query,v=q({personVO:{}}),k=q({insuredCode:"",personVO:{}}),t=q({}),_=q({}),g=q({}),P=q({}),f=q({});st("premium",f.value);const l=z({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,ageRange:[],collapseName:["1"]}),F=()=>{l.retrialTip=!1},c=()=>{var p;const n=JSON.parse(JSON.stringify(t.value[l.currentPlan])),s=Object.values(n.riderRiskVOList).map(m=>{const O=m;if(O.paymentYear==="3"){const T=(t.value[l.currentPlan].paymentYear||"").split("_");T[1]&&(T[1]-=1),O.paymentYear=T.join("_")}return O.liabilityVOList=(O.liabilityVOList||[]).filter(T=>!["-1"].includes(T.liabilityAttributeValue)).map(T=>{const $=T;return $.liabilityAttributeValue==="0"&&($.liabilityAttributeValue=""),$}),O});n.liabilityVOList=n.liabilityVOList.filter(m=>!["-1"].includes(m.liabilityAttributeValue)).map(m=>{const O=m;return O.liabilityAttributeValue==="0"&&(O.liabilityAttributeValue=""),O});const d={holder:{personVO:te(J({},v.value.personVO),{birthday:v.value.personVO.birthday&&`${v.value.personVO.birthday} 00:00:00`})},productCode:(p=l==null?void 0:l.riskBaseInfo)==null?void 0:p.productCode,insuredVOList:[te(J({},k.value),{personVO:te(J({},k.value.personVO),{birthday:k.value.personVO.birthday&&`${k.value.personVO.birthday} 00:00:00`}),productPlanVOList:[{planCode:l.currentPlan||"",riskVOList:[te(J({},n),{riderRiskVOList:s})]}]})]};l.retrialTip=!1,ta(J({},d)).then(({code:m,data:O})=>{if(m==="10000"){l.trialResult=O,l.canTrial=!1;const T={},$=(H=[])=>{(H||[]).forEach(U=>{T[U.riskCode]=U,U.riskPremiumDetailVOList&&$(U.riskPremiumDetailVOList)})};$(O.riskPremiumDetailVOList),Object.assign(f.value,T),console.log("riskPremiumRef",f.value)}})},I=()=>{var n,s,d,p,m;Promise.all([(s=(n=_==null?void 0:_.value)==null?void 0:n.validateForm)==null?void 0:s.call(n),(p=(d=g==null?void 0:g.value)==null?void 0:d.validateForm)==null?void 0:p.call(d),(m=P==null?void 0:P.value)==null?void 0:m.validate()]).then(()=>{c()})},o=()=>{dt("\u51C6\u5907\u6295\u4FDD")},i=()=>{ea({productId:u}).then(({code:n,data:s})=>{n==="10000"&&(l.riskBaseInfo=s==null?void 0:s.productBasicInfoVO,((s==null?void 0:s.productRelationPlanVOList)||(s==null?void 0:s.riskDetailVOList)||[]).forEach((d,p)=>{p===0&&(l.currentPlan=d.planCode||0),Object.assign(t.value,{[d.planCode||p]:{liabilityVOList:[],riderRiskVOList:{}}})}),l.riskData=(s==null?void 0:s.riskDetailVOList)||[],l.riskPlanData=(s==null?void 0:s.productRelationPlanVOList)||[])}).finally(()=>{})},a=n=>{l.holderFactor=n.holderFactorList,l.insuredFactor=n.insuredFactorList,l.ageRange=n.ageRange};return M([()=>t.value,()=>v.value,()=>k.value],n=>{n&&!l.canTrial&&(l.canTrial=!0,l.retrialTip=!0)},{deep:!0}),ae(()=>{i()}),(n,s)=>{const d=A("VanForm"),p=A("VanTab"),m=A("VanTabs"),O=A("van-collapse-item"),T=A("van-collapse"),$=A("VanButton"),H=A("ZaPageWrap");return V(),E(H,{class:"page-trial-wrapper"},{default:D(()=>{var U,X,Z,K;return[e(l).holderFactor.length?(V(),B("div",oa,[b(ne,{title:"\u6295\u4FDD\u4EBA"}),b(Ge,{ref_key:"holderRef",ref:_,"insured-code":(U=e(l).riskBaseInfo)==null?void 0:U.insuredCode,"form-info":v.value.personVO,"factor-list":e(l).holderFactor,"age-range":e(l).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):C("",!0),e(l).insuredFactor.length?(V(),B("div",ua,[b(ne,{title:"\u88AB\u4FDD\u4EBA"}),b(Ge,{ref_key:"insuredRef",ref:g,"insured-code":(X=e(l).riskBaseInfo)==null?void 0:X.insuredCode,"form-info":k.value.personVO,"factor-list":e(l).insuredFactor,"age-range":e(l).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):C("",!0),h("div",na,[b(T,{modelValue:e(l).collapseName,"onUpdate:modelValue":s[1]||(s[1]=x=>e(l).collapseName=x)},{default:D(()=>[b(O,{name:"1"},{title:D(()=>[b(ne,{title:"\u6295\u4FDD\u65B9\u6848"})]),default:D(()=>[e(l).riskData.length?(V(),B("div",la,[b(d,{ref_key:"riskFormRef",ref:P,"input-align":"right","error-message-align":"right"},{default:D(()=>[b(He,{"risk-info":t.value[0],"origin-data":e(l).riskData,"pick-factor":a},null,8,["risk-info","origin-data"])]),_:1},512)])):C("",!0),e(l).riskPlanData.length?(V(),B("div",ra,[b(d,{ref_key:"riskFormRef",ref:P,"input-align":"right","error-message-align":"right"},{default:D(()=>[b(m,{active:e(l).currentPlan,"onUpdate:active":s[0]||(s[0]=x=>e(l).currentPlan=x)},{default:D(()=>[(V(!0),B(ie,null,oe(e(l).riskPlanData,x=>(V(),E(p,{key:x.planCode,name:x.planCode,title:x.planName},{title:D(()=>[b(ia,{title:x.planName,active:e(l).currentPlan===x.planCode},null,8,["title","active"])]),default:D(()=>[x.planCode===e(l).currentPlan?(V(),E(He,{key:0,"risk-info":t.value[x.planCode],"origin-data":x.riskDetailVOList,"pick-factor":a},null,8,["risk-info","origin-data"])):C("",!0)]),_:2},1032,["name","title"]))),128))]),_:1},8,["active"])]),_:1},512)])):C("",!0)]),_:1})]),_:1},8,["modelValue"])]),h("div",sa,[h("span",da,[h("span",ca,N((e(l).retrialTip?"0":((K=(Z=e(l))==null?void 0:Z.trialResult)==null?void 0:K.premium)||"0").toLocaleString()),1),ma]),h("div",fa,[e(l).retrialTip?(V(),B("div",pa,[ya,h("span",{class:"close-icon",onClick:F},"X")])):C("",!0),e(l).canTrial?(V(),E($,{key:1,type:"primary",onClick:I},{default:D(()=>[Va]),_:1})):(V(),E($,{key:2,type:"primary",onClick:o},{default:D(()=>[va]),_:1}))])])]}),_:1})}}});var Fa=W(ka,[["__scopeId","data-v-7cb3b17e"]]);export{Fa as default};
