import{_ as e,d as a,aV as t,aW as o,i as l,h as s,j as i,k as r,c9 as c,cF as n,l as d,m,o as u,p,w as f,a as v,e as b,u as h,b as y,bg as g,bh as w,cy as j,cz as T,q as x,f as N,v as C,aY as _,bi as I,c4 as V,bL as k,cA as B,cB as P,b3 as U,bo as q,bp as S,cL as z,y as E,cM as L}from"./index-1028b15c.js";import{g as $}from"./trial-5a9c476e.js";import{c as A}from"./format-31cde443.js";import{u as F}from"./useOrder-33420f50.js";import{p as O,f as W}from"./policy-f4d867af.js";import M from"./index-ae7e9c35.js";import{i as Y}from"./core-fe87efb7.js";import"./utils-5ebe996a.js";import"./createProposal-c6c7913b.js";import"./trial-c0ad214c.js";import"./PolicyInfo-3d0d1f6e.js";import"./cloneDeep-944eed06.js";const D=e=>(q("data-v-78aaba06"),e=e(),S(),e),R={class:"page-phone-verify"},G={class:"title"},H=D((()=>v("div",{class:"title face-title"},"人脸识别",-1))),J={class:"face-verify-img"},K=["src"],Q=D((()=>v("div",{class:"face-verify-tip"},[v("div",{class:"title"},"操作时请您配合"),v("ol",null,[v("li",null,"请调亮手机屏幕亮度，确保光线充足"),v("li",null,"请保持正脸对准屏幕，确保人脸完整清晰"),v("li",null,"请确保真实本人操作")])],-1))),X={class:"attachment"},Z={class:"footer-button"};var ee=e(a({__name:"phoneVerify",setup(e){const a=t((()=>o((()=>import("./index-59b94ed2.js")),["static/js/index-59b94ed2.js","static/css/index-fa4edf2a.css","static/js/index-1028b15c.js","static/css/index-72f8149c.css","static/js/theme-94cf7d00.js","static/js/index-ac71d639.js","static/css/index-bbfdd7ec.css","static/js/utils-147557a6.js","static/js/infoCollection-8a756ab4.js","static/js/trial-c0ad214c.js"]))),q=F(),S=l(),D=s(),{agentCode:ee,tenantId:ae,nextPageCode:te,biz_id:oe,orderNo:le,objectType:se,orderCode:ie}=S.query,re=i({mobile:"",verifyCode:""}),ce=i(),ne=i(),de=i(),me=i([{attachmentName:"隐私政策",attachmentList:[{materialName:"隐私政策",materialContent:O,materialSource:"pdf"}]}]),ue=i(!1),pe=r((()=>Array.isArray(se)?`${null==se?void 0:se[0]}`.toLocaleUpperCase():`${se}`.toLocaleUpperCase()));c(`${n[pe.value]}签名`);const fe=()=>{$({orderNo:ie||le,tenantId:ae}).then((({code:e,data:a})=>{if("10000"===e){Object.assign(q.value,a);const{holder:e,insuredList:t}=a;if("holder"===se){const{name:a,certNo:t,certType:o,id:l,mobile:s,shareFlag:i}=e;re.value.mobile=s,ne.value={userName:a,certiNo:t,certType:o,objectId:l},i===_.YES&&I.confirm({message:"本次签名已完成，您是否需要重新签名?",confirmButtonText:"是",cancelButtonText:"否"}).catch((()=>{Y?V.closeWindow():window.close()}))}else{const{name:e,certNo:a,certType:o,id:l,mobile:s,shareFlag:i}=(null==t?void 0:t[0])||{};re.value.mobile=s,ne.value={userName:e,certiNo:a,certType:o,objectId:l},i===_.YES&&I.confirm({message:"本次签名已完成，您是否需要重新签名?",confirmButtonText:"是",cancelButtonText:"否"}).catch((()=>{Y?V.closeWindow():window.close()}))}oe&&(()=>{const{objectId:e,certType:a}=ne.value,t={bizId:oe,certType:a,objectId:e,objectType:pe.value,orderNo:le,tenantId:ae};z(t).then((({code:e,data:a})=>{"10000"===e&&"SUCCESS"===a.status&&(delete S.query.biz_id,delete S.query.nextPageCode,D.push({path:E[`${te}`],query:{...S.query,isShare:1}}))}))})()}}))},ve=()=>{var e,a;null==(a=null==(e=ce.value)?void 0:e.validate)||a.call(e).then((()=>{de.value?(()=>{const{userName:e,certiNo:a,certType:t}=ne.value,o={tenantId:ae,faceAuthMode:"TENCENT",callbackUrl:window.location.href,bizNo:le,userName:e,certiNo:a,certType:t};L(o).then((({code:e,data:a})=>{"10000"===e&&(window.location.href=a.originalUrl)}))})():I.alert({message:"请先同意隐私政策",confirmButtonText:"我知道了"})}))};d((()=>{fe()}));const be=i();return d((()=>{setTimeout((async()=>{be.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const o=k,l=B,s=P,i=U,r=m("ProPageWrap");return u(),p(r,null,{default:f((()=>{var e;return[v("div",R,[v("div",G,b(`${h(n)[h(pe)]}手机号验证 ${h(A)(h(re).mobile||"")}`),1),y(s,{ref_key:"formRef",ref:ce,"validate-method":"toast",model:h(re)},{default:f((()=>[g(y(o,{modelValue:h(re).mobile,"onUpdate:modelValue":t[0]||(t[0]=e=>h(re).mobile=e),label:"被保险人手机号",name:"mobile",maxlength:"11",required:""},null,8,["modelValue"]),[[w,!1]]),y(l,{modelValue:h(re).verifyCode,"onUpdate:modelValue":t[1]||(t[1]=e=>h(re).verifyCode=e),"related-name":"mobile",label:" ",maxlength:"6","input-align":"left",placeholder:"请输入验证码",name:"verifyCode",rules:[{required:!0,message:"请输入验证码"}],"send-s-m-s-code":h(j),"check-s-m-s-code":h(T)},null,8,["modelValue","send-s-m-s-code","check-s-m-s-code"])])),_:1},8,["model"]),H,v("div",J,[v("img",{src:h(W),alt:""},null,8,K)]),Q,v("div",X,[(null==(e=h(me))?void 0:e.length)?(u(),p(M,{key:0,modelValue:h(de),"onUpdate:modelValue":t[2]||(t[2]=e=>x(de)?de.value=e:null),"attachment-list":h(me),"has-bg-color":!1,"is-show-radio":"","pre-text":"本人同意利安人寿采集本人人脸信息，用于向国家法规许可的验证机构进行本人身份验证。本人已仔细阅读并知晓","suffix-text":"，并同意授权。",onPreviewFile:t[3]||(t[3]=()=>ue.value=!0)},null,8,["modelValue","attachment-list"])):N("",!0)]),v("div",Z,[y(i,{type:"primary",class:"submit-btn",onClick:ve},{default:f((()=>[C("同意拍摄")])),_:1})]),h(ue)?(u(),p(h(a),{key:0,show:h(ue),"onUpdate:show":t[4]||(t[4]=e=>x(ue)?ue.value=e:null),"content-list":h(me),"is-only-view":"","active-index":0,text:"我已阅读","force-read-cound":0,onSubmit:t[5]||(t[5]=()=>ue.value=!1),onOnCloseFilePreviewByMask:t[6]||(t[6]=()=>ue.value=!1)},null,8,["show","content-list"])):N("",!0)])]})),_:1})}}}),[["__scopeId","data-v-78aaba06"]]);export{ee as default};
