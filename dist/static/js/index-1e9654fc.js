import{_ as s,d as a,bQ as e,j as l,o as t,c as i,F as c,n,p as d,u as o,a as m,b as r,ae as v,e as p,a8 as u,q as h}from"./index-17cd0657.js";const _={class:"com-time-line"},f={class:"left"},g={class:"num"},x={class:"num-text"},y={class:"right"},k={class:"title"},w={class:"desc"};var b=s(a({__name:"index",props:{list:{type:Array,default:()=>[]}},setup(s){const a=s,[b,j]=e(!1),q=()=>{j()},A=l((()=>a.list.length<=4||b.value?a.list:a.list.slice(0,4)));return(a,e)=>(t(),i("div",_,[(t(!0),i(c,null,n(o(A),((s,a)=>(t(),i("div",{key:a,class:d(["item",{last:a===o(A).length-1}])},[m("div",f,[m("div",g,[r(v,{name:"time-step"}),m("span",x,p(a+1),1)])]),m("div",y,[m("div",k,p(s.title),1),m("div",w,p(s.desc),1)])],2)))),128)),s.list.length>4?(t(),i("div",{key:0,class:"show-more",onClick:q},[u(p(o(b)?"收起":"展开")+" ",1),r(v,{name:"down",class:d(["icon",{showMore:o(b)}])},null,8,["class"])])):h("",!0)]))}}),[["__scopeId","data-v-ae1aa418"]]);export{b as default};
