!function(){var e=document.createElement("style");e.innerHTML='.page-trial-wrapper[data-v-4d90553c]{background-color:var(--zaui-global-bg, #f2f5fc)}.page-trial-wrapper .part-card[data-v-4d90553c]{background-color:#fff;margin-bottom:.26667rem}.page-trial-wrapper .risk-content[data-v-4d90553c] .van-collapse-item__title--expanded{padding:0 .4rem 0 0;display:flex;align-items:center}.page-trial-wrapper .risk-content[data-v-4d90553c] .van-collapse-item__content{padding:0}.page-trial-wrapper .plan-risk[data-v-4d90553c] .van-tabs__line{display:none}.page-trial-wrapper .plan-risk[data-v-4d90553c] .van-tabs .van-tabs__wrap{height:auto}.page-trial-wrapper .plan-risk[data-v-4d90553c] .van-tabs .van-tabs__wrap .van-tabs__nav--line{padding:.30667rem 0}.page-trial-wrapper .footer-bar[data-v-4d90553c]{position:fixed;width:100%;bottom:0;left:0;background-color:#fff;height:2rem;padding:.4rem;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #efeff4;z-index:2}.page-trial-wrapper .footer-bar .trial-result[data-v-4d90553c]{width:5.86667rem;font-size:.45333rem;font-weight:400;color:var(--zaui-text, #393d46)}.page-trial-wrapper .footer-bar .trial-result .result-num[data-v-4d90553c]{color:var(--zaui-price, #ff5840);font-size:.45333rem;font-weight:500;margin-left:.21333rem}.page-trial-wrapper .footer-bar .trial-operate button[data-v-4d90553c]{width:3.73333rem}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip[data-v-4d90553c]{position:absolute;z-index:122;height:.56rem;border-radius:1.33333rem;background-color:var(--zaui-price, #ff5840);font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;color:#fff;line-height:.49333rem;padding:.04rem .28rem .02667rem .26667rem;right:.4rem;top:-.46667rem;display:flex;align-items:center}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip .close-icon[data-v-4d90553c]{margin-left:.17333rem;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAFVBMVEUAAAD///////////////////////9Iz20EAAAABnRSTlMAqvDQjzGyGyePAAAAZElEQVQY01WQsRHAMAgDSeL0rlLnLgvkMoFHyAo02n8Eny0VFoUBPweIMDu/xqA8fxxIJhfe2IE64g24owBJgDbfOkGGnL7oBYgIhAiEBIQEPPEyNfDWNtTXsUVNgokz2X6Q1TpVESf7Ckv8GQAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-size:contain;width:.24rem;height:.24rem}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip[data-v-4d90553c]:after{content:" ";position:absolute;z-index:11;width:0;height:0;border:.13333rem solid transparent;border-top:.13333rem solid #ff5840;border-right:.13333rem solid #ff5840;right:.49333rem;bottom:-.16rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-92a8f610.js","./index-legacy-1786335a.js","./trial-legacy-f5d0eb6e.js","./createProposal-legacy-cc2b71d8.js","./index-legacy-eeaac3c0.js","./useStorage-legacy-f215846e.js","./trial-legacy-76a6351e.js","./useDicData-legacy-2f197547.js"],(function(e){"use strict";var a,r,i,t,o,n,l,s,d,c,u,p,f,g,m,v,k,y,b,h,C,P,A,I,L,V,O,_,w,R,D,T,B;return{setters:[function(e){a=e.g,r=e.a9,i=e.O,t=e.E,o=e.M,n=e.a6,l=e._,s=e.o,d=e.r,c=e.j,u=e.k,p=e.m,f=e.A,g=e.n,m=e.p,v=e.t,k=e.z,y=e.F,b=e.G,h=e.J,C=e.C},function(e){P=e.P,A=e.a},function(e){I=e.i,L=e.p},function(e){V=e.c},function(e){O=e._,_=e.n,w=e.c,R=e.E},function(e){D=e.u},function(e){T=e.b,B=e.a},function(){}],execute:function(){const N={key:0,class:"part-card"},F={key:1,class:"part-card"},E={class:"risk-content"},x={key:0,class:"risk"},j={key:1,class:"plan-risk"},S={class:"footer-bar van-safe-area-bottom"},z={class:"trial-result"},M=C("总保费"),U={class:"result-num"},q={class:"trial-operate"},J={key:0,class:"retrial-tip"},G=C(" 条件更改后，需要重新试算 "),Q=C("去试算"),H=C("立即投保"),Y=a({setup(e){const a=r(),C=i(),{templateId:O=1,agentCode:Y="test",agencyCode:W="",tenantId:K=9991000007,insurerCode:X="99",proposalId:Z,saleChannelId:$}=C.query;let{productCode:ee="MMBBSF"}=C.query;const ae=t({personVO:{occupationCodeList:[]}}),re=t({insuredCode:"",personVO:{occupationCodeList:[]}}),ie=t({}),te=t({}),oe=t({}),ne=t(null),le=t({}),se=o({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[]});if(Z)try{var de,ce;ee=null===(de=JSON.parse((null===(ce=C.query)||void 0===ce?void 0:ce.extInfo)||"{}"))||void 0===de?void 0:de.productCenterCode}catch(ke){}n("premium",le.value),D().get("userInfo");const ue=()=>{se.retrialTip=!1},pe=()=>{_({agencyId:W,saleUserId:Y,saleChannelId:$,tenantId:K,venderCode:se.riskBaseInfo.insurerCode,orderDataSource:1,proposalId:Z,extInfo:{templateId:+(O||1),pageCode:"premiumTrial",iseeBizNo:window.iseeBiz},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{extInfo:{},tenantOrderProductList:[{productCode:se.riskBaseInfo.productCode||"",productName:se.riskBaseInfo.productName||"",premium:se.trialResult.premium||0,tenantOrderRiskList:se.insuredRiskList}]}]}).then((({code:e,data:r})=>{"10000"===e&&"jumpToPage"===r.pageAction.pageAction&&a.push({path:w[r.pageAction.data.nextPageCode],query:{insurerCode:se.riskBaseInfo.insurerCode,...C.query,orderNo:r.pageAction.data.orderNo}})}))},fe=()=>{const e=JSON.parse(JSON.stringify(ie.value[se.currentPlan])),a=Object.values(e).find((e=>1===e.riskType)),r=Object.values(e).map((e=>{const r=e;if("3"===r.chargePeriod){const e=(a.chargePeriod||"").split("_");e[1]&&(e[1]-=1),r.chargePeriod=e.join("_")}return r.liabilityVOList=(r.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const a=e;return"0"===a.liabilityAttributeValue&&(a.liabilityAttributeValue=""),a})),r})),i={holder:ae.value,productCode:se.riskBaseInfo.productCode,insuredVOList:[{...re.value,productPlanVOList:[{planCode:se.currentPlan||"",insurerCode:se.riskBaseInfo.insurerCode,riskVOList:r}]}]};L({...i}).then((({code:e,data:a})=>{if("10000"===e){se.retrialTip=!1,se.trialResult=a,se.canTrial=!1;const e={},r=(a=[])=>{(a||[]).forEach((a=>{var i;e[a.riskCode]=a,null!==(i=a.riskPremiumDetailVOList)&&void 0!==i&&i.length&&r(a.riskPremiumDetailVOList)}))};r(a.riskPremiumDetailVOList),((e,a)=>{se.insuredRiskList=e.map((e=>{var r,i;return{initialAmount:null===(r=a[e.riskCode])||void 0===r?void 0:r.amount,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:T[e.chargePeriod.split("_")[0]],insurancePeriodType:B["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:null===(i=a[e.riskCode])||void 0===i?void 0:i.premium,liabilityDetails:e.liabilityVOList.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:se.riskBaseInfo.id}}))})(i.insuredVOList[0].productPlanVOList[0].riskVOList,e),Object.assign(le.value,e)}}))},ge=()=>{var e,a,r,i,t;Promise.all([null===(e=te.value)||void 0===e||null===(a=e.validateForm)||void 0===a?void 0:a.call(e),null===(r=oe.value)||void 0===r||null===(i=r.validateForm)||void 0===i?void 0:i.call(r),null===(t=ne.value)||void 0===t?void 0:t.validate()]).then((()=>{fe()}),(e=>{var a;e.length&&(null==ne||null===(a=ne.value)||void 0===a||a.scrollToField(e[0].name))}))},me=()=>{I({productCode:ee,source:1}).then((({code:e,data:a})=>{var r,i;"10000"===e&&(se.riskBaseInfo=a.productBasicInfoVO,(a.productRelationPlanVOList.length?a.productRelationPlanVOList:a.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,a)=>{0===a&&(se.currentPlan=e.planCode||"0"),Z||Object.assign(ie.value,{[e.planCode||a]:{}})})),se.riskData=(null===(r=a.productRiskVoList[0])||void 0===r?void 0:r.riskDetailVOList)||[],se.riskPlanData=a.productRelationPlanVOList||[],Z&&(i=a.productBasicInfoVO.id,V({id:Z,tenantId:K}).then((({code:e,data:a})=>{if("10000"===e){var r;const{proposalInsuredProductList:e=[],...t}=(null===(r=a.proposalInsuredList)||void 0===r?void 0:r[0])||{};Object.assign(ae.value.personVO,a.proposalHolder);const o=e.find((e=>e.productId===i));Object.assign(re.value.personVO,t,{occupationCodeList:(null==o?void 0:o.occupationCodeList)||[]});const n={};((null==o?void 0:o.proposalProductRiskList)||[]).forEach((e=>{n[e.riskId]=e})),Object.assign(ie.value,{0:n})}}))))})).finally((()=>{}))},ve=e=>{se.holderFactor=e.holderFactorList,se.insuredFactor=e.insuredFactorList,se.ageRange=e.ageRange};return l([()=>ie.value,()=>ae.value,()=>re.value],(e=>{e&&!se.canTrial&&(se.canTrial=!0,se.retrialTip=!0)}),{deep:!0}),s((()=>{me(),R({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:a})=>{if("10000"===e){const e={};a.forEach((a=>{e[a.dictCode]=a.dictItemList})),se.enumList=e}}))})),(e,a)=>{const r=d("ProTitle"),i=d("VanForm"),t=d("ProTabButton"),o=d("VanTab"),n=d("VanTabs"),l=d("van-collapse-item"),s=d("van-collapse"),C=d("VanButton"),I=d("ProPageWrap");return c(),u(I,{class:"page-trial-wrapper"},{default:p((()=>{var e,d,I;return[f(se).holderFactor.length?(c(),g("div",N,[m(r,{title:"投保人"}),m(P,{ref_key:"holderRef",ref:te,"insured-code":null===(e=f(se).riskBaseInfo)||void 0===e?void 0:e.insurerCode,"form-info":ae.value.personVO,"factor-list":f(se).holderFactor,"age-range":f(se).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):v("",!0),f(se).insuredFactor.length?(c(),g("div",F,[m(r,{title:"被保人"}),m(P,{ref_key:"insuredRef",ref:oe,"insured-code":null===(d=f(se).riskBaseInfo)||void 0===d?void 0:d.insurerCode,"form-info":re.value.personVO,"factor-list":f(se).insuredFactor,"age-range":f(se).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):v("",!0),k("div",E,[m(s,{modelValue:f(se).collapseName,"onUpdate:modelValue":a[1]||(a[1]=e=>f(se).collapseName=e)},{default:p((()=>[m(l,{name:"1"},{title:p((()=>[m(r,{title:"投保方案"})])),default:p((()=>[f(se).riskData.length&&ie.value[0]?(c(),g("div",x,[m(i,{ref_key:"riskFormRef",ref:ne,"input-align":"right","error-message-align":"right"},{default:p((()=>[m(A,{"risk-info":ie.value[0],enums:f(se).enumList,"origin-data":f(se).riskData,"pick-factor":ve},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):v("",!0),f(se).riskPlanData.length?(c(),g("div",j,[m(i,{ref_key:"riskFormRef",ref:ne,"input-align":"right","error-message-align":"right"},{default:p((()=>[m(n,{active:f(se).currentPlan,"onUpdate:active":a[0]||(a[0]=e=>f(se).currentPlan=e)},{default:p((()=>[(c(!0),g(y,null,b(f(se).riskPlanData,(e=>(c(),u(o,{key:e.planCode,name:e.planCode,title:e.planName},{title:p((()=>[m(t,{title:e.planName,active:f(se).currentPlan===e.planCode},null,8,["title","active"])])),default:p((()=>{var a;return[e.planCode===f(se).currentPlan?(c(),u(A,{key:0,"risk-info":ie.value[e.planCode],enums:f(se).enumList,"origin-data":null===(a=e.productRiskVoList)||void 0===a?void 0:a[0].riskDetailVOList,"pick-factor":ve},null,8,["risk-info","enums","origin-data"])):v("",!0)]})),_:2},1032,["name","title"])))),128))])),_:1},8,["active"])])),_:1},512)])):v("",!0)])),_:1})])),_:1},8,["modelValue"])]),k("div",S,[k("span",z,[M,k("span",U,h((f(se).retrialTip?0:(null===(I=f(se).trialResult)||void 0===I?void 0:I.premium)||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})),1)]),k("div",q,[f(se).retrialTip?(c(),g("div",J,[G,k("span",{class:"close-icon",onClick:ue})])):v("",!0),f(se).canTrial?(c(),u(C,{key:1,type:"primary",onClick:ge},{default:p((()=>[Q])),_:1})):(c(),u(C,{key:2,type:"primary",onClick:pe},{default:p((()=>[H])),_:1}))])])]})),_:1})}}});e("default",O(Y,[["__scopeId","data-v-4d90553c"]]))}}}))}();
