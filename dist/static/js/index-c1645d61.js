import{i as k,m as P,s as W,B as s,L as G,C as v,x as re,a5 as le,a6 as ie,aa as ue,P as ce,r as i,k as de,l as F,n as pe,p as K,t as m,T as f}from"./vendor-87894311.js";import{j as me}from"./infoCollection-9b1626aa.js";import{_ as b,a4 as ve}from"./index-dd334c46.js";import{c as _e}from"./close-bad1ffb4.js";import{_ as fe}from"./index-4203a638.js";import{a as Ie}from"./order-7dc1d409.js";import{d as he,i as ge,g as De,s as Ce,e as we,E as ye}from"./trial-121f55b1.js";import{t as Ue}from"./theme-3c294048.js";import{n as xe,i as $e,m as Se,e as Be,a as Oe,t as Ne,j as Ee,f as Y,h as Fe}from"./utils-736682ff.js";import{p as ke}from"./product-35f93839.js";import"./trial-2c2f0d38.js";const Pe={class:"com-field-info"},be={class:"title"},Re={class:"desc"},Le=k({props:{title:{type:String,default:""},desc:{type:String,default:""}},setup(u){return(_,I)=>(P(),W("div",Pe,[s("div",be,G(u.title),1),s("div",Re,G(u.desc),1)]))}});var x=b(Le,[["__scopeId","data-v-26c796cf"]]);const Q=u=>(le("data-v-fa9670a0"),u=u(),ie(),u),Ve={key:0,class:"pro-modal"},qe=Q(()=>s("div",{class:"pro-overlay"},null,-1)),Me={class:"pro-modal-wrapper"},Te=Q(()=>s("div",{class:"pro-modal-content"},[s("p",null,"\u606D\u559C\u60A8"),s("p",null,"\u4FDD\u969C\u5347\u7EA7\u6210\u529F")],-1)),Ae=["src"],He=k({props:{bg:{type:String,default:""},btn:{type:String,default:""},isShow:{type:Boolean,default:()=>{}}},emits:["on-confirm","on-close"],setup(u,{emit:_}){const I=u,h=()=>{_("on-close")},n=()=>{_("on-confirm")};return(R,y)=>I.isShow?(P(),W("div",Ve,[qe,s("div",Me,[s("div",{class:"pro-modal-body"},[Te,s("div",{class:"pro-modal-btn",onClick:n},"\u6211\u77E5\u9053\u4E86")]),s("div",{class:"pro-modal-close",onClick:h},[s("img",{src:v(_e)},null,8,Ae)])])])):re("",!0)}});var ze=b(He,[["__scopeId","data-v-fa9670a0"]]);const Je={class:"page-activity-upgrade"},je=["src"],Ge={class:"container"},Ke={class:"main-form"},Ye=k({setup(u){const _=ue(),I=ce(),{productCode:h="BWYL2022",tenantId:n,orderNo:R,agentCode:y="",from:X}=I.query;console.log("upload--route.query",I.query);const d=i(),g=i(),t=i(),D=i(),$=i(),U=i(),L=i(!1),S=X==="check",B=i(!1),Z=i(0),O=i("");let N="";const ee=()=>{L.value=!1},te=async()=>{var r,c,p,C,w;const a=Oe({tenantId:n,applicationNo:t.value.applicationNo,policyNo:t.value.policyNo,saleUserId:y,saleChannelId:t.value.saleChannelId,orderStatus:Ie.UP_PROCESSING,orderTopStatus:"-1",orderCategory:2,detail:d.value,insureDetail:g.value,paymentMethod:(c=(r=t.value.extInfo)==null?void 0:r.extraInfo)==null?void 0:c.paymentMethod,renewalDK:(C=(p=t.value.extInfo)==null?void 0:p.extraInfo)==null?void 0:C.renewalDK,iseeBizNo:N,successJumpUrl:"",premium:D.value,holder:{...t.value.tenantOrderHolder,socialFlag:t.value.tenantOrderHolder.extInfo.hasSocialInsurance},insured:{...t.value.tenantOrderInsuredList[0],socialFlag:t.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance},tenantOrderRiskList:Ne({tenantId:n,riskList:Ee(g.value.productRiskVoList[0].riskDetailVOList,d.value),riskPremium:{},productId:(w=d.value)==null?void 0:w.id})}),e=await Ce(a),{code:l,data:o}=e;return l==="10000"?o.data:""},V=a=>`${ve}/pay?orderNo=${a}&saleUserId=${y}&tenantId=${n}`,q=()=>{_.replace(`/pay?orderNo=${O.value}&saleUserId=${y}&tenantId=${n}`)},ae=async()=>{try{const a=Y({tenantId:n,premium:D.value,orderDetail:t.value,productDetail:d.value,insureDetail:g.value,successJumpUrl:""},Fe),e=await we(a),{code:l,data:o}=e;l==="10000"&&(D.value=o.installmentPremium,U.value=o.signUrl),f.clear()}catch(a){console.log(a)}},oe=async a=>{const e=Y({tenantId:n,premium:D.value,orderDetail:t.value,productDetail:d.value,insureDetail:g.value,successJumpUrl:V(a),iseeBizNo:N}),l=await ye({orderNo:a,...e}),{code:o,data:r}=l;o==="10000"&&(S?_.replace(`/internet/orderDetail?orderNo=${a}&productCode=${h}&tenantId=${n}`):(f.clear(),q()))},M=async a=>{try{f.loading({forbidClick:!0,message:"\u5347\u7EA7\u4E2D",duration:15*1e3});const e=await te(),l=await he({tenantId:n,applicationNo:t.value.applicationNo});if(O.value=e,console.log(O.value,"orderNoUp.value===",e),U.value){if(S){const o=encodeURIComponent(encodeURIComponent(V(e))),r=`${U.value}&successUrl=${o}`;window.location.href=r}else{const o=encodeURIComponent(encodeURIComponent(window.location.href)),r=`${U.value}&failUrl=${o}`;window.location.href=r}f.clear()}else oe(e)}catch(e){console.log(e),f.clear()}},se=async a=>{S?B.value=!0:M()},ne=()=>{f.loading({forbidClick:!0,duration:20*1e3,message:"\u8BD5\u7B97\u4E2D"});const a=ke({productCode:h,withInsureInfo:!0,tenantId:n}),e=ge({productCode:h}),l=De({orderNo:R,tenantId:n});Promise.all([a,e,l]).then(([o,r,c])=>{var p;o.code==="10000"&&(d.value=o.data,document.title=((p=o.data)==null?void 0:p.productFullName)||""),r.code==="10000"&&(g.value=r.data),c.code==="10000"&&(t.value=c.data,$.value=c.data.tenantOrderInsuredList[0].extInfo.hasSocialInsurance),ae()})};return de(()=>{ne(),setTimeout(async()=>{N=window.getIseeBiz&&await window.getIseeBiz()},1500)}),(a,e)=>{const l=F("ProRadioButton"),o=F("ProField"),r=F("van-config-provider");return P(),pe(r,{"theme-vars":v(Ue)},{default:K(()=>{var c,p,C,w,T,A,H,z,J,j;return[s("div",Je,[s("img",{src:(p=(c=d.value)==null?void 0:c.tenantProductInsureVO)==null?void 0:p.banner[0],class:"banner"},null,8,je),s("div",Ge,[s("div",Ke,[m(x,{title:"\u59D3\u540D",desc:v(xe)((w=(C=t.value)==null?void 0:C.tenantOrderInsuredList)==null?void 0:w[0].name)},null,8,["desc"]),m(x,{title:"\u8BC1\u4EF6\u53F7\u7801",desc:v($e)((A=(T=t.value)==null?void 0:T.tenantOrderInsuredList)==null?void 0:A[0].certNo)},null,8,["desc"]),m(x,{title:"\u624B\u673A\u53F7\u7801",desc:v(Se)((z=(H=t.value)==null?void 0:H.tenantOrderHolder)==null?void 0:z.mobile)},null,8,["desc"]),m(x,{title:"\u6BCF\u6708\u4FDD\u8D39",desc:`${v(Be)(D.value||0)}\u5143 / \u6BCF\u6708`},null,8,["desc"]),m(o,{label:"\u6709\u65E0\u793E\u4FDD",name:"name",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:K(()=>[m(l,{modelValue:$.value,"onUpdate:modelValue":e[0]||(e[0]=E=>$.value=E),disabled:!0,options:v(me)},null,8,["modelValue","options"])]),_:1}),s("div",{class:"submit",onClick:se})])]),m(ze,{"is-show":L.value,onOnConfirm:q,onOnClose:ee},null,8,["is-show"])]),m(fe,{show:B.value,"onUpdate:show":e[1]||(e[1]=E=>B.value=E),"content-list":(j=(J=d.value)==null?void 0:J.tenantProductInsureVO)==null?void 0:j.attachmentVOList,"active-index":Z.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9",onSubmit:M},null,8,["show","content-list","active-index"])]}),_:1},8,["theme-vars"])}}});var lt=b(Ye,[["__scopeId","data-v-7565f9b0"]]);export{lt as default};
