import{_ as e,d as a,z as t,a7 as s,b as o,c as r,g as l,f as i,w as d,n as c,t as n,B as p}from"./index-a63027e0.js";import"./pdfdist-66c75904.js";const f={class:"pro-shadow-button"};var u=e(a({props:{themeVars:{type:Object,default:()=>({primaryColor:"#FF6600",linearBg:"#FF6600"})},text:{type:String,default:()=>"立即领取"},isGradient:{type:Boolean,default:!0},shadow:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:a}){const u=e,m=t({color:""});return s([()=>u.themeVars,()=>u.isGradient],(()=>{u.themeVars&&(m.color=u.isGradient?((e,a=.9)=>{let t=e.toLowerCase();if(t&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)){if(4===t.length){let e="#";for(let a=1;a<4;a+=1)e+=t.slice(a,a+1).concat(t.slice(a,a+1));t=e}const e=[];for(let a=1;a<7;a+=2)e.push(parseInt(`0x${t.slice(a,a+2)}`,16));return e[1]+=40,e[0]+=10,e[2]+=10,`rgba(${e.join(",")},${a})`}return t})(u.themeVars.primaryColor):u.themeVars.primaryColor)}),{deep:!0,immediate:!0}),(t,s)=>{const m=o("van-button");return r(),l("div",f,[i(m,{class:p({"shadow-button":!0,shadow:u.shadow}),type:"primary",disabled:e.disabled,round:"",block:"",onClick:s[0]||(s[0]=e=>a("click"))},{default:d((()=>[c(n(e.text),1)])),_:1},8,["class","disabled"])])}}}),[["__scopeId","data-v-4c7ccfc5"]]);export{u as default};
