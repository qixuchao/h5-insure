!function(){var e=document.createElement("style");e.innerHTML=".net-sale-wrap[data-v-5f81de88]{padding-bottom:1.33333rem;background:#f1f5fc}.net-sale-wrap .footer-button[data-v-5f81de88]{justify-content:space-between}.net-sale-wrap .product-name[data-v-5f81de88]{font-size:.48rem;font-weight:500;line-height:1.06667rem}.net-sale-wrap .part[data-v-5f81de88]{background-color:#fff;padding:0 var(--zaui-page-border, .4rem)}.net-sale-wrap .part .common-cell-wrapper[data-v-5f81de88]{height:1.38667rem;align-items:center;width:100%;display:inline-flex}.net-sale-wrap .part .common-cell-wrapper[data-v-5f81de88] .cell-container{align-items:flex-start;justify-content:center;width:100%;color:var(--van-field-label-color);font-size:.4rem}.net-sale-wrap .radio-group[data-v-5f81de88]{width:100%}.net-sale-wrap .radio-group .radio-btn[data-v-5f81de88]{justify-content:space-between}.net-sale-wrap .price[data-v-5f81de88]{color:#393d46;font-size:.45333rem;font-weight:400}.net-sale-wrap .price span[data-v-5f81de88]{color:var(--van-primary-color);font-weight:700}.net-sale-wrap .right[data-v-5f81de88]{width:3.73333rem;background:var(--van-primary-color);border-color:var(--van-primary-color)}.net-sale-wrap .footer[data-v-5f81de88]{margin-top:.66667rem;padding:0 var(--zaui-page-border, .4rem)}\n",document.head.appendChild(e),System.register(["./index-legacy-56d6d425.js","./debounce-legacy-4293c378.js","./utils-legacy-e8db6d13.js","./product-legacy-058e1d27.js","./trial-legacy-c8f7c6d6.js","./index-legacy-1be5d6eb.js","./theme-legacy-14f266cb.js","./nextStep-legacy-69daa7f6.js","./index-legacy-2a7222a9.js","./pdfh5-legacy-783b46b8.js","./infoCollection-legacy-20823e29.js","./useStorage-legacy-3ac02139.js","./trial-legacy-0dc46ee0.js","./relativeTime-legacy-e44dda2a.js","./validator-legacy-5e43cc69.js","./useDicData-legacy-0ad52516.js","./core-legacy-2613e558.js","./index-legacy-8806fe1e.js"],(function(e){"use strict";var t,a,n,r,o,d,i,l,u,c,s,p,f,v,m,I,O,g,y,L,C,w,h,V,b,j,x,P,R,T,D,N,k;return{setters:[function(e){t=e._,a=e.d,n=e.a,r=e.r,o=e.x,d=e.a8,i=e.y,l=e.b,u=e.c,c=e.e,s=e.w,p=e.f,f=e.i,v=e.t,m=e.l,I=e.j,O=e.$,g=e.a5,y=e.K,L=e.L,C=e.a3,w=e.T},function(e){h=e.d},function(e){V=e.r,b=e.t},function(e){j=e.p},function(e){x=e.i,P=e.b,R=e.p},function(e){T=e.default},function(e){D=e.u},function(e){N=e.n},function(e){k=e.default},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const E=e=>(y("data-v-5f81de88"),e=e(),L(),e),B={class:"net-sale-wrap"},Y={class:"part product-name"},H=E((()=>f("span",null,null,-1))),$=E((()=>f("span",null,null,-1))),F={class:"part"},_={class:"footer"};e("default",t(a({setup(e){const t=D(),a=n(),{productCode:y="HTEJBX",tenantId:L="9991000001",agentCode:E="",agencyCode:S,saleChannelId:z,extraInfo:M,preview:U}=a.query,A=r(),q=r("0"),J=r(),W=r(),G=r(),K=r([{}]),X=r([]),Q=r({}),Z=r("");let ee={};try{ee=JSON.parse(decodeURIComponent(M))}catch(ue){}const te=r({agencyId:S,agentCode:E,commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_underWrite",pageCode:"infoCollection",templateId:ee.templateId,iseeBizNo:Z.value,extraInfo:ee},orderCategory:1,saleUserId:E,saleChannelId:z,tenantId:L,venderCode:"",tenantOrderHolder:{extInfo:{occupationCodeList:[]}},tenantOrderInsuredList:[{relationToHolder:"1",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"xinao",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",subjectNo:"",tenantId:L}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),ae=o((()=>(J.value?.productRelationPlanVOList?.length||0)>1)),ne=r();d([()=>G.value,()=>W.value,()=>q.value],(()=>{const{premium:e}=G.value||{};if(e)ne.value=e&&`￥${e}元`;else{const{tenantProductInsureVO:e}=W.value||{};let t={};t=e?.planList?.length?(e?.planList||[]).find((e=>e.planCode===q.value)):e?.planInsureVO;const{paymentFrequencyValue:a,premiumUnit:n}=t?.productPremiumVOList?.[0]||{};ne.value=a&&`￥${a}${n||"元"}`}}),{deep:!0,immediate:!0});const re=o((()=>{let e=[];return e=J.value?.productRelationPlanVOList?.length?J.value?.productRelationPlanVOList.find((e=>e.planCode===q.value))?.productRiskVoList||[]:J.value?.productRiskVoList||[],e})),oe=o((()=>1===((re.value||[])?.[0]?.riskDetailVOList?.[0]?.insuranceStartType||1)?`${O(new Date).format("YYYY-MM-DD")} 00:00:00`:`${O(new Date).add(1,"day").format("YYYY-MM-DD")} 00:00:00`)),de=o((()=>{const e=re.value||[],{insuranceEndType:t,riskInsureLimitVO:a}=e?.[0]?.riskDetailVOList?.[0]||{},{insurancePeriodValueList:n}=a||{},[r,o]=(n?.[0]||"").split("_");return 1===t?`${O(new Date).add(o||0,r).format("YYYY-MM-DD")} 23:59:59`:t?`${O(new Date).add(o,r).format("YYYY-MM-DD")} 00:00:00`:""})),ie=async()=>{te.value.venderCode=J.value?.productBasicInfoVO.insurerCode,te.value.orderAmount=G.value?.premium,te.value.orderRealAmount=G.value?.premium,te.value.commencementTime=oe.value,te.value.expiryDate=de.value,te.value.extInfo&&(te.value.extInfo.iseeBizNo=Z.value),te.value.tenantOrderInsuredList&&(te.value.tenantOrderInsuredList[0].planCode=q.value),N(((e,t,a)=>{const n={},r=(e=[])=>{(e||[]).forEach((e=>{n[e.riskCode]=e,e.riskPremiumDetailVOList?.length&&r(e.riskPremiumDetailVOList)}))};r(t?.riskPremiumDetailVOList);const o={...a},d={tenantId:L,riskList:X.value?.[0].riskVOList||[],riskPremium:n,productId:e?.productBasicInfoVO.id||0};return o.tenantOrderHolder&&(o.tenantOrderHolder.certType=o.tenantOrderHolder.certType||C.CERT,o.tenantOrderHolder.certNo=(o.tenantOrderHolder.certNo||"").toLocaleUpperCase()),o.tenantOrderInsuredList&&(o.tenantOrderInsuredList[0].certType=o.tenantOrderInsuredList[0].certType||C.CERT,o.tenantOrderInsuredList[0].certNo=(o.tenantOrderInsuredList[0].certNo||"").toLocaleUpperCase(),o.tenantOrderInsuredList[0].tenantOrderProductList=[{premium:G.value?.premium,productCode:e?.productBasicInfoVO.productCode,productName:e?.productBasicInfoVO.productName,tenantOrderRiskList:b(d)}]),o})(J.value,G.value,te.value),((e,t)=>{"jumpToPage"===t&&w("提交成功")}))},le=async()=>{A.value?.validateForm().then((()=>{g.confirm({title:"分享",message:`即将向客户【${te.value?.tenantOrderHolder?.name}】发送投保确认信息,请确认是否继续？`}).then((()=>{U||ie()}))}))};d([()=>te.value.tenantOrderInsuredList?.[0].name,()=>te.value.tenantOrderInsuredList?.[0].birthday,()=>q.value],h((([e,t])=>{e&&t&&(U||(async(e,t,a)=>{const n={holder:{personVO:{certType:C.CERT,...e.tenantOrderHolder,socialFlag:`${e.tenantOrderHolder?.extInfo?.hasSocialInsurance||""}`,occupationCodeList:e.tenantOrderHolder?.extInfo?.occupationCodeList}},insuredVOList:(e?.tenantOrderInsuredList||[]).map((e=>({insuredCode:"",personVO:{...e,certType:C.CERT,socialFlag:`${e?.extInfo?.hasSocialInsurance||""}`,occupationCodeList:e?.extInfo?.occupationCodeList},productPlanVOList:[{insurerCode:t?.productBasicInfoVO.insurerCode,planCode:q.value||"",riskVOList:V(a)}]}))),productCode:t?.productBasicInfoVO.productCode,productId:t?.productBasicInfoVO.id,tenantId:L},{code:r}=await P(n);if("10000"===r){const{code:e,data:t}=await R(n);"10000"===e?(G.value=t,X.value=n?.insuredVOList?.[0]?.productPlanVOList||[]):G.value=void 0}})(te.value,J.value,re.value))}),500));return d((()=>q.value),(()=>{K.value&&(Q.value=K.value[q.value])})),i((()=>{(async()=>{await j({productCode:y,withInsureInfo:!0,tenantId:L}).then((({code:e,data:t})=>{"10000"===e&&(W.value=t,document.title=t.tenantProductInsureVO?.productName||"")})),x({productCode:y}).then((({code:e,data:t})=>{"10000"===e&&(J.value=t,K.value=t.planFactor,t.productRelationPlanVOList?.length&&(q.value=t.productRelationPlanVOList[0].planCode||""),t.productFactor?Q.value=t.productFactor:t.planFactor&&(Q.value=t.planFactor[q.value]))}))})(),setTimeout((async()=>{Z.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const n=l("ProRadioButton"),r=l("ProCard"),o=l("ProCell"),d=l("ProPageWrap"),i=l("van-config-provider");return u(),c(i,{"theme-vars":m(t)},{default:s((()=>[p(d,null,{default:s((()=>[f("div",B,[f("div",Y,v(J.value?.productBasicInfoVO?.productFullName),1),m(ae)?(u(),c(r,{key:0,"show-line":!1,title:"保障年期"},{default:s((()=>[p(n,{modelValue:q.value,"onUpdate:modelValue":a[0]||(a[0]=e=>q.value=e),class:"radio-group",prop:{label:"planName",value:"planCode"},options:J.value?.productRelationPlanVOList},null,8,["modelValue","options"])])),_:1})):I("",!0),p(T,{ref_key:"formRef",ref:A,"title-collection":{HOLDER:"投保人",INSURER:"被保人",BENEFICIARY:"收益人"},"form-info":te.value,"send-sms-code":()=>{},"input-align":"left","factor-object":Q.value},{holderName:s((()=>[H])),insurerName:s((()=>[$])),_:1},8,["form-info","send-sms-code","factor-object"]),f("div",F,[p(o,{title:"保费",content:ne.value},null,8,["content"]),p(o,{title:"保障期间",content:`${m(oe).split(" ")[0]}~${m(de).split(" ")[0]}`},null,8,["content"])]),f("div",_,[p(k,{shadow:!1,text:"分享用户确认投保",onClick:le})])])])),_:1})])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-5f81de88"]]))}}}))}();
