!function(){var e=document.createElement("style");e.innerHTML=".page-internet-product-detail[data-v-3d23cb7a]{padding-bottom:2rem;background:#f1f5fc}.page-internet-product-detail .footer-button[data-v-3d23cb7a]{justify-content:space-between}.page-internet-product-detail .price[data-v-3d23cb7a]{color:#393d46;font-size:.45333rem;font-weight:400;display:flex;align-items:center}.page-internet-product-detail .price span[data-v-3d23cb7a]{color:var(--van-primary-color);font-weight:700}.page-internet-product-detail .price .premium-loading[data-v-3d23cb7a]{display:inline-block;line-height:.69333rem;margin-left:.4rem}.page-internet-product-detail .price .premium-loading[data-v-3d23cb7a] .van-loading__spinner{width:.45333rem!important;height:.45333rem!important}.page-internet-product-detail .right[data-v-3d23cb7a]{width:3.73333rem;background:var(--van-primary-color);border-color:var(--van-primary-color)}\n",document.head.appendChild(e),System.register(["./vendor-legacy-e0411a0a.js","./debounce-legacy-df61c3a1.js","./index-legacy-b4dbce9d.js","./order-legacy-958e1ae4.js","./infoCollection-legacy-0a091429.js","./trial-legacy-04a5fd8c.js","./product-legacy-39f9544e.js","./utils-legacy-7000bae2.js","./utils-legacy-5180678e.js","./theme-legacy-a8152f06.js","./auth-legacy-37788444.js","./index-legacy-9792236a.js","./trial-legacy-f2e6b87f.js","./index-legacy-b2f28051.js","./bankCard-legacy-b878d301.js","./phoneVerify-legacy-2e44e082.js","./loading-legacy-62d8052a.js"],(function(e){"use strict";var a,t,n,r,o,i,l,d,u,c,s,m,p,y,v,f,h,g,I,N,w,b,C,T,D,O,F,k,H,S,P,x,L,V,j,$,E,q,A,M,U,B,_,R,K,Y,z,J,G,W,Q,X,Z,ee,ae,te,ne,re,oe,ie,le,de,ue,ce,se;return{setters:[function(e){a=e.k,t=e.aa,n=e.u,r=e.r,o=e.O,i=e.b,l=e.$,d=e.o,u=e.p,c=e.ag,s=e.s,m=e.B,p=e.S,y=e.v,v=e.J,f=e.y,h=e.C,g=e.t,I=e.E,N=e.M,w=e.G,b=e.H,C=e.D,T=e.T,D=e.Y},function(e){O=e.d},function(e){F=e._,k=e.C,H=e.a1,S=e.I,P=e.J,x=e.a4},function(e){L=e.a},function(e){V=e.S,j=e.R,$=e.g},function(e){E=e.i,q=e.s,A=e.p,M=e.g,U=e.u,B=e.a},function(e){_=e.p},function(e){R=e.t,K=e.g,Y=e.a,z=e.s,J=e.v,G=e.b},function(e){W=e.f,Q=e.a},function(e){X=e.t},function(e){Z=e.d,ee=e.B,ae=e.D,te=e.G,ne=e.S,re=e.H,oe=e.P,ie=e.U,le=e._,de=e.W,ue=e.p,ce=e.a},function(e){se=e._},function(){},function(){},function(){},function(){},function(){}],execute:function(){const me={key:0},pe={class:"page-internet-product-detail"},ye={class:"info"},ve={class:"footer-button"},fe={class:"price"},he=w(" 总保费"),ge={key:0};e("default",F(a({setup(e){const a=t(),F=n(),{productCode:Ie="BWYL2021",tenantId:Ne,orderNo:we,phoneNo:be,agentCode:Ce="",saleChannelId:Te,paymentMethod:De,certNo:Oe,name:Fe,pageCode:ke,upgradeCode:He,from:Se}=F.query,Pe=r(),xe=r(),Le=r(),Ve=r(),je="payBack"===ke,$e=r(!1),Ee=r(!1),qe=r(!1),Ae=r(0),Me=r(!1),Ue=r(!1),Be=r({show:!1,html:""}),_e=r(!1),Re=r();let Ke="";const Ye=o({holder:{certNo:Oe,certType:k.CERT,mobile:be,name:Fe,socialFlag:V.HAS},insured:{certNo:Oe,certType:k.CERT,name:Fe,socialFlag:V.HAS,relationToHolder:j.SELF},paymentMethod:De,renewalDK:"Y",paymentFrequency:$.MONTH}),ze=r(Z),Je=r(Z),Ge=o({showInsure:!je,canInsure:!1,canUpgrade:!1}),We=i((()=>xe.value?.tenantProductInsureVO?.attachmentVOList.filter((e=>"健康告知"===e.attachmentName))||[])),Qe=i((()=>[...xe.value?.tenantProductInsureVO?.titleAndDescVOS||[],{desc:`出生${W(xe.value?.tenantProductInsureVO?.holderAgeLimit)}`,title:"投保年龄",noDetail:!0},{desc:Q(xe.value?.tenantProductInsureVO?.insurancePeriodValues),title:"保障期限",noDetail:!0},{desc:`${xe.value?.tenantProductInsureVO?.waitPeriod}天，上一张保单期满后指定期限内重新投保、因遭受意外伤害导致的医疗无等待期`,title:"等待期",noDetail:!0}])),Xe=i((()=>xe.value?.tenantProductInsureVO?.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName))||[])),Ze=()=>{if(Ye.holder.certNo){const e=P(Ye.holder.certNo);if(J(Ye.holder.certNo,18,"year"))return T("投保人年龄必须大于18岁！"),!1;if(Ye.insured.certNo&&Ye.insured.relationToHolder===j.MATE){if(e===P(Ye.insured.certNo))return T("被保人为配偶时，性别不可相同！"),!1}}if(Ye.insured.certNo){if(Ye.insured.relationToHolder===j.CHILD&&J(Ye.insured.certNo,30,"day"))return T("被保人为子女时，年龄必须大于等于30天！"),!1;if(Ye.insured.relationToHolder===j.PARENT&&!J(Ye.insured.certNo,71,"year"))return T("被保人为父母时，年龄必须小于等于70岁！"),!1}if([j.CHILD,j.PARENT].includes(Ye.insured.relationToHolder)){const e=G(Ye.holder.certNo,"year"),a=G(Ye.insured.certNo,"year");if(Ye.insured.relationToHolder===j.CHILD&&e-a<18)return T("投保人和子女年龄必须相差18岁！"),!1;if(Ye.insured.relationToHolder===j.PARENT&&a-e<18)return T("投保人和父母年龄必须相差18岁！"),!1}return!0},ea=()=>{a.push({path:"/internet/guaranteeUpgrade",query:{...F.query,tenantId:Ne,productCode:"BWYL2022",orderNo:we,agentCode:Ce}})},aa=()=>{Ue.value=!1,a.replace(`/pay?orderNo=${we}&saleUserId=${Ce}&tenantId=${Ne}`)},ta=()=>{Je.value=ze.value},na=()=>{Je.value={...Je.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},ra=e=>{const a=JSON.parse(Le.value?.productBasicInfoVO?.extInfo);let t="";1===a.endorsementFlag&&(t=`&upgradeCode=${a.endorsementCode}`);return`${x}/internet/productDetail?tenantId=${Ne}&productCode=${Ie}&orderNo=${e}&agentCode=${Ce}&pageCode=payBack${t}&from=${Se||"normal"}`},oa=async e=>{const a=K({tenantId:Ne,saleUserId:Ce,saleChannelId:Te,detail:xe.value,insureDetail:Le.value,paymentMethod:Ye.paymentMethod,renewalDK:Ye.renewalDK,iseeBizNo:Ke,successJumpUrl:"",premium:Ve.value,holder:Ye.holder,insured:Ye.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:"",orderNo:we,originOrderIds:Re.value});try{const e=await q(a),{code:n,data:r}=e;"10000"===n&&(async e=>{T.loading({message:"核保中...",forbidClick:!0,duration:0});try{const a=await U(e),{code:t}=a;if("10000"===t){const a=await B({orderNo:e.orderNo,tenantId:Ne}),{data:t}=a;"10000"===a.code&&(2===t.type?(Be.value={show:!0,html:t.paymentUrl},D((()=>{const e=document.getElementById("cashierSubmit");e?.addEventListener("submit",(e=>{e.preventDefault()})),e?.submit()}))):window.location.href=t.paymentUrl)}Ge.canInsure=!0}catch(a){Ge.canInsure=!0}finally{T.clear()}})({...a,orderNo:r.data,extInfo:{extraInfo:{renewalDK:Ye.renewalDK,paymentMethod:Ye.paymentMethod,paymentFrequency:Ye.paymentFrequency,successJumpUrl:ra(r.data),failUrl:(t=r.data,`${x}/internet/payFail?tenantId=${Ne}&orderNo=${t}&agentCode=${Ce}&pageCode=payBack&from=${Se||"normal"}`)},iseeBizNo:Ke}})}catch(n){Ge.canInsure=!0}var t},ia=async()=>{if(je)ea();else{Ge.canInsure=!1;try{const{condition:e,data:a}=await new Promise(((e,a)=>{Pe.value?.validateForm?.().then((async()=>{if(!Ze())return void a(new Error);const{calcData:t,riskVOList:n}=Y({holder:Ye.holder,insured:Ye.insured,tenantId:Ne,paymentFrequency:Ye.paymentFrequency,productDetail:xe.value,insureDetail:Le.value},!0),r=await A(t),{code:o,data:i}=r;"10000"===o?(Ve.value=i.premium,e({condition:n,data:i})):a(new Error)})).catch((e=>{Ge.canInsure=!0,z(e)}))})),t={},n=(e=[])=>{(e||[]).forEach((e=>{t[e.riskCode]=e,e.riskPremiumDetailVOList?.length&&n(e.riskPremiumDetailVOList)}))};n(a.riskPremiumDetailVOList);const r=R({tenantId:Ne,riskList:e,riskPremium:t,productId:xe.value?.id});oa(r)}catch(e){Ge.canInsure=!0}}},la=e=>{"allFalse"===e?(Ee.value=!1,ia(),Ge.canInsure=!0):C.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()}))},da=()=>{$e.value=!0,qe.value=!1,Ee.value=!0};l([()=>Ye.insured.certNo,()=>Ye.insured.socialFlag],O((()=>{Ye.insured.certNo&&Ye.insured.socialFlag&&"payBack"!==ke&&(()=>{const{holder:{certNo:e,mobile:a,name:t,socialFlag:n},insured:{certNo:r,name:o,socialFlag:i,relationToHolder:l},paymentMethod:d}=Ye;return S(r)&&!!i})()&&(async()=>{if(Ge.canInsure=!0,!Ze())return{};const{calcData:e,riskVOList:a}=Y({holder:Ye.holder,insured:Ye.insured,tenantId:Ne,paymentFrequency:Ye.paymentFrequency,productDetail:xe.value,insureDetail:Le.value},!0);if(!Array.isArray(a)||a.length<1)return T("被保人年龄需在30天(含) - 70岁(含)之间！"),Ve.value=null,{};_e.value=!0;const t=await A(e);_e.value=!1;const{code:n,data:r}=t;"10000"===n&&(Ye.insured.certNo?Ve.value=r.premium:Ve.value=null)})()}),500),{deep:!0,immediate:!0}),l((()=>Ye.insured.certNo),(()=>{Ye.insured.certNo||(Ve.value=null)}));const ua=async()=>{const e=await M({orderNo:we,tenantId:Ne}),{code:a,data:t}=e;if("10000"===a){const{id:e,tenantOrderHolder:a,tenantOrderInsuredList:n,extInfo:r}=t;if(!je)return Re.value={id:e,holderId:a?.id,insuredId:n?.[0].id},Object.assign(Ye,{holder:{certNo:a.certNo,certType:a.certType,mobile:a.mobile,name:a.name,socialFlag:V.HAS},insured:{certNo:n?.[0].certNo,certType:n[0]?.certType,name:n[0]?.name,socialFlag:n[0]?.extInfo?.hasSocialInsurance,relationToHolder:n[0]?.relationToHolder},paymentMethod:r.extraInfo.paymentMethod,paymentFrequency:r.extraInfo.paymentFrequency,renewalDK:"Y"}),void(Ge.canInsure=!0);Object.assign(Ye,{holder:{certNo:a.certNo,certType:a.certType,mobile:a.mobile,name:a.name,socialFlag:V.HAS},insured:{certNo:n?.[0].certNo,certType:n[0]?.certType,name:n[0]?.name,socialFlag:n[0]?.extInfo?.hasSocialInsurance,relationToHolder:n[0]?.relationToHolder},paymentMethod:r.extraInfo.paymentMethod,paymentFrequency:r.extraInfo.paymentFrequency,renewalDK:r.extraInfo.renewalDK||"N"}),Ve.value=n[0]?.tenantOrderProductList?.[0]?.premium,t.orderStatus!==L.ACCEPT_POLICY&&t.orderStatus!==L.PAYMENT_SUCCESS||(Ge.canUpgrade=!0,Me.value=!1,Ue.value=!0),t.orderStatus===L.PAYING&&(Me.value=!0,setTimeout((()=>{ua()}),3e3))}};return d((()=>{je?(Je.value=ue,ze.value=ue):we?(Je.value={...ce,paymentFrequencyDisable:!0},ze.value=ce,Ge.canInsure=!0):be||we||(Je.value={...ce,paymentFrequencyDisable:!0},ze.value=ce,Ge.canInsure=!0),(async()=>{const e=await _({productCode:Ie,withInsureInfo:!0,tenantId:Ne});"10000"===e.code&&(xe.value=e.data,document.title=e.data?.productFullName||"");const a=await E({productCode:Ie});"10000"===a.code&&(Le.value=a.data),we&&ua()})(),setTimeout((async()=>{Ke=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=u("van-loading"),n=u("van-button"),r=u("van-config-provider"),o=c("dompurify-html");return s(),m(b,null,[p(r,{"theme-vars":I(X)},{default:y((()=>[Be.value.show?v((s(),m("div",me,null,512)),[[o,Be.value.html]]):f("",!0),h("div",pe,[h("div",ye,[p(ee,{url:xe.value?.tenantProductInsureVO?.banner[0]},null,8,["url"]),p(ae,{"product-name":xe.value?.productFullName,"product-desc":xe.value?.showConfigVO?.desc},null,8,["product-name","product-desc"])]),xe.value?.tenantProductInsureVO?.titleAndDescVOS?(s(),g(te,{key:0,"guarantee-list":I(Qe)},null,8,["guarantee-list"])):f("",!0),p(ne,{detail:xe.value},{form:y((()=>[p(re,{ref_key:"formRef",ref:Pe,disable:!I(Ge).showInsure,"form-auth":Je.value,"form-info":I(Ye),premium:Ve.value,"product-detail":xe.value,payments:[1],"payment-method":[0],onOnReset:ta,onOnUpdate:na},null,8,["disable","form-auth","form-info","premium","product-detail"])])),_:1},8,["detail"]),h("div",ve,[h("div",fe,[he,_e.value?(s(),g(t,{key:1,class:"premium-loading",type:"spinner"})):(s(),m("span",ge,N(Ve.value?"￥":"")+N(I(H)(Ve.value))+N(Ve.value?"元/月":""),1))]),p(n,{type:"primary",class:"right",disabled:!(I(Ge).canInsure||I(Ge).canUpgrade),onClick:ia},{default:y((()=>[w(N(I(Ge).showInsure?"立即投保":"升级保障"),1)])),_:1},8,["disabled"])])]),I(we)?f("",!0):(s(),g(oe,{key:1,"product-detail":xe.value},null,8,["product-detail"])),p(ie,{"order-no":I(we),"tenant-id":I(Ne),"upgrade-code":I(He),"is-show":Ue.value,onOnConfirm:ea,onOnClose:aa},null,8,["order-no","tenant-id","upgrade-code","is-show"])])),_:1},8,["theme-vars"]),p(le,{show:Ee.value,"onUpdate:show":a[0]||(a[0]=e=>Ee.value=e),"content-list":I(We),"active-index":0,onOnConfirmHealth:la},null,8,["show","content-list"]),qe.value?(s(),g(se,{key:0,show:qe.value,"onUpdate:show":a[1]||(a[1]=e=>qe.value=e),"content-list":I(Xe),"active-index":Ae.value,text:"我已逐页阅读并确认告知内容",onSubmit:da},null,8,["show","content-list","active-index"])):f("",!0),p(de,{"is-show":Me.value},null,8,["is-show"])],64)}}}),[["__scopeId","data-v-3d23cb7a"]]))}}}))}();
