import{G as s,d as a,r as t,L as e,b as l,g as i,w as r,e as c,ct as d,f as o,au as f,a7 as p,i as m,aH as u}from"./index-b864a2d5.js";const n=["src"];var v=s(a({__name:"index",props:{list:{type:Array,default:()=>[]},active:{type:Number,default:0}},emits:["closed"],setup(s,{emit:a}){const v=s,_=t(v.active),b=e((()=>v.list.map(((s,a)=>({title:s.title,slotName:`pdf${a}`,url:s.url}))))),y=()=>{a("closed")};return(a,t)=>(l(),i(u,{class:"com-preview-pdf",show:!0,title:"pdf预览",onClosed:y},{default:r((()=>[c(d,{list:o(b),sticky:"","offset-top":"10%",class:"tabs",active:o(_)},f({_:2},[p(s.list,((s,a)=>({name:`pdf${a}`,fn:r((()=>[m("iframe",{class:"iframe",src:s.url},null,8,n)]))})))]),1032,["list","active"])])),_:1}))}}),[["__scopeId","data-v-6289593a"]]);export{v as default};
