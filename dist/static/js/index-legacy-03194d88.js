!function(){var t=document.createElement("style");t.innerHTML=".pro-shadow-button[data-v-11ddc693]{height:1.73333rem}.pro-shadow-button .shadow-button[data-v-11ddc693]{color:1.28rem}.pro-shadow-button .shadow-button.shadow[data-v-11ddc693]{background:linear-gradient(to right,var(--van-primary-color),var(--f0eb2e7a));box-shadow:0 .26667rem .66667rem -.33333rem var(--van-primary-color)}.pro-shadow-button .shadow-button[data-v-11ddc693] .van-button__text{font-weight:bolder}\n",document.head.appendChild(t),System.register(["./vendor-legacy-7dc0cbaa.js","./index-legacy-71d031cd.js"],(function(t){"use strict";var e,o,a,r,n,d,s,c,i,l,u,h,p,m;return{setters:[function(t){e=t.h,o=t.at,a=t.N,r=t.$,n=t.k,d=t.m,s=t.s,c=t.t,i=t.p,l=t.G,u=t.L,h=t.M,p=t.C},function(t){m=t._}],execute:function(){const f={class:"pro-shadow-button"},b=e({props:{themeVars:{type:Object,default:()=>({primaryColor:"#FF6600"})},text:{type:String,default:()=>"立即领取"},isGradient:{type:Boolean,default:!0},shadow:{type:Boolean,default:!0}},emits:["click"],setup(t,{emit:e}){const m=t;o((t=>({f0eb2e7a:p(b).color})));const b=a({color:""});return r([()=>m.themeVars,()=>m.isGradient],(()=>{m.themeVars&&(b.color=m.isGradient?((t,e=1)=>{let o=t.toLowerCase();if(o&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(o)){if(4===o.length){let t="#";for(let e=1;e<4;e+=1)t+=o.slice(e,e+1).concat(o.slice(e,e+1));o=t}const t=[];for(let e=1;e<7;e+=2)t.push(parseInt(`0x${o.slice(e,e+2)}`,16));return t[1]+=35,`rgba(${t.join(",")},${e})`}return o})(m.themeVars.primaryColor):m.themeVars.primaryColor)}),{deep:!0,immediate:!0}),(o,a)=>{const r=n("van-button");return d(),s("div",f,[c(r,{class:h({"shadow-button":!0,shadow:m.shadow}),type:"primary",round:"",block:"",onClick:a[0]||(a[0]=t=>e("click"))},{default:i((()=>[l(u(t.text),1)])),_:1},8,["class"])])}}});t("P",m(b,[["__scopeId","data-v-11ddc693"]]))}}}))}();
