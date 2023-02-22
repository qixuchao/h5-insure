import{_ as e,d as a,u as i,a as r,r as t,H as o,b7 as s,am as n,aD as l,b5 as d,bF as u,bG as c,B as p,c as m,e as f,w as v,g as k,h as g,f as y,k as C,j as I,F as P,i as h,n as L,t as O,L as b,N as V,M as _,aC as D,b4 as R,b as T,Z as N}from"./index-d9e24409.js";import{C as F}from"./index-00a67243.js";import{P as B,a as j}from"./index-e1af4eb6.js";import{i as x,p as w}from"./trial-f26fe01f.js";import{c as A}from"./createProposal-15f93ced.js";import{u as S}from"./useStorage-4a1c3ae4.js";import{b as q,a as E}from"./trial-85396cad.js";import{C as M}from"./index-060ea031.js";import"./pdfh5-008ca364.js";import"./useDicData-fbfc42a3.js";const U={key:0,class:"part-card"},H={key:1,class:"part-card"},z={class:"risk-content"},J={key:0,class:"risk"},K={key:1,class:"plan-risk"},Y={class:"footer-bar van-safe-area-bottom"},G={class:"trial-result"},W={class:"result-num"},Z={class:"trial-operate"},Q={key:0,class:"retrial-tip"};var X=e(a({__name:"index",setup(e){var a;const X=i(),$=r(),{agentCode:ee="test",agencyCode:ae="",tenantId:ie=9991000007,insurerCode:re="99",proposalId:te,saleChannelId:oe}=$.query;let{productCode:se="MMBBSF",templateId:ne=1}=$.query;const le=t({personVO:{occupationCodeList:[]}}),de=t({insuredCode:"",personVO:{occupationCodeList:[]}}),ue=t({}),ce=t({}),pe=t({}),me=t(null),fe=t({}),ve=o({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[]});te&&(se=null==(a=$.query||{})?void 0:a.productCenterCode),s("premium",fe.value),S().get("userInfo");const ke=()=>{ve.retrialTip=!1},ge=()=>{b({agencyId:ae,saleUserId:ee,saleChannelId:oe,tenantId:ie,venderCode:ve.riskBaseInfo.insurerCode,orderDataSource:1,proposalId:te,extInfo:{templateId:+(ne||1),pageCode:"premiumTrial",iseeBizNo:window.iseeBiz,buttonCode:V.premiumTrial},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{extInfo:{},tenantOrderProductList:[{productCode:ve.riskBaseInfo.productCode||"",productName:ve.riskBaseInfo.productName||"",premium:ve.trialResult.premium||0,tenantOrderRiskList:ve.insuredRiskList}]}]}).then((({code:e,data:a})=>{"10000"===e&&"jumpToPage"===a.pageAction.pageAction&&X.push({path:_[a.pageAction.data.nextPageCode],query:{insurerCode:ve.riskBaseInfo.insurerCode,templateId:ne,...$.query,productCategory:ve.riskBaseInfo.productCategory,orderNo:a.pageAction.data.orderNo}})}))},ye=()=>{const e=JSON.parse(JSON.stringify(ue.value[ve.currentPlan])),a=Object.values(e).find((e=>1===e.riskType)),i=Object.values(e).map((e=>{const i=e;return((e,a)=>{var i,r,t,o;const s=e;if("3"===s.chargePeriod){const e=(a.chargePeriod||"").split("_");if(e[1]-=1,1===s.exemptFlag){if("to"===e[0]){let a=0;1===s.exemptType?(null==(i=le.value.personVO)?void 0:i.birthday)&&(a=parseInt(""+(+new Date-new Date(null==(r=le.value.personVO)?void 0:r.birthday))/31536e6,10)):2===s.exemptType&&(null==(t=de.value.personVO)?void 0:t.birthday)&&(a=parseInt(""+(+new Date-new Date(null==(o=de.value.personVO)?void 0:o.birthday))/31536e6,10)),e[1]=e[1]-a}e[0]="year",s.coveragePeriod=e.join("_")}s.chargePeriod=e.join("_")}})(i,a),i.liabilityVOList=(i.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const a=e;return"0"===a.liabilityAttributeValue&&(a.liabilityAttributeValue=""),a})),i})),r={holder:le.value,productCode:ve.riskBaseInfo.productCode,insuredVOList:[{...de.value,productPlanVOList:[{planCode:ve.currentPlan||"",insurerCode:ve.riskBaseInfo.insurerCode,riskVOList:i}]}]};w({...r}).then((({code:e,data:a})=>{if("10000"===e){ve.retrialTip=!1,ve.trialResult=a,ve.canTrial=!1;const e={},i=(a=[])=>{(a||[]).forEach((a=>{var r;e[a.riskCode]=a,(null==(r=a.riskPremiumDetailVOList)?void 0:r.length)&&i(a.riskPremiumDetailVOList)}))};i(a.riskPremiumDetailVOList),((e,a)=>{ve.insuredRiskList=e.map((e=>{var i,r;return{initialAmount:null==(i=a[e.riskCode])?void 0:i.amount,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:q[e.chargePeriod.split("_")[0]],insurancePeriodType:E["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:null==(r=a[e.riskCode])?void 0:r.premium,liabilityDetails:e.liabilityVOList.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:ve.riskBaseInfo.id}}))})(r.insuredVOList[0].productPlanVOList[0].riskVOList,e),Object.assign(fe.value,e)}}))},Ce=()=>{var e,a,i,r,t;Promise.all([null==(a=null==(e=ce.value)?void 0:e.validateForm)?void 0:a.call(e),null==(r=null==(i=pe.value)?void 0:i.validateForm)?void 0:r.call(i),null==(t=me.value)?void 0:t.validate()]).then((()=>{ye()}),(e=>{var a;(null==e?void 0:e.length)&&(null==(a=null==me?void 0:me.value)||a.scrollToField(e[0].name))}))},Ie=()=>{x({productCode:se,source:te?2:1}).then((({code:e,data:a})=>{var i,r,t,o;"10000"===e&&(ve.riskBaseInfo=a.productBasicInfoVO,(a.productRelationPlanVOList.length?a.productRelationPlanVOList:a.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,a)=>{0===a&&(ve.currentPlan=e.planCode||"0"),te||Object.assign(ue.value,{[e.planCode||a]:{}})})),te&&(t=ve.riskBaseInfo.productCategory,o=ve.riskBaseInfo.insurerCode,N({productCategory:t,venderCode:o}).then((e=>{var a;"10000"===e.code&&(ne=null==(a=e.data)?void 0:a.id)}))),ve.riskData=(null==(i=a.productRiskVoList[0])?void 0:i.riskDetailVOList)||[],ve.riskPlanData=a.productRelationPlanVOList||[],te&&(r=a.productBasicInfoVO.id,A({id:te,tenantId:ie}).then((({code:e,data:a})=>{var i;if("10000"===e){const{proposalInsuredProductList:e=[],...t}=(null==(i=a.proposalInsuredList)?void 0:i[0])||{};Object.assign(le.value.personVO,a.proposalHolder);const o=e.find((e=>e.productId===r));Object.assign(de.value.personVO,t,{occupationCodeList:(null==o?void 0:o.occupationCodeList)||[]});const s={};((null==o?void 0:o.proposalProductRiskList)||[]).forEach((e=>{s[e.riskId]=e})),Object.assign(ue.value,{0:s})}}))))})).finally((()=>{}))},Pe=e=>{ve.holderFactor=e.holderFactorList,ve.insuredFactor=e.insuredFactorList,ve.ageRange=e.ageRange};return n([()=>ue.value,()=>le.value,()=>de.value],(e=>{e&&!ve.canTrial&&(ve.canTrial=!0,ve.retrialTip=!0)}),{deep:!0}),l((()=>{Ie(),D({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:a})=>{if("10000"===e){const e={};a.forEach((a=>{e[a.dictCode]=a.dictItemList})),ve.enumList=e}}))})),(e,a)=>{const i=R,r=d,t=T("ProTabButton"),o=u,s=c,n=F,l=M,b=p,V=T("ProPageWrap");return m(),f(V,{class:"page-trial-wrapper"},{default:v((()=>{var e,d,u;return[k(ve).holderFactor.length?(m(),g("div",U,[y(i,{title:"投保人"}),y(B,{ref_key:"holderRef",ref:ce,"insured-code":null==(e=k(ve).riskBaseInfo)?void 0:e.insurerCode,"form-info":k(le).personVO,"factor-list":k(ve).holderFactor,"age-range":k(ve).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):C("",!0),k(ve).insuredFactor.length?(m(),g("div",H,[y(i,{title:"被保人"}),y(B,{ref_key:"insuredRef",ref:pe,"insured-code":null==(d=k(ve).riskBaseInfo)?void 0:d.insurerCode,"form-info":k(de).personVO,"factor-list":k(ve).insuredFactor,"age-range":k(ve).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):C("",!0),I("div",z,[y(l,{modelValue:k(ve).collapseName,"onUpdate:modelValue":a[1]||(a[1]=e=>k(ve).collapseName=e)},{default:v((()=>[y(n,{name:"1"},{title:v((()=>[y(i,{title:"投保方案"})])),default:v((()=>[k(ve).riskData.length&&k(ue)[0]?(m(),g("div",J,[y(r,{ref_key:"riskFormRef",ref:me,"input-align":"right","error-message-align":"right"},{default:v((()=>[y(j,{"risk-info":k(ue)[0],enums:k(ve).enumList,"origin-data":k(ve).riskData,"pick-factor":Pe},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):C("",!0),k(ve).riskPlanData.length?(m(),g("div",K,[y(r,{ref_key:"riskFormRef",ref:me,"input-align":"right","error-message-align":"right"},{default:v((()=>[y(s,{active:k(ve).currentPlan,"onUpdate:active":a[0]||(a[0]=e=>k(ve).currentPlan=e)},{default:v((()=>[(m(!0),g(P,null,h(k(ve).riskPlanData,(e=>(m(),f(o,{key:e.planCode,name:e.planCode,title:e.planName},{title:v((()=>[y(t,{title:e.planName,active:k(ve).currentPlan===e.planCode},null,8,["title","active"])])),default:v((()=>{var a;return[e.planCode===k(ve).currentPlan?(m(),f(j,{key:0,"risk-info":k(ue)[e.planCode],enums:k(ve).enumList,"origin-data":null==(a=e.productRiskVoList)?void 0:a[0].riskDetailVOList,"pick-factor":Pe},null,8,["risk-info","enums","origin-data"])):C("",!0)]})),_:2},1032,["name","title"])))),128))])),_:1},8,["active"])])),_:1},512)])):C("",!0)])),_:1})])),_:1},8,["modelValue"])]),I("div",Y,[I("span",G,[L("总保费"),I("span",W,O((k(ve).retrialTip?0:(null==(u=k(ve).trialResult)?void 0:u.premium)||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})),1)]),I("div",Z,[k(ve).retrialTip?(m(),g("div",Q,[L(" 条件更改后，需要重新试算 "),I("span",{class:"close-icon",onClick:ke})])):C("",!0),k(ve).canTrial?(m(),f(b,{key:1,type:"primary",onClick:Ce},{default:v((()=>[L("去试算")])),_:1})):(m(),f(b,{key:2,type:"primary",onClick:ge},{default:v((()=>[L("立即投保")])),_:1}))])])]})),_:1})}}}),[["__scopeId","data-v-67d6b9f9"]]);export{X as default};
