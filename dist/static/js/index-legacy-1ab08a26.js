!function(){var e=document.createElement("style");e.innerHTML='.page-trial-wrapper[data-v-1acad142]{background-color:var(--zaui-global-bg, #f2f5fc)}.page-trial-wrapper .part-card[data-v-1acad142]{background-color:#fff;margin-bottom:.26667rem}.page-trial-wrapper .risk-content[data-v-1acad142] .van-collapse-item__title--expanded{padding:0 .4rem 0 0;display:flex;align-items:center}.page-trial-wrapper .risk-content[data-v-1acad142] .van-collapse-item__content{padding:0}.page-trial-wrapper .plan-risk[data-v-1acad142] .van-tabs__line{display:none}.page-trial-wrapper .plan-risk[data-v-1acad142] .van-tabs .van-tabs__wrap{height:auto}.page-trial-wrapper .plan-risk[data-v-1acad142] .van-tabs .van-tabs__wrap .van-tabs__nav--line{padding:.30667rem 0}.page-trial-wrapper .footer-bar[data-v-1acad142]{position:fixed;width:100%;bottom:0;left:0;background-color:#fff;height:2rem;padding:.4rem;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #efeff4;z-index:2}.page-trial-wrapper .footer-bar .trial-result[data-v-1acad142]{width:5.86667rem;font-size:.45333rem;font-weight:400;color:var(--zaui-text, #393d46)}.page-trial-wrapper .footer-bar .trial-result .result-num[data-v-1acad142]{color:var(--zaui-price, #ff5840);font-size:.45333rem;font-weight:500;margin-left:.21333rem}.page-trial-wrapper .footer-bar .trial-operate button[data-v-1acad142]{width:3.73333rem}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip[data-v-1acad142]{position:absolute;z-index:122;height:.56rem;border-radius:1.33333rem;background-color:var(--zaui-price, #ff5840);font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;color:#fff;line-height:.49333rem;padding:.04rem .28rem .02667rem .26667rem;right:.4rem;top:-.46667rem;display:flex;align-items:center}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip .close-icon[data-v-1acad142]{margin-left:.17333rem;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAFVBMVEUAAAD///////////////////////9Iz20EAAAABnRSTlMAqvDQjzGyGyePAAAAZElEQVQY01WQsRHAMAgDSeL0rlLnLgvkMoFHyAo02n8Eny0VFoUBPweIMDu/xqA8fxxIJhfe2IE64g24owBJgDbfOkGGnL7oBYgIhAiEBIQEPPEyNfDWNtTXsUVNgokz2X6Q1TpVESf7Ckv8GQAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-size:contain;width:.24rem;height:.24rem}.page-trial-wrapper .footer-bar .trial-operate .retrial-tip[data-v-1acad142]:after{content:" ";position:absolute;z-index:11;width:0;height:0;border:.13333rem solid transparent;border-top:.13333rem solid #ff5840;border-right:.13333rem solid #ff5840;right:.49333rem;bottom:-.16rem}\n',document.head.appendChild(e),System.register(["./index-legacy-db3cc191.js","./index-legacy-33d12d53.js","./trial-legacy-5fc5c5ac.js","./createProposal-legacy-7d52ac98.js","./trial-legacy-ec3695da.js","./index-legacy-a6ec8d42.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var a,r,i,t,o,n,l,d,s,c,u,p,f,g,m,v,k,y,b,h,C,I,P,A,L,V,O,_,w,R,D,B,T,F,N,x,E,j,S,z;return{setters:[function(e){a=e._,r=e.d,i=e.u,t=e.a,o=e.r,n=e.J,l=e.ba,d=e.cv,s=e.an,c=e.aE,u=e.aW,p=e.bE,f=e.bF,g=e.B,m=e.c,v=e.e,k=e.w,y=e.g,b=e.h,h=e.f,C=e.k,I=e.j,P=e.F,A=e.i,L=e.n,V=e.t,O=e.M,_=e.N,w=e.O,R=e.aD,D=e.aV,B=e.b,T=e.Z},function(e){F=e.C},function(e){N=e.i,x=e.p},function(e){E=e.c},function(e){j=e.b,S=e.a},function(e){z=e.C},function(){}],execute:function(){const M={key:0,class:"part-card"},U={key:1,class:"part-card"},q={class:"risk-content"},J={key:0,class:"risk"},Q={key:1,class:"plan-risk"},G={class:"footer-bar van-safe-area-bottom"},H={class:"trial-result"},W={class:"result-num"},Y={class:"trial-operate"},K={key:0,class:"retrial-tip"},X=r({__name:"index",setup(e){const a=i(),r=t(),{agentCode:X="test",agencyCode:Z="",tenantId:$=9991000007,insurerCode:ee="99",proposalId:ae,saleChannelId:re}=r.query;let{productCode:ie="MMBBSF",templateId:te=1}=r.query;const oe=o({personVO:{occupationCodeList:[]}}),ne=o({insuredCode:"",personVO:{occupationCodeList:[]}}),le=o({}),de=o({}),se=o({}),ce=o(null),ue=o({}),pe=n({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[]});var fe;ae&&(ie=null===(fe=r.query||{})||void 0===fe?void 0:fe.productCenterCode);l("premium",ue.value),d().get("userInfo");const ge=()=>{pe.retrialTip=!1},me=()=>{O({agencyId:Z,saleUserId:X,saleChannelId:re,tenantId:$,venderCode:pe.riskBaseInfo.insurerCode,orderDataSource:1,proposalId:ae,extInfo:{templateId:+(te||1),pageCode:"premiumTrial",iseeBizNo:window.iseeBiz,buttonCode:_.premiumTrial},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{extInfo:{},tenantOrderProductList:[{productCode:pe.riskBaseInfo.productCode||"",productName:pe.riskBaseInfo.productName||"",premium:pe.trialResult.premium||0,tenantOrderRiskList:pe.insuredRiskList}]}]}).then((({code:e,data:i})=>{"10000"===e&&"jumpToPage"===i.pageAction.pageAction&&a.push({path:w[i.pageAction.data.nextPageCode],query:{insurerCode:pe.riskBaseInfo.insurerCode,templateId:te,...r.query,productCategory:pe.riskBaseInfo.productCategory,orderNo:i.pageAction.data.orderNo}})}))},ve=()=>{const e=JSON.parse(JSON.stringify(le.value[pe.currentPlan])),a=Object.values(e).find((e=>1===e.riskType)),r=Object.values(e).map((e=>{const r=e;return((e,a)=>{const r=e;if("3"===r.chargePeriod){const e=(a.chargePeriod||"").split("_");if(e[1]-=1,1===r.exemptFlag){if("to"===e[0]){let a=0;var i,t;if(1===r.exemptType)null!==(i=oe.value.personVO)&&void 0!==i&&i.birthday&&(a=parseInt(""+(+new Date-new Date(null===(t=oe.value.personVO)||void 0===t?void 0:t.birthday))/31536e6,10));else if(2===r.exemptType){var o,n;null!==(o=ne.value.personVO)&&void 0!==o&&o.birthday&&(a=parseInt(""+(+new Date-new Date(null===(n=ne.value.personVO)||void 0===n?void 0:n.birthday))/31536e6,10))}e[1]=e[1]-a}e[0]="year",r.coveragePeriod=e.join("_")}r.chargePeriod=e.join("_")}})(r,a),r.liabilityVOList=(r.liabilityVOList||[]).filter((e=>1===e.optionalFlag||e.liabilityAttributeValue&&"-1"!==e.liabilityAttributeValue)).map((e=>{const a=e;return"0"===a.liabilityAttributeValue&&(a.liabilityAttributeValue=""),a})),r})),i={holder:oe.value,productCode:pe.riskBaseInfo.productCode,insuredVOList:[{...ne.value,productPlanVOList:[{planCode:pe.currentPlan||"",insurerCode:pe.riskBaseInfo.insurerCode,riskVOList:r}]}]};x({...i}).then((({code:e,data:a})=>{if("10000"===e){pe.retrialTip=!1,pe.trialResult=a,pe.canTrial=!1;const e={},r=(a=[])=>{(a||[]).forEach((a=>{var i;e[a.riskCode]=a,null!==(i=a.riskPremiumDetailVOList)&&void 0!==i&&i.length&&r(a.riskPremiumDetailVOList)}))};r(a.riskPremiumDetailVOList),((e,a)=>{pe.insuredRiskList=e.map((e=>{var r,i;return{initialAmount:null===(r=a[e.riskCode])||void 0===r?void 0:r.amount,amountUnit:1,annuityDrawFrequency:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,paymentFrequency:e.paymentFrequency,paymentPeriod:e.chargePeriod.split("_")[1],paymentPeriodType:j[e.chargePeriod.split("_")[0]],insurancePeriodType:S["to_life"===e.coveragePeriod?"to_life":e.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+e.coveragePeriod.split("_")[1])?0:e.coveragePeriod.split("_")[1],riskCode:e.riskCode,riskType:e.riskType,riskName:e.riskName,extInfo:{riskId:e.riskId,copy:e.copy},initialPremium:null===(i=a[e.riskCode])||void 0===i?void 0:i.premium,liabilityDetails:e.liabilityVOList.map((e=>({liabilityCode:e.liabilityCode,liabilityName:e.liabilityName,refundMethod:e.liabilityAttributeValue}))),productId:pe.riskBaseInfo.id}}))})(i.insuredVOList[0].productPlanVOList[0].riskVOList,e),Object.assign(ue.value,e)}}))},ke=()=>{var e,a,r,i,t;Promise.all([null===(e=de.value)||void 0===e||null===(a=e.validateForm)||void 0===a?void 0:a.call(e),null===(r=se.value)||void 0===r||null===(i=r.validateForm)||void 0===i?void 0:i.call(r),null===(t=ce.value)||void 0===t?void 0:t.validate()]).then((()=>{ve()}),(e=>{var a;null!=e&&e.length&&(null==ce||null===(a=ce.value)||void 0===a||a.scrollToField(e[0].name))}))},ye=()=>{N({productCode:ie,source:ae?2:1}).then((({code:e,data:a})=>{var r,i,t,o;"10000"===e&&(pe.riskBaseInfo=a.productBasicInfoVO,(a.productRelationPlanVOList.length?a.productRelationPlanVOList:a.productRiskVoList[0].riskDetailVOList||[]).forEach(((e,a)=>{0===a&&(pe.currentPlan=e.planCode||"0"),ae||Object.assign(le.value,{[e.planCode||a]:{}})})),ae&&(t=pe.riskBaseInfo.productCategory,o=pe.riskBaseInfo.insurerCode,T({productCategory:t,venderCode:o}).then((e=>{var a;"10000"===e.code&&(te=null===(a=e.data)||void 0===a?void 0:a.id)}))),pe.riskData=(null===(r=a.productRiskVoList[0])||void 0===r?void 0:r.riskDetailVOList)||[],pe.riskPlanData=a.productRelationPlanVOList||[],ae&&(i=a.productBasicInfoVO.id,E({id:ae,tenantId:$}).then((({code:e,data:a})=>{if("10000"===e){var r;const{proposalInsuredProductList:e=[],...t}=(null===(r=a.proposalInsuredList)||void 0===r?void 0:r[0])||{};Object.assign(oe.value.personVO,a.proposalHolder);const o=e.find((e=>e.productId===i));Object.assign(ne.value.personVO,t,{occupationCodeList:(null==o?void 0:o.occupationCodeList)||[]});const n={};((null==o?void 0:o.proposalProductRiskList)||[]).forEach((e=>{n[e.riskId]=e})),Object.assign(le.value,{0:n})}}))))})).finally((()=>{}))},be=e=>{pe.holderFactor=e.holderFactorList,pe.insuredFactor=e.insuredFactorList,pe.ageRange=e.ageRange};return s([()=>le.value,()=>oe.value,()=>ne.value],(e=>{e&&!pe.canTrial&&(pe.canTrial=!0,pe.retrialTip=!0)}),{deep:!0}),c((()=>{ye(),R({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then((({code:e,data:a})=>{if("10000"===e){const e={};a.forEach((a=>{e[a.dictCode]=a.dictItemList})),pe.enumList=e}}))})),(e,a)=>{const r=D,i=B("PersonalInfo"),t=B("RiskList"),o=u,n=B("ProTabButton"),l=p,d=f,s=F,c=z,O=g,_=B("ProPageWrap");return m(),v(_,{class:"page-trial-wrapper"},{default:k((()=>{var e,u,p;return[y(pe).holderFactor.length?(m(),b("div",M,[h(r,{title:"投保人"}),h(i,{ref_key:"holderRef",ref:de,"insured-code":null===(e=y(pe).riskBaseInfo)||void 0===e?void 0:e.insurerCode,"form-info":y(oe).personVO,"factor-list":y(pe).holderFactor,"age-range":y(pe).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):C("",!0),y(pe).insuredFactor.length?(m(),b("div",U,[h(r,{title:"被保人"}),h(i,{ref_key:"insuredRef",ref:se,"insured-code":null===(u=y(pe).riskBaseInfo)||void 0===u?void 0:u.insurerCode,"form-info":y(ne).personVO,"factor-list":y(pe).insuredFactor,"age-range":y(pe).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):C("",!0),I("div",q,[h(c,{modelValue:y(pe).collapseName,"onUpdate:modelValue":a[1]||(a[1]=e=>y(pe).collapseName=e)},{default:k((()=>[h(s,{name:"1"},{title:k((()=>[h(r,{title:"投保方案"})])),default:k((()=>[y(pe).riskData.length&&y(le)[0]?(m(),b("div",J,[h(o,{ref_key:"riskFormRef",ref:ce,"input-align":"right","error-message-align":"right"},{default:k((()=>[h(t,{"risk-info":y(le)[0],enums:y(pe).enumList,"origin-data":y(pe).riskData,"pick-factor":be},null,8,["risk-info","enums","origin-data"])])),_:1},512)])):C("",!0),y(pe).riskPlanData.length?(m(),b("div",Q,[h(o,{ref_key:"riskFormRef",ref:ce,"input-align":"right","error-message-align":"right"},{default:k((()=>[h(d,{active:y(pe).currentPlan,"onUpdate:active":a[0]||(a[0]=e=>y(pe).currentPlan=e)},{default:k((()=>[(m(!0),b(P,null,A(y(pe).riskPlanData,(e=>(m(),v(l,{key:e.planCode,name:e.planCode,title:e.planName},{title:k((()=>[h(n,{title:e.planName,active:y(pe).currentPlan===e.planCode},null,8,["title","active"])])),default:k((()=>{var a;return[e.planCode===y(pe).currentPlan?(m(),v(t,{key:0,"risk-info":y(le)[e.planCode],enums:y(pe).enumList,"origin-data":null===(a=e.productRiskVoList)||void 0===a?void 0:a[0].riskDetailVOList,"pick-factor":be},null,8,["risk-info","enums","origin-data"])):C("",!0)]})),_:2},1032,["name","title"])))),128))])),_:1},8,["active"])])),_:1},512)])):C("",!0)])),_:1})])),_:1},8,["modelValue"])]),I("div",G,[I("span",H,[L("总保费"),I("span",W,V((y(pe).retrialTip?0:(null===(p=y(pe).trialResult)||void 0===p?void 0:p.premium)||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})),1)]),I("div",Y,[y(pe).retrialTip?(m(),b("div",K,[L(" 条件更改后，需要重新试算 "),I("span",{class:"close-icon",onClick:ge})])):C("",!0),y(pe).canTrial?(m(),v(O,{key:1,type:"primary",onClick:ke},{default:k((()=>[L("去试算")])),_:1})):(m(),v(O,{key:2,type:"primary",onClick:me},{default:k((()=>[L("立即投保")])),_:1}))])])]})),_:1})}}});e("default",a(X,[["__scopeId","data-v-1acad142"]]))}}}))}();
