var aa=Object.defineProperty,ta=Object.defineProperties;var ra=Object.getOwnPropertyDescriptors;var me=Object.getOwnPropertySymbols;var oa=Object.prototype.hasOwnProperty,ua=Object.prototype.propertyIsEnumerable;var pe=(D,d,h)=>d in D?aa(D,d,{enumerable:!0,configurable:!0,writable:!0,value:h}):D[d]=h,b=(D,d)=>{for(var h in d||(d={}))oa.call(d,h)&&pe(D,h,d[h]);if(me)for(var h of me(d))ua.call(d,h)&&pe(D,h,d[h]);return D},U=(D,d)=>ta(D,ra(d));import{g as na,a9 as sa,O as la,E as c,M as fe,y as he,_ as ve,l as ia,h as ca,r as G,af as da,j as w,n as J,p as g,m as j,H as ma,t as X,z as M,A as p,J as V,k as Q,C as Ae,F as pa,T as f,D as fa,X as ha}from"./vendor-17026bfd.js";import{_ as va,C as ye,a1 as ya,I as Fa,a4 as Fe,J as Ee}from"./index-cf8ca69f.js";import{a as Z}from"./order-64240955.js";import{S as q,R as N,f as De,I as Ea}from"./infoCollection-f9c39d5f.js";import{p as ge,i as Da,u as ga,a as Ca,s as Na,g as _a}from"./trial-16884868.js";import{p as Ia}from"./product-7359a2aa.js";import{a as Ce,o as Ne,t as Ba,v as ee,g as _e,b as wa,j as Ie}from"./utils-16f66174.js";import{t as Aa}from"./theme-ea709837.js";import{d as Be,B as Ta,D as Pa,G as ka,S as Sa,H as Oa,P as ba,U as Ua,_ as Ha,W as La,a as we}from"./auth-51621df7.js";import{_ as xa}from"./index-06c18b86.js";import"./trial-2bf06acc.js";import"./index-5dc419c1.js";import"./bankCard-0750aa23.js";import"./phoneVerify-8e277ff0.js";const Ra={key:0},Ma={class:"page-internet-product-detail"},Va={class:"info"},qa={class:"footer-button"},Ya={class:"price"},$a=Ae(" \u603B\u4FDD\u8D39"),Ka={key:0},Wa=na({setup(D){const d=sa(),h=la(),{productCode:ae="BWYL2021",tenantId:E,orderNo:A,phoneNo:Te,agentCode:H="",saleChannelId:Pe,paymentMethod:ke,certNo:te,name:re,pageCode:Se,from:Oe}=h.query,oe=c(),m=c(),L=c(),v=c(),Y=Se==="payBack";c(!1);const x=c(!1),_=c(!1),ue=c(0),$=c(!1),K=c(!1),R=c({show:!1,html:""}),T=c({}),W=c(!1);let z="";const e=fe({holder:{certNo:te,certType:ye.CERT,mobile:Te,name:re,socialFlag:q.HAS},insured:{certNo:te,certType:ye.CERT,name:re,socialFlag:q.HAS,relationToHolder:N.SELF},paymentMethod:ke,renewalDK:"Y",paymentFrequency:De.YEAR,packageProductList:[],mobileSmsCode:""}),ne=c(Be),P=c(Be),l=fe({showInsure:!Y,canInsure:!1,canUpgrade:!1}),be=he(()=>{var t,a;return((a=(t=m.value)==null?void 0:t.tenantProductInsureVO)==null?void 0:a.attachmentVOList.filter(r=>r.attachmentName==="\u5065\u5EB7\u544A\u77E5"))||[]}),Ue=he(()=>{var t,a;return((a=(t=m.value)==null?void 0:t.tenantProductInsureVO)==null?void 0:a.attachmentVOList.filter(r=>r.attachmentName!=="\u5065\u5EB7\u544A\u77E5"))||[]}),He=()=>{if(e.holder.certNo){const t=Ee(e.holder.certNo);if(ee(e.holder.certNo,18,"year"))return f("\u6295\u4FDD\u4EBA\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E18\u5C81\uFF01"),!1;if(e.insured.certNo&&e.insured.relationToHolder===N.MATE){const a=Ee(e.insured.certNo);if(t===a)return f("\u88AB\u4FDD\u4EBA\u4E3A\u914D\u5076\u65F6\uFF0C\u6027\u522B\u4E0D\u53EF\u76F8\u540C\uFF01"),!1}}if(e.insured.certNo){if(e.insured.relationToHolder===N.CHILD&&ee(e.insured.certNo,30,"day"))return f("\u88AB\u4FDD\u4EBA\u4E3A\u5B50\u5973\u65F6\uFF0C\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E30\u5929\uFF01"),!1;if(e.insured.relationToHolder===N.PARENT&&!ee(e.insured.certNo,71,"year"))return f("\u88AB\u4FDD\u4EBA\u4E3A\u7236\u6BCD\u65F6\uFF0C\u5E74\u9F84\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E70\u5C81\uFF01"),!1}if([N.CHILD,N.PARENT].includes(e.insured.relationToHolder)){const t=_e(e.holder.certNo,"year"),a=_e(e.insured.certNo,"year");if(e.insured.relationToHolder===N.CHILD&&t-a<18)return f("\u6295\u4FDD\u4EBA\u548C\u5B50\u5973\u5E74\u9F84\u5FC5\u987B\u76F8\u5DEE18\u5C81\uFF01"),!1;if(e.insured.relationToHolder===N.PARENT&&a-t<18)return f("\u6295\u4FDD\u4EBA\u548C\u7236\u6BCD\u5E74\u9F84\u5FC5\u987B\u76F8\u5DEE18\u5C81\uFF01"),!1}return!0},Le=()=>{const{holder:{certNo:t,mobile:a,name:r,socialFlag:u},insured:{certNo:o,name:n,socialFlag:s,relationToHolder:y},paymentMethod:F}=e;return!!(Fa(o)&&!!s)},se=()=>{d.push({path:"/internet/guaranteeUpgrade",query:U(b({},h.query),{tenantId:E,productCode:"BWYL2022",orderNo:A,agentCode:H})})},xe=()=>{K.value=!1},Re=()=>{P.value=ne.value},Me=()=>{P.value=U(b({},P.value),{relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1})},Ve=async t=>{f.loading({message:"\u6838\u4FDD\u4E2D...",forbidClick:!0,duration:0});try{const a=await ga(t),{code:r}=a;if(r==="10000"){const u=await Ca({orderNo:t.orderNo,tenantId:E}),{data:o}=u;u.code==="10000"&&(o.type===2?(R.value={show:!0,html:o.paymentUrl},console.log("data.paymentUrl",R.value),ha(()=>{console.log("document.forms",document.forms);const n=document.getElementById("cashierSubmit");n==null||n.addEventListener("submit",s=>{s.preventDefault()}),n==null||n.submit()})):window.location.href=o.paymentUrl)}l.canInsure=!0}catch{l.canInsure=!0}finally{f.clear()}},qe=t=>`${Fe}/pay?orderNo=${t}&saleUserId=${H}&tenantId=${E}`,Ye=t=>`${Fe}/internet/payFail?tenantId=${E}&orderNo=${t}&agentCode=${H}&pageCode=payBack&from=${Oe||"normal"}`,$e=t=>{ue.value=t,_.value=!0},Ke=async t=>{console.log("risk",t);const a=wa({tenantId:E,saleUserId:H,saleChannelId:Pe,detail:m.value,insureDetail:L.value,paymentMethod:e.paymentMethod,paymentFrequency:e.paymentFrequency,renewalDK:e.renewalDK,iseeBizNo:z,successJumpUrl:"",premium:v.value,holder:e.holder,insured:e.insured,tenantOrderRiskList:t,orderStatus:"",orderTopStatus:""});try{const r=await Na(a),{code:u,data:o}=r;u==="10000"&&(f.clear(),T.value={orderNo:o.data,order:a},_.value=!0,$e(0))}catch{f.clear(),l.canInsure=!0}},We=async()=>{const{calcData:t,riskVOList:a}=Ce({holder:e.holder,insured:e.insured,tenantId:E,productDetail:m.value,insureDetail:L.value,paymentFrequency:e.paymentFrequency,packageRiskIdList:Ne(e.packageProductList)},!1,Ie);if(!Array.isArray(a)||a.length<1)return f("\u88AB\u4FDD\u4EBA\u5E74\u9F84\u9700\u572830\u5929(\u542B) - 70\u5C81(\u542B)\u4E4B\u95F4\uFF01"),v.value=null,{};W.value=!0;const r=await ge(t);W.value=!1;const{code:u,data:o}=r;return u==="10000"?e.insured.certNo?(v.value=o.premium,{condition:a,data:o}):(v.value=null,{condition:a,data:o}):(v.value=null,{})},ze=()=>new Promise((t,a)=>{var r,u;(u=(r=oe.value)==null?void 0:r.validateForm)==null||u.call(r).then(async()=>{if(!He()){l.canInsure=!0;return}const{calcData:o,riskVOList:n}=Ce({holder:e.holder,insured:e.insured,tenantId:E,productDetail:m.value,insureDetail:L.value,paymentFrequency:e.paymentFrequency,packageRiskIdList:Ne(e.packageProductList)},!1,Ie);(!Array.isArray(n)||n.length<1)&&(f("\u88AB\u4FDD\u4EBA\u5E74\u9F84\u9700\u572830\u5929(\u542B) - 70\u5C81(\u542B)\u4E4B\u95F4\uFF01"),v.value=null,a(new Error));const s=await ge(o),{code:y,data:F}=s;y==="10000"?(v.value=F.premium,t({condition:n,data:F})):(v.value=null,a(new Error))}).catch(()=>{l.canInsure=!0})}),Ge=async()=>{var t;if(Y){se();return}l.canInsure=!1;try{f.loading({message:"\u8BA2\u5355\u751F\u6210\u4E2D...",forbidClick:!0,duration:0});const{condition:a,data:r}=await ze(),u={},o=(s=[])=>{(s||[]).forEach(y=>{var F;u[y.riskCode]=y,((F=y.riskPremiumDetailVOList)==null?void 0:F.length)&&o(y.riskPremiumDetailVOList)})};o(r.riskPremiumDetailVOList);const n=Ba({tenantId:E,riskList:a,riskPremium:u,productId:(t=m.value)==null?void 0:t.id});Ke(n)}catch{l.canInsure=!0}finally{f.clear()}},Je=t=>{t==="allFalse"?(x.value=!1,l.canInsure=!0,Ve(U(b({},T.value.order),{orderNo:T.value.orderNo,extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,paymentFrequency:e.paymentFrequency,successJumpUrl:qe(T.value.orderNo),failUrl:Ye(T.value.orderNo)},iseeBizNo:z}}))):fa.confirm({message:"\u60A8\u5F53\u524D\u7684\u5065\u5EB7\u72B6\u51B5\u4E0D\u7B26\u5408\u8BE5\u4EA7\u54C1",confirmButtonText:"\u786E\u5B9A"}).then(()=>{window.history.back()}).catch(()=>{l.canInsure=!0})},je=()=>{l.canInsure=!0},Xe=()=>{l.canInsure=!0},Qe=()=>{_.value=!1,x.value=!0};ve([()=>e.insured.certNo,()=>e.insured.socialFlag,()=>e.packageProductList,()=>e.paymentFrequency],ia.exports.debounce(()=>{e.insured.certNo&&e.insured.socialFlag&&Le()&&We()},500),{deep:!0,immediate:!0}),ve(()=>e.insured.certNo,()=>{e.insured.certNo||(v.value=null)});const le=async()=>{var u,o,n,s,y,F,I,k,S,O,ie,ce,de;const t=await _a({orderNo:A,tenantId:E}),{code:a,data:r}=t;if(a==="10000"){const{tenantOrderHolder:C,tenantOrderInsuredList:i,extInfo:B}=r;if(!Y){Object.assign(e,{holder:{certNo:C.certNo,certType:C.certType,mobile:C.mobile,name:C.name,socialFlag:q.HAS},insured:{certNo:i==null?void 0:i[0].certNo,certType:(u=i[0])==null?void 0:u.certType,name:(o=i[0])==null?void 0:o.name,socialFlag:(s=(n=i[0])==null?void 0:n.extInfo)==null?void 0:s.hasSocialInsurance,relationToHolder:(y=i[0])==null?void 0:y.relationToHolder},paymentMethod:B.extraInfo.paymentMethod,paymentFrequency:B.extraInfo.paymentFrequency,renewalDK:B.extraInfo.renewalDK||"N"}),l.canInsure=!0;return}Object.assign(e,{holder:{certNo:C.certNo,certType:C.certType,mobile:C.mobile,name:C.name,socialFlag:q.HAS},insured:{certNo:i==null?void 0:i[0].certNo,certType:(F=i[0])==null?void 0:F.certType,name:(I=i[0])==null?void 0:I.name,socialFlag:(S=(k=i[0])==null?void 0:k.extInfo)==null?void 0:S.hasSocialInsurance,relationToHolder:(O=i[0])==null?void 0:O.relationToHolder},paymentMethod:B.extraInfo.paymentMethod,paymentFrequency:B.extraInfo.paymentFrequency,renewalDK:B.extraInfo.renewalDK||"N"}),v.value=(de=(ce=(ie=i[0])==null?void 0:ie.tenantOrderProductList)==null?void 0:ce[0])==null?void 0:de.premium,(r.orderStatus===Z.ACCEPT_POLICY||r.orderStatus===Z.PAYMENT_SUCCESS)&&(l.canUpgrade=!0,$.value=!1,K.value=!0),r.orderStatus===Z.PAYING&&($.value=!0,setTimeout(()=>{le()},3*1e3))}},Ze=async()=>{const t=Ia({productCode:ae,withInsureInfo:!0,tenantId:E}),a=Da({productCode:ae});await Promise.all([t,a]).then(([r,u])=>{var o,n;r.code==="10000"&&(m.value=r.data,document.title=((o=r.data)==null?void 0:o.productFullName)||""),u.code==="10000"&&(e.packageProductList=(((n=u.data)==null?void 0:n.packageProductVOList)||[]).map(s=>U(b({},s),{value:Ea.UN_INSURE,disabled:!1})),L.value=u.data)}),A&&le()},ea=()=>{console.log("\u6295\u4FDD\u94FE\u63A5"),P.value=we,ne.value=we,l.canInsure=!0};return ca(()=>{ea(),Ze(),setTimeout(async()=>{z=window.getIseeBiz&&await window.getIseeBiz()},1500)}),(t,a)=>{const r=G("van-loading"),u=G("van-button"),o=G("van-config-provider"),n=da("dompurify-html");return w(),J(pa,null,[g(o,{"theme-vars":p(Aa)},{default:j(()=>{var s,y,F,I,k,S,O;return[R.value.show?ma((w(),J("div",Ra,null,512)),[[n,R.value.html]]):X("",!0),M("div",Ma,[M("div",Va,[g(Ta,{url:(y=(s=m.value)==null?void 0:s.tenantProductInsureVO)==null?void 0:y.banner[0]},null,8,["url"]),g(Pa,{"product-name":(F=m.value)==null?void 0:F.productFullName,"product-desc":(k=(I=m.value)==null?void 0:I.showConfigVO)==null?void 0:k.desc},null,8,["product-name","product-desc"])]),g(ka,{"show-service-config":"","guarantee-list":(O=(S=m.value)==null?void 0:S.tenantProductInsureVO)==null?void 0:O.titleAndDescVOS},null,8,["guarantee-list"]),g(Sa,{detail:m.value},{form:j(()=>[g(Oa,{ref_key:"formRef",ref:oe,"is-show-package":"",disable:!p(l).showInsure,"form-auth":P.value,"form-info":p(e),"product-detail":m.value,onOnReset:Re,onOnUpdate:Me},null,8,["disable","form-auth","form-info","product-detail"])]),_:1},8,["detail"]),M("div",qa,[M("div",Ya,[$a,W.value?(w(),Q(r,{key:1,class:"premium-loading",type:"spinner"})):(w(),J("span",Ka,V(v.value?"\uFFE5":"")+V(p(ya)(v.value))+" "+V(v.value?p(e).paymentFrequency==p(De).YEAR?"\u5143/\u5E74":"\u5143/\u6708":""),1))]),g(u,{type:"primary",class:"right",disabled:!(p(l).canInsure||p(l).canUpgrade),onClick:Ge},{default:j(()=>[Ae(V(p(l).showInsure?"\u7ACB\u5373\u6295\u4FDD":"\u5347\u7EA7\u4FDD\u969C"),1)]),_:1},8,["disabled"])])]),p(A)?X("",!0):(w(),Q(ba,{key:1,"product-detail":m.value},null,8,["product-detail"])),g(Ua,{"order-no":p(A),"tenant-id":p(E),"is-show":K.value,onOnConfirm:se,onOnClose:xe},null,8,["order-no","tenant-id","is-show"])]}),_:1},8,["theme-vars"]),g(Ha,{show:x.value,"onUpdate:show":a[0]||(a[0]=s=>x.value=s),"content-list":p(be),"active-index":0,onOnConfirmHealth:Je,onOnCloseHealth:je},null,8,["show","content-list"]),_.value?(w(),Q(xa,{key:0,show:_.value,"onUpdate:show":a[1]||(a[1]=s=>_.value=s),"content-list":p(Ue),"active-index":ue.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9","force-read-cound":2,"on-close-file-preview":"",onSubmit:Qe,onOnCloseFilePreview:Xe},null,8,["show","content-list","active-index"])):X("",!0),g(La,{"is-show":$.value},null,8,["is-show"])],64)}}});var lt=va(Wa,[["__scopeId","data-v-44f8e9c8"]]);export{lt as default};
