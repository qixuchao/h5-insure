!function(){var e=document.createElement("style");e.innerHTML='.page-trial-wrapper[data-v-338b2a86]{background-color:var(--zaui-global-bg, #f2f5fc)}.page-trial-wrapper .part-card[data-v-338b2a86]{background-color:#fff;margin-bottom:.26667rem}.page-trial-wrapper .risk-content[data-v-338b2a86] .van-collapse-item__title--expanded{padding:0 .4rem 0 0;display:flex;align-items:center}.page-trial-wrapper .risk-content[data-v-338b2a86] .van-collapse-item__content{padding:0}.page-trial-wrapper .plan-risk[data-v-338b2a86] .van-tabs__line{display:none}.page-trial-wrapper .plan-risk[data-v-338b2a86] .van-tabs .van-tabs__wrap{height:auto}.page-trial-wrapper .plan-risk[data-v-338b2a86] .van-tabs .van-tabs__wrap .van-tabs__nav--line{padding:.30667rem 0}.page-trial-wrapper .footer-bar[data-v-338b2a86]{position:fixed;width:100%;bottom:0;left:0;background-color:#fff;height:2rem;padding:.4rem;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #efeff4;z-index:2}.page-trial-wrapper .footer-bar .trial-result[data-v-338b2a86]{width:5.86667rem;font-size:.45333rem;font-weight:400;color:var(--zaui-text, #393d46)}.page-trial-wrapper .footer-bar .trial-result .result-num[data-v-338b2a86]{color:var(--zaui-price, #ff5840);font-size:.45333rem;font-weight:500;margin-left:.21333rem}.page-trial-wrapper .footer-bar .trial-operate button[data-v-338b2a86]{width:3.73333rem}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip[data-v-338b2a86]{position:absolute;z-index:122;height:.56rem;border-radius:1.33333rem;background-color:var(--zaui-price, #ff5840);font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;color:#fff;line-height:.49333rem;padding:.04rem .28rem .02667rem .26667rem;right:.4rem;top:-.46667rem;display:flex;align-items:center}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip .close-icon[data-v-338b2a86]{margin-left:.17333rem;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAFVBMVEUAAAD///////////////////////9Iz20EAAAABnRSTlMAqvDQjzGyGyePAAAAZElEQVQY01WQsRHAMAgDSeL0rlLnLgvkMoFHyAo02n8Eny0VFoUBPweIMDu/xqA8fxxIJhfe2IE64g24owBJgDbfOkGGnL7oBYgIhAiEBIQEPPEyNfDWNtTXsUVNgokz2X6Q1TpVESf7Ckv8GQAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-size:contain;width:.24rem;height:.24rem}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip[data-v-338b2a86]:after{content:" ";position:absolute;z-index:11;width:0;height:0;border:.13333rem solid transparent;border-top:.13333rem solid #ff5840;border-right:.13333rem solid #ff5840;right:.49333rem;bottom:-.16rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-6323ba73.js","./index-legacy-9bd18069.js","./trial-legacy-02871a19.js","./createProposal-legacy-2ed0eb7e.js","./index-legacy-f53761db.js","./useStorage-legacy-aa6ecb29.js","./trial-legacy-c8971fe9.js","./useDicData-legacy-0c2ba3ce.js"],(function(e){"use strict";var a,r,i,t,o,n,l,s,d,u,c,p,g,f,m,v,k,b,y,h,P,A,C,L,I,V,O,_,w,R,D,T,B;return{setters:[function(e){a=e.g,r=e.a9,i=e.O,t=e.E,o=e.M,n=e.a6,l=e._,s=e.o,d=e.r,u=e.j,c=e.k,p=e.m,g=e.A,f=e.n,m=e.p,v=e.t,k=e.z,b=e.F,y=e.G,h=e.J,P=e.C},function(e){A=e.P,C=e.a},function(e){L=e.i,I=e.p},function(e){V=e.c},function(e){O=e._,_=e.n,w=e.c,R=e.D},function(e){D=e.u},function(e){T=e.b,B=e.a},function(){}],execute:function(){const N={key:0,class:"part-card"},F={key:1,class:"part-card"},x={class:"risk-content"},E={key:0,class:"risk"},j={key:1,class:"plan-risk"},S={class:"footer-bar van-safe-area-bottom"},z={class:"trial-result"},M=P("总保费"),U={class:"result-num"},q={class:"trial-operate"},J={key:0,class:"retrial-tip"},G=P(" 条件更改后，需要重新试算 "),Q=P("去试算"),H=P("立即投保"),Y=a({setup(e){const a=r(),P=i(),{templateId:O=1,agentCode:Y="test",agencyCode:W="",tenantId:K=9991000007,insurerCode:X="99",proposalId:Z}=P.query;let{productCode:$="MMBBSF"}=P.query;const ee=t({personVO:{occupationCodeList:[]}}),ae=t({insuredCode:"",personVO:{occupationCodeList:[]}}),re=t({}),ie=t({}),te=t({}),oe=t(null),ne=t({}),le=o({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[]});if(Z)try{var se,de;$=null===(se=JSON.parse((null===(de=P.query)||void 0===de?void 0:de.extInfo)||"{}"))||void 0===se?void 0:se.productCenterCode}catch(ve){}n("premium",ne.value),D().get("userInfo");const ue=()=>{le.retrialTip=!1},ce=()=>{_({agencyId:W,saleUserId:Y,tenantId:K,venderCode:le.riskBaseInfo.insurerCode,orderDataSource:1,proposalId:Z,extInfo:{templateId:+(O||1),pageCode:"premiumTrial",iseeBizNo:window.iseeBiz},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{extInfo:{},tenantOrderProductList:[{productCode:le.riskBaseInfo.productCode||"",productName:le.riskBaseInfo.productName||"",premium:le.trialResult.premium||0,tenantOrderRiskList:le.insuredRiskList}]}]}).then((({code:e,data:r})=>{"10000"===e&&"jumpToPage"===r.pageAction.pageAction&&a.push({path:w[r.pageAction.data.nextPageCode],query:{insurerCode:le.riskBaseInfo.insurerCode,...P.query,orderNo:r.pageAction.data.orderNo}})}))},pe=()=>{const e=JSON.parse(JSON.stringify(re.value[le.currentPlan])),a=Object.values(e).find((e=>1===e.riskType)),r=Object.values(e).map((e=>{const r=e;if("3"===r.chargePeriod){const e=(a.chargePeriod||"").split("_");e[1]&&(e[1]-=1),r.chargePeriod=e.join("_")}return r.liabilityVOList=(r.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const a=e;return"0"===a.liabilityAttributeValue&&(a.liabilityAttributeValue=""),a})),r})),i={holder:ee.value,productCode:le.riskBaseInfo.productCode,insuredVOList:[{...ae.value,productPlanVOList:[{planCode:le.currentPlan||"",insurerCode:le.riskBaseInfo.insurerCode,riskVOList:r}]}]};I({...i}).then((({code:e,data:a})=>{if("10000"===e){le.retrialTip=!1,le.trialResult=a,le.canTrial=!1;const e={},r=(a=[])=>{(a||[]).forEach((a=>{var i;e[a.riskCode]=a,null!==(i=a.riskPremiumDetailVOList)&&void 0!==i&&i.length&&r(a.riskPremiumDetailVOList)}))};r(a.riskPremiumDetailVOList),((e,a)=>{le.insuredRiskList=e.map((e=>{var r,i;return{initialAmount:null===(r=a[e.riskCode])||void 0===r?void 0:r.amount,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:T[e.chargePeriod.split("_")[0]],insurancePeriodType:B["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:null===(i=a[e.riskCode])||void 0===i?void 0:i.premium,liabilityDetails:e.liabilityVOList.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:le.riskBaseInfo.id}}))})(i.insuredVOList[0].productPlanVOList[0].riskVOList,e),Object.assign(ne.value,e)}}))},ge=()=>{var e,a,r,i,t;Promise.all([null===(e=ie.value)||void 0===e||null===(a=e.validateForm)||void 0===a?void 0:a.call(e),null===(r=te.value)||void 0===r||null===(i=r.validateForm)||void 0===i?void 0:i.call(r),null===(t=oe.value)||void 0===t?void 0:t.validate()]).then((()=>{pe()}),(e=>{var a;e.length&&(null==oe||null===(a=oe.value)||void 0===a||a.scrollToField(e[0].name))}))},fe=()=>{L({productCode:$,source:1}).then((({code:e,data:a})=>{var r,i;"10000"===e&&(le.riskBaseInfo=a.productBasicInfoVO,(a.productRelationPlanVOList.length?a.productRelationPlanVOList:a.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,a)=>{0===a&&(le.currentPlan=e.planCode||"0"),Z||Object.assign(re.value,{[e.planCode||a]:{}})})),le.riskData=(null===(r=a.productRiskVoList[0])||void 0===r?void 0:r.riskDetailVOList)||[],le.riskPlanData=a.productRelationPlanVOList||[],Z&&(i=a.productBasicInfoVO.id,V({id:Z,tenantId:K}).then((({code:e,data:a})=>{if("10000"===e){var r;const{proposalInsuredProductList:e=[],...t}=(null===(r=a.proposalInsuredList)||void 0===r?void 0:r[0])||{};Object.assign(ee.value.personVO,a.proposalHolder);const o=e.find((e=>e.productId===i));Object.assign(ae.value.personVO,t,{occupationCodeList:(null==o?void 0:o.occupationCodeList)||[]});const n={};((null==o?void 0:o.proposalProductRiskList)||[]).forEach((e=>{n[e.riskId]=e})),Object.assign(re.value,{0:n})}}))))})).finally((()=>{}))},me=e=>{le.holderFactor=e.holderFactorList,le.insuredFactor=e.insuredFactorList,le.ageRange=e.ageRange};return l([()=>re.value,()=>ee.value,()=>ae.value],(e=>{e&&!le.canTrial&&(le.canTrial=!0,le.retrialTip=!0)}),{deep:!0}),s((()=>{fe(),R({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:a})=>{if("10000"===e){const e={};a.forEach((a=>{e[a.dictCode]=a.dictItemList})),le.enumList=e}}))})),(e,a)=>{const r=d("ProTitle"),i=d("VanForm"),t=d("ProTabButton"),o=d("VanTab"),n=d("VanTabs"),l=d("van-collapse-item"),s=d("van-collapse"),P=d("VanButton"),L=d("ProPageWrap");return u(),c(L,{class:"page-trial-wrapper"},{default:p((()=>{var e,d,L;return[g(le).holderFactor.length?(u(),f("div",N,[m(r,{title:"投保人"}),m(A,{ref_key:"holderRef",ref:ie,"insured-code":null===(e=g(le).riskBaseInfo)||void 0===e?void 0:e.insurerCode,"form-info":ee.value.personVO,"factor-list":g(le).holderFactor,"age-range":g(le).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):v("",!0),g(le).insuredFactor.length?(u(),f("div",F,[m(r,{title:"被保人"}),m(A,{ref_key:"insuredRef",ref:te,"insured-code":null===(d=g(le).riskBaseInfo)||void 0===d?void 0:d.insurerCode,"form-info":ae.value.personVO,"factor-list":g(le).insuredFactor,"age-range":g(le).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):v("",!0),k("div",x,[m(s,{modelValue:g(le).collapseName,"onUpdate:modelValue":a[1]||(a[1]=e=>g(le).collapseName=e)},{default:p((()=>[m(l,{name:"1"},{title:p((()=>[m(r,{title:"投保方案"})])),default:p((()=>[g(le).riskData.length&&re.value[0]?(u(),f("div",E,[m(i,{ref_key:"riskFormRef",ref:oe,"input-align":"right","error-message-align":"right"},{default:p((()=>[m(C,{"risk-info":re.value[0],enums:g(le).enumList,"origin-data":g(le).riskData,"pick-factor":me},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):v("",!0),g(le).riskPlanData.length?(u(),f("div",j,[m(i,{ref_key:"riskFormRef",ref:oe,"input-align":"right","error-message-align":"right"},{default:p((()=>[m(n,{active:g(le).currentPlan,"onUpdate:active":a[0]||(a[0]=e=>g(le).currentPlan=e)},{default:p((()=>[(u(!0),f(b,null,y(g(le).riskPlanData,(e=>(u(),c(o,{key:e.planCode,name:e.planCode,title:e.planName},{title:p((()=>[m(t,{title:e.planName,active:g(le).currentPlan===e.planCode},null,8,["title","active"])])),default:p((()=>{var a;return[e.planCode===g(le).currentPlan?(u(),c(C,{key:0,"risk-info":re.value[e.planCode],enums:g(le).enumList,"origin-data":null===(a=e.productRiskVoList)||void 0===a?void 0:a[0].riskDetailVOList,"pick-factor":me},null,8,["risk-info","enums","origin-data"])):v("",!0)]})),_:2},1032,["name","title"])))),128))])),_:1},8,["active"])])),_:1},512)])):v("",!0)])),_:1})])),_:1},8,["modelValue"])]),k("div",S,[k("span",z,[M,k("span",U,h((g(le).retrialTip?0:(null===(L=g(le).trialResult)||void 0===L?void 0:L.premium)||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})),1)]),k("div",q,[g(le).retrialTip?(u(),f("div",J,[G,k("span",{class:"close-icon",onClick:ue})])):v("",!0),g(le).canTrial?(u(),c(P,{key:1,type:"primary",onClick:ge},{default:p((()=>[Q])),_:1})):(u(),c(P,{key:2,type:"primary",onClick:ce},{default:p((()=>[H])),_:1}))])])]})),_:1})}}});e("default",O(Y,[["__scopeId","data-v-338b2a86"]]))}}}))}();
