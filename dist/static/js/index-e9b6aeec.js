var Ge=Object.defineProperty,Je=Object.defineProperties;var je=Object.getOwnPropertyDescriptors;var pe=Object.getOwnPropertySymbols;var Qe=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable;var fe=(v,s,c)=>s in v?Ge(v,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):v[s]=c,B=(v,s)=>{for(var c in s||(s={}))Qe.call(s,c)&&fe(v,c,s[c]);if(pe)for(var c of pe(s))Xe.call(s,c)&&fe(v,c,s[c]);return v},w=(v,s)=>Je(v,je(s));import{g as Ze,a9 as et,O as tt,E as f,M as he,y as j,T as C,_ as at,l as rt,h as ot,r as ye,af as ut,j as S,n as Q,p as D,m as X,H as nt,t as q,z as V,A as h,J as Fe,C as Be,k as ve,F as st,D as lt,X as it}from"./vendor-c3c577f2.js";import{_ as ct,C as De,I as Ee,H as dt,a0 as mt,a1 as Ce}from"./index-2ffcb916.js";import{a as Z}from"./order-26db6dbf.js";import{S as $,R as g,g as pt}from"./infoCollection-9259d69e.js";import{p as ge,i as ft,s as ht,g as yt,u as Ft,a as vt}from"./trial-24bcea63.js";import{p as Dt}from"./product-ea737108.js";import{g as x,a as Ne,t as Et,b as Ct}from"./utils-463a7bf4.js";import{t as gt}from"./theme-ea709837.js";import{d as _e,B as Nt,D as _t,G as It,S as Bt,H as wt,P as At,U as Tt,_ as bt,W as Ot,p as Ie,a as Y}from"./auth-a26d7c09.js";import{_ as Pt}from"./index-df6bde03.js";import"./utils-b6782348.js";import"./trial-a5225f92.js";import"./check-detail-9f866eaa.js";import"./index-65f7cbff.js";import"./bankCard-0e4ce564.js";import"./phoneVerify-f67a7386.js";import"./close-df102554.js";const Ht={key:0},St={class:"page-internet-product-detail"},xt={class:"info"},kt={class:"footer-button"},Ut={class:"price"},Mt=Be(" \u603B\u4FDD\u8D39"),Rt={key:0},Lt=Ze({setup(v){const s=et(),c=tt(),{productCode:K="BWYL2021",tenantId:y,orderNo:N,phoneNo:ee,agentCode:A="",saleChannelId:we,paymentMethod:Ae,certNo:te,name:ae,pageCode:W,upgradeCode:Te,from:re}=c.query;console.log(c.query,"route.query");const oe=f(),d=f(),T=f(),_=f(),k=W==="payBack",be=f(!1),U=f(!1),M=f(!1),Oe=f(0),z=f(!1),G=f(!1),R=f({show:!1,html:""});let J="";const t=he({holder:{certNo:te,certType:De.CERT,mobile:ee,name:ae,socialFlag:$.HAS},insured:{certNo:te,certType:De.CERT,name:ae,socialFlag:$.HAS,relationToHolder:g.SELF},paymentMethod:Ae,renewalDK:"Y",paymentFrequency:pt.MONTH}),L=f(_e),I=f(_e),l=he({showInsure:!k,canInsure:!1,canUpgrade:!1}),Pe=j(()=>{var a,e;return((e=(a=d.value)==null?void 0:a.tenantProductInsureVO)==null?void 0:e.attachmentVOList.filter(r=>r.attachmentName==="\u5065\u5EB7\u544A\u77E5"))||[]}),He=j(()=>{var a,e;return((e=(a=d.value)==null?void 0:a.tenantProductInsureVO)==null?void 0:e.attachmentVOList.filter(r=>r.attachmentName!=="\u5065\u5EB7\u544A\u77E5"))||[]}),ue=j(()=>{if(t.holder.certNo){const a=x(t.holder.certNo,"year"),e=Ee(t.holder.certNo);if(a<18)return C("\u6295\u4FDD\u4EBA\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E18\u5C81\uFF01"),!1;if(t.insured.certNo&&t.insured.relationToHolder===g.MATE){const r=Ee(t.insured.certNo);if(e===r)return C("\u88AB\u4FDD\u4EBA\u4E3A\u914D\u5076\u65F6\uFF0C\u6027\u522B\u4E0D\u53EF\u76F8\u540C\uFF01"),!1}}if(t.insured.certNo){const a=x(t.insured.certNo,"day"),e=x(t.insured.certNo,"year");if(t.insured.relationToHolder===g.CHILD&&a<30)return C("\u88AB\u4FDD\u4EBA\u4E3A\u5B50\u5973\u65F6\uFF0C\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E30\u5929\uFF01"),!1;if(t.insured.relationToHolder===g.PARENT&&e>=71)return C("\u88AB\u4FDD\u4EBA\u4E3A\u7236\u6BCD\u65F6\uFF0C\u5E74\u9F84\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E70\u5C81\uFF01"),!1}if([g.CHILD,g.PARENT].includes(t.insured.relationToHolder)){const a=x(t.holder.certNo,"year"),e=x(t.insured.certNo,"year");if(t.insured.relationToHolder===g.CHILD&&a-e<18)return C("\u6295\u4FDD\u4EBA\u548C\u5B50\u5973\u5E74\u9F84\u5FC5\u987B\u76F8\u5DEE18\u5C81\uFF01"),!1;if(t.insured.relationToHolder===g.PARENT&&e-a<18)return C("\u6295\u4FDD\u4EBA\u548C\u7236\u6BCD\u5E74\u9F84\u5FC5\u987B\u76F8\u5DEE18\u5C81\uFF01"),!1}return!0}),Se=()=>{const{holder:{certNo:a,mobile:e,name:r,socialFlag:n},insured:{certNo:o,name:u,socialFlag:m,relationToHolder:p},paymentMethod:F}=t;return dt(o)&&!!m},ne=()=>{s.push({path:"/internet/guaranteeUpgrade",query:w(B({},c.query),{tenantId:y,productCode:"BWYL2022",orderNo:N,agentCode:A})})},xe=()=>{G.value=!1,s.replace(`/pay?orderNo=${N}&saleUserId=${A}&tenantId=${y}`)},ke=()=>{I.value=L.value},Ue=()=>{I.value=w(B({},I.value),{relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1})},Me=async a=>{C.loading({message:"\u6838\u4FDD\u4E2D...",forbidClick:!0});try{const e=await Ft(a),{code:r}=e;if(r==="10000"){C.loading({message:"\u6838\u4FDD\u4E2D...",forbidClick:!0});const n=await vt({orderNo:a.orderNo,tenantId:y}),{data:o}=n;n.code==="10000"&&(o.type===2?(R.value={show:!0,html:o.paymentUrl},console.log("data.paymentUrl",R.value),it(()=>{console.log("document.forms",document.forms);const u=document.getElementById("cashierSubmit");u==null||u.addEventListener("submit",m=>{m.preventDefault()}),u==null||u.submit()})):window.location.href=o.paymentUrl)}l.canInsure=!0}catch{l.canInsure=!0}},Re=a=>{var o,u;const e=JSON.parse((u=(o=T.value)==null?void 0:o.productBasicInfoVO)==null?void 0:u.extInfo);let r="";return e.endorsementFlag===1&&(r=`&upgradeCode=${e.endorsementCode}`),`${Ce}/internet/productDetail?tenantId=${y}&productCode=${K}&orderNo=${a}&agentCode=${A}&pageCode=payBack${r}&from=${re||"normal"}`},Le=a=>`${Ce}/internet/payFail?tenantId=${y}&orderNo=${a}&agentCode=${A}&pageCode=payBack&from=${re||"normal"}`,qe=async a=>{const e=Ct({tenantId:y,saleUserId:A,saleChannelId:we,detail:d.value,insureDetail:T.value,paymentMethod:t.paymentMethod,renewalDK:t.renewalDK,iseeBizNo:J,successJumpUrl:"",premium:_.value,holder:t.holder,insured:t.insured,tenantOrderRiskList:a,orderStatus:"",orderTopStatus:""});try{const r=await ht(e),{code:n,data:o}=r;n==="10000"&&Me(w(B({},e),{orderNo:o.data,extInfo:{extraInfo:{renewalDK:t.renewalDK,paymentMethod:t.paymentMethod,paymentFrequency:t.paymentFrequency,successJumpUrl:Re(o.data),failUrl:Le(o.data)},iseeBizNo:J}}))}catch{l.canInsure=!0}},Ve=async()=>{if(!ue.value)return{};const{calcData:a,riskVOList:e}=Ne({holder:t.holder,insured:t.insured,tenantId:y,paymentFrequency:t.paymentFrequency,productDetail:d.value,insureDetail:T.value},!0),r=await ge(a),{code:n,data:o}=r;return n==="10000"?(_.value=o.premium,{condition:e,data:o}):{}},$e=()=>new Promise((a,e)=>{var r,n;(n=(r=oe.value)==null?void 0:r.validateForm)==null||n.call(r).then(async()=>{if(!ue.value)return;const{calcData:o,riskVOList:u}=Ne({holder:t.holder,insured:t.insured,tenantId:y,paymentFrequency:t.paymentFrequency,productDetail:d.value,insureDetail:T.value},!0),m=await ge(o),{code:p,data:F}=m;p==="10000"?(_.value=F.premium,a({condition:u,data:F})):e(new Error)}).catch(()=>{l.canInsure=!0})}),se=async()=>{var a;if(k){ne();return}l.canInsure=!1;try{const{condition:e,data:r}=await $e(),n={},o=(m=[])=>{(m||[]).forEach(p=>{var F;n[p.riskCode]=p,((F=p.riskPremiumDetailVOList)==null?void 0:F.length)&&o(p.riskPremiumDetailVOList)})};o(r.riskPremiumDetailVOList);const u=Et({tenantId:y,riskList:e,riskPremium:n,productId:(a=d.value)==null?void 0:a.id});qe(u)}catch{l.canInsure=!0}},Ye=a=>{a==="allFalse"?(U.value=!1,se(),l.canInsure=!0):lt.confirm({message:"\u60A8\u5F53\u524D\u7684\u5065\u5EB7\u72B6\u51B5\u4E0D\u7B26\u5408\u8BE5\u4EA7\u54C1",confirmButtonText:"\u786E\u5B9A"}).then(()=>{window.history.back()})},Ke=()=>{be.value=!0,M.value=!1,U.value=!0};at([()=>t.insured.certNo,()=>t.insured.socialFlag],rt.exports.debounce(()=>{t.insured.certNo&&t.insured.socialFlag&&W!=="payBack"&&Se()&&Ve()},500),{deep:!0,immediate:!0});const le=async()=>{var n,o,u,m,p,F,b,O,P,ie,ce,de,me;const a=await yt({orderNo:N,tenantId:y}),{code:e,data:r}=a;if(e==="10000"){const{tenantOrderHolder:E,tenantOrderInsuredList:i,extInfo:H}=r;if(!k){Object.assign(t,{holder:{certNo:E.certNo,certType:E.certType,mobile:E.mobile,name:E.name,socialFlag:$.HAS},insured:{certNo:i==null?void 0:i[0].certNo,certType:(n=i[0])==null?void 0:n.certType,name:(o=i[0])==null?void 0:o.name,socialFlag:(m=(u=i[0])==null?void 0:u.extInfo)==null?void 0:m.hasSocialInsurance,relationToHolder:(p=i[0])==null?void 0:p.relationToHolder},paymentMethod:H.extraInfo.paymentMethod,paymentFrequency:H.extraInfo.paymentFrequency,renewalDK:"Y"}),l.canInsure=!0;return}Object.assign(t,{holder:{certNo:E.certNo,certType:E.certType,mobile:E.mobile,name:E.name,socialFlag:$.HAS},insured:{certNo:i==null?void 0:i[0].certNo,certType:(F=i[0])==null?void 0:F.certType,name:(b=i[0])==null?void 0:b.name,socialFlag:(P=(O=i[0])==null?void 0:O.extInfo)==null?void 0:P.hasSocialInsurance,relationToHolder:(ie=i[0])==null?void 0:ie.relationToHolder},paymentMethod:H.extraInfo.paymentMethod,paymentFrequency:H.extraInfo.paymentFrequency,renewalDK:H.extraInfo.renewalDK||"N"}),_.value=(me=(de=(ce=i[0])==null?void 0:ce.tenantOrderProductList)==null?void 0:de[0])==null?void 0:me.premium,(r.orderStatus===Z.ACCEPT_POLICY||r.orderStatus===Z.PAYMENT_SUCCESS)&&(l.canUpgrade=!0,z.value=!1,G.value=!0),r.orderStatus===Z.PAYING&&(z.value=!0,setTimeout(()=>{le()},3*1e3))}},We=async()=>{const a=Dt({productCode:K,withInsureInfo:!0,tenantId:y}),e=ft({productCode:K});await Promise.all([a,e]).then(([r,n])=>{var o;r.code==="10000"&&(d.value=r.data,document.title=((o=r.data)==null?void 0:o.productFullName)||""),n.code==="10000"&&(T.value=n.data)}),N&&le()},ze=()=>{k?(I.value=Ie,L.value=Ie,console.log("\u652F\u4ED8\u5B8C\u6210\u8FDB\u5165")):N?(console.log("\u6295\u4FDD\u94FE\u63A5-\u6765\u4ED8\u94B1"),I.value=w(B({},Y),{paymentFrequencyDisable:!0}),L.value=Y,l.canInsure=!0):ee||N||(console.log("\u6295\u4FDD\u94FE\u63A5"),I.value=w(B({},Y),{paymentFrequencyDisable:!0}),L.value=Y,l.canInsure=!0)};return ot(()=>{ze(),We(),setTimeout(async()=>{J=window.getIseeBiz&&await window.getIseeBiz()},1500)}),(a,e)=>{const r=ye("van-button"),n=ye("van-config-provider"),o=ut("dompurify-html");return S(),Q(st,null,[D(n,{"theme-vars":h(gt)},{default:X(()=>{var u,m,p,F,b,O,P;return[R.value.show?nt((S(),Q("div",Ht,null,512)),[[o,R.value.html]]):q("",!0),V("div",St,[V("div",xt,[D(Nt,{url:(m=(u=d.value)==null?void 0:u.tenantProductInsureVO)==null?void 0:m.banner[0]},null,8,["url"]),D(_t,{"product-name":(p=d.value)==null?void 0:p.productFullName,"product-desc":(b=(F=d.value)==null?void 0:F.showConfigVO)==null?void 0:b.desc},null,8,["product-name","product-desc"])]),D(It,{"guarantee-list":(P=(O=d.value)==null?void 0:O.tenantProductInsureVO)==null?void 0:P.titleAndDescVOS},null,8,["guarantee-list"]),D(Bt,{detail:d.value},{form:X(()=>[D(wt,{ref_key:"formRef",ref:oe,disable:!h(l).showInsure,"form-auth":I.value,"form-info":h(t),premium:_.value,"product-detail":d.value,payments:[1],"payment-method":[0],onOnReset:ke,onOnUpdate:Ue},null,8,["disable","form-auth","form-info","premium","product-detail"])]),_:1},8,["detail"]),V("div",kt,[V("div",Ut,[Mt,_.value?(S(),Q("span",Rt,"\uFFE5"+Fe(h(mt)(_.value))+"/\u6708",1)):q("",!0)]),D(r,{type:"primary",class:"right",disabled:!(h(l).canInsure||h(l).canUpgrade),onClick:se},{default:X(()=>[Be(Fe(h(l).showInsure?"\u7ACB\u5373\u6295\u4FDD":"\u5347\u7EA7\u4FDD\u969C"),1)]),_:1},8,["disabled"])])]),h(W)!=="payBack"?(S(),ve(At,{key:1,"product-detail":d.value},null,8,["product-detail"])):q("",!0),D(Tt,{"order-no":h(N),"tenant-id":h(y),"upgrade-code":h(Te),"is-show":G.value,onOnConfirm:ne,onOnClose:xe},null,8,["order-no","tenant-id","upgrade-code","is-show"])]}),_:1},8,["theme-vars"]),D(bt,{show:U.value,"onUpdate:show":e[0]||(e[0]=u=>U.value=u),"content-list":h(Pe),"active-index":0,onOnConfirmHealth:Ye},null,8,["show","content-list"]),M.value?(S(),ve(Pt,{key:0,show:M.value,"onUpdate:show":e[1]||(e[1]=u=>M.value=u),"content-list":h(He),"active-index":Oe.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9",onSubmit:Ke},null,8,["show","content-list","active-index"])):q("",!0),D(Ot,{"is-show":z.value},null,8,["is-show"])],64)}}});var ua=ct(Lt,[["__scopeId","data-v-5e7dc05f"]]);export{ua as default};
