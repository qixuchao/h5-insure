import{aX as e,bj as a,bP as l,d as s,e as o,b0 as t,ar as r,r as i,ao as n,N as d,B as p,b as c,c as m,w as y,j as u,f,i as b,U as h}from"./index-676176f9.js";import{f as v}from"./PayInfo-a4ef793e.js";import"./merge-c5599fa4.js";import"./keysIn-a287568b.js";import"./isObjectLike-a9798079.js";import"./_getTag-7f09858e.js";import"./debounce-6981b306.js";import"./phoneVerify-a262abb3.js";import"./index-24e77492.js";import"./useDicData-45402f4c.js";import"./bankCard-12b2f3a1.js";const[g,j]=e("divider");const T=t(s({name:g,props:{dashed:Boolean,hairline:a,contentPosition:l("center")},setup:(e,{slots:a})=>()=>{var l;return o("div",{role:"separator",class:j({dashed:e.dashed,hairline:e.hairline,[`content-${e.contentPosition}`]:!!a.default})},[null==(l=a.default)?void 0:l.call(a)])}}));var x=[{displayType:1,label:"姓名",name:"name",required:!0},{displayType:2,type:"textarea",label:"备注",name:"textarea",maxlength:100,required:!0},{displayType:6,label:"证件类型",name:"certType",required:!0,columns:[{label:"中国",value:"cn"},{label:"美国",value:"us"}]},{displayType:4,label:"出生日期",name:"birthday"},{displayType:4,type:"range",label:"酒店入住日期",name:"orderDate"},{displayType:6,label:"性别"},{displayType:7,label:"出行人"},{displayType:4,label:"出生日期"},{displayType:11,label:"地址"},{label:"证件有效期",displayType:4,name:"certExpiry",required:!1,columns:[],customFieldName:{children:"children",text:"value",value:"code"}}];const _={style:{margin:"16px"}};var k=r(s({__name:"schema",setup(e){const a=i(null);i("01-01");const l=n({formData:{},config:{},date:"",tel:"",birthday:"03:11",show:!1}),s=e=>{console.log(111111,null==a?void 0:a.value,e,l.date),l.config.certType={visible:!1}};return d((()=>l.formData),(()=>{console.log("%c🔥 表单数据改动了","color:#1989fa;background:#5e4;padding:3px 5px;")}),{immediate:!0,deep:!0}),(e,t)=>{const r=T,i=p;return c(),m(h,null,[o(r,{"content-position":"left"},{default:y((()=>[u("ProForm schema")])),_:1}),o(f(v),{ref_key:"schemaFormRef",ref:a,class:"schema-form",model:f(l).formData,schema:f(x),config:f(l).config},null,8,["model","schema","config"]),b("div",_,[o(i,{round:"",block:"",type:"primary","native-type":"submit",onClick:s},{default:y((()=>[u(" 提交 ")])),_:1})])],64)}}}),[["__scopeId","data-v-573e06cc"]]);export{k as default};
