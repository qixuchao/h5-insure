import{k as s,R as a,b as e,s as l,B as t,H as i,I as c,N as n,E as o,C as d,S as r,M as m,G as v,y as p}from"./vendor-225246ae.js";import{_ as u,e as f}from"./index-fdcc502e.js";const h={class:"com-time-line"},y={class:"left"},g={class:"num"},k={class:"num-text"},w={class:"right"},x={class:"title"},_={class:"desc"};var j=u(s({props:{list:{type:Array,default:()=>[]}},setup(s){const u=s,[j,C]=a(!1),I=()=>{C()},M=e((()=>u.list.length<=4||j.value?u.list:u.list.slice(0,4)));return(a,e)=>(l(),t("div",h,[(l(!0),t(i,null,c(o(M),((s,a)=>(l(),t("div",{key:a,class:n(["item",{last:a===o(M).length-1}])},[d("div",y,[d("div",g,[r(f,{name:"time-step"}),d("span",k,m(a+1),1)])]),d("div",w,[d("div",x,m(s.title),1),d("div",_,m(s.desc),1)])],2)))),128)),s.list.length>4?(l(),t("div",{key:0,class:"show-more",onClick:I},[v(m(o(j)?"收起":"展开")+" ",1),r(f,{name:"down",class:n(["icon",{showMore:o(j)}])},null,8,["class"])])):p("",!0)]))}}),[["__scopeId","data-v-46208f10"]]);export{j as P};
