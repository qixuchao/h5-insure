import{G as s,d as a,r as t,L as e,c as l,e as i,w as r,i as c,ap as f,V as p,g as d,ak as o,al as m,f as u}from"./index-f71ef1b4.js";import"./pdfh5-008ca364.js";const n=["src"];var v=s(a({__name:"index",props:{list:{type:Array,default:()=>[]},active:{type:Number,default:0}},emits:["closed"],setup(s,{emit:a}){const v=s,_=t(v.active),y=e((()=>v.list.map(((s,a)=>({title:s.title,slotName:`pdf${a}`,url:s.url}))))),b=()=>{a("closed")};return(a,t)=>(l(),i(m,{class:"com-preview-pdf",show:!0,title:"pdf预览",onClosed:b},{default:r((()=>[c(o,{list:d(y),sticky:"","offset-top":"10%",class:"tabs",active:d(_)},f({_:2},[p(s.list,((s,a)=>({name:`pdf${a}`,fn:r((()=>[u("iframe",{class:"iframe",src:s.url},null,8,n)]))})))]),1032,["list","active"])])),_:1}))}}),[["__scopeId","data-v-6289593a"]]);export{v as default};
