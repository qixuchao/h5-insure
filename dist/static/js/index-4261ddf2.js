import{_ as e,d as t,z as a,a7 as s,b as o,c as r,g as l,f as d,w as i,n as c,t as n,B as p}from"./index-ede405b0.js";import"./pdfdist-66c75904.js";const f={class:"pro-shadow-button"};var u=e(t({props:{themeVars:{type:Object,default:()=>({primaryColor:"#FF6600",linearBg:"#FF6600"})},text:{type:String,default:()=>"立即领取"},isGradient:{type:Boolean,default:!0},shadow:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:t}){const u=e,m=a({color:""});return s([()=>u.themeVars,()=>u.isGradient],(()=>{u.themeVars&&(m.color=u.isGradient?((e,t=.9)=>{let a=e.toLowerCase();if(a&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(a)){if(4===a.length){let e="#";for(let t=1;t<4;t+=1)e+=a.slice(t,t+1).concat(a.slice(t,t+1));a=e}const e=[];for(let t=1;t<7;t+=2)e.push(parseInt(`0x${a.slice(t,t+2)}`,16));return e[1]+=40,e[0]+=10,e[2]+=10,`rgba(${e.join(",")},${t})`}return a})(u.themeVars.primaryColor):u.themeVars.primaryColor)}),{deep:!0,immediate:!0}),(a,s)=>{const m=o("van-button");return r(),l("div",f,[d(m,{class:p({"shadow-button":!0,shadow:u.shadow}),type:"primary",disabled:e.disabled,round:"",block:"",onClick:s[0]||(s[0]=e=>t("click"))},{default:i((()=>[c(n(e.text),1)])),_:1},8,["class","disabled"])])}}}),[["__scopeId","data-v-4c7ccfc5"]]);export{u as default};
