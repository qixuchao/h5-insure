!function(){var e=document.createElement("style");e.innerHTML='.page-trial-wrapper[data-v-9347ae30]{background-color:#f2f5fc}.page-trial-wrapper .part-card[data-v-9347ae30]{background-color:#fff;margin-bottom:.26667rem}.page-trial-wrapper .risk-content[data-v-9347ae30] .van-collapse-item__title--expanded{padding:0 .4rem 0 0;display:flex;align-items:center}.page-trial-wrapper .risk-content[data-v-9347ae30] .van-collapse-item__content{padding:0}.page-trial-wrapper .plan-risk[data-v-9347ae30] .van-tabs__line{display:none}.page-trial-wrapper .footer-bar[data-v-9347ae30]{position:fixed;width:100%;bottom:0;left:0;background-color:#fff;height:2rem;padding:.4rem;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #efeff4}.page-trial-wrapper .footer-bar .trial-result[data-v-9347ae30]{width:5.86667rem;color:#ff5840;font-size:.32rem;font-weight:600}.page-trial-wrapper .footer-bar .trial-result .result-num[data-v-9347ae30]{font-size:.61333rem;font-weight:500;margin-left:.17333rem}.page-trial-wrapper .footer-bar .trial-operate button[data-v-9347ae30]{width:3.73333rem}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip[data-v-9347ae30]{position:absolute;z-index:122;height:.56rem;border-radius:1.33333rem;background-color:#ff5840;font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;color:#fff;line-height:.49333rem;padding:.04rem .28rem .02667rem .26667rem;right:.4rem;top:-.46667rem;display:flex;align-items:center}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip .close-icon[data-v-9347ae30]{margin-left:.17333rem}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip[data-v-9347ae30]:after{content:" ";position:absolute;z-index:11;width:0;height:0;border:.13333rem solid transparent;border-top:.13333rem solid #ff5840;border-right:.13333rem solid #ff5840;right:.49333rem;bottom:-.16rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-82e10760.js","./trial-legacy-96f2ab00.js","./index-legacy-09d71eaf.js","./useStorage-legacy-46555cb8.js","./index-legacy-dfe03d8e.js","./trial-legacy-961024df.js","./useDicData-legacy-7a28a046.js"],(function(e){"use strict";var a,r,t,i,n,o,l,s,d,u,c,p,f,g,m,v,k,y,h,P,b,C,L,V,_,O,R,I,T,w,F,D;return{setters:[function(e){a=e.g,r=e.aj,t=e.Q,i=e.E,n=e.M,o=e.a3,l=e.X,s=e.o,d=e.r,u=e.j,c=e.k,p=e.m,f=e.A,g=e.n,m=e.p,v=e.t,k=e.z,y=e.F,h=e.G,P=e.J,b=e.C},function(e){C=e.P,L=e.R,V=e.i,_=e.p},function(e){O=e.n,R=e.g},function(e){I=e.u},function(e){T=e._,w=e.P},function(e){F=e.P,D=e.I},function(){}],execute:function(){const N={key:0,class:"part-card"},j={key:1,class:"part-card"},B={class:"risk-content"},x={key:0,class:"risk"},A={key:1,class:"plan-risk"},S={class:"footer-bar"},E={class:"trial-result"},z={class:"result-num"},q=b(" 元起 "),M={class:"trial-operate"},U={key:0,class:"retrial-tip"},J=b(" 条件更改后，需要重新试算 "),H=b("去试算"),K=b("立即投保"),X=a({setup(e){const a=r(),b=t(),{productCode:T="MMBBSF",templateId:X=1,agentCode:G="test",agencyCode:Q="",tenantId:W=9991000007,venderCode:Y="99"}=b.query,Z=i({personVO:{}}),$=i({insuredCode:"",personVO:{}}),ee=i({}),ae=i({}),re=i({}),te=i({}),ie=i({}),ne=n({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[]});o("premium",ie.value),I().get("userInfo");const oe="premiumTrial",le=()=>{ne.retrialTip=!1},se=()=>{O({agencyId:Q,saleUserId:G,tenantId:W,venderCode:Y,orderDataSource:1,pageCode:oe,extInfo:{templateId:+(X||1),pageCode:oe,iseeBizNo:window.iseeBiz},tenantOrderHolder:{},tenantOrderInsuredList:[{tenantOrderProductList:[{productCode:ne.riskBaseInfo.productCode||"",productName:ne.riskBaseInfo.productName||"",premium:ne.trialResult.premium||0,tenantOrderRiskList:ne.insuredRiskList}]}]}).then((({code:e,data:r})=>{"10000"===e&&"jumpToPage"===r.pageAction.pageAction&&a.push({path:w[r.pageAction.data.nextPageCode],query:{...b.query,orderNo:r.pageAction.data.orderNo}})}))},de=()=>{const e=JSON.parse(JSON.stringify(ee.value[ne.currentPlan])),a=Object.values(e).find((e=>1===e.riskType)),r=Object.values(e).map((e=>{const r=e;if("3"===r.chargePeriod){const e=(a.chargePeriod||"").split("_");e[1]&&(e[1]-=1),r.chargePeriod=e.join("_")}return r.liabilityVOList=(r.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const a=e;return"0"===a.liabilityAttributeValue&&(a.liabilityAttributeValue=""),a})),r})),t={holder:Z.value,productCode:ne.riskBaseInfo.productCode,insuredVOList:[{...$.value,productPlanVOList:[{planCode:ne.currentPlan||"",riskVOList:r}]}]};_({...t}).then((({code:e,data:a})=>{if("10000"===e){ne.retrialTip=!1,ne.trialResult=a,ne.canTrial=!1;const e={},r=(a=[])=>{(a||[]).forEach((a=>{var t;e[a.riskCode]=a,null!==(t=a.riskPremiumDetailVOList)&&void 0!==t&&t.length&&r(a.riskPremiumDetailVOList)}))};r(a.riskPremiumDetailVOList),((e,a)=>{ne.insuredRiskList=e.map((e=>{var r,t;return{initialAmount:null===(r=a[e.riskCode])||void 0===r?void 0:r.amount,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:F[e.chargePeriod.split("_")[0]],insurancePeriodType:D["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?void 0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,initialPremium:null===(t=a[e.riskCode])||void 0===t?void 0:t.premium}}))})(t.insuredVOList[0].productPlanVOList[0].riskVOList,e),Object.assign(ie.value,e)}}))},ue=()=>{var e,a,r,t,i;Promise.all([null===(e=ae.value)||void 0===e||null===(a=e.validateForm)||void 0===a?void 0:a.call(e),null===(r=re.value)||void 0===r||null===(t=r.validateForm)||void 0===t?void 0:t.call(r),null===(i=te.value)||void 0===i?void 0:i.validate()]).then((()=>{de()}))},ce=e=>{ne.holderFactor=e.holderFactorList,ne.insuredFactor=e.insuredFactorList,ne.ageRange=e.ageRange};return l([()=>ee.value,()=>Z.value,()=>$.value],(e=>{e&&!ne.canTrial&&(ne.canTrial=!0,ne.retrialTip=!0)}),{deep:!0}),s((()=>{V({productCode:T,source:1}).then((({code:e,data:a})=>{var r;"10000"===e&&(ne.riskBaseInfo=a.productBasicInfoVO,(a.productRelationPlanVOList.length?a.productRelationPlanVOList:a.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,a)=>{0===a&&(ne.currentPlan=e.planCode||"0"),Object.assign(ee.value,{[e.planCode||"0"]:{}})})),ne.riskData=(null===(r=a.productRiskVoList[0])||void 0===r?void 0:r.riskDetailVOList)||[],ne.riskPlanData=a.productRelationPlanVOList||[])})).finally((()=>{})),R({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:a})=>{if("10000"===e){const e={};a.forEach((a=>{e[a.dictCode]=a.dictItemList})),ne.enumList=e}}))})),(e,a)=>{const r=d("ProTitle"),t=d("VanForm"),i=d("ProTabButton"),n=d("VanTab"),o=d("VanTabs"),l=d("van-collapse-item"),s=d("van-collapse"),b=d("VanButton"),V=d("ProPageWrap");return u(),c(V,{class:"page-trial-wrapper"},{default:p((()=>{var e,d,V;return[f(ne).holderFactor.length?(u(),g("div",N,[m(r,{title:"投保人"}),m(C,{ref_key:"holderRef",ref:ae,"insured-code":null===(e=f(ne).riskBaseInfo)||void 0===e?void 0:e.insurerCode,"form-info":Z.value.personVO,"factor-list":f(ne).holderFactor,"age-range":f(ne).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):v("",!0),f(ne).insuredFactor.length?(u(),g("div",j,[m(r,{title:"被保人"}),m(C,{ref_key:"insuredRef",ref:re,"insured-code":null===(d=f(ne).riskBaseInfo)||void 0===d?void 0:d.insurerCode,"form-info":$.value.personVO,"factor-list":f(ne).insuredFactor,"age-range":f(ne).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):v("",!0),k("div",B,[m(s,{modelValue:f(ne).collapseName,"onUpdate:modelValue":a[1]||(a[1]=e=>f(ne).collapseName=e)},{default:p((()=>[m(l,{name:"1"},{title:p((()=>[m(r,{title:"投保方案"})])),default:p((()=>[f(ne).riskData.length?(u(),g("div",x,[m(t,{ref_key:"riskFormRef",ref:te,"input-align":"right","error-message-align":"right"},{default:p((()=>[m(L,{"risk-info":ee.value[0],enums:f(ne).enumList,"origin-data":f(ne).riskData,"pick-factor":ce},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):v("",!0),f(ne).riskPlanData.length?(u(),g("div",A,[m(t,{ref_key:"riskFormRef",ref:te,"input-align":"right","error-message-align":"right"},{default:p((()=>[m(o,{active:f(ne).currentPlan,"onUpdate:active":a[0]||(a[0]=e=>f(ne).currentPlan=e)},{default:p((()=>[(u(!0),g(y,null,h(f(ne).riskPlanData,(e=>(u(),c(n,{key:e.planCode,name:e.planCode,title:e.planName},{title:p((()=>[m(i,{title:e.planName,active:f(ne).currentPlan===e.planCode},null,8,["title","active"])])),default:p((()=>{var a;return[e.planCode===f(ne).currentPlan?(u(),c(L,{key:0,"risk-info":ee.value[e.planCode],enums:f(ne).enumList,"origin-data":null===(a=e.productRiskVoList)||void 0===a?void 0:a[0].riskDetailVOList,"pick-factor":ce},null,8,["risk-info","enums","origin-data"])):v("",!0)]})),_:2},1032,["name","title"])))),128))])),_:1},8,["active"])])),_:1},512)])):v("",!0)])),_:1})])),_:1},8,["modelValue"])]),k("div",S,[k("span",E,[k("span",z,P((f(ne).retrialTip?"0":(null===(V=f(ne).trialResult)||void 0===V?void 0:V.premium)||"0").toLocaleString()),1),q]),k("div",M,[f(ne).retrialTip?(u(),g("div",U,[J,k("span",{class:"close-icon",onClick:le},"X")])):v("",!0),f(ne).canTrial?(u(),c(b,{key:1,type:"primary",onClick:ue},{default:p((()=>[H])),_:1})):(u(),c(b,{key:2,type:"primary",onClick:se},{default:p((()=>[K])),_:1}))])])]})),_:1})}}});e("default",T(X,[["__scopeId","data-v-9347ae30"]]))}}}))}();
