import{d as e,j as a,r as l,O as n,B as t,l as o,ag as s,o as r,m,w as u,b as p,a8 as d,u as i,bn as b,cn as y,c,q as f,a0 as g,F as x,cU as h,dO as k,cT as v,cW as q,a as _,co as D}from"./index-26f63535.js";import{A as T}from"./PolicyInfo-21816b07.js";const j={style:{margin:"16px"}},C=e({__name:"index",setup(e){const C=a(null),F=[{label:"男",value:"1"},{label:"女 ",value:"2"}],w=[{type:"input",label:"邮箱地址",name:"input",ruleType:"email",required:!0}],O=[{type:"single",label:"单个日期",name:"single"},{type:"multiple",label:"多个日期",name:"multiple"},{type:"range",label:"日期区间",name:"range"}],P=[{type:"datetime",label:"完整时间"},{type:"date",label:"年月日"},{type:"time",label:"时间"},{type:"year-month",label:"年月"},{type:"month-day",label:"月日"},{type:"datehour",label:"年月日小时"}],R=l({formData:{sex:1},date:"",tel:"",birthday:"03:11",show:!1}),A=e=>{console.log(11111111,e),console.log("formData",e,C.value.children,R.date)},B=e=>{console.log(2222222,e),C.value.validate().then((e=>{}))};return n((()=>{console.log("demoFormRef",C.value.children)})),t((()=>R.formData.sex),(()=>{console.log(R.formData),console.log("%c🔥 表单数据改动了","color:#1989fa;background:#5e4;padding:3px 5px;")}),{immediate:!0,deep:!0}),(e,a)=>{const l=o("ProCalendarv2"),n=s;return r(),m(i(D),{ref_key:"demoFormRef",ref:C,model:i(R).formData,onSubmit:A},{default:u((()=>[p(i(b),{name:"phone",label:"手机号",required:"","slots-map":{nameTips:"extra"}},{nameTips:u((()=>[d(" extra ")])),_:1}),p(i(y),{name:"smsCode",label:"验证码","related-name":"phone"}),(r(),c(x,null,f(w,(({type:e,label:a,...l})=>p(i(b),g({key:e,name:e,type:e,label:a,required:""},l),null,16,["name","type","label"]))),64)),p(i(h),{label:"性别",name:"sex",columns:F,required:""}),p(i(k),{label:"地址",name:"address",columns:e.area},null,8,["columns"]),(r(),c(x,null,f(O,(({type:e,label:a})=>p(l,{key:e,name:e,type:e,label:a,required:""},null,8,["name","type","label"]))),64)),(r(),c(x,null,f(P,(({type:e,label:a})=>p(i(v),{key:e,name:e,type:e,label:a,required:""},null,8,["name","type","label"]))),64)),p(i(q),{name:"bank",label:"银行卡",columns:i(T),required:""},null,8,["columns"]),_("div",j,[p(n,{round:"",block:"",type:"primary","native-type":"submit"},{default:u((()=>[d(" 提交 ")])),_:1}),p(n,{round:"",block:"",type:"primary",onClick:B},{default:u((()=>[d(" 提交 ")])),_:1})])])),_:1},8,["model"])}}});export{C as default};
