import{g as p,Q as h,y as v,j as t,n as o,F as f,G as g,L as _,A as a,z as s,J as l,C as y,p as C,t as k}from"./vendor-9d7eb2ed.js";import{_ as w,e as x}from"./index-5edbbd65.js";const N={class:"com-time-line"},V={class:"left"},B={class:"num"},F={class:"right"},L={class:"title"},M={class:"desc"},T=p({props:{list:{type:Array,default:()=>[]}},setup(i){const e=i,[n,u]=h(!1),m=()=>{u()},r=v(()=>e.list.length<=4||n.value?e.list:e.list.slice(0,4));return(z,A)=>(t(),o("div",N,[(t(!0),o(f,null,g(a(r),(d,c)=>(t(),o("div",{key:c,class:_(["item",{last:c===a(r).length-1}])},[s("div",V,[s("div",B,l(c+1),1)]),s("div",F,[s("div",L,l(d.title),1),s("div",M,l(d.desc),1)])],2))),128)),i.list.length>4?(t(),o("div",{key:0,class:"show-more",onClick:m},[y(l(a(n)?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),C(x,{name:"down",class:_(["icon",{showMore:a(n)}])},null,8,["class"])])):k("",!0)]))}});var S=w(T,[["__scopeId","data-v-50772375"]]);export{S as P};
