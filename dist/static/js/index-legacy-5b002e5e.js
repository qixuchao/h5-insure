!function(){var e=document.createElement("style");e.innerHTML=".page-activity-invite{width:100%;height:100%;background:linear-gradient(180deg,#fea64a 0%,#fc7429 88%,#fc6d24 100%)}.page-activity-invite .logo{width:50%;margin:.4rem;position:absolute}.page-activity-invite .banner{width:100%}.page-activity-invite .container{position:absolute;width:100%;bottom:.8rem;padding:.26667rem}.page-activity-invite .container .title{margin:auto;margin-top:-1.6rem;width:calc(100% - .8rem)}.page-activity-invite .container .title img{width:100%}.page-activity-invite .container .main-form{background:url(/static/assets/bg.c7f48ab0.png) no-repeat;background-size:100% 100%;position:relative;padding:1.33333rem 0 .6rem}.page-activity-invite .container .main-form .sms-code{width:2rem;text-align:center;font-size:.4rem;font-weight:500;color:var(--van-primary-color);padding:0;white-space:nowrap}.page-activity-invite .container .main-form .submit{height:1.33333rem;margin-top:.53333rem;margin-bottom:.46667rem;background:url(/static/assets/button.4c281a6e.png) no-repeat;background-size:contain;background-position:center;border:none}.page-activity-invite .container .main-form .agree{padding:0 .33333rem;font-size:.37333rem;font-weight:400;color:#666;display:flex;align-items:flex-start}.page-activity-invite .container .main-form .van-cell .van-field__value{align-items:flex-start}.page-activity-invite .container .main-form .van-checkbox{width:1.33333rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-1e86c4b9.js","./infoCollection-legacy-f3c4910f.js","./phoneVerify-legacy-f76dd5ff.js","./validator-legacy-70be20af.js","./theme-legacy-fe611325.js","./index-legacy-ca03b902.js","./trial-legacy-f1c24b6c.js","./product-legacy-7fdb5784.js","./trial-legacy-58c7efcf.js"],(function(e){"use strict";var a,t,n,l,o,i,r,c,s,u,d,m,v,f,g,p,h,b,y,I,V,k,w,C,x,N,O,_,j,L,E,U,D,F,S,z;return{setters:[function(e){a=e.g,t=e.E,n=e.M,l=e._,o=e.r,i=e.j,r=e.k,c=e.m,s=e.p,u=e.A,d=e.z,m=e.J,v=e.L,f=e.T,g=e.O,p=e.a9,h=e.h,b=e.n,y=e.G,I=e.F,V=e.C},function(e){k=e.a},function(e){w=e.s,C=e.c},function(e){x=e.v,N=e.a,O=e.b},function(e){_=e.F,j=e.g,L=e.t,E=e.a},function(e){U=e.a3},function(e){D=e.g,F=e.m,S=e.i},function(e){z=e.p},function(){}],execute:function(){const M=a({props:{userInfo:{type:Object,default:()=>{}}},emits:["on-verify"],setup(e,{emit:a}){var g;const p=e,h=t({}),b=t(!1),y=t(0),I=t("获取验证码"),V=n({mobile:null===(g=p.userInfo)||void 0===g?void 0:g.mobile,smsCode:""}),k=e=>!!x(e)||"请输入正确的手机号",O=e=>!!N(e)||"请输入正确的验证码",j=async()=>{y.value>0||null==h||h.value.validate("mobile").then((async()=>{const e=await w(V.mobile),{code:a,data:t}=e;"10000"===a&&(b.value=!0,f({message:"短信发送成功，请查收"}),(()=>{if(y.value>0)return;y.value=30;const e=()=>{I.value=`${y.value}s`,y.value-=1};e();const a=setInterval((()=>{0===y.value?(I.value="获取验证码",y.value=0,clearInterval(a)):e()}),1e3)})())}))},L=async()=>{const e=await C(V.mobile,V.smsCode),{data:t}=e;t&&a("on-verify",V)},E=async()=>{null==h||h.value.validate().then((async()=>{L()}))};return l((()=>V),(()=>{x(V.mobile)&&N(V.smsCode)&&b.value&&L()}),{deep:!0,immediate:!0}),(e,a)=>{const t=o("van-field"),n=o("van-cell-group"),l=o("VanForm");return i(),r(l,{ref_key:"formRef",ref:h,"label-width":"60"},{default:c((()=>[s(n,null,{default:c((()=>[s(t,{modelValue:u(V).mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>u(V).mobile=e),name:"mobile",label:"手机号",clearable:"",placeholder:"请输入手机号",maxlength:u(_).MOBILE,rules:[{validator:k}]},null,8,["modelValue","maxlength","rules"]),s(t,{modelValue:u(V).smsCode,"onUpdate:modelValue":a[1]||(a[1]=e=>u(V).smsCode=e),name:"smsCode",label:"验证码",clearable:"",placeholder:"请输入验证码",maxlength:u(_).SMS_CODE,rules:[{validator:O}]},{button:c((()=>[d("div",{class:v(["sms-code",{"count-down":y.value>0}]),onClick:j},m(I.value),3)])),_:1},8,["modelValue","maxlength","rules"])])),_:1}),d("div",{class:"submit",onClick:E})])),_:1},512)}}}),P=a({props:{userInfo:{type:Object,default:()=>{}}},emits:["on-submit"],setup(e,{emit:a}){const l=e,m=t({}),v=n({name:l.userInfo.name,certNo:l.userInfo.certNo}),f=e=>!!U(v.certNo)||"请填写正确的证件号",g=e=>!!O(e)||"请输入正确的姓名",p=()=>{null==m||m.value.validate().then((async e=>{a("on-submit",v)}))};return(e,a)=>{const t=o("van-field"),n=o("van-cell-group"),l=o("VanForm");return i(),r(l,{ref_key:"formRef",ref:m,"label-width":"60"},{default:c((()=>[s(n,null,{default:c((()=>[s(t,{modelValue:u(v).name,"onUpdate:modelValue":a[0]||(a[0]=e=>u(v).name=e),name:"name",label:"姓名",clearable:"",placeholder:"请输入姓名",maxlength:u(_).NAME,rules:[{validator:g}]},null,8,["modelValue","maxlength","rules"]),s(t,{modelValue:u(v).certNo,"onUpdate:modelValue":a[1]||(a[1]=e=>u(v).certNo=e),name:"certNo",label:"身份证",clearable:"",placeholder:"请输入身份证号",maxlength:u(_).ID_CARD,rules:[{validator:f}]},null,8,["modelValue","maxlength","rules"])])),_:1}),d("div",{class:"submit",onClick:p})])),_:1},512)}}});const q={class:"page-activity-invite"},A=["src"],H={class:"container"},R={class:"main-form"},T={class:"title"},B=["src"],J={class:"agree"},$=V(" 我已阅读并同意 ");e("default",a({setup(e){const a=g(),l=p(),{productCode:m="7X9",tenantId:v="",extInfo:V}=a.query,w=j(V),C=t(!0),x=n({title:"/static/assets/title-step1.97cb9efa.png",attachmentList:[{attachmentName:"",attachmentUrl:""}],userInfo:{mobile:w.phoneNo,certNo:"",name:""},agree:!1}),N=t(),O=t(),_=async e=>{x.userInfo.mobile=e.mobile;const a=await D({holderPhone:x.userInfo.mobile,productCode:m,tenantId:v}),{code:t,data:n}=a;var l,o;"10000"===t&&(x.userInfo.name=null===(l=n.tenantOrderHolder)||void 0===l?void 0:l.name,x.userInfo.certNo=null===(o=n.tenantOrderHolder)||void 0===o?void 0:o.certNo);x.title="/static/assets/title-step2.258af5e9.png",C.value=!1},U=async e=>{if(x.agree)try{f({message:"领取中...",forbidClick:!0,loadingType:"spinner"}),x.userInfo.certNo=e.certNo,x.userInfo.name=e.name;const t=E({tenantId:v,detail:N.value,...w,holder:x.userInfo,insured:{...x.userInfo,relationToHolder:k.SELF}}),n=await F(t),{code:o}=n;"10000"===o&&l.push({path:"/chuangxin/baigebao/productDetail",query:{...a.query,tenantId:v,productCode:"BWYL2021",extInfo:JSON.stringify({...w,phoneNo:x.userInfo.mobile,certNo:x.userInfo.certNo,name:x.userInfo.name})}}),f.clear()}catch(t){f.clear()}else f("请勾选协议")},G=async()=>{const e=z({productCode:m,withInsureInfo:!0}),a=S({productCode:m});Promise.all([e,a]).then((([e,a])=>{"10000"===e.code&&(N.value=e.data),"10000"===a.code&&(O.value=a.data,x.attachmentList=(()=>{let e=[];return O.value.productRiskVoList.forEach((a=>{a.riskDetailVOList.forEach((a=>{e=e.concat(a.riskAttachmentVOList)}))})),e})())}))};return h((()=>{G()})),(e,a)=>{const t=o("van-checkbox"),n=o("ProPDFviewer"),l=o("van-config-provider");return i(),r(l,{"theme-vars":u(L)},{default:c((()=>{var e,l;return[d("div",q,[d("img",{src:null===(e=N.value)||void 0===e||null===(l=e.tenantProductInsureVO)||void 0===l?void 0:l.banner[0],class:"banner"},null,8,A),d("div",H,[d("div",R,[d("div",T,[d("img",{src:u(x).title},null,8,B)]),C.value?(i(),r(M,{key:0,"user-info":u(x).userInfo,onOnVerify:_},null,8,["user-info"])):(i(),r(P,{key:1,"user-info":u(x).userInfo,onOnSubmit:U},null,8,["user-info"])),d("div",J,[s(t,{modelValue:u(x).agree,"onUpdate:modelValue":a[0]||(a[0]=e=>u(x).agree=e),name:"agree",shape:"square"},null,8,["modelValue"]),d("div",null,[$,(i(!0),b(I,null,y(u(x).attachmentList||[],((e,a)=>(i(),r(n,{key:a,class:"file-name",title:`《${e.attachmentName}》`,content:e.attachmentUrl,type:"pdf"},null,8,["title","content"])))),128))])])])])])]})),_:1},8,["theme-vars"])}}}))}}}))}();
