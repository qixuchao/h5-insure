import{a_ as e,bq as a,bP as s,d as l,e as t,b3 as o,ah as r,r as i,as as n,N as d,B as c,b as p,c as m,w as y,j as u,f,i as b,U as h}from"./index-4c507abe.js";import{f as v}from"./PayInfo-7f4a0b8a.js";import"./merge-12f1f658.js";import"./keysIn-193626ca.js";import"./isObjectLike-a9798079.js";import"./_getTag-0acae921.js";import"./debounce-592a0672.js";import"./phoneVerify-782c58dd.js";import"./index-af59427c.js";import"./useDicData-7275e9da.js";import"./bankCard-2150eff0.js";const[g,j]=e("divider");const T=o(l({name:g,props:{dashed:Boolean,hairline:a,contentPosition:s("center")},setup:(e,{slots:a})=>()=>{var s;return t("div",{role:"separator",class:j({dashed:e.dashed,hairline:e.hairline,[`content-${e.contentPosition}`]:!!a.default})},[null==(s=a.default)?void 0:s.call(a)])}}));var x=[{displayType:1,label:"姓名",name:"name",required:!0},{displayType:2,type:"textarea",label:"备注",name:"textarea",maxlength:100,required:!0},{displayType:6,label:"证件类型",name:"certType",required:!0,columns:[{label:"中国",value:"cn"},{label:"美国",value:"us"}]},{displayType:4,label:"出生日期",name:"birthday"},{displayType:4,type:"range",label:"酒店入住日期",name:"orderDate"},{displayType:6,label:"性别"},{displayType:7,label:"出行人"},{displayType:4,label:"出生日期"},{displayType:11,label:"地址"},{label:"证件有效期",displayType:4,name:"certExpiry",required:!1,columns:[],customFieldName:{children:"children",text:"value",value:"code"}}];const _={style:{margin:"16px"}};var k=r(l({__name:"schema",setup(e){const a=i(null);i("01-01");const s=n({formData:{},config:{},date:"",tel:"",birthday:"03:11",show:!1}),l=e=>{console.log(111111,null==a?void 0:a.value,e,s.date),s.config.certType={visible:!1}};return d((()=>s.formData),(()=>{console.log("%c🔥 表单数据改动了","color:#1989fa;background:#5e4;padding:3px 5px;")}),{immediate:!0,deep:!0}),(e,o)=>{const r=T,i=c;return p(),m(h,null,[t(r,{"content-position":"left"},{default:y((()=>[u("ProForm schema")])),_:1}),t(f(v),{ref_key:"schemaFormRef",ref:a,class:"schema-form",model:f(s).formData,schema:f(x),config:f(s).config},null,8,["model","schema","config"]),b("div",_,[t(i,{round:"",block:"",type:"primary","native-type":"submit",onClick:l},{default:y((()=>[u(" 提交 ")])),_:1})])],64)}}}),[["__scopeId","data-v-573e06cc"]]);export{k as default};
