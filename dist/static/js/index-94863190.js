import{ar as a,d as s,r as e,G as t,b as l,g as i,w as r,e as c,cw as d,f as o,au as f,a4 as p,i as m,aH as u}from"./index-0273ea18.js";const n=["src"];var v=a(s({__name:"index",props:{list:{type:Array,default:()=>[]},active:{type:Number,default:0}},emits:["closed"],setup(a,{emit:s}){const v=a,_=e(v.active),w=t((()=>v.list.map(((a,s)=>({title:a.title,slotName:`pdf${s}`,url:a.url}))))),y=()=>{s("closed")};return(s,e)=>(l(),i(u,{class:"com-preview-pdf",show:!0,title:"pdf预览",onClosed:y},{default:r((()=>[c(d,{list:o(w),sticky:"","offset-top":"10%",class:"tabs",active:o(_)},f({_:2},[p(a.list,((a,s)=>({name:`pdf${s}`,fn:r((()=>[m("iframe",{class:"iframe",src:a.url},null,8,n)]))})))]),1032,["list","active"])])),_:1}))}}),[["__scopeId","data-v-6289593a"]]);export{v as default};
