var Ke=Object.defineProperty,Ge=Object.defineProperties;var We=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable;var se=(N,f,h)=>f in N?Ke(N,f,{enumerable:!0,configurable:!0,writable:!0,value:h}):N[f]=h,m=(N,f)=>{for(var h in f||(f={}))je.call(f,h)&&se(N,h,f[h]);if(ne)for(var h of ne(f))ze.call(f,h)&&se(N,h,f[h]);return N},p=(N,f)=>Ge(N,We(f));import{g as Je,a9 as Qe,O as Xe,E as F,M as ue,y as le,_ as Ze,l as et,h as tt,r as ie,af as at,j,n as ce,p as _,m as z,H as ot,t as de,z as k,A as C,J as me,C as _e,k as rt,F as nt,D as st,T as pe,X as ut}from"./vendor-505c98f2.js";import{_ as lt,C as fe,G as it,$ as ct,a1 as he}from"./index-60c4c699.js";import{a as A}from"./order-c0ced472.js";import{S as B,R as ve,f as dt}from"./infoCollection-192ba138.js";import{p as ye,i as mt,s as pt,g as ft,a as ht,u as vt,b as yt}from"./trial-4e40dbc6.js";import{p as Dt}from"./product-08a310c7.js";import{g as De,t as gt,a as Ft}from"./utils-54a090bf.js";import{t as Ct}from"./theme-ea709837.js";import{d as ge,B as Et,D as It,G as _t,S as Nt,H as wt,P as Tt,U as At,_ as bt,W as Bt,c as $,f as Fe,o as Ce,a as Y,n as Ee,h as Ie}from"./auth-d07d25ce.js";import{_ as Ot}from"./index-792b46f3.js";import"./utils-b6782348.js";import"./trial-0b505a12.js";import"./index-b91c0bc0.js";import"./bankCard-0e4ce564.js";import"./phoneVerify-cef4db66.js";const Pt={key:0},St={class:"page-internet-product-detail"},Ut={class:"info"},xt={class:"footer-button"},kt={class:"price"},Ht=_e(" \u603B\u4FDD\u8D39"),Mt=Je({setup(N){const f=Qe(),h=Xe(),{productCode:H="BWYL2021",tenantId:E,orderNo:O,phoneNo:M,agentCode:L="",saleChannelId:Ne,paymentMethod:D,certNo:J,name:Q,pageCode:P,upgradeCode:we,from:X}=h.query;console.log(h.query,"route.query");const q=F(),v=F(),S=F(),b=F(),U=P==="payBack",Z=F(!1),V=F(!1),x=F(!1),ee=F(0),K=F(!1),G=F(!1),R=F({show:!1,html:""});let W="";const s=ue({holder:{certNo:J,certType:fe.CERT,mobile:M,name:Q,socialFlag:B.HAS},insured:{certNo:J,certType:fe.CERT,name:Q,socialFlag:B.HAS,relationToHolder:ve.SELF},paymentMethod:D,renewalDK:"Y",paymentFrequency:dt.MONTH}),w=F(ge),I=F(ge),u=ue({showInsure:!U,canInsure:!1,canUpgrade:!1}),Te=le(()=>{var a,t;return((t=(a=v.value)==null?void 0:a.tenantProductInsureVO)==null?void 0:t.attachmentVOList.filter(e=>e.attachmentName==="\u5065\u5EB7\u544A\u77E5"))||[]}),Ae=le(()=>{var a,t;return((t=(a=v.value)==null?void 0:a.tenantProductInsureVO)==null?void 0:t.attachmentVOList.filter(e=>e.attachmentName!=="\u5065\u5EB7\u544A\u77E5"))||[]}),be=()=>{const{holder:{certNo:a,mobile:t,name:e,socialFlag:n},insured:{certNo:o,name:r,socialFlag:i,relationToHolder:c},paymentMethod:y}=s;return it(o)&&!!i},te=()=>{f.push({path:"/internet/guaranteeUpgrade",query:p(m({},h.query),{tenantId:E,productCode:"BWYL2022",orderNo:O,agentCode:L})})},Be=()=>{G.value=!1},Oe=()=>{I.value=w.value},Pe=()=>{I.value=p(m({},I.value),{relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1})},Se=async a=>{pe.loading({message:"\u6838\u4FDD\u4E2D...",forbidClick:!0});try{const t=await vt(a),{code:e}=t;if(e==="10000"){pe.loading({message:"\u6838\u4FDD\u4E2D...",forbidClick:!0});const n=await yt({orderNo:a.orderNo,tenantId:E}),{data:o}=n;n.code==="10000"&&(o.type===2?(R.value={show:!0,html:o.paymentUrl},console.log("data.paymentUrl",R.value),ut(()=>{console.log("document.forms",document.forms);const r=document.getElementById("cashierSubmit");r==null||r.addEventListener("submit",i=>{i.preventDefault()}),r==null||r.submit()})):window.location.href=o.paymentUrl)}u.canInsure=!0}catch{u.canInsure=!0}},Ue=a=>{var o,r;const t=JSON.parse((r=(o=S.value)==null?void 0:o.productBasicInfoVO)==null?void 0:r.extInfo);let e="";return t.endorsementFlag===1&&(e=`&upgradeCode=${t.endorsementCode}`),`${he}/internet/productDetail?tenantId=${E}&productCode=${H}&orderNo=${a}&agentCode=${L}&pageCode=payBack${e}&from=${X||"normal"}`},xe=a=>`${he}/internet/payFail?tenantId=${E}&orderNo=${a}&agentCode=${L}&pageCode=payBack&from=${X||"normal"}`,ke=async a=>{const t=Ft({tenantId:E,saleUserId:L,saleChannelId:Ne,detail:v.value,insureDetail:S.value,paymentMethod:s.paymentMethod,renewalDK:s.renewalDK,iseeBizNo:W,successJumpUrl:"",premium:b.value,holder:s.holder,insured:s.insured,tenantOrderRiskList:a,orderStatus:"",orderTopStatus:""});try{const e=await pt(t),{code:n,data:o}=e;n==="10000"&&Se(p(m({},t),{orderNo:o.data,extInfo:{extraInfo:{renewalDK:s.renewalDK,paymentMethod:s.paymentMethod,successJumpUrl:Ue(o.data),failUrl:xe(o.data)},iseeBizNo:W}}))}catch{u.canInsure=!0}},He=async()=>{const{calcData:a,riskVOList:t}=De({holder:s.holder,insured:s.insured,tenantId:E,paymentFrequency:s.paymentFrequency,productDetail:v.value,insureDetail:S.value},!0),e=await ye(a),{code:n,data:o}=e;return n==="10000"?(b.value=o.premium,{condition:t,data:o}):{}},Me=a=>{ee.value=a,x.value=!0},Le=()=>new Promise((a,t)=>{var e,n;(n=(e=q.value)==null?void 0:e.validateForm)==null||n.call(e).then(async()=>{var d;if(!(((d=q.value)==null?void 0:d.isAgreeFile)||Z.value)){x.value=!0,Me(0);return}const{calcData:r,riskVOList:i}=De({holder:s.holder,insured:s.insured,tenantId:E,paymentFrequency:s.paymentFrequency,productDetail:v.value,insureDetail:S.value},!0),c=await ye(r),{code:y,data:g}=c;y==="10000"?(b.value=g.premium,a({condition:i,data:g})):t(new Error)}).catch(()=>{u.canInsure=!0})}),ae=async()=>{var a;if(U){te();return}u.canInsure=!1;try{const{condition:t,data:e}=await Le(),n={},o=(i=[])=>{(i||[]).forEach(c=>{var y;n[c.riskCode]=c,((y=c.riskPremiumDetailVOList)==null?void 0:y.length)&&o(c.riskPremiumDetailVOList)})};o(e.riskPremiumDetailVOList);const r=gt({tenantId:E,riskList:t,riskPremium:n,productId:(a=v.value)==null?void 0:a.id});ke(r)}catch{u.canInsure=!0}},Ve=a=>{a==="allFalse"?(V.value=!1,ae(),u.canInsure=!0):st.confirm({message:"\u60A8\u5F53\u524D\u7684\u5065\u5EB7\u72B6\u51B5\u4E0D\u7B26\u5408\u8BE5\u4EA7\u54C1",confirmButtonText:"\u786E\u5B9A"})},Re=()=>{Z.value=!0,x.value=!1,V.value=!0};Ze([()=>s.insured.certNo,()=>s.insured.socialFlag],et.exports.debounce(()=>{s.insured.certNo&&s.insured.socialFlag&&P!=="payBack"&&be()&&He()},500),{deep:!0,immediate:!0});const oe=async()=>{var n,o,r,i,c,y,g,d;const a=await ft({orderNo:O,tenantId:E}),{code:t,data:e}=a;if(t==="10000"){const{tenantOrderHolder:l,tenantOrderInsuredList:T,extInfo:re}=e;if(!U){Object.assign(s,{holder:{certNo:l.certNo,certType:l.certType,mobile:l.mobile,name:l.name,socialFlag:B.HAS},insured:{certNo:l.certNo,certType:l.certType,name:l.name,socialFlag:B.HAS,relationToHolder:ve.SELF},paymentMethod:D,renewalDK:"Y"}),u.canInsure=!0,I.value=Ee,w.value=Ee;return}Object.assign(s,{holder:{certNo:l.certNo,certType:l.certType,mobile:l.mobile,name:l.name,socialFlag:B.HAS},insured:{certNo:T==null?void 0:T[0].certNo,certType:(n=T[0])==null?void 0:n.certType,name:(o=T[0])==null?void 0:o.name,socialFlag:(i=(r=T[0])==null?void 0:r.extInfo)==null?void 0:i.hasSocialInsurance,relationToHolder:(c=T[0])==null?void 0:c.relationToHolder},paymentMethod:re.extraInfo.paymentMethod,renewalDK:re.extraInfo.renewalDK||"N"}),b.value=(d=(g=(y=T[0])==null?void 0:y.tenantOrderProductList)==null?void 0:g[0])==null?void 0:d.premium,(e.orderStatus===A.ACCEPT_POLICY||e.orderStatus===A.PAYMENT_SUCCESS)&&(u.canUpgrade=!0,K.value=!1,G.value=!0),e.orderStatus===A.PAYING&&(K.value=!0,setTimeout(()=>{oe()},3*1e3))}},$e=async()=>{var n,o,r,i,c,y;console.log("\u77ED\u4FE1\u8FDB\u5165\uFF0C\u5E26\u4E86orderNo, mobile");const a=await ht({holderPhone:M,orderStatus:[A.PAYING.toUpperCase(),A.TIMEOUT.toUpperCase(),"ACCEPT_POLICY"],productCode:H,tenantId:E}),{code:t,data:e}=a;if(e.orderStatus===A.ACCEPT_POLICY&&(console.log("\u5DF2\u627F\u4FDD\uFF0C\u88AB\u4FDD\u4EBA\u4FE1\u606F\u4E0D\u80FD\u4FEE\u6539"),I.value=p(m({},Ie),{paymentDisable:!!D}),w.value=p(m({},Ie),{paymentDisable:!!D})),(e.orderStatus===A.PAYING||e.orderStatus===A.TIMEOUT)&&(console.log("\u652F\u4ED8\u4E2D\uFF0C\u8D85\u65F6\u53EF\u4EE5\u4FEE\u6539\u6295\u4FDD\u4EBA\u4FE1\u606F"),I.value=p(m({},Y),{paymentDisable:!!D}),w.value=p(m({},Y),{paymentDisable:!!D})),t==="10000"&&((n=e==null?void 0:e.tenantOrderHolder)==null?void 0:n.certNo)){u.canInsure=!0;const{tenantOrderHolder:g,tenantOrderInsuredList:d,extInfo:l}=e;Object.assign(s,{holder:{certNo:g.certNo,certType:g.certType,mobile:g.mobile,name:g.name,socialFlag:B.HAS},insured:{certNo:d==null?void 0:d[0].certNo,certType:(o=d[0])==null?void 0:o.certType,name:(r=d[0])==null?void 0:r.name,socialFlag:(c=(i=d[0])==null?void 0:i.extInfo)==null?void 0:c.hasSocialInsurance,relationToHolder:(y=d[0])==null?void 0:y.relationToHolder},paymentMethod:D||l.extraInfo.paymentMethod,renewalDK:l.extraInfo.renewalDK})}else I.value=p(m({},$),{paymentDisable:!!D}),w.value=p(m({},$),{paymentDisable:!!D}),u.canInsure=!0},Ye=async()=>{const a=Dt({productCode:H,withInsureInfo:!0,tenantId:E}),t=mt({productCode:H});await Promise.all([a,t]).then(([e,n])=>{var o;e.code==="10000"&&(v.value=e.data,document.title=((o=e.data)==null?void 0:o.productFullName)||""),n.code==="10000"&&(S.value=n.data)}),O?oe():M&&P==="productDetail"&&$e()},qe=()=>{P==="free"?U?(I.value=p(m({},Fe),{paymentDisable:!!D}),w.value=p(m({},Fe),{paymentDisable:!!D}),u.canInsure=!0):(I.value=p(m({},$),{paymentDisable:!!D}),w.value=p(m({},$),{paymentDisable:!!D}),u.canInsure=!0):U?(I.value=Ce,w.value=Ce,console.log("\u652F\u4ED8\u5B8C\u6210\u8FDB\u5165")):M||O||(console.log("\u6295\u4FDD\u94FE\u63A5"),I.value=p(m({},Y),{paymentFrequencyDisable:!0}),w.value=Y,u.canInsure=!0)};return tt(()=>{qe(),Ye(),setTimeout(async()=>{W=window.getIseeBiz&&await window.getIseeBiz()},1500)}),(a,t)=>{const e=ie("van-button"),n=ie("van-config-provider"),o=at("dompurify-html");return j(),ce(nt,null,[_(n,{"theme-vars":C(Ct)},{default:z(()=>{var r,i,c,y,g,d,l;return[R.value.show?ot((j(),ce("div",Pt,null,512)),[[o,R.value.html]]):de("",!0),k("div",St,[k("div",Ut,[_(Et,{url:(i=(r=v.value)==null?void 0:r.tenantProductInsureVO)==null?void 0:i.banner[0]},null,8,["url"]),_(It,{"product-name":(c=v.value)==null?void 0:c.productFullName,"product-desc":(g=(y=v.value)==null?void 0:y.showConfigVO)==null?void 0:g.desc},null,8,["product-name","product-desc"])]),_(_t,{"guarantee-list":(l=(d=v.value)==null?void 0:d.tenantProductInsureVO)==null?void 0:l.titleAndDescVOS},null,8,["guarantee-list"]),_(Nt,{detail:v.value},{form:z(()=>[_(wt,{ref_key:"formRef",ref:q,disable:!C(u).showInsure,"form-auth":I.value,"form-info":C(s),premium:b.value,"product-detail":v.value,payments:[1],"payment-method":[0],onOnReset:Oe,onOnUpdate:Pe},null,8,["disable","form-auth","form-info","premium","product-detail"])]),_:1},8,["detail"]),k("div",xt,[k("div",kt,[Ht,k("span",null,"\uFFE5"+me(C(ct)(b.value))+"/\u6708",1)]),_(e,{type:"primary",class:"right",disabled:!(C(u).canInsure||C(u).canUpgrade),onClick:ae},{default:z(()=>[_e(me(C(u).showInsure?"\u7ACB\u5373\u6295\u4FDD":"\u5347\u7EA7\u4FDD\u969C"),1)]),_:1},8,["disabled"])])]),C(P)!=="payBack"?(j(),rt(Tt,{key:1,"product-detail":v.value},null,8,["product-detail"])):de("",!0),_(At,{"order-no":C(O),"tenant-id":C(E),"upgrade-code":C(we),"is-show":G.value,onOnConfirm:te,onOnClose:Be},null,8,["order-no","tenant-id","upgrade-code","is-show"])]}),_:1},8,["theme-vars"]),_(bt,{show:V.value,"onUpdate:show":t[0]||(t[0]=r=>V.value=r),"content-list":C(Te),"active-index":0,onOnConfirmHealth:Ve},null,8,["show","content-list"]),_(Ot,{show:x.value,"onUpdate:show":t[1]||(t[1]=r=>x.value=r),"content-list":C(Ae),"active-index":ee.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9",onSubmit:Re},null,8,["show","content-list","active-index"]),_(Bt,{"is-show":K.value},null,8,["is-show"])],64)}}});var ta=lt(Mt,[["__scopeId","data-v-a63fa968"]]);export{ta as default};
