import{_ as s,d as a,c9 as e,k as l,o as t,c as i,F as c,s as n,n as d,u as o,a as m,b as r,ao as v,e as u,v as p,f as h}from"./index-2278a2d6.js";const f={class:"com-time-line"},_={class:"left"},g={class:"num"},k={class:"num-text"},x={class:"right"},y={class:"title"},w={class:"desc"};var b=s(a({__name:"index",props:{list:{type:Array,default:()=>[]}},setup(s){const a=s,[b,j]=e(!1),A=()=>{j()},C=l((()=>a.list.length<=4||b.value?a.list:a.list.slice(0,4)));return(a,e)=>(t(),i("div",f,[(t(!0),i(c,null,n(o(C),((s,a)=>(t(),i("div",{key:a,class:d(["item",{last:a===o(C).length-1}])},[m("div",_,[m("div",g,[r(v,{name:"time-step"}),m("span",k,u(a+1),1)])]),m("div",x,[m("div",y,u(s.title),1),m("div",w,u(s.desc),1)])],2)))),128)),s.list.length>4?(t(),i("div",{key:0,class:"show-more",onClick:A},[p(u(o(b)?"收起":"展开")+" ",1),r(v,{name:"down",class:d(["icon",{showMore:o(b)}])},null,8,["class"])])):h("",!0)]))}}),[["__scopeId","data-v-ae1aa418"]]);export{b as default};
