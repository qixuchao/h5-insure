import{k as s,R as a,b as l,s as e,B as t,H as i,I as c,N as n,E as d,C as o,S as r,M as m,G as v,y as p}from"./vendor-8df8a31f.js";import{_ as u,e as f}from"./index-0ba4cb7d.js";const h={class:"com-time-line"},y={class:"left"},g={class:"num"},k={class:"num-text"},b={class:"right"},w={class:"title"},x={class:"desc"};var _=u(s({props:{list:{type:Array,default:()=>[]}},setup(s){const u=s,[_,j]=a(!1),C=()=>{j()},I=l((()=>u.list.length<=4||_.value?u.list:u.list.slice(0,4)));return(a,l)=>(e(),t("div",h,[(e(!0),t(i,null,c(d(I),((s,a)=>(e(),t("div",{key:a,class:n(["item",{last:a===d(I).length-1}])},[o("div",y,[o("div",g,[r(f,{name:"time-step"}),o("span",k,m(a+1),1)])]),o("div",b,[o("div",w,m(s.title),1),o("div",x,m(s.desc),1)])],2)))),128)),s.list.length>4?(e(),t("div",{key:0,class:"show-more",onClick:C},[v(m(d(_)?"收起":"展开")+" ",1),r(f,{name:"down",class:n(["icon",{showMore:d(_)}])},null,8,["class"])])):p("",!0)]))}}),[["__scopeId","data-v-46208f10"]]);export{_ as P};
