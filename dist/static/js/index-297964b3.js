import{_ as s,d as a,G as e,x as l,c as t,g as i,F as c,h as d,B as n,l as o,i as r,f as m,I as p,t as v,n as u,j as h}from"./index-fce952e7.js";import"./pdfh5-e5c0db2a.js";const f={class:"com-time-line"},g={class:"left"},x={class:"num"},y={class:"num-text"},j={class:"right"},k={class:"title"},w={class:"desc"};var _=s(a({props:{list:{type:Array,default:()=>[]}},setup(s){const a=s,[_,I]=e(!1),b=()=>{I()},A=l((()=>a.list.length<=4||_.value?a.list:a.list.slice(0,4)));return(a,e)=>(t(),i("div",f,[(t(!0),i(c,null,d(o(A),((s,a)=>(t(),i("div",{key:a,class:n(["item",{last:a===o(A).length-1}])},[r("div",g,[r("div",x,[m(p,{name:"time-step"}),r("span",y,v(a+1),1)])]),r("div",j,[r("div",k,v(s.title),1),r("div",w,v(s.desc),1)])],2)))),128)),s.list.length>4?(t(),i("div",{key:0,class:"show-more",onClick:b},[u(v(o(_)?"收起":"展开")+" ",1),m(p,{name:"down",class:n(["icon",{showMore:o(_)}])},null,8,["class"])])):h("",!0)]))}}),[["__scopeId","data-v-ae1aa418"]]);export{_ as default};
