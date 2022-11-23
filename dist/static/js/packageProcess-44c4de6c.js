var Ze=Object.defineProperty,ea=Object.defineProperties;var aa=Object.getOwnPropertyDescriptors;var ce=Object.getOwnPropertySymbols;var ta=Object.prototype.hasOwnProperty,ra=Object.prototype.propertyIsEnumerable;var de=(g,c,p)=>c in g?Ze(g,c,{enumerable:!0,configurable:!0,writable:!0,value:p}):g[c]=p,b=(g,c)=>{for(var p in c||(c={}))ta.call(c,p)&&de(g,p,c[p]);if(ce)for(var p of ce(c))ra.call(c,p)&&de(g,p,c[p]);return g},O=(g,c)=>ea(g,aa(c));import{g as oa,a9 as na,O as ua,E as h,M as me,y as pe,_ as sa,l as la,h as ia,r as fe,af as ca,j as V,n as he,p as E,m as G,H as da,t as J,z as U,A as m,J as q,C as Ae,k as ve,F as ma,D as pa,T as N,X as fa}from"./vendor-c3c577f2.js";import{_ as ha,C as ye,a0 as va,H as ya,I as Fe,a1 as ge}from"./index-53abd92d.js";import{a as j}from"./order-26db6dbf.js";import{S as Y,R as w,f as Ee,I as Fa}from"./infoCollection-192ba138.js";import{p as Ce,i as ga,s as Ea,g as Ca,u as Da,a as Ia}from"./trial-8e435cda.js";import{p as Na}from"./product-6eabc29f.js";import{a as De,o as Ie,t as wa,g as L,b as _a,h as Ne}from"./utils-00ebb31d.js";import{t as Aa}from"./theme-725d52fb.js";import{d as we,B as Ba,D as Pa,G as Ta,S as ka,H as Sa,P as Ha,U as ba,_ as Oa,W as Ua,a as _e}from"./auth-9486a904.js";import{_ as La}from"./index-258787d6.js";import"./utils-b6782348.js";import"./trial-e4e77b8e.js";import"./serviceConfig-bad6525b.js";import"./index-a904a068.js";import"./bankCard-0e4ce564.js";import"./phoneVerify-f897be74.js";import"./close-df102554.js";const xa={key:0},Ra={class:"page-internet-product-detail"},Ma={class:"info"},Va={class:"footer-button"},qa={class:"price"},Ya=Ae(" \u603B\u4FDD\u8D39"),$a=oa({setup(g){const c=na(),p=ua(),{productCode:X="BWYL2021",tenantId:v,orderNo:B,phoneNo:Be,agentCode:x="",saleChannelId:Pe,paymentMethod:Te,certNo:Q,name:Z,pageCode:ke,from:Se}=p.query,P=h(),d=h(),R=h(),y=h(),$=ke==="payBack",T=h(!1),k=h(!1),_=h(!1),ee=h(0),K=h(!1),W=h(!1),M=h({show:!1,html:""});let z="";const e=me({holder:{certNo:Q,certType:ye.CERT,mobile:Be,name:Z,socialFlag:Y.HAS},insured:{certNo:Q,certType:ye.CERT,name:Z,socialFlag:Y.HAS,relationToHolder:w.SELF},paymentMethod:Te,renewalDK:"Y",paymentFrequency:Ee.YEAR,packageProductList:[],mobileSmsCode:""}),ae=h(we),S=h(we),s=me({showInsure:!$,canInsure:!1,canUpgrade:!1}),He=pe(()=>{var a,t;return((t=(a=d.value)==null?void 0:a.tenantProductInsureVO)==null?void 0:t.attachmentVOList.filter(r=>r.attachmentName==="\u5065\u5EB7\u544A\u77E5"))||[]}),be=pe(()=>{var a,t;return((t=(a=d.value)==null?void 0:a.tenantProductInsureVO)==null?void 0:t.attachmentVOList.filter(r=>r.attachmentName!=="\u5065\u5EB7\u544A\u77E5"))||[]}),Oe=()=>{if(e.holder.certNo){const a=L(e.holder.certNo,"year"),t=Fe(e.holder.certNo);if(a<18)return N("\u6295\u4FDD\u4EBA\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E18\u5C81\uFF01"),!1;if(e.insured.certNo&&e.insured.relationToHolder===w.MATE){const r=Fe(e.insured.certNo);if(t===r)return N("\u88AB\u4FDD\u4EBA\u4E3A\u914D\u5076\u65F6\uFF0C\u6027\u522B\u4E0D\u53EF\u76F8\u540C\uFF01"),!1}}if(e.insured.certNo){const a=L(e.insured.certNo,"day"),t=L(e.insured.certNo,"year");if(e.insured.relationToHolder===w.CHILD&&a<30)return N("\u88AB\u4FDD\u4EBA\u4E3A\u5B50\u5973\u65F6\uFF0C\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E30\u5929\uFF01"),!1;if(e.insured.relationToHolder===w.PARENT&&t>=71)return N("\u88AB\u4FDD\u4EBA\u4E3A\u7236\u6BCD\u65F6\uFF0C\u5E74\u9F84\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E70\u5C81\uFF01"),!1}if([w.CHILD,w.PARENT].includes(e.insured.relationToHolder)){const a=L(e.holder.certNo,"year"),t=L(e.insured.certNo,"year");if(e.insured.relationToHolder===w.CHILD&&a-t<18)return N("\u6295\u4FDD\u4EBA\u548C\u5B50\u5973\u5E74\u9F84\u5FC5\u987B\u76F8\u5DEE18\u5C81\uFF01"),!1;if(e.insured.relationToHolder===w.PARENT&&t-a<18)return N("\u6295\u4FDD\u4EBA\u548C\u7236\u6BCD\u5E74\u9F84\u5FC5\u987B\u76F8\u5DEE18\u5C81\uFF01"),!1}return!0},Ue=()=>{const{holder:{certNo:a,mobile:t,name:r,socialFlag:u},insured:{certNo:o,name:n,socialFlag:l,relationToHolder:f},paymentMethod:F}=e;return!!(ya(o)&&!!l)},te=()=>{c.push({path:"/internet/guaranteeUpgrade",query:O(b({},p.query),{tenantId:v,productCode:"BWYL2022",orderNo:B,agentCode:x})})},Le=()=>{W.value=!1},xe=()=>{S.value=ae.value},Re=()=>{S.value=O(b({},S.value),{relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1})},Me=async a=>{N.loading({message:"\u6838\u4FDD\u4E2D...",forbidClick:!0});try{const t=await Da(a),{code:r}=t;if(r==="10000"){N.loading({message:"\u6838\u4FDD\u4E2D...",forbidClick:!0});const u=await Ia({orderNo:a.orderNo,tenantId:v}),{data:o}=u;u.code==="10000"&&(o.type===2?(M.value={show:!0,html:o.paymentUrl},console.log("data.paymentUrl",M.value),fa(()=>{console.log("document.forms",document.forms);const n=document.getElementById("cashierSubmit");n==null||n.addEventListener("submit",l=>{l.preventDefault()}),n==null||n.submit()})):window.location.href=o.paymentUrl)}s.canInsure=!0}catch{s.canInsure=!0}},Ve=a=>`${ge}/pay?orderNo=${a}&saleUserId=${x}&tenantId=${v}`,qe=a=>`${ge}/internet/payFail?tenantId=${v}&orderNo=${a}&agentCode=${x}&pageCode=payBack&from=${Se||"normal"}`,Ye=async a=>{console.log("risk",a);const t=_a({tenantId:v,saleUserId:x,saleChannelId:Pe,detail:d.value,insureDetail:R.value,paymentMethod:e.paymentMethod,paymentFrequency:e.paymentFrequency,renewalDK:e.renewalDK,iseeBizNo:z,successJumpUrl:"",premium:y.value,holder:e.holder,insured:e.insured,tenantOrderRiskList:a,orderStatus:"",orderTopStatus:""});try{const r=await Ea(t),{code:u,data:o}=r;u==="10000"&&Me(O(b({},t),{orderNo:o.data,extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,paymentFrequency:e.paymentFrequency,successJumpUrl:Ve(o.data),failUrl:qe(o.data)},iseeBizNo:z}}))}catch{s.canInsure=!0}},$e=async()=>{const{calcData:a,riskVOList:t}=De({holder:e.holder,insured:e.insured,tenantId:v,productDetail:d.value,insureDetail:R.value,paymentFrequency:e.paymentFrequency,packageRiskIdList:Ie(e.packageProductList)},!1,Ne);if(!Array.isArray(t)||t.length<1)return y.value=null,{};const r=await Ce(a),{code:u,data:o}=r;return u==="10000"?(y.value=o.premium,{condition:t,data:o}):(y.value=null,{})},Ke=a=>{ee.value=a,_.value=!0},We=()=>new Promise((a,t)=>{var r,u;(u=(r=P.value)==null?void 0:r.validateForm)==null||u.call(r).then(async()=>{var D;if(!Oe()){s.canInsure=!0;return}if(!(((D=P.value)==null?void 0:D.isAgreeFile)||T.value)){T.value=!1,_.value=!0,Ke(0);return}const{calcData:n,riskVOList:l}=De({holder:e.holder,insured:e.insured,tenantId:v,productDetail:d.value,insureDetail:R.value,paymentFrequency:e.paymentFrequency,packageRiskIdList:Ie(e.packageProductList)},!1,Ne);(!Array.isArray(l)||l.length<1)&&(y.value=null,t(new Error));const f=await Ce(n),{code:F,data:C}=f;F==="10000"?(y.value=C.premium,a({condition:l,data:C})):(y.value=null,t(new Error))}).catch(()=>{s.canInsure=!0})}),re=async()=>{var a;if($){te();return}s.canInsure=!1;try{const{condition:t,data:r}=await We(),u={},o=(l=[])=>{(l||[]).forEach(f=>{var F;u[f.riskCode]=f,((F=f.riskPremiumDetailVOList)==null?void 0:F.length)&&o(f.riskPremiumDetailVOList)})};o(r.riskPremiumDetailVOList);const n=wa({tenantId:v,riskList:t,riskPremium:u,productId:(a=d.value)==null?void 0:a.id});Ye(n)}catch{s.canInsure=!0}},ze=a=>{a==="allFalse"?(k.value=!1,T.value=!0,re(),s.canInsure=!0):pa.confirm({message:"\u60A8\u5F53\u524D\u7684\u5065\u5EB7\u72B6\u51B5\u4E0D\u7B26\u5408\u8BE5\u4EA7\u54C1",confirmButtonText:"\u786E\u5B9A"}).then(()=>{window.history.back()}).catch(()=>{var t;(t=P.value)==null||t.reEditForm(),T.value=!1,s.canInsure=!0})},oe=()=>{var a;(a=P.value)==null||a.reEditForm(),T.value=!1,s.canInsure=!0},Ge=()=>{console.log("onCloseHealthPopup========"),k.value=!1,oe()},Je=()=>{console.log("onCloseFilePreview========"),_.value=!1,oe()},je=()=>{_.value=!1,k.value=!0};sa([()=>e.insured.certNo,()=>e.insured.socialFlag,()=>e.packageProductList,()=>e.paymentFrequency],la.exports.debounce(()=>{e.insured.certNo&&e.insured.socialFlag&&Ue()&&$e()},500),{deep:!0,immediate:!0});const ne=async()=>{var u,o,n,l,f,F,C,D,H,ue,se,le,ie;const a=await Ca({orderNo:B,tenantId:v}),{code:t,data:r}=a;if(t==="10000"){const{tenantOrderHolder:I,tenantOrderInsuredList:i,extInfo:A}=r;if(!$){Object.assign(e,{holder:{certNo:I.certNo,certType:I.certType,mobile:I.mobile,name:I.name,socialFlag:Y.HAS},insured:{certNo:i==null?void 0:i[0].certNo,certType:(u=i[0])==null?void 0:u.certType,name:(o=i[0])==null?void 0:o.name,socialFlag:(l=(n=i[0])==null?void 0:n.extInfo)==null?void 0:l.hasSocialInsurance,relationToHolder:(f=i[0])==null?void 0:f.relationToHolder},paymentMethod:A.extraInfo.paymentMethod,paymentFrequency:A.extraInfo.paymentFrequency,renewalDK:A.extraInfo.renewalDK||"N"}),s.canInsure=!0;return}Object.assign(e,{holder:{certNo:I.certNo,certType:I.certType,mobile:I.mobile,name:I.name,socialFlag:Y.HAS},insured:{certNo:i==null?void 0:i[0].certNo,certType:(F=i[0])==null?void 0:F.certType,name:(C=i[0])==null?void 0:C.name,socialFlag:(H=(D=i[0])==null?void 0:D.extInfo)==null?void 0:H.hasSocialInsurance,relationToHolder:(ue=i[0])==null?void 0:ue.relationToHolder},paymentMethod:A.extraInfo.paymentMethod,paymentFrequency:A.extraInfo.paymentFrequency,renewalDK:A.extraInfo.renewalDK||"N"}),y.value=(ie=(le=(se=i[0])==null?void 0:se.tenantOrderProductList)==null?void 0:le[0])==null?void 0:ie.premium,(r.orderStatus===j.ACCEPT_POLICY||r.orderStatus===j.PAYMENT_SUCCESS)&&(s.canUpgrade=!0,K.value=!1,W.value=!0),r.orderStatus===j.PAYING&&(K.value=!0,setTimeout(()=>{ne()},3*1e3))}},Xe=async()=>{const a=Na({productCode:X,withInsureInfo:!0,tenantId:v}),t=ga({productCode:X});await Promise.all([a,t]).then(([r,u])=>{var o,n;r.code==="10000"&&(d.value=r.data,document.title=((o=r.data)==null?void 0:o.productFullName)||""),u.code==="10000"&&(e.packageProductList=(((n=u.data)==null?void 0:n.packageProductVOList)||[]).map(l=>O(b({},l),{value:Fa.UN_INSURE,disabled:!1})),R.value=u.data)}),B&&ne()},Qe=()=>{console.log("\u6295\u4FDD\u94FE\u63A5"),S.value=_e,ae.value=_e,s.canInsure=!0};return ia(()=>{Qe(),Xe(),setTimeout(async()=>{z=window.getIseeBiz&&await window.getIseeBiz()},1500)}),(a,t)=>{const r=fe("van-button"),u=fe("van-config-provider"),o=ca("dompurify-html");return V(),he(ma,null,[E(u,{"theme-vars":m(Aa)},{default:G(()=>{var n,l,f,F,C,D,H;return[M.value.show?da((V(),he("div",xa,null,512)),[[o,M.value.html]]):J("",!0),U("div",Ra,[U("div",Ma,[E(Ba,{url:(l=(n=d.value)==null?void 0:n.tenantProductInsureVO)==null?void 0:l.banner[0]},null,8,["url"]),E(Pa,{"product-name":(f=d.value)==null?void 0:f.productFullName,"product-desc":(C=(F=d.value)==null?void 0:F.showConfigVO)==null?void 0:C.desc},null,8,["product-name","product-desc"])]),E(Ta,{"show-service-config":"","guarantee-list":(H=(D=d.value)==null?void 0:D.tenantProductInsureVO)==null?void 0:H.titleAndDescVOS},null,8,["guarantee-list"]),E(ka,{detail:d.value},{form:G(()=>[E(Sa,{ref_key:"formRef",ref:P,"is-show-package":"",disable:!m(s).showInsure,"form-auth":S.value,"form-info":m(e),"product-detail":d.value,onOnReset:xe,onOnUpdate:Re},null,8,["disable","form-auth","form-info","product-detail"])]),_:1},8,["detail"]),U("div",Va,[U("div",qa,[Ya,U("span",null,q(y.value?"\uFFE5":"")+q(m(va)(y.value))+" "+q(y.value?m(e).paymentFrequency==m(Ee).YEAR?"\u5143/\u5E74":"\u5143/\u6708":""),1)]),E(r,{type:"primary",class:"right",disabled:!(m(s).canInsure||m(s).canUpgrade),onClick:re},{default:G(()=>[Ae(q(m(s).showInsure?"\u7ACB\u5373\u6295\u4FDD":"\u5347\u7EA7\u4FDD\u969C"),1)]),_:1},8,["disabled"])])]),m(B)?J("",!0):(V(),ve(Ha,{key:1,"product-detail":d.value},null,8,["product-detail"])),E(ba,{"order-no":m(B),"tenant-id":m(v),"is-show":W.value,onOnConfirm:te,onOnClose:Le},null,8,["order-no","tenant-id","is-show"])]}),_:1},8,["theme-vars"]),E(Oa,{show:k.value,"onUpdate:show":t[0]||(t[0]=n=>k.value=n),"content-list":m(He),"active-index":0,onOnConfirmHealth:ze,onOnCloseHealth:Ge},null,8,["show","content-list"]),_.value?(V(),ve(La,{key:0,show:_.value,"onUpdate:show":t[1]||(t[1]=n=>_.value=n),"content-list":m(be),"active-index":ee.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9","force-read-cound":2,"on-close-file-preview":"",onSubmit:je,onOnCloseFilePreview:Je},null,8,["show","content-list","active-index"])):J("",!0),E(Ua,{"is-show":K.value},null,8,["is-show"])],64)}}});var it=ha($a,[["__scopeId","data-v-19d04aee"]]);export{it as default};
