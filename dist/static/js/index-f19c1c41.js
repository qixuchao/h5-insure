import{a6 as a,d as s,r as t,G as e,b as i,g as l,w as r,e as c,am as d,N as f,f as o,ah as p,ai as m,i as u}from"./index-0f8b4bae.js";import"./pdfh5-008ca364.js";const n=["src"];var v=a(s({__name:"index",props:{list:{type:Array,default:()=>[]},active:{type:Number,default:0}},emits:["closed"],setup(a,{emit:s}){const v=a,_=t(v.active),b=e((()=>v.list.map(((a,s)=>({title:a.title,slotName:`pdf${s}`,url:a.url}))))),y=()=>{s("closed")};return(s,t)=>(i(),l(m,{class:"com-preview-pdf",show:!0,title:"pdf预览",onClosed:y},{default:r((()=>[c(p,{list:o(b),sticky:"","offset-top":"10%",class:"tabs",active:o(_)},d({_:2},[f(a.list,((a,s)=>({name:`pdf${s}`,fn:r((()=>[u("iframe",{class:"iframe",src:a.url},null,8,n)]))})))]),1032,["list","active"])])),_:1}))}}),[["__scopeId","data-v-6289593a"]]);export{v as default};
