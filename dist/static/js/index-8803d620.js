import{ar as s,d as a,r as e,G as t,b as l,g as i,w as r,e as f,cw as c,f as d,au as o,a4 as p,i as m,aH as u}from"./index-13fff9e3.js";const n=["src"];var v=s(a({__name:"index",props:{list:{type:Array,default:()=>[]},active:{type:Number,default:0}},emits:["closed"],setup(s,{emit:a}){const v=s,_=e(v.active),w=t((()=>v.list.map(((s,a)=>({title:s.title,slotName:`pdf${a}`,url:s.url}))))),y=()=>{a("closed")};return(a,e)=>(l(),i(u,{class:"com-preview-pdf",show:!0,title:"pdf预览",onClosed:y},{default:r((()=>[f(c,{list:d(w),sticky:"","offset-top":"10%",class:"tabs",active:d(_)},o({_:2},[p(s.list,((s,a)=>({name:`pdf${a}`,fn:r((()=>[m("iframe",{class:"iframe",src:s.url},null,8,n)]))})))]),1032,["list","active"])])),_:1}))}}),[["__scopeId","data-v-6289593a"]]);export{v as default};
