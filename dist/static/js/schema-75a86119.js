import{aX as e,bi as a,bO as l,d as s,e as t,b0 as o,G as i,r,A as n,V as d,B as p,b as c,c as m,w as y,j as u,f,i as b,$ as h}from"./index-653e0fa2.js";import{f as v}from"./PayInfo-15d015a5.js";import"./merge-c5599fa4.js";import"./keysIn-a287568b.js";import"./isObjectLike-a9798079.js";import"./_getTag-7f09858e.js";import"./debounce-6981b306.js";import"./phoneVerify-a23eb8fd.js";import"./index-b027f77f.js";import"./useDicData-d71a6a4e.js";import"./bankCard-7d09acb4.js";const[g,j]=e("divider");const T=o(s({name:g,props:{dashed:Boolean,hairline:a,contentPosition:l("center")},setup:(e,{slots:a})=>()=>{var l;return t("div",{role:"separator",class:j({dashed:e.dashed,hairline:e.hairline,[`content-${e.contentPosition}`]:!!a.default})},[null==(l=a.default)?void 0:l.call(a)])}}));var x=[{displayType:1,label:"姓名",name:"name",required:!0},{displayType:2,type:"textarea",label:"备注",name:"textarea",maxlength:100,required:!0},{displayType:6,label:"证件类型",name:"certType",required:!0,columns:[{label:"中国",value:"cn"},{label:"美国",value:"us"}]},{displayType:4,label:"出生日期",name:"birthday"},{displayType:4,type:"range",label:"酒店入住日期",name:"orderDate"},{displayType:6,label:"性别"},{displayType:7,label:"出行人"},{displayType:4,label:"出生日期"},{displayType:11,label:"地址"},{label:"证件有效期",displayType:4,name:"certExpiry",required:!1,columns:[],customFieldName:{children:"children",text:"value",value:"code"}}];const _={style:{margin:"16px"}};var k=i(s({__name:"schema",setup(e){const a=r(null);r("01-01");const l=n({formData:{},config:{},date:"",tel:"",birthday:"03:11",show:!1}),s=e=>{console.log(111111,null==a?void 0:a.value,e,l.date),l.config.certType={visible:!1}};return d((()=>l.formData),(()=>{console.log("%c🔥 表单数据改动了","color:#1989fa;background:#5e4;padding:3px 5px;")}),{immediate:!0,deep:!0}),(e,o)=>{const i=T,r=p;return c(),m(h,null,[t(i,{"content-position":"left"},{default:y((()=>[u("ProForm schema")])),_:1}),t(f(v),{ref_key:"schemaFormRef",ref:a,class:"schema-form",model:f(l).formData,schema:f(x),config:f(l).config},null,8,["model","schema","config"]),b("div",_,[t(r,{round:"",block:"",type:"primary","native-type":"submit",onClick:s},{default:y((()=>[u(" 提交 ")])),_:1})])],64)}}}),[["__scopeId","data-v-573e06cc"]]);export{k as default};
