!function(){var e=document.createElement("style");e.innerHTML=".page-internet-product-detail[data-v-174fb5e8]{padding-bottom:2rem;background:#f1f5fc}.page-internet-product-detail .footer-button[data-v-174fb5e8]{justify-content:space-between}.page-internet-product-detail .price[data-v-174fb5e8]{color:#393d46;font-size:.45333rem;font-weight:400;display:flex;align-items:center}.page-internet-product-detail .price span[data-v-174fb5e8]{color:var(--van-primary-color);font-weight:700}.page-internet-product-detail .price .premium-loading[data-v-174fb5e8]{display:inline-block;line-height:.69333rem;margin-left:.4rem}.page-internet-product-detail .price .premium-loading[data-v-174fb5e8] .van-loading__spinner{width:.45333rem!important;height:.45333rem!important}.page-internet-product-detail .right[data-v-174fb5e8]{width:3.73333rem;background:var(--van-primary-color);border-color:var(--van-primary-color)}\n",document.head.appendChild(e),System.register(["./index-legacy-56d6d425.js","./debounce-legacy-4293c378.js","./order-legacy-33867685.js","./infoCollection-legacy-20823e29.js","./trial-legacy-c8f7c6d6.js","./product-legacy-058e1d27.js","./utils-legacy-43a98972.js","./theme-legacy-a8152f06.js","./auth-legacy-68870861.js","./index-legacy-8057d845.js","./pdfh5-legacy-783b46b8.js","./trial-legacy-0dc46ee0.js","./index-legacy-28f445eb.js","./bankCard-legacy-73d69faf.js","./validator-legacy-5e43cc69.js","./phoneVerify-legacy-245c3725.js"],(function(e){"use strict";var a,t,n,r,o,i,l,d,c,u,s,p,m,v,y,f,h,g,I,N,w,b,k,T,C,F,L,O,D,P,H,S,x,E,j,U,q,A,R,V,_,M,B,K,$,Y,z,W,G,J,Q,X,Z,ee,ae,te,ne,re,oe,ie,le,de,ce,ue,se,pe,me;return{setters:[function(e){a=e._,t=e.d,n=e.u,r=e.a,o=e.r,i=e.z,l=e.a3,d=e.x,c=e.a8,u=e.y,s=e.b,p=e.q,m=e.c,v=e.g,y=e.f,f=e.w,h=e.s,g=e.j,I=e.i,N=e.l,w=e.t,b=e.aH,k=e.e,T=e.n,C=e.F,F=e.T,L=e.a5,O=e.K,D=e.L,P=e.am,H=e.aO,S=e.aK,x=e.an},function(e){E=e.d},function(e){j=e.a},function(e){U=e.S,q=e.R,A=e.g,R=e.I},function(e){V=e.i,_=e.u,M=e.a,B=e.s,K=e.p,$=e.g},function(e){Y=e.p},function(e){z=e.t,W=e.g,G=e.a,J=e.o,Q=e.s,X=e.v,Z=e.b,ee=e.j},function(e){ae=e.t},function(e){te=e.d,ne=e.B,re=e.D,oe=e.G,ie=e.S,le=e.H,de=e.P,ce=e.U,ue=e._,se=e.W,pe=e.a},function(e){me=e._},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const ve={key:0},ye={class:"page-internet-product-detail"},fe={class:"info"},he={class:"footer-button"},ge={class:"price"},Ie=(e=>(O("data-v-174fb5e8"),e=e(),D(),e))((()=>I("span",null,"总保费",-1))),Ne={key:0};e("default",a(t({setup(e){const a=n(),t=r(),{productCode:O="BWYL2021",tenantId:D,orderNo:we,phoneNo:be,agentCode:ke="",saleChannelId:Te,paymentMethod:Ce,certNo:Fe,name:Le,pageCode:Oe,from:De}=t.query,Pe=o(),He=o(),Se=o(),xe=o(),Ee="payBack"===Oe;o(!1);const je=o(!1),Ue=o(!1),qe=o(0),Ae=o(!1),Re=o(!1),Ve=o({show:!1,html:""}),_e=o({}),Me=o(),Be=o(!1),Ke=o("");let $e="";const Ye=i({holder:{certNo:Fe,certType:l.CERT,mobile:be,name:Le,socialFlag:U.HAS},insured:{certNo:Fe,certType:l.CERT,name:Le,socialFlag:U.HAS,relationToHolder:q.SELF},paymentMethod:Ce,renewalDK:"Y",paymentFrequency:A.YEAR,packageProductList:[],mobileSmsCode:""}),ze=o(te),We=o(te),Ge=i({showInsure:!Ee,canInsure:!1,canUpgrade:!1}),Je=d((()=>He.value?.tenantProductInsureVO?.attachmentVOList.filter((e=>"健康告知"===e.attachmentName))||[])),Qe=d((()=>He.value?.tenantProductInsureVO?.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName))||[])),Xe=()=>{Ke.value=xe.value?Ye.paymentFrequency==A.YEAR?"元/年":"元/月":""},Ze=()=>{a.push({path:"/internet/guaranteeUpgrade",query:{...t.query,tenantId:D,productCode:"BWYL2022",orderNo:we,agentCode:ke}})},ea=()=>{Re.value=!1},aa=()=>{We.value=ze.value},ta=()=>{We.value={...We.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},na=e=>`${S}/internet/payFail?tenantId=${D}&orderNo=${e}&agentCode=${ke}&pageCode=payBack&from=${De||"normal"}`,ra=async e=>{const a=W({tenantId:D,saleUserId:ke,saleChannelId:Te,detail:He.value,insureDetail:Se.value,paymentMethod:Ye.paymentMethod,paymentFrequency:Ye.paymentFrequency,renewalDK:Ye.renewalDK,iseeBizNo:$e,successJumpUrl:"",premium:xe.value,holder:Ye.holder,insured:Ye.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:"",orderNo:we,originOrderIds:Me.value});try{const e=await B(a),{code:n,data:r}=e;Ue.value=!1,je.value=!1,"10000"===n&&(F.clear(),delete a.id,_e.value={orderNo:r.data,order:a},Ue.value=!0,t=0,qe.value=t,Ue.value=!0)}catch(n){F.clear(),Ge.canInsure=!0}var t},oa=()=>new Promise(((e,a)=>{Pe.value?.validateForm?.().then((async()=>{if(!(()=>{if(Ye.holder.certNo){const e=x(Ye.holder.certNo);if(X(Ye.holder.certNo,18,"year"))return F("投保人年龄必须大于等于18岁！"),!1;if(Ye.insured.certNo&&Ye.insured.relationToHolder===q.MATE&&e===x(Ye.insured.certNo))return F("被保人为配偶时，性别不可相同！"),!1}if(Ye.insured.certNo){if(Ye.insured.relationToHolder===q.CHILD&&X(Ye.insured.certNo,30,"day"))return F("被保人为子女时，年龄必须大于等于30天！"),!1;if(Ye.insured.relationToHolder===q.PARENT&&!X(Ye.insured.certNo,71,"year"))return F("被保人为父母时，年龄必须小于等于70岁！"),!1}if([q.CHILD,q.PARENT].includes(Ye.insured.relationToHolder)){const e=Z(Ye.holder.certNo,"year"),a=Z(Ye.insured.certNo,"year");if(Ye.insured.relationToHolder===q.CHILD&&e-a<18)return F("投保人和子女年龄必须相差18岁！"),!1;if(Ye.insured.relationToHolder===q.PARENT&&a-e<18)return F("投保人和父母年龄必须相差18岁！"),!1}return!0})())return void(Ge.canInsure=!0);const{calcData:t,riskVOList:n}=G({holder:Ye.holder,insured:Ye.insured,tenantId:D,productDetail:He.value,insureDetail:Se.value,paymentFrequency:Ye.paymentFrequency,packageRiskIdList:J(Ye.packageProductList)},!1,ee);(!Array.isArray(n)||n.length<1)&&(F("被保人年龄需在30天(含) - 70岁(含)之间！"),xe.value=null,a(new Error));const r=await K(t),{code:o,data:i}=r;"10000"===o?(xe.value=i.premium,e({condition:n,data:i})):(xe.value=null,a(new Error))})).catch((e=>{Ge.canInsure=!0,Q(e)}))})),ia=async()=>{if(Ee)Ze();else try{F.loading({message:"订单生成中...",forbidClick:!0,duration:0});const{condition:e,data:a}=await oa(),t={},n=(e=[])=>{(e||[]).forEach((e=>{t[e.riskCode]=e,e.riskPremiumDetailVOList?.length&&n(e.riskPremiumDetailVOList)}))};n(a.riskPremiumDetailVOList);const r=z({tenantId:D,riskList:e,riskPremium:t,productId:He.value?.id});ra(r)}catch(e){Ge.canInsure=!0}finally{F.clear()}},la=e=>{var a;"allFalse"===e?(je.value=!1,Ge.canInsure=!0,(async e=>{F.loading({message:"核保中...",forbidClick:!0,duration:0});try{const a=await _(e),{code:t}=a;if("10000"===t){const a=await M({orderNo:e.orderNo,tenantId:D}),{data:t}=a;"10000"===a.code&&(2===t.type?(Ve.value={show:!0,html:t.paymentUrl},H((()=>{const e=document.getElementById("cashierSubmit");e?.addEventListener("submit",(e=>{e.preventDefault()})),e?.submit()}))):window.location.href=t.paymentUrl)}Ge.canInsure=!0}catch(a){Ge.canInsure=!0}finally{F.clear()}})({..._e.value.order,orderNo:_e.value.orderNo,extInfo:{extraInfo:{renewalDK:Ye.renewalDK,paymentMethod:Ye.paymentMethod,paymentFrequency:Ye.paymentFrequency,successJumpUrl:(a=_e.value.orderNo,`${S}/pay?orderNo=${a}&saleUserId=${ke}&tenantId=${D}`),failUrl:na(_e.value.orderNo)},iseeBizNo:$e}})):L.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()})).catch((()=>{Ge.canInsure=!0}))},da=()=>{Ue.value=!1,je.value=!1,Ge.canInsure=!0},ca=()=>{Ue.value=!1,je.value=!0};c([()=>Ye.insured.certNo,()=>Ye.insured.socialFlag,()=>Ye.packageProductList,()=>Ye.paymentFrequency],E((()=>{Ye.insured.certNo&&Ye.insured.socialFlag&&(()=>{const{holder:{certNo:e,mobile:a,name:t,socialFlag:n},insured:{certNo:r,name:o,socialFlag:i,relationToHolder:l},paymentMethod:d}=Ye;return!(!P(r)||!i)})()&&(async()=>{const{calcData:e,riskVOList:a}=G({holder:Ye.holder,insured:Ye.insured,tenantId:D,productDetail:He.value,insureDetail:Se.value,paymentFrequency:Ye.paymentFrequency,packageRiskIdList:J(Ye.packageProductList)},!1,ee);if(!Array.isArray(a)||a.length<1)return F("被保人年龄需在30天(含) - 70岁(含)之间！"),xe.value=null,{};Be.value=!0;const t=await K(e);Be.value=!1;const{code:n,data:r}=t;"10000"===n?Ye.insured.certNo?(xe.value=r.premium,Xe()):(xe.value=null,Xe()):xe.value=null})()}),500),{deep:!0,immediate:!0}),c((()=>Ye.insured.certNo),(()=>{Ye.insured.certNo||(xe.value=null)}));const ua=async()=>{const e=await $({orderNo:we,tenantId:D}),{code:a,data:t}=e;if("10000"===a){const{id:e,tenantOrderHolder:a,tenantOrderInsuredList:n,extInfo:r}=t;if(!Ee){Me.value={id:e,holderId:a?.id,insuredId:n?.[0].id};const t=(n[0]?.tenantOrderProductList[0]?.tenantOrderRiskList||[]).map((e=>e.extInfo?.riskId||""));return Ye.packageProductList.forEach((e=>{e.value=e.productRiskVoList.filter((e=>t.includes(e.id))).length>0?R.INSURE:R.UN_INSURE})),Object.assign(Ye,{holder:{certNo:a.certNo,certType:a.certType,mobile:a.mobile,name:a.name,socialFlag:U.HAS},insured:{certNo:n?.[0].certNo,certType:n[0]?.certType,name:n[0]?.name,socialFlag:n[0]?.extInfo?.hasSocialInsurance,relationToHolder:n[0]?.relationToHolder},paymentMethod:r.extraInfo.paymentMethod,paymentFrequency:r.extraInfo.paymentFrequency,renewalDK:r.extraInfo.renewalDK||"N"}),void(Ge.canInsure=!0)}Object.assign(Ye,{holder:{certNo:a.certNo,certType:a.certType,mobile:a.mobile,name:a.name,socialFlag:U.HAS},insured:{certNo:n?.[0].certNo,certType:n[0]?.certType,name:n[0]?.name,socialFlag:n[0]?.extInfo?.hasSocialInsurance,relationToHolder:n[0]?.relationToHolder},paymentMethod:r.extraInfo.paymentMethod,paymentFrequency:r.extraInfo.paymentFrequency,renewalDK:r.extraInfo.renewalDK||"N"}),xe.value=n[0]?.tenantOrderProductList?.[0]?.premium,t.orderStatus!==j.ACCEPT_POLICY&&t.orderStatus!==j.PAYMENT_SUCCESS||(Ge.canUpgrade=!0,Ae.value=!1,Re.value=!0),t.orderStatus===j.PAYING&&(Ae.value=!0,setTimeout((()=>{ua()}),3e3))}};return u((()=>{We.value=pe,ze.value=pe,Ge.canInsure=!0,(async()=>{const e=await Y({productCode:O,withInsureInfo:!0,tenantId:D});"10000"===e.code&&(He.value=e.data,document.title=e.data?.productFullName||"");const a=await V({productCode:O});"10000"===a.code&&(Ye.packageProductList=(a.data?.packageProductVOList||[]).map((e=>({...e,value:R.UN_INSURE,disabled:!1}))),Se.value=a.data),we&&ua()})(),setTimeout((async()=>{$e=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=s("van-loading"),n=s("van-button"),r=s("van-config-provider"),o=p("dompurify-html");return m(),v(C,null,[y(r,{"theme-vars":N(ae)},{default:f((()=>[Ve.value.show?h((m(),v("div",ve,null,512)),[[o,Ve.value.html]]):g("",!0),I("div",ye,[I("div",fe,[y(ne,{url:He.value?.tenantProductInsureVO?.banner[0]},null,8,["url"]),y(re,{"product-name":He.value?.productFullName,"product-desc":He.value?.showConfigVO?.desc},null,8,["product-name","product-desc"])]),y(oe,{"show-service-config":"","guarantee-list":He.value?.tenantProductInsureVO?.titleAndDescVOS},null,8,["guarantee-list"]),y(ie,{detail:He.value},{form:f((()=>[y(le,{ref_key:"formRef",ref:Pe,"is-show-package":"",disable:!N(Ge).showInsure,"form-auth":We.value,"form-info":N(Ye),"product-detail":He.value,onOnReset:aa,onOnUpdate:ta},null,8,["disable","form-auth","form-info","product-detail"])])),_:1},8,["detail"]),I("div",he,[I("div",ge,[Ie,Be.value?(m(),k(t,{key:1,class:"premium-loading",type:"spinner"})):(m(),v("span",Ne,w(xe.value?"￥":"")+w(N(b)(xe.value))+" "+w(Ke.value),1))]),y(n,{type:"primary",class:"right",disabled:!(N(Ge).canInsure||N(Ge).canUpgrade),onClick:ia},{default:f((()=>[T(w(N(Ge).showInsure?"立即投保":"升级保障"),1)])),_:1},8,["disabled"])])]),N(we)?g("",!0):(m(),k(de,{key:1,"product-detail":He.value},null,8,["product-detail"])),y(ce,{"order-no":N(we),"tenant-id":N(D),"is-show":Re.value,onOnConfirm:Ze,onOnClose:ea},null,8,["order-no","tenant-id","is-show"])])),_:1},8,["theme-vars"]),y(ue,{show:je.value,"onUpdate:show":a[0]||(a[0]=e=>je.value=e),"content-list":N(Je),"active-index":0,onOnConfirmHealth:la,onOnCloseHealth:da},null,8,["show","content-list"]),Ue.value?(m(),k(me,{key:0,show:Ue.value,"onUpdate:show":a[1]||(a[1]=e=>Ue.value=e),"content-list":N(Qe),"active-index":qe.value,text:"我已逐页阅读并确认告知内容","force-read-cound":2,"on-close-file-preview":"",onSubmit:ca,onOnCloseFilePreview:da},null,8,["show","content-list","active-index"])):g("",!0),y(se,{"is-show":Ae.value},null,8,["is-show"])],64)}}}),[["__scopeId","data-v-174fb5e8"]]))}}}))}();
