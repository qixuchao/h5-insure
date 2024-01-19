import{_ as e,d as a,i as l,h as t,j as s,k as o,l as r,m as i,o as d,p as c,w as n,a as m,e as u,u as p,cG as f,b,aV as v,aW as y,cz as h,ag as g,v as j,bM as N,cA as C,cB as I,aI as T,b1 as _,b2 as w,cM as V,y as q,cL as z}from"./index-6a9cf46c.js";import{g as U}from"./trial-41b6fd53.js";import{c as k}from"./format-31cde443.js";import{u as x}from"./useOrder-d313309a.js";import{f as P}from"./face_img-b678980a.js";import"./utils-e3b5b413.js";import"./createProposal-e1f6da83.js";import"./trial-d6373768.js";import"./PolicyInfo-6c553e35.js";const $=e=>(_("data-v-8ae22750"),e=e(),w(),e),A={class:"page-phone-verify"},L={class:"title"},S=$((()=>m("div",{class:"title face-title"},"人脸识别",-1))),B={class:"face-verify-img"},E=["src"],M=$((()=>m("div",{class:"face-verify-tip"},[m("div",{class:"title"},"操作时请您配合"),m("ol",null,[m("li",null,"请调亮手机屏幕亮度，确保光线充足"),m("li",null,"请保持正脸对准屏幕，确保人脸完整清晰"),m("li",null,"请确保真实本人操作")])],-1))),O={class:"tips"},W=["src"];var G=e(a({__name:"phoneVerify",setup(e){const a=x(),_=l(),w=t(),{agentCode:$,tenantId:G,nextPageCode:R,biz_id:D,orderNo:F,objectType:H,orderCode:J}=_.query,K=s({mobile:"",verifyCode:""}),Q=s(),X=s(),Y=o((()=>Array.isArray(H)?`${null==H?void 0:H[0]}`.toLocaleUpperCase():`${H}`.toLocaleUpperCase())),Z=()=>{U({orderNo:J||F,tenantId:G}).then((({code:e,data:l})=>{if("10000"===e){Object.assign(a.value,l);const{holder:e,insuredList:t}=l;if("holder"===H){const{name:a,certNo:l,certType:t,id:s,mobile:o}=e;K.value.mobile=o,X.value={userName:a,certiNo:l,certType:t,objectId:s}}else{const{name:e,certNo:a,certType:l,id:s,mobile:o}=(null==t?void 0:t[0])||{};K.value.mobile=o,X.value={userName:e,certiNo:a,certType:l,objectId:s}}D&&(()=>{const{objectId:e,certType:a}=X.value,l={bizId:D,certType:a,objectId:e,objectType:Y.value,orderNo:F,tenantId:G};V(l).then((({code:e,data:a})=>{"10000"===e&&"SUCCESS"===a.status&&(delete _.query.biz_id,delete _.query.nextPageCode,w.push({path:q[`${R}`],query:{..._.query,isShare:1}}))}))})()}}))},ee=()=>{var e,a;null==(a=null==(e=Q.value)?void 0:e.validate)||a.call(e).then((()=>{(()=>{const{userName:e,certiNo:a,certType:l}=X.value,t={tenantId:G,faceAuthMode:"TENCENT",callbackUrl:window.location.href,bizNo:F,userName:e,certiNo:a,certType:l};z(t).then((({code:e,data:a})=>{"10000"===e&&(window.location.href=a.originalUrl)}))})()}))};r((()=>{Z()}));const ae=s();return r((()=>{setTimeout((async()=>{ae.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const l=N,t=C,s=I,o=T,r=i("ProPageWrap");return d(),c(r,null,{default:n((()=>[m("div",A,[m("div",L,u(`${p(f)[p(Y)]}手机号验证 ${p(k)(p(K).mobile||"")}`),1),b(s,{ref_key:"formRef",ref:Q,"validate-method":"toast",model:p(K)},{default:n((()=>[v(b(l,{modelValue:p(K).mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>p(K).mobile=e),label:"被保人手机号",name:"mobile",maxlength:"11",required:""},null,8,["modelValue"]),[[y,!1]]),b(t,{modelValue:p(K).verifyCode,"onUpdate:modelValue":a[1]||(a[1]=e=>p(K).verifyCode=e),"related-name":"mobile",label:" ",maxlength:"6","input-align":"left",placeholder:"请输入验证码",name:"verifyCode",rules:[{required:!0,message:"请输入验证码"}],"send-s-m-s-code":p(h),"check-s-m-s-code":p(g)},null,8,["modelValue","send-s-m-s-code","check-s-m-s-code"])])),_:1},8,["model"]),S,m("div",B,[m("img",{src:p(P),alt:""},null,8,E)]),M,b(o,{type:"primary",class:"submit-btn",onClick:ee},{default:n((()=>[j("开始验证")])),_:1}),m("div",O,[m("img",{src:p("/h5insure/static/png/face_tip-d70e081d.png"),alt:""},null,8,W)])])])),_:1})}}}),[["__scopeId","data-v-8ae22750"]]);export{G as default};
