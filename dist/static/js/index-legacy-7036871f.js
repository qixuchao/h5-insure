!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.page-trial-wrapper[data-v-2143da24]{background-color:#f2f5fc}.page-trial-wrapper .part-card[data-v-2143da24]{background-color:#fff;margin-bottom:.26667rem}.page-trial-wrapper .risk-content[data-v-2143da24] .van-collapse-item__title--expanded{padding:0 .4rem 0 0;display:flex;align-items:center}.page-trial-wrapper .risk-content[data-v-2143da24] .van-collapse-item__content{padding:0}.page-trial-wrapper .plan-risk[data-v-2143da24] .van-tabs__line{display:none}.page-trial-wrapper .footer-bar[data-v-2143da24]{position:fixed;width:100%;bottom:0;left:0;background-color:#fff;height:2rem;padding:.4rem;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #efeff4}.page-trial-wrapper .footer-bar .trial-result[data-v-2143da24]{width:5.86667rem;color:#ff5840;font-size:.32rem;font-weight:600}.page-trial-wrapper .footer-bar .trial-result .result-num[data-v-2143da24]{font-size:.61333rem;font-weight:500;margin-left:.17333rem}.page-trial-wrapper .footer-bar .trial-operate button[data-v-2143da24]{width:3.73333rem}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip[data-v-2143da24]{position:absolute;z-index:122;height:.56rem;border-radius:1.33333rem;background-color:#ff5840;font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;color:#fff;line-height:.49333rem;padding:.04rem .28rem .02667rem .26667rem;right:.4rem;top:-.46667rem;display:flex;align-items:center}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip .close-icon[data-v-2143da24]{margin-left:.17333rem}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip[data-v-2143da24]:after{content:" ";position:absolute;z-index:11;width:0;height:0;border:.13333rem solid transparent;border-top:.13333rem solid #ff5840;border-right:.13333rem solid #ff5840;right:.49333rem;bottom:-.16rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-bcfc5721.js","./trial-legacy-d200784a.js","./index-legacy-5332755c.js","./useStorage-legacy-975d2ac4.js","./index-legacy-31fbac13.js","./trial-legacy-0b6f4778.js"],(function(e){"use strict";var a,r,t,i,n,o,l,s,d,c,u,p,f,g,m,v,k,y,h,P,b,C,L,V,O,_,R,I,T,F,w,D;return{setters:[function(e){a=e.g,r=e.af,t=e.Q,i=e.C,n=e.L,o=e.a3,l=e.X,s=e.o,d=e.r,c=e.h,u=e.j,p=e.k,f=e.z,g=e.m,m=e.n,v=e.s,k=e.y,y=e.F,h=e.E,P=e.I,b=e.B},function(e){C=e.P,L=e.R,V=e.i,O=e.p},function(e){_=e.n,R=e.g},function(e){I=e.u},function(e){T=e._,F=e.P},function(e){w=e.P,D=e.I}],execute:function(){const j={key:0,class:"part-card"},N={key:1,class:"part-card"},x={class:"risk-content"},B={key:0,class:"risk"},S={key:1,class:"plan-risk"},A={class:"footer-bar"},E={class:"trial-result"},z={class:"result-num"},q=b(" 元起 "),U={class:"trial-operate"},M={key:0,class:"retrial-tip"},H=b(" 条件更改后，需要重新试算 "),J=b("去试算"),K=b("立即投保"),X=a({setup(e){const a=r(),b=t(),{productCode:T="MMBBSF",templateId:X=1,agentCode:Q="test",agencyCode:W="",tenantId:Y=9991000007,venderCode:G="99"}=b.query,Z=i({personVO:{}}),$=i({insuredCode:"",personVO:{}}),ee=i({}),ae=i({}),re=i({}),te=i({}),ie=i({}),ne=n({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[]});o("premium",ie.value),o("source",""),I().get("userInfo");const oe="premiumTrial",le=()=>{ne.retrialTip=!1},se=()=>{_({agencyId:W,saleUserId:Q,tenantId:Y,venderCode:G,orderDataSource:1,pageCode:oe,extInfo:{templateId:+(X||1),pageCode:oe},tenantOrderHolder:{},tenantOrderInsuredList:[{tenantOrderProductList:[{productCode:ne.riskBaseInfo.productCode||"",productName:ne.riskBaseInfo.productName||"",premium:ne.trialResult.premium||0,tenantOrderRiskList:ne.insuredRiskList}]}]}).then((({code:e,data:r})=>{"10000"===e&&"jumpToPage"===r.pageAction.pageAction&&a.push({path:F[r.pageAction.data.nextPageCode],query:{...b.query,orderNo:r.pageAction.data.orderNo}})}))},de=()=>{const e=JSON.parse(JSON.stringify(ee.value[ne.currentPlan])),a=Object.values(e).find((e=>1===e.riskType)),r=Object.values(e).map((e=>{const r=e;if("3"===r.chargePeriod){const e=(a.chargePeriod||"").split("_");e[1]&&(e[1]-=1),r.chargePeriod=e.join("_")}return r.liabilityVOList=(r.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const a=e;return"0"===a.liabilityAttributeValue&&(a.liabilityAttributeValue=""),a})),r})),t={holder:Z.value,productCode:ne.riskBaseInfo.productCode,insuredVOList:[{...$.value,productPlanVOList:[{planCode:ne.currentPlan||"",riskVOList:r}]}]};O({...t}).then((({code:e,data:a})=>{if("10000"===e){ne.retrialTip=!1,ne.trialResult=a,ne.canTrial=!1;const e={},r=(a=[])=>{(a||[]).forEach((a=>{var t;e[a.riskCode]=a,null!==(t=a.riskPremiumDetailVOList)&&void 0!==t&&t.length&&r(a.riskPremiumDetailVOList)}))};r(a.riskPremiumDetailVOList),((e,a)=>{ne.insuredRiskList=e.map((e=>{var r,t;return{initialAmount:null===(r=a[e.riskCode])||void 0===r?void 0:r.amount,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:w[e.chargePeriod.split("_")[0]],insurancePeriodType:D[e.coveragePeriod.split("_")[0]],insurancePeriodValue:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,initialPremium:null===(t=a[e.riskCode])||void 0===t?void 0:t.premium}}))})(t.insuredVOList[0].productPlanVOList[0].riskVOList,e),Object.assign(ie.value,e)}}))},ce=()=>{var e,a,r,t,i;Promise.all([null===(e=ae.value)||void 0===e||null===(a=e.validateForm)||void 0===a?void 0:a.call(e),null===(r=re.value)||void 0===r||null===(t=r.validateForm)||void 0===t?void 0:t.call(r),null===(i=te.value)||void 0===i?void 0:i.validate()]).then((()=>{de()}))},ue=e=>{ne.holderFactor=e.holderFactorList,ne.insuredFactor=e.insuredFactorList,ne.ageRange=e.ageRange};return l([()=>ee.value,()=>Z.value,()=>$.value],(e=>{e&&!ne.canTrial&&(ne.canTrial=!0,ne.retrialTip=!0)}),{deep:!0}),s((()=>{V({productCode:T,source:1}).then((({code:e,data:a})=>{"10000"===e&&(ne.riskBaseInfo=a.productBasicInfoVO,(a.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,a)=>{0===a&&(ne.currentPlan=e.planCode||"0"),Object.assign(ee.value,{[e.planCode||"0"]:{}})})),ne.riskData=a.productRiskVoList[0].riskDetailVOList||[],ne.riskPlanData=a.productRelationPlanVOList||[])})).finally((()=>{})),R({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:a})=>{if("10000"===e){const e={};a.forEach((a=>{e[a.dictCode]=a.dictItemList})),ne.enumList=e}}))})),(e,a)=>{const r=d("ProTitle"),t=d("VanForm"),i=d("ProTabButton"),n=d("VanTab"),o=d("VanTabs"),l=d("van-collapse-item"),s=d("van-collapse"),b=d("VanButton"),V=d("ProPageWrap");return c(),u(V,{class:"page-trial-wrapper"},{default:p((()=>{var e,d,V;return[f(ne).holderFactor.length?(c(),g("div",j,[m(r,{title:"投保人"}),m(C,{ref_key:"holderRef",ref:ae,"insured-code":null===(e=f(ne).riskBaseInfo)||void 0===e?void 0:e.insurerCode,"form-info":Z.value.personVO,"factor-list":f(ne).holderFactor,"age-range":f(ne).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):v("",!0),f(ne).insuredFactor.length?(c(),g("div",N,[m(r,{title:"被保人"}),m(C,{ref_key:"insuredRef",ref:re,"insured-code":null===(d=f(ne).riskBaseInfo)||void 0===d?void 0:d.insurerCode,"form-info":$.value.personVO,"factor-list":f(ne).insuredFactor,"age-range":f(ne).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):v("",!0),k("div",x,[m(s,{modelValue:f(ne).collapseName,"onUpdate:modelValue":a[1]||(a[1]=e=>f(ne).collapseName=e)},{default:p((()=>[m(l,{name:"1"},{title:p((()=>[m(r,{title:"投保方案"})])),default:p((()=>[f(ne).riskData.length?(c(),g("div",B,[m(t,{ref_key:"riskFormRef",ref:te,"input-align":"right","error-message-align":"right"},{default:p((()=>[m(L,{"risk-info":ee.value[0],enums:f(ne).enumList,"origin-data":f(ne).riskData,"pick-factor":ue},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):v("",!0),f(ne).riskPlanData.length?(c(),g("div",S,[m(t,{ref_key:"riskFormRef",ref:te,"input-align":"right","error-message-align":"right"},{default:p((()=>[m(o,{active:f(ne).currentPlan,"onUpdate:active":a[0]||(a[0]=e=>f(ne).currentPlan=e)},{default:p((()=>[(c(!0),g(y,null,h(f(ne).riskPlanData,(e=>(c(),u(n,{key:e.planCode,name:e.planCode,title:e.planName},{title:p((()=>[m(i,{title:e.planName,active:f(ne).currentPlan===e.planCode},null,8,["title","active"])])),default:p((()=>[e.planCode===f(ne).currentPlan?(c(),u(L,{key:0,"risk-info":ee.value[e.planCode],enums:f(ne).enumList,"origin-data":e.riskDetailVOList,"pick-factor":ue},null,8,["risk-info","enums","origin-data"])):v("",!0)])),_:2},1032,["name","title"])))),128))])),_:1},8,["active"])])),_:1},512)])):v("",!0)])),_:1})])),_:1},8,["modelValue"])]),k("div",A,[k("span",E,[k("span",z,P((f(ne).retrialTip?"0":(null===(V=f(ne).trialResult)||void 0===V?void 0:V.premium)||"0").toLocaleString()),1),q]),k("div",U,[f(ne).retrialTip?(c(),g("div",M,[H,k("span",{class:"close-icon",onClick:le},"X")])):v("",!0),f(ne).canTrial?(c(),u(b,{key:1,type:"primary",onClick:ce},{default:p((()=>[J])),_:1})):(c(),u(b,{key:2,type:"primary",onClick:se},{default:p((()=>[K])),_:1}))])])]})),_:1})}}});e("default",T(X,[["__scopeId","data-v-2143da24"]]))}}}))}();
