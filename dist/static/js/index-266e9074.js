import{g as p,Q as h,y as v,j as t,n as a,F as f,G as g,L as _,A as o,z as s,J as l,C as y,p as C,t as k}from"./vendor-af6fda0a.js";import{_ as w,q as x}from"./index-125b94ab.js";const N={class:"com-time-line"},V={class:"left"},B={class:"num"},F={class:"right"},L={class:"title"},M={class:"desc"},T=p({props:{list:{type:Array,default:()=>[]}},setup(i){const e=i,[n,u]=h(!1),m=()=>{u()},r=v(()=>e.list.length<=4||n.value?e.list:e.list.slice(0,4));return(z,A)=>(t(),a("div",N,[(t(!0),a(f,null,g(o(r),(d,c)=>(t(),a("div",{key:c,class:_(["item",{last:c===o(r).length-1}])},[s("div",V,[s("div",B,l(c+1),1)]),s("div",F,[s("div",L,l(d.title),1),s("div",M,l(d.desc),1)])],2))),128)),i.list.length>4?(t(),a("div",{key:0,class:"show-more",onClick:m},[y(l(o(n)?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),C(x,{name:"down",class:_(["icon",{showMore:o(n)}])},null,8,["class"])])):k("",!0)]))}});var S=w(T,[["__scopeId","data-v-5c3058a2"]]);export{S as P};
