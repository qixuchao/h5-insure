import{_ as e,d as a,u as i,a as r,r as t,A as o,aB as s,a8 as n,ao as l,b as d,c as u,e as c,w as p,l as m,g as f,f as v,j as k,i as g,F as y,h as C,t as I,n as P,D as h,N as O,E as V,an as b,O as L}from"./index-dd407709.js";import{P as D,a as R}from"./index-dae190eb.js";import{i as _,p as T}from"./trial-4dfba19f.js";import{c as N}from"./createProposal-4730dd4d.js";import{u as B}from"./useStorage-ae16d490.js";import{b as F,a as j}from"./trial-63bf8d08.js";import"./pdfh5-3b8067b2.js";import"./pdfdist-964d560e.js";import"./useDicData-da8f3fad.js";const A={key:0,class:"part-card"},w={key:1,class:"part-card"},x={class:"risk-content"},E={key:0,class:"risk"},S={key:1,class:"plan-risk"},q={class:"footer-bar van-safe-area-bottom"},U={class:"trial-result"},M=P("总保费"),z={class:"result-num"},H={class:"trial-operate"},J={key:0,class:"retrial-tip"},K=P(" 条件更改后，需要重新试算 "),Y=P("去试算"),W=P("立即投保");var G=e(a({setup(e){var a;const P=i(),G=r(),{agentCode:Q="test",agencyCode:X="",tenantId:Z=9991000007,insurerCode:$="99",proposalId:ee,saleChannelId:ae}=G.query;let{productCode:ie="MMBBSF",templateId:re=1}=G.query;const te=t({personVO:{occupationCodeList:[]}}),oe=t({insuredCode:"",personVO:{occupationCodeList:[]}}),se=t({}),ne=t({}),le=t({}),de=t(null),ue=t({}),ce=o({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[]});ee&&(ie=null==(a=G.query||{})?void 0:a.productCenterCode),s("premium",ue.value),B().get("userInfo");const pe=()=>{ce.retrialTip=!1},me=()=>{h({agencyId:X,saleUserId:Q,saleChannelId:ae,tenantId:Z,venderCode:ce.riskBaseInfo.insurerCode,orderDataSource:1,proposalId:ee,extInfo:{templateId:+(re||1),pageCode:"premiumTrial",iseeBizNo:window.iseeBiz,buttonCode:O.premiumTrial},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{extInfo:{},tenantOrderProductList:[{productCode:ce.riskBaseInfo.productCode||"",productName:ce.riskBaseInfo.productName||"",premium:ce.trialResult.premium||0,tenantOrderRiskList:ce.insuredRiskList}]}]}).then((({code:e,data:a})=>{"10000"===e&&"jumpToPage"===a.pageAction.pageAction&&P.push({path:V[a.pageAction.data.nextPageCode],query:{insurerCode:ce.riskBaseInfo.insurerCode,templateId:re,...G.query,productCategory:ce.riskBaseInfo.productCategory,orderNo:a.pageAction.data.orderNo}})}))},fe=()=>{const e=JSON.parse(JSON.stringify(se.value[ce.currentPlan])),a=Object.values(e).find((e=>1===e.riskType)),i=Object.values(e).map((e=>{const i=e;return((e,a)=>{var i,r,t,o;const s=e;if("3"===s.chargePeriod){const e=(a.chargePeriod||"").split("_");if(e[1]-=1,1===s.exemptFlag){if("to"===e[0]){let a=0;1===s.exemptType?(null==(i=te.value.personVO)?void 0:i.birthday)&&(a=parseInt(""+(+new Date-new Date(null==(r=te.value.personVO)?void 0:r.birthday))/31536e6,10)):2===s.exemptType&&(null==(t=oe.value.personVO)?void 0:t.birthday)&&(a=parseInt(""+(+new Date-new Date(null==(o=oe.value.personVO)?void 0:o.birthday))/31536e6,10)),e[1]=e[1]-a}e[0]="year",s.coveragePeriod=e.join("_")}s.chargePeriod=e.join("_")}})(i,a),i.liabilityVOList=(i.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const a=e;return"0"===a.liabilityAttributeValue&&(a.liabilityAttributeValue=""),a})),i})),r={holder:te.value,productCode:ce.riskBaseInfo.productCode,insuredVOList:[{...oe.value,productPlanVOList:[{planCode:ce.currentPlan||"",insurerCode:ce.riskBaseInfo.insurerCode,riskVOList:i}]}]};T({...r}).then((({code:e,data:a})=>{if("10000"===e){ce.retrialTip=!1,ce.trialResult=a,ce.canTrial=!1;const e={},i=(a=[])=>{(a||[]).forEach((a=>{var r;e[a.riskCode]=a,(null==(r=a.riskPremiumDetailVOList)?void 0:r.length)&&i(a.riskPremiumDetailVOList)}))};i(a.riskPremiumDetailVOList),((e,a)=>{ce.insuredRiskList=e.map((e=>{var i,r;return{initialAmount:null==(i=a[e.riskCode])?void 0:i.amount,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:F[e.chargePeriod.split("_")[0]],insurancePeriodType:j["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:null==(r=a[e.riskCode])?void 0:r.premium,liabilityDetails:e.liabilityVOList.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:ce.riskBaseInfo.id}}))})(r.insuredVOList[0].productPlanVOList[0].riskVOList,e),Object.assign(ue.value,e)}}))},ve=()=>{var e,a,i,r,t;Promise.all([null==(a=null==(e=ne.value)?void 0:e.validateForm)?void 0:a.call(e),null==(r=null==(i=le.value)?void 0:i.validateForm)?void 0:r.call(i),null==(t=de.value)?void 0:t.validate()]).then((()=>{fe()}),(e=>{var a;(null==e?void 0:e.length)&&(null==(a=null==de?void 0:de.value)||a.scrollToField(e[0].name))}))},ke=()=>{_({productCode:ie,source:ee?2:1}).then((({code:e,data:a})=>{var i,r,t,o;"10000"===e&&(ce.riskBaseInfo=a.productBasicInfoVO,(a.productRelationPlanVOList.length?a.productRelationPlanVOList:a.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,a)=>{0===a&&(ce.currentPlan=e.planCode||"0"),ee||Object.assign(se.value,{[e.planCode||a]:{}})})),ee&&(t=ce.riskBaseInfo.productCategory,o=ce.riskBaseInfo.insurerCode,L({productCategory:t,venderCode:o}).then((e=>{var a;"10000"===e.code&&(re=null==(a=e.data)?void 0:a.id)}))),ce.riskData=(null==(i=a.productRiskVoList[0])?void 0:i.riskDetailVOList)||[],ce.riskPlanData=a.productRelationPlanVOList||[],ee&&(r=a.productBasicInfoVO.id,N({id:ee,tenantId:Z}).then((({code:e,data:a})=>{var i;if("10000"===e){const{proposalInsuredProductList:e=[],...t}=(null==(i=a.proposalInsuredList)?void 0:i[0])||{};Object.assign(te.value.personVO,a.proposalHolder);const o=e.find((e=>e.productId===r));Object.assign(oe.value.personVO,t,{occupationCodeList:(null==o?void 0:o.occupationCodeList)||[]});const s={};((null==o?void 0:o.proposalProductRiskList)||[]).forEach((e=>{s[e.riskId]=e})),Object.assign(se.value,{0:s})}}))))})).finally((()=>{}))},ge=e=>{ce.holderFactor=e.holderFactorList,ce.insuredFactor=e.insuredFactorList,ce.ageRange=e.ageRange};return n([()=>se.value,()=>te.value,()=>oe.value],(e=>{e&&!ce.canTrial&&(ce.canTrial=!0,ce.retrialTip=!0)}),{deep:!0}),l((()=>{ke(),b({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:a})=>{if("10000"===e){const e={};a.forEach((a=>{e[a.dictCode]=a.dictItemList})),ce.enumList=e}}))})),(e,a)=>{const i=d("ProTitle"),r=d("VanForm"),t=d("ProTabButton"),o=d("VanTab"),s=d("VanTabs"),n=d("van-collapse-item"),l=d("van-collapse"),P=d("VanButton"),h=d("ProPageWrap");return u(),c(h,{class:"page-trial-wrapper"},{default:p((()=>{var e,d,h;return[m(ce).holderFactor.length?(u(),f("div",A,[v(i,{title:"投保人"}),v(D,{ref_key:"holderRef",ref:ne,"insured-code":null==(e=m(ce).riskBaseInfo)?void 0:e.insurerCode,"form-info":te.value.personVO,"factor-list":m(ce).holderFactor,"age-range":m(ce).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):k("",!0),m(ce).insuredFactor.length?(u(),f("div",w,[v(i,{title:"被保人"}),v(D,{ref_key:"insuredRef",ref:le,"insured-code":null==(d=m(ce).riskBaseInfo)?void 0:d.insurerCode,"form-info":oe.value.personVO,"factor-list":m(ce).insuredFactor,"age-range":m(ce).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):k("",!0),g("div",x,[v(l,{modelValue:m(ce).collapseName,"onUpdate:modelValue":a[1]||(a[1]=e=>m(ce).collapseName=e)},{default:p((()=>[v(n,{name:"1"},{title:p((()=>[v(i,{title:"投保方案"})])),default:p((()=>[m(ce).riskData.length&&se.value[0]?(u(),f("div",E,[v(r,{ref_key:"riskFormRef",ref:de,"input-align":"right","error-message-align":"right"},{default:p((()=>[v(R,{"risk-info":se.value[0],enums:m(ce).enumList,"origin-data":m(ce).riskData,"pick-factor":ge},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):k("",!0),m(ce).riskPlanData.length?(u(),f("div",S,[v(r,{ref_key:"riskFormRef",ref:de,"input-align":"right","error-message-align":"right"},{default:p((()=>[v(s,{active:m(ce).currentPlan,"onUpdate:active":a[0]||(a[0]=e=>m(ce).currentPlan=e)},{default:p((()=>[(u(!0),f(y,null,C(m(ce).riskPlanData,(e=>(u(),c(o,{key:e.planCode,name:e.planCode,title:e.planName},{title:p((()=>[v(t,{title:e.planName,active:m(ce).currentPlan===e.planCode},null,8,["title","active"])])),default:p((()=>{var a;return[e.planCode===m(ce).currentPlan?(u(),c(R,{key:0,"risk-info":se.value[e.planCode],enums:m(ce).enumList,"origin-data":null==(a=e.productRiskVoList)?void 0:a[0].riskDetailVOList,"pick-factor":ge},null,8,["risk-info","enums","origin-data"])):k("",!0)]})),_:2},1032,["name","title"])))),128))])),_:1},8,["active"])])),_:1},512)])):k("",!0)])),_:1})])),_:1},8,["modelValue"])]),g("div",q,[g("span",U,[M,g("span",z,I((m(ce).retrialTip?0:(null==(h=m(ce).trialResult)?void 0:h.premium)||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})),1)]),g("div",H,[m(ce).retrialTip?(u(),f("div",J,[K,g("span",{class:"close-icon",onClick:pe})])):k("",!0),m(ce).canTrial?(u(),c(P,{key:1,type:"primary",onClick:ve},{default:p((()=>[Y])),_:1})):(u(),c(P,{key:2,type:"primary",onClick:me},{default:p((()=>[W])),_:1}))])])]})),_:1})}}}),[["__scopeId","data-v-67d6b9f9"]]);export{G as default};
