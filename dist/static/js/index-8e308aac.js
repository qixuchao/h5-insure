import{_ as a,d as s,j as t,k as e,o as l,p as i,w as r,b as d,dK as o,u as c,ak as p,s as f,a as u,au as m}from"./index-a5faea38.js";const n=["src"];var v=a(s({__name:"index",props:{list:{type:Array,default:()=>[]},active:{type:Number,default:0}},emits:["closed"],setup(a,{emit:s}){const v=a,_=t(v.active),y=e((()=>v.list.map(((a,s)=>({title:a.title,slotName:`pdf${s}`,url:a.url}))))),b=()=>{s("closed")};return(s,t)=>(l(),i(m,{class:"com-preview-pdf",show:!0,title:"pdf预览",onClosed:b},{default:r((()=>[d(o,{list:c(y),sticky:"","offset-top":"10%",class:"tabs",active:c(_)},p({_:2},[f(a.list,((a,s)=>({name:`pdf${s}`,fn:r((()=>[u("iframe",{class:"iframe",src:a.url},null,8,n)]))})))]),1032,["list","active"])])),_:1}))}}),[["__scopeId","data-v-6289593a"]]);export{v as default};
