!function(){var e=document.createElement("style");e.innerHTML=".page-internet-product-detail[data-v-8408dfd2]{padding-bottom:2rem;background:#f1f5fc}.page-internet-product-detail .footer-button[data-v-8408dfd2]{justify-content:space-between}.page-internet-product-detail .price[data-v-8408dfd2]{color:#393d46;font-size:.45333rem;font-weight:400}.page-internet-product-detail .price span[data-v-8408dfd2]{color:var(--van-primary-color);font-weight:700}.page-internet-product-detail .right[data-v-8408dfd2]{width:3.73333rem;background:var(--van-primary-color);border-color:var(--van-primary-color)}\n",document.head.appendChild(e),System.register(["./vendor-legacy-acf899d3.js","./index-legacy-fe8949f9.js","./order-legacy-470125e3.js","./infoCollection-legacy-b5e0bc8b.js","./trial-legacy-839a8c6d.js","./product-legacy-bd313d29.js","./utils-legacy-c255fe51.js","./theme-legacy-a8152f06.js","./auth-legacy-95b63a7e.js","./index-legacy-4a451745.js","./utils-legacy-20e4723c.js","./trial-legacy-20045d72.js","./index-legacy-2f2a2023.js","./bankCard-legacy-76e0cfe9.js","./phoneVerify-legacy-12ee04d5.js"],(function(e){"use strict";var a,t,n,r,o,l,i,d,u,c,s,v,m,p,f,y,h,g,I,w,N,b,T,C,k,F,D,L,O,H,P,S,x,E,j,U,q,A,M,V,R,_,B,K,$,Y,z,J,W,G,X,Q,Z,ee,ae,te,ne,re,oe,le,ie,de,ue;return{setters:[function(e){a=e.g,t=e.a9,n=e.O,r=e.E,o=e.M,l=e.y,i=e._,d=e.l,u=e.h,c=e.r,s=e.af,v=e.j,m=e.n,p=e.p,f=e.m,y=e.H,h=e.t,g=e.z,I=e.A,w=e.J,N=e.C,b=e.k,T=e.F,C=e.D,k=e.T,F=e.X},function(e){D=e._,L=e.C,O=e.a0,H=e.H,P=e.I,S=e.a1},function(e){x=e.a},function(e){E=e.S,j=e.R,U=e.f,q=e.I},function(e){A=e.p,M=e.i,V=e.s,R=e.g,_=e.u,B=e.a},function(e){K=e.p},function(e){$=e.a,Y=e.o,z=e.t,J=e.g,W=e.b,G=e.h},function(e){X=e.t},function(e){Q=e.d,Z=e.B,ee=e.D,ae=e.G,te=e.S,ne=e.H,re=e.P,oe=e.U,le=e._,ie=e.W,de=e.a},function(e){ue=e._},function(){},function(){},function(){},function(){},function(){}],execute:function(){const ce={key:0},se={class:"page-internet-product-detail"},ve={class:"info"},me={class:"footer-button"},pe={class:"price"},fe=N(" 总保费");e("default",D(a({setup(e){const a=t(),D=n(),{productCode:ye="BWYL2021",tenantId:he,orderNo:ge,phoneNo:Ie,agentCode:we="",saleChannelId:Ne,paymentMethod:be,certNo:Te,name:Ce,pageCode:ke,from:Fe}=D.query,De=r(),Le=r(),Oe=r(),He=r(),Pe="payBack"===ke,Se=r(!1),xe=r(!1),Ee=r(!1),je=r(0),Ue=r(!1),qe=r(!1),Ae=r({show:!1,html:""});let Me="";const Ve=o({holder:{certNo:Te,certType:L.CERT,mobile:Ie,name:Ce,socialFlag:E.HAS},insured:{certNo:Te,certType:L.CERT,name:Ce,socialFlag:E.HAS,relationToHolder:j.SELF},paymentMethod:be,renewalDK:"Y",paymentFrequency:U.YEAR,packageProductList:[],mobileSmsCode:""}),Re=r(Q),_e=r(Q),Be=o({showInsure:!Pe,canInsure:!1,canUpgrade:!1}),Ke=l((()=>{var e,a;return(null===(e=Le.value)||void 0===e||null===(a=e.tenantProductInsureVO)||void 0===a?void 0:a.attachmentVOList.filter((e=>"健康告知"===e.attachmentName)))||[]})),$e=l((()=>{var e,a;return(null===(e=Le.value)||void 0===e||null===(a=e.tenantProductInsureVO)||void 0===a?void 0:a.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName)))||[]})),Ye=()=>{a.push({path:"/internet/guaranteeUpgrade",query:{...D.query,tenantId:he,productCode:"BWYL2022",orderNo:ge,agentCode:we}})},ze=()=>{qe.value=!1},Je=()=>{_e.value=Re.value},We=()=>{_e.value={..._e.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},Ge=e=>`${S}/internet/payFail?tenantId=${he}&orderNo=${e}&agentCode=${we}&pageCode=payBack&from=${Fe||"normal"}`,Xe=async e=>{const a=W({tenantId:he,saleUserId:we,saleChannelId:Ne,detail:Le.value,insureDetail:Oe.value,paymentMethod:Ve.paymentMethod,renewalDK:Ve.renewalDK,iseeBizNo:Me,successJumpUrl:"",premium:He.value,holder:Ve.holder,insured:Ve.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:""});try{const e=await V(a),{code:n,data:r}=e;"10000"===n&&(async e=>{k.loading({message:"核保中...",forbidClick:!0});try{const a=await _(e),{code:t}=a;if("10000"===t){k.loading({message:"核保中...",forbidClick:!0});const a=await B({orderNo:e.orderNo,tenantId:he}),{data:t}=a;"10000"===a.code&&(2===t.type?(Ae.value={show:!0,html:t.paymentUrl},F((()=>{const e=document.getElementById("cashierSubmit");null==e||e.addEventListener("submit",(e=>{e.preventDefault()})),null==e||e.submit()}))):window.location.href=t.paymentUrl)}Be.canInsure=!0}catch(a){Be.canInsure=!0}})({...a,orderNo:r.data,extInfo:{extraInfo:{renewalDK:Ve.renewalDK,paymentMethod:Ve.paymentMethod,paymentFrequency:Ve.paymentFrequency,successJumpUrl:(t=r.data,`${S}/pay?orderNo=${t}&saleUserId=${we}&tenantId=${he}`),failUrl:Ge(r.data)},iseeBizNo:Me}})}catch(n){Be.canInsure=!0}var t},Qe=()=>new Promise(((e,a)=>{var t,n;null===(t=De.value)||void 0===t||null===(n=t.validateForm)||void 0===n||n.call(t).then((async()=>{var t;if(!(()=>{if(Ve.holder.certNo){const e=J(Ve.holder.certNo,"year"),a=P(Ve.holder.certNo);if(e<18)return k("投保人年龄必须大于18岁！"),!1;if(Ve.insured.certNo&&Ve.insured.relationToHolder===j.MATE&&a===P(Ve.insured.certNo))return k("被保人为配偶时，性别不可相同！"),!1}if(Ve.insured.certNo){const e=J(Ve.insured.certNo,"day"),a=J(Ve.insured.certNo,"year");if(Ve.insured.relationToHolder===j.CHILD&&e<30)return k("被保人为子女时，年龄必须大于等于30天！"),!1;if(Ve.insured.relationToHolder===j.PARENT&&a>=71)return k("被保人为父母时，年龄必须小于等于70岁！"),!1}if([j.CHILD,j.PARENT].includes(Ve.insured.relationToHolder)){const e=J(Ve.holder.certNo,"year"),a=J(Ve.insured.certNo,"year");if(Ve.insured.relationToHolder===j.CHILD&&e-a<18)return k("投保人和子女年龄必须相差18岁！"),!1;if(Ve.insured.relationToHolder===j.PARENT&&a-e<18)return k("投保人和父母年龄必须相差18岁！"),!1}return!0})())return void(Be.canInsure=!0);if(!((null===(t=De.value)||void 0===t?void 0:t.isAgreeFile)||Se.value))return Ee.value=!0,n=0,je.value=n,void(Ee.value=!0);var n;const{calcData:r,riskVOList:o}=$({holder:Ve.holder,insured:Ve.insured,tenantId:he,productDetail:Le.value,insureDetail:Oe.value,paymentFrequency:Ve.paymentFrequency,packageRiskIdList:Y(Ve.packageProductList)},!1,G),l=await A(r),{code:i,data:d}=l;"10000"===i?(He.value=d.premium,e({condition:o,data:d})):a(new Error)})).catch((()=>{Be.canInsure=!0}))})),Ze=async()=>{if(Pe)Ye();else try{var e;const{condition:a,data:t}=await Qe(),n={},r=(e=[])=>{(e||[]).forEach((e=>{var a;n[e.riskCode]=e,null!==(a=e.riskPremiumDetailVOList)&&void 0!==a&&a.length&&r(e.riskPremiumDetailVOList)}))};r(t.riskPremiumDetailVOList);const o=z({tenantId:he,riskList:a,riskPremium:n,productId:null===(e=Le.value)||void 0===e?void 0:e.id});Xe(o)}catch(a){Be.canInsure=!0}},ea=e=>{"allFalse"===e?(xe.value=!1,Ze(),Be.canInsure=!0):C.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()})).catch((()=>{var e;null===(e=De.value)||void 0===e||e.reEditForm(),Se.value=!1,Be.canInsure=!0}))},aa=()=>{Se.value=!0,Ee.value=!1,xe.value=!0};i([()=>Ve.insured.certNo,()=>Ve.insured.socialFlag,()=>Ve.packageProductList,()=>Ve.paymentFrequency],d.exports.debounce((()=>{Ve.insured.certNo&&Ve.insured.socialFlag&&(()=>{const{holder:{certNo:e,mobile:a,name:t,socialFlag:n},insured:{certNo:r,name:o,socialFlag:l,relationToHolder:i},paymentMethod:d}=Ve;return!(!H(r)||!l)})()&&(async()=>{const{calcData:e,riskVOList:a}=$({holder:Ve.holder,insured:Ve.insured,tenantId:he,productDetail:Le.value,insureDetail:Oe.value,paymentFrequency:Ve.paymentFrequency,packageRiskIdList:Y(Ve.packageProductList)},!1,G),t=await A(e),{code:n,data:r}=t;"10000"===n&&(He.value=r.premium)})()}),500),{deep:!0,immediate:!0});const ta=async()=>{const e=await R({orderNo:ge,tenantId:he}),{code:a,data:t}=e;if("10000"===a){var n,r,o,l,i,d,u,c;const{tenantOrderHolder:e,tenantOrderInsuredList:a,extInfo:y}=t;var s,v,m,p,f;if(!Pe)return Object.assign(Ve,{holder:{certNo:e.certNo,certType:e.certType,mobile:e.mobile,name:e.name,socialFlag:E.HAS},insured:{certNo:null==a?void 0:a[0].certNo,certType:null===(s=a[0])||void 0===s?void 0:s.certType,name:null===(v=a[0])||void 0===v?void 0:v.name,socialFlag:null===(m=a[0])||void 0===m||null===(p=m.extInfo)||void 0===p?void 0:p.hasSocialInsurance,relationToHolder:null===(f=a[0])||void 0===f?void 0:f.relationToHolder},paymentMethod:y.extraInfo.paymentMethod,paymentFrequency:y.extraInfo.paymentFrequency,renewalDK:y.extraInfo.renewalDK||"N"}),void(Be.canInsure=!0);Object.assign(Ve,{holder:{certNo:e.certNo,certType:e.certType,mobile:e.mobile,name:e.name,socialFlag:E.HAS},insured:{certNo:null==a?void 0:a[0].certNo,certType:null===(n=a[0])||void 0===n?void 0:n.certType,name:null===(r=a[0])||void 0===r?void 0:r.name,socialFlag:null===(o=a[0])||void 0===o||null===(l=o.extInfo)||void 0===l?void 0:l.hasSocialInsurance,relationToHolder:null===(i=a[0])||void 0===i?void 0:i.relationToHolder},paymentMethod:y.extraInfo.paymentMethod,paymentFrequency:y.extraInfo.paymentFrequency,renewalDK:y.extraInfo.renewalDK||"N"}),He.value=null===(d=a[0])||void 0===d||null===(u=d.tenantOrderProductList)||void 0===u||null===(c=u[0])||void 0===c?void 0:c.premium,t.orderStatus!==x.ACCEPT_POLICY&&t.orderStatus!==x.PAYMENT_SUCCESS||(Be.canUpgrade=!0,Ue.value=!1,qe.value=!0),t.orderStatus===x.PAYING&&(Ue.value=!0,setTimeout((()=>{ta()}),3e3))}};return u((()=>{_e.value=de,Re.value=de,Be.canInsure=!0,(async()=>{const e=K({productCode:ye,withInsureInfo:!0,tenantId:he}),a=M({productCode:ye});await Promise.all([e,a]).then((([e,a])=>{var t,n;"10000"===e.code&&(Le.value=e.data,document.title=(null===(t=e.data)||void 0===t?void 0:t.productFullName)||""),"10000"===a.code&&(Ve.packageProductList=((null===(n=a.data)||void 0===n?void 0:n.packageProductVOList)||[]).map((e=>({...e,value:q.UN_INSURE,disabled:!1}))),Oe.value=a.data)})),ge&&ta()})(),setTimeout((async()=>{Me=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=c("van-button"),n=c("van-config-provider"),r=s("dompurify-html");return v(),m(T,null,[p(n,{"theme-vars":I(X)},{default:f((()=>{var e,a,n,o,l,i,d;return[Ae.value.show?y((v(),m("div",ce,null,512)),[[r,Ae.value.html]]):h("",!0),g("div",se,[g("div",ve,[p(Z,{url:null===(e=Le.value)||void 0===e||null===(a=e.tenantProductInsureVO)||void 0===a?void 0:a.banner[0]},null,8,["url"]),p(ee,{"product-name":null===(n=Le.value)||void 0===n?void 0:n.productFullName,"product-desc":null===(o=Le.value)||void 0===o||null===(l=o.showConfigVO)||void 0===l?void 0:l.desc},null,8,["product-name","product-desc"])]),p(ae,{"show-service-config":"","guarantee-list":null===(i=Le.value)||void 0===i||null===(d=i.tenantProductInsureVO)||void 0===d?void 0:d.titleAndDescVOS},null,8,["guarantee-list"]),p(te,{detail:Le.value},{form:f((()=>[p(ne,{ref_key:"formRef",ref:De,"is-show-package":"",disable:!I(Be).showInsure,"form-auth":_e.value,"form-info":I(Ve),premium:He.value,"product-detail":Le.value,onOnReset:Je,onOnUpdate:We},null,8,["disable","form-auth","form-info","premium","product-detail"])])),_:1},8,["detail"]),g("div",me,[g("div",pe,[fe,g("span",null,w(He.value?"￥":"")+w(I(O)(He.value))+" "+w(He.value?I(Ve).paymentFrequency==I(U).YEAR?"元/年":"元/月":""),1)]),p(t,{type:"primary",class:"right",disabled:!(I(Be).canInsure||I(Be).canUpgrade),onClick:Ze},{default:f((()=>[N(w(I(Be).showInsure?"立即投保":"升级保障"),1)])),_:1},8,["disabled"])])]),I(ge)?h("",!0):(v(),b(re,{key:1,"product-detail":Le.value},null,8,["product-detail"])),p(oe,{"order-no":I(ge),"tenant-id":I(he),"is-show":qe.value,onOnConfirm:Ye,onOnClose:ze},null,8,["order-no","tenant-id","is-show"])]})),_:1},8,["theme-vars"]),p(le,{show:xe.value,"onUpdate:show":a[0]||(a[0]=e=>xe.value=e),"content-list":I(Ke),"active-index":0,onOnConfirmHealth:ea},null,8,["show","content-list"]),Ee.value?(v(),b(ue,{key:0,show:Ee.value,"onUpdate:show":a[1]||(a[1]=e=>Ee.value=e),"content-list":I($e),"active-index":je.value,text:"我已逐页阅读并确认告知内容","force-read-cound":2,onSubmit:aa},null,8,["show","content-list","active-index"])):h("",!0),p(ie,{"is-show":Ue.value},null,8,["is-show"])],64)}}}),[["__scopeId","data-v-8408dfd2"]]))}}}))}();
