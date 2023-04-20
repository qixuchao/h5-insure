import{E as e,d as a,a as t,u as n,r,x as o,C as l,K as i,Q as s,a0 as d,bh as u,ax as c,a8 as m,c as p,y as v,i as y,w as f,g as h,ab as I,h as N,f as g,e as w,j as b,z as C,ao as O,a1 as T,R as D,D as F,B as $,cb as j,T as k,t as x,Z as P,c1 as H}from"./index-14b87a0a.js";import{d as S}from"./debounce-eed12388.js";import{O as V}from"./order-5bfed80d.js";import{S as L,R as U,P as q}from"./infoCollection-8c829899.js";import{i as A,s as B,p as E,c as M,d as _,e as R}from"./trial-98bfde99.js";import{p as K}from"./product-92bb273c.js";import{t as Y,g as z,a as W,s as J,v as G,b as Q}from"./utils-838a71ae.js";import{t as Z}from"./theme-ea709837.js";import{d as X,B as ee,D as ae,G as te,S as ne,H as re,P as oe,U as le,_ as ie,W as se,a as de,p as ue}from"./auth-f8338cc8.js";import{_ as ce}from"./close-fa2b28f0.js";import"./pdfh5-008ca364.js";import"./isObjectLike-a9798079.js";import"./trial-f06d526c.js";import"./index-f97b0e56.js";import"./index-e40e8bd4.js";import"./index-33acebcf.js";/* empty css              */import"./bankCard-891767c7.js";import"./validator-5a13dc82.js";import"./phoneVerify-a8396891.js";import"./index-38a8fb4d.js";const me=e=>{const a=e.split("_");return"day"===a[0]?`满${a[1]}天`:`${a[1]}周岁`},pe=e=>{if(!e)return"";const a=e.split(",");return 1===a.length?me(a[0]):`${me(a[0])} ~ ${me(a[1])}`};const ve={key:0},ye={class:"page-internet-product-detail"},fe={class:"info"},he={class:"footer-button"},Ie={class:"price"},Ne={key:0};var ge=e(a({__name:"index",setup(e){const a=t(),me=n(),{productCode:ge="BWYL2021",tenantId:we,orderNo:be,phoneNo:Ce,agentCode:Oe="",saleChannelId:Te,paymentMethod:De,certNo:Fe,name:$e,pageCode:je,upgradeCode:ke="",from:xe}=me.query,Pe=r(),He=r(),Se=r(),Ve=r(),Le="payBack"===je,Ue=r(!1),qe=r(!1),Ae=r(!1),Be=r(0),Ee=r(!1),Me=r(!1),_e=r({show:!1,html:""}),Re=r(!1),Ke=r();let Ye="";const ze=o({holder:{certNo:Fe,certType:l.CERT,mobile:Ce,name:$e,socialFlag:L.HAS},insured:{certNo:Fe,certType:l.CERT,name:$e,socialFlag:L.HAS,relationToHolder:U.SELF},paymentMethod:De,renewalDK:"Y",paymentFrequency:q.MONTH}),We=r(X),Je=r(X),Ge=o({showInsure:!Le,canInsure:!1,canUpgrade:!1}),Qe=i((()=>{var e,a;return(null==(a=null==(e=He.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"===e.attachmentName)))||[]})),Ze=i((()=>{var e,a,t,n,r,o,l,i,s;return[...(null==(a=null==(e=He.value)?void 0:e.tenantProductInsureVO)?void 0:a.titleAndDescVOS)||[],{desc:`出生${pe(null==(n=null==(t=He.value)?void 0:t.tenantProductInsureVO)?void 0:n.holderAgeLimit)}`,title:"投保年龄",noDetail:!0},{desc:(s=null==(o=null==(r=He.value)?void 0:r.tenantProductInsureVO)?void 0:o.insurancePeriodValues,s?s.split(",").map((e=>(e=>{if(!e)return"";if("single"===e)return"趸缴";const a=e.split("_");return"year"===a[0]?`${a[1]}年`:"month"===a[0]?`${a[1]}月`:"to"===a[0]?"life"===a[1]?"保终身":`至${a[1]}岁`:""})(e))).join("/"):""),title:"保障期限",noDetail:!0},{desc:`${null==(i=null==(l=He.value)?void 0:l.tenantProductInsureVO)?void 0:i.waitPeriod}天，上一张保单期满后指定期限内重新投保、因遭受意外伤害导致的医疗无等待期`,title:"等待期",noDetail:!0}]})),Xe=i((()=>{var e,a;return(null==(a=null==(e=He.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName)))||[]})),ea=()=>{if(ze.holder.certNo){const e=x(ze.holder.certNo);if(G(ze.holder.certNo,18,"year"))return k("投保人年龄必须大于等于18岁！"),!1;if(ze.insured.certNo&&ze.insured.relationToHolder===U.MATE){if(e===x(ze.insured.certNo))return k("被保人为配偶时，性别不可相同！"),!1}}if(ze.insured.certNo){if(ze.insured.relationToHolder===U.CHILD&&G(ze.insured.certNo,30,"day"))return k("被保人为子女时，年龄必须大于等于30天！"),!1;if(ze.insured.relationToHolder===U.PARENT&&!G(ze.insured.certNo,71,"year"))return k("被保人为父母时，年龄必须小于等于70岁！"),!1}if([U.CHILD,U.PARENT].includes(ze.insured.relationToHolder)){const e=Q(ze.holder.certNo,"year"),a=Q(ze.insured.certNo,"year");if(ze.insured.relationToHolder===U.CHILD&&e-a<18)return k("投保人和子女年龄必须相差18岁！"),!1;if(ze.insured.relationToHolder===U.PARENT&&a-e<18)return k("投保人和父母年龄必须相差18岁！"),!1}return!0},aa=()=>{a.push({path:"/internet/guaranteeUpgrade",query:{...me.query,tenantId:we,productCode:"BWYL2022",orderNo:be,agentCode:Oe}})},ta=()=>{Me.value=!1,a.replace(`/pay?orderNo=${be}&saleUserId=${Oe}&tenantId=${we}`)},na=()=>{Je.value=We.value},ra=()=>{Je.value={...Je.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},oa=e=>{var a,t;const n=JSON.parse(null==(t=null==(a=Se.value)?void 0:a.productBasicInfoVO)?void 0:t.extInfo);let r="";if(1!==n.endorsementFlag||!n.endorsementCode)return`${H}/pay?orderNo=${e}&saleUserId=${Oe}&tenantId=${we}`;r=`&upgradeCode=${n.endorsementCode}`;return`${H}/internet/productDetail?tenantId=${we}&productCode=${ge}&orderNo=${e}&agentCode=${Oe}&pageCode=payBack${r}&from=${xe||"normal"}`},la=async e=>{const a=z({tenantId:we,saleUserId:Oe,saleChannelId:Te,detail:He.value,insureDetail:Se.value,paymentMethod:ze.paymentMethod,renewalDK:ze.renewalDK,iseeBizNo:Ye,successJumpUrl:"",premium:Ve.value,holder:ze.holder,insured:ze.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:"",orderNo:be,originOrderIds:Ke.value});try{const e=await B(a),{code:n,data:r}=e;"10000"===n&&(async e=>{k.loading({message:"核保中...",forbidClick:!0,duration:0});try{const a=await _(e),{code:t}=a;if("10000"===t){const a=await R({orderNo:e.orderNo,tenantId:we}),{data:t}=a;"10000"===a.code&&(2===t.type?(_e.value={show:!0,html:t.paymentUrl},P((()=>{const e=document.getElementById("cashierSubmit");null==e||e.addEventListener("submit",(e=>{e.preventDefault()})),null==e||e.submit()}))):window.location.href=t.paymentUrl)}Ge.canInsure=!0}catch(a){Ge.canInsure=!0}finally{k.clear()}})({...a,orderNo:r.data,extInfo:{extraInfo:{renewalDK:ze.renewalDK,paymentMethod:ze.paymentMethod,paymentFrequency:ze.paymentFrequency,successJumpUrl:oa(r.data),failUrl:(t=r.data,`${H}/internet/payFail?tenantId=${we}&orderNo=${t}&agentCode=${Oe}&pageCode=payBack&from=${xe||"normal"}`)},iseeBizNo:Ye}})}catch(n){Ge.canInsure=!0}var t},ia=async()=>{var e;if(Le)aa();else{Ge.canInsure=!1;try{const{condition:a,data:t}=await new Promise(((e,a)=>{var t,n;null==(n=null==(t=Pe.value)?void 0:t.validateForm)||n.call(t).then((async()=>{if(!ea())return void a(new Error);const{calcData:t,riskVOList:n}=W({holder:ze.holder,insured:ze.insured,tenantId:we,paymentFrequency:ze.paymentFrequency,productDetail:He.value,insureDetail:Se.value},!0),r=await E(t),{code:o,data:l}=r;"10000"===o?(Ve.value=l.premium,e({condition:n,data:l})):a(new Error)})).catch((e=>{Ge.canInsure=!0,J(e)}))})),n={},r=(e=[])=>{(e||[]).forEach((e=>{var a;n[e.riskCode]=e,(null==(a=e.riskPremiumDetailVOList)?void 0:a.length)&&r(e.riskPremiumDetailVOList)}))};r(t.riskPremiumDetailVOList);const o=Y({tenantId:we,riskList:a,riskPremium:n,productId:null==(e=He.value)?void 0:e.id});la(o)}catch(a){Ge.canInsure=!0}}},sa=e=>{"allFalse"===e?(qe.value=!1,ia(),Ge.canInsure=!0):F.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()}))},da=()=>{Ue.value=!0,Ae.value=!1,qe.value=!0};s([()=>ze.insured.certNo,()=>ze.insured.socialFlag],S((()=>{ze.insured.certNo&&ze.insured.socialFlag&&"payBack"!==je&&(()=>{const{holder:{certNo:e,mobile:a,name:t,socialFlag:n},insured:{certNo:r,name:o,socialFlag:l,relationToHolder:i},paymentMethod:s}=ze;return j(r)&&!!l})()&&(async()=>{if(Ge.canInsure=!0,!ea())return{};const{calcData:e,riskVOList:a}=W({holder:ze.holder,insured:ze.insured,tenantId:we,paymentFrequency:ze.paymentFrequency,productDetail:He.value,insureDetail:Se.value},!0);if(!Array.isArray(a)||a.length<1)return k("被保人年龄需在30天(含) - 70岁(含)之间！"),Ve.value=null,{};Re.value=!0;const t=await E(e);Re.value=!1;const{code:n,data:r}=t;"10000"===n&&(ze.insured.certNo?Ve.value=r.premium:Ve.value=null)})()}),500),{deep:!0,immediate:!0}),s((()=>ze.insured.certNo),(()=>{ze.insured.certNo||(Ve.value=null)}));const ua=async()=>{var e,a,t,n,r,o,l,i,s,d,u,c,m;const p=await M({orderNo:be,tenantId:we}),{code:v,data:y}=p;if("10000"===v){const{id:p,tenantOrderHolder:v,tenantOrderInsuredList:f,extInfo:h}=y;if(!Le)return Ke.value={id:p,holderId:null==v?void 0:v.id,insuredId:null==f?void 0:f[0].id},Object.assign(ze,{holder:{certNo:v.certNo,certType:v.certType,mobile:v.mobile,name:v.name,socialFlag:L.HAS},insured:{certNo:null==f?void 0:f[0].certNo,certType:null==(e=f[0])?void 0:e.certType,name:null==(a=f[0])?void 0:a.name,socialFlag:null==(n=null==(t=f[0])?void 0:t.extInfo)?void 0:n.hasSocialInsurance,relationToHolder:null==(r=f[0])?void 0:r.relationToHolder},paymentMethod:h.extraInfo.paymentMethod,paymentFrequency:h.extraInfo.paymentFrequency,renewalDK:"Y"}),void(Ge.canInsure=!0);Object.assign(ze,{holder:{certNo:v.certNo,certType:v.certType,mobile:v.mobile,name:v.name,socialFlag:L.HAS},insured:{certNo:null==f?void 0:f[0].certNo,certType:null==(o=f[0])?void 0:o.certType,name:null==(l=f[0])?void 0:l.name,socialFlag:null==(s=null==(i=f[0])?void 0:i.extInfo)?void 0:s.hasSocialInsurance,relationToHolder:null==(d=f[0])?void 0:d.relationToHolder},paymentMethod:h.extraInfo.paymentMethod,paymentFrequency:h.extraInfo.paymentFrequency,renewalDK:h.extraInfo.renewalDK||"N"}),Ve.value=null==(m=null==(c=null==(u=f[0])?void 0:u.tenantOrderProductList)?void 0:c[0])?void 0:m.premium,y.orderStatus!==V.ACCEPT_POLICY&&y.orderStatus!==V.PAYMENT_SUCCESS||(Ge.canUpgrade=!0,Ee.value=!1,Me.value=!0),y.orderStatus===V.PAYING&&(Ee.value=!0,setTimeout((()=>{ua()}),3e3))}};return d((()=>{be?Le&&ke?(console.log("投保完成来升级保障的"),Je.value=ue,We.value=ue,console.log("支付完成进入")):ke||(console.log("投保链接-来付钱"),Je.value={...de,paymentFrequencyDisable:!0},We.value=de,Ge.canInsure=!0):(console.log("投保链接"),Je.value={...de,paymentFrequencyDisable:!0},We.value=de,Ge.canInsure=!0),(async()=>{var e;const a=await K({productCode:ge,withInsureInfo:!0,tenantId:we});"10000"===a.code&&(He.value=a.data,document.title=(null==(e=a.data)?void 0:e.productFullName)||"");const t=await A({productCode:ge});"10000"===t.code&&(Se.value=t.data),be&&ua()})(),setTimeout((async()=>{Ye=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=u,n=$,r=c,o=m("dompurify-html");return p(),v(D,null,[y(r,{"theme-vars":h(Z)},{default:f((()=>{var e,a,r,l,i,s,d;return[h(_e).show?I((p(),v("div",ve,null,512)),[[o,h(_e).html]]):N("",!0),g("div",ye,[g("div",fe,[y(ee,{url:null==(a=null==(e=h(He))?void 0:e.tenantProductInsureVO)?void 0:a.banner[0]},null,8,["url"]),y(ae,{"product-name":null==(r=h(He))?void 0:r.productFullName,"product-desc":null==(i=null==(l=h(He))?void 0:l.showConfigVO)?void 0:i.desc},null,8,["product-name","product-desc"])]),(null==(d=null==(s=h(He))?void 0:s.tenantProductInsureVO)?void 0:d.titleAndDescVOS)?(p(),w(te,{key:0,"img-type":"BW","guarantee-list":h(Ze)},null,8,["guarantee-list"])):N("",!0),y(ne,{detail:h(He).tenantProductInsureVO},{form:f((()=>[y(re,{ref_key:"formRef",ref:Pe,disable:!h(Ge).showInsure,"form-auth":h(Je),"form-info":h(ze),premium:h(Ve),"product-detail":h(He),payments:[1],"payment-method":[0],onOnReset:na,onOnUpdate:ra},null,8,["disable","form-auth","form-info","premium","product-detail"])])),_:1},8,["detail"]),g("div",he,[g("div",Ie,[b(" 总保费"),h(Re)?(p(),w(t,{key:1,class:"premium-loading",type:"spinner"})):(p(),v("span",Ne,C(h(Ve)?"￥":"")+C(h(O)(h(Ve)))+C(h(Ve)?"元/月":""),1))]),y(n,{type:"primary",class:"right",disabled:!(h(Ge).canInsure||h(Ge).canUpgrade),onClick:ia},{default:f((()=>[b(C(h(Ge).showInsure?"立即投保":"升级保障"),1)])),_:1},8,["disabled"])])]),h(be)?N("",!0):(p(),w(oe,{key:1,"product-detail":h(He)},null,8,["product-detail"])),h(ke)?(p(),w(le,{key:2,"order-no":h(be),"tenant-id":h(we),"upgrade-code":h(ke),"is-show":h(Me),onOnConfirm:aa,onOnClose:ta},null,8,["order-no","tenant-id","upgrade-code","is-show"])):N("",!0)]})),_:1},8,["theme-vars"]),y(ie,{show:h(qe),"onUpdate:show":a[0]||(a[0]=e=>T(qe)?qe.value=e:null),"content-list":h(Qe),"active-index":0,onOnConfirmHealth:sa},null,8,["show","content-list"]),h(Ae)?(p(),w(ce,{key:0,show:h(Ae),"onUpdate:show":a[1]||(a[1]=e=>T(Ae)?Ae.value=e:null),"content-list":h(Xe),"active-index":h(Be),text:"我已逐页阅读并确认告知内容",onSubmit:da},null,8,["show","content-list","active-index"])):N("",!0),y(se,{"is-show":h(Ee)},null,8,["is-show"])],64)}}}),[["__scopeId","data-v-c3d2395a"]]);export{ge as default};
