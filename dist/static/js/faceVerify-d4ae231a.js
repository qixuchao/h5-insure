import{_ as e,d as a,aV as t,aW as o,i as s,h as i,j as r,k as l,l as n,m as c,o as d,p as u,w as m,a as p,u as f,q as v,f as b,b as y,v as h,bi as j,b3 as w,bo as N,bp as g,cL as T,cM as I}from"./index-f0eeebf3.js";import{g as C}from"./trial-1b895186.js";import{u as _}from"./useOrder-d7f47ae5.js";import{p as P,f as x}from"./policy-f4d867af.js";import{P as q}from"./constants-6c7c253a.js";import{P as E}from"./constants-b39aa53b.js";import{T as U}from"./infoCollection-f557585c.js";import k from"./index-c6077e25.js";import"./utils-48889deb.js";import"./createProposal-7e896f2e.js";import"./trial-22c49f2c.js";import"./PolicyInfo-3ba190b9.js";import"./cloneDeep-325f4dfb.js";const z=e=>(N("data-v-d49780c6"),e=e(),g(),e),L={class:"page-phone-verify"},V=z((()=>p("div",{class:"title face-title"},"人脸识别",-1))),S={class:"face-verify-img"},A=["src"],B=z((()=>p("div",{class:"face-verify-tip"},[p("div",{class:"title"},"操作时请您配合"),p("ol",null,[p("li",null,"请调亮手机屏幕亮度，确保光线充足"),p("li",null,"请保持正脸对准屏幕，确保人脸完整清晰"),p("li",null,"请确保真实本人操作")])],-1))),O={class:"attachment"},F={class:"footer-button"};var M=e(a({__name:"faceVerify",setup(e){const a=t((()=>o((()=>import("./index-b0e28d19.js")),["static/js/index-b0e28d19.js","static/css/index-fa4edf2a.css","static/js/index-f0eeebf3.js","static/css/index-c7bb1a0c.css","static/js/theme-94cf7d00.js","static/js/index-5aa86263.js","static/css/index-bbfdd7ec.css","static/js/utils-ac733c3b.js","static/js/infoCollection-f557585c.js","static/js/trial-22c49f2c.js"]))),N=_(),g=s(),z=i(),{agentCode:M,origin:D,tenantId:R,nextPageCode:W,templateId:$,biz_id:G,orderNo:H,objectType:J,orderCode:K}=g.query,Q=r({mobile:"",verifyCode:""});r();const X=r(),Y=r(),Z=r([{attachmentName:"隐私政策",attachmentList:[{materialName:"隐私政策",materialContent:P,materialSource:"pdf"}]}]),ee=r(!1),ae=l((()=>Array.isArray(J)?`${null==J?void 0:J[0]}`.toLocaleUpperCase():`${J}`.toLocaleUpperCase())),te=()=>{C({orderNo:K||H,tenantId:R}).then((({code:e,data:a})=>{if("10000"===e){Object.assign(N.value,a);const{holder:e,insuredList:t}=a;if("holder"===J){const{name:a,certNo:t,certType:o,id:s,mobile:i}=e;Q.value.mobile=i,X.value={userName:a,certiNo:t,certType:o,objectId:s}}else{const{name:e,certNo:a,certType:o,id:s,mobile:i}=(null==t?void 0:t[0])||{};Q.value.mobile=i,X.value={userName:e,certiNo:a,certType:o,objectId:s}}G&&(()=>{const{objectId:e,certType:a}=X.value,t={bizId:G,certType:a,objectId:e,objectType:ae.value,orderNo:H,tenantId:R};T(t).then((({code:e,data:a})=>{if("10000"===e&&"SUCCESS"===a.status)if(delete g.query.biz_id,delete g.query.nextPageCode,$===U.FREE)z.push({path:E.infoPreview,query:g.query});else{const e=q.insuredInfoPreview;z.push({path:e,query:{...g.query,pageType:"confirm"===D}})}}))})()}}))},oe=()=>{Y.value?(()=>{const{userName:e,certiNo:a,certType:t}=X.value,o={tenantId:R,faceAuthMode:"TENCENT",callbackUrl:window.location.href,bizNo:H,userName:e,certiNo:a,certType:t};I(o).then((({code:e,data:a})=>{"10000"===e&&(window.location.href=a.originalUrl)}))})():j.alert({message:"请先同意隐私政策",confirmButtonText:"我知道了"})};n((()=>{te()}));const se=r();return n((()=>{setTimeout((async()=>{se.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const o=w,s=c("ProPageWrap");return d(),u(s,null,{default:m((()=>{var e;return[p("div",L,[V,p("div",S,[p("img",{src:f(x),alt:""},null,8,A)]),B,p("div",O,[(null==(e=f(Z))?void 0:e.length)?(d(),u(k,{key:0,modelValue:f(Y),"onUpdate:modelValue":t[0]||(t[0]=e=>v(Y)?Y.value=e:null),"attachment-list":f(Z),"has-bg-color":!1,"is-show-radio":"","pre-text":"本人同意利安人寿采集本人人脸信息，用于向国家法规许可的验证机构进行本人身份验证。本人已仔细阅读并知晓","suffix-text":"，并同意授权。",onPreviewFile:t[1]||(t[1]=()=>ee.value=!0)},null,8,["modelValue","attachment-list"])):b("",!0)]),p("div",F,[y(o,{type:"primary",class:"submit-btn",onClick:oe},{default:m((()=>[h("同意拍摄")])),_:1})])]),f(ee)?(d(),u(f(a),{key:0,show:f(ee),"onUpdate:show":t[2]||(t[2]=e=>v(ee)?ee.value=e:null),"content-list":f(Z),"is-only-view":"","active-index":0,text:"我已阅读","force-read-cound":0,onSubmit:t[3]||(t[3]=()=>ee.value=!1),onOnCloseFilePreviewByMask:t[4]||(t[4]=()=>ee.value=!1)},null,8,["show","content-list"])):b("",!0)]})),_:1})}}}),[["__scopeId","data-v-d49780c6"]]);export{M as default};
