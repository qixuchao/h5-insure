!function(){var e=document.createElement("style");e.innerHTML=':root{--van-divider-margin: var(--van-padding-md) 0;--van-divider-text-color: var(--van-text-color-2);--van-divider-font-size: var(--van-font-size-md);--van-divider-line-height: 24px;--van-divider-border-color: var(--van-border-color);--van-divider-content-padding: var(--van-padding-md);--van-divider-content-left-width: 10%;--van-divider-content-right-width: 10%}.van-divider{display:flex;align-items:center;margin:var(--van-divider-margin);color:var(--van-divider-text-color);font-size:var(--van-divider-font-size);line-height:var(--van-divider-line-height);border-color:var(--van-divider-border-color);border-style:solid;border-width:0}.van-divider:before,.van-divider:after{display:block;flex:1;box-sizing:border-box;height:1px;border-color:inherit;border-style:inherit;border-width:var(--van-border-width-base) 0 0}.van-divider:before{content:""}.van-divider--hairline:before,.van-divider--hairline:after{transform:scaleY(.5)}.van-divider--dashed{border-style:dashed}.van-divider--content-center:before,.van-divider--content-left:before,.van-divider--content-right:before{margin-right:var(--van-divider-content-padding)}.van-divider--content-center:after,.van-divider--content-left:after,.van-divider--content-right:after{margin-left:var(--van-divider-content-padding);content:""}.van-divider--content-left:before{max-width:var(--van-divider-content-left-width)}.van-divider--content-right:after{max-width:var(--van-divider-content-right-width)}\n',document.head.appendChild(e),System.register(["./index-legacy-db3cc191.js","./index-legacy-ef8c7b8a.js","./pdfh5-legacy-9f98dc45.js","./isObjectLike-legacy-7cedb542.js","./_nodeUtil-legacy-acbb75ec.js"],(function(e){"use strict";var n,a,r,t,i,d,o,l,c,v,m,s,h,f,b,u,p;return{setters:[function(e){n=e.aw,a=e.aZ,r=e.a$,t=e.d,i=e.f,d=e.aC,o=e._,l=e.r,c=e.J,v=e.an,m=e.c,s=e.h,h=e.w,f=e.n,b=e.g,u=e.F},function(e){p=e.g},function(){},function(){},function(){}],execute:function(){const[g,x]=n("divider"),y={dashed:Boolean,hairline:a,contentPosition:r("center")};var P=t({name:g,props:y,setup:(e,{slots:n})=>()=>{var a;return i("div",{role:"separator",class:x({dashed:e.dashed,hairline:e.hairline,[`content-${e.contentPosition}`]:!!n.default})},[null==(a=n.default)?void 0:a.call(n)])}});const w=d(P);var N=[{componentName:"ProField",label:"姓名",name:"name",required:!0},{componentName:"ProField",type:"textarea",label:"备注",name:"textarea",maxlength:100,required:!0},{componentName:"ProPicker",label:"证件类型",name:"certType",required:!0,columns:[{label:"中国",value:"cn"},{label:"美国",value:"us"}]},{componentName:"ProDatePicker",label:"出生日期",name:"birthday"},{componentName:"ProCalendar",type:"range",label:"酒店入住日期",name:"orderDate"},{componentName:"ProRadio",label:"性别"},{componentName:"ProCheckbox",label:"出行人"},{componentName:"ProDatePickerV2",label:"出生日期"},{componentName:"ProAddress",label:"地址"},{componentName:"ProBank",label:"银行卡"},{label:"证件有效期",name:"certExpiry",required:!1,columns:[],customFieldName:{children:"children",text:"value",value:"code"},componentName:"ProDatePickerV2"}];e("default",o(t({__name:"schema",setup(e){const n=l(null);l("01-01");const a=c({formData:{},date:"",tel:"",birthday:"03:11",show:!1});return v((()=>a.formData),(()=>{console.log("%c🔥 表单数据改动了","color:#1989fa;background:#5e4;padding:3px 5px;")}),{immediate:!0,deep:!0}),(e,r)=>{const t=w;return m(),s(u,null,[i(t,{"content-position":"left"},{default:h((()=>[f("ProForm schema")])),_:1}),i(b(p),{ref_key:"schemaFormRef",ref:n,class:"schema-form",model:b(a).formData,schema:b(N)},null,8,["model","schema"])],64)}}}),[["__scopeId","data-v-153dad9a"]]))}}}))}();
