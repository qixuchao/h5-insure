!function(){var e=document.createElement("style");e.innerHTML=".page-internet-product-detail[data-v-436f670b]{padding-bottom:2rem;background:#f1f5fc}.page-internet-product-detail .footer-button[data-v-436f670b]{justify-content:space-between}.page-internet-product-detail .radio-group[data-v-436f670b]{width:100%}.page-internet-product-detail .radio-group .radio-btn[data-v-436f670b]{justify-content:space-between}.page-internet-product-detail .price[data-v-436f670b]{color:#393d46;font-size:.45333rem;font-weight:400}.page-internet-product-detail .price span[data-v-436f670b]{color:var(--van-primary-color);font-weight:700}.page-internet-product-detail .right[data-v-436f670b]{width:3.73333rem;background:var(--van-primary-color);border-color:var(--van-primary-color)}\n",document.head.appendChild(e),System.register(["./vendor-legacy-c308286a.js","./debounce-legacy-a1757db0.js","./utils-legacy-39f84080.js","./trial-legacy-52911168.js","./index-legacy-462719c7.js","./index-legacy-ed15c42b.js","./theme-legacy-83ec434c.js","./order-legacy-aff38030.js","./infoCollection-legacy-d8a6c71f.js","./index-legacy-e50b277e.js","./useStorage-legacy-d92017d6.js","./trial-legacy-75ae0640.js","./relativeTime-legacy-2afc3e6e.js","./useDicData-legacy-b413da7d.js","./index-legacy-f175055d.js"],(function(e){"use strict";var t,a,n,r,o,i,d,l,c,u,s,p,m,f,y,v,g,h,I,N,L,O,w,C,b,T,k,P,F,V,H,D,E,x,R,S,B,j,A,q,U,_,M,$,K,Y,z,J,W,G,X,Q,Z,ee;return{setters:[function(e){t=e.i,a=e.aa,n=e.P,r=e.r,o=e.N,i=e.A,d=e.$,l=e.k,c=e.l,u=e.m,s=e.s,p=e.t,m=e.p,f=e.B,y=e.L,v=e.C,g=e.n,h=e.x,I=e.F,N=e.G,L=e.D,O=e.a5,w=e.a6,C=e.T,b=e.Y},function(e){T=e.d},function(e){k=e.r,P=e.g,F=e.a,V=e.t,H=e.b,D=e.v,E=e.c},function(e){x=e.i,R=e.p,S=e.g,B=e.s,j=e.u,A=e.a},function(e){q=e._,U=e.C,_=e.n,M=e.I,$=e.J,K=e.a4},function(e){Y=e._},function(e){z=e.u},function(e){J=e.a},function(e){W=e.S,G=e.R,X=e.g,Q=e.I},function(e){Z=e._,ee=e.a},function(){},function(){},function(){},function(){},function(){}],execute:function(){const te=e=>(O("data-v-436f670b"),e=e(),w(),e),ae={class:"product-name"},ne=te((()=>f("span",null,"223",-1))),re=te((()=>f("span",null,"222",-1))),oe={class:"footer-button"},ie=N("分享用户确认投保"),de=t({setup(e){const t=z(),N=a(),O=n(),{productCode:w="HTEJBX",tenantId:q="9991000001",orderNo:te,phoneNo:de,agentCode:le="",saleChannelId:ce,paymentMethod:ue,certNo:se,name:pe,pageCode:me,from:fe}=O.query,ye=r(),ve=r(),ge=r(),he=r(),Ie=r({}),Ne=r({}),Le="payBack"===me,Oe=r(!1),we=r(!1),Ce=r(!1),be=r(0),Te=r(!1),ke=r(!1),Pe=r({show:!1,html:""});let Fe="";const Ve=r({agencyId:le,commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_underWrite",pageCode:"infoCollection",templateId:3,iseeBizNo:""},orderCategory:1,saleUserId:ce,tenantId:q,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),He=o({holder:{certNo:se,certType:U.CERT,mobile:de,name:pe,socialFlag:W.HAS},insured:{certNo:se,certType:U.CERT,name:pe,socialFlag:W.HAS,relationToHolder:G.SELF},paymentMethod:ue,renewalDK:"Y",paymentFrequency:X.YEAR,packageProductList:[],mobileSmsCode:""}),De=i((()=>!!ge.value?.productRelationPlanVOList?.length)),Ee=i((()=>{let e=[];return e=De.value?ge.value?.productRelationPlanVOList.find((e=>e.planCode===ve.value))?.productRiskVoList||[]:ge.value?.productRiskVoList||[],e[0]})),xe=async()=>{Ve.value.venderCode=ge.value?.productBasicInfoVO.insurerCode;const{code:e,data:t}=await _(((e={},t={},a={})=>{const n={...a},r={tenantId:q,riskList:n.tenantOrderInsuredList[0]?.tenantOrderProductList[0].riskVOList||[],riskPremium:t,productId:e?.productBasicInfoVO.id};return n.tenantOrderInsuredList[0].tenantOrderProductList[0]={premium:"",productCode:e.productBasicInfoVO.productCode,productName:e.productBasicInfoVO.productName,tenantOrderRiskList:V(r)},n})(ge.value,{},Ve.value))},Re=async()=>{(async(e,t,a)=>{const n={holder:{personVO:e.tenantOrderHolder},insuredVOList:e.tenantOrderInsuredList.map((e=>({insuredCode:"",personVO:e,productPlanVOList:[{insurerCode:t.productBasicInfoVO.insurerCode,planCode:ve.value||0,riskVOList:k(a)}]})))};await R(n),Ve.value.tenantOrderInsuredList[0].tenantOrderProductList=n.insuredVOList[0]?.productPlanVOList})(Ve.value,ge.value,Ee.value.riskDetailVOList),L.confirm({title:"分享",message:`即将向客户【${Ve.value.tenantOrderHolder.name}】发送投保确认信息,请确认是否继续？`}).then((()=>{xe()}))},Se=i((()=>Ne.value?.tenantProductInsureVO?.attachmentVOList.filter((e=>"健康告知"===e.attachmentName))||[])),Be=i((()=>Ne.value?.tenantProductInsureVO?.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName))||[])),je=e=>`${K}/internet/payFail?tenantId=${q}&orderNo=${e}&agentCode=${le}&pageCode=payBack&from=${fe||"normal"}`,Ae=async e=>{const t=H({tenantId:q,saleUserId:le,saleChannelId:ce,detail:Ne.value,insureDetail:ge.value,paymentMethod:He.paymentMethod,paymentFrequency:He.paymentFrequency,renewalDK:He.renewalDK,iseeBizNo:Fe,successJumpUrl:"",premium:he.value,holder:He.holder,insured:He.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:""});try{const e=await B(t),{code:n,data:r}=e;"10000"===n&&(async e=>{C.loading({message:"核保中...",forbidClick:!0});try{const t=await j(e),{code:a}=t;if("10000"===a){C.loading({message:"核保中...",forbidClick:!0});const t=await A({orderNo:e.orderNo,tenantId:q}),{data:a}=t;"10000"===t.code&&(2===a.type?(Pe.value={show:!0,html:a.paymentUrl},b((()=>{const e=document.getElementById("cashierSubmit");e?.addEventListener("submit",(e=>{e.preventDefault()})),e?.submit()}))):window.location.href=a.paymentUrl)}}catch(t){}})({...t,orderNo:r.data,extInfo:{extraInfo:{renewalDK:He.renewalDK,paymentMethod:He.paymentMethod,paymentFrequency:He.paymentFrequency,successJumpUrl:(a=r.data,`${K}/pay?orderNo=${a}&saleUserId=${le}&tenantId=${q}`),failUrl:je(r.data)},iseeBizNo:Fe}})}catch(n){}var a},qe=()=>new Promise(((e,t)=>{ye.value?.validateForm?.().then((async()=>{if(!(()=>{if(He.holder.certNo){const e=E(He.holder.certNo,"year"),t=$(He.holder.certNo);if(e<18)return C("投保人年龄必须大于18岁！"),!1;if(He.insured.certNo&&He.insured.relationToHolder===G.MATE&&t===$(He.insured.certNo))return C("被保人为配偶时，性别不可相同！"),!1}if(He.insured.certNo){const e=E(He.insured.certNo,"day"),t=E(He.insured.certNo,"year");if(He.insured.relationToHolder===G.CHILD&&e<30)return C("被保人为子女时，年龄必须大于等于30天！"),!1;if(He.insured.relationToHolder===G.PARENT&&t>=71)return C("被保人为父母时，年龄必须小于等于70岁！"),!1}if([G.CHILD,G.PARENT].includes(He.insured.relationToHolder)){const e=E(He.holder.certNo,"year"),t=E(He.insured.certNo,"year");if(He.insured.relationToHolder===G.CHILD&&e-t<18)return C("投保人和子女年龄必须相差18岁！"),!1;if(He.insured.relationToHolder===G.PARENT&&t-e<18)return C("投保人和父母年龄必须相差18岁！"),!1}return!0})())return;if(!(ye.value?.isAgreeFile||Oe.value))return Oe.value=!1,Ce.value=!0,void(e=>{be.value=e,Ce.value=!0})(0);const{calcData:a,riskVOList:n}=P({holder:He.holder,insured:He.insured,tenantId:q,productDetail:Ne.value,insureDetail:ge.value,paymentFrequency:He.paymentFrequency,packageRiskIdList:F(He.packageProductList)},!1,D);(!Array.isArray(n)||n.length<1)&&(he.value=null,t(new Error));const r=await R(a),{code:o,data:i}=r;"10000"===o?(he.value=i.premium,e({condition:n,data:i})):(he.value=null,t(new Error))})).catch((()=>{}))})),Ue=async()=>{if(Le)N.push({path:"/internet/guaranteeUpgrade",query:{...O.query,tenantId:q,productCode:"BWYL2022",orderNo:te,agentCode:le}});else try{const{condition:e,data:t}=await qe(),a={},n=(e=[])=>{(e||[]).forEach((e=>{a[e.riskCode]=e,e.riskPremiumDetailVOList?.length&&n(e.riskPremiumDetailVOList)}))};n(t.riskPremiumDetailVOList);const r=V({tenantId:q,riskList:e,riskPremium:a,productId:Ne.value?.id});Ae(r)}catch(e){}},_e=e=>{"allFalse"===e?(we.value=!1,Oe.value=!0,Ue()):L.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()})).catch((()=>{ye.value?.reEditForm(),Oe.value=!1}))},Me=()=>{ye.value?.reEditForm(),Oe.value=!1},$e=()=>{we.value=!1,Me()},Ke=()=>{Ce.value=!1,Me()},Ye=()=>{Ce.value=!1,we.value=!0};d((()=>Ne.value),(()=>{}),{deep:!0}),d([()=>He.insured.certNo,()=>He.insured.socialFlag,()=>He.packageProductList,()=>He.paymentFrequency],T((()=>{He.insured.certNo&&He.insured.socialFlag&&(()=>{const{holder:{certNo:e,mobile:t,name:a,socialFlag:n},insured:{certNo:r,name:o,socialFlag:i,relationToHolder:d},paymentMethod:l}=He;return!(!M(r)||!i)})()&&(async()=>{const{calcData:e,riskVOList:t}=P({holder:He.holder,insured:He.insured,tenantId:q,productDetail:Ne.value,insureDetail:ge.value,paymentFrequency:He.paymentFrequency,packageRiskIdList:F(He.packageProductList)},!1,D);if(!Array.isArray(t)||t.length<1)return he.value=null,{};const a=await R(e),{code:n,data:r}=a;"10000"===n?he.value=r.premium:he.value=null})()}),500),{deep:!0,immediate:!0});const ze=async()=>{const e=await S({orderNo:te,tenantId:q}),{code:t,data:a}=e;if("10000"===t){const{tenantOrderHolder:e,tenantOrderInsuredList:t,extInfo:n}=a;if(!Le)return void Object.assign(He,{holder:{certNo:e.certNo,certType:e.certType,mobile:e.mobile,name:e.name,socialFlag:W.HAS},insured:{certNo:t?.[0].certNo,certType:t[0]?.certType,name:t[0]?.name,socialFlag:t[0]?.extInfo?.hasSocialInsurance,relationToHolder:t[0]?.relationToHolder},paymentMethod:n.extraInfo.paymentMethod,paymentFrequency:n.extraInfo.paymentFrequency,renewalDK:n.extraInfo.renewalDK||"N"});Object.assign(He,{holder:{certNo:e.certNo,certType:e.certType,mobile:e.mobile,name:e.name,socialFlag:W.HAS},insured:{certNo:t?.[0].certNo,certType:t[0]?.certType,name:t[0]?.name,socialFlag:t[0]?.extInfo?.hasSocialInsurance,relationToHolder:t[0]?.relationToHolder},paymentMethod:n.extraInfo.paymentMethod,paymentFrequency:n.extraInfo.paymentFrequency,renewalDK:n.extraInfo.renewalDK||"N"}),he.value=t[0]?.tenantOrderProductList?.[0]?.premium,a.orderStatus!==J.ACCEPT_POLICY&&a.orderStatus!==J.PAYMENT_SUCCESS||(Te.value=!1,ke.value=!0),a.orderStatus===J.PAYING&&(Te.value=!0,setTimeout((()=>{ze()}),3e3))}};return l((()=>{(async()=>{const{code:e,data:t}=await x({productCode:w});"10000"===e&&(He.packageProductList=(t.data?.packageProductVOList||[]).map((e=>({...e,value:Q.UN_INSURE,disabled:!1}))),ge.value=t,Ie.value=t.productFactor,t?.productRelationPlanVOList?.length&&(ve.value=t.productRelationPlanVOList[0].planCode)),te&&ze()})(),setTimeout((async()=>{Fe=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const n=c("ProRadioButton"),r=c("ProCard"),o=c("van-button"),i=c("ProPageWrap"),d=c("van-config-provider");return u(),s(I,null,[p(d,{"theme-vars":v(t)},{default:m((()=>[p(i,{class:"net-sale-wrap"},{default:m((()=>[f("div",ae,y(ge.value?.productBasicInfoVO?.productFullName),1),v(De)?(u(),g(r,{key:0,title:"保障年期"},{default:m((()=>[p(n,{modelValue:ve.value,"onUpdate:modelValue":a[0]||(a[0]=e=>ve.value=e),class:"radio-group",prop:{label:"planName",value:"planCode"},options:ge.value?.productRelationPlanVOList},null,8,["modelValue","options"])])),_:1})):h("",!0),p(Y,{ref_key:"formRef",ref:ye,"title-collection":{HOLDER:"本人信息（投保人）",INSURER:"为谁投保（被保人）",BENEFICIARY:"收益人"},"form-info":Ve.value,"send-sms-code":()=>{},"input-align":"left","factor-object":Ie.value},{holderName:m((()=>[ne])),insurerName:m((()=>[re])),_:1},8,["form-info","send-sms-code","factor-object"]),f("div",oe,[p(o,{type:"primary",block:"",onClick:Re},{default:m((()=>[ie])),_:1})])])),_:1})])),_:1},8,["theme-vars"]),p(Z,{show:we.value,"onUpdate:show":a[1]||(a[1]=e=>we.value=e),"content-list":v(Se),"active-index":0,onOnConfirmHealth:_e,onOnCloseHealth:$e},null,8,["show","content-list"]),Ce.value?(u(),g(ee,{key:0,show:Ce.value,"onUpdate:show":a[2]||(a[2]=e=>Ce.value=e),"content-list":v(Be),"active-index":be.value,text:"我已逐页阅读并确认告知内容","force-read-cound":2,"on-close-file-preview":"",onSubmit:Ye,onOnCloseFilePreview:Ke},null,8,["show","content-list","active-index"])):h("",!0)],64)}}});e("default",q(de,[["__scopeId","data-v-436f670b"]]))}}}))}();
