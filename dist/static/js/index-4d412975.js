var pe=Object.defineProperty,me=Object.defineProperties;var fe=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var K=(u,d,l)=>d in u?pe(u,d,{enumerable:!0,configurable:!0,writable:!0,value:l}):u[d]=l,F=(u,d)=>{for(var l in d||(d={}))W.call(d,l)&&K(u,l,d[l]);if(b)for(var l of b(d))Q.call(d,l)&&K(u,l,d[l]);return u},A=(u,d)=>me(u,fe(d));var X=(u,d)=>{var l={};for(var g in u)W.call(u,g)&&d.indexOf(g)<0&&(l[g]=u[g]);if(u!=null&&b)for(var g of b(u))d.indexOf(g)<0&&Q.call(u,g)&&(l[g]=u[g]);return l};import{g as _e,a9 as ge,O as ke,E as v,M as ye,a6 as Pe,_ as Ce,o as ve,r as P,j as k,k as R,m as y,A as r,n as I,p as _,t as L,z as D,F as he,G as Ve,J as Ie,C as E}from"./vendor-9d7eb2ed.js";import{P as Z,a as $}from"./index-ddd4aed1.js";import{i as Le,p as De}from"./trial-c65995de.js";import{c as Oe}from"./createProposal-8e8d5e7a.js";import{_ as Re,n as Be,b as Te,E as Ne}from"./index-1be2f5bc.js";import{u as be}from"./useStorage-3a488872.js";import{b as Fe,a as Ee}from"./trial-4d36c396.js";import"./useDicData-87d43a36.js";const Ae={key:0,class:"part-card"},xe={key:1,class:"part-card"},Se={class:"risk-content"},qe={key:0,class:"risk"},je={key:1,class:"plan-risk"},Me={class:"footer-bar van-safe-area-bottom"},Ue={class:"trial-result"},we=E("\u603B\u4FDD\u8D39"),Ye={class:"result-num"},Je={class:"trial-operate"},ze={key:0,class:"retrial-tip"},Ge=E(" \u6761\u4EF6\u66F4\u6539\u540E\uFF0C\u9700\u8981\u91CD\u65B0\u8BD5\u7B97 "),He=E("\u53BB\u8BD5\u7B97"),Ke=E("\u7ACB\u5373\u6295\u4FDD"),We=_e({setup(u){var w,Y;const d=ge(),l=ke(),{templateId:g=1,agentCode:ee="test",agencyCode:te="",tenantId:x=9991000007,insurerCode:Qe="99",proposalId:O,saleChannelId:ae}=l.query;let{productCode:S="MMBBSF"}=l.query;const B=v({personVO:{occupationCodeList:[]}}),T=v({insuredCode:"",personVO:{occupationCodeList:[]}}),C=v({}),q=v({}),j=v({}),h=v(null),M=v({}),e=ye({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[]});if(O)try{S=(Y=JSON.parse(((w=l.query)==null?void 0:w.extInfo)||"{}"))==null?void 0:Y.productCenterCode}catch(i){console.log(i)}Pe("premium",M.value),be().get("userInfo");const ie="premiumTrial",oe=()=>{e.retrialTip=!1},re=(i,a)=>{e.insuredRiskList=i.map(t=>{var s,n;return{initialAmount:(s=a[t.riskCode])==null?void 0:s.amount,amountUnit:1,annuityDrawFrequency:t.annuityDrawDate,annuityDrawType:t.annuityDrawType,paymentFrequency:t.paymentFrequency,paymentPeriod:t.chargePeriod.split("_")[1],paymentPeriodType:Fe[t.chargePeriod.split("_")[0]],insurancePeriodType:Ee[t.coveragePeriod==="to_life"?"to_life":t.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+t.coveragePeriod.split("_")[1])?0:t.coveragePeriod.split("_")[1],riskCode:t.riskCode,riskType:t.riskType,riskName:t.riskName,extInfo:{riskId:t.riskId,copy:t.copy},initialPremium:(n=a[t.riskCode])==null?void 0:n.premium,liabilityDetails:t.liabilityVOList.map(o=>({liabilityCode:o.liabilityCode,liabilityName:o.liabilityName,refundMethod:o.liabilityAttributeValue})),productId:e.riskBaseInfo.id}})},se=()=>{Be({agencyId:te,saleUserId:ee,saleChannelId:ae,tenantId:x,venderCode:e.riskBaseInfo.insurerCode,orderDataSource:1,proposalId:O,extInfo:{templateId:+(g||1),pageCode:ie,iseeBizNo:window.iseeBiz},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{extInfo:{},tenantOrderProductList:[{productCode:e.riskBaseInfo.productCode||"",productName:e.riskBaseInfo.productName||"",premium:e.trialResult.premium||0,tenantOrderRiskList:e.insuredRiskList}]}]}).then(({code:i,data:a})=>{i==="10000"&&a.pageAction.pageAction==="jumpToPage"&&d.push({path:Te[a.pageAction.data.nextPageCode],query:A(F({insurerCode:e.riskBaseInfo.insurerCode},l.query),{orderNo:a.pageAction.data.orderNo})})})},ne=()=>{const i=JSON.parse(JSON.stringify(C.value[e.currentPlan])),a=Object.values(i).find(s=>s.riskType===1),t=Object.values(i).map(s=>{const n=s;if(n.chargePeriod==="3"){const o=(a.chargePeriod||"").split("_");o[1]&&(o[1]-=1),n.chargePeriod=o.join("_")}return n.liabilityVOList=(n.liabilityVOList||[]).filter(o=>o.optionalFlag===1||o.liabilityAttributeValue&&o.liabilityAttributeValue!=="-1").map(o=>{const p=o;return p.liabilityAttributeValue==="0"&&(p.liabilityAttributeValue=""),p}),n}),c={holder:B.value,productCode:e.riskBaseInfo.productCode,insuredVOList:[A(F({},T.value),{productPlanVOList:[{planCode:e.currentPlan||"",insurerCode:e.riskBaseInfo.insurerCode,riskVOList:t}]})]};De(F({},c)).then(({code:s,data:n})=>{if(s==="10000"){e.retrialTip=!1,e.trialResult=n,e.canTrial=!1;const o={},p=(V=[])=>{(V||[]).forEach(m=>{var N;o[m.riskCode]=m,((N=m.riskPremiumDetailVOList)==null?void 0:N.length)&&p(m.riskPremiumDetailVOList)})};p(n.riskPremiumDetailVOList),re(c.insuredVOList[0].productPlanVOList[0].riskVOList,o),Object.assign(M.value,o)}})},le=()=>{var i,a,t,c,s;Promise.all([(a=(i=q.value)==null?void 0:i.validateForm)==null?void 0:a.call(i),(c=(t=j.value)==null?void 0:t.validateForm)==null?void 0:c.call(t),(s=h.value)==null?void 0:s.validate()]).then(()=>{ne()},n=>{var o;(n==null?void 0:n.length)&&((o=h==null?void 0:h.value)==null||o.scrollToField(n[0].name))})},ue=()=>{Ne({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then(({code:a,data:t})=>{if(a==="10000"){const c={};t.forEach(s=>{c[s.dictCode]=s.dictItemList}),e.enumList=c}})},ce=i=>{Oe({id:O,tenantId:x}).then(({code:a,data:t})=>{var c;if(a==="10000"){const s=((c=t.proposalInsuredList)==null?void 0:c[0])||{},{proposalInsuredProductList:n=[]}=s,o=X(s,["proposalInsuredProductList"]);Object.assign(B.value.personVO,t.proposalHolder);const p=n.find(m=>m.productId===i);Object.assign(T.value.personVO,o,{occupationCodeList:(p==null?void 0:p.occupationCodeList)||[]});const V={};((p==null?void 0:p.proposalProductRiskList)||[]).forEach(m=>{V[m.riskId]=m}),Object.assign(C.value,{0:V})}})},de=()=>{Le({productCode:S,source:1}).then(({code:i,data:a})=>{var t;i==="10000"&&(e.riskBaseInfo=a.productBasicInfoVO,(a.productRelationPlanVOList.length?a.productRelationPlanVOList:a.productRiskVoList[0].riskDetailVOList||[]).forEach((c,s)=>{s===0&&(e.currentPlan=c.planCode||"0"),O||Object.assign(C.value,{[c.planCode||s]:{}})}),e.riskData=((t=a.productRiskVoList[0])==null?void 0:t.riskDetailVOList)||[],e.riskPlanData=a.productRelationPlanVOList||[],O&&ce(a.productBasicInfoVO.id))}).finally(()=>{})},U=i=>{e.holderFactor=i.holderFactorList,e.insuredFactor=i.insuredFactorList,e.ageRange=i.ageRange};return Ce([()=>C.value,()=>B.value,()=>T.value],i=>{i&&!e.canTrial&&(e.canTrial=!0,e.retrialTip=!0)},{deep:!0}),ve(()=>{de(),ue()}),(i,a)=>{const t=P("ProTitle"),c=P("VanForm"),s=P("ProTabButton"),n=P("VanTab"),o=P("VanTabs"),p=P("van-collapse-item"),V=P("van-collapse"),m=P("VanButton"),N=P("ProPageWrap");return k(),R(N,{class:"page-trial-wrapper"},{default:y(()=>{var J,z,G;return[r(e).holderFactor.length?(k(),I("div",Ae,[_(t,{title:"\u6295\u4FDD\u4EBA"}),_(Z,{ref_key:"holderRef",ref:q,"insured-code":(J=r(e).riskBaseInfo)==null?void 0:J.insurerCode,"form-info":B.value.personVO,"factor-list":r(e).holderFactor,"age-range":r(e).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):L("",!0),r(e).insuredFactor.length?(k(),I("div",xe,[_(t,{title:"\u88AB\u4FDD\u4EBA"}),_(Z,{ref_key:"insuredRef",ref:j,"insured-code":(z=r(e).riskBaseInfo)==null?void 0:z.insurerCode,"form-info":T.value.personVO,"factor-list":r(e).insuredFactor,"age-range":r(e).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):L("",!0),D("div",Se,[_(V,{modelValue:r(e).collapseName,"onUpdate:modelValue":a[1]||(a[1]=f=>r(e).collapseName=f)},{default:y(()=>[_(p,{name:"1"},{title:y(()=>[_(t,{title:"\u6295\u4FDD\u65B9\u6848"})]),default:y(()=>[r(e).riskData.length&&C.value[0]?(k(),I("div",qe,[_(c,{ref_key:"riskFormRef",ref:h,"input-align":"right","error-message-align":"right"},{default:y(()=>[_($,{"risk-info":C.value[0],enums:r(e).enumList,"origin-data":r(e).riskData,"pick-factor":U},null,8,["risk-info","enums","origin-data"])]),_:1},512)])):L("",!0),r(e).riskPlanData.length?(k(),I("div",je,[_(c,{ref_key:"riskFormRef",ref:h,"input-align":"right","error-message-align":"right"},{default:y(()=>[_(o,{active:r(e).currentPlan,"onUpdate:active":a[0]||(a[0]=f=>r(e).currentPlan=f)},{default:y(()=>[(k(!0),I(he,null,Ve(r(e).riskPlanData,f=>(k(),R(n,{key:f.planCode,name:f.planCode,title:f.planName},{title:y(()=>[_(s,{title:f.planName,active:r(e).currentPlan===f.planCode},null,8,["title","active"])]),default:y(()=>{var H;return[f.planCode===r(e).currentPlan?(k(),R($,{key:0,"risk-info":C.value[f.planCode],enums:r(e).enumList,"origin-data":(H=f.productRiskVoList)==null?void 0:H[0].riskDetailVOList,"pick-factor":U},null,8,["risk-info","enums","origin-data"])):L("",!0)]}),_:2},1032,["name","title"]))),128))]),_:1},8,["active"])]),_:1},512)])):L("",!0)]),_:1})]),_:1},8,["modelValue"])]),D("div",Me,[D("span",Ue,[we,D("span",Ye,Ie((r(e).retrialTip?0:((G=r(e).trialResult)==null?void 0:G.premium)||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})),1)]),D("div",Je,[r(e).retrialTip?(k(),I("div",ze,[Ge,D("span",{class:"close-icon",onClick:oe})])):L("",!0),r(e).canTrial?(k(),R(m,{key:1,type:"primary",onClick:le},{default:y(()=>[He]),_:1})):(k(),R(m,{key:2,type:"primary",onClick:se},{default:y(()=>[Ke]),_:1}))])])]}),_:1})}}});var st=Re(We,[["__scopeId","data-v-a1857f46"]]);export{st as default};
