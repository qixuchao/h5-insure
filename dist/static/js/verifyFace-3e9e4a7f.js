import{_ as e,d as a,aV as t,aW as s,cD as i,i as o,h as l,af as r,j as c,bc as n,l as d,m as u,o as m,p,w as v,a as f,u as y,q as b,f as h,b as N,v as w,bi as T,cM as g,y as _,b3 as j,bo as x,bp as I,cN as C}from"./index-577e8a70.js";import{f as P}from"./face_img-b678980a.js";import q from"./index-b634f063.js";import{p as z}from"./policy-e45b602a.js";const F=e=>(x("data-v-65fca035"),e=e(),I(),e),U={class:"page-verify-face"},k=F((()=>f("div",{class:"title face-title"},"人脸识别",-1))),E={class:"face-verify-img"},S=["src"],V=F((()=>f("div",{class:"face-verify-tip"},[f("div",{class:"title"},"操作时请您配合"),f("ol",null,[f("li",null,"请调亮手机屏幕亮度，确保光线充足"),f("li",null,"请保持正脸对准屏幕，确保人脸完整清晰"),f("li",null,"请确保真实本人操作")])],-1))),B={class:"attachment"},L={class:"footer-button"},D=a({name:"verifyFace"});var M=e(a({...D,setup(e){const a=t((()=>s((()=>import("./index-5cb42a72.js")),["static/js/index-5cb42a72.js","static/css/index-fa4edf2a.css","static/js/index-577e8a70.js","static/css/index-2df82e90.css","static/js/theme-94cf7d00.js","static/js/index-e8e8992f.js","static/css/index-bbfdd7ec.css","static/js/utils-83490c01.js","static/js/infoCollection-ad979b07.js","static/js/trial-27fe0dd1.js"]))),x=i(),I=o(),F=l(),{isFirst:D,tenantId:M,objectType:A,orderNo:O,biz_id:W,nextPageCode:$}=I.query,R=x.get(`${r}_orderDetail`),G=c(),H=c(!0),J=c(),K=c([{attachmentName:"隐私政策",attachmentList:[{materialName:"隐私政策",materialContent:z,materialSource:"pdf"}]}]),Q=c(!1),X=()=>{J.value?(()=>{const{userName:e,certiNo:a,certType:t}=G.value,s={tenantId:M,faceAuthMode:"TENCENT",callbackUrl:window.location.href.replace("isFirst=1","isFirst=0"),bizNo:O,userName:e,certiNo:a,certType:t};C(s).then((({code:e,data:a})=>{"10000"===e&&(window.location.href=a.originalUrl)}))})():T.alert({message:"请先同意隐私政策",confirmButtonText:"我知道了"})};n((()=>{const{holder:e,insuredList:a}=R;if("holder"===A){const{name:a,certNo:t,certType:s,id:i}=e;G.value={userName:a,certiNo:t,certType:s,objectId:i}}else{const{name:e,certNo:t,certType:s,id:i}=(null==a?void 0:a[0])||{};G.value={userName:e,certiNo:t,certType:s,objectId:i}}W&&(()=>{const{userName:e,objectId:a,certType:t}=G.value,s={bizId:W,certType:t,objectId:a,objectType:`${A}`.toLocaleUpperCase(),orderNo:O,tenantId:M};g(s).then((({code:e,data:a})=>{"10000"===e&&"SUCCESS"===a.status?(delete I.query.biz_id,delete I.query.nextPageCode,F.push({path:_.infoPreview,query:I.query})):H.value=!1}))})()}));const Y=c();return d((()=>{setTimeout((async()=>{Y.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const s=j,i=u("ProPageWrap");return m(),p(i,null,{default:v((()=>{var e;return[f("div",U,[k,f("div",E,[f("img",{src:y(P),alt:""},null,8,S)]),V,f("div",B,[(null==(e=y(K))?void 0:e.length)?(m(),p(q,{key:0,modelValue:y(J),"onUpdate:modelValue":t[0]||(t[0]=e=>b(J)?J.value=e:null),"attachment-list":y(K),"has-bg-color":!1,"is-show-radio":"","pre-text":"本人同意利安人寿采集本人人脸信息，用于向国家法规许可的验证机构进行本人身份验证。本人已仔细阅读并知晓","suffix-text":"，并同意授权。",onPreviewFile:t[1]||(t[1]=()=>Q.value=!0)},null,8,["modelValue","attachment-list"])):h("",!0)]),f("div",L,[N(s,{type:"primary",class:"submit-btn",onClick:X},{default:v((()=>[w("同意拍摄")])),_:1})])]),y(Q)?(m(),p(y(a),{key:0,show:y(Q),"onUpdate:show":t[2]||(t[2]=e=>b(Q)?Q.value=e:null),"content-list":y(K),"is-only-view":"","active-index":0,text:"我已阅读","force-read-cound":0,onSubmit:t[3]||(t[3]=()=>Q.value=!1),onOnCloseFilePreviewByMask:t[4]||(t[4]=()=>Q.value=!1)},null,8,["show","content-list"])):h("",!0)]})),_:1})}}}),[["__scopeId","data-v-65fca035"]]);export{M as default};
