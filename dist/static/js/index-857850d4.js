import{h,R as p,z as v,k as t,p as o,F as f,H as g,M as _,B as a,A as s,L as l,E as y,s as k,v as w}from"./vendor-d6b13173.js";import{_ as C,d as x}from"./index-ab09c1f5.js";const B={class:"com-time-line"},M={class:"left"},N={class:"num"},V={class:"right"},F={class:"title"},L={class:"desc"},T=h({props:{list:{type:Array,default:()=>[]}},setup(i){const e=i,[n,u]=p(!1),m=()=>{u()},r=v(()=>e.list.length<=4||n.value?e.list:e.list.slice(0,4));return(z,A)=>(t(),o("div",B,[(t(!0),o(f,null,g(a(r),(d,c)=>(t(),o("div",{key:c,class:_(["item",{last:c===a(r).length-1}])},[s("div",M,[s("div",N,l(c+1),1)]),s("div",V,[s("div",F,l(d.title),1),s("div",L,l(d.desc),1)])],2))),128)),i.list.length>4?(t(),o("div",{key:0,class:"show-more",onClick:m},[y(l(a(n)?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),k(x,{name:"down",class:_(["icon",{showMore:a(n)}])},null,8,["class"])])):w("",!0)]))}});var P=C(T,[["__scopeId","data-v-50772375"]]);export{P};
