!function(){var e=document.createElement("style");e.innerHTML='.page-trial-wrapper[data-v-eba42b00]{background-color:var(--zaui-global-bg, #f2f5fc)}.page-trial-wrapper .part-card[data-v-eba42b00]{background-color:#fff;margin-bottom:.26667rem}.page-trial-wrapper .risk-content[data-v-eba42b00] .van-collapse-item__title--expanded{padding:0 .4rem 0 0;display:flex;align-items:center}.page-trial-wrapper .risk-content[data-v-eba42b00] .van-collapse-item__content{padding:0}.page-trial-wrapper .plan-risk[data-v-eba42b00] .van-tabs__line{display:none}.page-trial-wrapper .plan-risk[data-v-eba42b00] .van-tabs .van-tabs__wrap{height:auto}.page-trial-wrapper .plan-risk[data-v-eba42b00] .van-tabs .van-tabs__wrap .van-tabs__nav--line{padding:.30667rem 0}.page-trial-wrapper .footer-bar[data-v-eba42b00]{position:fixed;width:100%;bottom:0;left:0;background-color:#fff;height:2rem;padding:.4rem;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #efeff4;z-index:2}.page-trial-wrapper .footer-bar .trial-result[data-v-eba42b00]{width:5.86667rem;font-size:.45333rem;font-weight:400;color:var(--zaui-text, #393d46)}.page-trial-wrapper .footer-bar .trial-result .result-num[data-v-eba42b00]{color:var(--zaui-price, #ff5840);font-size:.45333rem;font-weight:500;margin-left:.21333rem}.page-trial-wrapper .footer-bar .trial-operate button[data-v-eba42b00]{width:3.73333rem}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip[data-v-eba42b00]{position:absolute;z-index:122;height:.56rem;border-radius:1.33333rem;background-color:var(--zaui-price, #ff5840);font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;color:#fff;line-height:.49333rem;padding:.04rem .28rem .02667rem .26667rem;right:.4rem;top:-.46667rem;display:flex;align-items:center}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip .close-icon[data-v-eba42b00]{margin-left:.17333rem;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAFVBMVEUAAAD///////////////////////9Iz20EAAAABnRSTlMAqvDQjzGyGyePAAAAZElEQVQY01WQsRHAMAgDSeL0rlLnLgvkMoFHyAo02n8Eny0VFoUBPweIMDu/xqA8fxxIJhfe2IE64g24owBJgDbfOkGGnL7oBYgIhAiEBIQEPPEyNfDWNtTXsUVNgokz2X6Q1TpVESf7Ckv8GQAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-size:contain;width:.24rem;height:.24rem}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip[data-v-eba42b00]:after{content:" ";position:absolute;z-index:11;width:0;height:0;border:.13333rem solid transparent;border-top:.13333rem solid #ff5840;border-right:.13333rem solid #ff5840;right:.49333rem;bottom:-.16rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-92a8f610.js","./index-legacy-1c657757.js","./trial-legacy-33ec0ebd.js","./createProposal-legacy-564ccc8f.js","./index-legacy-a824365a.js","./useStorage-legacy-6a8499b4.js","./trial-legacy-3355bc61.js","./useDicData-legacy-e678a839.js"],(function(e){"use strict";var a,r,t,i,o,n,l,s,d,u,c,p,g,f,v,m,b,k,y,h,C,I,P,A,V,L,O,_,w,D,R,B,T,F;return{setters:[function(e){a=e.g,r=e.a9,t=e.O,i=e.E,o=e.M,n=e.a6,l=e._,s=e.o,d=e.r,u=e.j,c=e.k,p=e.m,g=e.A,f=e.n,v=e.p,m=e.t,b=e.z,k=e.F,y=e.G,h=e.J,C=e.C},function(e){I=e.P,P=e.a},function(e){A=e.i,V=e.p},function(e){L=e.c},function(e){O=e._,_=e.n,w=e.b,D=e.E,R=e.e},function(e){B=e.u},function(e){T=e.b,F=e.a},function(){}],execute:function(){const N={key:0,class:"part-card"},x={key:1,class:"part-card"},E={class:"risk-content"},j={key:0,class:"risk"},S={key:1,class:"plan-risk"},z={class:"footer-bar van-safe-area-bottom"},M={class:"trial-result"},U=C("总保费"),q={class:"result-num"},J={class:"trial-operate"},G={key:0,class:"retrial-tip"},Q=C(" 条件更改后，需要重新试算 "),H=C("去试算"),Y=C("立即投保"),W=a({setup(e){const a=r(),C=t(),{agentCode:O="test",agencyCode:W="",tenantId:K=9991000007,insurerCode:X="99",proposalId:Z,saleChannelId:$}=C.query;let{productCode:ee="MMBBSF",templateId:ae=1}=C.query;const re=i({personVO:{occupationCodeList:[]}}),te=i({insuredCode:"",personVO:{occupationCodeList:[]}}),ie=i({}),oe=i({}),ne=i({}),le=i(null),se=i({}),de=o({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[]});if(Z)try{var ue,ce;ee=null===(ue=JSON.parse((null===(ce=C.query)||void 0===ce?void 0:ce.extInfo)||"{}"))||void 0===ue?void 0:ue.productCenterCode}catch(ke){}n("premium",se.value),B().get("userInfo");const pe=()=>{de.retrialTip=!1},ge=()=>{_({agencyId:W,saleUserId:O,saleChannelId:$,tenantId:K,venderCode:de.riskBaseInfo.insurerCode,orderDataSource:1,proposalId:Z,extInfo:{templateId:+(ae||1),pageCode:"premiumTrial",iseeBizNo:window.iseeBiz},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{extInfo:{},tenantOrderProductList:[{productCode:de.riskBaseInfo.productCode||"",productName:de.riskBaseInfo.productName||"",premium:de.trialResult.premium||0,tenantOrderRiskList:de.insuredRiskList}]}]}).then((({code:e,data:r})=>{"10000"===e&&"jumpToPage"===r.pageAction.pageAction&&a.push({path:w[r.pageAction.data.nextPageCode],query:{insurerCode:de.riskBaseInfo.insurerCode,templateId:ae,...C.query,productCategory:de.riskBaseInfo.productCategory,orderNo:r.pageAction.data.orderNo}})}))},fe=()=>{const e=JSON.parse(JSON.stringify(ie.value[de.currentPlan])),a=Object.values(e).find((e=>1===e.riskType)),r=Object.values(e).map((e=>{const r=e;return((e,a)=>{const r=e;if("3"===r.chargePeriod){const e=(a.chargePeriod||"").split("_");if(e[1]-=1,1===r.exemptFlag){if("to"===e[0]){let a=0;var t,i;if(1===r.exemptType)null!==(t=re.value.personVO)&&void 0!==t&&t.birthday&&(a=parseInt(""+(+new Date-new Date(null===(i=re.value.personVO)||void 0===i?void 0:i.birthday))/31536e6,10));else if(2===r.exemptType){var o,n;null!==(o=te.value.personVO)&&void 0!==o&&o.birthday&&(a=parseInt(""+(+new Date-new Date(null===(n=te.value.personVO)||void 0===n?void 0:n.birthday))/31536e6,10))}e[1]=e[1]-a}e[0]="year",r.coveragePeriod=e.join("_")}r.chargePeriod=e.join("_")}})(r,a),r.liabilityVOList=(r.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const a=e;return"0"===a.liabilityAttributeValue&&(a.liabilityAttributeValue=""),a})),r})),t={holder:re.value,productCode:de.riskBaseInfo.productCode,insuredVOList:[{...te.value,productPlanVOList:[{planCode:de.currentPlan||"",insurerCode:de.riskBaseInfo.insurerCode,riskVOList:r}]}]};V({...t}).then((({code:e,data:a})=>{if("10000"===e){de.retrialTip=!1,de.trialResult=a,de.canTrial=!1;const e={},r=(a=[])=>{(a||[]).forEach((a=>{var t;e[a.riskCode]=a,null!==(t=a.riskPremiumDetailVOList)&&void 0!==t&&t.length&&r(a.riskPremiumDetailVOList)}))};r(a.riskPremiumDetailVOList),((e,a)=>{de.insuredRiskList=e.map((e=>{var r,t;return{initialAmount:null===(r=a[e.riskCode])||void 0===r?void 0:r.amount,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:T[e.chargePeriod.split("_")[0]],insurancePeriodType:F["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:null===(t=a[e.riskCode])||void 0===t?void 0:t.premium,liabilityDetails:e.liabilityVOList.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:de.riskBaseInfo.id}}))})(t.insuredVOList[0].productPlanVOList[0].riskVOList,e),Object.assign(se.value,e)}}))},ve=()=>{var e,a,r,t,i;Promise.all([null===(e=oe.value)||void 0===e||null===(a=e.validateForm)||void 0===a?void 0:a.call(e),null===(r=ne.value)||void 0===r||null===(t=r.validateForm)||void 0===t?void 0:t.call(r),null===(i=le.value)||void 0===i?void 0:i.validate()]).then((()=>{fe()}),(e=>{var a;null!=e&&e.length&&(null==le||null===(a=le.value)||void 0===a||a.scrollToField(e[0].name))}))},me=()=>{A({productCode:ee,source:Z?2:1}).then((({code:e,data:a})=>{var r,t,i,o;"10000"===e&&(de.riskBaseInfo=a.productBasicInfoVO,(a.productRelationPlanVOList.length?a.productRelationPlanVOList:a.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,a)=>{0===a&&(de.currentPlan=e.planCode||"0"),Z||Object.assign(ie.value,{[e.planCode||a]:{}})})),Z&&(i=de.riskBaseInfo.productCategory,o=de.riskBaseInfo.insurerCode,R({productCategory:i,venderCode:o}).then((e=>{var a;"10000"===e.code&&(ae=null===(a=e.data)||void 0===a?void 0:a.id)}))),de.riskData=(null===(r=a.productRiskVoList[0])||void 0===r?void 0:r.riskDetailVOList)||[],de.riskPlanData=a.productRelationPlanVOList||[],Z&&(t=a.productBasicInfoVO.id,L({id:Z,tenantId:K}).then((({code:e,data:a})=>{if("10000"===e){var r;const{proposalInsuredProductList:e=[],...i}=(null===(r=a.proposalInsuredList)||void 0===r?void 0:r[0])||{};Object.assign(re.value.personVO,a.proposalHolder);const o=e.find((e=>e.productId===t));Object.assign(te.value.personVO,i,{occupationCodeList:(null==o?void 0:o.occupationCodeList)||[]});const n={};((null==o?void 0:o.proposalProductRiskList)||[]).forEach((e=>{n[e.riskId]=e})),Object.assign(ie.value,{0:n})}}))))})).finally((()=>{}))},be=e=>{de.holderFactor=e.holderFactorList,de.insuredFactor=e.insuredFactorList,de.ageRange=e.ageRange};return l([()=>ie.value,()=>re.value,()=>te.value],(e=>{e&&!de.canTrial&&(de.canTrial=!0,de.retrialTip=!0)}),{deep:!0}),s((()=>{me(),D({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:a})=>{if("10000"===e){const e={};a.forEach((a=>{e[a.dictCode]=a.dictItemList})),de.enumList=e}}))})),(e,a)=>{const r=d("ProTitle"),t=d("VanForm"),i=d("ProTabButton"),o=d("VanTab"),n=d("VanTabs"),l=d("van-collapse-item"),s=d("van-collapse"),C=d("VanButton"),A=d("ProPageWrap");return u(),c(A,{class:"page-trial-wrapper"},{default:p((()=>{var e,d,A;return[g(de).holderFactor.length?(u(),f("div",N,[v(r,{title:"投保人"}),v(I,{ref_key:"holderRef",ref:oe,"insured-code":null===(e=g(de).riskBaseInfo)||void 0===e?void 0:e.insurerCode,"form-info":re.value.personVO,"factor-list":g(de).holderFactor,"age-range":g(de).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):m("",!0),g(de).insuredFactor.length?(u(),f("div",x,[v(r,{title:"被保人"}),v(I,{ref_key:"insuredRef",ref:ne,"insured-code":null===(d=g(de).riskBaseInfo)||void 0===d?void 0:d.insurerCode,"form-info":te.value.personVO,"factor-list":g(de).insuredFactor,"age-range":g(de).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):m("",!0),b("div",E,[v(s,{modelValue:g(de).collapseName,"onUpdate:modelValue":a[1]||(a[1]=e=>g(de).collapseName=e)},{default:p((()=>[v(l,{name:"1"},{title:p((()=>[v(r,{title:"投保方案"})])),default:p((()=>[g(de).riskData.length&&ie.value[0]?(u(),f("div",j,[v(t,{ref_key:"riskFormRef",ref:le,"input-align":"right","error-message-align":"right"},{default:p((()=>[v(P,{"risk-info":ie.value[0],enums:g(de).enumList,"origin-data":g(de).riskData,"pick-factor":be},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):m("",!0),g(de).riskPlanData.length?(u(),f("div",S,[v(t,{ref_key:"riskFormRef",ref:le,"input-align":"right","error-message-align":"right"},{default:p((()=>[v(n,{active:g(de).currentPlan,"onUpdate:active":a[0]||(a[0]=e=>g(de).currentPlan=e)},{default:p((()=>[(u(!0),f(k,null,y(g(de).riskPlanData,(e=>(u(),c(o,{key:e.planCode,name:e.planCode,title:e.planName},{title:p((()=>[v(i,{title:e.planName,active:g(de).currentPlan===e.planCode},null,8,["title","active"])])),default:p((()=>{var a;return[e.planCode===g(de).currentPlan?(u(),c(P,{key:0,"risk-info":ie.value[e.planCode],enums:g(de).enumList,"origin-data":null===(a=e.productRiskVoList)||void 0===a?void 0:a[0].riskDetailVOList,"pick-factor":be},null,8,["risk-info","enums","origin-data"])):m("",!0)]})),_:2},1032,["name","title"])))),128))])),_:1},8,["active"])])),_:1},512)])):m("",!0)])),_:1})])),_:1},8,["modelValue"])]),b("div",z,[b("span",M,[U,b("span",q,h((g(de).retrialTip?0:(null===(A=g(de).trialResult)||void 0===A?void 0:A.premium)||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})),1)]),b("div",J,[g(de).retrialTip?(u(),f("div",G,[Q,b("span",{class:"close-icon",onClick:pe})])):m("",!0),g(de).canTrial?(u(),c(C,{key:1,type:"primary",onClick:ve},{default:p((()=>[H])),_:1})):(u(),c(C,{key:2,type:"primary",onClick:ge},{default:p((()=>[Y])),_:1}))])])]})),_:1})}}});e("default",O(W,[["__scopeId","data-v-eba42b00"]]))}}}))}();
