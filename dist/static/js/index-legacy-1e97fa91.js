!function(){var e=document.createElement("style");e.innerHTML=".page-internet-product-detail[data-v-41d8b56b]{padding-bottom:2rem;background:#f1f5fc}.page-internet-product-detail .footer-button[data-v-41d8b56b]{justify-content:space-between}.page-internet-product-detail .price[data-v-41d8b56b]{color:#393d46;font-size:.45333rem;font-weight:400;display:flex;align-items:center}.page-internet-product-detail .price span[data-v-41d8b56b]{color:var(--van-primary-color);font-weight:700}.page-internet-product-detail .price .premium-loading[data-v-41d8b56b]{display:inline-block;line-height:.69333rem;margin-left:.4rem}.page-internet-product-detail .price .premium-loading[data-v-41d8b56b] .van-loading__spinner{width:.45333rem!important;height:.45333rem!important}.page-internet-product-detail .right[data-v-41d8b56b]{width:3.73333rem;background:var(--van-primary-color);border-color:var(--van-primary-color)}\n",document.head.appendChild(e),System.register(["./vendor-legacy-817753c8.js","./index-legacy-9a05febd.js","./order-legacy-274d40d5.js","./infoCollection-legacy-98efcb0e.js","./trial-legacy-9ca91fd1.js","./product-legacy-22405496.js","./utils-legacy-2670b26a.js","./utils-legacy-5180678e.js","./theme-legacy-a8152f06.js","./auth-legacy-4bf965e2.js","./index-legacy-de04da50.js","./trial-legacy-7ed2836d.js","./check-detail-legacy-522653d7.js","./index-legacy-7be12802.js","./bankCard-legacy-4152c830.js","./validator-legacy-a73d3dda.js","./phoneVerify-legacy-b071fe7a.js","./close-legacy-d9c2a5df.js"],(function(e){"use strict";var n,a,t,r,o,l,i,d,u,c,s,v,m,p,y,f,h,g,I,b,N,w,C,T,D,O,F,k,H,P,S,j,x,L,V,$,A,E,q,B,U,M,_,R,K,Y,z,J,W,G,Q,X,Z,ee,ne,ae,te,re,oe,le,ie,de,ue,ce,se;return{setters:[function(e){n=e.h,a=e.aa,t=e.P,r=e.G,o=e.N,l=e.z,i=e.$,d=e.l,u=e.j,c=e.r,s=e.ag,v=e.k,m=e.p,p=e.s,y=e.n,f=e.I,h=e.v,g=e.A,I=e.m,b=e.B,N=e.L,w=e.E,C=e.F,T=e.T,D=e.D,O=e.Y},function(e){F=e._,k=e.C,H=e.I,P=e.a1,S=e.J,j=e.a4},function(e){x=e.a},function(e){L=e.f,V=e.R,$=e.g},function(e){A=e.p,E=e.i,q=e.s,B=e.a,U=e.u,M=e.b},function(e){_=e.p},function(e){R=e.g,K=e.s,Y=e.t,z=e.v,J=e.a,W=e.b},function(e){G=e.f,Q=e.a},function(e){X=e.t},function(e){Z=e.d,ee=e.B,ne=e.D,ae=e.G,te=e.S,re=e.H,oe=e.P,le=e.U,ie=e._,de=e.W,ue=e.p,ce=e.a},function(e){se=e._},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const ve={key:0},me={class:"page-internet-product-detail"},pe={class:"info"},ye={class:"footer-button"},fe={class:"price"},he=w(" 总保费"),ge={key:0};e("default",F(n({setup(e){const n=a(),F=t(),{productCode:Ie="BWYL2021",tenantId:be,orderNo:Ne,phoneNo:we,agentCode:Ce="",saleChannelId:Te,paymentMethod:De,certNo:Oe,name:Fe,pageCode:ke,upgradeCode:He,from:Pe}=F.query,Se=r(),je=r(),xe=r(),Le=r(),Ve="payBack"===ke,$e=r(!1),Ae=r(!1),Ee=r(!1),qe=r(0),Be=r(!1),Ue=r(!1),Me=r({show:!1,html:""}),_e=r(!1),Re=r();let Ke="";const Ye=o({holder:{certNo:Oe,certType:k.CERT,mobile:we,name:Fe,socialFlag:L.HAS},insured:{certNo:Oe,certType:k.CERT,name:Fe,socialFlag:L.HAS,relationToHolder:V.SELF},paymentMethod:De,renewalDK:"Y",paymentFrequency:$.MONTH}),ze=r(Z),Je=r(Z),We=o({showInsure:!Ve,canInsure:!1,canUpgrade:!1}),Ge=l((()=>{var e,n;return(null===(e=je.value)||void 0===e||null===(n=e.tenantProductInsureVO)||void 0===n?void 0:n.attachmentVOList.filter((e=>"健康告知"===e.attachmentName)))||[]})),Qe=l((()=>{var e,n,a,t,r,o,l,i;return[...(null===(e=je.value)||void 0===e||null===(n=e.tenantProductInsureVO)||void 0===n?void 0:n.titleAndDescVOS)||[],{desc:`出生${G(null===(a=je.value)||void 0===a||null===(t=a.tenantProductInsureVO)||void 0===t?void 0:t.holderAgeLimit)}`,title:"投保年龄",noDetail:!0},{desc:Q(null===(r=je.value)||void 0===r||null===(o=r.tenantProductInsureVO)||void 0===o?void 0:o.insurancePeriodValues),title:"保障期限",noDetail:!0},{desc:`${null===(l=je.value)||void 0===l||null===(i=l.tenantProductInsureVO)||void 0===i?void 0:i.waitPeriod}天，上一张保单期满后指定期限内重新投保、因遭受意外伤害导致的医疗无等待期`,title:"等待期",noDetail:!0}]})),Xe=l((()=>{var e,n;return(null===(e=je.value)||void 0===e||null===(n=e.tenantProductInsureVO)||void 0===n?void 0:n.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName)))||[]})),Ze=()=>{if(Ye.holder.certNo){const e=S(Ye.holder.certNo);if(z(Ye.holder.certNo,18,"year"))return T("投保人年龄必须大于等于18岁！"),!1;if(Ye.insured.certNo&&Ye.insured.relationToHolder===V.MATE){if(e===S(Ye.insured.certNo))return T("被保人为配偶时，性别不可相同！"),!1}}if(Ye.insured.certNo){if(Ye.insured.relationToHolder===V.CHILD&&z(Ye.insured.certNo,30,"day"))return T("被保人为子女时，年龄必须大于等于30天！"),!1;if(Ye.insured.relationToHolder===V.PARENT&&!z(Ye.insured.certNo,71,"year"))return T("被保人为父母时，年龄必须小于等于70岁！"),!1}if([V.CHILD,V.PARENT].includes(Ye.insured.relationToHolder)){const e=J(Ye.holder.certNo,"year"),n=J(Ye.insured.certNo,"year");if(Ye.insured.relationToHolder===V.CHILD&&e-n<18)return T("投保人和子女年龄必须相差18岁！"),!1;if(Ye.insured.relationToHolder===V.PARENT&&n-e<18)return T("投保人和父母年龄必须相差18岁！"),!1}return!0},en=()=>{n.push({path:"/internet/guaranteeUpgrade",query:{...F.query,tenantId:be,productCode:"BWYL2022",orderNo:Ne,agentCode:Ce}})},nn=()=>{Ue.value=!1,n.replace(`/pay?orderNo=${Ne}&saleUserId=${Ce}&tenantId=${be}`)},an=()=>{Je.value=ze.value},tn=()=>{Je.value={...Je.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},rn=e=>{var n,a;const t=JSON.parse(null===(n=xe.value)||void 0===n||null===(a=n.productBasicInfoVO)||void 0===a?void 0:a.extInfo);let r="";1===t.endorsementFlag&&(r=`&upgradeCode=${t.endorsementCode}`);return`${j}/internet/productDetail?tenantId=${be}&productCode=${Ie}&orderNo=${e}&agentCode=${Ce}&pageCode=payBack${r}&from=${Pe||"normal"}`},on=async e=>{const n=W({tenantId:be,saleUserId:Ce,saleChannelId:Te,detail:je.value,insureDetail:xe.value,paymentMethod:Ye.paymentMethod,renewalDK:Ye.renewalDK,iseeBizNo:Ke,successJumpUrl:"",premium:Le.value,holder:Ye.holder,insured:Ye.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:"",orderNo:Ne,originOrderIds:Re.value});try{const e=await q(n),{code:t,data:r}=e;"10000"===t&&(async e=>{T.loading({message:"核保中...",forbidClick:!0,duration:0});try{const n=await U(e),{code:a}=n;if("10000"===a){const n=await M({orderNo:e.orderNo,tenantId:be}),{data:a}=n;"10000"===n.code&&(2===a.type?(Me.value={show:!0,html:a.paymentUrl},O((()=>{const e=document.getElementById("cashierSubmit");null==e||e.addEventListener("submit",(e=>{e.preventDefault()})),null==e||e.submit()}))):window.location.href=a.paymentUrl)}We.canInsure=!0}catch(n){We.canInsure=!0}finally{T.clear()}})({...n,orderNo:r.data,extInfo:{extraInfo:{renewalDK:Ye.renewalDK,paymentMethod:Ye.paymentMethod,paymentFrequency:Ye.paymentFrequency,successJumpUrl:rn(r.data),failUrl:(a=r.data,`${j}/internet/payFail?tenantId=${be}&orderNo=${a}&agentCode=${Ce}&pageCode=payBack&from=${Pe||"normal"}`)},iseeBizNo:Ke}})}catch(t){We.canInsure=!0}var a},ln=async()=>{if(Ve)en();else{We.canInsure=!1;try{var e;const{condition:n,data:a}=await new Promise(((e,n)=>{var a,t;null===(a=Se.value)||void 0===a||null===(t=a.validateForm)||void 0===t||t.call(a).then((async()=>{if(!Ze())return void n(new Error);const{calcData:a,riskVOList:t}=R({holder:Ye.holder,insured:Ye.insured,tenantId:be,paymentFrequency:Ye.paymentFrequency,productDetail:je.value,insureDetail:xe.value},!0),r=await A(a),{code:o,data:l}=r;"10000"===o?(Le.value=l.premium,e({condition:t,data:l})):n(new Error)})).catch((e=>{We.canInsure=!0,K(e)}))})),t={},r=(e=[])=>{(e||[]).forEach((e=>{var n;t[e.riskCode]=e,null!==(n=e.riskPremiumDetailVOList)&&void 0!==n&&n.length&&r(e.riskPremiumDetailVOList)}))};r(a.riskPremiumDetailVOList);const o=Y({tenantId:be,riskList:n,riskPremium:t,productId:null===(e=je.value)||void 0===e?void 0:e.id});on(o)}catch(n){We.canInsure=!0}}},dn=e=>{"allFalse"===e?(Ae.value=!1,ln(),We.canInsure=!0):D.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()}))},un=()=>{$e.value=!0,Ee.value=!1,Ae.value=!0};i([()=>Ye.insured.certNo,()=>Ye.insured.socialFlag],d.exports.debounce((()=>{Ye.insured.certNo&&Ye.insured.socialFlag&&"payBack"!==ke&&(()=>{const{holder:{certNo:e,mobile:n,name:a,socialFlag:t},insured:{certNo:r,name:o,socialFlag:l,relationToHolder:i},paymentMethod:d}=Ye;return H(r)&&!!l})()&&(async()=>{if(We.canInsure=!0,!Ze())return{};const{calcData:e,riskVOList:n}=R({holder:Ye.holder,insured:Ye.insured,tenantId:be,paymentFrequency:Ye.paymentFrequency,productDetail:je.value,insureDetail:xe.value},!0);if(!Array.isArray(n)||n.length<1)return T("被保人年龄需在30天(含) - 70岁(含)之间！"),Le.value=null,{};_e.value=!0;const a=await A(e);_e.value=!1;const{code:t,data:r}=a;"10000"===t&&(Ye.insured.certNo?Le.value=r.premium:Le.value=null)})()}),500),{deep:!0,immediate:!0}),i((()=>Ye.insured.certNo),(()=>{Ye.insured.certNo||(Le.value=null)}));const cn=async()=>{const e=await B({orderNo:Ne,tenantId:be}),{code:n,data:a}=e;if("10000"===n){var t,r,o,l,i,d,u,c;const{id:e,tenantOrderHolder:n,tenantOrderInsuredList:f,extInfo:h}=a;var s,v,m,p,y;if(!Ve)return Re.value={id:e,holderId:null==n?void 0:n.id,insuredId:null==f?void 0:f[0].id},Object.assign(Ye,{holder:{certNo:n.certNo,certType:n.certType,mobile:n.mobile,name:n.name,socialFlag:L.HAS},insured:{certNo:null==f?void 0:f[0].certNo,certType:null===(s=f[0])||void 0===s?void 0:s.certType,name:null===(v=f[0])||void 0===v?void 0:v.name,socialFlag:null===(m=f[0])||void 0===m||null===(p=m.extInfo)||void 0===p?void 0:p.hasSocialInsurance,relationToHolder:null===(y=f[0])||void 0===y?void 0:y.relationToHolder},paymentMethod:h.extraInfo.paymentMethod,paymentFrequency:h.extraInfo.paymentFrequency,renewalDK:"Y"}),void(We.canInsure=!0);Object.assign(Ye,{holder:{certNo:n.certNo,certType:n.certType,mobile:n.mobile,name:n.name,socialFlag:L.HAS},insured:{certNo:null==f?void 0:f[0].certNo,certType:null===(t=f[0])||void 0===t?void 0:t.certType,name:null===(r=f[0])||void 0===r?void 0:r.name,socialFlag:null===(o=f[0])||void 0===o||null===(l=o.extInfo)||void 0===l?void 0:l.hasSocialInsurance,relationToHolder:null===(i=f[0])||void 0===i?void 0:i.relationToHolder},paymentMethod:h.extraInfo.paymentMethod,paymentFrequency:h.extraInfo.paymentFrequency,renewalDK:h.extraInfo.renewalDK||"N"}),Le.value=null===(d=f[0])||void 0===d||null===(u=d.tenantOrderProductList)||void 0===u||null===(c=u[0])||void 0===c?void 0:c.premium,a.orderStatus!==x.ACCEPT_POLICY&&a.orderStatus!==x.PAYMENT_SUCCESS||(We.canUpgrade=!0,Be.value=!1,Ue.value=!0),a.orderStatus===x.PAYING&&(Be.value=!0,setTimeout((()=>{cn()}),3e3))}};return u((()=>{Ve?(Je.value=ue,ze.value=ue):Ne?(Je.value={...ce,paymentFrequencyDisable:!0},ze.value=ce,We.canInsure=!0):we||Ne||(Je.value={...ce,paymentFrequencyDisable:!0},ze.value=ce,We.canInsure=!0),(async()=>{const e=await _({productCode:Ie,withInsureInfo:!0,tenantId:be});var n;"10000"===e.code&&(je.value=e.data,document.title=(null===(n=e.data)||void 0===n?void 0:n.productFullName)||"");const a=await E({productCode:Ie});"10000"===a.code&&(xe.value=a.data),Ne&&cn()})(),setTimeout((async()=>{Ke=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,n)=>{const a=c("van-loading"),t=c("van-button"),r=c("van-config-provider"),o=s("dompurify-html");return v(),m(C,null,[p(r,{"theme-vars":b(X)},{default:y((()=>{var e,n,r,l,i,d,u;return[Me.value.show?f((v(),m("div",ve,null,512)),[[o,Me.value.html]]):h("",!0),g("div",me,[g("div",pe,[p(ee,{url:null===(e=je.value)||void 0===e||null===(n=e.tenantProductInsureVO)||void 0===n?void 0:n.banner[0]},null,8,["url"]),p(ne,{"product-name":null===(r=je.value)||void 0===r?void 0:r.productFullName,"product-desc":null===(l=je.value)||void 0===l||null===(i=l.showConfigVO)||void 0===i?void 0:i.desc},null,8,["product-name","product-desc"])]),null!==(d=je.value)&&void 0!==d&&null!==(u=d.tenantProductInsureVO)&&void 0!==u&&u.titleAndDescVOS?(v(),I(ae,{key:0,"img-type":"BW","guarantee-list":b(Qe)},null,8,["guarantee-list"])):h("",!0),p(te,{detail:je.value},{form:y((()=>[p(re,{ref_key:"formRef",ref:Se,disable:!b(We).showInsure,"form-auth":Je.value,"form-info":b(Ye),premium:Le.value,"product-detail":je.value,payments:[1],"payment-method":[0],onOnReset:an,onOnUpdate:tn},null,8,["disable","form-auth","form-info","premium","product-detail"])])),_:1},8,["detail"]),g("div",ye,[g("div",fe,[he,_e.value?(v(),I(a,{key:1,class:"premium-loading",type:"spinner"})):(v(),m("span",ge,N(Le.value?"￥":"")+N(b(P)(Le.value))+N(Le.value?"元/月":""),1))]),p(t,{type:"primary",class:"right",disabled:!(b(We).canInsure||b(We).canUpgrade),onClick:ln},{default:y((()=>[w(N(b(We).showInsure?"立即投保":"升级保障"),1)])),_:1},8,["disabled"])])]),b(Ne)?h("",!0):(v(),I(oe,{key:1,"product-detail":je.value},null,8,["product-detail"])),p(le,{"order-no":b(Ne),"tenant-id":b(be),"upgrade-code":b(He),"is-show":Ue.value,onOnConfirm:en,onOnClose:nn},null,8,["order-no","tenant-id","upgrade-code","is-show"])]})),_:1},8,["theme-vars"]),p(ie,{show:Ae.value,"onUpdate:show":n[0]||(n[0]=e=>Ae.value=e),"content-list":b(Ge),"active-index":0,onOnConfirmHealth:dn},null,8,["show","content-list"]),Ee.value?(v(),I(se,{key:0,show:Ee.value,"onUpdate:show":n[1]||(n[1]=e=>Ee.value=e),"content-list":b(Xe),"active-index":qe.value,text:"我已逐页阅读并确认告知内容",onSubmit:un},null,8,["show","content-list","active-index"])):h("",!0),p(de,{"is-show":Be.value},null,8,["is-show"])],64)}}}),[["__scopeId","data-v-41d8b56b"]]))}}}))}();
