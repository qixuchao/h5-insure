import{ah as a,d as s,r as t,G as e,b as l,g as i,w as r,e as c,cH as d,f as o,ax as f,a4 as p,i as m,aK as u}from"./index-6ca00243.js";const n=["src"];var v=a(s({__name:"index",props:{list:{type:Array,default:()=>[]},active:{type:Number,default:0}},emits:["closed"],setup(a,{emit:s}){const v=a,_=t(v.active),x=e((()=>v.list.map(((a,s)=>({title:a.title,slotName:`pdf${s}`,url:a.url}))))),y=()=>{s("closed")};return(s,t)=>(l(),i(u,{class:"com-preview-pdf",show:!0,title:"pdf预览",onClosed:y},{default:r((()=>[c(d,{list:o(x),sticky:"","offset-top":"10%",class:"tabs",active:o(_)},f({_:2},[p(a.list,((a,s)=>({name:`pdf${s}`,fn:r((()=>[m("iframe",{class:"iframe",src:a.url},null,8,n)]))})))]),1032,["list","active"])])),_:1}))}}),[["__scopeId","data-v-6289593a"]]);export{v as default};
