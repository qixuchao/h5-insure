import{d as e,r as a,ar as l,R as t,N as n,Z as o,B as s,b as r,g as m,w as p,e as i,j as d,f as b,c as u,a4 as y,U as c,i as f,a6 as g}from"./index-a248c81d.js";import{A as j}from"./bankCard-d49f6aeb.js";import{b as k,j as h,e as x,k as v,h as _,f as q,d as D}from"./PayInfo-2936f9db.js";import"./merge-c5599fa4.js";import"./keysIn-a287568b.js";import"./isObjectLike-a9798079.js";import"./_getTag-7f09858e.js";import"./debounce-6981b306.js";import"./phoneVerify-97cbc32b.js";import"./index-7bb78c39.js";import"./useDicData-0bd32ffb.js";const C={style:{margin:"16px"}},T=e({__name:"index",setup(e){const T=a(null),R=[{label:"男",value:"1"},{label:"女 ",value:"2"}],w=[{type:"input",label:"邮箱地址",name:"input",ruleType:"email",required:!0}],F=[{type:"single",label:"单个日期",name:"single"},{type:"multiple",label:"多个日期",name:"multiple"},{type:"range",label:"日期区间",name:"range"}],I=[{type:"datetime",label:"完整时间"},{type:"date",label:"年月日"},{type:"time",label:"时间"},{type:"year-month",label:"年月"},{type:"month-day",label:"月日"},{type:"datehour",label:"年月日小时"}],P=l({formData:{sex:1},date:"",tel:"",birthday:"03:11",show:!1}),A=e=>{console.log(11111111,e),console.log("formData",e,T.value.children,P.date)},B=e=>{console.log(2222222,e),T.value.validate().then((e=>{}))};return t((()=>{console.log("demoFormRef",T.value.children)})),n((()=>P.formData.sex),(()=>{console.log(P.formData),console.log("%c🔥 表单数据改动了","color:#1989fa;background:#5e4;padding:3px 5px;")}),{immediate:!0,deep:!0}),(e,a)=>{const l=o("ProCalendarv2"),t=s;return r(),m(b(q),{ref_key:"demoFormRef",ref:T,model:b(P).formData,onSubmit:A},{default:p((()=>[i(b(k),{name:"phone",label:"手机号",required:"","slots-map":{nameTips:"extra"}},{nameTips:p((()=>[d(" extra ")])),_:1}),i(b(h),{name:"smsCode",label:"验证码","related-name":"phone"}),(r(),u(c,null,y(w,(({type:e,label:a,...l})=>i(b(k),g({key:e,name:e,type:e,label:a,required:""},l),null,16,["name","type","label"]))),64)),i(b(x),{label:"性别",name:"sex",columns:R,required:""}),i(b(v),{label:"地址",name:"address",columns:e.area},null,8,["columns"]),(r(),u(c,null,y(F,(({type:e,label:a})=>i(l,{key:e,name:e,type:e,label:a,required:""},null,8,["name","type","label"]))),64)),(r(),u(c,null,y(I,(({type:e,label:a})=>i(b(D),{key:e,name:e,type:e,label:a,required:""},null,8,["name","type","label"]))),64)),i(b(_),{name:"bank",label:"银行卡",columns:b(j),required:""},null,8,["columns"]),f("div",C,[i(t,{round:"",block:"",type:"primary","native-type":"submit"},{default:p((()=>[d(" 提交 ")])),_:1}),i(t,{round:"",block:"",type:"primary",onClick:B},{default:p((()=>[d(" 提交 ")])),_:1})])])),_:1},8,["model"])}}});export{T as default};
