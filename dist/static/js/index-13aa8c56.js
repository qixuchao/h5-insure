import{_ as s,d as a,j as t,k as e,o as l,m as i,w as d,b as r,bP as o,q as c,a as p,u as f,dL as m,aD as u}from"./index-92d58610.js";const n=["src"];var v=s(a({__name:"index",props:{list:{type:Array,default:()=>[]},active:{type:Number,default:0}},emits:["closed"],setup(s,{emit:a}){const v=s,_=t(v.active),b=e((()=>v.list.map(((s,a)=>({title:s.title,slotName:`pdf${a}`,url:s.url}))))),y=()=>{a("closed")};return(a,t)=>(l(),i(u,{class:"com-preview-pdf",show:!0,title:"pdf预览",onClosed:y},{default:d((()=>[r(m,{list:f(b),sticky:"","offset-top":"10%",class:"tabs",active:f(_)},o({_:2},[c(s.list,((s,a)=>({name:`pdf${a}`,fn:d((()=>[p("iframe",{class:"iframe",src:s.url},null,8,n)]))})))]),1032,["list","active"])])),_:1}))}}),[["__scopeId","data-v-6289593a"]]);export{v as default};
