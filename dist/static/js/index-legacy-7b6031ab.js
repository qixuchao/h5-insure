!function(){var e=document.createElement("style");e.innerHTML=".net-sale-wrap[data-v-323bbc16]{padding-bottom:1.33333rem;background:#f1f5fc}.net-sale-wrap .footer-button[data-v-323bbc16]{justify-content:space-between}.net-sale-wrap .product-name[data-v-323bbc16]{font-size:.48rem;font-weight:500;line-height:1.06667rem}.net-sale-wrap .part[data-v-323bbc16]{background-color:#fff;padding:0 var(--zaui-page-border, .4rem)}.net-sale-wrap .part .common-cell-wrapper[data-v-323bbc16]{height:1.38667rem;align-items:center;width:100%;display:inline-flex}.net-sale-wrap .part .common-cell-wrapper[data-v-323bbc16] .cell-container{align-items:flex-start;justify-content:center;width:100%;color:var(--van-field-label-color);font-size:.4rem}.net-sale-wrap .radio-group[data-v-323bbc16]{width:100%}.net-sale-wrap .radio-group .radio-btn[data-v-323bbc16]{justify-content:space-between}.net-sale-wrap .price[data-v-323bbc16]{color:#393d46;font-size:.45333rem;font-weight:400}.net-sale-wrap .price span[data-v-323bbc16]{color:var(--van-primary-color);font-weight:700}.net-sale-wrap .right[data-v-323bbc16]{width:3.73333rem;background:var(--van-primary-color);border-color:var(--van-primary-color)}.net-sale-wrap .footer[data-v-323bbc16]{margin-top:.66667rem;padding:0 var(--zaui-page-border, .4rem)}\n",document.head.appendChild(e),System.register(["./vendor-legacy-105aea5b.js","./debounce-legacy-b2fcb1a8.js","./utils-legacy-60b6ac4f.js","./product-legacy-35814c42.js","./trial-legacy-0515ed7a.js","./nextStep-legacy-b265d0f2.js","./theme-legacy-28dda1ed.js","./index-legacy-9de5d3ef.js","./index-legacy-e209a3d2.js","./infoCollection-legacy-52f2d859.js","./useStorage-legacy-f27a7283.js","./trial-legacy-56b5fb68.js","./relativeTime-legacy-b938182c.js","./validator-legacy-5e43cc69.js","./useDicData-legacy-0db923ea.js","./core-legacy-c9fe4a94.js","./index-legacy-5e1625a2.js"],(function(e){"use strict";var t,a,n,r,o,l,i,d,u,c,s,p,v,m,f,b,g,I,y,O,w,L,h,C,V,j,P,D,k,R,x,N,Y;return{setters:[function(e){t=e.h,a=e.a8,n=e.N,r=e.r,o=e.x,l=e.Z,i=e.j,d=e.k,u=e.l,c=e.m,s=e.n,p=e.Q,v=e.z,m=e.I,f=e.A,b=e.s,g=e.d,I=e.D,y=e.a3,O=e.a4,w=e.T},function(e){L=e.d},function(e){h=e.r,C=e.t},function(e){V=e.p},function(e){j=e.i,P=e.b,D=e.p},function(e){k=e._,R=e.n},function(e){x=e.u},function(e){N=e.P},function(e){Y=e._},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const B=e=>(y("data-v-323bbc16"),e=e(),O(),e),E={class:"net-sale-wrap"},T={class:"part product-name"},_=B((()=>v("span",null,null,-1))),H=B((()=>v("span",null,null,-1))),z={class:"part"},F={class:"footer"};e("default",Y(t({setup(e){const t=x();a();const y=n(),{productCode:O="HTEJBX",tenantId:Y="9991000001",orderNo:B,agentCode:$="",agencyCode:M,saleChannelId:S,extraInfo:A,from:U}=y.query,q=r(),J=r(),W=r(),G=r(),Q=r(),X=r({}),Z=r({}),K=r({});let ee="",te={};try{te=JSON.parse(decodeURIComponent(A))}catch(ce){}const ae=r({agencyId:M,agentCode:$,commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_underWrite",pageCode:"infoCollection",templateId:te?.templateId,iseeBizNo:ee,extraInfo:te},orderCategory:1,saleChannelId:S,tenantId:Y,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"1",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"xinao",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",tenantId:Y}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),ne=o((()=>!!W.value?.productRelationPlanVOList?.length)),re=r();l([()=>Q.value,()=>G.value,()=>J.value],(()=>{const{premium:e}=Q.value||{};if(e)re.value=e&&`￥${e}元`;else{const{tenantProductInsureVO:e}=G.value||{};let t={};t=e?.planList?.length?(e?.planList||[]).find((e=>e.planCode===J.value)):e?.planInsureVO;const{paymentFrequencyValue:a,premiumUnit:n}=t?.productPremiumVOList?.[0]||{};re.value=a&&`￥${a}${n||"元"}`}}),{deep:!0,immediate:!0});const oe=o((()=>{let e=[];return e=ne.value?W.value?.productRelationPlanVOList.find((e=>e.planCode===J.value))?.productRiskVoList||[]:W.value?.productRiskVoList||[],e})),le=o((()=>1===((oe.value||[])?.[0]?.riskDetailVOList?.[0]?.insuranceStartType||1)?`${g(new Date).format("YYYY-MM-DD")} 00:00:00`:`${g(new Date).add(1,"day").format("YYYY-MM-DD")} 00:00:00`)),ie=o((()=>{const e=oe.value||[],{insuranceEndType:t,riskInsureLimitVO:a}=e?.[0]?.riskDetailVOList?.[0]||{},{insurancePeriodValueList:n}=a||{},[r,o]=(n?.[0]||"").split("_");return 1===t?`${g(new Date).add(o||0,r).format("YYYY-MM-DD")} 23:59:59`:t?`${g(new Date).add(o,r).format("YYYY-MM-DD")} 00:00:00`:""})),de=async()=>{ae.value.venderCode=W.value?.productBasicInfoVO.insurerCode,ae.value.orderAmount=Q.value.premium,ae.value.orderRealAmount=Q.value.premium,ae.value.commencementTime=le.value,ae.value.expiryDate=ie.value,ae.value.tenantOrderInsuredList[0].planCode=J.value,R(((e={},t={},a={})=>{const n={},r=(e=[])=>{(e||[]).forEach((e=>{n[e.riskCode]=e,e.riskPremiumDetailVOList?.length&&r(e.riskPremiumDetailVOList)}))};r(t.riskPremiumDetailVOList);const o={...a},l={tenantId:Y,riskList:Z.value?.[0].riskVOList||[],riskPremium:n,productId:e?.productBasicInfoVO.id};return o.tenantOrderInsuredList[0].tenantOrderProductList[0]={premium:Q.value.premium,productCode:e.productBasicInfoVO.productCode,productName:e.productBasicInfoVO.productName,tenantOrderRiskList:C(l)},o})(W.value,Q.value,ae.value),((e,t)=>{"jumpToPage"===t&&w("提交成功")}))},ue=async()=>{q.value?.validateForm().then((()=>{I.confirm({title:"分享",message:`即将向客户【${ae.value.tenantOrderHolder.name}】发送投保确认信息,请确认是否继续？`}).then((()=>{de()}))}))};l([()=>ae.value.tenantOrderHolder.gender,()=>ae.value.tenantOrderHolder.birthday,()=>ae.value.tenantOrderInsuredList?.[0].gender,()=>ae.value.tenantOrderInsuredList?.[0].birthday,()=>J.value],L((([e,t])=>{e&&t&&(async(e,t,a)=>{const n={holder:{personVO:e.tenantOrderHolder},insuredVOList:e.tenantOrderInsuredList.map((e=>({insuredCode:"",personVO:e,productPlanVOList:[{insurerCode:t.productBasicInfoVO.insurerCode,planCode:J.value||0,riskVOList:h(a)}]}))),productCode:t.productBasicInfoVO.productCode,tenantId:Y},{code:r}=await P(n);if("10000"===r){const{code:e,data:t}=await D(n);"10000"===e?(Q.value=t,Z.value=n.insuredVOList[0]?.productPlanVOList):Q.value=null}})(ae.value,W.value,oe.value)}),500));return l((()=>J.value),(()=>{X.value&&(K.value=X.value[J.value])})),i((()=>{(async()=>{const{code:e,data:t}=await V({productCode:O,withInsureInfo:!0,tenantId:Y});"10000"===e&&(G.value=t,document.title=t.tenantProductInsureVO?.productNam||"");const{code:a,data:n}=await j({productCode:O});"10000"===a&&(W.value=n,X.value=n.planFactor,n?.productRelationPlanVOList?.length&&(J.value=n.productRelationPlanVOList[0].planCode),n.productFactor?K.value=n.productFactor:n.planFactor&&(K.value=n.planFactor[J.value]))})(),setTimeout((async()=>{ee=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const n=d("ProRadioButton"),r=d("ProCard"),o=d("ProCell"),l=d("ProPageWrap"),i=d("van-config-provider");return u(),c(i,{"theme-vars":f(t)},{default:s((()=>[p(l,null,{default:s((()=>[v("div",E,[v("div",T,m(W.value?.productBasicInfoVO?.productFullName),1),f(ne)?(u(),c(r,{key:0,"show-line":!1,title:"保障年期"},{default:s((()=>[p(n,{modelValue:J.value,"onUpdate:modelValue":a[0]||(a[0]=e=>J.value=e),class:"radio-group",prop:{label:"planName",value:"planCode"},options:W.value?.productRelationPlanVOList},null,8,["modelValue","options"])])),_:1})):b("",!0),p(k,{ref_key:"formRef",ref:q,"title-collection":{HOLDER:"投保人",INSURER:"被保人",BENEFICIARY:"收益人"},"need-desensitize":"","form-info":ae.value,"send-sms-code":()=>{},"input-align":"left","factor-object":K.value},{holderName:s((()=>[_])),insurerName:s((()=>[H])),_:1},8,["form-info","send-sms-code","factor-object"]),v("div",z,[p(o,{title:"保费",content:re.value},null,8,["content"]),p(o,{title:"保障期间",content:`${f(le).split(" ")[0]}~${f(ie).split(" ")[0]}`},null,8,["content"])]),v("div",F,[p(N,{shadow:!1,text:"分享用户确认投保",onClick:ue})])])])),_:1})])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-323bbc16"]]))}}}))}();
