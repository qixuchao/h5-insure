import{_ as e,d as a,i as l,h as t,j as s,k as o,O as r,l as d,o as i,m as c,w as n,a as u,e as m,u as p,cu as b,b as f,V as v,W as y,cm as h,cn as g,a8 as N,bq as C,co as j,cp as _,ai as T,aE as I,aF as q,cA as V,cz as U}from"./index-0fa7bd0a.js";import{g as k}from"./trial-4d71ae9d.js";import{c as x}from"./format-31cde443.js";import{u as w}from"./useOrder-e2b5b5c2.js";import{P as z}from"./constants-4b08cf92.js";const P=e=>(I("data-v-24d45b26"),e=e(),q(),e),$={class:"page-phone-verify"},A={class:"title"},E=P((()=>u("div",{class:"title face-title"},"人脸识别",-1))),S={class:"face-verify-img"},L=["src"],O=P((()=>u("div",{class:"face-verify-tip"},[u("div",{class:"title"},"操作时请您配合"),u("ol",null,[u("li",null,"请调亮手机屏幕亮度，确保光线充足"),u("li",null,"请保持正脸对准屏幕，确保人脸完整清晰"),u("li",null,"请确保真实本人操作")])],-1))),W={class:"tips"},F=["src"];var M=e(a({__name:"phoneVerify",setup(e){const a=w(),I=l(),q=t(),{agentCode:P,tenantId:M,nextPageCode:R,biz_id:B,orderNo:D,objectType:G,orderCode:H}=I.query,J=s({mobile:"",verifyCode:""}),K=s(),Q=s(),X=o((()=>Array.isArray(G)?`${null==G?void 0:G[0]}`.toLocaleUpperCase():`${G}`.toLocaleUpperCase())),Y=()=>{k({orderNo:H||D,tenantId:M}).then((({code:e,data:l})=>{if("10000"===e){Object.assign(a.value,l);const{holder:e,insuredList:t}=l;if("holder"===G){const{name:a,certNo:l,certType:t,id:s,mobile:o}=e;J.value.mobile=o,Q.value={userName:a,certiNo:l,certType:t,objectId:s}}else{const{name:e,certNo:a,certType:l,id:s,mobile:o}=(null==t?void 0:t[0])||{};J.value.mobile=o,Q.value={userName:e,certiNo:a,certType:l,objectId:s}}B&&(()=>{const{objectId:e,certType:a}=Q.value,l={bizId:B,certType:a,objectId:e,objectType:X.value,orderNo:D,tenantId:M};V(l).then((({code:e,data:a})=>{"10000"===e&&"SUCCESS"===a.status&&(delete I.query.biz_id,delete I.query.nextPageCode,q.push({path:z[`${R}`],query:{...I.query,isShare:1}}))}))})()}}))},Z=()=>{var e,a;null==(a=null==(e=K.value)?void 0:e.validate)||a.call(e).then((()=>{(()=>{const{userName:e,certiNo:a,certType:l}=Q.value,t={tenantId:M,faceAuthMode:"TENCENT",callbackUrl:window.location.href,bizNo:D,userName:e,certiNo:a,certType:l};U(t).then((({code:e,data:a})=>{"10000"===e&&(window.location.href=a.originalUrl)}))})()}))};return r((()=>{Y()})),(e,a)=>{const l=C,t=j,s=_,o=T,r=d("ProPageWrap");return i(),c(r,null,{default:n((()=>[u("div",$,[u("div",A,m(`${p(b)[p(X)]}手机号验证 ${p(x)(p(J).mobile||"")}`),1),f(s,{ref_key:"formRef",ref:K,"validate-method":"toast",model:p(J)},{default:n((()=>[v(f(l,{modelValue:p(J).mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>p(J).mobile=e),label:"被保人手机号",name:"mobile",maxlength:"11",required:""},null,8,["modelValue"]),[[y,!1]]),f(t,{modelValue:p(J).verifyCode,"onUpdate:modelValue":a[1]||(a[1]=e=>p(J).verifyCode=e),"related-name":"mobile",label:" ",maxlength:"6","input-align":"left",placeholder:"请输入验证码",name:"verifyCode",rules:[{required:!0,message:"请输入验证码"}],"send-s-m-s-code":p(h),"check-s-m-s-code":p(g)},null,8,["modelValue","send-s-m-s-code","check-s-m-s-code"])])),_:1},8,["model"]),E,u("div",S,[u("img",{src:p("/static/png/face_img-4ac5b4e1.png"),alt:""},null,8,L)]),O,f(o,{type:"primary",class:"submit-btn",onClick:Z},{default:n((()=>[N("开始验证")])),_:1}),u("div",W,[u("img",{src:p("/static/png/face_tip-d70e081d.png"),alt:""},null,8,F)])])])),_:1})}}}),[["__scopeId","data-v-24d45b26"]]);export{M as default};
