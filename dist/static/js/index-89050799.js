import{_ as e,d as a,u as n,a as t,r,J as o,ah as l,E as s,an as i,G as d,aB as u,z as c,c as m,h as p,f as v,w as y,g as f,A as h,k as I,j as N,e as g,n as w,t as b,bB as C,a7 as T,F as O,aj as D,B as F,bT as k,aJ as j,T as P,aK as H,b6 as x,bG as S}from"./index-24ce1811.js";import{d as V}from"./debounce-2dbbea42.js";import{a as $}from"./order-5f899f74.js";import{S as L,R as B,P as A}from"./infoCollection-5b4092b6.js";import{i as U,s as q,p as E,g as M,u as _,a as K}from"./trial-d2429143.js";import{p as R}from"./product-c97e3eaa.js";import{t as Y,g as z,a as J,s as G,v as W,b as Q}from"./utils-b44427c1.js";import{f as X,a as Z}from"./utils-b77f2acb.js";import{t as ee}from"./theme-ea709837.js";import{d as ae,B as ne,D as te,G as re,S as oe,H as le,P as se,U as ie,_ as de,W as ue,a as ce,p as me}from"./auth-69c6776e.js";import{_ as pe}from"./close-7bdf4979.js";import"./pdfh5-008ca364.js";import"./isObjectLike-d00d103b.js";import"./trial-5866b571.js";import"./index-04e29538.js";import"./index-323d8ed4.js";import"./index-d1815d92.js";import"./index-843be0fd.js";import"./bankCard-a9395bd9.js";import"./validator-5a13dc82.js";import"./phoneVerify-0299c531.js";const ve={key:0},ye={class:"page-internet-product-detail"},fe={class:"info"},he={class:"footer-button"},Ie={class:"price"},Ne={key:0};var ge=e(a({__name:"index",setup(e){const a=n(),ge=t(),{productCode:we="BWYL2021",tenantId:be,orderNo:Ce,phoneNo:Te,agentCode:Oe="",saleChannelId:De,paymentMethod:Fe,certNo:ke,name:je,pageCode:Pe,upgradeCode:He="",from:xe}=ge.query,Se=r(),Ve=r(),$e=r(),Le=r(),Be="payBack"===Pe,Ae=r(!1),Ue=r(!1),qe=r(!1),Ee=r(0),Me=r(!1),_e=r(!1),Ke=r({show:!1,html:""}),Re=r(!1),Ye=r();let ze="";const Je=o({holder:{certNo:ke,certType:l.CERT,mobile:Te,name:je,socialFlag:L.HAS},insured:{certNo:ke,certType:l.CERT,name:je,socialFlag:L.HAS,relationToHolder:B.SELF},paymentMethod:Fe,renewalDK:"Y",paymentFrequency:A.MONTH}),Ge=r(ae),We=r(ae),Qe=o({showInsure:!Be,canInsure:!1,canUpgrade:!1}),Xe=s((()=>{var e,a;return(null==(a=null==(e=Ve.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"===e.attachmentName)))||[]})),Ze=s((()=>{var e,a,n,t,r,o,l,s;return[...(null==(a=null==(e=Ve.value)?void 0:e.tenantProductInsureVO)?void 0:a.titleAndDescVOS)||[],{desc:`出生${X(null==(t=null==(n=Ve.value)?void 0:n.tenantProductInsureVO)?void 0:t.holderAgeLimit)}`,title:"投保年龄",noDetail:!0},{desc:Z(null==(o=null==(r=Ve.value)?void 0:r.tenantProductInsureVO)?void 0:o.insurancePeriodValues),title:"保障期限",noDetail:!0},{desc:`${null==(s=null==(l=Ve.value)?void 0:l.tenantProductInsureVO)?void 0:s.waitPeriod}天，上一张保单期满后指定期限内重新投保、因遭受意外伤害导致的医疗无等待期`,title:"等待期",noDetail:!0}]})),ea=s((()=>{var e,a;return(null==(a=null==(e=Ve.value)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName)))||[]})),aa=()=>{if(Je.holder.certNo){const e=H(Je.holder.certNo);if(W(Je.holder.certNo,18,"year"))return P("投保人年龄必须大于等于18岁！"),!1;if(Je.insured.certNo&&Je.insured.relationToHolder===B.MATE){if(e===H(Je.insured.certNo))return P("被保人为配偶时，性别不可相同！"),!1}}if(Je.insured.certNo){if(Je.insured.relationToHolder===B.CHILD&&W(Je.insured.certNo,30,"day"))return P("被保人为子女时，年龄必须大于等于30天！"),!1;if(Je.insured.relationToHolder===B.PARENT&&!W(Je.insured.certNo,71,"year"))return P("被保人为父母时，年龄必须小于等于70岁！"),!1}if([B.CHILD,B.PARENT].includes(Je.insured.relationToHolder)){const e=Q(Je.holder.certNo,"year"),a=Q(Je.insured.certNo,"year");if(Je.insured.relationToHolder===B.CHILD&&e-a<18)return P("投保人和子女年龄必须相差18岁！"),!1;if(Je.insured.relationToHolder===B.PARENT&&a-e<18)return P("投保人和父母年龄必须相差18岁！"),!1}return!0},na=()=>{a.push({path:"/internet/guaranteeUpgrade",query:{...ge.query,tenantId:be,productCode:"BWYL2022",orderNo:Ce,agentCode:Oe}})},ta=()=>{_e.value=!1,a.replace(`/pay?orderNo=${Ce}&saleUserId=${Oe}&tenantId=${be}`)},ra=()=>{We.value=Ge.value},oa=()=>{We.value={...We.value,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1}},la=e=>{var a,n;const t=JSON.parse(null==(n=null==(a=$e.value)?void 0:a.productBasicInfoVO)?void 0:n.extInfo);let r="";if(1!==t.endorsementFlag||!t.endorsementCode)return`${S}/pay?orderNo=${e}&saleUserId=${Oe}&tenantId=${be}`;r=`&upgradeCode=${t.endorsementCode}`;return`${S}/internet/productDetail?tenantId=${be}&productCode=${we}&orderNo=${e}&agentCode=${Oe}&pageCode=payBack${r}&from=${xe||"normal"}`},sa=async e=>{const a=z({tenantId:be,saleUserId:Oe,saleChannelId:De,detail:Ve.value,insureDetail:$e.value,paymentMethod:Je.paymentMethod,renewalDK:Je.renewalDK,iseeBizNo:ze,successJumpUrl:"",premium:Le.value,holder:Je.holder,insured:Je.insured,tenantOrderRiskList:e,orderStatus:"",orderTopStatus:"",orderNo:Ce,originOrderIds:Ye.value});try{const e=await q(a),{code:t,data:r}=e;"10000"===t&&(async e=>{P.loading({message:"核保中...",forbidClick:!0,duration:0});try{const a=await _(e),{code:n}=a;if("10000"===n){const a=await K({orderNo:e.orderNo,tenantId:be}),{data:n}=a;"10000"===a.code&&(2===n.type?(Ke.value={show:!0,html:n.paymentUrl},x((()=>{const e=document.getElementById("cashierSubmit");null==e||e.addEventListener("submit",(e=>{e.preventDefault()})),null==e||e.submit()}))):window.location.href=n.paymentUrl)}Qe.canInsure=!0}catch(a){Qe.canInsure=!0}finally{P.clear()}})({...a,orderNo:r.data,extInfo:{extraInfo:{renewalDK:Je.renewalDK,paymentMethod:Je.paymentMethod,paymentFrequency:Je.paymentFrequency,successJumpUrl:la(r.data),failUrl:(n=r.data,`${S}/internet/payFail?tenantId=${be}&orderNo=${n}&agentCode=${Oe}&pageCode=payBack&from=${xe||"normal"}`)},iseeBizNo:ze}})}catch(t){Qe.canInsure=!0}var n},ia=async()=>{var e;if(Be)na();else{Qe.canInsure=!1;try{const{condition:a,data:n}=await new Promise(((e,a)=>{var n,t;null==(t=null==(n=Se.value)?void 0:n.validateForm)||t.call(n).then((async()=>{if(!aa())return void a(new Error);const{calcData:n,riskVOList:t}=J({holder:Je.holder,insured:Je.insured,tenantId:be,paymentFrequency:Je.paymentFrequency,productDetail:Ve.value,insureDetail:$e.value},!0),r=await E(n),{code:o,data:l}=r;"10000"===o?(Le.value=l.premium,e({condition:t,data:l})):a(new Error)})).catch((e=>{Qe.canInsure=!0,G(e)}))})),t={},r=(e=[])=>{(e||[]).forEach((e=>{var a;t[e.riskCode]=e,(null==(a=e.riskPremiumDetailVOList)?void 0:a.length)&&r(e.riskPremiumDetailVOList)}))};r(n.riskPremiumDetailVOList);const o=Y({tenantId:be,riskList:a,riskPremium:t,productId:null==(e=Ve.value)?void 0:e.id});sa(o)}catch(a){Qe.canInsure=!0}}},da=e=>{"allFalse"===e?(Ue.value=!1,ia(),Qe.canInsure=!0):D.confirm({message:"您当前的健康状况不符合该产品",confirmButtonText:"确定"}).then((()=>{window.history.back()}))},ua=()=>{Ae.value=!0,qe.value=!1,Ue.value=!0};i([()=>Je.insured.certNo,()=>Je.insured.socialFlag],V((()=>{Je.insured.certNo&&Je.insured.socialFlag&&"payBack"!==Pe&&(()=>{const{holder:{certNo:e,mobile:a,name:n,socialFlag:t},insured:{certNo:r,name:o,socialFlag:l,relationToHolder:s},paymentMethod:i}=Je;return j(r)&&!!l})()&&(async()=>{if(Qe.canInsure=!0,!aa())return{};const{calcData:e,riskVOList:a}=J({holder:Je.holder,insured:Je.insured,tenantId:be,paymentFrequency:Je.paymentFrequency,productDetail:Ve.value,insureDetail:$e.value},!0);if(!Array.isArray(a)||a.length<1)return P("被保人年龄需在30天(含) - 70岁(含)之间！"),Le.value=null,{};Re.value=!0;const n=await E(e);Re.value=!1;const{code:t,data:r}=n;"10000"===t&&(Je.insured.certNo?Le.value=r.premium:Le.value=null)})()}),500),{deep:!0,immediate:!0}),i((()=>Je.insured.certNo),(()=>{Je.insured.certNo||(Le.value=null)}));const ca=async()=>{var e,a,n,t,r,o,l,s,i,d,u,c,m;const p=await M({orderNo:Ce,tenantId:be}),{code:v,data:y}=p;if("10000"===v){const{id:p,tenantOrderHolder:v,tenantOrderInsuredList:f,extInfo:h}=y;if(!Be)return Ye.value={id:p,holderId:null==v?void 0:v.id,insuredId:null==f?void 0:f[0].id},Object.assign(Je,{holder:{certNo:v.certNo,certType:v.certType,mobile:v.mobile,name:v.name,socialFlag:L.HAS},insured:{certNo:null==f?void 0:f[0].certNo,certType:null==(e=f[0])?void 0:e.certType,name:null==(a=f[0])?void 0:a.name,socialFlag:null==(t=null==(n=f[0])?void 0:n.extInfo)?void 0:t.hasSocialInsurance,relationToHolder:null==(r=f[0])?void 0:r.relationToHolder},paymentMethod:h.extraInfo.paymentMethod,paymentFrequency:h.extraInfo.paymentFrequency,renewalDK:"Y"}),void(Qe.canInsure=!0);Object.assign(Je,{holder:{certNo:v.certNo,certType:v.certType,mobile:v.mobile,name:v.name,socialFlag:L.HAS},insured:{certNo:null==f?void 0:f[0].certNo,certType:null==(o=f[0])?void 0:o.certType,name:null==(l=f[0])?void 0:l.name,socialFlag:null==(i=null==(s=f[0])?void 0:s.extInfo)?void 0:i.hasSocialInsurance,relationToHolder:null==(d=f[0])?void 0:d.relationToHolder},paymentMethod:h.extraInfo.paymentMethod,paymentFrequency:h.extraInfo.paymentFrequency,renewalDK:h.extraInfo.renewalDK||"N"}),Le.value=null==(m=null==(c=null==(u=f[0])?void 0:u.tenantOrderProductList)?void 0:c[0])?void 0:m.premium,y.orderStatus!==$.ACCEPT_POLICY&&y.orderStatus!==$.PAYMENT_SUCCESS||(Qe.canUpgrade=!0,Me.value=!1,_e.value=!0),y.orderStatus===$.PAYING&&(Me.value=!0,setTimeout((()=>{ca()}),3e3))}};return d((()=>{Ce?Be&&He?(console.log("投保完成来升级保障的"),We.value=me,Ge.value=me,console.log("支付完成进入")):He||(console.log("投保链接-来付钱"),We.value={...ce,paymentFrequencyDisable:!0},Ge.value=ce,Qe.canInsure=!0):(console.log("投保链接"),We.value={...ce,paymentFrequencyDisable:!0},Ge.value=ce,Qe.canInsure=!0),(async()=>{var e;const a=await R({productCode:we,withInsureInfo:!0,tenantId:be});"10000"===a.code&&(Ve.value=a.data,document.title=(null==(e=a.data)?void 0:e.productFullName)||"");const n=await U({productCode:we});"10000"===n.code&&($e.value=n.data),Ce&&ca()})(),setTimeout((async()=>{ze=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const n=u,t=F,r=k,o=c("dompurify-html");return m(),p(O,null,[v(r,{"theme-vars":f(ee)},{default:y((()=>{var e,a,r,l,s,i,d;return[f(Ke).show?h((m(),p("div",ve,null,512)),[[o,f(Ke).html]]):I("",!0),N("div",ye,[N("div",fe,[v(ne,{url:null==(a=null==(e=f(Ve))?void 0:e.tenantProductInsureVO)?void 0:a.banner[0]},null,8,["url"]),v(te,{"product-name":null==(r=f(Ve))?void 0:r.productFullName,"product-desc":null==(s=null==(l=f(Ve))?void 0:l.showConfigVO)?void 0:s.desc},null,8,["product-name","product-desc"])]),(null==(d=null==(i=f(Ve))?void 0:i.tenantProductInsureVO)?void 0:d.titleAndDescVOS)?(m(),g(re,{key:0,"img-type":"BW","guarantee-list":f(Ze)},null,8,["guarantee-list"])):I("",!0),v(oe,{detail:f(Ve).tenantProductInsureVO},{form:y((()=>[v(le,{ref_key:"formRef",ref:Se,disable:!f(Qe).showInsure,"form-auth":f(We),"form-info":f(Je),premium:f(Le),"product-detail":f(Ve),payments:[1],"payment-method":[0],onOnReset:ra,onOnUpdate:oa},null,8,["disable","form-auth","form-info","premium","product-detail"])])),_:1},8,["detail"]),N("div",he,[N("div",Ie,[w(" 总保费"),f(Re)?(m(),g(n,{key:1,class:"premium-loading",type:"spinner"})):(m(),p("span",Ne,b(f(Le)?"￥":"")+b(f(C)(f(Le)))+b(f(Le)?"元/月":""),1))]),v(t,{type:"primary",class:"right",disabled:!(f(Qe).canInsure||f(Qe).canUpgrade),onClick:ia},{default:y((()=>[w(b(f(Qe).showInsure?"立即投保":"升级保障"),1)])),_:1},8,["disabled"])])]),f(Ce)?I("",!0):(m(),g(se,{key:1,"product-detail":f(Ve)},null,8,["product-detail"])),f(He)?(m(),g(ie,{key:2,"order-no":f(Ce),"tenant-id":f(be),"upgrade-code":f(He),"is-show":f(_e),onOnConfirm:na,onOnClose:ta},null,8,["order-no","tenant-id","upgrade-code","is-show"])):I("",!0)]})),_:1},8,["theme-vars"]),v(de,{show:f(Ue),"onUpdate:show":a[0]||(a[0]=e=>T(Ue)?Ue.value=e:null),"content-list":f(Xe),"active-index":0,onOnConfirmHealth:da},null,8,["show","content-list"]),f(qe)?(m(),g(pe,{key:0,show:f(qe),"onUpdate:show":a[1]||(a[1]=e=>T(qe)?qe.value=e:null),"content-list":f(ea),"active-index":f(Ee),text:"我已逐页阅读并确认告知内容",onSubmit:ua},null,8,["show","content-list","active-index"])):I("",!0),v(ue,{"is-show":f(Me)},null,8,["is-show"])],64)}}}),[["__scopeId","data-v-c3d2395a"]]);export{ge as default};
