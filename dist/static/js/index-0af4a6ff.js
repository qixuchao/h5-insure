import{h as v,R as f,z as g,k as t,p as a,F as y,H as k,M as d,B as o,A as s,s as u,L as n,E as w,v as x}from"./vendor-4d9de129.js";import{_ as C,e as m}from"./index-b853de44.js";const B={class:"com-time-line"},M={class:"left"},N={class:"num"},V={class:"num-text"},F={class:"right"},L={class:"title"},T={class:"desc"},z=v({props:{list:{type:Array,default:()=>[]}},setup(i){const e=i,[l,p]=f(!1),h=()=>{p()},r=g(()=>e.list.length<=4||l.value?e.list:e.list.slice(0,4));return(A,D)=>(t(),a("div",B,[(t(!0),a(y,null,k(o(r),(_,c)=>(t(),a("div",{key:c,class:d(["item",{last:c===o(r).length-1}])},[s("div",M,[s("div",N,[u(m,{name:"time-step"}),s("span",V,n(c+1),1)])]),s("div",F,[s("div",L,n(_.title),1),s("div",T,n(_.desc),1)])],2))),128)),i.list.length>4?(t(),a("div",{key:0,class:"show-more",onClick:h},[w(n(o(l)?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),u(m,{name:"down",class:d(["icon",{showMore:o(l)}])},null,8,["class"])])):x("",!0)]))}});var S=C(z,[["__scopeId","data-v-46208f10"]]);export{S as P};
