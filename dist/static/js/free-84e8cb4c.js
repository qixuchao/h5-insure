import{k as e,aa as a,u as n,r as t,O as r,b as o,$ as l,o as i,p as s,ag as u,s as d,B as c,S as v,v as m,J as p,y,C as h,t as f,E as I,M as g,G as w,H as N,D as b,T as C,Y as P}from"./vendor-9bab628e.js";import{d as O}from"./debounce-a0c8763d.js";import{_ as T,C as k,a1 as F,I as L,J as D,a4 as H}from"./index-aa4ec275.js";import{a as S}from"./order-9d984608.js";import{S as V,R as A,g as E,I as j}from"./infoCollection-2d0972eb.js";import{i as x,p as U,g as q,s as M,u as R,a as B}from"./trial-49574891.js";import{p as _}from"./product-c8d89531.js";import{g as $,o as K,t as Y,a as z,v as J,b as G}from"./utils-5d588653.js";import{t as W}from"./theme-3c294048.js";import{d as Q,B as X,D as Z,G as ee,S as ae,H as ne,P as te,a as re,U as oe,_ as le,b as ie,W as se,c as ue}from"./auth-e364a43e.js";import"./trial-81e8ae87.js";import"./check-detail-fc12290b.js";import"./index-6c592994.js";import"./bankCard-49db6849.js";import"./phoneVerify-6a00db19.js";import"./index-bcd4f9d2.js";import"./loading-1c9c1d7b.js";import"./close-bad1ffb4.js";const de={key:0},ce={class:"page-internet-product-detail"},ve={class:"info"},me={class:"inscribedContent-content"},pe={class:"content"},ye={class:"footer-button"},he={class:"price"},fe=w(" 总保费");var Ie=T(e({setup(e){const T=a(),Ie=n(),{productCode:ge="BWYL2021",tenantId:we,orderNo:Ne,phoneNo:be,agentCode:Ce="",saleChannelId:Pe,paymentMethod:Oe,certNo:Te,name:ke,pageCode:Fe,from:Le}=Ie.query,De=t(),He=t(),Se=t(),Ve=t(),Ae=t(),Ee="payBack"===Fe,je=t(!1),xe=t(!1),Ue=t(!1),qe=t(0),Me=t(!1),Re=t(!1),Be=t({show:!1,html:""});let _e="";t(0);const $e=r({holder:{certNo:Te,certType:k.CERT,mobile:be,name:ke,socialFlag:V.HAS},insured:{certNo:Te,certType:k.CERT,name:ke,socialFlag:V.HAS,relationToHolder:A.SELF},paymentMethod:Oe,renewalDK:"Y",paymentFrequency:E.YEAR,packageProductList:[],mobileSmsCode:"",activePlanCode:""}),Ke=t(Q),Ye=t(Q),ze=r({showInsure:!Ee,canInsure:!1,canUpgrade:!1}),Je=o((()=>{var e,a,n,t,r,o;return!!Se.value&&!!((null==(a=null==(e=Se.value)?void 0:e.tenantProductInsureVO)?void 0:a.planList)&&Array.isArray(null==(t=null==(n=Se.value)?void 0:n.tenantProductInsureVO)?void 0:t.planList)&&(null==(o=null==(r=Se.value)?void 0:r.tenantProductInsureVO)?void 0:o.planList.length)>0)}));l((()=>Je.value),(()=>{var e,a;Je.value&&($e.activePlanCode=null==(a=null==(e=Se.value)?void 0:e.tenantProductInsureVO)?void 0:a.planList[0].planCode)}),{immediate:!0});const Ge=e=>{$e.activePlanCode=e},We=o((()=>{var e,a;return((null==(a=null==(e=Se.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList)||[]).filter((e=>"健康告知"===e.attachmentName))||[]})),Qe=o((()=>{var e,a;return((null==(a=null==(e=Se.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList)||[]).filter((e=>"健康告知"!==e.attachmentName))||[]})),Xe=()=>{He.value.handleClickTab()("tab3")},Ze=()=>{T.push({path:"/internet/guaranteeUpgrade",query:{...Ie.query,tenantId:we,productCode:"BWYL2022",orderNo:Ne,agentCode:Ce}})},ea=()=>{Re.value=!1},aa=()=>{Ye.value=Ke.value},na=()=>{Ye.value={...Ye.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},ta=e=>`${H}/internet/payFail?tenantId=${we}&orderNo=${e}&agentCode=${Ce}&pageCode=payBack&from=${Le||"normal"}`,ra=async e=>{const a=z({tenantId:we,saleUserId:Ce,saleChannelId:Pe,detail:Se.value,insureDetail:Ve.value,paymentMethod:$e.paymentMethod,paymentFrequency:$e.paymentFrequency,renewalDK:$e.renewalDK,iseeBizNo:_e,successJumpUrl:"",premium:Ae.value,holder:$e.holder,insured:$e.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:""});try{const e=await M(a),{code:t,data:r}=e;"10000"===t&&(async e=>{C.loading({message:"核保中...",forbidClick:!0});try{const a=await R(e),{code:n}=a;if("10000"===n){C.loading({message:"核保中...",forbidClick:!0});const a=await B({orderNo:e.orderNo,tenantId:we}),{data:n}=a;"10000"===a.code&&(2===n.type?(Be.value={show:!0,html:n.paymentUrl},P((()=>{const e=document.getElementById("cashierSubmit");null==e||e.addEventListener("submit",(e=>{e.preventDefault()})),null==e||e.submit()}))):window.location.href=n.paymentUrl)}ze.canInsure=!0}catch(a){ze.canInsure=!0}})({...a,orderNo:r.data,extInfo:{extraInfo:{renewalDK:$e.renewalDK,paymentMethod:$e.paymentMethod,paymentFrequency:$e.paymentFrequency,successJumpUrl:(n=r.data,`${H}/pay?orderNo=${n}&saleUserId=${Ce}&tenantId=${we}`),failUrl:ta(r.data)},iseeBizNo:_e}})}catch(t){ze.canInsure=!0}var n},oa=()=>new Promise(((e,a)=>{var n,t;null==(t=null==(n=De.value)?void 0:n.validateForm)||t.call(n).then((async()=>{var n;if(!(()=>{if($e.holder.certNo){const e=G($e.holder.certNo,"year"),a=D($e.holder.certNo);if(e<18)return C("投保人年龄必须大于18岁！"),!1;if($e.insured.certNo&&$e.insured.relationToHolder===A.MATE&&a===D($e.insured.certNo))return C("被保人为配偶时，性别不可相同！"),!1}if($e.insured.certNo){const e=G($e.insured.certNo,"day"),a=G($e.insured.certNo,"year");if($e.insured.relationToHolder===A.CHILD&&e<30)return C("被保人为子女时，年龄必须大于等于30天！"),!1;if($e.insured.relationToHolder===A.PARENT&&a>=71)return C("被保人为父母时，年龄必须小于等于70岁！"),!1}if([A.CHILD,A.PARENT].includes($e.insured.relationToHolder)){const e=G($e.holder.certNo,"year"),a=G($e.insured.certNo,"year");if($e.insured.relationToHolder===A.CHILD&&e-a<18)return C("投保人和子女年龄必须相差18岁！"),!1;if($e.insured.relationToHolder===A.PARENT&&a-e<18)return C("投保人和父母年龄必须相差18岁！"),!1}return!0})())return void(ze.canInsure=!0);if(!((null==(n=De.value)?void 0:n.isAgreeFile)||je.value))return je.value=!1,Ue.value=!0,t=0,qe.value=t,void(Ue.value=!0);var t;const{calcData:r,riskVOList:o}=$({holder:$e.holder,insured:$e.insured,tenantId:we,productDetail:Se.value,insureDetail:Ve.value,paymentFrequency:$e.paymentFrequency,packageRiskIdList:K($e.packageProductList)},!1,J);(!Array.isArray(o)||o.length<1)&&(Ae.value=null,a(new Error));const l=await U(r),{code:i,data:s}=l;"10000"===i?(Ae.value=s.premium,e({condition:o,data:s})):(Ae.value=null,a(new Error))})).catch((()=>{ze.canInsure=!0}))})),la=e=>{"allFalse"===e?(xe.value=!1,je.value=!0,(async()=>{var e;if(Ee)Ze();else{ze.canInsure=!1;try{const{condition:a,data:n}=await oa(),t={},r=(e=[])=>{(e||[]).forEach((e=>{var a;t[e.riskCode]=e,(null==(a=e.riskPremiumDetailVOList)?void 0:a.length)&&r(e.riskPremiumDetailVOList)}))};r(n.riskPremiumDetailVOList);const o=Y({tenantId:we,riskList:a,riskPremium:t,productId:null==(e=Se.value)?void 0:e.id});ra(o)}catch(a){ze.canInsure=!0}}})(),ze.canInsure=!0):b.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()})).catch((()=>{var e;null==(e=De.value)||e.reEditForm(),je.value=!1,ze.canInsure=!0}))},ia=()=>{var e;null==(e=De.value)||e.reEditForm(),je.value=!1,ze.canInsure=!0},sa=()=>{xe.value=!1,ia()},ua=()=>{Ue.value=!1,ia()},da=()=>{Ue.value=!1,xe.value=!0};l([()=>$e.insured.certNo,()=>$e.insured.socialFlag,()=>$e.packageProductList,()=>$e.paymentFrequency],O((()=>{$e.insured.certNo&&$e.insured.socialFlag&&(()=>{const{holder:{certNo:e,mobile:a,name:n,socialFlag:t},insured:{certNo:r,name:o,socialFlag:l,relationToHolder:i},paymentMethod:s}=$e;return!(!L(r)||!l)})()&&(async()=>{const{calcData:e,riskVOList:a}=$({holder:$e.holder,insured:$e.insured,tenantId:we,productDetail:Se.value,insureDetail:Ve.value,paymentFrequency:$e.paymentFrequency,packageRiskIdList:K($e.packageProductList)},!1,J);if(!Array.isArray(a)||a.length<1)return Ae.value=null,{};const n=await U(e),{code:t,data:r}=n;"10000"===t?Ae.value=r.premium:Ae.value=null})()}),500),{deep:!0,immediate:!0});const ca=async()=>{var e,a,n,t,r,o,l,i,s,u,d,c,v;const m=await q({orderNo:Ne,tenantId:we}),{code:p,data:y}=m;if("10000"===p){const{tenantOrderHolder:m,tenantOrderInsuredList:p,extInfo:h}=y;if(!Ee)return Object.assign($e,{holder:{certNo:m.certNo,certType:m.certType,mobile:m.mobile,name:m.name,socialFlag:V.HAS},insured:{certNo:null==p?void 0:p[0].certNo,certType:null==(e=p[0])?void 0:e.certType,name:null==(a=p[0])?void 0:a.name,socialFlag:null==(t=null==(n=p[0])?void 0:n.extInfo)?void 0:t.hasSocialInsurance,relationToHolder:null==(r=p[0])?void 0:r.relationToHolder},paymentMethod:h.extraInfo.paymentMethod,paymentFrequency:h.extraInfo.paymentFrequency,renewalDK:h.extraInfo.renewalDK||"N"}),void(ze.canInsure=!0);Object.assign($e,{holder:{certNo:m.certNo,certType:m.certType,mobile:m.mobile,name:m.name,socialFlag:V.HAS},insured:{certNo:null==p?void 0:p[0].certNo,certType:null==(o=p[0])?void 0:o.certType,name:null==(l=p[0])?void 0:l.name,socialFlag:null==(s=null==(i=p[0])?void 0:i.extInfo)?void 0:s.hasSocialInsurance,relationToHolder:null==(u=p[0])?void 0:u.relationToHolder},paymentMethod:h.extraInfo.paymentMethod,paymentFrequency:h.extraInfo.paymentFrequency,renewalDK:h.extraInfo.renewalDK||"N"}),Ae.value=null==(v=null==(c=null==(d=p[0])?void 0:d.tenantOrderProductList)?void 0:c[0])?void 0:v.premium,y.orderStatus!==S.ACCEPT_POLICY&&y.orderStatus!==S.PAYMENT_SUCCESS||(ze.canUpgrade=!0,Me.value=!1,Re.value=!0),y.orderStatus===S.PAYING&&(Me.value=!0,setTimeout((()=>{ca()}),3e3))}};return i((()=>{Ye.value=ue,Ke.value=ue,ze.canInsure=!0,(async()=>{const e=_({productCode:ge,withInsureInfo:!0,tenantId:we}),a=x({productCode:ge});await Promise.all([e,a]).then((([e,a])=>{var n,t;"10000"===e.code&&(Se.value={...e.data},document.title=(null==(n=e.data)?void 0:n.productFullName)||""),"10000"===a.code&&($e.packageProductList=((null==(t=a.data)?void 0:t.packageProductVOList)||[]).map((e=>({...e,value:j.UN_INSURE,disabled:!1}))),Ve.value=a.data)})),Ne&&ca()})(),setTimeout((async()=>{_e=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const n=s("van-button"),t=s("van-config-provider"),r=u("dompurify-html");return d(),c(N,null,[v(t,{"theme-vars":I(W)},{default:m((()=>{var e,a,t,o,l,i,s,u,N,b,C;return[Be.value.show?p((d(),c("div",de,null,512)),[[r,Be.value.html]]):y("",!0),h("div",ce,[h("div",ve,[v(X,{url:null==(a=null==(e=Se.value)?void 0:e.tenantProductInsureVO)?void 0:a.banner[0]},null,8,["url"]),(null==(o=null==(t=Se.value)?void 0:t.tenantProductInsureVO)?void 0:o.bannerMove)?(d(),f(X,{key:0,url:null==(i=null==(l=Se.value)?void 0:l.tenantProductInsureVO)?void 0:i.bannerMove[0],onClick:Xe},null,8,["url"])):y("",!0),v(Z,{"product-name":null==(s=Se.value)?void 0:s.productFullName,"product-desc":null==(N=null==(u=Se.value)?void 0:u.showConfigVO)?void 0:N.desc},null,8,["product-name","product-desc"])]),v(ee,{"show-service-config":"","data-source":null==(b=Se.value)?void 0:b.tenantProductInsureVO,"show-config":null==(C=Se.value)?void 0:C.showConfigVO,"is-multiple-plan":I(Je),"active-plan-code":I($e).activePlanCode,onUpdateActivePlan:Ge},null,8,["data-source","show-config","is-multiple-plan","active-plan-code"]),v(ae,{ref_key:"detailScrollRef",ref:He,detail:Se.value},{form:m((()=>{var e,a;return[v(ne,{ref_key:"formRef",ref:De,"is-show-package":"",disable:!I(ze).showInsure,"form-auth":Ye.value,"form-info":I($e),"product-detail":Se.value,onOnReset:aa,onOnUpdate:na},null,8,["disable","form-auth","form-info","product-detail"]),v(te,{"form-info":I($e),"product-detail":Se.value,"show-config":null==(e=Se.value)?void 0:e.showConfigVO},null,8,["form-info","product-detail","show-config"]),h("div",me,[p(h("div",pe,null,512),[[r,null==(a=Se.value)?void 0:a.tenantProductInsureVO.inscribedContent]])])]})),_:1},8,["detail"]),h("div",ye,[h("div",he,[fe,h("span",null,g(Ae.value?"￥":"")+g(I(F)(Ae.value))+" "+g(Ae.value?I($e).paymentFrequency==I(E).YEAR?"元/年":"元/月":""),1)]),v(n,{type:"primary",class:"right",disabled:!(I(ze).canInsure||I(ze).canUpgrade)},{default:m((()=>[w(g(I(ze).showInsure?"立即投保":"升级保障"),1)])),_:1},8,["disabled"])])]),I(Ne)?y("",!0):(d(),f(re,{key:1,"product-detail":Se.value},null,8,["product-detail"])),v(oe,{"order-no":I(Ne),"tenant-id":I(we),"is-show":Re.value,onOnConfirm:Ze,onOnClose:ea},null,8,["order-no","tenant-id","is-show"])]})),_:1},8,["theme-vars"]),v(le,{show:xe.value,"onUpdate:show":a[0]||(a[0]=e=>xe.value=e),"content-list":I(We),"active-index":0,onOnConfirmHealth:la,onOnCloseHealth:sa},null,8,["show","content-list"]),Ue.value?(d(),f(ie,{key:0,show:Ue.value,"onUpdate:show":a[1]||(a[1]=e=>Ue.value=e),"content-list":I(Qe),"active-index":qe.value,text:"我已逐页阅读并确认告知内容","force-read-cound":0,"on-close-file-preview":"",onSubmit:da,onOnCloseFilePreview:ua},null,8,["show","content-list","active-index"])):y("",!0),v(se,{"is-show":Me.value},null,8,["is-show"])],64)}}}),[["__scopeId","data-v-45065de7"]]);export{Ie as default};
