!function(){var e=document.createElement("style");e.innerHTML=".net-sale-wrap[data-v-49382cd0]{padding-bottom:1.33333rem;background:#f1f5fc}.net-sale-wrap .footer-button[data-v-49382cd0]{justify-content:space-between}.net-sale-wrap .product-name[data-v-49382cd0]{font-size:.48rem;font-weight:500;line-height:1.06667rem}.net-sale-wrap .part[data-v-49382cd0]{background-color:#fff;padding:0 var(--zaui-page-border, .4rem)}.net-sale-wrap .part .common-cell-wrapper[data-v-49382cd0]{height:1.38667rem;align-items:center;width:100%;display:inline-flex}.net-sale-wrap .part .common-cell-wrapper[data-v-49382cd0] .cell-container{align-items:flex-start;justify-content:center;width:100%;color:var(--van-field-label-color);font-size:.4rem}.net-sale-wrap .radio-group[data-v-49382cd0]{width:100%}.net-sale-wrap .radio-group .radio-btn[data-v-49382cd0]{justify-content:space-between}.net-sale-wrap .price[data-v-49382cd0]{color:#393d46;font-size:.45333rem;font-weight:400}.net-sale-wrap .price span[data-v-49382cd0]{color:var(--van-primary-color);font-weight:700}.net-sale-wrap .right[data-v-49382cd0]{width:3.73333rem;background:var(--van-primary-color);border-color:var(--van-primary-color)}.net-sale-wrap .footer[data-v-49382cd0]{margin-top:.66667rem;padding:0 var(--zaui-page-border, .4rem)}\n",document.head.appendChild(e),System.register(["./index-legacy-46ac1a5e.js","./debounce-legacy-5f4409b0.js","./utils-legacy-1ac443a4.js","./product-legacy-de5d5009.js","./trial-legacy-6b28fcc5.js","./nextStep-legacy-a3fab109.js","./theme-legacy-691dfb9a.js","./index-legacy-f300c266.js","./pdfdist-legacy-27f39a85.js","./infoCollection-legacy-538d204e.js","./useStorage-legacy-0d36c65d.js","./trial-legacy-c4e3bfcd.js","./relativeTime-legacy-d966ba52.js","./validator-legacy-5e43cc69.js","./useDicData-legacy-ef674ec2.js","./core-legacy-a7418d42.js","./index-legacy-f9e5a3d9.js"],(function(e){"use strict";var t,a,n,r,o,d,l,i,u,c,s,p,v,f,m,g,y,O,I,L,w,h,C,V,b,j,P,D,R,T,k,x,E;return{setters:[function(e){t=e._,a=e.d,n=e.a,r=e.r,o=e.y,d=e.a8,l=e.z,i=e.b,u=e.c,c=e.e,s=e.w,p=e.f,v=e.i,f=e.t,m=e.l,g=e.j,y=e.a0,O=e.a5,I=e.L,L=e.M,w=e.T,h=e.a3},function(e){C=e.d},function(e){V=e.r,b=e.t},function(e){j=e.p},function(e){P=e.i,D=e.b,R=e.p},function(e){T=e._,k=e.n},function(e){x=e.u},function(e){E=e.P},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const Y=e=>(I("data-v-49382cd0"),e=e(),L(),e),B={class:"net-sale-wrap"},N={class:"part product-name"},H=Y((()=>v("span",null,null,-1))),_=Y((()=>v("span",null,null,-1))),z={class:"part"},F={class:"footer"};e("default",t(a({setup(e){const t=x(),a=n(),{productCode:I="HTEJBX",tenantId:L="9991000001",agentCode:Y="",agencyCode:M,saleChannelId:$,extraInfo:S,preview:A}=a.query,U=r(),q=r(),J=r(),W=r(),G=r(),X=r({1:[],2:[],3:[]}),K=r({}),Q=r({}),Z=r();let ee={};try{ee=JSON.parse(decodeURIComponent(S))}catch(ue){}const te=r({agencyId:M,agentCode:Y,commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_underWrite",pageCode:"infoCollection",templateId:ee?.templateId,iseeBizNo:Z,extraInfo:ee},orderCategory:1,saleChannelId:$,tenantId:L,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"1",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"xinao",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",tenantId:L}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),ae=o((()=>(J.value?.productRelationPlanVOList?.length||0)>1)),ne=r();d([()=>G.value,()=>W.value,()=>q.value],(()=>{const{premium:e}=G.value||{};if(e)ne.value=e&&`￥${e}元`;else{const{tenantProductInsureVO:e}=W.value||{};let t={};t=e?.planList?.length?(e?.planList||[]).find((e=>e.planCode===q.value)):e?.planInsureVO;const{paymentFrequencyValue:a,premiumUnit:n}=t?.productPremiumVOList?.[0]||{};ne.value=a&&`￥${a}${n||"元"}`}}),{deep:!0,immediate:!0});const re=o((()=>{let e=[];return e=J.value?.productRelationPlanVOList?.length?J.value?.productRelationPlanVOList.find((e=>e.planCode===q.value))?.productRiskVoList||[]:J.value?.productRiskVoList||[],e})),oe=o((()=>1===((re.value||[])?.[0]?.riskDetailVOList?.[0]?.insuranceStartType||1)?`${y(new Date).format("YYYY-MM-DD")} 00:00:00`:`${y(new Date).add(1,"day").format("YYYY-MM-DD")} 00:00:00`)),de=o((()=>{const e=re.value||[],{insuranceEndType:t,riskInsureLimitVO:a}=e?.[0]?.riskDetailVOList?.[0]||{},{insurancePeriodValueList:n}=a||{},[r,o]=(n?.[0]||"").split("_");return 1===t?`${y(new Date).add(o||0,r).format("YYYY-MM-DD")} 23:59:59`:t?`${y(new Date).add(o,r).format("YYYY-MM-DD")} 00:00:00`:""})),le=async()=>{te.value.venderCode=J.value?.productBasicInfoVO.insurerCode,te.value.orderAmount=G.value.premium,te.value.orderRealAmount=G.value.premium,te.value.commencementTime=oe.value,te.value.expiryDate=de.value,te.value.extInfo.iseeBizNo=Z.value,te.value.tenantOrderInsuredList[0].planCode=q.value,k(((e={},t={},a={})=>{const n={},r=(e=[])=>{(e||[]).forEach((e=>{n[e.riskCode]=e,e.riskPremiumDetailVOList?.length&&r(e.riskPremiumDetailVOList)}))};r(t.riskPremiumDetailVOList);const o={...a},d={tenantId:L,riskList:K.value?.[0].riskVOList||[],riskPremium:n,productId:e?.productBasicInfoVO.id};return o.tenantOrderHolder.certType=o.tenantOrderHolder.certType||h.CERT,o.tenantOrderInsuredList[0].certType=o.tenantOrderInsuredList[0].certType||h.CERT,o.tenantOrderInsuredList[0].tenantOrderProductList=[{premium:G.value.premium,productCode:e.productBasicInfoVO.productCode,productName:e.productBasicInfoVO.productName,tenantOrderRiskList:b(d)}],o})(J.value,G.value,te.value),((e,t)=>{"jumpToPage"===t&&w("提交成功")}))},ie=async()=>{U.value?.validateForm().then((()=>{O.confirm({title:"分享",message:`即将向客户【${te.value.tenantOrderHolder.name}】发送投保确认信息,请确认是否继续？`}).then((()=>{A||le()}))}))};d([()=>te.value.tenantOrderHolder.gender,()=>te.value.tenantOrderHolder.name,()=>te.value.tenantOrderHolder.birthday,()=>te.value.tenantOrderInsuredList?.[0].name,()=>te.value.tenantOrderInsuredList?.[0].gender,()=>te.value.tenantOrderInsuredList?.[0].birthday,()=>q.value],C((([e,t,a,n,r,o])=>{t&&n&&r&&o&&(A||(async(e,t,a)=>{const n={holder:{personVO:{certType:1,...e.tenantOrderHolder}},insuredVOList:e.tenantOrderInsuredList.map((e=>({insuredCode:"",personVO:{...e,certType:1},productPlanVOList:[{insurerCode:t.productBasicInfoVO.insurerCode,planCode:q.value||0,riskVOList:V(a)}]}))),productCode:t.productBasicInfoVO.productCode,tenantId:L},{code:r}=await D(n);if("10000"===r){const{code:e,data:t}=await R(n);"10000"===e?(G.value=t,K.value=n.insuredVOList[0]?.productPlanVOList):G.value=null}})(te.value,J.value,re.value))}),500));return d((()=>q.value),(()=>{X.value&&(Q.value=X.value[q.value])})),l((()=>{j({productCode:I,withInsureInfo:!0,tenantId:L}).then((({code:e,data:t})=>{"10000"===e&&(W.value=t,document.title=t.tenantProductInsureVO?.productNam||"")})),P({productCode:I}).then((({code:e,data:t})=>{"10000"===e&&(J.value=t,X.value=t.planFactor,t.productRelationPlanVOList?.length&&(q.value=t.productRelationPlanVOList[0].planCode),t.productFactor?Q.value=t.productFactor:t.planFactor&&(Q.value=t.planFactor[q.value]))})),setTimeout((async()=>{Z.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const n=i("ProRadioButton"),r=i("ProCard"),o=i("ProCell"),d=i("ProPageWrap"),l=i("van-config-provider");return u(),c(l,{"theme-vars":m(t)},{default:s((()=>[p(d,null,{default:s((()=>[v("div",B,[v("div",N,f(J.value?.productBasicInfoVO?.productFullName),1),m(ae)?(u(),c(r,{key:0,"show-line":!1,title:"保障年期"},{default:s((()=>[p(n,{modelValue:q.value,"onUpdate:modelValue":a[0]||(a[0]=e=>q.value=e),class:"radio-group",prop:{label:"planName",value:"planCode"},options:J.value?.productRelationPlanVOList},null,8,["modelValue","options"])])),_:1})):g("",!0),p(T,{ref_key:"formRef",ref:U,"title-collection":{HOLDER:"投保人",INSURER:"被保人",BENEFICIARY:"收益人"},"need-desensitize":"","form-info":te.value,"send-sms-code":()=>{},"input-align":"left","factor-object":Q.value},{holderName:s((()=>[H])),insurerName:s((()=>[_])),_:1},8,["form-info","send-sms-code","factor-object"]),v("div",z,[p(o,{title:"保费",content:ne.value},null,8,["content"]),p(o,{title:"保障期间",content:`${m(oe).split(" ")[0]}~${m(de).split(" ")[0]}`},null,8,["content"])]),v("div",F,[p(E,{shadow:!1,text:"分享用户确认投保",onClick:ie})])])])),_:1})])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-49382cd0"]]))}}}))}();
