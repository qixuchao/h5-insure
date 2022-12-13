import{_ as e,d as a,u as r,a as t,r as n,A as o,a3 as l,y as s,a8 as i,z as d,b as u,q as c,c as v,g as m,f as p,w as y,s as f,j as h,i as I,l as N,t as g,aM as w,e as b,n as k,F as T,T as C,a5 as F,L,M as O,ar as D,aT as P,aP as S,as as H}from"./index-b655107d.js";import{d as x}from"./debounce-e6a66970.js";import{a as E}from"./order-2e727e85.js";import{S as U,R as j,g as q,I as A}from"./infoCollection-751f49fe.js";import{i as R,u as V,a as M,s as _,p as B,g as K}from"./trial-79b88bf9.js";import{p as $}from"./product-0e880efa.js";import{t as Y,g as z,a as W,o as G,s as J,v as Q,b as X,j as Z}from"./utils-48480fba.js";import{t as ee}from"./theme-ea709837.js";import{d as ae,B as re,D as te,G as ne,S as oe,H as le,P as se,U as ie,_ as de,W as ue,a as ce}from"./auth-e9b30f50.js";import{_ as ve}from"./index-6a0befe8.js";import"./pdfdist-666d4573.js";import"./trial-493ad29c.js";import"./index-799df0c1.js";import"./bankCard-faf093a9.js";import"./validator-5a13dc82.js";import"./phoneVerify-42759af1.js";const me={key:0},pe={class:"page-internet-product-detail"},ye={class:"info"},fe={class:"footer-button"},he={class:"price"},Ie=(e=>(L("data-v-ae74f7a6"),e=e(),O(),e))((()=>I("span",null,"总保费",-1))),Ne={key:0};var ge=e(a({setup(e){const a=r(),L=t(),{productCode:O="BWYL2021",tenantId:ge,orderNo:we,phoneNo:be,agentCode:ke="",saleChannelId:Te,paymentMethod:Ce,certNo:Fe,name:Le,pageCode:Oe,from:De}=L.query,Pe=n(),Se=n(),He=n(),xe=n(),Ee="payBack"===Oe;n(!1);const Ue=n(!1),je=n(!1),qe=n(0),Ae=n(!1),Re=n(!1),Ve=n({show:!1,html:""}),Me=n({}),_e=n(),Be=n(!1),Ke=n("");let $e="";const Ye=o({holder:{certNo:Fe,certType:l.CERT,mobile:be,name:Le,socialFlag:U.HAS},insured:{certNo:Fe,certType:l.CERT,name:Le,socialFlag:U.HAS,relationToHolder:j.SELF},paymentMethod:Ce,renewalDK:"Y",paymentFrequency:q.YEAR,packageProductList:[],mobileSmsCode:""}),ze=n(ae),We=n(ae),Ge=o({showInsure:!Ee,canInsure:!1,canUpgrade:!1}),Je=s((()=>{var e,a;return(null==(a=null==(e=Se.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"===e.attachmentName)))||[]})),Qe=s((()=>{var e,a;return(null==(a=null==(e=Se.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName)))||[]})),Xe=()=>{Ke.value=xe.value?Ye.paymentFrequency==q.YEAR?"元/年":"元/月":""},Ze=()=>{a.push({path:"/internet/guaranteeUpgrade",query:{...L.query,tenantId:ge,productCode:"BWYL2022",orderNo:we,agentCode:ke}})},ea=()=>{Re.value=!1},aa=()=>{We.value=ze.value},ra=()=>{We.value={...We.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},ta=e=>`${S}/internet/payFail?tenantId=${ge}&orderNo=${e}&agentCode=${ke}&pageCode=payBack&from=${De||"normal"}`,na=async e=>{const a=z({tenantId:ge,saleUserId:ke,saleChannelId:Te,detail:Se.value,insureDetail:He.value,paymentMethod:Ye.paymentMethod,paymentFrequency:Ye.paymentFrequency,renewalDK:Ye.renewalDK,iseeBizNo:$e,successJumpUrl:"",premium:xe.value,holder:Ye.holder,insured:Ye.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:"",orderNo:we,originOrderIds:_e.value});try{const e=await _(a),{code:t,data:n}=e;je.value=!1,Ue.value=!1,"10000"===t&&(C.clear(),delete a.id,Me.value={orderNo:n.data,order:a},je.value=!0,r=0,qe.value=r,je.value=!0)}catch(t){C.clear(),Ge.canInsure=!0}var r},oa=()=>new Promise(((e,a)=>{var r,t;null==(t=null==(r=Pe.value)?void 0:r.validateForm)||t.call(r).then((async()=>{if(!(()=>{if(Ye.holder.certNo){const e=H(Ye.holder.certNo);if(Q(Ye.holder.certNo,18,"year"))return C("投保人年龄必须大于18岁！"),!1;if(Ye.insured.certNo&&Ye.insured.relationToHolder===j.MATE&&e===H(Ye.insured.certNo))return C("被保人为配偶时，性别不可相同！"),!1}if(Ye.insured.certNo){if(Ye.insured.relationToHolder===j.CHILD&&Q(Ye.insured.certNo,30,"day"))return C("被保人为子女时，年龄必须大于等于30天！"),!1;if(Ye.insured.relationToHolder===j.PARENT&&!Q(Ye.insured.certNo,71,"year"))return C("被保人为父母时，年龄必须小于等于70岁！"),!1}if([j.CHILD,j.PARENT].includes(Ye.insured.relationToHolder)){const e=X(Ye.holder.certNo,"year"),a=X(Ye.insured.certNo,"year");if(Ye.insured.relationToHolder===j.CHILD&&e-a<18)return C("投保人和子女年龄必须相差18岁！"),!1;if(Ye.insured.relationToHolder===j.PARENT&&a-e<18)return C("投保人和父母年龄必须相差18岁！"),!1}return!0})())return void(Ge.canInsure=!0);const{calcData:r,riskVOList:t}=W({holder:Ye.holder,insured:Ye.insured,tenantId:ge,productDetail:Se.value,insureDetail:He.value,paymentFrequency:Ye.paymentFrequency,packageRiskIdList:G(Ye.packageProductList)},!1,Z);(!Array.isArray(t)||t.length<1)&&(C("被保人年龄需在30天(含) - 70岁(含)之间！"),xe.value=null,a(new Error));const n=await B(r),{code:o,data:l}=n;"10000"===o?(xe.value=l.premium,e({condition:t,data:l})):(xe.value=null,a(new Error))})).catch((e=>{Ge.canInsure=!0,J(e)}))})),la=async()=>{var e;if(Ee)Ze();else try{C.loading({message:"订单生成中...",forbidClick:!0,duration:0});const{condition:a,data:r}=await oa(),t={},n=(e=[])=>{(e||[]).forEach((e=>{var a;t[e.riskCode]=e,(null==(a=e.riskPremiumDetailVOList)?void 0:a.length)&&n(e.riskPremiumDetailVOList)}))};n(r.riskPremiumDetailVOList);const o=Y({tenantId:ge,riskList:a,riskPremium:t,productId:null==(e=Se.value)?void 0:e.id});na(o)}catch(a){Ge.canInsure=!0}finally{C.clear()}},sa=e=>{var a;"allFalse"===e?(Ue.value=!1,Ge.canInsure=!0,(async e=>{C.loading({message:"核保中...",forbidClick:!0,duration:0});try{const a=await V(e),{code:r}=a;if("10000"===r){const a=await M({orderNo:e.orderNo,tenantId:ge}),{data:r}=a;"10000"===a.code&&(2===r.type?(Ve.value={show:!0,html:r.paymentUrl},P((()=>{const e=document.getElementById("cashierSubmit");null==e||e.addEventListener("submit",(e=>{e.preventDefault()})),null==e||e.submit()}))):window.location.href=r.paymentUrl)}Ge.canInsure=!0}catch(a){Ge.canInsure=!0}finally{C.clear()}})({...Me.value.order,orderNo:Me.value.orderNo,extInfo:{extraInfo:{renewalDK:Ye.renewalDK,paymentMethod:Ye.paymentMethod,paymentFrequency:Ye.paymentFrequency,successJumpUrl:(a=Me.value.orderNo,`${S}/pay?orderNo=${a}&saleUserId=${ke}&tenantId=${ge}`),failUrl:ta(Me.value.orderNo)},iseeBizNo:$e}})):F.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()})).catch((()=>{Ge.canInsure=!0}))},ia=()=>{je.value=!1,Ue.value=!1,Ge.canInsure=!0},da=()=>{je.value=!1,Ue.value=!0};i([()=>Ye.insured.certNo,()=>Ye.insured.socialFlag,()=>Ye.packageProductList,()=>Ye.paymentFrequency],x((()=>{Ye.insured.certNo&&Ye.insured.socialFlag&&(()=>{const{holder:{certNo:e,mobile:a,name:r,socialFlag:t},insured:{certNo:n,name:o,socialFlag:l,relationToHolder:s},paymentMethod:i}=Ye;return!(!D(n)||!l)})()&&(async()=>{const{calcData:e,riskVOList:a}=W({holder:Ye.holder,insured:Ye.insured,tenantId:ge,productDetail:Se.value,insureDetail:He.value,paymentFrequency:Ye.paymentFrequency,packageRiskIdList:G(Ye.packageProductList)},!1,Z);if(!Array.isArray(a)||a.length<1)return C("被保人年龄需在30天(含) - 70岁(含)之间！"),xe.value=null,{};Be.value=!0;const r=await B(e);Be.value=!1;const{code:t,data:n}=r;"10000"===t?Ye.insured.certNo?(xe.value=n.premium,Xe()):(xe.value=null,Xe()):xe.value=null})()}),500),{deep:!0,immediate:!0}),i((()=>Ye.insured.certNo),(()=>{Ye.insured.certNo||(xe.value=null)}));const ua=async()=>{var e,a,r,t,n,o,l,s,i,d,u,c,v,m,p;const y=await K({orderNo:we,tenantId:ge}),{code:f,data:h}=y;if("10000"===f){const{id:y,tenantOrderHolder:f,tenantOrderInsuredList:I,extInfo:N}=h;if(!Ee){_e.value={id:y,holderId:null==f?void 0:f.id,insuredId:null==I?void 0:I[0].id};const s=((null==(a=null==(e=I[0])?void 0:e.tenantOrderProductList[0])?void 0:a.tenantOrderRiskList)||[]).map((e=>{var a;return(null==(a=e.extInfo)?void 0:a.riskId)||""}));return Ye.packageProductList.forEach((e=>{e.value=e.productRiskVoList.filter((e=>s.includes(e.id))).length>0?A.INSURE:A.UN_INSURE})),Object.assign(Ye,{holder:{certNo:f.certNo,certType:f.certType,mobile:f.mobile,name:f.name,socialFlag:U.HAS},insured:{certNo:null==I?void 0:I[0].certNo,certType:null==(r=I[0])?void 0:r.certType,name:null==(t=I[0])?void 0:t.name,socialFlag:null==(o=null==(n=I[0])?void 0:n.extInfo)?void 0:o.hasSocialInsurance,relationToHolder:null==(l=I[0])?void 0:l.relationToHolder},paymentMethod:N.extraInfo.paymentMethod,paymentFrequency:N.extraInfo.paymentFrequency,renewalDK:N.extraInfo.renewalDK||"N"}),void(Ge.canInsure=!0)}Object.assign(Ye,{holder:{certNo:f.certNo,certType:f.certType,mobile:f.mobile,name:f.name,socialFlag:U.HAS},insured:{certNo:null==I?void 0:I[0].certNo,certType:null==(s=I[0])?void 0:s.certType,name:null==(i=I[0])?void 0:i.name,socialFlag:null==(u=null==(d=I[0])?void 0:d.extInfo)?void 0:u.hasSocialInsurance,relationToHolder:null==(c=I[0])?void 0:c.relationToHolder},paymentMethod:N.extraInfo.paymentMethod,paymentFrequency:N.extraInfo.paymentFrequency,renewalDK:N.extraInfo.renewalDK||"N"}),xe.value=null==(p=null==(m=null==(v=I[0])?void 0:v.tenantOrderProductList)?void 0:m[0])?void 0:p.premium,h.orderStatus!==E.ACCEPT_POLICY&&h.orderStatus!==E.PAYMENT_SUCCESS||(Ge.canUpgrade=!0,Ae.value=!1,Re.value=!0),h.orderStatus===E.PAYING&&(Ae.value=!0,setTimeout((()=>{ua()}),3e3))}};return d((()=>{We.value=ce,ze.value=ce,Ge.canInsure=!0,(async()=>{var e,a;const r=await $({productCode:O,withInsureInfo:!0,tenantId:ge});"10000"===r.code&&(Se.value=r.data,document.title=(null==(e=r.data)?void 0:e.productFullName)||"");const t=await R({productCode:O});"10000"===t.code&&(Ye.packageProductList=((null==(a=t.data)?void 0:a.packageProductVOList)||[]).map((e=>({...e,value:A.UN_INSURE,disabled:!1}))),He.value=t.data),we&&ua()})(),setTimeout((async()=>{$e=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const r=u("van-loading"),t=u("van-button"),n=u("van-config-provider"),o=c("dompurify-html");return v(),m(T,null,[p(n,{"theme-vars":N(ee)},{default:y((()=>{var e,a,n,l,s,i,d;return[Ve.value.show?f((v(),m("div",me,null,512)),[[o,Ve.value.html]]):h("",!0),I("div",pe,[I("div",ye,[p(re,{url:null==(a=null==(e=Se.value)?void 0:e.tenantProductInsureVO)?void 0:a.banner[0]},null,8,["url"]),p(te,{"product-name":null==(n=Se.value)?void 0:n.productFullName,"product-desc":null==(s=null==(l=Se.value)?void 0:l.showConfigVO)?void 0:s.desc},null,8,["product-name","product-desc"])]),p(ne,{"show-service-config":"","guarantee-list":null==(d=null==(i=Se.value)?void 0:i.tenantProductInsureVO)?void 0:d.titleAndDescVOS},null,8,["guarantee-list"]),p(oe,{detail:Se.value},{form:y((()=>[p(le,{ref_key:"formRef",ref:Pe,"is-show-package":"",disable:!N(Ge).showInsure,"form-auth":We.value,"form-info":N(Ye),"product-detail":Se.value,onOnReset:aa,onOnUpdate:ra},null,8,["disable","form-auth","form-info","product-detail"])])),_:1},8,["detail"]),I("div",fe,[I("div",he,[Ie,Be.value?(v(),b(r,{key:1,class:"premium-loading",type:"spinner"})):(v(),m("span",Ne,g(xe.value?"￥":"")+g(N(w)(xe.value))+" "+g(Ke.value),1))]),p(t,{type:"primary",class:"right",disabled:!(N(Ge).canInsure||N(Ge).canUpgrade),onClick:la},{default:y((()=>[k(g(N(Ge).showInsure?"立即投保":"升级保障"),1)])),_:1},8,["disabled"])])]),N(we)?h("",!0):(v(),b(se,{key:1,"product-detail":Se.value},null,8,["product-detail"])),p(ie,{"order-no":N(we),"tenant-id":N(ge),"is-show":Re.value,onOnConfirm:Ze,onOnClose:ea},null,8,["order-no","tenant-id","is-show"])]})),_:1},8,["theme-vars"]),p(de,{show:Ue.value,"onUpdate:show":a[0]||(a[0]=e=>Ue.value=e),"content-list":N(Je),"active-index":0,onOnConfirmHealth:sa,onOnCloseHealth:ia},null,8,["show","content-list"]),je.value?(v(),b(ve,{key:0,show:je.value,"onUpdate:show":a[1]||(a[1]=e=>je.value=e),"content-list":N(Qe),"active-index":qe.value,text:"我已逐页阅读并确认告知内容","force-read-cound":2,"on-close-file-preview":"",onSubmit:da,onOnCloseFilePreview:ia},null,8,["show","content-list","active-index"])):h("",!0),p(ue,{"is-show":Ae.value},null,8,["is-show"])],64)}}}),[["__scopeId","data-v-ae74f7a6"]]);export{ge as default};
