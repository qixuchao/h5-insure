!function(){var e=document.createElement("style");e.innerHTML=".page-activity-invite{width:100%;height:100%;background:linear-gradient(180deg,#fea64a 0%,#fc7429 88%,#fc6d24 100%)}.page-activity-invite .banner{width:100%}.page-activity-invite .container{position:absolute;width:100%;bottom:.8rem;padding:.26667rem}.page-activity-invite .container .title{margin:auto;margin-top:-1.6rem;width:calc(100% - .8rem)}.page-activity-invite .container .title img{width:100%}.page-activity-invite .container .main-form{background:url(/static/assets/bg.c7f48ab0.png) no-repeat;background-size:100% 100%;position:relative;padding:1.33333rem 0 .6rem}.page-activity-invite .container .main-form .sms-code{width:2rem;text-align:center;font-size:.4rem;font-weight:500;color:var(--van-primary-color);padding:0;white-space:nowrap}.page-activity-invite .container .main-form .submit{height:1.33333rem;margin-top:.53333rem;margin-bottom:.46667rem;background:url(/static/assets/button.4c281a6e.png) no-repeat;background-size:contain;background-position:center;border:none}.page-activity-invite .container .main-form .agree{padding:0 .33333rem;font-size:.37333rem;font-weight:400;color:#666;display:flex;align-items:flex-start}.page-activity-invite .container .main-form .agree .check-wrap{margin-right:.26667rem}.page-activity-invite .container .main-form .van-cell .van-field__value{align-items:flex-start}.page-activity-invite .van-field__body{width:100%}\n",document.head.appendChild(e),System.register(["./vendor-legacy-2ed1ad67.js","./infoCollection-legacy-463c6cf6.js","./phoneVerify-legacy-a37634b0.js","./validator-legacy-70be20af.js","./utils-legacy-5b32a74b.js","./index-legacy-1674a728.js","./trial-legacy-a9d0b782.js","./product-legacy-a9d70530.js","./theme-legacy-0d67cf8b.js","./trial-legacy-f8bf9839.js"],(function(e){"use strict";var a,t,n,l,o,i,r,s,c,u,d,m,v,f,g,p,h,b,y,I,C,w,V,k,N,x,_,j,O,L,U,D,M,S,q;return{setters:[function(e){a=e.g,t=e.E,n=e.M,l=e._,o=e.r,i=e.j,r=e.k,s=e.m,c=e.p,u=e.A,d=e.z,m=e.J,v=e.L,f=e.T,g=e.O,p=e.a9,h=e.h,b=e.n,y=e.G,I=e.F,C=e.C},function(e){w=e.R},function(e){V=e.s,k=e.c},function(e){N=e.v,x=e.a,_=e.b},function(e){j=e.F,O=e.g},function(e){L=e.G},function(e){U=e.g,D=e.m,M=e.i},function(e){S=e.p},function(e){q=e.t},function(){}],execute:function(){const E=a({props:{userInfo:{type:Object,default:()=>{}}},emits:["on-verify"],setup(e,{emit:a}){var g;const p=e,h=t({}),b=t(!1),y=t(0),I=t("获取验证码"),C=n({mobile:null===(g=p.userInfo)||void 0===g?void 0:g.mobile,smsCode:""}),w=e=>!!N(e)||"请输入正确的手机号",_=e=>!!x(e)||"请输入正确的验证码",O=async()=>{y.value>0||null==h||h.value.validate("mobile").then((async()=>{const e=await V(C.mobile),{code:a,data:t}=e;"10000"===a&&(b.value=!0,f({message:"短信发送成功，请查收"}),(()=>{if(y.value>0)return;y.value=30;const e=()=>{I.value=`${y.value}s`,y.value-=1};e();const a=setInterval((()=>{0===y.value?(I.value="获取验证码",y.value=0,clearInterval(a)):e()}),1e3)})())}))},L=async()=>{const e=await k(C.mobile,C.smsCode),{data:t}=e;t&&a("on-verify",C)},U=async()=>{null==h||h.value.validate().then((async()=>{L()}))};return l((()=>C),(()=>{N(C.mobile)&&x(C.smsCode)&&b.value&&L()}),{deep:!0,immediate:!0}),(e,a)=>{const t=o("van-field"),n=o("van-cell-group"),l=o("VanForm");return i(),r(l,{ref_key:"formRef",ref:h,"label-width":"80"},{default:s((()=>[c(n,null,{default:s((()=>[c(t,{modelValue:u(C).mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>u(C).mobile=e),name:"mobile",label:"手机号",clearable:"",placeholder:"请输入手机号",maxlength:u(j).MOBILE,rules:[{validator:w}]},null,8,["modelValue","maxlength","rules"]),c(t,{modelValue:u(C).smsCode,"onUpdate:modelValue":a[1]||(a[1]=e=>u(C).smsCode=e),name:"smsCode",label:"验证码",clearable:"",placeholder:"请输入验证码",maxlength:u(j).SMS_CODE,rules:[{validator:_}]},{button:s((()=>[d("div",{class:v(["sms-code",{"count-down":y.value>0}]),onClick:O},m(I.value),3)])),_:1},8,["modelValue","maxlength","rules"])])),_:1}),d("div",{class:"submit",onClick:U})])),_:1},512)}}}),F=a({props:{userInfo:{type:Object,default:()=>{}}},emits:["on-submit"],setup(e,{emit:a}){const l=e,m=t({}),v=n({name:l.userInfo.name,certNo:l.userInfo.certNo}),f=e=>!!L(v.certNo)||"请填写正确的证件号",g=e=>!!_(e)||"请输入正确的姓名",p=()=>{null==m||m.value.validate().then((async e=>{a("on-submit",v)}))};return(e,a)=>{const t=o("van-field"),n=o("van-cell-group"),l=o("VanForm");return i(),r(l,{ref_key:"formRef",ref:m,"label-width":"80"},{default:s((()=>[c(n,null,{default:s((()=>[c(t,{modelValue:u(v).name,"onUpdate:modelValue":a[0]||(a[0]=e=>u(v).name=e),name:"name",label:"姓名",clearable:"",placeholder:"请输入姓名",maxlength:u(j).NAME,rules:[{validator:g}]},null,8,["modelValue","maxlength","rules"]),c(t,{modelValue:u(v).certNo,"onUpdate:modelValue":a[1]||(a[1]=e=>u(v).certNo=e),name:"certNo",label:"身份证",clearable:"",placeholder:"请输入身份证号",maxlength:u(j).ID_CARD,rules:[{validator:f}]},null,8,["modelValue","maxlength","rules"])])),_:1}),d("div",{class:"submit",onClick:p})])),_:1},512)}}});const P={class:"page-activity-invite"},z=["src"],R={class:"container"},T={class:"main-form"},H={class:"title"},A=["src"],B={class:"agree"},G={class:"check-wrap"},J=C(" 我已阅读并同意 ");e("default",a({setup(e){const a=g(),l=p(),{productCode:m="7X9",tenantId:v="",phoneNo:C,saleChannelId:V,agentCode:k,paymentMethod:N,from:x}=a.query,_=t(!0),j=n({title:"/static/assets/title-step1.97cb9efa.png",attachmentList:[{attachmentName:"",attachmentUri:""}],userInfo:{mobile:C,certNo:"",name:""},agree:!1}),L=t(),W=t(),Y=async e=>{if(j.userInfo.mobile=e.mobile,"check"===x)return j.agree?void l.push({path:"/chuangxin/baigebao/productDetail",query:{...a.query,tenantId:v,phoneNo:j.userInfo.mobile,productCode:"BWYL2021"}}):void f("请勾选协议");const t=await U({holderPhone:j.userInfo.mobile,productCode:m,tenantId:v}),{code:n,data:o}=t;var i,r;"10000"===n&&(j.userInfo.name=null===(i=o.tenantOrderHolder)||void 0===i?void 0:i.name,j.userInfo.certNo=null===(r=o.tenantOrderHolder)||void 0===r?void 0:r.certNo);j.title="/static/assets/title-step2.258af5e9.png",_.value=!1},$=async e=>{if(j.agree)try{f({message:"领取中...",forbidClick:!0,loadingType:"spinner"}),j.userInfo.certNo=e.certNo,j.userInfo.name=e.name;const t=O({tenantId:v,detail:L.value,insureDetail:W.value,saleChannelId:V,saleUserId:k,holder:j.userInfo,insured:{...j.userInfo,relationToHolder:w.SELF},paymentMethod:N,renewalDK:"",successJumpUrl:"",premium:0,orderStatus:"",orderTopStatus:"",tenantOrderRiskList:[]}),n=await D(t),{code:o}=n;"10000"===o&&l.push({path:"/chuangxin/baigebao/productDetail",query:{...a.query,tenantId:v,phoneNo:j.userInfo.mobile,certNo:j.userInfo.certNo,name:j.userInfo.name,productCode:"BWYL2021",agentCode:k}})}catch(t){f.clear()}else f("请勾选协议")};return h((()=>{(async()=>{const e=S({productCode:m,withInsureInfo:!0,tenantId:v}),a=M({productCode:m});Promise.all([e,a]).then((([e,a])=>{var t,n;"10000"===e.code&&(L.value=e.data,j.attachmentList=(null===(t=L.value)||void 0===t||null===(n=t.tenantProductInsureVO)||void 0===n?void 0:n.attachmentVOList)||[]),"10000"===a.code&&(W.value=a.data)}))})()})),(e,a)=>{const t=o("van-checkbox"),n=o("ProPDFviewer"),l=o("van-config-provider");return i(),r(l,{"theme-vars":u(q)},{default:s((()=>{var e,l;return[d("div",P,[d("img",{src:null===(e=L.value)||void 0===e||null===(l=e.tenantProductInsureVO)||void 0===l?void 0:l.banner[0],class:"banner"},null,8,z),d("div",R,[d("div",T,[d("div",H,[d("img",{src:u(j).title},null,8,A)]),_.value?(i(),r(E,{key:0,"user-info":u(j).userInfo,onOnVerify:Y},null,8,["user-info"])):(i(),r(F,{key:1,"user-info":u(j).userInfo,onOnSubmit:$},null,8,["user-info"])),d("div",B,[d("div",G,[c(t,{modelValue:u(j).agree,"onUpdate:modelValue":a[0]||(a[0]=e=>u(j).agree=e),name:"agree",shape:"square"},null,8,["modelValue"])]),d("div",null,[J,(i(!0),b(I,null,y(u(j).attachmentList||[],((e,a)=>(i(),r(n,{key:a,class:"file-name",title:`《${e.attachmentName}》`,content:e.attachmentUri,type:"pdf"},null,8,["title","content"])))),128))])])])])])]})),_:1},8,["theme-vars"])}}}))}}}))}();
