var ia=Object.defineProperty,ca=Object.defineProperties;var da=Object.getOwnPropertyDescriptors;var De=Object.getOwnPropertySymbols;var ma=Object.prototype.hasOwnProperty,pa=Object.prototype.propertyIsEnumerable;var Ce=(d,m,v)=>m in d?ia(d,m,{enumerable:!0,configurable:!0,writable:!0,value:v}):d[m]=v,R=(d,m)=>{for(var v in m||(m={}))ma.call(m,v)&&Ce(d,v,m[v]);if(De)for(var v of De(m))pa.call(m,v)&&Ce(d,v,m[v]);return d},O=(d,m)=>ca(d,da(m));import{h as fa,aa as va,P as ha,G as i,N as Ie,z as Ne,$ as _e,l as Fa,j as ya,r as J,ag as Ea,k,p as Q,s as C,n as X,I as ga,v as Z,A as L,B as E,L as Y,m as ee,E as Da,F as Ca,a5 as Ia,a6 as Na,T as f,D as _a,Y as Ba}from"./vendor-b1b61443.js";import{_ as wa,C as Be,a1 as Aa,I as ka,a4 as we,J as Ae}from"./index-92f7e5a0.js";import{a as ae}from"./order-14fc0d7b.js";import{f as $,R as N,g as ke,I as te}from"./infoCollection-94aa6829.js";import{p as Pe,i as Pa,u as Ta,b as Sa,s as Ua,a as ba}from"./trial-9fb470ba.js";import{p as Ra}from"./product-c493bf61.js";import{g as Te,o as Se,s as Oa,t as La,v as re,a as Ue,b as xa,j as be}from"./utils-aed39651.js";import{t as Ha}from"./theme-ea709837.js";import{d as Re,B as Ma,D as Va,G as qa,S as Ya,H as $a,P as Ka,U as Wa,_ as Ga,W as za,a as Oe}from"./auth-58880c33.js";import{_ as ja}from"./index-b0fe2056.js";import"./trial-5c111350.js";import"./check-detail-227d5d47.js";import"./index-4069b6c8.js";import"./bankCard-bb0210b2.js";import"./validator-c3672f03.js";import"./phoneVerify-554f4642.js";import"./close-df102554.js";const Ja=d=>(Ia("data-v-733c61b2"),d=d(),Na(),d),Qa={key:0},Xa={class:"page-internet-product-detail"},Za={class:"info"},et={class:"footer-button"},at={class:"price"},tt=Ja(()=>L("span",null,"\u603B\u4FDD\u8D39",-1)),rt={key:0},ot=fa({setup(d){const m=va(),v=ha(),{productCode:oe="BWYL2021",tenantId:g,orderNo:_,phoneNo:Le,agentCode:x="",saleChannelId:xe,paymentMethod:He,certNo:ue,name:ne,pageCode:Me,from:Ve}=v.query,se=i(),p=i(),H=i(),h=i(),K=Me==="payBack";i(!1);const B=i(!1),I=i(!1),le=i(0),W=i(!1),G=i(!1),M=i({show:!1,html:""}),P=i({}),ie=i(),z=i(!1),ce=i("");let j="";const e=Ie({holder:{certNo:ue,certType:Be.CERT,mobile:Le,name:ne,socialFlag:$.HAS},insured:{certNo:ue,certType:Be.CERT,name:ne,socialFlag:$.HAS,relationToHolder:N.SELF},paymentMethod:He,renewalDK:"Y",paymentFrequency:ke.YEAR,packageProductList:[],mobileSmsCode:""}),de=i(Re),T=i(Re),c=Ie({showInsure:!K,canInsure:!1,canUpgrade:!1}),qe=Ne(()=>{var t,a;return((a=(t=p.value)==null?void 0:t.tenantProductInsureVO)==null?void 0:a.attachmentVOList.filter(r=>r.attachmentName==="\u5065\u5EB7\u544A\u77E5"))||[]}),Ye=Ne(()=>{var t,a;return((a=(t=p.value)==null?void 0:t.tenantProductInsureVO)==null?void 0:a.attachmentVOList.filter(r=>r.attachmentName!=="\u5065\u5EB7\u544A\u77E5"))||[]}),me=()=>{ce.value=h.value?e.paymentFrequency==ke.YEAR?"\u5143/\u5E74":"\u5143/\u6708":""},$e=()=>{if(e.holder.certNo){const t=Ae(e.holder.certNo);if(re(e.holder.certNo,18,"year"))return f("\u6295\u4FDD\u4EBA\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E18\u5C81\uFF01"),!1;if(e.insured.certNo&&e.insured.relationToHolder===N.MATE){const a=Ae(e.insured.certNo);if(t===a)return f("\u88AB\u4FDD\u4EBA\u4E3A\u914D\u5076\u65F6\uFF0C\u6027\u522B\u4E0D\u53EF\u76F8\u540C\uFF01"),!1}}if(e.insured.certNo){if(e.insured.relationToHolder===N.CHILD&&re(e.insured.certNo,30,"day"))return f("\u88AB\u4FDD\u4EBA\u4E3A\u5B50\u5973\u65F6\uFF0C\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E30\u5929\uFF01"),!1;if(e.insured.relationToHolder===N.PARENT&&!re(e.insured.certNo,71,"year"))return f("\u88AB\u4FDD\u4EBA\u4E3A\u7236\u6BCD\u65F6\uFF0C\u5E74\u9F84\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E70\u5C81\uFF01"),!1}if([N.CHILD,N.PARENT].includes(e.insured.relationToHolder)){const t=Ue(e.holder.certNo,"year"),a=Ue(e.insured.certNo,"year");if(e.insured.relationToHolder===N.CHILD&&t-a<18)return f("\u6295\u4FDD\u4EBA\u548C\u5B50\u5973\u5E74\u9F84\u5FC5\u987B\u76F8\u5DEE18\u5C81\uFF01"),!1;if(e.insured.relationToHolder===N.PARENT&&a-t<18)return f("\u6295\u4FDD\u4EBA\u548C\u7236\u6BCD\u5E74\u9F84\u5FC5\u987B\u76F8\u5DEE18\u5C81\uFF01"),!1}return!0},Ke=()=>{const{holder:{certNo:t,mobile:a,name:r,socialFlag:u},insured:{certNo:o,name:s,socialFlag:l,relationToHolder:F},paymentMethod:y}=e;return!!(ka(o)&&!!l)},pe=()=>{m.push({path:"/internet/guaranteeUpgrade",query:O(R({},v.query),{tenantId:g,productCode:"BWYL2022",orderNo:_,agentCode:x})})},We=()=>{G.value=!1},Ge=()=>{T.value=de.value},ze=()=>{T.value=O(R({},T.value),{relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1})},je=async t=>{f.loading({message:"\u6838\u4FDD\u4E2D...",forbidClick:!0,duration:0});try{const a=await Ta(t),{code:r}=a;if(r==="10000"){const u=await Sa({orderNo:t.orderNo,tenantId:g}),{data:o}=u;u.code==="10000"&&(o.type===2?(M.value={show:!0,html:o.paymentUrl},console.log("data.paymentUrl",M.value),Ba(()=>{console.log("document.forms",document.forms);const s=document.getElementById("cashierSubmit");s==null||s.addEventListener("submit",l=>{l.preventDefault()}),s==null||s.submit()})):window.location.href=o.paymentUrl)}c.canInsure=!0}catch{c.canInsure=!0}finally{f.clear()}},Je=t=>`${we}/pay?orderNo=${t}&saleUserId=${x}&tenantId=${g}`,Qe=t=>`${we}/internet/payFail?tenantId=${g}&orderNo=${t}&agentCode=${x}&pageCode=payBack&from=${Ve||"normal"}`,Xe=t=>{le.value=t,I.value=!0},Ze=async t=>{const a=xa({tenantId:g,saleUserId:x,saleChannelId:xe,detail:p.value,insureDetail:H.value,paymentMethod:e.paymentMethod,paymentFrequency:e.paymentFrequency,renewalDK:e.renewalDK,iseeBizNo:j,successJumpUrl:"",premium:h.value,holder:e.holder,insured:e.insured,tenantOrderRiskList:t,orderStatus:"",orderTopStatus:"",orderNo:_,originOrderIds:ie.value});try{const r=await Ua(a),{code:u,data:o}=r;I.value=!1,B.value=!1,u==="10000"&&(f.clear(),delete a.id,P.value={orderNo:o.data,order:a},I.value=!0,Xe(0))}catch{f.clear(),c.canInsure=!0}},ea=async()=>{const{calcData:t,riskVOList:a}=Te({holder:e.holder,insured:e.insured,tenantId:g,productDetail:p.value,insureDetail:H.value,paymentFrequency:e.paymentFrequency,packageRiskIdList:Se(e.packageProductList)},!1,be);if(!Array.isArray(a)||a.length<1)return f("\u88AB\u4FDD\u4EBA\u5E74\u9F84\u9700\u572830\u5929(\u542B) - 70\u5C81(\u542B)\u4E4B\u95F4\uFF01"),h.value=null,{};z.value=!0;const r=await Pe(t);z.value=!1;const{code:u,data:o}=r;return u==="10000"?e.insured.certNo?(h.value=o.premium,me(),{condition:a,data:o}):(h.value=null,me(),{condition:a,data:o}):(h.value=null,{})},aa=()=>new Promise((t,a)=>{var r,u;(u=(r=se.value)==null?void 0:r.validateForm)==null||u.call(r).then(async()=>{if(!$e()){c.canInsure=!0;return}const{calcData:o,riskVOList:s}=Te({holder:e.holder,insured:e.insured,tenantId:g,productDetail:p.value,insureDetail:H.value,paymentFrequency:e.paymentFrequency,packageRiskIdList:Se(e.packageProductList)},!1,be);(!Array.isArray(s)||s.length<1)&&(f("\u88AB\u4FDD\u4EBA\u5E74\u9F84\u9700\u572830\u5929(\u542B) - 70\u5C81(\u542B)\u4E4B\u95F4\uFF01"),h.value=null,a(new Error));const l=await Pe(o),{code:F,data:y}=l;F==="10000"?(h.value=y.premium,t({condition:s,data:y})):(h.value=null,a(new Error))}).catch(o=>{c.canInsure=!0,Oa(o)})}),ta=async()=>{var t;if(K){pe();return}try{f.loading({message:"\u8BA2\u5355\u751F\u6210\u4E2D...",forbidClick:!0,duration:0});const{condition:a,data:r}=await aa(),u={},o=(l=[])=>{(l||[]).forEach(F=>{var y;u[F.riskCode]=F,((y=F.riskPremiumDetailVOList)==null?void 0:y.length)&&o(F.riskPremiumDetailVOList)})};o(r.riskPremiumDetailVOList);const s=La({tenantId:g,riskList:a,riskPremium:u,productId:(t=p.value)==null?void 0:t.id});Ze(s)}catch{c.canInsure=!0}finally{f.clear()}},ra=t=>{t==="allFalse"?(B.value=!1,c.canInsure=!0,je(O(R({},P.value.order),{orderNo:P.value.orderNo,extInfo:{extraInfo:{renewalDK:e.renewalDK,paymentMethod:e.paymentMethod,paymentFrequency:e.paymentFrequency,successJumpUrl:Je(P.value.orderNo),failUrl:Qe(P.value.orderNo)},iseeBizNo:j}}))):_a.confirm({message:"\u60A8\u5F53\u524D\u7684\u5065\u5EB7\u72B6\u51B5\u4E0D\u7B26\u5408\u8BE5\u4EA7\u54C1",confirmButtonText:"\u786E\u5B9A"}).then(()=>{window.history.back()}).catch(()=>{c.canInsure=!0})},fe=()=>{I.value=!1,B.value=!1,c.canInsure=!0},oa=()=>{I.value=!1,B.value=!0};_e([()=>e.insured.certNo,()=>e.insured.socialFlag,()=>e.packageProductList,()=>e.paymentFrequency],Fa.exports.debounce(()=>{e.insured.certNo&&e.insured.socialFlag&&Ke()&&ea()},500),{deep:!0,immediate:!0}),_e(()=>e.insured.certNo,()=>{e.insured.certNo||(h.value=null)});const ve=async()=>{var u,o,s,l,F,y,w,S,U,b,he,Fe,ye,Ee,ge;const t=await ba({orderNo:_,tenantId:g}),{code:a,data:r}=t;if(a==="10000"){const{id:sa,tenantOrderHolder:D,tenantOrderInsuredList:n,extInfo:A}=r;if(!K){ie.value={id:sa,holderId:D==null?void 0:D.id,insuredId:n==null?void 0:n[0].id};const la=(((o=(u=n[0])==null?void 0:u.tenantOrderProductList[0])==null?void 0:o.tenantOrderRiskList)||[]).map(V=>{var q;return((q=V.extInfo)==null?void 0:q.riskId)||""});e.packageProductList.forEach(V=>{V.value=V.productRiskVoList.filter(q=>la.includes(q.id)).length>0?te.INSURE:te.UN_INSURE}),Object.assign(e,{holder:{certNo:D.certNo,certType:D.certType,mobile:D.mobile,name:D.name,socialFlag:$.HAS},insured:{certNo:n==null?void 0:n[0].certNo,certType:(s=n[0])==null?void 0:s.certType,name:(l=n[0])==null?void 0:l.name,socialFlag:(y=(F=n[0])==null?void 0:F.extInfo)==null?void 0:y.hasSocialInsurance,relationToHolder:(w=n[0])==null?void 0:w.relationToHolder},paymentMethod:A.extraInfo.paymentMethod,paymentFrequency:A.extraInfo.paymentFrequency,renewalDK:A.extraInfo.renewalDK||"N"}),c.canInsure=!0;return}Object.assign(e,{holder:{certNo:D.certNo,certType:D.certType,mobile:D.mobile,name:D.name,socialFlag:$.HAS},insured:{certNo:n==null?void 0:n[0].certNo,certType:(S=n[0])==null?void 0:S.certType,name:(U=n[0])==null?void 0:U.name,socialFlag:(he=(b=n[0])==null?void 0:b.extInfo)==null?void 0:he.hasSocialInsurance,relationToHolder:(Fe=n[0])==null?void 0:Fe.relationToHolder},paymentMethod:A.extraInfo.paymentMethod,paymentFrequency:A.extraInfo.paymentFrequency,renewalDK:A.extraInfo.renewalDK||"N"}),h.value=(ge=(Ee=(ye=n[0])==null?void 0:ye.tenantOrderProductList)==null?void 0:Ee[0])==null?void 0:ge.premium,(r.orderStatus===ae.ACCEPT_POLICY||r.orderStatus===ae.PAYMENT_SUCCESS)&&(c.canUpgrade=!0,W.value=!1,G.value=!0),r.orderStatus===ae.PAYING&&(W.value=!0,setTimeout(()=>{ve()},3*1e3))}},ua=async()=>{var r,u;const t=await Ra({productCode:oe,withInsureInfo:!0,tenantId:g});t.code==="10000"&&(p.value=t.data,document.title=((r=t.data)==null?void 0:r.productFullName)||"");const a=await Pa({productCode:oe});a.code==="10000"&&(e.packageProductList=(((u=a.data)==null?void 0:u.packageProductVOList)||[]).map(o=>O(R({},o),{value:te.UN_INSURE,disabled:!1})),H.value=a.data),_&&ve()},na=()=>{console.log("\u6295\u4FDD\u94FE\u63A5"),T.value=Oe,de.value=Oe,c.canInsure=!0};return ya(()=>{na(),ua(),setTimeout(async()=>{j=window.getIseeBiz&&await window.getIseeBiz()},1500)}),(t,a)=>{const r=J("van-loading"),u=J("van-button"),o=J("van-config-provider"),s=Ea("dompurify-html");return k(),Q(Ca,null,[C(o,{"theme-vars":E(Ha)},{default:X(()=>{var l,F,y,w,S,U,b;return[M.value.show?ga((k(),Q("div",Qa,null,512)),[[s,M.value.html]]):Z("",!0),L("div",Xa,[L("div",Za,[C(Ma,{url:(F=(l=p.value)==null?void 0:l.tenantProductInsureVO)==null?void 0:F.banner[0]},null,8,["url"]),C(Va,{"product-name":(y=p.value)==null?void 0:y.productFullName,"product-desc":(S=(w=p.value)==null?void 0:w.showConfigVO)==null?void 0:S.desc},null,8,["product-name","product-desc"])]),C(qa,{"show-service-config":"","guarantee-list":(b=(U=p.value)==null?void 0:U.tenantProductInsureVO)==null?void 0:b.titleAndDescVOS},null,8,["guarantee-list"]),C(Ya,{detail:p.value},{form:X(()=>[C($a,{ref_key:"formRef",ref:se,"is-show-package":"",disable:!E(c).showInsure,"form-auth":T.value,"form-info":E(e),"product-detail":p.value,onOnReset:Ge,onOnUpdate:ze},null,8,["disable","form-auth","form-info","product-detail"])]),_:1},8,["detail"]),L("div",et,[L("div",at,[tt,z.value?(k(),ee(r,{key:1,class:"premium-loading",type:"spinner"})):(k(),Q("span",rt,Y(h.value?"\uFFE5":"")+Y(E(Aa)(h.value))+" "+Y(ce.value),1))]),C(u,{type:"primary",class:"right",disabled:!(E(c).canInsure||E(c).canUpgrade),onClick:ta},{default:X(()=>[Da(Y(E(c).showInsure?"\u7ACB\u5373\u6295\u4FDD":"\u5347\u7EA7\u4FDD\u969C"),1)]),_:1},8,["disabled"])])]),E(_)?Z("",!0):(k(),ee(Ka,{key:1,"product-detail":p.value},null,8,["product-detail"])),C(Wa,{"order-no":E(_),"tenant-id":E(g),"is-show":G.value,onOnConfirm:pe,onOnClose:We},null,8,["order-no","tenant-id","is-show"])]}),_:1},8,["theme-vars"]),C(Ga,{show:B.value,"onUpdate:show":a[0]||(a[0]=l=>B.value=l),"content-list":E(qe),"active-index":0,onOnConfirmHealth:ra,onOnCloseHealth:fe},null,8,["show","content-list"]),I.value?(k(),ee(ja,{key:0,show:I.value,"onUpdate:show":a[1]||(a[1]=l=>I.value=l),"content-list":E(Ye),"active-index":le.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9","force-read-cound":2,"on-close-file-preview":"",onSubmit:oa,onOnCloseFilePreview:fe},null,8,["show","content-list","active-index"])):Z("",!0),C(za,{"is-show":W.value},null,8,["is-show"])],64)}}});var It=wa(ot,[["__scopeId","data-v-733c61b2"]]);export{It as default};
