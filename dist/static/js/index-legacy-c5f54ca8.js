System.register(["./index-legacy-b3b7dca5.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var a,l,o,t,n,r,s,u,d,i,c,p,m,g,f,y,w,b;return{setters:[function(e){a=e.K,l=e.d,o=e.r,t=e.G,n=e.y,r=e.q,s=e.B,u=e.aW,d=e.c,i=e.e,c=e.w,p=e.f,m=e.g,g=e.j,f=e.n,y=e.ac,w=e.T,b=e.b},function(){}],execute:function(){const S={style:{margin:"16px"}};e("default",l({__name:"index",setup(e){const l=o({loginName:"13122312351",password:"M5p8uqT3RS3u89B2",loginType:"1"}),h=()=>{const e=new y({source:"localStorage"});((e={})=>a({url:"/api/app/login",method:"POST",data:e}))(l.value).then((({code:a,data:l})=>{"10000"===a&&(w("登录成功"),e.set("token",l.token),e.set("userInfo",JSON.stringify(l)),window.location.href="/")}))};return t((()=>{localStorage.clear(),document.cookie=""})),(e,a)=>{const o=n,t=r,y=s,w=u,V=b("ProPageWrap");return d(),i(V,{class:"page-login-wrapper"},{default:c((()=>[p(w,{onSubmit:h},{default:c((()=>[p(t,{inset:""},{default:c((()=>[p(o,{modelValue:m(l).loginName,"onUpdate:modelValue":a[0]||(a[0]=e=>m(l).loginName=e),name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),p(o,{modelValue:m(l).password,"onUpdate:modelValue":a[1]||(a[1]=e=>m(l).password=e),type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])])),_:1}),g("div",S,[p(y,{round:"",block:"",type:"primary","native-type":"submit"},{default:c((()=>[f(" 提交 ")])),_:1})])])),_:1})])),_:1})}}}))}}}));
