!function(){var e=document.createElement("style");e.innerHTML='.com-product-risk-wrapper .popup-container[data-v-65cbf84c]{background-color:var(--zaui-global-bg, #f2f5fc)}.com-product-risk-wrapper .popup-container .popup-title[data-v-65cbf84c]{height:1.38667rem;display:flex;align-items:center;justify-content:center;padding:0 .85333rem;font-size:.45333rem;font-weight:600;background-color:#fff}.com-product-risk-wrapper .part-card[data-v-65cbf84c]{background-color:#fff}.com-product-risk-wrapper .part-card[data-v-65cbf84c] .body{padding:0}.com-product-risk-wrapper .risk-content[data-v-65cbf84c] .van-collapse-item__title--expanded{padding:0 .4rem 0 0;display:flex;align-items:center}.com-product-risk-wrapper .risk-content[data-v-65cbf84c] .van-collapse-item__content{padding:0}.com-product-risk-wrapper .plan-risk[data-v-65cbf84c] .van-tabs__line{display:none}.com-product-risk-wrapper .footer-bar[data-v-65cbf84c]{position:fixed;width:100%;bottom:0;left:0;background-color:#fff;height:2rem;padding:.4rem;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #efeff4}.com-product-risk-wrapper .footer-bar .trial-result[data-v-65cbf84c]{width:5.86667rem;color:var(--zaui-price, #ff5840);font-size:.32rem;font-weight:600}.com-product-risk-wrapper .footer-bar .trial-result .result-num[data-v-65cbf84c]{font-size:.61333rem;font-weight:500;margin-left:.17333rem}.com-product-risk-wrapper .footer-bar .trial-operate button[data-v-65cbf84c]{width:3.73333rem}.com-product-risk-wrapper .footer-bar .trial-operate .retrial-tip[data-v-65cbf84c]{position:absolute;z-index:122;height:.56rem;border-radius:1.33333rem;background-color:var(--zaui-price, #ff5840);font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;color:#fff;line-height:.49333rem;padding:.04rem .28rem .02667rem .26667rem;right:.4rem;top:-.56rem;display:flex;align-items:center}.com-product-risk-wrapper .footer-bar .trial-operate .retrial-tip .close-icon[data-v-65cbf84c]{margin-left:.17333rem}.com-product-risk-wrapper .footer-bar .trial-operate .retrial-tip[data-v-65cbf84c]:after{content:" ";position:absolute;z-index:11;width:0;height:0;border:.13333rem solid transparent;border-top:.13333rem solid #ff5840;border-right:.13333rem solid #ff5840;right:.49333rem;bottom:-.26667rem}\n',document.head.appendChild(e),System.register(["./index-legacy-080a8765.js","./index-legacy-f4341665.js","./trial-legacy-ccbb7859.js"],(function(e){"use strict";var r,t,a,i,o,s,n,d,c,l,p,u,f,m,g,k,b,h,v,y,O,V,w,L,I,P;return{setters:[function(e){r=e.az,t=e._,a=e.d,i=e.r,o=e.z,s=e.aA,n=e.x,d=e.a7,c=e.an,l=e.b,p=e.c,u=e.g,f=e.f,m=e.w,g=e.i,k=e.l,b=e.e,h=e.j,v=e.n,y=e.am,O=e.K,V=e.L},function(e){w=e.P,L=e.a},function(e){I=e.i,P=e.p}],execute:function(){e("u",r({id:"createProposal",state:()=>({proposalInfo:{},trialData:[],excludeProduct:[],proposalId:0}),actions:{setProposalInfo(e){this.$state.proposalInfo=e},setTrialData(e){this.$state.trialData=e},setExcludeProduct(e){this.$state.excludeProduct=e}}}));const R={class:"com-product-risk-wrapper"},C={class:"popup-container"},D=(e=>(O("data-v-65cbf84c"),e=e(),V(),e))((()=>g("div",{class:"popup-title"},"请选择保障方案",-1))),_={class:"risk-trial-wrapper"},x={class:"risk-content"},j={key:0,class:"risk"},F={class:"footer-bar"},S=v("确定"),T=a({props:{isShow:{type:Boolean,default:!1},type:{default:"add"},productId:{default:0},riskType:{default:1},formInfo:{default:{}},productData:{default:()=>({})},holder:{default:()=>({})},insured:{default:()=>({})},riderRisk:{default:()=>[]},currentRisk:{default:()=>[]}},emits:["close","finished"],setup(e,{emit:r}){const t=e,a=i({personVO:{occupationCodeList:[],...t.holder}}),v=i({insuredCode:"",personVO:{occupationCodeList:(t.insured?.proposalInsuredProductList||[]).find((e=>e.productId===t.productData.productBasicInfoVO.id))?.occupationCodeList||[],...t.insured}}),O=i({}),V=i({}),T=i({}),B=i({}),A=i({}),z=o({currentPlan:"0",isShow:t.isShow,riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],type:t.type});s("premium",A.value),s("source",{type:z.type,origin:"proposal",showRiskList:t.currentRisk});const E=n((()=>{let e="";if(z.riskData?.[0]){const r=z.riskData[0],t=(r?.requiredRiderRiskVOList||[]).map((e=>e.riskName));t.length&&(e=`特殊提示: ${r.riskName}和${t.join("、")}必须同时投保`)}return e})),N=()=>{const e=JSON.parse(JSON.stringify(O.value[z.currentPlan])),t=Object.values(e).find((e=>1===e.riskType)),i=Object.values(e).map((e=>{const r=e;return((e,r)=>{const t=e;if("3"===t.chargePeriod){const e=(r.chargePeriod||"").split("_");if(e[1]-=1,1===t.exemptFlag){if("to"===e[0]){let r=0;1===t.exemptType?a.value.personVO?.birthday&&(r=parseInt(""+(+new Date-new Date(a.value.personVO?.birthday))/31536e6,10)):2===t.exemptType&&v.value.personVO?.birthday&&(r=parseInt(""+(+new Date-new Date(v.value.personVO?.birthday))/31536e6,10)),e[1]=e[1]-r}e[0]="year",t.coveragePeriod=e.join("_")}t.chargePeriod=e.join("_")}})(r,t),r.liabilityVOList=(r.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const r=e;return"0"===r.liabilityAttributeValue&&(r.liabilityAttributeValue=""),r})),r})),o={holder:a.value,productCode:z.riskBaseInfo.productCode,insuredVOList:[{...v.value,productPlanVOList:[{planCode:z.currentPlan||"",insurerCode:z.riskBaseInfo?.insurerCode,riskVOList:i}]}]};P({...o}).then((({code:e,data:t})=>{if("10000"===e){z.retrialTip=!1,z.trialResult=t,z.canTrial=!1;const e={},a=(r=[])=>{(r||[]).forEach((r=>{e[r.riskCode]=r,r.riskPremiumDetailVOList?.length&&a(r.riskPremiumDetailVOList)}))};a(t.riskPremiumDetailVOList),Object.assign(A.value,e),r("finished",((e,r)=>{const t=(e.insuredVOList[0].productPlanVOList[0].riskVOList||[]).map((e=>({...e,premium:r[e.riskCode].premium,amount:r[e.riskCode].amount})));return{proposalHolder:{...e.holder?.personVO},proposalInsuredList:[{...e.insuredVOList[0].personVO,dateRange:{min:T.value?.ageRangeObj?.minAge,max:T.value?.ageRangeObj?.maxAge},proposalInsuredProductList:[{productId:z.riskBaseInfo.id,productName:z.riskBaseInfo.productName,dateRange:{min:T.value?.ageRangeObj?.minAge,max:T.value?.ageRangeObj?.maxAge},occupationCodeList:e.insuredVOList[0].personVO.occupationCodeList,proposalProductRiskList:t}]}]}})(o,e))}else z.retrialTip=!0}))},$=()=>{Promise.all([V.value?.validateForm?.(),T.value?.validateForm?.(),B.value?.validate()]).then((()=>{N()}))},K=()=>{r("close")},M=e=>{z.holderFactor=e.holderFactorList,z.insuredFactor=e.insuredFactorList,z.ageRange=e.ageRange};return d([()=>O.value,()=>a.value,()=>v.value],(e=>{e&&!z.canTrial&&(z.canTrial=!0,z.retrialTip=!0)}),{deep:!0}),d((()=>t.isShow),(e=>{z.isShow=e}),{immediate:!0}),d((()=>t.productId),(e=>{e&&I({productId:t.productId,source:2}).then((({code:e,data:r})=>{"10000"===e&&(z.riskBaseInfo=r.productBasicInfoVO,(r.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,r)=>{0===r&&(z.currentPlan=e.planCode||"0"),Object.assign(O.value,{[e.planCode||r]:{}})})),z.riskData=r.productRiskVoList[0].riskDetailVOList||[],z.riskPlanData=r.productRelationPlanVOList||[])})).finally((()=>{}))}),{immediate:!0}),d((()=>t.formInfo),((e={})=>{if("add"!==t.type&&"repeatAdd"!==t.type){const r={};e.proposalProductRiskList.forEach((e=>{r[e.riskId]=e})),Object.assign(O.value,{0:r})}}),{deep:!0,immediate:!0}),d((()=>t.productData),(e=>{"add"!==t.type&&"repeatAdd"!==t.type&&(z.riskBaseInfo=e.productBasicInfoVO,z.riskData=e.productRiskVoList?.[0].riskDetailVOList||[])}),{deep:!0,immediate:!0}),d((()=>t.type),(e=>{z.type=e})),c((()=>{y({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:r})=>{if("10000"===e){const e={};r.forEach((r=>{e[r.dictCode]=r.dictItemList})),z.enumList=e}}))})),(e,r)=>{const t=l("ProMessage"),i=l("ProCard"),o=l("VanForm"),s=l("VanButton"),n=l("VanPopup");return p(),u("div",R,[f(n,{show:k(z).isShow,"onUpdate:show":r[0]||(r[0]=e=>k(z).isShow=e),round:"",position:"bottom",closeable:"",style:{height:"80%"},onClose:K},{default:m((()=>[g("div",C,[D,k(E)?(p(),b(t,{key:0,content:k(E)},null,8,["content"])):h("",!0),g("div",_,[k(z).holderFactor.length?(p(),b(i,{key:0,title:"投保人",class:"part-card"},{default:m((()=>[f(w,{ref_key:"holderRef",ref:V,"insured-code":k(z).riskBaseInfo?.insurerCode,"form-info":a.value.personVO,"factor-list":k(z).holderFactor,"age-range":k(z).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])),_:1})):h("",!0),k(z).insuredFactor.length?(p(),b(i,{key:1,title:"被保人",class:"part-card"},{default:m((()=>[f(w,{ref_key:"insuredRef",ref:T,"insured-code":k(z).riskBaseInfo?.insurerCode,"form-info":v.value.personVO,"factor-list":k(z).insuredFactor,"age-range":k(z).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])),_:1})):h("",!0),g("div",x,[f(i,{title:"投保方案",class:"part-card"},{default:m((()=>[k(z).riskData.length?(p(),u("div",j,[f(o,{ref_key:"riskFormRef",ref:B,"input-align":"right","error-message-align":"right"},{default:m((()=>[f(L,{"risk-info":O.value[0],enums:k(z).enumList,"origin-data":k(z).riskData,"pick-factor":M},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):h("",!0)])),_:1})])]),g("div",F,[f(s,{block:"",type:"primary",onClick:$},{default:m((()=>[S])),_:1})])])])),_:1},8,["show"])])}}});e("P",t(T,[["__scopeId","data-v-65cbf84c"]]))}}}))}();
