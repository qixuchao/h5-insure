!function(){var e=document.createElement("style");e.innerHTML=".page-internet-product-detail[data-v-f3c54730]{padding-bottom:2rem;background:#f1f5fc}.page-internet-product-detail .footer-button[data-v-f3c54730]{justify-content:space-between}.page-internet-product-detail .price[data-v-f3c54730]{color:#393d46;font-size:.45333rem;font-weight:400}.page-internet-product-detail .price span[data-v-f3c54730]{color:var(--van-primary-color);font-weight:700}.page-internet-product-detail .right[data-v-f3c54730]{width:3.73333rem;background:var(--van-primary-color);border-color:var(--van-primary-color)}\n",document.head.appendChild(e),System.register(["./vendor-legacy-2638a9d6.js","./index-legacy-d4a8bc3b.js","./order-legacy-470125e3.js","./infoCollection-legacy-b5e0bc8b.js","./trial-legacy-23c859d0.js","./product-legacy-1f7fcffd.js","./utils-legacy-d9fd5cc7.js","./theme-legacy-a8152f06.js","./auth-legacy-a1822718.js","./index-legacy-d6e6be20.js","./utils-legacy-20e4723c.js","./trial-legacy-56827f7b.js","./index-legacy-3fedc42b.js","./bankCard-legacy-76e0cfe9.js","./phoneVerify-legacy-f6e16c2a.js"],(function(e){"use strict";var a,t,n,r,o,l,i,c,u,d,s,m,p,y,f,v,h,g,I,w,N,b,C,T,F,k,D,O,L,H,P,S,E,x,A,j,q,U,M,V,R,_,B,K,$,Y,z,J,W,G,X,Q,Z,ee,ae,te,ne,re,oe,le,ie,ce,ue;return{setters:[function(e){a=e.g,t=e.a9,n=e.O,r=e.E,o=e.M,l=e.y,i=e._,c=e.l,u=e.h,d=e.r,s=e.af,m=e.j,p=e.n,y=e.p,f=e.m,v=e.H,h=e.t,g=e.z,I=e.A,w=e.J,N=e.C,b=e.k,C=e.F,T=e.D,F=e.T,k=e.X},function(e){D=e._,O=e.C,L=e.a0,H=e.H,P=e.I,S=e.a1},function(e){E=e.a},function(e){x=e.S,A=e.R,j=e.f,q=e.I},function(e){U=e.p,M=e.i,V=e.s,R=e.g,_=e.u,B=e.a},function(e){K=e.p},function(e){$=e.a,Y=e.o,z=e.t,J=e.b,W=e.h,G=e.g},function(e){X=e.t},function(e){Q=e.d,Z=e.B,ee=e.D,ae=e.G,te=e.S,ne=e.H,re=e.P,oe=e.U,le=e._,ie=e.W,ce=e.a},function(e){ue=e._},function(){},function(){},function(){},function(){},function(){}],execute:function(){const de={key:0},se={class:"page-internet-product-detail"},me={class:"info"},pe={class:"footer-button"},ye={class:"price"},fe=N(" 总保费");e("default",D(a({setup(e){const a=t(),D=n(),{productCode:ve="BWYL2021",tenantId:he,orderNo:ge,phoneNo:Ie,agentCode:we="",saleChannelId:Ne,paymentMethod:be,certNo:Ce,name:Te,pageCode:Fe,from:ke}=D.query,De=r(),Oe=r(),Le=r(),He=r(),Pe="payBack"===Fe,Se=r(!1),Ee=r(!1),xe=r(!1),Ae=r(0),je=r(!1),qe=r(!1),Ue=r({show:!1,html:""});let Me="";const Ve=o({holder:{certNo:Ce,certType:O.CERT,mobile:Ie,name:Te,socialFlag:x.HAS},insured:{certNo:Ce,certType:O.CERT,name:Te,socialFlag:x.HAS,relationToHolder:A.SELF},paymentMethod:be,renewalDK:"Y",paymentFrequency:j.YEAR,packageProductList:[],mobileSmsCode:""}),Re=r(Q),_e=r(Q),Be=o({showInsure:!Pe,canInsure:!1,canUpgrade:!1}),Ke=l((()=>Oe.value?.tenantProductInsureVO?.attachmentVOList.filter((e=>"健康告知"===e.attachmentName))||[])),$e=l((()=>Oe.value?.tenantProductInsureVO?.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName))||[])),Ye=()=>{a.push({path:"/internet/guaranteeUpgrade",query:{...D.query,tenantId:he,productCode:"BWYL2022",orderNo:ge,agentCode:we}})},ze=()=>{qe.value=!1},Je=()=>{_e.value=Re.value},We=()=>{_e.value={..._e.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},Ge=e=>`${S}/internet/payFail?tenantId=${he}&orderNo=${e}&agentCode=${we}&pageCode=payBack&from=${ke||"normal"}`,Xe=async e=>{const a=J({tenantId:he,saleUserId:we,saleChannelId:Ne,detail:Oe.value,insureDetail:Le.value,paymentMethod:Ve.paymentMethod,paymentFrequency:Ve.paymentFrequency,renewalDK:Ve.renewalDK,iseeBizNo:Me,successJumpUrl:"",premium:He.value,holder:Ve.holder,insured:Ve.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:""});try{const e=await V(a),{code:n,data:r}=e;"10000"===n&&(async e=>{F.loading({message:"核保中...",forbidClick:!0});try{const a=await _(e),{code:t}=a;if("10000"===t){F.loading({message:"核保中...",forbidClick:!0});const a=await B({orderNo:e.orderNo,tenantId:he}),{data:t}=a;"10000"===a.code&&(2===t.type?(Ue.value={show:!0,html:t.paymentUrl},k((()=>{const e=document.getElementById("cashierSubmit");e?.addEventListener("submit",(e=>{e.preventDefault()})),e?.submit()}))):window.location.href=t.paymentUrl)}Be.canInsure=!0}catch(a){Be.canInsure=!0}})({...a,orderNo:r.data,extInfo:{extraInfo:{renewalDK:Ve.renewalDK,paymentMethod:Ve.paymentMethod,paymentFrequency:Ve.paymentFrequency,successJumpUrl:(t=r.data,`${S}/pay?orderNo=${t}&saleUserId=${we}&tenantId=${he}`),failUrl:Ge(r.data)},iseeBizNo:Me}})}catch(n){Be.canInsure=!0}var t},Qe=()=>new Promise(((e,a)=>{De.value?.validateForm?.().then((async()=>{if(!(()=>{if(Ve.holder.certNo){const e=G(Ve.holder.certNo,"year"),a=P(Ve.holder.certNo);if(e<18)return F("投保人年龄必须大于18岁！"),!1;if(Ve.insured.certNo&&Ve.insured.relationToHolder===A.MATE&&a===P(Ve.insured.certNo))return F("被保人为配偶时，性别不可相同！"),!1}if(Ve.insured.certNo){const e=G(Ve.insured.certNo,"day"),a=G(Ve.insured.certNo,"year");if(Ve.insured.relationToHolder===A.CHILD&&e<30)return F("被保人为子女时，年龄必须大于等于30天！"),!1;if(Ve.insured.relationToHolder===A.PARENT&&a>=71)return F("被保人为父母时，年龄必须小于等于70岁！"),!1}if([A.CHILD,A.PARENT].includes(Ve.insured.relationToHolder)){const e=G(Ve.holder.certNo,"year"),a=G(Ve.insured.certNo,"year");if(Ve.insured.relationToHolder===A.CHILD&&e-a<18)return F("投保人和子女年龄必须相差18岁！"),!1;if(Ve.insured.relationToHolder===A.PARENT&&a-e<18)return F("投保人和父母年龄必须相差18岁！"),!1}return!0})())return void(Be.canInsure=!0);if(!(De.value?.isAgreeFile||Se.value))return Se.value=!1,xe.value=!0,t=0,Ae.value=t,void(xe.value=!0);var t;const{calcData:n,riskVOList:r}=$({holder:Ve.holder,insured:Ve.insured,tenantId:he,productDetail:Oe.value,insureDetail:Le.value,paymentFrequency:Ve.paymentFrequency,packageRiskIdList:Y(Ve.packageProductList)},!1,W);(!Array.isArray(r)||r.length<1)&&(He.value=null,a(new Error));const o=await U(n),{code:l,data:i}=o;"10000"===l?(He.value=i.premium,e({condition:r,data:i})):(He.value=null,a(new Error))})).catch((()=>{Be.canInsure=!0}))})),Ze=async()=>{if(Pe)Ye();else{Be.canInsure=!1;try{const{condition:e,data:a}=await Qe(),t={},n=(e=[])=>{(e||[]).forEach((e=>{t[e.riskCode]=e,e.riskPremiumDetailVOList?.length&&n(e.riskPremiumDetailVOList)}))};n(a.riskPremiumDetailVOList);const r=z({tenantId:he,riskList:e,riskPremium:t,productId:Oe.value?.id});Xe(r)}catch(e){Be.canInsure=!0}}},ea=e=>{"allFalse"===e?(Ee.value=!1,Se.value=!0,Ze(),Be.canInsure=!0):T.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()})).catch((()=>{De.value?.reEditForm(),Se.value=!1,Be.canInsure=!0}))},aa=()=>{De.value?.reEditForm(),Se.value=!1,Be.canInsure=!0},ta=()=>{Ee.value=!1,aa()},na=()=>{xe.value=!1,aa()},ra=()=>{xe.value=!1,Ee.value=!0};i([()=>Ve.insured.certNo,()=>Ve.insured.socialFlag,()=>Ve.packageProductList,()=>Ve.paymentFrequency],c.exports.debounce((()=>{Ve.insured.certNo&&Ve.insured.socialFlag&&(()=>{const{holder:{certNo:e,mobile:a,name:t,socialFlag:n},insured:{certNo:r,name:o,socialFlag:l,relationToHolder:i},paymentMethod:c}=Ve;return!(!H(r)||!l)})()&&(async()=>{const{calcData:e,riskVOList:a}=$({holder:Ve.holder,insured:Ve.insured,tenantId:he,productDetail:Oe.value,insureDetail:Le.value,paymentFrequency:Ve.paymentFrequency,packageRiskIdList:Y(Ve.packageProductList)},!1,W);if(!Array.isArray(a)||a.length<1)return He.value=null,{};const t=await U(e),{code:n,data:r}=t;"10000"===n?He.value=r.premium:He.value=null})()}),500),{deep:!0,immediate:!0});const oa=async()=>{const e=await R({orderNo:ge,tenantId:he}),{code:a,data:t}=e;if("10000"===a){const{tenantOrderHolder:e,tenantOrderInsuredList:a,extInfo:n}=t;if(!Pe)return Object.assign(Ve,{holder:{certNo:e.certNo,certType:e.certType,mobile:e.mobile,name:e.name,socialFlag:x.HAS},insured:{certNo:a?.[0].certNo,certType:a[0]?.certType,name:a[0]?.name,socialFlag:a[0]?.extInfo?.hasSocialInsurance,relationToHolder:a[0]?.relationToHolder},paymentMethod:n.extraInfo.paymentMethod,paymentFrequency:n.extraInfo.paymentFrequency,renewalDK:n.extraInfo.renewalDK||"N"}),void(Be.canInsure=!0);Object.assign(Ve,{holder:{certNo:e.certNo,certType:e.certType,mobile:e.mobile,name:e.name,socialFlag:x.HAS},insured:{certNo:a?.[0].certNo,certType:a[0]?.certType,name:a[0]?.name,socialFlag:a[0]?.extInfo?.hasSocialInsurance,relationToHolder:a[0]?.relationToHolder},paymentMethod:n.extraInfo.paymentMethod,paymentFrequency:n.extraInfo.paymentFrequency,renewalDK:n.extraInfo.renewalDK||"N"}),He.value=a[0]?.tenantOrderProductList?.[0]?.premium,t.orderStatus!==E.ACCEPT_POLICY&&t.orderStatus!==E.PAYMENT_SUCCESS||(Be.canUpgrade=!0,je.value=!1,qe.value=!0),t.orderStatus===E.PAYING&&(je.value=!0,setTimeout((()=>{oa()}),3e3))}};return u((()=>{_e.value=ce,Re.value=ce,Be.canInsure=!0,(async()=>{const e=K({productCode:ve,withInsureInfo:!0,tenantId:he}),a=M({productCode:ve});await Promise.all([e,a]).then((([e,a])=>{"10000"===e.code&&(Oe.value=e.data,document.title=e.data?.productFullName||""),"10000"===a.code&&(Ve.packageProductList=(a.data?.packageProductVOList||[]).map((e=>({...e,value:q.UN_INSURE,disabled:!1}))),Le.value=a.data)})),ge&&oa()})(),setTimeout((async()=>{Me=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=d("van-button"),n=d("van-config-provider"),r=s("dompurify-html");return m(),p(C,null,[y(n,{"theme-vars":I(X)},{default:f((()=>[Ue.value.show?v((m(),p("div",de,null,512)),[[r,Ue.value.html]]):h("",!0),g("div",se,[g("div",me,[y(Z,{url:Oe.value?.tenantProductInsureVO?.banner[0]},null,8,["url"]),y(ee,{"product-name":Oe.value?.productFullName,"product-desc":Oe.value?.showConfigVO?.desc},null,8,["product-name","product-desc"])]),y(ae,{"show-service-config":"","guarantee-list":Oe.value?.tenantProductInsureVO?.titleAndDescVOS},null,8,["guarantee-list"]),y(te,{detail:Oe.value},{form:f((()=>[y(ne,{ref_key:"formRef",ref:De,"is-show-package":"",disable:!I(Be).showInsure,"form-auth":_e.value,"form-info":I(Ve),"product-detail":Oe.value,onOnReset:Je,onOnUpdate:We},null,8,["disable","form-auth","form-info","product-detail"])])),_:1},8,["detail"]),g("div",pe,[g("div",ye,[fe,g("span",null,w(He.value?"￥":"")+w(I(L)(He.value))+" "+w(He.value?I(Ve).paymentFrequency==I(j).YEAR?"元/年":"元/月":""),1)]),y(t,{type:"primary",class:"right",disabled:!(I(Be).canInsure||I(Be).canUpgrade),onClick:Ze},{default:f((()=>[N(w(I(Be).showInsure?"立即投保":"升级保障"),1)])),_:1},8,["disabled"])])]),I(ge)?h("",!0):(m(),b(re,{key:1,"product-detail":Oe.value},null,8,["product-detail"])),y(oe,{"order-no":I(ge),"tenant-id":I(he),"is-show":qe.value,onOnConfirm:Ye,onOnClose:ze},null,8,["order-no","tenant-id","is-show"])])),_:1},8,["theme-vars"]),y(le,{show:Ee.value,"onUpdate:show":a[0]||(a[0]=e=>Ee.value=e),"content-list":I(Ke),"active-index":0,onOnConfirmHealth:ea,onOnCloseHealth:ta},null,8,["show","content-list"]),xe.value?(m(),b(ue,{key:0,show:xe.value,"onUpdate:show":a[1]||(a[1]=e=>xe.value=e),"content-list":I($e),"active-index":Ae.value,text:"我已逐页阅读并确认告知内容","force-read-cound":2,"on-close-file-preview":"",onSubmit:ra,onOnCloseFilePreview:na},null,8,["show","content-list","active-index"])):h("",!0),y(ie,{"is-show":je.value},null,8,["is-show"])],64)}}}),[["__scopeId","data-v-f3c54730"]]))}}}))}();
