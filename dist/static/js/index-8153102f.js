import{_ as s,d as a,j as e,k as t,o as l,m as i,w as d,b as r,ds as o,u as c,bS as f,q as p,a as m,aB as u}from"./index-e7a6dfe1.js";const n=["src"];var v=s(a({__name:"index",props:{list:{type:Array,default:()=>[]},active:{type:Number,default:0}},emits:["closed"],setup(s,{emit:a}){const v=s,_=e(v.active),b=t((()=>v.list.map(((s,a)=>({title:s.title,slotName:`pdf${a}`,url:s.url}))))),y=()=>{a("closed")};return(a,e)=>(l(),i(u,{class:"com-preview-pdf",show:!0,title:"pdf预览",onClosed:y},{default:d((()=>[r(o,{list:c(b),sticky:"","offset-top":"10%",class:"tabs",active:c(_)},f({_:2},[p(s.list,((s,a)=>({name:`pdf${a}`,fn:d((()=>[m("iframe",{class:"iframe",src:s.url},null,8,n)]))})))]),1032,["list","active"])])),_:1}))}}),[["__scopeId","data-v-6289593a"]]);export{v as default};
