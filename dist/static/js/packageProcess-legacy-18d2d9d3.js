!function(){var e=document.createElement("style");e.innerHTML=".page-internet-product-detail[data-v-a7c54330]{padding-bottom:2rem;background:#f1f5fc}.page-internet-product-detail .footer-button[data-v-a7c54330]{justify-content:space-between}.page-internet-product-detail .price[data-v-a7c54330]{color:#393d46;font-size:.45333rem;font-weight:400}.page-internet-product-detail .price span[data-v-a7c54330]{color:var(--van-primary-color);font-weight:700}.page-internet-product-detail .right[data-v-a7c54330]{width:3.73333rem;background:var(--van-primary-color);border-color:var(--van-primary-color)}\n",document.head.appendChild(e),System.register(["./vendor-legacy-da8f33fe.js","./index-legacy-b8536ecb.js","./order-legacy-470125e3.js","./infoCollection-legacy-b5e0bc8b.js","./trial-legacy-38bbc8f0.js","./product-legacy-81a3b053.js","./utils-legacy-0d4bf3b2.js","./theme-legacy-a8152f06.js","./auth-legacy-e384b777.js","./index-legacy-e0ea28cc.js","./utils-legacy-20e4723c.js","./trial-legacy-a6f62f24.js","./index-legacy-b9cfdc90.js","./bankCard-legacy-76e0cfe9.js","./phoneVerify-legacy-e6b0b1f5.js"],(function(e){"use strict";var a,n,t,r,o,l,i,d,u,c,s,v,m,p,y,f,h,g,I,w,b,N,C,T,F,k,D,O,L,H,P,S,E,x,A,j,q,U,M,V,R,_,B,K,$,Y,z,J,W,G,X,Q,Z,ee,ae,ne,te,re,oe,le,ie,de,ue;return{setters:[function(e){a=e.g,n=e.a9,t=e.O,r=e.E,o=e.M,l=e.y,i=e._,d=e.l,u=e.h,c=e.r,s=e.af,v=e.j,m=e.n,p=e.p,y=e.m,f=e.H,h=e.t,g=e.z,I=e.A,w=e.J,b=e.C,N=e.k,C=e.F,T=e.T,F=e.D,k=e.X},function(e){D=e._,O=e.C,L=e.a0,H=e.H,P=e.I,S=e.a1},function(e){E=e.a},function(e){x=e.S,A=e.R,j=e.f,q=e.I},function(e){U=e.p,M=e.i,V=e.s,R=e.g,_=e.u,B=e.a},function(e){K=e.p},function(e){$=e.a,Y=e.o,z=e.t,J=e.g,W=e.b,G=e.h},function(e){X=e.t},function(e){Q=e.d,Z=e.B,ee=e.D,ae=e.G,ne=e.S,te=e.H,re=e.P,oe=e.U,le=e._,ie=e.W,de=e.a},function(e){ue=e._},function(){},function(){},function(){},function(){},function(){}],execute:function(){const ce={key:0},se={class:"page-internet-product-detail"},ve={class:"info"},me={class:"footer-button"},pe={class:"price"},ye=b(" 总保费");e("default",D(a({setup(e){const a=n(),D=t(),{productCode:fe="BWYL2021",tenantId:he,orderNo:ge,phoneNo:Ie,agentCode:we="",saleChannelId:be,paymentMethod:Ne,certNo:Ce,name:Te,pageCode:Fe,from:ke}=D.query,De=r(),Oe=r(),Le=r(),He=r(),Pe="payBack"===Fe,Se=r(!1),Ee=r(!1),xe=r(!1),Ae=r(0),je=r(!1),qe=r(!1),Ue=r({show:!1,html:""});let Me="";const Ve=o({holder:{certNo:Ce,certType:O.CERT,mobile:Ie,name:Te,socialFlag:x.HAS},insured:{certNo:Ce,certType:O.CERT,name:Te,socialFlag:x.HAS,relationToHolder:A.SELF},paymentMethod:Ne,renewalDK:"Y",paymentFrequency:j.YEAR,packageProductList:[],mobileSmsCode:""}),Re=r(Q),_e=r(Q),Be=o({showInsure:!Pe,canInsure:!1,canUpgrade:!1}),Ke=l((()=>{var e,a;return(null===(e=Oe.value)||void 0===e||null===(a=e.tenantProductInsureVO)||void 0===a?void 0:a.attachmentVOList.filter((e=>"健康告知"===e.attachmentName)))||[]})),$e=l((()=>{var e,a;return(null===(e=Oe.value)||void 0===e||null===(a=e.tenantProductInsureVO)||void 0===a?void 0:a.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName)))||[]})),Ye=()=>{a.push({path:"/internet/guaranteeUpgrade",query:{...D.query,tenantId:he,productCode:"BWYL2022",orderNo:ge,agentCode:we}})},ze=()=>{qe.value=!1},Je=()=>{_e.value=Re.value},We=()=>{_e.value={..._e.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},Ge=e=>`${S}/internet/payFail?tenantId=${he}&orderNo=${e}&agentCode=${we}&pageCode=payBack&from=${ke||"normal"}`,Xe=async e=>{const a=W({tenantId:he,saleUserId:we,saleChannelId:be,detail:Oe.value,insureDetail:Le.value,paymentMethod:Ve.paymentMethod,paymentFrequency:Ve.paymentFrequency,renewalDK:Ve.renewalDK,iseeBizNo:Me,successJumpUrl:"",premium:He.value,holder:Ve.holder,insured:Ve.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:""});try{const e=await V(a),{code:t,data:r}=e;"10000"===t&&(async e=>{T.loading({message:"核保中...",forbidClick:!0});try{const a=await _(e),{code:n}=a;if("10000"===n){T.loading({message:"核保中...",forbidClick:!0});const a=await B({orderNo:e.orderNo,tenantId:he}),{data:n}=a;"10000"===a.code&&(2===n.type?(Ue.value={show:!0,html:n.paymentUrl},k((()=>{const e=document.getElementById("cashierSubmit");null==e||e.addEventListener("submit",(e=>{e.preventDefault()})),null==e||e.submit()}))):window.location.href=n.paymentUrl)}Be.canInsure=!0}catch(a){Be.canInsure=!0}})({...a,orderNo:r.data,extInfo:{extraInfo:{renewalDK:Ve.renewalDK,paymentMethod:Ve.paymentMethod,paymentFrequency:Ve.paymentFrequency,successJumpUrl:(n=r.data,`${S}/pay?orderNo=${n}&saleUserId=${we}&tenantId=${he}`),failUrl:Ge(r.data)},iseeBizNo:Me}})}catch(t){Be.canInsure=!0}var n},Qe=()=>new Promise(((e,a)=>{var n,t;null===(n=De.value)||void 0===n||null===(t=n.validateForm)||void 0===t||t.call(n).then((async()=>{var n;if(!(()=>{if(Ve.holder.certNo){const e=J(Ve.holder.certNo,"year"),a=P(Ve.holder.certNo);if(e<18)return T("投保人年龄必须大于18岁！"),!1;if(Ve.insured.certNo&&Ve.insured.relationToHolder===A.MATE&&a===P(Ve.insured.certNo))return T("被保人为配偶时，性别不可相同！"),!1}if(Ve.insured.certNo){const e=J(Ve.insured.certNo,"day"),a=J(Ve.insured.certNo,"year");if(Ve.insured.relationToHolder===A.CHILD&&e<30)return T("被保人为子女时，年龄必须大于等于30天！"),!1;if(Ve.insured.relationToHolder===A.PARENT&&a>=71)return T("被保人为父母时，年龄必须小于等于70岁！"),!1}if([A.CHILD,A.PARENT].includes(Ve.insured.relationToHolder)){const e=J(Ve.holder.certNo,"year"),a=J(Ve.insured.certNo,"year");if(Ve.insured.relationToHolder===A.CHILD&&e-a<18)return T("投保人和子女年龄必须相差18岁！"),!1;if(Ve.insured.relationToHolder===A.PARENT&&a-e<18)return T("投保人和父母年龄必须相差18岁！"),!1}return!0})())return void(Be.canInsure=!0);if(!((null===(n=De.value)||void 0===n?void 0:n.isAgreeFile)||Se.value))return Se.value=!1,xe.value=!0,t=0,Ae.value=t,void(xe.value=!0);var t;const{calcData:r,riskVOList:o}=$({holder:Ve.holder,insured:Ve.insured,tenantId:he,productDetail:Oe.value,insureDetail:Le.value,paymentFrequency:Ve.paymentFrequency,packageRiskIdList:Y(Ve.packageProductList)},!1,G);(!Array.isArray(o)||o.length<1)&&(T("被保人年龄需在30天(含) - 70岁(含)之间！"),He.value=null,a(new Error));const l=await U(r),{code:i,data:d}=l;"10000"===i?(He.value=d.premium,e({condition:o,data:d})):(He.value=null,a(new Error))})).catch((()=>{Be.canInsure=!0}))})),Ze=async()=>{if(Pe)Ye();else{Be.canInsure=!1;try{var e;const{condition:a,data:n}=await Qe(),t={},r=(e=[])=>{(e||[]).forEach((e=>{var a;t[e.riskCode]=e,null!==(a=e.riskPremiumDetailVOList)&&void 0!==a&&a.length&&r(e.riskPremiumDetailVOList)}))};r(n.riskPremiumDetailVOList);const o=z({tenantId:he,riskList:a,riskPremium:t,productId:null===(e=Oe.value)||void 0===e?void 0:e.id});Xe(o)}catch(a){Be.canInsure=!0}}},ea=e=>{"allFalse"===e?(Ee.value=!1,Se.value=!0,Ze(),Be.canInsure=!0):F.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()})).catch((()=>{var e;null===(e=De.value)||void 0===e||e.reEditForm(),Se.value=!1,Be.canInsure=!0}))},aa=()=>{var e;null===(e=De.value)||void 0===e||e.reEditForm(),Se.value=!1,Be.canInsure=!0},na=()=>{Ee.value=!1,aa()},ta=()=>{xe.value=!1,aa()},ra=()=>{xe.value=!1,Ee.value=!0};i([()=>Ve.insured.certNo,()=>Ve.insured.socialFlag,()=>Ve.packageProductList,()=>Ve.paymentFrequency],d.exports.debounce((()=>{Ve.insured.certNo&&Ve.insured.socialFlag&&(()=>{const{holder:{certNo:e,mobile:a,name:n,socialFlag:t},insured:{certNo:r,name:o,socialFlag:l,relationToHolder:i},paymentMethod:d}=Ve;return!(!H(r)||!l)})()&&(async()=>{const{calcData:e,riskVOList:a}=$({holder:Ve.holder,insured:Ve.insured,tenantId:he,productDetail:Oe.value,insureDetail:Le.value,paymentFrequency:Ve.paymentFrequency,packageRiskIdList:Y(Ve.packageProductList)},!1,G);if(!Array.isArray(a)||a.length<1)return T("被保人年龄需在30天(含) - 70岁(含)之间！"),He.value=null,{};const n=await U(e),{code:t,data:r}=n;"10000"===t?He.value=r.premium:He.value=null})()}),500),{deep:!0,immediate:!0});const oa=async()=>{const e=await R({orderNo:ge,tenantId:he}),{code:a,data:n}=e;if("10000"===a){var t,r,o,l,i,d,u,c;const{tenantOrderHolder:e,tenantOrderInsuredList:a,extInfo:f}=n;var s,v,m,p,y;if(!Pe)return Object.assign(Ve,{holder:{certNo:e.certNo,certType:e.certType,mobile:e.mobile,name:e.name,socialFlag:x.HAS},insured:{certNo:null==a?void 0:a[0].certNo,certType:null===(s=a[0])||void 0===s?void 0:s.certType,name:null===(v=a[0])||void 0===v?void 0:v.name,socialFlag:null===(m=a[0])||void 0===m||null===(p=m.extInfo)||void 0===p?void 0:p.hasSocialInsurance,relationToHolder:null===(y=a[0])||void 0===y?void 0:y.relationToHolder},paymentMethod:f.extraInfo.paymentMethod,paymentFrequency:f.extraInfo.paymentFrequency,renewalDK:f.extraInfo.renewalDK||"N"}),void(Be.canInsure=!0);Object.assign(Ve,{holder:{certNo:e.certNo,certType:e.certType,mobile:e.mobile,name:e.name,socialFlag:x.HAS},insured:{certNo:null==a?void 0:a[0].certNo,certType:null===(t=a[0])||void 0===t?void 0:t.certType,name:null===(r=a[0])||void 0===r?void 0:r.name,socialFlag:null===(o=a[0])||void 0===o||null===(l=o.extInfo)||void 0===l?void 0:l.hasSocialInsurance,relationToHolder:null===(i=a[0])||void 0===i?void 0:i.relationToHolder},paymentMethod:f.extraInfo.paymentMethod,paymentFrequency:f.extraInfo.paymentFrequency,renewalDK:f.extraInfo.renewalDK||"N"}),He.value=null===(d=a[0])||void 0===d||null===(u=d.tenantOrderProductList)||void 0===u||null===(c=u[0])||void 0===c?void 0:c.premium,n.orderStatus!==E.ACCEPT_POLICY&&n.orderStatus!==E.PAYMENT_SUCCESS||(Be.canUpgrade=!0,je.value=!1,qe.value=!0),n.orderStatus===E.PAYING&&(je.value=!0,setTimeout((()=>{oa()}),3e3))}};return u((()=>{_e.value=de,Re.value=de,Be.canInsure=!0,(async()=>{const e=K({productCode:fe,withInsureInfo:!0,tenantId:he}),a=M({productCode:fe});await Promise.all([e,a]).then((([e,a])=>{var n,t;"10000"===e.code&&(Oe.value=e.data,document.title=(null===(n=e.data)||void 0===n?void 0:n.productFullName)||""),"10000"===a.code&&(Ve.packageProductList=((null===(t=a.data)||void 0===t?void 0:t.packageProductVOList)||[]).map((e=>({...e,value:q.UN_INSURE,disabled:!1}))),Le.value=a.data)})),ge&&oa()})(),setTimeout((async()=>{Me=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const n=c("van-button"),t=c("van-config-provider"),r=s("dompurify-html");return v(),m(C,null,[p(t,{"theme-vars":I(X)},{default:y((()=>{var e,a,t,o,l,i,d;return[Ue.value.show?f((v(),m("div",ce,null,512)),[[r,Ue.value.html]]):h("",!0),g("div",se,[g("div",ve,[p(Z,{url:null===(e=Oe.value)||void 0===e||null===(a=e.tenantProductInsureVO)||void 0===a?void 0:a.banner[0]},null,8,["url"]),p(ee,{"product-name":null===(t=Oe.value)||void 0===t?void 0:t.productFullName,"product-desc":null===(o=Oe.value)||void 0===o||null===(l=o.showConfigVO)||void 0===l?void 0:l.desc},null,8,["product-name","product-desc"])]),p(ae,{"show-service-config":"","guarantee-list":null===(i=Oe.value)||void 0===i||null===(d=i.tenantProductInsureVO)||void 0===d?void 0:d.titleAndDescVOS},null,8,["guarantee-list"]),p(ne,{detail:Oe.value},{form:y((()=>[p(te,{ref_key:"formRef",ref:De,"is-show-package":"",disable:!I(Be).showInsure,"form-auth":_e.value,"form-info":I(Ve),"product-detail":Oe.value,onOnReset:Je,onOnUpdate:We},null,8,["disable","form-auth","form-info","product-detail"])])),_:1},8,["detail"]),g("div",me,[g("div",pe,[ye,g("span",null,w(He.value?"￥":"")+w(I(L)(He.value))+" "+w(He.value?I(Ve).paymentFrequency==I(j).YEAR?"元/年":"元/月":""),1)]),p(n,{type:"primary",class:"right",disabled:!(I(Be).canInsure||I(Be).canUpgrade),onClick:Ze},{default:y((()=>[b(w(I(Be).showInsure?"立即投保":"升级保障"),1)])),_:1},8,["disabled"])])]),I(ge)?h("",!0):(v(),N(re,{key:1,"product-detail":Oe.value},null,8,["product-detail"])),p(oe,{"order-no":I(ge),"tenant-id":I(he),"is-show":qe.value,onOnConfirm:Ye,onOnClose:ze},null,8,["order-no","tenant-id","is-show"])]})),_:1},8,["theme-vars"]),p(le,{show:Ee.value,"onUpdate:show":a[0]||(a[0]=e=>Ee.value=e),"content-list":I(Ke),"active-index":0,onOnConfirmHealth:ea,onOnCloseHealth:na},null,8,["show","content-list"]),xe.value?(v(),N(ue,{key:0,show:xe.value,"onUpdate:show":a[1]||(a[1]=e=>xe.value=e),"content-list":I($e),"active-index":Ae.value,text:"我已逐页阅读并确认告知内容","force-read-cound":2,"on-close-file-preview":"",onSubmit:ra,onOnCloseFilePreview:ta},null,8,["show","content-list","active-index"])):h("",!0),p(ie,{"is-show":je.value},null,8,["is-show"])],64)}}}),[["__scopeId","data-v-a7c54330"]]))}}}))}();
