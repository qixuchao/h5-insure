import{_ as e,d as a,u as i,a as r,r as t,J as o,ba as s,cv as n,an as l,aE as d,aW as u,bE as c,bF as p,B as m,c as f,e as v,w as k,g,h as y,f as C,k as I,j as P,F as h,i as O,n as L,t as V,M as b,N as _,O as R,aD as D,aV as T,b as N,Z as F}from"./index-a44d8740.js";import{C as B}from"./index-d105ea71.js";import{i as j,p as x}from"./trial-cedcaeca.js";import{c as w}from"./createProposal-bc9a382c.js";import{b as A,a as E}from"./trial-b4d6d569.js";import{C as q}from"./index-ee286f9b.js";import"./pdfh5-008ca364.js";const S={key:0,class:"part-card"},M={key:1,class:"part-card"},U={class:"risk-content"},J={key:0,class:"risk"},z={key:1,class:"plan-risk"},H={class:"footer-bar van-safe-area-bottom"},K={class:"trial-result"},W={class:"result-num"},Y={class:"trial-operate"},Z={key:0,class:"retrial-tip"};var G=e(a({__name:"index",setup(e){var a;const G=i(),Q=r(),{agentCode:X="test",agencyCode:$="",tenantId:ee=9991000007,insurerCode:ae="99",proposalId:ie,saleChannelId:re}=Q.query;let{productCode:te="MMBBSF",templateId:oe=1}=Q.query;const se=t({personVO:{occupationCodeList:[]}}),ne=t({insuredCode:"",personVO:{occupationCodeList:[]}}),le=t({}),de=t({}),ue=t({}),ce=t(null),pe=t({}),me=o({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[]});ie&&(te=null==(a=Q.query||{})?void 0:a.productCenterCode),s("premium",pe.value),n().get("userInfo");const fe=()=>{me.retrialTip=!1},ve=()=>{b({agencyId:$,saleUserId:X,saleChannelId:re,tenantId:ee,venderCode:me.riskBaseInfo.insurerCode,orderDataSource:1,proposalId:ie,extInfo:{templateId:+(oe||1),pageCode:"premiumTrial",iseeBizNo:window.iseeBiz,buttonCode:_.premiumTrial},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{extInfo:{},tenantOrderProductList:[{productCode:me.riskBaseInfo.productCode||"",productName:me.riskBaseInfo.productName||"",premium:me.trialResult.premium||0,tenantOrderRiskList:me.insuredRiskList}]}]}).then((({code:e,data:a})=>{"10000"===e&&"jumpToPage"===a.pageAction.pageAction&&G.push({path:R[a.pageAction.data.nextPageCode],query:{insurerCode:me.riskBaseInfo.insurerCode,templateId:oe,...Q.query,productCategory:me.riskBaseInfo.productCategory,orderNo:a.pageAction.data.orderNo}})}))},ke=()=>{const e=JSON.parse(JSON.stringify(le.value[me.currentPlan])),a=Object.values(e).find((e=>1===e.riskType)),i=Object.values(e).map((e=>{const i=e;return((e,a)=>{var i,r,t,o;const s=e;if("3"===s.chargePeriod){const e=(a.chargePeriod||"").split("_");if(e[1]-=1,1===s.exemptFlag){if("to"===e[0]){let a=0;1===s.exemptType?(null==(i=se.value.personVO)?void 0:i.birthday)&&(a=parseInt(""+(+new Date-new Date(null==(r=se.value.personVO)?void 0:r.birthday))/31536e6,10)):2===s.exemptType&&(null==(t=ne.value.personVO)?void 0:t.birthday)&&(a=parseInt(""+(+new Date-new Date(null==(o=ne.value.personVO)?void 0:o.birthday))/31536e6,10)),e[1]=e[1]-a}e[0]="year",s.coveragePeriod=e.join("_")}s.chargePeriod=e.join("_")}})(i,a),i.liabilityVOList=(i.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const a=e;return"0"===a.liabilityAttributeValue&&(a.liabilityAttributeValue=""),a})),i})),r={holder:se.value,productCode:me.riskBaseInfo.productCode,insuredVOList:[{...ne.value,productPlanVOList:[{planCode:me.currentPlan||"",insurerCode:me.riskBaseInfo.insurerCode,riskVOList:i}]}]};x({...r}).then((({code:e,data:a})=>{if("10000"===e){me.retrialTip=!1,me.trialResult=a,me.canTrial=!1;const e={},i=(a=[])=>{(a||[]).forEach((a=>{var r;e[a.riskCode]=a,(null==(r=a.riskPremiumDetailVOList)?void 0:r.length)&&i(a.riskPremiumDetailVOList)}))};i(a.riskPremiumDetailVOList),((e,a)=>{me.insuredRiskList=e.map((e=>{var i,r;return{initialAmount:null==(i=a[e.riskCode])?void 0:i.amount,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:A[e.chargePeriod.split("_")[0]],insurancePeriodType:E["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:null==(r=a[e.riskCode])?void 0:r.premium,liabilityDetails:e.liabilityVOList.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:me.riskBaseInfo.id}}))})(r.insuredVOList[0].productPlanVOList[0].riskVOList,e),Object.assign(pe.value,e)}}))},ge=()=>{var e,a,i,r,t;Promise.all([null==(a=null==(e=de.value)?void 0:e.validateForm)?void 0:a.call(e),null==(r=null==(i=ue.value)?void 0:i.validateForm)?void 0:r.call(i),null==(t=ce.value)?void 0:t.validate()]).then((()=>{ke()}),(e=>{var a;(null==e?void 0:e.length)&&(null==(a=null==ce?void 0:ce.value)||a.scrollToField(e[0].name))}))},ye=()=>{j({productCode:te,source:ie?2:1}).then((({code:e,data:a})=>{var i,r,t,o;"10000"===e&&(me.riskBaseInfo=a.productBasicInfoVO,(a.productRelationPlanVOList.length?a.productRelationPlanVOList:a.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,a)=>{0===a&&(me.currentPlan=e.planCode||"0"),ie||Object.assign(le.value,{[e.planCode||a]:{}})})),ie&&(t=me.riskBaseInfo.productCategory,o=me.riskBaseInfo.insurerCode,F({productCategory:t,venderCode:o}).then((e=>{var a;"10000"===e.code&&(oe=null==(a=e.data)?void 0:a.id)}))),me.riskData=(null==(i=a.productRiskVoList[0])?void 0:i.riskDetailVOList)||[],me.riskPlanData=a.productRelationPlanVOList||[],ie&&(r=a.productBasicInfoVO.id,w({id:ie,tenantId:ee}).then((({code:e,data:a})=>{var i;if("10000"===e){const{proposalInsuredProductList:e=[],...t}=(null==(i=a.proposalInsuredList)?void 0:i[0])||{};Object.assign(se.value.personVO,a.proposalHolder);const o=e.find((e=>e.productId===r));Object.assign(ne.value.personVO,t,{occupationCodeList:(null==o?void 0:o.occupationCodeList)||[]});const s={};((null==o?void 0:o.proposalProductRiskList)||[]).forEach((e=>{s[e.riskId]=e})),Object.assign(le.value,{0:s})}}))))})).finally((()=>{}))},Ce=e=>{me.holderFactor=e.holderFactorList,me.insuredFactor=e.insuredFactorList,me.ageRange=e.ageRange};return l([()=>le.value,()=>se.value,()=>ne.value],(e=>{e&&!me.canTrial&&(me.canTrial=!0,me.retrialTip=!0)}),{deep:!0}),d((()=>{ye(),D({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:a})=>{if("10000"===e){const e={};a.forEach((a=>{e[a.dictCode]=a.dictItemList})),me.enumList=e}}))})),(e,a)=>{const i=T,r=N("PersonalInfo"),t=N("RiskList"),o=u,s=N("ProTabButton"),n=c,l=p,d=B,b=q,_=m,R=N("ProPageWrap");return f(),v(R,{class:"page-trial-wrapper"},{default:k((()=>{var e,u,c;return[g(me).holderFactor.length?(f(),y("div",S,[C(i,{title:"投保人"}),C(r,{ref_key:"holderRef",ref:de,"insured-code":null==(e=g(me).riskBaseInfo)?void 0:e.insurerCode,"form-info":g(se).personVO,"factor-list":g(me).holderFactor,"age-range":g(me).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):I("",!0),g(me).insuredFactor.length?(f(),y("div",M,[C(i,{title:"被保人"}),C(r,{ref_key:"insuredRef",ref:ue,"insured-code":null==(u=g(me).riskBaseInfo)?void 0:u.insurerCode,"form-info":g(ne).personVO,"factor-list":g(me).insuredFactor,"age-range":g(me).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):I("",!0),P("div",U,[C(b,{modelValue:g(me).collapseName,"onUpdate:modelValue":a[1]||(a[1]=e=>g(me).collapseName=e)},{default:k((()=>[C(d,{name:"1"},{title:k((()=>[C(i,{title:"投保方案"})])),default:k((()=>[g(me).riskData.length&&g(le)[0]?(f(),y("div",J,[C(o,{ref_key:"riskFormRef",ref:ce,"input-align":"right","error-message-align":"right"},{default:k((()=>[C(t,{"risk-info":g(le)[0],enums:g(me).enumList,"origin-data":g(me).riskData,"pick-factor":Ce},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):I("",!0),g(me).riskPlanData.length?(f(),y("div",z,[C(o,{ref_key:"riskFormRef",ref:ce,"input-align":"right","error-message-align":"right"},{default:k((()=>[C(l,{active:g(me).currentPlan,"onUpdate:active":a[0]||(a[0]=e=>g(me).currentPlan=e)},{default:k((()=>[(f(!0),y(h,null,O(g(me).riskPlanData,(e=>(f(),v(n,{key:e.planCode,name:e.planCode,title:e.planName},{title:k((()=>[C(s,{title:e.planName,active:g(me).currentPlan===e.planCode},null,8,["title","active"])])),default:k((()=>{var a;return[e.planCode===g(me).currentPlan?(f(),v(t,{key:0,"risk-info":g(le)[e.planCode],enums:g(me).enumList,"origin-data":null==(a=e.productRiskVoList)?void 0:a[0].riskDetailVOList,"pick-factor":Ce},null,8,["risk-info","enums","origin-data"])):I("",!0)]})),_:2},1032,["name","title"])))),128))])),_:1},8,["active"])])),_:1},512)])):I("",!0)])),_:1})])),_:1},8,["modelValue"])]),P("div",H,[P("span",K,[L("总保费"),P("span",W,V((g(me).retrialTip?0:(null==(c=g(me).trialResult)?void 0:c.premium)||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})),1)]),P("div",Y,[g(me).retrialTip?(f(),y("div",Z,[L(" 条件更改后，需要重新试算 "),P("span",{class:"close-icon",onClick:fe})])):I("",!0),g(me).canTrial?(f(),v(_,{key:1,type:"primary",onClick:ge},{default:k((()=>[L("去试算")])),_:1})):(f(),v(_,{key:2,type:"primary",onClick:ve},{default:k((()=>[L("立即投保")])),_:1}))])])]})),_:1})}}}),[["__scopeId","data-v-1acad142"]]);export{G as default};
