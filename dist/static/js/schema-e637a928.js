import{ax as e,aE as a,bW as l,d as s,i as t,aM as i,G as o,r,z as n,R as d,B as c,c as p,A as m,w as u,j as y,g as b,f,U as h}from"./index-835c24da.js";import"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-4ebce8a3.js";import{c as v}from"./index-58279c99.js";/* empty css              */import"./useDicData-2b2106ec.js";import"./bankCard-0dc1a1f4.js";import"./pdfh5-008ca364.js";import"./phoneVerify-2ed679af.js";import"./_initCloneObject-da8458a4.js";import"./isObjectLike-a9798079.js";import"./_getTag-ef97f191.js";import"./debounce-eed12388.js";import"./index-2ee8ca6b.js";const[_,g]=e("divider");const j=i(s({name:_,props:{dashed:Boolean,hairline:a,contentPosition:l("center")},setup:(e,{slots:a})=>()=>{var l;return t("div",{role:"separator",class:g({dashed:e.dashed,hairline:e.hairline,[`content-${e.contentPosition}`]:!!a.default})},[null==(l=a.default)?void 0:l.call(a)])}}));var x=[{displayType:1,label:"姓名",name:"name",required:!0},{displayType:2,type:"textarea",label:"备注",name:"textarea",maxlength:100,required:!0},{displayType:6,label:"证件类型",name:"certType",required:!0,columns:[{label:"中国",value:"cn"},{label:"美国",value:"us"}]},{displayType:4,label:"出生日期",name:"birthday"},{displayType:4,type:"range",label:"酒店入住日期",name:"orderDate"},{displayType:6,label:"性别"},{displayType:7,label:"出行人"},{displayType:4,label:"出生日期"},{displayType:11,label:"地址"},{label:"证件有效期",displayType:4,name:"certExpiry",required:!1,columns:[],customFieldName:{children:"children",text:"value",value:"code"}}];const T={style:{margin:"16px"}};var k=o(s({__name:"schema",setup(e){const a=r(null);r("01-01");const l=n({formData:{},config:{},date:"",tel:"",birthday:"03:11",show:!1}),s=e=>{console.log(111111,null==a?void 0:a.value,e,l.date),l.config.certType={visible:!1}};return d((()=>l.formData),(()=>{console.log("%c🔥 表单数据改动了","color:#1989fa;background:#5e4;padding:3px 5px;")}),{immediate:!0,deep:!0}),(e,i)=>{const o=j,r=c;return p(),m(h,null,[t(o,{"content-position":"left"},{default:u((()=>[y("ProForm schema")])),_:1}),t(b(v),{ref_key:"schemaFormRef",ref:a,class:"schema-form",model:b(l).formData,schema:b(x),config:b(l).config},null,8,["model","schema","config"]),f("div",T,[t(r,{round:"",block:"",type:"primary","native-type":"submit",onClick:s},{default:u((()=>[y(" 提交 ")])),_:1})])],64)}}}),[["__scopeId","data-v-573e06cc"]]);export{k as default};
