!function(){var e=document.createElement("style");e.innerHTML='.com-product-risk-wrapper .popup-container[data-v-2ed1ccdc]{background-color:var(--zaui-global-bg, #f2f5fc)}.com-product-risk-wrapper .popup-container .popup-title[data-v-2ed1ccdc]{height:1.38667rem;display:flex;align-items:center;justify-content:center;padding:0 .85333rem;font-size:.45333rem;font-weight:600;background-color:#fff}.com-product-risk-wrapper .part-card[data-v-2ed1ccdc]{background-color:#fff}.com-product-risk-wrapper .part-card[data-v-2ed1ccdc] .body{padding:0}.com-product-risk-wrapper .risk-content[data-v-2ed1ccdc] .van-collapse-item__title--expanded{padding:0 .4rem 0 0;display:flex;align-items:center}.com-product-risk-wrapper .risk-content[data-v-2ed1ccdc] .van-collapse-item__content{padding:0}.com-product-risk-wrapper .plan-risk[data-v-2ed1ccdc] .van-tabs__line{display:none}.com-product-risk-wrapper .footer-bar[data-v-2ed1ccdc]{position:fixed;width:100%;bottom:0;left:0;background-color:#fff;height:2rem;padding:.4rem;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #efeff4}.com-product-risk-wrapper .footer-bar .trial-result[data-v-2ed1ccdc]{width:5.86667rem;color:var(--zaui-price, #ff5840);font-size:.32rem;font-weight:600}.com-product-risk-wrapper .footer-bar .trial-result .result-num[data-v-2ed1ccdc]{font-size:.61333rem;font-weight:500;margin-left:.17333rem}.com-product-risk-wrapper .footer-bar .trial-operate button[data-v-2ed1ccdc]{width:3.73333rem}.com-product-risk-wrapper .footer-bar .trial-operate .retrial-tip[data-v-2ed1ccdc]{position:absolute;z-index:122;height:.56rem;border-radius:1.33333rem;background-color:var(--zaui-price, #ff5840);font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;color:#fff;line-height:.49333rem;padding:.04rem .28rem .02667rem .26667rem;right:.4rem;top:-.56rem;display:flex;align-items:center}.com-product-risk-wrapper .footer-bar .trial-operate .retrial-tip .close-icon[data-v-2ed1ccdc]{margin-left:.17333rem}.com-product-risk-wrapper .footer-bar .trial-operate .retrial-tip[data-v-2ed1ccdc]:after{content:" ";position:absolute;z-index:11;width:0;height:0;border:.13333rem solid transparent;border-top:.13333rem solid #ff5840;border-right:.13333rem solid #ff5840;right:.49333rem;bottom:-.26667rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-92a8f610.js","./index-legacy-1786335a.js","./trial-legacy-f5d0eb6e.js","./index-legacy-eeaac3c0.js"],(function(e){"use strict";var r,t,a,i,o,d,s,n,l,c,u,p,f,m,v,g,k,h,b,y,O,L,V,w,I,P;return{setters:[function(e){r=e.a,t=e.g,a=e.E,i=e.M,o=e.a6,d=e.y,s=e._,n=e.o,l=e.r,c=e.j,u=e.n,p=e.p,f=e.m,m=e.z,v=e.A,g=e.k,k=e.t,h=e.a4,b=e.a5,y=e.C},function(e){O=e.P,L=e.a},function(e){V=e.i,w=e.p},function(e){I=e._,P=e.E}],execute:function(){e("u",r({id:"createProposal",state:()=>({proposalInfo:{},trialData:[],excludeProduct:[],proposalId:0}),actions:{setProposalInfo(e){this.$state.proposalInfo=e},setTrialData(e){this.$state.trialData=e},setExcludeProduct(e){this.$state.excludeProduct=e}}}));const R={class:"com-product-risk-wrapper"},C={class:"popup-container"},_=(e=>(h("data-v-2ed1ccdc"),e=e(),b(),e))((()=>m("div",{class:"popup-title"},"请选择保障方案",-1))),D={class:"risk-trial-wrapper"},x={class:"risk-content"},j={key:0,class:"risk"},F={class:"footer-bar"},S=y("确定"),B=t({props:{isShow:{type:Boolean,default:!1},type:{default:"add"},productId:{default:0},riskType:{default:1},formInfo:{default:{}},productData:{default:()=>({})},holder:{default:()=>({})},insured:{default:()=>({})},riderRisk:{default:()=>[]},currentRisk:{default:()=>[]}},emits:["close","finished"],setup(e,{emit:r}){var t,h;const b=e,y=a({personVO:{occupationCodeList:[],...b.holder}}),I=a({insuredCode:"",personVO:{occupationCodeList:(null===(t=((null===(h=b.insured)||void 0===h?void 0:h.proposalInsuredProductList)||[]).find((e=>e.productId===b.productData.productBasicInfoVO.id)))||void 0===t?void 0:t.occupationCodeList)||[],...b.insured}}),B=a({}),A=a({}),T=a({}),E=a({}),z=a({}),N=i({currentPlan:"0",isShow:b.isShow,riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],type:b.type});o("premium",z.value),o("source",{type:N.type,origin:"proposal",showRiskList:b.currentRisk});const $=d((()=>{var e;let r="";if(null!==(e=N.riskData)&&void 0!==e&&e[0]){const e=N.riskData[0],t=((null==e?void 0:e.requiredRiderRiskVOList)||[]).map((e=>e.riskName));t.length&&(r=`特殊提示: ${e.riskName}和${t.join("、")}必须同时投保`)}return r})),M=()=>{var e;const t=JSON.parse(JSON.stringify(B.value[N.currentPlan])),a=Object.values(t).find((e=>1===e.riskType)),i=Object.values(t).map((e=>{const r=e;if("3"===r.chargePeriod){const e=(a.chargePeriod||"").split("_");e[1]&&(e[1]-=1),r.chargePeriod=e.join("_")}return r.liabilityVOList=(r.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const r=e;return"0"===r.liabilityAttributeValue&&(r.liabilityAttributeValue=""),r})),r})),o={holder:y.value,productCode:N.riskBaseInfo.productCode,insuredVOList:[{...I.value,productPlanVOList:[{planCode:N.currentPlan||"",insurerCode:null===(e=N.riskBaseInfo)||void 0===e?void 0:e.insurerCode,riskVOList:i}]}]};w({...o}).then((({code:e,data:t})=>{if("10000"===e){N.retrialTip=!1,N.trialResult=t,N.canTrial=!1;const e={},a=(r=[])=>{(r||[]).forEach((r=>{var t;e[r.riskCode]=r,null!==(t=r.riskPremiumDetailVOList)&&void 0!==t&&t.length&&a(r.riskPremiumDetailVOList)}))};a(t.riskPremiumDetailVOList),Object.assign(z.value,e),r("finished",((e,r)=>{var t,a,i,o,d,s,n,l,c;const u=(e.insuredVOList[0].productPlanVOList[0].riskVOList||[]).map((e=>({...e,premium:r[e.riskCode].premium,amount:r[e.riskCode].amount})));return{proposalHolder:{...null===(t=e.holder)||void 0===t?void 0:t.personVO},proposalInsuredList:[{...e.insuredVOList[0].personVO,dateRange:{min:null===(a=T.value)||void 0===a||null===(i=a.ageRangeObj)||void 0===i?void 0:i.minAge,max:null===(o=T.value)||void 0===o||null===(d=o.ageRangeObj)||void 0===d?void 0:d.maxAge},proposalInsuredProductList:[{productId:N.riskBaseInfo.id,productName:N.riskBaseInfo.productName,dateRange:{min:null===(s=T.value)||void 0===s||null===(n=s.ageRangeObj)||void 0===n?void 0:n.minAge,max:null===(l=T.value)||void 0===l||null===(c=l.ageRangeObj)||void 0===c?void 0:c.maxAge},occupationCodeList:e.insuredVOList[0].personVO.occupationCodeList,proposalProductRiskList:u}]}]}})(o,e))}else N.retrialTip=!0}))},H=()=>{var e,r,t,a,i;Promise.all([null===(e=A.value)||void 0===e||null===(r=e.validateForm)||void 0===r?void 0:r.call(e),null===(t=T.value)||void 0===t||null===(a=t.validateForm)||void 0===a?void 0:a.call(t),null===(i=E.value)||void 0===i?void 0:i.validate()]).then((()=>{M()}))},J=()=>{r("close")},K=e=>{N.holderFactor=e.holderFactorList,N.insuredFactor=e.insuredFactorList,N.ageRange=e.ageRange};return s([()=>B.value,()=>y.value,()=>I.value],(e=>{e&&!N.canTrial&&(N.canTrial=!0,N.retrialTip=!0)}),{deep:!0}),s((()=>b.isShow),(e=>{N.isShow=e}),{immediate:!0}),s((()=>b.productId),(e=>{e&&V({productId:b.productId,source:2}).then((({code:e,data:r})=>{"10000"===e&&(N.riskBaseInfo=r.productBasicInfoVO,(r.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,r)=>{0===r&&(N.currentPlan=e.planCode||"0"),Object.assign(B.value,{[e.planCode||r]:{}})})),N.riskData=r.productRiskVoList[0].riskDetailVOList||[],N.riskPlanData=r.productRelationPlanVOList||[])})).finally((()=>{}))}),{immediate:!0}),s((()=>b.formInfo),((e={})=>{if("add"!==b.type&&"repeatAdd"!==b.type){const r={};e.proposalProductRiskList.forEach((e=>{r[e.riskId]=e})),Object.assign(B.value,{0:r})}}),{deep:!0,immediate:!0}),s((()=>b.productData),(e=>{var r;"add"!==b.type&&"repeatAdd"!==b.type&&(N.riskBaseInfo=e.productBasicInfoVO,N.riskData=(null===(r=e.productRiskVoList)||void 0===r?void 0:r[0].riskDetailVOList)||[])}),{deep:!0,immediate:!0}),s((()=>b.type),(e=>{N.type=e})),n((()=>{P({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:r})=>{if("10000"===e){const e={};r.forEach((r=>{e[r.dictCode]=r.dictItemList})),N.enumList=e}}))})),(e,r)=>{const t=l("ProMessage"),a=l("ProCard"),i=l("VanForm"),o=l("VanButton"),d=l("VanPopup");return c(),u("div",R,[p(d,{show:v(N).isShow,"onUpdate:show":r[0]||(r[0]=e=>v(N).isShow=e),round:"",position:"bottom",closeable:"",style:{height:"80%"},onClose:J},{default:f((()=>[m("div",C,[_,v($)?(c(),g(t,{key:0,content:v($)},null,8,["content"])):k("",!0),m("div",D,[v(N).holderFactor.length?(c(),g(a,{key:0,title:"投保人",class:"part-card"},{default:f((()=>{var e;return[p(O,{ref_key:"holderRef",ref:A,"insured-code":null===(e=v(N).riskBaseInfo)||void 0===e?void 0:e.insurerCode,"form-info":y.value.personVO,"factor-list":v(N).holderFactor,"age-range":v(N).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])]})),_:1})):k("",!0),v(N).insuredFactor.length?(c(),g(a,{key:1,title:"被保人",class:"part-card"},{default:f((()=>{var e;return[p(O,{ref_key:"insuredRef",ref:T,"insured-code":null===(e=v(N).riskBaseInfo)||void 0===e?void 0:e.insurerCode,"form-info":I.value.personVO,"factor-list":v(N).insuredFactor,"age-range":v(N).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])]})),_:1})):k("",!0),m("div",x,[p(a,{title:"投保方案",class:"part-card"},{default:f((()=>[v(N).riskData.length?(c(),u("div",j,[p(i,{ref_key:"riskFormRef",ref:E,"input-align":"right","error-message-align":"right"},{default:f((()=>[p(L,{"risk-info":B.value[0],enums:v(N).enumList,"origin-data":v(N).riskData,"pick-factor":K},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):k("",!0)])),_:1})])]),m("div",F,[p(o,{block:"",type:"primary",onClick:H},{default:f((()=>[S])),_:1})])])])),_:1},8,["show"])])}}});e("P",I(B,[["__scopeId","data-v-2ed1ccdc"]]))}}}))}();
