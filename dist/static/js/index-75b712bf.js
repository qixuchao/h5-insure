var ie=Object.defineProperty,ue=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var K=(e,t,l)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,x=(e,t)=>{for(var l in t||(t={}))de.call(t,l)&&K(e,l,t[l]);if(G)for(var l of G(t))pe.call(t,l)&&K(e,l,t[l]);return e},b=(e,t)=>ue(e,ce(t));import{g as N,j as P,n as Q,z as r,J as Y,A as h,t as me,a4 as ve,a5 as _e,a9 as fe,O as he,E as p,h as ge,r as k,k as Ie,m as j,p as _,T as g}from"./vendor-17026bfd.js";import{S as De}from"./infoCollection-b0426750.js";import{_ as R,a1 as Ce}from"./index-c5fb60b7.js";import{c as we,n as ye,i as xe,m as Se,g as Oe,_ as Ue,d as Be,t as $e,e as Ee,a as W}from"./index-4440b908.js";import{a as Fe}from"./order-c0ced472.js";import{d as be,i as ke,g as Ne,s as Pe,e as Re,E as Le}from"./trial-0d09a766.js";import{t as Ve}from"./theme-ea709837.js";import{p as Ae}from"./product-c030293e.js";import"./trial-c9873a4e.js";import"./utils-b6782348.js";const Me={class:"com-field-info"},Te={class:"title"},qe={class:"desc"},ze=N({props:{title:{type:String,default:""},desc:{type:String,default:""}},setup(e){return(t,l)=>(P(),Q("div",Me,[r("div",Te,Y(e.title),1),r("div",qe,Y(e.desc),1)]))}});var S=R(ze,[["__scopeId","data-v-2ff3e068"]]);const X=e=>(ve("data-v-767490c1"),e=e(),_e(),e),Je={key:0,class:"pro-modal"},He=X(()=>r("div",{class:"pro-overlay"},null,-1)),Ge={class:"pro-modal-wrapper"},Ke=X(()=>r("div",{class:"pro-modal-content"},[r("p",null,"\u606D\u559C\u60A8"),r("p",null,"\u4FDD\u969C\u5347\u7EA7\u6210\u529F")],-1)),Ye=["src"],je=N({props:{bg:{type:String,default:""},btn:{type:String,default:""},isShow:{type:Boolean,default:()=>{}}},emits:["on-confirm","on-close"],setup(e,{emit:t}){const l=e,f=()=>{t("on-close")};return(u,L)=>l.isShow?(P(),Q("div",Je,[He,r("div",Ge,[r("div",{class:"pro-modal-body"},[Ke,r("div",{class:"pro-modal-btn",onClick:f},"\u6211\u77E5\u9053\u4E86")]),r("div",{class:"pro-modal-close",onClick:f},[r("img",{src:h(we)},null,8,Ye)])])])):me("",!0)}});var We=R(je,[["__scopeId","data-v-767490c1"]]);const Qe={class:"page-activity-upgrade"},Xe=["src"],Ze={class:"container"},et={class:"main-form"},tt=N({setup(e){const t=fe(),l=he(),{productCode:f="BWYL2022",tenantId:u,orderNo:L,agentCode:Z="",from:ee}=l.query,m=p(),I=p(),o=p(),D=p(),O=p(),y=p(),U=p(!1),B=ee==="check",$=p(!1),te=p(0);let E="";const ae=()=>{U.value=!1},oe=async()=>{var i,d,v,C,w;const s=Be({tenantId:u,applicationNo:o.value.applicationNo,policyNo:o.value.policyNo,saleUserId:Z,saleChannelId:o.value.saleChannelId,orderStatus:Fe.UP_PROCESSING,orderTopStatus:"-1",orderCategory:2,detail:m.value,insureDetail:I.value,paymentMethod:(d=(i=o.value.extInfo)==null?void 0:i.extraInfo)==null?void 0:d.paymentMethod,renewalDK:(C=(v=o.value.extInfo)==null?void 0:v.extraInfo)==null?void 0:C.renewalDK,iseeBizNo:E,successJumpUrl:"",premium:D.value,holder:b(x({},o.value.tenantOrderHolder),{socialFlag:o.value.tenantOrderHolder.extInfo.hasSocialInsurance}),insured:b(x({},o.value.tenantOrderInsuredList[0]),{socialFlag:o.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance}),tenantOrderRiskList:$e({tenantId:u,riskList:Ee(I.value.productRiskVoList[0].riskDetailVOList,m.value),riskPremium:{},productId:(w=m.value)==null?void 0:w.id})}),a=await Pe(s),{code:c,data:n}=a;return c==="10000"?n.data:""},V=s=>`${Ce}/chuangxin/baigebao/orderDetail?orderNo=${s}&productCode=${f}&tenantId=${u}`,se=async()=>{try{const s=W({tenantId:u,premium:D.value,orderDetail:o.value,productDetail:m.value,insureDetail:I.value,successJumpUrl:""}),a=await Re(s),{code:c,data:n}=a;c==="10000"&&(D.value=n.installmentPremium,y.value=n.signUrl),g.clear()}catch(s){console.log(s)}},ne=async s=>{const a=W({tenantId:u,premium:D.value,orderDetail:o.value,productDetail:m.value,insureDetail:I.value,successJumpUrl:V(s),iseeBizNo:E}),c=await Le(x({orderNo:s},a)),{code:n,data:i}=c;n==="10000"&&(B?t.replace(`/chuangxin/baigebao/orderDetail?orderNo=${s}&productCode=${f}&tenantId=${u}`):(g.clear(),U.value=!0))},A=async s=>{try{g.loading({forbidClick:!0,message:"\u5347\u7EA7\u4E2D",duration:15*1e3});const a=await oe(),c=await be({tenantId:u,applicationNo:o.value.applicationNo});if(y.value){if(B){const n=encodeURIComponent(encodeURIComponent(V(a))),i=`${y.value}&successUrl=${n}`;window.location.href=i}else{const n=encodeURIComponent(encodeURIComponent(window.location.href)),i=`${y.value}&failUrl=${n}`;window.location.href=i}g.clear()}else ne(a)}catch(a){console.log(a),g.clear()}},re=async s=>{B?$.value=!0:A()},le=()=>{g.loading({forbidClick:!0,duration:20*1e3,message:"\u8BD5\u7B97\u4E2D"});const s=Ae({productCode:f,withInsureInfo:!0,tenantId:u}),a=ke({productCode:f}),c=Ne({orderNo:L,tenantId:u});Promise.all([s,a,c]).then(([n,i,d])=>{var v;n.code==="10000"&&(m.value=n.data,document.title=((v=n.data)==null?void 0:v.productFullName)||""),i.code==="10000"&&(I.value=i.data),d.code==="10000"&&(o.value=d.data,O.value=d.data.tenantOrderInsuredList[0].extInfo.hasSocialInsurance),se()})};return ge(()=>{le(),setTimeout(async()=>{E=window.getIseeBiz&&await window.getIseeBiz()},1500)}),(s,a)=>{const c=k("ProRadioButton"),n=k("ProField"),i=k("van-config-provider");return P(),Ie(i,{"theme-vars":h(Ve)},{default:j(()=>{var d,v,C,w,M,T,q,z,J,H;return[r("div",Qe,[r("img",{src:(v=(d=m.value)==null?void 0:d.tenantProductInsureVO)==null?void 0:v.banner[0],class:"banner"},null,8,Xe),r("div",Ze,[r("div",et,[_(S,{title:"\u59D3\u540D",desc:h(ye)((w=(C=o.value)==null?void 0:C.tenantOrderInsuredList)==null?void 0:w[0].name)},null,8,["desc"]),_(S,{title:"\u8BC1\u4EF6\u53F7\u7801",desc:h(xe)((T=(M=o.value)==null?void 0:M.tenantOrderInsuredList)==null?void 0:T[0].certNo)},null,8,["desc"]),_(S,{title:"\u624B\u673A\u53F7\u7801",desc:h(Se)((z=(q=o.value)==null?void 0:q.tenantOrderHolder)==null?void 0:z.mobile)},null,8,["desc"]),_(S,{title:"\u6BCF\u6708\u4FDD\u8D39",desc:`${h(Oe)(D.value||0)}\u5143 / \u6BCF\u6708`},null,8,["desc"]),_(n,{label:"\u6709\u65E0\u793E\u4FDD",name:"name",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:j(()=>[_(c,{modelValue:O.value,"onUpdate:modelValue":a[0]||(a[0]=F=>O.value=F),disabled:!0,options:h(De)},null,8,["modelValue","options"])]),_:1}),r("div",{class:"submit",onClick:re})])]),_(We,{"is-show":U.value,onOnClose:ae},null,8,["is-show"])]),_(Ue,{show:$.value,"onUpdate:show":a[1]||(a[1]=F=>$.value=F),"content-list":(H=(J=m.value)==null?void 0:J.tenantProductInsureVO)==null?void 0:H.attachmentVOList,"active-index":te.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9",onSubmit:A},null,8,["show","content-list","active-index"])]}),_:1},8,["theme-vars"])}}});var mt=R(tt,[["__scopeId","data-v-49f37832"]]);export{mt as default};
