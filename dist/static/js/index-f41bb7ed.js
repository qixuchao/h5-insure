import{h as re,aa as se,P as ne,G as P,N as le,a7 as ue,$ as ce,o as de,r as _,k as m,m as L,n as f,B as n,p as I,s as p,v as V,A as D,F as pe,H as me,L as fe,E as B}from"./vendor-4d9de129.js";import{P as M,a as Y}from"./index-065e0787.js";import{i as _e,p as ge}from"./trial-f92eac15.js";import{c as ye}from"./createProposal-7b3018d6.js";import{_ as ke,n as Pe,N as Ce,b as ve,G as he,f as Ie}from"./index-b853de44.js";import{u as Ve}from"./useStorage-e8d61524.js";import{b as De,a as Le}from"./trial-902dbda5.js";import"./useDicData-51d348cd.js";const Oe={key:0,class:"part-card"},Te={key:1,class:"part-card"},Be={class:"risk-content"},Re={key:0,class:"risk"},Ne={key:1,class:"plan-risk"},be={class:"footer-bar van-safe-area-bottom"},Fe={class:"trial-result"},Ee=B("\u603B\u4FDD\u8D39"),Ae={class:"result-num"},xe={class:"trial-operate"},Se={key:0,class:"retrial-tip"},we=B(" \u6761\u4EF6\u66F4\u6539\u540E\uFF0C\u9700\u8981\u91CD\u65B0\u8BD5\u7B97 "),Ue=B("\u53BB\u8BD5\u7B97"),qe=B("\u7ACB\u5373\u6295\u4FDD"),je=re({setup(Me){var S;const G=se(),O=ne(),{agentCode:H="test",agencyCode:$="",tenantId:N=9991000007,insurerCode:Ye="99",proposalId:g,saleChannelId:z}=O.query;let{productCode:b="MMBBSF",templateId:R=1}=O.query;const C=P({personVO:{occupationCodeList:[]}}),v=P({insuredCode:"",personVO:{occupationCodeList:[]}}),y=P({}),F=P({}),E=P({}),h=P(null),A=P({}),e=le({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[]});g&&(b=(S=O.query||{})==null?void 0:S.productCenterCode),ue("premium",A.value),Ve().get("userInfo");const J="premiumTrial",K=()=>{e.retrialTip=!1},W=(o,a)=>{e.insuredRiskList=o.map(t=>{var s,l;return{initialAmount:(s=a[t.riskCode])==null?void 0:s.amount,amountUnit:1,annuityDrawFrequency:t.annuityDrawDate,annuityDrawType:t.annuityDrawType,paymentFrequency:t.paymentFrequency,paymentPeriod:t.chargePeriod.split("_")[1],paymentPeriodType:De[t.chargePeriod.split("_")[0]],insurancePeriodType:Le[t.coveragePeriod==="to_life"?"to_life":t.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+t.coveragePeriod.split("_")[1])?0:t.coveragePeriod.split("_")[1],riskCode:t.riskCode,riskType:t.riskType,riskName:t.riskName,extInfo:{riskId:t.riskId,copy:t.copy},initialPremium:(l=a[t.riskCode])==null?void 0:l.premium,liabilityDetails:t.liabilityVOList.map(i=>({liabilityCode:i.liabilityCode,liabilityName:i.liabilityName,refundMethod:i.liabilityAttributeValue})),productId:e.riskBaseInfo.id}})},X=()=>{Pe({agencyId:$,saleUserId:H,saleChannelId:z,tenantId:N,venderCode:e.riskBaseInfo.insurerCode,orderDataSource:1,proposalId:g,extInfo:{templateId:+(R||1),pageCode:J,iseeBizNo:window.iseeBiz,buttonCode:Ce.premiumTrial},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{extInfo:{},tenantOrderProductList:[{productCode:e.riskBaseInfo.productCode||"",productName:e.riskBaseInfo.productName||"",premium:e.trialResult.premium||0,tenantOrderRiskList:e.insuredRiskList}]}]}).then(({code:o,data:a})=>{o==="10000"&&a.pageAction.pageAction==="jumpToPage"&&G.push({path:ve[a.pageAction.data.nextPageCode],query:{insurerCode:e.riskBaseInfo.insurerCode,templateId:R,...O.query,productCategory:e.riskBaseInfo.productCategory,orderNo:a.pageAction.data.orderNo}})})},Q=(o,a)=>{Ie({productCategory:o,venderCode:a}).then(t=>{var r;t.code==="10000"&&(R=(r=t.data)==null?void 0:r.id)})},Z=(o,a)=>{var r,s,l,i;const t=o;if(t.chargePeriod==="3"){const u=(a.chargePeriod||"").split("_");if(u[1]-=1,t.exemptFlag===1){if(u[0]==="to"){let c=0;t.exemptType===1?(r=C.value.personVO)!=null&&r.birthday&&(c=parseInt(`${(+new Date-new Date((s=C.value.personVO)==null?void 0:s.birthday))/(1e3*60*60*24*365)}`,10)):t.exemptType===2&&(l=v.value.personVO)!=null&&l.birthday&&(c=parseInt(`${(+new Date-new Date((i=v.value.personVO)==null?void 0:i.birthday))/(1e3*60*60*24*365)}`,10)),u[1]=u[1]-c}u[0]="year",t.coveragePeriod=u.join("_")}t.chargePeriod=u.join("_")}},ee=()=>{const o=JSON.parse(JSON.stringify(y.value[e.currentPlan])),a=Object.values(o).find(s=>s.riskType===1),t=Object.values(o).map(s=>{const l=s;return Z(l,a),l.liabilityVOList=(l.liabilityVOList||[]).filter(i=>i.optionalFlag===1||i.liabilityAttributeValue&&i.liabilityAttributeValue!=="-1").map(i=>{const u=i;return u.liabilityAttributeValue==="0"&&(u.liabilityAttributeValue=""),u}),l}),r={holder:C.value,productCode:e.riskBaseInfo.productCode,insuredVOList:[{...v.value,productPlanVOList:[{planCode:e.currentPlan||"",insurerCode:e.riskBaseInfo.insurerCode,riskVOList:t}]}]};ge({...r}).then(({code:s,data:l})=>{if(s==="10000"){e.retrialTip=!1,e.trialResult=l,e.canTrial=!1;const i={},u=(c=[])=>{(c||[]).forEach(k=>{var T;i[k.riskCode]=k,(T=k.riskPremiumDetailVOList)!=null&&T.length&&u(k.riskPremiumDetailVOList)})};u(l.riskPremiumDetailVOList),W(r.insuredVOList[0].productPlanVOList[0].riskVOList,i),Object.assign(A.value,i)}})},te=()=>{var o,a,t,r,s;Promise.all([(a=(o=F.value)==null?void 0:o.validateForm)==null?void 0:a.call(o),(r=(t=E.value)==null?void 0:t.validateForm)==null?void 0:r.call(t),(s=h.value)==null?void 0:s.validate()]).then(()=>{ee()},l=>{var i;l!=null&&l.length&&((i=h==null?void 0:h.value)==null||i.scrollToField(l[0].name))})},ae=()=>{he({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then(({code:a,data:t})=>{if(a==="10000"){const r={};t.forEach(s=>{r[s.dictCode]=s.dictItemList}),e.enumList=r}})},ie=o=>{ye({id:g,tenantId:N}).then(({code:a,data:t})=>{var r;if(a==="10000"){const{proposalInsuredProductList:s=[],...l}=((r=t.proposalInsuredList)==null?void 0:r[0])||{};Object.assign(C.value.personVO,t.proposalHolder);const i=s.find(c=>c.productId===o);Object.assign(v.value.personVO,l,{occupationCodeList:(i==null?void 0:i.occupationCodeList)||[]});const u={};((i==null?void 0:i.proposalProductRiskList)||[]).forEach(c=>{u[c.riskId]=c}),Object.assign(y.value,{0:u})}})},oe=()=>{_e({productCode:b,source:g?2:1}).then(({code:o,data:a})=>{var t;o==="10000"&&(e.riskBaseInfo=a.productBasicInfoVO,(a.productRelationPlanVOList.length?a.productRelationPlanVOList:a.productRiskVoList[0].riskDetailVOList||[]).forEach((r,s)=>{s===0&&(e.currentPlan=r.planCode||"0"),g||Object.assign(y.value,{[r.planCode||s]:{}})}),g&&Q(e.riskBaseInfo.productCategory,e.riskBaseInfo.insurerCode),e.riskData=((t=a.productRiskVoList[0])==null?void 0:t.riskDetailVOList)||[],e.riskPlanData=a.productRelationPlanVOList||[],g&&ie(a.productBasicInfoVO.id))}).finally(()=>{})},x=o=>{e.holderFactor=o.holderFactorList,e.insuredFactor=o.insuredFactorList,e.ageRange=o.ageRange};return ce([()=>y.value,()=>C.value,()=>v.value],o=>{o&&!e.canTrial&&(e.canTrial=!0,e.retrialTip=!0)},{deep:!0}),de(()=>{oe(),ae()}),(o,a)=>{const t=_("ProTitle"),r=_("VanForm"),s=_("ProTabButton"),l=_("VanTab"),i=_("VanTabs"),u=_("van-collapse-item"),c=_("van-collapse"),k=_("VanButton"),T=_("ProPageWrap");return m(),L(T,{class:"page-trial-wrapper"},{default:f(()=>{var w,U,q;return[n(e).holderFactor.length?(m(),I("div",Oe,[p(t,{title:"\u6295\u4FDD\u4EBA"}),p(M,{ref_key:"holderRef",ref:F,"insured-code":(w=n(e).riskBaseInfo)==null?void 0:w.insurerCode,"form-info":C.value.personVO,"factor-list":n(e).holderFactor,"age-range":n(e).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):V("",!0),n(e).insuredFactor.length?(m(),I("div",Te,[p(t,{title:"\u88AB\u4FDD\u4EBA"}),p(M,{ref_key:"insuredRef",ref:E,"insured-code":(U=n(e).riskBaseInfo)==null?void 0:U.insurerCode,"form-info":v.value.personVO,"factor-list":n(e).insuredFactor,"age-range":n(e).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):V("",!0),D("div",Be,[p(c,{modelValue:n(e).collapseName,"onUpdate:modelValue":a[1]||(a[1]=d=>n(e).collapseName=d)},{default:f(()=>[p(u,{name:"1"},{title:f(()=>[p(t,{title:"\u6295\u4FDD\u65B9\u6848"})]),default:f(()=>[n(e).riskData.length&&y.value[0]?(m(),I("div",Re,[p(r,{ref_key:"riskFormRef",ref:h,"input-align":"right","error-message-align":"right"},{default:f(()=>[p(Y,{"risk-info":y.value[0],enums:n(e).enumList,"origin-data":n(e).riskData,"pick-factor":x},null,8,["risk-info","enums","origin-data"])]),_:1},512)])):V("",!0),n(e).riskPlanData.length?(m(),I("div",Ne,[p(r,{ref_key:"riskFormRef",ref:h,"input-align":"right","error-message-align":"right"},{default:f(()=>[p(i,{active:n(e).currentPlan,"onUpdate:active":a[0]||(a[0]=d=>n(e).currentPlan=d)},{default:f(()=>[(m(!0),I(pe,null,me(n(e).riskPlanData,d=>(m(),L(l,{key:d.planCode,name:d.planCode,title:d.planName},{title:f(()=>[p(s,{title:d.planName,active:n(e).currentPlan===d.planCode},null,8,["title","active"])]),default:f(()=>{var j;return[d.planCode===n(e).currentPlan?(m(),L(Y,{key:0,"risk-info":y.value[d.planCode],enums:n(e).enumList,"origin-data":(j=d.productRiskVoList)==null?void 0:j[0].riskDetailVOList,"pick-factor":x},null,8,["risk-info","enums","origin-data"])):V("",!0)]}),_:2},1032,["name","title"]))),128))]),_:1},8,["active"])]),_:1},512)])):V("",!0)]),_:1})]),_:1},8,["modelValue"])]),D("div",be,[D("span",Fe,[Ee,D("span",Ae,fe((n(e).retrialTip?0:((q=n(e).trialResult)==null?void 0:q.premium)||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})),1)]),D("div",xe,[n(e).retrialTip?(m(),I("div",Se,[we,D("span",{class:"close-icon",onClick:K})])):V("",!0),n(e).canTrial?(m(),L(k,{key:1,type:"primary",onClick:te},{default:f(()=>[Ue]),_:1})):(m(),L(k,{key:2,type:"primary",onClick:X},{default:f(()=>[qe]),_:1}))])])]}),_:1})}}});var Qe=ke(je,[["__scopeId","data-v-08f1cdf9"]]);export{Qe as default};
