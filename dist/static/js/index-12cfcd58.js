import{s as a,d as e,r as s,a1 as l,aM as o,bN as t,B as r,b9 as n,bz as d,b as u,g as p,w as i,e as m,f as c,i as g,j as f,aq as b,T as w}from"./index-1b2a9a19.js";import"./pdfh5-008ca364.js";const y={style:{margin:"16px"}},h=e({__name:"index",setup(e){const h=s({loginName:"13122312351",password:"M5p8uqT3RS3u89B2",loginType:"1"}),S=()=>{const e=new b({source:"localStorage"});((e={})=>a({url:"/api/app/login",method:"POST",data:e}))(h.value).then((({code:a,data:s})=>{"10000"===a&&(w("登录成功"),e.set("token",s.token),e.set("userInfo",JSON.stringify(s)),window.location.href="/")}))};return l((()=>{localStorage.clear(),document.cookie=""})),(a,e)=>{const s=o,l=t,b=r,w=n,V=d("ProPageWrap");return u(),p(V,{class:"page-login-wrapper"},{default:i((()=>[m(w,{onSubmit:S},{default:i((()=>[m(l,{inset:""},{default:i((()=>[m(s,{modelValue:c(h).loginName,"onUpdate:modelValue":e[0]||(e[0]=a=>c(h).loginName=a),name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),m(s,{modelValue:c(h).password,"onUpdate:modelValue":e[1]||(e[1]=a=>c(h).password=a),type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])])),_:1}),g("div",y,[m(b,{round:"",block:"",type:"primary","native-type":"submit"},{default:i((()=>[f(" 提交 ")])),_:1})])])),_:1})])),_:1})}}});export{h as default};
