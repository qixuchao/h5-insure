!function(){var e=document.createElement("style");e.innerHTML='.page-trial-wrapper[data-v-08f1cdf9]{background-color:var(--zaui-global-bg, #f2f5fc)}.page-trial-wrapper .part-card[data-v-08f1cdf9]{background-color:#fff;margin-bottom:.26667rem}.page-trial-wrapper .risk-content[data-v-08f1cdf9] .van-collapse-item__title--expanded{padding:0 .4rem 0 0;display:flex;align-items:center}.page-trial-wrapper .risk-content[data-v-08f1cdf9] .van-collapse-item__content{padding:0}.page-trial-wrapper .plan-risk[data-v-08f1cdf9] .van-tabs__line{display:none}.page-trial-wrapper .plan-risk[data-v-08f1cdf9] .van-tabs .van-tabs__wrap{height:auto}.page-trial-wrapper .plan-risk[data-v-08f1cdf9] .van-tabs .van-tabs__wrap .van-tabs__nav--line{padding:.30667rem 0}.page-trial-wrapper .footer-bar[data-v-08f1cdf9]{position:fixed;width:100%;bottom:0;left:0;background-color:#fff;height:2rem;padding:.4rem;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #efeff4;z-index:2}.page-trial-wrapper .footer-bar .trial-result[data-v-08f1cdf9]{width:5.86667rem;font-size:.45333rem;font-weight:400;color:var(--zaui-text, #393d46)}.page-trial-wrapper .footer-bar .trial-result .result-num[data-v-08f1cdf9]{color:var(--zaui-price, #ff5840);font-size:.45333rem;font-weight:500;margin-left:.21333rem}.page-trial-wrapper .footer-bar .trial-operate button[data-v-08f1cdf9]{width:3.73333rem}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip[data-v-08f1cdf9]{position:absolute;z-index:122;height:.56rem;border-radius:1.33333rem;background-color:var(--zaui-price, #ff5840);font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;color:#fff;line-height:.49333rem;padding:.04rem .28rem .02667rem .26667rem;right:.4rem;top:-.46667rem;display:flex;align-items:center}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip .close-icon[data-v-08f1cdf9]{margin-left:.17333rem;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAFVBMVEUAAAD///////////////////////9Iz20EAAAABnRSTlMAqvDQjzGyGyePAAAAZElEQVQY01WQsRHAMAgDSeL0rlLnLgvkMoFHyAo02n8Eny0VFoUBPweIMDu/xqA8fxxIJhfe2IE64g24owBJgDbfOkGGnL7oBYgIhAiEBIQEPPEyNfDWNtTXsUVNgokz2X6Q1TpVESf7Ckv8GQAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-size:contain;width:.24rem;height:.24rem}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip[data-v-08f1cdf9]:after{content:" ";position:absolute;z-index:11;width:0;height:0;border:.13333rem solid transparent;border-top:.13333rem solid #ff5840;border-right:.13333rem solid #ff5840;right:.49333rem;bottom:-.16rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-2638a9d6.js","./index-legacy-f1f68a20.js","./trial-legacy-23c859d0.js","./createProposal-legacy-e2634fbf.js","./index-legacy-d4a8bc3b.js","./useStorage-legacy-a8cee401.js","./trial-legacy-56827f7b.js","./useDicData-legacy-17789855.js"],(function(e){"use strict";var a,r,t,i,n,o,l,s,d,c,p,u,f,g,m,k,y,v,b,h,C,I,P,A,V,L,O,_,w,D,R,T,B,F,N;return{setters:[function(e){a=e.g,r=e.a9,t=e.O,i=e.E,n=e.M,o=e.a6,l=e._,s=e.o,d=e.r,c=e.j,p=e.k,u=e.m,f=e.A,g=e.n,m=e.p,k=e.t,y=e.z,v=e.F,b=e.G,h=e.J,C=e.C},function(e){I=e.P,P=e.a},function(e){A=e.i,V=e.p},function(e){L=e.c},function(e){O=e._,_=e.n,w=e.N,D=e.b,R=e.F,T=e.f},function(e){B=e.u},function(e){F=e.b,N=e.a},function(){}],execute:function(){const x={key:0,class:"part-card"},E={key:1,class:"part-card"},j={class:"risk-content"},S={key:0,class:"risk"},z={key:1,class:"plan-risk"},M={class:"footer-bar van-safe-area-bottom"},U={class:"trial-result"},q=C("总保费"),G={class:"result-num"},J={class:"trial-operate"},Q={key:0,class:"retrial-tip"},H=C(" 条件更改后，需要重新试算 "),Y=C("去试算"),W=C("立即投保"),K=a({setup(e){const a=r(),C=t(),{agentCode:O="test",agencyCode:K="",tenantId:X=9991000007,insurerCode:Z="99",proposalId:$,saleChannelId:ee}=C.query;let{productCode:ae="MMBBSF",templateId:re=1}=C.query;const te=i({personVO:{occupationCodeList:[]}}),ie=i({insuredCode:"",personVO:{occupationCodeList:[]}}),ne=i({}),oe=i({}),le=i({}),se=i(null),de=i({}),ce=n({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[]});$&&(ae=(C.query||{})?.productCenterCode),o("premium",de.value),B().get("userInfo");const pe=()=>{ce.retrialTip=!1},ue=()=>{_({agencyId:K,saleUserId:O,saleChannelId:ee,tenantId:X,venderCode:ce.riskBaseInfo.insurerCode,orderDataSource:1,proposalId:$,extInfo:{templateId:+(re||1),pageCode:"premiumTrial",iseeBizNo:window.iseeBiz,buttonCode:w.premiumTrial},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{extInfo:{},tenantOrderProductList:[{productCode:ce.riskBaseInfo.productCode||"",productName:ce.riskBaseInfo.productName||"",premium:ce.trialResult.premium||0,tenantOrderRiskList:ce.insuredRiskList}]}]}).then((({code:e,data:r})=>{"10000"===e&&"jumpToPage"===r.pageAction.pageAction&&a.push({path:D[r.pageAction.data.nextPageCode],query:{insurerCode:ce.riskBaseInfo.insurerCode,templateId:re,...C.query,productCategory:ce.riskBaseInfo.productCategory,orderNo:r.pageAction.data.orderNo}})}))},fe=()=>{const e=JSON.parse(JSON.stringify(ne.value[ce.currentPlan])),a=Object.values(e).find((e=>1===e.riskType)),r=Object.values(e).map((e=>{const r=e;return((e,a)=>{const r=e;if("3"===r.chargePeriod){const e=(a.chargePeriod||"").split("_");if(e[1]-=1,1===r.exemptFlag){if("to"===e[0]){let a=0;1===r.exemptType?te.value.personVO?.birthday&&(a=parseInt(""+(+new Date-new Date(te.value.personVO?.birthday))/31536e6,10)):2===r.exemptType&&ie.value.personVO?.birthday&&(a=parseInt(""+(+new Date-new Date(ie.value.personVO?.birthday))/31536e6,10)),e[1]=e[1]-a}e[0]="year",r.coveragePeriod=e.join("_")}r.chargePeriod=e.join("_")}})(r,a),r.liabilityVOList=(r.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const a=e;return"0"===a.liabilityAttributeValue&&(a.liabilityAttributeValue=""),a})),r})),t={holder:te.value,productCode:ce.riskBaseInfo.productCode,insuredVOList:[{...ie.value,productPlanVOList:[{planCode:ce.currentPlan||"",insurerCode:ce.riskBaseInfo.insurerCode,riskVOList:r}]}]};V({...t}).then((({code:e,data:a})=>{if("10000"===e){ce.retrialTip=!1,ce.trialResult=a,ce.canTrial=!1;const e={},r=(a=[])=>{(a||[]).forEach((a=>{e[a.riskCode]=a,a.riskPremiumDetailVOList?.length&&r(a.riskPremiumDetailVOList)}))};r(a.riskPremiumDetailVOList),((e,a)=>{ce.insuredRiskList=e.map((e=>({initialAmount:a[e.riskCode]?.amount,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:F[e.chargePeriod.split("_")[0]],insurancePeriodType:N["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:a[e.riskCode]?.premium,liabilityDetails:e.liabilityVOList.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:ce.riskBaseInfo.id})))})(t.insuredVOList[0].productPlanVOList[0].riskVOList,e),Object.assign(de.value,e)}}))},ge=()=>{Promise.all([oe.value?.validateForm?.(),le.value?.validateForm?.(),se.value?.validate()]).then((()=>{fe()}),(e=>{e?.length&&se?.value?.scrollToField(e[0].name)}))},me=()=>{A({productCode:ae,source:$?2:1}).then((({code:e,data:a})=>{var r,t,i;"10000"===e&&(ce.riskBaseInfo=a.productBasicInfoVO,(a.productRelationPlanVOList.length?a.productRelationPlanVOList:a.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,a)=>{0===a&&(ce.currentPlan=e.planCode||"0"),$||Object.assign(ne.value,{[e.planCode||a]:{}})})),$&&(t=ce.riskBaseInfo.productCategory,i=ce.riskBaseInfo.insurerCode,T({productCategory:t,venderCode:i}).then((e=>{"10000"===e.code&&(re=e.data?.id)}))),ce.riskData=a.productRiskVoList[0]?.riskDetailVOList||[],ce.riskPlanData=a.productRelationPlanVOList||[],$&&(r=a.productBasicInfoVO.id,L({id:$,tenantId:X}).then((({code:e,data:a})=>{if("10000"===e){const{proposalInsuredProductList:e=[],...t}=a.proposalInsuredList?.[0]||{};Object.assign(te.value.personVO,a.proposalHolder);const i=e.find((e=>e.productId===r));Object.assign(ie.value.personVO,t,{occupationCodeList:i?.occupationCodeList||[]});const n={};(i?.proposalProductRiskList||[]).forEach((e=>{n[e.riskId]=e})),Object.assign(ne.value,{0:n})}}))))})).finally((()=>{}))},ke=e=>{ce.holderFactor=e.holderFactorList,ce.insuredFactor=e.insuredFactorList,ce.ageRange=e.ageRange};return l([()=>ne.value,()=>te.value,()=>ie.value],(e=>{e&&!ce.canTrial&&(ce.canTrial=!0,ce.retrialTip=!0)}),{deep:!0}),s((()=>{me(),R({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:a})=>{if("10000"===e){const e={};a.forEach((a=>{e[a.dictCode]=a.dictItemList})),ce.enumList=e}}))})),(e,a)=>{const r=d("ProTitle"),t=d("VanForm"),i=d("ProTabButton"),n=d("VanTab"),o=d("VanTabs"),l=d("van-collapse-item"),s=d("van-collapse"),C=d("VanButton"),A=d("ProPageWrap");return c(),p(A,{class:"page-trial-wrapper"},{default:u((()=>[f(ce).holderFactor.length?(c(),g("div",x,[m(r,{title:"投保人"}),m(I,{ref_key:"holderRef",ref:oe,"insured-code":f(ce).riskBaseInfo?.insurerCode,"form-info":te.value.personVO,"factor-list":f(ce).holderFactor,"age-range":f(ce).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):k("",!0),f(ce).insuredFactor.length?(c(),g("div",E,[m(r,{title:"被保人"}),m(I,{ref_key:"insuredRef",ref:le,"insured-code":f(ce).riskBaseInfo?.insurerCode,"form-info":ie.value.personVO,"factor-list":f(ce).insuredFactor,"age-range":f(ce).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):k("",!0),y("div",j,[m(s,{modelValue:f(ce).collapseName,"onUpdate:modelValue":a[1]||(a[1]=e=>f(ce).collapseName=e)},{default:u((()=>[m(l,{name:"1"},{title:u((()=>[m(r,{title:"投保方案"})])),default:u((()=>[f(ce).riskData.length&&ne.value[0]?(c(),g("div",S,[m(t,{ref_key:"riskFormRef",ref:se,"input-align":"right","error-message-align":"right"},{default:u((()=>[m(P,{"risk-info":ne.value[0],enums:f(ce).enumList,"origin-data":f(ce).riskData,"pick-factor":ke},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):k("",!0),f(ce).riskPlanData.length?(c(),g("div",z,[m(t,{ref_key:"riskFormRef",ref:se,"input-align":"right","error-message-align":"right"},{default:u((()=>[m(o,{active:f(ce).currentPlan,"onUpdate:active":a[0]||(a[0]=e=>f(ce).currentPlan=e)},{default:u((()=>[(c(!0),g(v,null,b(f(ce).riskPlanData,(e=>(c(),p(n,{key:e.planCode,name:e.planCode,title:e.planName},{title:u((()=>[m(i,{title:e.planName,active:f(ce).currentPlan===e.planCode},null,8,["title","active"])])),default:u((()=>[e.planCode===f(ce).currentPlan?(c(),p(P,{key:0,"risk-info":ne.value[e.planCode],enums:f(ce).enumList,"origin-data":e.productRiskVoList?.[0].riskDetailVOList,"pick-factor":ke},null,8,["risk-info","enums","origin-data"])):k("",!0)])),_:2},1032,["name","title"])))),128))])),_:1},8,["active"])])),_:1},512)])):k("",!0)])),_:1})])),_:1},8,["modelValue"])]),y("div",M,[y("span",U,[q,y("span",G,h((f(ce).retrialTip?0:f(ce).trialResult?.premium||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})),1)]),y("div",J,[f(ce).retrialTip?(c(),g("div",Q,[H,y("span",{class:"close-icon",onClick:pe})])):k("",!0),f(ce).canTrial?(c(),p(C,{key:1,type:"primary",onClick:ge},{default:u((()=>[Y])),_:1})):(c(),p(C,{key:2,type:"primary",onClick:ue},{default:u((()=>[W])),_:1}))])])])),_:1})}}});e("default",O(K,[["__scopeId","data-v-08f1cdf9"]]))}}}))}();
