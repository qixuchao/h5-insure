import{aZ as e,bp as a,bO as l,d as s,e as t,b2 as o,ag as r,r as i,ar as n,N as d,B as c,b as p,c as m,w as b,j as y,f as u,i as f,U as h}from"./index-a248c81d.js";import{f as g}from"./PayInfo-2936f9db.js";import"./merge-c5599fa4.js";import"./keysIn-a287568b.js";import"./isObjectLike-a9798079.js";import"./_getTag-7f09858e.js";import"./debounce-6981b306.js";import"./phoneVerify-97cbc32b.js";import"./index-7bb78c39.js";import"./useDicData-0bd32ffb.js";import"./bankCard-d49f6aeb.js";const[v,j]=e("divider");const T=o(s({name:v,props:{dashed:Boolean,hairline:a,contentPosition:l("center")},setup:(e,{slots:a})=>()=>{var l;return t("div",{role:"separator",class:j({dashed:e.dashed,hairline:e.hairline,[`content-${e.contentPosition}`]:!!a.default})},[null==(l=a.default)?void 0:l.call(a)])}}));var x=[{displayType:1,label:"姓名",name:"name",required:!0},{displayType:2,type:"textarea",label:"备注",name:"textarea",maxlength:100,required:!0},{displayType:6,label:"证件类型",name:"certType",required:!0,columns:[{label:"中国",value:"cn"},{label:"美国",value:"us"}]},{displayType:4,label:"出生日期",name:"birthday"},{displayType:4,type:"range",label:"酒店入住日期",name:"orderDate"},{displayType:6,label:"性别"},{displayType:7,label:"出行人"},{displayType:4,label:"出生日期"},{displayType:11,label:"地址"},{label:"证件有效期",displayType:4,name:"certExpiry",required:!1,columns:[],customFieldName:{children:"children",text:"value",value:"code"}}];const _={style:{margin:"16px"}};var k=r(s({__name:"schema",setup(e){const a=i(null);i("01-01");const l=n({formData:{},config:{},date:"",tel:"",birthday:"03:11",show:!1}),s=e=>{console.log(111111,null==a?void 0:a.value,e,l.date),l.config.certType={visible:!1}};return d((()=>l.formData),(()=>{console.log("%c🔥 表单数据改动了","color:#1989fa;background:#5e4;padding:3px 5px;")}),{immediate:!0,deep:!0}),(e,o)=>{const r=T,i=c;return p(),m(h,null,[t(r,{"content-position":"left"},{default:b((()=>[y("ProForm schema")])),_:1}),t(u(g),{ref_key:"schemaFormRef",ref:a,class:"schema-form",model:u(l).formData,schema:u(x),config:u(l).config},null,8,["model","schema","config"]),f("div",_,[t(i,{round:"",block:"",type:"primary","native-type":"submit",onClick:s},{default:b((()=>[y(" 提交 ")])),_:1})])],64)}}}),[["__scopeId","data-v-573e06cc"]]);export{k as default};
