var qe=Object.defineProperty,Ke=Object.defineProperties;var Ge=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var We=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable;var se=(N,f,h)=>f in N?qe(N,f,{enumerable:!0,configurable:!0,writable:!0,value:h}):N[f]=h,m=(N,f)=>{for(var h in f||(f={}))We.call(f,h)&&se(N,h,f[h]);if(ne)for(var h of ne(f))je.call(f,h)&&se(N,h,f[h]);return N},p=(N,f)=>Ke(N,Ge(f));import{g as ze,a9 as Je,O as Qe,E as g,M as ue,y as le,_ as Xe,l as Ze,h as et,r as ie,af as tt,j,n as ce,p as I,m as z,H as at,t as de,z as U,A as E,J as me,C as Ie,k as ot,F as rt,T as pe,X as nt}from"./vendor-505c98f2.js";import{_ as st,C as fe,G as ut,$ as lt,a1 as he}from"./index-19eae3bb.js";import{a as b}from"./order-c0ced472.js";import{S as O,R as ve,f as it}from"./infoCollection-192ba138.js";import{p as ye,i as ct,s as dt,g as mt,a as pt,u as ft,b as ht}from"./trial-9ce1c80c.js";import{p as vt}from"./product-aa727095.js";import{g as De,t as yt,a as Dt}from"./utils-c1bd3df6.js";import{t as Ft}from"./theme-ea709837.js";import{d as Fe,B as gt,D as Ct,G as _t,S as Et,H as It,P as Nt,U as wt,_ as Tt,W as bt,c as V,f as ge,o as Ce,a as Y,n as _e,h as Ee}from"./auth-b41be44a.js";import{_ as At}from"./index-c6042eae.js";import"./utils-b6782348.js";import"./trial-e1718f24.js";import"./index-99ca4ff4.js";import"./bankCard-0e4ce564.js";import"./phoneVerify-4fca9884.js";const Ot={key:0},Pt={class:"page-internet-product-detail"},St={class:"info"},Bt={class:"footer-button"},Ut={class:"price"},kt=Ie(" \u603B\u4FDD\u8D39"),Ht=ze({setup(N){const f=Je(),h=Qe(),{productCode:k="BWYL2021",tenantId:C,orderNo:P,phoneNo:H,agentCode:M="",saleChannelId:Ne,paymentMethod:D,certNo:J,name:Q,pageCode:S,from:X}=h.query;console.log(h.query,"route.query");const $=g(),v=g(),x=g(),A=g(),B=S==="payBack",Z=g(!1),L=g(!1),q=g(!1),ee=g(0),K=g(!1),G=g(!1),R=g({show:!1,html:""});let W="";const s=ue({holder:{certNo:J,certType:fe.CERT,mobile:H,name:Q,socialFlag:O.HAS},insured:{certNo:J,certType:fe.CERT,name:Q,socialFlag:O.HAS,relationToHolder:ve.SELF},paymentMethod:D,renewalDK:"Y",paymentFrequency:it.MONTH}),w=g(Fe),_=g(Fe),u=ue({showInsure:!B,canInsure:!1,canUpgrade:!1}),we=le(()=>{var t,a;return((a=(t=v.value)==null?void 0:t.tenantProductInsureVO)==null?void 0:a.attachmentVOList.filter(e=>e.attachmentName==="\u5065\u5EB7\u544A\u77E5"))||[]}),Te=le(()=>{var t,a;return((a=(t=v.value)==null?void 0:t.tenantProductInsureVO)==null?void 0:a.attachmentVOList.filter(e=>e.attachmentName!=="\u5065\u5EB7\u544A\u77E5"))||[]}),be=()=>{const{holder:{certNo:t,mobile:a,name:e,socialFlag:r},insured:{certNo:o,name:n,socialFlag:i,relationToHolder:c},paymentMethod:y}=s;return ut(o)&&!!i},te=()=>{f.push({path:"/internet/guaranteeUpgrade",query:p(m({},h.query),{tenantId:C,productCode:"BWYL2022",orderNo:P,agentCode:M})})},Ae=()=>{G.value=!1},Oe=()=>{_.value=w.value},Pe=()=>{_.value=p(m({},_.value),{relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1})},Se=async t=>{pe.loading({message:"\u6838\u4FDD\u4E2D...",forbidClick:!0});try{const a=await ft(t),{code:e}=a;if(e==="10000"){pe.loading({message:"\u6838\u4FDD\u4E2D...",forbidClick:!0});const r=await ht({orderNo:t.orderNo,tenantId:C}),{data:o}=r;r.code==="10000"&&(o.type===2?(R.value={show:!0,html:o.paymentUrl},console.log("data.paymentUrl",R.value),nt(()=>{console.log("document.forms",document.forms);const n=document.getElementById("cashierSubmit");n==null||n.addEventListener("submit",i=>{i.preventDefault()}),n==null||n.submit()})):window.location.href=o.paymentUrl)}u.canInsure=!0}catch{u.canInsure=!0}},Be=t=>`${he}/internet/productDetail?tenantId=${C}&productCode=${k}&orderNo=${t}&agentCode=${M}&pageCode=payBack&from=${X||"normal"}`,Ue=t=>`${he}/internet/payFail?tenantId=${C}&orderNo=${t}&agentCode=${M}&pageCode=payBack&from=${X||"normal"}`,ke=async t=>{const a=Dt({tenantId:C,saleUserId:M,saleChannelId:Ne,detail:v.value,insureDetail:x.value,paymentMethod:s.paymentMethod,renewalDK:s.renewalDK,iseeBizNo:W,successJumpUrl:"",premium:A.value,holder:s.holder,insured:s.insured,tenantOrderRiskList:t,orderStatus:"",orderTopStatus:""});try{const e=await dt(a),{code:r,data:o}=e;r==="10000"&&Se(p(m({},a),{orderNo:o.data,extInfo:{extraInfo:{renewalDK:s.renewalDK,paymentMethod:s.paymentMethod,successJumpUrl:Be(o.data),failUrl:Ue(o.data)},iseeBizNo:W}}))}catch{u.canInsure=!0}},He=async()=>{const{calcData:t,riskVOList:a}=De({holder:s.holder,insured:s.insured,tenantId:C,paymentFrequency:s.paymentFrequency,productDetail:v.value,insureDetail:x.value},!0),e=await ye(t),{code:r,data:o}=e;return r==="10000"?(A.value=o.premium,{condition:a,data:o}):{}},Me=t=>{ee.value=t,q.value=!0},xe=()=>new Promise((t,a)=>{var e,r;(r=(e=$.value)==null?void 0:e.validateForm)==null||r.call(e).then(async()=>{var d;if(!(((d=$.value)==null?void 0:d.isAgreeFile)||Z.value)){L.value=!0;return}const{calcData:n,riskVOList:i}=De({holder:s.holder,insured:s.insured,tenantId:C,paymentFrequency:s.paymentFrequency,productDetail:v.value,insureDetail:x.value},!0),c=await ye(n),{code:y,data:F}=c;y==="10000"?(A.value=F.premium,t({condition:i,data:F})):a(new Error)}).catch(()=>{u.canInsure=!0})}),ae=async()=>{var t;if(B){te();return}u.canInsure=!1;try{const{condition:a,data:e}=await xe(),r={},o=(i=[])=>{(i||[]).forEach(c=>{var y;r[c.riskCode]=c,((y=c.riskPremiumDetailVOList)==null?void 0:y.length)&&o(c.riskPremiumDetailVOList)})};o(e.riskPremiumDetailVOList);const n=yt({tenantId:C,riskList:a,riskPremium:r,productId:(t=v.value)==null?void 0:t.id});ke(n)}catch{u.canInsure=!0}},Le=t=>{t==="allFalse"&&(L.value=!1,Me(0)),u.canInsure=!0},Re=()=>{Z.value=!0,ae()};Xe([()=>s.insured.certNo,()=>s.insured.socialFlag],Ze.exports.debounce(()=>{s.insured.certNo&&s.insured.socialFlag&&S!=="payBack"&&be()&&He()},500),{deep:!0,immediate:!0});const oe=async()=>{var r,o,n,i,c,y,F,d;const t=await mt({orderNo:P,tenantId:C}),{code:a,data:e}=t;if(a==="10000"){const{tenantOrderHolder:l,tenantOrderInsuredList:T,extInfo:re}=e;if(!B){Object.assign(s,{holder:{certNo:l.certNo,certType:l.certType,mobile:l.mobile,name:l.name,socialFlag:O.HAS},insured:{certNo:l.certNo,certType:l.certType,name:l.name,socialFlag:O.HAS,relationToHolder:ve.SELF},paymentMethod:D,renewalDK:"Y"}),u.canInsure=!0,_.value=_e,w.value=_e;return}Object.assign(s,{holder:{certNo:l.certNo,certType:l.certType,mobile:l.mobile,name:l.name,socialFlag:O.HAS},insured:{certNo:T==null?void 0:T[0].certNo,certType:(r=T[0])==null?void 0:r.certType,name:(o=T[0])==null?void 0:o.name,socialFlag:(i=(n=T[0])==null?void 0:n.extInfo)==null?void 0:i.hasSocialInsurance,relationToHolder:(c=T[0])==null?void 0:c.relationToHolder},paymentMethod:re.extraInfo.paymentMethod,renewalDK:re.extraInfo.renewalDK||"N"}),A.value=(d=(F=(y=T[0])==null?void 0:y.tenantOrderProductList)==null?void 0:F[0])==null?void 0:d.premium,(e.orderStatus===b.ACCEPT_POLICY||e.orderStatus===b.PAYMENT_SUCCESS)&&(u.canUpgrade=!0,K.value=!1,G.value=!0),e.orderStatus===b.PAYING&&(K.value=!0,setTimeout(()=>{oe()},3*1e3))}},Ve=async()=>{var r,o,n,i,c,y;console.log("\u77ED\u4FE1\u8FDB\u5165\uFF0C\u5E26\u4E86orderNo, mobile");const t=await pt({holderPhone:H,orderStatus:[b.PAYING.toUpperCase(),b.TIMEOUT.toUpperCase(),"ACCEPT_POLICY"],productCode:k,tenantId:C}),{code:a,data:e}=t;if(e.orderStatus===b.ACCEPT_POLICY&&(console.log("\u5DF2\u627F\u4FDD\uFF0C\u88AB\u4FDD\u4EBA\u4FE1\u606F\u4E0D\u80FD\u4FEE\u6539"),_.value=p(m({},Ee),{paymentDisable:!!D}),w.value=p(m({},Ee),{paymentDisable:!!D})),(e.orderStatus===b.PAYING||e.orderStatus===b.TIMEOUT)&&(console.log("\u652F\u4ED8\u4E2D\uFF0C\u8D85\u65F6\u53EF\u4EE5\u4FEE\u6539\u6295\u4FDD\u4EBA\u4FE1\u606F"),_.value=p(m({},Y),{paymentDisable:!!D}),w.value=p(m({},Y),{paymentDisable:!!D})),a==="10000"&&((r=e==null?void 0:e.tenantOrderHolder)==null?void 0:r.certNo)){u.canInsure=!0;const{tenantOrderHolder:F,tenantOrderInsuredList:d,extInfo:l}=e;Object.assign(s,{holder:{certNo:F.certNo,certType:F.certType,mobile:F.mobile,name:F.name,socialFlag:O.HAS},insured:{certNo:d==null?void 0:d[0].certNo,certType:(o=d[0])==null?void 0:o.certType,name:(n=d[0])==null?void 0:n.name,socialFlag:(c=(i=d[0])==null?void 0:i.extInfo)==null?void 0:c.hasSocialInsurance,relationToHolder:(y=d[0])==null?void 0:y.relationToHolder},paymentMethod:D||l.extraInfo.paymentMethod,renewalDK:l.extraInfo.renewalDK})}else _.value=p(m({},V),{paymentDisable:!!D}),w.value=p(m({},V),{paymentDisable:!!D}),u.canInsure=!0},Ye=async()=>{const t=vt({productCode:k,withInsureInfo:!0,tenantId:C}),a=ct({productCode:k});await Promise.all([t,a]).then(([e,r])=>{var o;e.code==="10000"&&(v.value=e.data,document.title=((o=e.data)==null?void 0:o.productFullName)||""),r.code==="10000"&&(x.value=r.data)}),P?oe():H&&S==="productDetail"&&Ve()},$e=()=>{S==="free"?B?(_.value=p(m({},ge),{paymentDisable:!!D}),w.value=p(m({},ge),{paymentDisable:!!D}),u.canInsure=!0):(_.value=p(m({},V),{paymentDisable:!!D}),w.value=p(m({},V),{paymentDisable:!!D}),u.canInsure=!0):B?(_.value=Ce,w.value=Ce,console.log("\u652F\u4ED8\u5B8C\u6210\u8FDB\u5165")):H||P||(console.log("\u6295\u4FDD\u94FE\u63A5"),_.value=p(m({},Y),{paymentFrequencyDisable:!0}),w.value=Y,u.canInsure=!0)};return et(()=>{$e(),Ye(),setTimeout(async()=>{W=window.getIseeBiz&&await window.getIseeBiz()},1500)}),(t,a)=>{const e=ie("van-button"),r=ie("van-config-provider"),o=tt("dompurify-html");return j(),ce(rt,null,[I(r,{"theme-vars":E(Ft)},{default:z(()=>{var n,i,c,y,F,d,l;return[R.value.show?at((j(),ce("div",Ot,null,512)),[[o,R.value.html]]):de("",!0),U("div",Pt,[U("div",St,[I(gt,{url:(i=(n=v.value)==null?void 0:n.tenantProductInsureVO)==null?void 0:i.banner[0]},null,8,["url"]),I(Ct,{"product-name":(c=v.value)==null?void 0:c.productFullName,"product-desc":(F=(y=v.value)==null?void 0:y.showConfigVO)==null?void 0:F.desc},null,8,["product-name","product-desc"])]),I(_t,{"guarantee-list":(l=(d=v.value)==null?void 0:d.tenantProductInsureVO)==null?void 0:l.titleAndDescVOS},null,8,["guarantee-list"]),I(Et,{detail:v.value},{form:z(()=>[I(It,{ref_key:"formRef",ref:$,disable:!E(u).showInsure,"form-auth":_.value,"form-info":E(s),premium:A.value,"product-detail":v.value,payments:[1],"payment-method":[0],onOnReset:Oe,onOnUpdate:Pe},null,8,["disable","form-auth","form-info","premium","product-detail"])]),_:1},8,["detail"]),U("div",Bt,[U("div",Ut,[kt,U("span",null,"\uFFE5"+me(E(lt)(A.value))+"/\u6708",1)]),I(e,{type:"primary",class:"right",disabled:!(E(u).canInsure||E(u).canUpgrade),onClick:ae},{default:z(()=>[Ie(me(E(u).showInsure?"\u7ACB\u5373\u6295\u4FDD":"\u5347\u7EA7\u4FDD\u969C"),1)]),_:1},8,["disabled"])])]),E(S)!=="payBack"?(j(),ot(Nt,{key:1,"product-detail":v.value},null,8,["product-detail"])):de("",!0),I(wt,{"order-no":E(P),"tenant-id":E(C),"is-show":G.value,onOnConfirm:te,onOnClose:Ae},null,8,["order-no","tenant-id","is-show"])]}),_:1},8,["theme-vars"]),I(Tt,{show:L.value,"onUpdate:show":a[0]||(a[0]=n=>L.value=n),"content-list":E(we),"active-index":0,onOnConfirmHealth:Le},null,8,["show","content-list"]),I(At,{show:q.value,"onUpdate:show":a[1]||(a[1]=n=>q.value=n),"content-list":E(Te),"active-index":ee.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9",onSubmit:Re},null,8,["show","content-list","active-index"]),I(bt,{"is-show":K.value},null,8,["is-show"])],64)}}});var Zt=st(Ht,[["__scopeId","data-v-d5f905fc"]]);export{Zt as default};
