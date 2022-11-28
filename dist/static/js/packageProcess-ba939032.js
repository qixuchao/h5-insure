import{h as ua,aa as na,P as sa,G as i,N as ye,z as Ee,$ as ge,l as la,j as ia,r as W,ag as ca,k as B,p as G,s as E,n as z,I as da,v as j,A as S,B as h,L as H,m as J,E as ma,F as pa,T as m,D as fa,a5 as va,a6 as ha,Y as Fa}from"./vendor-3a8faf02.js";import{_ as ya,C as De,a1 as Ea,I as ga,a4 as Ce,J as Ie}from"./index-cf71facf.js";import{a as Q}from"./order-62d7476f.js";import{S as M,R as D,g as Ne,I as X}from"./infoCollection-ca550ae8.js";import{p as _e,i as Da,u as Ca,a as Ia,s as Na,g as _a}from"./trial-73b847aa.js";import{p as Ba}from"./product-274054df.js";import{g as Be,o as we,t as wa,b as Aa,j as Ae,s as ka,v as Z,a as ke}from"./utils-7026600a.js";import{t as Pa}from"./theme-ea709837.js";import{d as Pe,B as Ta,D as Sa,G as Ua,S as ba,H as Ra,P as Oa,U as La,_ as xa,W as Ha,a as Te}from"./auth-56728da3.js";import{_ as Ma}from"./index-02381bf2.js";import"./trial-8af76a76.js";import"./check-detail-60b0cbde.js";import"./index-b25caa32.js";import"./bankCard-4efc3256.js";import"./loading-a17c6789.js";import"./phoneVerify-799964f9.js";import"./close-df102554.js";import"./upgrade_bg-e5aa6c29.js";const Va=U=>(va("data-v-3fbae12c"),U=U(),ha(),U),qa={key:0},Ya={class:"page-internet-product-detail"},$a={class:"info"},Ka={class:"footer-button"},Wa={class:"price"},Ga=Va(()=>S("span",null,"\u603B\u4FDD\u8D39",-1)),za={key:0},ja=ua({setup(U){const Se=na(),ee=sa(),{productCode:ae="BWYL2021",tenantId:F,orderNo:C,phoneNo:Ue,agentCode:b="",saleChannelId:be,paymentMethod:Re,certNo:te,name:re,pageCode:Oe,from:Le}=ee.query,oe=i(),d=i(),R=i(),p=i(),V=Oe==="payBack";i(!1);const I=i(!1),g=i(!1),ue=i(0),q=i(!1),Y=i(!1),O=i({show:!1,html:""}),w=i({}),ne=i(),$=i(!1),se=i("");let K="";const e=ye({holder:{certNo:te,certType:De.CERT,mobile:Ue,name:re,socialFlag:M.HAS},insured:{certNo:te,certType:De.CERT,name:re,socialFlag:M.HAS,relationToHolder:D.SELF},paymentMethod:Re,renewalDK:"Y",paymentFrequency:Ne.YEAR,packageProductList:[],mobileSmsCode:""}),le=i(Pe),A=i(Pe),c=ye({showInsure:!V,canInsure:!1,canUpgrade:!1}),xe=Ee(()=>{var t,a;return((a=(t=d.value)==null?void 0:t.tenantProductInsureVO)==null?void 0:a.attachmentVOList.filter(r=>r.attachmentName==="\u5065\u5EB7\u544A\u77E5"))||[]}),He=Ee(()=>{var t,a;return((a=(t=d.value)==null?void 0:t.tenantProductInsureVO)==null?void 0:a.attachmentVOList.filter(r=>r.attachmentName!=="\u5065\u5EB7\u544A\u77E5"))||[]}),ie=()=>{se.value=p.value?e.paymentFrequency==Ne.YEAR?"\u5143/\u5E74":"\u5143/\u6708":""},Me=()=>{if(e.holder.certNo){const t=Ie(e.holder.certNo);if(Z(e.holder.certNo,18,"year"))return m("\u6295\u4FDD\u4EBA\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E18\u5C81\uFF01"),!1;if(e.insured.certNo&&e.insured.relationToHolder===D.MATE){const a=Ie(e.insured.certNo);if(t===a)return m("\u88AB\u4FDD\u4EBA\u4E3A\u914D\u5076\u65F6\uFF0C\u6027\u522B\u4E0D\u53EF\u76F8\u540C\uFF01"),!1}}if(e.insured.certNo){if(e.insured.relationToHolder===D.CHILD&&Z(e.insured.certNo,30,"day"))return m("\u88AB\u4FDD\u4EBA\u4E3A\u5B50\u5973\u65F6\uFF0C\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E30\u5929\uFF01"),!1;if(e.insured.relationToHolder===D.PARENT&&!Z(e.insured.certNo,71,"year"))return m("\u88AB\u4FDD\u4EBA\u4E3A\u7236\u6BCD\u65F6\uFF0C\u5E74\u9F84\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E70\u5C81\uFF01"),!1}if([D.CHILD,D.PARENT].includes(e.insured.relationToHolder)){const t=ke(e.holder.certNo,"year"),a=ke(e.insured.certNo,"year");if(e.insured.relationToHolder===D.CHILD&&t-a<18)return m("\u6295\u4FDD\u4EBA\u548C\u5B50\u5973\u5E74\u9F84\u5FC5\u987B\u76F8\u5DEE18\u5C81\uFF01"),!1;if(e.insured.relationToHolder===D.PARENT&&a-t<18)return m("\u6295\u4FDD\u4EBA\u548C\u7236\u6BCD\u5E74\u9F84\u5FC5\u987B\u76F8\u5DEE18\u5C81\uFF01"),!1}return!0},Ve=()=>{const{holder:{certNo:t,mobile:a,name:r,socialFlag:u},insured:{certNo:o,name:s,socialFlag:l,relationToHolder:f},paymentMethod:v}=e;return!!(ga(o)&&!!l)},ce=()=>{Se.push({path:"/internet/guaranteeUpgrade",query:{...ee.query,tenantId:F,productCode:"BWYL2022",orderNo:C,agentCode:b}})},qe=()=>{Y.value=!1},Ye=()=>{A.value=le.value},$e=()=>{A.value={...A.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},Ke=async t=>{m.loading({message:"\u6838\u4FDD\u4E2D...",forbidClick:!0,duration:0});try{const a=await Ca(t),{code:r}=a;if(r==="10000"){const u=await Ia({orderNo:t.orderNo,tenantId:F}),{data:o}=u;u.code==="10000"&&(o.type===2?(O.value={show:!0,html:o.paymentUrl},console.log("data.paymentUrl",O.value),Fa(()=>{console.log("document.forms",document.forms);const s=document.getElementById("cashierSubmit");s==null||s.addEventListener("submit",l=>{l.preventDefault()}),s==null||s.submit()})):window.location.href=o.paymentUrl)}c.canInsure=!0}catch{c.canInsure=!0}finally{m.clear()}},We=t=>`${Ce}/pay?orderNo=${t}&saleUserId=${b}&tenantId=${F}`,Ge=t=>`${Ce}/internet/payFail?tenantId=${F}&orderNo=${t}&agentCode=${b}&pageCode=payBack&from=${Le||"normal"}`,ze=t=>{ue.value=t,g.value=!0},je=async t=>{const a=Aa({tenantId:F,saleUserId:b,saleChannelId:be,detail:d.value,insureDetail:R.value,paymentMethod:e.paymentMethod,paymentFrequency:e.paymentFrequency,renewalDK:e.renewalDK,iseeBizNo:K,successJumpUrl:"",premium:p.value,holder:e.holder,insured:e.insured,tenantOrderRiskList:t,orderStatus:"",orderTopStatus:"",orderNo:C,originOrderIds:ne.value});try{const r=await Na(a),{code:u,data:o}=r;g.value=!1,I.value=!1,u==="10000"&&(m.clear(),delete a.id,w.value={orderNo:o.data,order:a},g.value=!0,ze(0))}catch{m.clear(),c.canInsure=!0}},Je=async()=>{const{calcData:t,riskVOList:a}=Be({holder:e.holder,insured:e.insured,tenantId:F,productDetail:d.value,insureDetail:R.value,paymentFrequency:e.paymentFrequency,packageRiskIdList:we(e.packageProductList)},!1,Ae);if(!Array.isArray(a)||a.length<1)return m("\u88AB\u4FDD\u4EBA\u5E74\u9F84\u9700\u572830\u5929(\u542B) - 70\u5C81(\u542B)\u4E4B\u95F4\uFF01"),p.value=null,{};$.value=!0;const r=await _e(t);$.value=!1;const{code:u,data:o}=r;return u==="10000"?e.insured.certNo?(p.value=o.premium,ie(),{condition:a,data:o}):(p.value=null,ie(),{condition:a,data:o}):(p.value=null,{})},Qe=()=>new Promise((t,a)=>{var r,u;(u=(r=oe.value)==null?void 0:r.validateForm)==null||u.call(r).then(async()=>{if(!Me()){c.canInsure=!0;return}const{calcData:o,riskVOList:s}=Be({holder:e.holder,insured:e.insured,tenantId:F,productDetail:d.value,insureDetail:R.value,paymentFrequency:e.paymentFrequency,packageRiskIdList:we(e.packageProductList)},!1,Ae);(!Array.isArray(s)||s.length<1)&&(m("\u88AB\u4FDD\u4EBA\u5E74\u9F84\u9700\u572830\u5929(\u542B) - 70\u5C81(\u542B)\u4E4B\u95F4\uFF01"),p.value=null,a(new Error));const l=await _e(o),{code:f,data:v}=l;f==="10000"?(p.value=v.premium,t({condition:s,data:v})):(p.value=null,a(new Error))}).catch(o=>{c.canInsure=!0,ka(o)})}),Xe=async()=>{var t;if(V){ce();return}try{m.loading({message:"\u8BA2\u5355\u751F\u6210\u4E2D...",forbidClick:!0,duration:0});const{condition:a,data:r}=await Qe(),u={},o=(l=[])=>{(l||[]).forEach(f=>{var v;u[f.riskCode]=f,(v=f.riskPremiumDetailVOList)!=null&&v.length&&o(f.riskPremiumDetailVOList)})};o(r.riskPremiumDetailVOList);const s=wa({tenantId:F,riskList:a,riskPremium:u,productId:(t=d.value)==null?void 0:t.id});je(s)}catch{c.canInsure=!0}finally{m.clear()}},Ze=t=>{t==="allFalse"?(I.value=!1,c.canInsure=!0,Ke({...w.value.order,orderNo:w.value.orderNo,extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,paymentFrequency:e.paymentFrequency,successJumpUrl:We(w.value.orderNo),failUrl:Ge(w.value.orderNo)},iseeBizNo:K}})):fa.confirm({message:"\u60A8\u5F53\u524D\u7684\u5065\u5EB7\u72B6\u51B5\u4E0D\u7B26\u5408\u8BE5\u4EA7\u54C1",confirmButtonText:"\u786E\u5B9A"}).then(()=>{window.history.back()}).catch(()=>{c.canInsure=!0})},de=()=>{g.value=!1,I.value=!1,c.canInsure=!0},ea=()=>{g.value=!1,I.value=!0};ge([()=>e.insured.certNo,()=>e.insured.socialFlag,()=>e.packageProductList,()=>e.paymentFrequency],la.exports.debounce(()=>{e.insured.certNo&&e.insured.socialFlag&&Ve()&&Je()},500),{deep:!0,immediate:!0}),ge(()=>e.insured.certNo,()=>{e.insured.certNo||(p.value=null)});const me=async()=>{var u,o,s,l,f,v,N,k,P,T,pe,fe,ve,he,Fe;const t=await _a({orderNo:C,tenantId:F}),{code:a,data:r}=t;if(a==="10000"){const{id:ra,tenantOrderHolder:y,tenantOrderInsuredList:n,extInfo:_}=r;if(!V){ne.value={id:ra,holderId:y==null?void 0:y.id,insuredId:n==null?void 0:n[0].id};const oa=(((o=(u=n[0])==null?void 0:u.tenantOrderProductList[0])==null?void 0:o.tenantOrderRiskList)||[]).map(L=>{var x;return((x=L.extInfo)==null?void 0:x.riskId)||""});e.packageProductList.forEach(L=>{L.value=L.productRiskVoList.filter(x=>oa.includes(x.id)).length>0?X.INSURE:X.UN_INSURE}),Object.assign(e,{holder:{certNo:y.certNo,certType:y.certType,mobile:y.mobile,name:y.name,socialFlag:M.HAS},insured:{certNo:n==null?void 0:n[0].certNo,certType:(s=n[0])==null?void 0:s.certType,name:(l=n[0])==null?void 0:l.name,socialFlag:(v=(f=n[0])==null?void 0:f.extInfo)==null?void 0:v.hasSocialInsurance,relationToHolder:(N=n[0])==null?void 0:N.relationToHolder},paymentMethod:_.extraInfo.paymentMethod,paymentFrequency:_.extraInfo.paymentFrequency,renewalDK:_.extraInfo.renewalDK||"N"}),c.canInsure=!0;return}Object.assign(e,{holder:{certNo:y.certNo,certType:y.certType,mobile:y.mobile,name:y.name,socialFlag:M.HAS},insured:{certNo:n==null?void 0:n[0].certNo,certType:(k=n[0])==null?void 0:k.certType,name:(P=n[0])==null?void 0:P.name,socialFlag:(pe=(T=n[0])==null?void 0:T.extInfo)==null?void 0:pe.hasSocialInsurance,relationToHolder:(fe=n[0])==null?void 0:fe.relationToHolder},paymentMethod:_.extraInfo.paymentMethod,paymentFrequency:_.extraInfo.paymentFrequency,renewalDK:_.extraInfo.renewalDK||"N"}),p.value=(Fe=(he=(ve=n[0])==null?void 0:ve.tenantOrderProductList)==null?void 0:he[0])==null?void 0:Fe.premium,(r.orderStatus===Q.ACCEPT_POLICY||r.orderStatus===Q.PAYMENT_SUCCESS)&&(c.canUpgrade=!0,q.value=!1,Y.value=!0),r.orderStatus===Q.PAYING&&(q.value=!0,setTimeout(()=>{me()},3*1e3))}},aa=async()=>{var r,u;const t=await Ba({productCode:ae,withInsureInfo:!0,tenantId:F});t.code==="10000"&&(d.value=t.data,document.title=((r=t.data)==null?void 0:r.productFullName)||"");const a=await Da({productCode:ae});a.code==="10000"&&(e.packageProductList=(((u=a.data)==null?void 0:u.packageProductVOList)||[]).map(o=>({...o,value:X.UN_INSURE,disabled:!1})),R.value=a.data),C&&me()},ta=()=>{console.log("\u6295\u4FDD\u94FE\u63A5"),A.value=Te,le.value=Te,c.canInsure=!0};return ia(()=>{ta(),aa(),setTimeout(async()=>{K=window.getIseeBiz&&await window.getIseeBiz()},1500)}),(t,a)=>{const r=W("van-loading"),u=W("van-button"),o=W("van-config-provider"),s=ca("dompurify-html");return B(),G(pa,null,[E(o,{"theme-vars":h(Pa)},{default:z(()=>{var l,f,v,N,k,P,T;return[O.value.show?da((B(),G("div",qa,null,512)),[[s,O.value.html]]):j("",!0),S("div",Ya,[S("div",$a,[E(Ta,{url:(f=(l=d.value)==null?void 0:l.tenantProductInsureVO)==null?void 0:f.banner[0]},null,8,["url"]),E(Sa,{"product-name":(v=d.value)==null?void 0:v.productFullName,"product-desc":(k=(N=d.value)==null?void 0:N.showConfigVO)==null?void 0:k.desc},null,8,["product-name","product-desc"])]),E(Ua,{"show-service-config":"","guarantee-list":(T=(P=d.value)==null?void 0:P.tenantProductInsureVO)==null?void 0:T.titleAndDescVOS},null,8,["guarantee-list"]),E(ba,{detail:d.value},{form:z(()=>[E(Ra,{ref_key:"formRef",ref:oe,"is-show-package":"",disable:!h(c).showInsure,"form-auth":A.value,"form-info":h(e),"product-detail":d.value,onOnReset:Ye,onOnUpdate:$e},null,8,["disable","form-auth","form-info","product-detail"])]),_:1},8,["detail"]),S("div",Ka,[S("div",Wa,[Ga,$.value?(B(),J(r,{key:1,class:"premium-loading",type:"spinner"})):(B(),G("span",za,H(p.value?"\uFFE5":"")+H(h(Ea)(p.value))+" "+H(se.value),1))]),E(u,{type:"primary",class:"right",disabled:!(h(c).canInsure||h(c).canUpgrade),onClick:Xe},{default:z(()=>[ma(H(h(c).showInsure?"\u7ACB\u5373\u6295\u4FDD":"\u5347\u7EA7\u4FDD\u969C"),1)]),_:1},8,["disabled"])])]),h(C)?j("",!0):(B(),J(Oa,{key:1,"product-detail":d.value},null,8,["product-detail"])),E(La,{"order-no":h(C),"tenant-id":h(F),"is-show":Y.value,onOnConfirm:ce,onOnClose:qe},null,8,["order-no","tenant-id","is-show"])]}),_:1},8,["theme-vars"]),E(xa,{show:I.value,"onUpdate:show":a[0]||(a[0]=l=>I.value=l),"content-list":h(xe),"active-index":0,onOnConfirmHealth:Ze,onOnCloseHealth:de},null,8,["show","content-list"]),g.value?(B(),J(Ma,{key:0,show:g.value,"onUpdate:show":a[1]||(a[1]=l=>g.value=l),"content-list":h(He),"active-index":ue.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9","force-read-cound":2,"on-close-file-preview":"",onSubmit:ea,onOnCloseFilePreview:de},null,8,["show","content-list","active-index"])):j("",!0),E(Ha,{"is-show":q.value},null,8,["is-show"])],64)}}});var ft=ya(ja,[["__scopeId","data-v-3fbae12c"]]);export{ft as default};
