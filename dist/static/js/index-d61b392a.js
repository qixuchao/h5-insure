import{G as s,d as a,r as t,L as e,c as l,e as i,w as r,i as d,ao as c,V as o,g as p,aj as f,ak as m,f as u}from"./index-2bbd85d2.js";import"./pdfh5-008ca364.js";const n=["src"];var v=s(a({__name:"index",props:{list:{type:Array,default:()=>[]},active:{type:Number,default:0}},emits:["closed"],setup(s,{emit:a}){const v=s,_=t(v.active),b=e((()=>v.list.map(((s,a)=>({title:s.title,slotName:`pdf${a}`,url:s.url}))))),y=()=>{a("closed")};return(a,t)=>(l(),i(m,{class:"com-preview-pdf",show:!0,title:"pdf预览",onClosed:y},{default:r((()=>[d(f,{list:p(b),sticky:"","offset-top":"10%",class:"tabs",active:p(_)},c({_:2},[o(s.list,((s,a)=>({name:`pdf${a}`,fn:r((()=>[u("iframe",{class:"iframe",src:s.url},null,8,n)]))})))]),1032,["list","active"])])),_:1}))}}),[["__scopeId","data-v-6289593a"]]);export{v as default};
