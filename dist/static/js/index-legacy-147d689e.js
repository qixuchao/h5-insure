!function(){var e=document.createElement("style");e.innerHTML=".page-internet-product-detail[data-v-7c7e84a8]{padding-bottom:2rem;background:#f1f5fc}.page-internet-product-detail .footer-button[data-v-7c7e84a8]{justify-content:space-between}.page-internet-product-detail .radio-group[data-v-7c7e84a8]{width:100%}.page-internet-product-detail .radio-group .radio-btn[data-v-7c7e84a8]{justify-content:space-between}.page-internet-product-detail .price[data-v-7c7e84a8]{color:#393d46;font-size:.45333rem;font-weight:400}.page-internet-product-detail .price span[data-v-7c7e84a8]{color:var(--van-primary-color);font-weight:700}.page-internet-product-detail .right[data-v-7c7e84a8]{width:3.73333rem;background:var(--van-primary-color);border-color:var(--van-primary-color)}\n",document.head.appendChild(e),System.register(["./vendor-legacy-7a787c2a.js","./utils-legacy-5620ffe6.js","./trial-legacy-c52e4031.js","./index-legacy-6fcb4608.js","./index-legacy-9aa1b079.js","./theme-legacy-83ec434c.js","./order-legacy-45a96606.js","./infoCollection-legacy-e082f9f0.js","./index-legacy-2d3a6bdf.js","./useStorage-legacy-14ea4028.js","./trial-legacy-6d714af9.js","./relativeTime-legacy-1661dccd.js","./useDicData-legacy-4c3dda3b.js","./index-legacy-56e2d23b.js"],(function(e){"use strict";var t,a,n,r,o,i,d,l,c,u,s,p,m,y,f,v,h,g,I,N,L,O,w,C,T,b,k,P,F,V,H,D,E,x,R,S,B,j,A,q,U,_,M,$,K,Y,z,J,W,G,X,Q,Z,ee;return{setters:[function(e){t=e.h,a=e.aa,n=e.P,r=e.r,o=e.N,i=e.A,d=e.$,l=e.l,c=e.j,u=e.k,s=e.m,p=e.s,m=e.t,y=e.p,f=e.B,v=e.L,h=e.C,g=e.n,I=e.x,N=e.F,L=e.G,O=e.D,w=e.a5,C=e.a6,T=e.T,b=e.Y},function(e){k=e.g,P=e.a,F=e.r,V=e.v,H=e.t,D=e.b,E=e.c},function(e){x=e.p,R=e.i,S=e.g,B=e.s,j=e.u,A=e.a},function(e){q=e._,U=e.C,_=e.I,M=e.n,$=e.J,K=e.a4},function(e){Y=e._},function(e){z=e.u},function(e){J=e.a},function(e){W=e.S,G=e.R,X=e.g,Q=e.I},function(e){Z=e._,ee=e.a},function(){},function(){},function(){},function(){},function(){}],execute:function(){const te=e=>(w("data-v-7c7e84a8"),e=e(),C(),e),ae={class:"product-name"},ne=te((()=>f("span",null,"223",-1))),re=te((()=>f("span",null,"222",-1))),oe={class:"footer-button"},ie=L("分享用户确认投保"),de=t({setup(e){const t=z(),L=a(),w=n(),{productCode:C="HTEJBX",tenantId:q="9991000001",orderNo:te,phoneNo:de,agentCode:le="",saleChannelId:ce,paymentMethod:ue,certNo:se,name:pe,pageCode:me,from:ye}=w.query,fe=r(),ve=r(),he=r(),ge=r(),Ie=r({}),Ne=r({}),Le="payBack"===me,Oe=r(!1),we=r(!1),Ce=r(!1),Te=r(0),be=r(!1),ke=r(!1),Pe=r({show:!1,html:""});let Fe="";const Ve=r({agencyId:le,commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_underWrite",pageCode:"infoCollection",templateId:3,iseeBizNo:""},orderCategory:1,saleUserId:ce,tenantId:q,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),He=o({holder:{certNo:se,certType:U.CERT,mobile:de,name:pe,socialFlag:W.HAS},insured:{certNo:se,certType:U.CERT,name:pe,socialFlag:W.HAS,relationToHolder:G.SELF},paymentMethod:ue,renewalDK:"Y",paymentFrequency:X.YEAR,packageProductList:[],mobileSmsCode:""}),De=i((()=>!!he.value?.productRelationPlanVOList?.length)),Ee=i((()=>{let e=[];return e=De.value?he.value?.productRelationPlanVOList.find((e=>e.planCode===ve.value))?.productRiskVoList||[]:he.value?.productRiskVoList||[],e[0]})),xe=async()=>{Ve.value.venderCode=he.value?.productBasicInfoVO.insurerCode;const{code:e,data:t}=await M(((e={},t={},a={})=>{const n={...a},r={tenantId:q,riskList:n.tenantOrderInsuredList[0]?.tenantOrderProductList[0].riskVOList||[],riskPremium:t,productId:e?.productBasicInfoVO.id};return n.tenantOrderInsuredList[0].tenantOrderProductList[0]={premium:"",productCode:e.productBasicInfoVO.productCode,productName:e.productBasicInfoVO.productName,tenantOrderRiskList:H(r)},n})(he.value,{},Ve.value))},Re=async()=>{(async(e,t,a)=>{const n={holder:{personVO:e.tenantOrderHolder},insuredVOList:e.tenantOrderInsuredList.map((e=>({insuredCode:"",personVO:e,productPlanVOList:[{insurerCode:t.productBasicInfoVO.insurerCode,planCode:ve.value||0,riskVOList:F(a)}]})))};await x(n),Ve.value.tenantOrderInsuredList[0].tenantOrderProductList=n.insuredVOList[0]?.productPlanVOList})(Ve.value,he.value,Ee.value.riskDetailVOList),O.confirm({title:"分享",message:`即将向客户【${Ve.value.tenantOrderHolder.name}】发送投保确认信息,请确认是否继续？`}).then((()=>{xe()}))},Se=i((()=>Ne.value?.tenantProductInsureVO?.attachmentVOList.filter((e=>"健康告知"===e.attachmentName))||[])),Be=i((()=>Ne.value?.tenantProductInsureVO?.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName))||[])),je=e=>`${K}/internet/payFail?tenantId=${q}&orderNo=${e}&agentCode=${le}&pageCode=payBack&from=${ye||"normal"}`,Ae=async e=>{const t=D({tenantId:q,saleUserId:le,saleChannelId:ce,detail:Ne.value,insureDetail:he.value,paymentMethod:He.paymentMethod,paymentFrequency:He.paymentFrequency,renewalDK:He.renewalDK,iseeBizNo:Fe,successJumpUrl:"",premium:ge.value,holder:He.holder,insured:He.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:""});try{const e=await B(t),{code:n,data:r}=e;"10000"===n&&(async e=>{T.loading({message:"核保中...",forbidClick:!0});try{const t=await j(e),{code:a}=t;if("10000"===a){T.loading({message:"核保中...",forbidClick:!0});const t=await A({orderNo:e.orderNo,tenantId:q}),{data:a}=t;"10000"===t.code&&(2===a.type?(Pe.value={show:!0,html:a.paymentUrl},b((()=>{const e=document.getElementById("cashierSubmit");e?.addEventListener("submit",(e=>{e.preventDefault()})),e?.submit()}))):window.location.href=a.paymentUrl)}}catch(t){}})({...t,orderNo:r.data,extInfo:{extraInfo:{renewalDK:He.renewalDK,paymentMethod:He.paymentMethod,paymentFrequency:He.paymentFrequency,successJumpUrl:(a=r.data,`${K}/pay?orderNo=${a}&saleUserId=${le}&tenantId=${q}`),failUrl:je(r.data)},iseeBizNo:Fe}})}catch(n){}var a},qe=()=>new Promise(((e,t)=>{fe.value?.validateForm?.().then((async()=>{if(!(()=>{if(He.holder.certNo){const e=E(He.holder.certNo,"year"),t=$(He.holder.certNo);if(e<18)return T("投保人年龄必须大于18岁！"),!1;if(He.insured.certNo&&He.insured.relationToHolder===G.MATE&&t===$(He.insured.certNo))return T("被保人为配偶时，性别不可相同！"),!1}if(He.insured.certNo){const e=E(He.insured.certNo,"day"),t=E(He.insured.certNo,"year");if(He.insured.relationToHolder===G.CHILD&&e<30)return T("被保人为子女时，年龄必须大于等于30天！"),!1;if(He.insured.relationToHolder===G.PARENT&&t>=71)return T("被保人为父母时，年龄必须小于等于70岁！"),!1}if([G.CHILD,G.PARENT].includes(He.insured.relationToHolder)){const e=E(He.holder.certNo,"year"),t=E(He.insured.certNo,"year");if(He.insured.relationToHolder===G.CHILD&&e-t<18)return T("投保人和子女年龄必须相差18岁！"),!1;if(He.insured.relationToHolder===G.PARENT&&t-e<18)return T("投保人和父母年龄必须相差18岁！"),!1}return!0})())return;if(!(fe.value?.isAgreeFile||Oe.value))return Oe.value=!1,Ce.value=!0,void(e=>{Te.value=e,Ce.value=!0})(0);const{calcData:a,riskVOList:n}=k({holder:He.holder,insured:He.insured,tenantId:q,productDetail:Ne.value,insureDetail:he.value,paymentFrequency:He.paymentFrequency,packageRiskIdList:P(He.packageProductList)},!1,V);(!Array.isArray(n)||n.length<1)&&(ge.value=null,t(new Error));const r=await x(a),{code:o,data:i}=r;"10000"===o?(ge.value=i.premium,e({condition:n,data:i})):(ge.value=null,t(new Error))})).catch((()=>{}))})),Ue=async()=>{if(Le)L.push({path:"/internet/guaranteeUpgrade",query:{...w.query,tenantId:q,productCode:"BWYL2022",orderNo:te,agentCode:le}});else try{const{condition:e,data:t}=await qe(),a={},n=(e=[])=>{(e||[]).forEach((e=>{a[e.riskCode]=e,e.riskPremiumDetailVOList?.length&&n(e.riskPremiumDetailVOList)}))};n(t.riskPremiumDetailVOList);const r=H({tenantId:q,riskList:e,riskPremium:a,productId:Ne.value?.id});Ae(r)}catch(e){}},_e=e=>{"allFalse"===e?(we.value=!1,Oe.value=!0,Ue()):O.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()})).catch((()=>{fe.value?.reEditForm(),Oe.value=!1}))},Me=()=>{fe.value?.reEditForm(),Oe.value=!1},$e=()=>{we.value=!1,Me()},Ke=()=>{Ce.value=!1,Me()},Ye=()=>{Ce.value=!1,we.value=!0};d((()=>Ne.value),(()=>{}),{deep:!0}),d([()=>He.insured.certNo,()=>He.insured.socialFlag,()=>He.packageProductList,()=>He.paymentFrequency],l.exports.debounce((()=>{He.insured.certNo&&He.insured.socialFlag&&(()=>{const{holder:{certNo:e,mobile:t,name:a,socialFlag:n},insured:{certNo:r,name:o,socialFlag:i,relationToHolder:d},paymentMethod:l}=He;return!(!_(r)||!i)})()&&(async()=>{const{calcData:e,riskVOList:t}=k({holder:He.holder,insured:He.insured,tenantId:q,productDetail:Ne.value,insureDetail:he.value,paymentFrequency:He.paymentFrequency,packageRiskIdList:P(He.packageProductList)},!1,V);if(!Array.isArray(t)||t.length<1)return ge.value=null,{};const a=await x(e),{code:n,data:r}=a;"10000"===n?ge.value=r.premium:ge.value=null})()}),500),{deep:!0,immediate:!0});const ze=async()=>{const e=await S({orderNo:te,tenantId:q}),{code:t,data:a}=e;if("10000"===t){const{tenantOrderHolder:e,tenantOrderInsuredList:t,extInfo:n}=a;if(!Le)return void Object.assign(He,{holder:{certNo:e.certNo,certType:e.certType,mobile:e.mobile,name:e.name,socialFlag:W.HAS},insured:{certNo:t?.[0].certNo,certType:t[0]?.certType,name:t[0]?.name,socialFlag:t[0]?.extInfo?.hasSocialInsurance,relationToHolder:t[0]?.relationToHolder},paymentMethod:n.extraInfo.paymentMethod,paymentFrequency:n.extraInfo.paymentFrequency,renewalDK:n.extraInfo.renewalDK||"N"});Object.assign(He,{holder:{certNo:e.certNo,certType:e.certType,mobile:e.mobile,name:e.name,socialFlag:W.HAS},insured:{certNo:t?.[0].certNo,certType:t[0]?.certType,name:t[0]?.name,socialFlag:t[0]?.extInfo?.hasSocialInsurance,relationToHolder:t[0]?.relationToHolder},paymentMethod:n.extraInfo.paymentMethod,paymentFrequency:n.extraInfo.paymentFrequency,renewalDK:n.extraInfo.renewalDK||"N"}),ge.value=t[0]?.tenantOrderProductList?.[0]?.premium,a.orderStatus!==J.ACCEPT_POLICY&&a.orderStatus!==J.PAYMENT_SUCCESS||(be.value=!1,ke.value=!0),a.orderStatus===J.PAYING&&(be.value=!0,setTimeout((()=>{ze()}),3e3))}};return c((()=>{(async()=>{const{code:e,data:t}=await R({productCode:C});"10000"===e&&(He.packageProductList=(t.data?.packageProductVOList||[]).map((e=>({...e,value:Q.UN_INSURE,disabled:!1}))),he.value=t,Ie.value=t.productFactor,t?.productRelationPlanVOList?.length&&(ve.value=t.productRelationPlanVOList[0].planCode)),te&&ze()})(),setTimeout((async()=>{Fe=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const n=u("ProRadioButton"),r=u("ProCard"),o=u("van-button"),i=u("ProPageWrap"),d=u("van-config-provider");return s(),p(N,null,[m(d,{"theme-vars":h(t)},{default:y((()=>[m(i,{class:"net-sale-wrap"},{default:y((()=>[f("div",ae,v(he.value?.productBasicInfoVO?.productFullName),1),h(De)?(s(),g(r,{key:0,title:"保障年期"},{default:y((()=>[m(n,{modelValue:ve.value,"onUpdate:modelValue":a[0]||(a[0]=e=>ve.value=e),class:"radio-group",prop:{label:"planName",value:"planCode"},options:he.value?.productRelationPlanVOList},null,8,["modelValue","options"])])),_:1})):I("",!0),m(Y,{ref_key:"formRef",ref:fe,"title-collection":{HOLDER:"本人信息（投保人）",INSURER:"为谁投保（被保人）",BENEFICIARY:"收益人"},"form-info":Ve.value,"send-sms-code":()=>{},"input-align":"left","factor-object":Ie.value},{holderName:y((()=>[ne])),insurerName:y((()=>[re])),_:1},8,["form-info","send-sms-code","factor-object"]),f("div",oe,[m(o,{type:"primary",block:"",onClick:Re},{default:y((()=>[ie])),_:1})])])),_:1})])),_:1},8,["theme-vars"]),m(Z,{show:we.value,"onUpdate:show":a[1]||(a[1]=e=>we.value=e),"content-list":h(Se),"active-index":0,onOnConfirmHealth:_e,onOnCloseHealth:$e},null,8,["show","content-list"]),Ce.value?(s(),g(ee,{key:0,show:Ce.value,"onUpdate:show":a[2]||(a[2]=e=>Ce.value=e),"content-list":h(Be),"active-index":Te.value,text:"我已逐页阅读并确认告知内容","force-read-cound":2,"on-close-file-preview":"",onSubmit:Ye,onOnCloseFilePreview:Ke},null,8,["show","content-list","active-index"])):I("",!0)],64)}}});e("default",q(de,[["__scopeId","data-v-7c7e84a8"]]))}}}))}();
