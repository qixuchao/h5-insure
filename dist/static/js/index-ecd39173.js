import{_ as s,d as a,j as t,k as e,o as l,p as i,w as r,b as d,dH as o,u as c,bL as p,s as f,a as m,aB as u}from"./index-f7254a96.js";const n=["src"];var v=s(a({__name:"index",props:{list:{type:Array,default:()=>[]},active:{type:Number,default:0}},emits:["closed"],setup(s,{emit:a}){const v=s,_=t(v.active),b=e((()=>v.list.map(((s,a)=>({title:s.title,slotName:`pdf${a}`,url:s.url}))))),y=()=>{a("closed")};return(a,t)=>(l(),i(u,{class:"com-preview-pdf",show:!0,title:"pdf预览",onClosed:y},{default:r((()=>[d(o,{list:c(b),sticky:"","offset-top":"10%",class:"tabs",active:c(_)},p({_:2},[f(s.list,((s,a)=>({name:`pdf${a}`,fn:r((()=>[m("iframe",{class:"iframe",src:s.url},null,8,n)]))})))]),1032,["list","active"])])),_:1}))}}),[["__scopeId","data-v-6289593a"]]);export{v as default};
