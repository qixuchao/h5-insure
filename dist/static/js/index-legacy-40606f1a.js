!function(){var e=document.createElement("style");e.innerHTML=".page-internet-product-detail[data-v-3d23cb7a]{padding-bottom:2rem;background:#f1f5fc}.page-internet-product-detail .footer-button[data-v-3d23cb7a]{justify-content:space-between}.page-internet-product-detail .price[data-v-3d23cb7a]{color:#393d46;font-size:.45333rem;font-weight:400;display:flex;align-items:center}.page-internet-product-detail .price span[data-v-3d23cb7a]{color:var(--van-primary-color);font-weight:700}.page-internet-product-detail .price .premium-loading[data-v-3d23cb7a]{display:inline-block;line-height:.69333rem;margin-left:.4rem}.page-internet-product-detail .price .premium-loading[data-v-3d23cb7a] .van-loading__spinner{width:.45333rem!important;height:.45333rem!important}.page-internet-product-detail .right[data-v-3d23cb7a]{width:3.73333rem;background:var(--van-primary-color);border-color:var(--van-primary-color)}\n",document.head.appendChild(e),System.register(["./vendor-legacy-5ea3e76d.js","./debounce-legacy-fb4ff435.js","./index-legacy-3973978c.js","./order-legacy-90d63efc.js","./infoCollection-legacy-05ff1e35.js","./trial-legacy-0159caec.js","./product-legacy-dae5e326.js","./utils-legacy-3f4cba1a.js","./utils-legacy-5180678e.js","./theme-legacy-a8152f06.js","./auth-legacy-63074ec8.js","./index-legacy-537386d3.js","./trial-legacy-0fcbf4ea.js","./check-detail-legacy-094128da.js","./index-legacy-bccb054c.js","./bankCard-legacy-c06b3994.js","./phoneVerify-legacy-7c07d45d.js","./loading-legacy-62d8052a.js","./close-legacy-44817505.js"],(function(e){"use strict";var a,t,n,r,o,i,l,d,c,u,s,m,p,y,v,f,h,g,I,N,w,b,C,T,D,O,F,k,H,S,P,j,x,L,V,$,E,q,A,M,U,B,_,R,K,Y,z,J,G,W,Q,X,Z,ee,ae,te,ne,re,oe,ie,le,de,ce,ue,se;return{setters:[function(e){a=e.k,t=e.aa,n=e.u,r=e.r,o=e.O,i=e.b,l=e.$,d=e.o,c=e.p,u=e.ag,s=e.s,m=e.B,p=e.S,y=e.v,v=e.J,f=e.y,h=e.C,g=e.t,I=e.E,N=e.M,w=e.G,b=e.H,C=e.D,T=e.T,D=e.Y},function(e){O=e.d},function(e){F=e._,k=e.C,H=e.a1,S=e.I,P=e.J,j=e.a4},function(e){x=e.a},function(e){L=e.S,V=e.R,$=e.g},function(e){E=e.i,q=e.s,A=e.p,M=e.g,U=e.u,B=e.a},function(e){_=e.p},function(e){R=e.t,K=e.g,Y=e.a,z=e.s,J=e.v,G=e.b},function(e){W=e.f,Q=e.a},function(e){X=e.t},function(e){Z=e.d,ee=e.B,ae=e.D,te=e.G,ne=e.S,re=e.H,oe=e.P,ie=e.U,le=e._,de=e.W,ce=e.p,ue=e.a},function(e){se=e._},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const me={key:0},pe={class:"page-internet-product-detail"},ye={class:"info"},ve={class:"footer-button"},fe={class:"price"},he=w(" 总保费"),ge={key:0};e("default",F(a({setup(e){const a=t(),F=n(),{productCode:Ie="BWYL2021",tenantId:Ne,orderNo:we,phoneNo:be,agentCode:Ce="",saleChannelId:Te,paymentMethod:De,certNo:Oe,name:Fe,pageCode:ke,upgradeCode:He,from:Se}=F.query,Pe=r(),je=r(),xe=r(),Le=r(),Ve="payBack"===ke,$e=r(!1),Ee=r(!1),qe=r(!1),Ae=r(0),Me=r(!1),Ue=r(!1),Be=r({show:!1,html:""}),_e=r(!1),Re=r();let Ke="";const Ye=o({holder:{certNo:Oe,certType:k.CERT,mobile:be,name:Fe,socialFlag:L.HAS},insured:{certNo:Oe,certType:k.CERT,name:Fe,socialFlag:L.HAS,relationToHolder:V.SELF},paymentMethod:De,renewalDK:"Y",paymentFrequency:$.MONTH}),ze=r(Z),Je=r(Z),Ge=o({showInsure:!Ve,canInsure:!1,canUpgrade:!1}),We=i((()=>je.value?.tenantProductInsureVO?.attachmentVOList.filter((e=>"健康告知"===e.attachmentName))||[])),Qe=i((()=>[...je.value?.tenantProductInsureVO?.titleAndDescVOS||[],{desc:`出生${W(je.value?.tenantProductInsureVO?.holderAgeLimit)}`,title:"投保年龄",noDetail:!0},{desc:Q(je.value?.tenantProductInsureVO?.insurancePeriodValues),title:"保障期限",noDetail:!0},{desc:`${je.value?.tenantProductInsureVO?.waitPeriod}天，上一张保单期满后指定期限内重新投保、因遭受意外伤害导致的医疗无等待期`,title:"等待期",noDetail:!0}])),Xe=i((()=>je.value?.tenantProductInsureVO?.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName))||[])),Ze=()=>{if(Ye.holder.certNo){const e=P(Ye.holder.certNo);if(J(Ye.holder.certNo,18,"year"))return T("投保人年龄必须大于18岁！"),!1;if(Ye.insured.certNo&&Ye.insured.relationToHolder===V.MATE){if(e===P(Ye.insured.certNo))return T("被保人为配偶时，性别不可相同！"),!1}}if(Ye.insured.certNo){if(Ye.insured.relationToHolder===V.CHILD&&J(Ye.insured.certNo,30,"day"))return T("被保人为子女时，年龄必须大于等于30天！"),!1;if(Ye.insured.relationToHolder===V.PARENT&&!J(Ye.insured.certNo,71,"year"))return T("被保人为父母时，年龄必须小于等于70岁！"),!1}if([V.CHILD,V.PARENT].includes(Ye.insured.relationToHolder)){const e=G(Ye.holder.certNo,"year"),a=G(Ye.insured.certNo,"year");if(Ye.insured.relationToHolder===V.CHILD&&e-a<18)return T("投保人和子女年龄必须相差18岁！"),!1;if(Ye.insured.relationToHolder===V.PARENT&&a-e<18)return T("投保人和父母年龄必须相差18岁！"),!1}return!0},ea=()=>{a.push({path:"/internet/guaranteeUpgrade",query:{...F.query,tenantId:Ne,productCode:"BWYL2022",orderNo:we,agentCode:Ce}})},aa=()=>{Ue.value=!1,a.replace(`/pay?orderNo=${we}&saleUserId=${Ce}&tenantId=${Ne}`)},ta=()=>{Je.value=ze.value},na=()=>{Je.value={...Je.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},ra=e=>{const a=JSON.parse(xe.value?.productBasicInfoVO?.extInfo);let t="";1===a.endorsementFlag&&(t=`&upgradeCode=${a.endorsementCode}`);return`${j}/internet/productDetail?tenantId=${Ne}&productCode=${Ie}&orderNo=${e}&agentCode=${Ce}&pageCode=payBack${t}&from=${Se||"normal"}`},oa=async e=>{const a=K({tenantId:Ne,saleUserId:Ce,saleChannelId:Te,detail:je.value,insureDetail:xe.value,paymentMethod:Ye.paymentMethod,renewalDK:Ye.renewalDK,iseeBizNo:Ke,successJumpUrl:"",premium:Le.value,holder:Ye.holder,insured:Ye.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:"",orderNo:we,originOrderIds:Re.value});try{const e=await q(a),{code:n,data:r}=e;"10000"===n&&(async e=>{T.loading({message:"核保中...",forbidClick:!0,duration:0});try{const a=await U(e),{code:t}=a;if("10000"===t){const a=await B({orderNo:e.orderNo,tenantId:Ne}),{data:t}=a;"10000"===a.code&&(2===t.type?(Be.value={show:!0,html:t.paymentUrl},D((()=>{const e=document.getElementById("cashierSubmit");e?.addEventListener("submit",(e=>{e.preventDefault()})),e?.submit()}))):window.location.href=t.paymentUrl)}Ge.canInsure=!0}catch(a){Ge.canInsure=!0}finally{T.clear()}})({...a,orderNo:r.data,extInfo:{extraInfo:{renewalDK:Ye.renewalDK,paymentMethod:Ye.paymentMethod,paymentFrequency:Ye.paymentFrequency,successJumpUrl:ra(r.data),failUrl:(t=r.data,`${j}/internet/payFail?tenantId=${Ne}&orderNo=${t}&agentCode=${Ce}&pageCode=payBack&from=${Se||"normal"}`)},iseeBizNo:Ke}})}catch(n){Ge.canInsure=!0}var t},ia=async()=>{if(Ve)ea();else{Ge.canInsure=!1;try{const{condition:e,data:a}=await new Promise(((e,a)=>{Pe.value?.validateForm?.().then((async()=>{if(!Ze())return void a(new Error);const{calcData:t,riskVOList:n}=Y({holder:Ye.holder,insured:Ye.insured,tenantId:Ne,paymentFrequency:Ye.paymentFrequency,productDetail:je.value,insureDetail:xe.value},!0),r=await A(t),{code:o,data:i}=r;"10000"===o?(Le.value=i.premium,e({condition:n,data:i})):a(new Error)})).catch((e=>{Ge.canInsure=!0,z(e)}))})),t={},n=(e=[])=>{(e||[]).forEach((e=>{t[e.riskCode]=e,e.riskPremiumDetailVOList?.length&&n(e.riskPremiumDetailVOList)}))};n(a.riskPremiumDetailVOList);const r=R({tenantId:Ne,riskList:e,riskPremium:t,productId:je.value?.id});oa(r)}catch(e){Ge.canInsure=!0}}},la=e=>{"allFalse"===e?(Ee.value=!1,ia(),Ge.canInsure=!0):C.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()}))},da=()=>{$e.value=!0,qe.value=!1,Ee.value=!0};l([()=>Ye.insured.certNo,()=>Ye.insured.socialFlag],O((()=>{Ye.insured.certNo&&Ye.insured.socialFlag&&"payBack"!==ke&&(()=>{const{holder:{certNo:e,mobile:a,name:t,socialFlag:n},insured:{certNo:r,name:o,socialFlag:i,relationToHolder:l},paymentMethod:d}=Ye;return S(r)&&!!i})()&&(async()=>{if(Ge.canInsure=!0,!Ze())return{};const{calcData:e,riskVOList:a}=Y({holder:Ye.holder,insured:Ye.insured,tenantId:Ne,paymentFrequency:Ye.paymentFrequency,productDetail:je.value,insureDetail:xe.value},!0);if(!Array.isArray(a)||a.length<1)return T("被保人年龄需在30天(含) - 70岁(含)之间！"),Le.value=null,{};_e.value=!0;const t=await A(e);_e.value=!1;const{code:n,data:r}=t;"10000"===n&&(Ye.insured.certNo?Le.value=r.premium:Le.value=null)})()}),500),{deep:!0,immediate:!0}),l((()=>Ye.insured.certNo),(()=>{Ye.insured.certNo||(Le.value=null)}));const ca=async()=>{const e=await M({orderNo:we,tenantId:Ne}),{code:a,data:t}=e;if("10000"===a){const{id:e,tenantOrderHolder:a,tenantOrderInsuredList:n,extInfo:r}=t;if(!Ve)return Re.value={id:e,holderId:a?.id,insuredId:n?.[0].id},Object.assign(Ye,{holder:{certNo:a.certNo,certType:a.certType,mobile:a.mobile,name:a.name,socialFlag:L.HAS},insured:{certNo:n?.[0].certNo,certType:n[0]?.certType,name:n[0]?.name,socialFlag:n[0]?.extInfo?.hasSocialInsurance,relationToHolder:n[0]?.relationToHolder},paymentMethod:r.extraInfo.paymentMethod,paymentFrequency:r.extraInfo.paymentFrequency,renewalDK:"Y"}),void(Ge.canInsure=!0);Object.assign(Ye,{holder:{certNo:a.certNo,certType:a.certType,mobile:a.mobile,name:a.name,socialFlag:L.HAS},insured:{certNo:n?.[0].certNo,certType:n[0]?.certType,name:n[0]?.name,socialFlag:n[0]?.extInfo?.hasSocialInsurance,relationToHolder:n[0]?.relationToHolder},paymentMethod:r.extraInfo.paymentMethod,paymentFrequency:r.extraInfo.paymentFrequency,renewalDK:r.extraInfo.renewalDK||"N"}),Le.value=n[0]?.tenantOrderProductList?.[0]?.premium,t.orderStatus!==x.ACCEPT_POLICY&&t.orderStatus!==x.PAYMENT_SUCCESS||(Ge.canUpgrade=!0,Me.value=!1,Ue.value=!0),t.orderStatus===x.PAYING&&(Me.value=!0,setTimeout((()=>{ca()}),3e3))}};return d((()=>{Ve?(Je.value=ce,ze.value=ce):we?(Je.value={...ue,paymentFrequencyDisable:!0},ze.value=ue,Ge.canInsure=!0):be||we||(Je.value={...ue,paymentFrequencyDisable:!0},ze.value=ue,Ge.canInsure=!0),(async()=>{const e=await _({productCode:Ie,withInsureInfo:!0,tenantId:Ne});"10000"===e.code&&(je.value=e.data,document.title=e.data?.productFullName||"");const a=await E({productCode:Ie});"10000"===a.code&&(xe.value=a.data),we&&ca()})(),setTimeout((async()=>{Ke=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=c("van-loading"),n=c("van-button"),r=c("van-config-provider"),o=u("dompurify-html");return s(),m(b,null,[p(r,{"theme-vars":I(X)},{default:y((()=>[Be.value.show?v((s(),m("div",me,null,512)),[[o,Be.value.html]]):f("",!0),h("div",pe,[h("div",ye,[p(ee,{url:je.value?.tenantProductInsureVO?.banner[0]},null,8,["url"]),p(ae,{"product-name":je.value?.productFullName,"product-desc":je.value?.showConfigVO?.desc},null,8,["product-name","product-desc"])]),je.value?.tenantProductInsureVO?.titleAndDescVOS?(s(),g(te,{key:0,"guarantee-list":I(Qe)},null,8,["guarantee-list"])):f("",!0),p(ne,{detail:je.value},{form:y((()=>[p(re,{ref_key:"formRef",ref:Pe,disable:!I(Ge).showInsure,"form-auth":Je.value,"form-info":I(Ye),premium:Le.value,"product-detail":je.value,payments:[1],"payment-method":[0],onOnReset:ta,onOnUpdate:na},null,8,["disable","form-auth","form-info","premium","product-detail"])])),_:1},8,["detail"]),h("div",ve,[h("div",fe,[he,_e.value?(s(),g(t,{key:1,class:"premium-loading",type:"spinner"})):(s(),m("span",ge,N(Le.value?"￥":"")+N(I(H)(Le.value))+N(Le.value?"元/月":""),1))]),p(n,{type:"primary",class:"right",disabled:!(I(Ge).canInsure||I(Ge).canUpgrade),onClick:ia},{default:y((()=>[w(N(I(Ge).showInsure?"立即投保":"升级保障"),1)])),_:1},8,["disabled"])])]),I(we)?f("",!0):(s(),g(oe,{key:1,"product-detail":je.value},null,8,["product-detail"])),p(ie,{"order-no":I(we),"tenant-id":I(Ne),"upgrade-code":I(He),"is-show":Ue.value,onOnConfirm:ea,onOnClose:aa},null,8,["order-no","tenant-id","upgrade-code","is-show"])])),_:1},8,["theme-vars"]),p(le,{show:Ee.value,"onUpdate:show":a[0]||(a[0]=e=>Ee.value=e),"content-list":I(We),"active-index":0,onOnConfirmHealth:la},null,8,["show","content-list"]),qe.value?(s(),g(se,{key:0,show:qe.value,"onUpdate:show":a[1]||(a[1]=e=>qe.value=e),"content-list":I(Xe),"active-index":Ae.value,text:"我已逐页阅读并确认告知内容",onSubmit:da},null,8,["show","content-list","active-index"])):f("",!0),p(de,{"is-show":Me.value},null,8,["is-show"])],64)}}}),[["__scopeId","data-v-3d23cb7a"]]))}}}))}();
