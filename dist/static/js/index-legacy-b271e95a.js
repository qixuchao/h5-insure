!function(){var e=document.createElement("style");e.innerHTML=".net-sale-wrap[data-v-50954d44]{padding-bottom:2rem;background:#f1f5fc}.net-sale-wrap .footer-button[data-v-50954d44]{justify-content:space-between}.net-sale-wrap .radio-group[data-v-50954d44]{width:100%}.net-sale-wrap .radio-group .radio-btn[data-v-50954d44]{justify-content:space-between}.net-sale-wrap .price[data-v-50954d44]{color:#393d46;font-size:.45333rem;font-weight:400}.net-sale-wrap .price span[data-v-50954d44]{color:var(--van-primary-color);font-weight:700}.net-sale-wrap .right[data-v-50954d44]{width:3.73333rem;background:var(--van-primary-color);border-color:var(--van-primary-color)}\n",document.head.appendChild(e),System.register(["./vendor-legacy-c308286a.js","./debounce-legacy-a1757db0.js","./utils-legacy-1e9de7c4.js","./product-legacy-887f38f0.js","./trial-legacy-d77fd0d4.js","./index-legacy-59ac1d44.js","./index-legacy-557f644f.js","./theme-legacy-83ec434c.js","./nextStep-legacy-955464b3.js","./useStorage-legacy-57dd50d2.js","./infoCollection-legacy-a1af6ab1.js","./trial-legacy-c75dcbc6.js","./relativeTime-legacy-2afc3e6e.js","./useDicData-legacy-8aa997ba.js"],(function(e){"use strict";var t,n,a,r,o,d,i,u,l,c,s,p,f,v,m,I,O,y,g,L,b,C,V,w,h,j,P,R,k,B,N;return{setters:[function(e){t=e.i,n=e.aa,a=e.P,r=e.r,o=e.A,d=e.$,i=e.k,u=e.l,l=e.m,c=e.n,s=e.p,p=e.t,f=e.B,v=e.L,m=e.C,I=e.x,O=e.G,y=e.D,g=e.a5,L=e.a6},function(e){b=e.d},function(e){C=e.r,V=e.t},function(e){w=e.p},function(e){h=e.i,j=e.b,P=e.p},function(e){R=e._},function(e){k=e._},function(e){B=e.u},function(e){N=e.n},function(){},function(){},function(){},function(){},function(){}],execute:function(){const E=e=>(g("data-v-50954d44"),e=e(),L(),e),x={class:"net-sale-wrap"},_={class:"product-name"},H=E((()=>f("span",null,null,-1))),T=E((()=>f("span",null,null,-1))),A={class:"footer-button"},D=O("分享用户确认投保");e("default",k(t({setup(e){const t=B();n();const O=a(),{productCode:g="HTEJBX",tenantId:L="9991000001",orderNo:k,agentCode:E="",saleChannelId:F,from:S}=O.query,U=r(),z=r(),q=r(),G=r(),W=r(),$=r({}),J=r({agencyId:E,commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_underWrite",pageCode:"infoCollection",templateId:3,iseeBizNo:""},orderCategory:1,saleUserId:F,tenantId:L,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"xinao",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",tenantId:L}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),M=o((()=>!!q.value?.productRelationPlanVOList?.length)),X=o((()=>{let{premium:e}=W.value||{};if(!e){const{tenantProductInsureVO:t}=G.value||{};let n={};n=t?.planList?.length?t?.planList.find((e=>e.plaCode===z.value)):t?.planInsureVO;const{paymentFrequencyValue:a,premiumUnit:r}=n?.productPremiumVOList?.[0]||{};e=a+r}return e||""})),Y=o((()=>{let e=[];return e=M.value?q.value?.productRelationPlanVOList.find((e=>e.planCode===z.value))?.productRiskVoList||[]:q.value?.productRiskVoList||[],e}));o((()=>{Y.value?.[0]?.riskDetailVOList?.[0]}));const K=async()=>{J.value.venderCode=q.value?.productBasicInfoVO.insurerCode,J.value.orderAmount=W.value.premium,J.value.orderRealAmount=W.value.premium,N(((e={},t={},n={})=>{const a={...n},r={tenantId:L,riskList:a.tenantOrderInsuredList[0]?.tenantOrderProductList[0].riskVOList||[],riskPremium:t,productId:e?.productBasicInfoVO.id};return a.tenantOrderInsuredList[0].tenantOrderProductList[0]={premium:"",productCode:e.productBasicInfoVO.productCode,productName:e.productBasicInfoVO.productName,tenantOrderRiskList:V(r)},a})(q.value,W.value,J.value),(()=>{}))},Q=async()=>{y.confirm({title:"分享",message:`即将向客户【${J.value.tenantOrderHolder.name}】发送投保确认信息,请确认是否继续？`}).then((()=>{K()}))};d([()=>J.value.tenantOrderHolder.gender,()=>J.value.tenantOrderHolder.birthday,()=>J.value.tenantOrderInsuredList?.[0].gender,()=>J.value.tenantOrderInsuredList?.[0].birthday,()=>z.value],b((([e,t,n,a])=>{e&&t&&n&&a&&(async(e,t,n)=>{const a={holder:{personVO:e.tenantOrderHolder},insuredVOList:e.tenantOrderInsuredList.map((e=>({insuredCode:"",personVO:e,productPlanVOList:[{insurerCode:t.productBasicInfoVO.insurerCode,planCode:z.value||0,riskVOList:C(n)}]})))},{code:r}=await j(a);if("10000"===r){const{code:e,data:t}=await P(a);W.value="10000"===e?t:null}J.value.tenantOrderInsuredList[0].tenantOrderProductList=a.insuredVOList[0]?.productPlanVOList})(J.value,q.value,Y.value)}),500));return i((()=>{(async()=>{const{code:e,data:t}=await w({productCode:g,withInsureInfo:!0,tenantId:L});"10000"===e&&(G.value=t,document.title=t.productFullName||"");const{code:n,data:a}=await h({productCode:g});"10000"===n&&(q.value=a,$.value=a.productFactor,a?.productRelationPlanVOList?.length&&(z.value=a.productRelationPlanVOList[0].planCode))})(),setTimeout((async()=>{window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,n)=>{const a=u("ProRadioButton"),r=u("ProCard"),o=u("ProCell"),d=u("van-button"),i=u("ProPageWrap"),O=u("van-config-provider");return l(),c(O,{"theme-vars":m(t)},{default:s((()=>[p(i,null,{default:s((()=>[f("div",x,[f("div",_,v(q.value?.productBasicInfoVO?.productFullName),1),m(M)?(l(),c(r,{key:0,title:"保障年期"},{default:s((()=>[p(a,{modelValue:z.value,"onUpdate:modelValue":n[0]||(n[0]=e=>z.value=e),class:"radio-group",prop:{label:"planName",value:"planCode"},options:q.value?.productRelationPlanVOList},null,8,["modelValue","options"])])),_:1})):I("",!0),p(R,{ref_key:"formRef",ref:U,"title-collection":{HOLDER:"投保人",INSURER:"被保人",BENEFICIARY:"收益人"},"form-info":J.value,"send-sms-code":()=>{},"input-align":"left","factor-object":$.value},{holderName:s((()=>[H])),insurerName:s((()=>[T])),_:1},8,["form-info","send-sms-code","factor-object"]),p(o,{title:"保费",content:m(X)},null,8,["content"]),f("div",A,[p(d,{type:"primary",block:"",onClick:Q},{default:s((()=>[D])),_:1})])])])),_:1})])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-50954d44"]]))}}}))}();
