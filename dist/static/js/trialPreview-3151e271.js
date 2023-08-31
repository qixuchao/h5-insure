import{_ as e,d as a,g as i,h as t,i as r,r as s,aT as o,z as l,O as n,av as d,k as u,o as c,l as p,w as m,a8 as v,u as f,c as b,b as y,q as k,a as g,e as h,m as j,bh as O,aF as P,aZ as L,am as V,T as C}from"./index-b7b909b3.js";import{A as I}from"./index-1db9a579.js";import{C as _}from"./index-848e0c57.js";import{i as D,j as R}from"./trial-7c898340.js";import{_ as F}from"./InsureInfos-86d47940.js";import{q as T}from"./createProposal-71d694e2.js";import{a as x,I as N}from"./trial-6d645cff.js";import{C as w}from"./index-c2209363.js";import"./index-85b786dc.js";import"./cloneDeep-5d541e55.js";import"./keysIn-131bbce9.js";import"./isObjectLike-a9798079.js";import"./_getTag-0507d0b1.js";import"./get-508a1b9b.js";import"./debounce-6981b306.js";import"./infoCollection-42bf6cdf.js";import"./index-d7ad6f79.js";import"./index-af17d322.js";import"./empth-c0adfdba.js";import"./merge-e7788e50.js";import"./index-b19915a7.js";import"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-6a9ab8dc.js";import"./phoneVerify-6efdd32d.js";/* empty css              */import"./index-b55a66af.js";import"./useDicData-93afb491.js";import"./bankCard-2eb9c648.js";import"./lodash-86bcf0c6.js";import"./index-a12c9465.js";import"./search-15dcffee.js";import"./product-585b0e6f.js";const A={key:0,class:"part-card"},B={key:1,class:"part-card"},E={class:"risk-content"},q={key:0,class:"risk"},S={class:"footer-bar van-safe-area-bottom"},M={class:"trial-result"},U={class:"result-num"},J={class:"trial-operate"};var K=e(a({__name:"trialPreview",setup(e){i();const a=t(),{agentCode:K="test",agencyCode:W="",tenantId:Y=9991000007,insurerCode:z="99",productCode:H="MMBBSF",templateId:Z,proposalId:$,saleChannelId:G}=a.query,Q=r(!0),X=r({personVO:{occupationCodeList:[]}}),ee=r({insuredCode:"",personVO:{occupationCodeList:[]}}),ae=r({}),ie=r({}),te=r({}),re=r(null),se=r({}),oe=r({}),le=s({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[],productInfo:{}});o("premium",se.value);const ne=()=>{const e=JSON.parse(JSON.stringify(ae.value[le.currentPlan])),a=Object.values(e).find((e=>1===e.riskType)),i=Object.values(e).map((e=>{const i=e;return((e,a)=>{var i,t,r,s;const o=e;if("3"===o.chargePeriod){const e=(a.chargePeriod||"").split("_");if(e[1]-=1,1===o.exemptFlag){if("to"===e[0]){let a=0;1===o.exemptType?(null==(i=X.value.personVO)?void 0:i.birthday)&&(a=parseInt(""+(+new Date-new Date(null==(t=X.value.personVO)?void 0:t.birthday))/31536e6,10)):2===o.exemptType&&(null==(r=ee.value.personVO)?void 0:r.birthday)&&(a=parseInt(""+(+new Date-new Date(null==(s=ee.value.personVO)?void 0:s.birthday))/31536e6,10)),e[1]=e[1]-a}e[0]="year",o.coveragePeriod=e.join("_")}o.chargePeriod=e.join("_")}})(i,a),i.liabilityVOList=(i.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const a=e;return"0"===a.liabilityAttributeValue&&(a.liabilityAttributeValue=""),a})),i})),t={holder:X.value,productCode:le.riskBaseInfo.productCode,insuredVOList:[{...ee.value,productPlanVOList:[{planCode:le.currentPlan||"",insurerCode:le.riskBaseInfo.insurerCode,riskVOList:i}]}]};R({...t}).then((({code:e,data:a})=>{if("10000"===e){(null==a?void 0:a.errorInfo)&&C(`${a.errorInfo}`),le.retrialTip=!1,le.trialResult=a,le.canTrial=!1;const e={},i=(a=[])=>{(a||[]).forEach((a=>{var t;e[a.riskCode]=a,(null==(t=a.riskPremiumDetailVOList)?void 0:t.length)&&i(a.riskPremiumDetailVOList)}))};i(a.riskPremiumDetailVOList),((e,a)=>{le.insuredRiskList=e.map((e=>{var i,t;return{initialAmount:null==(i=a[e.riskCode])?void 0:i.amount,amountUnit:1,annuityDrawFrequency:e.annuityDrawFrequency,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:x[e.chargePeriod.split("_")[0]],insurancePeriodType:N["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:null==(t=a[e.riskCode])?void 0:t.premium,liabilityDetails:e.liabilityVOList.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:le.riskBaseInfo.id}}))})(t.insuredVOList[0].productPlanVOList[0].riskVOList,e),Object.assign(se.value,e)}}))},de=()=>{var e,a,i,t,r;Promise.all([null==(a=null==(e=ie.value)?void 0:e.validateForm)?void 0:a.call(e),null==(t=null==(i=te.value)?void 0:i.validateForm)?void 0:t.call(i),null==(r=re.value)?void 0:r.validate()]).then((()=>{ne()}),(e=>{var a;(null==e?void 0:e.length)&&(null==(a=null==re?void 0:re.value)||a.scrollToField(e[0].name))}))},ue=()=>{D({productCode:H,source:$?2:1}).then((({code:e,data:a})=>{var i,t;"10000"===e&&(oe.value=a,le.riskBaseInfo=a.productBasicInfoVO,(a.productRelationPlanVOList.length?a.productRelationPlanVOList:a.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,a)=>{0===a&&(le.currentPlan=e.planCode||"0"),$||Object.assign(ae.value,{[e.planCode||a]:{}})})),le.riskData=(null==(i=a.productRiskVoList[0])?void 0:i.riskDetailVOList)||[],le.riskPlanData=a.productRelationPlanVOList||[],$&&(t=a.productBasicInfoVO.id,T({id:$,tenantId:Y}).then((({code:e,data:a})=>{var i;if("10000"===e){const{proposalInsuredProductList:e=[],...r}=(null==(i=a.proposalInsuredList)?void 0:i[0])||{};Object.assign(X.value.personVO,a.proposalHolder);const s=e.find((e=>e.productId===t));Object.assign(ee.value.personVO,r,{occupationCodeList:(null==s?void 0:s.occupationCodeList)||[]});const o={};((null==s?void 0:s.proposalProductRiskList)||[]).forEach((e=>{o[e.riskId]=e})),Object.assign(ae.value,{0:o})}}))))})).finally((()=>{}))},ce=e=>{le.holderFactor=e.holderFactorList,le.insuredFactor=e.insuredFactorList,le.ageRange=e.ageRange};return l([()=>ae.value,()=>X.value,()=>ee.value],(e=>{e&&!le.canTrial&&(le.canTrial=!0)}),{deep:!0}),n((()=>{})),d((()=>{ue(),O({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:a})=>{if("10000"===e){const e={};a.forEach((a=>{e[a.dictCode]=a.dictItemList})),le.enumList=e}}))})),(e,a)=>{const i=P,t=u("RiskList"),r=L,s=_,o=w,l=V,n=I,d=u("ProPageWrap");return c(),p(d,{class:"page-trial-wrapper"},{default:m((()=>{var e;return[v(" 试算因子渲染 参考short中表单渲染 -------- 投保人试算因子 "),f(le).holderFactor.length?(c(),b("div",A,[y(i,{title:"投保人"})])):k("",!0),v(" 投保人试算因子 "),f(le).insuredFactor.length?(c(),b("div",B,[y(i,{title:"被保人"})])):k("",!0),v(" 保障方案 "),g("div",E,[y(o,{modelValue:f(le).collapseName,"onUpdate:modelValue":a[0]||(a[0]=e=>f(le).collapseName=e)},{default:m((()=>[y(s,{name:"1"},{title:m((()=>[y(i,{title:"投保方案"})])),default:m((()=>[f(le).riskData.length&&f(ae)[0]?(c(),b("div",q,[y(r,{ref_key:"riskFormRef",ref:re,"input-align":"right","error-message-align":"right"},{default:m((()=>[y(t,{"risk-info":f(ae)[0],enums:f(le).enumList,"origin-data":f(le).riskData,"pick-factor":ce},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):k("",!0)])),_:1})])),_:1},8,["modelValue"])]),g("div",S,[g("span",M,[v("总保费"),g("span",U,h((f(le).retrialTip?0:(null==(e=f(le).trialResult)?void 0:e.premium)||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})),1)]),g("div",J,[f(le).canTrial?(c(),p(l,{key:0,type:"primary",onClick:de},{default:m((()=>[v("立即投保")])),_:1})):k("",!0)])]),y(n,{show:f(Q),"onUpdate:show":a[1]||(a[1]=e=>j(Q)?Q.value=e:null),title:"标题",style:{height:"100%"}},{default:m((()=>[f(oe).productCode?(c(),p(F,{key:0,class:"content","origin-data":f(oe)},null,8,["origin-data"])):k("",!0)])),_:1},8,["show"])]})),_:1})}}}),[["__scopeId","data-v-a5e5324e"]]);export{K as default};
