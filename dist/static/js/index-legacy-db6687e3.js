!function(){var e=document.createElement("style");e.innerHTML=".net-sale-wrap[data-v-ca4802a2]{padding-bottom:2rem;background:#f1f5fc}.net-sale-wrap .footer-button[data-v-ca4802a2]{justify-content:space-between}.net-sale-wrap .product-name[data-v-ca4802a2]{font-size:.48rem;font-weight:500;line-height:1.06667rem}.net-sale-wrap .part[data-v-ca4802a2]{background-color:#fff;padding:0 var(--zaui-page-border, .4rem)}.net-sale-wrap .part .common-cell-wrapper[data-v-ca4802a2]{height:1.38667rem;align-items:center;width:100%;display:inline-flex}.net-sale-wrap .part .common-cell-wrapper[data-v-ca4802a2] .cell-container{align-items:flex-start;justify-content:center;width:100%;color:var(--van-field-label-color);font-size:.4rem}.net-sale-wrap .radio-group[data-v-ca4802a2]{width:100%}.net-sale-wrap .radio-group .radio-btn[data-v-ca4802a2]{justify-content:space-between}.net-sale-wrap .price[data-v-ca4802a2]{color:#393d46;font-size:.45333rem;font-weight:400}.net-sale-wrap .price span[data-v-ca4802a2]{color:var(--van-primary-color);font-weight:700}.net-sale-wrap .right[data-v-ca4802a2]{width:3.73333rem;background:var(--van-primary-color);border-color:var(--van-primary-color)}\n",document.head.appendChild(e),System.register(["./vendor-legacy-e942cbdc.js","./debounce-legacy-5f8b82be.js","./utils-legacy-798bddc0.js","./product-legacy-b1b5a3b4.js","./trial-legacy-5a1d9125.js","./nextStep-legacy-b1b6c874.js","./theme-legacy-2a115a2b.js","./index-legacy-e19cdf06.js","./index-legacy-fc682c90.js","./useStorage-legacy-47e8710b.js","./infoCollection-legacy-c097ca80.js","./trial-legacy-7df20e1c.js","./relativeTime-legacy-6f514b10.js","./useDicData-legacy-dd31e07d.js","./core-legacy-e0a53a71.js","./index-legacy-33d8a1e1.js"],(function(e){"use strict";var t,a,n,r,o,d,i,l,c,u,s,p,f,m,v,I,O,g,y,L,w,b,h,C,V,j,P,D,R,x,N,k;return{setters:[function(e){t=e.h,a=e.a8,n=e.N,r=e.r,o=e.x,d=e.Z,i=e.j,l=e.k,c=e.l,u=e.m,s=e.n,p=e.Q,f=e.z,m=e.I,v=e.A,I=e.s,O=e.D,g=e.a3,y=e.a4,L=e.d},function(e){w=e.d},function(e){b=e.r,h=e.t},function(e){C=e.p},function(e){V=e.i,j=e.b,P=e.p},function(e){D=e._,R=e.n},function(e){x=e.u},function(e){N=e.P},function(e){k=e._},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const Y=e=>(g("data-v-ca4802a2"),e=e(),y(),e),B={class:"net-sale-wrap"},E={class:"part product-name"},T=Y((()=>f("span",null,null,-1))),_=Y((()=>f("span",null,null,-1))),z={class:"part"},H={class:"footer-button"};e("default",k(t({setup(e){const t=x();a();const g=n(),{productCode:y="HTEJBX",tenantId:k="9991000001",orderNo:Y,agentCode:M="",saleChannelId:$,extraInfo:S,from:A}=g.query,F=r(),U=r(),q=r(),J=r(),W=r(),G=r({});let Q={};try{Q=JSON.parse(decodeURIComponent(S))}catch(oe){}const X=r({agentCode:M,commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_underWrite",pageCode:"infoCollection",templateId:Q?.templateId,iseeBizNo:"",extraInfo:Q},orderCategory:1,saleUserId:$,saleChannelId:$,tenantId:k,venderCode:"",tenantOrderHolder:{extInfo:{},mobile:"13262279090"},tenantOrderInsuredList:[{relationToHolder:"1",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"xinao",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",tenantId:k}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),Z=o((()=>!!q.value?.productRelationPlanVOList?.length)),K=o((()=>{const{premium:e}=W.value||{};if(!e){const{tenantProductInsureVO:e}=J.value||{};let t={};t=e?.planList?.length?e?.planList.find((e=>e.plaCode===U.value)):e?.planInsureVO;const{paymentFrequencyValue:a,premiumUnit:n}=t?.productPremiumVOList?.[0]||{};return a&&`${a}${n}`}return""})),ee=o((()=>{let e=[];return e=Z.value?q.value?.productRelationPlanVOList.find((e=>e.planCode===U.value))?.productRiskVoList||[]:q.value?.productRiskVoList||[],e})),te=o((()=>1===((ee.value||[])?.[0]?.riskDetailVOList?.[0]?.insuranceStartType||1)?`${L(new Date).format("YYYY-MM-DD")} 00:00:00`:`${L(new Date).add(1,"day").format("YYYY-MM-DD")} 00:00:00`)),ae=o((()=>{const e=ee.value||[],{insuranceEndType:t,riskInsureLimitVO:a}=e?.[0]?.riskDetailVOList?.[0]||{},{insurancePeriodValueList:n}=a||{},[r,o]=(n?.[0]||"").split("_");return 1===t?`${L(new Date).add(o||0,r).format("YYYY-MM-DD")} 23:59:59`:`${L(new Date).add(o,r).format("YYYY-MM-DD")} 00:00:00`})),ne=async()=>{X.value.venderCode=q.value?.productBasicInfoVO.insurerCode,X.value.orderAmount=W.value.premium,X.value.orderRealAmount=W.value.premium,X.value.commencementTime=te.value,X.value.expiryDate=ae.value,X.value.tenantOrderInsuredList[0].planCode=U.value,X.value.tenantOrderInsuredList[0].planName=q.value?.productRelationPlanVOList.find((e=>e.planCode===U.value))?.planName,R(((e={},t={},a={})=>{const n={...a},r={tenantId:k,riskList:n.tenantOrderInsuredList[0]?.tenantOrderProductList[0].riskVOList||[],riskPremium:t,productId:e?.productBasicInfoVO.id};return n.tenantOrderInsuredList[0].tenantOrderProductList[0]={premium:W.value.premium,productCode:e.productBasicInfoVO.productCode,productName:e.productBasicInfoVO.productName,tenantOrderRiskList:h(r)},n})(q.value,W.value,X.value),(()=>{}))},re=async()=>{F.value?.validateForm().then((()=>{O.confirm({title:"分享",message:`即将向客户【${X.value.tenantOrderHolder.name}】发送投保确认信息,请确认是否继续？`}).then((()=>{ne()}))}))};d([()=>X.value.tenantOrderInsuredList?.[0].gender,()=>X.value.tenantOrderInsuredList?.[0].birthday,()=>U.value],w((([e,t])=>{e&&t&&(async(e,t,a)=>{const n={holder:{personVO:e.tenantOrderHolder},insuredVOList:e.tenantOrderInsuredList.map((e=>({insuredCode:"",personVO:e,productPlanVOList:[{insurerCode:t.productBasicInfoVO.insurerCode,planCode:U.value||0,riskVOList:b(a)}]}))),productCode:t.productBasicInfoVO.productCode,tenantId:k},{code:r}=await j(n);if("10000"===r){const{code:e,data:t}=await P(n);W.value="10000"===e?t:null}X.value.tenantOrderInsuredList[0].tenantOrderProductList=n.insuredVOList[0]?.productPlanVOList})(X.value,q.value,ee.value)}),500));return i((()=>{(async()=>{const{code:e,data:t}=await C({productCode:y,withInsureInfo:!0,tenantId:k});"10000"===e&&(J.value=t,document.title=t.productFullName||"");const{code:a,data:n}=await V({productCode:y});"10000"===a&&(q.value=n,G.value=n.productFactor,n?.productRelationPlanVOList?.length&&(U.value=n.productRelationPlanVOList[0].planCode))})(),setTimeout((async()=>{window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const n=l("ProRadioButton"),r=l("ProCard"),o=l("ProCell"),d=l("ProPageWrap"),i=l("van-config-provider");return c(),u(i,{"theme-vars":v(t)},{default:s((()=>[p(d,null,{default:s((()=>[f("div",B,[f("div",E,m(q.value?.productBasicInfoVO?.productFullName),1),v(Z)?(c(),u(r,{key:0,"show-line":!1,title:"保障年期"},{default:s((()=>[p(n,{modelValue:U.value,"onUpdate:modelValue":a[0]||(a[0]=e=>U.value=e),class:"radio-group",prop:{label:"planName",value:"planCode"},options:q.value?.productRelationPlanVOList},null,8,["modelValue","options"])])),_:1})):I("",!0),p(D,{ref_key:"formRef",ref:F,"title-collection":{HOLDER:"投保人",INSURER:"被保人",BENEFICIARY:"收益人"},"need-desensitize":"","form-info":X.value,"send-sms-code":()=>{},"input-align":"left","factor-object":G.value},{holderName:s((()=>[T])),insurerName:s((()=>[_])),_:1},8,["form-info","send-sms-code","factor-object"]),f("div",z,[p(o,{title:"保费",content:v(K)},null,8,["content"]),p(o,{title:"保障期间",content:`${v(te).split(" ")[0]}~${v(ae).split(" ")[0]}`},null,8,["content"])]),f("div",H,[p(N,{text:"分享用户确认投保",onClick:re})])])])),_:1})])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-ca4802a2"]]))}}}))}();
