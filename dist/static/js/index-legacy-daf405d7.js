!function(){var e=document.createElement("style");e.innerHTML=".risk-responsibility .title[data-v-27faf794]{font-size:.34667rem;font-weight:500;color:#393d46;padding:.26667rem 0;padding-left:var(--van-cell-horizontal-padding);overflow:hidden}.risk-responsibility .responsibility-content[data-v-27faf794]{position:relative;padding-left:var(--zaui-page-border);font-size:.37333rem;color:#aab9d0;overflow:hidden}.risk-responsibility .responsibility-content li[data-v-27faf794]{display:flex;align-items:center;height:.77333rem;font-size:.34667rem}.risk-responsibility .responsibility-content li .responsibility-sign[data-v-27faf794]{width:.37333rem;height:.37333rem;line-height:.37333rem;text-align:center;border:1px solid #99a9c0;border-radius:50%;margin-right:.18667rem}.risk-responsibility .responsibility-content .show-button[data-v-27faf794]{position:absolute;left:50%;bottom:0;width:100%;height:1.17333rem;line-height:1.17333rem;background-color:#fff;text-align:center;transform:translate(-50%)}\n",document.head.appendChild(e),System.register(["./index-legacy-db3cc191.js"],(function(e){"use strict";var t,i,n,r,a,s,o,l,d,c,p,u,f,m,h;return{setters:[function(e){t=e._,i=e.d,n=e.bj,r=e.r,a=e.G,s=e.E,o=e.c,l=e.h,d=e.j,c=e.t,p=e.bk,u=e.g,f=e.f,m=e.W,h=e.V}],execute:function(){const g={class:"risk-responsibility"},b={class:"title"},v={class:"content"},y=i({__name:"index",props:{modelValue:Boolean,title:{type:String,default:""},minHeight:{type:[Number,String],default:80},maxHeight:{type:[Number,String],default:200}},emits:["update:modelValue"],setup(e,{emit:t}){const i=e;n();const y=r();a((()=>{y.value=i.modelValue}));const x=s((()=>y.value?`${i.maxHeight}px`:`${i.minHeight}px`)),w=()=>{y.value=!y.value,t("update:modelValue",y.value)};return(t,i)=>{const n=h;return o(),l("div",g,[d("div",b,c(e.title),1),d("div",{class:"responsibility-content",style:m({height:u(x)})},[d("div",v,[p(t.$slots,"default",{},void 0,!0)]),d("div",{class:"show-button",onClick:w},[d("span",null,c(u(y)?"收起":"展开"),1),f(n,{style:{width:"20px",height:"20px"},name:u(y)?"arrow-up":"arrow-down"},null,8,["name"])])],4)])}}});e("P",t(y,[["__scopeId","data-v-27faf794"]]))}}}))}();
