import{aw as e,aZ as a,a$ as l,d as s,f as t,aC as o,_ as n,r,J as i,an as d,B as c,c as p,h as m,w as u,n as y,g as f,j as b,F as h}from"./index-40904ad2.js";import"./ProOccupation.vue_vue_type_style_index_0_scoped_true_lang-e97e8159.js";import{f as v}from"./index-9f34f954.js";import"./pdfh5-008ca364.js";import"./debounce-2dbbea42.js";import"./isObjectLike-d00d103b.js";import"./keysIn-b3061da8.js";const[_,g]=e("divider");const x=o(s({name:_,props:{dashed:Boolean,hairline:a,contentPosition:l("center")},setup:(e,{slots:a})=>()=>{var l;return t("div",{role:"separator",class:g({dashed:e.dashed,hairline:e.hairline,[`content-${e.contentPosition}`]:!!a.default})},[null==(l=a.default)?void 0:l.call(a)])}}));var T=[{displayType:1,label:"姓名",name:"name",required:!0},{displayType:2,type:"textarea",label:"备注",name:"textarea",maxlength:100,required:!0},{displayType:6,label:"证件类型",name:"certType",required:!0,columns:[{label:"中国",value:"cn"},{label:"美国",value:"us"}]},{displayType:4,label:"出生日期",name:"birthday"},{displayType:4,type:"range",label:"酒店入住日期",name:"orderDate"},{displayType:6,label:"性别"},{displayType:7,label:"出行人"},{displayType:4,label:"出生日期"},{displayType:11,label:"地址"},{label:"证件有效期",displayType:4,name:"certExpiry",required:!1,columns:[],customFieldName:{children:"children",text:"value",value:"code"}}];const j={style:{margin:"16px"}};var k=n(s({__name:"schema",setup(e){const a=r(null);r("01-01");const l=i({formData:{},config:{},date:"",tel:"",birthday:"03:11",show:!1}),s=e=>{console.log(111111,null==a?void 0:a.value,e,l.date),l.config.certType={visible:!1}};return d((()=>l.formData),(()=>{console.log("%c🔥 表单数据改动了","color:#1989fa;background:#5e4;padding:3px 5px;")}),{immediate:!0,deep:!0}),(e,o)=>{const n=x,r=c;return p(),m(h,null,[t(n,{"content-position":"left"},{default:u((()=>[y("ProForm schema")])),_:1}),t(f(v),{ref_key:"schemaFormRef",ref:a,class:"schema-form",model:f(l).formData,schema:f(T),config:f(l).config},null,8,["model","schema","config"]),b("div",j,[t(r,{round:"",block:"",type:"primary","native-type":"submit",onClick:s},{default:u((()=>[y(" 提交 ")])),_:1})])],64)}}}),[["__scopeId","data-v-573e06cc"]]);export{k as default};
