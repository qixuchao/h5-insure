import{_ as s,d as a,b_ as e,k as l,o as t,c as i,F as c,q as n,n as d,u as o,a as m,b as r,af as v,e as u,a8 as p,f}from"./index-9122cfbb.js";const h={class:"com-time-line"},_={class:"left"},b={class:"num"},g={class:"num-text"},k={class:"right"},x={class:"title"},y={class:"desc"};var w=s(a({__name:"index",props:{list:{type:Array,default:()=>[]}},setup(s){const a=s,[w,j]=e(!1),q=()=>{j()},A=l((()=>a.list.length<=4||w.value?a.list:a.list.slice(0,4)));return(a,e)=>(t(),i("div",h,[(t(!0),i(c,null,n(o(A),((s,a)=>(t(),i("div",{key:a,class:d(["item",{last:a===o(A).length-1}])},[m("div",_,[m("div",b,[r(v,{name:"time-step"}),m("span",g,u(a+1),1)])]),m("div",k,[m("div",x,u(s.title),1),m("div",y,u(s.desc),1)])],2)))),128)),s.list.length>4?(t(),i("div",{key:0,class:"show-more",onClick:q},[p(u(o(w)?"收起":"展开")+" ",1),r(v,{name:"down",class:d(["icon",{showMore:o(w)}])},null,8,["class"])])):f("",!0)]))}}),[["__scopeId","data-v-ae1aa418"]]);export{w as default};
