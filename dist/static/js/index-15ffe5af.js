var te=Object.defineProperty,oe=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var M=(e,a,o)=>a in e?te(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,y=(e,a)=>{for(var o in a||(a={}))ne.call(a,o)&&M(e,o,a[o]);if(A)for(var o of A(a))re.call(a,o)&&M(e,o,a[o]);return e},U=(e,a)=>oe(e,se(a));import{g as k,j as E,n as K,z as t,J,A as O,t as le,a4 as ce,a5 as ue,a9 as ie,O as de,E as _,h as pe,r as b,k as me,m as H,p as v,T as S}from"./vendor-06835924.js";import{S as _e}from"./infoCollection-b0426750.js";import{_ as B,a1 as ve}from"./index-49c1347e.js";import{c as fe}from"./close-df102554.js";import{a as he}from"./order-b675ac95.js";import{i as ge,a as Ie,s as De,e as Ce,E as ye}from"./trial-73abb527.js";import{t as Se}from"./theme-eeb93d73.js";import{a as xe,g as Oe,t as we,d as $e,b as G}from"./utils-c5fdde14.js";import{p as Ue}from"./product-477c6ffe.js";import"./trial-8ea60a9b.js";const be={class:"com-field-info"},ke={class:"title"},Ee={class:"desc"},Be=k({props:{title:{type:String,default:""},desc:{type:String,default:""}},setup(e){return(a,o)=>(E(),K("div",be,[t("div",ke,J(e.title),1),t("div",Ee,J(e.desc),1)]))}});var x=B(Be,[["__scopeId","data-v-74e2bdf6"]]);const Y=e=>(ce("data-v-39527d44"),e=e(),ue(),e),Fe={key:0,class:"pro-modal"},Ne=Y(()=>t("div",{class:"pro-overlay"},null,-1)),Pe={class:"pro-modal-wrapper"},Re=Y(()=>t("div",{class:"pro-modal-content"},[t("p",null,"\u606D\u559C\u60A8"),t("p",null,"\u4FDD\u969C\u5347\u7EA7\u6210\u529F")],-1)),Le=["src"],Ve=k({props:{bg:{type:String,default:""},btn:{type:String,default:""},isShow:{type:Boolean,default:()=>{}}},emits:["on-confirm","on-close"],setup(e,{emit:a}){const o=e,p=()=>{a("on-close")};return(u,F)=>o.isShow?(E(),K("div",Fe,[Ne,t("div",Pe,[t("div",{class:"pro-modal-body"},[Re,t("div",{class:"pro-modal-btn",onClick:p},"\u6211\u77E5\u9053\u4E86")]),t("div",{class:"pro-modal-close",onClick:p},[t("img",{src:O(fe)},null,8,Le)])])])):le("",!0)}});var qe=B(Ve,[["__scopeId","data-v-39527d44"]]);const Te={class:"page-activity-upgrade"},Ae=["src"],Me={class:"container"},Je={class:"main-form"},He=k({setup(e){const a=ie(),o=de(),{productCode:p="BWYL2022",tenantId:u,orderNo:F,agentCode:j="",from:z}=o.query,m=_(),f=_(),s=_(),h=_(),w=_(),C=_(),$=_(!1),N=z==="check",W=()=>{$.value=!1},Q=async()=>{var d,i,g,I,D;const n=Oe({tenantId:u,applicationNo:s.value.applicationNo,policyNo:s.value.policyNo,saleUserId:j,saleChannelId:s.value.saleChannelId,orderStatus:he.UP_PROCESSING,orderTopStatus:"-1",orderCategory:2,detail:m.value,insureDetail:f.value,paymentMethod:(i=(d=s.value.extInfo)==null?void 0:d.extraInfo)==null?void 0:i.paymentMethod,renewalDK:(I=(g=s.value.extInfo)==null?void 0:g.extraInfo)==null?void 0:I.renewalDK,successJumpUrl:"",premium:h.value,holder:U(y({},s.value.tenantOrderHolder),{socialFlag:s.value.tenantOrderHolder.extInfo.hasSocialInsurance}),insured:U(y({},s.value.tenantOrderInsuredList[0]),{socialFlag:s.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance}),tenantOrderRiskList:we({tenantId:u,riskList:$e(f.value.productRiskVoList[0].riskDetailVOList,m.value),riskPremium:{},productId:(D=m.value)==null?void 0:D.id})}),r=await De(n),{code:c,data:l}=r;return c==="10000"?l.data:""},P=n=>`${ve}/chuangxin/baigebao/orderDetail?orderNo=${n}&productCode=${p}&tenantId=${u}`,R=async()=>{try{const n=G({tenantId:u,premium:h.value,orderDetail:s.value,productDetail:m.value,insureDetail:f.value,successJumpUrl:""}),r=await Ce(n),{code:c,data:l}=r;c==="10000"&&(h.value=l.installmentPremium,C.value=l.signUrl),S.clear()}catch(n){console.log(n)}},X=async n=>{const r=G({tenantId:u,premium:h.value,orderDetail:s.value,productDetail:m.value,insureDetail:f.value,successJumpUrl:P(n)}),c=await ye(y({orderNo:n},r)),{code:l,data:d}=c;l==="10000"&&(N?a.replace(`/chuangxin/baigebao/orderDetail?orderNo=${n}&productCode=${p}&tenantId=${u}`):$.value=!0)},Z=async n=>{try{S.loading({forbidClick:!0,message:"\u5347\u7EA7\u4E2D"}),await R();const r=await Q();if(C.value){const c=encodeURIComponent(encodeURIComponent(P(r))),l=`${C.value}&successUrl=${c}`;N?window.location.href=l:window.location.href=C.value}else X(r)}catch(r){console.log(r),S.clear()}},ee=()=>{S.loading({forbidClick:!0,duration:20*1e3,message:"\u8BD5\u7B97\u4E2D"});const n=Ue({productCode:p,withInsureInfo:!0,tenantId:u}),r=ge({productCode:p}),c=Ie({orderNo:F,tenantId:u});Promise.all([n,r,c]).then(([l,d,i])=>{l.code==="10000"&&(m.value=l.data),d.code==="10000"&&(f.value=d.data),i.code==="10000"&&(s.value=i.data,w.value=i.data.tenantOrderInsuredList[0].extInfo.hasSocialInsurance),R()})};return pe(()=>{ee()}),(n,r)=>{const c=b("ProRadioButton"),l=b("ProField"),d=b("van-config-provider");return E(),me(d,{"theme-vars":O(Se)},{default:H(()=>{var i,g,I,D,L,V,q,T;return[t("div",Te,[t("img",{src:(g=(i=m.value)==null?void 0:i.tenantProductInsureVO)==null?void 0:g.banner[0],class:"banner"},null,8,Ae),t("div",Me,[t("div",Je,[v(x,{title:"\u59D3\u540D",desc:(D=(I=s.value)==null?void 0:I.tenantOrderInsuredList)==null?void 0:D[0].name},null,8,["desc"]),v(x,{title:"\u8BC1\u4EF6\u53F7\u7801",desc:(V=(L=s.value)==null?void 0:L.tenantOrderInsuredList)==null?void 0:V[0].certNo},null,8,["desc"]),v(x,{title:"\u624B\u673A\u53F7\u7801",desc:(T=(q=s.value)==null?void 0:q.tenantOrderHolder)==null?void 0:T.mobile},null,8,["desc"]),v(x,{title:"\u6BCF\u6708\u4FDD\u8D39",desc:`${O(xe)(h.value||0)}\u5143 / \u6BCF\u6708`},null,8,["desc"]),v(l,{label:"\u6709\u65E0\u793E\u4FDD",name:"name",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:H(()=>[v(c,{modelValue:w.value,"onUpdate:modelValue":r[0]||(r[0]=ae=>w.value=ae),disabled:!0,options:O(_e)},null,8,["modelValue","options"])]),_:1}),t("div",{class:"submit",onClick:Z})])]),v(qe,{"is-show":$.value,onOnClose:W},null,8,["is-show"])])]}),_:1},8,["theme-vars"])}}});var ta=B(He,[["__scopeId","data-v-23619377"]]);export{ta as default};
