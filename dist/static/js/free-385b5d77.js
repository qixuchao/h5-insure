var ua=Object.defineProperty,sa=Object.defineProperties;var la=Object.getOwnPropertyDescriptors;var fe=Object.getOwnPropertySymbols;var ia=Object.prototype.hasOwnProperty,ca=Object.prototype.propertyIsEnumerable;var pe=(E,f,p)=>f in E?ua(E,f,{enumerable:!0,configurable:!0,writable:!0,value:p}):E[f]=p,B=(E,f)=>{for(var p in f||(f={}))ia.call(f,p)&&pe(E,p,f[p]);if(fe)for(var p of fe(f))ca.call(f,p)&&pe(E,p,f[p]);return E},x=(E,f)=>sa(E,la(f));import{g as da,a9 as ma,O as fa,E as m,M as ve,y as ae,_ as he,l as pa,h as va,r as ye,af as ha,j as M,n as Fe,p as C,m as te,H as ge,t as W,z as P,k as oe,A as d,J as z,C as ke,F as ya,D as Fa,T as w,X as ga}from"./vendor-c3c577f2.js";import{_ as Ca,C as Ce,a0 as Ea,H as Da,I as Ee,a1 as De}from"./index-96b72703.js";import{a as re}from"./order-26db6dbf.js";import{S as G,R as _,g as Ie,I as Ia}from"./infoCollection-9259d69e.js";import{p as we,i as wa,g as _a,s as Na,u as Pa,a as Aa}from"./trial-254acb9c.js";import{p as Ba}from"./product-86bfd8bb.js";import{g as _e,o as Ne,v as Pe,t as Ta,a as q,b as ka}from"./utils-5a02c375.js";import{t as Oa}from"./theme-3c294048.js";import{d as Ae,B as Be,D as ba,G as Sa,S as Ha,H as Ua,P as La,a as Ra,U as Va,_ as xa,b as Ma,W as qa,c as Te}from"./auth-845f988f.js";import"./utils-b6782348.js";import"./trial-d18e3c55.js";import"./check-detail-9f866eaa.js";import"./index-03a3248c.js";import"./bankCard-0e4ce564.js";import"./phoneVerify-8aedbe87.js";import"./index-8b4452a1.js";import"./close-df102554.js";const Ya={key:0},$a={class:"page-internet-product-detail"},Ka={class:"info"},Wa={class:"inscribedContent-content"},za={class:"content"},Ga={class:"footer-button"},Ja={class:"price"},ja=ke(" \u603B\u4FDD\u8D39"),Xa=da({setup(E){const f=ma(),p=fa(),{productCode:ne="BWYL2021",tenantId:h,orderNo:T,phoneNo:Oe,agentCode:Y="",saleChannelId:be,paymentMethod:Se,certNo:ue,name:se,pageCode:He,from:Ue}=p.query,k=m(),J=m(),u=m(),$=m(),y=m(),j=He==="payBack",O=m(!1),b=m(!1),N=m(!1),le=m(0),X=m(!1),Q=m(!1),K=m({show:!1,html:""});let Z="";m(0);const a=ve({holder:{certNo:ue,certType:Ce.CERT,mobile:Oe,name:se,socialFlag:G.HAS},insured:{certNo:ue,certType:Ce.CERT,name:se,socialFlag:G.HAS,relationToHolder:_.SELF},paymentMethod:Se,renewalDK:"Y",paymentFrequency:Ie.YEAR,packageProductList:[],mobileSmsCode:"",activePlanCode:""}),ie=m(Ae),S=m(Ae),i=ve({showInsure:!j,canInsure:!1,canUpgrade:!1}),ee=ae(()=>{var e,t,o,s,r,n;return u.value?!!(((t=(e=u.value)==null?void 0:e.tenantProductInsureVO)==null?void 0:t.planList)&&Array.isArray((s=(o=u.value)==null?void 0:o.tenantProductInsureVO)==null?void 0:s.planList)&&((n=(r=u.value)==null?void 0:r.tenantProductInsureVO)==null?void 0:n.planList.length)>0):!1});he(()=>ee.value,()=>{var e,t;ee.value&&(a.activePlanCode=(t=(e=u.value)==null?void 0:e.tenantProductInsureVO)==null?void 0:t.planList[0].planCode)},{immediate:!0});const Le=e=>{a.activePlanCode=e},Re=ae(()=>{var e,t;return(((t=(e=u.value)==null?void 0:e.tenantProductInsureVO)==null?void 0:t.attachmentVOList)||[]).filter(o=>o.attachmentName==="\u5065\u5EB7\u544A\u77E5")||[]}),Ve=ae(()=>{var e,t;return(((t=(e=u.value)==null?void 0:e.tenantProductInsureVO)==null?void 0:t.attachmentVOList)||[]).filter(o=>o.attachmentName!=="\u5065\u5EB7\u544A\u77E5")||[]}),xe=()=>{console.log("detailScrollRef.value",J.value),J.value.handleClickTab()("tab3")},Me=()=>{if(a.holder.certNo){const e=q(a.holder.certNo,"year"),t=Ee(a.holder.certNo);if(e<18)return w("\u6295\u4FDD\u4EBA\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E18\u5C81\uFF01"),!1;if(a.insured.certNo&&a.insured.relationToHolder===_.MATE){const o=Ee(a.insured.certNo);if(t===o)return w("\u88AB\u4FDD\u4EBA\u4E3A\u914D\u5076\u65F6\uFF0C\u6027\u522B\u4E0D\u53EF\u76F8\u540C\uFF01"),!1}}if(a.insured.certNo){const e=q(a.insured.certNo,"day"),t=q(a.insured.certNo,"year");if(a.insured.relationToHolder===_.CHILD&&e<30)return w("\u88AB\u4FDD\u4EBA\u4E3A\u5B50\u5973\u65F6\uFF0C\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E30\u5929\uFF01"),!1;if(a.insured.relationToHolder===_.PARENT&&t>=71)return w("\u88AB\u4FDD\u4EBA\u4E3A\u7236\u6BCD\u65F6\uFF0C\u5E74\u9F84\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E70\u5C81\uFF01"),!1}if([_.CHILD,_.PARENT].includes(a.insured.relationToHolder)){const e=q(a.holder.certNo,"year"),t=q(a.insured.certNo,"year");if(a.insured.relationToHolder===_.CHILD&&e-t<18)return w("\u6295\u4FDD\u4EBA\u548C\u5B50\u5973\u5E74\u9F84\u5FC5\u987B\u76F8\u5DEE18\u5C81\uFF01"),!1;if(a.insured.relationToHolder===_.PARENT&&t-e<18)return w("\u6295\u4FDD\u4EBA\u548C\u7236\u6BCD\u5E74\u9F84\u5FC5\u987B\u76F8\u5DEE18\u5C81\uFF01"),!1}return!0},qe=()=>{const{holder:{certNo:e,mobile:t,name:o,socialFlag:s},insured:{certNo:r,name:n,socialFlag:c,relationToHolder:v},paymentMethod:F}=a;return!!(Da(r)&&!!c)},ce=()=>{f.push({path:"/internet/guaranteeUpgrade",query:x(B({},p.query),{tenantId:h,productCode:"BWYL2022",orderNo:T,agentCode:Y})})},Ye=()=>{Q.value=!1},$e=()=>{S.value=ie.value},Ke=()=>{S.value=x(B({},S.value),{relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1})},We=async e=>{w.loading({message:"\u6838\u4FDD\u4E2D...",forbidClick:!0});try{const t=await Pa(e),{code:o}=t;if(o==="10000"){w.loading({message:"\u6838\u4FDD\u4E2D...",forbidClick:!0});const s=await Aa({orderNo:e.orderNo,tenantId:h}),{data:r}=s;s.code==="10000"&&(r.type===2?(K.value={show:!0,html:r.paymentUrl},console.log("data.paymentUrl",K.value),ga(()=>{console.log("document.forms",document.forms);const n=document.getElementById("cashierSubmit");n==null||n.addEventListener("submit",c=>{c.preventDefault()}),n==null||n.submit()})):window.location.href=r.paymentUrl)}i.canInsure=!0}catch{i.canInsure=!0}},ze=e=>`${De}/pay?orderNo=${e}&saleUserId=${Y}&tenantId=${h}`,Ge=e=>`${De}/internet/payFail?tenantId=${h}&orderNo=${e}&agentCode=${Y}&pageCode=payBack&from=${Ue||"normal"}`,Je=async e=>{console.log("risk",e);const t=ka({tenantId:h,saleUserId:Y,saleChannelId:be,detail:u.value,insureDetail:$.value,paymentMethod:a.paymentMethod,paymentFrequency:a.paymentFrequency,renewalDK:a.renewalDK,iseeBizNo:Z,successJumpUrl:"",premium:y.value,holder:a.holder,insured:a.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:""});try{const o=await Na(t),{code:s,data:r}=o;s==="10000"&&We(x(B({},t),{orderNo:r.data,extInfo:{extraInfo:{renewalDK:a.renewalDK,paymentMethod:a.paymentMethod,paymentFrequency:a.paymentFrequency,successJumpUrl:ze(r.data),failUrl:Ge(r.data)},iseeBizNo:Z}}))}catch{i.canInsure=!0}},je=async()=>{const{calcData:e,riskVOList:t}=_e({holder:a.holder,insured:a.insured,tenantId:h,productDetail:u.value,insureDetail:$.value,paymentFrequency:a.paymentFrequency,packageRiskIdList:Ne(a.packageProductList)},!1,Pe);if(!Array.isArray(t)||t.length<1)return y.value=null,{};const o=await we(e),{code:s,data:r}=o;return s==="10000"?(y.value=r.premium,{condition:t,data:r}):(y.value=null,{})},Xe=e=>{le.value=e,N.value=!0},Qe=()=>new Promise((e,t)=>{var o,s;(s=(o=k.value)==null?void 0:o.validateForm)==null||s.call(o).then(async()=>{var I;if(!Me()){i.canInsure=!0;return}if(!(((I=k.value)==null?void 0:I.isAgreeFile)||O.value)){O.value=!1,N.value=!0,Xe(0);return}const{calcData:n,riskVOList:c}=_e({holder:a.holder,insured:a.insured,tenantId:h,productDetail:u.value,insureDetail:$.value,paymentFrequency:a.paymentFrequency,packageRiskIdList:Ne(a.packageProductList)},!1,Pe);(!Array.isArray(c)||c.length<1)&&(y.value=null,t(new Error));const v=await we(n),{code:F,data:D}=v;F==="10000"?(y.value=D.premium,e({condition:c,data:D})):(y.value=null,t(new Error))}).catch(()=>{i.canInsure=!0})}),Ze=async()=>{var e;if(j){ce();return}i.canInsure=!1;try{const{condition:t,data:o}=await Qe(),s={},r=(c=[])=>{(c||[]).forEach(v=>{var F;s[v.riskCode]=v,((F=v.riskPremiumDetailVOList)==null?void 0:F.length)&&r(v.riskPremiumDetailVOList)})};r(o.riskPremiumDetailVOList);const n=Ta({tenantId:h,riskList:t,riskPremium:s,productId:(e=u.value)==null?void 0:e.id});Je(n)}catch{i.canInsure=!0}},ea=e=>{e==="allFalse"?(b.value=!1,O.value=!0,Ze(),i.canInsure=!0):Fa.confirm({message:"\u60A8\u5F53\u524D\u7684\u5065\u5EB7\u72B6\u51B5\u4E0D\u7B26\u5408\u8BE5\u4EA7\u54C1",confirmButtonText:"\u786E\u5B9A"}).then(()=>{window.history.back()}).catch(()=>{var t;(t=k.value)==null||t.reEditForm(),O.value=!1,i.canInsure=!0})},de=()=>{var e;(e=k.value)==null||e.reEditForm(),O.value=!1,i.canInsure=!0},aa=()=>{console.log("onCloseHealthPopup========"),b.value=!1,de()},ta=()=>{console.log("onCloseFilePreview========"),N.value=!1,de()},oa=()=>{N.value=!1,b.value=!0};he([()=>a.insured.certNo,()=>a.insured.socialFlag,()=>a.packageProductList,()=>a.paymentFrequency],pa.exports.debounce(()=>{a.insured.certNo&&a.insured.socialFlag&&qe()&&je()},500),{deep:!0,immediate:!0});const me=async()=>{var s,r,n,c,v,F,D,I,H,U,L,R,V;const e=await _a({orderNo:T,tenantId:h}),{code:t,data:o}=e;if(t==="10000"){const{tenantOrderHolder:g,tenantOrderInsuredList:l,extInfo:A}=o;if(!j){Object.assign(a,{holder:{certNo:g.certNo,certType:g.certType,mobile:g.mobile,name:g.name,socialFlag:G.HAS},insured:{certNo:l==null?void 0:l[0].certNo,certType:(s=l[0])==null?void 0:s.certType,name:(r=l[0])==null?void 0:r.name,socialFlag:(c=(n=l[0])==null?void 0:n.extInfo)==null?void 0:c.hasSocialInsurance,relationToHolder:(v=l[0])==null?void 0:v.relationToHolder},paymentMethod:A.extraInfo.paymentMethod,paymentFrequency:A.extraInfo.paymentFrequency,renewalDK:A.extraInfo.renewalDK||"N"}),i.canInsure=!0;return}Object.assign(a,{holder:{certNo:g.certNo,certType:g.certType,mobile:g.mobile,name:g.name,socialFlag:G.HAS},insured:{certNo:l==null?void 0:l[0].certNo,certType:(F=l[0])==null?void 0:F.certType,name:(D=l[0])==null?void 0:D.name,socialFlag:(H=(I=l[0])==null?void 0:I.extInfo)==null?void 0:H.hasSocialInsurance,relationToHolder:(U=l[0])==null?void 0:U.relationToHolder},paymentMethod:A.extraInfo.paymentMethod,paymentFrequency:A.extraInfo.paymentFrequency,renewalDK:A.extraInfo.renewalDK||"N"}),y.value=(V=(R=(L=l[0])==null?void 0:L.tenantOrderProductList)==null?void 0:R[0])==null?void 0:V.premium,(o.orderStatus===re.ACCEPT_POLICY||o.orderStatus===re.PAYMENT_SUCCESS)&&(i.canUpgrade=!0,X.value=!1,Q.value=!0),o.orderStatus===re.PAYING&&(X.value=!0,setTimeout(()=>{me()},3*1e3))}},ra=async()=>{const e=Ba({productCode:ne,withInsureInfo:!0,tenantId:h}),t=wa({productCode:ne});await Promise.all([e,t]).then(([o,s])=>{var r,n;o.code==="10000"&&(u.value=B({},o.data),document.title=((r=o.data)==null?void 0:r.productFullName)||""),s.code==="10000"&&(a.packageProductList=(((n=s.data)==null?void 0:n.packageProductVOList)||[]).map(c=>x(B({},c),{value:Ia.UN_INSURE,disabled:!1})),$.value=s.data)}),T&&me()},na=()=>{console.log("\u6295\u4FDD\u94FE\u63A5"),S.value=Te,ie.value=Te,i.canInsure=!0};return va(()=>{na(),ra(),setTimeout(async()=>{Z=window.getIseeBiz&&await window.getIseeBiz()},1500)}),(e,t)=>{const o=ye("van-button"),s=ye("van-config-provider"),r=ha("dompurify-html");return M(),Fe(ya,null,[C(s,{"theme-vars":d(Oa)},{default:te(()=>{var n,c,v,F,D,I,H,U,L,R,V;return[K.value.show?ge((M(),Fe("div",Ya,null,512)),[[r,K.value.html]]):W("",!0),P("div",$a,[P("div",Ka,[C(Be,{url:(c=(n=u.value)==null?void 0:n.tenantProductInsureVO)==null?void 0:c.banner[0]},null,8,["url"]),((F=(v=u.value)==null?void 0:v.tenantProductInsureVO)==null?void 0:F.bannerMove)?(M(),oe(Be,{key:0,url:(I=(D=u.value)==null?void 0:D.tenantProductInsureVO)==null?void 0:I.bannerMove[0],onClick:xe},null,8,["url"])):W("",!0),C(ba,{"product-name":(H=u.value)==null?void 0:H.productFullName,"product-desc":(L=(U=u.value)==null?void 0:U.showConfigVO)==null?void 0:L.desc},null,8,["product-name","product-desc"])]),C(Sa,{"show-service-config":"","data-source":(R=u.value)==null?void 0:R.tenantProductInsureVO,"show-config":(V=u.value)==null?void 0:V.showConfigVO,"is-multiple-plan":d(ee),"active-plan-code":d(a).activePlanCode,onUpdateActivePlan:Le},null,8,["data-source","show-config","is-multiple-plan","active-plan-code"]),C(Ha,{ref_key:"detailScrollRef",ref:J,detail:u.value},{form:te(()=>{var g,l;return[C(Ua,{ref_key:"formRef",ref:k,"is-show-package":"",disable:!d(i).showInsure,"form-auth":S.value,"form-info":d(a),"product-detail":u.value,onOnReset:$e,onOnUpdate:Ke},null,8,["disable","form-auth","form-info","product-detail"]),C(La,{"form-info":d(a),"product-detail":u.value,"show-config":(g=u.value)==null?void 0:g.showConfigVO},null,8,["form-info","product-detail","show-config"]),P("div",Wa,[ge(P("div",za,null,512),[[r,(l=u.value)==null?void 0:l.tenantProductInsureVO.inscribedContent]])])]}),_:1},8,["detail"]),P("div",Ga,[P("div",Ja,[ja,P("span",null,z(y.value?"\uFFE5":"")+z(d(Ea)(y.value))+" "+z(y.value?d(a).paymentFrequency==d(Ie).YEAR?"\u5143/\u5E74":"\u5143/\u6708":""),1)]),C(o,{type:"primary",class:"right",disabled:!(d(i).canInsure||d(i).canUpgrade)},{default:te(()=>[ke(z(d(i).showInsure?"\u7ACB\u5373\u6295\u4FDD":"\u5347\u7EA7\u4FDD\u969C"),1)]),_:1},8,["disabled"])])]),d(T)?W("",!0):(M(),oe(Ra,{key:1,"product-detail":u.value},null,8,["product-detail"])),C(Va,{"order-no":d(T),"tenant-id":d(h),"is-show":Q.value,onOnConfirm:ce,onOnClose:Ye},null,8,["order-no","tenant-id","is-show"])]}),_:1},8,["theme-vars"]),C(xa,{show:b.value,"onUpdate:show":t[0]||(t[0]=n=>b.value=n),"content-list":d(Re),"active-index":0,onOnConfirmHealth:ea,onOnCloseHealth:aa},null,8,["show","content-list"]),N.value?(M(),oe(Ma,{key:0,show:N.value,"onUpdate:show":t[1]||(t[1]=n=>N.value=n),"content-list":d(Ve),"active-index":le.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9","force-read-cound":0,"on-close-file-preview":"",onSubmit:oa,onOnCloseFilePreview:ta},null,8,["show","content-list","active-index"])):W("",!0),C(qa,{"is-show":X.value},null,8,["is-show"])],64)}}});var ht=Ca(Xa,[["__scopeId","data-v-58832670"]]);export{ht as default};
