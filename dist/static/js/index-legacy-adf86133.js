!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.com-product-risk-wrapper .popup-container[data-v-09bd4d63]{background-color:#f2f5fc}.com-product-risk-wrapper .popup-container .popup-title[data-v-09bd4d63]{height:1.38667rem;display:flex;align-items:center;justify-content:center;padding:0 .85333rem;font-size:.45333rem;font-weight:600;background-color:#fff}.com-product-risk-wrapper .part-card[data-v-09bd4d63]{background-color:#fff;margin-bottom:.26667rem}.com-product-risk-wrapper .risk-content[data-v-09bd4d63] .van-collapse-item__title--expanded{padding:0 .4rem 0 0;display:flex;align-items:center}.com-product-risk-wrapper .risk-content[data-v-09bd4d63] .van-collapse-item__content{padding:0}.com-product-risk-wrapper .plan-risk[data-v-09bd4d63] .van-tabs__line{display:none}.com-product-risk-wrapper .footer-bar[data-v-09bd4d63]{position:fixed;width:100%;bottom:0;left:0;background-color:#fff;height:2rem;padding:.4rem;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #efeff4}.com-product-risk-wrapper .footer-bar .trial-result[data-v-09bd4d63]{width:5.86667rem;color:#ff5840;font-size:.32rem;font-weight:600}.com-product-risk-wrapper .footer-bar .trial-result .result-num[data-v-09bd4d63]{font-size:.61333rem;font-weight:500;margin-left:.17333rem}.com-product-risk-wrapper .footer-bar .trial-operate button[data-v-09bd4d63]{width:3.73333rem}.com-product-risk-wrapper .footer-bar .trial-operate .retrial-tip[data-v-09bd4d63]{position:absolute;z-index:122;height:.56rem;border-radius:1.33333rem;background-color:#ff5840;font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;color:#fff;line-height:.49333rem;padding:.04rem .28rem .02667rem .26667rem;right:.4rem;top:-.56rem;display:flex;align-items:center}.com-product-risk-wrapper .footer-bar .trial-operate .retrial-tip .close-icon[data-v-09bd4d63]{margin-left:.17333rem}.com-product-risk-wrapper .footer-bar .trial-operate .retrial-tip[data-v-09bd4d63]:after{content:" ";position:absolute;z-index:11;width:0;height:0;border:.13333rem solid transparent;border-top:.13333rem solid #ff5840;border-right:.13333rem solid #ff5840;right:.49333rem;bottom:-.26667rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-bcfc5721.js","./trial-legacy-e63d8a39.js","./index-legacy-6d5ef16b.js","./index-legacy-53842639.js"],(function(e){"use strict";var r,t,i,a,o,s,d,n,l,c,u,p,f,m,g,v,k,h,b,y,O,V,w,L,P,R;return{setters:[function(e){r=e.a,t=e.g,i=e.C,a=e.L,o=e.a3,s=e.x,d=e.X,n=e.o,l=e.r,c=e.h,u=e.m,p=e.n,f=e.k,m=e.y,g=e.z,v=e.j,k=e.s,h=e.a1,b=e.a2,y=e.B},function(e){O=e.P,V=e.R,w=e.b,L=e.p},function(e){P=e.g},function(e){R=e._}],execute:function(){e("u",r({id:"createProposal",state:()=>({proposalInfo:{},trialData:[],excludeProduct:[]}),actions:{setProposalInfo(e){this.$state.proposalInfo=e},setTrialData(e){this.$state.trialData=e},setExcludeProduct(e){this.$state.excludeProduct=e}}}));const I={class:"com-product-risk-wrapper"},D={class:"popup-container"},_=(e=>(h("data-v-09bd4d63"),e=e(),b(),e))((()=>m("div",{class:"popup-title"},"请选择保障方案",-1))),C={class:"risk-trial-wrapper"},F={key:0,class:"part-card"},j={key:1,class:"part-card"},x={class:"risk-content"},S={key:0,class:"risk"},T={class:"footer-bar"},B=y("确认"),N=t({props:{isShow:{type:Boolean,default:!1},type:{default:"add"},productId:{default:0},riskType:{default:1},formInfo:{default:{}},productData:{default:()=>({})},holder:{default:()=>({})},insured:{default:()=>({})},riderRisk:{default:()=>[]},currentRisk:{default:()=>[]}},emits:["close","finished"],setup(e,{emit:r}){const t=e,h=i({personVO:{...t.holder}}),b=i({insuredCode:"",personVO:{...t.insured}}),y=i({}),R=i({}),N=i({}),E=i({}),z=i({}),A=a({currentPlan:"0",isShow:t.isShow,riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],type:t.type});o("premium",z.value),o("source",{type:A.type,origin:"proposal",showRiskList:t.currentRisk});const $=s((()=>{var e;let r="";if(null!==(e=A.riskData)&&void 0!==e&&e[0]){const e=A.riskData[0],t=((null==e?void 0:e.requiredRiderRiskVOList)||[]).map((e=>e.riskName));t.length&&(r=`特殊提示: ${e.riskName}和${t.join("、")}必须同时投保`)}return r})),M=()=>{const e=JSON.parse(JSON.stringify(y.value[A.currentPlan])),t=Object.values(e).find((e=>1===e.riskType)),i=Object.values(e).map((e=>{const r=e;if("3"===r.chargePeriod){const e=(t.chargePeriod||"").split("_");e[1]&&(e[1]-=1),r.chargePeriod=e.join("_")}return r.liabilityVOList=(r.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const r=e;return"0"===r.liabilityAttributeValue&&(r.liabilityAttributeValue=""),r})),r})),a={holder:h.value,productCode:A.riskBaseInfo.productCode,insuredVOList:[{...b.value,productPlanVOList:[{planCode:A.currentPlan||"",riskVOList:i}]}]};L({...a}).then((({code:e,data:t})=>{if("10000"===e){A.retrialTip=!1,A.trialResult=t,A.canTrial=!1;const e={},i=(r=[])=>{(r||[]).forEach((r=>{var t;e[r.riskCode]=r,null!==(t=r.riskPremiumDetailVOList)&&void 0!==t&&t.length&&i(r.riskPremiumDetailVOList)}))};i(t.riskPremiumDetailVOList),Object.assign(z.value,e),r("finished",((e,r)=>{var t,i,a;const o=(e.insuredVOList[0].productPlanVOList[0].riskVOList||[]).map((e=>({...e,premium:r[e.riskCode].premium})));return{proposalHolder:{...null===(t=e.holder)||void 0===t?void 0:t.personVO,dateRange:null==N||null===(i=N.value)||void 0===i?void 0:i.ageRangeObj},proposalInsuredList:[{...e.insuredVOList[0].personVO,dateRange:null===(a=N.value)||void 0===a?void 0:a.ageRangeObj,proposalInsuredProductList:[{productId:A.riskBaseInfo.id,productName:A.riskBaseInfo.productName,proposalProductRiskList:o}]}]}})(a,e))}else A.retrialTip=!0}))},U=()=>{var e,r,t,i,a;Promise.all([null===(e=R.value)||void 0===e||null===(r=e.validateForm)||void 0===r?void 0:r.call(e),null===(t=N.value)||void 0===t||null===(i=t.validateForm)||void 0===i?void 0:i.call(t),null===(a=E.value)||void 0===a?void 0:a.validate()]).then((()=>{M()}))},H=()=>{r("close")},J=e=>{A.holderFactor=e.holderFactorList,A.insuredFactor=e.insuredFactorList,A.ageRange=e.ageRange};return d([()=>y.value,()=>h.value,()=>b.value],(e=>{e&&!A.canTrial&&(A.canTrial=!0,A.retrialTip=!0)}),{deep:!0}),d((()=>t.isShow),(e=>{A.isShow=e}),{immediate:!0}),d((()=>t.productId),(e=>{e&&w({productId:t.productId,source:2}).then((({code:e,data:r})=>{"10000"===e&&(A.riskBaseInfo=r.productBasicInfoVO,(r.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,r)=>{0===r&&(A.currentPlan=e.planCode||"0"),Object.assign(y.value,{[e.planCode||r]:{}})})),A.riskData=r.productRiskVoList[0].riskDetailVOList||[],A.riskPlanData=r.productRelationPlanVOList||[])})).finally((()=>{}))}),{immediate:!0}),d((()=>t.formInfo),((e={})=>{if("add"!==t.type){const r={0:{...e.proposalProductRiskList[0],riderRiskVOList:{}}};Object.assign(y.value,r)}}),{deep:!0,immediate:!0}),d((()=>t.productData),(e=>{var r;"add"!==t.type&&(A.riskBaseInfo=e.productBasicInfoVO,A.riskData=(null===(r=e.productRiskVoList)||void 0===r?void 0:r[0].riskDetailVOList)||[])}),{deep:!0,immediate:!0}),d((()=>t.type),(e=>{A.type=e})),n((()=>{P({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:r})=>{if("10000"===e){const e={};r.forEach((r=>{e[r.dictCode]=r.dictItemList})),A.enumList=e}}))})),(e,r)=>{const t=l("ProMessage"),i=l("ProTitle"),a=l("VanForm"),o=l("VanButton"),s=l("VanPopup");return c(),u("div",I,[p(s,{show:g(A).isShow,"onUpdate:show":r[0]||(r[0]=e=>g(A).isShow=e),round:"",position:"bottom",closeable:"",style:{height:"80%"},onClose:H},{default:f((()=>{var e,r;return[m("div",D,[_,g($)?(c(),v(t,{key:0,content:g($)},null,8,["content"])):k("",!0),m("div",C,[g(A).holderFactor.length?(c(),u("div",F,[p(i,{title:"投保人"}),p(O,{ref_key:"holderRef",ref:R,"insured-code":null===(e=g(A).riskBaseInfo)||void 0===e?void 0:e.insurerCode,"form-info":h.value.personVO,"factor-list":g(A).holderFactor,"age-range":g(A).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):k("",!0),g(A).insuredFactor.length?(c(),u("div",j,[p(i,{title:"被保人"}),p(O,{ref_key:"insuredRef",ref:N,"insured-code":null===(r=g(A).riskBaseInfo)||void 0===r?void 0:r.insurerCode,"form-info":b.value.personVO,"factor-list":g(A).insuredFactor,"age-range":g(A).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):k("",!0),m("div",x,[p(i,{title:"投保方案"}),g(A).riskData.length?(c(),u("div",S,[p(a,{ref_key:"riskFormRef",ref:E,"input-align":"right","error-message-align":"right"},{default:f((()=>[p(V,{"risk-info":y.value[0],enums:g(A).enumList,"origin-data":g(A).riskData,"pick-factor":J},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):k("",!0)])]),m("div",T,[p(o,{block:"",type:"primary",onClick:U},{default:f((()=>[B])),_:1})])])]})),_:1},8,["show"])])}}});e("P",R(N,[["__scopeId","data-v-09bd4d63"]]))}}}))}();
