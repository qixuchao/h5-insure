import{_ as e,d as a,J as t,an as s,c as o,h as r,f as l,w as i,bk as d,n,t as c,L as p,B as f}from"./index-40904ad2.js";const m={class:"pro-shadow-button"};var u=e(a({__name:"index",props:{themeVars:{type:Object,default:()=>({primaryColor:"#FF6600",linearBg:"#FF6600"})},text:{type:String,default:()=>"立即领取"},isGradient:{type:Boolean,default:!0},shadow:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:a}){const u=e,h=t({color:""});return s([()=>u.themeVars,()=>u.isGradient],(()=>{u.themeVars&&(h.color=u.isGradient?((e,a=.9)=>{let t=e.toLowerCase();if(t&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)){if(4===t.length){let e="#";for(let a=1;a<4;a+=1)e+=t.slice(a,a+1).concat(t.slice(a,a+1));t=e}const e=[];for(let a=1;a<7;a+=2)e.push(parseInt(`0x${t.slice(a,a+2)}`,16));return e[1]+=40,e[0]+=10,e[2]+=10,`rgba(${e.join(",")},${a})`}return t})(u.themeVars.primaryColor):u.themeVars.primaryColor)}),{deep:!0,immediate:!0}),(t,s)=>{const h=f;return o(),r("div",m,[l(h,{class:p({"shadow-button":!0,shadow:u.shadow}),type:"primary",disabled:e.disabled,block:"",onClick:s[0]||(s[0]=e=>a("click"))},{default:i((()=>[d(t.$slots,"default",{},(()=>[n(c(e.text),1)]),!0)])),_:3},8,["class","disabled"])])}}}),[["__scopeId","data-v-1c279c3b"]]);export{u as P};
