import{B as e,d as a,r as l,z as o,b as s,c as t,e as n,w as r,f as d,i as u,n as p,S as i,T as m}from"./index-b655107d.js";import"./pdfdist-666d4573.js";const c={style:{margin:"16px"}},g=p(" 提交 "),f=a({setup(a){const p=l({loginName:"13122312351",password:"M5p8uqT3RS3u89B2",loginType:"1"}),f=()=>{const a=new i({source:"localStorage"});((a={})=>e({url:"/api/app/login",method:"POST",data:a}))(p.value).then((({code:e,data:l})=>{"10000"===e&&(m("登录成功"),a.set("token",l.token),a.set("userInfo",JSON.stringify(l)),window.location.href="/")}))};return o((()=>{localStorage.clear(),document.cookie=""})),(e,a)=>{const l=s("van-field"),o=s("van-cell-group"),i=s("van-button"),m=s("van-form"),v=s("ProPageWrap");return t(),n(v,{class:"page-login-wrapper"},{default:r((()=>[d(m,{onSubmit:f},{default:r((()=>[d(o,{inset:""},{default:r((()=>[d(l,{modelValue:p.value.loginName,"onUpdate:modelValue":a[0]||(a[0]=e=>p.value.loginName=e),name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),d(l,{modelValue:p.value.password,"onUpdate:modelValue":a[1]||(a[1]=e=>p.value.password=e),type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])])),_:1}),u("div",c,[d(i,{round:"",block:"",type:"primary","native-type":"submit"},{default:r((()=>[g])),_:1})])])),_:1})])),_:1})}}});export{f as default};
