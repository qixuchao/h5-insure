import{B as e,R as a,Q as l,d as s,b as o,O as t,_ as n,j as r,r as i,E as d,o as c,c as p,w as m,v as y,u,cB as b,a as f,F as h,ar as v}from"./index-1b84c3ba.js";import"./PolicyInfo-090dacdd.js";const[g,T]=e("divider");const x=t(s({name:g,props:{dashed:Boolean,hairline:a,contentPosition:l("center")},setup:(e,{slots:a})=>()=>{var l;return o("div",{role:"separator",class:T({dashed:e.dashed,hairline:e.hairline,[`content-${e.contentPosition}`]:!!a.default})},[null==(l=a.default)?void 0:l.call(a)])}}));var _=[{displayType:1,label:"姓名",name:"name",required:!0},{displayType:2,type:"textarea",label:"备注",name:"textarea",maxlength:100,required:!0},{displayType:6,label:"证件类型",name:"certType",required:!0,columns:[{label:"中国",value:"cn"},{label:"美国",value:"us"}]},{displayType:4,label:"出生日期",name:"birthday"},{displayType:4,type:"range",label:"酒店入住日期",name:"orderDate"},{displayType:6,label:"性别"},{displayType:7,label:"出行人"},{displayType:4,label:"出生日期"},{displayType:11,label:"地址"},{label:"证件有效期",displayType:4,name:"certExpiry",required:!1,columns:[],customFieldName:{children:"children",text:"value",value:"code"}}];const k={style:{margin:"16px"}};var q=n(s({__name:"schema",setup(e){const a=r(null);r("01-01");const l=i({formData:{},config:{},date:"",tel:"",birthday:"03:11",show:!1}),s=e=>{console.log(111111,null==a?void 0:a.value,e,l.date),l.config.certType={visible:!1}};return d((()=>l.formData),(()=>{console.log("%c🔥 表单数据改动了","color:#1989fa;background:#5e4;padding:3px 5px;")}),{immediate:!0,deep:!0}),(e,t)=>{const n=x,r=v;return c(),p(h,null,[o(n,{"content-position":"left"},{default:m((()=>[y("ProForm schema")])),_:1}),o(u(b),{ref_key:"schemaFormRef",ref:a,class:"schema-form",model:u(l).formData,schema:u(_),config:u(l).config},null,8,["model","schema","config"]),f("div",k,[o(r,{round:"",block:"",type:"primary","native-type":"submit",onClick:s},{default:m((()=>[y(" 提交 ")])),_:1})])],64)}}}),[["__scopeId","data-v-573e06cc"]]);export{q as default};
