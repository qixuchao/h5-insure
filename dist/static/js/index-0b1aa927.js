import{a6 as s,d as a,r as t,G as e,b as i,g as l,w as r,e as c,am as d,N as f,f as o,ah as p,ai as m,i as u}from"./index-779cecf9.js";import"./pdfh5-008ca364.js";const n=["src"];var v=s(a({__name:"index",props:{list:{type:Array,default:()=>[]},active:{type:Number,default:0}},emits:["closed"],setup(s,{emit:a}){const v=s,_=t(v.active),y=e((()=>v.list.map(((s,a)=>({title:s.title,slotName:`pdf${a}`,url:s.url}))))),b=()=>{a("closed")};return(a,t)=>(i(),l(m,{class:"com-preview-pdf",show:!0,title:"pdf预览",onClosed:b},{default:r((()=>[c(p,{list:o(y),sticky:"","offset-top":"10%",class:"tabs",active:o(_)},d({_:2},[f(s.list,((s,a)=>({name:`pdf${a}`,fn:r((()=>[u("iframe",{class:"iframe",src:s.url},null,8,n)]))})))]),1032,["list","active"])])),_:1}))}}),[["__scopeId","data-v-6289593a"]]);export{v as default};
