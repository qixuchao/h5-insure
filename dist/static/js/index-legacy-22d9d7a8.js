!function(){var e=document.createElement("style");e.innerHTML=".net-sale-wrap[data-v-1dd27b92]{padding-bottom:1.33333rem;background:#f1f5fc}.net-sale-wrap .footer-button[data-v-1dd27b92]{justify-content:space-between}.net-sale-wrap .product-name[data-v-1dd27b92]{font-size:.48rem;font-weight:500;line-height:1.06667rem}.net-sale-wrap .part[data-v-1dd27b92]{background-color:#fff;padding:0 var(--zaui-page-border, .4rem)}.net-sale-wrap .part .common-cell-wrapper[data-v-1dd27b92]{height:1.38667rem;align-items:center;width:100%;display:inline-flex}.net-sale-wrap .part .common-cell-wrapper[data-v-1dd27b92] .cell-container{align-items:flex-start;justify-content:center;width:100%;color:var(--van-field-label-color);font-size:.4rem}.net-sale-wrap .radio-group[data-v-1dd27b92]{width:100%}.net-sale-wrap .radio-group .radio-btn[data-v-1dd27b92]{justify-content:space-between}.net-sale-wrap .price[data-v-1dd27b92]{color:#393d46;font-size:.45333rem;font-weight:400}.net-sale-wrap .price span[data-v-1dd27b92]{color:var(--van-primary-color);font-weight:700}.net-sale-wrap .right[data-v-1dd27b92]{width:3.73333rem;background:var(--van-primary-color);border-color:var(--van-primary-color)}.net-sale-wrap .footer[data-v-1dd27b92]{margin-top:.66667rem;padding:0 var(--zaui-page-border, .4rem)}\n",document.head.appendChild(e),System.register(["./vendor-legacy-80ec6972.js","./debounce-legacy-4f3469a1.js","./utils-legacy-bf3487a7.js","./product-legacy-600ba029.js","./trial-legacy-ccbeee94.js","./nextStep-legacy-14436cad.js","./theme-legacy-28dda1ed.js","./index-legacy-ef3461bd.js","./index-legacy-b2364fba.js","./useStorage-legacy-b5edaef9.js","./infoCollection-legacy-b4d6105c.js","./trial-legacy-942c5dab.js","./relativeTime-legacy-89da35f6.js","./useDicData-legacy-80aff832.js","./core-legacy-b346e868.js","./index-legacy-af8c5ae3.js"],(function(e){"use strict";var t,a,n,r,o,d,i,l,u,s,c,p,m,f,v,g,I,O,b,y,L,w,h,C,V,j,P,D,k,R,x,N,Y;return{setters:[function(e){t=e.h,a=e.a8,n=e.N,r=e.r,o=e.x,d=e.Z,i=e.j,l=e.k,u=e.l,s=e.m,c=e.n,p=e.Q,m=e.z,f=e.I,v=e.A,g=e.s,I=e.d,O=e.D,b=e.a3,y=e.a4,L=e.T},function(e){w=e.d},function(e){h=e.r,C=e.t},function(e){V=e.p},function(e){j=e.i,P=e.b,D=e.p},function(e){k=e._,R=e.n},function(e){x=e.u},function(e){N=e.P},function(e){Y=e._},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const B=e=>(b("data-v-1dd27b92"),e=e(),y(),e),E={class:"net-sale-wrap"},T={class:"part product-name"},_=B((()=>m("span",null,null,-1))),H=B((()=>m("span",null,null,-1))),z={class:"part"},$={class:"footer"};e("default",Y(t({setup(e){const t=x();a();const b=n(),{productCode:y="HTEJBX",tenantId:Y="9991000001",orderNo:B,agentCode:M="",agencyCode:S,saleChannelId:A,extraInfo:F,from:U}=b.query,q=r(),J=r(),W=r(),G=r(),Q=r(),X=r({});let Z={};try{Z=JSON.parse(decodeURIComponent(F))}catch(ie){}const K=r({agencyId:S,agentCode:M,commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_underWrite",pageCode:"infoCollection",templateId:Z?.templateId,iseeBizNo:"",extraInfo:Z},orderCategory:1,saleChannelId:A,tenantId:Y,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"1",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"xinao",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",tenantId:Y}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),ee=o((()=>!!W.value?.productRelationPlanVOList?.length)),te=r();d([()=>Q.value,()=>G.value,()=>J.value],(()=>{const{premium:e}=Q.value||{};if(e)te.value=e&&`￥${e}元`;else{const{tenantProductInsureVO:e}=G.value||{};let t={};t=e?.planList?.length?(e?.planList||[]).find((e=>e.planCode===J.value)):e?.planInsureVO;const{paymentFrequencyValue:a,premiumUnit:n}=t?.productPremiumVOList?.[0]||{};te.value=a&&`￥${a}${n||"元"}`}}),{deep:!0,immediate:!0});const ae=o((()=>{let e=[];return e=ee.value?W.value?.productRelationPlanVOList.find((e=>e.planCode===J.value))?.productRiskVoList||[]:W.value?.productRiskVoList||[],e})),ne=o((()=>1===((ae.value||[])?.[0]?.riskDetailVOList?.[0]?.insuranceStartType||1)?`${I(new Date).format("YYYY-MM-DD")} 00:00:00`:`${I(new Date).add(1,"day").format("YYYY-MM-DD")} 00:00:00`)),re=o((()=>{const e=ae.value||[],{insuranceEndType:t,riskInsureLimitVO:a}=e?.[0]?.riskDetailVOList?.[0]||{},{insurancePeriodValueList:n}=a||{},[r,o]=(n?.[0]||"").split("_");return 1===t?`${I(new Date).add(o||0,r).format("YYYY-MM-DD")} 23:59:59`:t?`${I(new Date).add(o,r).format("YYYY-MM-DD")} 00:00:00`:""})),oe=async()=>{K.value.venderCode=W.value?.productBasicInfoVO.insurerCode,K.value.orderAmount=Q.value.premium,K.value.orderRealAmount=Q.value.premium,K.value.commencementTime=ne.value,K.value.expiryDate=re.value,K.value.tenantOrderInsuredList[0].planCode=J.value,K.value.tenantOrderInsuredList[0].planName=W.value?.productRelationPlanVOList.find((e=>e.planCode===J.value))?.planName,R(((e={},t={},a={})=>{const n={},r=(e=[])=>{(e||[]).forEach((e=>{n[e.riskCode]=e,e.riskPremiumDetailVOList?.length&&r(e.riskPremiumDetailVOList)}))};r(t.riskPremiumDetailVOList);const o={...a},d={tenantId:Y,riskList:o.tenantOrderInsuredList[0]?.tenantOrderProductList[0].riskVOList||[],riskPremium:n,productId:e?.productBasicInfoVO.id};return o.tenantOrderInsuredList[0].tenantOrderProductList[0]={premium:Q.value.premium,productCode:e.productBasicInfoVO.productCode,productName:e.productBasicInfoVO.productName,tenantOrderRiskList:C(d)},o})(W.value,Q.value,K.value),((e,t)=>{"jumpToPage"===t&&L("提交成功")}))},de=async()=>{q.value?.validateForm().then((()=>{O.confirm({title:"分享",message:`即将向客户【${K.value.tenantOrderHolder.name}】发送投保确认信息,请确认是否继续？`}).then((()=>{oe()}))}))};d([()=>K.value.tenantOrderHolder.gender,()=>K.value.tenantOrderHolder.birthday,()=>K.value.tenantOrderInsuredList?.[0].gender,()=>K.value.tenantOrderInsuredList?.[0].birthday,()=>J.value],w((([e,t])=>{e&&t&&(async(e,t,a)=>{const n={holder:{personVO:e.tenantOrderHolder},insuredVOList:e.tenantOrderInsuredList.map((e=>({insuredCode:"",personVO:e,productPlanVOList:[{insurerCode:t.productBasicInfoVO.insurerCode,planCode:J.value||0,riskVOList:h(a)}]}))),productCode:t.productBasicInfoVO.productCode,tenantId:Y},{code:r}=await P(n);if("10000"===r){const{code:e,data:t}=await D(n);Q.value="10000"===e?t:null}K.value.tenantOrderInsuredList[0].tenantOrderProductList=n.insuredVOList[0]?.productPlanVOList})(K.value,W.value,ae.value)}),500));return i((()=>{(async()=>{const{code:e,data:t}=await V({productCode:y,withInsureInfo:!0,tenantId:Y});"10000"===e&&(G.value=t,document.title=t.productFullName||"");const{code:a,data:n}=await j({productCode:y});"10000"===a&&(W.value=n,X.value=n.productFactor,n?.productRelationPlanVOList?.length&&(J.value=n.productRelationPlanVOList[0].planCode))})(),setTimeout((async()=>{window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const n=l("ProRadioButton"),r=l("ProCard"),o=l("ProCell"),d=l("ProPageWrap"),i=l("van-config-provider");return u(),s(i,{"theme-vars":v(t)},{default:c((()=>[p(d,null,{default:c((()=>[m("div",E,[m("div",T,f(W.value?.productBasicInfoVO?.productFullName),1),v(ee)?(u(),s(r,{key:0,"show-line":!1,title:"保障年期"},{default:c((()=>[p(n,{modelValue:J.value,"onUpdate:modelValue":a[0]||(a[0]=e=>J.value=e),class:"radio-group",prop:{label:"planName",value:"planCode"},options:W.value?.productRelationPlanVOList},null,8,["modelValue","options"])])),_:1})):g("",!0),p(k,{ref_key:"formRef",ref:q,"title-collection":{HOLDER:"投保人",INSURER:"被保人",BENEFICIARY:"收益人"},"need-desensitize":"","form-info":K.value,"send-sms-code":()=>{},"input-align":"left","factor-object":X.value},{holderName:c((()=>[_])),insurerName:c((()=>[H])),_:1},8,["form-info","send-sms-code","factor-object"]),m("div",z,[p(o,{title:"保费",content:te.value},null,8,["content"]),p(o,{title:"保障期间",content:`${v(ne).split(" ")[0]}~${v(re).split(" ")[0]}`},null,8,["content"])]),m("div",$,[p(N,{shadow:!1,text:"分享用户确认投保",onClick:de})])])])),_:1})])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-1dd27b92"]]))}}}))}();
