import{ag as s,d as a,aH as e,G as l,b as t,c as i,U as c,a4 as n,a0 as d,f as o,i as m,e as r,a1 as v,$ as p,j as u,h}from"./index-be39512e.js";const f={class:"com-time-line"},g={class:"left"},x={class:"num"},y={class:"num-text"},_={class:"right"},k={class:"title"},w={class:"desc"};var b=s(a({__name:"index",props:{list:{type:Array,default:()=>[]}},setup(s){const a=s,[b,j]=e(!1),A=()=>{j()},C=l((()=>a.list.length<=4||b.value?a.list:a.list.slice(0,4)));return(a,e)=>(t(),i("div",f,[(t(!0),i(c,null,n(o(C),((s,a)=>(t(),i("div",{key:a,class:d(["item",{last:a===o(C).length-1}])},[m("div",g,[m("div",x,[r(v,{name:"time-step"}),m("span",y,p(a+1),1)])]),m("div",_,[m("div",k,p(s.title),1),m("div",w,p(s.desc),1)])],2)))),128)),s.list.length>4?(t(),i("div",{key:0,class:"show-more",onClick:A},[u(p(o(b)?"收起":"展开")+" ",1),r(v,{name:"down",class:d(["icon",{showMore:o(b)}])},null,8,["class"])])):h("",!0)]))}}),[["__scopeId","data-v-ae1aa418"]]);export{b as default};
