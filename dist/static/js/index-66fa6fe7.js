var et=Object.defineProperty,tt=Object.defineProperties;var at=Object.getOwnPropertyDescriptors;var ye=Object.getOwnPropertySymbols;var ut=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable;var De=(E,m,F)=>m in E?et(E,m,{enumerable:!0,configurable:!0,writable:!0,value:F}):E[m]=F,A=(E,m)=>{for(var F in m||(m={}))ut.call(m,F)&&De(E,F,m[F]);if(ye)for(var F of ye(m))rt.call(m,F)&&De(E,F,m[F]);return E},w=(E,m)=>tt(E,at(m));import{g as ot,a9 as nt,O as st,E as p,M as Ee,y as X,_ as Ce,l as lt,h as it,r as Z,af as ct,j as _,n as ee,p as g,m as te,H as dt,t as L,z as R,k as $,A as f,J as q,C as Pe,F as mt,T as B,D as pt,X as ft}from"./vendor-17026bfd.js";import{_ as Ft,C as ge,I as ht,a1 as vt,J as Be,a4 as Ie}from"./index-89512e8f.js";import{a as ae}from"./order-ef4885fb.js";import{S as Y,R as I,f as yt}from"./infoCollection-360def27.js";import{p as Ne,i as Dt,s as Et,g as Ct,u as gt,a as Bt}from"./trial-9a84775d.js";import{p as It}from"./product-3093cc1e.js";import{g as _e,s as Nt,t as _t,v as ue,a as Ae,b as At}from"./utils-d21e5fd4.js";import{f as wt,a as Tt}from"./utils-b77f2acb.js";import{t as Pt}from"./theme-ea709837.js";import{d as we,B as Ot,D as St,G as bt,S as xt,H as Ht,P as kt,U as Ut,_ as Vt,W as Mt,p as Te,a as K}from"./auth-00e65a2c.js";import{_ as Lt}from"./index-25d55b40.js";import"./trial-11a38a66.js";import"./index-8e0889bf.js";import"./bankCard-72ee7644.js";import"./phoneVerify-6ce838fe.js";const Rt={key:0},$t={class:"page-internet-product-detail"},qt={class:"info"},Yt={class:"footer-button"},Kt={class:"price"},Wt=Pe(" \u603B\u4FDD\u8D39"),Jt={key:0},zt=ot({setup(E){const m=nt(),F=st(),{productCode:W="BWYL2021",tenantId:h,orderNo:C,phoneNo:re,agentCode:T="",saleChannelId:Oe,paymentMethod:Se,certNo:oe,name:ne,pageCode:se,upgradeCode:be,from:le}=F.query,ie=p(),l=p(),P=p(),y=p(),k=se==="payBack",xe=p(!1),U=p(!1),V=p(!1),He=p(0),J=p(!1),z=p(!1),G=p({show:!1,html:""}),j=p(!1),ce=p();let Q="";const t=Ee({holder:{certNo:oe,certType:ge.CERT,mobile:re,name:ne,socialFlag:Y.HAS},insured:{certNo:oe,certType:ge.CERT,name:ne,socialFlag:Y.HAS,relationToHolder:I.SELF},paymentMethod:Se,renewalDK:"Y",paymentFrequency:yt.MONTH}),M=p(we),N=p(we),c=Ee({showInsure:!k,canInsure:!1,canUpgrade:!1}),ke=X(()=>{var a,e;return((e=(a=l.value)==null?void 0:a.tenantProductInsureVO)==null?void 0:e.attachmentVOList.filter(u=>u.attachmentName==="\u5065\u5EB7\u544A\u77E5"))||[]}),Ue=X(()=>{var a,e,u,o,r,n,s,d;return[...((e=(a=l.value)==null?void 0:a.tenantProductInsureVO)==null?void 0:e.titleAndDescVOS)||[],{desc:`\u51FA\u751F${wt((o=(u=l.value)==null?void 0:u.tenantProductInsureVO)==null?void 0:o.holderAgeLimit)}`,title:"\u6295\u4FDD\u5E74\u9F84",noDetail:!0},{desc:Tt((n=(r=l.value)==null?void 0:r.tenantProductInsureVO)==null?void 0:n.insurancePeriodValues),title:"\u4FDD\u969C\u671F\u9650",noDetail:!0},{desc:`${(d=(s=l.value)==null?void 0:s.tenantProductInsureVO)==null?void 0:d.waitPeriod}\u5929\uFF0C\u4E0A\u4E00\u5F20\u4FDD\u5355\u671F\u6EE1\u540E\u6307\u5B9A\u671F\u9650\u5185\u91CD\u65B0\u6295\u4FDD\u3001\u56E0\u906D\u53D7\u610F\u5916\u4F24\u5BB3\u5BFC\u81F4\u7684\u533B\u7597\u65E0\u7B49\u5F85\u671F`,title:"\u7B49\u5F85\u671F",noDetail:!0}]}),Ve=X(()=>{var a,e;return((e=(a=l.value)==null?void 0:a.tenantProductInsureVO)==null?void 0:e.attachmentVOList.filter(u=>u.attachmentName!=="\u5065\u5EB7\u544A\u77E5"))||[]}),de=()=>{if(t.holder.certNo){const a=Be(t.holder.certNo);if(ue(t.holder.certNo,18,"year"))return B("\u6295\u4FDD\u4EBA\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E18\u5C81\uFF01"),!1;if(t.insured.certNo&&t.insured.relationToHolder===I.MATE){const e=Be(t.insured.certNo);if(a===e)return B("\u88AB\u4FDD\u4EBA\u4E3A\u914D\u5076\u65F6\uFF0C\u6027\u522B\u4E0D\u53EF\u76F8\u540C\uFF01"),!1}}if(t.insured.certNo){if(t.insured.relationToHolder===I.CHILD&&ue(t.insured.certNo,30,"day"))return B("\u88AB\u4FDD\u4EBA\u4E3A\u5B50\u5973\u65F6\uFF0C\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E30\u5929\uFF01"),!1;if(t.insured.relationToHolder===I.PARENT&&!ue(t.insured.certNo,71,"year"))return B("\u88AB\u4FDD\u4EBA\u4E3A\u7236\u6BCD\u65F6\uFF0C\u5E74\u9F84\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E70\u5C81\uFF01"),!1}if([I.CHILD,I.PARENT].includes(t.insured.relationToHolder)){const a=Ae(t.holder.certNo,"year"),e=Ae(t.insured.certNo,"year");if(t.insured.relationToHolder===I.CHILD&&a-e<18)return B("\u6295\u4FDD\u4EBA\u548C\u5B50\u5973\u5E74\u9F84\u5FC5\u987B\u76F8\u5DEE18\u5C81\uFF01"),!1;if(t.insured.relationToHolder===I.PARENT&&e-a<18)return B("\u6295\u4FDD\u4EBA\u548C\u7236\u6BCD\u5E74\u9F84\u5FC5\u987B\u76F8\u5DEE18\u5C81\uFF01"),!1}return!0},Me=()=>{const{holder:{certNo:a,mobile:e,name:u,socialFlag:o},insured:{certNo:r,name:n,socialFlag:s,relationToHolder:d},paymentMethod:v}=t;return ht(r)&&!!s},me=()=>{m.push({path:"/internet/guaranteeUpgrade",query:w(A({},F.query),{tenantId:h,productCode:"BWYL2022",orderNo:C,agentCode:T})})},Le=()=>{z.value=!1,m.replace(`/pay?orderNo=${C}&saleUserId=${T}&tenantId=${h}`)},Re=()=>{N.value=M.value},$e=()=>{N.value=w(A({},N.value),{relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1})},qe=async a=>{B.loading({message:"\u6838\u4FDD\u4E2D...",forbidClick:!0,duration:0});try{const e=await gt(a),{code:u}=e;if(u==="10000"){const o=await Bt({orderNo:a.orderNo,tenantId:h}),{data:r}=o;o.code==="10000"&&(r.type===2?(G.value={show:!0,html:r.paymentUrl},ft(()=>{const n=document.getElementById("cashierSubmit");n==null||n.addEventListener("submit",s=>{s.preventDefault()}),n==null||n.submit()})):window.location.href=r.paymentUrl)}c.canInsure=!0}catch{c.canInsure=!0}finally{B.clear()}},Ye=a=>{var r,n;const e=JSON.parse((n=(r=P.value)==null?void 0:r.productBasicInfoVO)==null?void 0:n.extInfo);let u="";return e.endorsementFlag===1&&(u=`&upgradeCode=${e.endorsementCode}`),`${Ie}/internet/productDetail?tenantId=${h}&productCode=${W}&orderNo=${a}&agentCode=${T}&pageCode=payBack${u}&from=${le||"normal"}`},Ke=a=>`${Ie}/internet/payFail?tenantId=${h}&orderNo=${a}&agentCode=${T}&pageCode=payBack&from=${le||"normal"}`,We=async a=>{const e=At({tenantId:h,saleUserId:T,saleChannelId:Oe,detail:l.value,insureDetail:P.value,paymentMethod:t.paymentMethod,renewalDK:t.renewalDK,iseeBizNo:Q,successJumpUrl:"",premium:y.value,holder:t.holder,insured:t.insured,tenantOrderRiskList:a,orderStatus:"",orderTopStatus:"",orderNo:C,originOrderIds:ce.value});try{const u=await Et(e),{code:o,data:r}=u;o==="10000"&&qe(w(A({},e),{orderNo:r.data,extInfo:{extraInfo:{renewalDK:t.renewalDK,paymentMethod:t.paymentMethod,paymentFrequency:t.paymentFrequency,successJumpUrl:Ye(r.data),failUrl:Ke(r.data)},iseeBizNo:Q}}))}catch{c.canInsure=!0}},Je=async()=>{if(c.canInsure=!0,!de())return{};const{calcData:a,riskVOList:e}=_e({holder:t.holder,insured:t.insured,tenantId:h,paymentFrequency:t.paymentFrequency,productDetail:l.value,insureDetail:P.value},!0);if(!Array.isArray(e)||e.length<1)return B("\u88AB\u4FDD\u4EBA\u5E74\u9F84\u9700\u572830\u5929(\u542B) - 70\u5C81(\u542B)\u4E4B\u95F4\uFF01"),y.value=null,{};j.value=!0;const u=await Ne(a);j.value=!1;const{code:o,data:r}=u;return o==="10000"?t.insured.certNo?(y.value=r.premium,{condition:e,data:r}):(y.value=null,{condition:e,data:r}):{}},ze=()=>new Promise((a,e)=>{var u,o;(o=(u=ie.value)==null?void 0:u.validateForm)==null||o.call(u).then(async()=>{if(!de()){e(new Error);return}const{calcData:r,riskVOList:n}=_e({holder:t.holder,insured:t.insured,tenantId:h,paymentFrequency:t.paymentFrequency,productDetail:l.value,insureDetail:P.value},!0),s=await Ne(r),{code:d,data:v}=s;d==="10000"?(y.value=v.premium,a({condition:n,data:v})):e(new Error)}).catch(r=>{c.canInsure=!0,Nt(r)})}),pe=async()=>{var a;if(k){me();return}c.canInsure=!1;try{const{condition:e,data:u}=await ze(),o={},r=(s=[])=>{(s||[]).forEach(d=>{var v;o[d.riskCode]=d,((v=d.riskPremiumDetailVOList)==null?void 0:v.length)&&r(d.riskPremiumDetailVOList)})};r(u.riskPremiumDetailVOList);const n=_t({tenantId:h,riskList:e,riskPremium:o,productId:(a=l.value)==null?void 0:a.id});We(n)}catch{c.canInsure=!0}},Ge=a=>{a==="allFalse"?(U.value=!1,pe(),c.canInsure=!0):pt.confirm({message:"\u60A8\u5F53\u524D\u7684\u5065\u5EB7\u72B6\u51B5\u4E0D\u7B26\u5408\u8BE5\u4EA7\u54C1",confirmButtonText:"\u786E\u5B9A"}).then(()=>{window.history.back()})},je=()=>{xe.value=!0,V.value=!1,U.value=!0};Ce([()=>t.insured.certNo,()=>t.insured.socialFlag],lt.exports.debounce(()=>{t.insured.certNo&&t.insured.socialFlag&&se!=="payBack"&&Me()&&Je()},500),{deep:!0,immediate:!0}),Ce(()=>t.insured.certNo,()=>{t.insured.certNo||(y.value=null)});const fe=async()=>{var o,r,n,s,d,v,O,S,b,x,Fe,he,ve;const a=await Ct({orderNo:C,tenantId:h}),{code:e,data:u}=a;if(e==="10000"){const{id:Ze,tenantOrderHolder:D,tenantOrderInsuredList:i,extInfo:H}=u;if(!k){ce.value={id:Ze,holderId:D==null?void 0:D.id,insuredId:i==null?void 0:i[0].id},Object.assign(t,{holder:{certNo:D.certNo,certType:D.certType,mobile:D.mobile,name:D.name,socialFlag:Y.HAS},insured:{certNo:i==null?void 0:i[0].certNo,certType:(o=i[0])==null?void 0:o.certType,name:(r=i[0])==null?void 0:r.name,socialFlag:(s=(n=i[0])==null?void 0:n.extInfo)==null?void 0:s.hasSocialInsurance,relationToHolder:(d=i[0])==null?void 0:d.relationToHolder},paymentMethod:H.extraInfo.paymentMethod,paymentFrequency:H.extraInfo.paymentFrequency,renewalDK:"Y"}),c.canInsure=!0;return}Object.assign(t,{holder:{certNo:D.certNo,certType:D.certType,mobile:D.mobile,name:D.name,socialFlag:Y.HAS},insured:{certNo:i==null?void 0:i[0].certNo,certType:(v=i[0])==null?void 0:v.certType,name:(O=i[0])==null?void 0:O.name,socialFlag:(b=(S=i[0])==null?void 0:S.extInfo)==null?void 0:b.hasSocialInsurance,relationToHolder:(x=i[0])==null?void 0:x.relationToHolder},paymentMethod:H.extraInfo.paymentMethod,paymentFrequency:H.extraInfo.paymentFrequency,renewalDK:H.extraInfo.renewalDK||"N"}),y.value=(ve=(he=(Fe=i[0])==null?void 0:Fe.tenantOrderProductList)==null?void 0:he[0])==null?void 0:ve.premium,(u.orderStatus===ae.ACCEPT_POLICY||u.orderStatus===ae.PAYMENT_SUCCESS)&&(c.canUpgrade=!0,J.value=!1,z.value=!0),u.orderStatus===ae.PAYING&&(J.value=!0,setTimeout(()=>{fe()},3*1e3))}},Qe=async()=>{const a=It({productCode:W,withInsureInfo:!0,tenantId:h}),e=Dt({productCode:W});await Promise.all([a,e]).then(([u,o])=>{var r;u.code==="10000"&&(l.value=u.data,document.title=((r=u.data)==null?void 0:r.productFullName)||""),o.code==="10000"&&(P.value=o.data)}),C&&fe()},Xe=()=>{k?(N.value=Te,M.value=Te,console.log("\u652F\u4ED8\u5B8C\u6210\u8FDB\u5165")):C?(console.log("\u6295\u4FDD\u94FE\u63A5-\u6765\u4ED8\u94B1"),N.value=w(A({},K),{paymentFrequencyDisable:!0}),M.value=K,c.canInsure=!0):re||C||(console.log("\u6295\u4FDD\u94FE\u63A5"),N.value=w(A({},K),{paymentFrequencyDisable:!0}),M.value=K,c.canInsure=!0)};return it(()=>{Xe(),Qe(),setTimeout(async()=>{Q=window.getIseeBiz&&await window.getIseeBiz()},1500)}),(a,e)=>{const u=Z("van-loading"),o=Z("van-button"),r=Z("van-config-provider"),n=ct("dompurify-html");return _(),ee(mt,null,[g(r,{"theme-vars":f(Pt)},{default:te(()=>{var s,d,v,O,S,b,x;return[G.value.show?dt((_(),ee("div",Rt,null,512)),[[n,G.value.html]]):L("",!0),R("div",$t,[R("div",qt,[g(Ot,{url:(d=(s=l.value)==null?void 0:s.tenantProductInsureVO)==null?void 0:d.banner[0]},null,8,["url"]),g(St,{"product-name":(v=l.value)==null?void 0:v.productFullName,"product-desc":(S=(O=l.value)==null?void 0:O.showConfigVO)==null?void 0:S.desc},null,8,["product-name","product-desc"])]),((x=(b=l.value)==null?void 0:b.tenantProductInsureVO)==null?void 0:x.titleAndDescVOS)?(_(),$(bt,{key:0,"guarantee-list":f(Ue)},null,8,["guarantee-list"])):L("",!0),g(xt,{detail:l.value},{form:te(()=>[g(Ht,{ref_key:"formRef",ref:ie,disable:!f(c).showInsure,"form-auth":N.value,"form-info":f(t),premium:y.value,"product-detail":l.value,payments:[1],"payment-method":[0],onOnReset:Re,onOnUpdate:$e},null,8,["disable","form-auth","form-info","premium","product-detail"])]),_:1},8,["detail"]),R("div",Yt,[R("div",Kt,[Wt,j.value?(_(),$(u,{key:1,class:"premium-loading",type:"spinner"})):(_(),ee("span",Jt,q(y.value?"\uFFE5":"")+q(f(vt)(y.value))+q(y.value?"\u5143/\u6708":""),1))]),g(o,{type:"primary",class:"right",disabled:!(f(c).canInsure||f(c).canUpgrade),onClick:pe},{default:te(()=>[Pe(q(f(c).showInsure?"\u7ACB\u5373\u6295\u4FDD":"\u5347\u7EA7\u4FDD\u969C"),1)]),_:1},8,["disabled"])])]),f(C)?L("",!0):(_(),$(kt,{key:1,"product-detail":l.value},null,8,["product-detail"])),g(Ut,{"order-no":f(C),"tenant-id":f(h),"upgrade-code":f(be),"is-show":z.value,onOnConfirm:me,onOnClose:Le},null,8,["order-no","tenant-id","upgrade-code","is-show"])]}),_:1},8,["theme-vars"]),g(Vt,{show:U.value,"onUpdate:show":e[0]||(e[0]=s=>U.value=s),"content-list":f(ke),"active-index":0,onOnConfirmHealth:Ge},null,8,["show","content-list"]),V.value?(_(),$(Lt,{key:0,show:V.value,"onUpdate:show":e[1]||(e[1]=s=>V.value=s),"content-list":f(Ve),"active-index":He.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9",onSubmit:je},null,8,["show","content-list","active-index"])):L("",!0),g(Mt,{"is-show":J.value},null,8,["is-show"])],64)}}});var da=Ft(zt,[["__scopeId","data-v-56b46ada"]]);export{da as default};
