import{a2 as e,d as a,j as o,O as s,ag as l,dp as r,l as t,o as d,m as n,w as u,b as p,u as i,a as m,a8 as c,cr as g,T as f,a1 as w}from"./index-b0d79264.js";import{C as b}from"./index-484d8275.js";const y={style:{margin:"16px"}},S=a({__name:"index",setup(a){const S=o({loginName:"13122312351",password:"M5p8uqT3RS3u89B2",loginType:"1"}),V=()=>{const a=new g({source:"localStorage"});((a={})=>e({url:"/api/app/login",method:"POST",data:a}))(S.value).then((({code:e,data:o})=>{"10000"===e&&(f("登录成功"),a.set("token",o.token),a.set("userInfo",JSON.stringify(o)),window.location.href="/")}))};return s((()=>{localStorage.clear(),document.cookie=""})),(e,a)=>{const o=w,s=b,g=l,f=r,_=t("ProPageWrap");return d(),n(_,{class:"page-login-wrapper"},{default:u((()=>[p(f,{onSubmit:V},{default:u((()=>[p(s,{inset:""},{default:u((()=>[p(o,{modelValue:i(S).loginName,"onUpdate:modelValue":a[0]||(a[0]=e=>i(S).loginName=e),name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),p(o,{modelValue:i(S).password,"onUpdate:modelValue":a[1]||(a[1]=e=>i(S).password=e),type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])])),_:1}),m("div",y,[p(g,{round:"",block:"",type:"primary","native-type":"submit"},{default:u((()=>[c(" 提交 ")])),_:1})])])),_:1})])),_:1})}}});export{S as default};
