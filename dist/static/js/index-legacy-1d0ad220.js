!function(){var t=document.createElement("style");t.innerHTML=".pro-shadow-button[data-v-7ff62c8b]{height:1.73333rem;width:100%}.pro-shadow-button .shadow-button[data-v-7ff62c8b]{color:1.28rem;background:linear-gradient(to right,var(--van-primary-color),var(--20f1d216))}.pro-shadow-button .shadow-button.shadow[data-v-7ff62c8b]{box-shadow:0 .26667rem .66667rem -.33333rem var(--van-primary-color)}.pro-shadow-button .shadow-button[data-v-7ff62c8b] .van-button__text{font-weight:bolder}\n",document.head.appendChild(t),System.register(["./vendor-legacy-c308286a.js","./index-legacy-557f644f.js"],(function(t){"use strict";var e,o,a,r,n,s,d,i,c,l,u,f,h,p;return{setters:[function(t){e=t.i,o=t.ax,a=t.N,r=t.$,n=t.l,s=t.m,d=t.s,i=t.t,c=t.p,l=t.G,u=t.L,f=t.M,h=t.C},function(t){p=t._}],execute:function(){const b={class:"pro-shadow-button"},m=e({props:{themeVars:{type:Object,default:()=>({primaryColor:"#FF6600"})},text:{type:String,default:()=>"立即领取"},isGradient:{type:Boolean,default:!0},shadow:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},emits:["click"],setup(t,{emit:e}){const p=t;o((t=>({"20f1d216":h(m).color})));const m=a({color:""});return r([()=>p.themeVars,()=>p.isGradient],(()=>{p.themeVars&&(m.color=p.isGradient?((t,e=1)=>{let o=t.toLowerCase();if(o&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(o)){if(4===o.length){let t="#";for(let e=1;e<4;e+=1)t+=o.slice(e,e+1).concat(o.slice(e,e+1));o=t}const t=[];for(let e=1;e<7;e+=2)t.push(parseInt(`0x${o.slice(e,e+2)}`,16));return t[1]+=35,`rgba(${t.join(",")},${e})`}return o})(p.themeVars.primaryColor):p.themeVars.primaryColor)}),{deep:!0,immediate:!0}),(o,a)=>{const r=n("van-button");return s(),d("div",b,[i(r,{class:f({"shadow-button":!0,shadow:p.shadow}),type:"primary",disabled:t.disabled,round:"",block:"",onClick:a[0]||(a[0]=t=>e("click"))},{default:c((()=>[l(u(t.text),1)])),_:1},8,["class","disabled"])])}}});t("P",p(m,[["__scopeId","data-v-7ff62c8b"]]))}}}))}();
