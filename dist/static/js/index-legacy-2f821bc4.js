!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.com-radio-btn[data-v-0d25d790]{display:flex;flex-wrap:wrap;justify-content:flex-end}\n',document.head.appendChild(e),System.register(["./vendor-legacy-cada4b91.js","./index-legacy-01dd4c53.js"],(function(e){"use strict";var l,a,u,n,t,r,d,o,i,s,c,m,p,v,V,f,b,k;return{setters:[function(e){l=e.g,a=e.L,u=e.k,n=e.m,t=e.F,r=e.E,d=e.h,o=e.z,i=e.a1,s=e.C,c=e.n,m=e.j,p=e.a2,v=e.r,V=e.B},function(e){f=e._,b=e.a,k=e.P}],execute:function(){const y={class:"com-radio-btn"};var g=f(l({props:{modelValue:{type:Array,default:()=>[],required:!0},options:{type:Array,default:()=>[],required:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const i=a({currentValue:e.modelValue||[]});return(a,s)=>(u(),n("div",y,[(u(!0),n(t,null,r(e.options,(e=>(u(),d(b,{key:e.value,label:e.label,activied:o(i).currentValue.includes(e.value),onClick:a=>(e=>{const a=i.currentValue.indexOf(e);-1!==a?i.currentValue.splice(a,1):i.currentValue.push(e),l("update:modelValue",i.currentValue)})(e.value)},null,8,["label","activied","onClick"])))),128))]))}}),[["__scopeId","data-v-0d25d790"]]);const h=V("试算");e("default",l({setup(e){const[l,r]=i(!1),d=s({gender:"1",like:[],birth:""}),V=s(),f=[{label:"男",value:"1"},{label:"女",value:"2"}];a({btns:[1,2]});const b=()=>{V.value.submit()};return(e,a)=>{const i=v("VanField"),s=v("VanButton"),y=v("VanForm"),_=v("ZaPageWrap"),C=v("van-datetime-picker"),U=v("van-popup");return u(),n(t,null,[c(_,null,{default:m((()=>[c(y,{ref_key:"formRef",ref:V},{default:m((()=>[c(i,{modelValue:d.value.birth,"onUpdate:modelValue":a[0]||(a[0]=e=>d.value.birth=e),rules:[{required:!0,message:"请选择"}],name:"birth",label:"出生日期","is-link":"",placeholder:"请选择",onClick:a[1]||(a[1]=e=>o(r)(!0))},null,8,["modelValue"]),c(i,{modelValue:d.value.gender,"onUpdate:modelValue":a[3]||(a[3]=e=>d.value.gender=e),name:"gender",label:"性别",rules:[{required:!0,message:"请选择"}]},{input:m((()=>[c(k,{modelValue:d.value.gender,"onUpdate:modelValue":a[2]||(a[2]=e=>d.value.gender=e),options:f},null,8,["modelValue"])])),_:1},8,["modelValue"]),c(i,{modelValue:d.value.like,"onUpdate:modelValue":a[5]||(a[5]=e=>d.value.like=e),name:"like",label:"爱好",rules:[{required:!0,message:"请选择"}]},{input:m((()=>[c(g,{modelValue:d.value.like,"onUpdate:modelValue":a[4]||(a[4]=e=>d.value.like=e),options:f},null,8,["modelValue"])])),_:1},8,["modelValue"]),c(s,{type:"primary",onClick:b},{default:m((()=>[h])),_:1})])),_:1},512)])),_:1}),c(U,{show:o(l),"onUpdate:show":a[8]||(a[8]=e=>p(l)?l.value=e:null),position:"bottom"},{default:m((()=>[c(C,{type:"time",onConfirm:a[6]||(a[6]=e=>{d.value.birth=e,o(r)(!1)}),onCancel:a[7]||(a[7]=e=>o(r)(!1))})])),_:1},8,["show"])],64)}}}))}}}))}();
