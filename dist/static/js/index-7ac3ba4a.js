import{G as a,d as s,r as t,L as e,c as l,e as i,w as r,i as c,ap as p,V as d,g as o,ak as f,al as m,f as u}from"./index-59a53a58.js";import"./pdfh5-008ca364.js";const n=["src"];var v=a(s({__name:"index",props:{list:{type:Array,default:()=>[]},active:{type:Number,default:0}},emits:["closed"],setup(a,{emit:s}){const v=a,_=t(v.active),y=e((()=>v.list.map(((a,s)=>({title:a.title,slotName:`pdf${s}`,url:a.url}))))),w=()=>{s("closed")};return(s,t)=>(l(),i(m,{class:"com-preview-pdf",show:!0,title:"pdf预览",onClosed:w},{default:r((()=>[c(f,{list:o(y),sticky:"","offset-top":"10%",class:"tabs",active:o(_)},p({_:2},[d(a.list,((a,s)=>({name:`pdf${s}`,fn:r((()=>[u("iframe",{class:"iframe",src:a.url},null,8,n)]))})))]),1032,["list","active"])])),_:1}))}}),[["__scopeId","data-v-6289593a"]]);export{v as default};
