import{i as e,r as a,k as l,l as o,m as s,n as r,p as t,t as n,B as u,G as d,T as p}from"./vendor-87894311.js";import{r as i,S as m}from"./index-881f6d78.js";const c={style:{margin:"16px"}},g=d(" 提交 "),f=e({setup(e){const d=a({loginName:"13122312351",password:"M5p8uqT3RS3u89B2",loginType:"1"}),f=()=>{const e=new m({source:"localStorage"});((e={})=>i({url:"/api/app/login",method:"POST",data:e}))(d.value).then((({code:a,data:l})=>{"10000"===a&&(p("登录成功"),e.set("token",l.token),e.set("userInfo",JSON.stringify(l)),window.location.href="/")}))};return l((()=>{localStorage.clear(),document.cookie=""})),(e,a)=>{const l=o("van-field"),p=o("van-cell-group"),i=o("van-button"),m=o("van-form"),v=o("ProPageWrap");return s(),r(v,{class:"page-login-wrapper"},{default:t((()=>[n(m,{onSubmit:f},{default:t((()=>[n(p,{inset:""},{default:t((()=>[n(l,{modelValue:d.value.loginName,"onUpdate:modelValue":a[0]||(a[0]=e=>d.value.loginName=e),name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),n(l,{modelValue:d.value.password,"onUpdate:modelValue":a[1]||(a[1]=e=>d.value.password=e),type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])])),_:1}),u("div",c,[n(i,{round:"",block:"",type:"primary","native-type":"submit"},{default:t((()=>[g])),_:1})])])),_:1})])),_:1})}}});export{f as default};
