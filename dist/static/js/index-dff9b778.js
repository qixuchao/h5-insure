import{K as e,d as a,r as s,G as l,y as o,q as t,B as r,aW as n,c as d,e as u,w as p,f as i,g as m,j as c,n as g,ac as f,T as w,b as y}from"./index-2cd34051.js";import"./pdfh5-008ca364.js";const b={style:{margin:"16px"}},h=a({__name:"index",setup(a){const h=s({loginName:"13122312351",password:"M5p8uqT3RS3u89B2",loginType:"1"}),S=()=>{const a=new f({source:"localStorage"});((a={})=>e({url:"/api/app/login",method:"POST",data:a}))(h.value).then((({code:e,data:s})=>{"10000"===e&&(w("登录成功"),a.set("token",s.token),a.set("userInfo",JSON.stringify(s)),window.location.href="/")}))};return l((()=>{localStorage.clear(),document.cookie=""})),(e,a)=>{const s=o,l=t,f=r,w=n,V=y("ProPageWrap");return d(),u(V,{class:"page-login-wrapper"},{default:p((()=>[i(w,{onSubmit:S},{default:p((()=>[i(l,{inset:""},{default:p((()=>[i(s,{modelValue:m(h).loginName,"onUpdate:modelValue":a[0]||(a[0]=e=>m(h).loginName=e),name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),i(s,{modelValue:m(h).password,"onUpdate:modelValue":a[1]||(a[1]=e=>m(h).password=e),type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])])),_:1}),c("div",b,[i(f,{round:"",block:"",type:"primary","native-type":"submit"},{default:p((()=>[g(" 提交 ")])),_:1})])])),_:1})])),_:1})}}});export{h as default};
