import{i as aa,aa as ta,P as oa,r as m,N as ie,A as j,$ as ce,k as ra,l as de,ag as na,m as L,s as me,t as F,p as Q,I as fe,x as M,B as w,n as X,C as d,L as q,G as Ne,F as ua,D as sa,T as E,Y as la}from"./vendor-87894311.js";import{d as ia}from"./debounce-11332b2b.js";import{_ as ca,C as pe,a1 as da,I as ma,J as ve,a4 as he}from"./index-0cf53a23.js";import{a as Z}from"./order-1963d888.js";import{S as Y,R as D,g as ye,I as fa}from"./infoCollection-753df463.js";import{i as pa,p as Fe,g as va,s as ha,u as ya,a as Fa}from"./trial-2c44970b.js";import{p as ga}from"./product-3b98066e.js";import{g as ge,o as Ce,t as Ca,a as Ea,v as Ee,b as H}from"./utils-a29a950a.js";import{t as Da}from"./theme-3c294048.js";import{d as De,B as Ie,D as Ia,G as wa,S as Na,H as _a,P as Pa,a as Aa,U as Ba,_ as Ta,b as ka,W as ba,c as we}from"./auth-cd8674d4.js";import"./trial-cc367473.js";import"./check-detail-c292a89b.js";import"./index-fc47f0ba.js";import"./bankCard-c69ae7fb.js";import"./header-logo-59ba1c63.js";import"./phoneVerify-8faf97de.js";import"./index-4203a638.js";import"./loading-1c9c1d7b.js";import"./close-bad1ffb4.js";const Oa={key:0},Sa={class:"page-internet-product-detail"},Ua={class:"info"},La={class:"inscribedContent-content"},Ha={class:"content"},Ra={class:"footer-button"},Va={class:"price"},xa=Ne(" \u603B\u4FDD\u8D39"),Ma=aa({setup(qa){const _e=ta(),ee=oa(),{productCode:ae="BWYL2021",tenantId:p,orderNo:_,phoneNo:Pe,agentCode:R="",saleChannelId:Ae,paymentMethod:Be,certNo:te,name:oe,pageCode:Te,from:ke}=ee.query,P=m(),$=m(),u=m(),V=m(),v=m(),K=Te==="payBack",A=m(!1),B=m(!1),I=m(!1),re=m(0),W=m(!1),G=m(!1),x=m({show:!1,html:""});let z="";m(0);const a=ie({holder:{certNo:te,certType:pe.CERT,mobile:Pe,name:oe,socialFlag:Y.HAS},insured:{certNo:te,certType:pe.CERT,name:oe,socialFlag:Y.HAS,relationToHolder:D.SELF},paymentMethod:Be,renewalDK:"Y",paymentFrequency:ye.YEAR,packageProductList:[],mobileSmsCode:"",activePlanCode:""}),ne=m(De),T=m(De),i=ie({showInsure:!K,canInsure:!1,canUpgrade:!1}),J=j(()=>{var e,t,o,s,r,n;return u.value?!!(((t=(e=u.value)==null?void 0:e.tenantProductInsureVO)==null?void 0:t.planList)&&Array.isArray((s=(o=u.value)==null?void 0:o.tenantProductInsureVO)==null?void 0:s.planList)&&((n=(r=u.value)==null?void 0:r.tenantProductInsureVO)==null?void 0:n.planList.length)>0):!1});ce(()=>J.value,()=>{var e,t;J.value&&(a.activePlanCode=(t=(e=u.value)==null?void 0:e.tenantProductInsureVO)==null?void 0:t.planList[0].planCode)},{immediate:!0});const be=e=>{a.activePlanCode=e},Oe=j(()=>{var e,t;return(((t=(e=u.value)==null?void 0:e.tenantProductInsureVO)==null?void 0:t.attachmentVOList)||[]).filter(o=>o.attachmentName==="\u5065\u5EB7\u544A\u77E5")||[]}),Se=j(()=>{var e,t;return(((t=(e=u.value)==null?void 0:e.tenantProductInsureVO)==null?void 0:t.attachmentVOList)||[]).filter(o=>o.attachmentName!=="\u5065\u5EB7\u544A\u77E5")||[]}),Ue=()=>{console.log("detailScrollRef.value",$.value),$.value.handleClickTab()("tab3")},Le=()=>{if(a.holder.certNo){const e=H(a.holder.certNo,"year"),t=ve(a.holder.certNo);if(e<18)return E("\u6295\u4FDD\u4EBA\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E18\u5C81\uFF01"),!1;if(a.insured.certNo&&a.insured.relationToHolder===D.MATE){const o=ve(a.insured.certNo);if(t===o)return E("\u88AB\u4FDD\u4EBA\u4E3A\u914D\u5076\u65F6\uFF0C\u6027\u522B\u4E0D\u53EF\u76F8\u540C\uFF01"),!1}}if(a.insured.certNo){const e=H(a.insured.certNo,"day"),t=H(a.insured.certNo,"year");if(a.insured.relationToHolder===D.CHILD&&e<30)return E("\u88AB\u4FDD\u4EBA\u4E3A\u5B50\u5973\u65F6\uFF0C\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E30\u5929\uFF01"),!1;if(a.insured.relationToHolder===D.PARENT&&t>=71)return E("\u88AB\u4FDD\u4EBA\u4E3A\u7236\u6BCD\u65F6\uFF0C\u5E74\u9F84\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E70\u5C81\uFF01"),!1}if([D.CHILD,D.PARENT].includes(a.insured.relationToHolder)){const e=H(a.holder.certNo,"year"),t=H(a.insured.certNo,"year");if(a.insured.relationToHolder===D.CHILD&&e-t<18)return E("\u6295\u4FDD\u4EBA\u548C\u5B50\u5973\u5E74\u9F84\u5FC5\u987B\u76F8\u5DEE18\u5C81\uFF01"),!1;if(a.insured.relationToHolder===D.PARENT&&t-e<18)return E("\u6295\u4FDD\u4EBA\u548C\u7236\u6BCD\u5E74\u9F84\u5FC5\u987B\u76F8\u5DEE18\u5C81\uFF01"),!1}return!0},He=()=>{const{holder:{certNo:e,mobile:t,name:o,socialFlag:s},insured:{certNo:r,name:n,socialFlag:c,relationToHolder:f},paymentMethod:h}=a;return!!(ma(r)&&!!c)},ue=()=>{_e.push({path:"/internet/guaranteeUpgrade",query:{...ee.query,tenantId:p,productCode:"BWYL2022",orderNo:_,agentCode:R}})},Re=()=>{G.value=!1},Ve=()=>{T.value=ne.value},xe=()=>{T.value={...T.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},Me=async e=>{E.loading({message:"\u6838\u4FDD\u4E2D...",forbidClick:!0});try{const t=await ya(e),{code:o}=t;if(o==="10000"){E.loading({message:"\u6838\u4FDD\u4E2D...",forbidClick:!0});const s=await Fa({orderNo:e.orderNo,tenantId:p}),{data:r}=s;s.code==="10000"&&(r.type===2?(x.value={show:!0,html:r.paymentUrl},console.log("data.paymentUrl",x.value),la(()=>{console.log("document.forms",document.forms);const n=document.getElementById("cashierSubmit");n==null||n.addEventListener("submit",c=>{c.preventDefault()}),n==null||n.submit()})):window.location.href=r.paymentUrl)}i.canInsure=!0}catch{i.canInsure=!0}},qe=e=>`${he}/pay?orderNo=${e}&saleUserId=${R}&tenantId=${p}`,Ye=e=>`${he}/internet/payFail?tenantId=${p}&orderNo=${e}&agentCode=${R}&pageCode=payBack&from=${ke||"normal"}`,$e=async e=>{console.log("risk",e);const t=Ea({tenantId:p,saleUserId:R,saleChannelId:Ae,detail:u.value,insureDetail:V.value,paymentMethod:a.paymentMethod,paymentFrequency:a.paymentFrequency,renewalDK:a.renewalDK,iseeBizNo:z,successJumpUrl:"",premium:v.value,holder:a.holder,insured:a.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:""});try{const o=await ha(t),{code:s,data:r}=o;s==="10000"&&Me({...t,orderNo:r.data,extInfo:{extraInfo:{renewalDK:a.renewalDK,paymentMethod:a.paymentMethod,paymentFrequency:a.paymentFrequency,successJumpUrl:qe(r.data),failUrl:Ye(r.data)},iseeBizNo:z}})}catch{i.canInsure=!0}},Ke=async()=>{const{calcData:e,riskVOList:t}=ge({holder:a.holder,insured:a.insured,tenantId:p,productDetail:u.value,insureDetail:V.value,paymentFrequency:a.paymentFrequency,packageRiskIdList:Ce(a.packageProductList)},!1,Ee);if(!Array.isArray(t)||t.length<1)return v.value=null,{};const o=await Fe(e),{code:s,data:r}=o;return s==="10000"?(v.value=r.premium,{condition:t,data:r}):(v.value=null,{})},We=e=>{re.value=e,I.value=!0},Ge=()=>new Promise((e,t)=>{var o,s;(s=(o=P.value)==null?void 0:o.validateForm)==null||s.call(o).then(async()=>{var C;if(!Le()){i.canInsure=!0;return}if(!(((C=P.value)==null?void 0:C.isAgreeFile)||A.value)){A.value=!1,I.value=!0,We(0);return}const{calcData:n,riskVOList:c}=ge({holder:a.holder,insured:a.insured,tenantId:p,productDetail:u.value,insureDetail:V.value,paymentFrequency:a.paymentFrequency,packageRiskIdList:Ce(a.packageProductList)},!1,Ee);(!Array.isArray(c)||c.length<1)&&(v.value=null,t(new Error));const f=await Fe(n),{code:h,data:g}=f;h==="10000"?(v.value=g.premium,e({condition:c,data:g})):(v.value=null,t(new Error))}).catch(()=>{i.canInsure=!0})}),ze=async()=>{var e;if(K){ue();return}i.canInsure=!1;try{const{condition:t,data:o}=await Ge(),s={},r=(c=[])=>{(c||[]).forEach(f=>{var h;s[f.riskCode]=f,(h=f.riskPremiumDetailVOList)!=null&&h.length&&r(f.riskPremiumDetailVOList)})};r(o.riskPremiumDetailVOList);const n=Ca({tenantId:p,riskList:t,riskPremium:s,productId:(e=u.value)==null?void 0:e.id});$e(n)}catch{i.canInsure=!0}},Je=e=>{e==="allFalse"?(B.value=!1,A.value=!0,ze(),i.canInsure=!0):sa.confirm({message:"\u60A8\u5F53\u524D\u7684\u5065\u5EB7\u72B6\u51B5\u4E0D\u7B26\u5408\u8BE5\u4EA7\u54C1",confirmButtonText:"\u786E\u5B9A"}).then(()=>{window.history.back()}).catch(()=>{var t;(t=P.value)==null||t.reEditForm(),A.value=!1,i.canInsure=!0})},se=()=>{var e;(e=P.value)==null||e.reEditForm(),A.value=!1,i.canInsure=!0},je=()=>{console.log("onCloseHealthPopup========"),B.value=!1,se()},Qe=()=>{console.log("onCloseFilePreview========"),I.value=!1,se()},Xe=()=>{I.value=!1,B.value=!0};ce([()=>a.insured.certNo,()=>a.insured.socialFlag,()=>a.packageProductList,()=>a.paymentFrequency],ia(()=>{a.insured.certNo&&a.insured.socialFlag&&He()&&Ke()},500),{deep:!0,immediate:!0});const le=async()=>{var s,r,n,c,f,h,g,C,k,b,O,S,U;const e=await va({orderNo:_,tenantId:p}),{code:t,data:o}=e;if(t==="10000"){const{tenantOrderHolder:y,tenantOrderInsuredList:l,extInfo:N}=o;if(!K){Object.assign(a,{holder:{certNo:y.certNo,certType:y.certType,mobile:y.mobile,name:y.name,socialFlag:Y.HAS},insured:{certNo:l==null?void 0:l[0].certNo,certType:(s=l[0])==null?void 0:s.certType,name:(r=l[0])==null?void 0:r.name,socialFlag:(c=(n=l[0])==null?void 0:n.extInfo)==null?void 0:c.hasSocialInsurance,relationToHolder:(f=l[0])==null?void 0:f.relationToHolder},paymentMethod:N.extraInfo.paymentMethod,paymentFrequency:N.extraInfo.paymentFrequency,renewalDK:N.extraInfo.renewalDK||"N"}),i.canInsure=!0;return}Object.assign(a,{holder:{certNo:y.certNo,certType:y.certType,mobile:y.mobile,name:y.name,socialFlag:Y.HAS},insured:{certNo:l==null?void 0:l[0].certNo,certType:(h=l[0])==null?void 0:h.certType,name:(g=l[0])==null?void 0:g.name,socialFlag:(k=(C=l[0])==null?void 0:C.extInfo)==null?void 0:k.hasSocialInsurance,relationToHolder:(b=l[0])==null?void 0:b.relationToHolder},paymentMethod:N.extraInfo.paymentMethod,paymentFrequency:N.extraInfo.paymentFrequency,renewalDK:N.extraInfo.renewalDK||"N"}),v.value=(U=(S=(O=l[0])==null?void 0:O.tenantOrderProductList)==null?void 0:S[0])==null?void 0:U.premium,(o.orderStatus===Z.ACCEPT_POLICY||o.orderStatus===Z.PAYMENT_SUCCESS)&&(i.canUpgrade=!0,W.value=!1,G.value=!0),o.orderStatus===Z.PAYING&&(W.value=!0,setTimeout(()=>{le()},3*1e3))}},Ze=async()=>{const e=ga({productCode:ae,withInsureInfo:!0,tenantId:p}),t=pa({productCode:ae});await Promise.all([e,t]).then(([o,s])=>{var r,n;o.code==="10000"&&(u.value={...o.data},document.title=((r=o.data)==null?void 0:r.productFullName)||""),s.code==="10000"&&(a.packageProductList=(((n=s.data)==null?void 0:n.packageProductVOList)||[]).map(c=>({...c,value:fa.UN_INSURE,disabled:!1})),V.value=s.data)}),_&&le()},ea=()=>{console.log("\u6295\u4FDD\u94FE\u63A5"),T.value=we,ne.value=we,i.canInsure=!0};return ra(()=>{ea(),Ze(),setTimeout(async()=>{z=window.getIseeBiz&&await window.getIseeBiz()},1500)}),(e,t)=>{const o=de("van-button"),s=de("van-config-provider"),r=na("dompurify-html");return L(),me(ua,null,[F(s,{"theme-vars":d(Da)},{default:Q(()=>{var n,c,f,h,g,C,k,b,O,S,U;return[x.value.show?fe((L(),me("div",Oa,null,512)),[[r,x.value.html]]):M("",!0),w("div",Sa,[w("div",Ua,[F(Ie,{url:(c=(n=u.value)==null?void 0:n.tenantProductInsureVO)==null?void 0:c.banner[0]},null,8,["url"]),(h=(f=u.value)==null?void 0:f.tenantProductInsureVO)!=null&&h.bannerMove?(L(),X(Ie,{key:0,url:(C=(g=u.value)==null?void 0:g.tenantProductInsureVO)==null?void 0:C.bannerMove[0],onClick:Ue},null,8,["url"])):M("",!0),F(Ia,{"product-name":(k=u.value)==null?void 0:k.productFullName,"product-desc":(O=(b=u.value)==null?void 0:b.showConfigVO)==null?void 0:O.desc},null,8,["product-name","product-desc"])]),F(wa,{"show-service-config":"","data-source":(S=u.value)==null?void 0:S.tenantProductInsureVO,"show-config":(U=u.value)==null?void 0:U.showConfigVO,"is-multiple-plan":d(J),"active-plan-code":d(a).activePlanCode,onUpdateActivePlan:be},null,8,["data-source","show-config","is-multiple-plan","active-plan-code"]),F(Na,{ref_key:"detailScrollRef",ref:$,detail:u.value},{form:Q(()=>{var y,l;return[F(_a,{ref_key:"formRef",ref:P,"is-show-package":"",disable:!d(i).showInsure,"form-auth":T.value,"form-info":d(a),"product-detail":u.value,onOnReset:Ve,onOnUpdate:xe},null,8,["disable","form-auth","form-info","product-detail"]),F(Pa,{"form-info":d(a),"product-detail":u.value,"show-config":(y=u.value)==null?void 0:y.showConfigVO},null,8,["form-info","product-detail","show-config"]),w("div",La,[fe(w("div",Ha,null,512),[[r,(l=u.value)==null?void 0:l.tenantProductInsureVO.inscribedContent]])])]}),_:1},8,["detail"]),w("div",Ra,[w("div",Va,[xa,w("span",null,q(v.value?"\uFFE5":"")+q(d(da)(v.value))+" "+q(v.value?d(a).paymentFrequency==d(ye).YEAR?"\u5143/\u5E74":"\u5143/\u6708":""),1)]),F(o,{type:"primary",class:"right",disabled:!(d(i).canInsure||d(i).canUpgrade)},{default:Q(()=>[Ne(q(d(i).showInsure?"\u7ACB\u5373\u6295\u4FDD":"\u5347\u7EA7\u4FDD\u969C"),1)]),_:1},8,["disabled"])])]),d(_)?M("",!0):(L(),X(Aa,{key:1,"product-detail":u.value},null,8,["product-detail"])),F(Ba,{"order-no":d(_),"tenant-id":d(p),"is-show":G.value,onOnConfirm:ue,onOnClose:Re},null,8,["order-no","tenant-id","is-show"])]}),_:1},8,["theme-vars"]),F(Ta,{show:B.value,"onUpdate:show":t[0]||(t[0]=n=>B.value=n),"content-list":d(Oe),"active-index":0,onOnConfirmHealth:Je,onOnCloseHealth:je},null,8,["show","content-list"]),I.value?(L(),X(ka,{key:0,show:I.value,"onUpdate:show":t[1]||(t[1]=n=>I.value=n),"content-list":d(Se),"active-index":re.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9","force-read-cound":0,"on-close-file-preview":"",onSubmit:Xe,onOnCloseFilePreview:Qe},null,8,["show","content-list","active-index"])):M("",!0),F(ba,{"is-show":W.value},null,8,["is-show"])],64)}}});var lt=ca(Ma,[["__scopeId","data-v-45065de7"]]);export{lt as default};
