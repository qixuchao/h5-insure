import{_ as s,d as a,H as l,y as e,c as t,g as i,F as c,h as n,C as d,l as o,i as r,f as m,J as v,t as p,n as u,j as h}from"./index-ede465c8.js";const g={class:"com-time-line"},y={class:"left"},f={class:"num"},k={class:"num-text"},w={class:"right"},x={class:"title"},_={class:"desc"};var j=s(a({props:{list:{type:Array,default:()=>[]}},setup(s){const a=s,[j,C]=l(!1),A=()=>{C()},F=e((()=>a.list.length<=4||j.value?a.list:a.list.slice(0,4)));return(a,l)=>(t(),i("div",g,[(t(!0),i(c,null,n(o(F),((s,a)=>(t(),i("div",{key:a,class:d(["item",{last:a===o(F).length-1}])},[r("div",y,[r("div",f,[m(v,{name:"time-step"}),r("span",k,p(a+1),1)])]),r("div",w,[r("div",x,p(s.title),1),r("div",_,p(s.desc),1)])],2)))),128)),s.list.length>4?(t(),i("div",{key:0,class:"show-more",onClick:A},[u(p(o(j)?"收起":"展开")+" ",1),m(v,{name:"down",class:d(["icon",{showMore:o(j)}])},null,8,["class"])])):h("",!0)]))}}),[["__scopeId","data-v-ae1aa418"]]);export{j as P};
