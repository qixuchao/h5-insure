var ce=Object.defineProperty,de=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var W=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,x=(e,t)=>{for(var o in t||(t={}))me.call(t,o)&&W(e,o,t[o]);if(Y)for(var o of Y(t))ve.call(t,o)&&W(e,o,t[o]);return e},k=(e,t)=>de(e,pe(t));import{g as b,j as R,n as ee,z as l,J as Q,A as f,t as _e,a4 as fe,a5 as Ie,a9 as he,O as ge,E as d,h as De,r as P,k as Ce,m as X,p as _,T as I}from"./vendor-c3c577f2.js";import{j as we}from"./infoCollection-9259d69e.js";import{_ as L,a1 as ye}from"./index-2ffcb916.js";import{c as Ue}from"./close-df102554.js";import{_ as xe}from"./index-df6bde03.js";import{a as $e}from"./order-26db6dbf.js";import{d as Oe,i as Se,g as Be,s as Ee,e as Ne,E as Fe}from"./trial-24bcea63.js";import{t as ke}from"./theme-ea709837.js";import{n as Pe,i as be,m as Re,d as Le,b as Ve,t as qe,j as Ae,e as Z,f as Me}from"./utils-463a7bf4.js";import{p as Te}from"./product-ea737108.js";import"./utils-b6782348.js";import"./trial-a5225f92.js";const ze={class:"com-field-info"},He={class:"title"},Je={class:"desc"},je=b({props:{title:{type:String,default:""},desc:{type:String,default:""}},setup(e){return(t,o)=>(R(),ee("div",ze,[l("div",He,Q(e.title),1),l("div",Je,Q(e.desc),1)]))}});var $=L(je,[["__scopeId","data-v-2ff3e068"]]);const te=e=>(fe("data-v-ed9081ee"),e=e(),Ie(),e),Ge={key:0,class:"pro-modal"},Ke=te(()=>l("div",{class:"pro-overlay"},null,-1)),Ye={class:"pro-modal-wrapper"},We=te(()=>l("div",{class:"pro-modal-content"},[l("p",null,"\u606D\u559C\u60A8"),l("p",null,"\u4FDD\u969C\u5347\u7EA7\u6210\u529F")],-1)),Qe=["src"],Xe=b({props:{bg:{type:String,default:""},btn:{type:String,default:""},isShow:{type:Boolean,default:()=>{}}},emits:["on-confirm","on-close"],setup(e,{emit:t}){const o=e,h=()=>{t("on-close")},i=()=>{t("on-confirm")};return(V,y)=>o.isShow?(R(),ee("div",Ge,[Ke,l("div",Ye,[l("div",{class:"pro-modal-body"},[We,l("div",{class:"pro-modal-btn",onClick:i},"\u6211\u77E5\u9053\u4E86")]),l("div",{class:"pro-modal-close",onClick:h},[l("img",{src:f(Ue)},null,8,Qe)])])])):_e("",!0)}});var Ze=L(Xe,[["__scopeId","data-v-ed9081ee"]]);const et={class:"page-activity-upgrade"},tt=["src"],at={class:"container"},ot={class:"main-form"},st=b({setup(e){const t=he(),o=ge(),{productCode:h="BWYL2022",tenantId:i,orderNo:V,agentCode:y="",from:ae}=o.query;console.log("upload--route.query",o.query);const m=d(),g=d(),s=d(),D=d(),O=d(),U=d(),q=d(!1),S=ae==="check",B=d(!1),oe=d(0),E=d("");let N="";const se=()=>{q.value=!1},ne=async()=>{var u,p,v,C,w;const n=Ve({tenantId:i,applicationNo:s.value.applicationNo,policyNo:s.value.policyNo,saleUserId:y,saleChannelId:s.value.saleChannelId,orderStatus:$e.UP_PROCESSING,orderTopStatus:"-1",orderCategory:2,detail:m.value,insureDetail:g.value,paymentMethod:(p=(u=s.value.extInfo)==null?void 0:u.extraInfo)==null?void 0:p.paymentMethod,renewalDK:(C=(v=s.value.extInfo)==null?void 0:v.extraInfo)==null?void 0:C.renewalDK,iseeBizNo:N,successJumpUrl:"",premium:D.value,holder:k(x({},s.value.tenantOrderHolder),{socialFlag:s.value.tenantOrderHolder.extInfo.hasSocialInsurance}),insured:k(x({},s.value.tenantOrderInsuredList[0]),{socialFlag:s.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance}),tenantOrderRiskList:qe({tenantId:i,riskList:Ae(g.value.productRiskVoList[0].riskDetailVOList,m.value),riskPremium:{},productId:(w=m.value)==null?void 0:w.id})}),a=await Ee(n),{code:c,data:r}=a;return c==="10000"?r.data:""},A=n=>`${ye}/pay?orderNo=${n}&saleUserId=${y}&tenantId=${i}`,M=()=>{t.replace(`/pay?orderNo=${E.value}&saleUserId=${y}&tenantId=${i}`)},re=async()=>{try{const n=Z({tenantId:i,premium:D.value,orderDetail:s.value,productDetail:m.value,insureDetail:g.value,successJumpUrl:""},Me),a=await Ne(n),{code:c,data:r}=a;c==="10000"&&(D.value=r.installmentPremium,U.value=r.signUrl),I.clear()}catch(n){console.log(n)}},le=async n=>{const a=Z({tenantId:i,premium:D.value,orderDetail:s.value,productDetail:m.value,insureDetail:g.value,successJumpUrl:A(n),iseeBizNo:N}),c=await Fe(x({orderNo:n},a)),{code:r,data:u}=c;r==="10000"&&(S?t.replace(`/internet/orderDetail?orderNo=${n}&productCode=${h}&tenantId=${i}`):(I.clear(),M()))},T=async n=>{try{I.loading({forbidClick:!0,message:"\u5347\u7EA7\u4E2D",duration:15*1e3});const a=await ne(),c=await Oe({tenantId:i,applicationNo:s.value.applicationNo});if(E.value=a,console.log(E.value,"orderNoUp.value===",a),U.value){if(S){const r=encodeURIComponent(encodeURIComponent(A(a))),u=`${U.value}&successUrl=${r}`;window.location.href=u}else{const r=encodeURIComponent(encodeURIComponent(window.location.href)),u=`${U.value}&failUrl=${r}`;window.location.href=u}I.clear()}else le(a)}catch(a){console.log(a),I.clear()}},ie=async n=>{S?B.value=!0:T()},ue=()=>{I.loading({forbidClick:!0,duration:20*1e3,message:"\u8BD5\u7B97\u4E2D"});const n=Te({productCode:h,withInsureInfo:!0,tenantId:i}),a=Se({productCode:h}),c=Be({orderNo:V,tenantId:i});Promise.all([n,a,c]).then(([r,u,p])=>{var v;r.code==="10000"&&(m.value=r.data,document.title=((v=r.data)==null?void 0:v.productFullName)||""),u.code==="10000"&&(g.value=u.data),p.code==="10000"&&(s.value=p.data,O.value=p.data.tenantOrderInsuredList[0].extInfo.hasSocialInsurance),re()})};return De(()=>{ue(),setTimeout(async()=>{N=window.getIseeBiz&&await window.getIseeBiz()},1500)}),(n,a)=>{const c=P("ProRadioButton"),r=P("ProField"),u=P("van-config-provider");return R(),Ce(u,{"theme-vars":f(ke)},{default:X(()=>{var p,v,C,w,z,H,J,j,G,K;return[l("div",et,[l("img",{src:(v=(p=m.value)==null?void 0:p.tenantProductInsureVO)==null?void 0:v.banner[0],class:"banner"},null,8,tt),l("div",at,[l("div",ot,[_($,{title:"\u59D3\u540D",desc:f(Pe)((w=(C=s.value)==null?void 0:C.tenantOrderInsuredList)==null?void 0:w[0].name)},null,8,["desc"]),_($,{title:"\u8BC1\u4EF6\u53F7\u7801",desc:f(be)((H=(z=s.value)==null?void 0:z.tenantOrderInsuredList)==null?void 0:H[0].certNo)},null,8,["desc"]),_($,{title:"\u624B\u673A\u53F7\u7801",desc:f(Re)((j=(J=s.value)==null?void 0:J.tenantOrderHolder)==null?void 0:j.mobile)},null,8,["desc"]),_($,{title:"\u6BCF\u6708\u4FDD\u8D39",desc:`${f(Le)(D.value||0)}\u5143 / \u6BCF\u6708`},null,8,["desc"]),_(r,{label:"\u6709\u65E0\u793E\u4FDD",name:"name",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:X(()=>[_(c,{modelValue:O.value,"onUpdate:modelValue":a[0]||(a[0]=F=>O.value=F),disabled:!0,options:f(we)},null,8,["modelValue","options"])]),_:1}),l("div",{class:"submit",onClick:ie})])]),_(Ze,{"is-show":q.value,onOnConfirm:M,onOnClose:se},null,8,["is-show"])]),_(xe,{show:B.value,"onUpdate:show":a[1]||(a[1]=F=>B.value=F),"content-list":(K=(G=m.value)==null?void 0:G.tenantProductInsureVO)==null?void 0:K.attachmentVOList,"active-index":oe.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9",onSubmit:T},null,8,["show","content-list","active-index"])]}),_:1},8,["theme-vars"])}}});var ht=L(st,[["__scopeId","data-v-e36a1112"]]);export{ht as default};
