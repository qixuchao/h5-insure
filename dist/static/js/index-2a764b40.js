import{G as a,d as s,r as t,L as e,b as l,g as i,w as r,e as o,ao as c,V as d,f as p,aj as f,ak as m,i as u}from"./index-1b2a9a19.js";import"./pdfh5-008ca364.js";const n=["src"];var v=a(s({__name:"index",props:{list:{type:Array,default:()=>[]},active:{type:Number,default:0}},emits:["closed"],setup(a,{emit:s}){const v=a,_=t(v.active),b=e((()=>v.list.map(((a,s)=>({title:a.title,slotName:`pdf${s}`,url:a.url}))))),y=()=>{s("closed")};return(s,t)=>(l(),i(m,{class:"com-preview-pdf",show:!0,title:"pdf预览",onClosed:y},{default:r((()=>[o(f,{list:p(b),sticky:"","offset-top":"10%",class:"tabs",active:p(_)},c({_:2},[d(a.list,((a,s)=>({name:`pdf${s}`,fn:r((()=>[u("iframe",{class:"iframe",src:a.url},null,8,n)]))})))]),1032,["list","active"])])),_:1}))}}),[["__scopeId","data-v-6289593a"]]);export{v as default};
