var U=Object.defineProperty,Y=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var T=(a,l,s)=>l in a?U(a,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[l]=s,p=(a,l)=>{for(var s in l||(l={}))H.call(l,s)&&T(a,s,l[s]);if(N)for(var s of N(l))X.call(l,s)&&T(a,s,l[s]);return a},h=(a,l)=>Y(a,z(l));import{a as G,g as Q,C as _,L as W,a3 as A,x as Z,X as O,o as ee,r as L,h as P,m as y,n as m,k as B,y as v,z as c,j as te,s as D,a1 as re,a2 as se,B as ie}from"./vendor-89e50ef2.js";import{P as E,R as oe,i as ae,p as ne}from"./trial-64989166.js";import{g as ue}from"./index-e009ac36.js";import{_ as le}from"./index-b98bfe67.js";const Ie=G({id:"createProposal",state:()=>({proposalInfo:{},trialData:[],excludeProduct:[]}),actions:{setProposalInfo(a){this.$state.proposalInfo=a},setTrialData(a){this.$state.trialData=a},setExcludeProduct(a){this.$state.excludeProduct=a}}});const ce=a=>(re("data-v-2f047662"),a=a(),se(),a),de={class:"com-product-risk-wrapper"},pe={class:"popup-container"},fe=ce(()=>v("div",{class:"popup-title"},"\u8BF7\u9009\u62E9\u4FDD\u969C\u65B9\u6848",-1)),me={class:"risk-trial-wrapper"},ke={key:0,class:"part-card"},he={key:1,class:"part-card"},Ve={class:"risk-content"},_e={key:0,class:"risk"},ge={class:"footer-bar"},Oe=ie("\u786E\u8BA4"),Le=Q({props:{isShow:{type:Boolean,default:!1},type:{default:"add"},productId:{default:0},riskType:{default:1},formInfo:{default:{}},productData:{default:()=>({})},holder:{default:()=>({})},insured:{default:()=>({})},riderRisk:{default:()=>[]},currentRisk:{default:()=>[]}},emits:["close","finished"],setup(a,{emit:l}){const s=a,I=_({personVO:p({},s.holder)}),R=_({insuredCode:"",personVO:p({},s.insured)}),g=_({}),b=_({}),k=_({}),C=_({}),F=_({}),e=W({currentPlan:"0",isShow:s.isShow,riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],type:s.type});A("premium",F.value),A("source",{type:e.type,origin:"proposal",showRiskList:s.currentRisk});const S=Z(()=>{var o;let t="";if((o=e.riskData)==null?void 0:o[0]){const n=e.riskData[0],i=((n==null?void 0:n.requiredRiderRiskVOList)||[]).map(r=>r.riskName);i.length&&(t=`\u7279\u6B8A\u63D0\u793A: ${n.riskName}\u548C${i.join("\u3001")}\u5FC5\u987B\u540C\u65F6\u6295\u4FDD`)}return t}),x=(t,o)=>{var r,u,d;const n=(t.insuredVOList[0].productPlanVOList[0].riskVOList[0].riderRiskVOList||[]).map(f=>h(p({},f),{premium:o[f.riskCode].premium}));return{proposalHolder:h(p({},(r=t.holder)==null?void 0:r.personVO),{dateRange:(u=k==null?void 0:k.value)==null?void 0:u.ageRangeObj}),proposalInsuredList:[h(p({},t.insuredVOList[0].personVO),{dateRange:(d=k==null?void 0:k.value)==null?void 0:d.ageRangeObj,proposalInsuredProductList:[{productId:e.riskBaseInfo.id,productName:e.riskBaseInfo.productName,proposalProductRiskList:[h(p({},t.insuredVOList[0].productPlanVOList[0].riskVOList[0]),{premium:o[t.insuredVOList[0].productPlanVOList[0].riskVOList[0].riskCode].premium,riderRiskVOList:n})]}]})]}},j=()=>{const t=JSON.parse(JSON.stringify(g.value[e.currentPlan])),o=Object.values(t.riderRiskVOList||[]).map(i=>{const r=i;if(r.chargePeriod==="3"){const u=(g.value[e.currentPlan].chargePeriod||"").split("_");u[1]&&(u[1]-=1),r.chargePeriod=u.join("_")}return r.liabilityVOList=(r.liabilityVOList||[]).filter(u=>u.liabilityAttributeValue!=="-1").map(u=>{const d=u;return d.liabilityAttributeValue==="0"&&(d.liabilityAttributeValue=""),d}),r});t.liabilityVOList=t.liabilityVOList.filter(i=>i.liabilityAttributeValue!=="-1").map(i=>{const r=i;return r.liabilityAttributeValue==="0"&&(r.liabilityAttributeValue=""),r});const n={holder:{personVO:I.value.personVO},productCode:e.riskBaseInfo.productCode,insuredVOList:[h(p({},R.value),{personVO:R.value.personVO,productPlanVOList:[{planCode:e.currentPlan||"",riskVOList:[h(p({},t),{riderRiskVOList:o})]}]})]};ne(p({},n)).then(({code:i,data:r})=>{if(i==="10000"){e.retrialTip=!1,e.trialResult=r,e.canTrial=!1;const u={},d=(f=[])=>{f.forEach(V=>{var w;u[V.riskCode]=V,((w=V.riskPremiumDetailVOList)==null?void 0:w.length)&&d(V.riskPremiumDetailVOList)})};d(r.riskPremiumDetailVOList),Object.assign(F.value,u),l("finished",x(n,u))}else e.retrialTip=!0})},$=()=>{var t,o,n,i,r;Promise.all([(o=(t=b.value)==null?void 0:t.validateForm)==null?void 0:o.call(t),(i=(n=k.value)==null?void 0:n.validateForm)==null?void 0:i.call(n),(r=C.value)==null?void 0:r.validate()]).then(()=>{j()})},q=()=>{l("close")},M=()=>{ue({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then(({code:o,data:n})=>{if(o==="10000"){const i={};n.forEach(r=>{i[r.dictCode]=r.dictItemList}),e.enumList=i}})},J=()=>{ae({productId:s.productId,source:2}).then(({code:t,data:o})=>{t==="10000"&&(e.riskBaseInfo=o.productBasicInfoVO,(o.productRelationPlanVOList||o.riskDetailVOList||[]).forEach((n,i)=>{i===0&&(e.currentPlan=n.planCode||"0"),Object.assign(g.value,{[n.planCode||i]:{liabilityVOList:[],riderRiskVOList:{}}})}),e.riskData=o.riskDetailVOList||[],e.riskPlanData=o.productRelationPlanVOList||[])}).finally(()=>{})},K=t=>{e.holderFactor=t.holderFactorList,e.insuredFactor=t.insuredFactorList,e.ageRange=t.ageRange};return O([()=>g.value,()=>I.value,()=>R.value],t=>{t&&!e.canTrial&&(e.canTrial=!0,e.retrialTip=!0)},{deep:!0}),O(()=>s.isShow,t=>{e.isShow=t},{immediate:!0}),O(()=>s.productId,t=>{t&&J()},{immediate:!0}),O(()=>s.formInfo,(t={})=>{if(s.type!=="add"){const o={0:h(p({},t.proposalProductRiskList[0]),{riderRiskVOList:{}})};Object.assign(g.value,o)}},{deep:!0,immediate:!0}),O(()=>s.productData,t=>{s.type!=="add"&&(e.riskBaseInfo=t.productBasicInfoVO,e.riskData=t.riskDetailVOList)},{deep:!0,immediate:!0}),O(()=>s.type,t=>{e.type=t}),ee(()=>{M()}),(t,o)=>{const n=L("ProMessage"),i=L("ProTitle"),r=L("VanForm"),u=L("VanButton"),d=L("VanPopup");return P(),y("div",de,[m(d,{show:c(e).isShow,"onUpdate:show":o[0]||(o[0]=f=>c(e).isShow=f),round:"",position:"bottom",closeable:"",style:{height:"80%"},onClose:q},{default:B(()=>{var f,V;return[v("div",pe,[fe,c(S)?(P(),te(n,{key:0,content:c(S)},null,8,["content"])):D("",!0),v("div",me,[c(e).holderFactor.length?(P(),y("div",ke,[m(i,{title:"\u6295\u4FDD\u4EBA"}),m(E,{ref_key:"holderRef",ref:b,"insured-code":(f=c(e).riskBaseInfo)==null?void 0:f.insurerCode,"form-info":I.value.personVO,"factor-list":c(e).holderFactor,"age-range":c(e).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):D("",!0),c(e).insuredFactor.length?(P(),y("div",he,[m(i,{title:"\u88AB\u4FDD\u4EBA"}),m(E,{ref_key:"insuredRef",ref:k,"insured-code":(V=c(e).riskBaseInfo)==null?void 0:V.insurerCode,"form-info":R.value.personVO,"factor-list":c(e).insuredFactor,"age-range":c(e).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):D("",!0),v("div",Ve,[m(i,{title:"\u6295\u4FDD\u65B9\u6848"}),c(e).riskData.length?(P(),y("div",_e,[m(r,{ref_key:"riskFormRef",ref:C,"input-align":"right","error-message-align":"right"},{default:B(()=>[m(oe,{"risk-info":g.value[0],enums:c(e).enumList,"origin-data":c(e).riskData,"pick-factor":K,"rider-risk-list":a.riderRisk},null,8,["risk-info","enums","origin-data","rider-risk-list"])]),_:1},512)])):D("",!0)])]),v("div",ge,[m(u,{block:"",type:"primary",onClick:$},{default:B(()=>[Oe]),_:1})])])]}),_:1},8,["show"])])}}});var Be=le(Le,[["__scopeId","data-v-2f047662"]]);export{Be as P,Ie as u};
