!function(){var e=document.createElement("style");e.innerHTML=".page-internet-product-detail[data-v-d34381a8]{padding-bottom:2rem;background:#f1f5fc}.page-internet-product-detail .footer-button[data-v-d34381a8]{justify-content:space-between}.page-internet-product-detail .price[data-v-d34381a8]{color:#393d46;font-size:.45333rem;font-weight:400}.page-internet-product-detail .price span[data-v-d34381a8]{color:var(--van-primary-color);font-weight:700}.page-internet-product-detail .right[data-v-d34381a8]{width:3.73333rem;background:var(--van-primary-color);border-color:var(--van-primary-color)}\n",document.head.appendChild(e),System.register(["./vendor-legacy-7dc0cbaa.js","./trial-legacy-082d2c50.js","./index-legacy-82e0c3e8.js","./index-legacy-71d031cd.js","./utils-legacy-4e054bdd.js","./theme-legacy-820cb27c.js","./order-legacy-3a934a82.js","./infoCollection-legacy-30f95076.js","./index-legacy-197c2d35.js","./relativeTime-legacy-9ee3df28.js","./useDicData-legacy-9c0f7867.js","./trial-legacy-e313c53c.js"],(function(e){"use strict";var t,a,n,r,o,i,c,d,l,s,u,m,p,y,f,v,h,g,I,N,w,T,F,C,b,L,k,D,H,O,P,x,E,S,A,j,q,R,B,M,U,_,V,$,K,Y,z,J,G;return{setters:[function(e){t=e.h,a=e.aa,n=e.P,r=e.r,o=e.N,i=e.A,c=e.$,d=e.l,l=e.j,s=e.k,u=e.m,m=e.s,p=e.t,y=e.p,f=e.B,v=e.C,h=e.n,g=e.x,I=e.F,N=e.G,w=e.D,T=e.T,F=e.Y},function(e){C=e.p,b=e.i,L=e.g,k=e.s,D=e.u,H=e.a},function(e){O=e._},function(e){P=e._,x=e.C,E=e.I,S=e.J,A=e.a4},function(e){j=e.g,q=e.o,R=e.v,B=e.t,M=e.a,U=e.b},function(e){_=e.u},function(e){V=e.a},function(e){$=e.S,K=e.R,Y=e.g,z=e.I},function(e){J=e._,G=e.a},function(){},function(){},function(){}],execute:function(){const W={class:"footer-button"},Q=N("分享用户确认投保"),X=t({setup(e){const t=_(),N=a(),P=n(),{productCode:X="03O4",tenantId:Z="0",orderNo:ee,phoneNo:te,agentCode:ae="",saleChannelId:ne,paymentMethod:re,certNo:oe,name:ie,pageCode:ce,from:de}=P.query,le=r(),se=r({tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),ue=r(),me=r(),pe=r({}),ye="payBack"===ce,fe=r(!1),ve=r(!1),he=r(!1),ge=r(0),Ie=r(!1),Ne=r(!1),we=r({show:!1,html:""});let Te="";const Fe=o({holder:{certNo:oe,certType:x.CERT,mobile:te,name:ie,socialFlag:$.HAS},insured:{certNo:oe,certType:x.CERT,name:ie,socialFlag:$.HAS,relationToHolder:K.SELF},paymentMethod:re,renewalDK:"Y",paymentFrequency:Y.YEAR,packageProductList:[],mobileSmsCode:""}),Ce=()=>{le.value&&le.value.validateForm().then((e=>{}))},be=i((()=>se.value?.tenantProductInsureVO?.attachmentVOList.filter((e=>"健康告知"===e.attachmentName))||[])),Le=i((()=>se.value?.tenantProductInsureVO?.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName))||[])),ke=e=>`${A}/internet/payFail?tenantId=${Z}&orderNo=${e}&agentCode=${ae}&pageCode=payBack&from=${de||"normal"}`,De=async e=>{const t=M({tenantId:Z,saleUserId:ae,saleChannelId:ne,detail:se.value,insureDetail:ue.value,paymentMethod:Fe.paymentMethod,paymentFrequency:Fe.paymentFrequency,renewalDK:Fe.renewalDK,iseeBizNo:Te,successJumpUrl:"",premium:me.value,holder:Fe.holder,insured:Fe.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:""});try{const e=await k(t),{code:n,data:r}=e;"10000"===n&&(async e=>{T.loading({message:"核保中...",forbidClick:!0});try{const t=await D(e),{code:a}=t;if("10000"===a){T.loading({message:"核保中...",forbidClick:!0});const t=await H({orderNo:e.orderNo,tenantId:Z}),{data:a}=t;"10000"===t.code&&(2===a.type?(we.value={show:!0,html:a.paymentUrl},F((()=>{const e=document.getElementById("cashierSubmit");e?.addEventListener("submit",(e=>{e.preventDefault()})),e?.submit()}))):window.location.href=a.paymentUrl)}}catch(t){}})({...t,orderNo:r.data,extInfo:{extraInfo:{renewalDK:Fe.renewalDK,paymentMethod:Fe.paymentMethod,paymentFrequency:Fe.paymentFrequency,successJumpUrl:(a=r.data,`${A}/pay?orderNo=${a}&saleUserId=${ae}&tenantId=${Z}`),failUrl:ke(r.data)},iseeBizNo:Te}})}catch(n){}var a},He=()=>new Promise(((e,t)=>{le.value?.validateForm?.().then((async()=>{if(!(()=>{if(Fe.holder.certNo){const e=U(Fe.holder.certNo,"year"),t=S(Fe.holder.certNo);if(e<18)return T("投保人年龄必须大于18岁！"),!1;if(Fe.insured.certNo&&Fe.insured.relationToHolder===K.MATE&&t===S(Fe.insured.certNo))return T("被保人为配偶时，性别不可相同！"),!1}if(Fe.insured.certNo){const e=U(Fe.insured.certNo,"day"),t=U(Fe.insured.certNo,"year");if(Fe.insured.relationToHolder===K.CHILD&&e<30)return T("被保人为子女时，年龄必须大于等于30天！"),!1;if(Fe.insured.relationToHolder===K.PARENT&&t>=71)return T("被保人为父母时，年龄必须小于等于70岁！"),!1}if([K.CHILD,K.PARENT].includes(Fe.insured.relationToHolder)){const e=U(Fe.holder.certNo,"year"),t=U(Fe.insured.certNo,"year");if(Fe.insured.relationToHolder===K.CHILD&&e-t<18)return T("投保人和子女年龄必须相差18岁！"),!1;if(Fe.insured.relationToHolder===K.PARENT&&t-e<18)return T("投保人和父母年龄必须相差18岁！"),!1}return!0})())return;if(!(le.value?.isAgreeFile||fe.value))return fe.value=!1,he.value=!0,void(e=>{ge.value=e,he.value=!0})(0);const{calcData:a,riskVOList:n}=j({holder:Fe.holder,insured:Fe.insured,tenantId:Z,productDetail:se.value,insureDetail:ue.value,paymentFrequency:Fe.paymentFrequency,packageRiskIdList:q(Fe.packageProductList)},!1,R);(!Array.isArray(n)||n.length<1)&&(me.value=null,t(new Error));const r=await C(a),{code:o,data:i}=r;"10000"===o?(me.value=i.premium,e({condition:n,data:i})):(me.value=null,t(new Error))})).catch((()=>{}))})),Oe=async()=>{if(ye)N.push({path:"/internet/guaranteeUpgrade",query:{...P.query,tenantId:Z,productCode:"BWYL2022",orderNo:ee,agentCode:ae}});else try{const{condition:e,data:t}=await He(),a={},n=(e=[])=>{(e||[]).forEach((e=>{a[e.riskCode]=e,e.riskPremiumDetailVOList?.length&&n(e.riskPremiumDetailVOList)}))};n(t.riskPremiumDetailVOList);const r=B({tenantId:Z,riskList:e,riskPremium:a,productId:se.value?.id});De(r)}catch(e){}},Pe=e=>{"allFalse"===e?(ve.value=!1,fe.value=!0,Oe()):w.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()})).catch((()=>{le.value?.reEditForm(),fe.value=!1}))},xe=()=>{le.value?.reEditForm(),fe.value=!1},Ee=()=>{ve.value=!1,xe()},Se=()=>{he.value=!1,xe()},Ae=()=>{he.value=!1,ve.value=!0};c((()=>se.value),(()=>{}),{deep:!0}),c([()=>Fe.insured.certNo,()=>Fe.insured.socialFlag,()=>Fe.packageProductList,()=>Fe.paymentFrequency],d.exports.debounce((()=>{Fe.insured.certNo&&Fe.insured.socialFlag&&(()=>{const{holder:{certNo:e,mobile:t,name:a,socialFlag:n},insured:{certNo:r,name:o,socialFlag:i,relationToHolder:c},paymentMethod:d}=Fe;return!(!E(r)||!i)})()&&(async()=>{const{calcData:e,riskVOList:t}=j({holder:Fe.holder,insured:Fe.insured,tenantId:Z,productDetail:se.value,insureDetail:ue.value,paymentFrequency:Fe.paymentFrequency,packageRiskIdList:q(Fe.packageProductList)},!1,R);if(!Array.isArray(t)||t.length<1)return me.value=null,{};const a=await C(e),{code:n,data:r}=a;"10000"===n?me.value=r.premium:me.value=null})()}),500),{deep:!0,immediate:!0});const je=async()=>{const e=await L({orderNo:ee,tenantId:Z}),{code:t,data:a}=e;if("10000"===t){const{tenantOrderHolder:e,tenantOrderInsuredList:t,extInfo:n}=a;if(!ye)return void Object.assign(Fe,{holder:{certNo:e.certNo,certType:e.certType,mobile:e.mobile,name:e.name,socialFlag:$.HAS},insured:{certNo:t?.[0].certNo,certType:t[0]?.certType,name:t[0]?.name,socialFlag:t[0]?.extInfo?.hasSocialInsurance,relationToHolder:t[0]?.relationToHolder},paymentMethod:n.extraInfo.paymentMethod,paymentFrequency:n.extraInfo.paymentFrequency,renewalDK:n.extraInfo.renewalDK||"N"});Object.assign(Fe,{holder:{certNo:e.certNo,certType:e.certType,mobile:e.mobile,name:e.name,socialFlag:$.HAS},insured:{certNo:t?.[0].certNo,certType:t[0]?.certType,name:t[0]?.name,socialFlag:t[0]?.extInfo?.hasSocialInsurance,relationToHolder:t[0]?.relationToHolder},paymentMethod:n.extraInfo.paymentMethod,paymentFrequency:n.extraInfo.paymentFrequency,renewalDK:n.extraInfo.renewalDK||"N"}),me.value=t[0]?.tenantOrderProductList?.[0]?.premium,a.orderStatus!==V.ACCEPT_POLICY&&a.orderStatus!==V.PAYMENT_SUCCESS||(Ie.value=!1,Ne.value=!0),a.orderStatus===V.PAYING&&(Ie.value=!0,setTimeout((()=>{je()}),3e3))}};return l((()=>{(async()=>{const{code:e,data:t}=await b({productCode:X});"10000"===e&&(Fe.packageProductList=(t.data?.packageProductVOList||[]).map((e=>({...e,value:z.UN_INSURE,disabled:!1}))),ue.value=t.data,pe.value=t.productFactor),ee&&je()})(),setTimeout((async()=>{Te=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const n=s("van-button"),r=s("ProPageWrap"),o=s("van-config-provider");return u(),m(I,null,[p(o,{"theme-vars":v(t)},{default:y((()=>[p(r,{class:"net-sale-wrap"},{default:y((()=>[p(O,{ref_key:"formRef",ref:le,"title-collection":{HOLDER:"本人信息（投保人）",INSURER:"为谁投保（被保人）",BENEFICIARY:"收益人"},"form-info":se.value,"send-sms-code":()=>{},"factor-object":pe.value},null,8,["form-info","send-sms-code","factor-object"]),f("div",W,[p(n,{type:"primary",block:"",onClick:Ce},{default:y((()=>[Q])),_:1})])])),_:1})])),_:1},8,["theme-vars"]),p(J,{show:ve.value,"onUpdate:show":a[0]||(a[0]=e=>ve.value=e),"content-list":v(be),"active-index":0,onOnConfirmHealth:Pe,onOnCloseHealth:Ee},null,8,["show","content-list"]),he.value?(u(),h(G,{key:0,show:he.value,"onUpdate:show":a[1]||(a[1]=e=>he.value=e),"content-list":v(Le),"active-index":ge.value,text:"我已逐页阅读并确认告知内容","force-read-cound":2,"on-close-file-preview":"",onSubmit:Ae,onOnCloseFilePreview:Se},null,8,["show","content-list","active-index"])):g("",!0)],64)}}});e("default",P(X,[["__scopeId","data-v-d34381a8"]]))}}}))}();
