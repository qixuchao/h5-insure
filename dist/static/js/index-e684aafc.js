import{h as s,P as a,x as l,l as e,y as t,F as i,E as c,J as n,A as o,z as d,Q as r,I as m,C as v,s as p}from"./vendor-372f2d73.js";import{_ as u,e as f}from"./index-76603f65.js";const h={class:"com-time-line"},y={class:"left"},g={class:"num"},x={class:"num-text"},k={class:"right"},w={class:"title"},_={class:"desc"};var j=u(s({props:{list:{type:Array,default:()=>[]}},setup(s){const u=s,[j,A]=a(!1),C=()=>{A()},I=l((()=>u.list.length<=4||j.value?u.list:u.list.slice(0,4)));return(a,l)=>(e(),t("div",h,[(e(!0),t(i,null,c(o(I),((s,a)=>(e(),t("div",{key:a,class:n(["item",{last:a===o(I).length-1}])},[d("div",y,[d("div",g,[r(f,{name:"time-step"}),d("span",x,m(a+1),1)])]),d("div",k,[d("div",w,m(s.title),1),d("div",_,m(s.desc),1)])],2)))),128)),s.list.length>4?(e(),t("div",{key:0,class:"show-more",onClick:C},[v(m(o(j)?"收起":"展开")+" ",1),r(f,{name:"down",class:n(["icon",{showMore:o(j)}])},null,8,["class"])])):p("",!0)]))}}),[["__scopeId","data-v-46208f10"]]);export{j as P};
