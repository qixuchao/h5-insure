import{h as k,k as P,p as W,A as s,L as J,B as v,v as re,a5 as le,a6 as ie,aa as ue,P as ce,G as i,j as de,r as F,m as pe,n as K,s as m,T as f}from"./vendor-4d9de129.js";import{j as me}from"./infoCollection-7811d22e.js";import{_ as b,a4 as ve}from"./index-6cd418a3.js";import{c as _e}from"./close-df102554.js";import{_ as fe}from"./index-67dfd3cf.js";import{a as Ie}from"./order-33544381.js";import{d as he,i as ge,g as De,s as Ce,e as we,E as ye}from"./trial-36a523c5.js";import{t as Ue}from"./theme-3c294048.js";import{n as xe,i as $e,m as Se,e as Be,a as Oe,t as Ne,j as Ee,f as Y,h as Fe}from"./utils-81ec737c.js";import{p as ke}from"./product-c8da332a.js";import"./trial-42e9c7ea.js";const Pe={class:"com-field-info"},be={class:"title"},Re={class:"desc"},Le=k({props:{title:{type:String,default:""},desc:{type:String,default:""}},setup(u){return(_,I)=>(P(),W("div",Pe,[s("div",be,J(u.title),1),s("div",Re,J(u.desc),1)]))}});var x=b(Le,[["__scopeId","data-v-26c796cf"]]);const Q=u=>(le("data-v-fa9670a0"),u=u(),ie(),u),Ve={key:0,class:"pro-modal"},qe=Q(()=>s("div",{class:"pro-overlay"},null,-1)),Ae={class:"pro-modal-wrapper"},Me=Q(()=>s("div",{class:"pro-modal-content"},[s("p",null,"\u606D\u559C\u60A8"),s("p",null,"\u4FDD\u969C\u5347\u7EA7\u6210\u529F")],-1)),Te=["src"],He=k({props:{bg:{type:String,default:""},btn:{type:String,default:""},isShow:{type:Boolean,default:()=>{}}},emits:["on-confirm","on-close"],setup(u,{emit:_}){const I=u,h=()=>{_("on-close")},n=()=>{_("on-confirm")};return(R,y)=>I.isShow?(P(),W("div",Ve,[qe,s("div",Ae,[s("div",{class:"pro-modal-body"},[Me,s("div",{class:"pro-modal-btn",onClick:n},"\u6211\u77E5\u9053\u4E86")]),s("div",{class:"pro-modal-close",onClick:h},[s("img",{src:v(_e)},null,8,Te)])])])):re("",!0)}});var je=b(He,[["__scopeId","data-v-fa9670a0"]]);const ze={class:"page-activity-upgrade"},Ge=["src"],Je={class:"container"},Ke={class:"main-form"},Ye=k({setup(u){const _=ue(),I=ce(),{productCode:h="BWYL2022",tenantId:n,orderNo:R,agentCode:y="",from:X}=I.query;console.log("upload--route.query",I.query);const d=i(),g=i(),a=i(),D=i(),$=i(),U=i(),L=i(!1),S=X==="check",B=i(!1),Z=i(0),O=i("");let N="";const ee=()=>{L.value=!1},ae=async()=>{var r,c,p,C,w;const t=Oe({tenantId:n,applicationNo:a.value.applicationNo,policyNo:a.value.policyNo,saleUserId:y,saleChannelId:a.value.saleChannelId,orderStatus:Ie.UP_PROCESSING,orderTopStatus:"-1",orderCategory:2,detail:d.value,insureDetail:g.value,paymentMethod:(c=(r=a.value.extInfo)==null?void 0:r.extraInfo)==null?void 0:c.paymentMethod,renewalDK:(C=(p=a.value.extInfo)==null?void 0:p.extraInfo)==null?void 0:C.renewalDK,iseeBizNo:N,successJumpUrl:"",premium:D.value,holder:{...a.value.tenantOrderHolder,socialFlag:a.value.tenantOrderHolder.extInfo.hasSocialInsurance},insured:{...a.value.tenantOrderInsuredList[0],socialFlag:a.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance},tenantOrderRiskList:Ne({tenantId:n,riskList:Ee(g.value.productRiskVoList[0].riskDetailVOList,d.value),riskPremium:{},productId:(w=d.value)==null?void 0:w.id})}),e=await Ce(t),{code:l,data:o}=e;return l==="10000"?o.data:""},V=t=>`${ve}/pay?orderNo=${t}&saleUserId=${y}&tenantId=${n}`,q=()=>{_.replace(`/pay?orderNo=${O.value}&saleUserId=${y}&tenantId=${n}`)},te=async()=>{try{const t=Y({tenantId:n,premium:D.value,orderDetail:a.value,productDetail:d.value,insureDetail:g.value,successJumpUrl:""},Fe),e=await we(t),{code:l,data:o}=e;l==="10000"&&(D.value=o.installmentPremium,U.value=o.signUrl),f.clear()}catch(t){console.log(t)}},oe=async t=>{const e=Y({tenantId:n,premium:D.value,orderDetail:a.value,productDetail:d.value,insureDetail:g.value,successJumpUrl:V(t),iseeBizNo:N}),l=await ye({orderNo:t,...e}),{code:o,data:r}=l;o==="10000"&&(S?_.replace(`/internet/orderDetail?orderNo=${t}&productCode=${h}&tenantId=${n}`):(f.clear(),q()))},A=async t=>{try{f.loading({forbidClick:!0,message:"\u5347\u7EA7\u4E2D",duration:15*1e3});const e=await ae(),l=await he({tenantId:n,applicationNo:a.value.applicationNo});if(O.value=e,console.log(O.value,"orderNoUp.value===",e),U.value){if(S){const o=encodeURIComponent(encodeURIComponent(V(e))),r=`${U.value}&successUrl=${o}`;window.location.href=r}else{const o=encodeURIComponent(encodeURIComponent(window.location.href)),r=`${U.value}&failUrl=${o}`;window.location.href=r}f.clear()}else oe(e)}catch(e){console.log(e),f.clear()}},se=async t=>{S?B.value=!0:A()},ne=()=>{f.loading({forbidClick:!0,duration:20*1e3,message:"\u8BD5\u7B97\u4E2D"});const t=ke({productCode:h,withInsureInfo:!0,tenantId:n}),e=ge({productCode:h}),l=De({orderNo:R,tenantId:n});Promise.all([t,e,l]).then(([o,r,c])=>{var p;o.code==="10000"&&(d.value=o.data,document.title=((p=o.data)==null?void 0:p.productFullName)||""),r.code==="10000"&&(g.value=r.data),c.code==="10000"&&(a.value=c.data,$.value=c.data.tenantOrderInsuredList[0].extInfo.hasSocialInsurance),te()})};return de(()=>{ne(),setTimeout(async()=>{N=window.getIseeBiz&&await window.getIseeBiz()},1500)}),(t,e)=>{const l=F("ProRadioButton"),o=F("ProField"),r=F("van-config-provider");return P(),pe(r,{"theme-vars":v(Ue)},{default:K(()=>{var c,p,C,w,M,T,H,j,z,G;return[s("div",ze,[s("img",{src:(p=(c=d.value)==null?void 0:c.tenantProductInsureVO)==null?void 0:p.banner[0],class:"banner"},null,8,Ge),s("div",Je,[s("div",Ke,[m(x,{title:"\u59D3\u540D",desc:v(xe)((w=(C=a.value)==null?void 0:C.tenantOrderInsuredList)==null?void 0:w[0].name)},null,8,["desc"]),m(x,{title:"\u8BC1\u4EF6\u53F7\u7801",desc:v($e)((T=(M=a.value)==null?void 0:M.tenantOrderInsuredList)==null?void 0:T[0].certNo)},null,8,["desc"]),m(x,{title:"\u624B\u673A\u53F7\u7801",desc:v(Se)((j=(H=a.value)==null?void 0:H.tenantOrderHolder)==null?void 0:j.mobile)},null,8,["desc"]),m(x,{title:"\u6BCF\u6708\u4FDD\u8D39",desc:`${v(Be)(D.value||0)}\u5143 / \u6BCF\u6708`},null,8,["desc"]),m(o,{label:"\u6709\u65E0\u793E\u4FDD",name:"name",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:K(()=>[m(l,{modelValue:$.value,"onUpdate:modelValue":e[0]||(e[0]=E=>$.value=E),disabled:!0,options:v(me)},null,8,["modelValue","options"])]),_:1}),s("div",{class:"submit",onClick:se})])]),m(je,{"is-show":L.value,onOnConfirm:q,onOnClose:ee},null,8,["is-show"])]),m(fe,{show:B.value,"onUpdate:show":e[1]||(e[1]=E=>B.value=E),"content-list":(G=(z=d.value)==null?void 0:z.tenantProductInsureVO)==null?void 0:G.attachmentVOList,"active-index":Z.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9",onSubmit:A},null,8,["show","content-list","active-index"])]}),_:1},8,["theme-vars"])}}});var la=b(Ye,[["__scopeId","data-v-7565f9b0"]]);export{la as default};
