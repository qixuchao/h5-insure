import{d as e,j as a,r as l,l as n,E as t,m as o,o as s,p as r,w as m,b as d,v as u,u as p,bE as i,cB as b,c as y,s as c,a8 as f,F as g,di as h,ed as x,dh as v,dm as k,a as q,cC as _,ar as D}from"./index-7bdfed5a.js";import{A as C}from"./PolicyInfo-891103f4.js";const j={style:{margin:"16px"}},F=e({__name:"index",setup(e){const F=a(null),T=[{label:"男",value:"1"},{label:"女 ",value:"2"}],w=[{type:"input",label:"邮箱地址",name:"input",ruleType:"email",required:!0}],E=[{type:"single",label:"单个日期",name:"single"},{type:"multiple",label:"多个日期",name:"multiple"},{type:"range",label:"日期区间",name:"range"}],P=[{type:"datetime",label:"完整时间"},{type:"date",label:"年月日"},{type:"time",label:"时间"},{type:"year-month",label:"年月"},{type:"month-day",label:"月日"},{type:"datehour",label:"年月日小时"}],R=l({formData:{sex:1},date:"",tel:"",birthday:"03:11",show:!1}),A=e=>{console.log(11111111,e),console.log("formData",e,F.value.children,R.date)},B=e=>{console.log(2222222,e),F.value.validate().then((e=>{}))};return n((()=>{console.log("demoFormRef",F.value.children)})),t((()=>R.formData.sex),(()=>{console.log(R.formData),console.log("%c🔥 表单数据改动了","color:#1989fa;background:#5e4;padding:3px 5px;")}),{immediate:!0,deep:!0}),(e,a)=>{const l=o("ProCalendarv2"),n=D;return s(),r(p(_),{ref_key:"demoFormRef",ref:F,model:p(R).formData,onSubmit:A},{default:m((()=>[d(p(i),{name:"phone",label:"手机号",required:"","slots-map":{nameTips:"extra"}},{nameTips:m((()=>[u(" extra ")])),_:1}),d(p(b),{name:"smsCode",label:"验证码","related-name":"phone"}),(s(),y(g,null,c(w,(({type:e,label:a,...l})=>d(p(i),f({key:e,name:e,type:e,label:a,required:""},l),null,16,["name","type","label"]))),64)),d(p(h),{label:"性别",name:"sex",columns:T,required:""}),d(p(x),{label:"地址",name:"address",columns:e.area},null,8,["columns"]),(s(),y(g,null,c(E,(({type:e,label:a})=>d(l,{key:e,name:e,type:e,label:a,required:""},null,8,["name","type","label"]))),64)),(s(),y(g,null,c(P,(({type:e,label:a})=>d(p(v),{key:e,name:e,type:e,label:a,required:""},null,8,["name","type","label"]))),64)),d(p(k),{name:"bank",label:"银行卡",columns:p(C),required:""},null,8,["columns"]),q("div",j,[d(n,{round:"",block:"",type:"primary","native-type":"submit"},{default:m((()=>[u(" 提交 ")])),_:1}),d(n,{round:"",block:"",type:"primary",onClick:B},{default:m((()=>[u(" 提交 ")])),_:1})])])),_:1},8,["model"])}}});export{F as default};
