import{_ as s,d as a,r as t,E as e,c as l,e as i,w as c,f as r,a5 as d,g as o,bt as p,i as f,j as m,a8 as u}from"./index-6eca3ebc.js";import"./pdfh5-008ca364.js";const n=["src"];var v=s(a({__name:"index",props:{list:{type:Array,default:()=>[]},active:{type:Number,default:0}},emits:["closed"],setup(s,{emit:a}){const v=s,_=t(v.active),b=e((()=>v.list.map(((s,a)=>({title:s.title,slotName:`pdf${a}`,url:s.url}))))),y=()=>{a("closed")};return(a,t)=>(l(),i(u,{class:"com-preview-pdf",show:!0,title:"pdf预览",onClosed:y},{default:c((()=>[r(d,{list:o(b),sticky:"","offset-top":"10%",class:"tabs",active:o(_)},p({_:2},[f(s.list,((s,a)=>({name:`pdf${a}`,fn:c((()=>[m("iframe",{class:"iframe",src:s.url},null,8,n)]))})))]),1032,["list","active"])])),_:1}))}}),[["__scopeId","data-v-6289593a"]]);export{v as default};
