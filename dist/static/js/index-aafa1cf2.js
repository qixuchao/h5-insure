import{G as a,d as s,r as t,L as e,c as l,e as i,w as r,i as c,ao as d,V as o,g as p,aj as f,ak as m,f as u}from"./index-da11bea2.js";import"./pdfh5-008ca364.js";const n=["src"];var v=a(s({__name:"index",props:{list:{type:Array,default:()=>[]},active:{type:Number,default:0}},emits:["closed"],setup(a,{emit:s}){const v=a,_=t(v.active),y=e((()=>v.list.map(((a,s)=>({title:a.title,slotName:`pdf${s}`,url:a.url}))))),b=()=>{s("closed")};return(s,t)=>(l(),i(m,{class:"com-preview-pdf",show:!0,title:"pdf预览",onClosed:b},{default:r((()=>[c(f,{list:p(y),sticky:"","offset-top":"10%",class:"tabs",active:p(_)},d({_:2},[o(a.list,((a,s)=>({name:`pdf${s}`,fn:r((()=>[u("iframe",{class:"iframe",src:a.url},null,8,n)]))})))]),1032,["list","active"])])),_:1}))}}),[["__scopeId","data-v-6289593a"]]);export{v as default};
