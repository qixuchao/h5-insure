import{_ as s,d as a,G as l,x as t,c as e,g as i,F as c,h as d,B as n,l as o,i as r,f as m,I as p,t as v,n as u,j as h}from"./index-6a34609b.js";import"./pdfdist-5d72820d.js";const f={class:"com-time-line"},g={class:"left"},x={class:"num"},y={class:"num-text"},j={class:"right"},k={class:"title"},w={class:"desc"};var _=s(a({props:{list:{type:Array,default:()=>[]}},setup(s){const a=s,[_,I]=l(!1),b=()=>{I()},A=t((()=>a.list.length<=4||_.value?a.list:a.list.slice(0,4)));return(a,l)=>(e(),i("div",f,[(e(!0),i(c,null,d(o(A),((s,a)=>(e(),i("div",{key:a,class:n(["item",{last:a===o(A).length-1}])},[r("div",g,[r("div",x,[m(p,{name:"time-step"}),r("span",y,v(a+1),1)])]),r("div",j,[r("div",k,v(s.title),1),r("div",w,v(s.desc),1)])],2)))),128)),s.list.length>4?(e(),i("div",{key:0,class:"show-more",onClick:b},[u(v(o(_)?"收起":"展开")+" ",1),m(p,{name:"down",class:n(["icon",{showMore:o(_)}])},null,8,["class"])])):h("",!0)]))}}),[["__scopeId","data-v-ae1aa418"]]);export{_ as default};
