import{_ as s,d as a,G as l,x as e,c as t,g as i,F as c,h as d,B as n,l as o,i as r,f as m,I as p,t as v,n as u,j as f}from"./index-fe8152f2.js";import"./pdfh5-e5c0db2a.js";const h={class:"com-time-line"},g={class:"left"},x={class:"num"},y={class:"num-text"},j={class:"right"},k={class:"title"},w={class:"desc"};var _=s(a({props:{list:{type:Array,default:()=>[]}},setup(s){const a=s,[_,I]=l(!1),b=()=>{I()},A=e((()=>a.list.length<=4||_.value?a.list:a.list.slice(0,4)));return(a,l)=>(t(),i("div",h,[(t(!0),i(c,null,d(o(A),((s,a)=>(t(),i("div",{key:a,class:n(["item",{last:a===o(A).length-1}])},[r("div",g,[r("div",x,[m(p,{name:"time-step"}),r("span",y,v(a+1),1)])]),r("div",j,[r("div",k,v(s.title),1),r("div",w,v(s.desc),1)])],2)))),128)),s.list.length>4?(t(),i("div",{key:0,class:"show-more",onClick:b},[u(v(o(_)?"收起":"展开")+" ",1),m(p,{name:"down",class:n(["icon",{showMore:o(_)}])},null,8,["class"])])):f("",!0)]))}}),[["__scopeId","data-v-ae1aa418"]]);export{_ as default};
