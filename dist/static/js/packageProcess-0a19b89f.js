import{_ as e,d as a,u as r,a as t,r as n,J as o,ah as l,E as s,an as i,G as d,aB as u,z as c,c as m,h as p,f as v,w as y,g as f,A as h,k as I,j as N,t as g,bB as w,e as b,n as k,a7 as T,F as C,T as F,aj as O,B as L,bT as P,X as D,Y as j,aJ as S,b6 as H,bG as x,aK as E}from"./index-ac0d8bf0.js";import{d as U}from"./debounce-2dbbea42.js";import{a as A}from"./order-5c11917b.js";import{S as q,R,P as V,I as _}from"./infoCollection-c6200630.js";import{i as B,u as M,a as K,s as Y,p as $,g as z}from"./trial-83be9158.js";import{p as G}from"./product-906afd23.js";import{t as J,g as W,a as X,o as Q,s as Z,v as ee,b as ae,j as re}from"./utils-9df6a009.js";import{t as te}from"./theme-ea709837.js";import{d as ne,B as oe,D as le,G as se,S as ie,H as de,P as ue,U as ce,_ as me,W as pe,a as ve}from"./auth-4fb7bc4f.js";import{_ as ye}from"./close-f6381363.js";import"./pdfh5-008ca364.js";import"./isObjectLike-d00d103b.js";import"./trial-c32c5405.js";import"./index-9d14d55c.js";import"./index-d9a68a44.js";import"./index-2799f2a2.js";import"./index-ae0a5717.js";import"./bankCard-1076e074.js";import"./validator-5a13dc82.js";import"./phoneVerify-45608cff.js";const fe={key:0},he={class:"page-internet-product-detail"},Ie={class:"info"},Ne={class:"footer-button"},ge={class:"price"},we=(e=>(D("data-v-224d0f1e"),e=e(),j(),e))((()=>N("span",null,"总保费",-1))),be={key:0};var ke=e(a({__name:"packageProcess",setup(e){const a=r(),D=t(),{productCode:j="BWYL2021",tenantId:ke,orderNo:Te,phoneNo:Ce,agentCode:Fe="",saleChannelId:Oe,paymentMethod:Le,certNo:Pe,name:De,pageCode:je,from:Se}=D.query,He=n(),xe=n(),Ee=n(),Ue=n(),Ae="payBack"===je;n(!1);const qe=n(!1),Re=n(!1),Ve=n(0),_e=n(!1),Be=n(!1),Me=n({show:!1,html:""}),Ke=n({}),Ye=n(),$e=n(!1),ze=n("");let Ge="";const Je=o({holder:{certNo:Pe,certType:l.CERT,mobile:Ce,name:De,socialFlag:q.HAS},insured:{certNo:Pe,certType:l.CERT,name:De,socialFlag:q.HAS,relationToHolder:R.SELF},paymentMethod:Le,renewalDK:"Y",paymentFrequency:V.YEAR,packageProductList:[],mobileSmsCode:""}),We=n(ne),Xe=n(ne),Qe=o({showInsure:!Ae,canInsure:!1,canUpgrade:!1}),Ze=s((()=>{var e,a;return(null==(a=null==(e=xe.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"===e.attachmentName)))||[]})),ea=s((()=>{var e,a;return(null==(a=null==(e=xe.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName)))||[]})),aa=()=>{ze.value=Ue.value?Je.paymentFrequency==V.YEAR?"元/年":"元/月":""},ra=()=>{a.push({path:"/internet/guaranteeUpgrade",query:{...D.query,tenantId:ke,productCode:"BWYL2022",orderNo:Te,agentCode:Fe}})},ta=()=>{Be.value=!1},na=()=>{Xe.value=We.value},oa=()=>{Xe.value={...Xe.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},la=e=>`${x}/internet/payFail?tenantId=${ke}&orderNo=${e}&agentCode=${Fe}&pageCode=payBack&from=${Se||"normal"}`,sa=async e=>{const a=W({tenantId:ke,saleUserId:Fe,saleChannelId:Oe,detail:xe.value,insureDetail:Ee.value,paymentMethod:Je.paymentMethod,paymentFrequency:Je.paymentFrequency,renewalDK:Je.renewalDK,iseeBizNo:Ge,successJumpUrl:"",premium:Ue.value,holder:Je.holder,insured:Je.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:"",orderNo:Te,originOrderIds:Ye.value});try{const e=await Y(a),{code:t,data:n}=e;Re.value=!1,qe.value=!1,"10000"===t&&(F.clear(),delete a.id,Ke.value={orderNo:n.data,order:a},Re.value=!0,r=0,Ve.value=r,Re.value=!0)}catch(t){F.clear(),Qe.canInsure=!0}var r},ia=()=>new Promise(((e,a)=>{var r,t;null==(t=null==(r=He.value)?void 0:r.validateForm)||t.call(r).then((async()=>{if(!(()=>{if(Je.holder.certNo){const e=E(Je.holder.certNo);if(ee(Je.holder.certNo,18,"year"))return F("投保人年龄必须大于等于18岁！"),!1;if(Je.insured.certNo&&Je.insured.relationToHolder===R.MATE&&e===E(Je.insured.certNo))return F("被保人为配偶时，性别不可相同！"),!1}if(Je.insured.certNo){if(Je.insured.relationToHolder===R.CHILD&&ee(Je.insured.certNo,30,"day"))return F("被保人为子女时，年龄必须大于等于30天！"),!1;if(Je.insured.relationToHolder===R.PARENT&&!ee(Je.insured.certNo,71,"year"))return F("被保人为父母时，年龄必须小于等于70岁！"),!1}if([R.CHILD,R.PARENT].includes(Je.insured.relationToHolder)){const e=ae(Je.holder.certNo,"year"),a=ae(Je.insured.certNo,"year");if(Je.insured.relationToHolder===R.CHILD&&e-a<18)return F("投保人和子女年龄必须相差18岁！"),!1;if(Je.insured.relationToHolder===R.PARENT&&a-e<18)return F("投保人和父母年龄必须相差18岁！"),!1}return!0})())return void(Qe.canInsure=!0);const{calcData:r,riskVOList:t}=X({holder:Je.holder,insured:Je.insured,tenantId:ke,productDetail:xe.value,insureDetail:Ee.value,paymentFrequency:Je.paymentFrequency,packageRiskIdList:Q(Je.packageProductList)},!1,re);(!Array.isArray(t)||t.length<1)&&(F("被保人年龄需在30天(含) - 70岁(含)之间！"),Ue.value=null,a(new Error));const n=await $(r),{code:o,data:l}=n;"10000"===o?(Ue.value=l.premium,e({condition:t,data:l})):(Ue.value=null,a(new Error))})).catch((e=>{Qe.canInsure=!0,Z(e)}))})),da=async()=>{var e;if(Ae)ra();else try{F.loading({message:"订单生成中...",forbidClick:!0,duration:0});const{condition:a,data:r}=await ia(),t={},n=(e=[])=>{(e||[]).forEach((e=>{var a;t[e.riskCode]=e,(null==(a=e.riskPremiumDetailVOList)?void 0:a.length)&&n(e.riskPremiumDetailVOList)}))};n(r.riskPremiumDetailVOList);const o=J({tenantId:ke,riskList:a,riskPremium:t,productId:null==(e=xe.value)?void 0:e.id});sa(o)}catch(a){Qe.canInsure=!0}finally{F.clear()}},ua=e=>{var a;"allFalse"===e?(qe.value=!1,Qe.canInsure=!0,(async e=>{F.loading({message:"核保中...",forbidClick:!0,duration:0});try{const a=await M(e),{code:r}=a;if("10000"===r){const a=await K({orderNo:e.orderNo,tenantId:ke}),{data:r}=a;"10000"===a.code&&(2===r.type?(Me.value={show:!0,html:r.paymentUrl},console.log("data.paymentUrl",Me.value),H((()=>{console.log("document.forms",document.forms);const e=document.getElementById("cashierSubmit");null==e||e.addEventListener("submit",(e=>{e.preventDefault()})),null==e||e.submit()}))):window.location.href=r.paymentUrl)}Qe.canInsure=!0}catch(a){Qe.canInsure=!0}finally{F.clear()}})({...Ke.value.order,orderNo:Ke.value.orderNo,extInfo:{extraInfo:{renewalDK:Je.renewalDK,paymentMethod:Je.paymentMethod,paymentFrequency:Je.paymentFrequency,successJumpUrl:(a=Ke.value.orderNo,`${x}/pay?orderNo=${a}&saleUserId=${Fe}&tenantId=${ke}`),failUrl:la(Ke.value.orderNo)},iseeBizNo:Ge}})):O.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()})).catch((()=>{Qe.canInsure=!0}))},ca=()=>{Re.value=!1,qe.value=!1,Qe.canInsure=!0},ma=()=>{Re.value=!1,qe.value=!0};i([()=>Je.insured.certNo,()=>Je.insured.socialFlag,()=>Je.packageProductList,()=>Je.paymentFrequency],U((()=>{Je.insured.certNo&&Je.insured.socialFlag&&(()=>{const{holder:{certNo:e,mobile:a,name:r,socialFlag:t},insured:{certNo:n,name:o,socialFlag:l,relationToHolder:s},paymentMethod:i}=Je;return!(!S(n)||!l)})()&&(async()=>{const{calcData:e,riskVOList:a}=X({holder:Je.holder,insured:Je.insured,tenantId:ke,productDetail:xe.value,insureDetail:Ee.value,paymentFrequency:Je.paymentFrequency,packageRiskIdList:Q(Je.packageProductList)},!1,re);if(!Array.isArray(a)||a.length<1)return F("被保人年龄需在30天(含) - 70岁(含)之间！"),Ue.value=null,{};$e.value=!0;const r=await $(e);$e.value=!1;const{code:t,data:n}=r;"10000"===t?Je.insured.certNo?(Ue.value=n.premium,aa()):(Ue.value=null,aa()):Ue.value=null})()}),500),{deep:!0,immediate:!0}),i((()=>Je.insured.certNo),(()=>{Je.insured.certNo||(Ue.value=null)}));const pa=async()=>{var e,a,r,t,n,o,l,s,i,d,u,c,m,p,v;const y=await z({orderNo:Te,tenantId:ke}),{code:f,data:h}=y;if("10000"===f){const{id:y,tenantOrderHolder:f,tenantOrderInsuredList:I,extInfo:N}=h;if(!Ae){Ye.value={id:y,holderId:null==f?void 0:f.id,insuredId:null==I?void 0:I[0].id};const s=((null==(a=null==(e=I[0])?void 0:e.tenantOrderProductList[0])?void 0:a.tenantOrderRiskList)||[]).map((e=>{var a;return(null==(a=e.extInfo)?void 0:a.riskId)||""}));return Je.packageProductList.forEach((e=>{e.value=e.productRiskVoList.filter((e=>s.includes(e.id))).length>0?_.INSURE:_.UN_INSURE})),Object.assign(Je,{holder:{certNo:f.certNo,certType:f.certType,mobile:f.mobile,name:f.name,socialFlag:q.HAS},insured:{certNo:null==I?void 0:I[0].certNo,certType:null==(r=I[0])?void 0:r.certType,name:null==(t=I[0])?void 0:t.name,socialFlag:null==(o=null==(n=I[0])?void 0:n.extInfo)?void 0:o.hasSocialInsurance,relationToHolder:null==(l=I[0])?void 0:l.relationToHolder},paymentMethod:N.extraInfo.paymentMethod,paymentFrequency:N.extraInfo.paymentFrequency,renewalDK:N.extraInfo.renewalDK||"N"}),void(Qe.canInsure=!0)}Object.assign(Je,{holder:{certNo:f.certNo,certType:f.certType,mobile:f.mobile,name:f.name,socialFlag:q.HAS},insured:{certNo:null==I?void 0:I[0].certNo,certType:null==(s=I[0])?void 0:s.certType,name:null==(i=I[0])?void 0:i.name,socialFlag:null==(u=null==(d=I[0])?void 0:d.extInfo)?void 0:u.hasSocialInsurance,relationToHolder:null==(c=I[0])?void 0:c.relationToHolder},paymentMethod:N.extraInfo.paymentMethod,paymentFrequency:N.extraInfo.paymentFrequency,renewalDK:N.extraInfo.renewalDK||"N"}),Ue.value=null==(v=null==(p=null==(m=I[0])?void 0:m.tenantOrderProductList)?void 0:p[0])?void 0:v.premium,h.orderStatus!==A.ACCEPT_POLICY&&h.orderStatus!==A.PAYMENT_SUCCESS||(Qe.canUpgrade=!0,_e.value=!1,Be.value=!0),h.orderStatus===A.PAYING&&(_e.value=!0,setTimeout((()=>{pa()}),3e3))}};return d((()=>{console.log("投保链接"),Xe.value=ve,We.value=ve,Qe.canInsure=!0,(async()=>{var e,a;const r=await G({productCode:j,withInsureInfo:!0,tenantId:ke});"10000"===r.code&&(xe.value=r.data,document.title=(null==(e=r.data)?void 0:e.productFullName)||"");const t=await B({productCode:j});"10000"===t.code&&(Je.packageProductList=((null==(a=t.data)?void 0:a.packageProductVOList)||[]).map((e=>({...e,value:_.UN_INSURE,disabled:!1}))),Ee.value=t.data),Te&&pa()})(),setTimeout((async()=>{Ge=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const r=u,t=L,n=P,o=c("dompurify-html");return m(),p(C,null,[v(n,{"theme-vars":f(te)},{default:y((()=>{var e,a,n,l,s,i,d;return[f(Me).show?h((m(),p("div",fe,null,512)),[[o,f(Me).html]]):I("",!0),N("div",he,[N("div",Ie,[v(oe,{url:null==(a=null==(e=f(xe))?void 0:e.tenantProductInsureVO)?void 0:a.banner[0]},null,8,["url"]),v(le,{"product-name":null==(n=f(xe))?void 0:n.productFullName,"product-desc":null==(s=null==(l=f(xe))?void 0:l.showConfigVO)?void 0:s.desc},null,8,["product-name","product-desc"])]),v(se,{"show-service-config":"","guarantee-list":null==(d=null==(i=f(xe))?void 0:i.tenantProductInsureVO)?void 0:d.titleAndDescVOS},null,8,["guarantee-list"]),v(ie,{detail:f(xe).tenantProductInsureVO},{form:y((()=>[v(de,{ref_key:"formRef",ref:He,"is-show-package":"",disable:!f(Qe).showInsure,"form-auth":f(Xe),"form-info":f(Je),"product-detail":f(xe),onOnReset:na,onOnUpdate:oa},null,8,["disable","form-auth","form-info","product-detail"])])),_:1},8,["detail"]),N("div",Ne,[N("div",ge,[we,f($e)?(m(),b(r,{key:1,class:"premium-loading",type:"spinner"})):(m(),p("span",be,g(f(Ue)?"￥":"")+g(f(w)(f(Ue)))+" "+g(f(ze)),1))]),v(t,{type:"primary",class:"right",disabled:!(f(Qe).canInsure||f(Qe).canUpgrade),onClick:da},{default:y((()=>[k(g(f(Qe).showInsure?"立即投保":"升级保障"),1)])),_:1},8,["disabled"])])]),f(Te)?I("",!0):(m(),b(ue,{key:1,"product-detail":f(xe)},null,8,["product-detail"])),v(ce,{"order-no":f(Te),"tenant-id":f(ke),"is-show":f(Be),onOnConfirm:ra,onOnClose:ta},null,8,["order-no","tenant-id","is-show"])]})),_:1},8,["theme-vars"]),v(me,{show:f(qe),"onUpdate:show":a[0]||(a[0]=e=>T(qe)?qe.value=e:null),"content-list":f(Ze),"active-index":0,onOnConfirmHealth:ua,onOnCloseHealth:ca},null,8,["show","content-list"]),f(Re)?(m(),b(ye,{key:0,show:f(Re),"onUpdate:show":a[1]||(a[1]=e=>T(Re)?Re.value=e:null),"content-list":f(ea),"active-index":f(Ve),text:"我已逐页阅读并确认告知内容","force-read-cound":2,"on-close-file-preview":"",onSubmit:ma,onOnCloseFilePreview:ca},null,8,["show","content-list","active-index"])):I("",!0),v(pe,{"is-show":f(_e)},null,8,["is-show"])],64)}}}),[["__scopeId","data-v-224d0f1e"]]);export{ke as default};
