import{_ as s,d as a,j as t,k as e,o as l,p as i,w as r,b as c,dJ as d,u as o,ak as p,s as f,a as u,au as m}from"./index-23113fce.js";const n=["src"];var v=s(a({__name:"index",props:{list:{type:Array,default:()=>[]},active:{type:Number,default:0}},emits:["closed"],setup(s,{emit:a}){const v=s,_=t(v.active),y=e((()=>v.list.map(((s,a)=>({title:s.title,slotName:`pdf${a}`,url:s.url}))))),b=()=>{a("closed")};return(a,t)=>(l(),i(m,{class:"com-preview-pdf",show:!0,title:"pdf预览",onClosed:b},{default:r((()=>[c(d,{list:o(y),sticky:"","offset-top":"10%",class:"tabs",active:o(_)},p({_:2},[f(s.list,((s,a)=>({name:`pdf${a}`,fn:r((()=>[u("iframe",{class:"iframe",src:s.url},null,8,n)]))})))]),1032,["list","active"])])),_:1}))}}),[["__scopeId","data-v-6289593a"]]);export{v as default};
