import{_ as e,d as a,u as t,a as n,r,J as o,ag as l,E as s,am as i,G as d,aA as u,z as c,c as m,g as v,f as p,w as y,A as f,j as h,i as I,e as N,m as g,t as w,bB as b,n as C,F as T,ai as O,B as D,bT as F,aI as j,T as k,aJ as P,b2 as H,bI as S}from"./index-9effc651.js";import{d as x}from"./debounce-910624d9.js";import{a as V}from"./order-de7c6bbe.js";import{S as $,R as L,P as A}from"./infoCollection-d7c085e7.js";import{i as B,s as U,p as q,g as E,u as M,a as _}from"./trial-190aded3.js";import{p as R}from"./product-2ff0d785.js";import{t as K,g as Y,a as z,s as J,v as W,b as G}from"./utils-5145af97.js";import{f as Q,a as X}from"./utils-b77f2acb.js";import{t as Z}from"./theme-ea709837.js";import{d as ee,B as ae,D as te,G as ne,S as re,H as oe,P as le,U as se,_ as ie,W as de,a as ue,p as ce}from"./auth-0a106278.js";import{_ as me}from"./close-30dd1e4c.js";import"./pdfh5-008ca364.js";import"./isObject-cd478a85.js";import"./isObjectLike-f858f31d.js";import"./trial-c6e14b52.js";import"./index-0398240f.js";import"./index-1bfdf8ca.js";import"./index-60cc44b5.js";import"./index-605b31ce.js";import"./bankCard-0619f499.js";import"./validator-5a13dc82.js";import"./phoneVerify-6401d697.js";const ve={key:0},pe={class:"page-internet-product-detail"},ye={class:"info"},fe={class:"footer-button"},he={class:"price"},Ie=C(" 总保费"),Ne={key:0};var ge=e(a({setup(e){const a=t(),ge=n(),{productCode:we="BWYL2021",tenantId:be,orderNo:Ce,phoneNo:Te,agentCode:Oe="",saleChannelId:De,paymentMethod:Fe,certNo:je,name:ke,pageCode:Pe,upgradeCode:He="",from:Se}=ge.query,xe=r(),Ve=r(),$e=r(),Le=r(),Ae="payBack"===Pe,Be=r(!1),Ue=r(!1),qe=r(!1),Ee=r(0),Me=r(!1),_e=r(!1),Re=r({show:!1,html:""}),Ke=r(!1),Ye=r();let ze="";const Je=o({holder:{certNo:je,certType:l.CERT,mobile:Te,name:ke,socialFlag:$.HAS},insured:{certNo:je,certType:l.CERT,name:ke,socialFlag:$.HAS,relationToHolder:L.SELF},paymentMethod:Fe,renewalDK:"Y",paymentFrequency:A.MONTH}),We=r(ee),Ge=r(ee),Qe=o({showInsure:!Ae,canInsure:!1,canUpgrade:!1}),Xe=s((()=>{var e,a;return(null==(a=null==(e=Ve.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"===e.attachmentName)))||[]})),Ze=s((()=>{var e,a,t,n,r,o,l,s;return[...(null==(a=null==(e=Ve.value)?void 0:e.tenantProductInsureVO)?void 0:a.titleAndDescVOS)||[],{desc:`出生${Q(null==(n=null==(t=Ve.value)?void 0:t.tenantProductInsureVO)?void 0:n.holderAgeLimit)}`,title:"投保年龄",noDetail:!0},{desc:X(null==(o=null==(r=Ve.value)?void 0:r.tenantProductInsureVO)?void 0:o.insurancePeriodValues),title:"保障期限",noDetail:!0},{desc:`${null==(s=null==(l=Ve.value)?void 0:l.tenantProductInsureVO)?void 0:s.waitPeriod}天，上一张保单期满后指定期限内重新投保、因遭受意外伤害导致的医疗无等待期`,title:"等待期",noDetail:!0}]})),ea=s((()=>{var e,a;return(null==(a=null==(e=Ve.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName)))||[]})),aa=()=>{if(Je.holder.certNo){const e=P(Je.holder.certNo);if(W(Je.holder.certNo,18,"year"))return k("投保人年龄必须大于等于18岁！"),!1;if(Je.insured.certNo&&Je.insured.relationToHolder===L.MATE){if(e===P(Je.insured.certNo))return k("被保人为配偶时，性别不可相同！"),!1}}if(Je.insured.certNo){if(Je.insured.relationToHolder===L.CHILD&&W(Je.insured.certNo,30,"day"))return k("被保人为子女时，年龄必须大于等于30天！"),!1;if(Je.insured.relationToHolder===L.PARENT&&!W(Je.insured.certNo,71,"year"))return k("被保人为父母时，年龄必须小于等于70岁！"),!1}if([L.CHILD,L.PARENT].includes(Je.insured.relationToHolder)){const e=G(Je.holder.certNo,"year"),a=G(Je.insured.certNo,"year");if(Je.insured.relationToHolder===L.CHILD&&e-a<18)return k("投保人和子女年龄必须相差18岁！"),!1;if(Je.insured.relationToHolder===L.PARENT&&a-e<18)return k("投保人和父母年龄必须相差18岁！"),!1}return!0},ta=()=>{a.push({path:"/internet/guaranteeUpgrade",query:{...ge.query,tenantId:be,productCode:"BWYL2022",orderNo:Ce,agentCode:Oe}})},na=()=>{_e.value=!1,a.replace(`/pay?orderNo=${Ce}&saleUserId=${Oe}&tenantId=${be}`)},ra=()=>{Ge.value=We.value},oa=()=>{Ge.value={...Ge.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},la=e=>{var a,t;const n=JSON.parse(null==(t=null==(a=$e.value)?void 0:a.productBasicInfoVO)?void 0:t.extInfo);let r="";if(1!==n.endorsementFlag||!n.endorsementCode)return`${S}/pay?orderNo=${e}&saleUserId=${Oe}&tenantId=${be}`;r=`&upgradeCode=${n.endorsementCode}`;return`${S}/internet/productDetail?tenantId=${be}&productCode=${we}&orderNo=${e}&agentCode=${Oe}&pageCode=payBack${r}&from=${Se||"normal"}`},sa=async e=>{const a=Y({tenantId:be,saleUserId:Oe,saleChannelId:De,detail:Ve.value,insureDetail:$e.value,paymentMethod:Je.paymentMethod,renewalDK:Je.renewalDK,iseeBizNo:ze,successJumpUrl:"",premium:Le.value,holder:Je.holder,insured:Je.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:"",orderNo:Ce,originOrderIds:Ye.value});try{const e=await U(a),{code:n,data:r}=e;"10000"===n&&(async e=>{k.loading({message:"核保中...",forbidClick:!0,duration:0});try{const a=await M(e),{code:t}=a;if("10000"===t){const a=await _({orderNo:e.orderNo,tenantId:be}),{data:t}=a;"10000"===a.code&&(2===t.type?(Re.value={show:!0,html:t.paymentUrl},H((()=>{const e=document.getElementById("cashierSubmit");null==e||e.addEventListener("submit",(e=>{e.preventDefault()})),null==e||e.submit()}))):window.location.href=t.paymentUrl)}Qe.canInsure=!0}catch(a){Qe.canInsure=!0}finally{k.clear()}})({...a,orderNo:r.data,extInfo:{extraInfo:{renewalDK:Je.renewalDK,paymentMethod:Je.paymentMethod,paymentFrequency:Je.paymentFrequency,successJumpUrl:la(r.data),failUrl:(t=r.data,`${S}/internet/payFail?tenantId=${be}&orderNo=${t}&agentCode=${Oe}&pageCode=payBack&from=${Se||"normal"}`)},iseeBizNo:ze}})}catch(n){Qe.canInsure=!0}var t},ia=async()=>{var e;if(Ae)ta();else{Qe.canInsure=!1;try{const{condition:a,data:t}=await new Promise(((e,a)=>{var t,n;null==(n=null==(t=xe.value)?void 0:t.validateForm)||n.call(t).then((async()=>{if(!aa())return void a(new Error);const{calcData:t,riskVOList:n}=z({holder:Je.holder,insured:Je.insured,tenantId:be,paymentFrequency:Je.paymentFrequency,productDetail:Ve.value,insureDetail:$e.value},!0),r=await q(t),{code:o,data:l}=r;"10000"===o?(Le.value=l.premium,e({condition:n,data:l})):a(new Error)})).catch((e=>{Qe.canInsure=!0,J(e)}))})),n={},r=(e=[])=>{(e||[]).forEach((e=>{var a;n[e.riskCode]=e,(null==(a=e.riskPremiumDetailVOList)?void 0:a.length)&&r(e.riskPremiumDetailVOList)}))};r(t.riskPremiumDetailVOList);const o=K({tenantId:be,riskList:a,riskPremium:n,productId:null==(e=Ve.value)?void 0:e.id});sa(o)}catch(a){Qe.canInsure=!0}}},da=e=>{"allFalse"===e?(Ue.value=!1,ia(),Qe.canInsure=!0):O.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()}))},ua=()=>{Be.value=!0,qe.value=!1,Ue.value=!0};i([()=>Je.insured.certNo,()=>Je.insured.socialFlag],x((()=>{Je.insured.certNo&&Je.insured.socialFlag&&"payBack"!==Pe&&(()=>{const{holder:{certNo:e,mobile:a,name:t,socialFlag:n},insured:{certNo:r,name:o,socialFlag:l,relationToHolder:s},paymentMethod:i}=Je;return j(r)&&!!l})()&&(async()=>{if(Qe.canInsure=!0,!aa())return{};const{calcData:e,riskVOList:a}=z({holder:Je.holder,insured:Je.insured,tenantId:be,paymentFrequency:Je.paymentFrequency,productDetail:Ve.value,insureDetail:$e.value},!0);if(!Array.isArray(a)||a.length<1)return k("被保人年龄需在30天(含) - 70岁(含)之间！"),Le.value=null,{};Ke.value=!0;const t=await q(e);Ke.value=!1;const{code:n,data:r}=t;"10000"===n&&(Je.insured.certNo?Le.value=r.premium:Le.value=null)})()}),500),{deep:!0,immediate:!0}),i((()=>Je.insured.certNo),(()=>{Je.insured.certNo||(Le.value=null)}));const ca=async()=>{var e,a,t,n,r,o,l,s,i,d,u,c,m;const v=await E({orderNo:Ce,tenantId:be}),{code:p,data:y}=v;if("10000"===p){const{id:v,tenantOrderHolder:p,tenantOrderInsuredList:f,extInfo:h}=y;if(!Ae)return Ye.value={id:v,holderId:null==p?void 0:p.id,insuredId:null==f?void 0:f[0].id},Object.assign(Je,{holder:{certNo:p.certNo,certType:p.certType,mobile:p.mobile,name:p.name,socialFlag:$.HAS},insured:{certNo:null==f?void 0:f[0].certNo,certType:null==(e=f[0])?void 0:e.certType,name:null==(a=f[0])?void 0:a.name,socialFlag:null==(n=null==(t=f[0])?void 0:t.extInfo)?void 0:n.hasSocialInsurance,relationToHolder:null==(r=f[0])?void 0:r.relationToHolder},paymentMethod:h.extraInfo.paymentMethod,paymentFrequency:h.extraInfo.paymentFrequency,renewalDK:"Y"}),void(Qe.canInsure=!0);Object.assign(Je,{holder:{certNo:p.certNo,certType:p.certType,mobile:p.mobile,name:p.name,socialFlag:$.HAS},insured:{certNo:null==f?void 0:f[0].certNo,certType:null==(o=f[0])?void 0:o.certType,name:null==(l=f[0])?void 0:l.name,socialFlag:null==(i=null==(s=f[0])?void 0:s.extInfo)?void 0:i.hasSocialInsurance,relationToHolder:null==(d=f[0])?void 0:d.relationToHolder},paymentMethod:h.extraInfo.paymentMethod,paymentFrequency:h.extraInfo.paymentFrequency,renewalDK:h.extraInfo.renewalDK||"N"}),Le.value=null==(m=null==(c=null==(u=f[0])?void 0:u.tenantOrderProductList)?void 0:c[0])?void 0:m.premium,y.orderStatus!==V.ACCEPT_POLICY&&y.orderStatus!==V.PAYMENT_SUCCESS||(Qe.canUpgrade=!0,Me.value=!1,_e.value=!0),y.orderStatus===V.PAYING&&(Me.value=!0,setTimeout((()=>{ca()}),3e3))}};return d((()=>{Ce?Ae&&He?(console.log("投保完成来升级保障的"),Ge.value=ce,We.value=ce,console.log("支付完成进入")):He||(console.log("投保链接-来付钱"),Ge.value={...ue,paymentFrequencyDisable:!0},We.value=ue,Qe.canInsure=!0):(console.log("投保链接"),Ge.value={...ue,paymentFrequencyDisable:!0},We.value=ue,Qe.canInsure=!0),(async()=>{var e;const a=await R({productCode:we,withInsureInfo:!0,tenantId:be});"10000"===a.code&&(Ve.value=a.data,document.title=(null==(e=a.data)?void 0:e.productFullName)||"");const t=await B({productCode:we});"10000"===t.code&&($e.value=t.data),Ce&&ca()})(),setTimeout((async()=>{ze=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=u,n=D,r=F,o=c("dompurify-html");return m(),v(T,null,[p(r,{"theme-vars":g(Z)},{default:y((()=>{var e,a,r,l,s,i,d;return[Re.value.show?f((m(),v("div",ve,null,512)),[[o,Re.value.html]]):h("",!0),I("div",pe,[I("div",ye,[p(ae,{url:null==(a=null==(e=Ve.value)?void 0:e.tenantProductInsureVO)?void 0:a.banner[0]},null,8,["url"]),p(te,{"product-name":null==(r=Ve.value)?void 0:r.productFullName,"product-desc":null==(s=null==(l=Ve.value)?void 0:l.showConfigVO)?void 0:s.desc},null,8,["product-name","product-desc"])]),(null==(d=null==(i=Ve.value)?void 0:i.tenantProductInsureVO)?void 0:d.titleAndDescVOS)?(m(),N(ne,{key:0,"img-type":"BW","guarantee-list":g(Ze)},null,8,["guarantee-list"])):h("",!0),p(re,{detail:Ve.value.tenantProductInsureVO},{form:y((()=>[p(oe,{ref_key:"formRef",ref:xe,disable:!g(Qe).showInsure,"form-auth":Ge.value,"form-info":g(Je),premium:Le.value,"product-detail":Ve.value,payments:[1],"payment-method":[0],onOnReset:ra,onOnUpdate:oa},null,8,["disable","form-auth","form-info","premium","product-detail"])])),_:1},8,["detail"]),I("div",fe,[I("div",he,[Ie,Ke.value?(m(),N(t,{key:1,class:"premium-loading",type:"spinner"})):(m(),v("span",Ne,w(Le.value?"￥":"")+w(g(b)(Le.value))+w(Le.value?"元/月":""),1))]),p(n,{type:"primary",class:"right",disabled:!(g(Qe).canInsure||g(Qe).canUpgrade),onClick:ia},{default:y((()=>[C(w(g(Qe).showInsure?"立即投保":"升级保障"),1)])),_:1},8,["disabled"])])]),g(Ce)?h("",!0):(m(),N(le,{key:1,"product-detail":Ve.value},null,8,["product-detail"])),g(He)?(m(),N(se,{key:2,"order-no":g(Ce),"tenant-id":g(be),"upgrade-code":g(He),"is-show":_e.value,onOnConfirm:ta,onOnClose:na},null,8,["order-no","tenant-id","upgrade-code","is-show"])):h("",!0)]})),_:1},8,["theme-vars"]),p(ie,{show:Ue.value,"onUpdate:show":a[0]||(a[0]=e=>Ue.value=e),"content-list":g(Xe),"active-index":0,onOnConfirmHealth:da},null,8,["show","content-list"]),qe.value?(m(),N(me,{key:0,show:qe.value,"onUpdate:show":a[1]||(a[1]=e=>qe.value=e),"content-list":g(ea),"active-index":Ee.value,text:"我已逐页阅读并确认告知内容",onSubmit:ua},null,8,["show","content-list","active-index"])):h("",!0),p(de,{"is-show":Me.value},null,8,["is-show"])],64)}}}),[["__scopeId","data-v-c3d2395a"]]);export{ge as default};
