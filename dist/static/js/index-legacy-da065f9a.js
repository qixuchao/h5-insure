!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.com-product-risk-wrapper .popup-container[data-v-4f8eda3b]{background-color:#f2f5fc}.com-product-risk-wrapper .popup-container .popup-title[data-v-4f8eda3b]{height:1.38667rem;display:flex;align-items:center;justify-content:center;padding:0 .85333rem;font-size:.45333rem;font-weight:600;background-color:#fff}.com-product-risk-wrapper .part-card[data-v-4f8eda3b]{background-color:#fff;margin-bottom:.26667rem}.com-product-risk-wrapper .risk-content[data-v-4f8eda3b] .van-collapse-item__title--expanded{padding:0 .4rem 0 0;display:flex;align-items:center}.com-product-risk-wrapper .risk-content[data-v-4f8eda3b] .van-collapse-item__content{padding:0}.com-product-risk-wrapper .plan-risk[data-v-4f8eda3b] .van-tabs__line{display:none}.com-product-risk-wrapper .footer-bar[data-v-4f8eda3b]{position:fixed;width:100%;bottom:0;left:0;background-color:#fff;height:2rem;padding:.4rem;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #efeff4}.com-product-risk-wrapper .footer-bar .trial-result[data-v-4f8eda3b]{width:5.86667rem;color:#ff5840;font-size:.32rem;font-weight:600}.com-product-risk-wrapper .footer-bar .trial-result .result-num[data-v-4f8eda3b]{font-size:.61333rem;font-weight:500;margin-left:.17333rem}.com-product-risk-wrapper .footer-bar .trial-operate button[data-v-4f8eda3b]{width:3.73333rem}.com-product-risk-wrapper .footer-bar .trial-operate .retrial-tip[data-v-4f8eda3b]{position:absolute;z-index:122;height:.56rem;border-radius:1.33333rem;background-color:#ff5840;font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;color:#fff;line-height:.49333rem;padding:.04rem .28rem .02667rem .26667rem;right:.4rem;top:-.56rem;display:flex;align-items:center}.com-product-risk-wrapper .footer-bar .trial-operate .retrial-tip .close-icon[data-v-4f8eda3b]{margin-left:.17333rem}.com-product-risk-wrapper .footer-bar .trial-operate .retrial-tip[data-v-4f8eda3b]:after{content:" ";position:absolute;z-index:11;width:0;height:0;border:.13333rem solid transparent;border-top:.13333rem solid #ff5840;border-right:.13333rem solid #ff5840;right:.49333rem;bottom:-.26667rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-6afbc92b.js","./trial-legacy-44334ff0.js","./index-legacy-8b2e74c8.js","./index-legacy-e11c22f2.js"],(function(e){"use strict";var r,t,a,i,o,s,n,d,l,c,u,p,f,m,g,v,k,h,b,y,O,w,R,V,L,P;return{setters:[function(e){r=e.a,t=e.g,a=e.C,i=e.L,o=e.a3,s=e.x,n=e.X,d=e.o,l=e.r,c=e.h,u=e.m,p=e.n,f=e.k,m=e.y,g=e.z,v=e.j,k=e.s,h=e.a1,b=e.a2,y=e.B},function(e){O=e.P,w=e.R,R=e.i,V=e.p},function(e){L=e.g},function(e){P=e._}],execute:function(){e("u",r({id:"createProposal",state:()=>({proposalInfo:{},trialData:[],excludeProduct:[]}),actions:{setProposalInfo(e){this.$state.proposalInfo=e},setTrialData(e){this.$state.trialData=e},setExcludeProduct(e){this.$state.excludeProduct=e}}}));const I={class:"com-product-risk-wrapper"},D={class:"popup-container"},_=(e=>(h("data-v-4f8eda3b"),e=e(),b(),e))((()=>m("div",{class:"popup-title"},"请选择保障方案",-1))),x={class:"risk-trial-wrapper"},C={key:0,class:"part-card"},j={key:1,class:"part-card"},F={class:"risk-content"},S={key:0,class:"risk"},T={class:"footer-bar"},B=y("确认"),A=t({props:{isShow:{type:Boolean,default:!1},type:{default:"add"},productId:{default:0},riskType:{default:1},formInfo:{default:{}},productData:{default:()=>({})},holder:{default:()=>({})},insured:{default:()=>({})},riderRisk:{default:()=>[]},currentRisk:{default:()=>[]}},emits:["close","finished"],setup(e,{emit:r}){const t=e,h=a({personVO:{...t.holder}}),b=a({insuredCode:"",personVO:{...t.insured}}),y=a({}),P=a({}),A=a({}),E=a({}),N=a({}),z=i({currentPlan:"0",isShow:t.isShow,riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],type:t.type});o("premium",N.value),o("source",{type:z.type,origin:"proposal",showRiskList:t.currentRisk});const $=s((()=>{var e;let r="";if(null!==(e=z.riskData)&&void 0!==e&&e[0]){const e=z.riskData[0],t=((null==e?void 0:e.requiredRiderRiskVOList)||[]).map((e=>e.riskName));t.length&&(r=`特殊提示: ${e.riskName}和${t.join("、")}必须同时投保`)}return r})),M=()=>{const e=JSON.parse(JSON.stringify(y.value[z.currentPlan])),t=Object.values(e).find((e=>1===e.riskType)),a=Object.values(e).map((e=>{const r=e;if("3"===r.chargePeriod){const e=(t.chargePeriod||"").split("_");e[1]&&(e[1]-=1),r.chargePeriod=e.join("_")}return r.liabilityVOList=(r.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const r=e;return"0"===r.liabilityAttributeValue&&(r.liabilityAttributeValue=""),r})),r})),i={holder:h.value,productCode:z.riskBaseInfo.productCode,insuredVOList:[{...b.value,productPlanVOList:[{planCode:z.currentPlan||"",riskVOList:a}]}]};V({...i}).then((({code:e,data:t})=>{if("10000"===e){z.retrialTip=!1,z.trialResult=t,z.canTrial=!1;const e={},a=(r=[])=>{(r||[]).forEach((r=>{var t;e[r.riskCode]=r,null!==(t=r.riskPremiumDetailVOList)&&void 0!==t&&t.length&&a(r.riskPremiumDetailVOList)}))};a(t.riskPremiumDetailVOList),Object.assign(N.value,e),r("finished",((e,r)=>{var t,a,i,o,s,n,d,l,c;const u=(e.insuredVOList[0].productPlanVOList[0].riskVOList||[]).map((e=>({...e,premium:r[e.riskCode].premium,amount:r[e.riskCode].amount})));return{proposalHolder:{...null===(t=e.holder)||void 0===t?void 0:t.personVO},proposalInsuredList:[{...e.insuredVOList[0].personVO,dateRange:{min:null===(a=A.value)||void 0===a||null===(i=a.ageRangeObj)||void 0===i?void 0:i.minAge,max:null===(o=A.value)||void 0===o||null===(s=o.ageRangeObj)||void 0===s?void 0:s.maxAge},proposalInsuredProductList:[{productId:z.riskBaseInfo.id,productName:z.riskBaseInfo.productName,dateRange:{min:null===(n=A.value)||void 0===n||null===(d=n.ageRangeObj)||void 0===d?void 0:d.minAge,max:null===(l=A.value)||void 0===l||null===(c=l.ageRangeObj)||void 0===c?void 0:c.maxAge},proposalProductRiskList:u}]}]}})(i,e))}else z.retrialTip=!0}))},U=()=>{var e,r,t,a,i;Promise.all([null===(e=P.value)||void 0===e||null===(r=e.validateForm)||void 0===r?void 0:r.call(e),null===(t=A.value)||void 0===t||null===(a=t.validateForm)||void 0===a?void 0:a.call(t),null===(i=E.value)||void 0===i?void 0:i.validate()]).then((()=>{M()}))},H=()=>{r("close")},J=e=>{z.holderFactor=e.holderFactorList,z.insuredFactor=e.insuredFactorList,z.ageRange=e.ageRange};return n([()=>y.value,()=>h.value,()=>b.value],(e=>{e&&!z.canTrial&&(z.canTrial=!0,z.retrialTip=!0)}),{deep:!0}),n((()=>t.isShow),(e=>{z.isShow=e}),{immediate:!0}),n((()=>t.productId),(e=>{e&&R({productId:t.productId,source:2}).then((({code:e,data:r})=>{"10000"===e&&(z.riskBaseInfo=r.productBasicInfoVO,(r.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,r)=>{0===r&&(z.currentPlan=e.planCode||"0"),Object.assign(y.value,{[e.planCode||r]:{}})})),z.riskData=r.productRiskVoList[0].riskDetailVOList||[],z.riskPlanData=r.productRelationPlanVOList||[])})).finally((()=>{}))}),{immediate:!0}),n((()=>t.formInfo),((e={})=>{if("add"!==t.type&&"repeatAdd"!==t.type){const r={};e.proposalProductRiskList.forEach((e=>{r[e.riskId]=e})),Object.assign(y.value,{0:r})}}),{deep:!0,immediate:!0}),n((()=>t.productData),(e=>{var r;"add"!==t.type&&"repeatAdd"!==t.type&&(z.riskBaseInfo=e.productBasicInfoVO,z.riskData=(null===(r=e.productRiskVoList)||void 0===r?void 0:r[0].riskDetailVOList)||[])}),{deep:!0,immediate:!0}),n((()=>t.type),(e=>{z.type=e})),d((()=>{L({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:r})=>{if("10000"===e){const e={};r.forEach((r=>{e[r.dictCode]=r.dictItemList})),z.enumList=e}}))})),(e,r)=>{const t=l("ProMessage"),a=l("ProTitle"),i=l("VanForm"),o=l("VanButton"),s=l("VanPopup");return c(),u("div",I,[p(s,{show:g(z).isShow,"onUpdate:show":r[0]||(r[0]=e=>g(z).isShow=e),round:"",position:"bottom",closeable:"",style:{height:"80%"},onClose:H},{default:f((()=>{var e,r;return[m("div",D,[_,g($)?(c(),v(t,{key:0,content:g($)},null,8,["content"])):k("",!0),m("div",x,[g(z).holderFactor.length?(c(),u("div",C,[p(a,{title:"投保人"}),p(O,{ref_key:"holderRef",ref:P,"insured-code":null===(e=g(z).riskBaseInfo)||void 0===e?void 0:e.insurerCode,"form-info":h.value.personVO,"factor-list":g(z).holderFactor,"age-range":g(z).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):k("",!0),g(z).insuredFactor.length?(c(),u("div",j,[p(a,{title:"被保人"}),p(O,{ref_key:"insuredRef",ref:A,"insured-code":null===(r=g(z).riskBaseInfo)||void 0===r?void 0:r.insurerCode,"form-info":b.value.personVO,"factor-list":g(z).insuredFactor,"age-range":g(z).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):k("",!0),m("div",F,[p(a,{title:"投保方案"}),g(z).riskData.length?(c(),u("div",S,[p(i,{ref_key:"riskFormRef",ref:E,"input-align":"right","error-message-align":"right"},{default:f((()=>[p(w,{"risk-info":y.value[0],enums:g(z).enumList,"origin-data":g(z).riskData,"pick-factor":J},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):k("",!0)])]),m("div",T,[p(o,{block:"",type:"primary",onClick:U},{default:f((()=>[B])),_:1})])])]})),_:1},8,["show"])])}}});e("P",P(A,[["__scopeId","data-v-4f8eda3b"]]))}}}))}();
