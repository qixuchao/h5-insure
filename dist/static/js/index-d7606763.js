var ne=Object.defineProperty,ie=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var X=(u,m,o)=>m in u?ne(u,m,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[m]=o,$=(u,m)=>{for(var o in m||(m={}))se.call(m,o)&&X(u,o,m[o]);if(Q)for(var o of Q(m))de.call(m,o)&&X(u,o,m[o]);return u},H=(u,m)=>ie(u,re(m));import{g as P,C as A,$ as w,r as E,k as r,m as b,n as p,j as y,V as me,s as _,N as fe,B as N,a0 as pe,a1 as x,L as U,h as k,z as e,d as ce,a2 as ye,F as S,E as Y,y as T,I as ae,a3 as Ve,o as Ie,a4 as ke,a5 as De}from"./vendor-ecfa3d50.js";import{P as O,_ as ue,a as ve}from"./index-719d0887.js";import{b as M}from"./index-2808c334.js";const _e=[{label:"\u7537",value:"1"},{label:"\u5973",value:"2"}],be=[{label:"\u6709",value:"1"},{label:"\u65E0",value:"2"}],Ee=[{value:1,label:"\u7B2C5\u4E2A\u4FDD\u5355\u5468\u5E74\u65E5"},{value:2,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8455\u5468\u5C81"},{value:3,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8460\u5468\u5C81"},{value:4,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8465\u5468\u5C81"},{value:5,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8470\u5468\u5C81"},{value:6,label:"\u8D77\u59CB\u9886\u53D6\u5E74\u9F8475\u5468\u5C81"}],ge=[{value:1,label:"\u5E74\u9886"},{value:2,label:"\u6708\u9886"}],Fe=[{label:"\u8DB8\u4EA4",value:"1"},{label:"\u5E74\u4EA4",value:"2"},{label:"\u534A\u5E74\u4EA4",value:"3"},{label:"\u5B63\u4EA4",value:"4"},{label:"\u6708\u4EA4",value:"5"}],Le=[{label:"\u8DB8\u4EA4",value:"single"},{label:"1\u5E74\u4EA4",value:"year_1"},{label:"5\u5E74\u4EA4",value:"year_5"},{label:"10\u5E74\u4EA4",value:"year_10"},{label:"15\u5E74\u4EA4",value:"year_15"},{label:"20\u5E74\u4EA4",value:"year_20"},{label:"25\u5E74\u4EA4",value:"year_25"},{label:"30\u5E74\u4EA4",value:"year_30"},{label:"35\u5E74\u4EA4",value:"year_35"}],Ce=[{label:"7\u5929",value:"day_7"},{label:"14\u5929",value:"day_14"},{label:"30\u5929",value:"day_30"},{label:"1\u5E74",value:"year_1"},{label:"3\u5E74",value:"year_3"},{label:"5\u5E74",value:"year_5"},{label:"10\u5E74",value:"year_10"},{label:"15\u5E74",value:"year_15"},{label:"20\u5E74",value:"year_20"},{label:"25\u5E74",value:"year_25"},{label:"30\u5E74",value:"year_30"},{label:"35\u5E74",value:"year_35"},{label:"\u7EC8\u8EAB",value:"to_life"}],J=[{label:"\u8FD4\u4FDD\u989D",value:1},{label:"\u8FD4\u4FDD\u8D39",value:2}],Ae=[{label:"\u6295\u4FDD",value:1},{label:"\u4E0D\u6295\u4FDD",value:2}];const Be={class:"com-pro-popup"},Oe={key:0,class:"footer-bar"},Re=N("\u786E\u5B9A"),le=P({props:{show:{type:Boolean,default:!1},showFooter:{type:Boolean,default:!1}},setup(u){const m=u,o=pe(),V=A(!1);return w(()=>m.show,i=>{V.value=i,o==null||o.update()}),(i,I)=>{const a=E("VanButton"),t=E("VanPopup");return r(),b("div",Be,[p(t,fe({show:V.value,"onUpdate:show":I[0]||(I[0]=l=>V.value=l)},i.$attrs),{default:y(()=>[me(i.$slots,"default"),u.showFooter?(r(),b("div",Oe,[p(a,{type:"primary"},{default:y(()=>[Re]),_:1})])):_("",!0)]),_:3},16,["show"])])}}}),we={class:"com-personal-info-wrapper"},ee=P({props:{formInfo:{type:Object,required:!0,default:()=>{}},factorList:{type:Array,required:!0,default:()=>[]}},setup(u,{expose:m}){const o=u,[V,i]=x(),[I,a]=x(),t=A(),l=U({formInfo:o==null?void 0:o.formInfo}),F=()=>{};return m({validateForm:()=>new Promise((C,n)=>{t==null||t.value.validate().then(()=>{C("")},()=>{n()})})}),(C,n)=>{const d=E("VanField"),c=E("VanForm"),D=E("van-datetime-picker"),g=E("van-popup"),B=E("van-cascader");return r(),b("div",we,[p(c,{ref_key:"formRef",ref:t,"input-align":"right","error-message-align":"right"},{default:y(()=>[u.factorList.includes("APPLICANT.AGE")||u.factorList.includes("AGE")?(r(),k(d,{key:0,modelValue:e(l).formInfo.birthday,"onUpdate:modelValue":n[0]||(n[0]=f=>e(l).formInfo.birthday=f),rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],name:"birth",label:"\u51FA\u751F\u65E5\u671F","is-link":"",placeholder:"\u8BF7\u9009\u62E9",onClick:n[1]||(n[1]=f=>e(i)(!0))},null,8,["modelValue"])):_("",!0),u.factorList.includes("APPLICANT.GENDER")||u.factorList.includes("GENDER")?(r(),k(d,{key:1,modelValue:e(l).formInfo.gender,"onUpdate:modelValue":n[3]||(n[3]=f=>e(l).formInfo.gender=f),name:"gender",label:"\u6027\u522B",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:y(()=>[p(O,{modelValue:e(l).formInfo.gender,"onUpdate:modelValue":n[2]||(n[2]=f=>e(l).formInfo.gender=f),options:e(_e)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):_("",!0),u.factorList.includes("SOCIAL_INS")?(r(),k(d,{key:2,modelValue:e(l).formInfo.socialSecurity,"onUpdate:modelValue":n[5]||(n[5]=f=>e(l).formInfo.socialSecurity=f),name:"socialSecurity",label:"\u793E\u4FDD",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:y(()=>[p(O,{modelValue:e(l).formInfo.socialSecurity,"onUpdate:modelValue":n[4]||(n[4]=f=>e(l).formInfo.socialSecurity=f),options:e(be)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):_("",!0),u.factorList.includes("OCCUPATION_CATEGORY")?(r(),k(d,{key:3,modelValue:e(l).formInfo.occupationalClass,"onUpdate:modelValue":n[6]||(n[6]=f=>e(l).formInfo.occupationalClass=f),rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],name:"birth",label:"\u804C\u4E1A\u7C7B\u578B","is-link":"",placeholder:"\u8BF7\u9009\u62E9",onClick:n[7]||(n[7]=f=>e(a)(!0))},null,8,["modelValue"])):_("",!0)]),_:1},512),p(g,{show:e(V),"onUpdate:show":n[10]||(n[10]=f=>ye(V)?V.value=f:null),position:"bottom"},{default:y(()=>[p(D,{type:"date",onConfirm:n[8]||(n[8]=f=>{e(l).formInfo.birthday=e(ce)(f).format("YYYY-MM-DD"),e(i)(!1)}),onCancel:n[9]||(n[9]=f=>e(i)(!1))})]),_:1},8,["show"]),p(le,{show:e(I),title:"\u804C\u4E1A\u9009\u62E9",position:"bottom",closeable:""},{default:y(()=>[p(B,{modelValue:e(l).formInfo.occupationalClass,"onUpdate:modelValue":n[11]||(n[11]=f=>e(l).formInfo.occupationalClass=f),title:"\u8BF7\u9009\u62E9\u804C\u4E1A",options:[],onClose:n[12]||(n[12]=f=>e(a)(!1)),onFinish:F},null,8,["modelValue"])]),_:1},8,["show"])])}}}),Te={class:"com-risk-card-wrapper"},he={key:0},Pe={key:0},Ue={key:1},qe={key:7,class:"liab-desc"},$e=T("div",{class:"title"},"\u8D23\u4EFB\u6295\u4FDD\u8BF4\u660E",-1),te=P({props:{originData:{type:Object,required:!0,default:()=>{}},formInfo:{type:Object,required:!0,default:()=>{}}},setup(u){const m=u,o=U({formInfo:m.formInfo}),V=I=>typeof I!="boolean"&&!I||Array.isArray(I)&&!I.length?!0:{}.toString.call(I)==="object Object"?Object.keys(I).length:!1;w(()=>m.originData,()=>{},{immediate:!0,deep:!0});const i=(I,a)=>{let t=a;return Array.isArray(a)||(t=[t]),(I||[]).filter(l=>t.includes(`${l.value}`))};return(I,a)=>{var F,L,C,n,d,c,D,g,B,f,q,h,G,W,K,Z,z;const t=E("VanStepper"),l=E("VanField");return r(),b("div",Te,[((L=(F=u.originData)==null?void 0:F.riskCalcMethodInfoVO)==null?void 0:L.saleMethod)===1?(r(),k(l,{key:0,modelValue:e(o).formInfo.sumInsured,"onUpdate:modelValue":a[1]||(a[1]=s=>e(o).formInfo.sumInsured=s),label:"\u4FDD\u989D",name:"sumInsured",rules:[{required:!0,message:"\u8BF7\u586B\u5199"}]},{input:y(()=>[p(t,{modelValue:e(o).formInfo.sumInsured,"onUpdate:modelValue":a[0]||(a[0]=s=>e(o).formInfo.sumInsured=s)},null,8,["modelValue"])]),_:1},8,["modelValue"])):_("",!0),((n=(C=u.originData)==null?void 0:C.riskCalcMethodInfoVO)==null?void 0:n.saleMethod)===2?(r(),k(l,{key:1,modelValue:e(o).formInfo.premium,"onUpdate:modelValue":a[3]||(a[3]=s=>e(o).formInfo.premium=s),label:"\u4FDD\u8D39",name:"premium",rules:[{required:!0,message:"\u8BF7\u586B\u5199"}]},{input:y(()=>[p(t,{modelValue:e(o).formInfo.premium,"onUpdate:modelValue":a[2]||(a[2]=s=>e(o).formInfo.premium=s)},null,8,["modelValue"])]),_:1},8,["modelValue"])):_("",!0),V((c=(d=u.originData)==null?void 0:d.riskInsureLimitVO)==null?void 0:c.insurancePeriodValueList)?_("",!0):(r(),k(l,{key:2,modelValue:e(o).formInfo.coverageYear,"onUpdate:modelValue":a[5]||(a[5]=s=>e(o).formInfo.coverageYear=s),label:"\u4FDD\u969C\u671F\u95F4",name:"coverageYear",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:y(()=>{var s,v;return[p(O,{modelValue:e(o).formInfo.coverageYear,"onUpdate:modelValue":a[4]||(a[4]=R=>e(o).formInfo.coverageYear=R),options:i(e(Ce),(v=(s=u.originData)==null?void 0:s.riskInsureLimitVO)==null?void 0:v.insurancePeriodValueList)},null,8,["modelValue","options"])]}),_:1},8,["modelValue"])),V((g=(D=u.originData)==null?void 0:D.riskInsureLimitVO)==null?void 0:g.paymentPeriodValueList)?_("",!0):(r(),k(l,{key:3,modelValue:e(o).formInfo.paymentYear,"onUpdate:modelValue":a[7]||(a[7]=s=>e(o).formInfo.paymentYear=s),label:"\u4EA4\u8D39\u671F\u95F4",name:"paymentYear",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:y(()=>{var s,v;return[p(O,{modelValue:e(o).formInfo.paymentYear,"onUpdate:modelValue":a[6]||(a[6]=R=>e(o).formInfo.paymentYear=R),options:i(e(Le),(v=(s=u.originData)==null?void 0:s.riskInsureLimitVO)==null?void 0:v.paymentPeriodValueList)},null,8,["modelValue","options"])]}),_:1},8,["modelValue"])),V((f=(B=u.originData)==null?void 0:B.riskInsureLimitVO)==null?void 0:f.paymentFrequencyList)?_("",!0):(r(),k(l,{key:4,modelValue:e(o).formInfo.paymentFrequency,"onUpdate:modelValue":a[9]||(a[9]=s=>e(o).formInfo.paymentFrequency=s),label:"\u4EA4\u8D39\u65B9\u5F0F",name:"paymentFrequency",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:y(()=>{var s,v;return[p(O,{modelValue:e(o).formInfo.paymentFrequency,"onUpdate:modelValue":a[8]||(a[8]=R=>e(o).formInfo.paymentFrequency=R),options:i(e(Fe),(v=(s=u.originData)==null?void 0:s.riskInsureLimitVO)==null?void 0:v.paymentFrequencyList)},null,8,["modelValue","options"])]}),_:1},8,["modelValue"])),V((h=(q=u.originData)==null?void 0:q.riskInsureLimitVO)==null?void 0:h.annuityDrawTypeList)?_("",!0):(r(),k(l,{key:5,modelValue:e(o).formInfo.annuityDrawDate,"onUpdate:modelValue":a[11]||(a[11]=s=>e(o).formInfo.annuityDrawDate=s),label:"\u9886\u53D6\u65F6\u95F4",name:"annuityDrawDate",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:y(()=>{var s,v;return[p(O,{modelValue:e(o).formInfo.annuityDrawDate,"onUpdate:modelValue":a[10]||(a[10]=R=>e(o).formInfo.annuityDrawDate=R),options:i(e(Ee),(v=(s=u.originData)==null?void 0:s.riskInsureLimitVO)==null?void 0:v.annuityDrawTypeList)},null,8,["modelValue","options"])]}),_:1},8,["modelValue"])),V((W=(G=u.originData)==null?void 0:G.riskInsureLimitVO)==null?void 0:W.annuityDrawFrequencyList)?_("",!0):(r(),k(l,{key:6,modelValue:e(o).formInfo.annuityDrawType,"onUpdate:modelValue":a[13]||(a[13]=s=>e(o).formInfo.annuityDrawType=s),label:"\u9886\u53D6\u65B9\u5F0F",name:"annuityDrawType",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:y(()=>{var s,v;return[p(O,{modelValue:e(o).formInfo.annuityDrawType,"onUpdate:modelValue":a[12]||(a[12]=R=>e(o).formInfo.annuityDrawType=R),options:i(e(ge),(v=(s=u.originData)==null?void 0:s.riskInsureLimitVO)==null?void 0:v.annuityDrawFrequencyList)},null,8,["modelValue","options"])]}),_:1},8,["modelValue"])),(r(!0),b(S,null,Y(((K=u.originData)==null?void 0:K.riskLiabilityInfoVOList)||[],s=>(r(),k(l,{key:s.liabilityId,label:s.liabilityName,name:"liabilityAttributeValue",rules:[{required:s.optionalFlag===1&&s.liabilityAttributeValue,message:"\u8BF7\u9009\u62E9"}]},{input:y(()=>[s.optionalFlag===1?(r(),b("div",he,[s.liabilityAttributeValue?(r(),k(O,{key:1,modelValue:e(o).formInfo.liabilityVOList,"onUpdate:modelValue":a[14]||(a[14]=v=>e(o).formInfo.liabilityVOList=v),options:e(J)},null,8,["modelValue","options"])):(r(),b("span",Pe,"50\u4E07"))])):(r(),b("div",Ue,[s.liabilityAttributeValue?(r(),k(O,{key:1,modelValue:e(o).formInfo.liabilityVOList,"onUpdate:modelValue":a[16]||(a[16]=v=>e(o).formInfo.liabilityVOList=v),options:e(J)},null,8,["modelValue","options"])):(r(),k(O,{key:0,modelValue:e(o).formInfo.liabilityVOList,"onUpdate:modelValue":a[15]||(a[15]=v=>e(o).formInfo.liabilityVOList=v),options:e(Ae)},null,8,["modelValue","options"]))]))]),_:2},1032,["label","rules"]))),128)),((Z=u.originData)==null?void 0:Z.relationDesc)?(r(),b("div",qe,[$e,T("div",null,ae((z=u.originData)==null?void 0:z.relationDesc),1)])):_("",!0)])}}}),Ne={class:"com-risk-list-wrapper"},Se={class:"risk-list"},Ye=P({props:{riskList:{type:Array,required:!0,default:()=>[]},show:{type:Boolean,default:!1}},emits:["finished"],setup(u,{emit:m}){const o=u,V=A([]),i=A([]),I=U({show:o.show}),a=t=>{V.value[t].toggle()};return w(()=>o,t=>{console.log("newVal",t)},{deep:!0,immediate:!0}),(t,l)=>{const F=E("van-checkbox"),L=E("VanCell"),C=E("van-cell-group");return r(),b("div",Ne,[p(le,{show:e(I).show,title:"\u9009\u62E9\u9644\u52A0\u9669","show-footer":"",position:"bottom",closeable:""},{default:y(()=>[T("div",Se,[p(C,{modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=n=>i.value=n),inset:""},{default:y(()=>[(r(!0),b(S,null,Y(u.riskList,n=>(r(),k(L,{key:n.id,title:n.riskName,onClick:d=>a(n.id)},{"right-icon":y(()=>[p(F,{ref_for:!0,ref:d=>V.value[n.id]=d,name:n.id,onClick:l[0]||(l[0]=Ve(()=>{},["stop"]))},null,8,["name"])]),_:2},1032,["title","onClick"]))),128))]),_:1},8,["modelValue"])])]),_:1},8,["show"])])}}});const xe={class:"risk-list-wrapper"},Me={key:0,class:"add-rider-risk"},je={class:"left-part"},Ge=N("+ \u9644\u52A0\u9669"),We=P({props:{riskInfo:{type:Object,required:!0,default:()=>{}},originData:{type:Object,required:!0,default:()=>{}},pickFactor:{type:Function,required:!0,default:()=>{}}},setup(u){const m=u,[o,V]=x(!1);A(null),A(null);const i=U({mainRiskInfo:m.riskInfo,riderRiskInfo:m.riskInfo.riderRiskVOList,requiredRiderRiskData:[],mainRiskData:{},riderRiskList:[]}),I=()=>{};return w(()=>i.mainRiskData,a=>{const t={riskType:1,riskId:a.id,riskCode:a.riskCode,riskCategory:a.riskCategory,liabilityVOList:a.riskLiabilityInfoVOList.map(l=>({liabilityAttributeCode:l.liabilityAttribute,liabilityAttributeValue:l.liabilityAttributeValue,liabilityCode:l.liabilityCode,liabilityId:l.id,liabilityRateType:l.liabilityRateType}))};Object.assign(i.mainRiskInfo,t)}),w(()=>i.mainRiskInfo,()=>{},{deep:!0,immediate:!0}),w(()=>i.riderRiskInfo,()=>{},{deep:!0,immediate:!0}),w(()=>i.requiredRiderRiskData,a=>{const t=[i.mainRiskData,...a];let l=[],F=[];t.forEach(L=>{var n;const C=((n=L==null?void 0:L.riskCalcMethodInfoVO)==null?void 0:n.riskFactorRelationList)||[];l=l.concat(C.filter(d=>d.factorObject==="insured").map(d=>d.factorCode)),F=F.concat(C.filter(d=>d.factorObject==="holder").map(d=>d.factorCode))}),m.pickFactor({insuredFactorList:[...new Set(l)],holderFactorList:[...new Set(F)]})},{deep:!0,immediate:!0}),w(()=>m.originData,a=>{(a||[]).forEach(t=>{t.riskType===1?(i.mainRiskData=t,i.requiredRiderRiskData=(t==null?void 0:t.requiredRiderRiskVOList)||[],i.riderRiskList=i.riderRiskList.concat((t==null?void 0:t.optionalRiderRiskVOList)||[])):i.riderRiskList.push(t)})},{deep:!0,immediate:!0}),(a,t)=>(r(),b("div",xe,[p(te,{"form-info":e(i).mainRiskInfo,"origin-data":e(i).mainRiskData},null,8,["form-info","origin-data"]),(r(!0),b(S,null,Y(e(i).requiredRiderRiskData,l=>(r(),k(te,{key:l.id,"form-info":e(i).riderRiskInfo,"origin-data":l},null,8,["form-info","origin-data"]))),128)),e(i).riderRiskList.length?(r(),b("div",Me,[T("span",je,ae(`\u5171\u6709${e(i).riderRiskList.length}\u6B3E\u9644\u52A0\u9669\u53EF\u4EE5\u6DFB\u52A0`),1),p(ve,{activied:"",onClick:t[0]||(t[0]=l=>e(V)(!0))},{default:y(()=>[Ge]),_:1})])):_("",!0),e(o)?(r(),k(Ye,{key:1,show:e(o),"risk-list":e(i).riderRiskList,onFinished:I},null,8,["show","risk-list"])):_("",!0)]))}});var oe=ue(We,[["__scopeId","data-v-5b277c46"]]);const Ke=(u={})=>M.get(`/api/product/insureProductDetail/${u==null?void 0:u.productId}`,u),Ze=(u={})=>M.post("/api/insurance/premiumCalc",u),ze=(u={})=>M.post("/api/app/queryDictInfo",u);const j=u=>(ke("data-v-914b5592"),u=u(),De(),u),Qe={key:0,class:"part-card"},Xe=j(()=>T("div",{class:"part-title"},"\u6295\u4FDD\u4EBA",-1)),He={key:1,class:"part-card"},Je=j(()=>T("div",{class:"part-title"},"\u88AB\u4FDD\u4EBA",-1)),et={class:"risk-content"},tt={key:0,class:"risk"},ot={key:1,class:"plan-risk"},at={class:"footer-bar"},ut=j(()=>T("span",{class:"trial-result"},null,-1)),lt=N("\u53BB\u8BD5\u7B97"),nt=N("\u53BB\u6295\u4FDD"),it=P({setup(u){const m=A({personVO:{}}),o=A({insuredCode:"",personVO:{}}),V=A({liabilityVOList:[],riderRiskVOList:[]}),i=A({}),I=A({}),a=A({}),t=U({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0}),l=async()=>{var c,D,g;const d=["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD","LIABILITY_ATTRIBUTE_TYPE",`${(g=(D=(c=t==null?void 0:t.riskBaseInfo)==null?void 0:c.insurerCode)==null?void 0:D.toLocaleUpperCase)==null?void 0:g.call(D)}_OCCUPATION`];await ze({dictCodeList:d})},F=()=>{var c,D,g;const d={holder:m.value,productCode:(c=t==null?void 0:t.riskBaseInfo)==null?void 0:c.productCode,insuredVOList:[H($({},o.value),{productPlanVOList:[{planCode:t.currentPlan||((g=(D=t.riskPlanData)==null?void 0:D[0])==null?void 0:g.planCode),riskVOList:[$({},V.value)]}]})]};Ze($({},d)).then(({code:B,data:f})=>{B==="10000"&&(t.trialResult=f,t.canTrial=!1)})},L=()=>{var d,c,D,g,B;Promise.all([(c=(d=i==null?void 0:i.value)==null?void 0:d.validateForm)==null?void 0:c.call(d),(g=(D=I==null?void 0:I.value)==null?void 0:D.validateForm)==null?void 0:g.call(D),(B=a==null?void 0:a.value)==null?void 0:B.validate()]).then(()=>{F()})},C=()=>{Ke({productId:115}).then(({code:d,data:c})=>{d==="10000"&&(t.riskBaseInfo=c==null?void 0:c.productBasicInfoVO,t.riskData=(c==null?void 0:c.riskDetailVOList)||[],t.riskPlanData=(c==null?void 0:c.productRelationPlanVOList)||[],l())}).finally(()=>{})},n=d=>{t.holderFactor=d.insuredFactorList,t.insuredFactor=d.holderFactorList};return w([()=>V.value,()=>m.value,()=>o.value],d=>{d&&t.canTrial&&(t.canTrial=!0)}),Ie(()=>{C()}),(d,c)=>{const D=E("VanForm"),g=E("VanTab"),B=E("VanTabs"),f=E("VanButton"),q=E("ZaPageWrap");return r(),k(q,{class:"page-trial-wrapper"},{default:y(()=>[e(t).holderFactor.length?(r(),b("div",Qe,[Xe,p(ee,{ref_key:"holderRef",ref:i,"form-info":m.value.personVO,"factor-list":e(t).holderFactor},null,8,["form-info","factor-list"])])):_("",!0),e(t).insuredFactor.length?(r(),b("div",He,[Je,p(ee,{ref_key:"insuredRef",ref:I,"form-info":o.value.personVO,"factor-list":e(t).insuredFactor},null,8,["form-info","factor-list"])])):_("",!0),T("div",et,[e(t).riskData.length?(r(),b("div",tt,[p(D,{ref_key:"riskFormRef",ref:a,"input-align":"right","error-message-align":"right"},{default:y(()=>[p(oe,{"risk-info":V.value,"origin-data":e(t).riskData,"pick-factor":n},null,8,["risk-info","origin-data"])]),_:1},512)])):_("",!0),e(t).riskPlanData.length?(r(),b("div",ot,[p(D,{ref_key:"riskFormRef",ref:a,"input-align":"right","error-message-align":"right"},{default:y(()=>[p(B,{modelValue:e(t).currentPlan,"onUpdate:modelValue":c[0]||(c[0]=h=>e(t).currentPlan=h)},{default:y(()=>[(r(!0),b(S,null,Y(e(t).riskPlanData,h=>(r(),k(g,{key:h.planCode,name:V.value.planCode,title:h.planName},{default:y(()=>[p(oe,{"risk-info":V.value,"origin-data":h.riskDetailVOList,"pick-factor":n},null,8,["risk-info","origin-data"])]),_:2},1032,["name","title"]))),128))]),_:1},8,["modelValue"])]),_:1},512)])):_("",!0)]),T("div",at,[ut,e(t).canTrial?(r(),k(f,{key:0,type:"primary",onClick:L},{default:y(()=>[lt]),_:1})):(r(),k(f,{key:1,type:"primary",onClick:L},{default:y(()=>[nt]),_:1}))])]),_:1})}}});var ft=ue(it,[["__scopeId","data-v-914b5592"]]);export{ft as default};
