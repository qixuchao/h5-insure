import{a2 as a,d as e,j as o,O as s,ag as l,dy as t,l as r,o as n,m as d,w as u,b as i,u as p,a as m,a8 as c,cA as g,T as f,a1 as w}from"./index-18029af6.js";import{C as b}from"./index-fb94b246.js";const y={style:{margin:"16px"}},S=e({__name:"index",setup(e){const S=o({loginName:"13122312351",password:"M5p8uqT3RS3u89B2",loginType:"1"}),V=()=>{const e=new g({source:"localStorage"});((e={})=>a({url:"/api/app/login",method:"POST",data:e}))(S.value).then((({code:a,data:o})=>{"10000"===a&&(f("登录成功"),e.set("token",o.token),e.set("userInfo",JSON.stringify(o)),window.location.href="/")}))};return s((()=>{localStorage.clear(),document.cookie=""})),(a,e)=>{const o=w,s=b,g=l,f=t,_=r("ProPageWrap");return n(),d(_,{class:"page-login-wrapper"},{default:u((()=>[i(f,{onSubmit:V},{default:u((()=>[i(s,{inset:""},{default:u((()=>[i(o,{modelValue:p(S).loginName,"onUpdate:modelValue":e[0]||(e[0]=a=>p(S).loginName=a),name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),i(o,{modelValue:p(S).password,"onUpdate:modelValue":e[1]||(e[1]=a=>p(S).password=a),type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])])),_:1}),m("div",y,[i(g,{round:"",block:"",type:"primary","native-type":"submit"},{default:u((()=>[c(" 提交 ")])),_:1})])])),_:1})])),_:1})}}});export{S as default};
