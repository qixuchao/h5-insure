var te=Object.defineProperty,oe=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var T=(e,a,s)=>a in e?te(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,x=(e,a)=>{for(var s in a||(a={}))ne.call(a,s)&&T(e,s,a[s]);if(q)for(var s of q(a))re.call(a,s)&&T(e,s,a[s]);return e},U=(e,a)=>oe(e,se(a));import{g as k,j as E,n as G,z as o,J as A,A as f,t as le,a4 as ie,a5 as ce,a9 as ue,O as de,E as _,h as pe,r as b,k as me,m as J,p as v,T as S}from"./vendor-9d7eb2ed.js";import{S as _e}from"./infoCollection-b0426750.js";import{_ as B,a1 as ve}from"./index-bfa1eee6.js";import{c as fe}from"./close-df102554.js";import{a as he}from"./order-b675ac95.js";import{d as ge,i as Ie,a as De,s as Ce,e as ye,E as xe}from"./trial-bbc5c68a.js";import{t as Se}from"./theme-eeb93d73.js";import{n as Oe,i as we,m as $e,a as Ue,g as be,t as ke,d as Ee,b as H}from"./utils-f3c83850.js";import{p as Be}from"./product-4e4ef20d.js";import"./trial-986bd4d9.js";const Fe={class:"com-field-info"},Ne={class:"title"},Pe={class:"desc"},Re=k({props:{title:{type:String,default:""},desc:{type:String,default:""}},setup(e){return(a,s)=>(E(),G("div",Fe,[o("div",Ne,A(e.title),1),o("div",Pe,A(e.desc),1)]))}});var O=B(Re,[["__scopeId","data-v-74e2bdf6"]]);const K=e=>(ie("data-v-39527d44"),e=e(),ce(),e),Le={key:0,class:"pro-modal"},Ve=K(()=>o("div",{class:"pro-overlay"},null,-1)),Me={class:"pro-modal-wrapper"},qe=K(()=>o("div",{class:"pro-modal-content"},[o("p",null,"\u606D\u559C\u60A8"),o("p",null,"\u4FDD\u969C\u5347\u7EA7\u6210\u529F")],-1)),Te=["src"],Ae=k({props:{bg:{type:String,default:""},btn:{type:String,default:""},isShow:{type:Boolean,default:()=>{}}},emits:["on-confirm","on-close"],setup(e,{emit:a}){const s=e,p=()=>{a("on-close")};return(i,F)=>s.isShow?(E(),G("div",Le,[Ve,o("div",Me,[o("div",{class:"pro-modal-body"},[qe,o("div",{class:"pro-modal-btn",onClick:p},"\u6211\u77E5\u9053\u4E86")]),o("div",{class:"pro-modal-close",onClick:p},[o("img",{src:f(fe)},null,8,Te)])])])):le("",!0)}});var Je=B(Ae,[["__scopeId","data-v-39527d44"]]);const He={class:"page-activity-upgrade"},Ge=["src"],Ke={class:"container"},Ye={class:"main-form"},je=k({setup(e){const a=ue(),s=de(),{productCode:p="BWYL2022",tenantId:i,orderNo:F,agentCode:Y="",from:j}=s.query,m=_(),h=_(),t=_(),g=_(),w=_(),y=_(),$=_(!1),N=j==="check",z=()=>{$.value=!1},W=async()=>{var u,d,I,D,C;const n=be({tenantId:i,applicationNo:t.value.applicationNo,policyNo:t.value.policyNo,saleUserId:Y,saleChannelId:t.value.saleChannelId,orderStatus:he.UP_PROCESSING,orderTopStatus:"-1",orderCategory:2,detail:m.value,insureDetail:h.value,paymentMethod:(d=(u=t.value.extInfo)==null?void 0:u.extraInfo)==null?void 0:d.paymentMethod,renewalDK:(D=(I=t.value.extInfo)==null?void 0:I.extraInfo)==null?void 0:D.renewalDK,successJumpUrl:"",premium:g.value,holder:U(x({},t.value.tenantOrderHolder),{socialFlag:t.value.tenantOrderHolder.extInfo.hasSocialInsurance}),insured:U(x({},t.value.tenantOrderInsuredList[0]),{socialFlag:t.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance}),tenantOrderRiskList:ke({tenantId:i,riskList:Ee(h.value.productRiskVoList[0].riskDetailVOList,m.value),riskPremium:{},productId:(C=m.value)==null?void 0:C.id})}),r=await Ce(n),{code:c,data:l}=r;return c==="10000"?l.data:""},P=n=>`${ve}/chuangxin/baigebao/orderDetail?orderNo=${n}&productCode=${p}&tenantId=${i}`,Q=async()=>{try{const n=H({tenantId:i,premium:g.value,orderDetail:t.value,productDetail:m.value,insureDetail:h.value,successJumpUrl:""}),r=await ye(n),{code:c,data:l}=r;c==="10000"&&(g.value=l.installmentPremium,y.value=l.signUrl),S.clear()}catch(n){console.log(n)}},X=async n=>{const r=H({tenantId:i,premium:g.value,orderDetail:t.value,productDetail:m.value,insureDetail:h.value,successJumpUrl:P(n)}),c=await xe(x({orderNo:n},r)),{code:l,data:u}=c;l==="10000"&&(N?a.replace(`/chuangxin/baigebao/orderDetail?orderNo=${n}&productCode=${p}&tenantId=${i}`):$.value=!0)},Z=async n=>{try{S.loading({forbidClick:!0,message:"\u5347\u7EA7\u4E2D"});const r=await W(),c=await ge({tenantId:i,applicationNo:t.value.applicationNo});if(y.value){const l=encodeURIComponent(encodeURIComponent(P(r))),u=`${y.value}&successUrl=${l}`;N?window.location.href=u:window.location.href=y.value}else X(r)}catch(r){console.log(r),S.clear()}},ee=()=>{S.loading({forbidClick:!0,duration:20*1e3,message:"\u8BD5\u7B97\u4E2D"});const n=Be({productCode:p,withInsureInfo:!0,tenantId:i}),r=Ie({productCode:p}),c=De({orderNo:F,tenantId:i});Promise.all([n,r,c]).then(([l,u,d])=>{l.code==="10000"&&(m.value=l.data),u.code==="10000"&&(h.value=u.data),d.code==="10000"&&(t.value=d.data,w.value=d.data.tenantOrderInsuredList[0].extInfo.hasSocialInsurance),Q()})};return pe(()=>{ee()}),(n,r)=>{const c=b("ProRadioButton"),l=b("ProField"),u=b("van-config-provider");return E(),me(u,{"theme-vars":f(Se)},{default:J(()=>{var d,I,D,C,R,L,V,M;return[o("div",He,[o("img",{src:(I=(d=m.value)==null?void 0:d.tenantProductInsureVO)==null?void 0:I.banner[0],class:"banner"},null,8,Ge),o("div",Ke,[o("div",Ye,[v(O,{title:"\u59D3\u540D",desc:f(Oe)((C=(D=t.value)==null?void 0:D.tenantOrderInsuredList)==null?void 0:C[0].name)},null,8,["desc"]),v(O,{title:"\u8BC1\u4EF6\u53F7\u7801",desc:f(we)((L=(R=t.value)==null?void 0:R.tenantOrderInsuredList)==null?void 0:L[0].certNo)},null,8,["desc"]),v(O,{title:"\u624B\u673A\u53F7\u7801",desc:f($e)((M=(V=t.value)==null?void 0:V.tenantOrderHolder)==null?void 0:M.mobile)},null,8,["desc"]),v(O,{title:"\u6BCF\u6708\u4FDD\u8D39",desc:`${f(Ue)(g.value||0)}\u5143 / \u6BCF\u6708`},null,8,["desc"]),v(l,{label:"\u6709\u65E0\u793E\u4FDD",name:"name",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:J(()=>[v(c,{modelValue:w.value,"onUpdate:modelValue":r[0]||(r[0]=ae=>w.value=ae),disabled:!0,options:f(_e)},null,8,["modelValue","options"])]),_:1}),o("div",{class:"submit",onClick:Z})])]),v(Je,{"is-show":$.value,onOnClose:z},null,8,["is-show"])])]}),_:1},8,["theme-vars"])}}});var ra=B(je,[["__scopeId","data-v-914eaa42"]]);export{ra as default};
