import{m as e,ac as a,u as r,r as t,Q as n,e as o,a1 as l,o as s,s as i,ai as d,t as u,y as c,z as v,x as m,M as p,B as y,G as f,H as h,O as I,v as N,J as g,F as w,T as b,D as k,a7 as C,a8 as T,_ as F}from"./vendor-ec128989.js";import{d as O}from"./debounce-21b3eb11.js";import{_ as L,C as D,a1 as P,I as H,a4 as S,J as x}from"./index-851d6f85.js";import{a as j}from"./order-866a8201.js";import{S as E,R as U,g as q,I as A}from"./infoCollection-1700e66c.js";import{i as R,u as V,a as M,s as _,p as B,g as K}from"./trial-3ce4ad40.js";import{p as $}from"./product-56ab2948.js";import{t as Y,g as z,a as J,o as G,s as W,v as Q,b as X,j as Z}from"./utils-0a19a105.js";import{t as ee}from"./theme-ea709837.js";import{d as ae,B as re,D as te,G as ne,S as oe,H as le,P as se,U as ie,_ as de,W as ue,a as ce}from"./auth-7e280ffc.js";import{_ as ve}from"./index-4d51cfb3.js";import"./trial-5fa0ea82.js";import"./check-detail-fc12290b.js";import"./index-f911ab6d.js";import"./bankCard-c3bd493c.js";import"./phoneVerify-d4cef50a.js";import"./loading-1c9c1d7b.js";import"./close-bad1ffb4.js";const me={key:0},pe={class:"page-internet-product-detail"},ye={class:"info"},fe={class:"footer-button"},he={class:"price"},Ie=(e=>(C("data-v-ae74f7a6"),e=e(),T(),e))((()=>f("span",null,"总保费",-1))),Ne={key:0};var ge=L(e({setup(e){const C=a(),T=r(),{productCode:L="BWYL2021",tenantId:ge,orderNo:we,phoneNo:be,agentCode:ke="",saleChannelId:Ce,paymentMethod:Te,certNo:Fe,name:Oe,pageCode:Le,from:De}=T.query,Pe=t(),He=t(),Se=t(),xe=t(),je="payBack"===Le;t(!1);const Ee=t(!1),Ue=t(!1),qe=t(0),Ae=t(!1),Re=t(!1),Ve=t({show:!1,html:""}),Me=t({}),_e=t(),Be=t(!1),Ke=t("");let $e="";const Ye=n({holder:{certNo:Fe,certType:D.CERT,mobile:be,name:Oe,socialFlag:E.HAS},insured:{certNo:Fe,certType:D.CERT,name:Oe,socialFlag:E.HAS,relationToHolder:U.SELF},paymentMethod:Te,renewalDK:"Y",paymentFrequency:q.YEAR,packageProductList:[],mobileSmsCode:""}),ze=t(ae),Je=t(ae),Ge=n({showInsure:!je,canInsure:!1,canUpgrade:!1}),We=o((()=>{var e,a;return(null==(a=null==(e=He.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"===e.attachmentName)))||[]})),Qe=o((()=>{var e,a;return(null==(a=null==(e=He.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName)))||[]})),Xe=()=>{Ke.value=xe.value?Ye.paymentFrequency==q.YEAR?"元/年":"元/月":""},Ze=()=>{C.push({path:"/internet/guaranteeUpgrade",query:{...T.query,tenantId:ge,productCode:"BWYL2022",orderNo:we,agentCode:ke}})},ea=()=>{Re.value=!1},aa=()=>{Je.value=ze.value},ra=()=>{Je.value={...Je.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},ta=e=>`${S}/internet/payFail?tenantId=${ge}&orderNo=${e}&agentCode=${ke}&pageCode=payBack&from=${De||"normal"}`,na=async e=>{const a=z({tenantId:ge,saleUserId:ke,saleChannelId:Ce,detail:He.value,insureDetail:Se.value,paymentMethod:Ye.paymentMethod,paymentFrequency:Ye.paymentFrequency,renewalDK:Ye.renewalDK,iseeBizNo:$e,successJumpUrl:"",premium:xe.value,holder:Ye.holder,insured:Ye.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:"",orderNo:we,originOrderIds:_e.value});try{const e=await _(a),{code:t,data:n}=e;Ue.value=!1,Ee.value=!1,"10000"===t&&(b.clear(),delete a.id,Me.value={orderNo:n.data,order:a},Ue.value=!0,r=0,qe.value=r,Ue.value=!0)}catch(t){b.clear(),Ge.canInsure=!0}var r},oa=()=>new Promise(((e,a)=>{var r,t;null==(t=null==(r=Pe.value)?void 0:r.validateForm)||t.call(r).then((async()=>{if(!(()=>{if(Ye.holder.certNo){const e=x(Ye.holder.certNo);if(Q(Ye.holder.certNo,18,"year"))return b("投保人年龄必须大于18岁！"),!1;if(Ye.insured.certNo&&Ye.insured.relationToHolder===U.MATE&&e===x(Ye.insured.certNo))return b("被保人为配偶时，性别不可相同！"),!1}if(Ye.insured.certNo){if(Ye.insured.relationToHolder===U.CHILD&&Q(Ye.insured.certNo,30,"day"))return b("被保人为子女时，年龄必须大于等于30天！"),!1;if(Ye.insured.relationToHolder===U.PARENT&&!Q(Ye.insured.certNo,71,"year"))return b("被保人为父母时，年龄必须小于等于70岁！"),!1}if([U.CHILD,U.PARENT].includes(Ye.insured.relationToHolder)){const e=X(Ye.holder.certNo,"year"),a=X(Ye.insured.certNo,"year");if(Ye.insured.relationToHolder===U.CHILD&&e-a<18)return b("投保人和子女年龄必须相差18岁！"),!1;if(Ye.insured.relationToHolder===U.PARENT&&a-e<18)return b("投保人和父母年龄必须相差18岁！"),!1}return!0})())return void(Ge.canInsure=!0);const{calcData:r,riskVOList:t}=J({holder:Ye.holder,insured:Ye.insured,tenantId:ge,productDetail:He.value,insureDetail:Se.value,paymentFrequency:Ye.paymentFrequency,packageRiskIdList:G(Ye.packageProductList)},!1,Z);(!Array.isArray(t)||t.length<1)&&(b("被保人年龄需在30天(含) - 70岁(含)之间！"),xe.value=null,a(new Error));const n=await B(r),{code:o,data:l}=n;"10000"===o?(xe.value=l.premium,e({condition:t,data:l})):(xe.value=null,a(new Error))})).catch((e=>{Ge.canInsure=!0,W(e)}))})),la=async()=>{var e;if(je)Ze();else try{b.loading({message:"订单生成中...",forbidClick:!0,duration:0});const{condition:a,data:r}=await oa(),t={},n=(e=[])=>{(e||[]).forEach((e=>{var a;t[e.riskCode]=e,(null==(a=e.riskPremiumDetailVOList)?void 0:a.length)&&n(e.riskPremiumDetailVOList)}))};n(r.riskPremiumDetailVOList);const o=Y({tenantId:ge,riskList:a,riskPremium:t,productId:null==(e=He.value)?void 0:e.id});na(o)}catch(a){Ge.canInsure=!0}finally{b.clear()}},sa=e=>{var a;"allFalse"===e?(Ee.value=!1,Ge.canInsure=!0,(async e=>{b.loading({message:"核保中...",forbidClick:!0,duration:0});try{const a=await V(e),{code:r}=a;if("10000"===r){const a=await M({orderNo:e.orderNo,tenantId:ge}),{data:r}=a;"10000"===a.code&&(2===r.type?(Ve.value={show:!0,html:r.paymentUrl},F((()=>{const e=document.getElementById("cashierSubmit");null==e||e.addEventListener("submit",(e=>{e.preventDefault()})),null==e||e.submit()}))):window.location.href=r.paymentUrl)}Ge.canInsure=!0}catch(a){Ge.canInsure=!0}finally{b.clear()}})({...Me.value.order,orderNo:Me.value.orderNo,extInfo:{extraInfo:{renewalDK:Ye.renewalDK,paymentMethod:Ye.paymentMethod,paymentFrequency:Ye.paymentFrequency,successJumpUrl:(a=Me.value.orderNo,`${S}/pay?orderNo=${a}&saleUserId=${ke}&tenantId=${ge}`),failUrl:ta(Me.value.orderNo)},iseeBizNo:$e}})):k.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()})).catch((()=>{Ge.canInsure=!0}))},ia=()=>{Ue.value=!1,Ee.value=!1,Ge.canInsure=!0},da=()=>{Ue.value=!1,Ee.value=!0};l([()=>Ye.insured.certNo,()=>Ye.insured.socialFlag,()=>Ye.packageProductList,()=>Ye.paymentFrequency],O((()=>{Ye.insured.certNo&&Ye.insured.socialFlag&&(()=>{const{holder:{certNo:e,mobile:a,name:r,socialFlag:t},insured:{certNo:n,name:o,socialFlag:l,relationToHolder:s},paymentMethod:i}=Ye;return!(!H(n)||!l)})()&&(async()=>{const{calcData:e,riskVOList:a}=J({holder:Ye.holder,insured:Ye.insured,tenantId:ge,productDetail:He.value,insureDetail:Se.value,paymentFrequency:Ye.paymentFrequency,packageRiskIdList:G(Ye.packageProductList)},!1,Z);if(!Array.isArray(a)||a.length<1)return b("被保人年龄需在30天(含) - 70岁(含)之间！"),xe.value=null,{};Be.value=!0;const r=await B(e);Be.value=!1;const{code:t,data:n}=r;"10000"===t?Ye.insured.certNo?(xe.value=n.premium,Xe()):(xe.value=null,Xe()):xe.value=null})()}),500),{deep:!0,immediate:!0}),l((()=>Ye.insured.certNo),(()=>{Ye.insured.certNo||(xe.value=null)}));const ua=async()=>{var e,a,r,t,n,o,l,s,i,d,u,c,v,m,p;const y=await K({orderNo:we,tenantId:ge}),{code:f,data:h}=y;if("10000"===f){const{id:y,tenantOrderHolder:f,tenantOrderInsuredList:I,extInfo:N}=h;if(!je){_e.value={id:y,holderId:null==f?void 0:f.id,insuredId:null==I?void 0:I[0].id};const s=((null==(a=null==(e=I[0])?void 0:e.tenantOrderProductList[0])?void 0:a.tenantOrderRiskList)||[]).map((e=>{var a;return(null==(a=e.extInfo)?void 0:a.riskId)||""}));return Ye.packageProductList.forEach((e=>{e.value=e.productRiskVoList.filter((e=>s.includes(e.id))).length>0?A.INSURE:A.UN_INSURE})),Object.assign(Ye,{holder:{certNo:f.certNo,certType:f.certType,mobile:f.mobile,name:f.name,socialFlag:E.HAS},insured:{certNo:null==I?void 0:I[0].certNo,certType:null==(r=I[0])?void 0:r.certType,name:null==(t=I[0])?void 0:t.name,socialFlag:null==(o=null==(n=I[0])?void 0:n.extInfo)?void 0:o.hasSocialInsurance,relationToHolder:null==(l=I[0])?void 0:l.relationToHolder},paymentMethod:N.extraInfo.paymentMethod,paymentFrequency:N.extraInfo.paymentFrequency,renewalDK:N.extraInfo.renewalDK||"N"}),void(Ge.canInsure=!0)}Object.assign(Ye,{holder:{certNo:f.certNo,certType:f.certType,mobile:f.mobile,name:f.name,socialFlag:E.HAS},insured:{certNo:null==I?void 0:I[0].certNo,certType:null==(s=I[0])?void 0:s.certType,name:null==(i=I[0])?void 0:i.name,socialFlag:null==(u=null==(d=I[0])?void 0:d.extInfo)?void 0:u.hasSocialInsurance,relationToHolder:null==(c=I[0])?void 0:c.relationToHolder},paymentMethod:N.extraInfo.paymentMethod,paymentFrequency:N.extraInfo.paymentFrequency,renewalDK:N.extraInfo.renewalDK||"N"}),xe.value=null==(p=null==(m=null==(v=I[0])?void 0:v.tenantOrderProductList)?void 0:m[0])?void 0:p.premium,h.orderStatus!==j.ACCEPT_POLICY&&h.orderStatus!==j.PAYMENT_SUCCESS||(Ge.canUpgrade=!0,Ae.value=!1,Re.value=!0),h.orderStatus===j.PAYING&&(Ae.value=!0,setTimeout((()=>{ua()}),3e3))}};return s((()=>{Je.value=ce,ze.value=ce,Ge.canInsure=!0,(async()=>{var e,a;const r=await $({productCode:L,withInsureInfo:!0,tenantId:ge});"10000"===r.code&&(He.value=r.data,document.title=(null==(e=r.data)?void 0:e.productFullName)||"");const t=await R({productCode:L});"10000"===t.code&&(Ye.packageProductList=((null==(a=t.data)?void 0:a.packageProductVOList)||[]).map((e=>({...e,value:A.UN_INSURE,disabled:!1}))),Se.value=t.data),we&&ua()})(),setTimeout((async()=>{$e=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const r=i("van-loading"),t=i("van-button"),n=i("van-config-provider"),o=d("dompurify-html");return u(),c(w,null,[v(n,{"theme-vars":h(ee)},{default:m((()=>{var e,a,n,l,s,i,d;return[Ve.value.show?p((u(),c("div",me,null,512)),[[o,Ve.value.html]]):y("",!0),f("div",pe,[f("div",ye,[v(re,{url:null==(a=null==(e=He.value)?void 0:e.tenantProductInsureVO)?void 0:a.banner[0]},null,8,["url"]),v(te,{"product-name":null==(n=He.value)?void 0:n.productFullName,"product-desc":null==(s=null==(l=He.value)?void 0:l.showConfigVO)?void 0:s.desc},null,8,["product-name","product-desc"])]),v(ne,{"show-service-config":"","guarantee-list":null==(d=null==(i=He.value)?void 0:i.tenantProductInsureVO)?void 0:d.titleAndDescVOS},null,8,["guarantee-list"]),v(oe,{detail:He.value},{form:m((()=>[v(le,{ref_key:"formRef",ref:Pe,"is-show-package":"",disable:!h(Ge).showInsure,"form-auth":Je.value,"form-info":h(Ye),"product-detail":He.value,onOnReset:aa,onOnUpdate:ra},null,8,["disable","form-auth","form-info","product-detail"])])),_:1},8,["detail"]),f("div",fe,[f("div",he,[Ie,Be.value?(u(),N(r,{key:1,class:"premium-loading",type:"spinner"})):(u(),c("span",Ne,I(xe.value?"￥":"")+I(h(P)(xe.value))+" "+I(Ke.value),1))]),v(t,{type:"primary",class:"right",disabled:!(h(Ge).canInsure||h(Ge).canUpgrade),onClick:la},{default:m((()=>[g(I(h(Ge).showInsure?"立即投保":"升级保障"),1)])),_:1},8,["disabled"])])]),h(we)?y("",!0):(u(),N(se,{key:1,"product-detail":He.value},null,8,["product-detail"])),v(ie,{"order-no":h(we),"tenant-id":h(ge),"is-show":Re.value,onOnConfirm:Ze,onOnClose:ea},null,8,["order-no","tenant-id","is-show"])]})),_:1},8,["theme-vars"]),v(de,{show:Ee.value,"onUpdate:show":a[0]||(a[0]=e=>Ee.value=e),"content-list":h(We),"active-index":0,onOnConfirmHealth:sa,onOnCloseHealth:ia},null,8,["show","content-list"]),Ue.value?(u(),N(ve,{key:0,show:Ue.value,"onUpdate:show":a[1]||(a[1]=e=>Ue.value=e),"content-list":h(Qe),"active-index":qe.value,text:"我已逐页阅读并确认告知内容","force-read-cound":2,"on-close-file-preview":"",onSubmit:da,onOnCloseFilePreview:ia},null,8,["show","content-list","active-index"])):y("",!0),v(ue,{"is-show":Ae.value},null,8,["is-show"])],64)}}}),[["__scopeId","data-v-ae74f7a6"]]);export{ge as default};
