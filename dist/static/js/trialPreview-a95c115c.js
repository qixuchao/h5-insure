import{_ as e,d as a,g as i,h as t,i as r,r as s,cj as o,z as l,O as n,av as d,k as u,o as c,l as p,w as m,a8 as v,u as f,c as y,b as k,q as g,a as h,e as b,m as P,df as O,aG as L,dg as V,an as I,T as C}from"./index-af98f288.js";import{A as j}from"./index-056f5409.js";import{C as _}from"./index-c019ece7.js";import{i as R,j as D}from"./trial-93daffe6.js";import{_ as F}from"./InsureInfos-dd1ad217.js";import{q as T}from"./createProposal-754706f4.js";import{a as N,I as x}from"./trial-94f26242.js";import{C as w}from"./index-18c56c12.js";import"./index-de590a0b.js";import"./cloneDeep-7ddd4f74.js";import"./get-49d40ce6.js";import"./infoCollection-945e2ec6.js";import"./index-5ccfd650.js";import"./index-c34842c3.js";import"./empth-c0adfdba.js";import"./PayInfo-245a19c2.js";import"./bankCard-e39a8a5d.js";import"./lodash-4b7e451a.js";import"./index-4bfddb7a.js";import"./search-b364081f.js";import"./product-585b0e6f.js";const A={key:0,class:"part-card"},B={key:1,class:"part-card"},E={class:"risk-content"},q={key:0,class:"risk"},S={class:"footer-bar van-safe-area-bottom"},M={class:"trial-result"},U={class:"result-num"},J={class:"trial-operate"};var K=e(a({__name:"trialPreview",setup(e){i();const a=t(),{agentCode:K="test",agencyCode:Y="",tenantId:z=9991000007,insurerCode:G="99",productCode:H="MMBBSF",templateId:W,proposalId:$,saleChannelId:Q}=a.query,X=r(!0),Z=r({personVO:{occupationCodeList:[]}}),ee=r({insuredCode:"",personVO:{occupationCodeList:[]}}),ae=r({}),ie=r({}),te=r({}),re=r(null),se=r({}),oe=r({}),le=s({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[],productInfo:{}});o("premium",se.value);const ne=()=>{const e=JSON.parse(JSON.stringify(ae.value[le.currentPlan])),a=Object.values(e).find((e=>1===e.riskType)),i=Object.values(e).map((e=>{const i=e;return((e,a)=>{var i,t,r,s;const o=e;if("3"===o.chargePeriod){const e=(a.chargePeriod||"").split("_");if(e[1]-=1,1===o.exemptFlag){if("to"===e[0]){let a=0;1===o.exemptType?(null==(i=Z.value.personVO)?void 0:i.birthday)&&(a=parseInt(""+(+new Date-new Date(null==(t=Z.value.personVO)?void 0:t.birthday))/31536e6,10)):2===o.exemptType&&(null==(r=ee.value.personVO)?void 0:r.birthday)&&(a=parseInt(""+(+new Date-new Date(null==(s=ee.value.personVO)?void 0:s.birthday))/31536e6,10)),e[1]=e[1]-a}e[0]="year",o.coveragePeriod=e.join("_")}o.chargePeriod=e.join("_")}})(i,a),i.liabilityVOList=(i.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const a=e;return"0"===a.liabilityAttributeValue&&(a.liabilityAttributeValue=""),a})),i})),t={holder:Z.value,productCode:le.riskBaseInfo.productCode,insuredVOList:[{...ee.value,productPlanVOList:[{planCode:le.currentPlan||"",insurerCode:le.riskBaseInfo.insurerCode,riskVOList:i}]}]};D({...t}).then((({code:e,data:a})=>{if("10000"===e){(null==a?void 0:a.errorInfo)&&C(`${a.errorInfo}`),le.retrialTip=!1,le.trialResult=a,le.canTrial=!1;const e={},i=(a=[])=>{(a||[]).forEach((a=>{var t;e[a.riskCode]=a,(null==(t=a.riskPremiumDetailVOList)?void 0:t.length)&&i(a.riskPremiumDetailVOList)}))};i(a.riskPremiumDetailVOList),((e,a)=>{le.insuredRiskList=e.map((e=>{var i,t;return{initialAmount:null==(i=a[e.riskCode])?void 0:i.amount,amountUnit:1,annuityDrawFrequency:e.annuityDrawFrequency,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:N[e.chargePeriod.split("_")[0]],insurancePeriodType:x["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:null==(t=a[e.riskCode])?void 0:t.premium,liabilityDetails:e.liabilityVOList.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:le.riskBaseInfo.id}}))})(t.insuredVOList[0].productPlanVOList[0].riskVOList,e),Object.assign(se.value,e)}}))},de=()=>{var e,a,i,t,r;Promise.all([null==(a=null==(e=ie.value)?void 0:e.validateForm)?void 0:a.call(e),null==(t=null==(i=te.value)?void 0:i.validateForm)?void 0:t.call(i),null==(r=re.value)?void 0:r.validate()]).then((()=>{ne()}),(e=>{var a;(null==e?void 0:e.length)&&(null==(a=null==re?void 0:re.value)||a.scrollToField(e[0].name))}))},ue=()=>{R({productCode:H,source:$?2:1}).then((({code:e,data:a})=>{var i,t;"10000"===e&&(oe.value=a,le.riskBaseInfo=a.productBasicInfoVO,(a.productRelationPlanVOList.length?a.productRelationPlanVOList:a.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,a)=>{0===a&&(le.currentPlan=e.planCode||"0"),$||Object.assign(ae.value,{[e.planCode||a]:{}})})),le.riskData=(null==(i=a.productRiskVoList[0])?void 0:i.riskDetailVOList)||[],le.riskPlanData=a.productRelationPlanVOList||[],$&&(t=a.productBasicInfoVO.id,T({id:$,tenantId:z}).then((({code:e,data:a})=>{var i;if("10000"===e){const{proposalInsuredProductList:e=[],...r}=(null==(i=a.proposalInsuredList)?void 0:i[0])||{};Object.assign(Z.value.personVO,a.proposalHolder);const s=e.find((e=>e.productId===t));Object.assign(ee.value.personVO,r,{occupationCodeList:(null==s?void 0:s.occupationCodeList)||[]});const o={};((null==s?void 0:s.proposalProductRiskList)||[]).forEach((e=>{o[e.riskId]=e})),Object.assign(ae.value,{0:o})}}))))})).finally((()=>{}))},ce=e=>{le.holderFactor=e.holderFactorList,le.insuredFactor=e.insuredFactorList,le.ageRange=e.ageRange};return l([()=>ae.value,()=>Z.value,()=>ee.value],(e=>{e&&!le.canTrial&&(le.canTrial=!0)}),{deep:!0}),n((()=>{})),d((()=>{ue(),O({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:a})=>{if("10000"===e){const e={};a.forEach((a=>{e[a.dictCode]=a.dictItemList})),le.enumList=e}}))})),(e,a)=>{const i=L,t=u("RiskList"),r=V,s=_,o=w,l=I,n=j,d=u("ProPageWrap");return c(),p(d,{class:"page-trial-wrapper"},{default:m((()=>{var e;return[v(" 试算因子渲染 参考short中表单渲染 -------- 投保人试算因子 "),f(le).holderFactor.length?(c(),y("div",A,[k(i,{title:"投保人"})])):g("",!0),v(" 投保人试算因子 "),f(le).insuredFactor.length?(c(),y("div",B,[k(i,{title:"被保人"})])):g("",!0),v(" 保障方案 "),h("div",E,[k(o,{modelValue:f(le).collapseName,"onUpdate:modelValue":a[0]||(a[0]=e=>f(le).collapseName=e)},{default:m((()=>[k(s,{name:"1"},{title:m((()=>[k(i,{title:"投保方案"})])),default:m((()=>[f(le).riskData.length&&f(ae)[0]?(c(),y("div",q,[k(r,{ref_key:"riskFormRef",ref:re,"input-align":"right","error-message-align":"right"},{default:m((()=>[k(t,{"risk-info":f(ae)[0],enums:f(le).enumList,"origin-data":f(le).riskData,"pick-factor":ce},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):g("",!0)])),_:1})])),_:1},8,["modelValue"])]),h("div",S,[h("span",M,[v("总保费"),h("span",U,b((f(le).retrialTip?0:(null==(e=f(le).trialResult)?void 0:e.premium)||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})),1)]),h("div",J,[f(le).canTrial?(c(),p(l,{key:0,type:"primary",onClick:de},{default:m((()=>[v("立即投保")])),_:1})):g("",!0)])]),k(n,{show:f(X),"onUpdate:show":a[1]||(a[1]=e=>P(X)?X.value=e:null),title:"标题",style:{height:"100%"}},{default:m((()=>[f(oe).productCode?(c(),p(F,{key:0,class:"content","origin-data":f(oe)},null,8,["origin-data"])):g("",!0)])),_:1},8,["show"])]})),_:1})}}}),[["__scopeId","data-v-a5e5324e"]]);export{K as default};
