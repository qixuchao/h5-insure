import{d as e,k as a,r as l,O as t,z as n,m as o,aR as s,o as r,n as m,w as p,b as d,a8 as i,u as b,c as u,f as c,F as y,a as f,a0 as g}from"./index-dc5ec44c.js";import{A as j}from"./bankCard-52413981.js";import{_ as k,b as x,f as h,j as v,h as _,d as q,e as D}from"./index-7d2ccc5b.js";import"./PayInfo-9d519310.js";import"./keysIn-131bbce9.js";import"./isObjectLike-a9798079.js";import"./_getTag-0507d0b1.js";import"./debounce-6981b306.js";import"./phoneVerify-5b4fc776.js";import"./merge-e7788e50.js";import"./index-0eb0c95b.js";import"./useDicData-bd9cdb9d.js";const C={style:{margin:"16px"}},T=e({__name:"index",setup(e){const T=a(null),F=[{label:"男",value:"1"},{label:"女 ",value:"2"}],R=[{type:"input",label:"邮箱地址",name:"input",ruleType:"email",required:!0}],w=[{type:"single",label:"单个日期",name:"single"},{type:"multiple",label:"多个日期",name:"multiple"},{type:"range",label:"日期区间",name:"range"}],I=[{type:"datetime",label:"完整时间"},{type:"date",label:"年月日"},{type:"time",label:"时间"},{type:"year-month",label:"年月"},{type:"month-day",label:"月日"},{type:"datehour",label:"年月日小时"}],O=l({formData:{sex:1},date:"",tel:"",birthday:"03:11",show:!1}),P=e=>{console.log(11111111,e),console.log("formData",e,T.value.children,O.date)},z=e=>{console.log(2222222,e),T.value.validate().then((e=>{}))};return t((()=>{console.log("demoFormRef",T.value.children)})),n((()=>O.formData.sex),(()=>{console.log(O.formData),console.log("%c🔥 表单数据改动了","color:#1989fa;background:#5e4;padding:3px 5px;")}),{immediate:!0,deep:!0}),(e,a)=>{const l=o("ProCalendarv2"),t=s;return r(),m(b(q),{ref_key:"demoFormRef",ref:T,model:b(O).formData,onSubmit:P},{default:p((()=>[d(b(k),{name:"phone",label:"手机号",required:"","slots-map":{nameTips:"extra"}},{nameTips:p((()=>[i(" extra ")])),_:1}),d(b(x),{name:"smsCode",label:"验证码","related-name":"phone"}),(r(),u(y,null,c(R,(({type:e,label:a,...l})=>d(b(k),g({key:e,name:e,type:e,label:a,required:""},l),null,16,["name","type","label"]))),64)),d(b(h),{label:"性别",name:"sex",columns:F,required:""}),d(b(v),{label:"地址",name:"address",columns:e.area},null,8,["columns"]),(r(),u(y,null,c(w,(({type:e,label:a})=>d(l,{key:e,name:e,type:e,label:a,required:""},null,8,["name","type","label"]))),64)),(r(),u(y,null,c(I,(({type:e,label:a})=>d(b(D),{key:e,name:e,type:e,label:a,required:""},null,8,["name","type","label"]))),64)),d(b(_),{name:"bank",label:"银行卡",columns:b(j),required:""},null,8,["columns"]),f("div",C,[d(t,{round:"",block:"",type:"primary","native-type":"submit"},{default:p((()=>[i(" 提交 ")])),_:1}),d(t,{round:"",block:"",type:"primary",onClick:z},{default:p((()=>[i(" 提交 ")])),_:1})])])),_:1},8,["model"])}}});export{T as default};
