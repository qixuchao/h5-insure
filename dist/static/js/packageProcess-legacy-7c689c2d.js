!function(){var e=document.createElement("style");e.innerHTML=".page-internet-product-detail[data-v-ae74f7a6]{padding-bottom:2rem;background:#f1f5fc}.page-internet-product-detail .footer-button[data-v-ae74f7a6]{justify-content:space-between}.page-internet-product-detail .price[data-v-ae74f7a6]{color:#393d46;font-size:.45333rem;font-weight:400;display:flex;align-items:center}.page-internet-product-detail .price span[data-v-ae74f7a6]{color:var(--van-primary-color);font-weight:700}.page-internet-product-detail .price .premium-loading[data-v-ae74f7a6]{display:inline-block;line-height:.69333rem;margin-left:.4rem}.page-internet-product-detail .price .premium-loading[data-v-ae74f7a6] .van-loading__spinner{width:.45333rem!important;height:.45333rem!important}.page-internet-product-detail .right[data-v-ae74f7a6]{width:3.73333rem;background:var(--van-primary-color);border-color:var(--van-primary-color)}\n",document.head.appendChild(e),System.register(["./vendor-legacy-c308286a.js","./debounce-legacy-a1757db0.js","./index-legacy-462719c7.js","./order-legacy-aff38030.js","./infoCollection-legacy-d8a6c71f.js","./trial-legacy-52911168.js","./product-legacy-dd8f989c.js","./utils-legacy-6f84274b.js","./theme-legacy-a8152f06.js","./auth-legacy-049111ad.js","./index-legacy-8bb735da.js","./trial-legacy-75ae0640.js","./check-detail-legacy-537607dd.js","./index-legacy-dcb464ec.js","./bankCard-legacy-b7724581.js","./header-logo-legacy-22b85092.js","./phoneVerify-legacy-530a6d0f.js","./loading-legacy-62d8052a.js","./close-legacy-44817505.js"],(function(e){"use strict";var a,t,n,r,o,i,l,d,c,u,s,p,m,y,v,f,g,h,I,N,w,b,k,C,T,F,L,O,D,P,S,H,j,x,E,U,A,q,R,V,_,M,B,$,K,Y,z,G,J,W,Q,X,Z,ee,ae,te,ne,re,oe,ie,le,de,ce,ue,se,pe,me;return{setters:[function(e){a=e.i,t=e.aa,n=e.P,r=e.r,o=e.N,i=e.A,l=e.$,d=e.k,c=e.l,u=e.ag,s=e.m,p=e.s,m=e.t,y=e.p,v=e.I,f=e.x,g=e.B,h=e.C,I=e.L,N=e.n,w=e.G,b=e.F,k=e.T,C=e.D,T=e.a5,F=e.a6,L=e.Y},function(e){O=e.d},function(e){D=e._,P=e.C,S=e.a1,H=e.I,j=e.a4,x=e.J},function(e){E=e.a},function(e){U=e.S,A=e.R,q=e.g,R=e.I},function(e){V=e.i,_=e.u,M=e.a,B=e.s,$=e.p,K=e.g},function(e){Y=e.p},function(e){z=e.t,G=e.g,J=e.a,W=e.o,Q=e.s,X=e.v,Z=e.b,ee=e.j},function(e){ae=e.t},function(e){te=e.d,ne=e.B,re=e.D,oe=e.G,ie=e.S,le=e.H,de=e.P,ce=e.U,ue=e._,se=e.W,pe=e.a},function(e){me=e._},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const ye={key:0},ve={class:"page-internet-product-detail"},fe={class:"info"},ge={class:"footer-button"},he={class:"price"},Ie=(e=>(T("data-v-ae74f7a6"),e=e(),F(),e))((()=>g("span",null,"总保费",-1))),Ne={key:0};e("default",D(a({setup(e){const a=t(),T=n(),{productCode:F="BWYL2021",tenantId:D,orderNo:we,phoneNo:be,agentCode:ke="",saleChannelId:Ce,paymentMethod:Te,certNo:Fe,name:Le,pageCode:Oe,from:De}=T.query,Pe=r(),Se=r(),He=r(),je=r(),xe="payBack"===Oe;r(!1);const Ee=r(!1),Ue=r(!1),Ae=r(0),qe=r(!1),Re=r(!1),Ve=r({show:!1,html:""}),_e=r({}),Me=r(),Be=r(!1),$e=r("");let Ke="";const Ye=o({holder:{certNo:Fe,certType:P.CERT,mobile:be,name:Le,socialFlag:U.HAS},insured:{certNo:Fe,certType:P.CERT,name:Le,socialFlag:U.HAS,relationToHolder:A.SELF},paymentMethod:Te,renewalDK:"Y",paymentFrequency:q.YEAR,packageProductList:[],mobileSmsCode:""}),ze=r(te),Ge=r(te),Je=o({showInsure:!xe,canInsure:!1,canUpgrade:!1}),We=i((()=>Se.value?.tenantProductInsureVO?.attachmentVOList.filter((e=>"健康告知"===e.attachmentName))||[])),Qe=i((()=>Se.value?.tenantProductInsureVO?.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName))||[])),Xe=()=>{$e.value=je.value?Ye.paymentFrequency==q.YEAR?"元/年":"元/月":""},Ze=()=>{a.push({path:"/internet/guaranteeUpgrade",query:{...T.query,tenantId:D,productCode:"BWYL2022",orderNo:we,agentCode:ke}})},ea=()=>{Re.value=!1},aa=()=>{Ge.value=ze.value},ta=()=>{Ge.value={...Ge.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},na=e=>`${j}/internet/payFail?tenantId=${D}&orderNo=${e}&agentCode=${ke}&pageCode=payBack&from=${De||"normal"}`,ra=async e=>{const a=G({tenantId:D,saleUserId:ke,saleChannelId:Ce,detail:Se.value,insureDetail:He.value,paymentMethod:Ye.paymentMethod,paymentFrequency:Ye.paymentFrequency,renewalDK:Ye.renewalDK,iseeBizNo:Ke,successJumpUrl:"",premium:je.value,holder:Ye.holder,insured:Ye.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:"",orderNo:we,originOrderIds:Me.value});try{const e=await B(a),{code:n,data:r}=e;Ue.value=!1,Ee.value=!1,"10000"===n&&(k.clear(),delete a.id,_e.value={orderNo:r.data,order:a},Ue.value=!0,t=0,Ae.value=t,Ue.value=!0)}catch(n){k.clear(),Je.canInsure=!0}var t},oa=()=>new Promise(((e,a)=>{Pe.value?.validateForm?.().then((async()=>{if(!(()=>{if(Ye.holder.certNo){const e=x(Ye.holder.certNo);if(X(Ye.holder.certNo,18,"year"))return k("投保人年龄必须大于18岁！"),!1;if(Ye.insured.certNo&&Ye.insured.relationToHolder===A.MATE&&e===x(Ye.insured.certNo))return k("被保人为配偶时，性别不可相同！"),!1}if(Ye.insured.certNo){if(Ye.insured.relationToHolder===A.CHILD&&X(Ye.insured.certNo,30,"day"))return k("被保人为子女时，年龄必须大于等于30天！"),!1;if(Ye.insured.relationToHolder===A.PARENT&&!X(Ye.insured.certNo,71,"year"))return k("被保人为父母时，年龄必须小于等于70岁！"),!1}if([A.CHILD,A.PARENT].includes(Ye.insured.relationToHolder)){const e=Z(Ye.holder.certNo,"year"),a=Z(Ye.insured.certNo,"year");if(Ye.insured.relationToHolder===A.CHILD&&e-a<18)return k("投保人和子女年龄必须相差18岁！"),!1;if(Ye.insured.relationToHolder===A.PARENT&&a-e<18)return k("投保人和父母年龄必须相差18岁！"),!1}return!0})())return void(Je.canInsure=!0);const{calcData:t,riskVOList:n}=J({holder:Ye.holder,insured:Ye.insured,tenantId:D,productDetail:Se.value,insureDetail:He.value,paymentFrequency:Ye.paymentFrequency,packageRiskIdList:W(Ye.packageProductList)},!1,ee);(!Array.isArray(n)||n.length<1)&&(k("被保人年龄需在30天(含) - 70岁(含)之间！"),je.value=null,a(new Error));const r=await $(t),{code:o,data:i}=r;"10000"===o?(je.value=i.premium,e({condition:n,data:i})):(je.value=null,a(new Error))})).catch((e=>{Je.canInsure=!0,Q(e)}))})),ia=async()=>{if(xe)Ze();else try{k.loading({message:"订单生成中...",forbidClick:!0,duration:0});const{condition:e,data:a}=await oa(),t={},n=(e=[])=>{(e||[]).forEach((e=>{t[e.riskCode]=e,e.riskPremiumDetailVOList?.length&&n(e.riskPremiumDetailVOList)}))};n(a.riskPremiumDetailVOList);const r=z({tenantId:D,riskList:e,riskPremium:t,productId:Se.value?.id});ra(r)}catch(e){Je.canInsure=!0}finally{k.clear()}},la=e=>{var a;"allFalse"===e?(Ee.value=!1,Je.canInsure=!0,(async e=>{k.loading({message:"核保中...",forbidClick:!0,duration:0});try{const a=await _(e),{code:t}=a;if("10000"===t){const a=await M({orderNo:e.orderNo,tenantId:D}),{data:t}=a;"10000"===a.code&&(2===t.type?(Ve.value={show:!0,html:t.paymentUrl},L((()=>{const e=document.getElementById("cashierSubmit");e?.addEventListener("submit",(e=>{e.preventDefault()})),e?.submit()}))):window.location.href=t.paymentUrl)}Je.canInsure=!0}catch(a){Je.canInsure=!0}finally{k.clear()}})({..._e.value.order,orderNo:_e.value.orderNo,extInfo:{extraInfo:{renewalDK:Ye.renewalDK,paymentMethod:Ye.paymentMethod,paymentFrequency:Ye.paymentFrequency,successJumpUrl:(a=_e.value.orderNo,`${j}/pay?orderNo=${a}&saleUserId=${ke}&tenantId=${D}`),failUrl:na(_e.value.orderNo)},iseeBizNo:Ke}})):C.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()})).catch((()=>{Je.canInsure=!0}))},da=()=>{Ue.value=!1,Ee.value=!1,Je.canInsure=!0},ca=()=>{Ue.value=!1,Ee.value=!0};l([()=>Ye.insured.certNo,()=>Ye.insured.socialFlag,()=>Ye.packageProductList,()=>Ye.paymentFrequency],O((()=>{Ye.insured.certNo&&Ye.insured.socialFlag&&(()=>{const{holder:{certNo:e,mobile:a,name:t,socialFlag:n},insured:{certNo:r,name:o,socialFlag:i,relationToHolder:l},paymentMethod:d}=Ye;return!(!H(r)||!i)})()&&(async()=>{const{calcData:e,riskVOList:a}=J({holder:Ye.holder,insured:Ye.insured,tenantId:D,productDetail:Se.value,insureDetail:He.value,paymentFrequency:Ye.paymentFrequency,packageRiskIdList:W(Ye.packageProductList)},!1,ee);if(!Array.isArray(a)||a.length<1)return k("被保人年龄需在30天(含) - 70岁(含)之间！"),je.value=null,{};Be.value=!0;const t=await $(e);Be.value=!1;const{code:n,data:r}=t;"10000"===n?Ye.insured.certNo?(je.value=r.premium,Xe()):(je.value=null,Xe()):je.value=null})()}),500),{deep:!0,immediate:!0}),l((()=>Ye.insured.certNo),(()=>{Ye.insured.certNo||(je.value=null)}));const ua=async()=>{const e=await K({orderNo:we,tenantId:D}),{code:a,data:t}=e;if("10000"===a){const{id:e,tenantOrderHolder:a,tenantOrderInsuredList:n,extInfo:r}=t;if(!xe){Me.value={id:e,holderId:a?.id,insuredId:n?.[0].id};const t=(n[0]?.tenantOrderProductList[0]?.tenantOrderRiskList||[]).map((e=>e.extInfo?.riskId||""));return Ye.packageProductList.forEach((e=>{e.value=e.productRiskVoList.filter((e=>t.includes(e.id))).length>0?R.INSURE:R.UN_INSURE})),Object.assign(Ye,{holder:{certNo:a.certNo,certType:a.certType,mobile:a.mobile,name:a.name,socialFlag:U.HAS},insured:{certNo:n?.[0].certNo,certType:n[0]?.certType,name:n[0]?.name,socialFlag:n[0]?.extInfo?.hasSocialInsurance,relationToHolder:n[0]?.relationToHolder},paymentMethod:r.extraInfo.paymentMethod,paymentFrequency:r.extraInfo.paymentFrequency,renewalDK:r.extraInfo.renewalDK||"N"}),void(Je.canInsure=!0)}Object.assign(Ye,{holder:{certNo:a.certNo,certType:a.certType,mobile:a.mobile,name:a.name,socialFlag:U.HAS},insured:{certNo:n?.[0].certNo,certType:n[0]?.certType,name:n[0]?.name,socialFlag:n[0]?.extInfo?.hasSocialInsurance,relationToHolder:n[0]?.relationToHolder},paymentMethod:r.extraInfo.paymentMethod,paymentFrequency:r.extraInfo.paymentFrequency,renewalDK:r.extraInfo.renewalDK||"N"}),je.value=n[0]?.tenantOrderProductList?.[0]?.premium,t.orderStatus!==E.ACCEPT_POLICY&&t.orderStatus!==E.PAYMENT_SUCCESS||(Je.canUpgrade=!0,qe.value=!1,Re.value=!0),t.orderStatus===E.PAYING&&(qe.value=!0,setTimeout((()=>{ua()}),3e3))}};return d((()=>{Ge.value=pe,ze.value=pe,Je.canInsure=!0,(async()=>{const e=await Y({productCode:F,withInsureInfo:!0,tenantId:D});"10000"===e.code&&(Se.value=e.data,document.title=e.data?.productFullName||"");const a=await V({productCode:F});"10000"===a.code&&(Ye.packageProductList=(a.data?.packageProductVOList||[]).map((e=>({...e,value:R.UN_INSURE,disabled:!1}))),He.value=a.data),we&&ua()})(),setTimeout((async()=>{Ke=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=c("van-loading"),n=c("van-button"),r=c("van-config-provider"),o=u("dompurify-html");return s(),p(b,null,[m(r,{"theme-vars":h(ae)},{default:y((()=>[Ve.value.show?v((s(),p("div",ye,null,512)),[[o,Ve.value.html]]):f("",!0),g("div",ve,[g("div",fe,[m(ne,{url:Se.value?.tenantProductInsureVO?.banner[0]},null,8,["url"]),m(re,{"product-name":Se.value?.productFullName,"product-desc":Se.value?.showConfigVO?.desc},null,8,["product-name","product-desc"])]),m(oe,{"show-service-config":"","guarantee-list":Se.value?.tenantProductInsureVO?.titleAndDescVOS},null,8,["guarantee-list"]),m(ie,{detail:Se.value},{form:y((()=>[m(le,{ref_key:"formRef",ref:Pe,"is-show-package":"",disable:!h(Je).showInsure,"form-auth":Ge.value,"form-info":h(Ye),"product-detail":Se.value,onOnReset:aa,onOnUpdate:ta},null,8,["disable","form-auth","form-info","product-detail"])])),_:1},8,["detail"]),g("div",ge,[g("div",he,[Ie,Be.value?(s(),N(t,{key:1,class:"premium-loading",type:"spinner"})):(s(),p("span",Ne,I(je.value?"￥":"")+I(h(S)(je.value))+" "+I($e.value),1))]),m(n,{type:"primary",class:"right",disabled:!(h(Je).canInsure||h(Je).canUpgrade),onClick:ia},{default:y((()=>[w(I(h(Je).showInsure?"立即投保":"升级保障"),1)])),_:1},8,["disabled"])])]),h(we)?f("",!0):(s(),N(de,{key:1,"product-detail":Se.value},null,8,["product-detail"])),m(ce,{"order-no":h(we),"tenant-id":h(D),"is-show":Re.value,onOnConfirm:Ze,onOnClose:ea},null,8,["order-no","tenant-id","is-show"])])),_:1},8,["theme-vars"]),m(ue,{show:Ee.value,"onUpdate:show":a[0]||(a[0]=e=>Ee.value=e),"content-list":h(We),"active-index":0,onOnConfirmHealth:la,onOnCloseHealth:da},null,8,["show","content-list"]),Ue.value?(s(),N(me,{key:0,show:Ue.value,"onUpdate:show":a[1]||(a[1]=e=>Ue.value=e),"content-list":h(Qe),"active-index":Ae.value,text:"我已逐页阅读并确认告知内容","force-read-cound":2,"on-close-file-preview":"",onSubmit:ca,onOnCloseFilePreview:da},null,8,["show","content-list","active-index"])):f("",!0),m(se,{"is-show":qe.value},null,8,["is-show"])],64)}}}),[["__scopeId","data-v-ae74f7a6"]]))}}}))}();
