!function(){var e=document.createElement("style");e.innerHTML=".van-config-provider.router-view{background:linear-gradient(180deg,#fea64a 0%,#fc7429 88%,#fc6d24 100%)}.page-activity-invite{width:100%;height:100%;background:linear-gradient(180deg,#fea64a 0%,#fc7429 88%,#fc6d24 100%)}.page-activity-invite .banner{width:100%}.page-activity-invite .container{width:100%;padding:.26667rem}.page-activity-invite .container .main-form{background:url(/static/assets/bg.c7f48ab0.png) no-repeat;background-size:100% 100%;position:relative;padding:.6rem 0}.page-activity-invite .container .main-form .sms-code{width:2rem;text-align:center;font-size:.4rem;font-weight:500;color:var(--van-primary-color);padding:0;white-space:nowrap}.page-activity-invite .container .main-form .submit{height:2.66667rem;margin-top:.53333rem;background:url(/static/assets/check.689cf047.gif) no-repeat;background-size:contain;background-position:center;border:none}.page-activity-invite .van-field__body{width:100%}\n",document.head.appendChild(e),System.register(["./vendor-legacy-92a8f610.js","./phoneVerify-legacy-26b66210.js","./validator-legacy-70be20af.js","./utils-legacy-9a5e8c15.js","./theme-legacy-0d67cf8b.js","./index-legacy-5669ccac.js","./trial-legacy-f7019125.js"],(function(e){"use strict";var a,n,t,i,o,l,c,r,s,u,d,m,v,f,g,p,b,h,y,k,C,w,I;return{setters:[function(e){a=e.g,n=e.E,t=e.M,i=e._,o=e.r,l=e.j,c=e.k,r=e.m,s=e.p,u=e.A,d=e.z,m=e.J,v=e.L,f=e.T,g=e.O,p=e.a9,b=e.t},function(e){h=e.s,y=e.c},function(e){k=e.v,C=e.a},function(e){w=e.F},function(e){I=e.t},function(){},function(){}],execute:function(){const j=a({props:{isCheck:{type:Boolean,default:!1},userInfo:{type:Object,default:()=>{}}},emits:["on-verify"],setup(e,{emit:a}){var g;const p=e,b=n({}),I=n(!1),j=n(0),V=n("获取验证码"),_=t({mobile:null===(g=p.userInfo)||void 0===g?void 0:g.mobile,smsCode:""}),x=e=>!!k(e)||"请输入正确的手机号",M=e=>!!C(e)||"请输入正确的验证码",O=async()=>{j.value>0||null==b||b.value.validate("mobile").then((async()=>{const e=await h(_.mobile),{code:a,data:n}=e;"10000"===a&&(I.value=!0,f({message:"短信发送成功，请查收"}),(()=>{if(j.value>0)return;j.value=30;const e=()=>{V.value=`${j.value}s`,j.value-=1};e();const a=setInterval((()=>{0===j.value?(V.value="获取验证码",j.value=0,clearInterval(a)):e()}),1e3)})())}))},z=async()=>{const e=await y(_.mobile,_.smsCode),{data:n}=e;n&&a("on-verify",_)},E=async()=>{null==b||b.value.validate().then((async()=>{z()}))};return i((()=>_),(()=>{k(_.mobile)&&C(_.smsCode)&&I.value&&z()}),{deep:!0,immediate:!0}),(e,a)=>{const n=o("van-field"),t=o("van-cell-group"),i=o("VanForm");return l(),c(i,{ref_key:"formRef",ref:b,"label-width":"80"},{default:r((()=>[s(t,null,{default:r((()=>[s(n,{modelValue:u(_).mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>u(_).mobile=e),name:"mobile",label:"手机号",clearable:"",placeholder:"请输入手机号",maxlength:u(w).MOBILE,rules:[{validator:x}]},null,8,["modelValue","maxlength","rules"]),s(n,{modelValue:u(_).smsCode,"onUpdate:modelValue":a[1]||(a[1]=e=>u(_).smsCode=e),name:"smsCode",label:"验证码",clearable:"",placeholder:"请输入验证码",maxlength:u(w).SMS_CODE,rules:[{validator:M}]},{button:r((()=>[d("div",{class:v(["sms-code",{"count-down":j.value>0}]),onClick:O},m(V.value),3)])),_:1},8,["modelValue","maxlength","rules"])])),_:1}),d("div",{class:v([{"check-submit":p.isCheck},{submit:!p.isCheck}]),onClick:E},null,2)])),_:1},512)}}});const V={class:"page-activity-invite"},_=["src"],x={class:"container"},M={class:"main-form"};e("default",a({setup(e){const a=g(),i=p(),{productCode:s="7X9",tenantId:m="",phoneNo:v,saleChannelId:f,agentCode:h="",paymentMethod:y,from:k}=a.query,C=n(!0),w=t({userInfo:{mobile:v,name:""}}),O=async e=>{w.userInfo.mobile=e.mobile,i.push({path:"/chuangxin/baigebao/productDetail",query:{...a.query,tenantId:m,phoneNo:w.userInfo.mobile,productCode:"BWYL2021"}})};return(e,a)=>{const n=o("van-config-provider");return l(),c(n,{"theme-vars":u(I)},{default:r((()=>[d("div",V,[d("img",{src:u("/static/assets/check-img.a2b49089.png"),class:"banner"},null,8,_),d("div",x,[d("div",M,[C.value?(l(),c(j,{key:0,"is-check":e.isCheck,"user-info":u(w).userInfo,onOnVerify:O},null,8,["is-check","user-info"])):b("",!0)])])])])),_:1},8,["theme-vars"])}}}))}}}))}();
