import{_ as e,d as a,i as t,h as o,j as s,k as r,l as i,m as l,o as n,p as c,w as d,a as u,u as m,q as p,f,b as v,v as y,aN as b,ar as h,aC as g,aD as N,cM as j,cL as T}from"./index-132f8e34.js";import{g as w}from"./trial-6a288173.js";import{u as I}from"./useOrder-700259b3.js";import{f as C}from"./face_img-b678980a.js";import{P as _}from"./constants-6c7c253a.js";import{P as x}from"./constants-b39aa53b.js";import{T as P}from"./infoCollection-7c2737f2.js";import q from"./index-413409ca.js";const z=e=>(g("data-v-6b3599ed"),e=e(),N(),e),U={class:"page-phone-verify"},E=z((()=>u("div",{class:"title face-title"},"人脸识别",-1))),k={class:"face-verify-img"},L=["src"],V=z((()=>u("div",{class:"face-verify-tip"},[u("div",{class:"title"},"操作时请您配合"),u("ol",null,[u("li",null,"请调亮手机屏幕亮度，确保光线充足"),u("li",null,"请保持正脸对准屏幕，确保人脸完整清晰"),u("li",null,"请确保真实本人操作")])],-1))),A={class:"attachment"},B={class:"footer-button"};var F=e(a({__name:"faceVerify",setup(e){const a=I(),g=t(),N=o(),{agentCode:z,origin:F,tenantId:S,nextPageCode:M,templateId:O,biz_id:$,orderNo:D,objectType:R,orderCode:W}=g.query,G=s({mobile:"",verifyCode:""});s();const H=s(),J=s(),K=s([{attachmentName:"隐私政策"}]),Q=r((()=>Array.isArray(R)?`${null==R?void 0:R[0]}`.toLocaleUpperCase():`${R}`.toLocaleUpperCase())),X=()=>{w({orderNo:W||D,tenantId:S}).then((({code:e,data:t})=>{if("10000"===e){Object.assign(a.value,t);const{holder:e,insuredList:o}=t;if("holder"===R){const{name:a,certNo:t,certType:o,id:s,mobile:r}=e;G.value.mobile=r,H.value={userName:a,certiNo:t,certType:o,objectId:s}}else{const{name:e,certNo:a,certType:t,id:s,mobile:r}=(null==o?void 0:o[0])||{};G.value.mobile=r,H.value={userName:e,certiNo:a,certType:t,objectId:s}}$&&(()=>{const{objectId:e,certType:a}=H.value,t={bizId:$,certType:a,objectId:e,objectType:Q.value,orderNo:D,tenantId:S};j(t).then((({code:e,data:a})=>{if("10000"===e&&"SUCCESS"===a.status)if(delete g.query.biz_id,delete g.query.nextPageCode,O===P.FREE)N.push({path:x.infoPreview,query:g.query});else{const e=_.insuredInfoPreview;N.push({path:e,query:{...g.query,pageType:"confirm"===F}})}}))})()}}))},Y=()=>{J.value?(()=>{const{userName:e,certiNo:a,certType:t}=H.value,o={tenantId:S,faceAuthMode:"TENCENT",callbackUrl:window.location.href,bizNo:D,userName:e,certiNo:a,certType:t};T(o).then((({code:e,data:a})=>{"10000"===e&&(window.location.href=a.originalUrl)}))})():b.alert({message:"请先同意隐私政策",confirmButtonText:"我知道了"})};i((()=>{X()}));const Z=s();return i((()=>{setTimeout((async()=>{Z.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=h,o=l("ProPageWrap");return n(),c(o,null,{default:d((()=>{var o;return[u("div",U,[E,u("div",k,[u("img",{src:m(C),alt:""},null,8,L)]),V,u("div",A,[(null==(o=m(K))?void 0:o.length)?(n(),c(q,{key:0,modelValue:m(J),"onUpdate:modelValue":a[0]||(a[0]=e=>p(J)?J.value=e:null),"attachment-list":m(K),"has-bg-color":!1,"is-show-radio":"","pre-text":"本人同意利安人寿采集本人人脸信息，用于向国家法规许可的验证机构进行本人身份验证。本人已仔细阅读并知晓","suffix-text":"，并同意授权。",onPreviewFile:a[1]||(a[1]=a=>e.previewFile(a))},null,8,["modelValue","attachment-list"])):f("",!0)]),u("div",B,[v(t,{type:"primary",class:"submit-btn",onClick:Y},{default:d((()=>[y("开始验证")])),_:1})])])]})),_:1})}}}),[["__scopeId","data-v-6b3599ed"]]);export{F as default};
