import{f as e,k as a,r as i,O as t,a7 as r,b as o,$ as s,m as l,p as n,s as d,B as u,S as c,v as p,C as f,E as v,t as m,y as k,G as g,a5 as h,a6 as O}from"./vendor-9bab628e.js";import{P as V,a as y}from"./index-8a015f63.js";import{i as L,p as I}from"./trial-49574891.js";import{_ as P,G as R}from"./index-aa4ec275.js";const b=e({id:"createProposal",state:()=>({proposalInfo:{},trialData:[],excludeProduct:[],proposalId:0}),actions:{setProposalInfo(e){this.$state.proposalInfo=e},setTrialData(e){this.$state.trialData=e},setExcludeProduct(e){this.$state.excludeProduct=e}}});const D={class:"com-product-risk-wrapper"},C={class:"popup-container"},_=(e=>(h("data-v-65cbf84c"),e=e(),O(),e))((()=>f("div",{class:"popup-title"},"请选择保障方案",-1))),w={class:"risk-trial-wrapper"},j={class:"risk-content"},F={key:0,class:"risk"},B={class:"footer-bar"},T=g("确定");var x=P(a({props:{isShow:{type:Boolean,default:!1},type:{default:"add"},productId:{default:0},riskType:{default:1},formInfo:{default:{}},productData:{default:()=>({})},holder:{default:()=>({})},insured:{default:()=>({})},riderRisk:{default:()=>[]},currentRisk:{default:()=>[]}},emits:["close","finished"],setup(e,{emit:a}){var g,h;const O=e,P=i({personVO:{occupationCodeList:[],...O.holder}}),b=i({insuredCode:"",personVO:{occupationCodeList:(null==(h=((null==(g=O.insured)?void 0:g.proposalInsuredProductList)||[]).find((e=>e.productId===O.productData.productBasicInfoVO.id)))?void 0:h.occupationCodeList)||[],...O.insured}}),x=i({}),S=i({}),A=i({}),E=i({}),N=i({}),$=t({currentPlan:"0",isShow:O.isShow,riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],type:O.type});r("premium",N.value),r("source",{type:$.type,origin:"proposal",showRiskList:O.currentRisk});const G=o((()=>{var e;let a="";if(null==(e=$.riskData)?void 0:e[0]){const e=$.riskData[0],i=((null==e?void 0:e.requiredRiderRiskVOList)||[]).map((e=>e.riskName));i.length&&(a=`特殊提示: ${e.riskName}和${i.join("、")}必须同时投保`)}return a})),J=()=>{var e;const i=JSON.parse(JSON.stringify(x.value[$.currentPlan])),t=Object.values(i).find((e=>1===e.riskType)),r=Object.values(i).map((e=>{const a=e;return((e,a)=>{var i,t,r,o;const s=e;if("3"===s.chargePeriod){const e=(a.chargePeriod||"").split("_");if(e[1]-=1,1===s.exemptFlag){if("to"===e[0]){let a=0;1===s.exemptType?(null==(i=P.value.personVO)?void 0:i.birthday)&&(a=parseInt(""+(+new Date-new Date(null==(t=P.value.personVO)?void 0:t.birthday))/31536e6,10)):2===s.exemptType&&(null==(r=b.value.personVO)?void 0:r.birthday)&&(a=parseInt(""+(+new Date-new Date(null==(o=b.value.personVO)?void 0:o.birthday))/31536e6,10)),e[1]=e[1]-a}e[0]="year",s.coveragePeriod=e.join("_")}s.chargePeriod=e.join("_")}})(a,t),a.liabilityVOList=(a.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const a=e;return"0"===a.liabilityAttributeValue&&(a.liabilityAttributeValue=""),a})),a})),o={holder:P.value,productCode:$.riskBaseInfo.productCode,insuredVOList:[{...b.value,productPlanVOList:[{planCode:$.currentPlan||"",insurerCode:null==(e=$.riskBaseInfo)?void 0:e.insurerCode,riskVOList:r}]}]};I({...o}).then((({code:e,data:i})=>{if("10000"===e){$.retrialTip=!1,$.trialResult=i,$.canTrial=!1;const e={},t=(a=[])=>{(a||[]).forEach((a=>{var i;e[a.riskCode]=a,(null==(i=a.riskPremiumDetailVOList)?void 0:i.length)&&t(a.riskPremiumDetailVOList)}))};t(i.riskPremiumDetailVOList),Object.assign(N.value,e),a("finished",((e,a)=>{var i,t,r,o,s,l,n,d,u;const c=(e.insuredVOList[0].productPlanVOList[0].riskVOList||[]).map((e=>({...e,premium:a[e.riskCode].premium,amount:a[e.riskCode].amount})));return{proposalHolder:{...null==(i=e.holder)?void 0:i.personVO},proposalInsuredList:[{...e.insuredVOList[0].personVO,dateRange:{min:null==(r=null==(t=A.value)?void 0:t.ageRangeObj)?void 0:r.minAge,max:null==(s=null==(o=A.value)?void 0:o.ageRangeObj)?void 0:s.maxAge},proposalInsuredProductList:[{productId:$.riskBaseInfo.id,productName:$.riskBaseInfo.productName,dateRange:{min:null==(n=null==(l=A.value)?void 0:l.ageRangeObj)?void 0:n.minAge,max:null==(u=null==(d=A.value)?void 0:d.ageRangeObj)?void 0:u.maxAge},occupationCodeList:e.insuredVOList[0].personVO.occupationCodeList,proposalProductRiskList:c}]}]}})(o,e))}else $.retrialTip=!0}))},K=()=>{var e,a,i,t,r;Promise.all([null==(a=null==(e=S.value)?void 0:e.validateForm)?void 0:a.call(e),null==(t=null==(i=A.value)?void 0:i.validateForm)?void 0:t.call(i),null==(r=E.value)?void 0:r.validate()]).then((()=>{J()}))},M=()=>{a("close")},U=e=>{$.holderFactor=e.holderFactorList,$.insuredFactor=e.insuredFactorList,$.ageRange=e.ageRange};return s([()=>x.value,()=>P.value,()=>b.value],(e=>{e&&!$.canTrial&&($.canTrial=!0,$.retrialTip=!0)}),{deep:!0}),s((()=>O.isShow),(e=>{$.isShow=e}),{immediate:!0}),s((()=>O.productId),(e=>{e&&L({productId:O.productId,source:2}).then((({code:e,data:a})=>{"10000"===e&&($.riskBaseInfo=a.productBasicInfoVO,(a.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,a)=>{0===a&&($.currentPlan=e.planCode||"0"),Object.assign(x.value,{[e.planCode||a]:{}})})),$.riskData=a.productRiskVoList[0].riskDetailVOList||[],$.riskPlanData=a.productRelationPlanVOList||[])})).finally((()=>{}))}),{immediate:!0}),s((()=>O.formInfo),((e={})=>{if("add"!==O.type&&"repeatAdd"!==O.type){const a={};e.proposalProductRiskList.forEach((e=>{a[e.riskId]=e})),Object.assign(x.value,{0:a})}}),{deep:!0,immediate:!0}),s((()=>O.productData),(e=>{var a;"add"!==O.type&&"repeatAdd"!==O.type&&($.riskBaseInfo=e.productBasicInfoVO,$.riskData=(null==(a=e.productRiskVoList)?void 0:a[0].riskDetailVOList)||[])}),{deep:!0,immediate:!0}),s((()=>O.type),(e=>{$.type=e})),l((()=>{R({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:a})=>{if("10000"===e){const e={};a.forEach((a=>{e[a.dictCode]=a.dictItemList})),$.enumList=e}}))})),(e,a)=>{const i=n("ProMessage"),t=n("ProCard"),r=n("VanForm"),o=n("VanButton"),s=n("VanPopup");return d(),u("div",D,[c(s,{show:v($).isShow,"onUpdate:show":a[0]||(a[0]=e=>v($).isShow=e),round:"",position:"bottom",closeable:"",style:{height:"80%"},onClose:M},{default:p((()=>[f("div",C,[_,v(G)?(d(),m(i,{key:0,content:v(G)},null,8,["content"])):k("",!0),f("div",w,[v($).holderFactor.length?(d(),m(t,{key:0,title:"投保人",class:"part-card"},{default:p((()=>{var e;return[c(V,{ref_key:"holderRef",ref:S,"insured-code":null==(e=v($).riskBaseInfo)?void 0:e.insurerCode,"form-info":P.value.personVO,"factor-list":v($).holderFactor,"age-range":v($).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])]})),_:1})):k("",!0),v($).insuredFactor.length?(d(),m(t,{key:1,title:"被保人",class:"part-card"},{default:p((()=>{var e;return[c(V,{ref_key:"insuredRef",ref:A,"insured-code":null==(e=v($).riskBaseInfo)?void 0:e.insurerCode,"form-info":b.value.personVO,"factor-list":v($).insuredFactor,"age-range":v($).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])]})),_:1})):k("",!0),f("div",j,[c(t,{title:"投保方案",class:"part-card"},{default:p((()=>[v($).riskData.length?(d(),u("div",F,[c(r,{ref_key:"riskFormRef",ref:E,"input-align":"right","error-message-align":"right"},{default:p((()=>[c(y,{"risk-info":x.value[0],enums:v($).enumList,"origin-data":v($).riskData,"pick-factor":U},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):k("",!0)])),_:1})])]),f("div",B,[c(o,{block:"",type:"primary",onClick:K},{default:p((()=>[T])),_:1})])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-65cbf84c"]]);export{x as P,b as u};
