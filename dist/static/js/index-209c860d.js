import{E as s,d as a,a6 as e,K as l,c as t,y as i,R as c,U as n,A as d,g as o,f as m,i as r,a9 as p,z as v,j as u,h}from"./index-ba4bbbcf.js";import"./pdfh5-008ca364.js";const f={class:"com-time-line"},g={class:"left"},y={class:"num"},b={class:"num-text"},x={class:"right"},_={class:"title"},j={class:"desc"};var k=s(a({__name:"index",props:{list:{type:Array,default:()=>[]}},setup(s){const a=s,[k,w]=e(!1),A=()=>{w()},z=l((()=>a.list.length<=4||k.value?a.list:a.list.slice(0,4)));return(a,e)=>(t(),i("div",f,[(t(!0),i(c,null,n(o(z),((s,a)=>(t(),i("div",{key:a,class:d(["item",{last:a===o(z).length-1}])},[m("div",g,[m("div",y,[r(p,{name:"time-step"}),m("span",b,v(a+1),1)])]),m("div",x,[m("div",_,v(s.title),1),m("div",j,v(s.desc),1)])],2)))),128)),s.list.length>4?(t(),i("div",{key:0,class:"show-more",onClick:A},[u(v(o(k)?"收起":"展开")+" ",1),r(p,{name:"down",class:d(["icon",{showMore:o(k)}])},null,8,["class"])])):h("",!0)]))}}),[["__scopeId","data-v-ae1aa418"]]);export{k as default};
