import{h as s,P as a,x as e,l,y as t,F as i,E as c,J as n,A as o,z as d,Q as r,I as m,C as v,s as p}from"./vendor-0381d15c.js";import{_ as u,e as h}from"./index-ee8ceb03.js";const f={class:"com-time-line"},y={class:"left"},g={class:"num"},x={class:"num-text"},k={class:"right"},w={class:"title"},_={class:"desc"};var j=u(s({props:{list:{type:Array,default:()=>[]}},setup(s){const u=s,[j,A]=a(!1),C=()=>{A()},I=e((()=>u.list.length<=4||j.value?u.list:u.list.slice(0,4)));return(a,e)=>(l(),t("div",f,[(l(!0),t(i,null,c(o(I),((s,a)=>(l(),t("div",{key:a,class:n(["item",{last:a===o(I).length-1}])},[d("div",y,[d("div",g,[r(h,{name:"time-step"}),d("span",x,m(a+1),1)])]),d("div",k,[d("div",w,m(s.title),1),d("div",_,m(s.desc),1)])],2)))),128)),s.list.length>4?(l(),t("div",{key:0,class:"show-more",onClick:C},[v(m(o(j)?"收起":"展开")+" ",1),r(h,{name:"down",class:n(["icon",{showMore:o(j)}])},null,8,["class"])])):p("",!0)]))}}),[["__scopeId","data-v-46208f10"]]);export{j as P};
