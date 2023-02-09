import{_ as e,d as a,u as t,a as n,r,z as o,a3 as l,x as i,a8 as d,y as s,b as u,q as c,c as m,g as v,f as p,w as y,s as f,j as h,i as I,e as N,l as g,t as w,aH as b,n as C,F as T,a5 as D,am as O,T as F,an as k,aO as H,aK as P}from"./index-fe8152f2.js";import{d as S}from"./debounce-741f81bc.js";import{a as $}from"./order-5f601f60.js";import{S as x,R as V,g as j}from"./infoCollection-16cf5250.js";import{i as L,s as q,p as U,g as A,u as B,a as E}from"./trial-e394d30d.js";import{p as M}from"./product-6cacf752.js";import{t as _,g as K,a as R,s as Y,v as z,b as W}from"./utils-344162be.js";import{f as J,a as G}from"./utils-b77f2acb.js";import{t as Q}from"./theme-ea709837.js";import{d as X,B as Z,D as ee,G as ae,S as te,H as ne,P as re,U as oe,_ as le,W as ie,a as de,p as se}from"./auth-212922f4.js";import{_ as ue}from"./index-878a7aa9.js";import"./pdfh5-e5c0db2a.js";import"./trial-541c9fd0.js";import"./index-10fe3e92.js";import"./bankCard-d2bbe76a.js";import"./validator-5a13dc82.js";import"./phoneVerify-72c7911a.js";const ce={key:0},me={class:"page-internet-product-detail"},ve={class:"info"},pe={class:"footer-button"},ye={class:"price"},fe=C(" 总保费"),he={key:0};var Ie=e(a({setup(e){const a=t(),Ie=n(),{productCode:Ne="BWYL2021",tenantId:ge,orderNo:we,phoneNo:be,agentCode:Ce="",saleChannelId:Te,paymentMethod:De,certNo:Oe,name:Fe,pageCode:ke,upgradeCode:He="",from:Pe}=Ie.query,Se=r(),$e=r(),xe=r(),Ve=r(),je="payBack"===ke,Le=r(!1),qe=r(!1),Ue=r(!1),Ae=r(0),Be=r(!1),Ee=r(!1),Me=r({show:!1,html:""}),_e=r(!1),Ke=r();let Re="";const Ye=o({holder:{certNo:Oe,certType:l.CERT,mobile:be,name:Fe,socialFlag:x.HAS},insured:{certNo:Oe,certType:l.CERT,name:Fe,socialFlag:x.HAS,relationToHolder:V.SELF},paymentMethod:De,renewalDK:"Y",paymentFrequency:j.MONTH}),ze=r(X),We=r(X),Je=o({showInsure:!je,canInsure:!1,canUpgrade:!1}),Ge=i((()=>{var e,a;return(null==(a=null==(e=$e.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"===e.attachmentName)))||[]})),Qe=i((()=>{var e,a,t,n,r,o,l,i;return[...(null==(a=null==(e=$e.value)?void 0:e.tenantProductInsureVO)?void 0:a.titleAndDescVOS)||[],{desc:`出生${J(null==(n=null==(t=$e.value)?void 0:t.tenantProductInsureVO)?void 0:n.holderAgeLimit)}`,title:"投保年龄",noDetail:!0},{desc:G(null==(o=null==(r=$e.value)?void 0:r.tenantProductInsureVO)?void 0:o.insurancePeriodValues),title:"保障期限",noDetail:!0},{desc:`${null==(i=null==(l=$e.value)?void 0:l.tenantProductInsureVO)?void 0:i.waitPeriod}天，上一张保单期满后指定期限内重新投保、因遭受意外伤害导致的医疗无等待期`,title:"等待期",noDetail:!0}]})),Xe=i((()=>{var e,a;return(null==(a=null==(e=$e.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName)))||[]})),Ze=()=>{if(Ye.holder.certNo){const e=k(Ye.holder.certNo);if(z(Ye.holder.certNo,18,"year"))return F("投保人年龄必须大于等于18岁！"),!1;if(Ye.insured.certNo&&Ye.insured.relationToHolder===V.MATE){if(e===k(Ye.insured.certNo))return F("被保人为配偶时，性别不可相同！"),!1}}if(Ye.insured.certNo){if(Ye.insured.relationToHolder===V.CHILD&&z(Ye.insured.certNo,30,"day"))return F("被保人为子女时，年龄必须大于等于30天！"),!1;if(Ye.insured.relationToHolder===V.PARENT&&!z(Ye.insured.certNo,71,"year"))return F("被保人为父母时，年龄必须小于等于70岁！"),!1}if([V.CHILD,V.PARENT].includes(Ye.insured.relationToHolder)){const e=W(Ye.holder.certNo,"year"),a=W(Ye.insured.certNo,"year");if(Ye.insured.relationToHolder===V.CHILD&&e-a<18)return F("投保人和子女年龄必须相差18岁！"),!1;if(Ye.insured.relationToHolder===V.PARENT&&a-e<18)return F("投保人和父母年龄必须相差18岁！"),!1}return!0},ea=()=>{a.push({path:"/internet/guaranteeUpgrade",query:{...Ie.query,tenantId:ge,productCode:"BWYL2022",orderNo:we,agentCode:Ce}})},aa=()=>{Ee.value=!1,a.replace(`/pay?orderNo=${we}&saleUserId=${Ce}&tenantId=${ge}`)},ta=()=>{We.value=ze.value},na=()=>{We.value={...We.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},ra=e=>{var a,t;const n=JSON.parse(null==(t=null==(a=xe.value)?void 0:a.productBasicInfoVO)?void 0:t.extInfo);let r="";if(1!==n.endorsementFlag||!n.endorsementCode)return`${P}/pay?orderNo=${e}&saleUserId=${Ce}&tenantId=${ge}`;r=`&upgradeCode=${n.endorsementCode}`;return`${P}/internet/productDetail?tenantId=${ge}&productCode=${Ne}&orderNo=${e}&agentCode=${Ce}&pageCode=payBack${r}&from=${Pe||"normal"}`},oa=async e=>{const a=K({tenantId:ge,saleUserId:Ce,saleChannelId:Te,detail:$e.value,insureDetail:xe.value,paymentMethod:Ye.paymentMethod,renewalDK:Ye.renewalDK,iseeBizNo:Re,successJumpUrl:"",premium:Ve.value,holder:Ye.holder,insured:Ye.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:"",orderNo:we,originOrderIds:Ke.value});try{const e=await q(a),{code:n,data:r}=e;"10000"===n&&(async e=>{F.loading({message:"核保中...",forbidClick:!0,duration:0});try{const a=await B(e),{code:t}=a;if("10000"===t){const a=await E({orderNo:e.orderNo,tenantId:ge}),{data:t}=a;"10000"===a.code&&(2===t.type?(Me.value={show:!0,html:t.paymentUrl},H((()=>{const e=document.getElementById("cashierSubmit");null==e||e.addEventListener("submit",(e=>{e.preventDefault()})),null==e||e.submit()}))):window.location.href=t.paymentUrl)}Je.canInsure=!0}catch(a){Je.canInsure=!0}finally{F.clear()}})({...a,orderNo:r.data,extInfo:{extraInfo:{renewalDK:Ye.renewalDK,paymentMethod:Ye.paymentMethod,paymentFrequency:Ye.paymentFrequency,successJumpUrl:ra(r.data),failUrl:(t=r.data,`${P}/internet/payFail?tenantId=${ge}&orderNo=${t}&agentCode=${Ce}&pageCode=payBack&from=${Pe||"normal"}`)},iseeBizNo:Re}})}catch(n){Je.canInsure=!0}var t},la=async()=>{var e;if(je)ea();else{Je.canInsure=!1;try{const{condition:a,data:t}=await new Promise(((e,a)=>{var t,n;null==(n=null==(t=Se.value)?void 0:t.validateForm)||n.call(t).then((async()=>{if(!Ze())return void a(new Error);const{calcData:t,riskVOList:n}=R({holder:Ye.holder,insured:Ye.insured,tenantId:ge,paymentFrequency:Ye.paymentFrequency,productDetail:$e.value,insureDetail:xe.value},!0),r=await U(t),{code:o,data:l}=r;"10000"===o?(Ve.value=l.premium,e({condition:n,data:l})):a(new Error)})).catch((e=>{Je.canInsure=!0,Y(e)}))})),n={},r=(e=[])=>{(e||[]).forEach((e=>{var a;n[e.riskCode]=e,(null==(a=e.riskPremiumDetailVOList)?void 0:a.length)&&r(e.riskPremiumDetailVOList)}))};r(t.riskPremiumDetailVOList);const o=_({tenantId:ge,riskList:a,riskPremium:n,productId:null==(e=$e.value)?void 0:e.id});oa(o)}catch(a){Je.canInsure=!0}}},ia=e=>{"allFalse"===e?(qe.value=!1,la(),Je.canInsure=!0):D.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()}))},da=()=>{Le.value=!0,Ue.value=!1,qe.value=!0};d([()=>Ye.insured.certNo,()=>Ye.insured.socialFlag],S((()=>{Ye.insured.certNo&&Ye.insured.socialFlag&&"payBack"!==ke&&(()=>{const{holder:{certNo:e,mobile:a,name:t,socialFlag:n},insured:{certNo:r,name:o,socialFlag:l,relationToHolder:i},paymentMethod:d}=Ye;return O(r)&&!!l})()&&(async()=>{if(Je.canInsure=!0,!Ze())return{};const{calcData:e,riskVOList:a}=R({holder:Ye.holder,insured:Ye.insured,tenantId:ge,paymentFrequency:Ye.paymentFrequency,productDetail:$e.value,insureDetail:xe.value},!0);if(!Array.isArray(a)||a.length<1)return F("被保人年龄需在30天(含) - 70岁(含)之间！"),Ve.value=null,{};_e.value=!0;const t=await U(e);_e.value=!1;const{code:n,data:r}=t;"10000"===n&&(Ye.insured.certNo?Ve.value=r.premium:Ve.value=null)})()}),500),{deep:!0,immediate:!0}),d((()=>Ye.insured.certNo),(()=>{Ye.insured.certNo||(Ve.value=null)}));const sa=async()=>{var e,a,t,n,r,o,l,i,d,s,u,c,m;const v=await A({orderNo:we,tenantId:ge}),{code:p,data:y}=v;if("10000"===p){const{id:v,tenantOrderHolder:p,tenantOrderInsuredList:f,extInfo:h}=y;if(!je)return Ke.value={id:v,holderId:null==p?void 0:p.id,insuredId:null==f?void 0:f[0].id},Object.assign(Ye,{holder:{certNo:p.certNo,certType:p.certType,mobile:p.mobile,name:p.name,socialFlag:x.HAS},insured:{certNo:null==f?void 0:f[0].certNo,certType:null==(e=f[0])?void 0:e.certType,name:null==(a=f[0])?void 0:a.name,socialFlag:null==(n=null==(t=f[0])?void 0:t.extInfo)?void 0:n.hasSocialInsurance,relationToHolder:null==(r=f[0])?void 0:r.relationToHolder},paymentMethod:h.extraInfo.paymentMethod,paymentFrequency:h.extraInfo.paymentFrequency,renewalDK:"Y"}),void(Je.canInsure=!0);Object.assign(Ye,{holder:{certNo:p.certNo,certType:p.certType,mobile:p.mobile,name:p.name,socialFlag:x.HAS},insured:{certNo:null==f?void 0:f[0].certNo,certType:null==(o=f[0])?void 0:o.certType,name:null==(l=f[0])?void 0:l.name,socialFlag:null==(d=null==(i=f[0])?void 0:i.extInfo)?void 0:d.hasSocialInsurance,relationToHolder:null==(s=f[0])?void 0:s.relationToHolder},paymentMethod:h.extraInfo.paymentMethod,paymentFrequency:h.extraInfo.paymentFrequency,renewalDK:h.extraInfo.renewalDK||"N"}),Ve.value=null==(m=null==(c=null==(u=f[0])?void 0:u.tenantOrderProductList)?void 0:c[0])?void 0:m.premium,y.orderStatus!==$.ACCEPT_POLICY&&y.orderStatus!==$.PAYMENT_SUCCESS||(Je.canUpgrade=!0,Be.value=!1,Ee.value=!0),y.orderStatus===$.PAYING&&(Be.value=!0,setTimeout((()=>{sa()}),3e3))}};return s((()=>{we?je&&He?(We.value=se,ze.value=se):He||(We.value={...de,paymentFrequencyDisable:!0},ze.value=de,Je.canInsure=!0):(We.value={...de,paymentFrequencyDisable:!0},ze.value=de,Je.canInsure=!0),(async()=>{var e;const a=await M({productCode:Ne,withInsureInfo:!0,tenantId:ge});"10000"===a.code&&($e.value=a.data,document.title=(null==(e=a.data)?void 0:e.productFullName)||"");const t=await L({productCode:Ne});"10000"===t.code&&(xe.value=t.data),we&&sa()})(),setTimeout((async()=>{Re=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=u("van-loading"),n=u("van-button"),r=u("van-config-provider"),o=c("dompurify-html");return m(),v(T,null,[p(r,{"theme-vars":g(Q)},{default:y((()=>{var e,a,r,l,i,d,s;return[Me.value.show?f((m(),v("div",ce,null,512)),[[o,Me.value.html]]):h("",!0),I("div",me,[I("div",ve,[p(Z,{url:null==(a=null==(e=$e.value)?void 0:e.tenantProductInsureVO)?void 0:a.banner[0]},null,8,["url"]),p(ee,{"product-name":null==(r=$e.value)?void 0:r.productFullName,"product-desc":null==(i=null==(l=$e.value)?void 0:l.showConfigVO)?void 0:i.desc},null,8,["product-name","product-desc"])]),(null==(s=null==(d=$e.value)?void 0:d.tenantProductInsureVO)?void 0:s.titleAndDescVOS)?(m(),N(ae,{key:0,"img-type":"BW","guarantee-list":g(Qe)},null,8,["guarantee-list"])):h("",!0),p(te,{detail:$e.value},{form:y((()=>[p(ne,{ref_key:"formRef",ref:Se,disable:!g(Je).showInsure,"form-auth":We.value,"form-info":g(Ye),premium:Ve.value,"product-detail":$e.value,payments:[1],"payment-method":[0],onOnReset:ta,onOnUpdate:na},null,8,["disable","form-auth","form-info","premium","product-detail"])])),_:1},8,["detail"]),I("div",pe,[I("div",ye,[fe,_e.value?(m(),N(t,{key:1,class:"premium-loading",type:"spinner"})):(m(),v("span",he,w(Ve.value?"￥":"")+w(g(b)(Ve.value))+w(Ve.value?"元/月":""),1))]),p(n,{type:"primary",class:"right",disabled:!(g(Je).canInsure||g(Je).canUpgrade),onClick:la},{default:y((()=>[C(w(g(Je).showInsure?"立即投保":"升级保障"),1)])),_:1},8,["disabled"])])]),g(we)?h("",!0):(m(),N(re,{key:1,"product-detail":$e.value},null,8,["product-detail"])),g(He)?(m(),N(oe,{key:2,"order-no":g(we),"tenant-id":g(ge),"upgrade-code":g(He),"is-show":Ee.value,onOnConfirm:ea,onOnClose:aa},null,8,["order-no","tenant-id","upgrade-code","is-show"])):h("",!0)]})),_:1},8,["theme-vars"]),p(le,{show:qe.value,"onUpdate:show":a[0]||(a[0]=e=>qe.value=e),"content-list":g(Ge),"active-index":0,onOnConfirmHealth:ia},null,8,["show","content-list"]),Ue.value?(m(),N(ue,{key:0,show:Ue.value,"onUpdate:show":a[1]||(a[1]=e=>Ue.value=e),"content-list":g(Xe),"active-index":Ae.value,text:"我已逐页阅读并确认告知内容",onSubmit:da},null,8,["show","content-list","active-index"])):h("",!0),p(ie,{"is-show":Be.value},null,8,["is-show"])],64)}}}),[["__scopeId","data-v-591e64c6"]]);export{Ie as default};
