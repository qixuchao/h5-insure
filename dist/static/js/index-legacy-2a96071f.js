!function(){var t=document.createElement("style");t.innerHTML=".pro-shadow-button[data-v-f76b5048]{height:1.73333rem;width:100%}.pro-shadow-button .shadow-button[data-v-f76b5048]{color:1.28rem;background:linear-gradient(to right,var(--van-primary-color),var(--fa48c918))}.pro-shadow-button .shadow-button.shadow[data-v-f76b5048]{box-shadow:0 .26667rem .66667rem -.26667rem var(--van-primary-color)}.pro-shadow-button .shadow-button[data-v-f76b5048] .van-button__text{font-weight:bolder}\n",document.head.appendChild(t),System.register(["./vendor-legacy-5ea3e76d.js","./index-legacy-7efabe41.js"],(function(t){"use strict";var e,a,o,r,n,s,d,i,l,c,u,f,h,b;return{setters:[function(t){e=t.k,a=t.ax,o=t.O,r=t.$,n=t.p,s=t.s,d=t.B,i=t.S,l=t.v,c=t.G,u=t.M,f=t.N,h=t.E},function(t){b=t._}],execute:function(){const p={class:"pro-shadow-button"},m=e({props:{themeVars:{type:Object,default:()=>({primaryColor:"#FF6600"})},text:{type:String,default:()=>"立即领取"},isGradient:{type:Boolean,default:!0},shadow:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},emits:["click"],setup(t,{emit:e}){const b=t;a((t=>({fa48c918:h(m).color})));const m=o({color:""});return r([()=>b.themeVars,()=>b.isGradient],(()=>{b.themeVars&&(m.color=b.isGradient?((t,e=1)=>{let a=t.toLowerCase();if(a&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(a)){if(4===a.length){let t="#";for(let e=1;e<4;e+=1)t+=a.slice(e,e+1).concat(a.slice(e,e+1));a=t}const t=[];for(let e=1;e<7;e+=2)t.push(parseInt(`0x${a.slice(e,e+2)}`,16));return t[1]+=35,`rgba(${t.join(",")},${e})`}return a})(b.themeVars.primaryColor):b.themeVars.primaryColor)}),{deep:!0,immediate:!0}),(a,o)=>{const r=n("van-button");return s(),d("div",p,[i(r,{class:f({"shadow-button":!0,shadow:b.shadow}),type:"primary",disabled:t.disabled,round:"",block:"",onClick:o[0]||(o[0]=t=>e("click"))},{default:l((()=>[c(u(t.text),1)])),_:1},8,["class","disabled"])])}}});t("P",b(m,[["__scopeId","data-v-f76b5048"]]))}}}))}();
