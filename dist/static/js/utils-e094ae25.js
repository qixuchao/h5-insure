import{d as e,r as a,aR as n,Q as t,c as l,y as r,f as s,i,h as o,z as d,R as c,g as u,w as f,k as p,j as m,aw as h,aS as y,a9 as v}from"./index-ba4bbbcf.js";import{P as b}from"./index-beb9cf24.js";import"./infoCollection-2b56e459.js";import"./trial-83f98fd5.js";const C={class:"trial-button-wrap"},k={class:"footer-area"},x=s("span",null,"分享",-1),S={class:"price"},g={key:0},j=e({name:"trialButton"}),I=e({...j,props:{premium:{default:0},tenantProductDetail:{default:()=>({})},planCode:{default:void 0},loadingText:{default:""},paymentFrequency:{default:""},shareInfo:{default:()=>({})},isShare:{type:Boolean,default:!1},handleShare:null},emits:["handleClick"],setup(e,{emit:j}){const I=e,T=a(""),E=a("");n();const D=a(),O=()=>{I.handleShare?I.handleShare((()=>D.value.handleShare())):D.value.handleShare()};return t([()=>I.premium,()=>I.tenantProductDetail,()=>I.paymentFrequency,()=>I.planCode],(([e])=>{const{PREMIUM:a=[]}=I.tenantProductDetail||{};let n={};if(null==a?void 0:a.length){n=(a||[]).find((e=>e.planCode===I.planCode||!e.planCode))||{};const t=((null==n?void 0:n.data)||[]).find((e=>e.paymentFrequency===I.paymentFrequency)),{premium:l,minActualUnit:r}=t||{};e?(E.value=r,T.value=e&&`${e}`):(E.value=l,T.value="")}else e&&(E.value="",T.value=e&&`${e}`)}),{deep:!0,immediate:!0}),(a,n)=>{const t=v;return l(),r("div",C,[s("div",k,[e.isShare?(l(),r("div",{key:0,class:"com-share",onClick:O},[i(t,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),x])):o("",!0),s("div",S,[e.loadingText?(l(),r("span",g,d(e.loadingText),1)):(l(),r(c,{key:1},[s("span",null,d(u(T)),1),s("span",null,d(u(E)),1)],64))]),i(b,{shadow:!1,class:"right",onClick:n[0]||(n[0]=e=>j("handleClick"))},{default:f((()=>[p(a.$slots,"default",{},(()=>[m("立即投保")]))])),_:3})]),i(y,h({ref_key:"shareRef",ref:D},e.shareInfo),null,16)])}}}),T=({holder:e,insuredList:a=[]})=>{const n=["birthday","certEndDate","certEndType","certNo","certStartDate","verificationCode","certType","email","gender","mobile","name","id","insuredBeneficiaryType","relationToHolder","relationToMainInsured","tenantOrderBeneficiaryList","extInfo"],t=e=>{const a={extInfo:{}};return"[object Object]"==={}.toString.call(e)&&Object.keys(e).forEach((t=>{n.includes(t)?a[t]=e[t]:a.extInfo[t]=e[t]})),a};return{tenantOrderHolder:t(e),tenantOrderInsuredList:(a||[]).map((e=>t(e)))}};export{I as _,T as f};
