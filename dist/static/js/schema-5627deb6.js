import{v as e,K as a,J as l,d as s,b as o,H as t,_ as n,j as r,r as i,z as d,aj as c,o as p,c as m,w as y,a8 as u,u as f,cv as b,a as h,F as v}from"./index-081cd25a.js";import"./PolicyInfo-3e8fa534.js";const[g,T]=e("divider");const x=t(s({name:g,props:{dashed:Boolean,hairline:a,contentPosition:l("center")},setup:(e,{slots:a})=>()=>{var l;return o("div",{role:"separator",class:T({dashed:e.dashed,hairline:e.hairline,[`content-${e.contentPosition}`]:!!a.default})},[null==(l=a.default)?void 0:l.call(a)])}}));var _=[{displayType:1,label:"姓名",name:"name",required:!0},{displayType:2,type:"textarea",label:"备注",name:"textarea",maxlength:100,required:!0},{displayType:6,label:"证件类型",name:"certType",required:!0,columns:[{label:"中国",value:"cn"},{label:"美国",value:"us"}]},{displayType:4,label:"出生日期",name:"birthday"},{displayType:4,type:"range",label:"酒店入住日期",name:"orderDate"},{displayType:6,label:"性别"},{displayType:7,label:"出行人"},{displayType:4,label:"出生日期"},{displayType:11,label:"地址"},{label:"证件有效期",displayType:4,name:"certExpiry",required:!1,columns:[],customFieldName:{children:"children",text:"value",value:"code"}}];const j={style:{margin:"16px"}};var k=n(s({__name:"schema",setup(e){const a=r(null);r("01-01");const l=i({formData:{},config:{},date:"",tel:"",birthday:"03:11",show:!1}),s=e=>{console.log(111111,null==a?void 0:a.value,e,l.date),l.config.certType={visible:!1}};return d((()=>l.formData),(()=>{console.log("%c🔥 表单数据改动了","color:#1989fa;background:#5e4;padding:3px 5px;")}),{immediate:!0,deep:!0}),(e,t)=>{const n=x,r=c;return p(),m(v,null,[o(n,{"content-position":"left"},{default:y((()=>[u("ProForm schema")])),_:1}),o(f(b),{ref_key:"schemaFormRef",ref:a,class:"schema-form",model:f(l).formData,schema:f(_),config:f(l).config},null,8,["model","schema","config"]),h("div",j,[o(r,{round:"",block:"",type:"primary","native-type":"submit",onClick:s},{default:y((()=>[u(" 提交 ")])),_:1})])],64)}}}),[["__scopeId","data-v-573e06cc"]]);export{k as default};
