var Ne=Object.defineProperty,Me=Object.defineProperties;var Ye=Object.getOwnPropertyDescriptors;var Fe=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable;var Oe=(i,o,y)=>o in i?Ne(i,o,{enumerable:!0,configurable:!0,writable:!0,value:y}):i[o]=y,$=(i,o)=>{for(var y in o||(o={}))je.call(o,y)&&Oe(i,y,o[y]);if(Fe)for(var y of Fe(o))Ge.call(o,y)&&Oe(i,y,o[y]);return i},G=(i,o)=>Me(i,Ye(o));import{g as U,L as N,o as Z,$ as x,r as L,k as c,m as R,n as I,j as v,y as A,z as t,a0 as $e,a1 as Se,a2 as J,C as B,h as b,s as F,I as q,d as Ze,a3 as We,J as ze,a4 as Qe,x as S,F as W,E as z,a5 as Je,a6 as Xe,B as Q,V as He,Q as Ke,a7 as et}from"./vendor-0f9b8289.js";import{_ as M,P as T,a as tt}from"./index-0ee711e6.js";import{b as X,S as H}from"./index-5aeb9263.js";const at=[{label:"\u7537",value:"1"},{label:"\u5973",value:"2"}],ot=[{label:"\u6709",value:"1"},{label:"\u65E0",value:"2"}],it=[{value:1,label:"\u7B2C5\u4E2A\u4FDD\u5355\u5468\u5E74\u65E5"},{value:2,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8455\u5468\u5C81"},{value:3,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8460\u5468\u5C81"},{value:4,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8465\u5468\u5C81"},{value:5,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8470\u5468\u5C81"},{value:6,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8475\u5468\u5C81"}],nt=[{value:1,label:"\u5E74\u9886"},{value:2,label:"\u6708\u9886"}],Ae=[{label:"\u8DB8\u4EA4",value:"1"},{label:"\u5E74\u4EA4",value:"2"},{label:"\u534A\u5E74\u4EA4",value:"3"},{label:"\u5B63\u4EA4",value:"4"},{label:"\u6708\u4EA4",value:"5"}],Re=[{label:"\u8DB8\u4EA4",value:"single"},{label:"1\u5E74\u4EA4",value:"year_1"},{label:"5\u5E74\u4EA4",value:"year_5"},{label:"10\u5E74\u4EA4",value:"year_10"},{label:"15\u5E74\u4EA4",value:"year_15"},{label:"20\u5E74\u4EA4",value:"year_20"},{label:"25\u5E74\u4EA4",value:"year_25"},{label:"30\u5E74\u4EA4",value:"year_30"},{label:"35\u5E74\u4EA4",value:"year_35"}],Be=[{label:"7\u5929",value:"day_7"},{label:"14\u5929",value:"day_14"},{label:"30\u5929",value:"day_30"},{label:"1\u5E74",value:"year_1"},{label:"3\u5E74",value:"year_3"},{label:"5\u5E74",value:"year_5"},{label:"10\u5E74",value:"year_10"},{label:"15\u5E74",value:"year_15"},{label:"20\u5E74",value:"year_20"},{label:"25\u5E74",value:"year_25"},{label:"30\u5E74",value:"year_30"},{label:"35\u5E74",value:"year_35"},{label:"\u7EC8\u8EAB",value:"to_life"}],lt=[{label:"\u540C\u4E3B\u9669\u671F\u95F4\u51CF1",value:"3"},{label:"\u65E0\u9650\u5236",value:"2"}],we=[{label:"\u8FD4\u4FDD\u989D",value:1},{label:"\u8FD4\u4FDD\u8D39",value:2}],ut=[{label:"\u6295\u4FDD",value:"0"},{label:"\u4E0D\u6295\u4FDD",value:"-1"}],rt=(i={})=>X.post("/api/gateway/system/dict/v2/queryDictInfo",i);new H({source:"sessionStorage"});const Pe=new H({source:"localStorage"});new H({source:"cookie"});const st=i=>($e("data-v-1e1e74de"),i=i(),Se(),i),dt={class:"com-occupational-wrapper"},mt=st(()=>A("div",{class:"popup-title"},"\u9009\u62E9\u804C\u4E1A",-1)),ct={class:"popup-content"},ft=U({props:{modelValue:{type:Array,required:!0,default:()=>[]},insuredCode:{type:String,required:!0,default:""},show:{type:Boolean,required:!0,default:!1}},emits:["finish","close","update:modelValue"],setup(i,{emit:o}){const y=i,a=N({show:y.show,options:[],currentValue:""}),s=()=>{o("close")},D=({value:d,selectedOptions:r})=>{console.log(d,r);const _=(r||[]).map(V=>V.value).join("/");o("update:modelValue",d),o("finish",_),s()},E=d=>{const r=d,_=V=>{V.forEach(l=>{const e=l;e.children.length?_(e.children):e.children=null})};return _(r),r},g=()=>{var _,V;const d=`${(V=(_=y.insurerCode)==null?void 0:_.toLocaleUpperCase)==null?void 0:V.call(_)}_OCCUPATION`,r=Pe.get("occupational")||{};if(r[d]){a.options=r[d];return}rt({dictCodeList:[d]}).then(({code:l,data:e})=>{var n;if(l==="10000"){const u=E(((n=e==null?void 0:e[0])==null?void 0:n.dictItemList)||[]);a.options=u,r[d]=u,Pe.set("occupational",r)}})};return Z(()=>{g()}),x(()=>y.modelValue,d=>{},{deep:!0,immediate:!0}),(d,r)=>{const _=L("van-cascader"),V=L("VanPopup");return c(),R("div",dt,[I(V,{show:t(a).show,"onUpdate:show":r[1]||(r[1]=l=>t(a).show=l),"show-footer":"",position:"bottom",closeable:"",onClose:s},{default:v(()=>[mt,A("div",ct,[I(_,{modelValue:t(a).currentValue,"onUpdate:modelValue":r[0]||(r[0]=l=>t(a).currentValue=l),title:"\u8BF7\u9009\u62E9\u804C\u4E1A","show-header":!1,placeholder:"\u8BF7\u9009\u62E9",options:t(a).options,"active-color":"#0d6efe","field-names":{text:"value",value:"code",children:"children"},onFinish:D},null,8,["modelValue","options"])])]),_:1},8,["show"])])}}});var pt=M(ft,[["__scopeId","data-v-1e1e74de"]]);const yt={class:"com-personal-info-wrapper"},Te=U({props:{formInfo:{type:Object,required:!0,default:()=>{}},insuredCode:{type:String,required:!0,default:""},factorList:{type:Array,required:!0,default:()=>[]}},setup(i,{expose:o}){const y=i,[a,s]=J(),[D,E]=J(),g=B(),d=N({formInfo:y==null?void 0:y.formInfo,occupationalText:""}),r=l=>{d.occupationalText=l},_=()=>{E(!1)};return o({validateForm:()=>new Promise((l,e)=>{g==null||g.value.validate().then(()=>{l("")},()=>{e()})})}),(l,e)=>{const n=L("VanField"),u=L("VanForm"),m=L("van-datetime-picker"),k=L("van-popup");return c(),R("div",yt,[I(u,{ref_key:"formRef",ref:g,"input-align":"right","error-message-align":"right"},{default:v(()=>[i.factorList.includes("APPLICANT.AGE")||i.factorList.includes("AGE")?(c(),b(n,{key:0,modelValue:t(d).formInfo.birthday,"onUpdate:modelValue":e[0]||(e[0]=p=>t(d).formInfo.birthday=p),rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],name:"birth",label:"\u51FA\u751F\u65E5\u671F","is-link":"",placeholder:"\u8BF7\u9009\u62E9",onClick:e[1]||(e[1]=p=>t(s)(!0))},null,8,["modelValue"])):F("",!0),i.factorList.includes("APPLICANT.GENDER")||i.factorList.includes("GENDER")?(c(),b(n,{key:1,modelValue:t(d).formInfo.gender,"onUpdate:modelValue":e[3]||(e[3]=p=>t(d).formInfo.gender=p),name:"gender",label:"\u6027\u522B",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:v(()=>[I(T,{modelValue:t(d).formInfo.gender,"onUpdate:modelValue":e[2]||(e[2]=p=>t(d).formInfo.gender=p),options:t(at)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):F("",!0),i.factorList.includes("SOCIAL_INS")?(c(),b(n,{key:2,modelValue:t(d).formInfo.socialSecurity,"onUpdate:modelValue":e[5]||(e[5]=p=>t(d).formInfo.socialSecurity=p),name:"socialSecurity",label:"\u793E\u4FDD",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:v(()=>[I(T,{modelValue:t(d).formInfo.socialSecurity,"onUpdate:modelValue":e[4]||(e[4]=p=>t(d).formInfo.socialSecurity=p),options:t(ot)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):F("",!0),i.factorList.includes("OCCUPATION_CATEGORY")?(c(),b(n,{key:3,modelValue:t(d).formInfo.occupationalClass,"onUpdate:modelValue":e[6]||(e[6]=p=>t(d).formInfo.occupationalClass=p),rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],name:"occupationalClass",label:"\u804C\u4E1A\u7C7B\u578B","is-link":"",placeholder:"\u8BF7\u9009\u62E9",onClick:e[7]||(e[7]=p=>t(E)(!0))},{input:v(()=>[A("div",null,q(t(d).occupationalText),1)]),_:1},8,["modelValue"])):F("",!0)]),_:1},512),I(k,{show:t(a),"onUpdate:show":e[10]||(e[10]=p=>We(a)?a.value=p:null),position:"bottom"},{default:v(()=>[I(m,{type:"date","min-date":new Date("1900-01-01"),"max-date":new Date,onConfirm:e[8]||(e[8]=p=>{t(d).formInfo.birthday=t(Ze)(p).format("YYYY-MM-DD"),t(s)(!1)}),onCancel:e[9]||(e[9]=p=>t(s)(!1))},null,8,["min-date","max-date"])]),_:1},8,["show"]),t(D)?(c(),b(pt,{key:0,modelValue:t(d).formInfo.occupationalClass,"onUpdate:modelValue":e[11]||(e[11]=p=>t(d).formInfo.occupationalClass=p),show:t(D),"insured-code":"insuredCode",onFinish:r,onClose:_},null,8,["modelValue","show"])):F("",!0)])}}});const Vt={class:"risk-title"},kt={class:"left-content"},vt=U({props:{riskType:{type:Number,default:1},name:{type:String,default:()=>""}},setup(i){return(o,y)=>{const a=L("ZaSvg"),s=L("VanCell");return c(),R("div",Vt,[I(s,null,{title:v(()=>[A("div",kt,[A("div",{class:ze(i.riskType===1?"main-risk":"minor-risk")},q(i.riskType===1?"\u4E3B":"\u9644"),3),A("h4",null,q(i.name),1)]),i.riskType===2?(c(),b(a,{key:0,style:{width:"18px",height:"18px"},name:"delete",color:"var(--van-primary-color)"})):F("",!0)]),_:1})])}}});var It=M(vt,[["__scopeId","data-v-ac366f06"]]);const Dt={class:"com-risk-card-wrapper"},bt={key:0},gt={key:9,class:"liab-desc"},_t=A("div",{class:"title"},"\u8D23\u4EFB\u6295\u4FDD\u8BF4\u660E",-1),xe=U({props:{originData:{type:Object,required:!0,default:()=>{}},formInfo:{type:Object,required:!0,default:()=>{}},mainRiskData:{type:Object,default:()=>{}},mainRiskInfo:{type:Object,required:!1,default:()=>{}},index:{type:[Number,String],default:0,required:!0}},setup(i){const o=i,y=Qe("premium"),a=N({formInfo:o.formInfo}),s=l=>typeof l!="boolean"&&!l||Array.isArray(l)&&!l.length?!0:{}.toString.call(l)==="object Object"?Object.keys(l).length:!1,D=(l,e)=>{let n=e;return Array.isArray(e)||(n=[`${n}`]),(l||[]).filter(u=>n.includes(`${u.value}`)||n.includes(u.value))},E=S(()=>{var l,e,n,u,m,k;return((l=o.originData)==null?void 0:l.riskType)===1?D(Be,(n=(e=o==null?void 0:o.originData)==null?void 0:e.riskInsureLimitVO)==null?void 0:n.insurancePeriodValueList):((u=o.originData)==null?void 0:u.periodType)===2?D([{value:"year_1",label:"1\u5E74"}],["year_1"]):D(Be,(k=(m=o==null?void 0:o.mainRiskData)==null?void 0:m.riskInsureLimitVO)==null?void 0:k.insurancePeriodValueList)}),g=S(()=>{var l,e,n,u,m,k,p,C,w;return((l=o.originData)==null?void 0:l.riskType)===1?D(Re,(n=(e=o==null?void 0:o.originData)==null?void 0:e.riskInsureLimitVO)==null?void 0:n.paymentPeriodValueList):((u=o.originData)==null?void 0:u.exemptFlag)===1?D(lt,(k=(m=o==null?void 0:o.originData)==null?void 0:m.riskInsureLimitVO)==null?void 0:k.paymentPeriodRule):((p=o.originData)==null?void 0:p.periodType)===2?D([{value:"year_1",label:"1\u5E74\u4EA4"}],["year_1"]):D(Re,(w=(C=o==null?void 0:o.mainRiskData)==null?void 0:C.riskInsureLimitVO)==null?void 0:w.paymentPeriodValueList)}),d=S(()=>{var l,e,n,u,m;return((l=o.originData)==null?void 0:l.riskType)===1?D(Ae,(n=(e=o==null?void 0:o.originData)==null?void 0:e.riskInsureLimitVO)==null?void 0:n.paymentFrequencyList):D(Ae,(m=(u=o==null?void 0:o.mainRiskData)==null?void 0:u.riskInsureLimitVO)==null?void 0:m.paymentFrequencyList)}),r=S(()=>{var n,u;let l=0,e=0;return(((u=(n=o.originData)==null?void 0:n.riskCalcMethodInfoVO)==null?void 0:u.paymentMethodLimitList)||[]).forEach((m,k)=>{k===0&&(l=m.minAmount,e=m.maxAmount),l>m.minAmount&&(l=m.minAmount),e<m.maxAmount&&(e=m.maxAmount)}),a.formInfo.sumInsured=l,{min:l,max:e}}),_=S(()=>{var n,u;let l=0,e=0;return(((u=(n=o.originData)==null?void 0:n.riskCalcMethodInfoVO)==null?void 0:u.paymentMethodLimitList)||[]).forEach((m,k)=>{k===0&&(l=m.minPremium,e=m.maxPremium),l>m.minPremium&&(l=m.minPremium),e<m.maxPremium&&(e=m.maxPremium)}),a.formInfo.premium=l,{min:l,max:e}}),V=S(()=>{var n,u,m,k;const l=((u=(n=o.originData)==null?void 0:n.riskCalcMethodInfoVO)==null?void 0:u.minCopy)||1,e=(k=(m=o.originData)==null?void 0:m.riskCalcMethodInfoVO)==null?void 0:k.maxCopy;return a.formInfo.copy=l,{min:l,max:e}});return Z(()=>{var e,n;const l={riskType:o.originData.riskType,riskId:o.originData.id,riskCode:o.originData.riskCode,mainRiskCode:(e=o==null?void 0:o.mainRiskData)==null?void 0:e.riskCode,mainRiskId:(n=o==null?void 0:o.mainRiskData)==null?void 0:n.id,riskCategory:o.originData.riskCategory,liabilityVOList:(o.originData.riskLiabilityInfoVOList||[]).map(u=>({liabilityAttributeCode:u.liabilityAttribute,liabilityAttributeValue:u.liabilityAttributeValue,liabilityCode:u.liabilityCode,liabilityId:u.id,liabilityRateType:u.liabilityRateType}))};Object.assign(a==null?void 0:a.formInfo,l)}),x(()=>{var l;return(l=a.formInfo)==null?void 0:l.paymentFrequency},l=>{var e,n,u,m;[3,4].includes((n=(e=o.originData)==null?void 0:e.riskCalcMethodInfoVO)==null?void 0:n.saleMethod)&&(((m=(u=o.originData)==null?void 0:u.riskCalcMethodInfoVO)==null?void 0:m.paymentMethodLimitList)||[]).forEach(k=>{+k.paymentFrequency==+l&&Object.assign(a.formInfo,{sumInsured:k.perCopyAmount,premium:k.perCopyPremium})})}),x(()=>o.mainRiskInfo,l=>{},{immediate:!0,deep:!0}),(l,e)=>{var m,k,p,C,w,Y,j,P,K,ee,te,ae,oe,ie,ne,le,ue,re,se,de,me,ce,fe,pe,ye,Ve,ke,ve,Ie,De,be,ge,_e,Ce,Ee,he,Le;const n=L("VanStepper"),u=L("VanField");return c(),R("div",Dt,[I(It,{"risk-type":(m=i.originData)==null?void 0:m.riskType,name:(k=i.originData)==null?void 0:k.riskName},null,8,["risk-type","name"]),((C=(p=i.originData)==null?void 0:p.riskCalcMethodInfoVO)==null?void 0:C.saleMethod)===1?(c(),b(u,{key:0,modelValue:t(a).formInfo.sumInsured,"onUpdate:modelValue":e[1]||(e[1]=f=>t(a).formInfo.sumInsured=f),label:"\u4FDD\u989D",name:"sumInsured",rules:[{required:!0,message:"\u8BF7\u586B\u5199"}]},{input:v(()=>{var f,h;return[I(n,{modelValue:t(a).formInfo.sumInsured,"onUpdate:modelValue":e[0]||(e[0]=O=>t(a).formInfo.sumInsured=O),min:t(r).min,step:((h=(f=i.originData)==null?void 0:f.riskCalcMethodInfoVO)==null?void 0:h.increaseDecreaseNum)||1,max:t(r).max},null,8,["modelValue","min","step","max"])]}),_:1},8,["modelValue"])):F("",!0),((Y=(w=i.originData)==null?void 0:w.riskCalcMethodInfoVO)==null?void 0:Y.saleMethod)===2?(c(),b(u,{key:1,modelValue:t(a).formInfo.premium,"onUpdate:modelValue":e[3]||(e[3]=f=>t(a).formInfo.premium=f),label:"\u4FDD\u8D39",name:"premium",rules:[{required:!0,message:"\u8BF7\u586B\u5199"}]},{input:v(()=>{var f,h;return[I(n,{modelValue:t(a).formInfo.premium,"onUpdate:modelValue":e[2]||(e[2]=O=>t(a).formInfo.premium=O),step:((h=(f=i.originData)==null?void 0:f.riskCalcMethodInfoVO)==null?void 0:h.increaseDecreaseNum)||1,min:t(_).min,max:t(_).max},null,8,["modelValue","step","min","max"])]}),_:1},8,["modelValue"])):F("",!0),((P=(j=i.originData)==null?void 0:j.riskCalcMethodInfoVO)==null?void 0:P.saleMethod)===3||((ee=(K=i.originData)==null?void 0:K.riskCalcMethodInfoVO)==null?void 0:ee.saleMethod)===4&&(((ae=(te=i.originData)==null?void 0:te.riskCalcMethodInfoVO)==null?void 0:ae.minCopy)||((ie=(oe=i.originData)==null?void 0:oe.riskCalcMethodInfoVO)==null?void 0:ie.maxCopy))?(c(),b(u,{key:2,modelValue:t(a).formInfo.copy,"onUpdate:modelValue":e[5]||(e[5]=f=>t(a).formInfo.copy=f),label:"\u6295\u4FDD\u4EFD\u6570",name:"copy",rules:[{required:!0,message:"\u8BF7\u586B\u5199"}]},{input:v(()=>[I(n,{modelValue:t(a).formInfo.copy,"onUpdate:modelValue":e[4]||(e[4]=f=>t(a).formInfo.copy=f),step:1,min:t(V).min,max:t(V).max},null,8,["modelValue","min","max"])]),_:1},8,["modelValue"])):F("",!0),((le=(ne=i.originData)==null?void 0:ne.riskCalcMethodInfoVO)==null?void 0:le.saleMethod)!==1&&((re=t(y))==null?void 0:re[(ue=i.originData)==null?void 0:ue.riskCode])?(c(),b(u,{key:3,label:"\u4FDD\u989D"},{input:v(()=>{var f,h,O;return[A("div",null,q((O=(h=t(y))==null?void 0:h[(f=i.originData)==null?void 0:f.riskCode])==null?void 0:O.amount),1)]}),_:1})):F("",!0),!s((de=(se=i.originData)==null?void 0:se.riskInsureLimitVO)==null?void 0:de.insurancePeriodValueList)||!s((ce=(me=i.originData)==null?void 0:me.riskInsureLimitVO)==null?void 0:ce.insurancePeriodRule)?(c(),b(u,{key:4,modelValue:t(a).formInfo.coverageYear,"onUpdate:modelValue":e[7]||(e[7]=f=>t(a).formInfo.coverageYear=f),label:"\u4FDD\u969C\u671F\u95F4",name:"coverageYear",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:v(()=>[I(T,{modelValue:t(a).formInfo.coverageYear,"onUpdate:modelValue":e[6]||(e[6]=f=>t(a).formInfo.coverageYear=f),options:t(E)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):F("",!0),!s((pe=(fe=i.originData)==null?void 0:fe.riskInsureLimitVO)==null?void 0:pe.paymentPeriodValueList)||!s((Ve=(ye=i.originData)==null?void 0:ye.riskInsureLimitVO)==null?void 0:Ve.paymentPeriodRule)?(c(),b(u,{key:5,modelValue:t(a).formInfo.paymentYear,"onUpdate:modelValue":e[9]||(e[9]=f=>t(a).formInfo.paymentYear=f),label:"\u4EA4\u8D39\u671F\u95F4",name:"paymentYear",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:v(()=>[I(T,{modelValue:t(a).formInfo.paymentYear,"onUpdate:modelValue":e[8]||(e[8]=f=>t(a).formInfo.paymentYear=f),options:t(g)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):F("",!0),!s((ve=(ke=i.originData)==null?void 0:ke.riskInsureLimitVO)==null?void 0:ve.paymentFrequencyList)||!s((De=(Ie=i.originData)==null?void 0:Ie.riskInsureLimitVO)==null?void 0:De.paymentTypeRule)?(c(),b(u,{key:6,modelValue:t(a).formInfo.paymentFrequency,"onUpdate:modelValue":e[11]||(e[11]=f=>t(a).formInfo.paymentFrequency=f),label:"\u4EA4\u8D39\u65B9\u5F0F",name:"paymentFrequency",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:v(()=>[I(T,{modelValue:t(a).formInfo.paymentFrequency,"onUpdate:modelValue":e[10]||(e[10]=f=>t(a).formInfo.paymentFrequency=f),options:t(d)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):F("",!0),s((ge=(be=i.originData)==null?void 0:be.riskInsureLimitVO)==null?void 0:ge.annuityDrawTypeList)?F("",!0):(c(),b(u,{key:7,modelValue:t(a).formInfo.annuityDrawDate,"onUpdate:modelValue":e[13]||(e[13]=f=>t(a).formInfo.annuityDrawDate=f),label:"\u9886\u53D6\u65F6\u95F4",name:"annuityDrawDate",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:v(()=>{var f,h;return[I(T,{modelValue:t(a).formInfo.annuityDrawDate,"onUpdate:modelValue":e[12]||(e[12]=O=>t(a).formInfo.annuityDrawDate=O),options:D(t(it),(h=(f=i.originData)==null?void 0:f.riskInsureLimitVO)==null?void 0:h.annuityDrawTypeList)},null,8,["modelValue","options"])]}),_:1},8,["modelValue"])),s((Ce=(_e=i.originData)==null?void 0:_e.riskInsureLimitVO)==null?void 0:Ce.annuityDrawFrequencyList)?F("",!0):(c(),b(u,{key:8,modelValue:t(a).formInfo.annuityDrawType,"onUpdate:modelValue":e[15]||(e[15]=f=>t(a).formInfo.annuityDrawType=f),label:"\u9886\u53D6\u65B9\u5F0F",name:"annuityDrawType",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:v(()=>{var f,h;return[I(T,{modelValue:t(a).formInfo.annuityDrawType,"onUpdate:modelValue":e[14]||(e[14]=O=>t(a).formInfo.annuityDrawType=O),options:D(t(nt),(h=(f=i.originData)==null?void 0:f.riskInsureLimitVO)==null?void 0:h.annuityDrawFrequencyList)},null,8,["modelValue","options"])]}),_:1},8,["modelValue"])),(c(!0),R(W,null,z(((Ee=i.originData)==null?void 0:Ee.riskLiabilityInfoVOList)||[],(f,h)=>(c(),R("div",{key:f.liabilityId},[f.optionalFlag===1?(c(),b(u,{key:0,modelValue:t(a).formInfo.liabilityVOList[h].liabilityAttributeValue,"onUpdate:modelValue":O=>t(a).formInfo.liabilityVOList[h].liabilityAttributeValue=O,label:f.liabilityName,name:"liabilityAttributeValue",rules:[{required:f.liabilityAttributeValue,message:"\u8BF7\u9009\u62E9"}]},{input:v(()=>[A("div",null,[f.liabilityAttributeValue?(c(),b(T,{key:1,modelValue:t(a).formInfo.liabilityVOList[h].liabilityAttributeValue,"onUpdate:modelValue":O=>t(a).formInfo.liabilityVOList[h].liabilityAttributeValue=O,options:t(we)},null,8,["modelValue","onUpdate:modelValue","options"])):(c(),R("span",bt,"50\u4E07"))])]),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])):(c(),b(u,{key:1,modelValue:t(a).formInfo.liabilityVOList[h].liabilityAttributeValue,"onUpdate:modelValue":O=>t(a).formInfo.liabilityVOList[h].liabilityAttributeValue=O,label:f.liabilityName,name:"liabilityAttributeValue"},{input:v(()=>[A("div",null,[f.liabilityAttributeValue?(c(),b(T,{key:1,modelValue:t(a).formInfo.liabilityVOList[h].liabilityAttributeValue,"onUpdate:modelValue":O=>t(a).formInfo.liabilityVOList[h].liabilityAttributeValue=O,options:t(we)},null,8,["modelValue","onUpdate:modelValue","options"])):(c(),b(T,{key:0,modelValue:t(a).formInfo.liabilityVOList[h].liabilityAttributeValue,"onUpdate:modelValue":O=>t(a).formInfo.liabilityVOList[h].liabilityAttributeValue=O,options:t(ut)},null,8,["modelValue","onUpdate:modelValue","options"]))])]),_:2},1032,["modelValue","onUpdate:modelValue","label"]))]))),128)),((he=i.originData)==null?void 0:he.relationDesc)?(c(),R("div",gt,[_t,A("div",null,q((Le=i.originData)==null?void 0:Le.relationDesc),1)])):F("",!0)])}}});const Ct=i=>($e("data-v-aeeb813a"),i=i(),Se(),i),Et={class:"com-risk-list-wrapper"},ht=Ct(()=>A("div",{class:"popup-title"},"\u9009\u62E9\u9644\u52A0\u9669",-1)),Lt={class:"risk-list"},Ft={class:"footer-bar"},Ot=Q("\u786E\u8BA4"),At=U({props:{riskList:{type:Array,required:!0,default:()=>[]},show:{type:Boolean,required:!0,default:!1},collocationList:{type:Array,default:()=>[]},disabled:{type:Array,required:!0,default:()=>[]},modelValue:{type:Array,required:!0,default:()=>[]}},emits:["finished","close","update:modelValue"],setup(i,{emit:o}){const y=i,a=B([]),s=B([]),D=B(y.disabled),E=N({show:y.show,currentChecked:[]}),g=(V,l)=>{y.collocationList.forEach(e=>{V===e.riskId&&(l?e.collocationType===1?E.currentChecked=E.currentChecked.filter(n=>!(n===e.collocationRiskId||n===V)):e.collocationType===3&&D.value.filter(n=>n!==e.collocationRiskId):e.collocationType===1?E.currentChecked.push(e.collocationRiskId,V):e.collocationType===3&&D.value.push(e.collocationRiskId))})},d=V=>{var e,n,u;const l=E.currentChecked.includes(V);console.log("status",l),g(V,l),(u=(n=(e=a==null?void 0:a.value)==null?void 0:e[V])==null?void 0:n.toggle)==null||u.call(n)},r=()=>{o("close")},_=()=>{const V=y.riskList.filter(l=>E.currentChecked.includes(l.id));o("update:modelValue",s),o("finished",V),o("close")};return Je(()=>{a.value=[]}),x(()=>y.modelValue,V=>{s.value=V,D.value=V},{deep:!0,immediate:!0}),(V,l)=>{const e=L("van-checkbox"),n=L("VanCell"),u=L("van-cell-group"),m=L("van-checkbox-group"),k=L("VanButton"),p=L("VanPopup");return c(),R("div",Et,[I(p,{show:t(E).show,"onUpdate:show":l[2]||(l[2]=C=>t(E).show=C),title:"\u9009\u62E9\u9644\u52A0\u9669","show-footer":"",position:"bottom",closeable:"",onClose:r},{default:v(()=>[ht,A("div",Lt,[I(m,{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=C=>s.value=C)},{default:v(()=>[I(u,{inset:""},{default:v(()=>[(c(!0),R(W,null,z(i.riskList,C=>(c(),b(n,{key:C.id,title:C.riskName,onClick:w=>d(C.id)},{"right-icon":v(()=>[I(e,{ref_for:!0,ref:w=>a.value[C.id]=w,disabled:D.value.includes(C.id),shape:"square",name:C.id,onClick:l[0]||(l[0]=Xe(()=>{},["stop"]))},null,8,["disabled","name"])]),_:2},1032,["title","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])]),A("div",Ft,[I(k,{type:"primary",disabled:!t(E).currentChecked.length,block:"",onClick:_},{default:v(()=>[Ot]),_:1},8,["disabled"])])]),_:1},8,["show"])])}}});var Rt=M(At,[["__scopeId","data-v-aeeb813a"]]);const Bt={class:"risk-list-wrapper"},wt={key:0,class:"add-rider-risk"},Pt={class:"left-part"},Tt=Q("+ \u9644\u52A0\u9669"),xt=U({props:{riskInfo:{type:Object,required:!0,default:()=>{}},originData:{type:Object,required:!0,default:()=>{}},pickFactor:{type:Function,required:!0,default:()=>{}}},setup(i){var E;const o=i,[y,a]=J(!1);B(null),B(null);const s=N({mainRiskInfo:o.riskInfo,riderRiskInfo:(E=o.riskInfo)==null?void 0:E.riderRiskVOList,requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[],checkedList:[],relationListNum:0,disabledList:[]}),D=(g,d)=>{(g||[]).forEach(r=>{Object.assign(s.riderRiskInfo,{[r.id]:{}})}),s.disabledList=d,s.requiredRiderRiskData=s.requiredRiderRiskData.concat(g)};return Z(()=>{s.requiredRiderRiskData}),x(()=>s.mainRiskInfo,g=>{},{deep:!0,immediate:!0}),x(()=>s.riderRiskInfo,()=>{},{deep:!0,immediate:!0}),x(()=>s.requiredRiderRiskData,g=>{const d=[s.mainRiskData,...g];let r=[],_=[];d.forEach(V=>{var e;const l=((e=V==null?void 0:V.riskCalcMethodInfoVO)==null?void 0:e.riskFactorRelationList)||[];r=r.concat(l.filter(n=>n.factorObject==="insured").map(n=>n.factorCode)),_=_.concat(l.filter(n=>n.factorObject==="holder").map(n=>n.factorCode))}),(g||[]).forEach(V=>{Object.assign(s.riderRiskInfo,{[V.id]:{}})}),o.pickFactor({insuredFactorList:[...new Set(r)],holderFactorList:[...new Set(_)]})},{deep:!0,immediate:!0}),x(()=>o.originData,g=>{(g||[]).forEach(d=>{d.riskType===1?(s.mainRiskData=d,s.requiredRiderRiskData=(d==null?void 0:d.requiredRiderRiskVOList)||[],s.riderRiskList=d==null?void 0:d.optionalRiderRiskVOList):s.riderRiskList.push(d)})},{deep:!0,immediate:!0}),x(()=>o.riskInfo,()=>{},{immediate:!0,deep:!0}),(g,d)=>{var r,_,V,l;return c(),R("div",Bt,[I(xe,{"form-info":t(s).mainRiskInfo,"origin-data":t(s).mainRiskData},null,8,["form-info","origin-data"]),(c(!0),R(W,null,z(t(s).requiredRiderRiskData,(e,n)=>(c(),b(xe,{key:e.id,"form-info":t(s).riderRiskInfo[e.id],index:n,"main-risk-data":t(s).mainRiskData,"main-risk-info":t(s).mainRiskInfo,"origin-data":e},null,8,["form-info","index","main-risk-data","main-risk-info","origin-data"]))),128)),((_=(r=t(s))==null?void 0:r.riderRiskList)==null?void 0:_.length)-((l=(V=t(s))==null?void 0:V.checkedList)==null?void 0:l.length)?(c(),R("div",wt,[A("span",Pt,q(`\u5171\u6709${t(s).riderRiskList.length-t(s).checkedList.length}\u6B3E\u9644\u52A0\u9669\u53EF\u4EE5\u6DFB\u52A0`),1),I(tt,{activied:"",onClick:d[0]||(d[0]=e=>t(a)(!0))},{default:v(()=>[Tt]),_:1})])):F("",!0),t(y)?(c(),b(Rt,{key:1,modelValue:t(s).checkedList,"onUpdate:modelValue":d[1]||(d[1]=e=>t(s).checkedList=e),show:t(y),disabled:t(s).disabledList,"risk-list":t(s).riderRiskList,"collocation-list":t(s).mainRiskData.collocationVOList||[],onFinished:D,onClose:d[2]||(d[2]=e=>t(a)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):F("",!0)])}}});var qe=M(xt,[["__scopeId","data-v-684d31e2"]]);const qt=(i={})=>X.get(`/api/product/insureProductDetail/${i==null?void 0:i.productId}`,i),Ut=(i={})=>X.post("/api/insurance/premiumCalc",i);const $t={class:"card-title"},St=U({props:{title:{type:String,default:()=>""},collapse:{type:Boolean,default:!1}},setup(i){const o=B(["1"]);return(y,a)=>{const s=L("ZaSvg"),D=L("VanCell"),E=L("VanCollapseItem"),g=L("VanCollapse");return c(),R("div",$t,[i.collapse?(c(),b(g,{key:1,modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=d=>o.value=d)},{default:v(()=>[I(E,{name:"1"},{title:v(()=>[I(s,{name:"line",color:"var(--van-primary-color)"}),A("h4",null,q(i.title),1)]),default:v(()=>[i.collapse?He(y.$slots,"default",{key:0},void 0,!0):F("",!0)]),_:3})]),_:3},8,["modelValue"])):(c(),b(D,{key:0},{title:v(()=>[I(s,{name:"line",color:"var(--van-primary-color)"}),A("h4",null,q(i.title),1)]),_:1}))])}}});var Ue=M(St,[["__scopeId","data-v-1d07f5e2"]]);const Nt={key:0,class:"part-card"},Mt={key:1,class:"part-card"},Yt={class:"risk-content"},jt={key:0,class:"risk"},Gt={key:1,class:"plan-risk"},Zt={class:"footer-bar"},Wt={class:"trial-result"},zt=Q("\u53BB\u8BD5\u7B97"),Qt=Q("\u53BB\u6295\u4FDD"),Jt=U({setup(i){const{id:o=115}=Ke().query,y=B({personVO:{}}),a=B({insuredCode:"",personVO:{}}),s=B({}),D=B({}),E=B({}),g=B({}),d=B({});et("premium",d.value);const r=N({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0}),_=()=>{var m;const n=Object.values(s.value[r.currentPlan].riderRiskVOList).map(k=>{const p=k;if(p.paymentYear==="3"){const C=(s.value[r.currentPlan].paymentYear||"").split("_");C[1]&&(C[1]-=1),p.paymentYear=C.join("_")}return p}),u={holder:{personVO:G($({},y.value.personVO),{birthday:y.value.personVO.birthday&&`${y.value.personVO.birthday} 00:00:00`})},productCode:(m=r==null?void 0:r.riskBaseInfo)==null?void 0:m.productCode,insuredVOList:[G($({},a.value),{personVO:G($({},a.value.personVO),{birthday:a.value.personVO.birthday&&`${a.value.personVO.birthday} 00:00:00`}),productPlanVOList:[{planCode:r.currentPlan||"",riskVOList:[G($({},s.value[r.currentPlan]),{riderRiskVOList:n})]}]})]};Ut($({},u)).then(({code:k,data:p})=>{if(k==="10000"){r.trialResult=p,r.canTrial=!1;const C={};(p.riskPremiumDetailVOList||[]).forEach(w=>{C[w.riskCode]=w}),Object.assign(d.value,C),console.log(d.value)}})},V=()=>{var n,u,m,k,p;Promise.all([(u=(n=D==null?void 0:D.value)==null?void 0:n.validateForm)==null?void 0:u.call(n),(k=(m=E==null?void 0:E.value)==null?void 0:m.validateForm)==null?void 0:k.call(m),(p=g==null?void 0:g.value)==null?void 0:p.validate()]).then(()=>{_()})},l=()=>{qt({productId:o}).then(({code:n,data:u})=>{n==="10000"&&(r.riskBaseInfo=u==null?void 0:u.productBasicInfoVO,((u==null?void 0:u.productRelationPlanVOList)||(u==null?void 0:u.riskDetailVOList)||[]).forEach((m,k)=>{k===0&&(r.currentPlan=m.planCode||0),Object.assign(s.value,{[m.planCode||k]:{liabilityVOList:[],riderRiskVOList:{}}})}),r.riskData=(u==null?void 0:u.riskDetailVOList)||[],r.riskPlanData=(u==null?void 0:u.productRelationPlanVOList)||[])}).finally(()=>{})},e=n=>{r.holderFactor=n.insuredFactorList,r.insuredFactor=n.holderFactorList};return x([()=>s.value,()=>y.value,()=>a.value],n=>{n&&r.canTrial&&(r.canTrial=!0)},{deep:!0}),Z(()=>{l()}),(n,u)=>{const m=L("VanForm"),k=L("VanTab"),p=L("VanTabs"),C=L("VanButton"),w=L("ZaPageWrap");return c(),b(w,{class:"page-trial-wrapper"},{default:v(()=>{var Y,j;return[t(r).holderFactor.length?(c(),R("div",Nt,[I(Ue,{title:"\u6295\u4FDD\u4EBA"}),I(Te,{ref_key:"holderRef",ref:D,"insured-code":(Y=t(r).riskBaseInfo)==null?void 0:Y.insuredCode,"form-info":y.value.personVO,"factor-list":t(r).holderFactor},null,8,["insured-code","form-info","factor-list"])])):F("",!0),t(r).insuredFactor.length?(c(),R("div",Mt,[I(Ue,{title:"\u88AB\u4FDD\u4EBA"}),I(Te,{ref_key:"insuredRef",ref:E,"insured-code":(j=t(r).riskBaseInfo)==null?void 0:j.insuredCode,"form-info":a.value.personVO,"factor-list":t(r).insuredFactor},null,8,["insured-code","form-info","factor-list"])])):F("",!0),A("div",Yt,[t(r).riskData.length?(c(),R("div",jt,[I(m,{ref_key:"riskFormRef",ref:g,"input-align":"right","error-message-align":"right"},{default:v(()=>[I(qe,{"risk-info":s.value[0],"origin-data":t(r).riskData,"pick-factor":e},null,8,["risk-info","origin-data"])]),_:1},512)])):F("",!0),t(r).riskPlanData.length?(c(),R("div",Gt,[I(m,{ref_key:"riskFormRef",ref:g,"input-align":"right","error-message-align":"right"},{default:v(()=>[I(p,{active:t(r).currentPlan,"onUpdate:active":u[0]||(u[0]=P=>t(r).currentPlan=P),type:"card"},{default:v(()=>[(c(!0),R(W,null,z(t(r).riskPlanData,P=>(c(),b(k,{key:P.planCode,name:P.planCode,title:P.planName},{default:v(()=>[P.planCode===t(r).currentPlan?(c(),b(qe,{key:0,"risk-info":s.value[P.planCode],"origin-data":P.riskDetailVOList,"pick-factor":e},null,8,["risk-info","origin-data"])):F("",!0)]),_:2},1032,["name","title"]))),128))]),_:1},8,["active"])]),_:1},512)])):F("",!0)]),A("div",Zt,[A("span",Wt,q(t(r).trialResult.premium||0),1),t(r).canTrial?(c(),b(C,{key:0,type:"primary",onClick:V},{default:v(()=>[zt]),_:1})):(c(),b(C,{key:1,type:"primary",onClick:V},{default:v(()=>[Qt]),_:1}))])]}),_:1})}}});var ta=M(Jt,[["__scopeId","data-v-60dd036a"]]);export{ta as default};
