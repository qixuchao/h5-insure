System.register(["./vendor-legacy-2ed1ad67.js","./index-legacy-cbd85720.js"],(function(e){"use strict";var a,l,o,n,t,r,u,s,d,i,c,p,m;return{setters:[function(e){a=e.g,l=e.E,o=e.h,n=e.r,t=e.j,r=e.k,u=e.m,s=e.p,d=e.z,i=e.C,c=e.T},function(e){p=e.b,m=e.S}],execute:function(){const g={style:{margin:"16px"}},f=i(" 提交 ");e("default",a({setup(e){const a=l({loginName:"13122312351",password:"M5p8uqT3RS3u89B2",loginType:"1"}),i=()=>{const e=new m({source:"localStorage"});((e={})=>p.post("/api/app/login",e))(a.value).then((({code:a,data:l})=>{"10000"===a&&(c("登录成功"),e.set("token",l.token),e.set("userInfo",JSON.stringify(l)),window.location.href="/")}))};return o((()=>{localStorage.clear(),document.cookie=""})),(e,l)=>{const o=n("van-field"),c=n("van-cell-group"),p=n("van-button"),m=n("van-form"),v=n("ProPageWrap");return t(),r(v,{class:"page-login-wrapper"},{default:u((()=>[s(m,{onSubmit:i},{default:u((()=>[s(c,{inset:""},{default:u((()=>[s(o,{modelValue:a.value.loginName,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value.loginName=e),name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),s(o,{modelValue:a.value.password,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value.password=e),type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])])),_:1}),d("div",g,[s(p,{round:"",block:"",type:"primary","native-type":"submit"},{default:u((()=>[f])),_:1})])])),_:1})])),_:1})}}}))}}}));
