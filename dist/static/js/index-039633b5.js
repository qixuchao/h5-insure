import{i as v,R as f,A as g,m as t,s as a,F as y,H as x,M as d,C as o,B as s,t as u,L as n,G as C,x as k}from"./vendor-87894311.js";import{_ as w,e as m}from"./index-dd334c46.js";const B={class:"com-time-line"},M={class:"left"},N={class:"num"},V={class:"num-text"},F={class:"right"},L={class:"title"},T={class:"desc"},A=v({props:{list:{type:Array,default:()=>[]}},setup(c){const e=c,[l,p]=f(!1),h=()=>{p()},r=g(()=>e.list.length<=4||l.value?e.list:e.list.slice(0,4));return(D,P)=>(t(),a("div",B,[(t(!0),a(y,null,x(o(r),(_,i)=>(t(),a("div",{key:i,class:d(["item",{last:i===o(r).length-1}])},[s("div",M,[s("div",N,[u(m,{name:"time-step"}),s("span",V,n(i+1),1)])]),s("div",F,[s("div",L,n(_.title),1),s("div",T,n(_.desc),1)])],2))),128)),c.list.length>4?(t(),a("div",{key:0,class:"show-more",onClick:h},[C(n(o(l)?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),u(m,{name:"down",class:d(["icon",{showMore:o(l)}])},null,8,["class"])])):k("",!0)]))}});var E=w(A,[["__scopeId","data-v-46208f10"]]);export{E as P};
