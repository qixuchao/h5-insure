!function(){var e=document.createElement("style");e.innerHTML='.page-trial-wrapper[data-v-67d6b9f9]{background-color:var(--zaui-global-bg, #f2f5fc)}.page-trial-wrapper .part-card[data-v-67d6b9f9]{background-color:#fff;margin-bottom:.26667rem}.page-trial-wrapper .risk-content[data-v-67d6b9f9] .van-collapse-item__title--expanded{padding:0 .4rem 0 0;display:flex;align-items:center}.page-trial-wrapper .risk-content[data-v-67d6b9f9] .van-collapse-item__content{padding:0}.page-trial-wrapper .plan-risk[data-v-67d6b9f9] .van-tabs__line{display:none}.page-trial-wrapper .plan-risk[data-v-67d6b9f9] .van-tabs .van-tabs__wrap{height:auto}.page-trial-wrapper .plan-risk[data-v-67d6b9f9] .van-tabs .van-tabs__wrap .van-tabs__nav--line{padding:.30667rem 0}.page-trial-wrapper .footer-bar[data-v-67d6b9f9]{position:fixed;width:100%;bottom:0;left:0;background-color:#fff;height:2rem;padding:.4rem;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #efeff4;z-index:2}.page-trial-wrapper .footer-bar .trial-result[data-v-67d6b9f9]{width:5.86667rem;font-size:.45333rem;font-weight:400;color:var(--zaui-text, #393d46)}.page-trial-wrapper .footer-bar .trial-result .result-num[data-v-67d6b9f9]{color:var(--zaui-price, #ff5840);font-size:.45333rem;font-weight:500;margin-left:.21333rem}.page-trial-wrapper .footer-bar .trial-operate button[data-v-67d6b9f9]{width:3.73333rem}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip[data-v-67d6b9f9]{position:absolute;z-index:122;height:.56rem;border-radius:1.33333rem;background-color:var(--zaui-price, #ff5840);font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;color:#fff;line-height:.49333rem;padding:.04rem .28rem .02667rem .26667rem;right:.4rem;top:-.46667rem;display:flex;align-items:center}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip .close-icon[data-v-67d6b9f9]{margin-left:.17333rem;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAFVBMVEUAAAD///////////////////////9Iz20EAAAABnRSTlMAqvDQjzGyGyePAAAAZElEQVQY01WQsRHAMAgDSeL0rlLnLgvkMoFHyAo02n8Eny0VFoUBPweIMDu/xqA8fxxIJhfe2IE64g24owBJgDbfOkGGnL7oBYgIhAiEBIQEPPEyNfDWNtTXsUVNgokz2X6Q1TpVESf7Ckv8GQAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-size:contain;width:.24rem;height:.24rem}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip[data-v-67d6b9f9]:after{content:" ";position:absolute;z-index:11;width:0;height:0;border:.13333rem solid transparent;border-top:.13333rem solid #ff5840;border-right:.13333rem solid #ff5840;right:.49333rem;bottom:-.16rem}\n',document.head.appendChild(e),System.register(["./index-legacy-4316b797.js","./index-legacy-2247c597.js","./trial-legacy-8c806b98.js","./createProposal-legacy-b14dc495.js","./useStorage-legacy-06070e81.js","./trial-legacy-b6896b14.js","./pdfdist-legacy-f452325c.js","./useDicData-legacy-07d43ddd.js"],(function(e){"use strict";var a,r,t,i,n,o,l,s,d,c,p,u,f,g,m,k,b,y,v,h,C,I,P,A,V,L,O,_,w,D,R,B,T,F,N;return{setters:[function(e){a=e._,r=e.d,t=e.u,i=e.a,n=e.r,o=e.A,l=e.aB,s=e.a8,d=e.ao,c=e.b,p=e.c,u=e.e,f=e.w,g=e.l,m=e.g,k=e.f,b=e.j,y=e.i,v=e.F,h=e.h,C=e.t,I=e.n,P=e.D,A=e.N,V=e.E,L=e.an,O=e.O},function(e){_=e.P,w=e.a},function(e){D=e.i,R=e.p},function(e){B=e.c},function(e){T=e.u},function(e){F=e.b,N=e.a},function(){},function(){}],execute:function(){const x={key:0,class:"part-card"},E={key:1,class:"part-card"},j={class:"risk-content"},S={key:0,class:"risk"},z={key:1,class:"plan-risk"},M={class:"footer-bar van-safe-area-bottom"},U={class:"trial-result"},q=I("总保费"),Q={class:"result-num"},G={class:"trial-operate"},J={key:0,class:"retrial-tip"},H=I(" 条件更改后，需要重新试算 "),Y=I("去试算"),W=I("立即投保"),K=r({setup(e){const a=t(),r=i(),{agentCode:I="test",agencyCode:K="",tenantId:X=9991000007,insurerCode:Z="99",proposalId:$,saleChannelId:ee}=r.query;let{productCode:ae="MMBBSF",templateId:re=1}=r.query;const te=n({personVO:{occupationCodeList:[]}}),ie=n({insuredCode:"",personVO:{occupationCodeList:[]}}),ne=n({}),oe=n({}),le=n({}),se=n(null),de=n({}),ce=o({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[]});$&&(ae=(r.query||{})?.productCenterCode),l("premium",de.value),T().get("userInfo");const pe=()=>{ce.retrialTip=!1},ue=()=>{P({agencyId:K,saleUserId:I,saleChannelId:ee,tenantId:X,venderCode:ce.riskBaseInfo.insurerCode,orderDataSource:1,proposalId:$,extInfo:{templateId:+(re||1),pageCode:"premiumTrial",iseeBizNo:window.iseeBiz,buttonCode:A.premiumTrial},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{extInfo:{},tenantOrderProductList:[{productCode:ce.riskBaseInfo.productCode||"",productName:ce.riskBaseInfo.productName||"",premium:ce.trialResult.premium||0,tenantOrderRiskList:ce.insuredRiskList}]}]}).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&a.push({path:V[t.pageAction.data.nextPageCode],query:{insurerCode:ce.riskBaseInfo.insurerCode,templateId:re,...r.query,productCategory:ce.riskBaseInfo.productCategory,orderNo:t.pageAction.data.orderNo}})}))},fe=()=>{const e=JSON.parse(JSON.stringify(ne.value[ce.currentPlan])),a=Object.values(e).find((e=>1===e.riskType)),r=Object.values(e).map((e=>{const r=e;return((e,a)=>{const r=e;if("3"===r.chargePeriod){const e=(a.chargePeriod||"").split("_");if(e[1]-=1,1===r.exemptFlag){if("to"===e[0]){let a=0;1===r.exemptType?te.value.personVO?.birthday&&(a=parseInt(""+(+new Date-new Date(te.value.personVO?.birthday))/31536e6,10)):2===r.exemptType&&ie.value.personVO?.birthday&&(a=parseInt(""+(+new Date-new Date(ie.value.personVO?.birthday))/31536e6,10)),e[1]=e[1]-a}e[0]="year",r.coveragePeriod=e.join("_")}r.chargePeriod=e.join("_")}})(r,a),r.liabilityVOList=(r.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const a=e;return"0"===a.liabilityAttributeValue&&(a.liabilityAttributeValue=""),a})),r})),t={holder:te.value,productCode:ce.riskBaseInfo.productCode,insuredVOList:[{...ie.value,productPlanVOList:[{planCode:ce.currentPlan||"",insurerCode:ce.riskBaseInfo.insurerCode,riskVOList:r}]}]};R({...t}).then((({code:e,data:a})=>{if("10000"===e){ce.retrialTip=!1,ce.trialResult=a,ce.canTrial=!1;const e={},r=(a=[])=>{(a||[]).forEach((a=>{e[a.riskCode]=a,a.riskPremiumDetailVOList?.length&&r(a.riskPremiumDetailVOList)}))};r(a.riskPremiumDetailVOList),((e,a)=>{ce.insuredRiskList=e.map((e=>({initialAmount:a[e.riskCode]?.amount,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:F[e.chargePeriod.split("_")[0]],insurancePeriodType:N["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:a[e.riskCode]?.premium,liabilityDetails:e.liabilityVOList.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:ce.riskBaseInfo.id})))})(t.insuredVOList[0].productPlanVOList[0].riskVOList,e),Object.assign(de.value,e)}}))},ge=()=>{Promise.all([oe.value?.validateForm?.(),le.value?.validateForm?.(),se.value?.validate()]).then((()=>{fe()}),(e=>{e?.length&&se?.value?.scrollToField(e[0].name)}))},me=()=>{D({productCode:ae,source:$?2:1}).then((({code:e,data:a})=>{var r,t,i;"10000"===e&&(ce.riskBaseInfo=a.productBasicInfoVO,(a.productRelationPlanVOList.length?a.productRelationPlanVOList:a.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,a)=>{0===a&&(ce.currentPlan=e.planCode||"0"),$||Object.assign(ne.value,{[e.planCode||a]:{}})})),$&&(t=ce.riskBaseInfo.productCategory,i=ce.riskBaseInfo.insurerCode,O({productCategory:t,venderCode:i}).then((e=>{"10000"===e.code&&(re=e.data?.id)}))),ce.riskData=a.productRiskVoList[0]?.riskDetailVOList||[],ce.riskPlanData=a.productRelationPlanVOList||[],$&&(r=a.productBasicInfoVO.id,B({id:$,tenantId:X}).then((({code:e,data:a})=>{if("10000"===e){const{proposalInsuredProductList:e=[],...t}=a.proposalInsuredList?.[0]||{};Object.assign(te.value.personVO,a.proposalHolder);const i=e.find((e=>e.productId===r));Object.assign(ie.value.personVO,t,{occupationCodeList:i?.occupationCodeList||[]});const n={};(i?.proposalProductRiskList||[]).forEach((e=>{n[e.riskId]=e})),Object.assign(ne.value,{0:n})}}))))})).finally((()=>{}))},ke=e=>{ce.holderFactor=e.holderFactorList,ce.insuredFactor=e.insuredFactorList,ce.ageRange=e.ageRange};return s([()=>ne.value,()=>te.value,()=>ie.value],(e=>{e&&!ce.canTrial&&(ce.canTrial=!0,ce.retrialTip=!0)}),{deep:!0}),d((()=>{me(),L({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:a})=>{if("10000"===e){const e={};a.forEach((a=>{e[a.dictCode]=a.dictItemList})),ce.enumList=e}}))})),(e,a)=>{const r=c("ProTitle"),t=c("VanForm"),i=c("ProTabButton"),n=c("VanTab"),o=c("VanTabs"),l=c("van-collapse-item"),s=c("van-collapse"),d=c("VanButton"),I=c("ProPageWrap");return p(),u(I,{class:"page-trial-wrapper"},{default:f((()=>[g(ce).holderFactor.length?(p(),m("div",x,[k(r,{title:"投保人"}),k(_,{ref_key:"holderRef",ref:oe,"insured-code":g(ce).riskBaseInfo?.insurerCode,"form-info":te.value.personVO,"factor-list":g(ce).holderFactor,"age-range":g(ce).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):b("",!0),g(ce).insuredFactor.length?(p(),m("div",E,[k(r,{title:"被保人"}),k(_,{ref_key:"insuredRef",ref:le,"insured-code":g(ce).riskBaseInfo?.insurerCode,"form-info":ie.value.personVO,"factor-list":g(ce).insuredFactor,"age-range":g(ce).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):b("",!0),y("div",j,[k(s,{modelValue:g(ce).collapseName,"onUpdate:modelValue":a[1]||(a[1]=e=>g(ce).collapseName=e)},{default:f((()=>[k(l,{name:"1"},{title:f((()=>[k(r,{title:"投保方案"})])),default:f((()=>[g(ce).riskData.length&&ne.value[0]?(p(),m("div",S,[k(t,{ref_key:"riskFormRef",ref:se,"input-align":"right","error-message-align":"right"},{default:f((()=>[k(w,{"risk-info":ne.value[0],enums:g(ce).enumList,"origin-data":g(ce).riskData,"pick-factor":ke},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):b("",!0),g(ce).riskPlanData.length?(p(),m("div",z,[k(t,{ref_key:"riskFormRef",ref:se,"input-align":"right","error-message-align":"right"},{default:f((()=>[k(o,{active:g(ce).currentPlan,"onUpdate:active":a[0]||(a[0]=e=>g(ce).currentPlan=e)},{default:f((()=>[(p(!0),m(v,null,h(g(ce).riskPlanData,(e=>(p(),u(n,{key:e.planCode,name:e.planCode,title:e.planName},{title:f((()=>[k(i,{title:e.planName,active:g(ce).currentPlan===e.planCode},null,8,["title","active"])])),default:f((()=>[e.planCode===g(ce).currentPlan?(p(),u(w,{key:0,"risk-info":ne.value[e.planCode],enums:g(ce).enumList,"origin-data":e.productRiskVoList?.[0].riskDetailVOList,"pick-factor":ke},null,8,["risk-info","enums","origin-data"])):b("",!0)])),_:2},1032,["name","title"])))),128))])),_:1},8,["active"])])),_:1},512)])):b("",!0)])),_:1})])),_:1},8,["modelValue"])]),y("div",M,[y("span",U,[q,y("span",Q,C((g(ce).retrialTip?0:g(ce).trialResult?.premium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})),1)]),y("div",G,[g(ce).retrialTip?(p(),m("div",J,[H,y("span",{class:"close-icon",onClick:pe})])):b("",!0),g(ce).canTrial?(p(),u(d,{key:1,type:"primary",onClick:ge},{default:f((()=>[Y])),_:1})):(p(),u(d,{key:2,type:"primary",onClick:ue},{default:f((()=>[W])),_:1}))])])])),_:1})}}});e("default",a(K,[["__scopeId","data-v-67d6b9f9"]]))}}}))}();
