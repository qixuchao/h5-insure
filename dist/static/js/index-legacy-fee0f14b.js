!function(){var e=document.createElement("style");e.innerHTML=".net-sale-wrap[data-v-83f542dc]{padding-bottom:1.33333rem;background:#f1f5fc}.net-sale-wrap .footer-button[data-v-83f542dc]{justify-content:space-between}.net-sale-wrap .product-name[data-v-83f542dc]{font-size:.48rem;font-weight:500;line-height:1.06667rem}.net-sale-wrap .part[data-v-83f542dc]{background-color:#fff;padding:0 var(--zaui-page-border, .4rem)}.net-sale-wrap .part .common-cell-wrapper[data-v-83f542dc]{height:1.38667rem;align-items:center;width:100%;display:inline-flex}.net-sale-wrap .part .common-cell-wrapper[data-v-83f542dc] .cell-container{align-items:flex-start;justify-content:center;width:100%;color:var(--van-field-label-color);font-size:.4rem}.net-sale-wrap .radio-group[data-v-83f542dc]{width:100%}.net-sale-wrap .radio-group .radio-btn[data-v-83f542dc]{justify-content:space-between}.net-sale-wrap .price[data-v-83f542dc]{color:#393d46;font-size:.45333rem;font-weight:400}.net-sale-wrap .price span[data-v-83f542dc]{color:var(--van-primary-color);font-weight:700}.net-sale-wrap .right[data-v-83f542dc]{width:3.73333rem;background:var(--van-primary-color);border-color:var(--van-primary-color)}.net-sale-wrap .footer[data-v-83f542dc]{margin-top:.66667rem;padding:0 var(--zaui-page-border, .4rem)}\n",document.head.appendChild(e),System.register(["./index-legacy-080a8765.js","./debounce-legacy-f3a647c0.js","./utils-legacy-f573e549.js","./product-legacy-111f7b88.js","./trial-legacy-ccbb7859.js","./index-legacy-89c3dd8b.js","./theme-legacy-14f266cb.js","./nextStep-legacy-0ccf230e.js","./index-legacy-1e4b1b38.js","./pdfdist-legacy-3ac4c460.js","./infoCollection-legacy-f305e38b.js","./useStorage-legacy-eaa08a98.js","./trial-legacy-33aafee0.js","./relativeTime-legacy-e88ead08.js","./validator-legacy-5e43cc69.js","./useDicData-legacy-9ede547e.js","./core-legacy-0d56294c.js","./index-legacy-6167ce30.js"],(function(e){"use strict";var t,a,n,r,o,d,l,i,c,u,s,p,f,v,m,I,g,y,O,L,w,h,C,V,b,j,P,R,T,D,x,k,E;return{setters:[function(e){t=e._,a=e.d,n=e.a,r=e.r,o=e.x,d=e.a7,l=e.y,i=e.b,c=e.c,u=e.e,s=e.w,p=e.f,f=e.i,v=e.t,m=e.l,I=e.j,g=e.$,y=e.a4,O=e.K,L=e.L,w=e.a2,h=e.T},function(e){C=e.d},function(e){V=e.r,b=e.t},function(e){j=e.p},function(e){P=e.i,R=e.b,T=e.p},function(e){D=e.default},function(e){x=e.u},function(e){k=e.n},function(e){E=e.default},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const N=e=>(O("data-v-83f542dc"),e=e(),L(),e),Y={class:"net-sale-wrap"},B={class:"part product-name"},H=N((()=>f("span",null,null,-1))),$=N((()=>f("span",null,null,-1))),_={class:"part"},F={class:"footer"};e("default",t(a({setup(e){const t=x(),a=n(),{productCode:O="HTEJBX",tenantId:L="9991000001",agentCode:N="",agencyCode:z,saleChannelId:M,extraInfo:S,preview:A}=a.query,U=r(),q=r("0"),J=r(),W=r(),G=r(),K=r([{}]),X=r([]),Q=r({}),Z=r("");let ee={};try{ee=JSON.parse(decodeURIComponent(S))}catch(ce){}const te=r({agencyId:z,agentCode:N,commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_underWrite",pageCode:"infoCollection",templateId:ee.templateId,iseeBizNo:Z.value,extraInfo:ee},orderCategory:1,saleChannelId:M,tenantId:L,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"1",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"xinao",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",subjectNo:"",tenantId:L}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),ae=o((()=>(J.value?.productRelationPlanVOList?.length||0)>1)),ne=r();d([()=>G.value,()=>W.value,()=>q.value],(()=>{const{premium:e}=G.value||{};if(e)ne.value=e&&`￥${e}元`;else{const{tenantProductInsureVO:e}=W.value||{};let t={};t=e?.planList?.length?(e?.planList||[]).find((e=>e.planCode===q.value)):e?.planInsureVO;const{paymentFrequencyValue:a,premiumUnit:n}=t?.productPremiumVOList?.[0]||{};ne.value=a&&`￥${a}${n||"元"}`}}),{deep:!0,immediate:!0});const re=o((()=>{let e=[];return e=J.value?.productRelationPlanVOList?.length?J.value?.productRelationPlanVOList.find((e=>e.planCode===q.value))?.productRiskVoList||[]:J.value?.productRiskVoList||[],e})),oe=o((()=>1===((re.value||[])?.[0]?.riskDetailVOList?.[0]?.insuranceStartType||1)?`${g(new Date).format("YYYY-MM-DD")} 00:00:00`:`${g(new Date).add(1,"day").format("YYYY-MM-DD")} 00:00:00`)),de=o((()=>{const e=re.value||[],{insuranceEndType:t,riskInsureLimitVO:a}=e?.[0]?.riskDetailVOList?.[0]||{},{insurancePeriodValueList:n}=a||{},[r,o]=(n?.[0]||"").split("_");return 1===t?`${g(new Date).add(o||0,r).format("YYYY-MM-DD")} 23:59:59`:t?`${g(new Date).add(o,r).format("YYYY-MM-DD")} 00:00:00`:""})),le=async()=>{te.value.venderCode=J.value?.productBasicInfoVO.insurerCode,te.value.orderAmount=G.value?.premium,te.value.orderRealAmount=G.value?.premium,te.value.commencementTime=oe.value,te.value.expiryDate=de.value,te.value.extInfo&&(te.value.extInfo.iseeBizNo=Z.value),te.value.tenantOrderInsuredList&&(te.value.tenantOrderInsuredList[0].planCode=q.value),k(((e,t,a)=>{const n={},r=(e=[])=>{(e||[]).forEach((e=>{n[e.riskCode]=e,e.riskPremiumDetailVOList?.length&&r(e.riskPremiumDetailVOList)}))};r(t?.riskPremiumDetailVOList);const o={...a},d={tenantId:L,riskList:X.value?.[0].riskVOList||[],riskPremium:n,productId:e?.productBasicInfoVO.id||0};return o.tenantOrderHolder&&(o.tenantOrderHolder.certType=o.tenantOrderHolder.certType||w.CERT),o.tenantOrderInsuredList&&(o.tenantOrderInsuredList[0].certType=o.tenantOrderInsuredList[0].certType||w.CERT,o.tenantOrderInsuredList[0].tenantOrderProductList=[{premium:G.value?.premium,productCode:e?.productBasicInfoVO.productCode,productName:e?.productBasicInfoVO.productName,tenantOrderRiskList:b(d)}]),o})(J.value,G.value,te.value),((e,t)=>{"jumpToPage"===t&&h("提交成功")}))},ie=async()=>{U.value?.validateForm().then((()=>{y.confirm({title:"分享",message:`即将向客户【${te.value?.tenantOrderHolder?.name}】发送投保确认信息,请确认是否继续？`}).then((()=>{A||le()}))}))};d([()=>te.value.tenantOrderInsuredList?.[0].name,()=>te.value.tenantOrderInsuredList?.[0].birthday,()=>q.value],C((([e,t])=>{e&&t&&(A||(async(e,t,a)=>{const n={holder:{personVO:{certType:w.CERT,...e.tenantOrderHolder}},insuredVOList:(e?.tenantOrderInsuredList||[]).map((e=>({insuredCode:"",personVO:{...e,certType:w.CERT},productPlanVOList:[{insurerCode:t?.productBasicInfoVO.insurerCode,planCode:q.value||"0",riskVOList:V(a)}]}))),productCode:t?.productBasicInfoVO.productCode,tenantId:L},{code:r}=await R(n);if("10000"===r){const{code:e,data:t}=await T(n);"10000"===e?(G.value=t,X.value=n?.insuredVOList?.[0]?.productPlanVOList||[]):G.value=void 0}})(te.value,J.value,re.value))}),500));return d((()=>q.value),(()=>{K.value&&(Q.value=K.value[q.value])})),l((()=>{j({productCode:O,withInsureInfo:!0,tenantId:L}).then((({code:e,data:t})=>{"10000"===e&&(W.value=t,document.title=t.tenantProductInsureVO?.productName||"")})),P({productCode:O}).then((({code:e,data:t})=>{"10000"===e&&(J.value=t,K.value=t.planFactor,t.productRelationPlanVOList?.length&&(q.value=t.productRelationPlanVOList[0].planCode||""),t.productFactor?Q.value=t.productFactor:t.planFactor&&(Q.value=t.planFactor[q.value]))})),setTimeout((async()=>{Z.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const n=i("ProRadioButton"),r=i("ProCard"),o=i("ProCell"),d=i("ProPageWrap"),l=i("van-config-provider");return c(),u(l,{"theme-vars":m(t)},{default:s((()=>[p(d,null,{default:s((()=>[f("div",Y,[f("div",B,v(J.value?.productBasicInfoVO?.productFullName),1),m(ae)?(c(),u(r,{key:0,"show-line":!1,title:"保障年期"},{default:s((()=>[p(n,{modelValue:q.value,"onUpdate:modelValue":a[0]||(a[0]=e=>q.value=e),class:"radio-group",prop:{label:"planName",value:"planCode"},options:J.value?.productRelationPlanVOList},null,8,["modelValue","options"])])),_:1})):I("",!0),p(D,{ref_key:"formRef",ref:U,"title-collection":{HOLDER:"投保人",INSURER:"被保人",BENEFICIARY:"收益人"},"form-info":te.value,"send-sms-code":()=>{},"input-align":"left","factor-object":Q.value},{holderName:s((()=>[H])),insurerName:s((()=>[$])),_:1},8,["form-info","send-sms-code","factor-object"]),f("div",_,[p(o,{title:"保费",content:ne.value},null,8,["content"]),p(o,{title:"保障期间",content:`${m(oe).split(" ")[0]}~${m(de).split(" ")[0]}`},null,8,["content"])]),f("div",F,[p(E,{shadow:!1,text:"分享用户确认投保",onClick:ie})])])])),_:1})])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-83f542dc"]]))}}}))}();
