import{h as s,P as a,x as l,l as e,y as t,F as i,E as c,J as d,A as n,z as o,Q as r,I as m,C as v,s as p}from"./vendor-d6fdc679.js";import{_ as u,e as h}from"./index-ed1d5702.js";const f={class:"com-time-line"},y={class:"left"},g={class:"num"},x={class:"num-text"},k={class:"right"},w={class:"title"},_={class:"desc"};var j=u(s({props:{list:{type:Array,default:()=>[]}},setup(s){const u=s,[j,A]=a(!1),C=()=>{A()},I=l((()=>u.list.length<=4||j.value?u.list:u.list.slice(0,4)));return(a,l)=>(e(),t("div",f,[(e(!0),t(i,null,c(n(I),((s,a)=>(e(),t("div",{key:a,class:d(["item",{last:a===n(I).length-1}])},[o("div",y,[o("div",g,[r(h,{name:"time-step"}),o("span",x,m(a+1),1)])]),o("div",k,[o("div",w,m(s.title),1),o("div",_,m(s.desc),1)])],2)))),128)),s.list.length>4?(e(),t("div",{key:0,class:"show-more",onClick:C},[v(m(n(j)?"收起":"展开")+" ",1),r(h,{name:"down",class:d(["icon",{showMore:n(j)}])},null,8,["class"])])):p("",!0)]))}}),[["__scopeId","data-v-46208f10"]]);export{j as P};
